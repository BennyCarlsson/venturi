(this.webpackJsonpventuri=this.webpackJsonpventuri||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(24),a=n.n(i),o=(n(32),n(33),n(17)),s=n(4),d=n(1);var l=function(){return Object(d.jsx)("div",{children:"Favorites"})};var u=function(){return Object(d.jsx)("div",{children:"Destination"})};var b,j=function(){return Object(d.jsx)("div",{children:"404"})},h=n(6),x=n.n(h),f=n(11),p=n(22),O=function(e){var t=new Date;return t.setSeconds(t.getSeconds()+e),t},v=function(){var e=new Date;return{date:e.toISOString().substr(0,10),time:e.toTimeString().substr(0,5)}},g=function(){var e=Object(f.a)(x.a.mark((function e(t,n,r){var c,i,a,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=v(),i=c.date,a=c.time,o="https://api.vasttrafik.se/bin/rest.exe/v2/trip?originId=".concat(t,"&destId=").concat(n,"&date=").concat(i,"&time=").concat(a,"&format=json"),e.next=4,fetch(o,{method:"GET",headers:{Authorization:"Bearer ".concat(r.accessToken)}});case 4:return s=e.sent,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(f.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.vasttrafik.se:443/token",{headers:{Authorization:"Basic ".concat("T0hDc2txdEp6cDhMYlVmRjhsaWVfeERHdDBBYTp6ME5wWWY3dlYxbUFhTEVFbkdyRFprTGEwODBh"),"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:"grant_type=client_credentials"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w={accessToken:"",expires:null},y=function(){var e=Object(f.a)(x.a.mark((function e(){var t,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,n=O(t.expires_in),r=t.access_token,w={accessToken:r,expires:n};case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C((function(){return g(t,n,w)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((c=w).accessToken&&c.expires&&!((null===c||void 0===c?void 0:c.expires)<new Date)){e.next=3;break}return e.next=3,y();case 3:return e.next=5,t();case 5:if(401!==(r=e.sent).status){e.next=12;break}return e.next=9,y();case 9:return e.next=11,t();case 11:r=e.sent;case 12:if(200!==r.status){e.next=17;break}return e.next=15,r.json();case 15:return n=e.sent,e.abrupt("return",n);case 17:return e.next=19,r.json();case 19:return n=e.sent,e.abrupt("return",n);case 21:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),T=n(5),S=n(13),F=n(2),L=n(3);!function(e){e.background="#A0C1B8",e.white="#FFFFFF",e.black="#000000",e.vBlack="#351F39",e.vGray="#726A95",e.secondGray="#AFAEAF",e.vBlue="#719FB0",e.vGreen="#A0C1B8",e.borderWhite="#95BFCE"}(b||(b={}));var B,W,z,D,E,M,V,A,H=b;!function(e){e[e.normal=400]="normal",e[e.medium=500]="medium",e[e.bold=700]="bold"}(B||(B={}));var I,P=function(e){var t=e.fontSize,n=e.color,r=e.fontWeight,c=e.center,i=e.uppercase;return Object(L.a)(W||(W=Object(F.a)(["\n    font-size: ",";\n    color: ",";\n    font-weight: ",";\n    text-align: ",";\n    text-transform: ",";\n  "])),t?"".concat(t,"px"):"initial",n||H.black,r||B.normal,c?"center":"initial",i?"uppercase":"none")},G=L.b.h1(z||(z=Object(F.a)(["\n  ",";\n"])),(function(e){return P(e)})),Z=L.b.h2(D||(D=Object(F.a)(["\n  ",";\n"])),(function(e){return P(e)})),_=L.b.h3(E||(E=Object(F.a)(["\n  ",";\n"])),(function(e){return P(e)})),R=L.b.h4(M||(M=Object(F.a)(["\n  ",";\n"])),(function(e){return P(e)})),Y=L.b.h5(V||(V=Object(F.a)(["\n  ",";\n"])),(function(e){return P(e)})),J=L.b.h6(A||(A=Object(F.a)(["\n  ",";\n"])),(function(e){return P(e)})),U=function(e){var t=e.headingType,n=e.children,r=Object(S.a)(e,["headingType","children"]);switch(t){case"h1":return Object(d.jsx)(G,Object(T.a)(Object(T.a)({},r),{},{children:n}));case"h2":return Object(d.jsx)(Z,Object(T.a)(Object(T.a)({},r),{},{children:n}));case"h3":return Object(d.jsxs)(_,Object(T.a)(Object(T.a)({},r),{},{children:[" ",n]}));case"h4":return Object(d.jsx)(R,Object(T.a)(Object(T.a)({},r),{},{children:n}));case"h5":return Object(d.jsx)(Y,Object(T.a)(Object(T.a)({},r),{},{children:n}));case"h6":return Object(d.jsx)(J,Object(T.a)(Object(T.a)({},r),{},{children:n}));default:return Object(d.jsx)(G,Object(T.a)(Object(T.a)({},r),{},{children:n}))}},N=L.b.p(I||(I=Object(F.a)(["\n  font-size: ",";\n  color: ",";\n  font-weight: ",";\n  text-align: ",";\n  text-transform: ",";\n"])),(function(e){var t=e.fontSize;return t?"".concat(t,"px"):"18px"}),(function(e){var t=e.color;return t||"black"}),(function(e){var t=e.fontWeight;return t||B.normal}),(function(e){return e.center?"center":"initial"}),(function(e){return e.uppercase?"uppercase":"none"})),q=function(e){var t=e.children,n=Object(S.a)(e,["children"]);return Object(d.jsx)(N,Object(T.a)(Object(T.a)({},n),{},{children:t}))};function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var X=r.createElement("path",{d:"M12 2C8 2 4 2.5 4 6V15.5C4 16.4283 4.36875 17.3185 5.02513 17.9749C5.6815 18.6313 6.57174 19 7.5 19L6 20.5V21H8.23L10.23 19H14L16 21H18V20.5L16.5 19C17.4283 19 18.3185 18.6313 18.9749 17.9749C19.6313 17.3185 20 16.4283 20 15.5V6C20 2.5 16.42 2 12 2ZM7.5 17C7.10218 17 6.72064 16.842 6.43934 16.5607C6.15804 16.2794 6 15.8978 6 15.5C6 15.1022 6.15804 14.7206 6.43934 14.4393C6.72064 14.158 7.10218 14 7.5 14C7.89782 14 8.27936 14.158 8.56066 14.4393C8.84196 14.7206 9 15.1022 9 15.5C9 15.8978 8.84196 16.2794 8.56066 16.5607C8.27936 16.842 7.89782 17 7.5 17ZM11 10H6V6H11V10ZM13 10V6H18V10H13ZM16.5 17C16.1022 17 15.7206 16.842 15.4393 16.5607C15.158 16.2794 15 15.8978 15 15.5C15 15.1022 15.158 14.7206 15.4393 14.4393C15.7206 14.158 16.1022 14 16.5 14C16.8978 14 17.2794 14.158 17.5607 14.4393C17.842 14.7206 18 15.1022 18 15.5C18 15.8978 17.842 16.2794 17.5607 16.5607C17.2794 16.842 16.8978 17 16.5 17Z",fill:"black"});function $(e,t){var n=e.title,c=e.titleId,i=Q(e,["title","titleId"]);return r.createElement("svg",K({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,X)}var ee,te,ne,re,ce,ie,ae,oe,se,de,le,ue,be,je,he,xe,fe,pe=r.forwardRef($),Oe=(n.p,L.b.div(ee||(ee=Object(F.a)(["\n  border-radius: 0 0 8px 8px;\n  background-color: ",";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n"])),H.vBlue)),ve=L.b.div(te||(te=Object(F.a)(["\n  padding: 24px;\n  border-bottom: 1px solid ",";\n"])),H.borderWhite),ge=L.b.div(ne||(ne=Object(F.a)(["\n  display: flex;\n"]))),me=L.b.div(re||(re=Object(F.a)(["\n  padding: 16px 24px;\n  width: 100%;\n  border-right: 1px solid ",";\n"])),H.borderWhite),we=L.b.div(ce||(ce=Object(F.a)(["\n  padding: 16px 24px;\n  width: 100%;\n"]))),ye=Object(L.b)(q)(ie||(ie=Object(F.a)(["\n  padding-top: 8px;\n"]))),ke=Object(L.b)(pe)(ae||(ae=Object(F.a)(["\n  width: 32px;\n  height: 32px;\n  padding-right: 16px;\n  path {\n    fill: ",";\n  }\n"])),H.white),Ce=L.b.div(oe||(oe=Object(F.a)(["\n  display: flex;\n  padding-top: 8px;\n"]))),Te=function(e){var t=e.name,n=e.track;return Object(d.jsxs)(Oe,{children:[Object(d.jsxs)(ve,{children:[Object(d.jsx)(U,{headingType:"h1",fontWeight:B.medium,fontSize:18,color:H.white,children:"Departs from"}),Object(d.jsxs)(Ce,{children:[Object(d.jsx)(ke,{}),Object(d.jsx)(U,{headingType:"h2",fontWeight:B.medium,fontSize:28,color:H.white,children:t})]})]}),Object(d.jsxs)(ge,{children:[Object(d.jsxs)(me,{children:[Object(d.jsx)(q,{fontWeight:B.medium,fontSize:14,color:H.white,children:"Platform"}),Object(d.jsx)(ye,{fontWeight:B.medium,fontSize:24,color:H.white,children:n})]}),Object(d.jsxs)(we,{children:[Object(d.jsx)(q,{fontWeight:B.medium,fontSize:14,color:H.white,children:"Destination name"}),Object(d.jsx)(ye,{fontWeight:B.medium,fontSize:24,color:H.white,children:"Placeholder"})]})]})]})},Se=L.b.div(se||(se=Object(F.a)(["\n  border-radius: 8px;\n  background-color: white;\n  margin: 8px;\n  padding: 16px 24px;\n  font-size: 18px;\n"]))),Fe=L.b.div(de||(de=Object(F.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid gray;\n"]))),Le=function(e){var t=e.legs;return Object(d.jsx)(Se,{children:t.map((function(e){var t,n,r;return Object(d.jsxs)(Fe,{children:[Object(d.jsx)(q,{children:null===(n=e.Leg)||void 0===n||null===(r=n.Origin)||void 0===r?void 0:r.time}),Object(d.jsx)("p",{children:e.Leg.direction}),Object(d.jsx)("p",{children:e.Leg.sname})]},null===(t=e.Leg)||void 0===t?void 0:t.id)}))})},Be=L.b.div(le||(le=Object(F.a)(["\n  background-color: ",";\n"])),H.white),We=function(e){var t=e.time,n=e.date;return Object(d.jsx)(q,{fontWeight:B.bold,fontSize:14,color:H.vBlue,children:function(){if(n&&t){var e=new Date,r=new Date("".concat(n," ").concat(t)).valueOf()-e.valueOf(),c=function(e){var t=Math.floor(e/864e5);return t<=0?"":"".concat(t,1===t?" day ":" days ")}(r),i=function(e){var t=Math.floor(e%864e5/36e5);return t<=0?"":"".concat(t,1===t?" hour ":" hours ")}(r),a=function(e){var t=Math.round(e%864e5%36e5/6e4);return t<=0?"":"".concat(t,1===t?" minute ":" minutes ")}(r);return r<=6e4?"now":"in ".concat(c).concat(i).concat(a)}}()})},ze=L.b.div(ue||(ue=Object(F.a)(["\n  padding: 16px 32px;\n  margin: 48px 24px;\n  background: ",";\n  border: 1px solid #f3f3f3;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n"])),H.white),De=L.b.div(be||(be=Object(F.a)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),Ee=L.b.div(je||(je=Object(F.a)([""]))),Me=L.b.div(he||(he=Object(F.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  width: 100%;\n  padding-left: 16px;\n  p {\n    text-align: end;\n  }\n"]))),Ve=L.b.div(xe||(xe=Object(F.a)(["\n  display: flex;\n"]))),Ae=L.b.div(fe||(fe=Object(F.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 16px;\n  border-radius: 4px;\n  height: 20px;\n  width: 20px;\n  background-color: ",";\n"])),H.vBlack),He=function(e){var t=e.date,n=e.time,r=e.rtTime,c=e.location,i=e.number,a=e.direction,o=Object(S.a)(e,["date","time","rtTime","location","number","direction"]);return Object(d.jsxs)(ze,Object(T.a)(Object(T.a)({},o),{},{children:[Object(d.jsxs)(De,{children:[Object(d.jsxs)(Ee,{children:[Object(d.jsx)(U,{headingType:"h2",fontWeight:B.bold,fontSize:48,color:H.vBlue,children:n}),Object(d.jsx)(We,{date:t,time:r||n})]}),Object(d.jsx)(Me,{children:Object(d.jsx)(q,{fontSize:14,fontWeight:B.bold,color:H.vBlue,children:c})})]}),Object(d.jsxs)(Ve,{children:[Object(d.jsx)(Ae,{children:Object(d.jsx)(q,{fontWeight:B.normal,fontSize:14,color:H.white,children:i})}),Object(d.jsx)(q,{fontWeight:B.medium,fontSize:14,children:a})]})]}))},Ie=function(){var e,t,n,c,i,a,o=Object(r.useState)(),s=Object(p.a)(o,2),l=s[0],u=s[1],b=Object(r.useState)(null),j=Object(p.a)(b,2),h=j[0],O=j[1],v=Object(r.useCallback)(Object(f.a)(x.a.mark((function e(){var t,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("9021014006160000","9021014004380000");case 2:(t=e.sent).error&&console.log(t.error),(n=t.TripList).error?O(t):n&&(r=n.Trip,console.log("tripList",n),console.log("_legs",r),u(r));case 6:case"end":return e.stop()}}),e)}))),[]);return Object(r.useEffect)((function(){v()}),[v]),Object(d.jsxs)(Be,{children:[l&&l.length>0&&Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(Te,{name:null===(e=l[0].Leg.Origin)||void 0===e?void 0:e.name,track:null===(t=l[0].Leg.Origin)||void 0===t?void 0:t.track}),Object(d.jsx)(He,{date:null===(n=l[0].Leg.Origin)||void 0===n?void 0:n.date,time:null===(c=l[0].Leg.Origin)||void 0===c?void 0:c.time,rtTime:null===(i=l[0].Leg.Origin)||void 0===i?void 0:i.rtTime,location:null===(a=l[0].Leg.Destination)||void 0===a?void 0:a.name,number:l[0].Leg.sname,direction:l[0].Leg.direction}),Object(d.jsx)(Le,{legs:l.slice(1,4)})]}),h&&Object(d.jsx)("h2",{children:h.error}),h&&Object(d.jsx)("p",{children:h.errorText})]})};var Pe=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",children:Object(d.jsx)(Ie,{})}),Object(d.jsx)(s.a,{path:"/venturi",children:Object(d.jsx)(Ie,{})}),Object(d.jsx)(s.a,{path:"/favorites",children:Object(d.jsx)(l,{})}),Object(d.jsx)(s.a,{path:"/destination",children:Object(d.jsx)(u,{})}),Object(d.jsx)(s.a,{path:"*",children:Object(d.jsx)(j,{})})]}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/favorites",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/destination",children:"Users"})})]})})]})})})},Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(Pe,{})}),document.getElementById("root")),Ge()}},[[42,1,2]]]);
//# sourceMappingURL=main.7097c6b4.chunk.js.map