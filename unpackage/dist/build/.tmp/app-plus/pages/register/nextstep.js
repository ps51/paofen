(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/nextstep"],{"13a2":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){!t.safety.state&&t.get_code()})},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},"2ab3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a")),s=r(n("6913")),i=r(n("f4fb"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,a,s,i,r){try{var o=t[i](r),u=o.value}catch(l){return void n(l)}o.done?e(u):Promise.resolve(u).then(a,s)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(a,s){var i=t.apply(e,n);function r(t){o(i,a,s,r,u,"next",t)}function u(t){o(i,a,s,r,u,"throw",t)}r(void 0)})}}var l={data:function(){return{phone:"",password:null,code:null,p:null,name:null,confirm:null,qianbao:null,safety:{time:60,state:!1,interval:""}}},onLoad:function(t){this.phone=t.phone},methods:{get_code:function(){var t=u(a.default.mark(function t(){var e=this;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!/^1[3456789]\d{9}$/.test(this.phone)||11!=this.phone.length){t.next=7;break}return t.next=3,s.default.get_code(this.phone,1);case 3:this.safety.state=!0,this.safety.interval=setInterval(function(){e.safety.time--<=0&&(e.safety.time=60,e.safety.state=!1,clearInterval(e.safety.interval))},1e3),t.next=8;break;case 7:plus.nativeUI.alert("请输入正确的手机号！");case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getRegiter:function(){var e=u(a.default.mark(function e(){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:null==this.password&&null==this.confirm&&null==this.name&&null==this.qianbao&&null==this.code?plus.nativeUI.alert("请输入完整的注册信息!"):this.password!=this.confirm?plus.nativeUI.alert("两次输入的密码不一致！"):this.password.length>=8&&this.confirm.length>=8&&this.password.length<=18&&this.confirm.length<=18?t.request({url:i.default+"register",data:{phone:this.phone,code:this.code,pass:this.password,pass_again:this.password,p:this.p,name:this.name,qianbao_password:this.qianbao},method:"POST",success:function(e){plus.nativeUI.toast(e.data.message),0==e.data.error_code&&(plus.nativeUI.toast(e.data.message),t.reLaunch({url:"../verification-login"}))},fail:function(t){console.log(t.data," at pages\\register\\nextstep.vue:109"),plus.nativeUI.toast("网络出错啦！")}}):plus.nativeUI.alert("请输入正确的密码!");case 1:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=l}).call(this,n("6e42")["default"])},"302e":function(t,e,n){"use strict";n.r(e);var a=n("13a2"),s=n("7784");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("cf3b");var r=n("2877"),o=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},7784:function(t,e,n){"use strict";n.r(e);var a=n("2ab3"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=s.a},adb3:function(t,e,n){},cf3b:function(t,e,n){"use strict";var a=n("adb3"),s=n.n(a);s.a}},[["1dc0","common/runtime","common/vendor"]]]);