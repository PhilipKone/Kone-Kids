const CACHE_NAME = 'kone-kids-cache-v4';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/mascot.svg',
  '/programs/coding.png',
  '/programs/robotics.png',
  '/programs/ai.png'
];

// Install: cache static assets immediately
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

// Activate: clear old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: Network First, fallback to cache when offline
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const isSelfOrigin = event.request.url.startsWith(self.location.origin);

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Dynamically cache same-origin resources to ensure offline gameplay
        if (response.status === 200 && isSelfOrigin) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            try {
              cache.put(event.request, clone);
            } catch (e) {
              console.warn('[Kone SW] Cache put failed:', e);
            }
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) return cachedResponse;
          // Fallback to SPA shell when navigating HTML pages offline
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('/') || caches.match('/index.html');
          }
        });
      })
  );
});
