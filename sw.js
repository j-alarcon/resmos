if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + ".js", n).href),
    i[s] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, a) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[c]) return;
    let r = {};
    const o = (e) => s(e, c),
      f = { module: { uri: c }, exports: r, require: o };
    i[c] = Promise.all(n.map((e) => f[e] || o(e))).then((e) => (a(...e), r));
  };
}
define(["./workbox-7e688afb"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "audio/cast.mp3", revision: "bd1fe6ad65fcfcee5ce402b34f879ae4" },
        {
          url: "audio/defeat.mp3",
          revision: "f2244491f931bae72e5404fa3028c9e8",
        },
        { url: "audio/pop.mp3", revision: "0ff30a6aed4206af7ccb060fea973bda" },
        {
          url: "audio/select.mp3",
          revision: "7fcc1eab9f35348e0b28916d7910a908",
        },
        {
          url: "audio/victory.mp3",
          revision: "dd5a24e81be455cfcf13153b165f6b76",
        },
        {
          url: "css/animation.css",
          revision: "4cbf23425b05f1ef26b48dd35f9f0b63",
        },
        { url: "css/fonts.css", revision: "871492272a48d9a3f675be608f7756aa" },
        { url: "css/main.css", revision: "3e6c8441bfb497dbaec8b8b7493d421c" },
        {
          url: "css/position.css",
          revision: "7968b10eb3705c16ded9393dc2afe131",
        },
        { url: "css/reset.css", revision: "9ebd1ac99acfdd20a3f66d641bd93be3" },
        {
          url: "css/responsive.css",
          revision: "1a6e49d925b0149789a59b63a34582ee",
        },
        {
          url: "fonts/poppins.ttf",
          revision: "bf59c687bc6d3a70204d3944082c5cc0",
        },
        { url: "FUNDING.yml", revision: "c21af649c611bd5a3389bd3401dd5c71" },
        {
          url: "img/background/panel_bottom.svg",
          revision: "8e3e8b257cf32dd38b6c4860c8bb3410",
        },
        {
          url: "img/background/panel_top.svg",
          revision: "c0ee82e6dc6e1f1dc928df6bbd896a99",
        },
        {
          url: "img/background/space.png",
          revision: "8fec41228049badfd203484031f635c3",
        },
        {
          url: "img/favicon.png",
          revision: "6d37c5392219f48ca159cfba1b382178",
        },
        {
          url: "img/icons/blizzard.png",
          revision: "77c50afc79c67aaa8cd6924e19dbb989",
        },
        {
          url: "img/icons/explosion.png",
          revision: "374533691d3699781d1242f1e325b97d",
        },
        {
          url: "img/icons/fire.png",
          revision: "375cef63415722eef8f0b6f5883a3029",
        },
        {
          url: "img/icons/heat_wave.png",
          revision: "56759fd843d107a3d8291bb3056eda63",
        },
        {
          url: "img/icons/hurricane.png",
          revision: "1e465350f5ad09938d96850c711bfc85",
        },
        {
          url: "img/icons/ice.png",
          revision: "ef6baf3153fe083f3ba5a613b5ee93a1",
        },
        {
          url: "img/icons/machine.png",
          revision: "21e1a312fb7e8206944e264a96790992",
        },
        {
          url: "img/icons/reset.svg",
          revision: "d98dceb4eefcb90839dea47e55fc3ea6",
        },
        {
          url: "img/icons/snowbot.png",
          revision: "4cc673cc5eafa88403ec3c5eeb6925af",
        },
        {
          url: "img/icons/water.png",
          revision: "a581138c2b2dc36fb5990b847da0caa1",
        },
        {
          url: "img/icons/wind.png",
          revision: "6314c0f73f119416de7d1b32090a0c74",
        },
        {
          url: "img/logos/resmos.png",
          revision: "a341d63b43208e9dff90b64c4888f18e",
        },
        {
          url: "img/logos/white_penguin.png",
          revision: "4af174c330d334424b2e206cc9dc4c62",
        },
        {
          url: "img/portraits/1.png",
          revision: "c28f31e5195ba9bface14260ce7d0615",
        },
        {
          url: "img/portraits/10.png",
          revision: "62dbcfe7bfe0ca1cf5f21bd7859d1476",
        },
        {
          url: "img/portraits/2.png",
          revision: "ba9fc65dd8a29930d2de6c0afc6bc692",
        },
        {
          url: "img/portraits/3.png",
          revision: "1514f27302047163acbe031bb59cef89",
        },
        {
          url: "img/portraits/4.png",
          revision: "59270afd2c14514774a5a7f2be780509",
        },
        {
          url: "img/portraits/5.png",
          revision: "5af46ef6a511d9497e26902ba2cfcb28",
        },
        {
          url: "img/portraits/6.png",
          revision: "292c7b8e81910d929eb8843fe87cffee",
        },
        {
          url: "img/portraits/7.png",
          revision: "3a1a62737701b57ca2e758929e5412ad",
        },
        {
          url: "img/portraits/8.png",
          revision: "5b3cae604e22ecdbaf7a8e8bd2c19e61",
        },
        {
          url: "img/portraits/9.png",
          revision: "0eb0671939cff366c2579094c9d5fb27",
        },
        {
          url: "img/portraits/default.png",
          revision: "17f5fe97af43746dc8411b1dc942cfed",
        },
        {
          url: "img/pwa/badges/android_en.png",
          revision: "0fb68f4e9f4829171a3fcdd8d8410512",
        },
        {
          url: "img/pwa/badges/windows_en.png",
          revision: "b0fcac80538b2edd50436817b1fb7fc4",
        },
        {
          url: "img/pwa/icons/resmos_icon_1024x1024.png",
          revision: "be02e5984edbf96453130b1372dce24d",
        },
        {
          url: "img/pwa/icons/resmos_icon_128x128.png",
          revision: "af1c5bbe5b0fad45f1a61a88d9fae763",
        },
        {
          url: "img/pwa/icons/resmos_icon_144x144.png",
          revision: "45e43a55ef4e23d1389d4a3fe4b4afd0",
        },
        {
          url: "img/pwa/icons/resmos_icon_192x192.png",
          revision: "39024346aae42f38d8bd65e1c29dbe7d",
        },
        {
          url: "img/pwa/icons/resmos_icon_256x256.png",
          revision: "245d6cd3f160a3cf5ada9857fb7bc755",
        },
        {
          url: "img/pwa/icons/resmos_icon_32x32.png",
          revision: "7c23a6d1ee3904a06e34719cb55faa45",
        },
        {
          url: "img/pwa/icons/resmos_icon_384x384.png",
          revision: "b66f70d643ae3963002a32dccb0f002b",
        },
        {
          url: "img/pwa/icons/resmos_icon_48x48.png",
          revision: "fa76254e6200fae8ddae03d4e10c1734",
        },
        {
          url: "img/pwa/icons/resmos_icon_512x512.png",
          revision: "ff81b985f2a423d32b229874185ace49",
        },
        {
          url: "img/pwa/icons/resmos_icon_64x64.png",
          revision: "95be87f0fa2fb5ba471fb0bdcb19efa2",
        },
        {
          url: "img/pwa/icons/resmos_icon_72x72.png",
          revision: "ec980307d94dc8b1f69a688ba77a2db6",
        },
        {
          url: "img/pwa/icons/resmos_icon_96x96.png",
          revision: "e757419e64ec452c7a60311449c36487",
        },
        {
          url: "img/pwa/screenshots/english/computer_end_en.png",
          revision: "ad7b68c0b6988b4e38fd4bee5b27c782",
        },
        {
          url: "img/pwa/screenshots/english/computer_half_life_en.png",
          revision: "4ef2aa32d4b60f9102b6080b415070b7",
        },
        {
          url: "img/pwa/screenshots/english/computer_low_life_en.png",
          revision: "7057af236c6a2c8d24248160d8ed2222",
        },
        {
          url: "img/pwa/screenshots/english/computer_start_en.png",
          revision: "715a91073b6d93f08b91fc1087c217d2",
        },
        {
          url: "img/pwa/screenshots/english/mobile_end_en.png",
          revision: "22d08e1155862879fc5fe72feea50818",
        },
        {
          url: "img/pwa/screenshots/english/mobile_half_life_en.png",
          revision: "bd91440259b729f979527bdda9c5d3a7",
        },
        {
          url: "img/pwa/screenshots/english/mobile_low_life_en.png",
          revision: "4e4947c00abcf6423c826c9492cd6102",
        },
        {
          url: "img/pwa/screenshots/english/mobile_start_en.png",
          revision: "c21840ab2263c8850fc3155d7af11a85",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_end_en.png",
          revision: "f6f5c5c695315deb5e1ede1671632e9b",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_half_life_en.png",
          revision: "660ac635eec0eb497c31f826b35d6f74",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_low_life_en.png",
          revision: "348f79a5f74bb5351e049900ed2cf02b",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_start_en.png",
          revision: "f40377122d29e7a79555b530dcb3fdad",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_end_en.png",
          revision: "46c250d33e6fee06e1c798a3007a2605",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_half_life_en.png",
          revision: "40bee1420840c0bad886ed7aa74ad5e8",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_low_life_en.png",
          revision: "2f7b35ac4fae6e8a2251328409e71548",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_start_en.png",
          revision: "fd45712c991eb8bf5e1690ffbed14e81",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_end_spa.png",
          revision: "fa5d3c0c582d151fd1a0b5a31f725bfa",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_half_life_spa.png",
          revision: "d01316012f5c89c02b2e3093d98b6662",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_low_life_spa.png",
          revision: "19ab6e7da2eaef0872050a806d5424ab",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_start_spa.png",
          revision: "4a70eae5113d9cda0bb1b033f21a3e4b",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_end_spa.png",
          revision: "d0f55df60ababde90e9a47d8cec2df17",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_half_life_spa.png",
          revision: "161e894852ead4c7e0a5327b94b7bb19",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_low_life_spa.png",
          revision: "8120fb0e88cec4185752052b464a64a2",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_start_spa.png",
          revision: "5732eab13ec1981cedebd319edd27d0c",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_end_spa.png",
          revision: "a2375c352e7aa5b1d12b0d1bad462e77",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_half_life_spa.png",
          revision: "1b82ab2b208d3d13b56b0e5663aa0dfe",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_low_life_spa.png",
          revision: "db8c858d83fc43a0151920919c82e533",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_start_spa.png",
          revision: "9228cf5670f0845b04f415a1f85b0939",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_end_spa.png",
          revision: "2bc49ee0f8ced5f2f1ea3e9d354715ae",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_half_life_spa.png",
          revision: "a9bce6bccdd7303ce7cba22a92960cf0",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_low_life_spa.png",
          revision: "41baf75485075d3c030df5d4a392d3da",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_start_spa.png",
          revision: "56dbb93cdb5c4b197768b1c5b4638108",
        },
        { url: "index.html", revision: "ba8347cf7218f8c0374947e4566d2c5c" },
        { url: "js/main.js", revision: "b46cf6fedf401af4710f5274f4c08dd9" },
        { url: "js/model.js", revision: "cc6373dc6f269fc94d94ea331ab7b691" },
        { url: "js/utility.js", revision: "7436c90cc6fa9c3b980cd1763514ab6b" },
        {
          url: "json/languages.js",
          revision: "155d664b1734d8d2952daa9275bba6bf",
        },
        { url: "manifest.json", revision: "4b7614bfb4134e79a3044816f756f33e" },
        { url: "README.md", revision: "02fb5aa72241a2455f6299ca6affa612" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
