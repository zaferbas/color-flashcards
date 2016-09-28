!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(14),o=n(1);o.store.subscribe(r.render)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;var r=n(8),o=n(13),i=n(3);t.store=(0,r.createStore)(o.rootReducer,i.initialState)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.actions=void 0;var r=n(4),o={sequence:function(e){return{type:r.ACTION_TYPES.sequence,sequence:e}},step:function(){return{type:r.ACTION_TYPES.step}},stepReset:function(){return{type:r.ACTION_TYPES.stepReset}},toggleMute:function(){return{type:r.ACTION_TYPES.toggleMute}},toggleDelay:function(){return{type:r.ACTION_TYPES.toggleDelay}},start:function(){return{type:r.ACTION_TYPES.start}}};t.actions=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.colorsLength=t.colorsKeysArray=t.colors=void 0;var r=n(5),o=n(12),i=t.colors={Black:{},Blue:{},Brown:{},Gold:{},Gray:{},Green:{},Orange:{},Pink:{},Purple:{},Red:{},White:{},Yellow:{}},u=t.colorsKeysArray=Object.keys(i);t.colorsLength=u.length,t.initialState={sequence:(0,r.shuffleArray)(u),step:0,mute:!1,delay:!1,start:!1},u.forEach(function(e){i[e].sample=(0,o.loadAudio)(e.toLowerCase())})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ACTION_TYPES={sequence:"SEQUENCE",step:"STEP",stepReset:"STEP_RESET",toggleMute:"TOGGLE_MUTE",toggleDelay:"TOGGLE_DELAY",start:"START"}},function(e,t){"use strict";function n(e){9===e.keyCode&&(document.documentElement.classList.add("keyboard-focus"),document.removeEventListener("keydown",n,!1))}function r(e){for(var t=e.slice(),n=e.length,r=void 0,o=void 0;n;)r=Math.floor(Math.random()*n),n--,o=t[n],t[n]=t[r],t[r]=o;return t}Object.defineProperty(t,"__esModule",{value:!0}),t.keyboardFocus=n,t.shuffleArray=r},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var r=t[t.length-1],o=t.slice(0,-1);return function(){return o.reduceRight(function(e,t){return t(e)},r.apply(void 0,arguments))}}t.__esModule=!0,t.default=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){function r(){h===g&&(h=g.slice())}function i(){return v}function a(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return r(),h.push(e),function(){if(t){t=!1,r();var n=h.indexOf(e);h.splice(n,1)}}}function l(e){if(!(0,u.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(b)throw new Error("Reducers may not dispatch actions.");try{b=!0,v=y(v,e)}finally{b=!1}for(var t=g=h,n=0;n<t.length;n++)t[n]();return e}function d(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");y=e,l({type:s.INIT})}function f(){var e,t=a;return e={subscribe:function(e){function n(){e.next&&e.next(i())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");n();var r=t(n);return{unsubscribe:r}}},e[c.default]=function(){return this},e}var p;if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var y=e,v=t,g=[],h=g,b=!1;return l({type:s.INIT}),p={dispatch:l,subscribe:a,getState:i,replaceReducer:d},p[c.default]=f,p}t.__esModule=!0,t.ActionTypes=void 0,t.default=o;var i=n(10),u=r(i),a=n(21),c=r(a),s=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var o=n(7),i=r(o),u=n(17),a=r(u),c=n(16),s=r(c),l=n(15),d=r(l),f=n(6),p=r(f),y=n(9);r(y),t.createStore=i.default,t.combineReducers=a.default,t.bindActionCreators=s.default,t.applyMiddleware=d.default,t.compose=p.default},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}t.__esModule=!0,t.default=n},function(e,t,n){function r(e){if(!i(e)||f.call(e)!=u)return!1;var t=o(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==d}var o=n(18),i=n(20),u="[object Object]",a=Function.prototype,c=Object.prototype,s=a.toString,l=c.hasOwnProperty,d=s.call(Object),f=c.toString;e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.btnStart=t.btnToggleDelay=t.btnToggleMute=t.btnNextColor=t.colorNameA11y=t.colorName=t.preloader=void 0;var r=n(2),o=n(1),i=(t.preloader=document.getElementById("preloader"),t.colorName=document.getElementById("color-name"),t.colorNameA11y=document.getElementById("color-name-a11y"),t.btnNextColor=document.getElementById("next-color")),u=t.btnToggleMute=document.getElementById("toggle-mute"),a=t.btnToggleDelay=document.getElementById("toggle-delay"),c=t.btnStart=document.getElementById("start");i.addEventListener("click",function(e){e.preventDefault(),o.store.dispatch(r.actions.step())}),u.addEventListener("click",function(e){e.preventDefault(),o.store.dispatch(r.actions.toggleMute())}),a.addEventListener("click",function(e){e.preventDefault(),o.store.dispatch(r.actions.toggleDelay())}),c.addEventListener("click",function(e){e.preventDefault(),o.store.dispatch(r.actions.start())})},function(e,t,n){"use strict";function r(e){var t=new Audio(e);return t.addEventListener("error",function(){u.store.dispatch(i.actions.step())}),t}function o(e){var t="assets/audio/"+e+".m4a";if("undefined"!=typeof fetch&&"undefined"!=typeof FileReader&&"undefined"!=typeof localStorage){if(localStorage.getItem(e))return r(JSON.parse(localStorage.getItem(e)).src);fetch(t).then(function(n){n.blob().then(function(n){var o=new FileReader;o.readAsDataURL(n),o.addEventListener("loadend",function(){var i=o.result.toString(),u={fileUrl:t,size:n.size,type:n.type,src:i};return localStorage.setItem(e,JSON.stringify(u)),r(i)})})}).catch(function(){return r(t)})}return r(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAudio=o;var i=n(2),u=n(1)},function(e,t,n){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?l.initialState:arguments[0],t=arguments[1];return t.type===s.ACTION_TYPES.sequence?t.sequence:e}function o(){var e=arguments.length<=0||void 0===arguments[0]?l.initialState:arguments[0],t=arguments[1];return t.type===s.ACTION_TYPES.step?e+1:t.type===s.ACTION_TYPES.stepReset?0:e}function i(){var e=arguments.length<=0||void 0===arguments[0]?l.initialState:arguments[0],t=arguments[1];return t.type===s.ACTION_TYPES.toggleMute?!e:e}function u(){var e=arguments.length<=0||void 0===arguments[0]?l.initialState:arguments[0],t=arguments[1];return t.type===s.ACTION_TYPES.toggleDelay?!e:e}function a(){var e=arguments.length<=0||void 0===arguments[0]?l.initialState:arguments[0],t=arguments[1];return t.type===s.ACTION_TYPES.start?!e:e}Object.defineProperty(t,"__esModule",{value:!0}),t.rootReducer=void 0,t.sequence=r,t.step=o,t.mute=i,t.delay=u,t.start=a;var c=n(8),s=n(4),l=n(3);t.rootReducer=(0,c.combineReducers)({sequence:r,step:o,mute:i,delay:u,start:a})},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){var e=(0,c.shuffleArray)(l.colorsKeysArray);e[0]===d.store.getState().sequence[l.colorsLength-1]&&(e=[].concat(r(e.slice(1)),[d.store.getState().sequence[l.colorsLength-1]])),d.store.dispatch(a.actions.sequence(e))}function i(){s.btnToggleMute.setAttribute("aria-pressed",d.store.getState().mute),d.store.getState().mute?(s.btnToggleMute.classList.add("svg-toggled"),clearInterval(p)):s.btnToggleMute.classList.remove("svg-toggled"),s.btnToggleDelay.setAttribute("aria-pressed",d.store.getState().delay),d.store.getState().delay?s.btnToggleDelay.classList.add("svg-toggled"):s.btnToggleDelay.classList.remove("svg-toggled")}function u(){if(d.store.getState().start){s.colorName.classList.add("full-screen"),s.btnNextColor.classList.add("full-screen"),s.btnNextColor.setAttribute("aria-hidden",!1),i();var e=d.store.getState().step;if(f!==e){if(f=e,clearInterval(p),e>l.colorsLength-1)return o(),void d.store.dispatch(a.actions.stepReset());var t=d.store.getState().sequence[e],n=l.colors[t].sample;s.preloader.classList.add("is-hidden"),s.colorName.innerHTML=t,s.colorName.className=s.colorName.className.replace(/(card--\w+\s?)?/,"card--"+t.toLowerCase()+" "),d.store.getState().mute||n.error||(n.play(),n.pause()),p=setTimeout(function(){s.colorNameA11y.innerHTML=t,d.store.getState().mute||n.error||n.play()},d.store.getState().delay?2e3:0)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.render=u;var a=n(2),c=n(5),s=n(11),l=n(3),d=n(1);document.documentElement.classList.remove("no-js"),document.addEventListener("keydown",c.keyboardFocus,!1);var f=void 0,p=void 0},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,o){var u=e(n,r,o),c=u.dispatch,s=[],l={getState:u.getState,dispatch:function(e){return c(e)}};return s=t.map(function(e){return e(l)}),c=a.default.apply(void 0,s)(u.dispatch),i({},u,{dispatch:c})}}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=o;var u=n(6),a=r(u)},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function r(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),o={},i=0;i<r.length;i++){var u=r[i],a=e[u];"function"==typeof a&&(o[u]=n(a,t))}return o}t.__esModule=!0,t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=t&&t.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function u(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var u=t[r];"function"==typeof e[u]&&(n[u]=e[u])}var a,c=Object.keys(n);try{i(n)}catch(e){a=e}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;for(var r=!1,i={},u=0;u<c.length;u++){var s=c[u],l=n[s],d=e[s],f=l(d,t);if("undefined"==typeof f){var p=o(s,t);throw new Error(p)}i[s]=f,r=r||f!==d}return r?i:e}}t.__esModule=!0,t.default=u;var a=n(7),c=n(10),s=(r(c),n(9));r(s)},function(e,t,n){var r=n(19),o=r(Object.getPrototypeOf,Object);e.exports=o},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){e.exports=n(22)},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(23),i=r(o),u=void 0;"undefined"!=typeof e?u=e:"undefined"!=typeof window&&(u=window);var a=(0,i.default)(u);t.default=a}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}]);