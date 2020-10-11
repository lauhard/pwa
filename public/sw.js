/**
 * NOTE Service worker
 * Service worker runs in a separate thread as a background process.
 * Main purpose: handling events, with fetch it works like a network proxy.
 *
 * properties
 * - scope: control the scope of the service worker
 *      type: object example: {scope: '/<pagename>/' }
 * 
 * states
 * -
 * 
 * lifecycle events
 * - install
 * - acitvate
 * 
 * events
 * - fetch: will be emitted when script assets, css or images gets loaded
 */

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("first-app").then(function (cache) {
            cache.addAll([
                "/",
                "/index.html",
                "/help/index.html",
                "/src/css/app.css",
                "/src/css/feed.css",
                "/src/css/help.css",
                "/src/js/app.js",
                "/src/js/feed.js",
                "/src/js/material.min.js",
                "/manifest.json",
            ]);
        })
    );
    console.info(`Service worker`, `installed...`);
    console.info("event: ", event)
});

/**
 * NOTE Activete service worker on page reload
 * claim method lives in Client interface  of a service worker
 */
self.addEventListener("activate", function (event) {
    console.info(`Service worker`, `activating...`);
    console.info("event: ", event)
    return event.waitUntil(self.clients.claim());
});

/**
 * NOTE Fetch
 * every outgoing fetch request goes through the service worker
 * !respondWith you can intercept and override the response
 * 
*/
self.addEventListener("fetch", function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});
