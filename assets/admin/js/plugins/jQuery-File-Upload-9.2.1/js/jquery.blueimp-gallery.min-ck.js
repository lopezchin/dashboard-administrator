!function(e){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper"],e):(window.blueimp=window.blueimp||{},window.blueimp.Gallery=e(window.blueimp.helper||window.jQuery))}(function(e){"use strict";function t(e,n){return e&&e.length&&void 0!==document.body.style.maxHeight?this&&this.options===t.prototype.options?(this.list=e,this.num=e.length,this.initOptions(n),this.initialize(),void 0):new t(e,n):!1}return e.extend(t.prototype,{options:{container:"#blueimp-gallery",slidesContainer:"div",titleElement:"h3",displayClass:"blueimp-gallery-display",controlsClass:"blueimp-gallery-controls",singleClass:"blueimp-gallery-single",leftEdgeClass:"blueimp-gallery-left",rightEdgeClass:"blueimp-gallery-right",playingClass:"blueimp-gallery-playing",slideClass:"slide",slideLoadingClass:"slide-loading",slideErrorClass:"slide-error",slideContentClass:"slide-content",toggleClass:"toggle",prevClass:"prev",nextClass:"next",closeClass:"close",playPauseClass:"play-pause",typeProperty:"type",titleProperty:"title",urlProperty:"href",displayTransition:!0,clearSlides:!0,stretchImages:!1,toggleControlsOnReturn:!0,toggleSlideshowOnSpace:!0,enableKeyboardNavigation:!0,closeOnEscape:!0,closeOnSlideClick:!0,closeOnSwipeUpOrDown:!0,emulateTouchEvents:!0,hidePageScrollbars:!0,disableScroll:!0,carousel:!1,continuous:!0,unloadElements:!0,startSlideshow:!1,slideshowInterval:5e3,index:0,preloadRange:2,transitionSpeed:400,slideshowTransitionSpeed:void 0,event:void 0,onopen:void 0,onopened:void 0,onslide:void 0,onslideend:void 0,onslidecomplete:void 0,onclose:void 0,onclosed:void 0},carouselOptions:{hidePageScrollbars:!1,toggleControlsOnReturn:!1,toggleSlideshowOnSpace:!1,enableKeyboardNavigation:!1,closeOnEscape:!1,closeOnSlideClick:!1,closeOnSwipeUpOrDown:!1,disableScroll:!1,startSlideshow:!0},support:function(t){var n={touch:void 0!==window.ontouchstart||window.DocumentTouch&&document instanceof DocumentTouch},r={webkitTransition:{end:"webkitTransitionEnd",prefix:"-webkit-"},MozTransition:{end:"transitionend",prefix:"-moz-"},OTransition:{end:"otransitionend",prefix:"-o-"},transition:{end:"transitionend",prefix:""}},i=function(){var e,r,i=n.transition;document.body.appendChild(t),i&&(e=i.name.slice(0,-9)+"ransform",void 0!==t.style[e]&&(t.style[e]="translateZ(0)",r=window.getComputedStyle(t).getPropertyValue(i.prefix+"transform"),n.transform={prefix:i.prefix,name:e,translate:!0,translateZ:!!r&&"none"!==r})),void 0!==t.style.backgroundSize&&(n.backgroundSize={},t.style.backgroundSize="contain",n.backgroundSize.contain="contain"===window.getComputedStyle(t).getPropertyValue("background-size"),t.style.backgroundSize="cover",n.backgroundSize.cover="cover"===window.getComputedStyle(t).getPropertyValue("background-size")),document.body.removeChild(t)};return function(e,n){var r;for(r in n)if(n.hasOwnProperty(r)&&void 0!==t.style[r]){e.transition=n[r],e.transition.name=r;break}}(n,r),document.body?i():e(document).on("DOMContentLoaded",i),n}(document.createElement("div")),requestAnimationFrame:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,initialize:function(){return this.initStartIndex(),this.initWidget()===!1?!1:(this.initEventListeners(),this.onslide(this.index),this.ontransitionend(),this.options.startSlideshow&&this.play(),void 0)},slide:function(e,t){window.clearTimeout(this.timeout);var n,r,i,s=this.index;if(s!==e&&1!==this.num){if(t||(t=this.options.transitionSpeed),this.support.transition){for(this.options.continuous||(e=this.circle(e)),n=Math.abs(s-e)/(s-e),this.options.continuous&&(r=n,n=-this.positions[this.circle(e)]/this.slideWidth,n!==r&&(e=-n*this.num+e)),i=Math.abs(s-e)-1;i;)i-=1,this.move(this.circle((e>s?e:s)-i-1),this.slideWidth*n,0);e=this.circle(e),this.move(s,this.slideWidth*n,t),this.move(e,0,t),this.options.continuous&&this.move(this.circle(e-n),-(this.slideWidth*n),0)}else e=this.circle(e),this.animate(s*-this.slideWidth,e*-this.slideWidth,t);this.onslide(e)}},getIndex:function(){return this.index},getNumber:function(){return this.num},prev:function(){(this.options.continuous||this.index)&&this.slide(this.index-1)},next:function(){(this.options.continuous||this.index<this.num-1)&&this.slide(this.index+1)},play:function(e){var t=this;window.clearTimeout(this.timeout),this.interval=e||this.options.slideshowInterval,this.elements[this.index]>1&&(this.timeout=this.setTimeout(!this.requestAnimationFrame&&this.slide||function(e,n){t.animationFrameId=t.requestAnimationFrame.call(window,function(){t.slide(e,n)})},[this.index+1,this.options.slideshowTransitionSpeed],this.interval)),this.container.addClass(this.options.playingClass)},pause:function(){window.clearTimeout(this.timeout),this.interval=null,this.container.removeClass(this.options.playingClass)},add:function(e){var t;for(e.concat||(e=Array.prototype.slice.call(e)),this.list.concat||(this.list=Array.prototype.slice.call(this.list)),this.list=this.list.concat(e),this.num=this.list.length,this.num>2&&null===this.options.continuous&&(this.options.continuous=!0,this.container.removeClass(this.options.leftEdgeClass)),this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass),t=this.num-e.length;t<this.num;t+=1)this.addSlide(t),this.positionSlide(t);this.positions.length=this.num,this.initSlides(!0)},resetSlides:function(){this.slidesContainer.empty(),this.slides=[]},handleClose:function(){var e=this.options;this.destroyEventListeners(),this.pause(),this.container[0].style.display="none",this.container.removeClass(e.displayClass).removeClass(e.singleClass).removeClass(e.leftEdgeClass).removeClass(e.rightEdgeClass),e.hidePageScrollbars&&(document.body.style.overflow=this.bodyOverflowStyle),this.options.clearSlides&&this.resetSlides(),this.options.onclosed&&this.options.onclosed.call(this)},close:function(){var e=this,t=function(n){n.target===e.container[0]&&(e.container.off(e.support.transition.end,t),e.handleClose())};this.options.onclose&&this.options.onclose.call(this),this.support.transition&&this.options.displayTransition?(this.container.on(this.support.transition.end,t),this.container.removeClass(this.options.displayClass)):this.handleClose()},circle:function(e){return(this.num+e%this.num)%this.num},move:function(e,t,n){this.translateX(e,t,n),this.positions[e]=t},translate:function(e,t,n,r){var i=this.slides[e].style,s=this.support.transition,o=this.support.transform;i[s.name+"Duration"]=r+"ms",i[o.name]="translate("+t+"px, "+n+"px)"+(o.translateZ?" translateZ(0)":"")},translateX:function(e,t,n){this.translate(e,t,0,n)},translateY:function(e,t,n){this.translate(e,0,t,n)},animate:function(e,t,n){if(!n)return this.slidesContainer[0].style.left=t+"px",void 0;var r=this,i=(new Date).getTime(),s=window.setInterval(function(){var o=(new Date).getTime()-i;return o>n?(r.slidesContainer[0].style.left=t+"px",r.ontransitionend(),window.clearInterval(s),void 0):(r.slidesContainer[0].style.left=(t-e)*(Math.floor(100*(o/n))/100)+e+"px",void 0)},4)},preventDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},onresize:function(){this.initSlides(!0)},onmousedown:function(e){e.which&&1===e.which&&"VIDEO"!==e.target.nodeName&&((e.originalEvent||e).touches=[{pageX:e.pageX,pageY:e.pageY}],this.ontouchstart(e))},onmousemove:function(e){this.touchStart&&((e.originalEvent||e).touches=[{pageX:e.pageX,pageY:e.pageY}],this.ontouchmove(e))},onmouseup:function(e){this.touchStart&&(this.ontouchend(e),delete this.touchStart)},onmouseout:function(t){if(this.touchStart){var n=t.target,r=t.relatedTarget;(!r||r!==n&&!e.contains(n,r))&&this.onmouseup(t)}},ontouchstart:function(e){var t=(e.originalEvent||e).touches[0];this.touchStart={x:t.pageX,y:t.pageY,time:Date.now()},this.isScrolling=void 0,this.touchDelta={}},ontouchmove:function(e){var t,n,r=(e.originalEvent||e).touches[0],i=(e.originalEvent||e).scale,s=this.index;if(!(r.length>1||i&&1!==i))if(this.options.disableScroll&&e.preventDefault(),this.touchDelta={x:r.pageX-this.touchStart.x,y:r.pageY-this.touchStart.y},t=this.touchDelta.x,void 0===this.isScrolling&&(this.isScrolling=this.isScrolling||Math.abs(t)<Math.abs(this.touchDelta.y)),this.isScrolling)this.options.closeOnSwipeUpOrDown&&this.translateY(s,this.touchDelta.y+this.positions[s],0);else for(e.preventDefault(),window.clearTimeout(this.timeout),this.options.continuous?n=[this.circle(s+1),s,this.circle(s-1)]:(this.touchDelta.x=t/=!s&&t>0||s===this.num-1&&0>t?Math.abs(t)/this.slideWidth+1:1,n=[s],s&&n.push(s-1),s<this.num-1&&n.unshift(s+1));n.length;)s=n.pop(),this.translateX(s,t+this.positions[s],0)},ontouchend:function(){var e,t,n,r,i,s=this.index,o=this.options.transitionSpeed,u=this.slideWidth,a=Number(Date.now()-this.touchStart.time)<250,f=a&&Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.x)>u/2,l=!s&&this.touchDelta.x>0||s===this.num-1&&this.touchDelta.x<0,c=!f&&this.options.closeOnSwipeUpOrDown&&(a&&Math.abs(this.touchDelta.y)>20||Math.abs(this.touchDelta.y)>this.slideHeight/2);this.options.continuous&&(l=!1),e=this.touchDelta.x<0?-1:1,this.isScrolling?c?this.close():this.translateY(s,0,o):f&&!l?(t=s+e,n=s-e,r=u*e,i=-u*e,this.options.continuous?(this.move(this.circle(t),r,0),this.move(this.circle(s-2*e),i,0)):t>=0&&t<this.num&&this.move(t,r,0),this.move(s,this.positions[s]+r,o),this.move(this.circle(n),this.positions[this.circle(n)]+r,o),s=this.circle(n),this.onslide(s)):this.options.continuous?(this.move(this.circle(s-1),-u,o),this.move(s,0,o),this.move(this.circle(s+1),u,o)):(s&&this.move(s-1,-u,o),this.move(s,0,o),s<this.num-1&&this.move(s+1,u,o))},ontransitionend:function(e){var t=this.slides[this.index];e&&t!==e.target||(this.interval&&this.play(),this.setTimeout(this.options.onslideend,[this.index,t]))},oncomplete:function(t){var n,r=t.target||t.srcElement,i=r&&r.parentNode;r&&i&&(n=this.getNodeIndex(i),e(i).removeClass(this.options.slideLoadingClass),"error"===t.type?(e(i).addClass(this.options.slideErrorClass),this.elements[n]=3):this.elements[n]=2,r.clientHeight>this.container[0].clientHeight&&(r.style.maxHeight=this.container[0].clientHeight),this.interval&&this.slides[this.index]===i&&this.play(),this.setTimeout(this.options.onslidecomplete,[n,i]))},onload:function(e){this.oncomplete(e)},onerror:function(e){this.oncomplete(e)},onkeydown:function(e){switch(e.which||e.keyCode){case 13:this.options.toggleControlsOnReturn&&(this.preventDefault(e),this.toggleControls());break;case 27:this.options.closeOnEscape&&this.close();break;case 32:this.options.toggleSlideshowOnSpace&&(this.preventDefault(e),this.toggleSlideshow());break;case 37:this.options.enableKeyboardNavigation&&(this.preventDefault(e),this.prev());break;case 39:this.options.enableKeyboardNavigation&&(this.preventDefault(e),this.next())}},handleClick:function(t){var n=this.options,r=t.target||t.srcElement,i=r.parentNode,s=function(t){return e(r).hasClass(t)||e(i).hasClass(t)};i===this.slidesContainer[0]?(this.preventDefault(t),n.closeOnSlideClick?this.close():this.toggleControls()):i.parentNode&&i.parentNode===this.slidesContainer[0]?(this.preventDefault(t),this.toggleControls()):s(n.toggleClass)?(this.preventDefault(t),this.toggleControls()):s(n.prevClass)?(this.preventDefault(t),this.prev()):s(n.nextClass)?(this.preventDefault(t),this.next()):s(n.closeClass)?(this.preventDefault(t),this.close()):s(n.playPauseClass)&&(this.preventDefault(t),this.toggleSlideshow())},onclick:function(e){return this.options.emulateTouchEvents&&this.touchDelta&&(Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.y)>20)?(delete this.touchDelta,void 0):this.handleClick(e)},updateEdgeClasses:function(e){e?this.container.removeClass(this.options.leftEdgeClass):this.container.addClass(this.options.leftEdgeClass),e===this.num-1?this.container.addClass(this.options.rightEdgeClass):this.container.removeClass(this.options.rightEdgeClass)},handleSlide:function(e){this.options.continuous||this.updateEdgeClasses(e),this.loadElements(e),this.options.unloadElements&&this.unloadElements(e),this.setTitle(e)},onslide:function(e){this.index=e,this.handleSlide(e),this.setTimeout(this.options.onslide,[e,this.slides[e]])},setTitle:function(e){var t=this.slides[e].firstChild.title,n=this.titleElement;n.length&&(this.titleElement.empty(),t&&n[0].appendChild(document.createTextNode(t)))},setTimeout:function(e,t,n){var r=this;return e&&window.setTimeout(function(){e.apply(r,t||[])},n||0)},imageFactory:function(t,n){var r,i,s,o=this,u=this.imagePrototype.cloneNode(!1),f=t,l=this.options.stretchImages,c=function(t){if(!r){if(t={type:t.type,target:i},!i.parentNode)return o.setTimeout(c,[t]);r=!0,e(u).off("load error",c),l&&"load"===t.type&&(i.style.background='url("'+f+'") center no-repeat',i.style.backgroundSize=l),n(t)}};return"string"!=typeof f&&(f=this.getItemProperty(t,this.options.urlProperty),s=this.getItemProperty(t,this.options.titleProperty)),l===!0&&(l="contain"),l=this.support.backgroundSize&&this.support.backgroundSize[l]&&l,l?i=this.elementPrototype.cloneNode(!1):(i=u,u.draggable=!1),s&&(i.title=s),e(u).on("load error",c),u.src=f,i},createElement:function(t,n){var r=t&&this.getItemProperty(t,this.options.typeProperty),i=r&&this[r.split("/")[0]+"Factory"]||this.imageFactory,s=t&&i.call(this,t,n);return s||(s=this.elementPrototype.cloneNode(!1),this.setTimeout(n,[{type:"error",target:s}])),e(s).addClass(this.options.slideContentClass),s},loadElement:function(t){this.elements[t]||(this.slides[t].firstChild?this.elements[t]=e(this.slides[t]).hasClass(this.options.slideErrorClass)?3:2:(this.elements[t]=1,e(this.slides[t]).addClass(this.options.slideLoadingClass),this.slides[t].appendChild(this.createElement(this.list[t],this.proxyListener))))},loadElements:function(e){var t,n=Math.min(this.num,2*this.options.preloadRange+1),r=e;for(t=0;n>t;t+=1)r+=t*(0===t%2?-1:1),r=this.circle(r),this.loadElement(r)},unloadElements:function(e){var t,n,r;for(t in this.elements)this.elements.hasOwnProperty(t)&&(r=Math.abs(e-t),r>this.options.preloadRange&&r+this.options.preloadRange<this.num&&(n=this.slides[t],n.removeChild(n.firstChild),delete this.elements[t]))},addSlide:function(e){var t=this.slidePrototype.cloneNode(!1);t.setAttribute("data-index",e),this.slidesContainer[0].appendChild(t),this.slides.push(t)},positionSlide:function(e){var t=this.slides[e];t.style.width=this.slideWidth+"px",this.support.transition&&(t.style.left=e*-this.slideWidth+"px",this.move(e,this.index>e?-this.slideWidth:this.index<e?this.slideWidth:0,0))},initSlides:function(t){var n,r;for(t||(this.positions=[],this.positions.length=this.num,this.elements={},this.imagePrototype=document.createElement("img"),this.elementPrototype=document.createElement("div"),this.slidePrototype=document.createElement("div"),e(this.slidePrototype).addClass(this.options.slideClass),this.slides=this.slidesContainer[0].children,n=this.options.clearSlides||this.slides.length!==this.num),this.slideWidth=this.container[0].offsetWidth,this.slideHeight=this.container[0].offsetHeight,this.slidesContainer[0].style.width=this.num*this.slideWidth+"px",n&&this.resetSlides(),r=0;r<this.num;r+=1)n&&this.addSlide(r),this.positionSlide(r);this.options.continuous&&this.support.transition&&(this.move(this.circle(this.index-1),-this.slideWidth,0),this.move(this.circle(this.index+1),this.slideWidth,0)),this.support.transition||(this.slidesContainer[0].style.left=this.index*-this.slideWidth+"px")},toggleControls:function(){var e=this.options.controlsClass;this.container.hasClass(e)?this.container.removeClass(e):this.container.addClass(e)},toggleSlideshow:function(){this.interval?this.pause():this.play()},getNodeIndex:function(e){return parseInt(e.getAttribute("data-index"),10)},getNestedProperty:function(e,t){return t.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,function(t,n,r,i,s){var o=s||n||r||i&&parseInt(i,10);t&&e&&(e=e[o])}),e},getDataProperty:function(t,n){if(t.getAttribute){var r=t.getAttribute("data-"+n.replace(/([A-Z])/g,"-$1").toLowerCase());if("string"==typeof r){if(/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(r))try{return e.parseJSON(r)}catch(i){}return r}}},getItemProperty:function(e,t){var n=e[t];return void 0===n&&(n=this.getDataProperty(e,t),void 0===n&&(n=this.getNestedProperty(e,t))),n},initStartIndex:function(){var e,t=this.options.index,n=this.options.urlProperty;if(t&&"number"!=typeof t)for(e=0;e<this.num;e+=1)if(this.list[e]===t||this.getItemProperty(this.list[e],n)===this.getItemProperty(t,n)){t=e;break}this.index=this.circle(parseInt(t,10)||0)},initEventListeners:function(){var t=this,n=this.slidesContainer,r=function(e){var n=t.support.transition&&t.support.transition.end===e.type?"transitionend":e.type;t["on"+n](e)};e(window).on("resize",r),e(document.body).on("keydown",r),this.container.on("click",r),this.support.touch?n.on("touchstart touchmove touchend",r):this.options.emulateTouchEvents&&this.support.transition&&n.on("mousedown mousemove mouseup mouseout",r),this.support.transition&&n.on(this.support.transition.end,r),this.proxyListener=r},destroyEventListeners:function(){var t=this.slidesContainer,n=this.proxyListener;e(window).off("resize",n),e(document.body).off("keydown",n),this.container.off("click",n),this.support.touch?t.off("touchstart touchmove touchend",n):this.options.emulateTouchEvents&&this.support.transition&&t.off("mousedown mousemove mouseup mouseout",n),this.support.transition&&t.off(this.support.transition.end,n)},handleOpen:function(){this.options.onopened&&this.options.onopened.call(this)},initWidget:function(){var t=this,n=function(e){e.target===t.container[0]&&(t.container.off(t.support.transition.end,n),t.handleOpen())};return this.container=e(this.options.container),this.container.length?(this.slidesContainer=this.container.find(this.options.slidesContainer).first(),this.slidesContainer.length?(this.titleElement=this.container.find(this.options.titleElement).first(),1===this.num&&this.container.addClass(this.options.singleClass),this.options.onopen&&this.options.onopen.call(this),this.support.transition&&this.options.displayTransition?this.container.on(this.support.transition.end,n):this.handleOpen(),this.options.hidePageScrollbars&&(this.bodyOverflowStyle=document.body.style.overflow,document.body.style.overflow="hidden"),this.container[0].style.display="block",this.initSlides(),this.container.addClass(this.options.displayClass),void 0):!1):!1},initOptions:function(t){this.options=e.extend({},this.options),(t&&t.carousel||this.options.carousel&&(!t||t.carousel!==!1))&&e.extend(this.options,this.carouselOptions),e.extend(this.options,t),this.num<3&&(this.options.continuous=this.options.continuous?null:!1),this.support.transition||(this.options.emulateTouchEvents=!1),this.options.event&&this.preventDefault(this.options.event)}}),t}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery"],e):e(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(e,t){"use strict";e.extend(t.prototype.options,{fullScreen:!1});var n=t.prototype.initialize,r=t.prototype.handleClose;return e.extend(t.prototype,{getFullScreenElement:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement},requestFullScreen:function(e){e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen&&e.mozRequestFullScreen()},exitFullScreen:function(){document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen&&document.mozCancelFullScreen()},initialize:function(){n.call(this),this.options.fullScreen&&!this.getFullScreenElement()&&this.requestFullScreen(this.container[0])},handleClose:function(){this.getFullScreenElement()===this.container[0]&&this.exitFullScreen(),r.call(this)}}),t}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery"],e):e(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(e,t){"use strict";e.extend(t.prototype.options,{indicatorContainer:"ol",activeIndicatorClass:"active",thumbnailProperty:"thumbnail",thumbnailIndicators:!0});var n=t.prototype.initSlides,r=t.prototype.addSlide,i=t.prototype.resetSlides,s=t.prototype.handleClick,o=t.prototype.handleSlide,u=t.prototype.handleClose;return e.extend(t.prototype,{createIndicator:function(t){var n,r,i=this.indicatorPrototype.cloneNode(!1),s=this.getItemProperty(t,this.options.titleProperty),o=this.options.thumbnailProperty;return this.options.thumbnailIndicators&&(r=t.getElementsByTagName&&e(t).find("img")[0],r?n=r.src:o&&(n=this.getItemProperty(t,o)),n&&(i.style.backgroundImage='url("'+n+'")')),s&&(i.title=s),i},addIndicator:function(e){if(this.indicatorContainer.length){var t=this.createIndicator(this.list[e]);t.setAttribute("data-index",e),this.indicatorContainer[0].appendChild(t),this.indicators.push(t)}},setActiveIndicator:function(t){this.indicators&&(this.activeIndicator&&this.activeIndicator.removeClass(this.options.activeIndicatorClass),this.activeIndicator=e(this.indicators[t]),this.activeIndicator.addClass(this.options.activeIndicatorClass))},initSlides:function(e){e||(this.indicatorContainer=this.container.find(this.options.indicatorContainer),this.indicatorContainer.length&&(this.indicatorPrototype=document.createElement("li"),this.indicators=this.indicatorContainer[0].children)),n.call(this,e)},addSlide:function(e){r.call(this,e),this.addIndicator(e)},resetSlides:function(){i.call(this),this.indicatorContainer.empty(),this.indicators=[]},handleClick:function(e){var t=e.target||e.srcElement,n=t.parentNode;if(n===this.indicatorContainer[0])this.preventDefault(e),this.slide(this.getNodeIndex(t));else{if(n.parentNode!==this.indicatorContainer[0])return s.call(this,e);this.preventDefault(e),this.slide(this.getNodeIndex(n))}},handleSlide:function(e){o.call(this,e),this.setActiveIndicator(e)},handleClose:function(){this.activeIndicator&&this.activeIndicator.removeClass(this.options.activeIndicatorClass),u.call(this)}}),t}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery"],e):e(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(e,t){"use strict";return e.extend(t.prototype.options,{videoContentClass:"video-content",videoLoadingClass:"video-loading",videoPlayingClass:"video-playing",videoPosterProperty:"poster",videoSourcesProperty:"sources"}),t.prototype.videoFactory=function(t,n,r){var i,s,o,u,f,l=this,c=this.options,h=this.elementPrototype.cloneNode(!1),p=e(h),d=[{type:"error",target:h}],v=r||document.createElement("video"),m=this.getItemProperty(t,c.urlProperty),g=this.getItemProperty(t,c.typeProperty),y=this.getItemProperty(t,c.titleProperty),b=this.getItemProperty(t,c.videoPosterProperty),w=this.getItemProperty(t,c.videoSourcesProperty);if(p.addClass(c.videoContentClass),y&&(h.title=y),v.canPlayType)if(m&&g&&v.canPlayType(g))v.src=m;else for(;w&&w.length;)if(s=w.shift(),m=this.getItemProperty(s,c.urlProperty),g=this.getItemProperty(s,c.typeProperty),m&&g&&v.canPlayType(g)){v.src=m;break}return b&&(v.poster=b,i=this.imagePrototype.cloneNode(!1),e(i).addClass(c.toggleClass),i.src=b,i.draggable=!1,h.appendChild(i)),o=document.createElement("a"),o.setAttribute("target","_blank"),r||o.setAttribute("download",y),o.href=m,v.src&&(v.controls=!0,(r||e(v)).on("error",function(){l.setTimeout(n,d)}).on("pause",function(){u=!1,p.removeClass(l.options.videoLoadingClass).removeClass(l.options.videoPlayingClass),f&&l.container.addClass(l.options.controlsClass),l.interval&&l.play()}).on("playing",function(){u=!1,p.removeClass(l.options.videoLoadingClass).addClass(l.options.videoPlayingClass),l.container.hasClass(l.options.controlsClass)?(f=!0,l.container.removeClass(l.options.controlsClass)):f=!1}).on("play",function(){window.clearTimeout(l.timeout),u=!0,p.addClass(l.options.videoLoadingClass)}),e(o).on("click",function(e){l.preventDefault(e),u?v.pause():v.play()}),h.appendChild(r&&r.element||v)),h.appendChild(o),this.setTimeout(n,[{type:"load",target:h}]),h},t}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery-video"],e):e(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(e,t){"use strict";if(!window.postMessage)return t;e.extend(t.prototype.options,{vimeoVideoIdProperty:"vimeo",vimeoPlayerUrl:"//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",vimeoPlayerIdPrefix:"vimeo-player-",vimeoClickToPlay:!0});var n=t.prototype.textFactory||t.prototype.imageFactory,r=function(e,t,n,r){this.url=e,this.videoId=t,this.playerId=n,this.clickToPlay=r,this.element=document.createElement("div"),this.listeners={}},i=0;return e.extend(r.prototype,{canPlayType:function(){return!0},on:function(e,t){return this.listeners[e]=t,this},loadAPI:function(){for(var t,n,r=this,i="//"+("https"===location.protocol?"secure-":"")+"a.vimeocdn.com/js/froogaloop2.min.js",s=document.getElementsByTagName("script"),o=s.length,u=function(){!n&&r.playOnReady&&r.play(),n=!0};o;)if(o-=1,s[o].src===i){t=s[o];break}t||(t=document.createElement("script"),t.src=i),e(t).on("load",u),s[0].parentNode.insertBefore(t,s[0]),/loaded|complete/.test(t.readyState)&&u()},onReady:function(){var e=this;this.ready=!0,this.player.addEvent("play",function(){e.hasPlayed=!0,e.onPlaying()}),this.player.addEvent("pause",function(){e.onPause()}),this.player.addEvent("finish",function(){e.onPause()}),this.playOnReady&&this.play()},onPlaying:function(){this.playStatus<2&&(this.listeners.playing(),this.playStatus=2)},onPause:function(){this.listeners.pause(),delete this.playStatus},insertIframe:function(){var e=document.createElement("iframe");e.src=this.url.replace("VIDEO_ID",this.videoId).replace("PLAYER_ID",this.playerId),e.id=this.playerId,this.element.parentNode.replaceChild(e,this.element),this.element=e},play:function(){var e=this;this.playStatus||(this.listeners.play(),this.playStatus=1),this.ready?!this.hasPlayed&&(this.clickToPlay||window.navigator&&/iP(hone|od|ad)/.test(window.navigator.platform))?this.onPlaying():this.player.api("play"):(this.playOnReady=!0,window.$f?this.player||(this.insertIframe(),this.player=$f(this.element),this.player.addEvent("ready",function(){e.onReady()})):this.loadAPI())},pause:function(){this.ready?this.player.api("pause"):this.playStatus&&(delete this.playOnReady,this.listeners.pause(),delete this.playStatus)}}),e.extend(t.prototype,{VimeoPlayer:r,textFactory:function(e,t){var s=this.getItemProperty(e,this.options.vimeoVideoIdProperty);return s?(i+=1,this.videoFactory(e,t,new r(this.options.vimeoPlayerUrl,s,this.options.vimeoPlayerIdPrefix+i,this.options.vimeoClickToPlay))):n.call(this,e,t)}}),t}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper","./blueimp-gallery-video"],e):e(window.blueimp.helper||window.jQuery,window.blueimp.Gallery)}(function(e,t){"use strict";if(!window.postMessage)return t;e.extend(t.prototype.options,{youTubeVideoIdProperty:"youtube",youTubePlayerVars:void 0,youTubeClickToPlay:!0});var n=t.prototype.textFactory||t.prototype.imageFactory,r=function(e,t,n){this.videoId=e,this.playerVars=t,this.clickToPlay=n,this.element=document.createElement("div"),this.listeners={}};return e.extend(r.prototype,{canPlayType:function(){return!0},on:function(e,t){return this.listeners[e]=t,this},loadAPI:function(){var e,t=this,n=window.onYouTubeIframeAPIReady,r="//www.youtube.com/iframe_api",i=document.getElementsByTagName("script"),s=i.length;for(window.onYouTubeIframeAPIReady=function(){n&&n.apply(this),t.playOnReady&&t.play()};s;)if(s-=1,i[s].src===r)return;e=document.createElement("script"),e.src=r,i[0].parentNode.insertBefore(e,i[0])},onReady:function(){this.ready=!0,this.playOnReady&&this.play()},onPlaying:function(){this.playStatus<2&&(this.listeners.playing(),this.playStatus=2)},onPause:function(){t.prototype.setTimeout.call(this,this.checkSeek,null,2e3)},checkSeek:function(){(this.stateChange===YT.PlayerState.PAUSED||this.stateChange===YT.PlayerState.ENDED)&&(this.listeners.pause(),delete this.playStatus)},onStateChange:function(e){switch(e.data){case YT.PlayerState.PLAYING:this.hasPlayed=!0,this.onPlaying();break;case YT.PlayerState.PAUSED:case YT.PlayerState.ENDED:this.onPause()}this.stateChange=e.data},onError:function(e){this.listeners.error(e)},play:function(){var e=this;this.playStatus||(this.listeners.play(),this.playStatus=1),this.ready?!this.hasPlayed&&(this.clickToPlay||window.navigator&&/iP(hone|od|ad)/.test(window.navigator.platform))?this.onPlaying():this.player.playVideo():(this.playOnReady=!0,window.YT&&YT.Player?this.player||(this.player=new YT.Player(this.element,{videoId:this.videoId,playerVars:this.playerVars,events:{onReady:function(){e.onReady()},onStateChange:function(t){e.onStateChange(t)},onError:function(t){e.onError(t)}}})):this.loadAPI())},pause:function(){this.ready?this.player.pauseVideo():this.playStatus&&(delete this.playOnReady,this.listeners.pause(),delete this.playStatus)}}),e.extend(t.prototype,{YouTubePlayer:r,textFactory:function(e,t){var i=this.getItemProperty(e,this.options.youTubeVideoIdProperty);return i?this.videoFactory(e,t,new r(i,this.options.youTubePlayerVars,this.options.youTubeClickToPlay)):n.call(this,e,t)}}),t}),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./blueimp-gallery"],e):e(window.jQuery,window.blueimp.Gallery)}(function(e,t){"use strict";e(document).on("click","[data-gallery]",function(n){var r=e(this).data("gallery"),i=e(r),s=i.length&&i||e(t.prototype.options.container),o=e.extend(s.data(),{container:s[0],index:this,event:n,onopen:function(){s.data("gallery",this).trigger("open")},onopened:function(){s.trigger("opened")},onslide:function(){s.trigger("slide",arguments)},onslideend:function(){s.trigger("slideend",arguments)},onslidecomplete:function(){s.trigger("slidecomplete",arguments)},onclose:function(){s.trigger("close")},onclosed:function(){s.trigger("closed").removeData("gallery")}}),u=e('[data-gallery="'+r+'"]');return o.filter&&(u=u.filter(o.filter)),new t(u,o)})});