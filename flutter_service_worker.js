'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2cfee69756da616ddae7c8daa714cb5c",
"favicon.ico": "bf96b78958f6a9e655389f77a4d592ce",
"index.html": "f992f9c0a08bd3b06184649ba80c5692",
"/": "f992f9c0a08bd3b06184649ba80c5692",
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
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/ORIG_HEAD": "c2962188a552849a9beaafc68e6a3f8a",
".git/MERGE_MSG": "ac195c4e920cfe51842634079eb14381",
".git/config": "f93f411219995750171998b3d9bc7471",
".git/objects/59/02b6b3f6cb96e120bd28c8bba299942f8befbf": "4c75e0a2e95d261298b3a94707f4b6fd",
".git/objects/9e/c5da684fb85298a5d9f09e18e59de51c1e43ea": "a1e98ce1388b56bbfc6757bddddaea27",
".git/objects/32/dc28df2a9e01bf4c17ba0c31f94336d8928ad3": "166b79a232078c42d8db0aca559b3272",
".git/objects/32/1c7ccf4b0d0b8da23750a3dfaf9f073462c3f5": "37151636c30a6aeac0a9b081956a5204",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/c2079431489ccbb95f452446f79157548017f6": "de02ce9163df867248c3d5f006bd4e86",
".git/objects/56/4ab30d1b97c9e0f1e8fdb1de125114d6bec124": "3bb16816a45e196784cbdae5a8ae6bc8",
".git/objects/58/e0377e519001d7409e07511765774a81d11925": "5213aee547f0fc28bcd67d626c26dcb7",
".git/objects/0b/998a034f8b6a1452066f081adec6e2f2636b84": "01c16b3499b620c22c9f94da5aacd0e4",
".git/objects/0b/47828708601769e4e40ae3b71aa1fbeb9f8267": "fbf8c655c4c18a01617ea8c492be2c52",
".git/objects/93/03cfe8137e889cc1fa04c56f567981ffb057c4": "12b4f50943f6e4f2971a456bb3e46108",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/94/1d66a60f1fe83046bd2b9a1bf9168fd4370c8b": "7d23a8ea06aeb44f698cd9aef6f7a25c",
".git/objects/9d/c2473e048e5bbe889c99d590b00bd3a0aaed1e": "dbef7c5209047def3abcf6a018502873",
".git/objects/9c/a72da46a50ee07711b217c33d6e4a086c908f4": "4ccf9c360bd5e33360d43781978d0d43",
".git/objects/a3/09423f8cb2286e1233131a76dd5a972aab6268": "22778cfc8e20fb853c9c4ffd2c6d2f2f",
".git/objects/d7/b9ef12edd96f5b28abe2cb39e6877b1dc19966": "5da731e8deef6cd15f7e240710c54dc7",
".git/objects/df/8ecba702ac0e3fd49f7556c7dd187cbe8e8d90": "fe92e6377f0e5846f215ad4246180427",
".git/objects/bc/4de11e6cca6f4e03f48d91cf7cec63d119d54b": "b2b47eb2d876ff923a8d9c9e988ade30",
".git/objects/ae/42a4b0a383b1a3411bf48a8281549f6de75e2d": "b562a2a6476f13b935de1544f57bd6bc",
".git/objects/ab/6f15e121193bd03cd693b5463fa3488f10a56c": "499f418194ad7ba663c4ccb9cd01c2f6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/9f4d894868c5b42ab74bae201ff13a83cbeab1": "a77831ccb8fb40046ec35e127812afcf",
".git/objects/eb/679b6658d2bf8e5acbbeb69ea431dd82a70e6c": "473e74bf5f27b675c742ae47b96d7bf1",
".git/objects/eb/c506152f20b596eddb77babbc9d9252e4d4e59": "7e06c85e17ca0447123e68fd47a90774",
".git/objects/c7/83253d98ea5b1a4f64ae37f0cf5280be8507d9": "51eddbc1ba7ff79e2ddefdb4081756bf",
".git/objects/f2/7d7355633197dc779bd7d1487b48a58154d355": "9792c13f32744524e178aa532835a4d3",
".git/objects/f2/230c93d4aef2eea2308d49b26485432374b3a8": "81c768df698ffcd5f4b9f394f4d82073",
".git/objects/ca/60b8dbbab68705ae56370c9214daef3507e301": "2fc3ab5353a47beebe336fea430ab245",
".git/objects/c8/99485593917fa4ea084c27352bc8a45c16bd20": "9b77ea08f45ada5b3862a203e01d7c37",
".git/objects/ed/c2ea96e5a9597dda871eb4c40acb9750727827": "fdcf5ca8e0906c0849eb6f5a9271e703",
".git/objects/c6/7c5327cce439db191d3f3f94e95485b205eb7e": "932ccb7df6ead82a58aa47bcd48478e6",
".git/objects/ec/66316a85ecc6208bb8b969174bfd5298c5993b": "5ef8a9fd5fa0724c90e8b6ae7f8bcacb",
".git/objects/27/ec00d9b7bae2c938172313152d651b173ee4df": "f8f9179f6beb8605244d221aead0966c",
".git/objects/4b/777780b86aff8b8e9e455628bef68e2f37c81f": "ef2cc3ce9d4d6b2726b5a2588ad5a7a6",
".git/objects/pack/pack-6db6a4d5bdf6c60ed25f055f925fdb6f8d5601b1.pack": "e126521fbab204b2d833775d841a8bd2",
".git/objects/pack/pack-6db6a4d5bdf6c60ed25f055f925fdb6f8d5601b1.idx": "2998bb00c8f346db67d3859e1b52137d",
".git/objects/11/84ddd985e6ea6d8432d79d599a4cc7e947a9f1": "4d20dc1dd736d5097652330860ce42ce",
".git/objects/80/d634180418fafc340e561d118593716ef1d17e": "c4410a6899e8586d23b74ee907023cc2",
".git/objects/8a/8f27dc01535a71bb802fcfc20887d0937d2574": "19d993b3f2fd90fcbc45dc8922570d4e",
".git/objects/19/cfb25c686321d6f4da12d9365a5be8d84942f9": "9ad68aa31ccfa7714a15c6c3cd8473f7",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/9f/20eaddc2394d9ab63ac77e77d6148ee16f2611": "0a987bdefba2613de267d7544df7baa2",
".git/objects/6b/5c17ce5f661d8b1c3e0ea1749bc9f810f5a5bf": "a5b2408bef7bb534d4b1ae8158ca4e15",
".git/objects/91/c67d844385eb8075c1371b61d124064b323a81": "36e60e40aedfc4ca8a93c7e8b7bd0041",
".git/objects/91/6825376d2a49ff93b9a00d45ac498b0951577e": "5008ce3501b4507c7301d9936af3e87d",
".git/objects/62/b0f99cfbe5fedfb32b4970727de682bcbb698c": "6f7c9fc47d15154d2b343f43a3f566b5",
".git/objects/96/49ae77bb4d9e735cf5681150710ed60c17bf8e": "496750b375eefe22c5f2a093b03b90bb",
".git/objects/53/17e738608aa1e1143166206c0734903ecf19b7": "5d47b2fd1c765a49d5faa0f70b199bc3",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/37/b1e172395ac75d6a3cc6f81bcae5881e40e401": "bc8feaed33dff3f8413a5e4556055a47",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/99/8f3d8c2433dfeaf12aa069586a90830e799571": "09e5d777e653299f9e259b14eeb3bd93",
".git/objects/63/0a16d793f4ecd3df0b2397dccc931714f6b95a": "9e701919cd8af7771c03cbcd1af95f7e",
".git/objects/0f/fd3058ab9c35a9c5c2dac24f7c4150ed0aaaa1": "1afbd61801e43be4d483f0429e2a4d2d",
".git/objects/64/cad6933e2eaabd8cff8711edf2d3ebf82e137a": "833f0df02ec7af9ce618aa42cc4287c0",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/dc/6f3c6575fc0fa96c70fc8e531700567ae1c03d": "b25cb3ae6267a35a9fbf32deed7beb77",
".git/objects/a9/3dab4db2b148dea7c1e896204cc91608f0645c": "3b4b44e9dcb4a89f6c6504f26d443b6b",
".git/objects/d2/0cda28e77f742d0d2f5c0db4ccf4da10fa1953": "9b2fb1be78f26e0905fcf2154585eaf8",
".git/objects/db/3fca542ebc7dffad30a33ac09d77f24b1fad14": "ca09b0e34541c74652bd39312435498e",
".git/objects/de/d0dcac025bec7c716a13d011794af709c5762a": "fe10c5ba5442b4ac238d4aa7eb700395",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/1e824c5204895e1a89e53c924a3b8e83be163c": "67f9e3561937e8e930bc525a98f1fb62",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/e7/1519cb883e664a8ae2c3483f1fbccb3cd95e04": "2a71fb04b5bb9f969764ec1a60c6d4b9",
".git/objects/e7/186dcfba45280ef026e5697e6db4e4fc23fb55": "b7d38c44403a5f564177d5f28777761a",
".git/objects/f8/ab4b84bed45c8579ca3ae7a45bc9cf1fd4901f": "905eabffc286efae75faa637330dc0ff",
".git/objects/e0/3c72cb77fbee9eb1dfd834ec9b0a881d7294f8": "ec5883934fa1cb7b6f4697afbca76151",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/04d57275f6d7ca9957afef8d0c3afca1cdc964": "2ecdc2f30fbe6a769ffea47c4e592d5c",
".git/objects/1b/9b4d0806af119d293b854ffadfcde8d603c2a8": "3862f356b4bb24d070dd808892d4b88f",
".git/objects/77/054fd3f9e30aa1c7c528fbd129f4d21c49e456": "895486c7e18339c2511bf3f66faf5967",
".git/objects/48/0581f174a94e408e9545bbafe61545b9396941": "7716316900f3e09f2a67b9dec8983504",
".git/objects/1e/8f4efa6a9cc08b7e1afc2a8394fb4aed347e76": "bc3c16aad4695912b881f30cb72beddb",
".git/objects/84/a80a50e4eb956cb8f05d8779d9573ef44bd113": "1167f8fb9d26a33fc1a016b5ffd8ac5e",
".git/objects/24/581f2ab8947184f5e527ea2ea3fb0ea0ae01e2": "ecca9a3aa01e40b7825011188792eae2",
".git/objects/71/ababbacaf12ca12f19f21b51bec9029b9c1ee8": "f8f751847900f565bcc2de08af908ff7",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/2e/953f822e5a41dcb9af3b36314cdbbdbcf898b2": "e78c596c97c80b49b80729e3a9bb3947",
".git/objects/8b/fbe92fa1cd55d254f90d3fcaab488f88c5f570": "91acf811d6eb73754187be12b6b949f9",
".git/objects/13/86be5248be7ca665f7abce379c0e10c3a09075": "f9bc04420dde066ee8f0c2b1663e597b",
".git/objects/13/a5fbf20bf0b447823d2ba703dec46c33b7b862": "fdfc8d2fee1b4625f75ec125f9632664",
".git/objects/8e/b73cf9749a001dc764ec6774fd36a83236402e": "829c9c9cdee0f4e5d7792d9ae6f483b9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3e276fe7521e291c320be07c06bc28be",
".git/logs/refs/heads/master": "3e276fe7521e291c320be07c06bc28be",
".git/logs/refs/remotes/origin/master": "71f7088f565db090888538ddd47956fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "c2962188a552849a9beaafc68e6a3f8a",
".git/refs/remotes/origin/master": "d6a6156b01a2edc85cd51d4695972365",
".git/index": "83541a98cf50fe5701a8d91ec9bf4570",
".git/MERGE_HEAD": "d6a6156b01a2edc85cd51d4695972365",
".git/COMMIT_EDITMSG": "be15b8daf388dd73ccf9c2aba7db50dd",
".git/FETCH_HEAD": "696fe7f88d253ee12ccc05889fe08b0f",
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
