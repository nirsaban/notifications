(this.webpackJsonpnotifications=this.webpackJsonpnotifications||[]).push([[0],{47:function(t,e,n){},67:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),a=n(13),o=n.n(a),r=(n(47),n(4)),s=n(2),u=n(42),l=n(16),d=n.n(l),f=n(24),j=n(10),b=(n(26),n(76)),h=n(37),m=n.n(h),p=window.location.origin;p.includes("local")&&(p="http://localhost:5000");var O=p;console.log(O);var x=m.a.create({baseURL:O,headers:{"Content-Type":"application/json"}}),v=(n(67),n(41)),g=n(1),w=function(t){var e=t.icon,n=t.hiddenNext,i=t.setHiddenNext,a=t.handleDelete,o=t.alert,r=t.timeDuration,s=t.type,u=t.msg,l=Object(c.useState)(!0),d=Object(j.a)(l,2),f=d[0],b=d[1];return Object(c.useEffect)((function(){setTimeout((function(){b(!1)}),1e3*r)}),[r]),Object(c.useEffect)((function(){n&&i(!1)}),[]),Object(g.jsxs)(v.a,{variant:s,className:"col-md-3 d-flex",show:!n&&f,onClick:function(){return a(o)},children:[Object(g.jsx)("div",{className:"col-md-1",children:Object(g.jsx)("i",{className:"fas ".concat(e)})}),Object(g.jsx)("div",{className:"col-md-10",children:u}),Object(g.jsx)("div",{className:"flex-end col-md-1",children:"X"})]})},N=function(){var t=Object(c.useState)({}),e=Object(j.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(0),o=Object(j.a)(a,2),r=o[0],l=o[1],h=Object(c.useState)([]),m=Object(j.a)(h,2),p=m[0],O=m[1],v=Object(c.useState)(!1),N=Object(j.a)(v,2),S=N[0],D=N[1];Object(c.useEffect)((function(){var t=Object(b.a)();Object(f.a)(d.a.mark((function e(){var n,c,a,o,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("http://localhost:5000/get_notifications?uniqueId=".concat(t));case 3:n=e.sent,c=n.data,a=c.timeDuration,o=c.timeForShowNew,r=c.data,s=r.map((function(t){return k(t)})),i({timeDuration:a,timeForShowNew:o,notifications:s,uniqueId:t}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}),[]);var k=function(t){var e=t.text.map((function(t){var e=t.toLowerCase();return e.includes("sale")?t+="!":e.includes("new")&&(t="~"+t+"~"),e.includes("limited edition")&&(t=e.replace("limited edition","limited edition".toUpperCase())),t}));return t.text=e,t};Object(c.useEffect)((function(){if(n.notifications){var t=setTimeout((function(){r<n.notifications.length-1?l((function(t){return t+1})):l(0),O((function(t){return[].concat(Object(u.a)(t),[n.notifications[r]])}))}),1e3*n.timeForShowNew);return function(){return clearInterval(t)}}}),[r,p,n]);var y=function(){var t=Object(f.a)(d.a.mark((function t(e){var c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.post("http://localhost:5000/delete",{uniqueId:n.uniqueId,alertToRemove:e});case 3:c=t.sent,(a=c.data).data.length>0&&(console.log(a),i((function(t){return Object(s.a)(Object(s.a)({},t),{},{notifications:a.data.map((function(t){return k(t)})).filter((function(t){return t.status}))})})),D(!0)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"App d-flex justify-content-center flex-column align-items-center",children:n.notifications?p.map((function(t,e){return Object(g.jsx)(w,{type:t.type,msg:t.text[Math.round(Math.random()*(t.text.length-1))],alert:t.alert,timeDuration:n.timeDuration,handleDelete:y,hiddenNext:S,setHiddenNext:D,icon:t.icon},e)})):null})},S=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(r.c,{children:Object(g.jsx)(r.a,{exact:!0,path:"/",render:function(){return Object(g.jsx)(N,{})}})})})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))},k=n(23);o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(k.a,{children:Object(g.jsx)(S,{})})}),document.getElementById("root")),D()}},[[73,1,2]]]);
//# sourceMappingURL=main.3851ec1a.chunk.js.map