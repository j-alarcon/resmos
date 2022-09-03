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
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[o]) return;
    let a = {};
    const n = (e) => c(e, o),
      f = { module: { uri: o }, exports: a, require: n };
    i[o] = Promise.all(s.map((e) => f[e] || n(e))).then((e) => (r(...e), a));
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
          revision: "da3bb08a343302f5110d991f4f5c031a",
        },
        { url: "css/fonts.css", revision: "b5268186be8854158959837cae54e53f" },
        { url: "css/main.css", revision: "bb7b6a687f4d9d870c2802a2610fa706" },
        {
          url: "css/position.css",
          revision: "0cb28daefb44f27e91095e78e8ae4442",
        },
        { url: "css/reset.css", revision: "8c0490f82f0b190e8b332caa546306b0" },
        {
          url: "css/responsive.css",
          revision: "6b1257c650c3ba14c3396cd3dcd4524e",
        },
        {
          url: "fonts/poppins.ttf",
          revision: "bf59c687bc6d3a70204d3944082c5cc0",
        },
        { url: "FUNDING.yml", revision: "d71ac27283ed800598bb8fb4b731ff6c" },
        {
          url: "img/background/panel.svg",
          revision: "eff6597e77aa7cfc593ddfc8ce045415",
        },
        {
          url: "img/background/space.webp",
          revision: "02baa268ba111234759438fbad0fe425",
        },
        {
          url: "img/favicon.webp",
          revision: "b965769ee245f3da0358f921b59d2537",
        },
        {
          url: "img/icons/blizzard.webp",
          revision: "32b4c5f5fa230c6bef9c904eab7b5104",
        },
        {
          url: "img/icons/explosion.webp",
          revision: "4cc1e5e8155969aba52a4ca95a9acf44",
        },
        {
          url: "img/icons/fire.webp",
          revision: "e44c6d8de6cdac6b26d2f9c773071df9",
        },
        {
          url: "img/icons/heat_wave.webp",
          revision: "65fb5f4032d355ef6fede4c0cc8cb00a",
        },
        {
          url: "img/icons/hurricane.webp",
          revision: "9b06c521966bbd46f7aaed06a6b78440",
        },
        {
          url: "img/icons/ice.webp",
          revision: "b4d852a0ed619c8b2c0ebe4f9383ffa4",
        },
        {
          url: "img/icons/machine.webp",
          revision: "76af78991a8160a0a8812b06669d6530",
        },
        {
          url: "img/icons/reset.svg",
          revision: "d98dceb4eefcb90839dea47e55fc3ea6",
        },
        {
          url: "img/icons/snowbot.webp",
          revision: "3bf01cee06029ee4f0cac734e0f5ff96",
        },
        {
          url: "img/icons/water.webp",
          revision: "34e37b9a5486a6360ae1330160731196",
        },
        {
          url: "img/icons/wind.webp",
          revision: "02153f00ce5833c0680685a50278c2e3",
        },
        {
          url: "img/logos/penguin_white.webp",
          revision: "055e603b725c349e0cd46c0d4cc1ee14",
        },
        {
          url: "img/logos/resmos.webp",
          revision: "670aa3e9d509b57a27e9758497c028c7",
        },
        {
          url: "img/portraits/1.webp",
          revision: "131c9820dfc4cdabf5b69747c6305641",
        },
        {
          url: "img/portraits/10.webp",
          revision: "5a61bb5192ce6ef37bddd0b8e139a869",
        },
        {
          url: "img/portraits/2.webp",
          revision: "d289459ff62df9ff40416e486d873759",
        },
        {
          url: "img/portraits/3.webp",
          revision: "feceebc3027ceb6d633639d1d2ac8c90",
        },
        {
          url: "img/portraits/4.webp",
          revision: "85cf01b91e449f75fb20fbd74d0b0229",
        },
        {
          url: "img/portraits/5.webp",
          revision: "7a720b80e36f48fe7ec251415b569f8e",
        },
        {
          url: "img/portraits/6.webp",
          revision: "bbc775b5fbb94c46217aab0fde30e0c1",
        },
        {
          url: "img/portraits/7.webp",
          revision: "500aed578d9cc594839e3d82d222f8cf",
        },
        {
          url: "img/portraits/8.webp",
          revision: "7b2fc25879a1f35a64da86f5070cb0b5",
        },
        {
          url: "img/portraits/9.webp",
          revision: "1cb434027e8185c146f08e9271dae401",
        },
        {
          url: "img/portraits/default.webp",
          revision: "440e3a34c95907f640039c5b549df85d",
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
          revision: "b9e421e55c048f4ba96143c486b421a7",
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
        { url: "index.html", revision: "46a812daf56327e493d42520301bd3c3" },
        { url: "js/main.js", revision: "9dc33cb5a0edc1f21957273b4ae7c03b" },
        { url: "js/model.js", revision: "3c0b41e78ca8c0f1ea590f683c09b4fc" },
        { url: "js/utility.js", revision: "122442a7b25462fd9ba0655b93c34866" },
        {
          url: "json/languages.js",
          revision: "cce1a456c7c3981bac4a3963d27ded90",
        },
        { url: "manifest.json", revision: "a2373559313b9cdf3d132afb93dd06d7" },
        { url: "README.md", revision: "9efb4866f120f9144d9e6bce6ecf7c36" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
