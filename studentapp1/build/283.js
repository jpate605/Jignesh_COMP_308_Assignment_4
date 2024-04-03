"use strict";(self.webpackChunkstudentapp1=self.webpackChunkstudentapp1||[]).push([[283],{822:(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{A:()=>r})},470:(e,t,n)=>{function r(e){if(Array.isArray(e))return e}n.d(t,{A:()=>r})},713:(e,t,n)=>{function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,u=[],c=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}n.d(t,{A:()=>r})},103:(e,t,n)=>{function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{A:()=>r})},92:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(470),a=n(713),o=n(44),i=n(103);function u(e,t){return(0,r.A)(e)||(0,a.A)(e,t)||(0,o.A)(e,t)||(0,i.A)()}},44:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(822);function a(e,t){if(e){if("string"==typeof e)return(0,r.A)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.A)(e,t):void 0}}},283:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(92),a=n(914),o=n.n(a);n(928);const i=function(){var e=(0,a.useState)(""),t=(0,r.A)(e,2),n=t[0],i=t[1],u=(0,a.useState)(""),c=(0,r.A)(u,2),l=c[0],s=c[1],d=(0,a.useState)(""),p=(0,r.A)(d,2),f=p[0],m=p[1];return o().createElement("div",{className:"form-container"},o().createElement("h2",null,"Student Form"),o().createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Student:",{name:n,email:l,phone:f})}},o().createElement("label",null,"Full Name:"),o().createElement("input",{type:"text",value:n,onChange:function(e){i(e.target.value)},className:"input-field"}),o().createElement("label",null,"Email Address:"),o().createElement("input",{type:"email",value:l,onChange:function(e){s(e.target.value)},className:"input-field"}),o().createElement("label",null,"Phone Number:"),o().createElement("input",{type:"tel",value:f,onChange:function(e){m(e.target.value)},className:"input-field"}),o().createElement("button",{type:"submit"},"Submit")))}},723:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,"\n.form-container {\n  width: 500px;\n  margin: 0 auto;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.input-field {\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n.input-field:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}\n",""]);const u=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},928:(e,t,n)=>{var r=n(72),a=n.n(r),o=n(825),i=n.n(o),u=n(659),c=n.n(u),l=n(56),s=n.n(l),d=n(540),p=n.n(d),f=n(113),m=n.n(f),v=n(723),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),a()(v.A,h),v.A&&v.A.locals&&v.A.locals},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var c=e[u],l=r.base?c[0]+r.base:c[0],s=o[l]||0,d="".concat(l," ").concat(s);o[l]=s+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=u,t.splice(u,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var c=r(e,a),l=0;l<o.length;l++){var s=n(o[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);