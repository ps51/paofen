(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forget/forget"],{"0c62":function(t,e,n){"use strict";var a=n("c5f2"),s=n.n(a);s.a},"143d":function(t,e,n){"use strict";n.r(e);var a=n("24d9"),s=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},"19be":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},"24d9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a")),s=r(n("6913")),o=r(n("f4fb"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,a,s,o,r){try{var u=t[o](r),c=u.value}catch(i){return void n(i)}u.done?e(c):Promise.resolve(c).then(a,s)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(a,s){var o=t.apply(e,n);function r(t){u(o,a,s,r,c,"next",t)}function c(t){u(o,a,s,r,c,"throw",t)}r(void 0)})}}var i={data:function(){return{phone:null,password:null,code:null,safety:{time:60,state:!1,interval:""},focuss:!1,focuss1:!1,focuss2:!1}},onLoad:function(){},methods:{get_code:function(){var t=c(a.default.mark(function t(){var e=this;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!/^1[3456789]\d{9}$/.test(this.phone)||11!=this.phone.length){t.next=7;break}return t.next=3,s.default.get_code(this.phone,2);case 3:this.safety.state=!0,this.safety.interval=setInterval(function(){e.safety.time--<=0&&(e.safety.time=60,e.safety.state=!1,clearInterval(e.safety.interval))},1e3),t.next=8;break;case 7:plus.nativeUI.alert("请输入正确的手机号！");case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),forget:function(){null==this.phone||null==this.code||null==this.password||11!=this.phone.length?plus.nativeUI.alert("请输入完整的注册信息！"):t.request({url:o.default+"password_find",data:{phone:this.phone,code:this.code,pass:this.password},method:"POST",success:function(e){console.log(e.data," at pages\\forget\\forget.vue:84"),plus.nativeUI.toast(e.data.message),0==e.data.error_code&&t.reLaunch({url:"../verification-login"})},fail:function(t){console.log(t.data," at pages\\forget\\forget.vue:93")}})},focushand:function(t){switch(t){case 0:this.focuss=!0;break;case 1:this.focuss=!1;break;case 2:this.focuss1=!0;break;case 3:this.focuss1=!1;break;case 4:this.focuss2=!0;break;case 5:this.focuss2=!1;break}}}};e.default=i}).call(this,n("6e42")["default"])},"32f6":function(t,e,n){"use strict";n.r(e);var a=n("19be"),s=n("143d");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("0c62");var r=n("2877"),u=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},c5f2:function(t,e,n){}},[["5b31","common/runtime","common/vendor"]]]);