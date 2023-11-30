import{_ as Ke}from"./ThesisDemo-bf34f7ed.js";import{V as I,a as x,b as pe,_ as Je}from"./RotatingDosageHeatmapSlower-af994d4b.js";import{a3 as R,a4 as f,aa as A,a5 as D,a6 as i,a8 as m,ab as me,q as t,ac as fe,a7 as a,n as V,y as xe,p as P,I as w,u as F,w as H,c as M,H as he,M as De,v as k,a9 as Qe,N as ee,ad as Xe,x as Ye,f as Z,s as Ze,r as et,A as tt,O as at,K as Pe,ae as st,C as it,J as lt,t as nt}from"./index-878dffce.js";import{D as ve,E as ot,m as $,b as T,j as te,V as j,c as be,k as ke,d as W,F as ct,G as Me,H as ze,e as q,l as Le,a as O,n as Ce,R as Ge,g as we,p as Re,q as Ve,r as $e,h as ae,I as dt,J as Oe,K as Ee,i as se,o as Ne,L as rt,s as Ue,f as ge,M as Y,N as Se,O as Fe,t as h,P as ut,Q as mt,S as vt,T as _t}from"./VBtn-4def1b11.js";import{c as ie,a as U,b as _,d as ft}from"./VDivider-205bdf7d.js";import{V as b}from"./VImg-d8bdf073.js";const Te=ie("v-spacer","div","VSpacer"),ht="/assets/BounceOffTheWall-9c5e1bfa.mp4",gt="/assets/kiesgame-270bbeca.webp",yt={props:["grade","morelink","pagelink","codelink"],setup(e){}},pt={class:"d-flex mt-4 mb-1 ml-1 align-center"},xt={key:3,class:"d-flex mx-auto flex-column justify-center align-center text-center","max-width":"100"},bt=a("span",null,"Final grade",-1);function kt(e,c,s,l,n,d){return f(),A("div",pt,[s.pagelink!=null?(f(),D(ve,{key:0,target:"_blank",href:s.pagelink},{default:i(()=>[m("Learn more")]),_:1},8,["href"])):s.morelink!=null?(f(),D(ve,{key:1,onClick:c[0]||(c[0]=r=>e.$router.push(s.morelink))},{default:i(()=>[m("Learn more")]),_:1})):me("",!0),s.codelink!=null?(f(),D(ve,{key:2,class:"ml-4",target:"_blank",href:s.codelink},{default:i(()=>[m("Source code")]),_:1},8,["href"])):me("",!0),s.grade!=null?(f(),A("div",xt,[t(ot,{rotate:360,size:70,width:10,"model-value":s.grade*10,color:"teal",class:"mt-n1 mb-2 mx-5"},{default:i(()=>[m(fe(s.grade),1)]),_:1},8,["model-value"]),bt])):me("",!0)])}const G=R(yt,[["render",kt]]);const Ct=V()({name:"VCardActions",props:$(),setup(e,c){let{slots:s}=c;return xe({VBtn:{variant:"text"}}),T(()=>{var l;return t("div",{class:["v-card-actions",e.class],style:e.style},[(l=s.default)==null?void 0:l.call(s)])}),{}}}),wt=ie("v-card-subtitle"),He=ie("v-card-title"),Vt=P({appendAvatar:String,appendIcon:w,prependAvatar:String,prependIcon:w,subtitle:String,title:String,...$(),...te()},"VCardItem"),$t=V()({name:"VCardItem",props:Vt(),setup(e,c){let{slots:s}=c;return T(()=>{var g;const l=!!(e.prependAvatar||e.prependIcon),n=!!(l||s.prepend),d=!!(e.appendAvatar||e.appendIcon),r=!!(d||s.append),u=!!(e.title||s.title),v=!!(e.subtitle||s.subtitle);return t("div",{class:["v-card-item",e.class],style:e.style},[n&&t("div",{key:"prepend",class:"v-card-item__prepend"},[s.prepend?t(j,{key:"prepend-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},s.prepend):l&&t(U,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),t("div",{class:"v-card-item__content"},[u&&t(He,{key:"title"},{default:()=>{var y;return[((y=s.title)==null?void 0:y.call(s))??e.title]}}),v&&t(wt,{key:"subtitle"},{default:()=>{var y;return[((y=s.subtitle)==null?void 0:y.call(s))??e.subtitle]}}),(g=s.default)==null?void 0:g.call(s)]),r&&t("div",{key:"append",class:"v-card-item__append"},[s.append?t(j,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},s.append):d&&t(U,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),We=ie("v-card-text"),St=P({appendAvatar:String,appendIcon:w,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:w,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...be(),...$(),...te(),...ke(),...W(),...ct(),...Me(),...ze(),...q(),...Le(),...O(),...F(),...Ce({variant:"elevated"})},"VCard"),Be=V()({name:"VCard",directives:{Ripple:Ge},props:St(),setup(e,c){let{attrs:s,slots:l}=c;const{themeClasses:n}=H(e),{borderClasses:d}=we(e),{colorClasses:r,colorStyles:u,variantClasses:v}=Re(e),{densityClasses:g}=Ve(e),{dimensionStyles:y}=$e(e),{elevationClasses:E}=ae(e),{loaderClasses:le}=dt(e),{locationStyles:ne}=Oe(e),{positionClasses:oe}=Ee(e),{roundedClasses:K}=se(e),o=Ne(e,s),C=M(()=>e.link!==!1&&o.isLink.value),L=M(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return T(()=>{const S=C.value?"a":e.tag,ce=!!(l.title||e.title),J=!!(l.subtitle||e.subtitle),de=ce||J,p=!!(l.append||e.appendAvatar||e.appendIcon),B=!!(l.prepend||e.prependAvatar||e.prependIcon),re=!!(l.image||e.image),ue=de||B||p,Q=!!(l.text||e.text);return he(t(S,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":L.value},n.value,d.value,r.value,g.value,E.value,le.value,oe.value,K.value,v.value,e.class],style:[u.value,y.value,ne.value,e.style],href:o.href.value,onClick:L.value&&o.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var N;return[re&&t("div",{key:"image",class:"v-card__image"},[l.image?t(j,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):t(b,{key:"image-img",cover:!0,src:e.image},null)]),t(rt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:l.loader}),ue&&t($t,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),Q&&t(We,{key:"text"},{default:()=>{var X;return[((X=l.text)==null?void 0:X.call(l))??e.text]}}),(N=l.default)==null?void 0:N.call(l),l.actions&&t(Ct,null,{default:l.actions}),Ue(L.value,"v-card")]}}),[[De("ripple"),L.value&&e.ripple]])}),{}}});const It=P({color:String,...be(),...$(),...ke(),...W(),...Me(),...ze(),...q(),...O(),...F()},"VSheet"),jt=V()({name:"VSheet",props:It(),setup(e,c){let{slots:s}=c;const{themeClasses:l}=H(e),{backgroundColorClasses:n,backgroundColorStyles:d}=ge(k(e,"color")),{borderClasses:r}=we(e),{dimensionStyles:u}=$e(e),{elevationClasses:v}=ae(e),{locationStyles:g}=Oe(e),{positionClasses:y}=Ee(e),{roundedClasses:E}=se(e);return T(()=>t(e.tag,{class:["v-sheet",l.value,n.value,r.value,v.value,y.value,E.value,e.class],style:[d.value,u.value,g.value,e.style]},s)),{}}}),At=a("h1",{class:"text-h2 d-flex justify-center"},"Technical Projects",-1),Pt={class:"project"},Tt=a("h2",{class:"projecttitle text-h4"},"Master’s Thesis: Blue Noise Distributed MCMC Decorrelation of ReSTIR",-1),Bt=a("div",{class:"text-justify"},[a("span",{class:""},[m("Reimplementing a paper on decorrelating ReSTIR via MCMC mutations and attempting to optimise it for a blue noise error distribution. "),a("br"),m(" See the accompanying video for a demonstration of the reduction in correlation artifacts in the form of bright streaks across the ceiling. ")])],-1),Dt={controls:"true",loop:"",autoplay:"",muted:"",class:"video",style:{width:"100%",height:"100%","min-width":"400px","max-width":"500px"},ref:"video"},Mt=a("source",{src:Ke,type:"video/mp4"},null,-1),zt=[Mt],Lt={class:"project"},Gt={autoplay:"",loop:"",muted:"",class:"video",style:{"z-index":"1",width:"100%",height:"100%","min-width":"400px","max-width":"700px"},ref:"video"},Rt=a("source",{src:Je,type:"video/mp4"},null,-1),Ot=[Rt],Et=a("h2",{class:"projecttitle text-h4"},"Master’s Small Project: Ray tracing UV light sterilization of hospital rooms",-1),Nt=a("span",null,[m("Developing a program for ZorgSaam to show the effect of different UV lamp positions and durations on the UV doses received by surfaces in the room. "),a("br")],-1),Ut={class:"project"},Ft=a("h2",{class:"projecttitle text-h4"},"Bachelor’s Final Project: Applied Training Game Internationale Operaties",-1),Ht=a("div",{class:"text-justify"},[a("span",null,[m("Working in a team as Scrum master to develop a point-and-click training game and accompanying web-based scenario editor for the Politieacademie. "),a("br"),m(" See the accompanying video for a trailer of the final product. ")])],-1),Wt=a("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/YrXMOzlAu_Q?si=npIBIsQq9Di3ff9f",title:"YouTube video player",frameborder:"0",allow:`accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share`,allowfullscreen:""},null,-1),qt={class:"project"},Kt=a("h2",{class:"projecttitle text-h4"},"Miscellaneous Master Course Projects",-1),Jt=a("span",null,"Some examples of the smaller projects that were the by-products of following courses for the Game and Media Technology Master's programme",-1),Qt=a("h1",{class:"text-h2 d-flex justify-center"},"Just For Fun Projects",-1),Xt={class:"project"},Yt=a("h2",{class:"projecttitle text-h4"},"Minecraft Mod: Weaponized Baseball",-1),Zt=a("span",null,"A personal summer vacation project written in Java that introduces bouncy ball physics to Minecraft.",-1),ea={autoplay:"",loop:"",muted:"",class:"video",style:{width:"100%",height:"100%","min-width":"400px","max-width":"700px"},ref:"video"},ta=a("source",{src:ht,type:"video/mp4"},null,-1),aa=[ta],sa={class:"project"},ia=a("iframe",{width:"600",height:"400",src:"http://oscar.fickel.nl/"},null,-1),la=a("h2",{class:"projecttitle text-h4"},"Portfolio Website",-1),na=a("span",null,"A simple responsive website to showcase my portfolio, made with Vue",-1),oa={class:"project"},ca=a("h2",{class:"projecttitle text-h4"},"Argus Kiesgame",-1),da=a("span",null,"A short satirical political voting guide in the form of a choose your own adventure game, in collaboration with the student paper Argus. Mostly made as a fun exercise in learning Godot.",-1),ra={data:()=>({cards:[{title:"Motion and Manipulation",description:"Programming a 4-jointed digital ping pong robot",src:"MOMA.png"},{title:"Game Physics",description:"Implementing rope physics with position based dynamics",src:"GP2.png"},{title:"Advanced Graphics",description:"Implementing a mesh level and top level BVH acceleration structure that supports animations for a whitted style ray tracer",src:"MAGR.png"},{title:"Mobile Interaction",description:"Comparing the usability and efficiency of different VR typing methods",src:"MOB1.png"},{title:"Optimisation and Vectorisation",description:"Optimising a voxel based water simulation program for 50% speedup",src:"MOV.png"},{title:"Computer Vision",description:"Using different camera angles to reconstruct a voxel representation of people's trajectories",src:"CV.png"}]}),methods:{inIframe(){try{return window.self!==window.top}catch{return!0}}}},ua=Object.assign(ra,{__name:"Projects",setup(e){return(c,s)=>{const l=Qe("v-card-body");return f(),D(pe,{class:""},{default:i(()=>[At,t(_,{class:"mt-8 mb-10"}),a("div",Pt,[t(I,{class:"d-flex mb-auto"},{default:i(()=>[t(x,{cols:"auto",md:"",class:""},{default:i(()=>[Tt,Bt,t(G,{grade:"8",morelink:"/projects/masterthesis",codelink:"https://git.science.uu.nl/vig/mscprojects/blue-noise-distributed-mcmc-decorrelation-of-restir"})]),_:1}),t(x,{cols:"auto",class:"d-flex mx-auto justify-center"},{default:i(()=>[a("video",Dt,zt,512)]),_:1})]),_:1})]),t(_,{class:"mt-8 mb-10"}),a("div",Lt,[t(I,{class:"d-flex mb-auto"},{default:i(()=>[t(x,{class:"d-flex justify-center mx-auto order-last order-md-first"},{default:i(()=>[a("video",Gt,Ot,512)]),_:1}),t(x,{class:"pb-0",cols:"auto",md:""},{default:i(()=>[Et,t(Y,{"min-width":"200",class:"text-justify"},{default:i(()=>[Nt,t(G,{grade:"8.5",morelink:"/projects/smallproject",codelink:"https://github.com/orjfickel/Small-Project-UV-Robot-Ray-Tracer"})]),_:1})]),_:1})]),_:1})]),t(_,{class:"mt-8 mb-10"}),a("div",Ut,[t(I,{class:"d-flex mb-auto"},{default:i(()=>[t(x,{cols:"auto",md:"",class:"pb-0"},{default:i(()=>[Ft,Ht,t(G,{grade:"8.5",pagelink:"https://softwareprojecten.sites.uu.nl/2021/07/29/applied-training-game-internationale-operaties-sequel/"})]),_:1}),t(x,{cols:"auto",class:"d-flex mx-auto justify-center"},{default:i(()=>[Wt]),_:1})]),_:1})]),t(_,{class:"mt-8 mb-10"}),a("div",qt,[Kt,t(I,{class:"d-flex mb-auto"},{default:i(()=>[t(x,{class:"text-justify"},{default:i(()=>[Jt]),_:1})]),_:1}),t(I,{class:"d-flex mb-auto"},{default:i(()=>[(f(!0),A(ee,null,Xe(c.cards,n=>(f(),D(x,{key:n.title},{default:i(()=>[t(Be,{class:"mx-auto","max-width":"400"},{default:i(()=>[t(b,{src:n.src,height:"200px",cover:""},null,8,["src"]),t(He,{textContent:fe(n.title)},null,8,["textContent"]),t(We,{class:"",textContent:fe(n.description)},null,8,["textContent"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),t(_,{class:"mt-8 mb-10"}),Qt,t(_,{class:"mt-8 mb-10"}),a("div",Xt,[t(I,{class:"d-flex mb-auto"},{default:i(()=>[t(x,{cols:"auto",md:""},{default:i(()=>[Yt,t(Y,{"min-width":"200"},{default:i(()=>[Zt,t(G,{pagelink:"https://www.curseforge.com/minecraft/mc-mods/weaponized-baseball",codelink:"https://github.com/orjfickel/Weaponized-Baseball-Mod"})]),_:1})]),_:1}),t(x,{class:"d-flex justify-center mx-auto"},{default:i(()=>[a("video",ea,aa,512)]),_:1})]),_:1})]),t(_,{class:"mt-8 mb-10"}),a("div",sa,[t(I,{class:"d-flex mb-auto"},{default:i(()=>[t(x,{class:"d-flex justify-center mx-auto order-last order-md-first"},{default:i(()=>[c.inIframe()?(f(),D(Be,{key:1,variant:"tonal",class:"d-flex justify-center align-center text-center",width:"500",height:"200","align-center":"","justify-center":"",style:{"min-width":"200px"}},{default:i(()=>[t(l,null,{default:i(()=>[m(" Nice try, but no recursion allowed! ")]),_:1})]),_:1})):(f(),D(jt,{key:0,class:"d-flex",elevation:2,border:""},{default:i(()=>[ia]),_:1}))]),_:1}),t(x,{cols:"auto",md:""},{default:i(()=>[la,t(Y,{"min-width":"200",class:"text-justify"},{default:i(()=>[na,t(G,{pagelink:"https://oscar.fickel.nl",codelink:"https://github.com/orjfickel/PortfolioWebsite"})]),_:1})]),_:1})]),_:1})]),t(_,{class:"mt-8 mb-10"}),a("div",oa,[t(I,{class:"d-flex mb-auto"},{default:i(()=>[t(x,{cols:"auto",md:""},{default:i(()=>[ca,t(Y,{"min-width":"200",class:"text-justify"},{default:i(()=>[da,t(G,{pagelink:"https://argusutrecht.wordpress.com/argus-kiesgame/"})]),_:1})]),_:1}),t(x,{class:"d-flex justify-center mx-auto"},{default:i(()=>[t(b,{"min-width":"400","max-width":"700",src:gt})]),_:1})]),_:1})]),t(_,{class:"mt-8"})]),_:1})}}}),ye="/assets/uu-38b09c4c.png",ma="/assets/hlml-04c6620d.jpg";const va=P({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...$(),...te(),...O(),...F()},"VTimeline"),Ie=V()({name:"VTimeline",props:va(),setup(e,c){let{slots:s}=c;const{themeClasses:l}=H(e),{densityClasses:n}=Ve(e),{rtlClasses:d}=Ye();xe({VTimelineDivider:{lineColor:k(e,"lineColor")},VTimelineItem:{density:k(e,"density"),lineInset:k(e,"lineInset")}});const r=M(()=>{const v=e.side?e.side:e.density!=="default"?"end":null;return v&&`v-timeline--side-${v}`}),u=M(()=>{const v=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return v;case"start":return v[0];case"end":return v[1];default:return null}});return T(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,u.value,{"v-timeline--inset-line":!!e.lineInset},l.value,n.value,r.value,d.value,e.class],style:[{"--v-timeline-line-thickness":Z(e.lineThickness)},e.style]},s)),{}}}),_a=P({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:w,iconColor:String,lineColor:String,...$(),...q(),...Se(),...W()},"VTimelineDivider"),fa=V()({name:"VTimelineDivider",props:_a(),setup(e,c){let{slots:s}=c;const{sizeClasses:l,sizeStyles:n}=Fe(e,"v-timeline-divider__dot"),{backgroundColorStyles:d,backgroundColorClasses:r}=ge(k(e,"dotColor")),{roundedClasses:u}=se(e,"v-timeline-divider__dot"),{elevationClasses:v}=ae(e),{backgroundColorClasses:g,backgroundColorStyles:y}=ge(k(e,"lineColor"));return T(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",g.value],style:y.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",v.value,u.value,l.value],style:n.value},[t("div",{class:["v-timeline-divider__inner-dot",r.value,u.value],style:d.value},[s.default?t(j,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},s.default):t(h,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",g.value],style:y.value},null)])),{}}}),ha=P({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:w,iconColor:String,lineInset:[Number,String],...$(),...ke(),...W(),...q(),...Se(),...O()},"VTimelineItem"),z=V()({name:"VTimelineItem",props:ha(),setup(e,c){let{slots:s}=c;const{dimensionStyles:l}=$e(e),n=Ze(0),d=et();return tt(d,r=>{var u;r&&(n.value=((u=r.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:u.getBoundingClientRect().width)??0)},{flush:"post"}),T(()=>{var r,u;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":Z(n.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${Z(e.lineInset)})`:Z(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:l.value},[(r=s.default)==null?void 0:r.call(s)]),t(fa,{ref:d,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:s.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((u=s.opposite)==null?void 0:u.call(s))])])}),{}}}),ga={},ya=a("h1",{class:"text-h2 d-flex justify-center"},"Education",-1),pa={class:"d-flex"},xa=a("div",null,[a("div",null,[a("strong",{class:"me-4 text-no-wrap"},"2021-2023")])],-1),ba={class:"d-flex flex-column"},ka=a("strong",{class:"me-4"},"Master Game and Media Technology",-1),Ca={class:"text-caption"},wa=a("div",{class:"text-caption"}," Average grade: 7.85.",-1),Va=a("div",{class:"text-caption"}," Included courses such as Advanced Graphics, Game Physics, and Optimisation & Vectorisation.",-1),$a={class:"d-flex"},Sa=a("div",{class:"d-flex"},[a("div",null,[a("strong",{class:"me-4 text-no-wrap"},"2018-2021")])],-1),Ia={class:"d-flex flex-column"},ja=a("strong",{class:"me-4"},"Bachelor Computer Science",-1),Aa={class:"text-caption"},Pa=a("div",{class:"text-caption"}," Average grade: 8.",-1),Ta=a("div",{class:"text-caption"}," With judicium Cum Laude and specialisation Game- technology.",-1),Ba={class:"d-flex"},Da=a("div",null,[a("div",null,[a("strong",{class:"me-4 text-no-wrap"},"2012-2018")])],-1),Ma={class:"d-flex flex-column"},za=a("strong",{class:"me-4"},"VWO (TTO)",-1),La={class:"text-caption"},Ga=a("div",{class:"text-caption"}," Subjects: WI-B, WI-D, ENG (International Baccalaureate - Higher Level), NL, NA, SK, EC, DU",-1);function Ra(e,c){return f(),A("div",null,[ya,t(_,{class:"my-9"}),t(Ie,{side:"end",align:"start",class:""},{default:i(()=>[t(z,{"dot-color":"primary",size:"small","min-width":"100%"},{default:i(()=>[a("div",pa,[xa,a("div",ba,[ka,a("div",Ca,[t(h,{start:"",color:"secondary",icon:"mdi-map-marker",class:"mr-0"}),m(" Utrecht University ")]),wa,Va]),t(b,{class:"d-flex ma-2 ml-auto","min-width":"50","max-width":"50",src:ye})])]),_:1}),t(z,{"dot-color":"primary",size:"small","min-width":"100%",class:"timeline_item"},{default:i(()=>[a("div",$a,[Sa,a("div",Ia,[ja,a("div",Aa,[t(h,{start:"",color:"secondary",icon:"mdi-map-marker",class:"mr-0"}),m(" Utrecht University ")]),Pa,Ta]),t(b,{class:"d-flex ma-2 ml-auto","min-width":"50","max-width":"50",src:ye})])]),_:1}),t(z,{"dot-color":"primary",size:"small","min-width":"100%"},{default:i(()=>[a("div",Ba,[Da,a("div",Ma,[za,a("div",La,[t(h,{start:"",color:"secondary",icon:"mdi-map-marker",class:"mr-0"}),m(" Haarlemmermeer Lyceum ")]),Ga]),t(b,{class:"d-flex ma-2 ml-auto","min-width":"50","max-width":"50",src:ma})])]),_:1})]),_:1})])}const Oa=R(ga,[["render",Ra]]),Ea="/assets/DGDARCL-e972d4be.png",Na="/assets/buyitdirect-8f84c1d6.png";const Ua={},Fa=a("h1",{class:"text-h2 d-flex justify-center"},"Experience",-1),Ha={class:"d-flex"},Wa=a("div",null,[a("div",null,[a("strong",{class:"me-4 text-no-wrap"},"2020-2021")])],-1),qa={class:""},Ka=a("strong",{class:"me-4"},"Teaching Assistant",-1),Ja={class:"text-caption"},Qa=a("div",{class:"text-caption"}," Teaching assistant for Informatica, specifically the courses ‘Modelleren en Systeemontwikkeling’ and ‘Concurrency’.",-1),Xa={class:"d-flex"},Ya=a("div",null,[a("div",null,[a("strong",{class:"me-4 text-no-wrap"},"2019-2021")])],-1),Za={class:""},es=a("strong",{class:"me-4"},"Treasurer",-1),ts={class:"text-caption"},as=a("div",{class:"text-caption"}," Treasurer for the ’Dutch Game Development And Research Committee’ of study association Sticky.",-1),ss={class:"d-flex"},is=a("div",null,[a("div",null,[a("strong",{class:"mr-15 text-no-wrap"},"2018")])],-1),ls={class:""},ns=a("strong",{class:"me-4"},"Customer Service Employee",-1),os={class:"text-caption"},cs=a("div",{class:"text-caption"}," Digitising invoices and managing the order backlog.",-1);function ds(e,c){return f(),A("div",null,[Fa,t(_,{class:"my-9"}),t(Ie,{side:"end",align:"start"},{default:i(()=>[t(z,{"dot-color":"primary",size:"small","min-width":"100%"},{default:i(()=>[a("div",Ha,[Wa,a("div",qa,[Ka,a("div",Ja,[t(h,{start:"",color:"secondary",icon:"mdi-map-marker",class:"mr-0"}),m(" Utrecht University ")]),Qa]),t(b,{class:"d-flex ma-2 ml-auto","min-width":"50","max-width":"50",src:ye})])]),_:1}),t(z,{"dot-color":"primary",size:"small","min-width":"100%"},{default:i(()=>[a("div",Xa,[Ya,a("div",Za,[es,a("div",ts,[t(h,{start:"",color:"secondary",icon:"mdi-map-marker",class:"mr-0"}),m(" DGDARC ")]),as]),t(b,{class:"d-flex ma-2 ml-auto","min-width":"50","max-width":"50",src:Ea})])]),_:1}),t(z,{"dot-color":"primary",size:"small","min-width":"100%"},{default:i(()=>[a("div",ss,[is,a("div",ls,[ns,a("div",os,[t(h,{start:"",color:"secondary",icon:"mdi-map-marker",class:"mr-0"}),m(" Buyitdirect ")]),cs]),t(b,{class:"d-flex ma-2 ml-auto","min-width":"50","max-width":"50",src:Na})])]),_:1})]),_:1})])}const rs=R(Ua,[["render",ds]]),us="/assets/ib-de4be8b6.png";const ms={},vs={class:""},_s=a("h1",{class:"text-h2 d-flex justify-center"},"Certificates",-1),fs={class:"d-flex"},hs=a("div",null,[a("div",null,[a("strong",{class:"mr-15 text-no-wrap"},"2018")])],-1),gs={class:"d-flex flex-column"},ys=a("strong",{class:"me-4"},"International Baccalaureate - Higher Level - Language and Literature",-1),ps={class:"text-caption"};function xs(e,c){return f(),A("div",vs,[_s,t(_,{class:"my-9"}),t(Ie,{side:"end",align:"start",class:"justify-start"},{default:i(()=>[t(z,{"dot-color":"primary",size:"small","min-width":"100%"},{default:i(()=>[a("div",fs,[hs,a("div",gs,[ys,a("div",ps,[t(h,{start:"",color:"secondary",icon:"mdi-map-marker",class:"mr-0"}),m(" International Baccalaureate Organization ")])]),t(b,{class:"d-flex ma-2 ml-auto justify-end","min-width":"50","max-width":"50",src:us})])]),_:1})]),_:1})])}const bs=R(ms,[["render",xs]]),ks="/assets/face-03e07dad.jpg";const qe=Symbol.for("vuetify:v-chip-group"),Cs=P({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:at},...$(),...ut({selectedClass:"v-chip--selected"}),...O(),...F(),...Ce({variant:"tonal"})},"VChipGroup");V()({name:"VChipGroup",props:Cs(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:s}=c;const{themeClasses:l}=H(e),{isSelected:n,select:d,next:r,prev:u,selected:v}=mt(e,qe);return xe({VChip:{color:k(e,"color"),disabled:k(e,"disabled"),filter:k(e,"filter"),variant:k(e,"variant")}}),T(()=>t(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},l.value,e.class],style:e.style},{default:()=>{var g;return[(g=s.default)==null?void 0:g.call(s,{isSelected:n,select:d,next:r,prev:u,selected:v.value})]}})),{}}});const ws=P({activeClass:String,appendAvatar:String,appendIcon:w,closable:Boolean,closeIcon:{type:w,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:w,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Pe(),onClickOnce:Pe(),...be(),...$(),...te(),...W(),...vt(),...q(),...Le(),...Se(),...O({tag:"span"}),...F(),...Ce({variant:"tonal"})},"VChip"),_e=V()({name:"VChip",directives:{Ripple:Ge},props:ws(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,c){let{attrs:s,emit:l,slots:n}=c;const{t:d}=st(),{borderClasses:r}=we(e),{colorClasses:u,colorStyles:v,variantClasses:g}=Re(e),{densityClasses:y}=Ve(e),{elevationClasses:E}=ae(e),{roundedClasses:le}=se(e),{sizeClasses:ne}=Fe(e),{themeClasses:oe}=H(e),K=it(e,"modelValue"),o=_t(e,qe,!1),C=Ne(e,s),L=M(()=>e.link!==!1&&C.isLink.value),S=M(()=>!e.disabled&&e.link!==!1&&(!!o||e.link||C.isClickable.value)),ce=M(()=>({"aria-label":d(e.closeLabel),onClick(p){p.stopPropagation(),K.value=!1,l("click:close",p)}}));function J(p){var B;l("click",p),S.value&&((B=C.navigate)==null||B.call(C,p),o==null||o.toggle())}function de(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),J(p))}return()=>{const p=C.isLink.value?"a":e.tag,B=!!(e.appendIcon||e.appendAvatar),re=!!(B||n.append),ue=!!(n.close||e.closable),Q=!!(n.filter||e.filter)&&o,N=!!(e.prependIcon||e.prependAvatar),X=!!(N||n.prepend),je=!o||o.isSelected.value;return K.value&&he(t(p,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":Q,"v-chip--pill":e.pill},oe.value,r.value,je?u.value:void 0,y.value,E.value,le.value,ne.value,g.value,o==null?void 0:o.selectedClass.value,e.class],style:[je?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:C.href.value,tabindex:S.value?0:void 0,onClick:J,onKeydown:S.value&&!L.value&&de},{default:()=>{var Ae;return[Ue(S.value,"v-chip"),Q&&t(ft,{key:"filter"},{default:()=>[he(t("div",{class:"v-chip__filter"},[n.filter?t(j,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},n.filter):t(h,{key:"filter-icon",icon:e.filterIcon},null)]),[[lt,o.isSelected.value]])]}),X&&t("div",{key:"prepend",class:"v-chip__prepend"},[n.prepend?t(j,{key:"prepend-defaults",disabled:!N,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},n.prepend):t(ee,null,[e.prependIcon&&t(h,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(U,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t("div",{class:"v-chip__content"},[((Ae=n.default)==null?void 0:Ae.call(n,{isSelected:o==null?void 0:o.isSelected.value,selectedClass:o==null?void 0:o.selectedClass.value,select:o==null?void 0:o.select,toggle:o==null?void 0:o.toggle,value:o==null?void 0:o.value.value,disabled:e.disabled}))??e.text]),re&&t("div",{key:"append",class:"v-chip__append"},[n.append?t(j,{key:"append-defaults",disabled:!B,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},n.append):t(ee,null,[e.appendIcon&&t(h,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(U,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),ue&&t("div",nt({key:"close",class:"v-chip__close"},ce.value),[n.close?t(j,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},n.close):t(h,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[De("ripple"),S.value&&e.ripple,null]])}}}),Vs={},$s={class:"bg-surface-variant mb-4"},Ss={class:"d-flex mt-5"},Is={class:"d-flex flex-column"},js={class:"d-flex"},As=a("div",{class:"mb-4 mr-auto",style:{"max-width":"70%"}},[a("h2",{class:"text-h4 mb-4"},"About me"),a("div",{class:"mr-auto"},[a("span",null,"Recently graduated with a Master’s degree in Computer Science and passionate about graphics programming")])],-1),Ps={class:"d-flex justify-end ml-auto mb-3 mt-3"},Ts={class:"d-flex align-end mt-n1 mb-1"};function Bs(e,c,s,l,n,d){return f(),A("div",$s,[t(pe,{class:""},{default:i(()=>[a("div",Ss,[t(Te),a("div",Is,[a("div",js,[As,a("div",Ps,[t(U,{size:"160px",variant:"elevated",class:"ml-3"},{default:i(()=>[t(b,{height:"200",src:ks})]),_:1})])]),a("div",Ts,[t(_e,{color:"primary",variant:"elevated",href:"mailto:oscarfickel@gmail.com",target:"_blank"},{default:i(()=>[t(h,{start:"",icon:"mdi-email"}),m(" E-mail ")]),_:1}),t(_e,{class:"mx-2",color:"primary",variant:"elevated",href:"https://www.linkedin.com/in/oscar-fickel/",target:"_blank"},{default:i(()=>[t(h,{start:"",icon:"mdi-linkedin"}),m(" LinkedIn ")]),_:1}),t(_e,{color:"primary",variant:"elevated",href:"https://github.com/orjfickel/",target:"_blank"},{default:i(()=>[t(h,{start:"",icon:"mdi-github"}),m(" Github ")]),_:1})])]),t(Te)])]),_:1})])}const Ds=R(Vs,[["render",Bs]]);const Ms={class:"edusperience d-flex"},zs={__name:"Home",setup(e){return(c,s)=>(f(),A(ee,null,[t(Ds,{id:"home"}),t(ua,{id:"projects"}),t(pe,{class:""},{default:i(()=>[a("div",Ms,[a("div",null,[t(Oa,{id:"education"})]),t(_,{class:"divider my-9"}),a("div",null,[t(rs,{id:"experience"})])]),t(_,{class:"my-9"}),a("div",null,[t(bs,{id:"certificates"})]),t(_,{class:"my-9"})]),_:1})],64))}},Us=R(zs,[["__scopeId","data-v-13bb94c6"]]);export{Us as default};
