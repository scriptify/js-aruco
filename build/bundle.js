!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Recordy=t():e.Recordy=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t){"use strict";navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(e){var t=document.createElement("video"),o=document.createElement("canvas"),n=document.querySelector("#app"),r=!1,i=200;o.style.display="none",t.srcObject=e,t.addEventListener("canplay",function(e){if(!r){r=!0;var d=t.videoHeight/(t.videoWidth/i);t.setAttribute("width",i),t.setAttribute("height",d),o.setAttribute("width",i),o.setAttribute("height",d),n.appendChild(t),n.appendChild(o)}})}).catch(function(e){return console.error(e)})}])});