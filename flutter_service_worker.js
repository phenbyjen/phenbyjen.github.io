'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2cfee69756da616ddae7c8daa714cb5c",
"favicon.ico": "bf96b78958f6a9e655389f77a4d592ce",
"index.html": "80211f5c9dca9fb05db3404c9408d668",
"/": "80211f5c9dca9fb05db3404c9408d668",
"css/init.css": "1d81ce40136bfdce485723bc6ae51b71",
"main.dart.js": "26fd2f3a4074a770c306fda213754efb",
"logo.png": "a941416fe3b792bfb5b4948fa21b4293",
"icons/favicon-16x16.png": "702f48e3ffb497a7d7fe5cd96903da25",
"icons/apple-icon.png": "34a05bd2cd769f8504da40d9f9b8d497",
"icons/apple-icon-144x144.png": "d801ef231b534d4e35dba8a836d3656d",
"icons/android-icon-192x192.png": "060335ff566b0b35fc06483bf9f34acb",
"icons/apple-icon-precomposed.png": "34a05bd2cd769f8504da40d9f9b8d497",
"icons/apple-icon-114x114.png": "6fd569edebb9ccec83d7b1c6ba9d8dbd",
"icons/ms-icon-310x310.png": "d5f03d758811cbb7474f64c14ff6da20",
"icons/ms-icon-144x144.png": "d801ef231b534d4e35dba8a836d3656d",
"icons/apple-icon-57x57.png": "c9da4bb28aa86e3e46e6e34105d61295",
"icons/apple-icon-152x152.png": "1e3b09e63d7c06ed63c2ccef9c493c32",
"icons/ms-icon-150x150.png": "255d84d73847da0abe4dbc9475a7a5f9",
"icons/android-icon-72x72.png": "dd571bfdf2e250ff9f881709c13852fb",
"icons/android-icon-96x96.png": "76e6e8a40384d46bd8bec29865cb2949",
"icons/android-icon-36x36.png": "65b911a5303847b6e32ba6bb09e5d4c0",
"icons/apple-icon-180x180.png": "d0875fd360ea8e4475fb0796b19fe9f9",
"icons/favicon-96x96.png": "76e6e8a40384d46bd8bec29865cb2949",
"icons/android-icon-48x48.png": "44bf4364b9bc2a2c9e33071b9622dd79",
"icons/apple-icon-76x76.png": "103002f1a63e175881574153e2195b21",
"icons/apple-icon-60x60.png": "041d08c5f49b25fd8200e7c20ad073e3",
"icons/android-icon-144x144.png": "d801ef231b534d4e35dba8a836d3656d",
"icons/apple-icon-72x72.png": "dd571bfdf2e250ff9f881709c13852fb",
"icons/apple-icon-120x120.png": "1499fbad497685f53560f3d95cf1b641",
"icons/favicon-32x32.png": "18b6a4f82bc6f19443df7f3beb84e270",
"icons/ms-icon-70x70.png": "f9d8255803eb9beac7304d671b39edc4",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"assets/AssetManifest.json": "1af3414c2e55cc4905818068e0562e57",
"assets/NOTICES": "a5664dfeaf84207a92d02919b6e8b7a0",
"assets/FontManifest.json": "8286df9aefe460365b1000816a1aa239",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/flutter_arc_text/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/fonts/CustomIcon.ttf": "e84d98bec4d2c20b58e63a937a02a972",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/penker2.png": "a64367aba65bec055f18fe927258c7b7",
"assets/assets/penker3.png": "8adc0bd5cee72b2fe7a8beaee9869167",
"assets/assets/penker1.png": "879a41b3b21dee8fc8fb9b384cd0d522",
"assets/assets/ball.png": "8317f915045adf9669600bc8bc3c88ff",
"assets/assets/penker4.png": "cf15d3cf82e52106eba10bdf8b1645be",
"assets/assets/title.png": "0da33823d121e2da20f300278b04007e",
"assets/assets/penker5.png": "d021395f820492f8abb49269a037ff9a",
"assets/assets/promote/1625757635922_21700.png": "302398925e2216366f9a5b26cfa489ef",
"assets/assets/promote/1625756625573_59300.png": "03aec3437ba66e17959edb5333be6694",
"assets/assets/promote/1625757147423_64300.png": "d61d9eb100dea65d1e4a1a23dc58c133",
"assets/assets/promote/1626341492681_59000.png": "a2213023592fd18ac0fef201a1d124a1",
"assets/assets/promote/1625758161455_34500.png": "a1255950c87e9a27e56d7b892574323e",
"assets/assets/promote/1625756400747_13300.png": "e27e4189ee7db8d7843d71108fbe6bc6",
"assets/assets/promote/1625758698088_99600.png": "994ea601e0977af886236b326dcadf0d",
"assets/assets/promote/1625490134793_73200.png": "14ea61a4986ab0f81e18bdf9a455c75a",
"assets/assets/promote/1626341857067_83800.png": "fb3c3362bbdde836c9d3289bb16bd5e9",
"assets/assets/promote/1625758044126_20100.png": "b7530841a6080c3fed35b0751c41c457",
"assets/assets/promote/1625758535266_55800.png": "a2fd5718b32721018c1a7f58cdb86c1d",
"assets/assets/promote/1625756736562_12500.png": "f6b6dabd4f07c2b19264b393bc57a074",
"assets/assets/background.jpg": "dbad3f2c509e04c82c377a99bdf3d326",
"assets/assets/penker.svg": "15d012370d4d3bd384ecc85a6014b06a",
"assets/assets/shadow.png": "930d294fa6e670ea9cbe75319e8821df",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8"
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
