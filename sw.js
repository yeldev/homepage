if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,a,r)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}})).then(e=>{const s=r(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-c4c61989"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./static/css/vendor.2e710b8a5da9913d100f.css",revision:"cf2d15cac43eaad21d4409eff9b125c3"},{url:"android-icon-192x192.png",revision:"19794a7f84b4e372d5b4f522ea826948"},{url:"apple-icon-180x180.png",revision:"b1078b5cd5a1a550badcc210a85feb4e"},{url:"apple-icon.png",revision:"19794a7f84b4e372d5b4f522ea826948"},{url:"favicon-96x96.png",revision:"378c268e2a5d68a015c9ff978f9e8798"},{url:"favicon.ico",revision:"4928b58c003b4fdb390379cbea7c3ec3"},{url:"manifest.json",revision:"18e89f2c1e1df22cac62b87874015f86"},{url:"static/assets/images/1.jpg",revision:"4f8f0b477e82e1aa9561e7391597f814"},{url:"static/assets/images/2.jpg",revision:"867877ef227ffff9f32442427789b0ac"},{url:"static/assets/images/3.jpg",revision:"6f25f80791e0e2f0c71da3c463eed536"},{url:"static/assets/images/4.jpg",revision:"86b22655765465a431d1e9270a2f2b33"},{url:"static/assets/images/avatar.jpg",revision:"fdfdcf5fe056579c546ae36b425368b5"},{url:"static/assets/sounds/march.mp3",revision:"d15a541a07d957f4c65f238750a05011"},{url:"static/js/main.6239307acf05be672672.bundle.js",revision:"5c02f13a13d008bb3f30b09849faa10c"},{url:"static/js/vendor.e3df3ea0953a10c67a6e.bundle.js",revision:"ca8f81dee2ad38f84f1bc7019c581514"}],{}),e.registerRoute(/https:\/\/yeldev.github.io\/homepage\//,new e.StaleWhileRevalidate,"GET")}));
