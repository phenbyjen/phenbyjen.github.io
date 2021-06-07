'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "android-icon-144x144.png": "d801ef231b534d4e35dba8a836d3656d",
"android-icon-192x192.png": "060335ff566b0b35fc06483bf9f34acb",
"android-icon-36x36.png": "65b911a5303847b6e32ba6bb09e5d4c0",
"android-icon-48x48.png": "44bf4364b9bc2a2c9e33071b9622dd79",
"android-icon-72x72.png": "dd571bfdf2e250ff9f881709c13852fb",
"android-icon-96x96.png": "76e6e8a40384d46bd8bec29865cb2949",
"apple-icon-114x114.png": "6fd569edebb9ccec83d7b1c6ba9d8dbd",
"apple-icon-120x120.png": "1499fbad497685f53560f3d95cf1b641",
"apple-icon-144x144.png": "d801ef231b534d4e35dba8a836d3656d",
"apple-icon-152x152.png": "1e3b09e63d7c06ed63c2ccef9c493c32",
"apple-icon-180x180.png": "d0875fd360ea8e4475fb0796b19fe9f9",
"apple-icon-57x57.png": "c9da4bb28aa86e3e46e6e34105d61295",
"apple-icon-60x60.png": "041d08c5f49b25fd8200e7c20ad073e3",
"apple-icon-72x72.png": "dd571bfdf2e250ff9f881709c13852fb",
"apple-icon-76x76.png": "103002f1a63e175881574153e2195b21",
"apple-icon-precomposed.png": "34a05bd2cd769f8504da40d9f9b8d497",
"apple-icon.png": "34a05bd2cd769f8504da40d9f9b8d497",
"assets/AssetManifest.json": "182f67e5488a3e69a126cfb6fd52a6e2",
"assets/assets/background.jpg": "fc09f2bc900494c1c855f67d6242100c",
"assets/assets/ball.png": "93a48b8ac3c69071bac4c1bb71b027c6",
"assets/assets/easycard1.jpg": "730a4485334a14367310c2f706a620c3",
"assets/assets/easycard2.jpg": "d78df0d87d6766a86505d485dd209315",
"assets/assets/easycard3.jpg": "d08d6c40ba0dd1a4e1c8379b317b8c4a",
"assets/assets/title.png": "0da33823d121e2da20f300278b04007e",
"assets/FontManifest.json": "8286df9aefe460365b1000816a1aa239",
"assets/fonts/CustomIcon.ttf": "e84d98bec4d2c20b58e63a937a02a972",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9556db4ea23be5e8cec4a9f0ba5470fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"favicon-16x16.png": "702f48e3ffb497a7d7fe5cd96903da25",
"favicon-32x32.png": "18b6a4f82bc6f19443df7f3beb84e270",
"favicon-96x96.png": "76e6e8a40384d46bd8bec29865cb2949",
"favicon.ico": "bf96b78958f6a9e655389f77a4d592ce",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0734e78434c46a8eb78ffca27d71f5e9",
"/": "0734e78434c46a8eb78ffca27d71f5e9",
"main.dart.js": "a473a181e5066ccc5d6fc09a6d52a6c4",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"ms-icon-144x144.png": "d801ef231b534d4e35dba8a836d3656d",
"ms-icon-150x150.png": "255d84d73847da0abe4dbc9475a7a5f9",
"ms-icon-310x310.png": "d5f03d758811cbb7474f64c14ff6da20",
"ms-icon-70x70.png": "f9d8255803eb9beac7304d671b39edc4",
"version.json": "2cfee69756da616ddae7c8daa714cb5c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
