import{m,j as k,e as A,N as B,a as L,n as $,p,q as z,i as E,O as I,b as x,t as D,s as N,v as O}from"./VBtn-4def1b11.js";import{n as v,af as R,ag as b,ah as g,ai as q,T as V,p as h,I as F,u as C,w as _,q as y,v as H,c as W,f as S}from"./index-878dffce.js";import{V as G}from"./VImg-d8bdf073.js";function Q(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",i=arguments.length>2?arguments[2]:void 0;return v()({name:i??R(b(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...m()},setup(a,r){let{slots:s}=r;return()=>{var t;return g(a.tag,{class:[e,a.class],style:a.style},(t=s.default)==null?void 0:t.call(s))}}})}const j=h({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function o(e,l,i){return v()({name:e,props:j({mode:i,origin:l}),setup(a,r){let{slots:s}=r;const t={onBeforeEnter(n){a.origin&&(n.style.transformOrigin=a.origin)},onLeave(n){if(a.leaveAbsolute){const{offsetTop:d,offsetLeft:c,offsetWidth:f,offsetHeight:u}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${d}px`,n.style.left=`${c}px`,n.style.width=`${f}px`,n.style.height=`${u}px`}a.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(a.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:d,top:c,left:f,width:u,height:P}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=d||"",n.style.top=c||"",n.style.left=f||"",n.style.width=u||"",n.style.height=P||""}}};return()=>{const n=a.group?q:V;return g(n,{name:a.disabled?"":e,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:t},s.default)}}})}function T(e,l){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return v()({name:e,props:{mode:{type:String,default:i},disabled:Boolean},setup(a,r){let{slots:s}=r;return()=>g(V,{name:a.disabled?"":e,css:!a.disabled,...a.disabled?{}:l},s.default)}})}function w(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",a=b(`offset-${i}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},onEnter(t){const n=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const d=`${t[a]}px`;t.style[i]="0",t.offsetHeight,t.style.transition=n.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[i]=d})},onAfterEnter:s,onEnterCancelled:s,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[a]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(t){const n=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,n!=null&&(t.style[i]=n),delete t._initialStyle}}o("fab-transition","center center","out-in");o("dialog-bottom-transition");o("dialog-top-transition");o("fade-transition");o("scale-transition");o("scroll-x-transition");o("scroll-x-reverse-transition");o("scroll-y-transition");o("scroll-y-reverse-transition");o("slide-x-transition");o("slide-x-reverse-transition");o("slide-y-transition");o("slide-y-reverse-transition");const Y=T("expand-transition",w()),Z=T("expand-x-transition",w("",!0));const J=h({start:Boolean,end:Boolean,icon:F,image:String,...m(),...k(),...A(),...B(),...L(),...C(),...$({variant:"flat"})},"VAvatar"),tt=v()({name:"VAvatar",props:J(),setup(e,l){let{slots:i}=l;const{themeClasses:a}=_(e),{colorClasses:r,colorStyles:s,variantClasses:t}=p(e),{densityClasses:n}=z(e),{roundedClasses:d}=E(e),{sizeClasses:c,sizeStyles:f}=I(e);return x(()=>y(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,r.value,n.value,d.value,c.value,t.value,e.class],style:[s.value,f.value,e.style]},{default:()=>{var u;return[e.image?y(G,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?y(D,{key:"icon",icon:e.icon},null):(u=i.default)==null?void 0:u.call(i),N(!1,"v-avatar")]}})),{}}});const U=h({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...m(),...C()},"VDivider"),et=v()({name:"VDivider",props:U(),setup(e,l){let{attrs:i}=l;const{themeClasses:a}=_(e),{textColorClasses:r,textColorStyles:s}=O(H(e,"color")),t=W(()=>{const n={};return e.length&&(n[e.vertical?"maxHeight":"maxWidth"]=S(e.length)),e.thickness&&(n[e.vertical?"borderRightWidth":"borderTopWidth"]=S(e.thickness)),n});return x(()=>y("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,r.value,e.class],style:[t.value,s.value,e.style],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null)),{}}});export{Y as V,tt as a,et as b,Q as c,Z as d};