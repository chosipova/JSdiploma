!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{let e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".hidden"),n=document.querySelector(".visible-sm-block");e.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("hidden")}),n.classList.remove("visible-sm-block"),e.classList.add("hidden")})};var o=()=>{let e=document.querySelector(".questions"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".panel-collapse");e.addEventListener("click",e=>{let l=e.target;null!==(l=l.closest(".panel-heading"))&&t.forEach((e,t)=>{e===l&&(e=>{for(let t=4;t<n.length;t++)t!==e?n[t].classList.remove("in"):n[t].classList.contains("in")?n[t].classList.remove("in"):n[t].classList.add("in")})(t)})})};var c=()=>{let e=document.querySelector(".constructor"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".panel-collapse"),l=document.querySelectorAll(".construct-btn");e.addEventListener("click",e=>{let o=e.target;o.closest(".construct-btn")?(console.log(o),null!==(o=o.closest(".construct-btn"))&&l.forEach((e,t)=>{e===o&&(e=>{n[e].classList.add("in")})(t+1)})):null!==(o=o.closest(".panel-heading"))&&t.forEach((e,t)=>{e===o&&(e=>{n[e].classList.contains("in")?n[e].classList.remove("in"):n[e].classList.add("in")})(t)})})};(()=>{let e=document.querySelector("body");const t=e=>{document.querySelector(e).style.display="block"},n=()=>{document.querySelectorAll(".popup").forEach(e=>{e&&(e.style.display="none")})};e.addEventListener("click",e=>{let l=e.target;l.classList.contains("call-btn")?t(".popup-call"):l.classList.contains("check-btn")?t(".popup-check"):l.classList.contains("consultation-btn")?t(".popup-consultation"):l.classList.contains("discount-btn")?t(".popup-discount"):l.classList.contains("popup-close")?n():l.closest("popup")||n()})})(),l(),o(),c()}]);