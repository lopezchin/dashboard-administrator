!function(e,t){"use strict";var n={"font-styles":function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li class='dropdown'><a class='btn dropdown-toggle btn-"+n+" btn-default' data-toggle='dropdown' href='#'>"+"<i class='glyphicon glyphicon-font'></i>&nbsp;<span class='current-font'>"+e.font_styles.normal+"</span>&nbsp;<b class='caret'></b>"+"</a>"+"<ul class='dropdown-menu'>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='div' tabindex='-1'>"+e.font_styles.normal+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h1' tabindex='-1'>"+e.font_styles.h1+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h2' tabindex='-1'>"+e.font_styles.h2+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h3' tabindex='-1'>"+e.font_styles.h3+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h4'>"+e.font_styles.h4+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h5'>"+e.font_styles.h5+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h6'>"+e.font_styles.h6+"</a></li>"+"</ul>"+"</li>"},emphasis:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li><div class='btn-group'><a class='btn btn-"+n+" btn-default' data-wysihtml5-command='bold' title='CTRL+B' tabindex='-1'>"+e.emphasis.bold+"</a>"+"<a class='btn btn-"+n+" btn-default' data-wysihtml5-command='italic' title='CTRL+I' tabindex='-1'>"+e.emphasis.italic+"</a>"+"<a class='btn btn-"+n+" btn-default' data-wysihtml5-command='underline' title='CTRL+U' tabindex='-1'>"+e.emphasis.underline+"</a>"+"</div>"+"</li>"},lists:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li><div class='btn-group'><a class='btn btn-"+n+" btn-default' data-wysihtml5-command='insertUnorderedList' title='"+e.lists.unordered+"' tabindex='-1'><i class='glyphicon glyphicon-list'></i></a>"+"<a class='btn btn-"+n+" btn-default' data-wysihtml5-command='insertOrderedList' title='"+e.lists.ordered+"' tabindex='-1'><i class='glyphicon glyphicon-th-list'></i></a>"+"<a class='btn btn-"+n+" btn-default' data-wysihtml5-command='Outdent' title='"+e.lists.outdent+"' tabindex='-1'><i class='glyphicon glyphicon-indent-right'></i></a>"+"<a class='btn btn-"+n+" btn-default' data-wysihtml5-command='Indent' title='"+e.lists.indent+"' tabindex='-1'><i class='glyphicon glyphicon-indent-left'></i></a>"+"</div>"+"</li>"},link:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li><div class='bootstrap-wysihtml5-insert-link-modal modal fade'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><a class='close' data-dismiss='modal'>&times;</a><h4>"+e.link.insert+"</h4>"+"</div>"+"<div class='modal-body'>"+"<input value='http://' class='bootstrap-wysihtml5-insert-link-url form-control'>"+"<label class='checkbox'> <input type='checkbox' class='bootstrap-wysihtml5-insert-link-target' checked>"+e.link.target+"</label>"+"</div>"+"<div class='modal-footer'>"+"<button class='btn btn-default' data-dismiss='modal'>"+e.link.cancel+"</button>"+"<button href='#' class='btn btn-primary' data-dismiss='modal'>"+e.link.insert+"</button>"+"</div>"+"</div>"+"</div>"+"</div>"+"<a class='btn btn-"+n+" btn-default' data-wysihtml5-command='createLink' title='"+e.link.insert+"' tabindex='-1'><i class='glyphicon glyphicon-share'></i></a>"+"</li>"},image:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li><div class='bootstrap-wysihtml5-insert-image-modal modal fade'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><a class='close' data-dismiss='modal'>&times;</a><h4>"+e.image.insert+"</h4>"+"</div>"+"<div class='modal-body'>"+"<input value='http://' class='bootstrap-wysihtml5-insert-image-url form-control'>"+"</div>"+"<div class='modal-footer'>"+"<button class='btn btn-default' data-dismiss='modal'>"+e.image.cancel+"</button>"+"<button class='btn btn-primary' data-dismiss='modal'>"+e.image.insert+"</button>"+"</div>"+"</div>"+"</div>"+"</div>"+"<a class='btn btn-"+n+" btn-default' data-wysihtml5-command='insertImage' title='"+e.image.insert+"' tabindex='-1'><i class='glyphicon glyphicon-picture'></i></a>"+"</li>"},html:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li><div class='btn-group'><a class='btn btn-"+n+" btn-default' data-wysihtml5-action='change_view' title='"+e.html.edit+"' tabindex='-1'><i class='glyphicon glyphicon-pencil'></i></a>"+"</div>"+"</li>"},color:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li class='dropdown'><a class='btn dropdown-toggle btn-"+n+" btn-default' data-toggle='dropdown' href='#' tabindex='-1'>"+"<span class='current-color'>"+e.colours.black+"</span>&nbsp;<b class='caret'></b>"+"</a>"+"<ul class='dropdown-menu'>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='black'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='black'>"+e.colours.black+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='silver'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='silver'>"+e.colours.silver+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='gray'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='gray'>"+e.colours.gray+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='maroon'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='maroon'>"+e.colours.maroon+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='red'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='red'>"+e.colours.red+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='purple'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='purple'>"+e.colours.purple+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='green'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='green'>"+e.colours.green+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='olive'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='olive'>"+e.colours.olive+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='navy'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='navy'>"+e.colours.navy+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='blue'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='blue'>"+e.colours.blue+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='orange'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='orange'>"+e.colours.orange+"</a></li>"+"</ul>"+"</li>"}},r=function(e,t,r){return n[e](t,r)},i=function(t,r){this.el=t;var i=r||o;for(var s in i.customTemplates)n[s]=i.customTemplates[s];this.toolbar=this.createToolbar(t,i),this.editor=this.createEditor(r),window.editor=this.editor,e("iframe.wysihtml5-sandbox").each(function(t,n){e(n.contentWindow).off("focus.wysihtml5").on({"focus.wysihtml5":function(){e("li.dropdown").removeClass("open")}})})};i.prototype={constructor:i,createEditor:function(n){n=n||{},n=e.extend(!0,{},n),n.toolbar=this.toolbar[0];var r=new t.Editor(this.el[0],n);if(n&&n.events)for(var i in n.events)r.on(i,n.events[i]);return r},createToolbar:function(t,n){var i=this,s=e("<ul/>",{"class":"wysihtml5-toolbar",style:"display:none"}),a=n.locale||o.locale||"en";for(var f in o){var l=!1;void 0!==n[f]?n[f]===!0&&(l=!0):l=o[f],l===!0&&(s.append(r(f,u[a],n)),"html"===f&&this.initHtml(s),"link"===f&&this.initInsertLink(s),"image"===f&&this.initInsertImage(s))}if(n.toolbar)for(f in n.toolbar)s.append(n.toolbar[f]);return s.find("a[data-wysihtml5-command='formatBlock']").click(function(t){var n=t.target||t.srcElement,r=e(n);i.toolbar.find(".current-font").text(r.html())}),s.find("a[data-wysihtml5-command='foreColor']").click(function(t){var n=t.target||t.srcElement,r=e(n);i.toolbar.find(".current-color").text(r.html())}),this.el.before(s),s},initHtml:function(e){var t="a[data-wysihtml5-action='change_view']";e.find(t).click(function(){e.find("a.btn").not(t).toggleClass("disabled")})},initInsertImage:function(t){var n,r=this,i=t.find(".bootstrap-wysihtml5-insert-image-modal"),s=i.find(".bootstrap-wysihtml5-insert-image-url"),o=i.find(".btn-primary"),u=s.val(),a=function(){var e=s.val();s.val(u),r.editor.currentView.element.focus(),n&&(r.editor.composer.selection.setBookmark(n),n=null),r.editor.composer.commands.exec("insertImage",e)};s.keypress(function(e){13==e.which&&(a(),i.modal("hide"))}),o.click(a),i.on("shown",function(){s.focus()}),i.on("hide",function(){r.editor.currentView.element.focus()}),t.find("a[data-wysihtml5-command=insertImage]").click(function(){var t=e(this).hasClass("wysihtml5-command-active");return t?!0:(r.editor.currentView.element.focus(!1),n=r.editor.composer.selection.getBookmark(),i.appendTo("body").modal("show"),i.on("click.dismiss.modal",'[data-dismiss="modal"]',function(e){e.stopPropagation()}),!1)})},initInsertLink:function(t){var n,r=this,i=t.find(".bootstrap-wysihtml5-insert-link-modal"),s=i.find(".bootstrap-wysihtml5-insert-link-url"),o=i.find(".bootstrap-wysihtml5-insert-link-target"),u=i.find(".btn-primary"),a=s.val(),f=function(){var e=s.val();s.val(a),r.editor.currentView.element.focus(),n&&(r.editor.composer.selection.setBookmark(n),n=null);var t=o.prop("checked");r.editor.composer.commands.exec("createLink",{href:e,target:t?"_blank":"_self",rel:t?"nofollow":""})};s.keypress(function(e){13==e.which&&(f(),i.modal("hide"))}),u.click(f),i.on("shown",function(){s.focus()}),i.on("hide",function(){r.editor.currentView.element.focus()}),t.find("a[data-wysihtml5-command=createLink]").click(function(){var t=e(this).hasClass("wysihtml5-command-active");return t?!0:(r.editor.currentView.element.focus(!1),n=r.editor.composer.selection.getBookmark(),i.appendTo("body").modal("show"),i.on("click.dismiss.modal",'[data-dismiss="modal"]',function(e){e.stopPropagation()}),!1)})}};var s={resetDefaults:function(){e.fn.wysihtml5.defaultOptions=e.extend(!0,{},e.fn.wysihtml5.defaultOptionsCache)},bypassDefaults:function(t){return this.each(function(){var n=e(this);n.data("wysihtml5",new i(n,t))})},shallowExtend:function(t){var n=e.extend({},e.fn.wysihtml5.defaultOptions,t||{},e(this).data()),r=this;return s.bypassDefaults.apply(r,[n])},deepExtend:function(t){var n=e.extend(!0,{},e.fn.wysihtml5.defaultOptions,t||{}),r=this;return s.bypassDefaults.apply(r,[n])},init:function(e){var t=this;return s.shallowExtend.apply(t,[e])}};e.fn.wysihtml5=function(t){return s[t]?s[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.wysihtml5"),void 0):s.init.apply(this,arguments)},e.fn.wysihtml5.Constructor=i;var o=e.fn.wysihtml5.defaultOptions={"font-styles":!0,color:!1,emphasis:!0,lists:!0,html:!1,link:!0,image:!0,size:"sm",events:{},parserRules:{classes:{"wysiwyg-color-silver":1,"wysiwyg-color-gray":1,"wysiwyg-color-white":1,"wysiwyg-color-maroon":1,"wysiwyg-color-red":1,"wysiwyg-color-purple":1,"wysiwyg-color-fuchsia":1,"wysiwyg-color-green":1,"wysiwyg-color-lime":1,"wysiwyg-color-olive":1,"wysiwyg-color-yellow":1,"wysiwyg-color-navy":1,"wysiwyg-color-blue":1,"wysiwyg-color-teal":1,"wysiwyg-color-aqua":1,"wysiwyg-color-orange":1},tags:{b:{},i:{},br:{},ol:{},ul:{},li:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},blockquote:{},u:1,img:{check_attributes:{width:"numbers",alt:"alt",src:"url",height:"numbers"}},a:{check_attributes:{href:"url",target:"alt",rel:"alt"}},span:1,div:1,code:1,pre:1}},stylesheets:["/assets/admin/css/bootstrap3-wysiwyg5-color.css"],locale:"en"};"undefined"==typeof e.fn.wysihtml5.defaultOptionsCache&&(e.fn.wysihtml5.defaultOptionsCache=e.extend(!0,{},e.fn.wysihtml5.defaultOptions));var u=e.fn.wysihtml5.locale={en:{font_styles:{normal:"Normal text",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"},emphasis:{bold:"Bold",italic:"Italic",underline:"Underline"},lists:{unordered:"Unordered list",ordered:"Ordered list",outdent:"Outdent",indent:"Indent"},link:{insert:"Insert link",cancel:"Cancel",target:"Open link in new window"},image:{insert:"Insert image",cancel:"Cancel"},html:{edit:"Edit HTML"},colours:{black:"Black",silver:"Silver",gray:"Grey",maroon:"Maroon",red:"Red",purple:"Purple",green:"Green",olive:"Olive",navy:"Navy",blue:"Blue",orange:"Orange"}}}}(window.jQuery,window.wysihtml5);