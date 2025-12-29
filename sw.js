const CACHE_NAME = 'angga-portfolio-v3';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/skills.html',
    '/projects.html',
    '/contact.html',
    '/css/style.css',
    '/js/main.js',
    '/js/translations.js'
];

// Install event - Skip waiting to activate immediately
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - Network First strategy (always try network first)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // If we got a valid response, clone it and update cache
                if (response && response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseClone);
                        });
                }
                return response;
            })
            .catch(() => {
                // If network fails, try cache as fallback
                return caches.match(event.request);
            })
    );
});

// Activate event - Clear old caches immediately
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Take control of all pages immediately
            return self.clients.claim();
        })
    );
});
