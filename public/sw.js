// @ts-nocheck
let cacheData = "appV1"

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/bundle.js',
                '/static/media/logo.e1a6050fdec940204672.jpg',
                '/favicon.ico',
                '/manifest.json',
                '/logo192.png',
                '/ws',
                '/index.html',
                '/',
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((result)=>{
            if (result) {
                return result
            }
        })
    )
})