'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/config": "f42843425552767c84ae386ca1064ab7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "adc143273bf791fc46fb8adfb7099c96",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "906013080a92c58016026b5552e11576",
".git/logs/refs/heads/main": "2ba76e3994665c1f7814f19a377ce8d6",
".git/logs/refs/remotes/origin/main": "b9b1699147e1d6e08cdc1aa591864cd1",
".git/objects/05/5a31e57dc25b5ae8ef6f752655df224fb6444e": "ebdfbb0d6be0eb07e76d838eee1ab91a",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/f85f3fcdbe2e3b0b9da5880ef065d19aa330cc": "b41b488746a1d65258f3ad8b32f38d60",
".git/objects/0c/986a0fedfe569ff985b036c6105455718ba576": "f7868bf816b541f2ca4f467d2921de6a",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/12/74905b28c3685c1b604cec482bc58bfd7edc08": "a2d949c98d3af72e876996dc30ab89d5",
".git/objects/14/0186c9a5d444cbe4834a76f5b8e113aa3f9dfc": "8f04d82e6a62f130d0928622119009e1",
".git/objects/18/3e34a592d2304bed40a2764ae69fe5bcb41c37": "e7088a4dea2485f397730c02fb80cc74",
".git/objects/22/944e5a23913eef13454e57c561dbc2eac0c41d": "7c1999969bd253627a6358445bcee789",
".git/objects/25/e867c43abbc67639e5af443516e105abbf7115": "924c6c4cc8732dc88232bdd1d6dd2a0b",
".git/objects/26/97bc6970a57b8ef1c3d42fb60db0009bde773d": "7a09797fed2d3d8f0db299d692009fd4",
".git/objects/28/5eb7fcb77e377cf3f5e280fd1c53540513c1e9": "60102a29807ec3c2ec27716938a8db64",
".git/objects/2c/7a1eef3d60db954692e696dc7dfbc564b6b878": "0fee7dae473317a12292c4695617be98",
".git/objects/2d/86382c154eaac0b8ba1e598c268e6c869438b7": "5d548a1533bcbe4866bb88a03c290581",
".git/objects/31/61eae5aff5e629158bbf3926343cbcbecd56e5": "a329b45deccfee5def5bbb1ced5628d5",
".git/objects/33/56e63a0e06439b50a31ca3a647ce4ca7ca05fc": "66160245bebc7182191299d99396a47a",
".git/objects/33/b4a603c6f8aa4c5506fa974534e47d85a3920b": "5012b5527b9f73cc5461a70381ee951f",
".git/objects/34/2d044189764caabf75217396a598ee4bbce12b": "4953a2e5e7cc2c84fdf0b8d9223b453a",
".git/objects/34/f0725048f4eefb4179797419697ff534a5f515": "955b939b4f4785bb49e9e16ed1bb1f20",
".git/objects/37/efdc8b22142d62859b30bfd32fad941313b6a1": "3e724662f28590bc7c213ee7c2f6fd15",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/890625ce2d1665769898903889ba51df2880bc": "4efbf82ee3991dc2b81ee21ff1083c8c",
".git/objects/3d/a22d98bd44a6b6f9ba2609da1021acfdcb3e05": "21a7ed01bfc1296345de3c06b4722e3e",
".git/objects/3e/1b6e0cea67423ebc01231a988d53d6c3604cf8": "21b4c8bb72784bedeb46120084188984",
".git/objects/3f/964cd31552cb5e572dc89ebfba33b68601f100": "c8a02c669dc2102913b4741e48e54ed1",
".git/objects/3f/de9d02f78d01434ec7541c5db010317644447a": "ce6d7cabc94acb51ea38eaf7184efb8a",
".git/objects/42/0b1b9cadf48e06d6e1a2b075374d81e184588f": "32049a8c52d535f0f2e860a4e047876e",
".git/objects/43/5380d50eccf827cffe9345c3a0579b38fa0a8f": "c0df36e088d6bfbf7aed03e24282b50b",
".git/objects/47/8f74fa40aebce3daf7a2253b8a8f45968b1190": "f078522ff68d827546aba0e26d3c96ba",
".git/objects/48/2cde86fe6cf1fa19a0285ecb7ac16a2acfda23": "0d51d9872901a01f6961cf49711a5f19",
".git/objects/48/b644a63450d1b08375a93e7271b708e0916a6b": "635687c74709ee7ead7aea6e18762c22",
".git/objects/4c/1d464c818a160d0a8f65b0c5841225f2674015": "4bce8ba5aac5ac0dfe00c9bf2d9a8ecf",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/55/e49c243b549b5431a0ef8d3de7978ea42e5177": "9615a03eb9fb3f74a308c4f5ace3fec3",
".git/objects/55/ea4d979fc8d4cb5897bc51a1d0d001e6da8712": "f7b7cae3d77db6648a2f821258ee1469",
".git/objects/5b/4d7997f557d2db38cfa8a637403ebdd0fc46e7": "d6d12c5eb045b3f72659b2a85338653c",
".git/objects/61/cd54b9621721ca5f228e38feebd2e5977ee711": "11497adc58705bfafad54f451ef1c034",
".git/objects/64/023cef0fd77d546f23f736b7aecdbfc9169541": "6f33739f976e0908303bf3cfcbc200b6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/889edb2337b3327bca4f17d26e45e3b9161178": "7f668d9636380f68f9d6918f6c10d471",
".git/objects/69/db9f660cf08b6458a41d2fe3f94d3ffb701d84": "03666c27f90361e79f05f12b34114c4d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/39da1b462923dd487ef03aee736bdeb8b45d67": "dd44bfc23488cdff0f2f89c4ed79a03d",
".git/objects/6f/5308a8dcab4009543dd26adc33fa1db56620c2": "88eaaafc7954bf3eb82c620a810d242a",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/79/e921fc172b3c23c3cb8b0fdac65913541aaec4": "37e662d7aa0a911c1854dd7c85f6d7e4",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/37afe333b1f52d144adc70ed3495c266074fca": "c43359f04569880ccb560eac75805956",
".git/objects/7f/3d4b090ba5a4b146cefb1944a0c2a9ddd49fc7": "f321a21b7de48d4b38466e9c0425adc3",
".git/objects/80/94fcbbf79f6390f7c650303c902a71940e9acc": "6c67c8143a9b4a218eb9ad9b33a51025",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/587d8792a0f846a57157f3a5c512fb62c11077": "dc235c9481585a18cb266079fe67c79f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/8d/f2ed9389e06d2c5ea39bd31a73594b96ade125": "4f801eedbaea8089adfecc1f7bb989a9",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/dff6019d8db8180a74a4f2c76722d524d6e466": "18f96ef809ba1d99fc2bd8166835a740",
".git/objects/93/29aa758f00da3f05478f40b5a2a6a8c18edfdd": "a913d3565d373bd5fefb2e7ed8014fb1",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/b49c4b63ebeb58856abbb6bf0efc97af90dc8b": "1de9312bbcf7f74bbfd6ac4405a79449",
".git/objects/96/c6688273ea0cf901295da3fb86fe312ff73f33": "2820933071378bd0f4e833dfed2d0eff",
".git/objects/97/af10d6e833ab51f16cd5954198cb74ab7f99ea": "32170c17030a249fa79c0946c7b4c87d",
".git/objects/98/c427259099950d5f545e5914a5a30a19a88ad3": "ec62452aa8cd2eea3aa628f692d1bf4a",
".git/objects/9a/380a9fba4ab6d2a143cb921d48a3a03f717229": "8501e8583d86c0b45c83bb535b04936c",
".git/objects/9b/e3fec896aa2cf9638b595f61c84e6d5bc8ba6d": "66f2c00a53e69ec99713a62d2602b9af",
".git/objects/a2/dbe5bf57f19b7b5d6e866046d27265e84e1a5d": "7fa0c6a6547d835ab269a4ad305ed831",
".git/objects/a3/9cb7be3c17eea9c7747a4ffafc333e79626515": "7d83a4da5103789b86e05c578d1624b3",
".git/objects/a4/64231ba16eb86097fcc757e3db2b5ea59147a7": "21135fc4d3a7d85247259e2d9f6eda08",
".git/objects/a6/8026e65e9dde7f354a629c94951658ad0f9b6e": "82dfc596e74a58d7d3500fc376487f4f",
".git/objects/a6/c1d6c8cbb4da9ac5e6201fdea97794a10c6bee": "4ac82d33b8e40a6227dd5df057249380",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/596168b5d037b2b3b5aa6634e88d99600ea2f9": "bee2113f867cb21ec895ed5ba726cfba",
".git/objects/ad/16f45fb9e00b6a662a75f57e121c21be844f16": "e171387f40996b52602373049d09d8f8",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b2/64ba9f2c96d492497a39874f5ac2e71e166b68": "17d168379329a83e78775f8822d68b49",
".git/objects/b3/42d5b815c9f10c7dc00e9ce7e4186c19ec53d7": "deeca5071f70edf54e0134912cebdc23",
".git/objects/b4/efcad82ccdee36afa1388dc9030dfb77bf205e": "c0349dc05be64132fca1a015398f0442",
".git/objects/b5/3b69e55907a3e027509ffa8209677ff64b1f53": "d245aa003a106235cb8cfece33093ddf",
".git/objects/b6/75a70236a4905bc2780d347c213647fbefcf7d": "a83e5d1896806f882850e0c428be0287",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2a8b780320953f40e09f2409d86e923a67f50a": "e590f9411d55567d4510a6cf6eb74a97",
".git/objects/b9/053958440bd149fd62c3e7b3f07c35517c2908": "d25cd21a3a616c600fb5989b458c4197",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/9166c4960a40d2e2d1d6233e5106ae5b7900d1": "bffd4339dacd04d42c19fb06b71e574d",
".git/objects/bc/6e89af52f52495876d3d81e3475d6307b15d47": "b5c4ecef1275712c3cf54f7dbbfa4d9b",
".git/objects/bd/b96f2d58460f66d46e064bed18f30a1c027029": "ac3bc415090c36258e2b0d2288a2bd3e",
".git/objects/bd/bfb7c21e82d4c720576b9893dde082bc4203c4": "fb0a602a5d005f94f27b3de5213020a6",
".git/objects/bd/dd822d28c10c0150358f700375e1efd7576bb9": "7ac317ae0d7c8936c9871256242b3067",
".git/objects/c0/6cadc78973c468225c35dda26ac7b16b064d3c": "6fb4cd0fb8d4a6b6c82a421603eb6ea8",
".git/objects/c5/31e3ab18735016b71429484f47bb6dca08acdc": "59ec73e1837051e1da01cafd53b2525c",
".git/objects/c5/712b0763276474a247fc27f29c5d0868cba2c6": "82bf4e6af73b62fde2affbe60b8d5634",
".git/objects/c5/d31009f9eee49b94044e1ed687b315ee7be586": "fc63965f59447752dc47cfdb6e7afefc",
".git/objects/c7/e7f5b2caf2091172369f45b32e89b62c407b25": "5f1acb2007d47ef3b1bd03dd8f80f32e",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cd/bcc8f40afc844739e698dbd5d6da4ba05bb32d": "c3cab17f59f904df8fd79744d57066dc",
".git/objects/d0/054d91ed1da9454c319511a00a6428f4f88170": "93a80152a067ba29f59899c70f9f0f8d",
".git/objects/d3/057a48d8916497ec2e050a0c7c4bfd3f2f23da": "a2752489527b6fe17a54170aa9453746",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b732ac0b8f5ae663b23d2c99ea31590f6fe812": "7832bdc4c7a57238a534b9bc39718fb1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/14048dc6f9244576111373a3ae8940c88b2c08": "457f752084b8295c0290617fe31d5efa",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/9e5adb2fd5c3c6cdc63bf5d2c9481bf9bc0a93": "5c0ea921e51f7412d7e5b2b65bde4662",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/3e1f9cdaef1ae2501ddc6c9c26d6875e2f4a2b": "163064af025463b697629c648ac9b363",
".git/objects/db/d5ee556c586dfdca62991b1bc0fed7b3ab21c9": "93dc947ecd1f8a51c838308a723e553d",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e1/398223558a0c133c9ee0241744e4ae39b4224b": "8730f8eaf7b5e93218d23b0ff37ff603",
".git/objects/e5/1cf4b4971c5c24b8de03c41fe85ef00f7b913a": "551a5af4d41879af80bd9e1ac11faf8b",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/10ad9becacd51a6aa5138ad77f9cd18ced9ec1": "0b7f5be4890c130e6335190e4e260a62",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6a0334554228d7a97738a021324b74bdac1766": "a8931281fa5e1ce85495c6b8abcdcd94",
".git/objects/f2/4b59ff1fe5e625e5d0f8d7cb0b9deb1d3efcd7": "c570511092686a3e6f23c02893f8c679",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/398f523c103a9bdf9c2ad991fe9da9c370fe28": "8d521747a051fc1d78fd052ee35ee837",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/78fc4ebe5159c5f5eb6c630f18bd3de605e504": "3b6f8c6c1e493df9a7df441763ddaa88",
".git/objects/fb/1432360e936b06beb53782d28b475b2efe3470": "38d012e28b33977a16dec8fadbe7c70f",
".git/objects/fb/a2dec5ceaee56d654c28800e23a07af38389c5": "ef8b2d75c37432aa3256bea145d5ae27",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/c02e27760529f79ac53c59ba0f9feae8c9f43f": "42df718fbe28ab75862f18308c557aaf",
".git/refs/heads/main": "dc3c072a383ab7e5b17c0b97893f8536",
".git/refs/remotes/origin/main": "dc3c072a383ab7e5b17c0b97893f8536",
"assets/AssetManifest.bin": "0a62c6514ef4e60662a1144e86e81178",
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
"flutter_bootstrap.js": "61ffb84472371ab1800a3f069c258fe7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f9962d7d24ea8eb173973a4a97e10a10",
"/": "f9962d7d24ea8eb173973a4a97e10a10",
"main.dart.js": "5f30091ba9e69808e6be20a8fa66f0eb",
"manifest.json": "fb72e100e120457b9edf24b6e6ec5bbd",
"README.md": "c694f2e472f760ae63bd4e13f191b339",
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
