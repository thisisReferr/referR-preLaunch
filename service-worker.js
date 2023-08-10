importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js");

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.CacheFirst(),
);

workbox.routing.registerRoute(
  new RegExp(".+/web-components/.+.js$"),
  new workbox.strategies.StaleWhileRevalidate(),
);
