let cacheName = "codePwa"

var urlCache = [
    '/static/js/bundle.js',
    '/manifest.json',
    '/static/media/logo.e1a6050fdec940204672.jpg',
    '/logo192.png',
    '/favicon.ico',
    '/ws',
    '/'
]

this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheName)
        .then((cache)=>{
            return cache.addAll(urlCache)
        })
    )
})

this.addEventListener('fetch',(event)=>{
    if(!navigator.onLine){
        console.log("offline")
        if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
            event.waitUntil(
                this.registration.showNotification("modeNet", {
                    body: "Offline",
                    icon:'http://localhost:3000/logo192.png'
                })
            )
        }
        event.respondWith(
            caches.match(event.request)
            .then((response)=>{
                if(response){
                    return response
                }              
                let fUrl = event.request.clone()
                fetch(fUrl)
            })
        )
    }
})

this.addEventListener('activate',function(event){
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
                cacheNames.filter(function(cacheNames){
                        //                    
                }).map(function(cacheNames){
                    return caches.delete(cacheNames);
                })
            )
        })
    )
})