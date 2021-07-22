"use strict";

var cacheData = "appV1";
(void 0).addEventListener("install", function (event) {
  event.waitUntil(caches.open(cacheData).then(function (cache) {
    cache.addAll(['/kotlinskidev/index.html', '/kotlinskidev/static/js/bundle.js', '/kotlinskidev/static/js/main.chunk.js', '/kotlinskidev/static/js/vendors~main.chunk.js']);
  }));
});
(void 0).addEventListener('fetch', function (event) {
  console.log(event.request.url);
  event.respondWith(caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
  }));
});