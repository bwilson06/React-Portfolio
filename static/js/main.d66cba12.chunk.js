(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i,a,s,c,o,l,r,d,h,j,m=n(5),u=n(6),v=n.n(u),b=n(12),w=n.n(b),f=(n(20),n(21),n(0)),O=n(3),p=n(1),g=n(2),x=n(4),y=n(13),N=n(14),k=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(f.a)(this,n);for(var m=arguments.length,u=new Array(m),v=0;v<m;v++)u[v]=arguments[v];return(e=t.call.apply(t,[this].concat(u))).init=function(){i=new x.l,a=new x.h(75,window.innerWidth/window.innerHeight,1,1e3),s=new x.r({antialias:!0}),(j=new y.a(a,s.domElement)).enableZoom=!1,j.enableRotate=!1,s.setSize(window.innerWidth,window.innerHeight),document.body.prepend(s.domElement),s.domElement.classList.add("canvas");var e=new x.a(2,2,2),t=new x.b(e);h=16777215,d=new x.f(t,new x.e({color:4879735})),c=new x.f(t,new x.e({color:h})),i.add(c),i.add(d),o=new x.d;for(var n=0;n<1e4;n++)(l=new x.q(600*Math.random()-300,600*Math.random()-300,600*Math.random()-300)).velocity=0,l.acceleration=.001,o.vertices.push(l);var m=(new x.o).load("star2.png");console.log(m);var u=new x.j({color:11184810,size:.1,map:m});r=new x.i(o,u),i.add(r),a.position.z=5},e.animate=function(){o.vertices.forEach((function(e){e.velocity+=e.acceleration,e.y-=e.velocity,e.y<-200&&(e.y=200,e.velocity=0)})),o.verticesNeedUpdate=!0,requestAnimationFrame(e.animate),c.rotation.x+=.01,c.rotation.y-=.01,d.rotation.x-=.01,d.rotation.y-=.01,s.render(i,a)},e.onWindowResize=function(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth-15,window.innerHeight)},e.scrollToBottom=function(){document.getElementById("nav").scrollIntoView({behavior:"smooth"})},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onWindowResize,!1),this.init(),this.animate()}},{key:"render",value:function(){return Object(m.jsxs)("div",{id:"info-bottom",children:[Object(m.jsx)(N.a,{onClick:this.scrollToBottom,className:"view-more",variant:"outline-success",children:"View my work"})," "]})}}]),n}(u.Component),C=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{id:"projects"})}}]),n}(u.Component),H=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(f.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isActive:!1,h1className:"",ulclassName:"nav-links",canvasHeight:0},e.toggleNav=function(){e.setState({isActive:!e.state.isActive},e.addClass)},e.addClass=function(){e.state.isActive?e.setState({h1className:"nav-links-active",ulclassName:"nav-links nav-links-active-animation"}):e.setState({h1className:"",ulclassName:"nav-links"})},e.stickyNav=function(e,t){window.pageYOffset>=e?t.classList.add("sticky"):t.classList.remove("sticky")},e.onWindowResize=function(t){e.setState({canvasHeight:t[0].clientHeight})},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementsByClassName("canvas"),n=document.getElementById("nav");this.setState({canvasHeight:t[0].clientHeight}),window.addEventListener("scroll",(function(){return e.stickyNav(e.state.canvasHeight,n)}),!1),window.addEventListener("resize",(function(){return e.onWindowResize(t)}),!1)}},{key:"render",value:function(){return console.log(this.state),Object(m.jsxs)("nav",{id:"nav",children:[Object(m.jsxs)("ul",{name:"hello",className:this.state.ulclassName,children:[Object(m.jsx)("li",{children:Object(m.jsx)("h1",{className:this.state.h1className,children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("h1",{className:this.state.h1className,children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("h1",{className:this.state.h1className,children:"Portfolio"})}),Object(m.jsx)("li",{children:Object(m.jsx)("h1",{className:this.state.h1className,children:"Contact"})})]}),Object(m.jsxs)("div",{className:"burger",onClick:this.toggleNav,children:[Object(m.jsx)("div",{className:"line1"}),Object(m.jsx)("div",{className:"line2"}),Object(m.jsx)("div",{className:"line"})]})]})}}]),n}(u.Component);var E=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{}),Object(m.jsxs)("div",{id:"info-top",children:[Object(m.jsxs)("h1",{className:"intro-top",children:["Hello, I'm",Object(m.jsx)("span",{className:"name",children:" Bradley Wilson"})]}),Object(m.jsx)("h1",{className:"intro-bottom",children:"I'm a full-stack web developer."})]}),Object(m.jsx)(H,{}),Object(m.jsx)(C,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};n(22);w.a.render(Object(m.jsx)(v.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),z()}},[[23,1,2]]]);
//# sourceMappingURL=main.d66cba12.chunk.js.map