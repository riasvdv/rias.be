import {registerRoute} from 'workbox-routing/registerRoute.mjs';
import {CacheFirst} from 'workbox-strategies/CacheFirst.mjs';
import {StaleWhileRevalidate} from 'workbox-strategies/StaleWhileRevalidate.mjs';
import {Plugin as ExpirationPlugin} from 'workbox-expiration/Plugin.mjs';

registerRoute('https://fonts.googleapis.com/(.*)', new CacheFirst({
    cacheName: 'googleapis',
    plugins: [new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days

    })],
    cacheableResponse: {
        statuses: [0, 200]
    }
}));

registerRoute(/\.(?:png|gif|jpg|svg)$/, new CacheFirst({
    cacheName: 'images-cache'
}));

registerRoute(/.*(?:googleapis)\.com.*$/, new StaleWhileRevalidate({
    cacheName: 'googleapis-cache'
}));

registerRoute(/.*(?:gstatic)\.com.*$/, new StaleWhileRevalidate({
    cacheName: 'gstatic-cache'
}));

const cacheVersion = 4;
const currentCache = {
    offline: 'offline-cache-' + cacheVersion
};

self.addEventListener('install', event => {
    event.waitUntil(caches.open(currentCache.offline).then(cache => {
        // External request, avoid CORS troubles
        [
            'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js',
            'https://fonts.gstatic.com/s/firamono/v8/N0bX2SlFPv1weGeLZDtgJv7Ss9XZYQ.woff2'
        ].map(url => {
            const request = new Request(url, {
                mode: 'no-cors'
            });

            fetch(request).then(function (response) {
                return cache.put(request, response);
            });
        });
        return cache.addAll(['/css/site.css', '/js/site.js', '/assets/offline.gif', '/offline']);
    }).then(() => self.skipWaiting()));
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') {
        return;
    }

    // request.mode = navigate isn't supported in all browsers
    // so include a check for Accept: text/html header.
    if (event.request.mode === 'navigate' || event.request.headers.get('accept').includes('text/html')) {
        event.respondWith(fetch(event.request.url).then(response => {
            // Prevent service worker redirect errors
            return response.redirected ? Response.redirect(response.url) : response;
        })["catch"](error => caches.match('/offline')));
    } else {
        // Respond with everything else if we can
        event.respondWith(caches.match(event.request).then(response => response || fetch(event.request, {
            cache: 'force-cache'
        })));
    }
});

// Cache clean up
self.addEventListener('activate', event => {
    event.waitUntil(caches.keys().then(cacheNames => Promise.all(
        cacheNames
            .filter(cacheName => cacheName !== currentCache.offline)
            .map(cacheName => caches["delete"](cacheName))
    )));
});
