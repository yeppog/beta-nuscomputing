(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"75ko":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Z3vd"),l=a("Wbzz");t.a=function(){return r.a.createElement(o.a,{variant:"contained",color:"secondary",disabled:!0,component:l.Link,to:""},"Sign up now")}},PJCl:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),o=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=o},ohgY:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("hlFM"),l=a("wb2y"),i=a("ofer"),c=a("Z3vd"),s=a("1NhI"),m=a("wx14"),u=a("Ff2n"),d=a("iuhU"),f=a("H2TA"),h=a("HR5l");var p,g,v=(p=n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),(g=function(e,t){return r.a.createElement(h.a,Object(m.a)({ref:t},e),p)}).muiName=h.a.muiName,r.a.memo(r.a.forwardRef(g)));var b=n.forwardRef((function(e,t){var a=e.alt,r=e.children,o=e.classes,l=e.className,i=e.component,c=void 0===i?"div":i,s=e.imgProps,f=e.sizes,h=e.src,p=e.srcSet,g=e.variant,b=void 0===g?"circle":g,y=Object(u.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=null,w=function(e){var t=e.src,a=e.srcSet,r=n.useState(!1),o=r[0],l=r[1];return n.useEffect((function(){if(t||a){l(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&l("loaded")},n.onerror=function(){e&&l("error")},function(){e=!1}}}),[t,a]),o}({src:h,srcSet:p}),k=h||p,S=k&&"error"!==w;return E=S?n.createElement("img",Object(m.a)({alt:a,src:h,srcSet:p,sizes:f,className:o.img},s)):null!=r?r:k&&a?a[0]:n.createElement(v,{className:o.fallback}),n.createElement(c,Object(m.a)({className:Object(d.a)(o.root,o.system,o[b],l,!S&&o.colorDefault),ref:t},y),E)})),y=Object(f.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(b),E=a("PJCl"),w=a.n(E),k=a("R/WZ"),S=a("Wbzz"),j=a("9eSz"),x=a.n(j),z=a("75ko"),O=Object(k.a)((function(e){return{large:{width:e.spacing(16),height:e.spacing(16)},button:{margin:e.spacing(1)}}})),I=function(){return r.a.createElement("div",{style:{flex:1}})},N=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2"];var R=function e(t){return t.divider?r.a.createElement(o.a,{mt:4},r.a.createElement(l.a,null)):r.a.createElement("div",null,r.a.createElement(o.a,{mt:4},r.a.createElement(i.a,{variant:t.headerSize},t.title)),r.a.createElement(i.a,{variant:"body1"},t.content,t.bullets?r.a.createElement(o.a,{mt:2},r.a.createElement("ul",null,t.bullets.map((function(e){return r.a.createElement("li",null,e)})))):null),t.subsections?t.subsections.map((function(a){return r.a.createElement(e,Object.assign({},a,{headerSize:(n=t.headerSize,N[Math.min(N.indexOf(n)+1,N.length-1)])}));var n})):null)};t.a=function(e){var t=O();return r.a.createElement("div",null,r.a.createElement(c.a,{color:"primary",className:t.button,size:"large",startIcon:r.a.createElement(w.a,null),component:S.Link,to:"/recruitment"},"Back to recruitment page"),r.a.createElement(o.a,{display:"flex",mt:4},r.a.createElement(i.a,{variant:"h3"},e.name),r.a.createElement(I,null),r.a.createElement(s.a,{mdDown:!0},r.a.createElement("div",null,r.a.createElement(z.a,null)))),r.a.createElement(o.a,{mt:4},r.a.createElement(i.a,{variant:"h4"},"The Team")),r.a.createElement(o.a,{display:"flex",flexDirection:"row",mt:4},r.a.createElement(I,null),e.team.people.map((function(a,n){return r.a.createElement(o.a,{display:"flex",m:"auto",flexDirection:"column",justify:"center",alignItems:"center",ml:0==n?0:4},r.a.createElement(y,{className:t.large,alt:a.name,component:x.a,fluid:e.team.query[a.name.replace(/ /g,"")].childImageSharp.fluid}),r.a.createElement(o.a,{mt:1},r.a.createElement(i.a,{variant:"h6"},a.name)),r.a.createElement(i.a,{variant:"overline",style:{lineHeight:"1"}},a.position))})),r.a.createElement(I,null)),e.sections.map((function(e){return r.a.createElement(R,Object.assign({},e,{headerSize:"h4"}))})),r.a.createElement(o.a,{mt:4,mb:4},r.a.createElement(z.a,null)))}},q9A3:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("zDGe"),l=a("vrFN"),i=a("Wbzz"),c=a("ohgY");t.default=function(){var e={name:"Sports",team:{people:[{name:"Renee Lee",position:"Director"},{name:"Lim Yu Long",position:"Deputy Director"}],query:Object(i.useStaticQuery)("2852609070")},sections:[{content:"Hi all! Being in the sports comm is a unique role as compared to other committees. Our committee will be a year long commitment when the sports events occur. Nonetheless rest assured that it will not affect your studies as the sports events only happen off semester!"},{content:"Whether you're looking to develop new skills, experience leadership roles or\n        make lifelong friends, sports cell provides the opportunity for that! As a member of\n        the sports cell, you may choose to take up the role in Finance, Marketing and/or Operations.\n        You could be a jack of all trades, or simply a master of one! The sports comm will also be supporting the\n        events by providing the events with manpower like being a referee, game master or welfare. Really,\n        you can take up any role deemed necessary and relevant! So if you would like to challenge yourself,\n        what are you waiting for? Sign up for sports comm now!In the event where you have ANY ideas for interesting projects,\n        or if you would like to take on the role of a Project Director for existing projects, feel free to approach us any time!\n        The events that we will be organising are namely the Computing Sports Carnival, Night Cycling and many more!\n        "},{divider:!0},{title:"Vision",content:"We hope to foster camaraderie within the computing community and providing a platform for people of similar interests to come together through sports. p.s. Say real, university is already stressful enough, so just have fun and develop yourself HOLISTICALLY."},{title:"Goals",bullets:["Promote a strong work-life balance amongst computing students.","Provide a platform for all students (be it sports enthusiasts, recreational players or beginners) to partake in fun-filled activities."]}]};return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:e.name}),r.a.createElement(c.a,e))}},wb2y:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),l=a("iuhU"),i=a("H2TA"),c=a("ye/S"),s=o.forwardRef((function(e,t){var a=e.absolute,i=void 0!==a&&a,c=e.classes,s=e.className,m=e.component,u=void 0===m?"hr":m,d=e.flexItem,f=void 0!==d&&d,h=e.light,p=void 0!==h&&h,g=e.orientation,v=void 0===g?"horizontal":g,b=e.role,y=void 0===b?"hr"!==u?"separator":void 0:b,E=e.variant,w=void 0===E?"fullWidth":E,k=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(u,Object(n.a)({className:Object(l.a)(c.root,s,"fullWidth"!==w&&c[w],i&&c.absolute,f&&c.flexItem,p&&c.light,"vertical"===v&&c.vertical),role:y,ref:t},k))}));t.a=Object(i.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)}}]);
//# sourceMappingURL=component---src-pages-recruitment-sports-js-566a8dbdfdc3e0827011.js.map