!function(e){"use strict";var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,n=e.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),r=n&&e.Uint8Array&&function(){try{return 100===(new Blob([new Uint8Array(100)])).size}catch(e){return!1}}(),i=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,s=(n||i)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(e){var t,s,o,u,a,f;for(t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURIComponent(e.split(",")[1]),s=new ArrayBuffer(t.length),o=new Uint8Array(s),u=0;u<t.length;u+=1)o[u]=t.charCodeAt(u);return a=e.split(",")[0].split(":")[1].split(";")[0],n?new Blob([r?o:s],{type:a}):(f=new i,f.append(s),f.getBlob(a))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(e,n,r){r&&t.toDataURL&&s?e(s(this.toDataURL(n,r))):e(this.mozGetAsFile("blob",n))}:t.toDataURL&&s&&(t.toBlob=function(e,t,n){e(s(this.toDataURL(t,n)))})),"function"==typeof define&&define.amd?define(function(){return s}):e.dataURLtoBlob=s}(this);