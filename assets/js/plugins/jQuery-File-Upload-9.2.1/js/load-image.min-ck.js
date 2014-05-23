!function(e){"use strict";var t=function(e,n,r){var i,s,o=document.createElement("img");if(o.onerror=n,o.onload=function(){!s||r&&r.noRevoke||t.revokeObjectURL(s),n&&n(t.scale(o,r))},t.isInstanceOf("Blob",e)||t.isInstanceOf("File",e))i=s=t.createObjectURL(e),o._type=e.type;else{if("string"!=typeof e)return!1;i=e,r&&r.crossOrigin&&(o.crossOrigin=r.crossOrigin)}return i?(o.src=i,o):t.readFile(e,function(e){var t=e.target;t&&t.result?o.src=t.result:n&&n(e)})},n=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;t.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},t.transformCoordinates=function(){},t.getTransformedOptions=function(e){return e},t.renderImageToCanvas=function(e,t,n,r,i,s,o,u,a,f){return e.getContext("2d").drawImage(t,n,r,i,s,o,u,a,f),e},t.hasCanvasOption=function(e){return e.canvas||e.crop},t.scale=function(e,n){n=n||{};var r,i,s,o,u,a,f,l,c,h=document.createElement("canvas"),p=e.getContext||t.hasCanvasOption(n)&&h.getContext,d=e.naturalWidth||e.width,v=e.naturalHeight||e.height,m=d,g=v,y=function(){var e=Math.max((s||m)/m,(o||g)/g);e>1&&(m=Math.ceil(m*e),g=Math.ceil(g*e))},w=function(){var e=Math.min((r||m)/m,(i||g)/g);1>e&&(m=Math.ceil(m*e),g=Math.ceil(g*e))};return p&&(n=t.getTransformedOptions(n),f=n.left||0,l=n.top||0,n.sourceWidth?(u=n.sourceWidth,void 0!==n.right&&void 0===n.left&&(f=d-u-n.right)):u=d-f-(n.right||0),n.sourceHeight?(a=n.sourceHeight,void 0!==n.bottom&&void 0===n.top&&(l=v-a-n.bottom)):a=v-l-(n.bottom||0),m=u,g=a),r=n.maxWidth,i=n.maxHeight,s=n.minWidth,o=n.minHeight,p&&r&&i&&n.crop?(m=r,g=i,c=u/a-r/i,0>c?(a=i*u/r,void 0===n.top&&void 0===n.bottom&&(l=(v-a)/2)):c>0&&(u=r*a/i,void 0===n.left&&void 0===n.right&&(f=(d-u)/2))):((n.contain||n.cover)&&(s=r=r||s,o=i=i||o),n.cover?(w(),y()):(y(),w())),p?(h.width=m,h.height=g,t.transformCoordinates(h,n),t.renderImageToCanvas(h,e,f,l,u,a,0,0,m,g)):(e.width=m,e.height=g,e)},t.createObjectURL=function(e){return n?n.createObjectURL(e):!1},t.revokeObjectURL=function(e){return n?n.revokeObjectURL(e):!1},t.readFile=function(e,t,n){if(window.FileReader){var r=new FileReader;if(r.onload=r.onerror=t,n=n||"readAsDataURL",r[n])return r[n](e),r}return!1},"function"==typeof define&&define.amd?define(function(){return t}):e.loadImage=t}(this),function(e){"use strict";"function"==typeof define&&define.amd?define(["load-image"],e):e(window.loadImage)}(function(e){"use strict";if(window.navigator&&window.navigator.platform&&/iP(hone|od|ad)/.test(window.navigator.platform)){var t=e.renderImageToCanvas;e.detectSubsampling=function(e){var t,n;return e.width*e.height>1048576?(t=document.createElement("canvas"),t.width=t.height=1,n=t.getContext("2d"),n.drawImage(e,-e.width+1,0),0===n.getImageData(0,0,1,1).data[3]):!1},e.detectVerticalSquash=function(e,t){var n,r,i,s,o,u=e.naturalHeight||e.height,a=document.createElement("canvas"),f=a.getContext("2d");for(t&&(u/=2),a.width=1,a.height=u,f.drawImage(e,0,0),n=f.getImageData(0,0,1,u).data,r=0,i=u,s=u;s>r;)o=n[4*(s-1)+3],0===o?i=s:r=s,s=i+r>>1;return s/u||1},e.renderImageToCanvas=function(n,r,i,s,o,u,f,l,c,h){if("image/jpeg"===r._type){var p,d,v,m,g=n.getContext("2d"),y=document.createElement("canvas"),w=1024,E=y.getContext("2d");if(y.width=w,y.height=w,g.save(),p=e.detectSubsampling(r),p&&(i/=2,s/=2,o/=2,u/=2),d=e.detectVerticalSquash(r,p),p||1!==d){for(s*=d,c=Math.ceil(w*c/o),h=Math.ceil(w*h/u/d),l=0,m=0;u>m;){for(f=0,v=0;o>v;)E.clearRect(0,0,w,w),E.drawImage(r,i,s,o,u,-v,-m,o,u),g.drawImage(y,0,0,w,w,f,l,c,h),v+=w,f+=c;m+=w,l+=h}return g.restore(),n}}return t(n,r,i,s,o,u,f,l,c,h)}}}),function(e){"use strict";"function"==typeof define&&define.amd?define(["load-image"],e):e(window.loadImage)}(function(e){"use strict";var t=e.hasCanvasOption;e.hasCanvasOption=function(e){return t(e)||e.orientation},e.transformCoordinates=function(e,t){var n=e.getContext("2d"),r=e.width,i=e.height,s=t.orientation;if(s)switch(s>4&&(e.width=i,e.height=r),s){case 2:n.translate(r,0),n.scale(-1,1);break;case 3:n.translate(r,i),n.rotate(Math.PI);break;case 4:n.translate(0,i),n.scale(1,-1);break;case 5:n.rotate(.5*Math.PI),n.scale(1,-1);break;case 6:n.rotate(.5*Math.PI),n.translate(0,-i);break;case 7:n.rotate(.5*Math.PI),n.translate(r,-i),n.scale(-1,1);break;case 8:n.rotate(-0.5*Math.PI),n.translate(-r,0)}},e.getTransformedOptions=function(e){if(!e.orientation||1===e.orientation)return e;var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);switch(e.orientation){case 2:n.left=e.right,n.right=e.left;break;case 3:n.left=e.right,n.top=e.bottom,n.right=e.left,n.bottom=e.top;break;case 4:n.top=e.bottom,n.bottom=e.top;break;case 5:n.left=e.top,n.top=e.left,n.right=e.bottom,n.bottom=e.right;break;case 6:n.left=e.top,n.top=e.right,n.right=e.bottom,n.bottom=e.left;break;case 7:n.left=e.bottom,n.top=e.right,n.right=e.top,n.bottom=e.left;break;case 8:n.left=e.bottom,n.top=e.left,n.right=e.top,n.bottom=e.right}return e.orientation>4&&(n.maxWidth=e.maxHeight,n.maxHeight=e.maxWidth,n.minWidth=e.minHeight,n.minHeight=e.minWidth,n.sourceWidth=e.sourceHeight,n.sourceHeight=e.sourceWidth),n}}),function(e){"use strict";"function"==typeof define&&define.amd?define(["load-image"],e):e(window.loadImage)}(function(e){"use strict";var t=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);e.blobSlice=t&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},e.metaDataParsers={jpeg:{65505:[]}},e.parseMetaData=function(t,n,r){r=r||{};var i=this,s=r.maxMetaDataSize||262144,o={},u=!(window.DataView&&t&&t.size>=12&&"image/jpeg"===t.type&&e.blobSlice);(u||!e.readFile(e.blobSlice.call(t,0,s),function(t){var s,u,f,l,h=t.target.result,p=new DataView(h),v=2,m=p.byteLength-4,y=v;if(65496===p.getUint16(0)){for(;m>v&&(s=p.getUint16(v),s>=65504&&65519>=s||65534===s);){if(u=p.getUint16(v+2)+2,v+u>p.byteLength){console.log("Invalid meta data: Invalid segment size.");break}if(f=e.metaDataParsers.jpeg[s])for(l=0;l<f.length;l+=1)f[l].call(i,p,v,u,o,r);v+=u,y=v}!r.disableImageHead&&y>6&&(o.imageHead=h.slice?h.slice(0,y):(new Uint8Array(h)).subarray(0,y))}else console.log("Invalid JPEG file: Missing JPEG marker.");n(o)},"readAsArrayBuffer"))&&n(o)}}),function(e){"use strict";"function"==typeof define&&define.amd?define(["load-image","load-image-meta"],e):e(window.loadImage)}(function(e){"use strict";e.ExifMap=function(){return this},e.ExifMap.prototype.map={Orientation:274},e.ExifMap.prototype.get=function(e){return this[e]||this[this.map[e]]},e.getExifThumbnail=function(e,t,n){var r,i,s;if(!n||t+n>e.byteLength)return console.log("Invalid Exif data: Invalid thumbnail data."),void 0;for(r=[],i=0;n>i;i+=1)s=e.getUint8(t+i),r.push((16>s?"0":"")+s.toString(16));return"data:image/jpeg,%"+r.join("%")},e.exifTagTypes={1:{getValue:function(e,t){return e.getUint8(t)},size:1},2:{getValue:function(e,t){return String.fromCharCode(e.getUint8(t))},size:1,ascii:!0},3:{getValue:function(e,t,n){return e.getUint16(t,n)},size:2},4:{getValue:function(e,t,n){return e.getUint32(t,n)},size:4},5:{getValue:function(e,t,n){return e.getUint32(t,n)/e.getUint32(t+4,n)},size:8},9:{getValue:function(e,t,n){return e.getInt32(t,n)},size:4},10:{getValue:function(e,t,n){return e.getInt32(t,n)/e.getInt32(t+4,n)},size:8}},e.exifTagTypes[7]=e.exifTagTypes[1],e.getExifValue=function(t,n,r,i,s,o){var u,f,l,c,h,p,d=e.exifTagTypes[i];if(!d)return console.log("Invalid Exif data: Invalid tag type."),void 0;if(u=d.size*s,f=u>4?n+t.getUint32(r+8,o):r+8,f+u>t.byteLength)return console.log("Invalid Exif data: Invalid data offset."),void 0;if(1===s)return d.getValue(t,f,o);for(l=[],c=0;s>c;c+=1)l[c]=d.getValue(t,f+c*d.size,o);if(d.ascii){for(h="",c=0;c<l.length&&(p=l[c],"\0"!==p);c+=1)h+=p;return h}return l},e.parseExifTag=function(t,n,r,i,s){var o=t.getUint16(r,i);s.exif[o]=e.getExifValue(t,n,r,t.getUint16(r+2,i),t.getUint32(r+4,i),i)},e.parseExifTags=function(e,t,n,r,i){var s,o,u;if(n+6>e.byteLength)return console.log("Invalid Exif data: Invalid directory offset."),void 0;if(s=e.getUint16(n,r),o=n+2+12*s,o+4>e.byteLength)return console.log("Invalid Exif data: Invalid directory size."),void 0;for(u=0;s>u;u+=1)this.parseExifTag(e,t,n+2+12*u,r,i);return e.getUint32(o,r)},e.parseExifData=function(t,n,r,i,s){if(!s.disableExif){var o,u,f,l=n+10;if(1165519206===t.getUint32(n+4)){if(l+8>t.byteLength)return console.log("Invalid Exif data: Invalid segment size."),void 0;if(0!==t.getUint16(n+8))return console.log("Invalid Exif data: Missing byte alignment offset."),void 0;switch(t.getUint16(l)){case 18761:o=!0;break;case 19789:o=!1;break;default:return console.log("Invalid Exif data: Invalid byte alignment marker."),void 0}if(42!==t.getUint16(l+2,o))return console.log("Invalid Exif data: Missing TIFF marker."),void 0;u=t.getUint32(l+4,o),i.exif=new e.ExifMap,u=e.parseExifTags(t,l,l+u,o,i),u&&!s.disableExifThumbnail&&(f={exif:{}},u=e.parseExifTags(t,l,l+u,o,f),f.exif[513]&&(i.exif.Thumbnail=e.getExifThumbnail(t,l+f.exif[513],f.exif[514]))),i.exif[34665]&&!s.disableExifSub&&e.parseExifTags(t,l,l+i.exif[34665],o,i),i.exif[34853]&&!s.disableExifGps&&e.parseExifTags(t,l,l+i.exif[34853],o,i)}}},e.metaDataParsers.jpeg[65505].push(e.parseExifData)}),function(e){"use strict";"function"==typeof define&&define.amd?define(["load-image","load-image-exif"],e):e(window.loadImage)}(function(e){"use strict";e.ExifMap.prototype.tags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright",36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",42240:"Gamma",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"PhotographicSensitivity",34856:"OECF",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:"LensSpecification",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"},e.ExifMap.prototype.stringValues={ExposureProgram:{0:"Undefined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Undefined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},ComponentsConfiguration:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},Orientation:{1:"top-left",2:"top-right",3:"bottom-right",4:"bottom-left",5:"left-top",6:"right-top",7:"right-bottom",8:"left-bottom"}},e.ExifMap.prototype.getText=function(e){var t=this.get(e);switch(e){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"Orientation":return this.stringValues[e][t];case"ExifVersion":case"FlashpixVersion":return String.fromCharCode(t[0],t[1],t[2],t[3]);case"ComponentsConfiguration":return this.stringValues[e][t[0]]+this.stringValues[e][t[1]]+this.stringValues[e][t[2]]+this.stringValues[e][t[3]];case"GPSVersionID":return t[0]+"."+t[1]+"."+t[2]+"."+t[3]}return String(t)},function(e){var t,n=e.tags,r=e.map;for(t in n)n.hasOwnProperty(t)&&(r[n[t]]=t)}(e.ExifMap.prototype),e.ExifMap.prototype.getAll=function(){var e,t,n={};for(e in this)this.hasOwnProperty(e)&&(t=this.tags[e],t&&(n[t]=this.getText(t)));return n}});