'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d41d8cd98f00b204e9800998ecf8427e",
".git/config": "33344cb0de635bdd8b129ec58d1f838e",
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
".git/index": "c3d379a68a0ebff1da0ab16195123f7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cf03c1ca1701436b973a4bf0d6915f64",
".git/logs/refs/heads/master": "cf03c1ca1701436b973a4bf0d6915f64",
".git/logs/refs/remotes/origin/master": "9dba45fe6443b31edbeea8d436cbb7ba",
".git/objects/00/7bbf8f52133662a38bc6e8d8f048e321550475": "5deb01861bff29420f71989a82e3e455",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/01/f00b1b97a160f032782d418f1399439f27ad48": "5d274aaa6dcabfbbfa02c22cbad73dd3",
".git/objects/04/3e4c468981d1d8d40df7828fbac6ccf335b405": "f35b8235bb66961554b123a53f3c3363",
".git/objects/04/9e889c3cac5f6369570bceb966e08f8c196e07": "9668a3e2efa1c77881b562b30c7c808d",
".git/objects/05/4c59ab14cb20376843ad0da740f7114bfabc71": "e05fb85c0870fbc0c764b9ccf149a65d",
".git/objects/05/65eb1b1e8ad2130b748e547a5d7edf5dfcbdc4": "eafb9e5668f73172b489f1c56f0ac91a",
".git/objects/07/121697043eb8566f84199b68fd3c69940df0b9": "361f01167f6059de43d972d8899c5b38",
".git/objects/07/a822bbc60baa2fc75d092e70b16ae1a14321f3": "00cc4995d0e94bf11c13b6f84706a4c8",
".git/objects/07/ceb102d3465b3ad6f36e9230563d611579c0c8": "a9b3248fe20243370f3fee9911281283",
".git/objects/08/de100a59dc8787fe58a5729b20904348ae5560": "e0bbf41bedb7bb7ba621b30983745f7d",
".git/objects/08/fb86d0923751c9ae42f42ac2e7c66009b537da": "6ca39cbab01aebee31c92e2b485fa652",
".git/objects/0a/60e24d3abd438f9cc28618d9e76d8980dd9949": "1597ea0a2653b9946709e906a25bffef",
".git/objects/0b/47828708601769e4e40ae3b71aa1fbeb9f8267": "fbf8c655c4c18a01617ea8c492be2c52",
".git/objects/0b/cfa054c10801cf6b274136c92bb4e65b2297d4": "883bcef487c5629a24066f99bcfcc885",
".git/objects/0c/1256b38ae41becd659eeaacbaa1c3ea75d516f": "6d1bd778adf414be7e797b86ef9fcea1",
".git/objects/0c/75852eef4768d7779940f87adb7a9a1257be13": "55dd1b39c5e4701d522106488d376f8c",
".git/objects/0c/d708392963dfffc58f5b0868fc055d12bb369a": "0d1f115220d79fd404e137f78fcd3f63",
".git/objects/0d/0dbf33e61515e8630ac4a6c5698f88042dbc73": "abb415c27b2453880efc4fc120d68fd2",
".git/objects/0f/2beef4baaec9ec50ab25031cf24ec18fc16a78": "1195765b455d8715d220c86358e316d3",
".git/objects/0f/89e987d8b58166882c08ec32ea0549e89105d0": "a016a422ce4374381990097bfbad2b58",
".git/objects/0f/fd3058ab9c35a9c5c2dac24f7c4150ed0aaaa1": "1afbd61801e43be4d483f0429e2a4d2d",
".git/objects/10/38b2c0c3b254345c9a41094776c7ab3fa02970": "f1c6fbfed5837477a971aa16555482b6",
".git/objects/10/970b5546e4c2ea8c3c8b8f12c8c586d7df1295": "59cff2e57da4cd59adf0d75ddf56f8d8",
".git/objects/10/f489d71809fe59de6454ea464bbc17f8681a36": "857e5c385e3f2749aa0c1cbe2b3eab3a",
".git/objects/11/84ddd985e6ea6d8432d79d599a4cc7e947a9f1": "4d20dc1dd736d5097652330860ce42ce",
".git/objects/11/e137db30bf8b56f3c69768c0fd9170192e7066": "6aa3baa505f00b2dc1186eed6c9e4128",
".git/objects/12/848e2c0df7988025a06a360a218a5fbf2f61a3": "640affa47ab2794a7a35273ebcecb723",
".git/objects/12/b6c6aa1263b7db01b5f76887caafcc434985aa": "87938c8d887f08e8d3ad2cf58747bfef",
".git/objects/12/b740a81ed1bf9e25a64d1c0a3b8eea3cc9b528": "21d332bfbf4a4387cca081c97bcfc260",
".git/objects/13/86be5248be7ca665f7abce379c0e10c3a09075": "f9bc04420dde066ee8f0c2b1663e597b",
".git/objects/13/d9694c0e51fe31db1be45314a4ae793371d8fb": "e898f06611f00d938cf077c61b80be84",
".git/objects/16/200a475ab93c4e4c09737919090c898fc6fe3c": "23cf4fa7595657fb27bce9bda8503f68",
".git/objects/17/a1e824fac22a4b31c0f20bc186a62bff4909aa": "e24f9fcae9ec8ff4b1c366566c257e1a",
".git/objects/17/f45ba92111679dff2ca466fb9dbe2567e94655": "b2006afa38b27cf5560f90135f469398",
".git/objects/1c/43bca99b35c92904af7b107c914a7c9e43a3ab": "5e3aa722decd68aae5e399ff1319ac90",
".git/objects/1e/8f4efa6a9cc08b7e1afc2a8394fb4aed347e76": "bc3c16aad4695912b881f30cb72beddb",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/8b2abff4503b72d078a02d0a55529e51ccf86f": "9b1020b1547a31abd307e7915eadcdce",
".git/objects/21/01a8ace85c7f2efb9701469c44aa7355802429": "c80b8de225af9fa45c41c6ffd29d5f95",
".git/objects/23/06cf8242c79561cb7af87866428c45f17d2277": "c5dfb67c7254d8383934a2da4a772ff4",
".git/objects/23/e7494bf12506bb54e1cf63804532321689a854": "93878788526ad236693eebbb485aea4e",
".git/objects/24/ccacd05b184968ac1dc13dd57f20a106064200": "98dec14eb1a3934ecef093913e3227c2",
".git/objects/27/d07c2b9e8ff6e46edc3e6d801b2c9d2c0b0bbf": "4a9114d1f8f4dcdc50248303c9fbdca8",
".git/objects/28/9098add16b3d0ef1e8febf66ff681bb371544a": "0cdcc331a3fb164e6c88a3c230dd5f6b",
".git/objects/29/2de94540bb3be0b2e5b1a3063c7d9dc659f458": "f8b1bfd786b363970b43a3d454b383b8",
".git/objects/2a/8af263d30f1d0717558930cf550cf6ed30f7e2": "39da468eb986696a3051b78bb66ad996",
".git/objects/2d/5ef10c3a5d386573e372cce1cfbd873ecb4423": "dc9c588f0128ea17fdf2d3528f374645",
".git/objects/2d/a0a10d337743f249895112fd5feb3b11c00ac6": "95f204b9b737a15351bbc888fc78193f",
".git/objects/2d/e5292b131b36010eabc616e7258b5ab86919a6": "98cdd6d4a90a846e10d9dad5c046ba8b",
".git/objects/2e/953f822e5a41dcb9af3b36314cdbbdbcf898b2": "e78c596c97c80b49b80729e3a9bb3947",
".git/objects/2f/eab349d8800c04806a6afc40d4125d9f3c6817": "b36b4c8a36c93363bef349ed9cb9cd10",
".git/objects/30/21e88de69719d9249fcf11b32ee8d9660fb4f2": "fa0bbea194cdaee1c23c7b648d327270",
".git/objects/30/5e62bc332082b3df29edd7292136c30eac18b7": "f9653dcebc309d6ba39c8d7b751644be",
".git/objects/30/631b6a0af5136d229c8dc9dbd6086ad4a12ac8": "a7015dc4b7c7899e975878824bac2b40",
".git/objects/31/bc4cc001a6f5d156de755f55be21e3b0f1a51d": "e9c82a7434348cc6fb0fb27599057eb1",
".git/objects/31/f29a79531e5ab981ddae2457d6bf0345328d5c": "d56e26b80ec2938872d978a285ef7f4e",
".git/objects/32/1c7ccf4b0d0b8da23750a3dfaf9f073462c3f5": "37151636c30a6aeac0a9b081956a5204",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/458a1fb7a8a4f71a6c94ffd4afbfe2506bc1f2": "3dc0dc4adb3fd7601534cfcb103753f8",
".git/objects/33/d512605d6fbc0584ecce05594666524f9342df": "e7f65a0c595dba37b65b10b6915d2445",
".git/objects/35/c2079431489ccbb95f452446f79157548017f6": "de02ce9163df867248c3d5f006bd4e86",
".git/objects/36/1ef11b3210e52116a392dad8e017adc29f0496": "7bc40229c9ec666d381c2d99a3e4194d",
".git/objects/36/7609518176a9608ed86919b7963e4d34b11e84": "a6d7490801ebe4596e10eecb2f0f9b33",
".git/objects/36/d8525925d02f58a9b671bbf8438d8d237eafaf": "d1a1feec41673af461fb5e7b5090433f",
".git/objects/37/11248100fbb14cb61419deb7ff38f5bafcefb3": "de17830ad022d1e3367e126edfedfb09",
".git/objects/37/b1e172395ac75d6a3cc6f81bcae5881e40e401": "bc8feaed33dff3f8413a5e4556055a47",
".git/objects/38/0a518d6c357ef747a4417dd68edb3154350013": "8b19ad36f2923459df853c04dba4cf82",
".git/objects/3d/0386e8f0a2ffb6039743a590ca56535cdb7d34": "482c90c3beaa8569bb7bf19aabbbb9be",
".git/objects/3d/a9d414f8f82668aefa701dd306f43dc141d49d": "e60ab598b144cd72899f851646b93882",
".git/objects/3e/84bb1746b160eb83d55f0a35649aca73e97c82": "661197f2c97e5683a926027c9a5ffbf5",
".git/objects/3e/ed979d6807e9fa404910428b1deaf336d11535": "a3bbe2b2f2f020edc5b76ac43295f4e7",
".git/objects/3f/79597ca3ab63370cb4a4b18421e7735125bf49": "4d18e51d0346304be85cb6dbdeaba9f8",
".git/objects/42/27bd7ca11c66864a5f8d820ffc190602427917": "4af9e20d07ed80a65d6463b3b9a5a2d2",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/44/4dea30d374bb420284c01d84080b978a94c9b8": "b2cb1eb8ea957c188459513f2d262519",
".git/objects/46/6ae37c69176af19c65a9f3348b274355569164": "92770517018f88c54d393a6ee3642429",
".git/objects/46/7127dedb4ceb8282320d55d8a966049434386f": "b0da239ec0d0ff1e81a82d5a9e77f47a",
".git/objects/47/3eb2e642c333d363b27675f691efd6161f3327": "222b249d92aab694e8e7d54356b230c5",
".git/objects/48/0581f174a94e408e9545bbafe61545b9396941": "7716316900f3e09f2a67b9dec8983504",
".git/objects/48/3ee2c9b7ae8511edbaa6faee7d9ab65d77b97b": "0328f77fd1bb43c09e524e5308bd4794",
".git/objects/48/780c67a2d837cfd8768450835e8796b7db49c7": "da658aa7bb7559a12e830dc9a350f8bd",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/49/2d61eeae412ebea5dc93fee6fb4409648ada58": "6846a6d05f04c41c71d43d02990bc6ed",
".git/objects/49/7ba1b3dffa0ea835904a0a507e7d417af482a8": "c4527bfd1c838e275392d52d502bc497",
".git/objects/49/961cac9a58fbf02e802516b0d9760644e35df6": "4b28ed9b0eca16a49a320d922f54e33a",
".git/objects/49/b9dde033c872b94f8e39e984eff3c2783888c7": "f877cf951c7f5495ca24a38d78094f8e",
".git/objects/4a/3030479279e4b16ed6d900080a2103430a888f": "a58d28f7d50f2da8d1a72f218459d7af",
".git/objects/4a/3916708f891710214b8001a1226c85a4d0bcc4": "8a7dafafb7eb695e3401f32da301600c",
".git/objects/4b/5a832d61a3b0c9dd368a01944e4ddc457402f3": "5e4e1de100e840c5ddbda2dff8e24a98",
".git/objects/4b/777780b86aff8b8e9e455628bef68e2f37c81f": "ef2cc3ce9d4d6b2726b5a2588ad5a7a6",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4d/3b22a208a55a14d03ca689ce15b17e2ebd34a6": "fce7740a1e8c924a0725aac4afc45026",
".git/objects/4d/46a9328fc03e8a7d921f6ca1f6cb9b270ea6b9": "de8dc48e7e72fbb9455f5afe5f032289",
".git/objects/4d/81e350ee5981c4ecdeff8d82c163cd47a946d4": "51734875a246b27cbabfa174fbaf2b57",
".git/objects/4d/c6337d3a66b9b3da22536749623b4749f94825": "93313c0a2174a6d54d1093970bff31ba",
".git/objects/4f/c5714dcfe7befec373ebfe0880ee5de8c47b58": "1d870d64d109449f78c23315fed2d6bc",
".git/objects/53/17e738608aa1e1143166206c0734903ecf19b7": "5d47b2fd1c765a49d5faa0f70b199bc3",
".git/objects/56/4ab30d1b97c9e0f1e8fdb1de125114d6bec124": "3bb16816a45e196784cbdae5a8ae6bc8",
".git/objects/57/c6c1ac65bd2f6bb2c1c15858930599017372fc": "744835ae3425b7b1e0ec89e73c170aaf",
".git/objects/59/86729388dae96e8127fd2d52d105fc65b37ca5": "991d32a9357b3c09528e1525190f2c8c",
".git/objects/5b/bf619d46783e0334f36c8b7af024b689e4c607": "fbeba22b0e14c5ce7af4598f9a5de1e4",
".git/objects/5c/86cd22e297564811c642310a42b5743eacc565": "ef35426f6a2de908fbbfec0ef56ad358",
".git/objects/61/5b11c3cb09017240afd8256aa9f9a6429074d1": "82ebb27bdf6a44d2beccf9a85e68c33a",
".git/objects/61/793bd3f0d3eaaf33db87a1cbd6aae19d4be10d": "531a2c5a99bd5be910f10f76b2096067",
".git/objects/61/b26f617b144662aad0c5eb6d7a0fd646db40b0": "6f9a9c5955249b0499436aabcd5d4cbc",
".git/objects/62/b0f99cfbe5fedfb32b4970727de682bcbb698c": "6f7c9fc47d15154d2b343f43a3f566b5",
".git/objects/62/cc8eff0d8530f1b7b8e69ea2e8464db903cf8e": "7bfcf41cb5559e56948e09a303e7036e",
".git/objects/63/0a16d793f4ecd3df0b2397dccc931714f6b95a": "9e701919cd8af7771c03cbcd1af95f7e",
".git/objects/64/318bc6cbfb77e8b0445e768e3677e159959bde": "10817e9b9c2e4cf594508b164a8667ad",
".git/objects/64/cad6933e2eaabd8cff8711edf2d3ebf82e137a": "833f0df02ec7af9ce618aa42cc4287c0",
".git/objects/65/dd858afdb2dcc9cf8fa910cde958ed9bc03b6d": "c94ed09dc8ceee69859a06b4a75b6315",
".git/objects/66/164e826488d352281379477c113cc2f980c121": "3cbbfbe6bf189e60fc25e262ae308666",
".git/objects/68/cde86e819548f5f492de28e0659774805961e9": "69b97e9538bbac129b8d989282ad5481",
".git/objects/69/3b29c7239c25f461b84e051277090a4dfeb6a6": "d396276e1f336b3651ea8ac65150c299",
".git/objects/69/54fd4c948104c507531151201d23ef534d64d5": "22d4ed8c057207ac4a853124bd73bb0e",
".git/objects/69/c8f5e1967890018c47d92de4f93d3d8a4a0780": "2d142c308d0174411a83e32d706a2c54",
".git/objects/6b/5c17ce5f661d8b1c3e0ea1749bc9f810f5a5bf": "a5b2408bef7bb534d4b1ae8158ca4e15",
".git/objects/6b/cd6fc7f599ed3dbf49f2a04ad29e6186de261e": "61b1211edd0afed22c034f103601f138",
".git/objects/6d/772307011b65ae2978d735014b7146a0974667": "a8750d817c61300b69e23199e69a8d8d",
".git/objects/6e/13ad27cc48ab0536e08a1c19dedf6a625b1a70": "f8a3c54a8a47f3805a88012e4dda0ec7",
".git/objects/6e/6dc4ffe1a5834af0154b60a4d75cf6b95a7f37": "72b68e153455ab792e052e7d81c8dd90",
".git/objects/6f/32a37559256bd84f61f94d44fb6758e58625be": "40deffd8f60a7e0be85f42f230b91a92",
".git/objects/71/ababbacaf12ca12f19f21b51bec9029b9c1ee8": "f8f751847900f565bcc2de08af908ff7",
".git/objects/72/4985c736c031b06c0feb68105d8186b894bc23": "75fe6790525fd2dca5860a9d073cb699",
".git/objects/73/60374030c45b1bc5b808b2c401531257cc4794": "554af779b235aef41e0db736f64ed97e",
".git/objects/74/0f442ac75eca0278a0d3a52c394458f704ccf2": "4ce679b97c0939e1387b87cd3aeb9f00",
".git/objects/74/e26e582a0daf8bce8cb3be9cf6d03d7cf7fd41": "06e53ca2d8153eb4b3038b392de68f5a",
".git/objects/76/8201c981efef4248250bb848390cea599f8004": "f97c3eadba5f0faf6780cba66c2b7eb9",
".git/objects/76/ffcb407a02841e363609f1ca18aa2eb04aa021": "3e646a684250690ae015c751c3b69aa9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/a62172df7431ca041077d13472bc215abdc0bf": "e2019146c9618de43ff7e3d4bbaea8e7",
".git/objects/7c/12c1d56fa9de880a2e92e919f463d982fd976e": "ebb08871b56aaa2adecaa5f227ee7ad1",
".git/objects/7d/9d2b3c5a77b70b776ffd6921c33b3abed05164": "fe58545ffde8fa78b793ce42fb2a8a6b",
".git/objects/7e/23126f7265b5db6b0e3515f0a9158169f46885": "19353cbd18968f63261e2ea0127eb402",
".git/objects/80/4c339684bf26b504ff2432d5538fb8dc7f30ff": "c8f2fca5c2020077f94bb0af4596d846",
".git/objects/82/2149f5b0da147b46c89a215af4ff10c513dc05": "8425dc994fb2c0eed284126b5d2d44c2",
".git/objects/82/fd16c5e3a959c80bbb61c5b7f573b2a8b6fa14": "f85a8db4c28f9e1a522a197de801d13b",
".git/objects/83/04d57275f6d7ca9957afef8d0c3afca1cdc964": "2ecdc2f30fbe6a769ffea47c4e592d5c",
".git/objects/83/155b8c3872dd40f8debac710c6bc66270526b9": "6fa6d208df68565a0c73dd4334e5e012",
".git/objects/83/9c7d3ae4ab5314aafcdbaf660646d47f3cad4c": "ee39820e341cbef7e722c82d6af41744",
".git/objects/84/a80a50e4eb956cb8f05d8779d9573ef44bd113": "1167f8fb9d26a33fc1a016b5ffd8ac5e",
".git/objects/86/6d3a8086de6e5471cd1b656e7b339e6128163d": "8cdbc0b10b6b9d2ed6b0305f626e60ab",
".git/objects/86/8b3a6b7846c72df88c8f8e9f0d65df99d7d6d5": "8ce04d686502e1777d6308c96eb08256",
".git/objects/86/e28dfaa703b8a22c46527f73c87168cc3df2c3": "26aa917db9ba9c97f5a4d48819389aaf",
".git/objects/87/ca64cada36ed2e6f9fd05e0f60993a5e75cd8a": "4ef7431d0d9489bd6dd97fdae854245a",
".git/objects/87/cd6a3db75b8d195e223a27597c8b26738256b6": "da2ffd79442f66b4c47f8bc47efc7271",
".git/objects/88/7ac4e247c7f3ce30c81c3cea3f6a34c71a4479": "70ec9af9e77eec4d2ee79b1d99d7145e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c93b8157b040095302a992b0c4938484cc5bd1": "e560264844e81b29d6f9f8775f06066a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d00b0b17921b514ce2b613599f90015817d0ab": "08ddcbcd2c8feb9905038a74dbdff257",
".git/objects/8b/fbe92fa1cd55d254f90d3fcaab488f88c5f570": "91acf811d6eb73754187be12b6b949f9",
".git/objects/8d/29b773e2f6fc3f45a6e0c295e5ceb6459b36f0": "5f7824c49d6427649757bbb90fc96554",
".git/objects/8e/80dab2dfabbb27865cc4f90cbb5d91d094eb48": "e913057502728efe6fa4755915a0bd32",
".git/objects/8e/b73cf9749a001dc764ec6774fd36a83236402e": "829c9c9cdee0f4e5d7792d9ae6f483b9",
".git/objects/8e/f2602194313a487a23f6badd2631a384f085ec": "d475344768ec45d36c151ec5737bd772",
".git/objects/91/6825376d2a49ff93b9a00d45ac498b0951577e": "5008ce3501b4507c7301d9936af3e87d",
".git/objects/93/244fbd585d9e12bc0b5340ab3428b23a19ca4c": "63df3ec292fbabecdf6c282d5ede1040",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/93/3622c4f98832835004abe98488f1c01a0f8d6c": "3202de638a5209eea6870d40a88e1fcb",
".git/objects/94/395828e98e023525c2be87ea47e92d5a067bf4": "228600adf26e7230223cba1c1671059a",
".git/objects/96/49ae77bb4d9e735cf5681150710ed60c17bf8e": "496750b375eefe22c5f2a093b03b90bb",
".git/objects/97/2f09bd628c6d941df546d919882df1ad3001ab": "f50aca672e42ae7e353c2a45e25ee412",
".git/objects/97/ed034b64f748d27e62411be86e484c1eecf968": "e6fea7adf909e4c9ef694a81e9f82c49",
".git/objects/98/92bd77840a8505a49e344da3d632290efa9c83": "3a0f3f1e3662b5f2ba29e74b01083f89",
".git/objects/98/f6c8732501f2e06c14f81c746279a8e5cdf7e9": "7434c12bb1acf64c54a3bf09e2b209d8",
".git/objects/99/2a6df7dd95f890102f23cf42645458d94e4d81": "bd3b177bc220cc435b0e5b422d3d46b9",
".git/objects/99/8f3d8c2433dfeaf12aa069586a90830e799571": "09e5d777e653299f9e259b14eeb3bd93",
".git/objects/9a/2d3461ba8c948b1c0f2239488f224f13cc5112": "081e50eb634c21c43f6c6692f051acbb",
".git/objects/9c/a72da46a50ee07711b217c33d6e4a086c908f4": "4ccf9c360bd5e33360d43781978d0d43",
".git/objects/9c/c55feeb6abc3a8bdbf309a17f40f0d9fb1d5e8": "7eabba6664617d6fd067a7ad93fbf487",
".git/objects/9f/20eaddc2394d9ab63ac77e77d6148ee16f2611": "0a987bdefba2613de267d7544df7baa2",
".git/objects/9f/65cb3392c52ff4847898683db4a5d5424cf48f": "f38f480aa704bb448435728b5eeb6efb",
".git/objects/9f/b4a843f9f803907fde60db0d57d1fbaea30f6b": "11c6309ae1f46cdf8b235fda7dcfde05",
".git/objects/a0/ad96252c814522f27c6c674eca1ae75b1a61ff": "60afab87afad359e8775c9f58594a8e2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/42569a0eba1e935ba2b20298e8a735812861ed": "3ceb65594f68b29bc820606b87ff3412",
".git/objects/a3/09423f8cb2286e1233131a76dd5a972aab6268": "22778cfc8e20fb853c9c4ffd2c6d2f2f",
".git/objects/a3/b168117483891ccbdd95c2a02dcd241ca302ac": "02d3ffa7837f6460ec7a3959857ab410",
".git/objects/a6/d78bd9c3fbbc42a98712447e2af3fa0e222080": "28d9fb995d50bdcc0b6d87bf4ad9408d",
".git/objects/a8/776f1cc7b1a37dccea9a8a38d1fd4ed7af3e2d": "d243a0cafd3fcefeee28d195f8896cbc",
".git/objects/a9/3dab4db2b148dea7c1e896204cc91608f0645c": "3b4b44e9dcb4a89f6c6504f26d443b6b",
".git/objects/aa/6018442b829923ad9baf54bbb347c96881131f": "50b7589e353b82b60eff1ccd057a07ad",
".git/objects/ac/33fffccd0ff2f2c8eea3d100696755f1b27470": "7c66e3f98f78fcd94887b08fbb3ebbae",
".git/objects/ae/2da9b97f1e73ca68876eac92fd15e856fd02d0": "7aff9db13f41ddaeb83a106a03a90522",
".git/objects/ae/42a4b0a383b1a3411bf48a8281549f6de75e2d": "b562a2a6476f13b935de1544f57bd6bc",
".git/objects/af/da8bbfd2714ca40514610c8df981ee0943c8db": "958fd66b7932f043c5332a312f736d21",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/e7d4f9eab3821e766bfdfd11c5709b31b373b5": "377ea5f2b9d79c2c272cc81342104611",
".git/objects/bc/4de11e6cca6f4e03f48d91cf7cec63d119d54b": "b2b47eb2d876ff923a8d9c9e988ade30",
".git/objects/bd/20fe6b47ea7589aba71f3558ea0a3ce6919235": "66f693dba58aebdaa5d105c8793dfcda",
".git/objects/be/25bcfdf3240d7501449cf80e874fe2909d0f5e": "bb9f25f46b55d16a45cf1f02b2d9b700",
".git/objects/c0/0a97882fd72a8bf8e92ce26906f409ee417b30": "67f4ebeec8a696eb81e6666aaad019f3",
".git/objects/c1/a81d3bf0d617d7c2335a2792fdc85527676b86": "3d8a92c4b82d9900c4cddb802c405bf2",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/556f69a7c5ab3149dd304323589870bdde4f5a": "d6e6897d81fa1f10bd77479c5c6fbd1a",
".git/objects/c6/2134f5d3b37db457e3a6cc46d160eb6218680c": "b41e3a31bb9a0e2043a62212edbf7449",
".git/objects/c6/42f95e356a985322ea71613db5f8d70a7bc10a": "a7e915f1110577f97135a5b493642705",
".git/objects/c6/962a612a9f31216df54c1ff3c8bda3887369e0": "c8049bd02734b471641c277217dad670",
".git/objects/c6/a756c898fdb59c9a0cc6d5ab0d52fd26c2bc3a": "54ac58738bb61cabd1d0b842f0e0069c",
".git/objects/c7/42819043c4c51ed563e9da07c1c7c0bf57fac5": "d90a41f2a9d5d906f2ca7f1fcac87c87",
".git/objects/c7/83253d98ea5b1a4f64ae37f0cf5280be8507d9": "51eddbc1ba7ff79e2ddefdb4081756bf",
".git/objects/c8/99485593917fa4ea084c27352bc8a45c16bd20": "9b77ea08f45ada5b3862a203e01d7c37",
".git/objects/c9/cae23bb11c7b5c08e8fda2c4460882505aa7ce": "13864ae504ff4aee3300943f5544b94d",
".git/objects/ca/60b8dbbab68705ae56370c9214daef3507e301": "2fc3ab5353a47beebe336fea430ab245",
".git/objects/ca/c0924a9cf1dcbf072887f376314b55791ea83d": "6d64423b6196d41683cee2d586ad6ea7",
".git/objects/ca/e40e2d1e773dcb6a4d2bb9f38e48f33bc29021": "031798ab8f6728852ba8dab0d5338578",
".git/objects/cb/10b230d85e58d545d4b18b0cb8788fd26d5072": "161df0818ab4f808eab0b027ca0ad97d",
".git/objects/cb/218cd3202da2bd8a21fd4889e4ae7e0472c209": "8899f95d76c21bb861a913cb0da443d5",
".git/objects/d0/10fda812dc896f6d119cab1cf07217ab29b7f7": "c46a06e5913adb3c576ffac01adc97e6",
".git/objects/d0/3dbeb0adfca7ffc1a59cb0755c45dfe38d434b": "d962698bd49553b1ab8a5505120829b6",
".git/objects/d2/3b6013e57a03bfb5947b106edcd4567debff4d": "5ce23aaa669337df9ea75ad4765caa39",
".git/objects/d2/f7d86f034caab27c68aea63885f691656e0b8b": "38a1c2056806a78902b0923552977fc7",
".git/objects/d3/4408200a52b50669c7d453912803778ad785d7": "be0f18aa71251a8f345786ec8cbea4c6",
".git/objects/d3/adcc25e61f6643d6484181473b8ab2c4e60384": "0477d4924aac15c7a627914c8b871eb4",
".git/objects/d4/2d4ca5372b1247e3618882c4af7d7289985a04": "5ede2c749863ca3e16a92190ba2b06a7",
".git/objects/d5/e80fdfc38ec6dd53162a2d6e7eea178e698df0": "5a9b0a62fff9cfca5f2cb1a54c989eb7",
".git/objects/d6/105ab303d4e8e3dcf49101a7278e75fb112046": "0b1277bd1fd7aafde3eaaa38fda179fe",
".git/objects/d6/8b7e2ab0aa05c770c37471c6800d44f7c7a1f9": "bcf85c4c465e393d3ac069fa39dff1f2",
".git/objects/d7/b0520e9ccf712ac2f0a8c77be984d5d81129d8": "8624ebd95a75340ebbd91034e8c3a8ec",
".git/objects/d7/b9ef12edd96f5b28abe2cb39e6877b1dc19966": "5da731e8deef6cd15f7e240710c54dc7",
".git/objects/da/77a1d889dc1405506f6fac8acc88fd7ea488ec": "2a833ae86d09d214c38eb69629154f69",
".git/objects/db/3fca542ebc7dffad30a33ac09d77f24b1fad14": "ca09b0e34541c74652bd39312435498e",
".git/objects/db/7bf88c4b609aa7e845024991c59c545c4b172a": "98aaf3fc2214901ab152dd54b1ec85ee",
".git/objects/dc/2accb436f33c2ad2e832bd1088dd2713613270": "9cb9c0eb406eb662e7699c5b88c65899",
".git/objects/dc/ebd194fcfa1cecf1b2b76750a64f87ebbd99c4": "d46148de96eb0275c60d977dceebceb0",
".git/objects/dd/431a271c87a45629522c9b535c70290bc37784": "b3bd45c49621c44291a8ff4ccb40a7f9",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/dd/6cbbb3e7411782644f09da7c8f0f09a083f323": "fb40a1870d9f1d9e6de329de2e415058",
".git/objects/de/cdcdcc47385f2a4e83ad686df29a48d80dfdd2": "faf04999a12d37b115b048e177f5964c",
".git/objects/de/d0dcac025bec7c716a13d011794af709c5762a": "fe10c5ba5442b4ac238d4aa7eb700395",
".git/objects/df/8ecba702ac0e3fd49f7556c7dd187cbe8e8d90": "fe92e6377f0e5846f215ad4246180427",
".git/objects/df/cc3e061daa1f96fdf0526da93177a968f7ef4c": "484dfe24376fed850b787c4b7998d665",
".git/objects/e0/3bce4348c0ce9977bb57c06ae062b04caf4816": "d319ae237059312ab36935de93d7fa0c",
".git/objects/e0/3c72cb77fbee9eb1dfd834ec9b0a881d7294f8": "ec5883934fa1cb7b6f4697afbca76151",
".git/objects/e1/d49b7580239a8fefb929d63007d7b50c332be8": "39dfab816fbf167689a631f2209badec",
".git/objects/e2/ddb35cdd83e4bec419679f38505cebf20d857e": "510ddf77a5fca46fcd4ab06bbcf68ea3",
".git/objects/e4/38fa7557542803b5cd82f9aa1d6fa2554ab603": "3ff90e44e46e5447c2796a6117481a28",
".git/objects/e4/a4cc872c84567ca57ed3baf4423d62d80b2050": "e98cdebe7a1754d44e128e9ad4050744",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/3658fc8a8afe1207a51d482b66cdeba41b5454": "e46bda49241a63d97118bb823387504f",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/186dcfba45280ef026e5697e6db4e4fc23fb55": "b7d38c44403a5f564177d5f28777761a",
".git/objects/e7/76970aef8f7fd7fa07ae8f7afdd8161f661705": "6c2490e96a570364be24dfdaa45ac768",
".git/objects/e8/af7cf60d43ecf47218a8d9b3961be4e7f9ef82": "adf6913b80e521f05627fba48d86cd0e",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/eb/679b6658d2bf8e5acbbeb69ea431dd82a70e6c": "473e74bf5f27b675c742ae47b96d7bf1",
".git/objects/eb/c506152f20b596eddb77babbc9d9252e4d4e59": "7e06c85e17ca0447123e68fd47a90774",
".git/objects/ec/cec3984e369d342cad78ac0b029ab3b8bf24d0": "4e1ac8338ab012233f34e75ef39713af",
".git/objects/ee/1cb70bc73cb5c09d82632972ca70d0440f4e08": "fd14092183025ee65464c6748823e3b0",
".git/objects/ee/c11a97eb90d9ec3b9394921aad9a6ea90f2d21": "6f8d3b885ef7bfdeef84ac8f10a374b8",
".git/objects/ee/ffef4c4f3f07a3920c689b83e9363505c6e415": "ab4fdda6bb5167354554a82bb31daf68",
".git/objects/f0/0eb45c29d241a0e9d9942827d1b90138a368c1": "e1d5060d11a459fc318f1f918cd5070a",
".git/objects/f0/724fb2ebe513d1f381a9c67aca7c504c202d46": "d6858285d6085612f5eb702355d5702b",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f1/9de4d391d746456bde9f46a76278acab15c374": "a8b26b255844e653b925bda9bf8e4763",
".git/objects/f2/230c93d4aef2eea2308d49b26485432374b3a8": "81c768df698ffcd5f4b9f394f4d82073",
".git/objects/f2/bd9087eeed06e1a67af198cb66e0ef47a6cff6": "4a994260265d92b9d979b9a94f678759",
".git/objects/f4/7a5271fdc9ec88a3632b5b01c6629611ee5495": "8dd7c03690f3362b1af1a4b92d2af75f",
".git/objects/f4/e835a332f78a1a2b17700b14c22cbfe6154383": "d897135e9463e1ba2c24864a889824e4",
".git/objects/f6/fa9fafaef850f6afa0445a05d076d78fae7812": "48af9832b8b8a02198341a9b6b084e2b",
".git/objects/f8/00044a796543cad6be82e20ea2bc29a8385844": "fe88d98c2ff2e438f74ff93fe77059b4",
".git/objects/f8/d40efb2e2b56f688b24bfd97421538f427f56c": "28d8e10b1be4b48493c877b19f5da150",
".git/objects/f9/0f7233f80c2a2b3e768e18ef5cf8468c33d57a": "3e568a223d1652ed030d50e90d5de011",
".git/objects/f9/aa34ec4e0e56827d5b254262db780e39e6e6c5": "ebf9f2ce4342cf70e83a7a24efeb6b4f",
".git/objects/fa/981ca14f0a3ee011920d52f64a76a9fa9f1d61": "579c5b377af6ffab2b738d19fbf7d1c7",
".git/objects/fb/419c92c90ef50a92a2cf0626aa1528846daa5d": "bc2fb7d68144ba54140d71a50ad1dee7",
".git/objects/fc/3c6920b673e83f0fe1d3c2a8103dcda0190386": "3aa0c57015ca6727c519ca74d02db064",
".git/objects/fc/e8abe38439deb5dbc98a52154157575430b124": "b91af2ba7e7a8d2ca2150f1fde0ee6a2",
".git/objects/fe/8b74ad6cb6809536adad4d1064f0c289fc1757": "aa3f343616288c5911f73601cce55d88",
".git/objects/fe/ec99e003e16729b0b1abdc8b5b43147323f259": "0778ac756aae6ab8f25f065ce5e454a2",
".git/objects/ff/c389e1be195541bb453c6a512f3b4fe13b014d": "fff6c07ea04bd5cc86f4ecb96dc6e3b4",
".git/objects/ff/f9ddd2179730772fc5b432812eb1bb7ce88d17": "67e9d6a7dd3b2f3309c1e4a3b6bda3df",
".git/refs/heads/master": "77c20a3a8957fdc15a9d31bc98511644",
".git/refs/remotes/origin/master": "77c20a3a8957fdc15a9d31bc98511644",
"assets/AssetManifest.json": "9745d2ff62a4166c56414ce5ac6579d2",
"assets/assets/background.jpg": "dbad3f2c509e04c82c377a99bdf3d326",
"assets/assets/ball.png": "8317f915045adf9669600bc8bc3c88ff",
"assets/assets/penker.svg": "15d012370d4d3bd384ecc85a6014b06a",
"assets/assets/penker1.png": "879a41b3b21dee8fc8fb9b384cd0d522",
"assets/assets/penker2.png": "a64367aba65bec055f18fe927258c7b7",
"assets/assets/penker3.png": "8adc0bd5cee72b2fe7a8beaee9869167",
"assets/assets/penker4.png": "cf15d3cf82e52106eba10bdf8b1645be",
"assets/assets/penker5.png": "d021395f820492f8abb49269a037ff9a",
"assets/assets/shadow.png": "930d294fa6e670ea9cbe75319e8821df",
"assets/assets/title.png": "0da33823d121e2da20f300278b04007e",
"assets/FontManifest.json": "8286df9aefe460365b1000816a1aa239",
"assets/fonts/CustomIcon.ttf": "e84d98bec4d2c20b58e63a937a02a972",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cc6d590b84af82a5090f061cd6d08c26",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_arc_text/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"css/init.css": "7c63358a8d12355d2708dca4eb385abc",
"favicon.ico": "bf96b78958f6a9e655389f77a4d592ce",
"icons/android-icon-144x144.png": "d801ef231b534d4e35dba8a836d3656d",
"icons/android-icon-192x192.png": "060335ff566b0b35fc06483bf9f34acb",
"icons/android-icon-36x36.png": "65b911a5303847b6e32ba6bb09e5d4c0",
"icons/android-icon-48x48.png": "44bf4364b9bc2a2c9e33071b9622dd79",
"icons/android-icon-72x72.png": "dd571bfdf2e250ff9f881709c13852fb",
"icons/android-icon-96x96.png": "76e6e8a40384d46bd8bec29865cb2949",
"icons/apple-icon-114x114.png": "6fd569edebb9ccec83d7b1c6ba9d8dbd",
"icons/apple-icon-120x120.png": "1499fbad497685f53560f3d95cf1b641",
"icons/apple-icon-144x144.png": "d801ef231b534d4e35dba8a836d3656d",
"icons/apple-icon-152x152.png": "1e3b09e63d7c06ed63c2ccef9c493c32",
"icons/apple-icon-180x180.png": "d0875fd360ea8e4475fb0796b19fe9f9",
"icons/apple-icon-57x57.png": "c9da4bb28aa86e3e46e6e34105d61295",
"icons/apple-icon-60x60.png": "041d08c5f49b25fd8200e7c20ad073e3",
"icons/apple-icon-72x72.png": "dd571bfdf2e250ff9f881709c13852fb",
"icons/apple-icon-76x76.png": "103002f1a63e175881574153e2195b21",
"icons/apple-icon-precomposed.png": "34a05bd2cd769f8504da40d9f9b8d497",
"icons/apple-icon.png": "34a05bd2cd769f8504da40d9f9b8d497",
"icons/favicon-16x16.png": "702f48e3ffb497a7d7fe5cd96903da25",
"icons/favicon-32x32.png": "18b6a4f82bc6f19443df7f3beb84e270",
"icons/favicon-96x96.png": "76e6e8a40384d46bd8bec29865cb2949",
"icons/ms-icon-144x144.png": "d801ef231b534d4e35dba8a836d3656d",
"icons/ms-icon-150x150.png": "255d84d73847da0abe4dbc9475a7a5f9",
"icons/ms-icon-310x310.png": "d5f03d758811cbb7474f64c14ff6da20",
"icons/ms-icon-70x70.png": "f9d8255803eb9beac7304d671b39edc4",
"index.html": "c5b934fcb06c33854ff85ae884769970",
"/": "c5b934fcb06c33854ff85ae884769970",
"logo.png": "a941416fe3b792bfb5b4948fa21b4293",
"main.dart.js": "b3b24d198aeef8933a1940bc6c7e579b",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
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
