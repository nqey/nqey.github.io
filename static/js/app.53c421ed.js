(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("56d7")},"01d6":function(t,e,n){},"03b4":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAGFBMVEVHcEzn5+fm5ubm5ubm5ubT09OhoaGpqamHw3X9AAAABHRSTlMAgONJKPUkAQAAAGhJREFUGNNdztEJgDAMANHrDm7gJlJxgdoN6gTuj9hSjJe/g0cSlhxnJf16gz9AAAEmOEre794D7C3XMnqAerbhJ7jK7KTuIPgXhH0dhHuEJ+HbEDupJ0AAAQQQQAABBBBAAAEEEFCnB9wiOt9j0hh1AAAAAElFTkSuQmCC"},"056d":function(t,e,n){"use strict";var o=n("05b9"),i=n.n(o);i.a},"05b9":function(t,e,n){},"0dc0":function(t,e,n){"use strict";var o=n("9ab7"),i=n.n(o);i.a},"24ab":function(t,e,n){},"289f":function(t,e,n){"use strict";var o=n("b8eb"),i=n.n(o);i.a},"2c08":function(t,e,n){t.exports=n.p+"static/img/icon_jt.186a284d.svg"},"482b":function(t,e,n){"use strict";var o=n("01d6"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("7549"),n("39e1"),n("f99f"),n("415a");var o=n("6e6d"),i=n("7893"),s=n.n(i),a=(n("24ab"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),c=[],l={name:"App"},r=l,u=n("6691"),m=Object(u["a"])(r,a,c,!1,null,null,null),d=m.exports,p=(n("ae8d"),n("c478")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("common-header"),n("cs"),n("router-view"),n("common-footer")],1)},f=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"header",staticClass:"common-header"},[n("div",{staticStyle:{position:"absolute",height:"200px",width:"100%","background-image":"linear-gradient(0deg, rgba(0,0,0,0.00) 0%, #000334 100%)"}}),n("div",{staticClass:"page-container"},[n("router-link",{attrs:{to:{name:"home"}}},[n("img",{staticClass:"common-header__logo",attrs:{src:t.logo}})]),n("el-menu",{ref:"menu",staticClass:"top-menum",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-submenu",{ref:"submenu",attrs:{index:"home","popper-class":"topmenu-wrapper","popper-append-to-body":"","show-timeout":50,"hide-timeout":100},nativeOn:{mouseover:function(e){return t.handleOpen(e)},mouseout:function(e){return t.handleClose(e)}}},[n("template",{slot:"title"},[n("router-link",{attrs:{to:{name:"home"}}},[t._v("产品")])],1),n("el-menu-item",{staticClass:"common-menu-cpgk__icon",attrs:{index:"productProfile"}},[n("router-link",{attrs:{to:{name:"home"}}},[n("i",{staticClass:"menu-item__icon"}),n("span",{staticClass:"menu-item__words"},[t._v("产品概况")])])],1),n("el-menu-item",{staticClass:"common-menu-ct__icon",attrs:{index:"deliveryTms"}},[n("router-link",{attrs:{to:{name:"deliveryTms"}}},[n("i",{staticClass:"menu-item__icon"}),n("span",{staticClass:"menu-item__words"},[t._v("西域马城配TMS")])])],1),n("el-menu-item",{staticClass:"common-menu-rl__icon",attrs:{index:"deliveryEngine"}},[n("router-link",{attrs:{to:{name:"deliveryEngine"}}},[n("i",{staticClass:"menu-item__icon"}),n("span",{staticClass:"menu-item__words"},[t._v("睿灵智慧排线引擎")])])],1),n("el-menu-item",{staticClass:"common-menu-yy__icon",attrs:{index:"monitoringSystem"}},[n("router-link",{attrs:{to:{name:"monitoringSystem"}}},[n("i",{staticClass:"menu-item__icon"}),n("span",{staticClass:"menu-item__words"},[t._v(" 洞明在途监控系统")])])],1),n("el-menu-item",{staticClass:"common-menu-ch__icon",attrs:{index:"dataPlatform"}},[n("router-link",{attrs:{to:{name:"dataPlatform"}}},[n("i",{staticClass:"menu-item__icon"}),n("span",{staticClass:"menu-item__words"},[t._v("瀚宇大数据平台")])])],1)],2),n("el-menu-item",{attrs:{index:"casePresentation"}},[n("router-link",{attrs:{to:{name:"casePresentation"}}},[t._v("案例介绍")])],1),n("el-menu-item",{attrs:{index:"serviceProcess"}},[n("router-link",{attrs:{to:{name:"serviceProcess"}}},[t._v("服务流程")])],1),n("el-menu-item",{attrs:{index:"aboutUs"}},[n("router-link",{attrs:{to:{name:"aboutUs"}}},[t._v("关于我们")])],1)],1),n("div",{staticClass:"common-header__right"},[n("el-button",{staticClass:"is-little-empty",attrs:{size:"mini",round:""},nativeOn:{click:function(e){return t.$store.dispatch("openQr")}}},[t._v("免费开通")])],1)],1)])},b=[],g=(n("596c"),n("e347")),_=n.n(g),A={data:function(){return{logo:_.a,activeIndex:this.$route.name}},methods:{handleSelect:function(t,e){},handleOpen:function(){this.$refs.header.className+=" bg-is-open"},handleClose:function(){this.$refs.header.className="common-header"}},mounted:function(){document.getElementsByClassName("topmenu-wrapper")[0].onmouseover=this.handleOpen,document.getElementsByClassName("topmenu-wrapper")[0].onmouseout=this.handleClose,window.thatH=this}},h=A,y=(n("289f"),Object(u["a"])(h,C,b,!1,null,null,null)),x=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common-footer"},[n("div",{staticClass:"footer-phone"},[n("div",{staticClass:"page-container"},[n("h2",{staticClass:"footer-phone__num"},[t._v("点击右侧在线咨询按钮，立即开启免费城配智能SaaS时代")]),n("el-button",{staticClass:"footer-phone__btn is-white-bg",attrs:{size:"mini",round:""},nativeOn:{click:function(e){return t.$store.dispatch("openQr")}}},[t._v("免费开通")])],1)]),n("div",{staticClass:"page-container footer-menu"},[n("ul",{staticClass:"bottom-menu"},[n("li",{staticClass:"bottom-menu__item"},[n("router-link",{attrs:{to:{name:"deliveryTms"}}},[t._v("西域马TMS城配系统")])],1),n("li",{staticClass:"bottom-menu__item"},[n("router-link",{attrs:{to:{name:"deliveryEngine"}}},[t._v("睿灵智慧排线引擎")])],1),n("li",{staticClass:"bottom-menu__item"},[n("router-link",{attrs:{to:{name:"monitoringSystem"}}},[t._v(" 洞明在途监控系统")])],1),n("li",{staticClass:"bottom-menu__item"},[n("router-link",{attrs:{to:{name:"dataPlatform"}}},[t._v("瀚宇大数据平台")])],1),n("li",{staticClass:"bottom-menu__item"},[n("router-link",{attrs:{to:{name:"casePresentation"}}},[t._v("案例介绍")])],1),n("li",{staticClass:"bottom-menu__item"},[n("router-link",{attrs:{to:{name:"serviceProcess"}}},[t._v("服务流程")])],1),n("li",{staticClass:"bottom-menu__item"},[n("router-link",{attrs:{to:{name:"aboutUs"}}},[t._v("关于我们")])],1)]),t._m(0)])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"bottom-menu bottom-menu-out"},[n("li",{staticClass:"bottom-menu__item"},[t._v("隐私政策")]),n("li",{staticClass:"bottom-menu__item"},[t._v("APP下载")]),n("li",{staticClass:"bottom-menu__item"},[t._v("网站地图")]),n("li",{staticClass:"bottom-menu__item is-outlink"},[n("span",[t._v("四川西域马科技有限公司")]),n("span",[t._v("Copyright©2017")]),n("span",[t._v("蜀ICP备16018483号-4")])])])}],B={components:{},data:function(){return{}}},S=B,E=(n("e25c"),Object(u["a"])(S,k,w,!1,null,null,null)),D=E.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customer-service"},[t.$store.getters.getIsQrCodeShow?n("div",[n("div",{staticClass:"layer"}),n("div",{staticClass:"layerContent"},[n("p",[t._v("请点击右侧的"),n("span",{staticStyle:{"font-size":"24px"}},[t._v("“在线咨询”")]),n("img",{attrs:{src:t.jturl}})]),n("div",{staticClass:"is-white-bg",on:{click:t.close}},[t._v("我知道了")])])]):t._e()])},F=[],Q=n("e0e1"),j=n.n(Q),T=n("03b4"),M=n.n(T),J=n("2c08"),N=n.n(J),I={name:"customer-service",props:{},data:function(){return{tkewm:j.a,jturl:N.a,closeTc:M.a,isCustomerServiceShow1:!1,isCustomerServiceShow2:!1}},computed:{},methods:{mouseoverFn:function(){this.isCustomerServiceShow1=!0},mouseoutFn:function(){this.isCustomerServiceShow1=!1},mouseoverFn2:function(){this.isCustomerServiceShow2=!0},mouseoutFn2:function(){this.isCustomerServiceShow2=!1},open:function(){this.$store.dispatch("openQr")},close:function(){this.$store.dispatch("closeQr")}},watch:{},components:{},beforeCreate:function(){},cteated:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},O=I,H=(n("482b"),Object(u["a"])(O,P,F,!1,null,"5bc6ecc3",null)),U=H.exports,Y={components:{CommonHeader:x,CommonFooter:D,cs:U},name:"layout",data:function(){return{}}},q=Y,R=Object(u["a"])(q,v,f,!1,null,null,null),V=R.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"banner"}},[n("div",{staticClass:"banner"},[n("img",{staticStyle:{position:"absolute",right:"0px",top:"0px"},attrs:{src:t.bannerbj}}),n("img",{attrs:{src:t.bgyy,id:t.images},on:{load:t.loadImage}})]),n("div",{staticClass:"area-descriptions"},[n("p",{staticClass:"carousel-title-text"},[t._v(t._s(t.descriptions.title))]),n("p",{staticClass:"carousel-subtitle-text"},[t._v(t._s(t.descriptions.subtitle))]),n("p",{staticClass:"carousel-description-text"},[t._v(t._s(t.descriptions.description))])])]),n("div",{attrs:{id:"nav-menu"}},[n("el-menu",{staticClass:"el-menu-demo",class:{menu__fixed:t.isMenuFixed},attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("西域马城配TMS")]),n("el-menu-item",{attrs:{index:"2"}},[t._v("睿灵智慧排线引擎")]),n("el-menu-item",{attrs:{index:"3"}},[t._v(" 洞明在途监控系统")]),n("el-menu-item",{attrs:{index:"4"}},[t._v("瀚宇大数据平台")])],1)],1),n("div",{staticClass:"block__bg block1__bg",attrs:{id:"nav-block1"}},[n("div",{staticClass:"block-content content1__bg"},[n("div",{attrs:{id:[1==t.activeIndex?t.activeClass:t.errorClass]}},[n("div",{staticClass:"block-content-title"},[t._v("西域马专业城配TMS系统")]),n("p",{staticClass:"block-content-text"},[t._v("从零散单调度到项目制运作，从分单排线到多点配送，从司机规范化运作到IoT智能化在途监控，从业")]),n("p",{staticClass:"block-content-text",staticStyle:{"padding-top":"0px"}},[t._v("财一体到智能结算，我们最懂城配！TMS——最专业的免费城配物流云服务。")]),n("div",{staticClass:"block-content-icon"},[n("v-icon-box",{attrs:{type:"iconicon_chitu_xiangmuguanlicopy",title:"项目管理"}}),n("span",{staticClass:"icon-plus"},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_chitu_zaitujiankongcopy",title:"在途监控"}}),n("span",{staticClass:"icon-plus"},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_chitu_zhinengjiesuancopy",title:"智能结算"}}),n("span",{staticClass:"icon-plus"},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_chitu_paixiantiaoducopy",title:"排线调度"}}),n("span",{staticClass:"icon-plus"},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_chitu_yidongbangongcopy",title:"移动办公"}})],1),n("el-button",{staticClass:"block-content-button"},[n("router-link",{attrs:{to:{name:"deliveryTms"}}},[t._v(" 了解详情"),n("i",{staticClass:"el-icon-right"})])],1)],1)])]),n("div",{staticClass:"block__bg block2__bg",attrs:{id:"nav-block2"}},[n("div",{staticClass:"block-content content2__bg"},[n("div",{attrs:{id:[2==t.activeIndex?t.activeClass:t.errorClass]}},[n("div",{staticClass:"block-content-title",staticStyle:{color:"#06083C"}},[t._v("睿灵智慧排线引擎")]),n("p",{staticClass:"block-content-text",staticStyle:{color:"#373C41"}},[t._v("在考虑多种业务约束条件的同时，睿灵排线引擎通过运筹优化算法进行运输方案全局最优解的计算，达")]),n("p",{staticClass:"block-content-text",staticStyle:{color:"#373C41","padding-top":"0px"}},[t._v("到运输成本最低，运输效率最高，并且高度满足客户需求的目的。")]),n("div",{staticClass:"block-content-icon",staticStyle:{width:"632px"}},[n("v-icon-box",{attrs:{type:"iconicon_ruiling_quanjuzuiyoucopy",title:"全局最优",color:"#0009DB"}}),n("span",{staticClass:"icon-plus",staticStyle:{color:"#0009DB"}},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_ruiling_duoshouduosongcopy",title:"多收多送",color:"#0009DB"}}),n("span",{staticClass:"icon-plus",staticStyle:{color:"#0009DB"}},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_ruiling_duozhongyueshucopy",title:"多种约束",color:"#0009DB"}}),n("span",{staticClass:"icon-plus",staticStyle:{color:"#0009DB"}},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_ruiling_chengpeidashujucopy",title:"城配大数据",color:"#0009DB"}})],1),n("el-button",{staticClass:"block-content-button inx-button",staticStyle:{background:"#0085FF"}},[n("router-link",{attrs:{to:{name:"deliveryEngine"}}},[n("span",{staticStyle:{color:"#fff"}},[t._v("了解详情"),n("i",{staticClass:"el-icon-right"})])])],1)],1)])]),n("div",{staticClass:"block__bg block3__bg",attrs:{id:"nav-block3"}},[n("div",{staticClass:"block-content content3__bg"},[n("div",{attrs:{id:[3==t.activeIndex?t.activeClass:t.errorClass]}},[n("div",{staticClass:"block-content-title"},[t._v(" 洞明在途监控系统")]),n("p",{staticClass:"block-content-text"},[t._v("在途监控系统基于电子围栏、IoT智能硬件等技术对物流整体履约环节进行监控，并利用系统自动监控")]),n("p",{staticClass:"block-content-text",staticStyle:{"padding-top":"0px"}},[t._v("异常使得这一切无人化和智能化。能大大降低物流运输环节的风险和货损成本。")]),n("div",{staticClass:"block-content-icon",staticStyle:{width:"632px"}},[n("v-icon-box",{attrs:{type:"iconicon_yingyan_dianziweilancopy",title:"电子围栏"}}),n("span",{staticClass:"icon-plus"},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_yingyan_yichangyujingcopy",title:"异常预警"}}),n("span",{staticClass:"icon-plus"},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_yingyan_guijihuifangcopy",title:"轨迹回放"}}),n("span",{staticClass:"icon-plus"},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_yingyan_yidongguanlicopy",title:"移动管理"}})],1),n("el-button",{staticClass:"block-content-button"},[n("router-link",{attrs:{to:{name:"monitoringSystem"}}},[t._v(" 了解详情"),n("i",{staticClass:"el-icon-right"})])],1)],1)])]),n("div",{staticClass:"block__bg block4__bg",attrs:{id:"nav-block4"}},[n("div",{staticClass:"block-content content4__bg"},[n("div",{attrs:{id:[4==t.activeIndex?t.activeClass:t.errorClass]}},[n("div",{staticClass:"block-content-title",staticStyle:{color:"#06083C"}},[t._v("瀚宇大数据平台")]),n("p",{staticClass:"block-content-text",staticStyle:{color:"#373C41"}},[t._v("瀚宇大数据平台具备数仓建设、大数据基础平台、数据桌面、业务主题画像、数据自动任务调度、数据从")]),n("p",{staticClass:"block-content-text",staticStyle:{color:"#373C41","padding-top":"0px"}},[t._v("源到定制化使用等能力，能为您提供从0到1的数据平台建设系统，使您企业跨步提前进入大数据时代。")]),n("div",{staticClass:"block-content-icon"},[n("v-icon-box",{attrs:{type:"iconicon_canghai_shujucangkucopy",title:"数据仓库",color:"#0009DB"}}),n("span",{staticClass:"icon-plus",staticStyle:{color:"#0009DB"}},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_canghai_shujuzhuomiancopy",title:"数据桌面",color:"#0009DB"}}),n("span",{staticClass:"icon-plus",staticStyle:{color:"#0009DB"}},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_canghai_yuanshujuguanlicopy",title:"元数据管理",color:"#0009DB"}}),n("span",{staticClass:"icon-plus",staticStyle:{color:"#0009DB"}},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_canghai_shujuhuaxiangcopy",title:"数据画像",color:"#0009DB"}}),n("span",{staticClass:"icon-plus",staticStyle:{color:"#0009DB"}},[t._v("+")]),n("v-icon-box",{attrs:{type:"iconicon_canghai_renwujinducopy",title:"任务进度",color:"#0009DB"}})],1),n("el-button",{staticClass:"block-content-button inx-button",staticStyle:{background:"#0085FF"}},[n("router-link",{attrs:{to:{name:"dataPlatform"}}},[n("span",{staticStyle:{color:"#fff"}},[t._v("了解详情"),n("i",{staticClass:"el-icon-right"})])])],1)],1)])])])},z=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-icon",style:{color:t.color}},[n("div",{staticClass:"circle",style:{border:t.border+t.color}},[n("i",{staticClass:"iconfont",class:t.type})]),n("p",{staticClass:"text"},[t._v(t._s(t.title))])])},X=[],K={name:"iconBox",props:{title:{type:String},type:{type:String,default:"iconicon_canghai_renwujinducopy"},color:{type:String,default:"#FFFFFF"}},data:function(){return{border:"1px solid "}},computed:{},methods:{},watch:{},components:{},beforeCreate:function(){},cteated:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},W=K,L=(n("056d"),Object(u["a"])(W,Z,X,!1,null,"23c838d6",null)),$=L.exports,tt=n("97e5"),et=n.n(tt),nt=n("ef5a"),ot=n.n(nt),it={name:"demo",props:{value:{type:String}},data:function(){return{activeIndex:"1",activeClass:"listShow_active",errorClass:"listShow",isMenuFixed:!1,images:"",bgyy:et.a,bannerbj:ot.a,descriptions:{title:"西域马科技",subtitle:"物流科技综合服务商",description:"西域马科技深耕城配产业，着力构建城配科技的各类基础设施，为您提供从端到端的专业城配运输管理云平台服务。"}}},computed:{},methods:{handleSelect:function(t){var e=document.getElementById("nav-block1").offsetTop,n=document.getElementById("nav-block2").offsetTop,o=document.getElementById("nav-block3").offsetTop,i=document.getElementById("nav-block4").offsetTop,s={1:e,2:n,3:o,4:i};document.body.scrollTop=s[t]-120,document.documentElement.scrollTop=s[t]-120},scrollActiveMemu:function(){var t=document.getElementById("nav-menu").offsetTop,e=document.getElementById("nav-block1").offsetTop-200,n=document.getElementById("nav-block2").offsetTop-200,o=document.getElementById("nav-block3").offsetTop-200,i=document.getElementById("nav-block4").offsetTop-200,s=(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop)+120;this.isMenuFixed=s>t,e<s&&s<n&&(this.activeIndex="1"),n<s&&s<o&&(this.activeIndex="2"),o<s&&s<i&&(this.activeIndex="3"),i<s&&(this.activeIndex="4")},loadImage:function(){this.images="imagesPic"}},watch:{},components:{"v-icon-box":$},beforeCreate:function(){},cteated:function(){},beforeMount:function(){},mounted:function(){window.onscroll=this.scrollActiveMemu},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){window.onscroll=null}},st=it,at=(n("70c8"),n("0dc0"),Object(u["a"])(st,G,z,!1,null,"597c92e6",null)),ct=at.exports;o["default"].use(p["a"]);var lt=[{path:"/",component:V,children:[{path:"/",name:"home",component:ct,meta:{title:"产品"}},{path:"/case-presentation",name:"casePresentation",component:function(){return Promise.all([n.e("vendors~casePresentation"),n.e("casePresentation")]).then(n.bind(null,"13fb"))},meta:{title:"案例介绍"}},{path:"/service-process",name:"serviceProcess",component:function(){return n.e("serviceProcess").then(n.bind(null,"056c"))},meta:{title:"服务流程"}},{path:"/about-us",name:"aboutUs",component:function(){return Promise.all([n.e("vendors~aboutUs"),n.e("aboutUs")]).then(n.bind(null,"ac66"))},meta:{title:"关于我们"}},{path:"/product-profile",name:"productProfile",component:function(){return n.e("productProfile").then(n.bind(null,"d854"))},meta:{title:"产品概况"}},{path:"/delivery-tms",name:"deliveryTms",component:function(){return n.e("deliveryTms").then(n.bind(null,"486f"))},meta:{title:"西域马城配TMS"}},{path:"/delivery-engine",name:"deliveryEngine",component:function(){return n.e("deliveryEngine").then(n.bind(null,"3146"))},meta:{title:"睿灵智慧排线引擎"}},{path:"/monitoring-system",name:"monitoringSystem",component:function(){return n.e("monitoringSystem").then(n.bind(null,"0020"))},meta:{title:" 洞明在途监控系统"}},{path:"/data-platform",name:"dataPlatform",component:function(){return n.e("dataPlatform").then(n.bind(null,"daef"))},meta:{title:"瀚宇大数据平台"}}]}],rt=new p["a"]({mode:"hash",base:"",routes:lt}),ut=rt,mt=n("591a");o["default"].use(mt["a"]);var dt=new mt["a"].Store({state:{count:0,isQrCodeShow:!1},getters:{getCount:function(t){return t.count+1},getIsQrCodeShow:function(t){return t.isQrCodeShow}},mutations:{addCount:function(t){t.count++},addNumCount:function(t,e){t.count+=e},openQr:function(t,e){t.isQrCodeShow=!0},closeQr:function(t,e){t.isQrCodeShow=!1}},actions:{addCount:function(t){t.commit("addCount")},addNumCount:function(t,e){t.commit("addNumCount",e)},openQr:function(t){t.commit("openQr")},closeQr:function(t){t.commit("closeQr")}},modules:{modA:{namespaced:!0,state:{},getters:{},mutations:{},actions:{}}}});n("b20f"),n("fc4a");o["default"].use(s.a),o["default"].config.productionTip=!1;new o["default"]({el:"#app",router:ut,store:dt,render:function(t){return t(d)}}).$mount("#app")},6170:function(t,e,n){},"70c8":function(t,e,n){"use strict";var o=n("8395"),i=n.n(o);i.a},8395:function(t,e,n){},"97e5":function(t,e,n){t.exports=n.p+"static/img/banner2.b01dc81c.svg"},"9ab7":function(t,e,n){},b20f:function(t,e,n){},b8eb:function(t,e,n){},e0e1:function(t,e){t.exports="data:image/png;base64,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"},e25c:function(t,e,n){"use strict";var o=n("6170"),i=n.n(o);i.a},e347:function(t,e,n){t.exports=n.p+"static/img/logo.528fc277.svg"},ef5a:function(t,e,n){t.exports=n.p+"static/img/bannerbj.d2a9509f.svg"},fc4a:function(t,e,n){}},[[0,"runtime","chunk-elementUI","chunk-libs"]]]);