import{r as e,_ as t,C as n,E as a,a as i,F as r,o,g as s,b as c,d as l,L as u,i as d,c as f,e as p,v as m,f as g,h}from"./index.esm.1c8c2954.js";import{g as w}from"./index-568d0403.5105c2fe.js";import{g as y}from"./index.esm.bbbc7881.js";
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
e("firebase","12.12.1","app");const I="@firebase/installations",b="0.6.21",v=1e4,T=`w:${b}`,S="FIS_v2",k=36e5,C=new a("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function $(e){return e instanceof r&&e.code.includes("request-failed")}
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
 */function A({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function F(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function P(e,t){const n=(await t.json()).error;return C.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function D({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function E(e,{refreshToken:t}){const n=D(e);return n.append("Authorization",function(e){return`${S} ${e}`}
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
 */(t)),n}async function j(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function M(e){return new Promise(t=>{setTimeout(t,e)})}
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
const x=/^[cdef][\w-]{21}$/;function q(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
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
 */(e);return x.test(t)?t:""}catch{return""}}function z(e){return`${e.appName}!${e.appId}`}
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
 */const K=new Map;function _(e,t){const n=z(e);N(n,t),function(e,t){const n=function(){!R&&"BroadcastChannel"in self&&(R=new BroadcastChannel("[Firebase] FID Change"),R.onmessage=e=>{N(e.data.key,e.data.fid)});return R}();n&&n.postMessage({key:e,fid:t});0===K.size&&R&&(R.close(),R=null)}(n,t)}function N(e,t){const n=K.get(e);if(n)for(const e of n)e(t)}let R=null;
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
const L="firebase-installations-store";let O=null;function U(){return O||(O=o("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(L)}})),O}async function B(e,t){const n=z(e),a=(await U()).transaction(L,"readwrite"),i=a.objectStore(L),r=await i.get(n);return await i.put(t,n),await a.done,r&&r.fid===t.fid||_(e,t.fid),t}async function V(e){const t=z(e),n=(await U()).transaction(L,"readwrite");await n.objectStore(L).delete(t),await n.done}async function H(e,t){const n=z(e),a=(await U()).transaction(L,"readwrite"),i=a.objectStore(L),r=await i.get(n),o=t(r);return void 0===o?await i.delete(n):await i.put(o,n),await a.done,!o||r&&r.fid===o.fid||_(e,o.fid),o}
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
 */async function G(e){let t;const n=await H(e.appConfig,n=>{const a=function(e){const t=e||{fid:q(),registrationStatus:0};return Q(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(C.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=A(e),i=D(e),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:S,appId:e.appId,sdkVersion:T},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await j(()=>fetch(a,s));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:F(e.authToken)}}throw await P("Create Installation",c)}(e,t);return B(e.appConfig,n)}catch(n){throw $(n)&&409===n.customData.serverCode?await V(e.appConfig):await B(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:W(e)}:{installationEntry:t}}(e,a);return t=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function W(e){let t=await J(e.appConfig);for(;1===t.registrationStatus;)await M(100),t=await J(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await G(e);return n||t}return t}function J(e){return H(e,e=>{if(!e)throw C.create("installation-not-found");return Q(e)})}function Q(e){return 1===(t=e).registrationStatus&&t.registrationTime+v<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function Y({appConfig:e,heartbeatServiceProvider:t},n){const a=function(e,{fid:t}){return`${A(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=E(e,n),r=t.getImmediate({optional:!0});if(r){const e=await r.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:T,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await j(()=>fetch(a,s));if(c.ok){return F(await c.json())}throw await P("Generate Auth Token",c)}async function Z(e,t=!1){let n;const a=await H(e.appConfig,a=>{if(!ee(a))throw C.create("not-registered");const i=a.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+k}(e)}(i))return a;if(1===i.requestStatus)return n=async function(e,t){let n=await X(e.appConfig);for(;1===n.authToken.requestStatus;)await M(100),n=await X(e.appConfig);const a=n.authToken;return 0===a.requestStatus?Z(e,t):a}(e,t),a;{if(!navigator.onLine)throw C.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}(a);return n=async function(e,t){try{const n=await Y(e,t),a={...t,authToken:n};return await B(e.appConfig,a),n}catch(n){if(!$(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n={...t,authToken:{requestStatus:0}};await B(e.appConfig,n)}else await V(e.appConfig);throw n}}(e,t),t}});return n?await n:a.authToken}function X(e){return H(e,e=>{if(!ee(e))throw C.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+v<Date.now()?{...e,authToken:{requestStatus:0}}:e;var n;
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
 */})}function ee(e){return void 0!==e&&2===e.registrationStatus}
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
async function te(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await G(e);t&&await t}
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
 */(n);return(await Z(n,t)).token}function ne(e){return C.create("missing-app-config-values",{valueName:e})}
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
 */const ae="installations",ie=e=>{const t=e.getProvider("app").getImmediate(),n=i(t,ae).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:a}=await G(t);return a?a.catch(console.error):Z(t).catch(console.error),n.fid}(n),getToken:e=>te(n,e)}};t(new n(ae,e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw ne("App Configuration");if(!e.name)throw ne("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ne(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:i(t,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),t(new n("installations-internal",ie,"PRIVATE")),e(I,b),e(I,b,"esm2020");
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
const re="analytics",oe="https://www.googletagmanager.com/gtag/js",se=new u("@firebase/analytics"),ce=new a("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
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
function le(e){if(!e.startsWith(oe)){const t=ce.create("invalid-gtag-resource",{gtagURL:e});return se.warn(t.message),""}return e}function ue(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function de(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:le}),a=document.createElement("script"),i=`${oe}?l=${e}&id=${t}`;a.src=n?n?.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function fe(e,t,n,a){return async function(i,...r){try{if("event"===i){const[a,i]=r;await async function(e,t,n,a,i){try{let r=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const a=await ue(n);for(const n of e){const e=a.find(e=>e.measurementId===n),i=e&&t[e.appId];if(!i){r=[];break}r.push(i)}}0===r.length&&(r=Object.values(t)),await Promise.all(r),e("event",a,i||{})}catch(e){se.error(e)}}(e,t,n,a,i)}else if("config"===i){const[i,o]=r;await async function(e,t,n,a,i,r){const o=a[i];try{if(o)await t[o];else{const e=(await ue(n)).find(e=>e.measurementId===i);e&&await t[e.appId]}}catch(e){se.error(e)}e("config",i,r)}(e,t,n,a,i,o)}else if("consent"===i){const[t,n]=r;e("consent",t,n)}else if("get"===i){const[t,n,a]=r;e("get",t,n,a)}else if("set"===i){const[t]=r;e("set",t)}else e(i,...r)}catch(e){se.error(e)}}}const pe=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function me(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ge(e,t=pe,n){const{appId:a,apiKey:i,measurementId:r}=e.options;if(!a)throw ce.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:a};throw ce.create("no-api-key")}const o=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new we;return setTimeout(async()=>{s.abort()},void 0!==n?n:6e4),he({appId:a,apiKey:i,measurementId:r},o,s,t)}async function he(e,{throttleEndTimeMillis:t,backoffCount:n},a,i=pe){const{appId:o,measurementId:s}=e;try{await function(e,t){return new Promise((n,a)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(r),a(ce.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}(a,t)}catch(e){if(s)return se.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e?.message}]`),{appId:o,measurementId:s};throw e}try{const t=await async function(e){const{appId:t,apiKey:n}=e,a={method:"GET",headers:me(n)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",t),r=await fetch(i,a);if(200!==r.status&&304!==r.status){let e="";try{const t=await r.json();t.error?.message&&(e=t.error.message)}catch(e){}throw ce.create("config-fetch-failed",{httpStatus:r.status,responseMessage:e})}return r.json()}(e);return i.deleteThrottleMetadata(o),t}catch(t){const c=t;if(!function(e){if(!(e instanceof r&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(i.deleteThrottleMetadata(o),s)return se.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:s};throw t}const l=503===Number(c?.customData?.httpStatus)?f(n,i.intervalMillis,30):f(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,u),se.debug(`Calling attemptFetch again in ${l} millis`),he(e,u,a,i)}}class we{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ye(e,t,n,a,i,r,o){const s=ge(e);s.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&se.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>se.error(e)),t.push(s);const c=
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
async function(){if(!p())return se.warn(ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await m()}catch(e){return se.warn(ce.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}return!0}().then(e=>e?a.getId():void 0),[l,u]=await Promise.all([s,c]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(oe)&&n.src.includes(e))return n;return null}
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
 */)(r)||de(r,l.measurementId),i("js",new Date);const d=o?.config??{};return d.origin="firebase",d.update=!0,null!=u&&(d.firebase_id=u),i("config",l.measurementId,d),l.measurementId}
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
 */class Ie{constructor(e){this.app=e}_delete(){return delete be[this.app.options.appId],Promise.resolve()}}let be={},ve=[];const Te={};let Se,ke,Ce="dataLayer",$e=!1;function Ae(e,t,n){!function(){const e=[];if(d()&&e.push("This is a browser extension environment."),g()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=ce.create("invalid-analytics-context",{errorInfo:t});se.warn(n.message)}}();const a=e.options.appId;if(!a)throw ce.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw ce.create("no-api-key");se.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=be[a])throw ce.create("already-exists",{id:a});if(!$e){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Ce);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,a,i){let r=function(...e){window[a].push(arguments)};return window[i]&&"function"==typeof window[i]&&(r=window[i]),window[i]=fe(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}(be,ve,Te,Ce,"gtag");ke=e,Se=t,$e=!0}be[a]=ye(e,ve,Te,t,Se,Ce,n);return new Ie(e)}function Fe(e,t,n){e=s(e),async function(e,t,n,a){if(a&&a.global){const t={};for(const e of Object.keys(n))t[`user_properties.${e}`]=n[e];return e("set",t),Promise.resolve()}e("config",await t,{update:!0,user_properties:n})}(ke,be[e.app.options.appId],t,n).catch(e=>se.error(e))}const Pe="@firebase/analytics",De="0.10.21";t(new n(re,(e,{options:t})=>Ae(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t),"PUBLIC")),t(new n("analytics-internal",function(e){try{const t=e.getProvider(re).getImmediate();return{logEvent:(e,n,a)=>function(e,t,n,a){e=s(e),async function(e,t,n,a,i){if(i&&i.global)e("event",n,a);else{const i=await t;e("event",n,{...a,send_to:i})}}(ke,be[e.app.options.appId],t,n,a).catch(e=>se.error(e))}(t,e,n,a),setUserProperties:(e,n)=>Fe(t,e,n)}}catch(e){throw ce.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),e(Pe,De),e(Pe,De,"esm2020");const Ee={apiKey:"AIzaSyCoFJWEc8z1Z-kddKR8T-QggAFCdm4Y7wI",authDomain:"daywise-ays8t.firebaseapp.com",projectId:"daywise-ays8t",storageBucket:"daywise-ays8t.firebasestorage.app",messagingSenderId:"690549644365",appId:"1:690549644365:web:d895858fbde5497b1c5004",measurementId:{}.VITE_FIREBASE_MEASUREMENT_ID};let je,Me,xe,qe;try{if("undefined"!=typeof window&&"ReactSnap"===window.navigator.userAgent)throw new Error("Pre-rendering environment: Firebase is disabled to prevent socket hang.");Ee.apiKey||console.warn("Kone Kids Firebase: Missing environment variables. Running in local simulation mode."),je=h(Ee),Me=w(je),xe=y(je),"undefined"!=typeof window&&"ReactSnap"!==window.navigator.userAgent&&(qe=function(e=c()){e=s(e);const t=i(e,re);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=i(e,re);if(n.isInitialized()){const e=n.getImmediate();if(l(t,n.getOptions()))return e;throw ce.create("already-initialized")}return n.initialize({options:t})}(e)}(je))}catch(e){console.error("Kone Kids Firebase: Critical Initialization Error. Forcing local fallback."),je={},Me={},xe={}}var ze=je;export{qe as analytics,Me as auth,xe as db,ze as default};
