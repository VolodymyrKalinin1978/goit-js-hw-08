var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=a||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,m=function(){return u.Date.now()};function v(e,t,r){var n,o,i,a,f,u,c=0,v=!1,b=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function T(e){return c=e,f=setTimeout(j,t),v?y(e):a}function h(e){var r=e-u;return void 0===u||r>=t||r<0||b&&e-c>=i}function j(){var e=m();if(h(e))return E(e);f=setTimeout(j,function(e){var r=t-(e-u);return b?s(r,i-(e-c)):r}(e))}function E(e){return f=void 0,p&&n?y(e):(n=o=void 0,a)}function O(){var e=m(),r=h(e);if(n=arguments,o=this,u=e,r){if(void 0===f)return T(u);if(b)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=g(t)||0,d(r)&&(v=!!r.leading,i=(b="maxWait"in r)?l(g(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,n=u=o=f=void 0},O.flush=function(){return void 0===f?a:E(m())},O}function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(d(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=d(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=n.test(e);return f||o.test(e)?i(e.slice(2),f?2:8):r.test(e)?NaN:+e}var b={formEl:document.querySelector(".feedback-form")};var p={save:(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.log("Remove item error: ",e.message)}}};b.formEl.addEventListener("input",(function(e){const t={email:e.currentTarget.elements[0].value,message:e.currentTarget.elements[1].value};p.save("feedback-form-state",t)})),b.formEl.addEventListener("submit",(function(e){if(e.preventDefault(),!e.currentTarget.elements[2])return;const t=p.load("feedback-form-state");console.log(t),e.currentTarget.reset(),p.remove("feedback-form-state")})),function(){const e=p.load("feedback-form-state");if(!e)return;const{email:t,message:r}=e;b.formEl.elements[0].value=t,b.formEl.elements[1].value=r}();
//# sourceMappingURL=03-feedback.41d1f11b.js.map
