(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e16f2fa"],{"17f3":function(t,e,i){t.exports=i.p+"img/NULS_Black.a4a1a22e.png"},"2fa4":function(t,e,i){"use strict";i("20f6");var a=i("80d2");e["a"]=Object(a["g"])("spacer","div","v-spacer")},"325d":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("v-system-bar",{staticClass:"px-4",attrs:{app:"",color:"#262626",dark:"",height:"58"}},[a("a",{staticClass:"d-flex align-center",attrs:{href:"https://wallet.nuls.io/dist/img/logo.ef0bcec3.svg",target:"_blank"}},[a("v-img",{staticClass:"mr-2",attrs:{alt:"Nuls Logo",contain:"",src:i("17f3"),width:"32"}}),a("v-img",{staticClass:"hidden-xs-only",attrs:{alt:"Nuls Name",contain:"",width:"96",src:i("fdb6")}})],1),a("v-spacer"),a("v-btn",{staticClass:"text-capitalize subtitle-2 mr-6",attrs:{color:"primary",href:"https://wallet.nerve.network/","min-width":"112"}},[t._v(" Nerve Wallet ")]),a("v-btn",{staticClass:"text-capitalize subtitle-2 font-weight-bold white--text",attrs:{color:"green darken-1",light:"",href:"https://wallet.nuls.io/","min-width":"112"}},[t._v(" NULS Wallet ")]),a("v-divider",{staticClass:"ml-6 mr-3",attrs:{vertical:""}})],1):t._e()},s=[],n={name:"HomeSystemBar",data:function(){return{model:!0}}},r=n,o=i("2877"),c=i("6544"),l=i.n(c),h=i("8336"),p=i("ce7e"),u=i("adda"),d=i("2fa4"),f=(i("a9e3"),i("c7cd"),i("5530")),m=(i("8308"),i("3a66")),v=i("a9ad"),g=i("7560"),b=i("58df"),w=i("80d2"),y=Object(b["a"])(Object(m["a"])("bar",["height","window"]),v["a"],g["a"]).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes:function(){return Object(f["a"])({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles:function(){return{height:Object(w["f"])(this.computedHeight)}}},methods:{updateApplication:function(){return this.$el?this.$el.clientHeight:this.computedHeight}},render:function(t){var e={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),Object(w["l"])(this))}}),x=Object(o["a"])(r,a,s,!1,null,null,null);e["default"]=x.exports;l()(x,{VBtn:h["a"],VDivider:p["a"],VImg:u["a"],VSpacer:d["a"],VSystemBar:y})},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i("fe6c"),s=i("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(s["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},8308:function(t,e,i){},fdb6:function(t,e,i){t.exports=i.p+"img/nerve.4e9f3aed.png"}}]);
//# sourceMappingURL=chunk-8e16f2fa.0f274271.js.map