(this.webpackJsonpkotlinskidev=this.webpackJsonpkotlinskidev||[]).push([[16],{192:function(e,t,i){"use strict";var a,n,s,c=i(11),r=i(9),l=i(299),o=i(2),p={duration:1.3,ease:"easeInOut"},u={initial:{y:0,opacity:.9,transition:p},initialFirst:{y:0,opacity:.9,delay:1,transition:p},animate:{y:"-100%",opacity:0,transition:p},animateFirst:{y:"100%",opacity:0,transition:p},exit:{y:0,opacity:0,transition:p}},d=Object(r.d)(l.a.div)(a||(a=Object(c.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 9999;\n"]))),b=Object(r.d)(d).attrs((function(){return{className:"transition-helper",initial:"initialFirst",variants:u,animate:"animateFirst",exit:"exit"}}))(n||(n=Object(c.a)(["\n"]))),x=Object(r.d)(d).attrs((function(){return{className:"transition-helper",initial:"initial",variants:u,animate:"animate",exit:"exit"}}))(s||(s=Object(c.a)(["\n"])));t.a=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{}),Object(o.jsx)(x,{})]})}},193:function(e,t,i){"use strict";i(203);var a=i(8),n=i(2);t.a=function(e){var t=e.link,i=e.onClick,s=e.text;return t?Object(n.jsx)(a.Link,{to:t,title:"Link to ".concat(t),"aria-label":"Link to ".concat(t),"referrer-policy":"no-referrer",rel:"preload",children:Object(n.jsx)("button",{onClick:i,className:"btn cursor_hover",children:s})}):Object(n.jsx)("button",{onClick:i,className:"btn cursor_hover",children:s})}},203:function(e,t,i){},209:function(e,t,i){},210:function(e,t,i){},212:function(e,t,i){"use strict";i(209);var a=i(1),n=i.n(a),s=i(208),c=(i(216),i(12)),r=(i(210),i(193)),l=i(81),o=i(29),p=i(13),u=i(46),d=i(196),b=i.n(d),x=i(159),j=i(163),g=i(2),h=Object(x.a)((function(e){return Object(j.a)({paper:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#1a4137",color:"#e1f7f1",border:"2px solid #000",borderRadius:"15px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),v=function(e){var t=h();return Object(g.jsx)("div",{className:"transition-popup__wrapper",style:{outline:0},children:Object(g.jsxs)("div",{className:t.paper,children:[Object(g.jsx)(b.a,{className:"modal-close",onClick:e.handleClosePopup}),Object(g.jsx)("h2",{id:"transition-modal-title",children:e.title}),Object(g.jsx)("p",{id:"transition-modal-description",children:e.text}),Object(g.jsx)(r.a,{onClick:e.handleClose,link:e.link,text:e.buttonText})]})})},m=function(e){var t=Object(a.useState)(!1),i=Object(c.a)(t,2),n=i[0],d=i[1],b=function(){d(!1)};return Object(g.jsx)(s.e,{index:e.index,children:Object(g.jsxs)("div",{className:"service-slide-wrapper",children:[Object(g.jsx)(p.a,{src:e.src,width:"100%",height:"100%",title:e.header,alt:e.header}),Object(g.jsxs)("div",{className:"service-slide-content",children:[Object(g.jsx)("h2",{children:e.header}),Object(g.jsx)("p",{children:e.text}),Object(g.jsx)(r.a,{onClick:function(){d(!0),Object(o.a)("Service","Opened service details",{page:"".concat(_store.getState().pageState.page),name:e.header})},link:e.link,text:e.buttonText},Object(u.a)()),Object(g.jsx)(l.a,{open:n,children:Object(g.jsx)(v,{handleClose:b,handleClosePopup:b,title:e.popup.title,text:e.popup.text,buttonText:e.popup.buttonText})})]})]})})};t.a=function(e){var t=_store.getState().pageState.mobile;return Object(g.jsxs)(s.c,{naturalSlideWidth:100,naturalSlideHeight:125,totalSlides:e.slides,visibleSlides:t?1:e.visibleSlides,children:[Object(g.jsx)(s.f,{children:e.data.map((function(e,i){var a=t?e.imageMobile:e.image;return Object(g.jsx)(n.a.Fragment,{children:Object(g.jsx)(m,{index:i,buttonText:e.buttonText,link:e.link,src:a,header:e.header,text:e.text,popup:e.popup})},i)}))}),Object(g.jsx)("div",{className:"carousel__back cursor_hover",children:Object(g.jsx)(s.a,{children:"Back"})}),Object(g.jsx)("div",{className:"carousel__next cursor_hover",children:Object(g.jsx)(s.b,{children:"Next"})}),Object(g.jsx)(s.d,{})]})}},303:function(e,t,i){"use strict";i.r(t);var a=i(10),n=i(14),s=i(1),c=i(28),r=i(27),l=i(192),o=i(212),p=i.p+"static/media/plc.ffd82039.webp",u=i.p+"static/media/industry.ad7252ef.webp",d=i.p+"static/media/smart_home.9f99a22b.webp",b=i.p+"static/media/plc_mobile.91480230.webp",x=i.p+"static/media/industry_mobile.b105868c.webp",j=i.p+"static/media/smart_home_mobile.15e6fcae.webp",g=i(2);t.default=function(e){Object(n.b)()(Object(a.f)("Contact"));var t=e.HandleMouseoverEffects,i=e.title;t(),Object(s.useEffect)((function(){document.title=i||""}),[i]);var h=[{image:p,imageMobile:b,header:language.pages.services.plc.inner.header1,text:language.pages.services.plc.inner.text1,link:language.pages.services.plc.link,buttonText:language.pages.services.buttonText,popup:{title:language.pages.services.popup.title,text:language.pages.services.popup.text,buttonText:language.pages.services.popup.buttonText}},{image:u,imageMobile:x,header:language.pages.services.plc.inner.header2,text:language.pages.services.plc.inner.text2,link:language.pages.services.plc.link,buttonText:language.pages.services.buttonText,popup:{title:language.pages.services.popup.title,text:language.pages.services.popup.text,buttonText:language.pages.services.popup.buttonText}},{image:d,imageMobile:j,header:language.pages.services.plc.inner.header3,text:language.pages.services.plc.inner.text3,link:language.pages.services.plc.link,buttonText:language.pages.services.buttonText,popup:{title:language.pages.services.popup.title,text:language.pages.services.popup.text,buttonText:language.pages.services.popup.buttonText}}];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(l.a,{}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"main-inner main-services",style:{display:"flex",flexDirection:"column",alignItems:"center",height:"100%"},children:[Object(g.jsx)(c.a,{}),Object(g.jsx)(o.a,{slides:Object.keys(h).length,visibleSlides:1,data:h})]}),Object(g.jsx)(r.a,{})]})]})}}}]);
//# sourceMappingURL=16.a7609925.chunk.js.map