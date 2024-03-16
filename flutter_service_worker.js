'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a41818285d730180d5ac36ef473f52b3",
"index.html": "f6a6effd78e9b2b2bb39d9b11f06ad66",
"/": "f6a6effd78e9b2b2bb39d9b11f06ad66",
"main.dart.js": "3241d6f6d23b3474a2e3a0dcc0bc6e6b",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"README.md": "e254c61dfee01c5e154a9fb989fb6298",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "93dbbafeea15e1daaf537d53f4b25497",
".git/config": "f0425f204603449117fb1e63470d2ef8",
".git/objects/92/d678e410aa124acc6d47a3744c4fa3f9557209": "4b85474d533e7bbb791837478aa88dd9",
".git/objects/3e/b01a678468fe158388764b08344f9dc3dbe5de": "f3b2a20a7715873b59f73ec12f26c6ef",
".git/objects/50/169d4fb4afe2f7e516ae407110debd9da05dd3": "a0d59633d243eaf21b81ad43fe44d720",
".git/objects/57/ccfbda87318d6fd72396e5f5ddff057a3a7ff9": "7b95f480989ecfb6edf9aa00392736f5",
".git/objects/3b/2170a8a9f91d62df63bb290a6cc2e5d7bf9617": "faa14ada6f1206b43a5e975c4cc5e19c",
".git/objects/6f/10f1131bba87206044eb5b8f5538470367e24e": "426537448939602daaa716e591b95d36",
".git/objects/03/e0abf7455b22d4339a728ccff9d8818c60a215": "e22c13e00934cb18601539d4d4ce25c5",
".git/objects/03/6de752d58d043e83edc2c2374aa35fa9e466d3": "f221714fc0afd3d03e58c66d7b9d7a1a",
".git/objects/9b/9ad5ca35fedec9e1b2662a5877b29811a61cfa": "7d2a174c96523cfaca4dd047ef0184ee",
".git/objects/9e/07dce7987f0d8c0ebb0ef898d62b6416646e0c": "9bd54aff9bfa83e7834ec96f02df5a33",
".git/objects/35/8f6d76eaeb6dc758d3759a9f1af12aa86021b0": "1e43ed5079fe0234d0d88fb9ffc88ecd",
".git/objects/67/7bc19cdad24569e68d627bf5ff2207480816fc": "d4c27ede4327080ae3dc03b8629c2186",
".git/objects/0b/e21730833912f3bed94b5f688709c24ebf568d": "ad0e19e68363df9e90518232389f7dff",
".git/objects/0e/46cabb25a4b4d86ad203cc458fb8de6ae2dad9": "45e143d53077caeba74622ab7210bbfa",
".git/objects/9d/89fe39f634bea1cf77a6cd3cb22c8efda09a14": "1830c8344220d80232b9df9ffc1c604f",
".git/objects/9d/e0e24831c34409f714b8a86eb6a9bd2f528fb7": "2285bb21e52709441ff2a24ac38f2f2b",
".git/objects/02/e6ba90b983a15ab3a644e6483a0cc6694a41af": "7ea381f6960e5e29cc8118dedf97e3a7",
".git/objects/02/4e2c3bf40de3c3cd90a965c1f86ab729858bcd": "14473d8d20dec1c2fe1261cb03587938",
".git/objects/a4/7f8497626d8570262324751f01ef2fcdc3d8f4": "7f5633c140a854aba929088205347526",
".git/objects/ac/0f908b9c9c73da558b45d65cc5c6094874d3e8": "36f70284c45d845ee774c46e7288afe5",
".git/objects/bb/23ea671dcdf69e1b5a3335e848e03d005c7422": "344058f6b1f0e9a7fa6fe0cc2af364bf",
".git/objects/d7/8ebd49c7e4f9b0ab729e2315529ddf84eab617": "4eb0fee5313461029a3ff4ed8d7a34e5",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/4eb8ef153b68a2a138dacb8eb499f6c2576f25": "1f3552b56d228b4f4f6965a3442ce402",
".git/objects/b3/0605b887816a1d6b05831a52b00617578fd500": "36f21d59714d92174fc9f5408e7bf41c",
".git/objects/df/2986ca1b629f9dee8078d090e78f931662a6c1": "ce4aa4ba52b488dc4e2fa8fd5f5a1f58",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/9171148564a37d4452f93e6b5f62e8ed9b5bc6": "8caff27a6094d1de6ea79bd55ea1f999",
".git/objects/a5/20c7ceb4547f348cbfdeccd2bb5102ded4a9a3": "d14dfb09ac0d4b442b4c99e550657e3a",
".git/objects/bd/3e4b89129a00419937d66938f802ae75c6afd7": "ff012e4859ac5fc1ce4cf562a912b5ed",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/7f2be5a3b42c266a5630105c075c8b94d5f773": "b4f74c533b9ad1af6a5c5b71a7bb75f9",
".git/objects/f3/e3ea5ed98cc429d23583312a9537e7665cedb2": "970db917afe819a8b7637111a7367ac4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/fd/540ff70a84b223e7efec13e7af9c673a75f5e4": "8d225a002fae20f96045d5c9a1884e58",
".git/objects/fd/c68c679e40c34755b4ad1af5cb137901a59c3d": "b92f1e7a5a5534eabc424761262d3b4f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4bdb2cda98c6df1586e5efcebef9f1f81fb7bb": "e214b5feb9d4c1e565d10c41b9688e8a",
".git/objects/fe/730684f22d8b960c98cefe6eef109ffa0b41ad": "1e149fc304f64042dd9814d8ba0b8f6b",
".git/objects/c8/3aefc7025410dc552a1b0135203f5cfb1e29bd": "eba98fc516e86fbf5e37692d590351fc",
".git/objects/c1/5d46d66c0fddb7e712fefad65a4663de69d588": "f567efaac5945eef219c3170d78dfbc1",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/dd2886b51f583b3d97cc057306873333f253e3": "a5b7ec6255dfc4efa48eb3d68b9bcc29",
".git/objects/4b/9a51d1cd1f27f74195c036f4caa645923dce6b": "099b9ea2a3b03011677685e7b1e0211a",
".git/objects/11/55090e3efedc9deea74dc3377097c9a307929b": "d9f80ba8b3b0930ff830c19aa955a044",
".git/objects/7d/c6ff5672c66ba3c5aba103430d2604537705f8": "6e690ebbb97a9c12835dfd1e40fe9a7d",
".git/objects/29/99be6b6b29f611e66a3b385ef8ee0d8e3756d9": "3132b1a57d1e02d5065b1c5429309313",
".git/objects/1f/55bb78f429efa994b0ce9cb541c0f1c51bde63": "1140c6d9f0762ce6d1aab43c5b53eb97",
".git/objects/73/db19ed383a39d2f00198d57ec5ee6755871a76": "5810147a57f74f4f42df5708f684c14b",
".git/objects/87/f51b6f74869cb0f0c8dfc9d0eb42450b7e251a": "41812253304fdac07c23303718f9c159",
".git/objects/74/ed413bf97ea8f80139c4f23d790897e957c2e9": "c779a112f01209cacc4a162cb2a6dfda",
".git/objects/74/3065ea2c91dbb6d08ed1339447ef84f872bfa5": "5281538c71ed25cff4f8a1eac208d071",
".git/objects/1a/18aad4694af7c60fbd481b24df6fc783fdec42": "d9e72f429f508ef9f2d19a6370febf1c",
".git/objects/17/e24614ebf49e005e06a491c82ce4644bfa82d5": "a23776ad2ab88143a17fb629669df749",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/91c139b140bb2a4820a6a06a5627257d2702b5": "5d0ed52d2974965860aae065d74cca0f",
".git/objects/7e/fc95081437603f25ceb37810db110bcd55b9a3": "e14639334bea7e7d61ad1651a8aee125",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/75/e0511e18a3db0f7942bdd5aca7e0b88e60f221": "d666e93a63c90f5e414f379d2ceff6fc",
".git/objects/81/46871afde6d41e9435278aeb80b2325ae73f80": "fdd15d9d3301c26d320cdfb14c4d1e26",
".git/objects/44/bc221963c8b4c19e7d50ca732633e93d90b550": "54e1ecfb906a21bf51e5be72ccd8939b",
".git/objects/2f/f8e819a4d5f2f2a418169ac4c7e9ea16aa05fb": "21a9c463638dc21fb67585bad895f8a2",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/9f8fdfb290ea2e15f334f6a36b36715b150e24": "8f4e9f105dcda04fedfdc596de7fb882",
".git/objects/36/90a9c2c8ac1289b666005ed6eb6e645a63cbed": "82bf5f8f2308d53c780f137e2dd765e3",
".git/objects/54/32380b86d1aa9604707adc429ff9a97971dd7c": "31d41f5d16b29d93578fb66c79702898",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/f3658619db5dc2619e8b7cc8c0623bc6a2026b": "0a9272789b6533ba137dd4f5bc510b17",
".git/objects/08/5551278ad8d46f209fdb9c429f8b47e5b21955": "d15977ce77958cf19ba99a2cbb046a6a",
".git/objects/01/12e7da626ca2f959eca850c806779ba55dbfbd": "c094fa0b00e6ea2120d2a30cd1da087e",
".git/objects/06/44269e61c5a322adcf1b0d11465e64ed49118e": "d3ebb43ee3da4eb61377b1b35f135e14",
".git/objects/52/7adcd8e91e56b5c408798d12aff2833bd44c36": "53400ac1c121a3ad1b1791e033cd54ce",
".git/objects/55/d55dc732e01ffe425c6a3969c440a22ef830cf": "8fd7216b959b68aa971242f51b8e713c",
".git/objects/63/3d9d95faf0cacff69df499d1acc9dee3798adb": "e79fb2bc8d0e25cf086f213d88001baa",
".git/objects/64/221f85da2610da2ee0dc8653cdcd66e8bfd16f": "2853613f9af4de839c247a66a566da8e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/93aecb5ebe073eb80778eb8b5242d43f07ed42": "9fbd8e4cde03bfff746db246ce7eee7a",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/dc/3685ac54cd6a391b5d2bee9c082516907188d0": "3655055a3d20ec7c81556ffd5dbd4b07",
".git/objects/dc/ce256b7120fd7369d1e1608bdcb2c33ea142ce": "e26008538fd0e8d99cf024552a448b82",
".git/objects/af/eb02887305409194e8525351e75e5cd00fb663": "72ac5f98f333858fb2d2b1248b30dac8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/861b334f0c832a444a52f9e2960f61667848f2": "4b9a18b78c2afb62905fa609b96d1db8",
".git/objects/de/7f57f0df761b1a48c35b0dbefd0ce3ccafee6b": "f0622e344f875103db76206d4d4964f8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9b34437735f5ea64edd6f1216b08e44a4fc338": "a0645875b0f7cddb398f323629421078",
".git/objects/e1/ff886bb06abd21c4e0da4388800c3c084685b2": "e8eaf4db9d8b873f6b8e4621a5ed4248",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/982c6dc1819c8a44ec2a93180528d18c2d5853": "0d11cf1d681d5b813c741bd5a997059d",
".git/objects/e9/8edcdae1120b4b375dd33d0e2350175a27def1": "06d06d3906339a06a6211100c915a413",
".git/objects/e7/307e72c5e7bced5d36c776d0986bf71b605f15": "e493f8bfd12abe75c70dc4782e5beae0",
".git/objects/f8/ea37f695340d1453a5da20c9528d35093bab40": "b55f910078f1ed6c3077e22f556f457a",
".git/objects/ce/3dc91d74439a570e843253d98dec01fff73f6b": "dbd5e99a74ca56b143723c5ba5c393b0",
".git/objects/24/f96e5bb037009b58403462e9c611e6c56554e1": "ada5bc6eb0dbb403c07ce15e33e78c20",
".git/objects/24/6c13eaf87a59c9916a2904c1865f40c0123ceb": "280129f500be071cd6753002df92fd44",
".git/objects/4f/af234457eb02224e74616d9ed781c4f6d40dd3": "69a243b11d3523f3a91e1a1dd6b69f10",
".git/objects/12/607882ff5b9d8afaf3e06da2871b805bc77b64": "a2f53e09b71fa6283d1eca3aec904d32",
".git/objects/76/d7efd79c5a063f4c53ea229fb20a648aae809f": "a59dbdd31d9f7c63eb1b7510904032c9",
".git/objects/82/5887fd56a49cf4b52355439bf120b4f747815b": "4cd1a5992ea4f7f4b13df83d1cfd0f40",
".git/objects/82/6e0270423772ac72be188aa46ecac0f146540a": "3a043a77b99f94a94208168274b21d1d",
".git/objects/49/4acede0c520f847f75982ca1f671fc6eaa889e": "c4a42624eaa20c8a64455bab6edd0908",
".git/objects/2b/8368efe7663a6c4c767461379884f352a89ebf": "9e99589748869cac29833d7d1c6b790b",
".git/objects/2b/4b06702ca26b8d0dcdc95f35090c5a99770cb5": "52b697e63995fb0b3c445345dd98db88",
".git/objects/13/2240a58f463e52c149264f35469285ce607baa": "340c070ee3e9b58d3af7ab2bbd5c3e66",
".git/objects/8e/cd75f80c55b734896017f19933696aa835fd92": "253d280965f8b9ea56c4e00401085f05",
".git/objects/8e/d80f83c2d0fc80e0e89f96d5e8ead3e61b8b1e": "d6289a30c874d0a0399104fadcc2184b",
".git/objects/25/66d7970e867e84d7326c76619fcab5b11d8df7": "678c8797b2a9c94c97e506405ec256e9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "35912fcf48de9a80c86d359029dac7b7",
".git/logs/refs/heads/master": "a8f03b862e8a6f7c4ae1e738224de9ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "b08d9ea829b2a53df7b3a24ba2ea43bd",
".git/index": "f93dc02a8cb68c20274b5dd1b188ec19",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "18a268bd8a4d7a4b28babcf45fc18fa0",
"assets/NOTICES": "29503445889b55fd104f49cb3c70a7e2",
"assets/FontManifest.json": "87a3002635c37f0a13dea10542be8a55",
"assets/AssetManifest.bin.json": "83f8e6d87101673e28fa02504ad75a3c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "85dd98baada7e3937c1c9483fab4cea2",
"assets/fonts/MaterialIcons-Regular.otf": "4596003b6b99b1b8df14f2ef6526e6c1",
"assets/assets/img/heart_.png": "31fceddcfa6528bb076c48c0945dde20",
"assets/assets/img/noibat2.jpg": "f1825b01ae107253dc77c1cef7688512",
"assets/assets/img/noibat3.jpg": "b5aaf68dad126f2df6e502a6bcc2b10f",
"assets/assets/img/noibat1.jpg": "a0f2cd9a13c826f609b65872256043a5",
"assets/assets/img/xe1.jpg": "20fc39e1268552237d3989c48304dd02",
"assets/assets/img/beach_solid_.png": "b3c3b1d8cb22ba8375345062dc6434ac",
"assets/assets/img/icons_con_nguoi.png": "2fad47192e2940c36014cf9f572ad3ea",
"assets/assets/img/home_.png": "56058d685c1b90d2f1726fbcf2a661ef",
"assets/assets/img/ka1.jpg": "7d6c0b39a27c4f18a1290a172ea495c9",
"assets/assets/img/ka3.jpg": "06ed8b3706a665bfecd8ed880cf72c76",
"assets/assets/img/ka2.jpg": "e5cd1b5c50c921f02a26647562f53420",
"assets/assets/img/tour_location.png": "f5bc15af170dd1fc025a20f808197d12",
"assets/assets/img/cart_.png": "c581eb86a100439bea9b14eb7f92059f",
"assets/assets/img/Xbooking.gif": "e95cf8e6c37b0cb9bdabd20d023fb1df",
"assets/assets/img/bell_.png": "8fa333e73a048268a3817a362bb98cfb",
"assets/assets/img/plane_.png": "8277485b9f466e756f1b9fdc67e9cbc7",
"assets/assets/img/car_.png": "43b54c01bb1849ba5a1e9aa697094d1b",
"assets/assets/img/anh11.png": "ee8c607cc12a8a32d468c280a5232b93",
"assets/assets/img/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/img/hotel_fill_.png": "b02ca3e79490b88b8b5357d529de05f8",
"assets/assets/img/profile-light_.png": "73769dcb77b8f34daf690b2cad46448f",
"assets/assets/font/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/font/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/font/anta.ttf": "08dc1c5893bfab96b496642e402e21fa",
"assets/assets/font/AbrilFatface-Regular.ttf": "738419c3ec95241a3d56e4654555005e",
"assets/assets/font/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/font/NotoSerif_Condensed-Thin.ttf": "416e3172528bac261e926d2e33f8fb63",
"assets/assets/font/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/font/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/font/MadimiOne_Regular.ttf": "0b217da0e6bb96f122de239d016b7527",
"canvaskit/skwasm.js": "099f00a255e1b1f33ba268145da4d8d8",
"canvaskit/skwasm.js.symbols": "3de29dc1934313ba10e7131c64b8049f",
"canvaskit/canvaskit.js.symbols": "8b59bb301fc2b1136f25606382f2ed6c",
"canvaskit/skwasm.wasm": "0a1f9dbe930bfd2df030842564da285a",
"canvaskit/chromium/canvaskit.js.symbols": "5573e55905729e79f52db673cb8da1ce",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.wasm": "71d87a6fb062dc95febd8265484d7592",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.wasm": "e9045d96069c837efee0d889224affb8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
