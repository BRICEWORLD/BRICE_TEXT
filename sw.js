const CACHE_NAME = "brice-text-v4";

const APP_SCOPE = "/BRICE_TEXT/";

const FILES_TO_CACHE = [
    APP_SCOPE,
    APP_SCOPE + "index.html",
    APP_SCOPE + "style.css",
    APP_SCOPE + "script.js",
    APP_SCOPE + "quotes.js",
    APP_SCOPE + "manifest.json",
    APP_SCOPE + "icons/icon-192.png",
    APP_SCOPE + "icons/icon-512.png"
];


// ================================
// نصب Service Worker
// ================================

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
            .then(() => self.skipWaiting())

    );

});


// ================================
// فعال شدن نسخه جدید
// ================================

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
            .then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if (key.startsWith("brice-text-") && key !== CACHE_NAME) {
                            return caches.delete(key);
                        }

                    })

                );

            })
            .then(() => self.clients.claim())

    );

});


// ================================
// دریافت فایل‌ها
// ================================

self.addEventListener("fetch", event => {

    const request = event.request;

    // فقط درخواست‌های GET
    if (request.method !== "GET") {
        return;
    }

    // فقط محدوده BRICE TEXT
    const url = new URL(request.url);

    if (url.origin !== self.location.origin) {
        return;
    }

    if (!url.pathname.startsWith(APP_SCOPE)) {
        return;
    }

    event.respondWith(

        caches.match(request)
            .then(cachedResponse => {

                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(request)
                    .then(networkResponse => {

                        // ذخیره پاسخ‌های معتبر داخل Cache
                        if (networkResponse && networkResponse.ok) {

                            const responseClone = networkResponse.clone();

                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(request, responseClone);
                                });

                        }

                        return networkResponse;

                    });

            })
            .catch(() => {

                // اگر صفحه‌ای در حالت آفلاین درخواست شد،
                // صفحه اصلی BRICE TEXT نمایش داده شود.
                if (request.mode === "navigate") {
                    return caches.match(APP_SCOPE + "index.html");
                }

                return new Response("", {
                    status: 503,
                    statusText: "Service Unavailable"
                });

            })

    );

});