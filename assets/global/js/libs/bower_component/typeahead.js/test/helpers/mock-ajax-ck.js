/*
 Jasmine-Ajax : a set of helpers for testing AJAX requests under the Jasmine
 BDD framework for JavaScript.

 Supports both Prototype.js and jQuery.

 http://github.com/pivotal/jasmine-ajax

 Jasmine Home page: http://pivotal.github.com/jasmine

 Copyright (c) 2008-2010 Pivotal Labs

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */// Jasmine-Ajax interface
function mostRecentAjaxRequest(){return ajaxRequests.length>0?ajaxRequests[ajaxRequests.length-1]:null}function clearAjaxRequests(){ajaxRequests=[]}function FakeXMLHttpRequest(){var e=Object.extend||$.extend;e(this,{requestHeaders:{},open:function(){this.method=arguments[0];this.url=arguments[1];this.readyState=1},setRequestHeader:function(e,t){this.requestHeaders[e]=t},abort:function(){this.readyState=0},readyState:0,onreadystatechange:function(e){},status:null,send:function(e){this.params=e;this.readyState=2},getResponseHeader:function(e){return this.responseHeaders[e]},getAllResponseHeaders:function(){var e=[];for(var t in this.responseHeaders)this.responseHeaders.hasOwnProperty(t)&&e.push(t+": "+this.responseHeaders[t]);return e.join("\r\n")},responseText:null,response:function(e){this.status=e.status;this.responseText=e.responseText||"";this.readyState=4;this.responseHeaders=e.responseHeaders||{"Content-type":e.contentType||"application/json"};this.onreadystatechange()},responseTimeout:function(){this.readyState=4;jasmine.Clock.tick(jQuery.ajaxSettings.timeout||3e4);this.onreadystatechange("timeout")}});return this}var ajaxRequests=[];jasmine.Ajax={isInstalled:function(){return jasmine.Ajax.installed==1},assertInstalled:function(){if(!jasmine.Ajax.isInstalled())throw new Error("Mock ajax is not installed, use jasmine.Ajax.useMock()")},useMock:function(){if(!jasmine.Ajax.isInstalled()){var e=jasmine.getEnv().currentSpec;e.after(jasmine.Ajax.uninstallMock);jasmine.Ajax.installMock()}},installMock:function(){if(typeof jQuery!="undefined")jasmine.Ajax.installJquery();else{if(typeof Prototype=="undefined")throw new Error("jasmine.Ajax currently only supports jQuery and Prototype");jasmine.Ajax.installPrototype()}jasmine.Ajax.installed=!0},installJquery:function(){jasmine.Ajax.mode="jQuery";jasmine.Ajax.real=jQuery.ajaxSettings._quick_validate_xhr;jQuery.ajaxSettings._quick_validate_xhr=jasmine.Ajax.jQueryMock},installPrototype:function(){jasmine.Ajax.mode="Prototype";jasmine.Ajax.real=Ajax.getTransport;Ajax.getTransport=jasmine.Ajax.prototypeMock},uninstallMock:function(){jasmine.Ajax.assertInstalled();jasmine.Ajax.mode=="jQuery"?jQuery.ajaxSettings._quick_validate_xhr=jasmine.Ajax.real:jasmine.Ajax.mode=="Prototype"&&(Ajax.getTransport=jasmine.Ajax.real);jasmine.Ajax.reset()},reset:function(){jasmine.Ajax.installed=!1;jasmine.Ajax.mode=null;jasmine.Ajax.real=null},jQueryMock:function(){var e=new FakeXMLHttpRequest;ajaxRequests.push(e);return e},prototypeMock:function(){return new FakeXMLHttpRequest},installed:!1,mode:null};if(typeof Prototype!="undefined"&&Ajax&&Ajax.Request){Ajax.Request.prototype.originalRequest=Ajax.Request.prototype.request;Ajax.Request.prototype.request=function(e){this.originalRequest(e);ajaxRequests.push(this)};Ajax.Request.prototype.response=function(e){return this.transport.response(e)}};