(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e8cba82"],{"1ea2":function(e,t,i){},2037:function(e,t,i){"use strict";var n=i("33f1"),s=i.n(n);s.a},"33f1":function(e,t,i){},4570:function(e,t,i){var n={"./dark.scss":["0686","chunk-743e4b25"],"./light.scss":["0b86","chunk-74524b79"]};function s(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return i.e(t[1]).then((function(){return i.t(s,7)}))}s.keys=function(){return Object.keys(n)},s.id="4570",e.exports=s},"51c9":function(e,t,i){"use strict";var n=i("f016"),s=i.n(n);s.a},6972:function(e,t,i){"use strict";var n=i("babe"),s=i.n(n);s.a},8283:function(e,t,i){"use strict";var n=i("1ea2"),s=i.n(n);s.a},"903d":function(e,t,i){var n={"./dark.scss":["1d9c","chunk-746154ec"],"./light.scss":["d500","chunk-771a7e38"]};function s(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return i.e(t[1]).then((function(){return i.t(s,7)}))}s.keys=function(){return Object.keys(n)},s.id="903d",e.exports=s},"96c0":function(e,t,i){var n={"./dark.scss":["a4ad","chunk-76f08193"],"./light.scss":["5ab3","chunk-7498e9ec"]};function s(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return i.e(t[1]).then((function(){return i.t(s,7)}))}s.keys=function(){return Object.keys(n)},s.id="96c0",e.exports=s},babe:function(e,t,i){},d2a8:function(e,t,i){var n={"./dark.scss":["6e66","chunk-74a82e1a"],"./light.scss":["7f1c","chunk-74b6aca8"]};function s(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return i.e(t[1]).then((function(){return i.t(s,7)}))}s.keys=function(){return Object.keys(n)},s.id="d2a8",e.exports=s},f016:function(e,t,i){},f826:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isAuthenticated?i("div",{staticClass:"d-flex flex-column flex-root"},[i("KTHeaderMobile"),i("div",{staticClass:"d-flex flex-row flex-column-fluid page"},[e.asideEnabled?i("KTAside"):e._e(),i("div",{staticClass:"d-flex flex-column flex-row-fluid wrapper",attrs:{id:"kt_wrapper"}},[i("KTHeader"),i("div",{staticClass:"content d-flex flex-column flex-column-fluid",attrs:{id:"kt_content"}},[i("div",{staticClass:"d-flex flex-column-fluid"},[i("div",{class:{"container-fluid":e.contentFluid,container:!e.contentFluid}},[i("transition",{attrs:{name:"fade-in-up"}},[i("router-view")],1)],1)])])],1)],1),i("KTScrollTop")],1):e._e()},s=[],a=i("5530"),o=i("2f62"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"kt_aside",staticClass:"aside aside-left aside-fixed d-flex flex-column flex-row-auto",attrs:{id:"kt_aside"},on:{mouseover:e.mouseEnter,mouseleave:e.mouseLeave}},[i("KTBrand"),i("div",{staticClass:"aside-menu-wrapper flex-column-fluid",attrs:{id:"kt_aside_menu_wrapper"}},[i("div",{ref:"kt_aside_menu",staticClass:"aside-menu my-4",class:e.asideMenuClass,attrs:{id:"kt_aside_menu","data-menu-vertical":"1","data-menu-dropdown-timeout":"500"}},[i("perfect-scrollbar",{staticClass:"aside-menu scroll",staticStyle:{"max-height":"90vh",position:"relative"}},[i("KTMenu")],1)],1)])],1)},l=[],c=(i("a15b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"kt_brand",staticClass:"brand flex-column-auto",attrs:{id:"kt_brand"}},[i("div",{staticClass:"brand-logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:e.siteLogo(),alt:"Logo"}})])],1),e.allowMinimize?i("div",{staticClass:"brand-tools"},[i("button",{ref:"kt_aside_toggle",staticClass:"brand-toggle btn btn-sm px-0",attrs:{id:"kt_aside_toggle"}},[i("span",{staticClass:"svg-icon svg-icon svg-icon-xl"},[i("inline-svg",{staticClass:"svg-icon",attrs:{src:"media/svg/icons/Navigation/Angle-double-left.svg"}})],1)])]):e._e()])}),u=[],d=(i("b64b"),i("53ca")),f=i("6e87"),m=i.n(f),h=function(){var e,t=function(){var t=0;return e&&(t=KTUtil.actualHeight(e)),t};return{init:function(t){e=KTUtil.getById(t)},getElement:function(){return e},getHeight:function(){return t()}}}(),g=h,p=function(){var e,t,i,n=function(){i=new KTToggle(t,e,{targetState:"aside-minimize",toggleState:"active"}),i.on("toggle",(function(e){"undefined"!==typeof KTLayoutStickyCard&&KTLayoutStickyCard.update(),"undefined"!==typeof KTLayoutHeaderMenu&&KTLayoutHeaderMenu.pauseDropdownHover(800),"undefined"!==typeof KTLayoutAsideMenu&&KTLayoutAsideMenu.pauseDropdownHover(800),KTCookie.setCookie("kt_aside_toggle_state",e.getState())})),i.on("beforeToggle",(function(t){!1===KTUtil.hasClass(e,"aside-minimize")&&KTUtil.hasClass(e,"aside-minimize-hover")&&KTUtil.removeClass(e,"aside-minimize-hover")}))};return{init:function(i){t=KTUtil.getById(i),e=KTUtil.getBody(),t&&n()},getElement:function(){return t},getToggle:function(){return i},onToggle:function(e){"undefined"!==typeof i.element&&i.on("toggle",e)}}}(),b=p,v={name:"KTBrand",mounted:function(){g.init(this.$refs["kt_brand"]),b.init(this.$refs["kt_aside_toggle"])},methods:{siteLogo:function(){var e,t=this.layoutConfig("brand.self.theme"),i=this.layoutConfig("self.logo");if("string"===typeof i&&(e=i),"object"===Object(d["a"])(i)&&(e=m.a.get(i,t+"")),"undefined"===typeof e){var n=this.layoutConfig("self.logo");e=n[Object.keys(n)[0]]}return"/"+e}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])(["layoutConfig"])),{},{allowMinimize:function(){return!!this.layoutConfig("aside.self.minimize.toggle")}})},_=v,C=(i("2037"),i("2877")),T=Object(C["a"])(_,c,u,!1,null,"6fea92de",null),y=T.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.menu.length?i("ul",{staticClass:"menu-nav"},[e._l(e.menu,(function(t,n){return[t.hasOwnProperty("items")&&t.items.length&&t.section?i("li",{key:"section_"+n,staticClass:"menu-section"},[i("h4",{staticClass:"menu-text"},[e._v(e._s(t.section))]),i("i",{staticClass:"menu-icon flaticon-more-v2"})]):e._e(),t.hasOwnProperty("items")?i("KTMenuSubgroup",{key:n,attrs:{icon:t.icon,items:t.items,activeChildren:t.activeChildren}},[e._v(e._s(t.text))]):i("KTMenuItem",{key:n,attrs:{icon:t.icon,to:t.to}},[e._v(e._s(t.text))])]}))],2):e._e()},K=[],x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.items.length?i("li",{staticClass:"menu-item menu-item-submenu",class:{"menu-item-open":e.hasActiveChildren(e.activeChildren)},attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[i("a",{staticClass:"menu-link menu-toggle",attrs:{href:"#"}},[i("i",{class:["menu-icon",e.icon]}),i("span",{staticClass:"menu-text"},[e._t("default")],2),i("i",{staticClass:"menu-arrow"})]),i("div",{staticClass:"menu-submenu"},[i("ul",{staticClass:"menu-subnav"},[i("li",{staticClass:"menu-item menu-item-parent",attrs:{"aria-haspopup":"true"}},[i("span",{staticClass:"menu-link"},[i("span",{staticClass:"menu-text"},[e._t("default")],2)])]),e._l(e.items,(function(t,n){return[t.hasOwnProperty("items")&&t.items.length&&t.section?i("li",{key:"section_"+n,staticClass:"menu-section"},[i("h4",{staticClass:"menu-text"},[e._v(e._s(t.section))]),i("i",{staticClass:"menu-icon flaticon-more-v2"})]):e._e(),t.hasOwnProperty("items")?i("KTMenuSubgroup",{key:n,attrs:{icon:t.icon,items:t.items,activeChildren:t.activeChildren}},[e._v(e._s(t.text))]):i("KTMenuItem",{key:n,attrs:{icon:t.icon,to:t.to}},[e._v(e._s(t.text))])]}))],2)])]):e._e()},U=[],w=(i("c975"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.to?i("router-link",{attrs:{to:e.to},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.href,s=t.navigate,a=t.isActive,o=t.isExactActive;return[i("li",{staticClass:"menu-item",class:[a&&"menu-item-active",o&&"menu-item-active"],attrs:{"aria-haspopup":"true","data-menu-toggle":"hover"}},[i("a",{staticClass:"menu-link",attrs:{href:n},on:{click:s}},[i("i",{class:["menu-icon",e.getIcon]},[i("span")]),i("span",{staticClass:"menu-text"},[e._t("default")],2)])])]}}],null,!0)}):e._e()}),O=[],M={name:"KTMenuItem",props:{icon:String,to:String},computed:{getIcon:function(){return void 0===this.icon?"menu-bullet menu-bullet-dot":this.icon}}},j=M,E=Object(C["a"])(j,w,O,!1,null,null,null),B=E.exports,I={name:"KTMenuSubgroup",components:{KTMenuItem:B},props:{icon:String,items:Array,activeChildren:String},methods:{hasActiveChildren:function(e){return-1!==this.$route["path"].indexOf(e)}}},L=I,z=Object(C["a"])(L,x,U,!1,null,null,null),D=z.exports,S={name:"KTMenu",components:{KTMenuSubgroup:D,KTMenuItem:B},computed:Object(a["a"])({},Object(o["c"])("menu",["menu"])),created:function(){this.criarMenu()},methods:Object(a["a"])({},Object(o["b"])("menu",["criarMenu"]))},$=S,H=Object(C["a"])($,k,K,!1,null,null,null),A=H.exports,P=function(){var e,t,i,n=function(){var e=KTUtil.hasClass(t,"aside-offcanvas-default")?"aside-offcanvas-default":"aside";i=new KTOffcanvas(t,{baseClass:e,overlay:!0,closeBy:"kt_aside_close_btn",toggleBy:{target:"kt_aside_mobile_toggle",state:"mobile-toggle-active"}})};return{init:function(i){t=KTUtil.getById(i),e=KTUtil.getBody(),t&&n()},getElement:function(){return t},getOffcanvas:function(){return i},isFixed:function(){return KTUtil.hasClass(e,"aside-fixed")},isMinimized:function(){return KTUtil.hasClass(e,"aside-fixed")&&KTUtil.hasClass(e,"aside-minimize")},isHoverable:function(){return KTUtil.hasClass(e,"aside-fixed")&&KTUtil.hasClass(e,"aside-minimize-hoverable")}}}(),N=P,F=function(){var e,t,i,n=function(){var e,n="1"===KTUtil.attr(t,"data-menu-dropdown")?"dropdown":"accordion";"1"===KTUtil.attr(t,"data-menu-scroll")&&(e={rememberPosition:!0,height:function(){var e=parseInt(KTUtil.getViewPort().height);return KTUtil.isBreakpointUp("lg")&&(e-=KTLayoutBrand.getHeight()),e-=parseInt(KTUtil.css(t,"marginBottom"))+parseInt(KTUtil.css(t,"marginTop")),e}}),i=new KTMenu(t,{scroll:e,submenu:{desktop:n,tablet:"accordion",mobile:"accordion"},accordion:{expandAll:!1}})},s=function(){var i,n;KTUtil.hasClass(e,"aside-fixed")&&KTUtil.hasClass(e,"aside-minimize-hoverable")&&(KTUtil.addEvent(t,"mouseenter",(function(t){t.preventDefault(),!1!==KTUtil.isBreakpointUp("lg")&&(n&&(clearTimeout(n),n=null),i&&(clearTimeout(i),i=null),i=setTimeout((function(){KTUtil.hasClass(e,"aside-minimize")&&KTUtil.isBreakpointUp("lg")&&(KTUtil.addClass(e,"aside-minimize-hover"),F.getMenu().scrollUpdate(),F.getMenu().scrollTop())}),50))})),KTUtil.addEvent(KTLayoutAside.getElement(),"mouseleave",(function(t){t.preventDefault(),!1!==KTUtil.isBreakpointUp("lg")&&(i&&(clearTimeout(i),i=null),n&&(clearTimeout(n),n=null),n=setTimeout((function(){KTUtil.hasClass(e,"aside-minimize-hover")&&KTUtil.isBreakpointUp("lg")&&(KTUtil.removeClass(e,"aside-minimize-hover"),F.getMenu().scrollUpdate(),F.getMenu().scrollTop())}),100))})))};return{init:function(i){e=KTUtil.getBody(),t=KTUtil.getById(i),t&&(n(),s())},getElement:function(){return t},getMenu:function(){return i},pauseDropdownHover:function(e){i&&i.pauseDropdownHover(e)},closeMobileOffcanvas:function(){i&&KTUtil.isMobileDevice()&&i.hide()}}}(),q=F,G={name:"KTAside",data:function(){return{insideTm:0,outsideTm:0}},components:{KTBrand:y,KTMenu:A},mounted:function(){var e=this;this.$nextTick((function(){N.init(e.$refs["kt_aside"]),q.init(e.$refs["kt_aside_menu"])}))},methods:{mouseEnter:function(){this.layoutConfig("aside.self.minimize.hoverable")&&document.body.classList.contains("aside-fixed")&&(this.outsideTm&&(clearTimeout(this.outsideTm),this.outsideTm=null),document.body.classList.contains("aside-minimize")&&(document.body.classList.add("aside-minimize-hover"),document.body.classList.remove("aside-minimize")))},mouseLeave:function(){this.layoutConfig("aside.self.minimize.hoverable")&&document.body.classList.contains("aside-fixed")&&(this.insideTm&&(clearTimeout(this.insideTm),this.insideTm=null),document.querySelector(".aside-menu .scroll")&&(document.querySelector(".aside-menu .scroll").scrollTop=0),document.body.classList.contains("aside-minimize-hover")&&(document.body.classList.remove("aside-minimize-hover"),document.body.classList.add("aside-minimize")))}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])(["layoutConfig","getClasses"])),{},{asideMenuClass:function(){var e=this.getClasses("aside_menu");return"undefined"!==typeof e?e.join(" "):null}})},Q=G,W=Object(C["a"])(Q,r,l,!1,null,null,null),J=W.exports,V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"kt_header",staticClass:"header",class:e.headerClasses,attrs:{id:"kt_header"}},[i("div",{staticClass:"container-fluid d-flex align-items-center justify-content-between"},[i("div",{ref:"kt_header_menu_wrapper",staticClass:"header-menu-wrapper header-menu-wrapper-left"},[e.headerMenuEnabled?i("div",{ref:"kt_header_menu",staticClass:"header-menu header-menu-mobile",class:e.headerMenuClasses,attrs:{id:"kt_header_menu"}},[i("KTBreadcrumb")],1):e._e()]),i("KTTopbar")],1)])},R=[],X=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"topbar"},[i("KTQuickUser")],1)},Y=[],Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"topbar-item"},[i("div",{staticClass:"btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2",attrs:{id:"kt_quick_user_toggle"}},[i("span",{staticClass:"symbol symbol-35 symbol-light-success"},[e._e(),i("span",{staticClass:"symbol-label font-size-h5 font-weight-bold"},[e._v(" "+e._s(e.currentUserPersonalInfo.name.charAt(0).toUpperCase())+" ")])])]),i("div",{ref:"kt_quick_user",staticClass:"offcanvas offcanvas-right p-10",attrs:{id:"kt_quick_user"}},[e._m(0),i("perfect-scrollbar",{staticClass:"offcanvas-content pr-5 mr-n5 scroll",staticStyle:{"max-height":"90vh",position:"relative"}},[i("div",{staticClass:"d-flex align-items-center mt-5"},[i("div",{staticClass:"symbol symbol-100 mr-5"},[i("img",{staticClass:"symbol-label",attrs:{src:e.currentUserPersonalInfo.photo,alt:""}}),i("i",{staticClass:"symbol-badge bg-success"})]),i("div",{staticClass:"d-flex flex-column"},[i("router-link",{staticClass:"font-weight-bold font-size-h5 text-dark-75 text-hover-primary",attrs:{to:"/custom-pages/profile"}},[e._v(" "+e._s(e.getFullName)+" ")]),i("div",{staticClass:"text-muted mt-1"},[e._v("Application Developer")]),i("div",{staticClass:"navi mt-2"},[i("a",{staticClass:"navi-item",attrs:{href:"#"}},[i("span",{staticClass:"navi-link p-0 pb-2"},[i("span",{staticClass:"navi-icon mr-1"},[i("span",{staticClass:"svg-icon svg-icon-lg svg-icon-primary"},[i("inline-svg",{attrs:{src:"media/svg/icons/Communication/Mail-notification.svg"}})],1)]),i("span",{staticClass:"navi-text text-muted text-hover-primary"},[e._v(" "+e._s(e.currentUserPersonalInfo.email)+" ")])])])]),i("button",{staticClass:"btn btn-light-primary btn-bold",on:{click:e.onLogout}},[e._v(" Sign out ")])],1)]),i("div",{staticClass:"separator separator-dashed mt-8 mb-5"}),i("div",{staticClass:"navi navi-spacer-x-0 p-0"},[i("router-link",{staticClass:"navi-item",attrs:{to:"/builder",href:"#"},nativeOn:{click:function(t){return e.closeOffcanvas(t)}}},[i("div",{staticClass:"navi-link"},[i("div",{staticClass:"symbol symbol-40 bg-light mr-3"},[i("div",{staticClass:"symbol-label"},[i("span",{staticClass:"svg-icon svg-icon-md svg-icon-success"},[i("inline-svg",{attrs:{src:"media/svg/icons/General/Notification2.svg"}})],1)])]),i("div",{staticClass:"navi-text"},[i("router-link",{attrs:{to:"/custom-pages/profile"}},[i("div",{staticClass:"font-weight-bold"},[e._v("My Profile")])]),i("div",{staticClass:"text-muted"},[e._v(" Account settings and more "),i("span",{staticClass:"label label-light-danger label-inline font-weight-bold"},[e._v(" update ")])])],1)])])],1),i("div",{staticClass:"separator separator-dashed my-7"})])],1)])},ee=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"offcanvas-header d-flex align-items-center justify-content-between pb-5"},[i("h3",{staticClass:"font-weight-bold m-0"},[e._v(" User Profile ")]),i("a",{staticClass:"btn btn-xs btn-icon btn-light btn-hover-primary",attrs:{href:"#",id:"kt_quick_user_close"}},[i("i",{staticClass:"ki ki-close icon-xs text-muted"})])])}],te=(i("b0c0"),i("f9da")),ie=(i("7db0"),function(){var e,t=function(){var t=KTUtil.find(e,".offcanvas-header"),i=KTUtil.find(e,".offcanvas-content");new KTOffcanvas(e,{overlay:!0,baseClass:"offcanvas",placement:"right",closeBy:"kt_quick_user_close",toggleBy:"kt_quick_user_toggle"}),KTUtil.scrollInit(i,{disableForMobile:!0,resetHeightOnDestroy:!0,handleWindowResize:!0,height:function(){var n=parseInt(KTUtil.getViewPort().height);return t&&(n-=parseInt(KTUtil.actualHeight(t)),n-=parseInt(KTUtil.css(t,"marginTop")),n-=parseInt(KTUtil.css(t,"marginBottom"))),i&&(n-=parseInt(KTUtil.css(i,"marginTop")),n-=parseInt(KTUtil.css(i,"marginBottom"))),n-=parseInt(KTUtil.css(e,"paddingTop")),n-=parseInt(KTUtil.css(e,"paddingBottom")),n-=2,n}})};return{init:function(i){e=KTUtil.getById(i),e&&t()},getElement:function(){return e}}}()),ne=ie,se=i("b2f7"),ae={name:"KTQuickUser",data:function(){return{list:[{title:"Another purpose persuade",desc:"Due in 2 Days",alt:"+28%",svg:"media/svg/icons/Home/Library.svg",type:"warning"},{title:"Would be to people",desc:"Due in 2 Days",alt:"+50%",svg:"media/svg/icons/Communication/Write.svg",type:"success"},{title:"Purpose would be to persuade",desc:"Due in 2 Days",alt:"-27%",svg:"media/svg/icons/Communication/Group-chat.svg",type:"danger"},{title:"The best product",desc:"Due in 2 Days",alt:"+8%",svg:"media/svg/icons/General/Attachment2.svg",type:"info"}]}},mounted:function(){ne.init(this.$refs["kt_quick_user"])},methods:{onLogout:function(){var e=this;this.$store.dispatch(te["d"]).then((function(){return e.$router.push({name:"login"})}))},closeOffcanvas:function(){new se["a"](ne.getElement()).hide()}},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])(["currentUserPersonalInfo"])),{},{getFullName:function(){return this.currentUserPersonalInfo.name+" "+this.currentUserPersonalInfo.surname}})},oe=ae,re=(i("6972"),Object(C["a"])(oe,Z,ee,!1,null,"7604b20c",null)),le=re.exports,ce={name:"KTTopbar",data:function(){return{}},components:{KTQuickUser:le}},ue=ce,de=(i("51c9"),Object(C["a"])(ue,X,Y,!1,null,null,null)),fe=de.exports,me=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"d-flex align-items-center flex-wrap mr-1"},[i("h5",{staticClass:"text-dark font-weight-bold my-2 mr-5"}),i("ul",{staticClass:"breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{staticClass:"subheader-breadcrumbs-home",attrs:{to:"/"}},[i("i",{staticClass:"flaticon2-shelter text-muted icon-1x"})])],1),e._l(e.breadcrumbs,(function(t,n){return[i("li",{key:n+"-"+t.id,staticClass:"breadcrumb-item"},[t.route?i("router-link",{key:n,staticClass:"text-muted",attrs:{to:t.route}},[e._v(" "+e._s(t.title)+" ")]):e._e(),t.route?e._e():i("span",{key:n,staticClass:"text-muted"},[e._v(" "+e._s(t.title)+" ")])],1)]}))],2)])},he=[],ge={name:"KTBreadcrumb",computed:Object(a["a"])({},Object(o["c"])(["breadcrumbs","pageTitle","layoutConfig"]))},pe=ge,be=(i("8283"),Object(C["a"])(pe,me,he,!1,null,null,null)),ve=be.exports,_e=function(){var e,t,i,n=function(){var t=0;return e&&(t=KTUtil.actualHeight(e)+1),t},s=function(){var e;return e=KTUtil.actualHeight(t),e};return{init:function(i,n){e=KTUtil.getById(i),t=KTUtil.getById(n)},isFixed:function(){return KTUtil.hasClass(KTUtil.getBody(),"header-fixed")},isFixedForMobile:function(){return KTUtil.hasClass(KTUtil.getBody(),"header-mobile-fixed")},getElement:function(){return e},getElementForMobile:function(){return t},getHeader:function(){return i},getHeight:function(){return n()},getHeightForMobile:function(){return s()}}}(),Ce=_e,Te=function(){var e,t,i,n,s=function(){n=new KTOffcanvas(i,{overlay:!0,baseClass:"header-menu-wrapper",closeBy:"kt_header_menu_mobile_close_btn",toggleBy:{target:"kt_header_mobile_toggle",state:"mobile-toggle-active"}}),t=new KTMenu(e,{submenu:{desktop:"dropdown",tablet:"accordion",mobile:"accordion"},accordion:{slideSpeed:200,expandAll:!1}}),t.on("linkClick",(function(e){KTUtil.isBreakpointDown("lg")&&n.hide()}))};return{init:function(t,n){e=KTUtil.getById(t),i=KTUtil.getById(n),e&&s()},getMenuElement:function(){return e},getOffcanvasElement:function(){return i},getMenu:function(){return t},pauseDropdownHover:function(e){t&&t.pauseDropdownHover(e)},getOffcanvas:function(){return n},closeMobileOffcanvas:function(){t&&KTUtil.isMobileDevice()&&n.hide()}}}(),ye=Te,ke={name:"KTHeader",components:{KTTopbar:fe,KTBreadcrumb:ve},mounted:function(){Ce.init("kt_header","kt_header_mobile"),ye.init(this.$refs["kt_header_menu"],this.$refs["kt_header_menu_wrapper"])},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])(["layoutConfig","getClasses"])),{},{headerMenuEnabled:function(){return!!this.layoutConfig("header.menu.self.display")},headerClasses:function(){var e=this.getClasses("header");return"undefined"!==typeof e?e.join(" "):null},headerMenuClasses:function(){var e=this.getClasses("header_menu");return"undefined"!==typeof e?e.join(" "):null}})},Ke=ke,xe=Object(C["a"])(Ke,V,R,!1,null,null,null),Ue=xe.exports,we=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header-mobile align-items-center",class:e.headerClasses,attrs:{id:"kt_header_mobile"}},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{alt:"Logo",src:e.headerLogo}})]),i("div",{staticClass:"d-flex align-items-center"},[e.asideEnabled?i("button",{staticClass:"btn p-0 burger-icon burger-icon-left",attrs:{id:"kt_aside_mobile_toggle"}},[i("span")]):e._e(),i("button",{ref:"kt_header_mobile_toggle",staticClass:"btn p-0 burger-icon ml-4",attrs:{id:"kt_header_mobile_toggle"}},[i("span")]),i("button",{ref:"kt_header_mobile_topbar_toggle",staticClass:"btn btn-hover-text-primary p-0 ml-2",attrs:{id:"kt_header_mobile_topbar_toggle"}},[i("span",{staticClass:"svg-icon svg-icon-xl"},[i("inline-svg",{staticClass:"svg-icon",attrs:{src:"media/svg/icons/General/User.svg"}})],1)])])])},Oe=[],Me=function(){var e,t=function(){new KTToggle(e,KTUtil.getBody(),{targetState:"topbar-mobile-on",toggleState:"active"})};return{init:function(i){e=KTUtil.getById(i),e&&t()},getToggleElement:function(){return e}}}(),je=Me,Ee={name:"KTHeaderMobile",components:{},mounted:function(){je.init(this.$refs["kt_header_mobile_topbar_toggle"])},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])(["layoutConfig","getClasses"])),{},{headerLogo:function(){return"/"+this.layoutConfig("self.logo.dark")},headerClasses:function(){var e=this.getClasses("header_mobile");return"undefined"!==typeof e?e.join(" "):null},asideEnabled:function(){return!!this.layoutConfig("aside.self.display")}})},Be=Ee,Ie=Object(C["a"])(Be,we,Oe,!1,null,null,null),Le=Ie.exports,ze=(i("4160"),i("d3b7"),i("ac1f"),i("25f0"),i("1276"),i("159b"),i("1020")),De=i("27ca"),Se={config:null,init:function(e){"undefined"!==typeof e&&(this.config=e),this.initLayout(),this.initHeader(),this.initSubheader(),this.initAside(),this.initFooter(),this.initThemes()},initLayout:function(){if(m.a.has(this.config,"self.body.class")){var e=m.a.get(this.config,"self.body.class").toString();if(e){var t=e.split(" ");t.forEach((function(e){De["a"].dispatch(ze["a"],e)}))}}var i=m.a.get(this.config,"self.body.background-image");"undefined"!==typeof i&&(document.body.style.backgroundImage="url(".concat(i,")")),De["a"].dispatch(ze["a"],"quick-panel-right"),De["a"].dispatch(ze["a"],"demo-panel-right"),De["a"].dispatch(ze["a"],"offcanvas-right"),De["a"].dispatch(ze["c"],"header-menu-wrapper-on")},initHeader:function(){m.a.get(this.config,"header.self.fixed.desktop")?(De["a"].dispatch(ze["a"],"header-fixed"),De["a"].dispatch(ze["b"],{position:"header",className:"header-fixed"})):De["a"].dispatch(ze["a"],"header-static"),m.a.get(this.config,"header.self.fixed.mobile")&&(De["a"].dispatch(ze["a"],"header-mobile-fixed"),De["a"].dispatch(ze["b"],{position:"header_mobile",className:"header-mobile-fixed"})),m.a.get(this.config,"header.menu.self.display")&&(De["a"].dispatch(ze["b"],{position:"header_menu",className:"header-menu-layout-".concat(m.a.get(this.config,"header.menu.self.layout"))}),m.a.get(this.config,"header.menu.self.root-arrow")&&De["a"].dispatch(ze["b"],{position:"header_menu",className:"header-menu-root-arrow"}))},initSubheader:function(){m.a.get(this.config,"subheader.fixed")&&m.a.get(this.config,"header.self.fixed.desktop")&&De["a"].dispatch(ze["a"],"subheader-fixed"),m.a.get(this.config,"subheader.display")&&De["a"].dispatch(ze["a"],"subheader-enabled"),m.a.has(this.config,"subheader.style")&&De["a"].dispatch(ze["a"],"subheader-".concat(m.a.get(this.config,"subheader.style")))},initAside:function(){De["a"].dispatch(ze["c"],"aside-enabled"),De["a"].dispatch(ze["c"],"aside-fixed"),De["a"].dispatch(ze["c"],"aside-static"),De["a"].dispatch(ze["c"],"aside-minimize"),!0===m.a.get(this.config,"aside.self.display")&&(De["a"].dispatch(ze["a"],"aside-enabled"),m.a.get(this.config,"aside.self.fixed")?(De["a"].dispatch(ze["a"],"aside-fixed"),De["a"].dispatch(ze["b"],{position:"aside",className:"aside-fixed"})):De["a"].dispatch(ze["a"],"aside-static"),m.a.get(this.config,"aside.self.minimize.default")&&De["a"].dispatch(ze["a"],"aside-minimize"),m.a.get(this.config,"aside.menu.dropdown")&&De["a"].dispatch(ze["b"],{position:"aside_menu",className:"aside-menu-dropdown"}))},initFooter:function(){m.a.get(this.config,"footer.fixed")&&De["a"].dispatch(ze["a"],"footer-fixed")},initThemes:function(){if(m.a.get(this.config,"header.self.theme")){var e=m.a.get(this.config,"header.self.theme");i("4570")("./".concat(e,".scss"))}if(m.a.get(this.config,"header.menu.desktop.submenu.theme")){var t=m.a.get(this.config,"header.menu.desktop.submenu.theme");i("96c0")("./".concat(t,".scss"))}if(m.a.get(this.config,"brand.self.theme")){var n=m.a.get(this.config,"brand.self.theme");i("d2a8")("./".concat(n,".scss"))}if(m.a.get(this.config,"aside.self.theme")){var s=m.a.get(this.config,"aside.self.theme");i("903d")("./".concat(s,".scss"))}}},$e=Se,He=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"kt_scrolltop",staticClass:"scrolltop",attrs:{id:"kt_scrolltop"}},[i("span",{staticClass:"svg-icon"},[i("inline-svg",{attrs:{src:"media/svg/icons/Navigation/Up-2.svg"}})],1)])},Ae=[],Pe=function(){var e,t=function(){new KTScrolltop(e,{offset:300,speed:600})};return{init:function(i){e=KTUtil.getById(i),e&&t()},getElement:function(){return e}}}(),Ne=Pe,Fe={name:"KTScrollTop",mounted:function(){Ne.init(this.$refs["kt_scrolltop"])}},qe=Fe,Ge=Object(C["a"])(qe,He,Ae,!1,null,null,null),Qe=Ge.exports,We={name:"Layout",components:{KTAside:J,KTHeader:Ue,KTHeaderMobile:Le,KTScrollTop:Qe},beforeMount:function(){this.$store.dispatch(ze["a"],"page-loading"),$e.init(this.layoutConfig())},mounted:function(){var e=this;this.isAuthenticated||this.$router.push({name:"login"}),setTimeout((function(){e.$store.dispatch(ze["c"],"page-loading")}),2e3)},methods:{},computed:Object(a["a"])(Object(a["a"])({},Object(o["c"])(["isAuthenticated","breadcrumbs","pageTitle","layoutConfig"])),{},{contentFluid:function(){return"fluid"===this.layoutConfig("content.width")},asideEnabled:function(){return!!this.layoutConfig("aside.self.display")}})},Je=We,Ve=Object(C["a"])(Je,n,s,!1,null,null,null);t["default"]=Ve.exports}}]);
//# sourceMappingURL=chunk-5e8cba82.09220740.js.map