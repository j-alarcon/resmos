if (!self.define) {
  let e,
    i = {};
  const c = (c, s) => (
    (c = new URL(c + ".js", s).href),
    i[c] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = c), (e.onload = i), document.head.appendChild(e);
        } else (e = c), importScripts(c), i();
      }).then(() => {
        let e = i[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, r) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[a]) return;
    let o = {};
    const n = (e) => c(e, a),
      f = { module: { uri: a }, exports: o, require: n };
    i[a] = Promise.all(s.map((e) => f[e] || n(e))).then((e) => (r(...e), o));
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
          revision: "352fc1381fe030105407204bf1bee148",
        },
        { url: "css/fonts.css", revision: "b5268186be8854158959837cae54e53f" },
        { url: "css/main.css", revision: "da12535adb3947b9b44707d470495433" },
        {
          url: "css/position.css",
          revision: "98e7f5a92464615ae126120772efc716",
        },
        { url: "css/reset.css", revision: "8c0490f82f0b190e8b332caa546306b0" },
        {
          url: "fonts/poppins.ttf",
          revision: "bf59c687bc6d3a70204d3944082c5cc0",
        },
        { url: "FUNDING.yml", revision: "d71ac27283ed800598bb8fb4b731ff6c" },
        {
          url: "img/background/panel.svg",
          revision: "b8e948e2d70b983465347ac70bcdae6e",
        },
        {
          url: "img/background/space.png",
          revision: "41fbd897c69dfdfade46fa7bac949426",
        },
        {
          url: "img/favicon.webp",
          revision: "3f60ce811b5f0e8ae0d06f8deb4f3ef2",
        },
        {
          url: "img/icons/blizzard.png",
          revision: "5ac70236abd8e63ca8a04631af37e24b",
        },
        {
          url: "img/icons/explosion.png",
          revision: "2cc7666cb4b9305a3eab129e8dceaa1e",
        },
        {
          url: "img/icons/fire.png",
          revision: "3ef57e8487694c606207cc42c7615932",
        },
        {
          url: "img/icons/heat_wave.png",
          revision: "fd903e734a339d809232a4a91c4cabcd",
        },
        {
          url: "img/icons/hurricane.png",
          revision: "8e2866547932031ae55a5199a7f772aa",
        },
        {
          url: "img/icons/ice.png",
          revision: "a07cb5b869ca3bbde14c655e9ff824c5",
        },
        {
          url: "img/icons/machine.png",
          revision: "7eee4689b2c04732fbacc36f57471d12",
        },
        {
          url: "img/icons/reset.svg",
          revision: "d98dceb4eefcb90839dea47e55fc3ea6",
        },
        {
          url: "img/icons/snowbot.png",
          revision: "ea8877c17f4219f8a2477d1cb5a6b030",
        },
        {
          url: "img/icons/water.png",
          revision: "4359cea8839a8743ebdbe0c4857b6366",
        },
        {
          url: "img/icons/wind.png",
          revision: "362a4c1185f4b2cc0de71738c714ad05",
        },
        {
          url: "img/logos/resmos.png",
          revision: "d31f9a6c6fad37ed31024c2d505d7c29",
        },
        {
          url: "img/portraits/1.webp",
          revision: "3e2b370aca72bf29dadd5ab809794fa4",
        },
        {
          url: "img/portraits/10.webp",
          revision: "c45d14b1d9f6d96e7855d001408b9af5",
        },
        {
          url: "img/portraits/2.webp",
          revision: "d1b11a792636456669e14ea6c3e9676c",
        },
        {
          url: "img/portraits/3.webp",
          revision: "c92029c98cb93c5edda1d3f8aada148f",
        },
        {
          url: "img/portraits/4.webp",
          revision: "4e4a75fc17f2fbce52c13f37e5a0c383",
        },
        {
          url: "img/portraits/5.webp",
          revision: "78b0f87400e3afa9bd9d4238a5185208",
        },
        {
          url: "img/portraits/6.webp",
          revision: "4ff2603c74a8e30c74ce5ab70559742c",
        },
        {
          url: "img/portraits/7.webp",
          revision: "55f136a2fbad8c240aca4468a2b3f229",
        },
        {
          url: "img/portraits/8.webp",
          revision: "8beb21502971970b0436fd0cdf73c671",
        },
        {
          url: "img/portraits/9.webp",
          revision: "bdfe1a430c001076e5ac78bf7cd41ac8",
        },
        {
          url: "img/portraits/default.webp",
          revision: "066ce70ecfba12b68b455d4b24a1bd9d",
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
          revision: "06780941a3a7f28e6c58e60430f45b06",
        },
        {
          url: "img/pwa/icons/resmos_icon_128x128.png",
          revision: "7492b69f7294950f79d2d85150c09ea8",
        },
        {
          url: "img/pwa/icons/resmos_icon_144x144.png",
          revision: "028a0d21beeec777468e3377886ed2c4",
        },
        {
          url: "img/pwa/icons/resmos_icon_192x192.png",
          revision: "6278673df4922bf609d59f25d56fda8b",
        },
        {
          url: "img/pwa/icons/resmos_icon_256x256.png",
          revision: "7372e061c2c636d411f81eb62c7b8ee4",
        },
        {
          url: "img/pwa/icons/resmos_icon_32x32.png",
          revision: "b0820c1df1c8ef70140ce77ffa5ba988",
        },
        {
          url: "img/pwa/icons/resmos_icon_384x384.png",
          revision: "06b784ca5406e1708fc9d019f41e15b5",
        },
        {
          url: "img/pwa/icons/resmos_icon_48x48.png",
          revision: "f402c33e97699045171cc036264860fc",
        },
        {
          url: "img/pwa/icons/resmos_icon_512x512.png",
          revision: "4b63e89f86d080b78fe589e2e8afda7d",
        },
        {
          url: "img/pwa/icons/resmos_icon_64x64.png",
          revision: "cd2fdeefe27e4efdff5609aa2d89e880",
        },
        {
          url: "img/pwa/icons/resmos_icon_72x72.png",
          revision: "2aac2d0cba541b4dbe073da9cce0cafd",
        },
        {
          url: "img/pwa/icons/resmos_icon_96x96.png",
          revision: "384df9efe6fb9a82f9e90ab890365de3",
        },
        {
          url: "img/pwa/screenshots/battle_computer.webp",
          revision: "15aeb8e61747ff2f89d1bd2468709105",
        },
        {
          url: "img/pwa/screenshots/battle_mobile.webp",
          revision: "0b552b9fb9213af4ec61387780e05631",
        },
        {
          url: "img/pwa/screenshots/finish_computer.webp",
          revision: "be03dc73f90e13cc8efa41ecfaa01294",
        },
        {
          url: "img/pwa/screenshots/finish_mobile.webp",
          revision: "409babc8e37271a0a4cf51d9c0b501b5",
        },
        {
          url: "img/pwa/screenshots/start_computer.webp",
          revision: "1184590905af4e9bed1beea5adf85f92",
        },
        {
          url: "img/pwa/screenshots/start_mobile.webp",
          revision: "0f3228908f5cc6bdf066ed2722fc080d",
        },
        { url: "index.html", revision: "181c2d3faf004e0a55732e40afca33f6" },
        { url: "js/main.js", revision: "0b4ad4f3178f4b624b0b183275fd98ce" },
        { url: "js/model.js", revision: "3c0b41e78ca8c0f1ea590f683c09b4fc" },
        { url: "js/utility.js", revision: "c7f1fcaaae53eba9f795b6ee9397f240" },
        {
          url: "json/languages.js",
          revision: "d411e79361e51835a1d23adb79cb6d7e",
        },
        { url: "manifest.json", revision: "52fda570b21fb14843f21fcb42b5b050" },
        { url: "README.md", revision: "96aec09b56bcf4d61d7dac288bc4f342" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
