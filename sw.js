if (!self.define) {
  let e,
    i = {};
  const s = (s, c) => (
    (s = new URL(s + ".js", c).href),
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
  self.define = (c, r) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[a]) return;
    let n = {};
    const o = (e) => s(e, a),
      f = { module: { uri: a }, exports: n, require: o };
    i[a] = Promise.all(c.map((e) => f[e] || o(e))).then((e) => (r(...e), n));
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
        { url: "css/main.css", revision: "4154799148ac65770059e82174e36cb8" },
        {
          url: "css/position.css",
          revision: "ecab50412eaea4c96bc75ec21b1aae8e",
        },
        { url: "css/reset.css", revision: "9ebd1ac99acfdd20a3f66d641bd93be3" },
        {
          url: "css/responsive.css",
          revision: "54cd3c4cf9a5c8aa04b8799cfb83a95d",
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
          revision: "25b73fcf0e2a49afbb0890818853c1bf",
        },
        {
          url: "img/icons/explosion.png",
          revision: "e3059a0eeb6bdfcf8081084692587b12",
        },
        {
          url: "img/icons/fire.png",
          revision: "375cef63415722eef8f0b6f5883a3029",
        },
        {
          url: "img/icons/heat_wave.png",
          revision: "21dd17681f1bef845229f0c997ecaa36",
        },
        {
          url: "img/icons/hurricane.png",
          revision: "00518daab3dec47b44e16e007748b7d4",
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
          revision: "433cc7254481b43d6ad2fa69094bd25f",
        },
        {
          url: "img/icons/water.png",
          revision: "5487811786cdc7ef7dfa4be7ac0276a5",
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
          revision: "618493b44933a49f2ea89268b1bf39aa",
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
          revision: "ac2ed17447261998a702999ab5ebf554",
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
        { url: "index.html", revision: "4ceef187b69b6be7e75455de0efa7fd2" },
        { url: "js/main.js", revision: "b7f80d995d9cce2598d1624a911ab093" },
        { url: "js/model.js", revision: "cc6373dc6f269fc94d94ea331ab7b691" },
        { url: "js/utility.js", revision: "7436c90cc6fa9c3b980cd1763514ab6b" },
        {
          url: "json/languages.js",
          revision: "08f6f1c8cb268bf3f50067ea0417aed7",
        },
        { url: "manifest.json", revision: "6b0b3d2606abd78ea571331e393795a9" },
        { url: "README.md", revision: "33bb35f91dc72d50e42d1392204f1389" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
