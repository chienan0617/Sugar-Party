'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0a62c6514ef4e60662a1144e86e81178",
"assets/AssetManifest.bin.json": "1bb4aa75f64c7dd5ff91b8d26945b0a6",
"assets/assets/document/color.json": "507b038046f10e9ea7479c9239310cec",
"assets/assets/document/colors.json": "ad0d908159225e90dc1924b63c073f50",
"assets/assets/document/language/en.json": "4eb90f863479ebd20222c4aed0f7086e",
"assets/assets/document/language/zh.json": "246ceae1ba94be4021d86d33c9b4ef82",
"assets/assets/document/language.json": "561178a5945117a9dff9c4461501432e",
"assets/assets/document/register.json": "fd96a4754230df95b5543fd5ef59e963",
"assets/assets/document/styles.dart": "7162101a46fc8bf760dbd62ee5c90c5a",
"assets/assets/document/system.json": "1859ad0860b7526aeb8e40a726492c15",
"assets/assets/document/tutorial/en.json": "13746e692f59d3aa9d2dd908c90558f3",
"assets/assets/document/tutorial/tutorial.json": "91f64881e7785b93e968f0c3d0c1fd36",
"assets/assets/document/tutorial/zh.json": "fdd54c37cca7ee2c59b1f9cbbf778c03",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/assets/icon/icon.png": "c60e189fddceb0f0f0a379db523b3d15",
"assets/assets/icon/view.webp": "eb3f648423429e2e6634cd78aeef542c",
"assets/assets/icon/view0.webp": "73480e0a19a1823c42a77dae58532605",
"assets/assets/icon/view1.webp": "2b7ba04dce02c381edc1e32bb949c4a5",
"assets/assets/icon/view2.webp": "2b7ba04dce02c381edc1e32bb949c4a5",
"assets/assets/icon/view3.webp": "c3bc243672c07dd492fd9ec41a0d18ec",
"assets/assets/image/17/compressed%2520(1).zip": "c2bdff43a5fa50c246d38f6a76efe768",
"assets/assets/image/17/p0.webp": "2acc41edebf9bacf0b21617a6707fb21",
"assets/assets/image/17/p1.webp": "de2121869dabc2eea964cfa3df18b7fb",
"assets/assets/image/17/p10.webp": "12aafa37d599e4a8f79573778e9cbc7e",
"assets/assets/image/17/p11.webp": "1b5c813c5a802303cfbf57204b5b5219",
"assets/assets/image/17/p12.webp": "f53f1afd05dd9b6e54beae0b8735119c",
"assets/assets/image/17/p13.webp": "aafada7186d858a4032726e418800772",
"assets/assets/image/17/p14.webp": "3bea9a1f70cea70383dd2a8b18e63b89",
"assets/assets/image/17/p15.webp": "0853331b82c360dc0570c12dd3fb8023",
"assets/assets/image/17/p16.webp": "daaec12bc5b1e46093e6d55a760c1ccd",
"assets/assets/image/17/p17.webp": "c3f4be81952f82474a05bd2c7029f323",
"assets/assets/image/17/p18.webp": "2c13547021402e69e80fd1f929f2f8cd",
"assets/assets/image/17/p19.webp": "23a3f59e8fbbb2decdf86d8eb4ae80ec",
"assets/assets/image/17/p2.webp": "0bec59a417648ffc3f704d6661db6907",
"assets/assets/image/17/p20.webp": "04be72cd64f5098529fd8b2ee6eecced",
"assets/assets/image/17/p21.webp": "409b0986a8a8ceabe57362ffdc681c3b",
"assets/assets/image/17/p22.webp": "59ea60e196421ac5f79a242555fa6459",
"assets/assets/image/17/p23.webp": "dec04c830351f72c9bf0dcfd2e6a162d",
"assets/assets/image/17/p24.webp": "7071261bfde75fc8122b5b7ce98141d1",
"assets/assets/image/17/p25.webp": "dfb065c3a41e48c5d9e5580ab3cbd579",
"assets/assets/image/17/p26.webp": "d044e8f7cb6fcfcb23f8d81051005049",
"assets/assets/image/17/p3.webp": "5b855065a926a39b7f2e6d27d411e5fc",
"assets/assets/image/17/p4.webp": "45ef1fc49464ceb9108e525e8fec29c4",
"assets/assets/image/17/p5.webp": "6687ad39f33cd704f77c2788cc914852",
"assets/assets/image/17/p6.webp": "84d48c41d1c9ae10ab3d2c4eac3e2cf0",
"assets/assets/image/17/p7.webp": "0d640bb3aa24c094dcae26b0891ca722",
"assets/assets/image/17/p8.webp": "2bbfb38fab490b792e006cbe543db932",
"assets/assets/image/17/p9.webp": "b17a15588a6d23ccca50d75893548e49",
"assets/assets/image/logo/b.png": "4ba019ebc68d3f61e15a959f318317af",
"assets/assets/image/logo/chat.png": "a52d101d686a16858356ec5f50e88ade",
"assets/assets/image/logo/logo.png": "9a0e365fff7d3d626607458bf73a3e33",
"assets/assets/image/logo/more.jpg": "ec0011b18262b005ed890a5f1453150d",
"assets/assets/image/logo/n.png": "13a6ef189d7ee3521d16331aa64bbcfc",
"assets/assets/image/logo/t.png": "e7777c6ccd43cc4d62c708873970f675",
"assets/assets/image/logo/v.png": "32d94962f4391460ea541723a015d17a",
"assets/assets/image/logo/w.png": "fddc0f19feec8c4c0695e25a9e764e2a",
"assets/assets/image/symbolize/error.svg": "8db75780056c369f3f221f5b0277c0c9",
"assets/assets/sounds/bgm.mp3": "9321fcec082fd67d15e05d1d7dd16ab2",
"assets/assets/sounds/bgm2.mp3": "607f867d6ccc4beab5665e2b1d80ac65",
"assets/assets/sounds/bgm3.mp3": "0a05dbcab9017e3911446316f544c8e0",
"assets/FontManifest.json": "de07fb01839b41ff6549bbd58fb43bce",
"assets/fonts/MaterialIcons-Regular.otf": "5392d1694a21a1541a02fb3d567d7d72",
"assets/NOTICES": "afce085bddf333ff4593ae6bdc027074",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "1862cd51f0f3eee88b29987888929c49",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "5b289329c462d7186cb7305c6e6ad845",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f9962d7d24ea8eb173973a4a97e10a10",
"/": "f9962d7d24ea8eb173973a4a97e10a10",
"main.dart.js": "d3a6cf4a8fe82b2c5f48a8e59c193323",
"manifest.json": "fb72e100e120457b9edf24b6e6ec5bbd",
"README.md": "bc6ab13e3eb35fb54f486de84e2609bb",
"splash/img/dark-1x.png": "b136757fe380b17bfb39b4913d62dca0",
"splash/img/dark-2x.png": "43557f72595bbf172829fc9756a6da01",
"splash/img/dark-3x.png": "032cbf650d3965a2e31fa77e6c7b59f6",
"splash/img/dark-4x.png": "ad68ed1608dba3747583c81b8fb4ebc2",
"splash/img/light-1x.png": "b136757fe380b17bfb39b4913d62dca0",
"splash/img/light-2x.png": "43557f72595bbf172829fc9756a6da01",
"splash/img/light-3x.png": "032cbf650d3965a2e31fa77e6c7b59f6",
"splash/img/light-4x.png": "ad68ed1608dba3747583c81b8fb4ebc2",
"version.json": "cbf4309cda30c760d9b8b860e4d8b923"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
