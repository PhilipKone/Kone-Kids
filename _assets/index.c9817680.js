function e(e,t){return t.forEach(function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach(function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/(null==t&&n.path)}},n.exports),n.exports}function r(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}),t}var i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var o=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in n=Object(arguments[l]))a.call(n,c)&&(o[c]=n[c]);if(i){r=i(n);for(var u=0;u<r.length;u++)s.call(n,r[u])&&(o[r[u]]=n[r[u]])}}return o},l=n(function(e,t){var n=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,a=60110,s=60112;t.Suspense=60113;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;n=u("react.element"),r=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),i=u("react.provider"),a=u("react.context"),s=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),c=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p={};function m(e,t,n){this.props=e,this.context=t,this.refs=p,this.updater=n||f}function g(){}function y(e,t,n){this.props=e,this.context=t,this.refs=p,this.updater=n||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=y.prototype=new g;v.constructor=y,o(v,m.prototype),v.isPureReactComponent=!0;var w={current:null},b=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var i,a={},s=null,o=null;if(null!=t)for(i in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)b.call(t,i)&&!E.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:s,ref:o,props:a,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function I(e,t,i,a,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return s=s(l=e),e=""===a?"."+T(l,0):a,Array.isArray(s)?(i="",null!=e&&(i=e.replace(_,"$&/")+"/"),I(s,t,i,"",function(e){return e})):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(_,"$&/")+"/")+e)),t.push(s)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=a+T(o=e[c],c);l+=I(o,t,i,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(o=e.next()).done;)l+=I(o=o.value,t,i,u=a+T(o,c++),s);else if("object"===o)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function C(e,t,n){if(null==e)return e;var r=[],i=0;return I(e,r,"","",function(e){return t.call(n,e,i++)}),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)})}if(1===e._status)return e._result;throw e._result}var A={current:null};function N(){var e=A.current;if(null===e)throw Error(d(321));return e}var P={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:C,forEach:function(e,t,n){C(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return C(e,function(){t++}),t},toArray:function(e){return C(e,function(e){return e})||[]},only:function(e){if(!S(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var i=o({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)b.call(t,u)&&!E.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){c=Array(u);for(var h=0;h<u;h++)c[h]=arguments[h+2];i.children=c}return{$$typeof:n,type:e.type,key:a,ref:s,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return N().useCallback(e,t)},t.useContext=function(e,t){return N().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return N().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return N().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return N().useLayoutEffect(e,t)},t.useMemo=function(e,t){return N().useMemo(e,t)},t.useReducer=function(e,t,n){return N().useReducer(e,t,n)},t.useRef=function(e){return N().useRef(e)},t.useState=function(e){return N().useState(e)},t.version="17.0.2"});n(function(e,t){});var c=n(function(e){e.exports=l}),u=e({__proto__:null,default:c},[c]),h=n(function(e,t){var n,r,i,a;if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var c=null,u=null,h=function(){if(null!==c)try{var e=t.unstable_now();c(!0,e),c=null}catch(e){throw setTimeout(h,0),e}};n=function(e){null!==c?setTimeout(n,0,e):(c=e,setTimeout(h,0))},r=function(e,t){u=setTimeout(e,t)},i=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,f=window.clearTimeout;if("undefined"!=typeof console){var p=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof p&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var m=!1,g=null,y=-1,v=5,w=0;t.unstable_shouldYield=function(){return t.unstable_now()>=w},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<e?Math.floor(1e3/e):5};var b=new MessageChannel,E=b.port2;b.port1.onmessage=function(){if(null!==g){var e=t.unstable_now();w=e+v;try{g(!0,e)?E.postMessage(null):(m=!1,g=null)}catch(e){throw E.postMessage(null),e}}else m=!1},n=function(e){g=e,m||(m=!0,E.postMessage(null))},r=function(e,n){y=d(function(){e(t.unstable_now())},n)},i=function(){f(y),y=-1}}function k(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<T(i,t)))break e;e[r]=t,e[n]=i,n=r}}function S(e){return void 0===(e=e[0])?null:e}function _(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var a=2*(r+1)-1,s=e[a],o=a+1,l=e[o];if(void 0!==s&&0>T(s,n))void 0!==l&&0>T(l,s)?(e[r]=l,e[o]=n,r=o):(e[r]=s,e[a]=n,r=a);else{if(!(void 0!==l&&0>T(l,n)))break e;e[r]=l,e[o]=n,r=o}}}return t}return null}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var I=[],C=[],x=1,A=null,N=3,P=!1,R=!1,D=!1;function M(e){for(var t=S(C);null!==t;){if(null===t.callback)_(C);else{if(!(t.startTime<=e))break;_(C),t.sortIndex=t.expirationTime,k(I,t)}t=S(C)}}function O(e){if(D=!1,M(e),!R)if(null!==S(I))R=!0,n(L);else{var t=S(C);null!==t&&r(O,t.startTime-e)}}function L(e,n){R=!1,D&&(D=!1,i()),P=!0;var a=N;try{for(M(n),A=S(I);null!==A&&(!(A.expirationTime>n)||e&&!t.unstable_shouldYield());){var s=A.callback;if("function"==typeof s){A.callback=null,N=A.priorityLevel;var o=s(A.expirationTime<=n);n=t.unstable_now(),"function"==typeof o?A.callback=o:A===S(I)&&_(I),M(n)}else _(I);A=S(I)}if(null!==A)var l=!0;else{var c=S(C);null!==c&&r(O,c.startTime-n),l=!1}return l}finally{A=null,N=a,P=!1}}var F=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){R||P||(R=!0,n(L))},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_getFirstCallbackNode=function(){return S(I)},t.unstable_next=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var n=N;N=t;try{return e()}finally{N=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=F,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=N;N=e;try{return t()}finally{N=n}},t.unstable_scheduleCallback=function(e,a,s){var o=t.unstable_now();switch("object"==typeof s&&null!==s?s="number"==typeof(s=s.delay)&&0<s?o+s:o:s=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:x++,callback:a,priorityLevel:e,startTime:s,expirationTime:l=s+l,sortIndex:-1},s>o?(e.sortIndex=s,k(C,e),null===S(I)&&e===S(C)&&(D?i():D=!0,r(O,s-o))):(e.sortIndex=l,k(I,e),R||P||(R=!0,n(L))),e},t.unstable_wrapCallback=function(e){var t=N;return function(){var n=N;N=t;try{return e.apply(this,arguments)}finally{N=n}}}});n(function(e,t){});var d=n(function(e){e.exports=h});function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!c)throw Error(f(227));var p=new Set,m={};function g(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(m[e]=t,e=0;e<t.length;e++)p.add(t[e])}var v=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b=Object.prototype.hasOwnProperty,E={},k={};function S(e,t,n,r,i,a,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new S(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_[t]=new S(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new S(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new S(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new S(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new S(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function I(e){return e[1].toUpperCase()}function C(e,t,n,r){var i=_.hasOwnProperty(t)?_[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!b.call(k,e)||!b.call(E,e)&&(w.test(e)?k[e]=!0:(E[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T,I);_[t]=new S(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T,I);_[t]=new S(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T,I);_[t]=new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=60103,N=60106,P=60107,R=60108,D=60114,M=60109,O=60110,L=60112,F=60113,U=60120,V=60115,z=60116,j=60121,B=60128,$=60129,W=60130,q=60131;if("function"==typeof Symbol&&Symbol.for){var K=Symbol.for;A=K("react.element"),N=K("react.portal"),P=K("react.fragment"),R=K("react.strict_mode"),D=K("react.profiler"),M=K("react.provider"),O=K("react.context"),L=K("react.forward_ref"),F=K("react.suspense"),U=K("react.suspense_list"),V=K("react.memo"),z=K("react.lazy"),j=K("react.block"),K("react.scope"),B=K("react.opaque.id"),$=K("react.debug_trace_mode"),W=K("react.offscreen"),q=K("react.legacy_hidden")}var H,G="function"==typeof Symbol&&Symbol.iterator;function Q(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=G&&e[G]||e["@@iterator"])?e:null}function J(e){if(void 0===H)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);H=t&&t[1]||""}return"\n"+H+e}var Y=!1;function X(e,t){if(!e||Y)return"";Y=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(e){if(e&&r&&"string"==typeof e.stack){for(var i=e.stack.split("\n"),a=r.stack.split("\n"),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(1!==s||1!==o)do{if(s--,0>--o||i[s]!==a[o])return"\n"+i[s].replace(" at new "," at ")}while(1<=s&&0<=o);break}}}finally{Y=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?J(e):""}function Z(e){switch(e.tag){case 5:return J(e.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1);case 11:return e=X(e.type.render,!1);case 22:return e=X(e.type._render,!1);case 1:return e=X(e.type,!0);default:return""}}function ee(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case P:return"Fragment";case N:return"Portal";case D:return"Profiler";case R:return"StrictMode";case F:return"Suspense";case U:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case O:return(e.displayName||"Context")+".Consumer";case M:return(e._context.displayName||"Context")+".Provider";case L:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case V:return ee(e.type);case j:return ee(e._render);case z:t=e._payload,e=e._init;try{return ee(e(t))}catch(e){}}return null}function te(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function ne(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function re(e){e._valueTracker||(e._valueTracker=function(e){var t=ne(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ie(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ne(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ae(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function se(e,t){var n=t.checked;return o({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function oe(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=te(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function le(e,t){null!=(t=t.checked)&&C(e,"checked",t,!1)}function ce(e,t){le(e,t);var n=te(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?he(e,t.type,n):t.hasOwnProperty("defaultValue")&&he(e,t.type,te(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ue(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function he(e,t,n){"number"===t&&ae(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function de(e,t){return e=o({children:void 0},t),(t=function(e){var t="";return c.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(t.children))&&(e.children=t),e}function fe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+te(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function pe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(f(91));return o({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function me(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(f(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(f(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:te(n)}}function ge(e,t){var n=te(t.value),r=te(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ye(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var ve="http://www.w3.org/1999/xhtml",we="http://www.w3.org/2000/svg";function be(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ee(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?be(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ke,Se,_e=(Se=function(e,t){if(e.namespaceURI!==we||"innerHTML"in e)e.innerHTML=t;else{for((ke=ke||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return Se(e,t)})}:Se);function Te(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ie={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];function xe(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Ie.hasOwnProperty(e)&&Ie[e]?(""+t).trim():t+"px"}function Ae(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=xe(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Ie).forEach(function(e){Ce.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ie[t]=Ie[e]})});var Ne=o({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pe(e,t){if(t){if(Ne[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(f(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(f(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(f(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(f(62))}}function Re(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function De(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Me=null,Oe=null,Le=null;function Fe(e){if(e=ui(e)){if("function"!=typeof Me)throw Error(f(280));var t=e.stateNode;t&&(t=di(t),Me(e.stateNode,e.type,t))}}function Ue(e){Oe?Le?Le.push(e):Le=[e]:Oe=e}function Ve(){if(Oe){var e=Oe,t=Le;if(Le=Oe=null,Fe(e),t)for(e=0;e<t.length;e++)Fe(t[e])}}function ze(e,t){return e(t)}function je(e,t,n,r,i){return e(t,n,r,i)}function Be(){}var $e=ze,We=!1,qe=!1;function Ke(){null===Oe&&null===Le||(Be(),Ve())}function He(e,t){var n=e.stateNode;if(null===n)return null;var r=di(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(f(231,t,typeof n));return n}var Ge=!1;if(v)try{var Qe={};Object.defineProperty(Qe,"passive",{get:function(){Ge=!0}}),window.addEventListener("test",Qe,Qe),window.removeEventListener("test",Qe,Qe)}catch(Se){Ge=!1}function Je(e,t,n,r,i,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var Ye=!1,Xe=null,Ze=!1,et=null,tt={onError:function(e){Ye=!0,Xe=e}};function nt(e,t,n,r,i,a,s,o,l){Ye=!1,Xe=null,Je.apply(tt,arguments)}function rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(1026&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function it(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function at(e){if(rt(e)!==e)throw Error(f(188))}function st(e){if(e=function(e){var t=e.alternate;if(!t){if(null===(t=rt(e)))throw Error(f(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return at(i),e;if(a===r)return at(i),t;a=a.sibling}throw Error(f(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=a;break}if(o===r){s=!0,r=i,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,r=i;break}if(o===r){s=!0,r=a,n=i;break}o=o.sibling}if(!s)throw Error(f(189))}}if(n.alternate!==r)throw Error(f(190))}if(3!==n.tag)throw Error(f(188));return n.stateNode.current===n?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function ot(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var lt,ct,ut,ht,dt=!1,ft=[],pt=null,mt=null,gt=null,yt=new Map,vt=new Map,wt=[],bt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Et(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:i,targetContainers:[r]}}function kt(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":yt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vt.delete(t.pointerId)}}function St(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e=Et(t,n,r,i,a),null!==t&&(null!==(t=ui(t))&&ct(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function _t(e){var t=ci(e.target);if(null!==t){var n=rt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=it(n)))return e.blockedOn=t,void ht(e.lanePriority,function(){d.unstable_runWithPriority(e.priority,function(){ut(n)})})}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Tt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=on(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ui(n))&&ct(t),e.blockedOn=n,!1;t.shift()}return!0}function It(e,t,n){Tt(e)&&n.delete(t)}function Ct(){for(dt=!1;0<ft.length;){var e=ft[0];if(null!==e.blockedOn){null!==(e=ui(e.blockedOn))&&lt(e);break}for(var t=e.targetContainers;0<t.length;){var n=on(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&ft.shift()}null!==pt&&Tt(pt)&&(pt=null),null!==mt&&Tt(mt)&&(mt=null),null!==gt&&Tt(gt)&&(gt=null),yt.forEach(It),vt.forEach(It)}function xt(e,t){e.blockedOn===t&&(e.blockedOn=null,dt||(dt=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Ct)))}function At(e){function t(t){return xt(t,e)}if(0<ft.length){xt(ft[0],e);for(var n=1;n<ft.length;n++){var r=ft[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==pt&&xt(pt,e),null!==mt&&xt(mt,e),null!==gt&&xt(gt,e),yt.forEach(t),vt.forEach(t),n=0;n<wt.length;n++)(r=wt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&null===(n=wt[0]).blockedOn;)_t(n),null===n.blockedOn&&wt.shift()}function Nt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pt={animationend:Nt("Animation","AnimationEnd"),animationiteration:Nt("Animation","AnimationIteration"),animationstart:Nt("Animation","AnimationStart"),transitionend:Nt("Transition","TransitionEnd")},Rt={},Dt={};function Mt(e){if(Rt[e])return Rt[e];if(!Pt[e])return e;var t,n=Pt[e];for(t in n)if(n.hasOwnProperty(t)&&t in Dt)return Rt[e]=n[t];return e}v&&(Dt=document.createElement("div").style,"AnimationEvent"in window||(delete Pt.animationend.animation,delete Pt.animationiteration.animation,delete Pt.animationstart.animation),"TransitionEvent"in window||delete Pt.transitionend.transition);var Ot=Mt("animationend"),Lt=Mt("animationiteration"),Ft=Mt("animationstart"),Ut=Mt("transitionend"),Vt=new Map,zt=new Map,jt=["abort","abort",Ot,"animationEnd",Lt,"animationIteration",Ft,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Ut,"transitionEnd","waiting","waiting"];function Bt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),zt.set(r,t),Vt.set(r,i),g(i,[r])}}(0,d.unstable_now)();var $t=8;function Wt(e){if(1&e)return $t=15,1;if(2&e)return $t=14,2;if(4&e)return $t=13,4;var t=24&e;return 0!==t?($t=12,t):32&e?($t=11,32):0!==(t=192&e)?($t=10,t):256&e?($t=9,256):0!==(t=3584&e)?($t=8,t):4096&e?($t=7,4096):0!==(t=4186112&e)?($t=6,t):0!==(t=62914560&e)?($t=5,t):67108864&e?($t=4,67108864):134217728&e?($t=3,134217728):0!==(t=805306368&e)?($t=2,t):1073741824&e?($t=1,1073741824):($t=8,e)}function qt(e,t){var n=e.pendingLanes;if(0===n)return $t=0;var r=0,i=0,a=e.expiredLanes,s=e.suspendedLanes,o=e.pingedLanes;if(0!==a)r=a,i=$t=15;else if(0!==(a=134217727&n)){var l=a&~s;0!==l?(r=Wt(l),i=$t):0!==(o&=a)&&(r=Wt(o),i=$t)}else 0!==(a=n&~s)?(r=Wt(a),i=$t):0!==o&&(r=Wt(o),i=$t);if(0===r)return 0;if(r=n&((0>(r=31-Yt(r))?0:1<<r)<<1)-1,0!==t&&t!==r&&0===(t&s)){if(Wt(t),i<=$t)return t;$t=i}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-Yt(t)),r|=e[n],t&=~i;return r}function Kt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Ht(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Gt(24&~t))?Ht(10,t):e;case 10:return 0===(e=Gt(192&~t))?Ht(8,t):e;case 8:return 0===(e=Gt(3584&~t))&&(0===(e=Gt(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Gt(805306368&~t))&&(t=268435456),t}throw Error(f(358,e))}function Gt(e){return e&-e}function Qt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jt(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,(e=e.eventTimes)[t=31-Yt(t)]=n}var Yt=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(Xt(e)/Zt|0)|0},Xt=Math.log,Zt=Math.LN2;var en=d.unstable_UserBlockingPriority,tn=d.unstable_runWithPriority,nn=!0;function rn(e,t,n,r){We||Be();var i=sn,a=We;We=!0;try{je(i,e,t,n,r)}finally{(We=a)||Ke()}}function an(e,t,n,r){tn(en,sn.bind(null,e,t,n,r))}function sn(e,t,n,r){var i;if(nn)if((i=!(4&t))&&0<ft.length&&-1<bt.indexOf(e))e=Et(null,e,t,n,r),ft.push(e);else{var a=on(e,t,n,r);if(null===a)i&&kt(e,r);else{if(i){if(-1<bt.indexOf(e))return e=Et(a,e,t,n,r),void ft.push(e);if(function(e,t,n,r,i){switch(t){case"focusin":return pt=St(pt,e,t,n,r,i),!0;case"dragenter":return mt=St(mt,e,t,n,r,i),!0;case"mouseover":return gt=St(gt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return yt.set(a,St(yt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,vt.set(a,St(vt.get(a)||null,e,t,n,r,i)),!0}return!1}(a,e,t,n,r))return;kt(e,r)}Br(e,t,r,null,n)}}}function on(e,t,n,r){var i=De(r);if(null!==(i=ci(i))){var a=rt(i);if(null===a)i=null;else{var s=a.tag;if(13===s){if(null!==(i=it(a)))return i;i=null}else if(3===s){if(a.stateNode.hydrate)return 3===a.tag?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null)}}return Br(e,t,r,i,n),null}var ln=null,cn=null,un=null;function hn(){if(un)return un;var e,t,n=cn,r=n.length,i="value"in ln?ln.value:ln.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[a-t];t++);return un=i.slice(e,1<t?1-t:void 0)}function dn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function fn(){return!0}function pn(){return!1}function mn(e){function t(t,n,r,i,a){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?fn:pn,this.isPropagationStopped=pn,this}return o(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=fn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=fn)},persist:function(){},isPersistent:fn}),t}var gn,yn,vn,wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bn=mn(wn),En=o({},wn,{view:0,detail:0}),kn=mn(En),Sn=o({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:On,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&"mousemove"===e.type?(gn=e.screenX-vn.screenX,yn=e.screenY-vn.screenY):yn=gn=0,vn=e),gn)},movementY:function(e){return"movementY"in e?e.movementY:yn}}),_n=mn(Sn),Tn=mn(o({},Sn,{dataTransfer:0})),In=mn(o({},En,{relatedTarget:0})),Cn=mn(o({},wn,{animationName:0,elapsedTime:0,pseudoElement:0})),xn=o({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),An=mn(xn),Nn=mn(o({},wn,{data:0})),Pn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Dn[e])&&!!t[e]}function On(){return Mn}var Ln=o({},En,{key:function(e){if(e.key){var t=Pn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=dn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Rn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:On,charCode:function(e){return"keypress"===e.type?dn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?dn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Fn=mn(Ln),Un=mn(o({},Sn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Vn=mn(o({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:On})),zn=mn(o({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0})),jn=o({},Sn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bn=mn(jn),$n=[9,13,27,32],Wn=v&&"CompositionEvent"in window,qn=null;v&&"documentMode"in document&&(qn=document.documentMode);var Kn=v&&"TextEvent"in window&&!qn,Hn=v&&(!Wn||qn&&8<qn&&11>=qn),Gn=String.fromCharCode(32),Qn=!1;function Jn(e,t){switch(e){case"keyup":return-1!==$n.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Xn=!1;var Zn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Zn[e.type]:"textarea"===t}function tr(e,t,n,r){Ue(r),0<(t=Wr(t,"onChange")).length&&(n=new bn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){Lr(e,0)}function ar(e){if(ie(hi(e)))return e}function sr(e,t){if("change"===e)return t}var or=!1;if(v){var lr;if(v){var cr="oninput"in document;if(!cr){var ur=document.createElement("div");ur.setAttribute("oninput","return;"),cr="function"==typeof ur.oninput}lr=cr}else lr=!1;or=lr&&(!document.documentMode||9<document.documentMode)}function hr(){nr&&(nr.detachEvent("onpropertychange",dr),rr=nr=null)}function dr(e){if("value"===e.propertyName&&ar(rr)){var t=[];if(tr(t,rr,e,De(e)),e=ir,We)e(t);else{We=!0;try{ze(e,t)}finally{We=!1,Ke()}}}}function fr(e,t,n){"focusin"===e?(hr(),rr=n,(nr=t).attachEvent("onpropertychange",dr)):"focusout"===e&&hr()}function pr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return ar(rr)}function mr(e,t){if("click"===e)return ar(t)}function gr(e,t){if("input"===e||"change"===e)return ar(t)}var yr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},vr=Object.prototype.hasOwnProperty;function wr(e,t){if(yr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!vr.call(t,n[r])||!yr(e[n[r]],t[n[r]]))return!1;return!0}function br(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n,r=br(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=br(r)}}function kr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?kr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Sr(){for(var e=window,t=ae();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=ae((e=t.contentWindow).document)}return t}function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var Tr=v&&"documentMode"in document&&11>=document.documentMode,Ir=null,Cr=null,xr=null,Ar=!1;function Nr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Ar||null==Ir||Ir!==ae(r)||("selectionStart"in(r=Ir)&&_r(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},xr&&wr(xr,r)||(xr=r,0<(r=Wr(Cr,"onSelect")).length&&(t=new bn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}Bt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Bt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Bt(jt,2);for(var Pr="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Rr=0;Rr<Pr.length;Rr++)zt.set(Pr[Rr],0);y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function Or(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,o,l){if(nt.apply(this,arguments),Ye){if(!Ye)throw Error(f(198));var c=Xe;Ye=!1,Xe=null,Ze||(Ze=!0,et=c)}}(r,t,void 0,e),e.currentTarget=null}function Lr(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;Or(i,o,c),a=l}else for(s=0;s<r.length;s++){if(l=(o=r[s]).instance,c=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;Or(i,o,c),a=l}}}if(Ze)throw e=et,Ze=!1,et=null,e}function Fr(e,t){var n=fi(t),r=e+"__bubble";n.has(r)||(jr(t,e,2,!1),n.add(r))}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){e[Ur]||(e[Ur]=!0,p.forEach(function(t){Mr.has(t)||zr(t,!1,e,null),zr(t,!0,e,null)}))}function zr(e,t,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=n;if("selectionchange"===e&&9!==n.nodeType&&(a=n.ownerDocument),null!==r&&!t&&Mr.has(e)){if("scroll"!==e)return;i|=2,a=r}var s=fi(a),o=e+"__"+(t?"capture":"bubble");s.has(o)||(t&&(i|=4),jr(a,e,i,t),s.add(o))}function jr(e,t,n,r){var i=zt.get(t);switch(void 0===i?2:i){case 0:i=rn;break;case 1:i=an;break;default:i=sn}n=i.bind(null,t,n,e),i=void 0,!Ge||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Br(e,t,n,r,i){var a=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var s=r.tag;if(3===s||4===s){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===s)for(s=r.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;s=s.return}for(;null!==o;){if(null===(s=ci(o)))return;if(5===(l=s.tag)||6===l){r=a=s;continue e}o=o.parentNode}}r=r.return}!function(e,t,n){if(qe)return e(t,n);qe=!0;try{return $e(e,t,n)}finally{qe=!1,Ke()}}(function(){var r=a,i=De(n),s=[];e:{var o=Vt.get(e);if(void 0!==o){var l=bn,c=e;switch(e){case"keypress":if(0===dn(n))break e;case"keydown":case"keyup":l=Fn;break;case"focusin":c="focus",l=In;break;case"focusout":c="blur",l=In;break;case"beforeblur":case"afterblur":l=In;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=_n;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=Tn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Vn;break;case Ot:case Lt:case Ft:l=Cn;break;case Ut:l=zn;break;case"scroll":l=kn;break;case"wheel":l=Bn;break;case"copy":case"cut":case"paste":l=An;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Un}var u=!!(4&t),h=!u&&"scroll"===e,d=u?null!==o?o+"Capture":null:o;u=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=He(p,d))&&u.push($r(p,m,f)))),h)break;p=p.return}0<u.length&&(o=new l(o,c,null,n,i),s.push({event:o,listeners:u}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||16&t||!(c=n.relatedTarget||n.fromElement)||!ci(c)&&!c[oi])&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?ci(c):null)&&(c!==(h=rt(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=_n,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=Un,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:hi(l),f=null==c?o:hi(c),(o=new u(m,p+"leave",l,n,i)).target=h,o.relatedTarget=f,m=null,ci(i)===r&&((u=new u(d,p+"enter",c,n,i)).target=f,u.relatedTarget=h,m=u),h=m,l&&c)e:{for(d=c,p=0,f=u=l;f;f=qr(f))p++;for(f=0,m=d;m;m=qr(m))f++;for(;0<p-f;)u=qr(u),p--;for(;0<f-p;)d=qr(d),f--;for(;p--;){if(u===d||null!==d&&u===d.alternate)break e;u=qr(u),d=qr(d)}u=null}else u=null;null!==l&&Kr(s,o,l,u,!1),null!==c&&null!==h&&Kr(s,h,c,u,!0)}if("select"===(l=(o=r?hi(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=sr;else if(er(o))if(or)g=gr;else{g=pr;var y=fr}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=mr);switch(g&&(g=g(e,r))?tr(s,g,n,i):(y&&y(e,o,r),"focusout"===e&&(y=o._wrapperState)&&y.controlled&&"number"===o.type&&he(o,"number",o.value)),y=r?hi(r):window,e){case"focusin":(er(y)||"true"===y.contentEditable)&&(Ir=y,Cr=r,xr=null);break;case"focusout":xr=Cr=Ir=null;break;case"mousedown":Ar=!0;break;case"contextmenu":case"mouseup":case"dragend":Ar=!1,Nr(s,n,i);break;case"selectionchange":if(Tr)break;case"keydown":case"keyup":Nr(s,n,i)}var v;if(Wn)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Xn?Jn(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Hn&&"ko"!==n.locale&&(Xn||"onCompositionStart"!==w?"onCompositionEnd"===w&&Xn&&(v=hn()):(cn="value"in(ln=i)?ln.value:ln.textContent,Xn=!0)),0<(y=Wr(r,w)).length&&(w=new Nn(w,e,null,n,i),s.push({event:w,listeners:y}),v?w.data=v:null!==(v=Yn(n))&&(w.data=v))),(v=Kn?function(e,t){switch(e){case"compositionend":return Yn(t);case"keypress":return 32!==t.which?null:(Qn=!0,Gn);case"textInput":return(e=t.data)===Gn&&Qn?null:e;default:return null}}(e,n):function(e,t){if(Xn)return"compositionend"===e||!Wn&&Jn(e,t)?(e=hn(),un=cn=ln=null,Xn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Wr(r,"onBeforeInput")).length&&(i=new Nn("onBeforeInput","beforeinput",null,n,i),s.push({event:i,listeners:r}),i.data=v))}Lr(s,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=He(e,n))&&r.unshift($r(e,a,i)),null!=(a=He(e,t))&&r.push($r(e,a,i))),e=e.return}return r}function qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,i){for(var a=t._reactName,s=[];null!==n&&n!==r;){var o=n,l=o.alternate,c=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==c&&(o=c,i?null!=(l=He(n,a))&&s.unshift($r(n,l,o)):i||null!=(l=He(n,a))&&s.push($r(n,l,o))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}function Hr(){}var Gr=null,Qr=null;function Jr(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Yr(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Xr="function"==typeof setTimeout?setTimeout:void 0,Zr="function"==typeof clearTimeout?clearTimeout:void 0;function ei(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function ti(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function ni(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ri=0;var ii=Math.random().toString(36).slice(2),ai="__reactFiber$"+ii,si="__reactProps$"+ii,oi="__reactContainer$"+ii,li="__reactEvents$"+ii;function ci(e){var t=e[ai];if(t)return t;for(var n=e.parentNode;n;){if(t=n[oi]||n[ai]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ni(e);null!==e;){if(n=e[ai])return n;e=ni(e)}return t}n=(e=n).parentNode}return null}function ui(e){return!(e=e[ai]||e[oi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function hi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(f(33))}function di(e){return e[si]||null}function fi(e){var t=e[li];return void 0===t&&(t=e[li]=new Set),t}var pi=[],mi=-1;function gi(e){return{current:e}}function yi(e){0>mi||(e.current=pi[mi],pi[mi]=null,mi--)}function vi(e,t){mi++,pi[mi]=e.current,e.current=t}var wi={},bi=gi(wi),Ei=gi(!1),ki=wi;function Si(e,t){var n=e.type.contextTypes;if(!n)return wi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function _i(e){return null!=(e=e.childContextTypes)}function Ti(){yi(Ei),yi(bi)}function Ii(e,t,n){if(bi.current!==wi)throw Error(f(168));vi(bi,t),vi(Ei,n)}function Ci(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in e))throw Error(f(108,ee(t)||"Unknown",i));return o({},n,r)}function xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wi,ki=bi.current,vi(bi,e),vi(Ei,Ei.current),!0}function Ai(e,t,n){var r=e.stateNode;if(!r)throw Error(f(169));n?(e=Ci(e,t,ki),r.__reactInternalMemoizedMergedChildContext=e,yi(Ei),yi(bi),vi(bi,e)):yi(Ei),vi(Ei,n)}var Ni=null,Pi=null,Ri=d.unstable_runWithPriority,Di=d.unstable_scheduleCallback,Mi=d.unstable_cancelCallback,Oi=d.unstable_shouldYield,Li=d.unstable_requestPaint,Fi=d.unstable_now,Ui=d.unstable_getCurrentPriorityLevel,Vi=d.unstable_ImmediatePriority,zi=d.unstable_UserBlockingPriority,ji=d.unstable_NormalPriority,Bi=d.unstable_LowPriority,$i=d.unstable_IdlePriority,Wi={},qi=void 0!==Li?Li:function(){},Ki=null,Hi=null,Gi=!1,Qi=Fi(),Ji=1e4>Qi?Fi:function(){return Fi()-Qi};function Yi(){switch(Ui()){case Vi:return 99;case zi:return 98;case ji:return 97;case Bi:return 96;case $i:return 95;default:throw Error(f(332))}}function Xi(e){switch(e){case 99:return Vi;case 98:return zi;case 97:return ji;case 96:return Bi;case 95:return $i;default:throw Error(f(332))}}function Zi(e,t){return e=Xi(e),Ri(e,t)}function ea(e,t,n){return e=Xi(e),Di(e,t,n)}function ta(){if(null!==Hi){var e=Hi;Hi=null,Mi(e)}na()}function na(){if(!Gi&&null!==Ki){Gi=!0;var e=0;try{var t=Ki;Zi(99,function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}}),Ki=null}catch(t){throw null!==Ki&&(Ki=Ki.slice(e+1)),Di(Vi,ta),t}finally{Gi=!1}}}var ra=x.ReactCurrentBatchConfig;function ia(e,t){if(e&&e.defaultProps){for(var n in t=o({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var aa=gi(null),sa=null,oa=null,la=null;function ca(){la=oa=sa=null}function ua(e){var t=aa.current;yi(aa),e.type._context._currentValue=t}function ha(e,t){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t);e=e.return}}function da(e,t){sa=e,la=oa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&($s=!0),e.firstContext=null)}function fa(e,t){if(la!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(la=e,t=1073741823),t={context:e,observedBits:t,next:null},null===oa){if(null===sa)throw Error(f(308));oa=t,sa.dependencies={lanes:0,firstContext:t,responders:null}}else oa=oa.next=t;return e._currentValue}var pa=!1;function ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ya(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function va(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function wa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=s:a=a.next=s,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ba(e,t,n,r){var i=e.updateQueue;pa=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var c=l,u=c.next;c.next=null,null===s?a=u:s.next=u,s=c;var h=e.alternate;if(null!==h){var d=(h=h.updateQueue).lastBaseUpdate;d!==s&&(null===d?h.firstBaseUpdate=u:d.next=u,h.lastBaseUpdate=c)}}if(null!==a){for(d=i.baseState,s=0,h=u=c=null;;){l=a.lane;var f=a.eventTime;if((r&l)===l){null!==h&&(h=h.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(l=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(f,d,l);break e}d=p;break e;case 3:p.flags=-4097&p.flags|64;case 0:if(null==(l="function"==typeof(p=m.payload)?p.call(f,d,l):p))break e;d=o({},d,l);break e;case 2:pa=!0}}null!==a.callback&&(e.flags|=32,null===(l=i.effects)?i.effects=[a]:l.push(a))}else f={eventTime:f,lane:l,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===h?(u=h=f,c=d):h=h.next=f,s|=l;if(null===(a=a.next)){if(null===(l=i.shared.pending))break;a=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}null===h&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,Qo|=s,e.lanes=s,e.memoizedState=d}}function Ea(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(f(191,i));i.call(r)}}}var ka=(new c.Component).refs;function Sa(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:o({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var _a={isMounted:function(e){return!!(e=e._reactInternals)&&rt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=bl(),i=El(e),a=ya(r,i);a.payload=t,null!=n&&(a.callback=n),va(e,a),kl(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=bl(),i=El(e),a=ya(r,i);a.tag=1,a.payload=t,null!=n&&(a.callback=n),va(e,a),kl(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=bl(),r=El(e),i=ya(n,r);i.tag=2,null!=t&&(i.callback=t),va(e,i),kl(e,r,n)}};function Ta(e,t,n,r,i,a,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,s):!t.prototype||!t.prototype.isPureReactComponent||(!wr(n,r)||!wr(i,a))}function Ia(e,t,n){var r=!1,i=wi,a=t.contextType;return"object"==typeof a&&null!==a?a=fa(a):(i=_i(t)?ki:bi.current,a=(r=null!=(r=t.contextTypes))?Si(e,i):wi),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=_a,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ca(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_a.enqueueReplaceState(t,t.state,null)}function xa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ka,ma(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=fa(a):(a=_i(t)?ki:bi.current,i.context=Si(e,a)),ba(e,n,i,r),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(Sa(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&_a.enqueueReplaceState(i,i.state,null),ba(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4)}var Aa=Array.isArray;function Na(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(f(309));var r=n.stateNode}if(!r)throw Error(f(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===ka&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(f(284));if(!n._owner)throw Error(f(290,e))}return e}function Pa(e,t){if("textarea"!==e.type)throw Error(f(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function Ra(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=ec(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags=2,n):r:(t.flags=2,n):n}function s(t){return e&&null===t.alternate&&(t.flags=2),t}function o(e,t,n,r){return null===t||6!==t.tag?((t=ic(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=Na(e,t,n),r.return=e,r):((r=tc(n.type,n.key,n.props,null,e.mode,r)).ref=Na(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=ac(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,a){return null===t||7!==t.tag?((t=nc(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=ic(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case A:return(n=tc(t.type,t.key,t.props,null,e.mode,n)).ref=Na(e,null,t),n.return=e,n;case N:return(t=ac(t,e.mode,n)).return=e,t}if(Aa(t)||Q(t))return(t=nc(t,e.mode,n,null)).return=e,t;Pa(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case A:return n.key===i?n.type===P?u(e,t,n.props.children,r,i):l(e,t,n,r):null;case N:return n.key===i?c(e,t,n,r):null}if(Aa(n)||Q(n))return null!==i?null:u(e,t,n,r,null);Pa(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case A:return e=e.get(null===r.key?n:r.key)||null,r.type===P?u(t,e,r.props.children,i,r.key):l(t,e,r,i);case N:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(Aa(r)||Q(r))return u(t,e=e.get(n)||null,r,i,null);Pa(t,r)}return null}return function(o,l,c,u){var m="object"==typeof c&&null!==c&&c.type===P&&null===c.key;m&&(c=c.props.children);var g="object"==typeof c&&null!==c;if(g)switch(c.$$typeof){case A:e:{for(g=c.key,m=l;null!==m;){if(m.key===g){if(7===m.tag){if(c.type===P){n(o,m.sibling),(l=i(m,c.props.children)).return=o,o=l;break e}}else if(m.elementType===c.type){n(o,m.sibling),(l=i(m,c.props)).ref=Na(o,m,c),l.return=o,o=l;break e}n(o,m);break}t(o,m),m=m.sibling}c.type===P?((l=nc(c.props.children,o.mode,u,c.key)).return=o,o=l):((u=tc(c.type,c.key,c.props,null,o.mode,u)).ref=Na(o,l,c),u.return=o,o=u)}return s(o);case N:e:{for(m=c.key;null!==l;){if(l.key===m){if(4===l.tag&&l.stateNode.containerInfo===c.containerInfo&&l.stateNode.implementation===c.implementation){n(o,l.sibling),(l=i(l,c.children||[])).return=o,o=l;break e}n(o,l);break}t(o,l),l=l.sibling}(l=ac(c,o.mode,u)).return=o,o=l}return s(o)}if("string"==typeof c||"number"==typeof c)return c=""+c,null!==l&&6===l.tag?(n(o,l.sibling),(l=i(l,c)).return=o,o=l):(n(o,l),(l=ic(c,o.mode,u)).return=o,o=l),s(o);if(Aa(c))return function(i,s,o,l){for(var c=null,u=null,f=s,m=s=0,g=null;null!==f&&m<o.length;m++){f.index>m?(g=f,f=null):g=f.sibling;var y=d(i,f,o[m],l);if(null===y){null===f&&(f=g);break}e&&f&&null===y.alternate&&t(i,f),s=a(y,s,m),null===u?c=y:u.sibling=y,u=y,f=g}if(m===o.length)return n(i,f),c;if(null===f){for(;m<o.length;m++)null!==(f=h(i,o[m],l))&&(s=a(f,s,m),null===u?c=f:u.sibling=f,u=f);return c}for(f=r(i,f);m<o.length;m++)null!==(g=p(f,i,m,o[m],l))&&(e&&null!==g.alternate&&f.delete(null===g.key?m:g.key),s=a(g,s,m),null===u?c=g:u.sibling=g,u=g);return e&&f.forEach(function(e){return t(i,e)}),c}(o,l,c,u);if(Q(c))return function(i,s,o,l){var c=Q(o);if("function"!=typeof c)throw Error(f(150));if(null==(o=c.call(o)))throw Error(f(151));for(var u=c=null,m=s,g=s=0,y=null,v=o.next();null!==m&&!v.done;g++,v=o.next()){m.index>g?(y=m,m=null):y=m.sibling;var w=d(i,m,v.value,l);if(null===w){null===m&&(m=y);break}e&&m&&null===w.alternate&&t(i,m),s=a(w,s,g),null===u?c=w:u.sibling=w,u=w,m=y}if(v.done)return n(i,m),c;if(null===m){for(;!v.done;g++,v=o.next())null!==(v=h(i,v.value,l))&&(s=a(v,s,g),null===u?c=v:u.sibling=v,u=v);return c}for(m=r(i,m);!v.done;g++,v=o.next())null!==(v=p(m,i,g,v.value,l))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=a(v,s,g),null===u?c=v:u.sibling=v,u=v);return e&&m.forEach(function(e){return t(i,e)}),c}(o,l,c,u);if(g&&Pa(o,c),void 0===c&&!m)switch(o.tag){case 1:case 22:case 0:case 11:case 15:throw Error(f(152,ee(o.type)||"Component"))}return n(o,l)}}var Da=Ra(!0),Ma=Ra(!1),Oa={},La=gi(Oa),Fa=gi(Oa),Ua=gi(Oa);function Va(e){if(e===Oa)throw Error(f(174));return e}function za(e,t){switch(vi(Ua,t),vi(Fa,e),vi(La,Oa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ee(null,"");break;default:t=Ee(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}yi(La),vi(La,t)}function ja(){yi(La),yi(Fa),yi(Ua)}function Ba(e){Va(Ua.current);var t=Va(La.current),n=Ee(t,e.type);t!==n&&(vi(Fa,e),vi(La,n))}function $a(e){Fa.current===e&&(yi(La),yi(Fa))}var Wa=gi(0);function qa(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(64&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=null,Ha=null,Ga=!1;function Qa(e,t){var n=Xl(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Ja(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function Ya(e){if(Ga){var t=Ha;if(t){var n=t;if(!Ja(e,t)){if(!(t=ti(n.nextSibling))||!Ja(e,t))return e.flags=-1025&e.flags|2,Ga=!1,void(Ka=e);Qa(Ka,n)}Ka=e,Ha=ti(t.firstChild)}else e.flags=-1025&e.flags|2,Ga=!1,Ka=e}}function Xa(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Ka=e}function Za(e){if(e!==Ka)return!1;if(!Ga)return Xa(e),Ga=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Yr(t,e.memoizedProps))for(t=Ha;t;)Qa(e,t),t=ti(t.nextSibling);if(Xa(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(f(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){Ha=ti(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}Ha=null}}else Ha=Ka?ti(e.stateNode.nextSibling):null;return!0}function es(){Ha=Ka=null,Ga=!1}var ts=[];function ns(){for(var e=0;e<ts.length;e++)ts[e]._workInProgressVersionPrimary=null;ts.length=0}var rs=x.ReactCurrentDispatcher,is=x.ReactCurrentBatchConfig,as=0,ss=null,os=null,ls=null,cs=!1,us=!1;function hs(){throw Error(f(321))}function ds(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yr(e[n],t[n]))return!1;return!0}function fs(e,t,n,r,i,a){if(as=a,ss=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rs.current=null===e||null===e.memoizedState?Vs:zs,e=n(r,i),us){a=0;do{if(us=!1,!(25>a))throw Error(f(301));a+=1,ls=os=null,t.updateQueue=null,rs.current=js,e=n(r,i)}while(us)}if(rs.current=Us,t=null!==os&&null!==os.next,as=0,ls=os=ss=null,cs=!1,t)throw Error(f(300));return e}function ps(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ls?ss.memoizedState=ls=e:ls=ls.next=e,ls}function ms(){if(null===os){var e=ss.alternate;e=null!==e?e.memoizedState:null}else e=os.next;var t=null===ls?ss.memoizedState:ls.next;if(null!==t)ls=t,os=e;else{if(null===e)throw Error(f(310));e={memoizedState:(os=e).memoizedState,baseState:os.baseState,baseQueue:os.baseQueue,queue:os.queue,next:null},null===ls?ss.memoizedState=ls=e:ls=ls.next=e}return ls}function gs(e,t){return"function"==typeof t?t(e):t}function ys(e){var t=ms(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=os,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var o=s=a=null,l=i;do{var c=l.lane;if((as&c)===c)null!==o&&(o=o.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var u={lane:c,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};null===o?(s=o=u,a=r):o=o.next=u,ss.lanes|=c,Qo|=c}l=l.next}while(null!==l&&l!==i);null===o?a=r:o.next=s,yr(r,t.memoizedState)||($s=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=o,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function vs(e){var t=ms(),n=t.queue;if(null===n)throw Error(f(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);yr(a,t.memoizedState)||($s=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ws(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(null!==i?e=i===r:(e=e.mutableReadLanes,(e=(as&e)===e)&&(t._workInProgressVersionPrimary=r,ts.push(t))),e)return n(t._source);throw ts.push(t),Error(f(350))}function bs(e,t,n,r){var i=jo;if(null===i)throw Error(f(349));var a=t._getVersion,s=a(t._source),o=rs.current,l=o.useState(function(){return ws(i,t,n)}),c=l[1],u=l[0];l=ls;var h=e.memoizedState,d=h.refs,p=d.getSnapshot,m=h.source;h=h.subscribe;var g=ss;return e.memoizedState={refs:d,source:t,subscribe:r},o.useEffect(function(){d.getSnapshot=n,d.setSnapshot=c;var e=a(t._source);if(!yr(s,e)){e=n(t._source),yr(u,e)||(c(e),e=El(g),i.mutableReadLanes|=e&i.pendingLanes),e=i.mutableReadLanes,i.entangledLanes|=e;for(var r=i.entanglements,o=e;0<o;){var l=31-Yt(o),h=1<<l;r[l]|=e,o&=~h}}},[n,t,r]),o.useEffect(function(){return r(t._source,function(){var e=d.getSnapshot,n=d.setSnapshot;try{n(e(t._source));var r=El(g);i.mutableReadLanes|=r&i.pendingLanes}catch(e){n(function(){throw e})}})},[t,r]),yr(p,n)&&yr(m,t)&&yr(h,r)||((e={pending:null,dispatch:null,lastRenderedReducer:gs,lastRenderedState:u}).dispatch=c=Fs.bind(null,ss,e),l.queue=e,l.baseQueue=null,u=ws(i,t,n),l.memoizedState=l.baseState=u),u}function Es(e,t,n){return bs(ms(),e,t,n)}function ks(e){var t=ps();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:gs,lastRenderedState:e}).dispatch=Fs.bind(null,ss,e),[t.memoizedState,e]}function Ss(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ss.updateQueue)?(t={lastEffect:null},ss.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function _s(e){return e={current:e},ps().memoizedState=e}function Ts(){return ms().memoizedState}function Is(e,t,n,r){var i=ps();ss.flags|=e,i.memoizedState=Ss(1|t,n,void 0,void 0===r?null:r)}function Cs(e,t,n,r){var i=ms();r=void 0===r?null:r;var a=void 0;if(null!==os){var s=os.memoizedState;if(a=s.destroy,null!==r&&ds(r,s.deps))return void Ss(t,n,a,r)}ss.flags|=e,i.memoizedState=Ss(1|t,n,a,r)}function xs(e,t){return Is(516,4,e,t)}function As(e,t){return Cs(516,4,e,t)}function Ns(e,t){return Cs(4,2,e,t)}function Ps(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Rs(e,t,n){return n=null!=n?n.concat([e]):null,Cs(4,2,Ps.bind(null,t,e),n)}function Ds(){}function Ms(e,t){var n=ms();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Os(e,t){var n=ms();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ls(e,t){var n=Yi();Zi(98>n?98:n,function(){e(!0)}),Zi(97<n?97:n,function(){var n=is.transition;is.transition=1;try{e(!1),t()}finally{is.transition=n}})}function Fs(e,t,n){var r=bl(),i=El(e),a={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(null===s?a.next=a:(a.next=s.next,s.next=a),t.pending=a,s=e.alternate,e===ss||null!==s&&s===ss)us=cs=!0;else{if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=s(o,n);if(a.eagerReducer=s,a.eagerState=l,yr(l,o))return}catch(e){}kl(e,i,r)}}var Us={readContext:fa,useCallback:hs,useContext:hs,useEffect:hs,useImperativeHandle:hs,useLayoutEffect:hs,useMemo:hs,useReducer:hs,useRef:hs,useState:hs,useDebugValue:hs,useDeferredValue:hs,useTransition:hs,useMutableSource:hs,useOpaqueIdentifier:hs,unstable_isNewReconciler:!1},Vs={readContext:fa,useCallback:function(e,t){return ps().memoizedState=[e,void 0===t?null:t],e},useContext:fa,useEffect:xs,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Is(4,2,Ps.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Is(4,2,e,t)},useMemo:function(e,t){var n=ps();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ps();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=Fs.bind(null,ss,e),[r.memoizedState,e]},useRef:_s,useState:ks,useDebugValue:Ds,useDeferredValue:function(e){var t=ks(e),n=t[0],r=t[1];return xs(function(){var t=is.transition;is.transition=1;try{r(e)}finally{is.transition=t}},[e]),n},useTransition:function(){var e=ks(!1),t=e[0];return _s(e=Ls.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,n){var r=ps();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},bs(r,e,t,n)},useOpaqueIdentifier:function(){if(Ga){var e=!1,t=function(e){return{$$typeof:B,toString:e,valueOf:e}}(function(){throw e||(e=!0,n("r:"+(ri++).toString(36))),Error(f(355))}),n=ks(t)[1];return!(2&ss.mode)&&(ss.flags|=516,Ss(5,function(){n("r:"+(ri++).toString(36))},void 0,null)),t}return ks(t="r:"+(ri++).toString(36)),t},unstable_isNewReconciler:!1},zs={readContext:fa,useCallback:Ms,useContext:fa,useEffect:As,useImperativeHandle:Rs,useLayoutEffect:Ns,useMemo:Os,useReducer:ys,useRef:Ts,useState:function(){return ys(gs)},useDebugValue:Ds,useDeferredValue:function(e){var t=ys(gs),n=t[0],r=t[1];return As(function(){var t=is.transition;is.transition=1;try{r(e)}finally{is.transition=t}},[e]),n},useTransition:function(){var e=ys(gs)[0];return[Ts().current,e]},useMutableSource:Es,useOpaqueIdentifier:function(){return ys(gs)[0]},unstable_isNewReconciler:!1},js={readContext:fa,useCallback:Ms,useContext:fa,useEffect:As,useImperativeHandle:Rs,useLayoutEffect:Ns,useMemo:Os,useReducer:vs,useRef:Ts,useState:function(){return vs(gs)},useDebugValue:Ds,useDeferredValue:function(e){var t=vs(gs),n=t[0],r=t[1];return As(function(){var t=is.transition;is.transition=1;try{r(e)}finally{is.transition=t}},[e]),n},useTransition:function(){var e=vs(gs)[0];return[Ts().current,e]},useMutableSource:Es,useOpaqueIdentifier:function(){return vs(gs)[0]},unstable_isNewReconciler:!1},Bs=x.ReactCurrentOwner,$s=!1;function Ws(e,t,n,r){t.child=null===e?Ma(t,null,n,r):Da(t,e.child,n,r)}function qs(e,t,n,r,i){n=n.render;var a=t.ref;return da(t,i),r=fs(e,t,n,r,a,i),null===e||$s?(t.flags|=1,Ws(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,fo(e,t,i))}function Ks(e,t,n,r,i,a){if(null===e){var s=n.type;return"function"!=typeof s||Zl(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=tc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Hs(e,t,s,r,i,a))}return s=e.child,0===(i&a)&&(i=s.memoizedProps,(n=null!==(n=n.compare)?n:wr)(i,r)&&e.ref===t.ref)?fo(e,t,a):(t.flags|=1,(e=ec(s,r)).ref=t.ref,e.return=t,t.child=e)}function Hs(e,t,n,r,i,a){if(null!==e&&wr(e.memoizedProps,r)&&e.ref===t.ref){if($s=!1,0===(a&i))return t.lanes=e.lanes,fo(e,t,a);16384&e.flags&&($s=!0)}return Js(e,t,n,r,a)}function Gs(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(4&t.mode){if(!(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},Nl(t,e),null;t.memoizedState={baseLanes:0},Nl(t,null!==a?a.baseLanes:n)}else t.memoizedState={baseLanes:0},Nl(t,n);else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Nl(t,r);return Ws(e,t,i,n),t.child}function Qs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function Js(e,t,n,r,i){var a=_i(n)?ki:bi.current;return a=Si(t,a),da(t,i),n=fs(e,t,n,r,a,i),null===e||$s?(t.flags|=1,Ws(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,fo(e,t,i))}function Ys(e,t,n,r,i){if(_i(n)){var a=!0;xi(t)}else a=!1;if(da(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),Ia(t,n,r),xa(t,n,r,i),r=!0;else if(null===e){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,c=n.contextType;"object"==typeof c&&null!==c?c=fa(c):c=Si(t,c=_i(n)?ki:bi.current);var u=n.getDerivedStateFromProps,h="function"==typeof u||"function"==typeof s.getSnapshotBeforeUpdate;h||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(o!==r||l!==c)&&Ca(t,s,r,c),pa=!1;var d=t.memoizedState;s.state=d,ba(t,r,s,i),l=t.memoizedState,o!==r||d!==l||Ei.current||pa?("function"==typeof u&&(Sa(t,n,u,r),l=t.memoizedState),(o=pa||Ta(t,n,o,r,d,l,c))?(h||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4)):("function"==typeof s.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=o):("function"==typeof s.componentDidMount&&(t.flags|=4),r=!1)}else{s=t.stateNode,ga(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:ia(t.type,o),s.props=c,h=t.pendingProps,d=s.context,"object"==typeof(l=n.contextType)&&null!==l?l=fa(l):l=Si(t,l=_i(n)?ki:bi.current);var f=n.getDerivedStateFromProps;(u="function"==typeof f||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(o!==h||d!==l)&&Ca(t,s,r,l),pa=!1,d=t.memoizedState,s.state=d,ba(t,r,s,i);var p=t.memoizedState;o!==h||d!==p||Ei.current||pa?("function"==typeof f&&(Sa(t,n,f,r),p=t.memoizedState),(c=pa||Ta(t,n,c,r,d,p,l))?(u||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(r,p,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!=typeof s.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=l,r=c):("function"!=typeof s.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=256),r=!1)}return Xs(e,t,n,r,a,i)}function Xs(e,t,n,r,i,a){Qs(e,t);var s=!!(64&t.flags);if(!r&&!s)return i&&Ai(t,n,!1),fo(e,t,a);r=t.stateNode,Bs.current=t;var o=s&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&s?(t.child=Da(t,e.child,null,a),t.child=Da(t,null,o,a)):Ws(e,t,o,a),t.memoizedState=r.state,i&&Ai(t,n,!0),t.child}function Zs(e){var t=e.stateNode;t.pendingContext?Ii(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ii(0,t.context,!1),za(e,t.containerInfo)}var eo,to,no,ro,io={dehydrated:null,retryLane:0};function ao(e,t,n){var r,i=t.pendingProps,a=Wa.current,s=!1;return(r=!!(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&!!(2&a)),r?(s=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===i.fallback||!0===i.unstable_avoidThisFallback||(a|=1),vi(Wa,1&a),null===e?(void 0!==i.fallback&&Ya(t),e=i.children,a=i.fallback,s?(e=so(t,e,a,n),t.child.memoizedState={baseLanes:n},t.memoizedState=io,e):"number"==typeof i.unstable_expectedLoadTime?(e=so(t,e,a,n),t.child.memoizedState={baseLanes:n},t.memoizedState=io,t.lanes=33554432,e):((n=rc({mode:"visible",children:e},t.mode,n,null)).return=t,t.child=n)):(e.memoizedState,s?(i=lo(e,t,i.children,i.fallback,n),s=t.child,a=e.child.memoizedState,s.memoizedState=null===a?{baseLanes:n}:{baseLanes:a.baseLanes|n},s.childLanes=e.childLanes&~n,t.memoizedState=io,i):(n=oo(e,t,i.children,n),t.memoizedState=null,n))}function so(e,t,n,r){var i=e.mode,a=e.child;return t={mode:"hidden",children:t},2&i||null===a?a=rc(t,i,0,null):(a.childLanes=0,a.pendingProps=t),n=nc(n,i,r,null),a.return=e,n.return=e,a.sibling=n,e.child=a,n}function oo(e,t,n,r){var i=e.child;return e=i.sibling,n=ec(i,{mode:"visible",children:n}),!(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function lo(e,t,n,r,i){var a=t.mode,s=e.child;e=s.sibling;var o={mode:"hidden",children:n};return 2&a||t.child===s?n=ec(s,o):((n=t.child).childLanes=0,n.pendingProps=o,null!==(s=n.lastEffect)?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null),null!==e?r=ec(e,r):(r=nc(r,a,i,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function co(e,t){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),ha(e.return,t)}function uo(e,t,n,r,i,a){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=a)}function ho(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ws(e,t,r.children,n),2&(r=Wa.current))r=1&r|2,t.flags|=64;else{if(null!==e&&64&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&co(e,n);else if(19===e.tag)co(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(vi(Wa,r),2&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===qa(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),uo(t,!1,i,n,a,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===qa(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}uo(t,!0,n,null,a,t.lastEffect);break;case"together":uo(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function fo(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Qo|=t.lanes,0!==(n&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(f(153));if(null!==t.child){for(n=ec(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=ec(e,e.pendingProps)).return=t;n.sibling=null}return t.child}return null}function po(e,t){if(!Ga)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function mo(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:case 17:return _i(t.type)&&Ti(),null;case 3:return ja(),yi(Ei),yi(bi),ns(),(r=t.stateNode).pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Za(t)?t.flags|=4:r.hydrate||(t.flags|=256)),to(t),null;case 5:$a(t);var i=Va(Ua.current);if(n=t.type,null!==e&&null!=t.stateNode)no(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(null===t.stateNode)throw Error(f(166));return null}if(e=Va(La.current),Za(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ai]=t,r[si]=a,n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(e=0;e<Dr.length;e++)Fr(Dr[e],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":oe(r,a),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Fr("invalid",r);break;case"textarea":me(r,a),Fr("invalid",r)}for(var s in Pe(n,a),e=null,a)a.hasOwnProperty(s)&&(i=a[s],"children"===s?"string"==typeof i?r.textContent!==i&&(e=["children",i]):"number"==typeof i&&r.textContent!==""+i&&(e=["children",""+i]):m.hasOwnProperty(s)&&null!=i&&"onScroll"===s&&Fr("scroll",r));switch(n){case"input":re(r),ue(r,a,!0);break;case"textarea":re(r),ye(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=Hr)}r=e,t.updateQueue=r,null!==r&&(t.flags|=4)}else{switch(s=9===i.nodeType?i:i.ownerDocument,e===ve&&(e=be(n)),e===ve?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ai]=t,e[si]=r,eo(e,t,!1,!1),t.stateNode=e,s=Re(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)Fr(Dr[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":oe(e,r),i=se(e,r),Fr("invalid",e);break;case"option":i=de(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=o({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":me(e,r),i=pe(e,r),Fr("invalid",e);break;default:i=r}Pe(n,i);var l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];"style"===a?Ae(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&_e(e,c):"children"===a?"string"==typeof c?("textarea"!==n||""!==c)&&Te(e,c):"number"==typeof c&&Te(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(m.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Fr("scroll",e):null!=c&&C(e,a,c,s))}switch(n){case"input":re(e),ue(e,r,!1);break;case"textarea":re(e),ye(e);break;case"option":null!=r.value&&e.setAttribute("value",""+te(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?fe(e,!!r.multiple,a,!1):null!=r.defaultValue&&fe(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Hr)}Jr(n,r)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)ro(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(f(166));n=Va(Ua.current),Va(La.current),Za(t)?(r=t.stateNode,n=t.memoizedProps,r[ai]=t,r.nodeValue!==n&&(t.flags|=4)):((r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ai]=t,t.stateNode=r)}return null;case 13:return yi(Wa),r=t.memoizedState,64&t.flags?(t.lanes=n,t):(r=null!==r,n=!1,null===e?void 0!==t.memoizedProps.fallback&&Za(t):n=null!==e.memoizedState,r&&!n&&2&t.mode&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||1&Wa.current?0===Ko&&(Ko=3):(0!==Ko&&3!==Ko||(Ko=4),null===jo||!(134217727&Qo)&&!(134217727&Jo)||Il(jo,$o))),(r||n)&&(t.flags|=4),null);case 4:return ja(),to(t),null===e&&Vr(t.stateNode.containerInfo),null;case 10:return ua(t),null;case 19:if(yi(Wa),null===(r=t.memoizedState))return null;if(a=!!(64&t.flags),null===(s=r.rendering))if(a)po(r,!1);else{if(0!==Ko||null!==e&&64&e.flags)for(e=t.child;null!==e;){if(null!==(s=qa(e))){for(t.flags|=64,po(r,!1),null!==(a=s.updateQueue)&&(t.updateQueue=a,t.flags|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return vi(Wa,1&Wa.current|2),t.child}e=e.sibling}null!==r.tail&&Ji()>el&&(t.flags|=64,a=!0,po(r,!1),t.lanes=33554432)}else{if(!a)if(null!==(e=qa(s))){if(t.flags|=64,a=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),po(r,!0),null===r.tail&&"hidden"===r.tailMode&&!s.alternate&&!Ga)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Ji()-r.renderingStartTime>el&&1073741824!==n&&(t.flags|=64,a=!0,po(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=r.last)?n.sibling=s:t.child=s,r.last=s)}return null!==r.tail?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Ji(),n.sibling=null,t=Wa.current,vi(Wa,a?1&t|2:1&t),n):null;case 23:case 24:return Pl(),null!==e&&null!==e.memoizedState!=(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==r.mode&&(t.flags|=4),null}throw Error(f(156,t.tag))}function go(e){switch(e.tag){case 1:_i(e.type)&&Ti();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(ja(),yi(Ei),yi(bi),ns(),64&(t=e.flags))throw Error(f(285));return e.flags=-4097&t|64,e;case 5:return $a(e),null;case 13:return yi(Wa),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return yi(Wa),null;case 4:return ja(),null;case 10:return ua(e),null;case 23:case 24:return Pl(),null;default:return null}}function yo(e,t){try{var n="",r=t;do{n+=Z(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i}}function vo(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}eo=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},to=function(){},no=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Va(La.current);var a,s=null;switch(n){case"input":i=se(e,i),r=se(e,r),s=[];break;case"option":i=de(e,i),r=de(e,r),s=[];break;case"select":i=o({},i,{value:void 0}),r=o({},r,{value:void 0}),s=[];break;case"textarea":i=pe(e,i),r=pe(e,r),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Hr)}for(u in Pe(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(m.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(s=s||[]).push(u,c)):"children"===u?"string"!=typeof c&&"number"!=typeof c||(s=s||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(m.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),s||l===c||(s=[])):"object"==typeof c&&null!==c&&c.$$typeof===B?c.toString():(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}},ro=function(e,t,n,r){n!==r&&(t.flags|=4)};var wo="function"==typeof WeakMap?WeakMap:Map;function bo(e,t,n){(n=ya(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,al=r),vo(0,t)},n}function Eo(e,t,n){(n=ya(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return vo(0,t),r(i)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===sl?sl=new Set([this]):sl.add(this),vo(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}var ko="function"==typeof WeakSet?WeakSet:Set;function So(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Gl(e,t)}else t.current=null}function _o(e,t){switch(t.tag){case 0:case 11:case 15:case 22:case 5:case 6:case 4:case 17:return;case 1:if(256&t.flags&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:ia(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&ei(t.stateNode.containerInfo))}throw Error(f(163))}function To(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(!(3&~e.tag)){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var i=e;r=i.next,4&(i=i.tag)&&1&i&&(ql(n,e),Wl(n,e)),e=r}while(e!==t)}return;case 1:return e=n.stateNode,4&n.flags&&(null===t?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:ia(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=n.updateQueue)&&Ea(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:case 1:e=n.child.stateNode}Ea(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.flags&&Jr(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:case 19:case 17:case 20:case 21:case 23:case 24:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&At(n)))))}throw Error(f(163))}function Io(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)"function"==typeof(r=r.style).setProperty?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=null!=i&&i.hasOwnProperty("display")?i.display:null,r.style.display=xe("display",i)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Co(e,t){if(Pi&&"function"==typeof Pi.onCommitFiberUnmount)try{Pi.onCommitFiberUnmount(Ni,t)}catch(e){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,void 0!==i)if(4&r)ql(t,n);else{r=t;try{i()}catch(e){Gl(r,e)}}n=n.next}while(n!==e)}break;case 1:if(So(t),"function"==typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(e){Gl(t,e)}break;case 5:So(t);break;case 4:Do(e,t)}}function xo(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Ao(e){return 5===e.tag||3===e.tag||4===e.tag}function No(e){e:{for(var t=e.return;null!==t;){if(Ao(t))break e;t=t.return}throw Error(f(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(f(161))}16&n.flags&&(Te(t,""),n.flags&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||Ao(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.flags)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.flags)){n=n.stateNode;break e}}r?Po(e,n,t):Ro(e,n,t)}function Po(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Hr));else if(4!==r&&null!==(e=e.child))for(Po(e,t,n),e=e.sibling;null!==e;)Po(e,t,n),e=e.sibling}function Ro(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(Ro(e,t,n),e=e.sibling;null!==e;)Ro(e,t,n),e=e.sibling}function Do(e,t){for(var n,r,i=t,a=!1;;){if(!a){a=i.return;e:for(;;){if(null===a)throw Error(f(160));switch(n=a.stateNode,a.tag){case 5:r=!1;break e;case 3:case 4:n=n.containerInfo,r=!0;break e}a=a.return}a=!0}if(5===i.tag||6===i.tag){e:for(var s=e,o=i,l=o;;)if(Co(s,l),null!==l.child&&4!==l.tag)l.child.return=l,l=l.child;else{if(l===o)break e;for(;null===l.sibling;){if(null===l.return||l.return===o)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}r?(s=n,o=i.stateNode,8===s.nodeType?s.parentNode.removeChild(o):s.removeChild(o)):n.removeChild(i.stateNode)}else if(4===i.tag){if(null!==i.child){n=i.stateNode.containerInfo,r=!0,i.child.return=i,i=i.child;continue}}else if(Co(e,i),null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break;for(;null===i.sibling;){if(null===i.return||i.return===t)return;4===(i=i.return).tag&&(a=!1)}i.sibling.return=i.return,i=i.sibling}}function Mo(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{!(3&~r.tag)&&(e=r.destroy,r.destroy=void 0,void 0!==e&&e()),r=r.next}while(r!==n)}return;case 1:case 12:case 17:return;case 5:if(null!=(n=t.stateNode)){r=t.memoizedProps;var i=null!==e?e.memoizedProps:r;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,null!==a){for(n[si]=r,"input"===e&&"radio"===r.type&&null!=r.name&&le(n,r),Re(e,i),t=Re(e,r),i=0;i<a.length;i+=2){var s=a[i],o=a[i+1];"style"===s?Ae(n,o):"dangerouslySetInnerHTML"===s?_e(n,o):"children"===s?Te(n,o):C(n,s,o,t)}switch(e){case"input":ce(n,r);break;case"textarea":ge(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(a=r.value)?fe(n,!!r.multiple,a,!1):e!==!!r.multiple&&(null!=r.defaultValue?fe(n,!!r.multiple,r.defaultValue,!0):fe(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(f(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((n=t.stateNode).hydrate&&(n.hydrate=!1,At(n.containerInfo)));case 13:return null!==t.memoizedState&&(Zo=Ji(),Io(t.child,!0)),void Oo(t);case 19:return void Oo(t);case 23:case 24:return void Io(t,null!==t.memoizedState)}throw Error(f(163))}function Oo(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new ko),t.forEach(function(t){var r=Jl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Lo(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var Fo=Math.ceil,Uo=x.ReactCurrentDispatcher,Vo=x.ReactCurrentOwner,zo=0,jo=null,Bo=null,$o=0,Wo=0,qo=gi(0),Ko=0,Ho=null,Go=0,Qo=0,Jo=0,Yo=0,Xo=null,Zo=0,el=1/0;function tl(){el=Ji()+500}var nl,rl=null,il=!1,al=null,sl=null,ol=!1,ll=null,cl=90,ul=[],hl=[],dl=null,fl=0,pl=null,ml=-1,gl=0,yl=0,vl=null,wl=!1;function bl(){return 48&zo?Ji():-1!==ml?ml:ml=Ji()}function El(e){if(!(2&(e=e.mode)))return 1;if(!(4&e))return 99===Yi()?1:2;if(0===gl&&(gl=Go),0!==ra.transition){0!==yl&&(yl=null!==Xo?Xo.pendingLanes:0),e=gl;var t=4186112&~yl;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=Yi(),4&zo&&98===e?e=Ht(12,gl):e=Ht(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),gl),e}function kl(e,t,n){if(50<fl)throw fl=0,pl=null,Error(f(185));if(null===(e=Sl(e,t)))return null;Jt(e,t,n),e===jo&&(Jo|=t,4===Ko&&Il(e,$o));var r=Yi();1===t?8&zo&&!(48&zo)?Cl(e):(_l(e,n),0===zo&&(tl(),ta())):(!(4&zo)||98!==r&&99!==r||(null===dl?dl=new Set([e]):dl.add(e)),_l(e,n)),Xo=e}function Sl(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function _l(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Yt(s),l=1<<o,c=a[o];if(-1===c){if(0===(l&r)||0!==(l&i)){c=t,Wt(l);var u=$t;a[o]=10<=u?c+250:6<=u?c+5e3:-1}}else c<=t&&(e.expiredLanes|=l);s&=~l}if(r=qt(e,e===jo?$o:0),t=$t,0===r)null!==n&&(n!==Wi&&Mi(n),e.callbackNode=null,e.callbackPriority=0);else{if(null!==n){if(e.callbackPriority===t)return;n!==Wi&&Mi(n)}15===t?(n=Cl.bind(null,e),null===Ki?(Ki=[n],Hi=Di(Vi,na)):Ki.push(n),n=Wi):14===t?n=ea(99,Cl.bind(null,e)):(n=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(f(358,e))}}(t),n=ea(n,Tl.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Tl(e){if(ml=-1,yl=gl=0,48&zo)throw Error(f(327));var t=e.callbackNode;if($l()&&e.callbackNode!==t)return null;var n=qt(e,e===jo?$o:0);if(0===n)return null;var r=n,i=zo;zo|=16;var a=Ml();for(jo===e&&$o===r||(tl(),Rl(e,r));;)try{Fl();break}catch(t){Dl(e,t)}if(ca(),Uo.current=a,zo=i,null!==Bo?r=0:(jo=null,$o=0,r=Ko),0!==(Go&Jo))Rl(e,0);else if(0!==r){if(2===r&&(zo|=64,e.hydrate&&(e.hydrate=!1,ei(e.containerInfo)),0!==(n=Kt(e))&&(r=Ol(e,n))),1===r)throw t=Ho,Rl(e,0),Il(e,n),_l(e,Ji()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(f(345));case 2:case 5:zl(e);break;case 3:if(Il(e,n),(62914560&n)===n&&10<(r=Zo+500-Ji())){if(0!==qt(e,0))break;if(((i=e.suspendedLanes)&n)!==n){bl(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xr(zl.bind(null,e),r);break}zl(e);break;case 4:if(Il(e,n),(4186112&n)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-Yt(n);a=1<<s,(s=r[s])>i&&(i=s),n&=~a}if(n=i,10<(n=(120>(n=Ji()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Fo(n/1960))-n)){e.timeoutHandle=Xr(zl.bind(null,e),n);break}zl(e);break;default:throw Error(f(329))}}return _l(e,Ji()),e.callbackNode===t?Tl.bind(null,e):null}function Il(e,t){for(t&=~Yo,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Yt(t),r=1<<n;e[n]=-1,t&=~r}}function Cl(e){if(48&zo)throw Error(f(327));if($l(),e===jo&&0!==(e.expiredLanes&$o)){var t=$o,n=Ol(e,t);0!==(Go&Jo)&&(n=Ol(e,t=qt(e,t)))}else n=Ol(e,t=qt(e,0));if(0!==e.tag&&2===n&&(zo|=64,e.hydrate&&(e.hydrate=!1,ei(e.containerInfo)),0!==(t=Kt(e))&&(n=Ol(e,t))),1===n)throw n=Ho,Rl(e,0),Il(e,t),_l(e,Ji()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,zl(e),_l(e,Ji()),null}function xl(e,t){var n=zo;zo|=1;try{return e(t)}finally{0===(zo=n)&&(tl(),ta())}}function Al(e,t){var n=zo;zo&=-2,zo|=8;try{return e(t)}finally{0===(zo=n)&&(tl(),ta())}}function Nl(e,t){vi(qo,Wo),Wo|=t,Go|=t}function Pl(){Wo=qo.current,yi(qo)}function Rl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,Zr(n)),null!==Bo)for(n=Bo.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ti();break;case 3:ja(),yi(Ei),yi(bi),ns();break;case 5:$a(r);break;case 4:ja();break;case 13:case 19:yi(Wa);break;case 10:ua(r);break;case 23:case 24:Pl()}n=n.return}jo=e,Bo=ec(e.current,null),$o=Wo=Go=t,Ko=0,Ho=null,Yo=Jo=Qo=0}function Dl(e,t){for(;;){var n=Bo;try{if(ca(),rs.current=Us,cs){for(var r=ss.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}cs=!1}if(as=0,ls=os=ss=null,us=!1,Vo.current=null,null===n||null===n.return){Ko=1,Ho=t,Bo=null;break}e:{var a=e,s=n.return,o=n,l=t;if(t=$o,o.flags|=2048,o.firstEffect=o.lastEffect=null,null!==l&&"object"==typeof l&&"function"==typeof l.then){var c=l;if(!(2&o.mode)){var u=o.alternate;u?(o.updateQueue=u.updateQueue,o.memoizedState=u.memoizedState,o.lanes=u.lanes):(o.updateQueue=null,o.memoizedState=null)}var h=!!(1&Wa.current),d=s;do{var f;if(f=13===d.tag){var p=d.memoizedState;if(null!==p)f=null!==p.dehydrated;else{var m=d.memoizedProps;f=void 0!==m.fallback&&(!0!==m.unstable_avoidThisFallback||!h)}}if(f){var g=d.updateQueue;if(null===g){var y=new Set;y.add(c),d.updateQueue=y}else g.add(c);if(!(2&d.mode)){if(d.flags|=64,o.flags|=16384,o.flags&=-2981,1===o.tag)if(null===o.alternate)o.tag=17;else{var v=ya(-1,1);v.tag=2,va(o,v)}o.lanes|=1;break e}l=void 0,o=t;var w=a.pingCache;if(null===w?(w=a.pingCache=new wo,l=new Set,w.set(c,l)):void 0===(l=w.get(c))&&(l=new Set,w.set(c,l)),!l.has(o)){l.add(o);var b=Ql.bind(null,a,c,o);c.then(b,b)}d.flags|=4096,d.lanes=t;break e}d=d.return}while(null!==d);l=Error((ee(o.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==Ko&&(Ko=2),l=yo(l,o),d=s;do{switch(d.tag){case 3:a=l,d.flags|=4096,t&=-t,d.lanes|=t,wa(d,bo(0,a,t));break e;case 1:a=l;var E=d.type,k=d.stateNode;if(!(64&d.flags||"function"!=typeof E.getDerivedStateFromError&&(null===k||"function"!=typeof k.componentDidCatch||null!==sl&&sl.has(k)))){d.flags|=4096,t&=-t,d.lanes|=t,wa(d,Eo(d,a,t));break e}}d=d.return}while(null!==d)}Vl(n)}catch(e){t=e,Bo===n&&null!==n&&(Bo=n=n.return);continue}break}}function Ml(){var e=Uo.current;return Uo.current=Us,null===e?Us:e}function Ol(e,t){var n=zo;zo|=16;var r=Ml();for(jo===e&&$o===t||Rl(e,t);;)try{Ll();break}catch(t){Dl(e,t)}if(ca(),zo=n,Uo.current=r,null!==Bo)throw Error(f(261));return jo=null,$o=0,Ko}function Ll(){for(;null!==Bo;)Ul(Bo)}function Fl(){for(;null!==Bo&&!Oi();)Ul(Bo)}function Ul(e){var t=nl(e.alternate,e,Wo);e.memoizedProps=e.pendingProps,null===t?Vl(e):Bo=t,Vo.current=null}function Vl(e){var t=e;do{var n=t.alternate;if(e=t.return,2048&t.flags){if(null!==(n=go(t)))return n.flags&=2047,void(Bo=n);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}else{if(null!==(n=mo(n,t,Wo)))return void(Bo=n);if(24!==(n=t).tag&&23!==n.tag||null===n.memoizedState||1073741824&Wo||!(4&n.mode)){for(var r=0,i=n.child;null!==i;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}null!==e&&!(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}if(null!==(t=t.sibling))return void(Bo=t);Bo=t=e}while(null!==t);0===Ko&&(Ko=5)}function zl(e){var t=Yi();return Zi(99,jl.bind(null,e,t)),null}function jl(e,t){do{$l()}while(null!==ll);if(48&zo)throw Error(f(327));var n=e.finishedWork;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(f(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,a=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,o=e.expirationTimes;0<a;){var l=31-Yt(a),c=1<<l;i[l]=0,s[l]=-1,o[l]=-1,a&=~c}if(null!==dl&&!(24&r)&&dl.has(e)&&dl.delete(e),e===jo&&(Bo=jo=null,$o=0),1<n.flags?null!==n.lastEffect?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,null!==r){if(i=zo,zo|=32,Vo.current=null,Gr=nn,_r(s=Sr())){if("selectionStart"in s)o={start:s.selectionStart,end:s.selectionEnd};else e:if(o=(o=s.ownerDocument)&&o.defaultView||window,(c=o.getSelection&&o.getSelection())&&0!==c.rangeCount){o=c.anchorNode,a=c.anchorOffset,l=c.focusNode,c=c.focusOffset;try{o.nodeType,l.nodeType}catch(e){o=null;break e}var u=0,h=-1,d=-1,p=0,m=0,g=s,y=null;t:for(;;){for(var v;g!==o||0!==a&&3!==g.nodeType||(h=u+a),g!==l||0!==c&&3!==g.nodeType||(d=u+c),3===g.nodeType&&(u+=g.nodeValue.length),null!==(v=g.firstChild);)y=g,g=v;for(;;){if(g===s)break t;if(y===o&&++p===a&&(h=u),y===l&&++m===c&&(d=u),null!==(v=g.nextSibling))break;y=(g=y).parentNode}g=v}o=-1===h||-1===d?null:{start:h,end:d}}else o=null;o=o||{start:0,end:0}}else o=null;Qr={focusedElem:s,selectionRange:o},nn=!1,vl=null,wl=!1,rl=r;do{try{Bl()}catch(e){if(null===rl)throw Error(f(330));Gl(rl,e),rl=rl.nextEffect}}while(null!==rl);vl=null,rl=r;do{try{for(s=e;null!==rl;){var w=rl.flags;if(16&w&&Te(rl.stateNode,""),128&w){var b=rl.alternate;if(null!==b){var E=b.ref;null!==E&&("function"==typeof E?E(null):E.current=null)}}switch(1038&w){case 2:No(rl),rl.flags&=-3;break;case 6:No(rl),rl.flags&=-3,Mo(rl.alternate,rl);break;case 1024:rl.flags&=-1025;break;case 1028:rl.flags&=-1025,Mo(rl.alternate,rl);break;case 4:Mo(rl.alternate,rl);break;case 8:Do(s,o=rl);var k=o.alternate;xo(o),null!==k&&xo(k)}rl=rl.nextEffect}}catch(e){if(null===rl)throw Error(f(330));Gl(rl,e),rl=rl.nextEffect}}while(null!==rl);if(E=Qr,b=Sr(),w=E.focusedElem,s=E.selectionRange,b!==w&&w&&w.ownerDocument&&kr(w.ownerDocument.documentElement,w)){null!==s&&_r(w)&&(b=s.start,void 0===(E=s.end)&&(E=b),"selectionStart"in w?(w.selectionStart=b,w.selectionEnd=Math.min(E,w.value.length)):(E=(b=w.ownerDocument||document)&&b.defaultView||window).getSelection&&(E=E.getSelection(),o=w.textContent.length,k=Math.min(s.start,o),s=void 0===s.end?k:Math.min(s.end,o),!E.extend&&k>s&&(o=s,s=k,k=o),o=Er(w,k),a=Er(w,s),o&&a&&(1!==E.rangeCount||E.anchorNode!==o.node||E.anchorOffset!==o.offset||E.focusNode!==a.node||E.focusOffset!==a.offset)&&((b=b.createRange()).setStart(o.node,o.offset),E.removeAllRanges(),k>s?(E.addRange(b),E.extend(a.node,a.offset)):(b.setEnd(a.node,a.offset),E.addRange(b))))),b=[];for(E=w;E=E.parentNode;)1===E.nodeType&&b.push({element:E,left:E.scrollLeft,top:E.scrollTop});for("function"==typeof w.focus&&w.focus(),w=0;w<b.length;w++)(E=b[w]).element.scrollLeft=E.left,E.element.scrollTop=E.top}nn=!!Gr,Qr=Gr=null,e.current=n,rl=r;do{try{for(w=e;null!==rl;){var S=rl.flags;if(36&S&&To(w,rl.alternate,rl),128&S){b=void 0;var _=rl.ref;if(null!==_){var T=rl.stateNode;rl.tag,b=T,"function"==typeof _?_(b):_.current=b}}rl=rl.nextEffect}}catch(e){if(null===rl)throw Error(f(330));Gl(rl,e),rl=rl.nextEffect}}while(null!==rl);rl=null,qi(),zo=i}else e.current=n;if(ol)ol=!1,ll=e,cl=t;else for(rl=r;null!==rl;)t=rl.nextEffect,rl.nextEffect=null,8&rl.flags&&((S=rl).sibling=null,S.stateNode=null),rl=t;if(0===(r=e.pendingLanes)&&(sl=null),1===r?e===pl?fl++:(fl=0,pl=e):fl=0,n=n.stateNode,Pi&&"function"==typeof Pi.onCommitFiberRoot)try{Pi.onCommitFiberRoot(Ni,n,void 0,!(64&~n.current.flags))}catch(e){}if(_l(e,Ji()),il)throw il=!1,e=al,al=null,e;return 8&zo||ta(),null}function Bl(){for(;null!==rl;){var e=rl.alternate;wl||null===vl||(8&rl.flags?ot(rl,vl)&&(wl=!0):13===rl.tag&&Lo(e,rl)&&ot(rl,vl)&&(wl=!0));var t=rl.flags;256&t&&_o(e,rl),!(512&t)||ol||(ol=!0,ea(97,function(){return $l(),null})),rl=rl.nextEffect}}function $l(){if(90!==cl){var e=97<cl?97:cl;return cl=90,Zi(e,Kl)}return!1}function Wl(e,t){ul.push(t,e),ol||(ol=!0,ea(97,function(){return $l(),null}))}function ql(e,t){hl.push(t,e),ol||(ol=!0,ea(97,function(){return $l(),null}))}function Kl(){if(null===ll)return!1;var e=ll;if(ll=null,48&zo)throw Error(f(331));var t=zo;zo|=32;var n=hl;hl=[];for(var r=0;r<n.length;r+=2){var i=n[r],a=n[r+1],s=i.destroy;if(i.destroy=void 0,"function"==typeof s)try{s()}catch(e){if(null===a)throw Error(f(330));Gl(a,e)}}for(n=ul,ul=[],r=0;r<n.length;r+=2){i=n[r],a=n[r+1];try{var o=i.create;i.destroy=o()}catch(e){if(null===a)throw Error(f(330));Gl(a,e)}}for(o=e.current.firstEffect;null!==o;)e=o.nextEffect,o.nextEffect=null,8&o.flags&&(o.sibling=null,o.stateNode=null),o=e;return zo=t,ta(),!0}function Hl(e,t,n){va(e,t=bo(0,t=yo(n,t),1)),t=bl(),null!==(e=Sl(e,1))&&(Jt(e,1,t),_l(e,t))}function Gl(e,t){if(3===e.tag)Hl(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){Hl(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===sl||!sl.has(r))){var i=Eo(n,e=yo(t,e),1);if(va(n,i),i=bl(),null!==(n=Sl(n,1)))Jt(n,1,i),_l(n,i);else if("function"==typeof r.componentDidCatch&&(null===sl||!sl.has(r)))try{r.componentDidCatch(t,e)}catch(e){}break}}n=n.return}}function Ql(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=bl(),e.pingedLanes|=e.suspendedLanes&n,jo===e&&($o&n)===n&&(4===Ko||3===Ko&&(62914560&$o)===$o&&500>Ji()-Zo?Rl(e,0):Yo|=n),_l(e,t)}function Jl(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(2&(t=e.mode)?4&t?(0===gl&&(gl=Go),0===(t=Gt(62914560&~gl))&&(t=4194304)):t=99===Yi()?1:2:t=1),n=bl(),null!==(e=Sl(e,t))&&(Jt(e,t,n),_l(e,n))}function Yl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Xl(e,t,n,r){return new Yl(e,t,n,r)}function Zl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function ec(e,t){var n=e.alternate;return null===n?((n=Xl(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function tc(e,t,n,r,i,a){var s=2;if(r=e,"function"==typeof e)Zl(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case P:return nc(n.children,i,a,t);case $:s=8,i|=16;break;case R:s=8,i|=1;break;case D:return(e=Xl(12,n,t,8|i)).elementType=D,e.type=D,e.lanes=a,e;case F:return(e=Xl(13,n,t,i)).type=F,e.elementType=F,e.lanes=a,e;case U:return(e=Xl(19,n,t,i)).elementType=U,e.lanes=a,e;case W:return rc(n,i,a,t);case q:return(e=Xl(24,n,t,i)).elementType=q,e.lanes=a,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case M:s=10;break e;case O:s=9;break e;case L:s=11;break e;case V:s=14;break e;case z:s=16,r=null;break e;case j:s=22;break e}throw Error(f(130,null==e?e:typeof e,""))}return(t=Xl(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function nc(e,t,n,r){return(e=Xl(7,e,r,t)).lanes=n,e}function rc(e,t,n,r){return(e=Xl(23,e,r,t)).elementType=W,e.lanes=n,e}function ic(e,t,n){return(e=Xl(6,e,null,t)).lanes=n,e}function ac(e,t,n){return(t=Xl(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sc(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Qt(0),this.expirationTimes=Qt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qt(0),this.mutableSourceEagerHydrationData=null}function oc(e,t,n,r){var i=t.current,a=bl(),s=El(i);e:if(n){t:{if(rt(n=n._reactInternals)!==n||1!==n.tag)throw Error(f(170));var o=n;do{switch(o.tag){case 3:o=o.stateNode.context;break t;case 1:if(_i(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break t}}o=o.return}while(null!==o);throw Error(f(171))}if(1===n.tag){var l=n.type;if(_i(l)){n=Ci(n,l,o);break e}}n=o}else n=wi;return null===t.context?t.context=n:t.pendingContext=n,(t=ya(a,s)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),va(i,t),kl(i,s,a),s}function lc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function cc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function uc(e,t){cc(e,t),(e=e.alternate)&&cc(e,t)}function hc(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null;if(n=new sc(e,t,null!=n&&!0===n.hydrate),t=Xl(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,ma(t),e[oi]=n.current,Vr(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){var i=(t=r[e])._getVersion;i=i(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}function dc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function fc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a._internalRoot;if("function"==typeof i){var o=i;i=function(){var e=lc(s);o.call(e)}}oc(t,s,e,i)}else{if(a=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new hc(e,0,t?{hydrate:!0}:void 0)}(n,r),s=a._internalRoot,"function"==typeof i){var l=i;i=function(){var e=lc(s);l.call(e)}}Al(function(){oc(t,s,e,i)})}return lc(s)}function pc(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!dc(t))throw Error(f(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:N,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}nl=function(e,t,n){var r=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||Ei.current)$s=!0;else{if(0===(n&r)){switch($s=!1,t.tag){case 3:Zs(t),es();break;case 5:Ba(t);break;case 1:_i(t.type)&&xi(t);break;case 4:za(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;vi(aa,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!==(n&t.child.childLanes)?ao(e,t,n):(vi(Wa,1&Wa.current),null!==(t=fo(e,t,n))?t.sibling:null);vi(Wa,1&Wa.current);break;case 19:if(r=0!==(n&t.childLanes),64&e.flags){if(r)return ho(e,t,n);t.flags|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),vi(Wa,Wa.current),r)break;return null;case 23:case 24:return t.lanes=0,Gs(e,t,n)}return fo(e,t,n)}$s=!!(16384&e.flags)}else $s=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Si(t,bi.current),da(t,n),i=fs(null,t,r,e,i,n),t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,_i(r)){var a=!0;xi(t)}else a=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,ma(t);var s=r.getDerivedStateFromProps;"function"==typeof s&&Sa(t,r,s,e),i.updater=_a,t.stateNode=i,i._reactInternals=t,xa(t,r,e,n),t=Xs(null,t,r,!0,a,n)}else t.tag=0,Ws(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=(a=i._init)(i._payload),t.type=i,a=t.tag=function(e){if("function"==typeof e)return Zl(e)?1:0;if(null!=e){if((e=e.$$typeof)===L)return 11;if(e===V)return 14}return 2}(i),e=ia(i,e),a){case 0:t=Js(null,t,i,e,n);break e;case 1:t=Ys(null,t,i,e,n);break e;case 11:t=qs(null,t,i,e,n);break e;case 14:t=Ks(null,t,i,ia(i.type,e),r,n);break e}throw Error(f(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Js(e,t,r,i=t.elementType===r?i:ia(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ys(e,t,r,i=t.elementType===r?i:ia(r,i),n);case 3:if(Zs(t),r=t.updateQueue,null===e||null===r)throw Error(f(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,ga(e,t),ba(t,r,null,n),(r=t.memoizedState.element)===i)es(),t=fo(e,t,n);else{if((a=(i=t.stateNode).hydrate)&&(Ha=ti(t.stateNode.containerInfo.firstChild),Ka=t,a=Ga=!0),a){if(null!=(e=i.mutableSourceEagerHydrationData))for(i=0;i<e.length;i+=2)(a=e[i])._workInProgressVersionPrimary=e[i+1],ts.push(a);for(n=Ma(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|1024,n=n.sibling}else Ws(e,t,r,n),es();t=t.child}return t;case 5:return Ba(t),null===e&&Ya(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,Yr(r,i)?s=null:null!==a&&Yr(r,a)&&(t.flags|=16),Qs(e,t),Ws(e,t,s,n),t.child;case 6:return null===e&&Ya(t),null;case 13:return ao(e,t,n);case 4:return za(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Da(t,null,r,n):Ws(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,qs(e,t,r,i=t.elementType===r?i:ia(r,i),n);case 7:return Ws(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ws(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value;var o=t.type._context;if(vi(aa,o._currentValue),o._currentValue=a,null!==s)if(o=s.value,0===(a=yr(o,a)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(o,a):1073741823))){if(s.children===i.children&&!Ei.current){t=fo(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r&&0!==(c.observedBits&a)){1===o.tag&&((c=ya(-1,n&-n)).tag=2,va(o,c)),o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),ha(o.return,n),l.lanes|=n;break}c=c.next}}else s=10===o.tag&&o.type===t.type?null:o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}Ws(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(a=t.pendingProps).children,da(t,n),r=r(i=fa(i,a.unstable_observedBits)),t.flags|=1,Ws(e,t,r,n),t.child;case 14:return a=ia(i=t.type,t.pendingProps),Ks(e,t,i,a=ia(i.type,a),r,n);case 15:return Hs(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ia(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,_i(r)?(e=!0,xi(t)):e=!1,da(t,n),Ia(t,r,i),xa(t,r,i,n),Xs(null,t,r,!0,e,n);case 19:return ho(e,t,n);case 23:case 24:return Gs(e,t,n)}throw Error(f(156,t.tag))},hc.prototype.render=function(e){oc(e,this._internalRoot,null,null)},hc.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;oc(null,e,null,function(){t[oi]=null})},lt=function(e){13===e.tag&&(kl(e,4,bl()),uc(e,4))},ct=function(e){13===e.tag&&(kl(e,67108864,bl()),uc(e,67108864))},ut=function(e){if(13===e.tag){var t=bl(),n=El(e);kl(e,n,t),uc(e,n)}},ht=function(e,t){return t()},Me=function(e,t,n){switch(t){case"input":if(ce(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=di(r);if(!i)throw Error(f(90));ie(r),ce(r,i)}}}break;case"textarea":ge(e,n);break;case"select":null!=(t=n.value)&&fe(e,!!n.multiple,t,!1)}},ze=xl,je=function(e,t,n,r,i){var a=zo;zo|=4;try{return Zi(98,e.bind(null,t,n,r,i))}finally{0===(zo=a)&&(tl(),ta())}},Be=function(){!(49&zo)&&(function(){if(null!==dl){var e=dl;dl=null,e.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,_l(e,Ji())})}ta()}(),$l())},$e=function(e,t){var n=zo;zo|=2;try{return e(t)}finally{0===(zo=n)&&(tl(),ta())}};var mc={Events:[ui,hi,di,Ue,Ve,$l,{current:!1}]},gc={findFiberByHostInstance:ci,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},yc={bundleType:gc.bundleType,version:gc.version,rendererPackageName:gc.rendererPackageName,rendererConfig:gc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=st(e))?null:e.stateNode},findFiberByHostInstance:gc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Ni=vc.inject(yc),Pi=vc}catch(Se){}}var wc={__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:mc,createPortal:pc,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(f(188));throw Error(f(268,Object.keys(e)))}return e=null===(e=st(t))?null:e.stateNode},flushSync:function(e,t){var n=zo;if(48&n)return e(t);zo|=1;try{if(e)return Zi(99,e.bind(null,t))}finally{zo=n,ta()}},hydrate:function(e,t,n){if(!dc(t))throw Error(f(200));return fc(null,e,t,!0,n)},render:function(e,t,n){if(!dc(t))throw Error(f(200));return fc(null,e,t,!1,n)},unmountComponentAtNode:function(e){if(!dc(e))throw Error(f(40));return!!e._reactRootContainer&&(Al(function(){fc(null,null,e,!1,function(){e._reactRootContainer=null,e[oi]=null})}),!0)},unstable_batchedUpdates:xl,unstable_createPortal:function(e,t){return pc(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){if(!dc(n))throw Error(f(200));if(null==e||void 0===e._reactInternals)throw Error(f(38));return fc(e,t,n,!1,r)},version:"17.0.2"},bc=0,Ec={__interactionsRef:null,__subscriberRef:null,unstable_clear:function(e){return e()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++bc},unstable_subscribe:function(){},unstable_trace:function(e,t,n){return n()},unstable_unsubscribe:function(){},unstable_wrap:function(e){return e}};n(function(e,t){}),n(function(e){e.exports=Ec}),n(function(e,t){});var kc,Sc,_c=n(function(e){!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=wc}),Tc=e({__proto__:null,default:_c},[_c]);
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
function Ic(){return Ic=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ic.apply(this,arguments)}(Sc=kc||(kc={})).Pop="POP",Sc.Push="PUSH",Sc.Replace="REPLACE";const Cc="popstate";function xc(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,s=i.history,o=kc.Pop,l=null,c=u();null==c&&(c=0,s.replaceState(Ic({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function h(){o=kc.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:o,location:m.location,delta:t})}function d(e,t){o=kc.Push;let r=Rc(m.location,e,t);n&&n(r,e),c=u()+1;let h=Pc(r,c),d=m.createHref(r);try{s.pushState(h,"",d)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;i.location.assign(d)}a&&l&&l({action:o,location:m.location,delta:1})}function f(e,t){o=kc.Replace;let r=Rc(m.location,e,t);n&&n(r,e),c=u();let i=Pc(r,c),h=m.createHref(r);s.replaceState(i,"",h),a&&l&&l({action:o,location:m.location,delta:0})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:Dc(e);return n=n.replace(/ $/,"%20"),Ac(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let m={get action(){return o},get location(){return e(i,s)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cc,h),l=e,()=>{i.removeEventListener(Cc,h),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:d,replace:f,go:e=>s.go(e)};return m}(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return Rc("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:Dc(t)},null,e)}function Ac(e,t){if(!1===e||null==e)throw new Error(t)}function Nc(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function Pc(e,t){return{usr:e.state,key:e.key,idx:t}}function Rc(e,t,n,r){return void 0===n&&(n=null),Ic({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?Mc(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Dc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Mc(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var Oc,Lc;function Fc(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let i="string"==typeof t?Mc(t):t,a=Yc(i.pathname||"/",n);if(null==a)return null;let s=Uc(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(s);let o=null;for(let e=0;null==o&&e<s.length;++e){let t=Jc(a);o=Gc(s[e],t,r)}return o}(e,t,n,!1)}function Uc(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let s={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};s.relativePath.startsWith("/")&&(Ac(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),s.relativePath=s.relativePath.slice(r.length));let o=iu([r,s.relativePath]),l=n.concat(s);e.children&&e.children.length>0&&(Ac(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+o+'".'),Uc(e.children,t,l,o)),(null!=e.path||e.index)&&t.push({path:o,score:Hc(o,e.index),routesMeta:l})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of Vc(e.path))i(e,t,n);else i(e,t)}),t}function Vc(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let s=Vc(r.join("/")),o=[];return o.push(...s.map(e=>""===e?a:[a,e].join("/"))),i&&o.push(...s),o.map(t=>e.startsWith("/")&&""===t?"/":t)}(Lc=Oc||(Oc={})).data="data",Lc.deferred="deferred",Lc.redirect="redirect",Lc.error="error";const zc=/^:[\w-]+$/,jc=3,Bc=2,$c=1,Wc=10,qc=-2,Kc=e=>"*"===e;function Hc(e,t){let n=e.split("/"),r=n.length;return n.some(Kc)&&(r+=qc),t&&(r+=Bc),n.filter(e=>!Kc(e)).reduce((e,t)=>e+(zc.test(t)?jc:""===t?$c:Wc),r)}function Gc(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},a="/",s=[];for(let e=0;e<r.length;++e){let o=r[e],l=e===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=Qc({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},c),h=o.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=Qc({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),s.push({params:i,pathname:iu([a,u.pathname]),pathnameBase:au(iu([a,u.pathnameBase])),route:h}),"/"!==u.pathnameBase&&(a=iu([a,u.pathnameBase]))}return s}function Qc(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);Nc("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=o[n]||"";s=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=o[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:a,pathnameBase:s,pattern:e}}function Jc(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return Nc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Yc(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}const Xc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Zc(e,t){void 0===t&&(t="/");let n,{pathname:r,search:i="",hash:a=""}="string"==typeof e?Mc(e):e;if(r)if(s=r,Xc.test(s))n=r;else{if(r.includes("//")){let e=r;r=r.replace(/\/\/+/g,"/"),Nc(!1,"Pathnames cannot have embedded double slashes - normalizing "+e+" -> "+r)}n=r.startsWith("/")?eu(r.substring(1),"/"):eu(r,t)}else n=t;var s;return{pathname:n,search:su(i),hash:ou(a)}}function eu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function tu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function nu(e,t){let n=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function ru(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=Mc(e):(i=Ic({},e),Ac(!i.pathname||!i.pathname.includes("?"),tu("?","pathname","search",i)),Ac(!i.pathname||!i.pathname.includes("#"),tu("#","pathname","hash",i)),Ac(!i.search||!i.search.includes("#"),tu("#","search","hash",i)));let a,s=""===e||""===i.pathname,o=s?"/":i.pathname;if(null==o)a=n;else{let e=t.length-1;if(!r&&o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=Zc(i,a),c=o&&"/"!==o&&o.endsWith("/"),u=(s||"."===o)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const iu=e=>e.join("/").replace(/\/\/+/g,"/"),au=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),su=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ou=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";
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
function lu(){return lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lu.apply(this,arguments)}const cu=c.createContext(null),uu=c.createContext(null),hu=c.createContext(null),du=c.createContext(null),fu=c.createContext({outlet:null,matches:[],isDataRoute:!1}),pu=c.createContext(null);function mu(){return null!=c.useContext(du)}function gu(){return mu()||Ac(!1),c.useContext(du).location}function yu(e){c.useContext(hu).static||c.useLayoutEffect(e)}function vu(){let{isDataRoute:e}=c.useContext(fu);return e?function(){let{router:e}=function(){let e=c.useContext(cu);return e||Ac(!1),e}(Iu.UseNavigateStable),t=xu(Cu.UseNavigateStable),n=c.useRef(!1);return yu(()=>{n.current=!0}),c.useCallback(function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,lu({fromRouteId:t},i)))},[e,t])}():function(){mu()||Ac(!1);let e=c.useContext(cu),{basename:t,future:n,navigator:r}=c.useContext(hu),{matches:i}=c.useContext(fu),{pathname:a}=gu(),s=JSON.stringify(nu(i,n.v7_relativeSplatPath)),o=c.useRef(!1);return yu(()=>{o.current=!0}),c.useCallback(function(n,i){if(void 0===i&&(i={}),!o.current)return;if("number"==typeof n)return void r.go(n);let l=ru(n,JSON.parse(s),a,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:iu([t,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)},[t,r,s,a,e])}()}function wu(){let{matches:e}=c.useContext(fu),t=e[e.length-1];return t?t.params:{}}function bu(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=c.useContext(hu),{matches:i}=c.useContext(fu),{pathname:a}=gu(),s=JSON.stringify(nu(i,r.v7_relativeSplatPath));return c.useMemo(()=>ru(e,JSON.parse(s),a,"path"===n),[e,s,a,n])}function Eu(e,t){return function(e,t,n,r){mu()||Ac(!1);let{navigator:i}=c.useContext(hu),{matches:a}=c.useContext(fu),s=a[a.length-1],o=s?s.params:{};!s||s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u,h=gu();if(t){var d;let e="string"==typeof t?Mc(t):t;"/"===l||(null==(d=e.pathname)?void 0:d.startsWith(l))||Ac(!1),u=e}else u=h;let f=u.pathname||"/",p=f;if("/"!==l){let e=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=Fc(e,{pathname:p}),g=function(e,t,n,r){var i;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===r&&(r=null);if(null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=r)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,o=null==(i=n)?void 0:i.errors;if(null!=o){let e=s.findIndex(e=>e.route.id&&void 0!==(null==o?void 0:o[e.route.id]));e>=0||Ac(!1),s=s.slice(0,Math.min(s.length,e+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<s.length;e++){let t=s[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(u=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&void 0===e[t.route.id]&&(!r||void 0===r[t.route.id]);if(t.route.lazy||i){l=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight((e,r,i)=>{let a,h=!1,d=null,f=null;var p;n&&(a=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||Su,l&&(u<0&&0===i?(p="route-fallback",!1||Au[p]||(Au[p]=!0),h=!0,f=null):u===i&&(h=!0,f=r.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,i+1)),g=()=>{let t;return t=a?d:h?f:r.route.Component?c.createElement(r.route.Component,null):r.route.element?r.route.element:e,c.createElement(Tu,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?c.createElement(_u,{location:n.location,revalidation:n.revalidation,component:d,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:iu([l,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:iu([l,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);if(t&&g)return c.createElement(du.Provider,{value:{location:lu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:kc.Pop}},g);return g}(e,t)}function ku(){let e=function(){var e;let t=c.useContext(pu),n=function(){let e=c.useContext(uu);return e||Ac(!1),e}(Cu.UseRouteError),r=xu(Cu.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),n?c.createElement("pre",{style:r},n):null,null)}const Su=c.createElement(ku,null);class _u extends c.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?c.createElement(fu.Provider,{value:this.props.routeContext},c.createElement(pu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tu(e){let{routeContext:t,match:n,children:r}=e,i=c.useContext(cu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(fu.Provider,{value:t},r)}var Iu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Iu||{}),Cu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Cu||{});function xu(e){let t=function(){let e=c.useContext(fu);return e||Ac(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||Ac(!1),n.route.id}const Au={};function Nu(e){Ac(!1)}function Pu(e){let{basename:t="/",children:n=null,location:r,navigationType:i=kc.Pop,navigator:a,static:s=!1,future:o}=e;mu()&&Ac(!1);let l=t.replace(/^\/*/,"/"),u=c.useMemo(()=>({basename:l,navigator:a,static:s,future:lu({v7_relativeSplatPath:!1},o)}),[l,o,a,s]);"string"==typeof r&&(r=Mc(r));let{pathname:h="/",search:d="",hash:f="",state:p=null,key:m="default"}=r,g=c.useMemo(()=>{let e=Yc(h,l);return null==e?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[l,h,d,f,p,m,i]);return null==g?null:c.createElement(hu.Provider,{value:u},c.createElement(du.Provider,{children:n,value:g}))}function Ru(e){let{children:t,location:n}=e;return Eu(Du(t),n)}function Du(e,t){void 0===t&&(t=[]);let n=[];return c.Children.forEach(e,(e,r)=>{if(!c.isValidElement(e))return;let i=[...t,r];if(e.type===c.Fragment)return void n.push.apply(n,Du(e.props.children,i));e.type!==Nu&&Ac(!1),e.props.index&&e.props.children&&Ac(!1);let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Du(e.props.children,i)),n.push(a)}),n}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mu(){return Mu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mu.apply(this,arguments)}u.startTransition,new Promise(()=>{});const Ou=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}const Lu=u.startTransition;Tc.flushSync;function Fu(e){let{basename:t,children:n,future:r,window:i}=e,a=c.useRef();null==a.current&&(a.current=xc({window:i,v5Compat:!0}));let s=a.current,[o,l]=c.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},h=c.useCallback(e=>{u&&Lu?Lu(()=>l(e)):l(e)},[l,u]);return c.useLayoutEffect(()=>s.listen(h),[s,h]),c.useEffect(()=>{return null==(e=r)||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),void(t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation));var e,t},[r]),c.createElement(Pu,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:r})}u.useId;const Uu="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Vu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zu=c.forwardRef(function(e,t){let n,{onClick:r,relative:i,reloadDocument:a,replace:s,state:o,target:l,to:u,preventScrollReset:h,viewTransition:d}=e,f=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Ou),{basename:p}=c.useContext(hu),m=!1;if("string"==typeof u&&Vu.test(u)&&(n=u,Uu))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=Yc(t.pathname,p);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:m=!0}catch(e){}let g=function(e,t){let{relative:n}=void 0===t?{}:t;mu()||Ac(!1);let{basename:r,navigator:i}=c.useContext(hu),{hash:a,pathname:s,search:o}=bu(e,{relative:n}),l=s;return"/"!==r&&(l="/"===s?r:iu([r,s])),i.createHref({pathname:l,search:o,hash:a})}(u,{relative:i}),y=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:s,viewTransition:o}=void 0===t?{}:t,l=vu(),u=gu(),h=bu(e,{relative:s});return c.useCallback(t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:Dc(u)===Dc(h);l(e,{replace:n,state:i,preventScrollReset:a,relative:s,viewTransition:o})}},[u,l,h,r,i,n,e,a,s,o])}(u,{replace:s,state:o,target:l,preventScrollReset:h,relative:i,viewTransition:d});return c.createElement("a",Mu({},f,{href:n||g,onClick:m||a?r:function(e){r&&r(e),e.defaultPrevented||y(e)},ref:t,target:l}))});var ju,Bu,$u,Wu;(Bu=ju||(ju={})).UseScrollRestoration="useScrollRestoration",Bu.UseSubmit="useSubmit",Bu.UseSubmitFetcher="useSubmitFetcher",Bu.UseFetcher="useFetcher",Bu.useViewTransitionState="useViewTransitionState",(Wu=$u||($u={})).UseFetcher="useFetcher",Wu.UseFetchers="useFetchers",Wu.UseScrollRestoration="useScrollRestoration";const qu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ku={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=i>>2,u=(3&i)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;o||(d=64,a||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==s||null==o)throw new Hu;const l=i<<2|a>>4;if(r.push(l),64!==s){const e=a<<4&240|s>>2;if(r.push(e),64!==o){const e=s<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Hu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gu=function(e){return function(e){const t=qu(e);return Ku.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Qu=function(e){try{return Ku.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const Ju=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Yu=()=>{try{return Ju()||(()=>{if("undefined"==typeof process)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Qu(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Xu=e=>Yu()?.emulatorHosts?.[e],Zu=()=>Yu()?.config,eh=e=>Yu()?.[`_${e}`];
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
function nh(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function rh(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ih(){return!function(){const e=Yu()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ah(){try{return"object"==typeof indexedDB}catch(e){return!1}}function sh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}class oh extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,oh.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lh.prototype.create)}}class lh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?function(e,t){return e.replace(ch,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",s=`${this.serviceName}: ${a} (${r}).`;return new oh(r,s,n)}}const ch=/\{\$([^}]+)}/g;function uh(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(hh(n)&&hh(a)){if(!uh(n,a))return!1}else if(n!==a)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function hh(e){return null!==e&&"object"==typeof e}
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
 */function dh(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class fh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ph),void 0===r.error&&(r.error=ph),void 0===r.complete&&(r.complete=ph);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ph(){}
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
 */function mh(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
 */function gh(e){return e&&e._delegate?e._delegate:e}
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
 */function yh(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vh(e){return(await fetch(e,{credentials:"include"})).ok}class wh{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const bh="[DEFAULT]";
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
 */class Eh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new th;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:bh})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=bh){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=bh){return this.instances.has(e)}getOptions(e=bh){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===bh?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=bh){return this.component?this.component.multipleInstances?e:bh:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class kh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Eh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var Sh,_h;(_h=Sh||(Sh={}))[_h.DEBUG=0]="DEBUG",_h[_h.VERBOSE=1]="VERBOSE",_h[_h.INFO=2]="INFO",_h[_h.WARN=3]="WARN",_h[_h.ERROR=4]="ERROR",_h[_h.SILENT=5]="SILENT";const Th={debug:Sh.DEBUG,verbose:Sh.VERBOSE,info:Sh.INFO,warn:Sh.WARN,error:Sh.ERROR,silent:Sh.SILENT},Ih=Sh.INFO,Ch={[Sh.DEBUG]:"log",[Sh.VERBOSE]:"log",[Sh.INFO]:"info",[Sh.WARN]:"warn",[Sh.ERROR]:"error"},xh=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Ch[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Ah{constructor(e){this.name=e,this._logLevel=Ih,this._logHandler=xh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Sh))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Th[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Sh.DEBUG,...e),this._logHandler(this,Sh.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Sh.VERBOSE,...e),this._logHandler(this,Sh.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Sh.INFO,...e),this._logHandler(this,Sh.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Sh.WARN,...e),this._logHandler(this,Sh.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Sh.ERROR,...e),this._logHandler(this,Sh.ERROR,...e)}}let Nh,Ph;const Rh=new WeakMap,Dh=new WeakMap,Mh=new WeakMap,Oh=new WeakMap,Lh=new WeakMap;let Fh={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Dh.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Mh.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zh(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Uh(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ph||(Ph=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(jh(this),t),zh(Rh.get(this))}:function(...t){return zh(e.apply(jh(this),t))}:function(t,...n){const r=e.call(jh(this),t,...n);return Mh.set(r,t.sort?t.sort():[t]),zh(r)}}function Vh(e){return"function"==typeof e?Uh(e):(e instanceof IDBTransaction&&function(e){if(Dh.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Dh.set(e,t)}(e),t=e,(Nh||(Nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Fh):e);var t}function zh(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(zh(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&Rh.set(t,e)}).catch(()=>{}),Lh.set(t,e),t}(e);if(Oh.has(e))return Oh.get(e);const t=Vh(e);return t!==e&&(Oh.set(e,t),Lh.set(t,e)),t}const jh=e=>Lh.get(e);function Bh(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const s=indexedDB.open(e,t),o=zh(s);return r&&s.addEventListener("upgradeneeded",e=>{r(zh(s.result),e.oldVersion,e.newVersion,zh(s.transaction),e)}),n&&s.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}const $h=["get","getKey","getAll","getAllKeys","count"],Wh=["put","add","delete","clear"],qh=new Map;function Kh(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(qh.get(t))return qh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Wh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!$h.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let s=a.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&a.done]))[0]};return qh.set(t,a),a}Fh=(e=>({...e,get:(t,n,r)=>Kh(t,n)||e.get(t,n,r),has:(t,n)=>!!Kh(t,n)||e.has(t,n)}))(Fh);
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
class Hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Gh="@firebase/app",Qh="0.14.11",Jh=new Ah("@firebase/app"),Yh="@firebase/app-compat",Xh="@firebase/analytics-compat",Zh="@firebase/analytics",ed="@firebase/app-check-compat",td="@firebase/app-check",nd="@firebase/auth",rd="@firebase/auth-compat",id="@firebase/database",ad="@firebase/data-connect",sd="@firebase/database-compat",od="@firebase/functions",ld="@firebase/functions-compat",cd="@firebase/installations",ud="@firebase/installations-compat",hd="@firebase/messaging",dd="@firebase/messaging-compat",fd="@firebase/performance",pd="@firebase/performance-compat",md="@firebase/remote-config",gd="@firebase/remote-config-compat",yd="@firebase/storage",vd="@firebase/storage-compat",wd="@firebase/firestore",bd="@firebase/ai",Ed="@firebase/firestore-compat",kd="firebase",Sd="[DEFAULT]",_d={[Gh]:"fire-core",[Yh]:"fire-core-compat",[Zh]:"fire-analytics",[Xh]:"fire-analytics-compat",[td]:"fire-app-check",[ed]:"fire-app-check-compat",[nd]:"fire-auth",[rd]:"fire-auth-compat",[id]:"fire-rtdb",[ad]:"fire-data-connect",[sd]:"fire-rtdb-compat",[od]:"fire-fn",[ld]:"fire-fn-compat",[cd]:"fire-iid",[ud]:"fire-iid-compat",[hd]:"fire-fcm",[dd]:"fire-fcm-compat",[fd]:"fire-perf",[pd]:"fire-perf-compat",[md]:"fire-rc",[gd]:"fire-rc-compat",[yd]:"fire-gcs",[vd]:"fire-gcs-compat",[wd]:"fire-fst",[Ed]:"fire-fst-compat",[bd]:"fire-vertex","fire-js":"fire-js",[kd]:"fire-js-all"},Td=new Map,Id=new Map,Cd=new Map;function xd(e,t){try{e.container.addComponent(t)}catch(n){Jh.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ad(e){const t=e.name;if(Cd.has(t))return Jh.debug(`There were multiple attempts to register component ${t}.`),!1;Cd.set(t,e);for(const t of Td.values())xd(t,e);for(const t of Id.values())xd(t,e);return!0}function Nd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Pd(e){return null!=e&&void 0!==e.settings}
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
 */const Rd=new lh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class Dd{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new wh("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rd.create("app-deleted",{appName:this._name})}}
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
 */const Md="12.12.0";function Od(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:Sd,automaticDataCollectionEnabled:!0,...t},i=r.name;if("string"!=typeof i||!i)throw Rd.create("bad-app-name",{appName:String(i)});if(n||(n=Zu()),!n)throw Rd.create("no-options");const a=Td.get(i);if(a){if(uh(n,a.options)&&uh(r,a.config))return a;throw Rd.create("duplicate-app",{appName:i})}const s=new kh(i);for(const e of Cd.values())s.addComponent(e);const o=new Dd(n,r,s);return Td.set(i,o),o}function Ld(e=Sd){const t=Td.get(e);if(!t&&e===Sd&&Zu())return Od();if(!t)throw Rd.create("no-app",{appName:e});return t}function Fd(e,t,n){let r=_d[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Jh.warn(e.join(" "))}Ad(new wh(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
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
 */const Ud="firebase-heartbeat-store";let Vd=null;function zd(){return Vd||(Vd=Bh("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Ud)}catch(e){console.warn(e)}}}).catch(e=>{throw Rd.create("idb-open",{originalErrorMessage:e.message})})),Vd}async function jd(e,t){try{const n=(await zd()).transaction(Ud,"readwrite"),r=n.objectStore(Ud);await r.put(t,Bd(e)),await n.done}catch(e){if(e instanceof oh)Jh.warn(e.message);else{const t=Rd.create("idb-set",{originalErrorMessage:e?.message});Jh.warn(t.message)}}}function Bd(e){return`${e.name}!${e.options.appId}`}
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
 */class $d{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qd(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Wd();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Jh.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Wd(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Kd(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Gu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Jh.warn(e),""}}}function Wd(){return(new Date).toISOString().substring(0,10)}class qd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!ah()&&sh().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await zd()).transaction(Ud),n=await t.objectStore(Ud).get(Bd(e));return await t.done,n}catch(e){if(e instanceof oh)Jh.warn(e.message);else{const t=Rd.create("idb-get",{originalErrorMessage:e?.message});Jh.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return jd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return jd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Kd(e){return Gu(JSON.stringify({version:2,heartbeats:e})).length}var Hd;Hd="",Ad(new wh("platform-logger",e=>new Hh(e),"PRIVATE")),Ad(new wh("heartbeat",e=>new $d(e),"PRIVATE")),Fd(Gh,Qh,Hd),Fd(Gh,Qh,"esm2020"),Fd("fire-js","");function Gd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
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
Fd("firebase","12.12.1","app");const Qd=Gd,Jd=new lh("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Yd=new Ah("@firebase/auth");function Xd(e,...t){Yd.logLevel<=Sh.ERROR&&Yd.error(`Auth (${Md}): ${e}`,...t)}
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
 */function Zd(e,...t){throw rf(e,...t)}function ef(e,...t){return rf(e,...t)}function tf(e,t,n){const r={...Qd(),[t]:n};return new lh("auth","Firebase",r).create(t,{appName:e.name})}function nf(e){return tf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rf(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Jd.create(e,...t)}function af(e,t,...n){if(!e)throw rf(t,...n)}function sf(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Xd(t),new Error(t)}function of(e,t){e||sf(t)}
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
 */function lf(){return"undefined"!=typeof self&&self.location?.href||""}function cf(){return"undefined"!=typeof self&&self.location?.protocol||null}
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
 */function uf(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==cf()&&"https:"!==cf()&&!rh()&&!("connection"in navigator)||navigator.onLine}
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
class hf{constructor(e,t){this.shortDelay=e,this.longDelay=t,of(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nh())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return uf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function df(e,t){of(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class ff{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void sf("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void sf("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void sf("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const pf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},mf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gf=new hf(3e4,6e4);
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
 */function yf(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function vf(e,t,n,r,i={}){return wf(e,i,async()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const s=dh({key:e.config.apiKey,...a}).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:o,...i};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&yh(e.emulatorConfig.host)&&(l.credentials="include"),ff.fetch()(await bf(e,e.config.apiHost,n,s),l)})}async function wf(e,t,n){e._canInitEmulator=!1;const r={...pf,...t};try{const t=new Ef(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw kf(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const t=i.ok?a.errorMessage:a.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw kf(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw kf(e,"email-already-in-use",a);if("USER_DISABLED"===n)throw kf(e,"user-disabled",a);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw tf(e,o,s);Zd(e,o)}}catch(t){if(t instanceof oh)throw t;Zd(e,"network-request-failed",{message:String(t)})}}async function bf(e,t,n,r){const i=`${t}${n}?${r}`,a=e,s=a.config.emulator?df(e.config,i):`${e.config.apiScheme}://${i}`;if(mf.includes(n)&&(await a._persistenceManagerAvailable,"COOKIE"===a._getPersistenceType())){return a._getPersistence()._getFinalTarget(s).toString()}return s}class Ef{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ef(this.auth,"network-request-failed")),gf.get())})}}function kf(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ef(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function Sf(e,t){return vf(e,"POST","/v1/accounts:lookup",t)}
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
 */function _f(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Tf(e){return 1e3*Number(e)}function If(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Xd("JWT malformed, contained fewer than 3 sections"),null;try{const e=Qu(n);return e?JSON.parse(e):(Xd("Failed to decode base64 JWT payload"),null)}catch(e){return Xd("Caught error parsing JWT payload as JSON",e?.toString()),null}}function Cf(e){const t=If(e);return af(t,"internal-error"),af(void 0!==t.exp,"internal-error"),af(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function xf(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof oh&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Af{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}}
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
 */class Nf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_f(this.lastLoginAt),this.creationTime=_f(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Pf(e){const t=e.auth,n=await e.getIdToken(),r=await xf(e,Sf(t,{idToken:n}));af(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const a=i.providerUserInfo?.length?Rf(i.providerUserInfo):[],s=(o=e.providerData,l=a,[...o.filter(e=>!l.some(t=>t.providerId===e.providerId)),...l]);var o,l;const c=e.isAnonymous,u=!(e.email&&i.passwordHash||s?.length),h=!!c&&u,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Nf(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(e,d)}function Rf(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
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
class Df{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){af(e.idToken,"internal-error"),af(void 0!==e.idToken,"internal-error"),af(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Cf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){af(0!==e.length,"internal-error");const t=Cf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(af(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await wf(e,{},async()=>{const n=dh({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=await bf(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();s["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:s,body:n};return e.emulatorConfig&&yh(e.emulatorConfig.host)&&(o.credentials="include"),ff.fetch()(a,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new Df;return n&&(af("string"==typeof n,"internal-error",{appName:e}),a.refreshToken=n),r&&(af("string"==typeof r,"internal-error",{appName:e}),a.accessToken=r),i&&(af("number"==typeof i,"internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Df,this.toJSON())}_performRefresh(){return sf("not implemented")}}
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
 */function Mf(e,t){af("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Of{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Af(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Nf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await xf(this,this.stsTokenManager.getToken(this.auth,e));return af(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=gh(e),r=await n.getIdToken(t),i=If(r);af(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"==typeof i.firebase?i.firebase:void 0,s=a?.sign_in_provider;return{claims:i,token:r,authTime:_f(Tf(i.auth_time)),issuedAtTime:_f(Tf(i.iat)),expirationTime:_f(Tf(i.exp)),signInProvider:s||null,signInSecondFactor:a?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=gh(e);await Pf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(af(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Of({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){af(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Pf(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pd(this.auth.app))return Promise.reject(nf(this.auth));const e=await this.getIdToken();return await xf(this,async function(e,t){return vf(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,s=t.tenantId??void 0,o=t._redirectEventId??void 0,l=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:d,providerData:f,stsTokenManager:p}=t;af(u&&p,e,"internal-error");const m=Df.fromJSON(this.name,p);af("string"==typeof u,e,"internal-error"),Mf(n,e.name),Mf(r,e.name),af("boolean"==typeof h,e,"internal-error"),af("boolean"==typeof d,e,"internal-error"),Mf(i,e.name),Mf(a,e.name),Mf(s,e.name),Mf(o,e.name),Mf(l,e.name),Mf(c,e.name);const g=new Of({uid:u,auth:e,email:r,emailVerified:h,displayName:n,isAnonymous:d,photoURL:a,phoneNumber:i,tenantId:s,stsTokenManager:m,createdAt:l,lastLoginAt:c});return f&&Array.isArray(f)&&(g.providerData=f.map(e=>({...e}))),o&&(g._redirectEventId=o),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new Df;r.updateFromServerResponse(t);const i=new Of({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Pf(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];af(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?Rf(r.providerUserInfo):[],a=!(r.email&&r.passwordHash||i?.length),s=new Df;s.updateFromIdToken(n);const o=new Of({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:a}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Nf(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||i?.length)};return Object.assign(o,l),o}}
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
 */const Lf=new Map;function Ff(e){of(e instanceof Function,"Expected a class definition");let t=Lf.get(e);return t?(of(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lf.set(e,t),t)}
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
 */class Uf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uf.type="NONE";const Vf=Uf;
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
 */function zf(e,t,n){return`firebase:${e}:${t}:${n}`}class jf{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=zf(this.userKey,r.apiKey,i),this.fullPersistenceKey=zf("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Sf(this.auth,{idToken:e}).catch(()=>{});return t?Of._fromGetAccountInfoResponse(this.auth,t,e):null}return Of._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new jf(Ff(Vf),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||Ff(Vf);const a=zf(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(a);if(t){let r;if("string"==typeof t){const n=await Sf(e,{idToken:t}).catch(()=>{});if(!n)break;r=await Of._fromGetAccountInfoResponse(e,n,t)}else r=Of._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch{}const o=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length?(i=o[0],s&&await i._set(a,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(a)}catch{}})),new jf(i,e,n)):new jf(i,e,n)}}
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
 */function Bf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Kf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($f(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gf(t))return"Blackberry";if(Qf(t))return"Webos";if(Wf(t))return"Safari";if((t.includes("chrome/")||qf(t))&&!t.includes("edge/"))return"Chrome";if(Hf(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function $f(e=nh()){return/firefox\//i.test(e)}function Wf(e=nh()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function qf(e=nh()){return/crios\//i.test(e)}function Kf(e=nh()){return/iemobile/i.test(e)}function Hf(e=nh()){return/android/i.test(e)}function Gf(e=nh()){return/blackberry/i.test(e)}function Qf(e=nh()){return/webos/i.test(e)}function Jf(e=nh()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Yf(){return function(){const e=nh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Xf(e=nh()){return Jf(e)||Hf(e)||Qf(e)||Gf(e)||/windows phone/i.test(e)||Kf(e)}
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
 */function Zf(e,t=[]){let n;switch(e){case"Browser":n=Bf(nh());break;case"Worker":n=`${Bf(nh())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Md}/${r}`}
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
 */class ep{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e?.message})}}}
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
 */class tp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
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
 */class np{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ip(this),this.idTokenSubscription=new ip(this),this.beforeStateQueue=new ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ff(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await jf.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Sf(this,{idToken:e}),n=await Of._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Pd(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,a=await this.tryRedirectSignIn(e);t&&t!==i||!a?.user||(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return af(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Pf(e)}catch(e){if("auth/network-request-failed"!==e?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pd(this.app))return Promise.reject(nf(this));const t=e?gh(e):null;return t&&af(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&af(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pd(this.app)?Promise.reject(nf(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pd(this.app)?Promise.reject(nf(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ff(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return vf(e,"GET","/v2/passwordPolicy",yf(e,t))}
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
 */(this),t=new tp(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new lh("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return vf(e,"POST","/v2/accounts:revokeToken",yf(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ff(e)||this._popupRedirectResolver;af(t,this,"argument-error"),this.redirectPersistenceManager=await jf.create(this,[Ff(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let a=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(af(s,this,"internal-error"),s.then(()=>{a||i(this.currentUser)}),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{a=!0,i()}}{const n=e.addObserver(t);return()=>{a=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return af(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Pd(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&function(e,...t){Yd.logLevel<=Sh.WARN&&Yd.warn(`Auth (${Md}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}function rp(e){return gh(e)}class ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new fh(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return af(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let ap={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sp(e,t,n){const r=rp(e);af(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,a=op(t),{host:s,port:o}=function(e){const t=op(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:lp(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:lp(t)}}}(t),l=null===o?"":`:${o}`,c={url:`${a}//${s}${l}/`},u=Object.freeze({host:s,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return af(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void af(uh(c,r.config.emulator)&&uh(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,yh(s)?vh(`${a}//${s}${l}`):i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function op(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function lp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class cp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return sf("not implemented")}_getIdTokenResponse(e){return sf("not implemented")}_linkToIdToken(e,t){return sf("not implemented")}_getReauthenticationResolver(e){return sf("not implemented")}}
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
 */async function up(e,t){return async function(e,t,n,r,i={}){const a=await vf(e,t,n,r,i);return"mfaPendingCredential"in a&&Zd(e,"multi-factor-auth-required",{_serverResponse:a}),a}(e,"POST","/v1/accounts:signInWithIdp",yf(e,t))}
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
 */class hp extends cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zd("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const a=new hp(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return up(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,up(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,up(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dh(t)}return e}}
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
 */class dp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class fp extends dp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class pp extends fp{constructor(){super("facebook.com")}static credential(e){return hp._fromParams({providerId:pp.PROVIDER_ID,signInMethod:pp.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pp.credentialFromTaggedObject(e)}static credentialFromError(e){return pp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pp.credential(e.oauthAccessToken)}catch{return null}}}pp.FACEBOOK_SIGN_IN_METHOD="facebook.com",pp.PROVIDER_ID="facebook.com";
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
class mp extends fp{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hp._fromParams({providerId:mp.PROVIDER_ID,signInMethod:mp.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mp.credentialFromTaggedObject(e)}static credentialFromError(e){return mp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mp.credential(t,n)}catch{return null}}}mp.GOOGLE_SIGN_IN_METHOD="google.com",mp.PROVIDER_ID="google.com";
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
class gp extends fp{constructor(){super("github.com")}static credential(e){return hp._fromParams({providerId:gp.PROVIDER_ID,signInMethod:gp.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gp.credentialFromTaggedObject(e)}static credentialFromError(e){return gp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gp.credential(e.oauthAccessToken)}catch{return null}}}gp.GITHUB_SIGN_IN_METHOD="github.com",gp.PROVIDER_ID="github.com";
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
class yp extends fp{constructor(){super("twitter.com")}static credential(e,t){return hp._fromParams({providerId:yp.PROVIDER_ID,signInMethod:yp.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yp.credentialFromTaggedObject(e)}static credentialFromError(e){return yp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return yp.credential(t,n)}catch{return null}}}yp.TWITTER_SIGN_IN_METHOD="twitter.com",yp.PROVIDER_ID="twitter.com";
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
class vp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Of._fromIdTokenResponse(e,n,r),a=wp(n);return new vp({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=wp(n);return new vp({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function wp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class bp extends oh{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,bp.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new bp(e,t,n,r)}}function Ep(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw bp._fromErrorAndOperation(e,n,t,r);throw n})}const kp="__sak";
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
 */class Sp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kp,"1"),this.storage.removeItem(kp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class _p extends Sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Yf()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_p.type="LOCAL";const Tp=_p;
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
 */class Ip extends Sp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ip.type="SESSION";const Cp=Ip;
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
class xp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new xp(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(a).map(async e=>e(t.origin,i)),o=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ap(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */xp.receivers=[];class Np{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((s,o)=>{const l=Ap("",20);r.port1.start();const c=setTimeout(()=>{o(new Error("unsupported_event"))},n);a={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}
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
 */function Pp(){return window}
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
function Rp(){return void 0!==Pp().WorkerGlobalScope&&"function"==typeof Pp().importScripts}
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
const Dp="firebaseLocalStorageDb",Mp="firebaseLocalStorage",Op="fbase_key";class Lp{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fp(e,t){return e.transaction([Mp],t?"readwrite":"readonly").objectStore(Mp)}function Up(){const e=indexedDB.open(Dp,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Mp,{keyPath:Op})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Mp)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Dp);return new Lp(e).toPromise()}(),t(await Up()))})})}async function Vp(e,t,n){const r=Fp(e,!0).put({[Op]:t,value:n});return new Lp(r).toPromise()}function zp(e,t){const n=Fp(e,!0).delete(t);return new Lp(n).toPromise()}class jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Up()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xp._getInstance(Rp()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Np(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Up();return await Vp(e,kp,"1"),await zp(e,kp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vp(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=Fp(e,!1).get(t),r=await new Lp(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Fp(e,!1).getAll();return new Lp(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}jp.type="LOCAL";const Bp=jp;new hf(3e4,6e4);
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
class $p extends cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return up(e,this._buildIdpRequest())}_linkToIdToken(e,t){return up(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return up(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wp(e){
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
return async function(e,t,n=!1){if(Pd(e.app))return Promise.reject(nf(e));const r="signIn",i=await Ep(e,r,t),a=await vp._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}(e.auth,new $p(e),e.bypassAuthState)}function qp(e){const{auth:t,user:n}=e;return af(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e;if(Pd(r.app))return Promise.reject(nf(r));const i="reauthenticate";try{const a=await xf(e,Ep(r,i,t,e),n);af(a.idToken,r,"internal-error");const s=If(a.idToken);af(s,r,"internal-error");const{sub:o}=s;return af(e.uid===o,r,"user-mismatch"),vp._forOperation(e,i,a)}catch(e){throw"auth/user-not-found"===e?.code&&Zd(r,"user-mismatch"),e}}(n,new $p(e),e.bypassAuthState)}async function Kp(e){const{auth:t,user:n}=e;return af(n,t,"internal-error"),async function(e,t,n=!1){const r=await xf(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return vp._forOperation(e,"link",r)}(n,new $p(e),e.bypassAuthState)}
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
 */class Hp{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:s}=e;if(a)return void this.reject(a);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wp;case"linkViaPopup":case"linkViaRedirect":return Kp;case"reauthViaPopup":case"reauthViaRedirect":return qp;default:Zd(this.auth,"internal-error")}}resolve(e){of(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){of(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Gp=new hf(2e3,1e4);class Qp extends Hp{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Qp.currentPopupAction&&Qp.currentPopupAction.cancel(),Qp.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return af(e,this.auth,"internal-error"),e}async onExecution(){of(1===this.filter.length,"Popup operations only handle one event");const e=Ap();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ef(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ef(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qp.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ef(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Gp.get())};e()}}Qp.currentPopupAction=null;
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
const Jp="pendingRedirect",Yp=new Map;class Xp extends Hp{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Yp.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return zf(Jp,e.config.apiKey,e.name)}(t),r=function(e){return Ff(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Yp.set(this.auth._key(),e)}return this.bypassAuthState||Yp.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Zp(e,t){Yp.set(e._key(),t)}async function em(e,t,n=!1){if(Pd(e.app))return Promise.reject(nf(e));const r=rp(e),i=
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
function(e,t){return t?Ff(t):(af(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),a=new Xp(r,i,n),s=await a.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
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
 */class tm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rm(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!rm(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ef(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nm(e))}saveEventToCache(e){this.cachedEventUids.add(nm(e)),this.lastProcessedEventTime=Date.now()}}function nm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function rm({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
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
const im=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,am=/^https?/;async function sm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return vf(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(om(e))return}catch{}Zd(e,"unauthorized-domain")}function om(e){const t=lf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!am.test(n))return!1;if(im.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const lm=new hf(3e4,6e4);function cm(){const e=Pp().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function um(e){return new Promise((t,n)=>{function r(){cm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{cm(),n(ef(e,"network-request-failed"))},timeout:lm.get()})}if(Pp().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Pp().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Pp()[t]=()=>{gapi.load?r():n(ef(e,"network-request-failed"))},(i=`${ap.gapiScript}?onload=${t}`,ap.loadJS(i)).catch(e=>n(e))}r()}var i}).catch(e=>{throw hm=null,e})}let hm=null;
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
const dm=new hf(5e3,15e3),fm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mm(e){const t=e.config;af(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?df(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Md},i=pm.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${dh(r).slice(1)}`}async function gm(e){const t=await function(e){return hm=hm||um(e),hm}(e),n=Pp().gapi;return af(n,e,"internal-error"),t.open({where:document.body,url:mm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fm,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ef(e,"network-request-failed"),a=Pp().setTimeout(()=>{r(i)},dm.get());function s(){Pp().clearTimeout(a),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
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
 */const ym={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class vm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function wm(e,t,n,r=500,i=600){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l={...ym,width:r.toString(),height:i.toString(),top:a,left:s},c=nh().toLowerCase();n&&(o=qf(c)?"_blank":n),$f(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=nh()){return Jf(e)&&!!window.navigator?.standalone}(c)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",o),new vm(null);const h=window.open(t||"",o,u);af(h,e,"popup-blocked");try{h.focus()}catch(e){}return new vm(h)}const bm="__/auth/handler",Em="emulator/auth/handler",km=encodeURIComponent("fac");async function Sm(e,t,n,r,i,a){af(e.config.authDomain,e,"auth-domain-config-required"),af(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Md,eventId:i};if(t instanceof dp){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))s[e]=t}if(t instanceof fp){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const o=s;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];const l=await e._getAppCheckToken(),c=l?`#${km}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${bm}`;return df(e,Em)}
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
 */(e)}?${dh(o).slice(1)}${c}`}const _m="webStorageSupport";const Tm=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cp,this._completeRedirectFn=em,this._overrideRedirectResult=Zp}async _openPopup(e,t,n,r){of(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return wm(e,await Sm(e,t,n,lf(),r),Ap())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Pp().location.href=e}(await Sm(e,t,n,lf(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(of(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await gm(e),n=new tm(e);return t.register("authEvent",t=>{af(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_m,{type:_m},n=>{const r=n?.[0]?.[_m];void 0!==r&&t(!!r),Zd(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xf()||Wf()||Jf()}};var Im="@firebase/auth",Cm="1.13.0";
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
class xm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){af(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const Am=eh("authIdTokenMaxAge")||300;let Nm=null;var Pm;ap={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ef("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Pm="Browser",Ad(new wh("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=n.options;af(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:a,authDomain:s,clientPlatform:Pm,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zf(Pm)},l=new np(n,r,i,o);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ff);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Ad(new wh("auth-internal",e=>{const t=rp(e.getProvider("auth").getImmediate());return new xm(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fd(Im,Cm,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Pm)),Fd(Im,Cm,"esm2020");var Rm,Dm,Mm="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const r=Array(16);if("string"==typeof t)for(var i=0;i<16;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];let a,s=e.g[3];a=t+(s^n&(i^s))+r[0]+3614090360&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,s=t+(a<<12&4294967295|a>>>20),a=i+(n^s&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[3]+3250441966&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[4]+4118548399&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,s=t+(a<<12&4294967295|a>>>20),a=i+(n^s&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[7]+4249261313&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[8]+1770035416&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,s=t+(a<<12&4294967295|a>>>20),a=i+(n^s&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[11]+2304563134&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[12]+1804603682&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,s=t+(a<<12&4294967295|a>>>20),a=i+(n^s&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[15]+1236535329&4294967295,a=t+(i^s&((n=i+(a<<22&4294967295|a>>>10))^i))+r[1]+4129170786&4294967295,a=s+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[11]+643717713&4294967295,a=n+(s^t&((i=s+(a<<14&4294967295|a>>>18))^s))+r[0]+3921069994&4294967295,a=t+(i^s&((n=i+(a<<20&4294967295|a>>>12))^i))+r[5]+3593408605&4294967295,a=s+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[15]+3634488961&4294967295,a=n+(s^t&((i=s+(a<<14&4294967295|a>>>18))^s))+r[4]+3889429448&4294967295,a=t+(i^s&((n=i+(a<<20&4294967295|a>>>12))^i))+r[9]+568446438&4294967295,a=s+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[3]+4107603335&4294967295,a=n+(s^t&((i=s+(a<<14&4294967295|a>>>18))^s))+r[8]+1163531501&4294967295,a=t+(i^s&((n=i+(a<<20&4294967295|a>>>12))^i))+r[13]+2850285829&4294967295,a=s+(n^i&((t=n+(a<<5&4294967295|a>>>27))^n))+r[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[7]+1735328473&4294967295,a=n+(s^t&((i=s+(a<<14&4294967295|a>>>18))^s))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^s)+r[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,s=t+(a<<11&4294967295|a>>>21),a=i+(s^t^n)+r[11]+1839030562&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,s=t+(a<<11&4294967295|a>>>21),a=i+(s^t^n)+r[7]+4139469664&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,s=t+(a<<11&4294967295|a>>>21),a=i+(s^t^n)+r[3]+3572445317&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,s=t+(a<<11&4294967295|a>>>21),a=i+(s^t^n)+r[15]+530742520&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[2]+3299628645&4294967295,a=t+(i^((n=i+(a<<23&4294967295|a>>>9))|~s))+r[0]+4096336452&4294967295,a=s+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[14]+2878612391&4294967295,a=n+(s^((i=s+(a<<15&4294967295|a>>>17))|~t))+r[5]+4237533241&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~s))+r[12]+1700485571&4294967295,a=s+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[10]+4293915773&4294967295,a=n+(s^((i=s+(a<<15&4294967295|a>>>17))|~t))+r[1]+2240044497&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~s))+r[8]+1873313359&4294967295,a=s+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[6]+2734768916&4294967295,a=n+(s^((i=s+(a<<15&4294967295|a>>>17))|~t))+r[13]+1309151649&4294967295,a=t+(i^((n=i+(a<<21&4294967295|a>>>11))|~s))+r[4]+4149444226&4294967295,a=s+(n^((t=n+(a<<6&4294967295|a>>>26))|~i))+r[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[2]+718787259&4294967295,a=n+(s^((i=s+(a<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;const n=[];let r=!0;for(let i=e.length-1;i>=0;i--){const a=0|e[i];r&&a==t||(n[i]=a,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const r=t-this.blockSize,i=this.C;let a=this.h,s=0;for(;s<t;){if(0==a)for(;s<=r;)n(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(i[a++]=e.charCodeAt(s++),a==this.blockSize){n(this,i),a=0;break}}else for(;s<t;)if(i[a++]=e[s++],a==this.blockSize){n(this,i),a=0;break}}this.h=a,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var i={};function a(e){return-128<=e&&e<128?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],e<0?-1:0)}):new r([0|e],e<0?-1:0)}function s(e){if(isNaN(e)||!isFinite(e))return o;if(e<0)return d(s(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var o=a(0),l=a(1),c=a(16777216);function u(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new m(o,o);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(e.g.length>30){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;r.l(e)<=0;)n=y(n),r=y(r);var i=v(n,1),a=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var c=a.add(r);c.l(e)<=0&&(i=i.add(n),a=c),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=o;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),c=(a=s(n)).j(t);h(c)||c.l(e)>0;)c=(a=s(n-=r)).j(t);u(a)&&(a=l),i=i.add(a),e=f(e,c)}return new m(i,e)}function y(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function v(e,t){const n=t>>5;t%=32;const i=e.g.length-n,a=[];for(let r=0;r<i;r++)a[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(a,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(h(this))return"-"+d(this).toString(e);const t=s(Math.pow(e,6));var n=this;let r="";for(;;){const i=g(n,t).g;let a=(((n=f(n,i.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(u(n=i))return a+r;for(;a.length<6;)a="0"+a;r=a+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:u(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let i=0;for(let r=0;r<=t;r++){let t=i+(65535&this.i(r))+(65535&e.i(r)),a=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);i=a>>>16,t&=65535,a&=65535,n[r]=a<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(this.l(c)<0&&e.l(c)<0)return s(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(let t=0;t<e.g.length;t++){const r=this.i(i)>>>16,a=65535&this.i(i),s=e.i(t)>>>16,o=65535&e.i(t);n[2*i+2*t]+=a*o,p(n,2*i+2*t),n[2*i+2*t+1]+=r*o,p(n,2*i+2*t+1),n[2*i+2*t+1]+=a*s,p(n,2*i+2*t+1),n[2*i+2*t+2]+=r*s,p(n,2*i+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},e.B=function(e){return g(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,Dm=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=s,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=s(Math.pow(n,8));let i=o;for(let e=0;e<t.length;e+=8){var a=Math.min(8,t.length-e);const o=parseInt(t.substring(e,e+a),n);a<8?(a=s(Math.pow(n,a)),i=i.j(a).add(s(o))):(i=i.j(r),i=i.add(s(o)))}return i},Rm=r}).apply(void 0!==Mm?Mm:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Om,Lm,Fm,Um,Vm,zm,jm,Bm,$m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof $m&&$m];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(e,r){if(r)e:{var i=n;e=e.split(".");for(var a=0;a<e.length-1;a++){var s=e[a];if(!(s in i))break e;i=i[s]}(r=r(a=i[e=e[e.length-1]]))!=a&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var i=i||{},a=this||self;function s(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){return(l=o).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function u(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}var h="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function d(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let t=1;t<arguments.length;t++){const r=arguments[t];var n=typeof r;if("array"==(n="object"!=n?n:r?Array.isArray(r)?"array":n:"null")||"object"==n&&"number"==typeof r.length){n=e.length||0;const t=r.length||0;e.length=n+t;for(let i=0;i<t;i++)e[n+i]=r[i]}else e.push(r)}}function p(e){a.setTimeout(()=>{throw e},0)}function m(){var e=b;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var g=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new y,e=>e.reset());class y{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,b=new class{constructor(){this.h=this.g=null}add(e,t){const n=g.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},E=()=>{const e=Promise.resolve(void 0);v=()=>{e.then(k)}};function k(){for(var e;e=m();){try{e.h.call(e.g)}catch(e){p(e)}var t=g;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}w=!1}function S(){this.u=this.u,this.C=this.C}function _(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},_.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(e){}return e}();function I(e){return/^[\s\xa0]*$/.test(e)}function C(e,t){_.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}u(C,_),C.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&C.Z.h.call(this)},C.prototype.h=function(){C.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),A=0;function N(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++A,this.da=this.fa=!1}function P(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function R(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function D(e){const t={};for(const n in e)t[n]=e[n];return t}const M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<M.length;t++)n=M[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function L(e){this.src=e,this.g={},this.h=0}function F(e,t){const n=t.type;if(n in e.g){var r,i=e.g[n],a=Array.prototype.indexOf.call(i,t,void 0);(r=a>=0)&&Array.prototype.splice.call(i,a,1),r&&(P(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function U(e,t,n,r){for(let i=0;i<e.length;++i){const a=e[i];if(!a.da&&a.listener==t&&a.capture==!!n&&a.ha==r)return i}return-1}L.prototype.add=function(e,t,n,r,i){const a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);const s=U(e,t,r,i);return s>-1?(t=e[s],n||(t.fa=!1)):((t=new N(t,this.src,a,!!r,i)).fa=n,e.push(t)),t};var V="closure_lm_"+(1e6*Math.random()|0),z={};function j(e,t,n,r,i){if(r&&r.once)return $(e,t,n,r,i);if(Array.isArray(t)){for(let a=0;a<t.length;a++)j(e,t[a],n,r,i);return null}return n=J(n),e&&e[x]?e.J(t,n,s(r)?!!r.capture:!!r,i):B(e,t,n,!1,r,i)}function B(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");const o=s(i)?!!i.capture:!!i;let l=G(e);if(l||(e[V]=l=new L(e)),(n=l.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=H;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)T||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(K(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function $(e,t,n,r,i){if(Array.isArray(t)){for(let a=0;a<t.length;a++)$(e,t[a],n,r,i);return null}return n=J(n),e&&e[x]?e.K(t,n,s(r)?!!r.capture:!!r,i):B(e,t,n,!0,r,i)}function W(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)W(e,t[a],n,r,i);else r=s(r)?!!r.capture:!!r,n=J(n),e&&e[x]?(e=e.i,(a=String(t).toString())in e.g&&((n=U(t=e.g[a],n,r,i))>-1&&(P(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[a],e.h--)))):e&&(e=G(e))&&(t=e.g[t.toString()],e=-1,t&&(e=U(t,n,r,i)),(n=e>-1?t[e]:null)&&q(n))}function q(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[x])F(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(K(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=G(t))?(F(n,e),0==n.h&&(n.src=null,t[V]=null)):P(e)}}}function K(e){return e in z?z[e]:z[e]="on"+e}function H(e,t){if(e.da)e=!0;else{t=new C(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&q(e),e=n.call(r,t)}return e}function G(e){return(e=e[V])instanceof L?e:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function J(e){return"function"==typeof e?e:(e[Q]||(e[Q]=function(t){return e.handleEvent(t)}),e[Q])}function Y(){S.call(this),this.i=new L(this),this.M=this,this.G=null}function X(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new _(t,e);else if(t instanceof _)t.target=t.target||e;else{var i=t;O(t=new _(r,e),i)}let a,s;if(i=!0,n)for(s=n.length-1;s>=0;s--)a=t.g=n[s],i=Z(a,r,!0,t)&&i;if(a=t.g=e,i=Z(a,r,!0,t)&&i,i=Z(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)a=t.g=n[s],i=Z(a,r,!1,t)&&i}function Z(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let i=!0;for(let a=0;a<t.length;++a){const s=t[a];if(s&&!s.da&&s.capture==n){const t=s.listener,n=s.ha||s.src;s.fa&&F(e.i,s),i=!1!==t.call(n,r)&&i}}return i&&!r.defaultPrevented}function ee(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=l(e.handleEvent,e)}return Number(t)>2147483647?-1:a.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,ee(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}u(Y,S),Y.prototype[x]=!0,Y.prototype.removeEventListener=function(e,t,n,r){W(this,e,t,n,r)},Y.prototype.N=function(){if(Y.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)P(n[e]);delete e.g[t],e.h--}}this.G=null},Y.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Y.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class te extends S{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ee(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ne(e){S.call(this),this.h=e,this.g={}}u(ne,S);var re=[];function ie(e){R(e.g,function(e,t){this.g.hasOwnProperty(t)&&q(e)},e),e.g={}}ne.prototype.N=function(){ne.Z.N.call(this),ie(this)},ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ae=a.JSON.stringify,se=a.JSON.parse,oe=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function le(){}function ce(){}var ue={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function he(){_.call(this,"d")}function de(){_.call(this,"c")}u(he,_),u(de,_);var fe={},pe=null;function me(){return pe=pe||new Y}function ge(e){_.call(this,fe.Ia,e)}function ye(e){const t=me();X(t,new ge(t))}function ve(e,t){_.call(this,fe.STAT_EVENT,e),this.stat=t}function we(e){const t=me();X(t,new ve(t,e))}function be(e,t){_.call(this,fe.Ja,e),this.size=t}function Ee(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}function ke(){this.g=!0}function Se(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const a=JSON.parse(t);if(a)for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var n=a[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let e=1;e<r.length;e++)r[e]=""}}}return ae(a)}catch(e){return t}}(e,n)+(r?" "+r:"")})}fe.Ia="serverreachability",u(ge,_),fe.STAT_EVENT="statevent",u(ve,_),fe.Ja="timingevent",u(be,_),ke.prototype.ua=function(){this.g=!1},ke.prototype.info=function(){};var _e,Te={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ie={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Ce(){}function xe(e){return encodeURIComponent(String(e))}function Ae(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ne(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Pe}function Pe(){this.i=null,this.g="",this.h=!1}u(Ce,le),Ce.prototype.g=function(){return new XMLHttpRequest},_e=new Ce;var Re={},De={};function Me(e,t,n){e.M=1,e.A=at(et(t)),e.u=n,e.R=!0,Oe(e,null)}function Oe(e,t){e.F=Date.now(),Ue(e),e.B=et(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),wt(n.i,"t",r),e.C=0,n=e.j.L,e.h=new Pe,e.g=sn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new te(l(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var i="readystatechange";Array.isArray(i)||(i&&(re[0]=i.toString()),i=re);for(let e=0;e<i.length;e++){const a=j(n,i[e],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.J?D(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),ye(),function(e,t,n,r,i,a){e.info(function(){if(e.g)if(a){var s="",o=a.split("&");for(let e=0;e<o.length;e++){var l=o[e].split("=");if(l.length>1){const e=l[0];l=l[1];const t=e.split("_");s=t.length>=2&&"type"==t[1]?s+(e+"=")+l+"&":s+(e+"=redacted&")}}}else s=null;else s=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+s})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Le(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function Fe(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?De:(n=Number(t.substring(n,r)),isNaN(n)?Re:(r+=1)+n>t.length?De:(t=t.slice(r,r+n),e.C=r+n,t))}function Ue(e){e.T=Date.now()+e.H,Ve(e,e.H)}function Ve(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=Ee(l(e.aa,e),t)}function ze(e){e.D&&(a.clearTimeout(e.D),e.D=null)}function je(e){0==e.j.I||e.K||en(e.j,e)}function Be(e){ze(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,ie(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function $e(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||Ge(n.h,e)))if(!e.L&&Ge(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;Zt(n),$t(n)}Jt(n),we(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Ee(l(n.Va,n),6e3));He(n.h)<=1&&n.ta&&(n.ta=void 0)}else nn(n,11)}else if((e.L||n.g==e)&&Zt(n),!I(t))for(i=n.Ba.g.parse(t),t=0;t<i.length;t++){let l=i[t];const u=l[0];if(!(u<=n.K))if(n.K=u,l=l[1],2==n.I)if("c"==l[0]){n.M=l[1],n.ba=l[2];const t=l[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const i=l[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&u>0&&(r=1.5*u,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var a=r.h;a.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(a.j=a.l,a.g=new Set,a.h&&(Qe(a,a.h),a.h=null))}if(r.G){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,it(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var s=e;if((r=n).na=an(r,r.L?r.ba:null,r.W),s.L){Je(r.h,s);var o=s,c=r.O;c&&(o.H=c),o.D&&(ze(o),Ue(o)),r.g=s}else Qt(r);n.i.length>0&&qt(n)}else"stop"!=l[0]&&"close"!=l[0]||nn(n,7);else 3==n.I&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?nn(n,7):Bt(n):"noop"!=l[0]&&n.l&&n.l.qa(l),n.A=0)}ye()}catch(e){}}Ne.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==Ut(e)?t.j():this.Y(e)},Ne.prototype.Y=function(e){try{if(e==this.g)e:{const l=Ut(this.g),c=this.g.ya();this.g.ca();if(!(l<3)&&(3!=l||this.g&&(this.h.h||this.g.la()||Vt(this.g)))){this.K||4!=l||7==c||ye(),ze(this);var t=this.g.ca();this.X=t;var n=function(e){if(!Le(e))return e.g.la();const t=Vt(e.g);if(""===t)return"";let n="";const r=t.length,i=4==Ut(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return Be(e),je(e),"";e.h.i=new a.TextDecoder}for(let a=0;a<r;a++)e.h.h=!0,n+=e.h.i.decode(t[a],{stream:!(i&&a==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,r,i,a,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+s})}(this.i,this.v,this.B,this.l,this.S,l,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(r)){var s=r;break t}}s=null}if(!(e=s)){this.o=!1,this.m=3,we(12),Be(this),je(this);break e}Se(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$e(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=Fe(this,n),t==De){4==l&&(this.m=4,we(14),e=!1),Se(this.i,this.l,null,"[Incomplete Response]");break}if(t==Re){this.m=4,we(15),Se(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}Se(this.i,this.l,t,null),$e(this,t)}if(Le(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=l||0!=n.length||this.h.h||(this.m=1,we(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Yt(o),o.P=!0,we(11))}}else Se(this.i,this.l,n,"[Invalid Chunked Response]"),Be(this),je(this)}else Se(this.i,this.l,n,null),$e(this,n);4==l&&Be(this),this.o&&!this.K&&(4==l?en(this.j,this):(this.o=!1,Ue(this)))}else(function(e){const t={};e=(e.g&&Ut(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(I(e[r]))continue;var n=Ae(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const a=t[i]||[];t[i]=a,a.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,we(12)):(this.m=0,we(13)),Be(this),je(this)}}}catch(e){}},Ne.prototype.cancel=function(){this.K=!0,Be(this)},Ne.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(ye(),we(17)),Be(this),this.m=2,je(this)):Ve(this,this.T-e)};var We=class{constructor(e,t){this.g=e,this.map=t}};function qe(e){this.l=e||10,a.PerformanceNavigationTiming?e=(e=a.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ke(e){return!!e.h||!!e.g&&e.g.size>=e.j}function He(e){return e.h?1:e.g?e.g.size:0}function Ge(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Qe(e,t){e.g?e.g.add(t):e.h=t}function Je(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ye(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return d(e.i)}qe.prototype.cancel=function(){if(this.i=Ye(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Xe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ze(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Ze?(this.l=e.l,tt(this,e.j),this.o=e.o,this.g=e.g,nt(this,e.u),this.h=e.h,rt(this,bt(e.i)),this.m=e.m):e&&(t=String(e).match(Xe))?(this.l=!1,tt(this,t[1]||"",!0),this.o=st(t[2]||""),this.g=st(t[3]||"",!0),nt(this,t[4]),this.h=st(t[5]||"",!0),rt(this,t[6]||"",!0),this.m=st(t[7]||"")):(this.l=!1,this.i=new pt(null,this.l))}function et(e){return new Ze(e)}function tt(e,t,n){e.j=n?st(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nt(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function rt(e,t,n){t instanceof pt?(e.i=t,function(e,t){t&&!e.j&&(mt(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(gt(this,t),wt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=ot(t,dt)),e.i=new pt(t,e.l))}function it(e,t,n){e.i.set(t,n)}function at(e){return it(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function st(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ot(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,lt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function lt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ze.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(ot(t,ct,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ot(t,ct,!0),"@"),e.push(xe(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ot(n,"/"==n.charAt(0)?ht:ut,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ot(n,ft)),e.join("")},Ze.prototype.resolve=function(e){const t=et(this);let n=!!e.j;n?tt(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)nt(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=t.h.lastIndexOf("/");-1!=i&&(r=t.h.slice(0,i+1)+r)}if(".."==(i=r)||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const e=[];for(let t=0;t<i.length;){const n=i[t++];"."==n?r&&t==i.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==i.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=i}return n?t.h=r:n=""!==e.i.toString(),n?rt(t,bt(e.i)):n=!!e.m,n&&(t.m=e.m),t};var ct=/[#\/\?@]/g,ut=/[#\?:]/g,ht=/[#\?]/g,dt=/[#\?@]/g,ft=/#/g;function pt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let i,a=null;r>=0?(i=e[n].substring(0,r),a=e[n].substring(r+1)):i=e[n],t(i,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function gt(e,t){mt(e),t=Et(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function yt(e,t){return mt(e),t=Et(e,t),e.g.has(t)}function vt(e,t){mt(e);let n=[];if("string"==typeof t)yt(e,t)&&(n=n.concat(e.g.get(Et(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function wt(e,t,n){gt(e,t),n.length>0&&(e.i=null,e.g.set(Et(e,t),d(n)),e.h+=n.length)}function bt(e){const t=new pt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function Et(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function kt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(e){}}function St(){this.g=new oe}function _t(e){this.i=e.Sb||null,this.h=e.ab||!1}function Tt(e,t){Y.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function It(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function Ct(e){e.readyState=4,e.l=null,e.j=null,e.B=null,xt(e)}function xt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function At(e){let t="";return R(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Nt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=At(n),"string"==typeof e?null!=n&&xe(n):it(e,t,n))}function Pt(e){Y.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=pt.prototype).add=function(e,t){mt(this),this.i=null,e=Et(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){mt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return mt(this),this.i=null,yt(this,e=Et(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=vt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const i=xe(n);n=vt(this,n);for(let t=0;t<n.length;t++){let r=i;""!==n[t]&&(r+="="+xe(n[t])),e.push(r)}}return this.i=e.join("&")},u(_t,le),_t.prototype.g=function(){return new Tt(this.i,this.h)},u(Tt,Y),(e=Tt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,xt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||a).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Ct(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,xt(this)),this.g&&(this.readyState=3,xt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;It(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ct(this):xt(this),3==this.readyState&&It(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,Ct(this))},e.Na=function(e){this.g&&(this.response=e,Ct(this))},e.ga=function(){this.g&&Ct(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Tt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),u(Pt,Y);var Rt=/^https?$/i,Dt=["POST","PUT"];function Mt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Ot(e),Ft(e)}function Ot(e){e.A||(e.A=!0,X(e,"complete"),X(e,"error"))}function Lt(e){if(e.h&&void 0!==i)if(e.v&&4==Ut(e))setTimeout(e.Ca.bind(e),0);else if(X(e,"readystatechange"),4==Ut(e)){e.h=!1;try{const i=e.ca();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===i){let t=String(e.D).match(Xe)[1]||null;!t&&a.self&&a.self.location&&(t=a.self.location.protocol.slice(0,-1)),r=!Rt.test(t?t.toLowerCase():"")}n=r}if(n)X(e,"complete"),X(e,"success");else{e.o=6;try{var s=Ut(e)>2?e.g.statusText:""}catch(e){s=""}e.l=s+" ["+e.ca()+"]",Ot(e)}}finally{Ft(e)}}}function Ft(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const n=e.g;e.g=null,t||X(e,"ready");try{n.onreadystatechange=null}catch(e){}}}function Ut(e){return e.g?e.g.readyState:0}function Vt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function zt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function jt(e){this.za=0,this.i=[],this.j=new ke,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zt("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zt("baseRetryDelayMs",5e3,e),this.Za=zt("retryDelaySeedMs",1e4,e),this.Ta=zt("forwardChannelMaxRetries",2,e),this.va=zt("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new qe(e&&e.concurrentRequestLimit),this.Ba=new St,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Bt(e){if(Wt(e),3==e.I){var t=e.V++,n=et(e.J);if(it(n,"SID",e.M),it(n,"RID",t),it(n,"TYPE","terminate"),Ht(e,n),(t=new Ne(e,e.j,t)).M=2,t.A=at(et(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&a.Image&&((new Image).src=t.A,n=!0),n||(t.g=sn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),Ue(t)}rn(e)}function $t(e){e.g&&(Yt(e),e.g.cancel(),e.g=null)}function Wt(e){$t(e),e.v&&(a.clearTimeout(e.v),e.v=null),Zt(e),e.h.cancel(),e.m&&("number"==typeof e.m&&a.clearTimeout(e.m),e.m=null)}function qt(e){if(!Ke(e.h)&&!e.m){e.m=!0;var t=e.Ea;v||E(),w||(v(),w=!0),b.add(t,e),e.D=0}}function Kt(e,t){var n;n=t?t.l:e.V++;const r=et(e.J);it(r,"SID",e.M),it(r,"RID",n),it(r,"AID",e.K),Ht(e,r),e.u&&e.o&&Nt(r,e.u,e.o),n=new Ne(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Gt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),Qe(e.h,n),Me(n,r,t)}function Ht(e,t){e.H&&R(e.H,function(e,n){it(t,n,e)}),e.l&&R({},function(e,n){it(t,n,e)})}function Gt(e,t,n){n=Math.min(e.i.length,n);const r=e.l?l(e.l.Ka,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let l=!0;for(let c=0;c<n;c++){var a=i[c].g;const n=i[c].map;if((a-=t)<0)t=Math.max(0,i[c].g-100),l=!1;else try{a="req"+a+"_"||"";try{var o=n instanceof Map?n:Object.entries(n);for(const[t,n]of o){let r=n;s(n)&&(r=ae(n)),e.push(a+t+"="+encodeURIComponent(r))}}catch(t){throw e.push(a+"type="+encodeURIComponent("_badmap")),t}}catch(e){r&&r(n)}}if(l){o=e.join("&");break e}}o=void 0}return e=e.i.splice(0,n),t.G=e,o}function Qt(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;v||E(),w||(v(),w=!0),b.add(t,e),e.A=0}}function Jt(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=Ee(l(e.Da,e),tn(e,e.A)),e.A++,!0)}function Yt(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Xt(e){e.g=new Ne(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=et(e.na);it(t,"RID","rpc"),it(t,"SID",e.M),it(t,"AID",e.K),it(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&it(t,"TO",e.ia),it(t,"TYPE","xmlhttp"),Ht(e,t),e.u&&e.o&&Nt(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=at(et(t)),n.u=null,n.R=!0,Oe(n,e)}function Zt(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function en(e,t){var n=null;if(e.g==t){Zt(e),Yt(e),e.g=null;var r=2}else{if(!Ge(e.h,t))return;n=t.G,Je(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var i=e.D;X(r=me(),new be(r,n)),qt(e)}else Qt(e);else if(3==(i=t.m)||0==i&&t.X>0||!(1==r&&function(e,t){return!(He(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=Ee(l(e.Ea,e,t),tn(e,e.D)),e.D++,0)))}(e,t)||2==r&&Jt(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),i){case 1:nn(e,5);break;case 4:nn(e,10);break;case 3:nn(e,6);break;default:nn(e,2)}}function tn(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function nn(e,t){if(e.j.info("Error code "+t),2==t){var n=l(e.bb,e),r=e.Ua;const t=!r;r=new Ze(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||tt(r,"https"),at(r),t?function(e,t){const n=new ke;if(a.Image){const r=new Image;r.onload=c(kt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(kt,n,"TestLoadImage: error",!1,t,r),r.onabort=c(kt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(kt,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new ke;const n=new AbortController,r=setTimeout(()=>{n.abort(),kt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?kt(0,0,!0,t):kt(0,0,!1,t)}).catch(()=>{clearTimeout(r),kt(0,0,!1,t)})}(r.toString(),n)}else we(2);e.I=0,e.l&&e.l.pa(t),rn(e),Wt(e)}function rn(e){if(e.I=0,e.ja=[],e.l){const t=Ye(e.h);0==t.length&&0==e.i.length||(f(e.ja,t),f(e.ja,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.oa()}}function an(e,t,n){var r=n instanceof Ze?et(n):new Ze(n);if(""!=r.g)t&&(r.g=t+"."+r.g),nt(r,r.u);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;const e=new Ze(null);r&&tt(e,r),t&&(e.g=t),i&&nt(e,i),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&it(r,n,t),it(r,"VER",e.ka),Ht(e,r),r}function sn(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new Pt(new _t({ab:n})):new Pt(e.ma)).Fa(e.L),t}function on(){}function ln(){}function cn(e,t){Y.call(this),this.g=new jt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!I(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new dn(this)}function un(e){he.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function hn(){de.call(this),this.status=1}function dn(e){this.g=e}(e=Pt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_e.g(),this.g.onreadystatechange=h(l(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){return void Mt(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=a.FormData&&e instanceof a.FormData,!(Array.prototype.indexOf.call(Dt,t,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(e){Mt(this,e)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,X(this,"complete"),X(this,"abort"),Ft(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ft(this,!0)),Pt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Lt(this):this.Xa())},e.Xa=function(){Lt(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return Ut(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),se(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=jt.prototype).ka=8,e.I=1,e.connect=function(e,t,n,r){we(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=an(this,null,this.W),qt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Ne(this,this.j,e);let a=this.o;if(this.U&&(a?(a=D(a),O(a,this.U)):a=this.U),null!==this.u||this.R||(i.J=a,a=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if((t+=r)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Gt(this,i,t),it(n=et(this.J),"RID",e),it(n,"CVER",22),this.G&&it(n,"X-HTTP-Session-Id",this.G),Ht(this,n),a&&(this.R?t="headers="+xe(At(a))+"&"+t:this.u&&Nt(n,this.u,a)),Qe(this.h,i),this.Ra&&it(n,"TYPE","init"),this.S?(it(n,"$req",t),it(n,"SID","null"),i.U=!0,Me(i,n,null)):Me(i,n,t),this.I=2}}else 3==this.I&&(e?Kt(this,e):0==this.i.length||Ke(this.h)||Kt(this))},e.Da=function(){if(this.v=null,Xt(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=Ee(l(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,we(10),$t(this),Xt(this))},e.Va=function(){null!=this.C&&(this.C=null,$t(this),Jt(this),we(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=on.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},ln.prototype.g=function(e,t){return new cn(e,t)},u(cn,Y),cn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Bt(this.g)},cn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ae(e),e=n);t.i.push(new We(t.Ya++,e)),3==t.I&&qt(t)},cn.prototype.N=function(){this.g.l=null,delete this.j,Bt(this.g),delete this.g,cn.Z.N.call(this)},u(un,he),u(hn,de),u(dn,on),dn.prototype.ra=function(){X(this.g,"a")},dn.prototype.qa=function(e){X(this.g,new un(e))},dn.prototype.pa=function(e){X(this.g,new hn)},dn.prototype.oa=function(){X(this.g,"b")},ln.prototype.createWebChannel=ln.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,Bm=function(){return new ln},jm=function(){return me()},zm=fe,Vm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Te.NO_ERROR=0,Te.TIMEOUT=8,Te.HTTP_ERROR=6,Um=Te,Ie.COMPLETE="complete",Fm=Ie,ce.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",Y.prototype.listen=Y.prototype.J,Lm=ce,Pt.prototype.listenOnce=Pt.prototype.K,Pt.prototype.getLastError=Pt.prototype.Ha,Pt.prototype.getLastErrorCode=Pt.prototype.ya,Pt.prototype.getStatus=Pt.prototype.ca,Pt.prototype.getResponseJson=Pt.prototype.La,Pt.prototype.getResponseText=Pt.prototype.la,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Fa,Om=Pt}).apply(void 0!==$m?$m:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
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
class Wm{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wm.UNAUTHENTICATED=new Wm(null),Wm.GOOGLE_CREDENTIALS=new Wm("google-credentials-uid"),Wm.FIRST_PARTY=new Wm("first-party-uid"),Wm.MOCK_USER=new Wm("mock-user");
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
let qm="12.12.0";
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
const Km=new Ah("@firebase/firestore");function Hm(){return Km.logLevel}function Gm(e,...t){if(Km.logLevel<=Sh.DEBUG){const n=t.map(Ym);Km.debug(`Firestore (${qm}): ${e}`,...n)}}function Qm(e,...t){if(Km.logLevel<=Sh.ERROR){const n=t.map(Ym);Km.error(`Firestore (${qm}): ${e}`,...n)}}function Jm(e,...t){if(Km.logLevel<=Sh.WARN){const n=t.map(Ym);Km.warn(`Firestore (${qm}): ${e}`,...n)}}function Ym(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}var t}
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
 */function Xm(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Zm(e,r,n)}function Zm(e,t,n){let r=`FIRESTORE (${qm}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw Qm(r),new Error(r)}function eg(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||Zm(t,i,r)}function tg(e,t){return e}
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
 */const ng={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rg extends oh{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class ig{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
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
 */class ag{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Wm.UNAUTHENTICATED))}shutdown(){}}class og{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lg{constructor(e){this.t=e,this.currentUser=Wm.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){eg(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ig;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ig,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},s=e=>{Gm("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(e=>s(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?s(e):(Gm("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ig)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(Gm("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(eg("string"==typeof t.accessToken,31837,{l:t}),new ag(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return eg(null===e||"string"==typeof e,2055,{h:e}),new Wm(e)}}class cg{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Wm.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ug{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new cg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Wm.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pd(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){eg(void 0===this.o,3512);const n=e=>{null!=e.error&&Gm("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,Gm("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{Gm("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):Gm("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new hg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(eg("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new hg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */function fg(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class pg{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=fg(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function mg(e,t){return e<t?-1:e>t?1:0}function gg(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),i=t.charAt(r);if(n!==i)return wg(n)===wg(i)?mg(n,i):wg(n)?1:-1}return mg(e.length,t.length)}const yg=55296,vg=57343;function wg(e){const t=e.charCodeAt(0);return t>=yg&&t<=vg}function bg(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
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
 */const Eg="__name__";class kg{constructor(e,t,n){void 0===t?t=0:t>e.length&&Xm(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Xm(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===kg.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kg?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=kg.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return mg(e.length,t.length)}static compareSegments(e,t){const n=kg.isNumericId(e),r=kg.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?kg.extractNumericId(e).compare(kg.extractNumericId(t)):gg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rm.fromString(e.substring(4,e.length-2))}}class Sg extends kg{construct(e,t,n){return new Sg(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new rg(ng.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Sg(t)}static emptyPath(){return new Sg([])}}const _g=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tg extends kg{construct(e,t,n){return new Tg(e,t,n)}static isValidIdentifier(e){return _g.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tg.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Eg}static keyField(){return new Tg([Eg])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new rg(ng.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new rg(ng.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new rg(ng.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(a=!a,r++):"."!==t||a?(n+=t,r++):(i(),r++)}if(i(),a)throw new rg(ng.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tg(t)}static emptyPath(){return new Tg([])}}
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
 */class Ig{constructor(e){this.path=e}static fromPath(e){return new Ig(Sg.fromString(e))}static fromName(e){return new Ig(Sg.fromString(e).popFirst(5))}static empty(){return new Ig(Sg.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Sg.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Sg.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ig(new Sg(e.slice()))}}
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
 */function Cg(e,t,n){if(!n)throw new rg(ng.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function xg(e){if(!Ig.isDocumentKey(e))throw new rg(ng.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ag(e){if(Ig.isDocumentKey(e))throw new rg(ng.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ng(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function Pg(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Xm(12329,{type:typeof e})}function Rg(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rg(ng.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pg(e);throw new rg(ng.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
 */function Dg(e,t){const n={typeString:e};return t&&(n.value=t),n}function Mg(e,t){if(!Ng(e))throw new rg(ng.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const s=e[r];if(i&&typeof s!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==a&&s!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new rg(ng.INVALID_ARGUMENT,n);return!0}
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
 */const Og=-62135596800,Lg=1e6;class Fg{static now(){return Fg.fromMillis(Date.now())}static fromDate(e){return Fg.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Lg);return new Fg(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new rg(ng.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new rg(ng.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Og)throw new rg(ng.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new rg(ng.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lg}_compareTo(e){return this.seconds===e.seconds?mg(this.nanoseconds,e.nanoseconds):mg(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Fg._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Mg(e,Fg._jsonSchema))return new Fg(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Og;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Fg._jsonSchemaVersion="firestore/timestamp/1.0",Fg._jsonSchema={type:Dg("string",Fg._jsonSchemaVersion),seconds:Dg("number"),nanoseconds:Dg("number")};
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
class Ug{static fromTimestamp(e){return new Ug(e)}static min(){return new Ug(new Fg(0,0))}static max(){return new Ug(new Fg(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function Vg(e){return new zg(e.readTime,e.key,-1)}class zg{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new zg(Ug.min(),Ig.empty(),-1)}static max(){return new zg(Ug.max(),Ig.empty(),-1)}}function jg(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ig.comparator(e.documentKey,t.documentKey),0!==n?n:mg(e.largestBatchId,t.largestBatchId)
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
 */)}class Bg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
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
 */async function $g(e){if(e.code!==ng.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Gm("LocalStore","Unexpectedly lost primary lease")}
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
 */class Wg{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Xm(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Wg((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Wg?t:Wg.resolve(t)}catch(e){return Wg.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Wg.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Wg.reject(t)}static resolve(e){return new Wg((t,n)=>{t(e)})}static reject(e){return new Wg((t,n)=>{n(e)})}static waitFor(e){return new Wg((t,n)=>{let r=0,i=0,a=!1;e.forEach(e=>{++r,e.next(()=>{++i,a&&i===r&&t()},e=>n(e))}),a=!0,i===r&&t()})}static or(e){let t=Wg.resolve(!1);for(const n of e)t=t.next(e=>e?Wg.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Wg((n,r)=>{const i=e.length,a=new Array(i);let s=0;for(let o=0;o<i;o++){const l=o;t(e[l]).next(e=>{a[l]=e,++s,s===i&&n(a)},e=>r(e))}})}static doWhile(e,t){return new Wg((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function qg(e){return"IndexedDbTransactionError"===e.name}
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
 */class Kg{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Kg.ce=-1;function Hg(e){return null==e}function Gg(e){return 0===e&&1/e==-1/0}function Qg(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Jg(e){return e+""}
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
 */function Yg(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Xg(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Zg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class ey{constructor(e,t){this.comparator=e,this.root=t||ny.EMPTY}insert(e,t){return new ey(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ny.BLACK,null,null))}remove(e){return new ey(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ny.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ty(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ty(this.root,e,this.comparator,!1)}getReverseIterator(){return new ty(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ty(this.root,e,this.comparator,!0)}}class ty{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ny{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ny.RED,this.left=null!=r?r:ny.EMPTY,this.right=null!=i?i:ny.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ny(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ny.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ny.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ny.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ny.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Xm(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Xm(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Xm(27949);return e+(this.isRed()?0:1)}}ny.EMPTY=null,ny.RED=!0,ny.BLACK=!1,ny.EMPTY=new class{constructor(){this.size=0}get key(){throw Xm(57766)}get value(){throw Xm(16141)}get color(){throw Xm(16727)}get left(){throw Xm(29726)}get right(){throw Xm(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new ny(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class ry{constructor(e){this.comparator=e,this.data=new ey(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iy(this.data.getIterator())}getIteratorFrom(e){return new iy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof ry))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ry(this.comparator);return t.data=e,t}}class iy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */class ay{constructor(e){this.fields=e,e.sort(Tg.comparator)}static empty(){return new ay([])}unionWith(e){let t=new ry(Tg.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new ay(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bg(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
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
 */class sy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class oy{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new sy("Invalid base64 string: "+e):e}}(e);return new oy(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new oy(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return mg(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}oy.EMPTY_BYTE_STRING=new oy("");const ly=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cy(e){if(eg(!!e,39018),"string"==typeof e){let t=0;const n=ly.exec(e);if(eg(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:uy(e.seconds),nanos:uy(e.nanos)}}function uy(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function hy(e){return"string"==typeof e?oy.fromBase64String(e):oy.fromUint8Array(e)}
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
 */const dy="server_timestamp",fy="__type__",py="__previous_value__",my="__local_write_time__";function gy(e){const t=(e?.mapValue?.fields||{})[fy]?.stringValue;return t===dy}function yy(e){const t=e.mapValue.fields[py];return gy(t)?yy(t):t}function vy(e){const t=cy(e.mapValue.fields[my].timestampValue);return new Fg(t.seconds,t.nanos)}
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
 */class wy{constructor(e,t,n,r,i,a,s,o,l,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=s,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=c,this.apiKey=u}}const by="(default)";class Ey{constructor(e,t){this.projectId=e,this.database=t||by}static empty(){return new Ey("","")}get isDefaultDatabase(){return this.database===by}isEqual(e){return e instanceof Ey&&e.projectId===this.projectId&&e.database===this.database}}
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
const ky="__type__",Sy="__max__",_y={fields:{__type__:{stringValue:Sy}}},Ty="__vector__",Iy="value";function Cy(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?gy(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Sy}
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
 */(e)?9007199254740991:function(e){const t=(e?.mapValue?.fields||{})[ky]?.stringValue;return t===Ty}(e)?10:11:Xm(28295,{value:e})}function xy(e,t){if(e===t)return!0;const n=Cy(e);if(n!==Cy(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return vy(e).isEqual(vy(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=cy(e.timestampValue),r=cy(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,hy(e.bytesValue).isEqual(hy(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return uy(e.geoPointValue.latitude)===uy(t.geoPointValue.latitude)&&uy(e.geoPointValue.longitude)===uy(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return uy(e.integerValue)===uy(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=uy(e.doubleValue),r=uy(t.doubleValue);return n===r?Gg(n)===Gg(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return bg(e.arrayValue.values||[],t.arrayValue.values||[],xy);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Yg(n)!==Yg(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!xy(n[e],r[e])))return!1;return!0}(e,t);default:return Xm(52216,{left:e})}var r}function Ay(e,t){return void 0!==(e.values||[]).find(e=>xy(e,t))}function Ny(e,t){if(e===t)return 0;const n=Cy(e),r=Cy(t);if(n!==r)return mg(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return mg(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=uy(e.integerValue||e.doubleValue),r=uy(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Py(e.timestampValue,t.timestampValue);case 4:return Py(vy(e),vy(t));case 5:return gg(e.stringValue,t.stringValue);case 6:return function(e,t){const n=hy(e),r=hy(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=mg(n[e],r[e]);if(0!==t)return t}return mg(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=mg(uy(e.latitude),uy(t.latitude));return 0!==n?n:mg(uy(e.longitude),uy(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Ry(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},i=n[Iy]?.arrayValue,a=r[Iy]?.arrayValue,s=mg(i?.values?.length||0,a?.values?.length||0);return 0!==s?s:Ry(i,a)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===_y&&t===_y)return 0;if(e===_y)return 1;if(t===_y)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(let e=0;e<r.length&&e<a.length;++e){const t=gg(r[e],a[e]);if(0!==t)return t;const s=Ny(n[r[e]],i[a[e]]);if(0!==s)return s}return mg(r.length,a.length)}(e.mapValue,t.mapValue);default:throw Xm(23264,{he:n})}}function Py(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return mg(e,t);const n=cy(e),r=cy(t),i=mg(n.seconds,r.seconds);return 0!==i?i:mg(n.nanos,r.nanos)}function Ry(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Ny(n[e],r[e]);if(t)return t}return mg(n.length,r.length)}function Dy(e){return My(e)}function My(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=cy(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?hy(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Ig.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=My(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${My(e.fields[i])}`;return n+"}"}(e.mapValue):Xm(61005,{value:e})}function Oy(e){switch(Cy(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=yy(e);return t?16+Oy(t):16;case 5:return 2*e.stringValue.length;case 6:return hy(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce((e,t)=>e+Oy(t),0);case 10:case 11:return function(e){let t=0;return Xg(e.fields,(e,n)=>{t+=e.length+Oy(n)}),t}(e.mapValue);default:throw Xm(13486,{value:e})}}function Ly(e){return!!e&&"integerValue"in e}function Fy(e){return!!e&&"arrayValue"in e}function Uy(e){return!!e&&"nullValue"in e}function Vy(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zy(e){return!!e&&"mapValue"in e}function jy(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Xg(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=jy(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=jy(e.arrayValue.values[n]);return t}return{...e}}class By{constructor(e){this.value=e}static empty(){return new By({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!zy(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jy(t)}setAll(e){let t=Tg.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=jy(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());zy(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xy(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];zy(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Xg(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new By(jy(this.value))}}function $y(e){const t=[];return Xg(e.fields,(e,n)=>{const r=new Tg([e]);if(zy(n)){const e=$y(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new ay(t)
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
 */}class Wy{constructor(e,t,n,r,i,a,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=a,this.documentState=s}static newInvalidDocument(e){return new Wy(e,0,Ug.min(),Ug.min(),Ug.min(),By.empty(),0)}static newFoundDocument(e,t,n,r){return new Wy(e,1,t,Ug.min(),n,r,0)}static newNoDocument(e,t){return new Wy(e,2,t,Ug.min(),Ug.min(),By.empty(),0)}static newUnknownDocument(e,t){return new Wy(e,3,t,Ug.min(),Ug.min(),By.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ug.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=By.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=By.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ug.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Wy&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wy(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class qy{constructor(e,t){this.position=e,this.inclusive=t}}function Ky(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const a=t[i],s=e.position[i];if(r=a.field.isKeyField()?Ig.comparator(Ig.fromName(s.referenceValue),n.key):Ny(s,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function Hy(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!xy(e.position[n],t.position[n]))return!1;return!0}
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
 */class Gy{constructor(e,t="asc"){this.field=e,this.dir=t}}function Qy(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Jy{}class Yy extends Jy{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new iv(e,t,n):"array-contains"===t?new lv(e,n):"in"===t?new cv(e,n):"not-in"===t?new uv(e,n):"array-contains-any"===t?new hv(e,n):new Yy(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new av(e,n):new sv(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(Ny(t,this.value)):null!==t&&Cy(this.value)===Cy(t)&&this.matchesComparison(Ny(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Xm(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xy extends Jy{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Xy(e,t)}matches(e){return Zy(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Zy(e){return"and"===e.op}function ev(e){return function(e){for(const t of e.filters)if(t instanceof Xy)return!1;return!0}(e)&&Zy(e)}function tv(e){if(e instanceof Yy)return e.field.canonicalString()+e.op.toString()+Dy(e.value);if(ev(e))return e.filters.map(e=>tv(e)).join(",");{const t=e.filters.map(e=>tv(e)).join(",");return`${e.op}(${t})`}}function nv(e,t){return e instanceof Yy?(n=e,(r=t)instanceof Yy&&n.op===r.op&&n.field.isEqual(r.field)&&xy(n.value,r.value)):e instanceof Xy?function(e,t){return t instanceof Xy&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&nv(n,t.filters[r]),!0)}(e,t):void Xm(19439);var n,r}function rv(e){return e instanceof Yy?`${(t=e).field.canonicalString()} ${t.op} ${Dy(t.value)}`:e instanceof Xy?function(e){return e.op.toString()+" {"+e.getFilters().map(rv).join(" ,")+"}"}(e):"Filter";var t}class iv extends Yy{constructor(e,t,n){super(e,t,n),this.key=Ig.fromName(n.referenceValue)}matches(e){const t=Ig.comparator(e.key,this.key);return this.matchesComparison(t)}}class av extends Yy{constructor(e,t){super(e,"in",t),this.keys=ov("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sv extends Yy{constructor(e,t){super(e,"not-in",t),this.keys=ov("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ov(e,t){return(t.arrayValue?.values||[]).map(e=>Ig.fromName(e.referenceValue))}class lv extends Yy{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fy(t)&&Ay(t.arrayValue,this.value)}}class cv extends Yy{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ay(this.value.arrayValue,t)}}class uv extends Yy{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ay(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!Ay(this.value.arrayValue,t)}}class hv extends Yy{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fy(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Ay(this.value.arrayValue,e))}}
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
 */class dv{constructor(e,t=null,n=[],r=[],i=null,a=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=s,this.Te=null}}function fv(e,t=null,n=[],r=[],i=null,a=null,s=null){return new dv(e,t,n,r,i,a,s)}function pv(e){const t=tg(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>tv(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),Hg(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Dy(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Dy(e)).join(",")),t.Te=e}return t.Te}function mv(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Qy(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!nv(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Hy(e.startAt,t.startAt)&&Hy(e.endAt,t.endAt)}function gv(e){return Ig.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
 */class yv{constructor(e,t=null,n=[],r=[],i=null,a="F",s=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=s,this.endAt=o,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function vv(e){return new yv(e)}function wv(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function bv(e){const t=tg(e);if(null===t.Ee){t.Ee=[];const e=new Set;for(const n of t.explicitOrderBy)t.Ee.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new ry(Tg.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ee.push(new Gy(r,n))}),e.has(Tg.keyField().canonicalString())||t.Ee.push(new Gy(Tg.keyField(),n))}return t.Ee}function Ev(e){const t=tg(e);return t.Ie||(t.Ie=function(e,t){if("F"===e.limitType)return fv(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new Gy(e.field,t)});const n=e.endAt?new qy(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qy(e.startAt.position,e.startAt.inclusive):null;return fv(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,bv(e))),t.Ie}function kv(e,t,n){return new yv(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Sv(e,t){return mv(Ev(e),Ev(t))&&e.limitType===t.limitType}function _v(e){return`${pv(Ev(e))}|lt:${e.limitType}`}function Tv(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>rv(e)).join(", ")}]`),Hg(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Dy(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Dy(e)).join(",")),`Target(${t})`}(Ev(e))}; limitType=${e.limitType})`}function Iv(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ig.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of bv(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Ky(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,bv(n),r)||n.endAt&&!function(e,t,n){const r=Ky(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,bv(n),r)));var n,r}function Cv(e){return(t,n)=>{let r=!1;for(const i of bv(e)){const e=xv(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function xv(e,t,n){const r=e.field.isKeyField()?Ig.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Ny(r,i):Xm(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Xm(19790,{direction:e.dir})}}
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
 */class Av{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Xg(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return Zg(this.inner)}size(){return this.innerSize}}
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
 */const Nv=new ey(Ig.comparator);function Pv(){return Nv}const Rv=new ey(Ig.comparator);function Dv(...e){let t=Rv;for(const n of e)t=t.insert(n.key,n);return t}function Mv(e){let t=Rv;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Ov(){return Fv()}function Lv(){return Fv()}function Fv(){return new Av(e=>e.toString(),(e,t)=>e.isEqual(t))}const Uv=new ey(Ig.comparator),Vv=new ry(Ig.comparator);function zv(...e){let t=Vv;for(const n of e)t=t.add(n);return t}const jv=new ry(mg);
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
function Bv(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gg(t)?"-0":t}}function $v(e){return{integerValue:""+e}}function Wv(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Gg(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */(t)?$v(t):Bv(e,t)}
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
 */class qv{constructor(){this._=void 0}}function Kv(e,t,n){return e instanceof Qv?function(e,t){const n={fields:{[fy]:{stringValue:dy},[my]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&gy(t)&&(t=yy(t)),t&&(n.fields[py]=t),{mapValue:n}}(n,t):e instanceof Jv?Yv(e,t):e instanceof Xv?Zv(e,t):function(e,t){const n=Gv(e,t),r=tw(n)+tw(e.Ae);return Ly(n)&&Ly(e.Ae)?$v(r):Bv(e.serializer,r)}(e,t)}function Hv(e,t,n){return e instanceof Jv?Yv(e,t):e instanceof Xv?Zv(e,t):n}function Gv(e,t){return e instanceof ew?Ly(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class Qv extends qv{}class Jv extends qv{constructor(e){super(),this.elements=e}}function Yv(e,t){const n=nw(t);for(const t of e.elements)n.some(e=>xy(e,t))||n.push(t);return{arrayValue:{values:n}}}class Xv extends qv{constructor(e){super(),this.elements=e}}function Zv(e,t){let n=nw(t);for(const t of e.elements)n=n.filter(e=>!xy(e,t));return{arrayValue:{values:n}}}class ew extends qv{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function tw(e){return uy(e.integerValue||e.doubleValue)}function nw(e){return Fy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class rw{constructor(e,t){this.field=e,this.transform=t}}class iw{constructor(e,t){this.version=e,this.transformResults=t}}class aw{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new aw}static exists(e){return new aw(void 0,e)}static updateTime(e){return new aw(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sw(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ow{}function lw(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new vw(e.key,aw.none()):new fw(e.key,e.data,aw.none());{const n=e.data,r=By.empty();let i=new ry(Tg.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new pw(e.key,r,new ay(i.toArray()),aw.none())}}function cw(e,t,n){var r;e instanceof fw?function(e,t,n){const r=e.value.clone(),i=gw(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof pw?function(e,t,n){if(!sw(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=gw(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(mw(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function uw(e,t,n,r){return e instanceof fw?function(e,t,n,r){if(!sw(e.precondition,t))return n;const i=e.value.clone(),a=yw(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof pw?function(e,t,n,r){if(!sw(e.precondition,t))return n;const i=yw(e.fieldTransforms,r,t),a=t.data;return a.setAll(mw(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(i=t,a=n,sw(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function hw(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Gv(r.transform,e||null);null!=i&&(null===n&&(n=By.empty()),n.set(r.field,i))}return n||null}function dw(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&bg(n,r,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Jv&&r instanceof Jv||n instanceof Xv&&r instanceof Xv?bg(n.elements,r.elements,xy):n instanceof ew&&r instanceof ew?xy(n.Ae,r.Ae):n instanceof Qv&&r instanceof Qv);var n,r}(e,t)))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class fw extends ow{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class pw extends ow{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mw(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function gw(e,t,n){const r=new Map;eg(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let i=0;i<n.length;i++){const a=e[i],s=a.transform,o=t.data.field(a.field);r.set(a.field,Hv(s,o,n[i]))}return r}function yw(e,t,n){const r=new Map;for(const i of e){const e=i.transform,a=n.data.field(i.field);r.set(i.field,Kv(e,a,t))}return r}class vw extends ow{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ww extends ow{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class bw{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&cw(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=uw(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=uw(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Lv();return this.mutations.forEach(r=>{const i=e.get(r.key),a=i.overlayedDocument;let s=this.applyToLocalView(a,i.mutatedFields);s=t.has(r.key)?null:s;const o=lw(a,s);null!==o&&n.set(r.key,o),a.isValidDocument()||a.convertToNoDocument(Ug.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),zv())}isEqual(e){return this.batchId===e.batchId&&bg(this.mutations,e.mutations,(e,t)=>dw(e,t))&&bg(this.baseMutations,e.baseMutations,(e,t)=>dw(e,t))}}class Ew{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){eg(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=Uv;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Ew(e,t,n,r)}}
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
 */class kw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Sw{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var _w,Tw;function Iw(e){if(void 0===e)return Qm("GRPC error has no .code"),ng.UNKNOWN;switch(e){case _w.OK:return ng.OK;case _w.CANCELLED:return ng.CANCELLED;case _w.UNKNOWN:return ng.UNKNOWN;case _w.DEADLINE_EXCEEDED:return ng.DEADLINE_EXCEEDED;case _w.RESOURCE_EXHAUSTED:return ng.RESOURCE_EXHAUSTED;case _w.INTERNAL:return ng.INTERNAL;case _w.UNAVAILABLE:return ng.UNAVAILABLE;case _w.UNAUTHENTICATED:return ng.UNAUTHENTICATED;case _w.INVALID_ARGUMENT:return ng.INVALID_ARGUMENT;case _w.NOT_FOUND:return ng.NOT_FOUND;case _w.ALREADY_EXISTS:return ng.ALREADY_EXISTS;case _w.PERMISSION_DENIED:return ng.PERMISSION_DENIED;case _w.FAILED_PRECONDITION:return ng.FAILED_PRECONDITION;case _w.ABORTED:return ng.ABORTED;case _w.OUT_OF_RANGE:return ng.OUT_OF_RANGE;case _w.UNIMPLEMENTED:return ng.UNIMPLEMENTED;case _w.DATA_LOSS:return ng.DATA_LOSS;default:return Xm(39323,{code:e})}}(Tw=_w||(_w={}))[Tw.OK=0]="OK",Tw[Tw.CANCELLED=1]="CANCELLED",Tw[Tw.UNKNOWN=2]="UNKNOWN",Tw[Tw.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Tw[Tw.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Tw[Tw.NOT_FOUND=5]="NOT_FOUND",Tw[Tw.ALREADY_EXISTS=6]="ALREADY_EXISTS",Tw[Tw.PERMISSION_DENIED=7]="PERMISSION_DENIED",Tw[Tw.UNAUTHENTICATED=16]="UNAUTHENTICATED",Tw[Tw.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Tw[Tw.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Tw[Tw.ABORTED=10]="ABORTED",Tw[Tw.OUT_OF_RANGE=11]="OUT_OF_RANGE",Tw[Tw.UNIMPLEMENTED=12]="UNIMPLEMENTED",Tw[Tw.INTERNAL=13]="INTERNAL",Tw[Tw.UNAVAILABLE=14]="UNAVAILABLE",Tw[Tw.DATA_LOSS=15]="DATA_LOSS";
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
const Cw=new Rm([4294967295,4294967295],0);function xw(e){const t=(new TextEncoder).encode(e),n=new Dm;return n.update(t),new Uint8Array(n.digest())}function Aw(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new Rm([n,r],0),new Rm([i,a],0)]}class Nw{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Pw(`Invalid padding: ${t}`);if(n<0)throw new Pw(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Pw(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Pw(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Rm.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(Rm.fromNumber(n)));return 1===r.compare(Cw)&&(r=new Rm([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=xw(e),[n,r]=Aw(t);for(let e=0;e<this.hashCount;e++){const t=this.ye(n,r,e);if(!this.we(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Nw(i,r,t);return n.forEach(e=>a.insert(e)),a}insert(e){if(0===this.ge)return;const t=xw(e),[n,r]=Aw(t);for(let e=0;e<this.hashCount;e++){const t=this.ye(n,r,e);this.Se(t)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Pw extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Rw{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Dw.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Rw(Ug.min(),r,new ey(mg),Pv(),zv())}}class Dw{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Dw(n,t,zv(),zv(),zv())}}
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
 */class Mw{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class Ow{constructor(e,t){this.targetId=e,this.Ce=t}}class Lw{constructor(e,t,n=oy.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Fw{constructor(){this.ve=0,this.Fe=zw(),this.Me=oy.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=zv(),t=zv(),n=zv();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Xm(38017,{changeType:i})}}),new Dw(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=zw()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,eg(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Uw{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pv(),this.Je=Vw(),this.He=Vw(),this.Ze=new ey(mg)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:Xm(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(gv(i))if(0===n){const e=new Ig(i.path);this.et(t,e,Wy.newNoDocument(e,Ug.min()))}else eg(1===n,20013,{expectedCount:n});else{const r=this._t(t);if(r!==n){const n=this.ut(e),i=n?this.ct(n,e,r):1;if(0!==i){this.it(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,e)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let a,s;try{a=hy(n).toUint8Array()}catch(e){if(e instanceof sy)return Jm("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{s=new Nw(a,r,i)}catch(e){return Jm(e instanceof Pw?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===s.ge?null:s}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),a=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(a)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&gv(i.target)){const t=new Ig(i.target.path);this.Et(t).has(r)||this.It(r,t)||this.et(r,t,Wy.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=zv();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new Rw(e,t,this.Ze,this.je,n);return this.je=Pv(),this.Je=Vw(),this.He=Vw(),this.Ze=new ey(mg),r}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Fw,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ry(mg),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ry(mg),this.Je=this.Je.insert(e,t)),t}rt(e){const t=null!==this.ot(e);return t||Gm("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Fw),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Vw(){return new ey(Ig.comparator)}function zw(){return new ey(Ig.comparator)}const jw={asc:"ASCENDING",desc:"DESCENDING"},Bw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$w={and:"AND",or:"OR"};class Ww{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qw(e,t){return e.useProto3Json||Hg(t)?t:{value:t}}function Kw(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hw(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Gw(e,t){return Kw(e,t.toTimestamp())}function Qw(e){return eg(!!e,49232),Ug.fromTimestamp(function(e){const t=cy(e);return new Fg(t.seconds,t.nanos)}(e))}function Jw(e,t){return Yw(e,t).canonicalString()}function Yw(e,t){const n=(r=e,new Sg(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function Xw(e){const t=Sg.fromString(e);return eg(gb(t),10190,{key:t.toString()}),t}function Zw(e,t){return Jw(e.databaseId,t.path)}function eb(e,t){const n=Xw(t);if(n.get(1)!==e.databaseId.projectId)throw new rg(ng.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new rg(ng.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ig(rb(n))}function tb(e,t){return Jw(e.databaseId,t)}function nb(e){return new Sg(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rb(e){return eg(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function ib(e,t,n){return{name:Zw(e,t),fields:n.value.mapValue.fields}}function ab(e,t){return{documents:[tb(e,t.path)]}}function sb(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tb(e,i);const a=function(e){if(0!==e.length)return pb(Xy.create(e,"and"))}(t.filters);a&&(n.structuredQuery.where=a);const s=function(e){if(0!==e.length)return e.map(e=>{return{field:db((t=e).field),direction:cb(t.dir)};var t})}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=qw(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:i};var l}function ob(e){let t=function(e){const t=Xw(e);return 4===t.length?Sg.emptyPath():rb(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){eg(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let a=[];n.where&&(a=function(e){const t=lb(e);return t instanceof Xy&&ev(t)?t.getFilters():[t]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(e=>{return new Gy(fb((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,Hg(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new qy(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new qy(n,t)}(n.endAt)),function(e,t,n,r,i,a,s,o){return new yv(e,t,n,r,i,a,s,o)}(t,i,s,a,o,"F",l,c)}function lb(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=fb(e.unaryFilter.field);return Yy.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=fb(e.unaryFilter.field);return Yy.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fb(e.unaryFilter.field);return Yy.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fb(e.unaryFilter.field);return Yy.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Xm(61313);default:return Xm(60726)}}(e):void 0!==e.fieldFilter?(t=e,Yy.create(fb(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Xm(58110);default:return Xm(50506)}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return Xy.create(e.compositeFilter.filters.map(e=>lb(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Xm(1026)}}(e.compositeFilter.op))}(e):Xm(30097,{filter:e});var t}function cb(e){return jw[e]}function ub(e){return Bw[e]}function hb(e){return $w[e]}function db(e){return{fieldPath:e.canonicalString()}}function fb(e){return Tg.fromServerFormat(e.fieldPath)}function pb(e){return e instanceof Yy?function(e){if("=="===e.op){if(Vy(e.value))return{unaryFilter:{field:db(e.field),op:"IS_NAN"}};if(Uy(e.value))return{unaryFilter:{field:db(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Vy(e.value))return{unaryFilter:{field:db(e.field),op:"IS_NOT_NAN"}};if(Uy(e.value))return{unaryFilter:{field:db(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:db(e.field),op:ub(e.op),value:e.value}}}(e):e instanceof Xy?function(e){const t=e.getFilters().map(e=>pb(e));return 1===t.length?t[0]:{compositeFilter:{op:hb(e.op),filters:t}}}(e):Xm(54877,{filter:e})}function mb(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function gb(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function yb(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}
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
 */class vb{constructor(e,t,n,r,i=Ug.min(),a=Ug.min(),s=oy.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=s,this.expectedCount=o}withSequenceNumber(e){return new vb(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vb(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vb(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vb(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class wb{constructor(e){this.yt=e}}function bb(e){const t=ob({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?kv(t,t.limit,"L"):t}
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
 */class Eb{constructor(){this.bn=new kb}addToCollectionParentIndex(e,t){return this.bn.add(t),Wg.resolve()}getCollectionParents(e,t){return Wg.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return Wg.resolve()}deleteFieldIndex(e,t){return Wg.resolve()}deleteAllFieldIndexes(e){return Wg.resolve()}createTargetIndexes(e,t){return Wg.resolve()}getDocumentsMatchingTarget(e,t){return Wg.resolve(null)}getIndexType(e,t){return Wg.resolve(0)}getFieldIndexes(e,t){return Wg.resolve([])}getNextCollectionGroupToUpdate(e){return Wg.resolve(null)}getMinOffset(e,t){return Wg.resolve(zg.min())}getMinOffsetFromCollectionGroup(e,t){return Wg.resolve(zg.min())}updateCollectionGroup(e,t,n){return Wg.resolve()}updateIndexEntries(e,t){return Wg.resolve()}}class kb{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ry(Sg.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ry(Sg.comparator)).toArray()}}
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
 */const Sb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_b=41943040;class Tb{static withCacheSize(e){return new Tb(e,Tb.DEFAULT_COLLECTION_PERCENTILE,Tb.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
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
 */Tb.DEFAULT_COLLECTION_PERCENTILE=10,Tb.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tb.DEFAULT=new Tb(_b,Tb.DEFAULT_COLLECTION_PERCENTILE,Tb.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tb.DISABLED=new Tb(-1,0,0);
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
class Ib{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ib(0)}static ar(){return new Ib(-1)}}
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
 */const Cb="LruGarbageCollector";function xb([e,t],[n,r]){const i=mg(e,n);return 0===i?mg(t,r):i}class Ab{constructor(e){this.Pr=e,this.buffer=new ry(xb),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();xb(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Nb{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(e){Gm(Cb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){qg(e)?Gm(Cb,"Ignoring IndexedDB error during garbage collection: ",e):await $g(e)}await this.Ar(3e5)})}}class Pb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Wg.resolve(Kg.ce);const n=new Ab(t);return this.Vr.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Vr.mr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Gm("LruGarbageCollector","Garbage collection skipped; disabled"),Wg.resolve(Sb)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(Gm("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sb):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,i,a,s,o,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(Gm("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,a=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,s=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),Hm()<=Sh.DEBUG&&Gm("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${a-c}ms\n\tDetermined least recently used ${r} in `+(s-a)+`ms\n\tRemoved ${i} targets in `+(o-s)+`ms\n\tRemoved ${e} documents in `+(l-o)+`ms\nTotal Duration: ${l-c}ms`),Wg.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
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
class Rb{constructor(){this.changes=new Av(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wy.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Wg.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class Db{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class Mb{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&uw(n.mutation,e,ay.empty(),Fg.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,zv()).next(()=>t))}getLocalViewOfDocuments(e,t,n=zv()){const r=Ov();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Dv();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Ov();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,zv()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=Pv();const a=Fv(),s=Fv();return t.forEach((e,t)=>{const s=n.get(t.key);r.has(t.key)&&(void 0===s||s.mutation instanceof pw)?i=i.insert(t.key,t):void 0!==s?(a.set(t.key,s.mutation.getFieldMask()),uw(s.mutation,t,s.mutation.getFieldMask(),Fg.now())):a.set(t.key,ay.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>a.set(e,t)),t.forEach((e,t)=>s.set(e,new Db(t,a.get(e)??null))),s))}recalculateAndSaveOverlays(e,t){const n=Fv();let r=new ey((e,t)=>e-t),i=zv();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const a=t.get(e);if(null===a)return;let s=n.get(e)||ay.empty();s=i.applyToLocalView(a,s),n.set(e,s);const o=(r.get(i.batchId)||zv()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{const a=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),o=r.key,l=r.value,c=Lv();l.forEach(e=>{if(!i.has(e)){const r=lw(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}}),a.push(this.documentOverlayCache.saveOverlays(e,o,c))}return Wg.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return Ig.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Wg.resolve(Ov());let s=-1,o=i;return a.next(t=>Wg.forEach(t,(t,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(t)?Wg.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,zv())).next(e=>({batchId:s,changes:Mv(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ig(t)).next(e=>{let t=Dv();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let a=Dv();return this.indexManager.getCollectionParents(e,i).next(s=>Wg.forEach(s,s=>{const o=(l=t,c=s.child(i),new yv(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,c;return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{a=a.insert(e,t)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Wy.newInvalidDocument(r)))});let n=Dv();return e.forEach((e,r)=>{const a=i.get(e);void 0!==a&&uw(a.mutation,r,ay.empty(),Fg.now()),Iv(t,r)&&(n=n.insert(e,r))}),n})}}
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
 */class Ob{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return Wg.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,{id:(n=t).id,version:n.version,createTime:Qw(n.createTime)}),Wg.resolve();var n}getNamedQuery(e,t){return Wg.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,{name:(n=t).name,query:bb(n.bundledQuery),readTime:Qw(n.readTime)}),Wg.resolve();var n}}
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
 */class Lb{constructor(){this.overlays=new ey(Ig.comparator),this.Lr=new Map}getOverlay(e,t){return Wg.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ov();return Wg.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),Wg.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Lr.delete(n)),Wg.resolve()}getOverlaysForCollection(e,t,n){const r=Ov(),i=t.length+1,a=new Ig(t.child("")),s=this.overlays.getIteratorFrom(a);for(;s.hasNext();){const e=s.getNext().value,a=e.getKey();if(!t.isPrefixOf(a.path))break;a.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Wg.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ey((e,t)=>e-t);const a=this.overlays.getIterator();for(;a.hasNext();){const e=a.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Ov(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const s=Ov(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>s.set(e,t)),!(s.size()>=r)););return Wg.resolve(s)}St(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new kw(t,n));let i=this.Lr.get(t);void 0===i&&(i=zv(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}
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
 */class Fb{constructor(){this.sessionToken=oy.EMPTY_BYTE_STRING}getSessionToken(e){return Wg.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Wg.resolve()}}
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
 */class Ub{constructor(){this.kr=new ry(Vb.qr),this.Kr=new ry(Vb.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new Vb(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new Vb(e,t))}Qr(e,t){e.forEach(e=>this.removeReference(e,t))}Gr(e){const t=new Ig(new Sg([])),n=new Vb(t,e),r=new Vb(t,e+1),i=[];return this.Kr.forEachInRange([n,r],e=>{this.Wr(e),i.push(e.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new Ig(new Sg([])),n=new Vb(t,e),r=new Vb(t,e+1);let i=zv();return this.Kr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Vb(e,0),n=this.kr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Vb{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return Ig.comparator(e.key,t.key)||mg(e.Jr,t.Jr)}static Ur(e,t){return mg(e.Jr,t.Jr)||Ig.comparator(e.key,t.key)}}
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
 */class zb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ry(Vb.qr)}checkEmpty(e){return Wg.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new bw(i,t,n,r);this.mutationQueue.push(a);for(const t of r)this.Hr=this.Hr.add(new Vb(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Wg.resolve(a)}lookupMutationBatch(e,t){return Wg.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),i=r<0?0:r;return Wg.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Wg.resolve(0===this.mutationQueue.length?-1:this.Yn-1)}getAllMutationBatches(e){return Wg.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Vb(t,0),r=new Vb(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,r],e=>{const t=this.Zr(e.Jr);i.push(t)}),Wg.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ry(mg);return t.forEach(e=>{const t=new Vb(e,0),r=new Vb(e,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([t,r],e=>{n=n.add(e.Jr)})}),Wg.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ig.isDocumentKey(i)||(i=i.child(""));const a=new Vb(new Ig(i),0);let s=new ry(mg);return this.Hr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(s=s.add(e.Jr)),!0)},a),Wg.resolve(this.Yr(s))}Yr(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){eg(0===this.ei(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return Wg.forEach(t.mutations,r=>{const i=new Vb(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Hr=n})}nr(e){}containsKey(e,t){const n=new Vb(t,0),r=this.Hr.firstAfterOrEqual(n);return Wg.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Wg.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class jb{constructor(e){this.ti=e,this.docs=new ey(Ig.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Wg.resolve(n?n.document.mutableCopy():Wy.newInvalidDocument(t))}getEntries(e,t){let n=Pv();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Wy.newInvalidDocument(e))}),Wg.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Pv();const a=t.path,s=new Ig(a.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:e,value:{document:s}}=o.getNext();if(!a.isPrefixOf(e.path))break;e.path.length>a.length+1||jg(Vg(s),n)<=0||(r.has(s.key)||Iv(t,s))&&(i=i.insert(s.key,s.mutableCopy()))}return Wg.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Xm(9500)}ni(e,t){return Wg.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Bb(this)}getSize(e){return Wg.resolve(this.size)}}class Bb extends Rb{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)}),Wg.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}
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
 */class $b{constructor(e){this.persistence=e,this.ri=new Av(e=>pv(e),mv),this.lastRemoteSnapshotVersion=Ug.min(),this.highestTargetId=0,this.ii=0,this.si=new Ub,this.targetCount=0,this.oi=Ib._r()}forEachTarget(e,t){return this.ri.forEach((e,n)=>t(n)),Wg.resolve()}getLastRemoteSnapshotVersion(e){return Wg.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Wg.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),Wg.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),Wg.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ib(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,Wg.resolve()}updateTargetData(e,t){return this.lr(t),Wg.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,Wg.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.ri.forEach((a,s)=>{s.sequenceNumber<=t&&null===n.get(s.targetId)&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,s.targetId)),r++)}),Wg.waitFor(i).next(()=>r)}getTargetCount(e){return Wg.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return Wg.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),Wg.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Wg.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),Wg.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return Wg.resolve(n)}containsKey(e,t){return Wg.resolve(this.si.containsKey(t))}}
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
 */class Wb{constructor(e,t){this._i={},this.overlays={},this.ai=new Kg(0),this.ui=!1,this.ui=!0,this.ci=new Fb,this.referenceDelegate=e(this),this.li=new $b(this),this.indexManager=new Eb,this.remoteDocumentCache=new jb(e=>this.referenceDelegate.hi(e)),this.serializer=new wb(t),this.Pi=new Ob(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Lb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new zb(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){Gm("MemoryPersistence","Starting transaction:",e);const r=new qb(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(e=>this.referenceDelegate.Ei(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ii(e,t){return Wg.or(Object.values(this._i).map(n=>()=>n.containsKey(e,t)))}}class qb extends Bg{constructor(e){super(),this.currentSequenceNumber=e}}class Kb{constructor(e){this.persistence=e,this.Ri=new Ub,this.Ai=null}static Vi(e){return new Kb(e)}get di(){if(this.Ai)return this.Ai;throw Xm(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),Wg.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),Wg.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),Wg.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(e=>this.di.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.di.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Wg.forEach(this.di,n=>{const r=Ig.fromPath(n);return this.mi(e,r).next(e=>{e||t.removeEntry(r,Ug.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(e=>{e?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return Wg.or([()=>Wg.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Hb{constructor(e,t){this.persistence=e,this.fi=new Av(e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Jg(t)),t=Qg(e.get(n),t);return Jg(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new Pb(e,t)}(this,t)}static Vi(e,t){return new Hb(e,t)}Ti(){}Ei(e){return Wg.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}pr(e){let t=0;return this.mr(e,e=>{t++}).next(()=>t)}mr(e,t){return Wg.forEach(this.fi,(n,r)=>this.wr(e,n,r).next(e=>e?Wg.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,r=>this.wr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,Ug.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),Wg.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),Wg.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),Wg.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),Wg.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Oy(e.data.value)),t}wr(e,t,n){return Wg.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.fi.get(t);return Wg.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
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
 */class Gb{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=r}static Is(e,t){let n=zv(),r=zv();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Gb(e,t.fromCache,n,r)}}
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
 */class Qb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
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
 */class Jb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=ih()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(nh())>0?6:4}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.gs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ps(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new Qb;return this.ys(e,t,n).next(r=>{if(i.result=r,this.As)return this.ws(e,t,n,r.size)})}).next(()=>i.result)}ws(e,t,n,r){return n.documentReadCount<this.Vs?(Hm()<=Sh.DEBUG&&Gm("QueryEngine","SDK will not create cache indexes for query:",Tv(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Wg.resolve()):(Hm()<=Sh.DEBUG&&Gm("QueryEngine","Query:",Tv(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(Hm()<=Sh.DEBUG&&Gm("QueryEngine","The SDK decides to create cache indexes for query:",Tv(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ev(t))):Wg.resolve())}gs(e,t){if(wv(t))return Wg.resolve(null);let n=Ev(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=kv(t,null,"F"),n=Ev(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=zv(...r);return this.fs.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const a=this.Ss(t,r);return this.bs(t,a,i,n.readTime)?this.gs(e,kv(t,null,"F")):this.Ds(e,a,t,n)}))})))}ps(e,t,n,r){return wv(t)||r.isEqual(Ug.min())?Wg.resolve(null):this.fs.getDocuments(e,n).next(i=>{const a=this.Ss(t,i);return this.bs(t,a,n,r)?Wg.resolve(null):(Hm()<=Sh.DEBUG&&Gm("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Tv(t)),this.Ds(e,a,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Ug.fromTimestamp(1e9===r?new Fg(n+1,0):new Fg(n,r));return new zg(i,Ig.empty(),t)}(r,-1)).next(e=>e))})}Ss(e,t){let n=new ry(Cv(e));return t.forEach((t,r)=>{Iv(e,r)&&(n=n.add(r))}),n}bs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,n){return Hm()<=Sh.DEBUG&&Gm("QueryEngine","Using full collection scan to execute query:",Tv(t)),this.fs.getDocumentsMatchingQuery(e,t,zg.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
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
 */const Yb="LocalStore";class Xb{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new ey(mg),this.Fs=new Av(e=>pv(e),mv),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}async function Zb(e,t){const n=tg(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Os(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],a=[];let s=zv();for(const e of r){i.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}for(const e of t){a.push(e.batchId);for(const t of e.mutations)s=s.add(t.key)}return n.localDocuments.getDocuments(e,s).next(e=>({Ns:e,removedBatchIds:i,addedBatchIds:a}))})})}function eE(e){const t=tg(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function tE(e,t){const n=tg(e),r=t.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const s=[];t.targetChanges.forEach((a,o)=>{const l=i.get(o);if(!l)return;s.push(n.li.removeMatchingKeys(e,a.removedDocuments,o).next(()=>n.li.addMatchingKeys(e,a.addedDocuments,o)));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(oy.EMPTY_BYTE_STRING,Ug.min()).withLastLimboFreeSnapshotVersion(Ug.min()):a.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(a.resumeToken,r)),i=i.insert(o,c),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,c,a)&&s.push(n.li.updateTargetData(e,c))});let o=Pv(),l=zv();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),s.push(function(e,t,n){let r=zv(),i=zv();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Pv();return n.forEach((n,a)=>{const s=e.get(n);a.isFoundDocument()!==s.isFoundDocument()&&(i=i.add(n)),a.isNoDocument()&&a.version.isEqual(Ug.min())?(t.removeEntry(n,a.readTime),r=r.insert(n,a)):!s.isValidDocument()||a.version.compareTo(s.version)>0||0===a.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(a),r=r.insert(n,a)):Gm(Yb,"Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",a.version)}),{Bs:r,Ls:i}})}(e,a,t.documentUpdates).next(e=>{o=e.Bs,l=e.Ls})),!r.isEqual(Ug.min())){const t=n.li.getLastRemoteSnapshotVersion(e).next(t=>n.li.setTargetsMetadata(e,e.currentSequenceNumber,r));s.push(t)}return Wg.waitFor(s).next(()=>a.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,o,l)).next(()=>o)}).then(e=>(n.vs=i,e))}function nE(e,t){const n=tg(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function rE(e,t,n){const r=tg(e),i=r.vs.get(t),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!qg(e))throw e;Gm(Yb,`Failed to update sequence numbers for target ${t}: ${e}`)}r.vs=r.vs.remove(t),r.Fs.delete(i.target)}function iE(e,t,n){const r=tg(e);let i=Ug.min(),a=zv();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=tg(e),i=r.Fs.get(n);return void 0!==i?Wg.resolve(r.vs.get(i)):r.li.getTargetData(t,n)}(r,e,Ev(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(e,t.targetId).next(e=>{a=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?i:Ug.min(),n?a:zv())).next(e=>(function(e,t,n){let r=e.Ms.get(t)||Ug.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ms.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,ks:a})))}class aE{constructor(){this.activeTargetIds=jv}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sE{constructor(){this.vo=new aE,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new aE,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class oE{Mo(e){}shutdown(){}}
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
 */const lE="ConnectivityMonitor";class cE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Gm(lE,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Gm(lE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let uE=null;function hE(){return null===uE?uE=268435456+Math.round(2147483648*Math.random()):uE++,"0x"+uE.toString(16)
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
 */}const dE="RestConnection",fE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class pE{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===by?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,i){const a=hE(),s=this.Qo(e,t.toUriEncodedString());Gm(dE,`Sending RPC '${e}' ${a}:`,s,n);const o={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(o,r,i);const{host:l}=new URL(s),c=yh(l);return this.zo(e,s,o,n,c).then(t=>(Gm(dE,`Received RPC '${e}' ${a}: `,t),t),t=>{throw Jm(dE,`RPC '${e}' ${a} failed with error: `,t,"url: ",s,"request:",n),t})}jo(e,t,n,r,i,a){return this.Wo(e,t,n,r,i)}Go(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+qm,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Qo(e,t){const n=fE[e];let r=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
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
 */class mE{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}
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
 */const gE="WebChannelConnection",yE=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class vE extends pE{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!vE.c_){const e=jm();yE(e,zm.STAT_EVENT,e=>{e.stat===Vm.PROXY?Gm(gE,"STAT_EVENT: detected buffering proxy"):e.stat===Vm.NOPROXY&&Gm(gE,"STAT_EVENT: detected no buffering proxy")}),vE.c_=!0}}zo(e,t,n,r,i){const a=hE();return new Promise((i,s)=>{const o=new Om;o.setWithCredentials(!0),o.listenOnce(Fm.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case Um.NO_ERROR:const t=o.getResponseJson();Gm(gE,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(t)),i(t);break;case Um.TIMEOUT:Gm(gE,`RPC '${e}' ${a} timed out`),s(new rg(ng.DEADLINE_EXCEEDED,"Request time out"));break;case Um.HTTP_ERROR:const n=o.getStatus();if(Gm(gE,`RPC '${e}' ${a} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ng).indexOf(t)>=0?t:ng.UNKNOWN}(t.status);s(new rg(e,t.message))}else s(new rg(ng.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new rg(ng.UNAVAILABLE,"Connection failed."));break;default:Xm(9055,{l_:e,streamId:a,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{Gm(gE,`RPC '${e}' ${a} completed.`)}});const l=JSON.stringify(r);Gm(gE,`RPC '${e}' ${a} sending request:`,r),o.send(t,"POST",l,n,15)})}T_(e,t,n){const r=hE(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},o=this.longPollingOptions.timeoutSeconds;void 0!==o&&(s.longPollingTimeout=Math.round(1e3*o)),this.useFetchStreams&&(s.useFetchStreams=!0),this.Go(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;const l=i.join("");Gm(gE,`Creating RPC '${e}' stream ${r}: ${l}`,s);const c=a.createWebChannel(l,s);this.E_(c);let u=!1,h=!1;const d=new mE({Jo:t=>{h?Gm(gE,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(u||(Gm(gE,`Opening RPC '${e}' stream ${r} transport.`),c.open(),u=!0),Gm(gE,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},Ho:()=>c.close()});return yE(c,Lm.EventType.OPEN,()=>{h||(Gm(gE,`RPC '${e}' stream ${r} transport opened.`),d.i_())}),yE(c,Lm.EventType.CLOSE,()=>{h||(h=!0,Gm(gE,`RPC '${e}' stream ${r} transport closed`),d.o_(),this.I_(c))}),yE(c,Lm.EventType.ERROR,t=>{h||(h=!0,Jm(gE,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),d.o_(new rg(ng.UNAVAILABLE,"The operation could not be completed")))}),yE(c,Lm.EventType.MESSAGE,t=>{if(!h){const n=t.data[0];eg(!!n,16349);const i=n,a=i?.error||i[0]?.error;if(a){Gm(gE,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=_w[e];if(void 0!==t)return Iw(t)}(t),i=a.message;"NOT_FOUND"===t&&i.includes("database")&&i.includes("does not exist")&&i.includes(this.databaseId.database)&&Jm(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=ng.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),h=!0,d.o_(new rg(n,i)),c.close()}else Gm(gE,`RPC '${e}' stream ${r} received:`,n),d.__(n)}}),vE.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Bm()}}
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
 */function wE(){return"undefined"!=typeof document?document:null}
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
 */function bE(e){return new Ww(e,!0)}
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
 */vE.c_=!1;class EE{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&Gm("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
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
 */const kE="PersistentStream";class SE{constructor(e,t,n,r,i,a,s,o){this.Ci=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=s,this.listener=o,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new EE(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===ng.RESOURCE_EXHAUSTED?(Qm(t.toString()),Qm("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===ng.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new rg(ng.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Gm(kE,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(Gm(kE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _E extends SE{constructor(e,t,n,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Xm(39313,{state:r}),a=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(eg(void 0===t||"string"==typeof t,58123),oy.fromBase64String(t||"")):(eg(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),oy.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(e){const t=void 0===e.code?ng.UNKNOWN:Iw(e.code);return new rg(t,e.message||"")}(o);n=new Lw(i,a,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=eb(e,r.document.name),a=Qw(r.document.updateTime),s=r.document.createTime?Qw(r.document.createTime):Ug.min(),o=new By({mapValue:{fields:r.document.fields}}),l=Wy.newFoundDocument(i,a,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Mw(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=eb(e,r.document),a=r.readTime?Qw(r.readTime):Ug.min(),s=Wy.newNoDocument(i,a),o=r.removedTargetIds||[];n=new Mw([],o,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=eb(e,r.document),a=r.removedTargetIds||[];n=new Mw([],a,i,null)}else{if(!("filter"in t))return Xm(11601,{Vt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,a=new Sw(r,i),s=e.targetId;n=new Ow(s,a)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ug.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ug.min():t.readTime?Qw(t.readTime):Ug.min()}(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=nb(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=gv(r)?{documents:ab(e,r)}:{query:sb(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Hw(e,t.resumeToken);const r=qw(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ug.min())>0){n.readTime=Kw(e,t.snapshotVersion.toTimestamp());const r=qw(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Xm(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=nb(this.serializer),t.removeTarget=e,this.q_(t)}}class TE extends SE{constructor(e,t,n,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return eg(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,eg(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){eg(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(eg(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?Qw(e.updateTime):Qw(t);return n.isEqual(Ug.min())&&(n=Qw(t)),new iw(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=Qw(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=nb(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof fw)n={update:ib(e,t.key,t.value)};else if(t instanceof vw)n={delete:Zw(e,t.key)};else if(t instanceof pw)n={update:ib(e,t.key,t.data),updateMask:mb(t.fieldMask)};else{if(!(t instanceof ww))return Xm(16599,{dt:t.type});n={verify:Zw(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Qv)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Jv)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Xv)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ew)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw Xm(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Gw(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Xm(27497))),n;var r,i}(this.serializer,e))};this.q_(t)}}
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
 */class IE{}class CE extends IE{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new rg(ng.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Yw(t,n),r,i,a)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ng.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rg(ng.UNKNOWN,e.toString())})}jo(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,s])=>this.connection.jo(e,Yw(t,n),r,a,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ng.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rg(ng.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class xE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Qm(t),this.aa=!1):Gm("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
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
 */const AE="RemoteStore";class NE{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(e=>{n.enqueueAndForget(async()=>{VE(this)&&(Gm(AE,"Restarting streams for network reachability change."),await async function(e){const t=tg(e);t.Ia.add(4),await RE(t),t.Va.set("Unknown"),t.Ia.delete(4),await PE(t)}(this))})}),this.Va=new xE(n,r)}}async function PE(e){if(VE(e))for(const t of e.Ra)await t(!0)}async function RE(e){for(const t of e.Ra)await t(!1)}function DE(e,t){const n=tg(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),UE(n)?FE(n):rk(n).O_()&&OE(n,t))}function ME(e,t){const n=tg(e),r=rk(n);n.Ea.delete(t),r.O_()&&LE(n,t),0===n.Ea.size&&(r.O_()?r.L_():VE(n)&&n.Va.set("Unknown"))}function OE(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ug.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}rk(e).Z_(t)}function LE(e,t){e.da.$e(t),rk(e).X_(t)}function FE(e){e.da=new Uw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),rk(e).start(),e.Va.ua()}function UE(e){return VE(e)&&!rk(e).x_()&&e.Ea.size>0}function VE(e){return 0===tg(e).Ia.size}function zE(e){e.da=void 0}async function jE(e){e.Va.set("Online")}async function BE(e){e.Ea.forEach((t,n)=>{OE(e,t)})}async function $E(e,t){zE(e),UE(e)?(e.Va.ha(t),FE(e)):e.Va.set("Unknown")}async function WE(e,t,n){if(e.Va.set("Online"),t instanceof Lw&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ea.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ea.delete(r),e.da.removeTarget(r))}(e,t)}catch(n){Gm(AE,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await qE(e,n)}else if(t instanceof Mw?e.da.Xe(t):t instanceof Ow?e.da.st(t):e.da.tt(t),!n.isEqual(Ug.min()))try{const t=await eE(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.da.Tt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ea.get(r);i&&e.Ea.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ea.get(t);if(!r)return;e.Ea.set(t,r.withResumeToken(oy.EMPTY_BYTE_STRING,r.snapshotVersion)),LE(e,t);const i=new vb(r.target,t,n,r.sequenceNumber);OE(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Gm(AE,"Failed to raise snapshot:",t),await qE(e,t)}}async function qE(e,t,n){if(!qg(t))throw t;e.Ia.add(1),await RE(e),e.Va.set("Offline"),n||(n=()=>eE(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Gm(AE,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await PE(e)})}function KE(e,t){return t().catch(n=>qE(e,n,t))}async function HE(e){const t=tg(e),n=ik(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:-1;for(;GE(t);)try{const e=await nE(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,QE(t,e)}catch(e){await qE(t,e)}JE(t)&&YE(t)}function GE(e){return VE(e)&&e.Ta.length<10}function QE(e,t){e.Ta.push(t);const n=ik(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function JE(e){return VE(e)&&!ik(e).x_()&&e.Ta.length>0}function YE(e){ik(e).start()}async function XE(e){ik(e).ra()}async function ZE(e){const t=ik(e);for(const n of e.Ta)t.ea(n.mutations)}async function ek(e,t,n){const r=e.Ta.shift(),i=Ew.from(r,t,n);await KE(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await HE(e)}async function tk(e,t){t&&ik(e).Y_&&await async function(e,t){if(function(e){switch(e){case ng.OK:return Xm(64938);case ng.CANCELLED:case ng.UNKNOWN:case ng.DEADLINE_EXCEEDED:case ng.RESOURCE_EXHAUSTED:case ng.INTERNAL:case ng.UNAVAILABLE:case ng.UNAUTHENTICATED:return!1;case ng.INVALID_ARGUMENT:case ng.NOT_FOUND:case ng.ALREADY_EXISTS:case ng.PERMISSION_DENIED:case ng.FAILED_PRECONDITION:case ng.ABORTED:case ng.OUT_OF_RANGE:case ng.UNIMPLEMENTED:case ng.DATA_LOSS:return!0;default:return Xm(15467,{code:e})}}(n=t.code)&&n!==ng.ABORTED){const n=e.Ta.shift();ik(e).B_(),await KE(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await HE(e)}var n}(e,t),JE(e)&&YE(e)}async function nk(e,t){const n=tg(e);n.asyncQueue.verifyOperationInProgress(),Gm(AE,"RemoteStore received new credentials");const r=VE(n);n.Ia.add(3),await RE(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await PE(n)}function rk(e){return e.ma||(e.ma=function(e,t,n){const r=tg(e);return r.sa(),new _E(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:jE.bind(null,e),Yo:BE.bind(null,e),t_:$E.bind(null,e),H_:WE.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),UE(e)?FE(e):e.Va.set("Unknown")):(await e.ma.stop(),zE(e))})),e.ma}function ik(e){return e.fa||(e.fa=function(e,t,n){const r=tg(e);return r.sa(),new TE(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:XE.bind(null,e),t_:tk.bind(null,e),ta:ZE.bind(null,e),na:ek.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await HE(e)):(await e.fa.stop(),e.Ta.length>0&&(Gm(AE,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
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
 */}class ak{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ig,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const a=Date.now()+n,s=new ak(e,t,a,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new rg(ng.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sk(e,t){if(Qm("AsyncQueue",`${t}: ${e}`),qg(e))return new rg(ng.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class ok{static emptySet(e){return new ok(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ig.comparator(t.key,n.key):(e,t)=>Ig.comparator(e.key,t.key),this.keyedMap=Dv(),this.sortedSet=new ey(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ok))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ok;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class lk{constructor(){this.ga=new ey(Ig.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Xm(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class ck{constructor(e,t,n,r,i,a,s,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=s,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const a=[];return t.forEach(e=>{a.push({type:0,doc:e})}),new ck(e,t,ok.emptySet(t),a,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sv(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
 */class uk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class hk{constructor(){this.queries=dk(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=tg(e),r=n.queries;n.queries=dk(),r.forEach((e,n)=>{for(const e of n.Sa)e.onError(t)})}(this,new rg(ng.ABORTED,"Firestore shutting down"))}}function dk(){return new Av(e=>_v(e),Sv)}function fk(e,t){const n=tg(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.Sa)t.Fa(e)&&(r=!0);i.wa=e}}r&&mk(n)}function pk(e,t,n){const r=tg(e),i=r.queries.get(t);if(i)for(const e of i.Sa)e.onError(n);r.queries.delete(t)}function mk(e){e.Ca.forEach(e=>{e.next()})}var gk,yk;(yk=gk||(gk={})).Ma="default",yk.Cache="cache";class vk{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ck(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==t;return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=ck.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==gk.Cache}}
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
 */class wk{constructor(e){this.key=e}}class bk{constructor(e){this.key=e}}class Ek{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=zv(),this.mutatedKeys=zv(),this.eu=Cv(e),this.tu=new ok(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new lk,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,s=!1;const o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),u=Iv(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.su(c,u)||(n.track({type:2,doc:u}),f=!0,(o&&this.eu(u,o)>0||l&&this.eu(u,l)<0)&&(s=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(o||l)&&(s=!0)),f&&(u?(a=a.add(u),i=d?i.add(e):i.delete(e)):(a=a.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;a.size>this.query.limit;){const e="F"===this.query.limitType?a.last():a.first();a=a.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tu:a,iu:n,bs:s,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Xm(20277,{Vt:e})}};return n(e)-n(t)}(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1;const s=t&&!r?this._u():[],o=0===this.Ya.size&&this.current&&!r?1:0,l=o!==this.Xa;return this.Xa=o,0!==a.length||l?{snapshot:new ck(this.query,e.tu,i,a,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:s}:{au:s}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new lk,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=zv(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Ya=this.Ya.add(e.key))});const t=[];return e.forEach(e=>{this.Ya.has(e)||t.push(new bk(e))}),this.Ya.forEach(n=>{e.has(n)||t.push(new wk(n))}),t}cu(e){this.Za=e.ks,this.Ya=zv();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ck.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const kk="SyncEngine";class Sk{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class _k{constructor(e){this.key=e,this.hu=!1}}class Tk{constructor(e,t,n,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Av(e=>_v(e),Sv),this.Eu=new Map,this.Iu=new Set,this.Ru=new ey(Ig.comparator),this.Au=new Map,this.Vu=new Ub,this.du={},this.mu=new Map,this.fu=Ib.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function Ik(e,t,n=!0){const r=Hk(e);let i;const a=r.Tu.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await xk(r,t,n,!0),i}async function Ck(e,t){const n=Hk(e);await xk(n,t,!0,!1)}async function xk(e,t,n,r){const i=await function(e,t){const n=tg(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.li.getTargetData(e,t).next(i=>i?(r=i,Wg.resolve(r)):n.li.allocateTargetId(e).next(i=>(r=new vb(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.li.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.vs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(e.targetId,e),n.Fs.set(t,e.targetId)),e})}(e.localStore,Ev(t)),a=i.targetId,s=e.sharedClientState.addLocalQueryTarget(a,n);let o;return r&&(o=await async function(e,t,n,r,i){e.pu=(t,n,r)=>async function(e,t,n,r){let i=t.view.ru(n);i.bs&&(i=await iE(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,i)));const a=r&&r.targetChanges.get(t.targetId),s=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,a,s);return jk(e,t.targetId,o.au),o.snapshot}(e,t,n,r);const a=await iE(e.localStore,t,!0),s=new Ek(t,a.ks),o=s.ru(a.documents),l=Dw.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),c=s.applyChanges(o,e.isPrimaryClient,l);jk(e,n,c.au);const u=new Sk(t,n,s);return e.Tu.set(t,u),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),c.snapshot}(e,t,a,"current"===s,i.resumeToken)),e.isPrimaryClient&&n&&DE(e.remoteStore,i),o}async function Ak(e,t,n){const r=tg(e),i=r.Tu.get(t),a=r.Eu.get(i.targetId);if(a.length>1)return r.Eu.set(i.targetId,a.filter(e=>!Sv(e,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rE(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ME(r.remoteStore,i.targetId),Vk(r,i.targetId)}).catch($g)):(Vk(r,i.targetId),await rE(r.localStore,i.targetId,!0))}async function Nk(e,t){const n=tg(e),r=n.Tu.get(t),i=n.Eu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ME(n.remoteStore,r.targetId))}async function Pk(e,t,n){const r=function(e){const t=tg(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ok.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Lk.bind(null,t),t}(e);try{const e=await function(e,t){const n=tg(e),r=Fg.now(),i=t.reduce((e,t)=>e.add(t.key),zv());let a,s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let o=Pv(),l=zv();return n.xs.getEntries(e,i).next(e=>{o=e,o.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,o)).next(i=>{a=i;const s=[];for(const e of t){const t=hw(e,a.get(e.key).overlayedDocument);null!=t&&s.push(new pw(e.key,t,$y(t.value.mapValue),aw.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,s,t)}).next(t=>{s=t;const r=t.applyToLocalDocumentSet(a,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:s.batchId,changes:Mv(a)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.du[e.currentUser.toKey()];r||(r=new ey(mg)),r=r.insert(t,n),e.du[e.currentUser.toKey()]=r}(r,e.batchId,n),await Wk(r,e.changes),await HE(r.remoteStore)}catch(e){const t=sk(e,"Failed to persist write");n.reject(t)}}async function Rk(e,t){const n=tg(e);try{const e=await tE(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t);r&&(eg(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?eg(r.hu,14607):e.removedDocuments.size>0&&(eg(r.hu,42227),r.hu=!1))}),await Wk(n,e,t)}catch(e){await $g(e)}}function Dk(e,t,n){const r=tg(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const i=r.view.va(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=tg(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.Sa)e.va(t)&&(r=!0)}),r&&mk(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Mk(e,t,n){const r=tg(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Au.get(t),a=i&&i.key;if(a){let e=new ey(Ig.comparator);e=e.insert(a,Wy.newNoDocument(a,Ug.min()));const n=zv().add(a),i=new Rw(Ug.min(),new Map,new ey(mg),e,n);await Rk(r,i),r.Ru=r.Ru.remove(a),r.Au.delete(t),$k(r)}else await rE(r.localStore,t,!1).then(()=>Vk(r,t,n)).catch($g)}async function Ok(e,t){const n=tg(e),r=t.batch.batchId;try{const e=await function(e,t){const n=tg(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,a=i.keys();let s=Wg.resolve();return a.forEach(e=>{s=s.next(()=>r.getEntry(t,e)).next(t=>{const a=n.docVersions.get(e);eg(null!==a,48541),t.version.compareTo(a)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),s.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=zv();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);Uk(n,r,null),Fk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wk(n,e)}catch(e){await $g(e)}}async function Lk(e,t,n){const r=tg(e);try{const e=await function(e,t){const n=tg(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(eg(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);Uk(r,t,n),Fk(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Wk(r,e)}catch(e){await $g(e)}}function Fk(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function Uk(e,t,n){const r=tg(e);let i=r.du[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.du[r.currentUser.toKey()]=i}}function Vk(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Eu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(t=>{e.Vu.containsKey(t)||zk(e,t)})}function zk(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);null!==n&&(ME(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),$k(e))}function jk(e,t,n){for(const r of n)r instanceof wk?(e.Vu.addReference(r.key,t),Bk(e,r)):r instanceof bk?(Gm(kk,"Document no longer in limbo: "+r.key),e.Vu.removeReference(r.key,t),e.Vu.containsKey(r.key)||zk(e,r.key)):Xm(19791,{wu:r})}function Bk(e,t){const n=t.key,r=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(r)||(Gm(kk,"New document in limbo: "+n),e.Iu.add(r),$k(e))}function $k(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new Ig(Sg.fromString(t)),r=e.fu.next();e.Au.set(r,new _k(n)),e.Ru=e.Ru.insert(n,r),DE(e.remoteStore,new vb(Ev(vv(n.path)),r,"TargetPurposeLimboResolution",Kg.ce))}}async function Wk(e,t,n){const r=tg(e),i=[],a=[],s=[];r.Tu.isEmpty()||(r.Tu.forEach((e,o)=>{s.push(r.pu(o,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(o.targetId)?.current;r.sharedClientState.updateQueryState(o.targetId,t?"current":"not-current")}if(e){i.push(e);const t=Gb.Is(o.targetId,e);a.push(t)}}))}),await Promise.all(s),r.Pu.H_(i),await async function(e,t){const n=tg(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Wg.forEach(t,t=>Wg.forEach(t.Ts,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Wg.forEach(t.Es,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!qg(e))throw e;Gm(Yb,"Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.vs.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(t,i)}}}(r.localStore,a))}async function qk(e,t){const n=tg(e);if(!n.currentUser.isEqual(t)){Gm(kk,"User change. New user:",t.toKey());const e=await Zb(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).mu.forEach(e=>{e.forEach(e=>{e.reject(new rg(ng.CANCELLED,i))})}),r.mu.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Wk(n,e.Ns)}var r,i}function Kk(e,t){const n=tg(e),r=n.Au.get(t);if(r&&r.hu)return zv().add(r.key);{let e=zv();const r=n.Eu.get(t);if(!r)return e;for(const t of r){const r=n.Tu.get(t);e=e.unionWith(r.view.nu)}return e}}function Hk(e){const t=tg(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Rk.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kk.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Mk.bind(null,t),t.Pu.H_=fk.bind(null,t.eventManager),t.Pu.yu=pk.bind(null,t.eventManager),t}class Gk{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bE(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return function(e,t,n,r){return new Xb(e,t,n,r)}(this.persistence,new Jb,e.initialUser,this.serializer)}Cu(e){return new Wb(Kb.Vi,this.serializer)}Du(e){return new sE}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gk.provider={build:()=>new Gk};class Qk extends Gk{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){eg(this.persistence.referenceDelegate instanceof Hb,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Nb(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?Tb.withCacheSize(this.cacheSizeBytes):Tb.DEFAULT;return new Wb(e=>Hb.Vi(e,t),this.serializer)}}class Jk{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Dk(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=qk.bind(null,this.syncEngine),await async function(e,t){const n=tg(e);t?(n.Ia.delete(2),await PE(n)):t||(n.Ia.add(2),await RE(n),n.Va.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hk}createDatastore(e){const t=bE(e.databaseInfo.databaseId),n=function(e){return new vE(e)}(e.databaseInfo);return function(e,t,n,r){return new CE(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Dk(this.syncEngine,e,0),a=cE.v()?new cE:new oE,new NE(t,n,r,i,a);var t,n,r,i,a}createSyncEngine(e,t){return function(e,t,n,r,i,a,s){const o=new Tk(e,t,n,r,i,a);return s&&(o.gu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=tg(e);Gm(AE,"RemoteStore shutting down."),t.Ia.add(5),await RE(t),t.Aa.shutdown(),t.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Jk.provider={build:()=>new Jk};
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
class Yk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Qm("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
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
 */const Xk="FirestoreClient";class Zk{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=Wm.UNAUTHENTICATED,this.clientId=pg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{Gm(Xk,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(Gm(Xk,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ig;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=sk(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function eS(e,t){e.asyncQueue.verifyOperationInProgress(),Gm(Xk,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Zb(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function tS(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Gm(Xk,"Using user provided OfflineComponentProvider");try{await eS(e,e._uninitializedComponentsProvider._offline)}catch(n){const r=n;if(!("FirebaseError"===(t=r).name?t.code===ng.FAILED_PRECONDITION||t.code===ng.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw r;Jm("Error using user provided cache. Falling back to memory cache: "+r),await eS(e,new Gk)}}else Gm(Xk,"Using default OfflineComponentProvider"),await eS(e,new Qk(void 0));var t;return e._offlineComponents}(e);Gm(Xk,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>nk(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>nk(t.remoteStore,n)),e._onlineComponents=t}async function nS(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Gm(Xk,"Using user provided OnlineComponentProvider"),await tS(e,e._uninitializedComponentsProvider._online)):(Gm(Xk,"Using default OnlineComponentProvider"),await tS(e,new Jk))),e._onlineComponents}async function rS(e){const t=await nS(e),n=t.eventManager;return n.onListen=Ik.bind(null,t.syncEngine),n.onUnlisten=Ak.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Ck.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Nk.bind(null,t.syncEngine),n}function iS(e,t,n={}){const r=new ig;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const a=new Yk({next:o=>{a.Nu(),t.enqueueAndForget(()=>async function(e,t){const n=tg(e),r=t.query;let i=3;const a=n.queries.get(r);if(a){const e=a.Sa.indexOf(t);e>=0&&(a.Sa.splice(e,1),0===a.Sa.length?i=t.Da()?0:1:!a.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}(e,s));const l=o.docs.has(n);!l&&o.fromCache?i.reject(new rg(ng.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&r&&"server"===r.source?i.reject(new rg(ng.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),s=new vk(vv(n.path),a,{includeMetadataChanges:!0,qa:!0});return async function(e,t){const n=tg(e);let r=3;const i=t.query;let a=n.queries.get(i);a?!a.ba()&&t.Da()&&(r=2):(a=new uk,r=t.Da()?0:1);try{switch(r){case 0:a.wa=await n.onListen(i,!0);break;case 1:a.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=sk(e,`Initialization of query '${Tv(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,a),a.Sa.push(t),t.va(n.onlineState),a.wa&&t.Fa(a.wa)&&mk(n)}(e,s)}(await rS(e),e.asyncQueue,t,n,r)),r.promise}function aS(e,t){const n=new ig;return e.asyncQueue.enqueueAndForget(async()=>Pk(await function(e){return nS(e).then(e=>e.syncEngine)}(e),t,n)),n.promise
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
 */}function sS(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const oS=new Map;
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
const lS="firestore.googleapis.com",cS=!0;class uS{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new rg(ng.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lS,this.ssl=cS}else this.host=e.host,this.ssl=e.ssl??cS;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=_b;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new rg(ng.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new rg(ng.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sS(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new rg(ng.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new rg(ng.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new rg(ng.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class hS{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new rg(ng.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new rg(ng.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uS(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new sg;switch(e.type){case"firstParty":return new ug(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new rg(ng.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=oS.get(e);t&&(Gm("ComponentProvider","Removing Datastore"),oS.delete(e),t.terminate())}(this),Promise.resolve()}}function dS(e,t,n,r={}){e=Rg(e,hS);const i=yh(t),a=e._getSettings(),s={...a,emulatorOptions:e._getEmulatorOptions()},o=`${t}:${n}`;i&&vh(`https://${o}`),a.host!==lS&&a.host!==o&&Jm("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...a,host:o,ssl:i,emulatorOptions:r};if(!uh(l,s)&&(e._setSettings(l),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Wm.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Gu(JSON.stringify({alg:"none",type:"JWT"})),Gu(JSON.stringify(a)),""].join(".")}(r.mockUserToken,e._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new rg(ng.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Wm(i)}e._authCredentials=new og(new ag(t,n))}}
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
 */class fS{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new fS(this.firestore,e,this._query)}}class pS{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mS(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pS(this.firestore,e,this._key)}toJSON(){return{type:pS._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Mg(t,pS._jsonSchema))return new pS(e,n||null,new Ig(Sg.fromString(t.referencePath)))}}pS._jsonSchemaVersion="firestore/documentReference/1.0",pS._jsonSchema={type:Dg("string",pS._jsonSchemaVersion),referencePath:Dg("string")};class mS extends fS{constructor(e,t,n){super(e,t,vv(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pS(this.firestore,null,new Ig(e))}withConverter(e){return new mS(this.firestore,e,this._path)}}function gS(e,t,...n){if(e=gh(e),Cg("collection","path",t),e instanceof hS){const r=Sg.fromString(t,...n);return Ag(r),new mS(e,null,r)}{if(!(e instanceof pS||e instanceof mS))throw new rg(ng.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Sg.fromString(t,...n));return Ag(r),new mS(e.firestore,null,r)}}function yS(e,t,...n){if(e=gh(e),1===arguments.length&&(t=pg.newId()),Cg("doc","path",t),e instanceof hS){const r=Sg.fromString(t,...n);return xg(r),new pS(e,null,new Ig(r))}{if(!(e instanceof pS||e instanceof mS))throw new rg(ng.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Sg.fromString(t,...n));return xg(r),new pS(e.firestore,e instanceof mS?e.converter:null,new Ig(r))}}
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
 */const vS="AsyncQueue";class wS{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new EE(this,"async_queue_retry"),this._c=()=>{const e=wE();e&&Gm(vS,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=wE();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=wE();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new ig;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!qg(e))throw e;Gm(vS,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,Qm("INTERNAL UNHANDLED ERROR: ",bS(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=ak.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&Xm(47125,{Pc:bS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function bS(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class ES extends hS{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new wS,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wS(e),this._firestoreClient=void 0,await e}}}function kS(e){if(e._terminated)throw new rg(ng.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){const t=e._freezeSettings(),n=function(e,t,n,r,i){return new wy(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,sS(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}(e._databaseId,e._app?.options.appId||"",e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new Zk(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
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
 */(e),e._firestoreClient}class SS{constructor(e){this._byteString=e}static fromBase64String(e){try{return new SS(oy.fromBase64String(e))}catch(e){throw new rg(ng.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new SS(oy.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:SS._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Mg(e,SS._jsonSchema))return SS.fromBase64String(e.bytes)}}SS._jsonSchemaVersion="firestore/bytes/1.0",SS._jsonSchema={type:Dg("string",SS._jsonSchemaVersion),bytes:Dg("string")};
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
class _S{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new rg(ng.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tg(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class TS{constructor(e){this._methodName=e}}
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
 */class IS{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new rg(ng.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new rg(ng.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return mg(this._lat,e._lat)||mg(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:IS._jsonSchemaVersion}}static fromJSON(e){if(Mg(e,IS._jsonSchema))return new IS(e.latitude,e.longitude)}}IS._jsonSchemaVersion="firestore/geoPoint/1.0",IS._jsonSchema={type:Dg("string",IS._jsonSchemaVersion),latitude:Dg("number"),longitude:Dg("number")};
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
class CS{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:CS._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Mg(e,CS._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new CS(e.vectorValues);throw new rg(ng.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}CS._jsonSchemaVersion="firestore/vectorValue/1.0",CS._jsonSchema={type:Dg("string",CS._jsonSchemaVersion),vectorValues:Dg("object")};
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
const xS=/^__.*__$/;class AS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new pw(e,this.data,this.fieldMask,t,this.fieldTransforms):new fw(e,this.data,t,this.fieldTransforms)}}function NS(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Xm(40011,{dataSource:e})}}class PS{constructor(e,t,n,r,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new PS({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return BS(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(0===e.length)throw this.yc("Document fields must not be empty");if(NS(this.dataSource)&&xS.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class RS{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||bE(e)}I(e,t,n,r=!1){return new PS({dataSource:e,methodName:t,targetDoc:n,path:Tg.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function DS(e){const t=e._freezeSettings(),n=bE(e._databaseId);return new RS(e._databaseId,!!t.ignoreUndefinedProperties,n)}function MS(e,t,n,r,i,a={}){const s=e.I(a.merge||a.mergeFields?2:0,t,n,i);VS("Data must be an object, but it was:",s,r);const o=FS(r,s);let l,c;if(a.merge)l=new ay(s.fieldMask),c=s.fieldTransforms;else if(a.mergeFields){const e=[];for(const r of a.mergeFields){const i=zS(t,r,n);if(!s.contains(i))throw new rg(ng.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);$S(e,i)||e.push(i)}l=new ay(e),c=s.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,c=s.fieldTransforms;return new AS(new By(o),l,c)}class OS extends TS{_toFieldTransform(e){return new rw(e.path,new Qv)}isEqual(e){return e instanceof OS}}function LS(e,t){if(US(e=gh(e)))return VS("Unsupported field value:",t,e),FS(e,t);if(e instanceof TS)return function(e,t){if(!NS(t.dataSource))throw t.yc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.yc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.yc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=LS(i,t.gc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=gh(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Wv(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Fg.fromDate(e);return{timestampValue:Kw(t.serializer,n)}}if(e instanceof Fg){const n=new Fg(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Kw(t.serializer,n)}}if(e instanceof IS)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof SS)return{bytesValue:Hw(t.serializer,e._byteString)};if(e instanceof pS){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Jw(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof CS)return function(e,t){const n=e instanceof CS?e.toArray():e;return{mapValue:{fields:{[ky]:{stringValue:Ty},[Iy]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.yc("VectorValues must only contain numeric values.");return Bv(t.serializer,e)})}}}}}}(e,t);if(yb(e))return e._toProto(t.serializer);throw t.yc(`Unsupported field value: ${Pg(e)}`)}(e,t)}function FS(e,t){const n={};return Zg(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xg(e,(e,r)=>{const i=LS(r,t.dc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function US(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Fg||e instanceof IS||e instanceof SS||e instanceof pS||e instanceof TS||e instanceof CS||yb(e))}function VS(e,t,n){if(!US(n)||!Ng(n)){const r=Pg(n);throw"an object"===r?t.yc(e+" a custom object"):t.yc(e+" "+r)}}function zS(e,t,n){if((t=gh(t))instanceof _S)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(jS)>=0)throw BS(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new _S(...t.split("."))._internalPath}catch(r){throw BS(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw BS("Field path arguments must be of type string or ",e,!1,void 0,n)}const jS=new RegExp("[~\\*/\\[\\]]");function BS(e,t,n,r,i){const a=r&&!r.isEmpty(),s=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(a||s)&&(l+=" (found",a&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new rg(ng.INVALID_ARGUMENT,o+e+l)}function $S(e,t){return e.some(e=>e.isEqual(t))}
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
 */class WS{convertValue(e,t="none"){switch(Cy(e)){case 0:return null;case 1:return e.booleanValue;case 2:return uy(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hy(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Xm(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Xg(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[Iy].arrayValue?.values?.map(e=>uy(e.doubleValue));return new CS(t)}convertGeoPoint(e){return new IS(uy(e.latitude),uy(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=yy(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(vy(e));default:return null}}convertTimestamp(e){const t=cy(e);return new Fg(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Sg.fromString(e);eg(gb(n),9688,{name:e});const r=new Ey(n.get(1),n.get(3)),i=new Ig(n.popFirst(5));return r.isEqual(t)||Qm(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */class qS extends WS{constructor(e){super(),this.firestore=e}convertBytes(e){return new SS(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pS(this.firestore,null,t)}}function KS(){return new OS("serverTimestamp")}const HS="@firebase/firestore",GS="4.14.0";
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
 */class QS{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pS(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new JS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(zS("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class JS extends QS{data(){return super.data()}}function YS(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class XS{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ZS extends QS{constructor(e,t,n,r,i,a){super(e,t,n,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new e_(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(zS("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new rg(ng.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ZS._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}ZS._jsonSchemaVersion="firestore/documentSnapshot/1.0",ZS._jsonSchema={type:Dg("string",ZS._jsonSchemaVersion),bundleSource:Dg("string","DocumentSnapshot"),bundleName:Dg("string"),bundle:Dg("string")};class e_ extends ZS{data(e={}){return super.data(e)}}class t_{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new XS(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new e_(this._firestore,this._userDataWriter,n.key,n,new XS(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new rg(ng.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new e_(e._firestore,e._userDataWriter,n.doc.key,n.doc,new XS(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new e_(e._firestore,e._userDataWriter,t.doc.key,t.doc,new XS(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,a=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),a=n.indexOf(t.doc.key)),{type:n_(t.type),doc:r,oldIndex:i,newIndex:a}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new rg(ng.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=t_._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=pg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function n_(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Xm(61501,{type:e})}}
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
function r_(e){e=Rg(e,pS);const t=Rg(e.firestore,ES);return iS(kS(t),e._key).then(n=>function(e,t,n){const r=n.docs.get(t._key),i=new qS(e);return new ZS(e,i,t._key,r,new XS(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n))}function i_(e,t){const n=Rg(e.firestore,ES),r=yS(e),i=YS(e.converter,t);return a_(n,[MS(DS(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,aw.exists(!1))]).then(()=>r)}function a_(e,t){return aS(kS(e),t)}t_._jsonSchemaVersion="firestore/querySnapshot/1.0",t_._jsonSchema={type:Dg("string",t_._jsonSchemaVersion),bundleSource:Dg("string","QuerySnapshot"),bundleName:Dg("string"),bundle:Dg("string")},function(e,t=!0){qm=Md,Ad(new wh("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),a=new ES(new lg(e.getProvider("auth-internal")),new dg(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new rg(ng.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ey(e.options.projectId,t)}(i,n),i);return r={useFetchStreams:t,...r},a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Fd(HS,GS,e),Fd(HS,GS,"esm2020")}();const s_="@firebase/installations",o_="0.6.21",l_=1e4,c_=`w:${o_}`,u_="FIS_v2",h_=36e5,d_=new lh("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function f_(e){return e instanceof oh&&e.code.includes("request-failed")}
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
 */function p_({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function m_(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function g_(e,t){const n=(await t.json()).error;return d_.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function y_({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function v_(e,{refreshToken:t}){const n=y_(e);return n.append("Authorization",function(e){return`${u_} ${e}`}
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
 */(t)),n}async function w_(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function b_(e){return new Promise(t=>{setTimeout(t,e)})}
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
const E_=/^[cdef][\w-]{21}$/;function k_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
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
 */(e);return E_.test(t)?t:""}catch{return""}}function S_(e){return`${e.appName}!${e.appId}`}
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
 */const __=new Map;function T_(e,t){const n=S_(e);I_(n,t),function(e,t){const n=function(){!C_&&"BroadcastChannel"in self&&(C_=new BroadcastChannel("[Firebase] FID Change"),C_.onmessage=e=>{I_(e.data.key,e.data.fid)});return C_}();n&&n.postMessage({key:e,fid:t});0===__.size&&C_&&(C_.close(),C_=null)}(n,t)}function I_(e,t){const n=__.get(e);if(n)for(const e of n)e(t)}let C_=null;
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
const x_="firebase-installations-store";let A_=null;function N_(){return A_||(A_=Bh("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(x_)}})),A_}async function P_(e,t){const n=S_(e),r=(await N_()).transaction(x_,"readwrite"),i=r.objectStore(x_),a=await i.get(n);return await i.put(t,n),await r.done,a&&a.fid===t.fid||T_(e,t.fid),t}async function R_(e){const t=S_(e),n=(await N_()).transaction(x_,"readwrite");await n.objectStore(x_).delete(t),await n.done}async function D_(e,t){const n=S_(e),r=(await N_()).transaction(x_,"readwrite"),i=r.objectStore(x_),a=await i.get(n),s=t(a);return void 0===s?await i.delete(n):await i.put(s,n),await r.done,!s||a&&a.fid===s.fid||T_(e,s.fid),s}
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
 */async function M_(e){let t;const n=await D_(e.appConfig,n=>{const r=function(e){const t=e||{fid:k_(),registrationStatus:0};return F_(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(d_.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=p_(e),i=y_(e),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:u_,appId:e.appId,sdkVersion:c_},o={method:"POST",headers:i,body:JSON.stringify(s)},l=await w_(()=>fetch(r,o));if(l.ok){const e=await l.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:m_(e.authToken)}}throw await g_("Create Installation",l)}(e,t);return P_(e.appConfig,n)}catch(n){throw f_(n)&&409===n.customData.serverCode?await R_(e.appConfig):await P_(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:O_(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function O_(e){let t=await L_(e.appConfig);for(;1===t.registrationStatus;)await b_(100),t=await L_(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await M_(e);return n||t}return t}function L_(e){return D_(e,e=>{if(!e)throw d_.create("installation-not-found");return F_(e)})}function F_(e){return 1===(t=e).registrationStatus&&t.registrationTime+l_<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function U_({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${p_(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=v_(e,n),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:c_,appId:e.appId}},o={method:"POST",headers:i,body:JSON.stringify(s)},l=await w_(()=>fetch(r,o));if(l.ok){return m_(await l.json())}throw await g_("Generate Auth Token",l)}async function V_(e,t=!1){let n;const r=await D_(e.appConfig,r=>{if(!j_(r))throw d_.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+h_}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await z_(e.appConfig);for(;1===n.authToken.requestStatus;)await b_(100),n=await z_(e.appConfig);const r=n.authToken;return 0===r.requestStatus?V_(e,t):r}(e,t),r;{if(!navigator.onLine)throw d_.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}(r);return n=async function(e,t){try{const n=await U_(e,t),r={...t,authToken:n};return await P_(e.appConfig,r),n}catch(n){if(!f_(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n={...t,authToken:{requestStatus:0}};await P_(e.appConfig,n)}else await R_(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function z_(e){return D_(e,e=>{if(!j_(e))throw d_.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+l_<Date.now()?{...e,authToken:{requestStatus:0}}:e;var n;
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
 */})}function j_(e){return void 0!==e&&2===e.registrationStatus}
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
async function B_(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await M_(e);t&&await t}
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
 */(n);return(await V_(n,t)).token}function $_(e){return d_.create("missing-app-config-values",{valueName:e})}
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
 */const W_="installations",q_=e=>{const t=Nd(e.getProvider("app").getImmediate(),W_).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await M_(t);return r?r.catch(console.error):V_(t).catch(console.error),n.fid}(t),getToken:e=>B_(t,e)}};Ad(new wh(W_,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw $_("App Configuration");if(!e.name)throw $_("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw $_(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Nd(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),Ad(new wh("installations-internal",q_,"PRIVATE")),Fd(s_,o_),Fd(s_,o_,"esm2020");
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
const K_="analytics",H_="https://www.googletagmanager.com/gtag/js",G_=new Ah("@firebase/analytics"),Q_=new lh("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
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
function J_(e){if(!e.startsWith(H_)){const t=Q_.create("invalid-gtag-resource",{gtagURL:e});return G_.warn(t.message),""}return e}function Y_(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function X_(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:J_}),r=document.createElement("script"),i=`${H_}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Z_(e,t,n,r){return async function(i,...a){try{if("event"===i){const[r,i]=a;await async function(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Y_(n);for(const n of e){const e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(!i){a=[];break}a.push(i)}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(e){G_.error(e)}}(e,t,n,r,i)}else if("config"===i){const[i,s]=a;await async function(e,t,n,r,i,a){const s=r[i];try{if(s)await t[s];else{const e=(await Y_(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){G_.error(e)}e("config",i,a)}(e,t,n,r,i,s)}else if("consent"===i){const[t,n]=a;e("consent",t,n)}else if("get"===i){const[t,n,r]=a;e("get",t,n,r)}else if("set"===i){const[t]=a;e("set",t)}else e(i,...a)}catch(e){G_.error(e)}}}const eT=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function tT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function nT(e,t=eT,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw Q_.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw Q_.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new iT;return setTimeout(async()=>{o.abort()},void 0!==n?n:6e4),rT({appId:r,apiKey:i,measurementId:a},s,o,t)}async function rT(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=eT){const{appId:a,measurementId:s}=e;try{await function(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(Q_.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(r,t)}catch(e){if(s)return G_.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e?.message}]`),{appId:a,measurementId:s};throw e}try{const t=await async function(e){const{appId:t,apiKey:n}=e,r={method:"GET",headers:tT(n)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",t),a=await fetch(i,r);if(200!==a.status&&304!==a.status){let e="";try{const t=await a.json();t.error?.message&&(e=t.error.message)}catch(e){}throw Q_.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return i.deleteThrottleMetadata(a),t}catch(t){const o=t;if(!function(e){if(!(e instanceof oh&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(o)){if(i.deleteThrottleMetadata(a),s)return G_.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${o?.message}]`),{appId:a,measurementId:s};throw t}const l=503===Number(o?.customData?.httpStatus)?mh(n,i.intervalMillis,30):mh(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(a,c),G_.debug(`Calling attemptFetch again in ${l} millis`),rT(e,c,r,i)}}class iT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function aT(e,t,n,r,i,a,s){const o=nT(e);o.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&G_.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>G_.error(e)),t.push(o);const l=
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
async function(){if(!ah())return G_.warn(Q_.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await sh()}catch(e){return G_.warn(Q_.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}return!0}().then(e=>e?r.getId():void 0),[c,u]=await Promise.all([o,l]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(H_)&&n.src.includes(e))return n;return null}
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
 */)(a)||X_(a,c.measurementId),i("js",new Date);const h=s?.config??{};return h.origin="firebase",h.update=!0,null!=u&&(h.firebase_id=u),i("config",c.measurementId,h),c.measurementId}
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
 */class sT{constructor(e){this.app=e}_delete(){return delete oT[this.app.options.appId],Promise.resolve()}}let oT={},lT=[];const cT={};let uT,hT,dT="dataLayer",fT=!1;function pT(){const e=[];if(rh()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=Q_.create("invalid-analytics-context",{errorInfo:t});G_.warn(n.message)}}function mT(e,t,n){pT();const r=e.options.appId;if(!r)throw Q_.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Q_.create("no-api-key");G_.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=oT[r])throw Q_.create("already-exists",{id:r});if(!fT){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(dT);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let a=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(a=window[i]),window[i]=Z_(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}(oT,lT,cT,dT,"gtag");hT=e,uT=t,fT=!0}oT[r]=aT(e,lT,cT,t,uT,dT,n);return new sT(e)}function gT(e,t,n){e=gh(e),async function(e,t,n,r){if(r&&r.global){const t={};for(const e of Object.keys(n))t[`user_properties.${e}`]=n[e];return e("set",t),Promise.resolve()}e("config",await t,{update:!0,user_properties:n})}(hT,oT[e.app.options.appId],t,n).catch(e=>G_.error(e))}const yT="@firebase/analytics",vT="0.10.21";Ad(new wh(K_,(e,{options:t})=>mT(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),Ad(new wh("analytics-internal",function(e){try{const t=e.getProvider(K_).getImmediate();return{logEvent:(e,n,r)=>function(e,t,n,r){e=gh(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,{...r,send_to:i})}}(hT,oT[e.app.options.appId],t,n,r).catch(e=>G_.error(e))}(t,e,n,r),setUserProperties:(e,n)=>gT(t,e,n)}}catch(e){throw Q_.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),Fd(yT,vT),Fd(yT,vT,"esm2020");const wT={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:{}.VITE_FIREBASE_MEASUREMENT_ID};let bT,ET,kT,ST;try{"dummy_key"===wT.apiKey&&console.warn("Kone Kids Firebase: Missing environment variables. Running in local simulation mode."),bT=Od(wT),ET=function(e=Ld()){const t=Nd(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
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
function(e,t){const n=Nd(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(uh(n.getOptions(),t??{}))return e;Zd(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Tm,persistence:[Bp,Tp,Cp]}),r=eh("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Am)return;const r=t?.token;Nm!==r&&(Nm=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){gh(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){gh(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var i;const a=Xu("auth");return a&&sp(n,`http://${a}`),n}(bT),kT=function(e,t){const n="object"==typeof e?e:Ld(),r="string"==typeof e?e:t||by,i=Nd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(()=>{const e=Xu("firestore");if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return"["===e[0]?[e.substring(1,t-1),n]:[e.substring(0,t),n]})();e&&dS(i,...e)}return i}(bT),"undefined"!=typeof window&&(ST=function(e=Ld()){const t=Nd(e=gh(e),K_);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Nd(e,K_);if(n.isInitialized()){const e=n.getImmediate();if(uh(t,n.getOptions()))return e;throw Q_.create("already-initialized")}return n.initialize({options:t})}(e)}(bT))}catch(e){console.error("Kone Kids Firebase: Critical Initialization Error. Forcing local fallback."),bT={},ET={},kT={}}const _T=[{id:"first_hello",name:"First Hello",icon:"🧠",description:"Run your first code script!",unlocked:!1,xpReward:50},{id:"explorer",name:"Explorer",icon:"🚀",description:"Visit Coding, Robotics, and AI pages!",unlocked:!1,xpReward:100},{id:"app_builder",name:"App Builder",icon:"📱",description:"Complete all Mobile App missions!",unlocked:!1,xpReward:500},{id:"web_wizard",name:"Web Wizard",icon:"🌐",description:"Complete all Web App missions!",unlocked:!1,xpReward:500},{id:"game_master",name:"Game Master",icon:"🎮",description:"Complete all Game Dev missions!",unlocked:!1,xpReward:600},{id:"ai_genius",name:"AI Genius",icon:"✨",description:"Complete all AI & ML missions!",unlocked:!1,xpReward:750},{id:"robot_commander",name:"Robot Commander",icon:"🦾",description:"Complete all Robotics missions!",unlocked:!1,xpReward:800},{id:"data_scientist",name:"Data Scientist",icon:"📊",description:"Complete all Data Science missions!",unlocked:!1,xpReward:400},{id:"mission_complete",name:"Mission Agent",icon:"🕵️",description:"Complete your first mission!",unlocked:!1,xpReward:200},{id:"future_hero",name:"Future Hero",icon:"👑",description:"Joined the Kone Academy mission!",unlocked:!1,xpReward:100},{id:"welcome_hero",name:"Welcome!",icon:"🎈",description:"Welcome to the Kone Kids Lab!",unlocked:!1,xpReward:50}],TT=c.createContext(void 0),IT=({children:e})=>{const[t,n]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_badges");if(!e)return _T;const t=JSON.parse(e);return Array.isArray(t)?_T.map(e=>{const n=t.find(t=>t.id===e.id);return n?{...e,unlocked:n.unlocked,viewed:n.viewed}:e}):_T}catch(e){return console.error("Gamification: Error loading badges from local storage",e),_T}}),[r,i]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_visited");return e?JSON.parse(e):{}}catch(e){return{}}}),[a,s]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_xp");return e?parseInt(e,10):0}catch(e){return 0}}),[o,l]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_missions");return e?JSON.parse(e):[]}catch(e){return[]}}),[u,h]=c.useState(()=>{try{return"true"===localStorage.getItem("kone_kids_onboarding")}catch(e){return!1}}),[d,f]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_coins");return e?parseInt(e,10):100}catch(e){return 100}}),[p,m]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_inventory");return e?JSON.parse(e):[]}catch(e){return[]}}),[g,y]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_equipped");return e?JSON.parse(e):{}}catch(e){return{}}}),[v,w]=c.useState(()=>{try{const e=localStorage.getItem("kone_kids_series");return e?JSON.parse(e):["series_word_search"]}catch(e){return["series_word_search"]}}),[b,E]=c.useState(null),k=c.useMemo(()=>a<250?1:a<750?2:a<1500?3:a<2500?4:5+Math.floor((a-2500)/2e3),[a]),[S,_]=c.useState(null);c.useEffect(()=>{if(ET&&ET.app){return e=async e=>{if(_(e),e&&kT&&kT.app)try{const t=await r_(yS(kT,"users",e.uid));if(t.exists()){const e=t.data();e.xp>a&&s(e.xp),e.completedMissions?.length>o.length&&l(e.completedMissions),e.unlockedSeries?.length>v.length&&w(e.unlockedSeries)}}catch(e){console.warn("Firebase Sync: Failed to load user data.",e)}},gh(ET).onAuthStateChanged(e,t,n)}var e,t,n},[]),c.useEffect(()=>{if(S&&kT&&kT.app){(async()=>{try{await function(e,t,n){e=Rg(e,pS);const r=Rg(e.firestore,ES),i=YS(e.converter,t,n);return a_(r,[MS(DS(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,aw.none())])}(yS(kT,"users",S.uid),{xp:a,completedMissions:o,badges:t.filter(e=>e.unlocked).map(e=>e.id),hasCompletedOnboarding:u,coins:d,inventory:p,equippedItems:g,unlockedSeries:v,lastSync:(new Date).toISOString()},{merge:!0})}catch(e){console.warn("Firebase Sync: Failed to save user data.",e)}})()}},[a,o,t,S,u,d,p,g]),c.useEffect(()=>{localStorage.setItem("kone_kids_badges",JSON.stringify(t))},[t]),c.useEffect(()=>{localStorage.setItem("kone_kids_visited",JSON.stringify(r)),r["/coding"]&&r["/robotics"]&&r["/ai"]&&T("explorer")},[r]),c.useEffect(()=>{localStorage.setItem("kone_kids_xp",a.toString())},[a]),c.useEffect(()=>{localStorage.setItem("kone_kids_missions",JSON.stringify(o))},[o]),c.useEffect(()=>{localStorage.setItem("kone_kids_onboarding",u.toString())},[u]),c.useEffect(()=>{localStorage.setItem("kone_kids_coins",d.toString())},[d]),c.useEffect(()=>{localStorage.setItem("kone_kids_inventory",JSON.stringify(p))},[p]),c.useEffect(()=>{localStorage.setItem("kone_kids_equipped",JSON.stringify(g))},[g]),c.useEffect(()=>{localStorage.setItem("kone_kids_series",JSON.stringify(v))},[v]),c.useEffect(()=>{const e=t.filter(e=>e.unlocked&&!e.viewed).length;var n;n=e,"undefined"!=typeof navigator&&"setAppBadge"in navigator&&(n>0?navigator.setAppBadge(n).catch(e=>{console.warn("PWA: Error setting badge",e)}):navigator.clearAppBadge().catch(e=>{console.warn("PWA: Error clearing badge",e)}))},[t]);const T=c.useCallback(e=>{n(t=>t.map(t=>{if(t.id===e&&!t.unlocked){t.xpReward&&(s(e=>e+t.xpReward),f(e=>e+Math.floor(t.xpReward/2)));const e={...t,unlocked:!0};return E(e),e}return t}))},[]),I=c.useCallback(e=>{i(t=>t[e]?t:{...t,[e]:!0})},[]),C=c.useCallback(e=>{n(t=>t.map(t=>t.id===e?{...t,viewed:!0}:t))},[]),x=c.useCallback((e,t)=>{l(n=>{if(n.includes(e))return n;const r=[...n,e];return s(e=>e+t),f(e=>e+t),1===r.length&&T("mission_complete"),3===r.length&&T("welcome_hero"),import("./missions.809c52d3.js").then(({CODING_MISSIONS:e})=>{const t=(t,n)=>{const i=e.filter(e=>e.pathway.includes(t)),a=i.filter(e=>r.includes(e.id));i.length>0&&a.length===i.length&&T(n)};t("Fundamentals","future_hero"),t("Mobile","app_builder"),t("Web","web_wizard"),t("Game","game_master"),t("AI (AI 4 Kids)","ai_genius"),t("ML (AI 4 Kids)","ai_genius"),t("Robotics","robot_commander"),t("Data Science","data_scientist")}),r})},[T]),A=c.useCallback(()=>{h(!0)},[]),N=c.useCallback((e,t)=>d>=t&&(f(e=>e-t),m(t=>[...t,e]),!0),[d]),P=c.useCallback(e=>{f(t=>t+e)},[]),R=c.useCallback((e,t)=>{y(n=>({...n,[e]:t}))},[]),D=c.useCallback((e,t)=>d>=t&&(f(e=>e-t),w(t=>t.includes(e)?t:[...t,e]),!0),[d]),M=c.useMemo(()=>({badges:t,latestBadge:b,unlockBadge:T,hasVisited:r,markVisited:I,markBadgeViewed:C,xp:a,level:k,completedMissions:o,completeMission:x,user:S,hasCompletedOnboarding:u,completeOnboarding:A,coins:d,inventory:p,equippedItems:g,purchaseItem:N,equipItem:R,unlockedSeries:v,unlockSeries:D,addCoins:P}),[t,b,T,r,I,C,a,k,o,x,S,u,A,d,p,g,N,R,v,D,P]);return c.createElement(TT.Provider,{value:M},e)},CT=()=>{const e=c.useContext(TT);if(!e)throw new Error("useGamification must be used within a GamificationProvider");return e},xT=c.forwardRef((e,t)=>{const{unlockBadge:n,equippedItems:r}=CT(),[i,a]=c.useState(0),[s,o]=c.useState(!1),[l,u]=c.useState(!1),[h,d]=c.useState("Hi! Ready to build the future?"),[f,p]=c.useState(!1),[m,g]=c.useState(!1),[y,v]=c.useState(!1),w=c.useRef(null),b=c.useRef(null),E=(e=3e3)=>{v(!0),w.current&&(clearInterval(w.current),w.current=null),b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{v(!1),k(!1)},e)};c.useImperativeHandle(t,()=>({speak:e=>{E(4500),d(e),u(!0),S(e),setTimeout(()=>u(!1),4e3)},wave:(e=2e3)=>{E(e+1e3),o(!0),setTimeout(()=>o(!1),e)},blink:()=>{E(1500),g(!0),setTimeout(()=>g(!1),400)}}));const k=(e=!1)=>{if(y)return;w.current&&clearInterval(w.current);const t=e?1200:3500;w.current=setInterval(()=>{y||(g(!0),setTimeout(()=>g(!1),400))},t)};c.useEffect(()=>(k(!1),()=>{w.current&&clearInterval(w.current),b.current&&clearTimeout(b.current)}),[y]);const S=e=>{if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);t.pitch=1.3,t.rate=.95,t.volume=1;const n=window.speechSynthesis.getVoices().find(e=>e.name.includes("Google")||e.name.includes("Samantha")||e.name.includes("Karen"));n&&(t.voice=n),window.speechSynthesis.speak(t)};return c.createElement("div",{className:"mascot-container",onClick:()=>{const e=i+1;a(e),e>=5&&n("mascot_master"),E(3e3),o(!0),d("Hi! Ready to build the future?"),u(!0),S("Hi! Ready to build the future?"),setTimeout(()=>o(!1),2e3),setTimeout(()=>u(!1),4e3)},onMouseEnter:()=>{p(!0),o(!0),k(!0)},onMouseLeave:()=>{p(!1),l||o(!1),k(!1)},style:{position:"relative",cursor:"pointer",display:"inline-block"}},y&&c.createElement("div",{style:{position:"absolute",inset:"-20px",background:"radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0) 70%)",borderRadius:"50%",zIndex:-1,animation:"pulse 1.5s ease-in-out infinite"}}),l&&c.createElement("div",{style:{position:"absolute",top:"-40px",right:"-20px",background:"white",padding:"1rem 1.5rem",borderRadius:"20px",boxShadow:"0 10px 25px rgba(0,0,0,0.1)",zIndex:10,fontFamily:"'Baloo 2', cursive",fontSize:"1.2rem",fontWeight:700,color:"var(--kids-dark)",border:"3px solid var(--kids-blue)",whiteSpace:"pre-wrap",wordWrap:"break-word",maxWidth:"clamp(200px, 50vw, 300px)",animation:"modalPop 0.3s ease-out"}},h," ",h.includes("future")&&"🚀",c.createElement("div",{style:{position:"absolute",bottom:"-10px",left:"20px",width:"20px",height:"20px",background:"white",borderRight:"3px solid var(--kids-blue)",borderBottom:"3px solid var(--kids-blue)",transform:"rotate(45deg)"}})),r.pose&&"pose_standing"!==r.pose?c.createElement("div",{style:{width:"100%",height:"auto",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"300px"}},c.createElement("img",{src:`/mascot/${r.pose.replace("pose_","")}.svg`,alt:"Mascot Pose",width:"300",height:"300",style:{width:"100%",height:"auto",maxWidth:"400px",filter:y?"drop-shadow(0 0 15px rgba(14, 165, 233, 0.4))":"none",transition:"all 0.3s"},className:"animate-float"})):c.createElement("svg",{width:"100%",viewBox:"0 0 400 420",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transition:"all 0.3s",maxWidth:"500px",filter:y?"drop-shadow(0 0 10px rgba(14, 165, 233, 0.3))":"none"},className:s?"":"animate-float"},c.createElement("defs",null,c.createElement("radialGradient",{id:"body-radial",cx:"200",cy:"180",r:"160",gradientUnits:"userSpaceOnUse"},c.createElement("stop",{offset:"0%",stopColor:"neon_glow"===r.skin?"#22d3ee":"gold_chrome"===r.skin?"#fbbf24":"#38bdf8"}),c.createElement("stop",{offset:"60%",stopColor:"neon_glow"===r.skin?"#0891b2":"gold_chrome"===r.skin?"#d97706":"#0ea5e9"}),c.createElement("stop",{offset:"100%",stopColor:"neon_glow"===r.skin?"#0e7490":"gold_chrome"===r.skin?"#92400e":"#1d4ed8"})),c.createElement("filter",{id:"soft-shadow",x:"-30%",y:"-30%",width:"160%",height:"160%"},c.createElement("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"6"}),c.createElement("feOffset",{dx:"0",dy:"10",result:"offsetblur"}),c.createElement("feComponentTransfer",null,c.createElement("feFuncA",{type:"linear",slope:"0.3"})),c.createElement("feMerge",null,c.createElement("feMergeNode",null),c.createElement("feMergeNode",{in:"SourceGraphic"})))),c.createElement("g",{filter:"url(#soft-shadow)"},c.createElement("path",{d:"M 180 320 Q 180 350 180 375",stroke:"white",strokeWidth:"24",strokeLinecap:"round",fill:"none"}),c.createElement("path",{d:"M 220 320 Q 220 350 220 375",stroke:"white",strokeWidth:"24",strokeLinecap:"round",fill:"none"}),c.createElement("path",{d:"M 180 375 Q 180 405 140 405 L 120 400 Q 100 380 150 365 Z",fill:"white"}),c.createElement("path",{d:"M 220 375 Q 220 405 260 405 L 280 400 Q 300 380 250 365 Z",fill:"white"})),c.createElement("g",{filter:"url(#soft-shadow)"},c.createElement("path",{d:"M 50 280 L 350 280 L 370 340 L 30 340 Z",fill:"#b45309"}),c.createElement("rect",{x:"70",y:"340",width:"20",height:"60",fill:"#78350f"}),c.createElement("rect",{x:"310",y:"340",width:"20",height:"60",fill:"#78350f"}),c.createElement("path",{d:"M 120 280 L 280 280 L 290 270 L 110 270 Z",fill:"#94a3b8"}),c.createElement("rect",{x:"130",y:"210",width:"140",height:"60",rx:"4",fill:"#1e293b"}),c.createElement("rect",{x:"135",y:"215",width:"130",height:"50",rx:"2",fill:"#10b981"}),c.createElement("path",{d:"M 185 240 L 195 250 L 215 230",stroke:"white",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})),c.createElement("g",{filter:"url(#soft-shadow)"},c.createElement("path",{d:"M 200 65 C 200 65 90 170 90 245 C 90 320 140 350 200 350 C 260 350 310 320 310 245 C 310 170 200 65 200 65 Z",fill:"url(#body-radial)"}),c.createElement("ellipse",{cx:"160",cy:"205",rx:"32",ry:m?2:48,fill:"white",style:{transition:"ry 0.08s ease-in-out"}}),c.createElement("ellipse",{cx:"240",cy:"205",rx:"32",ry:m?2:48,fill:"white",style:{transition:"ry 0.08s ease-in-out"}}),!m&&c.createElement(c.Fragment,null,c.createElement("circle",{cx:"165",cy:"215",r:"16",fill:"#0f172a"}),c.createElement("circle",{cx:"245",cy:"215",r:"16",fill:"#0f172a"}),c.createElement("circle",{cx:"168",cy:"208",r:"6",fill:"white",fillOpacity:"0.8"}),c.createElement("circle",{cx:"248",cy:"208",r:"6",fill:"white",fillOpacity:"0.8"})),"cool_shades"===r.glasses&&c.createElement("g",{transform:"translate(130, 185)"},c.createElement("rect",{x:"0",y:"0",width:"140",height:"40",rx:"10",fill:"#0f172a"}),c.createElement("rect",{x:"5",y:"5",width:"60",height:"30",rx:"8",fill:"#1e293b"}),c.createElement("rect",{x:"75",y:"5",width:"60",height:"30",rx:"8",fill:"#1e293b"})),"vr_goggles"===r.glasses&&c.createElement("g",{transform:"translate(125, 180)"},c.createElement("rect",{x:"0",y:"0",width:"150",height:"50",rx:"12",fill:"#1e293b",stroke:"#22d3ee",strokeWidth:"2"}),c.createElement("rect",{x:"10",y:"10",width:"130",height:"30",rx:"6",fill:"#0ea5e9",fillOpacity:"0.5"}),c.createElement("path",{d:"M 20 25 L 130 25",stroke:"#22d3ee",strokeWidth:"1",strokeDasharray:"4 2"})),f?c.createElement("g",null,c.createElement("path",{d:"M 178 262 Q 200 282 222 262 Q 200 302 178 262 Z",fill:"#0f172a"}),c.createElement("path",{d:"M 183 265 Q 200 270 217 265",stroke:"white",strokeWidth:"3",fill:"none",strokeLinecap:"round"})):c.createElement("path",{d:"M 178 262 Q 200 282 222 262",stroke:"#0f172a",strokeWidth:"5",strokeLinecap:"round",fill:"none"})),"engineer_cap"===r.hat&&c.createElement("g",{transform:"translate(140, 50)"},c.createElement("path",{d:"M 0 40 Q 60 0 120 40 L 130 50 Q 60 70 -10 50 Z",fill:"#1d4ed8"}),c.createElement("path",{d:"M 10 40 Q 60 10 110 40",fill:"none",stroke:"white",strokeWidth:"2"})),"space_helmet"===r.hat&&c.createElement("g",{transform:"translate(125, 45)"},c.createElement("circle",{cx:"75",cy:"75",r:"70",fill:"rgba(255,255,255,0.1)",stroke:"white",strokeWidth:"2"}),c.createElement("rect",{x:"25",y:"120",width:"100",height:"15",rx:"5",fill:"#cbd5e1"})),"crown"===r.hat&&c.createElement("g",{transform:"translate(140, 30)"},c.createElement("path",{d:"M 0 50 L 20 20 L 40 50 L 60 10 L 80 50 L 100 20 L 120 50 Z",fill:"#fbbf24",stroke:"#d97706",strokeWidth:"2"}),c.createElement("circle",{cx:"60",cy:"10",r:"5",fill:"#ef4444"})),"robot_pet"===r.accessory&&c.createElement("g",{transform:"translate(320, 320) scale(0.6)"},c.createElement("rect",{x:"0",y:"0",width:"80",height:"80",rx:"10",fill:"#94a3b8"}),c.createElement("rect",{x:"10",y:"10",width:"60",height:"40",rx:"5",fill:"#1e293b"}),c.createElement("circle",{cx:"25",cy:"25",r:"5",fill:"#22d3ee"}),c.createElement("circle",{cx:"55",cy:"25",r:"5",fill:"#22d3ee"}),c.createElement("path",{d:"M 10 90 L 30 110 M 70 90 L 50 110",stroke:"white",strokeWidth:"8",strokeLinecap:"round"})),c.createElement("g",{style:{transform:s?"rotate(-25deg)":"rotate(0deg)",transformOrigin:"100px 240px",transition:"transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"}},c.createElement("path",{d:"M 100 240 Q 60 210 40 240",stroke:"#1d4ed8",strokeWidth:"26",strokeLinecap:"round",fill:"none"}),c.createElement("path",{d:"M 40 240 C 20 220 10 240 25 260 C 20 270 35 285 50 270 C 60 275 75 255 65 235 C 60 215 45 220 40 235",fill:"white",stroke:"#e2e8f0",strokeWidth:"1"})),c.createElement("g",{filter:"url(#soft-shadow)"},c.createElement("path",{d:"M 300 240 Q 320 280 270 310",stroke:"#1d4ed8",strokeWidth:"26",strokeLinecap:"round",fill:"none"}),c.createElement("path",{d:"M 270 310 C 250 330 220 310 230 290 C 225 275 245 260 265 275 C 285 270 300 290 285 310 C 280 320 275 315 270 310 Z",fill:"white",stroke:"#e2e8f0",strokeWidth:"1"}))))});xT.displayName="Mascot";const AT=c.createContext(void 0),NT=({children:e})=>{const[t,n]=c.useState(()=>localStorage.getItem("kone_kids_theme")||"light");return c.useEffect(()=>{localStorage.setItem("kone_kids_theme",t),document.documentElement.setAttribute("data-theme",t)},[t]),c.createElement(AT.Provider,{value:{theme:t,toggleTheme:()=>{n(e=>"light"===e?"dark":"light")}}},e)},PT=()=>{const e=c.useContext(AT);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e};var RT={};!function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),s="function"==typeof Path2D&&"function"==typeof DOMMatrix,o=function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext("2d");n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,"no-repeat")}catch(e){return!1}return!0}();function l(){}function c(e){var r=n.exports.Promise,i=void 0!==r?r:t.Promise;return"function"==typeof i?new i(e):(e(l,l),null)}var u,h,d,f,p,m,g,y,v,w,b,E=(u=o,h=new Map,{transform:function(e){if(u)return e;if(h.has(e))return h.get(e);var t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),h.set(e,t),t},clear:function(){h.clear()}}),k=(p=Math.floor(1e3/60),m={},g=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(d=function(e){var t=Math.random();return m[t]=requestAnimationFrame(function n(r){g===r||g+p-1<r?(g=r,delete m[t],e()):m[t]=requestAnimationFrame(n)}),t},f=function(e){m[e]&&cancelAnimationFrame(m[e])}):(d=function(e){return setTimeout(e,p)},f=function(e){return clearTimeout(e)}),{frame:d,cancel:f}),S=(w={},function(){if(y)return y;if(!r&&a){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{y=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,r,i){if(v)return t(n,null),v;var a=Math.random().toString(36).slice(2);return v=c(function(r){function s(t){t.data.callback===a&&(delete w[a],e.removeEventListener("message",s),v=null,E.clear(),i(),r())}e.addEventListener("message",s),t(n,a),w[a]=s.bind(null,{data:{callback:a}})})},e.reset=function(){for(var t in e.postMessage({reset:!0}),w)w[t](),delete w[t]}}(y)}return y}),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:_[t],n)}function I(e){return e<0?0:Math.floor(e)}function C(e,t){return Math.floor(Math.random()*(t-e))+e}function x(e){return parseInt(e,16)}function A(e){return e.map(N)}function N(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:x(t.substring(0,2)),g:x(t.substring(2,4)),b:x(t.substring(4,6))}}function P(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function R(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function M(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,o=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),s&&"path"===t.shape.type&&"string"==typeof t.shape.path&&Array.isArray(t.shape.matrix))e.fill(function(e,t,n,r,i,a,s){var o=new Path2D(e),l=new Path2D;l.addPath(o,new DOMMatrix(t));var c=new Path2D;return c.addPath(l,new DOMMatrix([Math.cos(s)*i,Math.sin(s)*i,-Math.sin(s)*a,Math.cos(s)*a,n,r])),c}(t.shape.path,t.shape.matrix,t.x,t.y,.1*Math.abs(a-r),.1*Math.abs(o-i),Math.PI/10*t.wobble));else if("bitmap"===t.shape.type){var l=Math.PI/10*t.wobble,c=.1*Math.abs(a-r),u=.1*Math.abs(o-i),h=t.shape.bitmap.width*t.scalar,d=t.shape.bitmap.height*t.scalar,f=new DOMMatrix([Math.cos(l)*c,Math.sin(l)*c,-Math.sin(l)*u,Math.cos(l)*u,t.x,t.y]);f.multiplySelf(new DOMMatrix(t.shape.matrix));var p=e.createPattern(E.transform(t.shape.bitmap),"no-repeat");p.setTransform(f),e.globalAlpha=1-n,e.fillStyle=p,e.fillRect(t.x-h/2,t.y-d/2,h,d),e.globalAlpha=1}else if("circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,i,a,s,o,l){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,s,o,l),e.restore()}(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(o-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var m=Math.PI/2*3,g=4*t.scalar,y=8*t.scalar,v=t.x,w=t.y,b=5,k=Math.PI/b;b--;)v=t.x+Math.cos(m)*y,w=t.y+Math.sin(m)*y,e.lineTo(v,w),m+=k,v=t.x+Math.cos(m)*g,w=t.y+Math.sin(m)*g,e.lineTo(v,w),m+=k;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(o)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function O(e,n){var s,o=!e,l=!!T(n||{},"resize"),u=!1,h=T(n,"disableForReducedMotion",Boolean),d=a&&!!T(n||{},"useWorker")?S():null,f=o?P:R,p=!(!e||!d)&&!!e.__confetti_initialized,m="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function g(t,n,a){for(var o=T(t,"particleCount",I),l=T(t,"angle",Number),u=T(t,"spread",Number),h=T(t,"startVelocity",Number),d=T(t,"decay",Number),p=T(t,"gravity",Number),m=T(t,"drift",Number),g=T(t,"colors",A),y=T(t,"ticks",Number),v=T(t,"shapes"),w=T(t,"scalar"),b=!!T(t,"flat"),S=function(e){var t=T(e,"origin",Object);return t.x=T(t,"x",Number),t.y=T(t,"y",Number),t}(t),_=o,x=[],N=e.width*S.x,P=e.height*S.y;_--;)x.push(D({x:N,y:P,angle:l,spread:u,startVelocity:h,color:g[_%g.length],shape:v[C(0,v.length)],ticks:y,decay:d,gravity:p,drift:m,scalar:w,flat:b}));return s?s.addFettis(x):(s=function(e,t,n,a,s){var o,l,u=t.slice(),h=e.getContext("2d"),d=c(function(t){function c(){o=l=null,h.clearRect(0,0,a.width,a.height),E.clear(),s(),t()}o=k.frame(function t(){!r||a.width===i.width&&a.height===i.height||(a.width=e.width=i.width,a.height=e.height=i.height),a.width||a.height||(n(e),a.width=e.width,a.height=e.height),h.clearRect(0,0,a.width,a.height),(u=u.filter(function(e){return M(h,e)})).length?o=k.frame(t):c()}),l=c});return{addFettis:function(e){return u=u.concat(e),d},canvas:e,promise:d,reset:function(){o&&k.cancel(o),l&&l()}}}(e,x,f,n,a),s.promise)}function y(n){var r=h||T(n,"disableForReducedMotion",Boolean),i=T(n,"zIndex",Number);if(r&&m)return c(function(e){e()});o&&s?e=s.canvas:o&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(i),document.body.appendChild(e)),l&&!p&&f(e);var a={width:e.width,height:e.height};function y(){if(d){var t={getBoundingClientRect:function(){if(!o)return e.getBoundingClientRect()}};return f(t),void d.postMessage({resize:{width:t.width,height:t.height}})}a.width=a.height=null}function v(){s=null,l&&(u=!1,t.removeEventListener("resize",y)),o&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,p=!1)}return d&&!p&&d.init(e),p=!0,d&&(e.__confetti_initialized=!0),l&&!u&&(u=!0,t.addEventListener("resize",y,!1)),d?d.fire(n,a,v):g(n,a,v)}return y.reset=function(){d&&d.reset(),s&&s.reset()},y}function L(){return b||(b=O(null,{useWorker:!0,resize:!0})),b}n.exports=function(){return L().apply(this,arguments)},n.exports.reset=function(){L().reset()},n.exports.create=O,n.exports.shapeFromPath=function(e){if(!s)throw new Error("path confetti are not supported in this browser");var t,n;"string"==typeof e?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement("canvas").getContext("2d");if(!n){for(var a,o,l=1e3,c=l,u=l,h=0,d=0,f=0;f<l;f+=2)for(var p=0;p<l;p+=2)i.isPointInPath(r,f,p,"nonzero")&&(c=Math.min(c,f),u=Math.min(u,p),h=Math.max(h,f),d=Math.max(d,p));a=h-c,o=d-u;var m=Math.min(10/a,10/o);n=[m,0,0,m,-Math.round(a/2+c)*m,-Math.round(o/2+u)*m]}return{type:"path",path:t,matrix:n}},n.exports.shapeFromText=function(e){var t,n=1,r="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof e?t=e:(t=e.text,n="scalar"in e?e.scalar:n,i="fontFamily"in e?e.fontFamily:i,r="color"in e?e.color:r);var a=10*n,s=a+"px "+i,o=new OffscreenCanvas(a,a),l=o.getContext("2d");l.font=s;var c=l.measureText(t),u=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),h=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),d=c.actualBoundingBoxLeft+2,f=c.actualBoundingBoxAscent+2;u+=4,h+=4,(l=(o=new OffscreenCanvas(u,h)).getContext("2d")).font=s,l.fillStyle=r,l.fillText(t,d,f);var p=1/n;return{type:"bitmap",bitmap:o.transferToImageBitmap(),matrix:[p,0,0,p,-u*p/2,-h*p/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),RT,!1);var DT=RT.exports;RT.exports.create;const MT=()=>{const{badges:e}=CT(),[t,n]=c.useState(null),[r,i]=c.useState(()=>new Set(e.filter(e=>e.unlocked).map(e=>e.id)));c.useEffect(()=>{const t=e.find(e=>e.unlocked&&!r.has(e.id));t&&(a(t),i(e=>new Set([...e,t.id])))},[e,r]);const a=e=>{n(e);const t=Date.now()+3e3,r={startVelocity:30,spread:360,ticks:60,zIndex:1e4},i=(e,t)=>Math.random()*(t-e)+e,a=setInterval(function(){const e=t-Date.now();if(e<=0)return clearInterval(a);const n=e/3e3*50;DT({...r,particleCount:n,origin:{x:i(.1,.3),y:Math.random()-.2}}),DT({...r,particleCount:n,origin:{x:i(.7,.9),y:Math.random()-.2}})},250);try{const e=new(window.AudioContext||window.webkitAudioContext),t=(t,n,r)=>{const i=e.createOscillator(),a=e.createGain();i.connect(a),a.connect(e.destination),i.type="sine",i.frequency.setValueAtTime(t,n),a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.15,n+.05),a.gain.exponentialRampToValueAtTime(.01,n+r),i.start(n),i.stop(n+r)},n=e.currentTime;t(523.25,n,.8),t(659.25,n+.1,.8),t(783.99,n+.2,.8),t(987.77,n+.3,.8),t(1046.5,n+.4,1.2)}catch(e){console.error("Audio failed",e)}setTimeout(()=>n(null),5e3)};return t?c.createElement("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,background:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(8px)",animation:"fadeIn 0.5s ease-out"}},c.createElement("div",{className:"glass-card",style:{padding:"3rem",textAlign:"center",background:"white",borderRadius:"40px",boxShadow:"0 40px 100px -20px rgba(0,0,0,0.2)",maxWidth:"400px",width:"90%",animation:"modalPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both"}},c.createElement("div",{style:{marginBottom:"1.5rem",display:"flex",justifyContent:"center"}},t.icon.length>2?c.createElement("img",{src:t.icon,alt:t.name,width:"120",height:"120",style:{width:"120px",height:"120px",objectFit:"contain",filter:"drop-shadow(0 10px 15px rgba(0,0,0,0.1))"}}):c.createElement("div",{style:{fontSize:"6rem",filter:"drop-shadow(0 10px 15px rgba(0,0,0,0.1))"}},t.icon)),c.createElement("h2",{style:{fontSize:"2.5rem",margin:"0 0 1rem",color:"var(--kids-blue)"}},"Badge Unlocked!"),c.createElement("h3",{style:{fontSize:"1.8rem",margin:"0 0 1rem",color:"var(--kids-dark)"}},t.name),c.createElement("p",{style:{fontSize:"1.2rem",color:"var(--kids-text-muted)",lineHeight:"1.5"}},t.description),c.createElement("button",{className:"kids-button",style:{marginTop:"2.5rem",width:"100%"},onClick:()=>n(null)},"Awesome! 🚀"))):null},OT=()=>{const[e,t]=c.useState(null),[n,r]=c.useState(!1),[i,a]=c.useState(!1);c.useEffect(()=>{const e=localStorage.getItem("kkids-install-dismissed");if(e){const t=parseInt(e,10);if(Date.now()-t<6048e5)return}if(window.matchMedia("(display-mode: standalone)").matches)return;const n=e=>{e.preventDefault(),t(e),r(!0)};window.addEventListener("beforeinstallprompt",n);const i=setTimeout(()=>{window.matchMedia("(display-mode: standalone)").matches||r(!0)},5e3);return()=>{window.removeEventListener("beforeinstallprompt",n),clearTimeout(i)}},[]);return n?c.createElement("div",{className:"install-banner "+(i?"dismissing":"")},c.createElement("div",{className:"install-banner-inner"},c.createElement("div",{className:"install-banner-icon"},c.createElement("img",{src:"/mascot.svg",alt:"Kone Kids",width:"48",height:"48"})),c.createElement("div",{className:"install-banner-text"},c.createElement("div",{className:"install-banner-title"},"Install Kone Kids"),c.createElement("div",{className:"install-banner-subtitle"},"Fun learning on your home screen!")),c.createElement("div",{className:"install-banner-actions"},c.createElement("button",{className:"install-btn",onClick:async()=>{if(e){e.prompt();const{outcome:n}=await e.userChoice;"accepted"===n&&r(!1),t(null)}else alert("To install Kone Kids:\n\n• Chrome/Edge: Click the install icon (⊕) in the address bar\n• Safari: Tap Share → Add to Home Screen")}},"Install"),c.createElement("button",{className:"install-dismiss",onClick:()=>{a(!0),localStorage.setItem("kkids-install-dismissed",Date.now().toString()),setTimeout(()=>r(!1),350)},"aria-label":"Dismiss"},"✕")))):null},LT=(...e)=>e.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim(),FT=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)};
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var UT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1},zT=c.createContext({}),jT=c.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:a,iconNode:s,...o},l)=>{const{size:u=24,strokeWidth:h=2,absoluteStrokeWidth:d=!1,color:f="currentColor",className:p=""}=c.useContext(zT)??{},m=r??d?24*Number(n??h)/Number(t??u):n??h;return c.createElement("svg",{ref:l,...UT,width:t??u??UT.width,height:t??u??UT.height,stroke:e??f,strokeWidth:m,className:LT("lucide",p,i),...!a&&!VT(o)&&{"aria-hidden":"true"},...o},[...s.map(([e,t])=>c.createElement(e,t)),...Array.isArray(a)?a:[a]])}),BT=(e,t)=>{const n=c.forwardRef(({className:n,...r},i)=>{return c.createElement(jT,{ref:i,iconNode:t,className:LT(`lucide-${a=FT(e),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...r});var a});return n.displayName=FT(e),n},$T=BT("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),WT=BT("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),qT=BT("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]),KT=BT("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]),HT=BT("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]),GT=BT("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]),QT=BT("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]),JT=BT("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]),YT=BT("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),XT=BT("trophy",[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]]);function ZT({badge:e,onClose:t}){const[n,r]=c.useState(!1);return c.useEffect(()=>{if(e){r(!0);const e=setTimeout(()=>{r(!1),setTimeout(t,500)},5e3);return()=>clearTimeout(e)}},[e,t]),e?c.createElement("div",{className:"badge-notification-container "+(n?"show":"hide")},c.createElement("div",{className:"badge-glow"}),c.createElement("div",{className:"badge-card glass-panel"},c.createElement("div",{className:"badge-icon-wrapper"},c.createElement("span",{className:"badge-emoji"},e.icon),c.createElement("div",{className:"sparkle-particles"},c.createElement(JT,{className:"sparkle s1",size:12}),c.createElement(JT,{className:"sparkle s2",size:16}),c.createElement(JT,{className:"sparkle s3",size:14}))),c.createElement("div",{className:"badge-info"},c.createElement("div",{className:"badge-label"},c.createElement(XT,{size:14})," NEW BADGE UNLOCKED!"),c.createElement("h4",{className:"badge-name"},e.name),c.createElement("p",{className:"badge-desc"},e.description),e.xpReward&&c.createElement("div",{className:"badge-reward"},c.createElement(YT,{size:12,fill:"currentColor"})," +",e.xpReward," XP")))):null}const eI=[{id:"beyond-the-chalkboard",title:"Beyond the Chalkboard: Why Memorizing ICT is Holding Ghanaian Kids Back",slug:"beyond-the-chalkboard",summary:"Traditional BECE and WASSCE ICT prep relies heavily on drawing mouse icons and memorizing definitions. Let's explore why active creation is the modern standard.",category:"Coding & Logic",publishDate:"May 15, 2026",readTime:"4 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-orange)",coverGradient:"linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)",content:[{type:"heading",content:'The "Draw a Keyboard" Problem'},{type:"paragraph",content:'Walk into many classrooms across Ghana during an ICT lesson, and you will see children diligently drawing computer layouts, monitors, and floppy disks in their exercise books. They memorize definitions like "A computer is an electronic machine..." solely to pass their BECE or WASSCE examinations. Yet, when placed in front of a real computer, many cannot write a basic script, debug a simple program, or understand the logic that powers their favorite applications.'},{type:"paragraph",content:"This is the rote-memorization gap. Teaching technology theoretically is like teaching swimming on a chalkboard—it creates the illusion of knowledge without any functional capability. In their 2022 systematic analysis, researchers Anamuah-Mensah and Asabere documented this precise policy-implementation gap: while Ghana's curriculum mandates computational thinking, schools lack the practical platforms to implement it."},{type:"quote",content:"Teaching children to memorize ICT definitions without allowing them to build programs is like teaching swimming on a blackboard—they will sink the moment they touch the water."},{type:"heading",content:"Why Active Creation is the Superpower (The Science)"},{type:"paragraph",content:"Our methodology is directly guided by Seymour Papert's foundational theory of Constructionism (1980). Papert—a pioneer at MIT—established that children build mental models most effectively when they are actively designing, debugging, and building personally meaningful artifacts."},{type:"paragraph",content:"This isn't just educational theory; it is hard science. In a landmark 2022 controlled experiment conducted by Dr. Relkin and colleagues with elementary students, children participating in active visual programming showed a massive d = 0.67 effect size improvement in spatial logic, problem decomposition, and systematic troubleshooting over traditional control groups. Active creation builds a different, stronger brain."},{type:"list",content:"Core cognitive benefits:",items:["Computational Thinking: Breaking complex problems down into step-by-step logical instructions.","Resilience through Debugging: Learning that failure (a bug in the code) is not a dead-end, but a puzzle to analyze and solve.","Math in Action: Seeing abstract concepts like coordinates, angles, and variables come to life in a game simulator."]},{type:"callout",content:"At Kone Kids, we do not draw computers. We use them. Our students build fully interactive games, electronic hardware wiring, and train simple AI models from their very first week, directly satisfying practical NaCCA goals."},{type:"heading",content:"What Parents Can Do"},{type:"paragraph",content:"You do not need to be a software developer to guide your child. Focus on practical exposure. Give them tools that encourage logic rather than consumption, and look for structured, hands-on, after-school programs that align with modern international digital standards."}]},{id:"consumers-to-creators",title:"From Consumers to Creators: Guiding Your Child's Screen Time",slug:"consumers-to-creators",summary:"Is screen time always bad? Learn how to redirect your child's gaming hours into a lifetime engineering superpower.",category:"Parenting & Tech",publishDate:"May 10, 2026",readTime:"3 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-blue)",coverGradient:"linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",content:[{type:"heading",content:"The Parent's Dilemma: Screen Time"},{type:"paragraph",content:"Almost every parent in Accra or Tema shares the same struggle: keeping their children away from continuous, mindless gaming or watching endless YouTube videos. The natural response is to limit screen time completely. However, in a world driven by artificial intelligence and digital infrastructure, completely isolating children from screens can leave them digitally illiterate."},{type:"paragraph",content:"The solution is not banning screens. The solution is changing the nature of screen time from active consumption to creative engineering."},{type:"heading",content:"Consumption vs. Creation"},{type:"paragraph",content:"Consider the difference between playing a 2D game and coding it:"},{type:"list",content:"The shift in mindset:",items:["Playing: Mindless dopamine loops, passive clicking, and zero cognitive challenge.","Coding: Defining the gravity coefficient, scripting player jump velocity, handling obstacle collision coordinates, and designing custom reward systems."]},{type:"quote",content:"The moments a child realizes that they can make a character move, jump, and score points using rules they wrote is the moment they transition from a user to a builder."},{type:"heading",content:"Bridging the Block-to-Text Gap"},{type:"paragraph",content:'Many parents ask: "Once my child learns block-based coding, what is next?" This represents a critical inflection point in computing education. Leading STEM researcher David Weintrop (2017) discovered that when children transition from drag-and-drop blocks to professional text languages like Python, only 35% succeed without structured guidance; the rest drop out due to typing mistakes and syntax frustration.'},{type:"paragraph",content:"This is why Kone Academy built a custom 3-tiered pathway. In Level 1, we establish solid logic. In Level 2, we introduce microcontrollers (Arduino) programmed via a dual-pane editor that displays visual blocks next to C++ or Python code. Children see their edits in real-time, bridging the logic-to-syntax divide with zero frustration."}]},{id:"science-of-show-and-solve",title:'What is the "Show & Solve" Pedagogy? The Science of Kone Kids',slug:"science-of-show-and-solve",summary:"Rote-learning ruins critical thinking. Discover how our two-part scientific learning methodology builds independent engineers.",category:"Coding & Logic",publishDate:"May 05, 2026",readTime:"5 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-purple)",coverGradient:"linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)",content:[{type:"heading",content:'The Problem with "Copy-Paste" Tutorials'},{type:"paragraph",content:"Many online coding platforms or school clubs teach kids by having them copy-paste code lines directly from a projector or video. The student ends up with a working project, but they have absolutely no idea how it works. The second they are asked to make a tiny change on their own, they freeze."},{type:"paragraph",content:'This is the "tutorial trap." It mimics success but stunts the development of actual critical thinking. To build real programmers, we must teach children how to analyze and solve problems independently.'},{type:"heading",content:"Our Two-Part Learning Engine (ZPD)"},{type:"paragraph",content:'The "Show & Solve" pedagogy of Kone Kids is heavily grounded in Lev Vygotsky\'s celebrated educational theory of the Zone of Proximal Development (ZPD) and modern active learning frameworks (Bonwell & Eison, 1991). We provide initial scaffolded structure, then dynamically fade that support to prompt self-directed debugging.'},{type:"heading",content:'Part 1: The Guided Walkthrough ("Show & Model")'},{type:"paragraph",content:'The instructor explains the core engineering concept (e.g. gravity, loops, or ultrasonic feedback). Together with the students, they code the foundational structure live, explaining the "why" behind every step. This provides a safe, solid architecture and scaffolding.'},{type:"heading",content:'Part 2: The Independent Challenge ("Analyze & Solve")'},{type:"paragraph",content:"This is where real learning happens. Once the foundation is built, the safety wheels are taken off. Students are presented with an independent coding mission. They must debug errors, design logic rules, and complete the challenge on their own with little-to-no guidance."},{type:"quote",content:"Critical thinking isn't built by successfully copying instructions. It is built in the struggle of debugging an error and finding the elegant path independently."},{type:"callout",content:"This two-part balance builds resilience, real logical troubleshooting skills, and an incredible sense of confidence when their code finally runs successfully!"}]},{id:"girls-in-tech-ghana",title:"Empowering the Next Generation of Ghanaian Girls in Tech",slug:"girls-in-tech-ghana",summary:"Gender stereotypes in engineering set in as early as age 6. Discover how structured, early CS interventions can bridge the divide.",category:"Parenting & Tech",publishDate:"April 28, 2026",readTime:"4 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"#ec4899",coverGradient:"linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",content:[{type:"heading",content:"The Gender Gap in West African Tech"},{type:"paragraph",content:"Across Sub-Saharan Africa, women represent less than 30% of professional software developers, data scientists, and systems engineers. While policies exist to encourage girls in ICT, the structural foundation must be built much earlier. Scientific reviews by leading researchers like Jane Margolis (2023) show that social biases regarding computing aptitude take root in children's minds by the time they reach six years old."},{type:"paragraph",content:"This early perception creates a confidence barrier. If girls do not encounter active computing before junior high school, they are far more likely to self-select out of STEM pathways."},{type:"quote",content:"If we do not actively show girls that they are creator-architects of technology in primary school, they grow up believing coding is a consumption tool made by others, rather than an engineering superpower they control."},{type:"heading",content:"Developing Self-Efficacy Early (Master et al., 2017)"},{type:"paragraph",content:"How do we solve this? Research by Dr. Allison Master and colleagues (2017) proves that early, scaffolded hands-on coding interventions completely erase the confidence gap. When primary school girls are given structured visual block challenges where they design their own games and virtual assets, their self-efficacy scores match or exceed their male peers."},{type:"paragraph",content:"At Kone Kids, our platform is designed from the ground up for inclusion. Rather than purely competitive logic speedruns, we focus on collaborative, creative story-crafting, mascot personalization, and real-world problem solving."},{type:"list",content:"Our core inclusion guidelines:",items:["Design-Based Play: Coding through personal creative expression and character design.","Collaborative Pair Coding: Designing systems in teams to build peer self-efficacy.","Visible Role Models: Celebrating female engineers and localized Ghanaian tech leaders."]},{type:"callout",content:"Nurturing girls in tech is not just about fairness—it is about economic capacity. Our private home trials and school partnerships actively target a 50/50 gender balance to cultivate Ghana's complete talent pool."}]},{id:"demystifying-ai-five-ideas",title:'Demystifying AI: The "Five Big Ideas" Every Parent Should Know',slug:"demystifying-ai-five-ideas",summary:"AI is changing the global economy. Explore the five core Machine Learning pillars that will define your child's future.",category:"Parenting & Tech",publishDate:"April 20, 2026",readTime:"5 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-emerald)",coverGradient:"linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",content:[{type:"heading",content:"The Machine Learning Shift"},{type:"paragraph",content:"For decades, computers only executed instructions explicitly typed by a human coder. Today, the world runs on Artificial Intelligence—systems that do not wait for explicit instructions, but instead analyze huge datasets to recognize patterns and make decisions autonomously. For our children, AI literacy is not an elective skill; it is a fundamental survival literacy."},{type:"paragraph",content:'To guide early AI education, the international AI4K12 initiative led by Dr. Touretzky formulated the "Five Big Ideas in AI" framework (2019). Here is how Kone Academy translates these five principles for young Ghanaian minds:'},{type:"heading",content:"1. Perception (Sensors and Inputs)"},{type:"paragraph",content:"Computers perceive the world through sensors. Just as human eyes and ears process light and sound, computer cameras, microphones, and ultrasonic sensors gather raw sensory datasets to understand environments in real-time."},{type:"heading",content:"2. Representation & Reasoning"},{type:"paragraph",content:'AI models construct internal mathematical "maps" of information. Our students learn how AI maps logical paths, handles decisions in networks, and constructs reasoning trees to navigate virtual game mazes.'},{type:"heading",content:"3. Learning from Data (Machine Learning)"},{type:"paragraph",content:"This is the core shift. Students train their first edge-based Machine Learning models locally. They capture images of local cocoa pods, differentiate between healthy and infected pods, and watch how the computer adjusts its classification weight parameters based on training datasets."},{type:"heading",content:"4. Natural Interaction"},{type:"paragraph",content:"AI systems must interact naturally with humans, utilizing Natural Language Processing (NLP). We show children how smart chatbots process text commands, and explore how AI handles local Ghanaian accents and dialects."},{type:"heading",content:"5. Societal Impact & Algorithmic Ethics"},{type:"paragraph",content:"Citing recent ethical reviews by Perrotti & Howard (2023), early AI education must train children to critique algorithm design. We discuss dataset representation bias: if a model is trained only on pictures of Western houses, why will it fail to recognize a traditional Ghanaian compound house?"},{type:"quote",content:"We do not want West African youth to just be passive consumers of Western-trained AI systems. We want them to code, train, and critique these models to solve local socio-economic challenges."}]},{id:"robotics-agriculture-cocoa-farms",title:"Robotics in Agriculture: How Coding Cocoa Farms Builds Real Engineers",slug:"robotics-agriculture-cocoa-farms",summary:"Why abstract coding is not enough. Explore how sensory physical computing connects math to local Ghanaian industries.",category:"Robotics & Science",publishDate:"April 12, 2026",readTime:"5 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-purple)",coverGradient:"linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",content:[{type:"heading",content:"The Danger of Screen-Only STEM"},{type:"paragraph",content:"While visual software coding is a phenomenal starting point, true engineering happens when code meets the physical world. In educational technology, this is known as Tangible Programming. Foundational studies by Stanford researcher Paulo Blikstein (2013) demonstrate that physical computing—wiring real sensors, reading voltage shifts, and driving physical motors—develops far deeper cognitive links to mathematics and physics than screen-based code alone."},{type:"paragraph",content:"When a child programs a visual circle to bounce, it is an abstract exercise. When they wire an ultrasonic sensor to a physical vehicle and write a loop that brakes the motor three centimeters before it hits a concrete wall, they are solving real-world physical and mechanics equations."},{type:"heading",content:"The Localized Cocoa Farm Project"},{type:"paragraph",content:"To make this tangible, our Level 2 (Robotics & Physical Computing) students build functional smart-agricultural systems using microcontrollers (Arduino) and environmental feedback sensors."},{type:"paragraph",content:"For example, children construct automated soil-hydration sensors designed for cocoa seedling nursery farms. They wire capacitive moisture probes into local soil, connect them to analog input pins, and program a logic system that triggers an irrigation solenoid valve whenever moisture drops below a defined threshold."},{type:"quote",content:"Connecting a simple `if/else` conditional statement to a physical water pump that rescues a cocoa seedling connects abstract logic to the backbone of Ghana's agricultural economy."},{type:"heading",content:"Why Contextual Learning Accelerates Retention (Ali et al., 2022)"},{type:"paragraph",content:"STEM education research consistently shows that context-adapted learning significantly improves retention and academic motivation. When Ghanaian students see that their technology skills can build automated smart-farming tools, home security alarms, and street safety sensors for their local community in Accra, they cease to view computer science as a distant Western import. They see it as a powerful local tool for innovation."},{type:"callout",content:"At Kone Kids, our mission is to build practical builders. By integrating environmental physical computing, we prepare West African kids for high-impact careers in robotics, automation, and data engineering."}]},{id:"coding-as-new-literacy",title:"Learning to Code is Learning to Write: Programming as Your Child's Next Language",slug:"coding-as-new-literacy",summary:"Coding is not just about math or science. Discover why early programming is a modern form of writing, self-expression, and creative storytelling.",category:"Coding & Logic",publishDate:"April 05, 2026",readTime:"4 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-orange)",coverGradient:"linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",content:[{type:"heading",content:"A New Way of Speaking"},{type:"paragraph",content:"When we teach children how to read and write English, Ga, Ewe, or Twi, we are not preparing them all to become professional novelists or spelling-bee champions. We teach them to write because it is a fundamental tool for expressing thoughts, sharing ideas, and interacting with the world. Early computer programming is no different. It is not just a tool for future software developers; it is a new literacy of personal expression."},{type:"paragraph",content:'In her seminal work, Dr. Marina Umaschi Bers (2018), founder of the DevTech Research Group, introduces the concept of the Digital Playground. Bers proves that coding environments should not be clinical, restrictive "playpens" where children just click rigid buttons. Instead, they must be active "playgrounds" where kids write programs to share stories, make digital art, and voice their personal creations.'},{type:"quote",content:"Coding is not just about math or technology. It is a new form of writing that allows children to organize their thoughts, tell stories, and shape their world."},{type:"heading",content:"The 4 Ps of Creative Coding (MIT Framework)"},{type:"paragraph",content:'How do we nurture this literacy? The Lifelong Kindergarten group at the MIT Media Lab, led by Scratch creator Mitchel Resnick (2017), formulated the "4 Ps of Creative Learning" framework. At Kone Kids, we align our entire Level 1 curriculum directly with these four principles:'},{type:"list",content:"The 4 Ps in action:",items:["Projects: Children do not learn by doing isolated drills. They learn by building complete projects—like designing an interactive animated story or a custom game.","Passion: When kids work on things they care about—like creating their own virtual custom mascot—they invest far more cognitive focus and persist through challenges.","Peers: Coding is highly social. Our students share their projects, debug each other's code, and learn from their classmates' creative approaches.",'Play: We treat coding as a playful sandbox. There are no "punishing mistakes"—only bugs that are fun to trace, analyze, and solve.']},{type:"heading",content:"The Science: Easing the Cognitive Path (Sweller, 1988)"},{type:"paragraph",content:"For a young child, typing raw text like `print(\"Hello World\")` is extremely frustrating because of a single missing parenthesis. John Sweller's Cognitive Load Theory (1988) explains that when a child's working memory is overwhelmed by spelling syntax, their ability to learn logical concepts drops to zero."},{type:"paragraph",content:"This is why our Level 1 Coding pathway uses visual blocks first. By removing the friction of typing errors, we free up their working memory to focus purely on logical patterns, sequential constraints, loops, and spatial reasoning. Once these concepts are locked in, transitioning to text code becomes a natural, joyful next step."},{type:"callout",content:"By framing coding as a creative language rather than a math class, we make digital literacy accessible, exciting, and deeply empowering for every Ghanaian child."}]},{id:"best-coding-platforms-kids",title:"The Best 10 Coding Platforms for Kids: A Scientist's Guide for Parents",slug:"best-coding-platforms-kids",summary:"Hundreds of coding websites exist for kids. Explore the top 10 scientifically vetted, creative programming platforms and how to choose the right one.",category:"Coding & Logic",publishDate:"March 28, 2026",readTime:"6 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨•🏫"},accentColor:"var(--kids-purple)",coverGradient:"linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",content:[{type:"heading",content:"The Paradox of Choice in EdTech"},{type:"paragraph",content:'Search "coding for kids" on the internet, and you will be overwhelmed by hundreds of colorful platforms promising to turn your child into the next tech prodigy overnight. As parents, how do we cut through the marketing noise? Educational research proves that not all coding tools are created equal. Some isolate children in rigid "click-to-pass" puzzles, while others foster open-ended logical creation. Let\'s explore the top 10 scientifically vetted environments, organized by age group.'},{type:"heading",content:"Early Learners (Ages 5–7): Building Foundational Logic"},{type:"paragraph",content:"At this stage, the focus is on computational thinking—sequences, loops, and spatial patterning—without requiring advanced reading or typing skills."},{type:"heading",content:'1. <a href="https://www.scratchjr.org/" target="_blank" rel="noopener noreferrer" class="blog-content-link">ScratchJr</a> (Tufts & MIT)'},{type:"paragraph",content:"ScratchJr is the gold standard tablet app for young pre-readers. Grounded in Dr. Marina Bers's research on early childhood developmental milestones, ScratchJr uses symbolic visual blocks that children snap together to make characters move, dance, and speak. It turns screen time into an active, logic-based playground."},{type:"heading",content:'2. <a href="https://codespark.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">CodeSpark Academy</a>'},{type:"paragraph",content:'Designed as a highly engaging gamified playground, CodeSpark teaches the "ABCs of computer science" entirely without words. Through cute character puzzles, children learn core sequences, loops, and conditional mapping, earning virtual coins as they debug logical pathways.'},{type:"heading",content:"Intermediate Creators (Ages 8–12): Moving from Blocks to Scripts"},{type:"paragraph",content:"For primary school students, these platforms introduce structured logic, event-driven loops, and serve as an active bridge to syntax languages."},{type:"heading",content:'3. <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Scratch</a> (MIT Media Lab)'},{type:"paragraph",content:"Scratch is the world's largest visual block-based coding platform. Developed by Scratch creator Mitchel Resnick, it allows children to design fully interactive 2D games, animations, and stories. The strong community aspect lets children share, review, and \"remix\" each other's code in a highly collaborative peer environment."},{type:"heading",content:'4. <a href="https://code.org/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Code.org</a>'},{type:"paragraph",content:"A premier non-profit visual computer science curriculum. Code.org offers structured, step-by-step puzzles themed around popular worlds like Minecraft and Star Wars. It is highly school-friendly and perfectly satisfies global standards-based curriculum goals."},{type:"heading",content:'5. <a href="https://www.tynker.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Tynker</a>'},{type:"paragraph",content:"A highly polished curriculum that guides students through game design, animation, and Minecraft modding. Tynker allows children to start with drag-and-drop block coding and smoothly transitions them into writing raw JavaScript and Python script within a supportive interface."},{type:"heading",content:'6. <a href="https://www.codemonkey.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">CodeMonkey</a>'},{type:"paragraph",content:"A brilliant, game-based learning platform where kids write real code to solve puzzles and guide a monkey to collect bananas. Instead of blocks, children type simplified text code (CoffeeScript/Python), building syntax familiarity in a fun, self-paced environment."},{type:"heading",content:"Advanced & Hardware Sandbox (Ages 11+): Real-World Engineering"},{type:"paragraph",content:"For older children ready to tackle text languages, physical engineering logic, or professional game development."},{type:"heading",content:'7. <a href="https://www.tinkercad.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Tinkercad</a> (Autodesk)'},{type:"paragraph",content:"Tinkercad is a free, web-based tool for 3D spatial design and electronic circuit simulation. Children can wire up virtual microcontrollers (Arduino), breadboards, and sensors, programming them with visual blocks or text. It is the ultimate sandbox for teaching physical electronics safety."},{type:"heading",content:'8. <a href="https://www.microsoft.com/en-us/makecode" target="_blank" rel="noopener noreferrer" class="blog-content-link">Microsoft MakeCode</a> & Minecraft'},{type:"paragraph",content:"Linking block coding directly to Microsoft Minecraft Education, MakeCode allows students to script their own 3D virtual sandbox. Kids immediately see abstract concepts like variables, nested loops, and 3D coordinate geometry come to life as they code systems to build castles instantly."},{type:"heading",content:'9. <a href="https://www.apple.com/swift/playgrounds/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Swift Playgrounds</a> (Apple)'},{type:"paragraph",content:"Swift Playgrounds teaches Apple's professional Swift coding language through gorgeous, interactive 3D puzzles on iPad and Mac. It is highly tactile, visual, and helps children transition into genuine mobile app development."},{type:"heading",content:'10. <a href="https://replit.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Replit</a> (with AI Tutor) & <a href="https://unity.com/" target="_blank" rel="noopener noreferrer" class="blog-content-link">Unity</a>'},{type:"paragraph",content:"For teens ready for professional coding, Replit is a powerful web-based IDE that supports Python, HTML/CSS, and JavaScript. Its modern AI assistant acts as a patient, 1-on-1 coding tutor, explaining syntax errors in plain English. For advanced 3D game creation, Unity remains the industry-standard C# platform."},{type:"heading",content:'Bonus Platform: <a href="/coding" class="blog-content-link">The Kone Kids IDE</a>'},{type:"paragraph",content:'Specifically customized for our local students in Ghana, the Kone Kids workspace displays visual blocks in one pane and the corresponding C++ or Python code in a side-by-side pane. As children build logic using blocks, they watch the raw text code morph in real-time, eliminating the "syntax transition gap" identified in David Weintrop\'s (2017) research. It acts as the perfect localized capstone to tie all these platforms together.'},{type:"quote",content:"The best coding platform is not the one with the flashiest graphics, but the one that shifts your child from a passive consumer into an active, creative problem-solver."},{type:"heading",content:"How to Choose: The Scientific Criteria"},{type:"paragraph",content:"When choosing a coding platform for your child, look for three core criteria verified by John Hattie's meta-analysis of active learning (d = 0.50+ effect size):"},{type:"list",content:"The 3 key criteria:",items:["Low Floor, High Ceiling: The tool should be easy for a beginner to start (low floor) but capable of complex, unrestricted creations as they grow (high ceiling).","Wide Walls: The environment should support many different types of projects—not just games, but storytelling, art, and music to accommodate diverse student interests.","Clear Feedback Loops: The platform must execute code instantly so children can debug errors and analyze their logic in real-time."]},{type:"callout",content:"At Kone Kids, our personalized 1-on-1 home tutoring and interactive school labs guide children through these vetted platforms. We match the perfect tool to your child's age, interests, and learning style to cultivate real lifelong engineering capability."}]},{id:"mobile-app-development-kids",title:"Mobile App Development for Kids: From Idea to App Store",slug:"mobile-app-development-kids",summary:"Can kids build actual mobile apps that run on phones? Discover the tools, step-by-step roadmap, and why building apps turns kids into real-world problem solvers.",category:"Coding & Logic",publishDate:"May 19, 2026",readTime:"5 min read",author:{name:"Philip Hotor",role:"Founder, Kone Kids",avatar:"👨‍🏫"},accentColor:"var(--kids-orange)",coverGradient:"linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)",content:[{type:"heading",content:"The Shift: From Passive Users to Mobile Creators"},{type:"paragraph",content:"From the moment a toddler swipes on an iPad to play games or watch videos, their relationship with mobile apps begins. But there is a massive cognitive difference between opening an app that someone else built and developing one yourself. Mobile app development is the ultimate synthesis of creativity, logic, visual design, and user experience (UX) for children."},{type:"paragraph",content:"In standard computer science education, abstract coding exercises (like sorting lists or basic math loops) can sometimes feel dry. Building a mobile app changes everything: kids can immediately install their creation on their parent's smartphone, demo it to their friends at school, and solve actual, tangible problems in their home communities."},{type:"quote",content:"When a child builds a mobile app, they realize they aren't just playing in a digital sandbox—they are building tools that go straight into people's pockets."},{type:"heading",content:"Why Mobile Development is the Ultimate STEM Builder"},{type:"paragraph",content:"Mobile development introduces children to systems-level thinking. To build a functional app, a student must master three core components that parallel professional software engineering:"},{type:"list",content:"The three dimensions of app creation:",items:["UI/UX Design (User Interface & Experience): Designing screen layouts, coordinating color palettes, and mapping out the intuitive flow of button clicks.","Event-Driven Logic: Coding the behavior—defining what happens exactly when a user swipes, shakes the phone, presses a button, or takes a photo.","Data Storage: Setting up local databases to store user high scores, profiles, or shopping lists across app launches."]},{type:"heading",content:"Vetted Tools: How Kids Build Apps Without Syntax Frustration"},{type:"paragraph",content:"In educational technology, forcing a 10-year-old to write lines of raw Java or Swift code is a recipe for dropout. Visual block-based mobile app builders allow children to focus on spatial structure and logic without typing mistakes."},{type:"paragraph",content:"1. MIT App Inventor: Developed by the Massachusetts Institute of Technology, this is the gold standard for teaching visual Android app creation. Kids drag-and-drop buttons, maps, text-to-speech engines, and accelerometers, then program them using visual blocks."},{type:"paragraph",content:"2. Thunkable: A modern, highly polished cross-platform builder that compiles native Android and iOS apps. It supports beautiful modern layouts and integrates easily with external APIs, maps, and databases."},{type:"paragraph",content:"3. Swift Playgrounds: For children interested in Apple's ecosystem, Swift Playgrounds guides kids through coding native iPad/Mac apps using professional Swift code inside an interactive 3D playground."},{type:"heading",content:"The 4-Step App Creation Roadmap for Kids"},{type:"paragraph",content:"At Kone Kids, our app development pathway guides children through a structured, 4-step professional pipeline:"},{type:"list",content:"The App Creation Pipeline:",items:["Phase 1: Brainstorming & User Wireframing. Kids map out who the app is for and draw simple sketches of each screen on paper.","Phase 2: Visual UI Layout. Dragging visual components (text inputs, images, charts) onto a mock screen canvas.",'Phase 3: Coding the Logic. Snapping code blocks together to handle events (e.g., "When the user shakes the phone, speak the translation out loud").',"Phase 4: Multi-device Testing & Sharing. Installing the app via QR codes to test on real hardware, and debugging on the fly."]},{type:"callout",content:"Our Ghanaian students connect their app projects directly to local issues: from building simple automated English-to-Twi translator apps for their grandparents, to design-mocking smart shop billing trackers for local neighborhood table stores."},{type:"heading",content:"What Parents Can Do to Start the Journey"},{type:"paragraph",content:'Encourage your child to look at the apps on their phone with analytical eyes. Ask questions like: "Why is that button placed there?" or "What do you think happens behind the scenes when you tap this search bar?". Partner with structured, project-based afterschool centers like Kone Kids to turn their creative app ideas into actual running software.'}]}],tI=c.lazy(()=>import("./ProgramDetails.5f826b6c.js")),nI=c.lazy(()=>import("./EnrollmentModal.4946c576.js")),rI=c.lazy(()=>import("./BadgeTray.caa6db85.js")),iI=c.lazy(()=>import("./MissionMap.816524a6.js")),aI=c.lazy(()=>import("./Blog.2b8bf030.js")),sI=c.lazy(()=>import("./ArticleReader.b21f55f9.js"));function oI(){const[e,t]=c.useState(!1);return c.createElement("div",{className:"kids-app"},e&&c.createElement(nI,{isOpen:e,onClose:()=>t(!1)}),c.createElement("nav",{style:{padding:"1rem 5%",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(255, 255, 255, 0.9)",backdropFilter:"blur(8px)",position:"sticky",top:0,zIndex:100,borderBottom:"1px solid #f1f5f9"}},c.createElement(zu,{to:"/",style:{fontFamily:"'Baloo 2', cursive",fontWeight:800,fontSize:"1.4rem",color:"#1e3a8a",textDecoration:"none",display:"flex",alignItems:"center",gap:"0.4rem"}},c.createElement("img",{src:"/mascot.svg",alt:"Kone Kids Logo",width:"24",height:"24",style:{height:"24px",width:"auto"}})," Kone Kids"),c.createElement("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem"}},c.createElement(zu,{to:"/blog",style:{fontFamily:"'Baloo 2', cursive",color:"#334155",textDecoration:"none",fontWeight:800,fontSize:"1rem",transition:"color 0.2s"},className:"hover-teal"},"Parent Hub"),c.createElement("button",{className:"kids-button",onClick:()=>t(!0),style:{padding:"0.45rem 1.1rem",fontSize:"0.85rem"}},"Join Hub"))),c.createElement("main",{id:"main-content"},c.createElement("header",{className:"section-padding"},c.createElement("div",{className:"container hero-grid"},c.createElement("div",{className:"mascot-wrapper"},c.createElement(xT,null)),c.createElement("div",{className:"hero-content"},c.createElement("h1",{className:"hero-tagline"},"Do it Right"),c.createElement("div",{className:"app-tiles-grid"},c.createElement(zu,{to:"/coding",className:"app-tile",style:{"--tile-color":"var(--kids-orange)"}},c.createElement("div",{className:"app-tile-icon",style:{background:"rgba(249, 115, 22, 0.1)",color:"var(--kids-orange)"}},c.createElement(HT,{size:32})),c.createElement("div",{style:{textAlign:"left",flex:1}},c.createElement("h2",{className:"app-tile-title"},"Coding 4 Kids"),c.createElement("p",{style:{margin:0,fontSize:"0.8rem",color:"var(--kids-text-muted)"}},"Build games and apps!"))),c.createElement(zu,{to:"/robotics",className:"app-tile",style:{"--tile-color":"var(--kids-blue)"}},c.createElement("div",{className:"app-tile-icon",style:{background:"rgba(14, 165, 233, 0.1)",color:"var(--kids-blue)"}},c.createElement(GT,{size:32})),c.createElement("div",{style:{textAlign:"left",flex:1}},c.createElement("h2",{className:"app-tile-title"},"Robotics 4 Kids"),c.createElement("p",{style:{margin:0,fontSize:"0.8rem",color:"var(--kids-text-muted)"}},"Bring machines to life!"))),c.createElement(zu,{to:"/ai",className:"app-tile",style:{"--tile-color":"var(--kids-purple)"}},c.createElement("div",{className:"app-tile-icon",style:{background:"rgba(168, 85, 247, 0.1)",color:"var(--kids-purple)"}},c.createElement(qT,{size:32})),c.createElement("div",{style:{textAlign:"left",flex:1}},c.createElement("h2",{className:"app-tile-title"},"AI 4 Kids"),c.createElement("p",{style:{margin:"0.15rem 0 0",fontSize:"0.8rem",color:"var(--kids-text-muted)"}},"Train your own AI!")))),c.createElement("div",{className:"academy-cta-wrapper",style:{marginTop:"2.5rem"}},c.createElement("div",{className:"academy-cta-card"},c.createElement("div",{className:"cta-icon-float"},"🚀"),c.createElement("h2",{className:"cta-title"},"Ready to start?"),c.createElement("p",{className:"cta-text"},"Join 1,000+ kids learning to build the future!"),c.createElement("button",{className:"kids-button pulse-neon",onClick:()=>t(!0),style:{width:"100%",marginTop:"1rem"}},"Join the Academy")))))),c.createElement(rI,null),c.createElement("section",{style:{padding:"5rem 5% 6rem",background:"linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",borderTop:"1px solid #e2e8f0",borderBottom:"1px solid #e2e8f0"}},c.createElement("div",{style:{maxWidth:"1200px",margin:"0 auto"}},c.createElement("div",{style:{textAlign:"center",marginBottom:"3.5rem"}},c.createElement("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"rgba(13, 148, 136, 0.1)",color:"#0d9488",padding:"0.4rem 1rem",borderRadius:"20px",fontSize:"0.85rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"1rem"}},c.createElement(JT,{size:14})," Parents & Teachers Hub"),c.createElement("h2",{style:{fontFamily:"'Baloo 2', cursive",fontSize:"clamp(1.8rem, 4vw, 2.8rem)",fontWeight:800,margin:"0 0 1rem 0",color:"#1e3a8a"}},"Featured Insights & STEM Wisdom"),c.createElement("p",{style:{fontSize:"clamp(0.95rem, 2.5vw, 1.15rem)",color:"#475569",maxWidth:"650px",margin:"0 auto",lineHeight:1.5}},"Explore practical, research-backed advice on screen time, computational literacy, robotics engineering, and raising the next generation of builders in Ghana.")),c.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"2rem",marginBottom:"3.5rem"}},eI.slice(0,3).map(e=>c.createElement("article",{key:e.id,style:{background:"white",borderRadius:"24px",border:"1px solid #e2e8f0",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 4px 20px rgba(0,0,0,0.02)",transition:"transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease"},className:"blog-card-hover"},c.createElement("div",{style:{background:e.coverGradient,height:"140px",padding:"1.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"}},c.createElement("span",{style:{background:"white",color:e.accentColor,padding:"0.35rem 0.85rem",borderRadius:"12px",fontSize:"0.75rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.02em",alignSelf:"flex-start",boxShadow:"0 2px 4px rgba(0,0,0,0.03)"}},e.category),c.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#1e293b"}},c.createElement(WT,{size:16,style:{color:e.accentColor}}),c.createElement("span",{style:{fontSize:"0.8rem",fontWeight:700}},"Kone Kids Insights"))),c.createElement("div",{style:{padding:"1.5rem",display:"flex",flexDirection:"column",flex:1,justifyContent:"space-between"}},c.createElement("div",{style:{marginBottom:"1.25rem"}},c.createElement("h3",{style:{fontFamily:"'Baloo 2', cursive",fontSize:"1.25rem",fontWeight:800,margin:"0 0 0.5rem 0",lineHeight:1.3,color:"#0f172a"}},e.title),c.createElement("p",{style:{fontSize:"0.9rem",color:"#475569",margin:0,lineHeight:1.5,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}},e.summary)),c.createElement("div",{style:{borderTop:"1px solid #f1f5f9",paddingTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}},c.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem"}},c.createElement(KT,{size:14,style:{color:"#94a3b8"}}),c.createElement("span",{style:{fontSize:"0.75rem",color:"var(--kids-text-muted)",fontWeight:600}},e.readTime)),c.createElement(zu,{to:`/blog/${e.slug}`,style:{background:"rgba(13, 148, 136, 0.06)",color:"#0d9488",padding:"0.4rem 0.85rem",borderRadius:"12px",fontSize:"0.8rem",fontWeight:800,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.3rem",transition:"all 0.2s"},className:"btn-read-hover"},"Read ",c.createElement($T,{size:12}))))))),c.createElement("div",{style:{textAlign:"center"}},c.createElement(zu,{to:"/blog",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"linear-gradient(135deg, #0d9488 0%, #0f766e 100%)",color:"white",border:"none",padding:"0.85rem 2rem",borderRadius:"50px",fontSize:"1rem",fontWeight:800,cursor:"pointer",boxShadow:"0 4px 12px rgba(13, 148, 136, 0.25)",textDecoration:"none",fontFamily:"'Baloo 2', cursive",transition:"all 0.2s"},className:"btn-cta-hover"},"📖 Visit Parent & Teacher Hub"))))),c.createElement("footer",{style:{padding:"clamp(1.5rem, 4vw, 2rem) 5%",background:"white",borderTop:"1px solid #e2e8f0"}},c.createElement("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"0.75rem"}},c.createElement("span",{style:{color:"var(--kids-text-muted)",fontSize:"clamp(0.8rem, 2.5vw, 0.9rem)"}},"© 2026 Kone Kids. All rights reserved."),c.createElement("p",{style:{fontSize:"clamp(0.95rem, 3vw, 1.1rem)",color:"var(--kids-orange)",fontWeight:"bold",margin:0}},"+233 55 199 3820"))))}function lI(){const{markVisited:e,markBadgeViewed:t,latestBadge:n}=CT(),[r,i]=c.useState(null),a=gu(),[s,o]=c.useState(window.innerWidth<=768),l=a.pathname.includes("/mission/");return c.useEffect(()=>{const e=()=>o(window.innerWidth<=768);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),c.useEffect(()=>{n&&i(n)},[n]),c.useEffect(()=>{e(window.location.pathname)},[window.location.pathname,e]),c.useEffect(()=>{let e=document.querySelector('link[rel="canonical"]');e||(e=document.createElement("link"),e.setAttribute("rel","canonical"),document.head.appendChild(e));const t=a.pathname.endsWith("/")&&"/"!==a.pathname?a.pathname.slice(0,-1):a.pathname;e.setAttribute("href",`https://kids.koneacademy.io${t}`)},[a.pathname]),c.createElement(c.Fragment,null,c.createElement(MT,null),c.createElement(ZT,{badge:r,onClose:()=>{r&&t(r.id),i(null)}}),c.createElement("div",{style:{paddingBottom:s&&!l?"80px":"0"}},c.createElement(c.Suspense,{fallback:c.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh",gap:"8px"}},c.createElement("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#f97316",animation:"dotPulse 1.2s ease-in-out infinite 0s",display:"block"}}),c.createElement("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#0ea5e9",animation:"dotPulse 1.2s ease-in-out infinite 0.2s",display:"block"}}),c.createElement("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:"#a855f7",animation:"dotPulse 1.2s ease-in-out infinite 0.4s",display:"block"}}))},c.createElement(Ru,null,c.createElement(Nu,{path:"/",element:c.createElement(oI,null)}),c.createElement(Nu,{path:"/blog",element:c.createElement(aI,null)}),c.createElement(Nu,{path:"/blog/:id",element:c.createElement(sI,null)}),c.createElement(Nu,{path:"/coding",element:c.createElement(iI,{hub:"coding"})}),c.createElement(Nu,{path:"/robotics",element:c.createElement(iI,{hub:"robotics"})}),c.createElement(Nu,{path:"/ai",element:c.createElement(iI,{hub:"ai"})}),c.createElement(Nu,{path:"/coding/mission/:missionId",element:c.createElement(tI,{title:"Coding Lab",image:"/programs/coding.png",description:"Master the mission!",accentColor:"var(--kids-orange)"})}),c.createElement(Nu,{path:"/robotics/mission/:missionId",element:c.createElement(tI,{title:"Robotics Lab",image:"/programs/robotics.png",description:"Build and program your robot!",accentColor:"var(--kids-blue)"})}),c.createElement(Nu,{path:"/ai/mission/:missionId",element:c.createElement(tI,{title:"AI Studio",image:"/programs/ai.png",description:"Train your first AI model!",accentColor:"#a855f7"})})))),s&&!l&&c.createElement("div",{className:"mobile-bottom-nav"},c.createElement(zu,{to:"/",className:"nav-item "+("/"===a.pathname?"nav-item-active":"")},c.createElement(QT,{size:24,className:"nav-icon"}),c.createElement("span",null,"Home")),c.createElement(zu,{to:"/coding",className:"nav-item "+("/coding"===a.pathname?"nav-item-active":"")},c.createElement(HT,{size:24,className:"nav-icon"}),c.createElement("span",null,"Coding")),c.createElement(zu,{to:"/robotics",className:"nav-item "+("/robotics"===a.pathname?"nav-item-active":"")},c.createElement(GT,{size:24,className:"nav-icon"}),c.createElement("span",null,"Robotics")),c.createElement(zu,{to:"/ai",className:"nav-item "+("/ai"===a.pathname?"nav-item-active":"")},c.createElement(qT,{size:24,className:"nav-icon"}),c.createElement("span",null,"AI Lab"))),c.createElement(OT,null))}function cI(){return c.createElement(NT,null,c.createElement(IT,null,c.createElement(lI,null)))}class uI extends c.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleGlobalError=e=>{this.logError(e.error||new Error(e.message),{componentStack:"Global Window Error"})},this.handleGlobalPromiseRejection=e=>{this.logError(e.reason||new Error("Unhandled Promise Rejection"),{componentStack:"Global Promise Rejection"})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidMount(){window.addEventListener("error",this.handleGlobalError),window.addEventListener("unhandledrejection",this.handleGlobalPromiseRejection)}componentWillUnmount(){window.removeEventListener("error",this.handleGlobalError),window.removeEventListener("unhandledrejection",this.handleGlobalPromiseRejection)}async componentDidCatch(e,t){console.error("Uncaught error caught by ErrorBoundary:",e,t),await this.logError(e,t)}async logError(e,t){try{await i_(gS(kT,"client_errors"),{appName:this.props.appName||"Kone-Kids",errorMessage:e.message,errorStack:e.stack,componentStack:t.componentStack,url:window.location.href,userAgent:navigator.userAgent,timestamp:KS()}),console.log("Error successfully logged to Firestore.")}catch(e){console.error("Failed to log error to Firestore:",e)}}render(){return this.state.hasError?c.createElement("div",{style:{padding:"2rem",textAlign:"center",fontFamily:"system-ui, -apple-system, sans-serif",color:"#f8fafc",background:"#0a0a0f",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},c.createElement("h2",{style:{color:"#ec4899",marginBottom:"1rem",fontSize:"2rem"}},"Oops, something went wrong."),c.createElement("p",{style:{color:"#94a3b8",marginBottom:"2rem",maxWidth:"500px",lineHeight:"1.6"}},this.props.fallbackMessage||"We're sorry, but an unexpected error occurred. Our engineering team has been notified. Please try refreshing the page."),c.createElement("button",{onClick:()=>window.location.reload(),style:{padding:"12px 24px",background:"#ec4899",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"600",fontSize:"1rem",boxShadow:"0 0 15px rgba(236, 72, 153, 0.4)"}},"Refresh Page")):this.props.children}}const hI=document.getElementById("root");hI&&hI.hasChildNodes()?_c.hydrate(c.createElement(c.StrictMode,null,c.createElement(uI,{appName:"Kone-Kids"},c.createElement(Fu,null,c.createElement(cI,null)))),hI):_c.render(c.createElement(c.StrictMode,null,c.createElement(uI,{appName:"Kone-Kids"},c.createElement(Fu,null,c.createElement(cI,null)))),hI);export{$T as A,WT as B,KT as C,zu as L,xT as M,YT as S,XT as T,n as a,t as b,BT as c,vu as d,gu as e,CT as f,r as g,i_ as h,gS as i,kT as j,JT as k,PT as l,eI as m,c as r,KS as s,wu as u};
