webpackJsonp([255],{"9TqZ":function(e,t,n){"use strict";var a=n("d6ZO"),o=n.n(a),r=n("BAXv"),i=n("W/Cr"),l=n("Kqaz"),s=n("gEaE"),c=r.a.GEN.templateConst.settings,u=function e(t){var n=t.onClick,a=t.text,r=t.url;return o.a.createElement(s.b,{role:"listitem"},o.a.createElement(s.I,{bold:!0,color:"gray",size:"sm"},o.a.createElement(s.s,{href:r,onClick:n,target:"blank"},o.a.createElement(s.b,{padding:1},a))))},p=function e(t){var n=t.contextLog,a=t.country,r=function e(t){return function(){return n(101,{component:218,element:t})}};return o.a.createElement(s.b,{role:"list",paddingX:3,paddingY:2,display:"flex",wrap:!0,direction:"row",width:"100%",alignItems:"center"},o.a.createElement(u,{text:i.a._("About","menu item that takes user to the Pinterest about page"),url:c.RELATIVE_ABOUT_URL,onClick:r(8006)}),o.a.createElement(u,{text:i.a._("Blog","menu item that takes user to the Pinterest blog"),url:c.BLOG_URL,onClick:r(8007)}),o.a.createElement(u,{text:i.a._("Businesses","menu item that takes user to the Pinterest for business page"),url:c.PARTNER_SITE_URL,onClick:r(8008)}),o.a.createElement(u,{text:i.a._("Careers","menu item that takes user to the Pinterest careers page"),url:c.ABOUT_CAREERS_URL,onClick:r(8009)}),o.a.createElement(u,{text:i.a._("Developers","menu item that takes user to the Pinterest developers page"),url:c.DEVELOPER_SITE_URL,onClick:r(8010)}),o.a.createElement(u,{text:i.a._("Removals","menu item that takes user to the Pinterest copyright page"),url:c.ABOUT_COPYRIGHT_URL,onClick:r(8011)}),o.a.createElement(u,{text:i.a._("Privacy","menu item that takes user to the Pinterest privacy page"),url:c.ABOUT_PRIVACY_URL,onClick:r(8004)}),o.a.createElement(u,{text:i.a._("Personalized Ads","menu item that takes user to the Pinterest personalized ads page"),url:c.PERSONALIZED_ADS_URL,onClick:r(10406)}),o.a.createElement(u,{text:i.a._("Terms","menu item that takes user to the Pinterest terms page"),url:c.ABOUT_TERMS_PLAIN_URL,onClick:r(8012)}),["DE","AT","CH"].includes(a)&&o.a.createElement(u,{text:i.a._("Imprint/NetzDG","menu item that takes user to the Pinterest imprint page"),url:c.ABOUT_IMPRESSUM_URL,onClick:r(8013)}))},d=Object(l.a)(p),m=n("6oz1"),h=n("N9ZA"),f=r.a.GEN.templateConst.settings,b=function e(t){var n=t.contextLog,o=t.country,r=t.onClick,l=t.user,c=function e(t){return function(){r&&r(),n(101,{component:218,element:t})}},u=window.location.hostname,p=encodeURIComponent("https://"+u+"/"+l.username+"/");return a.createElement(s.b,{display:"flex",direction:"column",width:"100%"},a.createElement(h.a,null,a.createElement(h.b,{url:f.HELP_URL+"?source=gear_menu_web",text:i.a._("Visit the Help Center","A link to the help center"),external:!0,onClick:c(8002)}),a.createElement(m.b,{name:"web_commerce"},a.createElement(m.c,{groupStartsWith:["employees","enabled"]},a.createElement(h.b,{url:"/pin_shop/order_history/",text:i.a._("See order history","A link to see past orders"),onClick:c(8e3)}))),a.createElement(m.b,{name:"web_order_history_deprecation"},a.createElement(m.c,{groupStartsWith:"enabled"},a.createElement(h.b,{url:"/pin_shop/order_history/",text:i.a._("See order history","A link to see past orders"),onClick:c(8e3)}))),a.createElement(h.b,{url:f.DEVELOPER_SITE_URL+"/tools/widget-builder/?type=profile&url="+p,text:i.a._("Create widget","A link to create an embeddable widget"),external:!0,onClick:c(8001)}),a.createElement(s.i,null)),a.createElement(d,{country:o}))},E=t.a=Object(l.a)(b)},A2Zo:function(e,t,n){e.exports=function(){return new Promise(function(e){n.e(55).then(function(t){e(n("/XoM"))}.bind(null,n)).catch(n.oe)})}},"Cjx+":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n("d6ZO"),u=n.n(c),p=n("FqaO"),d=n("DUIN"),m=n("VOdg"),h=n("GGB8"),f=n.n(h),b=n("W/Cr"),E=n("LQgx"),g=n("FHbT"),y=n("1QHH"),C=n("MQ2h"),v=n.n(C),w=n("kzic"),_=n("Kqaz"),k=n("6oz1"),x=n("gEaE"),O=n("N9ZA"),R=n("wr/6"),S={BUG:"addPinReportBug",EXTENSION:"addPinExtensionUpsell",MENU:"addPinMenu",URL:"addPinUrl"},U=function(e){function t(){var n,r,i;a(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=r=o(this,e.call.apply(e,[this].concat(s))),r.state={display:S.MENU,isMenuOpen:!1},r.handleModalClose=function(){r.setState({display:S.MENU})},r.handleBrowserButtonInstallClick=function(){r.setState({display:S.EXTENSION,isMenuOpen:!1}),r.props.contextLog(101,{component:219,element:279})},r.handleAddUrlClick=r.props.authAction(function(){var e=r.props.dispatch,t=Object(R.h)(R.a.SCRAPE);e&&e(t),r.props.contextLog(101,{component:219,element:452})}),r.handleUploadClick=r.props.authAction(function(){var e=r.props.dispatch,t=Object(R.h)(R.a.NATIVE_CONTENT);e&&e(t),r.props.contextLog(101,{component:219,element:451})}),r.handleCreatePinClick=r.props.authAction(function(){var e=r.props,t=e.contextLog,n=e.router;r.setState({isMenuOpen:!1}),t(101,{component:219,element:451}),n.push("/pin-builder/")}),r.handleReportBugClick=function(){r.setState({display:S.BUG,isMenuOpen:!1})},r.handleFlyoutDismiss=function(){r.setState({isMenuOpen:!1})},r.toggleMenuVisibility=function(){var e=r.state.isMenuOpen;r.setState({isMenuOpen:!e})},i=n,o(r,i)}return r(t,e),t.prototype.render=function e(){var t=this,n=this.state,a=n.display,o=n.isMenuOpen,r=this.props,i=r.buttonComponent,l=r.experiments,s=r.onDropdownButtonClick,u=r.username,p=r.isEmployee,d=r.isExtensionInstalled;switch(a){case S.BUG:return u?c.createElement(E.a,{onHide:this.handleModalClose},c.createElement(g.a,{onClearModal:this.handleModalClose,username:u})):null;case S.EXTENSION:return c.createElement(E.a,{onHide:this.handleModalClose},c.createElement("div",{className:f()("browserButtonUpsellModal","bg-white")},c.createElement(m.a,{experiments:l,isExtensionInstalled:d,onHide:this.handleModalClose})));case S.MENU:default:return c.createElement("div",null,c.createElement("div",{key:"add-pin-button",ref:function e(n){t.addPinButton=n}},i(s(this.toggleMenuVisibility))),o&&c.createElement(x.j,{anchor:this.addPinButton,onDismiss:this.handleFlyoutDismiss,size:"md"},c.createElement(O.a,null,d?null:c.createElement(O.b,{icon:"pinterest",onClick:this.handleBrowserButtonInstallClick,text:b.a._("Get our browser button to save ideas even faster","pin creation")}),d?null:c.createElement(x.i,null),c.createElement(k.b,{name:"web_pin_builder"},c.createElement(k.a,null,c.createElement(c.Fragment,null,c.createElement(O.b,{icon:"add",onClick:this.handleUploadClick,text:b.a._("Upload a Pin","pin creation")}),c.createElement(x.i,null),c.createElement(O.b,{icon:"globe",onClick:this.handleAddUrlClick,text:b.a._("Save from a website","pin creation")}))),c.createElement(k.c,{group:["enabled","employees"]},c.createElement(O.b,{icon:"add",onClick:this.handleCreatePinClick,text:b.a._("Create a Pin","Button to enter new Pin creation")}))),p?c.createElement(x.i,null):null,p?c.createElement(O.b,{icon:"send",onClick:this.handleReportBugClick,text:b.a._("Report a bug","pin creation")}):null)))}},t}(c.Component),P=function e(t){return{isEmployee:t.viewer.isAuth&&t.viewer.isEmployee,username:t.viewer.isAuth?t.viewer.username:null}},B=Object(C.compose)(y.a,Object(d.connect)(P),w.withRouter,_.a)(U),I=n("bbMF"),T=n("nM9s"),M=500,A=function(e){function t(){var n,a,o;i(this,t);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return n=a=l(this,e.call.apply(e,[this].concat(s))),a.state={initialExtensionUpsellDismissed:!1,showExtensionUpsell:!1,isExtensionInstalled:!1},a.onBrowserExtUpsellHide=function(){a.setState({showExtensionUpsell:!1})},a.getHandleAddPinButtonClick=function(e){return function(){var t=a.props.contextLog,n=a.state.isExtensionInstalled;t(101,{component:219});var o=p.get("extensionNag");n||o?e():a.setState({showExtensionUpsell:!0})}},o=n,l(a,o)}return s(t,e),t.prototype.componentDidMount=function e(){var t=this;I.a.extensionReady(parseInt(500,10)).then(function(e){return t.setState({isExtensionInstalled:e})})},t.prototype.render=function e(){var t=this,n=this.state,a=n.initialExtensionUpsellDismissed,o=n.showExtensionUpsell,r=n.isExtensionInstalled,i=this.props.experiments;return u.a.createElement("div",{className:"buttonInoutWrapper addButtonWrapper addPinFlyout",style:{marginLeft:12.5,marginRight:12.5}},u.a.createElement(B,{buttonComponent:function e(n){return u.a.createElement(T.a,{accessibilityLabel:b.a._("Add Pin","pin creation"),className:f()("addPinFooter","footerIcon"),key:"add-pin-icon-button",onClick:n,ref:function e(n){t._button=n},showText:!1,text:b.a._("Add Pin","pin creation"),type:"borderless"},u.a.createElement(x.m,{accessibilityLabel:"",color:"darkGray",icon:"add",size:14}))},experiments:i,onDropdownButtonClick:this.getHandleAddPinButtonClick,isExtensionInstalled:r}),!a&&o?u.a.createElement(E.a,{key:"browser-button-upsell",onHide:this.onBrowserExtUpsellHide},u.a.createElement("div",{className:f()("browserButtonUpsellModal","bg-white")},u.a.createElement(m.a,{experiments:i,onHide:this.onBrowserExtUpsellHide,isExtensionInstalled:r}))):null)},t}(c.Component),N=t.a=Object(_.a)(A)},CrRE:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n("QaZX"),r=n("A2Zo"),i=n.n(r),l=n("mIxQ"),s=n.n(l),c=n("FJZF"),u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this,l=arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];a(this,e),this.onUploaderSubmit=function(e,t){r.submitCallback&&r.submitCallback(e,t)},this.onUploaderComplete=function(e,t,n){!n.success&&r.errorCallback?r.errorCallback(n,t):n.success&&r.successCallback&&r.successCallback(e,t,n)},this.onUploaderError=function(e,t,n){r.errorCallback&&r.errorCallback({error:n},t)},this.onUploaderProgress=function(e,t,n,a){var o=Math.round(n/a*100);r.progressCallback&&r.progressCallback(n,a,o,t)},this.enableUploader=function(e,t,n,a){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"unknown",c=arguments[5];t&&(r.progressCallback=t),n&&(r.successCallback=n),a&&(r.errorCallback=a),c&&(r.submitCallback=c),i()().then(function(t){var n=t.default;r.uploader=new n.FineUploaderBasic({debug:s.a.DEBUG,button:e,dropZoneElements:[e],inputTitle:r.inputTitle,multiple:r.allowMultipleFiles,text:{defaultResponseError:"An unknown upload error occurred."},request:{endpoint:r.getUploadUrl(),inputName:"img",forceMultipart:!0,customHeaders:{"X-CSRFToken":o.a.getCSRFToken(),"X-UPLOAD-SOURCE":l},params:r.params},callbacks:{onUpload:r.onUploaderSubmit,onComplete:r.onUploaderComplete,onProgress:r.onUploaderProgress,onError:r.onUploaderError},validation:{acceptFiles:r.acceptFiles||""}}),e&&Object.assign(e.style,r.styleOverrides)})},this.styleOverrides={overflow:"visible"},this.params=t||{},this.inputTitle=l||"file input",this.allowMultipleFiles=n,this.acceptFiles=c.join(",")}return e.prototype.getUploadUrl=function e(){return c.a.absolutify("/upload-image/")},e}();t.a=u},FHbT:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("d6ZO"),l=n.n(i),s=n("WjSu"),c=n("W/Cr"),u=n("CrRE"),p=n("ZtCB"),d=n.n(p),m=n("FJZF"),h=n("dCTv"),f=n("ok+N"),b={addTastemaker:"addTastemaker",addTastemakerConfirmation:"addTastemakerConfirmation",blockConfirmation:"blockConfirmation",blockWarning:"blockWarning",editProfile:"editProfile",reportBug:"reportBug",reportBugSuccess:"reportBugSuccess",reportBugFailure:"reportBugFailure",sendProfile:"sendProfile",signupLogin:"signupLogin",unblock:"unblock"},E=b,g=n("gEaE"),y=function e(t){return Boolean(t.trim())},C=function(e){function t(n){a(this,t);var r=o(this,e.call(this,n));return r.handleSelectListChange=function(e){var t=e.value;r.setState({bugtype:t})},r.handleSubmit=function(e){e.preventDefault(),e.stopPropagation(),r.setState({isSubmitting:!0});var t=window.navigator.userAgent,n=m.a.getCurrentUrl(),a=r.props.experiments.getActiveExperimentInfo(),o=void 0;switch(r.state.bugtype){case"FEATURE_ERROR":o="Functionality";break;case"IRRELEVANT_RESULT":o="Relevance";break;case"DESIGN_ERROR":o="Visual";break;case"COPY_ERROR":o="Linguistic";break;default:o="Functionality"}var i={activatedExperiments:a,bugtype:r.state.bugtype,description:r.state.description,environment:t,platform:3===s.a.instance.site_type?"sterling":"web",title:r.state.title,url:n,userImpact:o,username:r.props.username,advertiserId:r.props.advertiserId,image_url:r.state.imageUrl,filename:r.state.uploadComplete};r.state.imageUrl&&(i.image_url=r.state.imageUrl,i.filename=r.state.uploadComplete),d.a.create("ReportErrorResource",i).callCreate().then(function(e){e.resource_response.data.errorMessages?r.setState({confirmModal:b.reportBugFailure,isSubmitting:!1}):r.setState({confirmModal:b.reportBugSuccess,isSubmitting:!1})}).catch(function(){r.setState({isSubmitting:!1,confirmModal:b.reportBugFailure})})},r.handleClearFailure=function(){r.setState({confirmModal:!1})},r.handleUploadFailure=function(){r.setState({uploadComplete:c.a._("Upload failed!"),uploadPercent:null})},r.handleUploadSuccess=function(e,t,n){r.setState({imageUrl:n.image_url,uploadComplete:t,uploadPercent:null})},r.handleTitleChange=function(e){var t=e.value;r.setState({title:t})},r.handleDescriptionChange=function(e){var t=e.value;r.setState({description:t})},r.uploadProgress=function(e,t,n){r.setState({uploadPercent:n,uploadComplete:!1})},r.state={bugtype:"FEATURE_ERROR",confirmModal:!1,description:"",imageUrl:null,isSubmitting:!1,title:"",uploadComplete:!1,uploadPercent:null},r}return r(t,e),t.prototype.componentDidMount=function e(){var t=this.handleUploadSuccess,n=this.handleUploadFailure,a=this.uploadProgress;(new u.a).enableUploader(this.button,a,t,n)},t.prototype.render=function e(){var t=this,n=this.props.onClearModal,a=this.handleClearFailure,o=this.handleSubmit,r=this.state,l=r.bugtype,s=r.confirmModal,u=r.description,p=r.isSubmitting,d=r.uploadComplete,m=r.uploadPercent,h=r.title,f=[{value:"FEATURE_ERROR",label:c.a._("Something is broken")},{value:"IRRELEVANT_RESULTS",label:c.a._("Irrelevant search, Pin, or ad")},{value:"DESIGN_ERROR",label:c.a._("Design is wrong")},{value:"COPY_ERROR",label:c.a._("Translation or copy is wrong")}],E=null;d?E=d:m&&(E=m+"%");var C=y(h)&&y(u);return i.createElement("form",{method:"post",onSubmit:o},i.createElement(g.b,{color:"white",paddingX:4,paddingY:5,width:500},i.createElement(g.I,{align:"center",size:"xl",bold:!0},c.a._("Report a Bug")),i.createElement(g.b,{paddingY:3},i.createElement(g.i,null)),i.createElement(g.b,{display:"flex",direction:"column"},i.createElement(g.b,{paddingX:2,paddingY:2,display:"flex",direction:"column",alignItems:"stretch"},i.createElement(g.p,{htmlFor:"bugTitle"},i.createElement(g.I,null,c.a._("Description (Required)"))),i.createElement(g.b,{paddingY:1},i.createElement(g.K,{id:"bugTitle",name:"title",onChange:this.handleTitleChange,type:"text",value:this.state.title}))),i.createElement(g.b,{paddingX:2,paddingY:4,display:"flex",direction:"column",alignItems:"stretch"},i.createElement(g.b,null,i.createElement(g.p,{htmlFor:"description"},i.createElement(g.I,null,c.a._("Steps to Reproduce (Required)")))),i.createElement(g.b,{paddingY:1},i.createElement(g.J,{id:"description",name:"description",onChange:this.handleDescriptionChange,value:this.state.description}))),i.createElement(g.b,{paddingX:2,paddingY:4,display:"flex",direction:"column",alignItems:"stretch"},i.createElement(g.b,null,i.createElement(g.p,{htmlFor:"bugtype"},i.createElement(g.I,null,c.a._("Type","type as in variety or kind")))),i.createElement(g.b,{paddingY:1},i.createElement(g.D,{id:"bugtype",name:"bugtype",onChange:this.handleSelectListChange,options:f,value:l}))),i.createElement(g.b,{paddingX:2,paddingY:4,display:"flex",direction:"column",alignItems:"stretch"},i.createElement(g.b,{paddingY:1},i.createElement(g.I,null,c.a._("Attach a Screenshot"))),i.createElement(g.b,{alignItems:"center",direction:"row",display:"flex",marginstart:-1,marginend:-1},i.createElement("div",{ref:function e(n){t.button=n},style:{overflow:"visible",float:"left"}},i.createElement(g.c,{text:c.a._("Choose file"),size:"sm",type:"button",color:"gray"})),i.createElement(g.b,{flex:"grow",paddingX:2},i.createElement(g.I,{size:"sm",align:"left"},E||c.a._("None")))))),i.createElement(g.b,{paddingY:3},i.createElement(g.i,null)),i.createElement(g.b,null,i.createElement(g.b,{display:"flex",justifyContent:"end",direction:"row",paddingY:2},i.createElement(g.b,{paddingX:2},i.createElement(g.c,{disabled:!C,text:c.a._("Report"),type:"submit",color:"red"})),s&&i.createElement(g.w,{accessibilityCloseLabel:c.a._("Close","hide the view"),accessibilityModalLabel:c.a._("View Bug Report Submission Status"),heading:s===b.reportBugSuccess?c.a._("Bug Reported!"):c.a._("Oops!"),onDismiss:s===b.reportBugFailure?a:n},i.createElement(g.b,{paddingX:4,paddingY:4},i.createElement(g.I,null,s===b.reportBugSuccess?c.a._("Sorry about that. We’ve been notified and will work on a fix! High-five for reporting. "):c.a._("Something went wrong and we were unable to report your bug. We’re looking into it!"))))),p&&i.createElement(g.b,{display:"flex",justifyContent:"end",direction:"row",paddingY:2,paddingX:2},i.createElement(g.I,null,c.a._("Submitting..."))))))},t}(i.Component),v=t.a=Object(h.b)(C)},VOdg:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("d6ZO"),l=n.n(i),s=n("FqaO"),c=n("bbMF"),u=n("BVzu"),p=n("W/Cr"),d=n("nM9s"),m=n("IaRT"),h=n.n(m),f=n("Cjb7"),b=n("Kqaz"),E=n("dCTv"),g=function(e){function t(){var n,r,i;a(this,t);for(var l=arguments.length,c=Array(l),u=0;u<l;u++)c[u]=arguments[u];return n=r=o(this,e.call.apply(e,[this].concat(c))),r.handleInstallButtonClick=function(){r.installExtension(),r.props.contextLog(101,{component:7,element:456})},r.handleCancelInstallButtonClick=function(){s.set("extensionNag","true"),f.a.instance.publish("site","ignoreExtensionNag"),r.destroy()},r.destroy=function(){r.props.onHide(),f.a.instance.publish("reactButtonUpsell","destroyModal")},r.suppress=function(){return s.get("extensionNag")},i=n,o(r,i)}return r(t,e),t.prototype.installExtension=function e(){var t=this,n=this.props.isExtensionInstalled;s.set("extensionNag","true"),n?u.a.showError(p.a._("Oops! You already have the browser button.")):c.a.handleExtensionInstall(function(){return t.destroy()},null)},t.prototype.render=function e(){var t=this.props.isExtensionInstalled||this.suppress(),n=t?"primary":"default",a=t?p.a._("Got it"):p.a._("Not now"),o=p.a._("Get our browser button"),r=t?null:l.a.createElement(d.a,{id:"installExtensionButton",onClick:this.handleInstallButtonClick,size:"small",text:o,type:"primary"});return l.a.createElement("div",{className:"BrowserButtonUpsell"},l.a.createElement("div",{className:"BrowserButtonUpsell__promoWrapper",onClick:this.handleInstallButtonClick,role:"button"},l.a.createElement("div",{className:"BrowserButtonUpsell__promoHeader"},p.a._("Save creative ideas from around the web with one click")),l.a.createElement("div",{className:"browserWrapper"},l.a.createElement("div",{className:"BrowserButtonUpsell__zoomImg"}))),l.a.createElement("div",{className:"formFooter"},l.a.createElement("div",{className:"formFooterButtons"},l.a.createElement(d.a,{id:"cancelInstallButton",onClick:this.handleCancelInstallButtonClick,size:"small",text:a,type:n}),r)))},t}(i.Component);g.defaultProps={isExtensionInstalled:!1,onHide:function e(){}},t.a=Object(b.a)(g)},mkbL:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("d6ZO"),l=n.n(i),s=n("DUIN"),c=n("FqaO"),u=n("Cjx+"),p=n("bbMF"),d=n("lip+"),m=n("BAXv"),h=n("GGB8"),f=n.n(h),b=n("W/Cr"),E=n("nM9s"),g=n("IaRT"),y=n.n(g),C=n("9TqZ"),v=n("WBZ1"),w=n.n(v),_=n("MQ2h"),k=n.n(_),x=n("Kqaz"),O=n("dCTv"),R=n("gEaE"),S="visible",U="hide",P="show",B=10,I=function(e){function t(){var n,r,i;a(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=r=o(this,e.call.apply(e,[this].concat(s))),r.state={isHelpFlyoutOpen:!1,visible:!1,isPrivacyHidden:!1},r.onScroll=function(){if(r.props.renderPrivacyButton){var e=window.pageYOffset;if(void 0===window.pageXOffset){var t=document.body?document.body.scrollTop:0;e=document.documentElement?document.documentElement.scrollTop:t}r.displayPrivacy?e>B?r.setState({isPrivacyHidden:!1}):0===e&&r.setState({isPrivacyHidden:!0}):r.setState({isPrivacyHidden:!1})}},r.handleQuestionMarkClick=function(){r.props.contextLog(101,{component:218}),r.setState({isHelpFlyoutOpen:!r.state.isHelpFlyoutOpen})},r.logHelpButtonClick=function(){r.props.contextLog(101,{component:218,element:281})},r.extensionInstalled=!1,r.extensionIgnored=!1,r.displayPrivacy=!1,i=n,o(r,i)}return r(t,e),t.prototype.componentDidMount=function e(){var t=this;this.displayPrivacy="/"===window.location.pathname,this.onScroll(),this.scrollHn=w()(this.onScroll,100),window.addEventListener("scroll",this.scrollHn),this.extensionInstalled=p.a.isExtensionInstalled(),this.extensionIgnored=c.get("extensionNag"),this.props.hidden||this.context.userAgent.isMobile||setTimeout(function(){t.setState({visible:!0})},2e3)},t.prototype.componentWillUnmount=function e(){window.removeEventListener("scroll",this.scrollHn)},t.prototype.render=function e(){var t,n=this,a=this.state,o=a.visible,r=a.isPrivacyHidden,i=this.props,s=i.chatheadsRendered,c=i.experiments,p=i.hideAddButton,h=i.renderPrivacyButton,g=this.context.country,y=f()((t={aboveChatheads:s,footerButtons:!0},t[S]=o,t[U]=r,t[P]=!r,t));return this.context.userAgent.isMobile?null:l.a.createElement("div",{className:"footerButtonsWrapper"},l.a.createElement("div",{className:y},p?null:l.a.createElement(u.a,{experiments:c}),l.a.createElement("div",{className:"buttonInoutWrapper helpButtonWrapper",style:{margin:"0 12.5px 0"}},l.a.createElement("div",{ref:function e(t){n.anchor=t}},l.a.createElement(E.a,{accessibilityLabel:b.a._("More"),className:"moreFooter footerIcon",onClick:this.handleQuestionMarkClick,text:b.a._("More"),type:"borderless",rounded:!1,showText:!1},l.a.createElement(R.m,{accessibilityLabel:"",color:"darkGray",icon:"question-mark",size:14}))),this.state.isHelpFlyoutOpen?l.a.createElement(R.j,{onDismiss:function e(){return n.setState({isHelpFlyoutOpen:!1})},anchor:this.anchor,size:"lg"},l.a.createElement(d.a,null,function(e){return l.a.createElement(C.a,{country:g,onClick:function e(){return n.setState({isHelpFlyoutOpen:!1})},user:e})})):null),h?l.a.createElement("div",{className:"buttonInoutWrapper privacyPolicyWrapper"},l.a.createElement("a",{className:"nonEuPrivacyPolicy",href:m.a.GEN.templateConst.settings.ABOUT_PRIVACY_URL},b.a._("Privacy"))):null))},t}(i.Component);I.contextTypes={country:y.a.string,userAgent:y.a.shape({isMobile:y.a.bool.isRequired}).isRequired};var T=function e(t){return{chatheadsRendered:!!t.ui.conversations.chatheads.length,feedbackRendered:!!t.ui.conversations.feedback}};t.default=Object(_.compose)(Object(s.connect)(T),x.a,O.b)(I)}});