/*
 * jQuery File Upload Validation Plugin 1.1.2
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *//*jslint nomen: true, unparam: true, regexp: true *//*global define, window */(function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery","./jquery.fileupload-process"],e):e(window.jQuery)})(function(e){"use strict";e.blueimp.fileupload.prototype.options.processQueue.push({action:"validate",always:!0,acceptFileTypes:"@",maxFileSize:"@",minFileSize:"@",maxNumberOfFiles:"@",disabled:"@disableValidation"});e.widget("blueimp.fileupload",e.blueimp.fileupload,{options:{getNumberOfFiles:e.noop,messages:{maxNumberOfFiles:"Maximum number of files exceeded",acceptFileTypes:"File type not allowed",maxFileSize:"File is too large",minFileSize:"File is too small"}},processActions:{validate:function(t,n){if(n.disabled)return t;var r=e.Deferred(),i=this.options,s=t.files[t.index],o;if(n.minFileSize||n.maxFileSize)o=s.size;e.type(n.maxNumberOfFiles)==="number"&&(i.getNumberOfFiles()||0)+t.files.length>n.maxNumberOfFiles?s.error=i.i18n("maxNumberOfFiles"):n.acceptFileTypes&&!n.acceptFileTypes.test(s.type)&&!n.acceptFileTypes.test(s.name)?s.error=i.i18n("acceptFileTypes"):o>n.maxFileSize?s.error=i.i18n("maxFileSize"):e.type(o)==="number"&&o<n.minFileSize?s.error=i.i18n("minFileSize"):delete s.error;if(s.error||t.files.error){t.files.error=!0;r.rejectWith(this,[t])}else r.resolveWith(this,[t]);return r.promise()}}})});