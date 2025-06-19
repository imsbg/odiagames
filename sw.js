const CACHE_NAME = 'sb-ganita-bigyan-v1.3';
const URLS_TO_CACHE = [
  '/',
  'index.html',
  'manifest.json',
  // Since CSS and JS are inline, we don't need to cache separate files for them.
  // We need to cache the external fonts and icons.
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Oriya:wght@400;700&family=Poppins:wght@400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
];

// Install the service worker and cache all the app's shell files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching files');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Fetch event: serve from cache if available, otherwise fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Not in cache - fetch from network
        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              if (event.request.url.includes('fonts.gstatic.com')) {
                  // Don't cache opaque responses for fonts, just return them
                  return response;
              }
            }
            
            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                // Don't cache Font Awesome webfonts, as they are loaded by the CSS
                if (!event.request.url.includes('ka-f.fontawesome.com')) {
                   cache.put(event.request, responseToCache);
                }
              });

            return response;
          }
        );
      })
    );
});


// Activate event: clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
