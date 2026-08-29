const CACHE_NAME = "brice-text-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./quotes.js",
    "./manifest.json",

    // آیکون‌های برنامه
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];


// ================================
// نصب برنامه
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

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }

                })

            );

        }).then(() => self.clients.claim())

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

    );

});
