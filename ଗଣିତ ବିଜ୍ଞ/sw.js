// --- sw.js (Guaranteed Offline Fix v1.1) ---

// 1. Define a name and version for our cache.
// IMPORTANT: I've updated this to v1.1. If you make more changes, update it to v1.2, etc.
const CACHE_NAME = 'sb-ganita-bigyan-v1.1';

// 2. List all the files your app needs to work offline.
const URLS_TO_CACHE = [
  './', // The root of your site (the slash is important)
  'index.html',
  'manifest.json',
  'icons/icon-512x512.png', // CHANGED: Caching the correct icon file

  // External resources also need to be cached.
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Oriya:wght@400;700&family=Poppins:wght@400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
];

// 3. The 'install' event: happens when the service worker is first installed.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache. Caching all app shell files.');
        return cache.addAll(URLS_TO_CACHE);
      })
      .catch(error => {
        console.error('Failed to cache essential files during install:', error);
      })
  );
  self.skipWaiting();
});

// 4. The 'activate' event: Used to clean up old caches.
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
  return self.clients.claim();
});

// 5. The 'fetch' event: Intercepts every network request.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    // Strategy: Cache-First, then Network.
    caches.match(event.request)
      .then(cachedResponse => {
        // If the file is in the cache, return it immediately.
        if (cachedResponse) {
          return cachedResponse;
        }

        // If not in cache, try to fetch it from the network.
        return fetch(event.request).catch(error => {
            console.log('Fetch failed; network request for', event.request.url, 'failed.', error);
        });
      })
  );
});
