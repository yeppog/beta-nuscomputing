(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1iKp":function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=r},"P+Eh":function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),r=a("hlFM"),i=a("ofer"),l=a("wx14"),s=a("DSFK"),u=a("25BE"),d=a("BsWD"),c=a("PYwp");var m=a("ODXe"),h=a("Ff2n"),y=(a("TOwV"),a("iuhU")),f=a("dRu9"),p=a("H2TA"),g=a("wpWl"),b=a("4Hym"),w=a("tr08"),v=a("bfFb"),E=o.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.collapsedHeight,s=void 0===i?"0px":i,u=e.component,d=void 0===u?"div":u,c=e.disableStrictModeCompat,p=void 0!==c&&c,E=e.in,S=e.onEnter,C=e.onEntered,x=e.onEntering,k=e.onExit,P=e.onExited,U=e.onExiting,A=e.style,O=e.timeout,D=void 0===O?g.b.standard:O,N=e.TransitionComponent,B=void 0===N?f.a:N,I=Object(h.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),j=Object(w.a)(),R=o.useRef(),q=o.useRef(null),T=o.useRef(),M="number"==typeof s?"".concat(s,"px"):s;o.useEffect((function(){return function(){clearTimeout(R.current)}}),[]);var H=j.unstable_strictMode&&!p,F=o.useRef(null),Y=Object(v.a)(t,H?F:void 0),L=function(e){return function(t,a){if(e){var o=H?[F.current,t]:[t,a],n=Object(m.a)(o,2),r=n[0],i=n[1];void 0===i?e(r):e(r,i)}}},W=L((function(e,t){e.style.height=M,S&&S(e,t)})),G=L((function(e,t){var a=q.current?q.current.clientHeight:0,o=Object(b.a)({style:A,timeout:D},{mode:"enter"}).duration;if("auto"===D){var n=j.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(n,"ms"),T.current=n}else e.style.transitionDuration="string"==typeof o?o:"".concat(o,"ms");e.style.height="".concat(a,"px"),x&&x(e,t)})),$=L((function(e,t){e.style.height="auto",C&&C(e,t)})),V=L((function(e){var t=q.current?q.current.clientHeight:0;e.style.height="".concat(t,"px"),k&&k(e)})),z=L(P),J=L((function(e){var t=q.current?q.current.clientHeight:0,a=Object(b.a)({style:A,timeout:D},{mode:"exit"}).duration;if("auto"===D){var o=j.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(o,"ms"),T.current=o}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height=M,U&&U(e)}));return o.createElement(B,Object(l.a)({in:E,onEnter:W,onEntered:$,onEntering:G,onExit:V,onExited:z,onExiting:J,addEndListener:function(e,t){var a=H?e:t;"auto"===D&&(R.current=setTimeout(a,T.current||0))},nodeRef:H?F:void 0,timeout:"auto"===D?null:D},I),(function(e,t){return o.createElement(d,Object(l.a)({className:Object(y.a)(n.container,r,{entered:n.entered,exited:!E&&"0px"===M&&n.hidden}[e]),style:Object(l.a)({minHeight:M},A),ref:Y},t),o.createElement("div",{className:n.wrapper,ref:q},o.createElement("div",{className:n.wrapperInner},a)))}))}));E.muiSupportAuto=!0;var S=Object(p.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(E),C=a("kKAo");var x=o.createContext({});var k=o.forwardRef((function(e,t){var a,n,r,i,f,p,g,b,w=e.children,v=e.classes,E=e.className,k=e.defaultExpanded,P=void 0!==k&&k,U=e.disabled,A=void 0!==U&&U,O=e.expanded,D=e.onChange,N=e.square,B=void 0!==N&&N,I=e.TransitionComponent,j=void 0===I?S:I,R=e.TransitionProps,q=Object(h.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),T=(n=(a={controlled:O,default:P,name:"Accordion",state:"expanded"}).controlled,r=a.default,a.name,a.state,i=o.useRef(void 0!==n).current,f=o.useState(r),p=f[0],g=f[1],[i?n:p,o.useCallback((function(e){i||g(e)}),[])]),M=Object(m.a)(T,2),H=M[0],F=M[1],Y=o.useCallback((function(e){F(!H),D&&D(e,!H)}),[H,D,F]),L=o.Children.toArray(w),W=(b=L,Object(s.a)(b)||Object(u.a)(b)||Object(d.a)(b)||Object(c.a)()),G=W[0],$=W.slice(1),V=o.useMemo((function(){return{expanded:H,disabled:A,toggle:Y}}),[H,A,Y]);return o.createElement(C.a,Object(l.a)({className:Object(y.a)(v.root,E,H&&v.expanded,A&&v.disabled,!B&&v.rounded),ref:t,square:B},q),o.createElement(x.Provider,{value:V},G),o.createElement(j,Object(l.a)({in:H,timeout:"auto"},R),o.createElement("div",{"aria-labelledby":G.props.id,id:G.props["aria-controls"],role:"region"},$)))})),P=Object(p.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(k),U=a("VD++"),A=a("PsDL"),O=o.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.expandIcon,s=e.IconButtonProps,u=e.onBlur,d=e.onClick,c=e.onFocusVisible,m=Object(h.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),f=o.useState(!1),p=f[0],g=f[1],b=o.useContext(x),w=b.disabled,v=void 0!==w&&w,E=b.expanded,S=b.toggle;return o.createElement(U.a,Object(l.a)({focusRipple:!1,disableRipple:!0,disabled:v,component:"div","aria-expanded":E,className:Object(y.a)(n.root,r,v&&n.disabled,E&&n.expanded,p&&n.focused),onFocusVisible:function(e){g(!0),c&&c(e)},onBlur:function(e){g(!1),u&&u(e)},onClick:function(e){S&&S(e),d&&d(e)},ref:t},m),o.createElement("div",{className:Object(y.a)(n.content,E&&n.expanded)},a),i&&o.createElement(A.a,Object(l.a)({className:Object(y.a)(n.expandIcon,E&&n.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},s),i))})),D=Object(p.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(O),N=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(h.a)(e,["classes","className"]);return o.createElement("div",Object(l.a)({className:Object(y.a)(a.root,n),ref:t},r))})),B=Object(p.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(N),I=a("hlie"),j=a("1iKp"),R=a.n(j),q=a("zDGe"),T=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2"];function M(e){return n.a.createElement("div",null,n.a.createElement(r.a,{mt:4,ml:e.padding+"px"},n.a.createElement(i.a,{variant:e.headerSize},e.title),e.content?n.a.createElement(r.a,{mb:2},n.a.createElement(i.a,{variant:"body1"},e.content)):null),e.questions?e.questions.map((function(e){return n.a.createElement(P,{key:e.title},n.a.createElement(D,{expandIcon:n.a.createElement(R.a,null)},n.a.createElement(i.a,{variant:"h6"},e.title)),n.a.createElement(B,null,n.a.createElement(i.a,{variant:"body1",component:"span"},e.content)))})):null,e.subsections?e.subsections.map((function(t){return n.a.createElement(M,Object.assign({key:t.title},t,{headerSize:(a=e.headerSize,T[Math.min(T.indexOf(a)+1,T.length-1)]),padding:e.padding+16}));var a})):null)}var H=function(e){return n.a.createElement(I.a,Object.assign({color:"secondary",target:"_blank"},e),e.children)};t.default=function(){var e=[{title:"Academics",questions:[{title:"Programme Structure",content:n.a.createElement("div",null,"You may refer ",n.a.createElement(H,{href:"https://www.comp.nus.edu.sg/cug"},"here"),' for your degree requirements. Simply click on your major under "Degree Requirements per Cohort" and choose the year you were admitted from the panel on the right. Do note that not all modules are offered every semester.')},{title:"Past Year Exam Papers",content:n.a.createElement("div",null,"You may search and download past year examination papers ",n.a.createElement(H,{href:"https://libportal.nus.edu.sg/frontend/exam-papers"},"here"),". This is a repository of all past year final examination papers from every faculty that the school has uploaded into the system. However, do note that some papers will not be available should the module coordinator of that semester chooses not to upload his/her paper. Only the question paper, and not the answers, are provided on this platform.")}],subsections:[{title:"S/U Options",questions:[{title:"Rules",content:n.a.createElement("div",null,"JC students can S/U up to 32 MCs (or 8 modules) and Polytechnic students can S/U up to 20 MCs (or 5 modules) in their first year. Any unused S/Us can be carried forward to their remaining years subject to a maximum of 12 MCs (or 3 modules).",n.a.createElement("br",null),n.a.createElement("br",null),"Students can S/U only level 1000 modules and level 2000 modules with no prerequisites. All other modules cannot be S/U-ed.",n.a.createElement("br",null),n.a.createElement("br",null),'Many guides have included a rule of thumb such as "Keep all A, A- and B", "S/U all B- and below" etc. Our guide, however, approaches this issue from another perspective, as the decision to S/U or not is very much dependent on each individual.')},{title:"To S/U or not?",content:n.a.createElement("div",null,"There are a few things to consider when deciding whether to S/U a module or not — your targeted class of honours, your confidence of reaching it, all your other grades relative to the grade in question, the number of S/Us left, and the number of S/U-able modules left.",n.a.createElement("br",null),n.a.createElement("br",null),"You should know the class you aim to achieve upon graduation, and a sensing of where you stand (at least you will know after 1 or 2 semesters from your grades). Most of the time, you will either be rather certain of attaining a certain class, or uncertain and hovering between 2 adjacent classes (e.g. 1st class and 2nd upper or 2nd upper and 2nd lower). The purpose of S/U is then to maximize your CAP and help attain the honours class you want.",n.a.createElement("br",null),n.a.createElement("br",null),"Before analysing and deciding, you first need to know roughly where you stand. A good indication will be your CA before S/U-ing any modules, assuming you worked hard and will continue working equally hard for subsequent semesters. This will help form a realistic class to aim for, and help you decide which of the following 2 scenarios you fall into. For example, if you get 4 B, 3 B+, and 3 A- (CAP 3.95 before S/U), you more or less can tell you'll either get a Distinction or Merit. This is because most of the modules are bell curved — putting in the same effort and being bell curved against your same peers will likely get you similar grades in future years. Of course, unless you can and decide to work much harder.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"1st scenario.")," Let's assume you're aiming a Distinction (< 4.50 and > 4.00). If you are confident of hitting that upon graduation (i.e. your grades are quite stable, or you are confident that it will be), simply S/U anything that is B+ and below as these will only pull your CAP down. Of course, ensure that you have sufficient S/Us to use it on grades lower than B+ first before S/U-ing those B+.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"2nd scenario.")," Now let's again assume that you're aiming for a Distinction (< 4.50 and > 4.00) — you're not confident of hitting it, but certain that you will get at least a Merit (< 4.00 and > 3.50). Since you're unsure, your B+ could either pull your CAP up, or down, depending on what class you eventually fall into. Further, your B+ will not hurt your chances of attaining a Distinction (neither will it improve). In this case, you should keep your B+ and S/U only all those grades lower than B+ (B, B-, C+, etc.) as these will hurt your chances of getting a Distinction.",n.a.createElement("br",null),n.a.createElement("br",null),"In both scenarios, you should have roughly enough S/Us to S/U the determined undesirable grades. However, you should still always count them. For example, if you have 1 S/U left and unsure whether to S/U a B+, count all your modules that can still be S/U-ed and evaluate your ability in scoring in each of the modules (you can get clues by asking around, checking if it is a qualitative, quantitative or coding mode, and if it is your strength). If it is likely that you will score all B+/A- and above, then just S/U the B+, but if there is significant uncertainty or if there is a module in the area that you know you are weak at and will likely score below B+, then save your S/U for it.",n.a.createElement("br",null),n.a.createElement("br",null),"You should have sufficient S/U if your goal is realistic and attainable. Let's look at a counter example. Assume the same 2nd scenario that you are aiming for a Distinction, and hence will S/U anything below B+. If your 1st year grades are A-, B+, B, B, B, B, B-, B-, B- C+, and C+, you will want to S/U the lower 8 grades. If you're from JC, this will leave you with no S/Us left and if you're from Polytechnic, you will be short of 3. In this scenario, perhaps a Distinction Honours Class will not be a realistic goal if you've already been giving your best. Consider then aiming for a Merit Honours Class, and correspondingly S/U-ing the lower 5 grades of B- and C+.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(i.a,{variant:"h6"},"Exception 1"),"If you feel totally uncertain about your future grades and hence your class, you will want to S/U your lowest 8 or 5 modules, depending on whether you're from JC or Polytechnic. In this case, you can extrapolate your results thus far to decide on how many you want to S/U. For example, assume you get 1 A-, 2 B+ and 2 B (CAP 3.9) in your 1st semester, and you're from JC. Extrapolating will get you 2 A-, 4 B+, and 4 B in your 1st year. You will likely S/U your Bs. Whether you want to S/U your B+ will again depend on how confident you are of doing better in future. If you've already worked very hard and continue to do so, chances are you will get around the same CAP in future.",n.a.createElement("br",null),n.a.createElement("br",null),"It boils down to this: if you don't S/U the B+, and your graduating CAP is above 4, your final CAP will suffer a little at most, it will not affect your class from Distinction to Merit. However, if you choose to S/U, and you lack S/Us to use it on another module with a lower grade, this can actually affect your class from Distinction to Merit. In this case, it will be good to keep your B+ and save your S/U.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(i.a,{variant:"h6"},"Exception 2"),"Some of you might have gotten bad grades due to playing your entire semester and barely put in any effort. In this case, try to evaluate how much your grades will potentially improve based on the effort you are intending to put in for your remaining semesters and S/U those, even all of them, below your projected ones.")}]}]},{title:"Platforms",questions:[{title:"NUS Email",content:n.a.createElement("div",null,n.a.createElement(H,{href:"https://outlook.com/u.nus.edu"},"This")," is where you access your official NUS Email. All school related activities, events, internship opportunities, examination circulars, announcements, etc will be sent here.")},{title:"myEduRec",content:n.a.createElement("div",null,n.a.createElement(H,{href:"https://myedurec.nus.edu.sg/"},"Education Records System (EduRec)")," is a platform for the platform where you access and settle all your administrative matters. You can view your exam schedule and results, view your transcript, apply to map your SEP modules, etc. You would also be able to change your credit debit (where NUS puts and deducts money respectively) bank account details. Click on ‘Academics’ or ‘Financials’ to access these features. ModReg@EduRec is the University’s consolidated module registration platform for all NUS students. It is used for module registration and selection of tutorial/lab slots. Selection of Modules and tutorial/lab slots would only be available during module registration (Academics -> Module Registration).")},{title:"LumiNUS",content:n.a.createElement("div",null,n.a.createElement(H,{href:"http://luminus.nus.edu.sg/"},"LumiNUS")," is the academic platform you access most often during your semester. After your module is locked in, you will be able to find announcements by your Professors, watch the module's webcasts, view grades for continual assessment, upload assignments and download the module's contents (lecture slides, tutorial sheets, etc.) your Professors upload.")},{title:"NUSMods",content:n.a.createElement("div",null,n.a.createElement(H,{href:"https://nusmods.com/"},"NUSMods")," is the single module planning website that almost all undergraduates use to plan their modules, created by our very own SoC alumni. It is linked with NUS official database, so the information should be up to date and accurate (if you want to be sure, do cross check with NUS official websites). Here, you can plan your timetable, search for module information (the semester it is being offered, its prerequisites and preclusions, its reviews, etc.), get a link to share your timetable, and even find venues from the timetable!")},{title:"NUSync",content:n.a.createElement("div",null,n.a.createElement(H,{href:"https://orgsync.com/login/national-university-of-singapore"},"NUSync")," is the portal NUS is attempting to slowly migrate to. Various announcements will be posted there, but most of the time, it will also be sent to your email. At present, we use it mainly for the Exam Welfare Pack Survey at the end of every semester.")},{title:"Facilities Booking",content:n.a.createElement("div",null,"You can book various venues around NUS through ",n.a.createElement(H,{href:"https://libportal.nus.edu.sg/frontend/web/bookdiscussionroom"},"this platform"),", for example, discussion rooms to study or for project discussions. If you’re in NUS and using NUS Wi-Fi, simply go to the Facility Booking System. Else, follow the steps provided and install NUS VPN first before booking.")}]},{title:"Special Programmes",questions:[{title:"Special Programmes",content:n.a.createElement("div",null,"Visit ",n.a.createElement(H,{href:"http://www.comp.nus.edu.sg/programmes/sp/"},"here")," for more information about the selections of special programmes in SoC.")}],subsections:[{title:"Double Degree Programme FAQs",questions:[{title:"How many modules must I take as a DDP student?",content:"This depends on what DDP you take. For example, a DDP in Computer Science and Accountancy will require approximately 230 to 240 MCs in total, while a DDP in Computer Science and Mathematics will require less as there are more modules that overlap. Look at both your degree requirements, eliminate the overlap, and count all the unique modules that are required — this will be the total modules you need to take."},{title:"What is the workload like for a DDP student?",content:"This depends on the total number of modules you need to take, your capability, and your other commitments. It is flexible. The norm is for students to take 6 modules per semester and graduate in 5 years. However, you have the flexibility to take 7 or even 8 modules and graduate in 4 years or choose a slower pace and take a longer time to graduate."},{title:"How long will it take to complete a DDP?",content:"The typical duration is 5 years. It could be less or more, depending how fast the individual clears his/her modules."},{title:"Can I still do a DDP halfway during my studies?",content:"Yes, you may still apply a DDP after your first year of studies. Do strive for good grades in your first 2 semesters if you are aiming to do so."},{title:"Is there any minimum requirement to continue my DDP?",content:"Yes, you will need to maintain a minimum CAP of 3.75 for your primary degree and a minimum CAP of 3.25 for your secondary degree to continue. Else, you will be asked to drop your secondary degree."},{title:"What is the difference between a primary and secondary degree?",content:"Your primary degree is the degree from your home faculty. If you continue the DDP until graduation, there is absolutely no difference — you get a separate degree certificate for each degree. However, if you choose to drop one degree, you may only drop your secondary degree. You are encouraged to take more modules from your primary degree in the first year so that in the event you drop your secondary degree, you will not be lagging too far behind your peers in your primary degree."},{title:"What is the difference between my home faculty and secondary faculty?",content:"There is virtually no difference other than the fact that you pay the school fees of your home faculty, and that some faculties might not allow students who has another separate home faculty to apply for SEP through that faculty. Otherwise, you are still a student of both faculties. You are eligible for dean's list and awards from both faculties."},{title:"How is my CAP computed as a DDP student?",content:"Since you will be awarded 2 separate degrees upon graduation, you will have 2 separate CAPs computed."},{title:"What happens if I drop my DDP?",content:"You may only drop your secondary degree. If you wish to drop your primary degree, you will first have to apply to change faculty (subject to approval) before dropping your secondary degree post faculty change. Your both CAPs will then be combined into 1."},{title:"Can I still go for SEP as a DDP student?",content:"Yes, you may go for SEP through your home faculty. Going for SEP through your secondary faculty depends on whether your secondary faculty allows for that. Depending on the number of modules you manage to map in SEP, you might or might not need to extend your candidature. If you are planning to go for SEP, it might be good to plan which modules are easily mapped and refrain from taking them in NUS."},{title:"Can I still go for NOC as a DDP student?",content:"Yes, you may go for either the 6-months or 1-year NOC. NOC is a programme where you work and study overseas. However, the modules you take during NOC are typically entrepreneurship modules and do not count towards either degree requirements. Hence, it is like you will have to extend your candidature or take even more modules in your other semesters should you decide to go for NOC."}]}]},{title:"Overseas Opportunities",questions:[{title:"NUS Overseas Colleges (NOC)",content:n.a.createElement("div",null,"NUS Overseas College is a 6-month or 1-year programme where you intern at an overseas/local company and take entrepreneurship modules at the same time. The selection process consist of 3 rounds of interview, but you may proceed straight to the second round if you completed at least a Project Gemini for Orbital (Year 1 summer project, information will be make known to you in due time). While a good CAP will be beneficial, it does not play as heavy a weightage as your interview or portfolio.",n.a.createElement("br",null),n.a.createElement("br",null),"Find out more about NUS Overseas Colleges ",n.a.createElement(H,{href:"https://enterprise.nus.edu.sg/educate/nus-overseas-colleges"},"here"),".")},{title:"Student Exchange Programmes (SEP)",content:n.a.createElement("div",null,"Student Exchange Programme is a programme where instead of studying in NUS, you study in another overseas/local partner University for 1 Semester. If you are able to map the modules you took in the partner University, it will be considered as you have fulfilled the module that you mapped onto. If you are planning to go for SEP, it might be good to plan which modules are easily mapped and refrain from taking them in NUS. Modules taken and mapped will only be graded on a pass-fail basis and will not affect your CAP. You may find out all available pre-approved modules ",n.a.createElement(H,{href:"https://www.comp.nus.edu.sg/programmes/ug/beyond/sep/sepnoc-public"},"here"),".",n.a.createElement("br",null),n.a.createElement("br",null),"In the SEP selection process, your CAP plays a vital role. So, if you’re aiming to go SEP through computing, it will be good to strive for a good CAP. That said, with the newly implemented SoC Student Award System (last tab of guides), participating in various other student life events also entitles you to different tiers of this award, which in turns boosts your SEP chances. You will be informed through email when calls for application for SEP starts.",n.a.createElement("br",null),n.a.createElement("br",null),"Find out more about Student Exchange Programmes ",n.a.createElement(H,{href:"https://www.comp.nus.edu.sg/programmes/ug/beyond/sep"},"here"),".")},{title:"Summer and Winter Programmes",content:n.a.createElement("div",null,"Summer and Winter Programme consists of taking additional classes and modules during your summer or winter holidays. It is a good opportunity for clearing additional modules.",n.a.createElement("br",null),n.a.createElement("br",null),"Find out more about Summer and Winter Programmes ",n.a.createElement(H,{href:"https://www.comp.nus.edu.sg/programmes/ug/beyond/summerwinter"},"here"),".")}]},{title:"SoC Student Award",questions:[{title:"About the Award",content:n.a.createElement("div",null,"This is a new initiative to recognise non-academic achievements and contributions of our students. Drawing inspiration from the International Baccalaureate system of Creativity Activity Services, this system hopes to create a similar system to incentivise leadership while providing all-rounded enrichment beyond academics.",n.a.createElement("br",null),n.a.createElement("br",null),"Submission of your achievements will also help the school to identify students whom they may nominate for other Awards such as the SCS IT Youth Leader Award, or NUS Student Achievement Awards.")},{title:"Application",content:n.a.createElement("div",null,"Submit your application ",n.a.createElement(H,{href:"https://mysurvey.nus.edu.sg/EFM/se/543BE5C26867C2A1"},"here"),".",n.a.createElement("br",null),n.a.createElement("br",null),"The system is currently unable to accept document uploads, so please send your supporting documents to the school via email to ",n.a.createElement(H,{href:"mailto:socfamily@comp.nus.edu.sg"},"socfamily@comp.nus.edu.sg"),'. Include your names in the file names and state "SoC Student Award" in the subject title.',n.a.createElement("br",null),n.a.createElement("br",null),"The application period for each cycle is 1 August to 31 July in the following year.")}],subsections:[{title:"Pillars",content:"The student award system falls around 4 pillars.",questions:[{title:"Leadership (L)",content:n.a.createElement("div",null,"Roles or designation that involves leadership within Club or Interest Groups under NUS SoC.",n.a.createElement(r.a,{mt:2},n.a.createElement("ul",null,n.a.createElement("li",null,"Management Committee of NUS Students' Computing Club"),n.a.createElement("li",null,"Core Team members of NUS Hackers"),n.a.createElement("li",null,"Project Director of major events such as GameCraft"))))},{title:"Accomplishment (A)",content:n.a.createElement("div",null,"Students who attain a certain level of achievement while representing NUS SoC, NUS, or Singapore in a competition.",n.a.createElement(r.a,{mt:2},n.a.createElement("ul",null,n.a.createElement("li",null,"Winning in Hackathon"),n.a.createElement("li",null,"Getting medal in NUS Inter-Faculty Games"))))},{title:"Service (S)",content:n.a.createElement("div",null,"Any experience that involves unpaid voluntary work under the name of NUS SoC that benefits the community in NUS or otherwise.",n.a.createElement(r.a,{mt:2},n.a.createElement("ul",null,n.a.createElement("li",null,"NUS Flag Day"),n.a.createElement("li",null,"Beneficiary Engagement Day"),n.a.createElement("li",null,"NUS SoC Code for Community"),n.a.createElement("li",null,"Community Involvement Programme (CIP)"),n.a.createElement("li",null,"Helpers for FOP, and other similar type events"))))},{title:"Involvement (I)",content:n.a.createElement("div",null,"Any involvement in school based events or competitions that required active training or participation.",n.a.createElement(r.a,{py:2},n.a.createElement("ul",null,n.a.createElement("li",null,"Representing SoC in IFG"),n.a.createElement("li",null,"Orientation Group Leaders for Freshmen Orientation Week"),n.a.createElement("li",null,"House Head for Orientation Camps"),n.a.createElement("li",null,"Committee for Freshmen Orientation Projects"))),"In order to achieve the SoC Student Awards students have to achieve points in the various Pillars and attendance in Enrichment Programmes.")}]}]}];return n.a.createElement(q.a,{title:"Student Guides"},n.a.createElement(i.a,{variant:"h3"},"Student Guides"),n.a.createElement(i.a,{variant:"body1"},"Listed below are guides, links to various platforms and FAQs which will be useful at different stages of your undergraduate life. Feel free to explore!"),e.map((function(e,t){return n.a.createElement(r.a,{mt:0!=t?16:8,key:t},n.a.createElement(M,Object.assign({},e,{headerSize:"h4",padding:"0"})))})))}}}]);
//# sourceMappingURL=component---src-pages-guides-js-5bae1c5598de4b6f4493.js.map