webpackJsonp([92],{"9FEF":function(e,t,n){"use strict";function r(){if(m){var e;(e=console).log.apply(e,arguments)}}function o(e){return e.split("/").filter(Boolean)}function a(e){return e.startsWith(":")}function i(e,t){r("checking tokens",e,t);var n=a(e);return n?n===a(t)?0:-1:e===t?0:1}function s(e,t){r("comparing",e,t);var n=0,o=0;if(0===e.length||0===t.length)return r("zero length, bailed"),1;if(e.length!==t.length)return 1;for(;1!==n;){if(n=i(e[o],t[o]),r("those tokens are",n),0!==n)return n;if(o+=1,e.length<=o||t.length<=o)return 0}return-1}function c(e){if(!e)return[];var t=[],n=!1,a=0,i=(e||[]).filter(Boolean).map(function(e){return e.path}).filter(function(e){return f()(e,"for flow"),n&&(a+=1),!!d.test(e)||("*"===e?(n=!0,!1):"/_/_/*"!==e&&(t.push('Path "'+e+'" cannot be understood by validateChildRouteOrder'),!1))});if(a)return t.push("There are "+a+' routes defined after "*" that will never be invoked.'),t;var c=i.reduce(function(e,t){return f()(t,"for flow"),e[t]=o(t),e},{});return r("looking at",i),i.forEach(function(e,n){f()(e,"for flow");for(var o=[],a=[],l=0;l<n;l+=1){var p=i[l]||"";r("prev",p);var u=s(c[p]||[],c[e]||[]);r("isValid?",u),-1===u?o.push(p):0===u&&a.push(p)}a.length&&t.push('Path "'+String(e)+'" appears to be a clone of "'+a.join(", ")+'"'),o.length&&t.push('Path "'+String(e)+'" should be defined before "'+o.join(", ")+'"')}),t}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var h=n("Qsew"),f=n.n(h),d=/^[\/\:\-\_a-zA-Z0-9]*$/,m=!1;n.d(t,"b",function(){return g}),n.d(t,"a",function(){return v});var g=function(){function e(t){var n=t.path,r=t.onEnter,o=t.props,a=void 0===o?{}:o,i=t.onChange,s=t.onLeave,c=t.indexRoute,l=t.childRoutes,p=t.legacy_server_context,h=t.deeplinks,f=t.getComponent,d=t.component,m=t.authBundleLoader,g=t.authResources,v=t.bundle,w=t.chunkFilename;u(this,e),y.call(this),this.path=n,this.enterHooks=r?[r]:[],this.onChange=i,this.leaveHooks=s?[s]:[],this.props=a,this.indexRoute=c,this.childRoutes=l,this.legacy_server_context=p,this.deeplinks=h,this.getComponent=f,this.component=d,this.authBundleLoader=m,this.authResources=g,this.bundle=v,this.chunkFilename=w}return e.prototype.wrapReplace=function e(t){return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return"string"==typeof e?e=encodeURI(e):e.pathname=encodeURI(e.pathname),t.apply(void 0,[e].concat(r))}},e.prototype.addEnterHook=function e(t){this.enterHooks.push(t)},e.prototype.addLeaveHook=function e(t){this.leaveHooks.push(t)},e}(),y=function e(){var t=this;this.onEnter=function(e,n,r){var o=!1,a=t.wrapReplace(n);t.enterHooks.forEach(function(n){3===n.length?(o=!0,n.call(t,e,a,r)):n.call(t,e,a)}),o||r()},this.onLeave=function(e){t.leaveHooks.forEach(function(n){return n.call(t,e)})}},v=function(e){function t(n,r,o){return u(this,t),l(this,e.call(this,{path:n,onEnter:r,legacy_server_context:o}))}return p(t,e),t}(g)},DOck:function(e,t){function n(){}e.exports=n},Exm5:function(e,t,n){function r(e){return e&&e.length?o(e):[]}var o=n("ncdy");e.exports=r},Xafg:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=e.name,n=e.upwtActionName,r=e.resourceDependencies,o=void 0===r?function(){return[]}:r,a=e.routeContextLog,l=void 0===a?function(e,t,n){return null}:a,u=e.metatagResource,h=void 0===u?function(){return null}:u,f=e.placementId,d=void 0===f?null:f,g=e.redirect,y=void 0===g?function(){return null}:g,v=e.getRenderError,w=void 0===v?function(){return null}:v;return function e(r){var a,u;return u=a=function(e){function t(){return i(this,t),s(this,e.apply(this,arguments))}return c(t,e),t.prototype.render=function e(){var t=this.props,n=t.params,o=t.location,a=void 0===o?{}:o,i=(this.props.route||{}).legacy_server_context;return p.createElement(m,{log:l(i||{},n||{},a||{})},p.createElement(r,this.props))},t}(p.Component),a.WrappedComponent=r,a.routeName=t,a.upwtActionName=n,a.placementId=d,a.displayName="StaticRouteData",a.getMetatagResource=h,a.getContextLog=l,a.getResourceDependencies=o,a.getRedirect=y,a.getRenderError=w,u}}var p=n("d6ZO"),u=n.n(p),h=n("WjSu"),f=n("hVsM"),d=n("SnoN"),m=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return a(t,e),t.prototype.componentDidMount=function e(){var t=this.props.log;if(t){var n=f.a.fromPlainObject(t);n.setEventType(13),n.setRequestIdentifier(h.a.initialPageContext.PAGE_LOAD_REQUEST_IDENTIFIER),d.a.getInstance().addEvent(n)}},t.prototype.render=function e(){return this.props.children},t}(p.Component),g=n("9FEF");t.a=l},adgJ:function(e,t,n){"use strict";function r(e){var t=e.showAsModal,n=e.params,r=e.location,a=e.router,i=n.id,c=r.query,l=parseInt(c.variant_id,10),p=parseInt(c.catalog_id,10),h=parseInt(c.x,10),f=parseInt(c.y,10),d=parseInt(c.w,10),m=parseInt(c.h,10);return o.createElement(s.a,{isAnimated:"1"===c.animation,replaceState:function e(){return a.replace.apply(a,arguments)},goBack:function e(){return a.goBack()},showAsModal:t,pinId:i,productImageIndex:u(l,p)?{variantId:l,catalogId:p}:void 0,initialCropArea:u(h,f,d,m)?{x:h,y:f,w:d,h:m}:void 0,inDenzelModal:!1,inPureReact:!0})}Object.defineProperty(t,"__esModule",{value:!0});var o=n("d6ZO"),a=n.n(o),i=n("DUIN"),s=n("r7qI"),c=n("Xafg"),l=n("MQ2h"),p=n.n(l),u=function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.every(function(e){return!isNaN(e)})};t.default=Object(l.compose)(Object(c.a)({name:"Flashlight",resourceDependencies:function e(t,n){return[{name:"PinResource",options:{id:n.id,field_set_key:"detailed",fetch_visual_search_objects:!0}}]}}),Object(i.connect)(function(e){return{showAsModal:e.location.history.length>1}}))(r)},gMBz:function(e,t,n){var r=n("sVTc"),o=n("DOck"),a=n("o9Bl"),i=1/0,s=r&&1/a(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=s},ncdy:function(e,t,n){function r(e,t,n){var r=-1,u=a,h=e.length,f=!0,d=[],m=d;if(n)f=!1,u=i;else if(h>=p){var g=t?null:c(e);if(g)return l(g);f=!1,u=s,m=new o}else m=t?[]:d;e:for(;++r<h;){var y=e[r],v=t?t(y):y;if(y=n||0!==y?y:0,f&&v===v){for(var w=m.length;w--;)if(m[w]===v)continue e;t&&m.push(v),d.push(y)}else u(m,v,n)||(m!==d&&m.push(v),d.push(y))}return d}var o=n("vRa5"),a=n("JmUs"),i=n("6Hh8"),s=n("u923"),c=n("gMBz"),l=n("o9Bl"),p=200;e.exports=r},r7qI:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function m(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var w=n("d6ZO"),b=n.n(w),C=n("SnoN"),O=n("GGB8"),_=n.n(O),E=n("IaRT"),x=n.n(E),S=n("OlMo"),M=n("pN+K"),A=n("MQ2h"),I=n.n(A),R=n("Kqaz"),D=function(e){function t(n){r(this,t);var a=o(this,e.call(this,n)),i=n.searchResultMetaData&&n.searchResultMetaData.search_identifier;return i&&n.onSearchIdUpdate(i),a}return a(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function e(t){var n=t.searchResultMetaData,r=this.props.searchResultMetaData,o=r&&r.search_identifier,a=n&&n.search_identifier;o!==a&&this.props.onSearchIdUpdate(a)},t.prototype.render=function e(){var t=this.props,n=t.contextLog,r=t.onAdd,o=t.onRemove,a=t.searchResultMetaData,i=0,s=a&&a.search_identifier,c=a?[].concat(a.query_filters.map(function(e){return{label:e,selected:!0}}),a.annotations.map(function(e){return{label:e,selected:!1}})):[];return b.a.createElement("div",{className:"flashlightAnnotationList"},c.map(function(e){var t=e.selected,a=e.label,c={};return t||(c.backgroundColor=S.a[i%S.a.length],i+=1),b.a.createElement("div",{key:a,className:"flashlightAnnotationListItem"},b.a.createElement("button",{className:_()({selected:t}),onClick:function e(i){n(101,{viewData:{search_identifier:s},component:4,element:1032,annotation_type:t?"remove":"add",search_identifier:s,label:a}),i.stopPropagation(),(t?o:r)(a)},type:"button",style:c},b.a.createElement("span",null,a)))}))},t}(w.Component),j=Object(A.compose)(R.a,Object(M.b)({name:"VisualLiveSearchResource",options:function e(t){return t.resourceOptions},key:"searchResultMetaData"}))(D),k=function(e){function t(){var n,r,o;i(this,t);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return n=r=s(this,e.call.apply(e,[this].concat(c))),r.state={cropArea:r.props.initialCropArea||{h:0,w:0,x:0,y:0},cropChangeType:null,showShadowOverlay:!0},r.cropResizeDirection=null,r._checkCropHandleValid=function(e,t){var n=r.state.cropArea,o=n.h,a=n.w,i=n.x,s=n.y;switch(r.cropResizeDirection){case"ne":e<i&&t>s+o?r.cropResizeDirection="sw":e<i?r.cropResizeDirection="nw":t>s+o&&(r.cropResizeDirection="se");break;case"nw":e>i+a&&t>s+o?r.cropResizeDirection="se":e>i+a?r.cropResizeDirection="ne":t>s+o&&(r.cropResizeDirection="sw");break;case"se":e<i&&t<s?r.cropResizeDirection="nw":e<i?r.cropResizeDirection="sw":t<s&&(r.cropResizeDirection="ne");break;case"sw":e>i+a&&t<s?r.cropResizeDirection="ne":e>i+a?r.cropResizeDirection="se":t<s&&(r.cropResizeDirection="nw")}},r.handleOnTouchStart=function(e){if(e.preventDefault(),e.stopPropagation(),e.target){var t=e.touches[0],n=t.clientX,o=t.clientY;r.handleOnPointerDown(e,n,o)}},r.handleOnMouseDown=function(e){if(e.preventDefault(),e.stopPropagation(),e.target){var t=e.clientX,n=e.clientY;r.handleOnPointerDown(e,t,n)}},r.handleOnPointerDown=function(e,t,n){var o=e.target,a=r.state.showShadowOverlay,i=r._cropperOverlay.getBoundingClientRect();r._cropperOverlayCoor={x:i.left,y:i.top};var s=t-r._cropperOverlayCoor.x,c=n-r._cropperOverlayCoor.y;if(o.className.includes("cropperHandle")){r.setState({cropChangeType:"resize"});var l=o.className;l.includes("ne")&&(r.cropResizeDirection="ne"),l.includes("nw")&&(r.cropResizeDirection="nw"),l.includes("se")&&(r.cropResizeDirection="se"),l.includes("sw")&&(r.cropResizeDirection="sw")}else o.className.includes("cropSection")?(r.setState({cropChangeType:"move"}),r.cropChangeStartCoor={x:s,y:c}):!o.className.includes("shadowMask")&&a||(r.cropChangeStartCoor={x:s,y:c},r.setState({cropArea:{h:0,w:0,x:s,y:c},cropChangeType:"select",showShadowOverlay:!0}))},r.handleOnTouchMove=function(e){return r._cropperOverlayCoor&&r.handleOnPointerMove(e.touches[0].clientX,e.touches[0].clientY)},r.handleOnMouseMove=function(e){return r._cropperOverlayCoor&&r.handleOnPointerMove(e.clientX,e.clientY)},r.handleOnPointerMove=function(e,t){var n=r.state,o=n.cropArea,a=o.h,i=o.w,s=o.x,c=o.y,l=n.cropChangeType,p=r.props.imageSize,u=e-r._cropperOverlayCoor.x,h=t-r._cropperOverlayCoor.y;if("resize"===l){var f=Math.max(Math.min(u,p.w),0),d=Math.max(Math.min(h,p.h),0);switch(r._checkCropHandleValid(f,d),r.cropResizeDirection){case"ne":r.setState({cropArea:{h:a+(c-d),w:Math.abs(f-s),x:s,y:d}});break;case"nw":r.setState({cropArea:{h:a+(c-d),w:i+(s-f),x:f,y:d}});break;case"se":r.setState({cropArea:{h:Math.abs(d-c),w:Math.abs(f-s),x:s,y:c}});break;case"sw":r.setState({cropArea:{h:Math.abs(d-c),w:i+(s-f),x:f,y:c}})}}else if("move"===l){var m=u-r.cropChangeStartCoor.x,g=h-r.cropChangeStartCoor.y,y=Math.max(Math.min(s+m,p.w-i),0),v=Math.max(Math.min(c+g,p.h-a),0);r.cropChangeStartCoor={x:u,y:h},r.setState({cropArea:{h:a,w:i,x:y,y:v}})}else if("select"===l){var w=Math.max(Math.min(u,p.w),0),b=Math.max(Math.min(h,p.h),0),C=w-r.cropChangeStartCoor.x,O=b-r.cropChangeStartCoor.y;r.setState({cropArea:{h:Math.abs(O),w:Math.abs(C),x:Math.min(r.cropChangeStartCoor.x,w),y:Math.min(r.cropChangeStartCoor.y,b)}})}},r.handleOnMouseUp=function(e){return r.handleOnPointerUp()},r.handleOnTouchEnd=function(e){return r.handleOnPointerUp()},r.handleOnPointerUp=function(){var e=r.state.cropChangeType;"resize"!==e&&"move"!==e&&"select"!==e||r.handleCrop(),r.cropResizeDirection=null},o=n,s(r,o)}return c(t,e),t.prototype.componentDidMount=function e(){this._cropperOverlay&&document.body&&(window.addEventListener("mouseup",this.handleOnMouseUp),document.body.addEventListener("mousemove",this.handleOnMouseMove),this._cropperOverlay.addEventListener("mousedown",this.handleOnMouseDown))},t.prototype.UNSAFE_componentWillReceiveProps=function e(t){t.initialCropArea&&(this.props.initialCropArea&&t.initialCropArea.h===this.props.initialCropArea.h&&t.initialCropArea.w===this.props.initialCropArea.w&&t.initialCropArea.x===this.props.initialCropArea.x&&t.initialCropArea.y===this.props.initialCropArea.y||this.setState({cropArea:t.initialCropArea}))},t.prototype.componentWillUnmount=function e(){this._cropperOverlay&&document.body&&(window.removeEventListener("mouseup",this.handleOnMouseUp),document.body.removeEventListener("mousemove",this.handleOnMouseMove),this._cropperOverlay.removeEventListener("mousedown",this.handleOnMouseDown))},t.prototype.handleCrop=function e(){var t=this.props,n=t.imageSize,r=t.onChange,o=this.state.cropArea;0===o.w&&0===o.h?(this.setState({showShadowOverlay:!1,cropChangeType:null}),r({crop:{h:1,w:1,x:0,y:0},origCrop:{h:n.h,w:n.w,x:0,y:0}})):(this.setState({showShadowOverlay:!0,cropChangeType:null}),r({crop:{h:o.h/n.h,w:o.w/n.w,x:o.x/n.w,y:o.y/n.h},origCrop:Object.assign({},o)}))},t.prototype.render=function e(){var t=this,n=this.props,r=n.imageSize,o=r.h,a=r.w,i=n.children,s=this.state,c=s.cropArea,l=c.h,p=c.w,u=c.x,h=c.y,f=s.cropChangeType,d=s.showShadowOverlay,m=_()("shadowOverlay","absolute",{shadowOverlayHide:!d});return w.createElement("div",{onTouchMove:this.handleOnTouchMove,onTouchEnd:this.handleOnTouchEnd},w.createElement("div",{className:"cropperWrapper block"},w.createElement("div",{className:"relative",ref:function e(n){t._cropperOverlay=n},onTouchStart:this.handleOnTouchStart},w.createElement("div",{className:"cropSection absolute",style:{height:l,left:u,top:h,width:p}},"select"!==f&&d&&w.createElement("div",null,w.createElement("div",{className:"cropperHandle absolute ord-nw"}),w.createElement("div",{className:"cropperHandle absolute ord-ne"}),w.createElement("div",{className:"cropperHandle absolute ord-sw"}),w.createElement("div",{className:"cropperHandle absolute ord-se"}))),w.createElement("div",{className:m},w.createElement("div",{className:"shadowMask absolute",style:{height:h,left:0,top:0,width:"100%"}}),w.createElement("div",{className:"shadowMask absolute",style:{height:l,left:0,top:h,width:u}}),w.createElement("div",{className:"shadowMask absolute",style:{height:o-h-l,left:0,top:h+l,width:"100%"}}),w.createElement("div",{className:"shadowMask absolute",style:{height:l,left:u+p,top:h,width:a-u-p}})),w.createElement("div",{className:"absolute cropperAdditional"},i))))},t}(w.Component),T=n("gEaE"),z=4,P=15,N=function e(t,n){return Object.keys(t).reduce(function(e,r){return e+Math.abs(t[r]-n[r])},0)<=4},L=function e(t){var n=t.cropArea,r=t.imageSize,o=n.h,a=n.w,i=n.x,s=n.y;return{h:Math.floor(o*r.h),w:Math.floor(a*r.w),x:Math.floor(i*r.w),y:Math.floor(s*r.h)}},U=function(e){function t(n){l(this,t);var r=p(this,e.call(this,n));F.call(r);var o=r.props,a=o.imageSize,i=o.initialCropArea,s=o.spotlightAreas.findIndex(function(e){return N(i,L({cropArea:e,imageSize:a}))});return r.state={currentSpotlightIdx:s},r}return u(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function e(t){var n=t.imageSize,r=t.initialCropArea,o=t.spotlightAreas.findIndex(function(e){return N(r,L({cropArea:e,imageSize:n}))});this.setState({currentSpotlightIdx:o})},t.prototype.render=function e(){var t=this,n=this.props,r=n.imageSize,o=n.initialCropArea,a=n.spotlightAreas,i=a&&!!a.length;return b.a.createElement(k,{imageSize:r,initialCropArea:o,onChange:this.handleChange},i&&b.a.createElement("div",{className:"spotlightWrapper absolute",style:{width:r.w}},a.map(function(e,n){return t.renderSpotlightDot(e,n)})))},t}(w.Component);U.defaultProps={spotlightAreas:[]};var F=function e(){var t=this;this.handleChange=function(e){(0,t.props.onChange)(e)},this.handleSpotlightClick=function(e){var n=t.props,r=n.imageSize,o=n.onChange,a=n.spotlightAreas,i=L({cropArea:a[e],imageSize:r});o({crop:a[e],origCrop:i})},this.renderSpotlightDot=function(e,n){var r=t.state.currentSpotlightIdx;if(n===r)return null;var o=t.props.imageSize,a=L({cropArea:e,imageSize:o}),i={x:a.x+a.w/2,y:a.y+a.h/2};return b.a.createElement("button",{className:"absolute no-border p0 spotlightButton",key:n,onClick:function e(r){r&&(r.stopPropagation(),r.preventDefault()),t.handleSpotlightClick(n)},style:{left:i.x,top:i.y}},b.a.createElement(T.t,{height:15,shape:"circle",width:15},b.a.createElement("div",{className:"spotlightDot bg-white",style:{height:15,width:15}})))}},H=U,B=n("W/Cr"),W=n("lWtR"),V=n("ULUT"),X=n("LQXo"),q=function(e){function t(){var n,r,o;h(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=r=f(this,e.call.apply(e,[this].concat(i))),r.renderItem=function(e){var t=e.data,n=e.itemIdx,o=r.props,a=o.resourceOptions.image_signature,i=o.searchId;return b.a.createElement(T.b,{marginTop:4,marginLeft:0,marginRight:0,marginBottom:0},b.a.createElement(W.a,{pin:t,slotIndex:n,showEditPinButton:!1,showLikeItButton:!0,contextLogData:{viewData:{search_identifier:i},search_identifier:i,image_signature:a},viewType:72,viewParameter:3050}))},o=n,f(r,o)}return d(t,e),t.prototype.render=function e(){var t=this.props,n=t.fetchMoreData,r=t.isFetching,o=t.pins,a=t.searchId;return b.a.createElement(T.b,null,o&&a&&b.a.createElement(T.b,{position:"relative",dangerouslySetInlineStyle:{__style:{top:-14}}},b.a.createElement(T.u,{columnWidth:X.b,comp:this.renderItem,gutterWidth:X.c,items:o,loadItems:n,minCols:1,scrollContainer:function e(){return window}})),b.a.createElement(T.E,{accessibilityLabel:B.a._("Loading search results...","Accessibility label for loading visual search results"),show:r||!a}))},t}(w.PureComponent),Q=Object(A.compose)(Object(M.b)({name:"VisualLiveSearchResultResource",options:function e(t){return t.resourceOptions},key:"pins"}))(q),G=n("Esb+"),Y=n.n(G),Z=n("vCSV"),J=n("Cjb7"),K=n("nX0T"),$=n("Exm5"),ee=n.n($),te=n("DVnr"),ne=n("aGt6"),re=564,oe=80,ae=20,ie=400,se=30,ce=function e(t,n,r){var o=t.x,a=t.y,i=t.w,s=t.h,c=[];if(r){var l=r.variantId,p=r.catalogId;c=c.concat(["variant_id="+l,"catalog_id="+p])}return o>=0&&a>=0&&i>=0&&s>=0&&(c=c.concat(["x="+o,"y="+a,"w="+i,"h="+s])),"/pin/"+n+"/visual-search/"+(c.length?"?"+c.join("&"):"")},le=function e(t){var n=t.pin,r=t.productImageIndex,o=n.images,a=n.image_signature;if(r&&n.buyable_product){var i=r.variantId,s=r.catalogId,c=n.buyable_product.items[i];if(c){var l=c.images[s];l&&(o=l.canonical_images,a=l.image_signature)}}var p=o["564x"]&&o.orig,u=p.url,h=p.width,f=p.height;return h>564&&(f*=564/h,h=564),{width:h,height:f,url:u,imageSignature:a}},pe=function e(t){var n=t.initialCropArea,r=t.pin,o=t.productImageIndex,a=void 0;if(n)a=Object.assign({},n);else{var i=r.visual_objects,s=le({pin:r,productImageIndex:o}),c=s.width,l=s.height;if(i&&i.length){var p=i[0],u=p.x,h=p.y,f=p.w,d=p.h,m=[u*c,h*l,f*c,d*l];a={x:u=m[0],y:h=m[1],w:f=m[2],h:d=m[3]}}else{var g=c/6,y=l/6;a={x:g,y:y,w:c-2*g,h:l-2*y}}}return{x:Math.floor(a.x),y:Math.floor(a.y),w:Math.floor(a.w),h:Math.floor(a.h)}},ue=function(e){function t(){var n,r,o;g(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=r=y(this,e.call.apply(e,[this].concat(i))),r.state={animationState:r.props.isAnimated?"initial":"finished",searchId:"",textFilters:[]},r.getResourceOptions=function(e,t,n){var o=r.props.pin,a=o.image_signature,i=o.id,s=r.state.textFilters;return{pin_id:i,image_signature:a,crop:{x:e.x/t,y:e.y/n,w:e.w/t,h:e.h/n},text_filters:s,keep_duplicates:!1}},r.handleCropperChange=function(e){var t=e.origCrop,n=r.props,o=n.pin,a=n.productImageIndex,i=n.replaceState,s=ce(t,o.id,a);s!==window.location.pathname+window.location.search&&i(s)},o=n,y(r,o)}return v(t,e),t.prototype.componentDidMount=function e(){var t=this,n=this.props,r=n.isAnimated,o=n.inDenzelModal,a=n.initialCropArea,i=n.contextLog,s=n.pin,c=n.productImageIndex,l=n.replaceState;if(o&&(this._previousView=C.a.getInstance().getViewFromContext(),this._origUrl=window.location.href,J.a.instance.publish("site","unhideModal",null)),!a){var p=pe({initialCropArea:a,pin:s,productImageIndex:c});l(ce(p,s.id,c))}r&&(this._animationTimer=setTimeout(function(){t.setState({animationState:"finished"})},400)),i(13,{view:72,viewParameter:3050,viewData:{pin_id:s.id}})},t.prototype.UNSAFE_componentWillReceiveProps=function e(t){Y()(t.initialCropArea,this.props.initialCropArea)||this.setState({textFilters:[],searchId:""})},t.prototype.componentWillUnmount=function e(){var t=this.props,n=t.inDenzelModal,r=t.replaceState;this._animationTimer&&clearTimeout(this._animationTimer),n&&(this._previousView&&C.a.getInstance().addViewToContext(this._previousView),window.location.href.indexOf("/visual-search/")>0&&r(this._origUrl))},t.prototype.renderContent=function e(){var t=this,n=this.props,r=n.pin,o=n.productImageIndex,a=n.initialCropArea,i=n.inDenzelModal,s=n.inPureReact,c=n.isAnimated,l=n.showAsModal,p=le({pin:r,productImageIndex:o}),u=p.width,h=p.height,f=p.url,d=this.state,m=d.animationState,g=d.searchId,y=d.textFilters,v=pe({initialCropArea:a,pin:r,productImageIndex:o}),w=this.getResourceOptions(v,u,h),C={position:"fixed",top:0,bottom:0,left:0,right:0,width:"inherit",height:"inherit"},O=(s?l:i)?0:te.a,E=u+20,x={pageContainer:{textAlign:"center"},header:Object.assign({},C,{top:O,left:30,height:80,display:"flex",backgroundColor:"#fff",zIndex:1}),cropper:Object.assign({},C,{width:E,top:O+80,overflow:"auto",marginLeft:30,marginBottom:20,left:"initial"===m?"calc(50% - "+parseInt(u/2,10)+"px)":0,transition:"left 400ms"}),result:{marginRight:50,marginLeft:E+30,marginTop:80}};return b.a.createElement(K.a,{view:72,objectId:g},b.a.createElement(T.b,null,b.a.createElement("div",{className:_()("flashlightResultsContainer",{invisible:"finished"!==m}),style:x.result},b.a.createElement(Q,{inDenzelModal:i,resourceOptions:w,searchId:g})),b.a.createElement("div",{className:_()("flashlightHeaderContainer FlashlightHeader",{noDisplay:"finished"!==m}),style:x.header},b.a.createElement(T.b,{marginTop:6,marginStart:1,minWidth:E},b.a.createElement(T.I,{size:"xl",bold:!0},B.a._("Visually similar results"))),b.a.createElement(T.b,{display:"flex",flex:"grow",alignItems:"start",justifyContent:"end",marginTop:4,marginEnd:12},b.a.createElement(j,{onAdd:function e(n){return t.setState({textFilters:ee()(y.concat([n]))})},onRemove:function e(n){return t.setState({textFilters:y.filter(function(e){return e!==n})})},onSearchIdUpdate:function e(n){return t.setState({searchId:n})},resourceOptions:w}))),b.a.createElement("div",{className:"flashlightImageContainer",style:x.cropper},b.a.createElement("div",{className:"FlashlightEnabledImage",style:{width:u,height:h}},b.a.createElement(T.t,{height:h,shape:"rounded",width:u},b.a.createElement(H,{imageSize:{h:h,w:u},initialCropArea:v,isAnimated:c,onChange:this.handleCropperChange,spotlightAreas:r.visual_objects}),b.a.createElement(Z.a,{alt:r.description,className:"pinImage rounded",src:f,width:u}))))))},t.prototype.render=function e(){var t=this.props,n=t.showAsModal,r=t.goBack,o=t.inDenzelModal,a=t.inPureReact,i=this.renderContent();return o?i:n?b.a.createElement(ne.b,{goBack:r,pageHeightStyle:a?"extend":"none"},b.a.createElement(ne.a,null,i)):i},t}(w.Component),he=t.a=Object(A.compose)(R.a,Object(M.b)({name:"PinResource",key:"pin",options:function e(t){return{id:t.pinId,field_set_key:"detailed",fetch_visual_search_objects:!0}}}))(function(e){var t=e.resourceLoaded,n=m(e,["resourceLoaded"]);return b.a.createElement(T.b,null,t&&b.a.createElement(ue,n),b.a.createElement(T.E,{accessibilityLabel:B.a._("Loading visual search...","Accessibility label for loading visual search page"),show:!t}))})}});