self.addEventListener('install', event => {
  console.log('[ServiceWorker] Instalando...');

  event.waitUntil(
    caches.open('app-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './grafico.html',
        './imagem-detalhe.html',
        './style.css',
        './auth.css',
        './script.js',
        './auth.js',
        './statistics.js',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        './img/Caixa-ladoA.png',
        './img/Caixa-ladoB1.png',
        './img/Caixa-ladoB2.png',
        './img/Caixa-ladoC.png',
        './img/Caixa-ladoD.png',
        './img/Raizer-ladoA.png',
        './img/Raizer-ladoB.png',
        './img/Raizer-ladoC.png',
        './img/Raizer-ladoD.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  const url = event.request.url;

  // Ignora chamadas do Firebase
  if (url.includes('firebase')) return;

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
