(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(18),a=c.n(s),r=(c(68),c(36)),o=c(26),j=c(54),l=c(108),h=c(110),d=c(107),b=c(109),p=c(63),O=c(62),x=c(106),u=(c(69),[{id:0,img:"https://codingapple1.github.io/shop/shoes1.jpg",title:"White and Black",content:"Born in France",price:12e4},{id:1,img:"https://codingapple1.github.io/shop/shoes2.jpg",title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,img:"https://codingapple1.github.io/shop/shoes3.jpg",title:"Grey Yordan",content:"Born in the States",price:13e4}]),m=c(7),g=(c(70),c(3));var f,v=function(e){var t=Object(m.g)().id,c=Object(m.f)(),i=Object(n.useState)(!0),s=Object(o.a)(i,2),a=s[0],j=s[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){j(a=!1)}),2e3);return function(){clearTimeout(e)}}),[]),Object(g.jsxs)("div",{className:"container",children:[!0===a?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"my-alert",children:Object(g.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}),Object(g.jsx)("div",{className:"my-alert2",children:Object(g.jsx)("p",{children:"\uc7ac\uace0 \uc18c\uc9c4\uc2dc \uc774\ubca4\ud2b8 \uc885\ub8cc"})})]}):null,Object(g.jsxs)("div",{div:"div",className:"row",children:[Object(g.jsx)("div",{className:"col-md-6",children:Object(g.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(Number([t])+1)+".jpg",width:"100%"})}),Object(g.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(g.jsx)("h4",{className:"pt-5",children:e.data[t].title}),Object(g.jsx)("p",{children:e.data[t].content}),Object(g.jsxs)("p",{className:"BeforePrice",children:[e.data[t].price.toLocaleString(),"\uc6d0"]}),Object(g.jsxs)("p",{className:"AfterPrice",children:[(.8*e.data[t].price).toLocaleString(),"\uc6d0"]}),Object(g.jsx)(l,{Stock:e.stock[t]}),Object(g.jsx)("button",{className:"btn btn-danger",onClick:function(){var c=Object(r.a)(e.stock);c[t]=--c[t],e.stockSet(c)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(g.jsx)("button",{className:"btn btn-danger",onClick:function(){c.push("/")},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]});function l(e){return console.log(e),Object(g.jsxs)("p",{children:["\uc7ac\uace0 : ",e.Stock]})}},N=c(28),S=c(56),k=c(55),B=c.n(k),L=(c.p,S.a.div(f||(f=Object(j.a)(["\n    font-size : 25px;\n    font-weight : ",";\n"])),(function(e){return e.Weight})));var w=function(){var e=Object(n.useState)(u),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([10,11,12,13,14,15]),a=Object(o.a)(s,2),j=a[0],f=a[1],S=Object(n.useState)(!1),k=Object(o.a)(S,2),w=k[0],y=k[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(g.jsx)(l.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(g.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsxs)(h.a,{className:"ml-auto",children:[Object(g.jsx)(h.a.Link,{href:"/",children:"Home"}),Object(g.jsx)(h.a.Link,{href:"#link",children:"Link"}),Object(g.jsxs)(d.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(g.jsx)(d.a.Item,{href:"#action/3.1",children:"Action"}),Object(g.jsx)(d.a.Item,{href:"#action/3.2",children:"Another action"}),Object(g.jsx)(d.a.Item,{href:"#action/3.3",children:"Something"}),Object(g.jsx)(d.a.Divider,{}),Object(g.jsx)(d.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(g.jsxs)(b.a,{inline:"inline",children:[Object(g.jsx)(p.a,{type:"text",placeholder:"Search",className:"mr=l-sm-2"}),Object(g.jsx)(O.a,{variant:"outline-success",children:"Search"})]})]})]}),Object(g.jsxs)(m.c,{children:[Object(g.jsxs)(m.a,{exact:!0,path:"/",children:[Object(g.jsxs)(x.a,{className:"AdPanel",children:[Object(g.jsx)("h1",{children:"20% Season Off"}),Object(g.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(g.jsx)("p",{children:Object(g.jsx)(O.a,{variant:"primary",children:"Learn more"})})]}),Object(g.jsxs)("div",{className:"Container",children:[Object(g.jsx)("div",{className:"Row",children:c.map((function(e,t){return console.log(e),Object(g.jsx)(C,{Data:e,Num:t},t)}))}),!1===w?Object(g.jsx)("button",{className:"btn btn-primary",onClick:function(){B.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){var t=Object(r.a)(c);e.data.map((function(e,c){t.push(e)})),i(t),y(!0)})).catch((function(){console.log("\ub370\uc774\ud130 \ud1b5\uc2e0 \uc2e4\ud328")}))},children:"\ub354\ubcf4\uae30"}):null]})]}),Object(g.jsxs)(m.a,{path:"/detail/:id",children:[Object(g.jsx)(L,{Weight:"bold",children:"\uc0c1\uc138\ud398\uc774\uc9c0"}),Object(g.jsx)(v,{data:c,stock:j,stockSet:f})]}),Object(g.jsx)(m.a,{path:"/:id",children:Object(g.jsx)(v,{})})]})]});function C(e){return console.log(e),Object(g.jsx)("div",{className:"col-4",children:Object(g.jsxs)(N.b,{to:"/detail/"+e.Num,children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(Number([e.Num])+1)+".jpg"})}),Object(g.jsx)("h5",{children:e.Data.title}),Object(g.jsx)("p",{children:e.Data.content}),Object(g.jsxs)("p",{className:"BeforePrice",children:[e.Data.price.toLocaleString(),"\uc6d0"]}),Object(g.jsxs)("p",{className:"AfterPrice",children:[(.8*e.Data.price).toLocaleString(),"\uc6d0"]})]})})}},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,111)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(N.a,{children:Object(g.jsx)(w,{})})}),document.getElementById("root")),y()},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.b59fc442.chunk.js.map