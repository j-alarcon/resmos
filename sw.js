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
      d = { module: { uri: c }, exports: r, require: o };
    i[c] = Promise.all(n.map((e) => d[e] || o(e))).then((e) => (a(...e), r));
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
          revision: "9b9bc3414cb60b0ab765ec54c604532e",
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
          url: "img/logos/white_penguin_128x128.png",
          revision: "521069a5755644473fe94126ee966ab5",
        },
        {
          url: "img/portraits/1.png",
          revision: "bb13a59cc81c7172e0d35eea41a6f518",
        },
        {
          url: "img/portraits/10.png",
          revision: "319132eef9dab618f9272fa166889287",
        },
        {
          url: "img/portraits/2.png",
          revision: "97d86f3e1ae16107850414355193090a",
        },
        {
          url: "img/portraits/3.png",
          revision: "ed2262b41386d290e3422a09d9e2d5dc",
        },
        {
          url: "img/portraits/4.png",
          revision: "3c8cdd010ffb71a42c9102b99e064f61",
        },
        {
          url: "img/portraits/5.png",
          revision: "23ec4d2d166c597fe208d87bfd01355f",
        },
        {
          url: "img/portraits/6.png",
          revision: "94af8ed9898e3a25c2fb5e32c33f3ecb",
        },
        {
          url: "img/portraits/7.png",
          revision: "ab38c66c388c98f68f0b139d56f6ceab",
        },
        {
          url: "img/portraits/8.png",
          revision: "e9966655dbde1cd442b9807d20724590",
        },
        {
          url: "img/portraits/9.png",
          revision: "e7b489f85addab70591ce7f72a05f9b9",
        },
        {
          url: "img/portraits/default.png",
          revision: "92dbcc02d7a2c33a953583fcc055a066",
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
          revision: "4455b6d99b664048a14270a4d93d6e44",
        },
        {
          url: "img/pwa/screenshots/english/computer_half_life_en.png",
          revision: "31bb6d5c9d386f2ae62d3d4de7f393ee",
        },
        {
          url: "img/pwa/screenshots/english/computer_low_life_en.png",
          revision: "c8a337d03e5888e1130344063c779d4e",
        },
        {
          url: "img/pwa/screenshots/english/computer_start_en.png",
          revision: "c6fe3872b19668ee7c6cc170ef24862f",
        },
        {
          url: "img/pwa/screenshots/english/mobile_end_en.png",
          revision: "a8c0d73001fb83721b8d323a459f8bf1",
        },
        {
          url: "img/pwa/screenshots/english/mobile_half_life_en.png",
          revision: "9421ae1a1865712bd0f05c7671ed8b44",
        },
        {
          url: "img/pwa/screenshots/english/mobile_low_life_en.png",
          revision: "7643801bc30a5e229c78f774eefe05aa",
        },
        {
          url: "img/pwa/screenshots/english/mobile_start_en.png",
          revision: "16dd07c657d0e63ce6c3901da65dbfaa",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_end_en.png",
          revision: "25f89b0fb93167dfd3cca9e9a93d0d6c",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_half_life_en.png",
          revision: "c3d6ebc5b460a5f9236bafa387c308aa",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_low_life_en.png",
          revision: "28f123c27f731e5451fd4cbbccb77dd4",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_start_en.png",
          revision: "91e0dd9cb4f4987dc285b89ce48beece",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_end_en.png",
          revision: "2c020c2bf9074831e637e9805d2d79fc",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_half_life_en.png",
          revision: "e4bf5627b51131454b1e32b3d834c49b",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_low_life_en.png",
          revision: "8a2bb8a8abc62b7082242794f7092566",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_start_en.png",
          revision: "7c10156cd52fdb3b581dcd08781ef959",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_end_spa.png",
          revision: "7ab65f5bfd8d2be3e4b6db92d1f90a92",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_half_life_spa.png",
          revision: "489ca765464559e2ead8ea8e5d82e56e",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_low_life_spa.png",
          revision: "e4dd19d2a64e088a7284199c4175528e",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_start_spa.png",
          revision: "76363d43fe0ee0d4669d48c297c4dce7",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_end_spa.png",
          revision: "69f89d48c333579c79e61d21d81cddee",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_half_life_spa.png",
          revision: "056a4b157b84b6599b1baee449db8935",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_low_life_spa.png",
          revision: "a85a3a6c7d6c3f76100d72e8795b4e96",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_start_spa.png",
          revision: "78a70cf30c13d8e0d3b632fba682128b",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_end_spa.png",
          revision: "42ce7fd40b71b7c51f610c471093d397",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_half_life_spa.png",
          revision: "d1b7a20b1c747886d8f4737efa6d755d",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_low_life_spa.png",
          revision: "59a41605a7166eea3a1b5e24b067d030",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_start_spa.png",
          revision: "3f3aaac5358ab7490a86c742278fcedf",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_end_spa.png",
          revision: "b8c24932020aa6b1ef21b3033f918947",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_half_life_spa.png",
          revision: "8b5d51ac730c6c988f8f8159066d834c",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_low_life_spa.png",
          revision: "067636f4cf89596eb3d9cb920f4b4307",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_start_spa.png",
          revision: "cf9e9b9e08f943d4513c335552b11fbf",
        },
        { url: "index.html", revision: "07d9d73c9b08218acdc6c2cca9f72c1c" },
        { url: "js/main.js", revision: "0062c503b8476467169f243ceb96a783" },
        { url: "js/model.js", revision: "cc6373dc6f269fc94d94ea331ab7b691" },
        { url: "js/utility.js", revision: "7436c90cc6fa9c3b980cd1763514ab6b" },
        {
          url: "json/languages.js",
          revision: "a6ce9ee3784c3ae2648597000b05408e",
        },
        { url: "manifest.json", revision: "8a0f28618bfb4d1c5e3f913baf506220" },
        { url: "README.md", revision: "02fb5aa72241a2455f6299ca6affa612" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
