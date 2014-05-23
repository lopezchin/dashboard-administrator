/***
 * A jquery Validator plugin for laravel validation Script
 *
 * This plugin is intended for the development of GYTBO.COM.AU
 *
 * @author: Stephen Cantila
 * @docs: /wiki/jquery-laravel-validator
 * @fixed: button that is disabled, does not included in serialized.
 */(function(e){var t="Processing ...",n;jQuery.fn.jValidator=function(t){function f(){i.areYouSure({silent:!0})}function l(t){if(typeof t.redirect!="undefined"){i.areYouSure({silent:!0});if(t.redirect==window.location.href)return window.location.reload();if(e.jValidator.helper.strpos(t.redirect,"#")){window.location.href=t.redirect;return window.location.reload()}return window.location=t.redirect}}function c(e){return' <i class="fa fa-exclamation-triangle form-control-feedback"></i> <span class="'+r.errorClassList+'">'+e+"</span>"}function h(){g()}function p(){r.onStart(e(this));s||(s=i.find("button[type=submit],input[type=submit]").first());e.jValidator.btnProcess(s,!0);u=!1;r.messageTo.html("");y()}function d(e){r.messageTo.html(m(e,"alert alert-omega alert-small alert-danger fade in"))}function v(e){r.messageTo.html(m(e,"alert alert-omega alert-small alert-success fade in"))}function m(e,t){return'<div class="'+t+'"><button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>'+'<i class="fa fa-info-circle"></i>'+e+"</div>"}function g(){var t=0;i.find("."+r.errorClass).length>0?t=i.find("."+r.errorClass).first().offset().top:i.find(r.messageTo).length>0&&i.find(r.messageTo).html()!=""?t=i.find(r.messageTo).first().offset().top:t=i.offset().top;e("html, body").animate({scrollTop:t-e(window).height()*.36},300)}function y(){o=i.find('a[data-toggle="tab"].tab');o.find(".validator_tab_error").remove()}function b(t){if(o.length){var n=t.closest(".tab-pane");if(n.length){var r=e("a[href=#"+n.attr("id")+"]");r.length&&!r.find(".validator_tab_error").length&&e('<i class="fa fa-exclamation-triangle validator_tab_error"></i>').appendTo(r);if(!u){r.trigger("click");u=!0}}}}var n={onStart:function(){return!1},onSuccess:function(){return!1},errorClassList:"form-control-feedback-msg",errorClass:"has-error",messageContainer:".validator-message",alertClassAppendTo:".js-validator",messageTo:e("#validator_message")},r=jQuery.extend({},n,t),i=this,s,o,u=!1,a=!1;i.find("button[type=submit],input[type=submit]").click(function(){s=e(this)});i.submit(function(t){t.preventDefault();i=e(this);a&&a.abort();var n=i.attr("method"),o=i.attr("action"),u=i.serialize();a=jQuery.ajax({type:n,url:o,data:u,dataType:"json",beforeSend:function(){p()},success:function(t){i.find(".validator-message").html("");i.find("."+r.errorClass).removeClass(r.errorClass);l(t);typeof t.successMsg!="undefined"&&v(t.successMsg);typeof t.errorMsg!="undefined"&&d(t.errorMsg);if(t.status=="error"){for(var n in t.errorData){var s=i.find('.form-group [name="'+e.jValidator.laravel2Input(n)+'"] ');b(s);s.closest(r.alertClassAppendTo).addClass(r.errorClass);var o=t.errorData[n],u;o instanceof Array?u=o[0]:u=o;s.closest(r.alertClassAppendTo).find(r.messageContainer).html(c(u))}i.find("."+r.errorClass).find("input,textarea").first().focus();return}r.onSuccess(t,i);f()}}).complete(function(){a=!1;e.jValidator.btnProcess(s,!1);s=!1;h()});return!1})};e.jValidator={};e.jValidator.btnProcess=function(e,t){typeof t=="undefined"&&(t=!1);if(typeof e=="object")if(t){e.addClass("disabled");e.addClass("is-process")}else{e.removeClass("is-process");e.removeClass("disabled")}};e.jValidator.laravel2Input=function(t){if(e.jValidator.helper.strpos(t,".")){var n,r=0,i,s,o;n=t.split(".");i=n[0];for(s in n){if(r!=0){o=n[s];i+="["+o+"]"}r++}return i}return t};e.jValidator.helper={strpos:function(e,t,n){var r=(e+"").indexOf(t,n||0);return r===-1?!1:r}}})(jQuery);