(function(){"use strict";var t={6778:function(t,n,e){var r=e(9242),o=e(3396);function u(t,n){const e=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(e,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("채팅")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(e,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("채팅목록")])),_:1})]),(0,o.Wm)(r)],64)}var i=e(89);const a={},c=(0,i.Z)(a,[["render",u]]);var f=c,s=e(2483),l=e(7139);function d(t,n,e,r,u,i){return(0,o.wg)(),(0,o.iD)("div",null,(0,l.zw)(t.kys),1)}e(7658);var p={name:"chat",setup(){},created(){this.$socket.on("chat",(t=>{console.log(t),this.chatData.push(t)}))},data(){return{chatData:[]}},methods:{}};const v=(0,i.Z)(p,[["render",d]]);var h=v;const m=[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:()=>e.e(443).then(e.bind(e,7381))}],b=(0,s.p7)({history:(0,s.PO)("/"),routes:m});var g=b,y=e(65),k=(0,y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),w=e(2066);const O=(0,r.ri)(f),j=(0,w.io)();O.config.globalProperties.$socket=j,O.config.globalProperties.kys="짱멋짐",O.use(k).use(g).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var u=n[r]={exports:{}};return t[r](u,u.exports,e),u.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,u){if(!r){var i=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],u=t[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){t.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}u=u||0;for(var s=t.length;s>0&&t[s-1][2]>u;s--)t[s]=t[s-1];t[s]=[r,o,u]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/about.f5cf6d7e.js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="chat02:";e.l=function(r,o,u,i){if(t[r])t[r].push(o);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+u){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",n+u),a.src=r),t[r]=[o];var d=function(n,e){a.onerror=a.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(e)})),n)return n(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.f.j=function(n,r){var o=e.o(t,n)?t[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(e,r){o=t[n]=[e,r]}));r.push(o[2]=u);var i=e.p+e.u(n),a=new Error,c=function(r){if(e.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};e.l(i,c,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;if(i.some((function(n){return 0!==t[n]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)var s=c(e)}for(n&&n(r);f<i.length;f++)u=i[f],e.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return e.O(s)},r=self["webpackChunkchat02"]=self["webpackChunkchat02"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(6778)}));r=e.O(r)})();
//# sourceMappingURL=app.01db53d6.js.map