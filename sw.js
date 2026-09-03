const CACHE_NAME = "brice-text-v3";

const FILES_TO_CACHE = [
    "/BRICE_TEXT/",
    "/BRICE_TEXT/index.html",
    "/BRICE_TEXT/style.css",
    "/BRICE_TEXT/script.js",
    "/BRICE_TEXT/quotes.js",
    "/BRICE_TEXT/manifest.json",
    "/BRICE_TEXT/icons/icon-192.png",
    "/BRICE_TEXT/icons/icon-512.png"
];


// ================================
// نصب Service Worker
// ================================

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(cache => {

            return Promise.all(

                FILES_TO_CACHE.map(file => {

                    return fetch(file)
                    .then(response => {

                        if (response.ok) {
                            return cache.put(file, response);
                        }

                    })
                    .catch(() => {

                        console.log("Cache failed:", file);

                    });

                })

            );

        })
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

                    if (key !== CACHE_NAME) {

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

    event.respondWith(

        caches.match(event.request)
        .then(response => {

            return response || fetch(event.request);

        })
        .catch(() => {

            return caches.match("/BRICE_TEXT/index.html");

        })

    );

});
