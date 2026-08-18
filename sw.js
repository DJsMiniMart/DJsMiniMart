// Minimal service worker: no caching, always fetches fresh from the network.
// This exists only so browsers treat the site as an installable PWA -
// it never serves stale content, since it doesn't cache anything.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
