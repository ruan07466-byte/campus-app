// service worker mínimo — só o necessário pra tornar o app instalável.
// Não faz cache agressivo, então o app sempre carrega a versão mais nova.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
