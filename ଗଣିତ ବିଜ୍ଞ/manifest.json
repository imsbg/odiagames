// --- sw.js (Improved Version) ---

// 1. Define a name for our cache
// IMPORTANT: Change this version number every time you update the service worker
const CACHE_NAME = 'sb-ganita-bigyan-v1.4'; 

// 2. List all the essential files your app needs to work offline
const URLS_TO_CACHE = [
  '/', // The root of your site
  'index.html',
  'manifest.json',
  
  // Cache the external resources
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Oriya:wght@400;700&family=Poppins:wght@400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',

  // Cache your app icons (add all important ones)
  'icons/icon-192x192.png',
  'icons/icon-512x512.png'
];

// 3. The 'install' event: happens when the service worker is first installed.
// We open our cache and add all the essential files to it.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching essential files');
        return cache.addAll(URLS_TO_CACHE);
      })
      .catch(error => {
        console.error('Failed to cache essential files:', error);
      })
  );
  self.skipWaiting(); // Force the new service worker to become active
});

// 4. The 'activate' event: happens when the service worker becomes active.
// We use this to clean up old, unused caches.
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Take control of all open clients
});

// 5. The 'fetch' event: This is the magic. It intercepts every network request.
// We'll use a "cache-first" strategy.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // If the file is in the cache, return it.
        if (cachedResponse) {
          return cachedResponse;
        }
        // If the file is not in the cache, fetch it from the network.
        return fetch(event.request);
      })
  );
});
