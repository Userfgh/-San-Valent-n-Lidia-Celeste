self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/uno-preview.png',
        '/dos-preview.png',
        '/tres-preview.png',
        '/01.mp3', // Incluye el archivo de audio en la caché
        '/styles.css',
        '/sw.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
