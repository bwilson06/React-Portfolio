(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i,a,s,c,o,l,r,d,h,v=n(5),u=n(6),m=n.n(u),j=n(12),w=n.n(j),b=(n(20),n(21),n(0)),f=n(3),O=n(1),g=n(2),p=n(4),N=n(13),x=n(14),y=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(b.a)(this,n);for(var v=arguments.length,u=new Array(v),m=0;m<v;m++)u[m]=arguments[m];return(e=t.call.apply(t,[this].concat(u))).init=function(){i=new p.l,a=new p.h(75,window.innerWidth/window.innerHeight,1,1e3),s=new p.r({antialias:!0}),new N.a(a,s.domElement).touches.TWO=p.n.ZOOM,s.setSize(window.innerWidth,window.innerHeight),document.body.prepend(s.domElement),s.domElement.classList.add("canvas");var e=new p.a(2,2,2),t=new p.b(e);h=16777215,d=new p.f(t,new p.e({color:4879735})),c=new p.f(t,new p.e({color:h})),i.add(c),i.add(d),o=new p.d;for(var n=0;n<1e4;n++)(l=new p.q(600*Math.random()-300,600*Math.random()-300,600*Math.random()-300)).velocity=0,l.acceleration=.001,o.vertices.push(l);var v=(new p.o).load("star2.png");console.log(v);var u=new p.j({color:11184810,size:.1,map:v});r=new p.i(o,u),i.add(r),a.position.z=5},e.animate=function(){o.vertices.forEach((function(e){e.velocity+=e.acceleration,e.y-=e.velocity,e.y<-200&&(e.y=200,e.velocity=0)})),o.verticesNeedUpdate=!0,requestAnimationFrame(e.animate),c.rotation.x+=.01,c.rotation.y-=.01,d.rotation.x-=.01,d.rotation.y-=.01,s.render(i,a)},e.onWindowResize=function(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth-15,window.innerHeight)},e.scrollToBottom=function(){document.getElementById("nav").scrollIntoView({behavior:"smooth"})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onWindowResize,!1),this.init(),this.animate()}},{key:"render",value:function(){return Object(v.jsxs)("div",{id:"info-bottom",children:[Object(v.jsx)(x.a,{onClick:this.scrollToBottom,className:"view-more",variant:"outline-success",children:"View my work"})," "]})}}]),n}(u.Component),k=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{id:"projects"})}}]),n}(u.Component),H=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(b.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isActive:!1,h1className:"",ulclassName:"nav-links",canvasHeight:0},e.toggleNav=function(){e.setState({isActive:!e.state.isActive},e.addClass)},e.addClass=function(){e.state.isActive?e.setState({h1className:"nav-links-active",ulclassName:"nav-links nav-links-active-animation"}):e.setState({h1className:"",ulclassName:"nav-links"})},e.stickyNav=function(t,n){console.log(window.pageYOffset,e.state.canvasHeight),window.pageYOffset>=t?n.classList.add("sticky"):n.classList.remove("sticky"),e.state.isActive&&window.pageYOffset<=e.state.canvasHeight&&e.setState({isActive:!1,h1className:"",ulclassName:"nav-links"})},e.onWindowResize=function(t){e.setState({canvasHeight:t[0].clientHeight})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementsByClassName("canvas"),n=document.getElementById("nav");this.setState({canvasHeight:t[0].clientHeight}),window.addEventListener("scroll",(function(){return e.stickyNav(e.state.canvasHeight,n)}),!1),window.addEventListener("resize",(function(){return e.onWindowResize(t)}),!1)}},{key:"render",value:function(){return console.log(this.state),Object(v.jsxs)("nav",{id:"nav",children:[Object(v.jsxs)("ul",{name:"hello",className:this.state.ulclassName,children:[Object(v.jsx)("li",{children:Object(v.jsx)("h1",{className:this.state.h1className,children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)("h1",{className:this.state.h1className,children:"About"})}),Object(v.jsx)("li",{children:Object(v.jsx)("h1",{className:this.state.h1className,children:"Portfolio"})}),Object(v.jsx)("li",{children:Object(v.jsx)("h1",{className:this.state.h1className,children:"Contact"})})]}),Object(v.jsxs)("div",{className:"burger",onClick:this.toggleNav,children:[Object(v.jsx)("div",{className:"line1"}),Object(v.jsx)("div",{className:"line2"}),Object(v.jsx)("div",{className:"line"})]})]})}}]),n}(u.Component);var C=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{}),Object(v.jsxs)("div",{id:"info-top",children:[Object(v.jsxs)("h1",{className:"intro-top",children:["Hello, I'm",Object(v.jsx)("span",{className:"name",children:" Bradley Wilson"})]}),Object(v.jsx)("h1",{className:"intro-bottom",children:"I'm a full-stack web developer."})]}),Object(v.jsx)(H,{}),Object(v.jsx)(k,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};n(22);w.a.render(Object(v.jsx)(m.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),E()}},[[23,1,2]]]);
//# sourceMappingURL=main.7604b52b.chunk.js.map