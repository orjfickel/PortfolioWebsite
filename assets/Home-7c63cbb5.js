import{p as D,N as Fe,q as H,m as $,u as q,w as xe,t as T,n as t,I,J as be,a6 as Ue,A as Ee,c as G,G as oe,L as Ce,H as We,M as N,C as Ne,_ as Ve,Y as u,a1 as P,$ as n,a3 as a,a4 as f,a0 as He,Z as C,a7 as le,a5 as ce,a2 as qe,X as Je}from"./index-38d54adc.js";import{b as Ke,a as R,c as J}from"./VAvatar-bff7a861.js";import{V as K}from"./VImg-74398c3a.js";import{m as M,a as X,u as O,c as we,d as je,V as W,b as Xe}from"./color-8c10fced.js";import{i as Ye,d as de,j as Qe,m as re,k as Ze,c as Ie,R as Se,a as ue,f as Ae,l as et,e as Pe,g as $e,V as ne,n as tt,o as at,p as Me,q as Be,r as st,s as Le,v as Te,L as lt}from"./VBtn-d523f3ad.js";import{c as me,m as fe,a as he,f as nt,d as Ge,u as ve,b as pe,g as it,e as w,V as j}from"./VIcon-ceba429b.js";import{V as _e}from"./VContainer-6d20cf71.js";import{_ as ot}from"./ThesisDemo-bf34f7ed.js";import{V as x,a as r,_ as ct}from"./RotatingDosageHeatmapSlower-0d98ce42.js";import{V as b}from"./VDivider-6a7c0e79.js";/* empty css                                                                   *//* empty css                                                           */const dt="/assets/face-03e07dad.jpg";const Re=Symbol.for("vuetify:v-chip-group"),rt=D({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Fe},...M(),...Ye({selectedClass:"v-chip--selected"}),...X(),...H(),...de({variant:"tonal"})},"VChipGroup");$()({name:"VChipGroup",props:rt(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:s}=c;const{themeClasses:l}=q(e),{isSelected:o,select:m,next:p,prev:_,selected:g}=Qe(e,Re);return xe({VChip:{color:T(e,"color"),disabled:T(e,"disabled"),filter:T(e,"filter"),variant:T(e,"variant")}}),O(()=>t(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},l.value,e.class],style:e.style},{default:()=>{var h;return[(h=s.default)==null?void 0:h.call(s,{isSelected:o,select:m,next:p,prev:_,selected:g.value})]}})),{}}});const ut=D({activeClass:String,appendAvatar:String,appendIcon:I,closable:Boolean,closeIcon:{type:I,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:I,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:be(),onClickOnce:be(),...re(),...M(),...me(),...fe(),...Ze(),...he(),...Ie(),...nt(),...X({tag:"span"}),...H(),...de({variant:"tonal"})},"VChip"),ie=$()({name:"VChip",directives:{Ripple:Se},props:ut(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,c){let{attrs:s,emit:l,slots:o}=c;const{t:m}=Ue(),{borderClasses:p}=ue(e),{colorClasses:_,colorStyles:g,variantClasses:h}=Ae(e),{densityClasses:v}=Ge(e),{elevationClasses:B}=ve(e),{roundedClasses:Y}=pe(e),{sizeClasses:Q}=it(e),{themeClasses:Z}=q(e),z=Ee(e,"modelValue"),i=et(e,Re,!1),y=Pe(e,s),S=G(()=>e.link!==!1&&y.isLink.value),k=G(()=>!e.disabled&&e.link!==!1&&(!!i||e.link||y.isClickable.value)),ee=G(()=>({"aria-label":m(e.closeLabel),onClick(d){d.stopPropagation(),z.value=!1,l("click:close",d)}}));function F(d){var V;l("click",d),k.value&&((V=y.navigate)==null||V.call(y,d),i==null||i.toggle())}function te(d){(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),F(d))}return()=>{const d=y.isLink.value?"a":e.tag,V=!!(e.appendIcon||e.appendAvatar),ae=!!(V||o.append),se=!!(o.close||e.closable),U=!!(o.filter||e.filter)&&i,L=!!(e.prependIcon||e.prependAvatar),E=!!(L||o.prepend),ge=!i||i.isSelected.value;return z.value&&oe(t(d,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":k.value,"v-chip--filter":U,"v-chip--pill":e.pill},Z.value,p.value,ge?_.value:void 0,v.value,B.value,Y.value,Q.value,h.value,i==null?void 0:i.selectedClass.value,e.class],style:[ge?g.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:y.href.value,tabindex:k.value?0:void 0,onClick:F,onKeydown:k.value&&!S.value&&te},{default:()=>{var ye;return[$e(k.value,"v-chip"),U&&t(Ke,{key:"filter"},{default:()=>[oe(t("div",{class:"v-chip__filter"},[o.filter?t(j,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):t(w,{key:"filter-icon",icon:e.filterIcon},null)]),[[We,i.isSelected.value]])]}),E&&t("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?t(j,{key:"prepend-defaults",disabled:!L,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):t(N,null,[e.prependIcon&&t(w,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(R,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t("div",{class:"v-chip__content"},[((ye=o.default)==null?void 0:ye.call(o,{isSelected:i==null?void 0:i.isSelected.value,selectedClass:i==null?void 0:i.selectedClass.value,select:i==null?void 0:i.select,toggle:i==null?void 0:i.toggle,value:i==null?void 0:i.value.value,disabled:e.disabled}))??e.text]),ae&&t("div",{key:"append",class:"v-chip__append"},[o.append?t(j,{key:"append-defaults",disabled:!V,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):t(N,null,[e.appendIcon&&t(w,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(R,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),se&&t("div",Ne({key:"close",class:"v-chip__close"},ee.value),[o.close?t(j,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):t(w,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ce("ripple"),k.value&&e.ripple,null]])}}}),ke=J("v-spacer","div","VSpacer"),mt={},ft={class:"d-flex mt-5"},ht={class:"d-flex flex-column"},vt={class:"d-flex"},pt=a("div",{class:"mb-4 mr-auto",style:{"max-width":"70%"}},[a("h2",{class:"text-h4 mb-4"},"About me"),a("div",{class:"mr-auto"},[a("span",null,"Recently graduated with a Master’s degree in Computer Science (Game and Media Technology). I have spent the last year of my master’s focused on ray tracing, and hope to continue specialising in computer graphics and/or engine programming")])],-1),_t={class:"d-flex justify-end ml-auto mb-3 mt-3"},gt={class:"d-flex align-end mt-n1 mb-1"};function yt(e,c,s,l,o,m){return u(),P("div",{class:"mb-4",style:He({background:e.$vuetify.theme.current.colors.header,color:e.$vuetify.theme.current.colors.headertext})},[t(_e,{class:""},{default:n(()=>[a("div",ft,[t(ke),a("div",ht,[a("div",vt,[pt,a("div",_t,[t(R,{size:"160px",variant:"elevated",class:"ml-3 my-auto"},{default:n(()=>[t(K,{height:"200",src:dt})]),_:1})])]),a("div",gt,[t(ie,{color:"primary",variant:"elevated",href:"mailto:oscarfickel@gmail.com",target:"_blank"},{default:n(()=>[t(w,{start:"",icon:"mdi-email"}),f(" E-mail ")]),_:1}),t(ie,{class:"mx-2",color:"primary",variant:"elevated",href:"https://www.linkedin.com/in/oscar-fickel/",target:"_blank"},{default:n(()=>[t(w,{start:"",icon:"mdi-linkedin"}),f(" LinkedIn ")]),_:1}),t(ie,{color:"primary",variant:"elevated",href:"https://github.com/orjfickel/",target:"_blank"},{default:n(()=>[t(w,{start:"",icon:"mdi-github"}),f(" Github ")]),_:1})])]),t(ke)])]),_:1})],4)}const bt=Ve(mt,[["render",yt]]),kt={props:["grade","morelink","pagelink","codelink"],setup(e){}},xt={class:"d-flex mt-auto h-100 mb-1 ml-1 align-end"},Ct={class:"d-flex mt-4"},Vt={key:0,class:"d-flex mt-auto ml-auto flex-column justify-center align-center text-center","max-width":"100"},wt=a("span",null,"Final grade",-1);function jt(e,c,s,l,o,m){return u(),P("div",xt,[a("div",Ct,[s.pagelink!=null?(u(),C(ne,{key:0,color:"button",target:"_blank",href:s.pagelink},{default:n(()=>[f("Learn more")]),_:1},8,["href"])):s.morelink!=null?(u(),C(ne,{key:1,color:"button",onClick:c[0]||(c[0]=p=>e.$router.push(s.morelink))},{default:n(()=>[f("Learn more")]),_:1})):le("",!0),s.codelink!=null?(u(),C(ne,{key:2,color:"button",class:"ml-4",target:"_blank",href:s.codelink},{default:n(()=>[f("Source code")]),_:1},8,["href"])):le("",!0)]),s.grade!=null?(u(),P("div",Vt,[t(tt,{rotate:360,size:50,width:7,"model-value":s.grade*10,color:"teal",class:"mt-4 mb-2 mx-5"},{default:n(()=>[f(ce(s.grade),1)]),_:1},8,["model-value"]),wt])):le("",!0)])}const A=Ve(kt,[["render",jt]]);const It=$()({name:"VCardActions",props:M(),setup(e,c){let{slots:s}=c;return xe({VBtn:{variant:"text"}}),O(()=>{var l;return t("div",{class:["v-card-actions",e.class],style:e.style},[(l=s.default)==null?void 0:l.call(s)])}),{}}}),St=J("v-card-subtitle"),De=J("v-card-title"),At=D({appendAvatar:String,appendIcon:I,prependAvatar:String,prependIcon:I,subtitle:String,title:String,...M(),...me()},"VCardItem"),Pt=$()({name:"VCardItem",props:At(),setup(e,c){let{slots:s}=c;return O(()=>{var h;const l=!!(e.prependAvatar||e.prependIcon),o=!!(l||s.prepend),m=!!(e.appendAvatar||e.appendIcon),p=!!(m||s.append),_=!!(e.title||s.title),g=!!(e.subtitle||s.subtitle);return t("div",{class:["v-card-item",e.class],style:e.style},[o&&t("div",{key:"prepend",class:"v-card-item__prepend"},[s.prepend?t(j,{key:"prepend-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},s.prepend):l&&t(R,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),t("div",{class:"v-card-item__content"},[_&&t(De,{key:"title"},{default:()=>{var v;return[((v=s.title)==null?void 0:v.call(s))??e.title]}}),g&&t(St,{key:"subtitle"},{default:()=>{var v;return[((v=s.subtitle)==null?void 0:v.call(s))??e.subtitle]}}),(h=s.default)==null?void 0:h.call(s)]),p&&t("div",{key:"append",class:"v-card-item__append"},[s.append?t(j,{key:"append-defaults",disabled:!m,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},s.append):m&&t(R,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Oe=J("v-card-text"),$t=D({appendAvatar:String,appendIcon:I,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:I,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...re(),...M(),...me(),...we(),...fe(),...at(),...Me(),...Be(),...he(),...Ie(),...X(),...H(),...de({variant:"elevated"})},"VCard"),ze=$()({name:"VCard",directives:{Ripple:Se},props:$t(),setup(e,c){let{attrs:s,slots:l}=c;const{themeClasses:o}=q(e),{borderClasses:m}=ue(e),{colorClasses:p,colorStyles:_,variantClasses:g}=Ae(e),{densityClasses:h}=Ge(e),{dimensionStyles:v}=je(e),{elevationClasses:B}=ve(e),{loaderClasses:Y}=st(e),{locationStyles:Q}=Le(e),{positionClasses:Z}=Te(e),{roundedClasses:z}=pe(e),i=Pe(e,s),y=G(()=>e.link!==!1&&i.isLink.value),S=G(()=>!e.disabled&&e.link!==!1&&(e.link||i.isClickable.value));return O(()=>{const k=y.value?"a":e.tag,ee=!!(l.title||e.title),F=!!(l.subtitle||e.subtitle),te=ee||F,d=!!(l.append||e.appendAvatar||e.appendIcon),V=!!(l.prepend||e.prependAvatar||e.prependIcon),ae=!!(l.image||e.image),se=te||V||d,U=!!(l.text||e.text);return oe(t(k,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":S.value},o.value,m.value,p.value,h.value,B.value,Y.value,Z.value,z.value,g.value,e.class],style:[_.value,v.value,Q.value,e.style],href:i.href.value,onClick:S.value&&i.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var L;return[ae&&t("div",{key:"image",class:"v-card__image"},[l.image?t(j,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):t(K,{key:"image-img",cover:!0,src:e.image},null)]),t(lt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:l.loader}),se&&t(Pt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),U&&t(Oe,{key:"text"},{default:()=>{var E;return[((E=l.text)==null?void 0:E.call(l))??e.text]}}),(L=l.default)==null?void 0:L.call(l),l.actions&&t(It,null,{default:l.actions}),$e(S.value,"v-card")]}}),[[Ce("ripple"),S.value&&e.ripple]])}),{}}}),Mt=a("h1",{class:"text-h2 d-flex text-center justify-center"},"Technical Projects",-1),Bt={class:"project"},Lt=a("h2",{class:"projecttitle text-h4"},"Master’s Thesis: Blue Noise Distributed MCMC Decorrelation of ReSTIR",-1),Tt=a("div",{class:"text-justify"},[a("span",{class:""},[f("Reimplementing a paper on decorrelating ReSTIR via MCMC mutations and attempting to optimise it for a blue noise error distribution. Written in C++ and Slang (extension of HLSL). "),a("br"),f(" See the accompanying video for a demonstration of the reduction in correlation artifacts in the form of bright streaks across the ceiling. ")])],-1),Gt={controls:"true",loop:"",autoplay:"",muted:"",class:"video",style:{width:"100%",height:"100%","min-width":"400px","max-width":"440px"},ref:"video"},Rt=a("source",{src:ot,type:"video/mp4"},null,-1),Dt=[Rt],Ot={class:"project"},zt={autoplay:"",loop:"",muted:"",class:"video",style:{"z-index":"1",width:"100%",height:"100%","min-width":"400px","max-width":"700px"},ref:"video"},Ft=a("source",{src:ct,type:"video/mp4"},null,-1),Ut=[Ft],Et=a("h2",{class:"projecttitle text-h4"},"Master’s Small Project: Ray tracing UV light sterilization of hospital rooms",-1),Wt=a("span",null,"Developing a program for ZorgSaam to show the effect of different UV lamp positions and durations on the UV doses received by surfaces in the room. Written in C++ and GLSL, and using OpenCL. ",-1),Nt={class:"project"},Ht=a("h2",{class:"projecttitle text-h4"},"Bachelor’s Final Project: Applied Training Game Internationale Operaties",-1),qt=a("div",{class:"text-justify"},[a("span",null,[f("Working in a team as Scrum master to develop a point-and-click training game in Unity, and accompanying web-based scenario editor made with Vue, for the Politieacademie. "),a("br"),f(" See the accompanying video for a trailer of the final product. ")])],-1),Jt=a("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/YrXMOzlAu_Q?si=npIBIsQq9Di3ff9f",title:"YouTube video player",frameborder:"0",allow:`accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share`,allowfullscreen:""},null,-1),Kt={class:"project"},Xt=a("h2",{class:"projecttitle text-h4"},"Miscellaneous Master Course Projects",-1),Yt=a("span",null,"Some examples of the smaller projects that were the by-products of following courses for the Game and Media Technology Master's programme",-1),Qt={data:()=>({cards:[{title:"Motion and Manipulation",description:"Programming a 4-jointed digital ping pong robot in Haskell",src:"MOMA.png"},{title:"Game Physics",description:"Implementing rope physics with position based dynamics in Unity",src:"GP2.png"},{title:"Advanced Graphics",description:"Implementing a mesh level and top level BVH acceleration structure that supports animations for a whitted style ray tracer in C++ and CUDA",src:"MAGR.png"},{title:"Mobile Interaction",description:"Comparing the usability and efficiency of different VR typing methods in Unity",src:"MOB1.png"},{title:"Optimisation and Vectorisation",description:"Optimising a voxel based water simulation program for 50% speedup",src:"MOV.png"},{title:"Computer Vision",description:"Using different camera angles to reconstruct a voxel representation of people's trajectories",src:"CV.png"}]}),methods:{}},Zt=Object.assign(Qt,{__name:"TechnicalProjects",setup(e){return(c,s)=>(u(),C(_e,{class:""},{default:n(()=>[Mt,t(b,{class:"mt-8 mb-10"}),a("div",Bt,[t(x,{class:"d-flex mb-auto"},{default:n(()=>[t(r,{cols:"auto",md:"",class:"d-flex flex-column pb-0"},{default:n(()=>[Lt,Tt,t(A,{grade:"8",morelink:"/projects/masterthesis",codelink:"https://git.science.uu.nl/vig/mscprojects/blue-noise-distributed-mcmc-decorrelation-of-restir"})]),_:1}),t(r,{cols:"auto",class:"d-flex mx-auto justify-center pb-0"},{default:n(()=>[a("video",Gt,Dt,512)]),_:1})]),_:1})]),t(b,{class:"mt-8 mb-10"}),a("div",Ot,[t(x,{class:"d-flex mb-auto"},{default:n(()=>[t(r,{class:"d-flex justify-center mx-auto order-last order-md-first pb-0"},{default:n(()=>[a("video",zt,Ut,512)]),_:1}),t(r,{class:"pb-0 d-flex flex-column",cols:"auto",md:""},{default:n(()=>[Et,t(W,{"min-width":"200",class:"text-justify"},{default:n(()=>[Wt]),_:1}),t(A,{grade:"8.5",morelink:"/projects/smallproject",codelink:"https://github.com/orjfickel/Small-Project-UV-Robot-Ray-Tracer"})]),_:1})]),_:1})]),t(b,{class:"mt-8 mb-10"}),a("div",Nt,[t(x,{class:"d-flex mb-auto"},{default:n(()=>[t(r,{cols:"auto",md:"",class:"pb-0 d-flex flex-column"},{default:n(()=>[Ht,qt,t(A,{grade:"8.5",pagelink:"https://softwareprojecten.sites.uu.nl/2021/07/29/applied-training-game-internationale-operaties-sequel/"})]),_:1}),t(r,{cols:"auto",class:"d-flex mx-auto justify-center align-center pb-0"},{default:n(()=>[Jt]),_:1})]),_:1})]),t(b,{class:"mt-8 mb-10"}),a("div",Kt,[Xt,t(x,{class:"d-flex mb-auto"},{default:n(()=>[t(r,{class:"text-justify"},{default:n(()=>[Yt]),_:1})]),_:1}),t(x,{class:"d-flex mb-auto"},{default:n(()=>[(u(!0),P(N,null,qe(c.cards,l=>(u(),C(r,{key:l.title},{default:n(()=>[t(ze,{class:"mx-auto","max-width":"400"},{default:n(()=>[t(K,{src:"/home/"+l.src,height:"200px",cover:""},null,8,["src"]),t(De,{textContent:ce(l.title)},null,8,["textContent"]),t(Oe,{class:"",textContent:ce(l.description)},null,8,["textContent"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),t(b,{class:"mt-8"})]),_:1}))}}),ea="/assets/BounceOffTheWall-9c5e1bfa.mp4",ta="/assets/kiesgame-270bbeca.webp";const aa=D({color:String,...re(),...M(),...we(),...fe(),...Me(),...Be(),...he(),...X(),...H()},"VSheet"),sa=$()({name:"VSheet",props:aa(),setup(e,c){let{slots:s}=c;const{themeClasses:l}=q(e),{backgroundColorClasses:o,backgroundColorStyles:m}=Xe(T(e,"color")),{borderClasses:p}=ue(e),{dimensionStyles:_}=je(e),{elevationClasses:g}=ve(e),{locationStyles:h}=Le(e),{positionClasses:v}=Te(e),{roundedClasses:B}=pe(e);return O(()=>t(e.tag,{class:["v-sheet",l.value,o.value,p.value,g.value,v.value,B.value,e.class],style:[m.value,_.value,h.value,e.style]},s)),{}}}),la=a("h1",{class:"text-h2 d-flex text-center justify-center"},"Just-For-Fun Projects",-1),na={class:"project"},ia=a("h2",{class:"projecttitle text-h4"},"Minecraft Mod: Weaponized Baseball",-1),oa=a("span",null,"A personal summer vacation project written in Java that introduces bouncy ball physics to Minecraft.",-1),ca={autoplay:"",loop:"",muted:"",class:"video",style:{width:"100%",height:"100%","min-width":"400px","max-width":"700px"},ref:"video"},da=a("source",{src:ea,type:"video/mp4"},null,-1),ra=[da],ua={class:"project"},ma=a("iframe",{class:"w-100",src:"https://oscar.fickel.nl/"},null,-1),fa=a("h2",{class:"projecttitle text-h4"},"Portfolio Website",-1),ha=a("span",null,"A simple responsive website to showcase my portfolio, made with Vue",-1),va={class:"project"},pa=a("h2",{class:"projecttitle text-h4"},"Argus Kiesgame",-1),_a=a("span",null,"A short satirical political voting guide in the form of a choose your own adventure game, in collaboration with the student paper Argus. Mostly made as a fun exercise in learning Godot. ",-1),ga=a("div",{height:"100",width:"100",class:"pa-1"},[a("span",{height:"100",width:"100",class:"d-flex pa-1"})],-1),ya={data:()=>({}),methods:{inIframe(){try{return window.self!==window.top}catch{return!0}}}},ba=Object.assign(ya,{__name:"FunProjects",setup(e){return(c,s)=>{const l=Je("v-card-body");return u(),C(_e,{class:""},{default:n(()=>[la,t(b,{class:"mt-8 mb-10"}),a("div",na,[t(x,{class:"d-flex mb-auto"},{default:n(()=>[t(r,{cols:"auto",md:"",class:"pb-0 d-flex flex-column"},{default:n(()=>[ia,t(W,{"min-width":"200"},{default:n(()=>[oa]),_:1}),t(A,{pagelink:"https://www.curseforge.com/minecraft/mc-mods/weaponized-baseball",codelink:"https://github.com/orjfickel/Weaponized-Baseball-Mod"})]),_:1}),t(r,{class:"d-flex justify-center mx-auto pb-0"},{default:n(()=>[a("video",ca,ra,512)]),_:1})]),_:1})]),t(b,{class:"mt-8 mb-10"}),a("div",ua,[t(x,{class:"d-flex mb-auto"},{default:n(()=>[t(r,{class:"d-flex justify-center mx-auto order-last order-md-first pb-0"},{default:n(()=>[c.inIframe()?(u(),C(ze,{key:1,variant:"tonal",class:"d-flex justify-center align-center text-center",width:"500",height:"200","align-center":"","justify-center":"",style:{"min-width":"200px"}},{default:n(()=>[t(l,null,{default:n(()=>[f(" Nice try, but no recursion allowed! ")]),_:1})]),_:1})):(u(),C(sa,{key:0,class:"d-flex",elevation:2,border:"",style:{width:"100%",height:"330px","min-width":"400px","max-width":"700px"}},{default:n(()=>[ma]),_:1}))]),_:1}),t(r,{cols:"auto",md:"",class:"pb-0 d-flex flex-column"},{default:n(()=>[fa,t(W,{"min-width":"200",class:"text-justify"},{default:n(()=>[ha]),_:1}),t(A,{pagelink:"https://oscar.fickel.nl",codelink:"https://github.com/orjfickel/PortfolioWebsite"})]),_:1})]),_:1})]),t(b,{class:"mt-8 mb-10"}),a("div",va,[t(x,{class:"d-flex mb-auto"},{default:n(()=>[t(r,{cols:"auto",md:"",class:"pb-0 d-flex flex-column"},{default:n(()=>[pa,t(W,{"min-width":"200",class:"text-justify"},{default:n(()=>[_a]),_:1}),t(A,{pagelink:"https://argusutrecht.wordpress.com/argus-kiesgame/"})]),_:1}),t(r,{class:"d-flex justify-center mx-auto pb-0"},{default:n(()=>[t(K,{"min-width":"400","max-width":"700",src:ta})]),_:1})]),_:1})]),ga,t(b,{class:"mt-8"})]),_:1})}}}),ka={__name:"Projects",setup(e){return(c,s)=>(u(),P(N,null,[t(Zt,{id:"technicalprojects"}),t(ba,{id:"funprojects"})],64))}},xa={id:"home"},Ta={__name:"Home",setup(e){return(c,s)=>(u(),P("div",xa,[t(bt),t(ka)]))}};export{Ta as default};