// Service Worker for caching critical assets
const CACHE_NAME = 'dumpster-diverz-v1';
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/fonts/poppins-bold.woff2',
  '/fonts/inter-regular.woff2',
  '/assets/dumpster-diverz-logo-optimized.webp'
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CRITICAL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - cache-first strategy for assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache-first for JS, CSS, fonts, and images
  if (
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'font' ||
    request.destination === 'image'
  ) {
    event.respondWith(
      caches.match(request)
        .then((cached) => {
          if (cached) {
            return cached;
          }
          return fetch(request).then((response) => {
            // Cache valid responses
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseClone);
              });
            }
            return response;
          });
        })
        .catch(() => {
          // Return cached version even if fetch fails
          return caches.match(request);
        })
    );
  } else {
    // Network-first for HTML and API calls
    event.respondWith(
      fetch(request).catch(() => caches.match(request))
    );
  }
});
