import{p as E,i as J,c as v,r as $,a as de,g as Ce,s as L,o as he,b as oe,d as W,f as kt,e as Je,h as Vt,j as Ct,k as ie,l as N,m as d,n as pe,t as M,q as be,u as He,v as De,w as It,x as F,y as _t,z as we,A as Se,B as le,C as xt,D as se,E as Bt,I as ae,F as Qe,G as Tt,H as Fe,J as At,K as Lt,L as ge,M as Pt,N as Mt,O as ve,P as Et,Q as Ot,R as et,S as $t,T as Nt,U as Rt,_ as Ht,V as tt,W as Ee,X as at,Y as Z,Z as me,$ as G,a0 as Oe,a1 as je,a2 as Ye,a3 as Me,a4 as Ge,a5 as Dt}from"./index-90280fdc.js";import{u as zt,m as Ie,a as _e,b as Ft,V as $e,c as jt,d as nt,R as Yt,e as Gt,f as Wt,g as Xt,h as Kt,t as Ut}from"./VBtn-900b8bad.js";import{m as X,a as U,u as H,b as ke,c as lt,d as ot,e as qt}from"./color-73a8f508.js";import{m as xe,a as Be,u as Te,b as Ae,V as ne,c as it,d as st,e as Ne}from"./VIcon-911b7832.js";import{V as ut,c as rt,a as We}from"./VAvatar-92693a68.js";import{V as Zt,M as Jt}from"./VImg-698e3d35.js";import{V as Qt}from"./VDivider-f2005af2.js";const Ve=Symbol.for("vuetify:layout"),ct=Symbol.for("vuetify:layout-item"),Xe=1e3,ea=E({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),dt=E({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ta(){const e=J(Ve);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function vt(e){const o=J(Ve);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Je()}`,l=Ce("useLayoutItem");oe(ct,{id:t});const n=L(!1);Vt(()=>n.value=!0),Ct(()=>n.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:i}=o.register(l,{...e,active:v(()=>n.value?!1:e.active.value),id:t});return ie(()=>o.unregister(t)),{layoutItemStyles:a,layoutRect:o.layoutRect,layoutItemScrimStyles:i}}const aa=(e,o,t,l)=>{let n={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...n}}];for(const i of e){const s=o.get(i),p=t.get(i),g=l.get(i);if(!s||!p||!g)continue;const m={...n,[s.value]:parseInt(n[s.value],10)+(g.value?parseInt(p.value,10):0)};a.push({id:i,layer:m}),n=m}return a};function na(e){const o=J(Ve,null),t=v(()=>o?o.rootZIndex.value-100:Xe),l=$([]),n=de(new Map),a=de(new Map),i=de(new Map),s=de(new Map),p=de(new Map),{resizeRef:g,contentRect:m}=zt(),u=v(()=>{const y=new Map,b=e.overlaps??[];for(const h of b.filter(w=>w.includes(":"))){const[w,I]=h.split(":");if(!l.value.includes(w)||!l.value.includes(I))continue;const O=n.get(w),R=n.get(I),D=a.get(w),j=a.get(I);!O||!R||!D||!j||(y.set(I,{position:O.value,amount:parseInt(D.value,10)}),y.set(w,{position:R.value,amount:-parseInt(j.value,10)}))}return y}),r=v(()=>{const y=[...new Set([...i.values()].map(h=>h.value))].sort((h,w)=>h-w),b=[];for(const h of y){const w=l.value.filter(I=>{var O;return((O=i.get(I))==null?void 0:O.value)===h});b.push(...w)}return aa(b,n,a,s)}),c=v(()=>!Array.from(p.values()).some(y=>y.value)),f=v(()=>r.value[r.value.length-1].layer),C=v(()=>({"--v-layout-left":W(f.value.left),"--v-layout-right":W(f.value.right),"--v-layout-top":W(f.value.top),"--v-layout-bottom":W(f.value.bottom),...c.value?void 0:{transition:"none"}})),V=v(()=>r.value.slice(1).map((y,b)=>{let{id:h}=y;const{layer:w}=r.value[b],I=a.get(h),O=n.get(h);return{id:h,...w,size:Number(I.value),position:O.value}})),S=y=>V.value.find(b=>b.id===y),_=Ce("createLayout"),B=L(!1);he(()=>{B.value=!0}),oe(Ve,{register:(y,b)=>{let{id:h,order:w,position:I,layoutSize:O,elementSize:R,active:D,disableTransitions:j,absolute:K}=b;i.set(h,w),n.set(h,I),a.set(h,O),s.set(h,D),j&&p.set(h,j);const Q=kt(ct,_==null?void 0:_.vnode).indexOf(y);Q>-1?l.value.splice(Q,0,h):l.value.push(h);const x=v(()=>V.value.findIndex(z=>z.id===h)),A=v(()=>t.value+r.value.length*2-x.value*2),ee=v(()=>{const z=I.value==="left"||I.value==="right",Y=I.value==="right",re=I.value==="bottom",ce={[I.value]:0,zIndex:A.value,transform:`translate${z?"X":"Y"}(${(D.value?0:-110)*(Y||re?-1:1)}%)`,position:K.value||t.value!==Xe?"absolute":"fixed",...c.value?void 0:{transition:"none"}};if(!B.value)return ce;const T=V.value[x.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${h}"`);const Pe=u.value.get(h);return Pe&&(T[Pe.position]+=Pe.amount),{...ce,height:z?`calc(100% - ${T.top}px - ${T.bottom}px)`:R.value?`${R.value}px`:void 0,left:Y?void 0:`${T.left}px`,right:Y?`${T.right}px`:void 0,top:I.value!=="bottom"?`${T.top}px`:void 0,bottom:I.value!=="top"?`${T.bottom}px`:void 0,width:z?R.value?`${R.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),q=v(()=>({zIndex:A.value-1}));return{layoutItemStyles:ee,layoutItemScrimStyles:q,zIndex:A}},unregister:y=>{i.delete(y),n.delete(y),a.delete(y),s.delete(y),p.delete(y),l.value=l.value.filter(b=>b!==y)},mainRect:f,mainStyles:C,getLayoutItem:S,items:V,layoutRect:m,rootZIndex:t});const P=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),k=v(()=>({zIndex:o?t.value:void 0,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:P,layoutStyles:k,getLayoutItem:S,items:V,layoutRect:m,layoutRef:g}}const la=E({text:String,...X(),...U()},"VToolbarTitle"),oa=N()({name:"VToolbarTitle",props:la(),setup(e,o){let{slots:t}=o;return H(()=>{const l=!!(t.default||t.text||e.text);return d(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[l&&d("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),ia=[null,"prominent","default","comfortable","compact"],mt=E({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ia.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ie(),...X(),...xe(),...Be(),...U({tag:"header"}),...pe()},"VToolbar"),Ke=N()({name:"VToolbar",props:mt(),setup(e,o){var c;let{slots:t}=o;const{backgroundColorClasses:l,backgroundColorStyles:n}=ke(M(e,"color")),{borderClasses:a}=_e(e),{elevationClasses:i}=Te(e),{roundedClasses:s}=Ae(e),{themeClasses:p}=be(e),{rtlClasses:g}=He(),m=L(!!(e.extended||(c=t.extension)!=null&&c.call(t))),u=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),r=v(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return De({VBtn:{variant:"text"}}),H(()=>{var S;const f=!!(e.title||t.title),C=!!(t.image||e.image),V=(S=t.extension)==null?void 0:S.call(t);return m.value=!!(e.extended||V),d(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,a.value,i.value,s.value,p.value,g.value,e.class],style:[n.value,e.style]},{default:()=>[C&&d("div",{key:"image",class:"v-toolbar__image"},[t.image?d(ne,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):d(Zt,{key:"image-img",cover:!0,src:e.image},null)]),d(ne,{defaults:{VTabs:{height:W(u.value)}}},{default:()=>{var _,B,P;return[d("div",{class:"v-toolbar__content",style:{height:W(u.value)}},[t.prepend&&d("div",{class:"v-toolbar__prepend"},[(_=t.prepend)==null?void 0:_.call(t)]),f&&d(oa,{key:"title",text:e.title},{text:t.title}),(B=t.default)==null?void 0:B.call(t),t.append&&d("div",{class:"v-toolbar__append"},[(P=t.append)==null?void 0:P.call(t)])])]}}),d(ne,{defaults:{VTabs:{height:W(r.value)}}},{default:()=>[d(ut,null,{default:()=>[m.value&&d("div",{class:"v-toolbar__extension",style:{height:W(r.value)}},[V])]})]})]})}),{contentHeight:u,extensionHeight:r}}}),sa=E({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ua(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let l=0;const n=$(null),a=L(0),i=L(0),s=L(0),p=L(!1),g=L(!1),m=v(()=>Number(e.scrollThreshold)),u=v(()=>It((m.value-a.value)/m.value||0)),r=()=>{const c=n.value;!c||t&&!t.value||(l=a.value,a.value="window"in c?c.pageYOffset:c.scrollTop,g.value=a.value<l,s.value=Math.abs(a.value-m.value))};return F(g,()=>{i.value=i.value||a.value}),F(p,()=>{i.value=0}),he(()=>{F(()=>e.scrollTarget,c=>{var C;const f=c?document.querySelector(c):window;f&&f!==n.value&&((C=n.value)==null||C.removeEventListener("scroll",r),n.value=f,n.value.addEventListener("scroll",r,{passive:!0}))},{immediate:!0})}),ie(()=>{var c;(c=n.value)==null||c.removeEventListener("scroll",r)}),t&&F(t,r,{immediate:!0}),{scrollThreshold:m,currentScroll:a,currentThreshold:s,isScrollActive:p,scrollRatio:u,isScrollingUp:g,savedScroll:i}}function Le(){const e=L(!1);return he(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:_t(e)}}const ra=E({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...mt(),...dt(),...sa(),height:{type:[Number,String],default:64}},"VAppBar"),ca=N()({name:"VAppBar",props:ra(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const l=$(),n=we(e,"modelValue"),a=v(()=>{var _;const S=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:S.has("hide"),inverted:S.has("inverted"),collapse:S.has("collapse"),elevate:S.has("elevate"),fadeImage:S.has("fade-image")}}),i=v(()=>{const S=a.value;return S.hide||S.inverted||S.collapse||S.elevate||S.fadeImage||!n.value}),{currentScroll:s,scrollThreshold:p,isScrollingUp:g,scrollRatio:m}=ua(e,{canScroll:i}),u=v(()=>e.collapse||a.value.collapse&&(a.value.inverted?m.value>0:m.value===0)),r=v(()=>e.flat||a.value.elevate&&(a.value.inverted?s.value>0:s.value===0)),c=v(()=>a.value.fadeImage?a.value.inverted?1-m.value:m.value:void 0),f=v(()=>{var B,P;if(a.value.hide&&a.value.inverted)return 0;const S=((B=l.value)==null?void 0:B.contentHeight)??0,_=((P=l.value)==null?void 0:P.extensionHeight)??0;return S+_});Se(v(()=>!!e.scrollBehavior),()=>{xt(()=>{a.value.hide?a.value.inverted?n.value=s.value>p.value:n.value=g.value||s.value<p.value:n.value=!0})});const{ssrBootStyles:C}=Le(),{layoutItemStyles:V}=vt({id:e.name,order:v(()=>parseInt(e.order,10)),position:M(e,"location"),layoutSize:f,elementSize:L(void 0),active:n,absolute:M(e,"absolute")});return H(()=>{const[S]=Ke.filterProps(e);return d(Ke,le({ref:l,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":c.value,height:void 0,...C.value},e.style]},S,{collapse:u.value,flat:r.value}),t)}),{}}}),da=E({...Ft({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),va=N()({name:"VAppBarNavIcon",props:da(),setup(e,o){let{slots:t}=o;return H(()=>d($e,le(e,{class:["v-app-bar-nav-icon"]}),t)),{}}});const Re=Symbol.for("vuetify:list");function ft(){const e=J(Re,{hasPrepend:L(!1),updateHasPrepend:()=>null}),o={hasPrepend:L(!1),updateHasPrepend:t=>{t&&(o.hasPrepend.value=t)}};return oe(Re,o),e}function gt(){return J(Re,null)}const ma={open:e=>{let{id:o,value:t,opened:l,parents:n}=e;if(t){const a=new Set;a.add(o);let i=n.get(o);for(;i!=null;)a.add(i),i=n.get(i);return a}else return l.delete(o),l},select:()=>null},yt={open:e=>{let{id:o,value:t,opened:l,parents:n}=e;if(t){let a=n.get(o);for(l.add(o);a!=null&&a!==o;)l.add(a),a=n.get(a);return l}else l.delete(o);return l},select:()=>null},fa={open:yt.open,select:e=>{let{id:o,value:t,opened:l,parents:n}=e;if(!t)return l;const a=[];let i=n.get(o);for(;i!=null;)a.push(i),i=n.get(i);return new Set(a)}},ze=e=>{const o={select:t=>{let{id:l,value:n,selected:a}=t;if(l=se(l),e&&!n){const i=Array.from(a.entries()).reduce((s,p)=>{let[g,m]=p;return m==="on"?[...s,g]:s},[]);if(i.length===1&&i[0]===l)return a}return a.set(l,n?"on":"off"),a},in:(t,l,n)=>{let a=new Map;for(const i of t||[])a=o.select({id:i,value:!0,selected:new Map(a),children:l,parents:n});return a},out:t=>{const l=[];for(const[n,a]of t.entries())a==="on"&&l.push(n);return l}};return o},ht=e=>{const o=ze(e);return{select:l=>{let{selected:n,id:a,...i}=l;a=se(a);const s=n.has(a)?new Map([[a,n.get(a)]]):new Map;return o.select({...i,id:a,selected:s})},in:(l,n,a)=>{let i=new Map;return l!=null&&l.length&&(i=o.in(l.slice(0,1),n,a)),i},out:(l,n,a)=>o.out(l,n,a)}},ga=e=>{const o=ze(e);return{select:l=>{let{id:n,selected:a,children:i,...s}=l;return n=se(n),i.has(n)?a:o.select({id:n,selected:a,children:i,...s})},in:o.in,out:o.out}},ya=e=>{const o=ht(e);return{select:l=>{let{id:n,selected:a,children:i,...s}=l;return n=se(n),i.has(n)?a:o.select({id:n,selected:a,children:i,...s})},in:o.in,out:o.out}},ha=e=>{const o={select:t=>{let{id:l,value:n,selected:a,children:i,parents:s}=t;l=se(l);const p=new Map(a),g=[l];for(;g.length;){const u=g.shift();a.set(u,n?"on":"off"),i.has(u)&&g.push(...i.get(u))}let m=s.get(l);for(;m;){const u=i.get(m),r=u.every(f=>a.get(f)==="on"),c=u.every(f=>!a.has(f)||a.get(f)==="off");a.set(m,r?"on":c?"off":"indeterminate"),m=s.get(m)}return e&&!n&&Array.from(a.entries()).reduce((r,c)=>{let[f,C]=c;return C==="on"?[...r,f]:r},[]).length===0?p:a},in:(t,l,n)=>{let a=new Map;for(const i of t||[])a=o.select({id:i,value:!0,selected:new Map(a),children:l,parents:n});return a},out:(t,l)=>{const n=[];for(const[a,i]of t.entries())i==="on"&&!l.has(a)&&n.push(a);return n}};return o},ye=Symbol.for("vuetify:nested"),pt={id:L(),root:{register:()=>null,unregister:()=>null,parents:$(new Map),children:$(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:$(new Set),selected:$(new Map),selectedValues:$([])}},pa=E({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),ba=e=>{let o=!1;const t=$(new Map),l=$(new Map),n=we(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return ya(e.mandatory);case"leaf":return ga(e.mandatory);case"independent":return ze(e.mandatory);case"single-independent":return ht(e.mandatory);case"classic":default:return ha(e.mandatory)}}),i=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return fa;case"single":return ma;case"multiple":default:return yt}}),s=we(e,"selected",e.selected,u=>a.value.in(u,t.value,l.value),u=>a.value.out(u,t.value,l.value));ie(()=>{o=!0});function p(u){const r=[];let c=u;for(;c!=null;)r.unshift(c),c=l.value.get(c);return r}const g=Ce("nested"),m={id:L(),root:{opened:n,selected:s,selectedValues:v(()=>{const u=[];for(const[r,c]of s.value.entries())c==="on"&&u.push(r);return u}),register:(u,r,c)=>{r&&u!==r&&l.value.set(u,r),c&&t.value.set(u,[]),r!=null&&t.value.set(r,[...t.value.get(r)||[],u])},unregister:u=>{if(o)return;t.value.delete(u);const r=l.value.get(u);if(r){const c=t.value.get(r)??[];t.value.set(r,c.filter(f=>f!==u))}l.value.delete(u),n.value.delete(u)},open:(u,r,c)=>{g.emit("click:open",{id:u,value:r,path:p(u),event:c});const f=i.value.open({id:u,value:r,opened:new Set(n.value),children:t.value,parents:l.value,event:c});f&&(n.value=f)},openOnSelect:(u,r,c)=>{const f=i.value.select({id:u,value:r,selected:new Map(s.value),opened:new Set(n.value),children:t.value,parents:l.value,event:c});f&&(n.value=f)},select:(u,r,c)=>{g.emit("click:select",{id:u,value:r,path:p(u),event:c});const f=a.value.select({id:u,value:r,selected:new Map(s.value),children:t.value,parents:l.value,event:c});f&&(s.value=f),m.root.openOnSelect(u,r,c)},children:t,parents:l}};return oe(ye,m),m.root},bt=(e,o)=>{const t=J(ye,pt),l=Symbol(Je()),n=v(()=>e.value!==void 0?e.value:l),a={...t,id:n,open:(i,s)=>t.root.open(n.value,i,s),openOnSelect:(i,s)=>t.root.openOnSelect(n.value,i,s),isOpen:v(()=>t.root.opened.value.has(n.value)),parent:v(()=>t.root.parents.value.get(n.value)),select:(i,s)=>t.root.select(n.value,i,s),isSelected:v(()=>t.root.selected.value.get(se(n.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(n.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(n.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(n.value,t.id.value,o),ie(()=>{!t.isGroupActivator&&t.root.unregister(n.value)}),o&&oe(ye,a),a},Sa=()=>{const e=J(ye,pt);oe(ye,{...e,isGroupActivator:!0})},wa=Bt({name:"VListGroupActivator",setup(e,o){let{slots:t}=o;return Sa(),()=>{var l;return(l=t.default)==null?void 0:l.call(t)}}}),ka=E({activeColor:String,baseColor:String,color:String,collapseIcon:{type:ae,default:"$collapse"},expandIcon:{type:ae,default:"$expand"},prependIcon:ae,appendIcon:ae,fluid:Boolean,subgroup:Boolean,title:String,value:null,...X(),...U()},"VListGroup"),Ue=N()({name:"VListGroup",props:ka(),setup(e,o){let{slots:t}=o;const{isOpen:l,open:n,id:a}=bt(M(e,"value"),!0),i=v(()=>`v-list-group--id-${String(a.value)}`),s=gt(),{isBooted:p}=Le();function g(c){n(!l.value,c)}const m=v(()=>({onClick:g,class:"v-list-group__header",id:i.value})),u=v(()=>l.value?e.collapseIcon:e.expandIcon),r=v(()=>({VListItem:{active:l.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return H(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":s==null?void 0:s.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":l.value},e.class],style:e.style},{default:()=>[t.activator&&d(ne,{defaults:r.value},{default:()=>[d(wa,null,{default:()=>[t.activator({props:m.value,isOpen:l.value})]})]}),d(Jt,{transition:{component:ut},disabled:!p.value},{default:()=>{var c;return[Qe(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(c=t.default)==null?void 0:c.call(t)]),[[Tt,l.value]])]}})]})),{}}});const Va=rt("v-list-item-subtitle"),Ca=rt("v-list-item-title"),Ia=E({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:ae,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:ae,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Fe(),onClickOnce:Fe(),...Ie(),...X(),...it(),...lt(),...xe(),...Be(),...jt(),...U(),...pe(),...nt({variant:"text"})},"VListItem"),fe=N()({name:"VListItem",directives:{Ripple:Yt},props:Ia(),emits:{click:e=>!0},setup(e,o){let{attrs:t,slots:l,emit:n}=o;const a=Gt(e,t),i=v(()=>e.value===void 0?a.href.value:e.value),{select:s,isSelected:p,isIndeterminate:g,isGroupActivator:m,root:u,parent:r,openOnSelect:c}=bt(i,!1),f=gt(),C=v(()=>{var x;return e.active!==!1&&(e.active||((x=a.isActive)==null?void 0:x.value)||p.value)}),V=v(()=>e.link!==!1&&a.isLink.value),S=v(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!f)),_=v(()=>e.rounded||e.nav),B=v(()=>e.color??e.activeColor),P=v(()=>({color:C.value?B.value??e.baseColor:e.baseColor,variant:e.variant}));F(()=>{var x;return(x=a.isActive)==null?void 0:x.value},x=>{x&&r.value!=null&&u.open(r.value,!0),x&&c(x)},{immediate:!0});const{themeClasses:k}=be(e),{borderClasses:y}=_e(e),{colorClasses:b,colorStyles:h,variantClasses:w}=Wt(P),{densityClasses:I}=st(e),{dimensionStyles:O}=ot(e),{elevationClasses:R}=Te(e),{roundedClasses:D}=Ae(_),j=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),K=v(()=>({isActive:C.value,select:s,isSelected:p.value,isIndeterminate:g.value}));function ue(x){var A;n("click",x),!(m||!S.value)&&((A=a.navigate)==null||A.call(a,x),e.value!=null&&s(!p.value,x))}function Q(x){(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),ue(x))}return H(()=>{const x=V.value?"a":e.tag,A=l.title||e.title,ee=l.subtitle||e.subtitle,q=!!(e.appendAvatar||e.appendIcon),z=!!(q||l.append),Y=!!(e.prependAvatar||e.prependIcon),re=!!(Y||l.prepend);return f==null||f.updateHasPrepend(re),e.activeColor&&At("active-color",["color","base-color"]),Qe(d(x,{class:["v-list-item",{"v-list-item--active":C.value,"v-list-item--disabled":e.disabled,"v-list-item--link":S.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!re&&(f==null?void 0:f.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&C.value},k.value,y.value,b.value,I.value,R.value,j.value,D.value,w.value,e.class],style:[h.value,O.value,e.style],href:a.href.value,tabindex:S.value?f?-2:0:void 0,onClick:ue,onKeydown:S.value&&!V.value&&Q},{default:()=>{var ce;return[Xt(S.value||C.value,"v-list-item"),re&&d("div",{key:"prepend",class:"v-list-item__prepend"},[l.prepend?d(ne,{key:"prepend-defaults",disabled:!Y,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var T;return[(T=l.prepend)==null?void 0:T.call(l,K.value)]}}):d(ge,null,[e.prependAvatar&&d(We,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(Ne,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[A&&d(Ca,{key:"title"},{default:()=>{var T;return[((T=l.title)==null?void 0:T.call(l,{title:e.title}))??e.title]}}),ee&&d(Va,{key:"subtitle"},{default:()=>{var T;return[((T=l.subtitle)==null?void 0:T.call(l,{subtitle:e.subtitle}))??e.subtitle]}}),(ce=l.default)==null?void 0:ce.call(l,K.value)]),z&&d("div",{key:"append",class:"v-list-item__append"},[l.append?d(ne,{key:"append-defaults",disabled:!q,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var T;return[(T=l.append)==null?void 0:T.call(l,K.value)]}}):d(ge,null,[e.appendIcon&&d(Ne,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(We,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[Lt("ripple"),S.value&&e.ripple]])}),{}}}),_a=E({color:String,inset:Boolean,sticky:Boolean,title:String,...X(),...U()},"VListSubheader"),xa=N()({name:"VListSubheader",props:_a(),setup(e,o){let{slots:t}=o;const{textColorClasses:l,textColorStyles:n}=qt(M(e,"color"));return H(()=>{const a=!!(t.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},l.value,e.class],style:[{textColorStyles:n},e.style]},{default:()=>{var i;return[a&&d("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Ba=E({items:Array,returnObject:Boolean},"VListChildren"),St=N()({name:"VListChildren",props:Ba(),setup(e,o){let{slots:t}=o;return ft(),()=>{var l,n;return((l=t.default)==null?void 0:l.call(t))??((n=e.items)==null?void 0:n.map(a=>{var c,f;let{children:i,props:s,type:p,raw:g}=a;if(p==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:s}))??d(Qt,s,null);if(p==="subheader")return((f=t.subheader)==null?void 0:f.call(t,{props:s}))??d(xa,s,null);const m={subtitle:t.subtitle?C=>{var V;return(V=t.subtitle)==null?void 0:V.call(t,{...C,item:g})}:void 0,prepend:t.prepend?C=>{var V;return(V=t.prepend)==null?void 0:V.call(t,{...C,item:g})}:void 0,append:t.append?C=>{var V;return(V=t.append)==null?void 0:V.call(t,{...C,item:g})}:void 0,title:t.title?C=>{var V;return(V=t.title)==null?void 0:V.call(t,{...C,item:g})}:void 0},[u,r]=Ue.filterProps(s);return i?d(Ue,le({value:s==null?void 0:s.value},u),{activator:C=>{let{props:V}=C;const S={...s,...V,value:e.returnObject?g:s.value};return t.header?t.header({props:S}):d(fe,S,m)},default:()=>d(St,{items:i},t)}):t.item?t.item({props:s}):d(fe,le(s,{value:e.returnObject?g:s.value}),m)}))}}}),Ta=E({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Pt}},"list-items");function Aa(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function La(e,o){const t=ve(o,e.itemType,"item"),l=Aa(o)?o:ve(o,e.itemTitle),n=ve(o,e.itemValue,void 0),a=ve(o,e.itemChildren),i=e.itemProps===!0?Et(o,["children"])[1]:ve(o,e.itemProps),s={title:l,value:n,...i};return{type:t,title:s.title,value:s.value,props:s,children:t==="item"&&a?wt(e,a):void 0,raw:o}}function wt(e,o){const t=[];for(const l of o)t.push(La(e,l));return t}function Pa(e){return{items:v(()=>wt(e,e.items))}}const Ma=E({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...pa({selectStrategy:"single-leaf",openStrategy:"list"}),...Ie(),...X(),...it(),...lt(),...xe(),itemType:{type:String,default:"type"},...Ta(),...Be(),...U(),...pe(),...nt({variant:"text"})},"VList"),Ea=N()({name:"VList",props:Ma(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,o){let{slots:t}=o;const{items:l}=Pa(e),{themeClasses:n}=be(e),{backgroundColorClasses:a,backgroundColorStyles:i}=ke(M(e,"bgColor")),{borderClasses:s}=_e(e),{densityClasses:p}=st(e),{dimensionStyles:g}=ot(e),{elevationClasses:m}=Te(e),{roundedClasses:u}=Ae(e),{open:r,select:c}=ba(e),f=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),C=M(e,"activeColor"),V=M(e,"baseColor"),S=M(e,"color");ft(),De({VListGroup:{activeColor:C,baseColor:V,color:S},VListItem:{activeClass:M(e,"activeClass"),activeColor:C,baseColor:V,color:S,density:M(e,"density"),disabled:M(e,"disabled"),lines:M(e,"lines"),nav:M(e,"nav"),variant:M(e,"variant")}});const _=L(!1),B=$();function P(w){_.value=!0}function k(w){_.value=!1}function y(w){var I;!_.value&&!(w.relatedTarget&&((I=B.value)!=null&&I.contains(w.relatedTarget)))&&h()}function b(w){if(B.value){if(w.key==="ArrowDown")h("next");else if(w.key==="ArrowUp")h("prev");else if(w.key==="Home")h("first");else if(w.key==="End")h("last");else return;w.preventDefault()}}function h(w){if(B.value)return Mt(B.value,w)}return H(()=>d(e.tag,{ref:B,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},n.value,a.value,s.value,p.value,m.value,f.value,u.value,e.class],style:[i.value,g.value,e.style],tabindex:e.disabled||_.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:P,onFocusout:k,onFocus:y,onKeydown:b},{default:()=>[d(St,{items:l.value,returnObject:e.returnObject},t)]})),{open:r,select:c,focus:h}}});function Oa(e){let{rootEl:o,isSticky:t,layoutItemStyles:l}=e;const n=L(!1),a=L(0),i=v(()=>{const g=typeof n.value=="boolean"?"top":n.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[g]:W(a.value)}:{top:l.value.top}]});he(()=>{F(t,g=>{g?window.addEventListener("scroll",p,{passive:!0}):window.removeEventListener("scroll",p)},{immediate:!0})}),ie(()=>{window.removeEventListener("scroll",p)});let s=0;function p(){const g=s>window.scrollY?"up":"down",m=o.value.getBoundingClientRect(),u=parseFloat(l.value.top??0),r=window.scrollY-Math.max(0,a.value-u),c=m.height+Math.max(a.value,u)-window.scrollY-window.innerHeight,f=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;m.height<window.innerHeight-u?(n.value="top",a.value=u):g==="up"&&n.value==="bottom"||g==="down"&&n.value==="top"?(a.value=window.scrollY+m.top-f,n.value=!0):g==="down"&&c<=0?(a.value=0,n.value="bottom"):g==="up"&&r<=0&&(f?n.value!=="top"&&(a.value=-r+f+u,n.value="top"):(a.value=m.top+r,n.value="top")),s=window.scrollY}return{isStuck:n,stickyStyles:i}}const $a=100,Na=20;function qe(e){const o=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*o}function Ze(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const l=qe(o),n=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);o+=(n-l)*Math.abs(n),t===e.length-1&&(o*=.5)}return qe(o)*1e3}function Ra(){const e={};function o(n){Array.from(n.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new Ot(Na))).push([n.timeStamp,a])})}function t(n){Array.from(n.changedTouches).forEach(a=>{delete e[a.identifier]})}function l(n){var g;const a=(g=e[n])==null?void 0:g.values().reverse();if(!a)throw new Error(`No samples for touch id ${n}`);const i=a[0],s=[],p=[];for(const m of a){if(i[0]-m[0]>$a)break;s.push({t:m[0],d:m[1].clientX}),p.push({t:m[0],d:m[1].clientY})}return{x:Ze(s),y:Ze(p),get direction(){const{x:m,y:u}=this,[r,c]=[Math.abs(m),Math.abs(u)];return r>c&&m>=0?"right":r>c&&m<=0?"left":c>r&&u>=0?"down":c>r&&u<=0?"up":Ha()}}}return{addMovement:o,endTouch:t,getVelocity:l}}function Ha(){throw new Error}function Da(e){let{isActive:o,isTemporary:t,width:l,touchless:n,position:a}=e;he(()=>{window.addEventListener("touchstart",S,{passive:!0}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",B,{passive:!0})}),ie(()=>{window.removeEventListener("touchstart",S),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",B)});const i=v(()=>["left","right"].includes(a.value)),{addMovement:s,endTouch:p,getVelocity:g}=Ra();let m=!1;const u=L(!1),r=L(0),c=L(0);let f;function C(k,y){return(a.value==="left"?k:a.value==="right"?document.documentElement.clientWidth-k:a.value==="top"?k:a.value==="bottom"?document.documentElement.clientHeight-k:te())-(y?l.value:0)}function V(k){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const b=a.value==="left"?(k-c.value)/l.value:a.value==="right"?(document.documentElement.clientWidth-k-c.value)/l.value:a.value==="top"?(k-c.value)/l.value:a.value==="bottom"?(document.documentElement.clientHeight-k-c.value)/l.value:te();return y?Math.max(0,Math.min(1,b)):b}function S(k){if(n.value)return;const y=k.changedTouches[0].clientX,b=k.changedTouches[0].clientY,h=25,w=a.value==="left"?y<h:a.value==="right"?y>document.documentElement.clientWidth-h:a.value==="top"?b<h:a.value==="bottom"?b>document.documentElement.clientHeight-h:te(),I=o.value&&(a.value==="left"?y<l.value:a.value==="right"?y>document.documentElement.clientWidth-l.value:a.value==="top"?b<l.value:a.value==="bottom"?b>document.documentElement.clientHeight-l.value:te());(w||I||o.value&&t.value)&&(m=!0,f=[y,b],c.value=C(i.value?y:b,o.value),r.value=V(i.value?y:b),p(k),s(k))}function _(k){const y=k.changedTouches[0].clientX,b=k.changedTouches[0].clientY;if(m){if(!k.cancelable){m=!1;return}const w=Math.abs(y-f[0]),I=Math.abs(b-f[1]);(i.value?w>I&&w>3:I>w&&I>3)?(u.value=!0,m=!1):(i.value?I:w)>3&&(m=!1)}if(!u.value)return;k.preventDefault(),s(k);const h=V(i.value?y:b,!1);r.value=Math.max(0,Math.min(1,h)),h>1?c.value=C(i.value?y:b,!0):h<0&&(c.value=C(i.value?y:b,!1))}function B(k){if(m=!1,!u.value)return;s(k),u.value=!1;const y=g(k.changedTouches[0].identifier),b=Math.abs(y.x),h=Math.abs(y.y);(i.value?b>h&&b>400:h>b&&h>3)?o.value=y.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||te()):o.value=r.value>.5}const P=v(()=>u.value?{transform:a.value==="left"?`translateX(calc(-100% + ${r.value*l.value}px))`:a.value==="right"?`translateX(calc(100% - ${r.value*l.value}px))`:a.value==="top"?`translateY(calc(-100% + ${r.value*l.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${r.value*l.value}px))`:te(),transition:"none"}:void 0);return{isDragging:u,dragProgress:r,dragStyles:P}}function te(){throw new Error}function za(){const o=Ce("useScopeId").vnode.scopeId;return{scopeId:o?{[o]:""}:void 0}}const Fa=["start","end","left","right","top","bottom"],ja=E({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Fa.includes(e)},sticky:Boolean,...Ie(),...X(),...xe(),...dt(),...Be(),...U({tag:"nav"}),...pe()},"VNavigationDrawer"),Ya=N()({name:"VNavigationDrawer",props:ja(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:t,emit:l,slots:n}=o;const{isRtl:a}=He(),{themeClasses:i}=be(e),{borderClasses:s}=_e(e),{backgroundColorClasses:p,backgroundColorStyles:g}=ke(M(e,"color")),{elevationClasses:m}=Te(e),{mobile:u}=et(),{roundedClasses:r}=Ae(e),c=Kt(),f=we(e,"modelValue",null,A=>!!A),{ssrBootStyles:C}=Le(),{scopeId:V}=za(),S=$(),_=L(!1),B=v(()=>e.rail&&e.expandOnHover&&_.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),P=v(()=>Ut(e.location,a.value)),k=v(()=>!e.permanent&&(u.value||e.temporary)),y=v(()=>e.sticky&&!k.value&&P.value!=="bottom");Se(()=>e.expandOnHover&&e.rail!=null,()=>{F(_,A=>l("update:rail",!A))}),Se(()=>!e.disableResizeWatcher,()=>{F(k,A=>!e.permanent&&Rt(()=>f.value=!A))}),Se(()=>!e.disableRouteWatcher&&!!c,()=>{F(c.currentRoute,()=>k.value&&(f.value=!1))}),F(()=>e.permanent,A=>{A&&(f.value=!0)}),$t(()=>{e.modelValue!=null||k.value||(f.value=e.permanent||!u.value)});const{isDragging:b,dragProgress:h,dragStyles:w}=Da({isActive:f,isTemporary:k,width:B,touchless:M(e,"touchless"),position:P}),I=v(()=>{const A=k.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):B.value;return b.value?A*h.value:A}),{layoutItemStyles:O,layoutItemScrimStyles:R}=vt({id:e.name,order:v(()=>parseInt(e.order,10)),position:P,layoutSize:I,elementSize:B,active:v(()=>f.value||b.value),disableTransitions:v(()=>b.value),absolute:v(()=>e.absolute||y.value&&typeof D.value!="string")}),{isStuck:D,stickyStyles:j}=Oa({rootEl:S,isSticky:y,layoutItemStyles:O}),K=ke(v(()=>typeof e.scrim=="string"?e.scrim:null)),ue=v(()=>({...b.value?{opacity:h.value*.2,transition:"none"}:void 0,...R.value}));De({VList:{bgColor:"transparent"}});function Q(){_.value=!0}function x(){_.value=!1}return H(()=>{const A=n.image||e.image;return d(ge,null,[d(e.tag,le({ref:S,onMouseenter:Q,onMouseleave:x,class:["v-navigation-drawer",`v-navigation-drawer--${P.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":_.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":k.value,"v-navigation-drawer--active":f.value,"v-navigation-drawer--sticky":y.value},i.value,p.value,s.value,m.value,r.value,e.class],style:[g.value,O.value,w.value,C.value,j.value,e.style]},V,t),{default:()=>{var ee,q,z,Y;return[A&&d("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?(ee=n.image)==null?void 0:ee.call(n,{image:e.image}):d("img",{src:e.image,alt:""},null)]),n.prepend&&d("div",{class:"v-navigation-drawer__prepend"},[(q=n.prepend)==null?void 0:q.call(n)]),d("div",{class:"v-navigation-drawer__content"},[(z=n.default)==null?void 0:z.call(n)]),n.append&&d("div",{class:"v-navigation-drawer__append"},[(Y=n.append)==null?void 0:Y.call(n)])]}}),d(Nt,{name:"fade-transition"},{default:()=>[k.value&&(b.value||f.value)&&!!e.scrim&&d("div",le({class:["v-navigation-drawer__scrim",K.backgroundColorClasses.value],style:[ue.value,K.backgroundColorStyles.value],onClick:()=>f.value=!1},V),null)]})])}),{isStuck:D}}}),Ga={class:"headerbuttons h-100"},Wa={class:"d-flex h-100"},Xa={class:"dropdown"},Ka={name:"AppBar",data(){return{temporaryVar:!1,sidebar:!1,sections:[{name:"Home",link:"/homepage/#home",icon:"mdi-home"},{name:"Technical projects",link:"/homepage/#technicalprojects",icon:"mdi-wrench"},{name:"Just-for-fun projects",link:"/homepage/#funprojects",icon:"mdi-star"},{name:"Code sample",link:"/codesample",icon:"mdi-code-braces"},{name:"Education",link:"/cv/#education",icon:"mdi-school"},{name:"Experience",link:"/cv/#experience",icon:"mdi-briefcase"},{name:"Certificates",link:"/cv/#certificates",icon:"mdi-certificate"}]}}},Ua=Object.assign(Ka,{setup(e){et();const o=tt(),t=Ee();function l(){o.darkmode=t.global.current.value.dark?"light":"dark",t.global.name.value=o.darkmode}return(n,a)=>{const i=at("v-div");return Z(),me(i,null,{default:G(()=>[d(Ya,{style:Oe({background:n.$vuetify.theme.current.colors.header}),temporary:"",modelValue:n.sidebar,"onUpdate:modelValue":a[1]||(a[1]=s=>n.sidebar=s),app:"",location:"right"},{default:G(()=>[d(Ea,null,{default:G(()=>[d(fe,{key:"drawer",onClick:a[0]||(a[0]=s=>n.sidebar=!1),"base-color":"headertext","prepend-icon":"$menu"}),(Z(!0),je(ge,null,Ye(n.sections,s=>(Z(),me(fe,{key:s.name,"base-color":"headertext",to:s.link,title:s.name,"prepend-icon":s.icon},null,8,["to","title","prepend-icon"]))),128))]),_:1})]),_:1},8,["style","modelValue"]),d(ca,{style:Oe({background:n.$vuetify.theme.current.colors.header}),"scroll-behavior":"hide","scroll-threshold":"10"},{append:G(()=>[Me("div",Ga,[Me("div",Wa,[(Z(!0),je(ge,null,Ye(n.sections,s=>(Z(),me(fe,{key:s.name,class:"headerbutton pl-3 pr-4","base-color":"headertext",to:s.link},{default:G(()=>[d(Ne,{icon:s.icon,class:"mr-1",color:"grey-lighten-1"},null,8,["icon"]),Ge(" "+Dt(s.name),1)]),_:2},1032,["to"]))),128))])]),d($e,{onClick:l,icon:"mdi-brightness-6",class:"ml-2",color:"headertext"}),Me("span",Xa,[d(va,{onClick:a[2]||(a[2]=s=>n.sidebar=!n.sidebar),color:"headertext"})])]),default:G(()=>[d($e,{class:"px-5 ml-0 h-100",href:"/",color:"headertext"},{default:G(()=>[Ge(" Oscar Fickel ")]),_:1})]),_:1},8,["style"])]),_:1})}}}),qa=Ht(Ua,[["__scopeId","data-v-b12ae4ae"]]);const Za=E({scrollable:Boolean,...X(),...U({tag:"main"})},"VMain"),Ja=N()({name:"VMain",props:Za(),setup(e,o){let{slots:t}=o;const{mainStyles:l}=ta(),{ssrBootStyles:n}=Le();return H(()=>d(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,n.value,e.style]},{default:()=>{var a,i;return[e.scrollable?d("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),Qa={__name:"View",setup(e){return(o,t)=>{const l=at("router-view");return Z(),me(Ja,null,{default:G(()=>[d(l)]),_:1})}}};const en=E({...X(),...ea({fullHeight:!0}),...pe()},"VApp"),tn=N()({name:"VApp",props:en(),setup(e,o){let{slots:t}=o;const l=be(e),{layoutClasses:n,getLayoutItem:a,items:i,layoutRef:s}=na(e),{rtlClasses:p}=He();return H(()=>{var g;return d("div",{ref:s,class:["v-application",l.themeClasses.value,n.value,p.value,e.class],style:[e.style]},[d("div",{class:"v-application__wrap"},[(g=t.default)==null?void 0:g.call(t)])])}),{getLayoutItem:a,items:i,theme:l}}}),an={beforeMount(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme)").media!=="not all"){const e=tt();e.darkmode!="light"&&(e.darkmode=="dark"?Ee().global.name.value="dark":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(Ee().global.name.value="dark",e.darkmode="dark"))}}},dn=Object.assign(an,{__name:"Default",setup(e){return(o,t)=>(Z(),me(tn,null,{default:G(()=>[d(qa),d(Qa,{style:Oe({color:o.$vuetify.theme.current.colors.bodytext})},null,8,["style"])]),_:1}))}});export{dn as default};
