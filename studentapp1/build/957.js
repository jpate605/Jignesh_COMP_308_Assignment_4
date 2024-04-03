"use strict";(self.webpackChunkstudentapp1=self.webpackChunkstudentapp1||[]).push([[957],{957:(e,n,t)=>{t.r(n);var r=t(914),a=t.n(r),o=t(672),i=t.n(o);function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=o.call(t)).done)&&(l.push(r.value),l.length!==n);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=t(72),s=t.n(u),p=t(825),d=t.n(p),f=t(659),m=t.n(f),v=t(56),h=t.n(v),b=t(540),y=t.n(b),g=t(113),x=t.n(g),A=t(723),E={};E.styleTagTransform=x(),E.setAttributes=h(),E.insert=m().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=y(),s()(A.A,E),A.A&&A.A.locals&&A.A.locals;const S=function(){var e=c((0,r.useState)(""),2),n=e[0],t=e[1],o=c((0,r.useState)(""),2),i=o[0],l=o[1],u=c((0,r.useState)(""),2),s=u[0],p=u[1];return a().createElement("div",{className:"form-container"},a().createElement("h2",null,"Student Form"),a().createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Student:",{name:n,email:i,phone:s})}},a().createElement("label",null,"Full Name:"),a().createElement("input",{type:"text",value:n,onChange:function(e){t(e.target.value)},className:"input-field"}),a().createElement("label",null,"Email Address:"),a().createElement("input",{type:"email",value:i,onChange:function(e){l(e.target.value)},className:"input-field"}),a().createElement("label",null,"Phone Number:"),a().createElement("input",{type:"tel",value:s,onChange:function(e){p(e.target.value)},className:"input-field"}),a().createElement("button",{type:"submit"},"Submit")))};var w=t(972),C={};C.styleTagTransform=x(),C.setAttributes=h(),C.insert=m().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=y(),s()(w.A,C),w.A&&w.A.locals&&w.A.locals;var T=function(){return a().createElement("div",{className:"container"},a().createElement(S,null))};i().render(a().createElement(T,null),document.getElementById("app"))},723:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([e.id,"\n.form-container {\n  width: 500px;\n  margin: 0 auto;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.input-field {\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n\n.input-field:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n}\n",""]);const l=i},972:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([e.id,"body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.container {\n  font-size: 3rem;\n  margin: auto;\n  max-width: 800px;\n  margin-top: 20px;\n}",""]);const l=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],l=0;l<e.length;l++){var c=e[l],u=r.base?c[0]+r.base:c[0],s=o[u]||0,p="".concat(u," ").concat(s);o[u]=s+1;var d=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=a(f,r);r.byIndex=l,n.splice(l,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=t(o[i]);n[l].references--}for(var c=r(e,a),u=0;u<o.length;u++){var s=t(o[u]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);