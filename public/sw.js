self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('first-app')
        .then(function(cache) {
          cache.addAll([
            '/',
            '/index.html',
            '/help/index.html',
            '/src/css/app.css',
            '/src/css/feed.css',
            '/src/css/help.css',
            '/src/js/app.js',
            '/src/js/feed.js',
            '/src/js/material.min.js',
            '/manifest.json',
          ])
        })
    );
    return self.clients.claim();
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(res) {
          return res;
        })
    );
  });