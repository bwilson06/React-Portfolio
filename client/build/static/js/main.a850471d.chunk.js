(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a,s,c,i,o,r,l,d,j,m,h=n(1),u=n(0),b=n.n(u),f=n(17),O=n.n(f),p=(n(65),n(66),n(2)),x=n(9),g=n(5),w=n(6),v=n(8),y=n(54),N=n(55),k=function(e){Object(g.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(p.a)(this,n);for(var h=arguments.length,u=new Array(h),b=0;b<h;b++)u[b]=arguments[b];return(e=t.call.apply(t,[this].concat(u))).state={windowHeight:0},e.init=function(){a=new v.l,s=new v.h(75,window.innerWidth/window.innerHeight,.1,1e3),c=new v.r({antialias:!0}),(m=new y.a(s,c.domElement)).enableZoom=!1,m.enablePan=!1,c.setSize(window.innerWidth,window.innerHeight),document.body.prepend(c.domElement),c.domElement.classList.add("canvas"),c.domElement.setAttribute("id","home");var e=new v.a(1.5,1.5,1.5),t=new v.b(e);j=16777215,d=new v.f(t,new v.e({color:4879735})),(i=new v.f(t,new v.e({color:j}))).position.y=.5,d.position.y=.5,a.add(i),a.add(d),o=new v.d;for(var n=0;n<5e4;n++)(r=new v.q(600*Math.random()-300,600*Math.random()-300,600*Math.random()-300)).velocity=0,r.acceleration=.001,o.vertices.push(r);var h=(new v.o).load("star2.png"),u=new v.j({color:11184810,size:.1,map:h});l=new v.i(o,u),a.add(l),s.position.z=5},e.animate=function(){o.vertices.forEach((function(e){e.velocity+=e.acceleration,e.y-=e.velocity,e.y<-200&&(e.y=200,e.velocity=0)})),o.verticesNeedUpdate=!0,requestAnimationFrame(e.animate),i.rotation.x+=.01,i.rotation.y-=.01,d.rotation.x-=.01,d.rotation.y-=.01,c.render(a,s)},e.onWindowResize=function(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight),e.setState({windowHeight:window.innerWidth})},e.scrollToBottom=function(){document.getElementById("about").scrollIntoView({behavior:"smooth"})},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onWindowResize,!1),this.init(),this.animate()}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"home",children:[Object(h.jsxs)("div",{id:"info-top",children:[Object(h.jsxs)("h1",{className:"intro-top",children:["Hello, I'm",Object(h.jsx)("span",{className:"name",children:" Bradley Wilson"})]}),Object(h.jsx)("h1",{className:"intro-bottom",children:"I'm a full-stack web developer."})]}),Object(h.jsxs)("div",{id:"info-bottom",children:[Object(h.jsx)(N.a,{onClick:this.scrollToBottom,className:"view-more",variant:"outline-success",children:"About Me"})," "]})]})}}]),n}(u.Component),C=(n(67),n(100)),E=n.p+"static/media/me.b6a275c5.jpg",I=function(){return Object(u.useEffect)((function(){window.addEventListener("scroll",(function(){return function(){window.pageYOffset>=20&&document.getElementsByClassName("about-header-container")[0].classList.add("aboutme-animation");var e=document.getElementsByClassName("projects")[0],t=document.getElementsByClassName("contact")[0];window.pageYOffset>=e.clientHeight+210&&document.getElementsByClassName("projects-header-container")[0].classList.add("projects-animation"),window.pageYOffset>=t.clientHeight+800&&document.getElementsByClassName("contact-header-container")[0].classList.add("contact-animation")}()}),!1)}),[]),Object(h.jsx)("div",{id:"about",children:Object(h.jsxs)(C.a,{className:"about",children:[Object(h.jsxs)("div",{className:"about-header-container",children:[Object(h.jsx)("h1",{className:"about-header",children:"About"}),Object(h.jsx)("h4",{style:{height:"2px",color:"white"},className:"text-center",children:"______"})]}),Object(h.jsxs)("div",{className:"about-content-container",children:[Object(h.jsxs)("div",{className:"my-pic",children:[Object(h.jsx)("img",{style:{width:"100%",height:"100%",borderWidth:"2px",borderStyle:"solid",borderColor:"#74c69d"},src:E,alt:"me"}),Object(h.jsxs)("h4",{className:"text-center",style:{fontFamily:"Poppins",marginTop:"10px"},children:[Object(h.jsx)("a",{href:"https://bootcamp.wisconsin.edu/",target:"_blank",children:"UW Coding Bootcamp"})," Graduate"]})]}),Object(h.jsx)("div",{className:"my-content",children:Object(h.jsx)("p",{style:{overflowWrap:"break-word",fontSize:"20px",fontFamily:"Poppins"},children:"My passion for programming ultimately began when I discovered that I could create almost anything that came to mind by utlizing small IoT devices such as Arduino\xa9. My first projects were mostly hobbyist home automation systems that were fueled by a desire to learn more about the world of computer science. In the end that desire led me to begin my journey as a Full-Stack Web Developer, creating innovative apps with an inspiration to change the world around me. "})})]}),Object(h.jsx)("h1",{onClick:function(e){return function(e){e.preventDefault(),document.getElementById("projects").scrollIntoView({behavior:"smooth"})}(e)},className:"about-scroll",children:Object(h.jsx)("i",{class:"fas fa-arrow-circle-down"})})]})})},L=n(16),B=n(103),_=n.p+"static/media/dogstr.04771c39.png",S=n.p+"static/media/chatty.ff739603.png",F=n.p+"static/media/PetsFurFriends.40e94ed4.png",M=function(){var e=Object(u.useState)(0),t=Object(L.a)(e,2),n=t[0],a=t[1],s=function(e){e.preventDefault(),document.getElementById("contact").scrollIntoView({behavior:"smooth"})};return Object(h.jsx)("div",{id:"projects",className:"projects",children:Object(h.jsxs)(C.a,{children:[Object(h.jsxs)("div",{className:"projects-header-container",children:[Object(h.jsx)("h1",{className:"projects-header",children:"Projects"}),Object(h.jsx)("h4",{style:{height:"2px",color:"white"},className:"text-center",children:"______"})]}),Object(h.jsxs)(B.a,{id:"carousel",activeIndex:n,onSelect:function(e,t){a(e)},children:[Object(h.jsx)(B.a.Item,{children:Object(h.jsxs)("a",{href:"https://dogstr-react.herokuapp.com/",target:"_blank",children:[Object(h.jsx)("img",{className:"d-block carousel-image",src:_,alt:"First slide"}),Object(h.jsxs)(B.a.Caption,{children:[Object(h.jsx)("h3",{children:"Dogstr"}),Object(h.jsx)("p",{children:"Search for top rated Dog Parks in your area."})]})]})}),Object(h.jsx)(B.a.Item,{children:Object(h.jsxs)("a",{href:"https://chatty-react-bw.herokuapp.com/",target:"_blank",children:[Object(h.jsx)("img",{className:"d-block carousel-image",src:S,alt:"Second slide"}),Object(h.jsxs)(B.a.Caption,{children:[Object(h.jsx)("h3",{children:"Chatty"}),Object(h.jsx)("p",{children:"Instantly connect/chat with people around the world."})]})]})}),Object(h.jsx)(B.a.Item,{children:Object(h.jsxs)("a",{href:"https://team-crush-it.github.io/Pets-Fur-Friends/",target:"_blank",children:[Object(h.jsx)("img",{className:"d-block carousel-image",src:F,alt:"Third slide"}),Object(h.jsxs)(B.a.Caption,{children:[Object(h.jsx)("h3",{children:"Pets Fur Friends"}),Object(h.jsx)("p",{children:"Looking to adopt? Find the purrfect pet for you!"})]})]})})]}),Object(h.jsx)("h1",{onClick:function(e){return s(e)},className:"projects-scroll",children:Object(h.jsx)("i",{class:"fas fa-arrow-circle-down"})}),Object(h.jsxs)("p",{className:"projects-contact-link",children:["Like what you see? ",Object(h.jsx)("a",{onClick:function(e){return s(e)},className:"projects-connect-link",children:"Connect"})," with me!"]})]})})},D=n(101),W=function(e){return e.status?Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:"message-status",id:"message-status",children:"Message Sent!"})}):Object(h.jsx)("h1",{className:"message-status",id:"message-status",children:"Message Failed!"})},H=n(59),P=n.n(H),T=function(){var e=Object(u.useState)(""),t=Object(L.a)(e,2),n=t[0],a=t[1],s=Object(u.useState)(""),c=Object(L.a)(s,2),i=c[0],o=c[1],r=Object(u.useState)(""),l=Object(L.a)(r,2),d=l[0],j=l[1],m=Object(u.useState)(!1),b=Object(L.a)(m,2),f=b[0],O=b[1];return Object(h.jsx)("div",{id:"contact",className:"contact",children:Object(h.jsxs)(C.a,{children:[Object(h.jsxs)("div",{className:"contact-header-container",children:[Object(h.jsx)("h1",{className:"contact-header",children:"Contact"}),Object(h.jsx)("h4",{style:{height:"2px",color:"white"},className:"text-center",children:"______"})]}),Object(h.jsxs)(D.a,{className:"contact-form",children:[Object(h.jsxs)(D.a.Group,{onChange:function(e){return function(e){e.preventDefault(),a(e.target.value)}(e)},controlId:"formGroupName",children:[Object(h.jsx)(D.a.Label,{children:"Name"}),Object(h.jsx)(D.a.Control,{type:"name",value:n,placeholder:"Enter name"})]}),Object(h.jsxs)(D.a.Group,{onChange:function(e){return function(e){e.preventDefault(),o(e.target.value)}(e)},controlId:"formGroupEmail",children:[Object(h.jsx)(D.a.Label,{children:"Email address"}),Object(h.jsx)(D.a.Control,{type:"email",value:i,placeholder:"Enter email"})]}),Object(h.jsx)(W,{status:f}),Object(h.jsxs)(D.a.Group,{onChange:function(e){return function(e){e.preventDefault(),j(e.target.value)}(e)},controlId:"exampleForm.ControlTextarea1",children:[Object(h.jsx)(D.a.Label,{children:"Message"}),Object(h.jsx)(D.a.Control,{as:"textarea",value:d,rows:6})]}),Object(h.jsx)(N.a,{onClick:function(e){return function(e){e.preventDefault();var t={name:n,email:i,message:d};P.a.post("/send",t).then((function(e){o(""),a(""),j(""),"success"===e.data.status?(console.log("Message Sent."),O(!0),document.getElementById("message-status").classList.add("message-status-animation"),setTimeout((function(){document.getElementById("message-status").classList.remove("message-status-animation")}),2e3)):"fail"===e.data.status&&(console.log("Message failed to send."),O(!1),document.getElementById("message-status").classList.add("message-status-animation"),setTimeout((function(){document.getElementById("message-status").classList.remove("message-status-animation")}),2e3))})).catch((function(e){console.log(e)}))}(e)},variant:"outline-primary",children:"Submit"})]}),Object(h.jsxs)(N.a,{onClick:function(e){return function(e){e.preventDefault(),document.getElementById("footer").scrollIntoView({behavior:"smooth"})}(e)},className:"find-me",children:["Find me here",Object(h.jsx)("h1",{style:{marginLeft:"8px"},children:Object(h.jsx)("i",{class:"fas fa-arrow-circle-down"})})]})]})})},z=n(11),A=n(104),G=n(102),V=function(){var e,t=Object(u.useState)(),n=Object(L.a)(t,2),a=(n[0],n[1]),s=function(e){e.preventDefault();document.getElementById(e.target.name).scrollIntoView({behavior:"smooth",block:"start"})};return Object(u.useEffect)((function(){var e=document.getElementsByClassName("canvas"),t=document.getElementById("nav");window.addEventListener("scroll",(function(){return function(e,t){window.pageYOffset>=e[0].clientHeight?t.classList.add("sticky"):t.classList.remove("sticky")}(e,t)}),!1),window.addEventListener("resize",(function(){return function(e){a(e[0].clientHeight)}(e)}),!1)}),[]),Object(h.jsxs)(A.a,{id:"nav",expand:"lg",children:[Object(h.jsx)(A.a.Brand,{className:"nav-header",children:"BW"}),Object(h.jsx)(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(A.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(G.a,(e={className:"nav-links"},Object(z.a)(e,"className","mr-auto"),Object(z.a)(e,"children",[Object(h.jsx)(G.a.Link,{name:"home",onClick:function(e){return s(e)},children:"Home"}),Object(h.jsx)(G.a.Link,{name:"about",onClick:function(e){return s(e)},children:"About"}),Object(h.jsx)(G.a.Link,{name:"projects",onClick:function(e){return s(e)},children:"Projects"}),Object(h.jsx)(G.a.Link,{name:"contact",onClick:function(e){return s(e)},children:"Contact"})]),e))})]})},q=function(){return Object(h.jsx)("div",{id:"footer",className:"footer",children:Object(h.jsxs)("div",{className:"social-container",children:[Object(h.jsx)("h1",{className:"social-link",children:Object(h.jsx)("i",{class:"fab fa-twitter-square"})}),Object(h.jsx)("h1",{className:"social-link",children:Object(h.jsx)("i",{class:"fab fa-github-square"})}),Object(h.jsx)("h1",{className:"social-link",children:Object(h.jsx)("i",{class:"fab fa-linkedin"})})]})})};var Y=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{}),Object(h.jsx)(V,{}),Object(h.jsx)(I,{}),Object(h.jsx)(M,{}),Object(h.jsx)(T,{}),Object(h.jsx)(q,{})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};n(97);O.a.render(Object(h.jsx)(b.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root")),J()}},[[98,1,2]]]);
//# sourceMappingURL=main.a850471d.chunk.js.map