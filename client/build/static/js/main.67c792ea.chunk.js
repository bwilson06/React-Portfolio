(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{65:function(e,t,s){},66:function(e,t,s){},98:function(e,t,s){"use strict";s.r(t);var a,n,c,i,o,l,r,d,j,h,m=s(1),b=s(0),u=s.n(b),O=s(17),x=s.n(O),f=(s(65),s(66),s(2)),p=s(9),g=s(5),w=s(6),v=s(8),y=s(54),N=s(55),k=function(e){Object(g.a)(s,e);var t=Object(w.a)(s);function s(){var e;Object(f.a)(this,s);for(var m=arguments.length,b=new Array(m),u=0;u<m;u++)b[u]=arguments[u];return(e=t.call.apply(t,[this].concat(b))).state={windowHeight:0},e.init=function(){a=new v.l,n=new v.h(75,window.innerWidth/window.innerHeight,.1,1e3),c=new v.r({antialias:!0}),(h=new y.a(n,c.domElement)).enableZoom=!1,h.enablePan=!1,c.setSize(window.innerWidth,window.innerHeight),document.body.prepend(c.domElement),c.domElement.classList.add("canvas"),c.domElement.setAttribute("id","home");var e=new v.a(1.5,1.5,1.5),t=new v.b(e);j=16777215,d=new v.f(t,new v.e({color:4879735})),(i=new v.f(t,new v.e({color:j}))).position.y=.5,d.position.y=.5,a.add(i),a.add(d),o=new v.d;for(var s=0;s<5e4;s++)(l=new v.q(600*Math.random()-300,600*Math.random()-300,600*Math.random()-300)).velocity=0,l.acceleration=.001,o.vertices.push(l);var m=(new v.o).load("star2.png"),b=new v.j({color:11184810,size:.1,map:m});r=new v.i(o,b),a.add(r),n.position.z=5},e.animate=function(){o.vertices.forEach((function(e){e.velocity+=e.acceleration,e.y-=e.velocity,e.y<-200&&(e.y=200,e.velocity=0)})),o.verticesNeedUpdate=!0,requestAnimationFrame(e.animate),i.rotation.x+=.01,i.rotation.y-=.01,d.rotation.x-=.01,d.rotation.y-=.01,c.render(a,n)},e.onWindowResize=function(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight),e.setState({windowHeight:window.innerWidth})},e.scrollToBottom=function(){document.getElementById("about").scrollIntoView({behavior:"smooth"})},e}return Object(p.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onWindowResize,!1),this.init(),this.animate()}},{key:"render",value:function(){return Object(m.jsxs)("div",{id:"home",children:[Object(m.jsxs)("div",{id:"info-top",children:[Object(m.jsxs)("h1",{className:"intro-top",children:["Hello, I'm",Object(m.jsx)("span",{className:"name",children:" Bradley Wilson"})]}),Object(m.jsx)("h1",{className:"intro-bottom",children:"I'm a full-stack web developer."})]}),Object(m.jsxs)("div",{id:"info-bottom",children:[Object(m.jsx)(N.a,{onClick:this.scrollToBottom,className:"view-more",variant:"outline-success",children:"About Me"})," "]})]})}}]),s}(b.Component),C=s(15),E=(s(67),s(100)),I=s.p+"static/media/me.b6a275c5.jpg",S=function(){var e=Object(b.useState)(0),t=Object(C.a)(e,2),s=t[0],a=t[1],n=function(e){e.preventDefault(),document.getElementById("projects").scrollIntoView({behavior:"smooth"})};return Object(b.useEffect)((function(){window.addEventListener("scroll",(function(){return function(){window.pageYOffset>=20&&document.getElementsByClassName("about-header-container")[0].classList.add("aboutme-animation");var e=document.getElementsByClassName("projects")[0],t=document.getElementsByClassName("contact")[0];window.pageYOffset>=e.clientHeight+210&&document.getElementsByClassName("projects-header-container")[0].classList.add("projects-animation"),window.pageYOffset>=t.clientHeight+800&&document.getElementsByClassName("contact-header-container")[0].classList.add("contact-animation")}()}),!1)}),[]),0===s?Object(m.jsx)("div",{id:"about",children:Object(m.jsxs)(E.a,{className:"about",children:[Object(m.jsxs)("div",{className:"about-header-container",children:[Object(m.jsx)("h1",{className:"about-header",children:"About"}),Object(m.jsx)("h4",{style:{height:"2px",color:"white"},className:"text-center",children:"______"})]}),Object(m.jsxs)("div",{className:"about-content-container",children:[Object(m.jsxs)("div",{className:"my-pic",children:[Object(m.jsx)("img",{style:{width:"100%",height:"100%",borderWidth:"2px",borderStyle:"solid",borderColor:"#74c69d"},src:I,alt:"me"}),Object(m.jsxs)("h4",{className:"text-center",style:{fontFamily:"Poppins",marginTop:"10px"},children:[Object(m.jsx)("a",{href:"https://bootcamp.wisconsin.edu/",target:"_blank",children:"UW Coding Bootcamp"})," ","Graduate"]})]}),Object(m.jsx)("div",{className:"my-content",children:Object(m.jsxs)("p",{style:{overflowWrap:"break-word",fontSize:"20px",fontFamily:"Poppins"},children:["My passion for programming ultimately began when I discovered that I could create almost anything that came to mind by utlizing small IoT devices such as Arduino\xa9. My first projects were mostly hobbyist home automation systems that were fueled by a desire to learn more about the world of computer science. In the end that desire led me to begin my journey as a Full-Stack Web Developer, creating innovative apps with an inspiration to change the world around me."," "]})})]}),Object(m.jsxs)("div",{className:"about-arrow-container",children:[Object(m.jsx)("i",{style:{color:"rgb(212,212,212)"},class:"far fa-arrow-alt-circle-left"}),Object(m.jsx)("i",{class:"far fa-arrow-alt-circle-right",onClick:function(){return a(1)}})]}),Object(m.jsx)("h1",{onClick:function(e){return n(e)},className:"about-scroll",children:Object(m.jsx)("i",{class:"fas fa-arrow-circle-down"})})]})}):Object(m.jsx)("div",{id:"about",children:Object(m.jsxs)(E.a,{className:"about",children:[Object(m.jsxs)("div",{className:"about-header-container",children:[Object(m.jsx)("h1",{className:"about-header",children:"About"}),Object(m.jsx)("h4",{style:{height:"2px",color:"white"},className:"text-center",children:"______"})]}),Object(m.jsxs)("div",{className:"about-content-container",children:[Object(m.jsxs)("div",{className:"mern",children:[Object(m.jsx)("p",{className:"mern-header",children:"I have mastered the MERN stack"}),Object(m.jsxs)("ul",{className:"mern-ul",children:[Object(m.jsxs)("li",{className:"mern-li",children:["MongoDB ",Object(m.jsx)("i",{class:"fas fa-database"})]}),Object(m.jsxs)("li",{className:"mern-li",children:["ExpressJS ",Object(m.jsx)("i",{class:"fas fa-server"})]}),Object(m.jsxs)("li",{className:"mern-li",children:["ReactJS ",Object(m.jsx)("i",{class:"fab fa-react"})]}),Object(m.jsxs)("li",{className:"mern-li",children:["NodeJS ",Object(m.jsx)("i",{class:"fab fa-node-js"})]})]})]}),Object(m.jsxs)("div",{className:"skills",children:[Object(m.jsx)("p",{className:"skills-header",children:"Other Skills/Knowledge"}),Object(m.jsxs)("ul",{className:"skills-ul",children:[Object(m.jsx)("li",{className:"skills-li",children:"ES6 Javascript"}),Object(m.jsx)("li",{className:"skills-li",children:"CSS3"}),Object(m.jsx)("li",{className:"skills-li",children:"HTML5"}),Object(m.jsx)("li",{className:"skills-li",children:"MySQL"}),Object(m.jsx)("li",{className:"skills-li",children:"Bootstrap"}),Object(m.jsx)("li",{className:"skills-li",children:"Flexbox"}),Object(m.jsx)("li",{className:"skills-li",children:"RESTful API's"}),Object(m.jsx)("li",{className:"skills-li",children:"EJS"}),Object(m.jsx)("li",{className:"skills-li",children:"HandlebarsJS"}),Object(m.jsx)("li",{className:"skills-li",children:"Socket.io"})]})]})]}),Object(m.jsxs)("div",{className:"about-arrow-container",children:[Object(m.jsx)("i",{class:"far fa-arrow-alt-circle-left",onClick:function(){return a(0)}}),Object(m.jsx)("i",{style:{color:"rgb(212,212,212)"},class:"far fa-arrow-alt-circle-right"})]}),Object(m.jsx)("h1",{onClick:function(e){return n(e)},className:"about-scroll",children:Object(m.jsx)("i",{class:"fas fa-arrow-circle-down"})})]})})},_=s(103),L=s.p+"static/media/dogstr.04771c39.png",B=s.p+"static/media/chatty.ff739603.png",F=s.p+"static/media/PetsFurFriends.40e94ed4.png",M=function(){var e=Object(b.useState)(0),t=Object(C.a)(e,2),s=t[0],a=t[1],n=function(e){e.preventDefault(),document.getElementById("contact").scrollIntoView({behavior:"smooth"})};return Object(m.jsx)("div",{id:"projects",className:"projects",children:Object(m.jsxs)(E.a,{children:[Object(m.jsxs)("div",{className:"projects-header-container",children:[Object(m.jsx)("h1",{className:"projects-header",children:"Projects"}),Object(m.jsx)("h4",{style:{height:"2px",color:"white"},className:"text-center",children:"______"})]}),Object(m.jsxs)(_.a,{id:"carousel",activeIndex:s,onSelect:function(e,t){a(e)},children:[Object(m.jsx)(_.a.Item,{children:Object(m.jsxs)("a",{href:"https://dogstr-react.herokuapp.com/",target:"_blank",children:[Object(m.jsx)("img",{className:"d-block carousel-image",src:L,alt:"First slide"}),Object(m.jsxs)(_.a.Caption,{children:[Object(m.jsx)("h3",{children:"Dogstr"}),Object(m.jsx)("p",{children:"Search for top rated Dog Parks in your area."})]})]})}),Object(m.jsx)(_.a.Item,{children:Object(m.jsxs)("a",{href:"https://chatty-react-bw.herokuapp.com/",target:"_blank",children:[Object(m.jsx)("img",{className:"d-block carousel-image",src:B,alt:"Second slide"}),Object(m.jsxs)(_.a.Caption,{children:[Object(m.jsx)("h3",{children:"Chatty"}),Object(m.jsx)("p",{children:"Instantly connect/chat with people around the world."})]})]})}),Object(m.jsx)(_.a.Item,{children:Object(m.jsxs)("a",{href:"https://team-crush-it.github.io/Pets-Fur-Friends/",target:"_blank",children:[Object(m.jsx)("img",{className:"d-block carousel-image",src:F,alt:"Third slide"}),Object(m.jsxs)(_.a.Caption,{children:[Object(m.jsx)("h3",{children:"Pets Fur Friends"}),Object(m.jsx)("p",{children:"Looking to adopt? Find the purrfect pet for you!"})]})]})})]}),Object(m.jsx)("h1",{onClick:function(e){return n(e)},className:"projects-scroll",children:Object(m.jsx)("i",{class:"fas fa-arrow-circle-down"})}),Object(m.jsxs)("p",{className:"projects-contact-link",children:["Like what you see? ",Object(m.jsx)("a",{onClick:function(e){return n(e)},className:"projects-connect-link",children:"Connect"})," with me!"]})]})})},D=s(101),H=function(e){return e.status?Object(m.jsx)("div",{children:Object(m.jsx)("h1",{className:"message-status",id:"message-status",children:"Message Sent!"})}):Object(m.jsx)("h1",{className:"message-status",id:"message-status",children:"Message Failed!"})},P=s(59),T=s.n(P),W=function(){var e=Object(b.useState)(""),t=Object(C.a)(e,2),s=t[0],a=t[1],n=Object(b.useState)(""),c=Object(C.a)(n,2),i=c[0],o=c[1],l=Object(b.useState)(""),r=Object(C.a)(l,2),d=r[0],j=r[1],h=Object(b.useState)(!1),u=Object(C.a)(h,2),O=u[0],x=u[1];return Object(m.jsx)("div",{id:"contact",className:"contact",children:Object(m.jsxs)(E.a,{children:[Object(m.jsxs)("div",{className:"contact-header-container",children:[Object(m.jsx)("h1",{className:"contact-header",children:"Contact"}),Object(m.jsx)("h4",{style:{height:"2px",color:"white"},className:"text-center",children:"______"})]}),Object(m.jsxs)(D.a,{className:"contact-form",children:[Object(m.jsxs)(D.a.Group,{onChange:function(e){return function(e){e.preventDefault(),a(e.target.value)}(e)},controlId:"formGroupName",children:[Object(m.jsx)(D.a.Label,{children:"Name"}),Object(m.jsx)(D.a.Control,{type:"name",value:s,placeholder:"Enter name"})]}),Object(m.jsxs)(D.a.Group,{onChange:function(e){return function(e){e.preventDefault(),o(e.target.value)}(e)},controlId:"formGroupEmail",children:[Object(m.jsx)(D.a.Label,{children:"Email address"}),Object(m.jsx)(D.a.Control,{type:"email",value:i,placeholder:"Enter email"})]}),Object(m.jsx)(H,{status:O}),Object(m.jsxs)(D.a.Group,{onChange:function(e){return function(e){e.preventDefault(),j(e.target.value)}(e)},controlId:"exampleForm.ControlTextarea1",children:[Object(m.jsx)(D.a.Label,{children:"Message"}),Object(m.jsx)(D.a.Control,{as:"textarea",value:d,rows:6})]}),Object(m.jsx)(N.a,{onClick:function(e){return function(e){e.preventDefault();var t={name:s,email:i,message:d};T.a.post("/send",t).then((function(e){o(""),a(""),j(""),"success"===e.data.status?(console.log("Message Sent."),x(!0),document.getElementById("message-status").classList.add("message-status-animation"),setTimeout((function(){document.getElementById("message-status").classList.remove("message-status-animation")}),2e3)):"fail"===e.data.status&&(console.log("Message failed to send."),x(!1),document.getElementById("message-status").classList.add("message-status-animation"),setTimeout((function(){document.getElementById("message-status").classList.remove("message-status-animation")}),2e3))})).catch((function(e){console.log(e)}))}(e)},variant:"outline-primary",children:"Submit"})]}),Object(m.jsxs)(N.a,{onClick:function(e){return function(e){e.preventDefault(),document.getElementById("footer").scrollIntoView({behavior:"smooth"})}(e)},className:"find-me",children:["Find me here",Object(m.jsx)("h1",{style:{marginLeft:"8px"},children:Object(m.jsx)("i",{class:"fas fa-arrow-circle-down"})})]})]})})},z=s(11),A=s(104),J=s(102),G=function(){var e,t=Object(b.useState)(),s=Object(C.a)(t,2),a=(s[0],s[1]),n=function(e){e.preventDefault();document.getElementById(e.target.name).scrollIntoView({behavior:"smooth",block:"start"})};return Object(b.useEffect)((function(){var e=document.getElementsByClassName("canvas"),t=document.getElementById("nav");window.addEventListener("scroll",(function(){return function(e,t){window.pageYOffset>=e[0].clientHeight?t.classList.add("sticky"):t.classList.remove("sticky")}(e,t)}),!1),window.addEventListener("resize",(function(){return function(e){a(e[0].clientHeight)}(e)}),!1)}),[]),Object(m.jsxs)(A.a,{id:"nav",expand:"lg",children:[Object(m.jsx)(A.a.Brand,{className:"nav-header",children:"BW"}),Object(m.jsx)(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(A.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(J.a,(e={className:"nav-links"},Object(z.a)(e,"className","mr-auto"),Object(z.a)(e,"children",[Object(m.jsx)(J.a.Link,{name:"home",onClick:function(e){return n(e)},children:"Home"}),Object(m.jsx)(J.a.Link,{name:"about",onClick:function(e){return n(e)},children:"About"}),Object(m.jsx)(J.a.Link,{name:"projects",onClick:function(e){return n(e)},children:"Projects"}),Object(m.jsx)(J.a.Link,{name:"contact",onClick:function(e){return n(e)},children:"Contact"})]),e))})]})},R=function(){return Object(m.jsx)("div",{id:"footer",className:"footer",children:Object(m.jsxs)("div",{className:"social-container",children:[Object(m.jsx)("i",{class:"fab fa-twitter-square social-link",onClick:function(){return window.open("https://twitter.com/Bradley03587052","_blank")}}),Object(m.jsx)("i",{class:"fab fa-github-square social-link",onClick:function(){return window.open("https://github.com/bwilson06","_blank")}}),Object(m.jsx)("i",{class:"fab fa-linkedin social-link",onClick:function(){return window.open("https://www.linkedin.com/in/bradley-wilson-698405212/","_blank")}})]})})};var V=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{}),Object(m.jsx)(G,{}),Object(m.jsx)(S,{}),Object(m.jsx)(M,{}),Object(m.jsx)(W,{}),Object(m.jsx)(R,{})]})},q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,105)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};s(97);x.a.render(Object(m.jsx)(u.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root")),q()}},[[98,1,2]]]);
//# sourceMappingURL=main.67c792ea.chunk.js.map