(this.webpackJsonpkotlinskidev=this.webpackJsonpkotlinskidev||[]).push([[12],{192:function(e,t,a){"use strict";var i,n,s,c=a(11),r=a(9),l=a(299),p=a(2),o={duration:1.3,ease:"easeInOut"},u={initial:{y:0,opacity:.9,transition:o},initialFirst:{y:0,opacity:.9,delay:1,transition:o},animate:{y:"-100%",opacity:0,transition:o},animateFirst:{y:"100%",opacity:0,transition:o},exit:{y:0,opacity:0,transition:o}},g=Object(r.d)(l.a.div)(i||(i=Object(c.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 9999;\n"]))),b=Object(r.d)(g).attrs((function(){return{className:"transition-helper",initial:"initialFirst",variants:u,animate:"animateFirst",exit:"exit"}}))(n||(n=Object(c.a)(["\n"]))),d=Object(r.d)(g).attrs((function(){return{className:"transition-helper",initial:"initial",variants:u,animate:"animate",exit:"exit"}}))(s||(s=Object(c.a)(["\n"])));t.a=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b,{}),Object(p.jsx)(d,{})]})}},193:function(e,t,a){"use strict";a(203);var i=a(8),n=a(2);t.a=function(e){var t=e.link,a=e.onClick,s=e.text;return t?Object(n.jsx)(i.Link,{to:t,title:"Link to ".concat(t),"aria-label":"Link to ".concat(t),"referrer-policy":"no-referrer",rel:"preload",children:Object(n.jsx)("button",{onClick:a,className:"btn cursor_hover",children:s})}):Object(n.jsx)("button",{onClick:a,className:"btn cursor_hover",children:s})}},203:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},212:function(e,t,a){"use strict";a(209);var i=a(1),n=a.n(i),s=a(208),c=(a(216),a(12)),r=(a(210),a(193)),l=a(81),p=a(29),o=a(13),u=a(46),g=a(196),b=a.n(g),d=a(159),x=a(163),j=a(2),v=Object(d.a)((function(e){return Object(x.a)({paper:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#1a4137",color:"#e1f7f1",border:"2px solid #000",borderRadius:"15px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),m=function(e){var t=v();return Object(j.jsx)("div",{className:"transition-popup__wrapper",style:{outline:0},children:Object(j.jsxs)("div",{className:t.paper,children:[Object(j.jsx)(b.a,{className:"modal-close",onClick:e.handleClosePopup}),Object(j.jsx)("h2",{id:"transition-modal-title",children:e.title}),Object(j.jsx)("p",{id:"transition-modal-description",children:e.text}),Object(j.jsx)(r.a,{onClick:e.handleClose,link:e.link,text:e.buttonText})]})})},h=function(e){var t=Object(i.useState)(!1),a=Object(c.a)(t,2),n=a[0],g=a[1],b=function(){g(!1)};return Object(j.jsx)(s.e,{index:e.index,children:Object(j.jsxs)("div",{className:"service-slide-wrapper",children:[Object(j.jsx)(o.a,{src:e.src,width:"100%",height:"100%",title:e.header,alt:e.header}),Object(j.jsxs)("div",{className:"service-slide-content",children:[Object(j.jsx)("h2",{children:e.header}),Object(j.jsx)("p",{children:e.text}),Object(j.jsx)(r.a,{onClick:function(){g(!0),Object(p.a)("Service","Opened service details",{page:"".concat(_store.getState().pageState.page),name:e.header})},link:e.link,text:e.buttonText},Object(u.a)()),Object(j.jsx)(l.a,{open:n,children:Object(j.jsx)(m,{handleClose:b,handleClosePopup:b,title:e.popup.title,text:e.popup.text,buttonText:e.popup.buttonText})})]})]})})};t.a=function(e){var t=_store.getState().pageState.mobile;return Object(j.jsxs)(s.c,{naturalSlideWidth:100,naturalSlideHeight:125,totalSlides:e.slides,visibleSlides:t?1:e.visibleSlides,children:[Object(j.jsx)(s.f,{children:e.data.map((function(e,a){var i=t?e.imageMobile:e.image;return Object(j.jsx)(n.a.Fragment,{children:Object(j.jsx)(h,{index:a,buttonText:e.buttonText,link:e.link,src:i,header:e.header,text:e.text,popup:e.popup})},a)}))}),Object(j.jsx)("div",{className:"carousel__back cursor_hover",children:Object(j.jsx)(s.a,{children:"Back"})}),Object(j.jsx)("div",{className:"carousel__next cursor_hover",children:Object(j.jsx)(s.b,{children:"Next"})}),Object(j.jsx)(s.d,{})]})}},225:function(e,t,a){"use strict";t.a=a.p+"static/media/programming_mobile.5b5dbd8f.webp"},226:function(e,t,a){"use strict";t.a=a.p+"static/media/rwd_mobile.66e41ce9.webp"},227:function(e,t,a){"use strict";t.a=a.p+"static/media/administration_mobile.54ac0bd4.webp"},301:function(e,t,a){"use strict";a.r(t);var i=a(10),n=a(14),s=a(1),c=a(28),r=a(27),l=a(192),p=a(212),o=a.p+"static/media/programming.810ea36e.webp",u=a.p+"static/media/rwd.e2ad18e3.webp",g=a.p+"static/media/spa.32ec162e.webp",b=a.p+"static/media/cleancode.02c354d1.webp",d=a.p+"static/media/administration.18b12c2b.webp",x=a.p+"static/media/javascript.3ca2dc54.webp",j=a(225),v=a(226),m=a.p+"static/media/spa_mobile.ca6e5cde.webp",h=a.p+"static/media/cleancode_mobile.1296b2ab.webp",O=a(227),f=a.p+"static/media/javascript_mobile.609d5905.webp",w=a(2);t.default=function(e){Object(n.b)()(Object(i.f)("/services/web-development"));var t=e.HandleMouseoverEffects,a=e.title;t(),Object(s.useEffect)((function(){document.title=a||""}),[a]);var k=[{image:o,imageMobile:j.a,header:language.pages.services.web.inner.header1,text:language.pages.services.web.inner.text1,link:language.pages.services.web.link,buttonText:language.pages.services.buttonText,popup:{title:language.pages.services.popup.title,text:language.pages.services.popup.text,buttonText:language.pages.services.popup.buttonText}},{image:u,imageMobile:v.a,header:language.pages.services.web.inner.header2,text:language.pages.services.web.inner.text2,link:language.pages.services.web.link,buttonText:language.pages.services.buttonText,popup:{title:language.pages.services.popup.title,text:language.pages.services.popup.text,buttonText:language.pages.services.popup.buttonText}},{image:g,imageMobile:m,header:language.pages.services.web.inner.header3,text:language.pages.services.web.inner.text3,link:language.pages.services.web.link,buttonText:language.pages.services.buttonText,popup:{title:language.pages.services.popup.title,text:language.pages.services.popup.text,buttonText:language.pages.services.popup.buttonText}},{image:b,imageMobile:h,header:language.pages.services.web.inner.header4,text:language.pages.services.web.inner.text4,link:language.pages.services.web.link,buttonText:language.pages.services.buttonText,popup:{title:language.pages.services.popup.title,text:language.pages.services.popup.text,buttonText:language.pages.services.popup.buttonText}},{image:d,imageMobile:O.a,header:language.pages.services.web.inner.header5,text:language.pages.services.web.inner.text5,link:language.pages.services.web.link,buttonText:language.pages.services.buttonText,popup:{title:language.pages.services.popup.title,text:language.pages.services.popup.text,buttonText:language.pages.services.popup.buttonText}},{image:x,imageMobile:f,header:language.pages.services.web.inner.header6,text:language.pages.services.web.inner.text6,link:language.pages.services.web.link,buttonText:language.pages.services.buttonText,popup:{title:language.pages.services.popup.title,text:language.pages.services.popup.text,buttonText:language.pages.services.popup.buttonText}}];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(l.a,{}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"main-inner main-services",style:{display:"flex",flexDirection:"column",alignItems:"center",height:"100%"},children:[Object(w.jsx)(c.a,{}),Object(w.jsx)(p.a,{slides:Object.keys(k).length,visibleSlides:1,data:k})]}),Object(w.jsx)(r.a,{})]})]})}}}]);
//# sourceMappingURL=12.683c331c.chunk.js.map