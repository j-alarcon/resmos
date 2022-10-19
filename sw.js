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
        { url: "css/main.css", revision: "49a18f1f9c368daed0070ce13c8df673" },
        {
          url: "css/position.css",
          revision: "7968b10eb3705c16ded9393dc2afe131",
        },
        { url: "css/reset.css", revision: "9ebd1ac99acfdd20a3f66d641bd93be3" },
        {
          url: "css/responsive.css",
          revision: "a276728c1e9107233f19cc25ba461553",
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
          revision: "571738c9bdf77c7fd877bdddc0e035d5",
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
          revision: "a426747472de22116bc2df2e79297475",
        },
        {
          url: "img/pwa/screenshots/english/computer_half_life_en.png",
          revision: "3ef1682be665136a63bc830b7b2095cf",
        },
        {
          url: "img/pwa/screenshots/english/computer_low_life_en.png",
          revision: "89a4d4dc9f58b026b8f27a9a505e0036",
        },
        {
          url: "img/pwa/screenshots/english/computer_start_en.png",
          revision: "86c9f6cd4fcbf554f7f3eeaca15c6734",
        },
        {
          url: "img/pwa/screenshots/english/mobile_end_en.png",
          revision: "900580934711f5c814ee4ea4eda92a93",
        },
        {
          url: "img/pwa/screenshots/english/mobile_half_life_en.png",
          revision: "732768c6872414e86d811455a0faeb6a",
        },
        {
          url: "img/pwa/screenshots/english/mobile_low_life_en.png",
          revision: "75f8117c6640381ae071fd0becd699b9",
        },
        {
          url: "img/pwa/screenshots/english/mobile_start_en.png",
          revision: "3935b1af34aadf0c18c4c51422c09026",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_end_en.png",
          revision: "193244992c6ece6f8361f5dad2d93607",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_half_life_en.png",
          revision: "7f03de4c5880bd5a9c88b03b9e7f642b",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_low_life_en.png",
          revision: "4502a37f2e3893fdef70edcdbcd80719",
        },
        {
          url: "img/pwa/screenshots/english/tablet_10inch_start_en.png",
          revision: "ccd3d285186c094365e4e1d9a52c3165",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_end_en.png",
          revision: "1d03ef1aa27572f1672dc1da7fb6ce81",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_half_life_en.png",
          revision: "c865de4796fa6682370367d1a84e13a2",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_low_life_en.png",
          revision: "abdcb386fce14a8569229b03021dbbe9",
        },
        {
          url: "img/pwa/screenshots/english/tablet_7inch_start_en.png",
          revision: "90ee506c533bd5ba576e93dafce7c503",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_end_spa.png",
          revision: "78be2588458e55fbeacf9e480219d4ef",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_half_life_spa.png",
          revision: "a6d620221bbc300eaec50839b414f786",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_low_life_spa.png",
          revision: "e28b97268c8d303fe90212093a596a33",
        },
        {
          url: "img/pwa/screenshots/spanish/computer_start_spa.png",
          revision: "b092850f7c4c7a45b319395fc94ce142",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_end_spa.png",
          revision: "21541ae5b0215d0d08da5fb9568991d6",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_half_life_spa.png",
          revision: "777f872e872b685bd0780a739065c2e6",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_low_life_spa.png",
          revision: "b1502e3752c71d0850d360c5d3190293",
        },
        {
          url: "img/pwa/screenshots/spanish/mobile_start_spa.png",
          revision: "3d83f4c3252cefcd10d7c8614384d1f2",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_end_spa.png",
          revision: "1fa3fd20666067b1e63fa18c7470a4c7",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_half_life_spa.png",
          revision: "18911c42b9715e4cfae2e146267ac320",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_low_life_spa.png",
          revision: "028d9f7f0d4ea18aaa8916e21f9b56f5",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_10inch_start_spa.png",
          revision: "c13c3bd44096b27db90fe12901d63f65",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_end_spa.png",
          revision: "9a1698d77cf2fc6b63f1ccf7212e03fa",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_half_life_spa.png",
          revision: "d39945fc710786130bab454a7e63f85d",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_low_life_spa.png",
          revision: "ad8d9e74a168e42823e665c1c8b4b2bd",
        },
        {
          url: "img/pwa/screenshots/spanish/tablet_7inch_start_spa.png",
          revision: "ad2ac0dd74617b8eeeb867e9f9662cac",
        },
        { url: "index.html", revision: "ba8347cf7218f8c0374947e4566d2c5c" },
        { url: "js/main.js", revision: "b7f80d995d9cce2598d1624a911ab093" },
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
