function e(e,t){return t.forEach(function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach(function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/(null==t&&n.path)}},n.exports),n.exports}function r(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var o=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in n=Object(arguments[l]))a.call(n,c)&&(o[c]=n[c]);if(i){r=i(n);for(var u=0;u<r.length;u++)s.call(n,r[u])&&(o[r[u]]=n[r[u]])}}return o},l=n(function(e,t){var n=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,a=60110,s=60112;t.Suspense=60113;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;n=u("react.element"),r=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),i=u("react.provider"),a=u("react.context"),s=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),c=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p={};function m(e,t,n){this.props=e,this.context=t,this.refs=p,this.updater=n||f}function g(){}function y(e,t,n){this.props=e,this.context=t,this.refs=p,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=y.prototype=new g;v.constructor=y,o(v,m.prototype),v.isPureReactComponent=!0;var w={current:null},b=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var i,a={},s=null,o=null;if(null!=t)for(i in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)b.call(t,i)&&!E.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:s,ref:o,props:a,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function S(e,t,i,a,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return s=s(l=e),e=""===a?"."+T(l,0):a,Array.isArray(s)?(i="",null!=e&&(i=e.replace(I,"$&/")+"/"),S(s,t,i,"",function(e){return e})):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(I,"$&/")+"/")+e)),t.push(s)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=a+T(o=e[c],c);l+=S(o,t,i,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(o=e.next()).done;)l+=S(o=o.value,t,i,u=a+T(o,c++),s);else if("object"===o)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function C(e,t,n){if(null==e)return e;var r=[],i=0;return S(e,r,"","",function(e){return t.call(n,e,i++)}),r}function A(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)})}if(1===e._status)return e._result;throw e._result}var x={current:null};function N(){var e=x.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:C,forEach:function(e,t,n){C(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return C(e,function(){t++}),t},toArray:function(e){return C(e,function(e){return e})||[]},only:function(e){if(!_(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var i=o({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)b.call(t,u)&&!E.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){c=Array(u);for(var h=0;h<u;h++)c[h]=arguments[h+2];i.children=c}return{$$typeof:n,type:e.type,key:a,ref:s,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return N().useCallback(e,t)},t.useContext=function(e,t){return N().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return N().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return N().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return N().useLayoutEffect(e,t)},t.useMemo=function(e,t){return N().useMemo(e,t)},t.useReducer=function(e,t,n){return N().useReducer(e,t,n)},t.useRef=function(e){return N().useRef(e)},t.useState=function(e){return N().useState(e)},t.version="17.0.2"});n(function(e,t){});var c=n(function(e){e.exports=l}),u=e({__proto__:null,default:c},[c]),h=n(function(e,t){var n,r,i,a;if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var c=null,u=null,h=function(){if(null!==c)try{var e=t.unstable_now();c(!0,e),c=null}catch(e){throw setTimeout(h,0),e}};n=function(e){null!==c?setTimeout(n,0,e):(c=e,setTimeout(h,0))},r=function(e,t){u=setTimeout(e,t)},i=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,f=window.clearTimeout;if("undefined"!=typeof console){var p=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof p&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var m=!1,g=null,y=-1,v=5,w=0;t.unstable_shouldYield=function(){return t.unstable_now()>=w},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<e?Math.floor(1e3/e):5};var b=new MessageChannel,E=b.port2;b.port1.onmessage=function(){if(null!==g){var e=t.unstable_now();w=e+v;try{g(!0,e)?E.postMessage(null):(m=!1,g=null)}catch(e){throw E.postMessage(null),e}}else m=!1},n=function(e){g=e,m||(m=!0,E.postMessage(null))},r=function(e,n){y=d(function(){e(t.unstable_now())},n)},i=function(){f(y),y=-1}}function k(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<T(i,t)))break e;e[r]=t,e[n]=i,n=r}}function _(e){return void 0===(e=e[0])?null:e}function I(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var a=2*(r+1)-1,s=e[a],o=a+1,l=e[o];if(void 0!==s&&0>T(s,n))void 0!==l&&0>T(l,s)?(e[r]=l,e[o]=n,r=o):(e[r]=s,e[a]=n,r=a);else{if(!(void 0!==l&&0>T(l,n)))break e;e[r]=l,e[o]=n,r=o}}}return t}return null}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var S=[],C=[],A=1,x=null,N=3,R=!1,P=!1,D=!1;function O(e){for(var t=_(C);null!==t;){if(null===t.callback)I(C);else{if(!(t.startTime<=e))break;I(C),t.sortIndex=t.expirationTime,k(S,t)}t=_(C)}}function M(e){if(D=!1,O(e),!P)if(null!==_(S))P=!0,n(L);else{var t=_(C);null!==t&&r(M,t.startTime-e)}}function L(e,n){P=!1,D&&(D=!1,i()),R=!0;var a=N;try{for(O(n),x=_(S);null!==x&&(!(x.expirationTime>n)||e&&!t.unstable_shouldYield());){var s=x.callback;if("function"==typeof s){x.callback=null,N=x.priorityLevel;var o=s(x.expirationTime<=n);n=t.unstable_now(),"function"==typeof o?x.callback=o:x===_(S)&&I(S),O(n)}else I(S);x=_(S)}if(null!==x)var l=!0;else{var c=_(C);null!==c&&r(M,c.startTime-n),l=!1}return l}finally{x=null,N=a,R=!1}}var F=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){P||R||(P=!0,n(L))},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_getFirstCallbackNode=function(){return _(S)},t.unstable_next=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var n=N;N=t;try{return e()}finally{N=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=F,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=N;N=e;try{return t()}finally{N=n}},t.unstable_scheduleCallback=function(e,a,s){var o=t.unstable_now();switch("object"==typeof s&&null!==s?s="number"==typeof(s=s.delay)&&0<s?o+s:o:s=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:A++,callback:a,priorityLevel:e,startTime:s,expirationTime:l=s+l,sortIndex:-1},s>o?(e.sortIndex=s,k(C,e),null===_(S)&&e===_(C)&&(D?i():D=!0,r(M,s-o))):(e.sortIndex=l,k(S,e),P||R||(P=!0,n(L))),e},t.unstable_wrapCallback=function(e){var t=N;return function(){var n=N;N=t;try{return e.apply(this,arguments)}finally{N=n}}}});n(function(e,t){});var d=n(function(e){e.exports=h});function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!c)throw Error(f(227));var p=new Set,m={};function g(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(m[e]=t,e=0;e<t.length;e++)p.add(t[e])}var v=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b=Object.prototype.hasOwnProperty,E={},k={};function _(e,t,n,r,i,a,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new _(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function S(e){return e[1].toUpperCase()}function C(e,t,n,r){var i=I.hasOwnProperty(t)?I[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!b.call(k,e)||!b.call(E,e)&&(w.test(e)?k[e]=!0:(E[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T,S);I[t]=new _(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T,S);I[t]=new _(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T,S);I[t]=new _(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});var A=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,x=60103,N=60106,R=60107,P=60108,D=60114,O=60109,M=60110,L=60112,F=60113,U=60120,V=60115,z=60116,j=60121,B=60128,W=60129,q=60130,H=60131;if("function"==typeof Symbol&&Symbol.for){var K=Symbol.for;x=K("react.element"),N=K("react.portal"),R=K("react.fragment"),P=K("react.strict_mode"),D=K("react.profiler"),O=K("react.provider"),M=K("react.context"),L=K("react.forward_ref"),F=K("react.suspense"),U=K("react.suspense_list"),V=K("react.memo"),z=K("react.lazy"),j=K("react.block"),K("react.scope"),B=K("react.opaque.id"),W=K("react.debug_trace_mode"),q=K("react.offscreen"),H=K("react.legacy_hidden")}var $,G="function"==typeof Symbol&&Symbol.iterator;function Q(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=G&&e[G]||e["@@iterator"])?e:null}function Y(e){if(void 0===$)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);$=t&&t[1]||""}return"\n"+$+e}var J=!1;function X(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(e){if(e&&r&&"string"==typeof e.stack){for(var i=e.stack.split("\n"),a=r.stack.split("\n"),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(1!==s||1!==o)do{if(s--,0>--o||i[s]!==a[o])return"\n"+i[s].replace(" at new "," at ")}while(1<=s&&0<=o);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Y(e):""}function Z(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1);case 11:return e=X(e.type.render,!1);case 22:return e=X(e.type._render,!1);case 1:return e=X(e.type,!0);default:return""}}function ee(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case R:return"Fragment";case N:return"Portal";case D:return"Profiler";case P:return"StrictMode";case F:return"Suspense";case U:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case M:return(e.displayName||"Context")+".Consumer";case O:return(e._context.displayName||"Context")+".Provider";case L:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case V:return ee(e.type);case j:return ee(e._render);case z:t=e._payload,e=e._init;try{return ee(e(t))}catch(e){}}return null}function te(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function ne(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function re(e){e._valueTracker||(e._valueTracker=function(e){var t=ne(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ie(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ne(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ae(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function se(e,t){var n=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function oe(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=te(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function le(e,t){null!=(t=t.checked)&&C(e,"checked",t,!1)}function ce(e,t){le(e,t);var n=te(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?he(e,t.type,n):t.hasOwnProperty("defaultValue")&&he(e,t.type,te(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ue(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function he(e,t,n){"number"===t&&ae(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function de(e,t){return e=o({children:void 0},t),(t=function(e){var t="";return c.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(t.children))&&(e.children=t),e}function fe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+te(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function pe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(f(91));return o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function me(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(f(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(f(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:te(n)}}function ge(e,t){var n=te(t.value),r=te(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ye(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var ve="http://www.w3.org/1999/xhtml",we="http://www.w3.org/2000/svg";function be(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ee(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?be(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ke,_e,Ie=(_e=function(e,t){if(e.namespaceURI!==we||"innerHTML"in e)e.innerHTML=t;else{for((ke=ke||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return _e(e,t)})}:_e);function Te(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Se={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];function Ae(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Se.hasOwnProperty(e)&&Se[e]?(""+t).trim():t+"px"}function xe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Ae(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Se).forEach(function(e){Ce.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Se[t]=Se[e]})});var Ne=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(e,t){if(t){if(Ne[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(f(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(f(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(f(62))}}function Pe(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function De(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Oe=null,Me=null,Le=null;function Fe(e){if(e=ui(e)){if("function"!=typeof Oe)throw Error(f(280));var t=e.stateNode;t&&(t=di(t),Oe(e.stateNode,e.type,t))}}function Ue(e){Me?Le?Le.push(e):Le=[e]:Me=e}function Ve(){if(Me){var e=Me,t=Le;if(Le=Me=null,Fe(e),t)for(e=0;e<t.length;e++)Fe(t[e])}}function ze(e,t){return e(t)}function je(e,t,n,r,i){return e(t,n,r,i)}function Be(){}var We=ze,qe=!1,He=!1;function Ke(){null===Me&&null===Le||(Be(),Ve())}function $e(e,t){var n=e.stateNode;if(null===n)return null;var r=di(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(f(231,t,typeof n));return n}var Ge=!1;if(v)try{var Qe={};Object.defineProperty(Qe,"passive",{get:function(){Ge=!0}}),window.addEventListener("test",Qe,Qe),window.removeEventListener("test",Qe,Qe)}catch(_e){Ge=!1}function Ye(e,t,n,r,i,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var Je=!1,Xe=null,Ze=!1,et=null,tt={onError:function(e){Je=!0,Xe=e}};function nt(e,t,n,r,i,a,s,o,l){Je=!1,Xe=null,Ye.apply(tt,arguments)}function rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(1026&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function it(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function at(e){if(rt(e)!==e)throw Error(f(188))}function st(e){if(e=function(e){var t=e.alternate;if(!t){if(null===(t=rt(e)))throw Error(f(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return at(i),e;if(a===r)return at(i),t;a=a.sibling}throw Error(f(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=a;break}if(o===r){s=!0,r=i,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,r=i;break}if(o===r){s=!0,r=a,n=i;break}o=o.sibling}if(!s)throw Error(f(189))}}if(n.alternate!==r)throw Error(f(190))}if(3!==n.tag)throw Error(f(188));return n.stateNode.current===n?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function ot(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var lt,ct,ut,ht,dt=!1,ft=[],pt=null,mt=null,gt=null,yt=new Map,vt=new Map,wt=[],bt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Et(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:i,targetContainers:[r]}}function kt(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":yt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vt.delete(t.pointerId)}}function _t(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e=Et(t,n,r,i,a),null!==t&&(null!==(t=ui(t))&&ct(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function It(e){var t=ci(e.target);if(null!==t){var n=rt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=it(n)))return e.blockedOn=t,void ht(e.lanePriority,function(){d.unstable_runWithPriority(e.priority,function(){ut(n)})})}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Tt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=on(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ui(n))&&ct(t),e.blockedOn=n,!1;t.shift()}return!0}function St(e,t,n){Tt(e)&&n.delete(t)}function Ct(){for(dt=!1;0<ft.length;){var e=ft[0];if(null!==e.blockedOn){null!==(e=ui(e.blockedOn))&&lt(e);break}for(var t=e.targetContainers;0<t.length;){var n=on(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&ft.shift()}null!==pt&&Tt(pt)&&(pt=null),null!==mt&&Tt(mt)&&(mt=null),null!==gt&&Tt(gt)&&(gt=null),yt.forEach(St),vt.forEach(St)}function At(e,t){e.blockedOn===t&&(e.blockedOn=null,dt||(dt=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Ct)))}function xt(e){function t(t){return At(t,e)}if(0<ft.length){At(ft[0],e);for(var n=1;n<ft.length;n++){var r=ft[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==pt&&At(pt,e),null!==mt&&At(mt,e),null!==gt&&At(gt,e),yt.forEach(t),vt.forEach(t),n=0;n<wt.length;n++)(r=wt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&null===(n=wt[0]).blockedOn;)It(n),null===n.blockedOn&&wt.shift()}function Nt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rt={animationend:Nt("Animation","AnimationEnd"),animationiteration:Nt("Animation","AnimationIteration"),animationstart:Nt("Animation","AnimationStart"),transitionend:Nt("Transition","TransitionEnd")},Pt={},Dt={};function Ot(e){if(Pt[e])return Pt[e];if(!Rt[e])return e;var t,n=Rt[e];for(t in n)if(n.hasOwnProperty(t)&&t in Dt)return Pt[e]=n[t];return e}v&&(Dt=document.createElement("div").style,"AnimationEvent"in window||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),"TransitionEvent"in window||delete Rt.transitionend.transition);var Mt=Ot("animationend"),Lt=Ot("animationiteration"),Ft=Ot("animationstart"),Ut=Ot("transitionend"),Vt=new Map,zt=new Map,jt=["abort","abort",Mt,"animationEnd",Lt,"animationIteration",Ft,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Ut,"transitionEnd","waiting","waiting"];function Bt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),zt.set(r,t),Vt.set(r,i),g(i,[r])}}(0,d.unstable_now)();var Wt=8;function qt(e){if(1&e)return Wt=15,1;if(2&e)return Wt=14,2;if(4&e)return Wt=13,4;var t=24&e;return 0!==t?(Wt=12,t):32&e?(Wt=11,32):0!==(t=192&e)?(Wt=10,t):256&e?(Wt=9,256):0!==(t=3584&e)?(Wt=8,t):4096&e?(Wt=7,4096):0!==(t=4186112&e)?(Wt=6,t):0!==(t=62914560&e)?(Wt=5,t):67108864&e?(Wt=4,67108864):134217728&e?(Wt=3,134217728):0!==(t=805306368&e)?(Wt=2,t):1073741824&e?(Wt=1,1073741824):(Wt=8,e)}function Ht(e,t){var n=e.pendingLanes;if(0===n)return Wt=0;var r=0,i=0,a=e.expiredLanes,s=e.suspendedLanes,o=e.pingedLanes;if(0!==a)r=a,i=Wt=15;else if(0!==(a=134217727&n)){var l=a&~s;0!==l?(r=qt(l),i=Wt):0!==(o&=a)&&(r=qt(o),i=Wt)}else 0!==(a=n&~s)?(r=qt(a),i=Wt):0!==o&&(r=qt(o),i=Wt);if(0===r)return 0;if(r=n&((0>(r=31-Jt(r))?0:1<<r)<<1)-1,0!==t&&t!==r&&0===(t&s)){if(qt(t),i<=Wt)return t;Wt=i}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-Jt(t)),r|=e[n],t&=~i;return r}function Kt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function $t(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Gt(24&~t))?$t(10,t):e;case 10:return 0===(e=Gt(192&~t))?$t(8,t):e;case 8:return 0===(e=Gt(3584&~t))&&(0===(e=Gt(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Gt(805306368&~t))&&(t=268435456),t}throw Error(f(358,e))}function Gt(e){return e&-e}function Qt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yt(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,(e=e.eventTimes)[t=31-Jt(t)]=n}var Jt=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(Xt(e)/Zt|0)|0},Xt=Math.log,Zt=Math.LN2;var en=d.unstable_UserBlockingPriority,tn=d.unstable_runWithPriority,nn=!0;function rn(e,t,n,r){qe||Be();var i=sn,a=qe;qe=!0;try{je(i,e,t,n,r)}finally{(qe=a)||Ke()}}function an(e,t,n,r){tn(en,sn.bind(null,e,t,n,r))}function sn(e,t,n,r){var i;if(nn)if((i=!(4&t))&&0<ft.length&&-1<bt.indexOf(e))e=Et(null,e,t,n,r),ft.push(e);else{var a=on(e,t,n,r);if(null===a)i&&kt(e,r);else{if(i){if(-1<bt.indexOf(e))return e=Et(a,e,t,n,r),void ft.push(e);if(function(e,t,n,r,i){switch(t){case"focusin":return pt=_t(pt,e,t,n,r,i),!0;case"dragenter":return mt=_t(mt,e,t,n,r,i),!0;case"mouseover":return gt=_t(gt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return yt.set(a,_t(yt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,vt.set(a,_t(vt.get(a)||null,e,t,n,r,i)),!0}return!1}(a,e,t,n,r))return;kt(e,r)}Br(e,t,r,null,n)}}}function on(e,t,n,r){var i=De(r);if(null!==(i=ci(i))){var a=rt(i);if(null===a)i=null;else{var s=a.tag;if(13===s){if(null!==(i=it(a)))return i;i=null}else if(3===s){if(a.stateNode.hydrate)return 3===a.tag?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null)}}return Br(e,t,r,i,n),null}var ln=null,cn=null,un=null;function hn(){if(un)return un;var e,t,n=cn,r=n.length,i="value"in ln?ln.value:ln.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[a-t];t++);return un=i.slice(e,1<t?1-t:void 0)}function dn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function fn(){return!0}function pn(){return!1}function mn(e){function t(t,n,r,i,a){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?fn:pn,this.isPropagationStopped=pn,this}return o(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=fn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=fn)},persist:function(){},isPersistent:fn}),t}var gn,yn,vn,wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bn=mn(wn),En=o({},wn,{view:0,detail:0}),kn=mn(En),_n=o({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&"mousemove"===e.type?(gn=e.screenX-vn.screenX,yn=e.screenY-vn.screenY):yn=gn=0,vn=e),gn)},movementY:function(e){return"movementY"in e?e.movementY:yn}}),In=mn(_n),Tn=mn(o({},_n,{dataTransfer:0})),Sn=mn(o({},En,{relatedTarget:0})),Cn=mn(o({},wn,{animationName:0,elapsedTime:0,pseudoElement:0})),An=o({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=mn(An),Nn=mn(o({},wn,{data:0})),Rn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function On(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Dn[e])&&!!t[e]}function Mn(){return On}var Ln=o({},En,{key:function(e){if(e.key){var t=Rn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=dn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Pn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mn,charCode:function(e){return"keypress"===e.type?dn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?dn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Fn=mn(Ln),Un=mn(o({},_n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=mn(o({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mn})),zn=mn(o({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0})),jn=o({},_n,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bn=mn(jn),Wn=[9,13,27,32],qn=v&&"CompositionEvent"in window,Hn=null;v&&"documentMode"in document&&(Hn=document.documentMode);var Kn=v&&"TextEvent"in window&&!Hn,$n=v&&(!qn||Hn&&8<Hn&&11>=Hn),Gn=String.fromCharCode(32),Qn=!1;function Yn(e,t){switch(e){case"keyup":return-1!==Wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Xn=!1;var Zn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Zn[e.type]:"textarea"===t}function tr(e,t,n,r){Ue(r),0<(t=qr(t,"onChange")).length&&(n=new bn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){Lr(e,0)}function ar(e){if(ie(hi(e)))return e}function sr(e,t){if("change"===e)return t}var or=!1;if(v){var lr;if(v){var cr="oninput"in document;if(!cr){var ur=document.createElement("div");ur.setAttribute("oninput","return;"),cr="function"==typeof ur.oninput}lr=cr}else lr=!1;or=lr&&(!document.documentMode||9<document.documentMode)}function hr(){nr&&(nr.detachEvent("onpropertychange",dr),rr=nr=null)}function dr(e){if("value"===e.propertyName&&ar(rr)){var t=[];if(tr(t,rr,e,De(e)),e=ir,qe)e(t);else{qe=!0;try{ze(e,t)}finally{qe=!1,Ke()}}}}function fr(e,t,n){"focusin"===e?(hr(),rr=n,(nr=t).attachEvent("onpropertychange",dr)):"focusout"===e&&hr()}function pr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return ar(rr)}function mr(e,t){if("click"===e)return ar(t)}function gr(e,t){if("input"===e||"change"===e)return ar(t)}var yr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},vr=Object.prototype.hasOwnProperty;function wr(e,t){if(yr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!vr.call(t,n[r])||!yr(e[n[r]],t[n[r]]))return!1;return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n,r=br(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=br(r)}}function kr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?kr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function _r(){for(var e=window,t=ae();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=ae((e=t.contentWindow).document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var Tr=v&&"documentMode"in document&&11>=document.documentMode,Sr=null,Cr=null,Ar=null,xr=!1;function Nr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==Sr||Sr!==ae(r)||("selectionStart"in(r=Sr)&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Ar&&wr(Ar,r)||(Ar=r,0<(r=qr(Cr,"onSelect")).length&&(t=new bn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}Bt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Bt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Bt(jt,2);for(var Rr="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Pr=0;Pr<Rr.length;Pr++)zt.set(Rr[Pr],0);y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Or=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function Mr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,o,l){if(nt.apply(this,arguments),Je){if(!Je)throw Error(f(198));var c=Xe;Je=!1,Xe=null,Ze||(Ze=!0,et=c)}}(r,t,void 0,e),e.currentTarget=null}function Lr(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;Mr(i,o,c),a=l}else for(s=0;s<r.length;s++){if(l=(o=r[s]).instance,c=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;Mr(i,o,c),a=l}}}if(Ze)throw e=et,Ze=!1,et=null,e}function Fr(e,t){var n=fi(t),r=e+"__bubble";n.has(r)||(jr(t,e,2,!1),n.add(r))}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){e[Ur]||(e[Ur]=!0,p.forEach(function(t){Or.has(t)||zr(t,!1,e,null),zr(t,!0,e,null)}))}function zr(e,t,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=n;if("selectionchange"===e&&9!==n.nodeType&&(a=n.ownerDocument),null!==r&&!t&&Or.has(e)){if("scroll"!==e)return;i|=2,a=r}var s=fi(a),o=e+"__"+(t?"capture":"bubble");s.has(o)||(t&&(i|=4),jr(a,e,i,t),s.add(o))}function jr(e,t,n,r){var i=zt.get(t);switch(void 0===i?2:i){case 0:i=rn;break;case 1:i=an;break;default:i=sn}n=i.bind(null,t,n,e),i=void 0,!Ge||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Br(e,t,n,r,i){var a=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var s=r.tag;if(3===s||4===s){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===s)for(s=r.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;s=s.return}for(;null!==o;){if(null===(s=ci(o)))return;if(5===(l=s.tag)||6===l){r=a=s;continue e}o=o.parentNode}}r=r.return}!function(e,t,n){if(He)return e(t,n);He=!0;try{return We(e,t,n)}finally{He=!1,Ke()}}(function(){var r=a,i=De(n),s=[];e:{var o=Vt.get(e);if(void 0!==o){var l=bn,c=e;switch(e){case"keypress":if(0===dn(n))break e;case"keydown":case"keyup":l=Fn;break;case"focusin":c="focus",l=Sn;break;case"focusout":c="blur",l=Sn;break;case"beforeblur":case"afterblur":l=Sn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=In;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=Tn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Vn;break;case Mt:case Lt:case Ft:l=Cn;break;case Ut:l=zn;break;case"scroll":l=kn;break;case"wheel":l=Bn;break;case"copy":case"cut":case"paste":l=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Un}var u=!!(4&t),h=!u&&"scroll"===e,d=u?null!==o?o+"Capture":null:o;u=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=$e(p,d))&&u.push(Wr(p,m,f)))),h)break;p=p.return}0<u.length&&(o=new l(o,c,null,n,i),s.push({event:o,listeners:u}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||16&t||!(c=n.relatedTarget||n.fromElement)||!ci(c)&&!c[oi])&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?ci(c):null)&&(c!==(h=rt(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=In,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=Un,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:hi(l),f=null==c?o:hi(c),(o=new u(m,p+"leave",l,n,i)).target=h,o.relatedTarget=f,m=null,ci(i)===r&&((u=new u(d,p+"enter",c,n,i)).target=f,u.relatedTarget=h,m=u),h=m,l&&c)e:{for(d=c,p=0,f=u=l;f;f=Hr(f))p++;for(f=0,m=d;m;m=Hr(m))f++;for(;0<p-f;)u=Hr(u),p--;for(;0<f-p;)d=Hr(d),f--;for(;p--;){if(u===d||null!==d&&u===d.alternate)break e;u=Hr(u),d=Hr(d)}u=null}else u=null;null!==l&&Kr(s,o,l,u,!1),null!==c&&null!==h&&Kr(s,h,c,u,!0)}if("select"===(l=(o=r?hi(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=sr;else if(er(o))if(or)g=gr;else{g=pr;var y=fr}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=mr);switch(g&&(g=g(e,r))?tr(s,g,n,i):(y&&y(e,o,r),"focusout"===e&&(y=o._wrapperState)&&y.controlled&&"number"===o.type&&he(o,"number",o.value)),y=r?hi(r):window,e){case"focusin":(er(y)||"true"===y.contentEditable)&&(Sr=y,Cr=r,Ar=null);break;case"focusout":Ar=Cr=Sr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,Nr(s,n,i);break;case"selectionchange":if(Tr)break;case"keydown":case"keyup":Nr(s,n,i)}var v;if(qn)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Xn?Yn(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&($n&&"ko"!==n.locale&&(Xn||"onCompositionStart"!==w?"onCompositionEnd"===w&&Xn&&(v=hn()):(cn="value"in(ln=i)?ln.value:ln.textContent,Xn=!0)),0<(y=qr(r,w)).length&&(w=new Nn(w,e,null,n,i),s.push({event:w,listeners:y}),v?w.data=v:null!==(v=Jn(n))&&(w.data=v))),(v=Kn?function(e,t){switch(e){case"compositionend":return Jn(t);case"keypress":return 32!==t.which?null:(Qn=!0,Gn);case"textInput":return(e=t.data)===Gn&&Qn?null:e;default:return null}}(e,n):function(e,t){if(Xn)return"compositionend"===e||!qn&&Yn(e,t)?(e=hn(),un=cn=ln=null,Xn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $n&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=qr(r,"onBeforeInput")).length&&(i=new Nn("onBeforeInput","beforeinput",null,n,i),s.push({event:i,listeners:r}),i.data=v))}Lr(s,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=$e(e,n))&&r.unshift(Wr(e,a,i)),null!=(a=$e(e,t))&&r.push(Wr(e,a,i))),e=e.return}return r}function Hr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,i){for(var a=t._reactName,s=[];null!==n&&n!==r;){var o=n,l=o.alternate,c=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==c&&(o=c,i?null!=(l=$e(n,a))&&s.unshift(Wr(n,l,o)):i||null!=(l=$e(n,a))&&s.push(Wr(n,l,o))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}function $r(){}var Gr=null,Qr=null;function Yr(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Jr(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Xr="function"==typeof setTimeout?setTimeout:void 0,Zr="function"==typeof clearTimeout?clearTimeout:void 0;function ei(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function ti(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function ni(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ri=0;var ii=Math.random().toString(36).slice(2),ai="__reactFiber$"+ii,si="__reactProps$"+ii,oi="__reactContainer$"+ii,li="__reactEvents$"+ii;function ci(e){var t=e[ai];if(t)return t;for(var n=e.parentNode;n;){if(t=n[oi]||n[ai]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ni(e);null!==e;){if(n=e[ai])return n;e=ni(e)}return t}n=(e=n).parentNode}return null}function ui(e){return!(e=e[ai]||e[oi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function hi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(f(33))}function di(e){return e[si]||null}function fi(e){var t=e[li];return void 0===t&&(t=e[li]=new Set),t}var pi=[],mi=-1;function gi(e){return{current:e}}function yi(e){0>mi||(e.current=pi[mi],pi[mi]=null,mi--)}function vi(e,t){mi++,pi[mi]=e.current,e.current=t}var wi={},bi=gi(wi),Ei=gi(!1),ki=wi;function _i(e,t){var n=e.type.contextTypes;if(!n)return wi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ii(e){return null!=(e=e.childContextTypes)}function Ti(){yi(Ei),yi(bi)}function Si(e,t,n){if(bi.current!==wi)throw Error(f(168));vi(bi,t),vi(Ei,n)}function Ci(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in e))throw Error(f(108,ee(t)||"Unknown",i));return o({},n,r)}function Ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wi,ki=bi.current,vi(bi,e),vi(Ei,Ei.current),!0}function xi(e,t,n){var r=e.stateNode;if(!r)throw Error(f(169));n?(e=Ci(e,t,ki),r.__reactInternalMemoizedMergedChildContext=e,yi(Ei),yi(bi),vi(bi,e)):yi(Ei),vi(Ei,n)}var Ni=null,Ri=null,Pi=d.unstable_runWithPriority,Di=d.unstable_scheduleCallback,Oi=d.unstable_cancelCallback,Mi=d.unstable_shouldYield,Li=d.unstable_requestPaint,Fi=d.unstable_now,Ui=d.unstable_getCurrentPriorityLevel,Vi=d.unstable_ImmediatePriority,zi=d.unstable_UserBlockingPriority,ji=d.unstable_NormalPriority,Bi=d.unstable_LowPriority,Wi=d.unstable_IdlePriority,qi={},Hi=void 0!==Li?Li:function(){},Ki=null,$i=null,Gi=!1,Qi=Fi(),Yi=1e4>Qi?Fi:function(){return Fi()-Qi};function Ji(){switch(Ui()){case Vi:return 99;case zi:return 98;case ji:return 97;case Bi:return 96;case Wi:return 95;default:throw Error(f(332))}}function Xi(e){switch(e){case 99:return Vi;case 98:return zi;case 97:return ji;case 96:return Bi;case 95:return Wi;default:throw Error(f(332))}}function Zi(e,t){return e=Xi(e),Pi(e,t)}function ea(e,t,n){return e=Xi(e),Di(e,t,n)}function ta(){if(null!==$i){var e=$i;$i=null,Oi(e)}na()}function na(){if(!Gi&&null!==Ki){Gi=!0;var e=0;try{var t=Ki;Zi(99,function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}}),Ki=null}catch(t){throw null!==Ki&&(Ki=Ki.slice(e+1)),Di(Vi,ta),t}finally{Gi=!1}}}var ra=A.ReactCurrentBatchConfig;function ia(e,t){if(e&&e.defaultProps){for(var n in t=o({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var aa=gi(null),sa=null,oa=null,la=null;function ca(){la=oa=sa=null}function ua(e){var t=aa.current;yi(aa),e.type._context._currentValue=t}function ha(e,t){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t);e=e.return}}function da(e,t){sa=e,la=oa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(Ws=!0),e.firstContext=null)}function fa(e,t){if(la!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(la=e,t=1073741823),t={context:e,observedBits:t,next:null},null===oa){if(null===sa)throw Error(f(308));oa=t,sa.dependencies={lanes:0,firstContext:t,responders:null}}else oa=oa.next=t;return e._currentValue}var pa=!1;function ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ya(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function va(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function wa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=s:a=a.next=s,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ba(e,t,n,r){var i=e.updateQueue;pa=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var c=l,u=c.next;c.next=null,null===s?a=u:s.next=u,s=c;var h=e.alternate;if(null!==h){var d=(h=h.updateQueue).lastBaseUpdate;d!==s&&(null===d?h.firstBaseUpdate=u:d.next=u,h.lastBaseUpdate=c)}}if(null!==a){for(d=i.baseState,s=0,h=u=c=null;;){l=a.lane;var f=a.eventTime;if((r&l)===l){null!==h&&(h=h.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(l=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(f,d,l);break e}d=p;break e;case 3:p.flags=-4097&p.flags|64;case 0:if(null==(l="function"==typeof(p=m.payload)?p.call(f,d,l):p))break e;d=o({},d,l);break e;case 2:pa=!0}}null!==a.callback&&(e.flags|=32,null===(l=i.effects)?i.effects=[a]:l.push(a))}else f={eventTime:f,lane:l,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===h?(u=h=f,c=d):h=h.next=f,s|=l;if(null===(a=a.next)){if(null===(l=i.shared.pending))break;a=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}null===h&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,Qo|=s,e.lanes=s,e.memoizedState=d}}function Ea(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(f(191,i));i.call(r)}}}var ka=(new c.Component).refs;function _a(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:o({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Ia={isMounted:function(e){return!!(e=e._reactInternals)&&rt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=bl(),i=El(e),a=ya(r,i);a.payload=t,null!=n&&(a.callback=n),va(e,a),kl(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=bl(),i=El(e),a=ya(r,i);a.tag=1,a.payload=t,null!=n&&(a.callback=n),va(e,a),kl(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=bl(),r=El(e),i=ya(n,r);i.tag=2,null!=t&&(i.callback=t),va(e,i),kl(e,r,n)}};function Ta(e,t,n,r,i,a,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,s):!t.prototype||!t.prototype.isPureReactComponent||(!wr(n,r)||!wr(i,a))}function Sa(e,t,n){var r=!1,i=wi,a=t.contextType;return"object"==typeof a&&null!==a?a=fa(a):(i=Ii(t)?ki:bi.current,a=(r=null!=(r=t.contextTypes))?_i(e,i):wi),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Ia,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ca(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ia.enqueueReplaceState(t,t.state,null)}function Aa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ka,ma(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=fa(a):(a=Ii(t)?ki:bi.current,i.context=_i(e,a)),ba(e,n,i,r),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(_a(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&Ia.enqueueReplaceState(i,i.state,null),ba(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4)}var xa=Array.isArray;function Na(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(f(309));var r=n.stateNode}if(!r)throw Error(f(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===ka&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(f(284));if(!n._owner)throw Error(f(290,e))}return e}function Ra(e,t){if("textarea"!==e.type)throw Error(f(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function Pa(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=ec(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags=2,n):r:(t.flags=2,n):n}function s(t){return e&&null===t.alternate&&(t.flags=2),t}function o(e,t,n,r){return null===t||6!==t.tag?((t=ic(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=Na(e,t,n),r.return=e,r):((r=tc(n.type,n.key,n.props,null,e.mode,r)).ref=Na(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=ac(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,a){return null===t||7!==t.tag?((t=nc(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=ic(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case x:return(n=tc(t.type,t.key,t.props,null,e.mode,n)).ref=Na(e,null,t),n.return=e,n;case N:return(t=ac(t,e.mode,n)).return=e,t}if(xa(t)||Q(t))return(t=nc(t,e.mode,n,null)).return=e,t;Ra(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case x:return n.key===i?n.type===R?u(e,t,n.props.children,r,i):l(e,t,n,r):null;case N:return n.key===i?c(e,t,n,r):null}if(xa(n)||Q(n))return null!==i?null:u(e,t,n,r,null);Ra(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case x:return e=e.get(null===r.key?n:r.key)||null,r.type===R?u(t,e,r.props.children,i,r.key):l(t,e,r,i);case N:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(xa(r)||Q(r))return u(t,e=e.get(n)||null,r,i,null);Ra(t,r)}return null}return function(o,l,c,u){var m="object"==typeof c&&null!==c&&c.type===R&&null===c.key;m&&(c=c.props.children);var g="object"==typeof c&&null!==c;if(g)switch(c.$$typeof){case x:e:{for(g=c.key,m=l;null!==m;){if(m.key===g){if(7===m.tag){if(c.type===R){n(o,m.sibling),(l=i(m,c.props.children)).return=o,o=l;break e}}else if(m.elementType===c.type){n(o,m.sibling),(l=i(m,c.props)).ref=Na(o,m,c),l.return=o,o=l;break e}n(o,m);break}t(o,m),m=m.sibling}c.type===R?((l=nc(c.props.children,o.mode,u,c.key)).return=o,o=l):((u=tc(c.type,c.key,c.props,null,o.mode,u)).ref=Na(o,l,c),u.return=o,o=u)}return s(o);case N:e:{for(m=c.key;null!==l;){if(l.key===m){if(4===l.tag&&l.stateNode.containerInfo===c.containerInfo&&l.stateNode.implementation===c.implementation){n(o,l.sibling),(l=i(l,c.children||[])).return=o,o=l;break e}n(o,l);break}t(o,l),l=l.sibling}(l=ac(c,o.mode,u)).return=o,o=l}return s(o)}if("string"==typeof c||"number"==typeof c)return c=""+c,null!==l&&6===l.tag?(n(o,l.sibling),(l=i(l,c)).return=o,o=l):(n(o,l),(l=ic(c,o.mode,u)).return=o,o=l),s(o);if(xa(c))return function(i,s,o,l){for(var c=null,u=null,f=s,m=s=0,g=null;null!==f&&m<o.length;m++){f.index>m?(g=f,f=null):g=f.sibling;var y=d(i,f,o[m],l);if(null===y){null===f&&(f=g);break}e&&f&&null===y.alternate&&t(i,f),s=a(y,s,m),null===u?c=y:u.sibling=y,u=y,f=g}if(m===o.length)return n(i,f),c;if(null===f){for(;m<o.length;m++)null!==(f=h(i,o[m],l))&&(s=a(f,s,m),null===u?c=f:u.sibling=f,u=f);return c}for(f=r(i,f);m<o.length;m++)null!==(g=p(f,i,m,o[m],l))&&(e&&null!==g.alternate&&f.delete(null===g.key?m:g.key),s=a(g,s,m),null===u?c=g:u.sibling=g,u=g);return e&&f.forEach(function(e){return t(i,e)}),c}(o,l,c,u);if(Q(c))return function(i,s,o,l){var c=Q(o);if("function"!=typeof c)throw Error(f(150));if(null==(o=c.call(o)))throw Error(f(151));for(var u=c=null,m=s,g=s=0,y=null,v=o.next();null!==m&&!v.done;g++,v=o.next()){m.index>g?(y=m,m=null):y=m.sibling;var w=d(i,m,v.value,l);if(null===w){null===m&&(m=y);break}e&&m&&null===w.alternate&&t(i,m),s=a(w,s,g),null===u?c=w:u.sibling=w,u=w,m=y}if(v.done)return n(i,m),c;if(null===m){for(;!v.done;g++,v=o.next())null!==(v=h(i,v.value,l))&&(s=a(v,s,g),null===u?c=v:u.sibling=v,u=v);return c}for(m=r(i,m);!v.done;g++,v=o.next())null!==(v=p(m,i,g,v.value,l))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=a(v,s,g),null===u?c=v:u.sibling=v,u=v);return e&&m.forEach(function(e){return t(i,e)}),c}(o,l,c,u);if(g&&Ra(o,c),void 0===c&&!m)switch(o.tag){case 1:case 22:case 0:case 11:case 15:throw Error(f(152,ee(o.type)||"Component"))}return n(o,l)}}var Da=Pa(!0),Oa=Pa(!1),Ma={},La=gi(Ma),Fa=gi(Ma),Ua=gi(Ma);function Va(e){if(e===Ma)throw Error(f(174));return e}function za(e,t){switch(vi(Ua,t),vi(Fa,e),vi(La,Ma),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ee(null,"");break;default:t=Ee(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}yi(La),vi(La,t)}function ja(){yi(La),yi(Fa),yi(Ua)}function Ba(e){Va(Ua.current);var t=Va(La.current),n=Ee(t,e.type);t!==n&&(vi(Fa,e),vi(La,n))}function Wa(e){Fa.current===e&&(yi(La),yi(Fa))}var qa=gi(0);function Ha(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(64&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=null,$a=null,Ga=!1;function Qa(e,t){var n=Xl(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Ya(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function Ja(e){if(Ga){var t=$a;if(t){var n=t;if(!Ya(e,t)){if(!(t=ti(n.nextSibling))||!Ya(e,t))return e.flags=-1025&e.flags|2,Ga=!1,void(Ka=e);Qa(Ka,n)}Ka=e,$a=ti(t.firstChild)}else e.flags=-1025&e.flags|2,Ga=!1,Ka=e}}function Xa(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Ka=e}function Za(e){if(e!==Ka)return!1;if(!Ga)return Xa(e),Ga=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Jr(t,e.memoizedProps))for(t=$a;t;)Qa(e,t),t=ti(t.nextSibling);if(Xa(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){$a=ti(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}$a=null}}else $a=Ka?ti(e.stateNode.nextSibling):null;return!0}function es(){$a=Ka=null,Ga=!1}var ts=[];function ns(){for(var e=0;e<ts.length;e++)ts[e]._workInProgressVersionPrimary=null;ts.length=0}var rs=A.ReactCurrentDispatcher,is=A.ReactCurrentBatchConfig,as=0,ss=null,os=null,ls=null,cs=!1,us=!1;function hs(){throw Error(f(321))}function ds(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yr(e[n],t[n]))return!1;return!0}function fs(e,t,n,r,i,a){if(as=a,ss=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rs.current=null===e||null===e.memoizedState?Vs:zs,e=n(r,i),us){a=0;do{if(us=!1,!(25>a))throw Error(f(301));a+=1,ls=os=null,t.updateQueue=null,rs.current=js,e=n(r,i)}while(us)}if(rs.current=Us,t=null!==os&&null!==os.next,as=0,ls=os=ss=null,cs=!1,t)throw Error(f(300));return e}function ps(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ls?ss.memoizedState=ls=e:ls=ls.next=e,ls}function ms(){if(null===os){var e=ss.alternate;e=null!==e?e.memoizedState:null}else e=os.next;var t=null===ls?ss.memoizedState:ls.next;if(null!==t)ls=t,os=e;else{if(null===e)throw Error(f(310));e={memoizedState:(os=e).memoizedState,baseState:os.baseState,baseQueue:os.baseQueue,queue:os.queue,next:null},null===ls?ss.memoizedState=ls=e:ls=ls.next=e}return ls}function gs(e,t){return"function"==typeof t?t(e):t}function ys(e){var t=ms(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=os,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var o=s=a=null,l=i;do{var c=l.lane;if((as&c)===c)null!==o&&(o=o.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var u={lane:c,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};null===o?(s=o=u,a=r):o=o.next=u,ss.lanes|=c,Qo|=c}l=l.next}while(null!==l&&l!==i);null===o?a=r:o.next=s,yr(r,t.memoizedState)||(Ws=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=o,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function vs(e){var t=ms(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);yr(a,t.memoizedState)||(Ws=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ws(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(null!==i?e=i===r:(e=e.mutableReadLanes,(e=(as&e)===e)&&(t._workInProgressVersionPrimary=r,ts.push(t))),e)return n(t._source);throw ts.push(t),Error(f(350))}function bs(e,t,n,r){var i=jo;if(null===i)throw Error(f(349));var a=t._getVersion,s=a(t._source),o=rs.current,l=o.useState(function(){return ws(i,t,n)}),c=l[1],u=l[0];l=ls;var h=e.memoizedState,d=h.refs,p=d.getSnapshot,m=h.source;h=h.subscribe;var g=ss;return e.memoizedState={refs:d,source:t,subscribe:r},o.useEffect(function(){d.getSnapshot=n,d.setSnapshot=c;var e=a(t._source);if(!yr(s,e)){e=n(t._source),yr(u,e)||(c(e),e=El(g),i.mutableReadLanes|=e&i.pendingLanes),e=i.mutableReadLanes,i.entangledLanes|=e;for(var r=i.entanglements,o=e;0<o;){var l=31-Jt(o),h=1<<l;r[l]|=e,o&=~h}}},[n,t,r]),o.useEffect(function(){return r(t._source,function(){var e=d.getSnapshot,n=d.setSnapshot;try{n(e(t._source));var r=El(g);i.mutableReadLanes|=r&i.pendingLanes}catch(e){n(function(){throw e})}})},[t,r]),yr(p,n)&&yr(m,t)&&yr(h,r)||((e={pending:null,dispatch:null,lastRenderedReducer:gs,lastRenderedState:u}).dispatch=c=Fs.bind(null,ss,e),l.queue=e,l.baseQueue=null,u=ws(i,t,n),l.memoizedState=l.baseState=u),u}function Es(e,t,n){return bs(ms(),e,t,n)}function ks(e){var t=ps();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:gs,lastRenderedState:e}).dispatch=Fs.bind(null,ss,e),[t.memoizedState,e]}function _s(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ss.updateQueue)?(t={lastEffect:null},ss.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Is(e){return e={current:e},ps().memoizedState=e}function Ts(){return ms().memoizedState}function Ss(e,t,n,r){var i=ps();ss.flags|=e,i.memoizedState=_s(1|t,n,void 0,void 0===r?null:r)}function Cs(e,t,n,r){var i=ms();r=void 0===r?null:r;var a=void 0;if(null!==os){var s=os.memoizedState;if(a=s.destroy,null!==r&&ds(r,s.deps))return void _s(t,n,a,r)}ss.flags|=e,i.memoizedState=_s(1|t,n,a,r)}function As(e,t){return Ss(516,4,e,t)}function xs(e,t){return Cs(516,4,e,t)}function Ns(e,t){return Cs(4,2,e,t)}function Rs(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ps(e,t,n){return n=null!=n?n.concat([e]):null,Cs(4,2,Rs.bind(null,t,e),n)}function Ds(){}function Os(e,t){var n=ms();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ms(e,t){var n=ms();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ls(e,t){var n=Ji();Zi(98>n?98:n,function(){e(!0)}),Zi(97<n?97:n,function(){var n=is.transition;is.transition=1;try{e(!1),t()}finally{is.transition=n}})}function Fs(e,t,n){var r=bl(),i=El(e),a={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(null===s?a.next=a:(a.next=s.next,s.next=a),t.pending=a,s=e.alternate,e===ss||null!==s&&s===ss)us=cs=!0;else{if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=s(o,n);if(a.eagerReducer=s,a.eagerState=l,yr(l,o))return}catch(e){}kl(e,i,r)}}var Us={readContext:fa,useCallback:hs,useContext:hs,useEffect:hs,useImperativeHandle:hs,useLayoutEffect:hs,useMemo:hs,useReducer:hs,useRef:hs,useState:hs,useDebugValue:hs,useDeferredValue:hs,useTransition:hs,useMutableSource:hs,useOpaqueIdentifier:hs,unstable_isNewReconciler:!1},Vs={readContext:fa,useCallback:function(e,t){return ps().memoizedState=[e,void 0===t?null:t],e},useContext:fa,useEffect:As,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Ss(4,2,Rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ss(4,2,e,t)},useMemo:function(e,t){var n=ps();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ps();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=Fs.bind(null,ss,e),[r.memoizedState,e]},useRef:Is,useState:ks,useDebugValue:Ds,useDeferredValue:function(e){var t=ks(e),n=t[0],r=t[1];return As(function(){var t=is.transition;is.transition=1;try{r(e)}finally{is.transition=t}},[e]),n},useTransition:function(){var e=ks(!1),t=e[0];return Is(e=Ls.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,n){var r=ps();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},bs(r,e,t,n)},useOpaqueIdentifier:function(){if(Ga){var e=!1,t=function(e){return{$$typeof:B,toString:e,valueOf:e}}(function(){throw e||(e=!0,n("r:"+(ri++).toString(36))),Error(f(355))}),n=ks(t)[1];return!(2&ss.mode)&&(ss.flags|=516,_s(5,function(){n("r:"+(ri++).toString(36))},void 0,null)),t}return ks(t="r:"+(ri++).toString(36)),t},unstable_isNewReconciler:!1},zs={readContext:fa,useCallback:Os,useContext:fa,useEffect:xs,useImperativeHandle:Ps,useLayoutEffect:Ns,useMemo:Ms,useReducer:ys,useRef:Ts,useState:function(){return ys(gs)},useDebugValue:Ds,useDeferredValue:function(e){var t=ys(gs),n=t[0],r=t[1];return xs(function(){var t=is.transition;is.transition=1;try{r(e)}finally{is.transition=t}},[e]),n},useTransition:function(){var e=ys(gs)[0];return[Ts().current,e]},useMutableSource:Es,useOpaqueIdentifier:function(){return ys(gs)[0]},unstable_isNewReconciler:!1},js={readContext:fa,useCallback:Os,useContext:fa,useEffect:xs,useImperativeHandle:Ps,useLayoutEffect:Ns,useMemo:Ms,useReducer:vs,useRef:Ts,useState:function(){return vs(gs)},useDebugValue:Ds,useDeferredValue:function(e){var t=vs(gs),n=t[0],r=t[1];return xs(function(){var t=is.transition;is.transition=1;try{r(e)}finally{is.transition=t}},[e]),n},useTransition:function(){var e=vs(gs)[0];return[Ts().current,e]},useMutableSource:Es,useOpaqueIdentifier:function(){return vs(gs)[0]},unstable_isNewReconciler:!1},Bs=A.ReactCurrentOwner,Ws=!1;function qs(e,t,n,r){t.child=null===e?Oa(t,null,n,r):Da(t,e.child,n,r)}function Hs(e,t,n,r,i){n=n.render;var a=t.ref;return da(t,i),r=fs(e,t,n,r,a,i),null===e||Ws?(t.flags|=1,qs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,fo(e,t,i))}function Ks(e,t,n,r,i,a){if(null===e){var s=n.type;return"function"!=typeof s||Zl(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=tc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,$s(e,t,s,r,i,a))}return s=e.child,0===(i&a)&&(i=s.memoizedProps,(n=null!==(n=n.compare)?n:wr)(i,r)&&e.ref===t.ref)?fo(e,t,a):(t.flags|=1,(e=ec(s,r)).ref=t.ref,e.return=t,t.child=e)}function $s(e,t,n,r,i,a){if(null!==e&&wr(e.memoizedProps,r)&&e.ref===t.ref){if(Ws=!1,0===(a&i))return t.lanes=e.lanes,fo(e,t,a);16384&e.flags&&(Ws=!0)}return Ys(e,t,n,r,a)}function Gs(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(4&t.mode){if(!(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Nl(t,e),null;t.memoizedState={baseLanes:0},Nl(t,null!==a?a.baseLanes:n)}else t.memoizedState={baseLanes:0},Nl(t,n);else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Nl(t,r);return qs(e,t,i,n),t.child}function Qs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function Ys(e,t,n,r,i){var a=Ii(n)?ki:bi.current;return a=_i(t,a),da(t,i),n=fs(e,t,n,r,a,i),null===e||Ws?(t.flags|=1,qs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,fo(e,t,i))}function Js(e,t,n,r,i){if(Ii(n)){var a=!0;Ai(t)}else a=!1;if(da(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),Sa(t,n,r),Aa(t,n,r,i),r=!0;else if(null===e){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,c=n.contextType;"object"==typeof c&&null!==c?c=fa(c):c=_i(t,c=Ii(n)?ki:bi.current);var u=n.getDerivedStateFromProps,h="function"==typeof u||"function"==typeof s.getSnapshotBeforeUpdate;h||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(o!==r||l!==c)&&Ca(t,s,r,c),pa=!1;var d=t.memoizedState;s.state=d,ba(t,r,s,i),l=t.memoizedState,o!==r||d!==l||Ei.current||pa?("function"==typeof u&&(_a(t,n,u,r),l=t.memoizedState),(o=pa||Ta(t,n,o,r,d,l,c))?(h||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4)):("function"==typeof s.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=o):("function"==typeof s.componentDidMount&&(t.flags|=4),r=!1)}else{s=t.stateNode,ga(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:ia(t.type,o),s.props=c,h=t.pendingProps,d=s.context,"object"==typeof(l=n.contextType)&&null!==l?l=fa(l):l=_i(t,l=Ii(n)?ki:bi.current);var f=n.getDerivedStateFromProps;(u="function"==typeof f||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(o!==h||d!==l)&&Ca(t,s,r,l),pa=!1,d=t.memoizedState,s.state=d,ba(t,r,s,i);var p=t.memoizedState;o!==h||d!==p||Ei.current||pa?("function"==typeof f&&(_a(t,n,f,r),p=t.memoizedState),(c=pa||Ta(t,n,c,r,d,p,l))?(u||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(r,p,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!=typeof s.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=l,r=c):("function"!=typeof s.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),r=!1)}return Xs(e,t,n,r,a,i)}function Xs(e,t,n,r,i,a){Qs(e,t);var s=!!(64&t.flags);if(!r&&!s)return i&&xi(t,n,!1),fo(e,t,a);r=t.stateNode,Bs.current=t;var o=s&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&s?(t.child=Da(t,e.child,null,a),t.child=Da(t,null,o,a)):qs(e,t,o,a),t.memoizedState=r.state,i&&xi(t,n,!0),t.child}function Zs(e){var t=e.stateNode;t.pendingContext?Si(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Si(0,t.context,!1),za(e,t.containerInfo)}var eo,to,no,ro,io={dehydrated:null,retryLane:0};function ao(e,t,n){var r,i=t.pendingProps,a=qa.current,s=!1;return(r=!!(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&!!(2&a)),r?(s=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===i.fallback||!0===i.unstable_avoidThisFallback||(a|=1),vi(qa,1&a),null===e?(void 0!==i.fallback&&Ja(t),e=i.children,a=i.fallback,s?(e=so(t,e,a,n),t.child.memoizedState={baseLanes:n},t.memoizedState=io,e):"number"==typeof i.unstable_expectedLoadTime?(e=so(t,e,a,n),t.child.memoizedState={baseLanes:n},t.memoizedState=io,t.lanes=33554432,e):((n=rc({mode:"visible",children:e},t.mode,n,null)).return=t,t.child=n)):(e.memoizedState,s?(i=lo(e,t,i.children,i.fallback,n),s=t.child,a=e.child.memoizedState,s.memoizedState=null===a?{baseLanes:n}:{baseLanes:a.baseLanes|n},s.childLanes=e.childLanes&~n,t.memoizedState=io,i):(n=oo(e,t,i.children,n),t.memoizedState=null,n))}function so(e,t,n,r){var i=e.mode,a=e.child;return t={mode:"hidden",children:t},2&i||null===a?a=rc(t,i,0,null):(a.childLanes=0,a.pendingProps=t),n=nc(n,i,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function oo(e,t,n,r){var i=e.child;return e=i.sibling,n=ec(i,{mode:"visible",children:n}),!(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function lo(e,t,n,r,i){var a=t.mode,s=e.child;e=s.sibling;var o={mode:"hidden",children:n};return 2&a||t.child===s?n=ec(s,o):((n=t.child).childLanes=0,n.pendingProps=o,null!==(s=n.lastEffect)?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null),null!==e?r=ec(e,r):(r=nc(r,a,i,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function co(e,t){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),ha(e.return,t)}function uo(e,t,n,r,i,a){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=a)}function ho(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(qs(e,t,r.children,n),2&(r=qa.current))r=1&r|2,t.flags|=64;else{if(null!==e&&64&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&co(e,n);else if(19===e.tag)co(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(vi(qa,r),2&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Ha(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),uo(t,!1,i,n,a,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Ha(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}uo(t,!0,n,null,a,t.lastEffect);break;case"together":uo(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function fo(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Qo|=t.lanes,0!==(n&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(f(153));if(null!==t.child){for(n=ec(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=ec(e,e.pendingProps)).return=t;n.sibling=null}return t.child}return null}function po(e,t){if(!Ga)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function mo(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:case 17:return Ii(t.type)&&Ti(),null;case 3:return ja(),yi(Ei),yi(bi),ns(),(r=t.stateNode).pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Za(t)?t.flags|=4:r.hydrate||(t.flags|=256)),to(t),null;case 5:Wa(t);var i=Va(Ua.current);if(n=t.type,null!==e&&null!=t.stateNode)no(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(null===t.stateNode)throw Error(f(166));return null}if(e=Va(La.current),Za(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ai]=t,r[si]=a,n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(e=0;e<Dr.length;e++)Fr(Dr[e],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":oe(r,a),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Fr("invalid",r);break;case"textarea":me(r,a),Fr("invalid",r)}for(var s in Re(n,a),e=null,a)a.hasOwnProperty(s)&&(i=a[s],"children"===s?"string"==typeof i?r.textContent!==i&&(e=["children",i]):"number"==typeof i&&r.textContent!==""+i&&(e=["children",""+i]):m.hasOwnProperty(s)&&null!=i&&"onScroll"===s&&Fr("scroll",r));switch(n){case"input":re(r),ue(r,a,!0);break;case"textarea":re(r),ye(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=$r)}r=e,t.updateQueue=r,null!==r&&(t.flags|=4)}else{switch(s=9===i.nodeType?i:i.ownerDocument,e===ve&&(e=be(n)),e===ve?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ai]=t,e[si]=r,eo(e,t,!1,!1),t.stateNode=e,s=Pe(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)Fr(Dr[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":oe(e,r),i=se(e,r),Fr("invalid",e);break;case"option":i=de(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=o({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":me(e,r),i=pe(e,r),Fr("invalid",e);break;default:i=r}Re(n,i);var l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];"style"===a?xe(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&Ie(e,c):"children"===a?"string"==typeof c?("textarea"!==n||""!==c)&&Te(e,c):"number"==typeof c&&Te(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(m.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Fr("scroll",e):null!=c&&C(e,a,c,s))}switch(n){case"input":re(e),ue(e,r,!1);break;case"textarea":re(e),ye(e);break;case"option":null!=r.value&&e.setAttribute("value",""+te(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?fe(e,!!r.multiple,a,!1):null!=r.defaultValue&&fe(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=$r)}Yr(n,r)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)ro(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(f(166));n=Va(Ua.current),Va(La.current),Za(t)?(r=t.stateNode,n=t.memoizedProps,r[ai]=t,r.nodeValue!==n&&(t.flags|=4)):((r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ai]=t,t.stateNode=r)}return null;case 13:return yi(qa),r=t.memoizedState,64&t.flags?(t.lanes=n,t):(r=null!==r,n=!1,null===e?void 0!==t.memoizedProps.fallback&&Za(t):n=null!==e.memoizedState,r&&!n&&2&t.mode&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||1&qa.current?0===Ko&&(Ko=3):(0!==Ko&&3!==Ko||(Ko=4),null===jo||!(134217727&Qo)&&!(134217727&Yo)||Sl(jo,Wo))),(r||n)&&(t.flags|=4),null);case 4:return ja(),to(t),null===e&&Vr(t.stateNode.containerInfo),null;case 10:return ua(t),null;case 19:if(yi(qa),null===(r=t.memoizedState))return null;if(a=!!(64&t.flags),null===(s=r.rendering))if(a)po(r,!1);else{if(0!==Ko||null!==e&&64&e.flags)for(e=t.child;null!==e;){if(null!==(s=Ha(e))){for(t.flags|=64,po(r,!1),null!==(a=s.updateQueue)&&(t.updateQueue=a,t.flags|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return vi(qa,1&qa.current|2),t.child}e=e.sibling}null!==r.tail&&Yi()>el&&(t.flags|=64,a=!0,po(r,!1),t.lanes=33554432)}else{if(!a)if(null!==(e=Ha(s))){if(t.flags|=64,a=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),po(r,!0),null===r.tail&&"hidden"===r.tailMode&&!s.alternate&&!Ga)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Yi()-r.renderingStartTime>el&&1073741824!==n&&(t.flags|=64,a=!0,po(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=r.last)?n.sibling=s:t.child=s,r.last=s)}return null!==r.tail?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Yi(),n.sibling=null,t=qa.current,vi(qa,a?1&t|2:1&t),n):null;case 23:case 24:return Rl(),null!==e&&null!==e.memoizedState!=(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==r.mode&&(t.flags|=4),null}throw Error(f(156,t.tag))}function go(e){switch(e.tag){case 1:Ii(e.type)&&Ti();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(ja(),yi(Ei),yi(bi),ns(),64&(t=e.flags))throw Error(f(285));return e.flags=-4097&t|64,e;case 5:return Wa(e),null;case 13:return yi(qa),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return yi(qa),null;case 4:return ja(),null;case 10:return ua(e),null;case 23:case 24:return Rl(),null;default:return null}}function yo(e,t){try{var n="",r=t;do{n+=Z(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i}}function vo(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}eo=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},to=function(){},no=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Va(La.current);var a,s=null;switch(n){case"input":i=se(e,i),r=se(e,r),s=[];break;case"option":i=de(e,i),r=de(e,r),s=[];break;case"select":i=o({},i,{value:void 0}),r=o({},r,{value:void 0}),s=[];break;case"textarea":i=pe(e,i),r=pe(e,r),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=$r)}for(u in Re(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(m.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(s=s||[]).push(u,c)):"children"===u?"string"!=typeof c&&"number"!=typeof c||(s=s||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(m.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),s||l===c||(s=[])):"object"==typeof c&&null!==c&&c.$$typeof===B?c.toString():(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}},ro=function(e,t,n,r){n!==r&&(t.flags|=4)};var wo="function"==typeof WeakMap?WeakMap:Map;function bo(e,t,n){(n=ya(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,al=r),vo(0,t)},n}function Eo(e,t,n){(n=ya(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return vo(0,t),r(i)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===sl?sl=new Set([this]):sl.add(this),vo(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}var ko="function"==typeof WeakSet?WeakSet:Set;function _o(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Gl(e,t)}else t.current=null}function Io(e,t){switch(t.tag){case 0:case 11:case 15:case 22:case 5:case 6:case 4:case 17:return;case 1:if(256&t.flags&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:ia(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&ei(t.stateNode.containerInfo))}throw Error(f(163))}function To(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(!(3&~e.tag)){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var i=e;r=i.next,4&(i=i.tag)&&1&i&&(Hl(n,e),ql(n,e)),e=r}while(e!==t)}return;case 1:return e=n.stateNode,4&n.flags&&(null===t?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:ia(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=n.updateQueue)&&Ea(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:case 1:e=n.child.stateNode}Ea(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.flags&&Yr(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:case 19:case 17:case 20:case 21:case 23:case 24:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&xt(n)))))}throw Error(f(163))}function So(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)"function"==typeof(r=r.style).setProperty?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=null!=i&&i.hasOwnProperty("display")?i.display:null,r.style.display=Ae("display",i)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Co(e,t){if(Ri&&"function"==typeof Ri.onCommitFiberUnmount)try{Ri.onCommitFiberUnmount(Ni,t)}catch(e){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,void 0!==i)if(4&r)Hl(t,n);else{r=t;try{i()}catch(e){Gl(r,e)}}n=n.next}while(n!==e)}break;case 1:if(_o(t),"function"==typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){Gl(t,e)}break;case 5:_o(t);break;case 4:Do(e,t)}}function Ao(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function xo(e){return 5===e.tag||3===e.tag||4===e.tag}function No(e){e:{for(var t=e.return;null!==t;){if(xo(t))break e;t=t.return}throw Error(f(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(f(161))}16&n.flags&&(Te(t,""),n.flags&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||xo(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.flags)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.flags)){n=n.stateNode;break e}}r?Ro(e,n,t):Po(e,n,t)}function Ro(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=$r));else if(4!==r&&null!==(e=e.child))for(Ro(e,t,n),e=e.sibling;null!==e;)Ro(e,t,n),e=e.sibling}function Po(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(Po(e,t,n),e=e.sibling;null!==e;)Po(e,t,n),e=e.sibling}function Do(e,t){for(var n,r,i=t,a=!1;;){if(!a){a=i.return;e:for(;;){if(null===a)throw Error(f(160));switch(n=a.stateNode,a.tag){case 5:r=!1;break e;case 3:case 4:n=n.containerInfo,r=!0;break e}a=a.return}a=!0}if(5===i.tag||6===i.tag){e:for(var s=e,o=i,l=o;;)if(Co(s,l),null!==l.child&&4!==l.tag)l.child.return=l,l=l.child;else{if(l===o)break e;for(;null===l.sibling;){if(null===l.return||l.return===o)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}r?(s=n,o=i.stateNode,8===s.nodeType?s.parentNode.removeChild(o):s.removeChild(o)):n.removeChild(i.stateNode)}else if(4===i.tag){if(null!==i.child){n=i.stateNode.containerInfo,r=!0,i.child.return=i,i=i.child;continue}}else if(Co(e,i),null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break;for(;null===i.sibling;){if(null===i.return||i.return===t)return;4===(i=i.return).tag&&(a=!1)}i.sibling.return=i.return,i=i.sibling}}function Oo(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{!(3&~r.tag)&&(e=r.destroy,r.destroy=void 0,void 0!==e&&e()),r=r.next}while(r!==n)}return;case 1:case 12:case 17:return;case 5:if(null!=(n=t.stateNode)){r=t.memoizedProps;var i=null!==e?e.memoizedProps:r;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,null!==a){for(n[si]=r,"input"===e&&"radio"===r.type&&null!=r.name&&le(n,r),Pe(e,i),t=Pe(e,r),i=0;i<a.length;i+=2){var s=a[i],o=a[i+1];"style"===s?xe(n,o):"dangerouslySetInnerHTML"===s?Ie(n,o):"children"===s?Te(n,o):C(n,s,o,t)}switch(e){case"input":ce(n,r);break;case"textarea":ge(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(a=r.value)?fe(n,!!r.multiple,a,!1):e!==!!r.multiple&&(null!=r.defaultValue?fe(n,!!r.multiple,r.defaultValue,!0):fe(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(f(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((n=t.stateNode).hydrate&&(n.hydrate=!1,xt(n.containerInfo)));case 13:return null!==t.memoizedState&&(Zo=Yi(),So(t.child,!0)),void Mo(t);case 19:return void Mo(t);case 23:case 24:return void So(t,null!==t.memoizedState)}throw Error(f(163))}function Mo(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new ko),t.forEach(function(t){var r=Yl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Lo(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var Fo=Math.ceil,Uo=A.ReactCurrentDispatcher,Vo=A.ReactCurrentOwner,zo=0,jo=null,Bo=null,Wo=0,qo=0,Ho=gi(0),Ko=0,$o=null,Go=0,Qo=0,Yo=0,Jo=0,Xo=null,Zo=0,el=1/0;function tl(){el=Yi()+500}var nl,rl=null,il=!1,al=null,sl=null,ol=!1,ll=null,cl=90,ul=[],hl=[],dl=null,fl=0,pl=null,ml=-1,gl=0,yl=0,vl=null,wl=!1;function bl(){return 48&zo?Yi():-1!==ml?ml:ml=Yi()}function El(e){if(!(2&(e=e.mode)))return 1;if(!(4&e))return 99===Ji()?1:2;if(0===gl&&(gl=Go),0!==ra.transition){0!==yl&&(yl=null!==Xo?Xo.pendingLanes:0),e=gl;var t=4186112&~yl;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=Ji(),4&zo&&98===e?e=$t(12,gl):e=$t(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),gl),e}function kl(e,t,n){if(50<fl)throw fl=0,pl=null,Error(f(185));if(null===(e=_l(e,t)))return null;Yt(e,t,n),e===jo&&(Yo|=t,4===Ko&&Sl(e,Wo));var r=Ji();1===t?8&zo&&!(48&zo)?Cl(e):(Il(e,n),0===zo&&(tl(),ta())):(!(4&zo)||98!==r&&99!==r||(null===dl?dl=new Set([e]):dl.add(e)),Il(e,n)),Xo=e}function _l(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function Il(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Jt(s),l=1<<o,c=a[o];if(-1===c){if(0===(l&r)||0!==(l&i)){c=t,qt(l);var u=Wt;a[o]=10<=u?c+250:6<=u?c+5e3:-1}}else c<=t&&(e.expiredLanes|=l);s&=~l}if(r=Ht(e,e===jo?Wo:0),t=Wt,0===r)null!==n&&(n!==qi&&Oi(n),e.callbackNode=null,e.callbackPriority=0);else{if(null!==n){if(e.callbackPriority===t)return;n!==qi&&Oi(n)}15===t?(n=Cl.bind(null,e),null===Ki?(Ki=[n],$i=Di(Vi,na)):Ki.push(n),n=qi):14===t?n=ea(99,Cl.bind(null,e)):(n=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(f(358,e))}}(t),n=ea(n,Tl.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Tl(e){if(ml=-1,yl=gl=0,48&zo)throw Error(f(327));var t=e.callbackNode;if(Wl()&&e.callbackNode!==t)return null;var n=Ht(e,e===jo?Wo:0);if(0===n)return null;var r=n,i=zo;zo|=16;var a=Ol();for(jo===e&&Wo===r||(tl(),Pl(e,r));;)try{Fl();break}catch(t){Dl(e,t)}if(ca(),Uo.current=a,zo=i,null!==Bo?r=0:(jo=null,Wo=0,r=Ko),0!==(Go&Yo))Pl(e,0);else if(0!==r){if(2===r&&(zo|=64,e.hydrate&&(e.hydrate=!1,ei(e.containerInfo)),0!==(n=Kt(e))&&(r=Ml(e,n))),1===r)throw t=$o,Pl(e,0),Sl(e,n),Il(e,Yi()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(f(345));case 2:case 5:zl(e);break;case 3:if(Sl(e,n),(62914560&n)===n&&10<(r=Zo+500-Yi())){if(0!==Ht(e,0))break;if(((i=e.suspendedLanes)&n)!==n){bl(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xr(zl.bind(null,e),r);break}zl(e);break;case 4:if(Sl(e,n),(4186112&n)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-Jt(n);a=1<<s,(s=r[s])>i&&(i=s),n&=~a}if(n=i,10<(n=(120>(n=Yi()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Fo(n/1960))-n)){e.timeoutHandle=Xr(zl.bind(null,e),n);break}zl(e);break;default:throw Error(f(329))}}return Il(e,Yi()),e.callbackNode===t?Tl.bind(null,e):null}function Sl(e,t){for(t&=~Jo,t&=~Yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Jt(t),r=1<<n;e[n]=-1,t&=~r}}function Cl(e){if(48&zo)throw Error(f(327));if(Wl(),e===jo&&0!==(e.expiredLanes&Wo)){var t=Wo,n=Ml(e,t);0!==(Go&Yo)&&(n=Ml(e,t=Ht(e,t)))}else n=Ml(e,t=Ht(e,0));if(0!==e.tag&&2===n&&(zo|=64,e.hydrate&&(e.hydrate=!1,ei(e.containerInfo)),0!==(t=Kt(e))&&(n=Ml(e,t))),1===n)throw n=$o,Pl(e,0),Sl(e,t),Il(e,Yi()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,zl(e),Il(e,Yi()),null}function Al(e,t){var n=zo;zo|=1;try{return e(t)}finally{0===(zo=n)&&(tl(),ta())}}function xl(e,t){var n=zo;zo&=-2,zo|=8;try{return e(t)}finally{0===(zo=n)&&(tl(),ta())}}function Nl(e,t){vi(Ho,qo),qo|=t,Go|=t}function Rl(){qo=Ho.current,yi(Ho)}function Pl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,Zr(n)),null!==Bo)for(n=Bo.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ti();break;case 3:ja(),yi(Ei),yi(bi),ns();break;case 5:Wa(r);break;case 4:ja();break;case 13:case 19:yi(qa);break;case 10:ua(r);break;case 23:case 24:Rl()}n=n.return}jo=e,Bo=ec(e.current,null),Wo=qo=Go=t,Ko=0,$o=null,Jo=Yo=Qo=0}function Dl(e,t){for(;;){var n=Bo;try{if(ca(),rs.current=Us,cs){for(var r=ss.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}cs=!1}if(as=0,ls=os=ss=null,us=!1,Vo.current=null,null===n||null===n.return){Ko=1,$o=t,Bo=null;break}e:{var a=e,s=n.return,o=n,l=t;if(t=Wo,o.flags|=2048,o.firstEffect=o.lastEffect=null,null!==l&&"object"==typeof l&&"function"==typeof l.then){var c=l;if(!(2&o.mode)){var u=o.alternate;u?(o.updateQueue=u.updateQueue,o.memoizedState=u.memoizedState,o.lanes=u.lanes):(o.updateQueue=null,o.memoizedState=null)}var h=!!(1&qa.current),d=s;do{var f;if(f=13===d.tag){var p=d.memoizedState;if(null!==p)f=null!==p.dehydrated;else{var m=d.memoizedProps;f=void 0!==m.fallback&&(!0!==m.unstable_avoidThisFallback||!h)}}if(f){var g=d.updateQueue;if(null===g){var y=new Set;y.add(c),d.updateQueue=y}else g.add(c);if(!(2&d.mode)){if(d.flags|=64,o.flags|=16384,o.flags&=-2981,1===o.tag)if(null===o.alternate)o.tag=17;else{var v=ya(-1,1);v.tag=2,va(o,v)}o.lanes|=1;break e}l=void 0,o=t;var w=a.pingCache;if(null===w?(w=a.pingCache=new wo,l=new Set,w.set(c,l)):void 0===(l=w.get(c))&&(l=new Set,w.set(c,l)),!l.has(o)){l.add(o);var b=Ql.bind(null,a,c,o);c.then(b,b)}d.flags|=4096,d.lanes=t;break e}d=d.return}while(null!==d);l=Error((ee(o.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==Ko&&(Ko=2),l=yo(l,o),d=s;do{switch(d.tag){case 3:a=l,d.flags|=4096,t&=-t,d.lanes|=t,wa(d,bo(0,a,t));break e;case 1:a=l;var E=d.type,k=d.stateNode;if(!(64&d.flags||"function"!=typeof E.getDerivedStateFromError&&(null===k||"function"!=typeof k.componentDidCatch||null!==sl&&sl.has(k)))){d.flags|=4096,t&=-t,d.lanes|=t,wa(d,Eo(d,a,t));break e}}d=d.return}while(null!==d)}Vl(n)}catch(e){t=e,Bo===n&&null!==n&&(Bo=n=n.return);continue}break}}function Ol(){var e=Uo.current;return Uo.current=Us,null===e?Us:e}function Ml(e,t){var n=zo;zo|=16;var r=Ol();for(jo===e&&Wo===t||Pl(e,t);;)try{Ll();break}catch(t){Dl(e,t)}if(ca(),zo=n,Uo.current=r,null!==Bo)throw Error(f(261));return jo=null,Wo=0,Ko}function Ll(){for(;null!==Bo;)Ul(Bo)}function Fl(){for(;null!==Bo&&!Mi();)Ul(Bo)}function Ul(e){var t=nl(e.alternate,e,qo);e.memoizedProps=e.pendingProps,null===t?Vl(e):Bo=t,Vo.current=null}function Vl(e){var t=e;do{var n=t.alternate;if(e=t.return,2048&t.flags){if(null!==(n=go(t)))return n.flags&=2047,void(Bo=n);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}else{if(null!==(n=mo(n,t,qo)))return void(Bo=n);if(24!==(n=t).tag&&23!==n.tag||null===n.memoizedState||1073741824&qo||!(4&n.mode)){for(var r=0,i=n.child;null!==i;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}null!==e&&!(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}if(null!==(t=t.sibling))return void(Bo=t);Bo=t=e}while(null!==t);0===Ko&&(Ko=5)}function zl(e){var t=Ji();return Zi(99,jl.bind(null,e,t)),null}function jl(e,t){do{Wl()}while(null!==ll);if(48&zo)throw Error(f(327));var n=e.finishedWork;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(f(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,a=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,o=e.expirationTimes;0<a;){var l=31-Jt(a),c=1<<l;i[l]=0,s[l]=-1,o[l]=-1,a&=~c}if(null!==dl&&!(24&r)&&dl.has(e)&&dl.delete(e),e===jo&&(Bo=jo=null,Wo=0),1<n.flags?null!==n.lastEffect?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,null!==r){if(i=zo,zo|=32,Vo.current=null,Gr=nn,Ir(s=_r())){if("selectionStart"in s)o={start:s.selectionStart,end:s.selectionEnd};else e:if(o=(o=s.ownerDocument)&&o.defaultView||window,(c=o.getSelection&&o.getSelection())&&0!==c.rangeCount){o=c.anchorNode,a=c.anchorOffset,l=c.focusNode,c=c.focusOffset;try{o.nodeType,l.nodeType}catch(e){o=null;break e}var u=0,h=-1,d=-1,p=0,m=0,g=s,y=null;t:for(;;){for(var v;g!==o||0!==a&&3!==g.nodeType||(h=u+a),g!==l||0!==c&&3!==g.nodeType||(d=u+c),3===g.nodeType&&(u+=g.nodeValue.length),null!==(v=g.firstChild);)y=g,g=v;for(;;){if(g===s)break t;if(y===o&&++p===a&&(h=u),y===l&&++m===c&&(d=u),null!==(v=g.nextSibling))break;y=(g=y).parentNode}g=v}o=-1===h||-1===d?null:{start:h,end:d}}else o=null;o=o||{start:0,end:0}}else o=null;Qr={focusedElem:s,selectionRange:o},nn=!1,vl=null,wl=!1,rl=r;do{try{Bl()}catch(e){if(null===rl)throw Error(f(330));Gl(rl,e),rl=rl.nextEffect}}while(null!==rl);vl=null,rl=r;do{try{for(s=e;null!==rl;){var w=rl.flags;if(16&w&&Te(rl.stateNode,""),128&w){var b=rl.alternate;if(null!==b){var E=b.ref;null!==E&&("function"==typeof E?E(null):E.current=null)}}switch(1038&w){case 2:No(rl),rl.flags&=-3;break;case 6:No(rl),rl.flags&=-3,Oo(rl.alternate,rl);break;case 1024:rl.flags&=-1025;break;case 1028:rl.flags&=-1025,Oo(rl.alternate,rl);break;case 4:Oo(rl.alternate,rl);break;case 8:Do(s,o=rl);var k=o.alternate;Ao(o),null!==k&&Ao(k)}rl=rl.nextEffect}}catch(e){if(null===rl)throw Error(f(330));Gl(rl,e),rl=rl.nextEffect}}while(null!==rl);if(E=Qr,b=_r(),w=E.focusedElem,s=E.selectionRange,b!==w&&w&&w.ownerDocument&&kr(w.ownerDocument.documentElement,w)){null!==s&&Ir(w)&&(b=s.start,void 0===(E=s.end)&&(E=b),"selectionStart"in w?(w.selectionStart=b,w.selectionEnd=Math.min(E,w.value.length)):(E=(b=w.ownerDocument||document)&&b.defaultView||window).getSelection&&(E=E.getSelection(),o=w.textContent.length,k=Math.min(s.start,o),s=void 0===s.end?k:Math.min(s.end,o),!E.extend&&k>s&&(o=s,s=k,k=o),o=Er(w,k),a=Er(w,s),o&&a&&(1!==E.rangeCount||E.anchorNode!==o.node||E.anchorOffset!==o.offset||E.focusNode!==a.node||E.focusOffset!==a.offset)&&((b=b.createRange()).setStart(o.node,o.offset),E.removeAllRanges(),k>s?(E.addRange(b),E.extend(a.node,a.offset)):(b.setEnd(a.node,a.offset),E.addRange(b))))),b=[];for(E=w;E=E.parentNode;)1===E.nodeType&&b.push({element:E,left:E.scrollLeft,top:E.scrollTop});for("function"==typeof w.focus&&w.focus(),w=0;w<b.length;w++)(E=b[w]).element.scrollLeft=E.left,E.element.scrollTop=E.top}nn=!!Gr,Qr=Gr=null,e.current=n,rl=r;do{try{for(w=e;null!==rl;){var _=rl.flags;if(36&_&&To(w,rl.alternate,rl),128&_){b=void 0;var I=rl.ref;if(null!==I){var T=rl.stateNode;rl.tag,b=T,"function"==typeof I?I(b):I.current=b}}rl=rl.nextEffect}}catch(e){if(null===rl)throw Error(f(330));Gl(rl,e),rl=rl.nextEffect}}while(null!==rl);rl=null,Hi(),zo=i}else e.current=n;if(ol)ol=!1,ll=e,cl=t;else for(rl=r;null!==rl;)t=rl.nextEffect,rl.nextEffect=null,8&rl.flags&&((_=rl).sibling=null,_.stateNode=null),rl=t;if(0===(r=e.pendingLanes)&&(sl=null),1===r?e===pl?fl++:(fl=0,pl=e):fl=0,n=n.stateNode,Ri&&"function"==typeof Ri.onCommitFiberRoot)try{Ri.onCommitFiberRoot(Ni,n,void 0,!(64&~n.current.flags))}catch(e){}if(Il(e,Yi()),il)throw il=!1,e=al,al=null,e;return 8&zo||ta(),null}function Bl(){for(;null!==rl;){var e=rl.alternate;wl||null===vl||(8&rl.flags?ot(rl,vl)&&(wl=!0):13===rl.tag&&Lo(e,rl)&&ot(rl,vl)&&(wl=!0));var t=rl.flags;256&t&&Io(e,rl),!(512&t)||ol||(ol=!0,ea(97,function(){return Wl(),null})),rl=rl.nextEffect}}function Wl(){if(90!==cl){var e=97<cl?97:cl;return cl=90,Zi(e,Kl)}return!1}function ql(e,t){ul.push(t,e),ol||(ol=!0,ea(97,function(){return Wl(),null}))}function Hl(e,t){hl.push(t,e),ol||(ol=!0,ea(97,function(){return Wl(),null}))}function Kl(){if(null===ll)return!1;var e=ll;if(ll=null,48&zo)throw Error(f(331));var t=zo;zo|=32;var n=hl;hl=[];for(var r=0;r<n.length;r+=2){var i=n[r],a=n[r+1],s=i.destroy;if(i.destroy=void 0,"function"==typeof s)try{s()}catch(e){if(null===a)throw Error(f(330));Gl(a,e)}}for(n=ul,ul=[],r=0;r<n.length;r+=2){i=n[r],a=n[r+1];try{var o=i.create;i.destroy=o()}catch(e){if(null===a)throw Error(f(330));Gl(a,e)}}for(o=e.current.firstEffect;null!==o;)e=o.nextEffect,o.nextEffect=null,8&o.flags&&(o.sibling=null,o.stateNode=null),o=e;return zo=t,ta(),!0}function $l(e,t,n){va(e,t=bo(0,t=yo(n,t),1)),t=bl(),null!==(e=_l(e,1))&&(Yt(e,1,t),Il(e,t))}function Gl(e,t){if(3===e.tag)$l(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){$l(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===sl||!sl.has(r))){var i=Eo(n,e=yo(t,e),1);if(va(n,i),i=bl(),null!==(n=_l(n,1)))Yt(n,1,i),Il(n,i);else if("function"==typeof r.componentDidCatch&&(null===sl||!sl.has(r)))try{r.componentDidCatch(t,e)}catch(e){}break}}n=n.return}}function Ql(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=bl(),e.pingedLanes|=e.suspendedLanes&n,jo===e&&(Wo&n)===n&&(4===Ko||3===Ko&&(62914560&Wo)===Wo&&500>Yi()-Zo?Pl(e,0):Jo|=n),Il(e,t)}function Yl(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(2&(t=e.mode)?4&t?(0===gl&&(gl=Go),0===(t=Gt(62914560&~gl))&&(t=4194304)):t=99===Ji()?1:2:t=1),n=bl(),null!==(e=_l(e,t))&&(Yt(e,t,n),Il(e,n))}function Jl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Xl(e,t,n,r){return new Jl(e,t,n,r)}function Zl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function ec(e,t){var n=e.alternate;return null===n?((n=Xl(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function tc(e,t,n,r,i,a){var s=2;if(r=e,"function"==typeof e)Zl(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case R:return nc(n.children,i,a,t);case W:s=8,i|=16;break;case P:s=8,i|=1;break;case D:return(e=Xl(12,n,t,8|i)).elementType=D,e.type=D,e.lanes=a,e;case F:return(e=Xl(13,n,t,i)).type=F,e.elementType=F,e.lanes=a,e;case U:return(e=Xl(19,n,t,i)).elementType=U,e.lanes=a,e;case q:return rc(n,i,a,t);case H:return(e=Xl(24,n,t,i)).elementType=H,e.lanes=a,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case O:s=10;break e;case M:s=9;break e;case L:s=11;break e;case V:s=14;break e;case z:s=16,r=null;break e;case j:s=22;break e}throw Error(f(130,null==e?e:typeof e,""))}return(t=Xl(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function nc(e,t,n,r){return(e=Xl(7,e,r,t)).lanes=n,e}function rc(e,t,n,r){return(e=Xl(23,e,r,t)).elementType=q,e.lanes=n,e}function ic(e,t,n){return(e=Xl(6,e,null,t)).lanes=n,e}function ac(e,t,n){return(t=Xl(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sc(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Qt(0),this.expirationTimes=Qt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qt(0),this.mutableSourceEagerHydrationData=null}function oc(e,t,n,r){var i=t.current,a=bl(),s=El(i);e:if(n){t:{if(rt(n=n._reactInternals)!==n||1!==n.tag)throw Error(f(170));var o=n;do{switch(o.tag){case 3:o=o.stateNode.context;break t;case 1:if(Ii(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break t}}o=o.return}while(null!==o);throw Error(f(171))}if(1===n.tag){var l=n.type;if(Ii(l)){n=Ci(n,l,o);break e}}n=o}else n=wi;return null===t.context?t.context=n:t.pendingContext=n,(t=ya(a,s)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),va(i,t),kl(i,s,a),s}function lc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function cc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function uc(e,t){cc(e,t),(e=e.alternate)&&cc(e,t)}function hc(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null;if(n=new sc(e,t,null!=n&&!0===n.hydrate),t=Xl(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,ma(t),e[oi]=n.current,Vr(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){var i=(t=r[e])._getVersion;i=i(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}function dc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function fc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a._internalRoot;if("function"==typeof i){var o=i;i=function(){var e=lc(s);o.call(e)}}oc(t,s,e,i)}else{if(a=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new hc(e,0,t?{hydrate:!0}:void 0)}(n,r),s=a._internalRoot,"function"==typeof i){var l=i;i=function(){var e=lc(s);l.call(e)}}xl(function(){oc(t,s,e,i)})}return lc(s)}function pc(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!dc(t))throw Error(f(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:N,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}nl=function(e,t,n){var r=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||Ei.current)Ws=!0;else{if(0===(n&r)){switch(Ws=!1,t.tag){case 3:Zs(t),es();break;case 5:Ba(t);break;case 1:Ii(t.type)&&Ai(t);break;case 4:za(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;vi(aa,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!==(n&t.child.childLanes)?ao(e,t,n):(vi(qa,1&qa.current),null!==(t=fo(e,t,n))?t.sibling:null);vi(qa,1&qa.current);break;case 19:if(r=0!==(n&t.childLanes),64&e.flags){if(r)return ho(e,t,n);t.flags|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),vi(qa,qa.current),r)break;return null;case 23:case 24:return t.lanes=0,Gs(e,t,n)}return fo(e,t,n)}Ws=!!(16384&e.flags)}else Ws=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=_i(t,bi.current),da(t,n),i=fs(null,t,r,e,i,n),t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ii(r)){var a=!0;Ai(t)}else a=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,ma(t);var s=r.getDerivedStateFromProps;"function"==typeof s&&_a(t,r,s,e),i.updater=Ia,t.stateNode=i,i._reactInternals=t,Aa(t,r,e,n),t=Xs(null,t,r,!0,a,n)}else t.tag=0,qs(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=(a=i._init)(i._payload),t.type=i,a=t.tag=function(e){if("function"==typeof e)return Zl(e)?1:0;if(null!=e){if((e=e.$$typeof)===L)return 11;if(e===V)return 14}return 2}(i),e=ia(i,e),a){case 0:t=Ys(null,t,i,e,n);break e;case 1:t=Js(null,t,i,e,n);break e;case 11:t=Hs(null,t,i,e,n);break e;case 14:t=Ks(null,t,i,ia(i.type,e),r,n);break e}throw Error(f(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ys(e,t,r,i=t.elementType===r?i:ia(r,i),n);case 1:return r=t.type,i=t.pendingProps,Js(e,t,r,i=t.elementType===r?i:ia(r,i),n);case 3:if(Zs(t),r=t.updateQueue,null===e||null===r)throw Error(f(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,ga(e,t),ba(t,r,null,n),(r=t.memoizedState.element)===i)es(),t=fo(e,t,n);else{if((a=(i=t.stateNode).hydrate)&&($a=ti(t.stateNode.containerInfo.firstChild),Ka=t,a=Ga=!0),a){if(null!=(e=i.mutableSourceEagerHydrationData))for(i=0;i<e.length;i+=2)(a=e[i])._workInProgressVersionPrimary=e[i+1],ts.push(a);for(n=Oa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|1024,n=n.sibling}else qs(e,t,r,n),es();t=t.child}return t;case 5:return Ba(t),null===e&&Ja(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,Jr(r,i)?s=null:null!==a&&Jr(r,a)&&(t.flags|=16),Qs(e,t),qs(e,t,s,n),t.child;case 6:return null===e&&Ja(t),null;case 13:return ao(e,t,n);case 4:return za(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Da(t,null,r,n):qs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Hs(e,t,r,i=t.elementType===r?i:ia(r,i),n);case 7:return qs(e,t,t.pendingProps,n),t.child;case 8:case 12:return qs(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value;var o=t.type._context;if(vi(aa,o._currentValue),o._currentValue=a,null!==s)if(o=s.value,0===(a=yr(o,a)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(o,a):1073741823))){if(s.children===i.children&&!Ei.current){t=fo(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r&&0!==(c.observedBits&a)){1===o.tag&&((c=ya(-1,n&-n)).tag=2,va(o,c)),o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),ha(o.return,n),l.lanes|=n;break}c=c.next}}else s=10===o.tag&&o.type===t.type?null:o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}qs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(a=t.pendingProps).children,da(t,n),r=r(i=fa(i,a.unstable_observedBits)),t.flags|=1,qs(e,t,r,n),t.child;case 14:return a=ia(i=t.type,t.pendingProps),Ks(e,t,i,a=ia(i.type,a),r,n);case 15:return $s(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ia(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Ii(r)?(e=!0,Ai(t)):e=!1,da(t,n),Sa(t,r,i),Aa(t,r,i,n),Xs(null,t,r,!0,e,n);case 19:return ho(e,t,n);case 23:case 24:return Gs(e,t,n)}throw Error(f(156,t.tag))},hc.prototype.render=function(e){oc(e,this._internalRoot,null,null)},hc.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;oc(null,e,null,function(){t[oi]=null})},lt=function(e){13===e.tag&&(kl(e,4,bl()),uc(e,4))},ct=function(e){13===e.tag&&(kl(e,67108864,bl()),uc(e,67108864))},ut=function(e){if(13===e.tag){var t=bl(),n=El(e);kl(e,n,t),uc(e,n)}},ht=function(e,t){return t()},Oe=function(e,t,n){switch(t){case"input":if(ce(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=di(r);if(!i)throw Error(f(90));ie(r),ce(r,i)}}}break;case"textarea":ge(e,n);break;case"select":null!=(t=n.value)&&fe(e,!!n.multiple,t,!1)}},ze=Al,je=function(e,t,n,r,i){var a=zo;zo|=4;try{return Zi(98,e.bind(null,t,n,r,i))}finally{0===(zo=a)&&(tl(),ta())}},Be=function(){!(49&zo)&&(function(){if(null!==dl){var e=dl;dl=null,e.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Il(e,Yi())})}ta()}(),Wl())},We=function(e,t){var n=zo;zo|=2;try{return e(t)}finally{0===(zo=n)&&(tl(),ta())}};var mc={Events:[ui,hi,di,Ue,Ve,Wl,{current:!1}]},gc={findFiberByHostInstance:ci,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},yc={bundleType:gc.bundleType,version:gc.version,rendererPackageName:gc.rendererPackageName,rendererConfig:gc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=st(e))?null:e.stateNode},findFiberByHostInstance:gc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Ni=vc.inject(yc),Ri=vc}catch(_e){}}var wc={__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:mc,createPortal:pc,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(f(188));throw Error(f(268,Object.keys(e)))}return e=null===(e=st(t))?null:e.stateNode},flushSync:function(e,t){var n=zo;if(48&n)return e(t);zo|=1;try{if(e)return Zi(99,e.bind(null,t))}finally{zo=n,ta()}},hydrate:function(e,t,n){if(!dc(t))throw Error(f(200));return fc(null,e,t,!0,n)},render:function(e,t,n){if(!dc(t))throw Error(f(200));return fc(null,e,t,!1,n)},unmountComponentAtNode:function(e){if(!dc(e))throw Error(f(40));return!!e._reactRootContainer&&(xl(function(){fc(null,null,e,!1,function(){e._reactRootContainer=null,e[oi]=null})}),!0)},unstable_batchedUpdates:Al,unstable_createPortal:function(e,t){return pc(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){if(!dc(n))throw Error(f(200));if(null==e||void 0===e._reactInternals)throw Error(f(38));return fc(e,t,n,!1,r)},version:"17.0.2"},bc=0,Ec={__interactionsRef:null,__subscriberRef:null,unstable_clear:function(e){return e()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++bc},unstable_subscribe:function(){},unstable_trace:function(e,t,n){return n()},unstable_unsubscribe:function(){},unstable_wrap:function(e){return e}};n(function(e,t){}),n(function(e){e.exports=Ec}),n(function(e,t){});var kc,_c,Ic=n(function(e){!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=wc}),Tc=e({__proto__:null,default:Ic},[Ic]);
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Sc(){return Sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sc.apply(this,arguments)}(_c=kc||(kc={})).Pop="POP",_c.Push="PUSH",_c.Replace="REPLACE";const Cc="popstate";function Ac(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,s=i.history,o=kc.Pop,l=null,c=u();null==c&&(c=0,s.replaceState(Sc({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function h(){o=kc.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:o,location:m.location,delta:t})}function d(e,t){o=kc.Push;let r=Pc(m.location,e,t);n&&n(r,e),c=u()+1;let h=Rc(r,c),d=m.createHref(r);try{s.pushState(h,"",d)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;i.location.assign(d)}a&&l&&l({action:o,location:m.location,delta:1})}function f(e,t){o=kc.Replace;let r=Pc(m.location,e,t);n&&n(r,e),c=u();let i=Rc(r,c),h=m.createHref(r);s.replaceState(i,"",h),a&&l&&l({action:o,location:m.location,delta:0})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:Dc(e);return n=n.replace(/ $/,"%20"),xc(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let m={get action(){return o},get location(){return e(i,s)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cc,h),l=e,()=>{i.removeEventListener(Cc,h),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:d,replace:f,go:e=>s.go(e)};return m}(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return Pc("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:Dc(t)},null,e)}function xc(e,t){if(!1===e||null==e)throw new Error(t)}function Nc(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function Rc(e,t){return{usr:e.state,key:e.key,idx:t}}function Pc(e,t,n,r){return void 0===n&&(n=null),Sc({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?Oc(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Dc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Oc(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var Mc,Lc;function Fc(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let i="string"==typeof t?Oc(t):t,a=Jc(i.pathname||"/",n);if(null==a)return null;let s=Uc(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(s);let o=null;for(let e=0;null==o&&e<s.length;++e){let t=Yc(a);o=Gc(s[e],t,r)}return o}(e,t,n,!1)}function Uc(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let s={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};s.relativePath.startsWith("/")&&(xc(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),s.relativePath=s.relativePath.slice(r.length));let o=iu([r,s.relativePath]),l=n.concat(s);e.children&&e.children.length>0&&(xc(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+o+'".'),Uc(e.children,t,l,o)),(null!=e.path||e.index)&&t.push({path:o,score:$c(o,e.index),routesMeta:l})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of Vc(e.path))i(e,t,n);else i(e,t)}),t}function Vc(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let s=Vc(r.join("/")),o=[];return o.push(...s.map(e=>""===e?a:[a,e].join("/"))),i&&o.push(...s),o.map(t=>e.startsWith("/")&&""===t?"/":t)}(Lc=Mc||(Mc={})).data="data",Lc.deferred="deferred",Lc.redirect="redirect",Lc.error="error";const zc=/^:[\w-]+$/,jc=3,Bc=2,Wc=1,qc=10,Hc=-2,Kc=e=>"*"===e;function $c(e,t){let n=e.split("/"),r=n.length;return n.some(Kc)&&(r+=Hc),t&&(r+=Bc),n.filter(e=>!Kc(e)).reduce((e,t)=>e+(zc.test(t)?jc:""===t?Wc:qc),r)}function Gc(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},a="/",s=[];for(let e=0;e<r.length;++e){let o=r[e],l=e===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=Qc({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},c),h=o.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=Qc({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),s.push({params:i,pathname:iu([a,u.pathname]),pathnameBase:au(iu([a,u.pathnameBase])),route:h}),"/"!==u.pathnameBase&&(a=iu([a,u.pathnameBase]))}return s}function Qc(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);Nc("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=o[n]||"";s=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=o[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:s,pattern:e}}function Yc(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return Nc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Jc(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}const Xc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Zc(e,t){void 0===t&&(t="/");let n,{pathname:r,search:i="",hash:a=""}="string"==typeof e?Oc(e):e;if(r)if(s=r,Xc.test(s))n=r;else{if(r.includes("//")){let e=r;r=r.replace(/\/\/+/g,"/"),Nc(!1,"Pathnames cannot have embedded double slashes - normalizing "+e+" -> "+r)}n=r.startsWith("/")?eu(r.substring(1),"/"):eu(r,t)}else n=t;var s;return{pathname:n,search:su(i),hash:ou(a)}}function eu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function tu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function nu(e,t){let n=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function ru(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=Oc(e):(i=Sc({},e),xc(!i.pathname||!i.pathname.includes("?"),tu("?","pathname","search",i)),xc(!i.pathname||!i.pathname.includes("#"),tu("#","pathname","hash",i)),xc(!i.search||!i.search.includes("#"),tu("#","search","hash",i)));let a,s=""===e||""===i.pathname,o=s?"/":i.pathname;if(null==o)a=n;else{let e=t.length-1;if(!r&&o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=Zc(i,a),c=o&&"/"!==o&&o.endsWith("/"),u=(s||"."===o)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const iu=e=>e.join("/").replace(/\/\/+/g,"/"),au=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),su=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ou=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function lu(){return lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lu.apply(this,arguments)}const cu=c.createContext(null),uu=c.createContext(null),hu=c.createContext(null),du=c.createContext(null),fu=c.createContext({outlet:null,matches:[],isDataRoute:!1}),pu=c.createContext(null);function mu(){return null!=c.useContext(du)}function gu(){return mu()||xc(!1),c.useContext(du).location}function yu(e){c.useContext(hu).static||c.useLayoutEffect(e)}function vu(){let{isDataRoute:e}=c.useContext(fu);return e?function(){let{router:e}=function(){let e=c.useContext(cu);return e||xc(!1),e}(Su.UseNavigateStable),t=Au(Cu.UseNavigateStable),n=c.useRef(!1);return yu(()=>{n.current=!0}),c.useCallback(function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,lu({fromRouteId:t},i)))},[e,t])}():function(){mu()||xc(!1);let e=c.useContext(cu),{basename:t,future:n,navigator:r}=c.useContext(hu),{matches:i}=c.useContext(fu),{pathname:a}=gu(),s=JSON.stringify(nu(i,n.v7_relativeSplatPath)),o=c.useRef(!1);return yu(()=>{o.current=!0}),c.useCallback(function(n,i){if(void 0===i&&(i={}),!o.current)return;if("number"==typeof n)return void r.go(n);let l=ru(n,JSON.parse(s),a,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:iu([t,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)},[t,r,s,a,e])}()}function wu(){let{matches:e}=c.useContext(fu),t=e[e.length-1];return t?t.params:{}}function bu(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=c.useContext(hu),{matches:i}=c.useContext(fu),{pathname:a}=gu(),s=JSON.stringify(nu(i,r.v7_relativeSplatPath));return c.useMemo(()=>ru(e,JSON.parse(s),a,"path"===n),[e,s,a,n])}function Eu(e,t){return function(e,t,n,r){mu()||xc(!1);let{navigator:i}=c.useContext(hu),{matches:a}=c.useContext(fu),s=a[a.length-1],o=s?s.params:{};!s||s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u,h=gu();if(t){var d;let e="string"==typeof t?Oc(t):t;"/"===l||(null==(d=e.pathname)?void 0:d.startsWith(l))||xc(!1),u=e}else u=h;let f=u.pathname||"/",p=f;if("/"!==l){let e=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=Fc(e,{pathname:p}),g=function(e,t,n,r){var i;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===r&&(r=null);if(null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=r)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,o=null==(i=n)?void 0:i.errors;if(null!=o){let e=s.findIndex(e=>e.route.id&&void 0!==(null==o?void 0:o[e.route.id]));e>=0||xc(!1),s=s.slice(0,Math.min(s.length,e+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<s.length;e++){let t=s[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(u=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&void 0===e[t.route.id]&&(!r||void 0===r[t.route.id]);if(t.route.lazy||i){l=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight((e,r,i)=>{let a,h=!1,d=null,f=null;var p;n&&(a=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||_u,l&&(u<0&&0===i?(p="route-fallback",!1||xu[p]||(xu[p]=!0),h=!0,f=null):u===i&&(h=!0,f=r.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,i+1)),g=()=>{let t;return t=a?d:h?f:r.route.Component?c.createElement(r.route.Component,null):r.route.element?r.route.element:e,c.createElement(Tu,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?c.createElement(Iu,{location:n.location,revalidation:n.revalidation,component:d,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:iu([l,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:iu([l,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);if(t&&g)return c.createElement(du.Provider,{value:{location:lu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:kc.Pop}},g);return g}(e,t)}function ku(){let e=function(){var e;let t=c.useContext(pu),n=function(){let e=c.useContext(uu);return e||xc(!1),e}(Cu.UseRouteError),r=Au(Cu.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),n?c.createElement("pre",{style:r},n):null,null)}const _u=c.createElement(ku,null);class Iu extends c.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?c.createElement(fu.Provider,{value:this.props.routeContext},c.createElement(pu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tu(e){let{routeContext:t,match:n,children:r}=e,i=c.useContext(cu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(fu.Provider,{value:t},r)}var Su=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Su||{}),Cu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cu||{});function Au(e){let t=function(){let e=c.useContext(fu);return e||xc(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||xc(!1),n.route.id}const xu={};function Nu(e){xc(!1)}function Ru(e){let{basename:t="/",children:n=null,location:r,navigationType:i=kc.Pop,navigator:a,static:s=!1,future:o}=e;mu()&&xc(!1);let l=t.replace(/^\/*/,"/"),u=c.useMemo(()=>({basename:l,navigator:a,static:s,future:lu({v7_relativeSplatPath:!1},o)}),[l,o,a,s]);"string"==typeof r&&(r=Oc(r));let{pathname:h="/",search:d="",hash:f="",state:p=null,key:m="default"}=r,g=c.useMemo(()=>{let e=Jc(h,l);return null==e?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[l,h,d,f,p,m,i]);return null==g?null:c.createElement(hu.Provider,{value:u},c.createElement(du.Provider,{children:n,value:g}))}function Pu(e){let{children:t,location:n}=e;return Eu(Du(t),n)}function Du(e,t){void 0===t&&(t=[]);let n=[];return c.Children.forEach(e,(e,r)=>{if(!c.isValidElement(e))return;let i=[...t,r];if(e.type===c.Fragment)return void n.push.apply(n,Du(e.props.children,i));e.type!==Nu&&xc(!1),e.props.index&&e.props.children&&xc(!1);let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Du(e.props.children,i)),n.push(a)}),n}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ou(){return Ou=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ou.apply(this,arguments)}u.startTransition,new Promise(()=>{});const Mu=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}const Lu=u.startTransition;Tc.flushSync;function Fu(e){let{basename:t,children:n,future:r,window:i}=e,a=c.useRef();null==a.current&&(a.current=Ac({window:i,v5Compat:!0}));let s=a.current,[o,l]=c.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},h=c.useCallback(e=>{u&&Lu?Lu(()=>l(e)):l(e)},[l,u]);return c.useLayoutEffect(()=>s.listen(h),[s,h]),c.useEffect(()=>{return null==(e=r)||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),void(t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation));var e,t},[r]),c.createElement(Ru,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:r})}u.useId;const Uu="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Vu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zu=c.forwardRef(function(e,t){let n,{onClick:r,relative:i,reloadDocument:a,replace:s,state:o,target:l,to:u,preventScrollReset:h,viewTransition:d}=e,f=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Mu),{basename:p}=c.useContext(hu),m=!1;if("string"==typeof u&&Vu.test(u)&&(n=u,Uu))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=Jc(t.pathname,p);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:m=!0}catch(e){}let g=function(e,t){let{relative:n}=void 0===t?{}:t;mu()||xc(!1);let{basename:r,navigator:i}=c.useContext(hu),{hash:a,pathname:s,search:o}=bu(e,{relative:n}),l=s;return"/"!==r&&(l="/"===s?r:iu([r,s])),i.createHref({pathname:l,search:o,hash:a})}(u,{relative:i}),y=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:s,viewTransition:o}=void 0===t?{}:t,l=vu(),u=gu(),h=bu(e,{relative:s});return c.useCallback(t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:Dc(u)===Dc(h);l(e,{replace:n,state:i,preventScrollReset:a,relative:s,viewTransition:o})}},[u,l,h,r,i,n,e,a,s,o])}(u,{replace:s,state:o,target:l,preventScrollReset:h,relative:i,viewTransition:d});return c.createElement("a",Ou({},f,{href:n||g,onClick:m||a?r:function(e){r&&r(e),e.defaultPrevented||y(e)},ref:t,target:l}))});var ju,Bu,Wu,qu;(Bu=ju||(ju={})).UseScrollRestoration="useScrollRestoration",Bu.UseSubmit="useSubmit",Bu.UseSubmitFetcher="useSubmitFetcher",Bu.UseFetcher="useFetcher",Bu.useViewTransitionState="useViewTransitionState",(qu=Wu||(Wu={})).UseFetcher="useFetcher",qu.UseFetchers="useFetchers",qu.UseScrollRestoration="useScrollRestoration";const Hu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ku={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=i>>2,u=(3&i)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;o||(d=64,a||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Hu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==s||null==o)throw new $u;const l=i<<2|a>>4;if(r.push(l),64!==s){const e=a<<4&240|s>>2;if(r.push(e),64!==o){const e=s<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class $u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gu=function(e){return function(e){const t=Hu(e);return Ku.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Qu=function(e){try{return Ku.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */
const Yu=()=>
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Ju=()=>{try{return Yu()||(()=>{if("undefined"==typeof process)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Qu(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Xu=e=>Ju()?.emulatorHosts?.[e],Zu=()=>Ju()?.config,eh=e=>Ju()?.[`_${e}`];
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
class th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
function nh(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function rh(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ih(){return!function(){const e=Ju()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ah(){try{return"object"==typeof indexedDB}catch(e){return!1}}function sh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}class oh extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,oh.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lh.prototype.create)}}class lh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?function(e,t){return e.replace(ch,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",s=`${this.serviceName}: ${a} (${r}).`;return new oh(r,s,n)}}const ch=/\{\$([^}]+)}/g;function uh(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(hh(n)&&hh(a)){if(!uh(n,a))return!1}else if(n!==a)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function hh(e){return null!==e&&"object"==typeof e}
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
 */function dh(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function fh(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function ph(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class mh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=gh),void 0===r.error&&(r.error=gh),void 0===r.complete&&(r.complete=gh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gh(){}
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
 */function yh(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
 */function vh(e){return e&&e._delegate?e._delegate:e}
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
 */function wh(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bh(e){return(await fetch(e,{credentials:"include"})).ok}class Eh{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const kh="[DEFAULT]";
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
 */class _h{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new th;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:kh})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=kh){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=kh){return this.instances.has(e)}getOptions(e=kh){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===kh?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=kh){return this.component?this.component.multipleInstances?e:kh:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ih{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _h(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var Th,Sh;(Sh=Th||(Th={}))[Sh.DEBUG=0]="DEBUG",Sh[Sh.VERBOSE=1]="VERBOSE",Sh[Sh.INFO=2]="INFO",Sh[Sh.WARN=3]="WARN",Sh[Sh.ERROR=4]="ERROR",Sh[Sh.SILENT=5]="SILENT";const Ch={debug:Th.DEBUG,verbose:Th.VERBOSE,info:Th.INFO,warn:Th.WARN,error:Th.ERROR,silent:Th.SILENT},Ah=Th.INFO,xh={[Th.DEBUG]:"log",[Th.VERBOSE]:"log",[Th.INFO]:"info",[Th.WARN]:"warn",[Th.ERROR]:"error"},Nh=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=xh[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Rh{constructor(e){this.name=e,this._logLevel=Ah,this._logHandler=Nh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Th))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ch[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Th.DEBUG,...e),this._logHandler(this,Th.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Th.VERBOSE,...e),this._logHandler(this,Th.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Th.INFO,...e),this._logHandler(this,Th.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Th.WARN,...e),this._logHandler(this,Th.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Th.ERROR,...e),this._logHandler(this,Th.ERROR,...e)}}let Ph,Dh;const Oh=new WeakMap,Mh=new WeakMap,Lh=new WeakMap,Fh=new WeakMap,Uh=new WeakMap;let Vh={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Mh.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Lh.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bh(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function zh(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Dh||(Dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Wh(this),t),Bh(Oh.get(this))}:function(...t){return Bh(e.apply(Wh(this),t))}:function(t,...n){const r=e.call(Wh(this),t,...n);return Lh.set(r,t.sort?t.sort():[t]),Bh(r)}}function jh(e){return"function"==typeof e?zh(e):(e instanceof IDBTransaction&&function(e){if(Mh.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Mh.set(e,t)}(e),t=e,(Ph||(Ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Vh):e);var t}function Bh(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(Bh(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&Oh.set(t,e)}).catch(()=>{}),Uh.set(t,e),t}(e);if(Fh.has(e))return Fh.get(e);const t=jh(e);return t!==e&&(Fh.set(e,t),Uh.set(t,e)),t}const Wh=e=>Uh.get(e);function qh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(e,t),o=Bh(s);return r&&s.addEventListener("upgradeneeded",e=>{r(Bh(s.result),e.oldVersion,e.newVersion,Bh(s.transaction),e)}),n&&s.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}const Hh=["get","getKey","getAll","getAllKeys","count"],Kh=["put","add","delete","clear"],$h=new Map;function Gh(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if($h.get(t))return $h.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Kh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Hh.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let s=a.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&a.done]))[0]};return $h.set(t,a),a}Vh=(e=>({...e,get:(t,n,r)=>Gh(t,n)||e.get(t,n,r),has:(t,n)=>!!Gh(t,n)||e.has(t,n)}))(Vh);
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
 */
class Qh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Yh="@firebase/app",Jh="0.14.11",Xh=new Rh("@firebase/app"),Zh="@firebase/app-compat",ed="@firebase/analytics-compat",td="@firebase/analytics",nd="@firebase/app-check-compat",rd="@firebase/app-check",id="@firebase/auth",ad="@firebase/auth-compat",sd="@firebase/database",od="@firebase/data-connect",ld="@firebase/database-compat",cd="@firebase/functions",ud="@firebase/functions-compat",hd="@firebase/installations",dd="@firebase/installations-compat",fd="@firebase/messaging",pd="@firebase/messaging-compat",md="@firebase/performance",gd="@firebase/performance-compat",yd="@firebase/remote-config",vd="@firebase/remote-config-compat",wd="@firebase/storage",bd="@firebase/storage-compat",Ed="@firebase/firestore",kd="@firebase/ai",_d="@firebase/firestore-compat",Id="firebase",Td="[DEFAULT]",Sd={[Yh]:"fire-core",[Zh]:"fire-core-compat",[td]:"fire-analytics",[ed]:"fire-analytics-compat",[rd]:"fire-app-check",[nd]:"fire-app-check-compat",[id]:"fire-auth",[ad]:"fire-auth-compat",[sd]:"fire-rtdb",[od]:"fire-data-connect",[ld]:"fire-rtdb-compat",[cd]:"fire-fn",[ud]:"fire-fn-compat",[hd]:"fire-iid",[dd]:"fire-iid-compat",[fd]:"fire-fcm",[pd]:"fire-fcm-compat",[md]:"fire-perf",[gd]:"fire-perf-compat",[yd]:"fire-rc",[vd]:"fire-rc-compat",[wd]:"fire-gcs",[bd]:"fire-gcs-compat",[Ed]:"fire-fst",[_d]:"fire-fst-compat",[kd]:"fire-vertex","fire-js":"fire-js",[Id]:"fire-js-all"},Cd=new Map,Ad=new Map,xd=new Map;function Nd(e,t){try{e.container.addComponent(t)}catch(n){Xh.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Rd(e){const t=e.name;if(xd.has(t))return Xh.debug(`There were multiple attempts to register component ${t}.`),!1;xd.set(t,e);for(const t of Cd.values())Nd(t,e);for(const t of Ad.values())Nd(t,e);return!0}function Pd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Dd(e){return null!=e&&void 0!==e.settings}
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
 */const Od=new lh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
 */
class Md{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Eh("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Od.create("app-deleted",{appName:this._name})}}
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
 */const Ld="12.12.0";function Fd(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:Td,automaticDataCollectionEnabled:!0,...t},i=r.name;if("string"!=typeof i||!i)throw Od.create("bad-app-name",{appName:String(i)});if(n||(n=Zu()),!n)throw Od.create("no-options");const a=Cd.get(i);if(a){if(uh(n,a.options)&&uh(r,a.config))return a;throw Od.create("duplicate-app",{appName:i})}const s=new Ih(i);for(const e of xd.values())s.addComponent(e);const o=new Md(n,r,s);return Cd.set(i,o),o}function Ud(e=Td){const t=Cd.get(e);if(!t&&e===Td&&Zu())return Fd();if(!t)throw Od.create("no-app",{appName:e});return t}function Vd(e,t,n){let r=Sd[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Xh.warn(e.join(" "))}Rd(new Eh(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
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
 */const zd="firebase-heartbeat-store";let jd=null;function Bd(){return jd||(jd=qh("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(zd)}catch(e){console.warn(e)}}}).catch(e=>{throw Od.create("idb-open",{originalErrorMessage:e.message})})),jd}async function Wd(e,t){try{const n=(await Bd()).transaction(zd,"readwrite"),r=n.objectStore(zd);await r.put(t,qd(e)),await n.done}catch(e){if(e instanceof oh)Xh.warn(e.message);else{const t=Od.create("idb-set",{originalErrorMessage:e?.message});Xh.warn(t.message)}}}function qd(e){return`${e.name}!${e.options.appId}`}
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
 */class Hd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $d(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Kd();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Xh.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Kd(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Gd(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Gu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Xh.warn(e),""}}}function Kd(){return(new Date).toISOString().substring(0,10)}class $d{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!ah()&&sh().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Bd()).transaction(zd),n=await t.objectStore(zd).get(qd(e));return await t.done,n}catch(e){if(e instanceof oh)Xh.warn(e.message);else{const t=Od.create("idb-get",{originalErrorMessage:e?.message});Xh.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Wd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Gd(e){return Gu(JSON.stringify({version:2,heartbeats:e})).length}var Qd;Qd="",Rd(new Eh("platform-logger",e=>new Qh(e),"PRIVATE")),Rd(new Eh("heartbeat",e=>new Hd(e),"PRIVATE")),Vd(Yh,Jh,Qd),Vd(Yh,Jh,"esm2020"),Vd("fire-js","");
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
Vd("firebase","12.12.1","app");
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
 */
const Yd={PHONE:"phone",TOTP:"totp"},Jd={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Xd={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},Zd={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},ef={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function tf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nf=
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
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}},rf=tf,af=new lh("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),sf={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"},of=new Rh("@firebase/auth");function lf(e,...t){of.logLevel<=Th.ERROR&&of.error(`Auth (${Ld}): ${e}`,...t)}
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
 */function cf(e,...t){throw pf(e,...t)}function uf(e,...t){return pf(e,...t)}function hf(e,t,n){const r={...rf(),[t]:n};return new lh("auth","Firebase",r).create(t,{appName:e.name})}function df(e){return hf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ff(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&cf(e,"argument-error"),hf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pf(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return af.create(e,...t)}function mf(e,t,...n){if(!e)throw pf(t,...n)}function gf(e){const t="INTERNAL ASSERTION FAILED: "+e;throw lf(t),new Error(t)}function yf(e,t){e||gf(t)}
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
 */function vf(){return"undefined"!=typeof self&&self.location?.href||""}function wf(){return"http:"===bf()||"https:"===bf()}function bf(){return"undefined"!=typeof self&&self.location?.protocol||null}
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
class Ef{constructor(e,t){this.shortDelay=e,this.longDelay=t,yf(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nh())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(wf()||rh()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function kf(e,t){yf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class _f{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void gf("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void gf("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void gf("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const If={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Tf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Sf=new Ef(3e4,6e4);
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
 */function Cf(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Af(e,t,n,r,i={}){return xf(e,i,async()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const s=dh({key:e.config.apiKey,...a}).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:o,...i};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&wh(e.emulatorConfig.host)&&(l.credentials="include"),_f.fetch()(await Rf(e,e.config.apiHost,n,s),l)})}async function xf(e,t,n){e._canInitEmulator=!1;const r={...If,...t};try{const t=new Df(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Of(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const t=i.ok?a.errorMessage:a.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Of(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw Of(e,"email-already-in-use",a);if("USER_DISABLED"===n)throw Of(e,"user-disabled",a);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw hf(e,o,s);cf(e,o)}}catch(t){if(t instanceof oh)throw t;cf(e,"network-request-failed",{message:String(t)})}}async function Nf(e,t,n,r,i={}){const a=await Af(e,t,n,r,i);return"mfaPendingCredential"in a&&cf(e,"multi-factor-auth-required",{_serverResponse:a}),a}async function Rf(e,t,n,r){const i=`${t}${n}?${r}`,a=e,s=a.config.emulator?kf(e.config,i):`${e.config.apiScheme}://${i}`;if(Tf.includes(n)&&(await a._persistenceManagerAvailable,"COOKIE"===a._getPersistenceType())){return a._getPersistence()._getFinalTarget(s).toString()}return s}function Pf(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Df{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(uf(this.auth,"network-request-failed")),Sf.get())})}}function Of(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=uf(e,t,r);return i.customData._tokenResponse=n,i}
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
 */function Mf(e){return void 0!==e&&void 0!==e.getResponse}function Lf(e){return void 0!==e&&void 0!==e.enterprise}class Ff{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Pf(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
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
 */async function Uf(e,t){return Af(e,"GET","/v2/recaptchaConfig",Cf(e,t))}
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
 */async function Vf(e,t){return Af(e,"POST","/v1/accounts:lookup",t)}
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
 */function zf(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function jf(e,t=!1){return vh(e).getIdToken(t)}async function Bf(e,t=!1){const n=vh(e),r=await n.getIdToken(t),i=qf(r);mf(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"==typeof i.firebase?i.firebase:void 0,s=a?.sign_in_provider;return{claims:i,token:r,authTime:zf(Wf(i.auth_time)),issuedAtTime:zf(Wf(i.iat)),expirationTime:zf(Wf(i.exp)),signInProvider:s||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Wf(e){return 1e3*Number(e)}function qf(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return lf("JWT malformed, contained fewer than 3 sections"),null;try{const e=Qu(n);return e?JSON.parse(e):(lf("Failed to decode base64 JWT payload"),null)}catch(e){return lf("Caught error parsing JWT payload as JSON",e?.toString()),null}}function Hf(e){const t=qf(e);return mf(t,"internal-error"),mf(void 0!==t.exp,"internal-error"),mf(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Kf(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof oh&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class $f{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}}
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
 */class Gf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zf(this.lastLoginAt),this.creationTime=zf(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Qf(e){const t=e.auth,n=await e.getIdToken(),r=await Kf(e,Vf(t,{idToken:n}));mf(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const a=i.providerUserInfo?.length?Jf(i.providerUserInfo):[],s=(o=e.providerData,l=a,[...o.filter(e=>!l.some(t=>t.providerId===e.providerId)),...l]);var o,l;const c=e.isAnonymous,u=!(e.email&&i.passwordHash||s?.length),h=!!c&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Gf(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(e,d)}async function Yf(e){const t=vh(e);await Qf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Jf(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
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
class Xf{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){mf(e.idToken,"internal-error"),mf(void 0!==e.idToken,"internal-error"),mf(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Hf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){mf(0!==e.length,"internal-error");const t=Hf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(mf(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await xf(e,{},async()=>{const n=dh({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=await Rf(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();s["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:s,body:n};return e.emulatorConfig&&wh(e.emulatorConfig.host)&&(o.credentials="include"),_f.fetch()(a,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new Xf;return n&&(mf("string"==typeof n,"internal-error",{appName:e}),a.refreshToken=n),r&&(mf("string"==typeof r,"internal-error",{appName:e}),a.accessToken=r),i&&(mf("number"==typeof i,"internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xf,this.toJSON())}_performRefresh(){return gf("not implemented")}}
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
 */function Zf(e,t){mf("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ep{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new $f(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Gf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Kf(this,this.stsTokenManager.getToken(this.auth,e));return mf(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bf(this,e)}reload(){return Yf(this)}_assign(e){this!==e&&(mf(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ep({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){mf(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Qf(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dd(this.auth.app))return Promise.reject(df(this.auth));const e=await this.getIdToken();return await Kf(this,async function(e,t){return Af(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,s=t.tenantId??void 0,o=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:d,providerData:f,stsTokenManager:p}=t;mf(u&&p,e,"internal-error");const m=Xf.fromJSON(this.name,p);mf("string"==typeof u,e,"internal-error"),Zf(n,e.name),Zf(r,e.name),mf("boolean"==typeof h,e,"internal-error"),mf("boolean"==typeof d,e,"internal-error"),Zf(i,e.name),Zf(a,e.name),Zf(s,e.name),Zf(o,e.name),Zf(l,e.name),Zf(c,e.name);const g=new ep({uid:u,auth:e,email:r,emailVerified:h,displayName:n,isAnonymous:d,photoURL:a,phoneNumber:i,tenantId:s,stsTokenManager:m,createdAt:l,lastLoginAt:c});return f&&Array.isArray(f)&&(g.providerData=f.map(e=>({...e}))),o&&(g._redirectEventId=o),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new Xf;r.updateFromServerResponse(t);const i=new ep({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Qf(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];mf(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?Jf(r.providerUserInfo):[],a=!(r.email&&r.passwordHash||i?.length),s=new Xf;s.updateFromIdToken(n);const o=new ep({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:a}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Gf(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||i?.length)};return Object.assign(o,l),o}}
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
 */const tp=new Map;function np(e){yf(e instanceof Function,"Expected a class definition");let t=tp.get(e);return t?(yf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,tp.set(e,t),t)}
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
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rp.type="NONE";const ip=rp;
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
 */function ap(e,t,n){return`firebase:${e}:${t}:${n}`}class sp{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ap(this.userKey,r.apiKey,i),this.fullPersistenceKey=ap("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Vf(this.auth,{idToken:e}).catch(()=>{});return t?ep._fromGetAccountInfoResponse(this.auth,t,e):null}return ep._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new sp(np(ip),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||np(ip);const a=ap(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(a);if(t){let r;if("string"==typeof t){const n=await Vf(e,{idToken:t}).catch(()=>{});if(!n)break;r=await ep._fromGetAccountInfoResponse(e,n,t)}else r=ep._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch{}const o=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length?(i=o[0],s&&await i._set(a,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(a)}catch{}})),new sp(i,e,n)):new sp(i,e,n)}}
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
 */function op(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fp(t))return"Blackberry";if(pp(t))return"Webos";if(cp(t))return"Safari";if((t.includes("chrome/")||up(t))&&!t.includes("edge/"))return"Chrome";if(dp(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function lp(e=nh()){return/firefox\//i.test(e)}function cp(e=nh()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function up(e=nh()){return/crios\//i.test(e)}function hp(e=nh()){return/iemobile/i.test(e)}function dp(e=nh()){return/android/i.test(e)}function fp(e=nh()){return/blackberry/i.test(e)}function pp(e=nh()){return/webos/i.test(e)}function mp(e=nh()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function gp(){return function(){const e=nh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function yp(e=nh()){return mp(e)||dp(e)||pp(e)||fp(e)||/windows phone/i.test(e)||hp(e)}
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
 */function vp(e,t=[]){let n;switch(e){case"Browser":n=op(nh());break;case"Worker":n=`${op(nh())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ld}/${r}`}
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
 */class wp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e?.message})}}}
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
 */class bp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
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
 */class Ep{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _p(this),this.idTokenSubscription=new _p(this),this.beforeStateQueue=new wp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=af,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=np(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await sp.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Vf(this,{idToken:e}),n=await ep._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Dd(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,a=await this.tryRedirectSignIn(e);t&&t!==i||!a?.user||(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return mf(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qf(e)}catch(e){if("auth/network-request-failed"!==e?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dd(this.app))return Promise.reject(df(this));const t=e?vh(e):null;return t&&mf(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&mf(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dd(this.app)?Promise.reject(df(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dd(this.app)?Promise.reject(df(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(np(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Af(e,"GET","/v2/passwordPolicy",Cf(e,t))}
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
 */(this),t=new bp(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new lh("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Af(e,"POST","/v2/accounts:revokeToken",Cf(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&np(e)||this._popupRedirectResolver;mf(t,this,"argument-error"),this.redirectPersistenceManager=await sp.create(this,[np(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let a=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(mf(s,this,"internal-error"),s.then(()=>{a||i(this.currentUser)}),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{a=!0,i()}}{const n=e.addObserver(t);return()=>{a=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return mf(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Dd(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){of.logLevel<=Th.WARN&&of.warn(`Auth (${Ld}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function kp(e){return vh(e)}class _p{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new mh(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return mf(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let Ip={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tp(e){return Ip.loadJS(e)}function Sp(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
 */const Cp=1e12;class Ap{constructor(e){this.auth=e,this.counter=Cp,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Rp(e,this.auth.name,t||{})),this.counter++,n}reset(e){const t=e||Cp;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||Cp;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||Cp;return this._widgets.get(t)?.execute(),""}}class xp{constructor(){this.enterprise=new Np}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Np{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Rp{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;mf(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const Pp="NO_RECAPTCHA";class Dp{constructor(e){this.type="recaptcha-enterprise",this.auth=kp(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;Lf(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(Pp)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new xp).execute("siteKey",{action:"verify"})}return new Promise((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{Uf(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Ff(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})})(this.auth).then(i=>{if(!t&&Lf(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=Ip.recaptchaEnterpriseScript;0!==t.length&&(t+=i),Tp(t).then(()=>{n(i,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function Op(e,t,n,r=!1,i=!1){const a=new Dp(e);let s;if(i)s=Pp;else try{s=await a.verify(n)}catch(e){s=await a.verify(n,!0)}const o={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in o){const e=o.phoneEnrollmentInfo.phoneNumber,t=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const e=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mp(e,t,n,r,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Op(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Op(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}if("PHONE_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Op(e,t,n);return r(e,i).catch(async i=>{if("AUDIT"===e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await Op(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}{const i=await Op(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}async function Lp(e){const t=kp(e),n=await Uf(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Ff(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){new Dp(t).verify()}}
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
 */function Fp(e,t){const n=Pd(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(uh(n.getOptions(),t??{}))return e;cf(e,"already-initialized")}return n.initialize({options:t})}function Up(e,t,n){const r=kp(e);mf(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,a=Vp(t),{host:s,port:o}=function(e){const t=Vp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:zp(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:zp(t)}}}(t),l=null===o?"":`:${o}`,c={url:`${a}//${s}${l}/`},u=Object.freeze({host:s,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return mf(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void mf(uh(c,r.config.emulator)&&uh(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,wh(s)?bh(`${a}//${s}${l}`):i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Vp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function zp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class jp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gf("not implemented")}_getIdTokenResponse(e){return gf("not implemented")}_linkToIdToken(e,t){return gf("not implemented")}_getReauthenticationResolver(e){return gf("not implemented")}}
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
 */async function Bp(e,t){return Af(e,"POST","/v1/accounts:resetPassword",Cf(e,t))}async function Wp(e,t){return Af(e,"POST","/v1/accounts:signUp",t)}
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
async function qp(e,t){return Nf(e,"POST","/v1/accounts:signInWithPassword",Cf(e,t))}async function Hp(e,t){return Af(e,"POST","/v1/accounts:sendOobCode",Cf(e,t))}async function Kp(e,t){return Hp(e,t)}async function $p(e,t){return Hp(e,t)}
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
class Gp extends jp{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Gp(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Gp(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Mp(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",qp,"EMAIL_PASSWORD_PROVIDER");case"emailLink":
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
return async function(e,t){return Nf(e,"POST","/v1/accounts:signInWithEmailLink",Cf(e,t))}(e,{email:this._email,oobCode:this._password});default:cf(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Mp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wp,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return Nf(e,"POST","/v1/accounts:signInWithEmailLink",Cf(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:cf(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Qp(e,t){return Nf(e,"POST","/v1/accounts:signInWithIdp",Cf(e,t))}
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
 */class Yp extends jp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cf("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const a=new Yp(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return Qp(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qp(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qp(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dh(t)}return e}}
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
 */async function Jp(e,t){return Af(e,"POST","/v1/accounts:sendVerificationCode",Cf(e,t))}const Xp={USER_NOT_FOUND:"user-not-found"};
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
class Zp extends jp{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Zp({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Zp({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Nf(e,"POST","/v1/accounts:signInWithPhoneNumber",Cf(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Nf(e,"POST","/v1/accounts:signInWithPhoneNumber",Cf(e,t));if(n.temporaryProof)throw Of(e,"account-exists-with-different-credential",n);return n}(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return async function(e,t){return Nf(e,"POST","/v1/accounts:signInWithPhoneNumber",Cf(e,{...t,operation:"REAUTH"}),Xp)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Zp({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */class em{constructor(e){const t=fh(ph(e)),n=t.apiKey??null,r=t.oobCode??null,i=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);mf(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=fh(ph(e)).link,n=t?fh(ph(t)).deep_link_id:null,r=fh(ph(e)).deep_link_id;return(r?fh(ph(r)).link:null)||r||n||t||e}(e);try{return new em(t)}catch{return null}}}function tm(e){return em.parseLink(e)}
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
 */class nm{constructor(){this.providerId=nm.PROVIDER_ID}static credential(e,t){return Gp._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=em.parseLink(t);return mf(n,"argument-error"),Gp._fromEmailAndCode(e,n.code,n.tenantId)}}nm.PROVIDER_ID="password",nm.EMAIL_PASSWORD_SIGN_IN_METHOD="password",nm.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class rm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class im extends rm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class am extends im{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return mf("providerId"in t&&"signInMethod"in t,"argument-error"),Yp._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return mf(e.idToken||e.accessToken,"argument-error"),Yp._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return am.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return am.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:a,providerId:s}=e;if(!(n||r||t||i))return null;if(!s)return null;try{return new am(s)._credential({idToken:t,accessToken:n,nonce:a,pendingToken:i})}catch(e){return null}}}
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
 */class sm extends im{constructor(){super("facebook.com")}static credential(e){return Yp._fromParams({providerId:sm.PROVIDER_ID,signInMethod:sm.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sm.credentialFromTaggedObject(e)}static credentialFromError(e){return sm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return sm.credential(e.oauthAccessToken)}catch{return null}}}sm.FACEBOOK_SIGN_IN_METHOD="facebook.com",sm.PROVIDER_ID="facebook.com";
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
class om extends im{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yp._fromParams({providerId:om.PROVIDER_ID,signInMethod:om.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return om.credentialFromTaggedObject(e)}static credentialFromError(e){return om.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return om.credential(t,n)}catch{return null}}}om.GOOGLE_SIGN_IN_METHOD="google.com",om.PROVIDER_ID="google.com";
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
class lm extends im{constructor(){super("github.com")}static credential(e){return Yp._fromParams({providerId:lm.PROVIDER_ID,signInMethod:lm.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lm.credentialFromTaggedObject(e)}static credentialFromError(e){return lm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return lm.credential(e.oauthAccessToken)}catch{return null}}}lm.GITHUB_SIGN_IN_METHOD="github.com",lm.PROVIDER_ID="github.com";class cm extends jp{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Qp(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qp(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qp(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new cm(n,i):null}static _create(e,t){return new cm(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
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
 */class um extends rm{constructor(e){mf(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return um.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return um.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=cm.fromJSON(e);return mf(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return cm._create(n,t)}catch(e){return null}}}
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
 */class hm extends im{constructor(){super("twitter.com")}static credential(e,t){return Yp._fromParams({providerId:hm.PROVIDER_ID,signInMethod:hm.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hm.credentialFromTaggedObject(e)}static credentialFromError(e){return hm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return hm.credential(t,n)}catch{return null}}}
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
async function dm(e,t){return Nf(e,"POST","/v1/accounts:signUp",Cf(e,t))}
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
 */hm.TWITTER_SIGN_IN_METHOD="twitter.com",hm.PROVIDER_ID="twitter.com";class fm{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ep._fromIdTokenResponse(e,n,r),a=pm(n);return new fm({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=pm(n);return new fm({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function pm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */async function mm(e){if(Dd(e.app))return Promise.reject(df(e));const t=kp(e);if(await t._initializationPromise,t.currentUser?.isAnonymous)return new fm({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await dm(t,{returnSecureToken:!0}),r=await fm._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(r.user),r}
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
 */class gm extends oh{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,gm.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new gm(e,t,n,r)}}function ym(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw gm._fromErrorAndOperation(e,n,t,r);throw n})}
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
 */function vm(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
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
 */async function wm(e,t){const n=vh(e);await Em(!0,n,t);const{providerUserInfo:r}=await async function(e,t){return Af(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=vm(r||[]);return n.providerData=n.providerData.filter(e=>i.has(e.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function bm(e,t,n=!1){const r=await Kf(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return fm._forOperation(e,"link",r)}async function Em(e,t,n){await Qf(t);const r=!1===e?"provider-already-linked":"no-such-provider";mf(vm(t.providerData).has(n)===e,t.auth,r)}
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
 */async function km(e,t,n=!1){const{auth:r}=e;if(Dd(r.app))return Promise.reject(df(r));const i="reauthenticate";try{const a=await Kf(e,ym(r,i,t,e),n);mf(a.idToken,r,"internal-error");const s=qf(a.idToken);mf(s,r,"internal-error");const{sub:o}=s;return mf(e.uid===o,r,"user-mismatch"),fm._forOperation(e,i,a)}catch(e){throw"auth/user-not-found"===e?.code&&cf(r,"user-mismatch"),e}}
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
 */async function _m(e,t,n=!1){if(Dd(e.app))return Promise.reject(df(e));const r="signIn",i=await ym(e,r,t),a=await fm._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function Im(e,t){return _m(kp(e),t)}async function Tm(e,t){const n=vh(e);return await Em(!1,n,t.providerId),bm(n,t)}async function Sm(e,t){return km(vh(e),t)}
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
async function Cm(e,t){if(Dd(e.app))return Promise.reject(df(e));const n=kp(e),r=await async function(e,t){return Nf(e,"POST","/v1/accounts:signInWithCustomToken",Cf(e,t))}(n,{token:t,returnSecureToken:!0}),i=await fm._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
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
 */class Am{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?xm._fromServerResponse(e,t):"totpInfo"in t?Nm._fromServerResponse(e,t):cf(e,"internal-error")}}class xm extends Am{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new xm(t)}}class Nm extends Am{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Nm(t)}}
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
 */function Rm(e,t,n){mf(n.url?.length>0,e,"invalid-continue-uri"),mf(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),mf(void 0===n.linkDomain||n.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(mf(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(mf(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
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
 */async function Pm(e){const t=kp(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Dm(e,t,n){const r=kp(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&Rm(r,i,n),await Mp(r,i,"getOobCode",Kp,"EMAIL_PASSWORD_PROVIDER")}async function Om(e,t,n){await Bp(vh(e),{oobCode:t,newPassword:n}).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Pm(e),t})}async function Mm(e,t){await async function(e,t){return Af(e,"POST","/v1/accounts:update",Cf(e,t))}(vh(e),{oobCode:t})}async function Lm(e,t){const n=vh(e),r=await Bp(n,{oobCode:t}),i=r.requestType;switch(mf(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":mf(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":mf(r.mfaInfo,n,"internal-error");default:mf(r.email,n,"internal-error")}let a=null;return r.mfaInfo&&(a=Am._fromServerResponse(kp(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:a},operation:i}}async function Fm(e,t){const{data:n}=await Lm(vh(e),t);return n.email}async function Um(e,t,n){if(Dd(e.app))return Promise.reject(df(e));const r=kp(e),i=Mp(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dm,"EMAIL_PASSWORD_PROVIDER"),a=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Pm(e),t}),s=await fm._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(s.user),s}function Vm(e,t,n){return Dd(e.app)?Promise.reject(df(e)):Im(vh(e),nm.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Pm(e),t})}
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
 */async function zm(e,t,n){const r=kp(e),i={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};var a,s;a=i,mf((s=n).handleCodeInApp,r,"argument-error"),s&&Rm(r,a,s),await Mp(r,i,"getOobCode",$p,"EMAIL_PASSWORD_PROVIDER")}function jm(e,t){const n=em.parseLink(t);return"EMAIL_SIGNIN"===n?.operation}async function Bm(e,t,n){if(Dd(e.app))return Promise.reject(df(e));const r=vh(e),i=nm.credentialWithLink(t,n||vf());return mf(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Im(r,i)}
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
async function Wm(e,t){const n={identifier:t,continueUri:wf()?vf():"http://localhost"},{signinMethods:r}=await async function(e,t){return Af(e,"POST","/v1/accounts:createAuthUri",Cf(e,t))}(vh(e),n);return r||[]}async function qm(e,t){const n=vh(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&Rm(n.auth,r,t);const{email:i}=await async function(e,t){return Hp(e,t)}(n.auth,r);i!==e.email&&await e.reload()}async function Hm(e,t,n){const r=vh(e),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&Rm(r.auth,i,n);const{email:a}=await async function(e,t){return Hp(e,t)}(r.auth,i);a!==e.email&&await e.reload()}
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
async function Km(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=vh(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await Kf(r,async function(e,t){return Af(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const s=r.providerData.find(({providerId:e})=>"password"===e);s&&(s.displayName=r.displayName,s.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function $m(e,t){const n=vh(e);return Dd(n.auth.app)?Promise.reject(df(n.auth)):Qm(n,t,null)}function Gm(e,t){return Qm(vh(e),null,t)}async function Qm(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const a=await Kf(e,async function(e,t){return Af(e,"POST","/v1/accounts:update",t)}(r,i));await e._updateTokensIfNecessary(a,!0)}
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
 */class Ym{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Jm extends Ym{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Xm extends Ym{constructor(e,t){super(e,"facebook.com",t)}}class Zm extends Jm{constructor(e,t){super(e,"github.com",t,"string"==typeof t?.login?t?.login:null)}}class eg extends Ym{constructor(e,t){super(e,"google.com",t)}}class tg extends Jm{constructor(e,t,n){super(e,"twitter.com",t,n)}}function ng(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){if(!e)return null;const{providerId:t}=e,n=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},r=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!t&&e?.idToken){const t=qf(e.idToken)?.firebase?.sign_in_provider;if(t)return new Ym(r,"anonymous"!==t&&"custom"!==t?t:null)}if(!t)return null;switch(t){case"facebook.com":return new Xm(r,n);case"github.com":return new Zm(r,n);case"google.com":return new eg(r,n);case"twitter.com":return new tg(r,n,e.screenName||null);case"custom":case"anonymous":return new Ym(r,null);default:return new Ym(r,t,n)}}(n)}
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
 */function rg(e,t){return vh(e).setPersistence(t)}function ig(e){return Lp(e)}async function ag(e,t){return kp(e).validatePassword(t)}function sg(e,t,n,r){return vh(e).onIdTokenChanged(t,n,r)}function og(e,t,n){return vh(e).beforeAuthStateChanged(t,n)}function lg(e,t,n,r){return vh(e).onAuthStateChanged(t,n,r)}function cg(e){vh(e).useDeviceLanguage()}function ug(e,t){return vh(e).updateCurrentUser(t)}function hg(e){return vh(e).signOut()}function dg(e,t){return kp(e).revokeAccessToken(t)}async function fg(e){return vh(e).delete()}
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
 */class pg{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new pg("enroll",e,t)}static _fromMfaPendingCredential(e){return new pg("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){if(e?.multiFactorSession){if(e.multiFactorSession?.pendingCredential)return pg._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(e.multiFactorSession?.idToken)return pg._fromIdtoken(e.multiFactorSession.idToken)}return null}}
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
 */class mg{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=kp(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>Am._fromServerResponse(n,e));mf(r.mfaPendingCredential,n,"internal-error");const a=pg._fromMfaPendingCredential(r.mfaPendingCredential);return new mg(a,i,async e=>{const i=await e._process(n,a);delete r.mfaInfo,delete r.mfaPendingCredential;const s={...r,idToken:i.idToken,refreshToken:i.refreshToken};switch(t.operationType){case"signIn":const e=await fm._fromIdTokenResponse(n,t.operationType,s);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return mf(t.user,n,"internal-error"),fm._forOperation(t.user,t.operationType,s);default:cf(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function gg(e,t){const n=vh(e),r=t;return mf(t.customData.operationType,n,"argument-error"),mf(r.customData._serverResponse?.mfaPendingCredential,n,"argument-error"),mg._fromError(n,r)}
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
 */function yg(e,t){return Af(e,"POST","/v2/accounts/mfaEnrollment:start",Cf(e,t))}class vg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Am._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new vg(e)}async getSession(){return pg._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,r=await this.getSession(),i=await Kf(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await Kf(this.user,(r=this.user.auth,i={idToken:n,mfaEnrollmentId:t},Af(r,"POST","/v2/accounts/mfaEnrollment:withdraw",Cf(r,i))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}var r,i}}const wg=new WeakMap;function bg(e){const t=vh(e);return wg.has(t)||wg.set(t,vg._fromUser(t)),wg.get(t)}const Eg="__sak";
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
 */class kg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Eg,"1"),this.storage.removeItem(Eg),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class _g extends kg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);gp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_g.type="LOCAL";const Ig=_g;
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
 */function Tg(e){const t=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function Sg(e){return`${"http:"===window.location.protocol?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class Cg{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return!("boolean"==typeof isSecureContext&&!isSecureContext)&&("undefined"!=typeof navigator&&"undefined"!=typeof document&&(navigator.cookieEnabled??!0))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Sg(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return e?.value}return Tg(t)}async _remove(e){if(!this._isAvailable())return;if(!await this._get(e))return;const t=Sg(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=Sg(e);if(window.cookieStore){const e=e=>{const r=e.changed.find(e=>e.name===n);r&&t(r.value);e.deleted.find(e=>e.name===n)&&t(null)},r=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener("change",e)}let r=Tg(n);const i=setInterval(()=>{const e=Tg(n);e!==r&&(t(e),r=e)},1e3);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}Cg.type="COOKIE";const Ag=Cg;
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
 */class xg extends kg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xg.type="SESSION";const Ng=xg;
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
 */
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
 */
class Rg{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Rg(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(a).map(async e=>e(t.origin,i)),o=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Pg(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Rg.receivers=[];class Dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((s,o)=>{const l=Pg("",20);r.port1.start();const c=setTimeout(()=>{o(new Error("unsupported_event"))},n);a={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}
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
 */function Og(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
function Mg(){return void 0!==Og().WorkerGlobalScope&&"function"==typeof Og().importScripts}
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
 */
const Lg="firebaseLocalStorageDb",Fg="firebaseLocalStorage",Ug="fbase_key";class Vg{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zg(e,t){return e.transaction([Fg],t?"readwrite":"readonly").objectStore(Fg)}function jg(){const e=indexedDB.open(Lg,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Fg,{keyPath:Ug})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Fg)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Lg);return new Vg(e).toPromise()}(),t(await jg()))})})}async function Bg(e,t,n){const r=zg(e,!0).put({[Ug]:t,value:n});return new Vg(r).toPromise()}function Wg(e,t){const n=zg(e,!0).delete(t);return new Vg(n).toPromise()}class qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await jg()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rg._getInstance(Mg()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Dg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jg();return await Bg(e,Eg,"1"),await Wg(e,Eg),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bg(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=zg(e,!1).get(t),r=await new Vg(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=zg(e,!1).getAll();return new Vg(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qg.type="LOCAL";const Hg=qg;
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
 */function Kg(e,t){return Af(e,"POST","/v2/accounts/mfaSignIn:start",Cf(e,t))}
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
const $g=Sp("rcb"),Gg=new Ef(3e4,6e4);class Qg{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Og().grecaptcha?.render}load(e,t=""){return mf(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Mf(Og().grecaptcha)?Promise.resolve(Og().grecaptcha):new Promise((n,r)=>{const i=Og().setTimeout(()=>{r(uf(e,"network-request-failed"))},Gg.get());Og()[$g]=()=>{Og().clearTimeout(i),delete Og()[$g];const a=Og().grecaptcha;if(!a||!Mf(a))return void r(uf(e,"internal-error"));const s=a.render;a.render=(e,t)=>{const n=s(e,t);return this.counter++,n},this.hostLanguage=t,n(a)};Tp(`${Ip.recaptchaV2Script}?${dh({onload:$g,render:"explicit",hl:t})}`).catch(()=>{clearTimeout(i),r(uf(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Og().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class Yg{async load(e){return new Ap(e)}clearedOneInstance(){}}
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
 */const Jg="recaptcha",Xg={theme:"light",type:"image"};class Zg{constructor(e,t,n={...Xg}){this.parameters=n,this.type=Jg,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=kp(e),this.isInvisible="invisible"===this.parameters.size,mf("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof t?document.getElementById(t):t;mf(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Yg:new Qg,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){mf(!this.parameters.sitekey,this.auth,"argument-error"),mf(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),mf("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){const n=Og()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){mf(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){mf(wf()&&!Mg(),this.auth,"internal-error"),await function(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
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
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await async function(e){return(await Af(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);mf(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return mf(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class ey{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Zp._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ty(e,t,n){if(Dd(e.app))return Promise.reject(df(e));const r=kp(e),i=await iy(r,t,vh(n));return new ey(i,e=>Im(r,e))}async function ny(e,t,n){const r=vh(e);await Em(!1,r,"phone");const i=await iy(r.auth,t,vh(n));return new ey(i,e=>Tm(r,e))}async function ry(e,t,n){const r=vh(e);if(Dd(r.auth.app))return Promise.reject(df(r.auth));const i=await iy(r.auth,t,vh(n));return new ey(i,e=>Sm(r,e))}async function iy(e,t,n){if(!e._getRecaptchaConfig())try{await Lp(e)}catch(e){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){mf("enroll"===t.type,e,"internal-error");const i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},a=Mp(e,i,"mfaSmsEnrollment",async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===Pp){mf(n?.type===Jg,e,"argument-error");return yg(e,await sy(e,t,n))}return yg(e,t)},"PHONE_PROVIDER");return(await a.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{mf("signin"===t.type,e,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;mf(i,e,"missing-multi-factor-info");const a={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},s=Mp(e,a,"mfaSmsSignIn",async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===Pp){mf(n?.type===Jg,e,"argument-error");return Kg(e,await sy(e,t,n))}return Kg(e,t)},"PHONE_PROVIDER");return(await s.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=Mp(e,t,"sendVerificationCode",async(e,t)=>{if(t.captchaResponse===Pp){mf(n?.type===Jg,e,"argument-error");return Jp(e,await sy(e,t,n))}return Jp(e,t)},"PHONE_PROVIDER");return(await i.catch(e=>Promise.reject(e))).sessionInfo}}finally{n?._reset()}}async function ay(e,t){const n=vh(e);if(Dd(n.auth.app))return Promise.reject(df(n.auth));await bm(n,t)}async function sy(e,t,n){mf(n.type===Jg,e,"argument-error");const r=await n.verify();mf("string"==typeof r,e,"argument-error");const i={...t};if("phoneEnrollmentInfo"in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,a=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:a}}),i}if("phoneSignInInfo"in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
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
 */class oy{constructor(e){this.providerId=oy.PROVIDER_ID,this.auth=kp(e)}verifyPhoneNumber(e,t){return iy(this.auth,e,vh(t))}static credential(e,t){return Zp._fromVerification(e,t)}static credentialFromResult(e){const t=e;return oy.credentialFromTaggedObject(t)}static credentialFromError(e){return oy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Zp._fromTokenResponse(t,n):null}}
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
 */
function ly(e,t){return t?np(t):(mf(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */oy.PROVIDER_ID="phone",oy.PHONE_SIGN_IN_METHOD="phone";class cy extends jp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qp(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qp(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qp(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uy(e){return _m(e.auth,new cy(e),e.bypassAuthState)}function hy(e){const{auth:t,user:n}=e;return mf(n,t,"internal-error"),km(n,new cy(e),e.bypassAuthState)}async function dy(e){const{auth:t,user:n}=e;return mf(n,t,"internal-error"),bm(n,new cy(e),e.bypassAuthState)}
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
 */class fy{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:s}=e;if(a)return void this.reject(a);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uy;case"linkViaPopup":case"linkViaRedirect":return dy;case"reauthViaPopup":case"reauthViaRedirect":return hy;default:cf(this.auth,"internal-error")}}resolve(e){yf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const py=new Ef(2e3,1e4);async function my(e,t,n){if(Dd(e.app))return Promise.reject(uf(e,"operation-not-supported-in-this-environment"));const r=kp(e);ff(e,t,rm);const i=ly(r,n);return new vy(r,"signInViaPopup",t,i).executeNotNull()}async function gy(e,t,n){const r=vh(e);if(Dd(r.auth.app))return Promise.reject(uf(r.auth,"operation-not-supported-in-this-environment"));ff(r.auth,t,rm);const i=ly(r.auth,n);return new vy(r.auth,"reauthViaPopup",t,i,r).executeNotNull()}async function yy(e,t,n){const r=vh(e);ff(r.auth,t,rm);const i=ly(r.auth,n);return new vy(r.auth,"linkViaPopup",t,i,r).executeNotNull()}class vy extends fy{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,vy.currentPopupAction&&vy.currentPopupAction.cancel(),vy.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return mf(e,this.auth,"internal-error"),e}async onExecution(){yf(1===this.filter.length,"Popup operations only handle one event");const e=Pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(uf(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(uf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vy.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(uf(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,py.get())};e()}}vy.currentPopupAction=null;
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
const wy=new Map;class by extends fy{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=wy.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Iy(t),r=_y(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}wy.set(this.auth._key(),e)}return this.bypassAuthState||wy.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ey(e,t){return _y(e)._set(Iy(t),"true")}function ky(e,t){wy.set(e._key(),t)}function _y(e){return np(e._redirectPersistence)}function Iy(e){return ap("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Ty(e,t,n){return async function(e,t,n){if(Dd(e.app))return Promise.reject(df(e));const r=kp(e);ff(e,t,rm),await r._initializationPromise;const i=ly(r,n);return await Ey(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function Sy(e,t,n){return async function(e,t,n){const r=vh(e);if(ff(r.auth,t,rm),Dd(r.auth.app))return Promise.reject(df(r.auth));await r.auth._initializationPromise;const i=ly(r.auth,n);await Ey(i,r.auth);const a=await Ny(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",a)}(e,t,n)}function Cy(e,t,n){return async function(e,t,n){const r=vh(e);ff(r.auth,t,rm),await r.auth._initializationPromise;const i=ly(r.auth,n);await Em(!1,r,t.providerId),await Ey(i,r.auth);const a=await Ny(r);return i._openRedirect(r.auth,t,"linkViaRedirect",a)}(e,t,n)}async function Ay(e,t){return await kp(e)._initializationPromise,xy(e,t,!1)}async function xy(e,t,n=!1){if(Dd(e.app))return Promise.reject(df(e));const r=kp(e),i=ly(r,t),a=new by(r,i,n),s=await a.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}async function Ny(e){const t=Pg(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */class Ry{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dy(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Dy(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(uf(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Py(e))}saveEventToCache(e){this.cachedEventUids.add(Py(e)),this.lastProcessedEventTime=Date.now()}}function Py(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Dy({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
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
const Oy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,My=/^https?/;async function Ly(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Af(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Fy(e))return}catch{}cf(e,"unauthorized-domain")}function Fy(e){const t=vf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!My.test(n))return!1;if(Oy.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Uy=new Ef(3e4,6e4);function Vy(){const e=Og().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function zy(e){return new Promise((t,n)=>{function r(){Vy(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vy(),n(uf(e,"network-request-failed"))},timeout:Uy.get()})}if(Og().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Og().gapi?.load){const t=Sp("iframefcb");return Og()[t]=()=>{gapi.load?r():n(uf(e,"network-request-failed"))},Tp(`${Ip.gapiScript}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw jy=null,e})}let jy=null;
/**
 * @license
 * Copyright 2020 Google LLC.
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
const By=new Ef(5e3,15e3),Wy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hy(e){const t=e.config;mf(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?kf(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Ld},i=qy.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${dh(r).slice(1)}`}async function Ky(e){const t=await function(e){return jy=jy||zy(e),jy}(e),n=Og().gapi;return mf(n,e,"internal-error"),t.open({where:document.body,url:Hy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wy,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=uf(e,"network-request-failed"),a=Og().setTimeout(()=>{r(i)},By.get());function s(){Og().clearTimeout(a),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $y={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Gy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qy(e,t,n,r=500,i=600){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l={...$y,width:r.toString(),height:i.toString(),top:a,left:s},c=nh().toLowerCase();n&&(o=up(c)?"_blank":n),lp(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=nh()){return mp(e)&&!!window.navigator?.standalone}(c)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",o),new Gy(null);const h=window.open(t||"",o,u);mf(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Gy(h)}const Yy="__/auth/handler",Jy="emulator/auth/handler",Xy=encodeURIComponent("fac");async function Zy(e,t,n,r,i,a){mf(e.config.authDomain,e,"auth-domain-config-required"),mf(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ld,eventId:i};if(t instanceof rm){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))s[e]=t}if(t instanceof im){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const o=s;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];const l=await e._getAppCheckToken(),c=l?`#${Xy}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Yy}`;return kf(e,Jy)}
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
 */(e)}?${dh(o).slice(1)}${c}`}const ev="webStorageSupport";const tv=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ng,this._completeRedirectFn=xy,this._overrideRedirectResult=ky}async _openPopup(e,t,n,r){yf(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return Qy(e,await Zy(e,t,n,vf(),r),Pg())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Og().location.href=e}(await Zy(e,t,n,vf(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(yf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ky(e),n=new Ry(e);return t.register("authEvent",t=>{mf(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ev,{type:ev},n=>{const r=n?.[0]?.[ev];void 0!==r&&t(!!r),cf(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ly(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yp()||cp()||mp()}};class nv{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return gf("unexpected MultiFactorSessionType")}}}class rv extends nv{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rv(e)}_finalizeEnroll(e,t,n){return function(e,t){return Af(e,"POST","/v2/accounts/mfaEnrollment:finalize",Cf(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return Af(e,"POST","/v2/accounts/mfaSignIn:finalize",Cf(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class iv{constructor(){}static assertion(e){return rv._fromCredential(e)}}iv.FACTOR_ID="phone";class av{static assertionForEnrollment(e,t){return sv._fromSecret(e,t)}static assertionForSignIn(e,t){return sv._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;mf(void 0!==t.user?.auth,"internal-error");const n=await(r=t.user.auth,i={idToken:t.credential,totpEnrollmentInfo:{}},Af(r,"POST","/v2/accounts/mfaEnrollment:start",Cf(r,i)));var r,i;return ov._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}av.FACTOR_ID="totp";class sv extends nv{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new sv(t,void 0,e)}static _fromEnrollmentId(e,t){return new sv(t,e)}async _finalizeEnroll(e,t,n){return mf(void 0!==this.secret,e,"argument-error"),function(e,t){return Af(e,"POST","/v2/accounts/mfaEnrollment:finalize",Cf(e,t))}(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){mf(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return function(e,t){return Af(e,"POST","/v2/accounts/mfaSignIn:finalize",Cf(e,t))}(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class ov{constructor(e,t,n,r,i,a,s){this.sessionInfo=a,this.auth=s,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ov(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(lv(e)||lv(t))&&(n=!0),n&&(lv(e)&&(e=this.auth.currentUser?.email||"unknownuser"),lv(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function lv(e){return void 0===e||0===e?.length}var cv="@firebase/auth",uv="1.13.0";
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
class hv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){mf(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */
const dv=eh("authIdTokenMaxAge")||300;let fv=null;function pv(e=Ud()){const t=Pd(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Fp(e,{popupRedirectResolver:tv,persistence:[Hg,Ig,Ng]}),r=eh("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>dv)return;const r=t?.token;fv!==r&&(fv=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});og(n,t,()=>t(n.currentUser)),sg(n,e=>t(e))}}var i;const a=Xu("auth");return a&&Up(n,`http://${a}`),n}var mv;Ip={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=uf("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},mv="Browser",Rd(new Eh("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=n.options;mf(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:a,authDomain:s,clientPlatform:mv,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vp(mv)},l=new Ep(n,r,i,o);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(np);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Rd(new Eh("auth-internal",e=>{const t=kp(e.getProvider("auth").getImmediate());return new hv(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vd(cv,uv,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(mv)),Vd(cv,uv,"esm2020");var gv,yv,vv="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const r=Array(16);if("string"==typeof t)for(var i=0;i<16;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];let a,s=e.g[3];a=t+(s^n&(i^s))+r[0]+3614090360&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,s=t+(a<<12&4294967295|a>>>20),a=i+(n^s&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[3]+3250441966&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[4]+4118548399&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,s=t+(a<<12&4294967295|a>>>20),a=i+(n^s&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[7]+4249261313&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[8]+1770035416&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,s=t+(a<<12&4294967295|a>>>20),a=i+(n^s&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[11]+2304563134&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[12]+1804603682&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,s=t+(a<<12&4294967295|a>>>20),a=i+(n^s&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[15]+1236535329&4294967295,a=t+(i^s&((n=i+(a<<22&4294967295|a>>>10))^i))+r[1]+4129170786&4294967295,a=s+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[11]+643717713&4294967295,a=n+(s^t&((i=s+(a<<14&4294967295|a>>>18))^s))+r[0]+3921069994&4294967295,a=t+(i^s&((n=i+(a<<20&4294967295|a>>>12))^i))+r[5]+3593408605&4294967295,a=s+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[15]+3634488961&4294967295,a=n+(s^t&((i=s+(a<<14&4294967295|a>>>18))^s))+r[4]+3889429448&4294967295,a=t+(i^s&((n=i+(a<<20&4294967295|a>>>12))^i))+r[9]+568446438&4294967295,a=s+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[3]+4107603335&4294967295,a=n+(s^t&((i=s+(a<<14&4294967295|a>>>18))^s))+r[8]+1163531501&4294967295,a=t+(i^s&((n=i+(a<<20&4294967295|a>>>12))^i))+r[13]+2850285829&4294967295,a=s+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[7]+1735328473&4294967295,a=n+(s^t&((i=s+(a<<14&4294967295|a>>>18))^s))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^s)+r[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,s=t+(a<<11&4294967295|a>>>21),a=i+(s^t^n)+r[11]+1839030562&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,s=t+(a<<11&4294967295|a>>>21),a=i+(s^t^n)+r[7]+4139469664&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,s=t+(a<<11&4294967295|a>>>21),a=i+(s^t^n)+r[3]+3572445317&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,s=t+(a<<11&4294967295|a>>>21),a=i+(s^t^n)+r[15]+530742520&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[2]+3299628645&4294967295,a=t+(i^((n=i+(a<<23&4294967295|a>>>9))|~s))+r[0]+4096336452&4294967295,a=s+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[14]+2878612391&4294967295,a=n+(s^((i=s+(a<<15&4294967295|a>>>17))|~t))+r[5]+4237533241&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~s))+r[12]+1700485571&4294967295,a=s+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[10]+4293915773&4294967295,a=n+(s^((i=s+(a<<15&4294967295|a>>>17))|~t))+r[1]+2240044497&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~s))+r[8]+1873313359&4294967295,a=s+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[6]+2734768916&4294967295,a=n+(s^((i=s+(a<<15&4294967295|a>>>17))|~t))+r[13]+1309151649&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~s))+r[4]+4149444226&4294967295,a=s+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[2]+718787259&4294967295,a=n+(s^((i=s+(a<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;const n=[];let r=!0;for(let i=e.length-1;i>=0;i--){const a=0|e[i];r&&a==t||(n[i]=a,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const r=t-this.blockSize,i=this.C;let a=this.h,s=0;for(;s<t;){if(0==a)for(;s<=r;)n(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(i[a++]=e.charCodeAt(s++),a==this.blockSize){n(this,i),a=0;break}}else for(;s<t;)if(i[a++]=e[s++],a==this.blockSize){n(this,i),a=0;break}}this.h=a,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var i={};function a(e){return-128<=e&&e<128?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],e<0?-1:0)}):new r([0|e],e<0?-1:0)}function s(e){if(isNaN(e)||!isFinite(e))return o;if(e<0)return d(s(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var o=a(0),l=a(1),c=a(16777216);function u(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new m(o,o);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(e.g.length>30){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;r.l(e)<=0;)n=y(n),r=y(r);var i=v(n,1),a=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var c=a.add(r);c.l(e)<=0&&(i=i.add(n),a=c),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=o;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),c=(a=s(n)).j(t);h(c)||c.l(e)>0;)c=(a=s(n-=r)).j(t);u(a)&&(a=l),i=i.add(a),e=f(e,c)}return new m(i,e)}function y(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function v(e,t){const n=t>>5;t%=32;const i=e.g.length-n,a=[];for(let r=0;r<i;r++)a[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(a,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(h(this))return"-"+d(this).toString(e);const t=s(Math.pow(e,6));var n=this;let r="";for(;;){const i=g(n,t).g;let a=(((n=f(n,i.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(u(n=i))return a+r;for(;a.length<6;)a="0"+a;r=a+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:u(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let i=0;for(let r=0;r<=t;r++){let t=i+(65535&this.i(r))+(65535&e.i(r)),a=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);i=a>>>16,t&=65535,a&=65535,n[r]=a<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(this.l(c)<0&&e.l(c)<0)return s(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(let t=0;t<e.g.length;t++){const r=this.i(i)>>>16,a=65535&this.i(i),s=e.i(t)>>>16,o=65535&e.i(t);n[2*i+2*t]+=a*o,p(n,2*i+2*t),n[2*i+2*t+1]+=r*o,p(n,2*i+2*t+1),n[2*i+2*t+1]+=a*s,p(n,2*i+2*t+1),n[2*i+2*t+2]+=r*s,p(n,2*i+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},e.B=function(e){return g(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,yv=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=s,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=s(Math.pow(n,8));let i=o;for(let e=0;e<t.length;e+=8){var a=Math.min(8,t.length-e);const o=parseInt(t.substring(e,e+a),n);a<8?(a=s(Math.pow(n,a)),i=i.j(a).add(s(o))):(i=i.j(r),i=i.add(s(o)))}return i},gv=r}).apply(void 0!==vv?vv:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var wv,bv,Ev,kv,_v,Iv,Tv,Sv,Cv="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Cv&&Cv];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(e,r){if(r)e:{var i=n;e=e.split(".");for(var a=0;a<e.length-1;a++){var s=e[a];if(!(s in i))break e;i=i[s]}(r=r(a=i[e=e[e.length-1]]))!=a&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var i=i||{},a=this||self;function s(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){return(l=o).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function u(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}var h="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function d(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let t=1;t<arguments.length;t++){const r=arguments[t];var n=typeof r;if("array"==(n="object"!=n?n:r?Array.isArray(r)?"array":n:"null")||"object"==n&&"number"==typeof r.length){n=e.length||0;const t=r.length||0;e.length=n+t;for(let i=0;i<t;i++)e[n+i]=r[i]}else e.push(r)}}function p(e){a.setTimeout(()=>{throw e},0)}function m(){var e=b;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var g=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,b=new class{constructor(){this.h=this.g=null}add(e,t){const n=g.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},E=()=>{const e=Promise.resolve(void 0);v=()=>{e.then(k)}};function k(){for(var e;e=m();){try{e.h.call(e.g)}catch(e){p(e)}var t=g;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}w=!1}function _(){this.u=this.u,this.C=this.C}function I(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},I.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(e){}return e}();function S(e){return/^[\s\xa0]*$/.test(e)}function C(e,t){I.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}u(C,I),C.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&C.Z.h.call(this)},C.prototype.h=function(){C.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var A="closure_listenable_"+(1e6*Math.random()|0),x=0;function N(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++x,this.da=this.fa=!1}function R(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function D(e){const t={};for(const n in e)t[n]=e[n];return t}const O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<O.length;t++)n=O[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function L(e){this.src=e,this.g={},this.h=0}function F(e,t){const n=t.type;if(n in e.g){var r,i=e.g[n],a=Array.prototype.indexOf.call(i,t,void 0);(r=a>=0)&&Array.prototype.splice.call(i,a,1),r&&(R(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function U(e,t,n,r){for(let i=0;i<e.length;++i){const a=e[i];if(!a.da&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}L.prototype.add=function(e,t,n,r,i){const a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);const s=U(e,t,r,i);return s>-1?(t=e[s],n||(t.fa=!1)):((t=new N(t,this.src,a,!!r,i)).fa=n,e.push(t)),t};var V="closure_lm_"+(1e6*Math.random()|0),z={};function j(e,t,n,r,i){if(r&&r.once)return W(e,t,n,r,i);if(Array.isArray(t)){for(let a=0;a<t.length;a++)j(e,t[a],n,r,i);return null}return n=Y(n),e&&e[A]?e.J(t,n,s(r)?!!r.capture:!!r,i):B(e,t,n,!1,r,i)}function B(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");const o=s(i)?!!i.capture:!!i;let l=G(e);if(l||(e[V]=l=new L(e)),(n=l.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=$;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)T||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(K(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function W(e,t,n,r,i){if(Array.isArray(t)){for(let a=0;a<t.length;a++)W(e,t[a],n,r,i);return null}return n=Y(n),e&&e[A]?e.K(t,n,s(r)?!!r.capture:!!r,i):B(e,t,n,!0,r,i)}function q(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)q(e,t[a],n,r,i);else r=s(r)?!!r.capture:!!r,n=Y(n),e&&e[A]?(e=e.i,(a=String(t).toString())in e.g&&((n=U(t=e.g[a],n,r,i))>-1&&(R(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[a],e.h--)))):e&&(e=G(e))&&(t=e.g[t.toString()],e=-1,t&&(e=U(t,n,r,i)),(n=e>-1?t[e]:null)&&H(n))}function H(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[A])F(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(K(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=G(t))?(F(n,e),0==n.h&&(n.src=null,t[V]=null)):R(e)}}}function K(e){return e in z?z[e]:z[e]="on"+e}function $(e,t){if(e.da)e=!0;else{t=new C(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&H(e),e=n.call(r,t)}return e}function G(e){return(e=e[V])instanceof L?e:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function Y(e){return"function"==typeof e?e:(e[Q]||(e[Q]=function(t){return e.handleEvent(t)}),e[Q])}function J(){_.call(this),this.i=new L(this),this.M=this,this.G=null}function X(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new I(t,e);else if(t instanceof I)t.target=t.target||e;else{var i=t;M(t=new I(r,e),i)}let a,s;if(i=!0,n)for(s=n.length-1;s>=0;s--)a=t.g=n[s],i=Z(a,r,!0,t)&&i;if(a=t.g=e,i=Z(a,r,!0,t)&&i,i=Z(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)a=t.g=n[s],i=Z(a,r,!1,t)&&i}function Z(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let i=!0;for(let a=0;a<t.length;++a){const s=t[a];if(s&&!s.da&&s.capture==n){const t=s.listener,n=s.ha||s.src;s.fa&&F(e.i,s),i=!1!==t.call(n,r)&&i}}return i&&!r.defaultPrevented}function ee(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=l(e.handleEvent,e)}return Number(t)>2147483647?-1:a.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,ee(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}u(J,_),J.prototype[A]=!0,J.prototype.removeEventListener=function(e,t,n,r){q(this,e,t,n,r)},J.prototype.N=function(){if(J.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)R(n[e]);delete e.g[t],e.h--}}this.G=null},J.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},J.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class te extends _{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ee(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ne(e){_.call(this),this.h=e,this.g={}}u(ne,_);var re=[];function ie(e){P(e.g,function(e,t){this.g.hasOwnProperty(t)&&H(e)},e),e.g={}}ne.prototype.N=function(){ne.Z.N.call(this),ie(this)},ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ae=a.JSON.stringify,se=a.JSON.parse,oe=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function le(){}function ce(){}var ue={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function he(){I.call(this,"d")}function de(){I.call(this,"c")}u(he,I),u(de,I);var fe={},pe=null;function me(){return pe=pe||new J}function ge(e){I.call(this,fe.Ia,e)}function ye(e){const t=me();X(t,new ge(t))}function ve(e,t){I.call(this,fe.STAT_EVENT,e),this.stat=t}function we(e){const t=me();X(t,new ve(t,e))}function be(e,t){I.call(this,fe.Ja,e),this.size=t}function Ee(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}function ke(){this.g=!0}function _e(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const a=JSON.parse(t);if(a)for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var n=a[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let e=1;e<r.length;e++)r[e]=""}}}return ae(a)}catch(e){return t}}(e,n)+(r?" "+r:"")})}fe.Ia="serverreachability",u(ge,I),fe.STAT_EVENT="statevent",u(ve,I),fe.Ja="timingevent",u(be,I),ke.prototype.ua=function(){this.g=!1},ke.prototype.info=function(){};var Ie,Te={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Se={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Ce(){}function Ae(e){return encodeURIComponent(String(e))}function xe(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ne(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Re}function Re(){this.i=null,this.g="",this.h=!1}u(Ce,le),Ce.prototype.g=function(){return new XMLHttpRequest},Ie=new Ce;var Pe={},De={};function Oe(e,t,n){e.M=1,e.A=at(et(t)),e.u=n,e.R=!0,Me(e,null)}function Me(e,t){e.F=Date.now(),Ue(e),e.B=et(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),wt(n.i,"t",r),e.C=0,n=e.j.L,e.h=new Re,e.g=sn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new te(l(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var i="readystatechange";Array.isArray(i)||(i&&(re[0]=i.toString()),i=re);for(let e=0;e<i.length;e++){const a=j(n,i[e],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.J?D(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),ye(),function(e,t,n,r,i,a){e.info(function(){if(e.g)if(a){var s="",o=a.split("&");for(let e=0;e<o.length;e++){var l=o[e].split("=");if(l.length>1){const e=l[0];l=l[1];const t=e.split("_");s=t.length>=2&&"type"==t[1]?s+(e+"=")+l+"&":s+(e+"=redacted&")}}}else s=null;else s=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Le(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function Fe(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?De:(n=Number(t.substring(n,r)),isNaN(n)?Pe:(r+=1)+n>t.length?De:(t=t.slice(r,r+n),e.C=r+n,t))}function Ue(e){e.T=Date.now()+e.H,Ve(e,e.H)}function Ve(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=Ee(l(e.aa,e),t)}function ze(e){e.D&&(a.clearTimeout(e.D),e.D=null)}function je(e){0==e.j.I||e.K||en(e.j,e)}function Be(e){ze(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,ie(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function We(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||Ge(n.h,e)))if(!e.L&&Ge(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;Zt(n),Wt(n)}Yt(n),we(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Ee(l(n.Va,n),6e3));$e(n.h)<=1&&n.ta&&(n.ta=void 0)}else nn(n,11)}else if((e.L||n.g==e)&&Zt(n),!S(t))for(i=n.Ba.g.parse(t),t=0;t<i.length;t++){let l=i[t];const u=l[0];if(!(u<=n.K))if(n.K=u,l=l[1],2==n.I)if("c"==l[0]){n.M=l[1],n.ba=l[2];const t=l[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const i=l[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&u>0&&(r=1.5*u,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var a=r.h;a.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(a.j=a.l,a.g=new Set,a.h&&(Qe(a,a.h),a.h=null))}if(r.G){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,it(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var s=e;if((r=n).na=an(r,r.L?r.ba:null,r.W),s.L){Ye(r.h,s);var o=s,c=r.O;c&&(o.H=c),o.D&&(ze(o),Ue(o)),r.g=s}else Qt(r);n.i.length>0&&Ht(n)}else"stop"!=l[0]&&"close"!=l[0]||nn(n,7);else 3==n.I&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?nn(n,7):Bt(n):"noop"!=l[0]&&n.l&&n.l.qa(l),n.A=0)}ye()}catch(e){}}Ne.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==Ut(e)?t.j():this.Y(e)},Ne.prototype.Y=function(e){try{if(e==this.g)e:{const l=Ut(this.g),c=this.g.ya();this.g.ca();if(!(l<3)&&(3!=l||this.g&&(this.h.h||this.g.la()||Vt(this.g)))){this.K||4!=l||7==c||ye(),ze(this);var t=this.g.ca();this.X=t;var n=function(e){if(!Le(e))return e.g.la();const t=Vt(e.g);if(""===t)return"";let n="";const r=t.length,i=4==Ut(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return Be(e),je(e),"";e.h.i=new a.TextDecoder}for(let a=0;a<r;a++)e.h.h=!0,n+=e.h.i.decode(t[a],{stream:!(i&&a==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,r,i,a,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+s})}(this.i,this.v,this.B,this.l,this.S,l,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(r)){var s=r;break t}}s=null}if(!(e=s)){this.o=!1,this.m=3,we(12),Be(this),je(this);break e}_e(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,We(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=Fe(this,n),t==De){4==l&&(this.m=4,we(14),e=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}if(t==Pe){this.m=4,we(15),_e(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}_e(this.i,this.l,t,null),We(this,t)}if(Le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=l||0!=n.length||this.h.h||(this.m=1,we(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jt(o),o.P=!0,we(11))}}else _e(this.i,this.l,n,"[Invalid Chunked Response]"),Be(this),je(this)}else _e(this.i,this.l,n,null),We(this,n);4==l&&Be(this),this.o&&!this.K&&(4==l?en(this.j,this):(this.o=!1,Ue(this)))}else(function(e){const t={};e=(e.g&&Ut(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(S(e[r]))continue;var n=xe(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const a=t[i]||[];t[i]=a,a.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,we(12)):(this.m=0,we(13)),Be(this),je(this)}}}catch(e){}},Ne.prototype.cancel=function(){this.K=!0,Be(this)},Ne.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(ye(),we(17)),Be(this),this.m=2,je(this)):Ve(this,this.T-e)};var qe=class{constructor(e,t){this.g=e,this.map=t}};function He(e){this.l=e||10,a.PerformanceNavigationTiming?e=(e=a.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ke(e){return!!e.h||!!e.g&&e.g.size>=e.j}function $e(e){return e.h?1:e.g?e.g.size:0}function Ge(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Qe(e,t){e.g?e.g.add(t):e.h=t}function Ye(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Je(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return d(e.i)}He.prototype.cancel=function(){if(this.i=Je(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Xe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ze(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Ze?(this.l=e.l,tt(this,e.j),this.o=e.o,this.g=e.g,nt(this,e.u),this.h=e.h,rt(this,bt(e.i)),this.m=e.m):e&&(t=String(e).match(Xe))?(this.l=!1,tt(this,t[1]||"",!0),this.o=st(t[2]||""),this.g=st(t[3]||"",!0),nt(this,t[4]),this.h=st(t[5]||"",!0),rt(this,t[6]||"",!0),this.m=st(t[7]||"")):(this.l=!1,this.i=new pt(null,this.l))}function et(e){return new Ze(e)}function tt(e,t,n){e.j=n?st(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nt(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function rt(e,t,n){t instanceof pt?(e.i=t,function(e,t){t&&!e.j&&(mt(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(gt(this,t),wt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=ot(t,dt)),e.i=new pt(t,e.l))}function it(e,t,n){e.i.set(t,n)}function at(e){return it(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function st(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ot(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,lt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function lt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ze.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(ot(t,ct,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ot(t,ct,!0),"@"),e.push(Ae(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ot(n,"/"==n.charAt(0)?ht:ut,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ot(n,ft)),e.join("")},Ze.prototype.resolve=function(e){const t=et(this);let n=!!e.j;n?tt(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)nt(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=t.h.lastIndexOf("/");-1!=i&&(r=t.h.slice(0,i+1)+r)}if(".."==(i=r)||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const e=[];for(let t=0;t<i.length;){const n=i[t++];"."==n?r&&t==i.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==i.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=i}return n?t.h=r:n=""!==e.i.toString(),n?rt(t,bt(e.i)):n=!!e.m,n&&(t.m=e.m),t};var ct=/[#\/\?@]/g,ut=/[#\?:]/g,ht=/[#\?]/g,dt=/[#\?@]/g,ft=/#/g;function pt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let i,a=null;r>=0?(i=e[n].substring(0,r),a=e[n].substring(r+1)):i=e[n],t(i,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function gt(e,t){mt(e),t=Et(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function yt(e,t){return mt(e),t=Et(e,t),e.g.has(t)}function vt(e,t){mt(e);let n=[];if("string"==typeof t)yt(e,t)&&(n=n.concat(e.g.get(Et(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function wt(e,t,n){gt(e,t),n.length>0&&(e.i=null,e.g.set(Et(e,t),d(n)),e.h+=n.length)}function bt(e){const t=new pt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function Et(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function kt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function _t(){this.g=new oe}function It(e){this.i=e.Sb||null,this.h=e.ab||!1}function Tt(e,t){J.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function St(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function Ct(e){e.readyState=4,e.l=null,e.j=null,e.B=null,At(e)}function At(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function xt(e){let t="";return P(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Nt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=xt(n),"string"==typeof e?null!=n&&Ae(n):it(e,t,n))}function Rt(e){J.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=pt.prototype).add=function(e,t){mt(this),this.i=null,e=Et(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){mt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return mt(this),this.i=null,yt(this,e=Et(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=vt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const i=Ae(n);n=vt(this,n);for(let t=0;t<n.length;t++){let r=i;""!==n[t]&&(r+="="+Ae(n[t])),e.push(r)}}return this.i=e.join("&")},u(It,le),It.prototype.g=function(){return new Tt(this.i,this.h)},u(Tt,J),(e=Tt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,At(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||a).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Ct(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,At(this)),this.g&&(this.readyState=3,At(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;St(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ct(this):At(this),3==this.readyState&&St(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,Ct(this))},e.Na=function(e){this.g&&(this.response=e,Ct(this))},e.ga=function(){this.g&&Ct(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Tt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),u(Rt,J);var Pt=/^https?$/i,Dt=["POST","PUT"];function Ot(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Mt(e),Ft(e)}function Mt(e){e.A||(e.A=!0,X(e,"complete"),X(e,"error"))}function Lt(e){if(e.h&&void 0!==i)if(e.v&&4==Ut(e))setTimeout(e.Ca.bind(e),0);else if(X(e,"readystatechange"),4==Ut(e)){e.h=!1;try{const i=e.ca();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===i){let t=String(e.D).match(Xe)[1]||null;!t&&a.self&&a.self.location&&(t=a.self.location.protocol.slice(0,-1)),r=!Pt.test(t?t.toLowerCase():"")}n=r}if(n)X(e,"complete"),X(e,"success");else{e.o=6;try{var s=Ut(e)>2?e.g.statusText:""}catch(e){s=""}e.l=s+" ["+e.ca()+"]",Mt(e)}}finally{Ft(e)}}}function Ft(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const n=e.g;e.g=null,t||X(e,"ready");try{n.onreadystatechange=null}catch(e){}}}function Ut(e){return e.g?e.g.readyState:0}function Vt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function zt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function jt(e){this.za=0,this.i=[],this.j=new ke,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zt("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zt("baseRetryDelayMs",5e3,e),this.Za=zt("retryDelaySeedMs",1e4,e),this.Ta=zt("forwardChannelMaxRetries",2,e),this.va=zt("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new He(e&&e.concurrentRequestLimit),this.Ba=new _t,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Bt(e){if(qt(e),3==e.I){var t=e.V++,n=et(e.J);if(it(n,"SID",e.M),it(n,"RID",t),it(n,"TYPE","terminate"),$t(e,n),(t=new Ne(e,e.j,t)).M=2,t.A=at(et(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&a.Image&&((new Image).src=t.A,n=!0),n||(t.g=sn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),Ue(t)}rn(e)}function Wt(e){e.g&&(Jt(e),e.g.cancel(),e.g=null)}function qt(e){Wt(e),e.v&&(a.clearTimeout(e.v),e.v=null),Zt(e),e.h.cancel(),e.m&&("number"==typeof e.m&&a.clearTimeout(e.m),e.m=null)}function Ht(e){if(!Ke(e.h)&&!e.m){e.m=!0;var t=e.Ea;v||E(),w||(v(),w=!0),b.add(t,e),e.D=0}}function Kt(e,t){var n;n=t?t.l:e.V++;const r=et(e.J);it(r,"SID",e.M),it(r,"RID",n),it(r,"AID",e.K),$t(e,r),e.u&&e.o&&Nt(r,e.u,e.o),n=new Ne(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Gt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),Qe(e.h,n),Oe(n,r,t)}function $t(e,t){e.H&&P(e.H,function(e,n){it(t,n,e)}),e.l&&P({},function(e,n){it(t,n,e)})}function Gt(e,t,n){n=Math.min(e.i.length,n);const r=e.l?l(e.l.Ka,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let l=!0;for(let c=0;c<n;c++){var a=i[c].g;const n=i[c].map;if((a-=t)<0)t=Math.max(0,i[c].g-100),l=!1;else try{a="req"+a+"_"||"";try{var o=n instanceof Map?n:Object.entries(n);for(const[t,n]of o){let r=n;s(n)&&(r=ae(n)),e.push(a+t+"="+encodeURIComponent(r))}}catch(t){throw e.push(a+"type="+encodeURIComponent("_badmap")),t}}catch(e){r&&r(n)}}if(l){o=e.join("&");break e}}o=void 0}return e=e.i.splice(0,n),t.G=e,o}function Qt(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;v||E(),w||(v(),w=!0),b.add(t,e),e.A=0}}function Yt(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=Ee(l(e.Da,e),tn(e,e.A)),e.A++,!0)}function Jt(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Xt(e){e.g=new Ne(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=et(e.na);it(t,"RID","rpc"),it(t,"SID",e.M),it(t,"AID",e.K),it(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&it(t,"TO",e.ia),it(t,"TYPE","xmlhttp"),$t(e,t),e.u&&e.o&&Nt(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=at(et(t)),n.u=null,n.R=!0,Me(n,e)}function Zt(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function en(e,t){var n=null;if(e.g==t){Zt(e),Jt(e),e.g=null;var r=2}else{if(!Ge(e.h,t))return;n=t.G,Ye(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var i=e.D;X(r=me(),new be(r,n)),Ht(e)}else Qt(e);else if(3==(i=t.m)||0==i&&t.X>0||!(1==r&&function(e,t){return!($e(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=Ee(l(e.Ea,e,t),tn(e,e.D)),e.D++,0)))}(e,t)||2==r&&Yt(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),i){case 1:nn(e,5);break;case 4:nn(e,10);break;case 3:nn(e,6);break;default:nn(e,2)}}function tn(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function nn(e,t){if(e.j.info("Error code "+t),2==t){var n=l(e.bb,e),r=e.Ua;const t=!r;r=new Ze(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||tt(r,"https"),at(r),t?function(e,t){const n=new ke;if(a.Image){const r=new Image;r.onload=c(kt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(kt,n,"TestLoadImage: error",!1,t,r),r.onabort=c(kt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(kt,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new ke;const n=new AbortController,r=setTimeout(()=>{n.abort(),kt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?kt(0,0,!0,t):kt(0,0,!1,t)}).catch(()=>{clearTimeout(r),kt(0,0,!1,t)})}(r.toString(),n)}else we(2);e.I=0,e.l&&e.l.pa(t),rn(e),qt(e)}function rn(e){if(e.I=0,e.ja=[],e.l){const t=Je(e.h);0==t.length&&0==e.i.length||(f(e.ja,t),f(e.ja,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.oa()}}function an(e,t,n){var r=n instanceof Ze?et(n):new Ze(n);if(""!=r.g)t&&(r.g=t+"."+r.g),nt(r,r.u);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;const e=new Ze(null);r&&tt(e,r),t&&(e.g=t),i&&nt(e,i),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&it(r,n,t),it(r,"VER",e.ka),$t(e,r),r}function sn(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new Rt(new It({ab:n})):new Rt(e.ma)).Fa(e.L),t}function on(){}function ln(){}function cn(e,t){J.call(this),this.g=new jt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!S(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new dn(this)}function un(e){he.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function hn(){de.call(this),this.status=1}function dn(e){this.g=e}(e=Rt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ie.g(),this.g.onreadystatechange=h(l(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){return void Ot(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=a.FormData&&e instanceof a.FormData,!(Array.prototype.indexOf.call(Dt,t,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(e){Ot(this,e)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,X(this,"complete"),X(this,"abort"),Ft(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ft(this,!0)),Rt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Lt(this):this.Xa())},e.Xa=function(){Lt(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return Ut(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),se(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=jt.prototype).ka=8,e.I=1,e.connect=function(e,t,n,r){we(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=an(this,null,this.W),Ht(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ne(this,this.j,e);let a=this.o;if(this.U&&(a?(a=D(a),M(a,this.U)):a=this.U),null!==this.u||this.R||(i.J=a,a=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if((t+=r)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Gt(this,i,t),it(n=et(this.J),"RID",e),it(n,"CVER",22),this.G&&it(n,"X-HTTP-Session-Id",this.G),$t(this,n),a&&(this.R?t="headers="+Ae(xt(a))+"&"+t:this.u&&Nt(n,this.u,a)),Qe(this.h,i),this.Ra&&it(n,"TYPE","init"),this.S?(it(n,"$req",t),it(n,"SID","null"),i.U=!0,Oe(i,n,null)):Oe(i,n,t),this.I=2}}else 3==this.I&&(e?Kt(this,e):0==this.i.length||Ke(this.h)||Kt(this))},e.Da=function(){if(this.v=null,Xt(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=Ee(l(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,we(10),Wt(this),Xt(this))},e.Va=function(){null!=this.C&&(this.C=null,Wt(this),Yt(this),we(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=on.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},ln.prototype.g=function(e,t){return new cn(e,t)},u(cn,J),cn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Bt(this.g)},cn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ae(e),e=n);t.i.push(new qe(t.Ya++,e)),3==t.I&&Ht(t)},cn.prototype.N=function(){this.g.l=null,delete this.j,Bt(this.g),delete this.g,cn.Z.N.call(this)},u(un,he),u(hn,de),u(dn,on),dn.prototype.ra=function(){X(this.g,"a")},dn.prototype.qa=function(e){X(this.g,new un(e))},dn.prototype.pa=function(e){X(this.g,new hn)},dn.prototype.oa=function(){X(this.g,"b")},ln.prototype.createWebChannel=ln.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,Sv=function(){return new ln},Tv=function(){return me()},Iv=fe,_v={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Te.NO_ERROR=0,Te.TIMEOUT=8,Te.HTTP_ERROR=6,kv=Te,Se.COMPLETE="complete",Ev=Se,ce.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",J.prototype.listen=J.prototype.J,bv=ce,Rt.prototype.listenOnce=Rt.prototype.K,Rt.prototype.getLastError=Rt.prototype.Ha,Rt.prototype.getLastErrorCode=Rt.prototype.ya,Rt.prototype.getStatus=Rt.prototype.ca,Rt.prototype.getResponseJson=Rt.prototype.La,Rt.prototype.getResponseText=Rt.prototype.la,Rt.prototype.send=Rt.prototype.ea,Rt.prototype.setWithCredentials=Rt.prototype.Fa,wv=Rt}).apply(void 0!==Cv?Cv:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
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
class Av{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Av.UNAUTHENTICATED=new Av(null),Av.GOOGLE_CREDENTIALS=new Av("google-credentials-uid"),Av.FIRST_PARTY=new Av("first-party-uid"),Av.MOCK_USER=new Av("mock-user");
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
let xv="12.12.0";
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
const Nv=new Rh("@firebase/firestore");function Rv(){return Nv.logLevel}function Pv(e,...t){if(Nv.logLevel<=Th.DEBUG){const n=t.map(Mv);Nv.debug(`Firestore (${xv}): ${e}`,...n)}}function Dv(e,...t){if(Nv.logLevel<=Th.ERROR){const n=t.map(Mv);Nv.error(`Firestore (${xv}): ${e}`,...n)}}function Ov(e,...t){if(Nv.logLevel<=Th.WARN){const n=t.map(Mv);Nv.warn(`Firestore (${xv}): ${e}`,...n)}}function Mv(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}var t}
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
 */function Lv(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Fv(e,r,n)}function Fv(e,t,n){let r=`FIRESTORE (${xv}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw Dv(r),new Error(r)}function Uv(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||Fv(t,i,r)}function Vv(e,t){return e}
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
 */const zv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jv extends oh{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Bv{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
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
 */class Wv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Av.UNAUTHENTICATED))}shutdown(){}}class Hv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Kv{constructor(e){this.t=e,this.currentUser=Av.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Uv(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Bv;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bv,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},s=e=>{Pv("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(e=>s(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(Pv("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bv)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(Pv("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Uv("string"==typeof t.accessToken,31837,{l:t}),new Wv(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Uv(null===e||"string"==typeof e,2055,{h:e}),new Av(e)}}class $v{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Av.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Gv{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new $v(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Av.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dd(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Uv(void 0===this.o,3512);const n=e=>{null!=e.error&&Pv("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,Pv("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{Pv("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):Pv("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(Uv("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new Qv(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */function Jv(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class Xv{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=Jv(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function Zv(e,t){return e<t?-1:e>t?1:0}function ew(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),i=t.charAt(r);if(n!==i)return rw(n)===rw(i)?Zv(n,i):rw(n)?1:-1}return Zv(e.length,t.length)}const tw=55296,nw=57343;function rw(e){const t=e.charCodeAt(0);return t>=tw&&t<=nw}function iw(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
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
 */const aw="__name__";class sw{constructor(e,t,n){void 0===t?t=0:t>e.length&&Lv(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Lv(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===sw.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sw?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=sw.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Zv(e.length,t.length)}static compareSegments(e,t){const n=sw.isNumericId(e),r=sw.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?sw.extractNumericId(e).compare(sw.extractNumericId(t)):ew(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gv.fromString(e.substring(4,e.length-2))}}class ow extends sw{construct(e,t,n){return new ow(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new jv(zv.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new ow(t)}static emptyPath(){return new ow([])}}const lw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class cw extends sw{construct(e,t,n){return new cw(e,t,n)}static isValidIdentifier(e){return lw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),cw.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===aw}static keyField(){return new cw([aw])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new jv(zv.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new jv(zv.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new jv(zv.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(a=!a,r++):"."!==t||a?(n+=t,r++):(i(),r++)}if(i(),a)throw new jv(zv.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new cw(t)}static emptyPath(){return new cw([])}}
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
 */class uw{constructor(e){this.path=e}static fromPath(e){return new uw(ow.fromString(e))}static fromName(e){return new uw(ow.fromString(e).popFirst(5))}static empty(){return new uw(ow.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ow.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ow.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new uw(new ow(e.slice()))}}
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
 */function hw(e,t,n){if(!n)throw new jv(zv.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function dw(e){if(!uw.isDocumentKey(e))throw new jv(zv.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function fw(e){if(uw.isDocumentKey(e))throw new jv(zv.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function pw(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function mw(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Lv(12329,{type:typeof e})}function gw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new jv(zv.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mw(e);throw new jv(zv.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
 */function yw(e,t){const n={typeString:e};return t&&(n.value=t),n}function vw(e,t){if(!pw(e))throw new jv(zv.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const s=e[r];if(i&&typeof s!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==a&&s!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new jv(zv.INVALID_ARGUMENT,n);return!0}
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
 */const ww=-62135596800,bw=1e6;class Ew{static now(){return Ew.fromMillis(Date.now())}static fromDate(e){return Ew.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*bw);return new Ew(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new jv(zv.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new jv(zv.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ww)throw new jv(zv.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new jv(zv.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bw}_compareTo(e){return this.seconds===e.seconds?Zv(this.nanoseconds,e.nanoseconds):Zv(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ew._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vw(e,Ew._jsonSchema))return new Ew(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ww;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ew._jsonSchemaVersion="firestore/timestamp/1.0",Ew._jsonSchema={type:yw("string",Ew._jsonSchemaVersion),seconds:yw("number"),nanoseconds:yw("number")};
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
class kw{static fromTimestamp(e){return new kw(e)}static min(){return new kw(new Ew(0,0))}static max(){return new kw(new Ew(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function _w(e){return new Iw(e.readTime,e.key,-1)}class Iw{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Iw(kw.min(),uw.empty(),-1)}static max(){return new Iw(kw.max(),uw.empty(),-1)}}function Tw(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=uw.comparator(e.documentKey,t.documentKey),0!==n?n:Zv(e.largestBatchId,t.largestBatchId)
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
 */)}class Sw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
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
 */async function Cw(e){if(e.code!==zv.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Pv("LocalStore","Unexpectedly lost primary lease")}
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
 */class Aw{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Lv(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Aw((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Aw?t:Aw.resolve(t)}catch(e){return Aw.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Aw.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Aw.reject(t)}static resolve(e){return new Aw((t,n)=>{t(e)})}static reject(e){return new Aw((t,n)=>{n(e)})}static waitFor(e){return new Aw((t,n)=>{let r=0,i=0,a=!1;e.forEach(e=>{++r,e.next(()=>{++i,a&&i===r&&t()},e=>n(e))}),a=!0,i===r&&t()})}static or(e){let t=Aw.resolve(!1);for(const n of e)t=t.next(e=>e?Aw.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Aw((n,r)=>{const i=e.length,a=new Array(i);let s=0;for(let o=0;o<i;o++){const l=o;t(e[l]).next(e=>{a[l]=e,++s,s===i&&n(a)},e=>r(e))}})}static doWhile(e,t){return new Aw((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function xw(e){return"IndexedDbTransactionError"===e.name}
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
 */class Nw{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Nw.ce=-1;function Rw(e){return null==e}function Pw(e){return 0===e&&1/e==-1/0}function Dw(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Ow(e){return e+""}
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
 */function Mw(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Lw(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Fw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class Uw{constructor(e,t){this.comparator=e,this.root=t||zw.EMPTY}insert(e,t){return new Uw(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zw.BLACK,null,null))}remove(e){return new Uw(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zw.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vw(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vw(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vw(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vw(this.root,e,this.comparator,!0)}}class Vw{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zw{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:zw.RED,this.left=null!=r?r:zw.EMPTY,this.right=null!=i?i:zw.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new zw(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return zw.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return zw.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zw.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zw.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Lv(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Lv(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Lv(27949);return e+(this.isRed()?0:1)}}zw.EMPTY=null,zw.RED=!0,zw.BLACK=!1,zw.EMPTY=new class{constructor(){this.size=0}get key(){throw Lv(57766)}get value(){throw Lv(16141)}get color(){throw Lv(16727)}get left(){throw Lv(29726)}get right(){throw Lv(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new zw(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class jw{constructor(e){this.comparator=e,this.data=new Uw(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bw(this.data.getIterator())}getIteratorFrom(e){return new Bw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof jw))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new jw(this.comparator);return t.data=e,t}}class Bw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */class Ww{constructor(e){this.fields=e,e.sort(cw.comparator)}static empty(){return new Ww([])}unionWith(e){let t=new jw(cw.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Ww(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return iw(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
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
 */class qw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class Hw{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new qw("Invalid base64 string: "+e):e}}(e);return new Hw(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Hw(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Zv(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Hw.EMPTY_BYTE_STRING=new Hw("");const Kw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $w(e){if(Uv(!!e,39018),"string"==typeof e){let t=0;const n=Kw.exec(e);if(Uv(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Gw(e.seconds),nanos:Gw(e.nanos)}}function Gw(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Qw(e){return"string"==typeof e?Hw.fromBase64String(e):Hw.fromUint8Array(e)}
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
 */const Yw="server_timestamp",Jw="__type__",Xw="__previous_value__",Zw="__local_write_time__";function eb(e){const t=(e?.mapValue?.fields||{})[Jw]?.stringValue;return t===Yw}function tb(e){const t=e.mapValue.fields[Xw];return eb(t)?tb(t):t}function nb(e){const t=$w(e.mapValue.fields[Zw].timestampValue);return new Ew(t.seconds,t.nanos)}
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
 */class rb{constructor(e,t,n,r,i,a,s,o,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=s,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=c,this.apiKey=u}}const ib="(default)";class ab{constructor(e,t){this.projectId=e,this.database=t||ib}static empty(){return new ab("","")}get isDefaultDatabase(){return this.database===ib}isEqual(e){return e instanceof ab&&e.projectId===this.projectId&&e.database===this.database}}
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
const sb="__type__",ob="__max__",lb={fields:{__type__:{stringValue:ob}}},cb="__vector__",ub="value";function hb(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eb(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===ob}
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
 */(e)?9007199254740991:function(e){const t=(e?.mapValue?.fields||{})[sb]?.stringValue;return t===cb}(e)?10:11:Lv(28295,{value:e})}function db(e,t){if(e===t)return!0;const n=hb(e);if(n!==hb(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return nb(e).isEqual(nb(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=$w(e.timestampValue),r=$w(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Qw(e.bytesValue).isEqual(Qw(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Gw(e.geoPointValue.latitude)===Gw(t.geoPointValue.latitude)&&Gw(e.geoPointValue.longitude)===Gw(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Gw(e.integerValue)===Gw(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Gw(e.doubleValue),r=Gw(t.doubleValue);return n===r?Pw(n)===Pw(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return iw(e.arrayValue.values||[],t.arrayValue.values||[],db);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Mw(n)!==Mw(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!db(n[e],r[e])))return!1;return!0}(e,t);default:return Lv(52216,{left:e})}var r}function fb(e,t){return void 0!==(e.values||[]).find(e=>db(e,t))}function pb(e,t){if(e===t)return 0;const n=hb(e),r=hb(t);if(n!==r)return Zv(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Zv(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Gw(e.integerValue||e.doubleValue),r=Gw(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return mb(e.timestampValue,t.timestampValue);case 4:return mb(nb(e),nb(t));case 5:return ew(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Qw(e),r=Qw(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Zv(n[e],r[e]);if(0!==t)return t}return Zv(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Zv(Gw(e.latitude),Gw(t.latitude));return 0!==n?n:Zv(Gw(e.longitude),Gw(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return gb(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},i=n[ub]?.arrayValue,a=r[ub]?.arrayValue,s=Zv(i?.values?.length||0,a?.values?.length||0);return 0!==s?s:gb(i,a)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===lb&&t===lb)return 0;if(e===lb)return 1;if(t===lb)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(let e=0;e<r.length&&e<a.length;++e){const t=ew(r[e],a[e]);if(0!==t)return t;const s=pb(n[r[e]],i[a[e]]);if(0!==s)return s}return Zv(r.length,a.length)}(e.mapValue,t.mapValue);default:throw Lv(23264,{he:n})}}function mb(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Zv(e,t);const n=$w(e),r=$w(t),i=Zv(n.seconds,r.seconds);return 0!==i?i:Zv(n.nanos,r.nanos)}function gb(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=pb(n[e],r[e]);if(t)return t}return Zv(n.length,r.length)}function yb(e){return vb(e)}function vb(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=$w(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Qw(e.bytesValue).toBase64():"referenceValue"in e?function(e){return uw.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=vb(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${vb(e.fields[i])}`;return n+"}"}(e.mapValue):Lv(61005,{value:e})}function wb(e){switch(hb(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=tb(e);return t?16+wb(t):16;case 5:return 2*e.stringValue.length;case 6:return Qw(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce((e,t)=>e+wb(t),0);case 10:case 11:return function(e){let t=0;return Lw(e.fields,(e,n)=>{t+=e.length+wb(n)}),t}(e.mapValue);default:throw Lv(13486,{value:e})}}function bb(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Eb(e){return!!e&&"integerValue"in e}function kb(e){return!!e&&"arrayValue"in e}function _b(e){return!!e&&"nullValue"in e}function Ib(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tb(e){return!!e&&"mapValue"in e}function Sb(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Lw(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Sb(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Sb(e.arrayValue.values[n]);return t}return{...e}}class Cb{constructor(e){this.value=e}static empty(){return new Cb({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Tb(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sb(t)}setAll(e){let t=cw.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Sb(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Tb(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return db(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Tb(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Lw(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new Cb(Sb(this.value))}}function Ab(e){const t=[];return Lw(e.fields,(e,n)=>{const r=new cw([e]);if(Tb(n)){const e=Ab(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new Ww(t)
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
 */}class xb{constructor(e,t,n,r,i,a,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=a,this.documentState=s}static newInvalidDocument(e){return new xb(e,0,kw.min(),kw.min(),kw.min(),Cb.empty(),0)}static newFoundDocument(e,t,n,r){return new xb(e,1,t,kw.min(),n,r,0)}static newNoDocument(e,t){return new xb(e,2,t,kw.min(),kw.min(),Cb.empty(),0)}static newUnknownDocument(e,t){return new xb(e,3,t,kw.min(),kw.min(),Cb.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(kw.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cb.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cb.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=kw.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof xb&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xb(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Nb{constructor(e,t){this.position=e,this.inclusive=t}}function Rb(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const a=t[i],s=e.position[i];if(r=a.field.isKeyField()?uw.comparator(uw.fromName(s.referenceValue),n.key):pb(s,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function Pb(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!db(e.position[n],t.position[n]))return!1;return!0}
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
 */class Db{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ob(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Mb{}class Lb extends Mb{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Wb(e,t,n):"array-contains"===t?new $b(e,n):"in"===t?new Gb(e,n):"not-in"===t?new Qb(e,n):"array-contains-any"===t?new Yb(e,n):new Lb(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new qb(e,n):new Hb(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(pb(t,this.value)):null!==t&&hb(this.value)===hb(t)&&this.matchesComparison(pb(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Lv(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fb extends Mb{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Fb(e,t)}matches(e){return Ub(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ub(e){return"and"===e.op}function Vb(e){return function(e){for(const t of e.filters)if(t instanceof Fb)return!1;return!0}(e)&&Ub(e)}function zb(e){if(e instanceof Lb)return e.field.canonicalString()+e.op.toString()+yb(e.value);if(Vb(e))return e.filters.map(e=>zb(e)).join(",");{const t=e.filters.map(e=>zb(e)).join(",");return`${e.op}(${t})`}}function jb(e,t){return e instanceof Lb?(n=e,(r=t)instanceof Lb&&n.op===r.op&&n.field.isEqual(r.field)&&db(n.value,r.value)):e instanceof Fb?function(e,t){return t instanceof Fb&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&jb(n,t.filters[r]),!0)}(e,t):void Lv(19439);var n,r}function Bb(e){return e instanceof Lb?`${(t=e).field.canonicalString()} ${t.op} ${yb(t.value)}`:e instanceof Fb?function(e){return e.op.toString()+" {"+e.getFilters().map(Bb).join(" ,")+"}"}(e):"Filter";var t}class Wb extends Lb{constructor(e,t,n){super(e,t,n),this.key=uw.fromName(n.referenceValue)}matches(e){const t=uw.comparator(e.key,this.key);return this.matchesComparison(t)}}class qb extends Lb{constructor(e,t){super(e,"in",t),this.keys=Kb("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Hb extends Lb{constructor(e,t){super(e,"not-in",t),this.keys=Kb("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Kb(e,t){return(t.arrayValue?.values||[]).map(e=>uw.fromName(e.referenceValue))}class $b extends Lb{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kb(t)&&fb(t.arrayValue,this.value)}}class Gb extends Lb{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&fb(this.value.arrayValue,t)}}class Qb extends Lb{constructor(e,t){super(e,"not-in",t)}matches(e){if(fb(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!fb(this.value.arrayValue,t)}}class Yb extends Lb{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kb(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>fb(this.value.arrayValue,e))}}
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
 */class Jb{constructor(e,t=null,n=[],r=[],i=null,a=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=s,this.Te=null}}function Xb(e,t=null,n=[],r=[],i=null,a=null,s=null){return new Jb(e,t,n,r,i,a,s)}function Zb(e){const t=Vv(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>zb(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),Rw(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>yb(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>yb(e)).join(",")),t.Te=e}return t.Te}function eE(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ob(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!jb(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Pb(e.startAt,t.startAt)&&Pb(e.endAt,t.endAt)}function tE(e){return uw.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
 */class nE{constructor(e,t=null,n=[],r=[],i=null,a="F",s=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=s,this.endAt=o,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function rE(e){return new nE(e)}function iE(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function aE(e){return null!==e.collectionGroup}function sE(e){const t=Vv(e);if(null===t.Ee){t.Ee=[];const e=new Set;for(const n of t.explicitOrderBy)t.Ee.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new jw(cw.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ee.push(new Db(r,n))}),e.has(cw.keyField().canonicalString())||t.Ee.push(new Db(cw.keyField(),n))}return t.Ee}function oE(e){const t=Vv(e);return t.Ie||(t.Ie=function(e,t){if("F"===e.limitType)return Xb(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new Db(e.field,t)});const n=e.endAt?new Nb(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Nb(e.startAt.position,e.startAt.inclusive):null;return Xb(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,sE(e))),t.Ie}function lE(e,t){const n=e.filters.concat([t]);return new nE(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function cE(e,t,n){return new nE(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function uE(e,t){return eE(oE(e),oE(t))&&e.limitType===t.limitType}function hE(e){return`${Zb(oE(e))}|lt:${e.limitType}`}function dE(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Bb(e)).join(", ")}]`),Rw(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>yb(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>yb(e)).join(",")),`Target(${t})`}(oE(e))}; limitType=${e.limitType})`}function fE(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):uw.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of sE(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Rb(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,sE(n),r)||n.endAt&&!function(e,t,n){const r=Rb(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,sE(n),r)));var n,r}function pE(e){return(t,n)=>{let r=!1;for(const i of sE(e)){const e=mE(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function mE(e,t,n){const r=e.field.isKeyField()?uw.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?pb(r,i):Lv(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Lv(19790,{direction:e.dir})}}
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
 */class gE{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Lw(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return Fw(this.inner)}size(){return this.innerSize}}
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
 */const yE=new Uw(uw.comparator);function vE(){return yE}const wE=new Uw(uw.comparator);function bE(...e){let t=wE;for(const n of e)t=t.insert(n.key,n);return t}function EE(e){let t=wE;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function kE(){return IE()}function _E(){return IE()}function IE(){return new gE(e=>e.toString(),(e,t)=>e.isEqual(t))}const TE=new Uw(uw.comparator),SE=new jw(uw.comparator);function CE(...e){let t=SE;for(const n of e)t=t.add(n);return t}const AE=new jw(Zv);
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
function xE(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pw(t)?"-0":t}}function NE(e){return{integerValue:""+e}}function RE(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Pw(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */(t)?NE(t):xE(e,t)}
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
 */class PE{constructor(){this._=void 0}}function DE(e,t,n){return e instanceof LE?function(e,t){const n={fields:{[Jw]:{stringValue:Yw},[Zw]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eb(t)&&(t=tb(t)),t&&(n.fields[Xw]=t),{mapValue:n}}(n,t):e instanceof FE?UE(e,t):e instanceof VE?zE(e,t):function(e,t){const n=ME(e,t),r=BE(n)+BE(e.Ae);return Eb(n)&&Eb(e.Ae)?NE(r):xE(e.serializer,r)}(e,t)}function OE(e,t,n){return e instanceof FE?UE(e,t):e instanceof VE?zE(e,t):n}function ME(e,t){return e instanceof jE?Eb(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class LE extends PE{}class FE extends PE{constructor(e){super(),this.elements=e}}function UE(e,t){const n=WE(t);for(const t of e.elements)n.some(e=>db(e,t))||n.push(t);return{arrayValue:{values:n}}}class VE extends PE{constructor(e){super(),this.elements=e}}function zE(e,t){let n=WE(t);for(const t of e.elements)n=n.filter(e=>!db(e,t));return{arrayValue:{values:n}}}class jE extends PE{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function BE(e){return Gw(e.integerValue||e.doubleValue)}function WE(e){return kb(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class qE{constructor(e,t){this.field=e,this.transform=t}}class HE{constructor(e,t){this.version=e,this.transformResults=t}}class KE{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new KE}static exists(e){return new KE(void 0,e)}static updateTime(e){return new KE(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $E(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class GE{}function QE(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ak(e.key,KE.none()):new ek(e.key,e.data,KE.none());{const n=e.data,r=Cb.empty();let i=new jw(cw.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new tk(e.key,r,new Ww(i.toArray()),KE.none())}}function YE(e,t,n){var r;e instanceof ek?function(e,t,n){const r=e.value.clone(),i=rk(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof tk?function(e,t,n){if(!$E(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=rk(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(nk(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function JE(e,t,n,r){return e instanceof ek?function(e,t,n,r){if(!$E(e.precondition,t))return n;const i=e.value.clone(),a=ik(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof tk?function(e,t,n,r){if(!$E(e.precondition,t))return n;const i=ik(e.fieldTransforms,r,t),a=t.data;return a.setAll(nk(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(i=t,a=n,$E(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function XE(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=ME(r.transform,e||null);null!=i&&(null===n&&(n=Cb.empty()),n.set(r.field,i))}return n||null}function ZE(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&iw(n,r,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof FE&&r instanceof FE||n instanceof VE&&r instanceof VE?iw(n.elements,r.elements,db):n instanceof jE&&r instanceof jE?db(n.Ae,r.Ae):n instanceof LE&&r instanceof LE);var n,r}(e,t)))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class ek extends GE{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class tk extends GE{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nk(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function rk(e,t,n){const r=new Map;Uv(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let i=0;i<n.length;i++){const a=e[i],s=a.transform,o=t.data.field(a.field);r.set(a.field,OE(s,o,n[i]))}return r}function ik(e,t,n){const r=new Map;for(const i of e){const e=i.transform,a=n.data.field(i.field);r.set(i.field,DE(e,a,t))}return r}class ak extends GE{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sk extends GE{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class ok{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&YE(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=JE(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=JE(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=_E();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let s=this.applyToLocalView(a,i.mutatedFields);s=t.has(r.key)?null:s;const o=QE(a,s);null!==o&&n.set(r.key,o),a.isValidDocument()||a.convertToNoDocument(kw.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),CE())}isEqual(e){return this.batchId===e.batchId&&iw(this.mutations,e.mutations,(e,t)=>ZE(e,t))&&iw(this.baseMutations,e.baseMutations,(e,t)=>ZE(e,t))}}class lk{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Uv(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=TE;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new lk(e,t,n,r)}}
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
 */class ck{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class uk{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var hk,dk;function fk(e){if(void 0===e)return Dv("GRPC error has no .code"),zv.UNKNOWN;switch(e){case hk.OK:return zv.OK;case hk.CANCELLED:return zv.CANCELLED;case hk.UNKNOWN:return zv.UNKNOWN;case hk.DEADLINE_EXCEEDED:return zv.DEADLINE_EXCEEDED;case hk.RESOURCE_EXHAUSTED:return zv.RESOURCE_EXHAUSTED;case hk.INTERNAL:return zv.INTERNAL;case hk.UNAVAILABLE:return zv.UNAVAILABLE;case hk.UNAUTHENTICATED:return zv.UNAUTHENTICATED;case hk.INVALID_ARGUMENT:return zv.INVALID_ARGUMENT;case hk.NOT_FOUND:return zv.NOT_FOUND;case hk.ALREADY_EXISTS:return zv.ALREADY_EXISTS;case hk.PERMISSION_DENIED:return zv.PERMISSION_DENIED;case hk.FAILED_PRECONDITION:return zv.FAILED_PRECONDITION;case hk.ABORTED:return zv.ABORTED;case hk.OUT_OF_RANGE:return zv.OUT_OF_RANGE;case hk.UNIMPLEMENTED:return zv.UNIMPLEMENTED;case hk.DATA_LOSS:return zv.DATA_LOSS;default:return Lv(39323,{code:e})}}(dk=hk||(hk={}))[dk.OK=0]="OK",dk[dk.CANCELLED=1]="CANCELLED",dk[dk.UNKNOWN=2]="UNKNOWN",dk[dk.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",dk[dk.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",dk[dk.NOT_FOUND=5]="NOT_FOUND",dk[dk.ALREADY_EXISTS=6]="ALREADY_EXISTS",dk[dk.PERMISSION_DENIED=7]="PERMISSION_DENIED",dk[dk.UNAUTHENTICATED=16]="UNAUTHENTICATED",dk[dk.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",dk[dk.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",dk[dk.ABORTED=10]="ABORTED",dk[dk.OUT_OF_RANGE=11]="OUT_OF_RANGE",dk[dk.UNIMPLEMENTED=12]="UNIMPLEMENTED",dk[dk.INTERNAL=13]="INTERNAL",dk[dk.UNAVAILABLE=14]="UNAVAILABLE",dk[dk.DATA_LOSS=15]="DATA_LOSS";
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
 */
const pk=new gv([4294967295,4294967295],0);function mk(e){const t=(new TextEncoder).encode(e),n=new yv;return n.update(t),new Uint8Array(n.digest())}function gk(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new gv([n,r],0),new gv([i,a],0)]}class yk{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new vk(`Invalid padding: ${t}`);if(n<0)throw new vk(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new vk(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new vk(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=gv.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(gv.fromNumber(n)));return 1===r.compare(pk)&&(r=new gv([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=mk(e),[n,r]=gk(t);for(let e=0;e<this.hashCount;e++){const t=this.ye(n,r,e);if(!this.we(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new yk(i,r,t);return n.forEach(e=>a.insert(e)),a}insert(e){if(0===this.ge)return;const t=mk(e),[n,r]=gk(t);for(let e=0;e<this.hashCount;e++){const t=this.ye(n,r,e);this.Se(t)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class vk extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class wk{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,bk.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new wk(kw.min(),r,new Uw(Zv),vE(),CE())}}class bk{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new bk(n,t,CE(),CE(),CE())}}
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
 */class Ek{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class kk{constructor(e,t){this.targetId=e,this.Ce=t}}class _k{constructor(e,t,n=Hw.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ik{constructor(){this.ve=0,this.Fe=Ck(),this.Me=Hw.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=CE(),t=CE(),n=CE();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Lv(38017,{changeType:i})}}),new bk(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Ck()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Uv(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Tk{constructor(e){this.Ge=e,this.ze=new Map,this.je=vE(),this.Je=Sk(),this.He=Sk(),this.Ze=new Uw(Zv)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:Lv(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(tE(i))if(0===n){const e=new uw(i.path);this.et(t,e,xb.newNoDocument(e,kw.min()))}else Uv(1===n,20013,{expectedCount:n});else{const r=this._t(t);if(r!==n){const n=this.ut(e),i=n?this.ct(n,e,r):1;if(0!==i){this.it(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,e)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let a,s;try{a=Qw(n).toUint8Array()}catch(e){if(e instanceof qw)return Ov("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{s=new yk(a,r,i)}catch(e){return Ov(e instanceof vk?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===s.ge?null:s}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),a=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(a)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&tE(i.target)){const t=new uw(i.target.path);this.Et(t).has(r)||this.It(r,t)||this.et(r,t,xb.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=CE();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new wk(e,t,this.Ze,this.je,n);return this.je=vE(),this.Je=Sk(),this.He=Sk(),this.Ze=new Uw(Zv),r}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Ik,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new jw(Zv),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new jw(Zv),this.Je=this.Je.insert(e,t)),t}rt(e){const t=null!==this.ot(e);return t||Pv("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ik),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Sk(){return new Uw(uw.comparator)}function Ck(){return new Uw(uw.comparator)}const Ak={asc:"ASCENDING",desc:"DESCENDING"},xk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nk={and:"AND",or:"OR"};class Rk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pk(e,t){return e.useProto3Json||Rw(t)?t:{value:t}}function Dk(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ok(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Mk(e,t){return Dk(e,t.toTimestamp())}function Lk(e){return Uv(!!e,49232),kw.fromTimestamp(function(e){const t=$w(e);return new Ew(t.seconds,t.nanos)}(e))}function Fk(e,t){return Uk(e,t).canonicalString()}function Uk(e,t){const n=(r=e,new ow(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function Vk(e){const t=ow.fromString(e);return Uv(r_(t),10190,{key:t.toString()}),t}function zk(e,t){return Fk(e.databaseId,t.path)}function jk(e,t){const n=Vk(t);if(n.get(1)!==e.databaseId.projectId)throw new jv(zv.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new jv(zv.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new uw(qk(n))}function Bk(e,t){return Fk(e.databaseId,t)}function Wk(e){return new ow(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qk(e){return Uv(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Hk(e,t,n){return{name:zk(e,t),fields:n.value.mapValue.fields}}function Kk(e,t){return{documents:[Bk(e,t.path)]}}function $k(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bk(e,i);const a=function(e){if(0!==e.length)return t_(Fb.create(e,"and"))}(t.filters);a&&(n.structuredQuery.where=a);const s=function(e){if(0!==e.length)return e.map(e=>{return{field:Zk((t=e).field),direction:Yk(t.dir)};var t})}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Pk(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:i};var l}function Gk(e){let t=function(e){const t=Vk(e);return 4===t.length?ow.emptyPath():qk(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Uv(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let a=[];n.where&&(a=function(e){const t=Qk(e);return t instanceof Fb&&Vb(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(e=>{return new Db(e_((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,Rw(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Nb(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Nb(n,t)}(n.endAt)),function(e,t,n,r,i,a,s,o){return new nE(e,t,n,r,i,a,s,o)}(t,i,s,a,o,"F",l,c)}function Qk(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=e_(e.unaryFilter.field);return Lb.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=e_(e.unaryFilter.field);return Lb.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=e_(e.unaryFilter.field);return Lb.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=e_(e.unaryFilter.field);return Lb.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Lv(61313);default:return Lv(60726)}}(e):void 0!==e.fieldFilter?(t=e,Lb.create(e_(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Lv(58110);default:return Lv(50506)}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return Fb.create(e.compositeFilter.filters.map(e=>Qk(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Lv(1026)}}(e.compositeFilter.op))}(e):Lv(30097,{filter:e});var t}function Yk(e){return Ak[e]}function Jk(e){return xk[e]}function Xk(e){return Nk[e]}function Zk(e){return{fieldPath:e.canonicalString()}}function e_(e){return cw.fromServerFormat(e.fieldPath)}function t_(e){return e instanceof Lb?function(e){if("=="===e.op){if(Ib(e.value))return{unaryFilter:{field:Zk(e.field),op:"IS_NAN"}};if(_b(e.value))return{unaryFilter:{field:Zk(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ib(e.value))return{unaryFilter:{field:Zk(e.field),op:"IS_NOT_NAN"}};if(_b(e.value))return{unaryFilter:{field:Zk(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zk(e.field),op:Jk(e.op),value:e.value}}}(e):e instanceof Fb?function(e){const t=e.getFilters().map(e=>t_(e));return 1===t.length?t[0]:{compositeFilter:{op:Xk(e.op),filters:t}}}(e):Lv(54877,{filter:e})}function n_(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function r_(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function i_(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}
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
 */class a_{constructor(e,t,n,r,i=kw.min(),a=kw.min(),s=Hw.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=s,this.expectedCount=o}withSequenceNumber(e){return new a_(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new a_(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new a_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new a_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class s_{constructor(e){this.yt=e}}function o_(e){const t=Gk({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?cE(t,t.limit,"L"):t}
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
 */class l_{constructor(){this.bn=new c_}addToCollectionParentIndex(e,t){return this.bn.add(t),Aw.resolve()}getCollectionParents(e,t){return Aw.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return Aw.resolve()}deleteFieldIndex(e,t){return Aw.resolve()}deleteAllFieldIndexes(e){return Aw.resolve()}createTargetIndexes(e,t){return Aw.resolve()}getDocumentsMatchingTarget(e,t){return Aw.resolve(null)}getIndexType(e,t){return Aw.resolve(0)}getFieldIndexes(e,t){return Aw.resolve([])}getNextCollectionGroupToUpdate(e){return Aw.resolve(null)}getMinOffset(e,t){return Aw.resolve(Iw.min())}getMinOffsetFromCollectionGroup(e,t){return Aw.resolve(Iw.min())}updateCollectionGroup(e,t,n){return Aw.resolve()}updateIndexEntries(e,t){return Aw.resolve()}}class c_{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new jw(ow.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new jw(ow.comparator)).toArray()}}
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
 */const u_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},h_=41943040;class d_{static withCacheSize(e){return new d_(e,d_.DEFAULT_COLLECTION_PERCENTILE,d_.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
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
 */d_.DEFAULT_COLLECTION_PERCENTILE=10,d_.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,d_.DEFAULT=new d_(h_,d_.DEFAULT_COLLECTION_PERCENTILE,d_.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),d_.DISABLED=new d_(-1,0,0);
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
class f_{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new f_(0)}static ar(){return new f_(-1)}}
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
 */const p_="LruGarbageCollector";function m_([e,t],[n,r]){const i=Zv(e,n);return 0===i?Zv(t,r):i}class g_{constructor(e){this.Pr=e,this.buffer=new jw(m_),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();m_(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class y_{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(e){Pv(p_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xw(e)?Pv(p_,"Ignoring IndexedDB error during garbage collection: ",e):await Cw(e)}await this.Ar(3e5)})}}class v_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Aw.resolve(Nw.ce);const n=new g_(t);return this.Vr.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Vr.mr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Pv("LruGarbageCollector","Garbage collection skipped; disabled"),Aw.resolve(u_)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(Pv("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),u_):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,i,a,s,o,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(Pv("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,a=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,s=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),Rv()<=Th.DEBUG&&Pv("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${a-c}ms\n\tDetermined least recently used ${r} in `+(s-a)+`ms\n\tRemoved ${i} targets in `+(o-s)+`ms\n\tRemoved ${e} documents in `+(l-o)+`ms\nTotal Duration: ${l-c}ms`),Aw.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
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
class w_{constructor(){this.changes=new gE(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xb.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Aw.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class b_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class E_{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&JE(n.mutation,e,Ww.empty(),Ew.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,CE()).next(()=>t))}getLocalViewOfDocuments(e,t,n=CE()){const r=kE();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=bE();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=kE();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,CE()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=vE();const a=IE(),s=IE();return t.forEach((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof tk)?i=i.insert(t.key,t):void 0!==s?(a.set(t.key,s.mutation.getFieldMask()),JE(s.mutation,t,s.mutation.getFieldMask(),Ew.now())):a.set(t.key,Ww.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>a.set(e,t)),t.forEach((e,t)=>s.set(e,new b_(t,a.get(e)??null))),s))}recalculateAndSaveOverlays(e,t){const n=IE();let r=new Uw((e,t)=>e-t),i=CE();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const a=t.get(e);if(null===a)return;let s=n.get(e)||Ww.empty();s=i.applyToLocalView(a,s),n.set(e,s);const o=(r.get(i.batchId)||CE()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{const a=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),o=r.key,l=r.value,c=_E();l.forEach(e=>{if(!i.has(e)){const r=QE(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}}),a.push(this.documentOverlayCache.saveOverlays(e,o,c))}return Aw.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return uw.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):aE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Aw.resolve(kE());let s=-1,o=i;return a.next(t=>Aw.forEach(t,(t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(t)?Aw.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,CE())).next(e=>({batchId:s,changes:EE(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new uw(t)).next(e=>{let t=bE();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let a=bE();return this.indexManager.getCollectionParents(e,i).next(s=>Aw.forEach(s,s=>{const o=(l=t,c=s.child(i),new nE(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,c;return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{a=a.insert(e,t)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,xb.newInvalidDocument(r)))});let n=bE();return e.forEach((e,r)=>{const a=i.get(e);void 0!==a&&JE(a.mutation,r,Ww.empty(),Ew.now()),fE(t,r)&&(n=n.insert(e,r))}),n})}}
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
 */class k_{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return Aw.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,{id:(n=t).id,version:n.version,createTime:Lk(n.createTime)}),Aw.resolve();var n}getNamedQuery(e,t){return Aw.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,{name:(n=t).name,query:o_(n.bundledQuery),readTime:Lk(n.readTime)}),Aw.resolve();var n}}
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
 */class __{constructor(){this.overlays=new Uw(uw.comparator),this.Lr=new Map}getOverlay(e,t){return Aw.resolve(this.overlays.get(t))}getOverlays(e,t){const n=kE();return Aw.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),Aw.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Lr.delete(n)),Aw.resolve()}getOverlaysForCollection(e,t,n){const r=kE(),i=t.length+1,a=new uw(t.child("")),s=this.overlays.getIteratorFrom(a);for(;s.hasNext();){const e=s.getNext().value,a=e.getKey();if(!t.isPrefixOf(a.path))break;a.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Aw.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Uw((e,t)=>e-t);const a=this.overlays.getIterator();for(;a.hasNext();){const e=a.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=kE(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=kE(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>s.set(e,t)),!(s.size()>=r)););return Aw.resolve(s)}St(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ck(t,n));let i=this.Lr.get(t);void 0===i&&(i=CE(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}
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
 */class I_{constructor(){this.sessionToken=Hw.EMPTY_BYTE_STRING}getSessionToken(e){return Aw.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Aw.resolve()}}
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
 */class T_{constructor(){this.kr=new jw(S_.qr),this.Kr=new jw(S_.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new S_(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new S_(e,t))}Qr(e,t){e.forEach(e=>this.removeReference(e,t))}Gr(e){const t=new uw(new ow([])),n=new S_(t,e),r=new S_(t,e+1),i=[];return this.Kr.forEachInRange([n,r],e=>{this.Wr(e),i.push(e.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new uw(new ow([])),n=new S_(t,e),r=new S_(t,e+1);let i=CE();return this.Kr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new S_(e,0),n=this.kr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class S_{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return uw.comparator(e.key,t.key)||Zv(e.Jr,t.Jr)}static Ur(e,t){return Zv(e.Jr,t.Jr)||uw.comparator(e.key,t.key)}}
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
 */class C_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new jw(S_.qr)}checkEmpty(e){return Aw.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ok(i,t,n,r);this.mutationQueue.push(a);for(const t of r)this.Hr=this.Hr.add(new S_(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Aw.resolve(a)}lookupMutationBatch(e,t){return Aw.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),i=r<0?0:r;return Aw.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Aw.resolve(0===this.mutationQueue.length?-1:this.Yn-1)}getAllMutationBatches(e){return Aw.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new S_(t,0),r=new S_(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,r],e=>{const t=this.Zr(e.Jr);i.push(t)}),Aw.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new jw(Zv);return t.forEach(e=>{const t=new S_(e,0),r=new S_(e,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([t,r],e=>{n=n.add(e.Jr)})}),Aw.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;uw.isDocumentKey(i)||(i=i.child(""));const a=new S_(new uw(i),0);let s=new jw(Zv);return this.Hr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.Jr)),!0)},a),Aw.resolve(this.Yr(s))}Yr(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){Uv(0===this.ei(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return Aw.forEach(t.mutations,r=>{const i=new S_(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Hr=n})}nr(e){}containsKey(e,t){const n=new S_(t,0),r=this.Hr.firstAfterOrEqual(n);return Aw.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Aw.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class A_{constructor(e){this.ti=e,this.docs=new Uw(uw.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Aw.resolve(n?n.document.mutableCopy():xb.newInvalidDocument(t))}getEntries(e,t){let n=vE();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():xb.newInvalidDocument(e))}),Aw.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=vE();const a=t.path,s=new uw(a.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:e,value:{document:s}}=o.getNext();if(!a.isPrefixOf(e.path))break;e.path.length>a.length+1||Tw(_w(s),n)<=0||(r.has(s.key)||fE(t,s))&&(i=i.insert(s.key,s.mutableCopy()))}return Aw.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Lv(9500)}ni(e,t){return Aw.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new x_(this)}getSize(e){return Aw.resolve(this.size)}}class x_ extends w_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)}),Aw.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}
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
 */class N_{constructor(e){this.persistence=e,this.ri=new gE(e=>Zb(e),eE),this.lastRemoteSnapshotVersion=kw.min(),this.highestTargetId=0,this.ii=0,this.si=new T_,this.targetCount=0,this.oi=f_._r()}forEachTarget(e,t){return this.ri.forEach((e,n)=>t(n)),Aw.resolve()}getLastRemoteSnapshotVersion(e){return Aw.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Aw.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),Aw.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),Aw.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new f_(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,Aw.resolve()}updateTargetData(e,t){return this.lr(t),Aw.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,Aw.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ri.forEach((a,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)}),Aw.waitFor(i).next(()=>r)}getTargetCount(e){return Aw.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return Aw.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),Aw.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Aw.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),Aw.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return Aw.resolve(n)}containsKey(e,t){return Aw.resolve(this.si.containsKey(t))}}
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
 */class R_{constructor(e,t){this._i={},this.overlays={},this.ai=new Nw(0),this.ui=!1,this.ui=!0,this.ci=new I_,this.referenceDelegate=e(this),this.li=new N_(this),this.indexManager=new l_,this.remoteDocumentCache=new A_(e=>this.referenceDelegate.hi(e)),this.serializer=new s_(t),this.Pi=new k_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new __,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new C_(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){Pv("MemoryPersistence","Starting transaction:",e);const r=new P_(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(e=>this.referenceDelegate.Ei(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ii(e,t){return Aw.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class P_ extends Sw{constructor(e){super(),this.currentSequenceNumber=e}}class D_{constructor(e){this.persistence=e,this.Ri=new T_,this.Ai=null}static Vi(e){return new D_(e)}get di(){if(this.Ai)return this.Ai;throw Lv(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),Aw.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),Aw.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),Aw.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(e=>this.di.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.di.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Aw.forEach(this.di,n=>{const r=uw.fromPath(n);return this.mi(e,r).next(e=>{e||t.removeEntry(r,kw.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(e=>{e?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return Aw.or([()=>Aw.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class O_{constructor(e,t){this.persistence=e,this.fi=new gE(e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ow(t)),t=Dw(e.get(n),t);return Ow(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new v_(e,t)}(this,t)}static Vi(e,t){return new O_(e,t)}Ti(){}Ei(e){return Aw.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}pr(e){let t=0;return this.mr(e,e=>{t++}).next(()=>t)}mr(e,t){return Aw.forEach(this.fi,(n,r)=>this.wr(e,n,r).next(e=>e?Aw.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,r=>this.wr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,kw.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),Aw.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),Aw.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),Aw.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),Aw.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wb(e.data.value)),t}wr(e,t,n){return Aw.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.fi.get(t);return Aw.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
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
 */class M_{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=r}static Is(e,t){let n=CE(),r=CE();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new M_(e,t.fromCache,n,r)}}
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
 */class L_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
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
 */class F_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=ih()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(nh())>0?6:4}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.gs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ps(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new L_;return this.ys(e,t,n).next(r=>{if(i.result=r,this.As)return this.ws(e,t,n,r.size)})}).next(()=>i.result)}ws(e,t,n,r){return n.documentReadCount<this.Vs?(Rv()<=Th.DEBUG&&Pv("QueryEngine","SDK will not create cache indexes for query:",dE(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Aw.resolve()):(Rv()<=Th.DEBUG&&Pv("QueryEngine","Query:",dE(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(Rv()<=Th.DEBUG&&Pv("QueryEngine","The SDK decides to create cache indexes for query:",dE(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,oE(t))):Aw.resolve())}gs(e,t){if(iE(t))return Aw.resolve(null);let n=oE(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=cE(t,null,"F"),n=oE(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=CE(...r);return this.fs.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const a=this.Ss(t,r);return this.bs(t,a,i,n.readTime)?this.gs(e,cE(t,null,"F")):this.Ds(e,a,t,n)}))})))}ps(e,t,n,r){return iE(t)||r.isEqual(kw.min())?Aw.resolve(null):this.fs.getDocuments(e,n).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,n,r)?Aw.resolve(null):(Rv()<=Th.DEBUG&&Pv("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),dE(t)),this.Ds(e,a,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=kw.fromTimestamp(1e9===r?new Ew(n+1,0):new Ew(n,r));return new Iw(i,uw.empty(),t)}(r,-1)).next(e=>e))})}Ss(e,t){let n=new jw(pE(e));return t.forEach((t,r)=>{fE(e,r)&&(n=n.add(r))}),n}bs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,n){return Rv()<=Th.DEBUG&&Pv("QueryEngine","Using full collection scan to execute query:",dE(t)),this.fs.getDocumentsMatchingQuery(e,t,Iw.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
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
 */const U_="LocalStore";class V_{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new Uw(Zv),this.Fs=new gE(e=>Zb(e),eE),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new E_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}async function z_(e,t){const n=Vv(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Os(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],a=[];let s=CE();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){a.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next(e=>({Ns:e,removedBatchIds:i,addedBatchIds:a}))})})}function j_(e){const t=Vv(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function B_(e,t){const n=Vv(e),r=t.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const s=[];t.targetChanges.forEach((a,o)=>{const l=i.get(o);if(!l)return;s.push(n.li.removeMatchingKeys(e,a.removedDocuments,o).next(()=>n.li.addMatchingKeys(e,a.addedDocuments,o)));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(Hw.EMPTY_BYTE_STRING,kw.min()).withLastLimboFreeSnapshotVersion(kw.min()):a.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(a.resumeToken,r)),i=i.insert(o,c),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,c,a)&&s.push(n.li.updateTargetData(e,c))});let o=vE(),l=CE();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),s.push(function(e,t,n){let r=CE(),i=CE();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=vE();return n.forEach((n,a)=>{const s=e.get(n);a.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(kw.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!s.isValidDocument()||a.version.compareTo(s.version)>0||0===a.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):Pv(U_,"Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",a.version)}),{Bs:r,Ls:i}})}(e,a,t.documentUpdates).next(e=>{o=e.Bs,l=e.Ls})),!r.isEqual(kw.min())){const t=n.li.getLastRemoteSnapshotVersion(e).next(t=>n.li.setTargetsMetadata(e,e.currentSequenceNumber,r));s.push(t)}return Aw.waitFor(s).next(()=>a.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,o,l)).next(()=>o)}).then(e=>(n.vs=i,e))}function W_(e,t){const n=Vv(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function q_(e,t,n){const r=Vv(e),i=r.vs.get(t),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!xw(e))throw e;Pv(U_,`Failed to update sequence numbers for target ${t}: ${e}`)}r.vs=r.vs.remove(t),r.Fs.delete(i.target)}function H_(e,t,n){const r=Vv(e);let i=kw.min(),a=CE();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=Vv(e),i=r.Fs.get(n);return void 0!==i?Aw.resolve(r.vs.get(i)):r.li.getTargetData(t,n)}(r,e,oE(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(e,t.targetId).next(e=>{a=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?i:kw.min(),n?a:CE())).next(e=>(function(e,t,n){let r=e.Ms.get(t)||kw.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ms.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,ks:a})))}class K_{constructor(){this.activeTargetIds=AE}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $_{constructor(){this.vo=new K_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new K_,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class G_{Mo(e){}shutdown(){}}
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
 */const Q_="ConnectivityMonitor";class Y_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Pv(Q_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Pv(Q_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let J_=null;function X_(){return null===J_?J_=268435456+Math.round(2147483648*Math.random()):J_++,"0x"+J_.toString(16)
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
 */}const Z_="RestConnection",eI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class tI{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===ib?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,i){const a=X_(),s=this.Qo(e,t.toUriEncodedString());Pv(Z_,`Sending RPC '${e}' ${a}:`,s,n);const o={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(o,r,i);const{host:l}=new URL(s),c=wh(l);return this.zo(e,s,o,n,c).then(t=>(Pv(Z_,`Received RPC '${e}' ${a}: `,t),t),t=>{throw Ov(Z_,`RPC '${e}' ${a} failed with error: `,t,"url: ",s,"request:",n),t})}jo(e,t,n,r,i,a){return this.Wo(e,t,n,r,i)}Go(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+xv,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Qo(e,t){const n=eI[e];let r=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
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
 */class nI{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}
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
 */const rI="WebChannelConnection",iI=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class aI extends tI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!aI.c_){const e=Tv();iI(e,Iv.STAT_EVENT,e=>{e.stat===_v.PROXY?Pv(rI,"STAT_EVENT: detected buffering proxy"):e.stat===_v.NOPROXY&&Pv(rI,"STAT_EVENT: detected no buffering proxy")}),aI.c_=!0}}zo(e,t,n,r,i){const a=X_();return new Promise((i,s)=>{const o=new wv;o.setWithCredentials(!0),o.listenOnce(Ev.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case kv.NO_ERROR:const t=o.getResponseJson();Pv(rI,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(t)),i(t);break;case kv.TIMEOUT:Pv(rI,`RPC '${e}' ${a} timed out`),s(new jv(zv.DEADLINE_EXCEEDED,"Request time out"));break;case kv.HTTP_ERROR:const n=o.getStatus();if(Pv(rI,`RPC '${e}' ${a} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(zv).indexOf(t)>=0?t:zv.UNKNOWN}(t.status);s(new jv(e,t.message))}else s(new jv(zv.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new jv(zv.UNAVAILABLE,"Connection failed."));break;default:Lv(9055,{l_:e,streamId:a,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{Pv(rI,`RPC '${e}' ${a} completed.`)}});const l=JSON.stringify(r);Pv(rI,`RPC '${e}' ${a} sending request:`,r),o.send(t,"POST",l,n,15)})}T_(e,t,n){const r=X_(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},o=this.longPollingOptions.timeoutSeconds;void 0!==o&&(s.longPollingTimeout=Math.round(1e3*o)),this.useFetchStreams&&(s.useFetchStreams=!0),this.Go(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;const l=i.join("");Pv(rI,`Creating RPC '${e}' stream ${r}: ${l}`,s);const c=a.createWebChannel(l,s);this.E_(c);let u=!1,h=!1;const d=new nI({Jo:t=>{h?Pv(rI,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(u||(Pv(rI,`Opening RPC '${e}' stream ${r} transport.`),c.open(),u=!0),Pv(rI,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},Ho:()=>c.close()});return iI(c,bv.EventType.OPEN,()=>{h||(Pv(rI,`RPC '${e}' stream ${r} transport opened.`),d.i_())}),iI(c,bv.EventType.CLOSE,()=>{h||(h=!0,Pv(rI,`RPC '${e}' stream ${r} transport closed`),d.o_(),this.I_(c))}),iI(c,bv.EventType.ERROR,t=>{h||(h=!0,Ov(rI,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),d.o_(new jv(zv.UNAVAILABLE,"The operation could not be completed")))}),iI(c,bv.EventType.MESSAGE,t=>{if(!h){const n=t.data[0];Uv(!!n,16349);const i=n,a=i?.error||i[0]?.error;if(a){Pv(rI,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=hk[e];if(void 0!==t)return fk(t)}(t),i=a.message;"NOT_FOUND"===t&&i.includes("database")&&i.includes("does not exist")&&i.includes(this.databaseId.database)&&Ov(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=zv.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),h=!0,d.o_(new jv(n,i)),c.close()}else Pv(rI,`RPC '${e}' stream ${r} received:`,n),d.__(n)}}),aI.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Sv()}}
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
 */function sI(){return"undefined"!=typeof document?document:null}
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
 */function oI(e){return new Rk(e,!0)}
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
 */aI.c_=!1;class lI{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&Pv("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
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
 */const cI="PersistentStream";class uI{constructor(e,t,n,r,i,a,s,o){this.Ci=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=s,this.listener=o,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lI(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===zv.RESOURCE_EXHAUSTED?(Dv(t.toString()),Dv("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===zv.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new jv(zv.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Pv(cI,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(Pv(cI,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hI extends uI{constructor(e,t,n,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Lv(39313,{state:r}),a=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(Uv(void 0===t||"string"==typeof t,58123),Hw.fromBase64String(t||"")):(Uv(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),Hw.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(e){const t=void 0===e.code?zv.UNKNOWN:fk(e.code);return new jv(t,e.message||"")}(o);n=new _k(i,a,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=jk(e,r.document.name),a=Lk(r.document.updateTime),s=r.document.createTime?Lk(r.document.createTime):kw.min(),o=new Cb({mapValue:{fields:r.document.fields}}),l=xb.newFoundDocument(i,a,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Ek(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=jk(e,r.document),a=r.readTime?Lk(r.readTime):kw.min(),s=xb.newNoDocument(i,a),o=r.removedTargetIds||[];n=new Ek([],o,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=jk(e,r.document),a=r.removedTargetIds||[];n=new Ek([],a,i,null)}else{if(!("filter"in t))return Lv(11601,{Vt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,a=new uk(r,i),s=e.targetId;n=new kk(s,a)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return kw.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?kw.min():t.readTime?Lk(t.readTime):kw.min()}(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=Wk(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=tE(r)?{documents:Kk(e,r)}:{query:$k(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Ok(e,t.resumeToken);const r=Pk(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(kw.min())>0){n.readTime=Dk(e,t.snapshotVersion.toTimestamp());const r=Pk(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Lv(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=Wk(this.serializer),t.removeTarget=e,this.q_(t)}}class dI extends uI{constructor(e,t,n,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Uv(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Uv(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){Uv(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(Uv(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?Lk(e.updateTime):Lk(t);return n.isEqual(kw.min())&&(n=Lk(t)),new HE(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=Lk(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Wk(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof ek)n={update:Hk(e,t.key,t.value)};else if(t instanceof ak)n={delete:zk(e,t.key)};else if(t instanceof tk)n={update:Hk(e,t.key,t.data),updateMask:n_(t.fieldMask)};else{if(!(t instanceof sk))return Lv(16599,{dt:t.type});n={verify:zk(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof LE)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof FE)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof VE)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof jE)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw Lv(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Mk(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Lv(27497))),n;var r,i}(this.serializer,e))};this.q_(t)}}
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
 */class fI{}class pI extends fI{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new jv(zv.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Uk(t,n),r,i,a)).catch(e=>{throw"FirebaseError"===e.name?(e.code===zv.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jv(zv.UNKNOWN,e.toString())})}jo(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,s])=>this.connection.jo(e,Uk(t,n),r,a,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===zv.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jv(zv.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class mI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dv(t),this.aa=!1):Pv("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
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
 */const gI="RemoteStore";class yI{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(e=>{n.enqueueAndForget(async()=>{SI(this)&&(Pv(gI,"Restarting streams for network reachability change."),await async function(e){const t=Vv(e);t.Ia.add(4),await wI(t),t.Va.set("Unknown"),t.Ia.delete(4),await vI(t)}(this))})}),this.Va=new mI(n,r)}}async function vI(e){if(SI(e))for(const t of e.Ra)await t(!0)}async function wI(e){for(const t of e.Ra)await t(!1)}function bI(e,t){const n=Vv(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),TI(n)?II(n):qI(n).O_()&&kI(n,t))}function EI(e,t){const n=Vv(e),r=qI(n);n.Ea.delete(t),r.O_()&&_I(n,t),0===n.Ea.size&&(r.O_()?r.L_():SI(n)&&n.Va.set("Unknown"))}function kI(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(kw.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}qI(e).Z_(t)}function _I(e,t){e.da.$e(t),qI(e).X_(t)}function II(e){e.da=new Tk({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),qI(e).start(),e.Va.ua()}function TI(e){return SI(e)&&!qI(e).x_()&&e.Ea.size>0}function SI(e){return 0===Vv(e).Ia.size}function CI(e){e.da=void 0}async function AI(e){e.Va.set("Online")}async function xI(e){e.Ea.forEach((t,n)=>{kI(e,t)})}async function NI(e,t){CI(e),TI(e)?(e.Va.ha(t),II(e)):e.Va.set("Unknown")}async function RI(e,t,n){if(e.Va.set("Online"),t instanceof _k&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ea.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ea.delete(r),e.da.removeTarget(r))}(e,t)}catch(n){Pv(gI,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await PI(e,n)}else if(t instanceof Ek?e.da.Xe(t):t instanceof kk?e.da.st(t):e.da.tt(t),!n.isEqual(kw.min()))try{const t=await j_(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.da.Tt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ea.get(r);i&&e.Ea.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ea.get(t);if(!r)return;e.Ea.set(t,r.withResumeToken(Hw.EMPTY_BYTE_STRING,r.snapshotVersion)),_I(e,t);const i=new a_(r.target,t,n,r.sequenceNumber);kI(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Pv(gI,"Failed to raise snapshot:",t),await PI(e,t)}}async function PI(e,t,n){if(!xw(t))throw t;e.Ia.add(1),await wI(e),e.Va.set("Offline"),n||(n=()=>j_(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Pv(gI,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await vI(e)})}function DI(e,t){return t().catch(n=>PI(e,n,t))}async function OI(e){const t=Vv(e),n=HI(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:-1;for(;MI(t);)try{const e=await W_(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,LI(t,e)}catch(e){await PI(t,e)}FI(t)&&UI(t)}function MI(e){return SI(e)&&e.Ta.length<10}function LI(e,t){e.Ta.push(t);const n=HI(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function FI(e){return SI(e)&&!HI(e).x_()&&e.Ta.length>0}function UI(e){HI(e).start()}async function VI(e){HI(e).ra()}async function zI(e){const t=HI(e);for(const n of e.Ta)t.ea(n.mutations)}async function jI(e,t,n){const r=e.Ta.shift(),i=lk.from(r,t,n);await DI(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await OI(e)}async function BI(e,t){t&&HI(e).Y_&&await async function(e,t){if(function(e){switch(e){case zv.OK:return Lv(64938);case zv.CANCELLED:case zv.UNKNOWN:case zv.DEADLINE_EXCEEDED:case zv.RESOURCE_EXHAUSTED:case zv.INTERNAL:case zv.UNAVAILABLE:case zv.UNAUTHENTICATED:return!1;case zv.INVALID_ARGUMENT:case zv.NOT_FOUND:case zv.ALREADY_EXISTS:case zv.PERMISSION_DENIED:case zv.FAILED_PRECONDITION:case zv.ABORTED:case zv.OUT_OF_RANGE:case zv.UNIMPLEMENTED:case zv.DATA_LOSS:return!0;default:return Lv(15467,{code:e})}}(n=t.code)&&n!==zv.ABORTED){const n=e.Ta.shift();HI(e).B_(),await DI(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await OI(e)}var n}(e,t),FI(e)&&UI(e)}async function WI(e,t){const n=Vv(e);n.asyncQueue.verifyOperationInProgress(),Pv(gI,"RemoteStore received new credentials");const r=SI(n);n.Ia.add(3),await wI(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await vI(n)}function qI(e){return e.ma||(e.ma=function(e,t,n){const r=Vv(e);return r.sa(),new hI(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:AI.bind(null,e),Yo:xI.bind(null,e),t_:NI.bind(null,e),H_:RI.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),TI(e)?II(e):e.Va.set("Unknown")):(await e.ma.stop(),CI(e))})),e.ma}function HI(e){return e.fa||(e.fa=function(e,t,n){const r=Vv(e);return r.sa(),new dI(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:VI.bind(null,e),t_:BI.bind(null,e),ta:zI.bind(null,e),na:jI.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await OI(e)):(await e.fa.stop(),e.Ta.length>0&&(Pv(gI,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
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
 */}class KI{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Bv,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const a=Date.now()+n,s=new KI(e,t,a,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jv(zv.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $I(e,t){if(Dv("AsyncQueue",`${t}: ${e}`),xw(e))return new jv(zv.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class GI{static emptySet(e){return new GI(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||uw.comparator(t.key,n.key):(e,t)=>uw.comparator(e.key,t.key),this.keyedMap=bE(),this.sortedSet=new Uw(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof GI))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new GI;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class QI{constructor(){this.ga=new Uw(uw.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Lv(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class YI{constructor(e,t,n,r,i,a,s,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=s,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const a=[];return t.forEach(e=>{a.push({type:0,doc:e})}),new YI(e,t,GI.emptySet(t),a,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uE(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
 */class JI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class XI{constructor(){this.queries=ZI(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=Vv(e),r=n.queries;n.queries=ZI(),r.forEach((e,n)=>{for(const e of n.Sa)e.onError(t)})}(this,new jv(zv.ABORTED,"Firestore shutting down"))}}function ZI(){return new gE(e=>hE(e),uE)}async function eT(e,t){const n=Vv(e);let r=3;const i=t.query;let a=n.queries.get(i);a?!a.ba()&&t.Da()&&(r=2):(a=new JI,r=t.Da()?0:1);try{switch(r){case 0:a.wa=await n.onListen(i,!0);break;case 1:a.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=$I(e,`Initialization of query '${dE(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,a),a.Sa.push(t),t.va(n.onlineState),a.wa&&t.Fa(a.wa)&&iT(n)}async function tT(e,t){const n=Vv(e),r=t.query;let i=3;const a=n.queries.get(r);if(a){const e=a.Sa.indexOf(t);e>=0&&(a.Sa.splice(e,1),0===a.Sa.length?i=t.Da()?0:1:!a.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function nT(e,t){const n=Vv(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.Sa)t.Fa(e)&&(r=!0);i.wa=e}}r&&iT(n)}function rT(e,t,n){const r=Vv(e),i=r.queries.get(t);if(i)for(const e of i.Sa)e.onError(n);r.queries.delete(t)}function iT(e){e.Ca.forEach(e=>{e.next()})}var aT,sT;(sT=aT||(aT={})).Ma="default",sT.Cache="cache";class oT{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new YI(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==t;return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=YI.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==aT.Cache}}
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
 */class lT{constructor(e){this.key=e}}class cT{constructor(e){this.key=e}}class uT{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=CE(),this.mutatedKeys=CE(),this.eu=pE(e),this.tu=new GI(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new QI,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,s=!1;const o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),u=fE(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.su(c,u)||(n.track({type:2,doc:u}),f=!0,(o&&this.eu(u,o)>0||l&&this.eu(u,l)<0)&&(s=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(o||l)&&(s=!0)),f&&(u?(a=a.add(u),i=d?i.add(e):i.delete(e)):(a=a.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;a.size>this.query.limit;){const e="F"===this.query.limitType?a.last():a.first();a=a.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tu:a,iu:n,bs:s,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Lv(20277,{Vt:e})}};return n(e)-n(t)}(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1;const s=t&&!r?this._u():[],o=0===this.Ya.size&&this.current&&!r?1:0,l=o!==this.Xa;return this.Xa=o,0!==a.length||l?{snapshot:new YI(this.query,e.tu,i,a,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:s}:{au:s}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new QI,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=CE(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Ya=this.Ya.add(e.key))});const t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new cT(e))}),this.Ya.forEach(n=>{e.has(n)||t.push(new lT(n))}),t}cu(e){this.Za=e.ks,this.Ya=CE();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return YI.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const hT="SyncEngine";class dT{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class fT{constructor(e){this.key=e,this.hu=!1}}class pT{constructor(e,t,n,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new gE(e=>hE(e),uE),this.Eu=new Map,this.Iu=new Set,this.Ru=new Uw(uw.comparator),this.Au=new Map,this.Vu=new T_,this.du={},this.mu=new Map,this.fu=f_.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function mT(e,t,n=!0){const r=LT(e);let i;const a=r.Tu.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await yT(r,t,n,!0),i}async function gT(e,t){const n=LT(e);await yT(n,t,!0,!1)}async function yT(e,t,n,r){const i=await function(e,t){const n=Vv(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.li.getTargetData(e,t).next(i=>i?(r=i,Aw.resolve(r)):n.li.allocateTargetId(e).next(i=>(r=new a_(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.li.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.vs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(e.targetId,e),n.Fs.set(t,e.targetId)),e})}(e.localStore,oE(t)),a=i.targetId,s=e.sharedClientState.addLocalQueryTarget(a,n);let o;return r&&(o=await async function(e,t,n,r,i){e.pu=(t,n,r)=>async function(e,t,n,r){let i=t.view.ru(n);i.bs&&(i=await H_(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,i)));const a=r&&r.targetChanges.get(t.targetId),s=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,a,s);return NT(e,t.targetId,o.au),o.snapshot}(e,t,n,r);const a=await H_(e.localStore,t,!0),s=new uT(t,a.ks),o=s.ru(a.documents),l=bk.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=s.applyChanges(o,e.isPrimaryClient,l);NT(e,n,c.au);const u=new dT(t,n,s);return e.Tu.set(t,u),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),c.snapshot}(e,t,a,"current"===s,i.resumeToken)),e.isPrimaryClient&&n&&bI(e.remoteStore,i),o}async function vT(e,t,n){const r=Vv(e),i=r.Tu.get(t),a=r.Eu.get(i.targetId);if(a.length>1)return r.Eu.set(i.targetId,a.filter(e=>!uE(e,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await q_(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&EI(r.remoteStore,i.targetId),AT(r,i.targetId)}).catch(Cw)):(AT(r,i.targetId),await q_(r.localStore,i.targetId,!0))}async function wT(e,t){const n=Vv(e),r=n.Tu.get(t),i=n.Eu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),EI(n.remoteStore,r.targetId))}async function bT(e,t,n){const r=function(e){const t=Vv(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=IT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=TT.bind(null,t),t}(e);try{const e=await function(e,t){const n=Vv(e),r=Ew.now(),i=t.reduce((e,t)=>e.add(t.key),CE());let a,s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let o=vE(),l=CE();return n.xs.getEntries(e,i).next(e=>{o=e,o.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,o)).next(i=>{a=i;const s=[];for(const e of t){const t=XE(e,a.get(e.key).overlayedDocument);null!=t&&s.push(new tk(e.key,t,Ab(t.value.mapValue),KE.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)}).next(t=>{s=t;const r=t.applyToLocalDocumentSet(a,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:s.batchId,changes:EE(a)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.du[e.currentUser.toKey()];r||(r=new Uw(Zv)),r=r.insert(t,n),e.du[e.currentUser.toKey()]=r}(r,e.batchId,n),await DT(r,e.changes),await OI(r.remoteStore)}catch(e){const t=$I(e,"Failed to persist write");n.reject(t)}}async function ET(e,t){const n=Vv(e);try{const e=await B_(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t);r&&(Uv(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?Uv(r.hu,14607):e.removedDocuments.size>0&&(Uv(r.hu,42227),r.hu=!1))}),await DT(n,e,t)}catch(e){await Cw(e)}}function kT(e,t,n){const r=Vv(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const i=r.view.va(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=Vv(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.Sa)e.va(t)&&(r=!0)}),r&&iT(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function _T(e,t,n){const r=Vv(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Au.get(t),a=i&&i.key;if(a){let e=new Uw(uw.comparator);e=e.insert(a,xb.newNoDocument(a,kw.min()));const n=CE().add(a),i=new wk(kw.min(),new Map,new Uw(Zv),e,n);await ET(r,i),r.Ru=r.Ru.remove(a),r.Au.delete(t),PT(r)}else await q_(r.localStore,t,!1).then(()=>AT(r,t,n)).catch(Cw)}async function IT(e,t){const n=Vv(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Vv(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,a=i.keys();let s=Aw.resolve();return a.forEach(e=>{s=s.next(()=>r.getEntry(t,e)).next(t=>{const a=n.docVersions.get(e);Uv(null!==a,48541),t.version.compareTo(a)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),s.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=CE();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);CT(n,r,null),ST(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await DT(n,e)}catch(e){await Cw(e)}}async function TT(e,t,n){const r=Vv(e);try{const e=await function(e,t){const n=Vv(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(Uv(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);CT(r,t,n),ST(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await DT(r,e)}catch(e){await Cw(e)}}function ST(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function CT(e,t,n){const r=Vv(e);let i=r.du[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.du[r.currentUser.toKey()]=i}}function AT(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Eu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(t=>{e.Vu.containsKey(t)||xT(e,t)})}function xT(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);null!==n&&(EI(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),PT(e))}function NT(e,t,n){for(const r of n)r instanceof lT?(e.Vu.addReference(r.key,t),RT(e,r)):r instanceof cT?(Pv(hT,"Document no longer in limbo: "+r.key),e.Vu.removeReference(r.key,t),e.Vu.containsKey(r.key)||xT(e,r.key)):Lv(19791,{wu:r})}function RT(e,t){const n=t.key,r=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(r)||(Pv(hT,"New document in limbo: "+n),e.Iu.add(r),PT(e))}function PT(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new uw(ow.fromString(t)),r=e.fu.next();e.Au.set(r,new fT(n)),e.Ru=e.Ru.insert(n,r),bI(e.remoteStore,new a_(oE(rE(n.path)),r,"TargetPurposeLimboResolution",Nw.ce))}}async function DT(e,t,n){const r=Vv(e),i=[],a=[],s=[];r.Tu.isEmpty()||(r.Tu.forEach((e,o)=>{s.push(r.pu(o,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(o.targetId)?.current;r.sharedClientState.updateQueryState(o.targetId,t?"current":"not-current")}if(e){i.push(e);const t=M_.Is(o.targetId,e);a.push(t)}}))}),await Promise.all(s),r.Pu.H_(i),await async function(e,t){const n=Vv(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Aw.forEach(t,t=>Aw.forEach(t.Ts,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Aw.forEach(t.Es,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!xw(e))throw e;Pv(U_,"Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.vs.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(t,i)}}}(r.localStore,a))}async function OT(e,t){const n=Vv(e);if(!n.currentUser.isEqual(t)){Pv(hT,"User change. New user:",t.toKey());const e=await z_(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).mu.forEach(e=>{e.forEach(e=>{e.reject(new jv(zv.CANCELLED,i))})}),r.mu.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await DT(n,e.Ns)}var r,i}function MT(e,t){const n=Vv(e),r=n.Au.get(t);if(r&&r.hu)return CE().add(r.key);{let e=CE();const r=n.Eu.get(t);if(!r)return e;for(const t of r){const r=n.Tu.get(t);e=e.unionWith(r.view.nu)}return e}}function LT(e){const t=Vv(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ET.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=MT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_T.bind(null,t),t.Pu.H_=nT.bind(null,t.eventManager),t.Pu.yu=rT.bind(null,t.eventManager),t}class FT{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oI(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return function(e,t,n,r){return new V_(e,t,n,r)}(this.persistence,new F_,e.initialUser,this.serializer)}Cu(e){return new R_(D_.Vi,this.serializer)}Du(e){return new $_}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}FT.provider={build:()=>new FT};class UT extends FT{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Uv(this.persistence.referenceDelegate instanceof O_,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new y_(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?d_.withCacheSize(this.cacheSizeBytes):d_.DEFAULT;return new R_(e=>O_.Vi(e,t),this.serializer)}}class VT{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>kT(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=OT.bind(null,this.syncEngine),await async function(e,t){const n=Vv(e);t?(n.Ia.delete(2),await vI(n)):t||(n.Ia.add(2),await wI(n),n.Va.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new XI}createDatastore(e){const t=oI(e.databaseInfo.databaseId),n=function(e){return new aI(e)}(e.databaseInfo);return function(e,t,n,r){return new pI(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>kT(this.syncEngine,e,0),a=Y_.v()?new Y_:new G_,new yI(t,n,r,i,a);var t,n,r,i,a}createSyncEngine(e,t){return function(e,t,n,r,i,a,s){const o=new pT(e,t,n,r,i,a);return s&&(o.gu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=Vv(e);Pv(gI,"RemoteStore shutting down."),t.Ia.add(5),await wI(t),t.Aa.shutdown(),t.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}VT.provider={build:()=>new VT};
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
class zT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dv("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
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
 */const jT="FirestoreClient";class BT{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=Av.UNAUTHENTICATED,this.clientId=Xv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{Pv(jT,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(Pv(jT,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bv;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=$I(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function WT(e,t){e.asyncQueue.verifyOperationInProgress(),Pv(jT,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await z_(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function qT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Pv(jT,"Using user provided OfflineComponentProvider");try{await WT(e,e._uninitializedComponentsProvider._offline)}catch(n){const r=n;if(!("FirebaseError"===(t=r).name?t.code===zv.FAILED_PRECONDITION||t.code===zv.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw r;Ov("Error using user provided cache. Falling back to memory cache: "+r),await WT(e,new FT)}}else Pv(jT,"Using default OfflineComponentProvider"),await WT(e,new UT(void 0));var t;return e._offlineComponents}(e);Pv(jT,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>WI(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>WI(t.remoteStore,n)),e._onlineComponents=t}async function HT(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Pv(jT,"Using user provided OnlineComponentProvider"),await qT(e,e._uninitializedComponentsProvider._online)):(Pv(jT,"Using default OnlineComponentProvider"),await qT(e,new VT))),e._onlineComponents}async function KT(e){const t=await HT(e),n=t.eventManager;return n.onListen=mT.bind(null,t.syncEngine),n.onUnlisten=vT.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=gT.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=wT.bind(null,t.syncEngine),n}function $T(e,t){const n=new Bv;return e.asyncQueue.enqueueAndForget(async()=>bT(await function(e){return HT(e).then(e=>e.syncEngine)}(e),t,n)),n.promise
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
 */}function GT(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const QT=new Map;
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
const YT="firestore.googleapis.com",JT=!0;class XT{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new jv(zv.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=YT,this.ssl=JT}else this.host=e.host,this.ssl=e.ssl??JT;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=h_;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new jv(zv.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new jv(zv.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GT(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new jv(zv.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new jv(zv.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new jv(zv.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class ZT{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new XT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new jv(zv.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new jv(zv.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new XT(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new qv;switch(e.type){case"firstParty":return new Gv(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new jv(zv.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=QT.get(e);t&&(Pv("ComponentProvider","Removing Datastore"),QT.delete(e),t.terminate())}(this),Promise.resolve()}}function eS(e,t,n,r={}){e=gw(e,ZT);const i=wh(t),a=e._getSettings(),s={...a,emulatorOptions:e._getEmulatorOptions()},o=`${t}:${n}`;i&&bh(`https://${o}`),a.host!==YT&&a.host!==o&&Ov("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...a,host:o,ssl:i,emulatorOptions:r};if(!uh(l,s)&&(e._setSettings(l),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Av.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Gu(JSON.stringify({alg:"none",type:"JWT"})),Gu(JSON.stringify(a)),""].join(".")}(r.mockUserToken,e._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new jv(zv.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Av(i)}e._authCredentials=new Hv(new Wv(t,n))}}
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
 */class tS{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new tS(this.firestore,e,this._query)}}class nS{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rS(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nS(this.firestore,e,this._key)}toJSON(){return{type:nS._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(vw(t,nS._jsonSchema))return new nS(e,n||null,new uw(ow.fromString(t.referencePath)))}}nS._jsonSchemaVersion="firestore/documentReference/1.0",nS._jsonSchema={type:yw("string",nS._jsonSchemaVersion),referencePath:yw("string")};class rS extends tS{constructor(e,t,n){super(e,t,rE(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nS(this.firestore,null,new uw(e))}withConverter(e){return new rS(this.firestore,e,this._path)}}function iS(e,t,...n){if(e=vh(e),hw("collection","path",t),e instanceof ZT){const r=ow.fromString(t,...n);return fw(r),new rS(e,null,r)}{if(!(e instanceof nS||e instanceof rS))throw new jv(zv.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ow.fromString(t,...n));return fw(r),new rS(e.firestore,null,r)}}function aS(e,t,...n){if(e=vh(e),1===arguments.length&&(t=Xv.newId()),hw("doc","path",t),e instanceof ZT){const r=ow.fromString(t,...n);return dw(r),new nS(e,null,new uw(r))}{if(!(e instanceof nS||e instanceof rS))throw new jv(zv.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ow.fromString(t,...n));return dw(r),new nS(e.firestore,e instanceof rS?e.converter:null,new uw(r))}}
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
 */const sS="AsyncQueue";class oS{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lI(this,"async_queue_retry"),this._c=()=>{const e=sI();e&&Pv(sS,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=sI();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=sI();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Bv;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!xw(e))throw e;Pv(sS,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,Dv("INTERNAL UNHANDLED ERROR: ",lS(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=KI.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&Lv(47125,{Pc:lS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function lS(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class cS extends ZT{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new oS,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new oS(e),this._firestoreClient=void 0,await e}}}function uS(e){if(e._terminated)throw new jv(zv.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){const t=e._freezeSettings(),n=function(e,t,n,r,i){return new rb(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,GT(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}(e._databaseId,e._app?.options.appId||"",e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new BT(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
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
 */(e),e._firestoreClient}class hS{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hS(Hw.fromBase64String(e))}catch(e){throw new jv(zv.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new hS(Hw.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:hS._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vw(e,hS._jsonSchema))return hS.fromBase64String(e.bytes)}}hS._jsonSchemaVersion="firestore/bytes/1.0",hS._jsonSchema={type:yw("string",hS._jsonSchemaVersion),bytes:yw("string")};
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
class dS{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new jv(zv.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new cw(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class fS{constructor(e){this._methodName=e}}
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
 */class pS{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new jv(zv.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new jv(zv.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Zv(this._lat,e._lat)||Zv(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pS._jsonSchemaVersion}}static fromJSON(e){if(vw(e,pS._jsonSchema))return new pS(e.latitude,e.longitude)}}pS._jsonSchemaVersion="firestore/geoPoint/1.0",pS._jsonSchema={type:yw("string",pS._jsonSchemaVersion),latitude:yw("number"),longitude:yw("number")};
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
class mS{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mS._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vw(e,mS._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new mS(e.vectorValues);throw new jv(zv.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mS._jsonSchemaVersion="firestore/vectorValue/1.0",mS._jsonSchema={type:yw("string",mS._jsonSchemaVersion),vectorValues:yw("object")};
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
const gS=/^__.*__$/;class yS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new tk(e,this.data,this.fieldMask,t,this.fieldTransforms):new ek(e,this.data,t,this.fieldTransforms)}}function vS(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Lv(40011,{dataSource:e})}}class wS{constructor(e,t,n,r,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new wS({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return NS(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(0===e.length)throw this.yc("Document fields must not be empty");if(vS(this.dataSource)&&gS.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class bS{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||oI(e)}I(e,t,n,r=!1){return new wS({dataSource:e,methodName:t,targetDoc:n,path:cw.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ES(e){const t=e._freezeSettings(),n=oI(e._databaseId);return new bS(e._databaseId,!!t.ignoreUndefinedProperties,n)}function kS(e,t,n,r,i,a={}){const s=e.I(a.merge||a.mergeFields?2:0,t,n,i);CS("Data must be an object, but it was:",s,r);const o=TS(r,s);let l,c;if(a.merge)l=new Ww(s.fieldMask),c=s.fieldTransforms;else if(a.mergeFields){const e=[];for(const r of a.mergeFields){const i=AS(t,r,n);if(!s.contains(i))throw new jv(zv.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);RS(e,i)||e.push(i)}l=new Ww(e),c=s.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=s.fieldTransforms;return new yS(new Cb(o),l,c)}class _S extends fS{_toFieldTransform(e){return new qE(e.path,new LE)}isEqual(e){return e instanceof _S}}function IS(e,t){if(SS(e=vh(e)))return CS("Unsupported field value:",t,e),TS(e,t);if(e instanceof fS)return function(e,t){if(!vS(t.dataSource))throw t.yc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.yc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.yc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=IS(i,t.gc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=vh(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return RE(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ew.fromDate(e);return{timestampValue:Dk(t.serializer,n)}}if(e instanceof Ew){const n=new Ew(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Dk(t.serializer,n)}}if(e instanceof pS)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof hS)return{bytesValue:Ok(t.serializer,e._byteString)};if(e instanceof nS){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Fk(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof mS)return function(e,t){const n=e instanceof mS?e.toArray():e;return{mapValue:{fields:{[sb]:{stringValue:cb},[ub]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.yc("VectorValues must only contain numeric values.");return xE(t.serializer,e)})}}}}}}(e,t);if(i_(e))return e._toProto(t.serializer);throw t.yc(`Unsupported field value: ${mw(e)}`)}(e,t)}function TS(e,t){const n={};return Fw(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Lw(e,(e,r)=>{const i=IS(r,t.dc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function SS(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ew||e instanceof pS||e instanceof hS||e instanceof nS||e instanceof fS||e instanceof mS||i_(e))}function CS(e,t,n){if(!SS(n)||!pw(n)){const r=mw(n);throw"an object"===r?t.yc(e+" a custom object"):t.yc(e+" "+r)}}function AS(e,t,n){if((t=vh(t))instanceof dS)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(xS)>=0)throw NS(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new dS(...t.split("."))._internalPath}catch(r){throw NS(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw NS("Field path arguments must be of type string or ",e,!1,void 0,n)}const xS=new RegExp("[~\\*/\\[\\]]");function NS(e,t,n,r,i){const a=r&&!r.isEmpty(),s=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(a||s)&&(l+=" (found",a&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new jv(zv.INVALID_ARGUMENT,o+e+l)}function RS(e,t){return e.some(e=>e.isEqual(t))}
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
 */class PS{convertValue(e,t="none"){switch(hb(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Gw(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qw(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Lv(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Lw(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[ub].arrayValue?.values?.map(e=>Gw(e.doubleValue));return new mS(t)}convertGeoPoint(e){return new pS(Gw(e.latitude),Gw(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=tb(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(nb(e));default:return null}}convertTimestamp(e){const t=$w(e);return new Ew(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ow.fromString(e);Uv(r_(n),9688,{name:e});const r=new ab(n.get(1),n.get(3)),i=new uw(n.popFirst(5));return r.isEqual(t)||Dv(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */class DS extends PS{constructor(e){super(),this.firestore=e}convertBytes(e){return new hS(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nS(this.firestore,null,t)}}function OS(){return new _S("serverTimestamp")}const MS="@firebase/firestore",LS="4.14.0";
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
 */class FS{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nS(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new US(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(AS("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class US extends FS{data(){return super.data()}}
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
 */class VS{}class zS extends VS{}function jS(e,t,...n){let r=[];t instanceof VS&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof qS).length,n=e.filter(e=>e instanceof BS).length;if(t>1||t>0&&n>0)throw new jv(zv.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const t of r)e=t._apply(e);return e}class BS extends zS{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new BS(e,t,n)}_apply(e){const t=this._parse(e);return $S(e._query,t),new tS(e.firestore,e.converter,lE(e._query,t))}_parse(e){const t=ES(e.firestore),n=function(e,t,n,r,i,a,s){let o;if(i.isKeyField()){if("array-contains"===a||"array-contains-any"===a)throw new jv(zv.INVALID_ARGUMENT,`Invalid Query. You can't perform '${a}' queries on documentId().`);if("in"===a||"not-in"===a){KS(s,a);const t=[];for(const n of s)t.push(HS(r,e,n));o={arrayValue:{values:t}}}else o=HS(r,e,s)}else"in"!==a&&"not-in"!==a&&"array-contains-any"!==a||KS(s,a),o=function(e,t,n,r=!1){return IS(n,e.I(r?4:3,t))}(n,t,s,"in"===a||"not-in"===a);return Lb.create(i,a,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function WS(e,t,n){const r=t,i=AS("where",e);return BS._create(i,r,n)}class qS extends VS{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qS(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Fb.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)$S(n,e),n=lE(n,e)}(e._query,t),new tS(e.firestore,e.converter,lE(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function HS(e,t,n){if("string"==typeof(n=vh(n))){if(""===n)throw new jv(zv.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aE(t)&&-1!==n.indexOf("/"))throw new jv(zv.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ow.fromString(n));if(!uw.isDocumentKey(r))throw new jv(zv.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bb(e,new uw(r))}if(n instanceof nS)return bb(e,n._key);throw new jv(zv.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mw(n)}.`)}function KS(e,t){if(!Array.isArray(e)||0===e.length)throw new jv(zv.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function $S(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new jv(zv.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new jv(zv.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function GS(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class QS{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class YS extends FS{constructor(e,t,n,r,i,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new JS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(AS("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new jv(zv.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=YS._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}YS._jsonSchemaVersion="firestore/documentSnapshot/1.0",YS._jsonSchema={type:yw("string",YS._jsonSchemaVersion),bundleSource:yw("string","DocumentSnapshot"),bundleName:yw("string"),bundle:yw("string")};class JS extends YS{data(e={}){return super.data(e)}}class XS{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new QS(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new JS(this._firestore,this._userDataWriter,n.key,n,new QS(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new jv(zv.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new JS(e._firestore,e._userDataWriter,n.doc.key,n.doc,new QS(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new JS(e._firestore,e._userDataWriter,t.doc.key,t.doc,new QS(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,a=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),a=n.indexOf(t.doc.key)),{type:ZS(t.type),doc:r,oldIndex:i,newIndex:a}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new jv(zv.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=XS._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xv.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ZS(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Lv(61501,{type:e})}}
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
function eC(e){e=gw(e,nS);const t=gw(e.firestore,cS);return function(e,t,n={}){const r=new Bv;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const a=new zT({next:o=>{a.Nu(),t.enqueueAndForget(()=>tT(e,s));const l=o.docs.has(n);!l&&o.fromCache?i.reject(new jv(zv.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&r&&"server"===r.source?i.reject(new jv(zv.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),s=new oT(rE(n.path),a,{includeMetadataChanges:!0,qa:!0});return eT(e,s)}(await KT(e),e.asyncQueue,t,n,r)),r.promise}(uS(t),e._key).then(n=>function(e,t,n){const r=n.docs.get(t._key),i=new DS(e);return new YS(e,i,t._key,r,new QS(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n))}function tC(e){e=gw(e,tS);const t=gw(e.firestore,cS),n=uS(t),r=new DS(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new jv(zv.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new Bv;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const a=new zT({next:n=>{a.Nu(),t.enqueueAndForget(()=>tT(e,s)),n.fromCache&&"server"===r.source?i.reject(new jv(zv.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),s=new oT(n,a,{includeMetadataChanges:!0,qa:!0});return eT(e,s)}(await KT(e),e.asyncQueue,t,n,r)),r.promise}(n,e._query).then(n=>new XS(t,r,e,n))}function nC(e,t,n){e=gw(e,nS);const r=gw(e.firestore,cS),i=GS(e.converter,t,n);return aC(r,[kS(ES(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,KE.none())])}function rC(e){return aC(gw(e.firestore,cS),[new ak(e._key,KE.none())])}function iC(e,t){const n=gw(e.firestore,cS),r=aS(e),i=GS(e.converter,t);return aC(n,[kS(ES(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,KE.exists(!1))]).then(()=>r)}function aC(e,t){return $T(uS(e),t)}XS._jsonSchemaVersion="firestore/querySnapshot/1.0",XS._jsonSchema={type:yw("string",XS._jsonSchemaVersion),bundleSource:yw("string","QuerySnapshot"),bundleName:yw("string"),bundle:yw("string")},function(e,t=!0){xv=Ld,Rd(new Eh("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),a=new cS(new Kv(e.getProvider("auth-internal")),new Yv(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new jv(zv.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ab(e.options.projectId,t)}(i,n),i);return r={useFetchStreams:t,...r},a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Vd(MS,LS,e),Vd(MS,LS,"esm2020")}();const sC="@firebase/installations",oC="0.6.21",lC=1e4,cC=`w:${oC}`,uC="FIS_v2",hC=36e5,dC=new lh("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function fC(e){return e instanceof oh&&e.code.includes("request-failed")}
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
 */function pC({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function mC(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function gC(e,t){const n=(await t.json()).error;return dC.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function yC({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function vC(e,{refreshToken:t}){const n=yC(e);return n.append("Authorization",function(e){return`${uC} ${e}`}
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
 */(t)),n}async function wC(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
 */
function bC(e){return new Promise(t=>{setTimeout(t,e)})}
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
 */
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
 */
const EC=/^[cdef][\w-]{21}$/;function kC(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
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
 */(e);return EC.test(t)?t:""}catch{return""}}function _C(e){return`${e.appName}!${e.appId}`}
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
 */const IC=new Map;function TC(e,t){const n=_C(e);SC(n,t),function(e,t){const n=function(){!CC&&"BroadcastChannel"in self&&(CC=new BroadcastChannel("[Firebase] FID Change"),CC.onmessage=e=>{SC(e.data.key,e.data.fid)});return CC}();n&&n.postMessage({key:e,fid:t});0===IC.size&&CC&&(CC.close(),CC=null)}(n,t)}function SC(e,t){const n=IC.get(e);if(n)for(const e of n)e(t)}let CC=null;
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
 */
const AC="firebase-installations-store";let xC=null;function NC(){return xC||(xC=qh("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(AC)}})),xC}async function RC(e,t){const n=_C(e),r=(await NC()).transaction(AC,"readwrite"),i=r.objectStore(AC),a=await i.get(n);return await i.put(t,n),await r.done,a&&a.fid===t.fid||TC(e,t.fid),t}async function PC(e){const t=_C(e),n=(await NC()).transaction(AC,"readwrite");await n.objectStore(AC).delete(t),await n.done}async function DC(e,t){const n=_C(e),r=(await NC()).transaction(AC,"readwrite"),i=r.objectStore(AC),a=await i.get(n),s=t(a);return void 0===s?await i.delete(n):await i.put(s,n),await r.done,!s||a&&a.fid===s.fid||TC(e,s.fid),s}
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
 */async function OC(e){let t;const n=await DC(e.appConfig,n=>{const r=function(e){const t=e||{fid:kC(),registrationStatus:0};return FC(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(dC.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=pC(e),i=yC(e),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:uC,appId:e.appId,sdkVersion:cC},o={method:"POST",headers:i,body:JSON.stringify(s)},l=await wC(()=>fetch(r,o));if(l.ok){const e=await l.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:mC(e.authToken)}}throw await gC("Create Installation",l)}(e,t);return RC(e.appConfig,n)}catch(n){throw fC(n)&&409===n.customData.serverCode?await PC(e.appConfig):await RC(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:MC(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function MC(e){let t=await LC(e.appConfig);for(;1===t.registrationStatus;)await bC(100),t=await LC(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await OC(e);return n||t}return t}function LC(e){return DC(e,e=>{if(!e)throw dC.create("installation-not-found");return FC(e)})}function FC(e){return 1===(t=e).registrationStatus&&t.registrationTime+lC<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function UC({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${pC(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=vC(e,n),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:cC,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},l=await wC(()=>fetch(r,o));if(l.ok){return mC(await l.json())}throw await gC("Generate Auth Token",l)}async function VC(e,t=!1){let n;const r=await DC(e.appConfig,r=>{if(!jC(r))throw dC.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+hC}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await zC(e.appConfig);for(;1===n.authToken.requestStatus;)await bC(100),n=await zC(e.appConfig);const r=n.authToken;return 0===r.requestStatus?VC(e,t):r}(e,t),r;{if(!navigator.onLine)throw dC.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}(r);return n=async function(e,t){try{const n=await UC(e,t),r={...t,authToken:n};return await RC(e.appConfig,r),n}catch(n){if(!fC(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n={...t,authToken:{requestStatus:0}};await RC(e.appConfig,n)}else await PC(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function zC(e){return DC(e,e=>{if(!jC(e))throw dC.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+lC<Date.now()?{...e,authToken:{requestStatus:0}}:e;var n;
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
 */})}function jC(e){return void 0!==e&&2===e.registrationStatus}
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
 */
async function BC(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await OC(e);t&&await t}
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
 */(n);return(await VC(n,t)).token}function WC(e){return dC.create("missing-app-config-values",{valueName:e})}
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
 */const qC="installations",HC=e=>{const t=Pd(e.getProvider("app").getImmediate(),qC).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await OC(t);return r?r.catch(console.error):VC(t).catch(console.error),n.fid}(t),getToken:e=>BC(t,e)}};Rd(new Eh(qC,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw WC("App Configuration");if(!e.name)throw WC("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw WC(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Pd(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),Rd(new Eh("installations-internal",HC,"PRIVATE")),Vd(sC,oC),Vd(sC,oC,"esm2020");
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
 */
const KC="analytics",$C="https://www.googletagmanager.com/gtag/js",GC=new Rh("@firebase/analytics"),QC=new lh("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
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
 */
function YC(e){if(!e.startsWith($C)){const t=QC.create("invalid-gtag-resource",{gtagURL:e});return GC.warn(t.message),""}return e}function JC(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function XC(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:YC}),r=document.createElement("script"),i=`${$C}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ZC(e,t,n,r){return async function(i,...a){try{if("event"===i){const[r,i]=a;await async function(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await JC(n);for(const n of e){const e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(!i){a=[];break}a.push(i)}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(e){GC.error(e)}}(e,t,n,r,i)}else if("config"===i){const[i,s]=a;await async function(e,t,n,r,i,a){const s=r[i];try{if(s)await t[s];else{const e=(await JC(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){GC.error(e)}e("config",i,a)}(e,t,n,r,i,s)}else if("consent"===i){const[t,n]=a;e("consent",t,n)}else if("get"===i){const[t,n,r]=a;e("get",t,n,r)}else if("set"===i){const[t]=a;e("set",t)}else e(i,...a)}catch(e){GC.error(e)}}}const eA=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function tA(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function nA(e,t=eA,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw QC.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw QC.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new iA;return setTimeout(async()=>{o.abort()},void 0!==n?n:6e4),rA({appId:r,apiKey:i,measurementId:a},s,o,t)}async function rA(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=eA){const{appId:a,measurementId:s}=e;try{await function(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(QC.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(r,t)}catch(e){if(s)return GC.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e?.message}]`),{appId:a,measurementId:s};throw e}try{const t=await async function(e){const{appId:t,apiKey:n}=e,r={method:"GET",headers:tA(n)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",t),a=await fetch(i,r);if(200!==a.status&&304!==a.status){let e="";try{const t=await a.json();t.error?.message&&(e=t.error.message)}catch(e){}throw QC.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return i.deleteThrottleMetadata(a),t}catch(t){const o=t;if(!function(e){if(!(e instanceof oh&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(o)){if(i.deleteThrottleMetadata(a),s)return GC.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${o?.message}]`),{appId:a,measurementId:s};throw t}const l=503===Number(o?.customData?.httpStatus)?yh(n,i.intervalMillis,30):yh(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(a,c),GC.debug(`Calling attemptFetch again in ${l} millis`),rA(e,c,r,i)}}class iA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function aA(e,t,n,r,i,a,s){const o=nA(e);o.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&GC.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>GC.error(e)),t.push(o);const l=
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
async function(){if(!ah())return GC.warn(QC.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await sh()}catch(e){return GC.warn(QC.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[c,u]=await Promise.all([o,l]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes($C)&&n.src.includes(e))return n;return null}
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
 */)(a)||XC(a,c.measurementId),i("js",new Date);const h=s?.config??{};return h.origin="firebase",h.update=!0,null!=u&&(h.firebase_id=u),i("config",c.measurementId,h),c.measurementId}
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
 */class sA{constructor(e){this.app=e}_delete(){return delete oA[this.app.options.appId],Promise.resolve()}}let oA={},lA=[];const cA={};let uA,hA,dA="dataLayer",fA=!1;function pA(){const e=[];if(rh()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=QC.create("invalid-analytics-context",{errorInfo:t});GC.warn(n.message)}}function mA(e,t,n){pA();const r=e.options.appId;if(!r)throw QC.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw QC.create("no-api-key");GC.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=oA[r])throw QC.create("already-exists",{id:r});if(!fA){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(dA);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let a=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(a=window[i]),window[i]=ZC(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}(oA,lA,cA,dA,"gtag");hA=e,uA=t,fA=!0}oA[r]=aA(e,lA,cA,t,uA,dA,n);return new sA(e)}function gA(e,t,n){e=vh(e),async function(e,t,n,r){if(r&&r.global){const t={};for(const e of Object.keys(n))t[`user_properties.${e}`]=n[e];return e("set",t),Promise.resolve()}e("config",await t,{update:!0,user_properties:n})}(hA,oA[e.app.options.appId],t,n).catch(e=>GC.error(e))}const yA="@firebase/analytics",vA="0.10.21";Rd(new Eh(KC,(e,{options:t})=>mA(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),Rd(new Eh("analytics-internal",function(e){try{const t=e.getProvider(KC).getImmediate();return{logEvent:(e,n,r)=>function(e,t,n,r){e=vh(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,{...r,send_to:i})}}(hA,oA[e.app.options.appId],t,n,r).catch(e=>GC.error(e))}(t,e,n,r),setUserProperties:(e,n)=>gA(t,e,n)}}catch(e){throw QC.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),Vd(yA,vA),Vd(yA,vA,"esm2020");const wA={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:{}.VITE_FIREBASE_MEASUREMENT_ID};let bA,EA,kA,_A;try{if("undefined"!=typeof window&&"ReactSnap"===window.navigator.userAgent)throw new Error("Pre-rendering environment: Firebase is disabled to prevent socket hang.");wA.apiKey||console.warn("Kone Kids Firebase: Missing environment variables. Running in local simulation mode."),bA=Fd(wA),EA=pv(bA),kA=function(e,t){const n="object"==typeof e?e:Ud(),r="string"==typeof e?e:t||ib,i=Pd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(()=>{const e=Xu("firestore");if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return"["===e[0]?[e.substring(1,t-1),n]:[e.substring(0,t),n]})();e&&eS(i,...e)}return i}(bA),"undefined"!=typeof window&&"ReactSnap"!==window.navigator.userAgent&&(_A=function(e=Ud()){const t=Pd(e=vh(e),KC);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Pd(e,KC);if(n.isInitialized()){const e=n.getImmediate();if(uh(t,n.getOptions()))return e;throw QC.create("already-initialized")}return n.initialize({options:t})}(e)}(bA))}catch(e){console.error("Kone Kids Firebase: Critical Initialization Error. Forcing local fallback."),bA={},EA={},kA={}}const IA=[{id:"first_hello",name:"First Hello",icon:"🧠",description:"Run your first code script!",unlocked:!1,xpReward:50},{id:"explorer",name:"Explorer",icon:"🚀",description:"Visit Coding, Robotics, and AI pages!",unlocked:!1,xpReward:100},{id:"app_builder",name:"App Builder",icon:"📱",description:"Complete all Mobile App missions!",unlocked:!1,xpReward:500},{id:"web_wizard",name:"Web Wizard",icon:"🌐",description:"Complete all Web App missions!",unlocked:!1,xpReward:500},{id:"game_master",name:"Game Master",icon:"🎮",description:"Complete all Game Dev missions!",unlocked:!1,xpReward:600},{id:"ai_genius",name:"AI Genius",icon:"✨",description:"Complete all AI & ML missions!",unlocked:!1,xpReward:750},{id:"robot_commander",name:"Robot Commander",icon:"🦾",description:"Complete all Robotics missions!",unlocked:!1,xpReward:800},{id:"data_scientist",name:"Data Scientist",icon:"📊",description:"Complete all Data Science missions!",unlocked:!1,xpReward:400},{id:"mission_complete",name:"Mission Agent",icon:"🕵️",description:"Complete your first mission!",unlocked:!1,xpReward:200},{id:"future_hero",name:"Future Hero",icon:"👑",description:"Joined the Kone Academy mission!",unlocked:!1,xpReward:100},{id:"welcome_hero",name:"Welcome!",icon:"🎈",description:"Welcome to the Kone Kids Lab!",unlocked:!1,xpReward:50}],TA=c.createContext(void 0),SA=({children:e})=>{const[t,n]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_badges");if(!e)return IA;const t=JSON.parse(e);return Array.isArray(t)?IA.map(e=>{const n=t.find(t=>t.id===e.id);return n?{...e,unlocked:n.unlocked,viewed:n.viewed}:e}):IA}catch(e){return console.error("Gamification: Error loading badges from local storage",e),IA}}),[r,i]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_visited");return e?JSON.parse(e):{}}catch(e){return{}}}),[a,s]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_xp");return e?parseInt(e,10):0}catch(e){return 0}}),[o,l]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_missions");return e?JSON.parse(e):[]}catch(e){return[]}}),[u,h]=c.useState(()=>{try{return"true"===localStorage.getItem("kone_kids_onboarding")}catch(e){return!1}}),[d,f]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_coins");return e?parseInt(e,10):100}catch(e){return 100}}),[p,m]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_inventory");return e?JSON.parse(e):[]}catch(e){return[]}}),[g,y]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_equipped");return e?JSON.parse(e):{}}catch(e){return{}}}),[v,w]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_series");return e?JSON.parse(e):["series_word_search"]}catch(e){return["series_word_search"]}}),[b,E]=c.useState(null),[k,_]=c.useState(()=>{try{return localStorage.getItem("kone_kids_section_id")||""}catch(e){return""}}),[I,T]=c.useState(()=>{try{return localStorage.getItem("kone_kids_student_id")||""}catch(e){return""}}),[S,C]=c.useState(()=>{try{return localStorage.getItem("kone_kids_student_name")||""}catch(e){return""}}),[A,x]=c.useState(()=>{try{return localStorage.getItem("kone_kids_dialect")||"en"}catch(e){return"en"}}),N=c.useCallback(e=>{x(e),localStorage.setItem("kone_kids_dialect",e)},[]),R=c.useMemo(()=>a<250?1:a<750?2:a<1500?3:a<2500?4:5+Math.floor((a-2500)/2e3),[a]),[P,D]=c.useState(null);c.useEffect(()=>{if(EA&&EA.app){return lg(EA,async e=>{if(D(e),e&&kA&&kA.app)try{const t=await eC(aS(kA,"users",e.uid));if(t.exists()){const e=t.data();e.xp>a&&s(e.xp),e.completedMissions?.length>o.length&&l(e.completedMissions),e.unlockedSeries?.length>v.length&&w(e.unlockedSeries)}}catch(e){console.warn("Firebase Sync: Failed to load user data.",e)}})}},[]),c.useEffect(()=>{if(P&&kA&&kA.app){(async()=>{try{await nC(aS(kA,"users",P.uid),{xp:a,completedMissions:o,badges:t.filter(e=>e.unlocked).map(e=>e.id),hasCompletedOnboarding:u,coins:d,inventory:p,equippedItems:g,unlockedSeries:v,lastSync:(new Date).toISOString()},{merge:!0})}catch(e){console.warn("Firebase Sync: Failed to save user data.",e)}})()}},[a,o,t,P,u,d,p,g]),c.useEffect(()=>{localStorage.setItem("kone_kids_badges",JSON.stringify(t))},[t]),c.useEffect(()=>{localStorage.setItem("kone_kids_visited",JSON.stringify(r)),r["/coding"]&&r["/robotics"]&&r["/ai"]&&O("explorer")},[r]),c.useEffect(()=>{localStorage.setItem("kone_kids_xp",a.toString())},[a]),c.useEffect(()=>{localStorage.setItem("kone_kids_missions",JSON.stringify(o))},[o]),c.useEffect(()=>{localStorage.setItem("kone_kids_onboarding",u.toString())},[u]),c.useEffect(()=>{localStorage.setItem("kone_kids_coins",d.toString())},[d]),c.useEffect(()=>{localStorage.setItem("kone_kids_inventory",JSON.stringify(p))},[p]),c.useEffect(()=>{localStorage.setItem("kone_kids_equipped",JSON.stringify(g))},[g]),c.useEffect(()=>{localStorage.setItem("kone_kids_series",JSON.stringify(v))},[v]),c.useEffect(()=>{const e=t.filter(e=>e.unlocked&&!e.viewed).length;var n;n=e,"undefined"!=typeof navigator&&"setAppBadge"in navigator&&(n>0?navigator.setAppBadge(n).catch(e=>{console.warn("PWA: Error setting badge",e)}):navigator.clearAppBadge().catch(e=>{console.warn("PWA: Error clearing badge",e)}))},[t]);const O=c.useCallback(e=>{n(t=>t.map(t=>{if(t.id===e&&!t.unlocked){t.xpReward&&(s(e=>e+t.xpReward),f(e=>e+Math.floor(t.xpReward/2)));const e={...t,unlocked:!0,unlockedAt:(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})};return E(e),e}return t}))},[]),M=c.useCallback(e=>{i(t=>t[e]?t:{...t,[e]:!0})},[]),L=c.useCallback(e=>{n(t=>t.map(t=>t.id===e?{...t,viewed:!0}:t))},[]),F=c.useCallback((e,t)=>{l(n=>{if(n.includes(e))return n;const r=[...n,e];return s(e=>e+t),f(e=>e+t),1===r.length&&O("mission_complete"),3===r.length&&O("welcome_hero"),import("./missions.c8bd945f.js").then(({CODING_MISSIONS:e})=>{const t=(t,n)=>{const i=e.filter(e=>e.pathway.includes(t)),a=i.filter(e=>r.includes(e.id));i.length>0&&a.length===i.length&&O(n)};t("Fundamentals","future_hero"),t("Mobile","app_builder"),t("Web","web_wizard"),t("Game","game_master"),t("AI (AI 4 Kids)","ai_genius"),t("ML (AI 4 Kids)","ai_genius"),t("Robotics","robot_commander"),t("Data Science","data_scientist")}),r})},[O]),U=c.useCallback(()=>{h(!0)},[]),V=c.useCallback((e,t)=>d>=t&&(f(e=>e-t),m(t=>[...t,e]),!0),[d]),z=c.useCallback(e=>{f(t=>t+e)},[]),j=c.useCallback((e,t)=>{y(n=>({...n,[e]:t}))},[]),B=c.useCallback((e,t)=>d>=t&&(f(e=>e-t),w(t=>t.includes(e)?t:[...t,e]),!0),[d]),W=c.useCallback(async(e,t,n)=>{try{if(EA&&EA.app&&!EA.currentUser){const{signInAnonymously:e}=await import("./index.esm.936fd3bd.js");await e(EA)}if(kA&&kA.app){const n=await eC(aS(kA,"sections",e,"students",t));if(n.exists()){const e=n.data();void 0!==e.xp&&s(e.xp),void 0!==e.coins&&f(e.coins),e.completedMissions&&l(e.completedMissions),e.inventory&&m(e.inventory),e.equippedItems&&y(e.equippedItems),e.unlockedSeries&&w(e.unlockedSeries)}}_(e),T(t),C(n),localStorage.setItem("kone_kids_section_id",e),localStorage.setItem("kone_kids_student_id",t),localStorage.setItem("kone_kids_student_name",n)}catch(r){console.error("Gamification: Student Login Local Fallback",r),_(e),T(t),C(n),localStorage.setItem("kone_kids_section_id",e),localStorage.setItem("kone_kids_student_id",t),localStorage.setItem("kone_kids_student_name",n)}},[]),q=c.useCallback(async()=>{try{if(EA&&EA.app&&EA.currentUser){const{signOut:e}=await import("./index.esm.936fd3bd.js");await e(EA)}}catch(e){console.error("Gamification: Student Logout Error",e)}_(""),T(""),C(""),localStorage.removeItem("kone_kids_section_id"),localStorage.removeItem("kone_kids_student_id"),localStorage.removeItem("kone_kids_student_name"),s(0),f(100),l([]),m([]),y({}),w(["series_word_search"]),localStorage.removeItem("kone_kids_xp"),localStorage.removeItem("kone_kids_missions"),localStorage.removeItem("kone_kids_coins"),localStorage.removeItem("kone_kids_inventory"),localStorage.removeItem("kone_kids_equipped"),localStorage.removeItem("kone_kids_series")},[]);c.useEffect(()=>{if(k&&I&&kA&&kA.app){(async()=>{try{await nC(aS(kA,"sections",k,"students",I),{xp:a,completedMissions:o,coins:d,inventory:p,equippedItems:g,unlockedSeries:v,lastSync:(new Date).toISOString()},{merge:!0})}catch(e){console.warn("Firebase Student Sync: Failed to save student progress.",e)}})()}},[a,o,d,p,g,v,k,I]);const H=c.useMemo(()=>({badges:t,latestBadge:b,unlockBadge:O,hasVisited:r,markVisited:M,markBadgeViewed:L,xp:a,level:R,completedMissions:o,completeMission:F,user:P,hasCompletedOnboarding:u,completeOnboarding:U,coins:d,inventory:p,equippedItems:g,purchaseItem:V,equipItem:j,unlockedSeries:v,unlockSeries:B,addCoins:z,sectionId:k,studentId:I,studentName:S,loginAsStudent:W,logoutStudent:q,dialect:A,setDialect:N}),[t,b,O,r,M,L,a,R,o,F,P,u,U,d,p,g,V,j,v,B,z,k,I,S,W,q,A,N]);return c.createElement(TA.Provider,{value:H},e)},CA=()=>{const e=c.useContext(TA);if(!e)throw new Error("useGamification must be used within a GamificationProvider");return e},AA={"Hi! Ready to build the future?":{twi:{text:"Mema wo aha! Wosiesie wo ho sɛ yɛbɛyɛ daakye no?",phonetic:"May-ma wo aha! Wo siesie wo ho seh yeh-beh-yeh daa-kyeh no?"},ga:{text:"Minao aha! Oasila kɛha daakye lɛ?",phonetic:"Mee-nawo aha! Wa-see-lah keh-ha daa-tsheh leh?"},ewe:{text:"Ndi na wò! Èle klalo be nàtu etsɔme?",phonetic:"Ndi na wo! Eh-leh klah-lo beh nah-to et-sor-meh?"}},"Hello World!":{twi:{text:"Mema wo aha wiase!",phonetic:"May-ma wo aha wee-ah-seh!"},ga:{text:"Minao aha je!",phonetic:"Mee-nawo aha jeh!"},ewe:{text:"Ndi na xexeame!",phonetic:"Ndi na she-she-ah-meh!"}},"Your workspace is empty! Drag some blocks in first. 👆":{twi:{text:"Wo adwumayɛbea hɔ yɛ hyehyeehye! Twi nneɛma bi gu so ansa. 👆",phonetic:"Wo adjoomayeh-beyah hor yeh sheh-shee-sheh! Twee nee-eh-mah bee goo so ansa. Up."},ga:{text:"Okasegbɛ lɛ yɛ faŋŋ! Gbalamɔ nɔ ko gu mli ya. 👆",phonetic:"Okaseh-gbeh leh yeh fang! Gbalamor nor ko goo mli yah. Up."},ewe:{text:"Wò dɔwɔƒe le ƒuƒlu! Hee nuxexlɛ dzesi aɖewo de eme gbɔ. 👆",phonetic:"Wo dor-wor-feh leh foofloo! Hee noosheshe dzesi adewor deh emeh gbor. Up."}},"Your workspace is empty! Drag some blocks in first.":{twi:{text:"Wo adwumayɛbea hɔ yɛ hyehyeehye! Twi nneɛma bi gu so ansa.",phonetic:"Wo adjoomayeh-beyah hor yeh sheh-shee-sheh! Twee nee-eh-mah bee goo so ansa."},ga:{text:"Okasegbɛ lɛ yɛ faŋŋ! Gbalamɔ nɔ ko gu mli ya.",phonetic:"Okaseh-gbeh leh yeh fang! Gbalamor nor ko goo mli yah."},ewe:{text:"Wò dɔwɔƒe le ƒuƒlu! Hee nuxexlɛ dzesi aɖewo de eme gbɔ.",phonetic:"Wo dor-wor-feh leh foofloo! Hee noosheshe dzesi adewor deh emeh gbor."}},"You need at least 1 blocks for this mission. Keep building!":{twi:{text:"Ehia sɛ wonya block baako ansa! Kɔ so yɛ!",phonetic:"Ehee-ah seh wonyah block bahko ansa! Kor so yeh!"},ga:{text:"Ehia ni onya block kome kɛha nitsumo nɛɛ! Yaa nɔ obua!",phonetic:"Ehee-ah nee onyah block kohmeh kehha neetsumor neh! Yah nor obwah!"},ewe:{text:"Èhiã nuxexlɛ dzesi ɖeka teti na dɔ sia! Yi dɔwɔwɔ dzi!",phonetic:"Eh-heeah noosheshe dzesi dekah teti na dor see-ah! Yee dor-wor-wor dzee!"}},"Well done! Mission accomplished!":{twi:{text:"Ayekoo! Woyɛɛ adwuma no yie!",phonetic:"Ah-yeh-koo! Wo-yehh adjooma no yee!"},ga:{text:"Oye odzogbaŋŋ! Okasegbe lɛ egbe naa!",phonetic:"O-yeh o-dzo-bang! O-kah-seh-gbeh leh eh-gbeh nah!"},ewe:{text:"Wòe dɔ! Èwu dɔ la nu dzidzedzetɔe!",phonetic:"Woe dor! Eh-woo dor lah noo dzi-dze-dze-toe!"}},"Welcome to the Lab, Engineer! I'm Byte, your coding assistant. Let's start with something simple — teach me to talk! Drag the 'Say' block and make me say Hello World!":{twi:{text:"Akwaaba gu Lab hɔ, Engineer! Me din de Byte, w'adwuma boafo. Ma yɛnhyɛ aseɛ ne biribi a ɛnyɛ den — kyerɛ me kasa! Twi 'Kasa' block no na ma me nka Hello World!",phonetic:"Ah-kwaa-bah goo Lab hor, Engineer! Meh deen deh Byte, wadjooma boafo. Mah yehn-sheh ahsee-eh neh beer-ee-bee ah eng-yeh den - shereh meh kah-sah! Twee Kasa block no nah mah meh nkah Hello World!"},ga:{text:"Ofri kɛba Lab lɛ mli, Engineer! Mi din ji Byte, okasemo yelikɛlɔ. Haa wɔje shishi kɛ nɔ ko ni waaa — tsɔɔmɔ mi wiemo! Gbalamɔ 'Kɛmɔ' block lɛ ni oha mi kɛ Hello World!",phonetic:"Ofri keh-bah Lab leh mli, Engineer! Mee deen jee Byte, okah-seh-mor yeh-lee-keh-lor. Haa wor-jeh shee-shee keh nor ko nee waaa - tsor-mor mee wee-eh-mor! Gbalamor Kemor block leh nee oha mee keh Hello World!"},ewe:{text:"Woezɔ de Lab la me, Mɔɖeka! Ŋunyenyie nye Byte, wò dɔwɔkpɛ. Na míadzidze nane si le bɔbɔe kpɔ — fia numagblɔ! Hee 'Gblɔ' block la eye nàna magblɔ Hello World!",phonetic:"Woe-zor deh Lab lah meh, Mor-de-kah! Ngoong-yen-yee nye Byte, wo dor-wor-kpeh. Nah mee-ah-dzee-dze nah-neh see leh bor-boe kpor - fee-ah noo-mah-gblor! Hee Gblor block lah eye nah-nah mah-gblor Hello World!"}},"First Hello":{twi:{text:"Nkyea Diakan",phonetic:"N-chiah Dee-ah-kan"},ga:{text:"Klenklen Minaoo",phonetic:"Klen-klen Mee-nawo"},ewe:{text:"Gbedoname Gbãtɔ",phonetic:"Gbe-do-na-meh Gbahn-tor"}},"Teach the mascot to greet the world with its very first spoken word.":{twi:{text:"Kyerɛ mascot no sɛnea ɔkyea wiase ne ne kasa a ɛdi kan.",phonetic:"Shereh mascot no seh-neh-ah o-chiah wee-ah-seh neh neh kah-sah ah eh-dee kan."},ga:{text:"Tsɔɔmɔ mascot lɛ bɔ ni eeeha je lɛ wiemo kɛ wiemo gbãtɔ.",phonetic:"Tsor-mor mascot leh bor nee ee-ee-ha jeh leh wee-eh-mor keh wee-eh-mor gbahn-tor."},ewe:{text:"Fia mascot la be nàgbe xexeame kple eƒe nya gbãtɔ.",phonetic:"Fee-ah mascot lah beh nah-gbeh she-she-ah-meh kple eh-feh nyah gbahn-tor."}},'Drag a "Say" block into the workspace and make the mascot say "Hello World!"':{twi:{text:"Twi 'Kasa' block gu adwumayɛbea hɔ na ma mascot no nka 'Hello World!'",phonetic:"Twee Kah-sah block goo adjoomayeh-beyah hor nah mah mascot no nkah Hello World!"},ga:{text:"Gbalamɔ 'Kɛmɔ' block kɛya okasegbɛ lɛ mli ni oha mascot lɛ kɛ 'Hello World!'",phonetic:"Gbalamor Keh-mor block keh-yah o-kah-seh-gbeh leh mli nee oha mascot leh keh Hello World!"},ewe:{text:"Hee 'Gblɔ' block de dɔwɔƒe la eye nàna mascot la nagblɔ be 'Hello World!'",phonetic:"Hee Gblor block deh dor-wor-feh lah eye nah-nah mascot lah nah-gblor beh Hello World!"}},"Great job on Mission 1! Now let's learn about timing. Computers can do actions in a sequence — one after another. Build me a wave, a pause, and a blink!":{twi:{text:"Woyɛɛ adwuma pa gu Mission 1 so! Afei yɛbɛsua afa bere ho. Kọmputa betumi ayɛ nneyɛe anatoɔ so — mmiako mmiako. Yɛ wave, pause, ne blink ma me!",phonetic:"Wo-yeh-eh adjooma pah goo Mission 1 so! Ah-feh yeh-beh-swah ah-fah beh-reh ho. Kom-pu-tah beh-toomee ah-yeh n-neh-yeh-ee ah-na-tor so - mee-ahko mee-ahko. Yeh wave, pause, neh blink mah meh!"},ga:{text:"Oye odzogbaŋŋ yɛ Mission 1 mli! Afei wɔkase nii yɛ be he. Kọmputa baanyɛ afee nibii anatoɔ mli — kome sɛɛ kome. Fee wave, pause, kɛ blink kɛha mi!",phonetic:"O-yeh o-dzo-bang yeh Mission 1 mli! Ah-fee wor-kah-seh nee yeh beh heh. Kom-pu-tah baa-nyeh ah-fee nee-bee ah-nah-tor mli - koh-meh seh koh-meh. Fee wave, pause, keh blink keh-ha mee!"},ewe:{text:"Wòe dɔ yɛ Mission 1 me! Fifia míasrɔ̃ nu tso ɣeyiɣi ŋu. Kɔmpiutawo teŋu wɔa dɔwo ɖeka le evelia yome. Wɔ wave, pause, kple blink nam!",phonetic:"Woe dor yeh Mission 1 meh! Fee-fee-ah mee-ah-srorn noo tso yeyi-yee ngu. Kom-piu-tah-wo teh-ngoo wor-ah dor-wo de-kah leh eh-ve-lee-ah yo-meh. Wor wave, pause, kple blink nam!"}},"Rhythm Master":{twi:{text:"Bere Hene",phonetic:"Beh-reh Heh-neh"},ga:{text:"Be He Mantsɛ",phonetic:"Beh Heh Man-tsheh"},ewe:{text:"Gametsi Fia",phonetic:"Gah-meh-tsee Fee-ah"}},"Build a timed sequence of actions — the foundation of all programming logic.":{twi:{text:"Yɛ nneyɛe a wɔahyɛ bere nneyɛe a ɛdi akyi — nnyinasoɔ kọmputa dwumadie nyinaa.",phonetic:"Yeh n-neh-yeh-ee ah wor-ah-sheh beh-reh n-neh-yeh-ee ah eh-dee ah-chee - n-nyee-nah-so com-pu-tah djooma-dee-eh n-yee-nah."},ga:{text:"Fee nibii ni ahe be kɛha nitsumɔ — sisilɛ kasegbɛ kọmputa nitsumɔ nyinaa.",phonetic:"Fee nee-bee nee ah-heh beh keh-ha nee-tsu-mor - see-see-leh kah-seh-gbeh kom-pu-tah nee-tsu-mor n-yee-nah."},ewe:{text:"Wɔ dɔwɔwɔ siwo si ɣeyiɣi le na — gɔmeɖoanyi kɔmpiuta nuxexlɛ nyinaa.",phonetic:"Wor dor-wor-wor see-wo see yeyi-yee leh nah - gorm-eh-dor-an-yee kom-piu-tah noo-she-shle n-yee-nah."}},"Make the mascot wave, pause for 2 seconds, then blink — all in order.":{twi:{text:"Ma mascot no nnwene ne nsa, ɔkɔgyina mfeɛ mmienu, na ɔnhwɛ anim — nyinaa ndidisoɔ so.",phonetic:"Mah mascot no n-nwe-neh neh n-sah, o-cor-jee-nah m-fee-eh m-mee-eh-noo, nah orn-hweh ah-neem - n-yee-nah n-dee-dee-sor so."},ga:{text:"Haa mascot lɛ nnwɛ ne nsa, okogyina miniti enyɔ, ni ohala anim — nyinaa yɛ natoo mli.",phonetic:"Haa mascot leh n-nweh neh n-sah, o-ko-jee-nah mee-nee-tee eh-nyor, nee o-ha-lah ah-neem - n-yee-nah yeh nah-too mli."},ewe:{text:"Na mascot la nawave, natsi ɖe aɖabaƒoƒo eve, eye wòablank — katã le ɖoɖo nu.",phonetic:"Nah mascot lah nah-wave, nah-tsee de ah-dah-bah-for-for eh-veh, eye wor-ah-blank - kah-tahn leh dor-dor noo."}}};function xA(e,t){if("en"===t)return{text:e,phonetic:e};const n=e.trim();return AA[n]?.[t]?AA[n][t]:{text:e,phonetic:e}}const NA=c.forwardRef((e,t)=>{const{unlockBadge:n,equippedItems:r,dialect:i}=CA(),[a,s]=c.useState(0),[o,l]=c.useState(!1),[u,h]=c.useState(!1),[d,f]=c.useState("Hi! Ready to build the future?"),[p,m]=c.useState(!1),[g,y]=c.useState(!1),[v,w]=c.useState(!1),b=c.useRef(null),E=c.useRef(null),k=(()=>{switch(r.skin){case"neon_glow":return{stop0:"#22d3ee",stop60:"#0891b2",stop100:"#0e7490",armStroke:"#0e7490"};case"gold_chrome":return{stop0:"#fbbf24",stop60:"#d97706",stop100:"#92400e",armStroke:"#92400e"};case"matrix_rain":return{stop0:"#4ade80",stop60:"#16a34a",stop100:"#14532d",armStroke:"#14532d"};case"quantum_glitch":return{stop0:"#f472b6",stop60:"#c084fc",stop100:"#22d3ee",armStroke:"#c084fc"};default:return{stop0:"#38bdf8",stop60:"#0ea5e9",stop100:"#1d4ed8",armStroke:"#1d4ed8"}}})(),_=c.useRef(null),I=c.useRef([]),T=c.useRef(null),S=c.useRef(null),C=(e=3e3)=>{w(!0),b.current&&(clearInterval(b.current),b.current=null),E.current&&clearTimeout(E.current),E.current=setTimeout(()=>{w(!1),P(!1)},e)},A=(e,t,n,r,i,a)=>{let s=Math.PI/2*3,o=t,l=n,c=Math.PI/r;e.beginPath(),e.moveTo(t,n-i);for(let u=0;u<r;u++)o=t+Math.cos(s)*i,l=n+Math.sin(s)*i,e.lineTo(o,l),s+=c,o=t+Math.cos(s)*a,l=n+Math.sin(s)*a,e.lineTo(o,l),s+=c;e.lineTo(t,n-i),e.closePath(),e.fill()},x=(e,t,n,r)=>{e.beginPath(),e.moveTo(t,n-r),e.quadraticCurveTo(t,n,t+r,n),e.quadraticCurveTo(t,n,t,n+r),e.quadraticCurveTo(t,n,t-r,n),e.quadraticCurveTo(t,n,t,n-r),e.closePath(),e.fill()},N=()=>{const e=_.current;if(!e)return;const t=e.getContext("2d");if(!t)return;t.clearRect(0,0,e.width,e.height);const n=I.current;for(let e=n.length-1;e>=0;e--){const r=n[e];r.x+=r.vx,r.y+=r.vy,r.vy+=r.gravity,r.vx*=.98,r.vy*=.98,r.rotation+=r.rotationSpeed,r.alpha-=r.decay,r.alpha<=0?n.splice(e,1):(t.save(),t.globalAlpha=r.alpha,t.fillStyle=r.color,t.strokeStyle=r.color,t.translate(r.x,r.y),t.rotate(r.rotation),"star"===r.type?A(t,0,0,5,r.size,r.size/2):"sparkle"===r.type?x(t,0,0,r.size):(t.beginPath(),t.arc(0,0,r.size/2,0,2*Math.PI),t.fillStyle=r.color,t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.8)",t.lineWidth=1,t.stroke()),t.restore())}n.length>0?T.current=requestAnimationFrame(N):T.current=null},R=(e,t="low")=>{const n=_.current;if(!n)return;const i=n.getBoundingClientRect();n.width===i.width&&n.height===i.height||(n.width=i.width,n.height=i.height);const a=n.width/2,s=.55*n.height,o=(()=>{const e=r.skin;return"neon_glow"===e?["#22d3ee","#f472b6","#a855f7","#06b6d4","#e879f9"]:"gold_chrome"===e?["#fbbf24","#f59e0b","#d97706","#bef264","#fef08a"]:"matrix_rain"===e?["#22c55e","#4ade80","#86efac","#15803d","#10b981"]:"quantum_glitch"===e?["#ec4899","#a855f7","#06b6d4","#f43f5e","#3b82f6"]:["#38bdf8","#f472b6","#fbbf24","#a3e635","#a855f7","#fb7185"]})();for(let n=0;n<e;n++){const e=2*Math.PI*Math.random()-Math.PI,n="high"===t?3+8*Math.random():1.5+3.5*Math.random();I.current.push({x:a,y:s,vx:Math.cos(e)*n,vy:Math.sin(e)*n-("high"===t?4:1.5),size:"high"===t?4+10*Math.random():3+6*Math.random(),color:o[Math.floor(Math.random()*o.length)],type:Math.random()>.65?"star":Math.random()>.3?"sparkle":"bubble",rotation:Math.random()*Math.PI*2,rotationSpeed:.25*(Math.random()-.5),alpha:1,decay:"high"===t?.01+.015*Math.random():.015+.025*Math.random(),gravity:.08+.12*Math.random()})}T.current||(T.current=requestAnimationFrame(N))};c.useImperativeHandle(t,()=>({speak:e=>{C(4500);const t=xA(e,i);f(t.text),h(!0),D(t.phonetic),setTimeout(()=>h(!1),4e3)},wave:(e=2e3)=>{C(e+1e3),l(!0),setTimeout(()=>l(!1),e)},blink:()=>{C(1500),y(!0),setTimeout(()=>y(!1),400)},celebrate:(e="low")=>{C("high"===e?4e3:2e3),l(!0),R("high"===e?45:20,e),setTimeout(()=>l(!1),"high"===e?2500:1500)}}),[i,v,r]);const P=(e=!1)=>{if(v)return;b.current&&clearInterval(b.current);const t=e?1200:3500;b.current=setInterval(()=>{v||(y(!0),setTimeout(()=>y(!1),400))},t)};c.useEffect(()=>(P(!1),()=>{b.current&&clearInterval(b.current),E.current&&clearTimeout(E.current),S.current&&clearInterval(S.current),T.current&&cancelAnimationFrame(T.current)}),[v]),c.useEffect(()=>{if(!r.skin||"default"===r.skin)return;const e=setInterval(()=>{document.hidden||R(1,"low")},800);return()=>clearInterval(e)},[r.skin]);const D=e=>{if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel(),S.current&&(clearInterval(S.current),S.current=null);const t=new SpeechSynthesisUtterance(e);t.pitch=1.3,t.rate=.95,t.volume=1;const n=window.speechSynthesis.getVoices().find(e=>e.name.includes("Google")||e.name.includes("Samantha")||e.name.includes("Karen"));n&&(t.voice=n),t.onstart=()=>{S.current=setInterval(()=>{R(2,"low")},250)},t.onend=t.onerror=()=>{S.current&&(clearInterval(S.current),S.current=null)},window.speechSynthesis.speak(t)};return c.createElement("div",{className:"mascot-container",onClick:()=>{const e=a+1;s(e),e>=5&&n("mascot_master"),C(3e3),l(!0);const t=xA("Hi! Ready to build the future?",i);f(t.text),h(!0),D(t.phonetic),R(15,"low"),setTimeout(()=>l(!1),2e3),setTimeout(()=>h(!1),4e3)},onMouseEnter:()=>{m(!0),l(!0),P(!0)},onMouseLeave:()=>{m(!1),u||l(!1),P(!1)},style:{position:"relative",cursor:"pointer",display:"inline-block"}},c.createElement("canvas",{ref:_,style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:5,width:"100%",height:"100%"}}),v&&c.createElement("div",{style:{position:"absolute",inset:"-20px",background:"radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0) 70%)",borderRadius:"50%",zIndex:-1,animation:"pulse 1.5s ease-in-out infinite"}}),u&&c.createElement("div",{style:{position:"absolute",top:"-40px",right:"-20px",background:"white",padding:"1rem 1.5rem",borderRadius:"20px",boxShadow:"0 10px 25px rgba(0,0,0,0.1)",zIndex:10,fontFamily:"'Baloo 2', cursive",fontSize:"1.2rem",fontWeight:700,color:"var(--kids-dark)",border:"3px solid var(--kids-blue)",whiteSpace:"pre-wrap",wordWrap:"break-word",maxWidth:"clamp(200px, 50vw, 300px)",animation:"modalPop 0.3s ease-out"}},d," ",d.includes("future")&&"🚀",c.createElement("div",{style:{position:"absolute",bottom:"-10px",left:"20px",width:"20px",height:"20px",background:"white",borderRight:"3px solid var(--kids-blue)",borderBottom:"3px solid var(--kids-blue)",transform:"rotate(45deg)"}})),r.pose&&"pose_standing"!==r.pose?c.createElement("div",{style:{width:"100%",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"300px"}},c.createElement("img",{src:`/mascot/${r.pose.replace("pose_","")}.svg`,alt:"Mascot Pose",width:"300",height:"300",style:{width:"100%",height:"auto",maxWidth:"400px",filter:v?"drop-shadow(0 0 15px rgba(14, 165, 233, 0.4))":"none",transition:"all 0.3s"},className:"animate-float"})):c.createElement("svg",{width:"100%",viewBox:"0 0 400 420",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transition:"all 0.3s",maxWidth:"500px",filter:v?"drop-shadow(0 0 10px rgba(14, 165, 233, 0.3))":"none"},className:o?"":"animate-float"},c.createElement("style",null,"\n            @keyframes glitch-anim {\n              0% { transform: translate(0) skew(0); }\n              5% { transform: translate(-2px, 1px) skew(-1deg); filter: hue-rotate(45deg); }\n              10% { transform: translate(2px, -1px) skew(1deg); filter: hue-rotate(-45deg); }\n              15% { transform: translate(0) skew(0); }\n              100% { transform: translate(0) skew(0); }\n            }\n            .glitch-active {\n              animation: glitch-anim 2s infinite;\n              transform-origin: center;\n            }\n            @keyframes neon-hue {\n              0% { filter: hue-rotate(0deg) drop-shadow(0 0 5px rgba(34,211,238,0.5)); }\n              50% { filter: hue-rotate(180deg) drop-shadow(0 0 15px rgba(244,114,182,0.8)); }\n              100% { filter: hue-rotate(360deg) drop-shadow(0 0 5px rgba(34,211,238,0.5)); }\n            }\n            .neon-active {\n              animation: neon-hue 6s linear infinite;\n            }\n            @keyframes float-bot {\n              0% { transform: translate(320px, 320px) scale(0.6) translateY(0); }\n              50% { transform: translate(320px, 320px) scale(0.6) translateY(-8px); }\n              100% { transform: translate(320px, 320px) scale(0.6) translateY(0); }\n            }\n            .floating-bot {\n              animation: float-bot 3s ease-in-out infinite;\n            }\n            @keyframes float-dragon {\n              0% { transform: translate(305px, 230px) translateY(0); }\n              50% { transform: translate(305px, 230px) translateY(-6px); }\n              100% { transform: translate(305px, 230px) translateY(0); }\n            }\n            .floating-dragon {\n              animation: float-dragon 3.5s ease-in-out infinite;\n            }\n          "),c.createElement("defs",null,c.createElement("radialGradient",{id:"body-radial",cx:"200",cy:"180",r:"160",gradientUnits:"userSpaceOnUse"},c.createElement("stop",{offset:"0%",stopColor:k.stop0}),c.createElement("stop",{offset:"60%",stopColor:k.stop60}),c.createElement("stop",{offset:"100%",stopColor:k.stop100})),c.createElement("linearGradient",{id:"shine-grad",x1:"0%",y1:"0%",x2:"100%",y2:"100%"},c.createElement("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0"}),c.createElement("stop",{offset:"30%",stopColor:"#ffffff",stopOpacity:"0"}),c.createElement("stop",{offset:"50%",stopColor:"#ffffff",stopOpacity:"0.6"}),c.createElement("stop",{offset:"70%",stopColor:"#ffffff",stopOpacity:"0"}),c.createElement("stop",{offset:"100%",stopColor:"#ffffff",stopOpacity:"0"}),c.createElement("animate",{attributeName:"x1",from:"-100%",to:"100%",dur:"2.5s",repeatCount:"indefinite"}),c.createElement("animate",{attributeName:"y1",from:"-100%",to:"100%",dur:"2.5s",repeatCount:"indefinite"}),c.createElement("animate",{attributeName:"x2",from:"0%",to:"200%",dur:"2.5s",repeatCount:"indefinite"}),c.createElement("animate",{attributeName:"y2",from:"0%",to:"200%",dur:"2.5s",repeatCount:"indefinite"})),c.createElement("pattern",{id:"matrix-pattern",width:"50",height:"50",patternUnits:"userSpaceOnUse"},c.createElement("rect",{width:"50",height:"50",fill:"transparent"}),c.createElement("text",{x:"5",y:"15",fill:"#22c55e",fontSize:"8",fontFamily:"monospace",fontWeight:"bold",opacity:"0.7"},"0"),c.createElement("text",{x:"15",y:"30",fill:"#4ade80",fontSize:"9",fontFamily:"monospace",fontWeight:"bold",opacity:"0.9"},"1"),c.createElement("text",{x:"25",y:"10",fill:"#22c55e",fontSize:"7",fontFamily:"monospace",fontWeight:"bold",opacity:"0.5"},"1"),c.createElement("text",{x:"35",y:"45",fill:"#4ade80",fontSize:"10",fontFamily:"monospace",fontWeight:"bold",opacity:"0.8"},"0"),c.createElement("text",{x:"45",y:"25",fill:"#22c55e",fontSize:"8",fontFamily:"monospace",fontWeight:"bold",opacity:"0.6"},"1"),c.createElement("animate",{attributeName:"y",from:"0",to:"50",dur:"2s",repeatCount:"indefinite"})),c.createElement("filter",{id:"soft-shadow",x:"-30%",y:"-30%",width:"160%",height:"160%"},c.createElement("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"6"}),c.createElement("feOffset",{dx:"0",dy:"10",result:"offsetblur"}),c.createElement("feComponentTransfer",null,c.createElement("feFuncA",{type:"linear",slope:"0.3"})),c.createElement("feMerge",null,c.createElement("feMergeNode",null),c.createElement("feMergeNode",{in:"SourceGraphic"}))),c.createElement("filter",{id:"saber-glow",x:"-50%",y:"-50%",width:"200%",height:"200%"},c.createElement("feGaussianBlur",{stdDeviation:"6",result:"blur"}),c.createElement("feMerge",null,c.createElement("feMergeNode",{in:"blur"}),c.createElement("feMergeNode",{in:"SourceGraphic"})))),c.createElement("g",{filter:"url(#soft-shadow)"},c.createElement("path",{d:"M 180 320 Q 180 350 180 375",stroke:"white",strokeWidth:"24",strokeLinecap:"round",fill:"none"}),c.createElement("path",{d:"M 220 320 Q 220 350 220 375",stroke:"white",strokeWidth:"24",strokeLinecap:"round",fill:"none"}),c.createElement("path",{d:"M 180 375 Q 180 405 140 405 L 120 400 Q 100 380 150 365 Z",fill:"white"}),c.createElement("path",{d:"M 220 375 Q 220 405 260 405 L 280 400 Q 300 380 250 365 Z",fill:"white"})),c.createElement("g",{filter:"url(#soft-shadow)"},c.createElement("path",{d:"M 50 280 L 350 280 L 370 340 L 30 340 Z",fill:"#b45309"}),c.createElement("rect",{x:"70",y:"340",width:"20",height:"60",fill:"#78350f"}),c.createElement("rect",{x:"310",y:"340",width:"20",height:"60",fill:"#78350f"}),c.createElement("path",{d:"M 120 280 L 280 280 L 290 270 L 110 270 Z",fill:"#94a3b8"}),c.createElement("rect",{x:"130",y:"210",width:"140",height:"60",rx:"4",fill:"#1e293b"}),c.createElement("rect",{x:"135",y:"215",width:"130",height:"50",rx:"2",fill:"#10b981"}),c.createElement("path",{d:"M 185 240 L 195 250 L 215 230",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})),c.createElement("g",{filter:"url(#soft-shadow)"},c.createElement("path",{d:"M 200 65 C 200 65 90 170 90 245 C 90 320 140 350 200 350 C 260 350 310 320 310 245 C 310 170 200 65 200 65 Z",fill:"url(#body-radial)",className:"quantum_glitch"===r.skin?"glitch-active":"neon_glow"===r.skin?"neon-active":""}),"matrix_rain"===r.skin&&c.createElement("path",{d:"M 200 65 C 200 65 90 170 90 245 C 90 320 140 350 200 350 C 260 350 310 320 310 245 C 310 170 200 65 200 65 Z",fill:"url(#matrix-pattern)"}),"gold_chrome"===r.skin&&c.createElement("path",{d:"M 200 65 C 200 65 90 170 90 245 C 90 320 140 350 200 350 C 260 350 310 320 310 245 C 310 170 200 65 200 65 Z",fill:"url(#shine-grad)",style:{mixBlendMode:"overlay"}}),c.createElement("ellipse",{cx:"160",cy:"205",rx:"32",ry:g?2:48,fill:"white",style:{transition:"ry 0.08s ease-in-out"}}),c.createElement("ellipse",{cx:"240",cy:"205",rx:"32",ry:g?2:48,fill:"white",style:{transition:"ry 0.08s ease-in-out"}}),!g&&c.createElement(c.Fragment,null,c.createElement("circle",{cx:"165",cy:"215",r:"16",fill:"#0f172a"}),c.createElement("circle",{cx:"245",cy:"215",r:"16",fill:"#0f172a"}),c.createElement("circle",{cx:"168",cy:"208",r:"6",fill:"white",fillOpacity:"0.8"}),c.createElement("circle",{cx:"248",cy:"208",r:"6",fill:"white",fillOpacity:"0.8"})),"cool_shades"===r.glasses&&c.createElement("g",{transform:"translate(130, 185)"},c.createElement("rect",{x:"0",y:"0",width:"140",height:"40",rx:"10",fill:"#0f172a"}),c.createElement("rect",{x:"5",y:"5",width:"60",height:"30",rx:"8",fill:"#1e293b"}),c.createElement("rect",{x:"75",y:"5",width:"60",height:"30",rx:"8",fill:"#1e293b"})),"vr_goggles"===r.glasses&&c.createElement("g",{transform:"translate(125, 180)"},c.createElement("rect",{x:"0",y:"0",width:"150",height:"50",rx:"12",fill:"#1e293b",stroke:"#22d3ee",strokeWidth:"2"}),c.createElement("rect",{x:"10",y:"10",width:"130",height:"30",rx:"6",fill:"#0ea5e9",fillOpacity:"0.5"}),c.createElement("path",{d:"M 20 25 L 130 25",stroke:"#22d3ee",strokeWidth:"1",strokeDasharray:"4 2"})),"cyber_visor"===r.glasses&&c.createElement("g",{transform:"translate(120, 180)"},c.createElement("path",{d:"M 0 10 L 15 0 L 145 0 L 160 10 L 150 45 L 135 50 L 25 50 L 10 45 Z",fill:"#f43f5e",fillOpacity:"0.85",stroke:"#fb7185",strokeWidth:"2"}),c.createElement("path",{d:"M 12 12 L 148 12",stroke:"#22d3ee",strokeWidth:"2",strokeDasharray:"5 3"}),c.createElement("path",{d:"M 15 38 L 145 38",stroke:"#22d3ee",strokeWidth:"1"}),c.createElement("circle",{cx:"40",cy:"25",r:"10",stroke:"#22d3ee",strokeWidth:"1.5",fill:"none",strokeDasharray:"3 2"}),c.createElement("circle",{cx:"40",cy:"25",r:"3",fill:"#22d3ee"}),c.createElement("path",{d:"M 110 20 L 130 20 L 135 25",fill:"none",stroke:"#22d3ee",strokeWidth:"1.5"}),c.createElement("rect",{x:"110",y:"27",width:"15",height:"4",fill:"#fb7185"}),c.createElement("rect",{x:"128",y:"27",width:"8",height:"4",fill:"#22d3ee"})),"monocle"===r.glasses&&c.createElement("g",null,c.createElement("circle",{cx:"240",cy:"210",r:"34",stroke:"#fbbf24",strokeWidth:"3",fill:"rgba(251, 191, 36, 0.15)"}),c.createElement("path",{d:"M 220 195 Q 235 185 255 190",fill:"none",stroke:"white",strokeWidth:"2",strokeLinecap:"round",opacity:"0.6"}),c.createElement("path",{d:"M 268 228 Q 295 245 285 295",fill:"none",stroke:"#fbbf24",strokeWidth:"2",strokeDasharray:"4 4"}),c.createElement("circle",{cx:"285",cy:"297",r:"4",fill:"#d97706"})),p?c.createElement("g",null,c.createElement("path",{d:"M 178 262 Q 200 282 222 262 Q 200 302 178 262 Z",fill:"#0f172a"}),c.createElement("path",{d:"M 183 265 Q 200 270 217 265",stroke:"white",strokeWidth:"3",fill:"none",strokeLinecap:"round"})):c.createElement("path",{d:"M 178 262 Q 200 282 222 262",stroke:"#0f172a",strokeWidth:"5",strokeLinecap:"round",fill:"none"})),"engineer_cap"===r.hat&&c.createElement("g",{transform:"translate(140, 50)"},c.createElement("path",{d:"M 0 40 Q 60 0 120 40 L 130 50 Q 60 70 -10 50 Z",fill:"#1d4ed8"}),c.createElement("path",{d:"M 10 40 Q 60 10 110 40",fill:"none",stroke:"white",strokeWidth:"2"})),"space_helmet"===r.hat&&c.createElement("g",{transform:"translate(125, 45)"},c.createElement("circle",{cx:"75",cy:"75",r:"70",fill:"rgba(255,255,255,0.1)",stroke:"white",strokeWidth:"2"}),c.createElement("rect",{x:"25",y:"120",width:"100",height:"15",rx:"5",fill:"#cbd5e1"})),"crown"===r.hat&&c.createElement("g",{transform:"translate(140, 30)"},c.createElement("path",{d:"M 0 50 L 20 20 L 40 50 L 60 10 L 80 50 L 100 20 L 120 50 Z",fill:"#fbbf24",stroke:"#d97706",strokeWidth:"2"}),c.createElement("circle",{cx:"60",cy:"10",r:"5",fill:"#ef4444"})),"wizard_hat"===r.hat&&c.createElement("g",{transform:"translate(130, 10)"},c.createElement("ellipse",{cx:"70",cy:"58",rx:"60",ry:"10",fill:"#4f46e5",stroke:"#312e81",strokeWidth:"2"}),c.createElement("path",{d:"M 20 54 Q 70 -5 95 -45 Q 85 15 120 54 Z",fill:"#4f46e5",stroke:"#312e81",strokeWidth:"2"}),c.createElement("path",{d:"M 23 51 Q 70 59 117 51 Q 112 43 70 51 Q 28 43 23 51 Z",fill:"#fbbf24"}),c.createElement("polygon",{points:"70,12 73,20 81,20 75,25 77,33 70,28 63,33 65,25 59,20 67,20",fill:"#fef08a"}),c.createElement("polygon",{points:"45,35 46.5,39 50.5,39 47.5,41.5 48.5,45.5 45,43 41.5,45.5 42.5,41.5 39.5,39 43.5,39",fill:"#fef08a"}),c.createElement("polygon",{points:"95,30 96.5,34 100.5,34 97.5,36.5 98.5,40.5 95,38 91.5,40.5 92.5,36.5 89.5,34 93.5,34",fill:"#fef08a"})),"detective_hat"===r.hat&&c.createElement("g",{transform:"translate(130, 15)"},c.createElement("path",{d:"M -15 55 Q 70 70 155 55 Q 70 45 -15 55 Z",fill:"#5c3d2e",stroke:"#3e2723",strokeWidth:"2"}),c.createElement("path",{d:"M 15 50 C 20 20 40 15 70 25 C 100 15 120 20 125 50 Z",fill:"#5c3d2e",stroke:"#3e2723",strokeWidth:"2"}),c.createElement("path",{d:"M 45 23 Q 70 32 95 23",stroke:"#3e2723",strokeWidth:"2.5",fill:"none",strokeLinecap:"round"}),c.createElement("path",{d:"M 17 48 Q 70 56 123 48 L 124 40 Q 70 48 16 40 Z",fill:"#111827"}),c.createElement("rect",{x:"95",y:"36",width:"6",height:"10",fill:"#d97706",rx:"1"})),"robot_pet"===r.accessory&&c.createElement("g",{className:"floating-bot"},c.createElement("rect",{x:"0",y:"0",width:"80",height:"80",rx:"10",fill:"#94a3b8"}),c.createElement("rect",{x:"10",y:"10",width:"60",height:"40",rx:"5",fill:"#1e293b"}),c.createElement("circle",{cx:"25",cy:"25",r:"5",fill:"#22d3ee"},c.createElement("animate",{attributeName:"ry",values:"5;0.5;5",dur:"3s",repeatCount:"indefinite"})),c.createElement("circle",{cx:"55",cy:"25",r:"5",fill:"#22d3ee"},c.createElement("animate",{attributeName:"ry",values:"5;0.5;5",dur:"3s",repeatCount:"indefinite"})),c.createElement("line",{x1:"40",y1:"0",x2:"40",y2:"-12",stroke:"#475569",strokeWidth:"4"}),c.createElement("circle",{cx:"40",cy:"-12",r:"5",fill:"#0ea5e9"},c.createElement("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:"1.5s",repeatCount:"indefinite"})),c.createElement("path",{d:"M 10 90 L 30 110 M 70 90 L 50 110",stroke:"white",strokeWidth:"8",strokeLinecap:"round"})),"pet_dragon"===r.accessory&&c.createElement("g",{className:"floating-dragon",filter:"url(#soft-shadow)"},c.createElement("g",{transform:"translate(10, 15)"},c.createElement("path",{d:"M 0 0 Q -25 -15 -15 10 Q -12 7 0 10 Z",fill:"#b91c1c",stroke:"#7f1d1d",strokeWidth:"1.5"},c.createElement("animateTransform",{attributeName:"transform",type:"rotate",values:"0; -25; 0",dur:"0.6s",repeatCount:"indefinite"}))),c.createElement("path",{d:"M 15 45 Q -2 55 -5 40 Q -5 30 5 35 L 10 45 Z",fill:"#22c55e",stroke:"#15803d",strokeWidth:"1.5"}),c.createElement("polygon",{points:"-5,40 -10,35 -2,32",fill:"#ef4444"}),c.createElement("polygon",{points:"25,12 25,18 31,15",fill:"#ef4444"}),c.createElement("polygon",{points:"25,23 25,29 31,26",fill:"#ef4444"}),c.createElement("ellipse",{cx:"25",cy:"30",rx:"16",ry:"20",fill:"#22c55e",stroke:"#15803d",strokeWidth:"2"}),c.createElement("ellipse",{cx:"25",cy:"32",rx:"10",ry:"14",fill:"#fde047"}),c.createElement("circle",{cx:"16",cy:"48",r:"5",fill:"#16a34a"}),c.createElement("circle",{cx:"34",cy:"48",r:"5",fill:"#16a34a"}),c.createElement("g",{transform:"translate(38, 15)"},c.createElement("path",{d:"M 0 0 Q 25 -15 15 10 Q 12 7 0 10 Z",fill:"#ef4444",stroke:"#b91c1c",strokeWidth:"1.5"},c.createElement("animateTransform",{attributeName:"transform",type:"rotate",values:"0; 25; 0",dur:"0.6s",repeatCount:"indefinite"}))),c.createElement("circle",{cx:"25",cy:"5",r:"14",fill:"#22c55e",stroke:"#15803d",strokeWidth:"2"}),c.createElement("rect",{x:"18",y:"2",width:"14",height:"8",rx:"2.5",fill:"#4ade80"}),c.createElement("circle",{cx:"20",cy:"2",r:"3.5",fill:"white"}),c.createElement("circle",{cx:"20",cy:"2",r:"1.5",fill:"black"}),c.createElement("circle",{cx:"30",cy:"2",r:"3.5",fill:"white"}),c.createElement("circle",{cx:"30",cy:"2",r:"1.5",fill:"black"}),c.createElement("polygon",{points:"16,-7 12,-14 20,-9",fill:"#fbbf24",stroke:"#d97706",strokeWidth:"1"}),c.createElement("polygon",{points:"34,-7 38,-14 30,-9",fill:"#fbbf24",stroke:"#d97706",strokeWidth:"1"}),c.createElement("path",{d:"M 12 6 Q -2 12 6 15 Q 12 11 12 6",fill:"#f97316",opacity:"0.85"}),c.createElement("circle",{cx:"-1",cy:"13",r:"2",fill:"#ef4444"},c.createElement("animate",{attributeName:"r",values:"2;5;2",dur:"1s",repeatCount:"indefinite"}),c.createElement("animate",{attributeName:"opacity",values:"0.8;0.3;0.8",dur:"1s",repeatCount:"indefinite"}))),"light_saber"===r.accessory&&c.createElement("g",{filter:"url(#soft-shadow)"},c.createElement("line",{x1:"275",y1:"295",x2:"345",y2:"195",stroke:"#22d3ee",strokeWidth:"14",strokeLinecap:"round",opacity:"0.4",filter:"url(#saber-glow)"},c.createElement("animate",{attributeName:"strokeWidth",values:"12;16;12",dur:"1.2s",repeatCount:"indefinite"}),c.createElement("animate",{attributeName:"opacity",values:"0.3;0.5;0.3",dur:"1.2s",repeatCount:"indefinite"})),c.createElement("line",{x1:"275",y1:"295",x2:"345",y2:"195",stroke:"#06b6d4",strokeWidth:"8",strokeLinecap:"round"},c.createElement("animate",{attributeName:"strokeWidth",values:"7;9;7",dur:"1.2s",repeatCount:"indefinite"})),c.createElement("line",{x1:"275",y1:"295",x2:"345",y2:"195",stroke:"#ffffff",strokeWidth:"4",strokeLinecap:"round"}),c.createElement("line",{x1:"265",y1:"310",x2:"278",y2:"292",stroke:"#475569",strokeWidth:"10",strokeLinecap:"round"}),c.createElement("line",{x1:"265",y1:"310",x2:"278",y2:"292",stroke:"#0f172a",strokeWidth:"10",strokeDasharray:"2 3",strokeLinecap:"round"}),c.createElement("circle",{cx:"272",cy:"301",r:"1.5",fill:"#ef4444"})),c.createElement("g",{style:{transform:o?"rotate(-25deg)":"rotate(0deg)",transformOrigin:"100px 240px",transition:"transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"}},c.createElement("path",{d:"M 100 240 Q 60 210 40 240",stroke:k.armStroke,strokeWidth:"26",strokeLinecap:"round",fill:"none"}),c.createElement("path",{d:"M 40 240 C 20 220 10 240 25 260 C 20 270 35 285 50 270 C 60 275 75 255 65 235 C 60 215 45 220 40 235",fill:"white",stroke:"#e2e8f0",strokeWidth:"1"})),c.createElement("g",{filter:"url(#soft-shadow)"},c.createElement("path",{d:"M 300 240 Q 320 280 270 310",stroke:k.armStroke,strokeWidth:"26",strokeLinecap:"round",fill:"none"}),c.createElement("path",{d:"M 270 310 C 250 330 220 310 230 290 C 225 275 245 260 265 275 C 285 270 300 290 285 310 C 280 320 275 315 270 310 Z",fill:"white",stroke:"#e2e8f0",strokeWidth:"1"}))))});NA.displayName="Mascot";const RA=c.createContext(void 0),PA=({children:e})=>{const[t,n]=c.useState(()=>localStorage.getItem("kone_kids_theme")||"light");return c.useEffect(()=>{localStorage.setItem("kone_kids_theme",t),document.documentElement.setAttribute("data-theme",t)},[t]),c.createElement(RA.Provider,{value:{theme:t,toggleTheme:()=>{n(e=>"light"===e?"dark":"light")}}},e)},DA=()=>{const e=c.useContext(RA);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e};var OA={};!function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),s="function"==typeof Path2D&&"function"==typeof DOMMatrix,o=function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext("2d");n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,"no-repeat")}catch(e){return!1}return!0}();function l(){}function c(e){var r=n.exports.Promise,i=void 0!==r?r:t.Promise;return"function"==typeof i?new i(e):(e(l,l),null)}var u,h,d,f,p,m,g,y,v,w,b,E=(u=o,h=new Map,{transform:function(e){if(u)return e;if(h.has(e))return h.get(e);var t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),h.set(e,t),t},clear:function(){h.clear()}}),k=(p=Math.floor(1e3/60),m={},g=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(d=function(e){var t=Math.random();return m[t]=requestAnimationFrame(function n(r){g===r||g+p-1<r?(g=r,delete m[t],e()):m[t]=requestAnimationFrame(n)}),t},f=function(e){m[e]&&cancelAnimationFrame(m[e])}):(d=function(e){return setTimeout(e,p)},f=function(e){return clearTimeout(e)}),{frame:d,cancel:f}),_=(w={},function(){if(y)return y;if(!r&&a){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{y=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,r,i){if(v)return t(n,null),v;var a=Math.random().toString(36).slice(2);return v=c(function(r){function s(t){t.data.callback===a&&(delete w[a],e.removeEventListener("message",s),v=null,E.clear(),i(),r())}e.addEventListener("message",s),t(n,a),w[a]=s.bind(null,{data:{callback:a}})})},e.reset=function(){for(var t in e.postMessage({reset:!0}),w)w[t](),delete w[t]}}(y)}return y}),I={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:I[t],n)}function S(e){return e<0?0:Math.floor(e)}function C(e,t){return Math.floor(Math.random()*(t-e))+e}function A(e){return parseInt(e,16)}function x(e){return e.map(N)}function N(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:A(t.substring(0,2)),g:A(t.substring(2,4)),b:A(t.substring(4,6))}}function R(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function P(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,o=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),s&&"path"===t.shape.type&&"string"==typeof t.shape.path&&Array.isArray(t.shape.matrix))e.fill(function(e,t,n,r,i,a,s){var o=new Path2D(e),l=new Path2D;l.addPath(o,new DOMMatrix(t));var c=new Path2D;return c.addPath(l,new DOMMatrix([Math.cos(s)*i,Math.sin(s)*i,-Math.sin(s)*a,Math.cos(s)*a,n,r])),c}(t.shape.path,t.shape.matrix,t.x,t.y,.1*Math.abs(a-r),.1*Math.abs(o-i),Math.PI/10*t.wobble));else if("bitmap"===t.shape.type){var l=Math.PI/10*t.wobble,c=.1*Math.abs(a-r),u=.1*Math.abs(o-i),h=t.shape.bitmap.width*t.scalar,d=t.shape.bitmap.height*t.scalar,f=new DOMMatrix([Math.cos(l)*c,Math.sin(l)*c,-Math.sin(l)*u,Math.cos(l)*u,t.x,t.y]);f.multiplySelf(new DOMMatrix(t.shape.matrix));var p=e.createPattern(E.transform(t.shape.bitmap),"no-repeat");p.setTransform(f),e.globalAlpha=1-n,e.fillStyle=p,e.fillRect(t.x-h/2,t.y-d/2,h,d),e.globalAlpha=1}else if("circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,i,a,s,o,l){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,s,o,l),e.restore()}(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var m=Math.PI/2*3,g=4*t.scalar,y=8*t.scalar,v=t.x,w=t.y,b=5,k=Math.PI/b;b--;)v=t.x+Math.cos(m)*y,w=t.y+Math.sin(m)*y,e.lineTo(v,w),m+=k,v=t.x+Math.cos(m)*g,w=t.y+Math.sin(m)*g,e.lineTo(v,w),m+=k;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(o)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function M(e,n){var s,o=!e,l=!!T(n||{},"resize"),u=!1,h=T(n,"disableForReducedMotion",Boolean),d=a&&!!T(n||{},"useWorker")?_():null,f=o?R:P,p=!(!e||!d)&&!!e.__confetti_initialized,m="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function g(t,n,a){for(var o=T(t,"particleCount",S),l=T(t,"angle",Number),u=T(t,"spread",Number),h=T(t,"startVelocity",Number),d=T(t,"decay",Number),p=T(t,"gravity",Number),m=T(t,"drift",Number),g=T(t,"colors",x),y=T(t,"ticks",Number),v=T(t,"shapes"),w=T(t,"scalar"),b=!!T(t,"flat"),_=function(e){var t=T(e,"origin",Object);return t.x=T(t,"x",Number),t.y=T(t,"y",Number),t}(t),I=o,A=[],N=e.width*_.x,R=e.height*_.y;I--;)A.push(D({x:N,y:R,angle:l,spread:u,startVelocity:h,color:g[I%g.length],shape:v[C(0,v.length)],ticks:y,decay:d,gravity:p,drift:m,scalar:w,flat:b}));return s?s.addFettis(A):(s=function(e,t,n,a,s){var o,l,u=t.slice(),h=e.getContext("2d"),d=c(function(t){function c(){o=l=null,h.clearRect(0,0,a.width,a.height),E.clear(),s(),t()}o=k.frame(function t(){!r||a.width===i.width&&a.height===i.height||(a.width=e.width=i.width,a.height=e.height=i.height),a.width||a.height||(n(e),a.width=e.width,a.height=e.height),h.clearRect(0,0,a.width,a.height),(u=u.filter(function(e){return O(h,e)})).length?o=k.frame(t):c()}),l=c});return{addFettis:function(e){return u=u.concat(e),d},canvas:e,promise:d,reset:function(){o&&k.cancel(o),l&&l()}}}(e,A,f,n,a),s.promise)}function y(n){var r=h||T(n,"disableForReducedMotion",Boolean),i=T(n,"zIndex",Number);if(r&&m)return c(function(e){e()});o&&s?e=s.canvas:o&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(i),document.body.appendChild(e)),l&&!p&&f(e);var a={width:e.width,height:e.height};function y(){if(d){var t={getBoundingClientRect:function(){if(!o)return e.getBoundingClientRect()}};return f(t),void d.postMessage({resize:{width:t.width,height:t.height}})}a.width=a.height=null}function v(){s=null,l&&(u=!1,t.removeEventListener("resize",y)),o&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,p=!1)}return d&&!p&&d.init(e),p=!0,d&&(e.__confetti_initialized=!0),l&&!u&&(u=!0,t.addEventListener("resize",y,!1)),d?d.fire(n,a,v):g(n,a,v)}return y.reset=function(){d&&d.reset(),s&&s.reset()},y}function L(){return b||(b=M(null,{useWorker:!0,resize:!0})),b}n.exports=function(){return L().apply(this,arguments)},n.exports.reset=function(){L().reset()},n.exports.create=M,n.exports.shapeFromPath=function(e){if(!s)throw new Error("path confetti are not supported in this browser");var t,n;"string"==typeof e?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement("canvas").getContext("2d");if(!n){for(var a,o,l=1e3,c=l,u=l,h=0,d=0,f=0;f<l;f+=2)for(var p=0;p<l;p+=2)i.isPointInPath(r,f,p,"nonzero")&&(c=Math.min(c,f),u=Math.min(u,p),h=Math.max(h,f),d=Math.max(d,p));a=h-c,o=d-u;var m=Math.min(10/a,10/o);n=[m,0,0,m,-Math.round(a/2+c)*m,-Math.round(o/2+u)*m]}return{type:"path",path:t,matrix:n}},n.exports.shapeFromText=function(e){var t,n=1,r="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof e?t=e:(t=e.text,n="scalar"in e?e.scalar:n,i="fontFamily"in e?e.fontFamily:i,r="color"in e?e.color:r);var a=10*n,s=a+"px "+i,o=new OffscreenCanvas(a,a),l=o.getContext("2d");l.font=s;var c=l.measureText(t),u=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),h=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),d=c.actualBoundingBoxLeft+2,f=c.actualBoundingBoxAscent+2;u+=4,h+=4,(l=(o=new OffscreenCanvas(u,h)).getContext("2d")).font=s,l.fillStyle=r,l.fillText(t,d,f);var p=1/n;return{type:"bitmap",bitmap:o.transferToImageBitmap(),matrix:[p,0,0,p,-u*p/2,-h*p/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),OA,!1);var MA=OA.exports;OA.exports.create;const LA=()=>{const{badges:e}=CA(),[t,n]=c.useState(null),[r,i]=c.useState(()=>new Set(e.filter(e=>e.unlocked).map(e=>e.id)));c.useEffect(()=>{const t=e.find(e=>e.unlocked&&!r.has(e.id));t&&(a(t),i(e=>new Set([...e,t.id])))},[e,r]);const a=e=>{n(e);const t=Date.now()+3e3,r={startVelocity:30,spread:360,ticks:60,zIndex:1e4},i=(e,t)=>Math.random()*(t-e)+e,a=setInterval(function(){const e=t-Date.now();if(e<=0)return clearInterval(a);const n=e/3e3*50;MA({...r,particleCount:n,origin:{x:i(.1,.3),y:Math.random()-.2}}),MA({...r,particleCount:n,origin:{x:i(.7,.9),y:Math.random()-.2}})},250);try{const e=new(window.AudioContext||window.webkitAudioContext),t=(t,n,r)=>{const i=e.createOscillator(),a=e.createGain();i.connect(a),a.connect(e.destination),i.type="sine",i.frequency.setValueAtTime(t,n),a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.15,n+.05),a.gain.exponentialRampToValueAtTime(.01,n+r),i.start(n),i.stop(n+r)},n=e.currentTime;t(523.25,n,.8),t(659.25,n+.1,.8),t(783.99,n+.2,.8),t(987.77,n+.3,.8),t(1046.5,n+.4,1.2)}catch(e){console.error("Audio failed",e)}setTimeout(()=>n(null),5e3)};return t?c.createElement("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,background:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(8px)",animation:"fadeIn 0.5s ease-out"}},c.createElement("div",{className:"glass-card",style:{padding:"3rem",textAlign:"center",background:"white",borderRadius:"40px",boxShadow:"0 40px 100px -20px rgba(0,0,0,0.2)",maxWidth:"400px",width:"90%",animation:"modalPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both"}},c.createElement("div",{style:{marginBottom:"1.5rem",display:"flex",justifyContent:"center"}},t.icon.length>2?c.createElement("img",{src:t.icon,alt:t.name,width:"120",height:"120",style:{width:"120px",height:"120px",objectFit:"contain",filter:"drop-shadow(0 10px 15px rgba(0,0,0,0.1))"}}):c.createElement("div",{style:{fontSize:"6rem",filter:"drop-shadow(0 10px 15px rgba(0,0,0,0.1))"}},t.icon)),c.createElement("h2",{style:{fontSize:"2.5rem",margin:"0 0 1rem",color:"var(--kids-blue)"}},"Badge Unlocked!"),c.createElement("h3",{style:{fontSize:"1.8rem",margin:"0 0 1rem",color:"var(--kids-dark)"}},t.name),c.createElement("p",{style:{fontSize:"1.2rem",color:"var(--kids-text-muted)",lineHeight:"1.5"}},t.description),c.createElement("button",{className:"kids-button",style:{marginTop:"2.5rem",width:"100%"},onClick:()=>n(null)},"Awesome! 🚀"))):null},FA=()=>{const[e,t]=c.useState(null),[n,r]=c.useState(!1),[i,a]=c.useState(!1);c.useEffect(()=>{const e=localStorage.getItem("kkids-install-dismissed");if(e){const t=parseInt(e,10);if(Date.now()-t<6048e5)return}if(window.matchMedia("(display-mode: standalone)").matches)return;const n=e=>{e.preventDefault(),t(e),r(!0)};window.addEventListener("beforeinstallprompt",n);const i=setTimeout(()=>{window.matchMedia("(display-mode: standalone)").matches||r(!0)},5e3);return()=>{window.removeEventListener("beforeinstallprompt",n),clearTimeout(i)}},[]);return n?c.createElement("div",{className:"install-banner "+(i?"dismissing":"")},c.createElement("div",{className:"install-banner-inner"},c.createElement("div",{className:"install-banner-icon"},c.createElement("img",{src:"/mascot.svg",alt:"Kone Kids",width:"48",height:"48"})),c.createElement("div",{className:"install-banner-text"},c.createElement("div",{className:"install-banner-title"},"Install Kone Kids"),c.createElement("div",{className:"install-banner-subtitle"},"Fun learning on your home screen!")),c.createElement("div",{className:"install-banner-actions"},c.createElement("button",{className:"install-btn",onClick:async()=>{if(e){e.prompt();const{outcome:n}=await e.userChoice;"accepted"===n&&r(!1),t(null)}else alert("To install Kone Kids:\n\n• Chrome/Edge: Click the install icon (⊕) in the address bar\n• Safari: Tap Share → Add to Home Screen")}},"Install"),c.createElement("button",{className:"install-dismiss",onClick:()=>{a(!0),localStorage.setItem("kkids-install-dismissed",Date.now().toString()),setTimeout(()=>r(!1),350)},"aria-label":"Dismiss"},"✕")))):null},UA=(...e)=>e.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim(),VA=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)};
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var zA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1},BA=c.createContext({}),WA=c.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:a,iconNode:s,...o},l)=>{const{size:u=24,strokeWidth:h=2,absoluteStrokeWidth:d=!1,color:f="currentColor",className:p=""}=c.useContext(BA)??{},m=r??d?24*Number(n??h)/Number(t??u):n??h;return c.createElement("svg",{ref:l,...zA,width:t??u??zA.width,height:t??u??zA.height,stroke:e??f,strokeWidth:m,className:UA("lucide",p,i),...!a&&!jA(o)&&{"aria-hidden":"true"},...o},[...s.map(([e,t])=>c.createElement(e,t)),...Array.isArray(a)?a:[a]])}),qA=(e,t)=>{const n=c.forwardRef(({className:n,...r},i)=>{return c.createElement(WA,{ref:i,iconNode:t,className:UA(`lucide-${a=VA(e),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...r});var a});return n.displayName=VA(e),n},HA=qA("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),KA=qA("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),$A=qA("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]),GA=qA("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]),QA=qA("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]),YA=qA("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]),JA=qA("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]),XA=qA("music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]),ZA=qA("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]),ex=qA("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),tx=qA("trophy",[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]]),nx=qA("volume-2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]),rx=qA("volume-x",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);function ix({badge:e,onClose:t}){const[n,r]=c.useState(!1);return c.useEffect(()=>{if(e){r(!0);const e=setTimeout(()=>{r(!1),setTimeout(t,500)},5e3);return()=>clearTimeout(e)}},[e,t]),e?c.createElement("div",{className:"badge-notification-container "+(n?"show":"hide")},c.createElement("div",{className:"badge-glow"}),c.createElement("div",{className:"badge-card glass-panel"},c.createElement("div",{className:"badge-icon-wrapper"},c.createElement("span",{className:"badge-emoji"},e.icon),c.createElement("div",{className:"sparkle-particles"},c.createElement(ZA,{className:"sparkle s1",size:12}),c.createElement(ZA,{className:"sparkle s2",size:16}),c.createElement(ZA,{className:"sparkle s3",size:14}))),c.createElement("div",{className:"badge-info"},c.createElement("div",{className:"badge-label"},c.createElement(tx,{size:14})," NEW BADGE UNLOCKED!"),c.createElement("h4",{className:"badge-name"},e.name),c.createElement("p",{className:"badge-desc"},e.description),e.xpReward&&c.createElement("div",{className:"badge-reward"},c.createElement(ex,{size:12,fill:"currentColor"})," +",e.xpReward," XP")))):null}const ax=[{id:"unlocking-hardware-microbit",title:"Unlocking Hands-On Hardware: Why the Micro:bit is the Ultimate Coding Companion for Kids",slug:"unlocking-hardware-microbit",summary:"Is screen-only coding enough? Discover how the pocket-sized BBC micro:bit bridges visual logic, electronics, and real-world problem-solving for children.",category:"Robotics & Science",publishDate:"June 21, 2026",readTime:"4 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"#06b6d4",coverGradient:"linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",content:[{type:"heading",content:"Beyond the Screen: The Power of Tangible Coding"},{type:"paragraph",content:"For many children, their first introduction to programming happens in a virtual environment like Scratch. They drag blocks to make characters move on a screen, which is a fantastic way to learn logic. However, there is a profound cognitive shift when coding steps off the screen and into the physical world. This is where the BBC micro:bit shines."},{type:"paragraph",content:"The BBC micro:bit is a pocket-sized computer designed specifically to teach kids coding and hardware engineering. By writing software that controls physical LEDs, buttons, and sensors, children transition from abstract screen commands to tangible real-world interactions."},{type:"quote",content:"Physical computing creates a dual feedback loop: children see their code run on the screen, but they also feel, touch, and hear the results in the real world."},{type:"heading",content:"The Science: Motivation and Self-Efficacy"},{type:"paragraph",content:"This isn't just about fun; it is backed by educational research. In their landmark study, \"Creating cool stuff – Pupils' experience of the BBC micro:bit\" (2017), Dr. Sue Sentance and her colleagues at the University of Cambridge investigated how the device affects children's learning. They discovered that the micro's physical \"tangibility\" and immediate sensory output drastically increased students' engagement and technological self-efficacy."},{type:"paragraph",content:"The ongoing EPICS (Exploring Physical Computing in Schools) longitudinal project (2024–2029) further investigates this impact, demonstrating that early exposure to physical microcontrollers nurtures long-term digital creativity and socio-technological agency. It gives children the confidence that they can build systems to solve real-world problems, rather than just consume pre-packaged technology."},{type:"list",content:"Built-in micro:bit features that make it a powerful learning sandbox:",items:["5x5 LED Grid: A simple display for showing letters, custom icons, animations, and game states.","Dual Tactile Buttons: Easy inputs for triggering actions, making interactive games, or controlling external devices.","Built-in Accelerometer & Compass: Sensors that detect motion, tilt, shake, and direction, allowing kids to code compasses and step-counters.","Radio & Bluetooth Communication: A wireless module that lets multiple micro:bits send messages to each other, introducing network logic."]},{type:"heading",content:"Collaborative Coding: Peer Networks and the Radio Module"},{type:"paragraph",content:"One of the most exciting aspects of the micro:bit is its built-in radio communication module. Unlike standard computers where students work in isolation, the micro:bit allows children to write programs that talk to other devices. Students can code local multiplayer games, build classroom voting systems, or design secret message broadcasters."},{type:"paragraph",content:'This aligns directly with the "Peers" pillar of the MIT Media Lab\'s "4 Ps of Creative Learning" framework (Mitchel Resnick, 2017). When children code together to make their devices interact, learning becomes a social, collaborative challenge that builds communication and teamwork alongside engineering skills.'},{type:"callout",content:"At Kone Kids, our Robotics & Science level integrates the micro:bit to bridge the gap between block-based logic and physical engineering. Our students build smart compasses, interactive step-counters, and wireless game controllers, directly satisfying practical NaCCA curriculum goals."},{type:"heading",content:"What Parents and Teachers Can Do"},{type:"paragraph",content:"Getting started with the micro:bit is incredibly easy. The web-based Microsoft MakeCode editor is completely free and allows children to program using visual blocks, JavaScript, or Python. Parents can encourage their children by asking them to build simple gadgets—like a bedroom door alarm using the light sensor, or a hot-potato game using the radio feature."}]},{id:"beyond-the-chalkboard",title:"Beyond the Chalkboard: Why Memorizing ICT is Holding Ghanaian Kids Back",slug:"beyond-the-chalkboard",summary:"Traditional BECE and WASSCE ICT prep relies heavily on drawing mouse icons and memorizing definitions. Let's explore why active creation is the modern standard.",category:"Coding & Logic",publishDate:"May 15, 2026",readTime:"4 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-orange)",coverGradient:"linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)",content:[{type:"heading",content:'The "Draw a Keyboard" Problem'},{type:"paragraph",content:'Walk into many classrooms across Ghana during an ICT lesson, and you will see children diligently drawing computer layouts, monitors, and floppy disks in their exercise books. They memorize definitions like "A computer is an electronic machine..." solely to pass their BECE or WASSCE examinations. Yet, when placed in front of a real computer, many cannot write a basic script, debug a simple program, or understand the logic that powers their favorite applications.'},{type:"paragraph",content:"This is the rote-memorization gap. Teaching technology theoretically is like teaching swimming on a chalkboard—it creates the illusion of knowledge without any functional capability. In their 2022 systematic analysis, researchers Anamuah-Mensah and Asabere documented this precise policy-implementation gap: while Ghana's curriculum mandates computational thinking, schools lack the practical platforms to implement it."},{type:"quote",content:"Teaching children to memorize ICT definitions without allowing them to build programs is like teaching swimming on a blackboard—they will sink the moment they touch the water."},{type:"heading",content:"Why Active Creation is the Superpower (The Science)"},{type:"paragraph",content:"Our methodology is directly guided by Seymour Papert's foundational theory of Constructionism (1980). Papert—a pioneer at MIT—established that children build mental models most effectively when they are actively designing, debugging, and building personally meaningful artifacts."},{type:"paragraph",content:"This isn't just educational theory; it is hard science. In a landmark 2022 controlled experiment conducted by Dr. Relkin and colleagues with elementary students, children participating in active visual programming showed a massive d = 0.67 effect size improvement in spatial logic, problem decomposition, and systematic troubleshooting over traditional control groups. Active creation builds a different, stronger brain."},{type:"list",content:"Core cognitive benefits:",items:["Computational Thinking: Breaking complex problems down into step-by-step logical instructions.","Resilience through Debugging: Learning that failure (a bug in the code) is not a dead-end, but a puzzle to analyze and solve.","Math in Action: Seeing abstract concepts like coordinates, angles, and variables come to life in a game simulator."]},{type:"callout",content:"At Kone Kids, we do not draw computers. We use them. Our students build fully interactive games, electronic hardware wiring, and train simple AI models from their very first week, directly satisfying practical NaCCA goals."},{type:"heading",content:"What Parents Can Do"},{type:"paragraph",content:"You do not need to be a software developer to guide your child. Focus on practical exposure. Give them tools that encourage logic rather than consumption, and look for structured, hands-on, after-school programs that align with modern international digital standards."}]},{id:"consumers-to-creators",title:"From Consumers to Creators: Guiding Your Child's Screen Time",slug:"consumers-to-creators",summary:"Is screen time always bad? Learn how to redirect your child's gaming hours into a lifetime engineering superpower.",category:"Parenting & Tech",publishDate:"May 10, 2026",readTime:"3 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-blue)",coverGradient:"linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",content:[{type:"heading",content:"The Parent's Dilemma: Screen Time"},{type:"paragraph",content:"Almost every parent in Accra or Tema shares the same struggle: keeping their children away from continuous, mindless gaming or watching endless YouTube videos. The natural response is to limit screen time completely. However, in a world driven by artificial intelligence and digital infrastructure, completely isolating children from screens can leave them digitally illiterate."},{type:"paragraph",content:"The solution is not banning screens. The solution is changing the nature of screen time from active consumption to creative engineering."},{type:"heading",content:"Consumption vs. Creation"},{type:"paragraph",content:"Consider the difference between playing a 2D game and coding it:"},{type:"list",content:"The shift in mindset:",items:["Playing: Mindless dopamine loops, passive clicking, and zero cognitive challenge.","Coding: Defining the gravity coefficient, scripting player jump velocity, handling obstacle collision coordinates, and designing custom reward systems."]},{type:"quote",content:"The moments a child realizes that they can make a character move, jump, and score points using rules they wrote is the moment they transition from a user to a builder."},{type:"heading",content:"Bridging the Block-to-Text Gap"},{type:"paragraph",content:'Many parents ask: "Once my child learns block-based coding, what is next?" This represents a critical inflection point in computing education. Leading STEM researcher David Weintrop (2017) discovered that when children transition from drag-and-drop blocks to professional text languages like Python, only 35% succeed without structured guidance; the rest drop out due to typing mistakes and syntax frustration.'},{type:"paragraph",content:"This is why Kone Academy built a custom 3-tiered pathway. In Level 1, we establish solid logic. In Level 2, we introduce microcontrollers (Arduino) programmed via a dual-pane editor that displays visual blocks next to C++ or Python code. Children see their edits in real-time, bridging the logic-to-syntax divide with zero frustration."}]},{id:"science-of-show-and-solve",title:'What is the "Show & Solve" Pedagogy? The Science of Kone Kids',slug:"science-of-show-and-solve",summary:"Rote-learning ruins critical thinking. Discover how our two-part scientific learning methodology builds independent engineers.",category:"Coding & Logic",publishDate:"May 05, 2026",readTime:"5 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-purple)",coverGradient:"linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)",content:[{type:"heading",content:'The Problem with "Copy-Paste" Tutorials'},{type:"paragraph",content:"Many online coding platforms or school clubs teach kids by having them copy-paste code lines directly from a projector or video. The student ends up with a working project, but they have absolutely no idea how it works. The second they are asked to make a tiny change on their own, they freeze."},{type:"paragraph",content:'This is the "tutorial trap." It mimics success but stunts the development of actual critical thinking. To build real programmers, we must teach children how to analyze and solve problems independently.'},{type:"heading",content:"Our Two-Part Learning Engine (ZPD)"},{type:"paragraph",content:'The "Show & Solve" pedagogy of Kone Kids is heavily grounded in Lev Vygotsky\'s celebrated educational theory of the Zone of Proximal Development (ZPD) and modern active learning frameworks (Bonwell & Eison, 1991). We provide initial scaffolded structure, then dynamically fade that support to prompt self-directed debugging.'},{type:"heading",content:'Part 1: The Guided Walkthrough ("Show & Model")'},{type:"paragraph",content:'The instructor explains the core engineering concept (e.g. gravity, loops, or ultrasonic feedback). Together with the students, they code the foundational structure live, explaining the "why" behind every step. This provides a safe, solid architecture and scaffolding.'},{type:"heading",content:'Part 2: The Independent Challenge ("Analyze & Solve")'},{type:"paragraph",content:"This is where real learning happens. Once the foundation is built, the safety wheels are taken off. Students are presented with an independent coding mission. They must debug errors, design logic rules, and complete the challenge on their own with little-to-no guidance."},{type:"quote",content:"Critical thinking isn't built by successfully copying instructions. It is built in the struggle of debugging an error and finding the elegant path independently."},{type:"callout",content:"This two-part balance builds resilience, real logical troubleshooting skills, and an incredible sense of confidence when their code finally runs successfully!"}]},{id:"girls-in-tech-ghana",title:"Empowering the Next Generation of Ghanaian Girls in Tech",slug:"girls-in-tech-ghana",summary:"Gender stereotypes in engineering set in as early as age 6. Discover how structured, early CS interventions can bridge the divide.",category:"Parenting & Tech",publishDate:"April 28, 2026",readTime:"4 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"#ec4899",coverGradient:"linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",content:[{type:"heading",content:"The Gender Gap in West African Tech"},{type:"paragraph",content:"Across Sub-Saharan Africa, women represent less than 30% of professional software developers, data scientists, and systems engineers. While policies exist to encourage girls in ICT, the structural foundation must be built much earlier. Scientific reviews by leading researchers like Jane Margolis (2023) show that social biases regarding computing aptitude take root in children's minds by the time they reach six years old."},{type:"paragraph",content:"This early perception creates a confidence barrier. If girls do not encounter active computing before junior high school, they are far more likely to self-select out of STEM pathways."},{type:"quote",content:"If we do not actively show girls that they are creator-architects of technology in primary school, they grow up believing coding is a consumption tool made by others, rather than an engineering superpower they control."},{type:"heading",content:"Developing Self-Efficacy Early (Master et al., 2017)"},{type:"paragraph",content:"How do we solve this? Research by Dr. Allison Master and colleagues (2017) proves that early, scaffolded hands-on coding interventions completely erase the confidence gap. When primary school girls are given structured visual block challenges where they design their own games and virtual assets, their self-efficacy scores match or exceed their male peers."},{type:"paragraph",content:"At Kone Kids, our platform is designed from the ground up for inclusion. Rather than purely competitive logic speedruns, we focus on collaborative, creative story-crafting, mascot personalization, and real-world problem solving."},{type:"list",content:"Our core inclusion guidelines:",items:["Design-Based Play: Coding through personal creative expression and character design.","Collaborative Pair Coding: Designing systems in teams to build peer self-efficacy.","Visible Role Models: Celebrating female engineers and localized Ghanaian tech leaders."]},{type:"callout",content:"Nurturing girls in tech is not just about fairness—it is about economic capacity. Our private home trials and school partnerships actively target a 50/50 gender balance to cultivate Ghana's complete talent pool."}]},{id:"demystifying-ai-five-ideas",title:'Demystifying AI: The "Five Big Ideas" Every Parent Should Know',slug:"demystifying-ai-five-ideas",summary:"AI is changing the global economy. Explore the five core Machine Learning pillars that will define your child's future.",category:"Parenting & Tech",publishDate:"April 20, 2026",readTime:"5 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-emerald)",coverGradient:"linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",content:[{type:"heading",content:"The Machine Learning Shift"},{type:"paragraph",content:"For decades, computers only executed instructions explicitly typed by a human coder. Today, the world runs on Artificial Intelligence—systems that do not wait for explicit instructions, but instead analyze huge datasets to recognize patterns and make decisions autonomously. For our children, AI literacy is not an elective skill; it is a fundamental survival literacy."},{type:"paragraph",content:'To guide early AI education, the international AI4K12 initiative led by Dr. Touretzky formulated the "Five Big Ideas in AI" framework (2019). Here is how Kone Academy translates these five principles for young Ghanaian minds:'},{type:"heading",content:"1. Perception (Sensors and Inputs)"},{type:"paragraph",content:"Computers perceive the world through sensors. Just as human eyes and ears process light and sound, computer cameras, microphones, and ultrasonic sensors gather raw sensory datasets to understand environments in real-time."},{type:"heading",content:"2. Representation & Reasoning"},{type:"paragraph",content:'AI models construct internal mathematical "maps" of information. Our students learn how AI maps logical paths, handles decisions in networks, and constructs reasoning trees to navigate virtual game mazes.'},{type:"heading",content:"3. Learning from Data (Machine Learning)"},{type:"paragraph",content:"This is the core shift. Students train their first edge-based Machine Learning models locally. They capture images of local cocoa pods, differentiate between healthy and infected pods, and watch how the computer adjusts its classification weight parameters based on training datasets."},{type:"heading",content:"4. Natural Interaction"},{type:"paragraph",content:"AI systems must interact naturally with humans, utilizing Natural Language Processing (NLP). We show children how smart chatbots process text commands, and explore how AI handles local Ghanaian accents and dialects."},{type:"heading",content:"5. Societal Impact & Algorithmic Ethics"},{type:"paragraph",content:"Citing recent ethical reviews by Perrotti & Howard (2023), early AI education must train children to critique algorithm design. We discuss dataset representation bias: if a model is trained only on pictures of Western houses, why will it fail to recognize a traditional Ghanaian compound house?"},{type:"quote",content:"We do not want West African youth to just be passive consumers of Western-trained AI systems. We want them to code, train, and critique these models to solve local socio-economic challenges."}]},{id:"robotics-agriculture-cocoa-farms",title:"Robotics in Agriculture: How Coding Cocoa Farms Builds Real Engineers",slug:"robotics-agriculture-cocoa-farms",summary:"Why abstract coding is not enough. Explore how sensory physical computing connects math to local Ghanaian industries.",category:"Robotics & Science",publishDate:"April 12, 2026",readTime:"5 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-purple)",coverGradient:"linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",content:[{type:"heading",content:"The Danger of Screen-Only STEM"},{type:"paragraph",content:"While visual software coding is a phenomenal starting point, true engineering happens when code meets the physical world. In educational technology, this is known as Tangible Programming. Foundational studies by Stanford researcher Paulo Blikstein (2013) demonstrate that physical computing—wiring real sensors, reading voltage shifts, and driving physical motors—develops far deeper cognitive links to mathematics and physics than screen-based code alone."},{type:"paragraph",content:"When a child programs a visual circle to bounce, it is an abstract exercise. When they wire an ultrasonic sensor to a physical vehicle and write a loop that brakes the motor three centimeters before it hits a concrete wall, they are solving real-world physical and mechanics equations."},{type:"heading",content:"The Localized Cocoa Farm Project"},{type:"paragraph",content:"To make this tangible, our Level 2 (Robotics & Physical Computing) students build functional smart-agricultural systems using microcontrollers (Arduino) and environmental feedback sensors."},{type:"paragraph",content:"For example, children construct automated soil-hydration sensors designed for cocoa seedling nursery farms. They wire capacitive moisture probes into local soil, connect them to analog input pins, and program a logic system that triggers an irrigation solenoid valve whenever moisture drops below a defined threshold."},{type:"quote",content:"Connecting a simple `if/else` conditional statement to a physical water pump that rescues a cocoa seedling connects abstract logic to the backbone of Ghana's agricultural economy."},{type:"heading",content:"Why Contextual Learning Accelerates Retention (Ali et al., 2022)"},{type:"paragraph",content:"STEM education research consistently shows that context-adapted learning significantly improves retention and academic motivation. When Ghanaian students see that their technology skills can build automated smart-farming tools, home security alarms, and street safety sensors for their local community in Accra, they cease to view computer science as a distant Western import. They see it as a powerful local tool for innovation."},{type:"callout",content:"At Kone Kids, our mission is to build practical builders. By integrating environmental physical computing, we prepare West African kids for high-impact careers in robotics, automation, and data engineering."}]},{id:"coding-as-new-literacy",title:"Learning to Code is Learning to Write: Programming as Your Child's Next Language",slug:"coding-as-new-literacy",summary:"Coding is not just about math or science. Discover why early programming is a modern form of writing, self-expression, and creative storytelling.",category:"Coding & Logic",publishDate:"April 05, 2026",readTime:"4 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-orange)",coverGradient:"linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",content:[{type:"heading",content:"A New Way of Speaking"},{type:"paragraph",content:"When we teach children how to read and write English, Ga, Ewe, or Twi, we are not preparing them all to become professional novelists or spelling-bee champions. We teach them to write because it is a fundamental tool for expressing thoughts, sharing ideas, and interacting with the world. Early computer programming is no different. It is not just a tool for future software developers; it is a new literacy of personal expression."},{type:"paragraph",content:'In her seminal work, Dr. Marina Umaschi Bers (2018), founder of the DevTech Research Group, introduces the concept of the Digital Playground. Bers proves that coding environments should not be clinical, restrictive "playpens" where children just click rigid buttons. Instead, they must be active "playgrounds" where kids write programs to share stories, make digital art, and voice their personal creations.'},{type:"quote",content:"Coding is not just about math or technology. It is a new form of writing that allows children to organize their thoughts, tell stories, and shape their world."},{type:"heading",content:"The 4 Ps of Creative Coding (MIT Framework)"},{type:"paragraph",content:'How do we nurture this literacy? The Lifelong Kindergarten group at the MIT Media Lab, led by Scratch creator Mitchel Resnick (2017), formulated the "4 Ps of Creative Learning" framework. At Kone Kids, we align our entire Level 1 curriculum directly with these four principles:'},{type:"list",content:"The 4 Ps in action:",items:["Projects: Children do not learn by doing isolated drills. They learn by building complete projects—like designing an interactive animated story or a custom game.","Passion: When kids work on things they care about—like creating their own virtual custom mascot—they invest far more cognitive focus and persist through challenges.","Peers: Coding is highly social. Our students share their projects, debug each other's code, and learn from their classmates' creative approaches.",'Play: We treat coding as a playful sandbox. There are no "punishing mistakes"—only bugs that are fun to trace, analyze, and solve.']},{type:"heading",content:"The Science: Easing the Cognitive Path (Sweller, 1988)"},{type:"paragraph",content:"For a young child, typing raw text like `print(\"Hello World\")` is extremely frustrating because of a single missing parenthesis. John Sweller's Cognitive Load Theory (1988) explains that when a child's working memory is overwhelmed by spelling syntax, their ability to learn logical concepts drops to zero."},{type:"paragraph",content:"This is why our Level 1 Coding pathway uses visual blocks first. By removing the friction of typing errors, we free up their working memory to focus purely on logical patterns, sequential constraints, loops, and spatial reasoning. Once these concepts are locked in, transitioning to text code becomes a natural, joyful next step."},{type:"callout",content:"By framing coding as a creative language rather than a math class, we make digital literacy accessible, exciting, and deeply empowering for every Ghanaian child."}]},{id:"best-coding-platforms-kids",title:"The Best 10 Coding Platforms for Kids: A Scientist's Guide for Parents",slug:"best-coding-platforms-kids",summary:"Hundreds of coding websites exist for kids. Explore the top 10 scientifically vetted, creative programming platforms and how to choose the right one.",category:"Coding & Logic",publishDate:"March 28, 2026",readTime:"6 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨•🏫"},accentColor:"var(--kids-purple)",coverGradient:"linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",content:[{type:"heading",content:"The Paradox of Choice in EdTech"},{type:"paragraph",content:'Search "coding for kids" on the internet, and you will be overwhelmed by hundreds of colorful platforms promising to turn your child into the next tech prodigy overnight. As parents, how do we cut through the marketing noise? Educational research proves that not all coding tools are created equal. Some isolate children in rigid "click-to-pass" puzzles, while others foster open-ended logical creation. Let\'s explore the top 10 scientifically vetted environments, organized by age group.'},{type:"heading",content:"Early Learners (Ages 5–7): Building Foundational Logic"},{type:"paragraph",content:"At this stage, the focus is on computational thinking—sequences, loops, and spatial patterning—without requiring advanced reading or typing skills."},{type:"heading",content:'1. <a href="https://www.scratchjr.org/" target="_blank" rel="noopener noreferrer" class="blog-content-link">ScratchJr</a> (Tufts & MIT)'},{type:"paragraph",content:"ScratchJr is the gold standard tablet app for young pre-readers. Grounded in Dr. Marina Bers's research on early childhood developmental milestones, ScratchJr uses symbolic visual blocks that children snap together to make characters move, dance, and speak. It turns screen time into an active, logic-based playground."},{type:"heading",content:'2. <a href="https://codespark.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">CodeSpark Academy</a>'},{type:"paragraph",content:'Designed as a highly engaging gamified playground, CodeSpark teaches the "ABCs of computer science" entirely without words. Through cute character puzzles, children learn core sequences, loops, and conditional mapping, earning virtual coins as they debug logical pathways.'},{type:"heading",content:"Intermediate Creators (Ages 8–12): Moving from Blocks to Scripts"},{type:"paragraph",content:"For primary school students, these platforms introduce structured logic, event-driven loops, and serve as an active bridge to syntax languages."},{type:"heading",content:'3. <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Scratch</a> (MIT Media Lab)'},{type:"paragraph",content:"Scratch is the world's largest visual block-based coding platform. Developed by Scratch creator Mitchel Resnick, it allows children to design fully interactive 2D games, animations, and stories. The strong community aspect lets children share, review, and \"remix\" each other's code in a highly collaborative peer environment."},{type:"heading",content:'4. <a href="https://code.org/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Code.org</a>'},{type:"paragraph",content:"A premier non-profit visual computer science curriculum. Code.org offers structured, step-by-step puzzles themed around popular worlds like Minecraft and Star Wars. It is highly school-friendly and perfectly satisfies global standards-based curriculum goals."},{type:"heading",content:'5. <a href="https://www.tynker.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Tynker</a>'},{type:"paragraph",content:"A highly polished curriculum that guides students through game design, animation, and Minecraft modding. Tynker allows children to start with drag-and-drop block coding and smoothly transitions them into writing raw JavaScript and Python script within a supportive interface."},{type:"heading",content:'6. <a href="https://www.codemonkey.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">CodeMonkey</a>'},{type:"paragraph",content:"A brilliant, game-based learning platform where kids write real code to solve puzzles and guide a monkey to collect bananas. Instead of blocks, children type simplified text code (CoffeeScript/Python), building syntax familiarity in a fun, self-paced environment."},{type:"heading",content:"Advanced & Hardware Sandbox (Ages 11+): Real-World Engineering"},{type:"paragraph",content:"For older children ready to tackle text languages, physical engineering logic, or professional game development."},{type:"heading",content:'7. <a href="https://www.tinkercad.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Tinkercad</a> (Autodesk)'},{type:"paragraph",content:"Tinkercad is a free, web-based tool for 3D spatial design and electronic circuit simulation. Children can wire up virtual microcontrollers (Arduino), breadboards, and sensors, programming them with visual blocks or text. It is the ultimate sandbox for teaching physical electronics safety."},{type:"heading",content:'8. <a href="https://www.microsoft.com/en-us/makecode" target="_blank" rel="noopener noreferrer" class="blog-content-link">Microsoft MakeCode</a> & Minecraft'},{type:"paragraph",content:"Linking block coding directly to Microsoft Minecraft Education, MakeCode allows students to script their own 3D virtual sandbox. Kids immediately see abstract concepts like variables, nested loops, and 3D coordinate geometry come to life as they code systems to build castles instantly."},{type:"heading",content:'9. <a href="https://www.apple.com/swift/playgrounds/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Swift Playgrounds</a> (Apple)'},{type:"paragraph",content:"Swift Playgrounds teaches Apple's professional Swift coding language through gorgeous, interactive 3D puzzles on iPad and Mac. It is highly tactile, visual, and helps children transition into genuine mobile app development."},{type:"heading",content:'10. <a href="https://replit.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Replit</a> (with AI Tutor) & <a href="https://unity.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Unity</a>'},{type:"paragraph",content:"For teens ready for professional coding, Replit is a powerful web-based IDE that supports Python, HTML/CSS, and JavaScript. Its modern AI assistant acts as a patient, 1-on-1 coding tutor, explaining syntax errors in plain English. For advanced 3D game creation, Unity remains the industry-standard C# platform."},{type:"heading",content:'Bonus Platform: <a href="/coding" class="blog-content-link">The Kone Kids IDE</a>'},{type:"paragraph",content:'Specifically customized for our local students in Ghana, the Kone Kids workspace displays visual blocks in one pane and the corresponding C++ or Python code in a side-by-side pane. As children build logic using blocks, they watch the raw text code morph in real-time, eliminating the "syntax transition gap" identified in David Weintrop\'s (2017) research. It acts as the perfect localized capstone to tie all these platforms together.'},{type:"quote",content:"The best coding platform is not the one with the flashiest graphics, but the one that shifts your child from a passive consumer into an active, creative problem-solver."},{type:"heading",content:"How to Choose: The Scientific Criteria"},{type:"paragraph",content:"When choosing a coding platform for your child, look for three core criteria verified by John Hattie's meta-analysis of active learning (d = 0.50+ effect size):"},{type:"list",content:"The 3 key criteria:",items:["Low Floor, High Ceiling: The tool should be easy for a beginner to start (low floor) but capable of complex, unrestricted creations as they grow (high ceiling).","Wide Walls: The environment should support many different types of projects—not just games, but storytelling, art, and music to accommodate diverse student interests.","Clear Feedback Loops: The platform must execute code instantly so children can debug errors and analyze their logic in real-time."]},{type:"callout",content:"At Kone Kids, our personalized 1-on-1 home tutoring and interactive school labs guide children through these vetted platforms. We match the perfect tool to your child's age, interests, and learning style to cultivate real lifelong engineering capability."}]},{id:"mobile-app-development-kids",title:"Mobile App Development for Kids: From Idea to App Store",slug:"mobile-app-development-kids",summary:"Can kids build actual mobile apps that run on phones? Discover the tools, step-by-step roadmap, and why building apps turns kids into real-world problem solvers.",category:"Coding & Logic",publishDate:"May 19, 2026",readTime:"5 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-orange)",coverGradient:"linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)",content:[{type:"heading",content:"The Shift: From Passive Users to Mobile Creators"},{type:"paragraph",content:"From the moment a toddler swipes on an iPad to play games or watch videos, their relationship with mobile apps begins. But there is a massive cognitive difference between opening an app that someone else built and developing one yourself. Mobile app development is the ultimate synthesis of creativity, logic, visual design, and user experience (UX) for children."},{type:"paragraph",content:"In standard computer science education, abstract coding exercises (like sorting lists or basic math loops) can sometimes feel dry. Building a mobile app changes everything: kids can immediately install their creation on their parent's smartphone, demo it to their friends at school, and solve actual, tangible problems in their home communities."},{type:"quote",content:"When a child builds a mobile app, they realize they aren't just playing in a digital sandbox—they are building tools that go straight into people's pockets."},{type:"heading",content:"Why Mobile Development is the Ultimate STEM Builder"},{type:"paragraph",content:"Mobile development introduces children to systems-level thinking. To build a functional app, a student must master three core components that parallel professional software engineering:"},{type:"list",content:"The three dimensions of app creation:",items:["UI/UX Design (User Interface & Experience): Designing screen layouts, coordinating color palettes, and mapping out the intuitive flow of button clicks.","Event-Driven Logic: Coding the behavior—defining what happens exactly when a user swipes, shakes the phone, presses a button, or takes a photo.","Data Storage: Setting up local databases to store user high scores, profiles, or shopping lists across app launches."]},{type:"heading",content:"Vetted Tools: How Kids Build Apps Without Syntax Frustration"},{type:"paragraph",content:"In educational technology, forcing a 10-year-old to write lines of raw Java or Swift code is a recipe for dropout. Visual block-based mobile app builders allow children to focus on spatial structure and logic without typing mistakes."},{type:"paragraph",content:"1. MIT App Inventor: Developed by the Massachusetts Institute of Technology, this is the gold standard for teaching visual Android app creation. Kids drag-and-drop buttons, maps, text-to-speech engines, and accelerometers, then program them using visual blocks."},{type:"paragraph",content:"2. Thunkable: A modern, highly polished cross-platform builder that compiles native Android and iOS apps. It supports beautiful modern layouts and integrates easily with external APIs, maps, and databases."},{type:"paragraph",content:"3. Swift Playgrounds: For children interested in Apple's ecosystem, Swift Playgrounds guides kids through coding native iPad/Mac apps using professional Swift code inside an interactive 3D playground."},{type:"heading",content:"The 4-Step App Creation Roadmap for Kids"},{type:"paragraph",content:"At Kone Kids, our app development pathway guides children through a structured, 4-step professional pipeline:"},{type:"list",content:"The App Creation Pipeline:",items:["Phase 1: Brainstorming & User Wireframing. Kids map out who the app is for and draw simple sketches of each screen on paper.","Phase 2: Visual UI Layout. Dragging visual components (text inputs, images, charts) onto a mock screen canvas.",'Phase 3: Coding the Logic. Snapping code blocks together to handle events (e.g., "When the user shakes the phone, speak the translation out loud").',"Phase 4: Multi-device Testing & Sharing. Installing the app via QR codes to test on real hardware, and debugging on the fly."]},{type:"callout",content:"Our Ghanaian students connect their app projects directly to local issues: from building simple automated English-to-Twi translator apps for their grandparents, to design-mocking smart shop billing trackers for local neighborhood table stores."},{type:"heading",content:"What Parents Can Do to Start the Journey"},{type:"paragraph",content:'Encourage your child to look at the apps on their phone with analytical eyes. Ask questions like: "Why is that button placed there?" or "What do you think happens behind the scenes when you tap this search bar?". Partner with structured, project-based afterschool centers like Kone Kids to turn their creative app ideas into actual running software.'}]}],sx={title:"Kone Kids | Playful AI & Coding STEM Hub",description:"Empowering kids aged 5-17 to learn coding, robotics, and artificial intelligence through hands-on gamified missions.",keywords:"Kone Kids, child coding, STEM for kids, kids AI school, robotics for kids, Accra coding classes",schema:{"@context":"https://schema.org","@type":"WebSite",name:"Kone Kids Hub",url:"https://kids.koneacademy.io/",parentOrganization:{"@type":"Organization",name:"Kone Academy",url:"https://www.koneacademy.io/"}}},ox={"/":sx,"/class-login":{title:"Class Login | Enter the Mission Map - Kone Kids",description:"Log in to your student account at Kone Kids. Connect with your class, track your badges, and continue your programming missions.",keywords:"student login, kids coding login, classroom tracker, student dashboard"},"/blog":{title:"Parent Hub & STEM Insights | Kone Kids Blog",description:"Resources, guides, and insights for parents raising tomorrow's tech innovators. Learn how to foster STEM literacy at home.",keywords:"parent STEM guides, raise tech kids, EdTech insights, coding education parents"},"/coding":{title:"Coding Missions Map | Learn Scratch & Python - Kone Kids",description:"Interactive learning pathway teaching block-based coding, HTML/CSS, and Python to young coders.",keywords:"coding for kids, learn Scratch, Scratch games, kids Python course"},"/robotics":{title:"Robotics Sandbox | Telemetry & Electronics - Kone Kids",description:"Virtual and hands-on robotics labs teaching microcontrollers, circuit design, and Arduino coding.",keywords:"robotics lab, kids Arduino, electronics for kids, virtual robots simulation"},"/ai":{title:"AI & Machine Learning Studio for Youth - Kone Kids",description:"Learn how artificial intelligence works by training custom models, classifying images, and coding neural networks.",keywords:"AI for kids, train machine learning, kids neural network, AI foundation school"}},lx=()=>{const e=gu(),t=wu();return c.useEffect(()=>{let n=sx;const r=e.pathname;if(ox[r])n=ox[r];else if(r.startsWith("/blog/")){const e=t.id,r=ax.find(t=>t.slug===e);n=r?{title:`${r.title} | Kone Kids Parent Hub`,description:r.summary,keywords:`STEM learning, tech kids education, learning tutorials, ${r.category.toLowerCase()}`,schema:{"@context":"https://schema.org","@type":"BlogPosting",headline:r.title,description:r.summary,datePublished:r.publishDate,author:{"@type":"Person",name:r.author.name,jobTitle:r.author.role,sameAs:["https://www.linkedin.com/in/philip-kone-hotor/"]},publisher:{"@type":"Organization",name:"Kone Academy",url:"https://www.koneacademy.io/",sameAs:["https://www.linkedin.com/company/konecodeacdemy/","https://www.facebook.com/profile.php?id=61584327765846","https://www.instagram.com/koneacademy","https://x.com/koneacademy","https://www.tiktok.com/@koneacademy","https://youtube.com/@koneacademy"]},mainEntityOfPage:{"@type":"WebPage","@id":`https://kids.koneacademy.io/blog/${r.slug}`}}}:{title:"STEM Article | Kone Kids Parent Hub",description:"Read our latest article on nurturing coding and robotics skills in youth.",keywords:"STEM learning, tech kids education, learning tutorials"}}document.title=n.title;const i=(e,t,n=!1)=>{const r=n?"property":"name";let i=document.querySelector(`meta[${r}="${e}"]`);i||(i=document.createElement("meta"),i.setAttribute(r,e),document.head.appendChild(i)),i.setAttribute("content",t)};i("description",n.description),i("keywords",n.keywords),i("og:title",n.title,!0),i("og:description",n.description,!0),i("og:url",`https://kids.koneacademy.io${e.pathname}`,!0),i("twitter:title",n.title),i("twitter:description",n.description);let a=document.querySelector('link[rel="canonical"]');a||(a=document.createElement("link"),a.setAttribute("rel","canonical"),document.head.appendChild(a)),a.setAttribute("href",`https://kids.koneacademy.io${e.pathname}`);const s="seo-dynamic-jsonld";let o=document.getElementById(s);o&&o.remove(),n.schema&&(o=document.createElement("script"),o.id=s,o.setAttribute("type","application/ld+json"),o.innerHTML=JSON.stringify(n.schema),document.head.appendChild(o))},[e,t]),null};const cx=new class{constructor(){this.ctx=null,this.musicInterval=null,this.isMuted=!1,this.isMusicOn=!1,this.currentStep=0;try{const e=localStorage.getItem("kone_kids_muted");this.isMuted="true"===e;const t=localStorage.getItem("kone_kids_music_on");this.isMusicOn="true"===t}catch(e){this.isMuted=!1,this.isMusicOn=!1}}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),"suspended"===this.ctx.state&&this.ctx.resume(),!this.isMusicOn||this.isMuted||this.musicInterval||this.startSequencer()}resumeAudio(){this.init(),this.ctx&&"suspended"===this.ctx.state&&this.ctx.resume(),!this.isMusicOn||this.isMuted||this.musicInterval||this.startSequencer()}getMuted(){return this.isMuted}getMusicOn(){return this.isMusicOn}toggleMute(){this.isMuted=!this.isMuted;try{localStorage.setItem("kone_kids_muted",this.isMuted.toString())}catch(e){}return this.isMuted?(this.stopSequencer(),this.ctx&&"suspended"!==this.ctx.state&&this.ctx.suspend()):(this.init(),this.isMusicOn&&this.startSequencer()),this.isMuted}toggleMusic(){this.isMusicOn=!this.isMusicOn;try{localStorage.setItem("kone_kids_music_on",this.isMusicOn.toString())}catch(e){}return this.isMusicOn&&!this.isMuted?(this.init(),this.startSequencer()):this.stopSequencer(),this.isMusicOn}playClick(){if(this.isMuted)return;if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.1),t.gain.setValueAtTime(.08,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.1),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.1)}playSuccess(){if(this.isMuted)return;if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(400,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1e3,this.ctx.currentTime+.2),t.gain.setValueAtTime(.08,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.2),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.2)}playWin(){if(this.isMuted)return;if(this.init(),!this.ctx)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{const r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(t,e+.1*n),i.gain.setValueAtTime(.08,e+.1*n),i.gain.exponentialRampToValueAtTime(.001,e+.1*n+.3),r.connect(i),i.connect(this.ctx.destination),r.start(e+.1*n),r.stop(e+.1*n+.3)})}startSequencer(){if(!this.ctx||this.musicInterval)return;this.currentStep=0;this.musicInterval=setInterval(()=>{if(this.isMuted||!this.isMusicOn||!this.ctx)return;if("suspended"===this.ctx.state)return;const e=this.ctx.currentTime,t=this.currentStep%8,n=t<4,r=n?130.81:87.31,i=n?[261.63,329.63,392,493.88]:[349.23,440,523.25,659.25];if(0===t||4===t){const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(r,e),n.gain.setValueAtTime(.03,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.54),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.54)}if(2===t||6===t){const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(7e3,e),n.gain.setValueAtTime(.01,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.05),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.06)}if(t%2==1){const t=i[Math.floor(Math.random()*i.length)],n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(t,e),r.gain.setValueAtTime(.01,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.36),n.connect(r),r.connect(this.ctx.destination),n.start(e),n.stop(e+.36)}this.currentStep++},300)}stopSequencer(){this.musicInterval&&(clearInterval(this.musicInterval),this.musicInterval=null)}},ux=c.lazy(()=>import("./ProgramDetails.ca2a6d5b.js")),hx=c.lazy(()=>import("./EnrollmentModal.52523941.js")),dx=c.lazy(()=>import("./BadgeTray.a1b2413e.js")),fx=c.lazy(()=>import("./MissionMap.e7d77482.js")),px=c.lazy(()=>import("./Blog.b99a6b28.js")),mx=c.lazy(()=>import("./ArticleReader.a4517d88.js")),gx=c.lazy(()=>import("./ClassLogin.cd894bd8.js")),yx=c.lazy(()=>import("./TeacherDashboard.15eca278.js"));function vx(){const[e,t]=c.useState(!1),{studentName:n,logoutStudent:r}=CA(),[i,a]=c.useState(cx.getMuted()),[s,o]=c.useState(cx.getMusicOn());return c.createElement("div",{className:"kids-app"},e&&c.createElement(hx,{isOpen:e,onClose:()=>t(!1)}),c.createElement("nav",{className:"kids-nav-bar",style:{padding:"1rem 5%",display:"flex",justifyContent:"space-between",alignItems:"center",background:"var(--nav-bg)",backdropFilter:"blur(8px)",position:"sticky",top:0,zIndex:100,borderBottom:"1px solid var(--nav-border)"}},c.createElement(zu,{to:"/",className:"kids-nav-logo-text",style:{fontFamily:"'Baloo 2', cursive",fontWeight:800,fontSize:"1.4rem",color:"var(--nav-text)",textDecoration:"none",display:"flex",alignItems:"center",gap:"0.4rem"}},c.createElement("img",{className:"kids-nav-logo-img",src:"/mascot.svg",alt:"Kone Kids Logo",width:"24",height:"24",style:{height:"24px",width:"auto"}})," Kone Kids"),c.createElement("div",{className:"nav-links-container",style:{display:"flex",alignItems:"center",gap:"1.5rem"}},c.createElement("div",{style:{display:"flex",gap:"0.4rem",alignItems:"center"}},c.createElement("button",{onClick:()=>{const e=cx.toggleMusic();o(e),cx.playClick()},title:s?"Mute Music":"Play Background Music",style:{background:s?"rgba(168, 85, 247, 0.15)":"rgba(255, 255, 255, 0.05)",border:"none",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:s?"#c084fc":"#94a3b8",transition:"all 0.2s",outline:"none"}},c.createElement(XA,{size:18})),c.createElement("button",{onClick:()=>{const e=cx.toggleMute();a(e),cx.playClick()},title:i?"Unmute Sound FX":"Mute Sound FX",style:{background:i?"rgba(255, 255, 255, 0.05)":"rgba(14, 165, 233, 0.15)",border:"none",borderRadius:"50%",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:i?"#94a3b8":"#38bdf8",transition:"all 0.2s",outline:"none"}},i?c.createElement(rx,{size:18}):c.createElement(nx,{size:18}))),n?c.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"}},c.createElement("span",{style:{fontFamily:"'Baloo 2', cursive",fontWeight:800,color:"var(--kids-blue)",background:"rgba(14, 165, 233, 0.1)",padding:"0.35rem 0.85rem",borderRadius:"12px",fontSize:"0.9rem"}},"🎒 ",n.split(" ")[0]),c.createElement("button",{onClick:r,style:{background:"none",border:"none",color:"#ef4444",fontFamily:"'Baloo 2', cursive",fontWeight:800,fontSize:"0.9rem",cursor:"pointer"}},"Logout")):c.createElement(zu,{to:"/class-login",style:{fontFamily:"'Baloo 2', cursive",color:"var(--kids-orange)",textDecoration:"none",fontWeight:800,fontSize:"1rem",transition:"color 0.2s"},className:"hover-orange"},"Class Login 🎒"),c.createElement(zu,{to:"/blog",style:{fontFamily:"'Baloo 2', cursive",color:"var(--nav-link)",textDecoration:"none",fontWeight:800,fontSize:"1rem",transition:"color 0.2s"},className:"hover-teal nav-link-desktop"},"Parent Hub"),!n&&c.createElement("button",{className:"kids-button",onClick:()=>t(!0),style:{padding:"0.45rem 1.1rem",fontSize:"0.85rem"}},"Join Hub"))),c.createElement("main",{id:"main-content"},c.createElement("header",{className:"section-padding"},c.createElement("div",{className:"container hero-grid"},c.createElement("div",{className:"mascot-wrapper"},c.createElement(NA,null)),c.createElement("div",{className:"hero-content"},c.createElement("h1",{className:"hero-tagline"},"Do it Right"),c.createElement("div",{className:"app-tiles-grid"},c.createElement(zu,{to:"/coding",className:"app-tile",style:{"--tile-color":"var(--kids-orange)"}},c.createElement("div",{className:"app-tile-icon",style:{background:"rgba(249, 115, 22, 0.1)",color:"var(--kids-orange)"}},c.createElement(QA,{size:32})),c.createElement("div",{style:{textAlign:"left",flex:1}},c.createElement("h2",{className:"app-tile-title"},"Coding 4 Kids"),c.createElement("p",{style:{margin:0,fontSize:"0.8rem",color:"var(--kids-text-muted)"}},"Build games and apps!"))),c.createElement(zu,{to:"/robotics",className:"app-tile",style:{"--tile-color":"var(--kids-blue)"}},c.createElement("div",{className:"app-tile-icon",style:{background:"rgba(14, 165, 233, 0.1)",color:"var(--kids-blue)"}},c.createElement(YA,{size:32})),c.createElement("div",{style:{textAlign:"left",flex:1}},c.createElement("h2",{className:"app-tile-title"},"Robotics 4 Kids"),c.createElement("p",{style:{margin:0,fontSize:"0.8rem",color:"var(--kids-text-muted)"}},"Bring machines to life!"))),c.createElement(zu,{to:"/ai",className:"app-tile",style:{"--tile-color":"var(--kids-purple)"}},c.createElement("div",{className:"app-tile-icon",style:{background:"rgba(168, 85, 247, 0.1)",color:"var(--kids-purple)"}},c.createElement($A,{size:32})),c.createElement("div",{style:{textAlign:"left",flex:1}},c.createElement("h2",{className:"app-tile-title"},"AI 4 Kids"),c.createElement("p",{style:{margin:"0.15rem 0 0",fontSize:"0.8rem",color:"var(--kids-text-muted)"}},"Train your own AI!")))),c.createElement("div",{className:"academy-cta-wrapper",style:{marginTop:"2.5rem"}},c.createElement("div",{className:"academy-cta-card"},c.createElement("div",{className:"cta-icon-float"},"🚀"),c.createElement("h2",{className:"cta-title"},"Ready to start?"),c.createElement("p",{className:"cta-text"},"Join 1,000+ kids learning to build the future!"),c.createElement("button",{className:"kids-button pulse-neon",onClick:()=>t(!0),style:{width:"100%",marginTop:"1rem"}},"Join the Academy")))))),c.createElement(dx,null),c.createElement("section",{style:{padding:"5rem 5% 6rem",background:"var(--kids-section-bg)",borderTop:"1px solid var(--kids-section-border)",borderBottom:"1px solid var(--kids-section-border)"}},c.createElement("div",{style:{maxWidth:"1200px",margin:"0 auto"}},c.createElement("div",{style:{textAlign:"center",marginBottom:"3.5rem"}},c.createElement("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"rgba(13, 148, 136, 0.1)",color:"#0d9488",padding:"0.4rem 1rem",borderRadius:"20px",fontSize:"0.85rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"}},c.createElement(ZA,{size:14})," Parents & Teachers Hub"),c.createElement("h2",{style:{fontFamily:"'Baloo 2', cursive",fontSize:"clamp(1.8rem, 4vw, 2.8rem)",fontWeight:800,margin:"0 0 1rem 0",color:"var(--nav-text)"}},"Featured Insights & STEM Wisdom"),c.createElement("p",{style:{fontSize:"clamp(0.95rem, 2.5vw, 1.15rem)",color:"var(--kids-text-muted)",maxWidth:"650px",margin:"0 auto",lineHeight:1.5}},"Explore practical, research-backed advice on screen time, computational literacy, robotics engineering, and raising the next generation of builders in Ghana.")),c.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"2rem",marginBottom:"3.5rem"}},ax.slice(0,3).map(e=>c.createElement("article",{key:e.id,style:{background:"var(--blog-card-bg)",borderRadius:"24px",border:"1px solid var(--blog-card-border)",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 4px 20px rgba(0,0,0,0.02)",transition:"transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease"},className:"blog-card-hover"},c.createElement("div",{style:{background:e.coverGradient,height:"140px",padding:"1.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"}},c.createElement("span",{style:{background:"white",color:e.accentColor,padding:"0.35rem 0.85rem",borderRadius:"12px",fontSize:"0.75rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.02em",alignSelf:"flex-start",boxShadow:"0 2px 4px rgba(0,0,0,0.03)"}},e.category),c.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#1e293b"}},c.createElement(KA,{size:16,style:{color:e.accentColor}}),c.createElement("span",{style:{fontSize:"0.8rem",fontWeight:700}},"Kone Kids Insights"))),c.createElement("div",{style:{padding:"1.5rem",display:"flex",flexDirection:"column",flex:1,justifyContent:"space-between"}},c.createElement("div",{style:{marginBottom:"1.25rem"}},c.createElement("h3",{style:{fontFamily:"'Baloo 2', cursive",fontSize:"1.25rem",fontWeight:800,margin:"0 0 0.5rem 0",lineHeight:1.3,color:"var(--blog-card-title)"}},e.title),c.createElement("p",{style:{fontSize:"0.9rem",color:"var(--blog-card-text)",margin:0,lineHeight:1.5,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}},e.summary)),c.createElement("div",{style:{borderTop:"1px solid var(--blog-card-meta-border)",paddingTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}},c.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem"}},c.createElement(GA,{size:14,style:{color:"#94a3b8"}}),c.createElement("span",{style:{fontSize:"0.75rem",color:"var(--kids-text-muted)",fontWeight:600}},e.readTime)),c.createElement(zu,{to:`/blog/${e.slug}`,style:{background:"rgba(13, 148, 136, 0.06)",color:"#0d9488",padding:"0.4rem 0.85rem",borderRadius:"12px",fontSize:"0.8rem",fontWeight:800,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem",transition:"all 0.2s"},className:"btn-read-hover"},"Read ",c.createElement(HA,{size:12}))))))),c.createElement("div",{style:{textAlign:"center"}},c.createElement(zu,{to:"/blog",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",color:"white",border:"none",padding:"0.85rem 2rem",borderRadius:"50px",fontSize:"1rem",fontWeight:800,cursor:"pointer",boxShadow:"0 4px 12px rgba(13, 148, 136, 0.25)",textDecoration:"none",fontFamily:"'Baloo 2', cursive",transition:"all 0.2s"},className:"btn-cta-hover"},"📖 Visit Parent & Teacher Hub"))))),c.createElement("footer",{style:{padding:"clamp(1.5rem, 4vw, 2rem) 5%",background:"var(--footer-bg)",borderTop:"1px solid var(--footer-border)"}},c.createElement("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"0.75rem"}},c.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.5rem 1rem"}},c.createElement("span",{style:{color:"var(--kids-text-muted)",fontSize:"clamp(0.8rem, 2.5vw, 0.9rem)"}},"© 2026 Kone Kids. All rights reserved."),c.createElement("span",{style:{color:"var(--kids-section-border)",fontSize:"0.9rem"}},"•"),c.createElement("a",{href:"https://www.koneacademy.io",style:{color:"#3b82f6",textDecoration:"none",fontWeight:700,fontSize:"clamp(0.8rem, 2.5vw, 0.85rem)"}},"Kone Academy Home")),c.createElement("p",{style:{fontSize:"clamp(0.95rem, 3vw, 1.1rem)",color:"var(--kids-orange)",fontWeight:"bold",margin:0}},"+233 55 199 3820"))))}function wx(){const{markVisited:e,markBadgeViewed:t,latestBadge:n}=CA(),[r,i]=c.useState(null),a=gu(),[s,o]=c.useState(window.innerWidth<=768),l=a.pathname.includes("/mission/");return c.useEffect(()=>{const e=()=>o(window.innerWidth<=768);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),c.useEffect(()=>{const e=()=>{cx.resumeAudio()};return window.addEventListener("click",e),()=>window.removeEventListener("click",e)},[]),c.useEffect(()=>{n&&i(n)},[n]),c.useEffect(()=>{e(window.location.pathname)},[window.location.pathname,e]),c.useEffect(()=>{let e=document.querySelector('link[rel="canonical"]');e||(e=document.createElement("link"),e.setAttribute("rel","canonical"),document.head.appendChild(e));const t=a.pathname.endsWith("/")&&"/"!==a.pathname?a.pathname.slice(0,-1):a.pathname;e.setAttribute("href",`https://kids.koneacademy.io${t}`)},[a.pathname]),c.createElement(c.Fragment,null,c.createElement(lx,null),c.createElement(LA,null),c.createElement(ix,{badge:r,onClose:()=>{r&&t(r.id),i(null)}}),c.createElement("div",{style:{paddingBottom:s&&!l?"80px":"0"}},c.createElement(c.Suspense,{fallback:c.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh",gap:"8px"}},c.createElement("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#f97316",animation:"dotPulse 1.2s ease-in-out infinite 0s",display:"block"}}),c.createElement("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#0ea5e9",animation:"dotPulse 1.2s ease-in-out infinite 0.2s",display:"block"}}),c.createElement("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#a855f7",animation:"dotPulse 1.2s ease-in-out infinite 0.4s",display:"block"}}))},c.createElement(Pu,null,c.createElement(Nu,{path:"/",element:c.createElement(vx,null)}),c.createElement(Nu,{path:"/class-login",element:c.createElement(gx,null)}),c.createElement(Nu,{path:"/teacher-dashboard",element:c.createElement(yx,null)}),c.createElement(Nu,{path:"/blog",element:c.createElement(px,null)}),c.createElement(Nu,{path:"/blog/:id",element:c.createElement(mx,null)}),c.createElement(Nu,{path:"/coding",element:c.createElement(fx,{hub:"coding"})}),c.createElement(Nu,{path:"/robotics",element:c.createElement(fx,{hub:"robotics"})}),c.createElement(Nu,{path:"/ai",element:c.createElement(fx,{hub:"ai"})}),c.createElement(Nu,{path:"/coding/mission/:missionId",element:c.createElement(ux,{title:"Coding Lab",image:"/programs/coding.png",description:"Master the mission!",accentColor:"var(--kids-orange)"})}),c.createElement(Nu,{path:"/robotics/mission/:missionId",element:c.createElement(ux,{title:"Robotics Lab",image:"/programs/robotics.png",description:"Build and program your robot!",accentColor:"var(--kids-blue)"})}),c.createElement(Nu,{path:"/ai/mission/:missionId",element:c.createElement(ux,{title:"AI Studio",image:"/programs/ai.png",description:"Train your first AI model!",accentColor:"#a855f7"})})))),s&&!l&&c.createElement("div",{className:"mobile-bottom-nav"},c.createElement(zu,{to:"/",className:"nav-item "+("/"===a.pathname?"nav-item-active":"")},c.createElement(JA,{size:24,className:"nav-icon"}),c.createElement("span",null,"Home")),c.createElement(zu,{to:"/coding",className:"nav-item "+("/coding"===a.pathname?"nav-item-active":"")},c.createElement(QA,{size:24,className:"nav-icon"}),c.createElement("span",null,"Coding")),c.createElement(zu,{to:"/robotics",className:"nav-item "+("/robotics"===a.pathname?"nav-item-active":"")},c.createElement(YA,{size:24,className:"nav-icon"}),c.createElement("span",null,"Robotics")),c.createElement(zu,{to:"/ai",className:"nav-item "+("/ai"===a.pathname?"nav-item-active":"")},c.createElement($A,{size:24,className:"nav-icon"}),c.createElement("span",null,"AI Lab"))),c.createElement(FA,null))}function bx(){return c.createElement(PA,null,c.createElement(SA,null,c.createElement(wx,null)))}class Ex extends c.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleGlobalError=e=>{this.logError(e.error||new Error(e.message),{componentStack:"Global Window Error"})},this.handleGlobalPromiseRejection=e=>{this.logError(e.reason||new Error("Unhandled Promise Rejection"),{componentStack:"Global Promise Rejection"})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidMount(){window.addEventListener("error",this.handleGlobalError),window.addEventListener("unhandledrejection",this.handleGlobalPromiseRejection)}componentWillUnmount(){window.removeEventListener("error",this.handleGlobalError),window.removeEventListener("unhandledrejection",this.handleGlobalPromiseRejection)}async componentDidCatch(e,t){console.error("Uncaught error caught by ErrorBoundary:",e,t),await this.logError(e,t)}async logError(e,t){try{await iC(iS(kA,"client_errors"),{appName:this.props.appName||"Kone-Kids",errorMessage:e.message,errorStack:e.stack,componentStack:t.componentStack,url:window.location.href,userAgent:navigator.userAgent,timestamp:OS()}),console.log("Error successfully logged to Firestore.")}catch(e){console.error("Failed to log error to Firestore:",e)}}render(){return this.state.hasError?c.createElement("div",{style:{padding:"2rem",textAlign:"center",fontFamily:"system-ui, -apple-system, sans-serif",color:"#f8fafc",background:"#0a0a0f",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},c.createElement("h2",{style:{color:"#ec4899",marginBottom:"1rem",fontSize:"2rem"}},"Oops, something went wrong."),c.createElement("p",{style:{color:"#94a3b8",marginBottom:"2rem",maxWidth:"500px",lineHeight:"1.6"}},this.props.fallbackMessage||"We're sorry, but an unexpected error occurred. Our engineering team has been notified. Please try refreshing the page."),c.createElement("button",{onClick:()=>window.location.reload(),style:{padding:"12px 24px",background:"#ec4899",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"1rem",boxShadow:"0 0 15px rgba(236, 72, 153, 0.4)"}},"Refresh Page")):this.props.children}}const kx=document.getElementById("root");kx&&kx.hasChildNodes()?Ic.hydrate(c.createElement(c.StrictMode,null,c.createElement(Ex,{appName:"Kone-Kids"},c.createElement(Fu,null,c.createElement(bx,null)))),kx):Ic.render(c.createElement(c.StrictMode,null,c.createElement(Ex,{appName:"Kone-Kids"},c.createElement(Fu,null,c.createElement(bx,null)))),kx);export{am as $,HA as A,KA as B,GA as C,hg as D,nC as E,rC as F,om as G,my as H,Um as I,Vm as J,jS as K,zu as L,NA as M,WS as N,ef as O,em as P,jp as Q,sf as R,ex as S,tx as T,Gp as U,rx as V,nm as W,sm as X,Yd as Y,lm as Z,Yp as _,n as a,Km as a$,Zd as a0,Zp as a1,oy as a2,iv as a3,Jd as a4,Zg as a5,um as a6,Xd as a7,av as a8,ov as a9,yy as aA,Cy as aB,bg as aC,sg as aD,tm as aE,rf as aF,Sm as aG,ry as aH,gy as aI,Sy as aJ,Yf as aK,dg as aL,qm as aM,Dm as aN,zm as aO,rg as aP,mm as aQ,Im as aR,Cm as aS,Bm as aT,ty as aU,Ty as aV,wm as aW,ug as aX,$m as aY,Gm as aZ,ay as a_,hm as aa,Mm as ab,og as ac,Ag as ad,Ig as ae,tv as af,Ng as ag,Lm as ah,Om as ai,Up as aj,nf as ak,fg as al,Wm as am,ng as an,pv as ao,jf as ap,Bf as aq,gg as ar,Ay as as,ip as at,Hg as au,Fp as av,ig as aw,jm as ax,Tm as ay,ny as az,t as b,cg as b0,ag as b1,Hm as b2,Fm as b3,qA as c,MA as d,vu as e,gu as f,r as g,CA as h,XA as i,nx as j,xA as k,iC as l,iS as m,kA as n,OS as o,ZA as p,DA as q,c as r,cx as s,ax as t,wu as u,eC as v,aS as w,tC as x,EA as y,lg as z};
