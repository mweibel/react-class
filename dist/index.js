!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("React")):"function"==typeof define&&define.amd?define(["React"],e):"object"==typeof exports?exports.ReactClass=e(require("React")):t.ReactClass=e(t.React)}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=t.constructor.prototype,r=Object.getOwnPropertyNames(e).filter(function(t){return"constructor"!=t&&"render"!=t&&"function"==typeof e[t]});return r.push("setState"),r.forEach(function(e){t[e]=t[e].bind(t)}),t}var c=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=function(t,e,r){for(var n=!0;n;){var o=t,a=e,c=r;n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var i=u.get;if(void 0===i)return;return i.call(c)}var s=Object.getPrototypeOf(o);if(null===s)return;t=s,e=a,r=c,n=!0,u=s=void 0}},i=r(2),s=r(1),f=function(t){function e(t){n(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t),a(this)}return o(e,t),c(e,[{key:"prepareProps",value:function(t){var e=s({},t);return e.style=this.prepareStyle(e),e.className=this.prepareClassName(e),e}},{key:"prepareClassName",value:function(t){var e=t.className||"",r=this.constructor.defaultProps;return r&&null!=r.defaultClassName&&(e+=" "+r.defaultClassName),e}},{key:"prepareStyle",value:function(t){var e;return this.constructor.defaultProps&&(e=this.constructor.defaultProps.defaultStyle),s({},e,t.style)}}]),e}(i.Component);t.exports=f},function(t,e){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function n(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;10>r;r++)e["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}}var o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=n()?Object.assign:function(t,e){for(var n,c,u=r(t),i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var s in n)o.call(n,s)&&(u[s]=n[s]);if(Object.getOwnPropertySymbols){c=Object.getOwnPropertySymbols(n);for(var f=0;f<c.length;f++)a.call(n,c[f])&&(u[c[f]]=n[c[f]])}}return u}},function(e,r){e.exports=t}])});