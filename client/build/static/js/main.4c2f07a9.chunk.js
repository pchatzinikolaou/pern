(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,a){e.exports=a(65)},56:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),u=(a(56),a(57),a(15)),o=a.n(u),m=a(20),i=a(16),s=a(82),E=a(83),f=a(95),d=a(94),p=a(93),h=a(84),v=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),v=u[0],b=u[1],g=Object(n.useState)(""),x=Object(i.a)(g,2),y=x[0],j=x[1],O=function(){var e=Object(m.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={fName:a,lName:v,age:y},e.next=5,fetch("http://localhost:5000/people",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:e.sent,window.location="/list",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(s.a,null,l.a.createElement("h3",null,"\u03a0\u03a1\u039f\u03a3\u0398\u0397\u039a\u0397 \u0391\u03a4\u039f\u039c\u039f\u03a5"),l.a.createElement("form",{onSubmit:O},l.a.createElement(E.a,null,l.a.createElement(f.a,null,l.a.createElement(d.a,{htmlFor:"title"},"\u039f\u039d\u039f\u039c\u0391"),l.a.createElement(p.a,{required:!0,id:"fName",type:"text",name:"fName",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(d.a,{htmlFor:"lName"},"\u0395\u03a0\u03a9\u039d\u03a5\u039c\u039f"),l.a.createElement(p.a,{required:!0,id:"lName",type:"text",name:"lName",value:v,onChange:function(e){return b(e.target.value)}})),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(d.a,{htmlFor:"age"},"\u0397\u039b\u0399\u039a\u0399\u0391"),l.a.createElement(p.a,{required:!0,id:"age",type:"text",name:"age",value:y,onChange:function(e){return j(e.target.value)}})),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(h.a,{variant:"contained",color:"success",value:"Submit",type:"submit"},"\u03a0\u03a1\u039f\u03a3\u0398\u0397\u039a\u0397")))))},b=a(43),g=a.n(b),x=a(85),y=a(44),j=a.n(y),O=function(e){var t=e.person,a=Object(n.useState)(t.fname),r=Object(i.a)(a,2),c=r[0],u=r[1],s=Object(n.useState)(t.lname),h=Object(i.a)(s,2),v=h[0],b=h[1],y=Object(n.useState)(t.age),O=Object(i.a)(y,2),N=O[0],w=O[1],k=function(){var e=Object(m.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={fName:c,lName:v,age:N},e.next=5,fetch("http://localhost:5000/people/".concat(t.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:e.sent,window.location="/list",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(n.Fragment,null,l.a.createElement(x.a,{"aria-label":"edit",variant:"contained",style:{backgroundColor:"#ffffff"},"data-toggle":"modal","data-target":"#id".concat(t.id)},l.a.createElement(g.a,null)),l.a.createElement("div",{class:"modal",id:"id".concat(t.id),onClick:function(){u(t.fname),b(t.lname),w(t.age)}},l.a.createElement("div",{class:"modal-dialog"},l.a.createElement("div",{class:"modal-content"},l.a.createElement("div",{class:"modal-header"},l.a.createElement("h4",{class:"modal-title"},"\u0395\u03a0\u0395\u039e\u0395\u03a1\u0393\u0391\u03a3\u0399\u0391"),l.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal",onClick:function(){u(t.fname),b(t.lname),w(t.age)}},"\xd7")),l.a.createElement("div",{class:"modal-body"},l.a.createElement(E.a,null,l.a.createElement(f.a,null,l.a.createElement(d.a,{htmlFor:"title"},"\u039f\u039d\u039f\u039c\u0391"),l.a.createElement(p.a,{id:"fName",type:"text",name:"fName",value:c,onChange:function(e){return u(e.target.value)}})),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(d.a,{htmlFor:"lName"},"\u0395\u03a0\u03a9\u039d\u03a5\u039c\u039f"),l.a.createElement(p.a,{id:"lName",type:"text",name:"lName",value:v,onChange:function(e){return b(e.target.value)}})),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(d.a,{htmlFor:"age"},"\u0397\u039b\u0399\u039a\u0399\u0391"),l.a.createElement(p.a,{id:"age",type:"text",name:"age",value:N,onChange:function(e){return w(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement("div",{class:"modal-footer"},l.a.createElement(x.a,{"aria-label":"edit",variant:"contained",style:{backgroundColor:"#ffffff"},onClick:function(e){return k(e)}},l.a.createElement(j.a,null)))))))},N=a(86),w=a(88),k=a(89),C=a(90),S=a(91),F=a(92),T=a(87),J=a(45),q=a.n(J),D=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(m.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/people/".concat(t),{method:"DELETE"});case 3:e.sent,r(a.filter((function(e){return e.id!==t}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/people");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[]),l.a.createElement(N.a,{component:T.a},l.a.createElement(w.a,null,l.a.createElement(k.a,null,l.a.createElement(C.a,null,l.a.createElement(S.a,{width:"40%"},"\u039f\u039d\u039f\u039c\u0391"),l.a.createElement(S.a,{width:"40%"},"\u0395\u03a0\u03a9\u039d\u03a5\u039c\u039f"),l.a.createElement(S.a,{width:"10%"},"\u0397\u039b\u0399\u039a\u0399\u0391"),l.a.createElement(S.a,{width:"5%"}),l.a.createElement(S.a,{width:"5%"}))),l.a.createElement(F.a,null,a.length>0?a.map((function(e){return l.a.createElement(C.a,{key:e.id},l.a.createElement(S.a,null,e.fname),l.a.createElement(S.a,null,e.lname),l.a.createElement(S.a,null,e.age),l.a.createElement(S.a,null,l.a.createElement(O,{person:e})),l.a.createElement(S.a,null,l.a.createElement(x.a,{"aria-label":"delete",variant:"contained",style:{backgroundColor:"#ffffff"},onClick:function(){return c(e.id)}},l.a.createElement(q.a,null))))})):l.a.createElement(C.a,null,l.a.createElement(S.a,null),l.a.createElement(S.a,null,"\u0394\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03ac\u03c4\u03bf\u03bc\u03b1"),l.a.createElement(S.a,null)))))},A=a(25),L=a(8),P=function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(A.b,{exact:!0,activeClassName:"current",to:"/"},"\u0391\u03a1\u03a7\u0399\u039a\u0397 \u039f\u0398\u039f\u039d\u0397")),l.a.createElement("li",null,l.a.createElement(A.b,{exact:!0,activeClassName:"current",to:"/add"},"\u03a0\u03a1\u039f\u03a3\u0398\u0397\u039a\u0397 \u0391\u03a4\u039f\u039c\u039f\u03a5")),l.a.createElement("li",null,l.a.createElement(A.b,{exact:!0,activeClassName:"current",to:"/list"},"\u039b\u0399\u03a3\u03a4\u0391 \u0391\u03a4\u039f\u039c\u03a9\u039d"))))};var B=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,"\u039a\u0391\u039b\u03a9\u03a3 \u039f\u03a1\u0399\u03a3\u0391\u03a4\u0395!!!"))},I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(A.a,null,l.a.createElement(P,null),l.a.createElement(L.c,null,l.a.createElement(L.a,{path:"/",component:B,exact:!0}),l.a.createElement(L.a,{path:"/List",component:D,exact:!0}),l.a.createElement(L.a,{path:"/Add",component:v,exact:!0}))))};c.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.4c2f07a9.chunk.js.map