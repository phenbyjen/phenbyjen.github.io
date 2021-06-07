'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "8f12db15052f00d587bf51ffdc33e6cb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0d195c4debf5ac161aa188b872d39274",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb2a16bf8fad70d3142b87c448cbddb9",
".git/logs/refs/heads/master": "fb2a16bf8fad70d3142b87c448cbddb9",
".git/logs/refs/remotes/origin/master": "013524b1daae2582807ff12565f621e3",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/04/9e889c3cac5f6369570bceb966e08f8c196e07": "9668a3e2efa1c77881b562b30c7c808d",
".git/objects/0b/47828708601769e4e40ae3b71aa1fbeb9f8267": "fbf8c655c4c18a01617ea8c492be2c52",
".git/objects/0f/2beef4baaec9ec50ab25031cf24ec18fc16a78": "1195765b455d8715d220c86358e316d3",
".git/objects/0f/fd3058ab9c35a9c5c2dac24f7c4150ed0aaaa1": "1afbd61801e43be4d483f0429e2a4d2d",
".git/objects/11/84ddd985e6ea6d8432d79d599a4cc7e947a9f1": "4d20dc1dd736d5097652330860ce42ce",
".git/objects/13/86be5248be7ca665f7abce379c0e10c3a09075": "f9bc04420dde066ee8f0c2b1663e597b",
".git/objects/17/a1e824fac22a4b31c0f20bc186a62bff4909aa": "e24f9fcae9ec8ff4b1c366566c257e1a",
".git/objects/1c/43bca99b35c92904af7b107c914a7c9e43a3ab": "5e3aa722decd68aae5e399ff1319ac90",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/c2079431489ccbb95f452446f79157548017f6": "de02ce9163df867248c3d5f006bd4e86",
".git/objects/36/1ef11b3210e52116a392dad8e017adc29f0496": "7bc40229c9ec666d381c2d99a3e4194d",
".git/objects/37/b1e172395ac75d6a3cc6f81bcae5881e40e401": "bc8feaed33dff3f8413a5e4556055a47",
".git/objects/3f/79597ca3ab63370cb4a4b18421e7735125bf49": "4d18e51d0346304be85cb6dbdeaba9f8",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/44/4dea30d374bb420284c01d84080b978a94c9b8": "b2cb1eb8ea957c188459513f2d262519",
".git/objects/48/0581f174a94e408e9545bbafe61545b9396941": "7716316900f3e09f2a67b9dec8983504",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/49/b9dde033c872b94f8e39e984eff3c2783888c7": "f877cf951c7f5495ca24a38d78094f8e",
".git/objects/4b/777780b86aff8b8e9e455628bef68e2f37c81f": "ef2cc3ce9d4d6b2726b5a2588ad5a7a6",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/61/5b11c3cb09017240afd8256aa9f9a6429074d1": "82ebb27bdf6a44d2beccf9a85e68c33a",
".git/objects/63/0a16d793f4ecd3df0b2397dccc931714f6b95a": "9e701919cd8af7771c03cbcd1af95f7e",
".git/objects/6b/5c17ce5f661d8b1c3e0ea1749bc9f810f5a5bf": "a5b2408bef7bb534d4b1ae8158ca4e15",
".git/objects/72/4985c736c031b06c0feb68105d8186b894bc23": "75fe6790525fd2dca5860a9d073cb699",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/a62172df7431ca041077d13472bc215abdc0bf": "e2019146c9618de43ff7e3d4bbaea8e7",
".git/objects/7c/12c1d56fa9de880a2e92e919f463d982fd976e": "ebb08871b56aaa2adecaa5f227ee7ad1",
".git/objects/83/04d57275f6d7ca9957afef8d0c3afca1cdc964": "2ecdc2f30fbe6a769ffea47c4e592d5c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/fbe92fa1cd55d254f90d3fcaab488f88c5f570": "91acf811d6eb73754187be12b6b949f9",
".git/objects/8d/29b773e2f6fc3f45a6e0c295e5ceb6459b36f0": "5f7824c49d6427649757bbb90fc96554",
".git/objects/93/244fbd585d9e12bc0b5340ab3428b23a19ca4c": "63df3ec292fbabecdf6c282d5ede1040",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/96/49ae77bb4d9e735cf5681150710ed60c17bf8e": "496750b375eefe22c5f2a093b03b90bb",
".git/objects/98/f6c8732501f2e06c14f81c746279a8e5cdf7e9": "7434c12bb1acf64c54a3bf09e2b209d8",
".git/objects/99/8f3d8c2433dfeaf12aa069586a90830e799571": "09e5d777e653299f9e259b14eeb3bd93",
".git/objects/9c/a72da46a50ee07711b217c33d6e4a086c908f4": "4ccf9c360bd5e33360d43781978d0d43",
".git/objects/9f/20eaddc2394d9ab63ac77e77d6148ee16f2611": "0a987bdefba2613de267d7544df7baa2",
".git/objects/9f/65cb3392c52ff4847898683db4a5d5424cf48f": "f38f480aa704bb448435728b5eeb6efb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/09423f8cb2286e1233131a76dd5a972aab6268": "22778cfc8e20fb853c9c4ffd2c6d2f2f",
".git/objects/ae/42a4b0a383b1a3411bf48a8281549f6de75e2d": "b562a2a6476f13b935de1544f57bd6bc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/4de11e6cca6f4e03f48d91cf7cec63d119d54b": "b2b47eb2d876ff923a8d9c9e988ade30",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c7/83253d98ea5b1a4f64ae37f0cf5280be8507d9": "51eddbc1ba7ff79e2ddefdb4081756bf",
".git/objects/c8/99485593917fa4ea084c27352bc8a45c16bd20": "9b77ea08f45ada5b3862a203e01d7c37",
".git/objects/d6/105ab303d4e8e3dcf49101a7278e75fb112046": "0b1277bd1fd7aafde3eaaa38fda179fe",
".git/objects/db/3fca542ebc7dffad30a33ac09d77f24b1fad14": "ca09b0e34541c74652bd39312435498e",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/de/d0dcac025bec7c716a13d011794af709c5762a": "fe10c5ba5442b4ac238d4aa7eb700395",
".git/objects/e0/3c72cb77fbee9eb1dfd834ec9b0a881d7294f8": "ec5883934fa1cb7b6f4697afbca76151",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/eb/c506152f20b596eddb77babbc9d9252e4d4e59": "7e06c85e17ca0447123e68fd47a90774",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f4/7a5271fdc9ec88a3632b5b01c6629611ee5495": "8dd7c03690f3362b1af1a4b92d2af75f",
".git/objects/f8/00044a796543cad6be82e20ea2bc29a8385844": "fe88d98c2ff2e438f74ff93fe77059b4",
".git/objects/f9/0f7233f80c2a2b3e768e18ef5cf8468c33d57a": "3e568a223d1652ed030d50e90d5de011",
".git/refs/heads/master": "59170baff6ebb99ece74bf01220dfb91",
".git/refs/remotes/origin/master": "59170baff6ebb99ece74bf01220dfb91",
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
"index.html": "afcf202124cd86aa6e02b7e4500570a2",
"/": "afcf202124cd86aa6e02b7e4500570a2",
"main.dart.js": "7dd5a462e163ebac3725c379e2b1f578",
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
