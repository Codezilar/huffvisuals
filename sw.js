/**
 * Service Worker for HUFF Visuals
 * Enables offline functionality and PWA capabilities
 */

const CACHE_NAME = 'huff-visuals-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js'
];

// Install event - cache essential files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Service Worker: Cache opened');
            return cache.addAll(urlsToCache).catch(err => {
                console.log('Service Worker: Cache addAll error', err);
            });
        })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    // Use cache first strategy for GET requests
    if (event.request.method === 'GET') {
        event.respondWith(
            caches.match(event.request).then(response => {
                // Return cached response if available
                if (response) {
                    return response;
                }

                // Otherwise fetch from network
                return fetch(event.request).then(response => {
                    // Don't cache if not a success response
                    if (!response || response.status !== 200) {
                        return response;
                    }

                    // Cache the new response
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });

                    return response;
                }).catch(() => {
                    // Return offline page if available
                    return caches.match('/index.html');
                });
            })
        );
    }
});

// Handle messages from clients
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
