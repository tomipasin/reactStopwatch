(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{10:function(c,t,e){},12:function(c,t,e){"use strict";e.r(t);var n=e(1),s=e.n(n),o=e(4),l=e.n(o),i=(e(9),e(2)),a=(e(10),e(0)),r=function(){var c=Object(n.useState)(0),t=Object(i.a)(c,2),e=t[0],s=t[1];console.log("Timer (total seconds): ".concat(e));var o=Object(n.useState)(!1),l=Object(i.a)(o,2),r=l[0],j=l[1],u=Object(n.useState)(!1),b=Object(i.a)(u,2),d=b[0],O=b[1],h=Object(n.useRef)(null);console.log("countref: ".concat(h.current));var x="0".concat(e%60).slice(-2),v=e/60,f=Math.floor(v),m="0".concat(f%60).slice(-2),g="0".concat(Math.floor(e/3600)).slice(-2);console.log("Seconds (timer:".concat(e,")/60 = Minute Raw: ").concat(v," - minutes: ").concat(f," - getMinutes: ").concat(m));var p=function(){j(!0),O(!0),h.current=setInterval((function(){s((function(c){return c+1}))}),1e3)};return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col"}),Object(a.jsxs)("div",{class:"col-10 center",children:[Object(a.jsxs)("h1",{children:["Tomi's ",Object(a.jsx)("br",{}),"React Stopwatch"]}),Object(a.jsxs)("h4",{children:["A complete stopwatch ",Object(a.jsx)("br",{}),"running in ReactJS"]})]}),Object(a.jsx)("div",{class:"col"})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{classname:"col-1"}),Object(a.jsxs)("div",{classname:"col-10 stop",children:[Object(a.jsxs)("p",{className:"clock center",children:[g,":",m,"'",x]})," "]}),Object(a.jsx)("div",{classname:"col-1"})]}),Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col"}),Object(a.jsxs)("div",{class:"col-10 buttons",children:[r||d?d?Object(a.jsx)("button",{onClick:function(){clearInterval(h.current),console.log(h.current),O(!1)},children:"Pause"}):Object(a.jsx)("button",{onClick:function(){p()},children:"Resume"}):Object(a.jsx)("button",{onClick:p,children:"Start"}),Object(a.jsx)("button",{onClick:function(){clearInterval(h.current),j(!1),O(!1),s(0)},children:"Reset"})]}),Object(a.jsx)("div",{class:"col"})]})]})},j=function(c){c&&c instanceof Function&&e.e(3).then(e.bind(null,13)).then((function(t){var e=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,l=t.getTTFB;e(c),n(c),s(c),o(c),l(c)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(r,{})}),document.getElementById("root")),j()},9:function(c,t,e){}},[[12,1,2]]]);
//# sourceMappingURL=main.e6d9cddf.chunk.js.map