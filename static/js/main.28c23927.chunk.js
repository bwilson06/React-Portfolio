(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i,a,s,c,o,r,l,d,h,j=n(4),u=n(5),v=n.n(u),m=n(12),w=n.n(m),b=(n(19),n(20),n(0)),f=n(3),O=n(1),p=n(2),g=n(7),x=n(13),y=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var j=arguments.length,u=new Array(j),v=0;v<j;v++)u[v]=arguments[v];return(e=t.call.apply(t,[this].concat(u))).init=function(){i=new g.i,a=new g.f(75,window.innerWidth/window.innerHeight,1,1e3),(s=new g.l({antialias:!0})).setSize(window.innerWidth,window.innerHeight),document.body.prepend(s.domElement),s.domElement.classList.add("canvas");var e=new g.a(2,2,2),t=new g.b(e);h=16777215,d=new g.e(t,new g.d({color:4879735})),c=new g.e(t,new g.d({color:h})),i.add(c),i.add(d),o=new g.c;for(var n=0;n<1e4;n++)(r=new g.k(600*Math.random()-300,600*Math.random()-300,600*Math.random()-300)).velocity=0,r.acceleration=.001,o.vertices.push(r);var j=(new g.j).load("star2.png");console.log(j);var u=new g.h({color:11184810,size:.1,map:j});l=new g.g(o,u),i.add(l),a.position.z=5},e.animate=function(){o.vertices.forEach((function(e){e.velocity+=e.acceleration,e.y-=e.velocity,e.y<-200&&(e.y=200,e.velocity=0)})),o.verticesNeedUpdate=!0,requestAnimationFrame(e.animate),c.rotation.x+=.01,c.rotation.y-=.01,d.rotation.x-=.01,d.rotation.y-=.01,s.render(i,a)},e.onWindowResize=function(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth-15,window.innerHeight)},e.scrollToBottom=function(){document.getElementById("nav").scrollIntoView({behavior:"smooth"})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onWindowResize,!1),this.init(),this.animate()}},{key:"render",value:function(){return Object(j.jsxs)("div",{id:"info-bottom",children:[Object(j.jsx)(x.a,{onClick:this.scrollToBottom,className:"view-more",variant:"outline-success",children:"View my work"})," "]})}}]),n}(u.Component),N=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{id:"projects"})}}]),n}(u.Component),k=function(e){Object(O.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isActive:!1,h1className:"",ulclassName:"nav-links",canvasHeight:0},e.toggleNav=function(){e.setState({isActive:!e.state.isActive},e.addClass)},e.addClass=function(){e.state.isActive?e.setState({h1className:"nav-links-active",ulclassName:"nav-links nav-links-active-animation"}):e.setState({h1className:"",ulclassName:"nav-links"})},e.stickyNav=function(e,t){window.pageYOffset>=e?t.classList.add("sticky"):t.classList.remove("sticky")},e.onWindowResize=function(t){e.setState({canvasHeight:t[0].clientHeight})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementsByClassName("canvas"),n=document.getElementById("nav");this.setState({canvasHeight:t[0].clientHeight}),window.addEventListener("scroll",(function(){return e.stickyNav(e.state.canvasHeight,n)}),!1),window.addEventListener("resize",(function(){return e.onWindowResize(t)}),!1)}},{key:"render",value:function(){return console.log(this.state),Object(j.jsxs)("nav",{id:"nav",children:[Object(j.jsxs)("ul",{name:"hello",className:this.state.ulclassName,children:[Object(j.jsx)("li",{children:Object(j.jsx)("h1",{className:this.state.h1className,children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("h1",{className:this.state.h1className,children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("h1",{className:this.state.h1className,children:"Portfolio"})}),Object(j.jsx)("li",{children:Object(j.jsx)("h1",{className:this.state.h1className,children:"Contact"})})]}),Object(j.jsxs)("div",{className:"burger",onClick:this.toggleNav,children:[Object(j.jsx)("div",{className:"line1"}),Object(j.jsx)("div",{className:"line2"}),Object(j.jsx)("div",{className:"line"})]})]})}}]),n}(u.Component);var C=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{}),Object(j.jsxs)("div",{id:"info-top",children:[Object(j.jsxs)("h1",{className:"intro-top",children:["Hello, I'm",Object(j.jsx)("span",{className:"name",children:" Bradley Wilson"})]}),Object(j.jsx)("h1",{className:"intro-bottom",children:"I'm a full-stack web developer."})]}),Object(j.jsx)(k,{}),Object(j.jsx)(N,{})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};n(21);w.a.render(Object(j.jsx)(v.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),H()}},[[22,1,2]]]);
//# sourceMappingURL=main.28c23927.chunk.js.map