import{g as t,j as e,F as n,k as s,l as r,p as i,d as o,m as a,a as c,b as u,n as h,q as l,L as d,s as f,e as m,t as g,u as p,w as y,_ as w,C as v,r as b,S as I}from"./index.esm.1c8c2954.js";var T,_,E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(t,e,n){n||(n=0);const s=Array(16);if("string"==typeof e)for(var r=0;r<16;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;r<16;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];let i,o=t.g[3];i=e+(o^n&(r^o))+s[0]+3614090360&4294967295,i=o+(r^(e=n+(i<<7&4294967295|i>>>25))&(n^r))+s[1]+3905402710&4294967295,o=e+(i<<12&4294967295|i>>>20),i=r+(n^o&(e^n))+s[2]+606105819&4294967295,i=n+(e^(r=o+(i<<17&4294967295|i>>>15))&(o^e))+s[3]+3250441966&4294967295,i=e+(o^(n=r+(i<<22&4294967295|i>>>10))&(r^o))+s[4]+4118548399&4294967295,i=o+(r^(e=n+(i<<7&4294967295|i>>>25))&(n^r))+s[5]+1200080426&4294967295,o=e+(i<<12&4294967295|i>>>20),i=r+(n^o&(e^n))+s[6]+2821735955&4294967295,i=n+(e^(r=o+(i<<17&4294967295|i>>>15))&(o^e))+s[7]+4249261313&4294967295,i=e+(o^(n=r+(i<<22&4294967295|i>>>10))&(r^o))+s[8]+1770035416&4294967295,i=o+(r^(e=n+(i<<7&4294967295|i>>>25))&(n^r))+s[9]+2336552879&4294967295,o=e+(i<<12&4294967295|i>>>20),i=r+(n^o&(e^n))+s[10]+4294925233&4294967295,i=n+(e^(r=o+(i<<17&4294967295|i>>>15))&(o^e))+s[11]+2304563134&4294967295,i=e+(o^(n=r+(i<<22&4294967295|i>>>10))&(r^o))+s[12]+1804603682&4294967295,i=o+(r^(e=n+(i<<7&4294967295|i>>>25))&(n^r))+s[13]+4254626195&4294967295,o=e+(i<<12&4294967295|i>>>20),i=r+(n^o&(e^n))+s[14]+2792965006&4294967295,i=n+(e^(r=o+(i<<17&4294967295|i>>>15))&(o^e))+s[15]+1236535329&4294967295,i=e+(r^o&((n=r+(i<<22&4294967295|i>>>10))^r))+s[1]+4129170786&4294967295,i=o+(n^r&((e=n+(i<<5&4294967295|i>>>27))^n))+s[6]+3225465664&4294967295,o=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(o^e))+s[11]+643717713&4294967295,i=n+(o^e&((r=o+(i<<14&4294967295|i>>>18))^o))+s[0]+3921069994&4294967295,i=e+(r^o&((n=r+(i<<20&4294967295|i>>>12))^r))+s[5]+3593408605&4294967295,i=o+(n^r&((e=n+(i<<5&4294967295|i>>>27))^n))+s[10]+38016083&4294967295,o=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(o^e))+s[15]+3634488961&4294967295,i=n+(o^e&((r=o+(i<<14&4294967295|i>>>18))^o))+s[4]+3889429448&4294967295,i=e+(r^o&((n=r+(i<<20&4294967295|i>>>12))^r))+s[9]+568446438&4294967295,i=o+(n^r&((e=n+(i<<5&4294967295|i>>>27))^n))+s[14]+3275163606&4294967295,o=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(o^e))+s[3]+4107603335&4294967295,i=n+(o^e&((r=o+(i<<14&4294967295|i>>>18))^o))+s[8]+1163531501&4294967295,i=e+(r^o&((n=r+(i<<20&4294967295|i>>>12))^r))+s[13]+2850285829&4294967295,i=o+(n^r&((e=n+(i<<5&4294967295|i>>>27))^n))+s[2]+4243563512&4294967295,o=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(o^e))+s[7]+1735328473&4294967295,i=n+(o^e&((r=o+(i<<14&4294967295|i>>>18))^o))+s[12]+2368359562&4294967295,i=e+((n=r+(i<<20&4294967295|i>>>12))^r^o)+s[5]+4294588738&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^r)+s[8]+2272392833&4294967295,o=e+(i<<11&4294967295|i>>>21),i=r+(o^e^n)+s[11]+1839030562&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^e)+s[14]+4259657740&4294967295,i=e+((n=r+(i<<23&4294967295|i>>>9))^r^o)+s[1]+2763975236&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^r)+s[4]+1272893353&4294967295,o=e+(i<<11&4294967295|i>>>21),i=r+(o^e^n)+s[7]+4139469664&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^e)+s[10]+3200236656&4294967295,i=e+((n=r+(i<<23&4294967295|i>>>9))^r^o)+s[13]+681279174&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^r)+s[0]+3936430074&4294967295,o=e+(i<<11&4294967295|i>>>21),i=r+(o^e^n)+s[3]+3572445317&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^e)+s[6]+76029189&4294967295,i=e+((n=r+(i<<23&4294967295|i>>>9))^r^o)+s[9]+3654602809&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^r)+s[12]+3873151461&4294967295,o=e+(i<<11&4294967295|i>>>21),i=r+(o^e^n)+s[15]+530742520&4294967295,i=n+((r=o+(i<<16&4294967295|i>>>16))^o^e)+s[2]+3299628645&4294967295,i=e+(r^((n=r+(i<<23&4294967295|i>>>9))|~o))+s[0]+4096336452&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~r))+s[7]+1126891415&4294967295,o=e+(i<<10&4294967295|i>>>22),i=r+(e^(o|~n))+s[14]+2878612391&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~e))+s[5]+4237533241&4294967295,i=e+(r^((n=r+(i<<21&4294967295|i>>>11))|~o))+s[12]+1700485571&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~r))+s[3]+2399980690&4294967295,o=e+(i<<10&4294967295|i>>>22),i=r+(e^(o|~n))+s[10]+4293915773&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~e))+s[1]+2240044497&4294967295,i=e+(r^((n=r+(i<<21&4294967295|i>>>11))|~o))+s[8]+1873313359&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~r))+s[15]+4264355552&4294967295,o=e+(i<<10&4294967295|i>>>22),i=r+(e^(o|~n))+s[6]+2734768916&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~e))+s[13]+1309151649&4294967295,i=e+(r^((n=r+(i<<21&4294967295|i>>>11))|~o))+s[4]+4149444226&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~r))+s[11]+3174756917&4294967295,o=e+(i<<10&4294967295|i>>>22),i=r+(e^(o|~n))+s[2]+718787259&4294967295,i=n+(o^((r=o+(i<<15&4294967295|i>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(i<<21&4294967295|i>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+o&4294967295}function s(t,e){this.h=e;const n=[];let s=!0;for(let r=t.length-1;r>=0;r--){const i=0|t[r];s&&i==e||(n[r]=i,s=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}(e,function(){this.blockSize=-1}),e.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.v=function(t,e){void 0===e&&(e=t.length);const s=e-this.blockSize,r=this.C;let i=this.h,o=0;for(;o<e;){if(0==i)for(;o<=s;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){n(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){n(this,r),i=0;break}}this.h=i,this.o+=e},e.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let s=0;s<32;s+=8)t[e++]=this.g[n]>>>s&255;return t};var r={};function i(t){return-128<=t&&t<128?function(t,e){var n=r;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,function(t){return new s([0|t],t<0?-1:0)}):new s([0|t],t<0?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(t<0)return d(o(-t));const e=[];let n=1;for(let s=0;t>=n;s++)e[s]=t/n|0,n*=4294967296;return new s(e,0)}var a=i(0),c=i(1),u=i(16777216);function h(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function l(t){return-1==t.h}function d(t){const e=t.g.length,n=[];for(let s=0;s<e;s++)n[s]=~t.g[s];return new s(n,~t.h).add(c)}function f(t,e){return t.add(d(e))}function m(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function p(t,e){if(h(e))throw Error("division by zero");if(h(t))return new g(a,a);if(l(t))return e=p(d(t),e),new g(d(e.g),d(e.h));if(l(e))return e=p(t,d(e)),new g(d(e.g),e.h);if(t.g.length>30){if(l(t)||l(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,s=e;s.l(t)<=0;)n=y(n),s=y(s);var r=w(n,1),i=w(s,1);for(s=w(s,2),n=w(n,2);!h(s);){var u=i.add(s);u.l(t)<=0&&(r=r.add(n),i=u),s=w(s,1),n=w(n,1)}return e=f(t,r.j(e)),new g(r,e)}for(r=a;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),s=(s=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,s-48),u=(i=o(n)).j(e);l(u)||u.l(t)>0;)u=(i=o(n-=s)).j(e);h(i)&&(i=c),r=r.add(i),t=f(t,u)}return new g(r,t)}function y(t){const e=t.g.length+1,n=[];for(let s=0;s<e;s++)n[s]=t.i(s)<<1|t.i(s-1)>>>31;return new s(n,t.h)}function w(t,e){const n=e>>5;e%=32;const r=t.g.length-n,i=[];for(let s=0;s<r;s++)i[s]=e>0?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new s(i,t.h)}(t=s.prototype).m=function(){if(l(this))return-d(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const s=this.i(n);t+=(s>=0?s:4294967296+s)*e,e*=4294967296}return t},t.toString=function(t){if((t=t||10)<2||36<t)throw Error("radix out of range: "+t);if(h(this))return"0";if(l(this))return"-"+d(this).toString(t);const e=o(Math.pow(t,6));var n=this;let s="";for(;;){const r=p(n,e).g;let i=(((n=f(n,r.j(e))).g.length>0?n.g[0]:n.h)>>>0).toString(t);if(h(n=r))return i+s;for(;i.length<6;)i="0"+i;s=i+s}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=f(this,t))?-1:h(t)?0:1},t.abs=function(){return l(this)?d(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let r=0;for(let s=0;s<=e;s++){let e=r+(65535&this.i(s))+(65535&t.i(s)),i=(e>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);r=i>>>16,e&=65535,i&=65535,n[s]=i<<16|e}return new s(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(h(this)||h(t))return a;if(l(this))return l(t)?d(this).j(d(t)):d(d(this).j(t));if(l(t))return d(this.j(d(t)));if(this.l(u)<0&&t.l(u)<0)return o(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let e=0;e<t.g.length;e++){const s=this.i(r)>>>16,i=65535&this.i(r),o=t.i(e)>>>16,a=65535&t.i(e);n[2*r+2*e]+=i*a,m(n,2*r+2*e),n[2*r+2*e+1]+=s*a,m(n,2*r+2*e+1),n[2*r+2*e+1]+=i*o,m(n,2*r+2*e+1),n[2*r+2*e+2]+=s*o,m(n,2*r+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new s(n,0)},t.B=function(t){return p(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let s=0;s<e;s++)n[s]=this.i(s)&t.i(s);return new s(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let s=0;s<e;s++)n[s]=this.i(s)|t.i(s);return new s(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let s=0;s<e;s++)n[s]=this.i(s)^t.i(s);return new s(n,this.h^t.h)},e.prototype.digest=e.prototype.A,e.prototype.reset=e.prototype.u,e.prototype.update=e.prototype.v,_=e,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.B,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=o,s.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');const s=o(Math.pow(n,8));let r=a;for(let t=0;t<e.length;t+=8){var i=Math.min(8,e.length-t);const a=parseInt(e.substring(t,t+i),n);i<8?(i=o(Math.pow(n,i)),r=r.j(i).add(o(a))):(r=r.j(s),r=r.add(o(a)))}return r},T=s}).apply(void 0!==E?E:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var S,x,C,N,A,D,k,R,M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,e=Object.defineProperty;var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof M&&M];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function s(t,s){if(s)t:{var r=n;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in r))break t;r=r[o]}(s=s(i=r[t=t[t.length-1]]))!=i&&null!=s&&e(r,t,{configurable:!0,writable:!0,value:s})}}s("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){return(c=a).apply(null,arguments)}function u(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function h(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}var l="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function d(t){const e=t.length;if(e>0){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function f(t,e){for(let e=1;e<arguments.length;e++){const s=arguments[e];var n=typeof s;if("array"==(n="object"!=n?n:s?Array.isArray(s)?"array":n:"null")||"object"==n&&"number"==typeof s.length){n=t.length||0;const e=s.length||0;t.length=n+e;for(let r=0;r<e;r++)t[n+r]=s[r]}else t.push(s)}}function m(t){i.setTimeout(()=>{throw t},0)}function g(){var t=b;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var p=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new y,t=>t.reset());class y{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let w,v=!1,b=new class{constructor(){this.h=this.g=null}add(t,e){const n=p.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},I=()=>{const t=Promise.resolve(void 0);w=()=>{t.then(T)}};function T(){for(var t;t=g();){try{t.h.call(t.g)}catch(t){m(t)}var e=p;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}v=!1}function _(){this.u=this.u,this.C=this.C}function E(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},E.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};i.addEventListener("test",t,e),i.removeEventListener("test",t,e)}catch(t){}return t}();function V(t){return/^[\s\xa0]*$/.test(t)}function P(t,e){E.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}h(P,E),P.prototype.init=function(t,e){const n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,(e=t.relatedTarget)||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&P.Z.h.call(this)},P.prototype.h=function(){P.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),L=0;function q(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++L,this.da=this.fa=!1}function U(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function B(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function j(t){const e={};for(const n in t)e[n]=t[n];return e}const z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function K(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<z.length;e++)n=z[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function G(t){this.src=t,this.g={},this.h=0}function $(t,e){const n=e.type;if(n in t.g){var s,r=t.g[n],i=Array.prototype.indexOf.call(r,e,void 0);(s=i>=0)&&Array.prototype.splice.call(r,i,1),s&&(U(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Q(t,e,n,s){for(let r=0;r<t.length;++r){const i=t[r];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}G.prototype.add=function(t,e,n,s,r){const i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);const o=Q(t,e,s,r);return o>-1?(e=t[o],n||(e.fa=!1)):((e=new q(e,this.src,i,!!s,r)).fa=n,t.push(e)),e};var H="closure_lm_"+(1e6*Math.random()|0),W={};function J(t,e,n,s,r){if(s&&s.once)return X(t,e,n,s,r);if(Array.isArray(e)){for(let i=0;i<e.length;i++)J(t,e[i],n,s,r);return null}return n=it(n),t&&t[F]?t.J(e,n,o(s)?!!s.capture:!!s,r):Y(t,e,n,!1,s,r)}function Y(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");const a=o(r)?!!r.capture:!!r;let c=st(t);if(c||(t[H]=c=new G(t)),(n=c.add(e,n,s,a,i)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=nt;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)O||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(et(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function X(t,e,n,s,r){if(Array.isArray(e)){for(let i=0;i<e.length;i++)X(t,e[i],n,s,r);return null}return n=it(n),t&&t[F]?t.K(e,n,o(s)?!!s.capture:!!s,r):Y(t,e,n,!0,s,r)}function Z(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Z(t,e[i],n,s,r);else s=o(s)?!!s.capture:!!s,n=it(n),t&&t[F]?(t=t.i,(i=String(e).toString())in t.g&&((n=Q(e=t.g[i],n,s,r))>-1&&(U(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[i],t.h--)))):t&&(t=st(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Q(e,n,s,r)),(n=t>-1?e[t]:null)&&tt(n))}function tt(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[F])$(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(et(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=st(e))?($(n,t),0==n.h&&(n.src=null,e[H]=null)):U(t)}}}function et(t){return t in W?W[t]:W[t]="on"+t}function nt(t,e){if(t.da)t=!0;else{e=new P(e,this);const n=t.listener,s=t.ha||t.src;t.fa&&tt(t),t=n.call(s,e)}return t}function st(t){return(t=t[H])instanceof G?t:null}var rt="__closure_events_fn_"+(1e9*Math.random()>>>0);function it(t){return"function"==typeof t?t:(t[rt]||(t[rt]=function(e){return t.handleEvent(e)}),t[rt])}function ot(){_.call(this),this.i=new G(this),this.M=this,this.G=null}function at(t,e){var n,s=t.G;if(s)for(n=[];s;s=s.G)n.push(s);if(t=t.M,s=e.type||e,"string"==typeof e)e=new E(e,t);else if(e instanceof E)e.target=e.target||t;else{var r=e;K(e=new E(s,t),r)}let i,o;if(r=!0,n)for(o=n.length-1;o>=0;o--)i=e.g=n[o],r=ct(i,s,!0,e)&&r;if(i=e.g=t,r=ct(i,s,!0,e)&&r,r=ct(i,s,!1,e)&&r,n)for(o=0;o<n.length;o++)i=e.g=n[o],r=ct(i,s,!1,e)&&r}function ct(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();let r=!0;for(let i=0;i<e.length;++i){const o=e[i];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&$(t.i,o),r=!1!==e.call(n,s)&&r}}return r&&!s.defaultPrevented}function ut(t){t.g=function(t,e){if("function"!=typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=c(t.handleEvent,t)}return Number(e)>2147483647?-1:i.setTimeout(t,e||0)}(()=>{t.g=null,t.i&&(t.i=!1,ut(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}h(ot,_),ot.prototype[F]=!0,ot.prototype.removeEventListener=function(t,e,n,s){Z(this,t,e,n,s)},ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)U(n[t]);delete t.g[e],t.h--}}this.G=null},ot.prototype.J=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},ot.prototype.K=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};class ht extends _{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:ut(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(t){_.call(this),this.h=t,this.g={}}h(lt,_);var dt=[];function ft(t){B(t.g,function(t,e){this.g.hasOwnProperty(e)&&tt(t)},t),t.g={}}lt.prototype.N=function(){lt.Z.N.call(this),ft(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mt=i.JSON.stringify,gt=i.JSON.parse,pt=class{stringify(t){return i.JSON.stringify(t,void 0)}parse(t){return i.JSON.parse(t,void 0)}};function yt(){}function wt(){}var vt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function bt(){E.call(this,"d")}function It(){E.call(this,"c")}h(bt,E),h(It,E);var Tt={},_t=null;function Et(){return _t=_t||new ot}function St(t){E.call(this,Tt.Ia,t)}function xt(t){const e=Et();at(e,new St(e))}function Ct(t,e){E.call(this,Tt.STAT_EVENT,t),this.stat=e}function Nt(t){const e=Et();at(e,new Ct(e,t))}function At(t,e){E.call(this,Tt.Ja,t),this.size=e}function Dt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){t()},e)}function kt(){this.g=!0}function Rt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{const i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(n.length<2)){var s=n[1];if(Array.isArray(s)&&!(s.length<1)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(let t=1;t<s.length;t++)s[t]=""}}}return mt(i)}catch(t){return e}}(t,n)+(s?" "+s:"")})}Tt.Ia="serverreachability",h(St,E),Tt.STAT_EVENT="statevent",h(Ct,E),Tt.Ja="timingevent",h(At,E),kt.prototype.ua=function(){this.g=!1},kt.prototype.info=function(){};var Mt,Ot={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Vt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Pt(){}function Ft(t){return encodeURIComponent(String(t))}function Lt(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function qt(t,e,n,s){this.j=t,this.i=e,this.l=n,this.S=s||1,this.V=new lt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ut}function Ut(){this.i=null,this.g="",this.h=!1}h(Pt,yt),Pt.prototype.g=function(){return new XMLHttpRequest},Mt=new Pt;var Bt={},jt={};function zt(t,e,n){t.M=1,t.A=me(ue(e)),t.u=n,t.R=!0,Kt(t,null)}function Kt(t,e){t.F=Date.now(),Qt(t),t.B=ue(t.A);var n=t.B,s=t.S;Array.isArray(s)||(s=[String(s)]),Ne(n.i,"t",s),t.C=0,n=t.j.L,t.h=new Ut,t.g=gn(t.j,n?e:null,!t.u),t.P>0&&(t.O=new ht(c(t.Y,t,t.g),t.P)),e=t.V,n=t.g,s=t.ba;var r="readystatechange";Array.isArray(r)||(r&&(dt[0]=r.toString()),r=dt);for(let t=0;t<r.length;t++){const i=J(n,r[t],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}e=t.J?j(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),xt(),function(t,e,n,s,r,i){t.info(function(){if(t.g)if(i){var o="",a=i.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o})}(t.i,t.v,t.B,t.l,t.S,t.u)}function Gt(t){return!!t.g&&("GET"==t.v&&2!=t.M&&t.j.Aa)}function $t(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?jt:(n=Number(e.substring(n,s)),isNaN(n)?Bt:(s+=1)+n>e.length?jt:(e=e.slice(s,s+n),t.C=s+n,e))}function Qt(t){t.T=Date.now()+t.H,Ht(t,t.H)}function Ht(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=Dt(c(t.aa,t),e)}function Wt(t){t.D&&(i.clearTimeout(t.D),t.D=null)}function Jt(t){0==t.j.I||t.K||hn(t.j,t)}function Yt(t){Wt(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,ft(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function Xt(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||se(n.h,t)))if(!t.L&&se(n.h,t)&&3==n.I){try{var s=n.Ba.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;un(n),Xe(n)}on(n),Nt(18)}}else n.xa=r[1],0<n.xa-n.K&&r[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Dt(c(n.Va,n),6e3));ne(n.h)<=1&&n.ta&&(n.ta=void 0)}else dn(n,11)}else if((t.L||n.g==t)&&un(n),!V(e))for(r=n.Ba.g.parse(e),e=0;e<r.length;e++){let c=r[e];const h=c[0];if(!(h<=n.K))if(n.K=h,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const e=c[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const r=c[4];null!=r&&(n.za=r,n.j.info("SVER="+n.za));const h=c[5];null!=h&&"number"==typeof h&&h>0&&(s=1.5*h,n.O=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(re(i,i.h),i.h=null))}if(s.G){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.wa=t,fe(s.J,s.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=t;if((s=n).na=mn(s,s.L?s.ba:null,s.W),o.L){ie(s.h,o);var a=o,u=s.O;u&&(a.H=u),a.D&&(Wt(a),Qt(a)),s.g=o}else rn(s);n.i.length>0&&tn(n)}else"stop"!=c[0]&&"close"!=c[0]||dn(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?dn(n,7):Ye(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}xt()}catch(t){}}qt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==Qe(t)?e.j():this.Y(t)},qt.prototype.Y=function(t){try{if(t==this.g)t:{const c=Qe(this.g),u=this.g.ya();this.g.ca();if(!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||He(this.g)))){this.K||4!=c||7==u||xt(),Wt(this);var e=this.g.ca();this.X=e;var n=function(t){if(!Gt(t))return t.g.la();const e=He(t.g);if(""===e)return"";let n="";const s=e.length,r=4==Qe(t.g);if(!t.h.i){if("undefined"==typeof TextDecoder)return Yt(t),Jt(t),"";t.h.i=new i.TextDecoder}for(let i=0;i<s;i++)t.h.h=!0,n+=t.h.i.decode(e[i],{stream:!(r&&i==s-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}(this);if(this.o=200==e,function(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o})}(this.i,this.v,this.B,this.l,this.S,c,e),this.o){if(this.U&&!this.L){e:{if(this.g){var s,r=this.g;if((s=r.g?r.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(s)){var o=s;break e}}o=null}if(!(t=o)){this.o=!1,this.m=3,Nt(12),Yt(this),Jt(this);break t}Rt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xt(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=$t(this,n),e==jt){4==c&&(this.m=4,Nt(14),t=!1),Rt(this.i,this.l,null,"[Incomplete Response]");break}if(e==Bt){this.m=4,Nt(15),Rt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}Rt(this.i,this.l,e,null),Xt(this,e)}if(Gt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,Nt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),an(a),a.P=!0,Nt(11))}}else Rt(this.i,this.l,n,"[Invalid Chunked Response]"),Yt(this),Jt(this)}else Rt(this.i,this.l,n,null),Xt(this,n);4==c&&Yt(this),this.o&&!this.K&&(4==c?hn(this.j,this):(this.o=!1,Qt(this)))}else(function(t){const e={};t=(t.g&&Qe(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(V(t[s]))continue;var n=Lt(t[s]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,Nt(12)):(this.m=0,Nt(13)),Yt(this),Jt(this)}}}catch(t){}},qt.prototype.cancel=function(){this.K=!0,Yt(this)},qt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.i,this.B),2!=this.M&&(xt(),Nt(17)),Yt(this),this.m=2,Jt(this)):Ht(this,this.T-t)};var Zt=class{constructor(t,e){this.g=t,this.map=e}};function te(t){this.l=t||10,i.PerformanceNavigationTiming?t=(t=i.performance.getEntriesByType("navigation")).length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ee(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ne(t){return t.h?1:t.g?t.g.size:0}function se(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function re(t,e){t.g?t.g.add(e):t.h=e}function ie(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function oe(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return d(t.i)}te.prototype.cancel=function(){if(this.i=oe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ae=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ce(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof ce?(this.l=t.l,he(this,t.j),this.o=t.o,this.g=t.g,le(this,t.u),this.h=t.h,de(this,Ae(t.i)),this.m=t.m):t&&(e=String(t).match(ae))?(this.l=!1,he(this,e[1]||"",!0),this.o=ge(e[2]||""),this.g=ge(e[3]||"",!0),le(this,e[4]),this.h=ge(e[5]||"",!0),de(this,e[6]||"",!0),this.m=ge(e[7]||"")):(this.l=!1,this.i=new _e(null,this.l))}function ue(t){return new ce(t)}function he(t,e,n){t.j=n?ge(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function le(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function de(t,e,n){e instanceof _e?(t.i=e,function(t,e){e&&!t.j&&(Ee(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(Se(this,e),Ne(this,n,t))},t)),t.j=e}(t.i,t.l)):(n||(e=pe(e,Ie)),t.i=new _e(e,t.l))}function fe(t,e,n){t.i.set(e,n)}function me(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ge(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ye),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ye(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ce.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(pe(e,we,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(pe(e,we,!0),"@"),t.push(Ft(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(pe(n,"/"==n.charAt(0)?be:ve,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",pe(n,Te)),t.join("")},ce.prototype.resolve=function(t){const e=ue(this);let n=!!t.j;n?he(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var s=t.h;if(n)le(e,t.u);else if(n=!!t.h){if("/"!=s.charAt(0))if(this.g&&!this.h)s="/"+s;else{var r=e.h.lastIndexOf("/");-1!=r&&(s=e.h.slice(0,r+1)+s)}if(".."==(r=s)||"."==r)s="";else if(-1!=r.indexOf("./")||-1!=r.indexOf("/.")){s=0==r.lastIndexOf("/",0),r=r.split("/");const t=[];for(let e=0;e<r.length;){const n=r[e++];"."==n?s&&e==r.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),s&&e==r.length&&t.push("")):(t.push(n),s=!0)}s=t.join("/")}else s=r}return n?e.h=s:n=""!==t.i.toString(),n?de(e,Ae(t.i)):n=!!t.m,n&&(e.m=t.m),e};var we=/[#\/\?@]/g,ve=/[#\?:]/g,be=/[#\?]/g,Ie=/[#\?@]/g,Te=/#/g;function _e(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ee(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const s=t[n].indexOf("=");let r,i=null;s>=0?(r=t[n].substring(0,s),i=t[n].substring(s+1)):r=t[n],e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function Se(t,e){Ee(t),e=De(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xe(t,e){return Ee(t),e=De(t,e),t.g.has(e)}function Ce(t,e){Ee(t);let n=[];if("string"==typeof e)xe(t,e)&&(n=n.concat(t.g.get(De(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function Ne(t,e,n){Se(t,e),n.length>0&&(t.i=null,t.g.set(De(t,e),d(n)),t.h+=n.length)}function Ae(t){const e=new _e;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function De(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ke(t,e,n,s,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),s(n)}catch(t){}}function Re(){this.g=new pt}function Me(t){this.i=t.Sb||null,this.h=t.ab||!1}function Oe(t,e){ot.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Ve(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function Pe(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Fe(t)}function Fe(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Le(t){let e="";return B(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function qe(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Le(n),"string"==typeof t?null!=n&&Ft(n):fe(t,e,n))}function Ue(t){ot.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(t=_e.prototype).add=function(t,e){Ee(this),this.i=null,t=De(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ee(this),this.g.forEach(function(n,s){n.forEach(function(n){t.call(e,n,s,this)},this)},this)},t.set=function(t,e){return Ee(this),this.i=null,xe(this,t=De(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&(t=Ce(this,t)).length>0?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let s=0;s<e.length;s++){var n=e[s];const r=Ft(n);n=Ce(this,n);for(let e=0;e<n.length;e++){let s=r;""!==n[e]&&(s+="="+Ft(n[e])),t.push(s)}}return this.i=t.join("&")},h(Me,yt),Me.prototype.g=function(){return new Oe(this.i,this.h)},h(Oe,ot),(t=Oe.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,Fe(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||i).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Pe(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fe(this)),this.g&&(this.readyState=3,Fe(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ve(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pe(this):Fe(this),3==this.readyState&&Ve(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,Pe(this))},t.Na=function(t){this.g&&(this.response=t,Pe(this))},t.ga=function(){this.g&&Pe(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Oe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),h(Ue,ot);var Be=/^https?$/i,je=["POST","PUT"];function ze(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,Ke(t),$e(t)}function Ke(t){t.A||(t.A=!0,at(t,"complete"),at(t,"error"))}function Ge(t){if(t.h&&void 0!==r)if(t.v&&4==Qe(t))setTimeout(t.Ca.bind(t),0);else if(at(t,"readystatechange"),4==Qe(t)){t.h=!1;try{const r=t.ca();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===r){let e=String(t.D).match(ae)[1]||null;!e&&i.self&&i.self.location&&(e=i.self.location.protocol.slice(0,-1)),s=!Be.test(e?e.toLowerCase():"")}n=s}if(n)at(t,"complete"),at(t,"success");else{t.o=6;try{var o=Qe(t)>2?t.g.statusText:""}catch(t){o=""}t.l=o+" ["+t.ca()+"]",Ke(t)}}finally{$e(t)}}}function $e(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const n=t.g;t.g=null,e||at(t,"ready");try{n.onreadystatechange=null}catch(t){}}}function Qe(t){return t.g?t.g.readyState:0}function He(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function We(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Je(t){this.za=0,this.i=[],this.j=new kt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=We("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=We("baseRetryDelayMs",5e3,t),this.Za=We("retryDelaySeedMs",1e4,t),this.Ta=We("forwardChannelMaxRetries",2,t),this.va=We("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new te(t&&t.concurrentRequestLimit),this.Ba=new Re,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Ye(t){if(Ze(t),3==t.I){var e=t.V++,n=ue(t.J);if(fe(n,"SID",t.M),fe(n,"RID",e),fe(n,"TYPE","terminate"),nn(t,n),(e=new qt(t,t.j,e)).M=2,e.A=me(ue(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(e.A.toString(),"")}catch(t){}!n&&i.Image&&((new Image).src=e.A,n=!0),n||(e.g=gn(e.j,null),e.g.ea(e.A)),e.F=Date.now(),Qt(e)}fn(t)}function Xe(t){t.g&&(an(t),t.g.cancel(),t.g=null)}function Ze(t){Xe(t),t.v&&(i.clearTimeout(t.v),t.v=null),un(t),t.h.cancel(),t.m&&("number"==typeof t.m&&i.clearTimeout(t.m),t.m=null)}function tn(t){if(!ee(t.h)&&!t.m){t.m=!0;var e=t.Ea;w||I(),v||(w(),v=!0),b.add(e,t),t.D=0}}function en(t,e){var n;n=e?e.l:t.V++;const s=ue(t.J);fe(s,"SID",t.M),fe(s,"RID",n),fe(s,"AID",t.K),nn(t,s),t.u&&t.o&&qe(s,t.u,t.o),n=new qt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=sn(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),re(t.h,n),zt(n,s,e)}function nn(t,e){t.H&&B(t.H,function(t,n){fe(e,n,t)}),t.l&&B({},function(t,n){fe(e,n,t)})}function sn(t,e,n){n=Math.min(t.i.length,n);const s=t.l?c(t.l.Ka,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let u=0;u<n;u++){var i=r[u].g;const n=r[u].map;if((i-=e)<0)e=Math.max(0,r[u].g-100),c=!1;else try{i="req"+i+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[e,n]of a){let s=n;o(n)&&(s=mt(n)),t.push(i+e+"="+encodeURIComponent(s))}}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}catch(t){s&&s(n)}}if(c){a=t.join("&");break t}}a=void 0}return t=t.i.splice(0,n),e.G=t,a}function rn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;w||I(),v||(w(),v=!0),b.add(e,t),t.A=0}}function on(t){return!(t.g||t.v||t.A>=3)&&(t.Y++,t.v=Dt(c(t.Da,t),ln(t,t.A)),t.A++,!0)}function an(t){null!=t.B&&(i.clearTimeout(t.B),t.B=null)}function cn(t){t.g=new qt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=ue(t.na);fe(e,"RID","rpc"),fe(e,"SID",t.M),fe(e,"AID",t.K),fe(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&fe(e,"TO",t.ia),fe(e,"TYPE","xmlhttp"),nn(t,e),t.u&&t.o&&qe(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=me(ue(e)),n.u=null,n.R=!0,Kt(n,t)}function un(t){null!=t.C&&(i.clearTimeout(t.C),t.C=null)}function hn(t,e){var n=null;if(t.g==e){un(t),an(t),t.g=null;var s=2}else{if(!se(t.h,e))return;n=e.G,ie(t.h,e),s=1}if(0!=t.I)if(e.o)if(1==s){n=e.u?e.u.length:0,e=Date.now()-e.F;var r=t.D;at(s=Et(),new At(s,n)),tn(t)}else rn(t);else if(3==(r=e.m)||0==r&&e.X>0||!(1==s&&function(t,e){return!(ne(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.G.concat(t.i),0):1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta)||(t.m=Dt(c(t.Ea,t,e),ln(t,t.D)),t.D++,0)))}(t,e)||2==s&&on(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),r){case 1:dn(t,5);break;case 4:dn(t,10);break;case 3:dn(t,6);break;default:dn(t,2)}}function ln(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function dn(t,e){if(t.j.info("Error code "+e),2==e){var n=c(t.bb,t),s=t.Ua;const e=!s;s=new ce(s||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||he(s,"https"),me(s),e?function(t,e){const n=new kt;if(i.Image){const s=new Image;s.onload=u(ke,n,"TestLoadImage: loaded",!0,e,s),s.onerror=u(ke,n,"TestLoadImage: error",!1,e,s),s.onabort=u(ke,n,"TestLoadImage: abort",!1,e,s),s.ontimeout=u(ke,n,"TestLoadImage: timeout",!1,e,s),i.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}(s.toString(),n):function(t,e){new kt;const n=new AbortController,s=setTimeout(()=>{n.abort(),ke(0,0,!1,e)},1e4);fetch(t,{signal:n.signal}).then(t=>{clearTimeout(s),t.ok?ke(0,0,!0,e):ke(0,0,!1,e)}).catch(()=>{clearTimeout(s),ke(0,0,!1,e)})}(s.toString(),n)}else Nt(2);t.I=0,t.l&&t.l.pa(e),fn(t),Ze(t)}function fn(t){if(t.I=0,t.ja=[],t.l){const e=oe(t.h);0==e.length&&0==t.i.length||(f(t.ja,e),f(t.ja,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.oa()}}function mn(t,e,n){var s=n instanceof ce?ue(n):new ce(n);if(""!=s.g)e&&(s.g=e+"."+s.g),le(s,s.u);else{var r=i.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;const t=new ce(null);s&&he(t,s),e&&(t.g=e),r&&le(t,r),n&&(t.h=n),s=t}return n=t.G,e=t.wa,n&&e&&fe(s,n,e),fe(s,"VER",t.ka),nn(t,s),s}function gn(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Aa&&!t.ma?new Ue(new Me({ab:n})):new Ue(t.ma)).Fa(t.L),e}function pn(){}function yn(){}function wn(t,e){ot.call(this),this.g=new Je(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!V(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!V(e)&&(this.g.G=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new In(this)}function vn(t){bt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function bn(){It.call(this),this.status=1}function In(t){this.g=t}(t=Ue.prototype).Fa=function(t){this.H=t},t.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mt.g(),this.g.onreadystatechange=l(c(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(t){return void ze(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),r=i.FormData&&t instanceof i.FormData,!(Array.prototype.indexOf.call(je,e,void 0)>=0)||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(t){ze(this,t)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,at(this,"complete"),at(this,"abort"),$e(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$e(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Ge(this):this.Xa())},t.Xa=function(){Ge(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return Qe(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),gt(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Je.prototype).ka=8,t.I=1,t.connect=function(t,e,n,s){Nt(0),this.W=t,this.H=e||{},n&&void 0!==s&&(this.H.OSID=n,this.H.OAID=s),this.F=this.X,this.J=mn(this,null,this.W),tn(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new qt(this,this.j,t);let i=this.o;if(this.U&&(i?(i=j(i),K(i,this.U)):i=this.U),null!==this.u||this.R||(r.J=i,i=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if((e+=s)>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=sn(this,r,e),fe(n=ue(this.J),"RID",t),fe(n,"CVER",22),this.G&&fe(n,"X-HTTP-Session-Id",this.G),nn(this,n),i&&(this.R?e="headers="+Ft(Le(i))+"&"+e:this.u&&qe(n,this.u,i)),re(this.h,r),this.Ra&&fe(n,"TYPE","init"),this.S?(fe(n,"$req",e),fe(n,"SID","null"),r.U=!0,zt(r,n,null)):zt(r,n,e),this.I=2}}else 3==this.I&&(t?en(this,t):0==this.i.length||ee(this.h)||en(this))},t.Da=function(){if(this.v=null,cn(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Dt(c(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Nt(10),Xe(this),cn(this))},t.Va=function(){null!=this.C&&(this.C=null,Xe(this),on(this),Nt(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=pn.prototype).ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},yn.prototype.g=function(t,e){return new wn(t,e)},h(wn,ot),wn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){Ye(this.g)},wn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=mt(t),t=n);e.i.push(new Zt(e.Ya++,t)),3==e.I&&tn(e)},wn.prototype.N=function(){this.g.l=null,delete this.j,Ye(this.g),delete this.g,wn.Z.N.call(this)},h(vn,bt),h(bn,It),h(In,pn),In.prototype.ra=function(){at(this.g,"a")},In.prototype.qa=function(t){at(this.g,new vn(t))},In.prototype.pa=function(t){at(this.g,new bn)},In.prototype.oa=function(){at(this.g,"b")},yn.prototype.createWebChannel=yn.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,R=function(){return new yn},k=function(){return Et()},D=Tt,A={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ot.NO_ERROR=0,Ot.TIMEOUT=8,Ot.HTTP_ERROR=6,N=Ot,Vt.COMPLETE="complete",C=Vt,wt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",ot.prototype.listen=ot.prototype.J,x=wt,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,S=Ue}).apply(void 0!==M?M:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}O.UNAUTHENTICATED=new O(null),O.GOOGLE_CREDENTIALS=new O("google-credentials-uid"),O.FIRST_PARTY=new O("first-party-uid"),O.MOCK_USER=new O("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let V="12.12.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P=new d("@firebase/firestore");function F(){return P.logLevel}function L(t){P.setLogLevel(t)}function q(t,...n){if(P.logLevel<=e.DEBUG){const e=n.map(j);P.debug(`Firestore (${V}): ${t}`,...e)}}function U(t,...n){if(P.logLevel<=e.ERROR){const e=n.map(j);P.error(`Firestore (${V}): ${t}`,...e)}}function B(t,...n){if(P.logLevel<=e.WARN){const e=n.map(j);P.warn(`Firestore (${V}): ${t}`,...e)}}function j(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e,n){let s="Unexpected state";"string"==typeof e?s=e:n=e,K(t,s,n)}function K(t,e,n){let s=`FIRESTORE (${V}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{s+=" CONTEXT: "+JSON.stringify(n)}catch(t){s+=" CONTEXT: "+n}throw U(s),new Error(s)}function G(t,e,n,s){let r="Unexpected state";"string"==typeof n?r=n:s=n,t||K(e,r,s)}function $(t,e){t||z(57014,e)}function Q(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends n{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class X{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(O.UNAUTHENTICATED))}shutdown(){}}class Z{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class tt{constructor(t){this.t=t,this.currentUser=O.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(void 0===this.o,42304);let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new J;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new J,t.enqueueRetryable(()=>s(this.currentUser))};const i=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await s(this.currentUser)})},o=t=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new J)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(G("string"==typeof e.accessToken,31837,{l:e}),new Y(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(null===t||"string"==typeof t,2055,{h:t}),new O(t)}}class et{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=O.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class nt{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new et(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(O.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class st{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rt{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,s(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){G(void 0===this.o,3512);const n=t=>{null!=t.error&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,q("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const s=t=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>s(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?s(t):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new st(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(G("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new st(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class it{getToken(){return Promise.resolve(new st(""))}invalidateToken(){}start(t,e){}shutdown(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=ot(40);for(let s=0;s<n.length;++s)e.length<20&&n[s]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[s]%62))}return e}}function ct(t,e){return t<e?-1:t>e?1:0}function ut(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.charAt(s),r=e.charAt(s);if(n!==r)return dt(n)===dt(r)?ct(n,r):dt(n)?1:-1}return ct(t.length,e.length)}const ht=55296,lt=57343;function dt(t){const e=t.charCodeAt(0);return e>=ht&&e<=lt}function ft(t,e,n){return t.length===e.length&&t.every((t,s)=>n(t,e[s]))}function mt(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="__name__";class pt{constructor(t,e,n){void 0===e?e=0:e>t.length&&z(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&z(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===pt.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pt?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=pt.compareSegments(t.get(s),e.get(s));if(0!==n)return n}return ct(t.length,e.length)}static compareSegments(t,e){const n=pt.isNumericId(t),s=pt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?pt.extractNumericId(t).compare(pt.extractNumericId(e)):ut(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return T.fromString(t.substring(4,t.length-2))}}class yt extends pt{construct(t,e,n){return new yt(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new W(H.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new yt(e)}static emptyPath(){return new yt([])}}const wt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends pt{construct(t,e,n){return new vt(t,e,n)}static isValidIdentifier(t){return wt.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===gt}static keyField(){return new vt([gt])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new W(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new W(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new W(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new W(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new vt(e)}static emptyPath(){return new vt([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.path=t}static fromPath(t){return new bt(yt.fromString(t))}static fromName(t){return new bt(yt.fromString(t).popFirst(5))}static empty(){return new bt(yt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===yt.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return yt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new bt(new yt(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e,n){if(!n)throw new W(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Tt(t,e,n,s){if(!0===e&&!0===s)throw new W(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _t(t){if(!bt.isDocumentKey(t))throw new W(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Et(t){if(bt.isDocumentKey(t))throw new W(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function St(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function xt(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":z(12329,{type:typeof t})}function Ct(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xt(t);throw new W(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Nt(t,e){if(e<=0)throw new W(H.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){const n={typeString:t};return e&&(n.value=e),n}function Dt(t,e){if(!St(t))throw new W(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new W(H.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=-62135596800,Rt=1e6;class Mt{static now(){return Mt.fromMillis(Date.now())}static fromDate(t){return Mt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Rt);return new Mt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new W(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new W(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<kt)throw new W(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new W(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rt}_compareTo(t){return this.seconds===t.seconds?ct(this.nanoseconds,t.nanoseconds):ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Dt(t,Mt._jsonSchema))return new Mt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-kt;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Mt._jsonSchemaVersion="firestore/timestamp/1.0",Mt._jsonSchema={type:At("string",Mt._jsonSchemaVersion),seconds:At("number"),nanoseconds:At("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{static fromTimestamp(t){return new Ot(t)}static min(){return new Ot(new Mt(0,0))}static max(){return new Ot(new Mt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=-1;class Pt{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function Ft(t){return t.fields.find(t=>2===t.kind)}function Lt(t){return t.fields.filter(t=>2!==t.kind)}function qt(t,e){let n=ct(t.collectionGroup,e.collectionGroup);if(0!==n)return n;for(let s=0;s<Math.min(t.fields.length,e.fields.length);++s)if(n=Bt(t.fields[s],e.fields[s]),0!==n)return n;return ct(t.fields.length,e.fields.length)}Pt.UNKNOWN_ID=-1;class Ut{constructor(t,e){this.fieldPath=t,this.kind=e}}function Bt(t,e){const n=vt.comparator(t.fieldPath,e.fieldPath);return 0!==n?n:ct(t.kind,e.kind)}class jt{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new jt(0,Gt.min())}}function zt(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Ot.fromTimestamp(1e9===s?new Mt(n+1,0):new Mt(n,s));return new Gt(r,bt.empty(),e)}function Kt(t){return new Gt(t.readTime,t.key,Vt)}class Gt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Gt(Ot.min(),bt.empty(),Vt)}static max(){return new Gt(Ot.max(),bt.empty(),Vt)}}function $t(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=bt.comparator(t.documentKey,e.documentKey),0!==n?n:ct(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Qt="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ht{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==Qt)throw t;q("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Jt((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Jt?e:Jt.resolve(e)}catch(t){return Jt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Jt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Jt.reject(e)}static resolve(t){return new Jt((e,n)=>{e(t)})}static reject(t){return new Jt((e,n)=>{n(t)})}static waitFor(t){return new Jt((e,n)=>{let s=0,r=0,i=!1;t.forEach(t=>{++s,t.next(()=>{++r,i&&r===s&&e()},t=>n(t))}),i=!0,r===s&&e()})}static or(t){let e=Jt.resolve(!1);for(const n of t)e=e.next(t=>t?Jt.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,s)=>{n.push(e.call(this,t,s))}),this.waitFor(n)}static mapArray(t,e){return new Jt((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next(t=>{i[c]=t,++o,o===r&&n(i)},t=>s(t))}})}static doWhile(t,e){return new Jt((n,s)=>{const r=()=>{!0===t()?e().next(()=>{r()},s):n()};r()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="SimpleDb";class Xt{static open(t,e,n,s){try{return new Xt(e,t.transaction(s,n))}catch(t){throw new ne(e,t)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new J,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new ne(t,e.error)):this.S.resolve()},this.transaction.onerror=e=>{const n=ae(e.target.error);this.S.reject(new ne(t,n))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(q(Yt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new re(e)}}class Zt{static delete(t){return q(Yt,"Removing database:",t),ie(f().indexedDB.deleteDatabase(t)).toPromise()}static v(){if(!m())return!1;if(Zt.F())return!0;const t=g(),e=Zt.M(t),n=0<e&&e<10,s=te(t),r=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||r)}static F(){return"undefined"!=typeof process&&"YES"===process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE}static O(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.N=n,this.B=null,12.2===Zt.M(g())&&U("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(t){return this.db||(q(Yt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=t=>{const n=t.target.result;e(n)},s.onblocked=()=>{n(new ne(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=e=>{const s=e.target.error;"VersionError"===s.name?n(new W(H.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===s.name?n(new W(H.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):n(new ne(t,s))},s.onupgradeneeded=t=>{q(Yt,'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.N.k(e,s.transaction,t.oldVersion,this.version).next(()=>{q(Yt,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}K(t){this.q=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const r="readonly"===e;let i=0;for(;;){++i;try{this.db=await this.L(t);const e=Xt.open(this.db,t,r?"readonly":"readwrite",n),i=s(e).next(t=>(e.C(),t)).catch(t=>(e.abort(t),Jt.reject(t))).toPromise();return i.catch(()=>{}),await e.D,i}catch(t){const e=t,n="FirebaseError"!==e.name&&i<3;if(q(Yt,"Transaction failed with error:",e.message,"Retrying:",n),this.close(),!n)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}function te(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class ee{constructor(t){this.U=t,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(t){this.U=t}done(){this.$=!0}j(t){this.W=t}delete(){return ie(this.U.delete())}}class ne extends W{constructor(t,e){super(H.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function se(t){return"IndexedDbTransactionError"===t.name}class re{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(q(Yt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(q(Yt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),ie(n)}add(t){return q(Yt,"ADD",this.store.name,t,t),ie(this.store.add(t))}get(t){return ie(this.store.get(t)).next(e=>(void 0===e&&(e=null),q(Yt,"GET",this.store.name,t,e),e))}delete(t){return q(Yt,"DELETE",this.store.name,t),ie(this.store.delete(t))}count(){return q(Yt,"COUNT",this.store.name),ie(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if("function"==typeof s.getAll){const t=s.getAll(n.range);return new Jt((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}})}{const t=this.cursor(n),e=[];return this.H(t,(t,n)=>{e.push(n)}).next(()=>e)}}Z(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new Jt((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}})}X(t,e){q(Yt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Y=!1;const s=this.cursor(n);return this.H(s,(t,e,n)=>n.delete())}ee(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.H(s,e)}te(t){const e=this.cursor({});return new Jt((n,s)=>{e.onerror=t=>{const e=ae(t.target.error);s(e)},e.onsuccess=e=>{const s=e.target.result;s?t(s.primaryKey,s.value).next(t=>{t?s.continue():n()}):n()}})}H(t,e){const n=[];return new Jt((s,r)=>{t.onerror=t=>{r(t.target.error)},t.onsuccess=t=>{const r=t.target.result;if(!r)return void s();const i=new ee(r),o=e(r.primaryKey,r.value,i);if(o instanceof Jt){const t=o.catch(t=>(i.done(),Jt.reject(t)));n.push(t)}i.isDone?s():null===i.G?r.continue():r.continue(i.G)}}).next(()=>Jt.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Y?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function ie(t){return new Jt((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=ae(t.target.error);n(e)}})}let oe=!1;function ae(t){const e=Zt.M(g());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new W("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return oe||(oe=!0,setTimeout(()=>{throw t},0)),t}}return t}const ce="IndexBackfiller";class ue{constructor(t,e){this.asyncQueue=t,this.ne=e,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}re(t){q(ce,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const t=await this.ne.ie();q(ce,`Documents written: ${t}`)}catch(t){se(t)?q(ce,"Ignoring IndexedDB error during index backfill: ",t):await Wt(t)}await this.re(6e4)})}}class he{constructor(t,e){this.localStore=t,this.persistence=e}async ie(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.se(e,t))}se(t,e){const n=new Set;let s=e,r=!0;return Jt.doWhile(()=>!0===r&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(e=>{if(null!==e&&!n.has(e))return q(ce,`Processing collection: ${e}`),this.oe(t,e,s).next(t=>{s-=t,n.add(e)});r=!1})).next(()=>e-s)}oe(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(n=>{const r=n.changes;return this.localStore.indexManager.updateIndexEntries(t,r).next(()=>this._e(s,n)).next(n=>(q(ce,`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(t,e,n))).next(()=>r.size)}))}_e(t,e){let n=t;return e.changes.forEach((t,e)=>{const s=Kt(e);$t(s,n)>0&&(n=s)}),new Gt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ae(t),this.ue=t=>e.writeSequenceNumber(t))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}le.ce=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de=-1;function fe(t){return null==t}function me(t){return 0===t&&1/t==-1/0}function ge(t){return"number"==typeof t&&Number.isInteger(t)&&!me(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="";function ye(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ve(e)),e=we(t.get(n),e);return ve(e)}function we(t,e){let n=e;const s=t.length;for(let e=0;e<s;e++){const s=t.charAt(e);switch(s){case"\0":n+="";break;case pe:n+="";break;default:n+=s}}return n}function ve(t){return t+pe+""}function be(t){const e=t.length;if(G(e>=2,64408,{path:t}),2===e)return G(t.charAt(0)===pe&&""===t.charAt(1),56145,{path:t}),yt.emptyPath();const n=e-2,s=[];let r="";for(let i=0;i<e;){const e=t.indexOf(pe,i);switch((e<0||e>n)&&z(50515,{path:t}),t.charAt(e+1)){case"":const n=t.substring(i,e);let o;0===r.length?o=n:(r+=n,o=r,r=""),s.push(o);break;case"":r+=t.substring(i,e),r+="\0";break;case"":r+=t.substring(i,e+1);break;default:z(61167,{path:t})}i=e+2}return new yt(s)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="remoteDocuments",Te="owner",_e="owner",Ee="mutationQueues",Se="mutations",xe="batchId",Ce="userMutationsIndex",Ne=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,e){return[t,ye(e)]}function De(t,e,n){return[t,ye(e),n]}const ke={},Re="documentMutations",Me="remoteDocumentsV14",Oe=["prefixPath","collectionGroup","readTime","documentId"],Ve="documentKeyIndex",Pe=["prefixPath","collectionGroup","documentId"],Fe="collectionGroupIndex",Le=["collectionGroup","readTime","prefixPath","documentId"],qe="remoteDocumentGlobal",Ue="remoteDocumentGlobalKey",Be="targets",je="queryTargetsIndex",ze=["canonicalId","targetId"],Ke="targetDocuments",Ge=["targetId","path"],$e="documentTargetsIndex",Qe=["path","targetId"],He="targetGlobalKey",We="targetGlobal",Je="collectionParents",Ye=["collectionId","parent"],Xe="clientMetadata",Ze="bundles",tn="namedQueries",en="indexConfiguration",nn="collectionGroupIndex",sn="indexState",rn=["indexId","uid"],on="sequenceNumberIndex",an=["uid","sequenceNumber"],cn="indexEntries",un=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],hn="documentKeyIndex",ln=["indexId","uid","orderedDocumentKey"],dn="documentOverlays",fn=["userId","collectionPath","documentId"],mn="collectionPathOverlayIndex",gn=["userId","collectionPath","largestBatchId"],pn="collectionGroupOverlayIndex",yn=["userId","collectionGroup","largestBatchId"],wn="globals",vn=[Ee,Se,Re,Ie,Be,Te,We,Ke,Xe,qe,Je,Ze,tn],bn=[...vn,dn],In=[Ee,Se,Re,Me,Be,Te,We,Ke,Xe,qe,Je,Ze,tn,dn],Tn=In,_n=[...Tn,en,sn,cn],En=_n,Sn=[..._n,wn],xn=Sn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ht{constructor(t,e){super(),this.le=t,this.currentSequenceNumber=e}}function Nn(t,e){const n=Q(t);return Zt.O(n.le,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Dn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kn(t,e){const n=[];for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&n.push(e(t[s],s,t));return n}function Rn(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e){this.comparator=t,this.root=e||Vn.EMPTY}insert(t,e){return new Mn(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Vn.BLACK,null,null))}remove(t){return new Mn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Vn.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new On(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new On(this.root,t,this.comparator,!1)}getReverseIterator(){return new On(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new On(this.root,t,this.comparator,!0)}}class On{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Vn{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:Vn.RED,this.left=null!=s?s:Vn.EMPTY,this.right=null!=r?r:Vn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new Vn(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Vn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Vn.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Vn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Vn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw z(27949);return t+(this.isRed()?0:1)}}Vn.EMPTY=null,Vn.RED=!0,Vn.BLACK=!1,Vn.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(t,e,n,s,r){return this}insert(t,e,n){return new Vn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{constructor(t){this.comparator=t,this.data=new Mn(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fn(this.data.getIterator())}getIteratorFrom(t){return new Fn(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Pn))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Pn(this.comparator);return e.data=t,e}}class Fn{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ln(t){return t.hasNext()?t.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t){this.fields=t,t.sort(vt.comparator)}static empty(){return new qn([])}unionWith(t){let e=new Pn(vt.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new qn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ft(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Un("Invalid base64 string: "+t):t}}(t);return new jn(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new jn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jn.EMPTY_BYTE_STRING=new jn("");const zn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(G(!!t,39018),"string"==typeof t){let e=0;const n=zn.exec(t);if(G(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Gn(t.seconds),nanos:Gn(t.nanos)}}function Gn(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function $n(t){return"string"==typeof t?jn.fromBase64String(t):jn.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="server_timestamp",Hn="__type__",Wn="__previous_value__",Jn="__local_write_time__";function Yn(t){const e=(t?.mapValue?.fields||{})[Hn]?.stringValue;return e===Qn}function Xn(t){const e=t.mapValue.fields[Wn];return Yn(e)?Xn(e):e}function Zn(t){const e=Kn(t.mapValue.fields[Jn].timestampValue);return new Mt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e,n,s,r,i,o,a,c,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=h}}const es="(default)";class ns{constructor(t,e){this.projectId=t,this.database=e||es}static empty(){return new ns("","")}get isDefaultDatabase(){return this.database===es}isEqual(t){return t instanceof ns&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ss="__type__",rs="__max__",is={mapValue:{fields:{__type__:{stringValue:rs}}}},os="__vector__",as="value",cs={nullValue:"NULL_VALUE"};function us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yn(t)?4:xs(t)?9007199254740991:Es(t)?10:11:z(28295,{value:t})}function hs(t,e){if(t===e)return!0;const n=us(t);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zn(t).isEqual(Zn(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Kn(t.timestampValue),s=Kn(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,$n(t.bytesValue).isEqual($n(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Gn(t.geoPointValue.latitude)===Gn(e.geoPointValue.latitude)&&Gn(t.geoPointValue.longitude)===Gn(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Gn(t.integerValue)===Gn(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Gn(t.doubleValue),s=Gn(e.doubleValue);return n===s?me(n)===me(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ft(t.arrayValue.values||[],e.arrayValue.values||[],hs);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(An(n)!==An(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!hs(n[t],s[t])))return!1;return!0}(t,e);default:return z(52216,{left:t})}var s}function ls(t,e){return void 0!==(t.values||[]).find(t=>hs(t,e))}function ds(t,e){if(t===e)return 0;const n=us(t),s=us(e);if(n!==s)return ct(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ct(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Gn(t.integerValue||t.doubleValue),s=Gn(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return fs(t.timestampValue,e.timestampValue);case 4:return fs(Zn(t),Zn(e));case 5:return ut(t.stringValue,e.stringValue);case 6:return function(t,e){const n=$n(t),s=$n(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=ct(n[t],s[t]);if(0!==e)return e}return ct(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ct(Gn(t.latitude),Gn(e.latitude));return 0!==n?n:ct(Gn(t.longitude),Gn(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ms(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=e.fields||{},r=n[as]?.arrayValue,i=s[as]?.arrayValue,o=ct(r?.values?.length||0,i?.values?.length||0);return 0!==o?o:ms(r,i)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===is.mapValue&&e===is.mapValue)return 0;if(t===is.mapValue)return 1;if(e===is.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let t=0;t<s.length&&t<i.length;++t){const e=ut(s[t],i[t]);if(0!==e)return e;const o=ds(n[s[t]],r[i[t]]);if(0!==o)return o}return ct(s.length,i.length)}(t.mapValue,e.mapValue);default:throw z(23264,{he:n})}}function fs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ct(t,e);const n=Kn(t),s=Kn(e),r=ct(n.seconds,s.seconds);return 0!==r?r:ct(n.nanos,s.nanos)}function ms(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=ds(n[t],s[t]);if(e)return e}return ct(n.length,s.length)}function gs(t){return ps(t)}function ps(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Kn(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$n(t.bytesValue).toBase64():"referenceValue"in t?function(t){return bt.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=ps(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${ps(t.fields[r])}`;return n+"}"}(t.mapValue):z(61005,{value:t})}function ys(t){switch(us(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xn(t);return e?16+ys(e):16;case 5:return 2*t.stringValue.length;case 6:return $n(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,e)=>t+ys(e),0);case 10:case 11:return function(t){let e=0;return Dn(t.fields,(t,n)=>{e+=t.length+ys(n)}),e}(t.mapValue);default:throw z(13486,{value:t})}}function ws(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vs(t){return!!t&&"integerValue"in t}function bs(t){return!!t&&"arrayValue"in t}function Is(t){return!!t&&"nullValue"in t}function Ts(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _s(t){return!!t&&"mapValue"in t}function Es(t){const e=(t?.mapValue?.fields||{})[ss]?.stringValue;return e===os}function Ss(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Dn(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Ss(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ss(t.arrayValue.values[n]);return e}return{...t}}function xs(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===rs}const Cs={mapValue:{fields:{[ss]:{stringValue:os},[as]:{arrayValue:{}}}}};function Ns(t){return"nullValue"in t?cs:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ws(ns.empty(),bt.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Es(t)?Cs:{mapValue:{}}:z(35942,{value:t})}function As(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ws(ns.empty(),bt.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?Cs:"mapValue"in t?Es(t)?{mapValue:{}}:is:z(61959,{value:t})}function Ds(t,e){const n=ds(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function ks(t,e){const n=ds(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t){this.value=t}static empty(){return new Rs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!_s(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ss(e)}setAll(t){let e=vt.emptyPath(),n={},s=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=Ss(t):s.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());_s(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return hs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];_s(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Dn(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new Rs(Ss(this.value))}}function Ms(t){const e=[];return Dn(t.fields,(t,n)=>{const s=new vt([t]);if(_s(n)){const t=Ms(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)}),new qn(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Os{constructor(t,e,n,s,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new Os(t,0,Ot.min(),Ot.min(),Ot.min(),Rs.empty(),0)}static newFoundDocument(t,e,n,s){return new Os(t,1,e,Ot.min(),n,s,0)}static newNoDocument(t,e){return new Os(t,2,e,Ot.min(),Ot.min(),Rs.empty(),0)}static newUnknownDocument(t,e){return new Os(t,3,e,Ot.min(),Ot.min(),Rs.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ot.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ot.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Os&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Os(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e){this.position=t,this.inclusive=e}}function Ps(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?bt.comparator(bt.fromName(o.referenceValue),n.key):ds(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function Fs(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hs(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,e="asc"){this.field=t,this.dir=e}}function qs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{}class Bs extends Us{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ys(t,e,n):"array-contains"===e?new er(t,n):"in"===e?new nr(t,n):"not-in"===e?new sr(t,n):"array-contains-any"===e?new rr(t,n):new Bs(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Xs(t,n):new Zs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(ds(e,this.value)):null!==e&&us(this.value)===us(e)&&this.matchesComparison(ds(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class js extends Us{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new js(t,e)}matches(t){return zs(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zs(t){return"and"===t.op}function Ks(t){return"or"===t.op}function Gs(t){return $s(t)&&zs(t)}function $s(t){for(const e of t.filters)if(e instanceof js)return!1;return!0}function Qs(t){if(t instanceof Bs)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(Gs(t))return t.filters.map(t=>Qs(t)).join(",");{const e=t.filters.map(t=>Qs(t)).join(",");return`${t.op}(${e})`}}function Hs(t,e){return t instanceof Bs?(n=t,(s=e)instanceof Bs&&n.op===s.op&&n.field.isEqual(s.field)&&hs(n.value,s.value)):t instanceof js?function(t,e){return e instanceof js&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,s)=>t&&Hs(n,e.filters[s]),!0)}(t,e):void z(19439);var n,s}function Ws(t,e){const n=t.filters.concat(e);return js.create(n,t.op)}function Js(t){return t instanceof Bs?`${(e=t).field.canonicalString()} ${e.op} ${gs(e.value)}`:t instanceof js?function(t){return t.op.toString()+" {"+t.getFilters().map(Js).join(" ,")+"}"}(t):"Filter";var e}class Ys extends Bs{constructor(t,e,n){super(t,e,n),this.key=bt.fromName(n.referenceValue)}matches(t){const e=bt.comparator(t.key,this.key);return this.matchesComparison(e)}}class Xs extends Bs{constructor(t,e){super(t,"in",e),this.keys=tr("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Zs extends Bs{constructor(t,e){super(t,"not-in",e),this.keys=tr("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function tr(t,e){return(e.arrayValue?.values||[]).map(t=>bt.fromName(t.referenceValue))}class er extends Bs{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bs(e)&&ls(e.arrayValue,this.value)}}class nr extends Bs{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ls(this.value.arrayValue,e)}}class sr extends Bs{constructor(t,e){super(t,"not-in",e)}matches(t){if(ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!ls(this.value.arrayValue,e)}}class rr extends Bs{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ls(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.Te=null}}function or(t,e=null,n=[],s=[],r=null,i=null,o=null){return new ir(t,e,n,s,r,i,o)}function ar(t){const e=Q(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Qs(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>{return(e=t).field.canonicalString()+e.dir;var e}).join(","),fe(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>gs(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>gs(t)).join(",")),e.Te=t}return e.Te}function cr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qs(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Hs(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fs(t.startAt,e.startAt)&&Fs(t.endAt,e.endAt)}function ur(t){return bt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function hr(t,e){return t.filters.filter(t=>t instanceof Bs&&t.field.isEqual(e))}function lr(t,e,n){let s=cs,r=!0;for(const n of hr(t,e)){let t=cs,e=!0;switch(n.op){case"<":case"<=":t=Ns(n.value);break;case"==":case"in":case">=":t=n.value;break;case">":t=n.value,e=!1;break;case"!=":case"not-in":t=cs}Ds({value:s,inclusive:r},{value:t,inclusive:e})<0&&(s=t,r=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];Ds({value:s,inclusive:r},{value:t,inclusive:n.inclusive})<0&&(s=t,r=n.inclusive);break}return{value:s,inclusive:r}}function dr(t,e,n){let s=is,r=!0;for(const n of hr(t,e)){let t=is,e=!0;switch(n.op){case">=":case">":t=As(n.value),e=!1;break;case"==":case"in":case"<=":t=n.value;break;case"<":t=n.value,e=!1;break;case"!=":case"not-in":t=is}ks({value:s,inclusive:r},{value:t,inclusive:e})>0&&(s=t,r=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];ks({value:s,inclusive:r},{value:t,inclusive:n.inclusive})>0&&(s=t,r=n.inclusive);break}return{value:s,inclusive:r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function mr(t,e,n,s,r,i,o,a){return new fr(t,e,n,s,r,i,o,a)}function gr(t){return new fr(t)}function pr(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function yr(t){return null!==t.collectionGroup}function wr(t){const e=Q(t);if(null===e.Ee){e.Ee=[];const t=new Set;for(const n of e.explicitOrderBy)e.Ee.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new Pn(vt.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Ls(s,n))}),t.has(vt.keyField().canonicalString())||e.Ee.push(new Ls(vt.keyField(),n))}return e.Ee}function vr(t){const e=Q(t);return e.Ie||(e.Ie=Ir(e,wr(t))),e.Ie}function br(t){const e=Q(t);return e.Re||(e.Re=Ir(e,t.explicitOrderBy)),e.Re}function Ir(t,e){if("F"===t.limitType)return or(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new Ls(t.field,e)});const n=t.endAt?new Vs(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Vs(t.startAt.position,t.startAt.inclusive):null;return or(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Tr(t,e){const n=t.filters.concat([e]);return new fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _r(t,e,n){return new fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Er(t,e){return cr(vr(t),vr(e))&&t.limitType===e.limitType}function Sr(t){return`${ar(vr(t))}|lt:${t.limitType}`}function xr(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>Js(t)).join(", ")}]`),fe(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e}).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>gs(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>gs(t)).join(",")),`Target(${e})`}(vr(t))}; limitType=${t.limitType})`}function Cr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):bt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of wr(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(s=e,!((n=t).startAt&&!function(t,e,n){const s=Ps(t,e,n);return t.inclusive?s<=0:s<0}(n.startAt,wr(n),s)||n.endAt&&!function(t,e,n){const s=Ps(t,e,n);return t.inclusive?s>=0:s>0}(n.endAt,wr(n),s)));var n,s}function Nr(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ar(t){return(e,n)=>{let s=!1;for(const r of wr(t)){const t=Dr(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Dr(t,e,n){const s=t.field.isKeyField()?bt.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?ds(s,r):z(42886)}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z(19790,{direction:t.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Dn(this.inner,(e,n)=>{for(const[e,s]of n)t(e,s)})}isEmpty(){return Rn(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Mn(bt.comparator);function Mr(){return Rr}const Or=new Mn(bt.comparator);function Vr(...t){let e=Or;for(const n of t)e=e.insert(n.key,n);return e}function Pr(t){let e=Or;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Fr(){return qr()}function Lr(){return qr()}function qr(){return new kr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ur=new Mn(bt.comparator),Br=new Pn(bt.comparator);function jr(...t){let e=Br;for(const n of t)e=e.add(n);return e}const zr=new Pn(ct);function Kr(){return zr}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:me(e)?"-0":e}}function $r(t){return{integerValue:""+t}}function Qr(t,e){return ge(e)?$r(e):Gr(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this._=void 0}}function Wr(t,e,n){return t instanceof Xr?function(t,e){const n={fields:{[Hn]:{stringValue:Qn},[Jn]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Yn(e)&&(e=Xn(e)),e&&(n.fields[Wn]=e),{mapValue:n}}(n,e):t instanceof Zr?ti(t,e):t instanceof ei?ni(t,e):function(t,e){const n=Yr(t,e),s=ri(n)+ri(t.Ae);return vs(n)&&vs(t.Ae)?$r(s):Gr(t.serializer,s)}(t,e)}function Jr(t,e,n){return t instanceof Zr?ti(t,e):t instanceof ei?ni(t,e):n}function Yr(t,e){return t instanceof si?vs(n=e)||(s=n)&&"doubleValue"in s?e:{integerValue:0}:null;var n,s}class Xr extends Hr{}class Zr extends Hr{constructor(t){super(),this.elements=t}}function ti(t,e){const n=ii(e);for(const e of t.elements)n.some(t=>hs(t,e))||n.push(e);return{arrayValue:{values:n}}}class ei extends Hr{constructor(t){super(),this.elements=t}}function ni(t,e){let n=ii(e);for(const e of t.elements)n=n.filter(t=>!hs(t,e));return{arrayValue:{values:n}}}class si extends Hr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ri(t){return Gn(t.integerValue||t.doubleValue)}function ii(t){return bs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e){this.field=t,this.transform=e}}class ai{constructor(t,e){this.version=t,this.transformResults=e}}class ci{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ci}static exists(t){return new ci(void 0,t)}static updateTime(t){return new ci(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ui(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class hi{}function li(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ii(t.key,ci.none()):new pi(t.key,t.data,ci.none());{const n=t.data,s=Rs.empty();let r=new Pn(vt.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new yi(t.key,s,new qn(r.toArray()),ci.none())}}function di(t,e,n){var s;t instanceof pi?function(t,e,n){const s=t.value.clone(),r=vi(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof yi?function(t,e,n){if(!ui(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=vi(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(wi(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(s=n,e.convertToNoDocument(s.version).setHasCommittedMutations())}function fi(t,e,n,s){return t instanceof pi?function(t,e,n,s){if(!ui(t.precondition,e))return n;const r=t.value.clone(),i=bi(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof yi?function(t,e,n,s){if(!ui(t.precondition,e))return n;const r=bi(t.fieldTransforms,s,e),i=e.data;return i.setAll(wi(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,s):(r=e,i=n,ui(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):i);var r,i}function mi(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=Yr(s.transform,t||null);null!=r&&(null===n&&(n=Rs.empty()),n.set(s.field,r))}return n||null}function gi(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,s=e.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&ft(n,s,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,s=e.transform,n instanceof Zr&&s instanceof Zr||n instanceof ei&&s instanceof ei?ft(n.elements,s.elements,hs):n instanceof si&&s instanceof si?hs(n.Ae,s.Ae):n instanceof Xr&&s instanceof Xr);var n,s}(t,e)))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,s}class pi extends hi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yi extends hi{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function wi(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function vi(t,e,n){const s=new Map;G(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Jr(o,a,n[r]))}return s}function bi(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,Wr(t,i,e))}return s}class Ii extends hi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ti extends hi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&di(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=fi(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=fi(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Lr();return this.mutations.forEach(s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=li(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(Ot.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),jr())}isEqual(t){return this.batchId===t.batchId&&ft(this.mutations,t.mutations,(t,e)=>gi(t,e))&&ft(this.baseMutations,t.baseMutations,(t,e)=>gi(t,e))}}class Ei{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){G(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let s=Ur;const r=t.mutations;for(let t=0;t<r.length;t++)s=s.insert(r[t].key,n[t].version);return new Ei(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ni,Ai;function Di(t){switch(t){case H.OK:return z(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return z(15467,{code:t})}}function ki(t){if(void 0===t)return U("GRPC error has no .code"),H.UNKNOWN;switch(t){case Ni.OK:return H.OK;case Ni.CANCELLED:return H.CANCELLED;case Ni.UNKNOWN:return H.UNKNOWN;case Ni.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ni.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ni.INTERNAL:return H.INTERNAL;case Ni.UNAVAILABLE:return H.UNAVAILABLE;case Ni.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ni.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ni.NOT_FOUND:return H.NOT_FOUND;case Ni.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ni.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ni.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ni.ABORTED:return H.ABORTED;case Ni.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ni.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ni.DATA_LOSS:return H.DATA_LOSS;default:return z(39323,{code:t})}}(Ai=Ni||(Ni={}))[Ai.OK=0]="OK",Ai[Ai.CANCELLED=1]="CANCELLED",Ai[Ai.UNKNOWN=2]="UNKNOWN",Ai[Ai.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ai[Ai.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ai[Ai.NOT_FOUND=5]="NOT_FOUND",Ai[Ai.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ai[Ai.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ai[Ai.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ai[Ai.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ai[Ai.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ai[Ai.ABORTED=10]="ABORTED",Ai[Ai.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ai[Ai.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ai[Ai.INTERNAL=13]="INTERNAL",Ai[Ai.UNAVAILABLE=14]="UNAVAILABLE",Ai[Ai.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ri=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mi(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new T([4294967295,4294967295],0);function Vi(t){const e=Mi().encode(t),n=new _;return n.update(e),new Uint8Array(n.digest())}function Pi(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new T([n,s],0),new T([r,i],0)]}class Fi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Li(`Invalid padding: ${e}`);if(n<0)throw new Li(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Li(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Li(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=T.fromNumber(this.ge)}ye(t,e,n){let s=t.add(e.multiply(T.fromNumber(n)));return 1===s.compare(Oi)&&(s=new T([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.ge)return!1;const e=Vi(t),[n,s]=Pi(e);for(let t=0;t<this.hashCount;t++){const e=this.ye(n,s,t);if(!this.we(e))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),i=new Fi(r,s,e);return n.forEach(t=>i.insert(t)),i}insert(t){if(0===this.ge)return;const e=Vi(t),[n,s]=Pi(e);for(let t=0;t<this.hashCount;t++){const e=this.ye(n,s,t);this.Se(e)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Ui.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new qi(Ot.min(),s,new Mn(ct),Mr(),jr())}}class Ui{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ui(n,e,jr(),jr(),jr())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,e,n,s){this.be=t,this.removedTargetIds=e,this.key=n,this.De=s}}class ji{constructor(t,e){this.targetId=t,this.Ce=e}}class zi{constructor(t,e,n=jn.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Ki{constructor(){this.ve=0,this.Fe=Qi(),this.Me=jn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=jr(),e=jr(),n=jr();return this.Fe.forEach((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:z(38017,{changeType:r})}}),new Ui(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Qi()}Ke(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Gi{constructor(t){this.Ge=t,this.ze=new Map,this.je=Mr(),this.Je=$i(),this.He=$i(),this.Ze=new Mn(ct)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:z(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((t,n)=>{this.rt(n)&&e(n)})}st(t){const e=t.targetId,n=t.Ce.count,s=this.ot(e);if(s){const r=s.target;if(ur(r))if(0===n){const t=new bt(r.path);this.et(e,t,Os.newNoDocument(t,Ot.min()))}else G(1===n,20013,{expectedCount:n});else{const s=this._t(e);if(s!==n){const n=this.ut(t),r=n?this.ct(n,t,s):1;if(0!==r){this.it(e);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,t)}Ri?.o(function(t,e,n,s,r){const i={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},o=e.unchangedNames;return o&&(i.bloomFilter={applied:0===r,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:t=>s?.mightContain(t)??!1}),i}(s,t.Ce,this.Ge.ht(),n,r))}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:r=0}=e;let i,o;try{i=$n(n).toUint8Array()}catch(t){if(t instanceof Un)return B("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Fi(i,s,r)}catch(t){return B(t instanceof Li?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.ge?null:o}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let s=0;return n.forEach(n=>{const r=this.Ge.ht(),i=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.et(e,n,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((n,s)=>{const r=this.ot(s);if(r){if(n.current&&ur(r.target)){const e=new bt(r.target.path);this.Et(e).has(s)||this.It(s,e)||this.et(s,e,Os.newNoDocument(e,t))}n.Be&&(e.set(s,n.ke()),n.qe())}});let n=jr();this.He.forEach((t,e)=>{let s=!0;e.forEachWhile(t=>{const e=this.ot(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(s=!1,!1)}),s&&(n=n.add(t))}),this.je.forEach((e,n)=>n.setReadTime(t));const s=new qi(t,e,this.Ze,this.je,n);return this.je=Mr(),this.Je=$i(),this.He=$i(),this.Ze=new Mn(ct),s}Ye(t,e){if(!this.rt(t))return;const n=this.It(t,e.key)?2:0;this.nt(t).Ke(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const s=this.nt(t);this.It(t,e)?s.Ke(e,1):s.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Ki,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new Pn(ct),this.He=this.He.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new Pn(ct),this.Je=this.Je.insert(t,e)),e}rt(t){const e=null!==this.ot(t);return e||q("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ki),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}It(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function $i(){return new Mn(bt.comparator)}function Qi(){return new Mn(bt.comparator)}const Hi={asc:"ASCENDING",desc:"DESCENDING"},Wi={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ji={and:"AND",or:"OR"};class Yi{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Xi(t,e){return t.useProto3Json||fe(e)?e:{value:e}}function Zi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function to(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eo(t,e){return Zi(t,e.toTimestamp())}function no(t){return G(!!t,49232),Ot.fromTimestamp(function(t){const e=Kn(t);return new Mt(e.seconds,e.nanos)}(t))}function so(t,e){return ro(t,e).canonicalString()}function ro(t,e){const n=(s=t,new yt(["projects",s.projectId,"databases",s.database])).child("documents");var s;return void 0===e?n:n.child(e)}function io(t){const e=yt.fromString(t);return G(Ao(e),10190,{key:e.toString()}),e}function oo(t,e){return so(t.databaseId,e.path)}function ao(t,e){const n=io(e);if(n.get(1)!==t.databaseId.projectId)throw new W(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new bt(lo(n))}function co(t,e){return so(t.databaseId,e)}function uo(t){const e=io(t);return 4===e.length?yt.emptyPath():lo(e)}function ho(t){return new yt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lo(t){return G(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function fo(t,e,n){return{name:oo(t,e),fields:n.value.mapValue.fields}}function mo(t,e,n){const s=ao(t,e.name),r=no(e.updateTime),i=e.createTime?no(e.createTime):Ot.min(),o=new Rs({mapValue:{fields:e.fields}}),a=Os.newFoundDocument(s,r,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function go(t,e){let n;if(e instanceof pi)n={update:fo(t,e.key,e.value)};else if(e instanceof Ii)n={delete:oo(t,e.key)};else if(e instanceof yi)n={update:fo(t,e.key,e.data),updateMask:No(e.fieldMask)};else{if(!(e instanceof Ti))return z(16599,{dt:e.type});n={verify:oo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof Xr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Zr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ei)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof si)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw z(20930,{transform:e.transform})}(0,t))),e.precondition.isNone||(n.currentDocument=(s=t,void 0!==(r=e.precondition).updateTime?{updateTime:eo(s,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:z(27497))),n;var s,r}function po(t,e){const n=e.currentDocument?void 0!==(r=e.currentDocument).updateTime?ci.updateTime(no(r.updateTime)):void 0!==r.exists?ci.exists(r.exists):ci.none():ci.none(),s=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)G("REQUEST_TIME"===e.setToServerValue,16630,{proto:e}),n=new Xr;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new Zr(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new ei(t)}else"increment"in e?n=new si(t,e.increment):z(16584,{proto:e});const s=vt.fromServerFormat(e.fieldPath);return new oi(s,n)}(t,e)):[];var r;if(e.update){e.update.name;const r=ao(t,e.update.name),i=new Rs({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new qn(e.map(t=>vt.fromServerFormat(t)))}(e.updateMask);return new yi(r,i,t,n,s)}return new pi(r,i,n,s)}if(e.delete){const s=ao(t,e.delete);return new Ii(s,n)}if(e.verify){const s=ao(t,e.verify);return new Ti(s,n)}return z(1463,{proto:e})}function yo(t,e){return{documents:[co(t,e.path)]}}function wo(t,e){const n={structuredQuery:{}},s=e.path;let r;null!==e.collectionGroup?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=co(t,r);const i=function(t){if(0!==t.length)return Co(js.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>{return{field:So((e=t).field),direction:To(e.dir)};var e})}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Xi(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ft:n,parent:r};var c}function vo(t,e,n,s){const{ft:r,parent:i}=wo(t,e),o={},a=[];let c=0;return n.forEach(t=>{const e=s?t.alias:"aggregate_"+c++;o[e]=t.alias,"count"===t.aggregateType?a.push({alias:e,count:{}}):"avg"===t.aggregateType?a.push({alias:e,avg:{field:So(t.fieldPath)}}):"sum"===t.aggregateType&&a.push({alias:e,sum:{field:So(t.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:r.structuredQuery},parent:r.parent},gt:o,parent:i}}function bo(t){let e=uo(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){G(1===s,65062);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Io(t);return e instanceof js&&Gs(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>{return new Ls(xo((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e}));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,fe(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Vs(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Vs(n,e)}(n.endAt)),mr(e,r,o,i,a,"F",c,u)}function Io(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=xo(t.unaryFilter.field);return Bs.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=xo(t.unaryFilter.field);return Bs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xo(t.unaryFilter.field);return Bs.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=xo(t.unaryFilter.field);return Bs.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}}(t):void 0!==t.fieldFilter?(e=t,Bs.create(xo(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return js.create(t.compositeFilter.filters.map(t=>Io(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return z(1026)}}(t.compositeFilter.op))}(t):z(30097,{filter:t});var e}function To(t){return Hi[t]}function _o(t){return Wi[t]}function Eo(t){return Ji[t]}function So(t){return{fieldPath:t.canonicalString()}}function xo(t){return vt.fromServerFormat(t.fieldPath)}function Co(t){return t instanceof Bs?function(t){if("=="===t.op){if(Ts(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NAN"}};if(Is(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ts(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NAN"}};if(Is(t.value))return{unaryFilter:{field:So(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:So(t.field),op:_o(t.op),value:t.value}}}(t):t instanceof js?function(t){const e=t.getFilters().map(t=>Co(t));return 1===e.length?e[0]:{compositeFilter:{op:Eo(t.op),filters:e}}}(t):z(54877,{filter:t})}function No(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ao(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}function Do(t){return!!t&&"function"==typeof t._toProto&&"ProtoValue"===t._protoValueType}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e,n,s,r=Ot.min(),i=Ot.min(),o=jn.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new ko(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ko(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ko(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ko(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t){this.yt=t}}function Mo(t,e){const n=e.key,s={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Oo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document={name:oo(r=t.yt,(i=e).key),fields:i.data.value.mapValue.fields,updateTime:Zi(r,i.version.toTimestamp()),createTime:Zi(r,i.createTime.toTimestamp())};else if(e.isNoDocument())s.noDocument={path:n.path.toArray(),readTime:Vo(e.version)};else{if(!e.isUnknownDocument())return z(57904,{document:e});s.unknownDocument={path:n.path.toArray(),version:Vo(e.version)}}var r,i;return s}function Oo(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Vo(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Po(t){const e=new Mt(t.seconds,t.nanoseconds);return Ot.fromTimestamp(e)}function Fo(t,e){const n=(e.baseMutations||[]).map(e=>po(t.yt,e));for(let t=0;t<e.mutations.length-1;++t){const n=e.mutations[t];if(t+1<e.mutations.length&&void 0!==e.mutations[t+1].transform){const s=e.mutations[t+1];n.updateTransforms=s.transform.fieldTransforms,e.mutations.splice(t+1,1),++t}}const s=e.mutations.map(e=>po(t.yt,e)),r=Mt.fromMillis(e.localWriteTimeMs);return new _i(e.batchId,r,n,s)}function Lo(t){const e=Po(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?Po(t.lastLimboFreeSnapshotVersion):Ot.min();let s;return s=void 0!==t.query.documents?function(t){const e=t.documents.length;return G(1===e,1966,{count:e}),vr(gr(uo(t.documents[0])))}(t.query):function(t){return vr(bo(t))}(t.query),new ko(s,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,jn.fromBase64String(t.resumeToken))}function qo(t,e){const n=Vo(e.snapshotVersion),s=Vo(e.lastLimboFreeSnapshotVersion);let r;r=ur(e.target)?yo(t.yt,e.target):wo(t.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ar(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function Uo(t){const e=bo({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?_r(e,e.limit,"L"):e}function Bo(t,e){return new Si(e.largestBatchId,po(t.yt,e.overlayMutation))}function jo(t,e){const n=e.path.lastSegment();return[t,ye(e.path.popLast()),n]}function zo(t,e,n,s){return{indexId:t,uid:e,sequenceNumber:n,readTime:Vo(s.readTime),documentKey:ye(s.documentKey.path),largestBatchId:s.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{getBundleMetadata(t,e){return Go(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:Po(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Go(t).put({bundleId:(n=e).id,createTime:Vo(no(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return $o(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Uo(e.bundledQuery),readTime:Po(e.readTime)};var e})}saveNamedQuery(t,e){return $o(t).put({name:(n=e).name,readTime:Vo(no(n.readTime)),bundledQuery:n.bundledQuery});var n}}function Go(t){return Nn(t,Ze)}function $o(t){return Nn(t,tn)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){this.serializer=t,this.userId=e}static wt(t,e){const n=e.uid||"";return new Qo(t,n)}getOverlay(t,e){return Ho(t).get(jo(this.userId,e)).next(t=>t?Bo(this.serializer,t):null)}getOverlays(t,e){const n=Fr();return Jt.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((n,r)=>{const i=new Si(e,r);s.push(this.St(t,i))}),Jt.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(t=>s.add(ye(t.getCollectionPath())));const r=[];return s.forEach(e=>{const s=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);r.push(Ho(t).X(mn,s))}),Jt.waitFor(r)}getOverlaysForCollection(t,e,n){const s=Fr(),r=ye(e),i=IDBKeyRange.bound([this.userId,r,n],[this.userId,r,Number.POSITIVE_INFINITY],!0);return Ho(t).J(mn,i).next(t=>{for(const e of t){const t=Bo(this.serializer,e);s.set(t.getKey(),t)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const r=Fr();let i;const o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Ho(t).ee({index:pn,range:o},(t,e,n)=>{const o=Bo(this.serializer,e);r.size()<s||o.largestBatchId===i?(r.set(o.getKey(),o),i=o.largestBatchId):n.done()}).next(()=>r)}St(t,e){return Ho(t).put(function(t,e,n){const[s,r,i]=jo(e,n.mutation.key);return{userId:e,collectionPath:r,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:go(t.yt,n.mutation)}}(this.serializer,this.userId,e))}}function Ho(t){return Nn(t,dn)}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{bt(t){return Nn(t,wn)}getSessionToken(t){return this.bt(t).get("sessionToken").next(t=>{const e=t?.value;return e?jn.fromUint8Array(e):jn.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.bt(t).put({name:"sessionToken",value:e.toUint8Array()})}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(Gn(t.integerValue));else if("doubleValue"in t){const n=Gn(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),me(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),"string"==typeof n&&(n=Kn(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt($n(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?xs(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):Es(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Kt(t.arrayValue,e),this.Nt(e)):z(19022,{Ut:t})}Ot(t,e){this.Ft(e,25),this.$t(t,e)}$t(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const t of Object.keys(n))this.Ot(t,e),this.Ct(n[t],e)}kt(t,e){const n=t.fields||{};this.Ft(e,53);const s=as,r=n[s].arrayValue?.values?.length||0;this.Ft(e,15),e.Mt(Gn(r)),this.Ot(s,e),this.Ct(n[s],e)}Kt(t,e){const n=t.values||[];this.Ft(e,50);for(const t of n)this.Ct(t,e)}Lt(t,e){this.Ft(e,37),bt.fromName(t).path.forEach(t=>{this.Ft(e,60),this.$t(t,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Jo.Wt=new Jo;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yo=255;function Xo(t){if(0===t)return 8;let e=0;return t>>4||(e+=4,t<<=4),t>>6||(e+=2,t<<=2),t>>7||(e+=1),e}function Zo(t){const e=64-function(t){let e=0;for(let n=0;n<8;++n){const s=Xo(255&t[n]);if(e+=s,8!==s)break}return e}(t);return Math.ceil(e/8)}class ta{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Gt(n.value),n=e.next();this.zt()}jt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Ht()}Zt(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Gt(t);else if(t<2048)this.Gt(960|t>>>6),this.Gt(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Gt(480|t>>>12),this.Gt(128|63&t>>>6),this.Gt(128|63&t);else{const t=e.codePointAt(0);this.Gt(240|t>>>18),this.Gt(128|63&t>>>12),this.Gt(128|63&t>>>6),this.Gt(128|63&t)}}this.zt()}Xt(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Jt(t);else if(t<2048)this.Jt(960|t>>>6),this.Jt(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Jt(480|t>>>12),this.Jt(128|63&t>>>6),this.Jt(128|63&t);else{const t=e.codePointAt(0);this.Jt(240|t>>>18),this.Jt(128|63&t>>>12),this.Jt(128|63&t>>>6),this.Jt(128|63&t)}}this.Ht()}Yt(t){const e=this.en(t),n=Zo(e);this.tn(1+n),this.buffer[this.position++]=255&n;for(let t=e.length-n;t<e.length;++t)this.buffer[this.position++]=255&e[t]}nn(t){const e=this.en(t),n=Zo(e);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let t=e.length-n;t<e.length;++t)this.buffer[this.position++]=~(255&e[t])}rn(){this.sn(Yo),this.sn(255)}_n(){this.an(Yo),this.an(255)}reset(){this.position=0}seed(t){this.tn(t.length),this.buffer.set(t,this.position),this.position+=t.length}un(){return this.buffer.slice(0,this.position)}en(t){const e=function(t){const e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let t=1;t<e.length;++t)e[t]^=n?255:0;return e}Gt(t){const e=255&t;0===e?(this.sn(0),this.sn(255)):e===Yo?(this.sn(Yo),this.sn(0)):this.sn(e)}Jt(t){const e=255&t;0===e?(this.an(0),this.an(255)):e===Yo?(this.an(Yo),this.an(0)):this.an(t)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(t){this.tn(1),this.buffer[this.position++]=t}an(t){this.tn(1),this.buffer[this.position++]=~t}tn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class ea{constructor(t){this.cn=t}Bt(t){this.cn.Qt(t)}xt(t){this.cn.Zt(t)}Mt(t){this.cn.Yt(t)}vt(){this.cn.rn()}}class na{constructor(t){this.cn=t}Bt(t){this.cn.jt(t)}xt(t){this.cn.Xt(t)}Mt(t){this.cn.nn(t)}vt(){this.cn._n()}}class sa{constructor(){this.cn=new ta,this.ascending=new ea(this.cn),this.descending=new na(this.cn)}seed(t){this.cn.seed(t)}ln(t){return 0===t?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e,n,s){this.hn=t,this.Pn=e,this.Tn=n,this.En=s}In(){const t=this.En.length,e=0===t||255===this.En[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.En,0),e!==t?n.set([0],this.En.length):++n[n.length-1],new ra(this.hn,this.Pn,this.Tn,n)}Rn(t,e,n){return{indexId:this.hn,uid:t,arrayValue:aa(this.Tn),directionalValue:aa(this.En),orderedDocumentKey:aa(e),documentKey:n.path.toArray()}}An(t,e,n){const s=this.Rn(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function ia(t,e){let n=t.hn-e.hn;return 0!==n?n:(n=oa(t.Tn,e.Tn),0!==n?n:(n=oa(t.En,e.En),0!==n?n:bt.comparator(t.Pn,e.Pn)))}function oa(t,e){for(let n=0;n<t.length&&n<e.length;++n){const s=t[n]-e[n];if(0!==s)return s}return t.length-e.length}function aa(t){return y()?function(t){let e="";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e}(t):t}function ca(t){return"string"!=typeof t?t:function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(t)}class ua{constructor(t){this.Vn=new Pn((t,e)=>vt.comparator(t.field,e.field)),this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.dn=t.orderBy,this.mn=[];for(const e of t.filters){const t=e;t.isInequality()?this.Vn=this.Vn.add(t):this.mn.push(t)}}get fn(){return this.Vn.size>1}gn(t){if(G(t.collectionGroup===this.collectionId,49279),this.fn)return!1;const e=Ft(t);if(void 0!==e&&!this.pn(e))return!1;const n=Lt(t);let s=new Set,r=0,i=0;for(;r<n.length&&this.pn(n[r]);++r)s=s.add(n[r].fieldPath.canonicalString());if(r===n.length)return!0;if(this.Vn.size>0){const t=this.Vn.getIterator().getNext();if(!s.has(t.field.canonicalString())){const e=n[r];if(!this.yn(t,e)||!this.wn(this.dn[i++],e))return!1}++r}for(;r<n.length;++r){const t=n[r];if(i>=this.dn.length||!this.wn(this.dn[i++],t))return!1}return!0}Sn(){if(this.fn)return null;let t=new Pn(vt.comparator);const e=[];for(const n of this.mn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)e.push(new Ut(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Ut(n.field,0))}for(const n of this.dn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Ut(n.field,"asc"===n.dir?0:1)));return new Pt(Pt.UNKNOWN_ID,this.collectionId,e,jt.empty())}pn(t){for(const e of this.mn)if(this.yn(e,t))return!0;return!1}yn(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;const n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}wn(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){if(G(t instanceof Bs||t instanceof js,20012),t instanceof Bs){if(t instanceof nr){const e=t.value.arrayValue?.values?.map(e=>Bs.create(t.field,"==",e))||[];return js.create(e,"or")}return t}const e=t.filters.map(t=>ha(t));return js.create(e,t.op)}function la(t){if(0===t.getFilters().length)return[];const e=ga(ha(t));return G(ma(e),7391),da(e)||fa(e)?[e]:e.getFilters()}function da(t){return t instanceof Bs}function fa(t){return t instanceof js&&Gs(t)}function ma(t){return da(t)||fa(t)||function(t){if(t instanceof js&&Ks(t)){for(const e of t.getFilters())if(!da(e)&&!fa(e))return!1;return!0}return!1}(t)}function ga(t){if(G(t instanceof Bs||t instanceof js,34018),t instanceof Bs)return t;if(1===t.filters.length)return ga(t.filters[0]);const e=t.filters.map(t=>ga(t));let n=js.create(e,t.op);return n=wa(n),ma(n)?n:(G(n instanceof js,64498),G(zs(n),40251),G(n.filters.length>1,57927),n.filters.reduce((t,e)=>pa(t,e)))}function pa(t,e){let n;return G(t instanceof Bs||t instanceof js,38388),G(e instanceof Bs||e instanceof js,25473),n=t instanceof Bs?e instanceof Bs?(s=t,r=e,js.create([s,r],"and")):ya(t,e):e instanceof Bs?ya(e,t):function(t,e){if(G(t.filters.length>0&&e.filters.length>0,48005),zs(t)&&zs(e))return Ws(t,e.getFilters());const n=Ks(t)?t:e,s=Ks(t)?e:t,r=n.filters.map(t=>pa(t,s));return js.create(r,"or")}(t,e),wa(n);var s,r}function ya(t,e){if(zs(e))return Ws(e,t.getFilters());{const n=e.filters.map(e=>pa(t,e));return js.create(n,"or")}}function wa(t){if(G(t instanceof Bs||t instanceof js,11850),t instanceof Bs)return t;const e=t.getFilters();if(1===e.length)return wa(e[0]);if($s(t))return t;const n=e.map(t=>wa(t)),s=[];return n.forEach(e=>{e instanceof Bs?s.push(e):e instanceof js&&(e.op===t.op?s.push(...e.filters):s.push(e))}),1===s.length?s[0]:js.create(s,t.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class va{constructor(){this.bn=new ba}addToCollectionParentIndex(t,e){return this.bn.add(e),Jt.resolve()}getCollectionParents(t,e){return Jt.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return Jt.resolve()}deleteFieldIndex(t,e){return Jt.resolve()}deleteAllFieldIndexes(t){return Jt.resolve()}createTargetIndexes(t,e){return Jt.resolve()}getDocumentsMatchingTarget(t,e){return Jt.resolve(null)}getIndexType(t,e){return Jt.resolve(0)}getFieldIndexes(t,e){return Jt.resolve([])}getNextCollectionGroupToUpdate(t){return Jt.resolve(null)}getMinOffset(t,e){return Jt.resolve(Gt.min())}getMinOffsetFromCollectionGroup(t,e){return Jt.resolve(Gt.min())}updateCollectionGroup(t,e,n){return Jt.resolve()}updateIndexEntries(t,e){return Jt.resolve()}}class ba{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Pn(yt.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Pn(yt.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="IndexedDbIndexManager",Ta=new Uint8Array(0);class _a{constructor(t,e){this.databaseId=e,this.Dn=new ba,this.Cn=new kr(t=>ar(t),(t,e)=>cr(t,e)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.Dn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.Dn.add(e)});const r={collectionId:n,parent:ye(s)};return Ea(t).put(r)}return Jt.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[mt(e),""],!1,!0);return Ea(t).J(s).next(t=>{for(const s of t){if(s.collectionId!==e)break;n.push(be(s.parent))}return n})}addFieldIndex(t,e){const n=xa(t),s={indexId:(r=e).indexId,collectionGroup:r.collectionGroup,fields:r.fields.map(t=>[t.fieldPath.canonicalString(),t.kind])};var r;delete s.indexId;const i=n.add(s);if(e.indexState){const n=Ca(t);return i.next(t=>{n.put(zo(t,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=xa(t),s=Ca(t),r=Sa(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=xa(t),n=Sa(t),s=Ca(t);return e.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(t,e){return Jt.forEach(this.vn(e),e=>this.getIndexType(t,e).next(n=>{if(0===n||1===n){const n=new ua(e).Sn();if(null!=n)return this.addFieldIndex(t,n)}}))}getDocumentsMatchingTarget(t,e){const n=Sa(t);let s=!0;const r=new Map;return Jt.forEach(this.vn(e),e=>this.Fn(t,e).next(t=>{s&&(s=!!t),r.set(e,t)})).next(()=>{if(s){let t=jr();const s=[];return Jt.forEach(r,(r,i)=>{var o;q(Ia,`Using index ${o=r,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(t=>`${t.fieldPath}:${t.kind}`).join(",")}`} to execute ${ar(e)}`);const a=function(t,e){const n=Ft(e);if(void 0===n)return null;for(const e of hr(t,n.fieldPath))switch(e.op){case"array-contains-any":return e.value.arrayValue.values||[];case"array-contains":return[e.value]}return null}(i,r),c=function(t,e){const n=new Map;for(const s of Lt(e))for(const e of hr(t,s.fieldPath))switch(e.op){case"==":case"in":n.set(s.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return n.set(s.fieldPath.canonicalString(),e.value),Array.from(n.values())}return null}(i,r),u=function(t,e){const n=[];let s=!0;for(const r of Lt(e)){const e=0===r.kind?lr(t,r.fieldPath,t.startAt):dr(t,r.fieldPath,t.startAt);n.push(e.value),s&&(s=e.inclusive)}return new Vs(n,s)}(i,r),h=function(t,e){const n=[];let s=!0;for(const r of Lt(e)){const e=0===r.kind?dr(t,r.fieldPath,t.endAt):lr(t,r.fieldPath,t.endAt);n.push(e.value),s&&(s=e.inclusive)}return new Vs(n,s)}(i,r),l=this.Mn(r,i,u),d=this.Mn(r,i,h),f=this.xn(r,i,c),m=this.On(r.indexId,a,l,u.inclusive,d,h.inclusive,f);return Jt.forEach(m,r=>n.Z(r,e.limit).next(e=>{e.forEach(e=>{const n=bt.fromSegments(e.documentKey);t.has(n)||(t=t.add(n),s.push(n))})}))}).next(()=>s)}return Jt.resolve(null)})}vn(t){let e=this.Cn.get(t);return e||(e=0===t.filters.length?[t]:la(js.create(t.filters,"and")).map(e=>or(t.path,t.collectionGroup,t.orderBy,e.getFilters(),t.limit,t.startAt,t.endAt)),this.Cn.set(t,e),e)}On(t,e,n,s,r,i,o){const a=(null!=e?e.length:1)*Math.max(n.length,r.length),c=a/(null!=e?e.length:1),u=[];for(let h=0;h<a;++h){const a=e?this.Nn(e[h/c]):Ta,l=this.Bn(t,a,n[h%c],s),d=this.Ln(t,a,r[h%c],i),f=o.map(e=>this.Bn(t,a,e,!0));u.push(...this.createRange(l,d,f))}return u}Bn(t,e,n,s){const r=new ra(t,bt.empty(),e,n);return s?r:r.In()}Ln(t,e,n,s){const r=new ra(t,bt.empty(),e,n);return s?r.In():r}Fn(t,e){const n=new ua(e),s=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(t=>{let e=null;for(const s of t)n.gn(s)&&(!e||s.fields.length>e.fields.length)&&(e=s);return e})}getIndexType(t,e){let n=2;const s=this.vn(e);return Jt.forEach(s,e=>this.Fn(t,e).next(t=>{t?0!==n&&t.fields.length<function(t){let e=new Pn(vt.comparator),n=!1;for(const s of t.filters)for(const t of s.getFlattenedFilters())t.field.isKeyField()||("array-contains"===t.op||"array-contains-any"===t.op?n=!0:e=e.add(t.field));for(const n of t.orderBy)n.field.isKeyField()||(e=e.add(n.field));return e.size+(n?1:0)}(e)&&(n=1):n=0})).next(()=>null!==e.limit&&s.length>1&&2===n?1:n)}kn(t,e){const n=new sa;for(const s of Lt(t)){const t=e.data.field(s.fieldPath);if(null==t)return null;const r=n.ln(s.kind);Jo.Wt.Dt(t,r)}return n.un()}Nn(t){const e=new sa;return Jo.Wt.Dt(t,e.ln(0)),e.un()}qn(t,e){const n=new sa;return Jo.Wt.Dt(ws(this.databaseId,e),n.ln(function(t){const e=Lt(t);return 0===e.length?0:e[e.length-1].kind}(t))),n.un()}xn(t,e,n){if(null===n)return[];let s=[];s.push(new sa);let r=0;for(const i of Lt(t)){const t=n[r++];for(const n of s)if(this.Kn(e,i.fieldPath)&&bs(t))s=this.Un(s,i,t);else{const e=n.ln(i.kind);Jo.Wt.Dt(t,e)}}return this.$n(s)}Mn(t,e,n){return this.xn(t,e,n.position)}$n(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].un();return e}Un(t,e,n){const s=[...t],r=[];for(const t of n.arrayValue.values||[])for(const n of s){const s=new sa;s.seed(n.un()),Jo.Wt.Dt(t,s.ln(e.kind)),r.push(s)}return r}Kn(t,e){return!!t.filters.find(t=>t instanceof Bs&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op))}getFieldIndexes(t,e){const n=xa(t),s=Ca(t);return(e?n.J(nn,IDBKeyRange.bound(e,e)):n.J()).next(t=>{const e=[];return Jt.forEach(t,t=>s.get([t.indexId,this.uid]).next(n=>{e.push(function(t,e){const n=e?new jt(e.sequenceNumber,new Gt(Po(e.readTime),new bt(be(e.documentKey)),e.largestBatchId)):jt.empty(),s=t.fields.map(([t,e])=>new Ut(vt.fromServerFormat(t),e));return new Pt(t.indexId,t.collectionGroup,s,n)}(t,n))})).next(()=>e)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(t=>0===t.length?null:(t.sort((t,e)=>{const n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:ct(t.collectionGroup,e.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=xa(t),r=Ca(t);return this.Wn(t).next(t=>s.J(nn,IDBKeyRange.bound(e,e)).next(e=>Jt.forEach(e,e=>r.put(zo(e.indexId,this.uid,t,n)))))}updateIndexEntries(t,e){const n=new Map;return Jt.forEach(e,(e,s)=>{const r=n.get(e.collectionGroup);return(r?Jt.resolve(r):this.getFieldIndexes(t,e.collectionGroup)).next(r=>(n.set(e.collectionGroup,r),Jt.forEach(r,n=>this.Qn(t,e,n).next(e=>{const r=this.Gn(s,n);return e.isEqual(r)?Jt.resolve():this.zn(t,s,n,e,r)}))))})}jn(t,e,n,s){return Sa(t).put(s.Rn(this.uid,this.qn(n,e.key),e.key))}Jn(t,e,n,s){return Sa(t).delete(s.An(this.uid,this.qn(n,e.key),e.key))}Qn(t,e,n){const s=Sa(t);let r=new Pn(ia);return s.ee({index:hn,range:IDBKeyRange.only([n.indexId,this.uid,aa(this.qn(n,e))])},(t,s)=>{r=r.add(new ra(n.indexId,e,ca(s.arrayValue),ca(s.directionalValue)))}).next(()=>r)}Gn(t,e){let n=new Pn(ia);const s=this.kn(e,t);if(null==s)return n;const r=Ft(e);if(null!=r){const i=t.data.field(r.fieldPath);if(bs(i))for(const r of i.arrayValue.values||[])n=n.add(new ra(e.indexId,t.key,this.Nn(r),s))}else n=n.add(new ra(e.indexId,t.key,Ta,s));return n}zn(t,e,n,s,r){q(Ia,"Updating index entries for document '%s'",e.key);const i=[];return function(t,e,n,s,r){const i=t.getIterator(),o=e.getIterator();let a=Ln(i),c=Ln(o);for(;a||c;){let t=!1,e=!1;if(a&&c){const s=n(a,c);s<0?e=!0:s>0&&(t=!0)}else null!=a?e=!0:t=!0;t?(s(c),c=Ln(o)):e?(r(a),a=Ln(i)):(a=Ln(i),c=Ln(o))}}(s,r,ia,s=>{i.push(this.jn(t,e,n,s))},s=>{i.push(this.Jn(t,e,n,s))}),Jt.waitFor(i)}Wn(t){let e=1;return Ca(t).ee({index:on,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(t,n,s)=>{s.done(),e=n.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((t,e)=>ia(t,e)).filter((t,e,n)=>!e||0!==ia(t,n[e-1]));const s=[];s.push(t);for(const r of n){const n=ia(r,t),i=ia(r,e);if(0===n)s[0]=t.In();else if(n>0&&i<0)s.push(r),s.push(r.In());else if(i>0)break}s.push(e);const r=[];for(let t=0;t<s.length;t+=2){if(this.Hn(s[t],s[t+1]))return[];const e=s[t].An(this.uid,Ta,bt.empty()),n=s[t+1].An(this.uid,Ta,bt.empty());r.push(IDBKeyRange.bound(e,n))}return r}Hn(t,e){return ia(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Na)}getMinOffset(t,e){return Jt.mapArray(this.vn(e),e=>this.Fn(t,e).next(t=>t||z(44426))).next(Na)}}function Ea(t){return Nn(t,Je)}function Sa(t){return Nn(t,cn)}function xa(t){return Nn(t,en)}function Ca(t){return Nn(t,sn)}function Na(t){G(0!==t.length,28825);let e=t[0].indexState.offset,n=e.largestBatchId;for(let s=1;s<t.length;s++){const r=t[s].indexState.offset;$t(r,e)<0&&(e=r),n<r.largestBatchId&&(n=r.largestBatchId)}return new Gt(e.readTime,e.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Da=41943040;class ka{static withCacheSize(t){return new ka(t,ka.DEFAULT_COLLECTION_PERCENTILE,ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t,e,n){const s=t.store(Se),r=t.store(Re),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=s.ee({range:o},(t,e,n)=>(a++,n.delete()));i.push(c.next(()=>{G(1===a,47070,{batchId:n.batchId})}));const u=[];for(const t of n.mutations){const s=De(e,t.key.path,n.batchId);i.push(r.delete(s)),u.push(t.key)}return Jt.waitFor(i).next(()=>u)}function Ma(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw z(14731);e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ka.DEFAULT_COLLECTION_PERCENTILE=10,ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ka.DEFAULT=new ka(Da,ka.DEFAULT_COLLECTION_PERCENTILE,ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ka.DISABLED=new ka(-1,0,0);class Oa{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static wt(t,e,n,s){G(""!==t.uid,64387);const r=t.isAuthenticated()?t.uid:"";return new Oa(r,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Pa(t).ee({index:Ce,range:n},(t,n,s)=>{e=!1,s.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const r=Fa(t),i=Pa(t);return i.add({}).next(o=>{G("number"==typeof o,49019);const a=new _i(o,e,n,s),c=function(t,e,n){const s=n.baseMutations.map(e=>go(t.yt,e)),r=n.mutations.map(e=>go(t.yt,e));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:s,mutations:r}}(this.serializer,this.userId,a),u=[];let h=new Pn((t,e)=>ct(t.canonicalString(),e.canonicalString()));for(const t of s){const e=De(this.userId,t.key.path,o);h=h.add(t.key.path.popLast()),u.push(i.put(c)),u.push(r.put(e,ke))}return h.forEach(e=>{u.push(this.indexManager.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Zn[o]=a.keys()}),Jt.waitFor(u).next(()=>a)})}lookupMutationBatch(t,e){return Pa(t).get(e).next(t=>t?(G(t.userId===this.userId,48,"Unexpected user for mutation batch",{userId:t.userId,batchId:e}),Fo(this.serializer,t)):null)}Xn(t,e){return this.Zn[e]?Jt.resolve(this.Zn[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Zn[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return Pa(t).ee({index:Ce,range:s},(t,e,s)=>{e.userId===this.userId&&(G(e.batchId>=n,47524,{Yn:n}),r=Fo(this.serializer,e)),s.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=de;return Pa(t).ee({index:Ce,range:e,reverse:!0},(t,e,s)=>{n=e.batchId,s.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,de],[this.userId,Number.POSITIVE_INFINITY]);return Pa(t).J(Ce,e).next(t=>t.map(t=>Fo(this.serializer,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Ae(this.userId,e.path),s=IDBKeyRange.lowerBound(n),r=[];return Fa(t).ee({range:s},(n,s,i)=>{const[o,a,c]=n,u=be(a);if(o===this.userId&&e.path.isEqual(u))return Pa(t).get(c).next(t=>{if(!t)throw z(61480,{er:n,batchId:c});G(t.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:t.userId,batchId:c}),r.push(Fo(this.serializer,t))});i.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Pn(ct);const s=[];return e.forEach(e=>{const r=Ae(this.userId,e.path),i=IDBKeyRange.lowerBound(r),o=Fa(t).ee({range:i},(t,s,r)=>{const[i,o,a]=t,c=be(o);i===this.userId&&e.path.isEqual(c)?n=n.add(a):r.done()});s.push(o)}),Jt.waitFor(s).next(()=>this.tr(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,r=Ae(this.userId,n),i=IDBKeyRange.lowerBound(r);let o=new Pn(ct);return Fa(t).ee({range:i},(t,e,r)=>{const[i,a,c]=t,u=be(a);i===this.userId&&n.isPrefixOf(u)?u.length===s&&(o=o.add(c)):r.done()}).next(()=>this.tr(t,o))}tr(t,e){const n=[],s=[];return e.forEach(e=>{s.push(Pa(t).get(e).next(t=>{if(null===t)throw z(35274,{batchId:e});G(t.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:t.userId,batchId:e}),n.push(Fo(this.serializer,t))}))}),Jt.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return Ra(t.le,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.nr(e.batchId)}),Jt.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}nr(t){delete this.Zn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return Jt.resolve();const n=IDBKeyRange.lowerBound([this.userId]),s=[];return Fa(t).ee({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=be(t[1]);s.push(e)}else n.done()}).next(()=>{G(0===s.length,56720,{rr:s.map(t=>t.canonicalString())})})})}containsKey(t,e){return Va(t,this.userId,e)}ir(t){return La(t).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:de,lastStreamToken:""})}}function Va(t,e,n){const s=Ae(e,n.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Fa(t).ee({range:i,Y:!0},(t,n,s)=>{const[i,a,c]=t;i===e&&a===r&&(o=!0),s.done()}).next(()=>o)}function Pa(t){return Nn(t,Se)}function Fa(t){return Nn(t,Re)}function La(t){return Nn(t,Ee)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new qa(0)}static ar(){return new qa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.ur(t).next(e=>{const n=new qa(e.highestTargetId);return e.highestTargetId=n.next(),this.cr(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.ur(t).next(t=>Ot.fromTimestamp(new Mt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.ur(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.ur(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.cr(t,s)))}addTargetData(t,e){return this.lr(t,e).next(()=>this.ur(t).next(n=>(n.targetCount+=1,this.hr(e,n),this.cr(t,n))))}updateTargetData(t,e){return this.lr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>Ba(t).delete(e.targetId)).next(()=>this.ur(t)).next(e=>(G(e.targetCount>0,8065),e.targetCount-=1,this.cr(t,e)))}removeTargets(t,e,n){let s=0;const r=[];return Ba(t).ee((i,o)=>{const a=Lo(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(s++,r.push(this.removeTargetData(t,a)))}).next(()=>Jt.waitFor(r)).next(()=>s)}forEachTarget(t,e){return Ba(t).ee((t,n)=>{const s=Lo(n);e(s)})}ur(t){return ja(t).get(He).next(t=>(G(null!==t,2888),t))}cr(t,e){return ja(t).put(He,e)}lr(t,e){return Ba(t).put(qo(this.serializer,e))}hr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.ur(t).next(t=>t.targetCount)}getTargetData(t,e){const n=ar(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return Ba(t).ee({range:s,index:je},(t,n,s)=>{const i=Lo(n);cr(e,i.target)&&(r=i,s.done())}).next(()=>r)}addMatchingKeys(t,e,n){const s=[],r=za(t);return e.forEach(e=>{const i=ye(e.path);s.push(r.put({targetId:n,path:i})),s.push(this.referenceDelegate.addReference(t,n,e))}),Jt.waitFor(s)}removeMatchingKeys(t,e,n){const s=za(t);return Jt.forEach(e,e=>{const r=ye(e.path);return Jt.waitFor([s.delete([n,r]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=za(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=za(t);let r=jr();return s.ee({range:n,Y:!0},(t,e,n)=>{const s=be(t[1]),i=new bt(s);r=r.add(i)}).next(()=>r)}containsKey(t,e){const n=ye(e.path),s=IDBKeyRange.bound([n],[mt(n)],!1,!0);let r=0;return za(t).ee({index:$e,Y:!0,range:s},([t,e],n,s)=>{0!==t&&(r++,s.done())}).next(()=>r>0)}At(t,e){return Ba(t).get(e).next(t=>t?Lo(t):null)}}function Ba(t){return Nn(t,Be)}function ja(t){return Nn(t,We)}function za(t){return Nn(t,Ke)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="LruGarbageCollector",Ga=1048576;function $a([t,e],[n,s]){const r=ct(t,n);return 0===r?ct(e,s):r}class Qa{constructor(t){this.Pr=t,this.buffer=new Pn($a),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();$a(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ha{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(t){q(Ka,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){se(t)?q(Ka,"Ignoring IndexedDB error during garbage collection: ",t):await Wt(t)}await this.Ar(3e5)})}}class Wa{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Jt.resolve(le.ce);const n=new Qa(e);return this.Vr.forEachTarget(t,t=>n.Ir(t.sequenceNumber)).next(()=>this.Vr.mr(t,t=>n.Ir(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector","Garbage collection skipped; disabled"),Jt.resolve(Aa)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Aa):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,o=Date.now(),this.nthSequenceNumber(t,r))).next(e=>(s=e,a=Date.now(),this.removeTargets(t,s,n))).next(e=>(i=e,c=Date.now(),this.removeOrphanedDocuments(t,s))).next(t=>(u=Date.now(),F()<=e.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-h}ms\n\tDetermined least recently used ${r} in `+(a-o)+`ms\n\tRemoved ${i} targets in `+(c-a)+`ms\n\tRemoved ${t} documents in `+(u-c)+`ms\nTotal Duration: ${u-h}ms`),Jt.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}function Ja(t,e){return new Wa(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,e){this.db=t,this.garbageCollector=Ja(this,e)}dr(t){const e=this.pr(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}pr(t){let e=0;return this.mr(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}mr(t,e){return this.yr(t,(t,n)=>e(n))}addReference(t,e,n){return Xa(t,n)}removeReference(t,e,n){return Xa(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Xa(t,e)}wr(t,e){return function(t,e){let n=!1;return La(t).te(s=>Va(t,s,e).next(t=>(t&&(n=!0),Jt.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let r=0;return this.yr(t,(i,o)=>{if(o<=e){const e=this.wr(t,i).next(e=>{if(!e)return r++,n.getEntry(t,i).next(()=>(n.removeEntry(i,Ot.min()),za(t).delete([0,ye(i.path)])))});s.push(e)}}).next(()=>Jt.waitFor(s)).next(()=>n.apply(t)).next(()=>r)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Xa(t,e)}yr(t,e){const n=za(t);let s,r=le.ce;return n.ee({index:$e},([t,n],{path:i,sequenceNumber:o})=>{0===t?(r!==le.ce&&e(new bt(be(s)),r),r=o,s=i):r=le.ce}).next(()=>{r!==le.ce&&e(new bt(be(s)),r)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Xa(t,e){return za(t).put((n=e,s=t.currentSequenceNumber,{targetId:0,path:ye(n.path),sequenceNumber:s}));var n,s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this.changes=new kr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Os.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Jt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return rc(t).put(n)}removeEntry(t,e,n){return rc(t).delete(function(t,e){const n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Oo(e),n[n.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Sr(t,n)))}getEntry(t,e){let n=Os.newInvalidDocument(e);return rc(t).ee({index:Ve,range:IDBKeyRange.only(ic(e))},(t,s)=>{n=this.br(e,s)}).next(()=>n)}Dr(t,e){let n={size:0,document:Os.newInvalidDocument(e)};return rc(t).ee({index:Ve,range:IDBKeyRange.only(ic(e))},(t,s)=>{n={document:this.br(e,s),size:Ma(s)}}).next(()=>n)}getEntries(t,e){let n=Mr();return this.Cr(t,e,(t,e)=>{const s=this.br(t,e);n=n.insert(t,s)}).next(()=>n)}vr(t,e){let n=Mr(),s=new Mn(bt.comparator);return this.Cr(t,e,(t,e)=>{const r=this.br(t,e);n=n.insert(t,r),s=s.insert(t,Ma(e))}).next(()=>({documents:n,Fr:s}))}Cr(t,e,n){if(e.isEmpty())return Jt.resolve();let s=new Pn(ac);e.forEach(t=>s=s.add(t));const r=IDBKeyRange.bound(ic(s.first()),ic(s.last())),i=s.getIterator();let o=i.getNext();return rc(t).ee({index:Ve,range:r},(t,e,s)=>{const r=bt.fromSegments([...e.prefixPath,e.collectionGroup,e.documentId]);for(;o&&ac(o,r)<0;)n(o,null),o=i.getNext();o&&o.isEqual(r)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?s.j(ic(o)):s.done()}).next(()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,r){const i=e.path,o=[i.popLast().toArray(),i.lastSegment(),Oo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return rc(t).J(IDBKeyRange.bound(o,a,!0)).next(t=>{r?.incrementDocumentReadCount(t.length);let n=Mr();for(const r of t){const t=this.br(bt.fromSegments(r.prefixPath.concat(r.collectionGroup,r.documentId)),r);t.isFoundDocument()&&(Cr(e,t)||s.has(t.key))&&(n=n.insert(t.key,t))}return n})}getAllFromCollectionGroup(t,e,n,s){let r=Mr();const i=oc(e,n),o=oc(e,Gt.max());return rc(t).ee({index:Fe,range:IDBKeyRange.bound(i,o,!0)},(t,e,n)=>{const i=this.br(bt.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);r=r.insert(i.key,i),r.size===s&&n.done()}).next(()=>r)}newChangeBuffer(t){return new nc(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return sc(t).get(Ue).next(t=>(G(!!t,20021),t))}Sr(t,e){return sc(t).put(Ue,e)}br(t,e){if(e){const t=function(t,e){let n;if(e.document)n=mo(t.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const t=bt.fromSegments(e.noDocument.path),s=Po(e.noDocument.readTime);n=Os.newNoDocument(t,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return z(56709);{const t=bt.fromSegments(e.unknownDocument.path),s=Po(e.unknownDocument.version);n=Os.newUnknownDocument(t,s)}}return e.readTime&&n.setReadTime(function(t){const e=new Mt(t[0],t[1]);return Ot.fromTimestamp(e)}(e.readTime)),n}(this.serializer,e);if(!t.isNoDocument()||!t.version.isEqual(Ot.min()))return t}return Os.newInvalidDocument(t)}}function ec(t){return new tc(t)}class nc extends Za{constructor(t,e){super(),this.Mr=t,this.trackRemovals=e,this.Or=new kr(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,s=new Pn((t,e)=>ct(t.canonicalString(),e.canonicalString()));return this.changes.forEach((r,i)=>{const o=this.Or.get(r);if(e.push(this.Mr.removeEntry(t,r,o.readTime)),i.isValidDocument()){const a=Mo(this.Mr.serializer,i);s=s.add(r.path.popLast());const c=Ma(a);n+=c-o.size,e.push(this.Mr.addEntry(t,r,a))}else if(n-=o.size,this.trackRemovals){const n=Mo(this.Mr.serializer,i.convertToNoDocument(Ot.min()));e.push(this.Mr.addEntry(t,r,n))}}),s.forEach(n=>{e.push(this.Mr.indexManager.addToCollectionParentIndex(t,n))}),e.push(this.Mr.updateMetadata(t,n)),Jt.waitFor(e)}getFromCache(t,e){return this.Mr.Dr(t,e).next(t=>(this.Or.set(e,{size:t.size,readTime:t.document.readTime}),t.document))}getAllFromCache(t,e){return this.Mr.vr(t,e).next(({documents:t,Fr:e})=>(e.forEach((e,n)=>{this.Or.set(e,{size:n,readTime:t.get(e).readTime})}),t))}}function sc(t){return Nn(t,qe)}function rc(t){return Nn(t,Me)}function ic(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function oc(t,e){const n=e.documentKey.path.toArray();return[t,Oo(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function ac(t,e){const n=t.path.toArray(),s=e.path.toArray();let r=0;for(let t=0;t<n.length-2&&t<s.length-2;++t)if(r=ct(n[t],s[t]),r)return r;return r=ct(n.length,s.length),r||(r=ct(n[n.length-2],s[s.length-2]),r||ct(n[n.length-1],s[s.length-1])
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class cc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&fi(n.mutation,t,qn.empty(),Mt.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,jr()).next(()=>e))}getLocalViewOfDocuments(t,e,n=jr()){const s=Fr();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(t=>{let e=Vr();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=Fr();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,jr()))}populateOverlays(t,e,n){const s=[];return n.forEach(t=>{e.has(t)||s.push(t)}),this.documentOverlayCache.getOverlays(t,s).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,s){let r=Mr();const i=qr(),o=qr();return e.forEach((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof yi)?r=r.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),fi(o.mutation,e,o.mutation.getFieldMask(),Mt.now())):i.set(e.key,qn.empty())}),this.recalculateAndSaveOverlays(t,r).next(t=>(t.forEach((t,e)=>i.set(t,e)),e.forEach((t,e)=>o.set(t,new cc(e,i.get(t)??null))),o))}recalculateAndSaveOverlays(t,e){const n=qr();let s=new Mn((t,e)=>t-e),r=jr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const r of t)r.keys().forEach(t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||qn.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||jr()).add(t);s=s.insert(r.batchId,a)})}).next(()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=Lr();c.forEach(t=>{if(!r.has(t)){const s=li(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}}),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Jt.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,s){return function(t){return bt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):yr(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):Jt.resolve(Fr());let o=Vt,a=r;return i.next(e=>Jt.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Jt.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,r)).next(()=>this.computeViews(t,a,e,jr())).next(t=>({batchId:o,changes:Pr(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new bt(e)).next(t=>{let e=Vr();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const r=e.collectionGroup;let i=Vr();return this.indexManager.getCollectionParents(t,r).next(o=>Jt.forEach(o,o=>{const a=(c=e,u=o.child(r),new fr(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(t,a,n,s).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,s))).next(t=>{r.forEach((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,Os.newInvalidDocument(s)))});let n=Vr();return t.forEach((t,s)=>{const i=r.get(t);void 0!==i&&fi(i.mutation,s,qn.empty(),Mt.now()),Cr(e,s)&&(n=n.insert(t,s))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return Jt.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,{id:(n=e).id,version:n.version,createTime:no(n.createTime)}),Jt.resolve();var n}getNamedQuery(t,e){return Jt.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,{name:(n=e).name,query:Uo(n.bundledQuery),readTime:no(n.readTime)}),Jt.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.overlays=new Mn(bt.comparator),this.Lr=new Map}getOverlay(t,e){return Jt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Fr();return Jt.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,s)=>{this.St(t,e,s)}),Jt.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Lr.get(n);return void 0!==s&&(s.forEach(t=>this.overlays=this.overlays.remove(t)),this.Lr.delete(n)),Jt.resolve()}getOverlaysForCollection(t,e,n){const s=Fr(),r=e.length+1,i=new bt(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Jt.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new Mn((t,e)=>t-e);const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Fr(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Fr(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=s)););return Jt.resolve(o)}St(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Si(e,n));let r=this.Lr.get(e);void 0===r&&(r=jr(),this.Lr.set(e,r)),this.Lr.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.sessionToken=jn.EMPTY_BYTE_STRING}getSessionToken(t){return Jt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Jt.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.kr=new Pn(mc.qr),this.Kr=new Pn(mc.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new mc(t,e);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Wr(new mc(t,e))}Qr(t,e){t.forEach(t=>this.removeReference(t,e))}Gr(t){const e=new bt(new yt([])),n=new mc(e,t),s=new mc(e,t+1),r=[];return this.Kr.forEachInRange([n,s],t=>{this.Wr(t),r.push(t.key)}),r}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new bt(new yt([])),n=new mc(e,t),s=new mc(e,t+1);let r=jr();return this.Kr.forEachInRange([n,s],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new mc(t,0),n=this.kr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class mc{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return bt.comparator(t.key,e.key)||ct(t.Jr,e.Jr)}static Ur(t,e){return ct(t.Jr,e.Jr)||bt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new Pn(mc.qr)}checkEmpty(t){return Jt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new _i(r,e,n,s);this.mutationQueue.push(i);for(const e of s)this.Hr=this.Hr.add(new mc(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Jt.resolve(i)}lookupMutationBatch(t,e){return Jt.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Xr(n),r=s<0?0:s;return Jt.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Jt.resolve(0===this.mutationQueue.length?de:this.Yn-1)}getAllMutationBatches(t){return Jt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new mc(e,0),s=new mc(e,Number.POSITIVE_INFINITY),r=[];return this.Hr.forEachInRange([n,s],t=>{const e=this.Zr(t.Jr);r.push(e)}),Jt.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Pn(ct);return e.forEach(t=>{const e=new mc(t,0),s=new mc(t,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([e,s],t=>{n=n.add(t.Jr)})}),Jt.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;bt.isDocumentKey(r)||(r=r.child(""));const i=new mc(new bt(r),0);let o=new Pn(ct);return this.Hr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.Jr)),!0)},i),Jt.resolve(this.Yr(o))}Yr(t){const e=[];return t.forEach(t=>{const n=this.Zr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){G(0===this.ei(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return Jt.forEach(e.mutations,s=>{const r=new mc(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=n})}nr(t){}containsKey(t,e){const n=new mc(e,0),s=this.Hr.firstAfterOrEqual(n);return Jt.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Jt.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.ti=t,this.docs=new Mn(bt.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Jt.resolve(n?n.document.mutableCopy():Os.newInvalidDocument(e))}getEntries(t,e){let n=Mr();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Os.newInvalidDocument(t))}),Jt.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let r=Mr();const i=e.path,o=new bt(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||$t(Kt(o),n)<=0||(s.has(o.key)||Cr(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Jt.resolve(r)}getAllFromCollectionGroup(t,e,n,s){z(9500)}ni(t,e){return Jt.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new yc(this)}getSize(t){return Jt.resolve(this.size)}}class yc extends Za{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(n)}),Jt.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t){this.persistence=t,this.ri=new kr(t=>ar(t),cr),this.lastRemoteSnapshotVersion=Ot.min(),this.highestTargetId=0,this.ii=0,this.si=new fc,this.targetCount=0,this.oi=qa._r()}forEachTarget(t,e){return this.ri.forEach((t,n)=>e(n)),Jt.resolve()}getLastRemoteSnapshotVersion(t){return Jt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Jt.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),Jt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),Jt.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new qa(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,Jt.resolve()}updateTargetData(t,e){return this.lr(e),Jt.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,Jt.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.ri.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ri.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)}),Jt.waitFor(r).next(()=>s)}getTargetCount(t){return Jt.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return Jt.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),Jt.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach(e=>{r.push(s.markPotentiallyOrphaned(t,e))}),Jt.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),Jt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return Jt.resolve(n)}containsKey(t,e){return Jt.resolve(this.si.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e){this._i={},this.overlays={},this.ai=new le(0),this.ui=!1,this.ui=!0,this.ci=new dc,this.referenceDelegate=t(this),this.li=new wc(this),this.indexManager=new va,this.remoteDocumentCache=new pc(t=>this.referenceDelegate.hi(t)),this.serializer=new Ro(e),this.Pi=new hc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new lc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new gc(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){q("MemoryPersistence","Starting transaction:",t);const s=new bc(this.ai.next());return this.referenceDelegate.Ti(),n(s).next(t=>this.referenceDelegate.Ei(s).next(()=>t)).toPromise().then(t=>(s.raiseOnCommittedEvent(),t))}Ii(t,e){return Jt.or(Object.values(this._i).map(n=>()=>n.containsKey(t,e)))}}class bc extends Ht{constructor(t){super(),this.currentSequenceNumber=t}}class Ic{constructor(t){this.persistence=t,this.Ri=new fc,this.Ai=null}static Vi(t){return new Ic(t)}get di(){if(this.Ai)return this.Ai;throw z(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),Jt.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),Jt.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),Jt.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(t=>this.di.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.di.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Jt.forEach(this.di,n=>{const s=bt.fromPath(n);return this.mi(t,s).next(t=>{t||e.removeEntry(s,Ot.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(t=>{t?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return Jt.or([()=>Jt.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class Tc{constructor(t,e){this.persistence=t,this.fi=new kr(t=>ye(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=Ja(this,e)}static Vi(t,e){return new Tc(t,e)}Ti(){}Ei(t){return Jt.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}pr(t){let e=0;return this.mr(t,t=>{e++}).next(()=>e)}mr(t,e){return Jt.forEach(this.fi,(n,s)=>this.wr(t,n,s).next(t=>t?Jt.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(t,s=>this.wr(t,s,e).next(t=>{t||(n++,r.removeEntry(s,Ot.min()))})).next(()=>r.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),Jt.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),Jt.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),Jt.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),Jt.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ys(t.data.value)),e}wr(t,e,n){return Jt.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.fi.get(e);return Jt.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t){this.serializer=t}k(t,e,n,s){const r=new Xt("createOrUpgrade",e);n<1&&s>=1&&(t.createObjectStore(Te),function(t){t.createObjectStore(Ee,{keyPath:"userId"});t.createObjectStore(Se,{keyPath:xe,autoIncrement:!0}).createIndex(Ce,Ne,{unique:!0}),t.createObjectStore(Re)}(t),Ec(t),function(t){t.createObjectStore(Ie)}(t));let i=Jt.resolve();return n<3&&s>=3&&(0!==n&&(function(t){t.deleteObjectStore(Ke),t.deleteObjectStore(Be),t.deleteObjectStore(We)}(t),Ec(t)),i=i.next(()=>function(t){const e=t.store(We),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ot.min().toTimestamp(),targetCount:0};return e.put(He,n)}(r))),n<4&&s>=4&&(0!==n&&(i=i.next(()=>function(t,e){return e.store(Se).J().next(n=>{t.deleteObjectStore(Se),t.createObjectStore(Se,{keyPath:xe,autoIncrement:!0}).createIndex(Ce,Ne,{unique:!0});const s=e.store(Se),r=n.map(t=>s.put(t));return Jt.waitFor(r)})}(t,r))),i=i.next(()=>{!function(t){t.createObjectStore(Xe,{keyPath:"clientId"})}(t)})),n<5&&s>=5&&(i=i.next(()=>this.gi(r))),n<6&&s>=6&&(i=i.next(()=>(function(t){t.createObjectStore(qe)}(t),this.pi(r)))),n<7&&s>=7&&(i=i.next(()=>this.yi(r))),n<8&&s>=8&&(i=i.next(()=>this.wi(t,r))),n<9&&s>=9&&(i=i.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t)})),n<10&&s>=10&&(i=i.next(()=>this.Si(r))),n<11&&s>=11&&(i=i.next(()=>{!function(t){t.createObjectStore(Ze,{keyPath:"bundleId"})}(t),function(t){t.createObjectStore(tn,{keyPath:"name"})}(t)})),n<12&&s>=12&&(i=i.next(()=>{!function(t){const e=t.createObjectStore(dn,{keyPath:fn});e.createIndex(mn,gn,{unique:!1}),e.createIndex(pn,yn,{unique:!1})}(t)})),n<13&&s>=13&&(i=i.next(()=>function(t){const e=t.createObjectStore(Me,{keyPath:Oe});e.createIndex(Ve,Pe),e.createIndex(Fe,Le)}(t)).next(()=>this.bi(t,r)).next(()=>t.deleteObjectStore(Ie))),n<14&&s>=14&&(i=i.next(()=>this.Di(t,r))),n<15&&s>=15&&(i=i.next(()=>function(t){t.createObjectStore(en,{keyPath:"indexId",autoIncrement:!0}).createIndex(nn,"collectionGroup",{unique:!1});t.createObjectStore(sn,{keyPath:rn}).createIndex(on,an,{unique:!1});t.createObjectStore(cn,{keyPath:un}).createIndex(hn,ln,{unique:!1})}(t))),n<16&&s>=16&&(i=i.next(()=>{e.objectStore(sn).clear()}).next(()=>{e.objectStore(cn).clear()})),n<17&&s>=17&&(i=i.next(()=>{!function(t){t.createObjectStore(wn,{keyPath:"name"})}(t)})),n<18&&s>=18&&y()&&(i=i.next(()=>{e.objectStore(sn).clear()}).next(()=>{e.objectStore(cn).clear()})),i}pi(t){let e=0;return t.store(Ie).ee((t,n)=>{e+=Ma(n)}).next(()=>{const n={byteSize:e};return t.store(qe).put(Ue,n)})}gi(t){const e=t.store(Ee),n=t.store(Se);return e.J().next(e=>Jt.forEach(e,e=>{const s=IDBKeyRange.bound([e.userId,de],[e.userId,e.lastAcknowledgedBatchId]);return n.J(Ce,s).next(n=>Jt.forEach(n,n=>{G(n.userId===e.userId,18650,"Cannot process batch from unexpected user",{batchId:n.batchId});const s=Fo(this.serializer,n);return Ra(t,e.userId,s).next(()=>{})}))}))}yi(t){const e=t.store(Ke),n=t.store(Ie);return t.store(We).get(He).next(t=>{const s=[];return n.ee((n,r)=>{const i=new yt(n),o=[0,ye(i)];s.push(e.get(o).next(n=>{return n?Jt.resolve():(s=i,e.put({targetId:0,path:ye(s),sequenceNumber:t.highestListenSequenceNumber}));var s}))}).next(()=>Jt.waitFor(s))})}wi(t,e){t.createObjectStore(Je,{keyPath:Ye});const n=e.store(Je),s=new ba,r=t=>{if(s.add(t)){const e=t.lastSegment(),s=t.popLast();return n.put({collectionId:e,parent:ye(s)})}};return e.store(Ie).ee({Y:!0},(t,e)=>{const n=new yt(t);return r(n.popLast())}).next(()=>e.store(Re).ee({Y:!0},([t,e,n],s)=>{const i=be(e);return r(i.popLast())}))}Si(t){const e=t.store(Be);return e.ee((t,n)=>{const s=Lo(n),r=qo(this.serializer,s);return e.put(r)})}bi(t,e){const n=e.store(Ie),s=[];return n.ee((t,n)=>{const r=e.store(Me),i=(a=n,a.document?new bt(yt.fromString(a.document.name).popFirst(5)):a.noDocument?bt.fromSegments(a.noDocument.path):a.unknownDocument?bt.fromSegments(a.unknownDocument.path):z(36783)).path.toArray(),o={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};var a;s.push(r.put(o))}).next(()=>Jt.waitFor(s))}Di(t,e){const n=e.store(Se),s=ec(this.serializer),r=new vc(Ic.Vi,this.serializer.yt);return n.J().next(t=>{const n=new Map;return t.forEach(t=>{let e=n.get(t.userId)??jr();Fo(this.serializer,t).keys().forEach(t=>e=e.add(t)),n.set(t.userId,e)}),Jt.forEach(n,(t,n)=>{const i=new O(n),o=Qo.wt(this.serializer,i),a=r.getIndexManager(i),c=Oa.wt(i,this.serializer,a,r.referenceDelegate);return new uc(s,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Cn(e,le.ce),t).next()})})}}function Ec(t){t.createObjectStore(Ke,{keyPath:Ge}).createIndex($e,Qe,{unique:!0}),t.createObjectStore(Be,{keyPath:"targetId"}).createIndex(je,ze,{unique:!0}),t.createObjectStore(We)}const Sc="IndexedDbPersistence",xc=18e5,Cc=5e3,Nc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Ac="main";class Dc{constructor(t,e,n,s,r,i,o,a,c,u,h=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Ci=r,this.window=i,this.document=o,this.Fi=c,this.Mi=u,this.xi=h,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=t=>Promise.resolve(),!Dc.v())throw new W(H.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ya(this,s),this.qi=e+Ac,this.serializer=new Ro(a),this.Ki=new Zt(this.qi,this.xi,new _c(this.serializer)),this.ci=new Wo,this.li=new Ua(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ec(this.serializer),this.Pi=new Ko,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,!1===u&&U(Sc,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new W(H.FAILED_PRECONDITION,Nc);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.li.getHighestSequenceNumber(t))}).then(t=>{this.ai=new le(t,this.Fi)}).then(()=>{this.ui=!0}).catch(t=>(this.Ki&&this.Ki.close(),Promise.reject(t)))}zi(t){return this.ki=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ki.K(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Ci.enqueueAndForget(async()=>{this.started&&await this.$i()}))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Rc(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(t).next(t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Ji(t)).next(e=>this.isPrimary&&!e?this.Hi(t).next(()=>!1):!!e&&this.Zi(t).next(()=>!0))).catch(t=>{if(se(t))return q(Sc,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return q(Sc,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Ci.enqueueRetryable(()=>this.ki(t)),this.isPrimary=t})}ji(t){return kc(t).get(_e).next(t=>Jt.resolve(this.Xi(t)))}Yi(t){return Rc(t).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,xc)){this.Li=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Nn(t,Xe);return e.J().next(t=>{const n=this.ns(t,xc),s=t.filter(t=>-1===n.indexOf(t));return Jt.forEach(s,t=>e.delete(t.clientId)).next(()=>s)})}).catch(()=>[]);if(this.Ui)for(const e of t)this.Ui.removeItem(this.rs(e.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(t){return!!t&&t.ownerId===this.clientId}Ji(t){return this.Mi?Jt.resolve(!0):kc(t).get(_e).next(e=>{if(null!==e&&this.ts(e.leaseTimestampMs,Cc)&&!this.ss(e.ownerId)){if(this.Xi(e)&&this.networkEnabled)return!0;if(!this.Xi(e)){if(!e.allowTabSynchronization)throw new W(H.FAILED_PRECONDITION,Nc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Rc(t).J().next(t=>void 0===this.ns(t,Cc).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,s=this.networkEnabled===t.networkEnabled;if(e||n&&s)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&q(Sc,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.Ki.runTransaction("shutdown","readwrite",[Te,Xe],t=>{const e=new Cn(t,le.ce);return this.Hi(e).next(()=>this.Yi(e))}),this.Ki.close(),this.ls()}ns(t,e){return t.filter(t=>this.ts(t.updateTimeMs,e)&&!this.ss(t.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",t=>Rc(t).J().next(t=>this.ns(t,xc).map(t=>t.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(t,e){return Oa.wt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new _a(t,this.serializer.yt.databaseId)}getDocumentOverlayCache(t){return Qo.wt(this.serializer,t)}getBundleCache(){return this.Pi}runTransaction(t,e,n){q(Sc,"Starting transaction:",t);const s="readonly"===e?"readonly":"readwrite",r=18===(i=this.xi)?xn:17===i?Sn:16===i?En:15===i?_n:14===i?Tn:13===i?In:12===i?bn:11===i?vn:void z(60245);var i;let o;return this.Ki.runTransaction(t,s,r,s=>(o=new Cn(s,this.ai?this.ai.next():le.ce),"readwrite-primary"===e?this.ji(o).next(t=>!!t||this.Ji(o)).next(e=>{if(!e)throw U(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new W(H.FAILED_PRECONDITION,Qt);return n(o)}).next(t=>this.Zi(o).next(()=>t)):this.Ps(o).next(()=>n(o)))).then(t=>(o.raiseOnCommittedEvent(),t))}Ps(t){return kc(t).get(_e).next(t=>{if(null!==t&&this.ts(t.leaseTimestampMs,Cc)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new W(H.FAILED_PRECONDITION,Nc)})}Zi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return kc(t).put(_e,e)}static v(){return Zt.v()}Hi(t){const e=kc(t);return e.get(_e).next(t=>this.Xi(t)?(q(Sc,"Releasing primary lease."),e.delete(_e)):Jt.resolve())}ts(t,e){const n=Date.now();return!(t<n-e||t>n&&(U(`Detected an update time that is in the future: ${t} > ${n}`),1))}Wi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground="visible"===this.document.visibilityState)}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){"function"==typeof this.window?.addEventListener&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;p()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(t){try{const e=null!==this.Ui?.getItem(this.rs(t));return q(Sc,`Client '${t}' ${e?"is":"is not"} zombied in LocalStorage`),e}catch(t){return U(Sc,"Failed to get zombied client id.",t),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(t){U("Failed to set zombie client id.",t)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch(t){}}rs(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function kc(t){return Nn(t,Te)}function Rc(t){return Nn(t,Xe)}function Mc(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Oc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Ts=n,this.Es=s}static Is(t,e){let n=jr(),s=jr();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Oc(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=p()?8:te(g())>0?6:4}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,s){const r={result:null};return this.gs(t,e).next(t=>{r.result=t}).next(()=>{if(!r.result)return this.ps(t,e,s,n).next(t=>{r.result=t})}).next(()=>{if(r.result)return;const n=new Vc;return this.ys(t,e,n).next(s=>{if(r.result=s,this.As)return this.ws(t,e,n,s.size)})}).next(()=>r.result)}ws(t,n,s,r){return s.documentReadCount<this.Vs?(F()<=e.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Jt.resolve()):(F()<=e.DEBUG&&q("QueryEngine","Query:",xr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(F()<=e.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,vr(n))):Jt.resolve())}gs(t,e){if(pr(e))return Jt.resolve(null);let n=vr(e);return this.indexManager.getIndexType(t,n).next(s=>0===s?null:(null!==e.limit&&1===s&&(e=_r(e,null,"F"),n=vr(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const r=jr(...s);return this.fs.getDocuments(t,r).next(s=>this.indexManager.getMinOffset(t,n).next(n=>{const i=this.Ss(e,s);return this.bs(e,i,r,n.readTime)?this.gs(t,_r(e,null,"F")):this.Ds(t,i,e,n)}))})))}ps(t,n,s,r){return pr(n)||r.isEqual(Ot.min())?Jt.resolve(null):this.fs.getDocuments(t,s).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,s,r)?Jt.resolve(null):(F()<=e.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xr(n)),this.Ds(t,o,n,zt(r,Vt)).next(t=>t))})}Ss(t,e){let n=new Pn(Ar(t));return e.forEach((e,s)=>{Cr(t,s)&&(n=n.add(s))}),n}bs(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(t,n,s){return F()<=e.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",xr(n)),this.fs.getDocumentsMatchingQuery(t,n,Gt.min(),s)}Ds(t,e,n,s){return this.fs.getDocumentsMatchingQuery(t,n,s).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="LocalStore";class Lc{constructor(t,e,n,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new Mn(ct),this.Fs=new kr(t=>ar(t),cr),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new uc(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function qc(t,e,n,s){return new Lc(t,e,n,s)}async function Uc(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next(r=>(s=r,n.Os(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const r=[],i=[];let o=jr();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ns:t,removedBatchIds:r,addedBatchIds:i}))})})}function Bc(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function jc(t,e,n){let s=jr(),r=jr();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Mr();return n.forEach((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(Ot.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):q(Fc,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Bs:s,Ls:r}})}function zc(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=de),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function Kc(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let s;return n.li.getTargetData(t,e).next(r=>r?(s=r,Jt.resolve(s)):n.li.allocateTargetId(t).next(r=>(s=new ko(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.li.addTargetData(t,s).next(()=>s))))}).then(t=>{const s=n.vs.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(t.targetId,t),n.Fs.set(e,t.targetId)),t})}async function Gc(t,e,n){const s=Q(t),r=s.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,t=>s.persistence.referenceDelegate.removeTarget(t,r))}catch(t){if(!se(t))throw t;q(Fc,`Failed to update sequence numbers for target ${e}: ${t}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function $c(t,e,n){const s=Q(t);let r=Ot.min(),i=jr();return s.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const s=Q(t),r=s.Fs.get(n);return void 0!==r?Jt.resolve(s.vs.get(r)):s.li.getTargetData(e,n)}(s,t,vr(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>s.Cs.getDocumentsMatchingQuery(t,e,n?r:Ot.min(),n?i:jr())).next(t=>(Wc(s,Nr(e),t),{documents:t,ks:i})))}function Qc(t,e){const n=Q(t),s=Q(n.li),r=n.vs.get(e);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",t=>s.At(t,e).next(t=>t?t.target:null))}function Hc(t,e){const n=Q(t),s=n.Ms.get(e)||Ot.min();return n.persistence.runTransaction("Get new document changes","readonly",t=>n.xs.getAllFromCollectionGroup(t,e,zt(s,Vt),Number.MAX_SAFE_INTEGER)).then(t=>(Wc(n,e,t),t))}function Wc(t,e,n){let s=t.Ms.get(e)||Ot.min();n.forEach((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)}),t.Ms.set(e,s)}async function Jc(t,e,n=jr()){const s=await Kc(t,vr(Uo(e.bundledQuery))),r=Q(t);return r.persistence.runTransaction("Save named query","readwrite",t=>{const i=no(e.readTime);if(s.snapshotVersion.compareTo(i)>=0)return r.Pi.saveNamedQuery(t,e);const o=s.withResumeToken(jn.EMPTY_BYTE_STRING,i);return r.vs=r.vs.insert(o.targetId,o),r.li.updateTargetData(t,o).next(()=>r.li.removeMatchingKeysForTargetId(t,s.targetId)).next(()=>r.li.addMatchingKeys(t,n,s.targetId)).next(()=>r.Pi.saveNamedQuery(t,e))})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="firestore_clients";function Xc(t,e){return`${Yc}_${t}_${e}`}const Zc="firestore_mutations";function tu(t,e,n){let s=`${Zc}_${t}_${n}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}const eu="firestore_targets";function nu(t,e){return`${eu}_${t}_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="SharedClientState";class ru{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static $s(t,e,n){const s=JSON.parse(n);let r,i="object"==typeof s&&-1!==["pending","acknowledged","rejected"].indexOf(s.state)&&(void 0===s.error||"object"==typeof s.error);return i&&s.error&&(i="string"==typeof s.error.message&&"string"==typeof s.error.code,i&&(r=new W(s.error.code,s.error.message))),i?new ru(t,e,s.state,r):(U(su,`Failed to parse mutation state for ID '${e}': ${n}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class iu{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static $s(t,e){const n=JSON.parse(e);let s,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(s=new W(n.error.code,n.error.message))),r?new iu(t,n.state,s):(U(su,`Failed to parse target state for ID '${t}': ${e}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class ou{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static $s(t,e){const n=JSON.parse(e);let s="object"==typeof n&&n.activeTargetIds instanceof Array,r=Kr();for(let t=0;s&&t<n.activeTargetIds.length;++t)s=ge(n.activeTargetIds[t]),r=r.add(n.activeTargetIds[t]);return s?new ou(t,r):(U(su,`Failed to parse client data for instance '${t}': ${e}`),null)}}class au{constructor(t,e){this.clientId=t,this.onlineState=e}static $s(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new au(e.clientId,e.onlineState):(U(su,`Failed to parse online state: ${t}`),null)}}class cu{constructor(){this.activeTargetIds=Kr()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class uu{constructor(t,e,n,s,r){this.window=t,this.Ci=e,this.persistenceKey=n,this.zs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Js.bind(this),this.Hs=new Mn(ct),this.started=!1,this.Zs=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.Xs=Xc(this.persistenceKey,this.zs),this.Ys=`firestore_sequence_number_${this.persistenceKey}`,this.Hs=this.Hs.insert(this.zs,new cu),this.eo=new RegExp(`^${Yc}_${i}_([^_]*)$`),this.no=new RegExp(`^${Zc}_${i}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${eu}_${i}_(\\d+)$`),this.io=function(t){return`firestore_online_state_${t}`}(this.persistenceKey),this.so=function(t){return`firestore_bundle_loaded_v2_${t}`}(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.hs();for(const e of t){if(e===this.zs)continue;const t=this.getItem(Xc(this.persistenceKey,e));if(t){const n=ou.$s(e,t);n&&(this.Hs=this.Hs.insert(n.clientId,n))}}this.oo();const e=this.storage.getItem(this.io);if(e){const t=this._o(e);t&&this.ao(t)}for(const t of this.Zs)this.Js(t);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Ys,JSON.stringify(t))}getAllActiveQueryTargets(){return this.uo(this.Hs)}isActiveQueryTarget(t){let e=!1;return this.Hs.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.co(t,"pending")}updateMutationState(t,e,n){this.co(t,e,n),this.lo(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const e=this.storage.getItem(nu(this.persistenceKey,t));if(e){const s=iu.$s(t,e);s&&(n=s.state)}}return e&&this.ho.Qs(t),this.oo(),n}removeLocalQueryTarget(t){this.ho.Gs(t),this.oo()}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(nu(this.persistenceKey,t))}updateQueryState(t,e,n){this.Po(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.lo(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.To(t)}notifyBundleLoaded(t){this.Eo(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return q(su,"READ",t,e),e}setItem(t,e){q(su,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){q(su,"REMOVE",t),this.storage.removeItem(t)}Js(t){const e=t;if(e.storageArea===this.storage){if(q(su,"EVENT",e.key,e.newValue),e.key===this.Xs)return void U("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.eo.test(e.key)){if(null==e.newValue){const t=this.Io(e.key);return this.Ro(t,null)}{const t=this.Ao(e.key,e.newValue);if(t)return this.Ro(t.clientId,t)}}else if(this.no.test(e.key)){if(null!==e.newValue){const t=this.Vo(e.key,e.newValue);if(t)return this.mo(t)}}else if(this.ro.test(e.key)){if(null!==e.newValue){const t=this.fo(e.key,e.newValue);if(t)return this.po(t)}}else if(e.key===this.io){if(null!==e.newValue){const t=this._o(e.newValue);if(t)return this.ao(t)}}else if(e.key===this.Ys){const t=function(t){let e=le.ce;if(null!=t)try{const n=JSON.parse(t);G("number"==typeof n,30636,{yo:t}),e=n}catch(t){U(su,"Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==le.ce&&this.sequenceNumberHandler(t)}else if(e.key===this.so){const t=this.wo(e.newValue);await Promise.all(t.map(t=>this.syncEngine.So(t)))}}else this.Zs.push(e)})}}get ho(){return this.Hs.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(t,e,n){const s=new ru(this.currentUser,t,e,n),r=tu(this.persistenceKey,this.currentUser,t);this.setItem(r,s.Ws())}lo(t){const e=tu(this.persistenceKey,this.currentUser,t);this.removeItem(e)}To(t){const e={clientId:this.zs,onlineState:t};this.storage.setItem(this.io,JSON.stringify(e))}Po(t,e,n){const s=nu(this.persistenceKey,t),r=new iu(t,e,n);this.setItem(s,r.Ws())}Eo(t){const e=JSON.stringify(Array.from(t));this.setItem(this.so,e)}Io(t){const e=this.eo.exec(t);return e?e[1]:null}Ao(t,e){const n=this.Io(t);return ou.$s(n,e)}Vo(t,e){const n=this.no.exec(t),s=Number(n[1]),r=void 0!==n[2]?n[2]:null;return ru.$s(new O(r),s,e)}fo(t,e){const n=this.ro.exec(t),s=Number(n[1]);return iu.$s(s,e)}_o(t){return au.$s(t)}wo(t){return JSON.parse(t)}async mo(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.bo(t.batchId,t.state,t.error);q(su,`Ignoring mutation for non-active user ${t.user.uid}`)}po(t){return this.syncEngine.Do(t.targetId,t.state,t.error)}Ro(t,e){const n=e?this.Hs.insert(t,e):this.Hs.remove(t),s=this.uo(this.Hs),r=this.uo(n),i=[],o=[];return r.forEach(t=>{s.has(t)||i.push(t)}),s.forEach(t=>{r.has(t)||o.push(t)}),this.syncEngine.Co(i,o).then(()=>{this.Hs=n})}ao(t){this.Hs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}uo(t){let e=Kr();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class hu{constructor(){this.vo=new cu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new cu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{Mo(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="ConnectivityMonitor";class fu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(du,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){q(du,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu=null;function gu(){return null===mu?mu=268435456+Math.round(2147483648*Math.random()):mu++,"0x"+mu.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const pu="RestConnection",yu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class wu{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===es?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(t,e,n,s,i){const o=gu(),a=this.Qo(t,e.toUriEncodedString());q(pu,`Sending RPC '${t}' ${o}:`,a,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:u}=new URL(a),h=r(u);return this.zo(t,a,c,n,h).then(e=>(q(pu,`Received RPC '${t}' ${o}: `,e),e),e=>{throw B(pu,`RPC '${t}' ${o} failed with error: `,e,"url: ",a,"request:",n),e})}jo(t,e,n,s,r,i){return this.Wo(t,e,n,s,r)}Go(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+V,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Qo(t,e){const n=yu[t];let s=`${this.Ko}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="WebChannelConnection",Iu=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};class Tu extends wu{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Tu.c_){const t=k();Iu(t,D.STAT_EVENT,t=>{t.stat===A.PROXY?q(bu,"STAT_EVENT: detected buffering proxy"):t.stat===A.NOPROXY&&q(bu,"STAT_EVENT: detected no buffering proxy")}),Tu.c_=!0}}zo(t,e,n,s,r){const i=gu();return new Promise((r,o)=>{const a=new S;a.setWithCredentials(!0),a.listenOnce(C.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case N.NO_ERROR:const e=a.getResponseJson();q(bu,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case N.TIMEOUT:q(bu,`RPC '${t}' ${i} timed out`),o(new W(H.DEADLINE_EXCEEDED,"Request time out"));break;case N.HTTP_ERROR:const n=a.getStatus();if(q(bu,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=t?.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(e)>=0?e:H.UNKNOWN}(e.status);o(new W(t,e.message))}else o(new W(H.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(H.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:t,streamId:i,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{q(bu,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);q(bu,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",c,n,15)})}T_(t,e,n){const s=gu(),r=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=r.join("");q(bu,`Creating RPC '${t}' stream ${s}: ${c}`,o);const u=i.createWebChannel(c,o);this.E_(u);let h=!1,l=!1;const d=new vu({Jo:e=>{l?q(bu,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(h||(q(bu,`Opening RPC '${t}' stream ${s} transport.`),u.open(),h=!0),q(bu,`RPC '${t}' stream ${s} sending:`,e),u.send(e))},Ho:()=>u.close()});return Iu(u,x.EventType.OPEN,()=>{l||(q(bu,`RPC '${t}' stream ${s} transport opened.`),d.i_())}),Iu(u,x.EventType.CLOSE,()=>{l||(l=!0,q(bu,`RPC '${t}' stream ${s} transport closed`),d.o_(),this.I_(u))}),Iu(u,x.EventType.ERROR,e=>{l||(l=!0,B(bu,`RPC '${t}' stream ${s} transport errored. Name:`,e.name,"Message:",e.message),d.o_(new W(H.UNAVAILABLE,"The operation could not be completed")))}),Iu(u,x.EventType.MESSAGE,e=>{if(!l){const n=e.data[0];G(!!n,16349);const r=n,i=r?.error||r[0]?.error;if(i){q(bu,`RPC '${t}' stream ${s} received error:`,i);const e=i.status;let n=function(t){const e=Ni[t];if(void 0!==e)return ki(e)}(e),r=i.message;"NOT_FOUND"===e&&r.includes("database")&&r.includes("does not exist")&&r.includes(this.databaseId.database)&&B(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=H.INTERNAL,r="Unknown error status: "+e+" with message "+i.message),l=!0,d.o_(new W(n,r)),u.close()}else q(bu,`RPC '${t}' stream ${s} received:`,n),d.__(n)}}),Tu.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return R()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _u(){return"undefined"!=typeof window?window:null}function Eu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){return new Yi(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tu.c_=!1;class xu{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-n);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="PersistentStream";class Nu{constructor(t,e,n,s,r,i,o,a){this.Ci=t,this.S_=n,this.b_=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xu(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===H.RESOURCE_EXHAUSTED?(U(e.toString()),U("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===H.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.D_===e&&this.G_(t,n)},e=>{t(()=>{const t=new W(H.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)})})}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(t=>{n(()=>this.z_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.F_?this.J_(t):this.onNext(t))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return q(Cu,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(q(Cu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Au extends Nu{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(s=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:z(39313,{state:s}),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(G(void 0===e||"string"==typeof e,58123),jn.fromBase64String(e||"")):(G(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),jn.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?H.UNKNOWN:ki(t.code);return new W(e,t.message||"")}(a);n=new zi(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ao(t,s.document.name),i=no(s.document.updateTime),o=s.document.createTime?no(s.document.createTime):Ot.min(),a=new Rs({mapValue:{fields:s.document.fields}}),c=Os.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Bi(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ao(t,s.document),i=s.readTime?no(s.readTime):Ot.min(),o=Os.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Bi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ao(t,s.document),i=s.removedTargetIds||[];n=new Bi([],i,r,null)}else{if(!("filter"in e))return z(11601,{Vt:e});{e.filter;const t=e.filter;t.targetId;const{count:s=0,unchangedNames:r}=t,i=new Ci(s,r),o=t.targetId;n=new ji(o,i)}}var s;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ot.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ot.min():e.readTime?no(e.readTime):Ot.min()}(t);return this.listener.H_(e,n)}Z_(t){const e={};e.database=ho(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;if(n=ur(s)?{documents:yo(t,s)}:{query:wo(t,s).ft},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=to(t,e.resumeToken);const s=Xi(t,e.expectedCount);null!==s&&(n.expectedCount=s)}else if(e.snapshotVersion.compareTo(Ot.min())>0){n.readTime=Zi(t,e.snapshotVersion.toTimestamp());const s=Xi(t,e.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.q_(e)}X_(t){const e={};e.database=ho(this.serializer),e.removeTarget=t,this.q_(e)}}class Du extends Nu{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return G(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,G(!t.writeResults||0===t.writeResults.length,55816),this.listener.ta()}onNext(t){G(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=function(t,e){return t&&t.length>0?(G(void 0!==e,14353),t.map(t=>function(t,e){let n=t.updateTime?no(t.updateTime):no(e);return n.isEqual(Ot.min())&&(n=no(e)),new ai(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=no(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=ho(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>go(this.serializer,t))};this.q_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{}class Ru extends ku{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Wo(t,ro(e,n),s,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new W(H.UNKNOWN,t.toString())})}jo(t,e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.jo(t,ro(e,n),s,i,o,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new W(H.UNKNOWN,t.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Mu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(U(e),this.aa=!1):q("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="RemoteStore";class Vu{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo(t=>{n.enqueueAndForget(async()=>{Ku(this)&&(q(Ou,"Restarting streams for network reachability change."),await async function(t){const e=Q(t);e.Ia.add(4),await Fu(e),e.Va.set("Unknown"),e.Ia.delete(4),await Pu(e)}(this))})}),this.Va=new Mu(n,s)}}async function Pu(t){if(Ku(t))for(const e of t.Ra)await e(!0)}async function Fu(t){for(const e of t.Ra)await e(!1)}function Lu(t,e){const n=Q(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),zu(n)?ju(n):uh(n).O_()&&Uu(n,e))}function qu(t,e){const n=Q(t),s=uh(n);n.Ea.delete(e),s.O_()&&Bu(n,e),0===n.Ea.size&&(s.O_()?s.L_():Ku(n)&&n.Va.set("Unknown"))}function Uu(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ot.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}uh(t).Z_(e)}function Bu(t,e){t.da.$e(e),uh(t).X_(e)}function ju(t){t.da=new Gi({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),uh(t).start(),t.Va.ua()}function zu(t){return Ku(t)&&!uh(t).x_()&&t.Ea.size>0}function Ku(t){return 0===Q(t).Ia.size}function Gu(t){t.da=void 0}async function $u(t){t.Va.set("Online")}async function Qu(t){t.Ea.forEach((e,n)=>{Uu(t,e)})}async function Hu(t,e){Gu(t),zu(t)?(t.Va.ha(e),ju(t)):t.Va.set("Unknown")}async function Wu(t,e,n){if(t.Va.set("Online"),e instanceof zi&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Ea.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Ea.delete(s),t.da.removeTarget(s))}(t,e)}catch(n){q(Ou,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ju(t,n)}else if(e instanceof Bi?t.da.Xe(e):e instanceof ji?t.da.st(e):t.da.tt(e),!n.isEqual(Ot.min()))try{const e=await Bc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.da.Tt(e);return n.targetChanges.forEach((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.Ea.get(s);r&&t.Ea.set(s,r.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const s=t.Ea.get(e);if(!s)return;t.Ea.set(e,s.withResumeToken(jn.EMPTY_BYTE_STRING,s.snapshotVersion)),Bu(t,e);const r=new ko(s.target,e,n,s.sequenceNumber);Uu(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){q(Ou,"Failed to raise snapshot:",e),await Ju(t,e)}}async function Ju(t,e,n){if(!se(e))throw e;t.Ia.add(1),await Fu(t),t.Va.set("Offline"),n||(n=()=>Bc(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(Ou,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Pu(t)})}function Yu(t,e){return e().catch(n=>Ju(t,n,e))}async function Xu(t){const e=Q(t),n=hh(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:de;for(;Zu(e);)try{const t=await zc(e.localStore,s);if(null===t){0===e.Ta.length&&n.L_();break}s=t.batchId,th(e,t)}catch(t){await Ju(e,t)}eh(e)&&nh(e)}function Zu(t){return Ku(t)&&t.Ta.length<10}function th(t,e){t.Ta.push(e);const n=hh(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function eh(t){return Ku(t)&&!hh(t).x_()&&t.Ta.length>0}function nh(t){hh(t).start()}async function sh(t){hh(t).ra()}async function rh(t){const e=hh(t);for(const n of t.Ta)e.ea(n.mutations)}async function ih(t,e,n){const s=t.Ta.shift(),r=Ei.from(s,e,n);await Yu(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Xu(t)}async function oh(t,e){e&&hh(t).Y_&&await async function(t,e){if(Di(n=e.code)&&n!==H.ABORTED){const n=t.Ta.shift();hh(t).B_(),await Yu(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Xu(t)}var n}(t,e),eh(t)&&nh(t)}async function ah(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),q(Ou,"RemoteStore received new credentials");const s=Ku(n);n.Ia.add(3),await Fu(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Pu(n)}async function ch(t,e){const n=Q(t);e?(n.Ia.delete(2),await Pu(n)):e||(n.Ia.add(2),await Fu(n),n.Va.set("Unknown"))}function uh(t){return t.ma||(t.ma=function(t,e,n){const s=Q(t);return s.sa(),new Au(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Zo:$u.bind(null,t),Yo:Qu.bind(null,t),t_:Hu.bind(null,t),H_:Wu.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),zu(t)?ju(t):t.Va.set("Unknown")):(await t.ma.stop(),Gu(t))})),t.ma}function hh(t){return t.fa||(t.fa=function(t,e,n){const s=Q(t);return s.sa(),new Du(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:sh.bind(null,t),t_:oh.bind(null,t),ta:rh.bind(null,t),na:ih.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Xu(t)):(await t.fa.stop(),t.Ta.length>0&&(q(Ou,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class lh{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new J,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new lh(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new W(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dh(t,e){if(U("AsyncQueue",`${e}: ${t}`),se(t))return new W(H.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{static emptySet(t){return new fh(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||bt.comparator(e.key,n.key):(t,e)=>bt.comparator(t.key,e.key),this.keyedMap=Vr(),this.sortedSet=new Mn(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new fh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.ga=new Mn(bt.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?0!==t.type&&3===n.type?this.ga=this.ga.insert(e,t):3===t.type&&1!==n.type?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.ga=this.ga.remove(e):1===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):z(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class gh{constructor(t,e,n,s,r,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new gh(t,e,fh.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Er(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class yh{constructor(){this.queries=wh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=Q(t),s=n.queries;n.queries=wh(),s.forEach((t,n)=>{for(const t of n.Sa)t.onError(e)})}(this,new W(H.ABORTED,"Firestore shutting down"))}}function wh(){return new kr(t=>Sr(t),Er)}async function vh(t,e){const n=Q(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new ph,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(t){const n=dh(t,`Initialization of query '${xr(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&_h(n)}async function bh(t,e){const n=Q(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const t=i.Sa.indexOf(e);t>=0&&(i.Sa.splice(t,1),0===i.Sa.length?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function Ih(t,e){const n=Q(t);let s=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.Sa)e.Fa(t)&&(s=!0);r.wa=t}}s&&_h(n)}function Th(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const t of r.Sa)t.onError(n);s.queries.delete(e)}function _h(t){t.Ca.forEach(t=>{t.next()})}var Eh,Sh;(Sh=Eh||(Eh={})).Ma="default",Sh.Cache="cache";class xh{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new gh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==e;return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ka(t){t=gh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Eh.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e){this.Ka=t,this.byteLength=e}Ua(){return"metadata"in this.Ka}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t){this.serializer=t}qs(t){return ao(this.serializer,t)}Ks(t){return t.metadata.exists?mo(this.serializer,t.document,!1):Os.newNoDocument(this.qs(t.metadata.name),this.Us(t.metadata.readTime))}Us(t){return no(t)}}class Ah{constructor(t,e){this.$a=t,this.serializer=e,this.Wa=[],this.Qa=[],this.collectionGroups=new Set,this.progress=Dh(t)}get queries(){return this.Wa}get documents(){return this.Qa}Ga(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.Ka.namedQuery)this.Wa.push(t.Ka.namedQuery);else if(t.Ka.documentMetadata){this.Qa.push({metadata:t.Ka.documentMetadata}),t.Ka.documentMetadata.exists||++e;const n=yt.fromString(t.Ka.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.Ka.document&&(this.Qa[this.Qa.length-1].document=t.Ka.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,{...this.progress}):null}za(t){const e=new Map,n=new Nh(this.serializer);for(const s of t)if(s.metadata.queries){const t=n.qs(s.metadata.name);for(const n of s.metadata.queries){const s=(e.get(n)||jr()).add(t);e.set(n,s)}}return e}async ja(t){const e=await async function(t,e,n,s){const r=Q(t);let i=jr(),o=Mr();for(const t of n){const n=e.qs(t.metadata.name);t.document&&(i=i.add(n));const s=e.Ks(t);s.setReadTime(e.Us(t.metadata.readTime)),o=o.insert(n,s)}const a=r.xs.newChangeBuffer({trackRemovals:!0}),c=await Kc(r,(u=s,vr(gr(yt.fromString(`__bundle__/docs/${u}`)))));var u;return r.persistence.runTransaction("Apply bundle documents","readwrite",t=>jc(t,a,o).next(e=>(a.apply(t),e)).next(e=>r.li.removeMatchingKeysForTargetId(t,c.targetId).next(()=>r.li.addMatchingKeys(t,i,c.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(t,e.Bs,e.Ls)).next(()=>e.Bs)))}(t,new Nh(this.serializer),this.Qa,this.$a.id),n=this.za(this.documents);for(const e of this.Wa)await Jc(t,e,n.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:e}}}function Dh(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t){this.key=t}}class Rh{constructor(t){this.key=t}}class Mh{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=jr(),this.mutatedKeys=jr(),this.eu=Ar(t),this.tu=new fh(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new mh,s=e?e.tu:this.tu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((t,e)=>{const u=s.get(t),h=Cr(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.su(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.eu(h,a)>0||c&&this.eu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{tu:i,iu:n,bs:o,mutatedKeys:r}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const r=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const i=t.iu.ya();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Vt:t})}};return n(t)-n(e)}(t.type,e.type)||this.eu(t.doc,e.doc)),this.ou(n),s=s??!1;const o=e&&!s?this._u():[],a=0===this.Ya.size&&this.current&&!s?1:0,c=a!==this.Xa;return this.Xa=a,0!==i.length||c?{snapshot:new gh(this.query,t.tu,r,i,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tu:this.tu,iu:new mh,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=jr(),this.tu.forEach(t=>{this.uu(t.key)&&(this.Ya=this.Ya.add(t.key))});const e=[];return t.forEach(t=>{this.Ya.has(t)||e.push(new Rh(t))}),this.Ya.forEach(n=>{t.has(n)||e.push(new kh(n))}),e}cu(t){this.Za=t.ks,this.Ya=jr();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return gh.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const Oh="SyncEngine";class Vh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ph{constructor(t){this.key=t,this.hu=!1}}class Fh{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.Pu={},this.Tu=new kr(t=>Sr(t),Er),this.Eu=new Map,this.Iu=new Set,this.Ru=new Mn(bt.comparator),this.Au=new Map,this.Vu=new fc,this.du={},this.mu=new Map,this.fu=qa.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function Lh(t,e,n=!0){const s=fl(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Uh(s,e,n,!0),r}async function qh(t,e){const n=fl(t);await Uh(n,e,!0,!1)}async function Uh(t,e,n,s){const r=await Kc(t.localStore,vr(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await Bh(t,e,i,"current"===o,r.resumeToken)),t.isPrimaryClient&&n&&Lu(t.remoteStore,r),a}async function Bh(t,e,n,s,r){t.pu=(e,n,s)=>async function(t,e,n,s){let r=e.view.ru(n);r.bs&&(r=await $c(t.localStore,e.query,!1).then(({documents:t})=>e.view.ru(t,r)));const i=s&&s.targetChanges.get(e.targetId),o=s&&null!=s.targetMismatches.get(e.targetId),a=e.view.applyChanges(r,t.isPrimaryClient,i,o);return Zh(t,e.targetId,a.au),a.snapshot}(t,e,n,s);const i=await $c(t.localStore,e,!0),o=new Mh(e,i.ks),a=o.ru(i.documents),c=Ui.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),u=o.applyChanges(a,t.isPrimaryClient,c);Zh(t,n,u.au);const h=new Vh(e,n,o);return t.Tu.set(e,h),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function jh(t,e,n){const s=Q(t),r=s.Tu.get(e),i=s.Eu.get(r.targetId);if(i.length>1)return s.Eu.set(r.targetId,i.filter(t=>!Er(t,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Gc(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&qu(s.remoteStore,r.targetId),Yh(s,r.targetId)}).catch(Wt)):(Yh(s,r.targetId),await Gc(s.localStore,r.targetId,!0))}async function zh(t,e){const n=Q(t),s=n.Tu.get(e),r=n.Eu.get(s.targetId);n.isPrimaryClient&&1===r.length&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),qu(n.remoteStore,s.targetId))}async function Kh(t,e){const n=Q(t);try{const t=await function(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.xs.newChangeBuffer({trackRemovals:!0});r=n.vs;const o=[];e.targetChanges.forEach((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.li.removeMatchingKeys(t,i.removedDocuments,a).next(()=>n.li.addMatchingKeys(t,i.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);var h,l,d;null!==e.targetMismatches.get(a)?u=u.withResumeToken(jn.EMPTY_BYTE_STRING,Ot.min()).withLastLimboFreeSnapshotVersion(Ot.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),l=u,d=i,(0===(h=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.li.updateTargetData(t,u))});let a=Mr(),c=jr();if(e.documentUpdates.forEach(s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))}),o.push(jc(t,i,e.documentUpdates).next(t=>{a=t.Bs,c=t.Ls})),!s.isEqual(Ot.min())){const e=n.li.getLastRemoteSnapshotVersion(t).next(e=>n.li.setTargetsMetadata(t,t.currentSequenceNumber,s));o.push(e)}return Jt.waitFor(o).next(()=>i.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.vs=r,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const s=n.Au.get(e);s&&(G(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?s.hu=!0:t.modifiedDocuments.size>0?G(s.hu,14607):t.removedDocuments.size>0&&(G(s.hu,42227),s.hu=!1))}),await nl(n,t,e)}catch(t){await Wt(t)}}function Gh(t,e,n){const s=Q(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Tu.forEach((n,s)=>{const r=s.view.va(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=Q(t);n.onlineState=e;let s=!1;n.queries.forEach((t,n)=>{for(const t of n.Sa)t.va(e)&&(s=!0)}),s&&_h(n)}(s.eventManager,e),t.length&&s.Pu.H_(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function $h(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let t=new Mn(bt.comparator);t=t.insert(i,Os.newNoDocument(i,Ot.min()));const n=jr().add(i),r=new qi(Ot.min(),new Map,new Mn(ct),t,n);await Kh(s,r),s.Ru=s.Ru.remove(i),s.Au.delete(e),el(s)}else await Gc(s.localStore,e,!1).then(()=>Yh(s,e,n)).catch(Wt)}async function Qh(t,e){const n=Q(t),s=e.batch.batchId;try{const t=await function(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const s=e.batch.keys(),r=n.xs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=Jt.resolve();return i.forEach(t=>{o=o.next(()=>s.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);G(null!==i,48541),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,r))}(n,t,e,r).next(()=>r.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=jr();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,s))})}(n.localStore,e);Jh(n,s,null),Wh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await nl(n,t)}catch(t){await Wt(t)}}async function Hh(t,e,n){const s=Q(t);try{const t=await function(t,e){const n=Q(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(G(null!==e,37113),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s)).next(()=>n.localDocuments.getDocuments(t,s))})}(s.localStore,e);Jh(s,e,n),Wh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await nl(s,t)}catch(t){await Wt(t)}}function Wh(t,e){(t.mu.get(e)||[]).forEach(t=>{t.resolve()}),t.mu.delete(e)}function Jh(t,e,n){const s=Q(t);let r=s.du[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function Yh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Eu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(e=>{t.Vu.containsKey(e)||Xh(t,e)})}function Xh(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);null!==n&&(qu(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),el(t))}function Zh(t,e,n){for(const s of n)s instanceof kh?(t.Vu.addReference(s.key,e),tl(t,s)):s instanceof Rh?(q(Oh,"Document no longer in limbo: "+s.key),t.Vu.removeReference(s.key,e),t.Vu.containsKey(s.key)||Xh(t,s.key)):z(19791,{wu:s})}function tl(t,e){const n=e.key,s=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(s)||(q(Oh,"New document in limbo: "+n),t.Iu.add(s),el(t))}function el(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new bt(yt.fromString(e)),s=t.fu.next();t.Au.set(s,new Ph(n)),t.Ru=t.Ru.insert(n,s),Lu(t.remoteStore,new ko(vr(gr(n.path)),s,"TargetPurposeLimboResolution",le.ce))}}async function nl(t,e,n){const s=Q(t),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach((t,a)=>{o.push(s.pu(a,e,n).then(t=>{if((t||n)&&s.isPrimaryClient){const e=t?!t.fromCache:n?.targetChanges.get(a.targetId)?.current;s.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){r.push(t);const e=Oc.Is(a.targetId,t);i.push(e)}}))}),await Promise.all(o),s.Pu.H_(r),await async function(t,e){const n=Q(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Jt.forEach(e,e=>Jt.forEach(e.Ts,s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s)).next(()=>Jt.forEach(e.Es,s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))}catch(t){if(!se(t))throw t;q(Fc,"Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.vs.get(e),s=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(s);n.vs=n.vs.insert(e,r)}}}(s.localStore,i))}async function sl(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){q(Oh,"User change. New user:",e.toKey());const t=await Uc(n.localStore,e);n.currentUser=e,r="'waitForPendingWrites' promise is rejected due to a user change.",(s=n).mu.forEach(t=>{t.forEach(t=>{t.reject(new W(H.CANCELLED,r))})}),s.mu.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await nl(n,t.Ns)}var s,r}function rl(t,e){const n=Q(t),s=n.Au.get(e);if(s&&s.hu)return jr().add(s.key);{let t=jr();const s=n.Eu.get(e);if(!s)return t;for(const e of s){const s=n.Tu.get(e);t=t.unionWith(s.view.nu)}return t}}async function il(t,e){const n=Q(t),s=await $c(n.localStore,e.query,!0),r=e.view.cu(s);return n.isPrimaryClient&&Zh(n,e.targetId,r.au),r}async function ol(t,e){const n=Q(t);return Hc(n.localStore,e).then(t=>nl(n,t))}async function al(t,e,n,s){const r=Q(t),i=await function(t,e){const n=Q(t),s=Q(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>s.Xn(t,e).next(e=>e?n.localDocuments.getDocuments(t,e):Jt.resolve(null)))}(r.localStore,e);var o,a;null!==i?("pending"===n?await Xu(r.remoteStore):"acknowledged"===n||"rejected"===n?(Jh(r,e,s||null),Wh(r,e),o=r.localStore,a=e,Q(Q(o).mutationQueue).nr(a)):z(6720,"Unknown batchState",{Su:n}),await nl(r,i)):q(Oh,"Cannot apply mutation batch with id: "+e)}async function cl(t,e,n){const s=Q(t),r=[],i=[];for(const t of e){let e;const n=s.Eu.get(t);if(n&&0!==n.length){e=await Kc(s.localStore,vr(n[0]));for(const t of n){const e=s.Tu.get(t),n=await il(s,e);n.snapshot&&i.push(n.snapshot)}}else{const n=await Qc(s.localStore,t);e=await Kc(s.localStore,n),await Bh(s,ul(n),t,!1,e.resumeToken)}r.push(e)}return s.Pu.H_(i),r}function ul(t){return mr(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function hl(t){return e=Q(t).localStore,Q(Q(e).persistence).hs();var e}async function ll(t,e,n,s){const r=Q(t);if(r.gu)return void q(Oh,"Ignoring unexpected query state notification.");const i=r.Eu.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const t=await Hc(r.localStore,Nr(i[0])),s=qi.createSynthesizedRemoteEventForCurrentChange(e,"current"===n,jn.EMPTY_BYTE_STRING);await nl(r,t,s);break}case"rejected":await Gc(r.localStore,e,!0),Yh(r,e,s);break;default:z(64155,n)}}async function dl(t,e,n){const s=fl(t);if(s.gu){for(const t of e){if(s.Eu.has(t)&&s.sharedClientState.isActiveQueryTarget(t)){q(Oh,"Adding an already active target "+t);continue}const e=await Qc(s.localStore,t),n=await Kc(s.localStore,e);await Bh(s,ul(e),n.targetId,!1,n.resumeToken),Lu(s.remoteStore,n)}for(const t of n)s.Eu.has(t)&&await Gc(s.localStore,t,!1).then(()=>{qu(s.remoteStore,t),Yh(s,t)}).catch(Wt)}}function fl(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$h.bind(null,e),e.Pu.H_=Ih.bind(null,e.eventManager),e.Pu.yu=Th.bind(null,e.eventManager),e}function ml(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hh.bind(null,e),e}class gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Su(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return qc(this.persistence,new Pc,t.initialUser,this.serializer)}Cu(t){return new vc(Ic.Vi,this.serializer)}Du(t){return new hu}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gl.provider={build:()=>new gl};class pl extends gl{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){G(this.persistence.referenceDelegate instanceof Tc,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ha(n,t.asyncQueue,e)}Cu(t){const e=void 0!==this.cacheSizeBytes?ka.withCacheSize(this.cacheSizeBytes):ka.DEFAULT;return new vc(t=>Tc.Vi(t,e),this.serializer)}}class yl extends gl{constructor(t,e,n){super(),this.xu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.xu.initialize(this,t),await ml(this.xu.syncEngine),await Xu(this.xu.remoteStore),await this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(t){return qc(this.persistence,new Pc,t.initialUser,this.serializer)}Fu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Ha(n,t.asyncQueue,e)}Mu(t,e){const n=new he(e,this.persistence);return new ue(t.asyncQueue,n)}Cu(t){const e=Mc(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ka.withCacheSize(this.cacheSizeBytes):ka.DEFAULT;return new Dc(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,_u(),Eu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(t){return new hu}}class wl extends yl{constructor(t,e){super(t,e,!1),this.xu=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.xu.syncEngine;this.sharedClientState instanceof uu&&(this.sharedClientState.syncEngine={bo:al.bind(null,e),Do:ll.bind(null,e),Co:dl.bind(null,e),hs:hl.bind(null,e),So:ol.bind(null,e)},await this.sharedClientState.start()),await this.persistence.zi(async t=>{await async function(t,e){const n=Q(t);if(fl(n),ml(n),!0===e&&!0!==n.gu){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await cl(n,t.toArray());n.gu=!0,await ch(n.remoteStore,!0);for(const t of e)Lu(n.remoteStore,t)}else if(!1===e&&!1!==n.gu){const t=[];let e=Promise.resolve();n.Eu.forEach((s,r)=>{n.sharedClientState.isLocalQueryTarget(r)?t.push(r):e=e.then(()=>(Yh(n,r),Gc(n.localStore,r,!0))),qu(n.remoteStore,r)}),await e,await cl(n,t),function(t){const e=Q(t);e.Au.forEach((t,n)=>{qu(e.remoteStore,n)}),e.Vu.zr(),e.Au=new Map,e.Ru=new Mn(bt.comparator)}(n),n.gu=!1,await ch(n.remoteStore,!1)}}(this.xu.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start():t||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(t&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():t||this.indexBackfillerScheduler.stop())})}Du(t){const e=_u();if(!uu.v(e))throw new W(H.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Mc(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new uu(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class vl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Gh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=sl.bind(null,this.syncEngine),await ch(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yh}createDatastore(t){const e=Su(t.databaseInfo.databaseId),n=function(t){return new Tu(t)}(t.databaseInfo);return function(t,e,n,s){return new Ru(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>Gh(this.syncEngine,t,0),i=fu.v()?new fu:new lu,new Vu(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Fh(t,e,n,s,r,i);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(t){const e=Q(t);q(Ou,"RemoteStore shutting down."),e.Ia.add(5),await Fu(e),e.Aa.shutdown(),e.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}function bl(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const s={value:t.slice(n,n+e),done:!1};return n+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vl.provider={build:()=>new vl};class Il{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):U("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,e){this.Bu=t,this.serializer=e,this.metadata=new J,this.buffer=new Uint8Array,this.Lu=new TextDecoder("utf-8"),this.ku().then(t=>{t&&t.Ua()?this.metadata.resolve(t.Ka.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(t?.Ka)}`))},t=>this.metadata.reject(t))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const t=await this.qu();if(null===t)return null;const e=this.Lu.decode(t),n=Number(e);isNaN(n)&&this.Ku(`length string (${e}) is not valid number`);const s=await this.Uu(n);return new Ch(JSON.parse(s),t.length+n)}$u(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async qu(){for(;this.$u()<0&&!await this.Wu(););if(0===this.buffer.length)return null;const t=this.$u();t<0&&this.Ku("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Uu(t){for(;this.buffer.length<t;)await this.Wu()&&this.Ku("Reached the end of bundle when more is expected.");const e=this.Lu.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Ku(t){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${t}`)}async Wu(){const t=await this.Bu.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e){this.bundleData=t,this.serializer=e,this.cursor=0,this.elements=[];let n=this.bu();if(!n||!n.Ua())throw new Error(`The first element of the bundle is not a metadata object, it is\n         ${JSON.stringify(n?.Ka)}`);this.metadata=n;do{n=this.bu(),null!==n&&this.elements.push(n)}while(null!==n)}getMetadata(){return this.metadata}Qu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const t=this.qu(),e=this.Uu(t);return new Ch(JSON.parse(e),t)}Uu(t){if(this.cursor+t>this.bundleData.length)throw new W(H.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=t)}qu(){const t=this.cursor;let e=this.cursor;for(;e<this.bundleData.length;){if("{"===this.bundleData[e]){if(e===t)throw new Error("First character is a bracket and not a number");return this.cursor=e,Number(this.bundleData.slice(t,e))}e++}throw new Error("Reached the end of bundle when more is expected.")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new W(H.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(t,e){const n=Q(t),s={documents:e.map(t=>oo(n.serializer,t))},r=await n.jo("BatchGetDocuments",n.serializer.databaseId,yt.emptyPath(),s,e.length),i=new Map;r.forEach(t=>{const e=function(t,e){return"found"in e?function(t,e){G(!!e.found,43571),e.found.name,e.found.updateTime;const n=ao(t,e.found.name),s=no(e.found.updateTime),r=e.found.createTime?no(e.found.createTime):Ot.min(),i=new Rs({mapValue:{fields:e.found.fields}});return Os.newFoundDocument(n,s,r,i)}(t,e):"missing"in e?function(t,e){G(!!e.missing,3894),G(!!e.readTime,22933);const n=ao(t,e.missing),s=no(e.readTime);return Os.newNoDocument(n,s)}(t,e):z(7234,{result:e})}(n.serializer,t);i.set(e.key.toString(),e)});const o=[];return e.forEach(t=>{const e=i.get(t.toString());G(!!e,55234,{key:t}),o.push(e)}),o}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastTransactionError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ii(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=bt.fromPath(e);this.mutations.push(new Ti(n,this.precondition(n)))}),await async function(t,e){const n=Q(t),s={writes:e.map(t=>go(n.serializer,t))};await n.Wo("Commit",n.serializer.databaseId,yt.emptyPath(),s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw z(50498,{Gu:t.constructor.name});e=Ot.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new W(H.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(Ot.min())?ci.exists(!1):ci.updateTime(e):ci.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(Ot.min()))throw new W(H.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ci.updateTime(e)}return ci.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e,n,s,r){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=r,this.zu=n.maxAttempts,this.M_=new xu(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const t=new El(this.datastore),e=this.Hu(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.Zu(t)}))}).catch(t=>{this.Zu(t)})})}Hu(t){try{const e=this.updateFunction(t);return!fe(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Zu(t){this.zu>0&&this.Xu(t)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(t)}Xu(t){if("FirebaseError"===t?.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||"already-exists"===e||!Di(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="FirestoreClient";class Cl{constructor(t,e,n,s,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=s,this.user=O.UNAUTHENTICATED,this.clientId=at.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,async t=>{q(xl,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(q(xl,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new J;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=dh(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Nl(t,e){t.asyncQueue.verifyOperationInProgress(),q(xl,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async t=>{s.isEqual(t)||(await Uc(e.localStore,t),s=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Al(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Dl(t);q(xl,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>ah(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>ah(e.remoteStore,n)),t._onlineComponents=e}async function Dl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(xl,"Using user provided OfflineComponentProvider");try{await Nl(t,t._uninitializedComponentsProvider._offline)}catch(n){const s=n;if(!("FirebaseError"===(e=s).name?e.code===H.FAILED_PRECONDITION||e.code===H.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code))throw s;B("Error using user provided cache. Falling back to memory cache: "+s),await Nl(t,new gl)}}else q(xl,"Using default OfflineComponentProvider"),await Nl(t,new pl(void 0));var e;return t._offlineComponents}async function kl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(xl,"Using user provided OnlineComponentProvider"),await Al(t,t._uninitializedComponentsProvider._online)):(q(xl,"Using default OnlineComponentProvider"),await Al(t,new vl))),t._onlineComponents}function Rl(t){return Dl(t).then(t=>t.persistence)}function Ml(t){return Dl(t).then(t=>t.localStore)}function Ol(t){return kl(t).then(t=>t.remoteStore)}function Vl(t){return kl(t).then(t=>t.syncEngine)}function Pl(t){return kl(t).then(t=>t.datastore)}async function Fl(t){const e=await kl(t),n=e.eventManager;return n.onListen=Lh.bind(null,e.syncEngine),n.onUnlisten=jh.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qh.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zh.bind(null,e.syncEngine),n}function Ll(t,e,n={}){const s=new J;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,s,r){const i=new Il({next:a=>{i.Nu(),e.enqueueAndForget(()=>bh(t,o));const c=a.docs.has(n);!c&&a.fromCache?r.reject(new W(H.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&s&&"server"===s.source?r.reject(new W(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(a)},error:t=>r.reject(t)}),o=new xh(gr(n.path),i,{includeMetadataChanges:!0,qa:!0});return vh(t,o)}(await Fl(t),t.asyncQueue,e,n,s)),s.promise}function ql(t,e,n={}){const s=new J;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,s,r){const i=new Il({next:n=>{i.Nu(),e.enqueueAndForget(()=>bh(t,o)),n.fromCache&&"server"===s.source?r.reject(new W(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new xh(n,i,{includeMetadataChanges:!0,qa:!0});return vh(t,o)}(await Fl(t),t.asyncQueue,e,n,s)),s.promise}function Ul(t,e){const n=new J;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){const s=ml(t);try{const t=await function(t,e){const n=Q(t),s=Mt.now(),r=e.reduce((t,e)=>t.add(e.key),jr());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=Mr(),c=jr();return n.xs.getEntries(t,r).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(r=>{i=r;const o=[];for(const t of e){const e=mi(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new yi(t.key,e,Ms(e.value.mapValue),ci.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)}).next(e=>{o=e;const s=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)})}).then(()=>({batchId:o.batchId,changes:Pr(i)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.du[t.currentUser.toKey()];s||(s=new Mn(ct)),s=s.insert(e,n),t.du[t.currentUser.toKey()]=s}(s,t.batchId,n),await nl(s,t.changes),await Xu(s.remoteStore)}catch(t){const e=dh(t,"Failed to persist write");n.reject(e)}}(await Vl(t),e,n)),n.promise}function Bl(t,e,n,s){const r=function(t,e){let n;return n="string"==typeof t?Mi().encode(t):t,s=function(t,e){if(t instanceof Uint8Array)return bl(t,e);if(t instanceof ArrayBuffer)return bl(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),new Tl(s,e);var s}(n,Su(e));t.asyncQueue.enqueueAndForget(async()=>{!function(t,e,n){const s=Q(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=Q(t),s=no(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Pi.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(s)>=0)}(t.localStore,r))return await e.close(),n._completeWith({taskState:"Success",documentsLoaded:(s=r).totalDocuments,bytesLoaded:s.totalBytes,totalDocuments:s.totalDocuments,totalBytes:s.totalBytes}),Promise.resolve(new Set);n._updateProgress(Dh(r));const i=new Ah(r,e.serializer);let o=await e.bu();for(;o;){const t=await i.Ga(o);t&&n._updateProgress(t),o=await e.bu()}const a=await i.ja(t.localStore);return await nl(t,a.Ha,void 0),await function(t,e){const n=Q(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Pi.saveBundleMetadata(t,e))}(t.localStore,r),n._completeWith(a.progress),Promise.resolve(a.Ja)}catch(s){return B(Oh,`Loading bundle failed with ${s}`),n._failWith(s),Promise.resolve(new Set)}var s})(s,e,n).then(t=>{s.sharedClientState.notifyBundleLoaded(t)})}(await Vl(t),r,s)})}function jl(t,e){return new _l(t,e)}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Kl=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gl="firestore.googleapis.com",$l=!0;class Ql{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new W(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gl,this.ssl=$l}else this.host=t.host,this.ssl=t.ssl??$l;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=Da;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<Ga)throw new W(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Tt("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zl(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new W(H.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new W(H.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new W(H.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class Hl{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ql({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new W(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ql(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new X;switch(t.type){case"firstParty":return new nt(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new W(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Kl.get(t);e&&(q("ComponentProvider","Removing Datastore"),Kl.delete(t),e.terminate())}(this),Promise.resolve()}}function Wl(t,e,n,s={}){t=Ct(t,Hl);const c=r(e),u=t._getSettings(),h={...u,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;c&&i(`https://${l}`),u.host!==Gl&&u.host!==l&&B("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d={...u,host:l,ssl:c,emulatorOptions:s};if(!o(d,h)&&(t._setSettings(d),s.mockUserToken)){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=O.MOCK_USER;else{e=a(s.mockUserToken,t._app?.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new W(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new O(r)}t._authCredentials=new Z(new Y(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Jl(this.firestore,t,this._query)}}class Yl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Yl(this.firestore,t,this._key)}toJSON(){return{type:Yl._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(Dt(e,Yl._jsonSchema))return new Yl(t,n||null,new bt(yt.fromString(e.referencePath)))}}Yl._jsonSchemaVersion="firestore/documentReference/1.0",Yl._jsonSchema={type:At("string",Yl._jsonSchemaVersion),referencePath:At("string")};class Xl extends Jl{constructor(t,e,n){super(t,e,gr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Yl(this.firestore,null,new bt(t))}withConverter(t){return new Xl(this.firestore,t,this._path)}}function Zl(e,n,...s){if(e=t(e),It("collection","path",n),e instanceof Hl){const t=yt.fromString(n,...s);return Et(t),new Xl(e,null,t)}{if(!(e instanceof Yl||e instanceof Xl))throw new W(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const t=e._path.child(yt.fromString(n,...s));return Et(t),new Xl(e.firestore,null,t)}}function td(t,e){if(t=Ct(t,Hl),It("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new W(H.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Jl(t,null,(n=e,new fr(yt.emptyPath(),n)));var n}function ed(e,n,...s){if(e=t(e),1===arguments.length&&(n=at.newId()),It("doc","path",n),e instanceof Hl){const t=yt.fromString(n,...s);return _t(t),new Yl(e,null,new bt(t))}{if(!(e instanceof Yl||e instanceof Xl))throw new W(H.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const t=e._path.child(yt.fromString(n,...s));return _t(t),new Yl(e.firestore,e instanceof Xl?e.converter:null,new bt(t))}}function nd(e,n){return e=t(e),n=t(n),(e instanceof Yl||e instanceof Xl)&&(n instanceof Yl||n instanceof Xl)&&e.firestore===n.firestore&&e.path===n.path&&e.converter===n.converter}function sd(e,n){return e=t(e),n=t(n),e instanceof Jl&&n instanceof Jl&&e.firestore===n.firestore&&Er(e._query,n._query)&&e.converter===n.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const rd="AsyncQueue";class id{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xu(this,"async_queue_retry"),this._c=()=>{const t=Eu();t&&q(rd,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=Eu();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Eu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new J;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!se(t))throw t;q(rd,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(t=>{throw this.nc=t,this.rc=!1,U("INTERNAL UNHANDLED ERROR: ",od(t)),t}).then(t=>(this.rc=!1,t))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=lh.createAndSchedule(this,t,e,n,t=>this.hc(t));return this.tc.push(s),s}uc(){this.nc&&z(47125,{Pc:od(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function od(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ad{constructor(){this._progressObserver={},this._taskCompletionResolver=new J,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=-1;class ud extends Hl{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new id,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new id(t),this._firestoreClient=void 0,await t}}}function hd(t,e,n){n||(n=es);const s=c(t,"firestore");if(s.isInitialized(n)){const t=s.getImmediate({identifier:n}),r=s.getOptions(n);if(o(r,e))return t;throw new W(H.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==e.cacheSizeBytes&&void 0!==e.localCache)throw new W(H.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==e.cacheSizeBytes&&-1!==e.cacheSizeBytes&&e.cacheSizeBytes<Ga)throw new W(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&r(e.host)&&i(e.host),s.initialize({options:e,instanceIdentifier:n})}function ld(t,e){const n="object"==typeof t?t:u(),s="string"==typeof t?t:e||es,r=c(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=h("firestore");t&&Wl(r,...t)}return r}function dd(t){if(t._terminated)throw new W(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fd(t),t._firestoreClient}function fd(t){const e=t._freezeSettings(),n=function(t,e,n,s,r){return new ts(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,zl(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,t._app?.options.apiKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Cl(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(t){const e=t?._online.build();return{_offline:t?._offline.build(e),_online:e}}(t._componentsProvider))}function md(t,e){B("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return pd(t,vl.provider,{build:t=>new yl(t,n.cacheSizeBytes,e?.forceOwnership)}),Promise.resolve()}async function gd(t){B("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();pd(t,vl.provider,{build:t=>new wl(t,e.cacheSizeBytes)})}function pd(t,e,n){if((t=Ct(t,ud))._firestoreClient||t._terminated)throw new W(H.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new W(H.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},fd(t)}function yd(t){if(t._initialized&&!t._terminated)throw new W(H.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new J;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Zt.v())return Promise.resolve();const e=t+Ac;await Zt.delete(e)}(Mc(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function wd(t){return function(t){const e=new J;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e){const n=Q(t);Ku(n.remoteStore)||q(Oh,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=Q(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.mutationQueue.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(t===de)return void e.resolve();const s=n.mu.get(t)||[];s.push(e),n.mu.set(t,s)}catch(t){const n=dh(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}(await Vl(t),e)),e.promise}(dd(t=Ct(t,ud)))}function vd(t){return function(t){return t.asyncQueue.enqueue(async()=>{const e=await Rl(t),n=await Ol(t);return e.setNetworkEnabled(!0),function(t){const e=Q(t);return e.Ia.delete(0),Pu(e)}(n)})}(dd(t=Ct(t,ud)))}function bd(t){return function(t){return t.asyncQueue.enqueue(async()=>{const e=await Rl(t),n=await Ol(t);return e.setNetworkEnabled(!1),async function(t){const e=Q(t);e.Ia.add(0),await Fu(e),e.Va.set("Offline")}(n)})}(dd(t=Ct(t,ud)))}function Id(t){return l(t.app,"firestore",t._databaseId.database),t._delete()}function Td(t,e){const n=dd(t=Ct(t,ud)),s=new ad;return Bl(n,t._databaseId,e,s),s}function _d(t,e){return function(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=Q(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Pi.getNamedQuery(t,e))}(await Ml(t),e))}(dd(t=Ct(t,ud)),e).then(e=>e?new Jl(t,null,e.query):null)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ed(jn.fromBase64String(t))}catch(t){throw new W(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ed(jn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ed._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Dt(t,Ed._jsonSchema))return Ed.fromBase64String(t.bytes)}}Ed._jsonSchemaVersion="firestore/bytes/1.0",Ed._jsonSchema={type:At("string",Ed._jsonSchemaVersion),bytes:At("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sd{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new W(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function xd(){return new Sd(gt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new W(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new W(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ct(this._lat,t._lat)||ct(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nd._jsonSchemaVersion}}static fromJSON(t){if(Dt(t,Nd._jsonSchema))return new Nd(t.latitude,t.longitude)}}Nd._jsonSchemaVersion="firestore/geoPoint/1.0",Nd._jsonSchema={type:At("string",Nd._jsonSchemaVersion),latitude:At("number"),longitude:At("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ad{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ad._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Dt(t,Ad._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new Ad(t.vectorValues);throw new W(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ad._jsonSchemaVersion="firestore/vectorValue/1.0",Ad._jsonSchema={type:At("string",Ad._jsonSchemaVersion),vectorValues:At("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dd=/^__.*__$/;class kd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new yi(t,this.data,this.fieldMask,e,this.fieldTransforms):new pi(t,this.data,e,this.fieldTransforms)}}class Rd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new yi(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Md(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{dataSource:t})}}class Od{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===r&&this.Ac(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Od({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){const e=this.path?.child(t),n=this.i({path:e,arrayElement:!1});return n.mc(t),n}fc(t){const e=this.path?.child(t),n=this.i({path:e,arrayElement:!1});return n.Ac(),n}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return tf(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(0===t.length)throw this.yc("Document fields must not be empty");if(Md(this.dataSource)&&Dd.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class Vd{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Su(t)}I(t,e,n,s=!1){return new Od({dataSource:t,methodName:e,targetDoc:n,path:vt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pd(t){const e=t._freezeSettings(),n=Su(t._databaseId);return new Vd(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fd(t,e,n,s,r,i={}){const o=t.I(i.merge||i.mergeFields?2:0,e,n,r);Jd("Data must be an object, but it was:",o,s);const a=Hd(s,o);let c,u;if(i.merge)c=new qn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=Yd(e,s,n);if(!o.contains(r))throw new W(H.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);ef(t,r)||t.push(r)}c=new qn(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new kd(new Rs(a),c,u)}class Ld extends Cd{_toFieldTransform(t){if(2!==t.dataSource)throw 1===t.dataSource?t.yc(`${this._methodName}() can only appear at the top level of your update data`):t.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ld}}function qd(t,e,n){return new Od({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ud extends Cd{_toFieldTransform(t){return new oi(t.path,new Xr)}isEqual(t){return t instanceof Ud}}class Bd extends Cd{constructor(t,e){super(t),this.Sc=e}_toFieldTransform(t){const e=qd(this,t,!0),n=this.Sc.map(t=>Qd(t,e)),s=new Zr(n);return new oi(t.path,s)}isEqual(t){return t instanceof Bd&&o(this.Sc,t.Sc)}}class jd extends Cd{constructor(t,e){super(t),this.Sc=e}_toFieldTransform(t){const e=qd(this,t,!0),n=this.Sc.map(t=>Qd(t,e)),s=new ei(n);return new oi(t.path,s)}isEqual(t){return t instanceof jd&&o(this.Sc,t.Sc)}}class zd extends Cd{constructor(t,e){super(t),this.bc=e}_toFieldTransform(t){const e=new si(t.serializer,Qr(t.serializer,this.bc));return new oi(t.path,e)}isEqual(t){return t instanceof zd&&this.bc===t.bc}}function Kd(e,n,s,r){const i=e.I(1,n,s);Jd("Data must be an object, but it was:",i,r);const o=[],a=Rs.empty();Dn(r,(e,r)=>{const c=Zd(n,e,s);r=t(r);const u=i.fc(c);if(r instanceof Ld)o.push(c);else{const t=Qd(r,u);null!=t&&(o.push(c),a.set(c,t))}});const c=new qn(o);return new Rd(a,c,i.fieldTransforms)}function Gd(e,n,s,r,i,o){const a=e.I(1,n,s),c=[Yd(n,r,s)],u=[i];if(o.length%2!=0)throw new W(H.INVALID_ARGUMENT,`Function ${n}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<o.length;t+=2)c.push(Yd(n,o[t])),u.push(o[t+1]);const h=[],l=Rs.empty();for(let e=c.length-1;e>=0;--e)if(!ef(h,c[e])){const n=c[e];let s=u[e];s=t(s);const r=a.fc(n);if(s instanceof Ld)h.push(n);else{const t=Qd(s,r);null!=t&&(h.push(n),l.set(n,t))}}const d=new qn(h);return new Rd(l,d,a.fieldTransforms)}function $d(t,e,n,s=!1){return Qd(n,t.I(s?4:3,e))}function Qd(e,n){if(Wd(e=t(e)))return Jd("Unsupported field value:",n,e),Hd(e,n);if(e instanceof Cd)return function(t,e){if(!Md(e.dataSource))throw e.yc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.yc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(e,n),null;if(void 0===e&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),e instanceof Array){if(n.settings.arrayElement&&4!==n.dataSource)throw n.yc("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=Qd(r,e.gc(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(e,n)}return function(e,n){if(null===(e=t(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Qr(n.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const t=Mt.fromDate(e);return{timestampValue:Zi(n.serializer,t)}}if(e instanceof Mt){const t=new Mt(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Zi(n.serializer,t)}}if(e instanceof Nd)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ed)return{bytesValue:to(n.serializer,e._byteString)};if(e instanceof Yl){const t=n.databaseId,s=e.firestore._databaseId;if(!s.isEqual(t))throw n.yc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${t.projectId}/${t.database}`);return{referenceValue:so(e.firestore._databaseId||n.databaseId,e._key.path)}}if(e instanceof Ad)return function(t,e){const n=t instanceof Ad?t.toArray():t;return{mapValue:{fields:{[ss]:{stringValue:os},[as]:{arrayValue:{values:n.map(t=>{if("number"!=typeof t)throw e.yc("VectorValues must only contain numeric values.");return Gr(e.serializer,t)})}}}}}}(e,n);if(Do(e))return e._toProto(n.serializer);throw n.yc(`Unsupported field value: ${xt(e)}`)}(e,n)}function Hd(t,e){const n={};return Rn(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dn(t,(t,s)=>{const r=Qd(s,e.dc(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function Wd(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Mt||t instanceof Nd||t instanceof Ed||t instanceof Yl||t instanceof Cd||t instanceof Ad||Do(t))}function Jd(t,e,n){if(!Wd(n)||!St(n)){const s=xt(n);throw"an object"===s?e.yc(t+" a custom object"):e.yc(t+" "+s)}}function Yd(e,n,s){if((n=t(n))instanceof Sd)return n._internalPath;if("string"==typeof n)return Zd(e,n);throw tf("Field path arguments must be of type string or ",e,!1,void 0,s)}const Xd=new RegExp("[~\\*/\\[\\]]");function Zd(t,e,n){if(e.search(Xd)>=0)throw tf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sd(...e.split("."))._internalPath}catch(s){throw tf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tf(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new W(H.INVALID_ARGUMENT,a+t+c)}function ef(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{convertValue(t,e="none"){switch(us(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Gn(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes($n(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw z(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Dn(t,(t,s)=>{n[t]=this.convertValue(s,e)}),n}convertVectorValue(t){const e=t.fields?.[as].arrayValue?.values?.map(t=>Gn(t.doubleValue));return new Ad(e)}convertGeoPoint(t){return new Nd(Gn(t.latitude),Gn(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Xn(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Zn(t));default:return null}}convertTimestamp(t){const e=Kn(t);return new Mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=yt.fromString(t);G(Ao(n),9688,{name:t});const s=new ns(n.get(1),n.get(3)),r=new bt(n.popFirst(5));return s.isEqual(e)||U(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends nf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ed(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Yl(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(){return new Ld("deleteField")}function of(){return new Ud("serverTimestamp")}function af(...t){return new Bd("arrayUnion",t)}function cf(...t){return new jd("arrayRemove",t)}function uf(t){return new zd("increment",t)}function hf(t){return new Ad(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){const e=dd(Ct(t.firestore,ud)),n=e._onlineComponents?.datastore.serializer;return void 0===n?null:wo(n,vr(t._query)).ft}function df(t,e){const n=kn(e,(t,e)=>new xi(e,t.aggregateType,t._internalFieldPath)),s=dd(Ct(t.firestore,ud)),r=s._onlineComponents?.datastore.serializer;return void 0===r?null:vo(r,br(t._query),n,!0).request}const ff="@firebase/firestore",mf="4.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of e)if(t in n&&"function"==typeof n[t])return!0;return!1}(t,["next","error","complete"])}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class yf{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new Rs({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Yl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new vf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(Yd("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class vf extends wf{data(){return super.data()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new W(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class If{}class Tf extends If{}function _f(t,e,...n){let s=[];e instanceof If&&s.push(e),s=s.concat(n),function(t){const e=t.filter(t=>t instanceof xf).length,n=t.filter(t=>t instanceof Ef).length;if(e>1||e>0&&n>0)throw new W(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const e of s)t=e._apply(t);return t}class Ef extends Tf{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Ef(t,e,n)}_apply(t){const e=this._parse(t);return zf(t._query,e),new Jl(t.firestore,t.converter,Tr(t._query,e))}_parse(t){const e=Pd(t.firestore);return function(t,e,n,s,r,i,o){let a;if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new W(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){jf(o,i);const e=[];for(const n of o)e.push(Bf(s,t,n));a={arrayValue:{values:e}}}else a=Bf(s,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||jf(o,i),a=$d(n,e,o,"in"===i||"not-in"===i);return Bs.create(r,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Sf(t,e,n){const s=e,r=Yd("where",t);return Ef._create(r,s,n)}class xf extends If{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new xf(t,e)}_parse(t){const e=this._queryConstraints.map(e=>e._parse(t)).filter(t=>t.getFilters().length>0);return 1===e.length?e[0]:js.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const s=e.getFlattenedFilters();for(const t of s)zf(n,t),n=Tr(n,t)}(t._query,e),new Jl(t.firestore,t.converter,Tr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Cf(...t){return t.forEach(t=>Kf("or",t)),xf._create("or",t)}function Nf(...t){return t.forEach(t=>Kf("and",t)),xf._create("and",t)}class Af extends Tf{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Af(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new W(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new W(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ls(e,n)}(t._query,this._field,this._direction);return new Jl(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new fr(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Df(t,e="asc"){const n=e,s=Yd("orderBy",t);return Af._create(s,n)}class kf extends Tf{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new kf(t,e,n)}_apply(t){return new Jl(t.firestore,t.converter,_r(t._query,this._limit,this._limitType))}}function Rf(t){return Nt("limit",t),kf._create("limit",t,"F")}function Mf(t){return Nt("limitToLast",t),kf._create("limitToLast",t,"L")}class Of extends Tf{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Of(t,e,n)}_apply(t){const e=Uf(t,this.type,this._docOrFields,this._inclusive);return new Jl(t.firestore,t.converter,function(t,e){return new fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Vf(...t){return Of._create("startAt",t,!0)}function Pf(...t){return Of._create("startAfter",t,!1)}class Ff extends Tf{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Ff(t,e,n)}_apply(t){const e=Uf(t,this.type,this._docOrFields,this._inclusive);return new Jl(t.firestore,t.converter,function(t,e){return new fr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Lf(...t){return Ff._create("endBefore",t,!1)}function qf(...t){return Ff._create("endAt",t,!0)}function Uf(e,n,s,r){if(s[0]=t(s[0]),s[0]instanceof wf)return function(t,e,n,s,r){if(!s)throw new W(H.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const n of wr(t))if(n.field.isKeyField())i.push(ws(e,s.key));else{const t=s.data.field(n.field);if(Yn(t))throw new W(H.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=n.field.canonicalString();throw new W(H.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}i.push(t)}return new Vs(i,r)}(e._query,e.firestore._databaseId,n,s[0]._document,r);{const t=Pd(e.firestore);return function(t,e,n,s,r,i){const o=t.explicitOrderBy;if(r.length>o.length)throw new W(H.INVALID_ARGUMENT,`Too many arguments provided to ${s}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let i=0;i<r.length;i++){const c=r[i];if(o[i].field.isKeyField()){if("string"!=typeof c)throw new W(H.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${s}(), but got a ${typeof c}`);if(!yr(t)&&-1!==c.indexOf("/"))throw new W(H.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${s}() must be a plain document ID, but '${c}' contains a slash.`);const n=t.path.child(yt.fromString(c));if(!bt.isDocumentKey(n))throw new W(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${s}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new bt(n);a.push(ws(e,r))}else{const t=$d(n,s,c);a.push(t)}}return new Vs(a,i)}(e._query,e.firestore._databaseId,t,n,s,r)}}function Bf(e,n,s){if("string"==typeof(s=t(s))){if(""===s)throw new W(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yr(n)&&-1!==s.indexOf("/"))throw new W(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${s}' contains a '/' character.`);const t=n.path.child(yt.fromString(s));if(!bt.isDocumentKey(t))throw new W(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${t}' is not because it has an odd number of segments (${t.length}).`);return ws(e,new bt(t))}if(s instanceof Yl)return ws(e,s._key);throw new W(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xt(s)}.`)}function jf(t,e){if(!Array.isArray(t)||0===t.length)throw new W(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zf(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new W(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Kf(t,e){if(!(e instanceof Ef||e instanceof xf))throw new W(H.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function Gf(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class $f extends nf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ed(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Yl(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){return new pf("sum",Yd("sum",t))}function Hf(t){return new pf("avg",Yd("average",t))}function Wf(){return new pf("count")}function Jf(t,e){return t instanceof pf&&e instanceof pf&&t.aggregateType===e.aggregateType&&t._internalFieldPath?.canonicalString()===e._internalFieldPath?.canonicalString()}function Yf(t,e){return sd(t.query,e.query)&&o(t.data(),e.data())}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){return Zf(t,{count:Wf()})}function Zf(t,e){const n=Ct(t.firestore,ud),s=dd(n),r=kn(e,(t,e)=>new xi(e,t.aggregateType,t._internalFieldPath));return function(t,e,n){const s=new J;return t.asyncQueue.enqueueAndForget(async()=>{try{const r=await Pl(t);s.resolve(async function(t,e,n){const s=Q(t),{request:r,gt:i,parent:o}=vo(s.serializer,br(e),n);s.connection.qo||delete r.parent;const a=(await s.jo("RunAggregationQuery",s.serializer.databaseId,o,r,1)).filter(t=>!!t.result);G(1===a.length,64727);const c=a[0].result?.aggregateFields;return Object.keys(c).reduce((t,e)=>(t[i[e]]=c[e],t),{})}(r,e,n))}catch(t){s.reject(t)}}),s.promise}(s,t._query,r).then(e=>function(t,e,n){const s=new sf(t);return new yf(e,s,n)}(n,t,e))}class tm{constructor(t){this.kind="memory",this._onlineComponentProvider=vl.provider,this._offlineComponentProvider=t?.garbageCollector?t.garbageCollector._offlineComponentProvider:{build:()=>new pl(void 0)}}toJSON(){return{kind:this.kind}}}class em{constructor(t){let e;this.kind="persistent",t?.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=hm(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class nm{constructor(){this.kind="memoryEager",this._offlineComponentProvider=gl.provider}toJSON(){return{kind:this.kind}}}class sm{constructor(t){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new pl(t)}}toJSON(){return{kind:this.kind}}}function rm(){return new nm}function im(t){return new sm(t?.cacheSizeBytes)}function om(t){return new tm(t)}function am(t){return new em(t)}class cm{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=vl.provider,this._offlineComponentProvider={build:e=>new yl(e,t?.cacheSizeBytes,this.forceOwnership)}}}class um{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=vl.provider,this._offlineComponentProvider={build:e=>new wl(e,t?.cacheSizeBytes)}}}function hm(t){return new cm(t?.forceOwnership)}function lm(){return new um}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="NOT SUPPORTED";class fm{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mm extends wf{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Yd("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=mm._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}function gm(t,e,n){if(Dt(e,mm._jsonSchema)){if(e.bundle===dm)throw new W(H.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const s=Su(t._databaseId),r=jl(e.bundle,s),i=r.Qu(),o=new Ah(r.getMetadata(),s);for(const t of i)o.Ga(t);const a=o.documents;if(1!==a.length)throw new W(H.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const c=mo(s,a[0].document),u=new bt(yt.fromString(e.bundleName));return new mm(t,new $f(t),u,c,new fm(!1,!1),n||null)}}mm._jsonSchemaVersion="firestore/documentSnapshot/1.0",mm._jsonSchema={type:At("string",mm._jsonSchemaVersion),bundleSource:At("string","DocumentSnapshot"),bundleName:At("string"),bundle:At("string")};class pm extends mm{data(t={}){return super.data(t)}}class ym{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new fm(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new pm(this._firestore,this._userDataWriter,n.key,n,new fm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new W(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const s=new pm(t._firestore,t._userDataWriter,n.doc.key,n.doc,new fm(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const s=new pm(t._firestore,t._userDataWriter,e.doc.key,e.doc,new fm(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:vm(e.type),doc:s,oldIndex:r,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ym._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=at.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),s.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function wm(t,e,n){if(Dt(e,ym._jsonSchema)){if(e.bundle===dm)throw new W(H.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const s=Su(t._databaseId),r=jl(e.bundle,s),i=r.Qu(),o=new Ah(r.getMetadata(),s);for(const t of i)o.Ga(t);if(1!==o.queries.length)throw new W(H.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=Uo(o.queries[0].bundledQuery),c=o.documents;let u=new fh;c.map(t=>{const e=mo(s,t.document);u=u.add(e)});const h=gh.fromInitialDocuments(a,u,jr(),!1,!1),l=new Jl(t,n||null,a);return new ym(t,new $f(t),l,h)}}function vm(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:t})}}function bm(t,e){return t instanceof mm&&e instanceof mm?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ym&&e instanceof ym&&t._firestore===e._firestore&&sd(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ym._jsonSchemaVersion="firestore/querySnapshot/1.0",ym._jsonSchema={type:At("string",ym._jsonSchemaVersion),bundleSource:At("string","QuerySnapshot"),bundleName:At("string"),bundle:At("string")};const Im={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Pd(t)}set(t,e,n){this._verifyNotCommitted();const s=_m(t,this._firestore),r=Gf(s.converter,e,n),i=Fd(this._dataReader,"WriteBatch.set",s._key,r,null!==s.converter,n);return this._mutations.push(i.toMutation(s._key,ci.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=_m(e,this._firestore);let o;return o="string"==typeof(n=t(n))||n instanceof Sd?Gd(this._dataReader,"WriteBatch.update",i._key,n,s,r):Kd(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,ci.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=_m(t,this._firestore);return this._mutations=this._mutations.concat(new Ii(e._key,ci.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _m(e,n){if((e=t(e)).firestore!==n)throw new W(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Pd(t)}get(t){const e=_m(t,this._firestore),n=new $f(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return z(24041);const s=t[0];if(s.isFoundDocument())return new wf(this._firestore,n,s.key,s,e.converter);if(s.isNoDocument())return new wf(this._firestore,n,e._key,null,e.converter);throw z(18433,{doc:s})})}set(t,e,n){const s=_m(t,this._firestore),r=Gf(s.converter,e,n),i=Fd(this._dataReader,"Transaction.set",s._key,r,null!==s.converter,n);return this._transaction.set(s._key,i),this}update(e,n,s,...r){const i=_m(e,this._firestore);let o;return o="string"==typeof(n=t(n))||n instanceof Sd?Gd(this._dataReader,"Transaction.update",i._key,n,s,r):Kd(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(t){const e=_m(t,this._firestore);return this._transaction.delete(e._key),this}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends Em{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=_m(t,this._firestore),n=new sf(this._firestore);return super.get(t).then(t=>new mm(this._firestore,n,e._key,t._document,new fm(!1,!1),e.converter))}}function xm(t,e,n){t=Ct(t,ud);const s={...Im,...n};!function(t){if(t.maxAttempts<1)throw new W(H.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s);return function(t,e,n){const s=new J;return t.asyncQueue.enqueueAndForget(async()=>{const r=await Pl(t);new Sl(t.asyncQueue,r,n,e,s).ju()}),s.promise}(dd(t),n=>e(new Sm(t,n)),s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){t=Ct(t,Yl);const e=Ct(t.firestore,ud);return Ll(dd(e),t._key).then(n=>Bm(e,t,n))}function Nm(t){t=Ct(t,Yl);const e=Ct(t.firestore,ud),n=dd(e),s=new sf(e);return function(t,e){const n=new J;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const s=await function(t,e){const n=Q(t);return n.persistence.runTransaction("read document","readonly",t=>n.localDocuments.getDocument(t,e))}(t,e);s.isFoundDocument()?n.resolve(s):s.isNoDocument()?n.resolve(null):n.reject(new W(H.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const s=dh(t,`Failed to get document '${e} from cache`);n.reject(s)}}(await Ml(t),e,n)),n.promise}(n,t._key).then(n=>new mm(e,s,t._key,n,new fm(null!==n&&n.hasLocalMutations,!0),t.converter))}function Am(t){t=Ct(t,Yl);const e=Ct(t.firestore,ud);return Ll(dd(e),t._key,{source:"server"}).then(n=>Bm(e,t,n))}function Dm(t){t=Ct(t,Jl);const e=Ct(t.firestore,ud),n=dd(e),s=new sf(e);return bf(t._query),ql(n,t._query).then(n=>new ym(e,s,t,n))}function km(t){t=Ct(t,Jl);const e=Ct(t.firestore,ud),n=dd(e),s=new sf(e);return function(t,e){const n=new J;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const s=await $c(t,e,!0),r=new Mh(e,s.ks),i=r.ru(s.documents),o=r.applyChanges(i,!1);n.resolve(o.snapshot)}catch(t){const s=dh(t,`Failed to execute query '${e} against cache`);n.reject(s)}}(await Ml(t),e,n)),n.promise}(n,t._query).then(n=>new ym(e,s,t,n))}function Rm(t){t=Ct(t,Jl);const e=Ct(t.firestore,ud),n=dd(e),s=new sf(e);return ql(n,t._query,{source:"server"}).then(n=>new ym(e,s,t,n))}function Mm(t,e,n){t=Ct(t,Yl);const s=Ct(t.firestore,ud),r=Gf(t.converter,e,n);return Um(s,[Fd(Pd(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,ci.none())])}function Om(e,n,s,...r){e=Ct(e,Yl);const i=Ct(e.firestore,ud),o=Pd(i);let a;return a="string"==typeof(n=t(n))||n instanceof Sd?Gd(o,"updateDoc",e._key,n,s,r):Kd(o,"updateDoc",e._key,n),Um(i,[a.toMutation(e._key,ci.exists(!0))])}function Vm(t){return Um(Ct(t.firestore,ud),[new Ii(t._key,ci.none())])}function Pm(t,e){const n=Ct(t.firestore,ud),s=ed(t),r=Gf(t.converter,e);return Um(n,[Fd(Pd(t.firestore),"addDoc",s._key,r,null!==t.converter,{}).toMutation(s._key,ci.exists(!1))]).then(()=>s)}function Fm(e,...n){e=t(e);let s={includeMetadataChanges:!1,source:"default"},r=0;"object"!=typeof n[r]||gf(n[r])||(s=n[r++]);const i={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(gf(n[r])){const t=n[r];n[r]=t.next?.bind(t),n[r+1]=t.error?.bind(t),n[r+2]=t.complete?.bind(t)}let o,a,c;if(e instanceof Yl)a=Ct(e.firestore,ud),c=gr(e._key.path),o={next:t=>{n[r]&&n[r](Bm(a,e,t))},error:n[r+1],complete:n[r+2]};else{const t=Ct(e,Jl);a=Ct(t.firestore,ud),c=t._query;const s=new sf(a);o={next:e=>{n[r]&&n[r](new ym(a,s,t,e))},error:n[r+1],complete:n[r+2]},bf(e._query)}return function(t,e,n,s){const r=new Il(s),i=new xh(e,r,n);return t.asyncQueue.enqueueAndForget(async()=>vh(await Fl(t),i)),()=>{r.Nu(),t.asyncQueue.enqueueAndForget(async()=>bh(await Fl(t),i))}}(dd(a),c,i,o)}function Lm(e,n,...s){const r=t(e),i=function(t){const e={bundle:"",bundleName:"",bundleSource:""},n=["bundle","bundleName","bundleSource"];for(const s of n){if(!(s in t)){e.error=`snapshotJson missing required field: ${s}`;break}const n=t[s];if("string"!=typeof n){e.error=`snapshotJson field '${s}' must be a string.`;break}if(0===n.length){e.error=`snapshotJson field '${s}' cannot be an empty string.`;break}"bundle"===s?e.bundle=n:"bundleName"===s?e.bundleName=n:"bundleSource"===s&&(e.bundleSource=n)}return e}(n);if(i.error)throw new W(H.INVALID_ARGUMENT,i.error);let o,a=0;if("object"!=typeof s[a]||gf(s[a])||(o=s[a++]),"QuerySnapshot"===i.bundleSource){let t=null;if("object"==typeof s[a]&&gf(s[a])){const e=s[a++];t={next:e.next,error:e.error,complete:e.complete}}else t={next:s[a++],error:s[a++],complete:s[a++]};return function(t,e,n,s,r){let i,o=!1;return Td(t,e.bundle).then(()=>_d(t,e.bundleName)).then(t=>{t&&!o&&(r&&t.withConverter(r),i=Fm(t,n||{},s))}).catch(t=>(s.error&&s.error(t),()=>{})),()=>{o||(o=!0,i&&i())}}(r,i,o,t,s[a])}if("DocumentSnapshot"===i.bundleSource){let t=null;if("object"==typeof s[a]&&gf(s[a])){const e=s[a++];t={next:e.next,error:e.error,complete:e.complete}}else t={next:s[a++],error:s[a++],complete:s[a++]};return function(t,e,n,s,r){let i,o=!1;return Td(t,e.bundle).then(()=>{if(!o){const o=new Yl(t,r||null,bt.fromPath(e.bundleName));i=Fm(o,n||{},s)}}).catch(t=>(s.error&&s.error(t),()=>{})),()=>{o||(o=!0,i&&i())}}(r,i,o,t,s[a])}throw new W(H.INVALID_ARGUMENT,`unsupported bundle source: ${i.bundleSource}`)}function qm(t,e){return function(t,e){const n=new Il(e);return t.asyncQueue.enqueueAndForget(async()=>{return e=await Fl(t),s=n,Q(e).Ca.add(s),void s.next();var e,s}),()=>{n.Nu(),t.asyncQueue.enqueueAndForget(async()=>{return e=await Fl(t),s=n,void Q(e).Ca.delete(s);var e,s})}}(dd(t=Ct(t,ud)),gf(e)?e:{next:e})}function Um(t,e){return Ul(dd(t),e)}function Bm(t,e,n){const s=n.docs.get(e._key),r=new sf(t);return new mm(t,r,e._key,s,new fm(n.hasPendingWrites,n.fromCache),e.converter)}function jm(t){return dd(t=Ct(t,ud)),new Tm(t,e=>Um(t,e))
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function zm(t,e){const n=dd(t=Ct(t,ud));if(!n._uninitializedComponentsProvider||"memory"===n._uninitializedComponentsProvider._offline.kind)return B("Cannot enable indexes when persistence is disabled"),Promise.resolve();return function(t,e){return t.asyncQueue.enqueue(async()=>async function(t,e){const n=Q(t),s=n.indexManager,r=[];return n.persistence.runTransaction("Configure indexes","readwrite",t=>s.getFieldIndexes(t).next(n=>function(t,e,n,s,r){t=[...t],e=[...e],t.sort(n),e.sort(n);const i=t.length,o=e.length;let a=0,c=0;for(;a<o&&c<i;){const i=n(t[c],e[a]);i<0?r(t[c++]):i>0?s(e[a++]):(a++,c++)}for(;a<o;)s(e[a++]);for(;c<i;)r(t[c++])}(n,e,qt,e=>{r.push(s.addFieldIndex(t,e))},e=>{r.push(s.deleteFieldIndex(t,e))})).next(()=>Jt.waitFor(r)))}(await Ml(t),e))}(n,function(t){const e="string"==typeof t?function(t){try{return JSON.parse(t)}catch(t){throw new W(H.INVALID_ARGUMENT,"Failed to parse JSON: "+t?.message)}}(t):t,n=[];if(Array.isArray(e.indexes))for(const t of e.indexes){const e=Km(t,"collectionGroup"),s=[];if(Array.isArray(t.fields))for(const e of t.fields){const t=Zd("setIndexConfiguration",Km(e,"fieldPath"));"CONTAINS"===e.arrayConfig?s.push(new Ut(t,2)):"ASCENDING"===e.order?s.push(new Ut(t,0)):"DESCENDING"===e.order&&s.push(new Ut(t,1))}n.push(new Pt(Pt.UNKNOWN_ID,e,s,jt.empty()))}return n}(e))}function Km(t,e){if("string"!=typeof t[e])throw new W(H.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t){this._firestore=t,this.type="PersistentCacheIndexManager"}}function $m(t){t=Ct(t,ud);const e=Ym.get(t);if(e)return e;const n=dd(t);if("persistent"!==n._uninitializedComponentsProvider?._offline.kind)return null;const s=new Gm(t);return Ym.set(t,s),s}function Qm(t){Jm(t,!0)}function Hm(t){Jm(t,!1)}function Wm(t){(function(t){return t.asyncQueue.enqueue(async()=>function(t){const e=Q(t),n=e.indexManager;return e.persistence.runTransaction("Delete All Indexes","readwrite",t=>n.deleteAllFieldIndexes(t))}(await Ml(t)))})(dd(t._firestore)).then(t=>q("deleting all persistent cache indexes succeeded")).catch(t=>B("deleting all persistent cache indexes failed",t))}function Jm(t,e){(function(t,e){return t.asyncQueue.enqueue(async()=>{return n=await Ml(t),s=e,void(Q(n).Cs.As=s);var n,s})})(dd(t._firestore),e).then(t=>q(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(t=>B(`setting persistent cache index auto creation isEnabled=${e} failed`,t))}const Ym=new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return Zm.instance.onExistenceFilterMismatch(t)}}class Zm{constructor(){this.t=new Map}static get instance(){return tg||(tg=new Zm,function(t){if(Ri)throw new Error("a TestingHooksSpi instance is already set");Ri=t}(tg)),tg}o(t){this.t.forEach(e=>e(t))}onExistenceFilterMismatch(t){const e=Symbol(),n=this.t;return n.set(e,t),()=>n.delete(e)}}let tg=null;!function(t,e=!0){V=I,w(new v("firestore",(t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new ud(new tt(t.getProvider("auth-internal")),new rt(r,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ns(t.options.projectId,e)}(r,n),r);return s={useFetchStreams:e,...s},i._setSettings(s),i},"PUBLIC").setMultipleInstances(!0)),b(ff,mf,t),b(ff,mf,"esm2020")}();export{Lm as $,pf as A,Wm as B,Hm as C,mm as D,gm as E,Qm as F,qf as G,Lf as H,Um as I,Zf as J,Xf as K,Nm as L,Am as M,km as N,Rm as O,Gm as P,xf as Q,$m as R,fm as S,Sm as T,Rf as U,Mf as V,Tm as W,rm as X,om as Y,im as Z,Fm as _,Pm as a,hf as a$,qm as a0,Cf as a1,Df as a2,am as a3,lm as a4,hm as a5,wm as a6,xm as a7,zm as a8,bm as a9,Ct as aA,$ as aB,df as aC,lf as aD,Bn as aE,B as aF,Tt as aG,cf as aH,af as aI,yd as aJ,td as aK,Wl as aL,rf as aM,bd as aN,xd as aO,md as aP,gd as aQ,vd as aR,dd as aS,uf as aT,hd as aU,Td as aV,_d as aW,sd as aX,nd as aY,L as aZ,Id as a_,Pf as aa,Vf as ab,Qf as ac,Om as ad,jm as ae,nf as af,Ed as ag,cd as ah,Xl as ai,Yl as aj,Sd as ak,Cd as al,ud as am,W as an,Nd as ao,ad as ap,Jl as aq,Mt as ar,Ad as as,at,jn as au,ns as av,bt as aw,it as ax,X as ay,vt as az,Cm as b,wd as b0,Zl as c,ed as d,Dm as e,Mm as f,ld as g,Vm as h,yf as i,Tf as j,pm as k,Ff as l,Ef as m,kf as n,Af as o,ym as p,_f as q,Of as r,of as s,Xm as t,Jf as u,Yf as v,Sf as w,Nf as x,Hf as y,Wf as z};
