(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"75ko":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Z3vd");t.a=function(){return r.a.createElement(i.a,{variant:"contained",color:"secondary",href:"http://bit.ly/23MCSubcommTele",target:"_blank",rel:"noreferrer"},"Join us now")}},PJCl:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=i},ohgY:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("hlFM"),l=a("wb2y"),o=a("ofer"),c=a("Z3vd"),s=a("1NhI"),m=a("wx14"),u=a("Ff2n"),d=a("iuhU"),f=a("H2TA"),h=a("HR5l");var p,v,g=(p=n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),(v=function(e,t){return r.a.createElement(h.a,Object(m.a)({ref:t},e),p)}).muiName=h.a.muiName,r.a.memo(r.a.forwardRef(v)));var b=n.forwardRef((function(e,t){var a=e.alt,r=e.children,i=e.classes,l=e.className,o=e.component,c=void 0===o?"div":o,s=e.imgProps,f=e.sizes,h=e.src,p=e.srcSet,v=e.variant,b=void 0===v?"circle":v,E=Object(u.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,w=function(e){var t=e.src,a=e.srcSet,r=n.useState(!1),i=r[0],l=r[1];return n.useEffect((function(){if(t||a){l(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&l("loaded")},n.onerror=function(){e&&l("error")},function(){e=!1}}}),[t,a]),i}({src:h,srcSet:p}),S=h||p,O=S&&"error"!==w;return y=O?n.createElement("img",Object(m.a)({alt:a,src:h,srcSet:p,sizes:f,className:i.img},s)):null!=r?r:S&&a?a[0]:n.createElement(g,{className:i.fallback}),n.createElement(c,Object(m.a)({className:Object(d.a)(i.root,i.system,i[b],l,!O&&i.colorDefault),ref:t},E),y)})),E=Object(f.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(b),y=a("tRbT"),w=a("PJCl"),S=a.n(w),O=a("R/WZ"),x=a("Wbzz"),j=a("9eSz"),k=a.n(j),I=a("75ko"),z=Object(O.a)((function(e){return{large:{width:e.spacing(16),height:e.spacing(16)},button:{margin:e.spacing(1)}}})),D=function(){return r.a.createElement("div",{style:{flex:1}})},R=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2"];var C=function e(t){if(t.divider)return r.a.createElement(i.a,{mt:6},r.a.createElement(l.a,null));var a=R.indexOf("subtitle1")-R.indexOf(t.headerSize);return r.a.createElement("div",null,r.a.createElement(i.a,{mt:2*a},r.a.createElement(o.a,{variant:t.headerSize},t.title)),r.a.createElement(o.a,{variant:"body1",component:"span"},t.content,t.bullets?r.a.createElement("ul",null,t.bullets.map((function(e,t){return r.a.createElement("li",{key:t},e)}))):null),t.subsections?t.subsections.map((function(a,n){return r.a.createElement(e,Object.assign({key:n},a,{headerSize:(i=t.headerSize,R[Math.min(R.indexOf(i)+1,R.length-1)])}));var i})):null)};t.a=function(e){var t=z(),a=function(){return r.a.createElement(c.a,{color:"primary",variant:"outlined",className:t.button,size:"large",onClick:function(){return Object(x.navigate)(-1)},startIcon:r.a.createElement(S.a,null)},"Back to recruitment page")};return r.a.createElement("div",null,r.a.createElement(a,null),r.a.createElement(i.a,{display:"flex",mt:4},r.a.createElement(o.a,{variant:"h3"},e.name),r.a.createElement(D,null),r.a.createElement(s.a,{lgDown:!0},r.a.createElement("div",null,r.a.createElement(I.a,null)))),r.a.createElement(i.a,{mt:4},r.a.createElement(o.a,{variant:"h4"},"The Team")),r.a.createElement(s.a,{smDown:!0},r.a.createElement(i.a,{display:"flex",flexDirection:"row",mt:4},r.a.createElement(D,null),e.team.people.map((function(a,n){return r.a.createElement(i.a,{key:n,display:"flex",m:"auto",flexDirection:"column",justify:"center",alignItems:"center",ml:0==n?0:4},r.a.createElement(E,{className:t.large,alt:a.name,component:k.a,fluid:e.team.query[a.name.replace(/ /g,"")].childImageSharp.fluid}),r.a.createElement(i.a,{mt:1},r.a.createElement(o.a,{variant:"h6"},a.name)),r.a.createElement(o.a,{variant:"overline",style:{lineHeight:"1",textAlign:"center"}},a.position))})),r.a.createElement(D,null))),r.a.createElement(s.a,{mdUp:!0},r.a.createElement(y.a,{container:!0},e.team.people.map((function(a,n){return r.a.createElement(y.a,{item:!0,xs:6,key:n},r.a.createElement(i.a,{mt:4,style:{display:"flex",flexDirection:"column"},justifyContent:"center",alignItems:"center"},r.a.createElement(E,{className:t.large,alt:a.name,component:k.a,fluid:e.team.query[a.name.replace(/ /g,"")].childImageSharp.fluid}),r.a.createElement(i.a,{mt:1},r.a.createElement(o.a,{variant:"h6"},a.name)),r.a.createElement(o.a,{variant:"overline",style:{lineHeight:"1",textAlign:"center"}},a.position)))})))),e.sections.map((function(e,t){return r.a.createElement(C,Object.assign({key:t},e,{headerSize:"h4"}))})),r.a.createElement(s.a,{xsDown:!0},r.a.createElement(i.a,{mt:4,display:"flex"},r.a.createElement(a,null),r.a.createElement(D,null),r.a.createElement(i.a,{display:"flex",flexDirection:"column",justifyContent:"center"},r.a.createElement(I.a,null)))),r.a.createElement(s.a,{smUp:!0},r.a.createElement(i.a,{mt:4},r.a.createElement(a,null),r.a.createElement(D,null),r.a.createElement(i.a,{ml:1},r.a.createElement(I.a,null)))))}},vxEH:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("zDGe"),l=a("Wbzz"),o=a("ohgY");t.default=function(){var e={name:"Student Relations",team:{people:[{name:"Gu Geng",position:"Director"},{name:"Ivan Koh",position:"Deputy Director"}],query:Object(l.useStaticQuery)("2375640600")},sections:[{title:"Overview",content:"Student relations is about creating a fun and inclusive environment in SOC. Join us to plan exciting events and help build long lasting friendships among computing students."},{title:"Vision",content:"Leave no one in SOC behind"},{title:"Mission",content:"To spread FUN and BUILD relationships in the SOC community through various events."},{divider:!0},{title:"Who we are looking for",bullets:["If you are someone with event-planning experiences,","or someone with brilliant ideas to share and fun initiates that you want to implement for the rest of SOC students,","or simply someone with passion to connect and to rejuvenate the community"]},{content:"WAIT NO MORE AND JOIN US!"},{title:"Events",bullets:["Computing Day - a SPECIAL day for ALL OF US, only the students of SOC!","Meliorium - amazing and fun activities for you and your friends to make even MORE friends! (e.g. Amazing Race & Escape Room)","X men - Facilitate small interest groups formation and provide funding for offline bondings (WOW!)","Initiate your own new event! - And much more fun that you WISH to see and bring to the SOC!"]},{divider:!0},{title:"Responsibilities",subsections:[{title:"Project Director",bullets:["To spearhead and oversee the planning for a major event","To coordinate work among the rest of project members"]},{title:"Vice Project Director",bullets:["To assist project director in the planning of a major event","To be in charge of admin/manpower/finance/logistics aspects of the event"]},{title:"Project Manager",bullets:["To be involved in some aspects of the event planning process","To assist in the management of admin/manpower/finance/logistics aspects of the event"]},{title:"Onsite Manager",bullets:["To be involved in some aspects of the event planning process","To ensure the smooth running of the actual events and make sure changes/needs are immediately attended to"],subsections:[{content:"P.S. dont be afraid to take up more than one role or get involved in more than one event!!"}]}]}]};return r.a.createElement(i.a,{title:e.name},r.a.createElement(o.a,e))}},wb2y:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),l=a("iuhU"),o=a("H2TA"),c=a("ye/S"),s=i.forwardRef((function(e,t){var a=e.absolute,o=void 0!==a&&a,c=e.classes,s=e.className,m=e.component,u=void 0===m?"hr":m,d=e.flexItem,f=void 0!==d&&d,h=e.light,p=void 0!==h&&h,v=e.orientation,g=void 0===v?"horizontal":v,b=e.role,E=void 0===b?"hr"!==u?"separator":void 0:b,y=e.variant,w=void 0===y?"fullWidth":y,S=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(u,Object(n.a)({className:Object(l.a)(c.root,s,"fullWidth"!==w&&c[w],o&&c.absolute,f&&c.flexItem,p&&c.light,"vertical"===g&&c.vertical),role:E,ref:t},S))}));t.a=Object(o.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)}}]);
//# sourceMappingURL=component---src-pages-recruitment-student-relations-js-b9963434d8f7a2108e58.js.map