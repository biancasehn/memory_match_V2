(this.webpackJsonpmemory_match=this.webpackJsonpmemory_match||[]).push([[0],[,,,function(t,e,n){t.exports={container:"style_container__2G2Cs",wrapper:"style_wrapper__21E0I",card:"style_card__2Ot9s",cardFlip:"style_cardFlip__2jEi_",back:"style_back__2e0Id"}},function(t,e,n){t.exports={modalOpen:"style_modalOpen__yQqea",modalWrap:"style_modalWrap__1e8cq",button:"style_button__13WME",resetButton:"style_resetButton__3soua",closeButton:"style_closeButton__Abmyw"}},,,,,,,function(t,e,n){t.exports={board:"style_board__DVKOT",slideRight:"style_slideRight__10vvO"}},function(t,e,n){t.exports={container:"style_container__2uN0W"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(10),r=n.n(s),i=(n(18),n(19),n(2)),o=n(4),l=n.n(o),u=n(0);function j(t){var e=t.numberOfAttempts,n=t.setDisplayModal;return Object(u.jsx)("div",{id:"modal",className:l.a.modalOpen,children:Object(u.jsxs)("div",{className:l.a.modalWrap,children:[Object(u.jsx)("h4",{children:"Well done!"}),Object(u.jsxs)("h6",{children:["Number of failed attempts: ",e]}),Object(u.jsxs)("div",{className:l.a.button,children:[Object(u.jsx)("button",{className:l.a.resetButton,onClick:function(){return n(!1)},children:"Play again"}),Object(u.jsx)("button",{className:l.a.closeButton,onClick:function(){return n(!1)},children:"Close"})]})]})})}var d=n(11),b=n.n(d);function O(t){var e=t.numberOfAttempts;return Object(u.jsx)("div",{className:b.a.board,children:Object(u.jsxs)("p",{children:["Number of failed attempts: ",e]})})}var m=n(12),p=n.n(m);function f(){return Object(u.jsx)("div",{className:p.a.container,children:Object(u.jsx)("h1",{children:"Memory Match"})})}var _=n(13),h=n(7),x=n(9),y=["\ud83e\udd8a","\ud83d\udc30","\ud83d\udc38","\ud83e\udd81","\ud83d\udc2f","\ud83e\udd84","\ud83d\udc32","\ud83d\udc37","\ud83d\udc3a","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc30","\ud83d\udc38","\ud83e\udd81","\ud83d\udc2f","\ud83e\udd84","\ud83d\udc32","\ud83d\udc37","\ud83d\udc3a","\ud83d\udc3c"],v=n(3),N=n.n(v);function k(t){var e=t.setDisplayModal,n=t.numberOfAttempts,a=t.setNumberOfAttempts,s=Object(c.useState)((function(){return y.map((function(){return!1}))})),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(c.useState)([]),d=Object(i.a)(j,2),b=d[0],O=d[1],m=Object(c.useState)(0),p=Object(i.a)(m,2),f=p[0],v=p[1];Object(c.useEffect)((function(){2===b.length&&k()}),[b]);var k=function(){if(b[0]===b[1])return A(),O([]),void v(0);a(++n);var t=Object.keys(o).map((function(t){return!b.includes(o[t])&&o[t]}));setTimeout((function(){l(t),v(0)}),1500),O([])},A=function(){0===Object.keys(o).filter((function(t){return!o[t]})).length&&e(!0)};return Object(u.jsx)("div",{className:N.a.container,children:Object(u.jsx)("div",{className:N.a.wrapper,children:y.map((function(t,e){return Object(u.jsx)("div",{onClick:function(){!o[e]&&f<2&&(l(Object(x.a)(Object(x.a)({},o),{},Object(h.a)({},e,t))),O([].concat(Object(_.a)(b),[t])),v((function(t){return t+1})))},className:o[e]?N.a.cardFlip:N.a.card,id:e,children:o[e]?Object(u.jsx)("div",{className:N.a.back,children:t}):Object(u.jsx)("div",{className:N.a.front,children:"?"})},e)}))})})}function A(){var t=Object(c.useState)(!1),e=Object(i.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(0),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{}),n?Object(u.jsx)(j,{displayModal:n,setDisplayModal:a,numberOfAttempts:o}):Object(u.jsx)(O,{numberOfAttempts:o}),Object(u.jsx)(k,{setDisplayModal:a,numberOfAttempts:o,setNumberOfAttempts:l})]})}var M=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(A,{})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.6a36a204.chunk.js.map