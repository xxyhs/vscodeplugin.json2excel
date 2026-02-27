(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();function Lo(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const fe={},Ei=[],It=()=>{},il=()=>!1,bn=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Fo=i=>i.startsWith("onUpdate:"),Re=Object.assign,Mo=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},ld=Object.prototype.hasOwnProperty,le=(i,e)=>ld.call(i,e),G=Array.isArray,Ai=i=>Ds(i)==="[object Map]",sl=i=>Ds(i)==="[object Set]",Cr=i=>Ds(i)==="[object Date]",J=i=>typeof i=="function",ke=i=>typeof i=="string",Rt=i=>typeof i=="symbol",de=i=>i!==null&&typeof i=="object",nl=i=>(de(i)||J(i))&&J(i.then)&&J(i.catch),ol=Object.prototype.toString,Ds=i=>ol.call(i),cd=i=>Ds(i).slice(8,-1),rl=i=>Ds(i)==="[object Object]",No=i=>ke(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,as=Lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vn=i=>{const e=Object.create(null);return(t=>e[t]||(e[t]=i(t)))},dd=/-\w/g,Xt=vn(i=>i.replace(dd,e=>e.slice(1).toUpperCase())),ud=/\B([A-Z])/g,mi=vn(i=>i.replace(ud,"-$1").toLowerCase()),al=vn(i=>i.charAt(0).toUpperCase()+i.slice(1)),Fn=vn(i=>i?`on${al(i)}`:""),Qt=(i,e)=>!Object.is(i,e),Qs=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},ll=(i,e,t,s=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Bo=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Sr;const yn=()=>Sr||(Sr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ho(i){if(G(i)){const e={};for(let t=0;t<i.length;t++){const s=i[t],n=ke(s)?gd(s):Ho(s);if(n)for(const o in n)e[o]=n[o]}return e}else if(ke(i)||de(i))return i}const hd=/;(?![^(]*\))/g,fd=/:([^]+)/,pd=/\/\*[^]*?\*\//g;function gd(i){const e={};return i.replace(pd,"").split(hd).forEach(t=>{if(t){const s=t.split(fd);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Vo(i){let e="";if(ke(i))e=i;else if(G(i))for(let t=0;t<i.length;t++){const s=Vo(i[t]);s&&(e+=s+" ")}else if(de(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const md="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bd=Lo(md);function cl(i){return!!i||i===""}function vd(i,e){if(i.length!==e.length)return!1;let t=!0;for(let s=0;t&&s<i.length;s++)t=jo(i[s],e[s]);return t}function jo(i,e){if(i===e)return!0;let t=Cr(i),s=Cr(e);if(t||s)return t&&s?i.getTime()===e.getTime():!1;if(t=Rt(i),s=Rt(e),t||s)return i===e;if(t=G(i),s=G(e),t||s)return t&&s?vd(i,e):!1;if(t=de(i),s=de(e),t||s){if(!t||!s)return!1;const n=Object.keys(i).length,o=Object.keys(e).length;if(n!==o)return!1;for(const r in i){const a=i.hasOwnProperty(r),l=e.hasOwnProperty(r);if(a&&!l||!a&&l||!jo(i[r],e[r]))return!1}}return String(i)===String(e)}const dl=i=>!!(i&&i.__v_isRef===!0),Qe=i=>ke(i)?i:i==null?"":G(i)||de(i)&&(i.toString===ol||!J(i.toString))?dl(i)?Qe(i.value):JSON.stringify(i,ul,2):String(i),ul=(i,e)=>dl(e)?ul(i,e.value):Ai(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,n],o)=>(t[Mn(s,o)+" =>"]=n,t),{})}:sl(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Mn(t))}:Rt(e)?Mn(e):de(e)&&!G(e)&&!rl(e)?String(e):e,Mn=(i,e="")=>{var t;return Rt(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};let Xe;class yd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Xe,!e&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Xe;try{return Xe=this,e()}finally{Xe=t}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){this._on>0&&--this._on===0&&(Xe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function xd(){return Xe}let ge;const Nn=new WeakSet;class hl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&Xe.active&&Xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nn.has(this)&&(Nn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kr(this),gl(this);const e=ge,t=gt;ge=this,gt=!0;try{return this.fn()}finally{ml(this),ge=e,gt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qo(e);this.deps=this.depsTail=void 0,kr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mo(this)&&this.run()}get dirty(){return mo(this)}}let fl=0,ls,cs;function pl(i,e=!1){if(i.flags|=8,e){i.next=cs,cs=i;return}i.next=ls,ls=i}function zo(){fl++}function Uo(){if(--fl>0)return;if(cs){let e=cs;for(cs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;ls;){let e=ls;for(ls=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){i||(i=s)}e=t}}if(i)throw i}function gl(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ml(i){let e,t=i.depsTail,s=t;for(;s;){const n=s.prevDep;s.version===-1?(s===t&&(t=n),qo(s),wd(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}i.deps=e,i.depsTail=t}function mo(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function bl(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===ws)||(i.globalVersion=ws,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!mo(i))))return;i.flags|=2;const e=i.dep,t=ge,s=gt;ge=i,gt=!0;try{gl(i);const n=i.fn(i._value);(e.version===0||Qt(n,i._value))&&(i.flags|=128,i._value=n,e.version++)}catch(n){throw e.version++,n}finally{ge=t,gt=s,ml(i),i.flags&=-3}}function qo(i,e=!1){const{dep:t,prevSub:s,nextSub:n}=i;if(s&&(s.nextSub=n,i.prevSub=void 0),n&&(n.prevSub=s,i.nextSub=void 0),t.subs===i&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)qo(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function wd(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let gt=!0;const vl=[];function Vt(){vl.push(gt),gt=!1}function jt(){const i=vl.pop();gt=i===void 0?!0:i}function kr(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=ge;ge=void 0;try{e()}finally{ge=t}}}let ws=0,$d=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class Wo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ge||!gt||ge===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ge)t=this.activeLink=new $d(ge,this),ge.deps?(t.prevDep=ge.depsTail,ge.depsTail.nextDep=t,ge.depsTail=t):ge.deps=ge.depsTail=t,yl(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=ge.depsTail,t.nextDep=void 0,ge.depsTail.nextDep=t,ge.depsTail=t,ge.deps===t&&(ge.deps=s)}return t}trigger(e){this.version++,ws++,this.notify(e)}notify(e){zo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Uo()}}}function yl(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)yl(s)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const bo=new WeakMap,fi=Symbol(""),vo=Symbol(""),$s=Symbol("");function Ee(i,e,t){if(gt&&ge){let s=bo.get(i);s||bo.set(i,s=new Map);let n=s.get(t);n||(s.set(t,n=new Wo),n.map=s,n.key=t),n.track()}}function Mt(i,e,t,s,n,o){const r=bo.get(i);if(!r){ws++;return}const a=l=>{l&&l.trigger()};if(zo(),e==="clear")r.forEach(a);else{const l=G(i),c=l&&No(t);if(l&&t==="length"){const d=Number(s);r.forEach((u,p)=>{(p==="length"||p===$s||!Rt(p)&&p>=d)&&a(u)})}else switch((t!==void 0||r.has(void 0))&&a(r.get(t)),c&&a(r.get($s)),e){case"add":l?c&&a(r.get("length")):(a(r.get(fi)),Ai(i)&&a(r.get(vo)));break;case"delete":l||(a(r.get(fi)),Ai(i)&&a(r.get(vo)));break;case"set":Ai(i)&&a(r.get(fi));break}}Uo()}function wi(i){const e=ne(i);return e===i?e:(Ee(e,"iterate",$s),dt(i)?e:e.map(mt))}function xn(i){return Ee(i=ne(i),"iterate",$s),i}function Yt(i,e){return zt(i)?Ni(pi(i)?mt(e):e):mt(e)}const Cd={__proto__:null,[Symbol.iterator](){return Bn(this,Symbol.iterator,i=>Yt(this,i))},concat(...i){return wi(this).concat(...i.map(e=>G(e)?wi(e):e))},entries(){return Bn(this,"entries",i=>(i[1]=Yt(this,i[1]),i))},every(i,e){return _t(this,"every",i,e,void 0,arguments)},filter(i,e){return _t(this,"filter",i,e,t=>t.map(s=>Yt(this,s)),arguments)},find(i,e){return _t(this,"find",i,e,t=>Yt(this,t),arguments)},findIndex(i,e){return _t(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return _t(this,"findLast",i,e,t=>Yt(this,t),arguments)},findLastIndex(i,e){return _t(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return _t(this,"forEach",i,e,void 0,arguments)},includes(...i){return Hn(this,"includes",i)},indexOf(...i){return Hn(this,"indexOf",i)},join(i){return wi(this).join(i)},lastIndexOf(...i){return Hn(this,"lastIndexOf",i)},map(i,e){return _t(this,"map",i,e,void 0,arguments)},pop(){return Zi(this,"pop")},push(...i){return Zi(this,"push",i)},reduce(i,...e){return Tr(this,"reduce",i,e)},reduceRight(i,...e){return Tr(this,"reduceRight",i,e)},shift(){return Zi(this,"shift")},some(i,e){return _t(this,"some",i,e,void 0,arguments)},splice(...i){return Zi(this,"splice",i)},toReversed(){return wi(this).toReversed()},toSorted(i){return wi(this).toSorted(i)},toSpliced(...i){return wi(this).toSpliced(...i)},unshift(...i){return Zi(this,"unshift",i)},values(){return Bn(this,"values",i=>Yt(this,i))}};function Bn(i,e,t){const s=xn(i),n=s[e]();return s!==i&&!dt(i)&&(n._next=n.next,n.next=()=>{const o=n._next();return o.done||(o.value=t(o.value)),o}),n}const Sd=Array.prototype;function _t(i,e,t,s,n,o){const r=xn(i),a=r!==i&&!dt(i),l=r[e];if(l!==Sd[e]){const u=l.apply(i,o);return a?mt(u):u}let c=t;r!==i&&(a?c=function(u,p){return t.call(this,Yt(i,u),p,i)}:t.length>2&&(c=function(u,p){return t.call(this,u,p,i)}));const d=l.call(r,c,s);return a&&n?n(d):d}function Tr(i,e,t,s){const n=xn(i);let o=t;return n!==i&&(dt(i)?t.length>3&&(o=function(r,a,l){return t.call(this,r,a,l,i)}):o=function(r,a,l){return t.call(this,r,Yt(i,a),l,i)}),n[e](o,...s)}function Hn(i,e,t){const s=ne(i);Ee(s,"iterate",$s);const n=s[e](...t);return(n===-1||n===!1)&&Jo(t[0])?(t[0]=ne(t[0]),s[e](...t)):n}function Zi(i,e,t=[]){Vt(),zo();const s=ne(i)[e].apply(i,t);return Uo(),jt(),s}const kd=Lo("__proto__,__v_isRef,__isVue"),xl=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Rt));function Td(i){Rt(i)||(i=String(i));const e=ne(this);return Ee(e,"has",i),e.hasOwnProperty(i)}class wl{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const n=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!n;if(t==="__v_isReadonly")return n;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(n?o?Fd:kl:o?Sl:Cl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=G(e);if(!n){let l;if(r&&(l=Cd[t]))return l;if(t==="hasOwnProperty")return Td}const a=Reflect.get(e,t,Ae(e)?e:s);if((Rt(t)?xl.has(t):kd(t))||(n||Ee(e,"get",t),o))return a;if(Ae(a)){const l=r&&No(t)?a:a.value;return n&&de(l)?xo(l):l}return de(a)?n?xo(a):wn(a):a}}class $l extends wl{constructor(e=!1){super(!1,e)}set(e,t,s,n){let o=e[t];const r=G(e)&&No(t);if(!this._isShallow){const c=zt(o);if(!dt(s)&&!zt(s)&&(o=ne(o),s=ne(s)),!r&&Ae(o)&&!Ae(s))return c||(o.value=s),!0}const a=r?Number(t)<e.length:le(e,t),l=Reflect.set(e,t,s,Ae(e)?e:n);return e===ne(n)&&(a?Qt(s,o)&&Mt(e,"set",t,s):Mt(e,"add",t,s)),l}deleteProperty(e,t){const s=le(e,t);e[t];const n=Reflect.deleteProperty(e,t);return n&&s&&Mt(e,"delete",t,void 0),n}has(e,t){const s=Reflect.has(e,t);return(!Rt(t)||!xl.has(t))&&Ee(e,"has",t),s}ownKeys(e){return Ee(e,"iterate",G(e)?"length":fi),Reflect.ownKeys(e)}}class Od extends wl{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Id=new $l,Rd=new Od,Ed=new $l(!0);const yo=i=>i,Hs=i=>Reflect.getPrototypeOf(i);function Ad(i,e,t){return function(...s){const n=this.__v_raw,o=ne(n),r=Ai(o),a=i==="entries"||i===Symbol.iterator&&r,l=i==="keys"&&r,c=n[i](...s),d=t?yo:e?Ni:mt;return!e&&Ee(o,"iterate",l?vo:fi),Re(Object.create(c),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:a?[d(u[0]),d(u[1])]:d(u),done:p}}})}}function Vs(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Dd(i,e){const t={get(n){const o=this.__v_raw,r=ne(o),a=ne(n);i||(Qt(n,a)&&Ee(r,"get",n),Ee(r,"get",a));const{has:l}=Hs(r),c=e?yo:i?Ni:mt;if(l.call(r,n))return c(o.get(n));if(l.call(r,a))return c(o.get(a));o!==r&&o.get(n)},get size(){const n=this.__v_raw;return!i&&Ee(ne(n),"iterate",fi),n.size},has(n){const o=this.__v_raw,r=ne(o),a=ne(n);return i||(Qt(n,a)&&Ee(r,"has",n),Ee(r,"has",a)),n===a?o.has(n):o.has(n)||o.has(a)},forEach(n,o){const r=this,a=r.__v_raw,l=ne(a),c=e?yo:i?Ni:mt;return!i&&Ee(l,"iterate",fi),a.forEach((d,u)=>n.call(o,c(d),c(u),r))}};return Re(t,i?{add:Vs("add"),set:Vs("set"),delete:Vs("delete"),clear:Vs("clear")}:{add(n){!e&&!dt(n)&&!zt(n)&&(n=ne(n));const o=ne(this);return Hs(o).has.call(o,n)||(o.add(n),Mt(o,"add",n,n)),this},set(n,o){!e&&!dt(o)&&!zt(o)&&(o=ne(o));const r=ne(this),{has:a,get:l}=Hs(r);let c=a.call(r,n);c||(n=ne(n),c=a.call(r,n));const d=l.call(r,n);return r.set(n,o),c?Qt(o,d)&&Mt(r,"set",n,o):Mt(r,"add",n,o),this},delete(n){const o=ne(this),{has:r,get:a}=Hs(o);let l=r.call(o,n);l||(n=ne(n),l=r.call(o,n)),a&&a.call(o,n);const c=o.delete(n);return l&&Mt(o,"delete",n,void 0),c},clear(){const n=ne(this),o=n.size!==0,r=n.clear();return o&&Mt(n,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(n=>{t[n]=Ad(n,i,e)}),t}function Go(i,e){const t=Dd(i,e);return(s,n,o)=>n==="__v_isReactive"?!i:n==="__v_isReadonly"?i:n==="__v_raw"?s:Reflect.get(le(t,n)&&n in s?t:s,n,o)}const _d={get:Go(!1,!1)},Pd={get:Go(!1,!0)},Ld={get:Go(!0,!1)};const Cl=new WeakMap,Sl=new WeakMap,kl=new WeakMap,Fd=new WeakMap;function Md(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nd(i){return i.__v_skip||!Object.isExtensible(i)?0:Md(cd(i))}function wn(i){return zt(i)?i:Yo(i,!1,Id,_d,Cl)}function Bd(i){return Yo(i,!1,Ed,Pd,Sl)}function xo(i){return Yo(i,!0,Rd,Ld,kl)}function Yo(i,e,t,s,n){if(!de(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const o=Nd(i);if(o===0)return i;const r=n.get(i);if(r)return r;const a=new Proxy(i,o===2?s:t);return n.set(i,a),a}function pi(i){return zt(i)?pi(i.__v_raw):!!(i&&i.__v_isReactive)}function zt(i){return!!(i&&i.__v_isReadonly)}function dt(i){return!!(i&&i.__v_isShallow)}function Jo(i){return i?!!i.__v_raw:!1}function ne(i){const e=i&&i.__v_raw;return e?ne(e):i}function Hd(i){return!le(i,"__v_skip")&&Object.isExtensible(i)&&ll(i,"__v_skip",!0),i}const mt=i=>de(i)?wn(i):i,Ni=i=>de(i)?xo(i):i;function Ae(i){return i?i.__v_isRef===!0:!1}function Xi(i){return Tl(i,!1)}function Vd(i){return Tl(i,!0)}function Tl(i,e){return Ae(i)?i:new jd(i,e)}class jd{constructor(e,t){this.dep=new Wo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ne(e),this._value=t?e:mt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||dt(e)||zt(e);e=s?e:ne(e),Qt(e,t)&&(this._rawValue=e,this._value=s?e:mt(e),this.dep.trigger())}}function zd(i){return Ae(i)?i.value:i}const Ud={get:(i,e,t)=>e==="__v_raw"?i:zd(Reflect.get(i,e,t)),set:(i,e,t,s)=>{const n=i[e];return Ae(n)&&!Ae(t)?(n.value=t,!0):Reflect.set(i,e,t,s)}};function Ol(i){return pi(i)?i:new Proxy(i,Ud)}class qd{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Wo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ws-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return pl(this,!0),!0}get value(){const e=this.dep.track();return bl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wd(i,e,t=!1){let s,n;return J(i)?s=i:(s=i.get,n=i.set),new qd(s,n,t)}const js={},nn=new WeakMap;let ci;function Gd(i,e=!1,t=ci){if(t){let s=nn.get(t);s||nn.set(t,s=[]),s.push(i)}}function Yd(i,e,t=fe){const{immediate:s,deep:n,once:o,scheduler:r,augmentJob:a,call:l}=t,c=L=>n?L:dt(L)||n===!1||n===0?Nt(L,1):Nt(L);let d,u,p,m,b=!1,T=!1;if(Ae(i)?(u=()=>i.value,b=dt(i)):pi(i)?(u=()=>c(i),b=!0):G(i)?(T=!0,b=i.some(L=>pi(L)||dt(L)),u=()=>i.map(L=>{if(Ae(L))return L.value;if(pi(L))return c(L);if(J(L))return l?l(L,2):L()})):J(i)?e?u=l?()=>l(i,2):i:u=()=>{if(p){Vt();try{p()}finally{jt()}}const L=ci;ci=d;try{return l?l(i,3,[m]):i(m)}finally{ci=L}}:u=It,e&&n){const L=u,te=n===!0?1/0:n;u=()=>Nt(L(),te)}const V=xd(),Y=()=>{d.stop(),V&&V.active&&Mo(V.effects,d)};if(o&&e){const L=e;e=(...te)=>{L(...te),Y()}}let F=T?new Array(i.length).fill(js):js;const Z=L=>{if(!(!(d.flags&1)||!d.dirty&&!L))if(e){const te=d.run();if(n||b||(T?te.some((ae,Ce)=>Qt(ae,F[Ce])):Qt(te,F))){p&&p();const ae=ci;ci=d;try{const Ce=[te,F===js?void 0:T&&F[0]===js?[]:F,m];F=te,l?l(e,3,Ce):e(...Ce)}finally{ci=ae}}}else d.run()};return a&&a(Z),d=new hl(u),d.scheduler=r?()=>r(Z,!1):Z,m=L=>Gd(L,!1,d),p=d.onStop=()=>{const L=nn.get(d);if(L){if(l)l(L,4);else for(const te of L)te();nn.delete(d)}},e?s?Z(!0):F=d.run():r?r(Z.bind(null,!0),!0):d.run(),Y.pause=d.pause.bind(d),Y.resume=d.resume.bind(d),Y.stop=Y,Y}function Nt(i,e=1/0,t){if(e<=0||!de(i)||i.__v_skip||(t=t||new Map,(t.get(i)||0)>=e))return i;if(t.set(i,e),e--,Ae(i))Nt(i.value,e,t);else if(G(i))for(let s=0;s<i.length;s++)Nt(i[s],e,t);else if(sl(i)||Ai(i))i.forEach(s=>{Nt(s,e,t)});else if(rl(i)){for(const s in i)Nt(i[s],e,t);for(const s of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,s)&&Nt(i[s],e,t)}return i}function _s(i,e,t,s){try{return s?i(...s):i()}catch(n){$n(n,e,t)}}function Et(i,e,t,s){if(J(i)){const n=_s(i,e,t,s);return n&&nl(n)&&n.catch(o=>{$n(o,e,t)}),n}if(G(i)){const n=[];for(let o=0;o<i.length;o++)n.push(Et(i[o],e,t,s));return n}}function $n(i,e,t,s=!0){const n=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||fe;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](i,l,c)===!1)return}a=a.parent}if(o){Vt(),_s(o,null,10,[i,l,c]),jt();return}}Jd(i,t,n,s,r)}function Jd(i,e,t,s=!0,n=!1){if(n)throw i;console.error(i)}const He=[];let kt=-1;const Di=[];let Jt=null,ki=0;const Il=Promise.resolve();let on=null;function Rl(i){const e=on||Il;return i?e.then(this?i.bind(this):i):e}function Qd(i){let e=kt+1,t=He.length;for(;e<t;){const s=e+t>>>1,n=He[s],o=Cs(n);o<i||o===i&&n.flags&2?e=s+1:t=s}return e}function Qo(i){if(!(i.flags&1)){const e=Cs(i),t=He[He.length-1];!t||!(i.flags&2)&&e>=Cs(t)?He.push(i):He.splice(Qd(e),0,i),i.flags|=1,El()}}function El(){on||(on=Il.then(Dl))}function Zd(i){G(i)?Di.push(...i):Jt&&i.id===-1?Jt.splice(ki+1,0,i):i.flags&1||(Di.push(i),i.flags|=1),El()}function Or(i,e,t=kt+1){for(;t<He.length;t++){const s=He[t];if(s&&s.flags&2){if(i&&s.id!==i.uid)continue;He.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Al(i){if(Di.length){const e=[...new Set(Di)].sort((t,s)=>Cs(t)-Cs(s));if(Di.length=0,Jt){Jt.push(...e);return}for(Jt=e,ki=0;ki<Jt.length;ki++){const t=Jt[ki];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Jt=null,ki=0}}const Cs=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Dl(i){try{for(kt=0;kt<He.length;kt++){const e=He[kt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_s(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kt<He.length;kt++){const e=He[kt];e&&(e.flags&=-2)}kt=-1,He.length=0,Al(),on=null,(He.length||Di.length)&&Dl()}}let ct=null,_l=null;function rn(i){const e=ct;return ct=i,_l=i&&i.type.__scopeId||null,e}function Xd(i,e=ct,t){if(!e||i._n)return i;const s=(...n)=>{s._d&&Br(-1);const o=rn(e);let r;try{r=i(...n)}finally{rn(o),s._d&&Br(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Vn(i,e){if(ct===null)return i;const t=Tn(ct),s=i.dirs||(i.dirs=[]);for(let n=0;n<e.length;n++){let[o,r,a,l=fe]=e[n];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&Nt(r),s.push({dir:o,instance:t,value:r,oldValue:void 0,arg:a,modifiers:l}))}return i}function oi(i,e,t,s){const n=i.dirs,o=e&&e.dirs;for(let r=0;r<n.length;r++){const a=n[r];o&&(a.oldValue=o[r].value);let l=a.dir[s];l&&(Vt(),Et(l,t,8,[i.el,a,i,e]),jt())}}function Kd(i,e){if(je){let t=je.provides;const s=je.parent&&je.parent.provides;s===t&&(t=je.provides=Object.create(s)),t[i]=e}}function ds(i,e,t=!1){const s=ih();if(s||_i){let n=_i?_i._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&i in n)return n[i];if(arguments.length>1)return t&&J(e)?e.call(s&&s.proxy):e}}const eu=Symbol.for("v-scx"),tu=()=>ds(eu);function iu(i,e){return Zo(i,null,e)}function jn(i,e,t){return Zo(i,e,t)}function Zo(i,e,t=fe){const{immediate:s,deep:n,flush:o,once:r}=t,a=Re({},t),l=e&&s||!e&&o!=="post";let c;if(ks){if(o==="sync"){const m=tu();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=It,m.resume=It,m.pause=It,m}}const d=je;a.call=(m,b,T)=>Et(m,d,b,T);let u=!1;o==="post"?a.scheduler=m=>{Ze(m,d&&d.suspense)}:o!=="sync"&&(u=!0,a.scheduler=(m,b)=>{b?m():Qo(m)}),a.augmentJob=m=>{e&&(m.flags|=4),u&&(m.flags|=2,d&&(m.id=d.uid,m.i=d))};const p=Yd(i,e,a);return ks&&(c?c.push(p):l&&p()),p}function su(i,e,t){const s=this.proxy,n=ke(i)?i.includes(".")?Pl(s,i):()=>s[i]:i.bind(s,s);let o;J(e)?o=e:(o=e.handler,t=e);const r=Ps(this),a=Zo(n,o.bind(s),t);return r(),a}function Pl(i,e){const t=e.split(".");return()=>{let s=i;for(let n=0;n<t.length&&s;n++)s=s[t[n]];return s}}const nu=Symbol("_vte"),ou=i=>i.__isTeleport,ru=Symbol("_leaveCb");function Xo(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Xo(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function au(i,e){return J(i)?Re({name:i.name},e,{setup:i}):i}function Ll(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Ir(i,e){let t;return!!((t=Object.getOwnPropertyDescriptor(i,e))&&!t.configurable)}const an=new WeakMap;function us(i,e,t,s,n=!1){if(G(i)){i.forEach((T,V)=>us(T,e&&(G(e)?e[V]:e),t,s,n));return}if(hs(s)&&!n){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&us(i,e,t,s.component.subTree);return}const o=s.shapeFlag&4?Tn(s.component):s.el,r=n?null:o,{i:a,r:l}=i,c=e&&e.r,d=a.refs===fe?a.refs={}:a.refs,u=a.setupState,p=ne(u),m=u===fe?il:T=>Ir(d,T)?!1:le(p,T),b=(T,V)=>!(V&&Ir(d,V));if(c!=null&&c!==l){if(Rr(e),ke(c))d[c]=null,m(c)&&(u[c]=null);else if(Ae(c)){const T=e;b(c,T.k)&&(c.value=null),T.k&&(d[T.k]=null)}}if(J(l))_s(l,a,12,[r,d]);else{const T=ke(l),V=Ae(l);if(T||V){const Y=()=>{if(i.f){const F=T?m(l)?u[l]:d[l]:b()||!i.k?l.value:d[i.k];if(n)G(F)&&Mo(F,o);else if(G(F))F.includes(o)||F.push(o);else if(T)d[l]=[o],m(l)&&(u[l]=d[l]);else{const Z=[o];b(l,i.k)&&(l.value=Z),i.k&&(d[i.k]=Z)}}else T?(d[l]=r,m(l)&&(u[l]=r)):V&&(b(l,i.k)&&(l.value=r),i.k&&(d[i.k]=r))};if(r){const F=()=>{Y(),an.delete(i)};F.id=-1,an.set(i,F),Ze(F,t)}else Rr(i),Y()}}}function Rr(i){const e=an.get(i);e&&(e.flags|=8,an.delete(i))}yn().requestIdleCallback;yn().cancelIdleCallback;const hs=i=>!!i.type.__asyncLoader,Fl=i=>i.type.__isKeepAlive;function lu(i,e){Ml(i,"a",e)}function cu(i,e){Ml(i,"da",e)}function Ml(i,e,t=je){const s=i.__wdc||(i.__wdc=()=>{let n=t;for(;n;){if(n.isDeactivated)return;n=n.parent}return i()});if(Cn(e,s,t),t){let n=t.parent;for(;n&&n.parent;)Fl(n.parent.vnode)&&du(s,e,t,n),n=n.parent}}function du(i,e,t,s){const n=Cn(e,i,s,!0);Bl(()=>{Mo(s[e],n)},t)}function Cn(i,e,t=je,s=!1){if(t){const n=t[i]||(t[i]=[]),o=e.__weh||(e.__weh=(...r)=>{Vt();const a=Ps(t),l=Et(e,t,i,r);return a(),jt(),l});return s?n.unshift(o):n.push(o),o}}const Ut=i=>(e,t=je)=>{(!ks||i==="sp")&&Cn(i,(...s)=>e(...s),t)},uu=Ut("bm"),Nl=Ut("m"),hu=Ut("bu"),fu=Ut("u"),pu=Ut("bum"),Bl=Ut("um"),gu=Ut("sp"),mu=Ut("rtg"),bu=Ut("rtc");function vu(i,e=je){Cn("ec",i,e)}const yu=Symbol.for("v-ndc");function Er(i,e,t,s){let n;const o=t,r=G(i);if(r||ke(i)){const a=r&&pi(i);let l=!1,c=!1;a&&(l=!dt(i),c=zt(i),i=xn(i)),n=new Array(i.length);for(let d=0,u=i.length;d<u;d++)n[d]=e(l?c?Ni(mt(i[d])):mt(i[d]):i[d],d,void 0,o)}else if(typeof i=="number"){n=new Array(i);for(let a=0;a<i;a++)n[a]=e(a+1,a,void 0,o)}else if(de(i))if(i[Symbol.iterator])n=Array.from(i,(a,l)=>e(a,l,void 0,o));else{const a=Object.keys(i);n=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const d=a[l];n[l]=e(i[d],d,l,o)}}else n=[];return n}const wo=i=>i?rc(i)?Tn(i):wo(i.parent):null,fs=Re(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>wo(i.parent),$root:i=>wo(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Vl(i),$forceUpdate:i=>i.f||(i.f=()=>{Qo(i.update)}),$nextTick:i=>i.n||(i.n=Rl.bind(i.proxy)),$watch:i=>su.bind(i)}),zn=(i,e)=>i!==fe&&!i.__isScriptSetup&&le(i,e),xu={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:n,props:o,accessCache:r,type:a,appContext:l}=i;if(e[0]!=="$"){const p=r[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return n[e];case 4:return t[e];case 3:return o[e]}else{if(zn(s,e))return r[e]=1,s[e];if(n!==fe&&le(n,e))return r[e]=2,n[e];if(le(o,e))return r[e]=3,o[e];if(t!==fe&&le(t,e))return r[e]=4,t[e];$o&&(r[e]=0)}}const c=fs[e];let d,u;if(c)return e==="$attrs"&&Ee(i.attrs,"get",""),c(i);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==fe&&le(t,e))return r[e]=4,t[e];if(u=l.config.globalProperties,le(u,e))return u[e]},set({_:i},e,t){const{data:s,setupState:n,ctx:o}=i;return zn(n,e)?(n[e]=t,!0):s!==fe&&le(s,e)?(s[e]=t,!0):le(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(o[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:s,appContext:n,props:o,type:r}},a){let l;return!!(t[a]||i!==fe&&a[0]!=="$"&&le(i,a)||zn(e,a)||le(o,a)||le(s,a)||le(fs,a)||le(n.config.globalProperties,a)||(l=r.__cssModules)&&l[a])},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:le(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Ar(i){return G(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let $o=!0;function wu(i){const e=Vl(i),t=i.proxy,s=i.ctx;$o=!1,e.beforeCreate&&Dr(e.beforeCreate,i,"bc");const{data:n,computed:o,methods:r,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:m,updated:b,activated:T,deactivated:V,beforeDestroy:Y,beforeUnmount:F,destroyed:Z,unmounted:L,render:te,renderTracked:ae,renderTriggered:Ce,errorCaptured:Ne,serverPrefetch:Te,expose:X,inheritAttrs:ie,components:ft,directives:Oe,filters:M}=e;if(c&&$u(c,s,null),r)for(const O in r){const w=r[O];J(w)&&(s[O]=w.bind(t))}if(n){const O=n.call(t,t);de(O)&&(i.data=wn(O))}if($o=!0,o)for(const O in o){const w=o[O],N=J(w)?w.bind(t,t):J(w.get)?w.get.bind(t,t):It,j=!J(w)&&J(w.set)?w.set.bind(t):It,z=lh({get:N,set:j});Object.defineProperty(s,O,{enumerable:!0,configurable:!0,get:()=>z.value,set:Q=>z.value=Q})}if(a)for(const O in a)Hl(a[O],s,t,O);if(l){const O=J(l)?l.call(t):l;Reflect.ownKeys(O).forEach(w=>{Kd(w,O[w])})}d&&Dr(d,i,"c");function $(O,w){G(w)?w.forEach(N=>O(N.bind(t))):w&&O(w.bind(t))}if($(uu,u),$(Nl,p),$(hu,m),$(fu,b),$(lu,T),$(cu,V),$(vu,Ne),$(bu,ae),$(mu,Ce),$(pu,F),$(Bl,L),$(gu,Te),G(X))if(X.length){const O=i.exposed||(i.exposed={});X.forEach(w=>{Object.defineProperty(O,w,{get:()=>t[w],set:N=>t[w]=N,enumerable:!0})})}else i.exposed||(i.exposed={});te&&i.render===It&&(i.render=te),ie!=null&&(i.inheritAttrs=ie),ft&&(i.components=ft),Oe&&(i.directives=Oe),Te&&Ll(i)}function $u(i,e,t=It){G(i)&&(i=Co(i));for(const s in i){const n=i[s];let o;de(n)?"default"in n?o=ds(n.from||s,n.default,!0):o=ds(n.from||s):o=ds(n),Ae(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[s]=o}}function Dr(i,e,t){Et(G(i)?i.map(s=>s.bind(e.proxy)):i.bind(e.proxy),e,t)}function Hl(i,e,t,s){let n=s.includes(".")?Pl(t,s):()=>t[s];if(ke(i)){const o=e[i];J(o)&&jn(n,o)}else if(J(i))jn(n,i.bind(t));else if(de(i))if(G(i))i.forEach(o=>Hl(o,e,t,s));else{const o=J(i.handler)?i.handler.bind(t):e[i.handler];J(o)&&jn(n,o,i)}}function Vl(i){const e=i.type,{mixins:t,extends:s}=e,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=i.appContext,a=o.get(e);let l;return a?l=a:!n.length&&!t&&!s?l=e:(l={},n.length&&n.forEach(c=>ln(l,c,r,!0)),ln(l,e,r)),de(e)&&o.set(e,l),l}function ln(i,e,t,s=!1){const{mixins:n,extends:o}=e;o&&ln(i,o,t,!0),n&&n.forEach(r=>ln(i,r,t,!0));for(const r in e)if(!(s&&r==="expose")){const a=Cu[r]||t&&t[r];i[r]=a?a(i[r],e[r]):e[r]}return i}const Cu={data:_r,props:Pr,emits:Pr,methods:rs,computed:rs,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:rs,directives:rs,watch:ku,provide:_r,inject:Su};function _r(i,e){return e?i?function(){return Re(J(i)?i.call(this,this):i,J(e)?e.call(this,this):e)}:e:i}function Su(i,e){return rs(Co(i),Co(e))}function Co(i){if(G(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Be(i,e){return i?[...new Set([].concat(i,e))]:e}function rs(i,e){return i?Re(Object.create(null),i,e):e}function Pr(i,e){return i?G(i)&&G(e)?[...new Set([...i,...e])]:Re(Object.create(null),Ar(i),Ar(e??{})):e}function ku(i,e){if(!i)return e;if(!e)return i;const t=Re(Object.create(null),i);for(const s in e)t[s]=Be(i[s],e[s]);return t}function jl(){return{app:null,config:{isNativeTag:il,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tu=0;function Ou(i,e){return function(s,n=null){J(s)||(s=Re({},s)),n!=null&&!de(n)&&(n=null);const o=jl(),r=new WeakSet,a=[];let l=!1;const c=o.app={_uid:Tu++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:ch,get config(){return o.config},set config(d){},use(d,...u){return r.has(d)||(d&&J(d.install)?(r.add(d),d.install(c,...u)):J(d)&&(r.add(d),d(c,...u))),c},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),c},component(d,u){return u?(o.components[d]=u,c):o.components[d]},directive(d,u){return u?(o.directives[d]=u,c):o.directives[d]},mount(d,u,p){if(!l){const m=c._ceVNode||Ht(s,n);return m.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),i(m,d,p),l=!0,c._container=d,d.__vue_app__=c,Tn(m.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Et(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(d,u){return o.provides[d]=u,c},runWithContext(d){const u=_i;_i=c;try{return d()}finally{_i=u}}};return c}}let _i=null;const Iu=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Xt(e)}Modifiers`]||i[`${mi(e)}Modifiers`];function Ru(i,e,...t){if(i.isUnmounted)return;const s=i.vnode.props||fe;let n=t;const o=e.startsWith("update:"),r=o&&Iu(s,e.slice(7));r&&(r.trim&&(n=t.map(d=>ke(d)?d.trim():d)),r.number&&(n=t.map(Bo)));let a,l=s[a=Fn(e)]||s[a=Fn(Xt(e))];!l&&o&&(l=s[a=Fn(mi(e))]),l&&Et(l,i,6,n);const c=s[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Et(c,i,6,n)}}const Eu=new WeakMap;function zl(i,e,t=!1){const s=t?Eu:e.emitsCache,n=s.get(i);if(n!==void 0)return n;const o=i.emits;let r={},a=!1;if(!J(i)){const l=c=>{const d=zl(c,e,!0);d&&(a=!0,Re(r,d))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!o&&!a?(de(i)&&s.set(i,null),null):(G(o)?o.forEach(l=>r[l]=null):Re(r,o),de(i)&&s.set(i,r),r)}function Sn(i,e){return!i||!bn(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(i,e[0].toLowerCase()+e.slice(1))||le(i,mi(e))||le(i,e))}function Lr(i){const{type:e,vnode:t,proxy:s,withProxy:n,propsOptions:[o],slots:r,attrs:a,emit:l,render:c,renderCache:d,props:u,data:p,setupState:m,ctx:b,inheritAttrs:T}=i,V=rn(i);let Y,F;try{if(t.shapeFlag&4){const L=n||s,te=L;Y=Tt(c.call(te,L,d,u,m,p,b)),F=a}else{const L=e;Y=Tt(L.length>1?L(u,{attrs:a,slots:r,emit:l}):L(u,null)),F=e.props?a:Au(a)}}catch(L){ps.length=0,$n(L,i,1),Y=Ht(Kt)}let Z=Y;if(F&&T!==!1){const L=Object.keys(F),{shapeFlag:te}=Z;L.length&&te&7&&(o&&L.some(Fo)&&(F=Du(F,o)),Z=Bi(Z,F,!1,!0))}return t.dirs&&(Z=Bi(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(t.dirs):t.dirs),t.transition&&Xo(Z,t.transition),Y=Z,rn(V),Y}const Au=i=>{let e;for(const t in i)(t==="class"||t==="style"||bn(t))&&((e||(e={}))[t]=i[t]);return e},Du=(i,e)=>{const t={};for(const s in i)(!Fo(s)||!(s.slice(9)in e))&&(t[s]=i[s]);return t};function _u(i,e,t){const{props:s,children:n,component:o}=i,{props:r,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?Fr(s,r,c):!!r;if(l&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(Ul(r,s,p)&&!Sn(c,p))return!0}}}else return(n||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?Fr(s,r,c):!0:!!r;return!1}function Fr(i,e,t){const s=Object.keys(e);if(s.length!==Object.keys(i).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(Ul(e,i,o)&&!Sn(t,o))return!0}return!1}function Ul(i,e,t){const s=i[t],n=e[t];return t==="style"&&de(s)&&de(n)?!jo(s,n):s!==n}function Pu({vnode:i,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===i&&(s.el=i.el),s===i)(i=e.vnode).el=t,e=e.parent;else break}}const ql={},Wl=()=>Object.create(ql),Gl=i=>Object.getPrototypeOf(i)===ql;function Lu(i,e,t,s=!1){const n={},o=Wl();i.propsDefaults=Object.create(null),Yl(i,e,n,o);for(const r in i.propsOptions[0])r in n||(n[r]=void 0);t?i.props=s?n:Bd(n):i.type.props?i.props=n:i.props=o,i.attrs=o}function Fu(i,e,t,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=i,a=ne(n),[l]=i.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=i.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(Sn(i.emitsOptions,p))continue;const m=e[p];if(l)if(le(o,p))m!==o[p]&&(o[p]=m,c=!0);else{const b=Xt(p);n[b]=So(l,a,b,m,i,!1)}else m!==o[p]&&(o[p]=m,c=!0)}}}else{Yl(i,e,n,o)&&(c=!0);let d;for(const u in a)(!e||!le(e,u)&&((d=mi(u))===u||!le(e,d)))&&(l?t&&(t[u]!==void 0||t[d]!==void 0)&&(n[u]=So(l,a,u,void 0,i,!0)):delete n[u]);if(o!==a)for(const u in o)(!e||!le(e,u))&&(delete o[u],c=!0)}c&&Mt(i.attrs,"set","")}function Yl(i,e,t,s){const[n,o]=i.propsOptions;let r=!1,a;if(e)for(let l in e){if(as(l))continue;const c=e[l];let d;n&&le(n,d=Xt(l))?!o||!o.includes(d)?t[d]=c:(a||(a={}))[d]=c:Sn(i.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(o){const l=ne(t),c=a||fe;for(let d=0;d<o.length;d++){const u=o[d];t[u]=So(n,l,u,c[u],i,!le(c,u))}}return r}function So(i,e,t,s,n,o){const r=i[t];if(r!=null){const a=le(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&J(l)){const{propsDefaults:c}=n;if(t in c)s=c[t];else{const d=Ps(n);s=c[t]=l.call(null,e),d()}}else s=l;n.ce&&n.ce._setProp(t,s)}r[0]&&(o&&!a?s=!1:r[1]&&(s===""||s===mi(t))&&(s=!0))}return s}const Mu=new WeakMap;function Jl(i,e,t=!1){const s=t?Mu:e.propsCache,n=s.get(i);if(n)return n;const o=i.props,r={},a=[];let l=!1;if(!J(i)){const d=u=>{l=!0;const[p,m]=Jl(u,e,!0);Re(r,p),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(d),i.extends&&d(i.extends),i.mixins&&i.mixins.forEach(d)}if(!o&&!l)return de(i)&&s.set(i,Ei),Ei;if(G(o))for(let d=0;d<o.length;d++){const u=Xt(o[d]);Mr(u)&&(r[u]=fe)}else if(o)for(const d in o){const u=Xt(d);if(Mr(u)){const p=o[d],m=r[u]=G(p)||J(p)?{type:p}:Re({},p),b=m.type;let T=!1,V=!0;if(G(b))for(let Y=0;Y<b.length;++Y){const F=b[Y],Z=J(F)&&F.name;if(Z==="Boolean"){T=!0;break}else Z==="String"&&(V=!1)}else T=J(b)&&b.name==="Boolean";m[0]=T,m[1]=V,(T||le(m,"default"))&&a.push(u)}}const c=[r,a];return de(i)&&s.set(i,c),c}function Mr(i){return i[0]!=="$"&&!as(i)}const Ko=i=>i==="_"||i==="_ctx"||i==="$stable",er=i=>G(i)?i.map(Tt):[Tt(i)],Nu=(i,e,t)=>{if(e._n)return e;const s=Xd((...n)=>er(e(...n)),t);return s._c=!1,s},Ql=(i,e,t)=>{const s=i._ctx;for(const n in i){if(Ko(n))continue;const o=i[n];if(J(o))e[n]=Nu(n,o,s);else if(o!=null){const r=er(o);e[n]=()=>r}}},Zl=(i,e)=>{const t=er(e);i.slots.default=()=>t},Xl=(i,e,t)=>{for(const s in e)(t||!Ko(s))&&(i[s]=e[s])},Bu=(i,e,t)=>{const s=i.slots=Wl();if(i.vnode.shapeFlag&32){const n=e._;n?(Xl(s,e,t),t&&ll(s,"_",n,!0)):Ql(e,s)}else e&&Zl(i,e)},Hu=(i,e,t)=>{const{vnode:s,slots:n}=i;let o=!0,r=fe;if(s.shapeFlag&32){const a=e._;a?t&&a===1?o=!1:Xl(n,e,t):(o=!e.$stable,Ql(e,n)),r=e}else e&&(Zl(i,e),r={default:1});if(o)for(const a in n)!Ko(a)&&r[a]==null&&delete n[a]},Ze=qu;function Vu(i){return ju(i)}function ju(i,e){const t=yn();t.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:m=It,insertStaticContent:b}=i,T=(h,f,v,k=null,x=null,C=null,E=void 0,R=null,I=!!f.dynamicChildren)=>{if(h===f)return;h&&!Ki(h,f)&&(k=rt(h),Q(h,x,C,!0),h=null),f.patchFlag===-2&&(I=!1,f.dynamicChildren=null);const{type:S,ref:H,shapeFlag:D}=f;switch(S){case kn:V(h,f,v,k);break;case Kt:Y(h,f,v,k);break;case qn:h==null&&F(f,v,k,E);break;case at:ft(h,f,v,k,x,C,E,R,I);break;default:D&1?te(h,f,v,k,x,C,E,R,I):D&6?Oe(h,f,v,k,x,C,E,R,I):(D&64||D&128)&&S.process(h,f,v,k,x,C,E,R,I,Se)}H!=null&&x?us(H,h&&h.ref,C,f||h,!f):H==null&&h&&h.ref!=null&&us(h.ref,null,C,h,!0)},V=(h,f,v,k)=>{if(h==null)s(f.el=a(f.children),v,k);else{const x=f.el=h.el;f.children!==h.children&&c(x,f.children)}},Y=(h,f,v,k)=>{h==null?s(f.el=l(f.children||""),v,k):f.el=h.el},F=(h,f,v,k)=>{[h.el,h.anchor]=b(h.children,f,v,k,h.el,h.anchor)},Z=({el:h,anchor:f},v,k)=>{let x;for(;h&&h!==f;)x=p(h),s(h,v,k),h=x;s(f,v,k)},L=({el:h,anchor:f})=>{let v;for(;h&&h!==f;)v=p(h),n(h),h=v;n(f)},te=(h,f,v,k,x,C,E,R,I)=>{if(f.type==="svg"?E="svg":f.type==="math"&&(E="mathml"),h==null)ae(f,v,k,x,C,E,R,I);else{const S=h.el&&h.el._isVueCE?h.el:null;try{S&&S._beginPatch(),Te(h,f,x,C,E,R,I)}finally{S&&S._endPatch()}}},ae=(h,f,v,k,x,C,E,R)=>{let I,S;const{props:H,shapeFlag:D,transition:B,dirs:W}=h;if(I=h.el=r(h.type,C,H&&H.is,H),D&8?d(I,h.children):D&16&&Ne(h.children,I,null,k,x,Un(h,C),E,R),W&&oi(h,null,k,"created"),Ce(I,h,h.scopeId,E,k),H){for(const pe in H)pe!=="value"&&!as(pe)&&o(I,pe,null,H[pe],C,k);"value"in H&&o(I,"value",null,H.value,C),(S=H.onVnodeBeforeMount)&&St(S,k,h)}W&&oi(h,null,k,"beforeMount");const se=zu(x,B);se&&B.beforeEnter(I),s(I,f,v),((S=H&&H.onVnodeMounted)||se||W)&&Ze(()=>{S&&St(S,k,h),se&&B.enter(I),W&&oi(h,null,k,"mounted")},x)},Ce=(h,f,v,k,x)=>{if(v&&m(h,v),k)for(let C=0;C<k.length;C++)m(h,k[C]);if(x){let C=x.subTree;if(f===C||ic(C.type)&&(C.ssContent===f||C.ssFallback===f)){const E=x.vnode;Ce(h,E,E.scopeId,E.slotScopeIds,x.parent)}}},Ne=(h,f,v,k,x,C,E,R,I=0)=>{for(let S=I;S<h.length;S++){const H=h[S]=R?Lt(h[S]):Tt(h[S]);T(null,H,f,v,k,x,C,E,R)}},Te=(h,f,v,k,x,C,E)=>{const R=f.el=h.el;let{patchFlag:I,dynamicChildren:S,dirs:H}=f;I|=h.patchFlag&16;const D=h.props||fe,B=f.props||fe;let W;if(v&&ri(v,!1),(W=B.onVnodeBeforeUpdate)&&St(W,v,f,h),H&&oi(f,h,v,"beforeUpdate"),v&&ri(v,!0),(D.innerHTML&&B.innerHTML==null||D.textContent&&B.textContent==null)&&d(R,""),S?X(h.dynamicChildren,S,R,v,k,Un(f,x),C):E||w(h,f,R,null,v,k,Un(f,x),C,!1),I>0){if(I&16)ie(R,D,B,v,x);else if(I&2&&D.class!==B.class&&o(R,"class",null,B.class,x),I&4&&o(R,"style",D.style,B.style,x),I&8){const se=f.dynamicProps;for(let pe=0;pe<se.length;pe++){const ce=se[pe],Ye=D[ce],Je=B[ce];(Je!==Ye||ce==="value")&&o(R,ce,Ye,Je,x,v)}}I&1&&h.children!==f.children&&d(R,f.children)}else!E&&S==null&&ie(R,D,B,v,x);((W=B.onVnodeUpdated)||H)&&Ze(()=>{W&&St(W,v,f,h),H&&oi(f,h,v,"updated")},k)},X=(h,f,v,k,x,C,E)=>{for(let R=0;R<f.length;R++){const I=h[R],S=f[R],H=I.el&&(I.type===at||!Ki(I,S)||I.shapeFlag&198)?u(I.el):v;T(I,S,H,null,k,x,C,E,!0)}},ie=(h,f,v,k,x)=>{if(f!==v){if(f!==fe)for(const C in f)!as(C)&&!(C in v)&&o(h,C,f[C],null,x,k);for(const C in v){if(as(C))continue;const E=v[C],R=f[C];E!==R&&C!=="value"&&o(h,C,R,E,x,k)}"value"in v&&o(h,"value",f.value,v.value,x)}},ft=(h,f,v,k,x,C,E,R,I)=>{const S=f.el=h?h.el:a(""),H=f.anchor=h?h.anchor:a("");let{patchFlag:D,dynamicChildren:B,slotScopeIds:W}=f;W&&(R=R?R.concat(W):W),h==null?(s(S,v,k),s(H,v,k),Ne(f.children||[],v,H,x,C,E,R,I)):D>0&&D&64&&B&&h.dynamicChildren&&h.dynamicChildren.length===B.length?(X(h.dynamicChildren,B,v,x,C,E,R),(f.key!=null||x&&f===x.subTree)&&Kl(h,f,!0)):w(h,f,v,H,x,C,E,R,I)},Oe=(h,f,v,k,x,C,E,R,I)=>{f.slotScopeIds=R,h==null?f.shapeFlag&512?x.ctx.activate(f,v,k,E,I):M(f,v,k,x,C,E,I):A(h,f,I)},M=(h,f,v,k,x,C,E)=>{const R=h.component=th(h,k,x);if(Fl(h)&&(R.ctx.renderer=Se),sh(R,!1,E),R.asyncDep){if(x&&x.registerDep(R,$,E),!h.el){const I=R.subTree=Ht(Kt);Y(null,I,f,v),h.placeholder=I.el}}else $(R,h,f,v,x,C,E)},A=(h,f,v)=>{const k=f.component=h.component;if(_u(h,f,v))if(k.asyncDep&&!k.asyncResolved){O(k,f,v);return}else k.next=f,k.update();else f.el=h.el,k.vnode=f},$=(h,f,v,k,x,C,E)=>{const R=()=>{if(h.isMounted){let{next:D,bu:B,u:W,parent:se,vnode:pe}=h;{const $t=ec(h);if($t){D&&(D.el=pe.el,O(h,D,E)),$t.asyncDep.then(()=>{Ze(()=>{h.isUnmounted||S()},x)});return}}let ce=D,Ye;ri(h,!1),D?(D.el=pe.el,O(h,D,E)):D=pe,B&&Qs(B),(Ye=D.props&&D.props.onVnodeBeforeUpdate)&&St(Ye,se,D,pe),ri(h,!0);const Je=Lr(h),wt=h.subTree;h.subTree=Je,T(wt,Je,u(wt.el),rt(wt),h,x,C),D.el=Je.el,ce===null&&Pu(h,Je.el),W&&Ze(W,x),(Ye=D.props&&D.props.onVnodeUpdated)&&Ze(()=>St(Ye,se,D,pe),x)}else{let D;const{el:B,props:W}=f,{bm:se,m:pe,parent:ce,root:Ye,type:Je}=h,wt=hs(f);ri(h,!1),se&&Qs(se),!wt&&(D=W&&W.onVnodeBeforeMount)&&St(D,ce,f),ri(h,!0);{Ye.ce&&Ye.ce._hasShadowRoot()&&Ye.ce._injectChildStyle(Je);const $t=h.subTree=Lr(h);T(null,$t,v,k,h,x,C),f.el=$t.el}if(pe&&Ze(pe,x),!wt&&(D=W&&W.onVnodeMounted)){const $t=f;Ze(()=>St(D,ce,$t),x)}(f.shapeFlag&256||ce&&hs(ce.vnode)&&ce.vnode.shapeFlag&256)&&h.a&&Ze(h.a,x),h.isMounted=!0,f=v=k=null}};h.scope.on();const I=h.effect=new hl(R);h.scope.off();const S=h.update=I.run.bind(I),H=h.job=I.runIfDirty.bind(I);H.i=h,H.id=h.uid,I.scheduler=()=>Qo(H),ri(h,!0),S()},O=(h,f,v)=>{f.component=h;const k=h.vnode.props;h.vnode=f,h.next=null,Fu(h,f.props,k,v),Hu(h,f.children,v),Vt(),Or(h),jt()},w=(h,f,v,k,x,C,E,R,I=!1)=>{const S=h&&h.children,H=h?h.shapeFlag:0,D=f.children,{patchFlag:B,shapeFlag:W}=f;if(B>0){if(B&128){j(S,D,v,k,x,C,E,R,I);return}else if(B&256){N(S,D,v,k,x,C,E,R,I);return}}W&8?(H&16&&ot(S,x,C),D!==S&&d(v,D)):H&16?W&16?j(S,D,v,k,x,C,E,R,I):ot(S,x,C,!0):(H&8&&d(v,""),W&16&&Ne(D,v,k,x,C,E,R,I))},N=(h,f,v,k,x,C,E,R,I)=>{h=h||Ei,f=f||Ei;const S=h.length,H=f.length,D=Math.min(S,H);let B;for(B=0;B<D;B++){const W=f[B]=I?Lt(f[B]):Tt(f[B]);T(h[B],W,v,null,x,C,E,R,I)}S>H?ot(h,x,C,!0,!1,D):Ne(f,v,k,x,C,E,R,I,D)},j=(h,f,v,k,x,C,E,R,I)=>{let S=0;const H=f.length;let D=h.length-1,B=H-1;for(;S<=D&&S<=B;){const W=h[S],se=f[S]=I?Lt(f[S]):Tt(f[S]);if(Ki(W,se))T(W,se,v,null,x,C,E,R,I);else break;S++}for(;S<=D&&S<=B;){const W=h[D],se=f[B]=I?Lt(f[B]):Tt(f[B]);if(Ki(W,se))T(W,se,v,null,x,C,E,R,I);else break;D--,B--}if(S>D){if(S<=B){const W=B+1,se=W<H?f[W].el:k;for(;S<=B;)T(null,f[S]=I?Lt(f[S]):Tt(f[S]),v,se,x,C,E,R,I),S++}}else if(S>B)for(;S<=D;)Q(h[S],x,C,!0),S++;else{const W=S,se=S,pe=new Map;for(S=se;S<=B;S++){const it=f[S]=I?Lt(f[S]):Tt(f[S]);it.key!=null&&pe.set(it.key,S)}let ce,Ye=0;const Je=B-se+1;let wt=!1,$t=0;const Qi=new Array(Je);for(S=0;S<Je;S++)Qi[S]=0;for(S=W;S<=D;S++){const it=h[S];if(Ye>=Je){Q(it,x,C,!0);continue}let Ct;if(it.key!=null)Ct=pe.get(it.key);else for(ce=se;ce<=B;ce++)if(Qi[ce-se]===0&&Ki(it,f[ce])){Ct=ce;break}Ct===void 0?Q(it,x,C,!0):(Qi[Ct-se]=S+1,Ct>=$t?$t=Ct:wt=!0,T(it,f[Ct],v,null,x,C,E,R,I),Ye++)}const xr=wt?Uu(Qi):Ei;for(ce=xr.length-1,S=Je-1;S>=0;S--){const it=se+S,Ct=f[it],wr=f[it+1],$r=it+1<H?wr.el||tc(wr):k;Qi[S]===0?T(null,Ct,v,$r,x,C,E,R,I):wt&&(ce<0||S!==xr[ce]?z(Ct,v,$r,2):ce--)}}},z=(h,f,v,k,x=null)=>{const{el:C,type:E,transition:R,children:I,shapeFlag:S}=h;if(S&6){z(h.component.subTree,f,v,k);return}if(S&128){h.suspense.move(f,v,k);return}if(S&64){E.move(h,f,v,Se);return}if(E===at){s(C,f,v);for(let D=0;D<I.length;D++)z(I[D],f,v,k);s(h.anchor,f,v);return}if(E===qn){Z(h,f,v);return}if(k!==2&&S&1&&R)if(k===0)R.beforeEnter(C),s(C,f,v),Ze(()=>R.enter(C),x);else{const{leave:D,delayLeave:B,afterLeave:W}=R,se=()=>{h.ctx.isUnmounted?n(C):s(C,f,v)},pe=()=>{C._isLeaving&&C[ru](!0),D(C,()=>{se(),W&&W()})};B?B(C,se,pe):pe()}else s(C,f,v)},Q=(h,f,v,k=!1,x=!1)=>{const{type:C,props:E,ref:R,children:I,dynamicChildren:S,shapeFlag:H,patchFlag:D,dirs:B,cacheIndex:W}=h;if(D===-2&&(x=!1),R!=null&&(Vt(),us(R,null,v,h,!0),jt()),W!=null&&(f.renderCache[W]=void 0),H&256){f.ctx.deactivate(h);return}const se=H&1&&B,pe=!hs(h);let ce;if(pe&&(ce=E&&E.onVnodeBeforeUnmount)&&St(ce,f,h),H&6)Ge(h.component,v,k);else{if(H&128){h.suspense.unmount(v,k);return}se&&oi(h,null,f,"beforeUnmount"),H&64?h.type.remove(h,f,v,Se,k):S&&!S.hasOnce&&(C!==at||D>0&&D&64)?ot(S,f,v,!1,!0):(C===at&&D&384||!x&&H&16)&&ot(I,f,v),k&&ue(h)}(pe&&(ce=E&&E.onVnodeUnmounted)||se)&&Ze(()=>{ce&&St(ce,f,h),se&&oi(h,null,f,"unmounted")},v)},ue=h=>{const{type:f,el:v,anchor:k,transition:x}=h;if(f===at){xe(v,k);return}if(f===qn){L(h);return}const C=()=>{n(v),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(h.shapeFlag&1&&x&&!x.persisted){const{leave:E,delayLeave:R}=x,I=()=>E(v,C);R?R(h.el,C,I):I()}else C()},xe=(h,f)=>{let v;for(;h!==f;)v=p(h),n(h),h=v;n(f)},Ge=(h,f,v)=>{const{bum:k,scope:x,job:C,subTree:E,um:R,m:I,a:S}=h;Nr(I),Nr(S),k&&Qs(k),x.stop(),C&&(C.flags|=8,Q(E,h,f,v)),R&&Ze(R,f),Ze(()=>{h.isUnmounted=!0},f)},ot=(h,f,v,k=!1,x=!1,C=0)=>{for(let E=C;E<h.length;E++)Q(h[E],f,v,k,x)},rt=h=>{if(h.shapeFlag&6)return rt(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const f=p(h.anchor||h.el),v=f&&f[nu];return v?p(v):f};let At=!1;const xt=(h,f,v)=>{let k;h==null?f._vnode&&(Q(f._vnode,null,null,!0),k=f._vnode.component):T(f._vnode||null,h,f,null,null,null,v),f._vnode=h,At||(At=!0,Or(k),Al(),At=!1)},Se={p:T,um:Q,m:z,r:ue,mt:M,mc:Ne,pc:w,pbc:X,n:rt,o:i};return{render:xt,hydrate:void 0,createApp:Ou(xt)}}function Un({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ri({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function zu(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Kl(i,e,t=!1){const s=i.children,n=e.children;if(G(s)&&G(n))for(let o=0;o<s.length;o++){const r=s[o];let a=n[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=n[o]=Lt(n[o]),a.el=r.el),!t&&a.patchFlag!==-2&&Kl(r,a)),a.type===kn&&(a.patchFlag===-1&&(a=n[o]=Lt(a)),a.el=r.el),a.type===Kt&&!a.el&&(a.el=r.el)}}function Uu(i){const e=i.slice(),t=[0];let s,n,o,r,a;const l=i.length;for(s=0;s<l;s++){const c=i[s];if(c!==0){if(n=t[t.length-1],i[n]<c){e[s]=n,t.push(s);continue}for(o=0,r=t.length-1;o<r;)a=o+r>>1,i[t[a]]<c?o=a+1:r=a;c<i[t[o]]&&(o>0&&(e[s]=t[o-1]),t[o]=s)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=e[r];return t}function ec(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ec(e)}function Nr(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}function tc(i){if(i.placeholder)return i.placeholder;const e=i.component;return e?tc(e.subTree):null}const ic=i=>i.__isSuspense;function qu(i,e){e&&e.pendingBranch?G(i)?e.effects.push(...i):e.effects.push(i):Zd(i)}const at=Symbol.for("v-fgt"),kn=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),qn=Symbol.for("v-stc"),ps=[];let st=null;function di(i=!1){ps.push(st=i?null:[])}function Wu(){ps.pop(),st=ps[ps.length-1]||null}let Ss=1;function Br(i,e=!1){Ss+=i,i<0&&st&&e&&(st.hasOnce=!0)}function sc(i){return i.dynamicChildren=Ss>0?st||Ei:null,Wu(),Ss>0&&st&&st.push(i),i}function $i(i,e,t,s,n,o){return sc(he(i,e,t,s,n,o,!0))}function Gu(i,e,t,s,n){return sc(Ht(i,e,t,s,n,!0))}function nc(i){return i?i.__v_isVNode===!0:!1}function Ki(i,e){return i.type===e.type&&i.key===e.key}const oc=({key:i})=>i??null,Zs=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?ke(i)||Ae(i)||J(i)?{i:ct,r:i,k:e,f:!!t}:i:null);function he(i,e=null,t=null,s=0,n=null,o=i===at?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&oc(e),ref:e&&Zs(e),scopeId:_l,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:ct};return a?(tr(l,t),o&128&&i.normalize(l)):t&&(l.shapeFlag|=ke(t)?8:16),Ss>0&&!r&&st&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&st.push(l),l}const Ht=Yu;function Yu(i,e=null,t=null,s=0,n=null,o=!1){if((!i||i===yu)&&(i=Kt),nc(i)){const a=Bi(i,e,!0);return t&&tr(a,t),Ss>0&&!o&&st&&(a.shapeFlag&6?st[st.indexOf(i)]=a:st.push(a)),a.patchFlag=-2,a}if(ah(i)&&(i=i.__vccOpts),e){e=Ju(e);let{class:a,style:l}=e;a&&!ke(a)&&(e.class=Vo(a)),de(l)&&(Jo(l)&&!G(l)&&(l=Re({},l)),e.style=Ho(l))}const r=ke(i)?1:ic(i)?128:ou(i)?64:de(i)?4:J(i)?2:0;return he(i,e,t,s,n,r,o,!0)}function Ju(i){return i?Jo(i)||Gl(i)?Re({},i):i:null}function Bi(i,e,t=!1,s=!1){const{props:n,ref:o,patchFlag:r,children:a,transition:l}=i,c=e?Xu(n||{},e):n,d={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&oc(c),ref:e&&e.ref?t&&o?G(o)?o.concat(Zs(e)):[o,Zs(e)]:Zs(e):o,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==at?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Bi(i.ssContent),ssFallback:i.ssFallback&&Bi(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&s&&Xo(d,l.clone(d)),d}function Qu(i=" ",e=0){return Ht(kn,null,i,e)}function Zu(i="",e=!1){return e?(di(),Gu(Kt,null,i)):Ht(Kt,null,i)}function Tt(i){return i==null||typeof i=="boolean"?Ht(Kt):G(i)?Ht(at,null,i.slice()):nc(i)?Lt(i):Ht(kn,null,String(i))}function Lt(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Bi(i)}function tr(i,e){let t=0;const{shapeFlag:s}=i;if(e==null)e=null;else if(G(e))t=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),tr(i,n()),n._c&&(n._d=!0));return}else{t=32;const n=e._;!n&&!Gl(e)?e._ctx=ct:n===3&&ct&&(ct.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:ct},t=32):(e=String(e),s&64?(t=16,e=[Qu(e)]):t=8);i.children=e,i.shapeFlag|=t}function Xu(...i){const e={};for(let t=0;t<i.length;t++){const s=i[t];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=Vo([e.class,s.class]));else if(n==="style")e.style=Ho([e.style,s.style]);else if(bn(n)){const o=e[n],r=s[n];r&&o!==r&&!(G(o)&&o.includes(r))&&(e[n]=o?[].concat(o,r):r)}else n!==""&&(e[n]=s[n])}return e}function St(i,e,t,s=null){Et(i,e,7,[t,s])}const Ku=jl();let eh=0;function th(i,e,t){const s=i.type,n=(e?e.appContext:i.appContext)||Ku,o={uid:eh++,vnode:i,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jl(s,n),emitsOptions:zl(s,n),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:s.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Ru.bind(null,o),i.ce&&i.ce(o),o}let je=null;const ih=()=>je||ct;let cn,ko;{const i=yn(),e=(t,s)=>{let n;return(n=i[t])||(n=i[t]=[]),n.push(s),o=>{n.length>1?n.forEach(r=>r(o)):n[0](o)}};cn=e("__VUE_INSTANCE_SETTERS__",t=>je=t),ko=e("__VUE_SSR_SETTERS__",t=>ks=t)}const Ps=i=>{const e=je;return cn(i),i.scope.on(),()=>{i.scope.off(),cn(e)}},Hr=()=>{je&&je.scope.off(),cn(null)};function rc(i){return i.vnode.shapeFlag&4}let ks=!1;function sh(i,e=!1,t=!1){e&&ko(e);const{props:s,children:n}=i.vnode,o=rc(i);Lu(i,s,o,e),Bu(i,n,t||e);const r=o?nh(i,e):void 0;return e&&ko(!1),r}function nh(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,xu);const{setup:s}=t;if(s){Vt();const n=i.setupContext=s.length>1?rh(i):null,o=Ps(i),r=_s(s,i,0,[i.props,n]),a=nl(r);if(jt(),o(),(a||i.sp)&&!hs(i)&&Ll(i),a){if(r.then(Hr,Hr),e)return r.then(l=>{Vr(i,l)}).catch(l=>{$n(l,i,0)});i.asyncDep=r}else Vr(i,r)}else ac(i)}function Vr(i,e,t){J(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:de(e)&&(i.setupState=Ol(e)),ac(i)}function ac(i,e,t){const s=i.type;i.render||(i.render=s.render||It);{const n=Ps(i);Vt();try{wu(i)}finally{jt(),n()}}}const oh={get(i,e){return Ee(i,"get",""),i[e]}};function rh(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,oh),slots:i.slots,emit:i.emit,expose:e}}function Tn(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Ol(Hd(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in fs)return fs[t](i)},has(e,t){return t in e||t in fs}})):i.proxy}function ah(i){return J(i)&&"__vccOpts"in i}const lh=(i,e)=>Wd(i,e,ks),ch="3.5.29";let To;const jr=typeof window<"u"&&window.trustedTypes;if(jr)try{To=jr.createPolicy("vue",{createHTML:i=>i})}catch{}const lc=To?i=>To.createHTML(i):i=>i,dh="http://www.w3.org/2000/svg",uh="http://www.w3.org/1998/Math/MathML",Pt=typeof document<"u"?document:null,zr=Pt&&Pt.createElement("template"),hh={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,s)=>{const n=e==="svg"?Pt.createElementNS(dh,i):e==="mathml"?Pt.createElementNS(uh,i):t?Pt.createElement(i,{is:t}):Pt.createElement(i);return i==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:i=>Pt.createTextNode(i),createComment:i=>Pt.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Pt.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,s,n,o){const r=t?t.previousSibling:e.lastChild;if(n&&(n===o||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),t),!(n===o||!(n=n.nextSibling)););else{zr.innerHTML=lc(s==="svg"?`<svg>${i}</svg>`:s==="mathml"?`<math>${i}</math>`:i);const a=zr.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},fh=Symbol("_vtc");function ph(i,e,t){const s=i[fh];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Ur=Symbol("_vod"),gh=Symbol("_vsh"),mh=Symbol(""),bh=/(?:^|;)\s*display\s*:/;function vh(i,e,t){const s=i.style,n=ke(t);let o=!1;if(t&&!n){if(e)if(ke(e))for(const r of e.split(";")){const a=r.slice(0,r.indexOf(":")).trim();t[a]==null&&Xs(s,a,"")}else for(const r in e)t[r]==null&&Xs(s,r,"");for(const r in t)r==="display"&&(o=!0),Xs(s,r,t[r])}else if(n){if(e!==t){const r=s[mh];r&&(t+=";"+r),s.cssText=t,o=bh.test(t)}}else e&&i.removeAttribute("style");Ur in i&&(i[Ur]=o?s.display:"",i[gh]&&(s.display="none"))}const qr=/\s*!important$/;function Xs(i,e,t){if(G(t))t.forEach(s=>Xs(i,e,s));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const s=yh(i,e);qr.test(t)?i.setProperty(mi(s),t.replace(qr,""),"important"):i[s]=t}}const Wr=["Webkit","Moz","ms"],Wn={};function yh(i,e){const t=Wn[e];if(t)return t;let s=Xt(e);if(s!=="filter"&&s in i)return Wn[e]=s;s=al(s);for(let n=0;n<Wr.length;n++){const o=Wr[n]+s;if(o in i)return Wn[e]=o}return e}const Gr="http://www.w3.org/1999/xlink";function Yr(i,e,t,s,n,o=bd(e)){s&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Gr,e.slice(6,e.length)):i.setAttributeNS(Gr,e,t):t==null||o&&!cl(t)?i.removeAttribute(e):i.setAttribute(e,o?"":Rt(t)?String(t):t)}function Jr(i,e,t,s,n){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?lc(t):t);return}const o=i.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let r=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=cl(t):t==null&&a==="string"?(t="",r=!0):a==="number"&&(t=0,r=!0)}try{i[e]=t}catch{}r&&i.removeAttribute(n||e)}function Ti(i,e,t,s){i.addEventListener(e,t,s)}function xh(i,e,t,s){i.removeEventListener(e,t,s)}const Qr=Symbol("_vei");function wh(i,e,t,s,n=null){const o=i[Qr]||(i[Qr]={}),r=o[e];if(s&&r)r.value=s;else{const[a,l]=$h(e);if(s){const c=o[e]=kh(s,n);Ti(i,a,c,l)}else r&&(xh(i,a,r,l),o[e]=void 0)}}const Zr=/(?:Once|Passive|Capture)$/;function $h(i){let e;if(Zr.test(i)){e={};let s;for(;s=i.match(Zr);)i=i.slice(0,i.length-s[0].length),e[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):mi(i.slice(2)),e]}let Gn=0;const Ch=Promise.resolve(),Sh=()=>Gn||(Ch.then(()=>Gn=0),Gn=Date.now());function kh(i,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Et(Th(s,t.value),e,5,[s])};return t.value=i,t.attached=Sh(),t}function Th(i,e){if(G(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const Xr=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Oh=(i,e,t,s,n,o)=>{const r=n==="svg";e==="class"?ph(i,s,r):e==="style"?vh(i,t,s):bn(e)?Fo(e)||wh(i,e,t,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ih(i,e,s,r))?(Jr(i,e,s),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yr(i,e,s,r,o,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!ke(s))?Jr(i,Xt(e),s,o,e):(e==="true-value"?i._trueValue=s:e==="false-value"&&(i._falseValue=s),Yr(i,e,s,r))};function Ih(i,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in i&&Xr(e)&&J(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&i.tagName==="IFRAME"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=i.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Xr(e)&&ke(t)?!1:e in i}const Kr=i=>{const e=i.props["onUpdate:modelValue"]||!1;return G(e)?t=>Qs(e,t):e};function Rh(i){i.target.composing=!0}function ea(i){const e=i.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yn=Symbol("_assign");function ta(i,e,t){return e&&(i=i.trim()),t&&(i=Bo(i)),i}const Jn={created(i,{modifiers:{lazy:e,trim:t,number:s}},n){i[Yn]=Kr(n);const o=s||n.props&&n.props.type==="number";Ti(i,e?"change":"input",r=>{r.target.composing||i[Yn](ta(i.value,t,o))}),(t||o)&&Ti(i,"change",()=>{i.value=ta(i.value,t,o)}),e||(Ti(i,"compositionstart",Rh),Ti(i,"compositionend",ea),Ti(i,"change",ea))},mounted(i,{value:e}){i.value=e??""},beforeUpdate(i,{value:e,oldValue:t,modifiers:{lazy:s,trim:n,number:o}},r){if(i[Yn]=Kr(r),i.composing)return;const a=(o||i.type==="number")&&!/^0\d/.test(i.value)?Bo(i.value):i.value,l=e??"";a!==l&&(document.activeElement===i&&i.type!=="range"&&(s&&e===t||n&&i.value.trim()===l)||(i.value=l))}},Eh=Re({patchProp:Oh},hh);let ia;function Ah(){return ia||(ia=Vu(Eh))}const Dh=((...i)=>{const e=Ah().createApp(...i),{mount:t}=e;return e.mount=s=>{const n=Ph(s);if(!n)return;const o=e._component;!J(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const r=t(n,!1,_h(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e});function _h(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Ph(i){return ke(i)?document.querySelector(i):i}function Lh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ks={exports:{}},Fh=Ks.exports,sa;function Mh(){return sa||(sa=1,(function(i,e){(function(t,s){i.exports=s()})(Fh,(function(){var t=1e3,s=6e4,n=36e5,o="millisecond",r="second",a="minute",l="hour",c="day",d="week",u="month",p="quarter",m="year",b="date",T="Invalid Date",V=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(M){var A=["th","st","nd","rd"],$=M%100;return"["+M+(A[($-20)%10]||A[$]||A[0])+"]"}},Z=function(M,A,$){var O=String(M);return!O||O.length>=A?M:""+Array(A+1-O.length).join($)+M},L={s:Z,z:function(M){var A=-M.utcOffset(),$=Math.abs(A),O=Math.floor($/60),w=$%60;return(A<=0?"+":"-")+Z(O,2,"0")+":"+Z(w,2,"0")},m:function M(A,$){if(A.date()<$.date())return-M($,A);var O=12*($.year()-A.year())+($.month()-A.month()),w=A.clone().add(O,u),N=$-w<0,j=A.clone().add(O+(N?-1:1),u);return+(-(O+($-w)/(N?w-j:j-w))||0)},a:function(M){return M<0?Math.ceil(M)||0:Math.floor(M)},p:function(M){return{M:u,y:m,w:d,d:c,D:b,h:l,m:a,s:r,ms:o,Q:p}[M]||String(M||"").toLowerCase().replace(/s$/,"")},u:function(M){return M===void 0}},te="en",ae={};ae[te]=F;var Ce="$isDayjsObject",Ne=function(M){return M instanceof ft||!(!M||!M[Ce])},Te=function M(A,$,O){var w;if(!A)return te;if(typeof A=="string"){var N=A.toLowerCase();ae[N]&&(w=N),$&&(ae[N]=$,w=N);var j=A.split("-");if(!w&&j.length>1)return M(j[0])}else{var z=A.name;ae[z]=A,w=z}return!O&&w&&(te=w),w||!O&&te},X=function(M,A){if(Ne(M))return M.clone();var $=typeof A=="object"?A:{};return $.date=M,$.args=arguments,new ft($)},ie=L;ie.l=Te,ie.i=Ne,ie.w=function(M,A){return X(M,{locale:A.$L,utc:A.$u,x:A.$x,$offset:A.$offset})};var ft=(function(){function M($){this.$L=Te($.locale,null,!0),this.parse($),this.$x=this.$x||$.x||{},this[Ce]=!0}var A=M.prototype;return A.parse=function($){this.$d=(function(O){var w=O.date,N=O.utc;if(w===null)return new Date(NaN);if(ie.u(w))return new Date;if(w instanceof Date)return new Date(w);if(typeof w=="string"&&!/Z$/i.test(w)){var j=w.match(V);if(j){var z=j[2]-1||0,Q=(j[7]||"0").substring(0,3);return N?new Date(Date.UTC(j[1],z,j[3]||1,j[4]||0,j[5]||0,j[6]||0,Q)):new Date(j[1],z,j[3]||1,j[4]||0,j[5]||0,j[6]||0,Q)}}return new Date(w)})($),this.init()},A.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},A.$utils=function(){return ie},A.isValid=function(){return this.$d.toString()!==T},A.isSame=function($,O){var w=X($);return this.startOf(O)<=w&&w<=this.endOf(O)},A.isAfter=function($,O){return X($)<this.startOf(O)},A.isBefore=function($,O){return this.endOf(O)<X($)},A.$g=function($,O,w){return ie.u($)?this[O]:this.set(w,$)},A.unix=function(){return Math.floor(this.valueOf()/1e3)},A.valueOf=function(){return this.$d.getTime()},A.startOf=function($,O){var w=this,N=!!ie.u(O)||O,j=ie.p($),z=function(xt,Se){var Dt=ie.w(w.$u?Date.UTC(w.$y,Se,xt):new Date(w.$y,Se,xt),w);return N?Dt:Dt.endOf(c)},Q=function(xt,Se){return ie.w(w.toDate()[xt].apply(w.toDate("s"),(N?[0,0,0,0]:[23,59,59,999]).slice(Se)),w)},ue=this.$W,xe=this.$M,Ge=this.$D,ot="set"+(this.$u?"UTC":"");switch(j){case m:return N?z(1,0):z(31,11);case u:return N?z(1,xe):z(0,xe+1);case d:var rt=this.$locale().weekStart||0,At=(ue<rt?ue+7:ue)-rt;return z(N?Ge-At:Ge+(6-At),xe);case c:case b:return Q(ot+"Hours",0);case l:return Q(ot+"Minutes",1);case a:return Q(ot+"Seconds",2);case r:return Q(ot+"Milliseconds",3);default:return this.clone()}},A.endOf=function($){return this.startOf($,!1)},A.$set=function($,O){var w,N=ie.p($),j="set"+(this.$u?"UTC":""),z=(w={},w[c]=j+"Date",w[b]=j+"Date",w[u]=j+"Month",w[m]=j+"FullYear",w[l]=j+"Hours",w[a]=j+"Minutes",w[r]=j+"Seconds",w[o]=j+"Milliseconds",w)[N],Q=N===c?this.$D+(O-this.$W):O;if(N===u||N===m){var ue=this.clone().set(b,1);ue.$d[z](Q),ue.init(),this.$d=ue.set(b,Math.min(this.$D,ue.daysInMonth())).$d}else z&&this.$d[z](Q);return this.init(),this},A.set=function($,O){return this.clone().$set($,O)},A.get=function($){return this[ie.p($)]()},A.add=function($,O){var w,N=this;$=Number($);var j=ie.p(O),z=function(xe){var Ge=X(N);return ie.w(Ge.date(Ge.date()+Math.round(xe*$)),N)};if(j===u)return this.set(u,this.$M+$);if(j===m)return this.set(m,this.$y+$);if(j===c)return z(1);if(j===d)return z(7);var Q=(w={},w[a]=s,w[l]=n,w[r]=t,w)[j]||1,ue=this.$d.getTime()+$*Q;return ie.w(ue,this)},A.subtract=function($,O){return this.add(-1*$,O)},A.format=function($){var O=this,w=this.$locale();if(!this.isValid())return w.invalidDate||T;var N=$||"YYYY-MM-DDTHH:mm:ssZ",j=ie.z(this),z=this.$H,Q=this.$m,ue=this.$M,xe=w.weekdays,Ge=w.months,ot=w.meridiem,rt=function(Se,Dt,h,f){return Se&&(Se[Dt]||Se(O,N))||h[Dt].slice(0,f)},At=function(Se){return ie.s(z%12||12,Se,"0")},xt=ot||function(Se,Dt,h){var f=Se<12?"AM":"PM";return h?f.toLowerCase():f};return N.replace(Y,(function(Se,Dt){return Dt||(function(h){switch(h){case"YY":return String(O.$y).slice(-2);case"YYYY":return ie.s(O.$y,4,"0");case"M":return ue+1;case"MM":return ie.s(ue+1,2,"0");case"MMM":return rt(w.monthsShort,ue,Ge,3);case"MMMM":return rt(Ge,ue);case"D":return O.$D;case"DD":return ie.s(O.$D,2,"0");case"d":return String(O.$W);case"dd":return rt(w.weekdaysMin,O.$W,xe,2);case"ddd":return rt(w.weekdaysShort,O.$W,xe,3);case"dddd":return xe[O.$W];case"H":return String(z);case"HH":return ie.s(z,2,"0");case"h":return At(1);case"hh":return At(2);case"a":return xt(z,Q,!0);case"A":return xt(z,Q,!1);case"m":return String(Q);case"mm":return ie.s(Q,2,"0");case"s":return String(O.$s);case"ss":return ie.s(O.$s,2,"0");case"SSS":return ie.s(O.$ms,3,"0");case"Z":return j}return null})(Se)||j.replace(":","")}))},A.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},A.diff=function($,O,w){var N,j=this,z=ie.p(O),Q=X($),ue=(Q.utcOffset()-this.utcOffset())*s,xe=this-Q,Ge=function(){return ie.m(j,Q)};switch(z){case m:N=Ge()/12;break;case u:N=Ge();break;case p:N=Ge()/3;break;case d:N=(xe-ue)/6048e5;break;case c:N=(xe-ue)/864e5;break;case l:N=xe/n;break;case a:N=xe/s;break;case r:N=xe/t;break;default:N=xe}return w?N:ie.a(N)},A.daysInMonth=function(){return this.endOf(u).$D},A.$locale=function(){return ae[this.$L]},A.locale=function($,O){if(!$)return this.$L;var w=this.clone(),N=Te($,O,!0);return N&&(w.$L=N),w},A.clone=function(){return ie.w(this.$d,this)},A.toDate=function(){return new Date(this.valueOf())},A.toJSON=function(){return this.isValid()?this.toISOString():null},A.toISOString=function(){return this.$d.toISOString()},A.toString=function(){return this.$d.toUTCString()},M})(),Oe=ft.prototype;return X.prototype=Oe,[["$ms",o],["$s",r],["$m",a],["$H",l],["$W",c],["$M",u],["$y",m],["$D",b]].forEach((function(M){Oe[M[1]]=function(A){return this.$g(A,M[0],M[1])}})),X.extend=function(M,A){return M.$i||(M(A,ft,X),M.$i=!0),X},X.locale=Te,X.isDayjs=Ne,X.unix=function(M){return X(1e3*M)},X.en=ae[te],X.Ls=ae,X.p={},X}))})(Ks)),Ks.exports}var Nh=Mh();const na=Lh(Nh),oa={string:"string",number:"number",bool:"string",date:"date"};function Qn(i){return Object.prototype.toString.call(i).slice(8,-1).toLowerCase()}function Bh(i){if(Qn(i)!=="array")return[];if(i.length===0)return[{prop:"data",colName:"data",colType:"string",selected:!0}];const e=i[0];let t=Qn(e);return t!=="object"?(t==="string"&&na(e).isValid()&&(t="date"),[{prop:"data",colName:"data",colType:oa[t]||"string",selected:!0}]):Object.keys(e).map(s=>{let n=Qn(e[s]);n==="string"&&na(e[s]).isValid()&&(n="date");const o=oa[n]||"string";return{prop:s,colName:s,colType:o,selected:!0}})}const Hh={class:"header"},Vh={class:"left"},jh={key:0,class:"right"},zh=["selected"],Uh=["value","selected"],qh={class:"j2e-settings"},Wh={"grid-template-columns":"80px 1fr 1.5fr 150px"},Gh={"row-type":"header"},Yh={"cell-type":"columnheader","grid-column":"1"},Jh={"cell-type":"columnheader","grid-column":"2"},Qh={"cell-type":"columnheader","grid-column":"3"},Zh={"cell-type":"columnheader","grid-column":"4"},Xh={"grid-column":"1"},Kh=["checked","onChange"],ef={"grid-column":"2"},tf={"grid-column":"3"},sf=["onUpdate:modelValue"],nf={"grid-column":"4"},of=["onUpdate:modelValue"],rf={value:"string"},af={value:"number"},lf={value:"date"},cf={__name:"App",setup(i){const e=acquireVsCodeApi(),t=Xi([]),s=wn(new Map),n=Xi(""),o=Xi([]),r=Xi([]),a=Xi([]),l=()=>{e.postMessage({type:"querySettingList"})},c=()=>{e.postMessage({type:"saveSettings",payload:ne(o.value)})},d=()=>{e.postMessage({type:"exportExcel",payload:{data:ne(r.value),settings:ne(o.value)}})},u=(p,m)=>{p.selected=m.target.checked};return iu(()=>{if(n.value)if(s.get(n.value))a.value=s.get(n.value);else{const m=t.value.find(b=>b.settingName===n.value);e.postMessage({type:"querySettingDetail",payload:ne(m)})}}),Nl(()=>{window.addEventListener("message",p=>{const m=p.data;switch(m.type){case"jsonUpdate":{r.value=m.payload,o.value=Bh(m.payload);break}case"detailSettingsResp":{const{settingName:b,settingsDetail:T}=m.payload;s.set(b,T),a.value=s.get(n.value);break}case"settingsListResp":{t.value=m.payload;break}case"settingsListUpdated":{l();break}}}),e.postMessage({type:"ready"}),l()}),(p,m)=>(di(),$i(at,null,[he("div",Hh,[he("div",Vh,[he("vscode-button",{appearance:"primary",onClick:d},Qe(p.$t("Export Excel")),1),he("vscode-button",{appearance:"secondary",onClick:c},Qe(p.$t("Save Settings")),1)]),t.value&&t.value.length?(di(),$i("div",jh,[he("label",null,Qe(p.$t("History Settings")),1),Vn(he("vscode-dropdown",{"onUpdate:modelValue":m[0]||(m[0]=b=>n.value=b)},[he("vscode-option",{value:"",selected:n.value===""},Qe(p.$t("Do not use history settings")),9,zh),(di(!0),$i(at,null,Er(t.value,b=>(di(),$i("vscode-option",{key:b.settingName,value:b.settingName,selected:n.value===b.settingName},Qe(b.settingName),9,Uh))),128))],512),[[Jn,n.value]])])):Zu("",!0)]),m[1]||(m[1]=he("vscode-divider",{role:"separator"},null,-1)),he("div",qh,[he("vscode-data-grid",Wh,[he("vscode-data-grid-row",Gh,[he("vscode-data-grid-cell",Yh,Qe(p.$t("Export"))+"? ",1),he("vscode-data-grid-cell",Jh,Qe(p.$t("Property Name")),1),he("vscode-data-grid-cell",Qh,Qe(p.$t("Column Name")),1),he("vscode-data-grid-cell",Zh,Qe(p.$t("Column Type")),1)]),(di(!0),$i(at,null,Er(o.value,b=>(di(),$i("vscode-data-grid-row",null,[he("vscode-data-grid-cell",Xh,[he("vscode-checkbox",{checked:b.selected,onChange:T=>u(b,T)},null,40,Kh)]),he("vscode-data-grid-cell",ef,Qe(b.prop),1),he("vscode-data-grid-cell",tf,[Vn(he("vscode-text-field",{"onUpdate:modelValue":T=>b.colName=T},null,8,sf),[[Jn,b.colName]])]),he("vscode-data-grid-cell",nf,[Vn(he("vscode-dropdown",{"onUpdate:modelValue":T=>b.colType=T},[he("vscode-option",rf,Qe(p.$t("String")),1),he("vscode-option",af,Qe(p.$t("Number")),1),he("vscode-option",lf,Qe(p.$t("Date")),1)],8,of),[[Jn,b.colType]])])]))),256))])])],64))}},q=i=>typeof i=="string",es=()=>{let i,e;const t=new Promise((s,n)=>{i=s,e=n});return t.resolve=i,t.reject=e,t},ra=i=>i==null?"":""+i,df=(i,e,t)=>{i.forEach(s=>{e[s]&&(t[s]=e[s])})},uf=/###/g,aa=i=>i&&i.indexOf("###")>-1?i.replace(uf,"."):i,la=i=>!i||q(i),gs=(i,e,t)=>{const s=q(e)?e.split("."):e;let n=0;for(;n<s.length-1;){if(la(i))return{};const o=aa(s[n]);!i[o]&&t&&(i[o]=new t),Object.prototype.hasOwnProperty.call(i,o)?i=i[o]:i={},++n}return la(i)?{}:{obj:i,k:aa(s[n])}},ca=(i,e,t)=>{const{obj:s,k:n}=gs(i,e,Object);if(s!==void 0||e.length===1){s[n]=t;return}let o=e[e.length-1],r=e.slice(0,e.length-1),a=gs(i,r,Object);for(;a.obj===void 0&&r.length;)o=`${r[r.length-1]}.${o}`,r=r.slice(0,r.length-1),a=gs(i,r,Object),a?.obj&&typeof a.obj[`${a.k}.${o}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${o}`]=t},hf=(i,e,t,s)=>{const{obj:n,k:o}=gs(i,e,Object);n[o]=n[o]||[],n[o].push(t)},dn=(i,e)=>{const{obj:t,k:s}=gs(i,e);if(t&&Object.prototype.hasOwnProperty.call(t,s))return t[s]},ff=(i,e,t)=>{const s=dn(i,t);return s!==void 0?s:dn(e,t)},cc=(i,e,t)=>{for(const s in e)s!=="__proto__"&&s!=="constructor"&&(s in i?q(i[s])||i[s]instanceof String||q(e[s])||e[s]instanceof String?t&&(i[s]=e[s]):cc(i[s],e[s],t):i[s]=e[s]);return i},ai=i=>i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var pf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const gf=i=>q(i)?i.replace(/[&<>"'\/]/g,e=>pf[e]):i;class mf{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const s=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,s),this.regExpQueue.push(e),s}}const bf=[" ",",","?","!",";"],vf=new mf(20),yf=(i,e,t)=>{e=e||"",t=t||"";const s=bf.filter(r=>e.indexOf(r)<0&&t.indexOf(r)<0);if(s.length===0)return!0;const n=vf.getRegExp(`(${s.map(r=>r==="?"?"\\?":r).join("|")})`);let o=!n.test(i);if(!o){const r=i.indexOf(t);r>0&&!n.test(i.substring(0,r))&&(o=!0)}return o},Oo=(i,e,t=".")=>{if(!i)return;if(i[e])return Object.prototype.hasOwnProperty.call(i,e)?i[e]:void 0;const s=e.split(t);let n=i;for(let o=0;o<s.length;){if(!n||typeof n!="object")return;let r,a="";for(let l=o;l<s.length;++l)if(l!==o&&(a+=t),a+=s[l],r=n[a],r!==void 0){if(["string","number","boolean"].indexOf(typeof r)>-1&&l<s.length-1)continue;o+=l-o+1;break}n=r}return n},Ts=i=>i?.replace("_","-"),xf={type:"logger",log(i){this.output("log",i)},warn(i){this.output("warn",i)},error(i){this.output("error",i)},output(i,e){console?.[i]?.apply?.(console,e)}};class un{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||xf,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,s,n){return n&&!this.debug?null:(q(e[0])&&(e[0]=`${s}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new un(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new un(this.logger,e)}}var Ot=new un;class On{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(s=>{this.observers[s]||(this.observers[s]=new Map);const n=this.observers[s].get(t)||0;this.observers[s].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([n,o])=>{for(let r=0;r<o;r++)n(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([n,o])=>{for(let r=0;r<o;r++)n.apply(n,[e,...t])})}}class da extends On{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,s,n={}){const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,r=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],s&&(Array.isArray(s)?a.push(...s):q(s)&&o?a.push(...s.split(o)):a.push(s)));const l=dn(this.data,a);return!l&&!t&&!s&&e.indexOf(".")>-1&&(e=a[0],t=a[1],s=a.slice(2).join(".")),l||!r||!q(s)?l:Oo(this.data?.[e]?.[t],s,o)}addResource(e,t,s,n,o={silent:!1}){const r=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[e,t];s&&(a=a.concat(r?s.split(r):s)),e.indexOf(".")>-1&&(a=e.split("."),n=t,t=a[1]),this.addNamespaces(t),ca(this.data,a,n),o.silent||this.emit("added",e,t,s,n)}addResources(e,t,s,n={silent:!1}){for(const o in s)(q(s[o])||Array.isArray(s[o]))&&this.addResource(e,t,o,s[o],{silent:!0});n.silent||this.emit("added",e,t,s)}addResourceBundle(e,t,s,n,o,r={silent:!1,skipCopy:!1}){let a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),n=s,s=t,t=a[1]),this.addNamespaces(t);let l=dn(this.data,a)||{};r.skipCopy||(s=JSON.parse(JSON.stringify(s))),n?cc(l,s,o):l={...l,...s},ca(this.data,a,l),r.silent||this.emit("added",e,t,s)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(n=>t[n]&&Object.keys(t[n]).length>0)}toJSON(){return this.data}}var dc={processors:{},addPostProcessor(i){this.processors[i.name]=i},handle(i,e,t,s,n){return i.forEach(o=>{e=this.processors[o]?.process(e,t,s,n)??e}),e}};const uc=Symbol("i18next/PATH_KEY");function wf(){const i=[],e=Object.create(null);let t;return e.get=(s,n)=>(t?.revoke?.(),n===uc?i:(i.push(n),t=Proxy.revocable(s,e),t.proxy)),Proxy.revocable(Object.create(null),e).proxy}function Io(i,e){const{[uc]:t}=i(wf());return t.join(e?.keySeparator??".")}const ua={},Zn=i=>!q(i)&&typeof i!="boolean"&&typeof i!="number";class hn extends On{constructor(e,t={}){super(),df(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ot.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const s={...t};if(e==null)return!1;const n=this.resolve(e,s);if(n?.res===void 0)return!1;const o=Zn(n.res);return!(s.returnObjects===!1&&o)}extractFromKey(e,t){let s=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");const n=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let o=t.ns||this.options.defaultNS||[];const r=s&&e.indexOf(s)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!yf(e,s,n);if(r&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:q(o)?[o]:o};const c=e.split(s);(s!==n||s===n&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),e=c.join(n)}return{key:e,namespaces:q(o)?[o]:o}}translate(e,t,s){let n=typeof t=="object"?{...t}:t;if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";typeof e=="function"&&(e=Io(e,{...this.options,...n})),Array.isArray(e)||(e=[String(e)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],n),c=l[l.length-1];let d=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;d===void 0&&(d=":");const u=n.lng||this.language,p=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u?.toLowerCase()==="cimode")return p?o?{res:`${c}${d}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:`${c}${d}${a}`:o?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:a;const m=this.resolve(e,n);let b=m?.res;const T=m?.usedKey||a,V=m?.exactUsedKey||a,Y=["[object Number]","[object Function]","[object RegExp]"],F=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,Z=!this.i18nFormat||this.i18nFormat.handleAsObject,L=n.count!==void 0&&!q(n.count),te=hn.hasDefaultValue(n),ae=L?this.pluralResolver.getSuffix(u,n.count,n):"",Ce=n.ordinal&&L?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",Ne=L&&!n.ordinal&&n.count===0,Te=Ne&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${ae}`]||n[`defaultValue${Ce}`]||n.defaultValue;let X=b;Z&&!b&&te&&(X=Te);const ie=Zn(X),ft=Object.prototype.toString.apply(X);if(Z&&X&&ie&&Y.indexOf(ft)<0&&!(q(F)&&Array.isArray(X))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const Oe=this.options.returnedObjectHandler?this.options.returnedObjectHandler(T,X,{...n,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return o?(m.res=Oe,m.usedParams=this.getUsedParamsDetails(n),m):Oe}if(r){const Oe=Array.isArray(X),M=Oe?[]:{},A=Oe?V:T;for(const $ in X)if(Object.prototype.hasOwnProperty.call(X,$)){const O=`${A}${r}${$}`;te&&!b?M[$]=this.translate(O,{...n,defaultValue:Zn(Te)?Te[$]:void 0,joinArrays:!1,ns:l}):M[$]=this.translate(O,{...n,joinArrays:!1,ns:l}),M[$]===O&&(M[$]=X[$])}b=M}}else if(Z&&q(F)&&Array.isArray(b))b=b.join(F),b&&(b=this.extendTranslation(b,e,n,s));else{let Oe=!1,M=!1;!this.isValidLookup(b)&&te&&(Oe=!0,b=Te),this.isValidLookup(b)||(M=!0,b=a);const $=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&M?void 0:b,O=te&&Te!==b&&this.options.updateMissing;if(M||Oe||O){if(this.logger.log(O?"updateKey":"missingKey",u,c,a,O?Te:b),r){const z=this.resolve(a,{...n,keySeparator:!1});z&&z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let w=[];const N=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&N&&N[0])for(let z=0;z<N.length;z++)w.push(N[z]);else this.options.saveMissingTo==="all"?w=this.languageUtils.toResolveHierarchy(n.lng||this.language):w.push(n.lng||this.language);const j=(z,Q,ue)=>{const xe=te&&ue!==b?ue:$;this.options.missingKeyHandler?this.options.missingKeyHandler(z,c,Q,xe,O,n):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(z,c,Q,xe,O,n),this.emit("missingKey",z,c,Q,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&L?w.forEach(z=>{const Q=this.pluralResolver.getSuffixes(z,n);Ne&&n[`defaultValue${this.options.pluralSeparator}zero`]&&Q.indexOf(`${this.options.pluralSeparator}zero`)<0&&Q.push(`${this.options.pluralSeparator}zero`),Q.forEach(ue=>{j([z],a+ue,n[`defaultValue${ue}`]||Te)})}):j(w,a,Te))}b=this.extendTranslation(b,e,n,m,s),M&&b===a&&this.options.appendNamespaceToMissingKey&&(b=`${c}${d}${a}`),(M||Oe)&&this.options.parseMissingKeyHandler&&(b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${d}${a}`:a,Oe?b:void 0,n))}return o?(m.res=b,m.usedParams=this.getUsedParamsDetails(n),m):b}extendTranslation(e,t,s,n,o){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...s},s.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init({...s,interpolation:{...this.options.interpolation,...s.interpolation}});const l=q(e)&&(s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(l){const u=e.match(this.interpolator.nestingRegexp);c=u&&u.length}let d=s.replace&&!q(s.replace)?s.replace:s;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,s.lng||this.language||n.usedLng,s),l){const u=e.match(this.interpolator.nestingRegexp),p=u&&u.length;c<p&&(s.nest=!1)}!s.lng&&n&&n.res&&(s.lng=this.language||n.usedLng),s.nest!==!1&&(e=this.interpolator.nest(e,(...u)=>o?.[0]===u[0]&&!s.context?(this.logger.warn(`It seems you are nesting recursively key: ${u[0]} in key: ${t[0]}`),null):this.translate(...u,t),s)),s.interpolation&&this.interpolator.reset()}const r=s.postProcess||this.options.postProcess,a=q(r)?[r]:r;return e!=null&&a?.length&&s.applyPostProcessor!==!1&&(e=dc.handle(a,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(s)},...s}:s,this)),e}resolve(e,t={}){let s,n,o,r,a;return q(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(s))return;const c=this.extractFromKey(l,t),d=c.key;n=d;let u=c.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const p=t.count!==void 0&&!q(t.count),m=p&&!t.ordinal&&t.count===0,b=t.context!==void 0&&(q(t.context)||typeof t.context=="number")&&t.context!=="",T=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);u.forEach(V=>{this.isValidLookup(s)||(a=V,!ua[`${T[0]}-${V}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(a)&&(ua[`${T[0]}-${V}`]=!0,this.logger.warn(`key "${n}" for languages "${T.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),T.forEach(Y=>{if(this.isValidLookup(s))return;r=Y;const F=[d];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(F,d,Y,V,t);else{let L;p&&(L=this.pluralResolver.getSuffix(Y,t.count,t));const te=`${this.options.pluralSeparator}zero`,ae=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(t.ordinal&&L.indexOf(ae)===0&&F.push(d+L.replace(ae,this.options.pluralSeparator)),F.push(d+L),m&&F.push(d+te)),b){const Ce=`${d}${this.options.contextSeparator||"_"}${t.context}`;F.push(Ce),p&&(t.ordinal&&L.indexOf(ae)===0&&F.push(Ce+L.replace(ae,this.options.pluralSeparator)),F.push(Ce+L),m&&F.push(Ce+te))}}let Z;for(;Z=F.pop();)this.isValidLookup(s)||(o=Z,s=this.getResource(Y,V,Z,t))}))})}),{res:s,usedKey:n,exactUsedKey:o,usedLng:r,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,s,n={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,s,n):this.resourceStore.getResource(e,t,s,n)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],s=e.replace&&!q(e.replace);let n=s?e.replace:e;if(s&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!s){n={...n};for(const o of t)delete n[o]}return n}static hasDefaultValue(e){const t="defaultValue";for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&t===s.substring(0,t.length)&&e[s]!==void 0)return!0;return!1}}class ha{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ot.create("languageUtils")}getScriptPartFromCode(e){if(e=Ts(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ts(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(q(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(s=>{if(t)return;const n=this.formatLanguageCode(s);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(s=>{if(t)return;const n=this.getScriptPartFromCode(s);if(this.isSupportedCode(n))return t=n;const o=this.getLanguagePartFromCode(s);if(this.isSupportedCode(o))return t=o;t=this.options.supportedLngs.find(r=>{if(r===o)return r;if(!(r.indexOf("-")<0&&o.indexOf("-")<0)&&(r.indexOf("-")>0&&o.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===o||r.indexOf(o)===0&&o.length>1))return r})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),q(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let s=e[t];return s||(s=e[this.getScriptPartFromCode(t)]),s||(s=e[this.formatLanguageCode(t)]),s||(s=e[this.getLanguagePartFromCode(t)]),s||(s=e.default),s||[]}toResolveHierarchy(e,t){const s=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),n=[],o=r=>{r&&(this.isSupportedCode(r)?n.push(r):this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`))};return q(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):q(e)&&o(this.formatLanguageCode(e)),s.forEach(r=>{n.indexOf(r)<0&&o(this.formatLanguageCode(r))}),n}}const fa={zero:0,one:1,two:2,few:3,many:4,other:5},pa={select:i=>i===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class $f{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=Ot.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const s=Ts(e==="dev"?"en":e),n=t.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:s,type:n});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let r;try{r=new Intl.PluralRules(s,{type:n})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),pa;if(!e.match(/-|_/))return pa;const l=this.languageUtils.getLanguagePartFromCode(e);r=this.getRule(l,t)}return this.pluralRulesCache[o]=r,r}needsPlural(e,t={}){let s=this.getRule(e,t);return s||(s=this.getRule("dev",t)),s?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,s={}){return this.getSuffixes(e,s).map(n=>`${t}${n}`)}getSuffixes(e,t={}){let s=this.getRule(e,t);return s||(s=this.getRule("dev",t)),s?s.resolvedOptions().pluralCategories.sort((n,o)=>fa[n]-fa[o]).map(n=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${n}`):[]}getSuffix(e,t,s={}){const n=this.getRule(e,s);return n?`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,s))}}const ga=(i,e,t,s=".",n=!0)=>{let o=ff(i,e,t);return!o&&n&&q(t)&&(o=Oo(i,t,s),o===void 0&&(o=Oo(e,t,s))),o},Xn=i=>i.replace(/\$/g,"$$$$");class ma{constructor(e={}){this.logger=Ot.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(t=>t),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:s,useRawValueToEscape:n,prefix:o,prefixEscaped:r,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:d,unescapePrefix:u,nestingPrefix:p,nestingPrefixEscaped:m,nestingSuffix:b,nestingSuffixEscaped:T,nestingOptionsSeparator:V,maxReplaces:Y,alwaysFormat:F}=e.interpolation;this.escape=t!==void 0?t:gf,this.escapeValue=s!==void 0?s:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=o?ai(o):r||"{{",this.suffix=a?ai(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=d?"":u||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=p?ai(p):m||ai("$t("),this.nestingSuffix=b?ai(b):T||ai(")"),this.nestingOptionsSeparator=V||",",this.maxReplaces=Y||1e3,this.alwaysFormat=F!==void 0?F:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,s)=>t?.source===s?(t.lastIndex=0,t):new RegExp(s,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,s,n){let o,r,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=m=>{if(m.indexOf(this.formatSeparator)<0){const Y=ga(t,l,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(Y,void 0,s,{...n,...t,interpolationkey:m}):Y}const b=m.split(this.formatSeparator),T=b.shift().trim(),V=b.join(this.formatSeparator).trim();return this.format(ga(t,l,T,this.options.keySeparator,this.options.ignoreJSONStructure),V,s,{...n,...t,interpolationkey:T})};this.resetRegExp();const d=n?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=n?.interpolation?.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>Xn(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?Xn(this.escape(m)):Xn(m)}].forEach(m=>{for(a=0;o=m.regex.exec(e);){const b=o[1].trim();if(r=c(b),r===void 0)if(typeof d=="function"){const V=d(e,o,n);r=q(V)?V:""}else if(n&&Object.prototype.hasOwnProperty.call(n,b))r="";else if(u){r=o[0];continue}else this.logger.warn(`missed to pass in variable ${b} for interpolating ${e}`),r="";else!q(r)&&!this.useRawValueToEscape&&(r=ra(r));const T=m.safeValue(r);if(e=e.replace(o[0],T),u?(m.regex.lastIndex+=r.length,m.regex.lastIndex-=o[0].length):m.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t,s={}){let n,o,r;const a=(l,c)=>{const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const u=l.split(new RegExp(`${ai(d)}[ ]*{`));let p=`{${u[1]}`;l=u[0],p=this.interpolate(p,r);const m=p.match(/'/g),b=p.match(/"/g);((m?.length??0)%2===0&&!b||(b?.length??0)%2!==0)&&(p=p.replace(/'/g,'"'));try{r=JSON.parse(p),c&&(r={...c,...r})}catch(T){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,T),`${l}${d}${p}`}return r.defaultValue&&r.defaultValue.indexOf(this.prefix)>-1&&delete r.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];r={...s},r=r.replace&&!q(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;const c=/{.*}/.test(n[1])?n[1].lastIndexOf("}")+1:n[1].indexOf(this.formatSeparator);if(c!==-1&&(l=n[1].slice(c).split(this.formatSeparator).map(d=>d.trim()).filter(Boolean),n[1]=n[1].slice(0,c)),o=t(a.call(this,n[1].trim(),r),r),o&&n[0]===e&&!q(o))return o;q(o)||(o=ra(o)),o||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),o=""),l.length&&(o=l.reduce((d,u)=>this.format(d,u,s.lng,{...s,interpolationkey:n[1].trim()}),o.trim())),e=e.replace(n[0],o),this.regexp.lastIndex=0}return e}}const Cf=i=>{let e=i.toLowerCase().trim();const t={};if(i.indexOf("(")>-1){const s=i.split("(");e=s[0].toLowerCase().trim();const n=s[1].substring(0,s[1].length-1);e==="currency"&&n.indexOf(":")<0?t.currency||(t.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?t.range||(t.range=n.trim()):n.split(";").forEach(r=>{if(r){const[a,...l]=r.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),d=a.trim();t[d]||(t[d]=c),c==="false"&&(t[d]=!1),c==="true"&&(t[d]=!0),isNaN(c)||(t[d]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},ba=i=>{const e={};return(t,s,n)=>{let o=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(o={...o,[n.interpolationkey]:void 0});const r=s+JSON.stringify(o);let a=e[r];return a||(a=i(Ts(s),n),e[r]=a),a(t)}},Sf=i=>(e,t,s)=>i(Ts(t),s)(e);class kf{constructor(e={}){this.logger=Ot.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const s=t.cacheInBuiltFormats?ba:Sf;this.formats={number:s((n,o)=>{const r=new Intl.NumberFormat(n,{...o});return a=>r.format(a)}),currency:s((n,o)=>{const r=new Intl.NumberFormat(n,{...o,style:"currency"});return a=>r.format(a)}),datetime:s((n,o)=>{const r=new Intl.DateTimeFormat(n,{...o});return a=>r.format(a)}),relativetime:s((n,o)=>{const r=new Intl.RelativeTimeFormat(n,{...o});return a=>r.format(a,o.range||"day")}),list:s((n,o)=>{const r=new Intl.ListFormat(n,{...o});return a=>r.format(a)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=ba(t)}format(e,t,s,n={}){const o=t.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(a=>a.indexOf(")")>-1)){const a=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,a)].join(this.formatSeparator)}return o.reduce((a,l)=>{const{formatName:c,formatOptions:d}=Cf(l);if(this.formats[c]){let u=a;try{const p=n?.formatParams?.[n.interpolationkey]||{},m=p.locale||p.lng||n.locale||n.lng||s;u=this.formats[c](a,m,{...d,...n,...p})}catch(p){this.logger.warn(p)}return u}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const Tf=(i,e)=>{i.pending[e]!==void 0&&(delete i.pending[e],i.pendingCount--)};class Of extends On{constructor(e,t,s,n={}){super(),this.backend=e,this.store=t,this.services=s,this.languageUtils=s.languageUtils,this.options=n,this.logger=Ot.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(s,n.backend,n)}queueLoad(e,t,s,n){const o={},r={},a={},l={};return e.forEach(c=>{let d=!0;t.forEach(u=>{const p=`${c}|${u}`;!s.reload&&this.store.hasResourceBundle(c,u)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?r[p]===void 0&&(r[p]=!0):(this.state[p]=1,d=!1,r[p]===void 0&&(r[p]=!0),o[p]===void 0&&(o[p]=!0),l[u]===void 0&&(l[u]=!0)))}),d||(a[c]=!0)}),(Object.keys(o).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(o),pending:Object.keys(r),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,s){const n=e.split("|"),o=n[0],r=n[1];t&&this.emit("failedLoading",o,r,t),!t&&s&&this.store.addResourceBundle(o,r,s,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&s&&(this.state[e]=0);const a={};this.queue.forEach(l=>{hf(l.loaded,[o],r),Tf(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const d=l.loaded[c];d.length&&d.forEach(u=>{a[c][u]===void 0&&(a[c][u]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,s,n=0,o=this.retryTimeout,r){if(!e.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:s,tried:n,wait:o,callback:r});return}this.readingCalls++;const a=(c,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(c&&d&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,s,n+1,o*2,r)},o);return}r(c,d)},l=this.backend[s].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(d=>a(null,d)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t,s={},n){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();q(e)&&(e=this.languageUtils.toResolveHierarchy(e)),q(t)&&(t=[t]);const o=this.queueLoad(e,t,s,n);if(!o.toLoad.length)return o.pending.length||n(),null;o.toLoad.forEach(r=>{this.loadOne(r)})}load(e,t,s){this.prepareLoading(e,t,{},s)}reload(e,t,s){this.prepareLoading(e,t,{reload:!0},s)}loadOne(e,t=""){const s=e.split("|"),n=s[0],o=s[1];this.read(n,o,"read",void 0,void 0,(r,a)=>{r&&this.logger.warn(`${t}loading namespace ${o} for language ${n} failed`,r),!r&&a&&this.logger.log(`${t}loaded namespace ${o} for language ${n}`,a),this.loaded(e,r,a)})}saveMissing(e,t,s,n,o,r={},a=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend?.create){const l={...r,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let d;c.length===5?d=c(e,t,s,n,l):d=c(e,t,s,n),d&&typeof d.then=="function"?d.then(u=>a(null,u)).catch(a):a(null,d)}catch(d){a(d)}else c(e,t,s,n,a,l)}!e||!e[0]||this.store.addResource(e[0],t,s,n)}}}const Kn=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:i=>{let e={};if(typeof i[1]=="object"&&(e=i[1]),q(i[1])&&(e.defaultValue=i[1]),q(i[2])&&(e.tDescription=i[2]),typeof i[2]=="object"||typeof i[3]=="object"){const t=i[3]||i[2];Object.keys(t).forEach(s=>{e[s]=t[s]})}return e},interpolation:{escapeValue:!0,format:i=>i,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),va=i=>(q(i.ns)&&(i.ns=[i.ns]),q(i.fallbackLng)&&(i.fallbackLng=[i.fallbackLng]),q(i.fallbackNS)&&(i.fallbackNS=[i.fallbackNS]),i.supportedLngs?.indexOf?.("cimode")<0&&(i.supportedLngs=i.supportedLngs.concat(["cimode"])),typeof i.initImmediate=="boolean"&&(i.initAsync=i.initImmediate),i),zs=()=>{},If=i=>{Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach(t=>{typeof i[t]=="function"&&(i[t]=i[t].bind(i))})},hc="__i18next_supportNoticeShown",Rf=()=>typeof globalThis<"u"&&!!globalThis[hc],Ef=()=>{typeof globalThis<"u"&&(globalThis[hc]=!0)},Af=i=>!!(i?.modules?.backend?.name?.indexOf("Locize")>0||i?.modules?.backend?.constructor?.name?.indexOf("Locize")>0||i?.options?.backend?.backends&&i.options.backend.backends.some(e=>e?.name?.indexOf("Locize")>0||e?.constructor?.name?.indexOf("Locize")>0)||i?.options?.backend?.projectId||i?.options?.backend?.backendOptions&&i.options.backend.backendOptions.some(e=>e?.projectId));class ms extends On{constructor(e={},t){if(super(),this.options=va(e),this.services={},this.logger=Ot,this.modules={external:[]},If(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(q(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const s=Kn();this.options={...s,...this.options,...va(e)},this.options.interpolation={...s.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=s.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!Af(this)&&!Rf()&&(typeof console<"u"&&typeof console.info<"u"&&console.info("🌐 i18next is maintained with support from Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),Ef());const n=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?Ot.init(n(this.modules.logger),this.options):Ot.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=kf;const d=new ha(this.options);this.store=new da(this.options.resources,this.options);const u=this.services;u.logger=Ot,u.resourceStore=this.store,u.languageUtils=d,u.pluralResolver=new $f(d,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==s.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),c&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(u.formatter=n(c),u.formatter.init&&u.formatter.init(u,this.options),this.options.interpolation.format=u.formatter.format.bind(u.formatter)),u.interpolator=new ma(this.options),u.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},u.backendConnector=new Of(n(this.modules.backend),u.resourceStore,u,this.options),u.backendConnector.on("*",(m,...b)=>{this.emit(m,...b)}),this.modules.languageDetector&&(u.languageDetector=n(this.modules.languageDetector),u.languageDetector.init&&u.languageDetector.init(u,this.options.detection,this.options)),this.modules.i18nFormat&&(u.i18nFormat=n(this.modules.i18nFormat),u.i18nFormat.init&&u.i18nFormat.init(this)),this.translator=new hn(this.services,this.options),this.translator.on("*",(m,...b)=>{this.emit(m,...b)}),this.modules.external.forEach(m=>{m.init&&m.init(this)})}if(this.format=this.options.interpolation.format,t||(t=zs),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...d)=>this.store[c](...d)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...d)=>(this.store[c](...d),this)});const a=es(),l=()=>{const c=(d,u)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(u),t(d,u)};if(this.languages&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),a}loadResources(e,t=zs){let s=t;const n=q(e)?e:this.language;if(typeof e=="function"&&(s=e),!this.options.resources||this.options.partialBundledLanguages){if(n?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const o=[],r=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&o.indexOf(c)<0&&o.push(c)})};n?r(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>r(l)),this.options.preload?.forEach?.(a=>r(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(a)})}else s(null)}reloadResources(e,t,s){const n=es();return typeof e=="function"&&(s=e,e=void 0),typeof t=="function"&&(s=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),s||(s=zs),this.services.backendConnector.reload(e,t,o=>{n.resolve(),s(o)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&dc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let t=0;t<this.languages.length;t++){const s=this.languages[t];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const s=es();this.emit("languageChanging",e);const n=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},o=(a,l)=>{l?this.isLanguageChangingTo===e&&(n(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,s.resolve((...c)=>this.t(...c)),t&&t(a,(...c)=>this.t(...c))},r=a=>{!e&&!a&&this.services.languageDetector&&(a=[]);const l=q(a)?a:a&&a[0],c=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(q(a)?[a]:a);c&&(this.language||n(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector?.cacheUserLanguage?.(c)),this.loadResources(c,d=>{o(d,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?r(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(r):this.services.languageDetector.detect(r):r(e),s}getFixedT(e,t,s){const n=(o,r,...a)=>{let l;typeof r!="object"?l=this.options.overloadTranslationOptionHandler([o,r].concat(a)):l={...r},l.lng=l.lng||n.lng,l.lngs=l.lngs||n.lngs,l.ns=l.ns||n.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||s||n.keyPrefix);const c=this.options.keySeparator||".";let d;return l.keyPrefix&&Array.isArray(o)?d=o.map(u=>(typeof u=="function"&&(u=Io(u,{...this.options,...r})),`${l.keyPrefix}${c}${u}`)):(typeof o=="function"&&(o=Io(o,{...this.options,...r})),d=l.keyPrefix?`${l.keyPrefix}${c}${o}`:o),this.t(d,l)};return q(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=s,n}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const s=t.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const r=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,r);if(a!==void 0)return a}return!!(this.hasResourceBundle(s,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||r(s,e)&&(!n||r(o,e)))}loadNamespaces(e,t){const s=es();return this.options.ns?(q(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{s.resolve(),t&&t(n)}),s):(t&&t(),Promise.resolve())}loadLanguages(e,t){const s=es();q(e)&&(e=[e]);const n=this.options.preload||[],o=e.filter(r=>n.indexOf(r)<0&&this.services.languageUtils.isSupportedCode(r));return o.length?(this.options.preload=n.concat(o),this.loadResources(r=>{s.resolve(),t&&t(r)}),s):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const n=new Intl.Locale(e);if(n&&n.getTextInfo){const o=n.getTextInfo();if(o&&o.direction)return o.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services?.languageUtils||new ha(Kn());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.indexOf(s.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const s=new ms(e,t);return s.createInstance=ms.createInstance,s}cloneInstance(e={},t=zs){const s=e.forkResourceStore;s&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},o=new ms(n);if((e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},s){const a=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},l[c]=Object.keys(l[c]).reduce((d,u)=>(d[u]={...l[c][u]},d),l[c]),l),{});o.store=new da(a,n),o.services.resourceStore=o.store}if(e.interpolation){const l={...Kn().interpolation,...this.options.interpolation,...e.interpolation},c={...n,interpolation:l};o.services.interpolator=new ma(c)}return o.translator=new hn(o.services,n),o.translator.on("*",(a,...l)=>{o.emit(a,...l)}),o.init(n,t),o.translator.options=n,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const _e=ms.createInstance();_e.createInstance;_e.dir;_e.init;_e.loadResources;_e.reloadResources;_e.use;_e.changeLanguage;_e.getFixedT;_e.t;_e.exists;_e.setDefaultNamespace;_e.hasLoadedNamespace;_e.loadNamespaces;_e.loadLanguages;const fc=Symbol();function Df(i,{i18next:e,rerenderOn:t=["languageChanged","loaded","added","removed"],slotStart:s="{",slotEnd:n="}"}){const o=Vd(new Date),r=()=>Rl(()=>{o.value=new Date}),a=()=>o.value;t.forEach(d=>{switch(d){case"added":case"removed":e.store?.on(d,r);break;default:e.on(d,r);break}}),i.component("i18next",Lf);const l=()=>e.isInitialized;i.config.globalProperties.$t=ya(e.t.bind(e),a,l);const c=new Proxy(e,{get(d,u){return a(),Reflect.get(d,u)}});i.config.globalProperties.$i18next=c,i.provide(fc,{i18next:c,slotPattern:Pf(s,n),withAccessRecording(d,u){return ya(d,a,u)}})}function ya(i,e,t){return new Proxy(i,{apply:function(s,n,o){return e(),t()?Reflect.apply(s,n,o):""}})}function _f(){const i=ds(fc);if(!i)throw new Error("i18next-vue: Make sure to register the i18next-vue plugin using app.use(...).");return i}function Pf(i,e){const t=`${i}\\s*([a-z0-9\\-]+)\\s*${e}`;return new RegExp(t,"gi")}const Lf=au({props:{translation:{type:String,required:!0}},setup(i,{slots:e}){const{slotPattern:t}=_f();return()=>{const s=i.translation,n=[];let o,r=0;for(;(o=t.exec(s))!==null;){n.push(s.substring(r,o.index));const a=e[o[1]];a?n.push(...a()):n.push(o[0]),r=t.lastIndex}return n.push(s.substring(r)),n}}}),{slice:Ff,forEach:Mf}=[];function Nf(i){return Mf.call(Ff.call(arguments,1),e=>{if(e)for(const t in e)i[t]===void 0&&(i[t]=e[t])}),i}function Bf(i){return typeof i!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(i))}const xa=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Hf=function(i,e){const s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},n=encodeURIComponent(e);let o=`${i}=${n}`;if(s.maxAge>0){const r=s.maxAge-0;if(Number.isNaN(r))throw new Error("maxAge should be a Number");o+=`; Max-Age=${Math.floor(r)}`}if(s.domain){if(!xa.test(s.domain))throw new TypeError("option domain is invalid");o+=`; Domain=${s.domain}`}if(s.path){if(!xa.test(s.path))throw new TypeError("option path is invalid");o+=`; Path=${s.path}`}if(s.expires){if(typeof s.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+=`; Expires=${s.expires.toUTCString()}`}if(s.httpOnly&&(o+="; HttpOnly"),s.secure&&(o+="; Secure"),s.sameSite)switch(typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s.partitioned&&(o+="; Partitioned"),o},wa={create(i,e,t,s){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(n.expires=new Date,n.expires.setTime(n.expires.getTime()+t*60*1e3)),s&&(n.domain=s),document.cookie=Hf(i,e,n)},read(i){const e=`${i}=`,t=document.cookie.split(";");for(let s=0;s<t.length;s++){let n=t[s];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(e)===0)return n.substring(e.length,n.length)}return null},remove(i,e){this.create(i,"",-1,e)}};var Vf={name:"cookie",lookup(i){let{lookupCookie:e}=i;if(e&&typeof document<"u")return wa.read(e)||void 0},cacheUserLanguage(i,e){let{lookupCookie:t,cookieMinutes:s,cookieDomain:n,cookieOptions:o}=e;t&&typeof document<"u"&&wa.create(t,i,s,n,o)}},jf={name:"querystring",lookup(i){let{lookupQuerystring:e}=i,t;if(typeof window<"u"){let{search:s}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(s=window.location.hash.substring(window.location.hash.indexOf("?")));const o=s.substring(1).split("&");for(let r=0;r<o.length;r++){const a=o[r].indexOf("=");a>0&&o[r].substring(0,a)===e&&(t=o[r].substring(a+1))}}return t}},zf={name:"hash",lookup(i){let{lookupHash:e,lookupFromHashIndex:t}=i,s;if(typeof window<"u"){const{hash:n}=window.location;if(n&&n.length>2){const o=n.substring(1);if(e){const r=o.split("&");for(let a=0;a<r.length;a++){const l=r[a].indexOf("=");l>0&&r[a].substring(0,l)===e&&(s=r[a].substring(l+1))}}if(s)return s;if(!s&&t>-1){const r=n.match(/\/([a-zA-Z-]*)/g);return Array.isArray(r)?r[typeof t=="number"?t:0]?.replace("/",""):void 0}}}return s}};let Ci=null;const $a=()=>{if(Ci!==null)return Ci;try{if(Ci=typeof window<"u"&&window.localStorage!==null,!Ci)return!1;const i="i18next.translate.boo";window.localStorage.setItem(i,"foo"),window.localStorage.removeItem(i)}catch{Ci=!1}return Ci};var Uf={name:"localStorage",lookup(i){let{lookupLocalStorage:e}=i;if(e&&$a())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(i,e){let{lookupLocalStorage:t}=e;t&&$a()&&window.localStorage.setItem(t,i)}};let Si=null;const Ca=()=>{if(Si!==null)return Si;try{if(Si=typeof window<"u"&&window.sessionStorage!==null,!Si)return!1;const i="i18next.translate.boo";window.sessionStorage.setItem(i,"foo"),window.sessionStorage.removeItem(i)}catch{Si=!1}return Si};var qf={name:"sessionStorage",lookup(i){let{lookupSessionStorage:e}=i;if(e&&Ca())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(i,e){let{lookupSessionStorage:t}=e;t&&Ca()&&window.sessionStorage.setItem(t,i)}},Wf={name:"navigator",lookup(i){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:s,language:n}=navigator;if(t)for(let o=0;o<t.length;o++)e.push(t[o]);s&&e.push(s),n&&e.push(n)}return e.length>0?e:void 0}},Gf={name:"htmlTag",lookup(i){let{htmlTag:e}=i,t;const s=e||(typeof document<"u"?document.documentElement:null);return s&&typeof s.getAttribute=="function"&&(t=s.getAttribute("lang")),t}},Yf={name:"path",lookup(i){let{lookupFromPathIndex:e}=i;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?t[typeof e=="number"?e:0]?.replace("/",""):void 0}},Jf={name:"subdomain",lookup(i){let{lookupFromSubdomainIndex:e}=i;const t=typeof e=="number"?e+1:1,s=typeof window<"u"&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(s)return s[t]}};let pc=!1;try{document.cookie,pc=!0}catch{}const gc=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];pc||gc.splice(1,1);const Qf=()=>({order:gc,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:i=>i});class mc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Nf(t,this.options||{},Qf()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=n=>n.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=s,this.addDetector(Vf),this.addDetector(jf),this.addDetector(Uf),this.addDetector(qf),this.addDetector(Wf),this.addDetector(Gf),this.addDetector(Yf),this.addDetector(Jf),this.addDetector(zf)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(s=>{if(this.detectors[s]){let n=this.detectors[s].lookup(this.options);n&&typeof n=="string"&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(s=>s!=null&&!Bf(s)).map(s=>this.options.convertDetectedLanguage(s)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(s=>{this.detectors[s]&&this.detectors[s].cacheUserLanguage(e,this.options)}))}}mc.type="languageDetector";const Zf={install(i,e){_e.use(mc).init({...e}),i.use(Df,{i18next:_e})}},Xf="导出",Kf={"Export Excel":"导出Excel","Save Settings":"保存设置","History Settings":"历史设置：","Do not use history settings":"不使用历史设置",Export:Xf,"Property Name":"属性","Column Name":"Excel列名","Column Type":"Excel类型",String:"文本",Number:"数字",Date:"日期"},ep="Export",tp={"Export Excel":"Export Excel","Save Settings":"Save Settings","History Settings":"History Settings:","Do not use history settings":"Don't use history settings",Export:ep,"Property Name":"Property Name","Column Name":"Column Name","Column Type":"Column Type",String:"String",Number:"Number",Date:"Date"},ip={debug:!1,fallbackLng:"en",detection:{convertDetectedLanguage:i=>i.replace("-","").replace("_","")},resources:{en:{nativeName:"English",translation:tp},zhCN:{nativeName:"简体中文",translation:Kf}}},ei=(function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}})();ei.trustedTypes===void 0&&(ei.trustedTypes={createPolicy:(i,e)=>e});const bc={configurable:!1,enumerable:!1,writable:!1};ei.FAST===void 0&&Reflect.defineProperty(ei,"FAST",Object.assign({value:Object.create(null)},bc));const Os=ei.FAST;if(Os.getById===void 0){const i=Object.create(null);Reflect.defineProperty(Os,"getById",Object.assign({value(e,t){let s=i[e];return s===void 0&&(s=t?i[e]=t():null),s}},bc))}const gi=Object.freeze([]);function vc(){const i=new WeakMap;return function(e){let t=i.get(e);if(t===void 0){let s=Reflect.getPrototypeOf(e);for(;t===void 0&&s!==null;)t=i.get(s),s=Reflect.getPrototypeOf(s);t=t===void 0?[]:t.slice(0),i.set(e,t)}return t}}const eo=ei.FAST.getById(1,()=>{const i=[],e=[];function t(){if(e.length)throw e.shift()}function s(r){try{r.call()}catch(a){e.push(a),setTimeout(t,0)}}function n(){let a=0;for(;a<i.length;)if(s(i[a]),a++,a>1024){for(let l=0,c=i.length-a;l<c;l++)i[l]=i[l+a];i.length-=a,a=0}i.length=0}function o(r){i.length<1&&ei.requestAnimationFrame(n),i.push(r)}return Object.freeze({enqueue:o,process:n})}),yc=ei.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let to=yc;const bs=`fast-${Math.random().toString(36).substring(2,8)}`,xc=`${bs}{`,ir=`}${bs}`,ee=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(to!==yc)throw new Error("The HTML policy can only be set once.");to=i},createHTML(i){return to.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(bs)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${bs}:`,""))},createInterpolationPlaceholder(i){return`${xc}${i}${ir}`},createCustomAttributePlaceholder(i,e){return`${i}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(i){return`<!--${bs}:${i}-->`},queueUpdate:eo.enqueue,processUpdates:eo.process,nextUpdate(){return new Promise(eo.enqueue)},setAttribute(i,e,t){t==null?i.removeAttribute(e):i.setAttribute(e,t)},setBooleanAttribute(i,e,t){t?i.setAttribute(e,""):i.removeAttribute(e)},removeChildNodes(i){for(let e=i.firstChild;e!==null;e=i.firstChild)i.removeChild(e)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class fn{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const s=t.indexOf(e);s!==-1&&t.splice(s,1)}}notify(e){const t=this.spillover,s=this.source;if(t===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(s,e),o!==void 0&&o.handleChange(s,e)}else for(let n=0,o=t.length;n<o;++n)t[n].handleChange(s,e)}}class wc{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const s=this.subscribers[e];s!==void 0&&s.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var s;if(t){let n=this.subscribers[t];n===void 0&&(this.subscribers[t]=n=new fn(this.source)),n.subscribe(e)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new fn(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var s;if(t){const n=this.subscribers[t];n!==void 0&&n.unsubscribe(e)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(e)}}const K=Os.getById(2,()=>{const i=/(:|&&|\|\||if)/,e=new WeakMap,t=ee.queueUpdate;let s,n=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=n(c):e.set(c,d=new wc(c))),d}const r=vc();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return s!==void 0&&s.watch(d,this.name),d[this.field]}setValue(d,u){const p=this.field,m=d[p];if(m!==u){d[p]=u;const b=d[this.callback];typeof b=="function"&&b.call(d,m,u),o(d).notify(this.name)}}}class l extends fn{constructor(d,u,p=!1){super(d,u),this.binding=d,this.isVolatileBinding=p,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();const p=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const m=this.binding(d,u);return s=p,m}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){const p=this.last,m=o(d),b=p===null?this.first:{};if(b.propertySource=d,b.propertyName=u,b.notifier=m,m.subscribe(this,u),p!==null){if(!this.needsRefresh){let T;s=void 0,T=p.propertySource[p.propertyName],s=this,d===T&&(this.needsRefresh=!0)}p.next=b}this.last=b}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){n=c},getNotifier:o,track(c,d){s!==void 0&&s.watch(c,d)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(c,d){o(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),r(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:r,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return i.test(c.toString())}})});function P(i,e){K.defineProperty(i,e)}function sp(i,e,t){return Object.assign({},t,{get:function(){return K.trackVolatile(),t.get.apply(this)}})}const Sa=Os.getById(3,()=>{let i=null;return{get(){return i},set(e){i=e}}});class Is{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Sa.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Sa.set(e)}}K.defineProperty(Is.prototype,"index");K.defineProperty(Is.prototype,"length");const vs=Object.seal(new Is);class In{constructor(){this.targetIndex=0}}class $c extends In{constructor(){super(...arguments),this.createPlaceholder=ee.createInterpolationPlaceholder}}class sr extends In{constructor(e,t,s){super(),this.name=e,this.behavior=t,this.options=s}createPlaceholder(e){return ee.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function np(i,e){this.source=i,this.context=e,this.bindingObserver===null&&(this.bindingObserver=K.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,e))}function op(i,e){this.source=i,this.context=e,this.target.addEventListener(this.targetName,this)}function rp(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function ap(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function lp(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function cp(i){ee.setAttribute(this.target,this.targetName,i)}function dp(i){ee.setBooleanAttribute(this.target,this.targetName,i)}function up(i){if(i==null&&(i=""),i.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=i.create():this.target.$fastTemplate!==i&&(e.isComposed&&(e.remove(),e.unbind()),e=i.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=i)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=i}}function hp(i){this.target[this.targetName]=i}function fp(i){const e=this.classVersions||Object.create(null),t=this.target;let s=this.version||0;if(i!=null&&i.length){const n=i.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const a=n[o];a!==""&&(e[a]=s,t.classList.add(a))}}if(this.classVersions=e,this.version=s+1,s!==0){s-=1;for(const n in e)e[n]===s&&t.classList.remove(n)}}class nr extends $c{constructor(e){super(),this.binding=e,this.bind=np,this.unbind=rp,this.updateTarget=cp,this.isBindingVolatile=K.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=hp,this.cleanedTargetName==="innerHTML"){const t=this.binding;this.binding=(s,n)=>ee.createHTML(t(s,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=dp;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=op,this.unbind=lp;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=fp);break}}targetAtContent(){this.updateTarget=up,this.unbind=ap}createBehavior(e){return new pp(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class pp{constructor(e,t,s,n,o,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=s,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Is.setEvent(e);const t=this.binding(this.source,this.context);Is.setEvent(null),t!==!0&&e.preventDefault()}}let io=null;class or{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){io=this}static borrow(e){const t=io||new or;return t.directives=e,t.reset(),io=null,t}}function gp(i){if(i.length===1)return i[0];let e;const t=i.length,s=i.map(r=>typeof r=="string"?()=>r:(e=r.targetName||e,r.binding)),n=(r,a)=>{let l="";for(let c=0;c<t;++c)l+=s[c](r,a);return l},o=new nr(n);return o.targetName=e,o}const mp=ir.length;function Cc(i,e){const t=e.split(xc);if(t.length===1)return null;const s=[];for(let n=0,o=t.length;n<o;++n){const r=t[n],a=r.indexOf(ir);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));s.push(i.directives[c]),l=r.substring(a+mp)}l!==""&&s.push(l)}return s}function ka(i,e,t=!1){const s=e.attributes;for(let n=0,o=s.length;n<o;++n){const r=s[n],a=r.value,l=Cc(i,a);let c=null;l===null?t&&(c=new nr(()=>a),c.targetName=r.name):c=gp(l),c!==null&&(e.removeAttributeNode(r),n--,o--,i.addFactory(c))}}function bp(i,e,t){const s=Cc(i,e.textContent);if(s!==null){let n=e;for(let o=0,r=s.length;o<r;++o){const a=s[o],l=o===0?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",i.captureContentBinding(a)),n=l,i.targetIndex++,l!==e&&t.nextNode()}i.targetIndex--}}function vp(i,e){const t=i.content;document.adoptNode(t);const s=or.borrow(e);ka(s,i,!0);const n=s.behaviorFactories;s.reset();const o=ee.createTemplateWalker(t);let r;for(;r=o.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:ka(s,r);break;case 3:bp(s,r,o);break;case 8:ee.isMarker(r)&&s.addFactory(e[ee.extractDirectiveIndexFromMarker(r)])}let a=0;(ee.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:t,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}const so=document.createRange();class Sc{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const s=e.parentNode;let n=this.firstChild,o;for(;n!==t;)o=n.nextSibling,s.insertBefore(n,e),n=o;s.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let s=this.firstChild,n;for(;s!==t;)n=s.nextSibling,e.appendChild(s),s=n;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let s=this.firstChild,n;for(;s!==t;)n=s.nextSibling,e.removeChild(s),s=n;e.removeChild(t);const o=this.behaviors,r=this.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}bind(e,t){const s=this.behaviors;if(this.source!==e)if(this.source!==null){const n=this.source;this.source=e,this.context=t;for(let o=0,r=s.length;o<r;++o){const a=s[o];a.unbind(n),a.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,o=s.length;n<o;++n)s[n].bind(e,t)}}unbind(){if(this.source===null)return;const e=this.behaviors,t=this.source;for(let s=0,n=e.length;s<n;++s)e[s].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){so.setStartBefore(e[0].firstChild),so.setEndAfter(e[e.length-1].lastChild),so.deleteContents();for(let t=0,s=e.length;t<s;++t){const n=e[t],o=n.behaviors,r=n.source;for(let a=0,l=o.length;a<l;++a)o[a].unbind(r)}}}}class Ta{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let c;const d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=ee.createHTML(d);const p=c.content.firstElementChild;p!==null&&p.tagName==="TEMPLATE"&&(c=p)}else c=d;const u=vp(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=ee.createTemplateWalker(t);let r=0,a=this.targetOffset,l=o.nextNode();for(let c=s.length;r<c;++r){const d=s[r],u=d.targetIndex;for(;l!==null;)if(a===u){n[r]=d.createBehavior(l);break}else l=o.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++r)n[r]=c[d].createBehavior(e)}return new Sc(t,n)}render(e,t,s){typeof t=="string"&&(t=document.getElementById(t)),s===void 0&&(s=t);const n=this.create(s);return n.bind(e,vs),n.appendTo(t),n}}const yp=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function re(i,...e){const t=[];let s="";for(let n=0,o=i.length-1;n<o;++n){const r=i[n];let a=e[n];if(s+=r,a instanceof Ta){const l=a;a=()=>l}if(typeof a=="function"&&(a=new nr(a)),a instanceof $c){const l=yp.exec(r);l!==null&&(a.targetName=l[2])}a instanceof In?(s+=a.createPlaceholder(t.length),t.push(a)):s+=a}return s+=i[i.length-1],new Ta(s,t)}class Ke{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}Ke.create=(()=>{if(ee.supportsAdoptedStyleSheets){const i=new Map;return e=>new xp(e,i)}return i=>new Cp(i)})();function rr(i){return i.map(e=>e instanceof Ke?rr(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function kc(i){return i.map(e=>e instanceof Ke?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}const Tc=Symbol("prependToAdoptedStyleSheets");function Oc(i){const e=[],t=[];return i.forEach(s=>(s[Tc]?e:t).push(s)),{prepend:e,append:t}}let Ic=(i,e)=>{const{prepend:t,append:s}=Oc(e);i.adoptedStyleSheets=[...t,...i.adoptedStyleSheets,...s]},Rc=(i,e)=>{i.adoptedStyleSheets=i.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(ee.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Ic=(i,e)=>{const{prepend:t,append:s}=Oc(e);i.adoptedStyleSheets.splice(0,0,...t),i.adoptedStyleSheets.push(...s)},Rc=(i,e)=>{for(const t of e){const s=i.adoptedStyleSheets.indexOf(t);s!==-1&&i.adoptedStyleSheets.splice(s,1)}}}catch{}class xp extends Ke{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=kc(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,t=this.styleSheetCache;this._styleSheets=rr(e).map(s=>{if(s instanceof CSSStyleSheet)return s;let n=t.get(s);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(s),t.set(s,n)),n})}return this._styleSheets}addStylesTo(e){Ic(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Rc(e,this.styleSheets),super.removeStylesFrom(e)}}let wp=0;function $p(){return`fast-style-class-${++wp}`}class Cp extends Ke{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=kc(e),this.styleSheets=rr(e),this.styleClass=$p()}addStylesTo(e){const t=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const o=document.createElement("style");o.innerHTML=t[n],o.className=s,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const t=e.querySelectorAll(`.${this.styleClass}`);for(let s=0,n=t.length;s<n;++s)e.removeChild(t[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const pn=Object.freeze({locate:vc()}),Ec={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},bt={toView(i){if(i==null)return null;const e=i*1;return isNaN(e)?null:e.toString()},fromView(i){if(i==null)return null;const e=i*1;return isNaN(e)?null:e}};class gn{constructor(e,t,s=t.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=s,this.mode=n,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,n==="boolean"&&o===void 0&&(this.converter=Ec)}setValue(e,t){const s=e[this.fieldName],n=this.converter;n!==void 0&&(t=n.fromView(t)),s!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,t),e.$fastController.notify(this.name))}getValue(e){return K.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,s=this.guards;s.has(e)||t==="fromView"||ee.queueUpdate(()=>{s.add(e);const n=e[this.fieldName];switch(t){case"reflect":const o=this.converter;ee.setAttribute(e,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":ee.setBooleanAttribute(e,this.attribute,n);break}s.delete(e)})}static collect(e,...t){const s=[];t.push(pn.locate(e));for(let n=0,o=t.length;n<o;++n){const r=t[n];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?s.push(new gn(e,c)):s.push(new gn(e,c.property,c.attribute,c.mode,c.converter))}}return s}}function y(i,e){let t;function s(n,o){arguments.length>1&&(t.property=o),pn.locate(n.constructor).push(t)}if(arguments.length>1){t={},s(i,e);return}return t=i===void 0?{}:i,s}const Oa={mode:"open"},Ia={},Ro=Os.getById(4,()=>{const i=new Map;return Object.freeze({register(e){return i.has(e.type)?!1:(i.set(e.type,e),!0)},getByType(e){return i.get(e)}})});class Rn{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const s=gn.collect(e,t.attributes),n=new Array(s.length),o={},r={};for(let a=0,l=s.length;a<l;++a){const c=s[a];n[a]=c.attribute,o[c.name]=c,r[c.attribute]=c}this.attributes=s,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=t.shadowOptions===void 0?Oa:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Oa),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Ia:Object.assign(Object.assign({},Ia),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?Ke.create(t.styles):t.styles instanceof Ke?t.styles:Ke.create([t.styles])}get isDefined(){return!!Ro.getByType(this.type)}define(e=customElements){const t=this.type;if(Ro.register(this)){const s=this.attributes,n=t.prototype;for(let o=0,r=s.length;o<r;++o)K.defineProperty(n,s[o]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}Rn.forType=Ro.getByType;const Ac=new WeakMap,Sp={bubbles:!0,composed:!0,cancelable:!0};function no(i){return i.shadowRoot||Ac.get(i)||null}class ar extends wc{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const s=t.shadowOptions;if(s!==void 0){const o=e.attachShadow(s);s.mode==="closed"&&Ac.set(e,o)}const n=K.getAccessors(e);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,a=n.length;r<a;++r){const l=n[r].name,c=e[l];c!==void 0&&(delete e[l],o[l]=c)}}}get isConnected(){return K.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,K.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const t=no(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const s=e.behaviors;e.addStylesTo(t),s!==null&&this.addBehaviors(s)}}removeStyles(e){const t=no(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const s=e.behaviors;e.removeStylesFrom(t),s!==null&&this.removeBehaviors(s)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),s=e.length,n=[];for(let o=0;o<s;++o){const r=e[o];t.has(r)?t.set(r,t.get(r)+1):(t.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,vs)}}removeBehaviors(e,t=!1){const s=this.behaviors;if(s===null)return;const n=e.length,o=[];for(let r=0;r<n;++r){const a=e[r];if(s.has(a)){const l=s.get(a)-1;l===0||t?s.delete(a)&&o.push(a):s.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<o.length;++a)o[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,vs);const t=this.behaviors;if(t!==null)for(const[s]of t)s.bind(e,vs);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const t=this.behaviors;if(t!==null){const s=this.element;for(const[n]of t)n.unbind(s)}}onAttributeChangedCallback(e,t,s){const n=this.definition.attributeLookup[e];n!==void 0&&n.onAttributeChangedCallback(this.element,s)}emit(e,t,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Sp),s))):!1}finishInitialization(){const e=this.element,t=this.boundObservables;if(t!==null){const n=Object.keys(t);for(let o=0,r=n.length;o<r;++o){const a=n[o];e[a]=t[a]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,s=no(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||ee.removeChildNodes(s),e&&(this.view=e.render(t,s,t))}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const s=Rn.forType(e.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new ar(e,s)}}function Ra(i){return class extends i{constructor(){super(),ar.forCustomElement(this)}$emit(e,t,s){return this.$fastController.emit(e,t,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,s){this.$fastController.onAttributeChangedCallback(e,t,s)}}}const En=Object.assign(Ra(HTMLElement),{from(i){return Ra(i)},define(i,e){return new Rn(i,e).define().type}});class Dc{createCSS(){return""}createBehavior(){}}function kp(i,e){const t=[];let s="";const n=[];for(let o=0,r=i.length-1;o<r;++o){s+=i[o];let a=e[o];if(a instanceof Dc){const l=a.createBehavior();a=a.createCSS(),l&&n.push(l)}a instanceof Ke||a instanceof CSSStyleSheet?(s.trim()!==""&&(t.push(s),s=""),t.push(a)):s+=a}return s+=i[i.length-1],s.trim()!==""&&t.push(s),{styles:t,behaviors:n}}function ye(i,...e){const{styles:t,behaviors:s}=kp(i,e),n=Ke.create(t);return s.length&&n.withBehaviors(...s),n}function pt(i,e,t){return{index:i,removed:e,addedCount:t}}const _c=0,Pc=1,Eo=2,Ao=3;function Tp(i,e,t,s,n,o){const r=o-n+1,a=t-e+1,l=new Array(r);let c,d;for(let u=0;u<r;++u)l[u]=new Array(a),l[u][0]=u;for(let u=0;u<a;++u)l[0][u]=u;for(let u=1;u<r;++u)for(let p=1;p<a;++p)i[e+p-1]===s[n+u-1]?l[u][p]=l[u-1][p-1]:(c=l[u-1][p]+1,d=l[u][p-1]+1,l[u][p]=c<d?c:d);return l}function Op(i){let e=i.length-1,t=i[0].length-1,s=i[e][t];const n=[];for(;e>0||t>0;){if(e===0){n.push(Eo),t--;continue}if(t===0){n.push(Ao),e--;continue}const o=i[e-1][t-1],r=i[e-1][t],a=i[e][t-1];let l;r<a?l=r<o?r:o:l=a<o?a:o,l===o?(o===s?n.push(_c):(n.push(Pc),s=o),e--,t--):l===r?(n.push(Ao),e--,s=r):(n.push(Eo),t--,s=a)}return n.reverse(),n}function Ip(i,e,t){for(let s=0;s<t;++s)if(i[s]!==e[s])return s;return t}function Rp(i,e,t){let s=i.length,n=e.length,o=0;for(;o<t&&i[--s]===e[--n];)o++;return o}function Ep(i,e,t,s){return e<t||s<i?-1:e===t||s===i?0:i<t?e<s?e-t:s-t:s<e?s-i:e-i}function Lc(i,e,t,s,n,o){let r=0,a=0;const l=Math.min(t-e,o-n);if(e===0&&n===0&&(r=Ip(i,s,l)),t===i.length&&o===s.length&&(a=Rp(i,s,l-r)),e+=r,n+=r,t-=a,o-=a,t-e===0&&o-n===0)return gi;if(e===t){const b=pt(e,[],0);for(;n<o;)b.removed.push(s[n++]);return[b]}else if(n===o)return[pt(e,[],t-e)];const c=Op(Tp(i,e,t,s,n,o)),d=[];let u,p=e,m=n;for(let b=0;b<c.length;++b)switch(c[b]){case _c:u!==void 0&&(d.push(u),u=void 0),p++,m++;break;case Pc:u===void 0&&(u=pt(p,[],0)),u.addedCount++,p++,u.removed.push(s[m]),m++;break;case Eo:u===void 0&&(u=pt(p,[],0)),u.addedCount++,p++;break;case Ao:u===void 0&&(u=pt(p,[],0)),u.removed.push(s[m]),m++;break}return u!==void 0&&d.push(u),d}const Ea=Array.prototype.push;function Ap(i,e,t,s){const n=pt(e,t,s);let o=!1,r=0;for(let a=0;a<i.length;a++){const l=i[a];if(l.index+=r,o)continue;const c=Ep(n.index,n.index+n.removed.length,l.index,l.index+l.addedCount);if(c>=0){i.splice(a,1),a--,r-=l.addedCount-l.removed.length,n.addedCount+=l.addedCount-c;const d=n.removed.length+l.removed.length-c;if(!n.addedCount&&!d)o=!0;else{let u=l.removed;if(n.index<l.index){const p=n.removed.slice(0,l.index-n.index);Ea.apply(p,u),u=p}if(n.index+n.removed.length>l.index+l.addedCount){const p=n.removed.slice(l.index+l.addedCount-n.index);Ea.apply(u,p)}n.removed=u,l.index<n.index&&(n.index=l.index)}}else if(n.index<l.index){o=!0,i.splice(a,0,n),a++;const d=n.addedCount-n.removed.length;l.index+=d,r+=d}}o||i.push(n)}function Dp(i){const e=[];for(let t=0,s=i.length;t<s;t++){const n=i[t];Ap(e,n.index,n.removed,n.addedCount)}return e}function _p(i,e){let t=[];const s=Dp(e);for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&t.push(r);continue}t=t.concat(Lc(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return t}let Aa=!1;function oo(i,e){let t=i.index;const s=e.length;return t>s?t=s-i.addedCount:t<0&&(t=s+i.removed.length+t-i.addedCount),t<0&&(t=0),i.index=t,i}class Pp extends fn{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,ee.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,ee.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(e===void 0&&t===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=t===void 0?_p(this.source,e):Lc(this.source,0,this.source.length,t,0,t.length);this.notify(s)}}function Lp(){if(Aa)return;Aa=!0,K.setArrayObserverFactory(l=>new Pp(l));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const e=i.pop,t=i.push,s=i.reverse,n=i.shift,o=i.sort,r=i.splice,a=i.unshift;i.pop=function(){const l=this.length>0,c=e.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(pt(this.length,[c],0)),c},i.push=function(){const l=t.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(oo(pt(this.length-arguments.length,[],arguments.length),this)),l},i.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=s.apply(this,arguments);return c!==void 0&&c.reset(l),d},i.shift=function(){const l=this.length>0,c=n.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(pt(0,[c],0)),c},i.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=o.apply(this,arguments);return c!==void 0&&c.reset(l),d},i.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(oo(pt(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},i.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(oo(pt(0,[],arguments.length),this)),l}}class Fp{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Ue(i){return new sr("fast-ref",Fp,i)}const Fc=i=>typeof i=="function",Mp=()=>null;function Da(i){return i===void 0?Mp:Fc(i)?i:()=>i}function lr(i,e,t){const s=Fc(i)?i:()=>i,n=Da(e),o=Da(t);return(r,a)=>s(r,a)?n(r,a):o(r,a)}function Np(i,e,t,s){i.bind(e[t],s)}function Bp(i,e,t,s){const n=Object.create(s);n.index=t,n.length=e.length,i.bind(e[t],n)}class Hp{constructor(e,t,s,n,o,r){this.location=e,this.itemsBinding=t,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Np,this.itemsBindingObserver=K.binding(t,this,s),this.templateBindingObserver=K.binding(n,this,o),r.positioning&&(this.bindView=Bp)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items){this.items=gi;return}const t=this.itemsObserver,s=this.itemsObserver=K.getNotifier(this.items),n=t!==s;n&&t!==null&&t.unsubscribe(this),(n||e)&&s.subscribe(this)}updateViews(e){const t=this.childContext,s=this.views,n=this.bindView,o=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,d=0;for(let u=0,p=e.length;u<p;++u){const m=e[u],b=m.removed;let T=0,V=m.index;const Y=V+m.addedCount,F=s.splice(m.index,b.length),Z=d=l.length+F.length;for(;V<Y;++V){const L=s[V],te=L?L.firstChild:this.location;let ae;a&&d>0?(T<=Z&&F.length>0?(ae=F[T],T++):(ae=l[c],c++),d--):ae=r.create(),s.splice(V,0,ae),n(ae,o,V,t),ae.insertBefore(te)}F[T]&&l.push(...F.slice(T))}for(let u=c,p=l.length;u<p;++u)l[u].dispose();if(this.options.positioning)for(let u=0,p=s.length;u<p;++u){const m=s[u].context;m.length=p,m.index=u}}refreshAllViews(e=!1){const t=this.items,s=this.childContext,n=this.template,o=this.location,r=this.bindView;let a=t.length,l=this.views,c=l.length;if((a===0||e||!this.options.recycle)&&(Sc.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let d=0;d<a;++d){const u=n.create();r(u,t,d,s),l[d]=u,u.insertBefore(o)}}else{let d=0;for(;d<a;++d)if(d<c){const p=l[d];r(p,t,d,s)}else{const p=n.create();r(p,t,d,s),l.push(p),p.insertBefore(o)}const u=l.splice(d,c-d);for(d=0,a=u.length;d<a;++d)u[d].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,s=e.length;t<s;++t)e[t].unbind()}}class Mc extends In{constructor(e,t,s){super(),this.itemsBinding=e,this.templateBinding=t,this.options=s,this.createPlaceholder=ee.createBlockPlaceholder,Lp(),this.isItemsBindingVolatile=K.isVolatileBinding(e),this.isTemplateBindingVolatile=K.isVolatileBinding(t)}createBehavior(e){return new Hp(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function cr(i){return i?function(e,t,s){return e.nodeType===1&&e.matches(i)}:function(e,t,s){return e.nodeType===1}}class Nc{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=K.getAccessors(e).some(s=>s.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(gi),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Vp extends Nc{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function ut(i){return typeof i=="string"&&(i={property:i}),new sr("fast-slotted",Vp,i)}class jp extends Nc{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Bc(i){return typeof i=="string"&&(i={property:i}),new sr("fast-children",jp,i)}class zi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Ui=(i,e)=>re`
    <span
        part="end"
        ${Ue("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${Ue("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,qi=(i,e)=>re`
    <span
        part="start"
        ${Ue("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ue("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;re`
    <span part="end" ${Ue("endContainer")}>
        <slot
            name="end"
            ${Ue("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`;re`
    <span part="start" ${Ue("startContainer")}>
        <slot
            name="start"
            ${Ue("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`;function g(i,e,t,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(n<3?r(o):n>3?r(e,t,o):r(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o}const ro=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,e){return function(t){Reflect.defineMetadata(i,e,t)}},Reflect.defineMetadata=function(i,e,t){let s=ro.get(t);s===void 0&&ro.set(t,s=new Map),s.set(i,e)},Reflect.getOwnMetadata=function(i,e){const t=ro.get(e);if(t!==void 0)return t.get(i)});class zp{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Vc(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:s,key:n}=this;return this.container=this.key=void 0,s.registerResolver(n,new lt(n,e,t))}}function ts(i){const e=i.slice(),t=Object.keys(i),s=t.length;let n;for(let o=0;o<s;++o)n=t[o],jc(n)||(e[n]=i[n]);return e}const Up=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new lt(i,1,i)},transient(i){return new lt(i,2,i)}}),ao=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Up.singleton})}),_a=new Map;function Pa(i){return e=>Reflect.getOwnMetadata(i,e)}let La=null;const ve=Object.freeze({createContainer(i){return new ys(null,Object.assign({},ao.default,i))},findResponsibleContainer(i){const e=i.$$container$$;return e&&e.responsibleForOwnerRequests?e:ve.findParentContainer(i)},findParentContainer(i){const e=new CustomEvent(Hc,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(e),e.detail.container||ve.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,e){return i?i.$$container$$||new ys(i,Object.assign({},ao.default,e,{parentLocator:ve.findParentContainer})):La||(La=new ys(null,Object.assign({},ao.default,e,{parentLocator:()=>null})))},getDesignParamtypes:Pa("design:paramtypes"),getAnnotationParamtypes:Pa("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let e=this.getAnnotationParamtypes(i);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],i),e},getDependencies(i){let e=_a.get(i);if(e===void 0){const t=i.inject;if(t===void 0){const s=ve.getDesignParamtypes(i),n=ve.getAnnotationParamtypes(i);if(s===void 0)if(n===void 0){const o=Object.getPrototypeOf(i);typeof o=="function"&&o!==Function.prototype?e=ts(ve.getDependencies(o)):e=[]}else e=ts(n);else if(n===void 0)e=ts(s);else{e=ts(s);let o=n.length,r;for(let c=0;c<o;++c)r=n[c],r!==void 0&&(e[c]=r);const a=Object.keys(n);o=a.length;let l;for(let c=0;c<o;++c)l=a[c],jc(l)||(e[l]=n[l])}}else e=ts(t);_a.set(i,e)}return e},defineProperty(i,e,t,s=!1){const n=`$di_${e}`;Reflect.defineProperty(i,e,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?ve.findResponsibleContainer(this):ve.getOrCreateDOMContainer()).get(t),this[n]=o,s&&this instanceof En)){const a=this.$fastController,l=()=>{const d=ve.findResponsibleContainer(this).get(t),u=this[n];d!==u&&(this[n]=o,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return o}})},createInterface(i,e){const t=typeof i=="function"?i:e,s=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||Ba,n=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,o=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(a)ve.defineProperty(r,a,o,n);else{const c=ve.getOrCreateAnnotationParamTypes(r);c[l]=o}};return o.$isInterface=!0,o.friendlyName=s??"(anonymous)",t!=null&&(o.register=function(r,a){return t(new zp(r,a??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...i){return function(e,t,s){if(typeof s=="number"){const n=ve.getOrCreateAnnotationParamTypes(e),o=i[0];o!==void 0&&(n[s]=o)}else if(t)ve.defineProperty(e,t,i[0]);else{const n=s?ve.getOrCreateAnnotationParamTypes(s.value):ve.getOrCreateAnnotationParamTypes(e);let o;for(let r=0;r<i.length;++r)o=i[r],o!==void 0&&(n[r]=o)}}},transient(i){return i.register=function(t){return Rs.transient(i,i).register(t)},i.registerInRequestor=!1,i},singleton(i,e=Wp){return i.register=function(s){return Rs.singleton(i,i).register(s)},i.registerInRequestor=e.scoped,i}}),qp=ve.createInterface("Container");ve.inject;const Wp={scoped:!1};class lt{constructor(e,t,s){this.key=e,this.strategy=t,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=e.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,s,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(n=(s=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||s===void 0?void 0:s.call(t,e))!==null&&n!==void 0?n:null;default:return null}}}function Fa(i){return this.get(i)}function Gp(i,e){return e(i)}class Yp{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let s;return t===void 0?s=new this.Type(...this.dependencies.map(Fa,e)):s=new this.Type(...this.dependencies.map(Fa,e),...t),this.transformers==null?s:this.transformers.reduce(Gp,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Jp={$isResolver:!0,resolve(i,e){return e}};function en(i){return typeof i.register=="function"}function Qp(i){return en(i)&&typeof i.registerInRequestor=="boolean"}function Ma(i){return Qp(i)&&i.registerInRequestor}function Zp(i){return i.prototype!==void 0}const Xp=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Hc="__DI_LOCATE_PARENT__",lo=new Map;class ys{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(qp,Jp),e instanceof Node&&e.addEventListener(Hc,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,s,n,o,r;const a=this.context;for(let l=0,c=e.length;l<c;++l)if(t=e[l],!!Ha(t))if(en(t))t.register(this,a);else if(Zp(t))Rs.singleton(t,t).register(this);else for(s=Object.keys(t),o=0,r=s.length;o<r;++o)n=t[s[o]],Ha(n)&&(en(n)?n.register(this,a):this.register(n));return--this.registerDepth,this}registerResolver(e,t){Us(e);const s=this.resolvers,n=s.get(e);return n==null?s.set(e,t):n instanceof lt&&n.strategy===4?n.state.push(t):s.set(e,new lt(e,4,[n,t])),t}registerTransformer(e,t){const s=this.getResolver(e);if(s==null)return!1;if(s.getFactory){const n=s.getFactory(this);return n==null?!1:(n.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Us(e),e.resolve!==void 0)return e;let s=this,n;for(;s!=null;)if(n=s.resolvers.get(e),n==null){if(s.parent==null){const o=Ma(e)?this:s;return t?this.jitRegister(e,o):null}s=s.parent}else return n;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(Us(e),e.$isResolver)return e.resolve(this,this);let t=this,s;for(;t!=null;)if(s=t.resolvers.get(e),s==null){if(t.parent==null){const n=Ma(e)?this:t;return s=this.jitRegister(e,n),s.resolve(t,this)}t=t.parent}else return s.resolve(t,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){Us(e);const s=this;let n=s,o;if(t){let r=gi;for(;n!=null;)o=n.resolvers.get(e),o!=null&&(r=r.concat(Na(o,n,s))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(e),o==null){if(n=n.parent,n==null)return gi}else return Na(o,n,s);return gi}getFactory(e){let t=lo.get(e);if(t===void 0){if(Kp(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);lo.set(e,t=new Yp(e,ve.getDependencies(e)))}return t}registerFactory(e,t){lo.set(e,t)}createChild(e){return new ys(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Xp.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(en(e)){const s=e.register(t);if(!(s instanceof Object)||s.resolve==null){const n=t.resolvers.get(e);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,t);return t.resolvers.set(e,s),s}}}}const co=new WeakMap;function Vc(i){return function(e,t,s){if(co.has(s))return co.get(s);const n=i(e,t,s);return co.set(s,n),n}}const Rs=Object.freeze({instance(i,e){return new lt(i,0,e)},singleton(i,e){return new lt(i,1,e)},transient(i,e){return new lt(i,2,e)},callback(i,e){return new lt(i,3,e)},cachedCallback(i,e){return new lt(i,3,Vc(e))},aliasTo(i,e){return new lt(e,5,i)}});function Us(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Na(i,e,t){if(i instanceof lt&&i.strategy===4){const s=i.state;let n=s.length;const o=new Array(n);for(;n--;)o[n]=s[n].resolve(e,t);return o}return[i.resolve(e,t)]}const Ba="(anonymous)";function Ha(i){return typeof i=="object"&&i!==null||typeof i=="function"}const Kp=(function(){const i=new WeakMap;let e=!1,t="",s=0;return function(n){return e=i.get(n),e===void 0&&(t=n.toString(),s=t.length,e=s>=29&&s<=100&&t.charCodeAt(s-1)===125&&t.charCodeAt(s-2)<=32&&t.charCodeAt(s-3)===93&&t.charCodeAt(s-4)===101&&t.charCodeAt(s-5)===100&&t.charCodeAt(s-6)===111&&t.charCodeAt(s-7)===99&&t.charCodeAt(s-8)===32&&t.charCodeAt(s-9)===101&&t.charCodeAt(s-10)===118&&t.charCodeAt(s-11)===105&&t.charCodeAt(s-12)===116&&t.charCodeAt(s-13)===97&&t.charCodeAt(s-14)===110&&t.charCodeAt(s-15)===88,i.set(n,e)),e}})(),qs={};function jc(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const e=qs[i];if(e!==void 0)return e;const t=i.length;if(t===0)return qs[i]=!1;let s=0;for(let n=0;n<t;++n)if(s=i.charCodeAt(n),n===0&&s===48&&t>1||s<48||s>57)return qs[i]=!1;return qs[i]=!0}default:return!1}}function Va(i){return`${i.toLowerCase()}:presentation`}const Ws=new Map,zc=Object.freeze({define(i,e,t){const s=Va(i);Ws.get(s)===void 0?Ws.set(s,e):Ws.set(s,!1),t.register(Rs.instance(s,e))},forTag(i,e){const t=Va(i),s=Ws.get(t);return s===!1?ve.findResponsibleContainer(e).get(t):s||null}});class eg{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?Ke.create(t):t instanceof Ke?t:Ke.create([t])}applyTo(e){const t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}}class me extends En{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=zc.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new tg(this===me?class extends me{}:this,e,t)}}g([P],me.prototype,"template",void 0);g([P],me.prototype,"styles",void 0);function is(i,e,t){return typeof i=="function"?i(e,t):i}class tg{constructor(e,t,s){this.type=e,this.elementDefinition=t,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const s=this.definition,n=this.overrideDefinition,r=`${s.prefix||t.elementPrefix}-${s.baseName}`;t.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new eg(is(s.template,a,s),is(s.styles,a,s));a.definePresentation(l);let c=is(s.shadowOptions,a,s);a.shadowRootMode&&(c?n.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:is(s.elementOptions,a,s),shadowOptions:c,attributes:is(s.attributes,a,s)})}})}}function tt(i,...e){const t=pn.locate(i);e.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(i.prototype,o,Object.getOwnPropertyDescriptor(s.prototype,o))}),pn.locate(s).forEach(o=>t.push(o))})}const dr={horizontal:"horizontal"};function ig(i,e){let t=i.length;for(;t--;)if(e(i[t],t,i))return t;return-1}function sg(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ng(...i){return i.every(e=>e instanceof HTMLElement)}function og(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let li;function rg(){if(typeof li=="boolean")return li;if(!sg())return li=!1,li;const i=document.createElement("style"),e=og();e!==null&&i.setAttribute("nonce",e),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),li=!0}catch{li=!1}finally{document.head.removeChild(i)}return li}const ja="focus",za="focusin",Hi="focusout",Vi="keydown";var Ua;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Ua||(Ua={}));const bi="ArrowDown",Es="ArrowLeft",As="ArrowRight",vi="ArrowUp",Ls="Enter",An="Escape",Wi="Home",Gi="End",ag="F2",lg="PageDown",cg="PageUp",Fs=" ",ur="Tab",dg={ArrowDown:bi,ArrowLeft:Es,ArrowRight:As,ArrowUp:vi};var ji;(function(i){i.ltr="ltr",i.rtl="rtl"})(ji||(ji={}));function ug(i,e,t){return Math.min(Math.max(t,i),e)}function Gs(i,e,t=0){return[e,t]=[e,t].sort((s,n)=>s-n),e<=i&&i<t}let hg=0;function mn(i=""){return`${i}${hg++}`}const fg=(i,e)=>re`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Ue("control")}
    >
        ${qi(i,e)}
        <span class="content" part="content">
            <slot ${ut("defaultSlottedContent")}></slot>
        </span>
        ${Ui(i,e)}
    </a>
`;class be{}g([y({attribute:"aria-atomic"})],be.prototype,"ariaAtomic",void 0);g([y({attribute:"aria-busy"})],be.prototype,"ariaBusy",void 0);g([y({attribute:"aria-controls"})],be.prototype,"ariaControls",void 0);g([y({attribute:"aria-current"})],be.prototype,"ariaCurrent",void 0);g([y({attribute:"aria-describedby"})],be.prototype,"ariaDescribedby",void 0);g([y({attribute:"aria-details"})],be.prototype,"ariaDetails",void 0);g([y({attribute:"aria-disabled"})],be.prototype,"ariaDisabled",void 0);g([y({attribute:"aria-errormessage"})],be.prototype,"ariaErrormessage",void 0);g([y({attribute:"aria-flowto"})],be.prototype,"ariaFlowto",void 0);g([y({attribute:"aria-haspopup"})],be.prototype,"ariaHaspopup",void 0);g([y({attribute:"aria-hidden"})],be.prototype,"ariaHidden",void 0);g([y({attribute:"aria-invalid"})],be.prototype,"ariaInvalid",void 0);g([y({attribute:"aria-keyshortcuts"})],be.prototype,"ariaKeyshortcuts",void 0);g([y({attribute:"aria-label"})],be.prototype,"ariaLabel",void 0);g([y({attribute:"aria-labelledby"})],be.prototype,"ariaLabelledby",void 0);g([y({attribute:"aria-live"})],be.prototype,"ariaLive",void 0);g([y({attribute:"aria-owns"})],be.prototype,"ariaOwns",void 0);g([y({attribute:"aria-relevant"})],be.prototype,"ariaRelevant",void 0);g([y({attribute:"aria-roledescription"})],be.prototype,"ariaRoledescription",void 0);class vt extends me{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var t;(t=this.control)===null||t===void 0||t.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}g([y],vt.prototype,"download",void 0);g([y],vt.prototype,"href",void 0);g([y],vt.prototype,"hreflang",void 0);g([y],vt.prototype,"ping",void 0);g([y],vt.prototype,"referrerpolicy",void 0);g([y],vt.prototype,"rel",void 0);g([y],vt.prototype,"target",void 0);g([y],vt.prototype,"type",void 0);g([P],vt.prototype,"defaultSlottedContent",void 0);class hr{}g([y({attribute:"aria-expanded"})],hr.prototype,"ariaExpanded",void 0);tt(hr,be);tt(vt,zi,hr);const pg=i=>{const e=i.closest("[dir]");return e!==null&&e.dir==="rtl"?ji.rtl:ji.ltr},Uc=(i,e)=>re`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let Ms=class extends me{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}};g([y({attribute:"fill"})],Ms.prototype,"fill",void 0);g([y({attribute:"color"})],Ms.prototype,"color",void 0);g([y({mode:"boolean"})],Ms.prototype,"circular",void 0);const gg=(i,e)=>re`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Ue("control")}
    >
        ${qi(i,e)}
        <span class="content" part="content">
            <slot ${ut("defaultSlottedContent")}></slot>
        </span>
        ${Ui(i,e)}
    </button>
`,qa="form-associated-proxy",Wa="ElementInternals",Ga=Wa in window&&"setFormValue"in window[Wa].prototype,Ya=new WeakMap;function Ns(i){const e=class extends i{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Ga}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=t?s.concat(Array.from(t)):s;return Object.freeze(n)}else return gi}valueChanged(t,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),ee.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),ee.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Ga)return null;let t=Ya.get(this);return t||(t=this.attachInternals(),Ya.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,s,n){this.elementInternals?this.elementInternals.setValidity(t,s,n):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",qa),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",qa)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,s){this.elementInternals&&this.elementInternals.setFormValue(t,s||t)}_keypressHandler(t){switch(t.key){case Ls:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s?.click()}break}}stopPropagation(t){t.stopPropagation()}};return y({mode:"boolean"})(e.prototype,"disabled"),y({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),y({attribute:"current-value"})(e.prototype,"currentValue"),y(e.prototype,"name"),y({mode:"boolean"})(e.prototype,"required"),P(e.prototype,"value"),e}function qc(i){class e extends Ns(i){}class t extends e{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return y({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),y({attribute:"current-checked",converter:Ec})(t.prototype,"currentChecked"),P(t.prototype,"defaultChecked"),P(t.prototype,"checked"),t}class mg extends me{}class bg extends Ns(mg){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let yt=class extends bg{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};g([y({mode:"boolean"})],yt.prototype,"autofocus",void 0);g([y({attribute:"form"})],yt.prototype,"formId",void 0);g([y],yt.prototype,"formaction",void 0);g([y],yt.prototype,"formenctype",void 0);g([y],yt.prototype,"formmethod",void 0);g([y({mode:"boolean"})],yt.prototype,"formnovalidate",void 0);g([y],yt.prototype,"formtarget",void 0);g([y],yt.prototype,"type",void 0);g([P],yt.prototype,"defaultSlottedContent",void 0);class Dn{}g([y({attribute:"aria-expanded"})],Dn.prototype,"ariaExpanded",void 0);g([y({attribute:"aria-pressed"})],Dn.prototype,"ariaPressed",void 0);tt(Dn,be);tt(yt,zi,Dn);const Ys={none:"none",default:"default",sticky:"sticky"},Gt={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},xs={default:"default",header:"header",stickyHeader:"sticky-header"};let Le=class extends me{constructor(){super(...arguments),this.rowType=xs.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Mc(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Hi,this.handleFocusout),this.addEventListener(Vi,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Hi,this.handleFocusout),this.removeEventListener(Vi,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case Es:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case As:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case Wi:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case Gi:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===xs.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===xs.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};g([y({attribute:"grid-template-columns"})],Le.prototype,"gridTemplateColumns",void 0);g([y({attribute:"row-type"})],Le.prototype,"rowType",void 0);g([P],Le.prototype,"rowData",void 0);g([P],Le.prototype,"columnDefinitions",void 0);g([P],Le.prototype,"cellItemTemplate",void 0);g([P],Le.prototype,"headerCellItemTemplate",void 0);g([P],Le.prototype,"rowIndex",void 0);g([P],Le.prototype,"isActiveRow",void 0);g([P],Le.prototype,"activeCellItemTemplate",void 0);g([P],Le.prototype,"defaultCellItemTemplate",void 0);g([P],Le.prototype,"defaultHeaderCellItemTemplate",void 0);g([P],Le.prototype,"cellElements",void 0);function vg(i){const e=i.tagFor(Le);return re`
    <${e}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,s)=>s.parent.headerCellItemTemplate}"
    ></${e}>
`}const yg=(i,e)=>{const t=vg(i),s=i.tagFor(Le);return re`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${t}"
            ${Bc({property:"rowElements",filter:cr("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};let Fe=class Do extends me{constructor(){super(),this.noTabbing=!1,this.generateHeader=Ys.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,t)),l=r[a];s&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,ee.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const t=this.rowElements[0];this.generatedGridTemplateColumns=new Array(t.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((t,s)=>{const n=t;n.rowIndex=s,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach(s=>{t=`${t}${t===""?"":" "}1fr`}),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=Do.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=Do.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Mc(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(ja,this.handleFocus),this.addEventListener(Vi,this.handleKeydown),this.addEventListener(Hi,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),ee.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(ja,this.handleFocus),this.removeEventListener(Vi,this.handleKeydown),this.removeEventListener(Hi,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const s=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[s];switch(e.key){case vi:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case bi:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case cg:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex-1,t;t>=0;t--){const r=this.rowElements[t];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case lg:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex+1,t;t<=s;t++){const r=this.rowElements[t];if(r.offsetTop+r.offsetHeight>n){let a=0;this.generateHeader===Ys.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case Wi:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case Gi:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,ee.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Ys.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Ys.sticky?xs.stickyHeader:xs.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};Fe.generateColumns=i=>Object.getOwnPropertyNames(i).map((e,t)=>({columnDataKey:e,gridColumn:`${t}`}));g([y({attribute:"no-tabbing",mode:"boolean"})],Fe.prototype,"noTabbing",void 0);g([y({attribute:"generate-header"})],Fe.prototype,"generateHeader",void 0);g([y({attribute:"grid-template-columns"})],Fe.prototype,"gridTemplateColumns",void 0);g([P],Fe.prototype,"rowsData",void 0);g([P],Fe.prototype,"columnDefinitions",void 0);g([P],Fe.prototype,"rowItemTemplate",void 0);g([P],Fe.prototype,"cellItemTemplate",void 0);g([P],Fe.prototype,"headerCellItemTemplate",void 0);g([P],Fe.prototype,"focusRowIndex",void 0);g([P],Fe.prototype,"focusColumnIndex",void 0);g([P],Fe.prototype,"defaultRowItemTemplate",void 0);g([P],Fe.prototype,"rowElementTag",void 0);g([P],Fe.prototype,"rowElements",void 0);const xg=re`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,wg=re`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;let ii=class extends me{constructor(){super(...arguments),this.cellType=Gt.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(za,this.handleFocusin),this.addEventListener(Hi,this.handleFocusout),this.addEventListener(Vi,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(za,this.handleFocusin),this.removeEventListener(Hi,this.handleFocusout),this.removeEventListener(Vi,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Gt.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===Gt.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Gt.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case Ls:case ag:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Gt.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break}break;case An:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Gt.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=wg.render(this,this);break;case void 0:case Gt.rowHeader:case Gt.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=xg.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};g([y({attribute:"cell-type"})],ii.prototype,"cellType",void 0);g([y({attribute:"grid-column"})],ii.prototype,"gridColumn",void 0);g([P],ii.prototype,"rowData",void 0);g([P],ii.prototype,"columnDefinition",void 0);function $g(i){const e=i.tagFor(ii);return re`
    <${e}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,s)=>s.index+1}"
        :rowData="${(t,s)=>s.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}function Cg(i){const e=i.tagFor(ii);return re`
    <${e}
        cell-type="columnheader"
        grid-column="${(t,s)=>s.index+1}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}const Sg=(i,e)=>{const t=$g(i),s=Cg(i);return re`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${t}"
            :defaultHeaderCellItemTemplate="${s}"
            ${Bc({property:"cellElements",filter:cr('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${ut("slottedCellElements")}></slot>
        </template>
    `},kg=(i,e)=>re`
        <template
            tabindex="-1"
            role="${t=>!t.cellType||t.cellType==="default"?"gridcell":t.cellType}"
            class="
            ${t=>t.cellType==="columnheader"?"column-header":t.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,Tg=(i,e)=>re`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ut("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Og extends me{}class Ig extends qc(Og){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let _n=class extends Ig{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{this.readOnly||e.key===Fs&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};g([y({attribute:"readonly",mode:"boolean"})],_n.prototype,"readOnly",void 0);g([P],_n.prototype,"defaultSlottedNodes",void 0);g([P],_n.prototype,"indeterminate",void 0);function Wc(i){return ng(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class qt extends me{constructor(e,t,s,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),s&&(this.defaultSelected=s),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){const t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),K.notify(this,"value")}get value(){var e;return K.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}g([P],qt.prototype,"checked",void 0);g([P],qt.prototype,"content",void 0);g([P],qt.prototype,"defaultSelected",void 0);g([y({mode:"boolean"})],qt.prototype,"disabled",void 0);g([y({attribute:"selected",mode:"boolean"})],qt.prototype,"selectedAttribute",void 0);g([P],qt.prototype,"selected",void 0);g([y({attribute:"value",mode:"fromView"})],qt.prototype,"initialValue",void 0);class Yi{}g([P],Yi.prototype,"ariaChecked",void 0);g([P],Yi.prototype,"ariaPosInSet",void 0);g([P],Yi.prototype,"ariaSelected",void 0);g([P],Yi.prototype,"ariaSetSize",void 0);tt(Yi,be);tt(qt,zi,Yi);class ze extends me{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return K.track(this,"options"),this._options}set options(e){this._options=e,K.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(s=>s.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){const s=e>t?-1:e<t?1:0,n=e+s;let o=null;switch(s){case-1:{o=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<n?a:r,o);break}case 1:{o=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>n?a:r,o);break}}return this.options.indexOf(o)}handleChange(e,t){t==="selected"&&(ze.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,ze.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case Wi:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case bi:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case vi:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case Gi:{e.preventDefault(),this.selectLastOption();break}case ur:return this.focusAndScrollOptionIntoView(),!0;case Ls:case An:return!0;case Fs:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof e=="number"){const n=this.getSelectableIndex(e,t),o=n>-1?n:e;this.selectedIndex=o,t===o&&this.selectedIndexChanged(t,o);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var s;const n=t.filter(ze.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(o=>{const r=K.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>!s.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=ig(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>s.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,s;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((n,o)=>(Wc(o)&&n.push(o),n),[]);const s=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=mn("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const n=this.options.indexOf(s[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}}ze.slottedOptionFilter=i=>Wc(i)&&!i.hidden;ze.TYPE_AHEAD_TIMEOUT_MS=1e3;g([y({mode:"boolean"})],ze.prototype,"disabled",void 0);g([P],ze.prototype,"selectedIndex",void 0);g([P],ze.prototype,"selectedOptions",void 0);g([P],ze.prototype,"slottedOptions",void 0);g([P],ze.prototype,"typeaheadBuffer",void 0);class yi{}g([P],yi.prototype,"ariaActiveDescendant",void 0);g([P],yi.prototype,"ariaDisabled",void 0);g([P],yi.prototype,"ariaExpanded",void 0);g([P],yi.prototype,"ariaMultiSelectable",void 0);tt(yi,be);tt(ze,yi);const uo={above:"above",below:"below"};function _o(i){const e=i.parentElement;if(e)return e;{const t=i.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function Rg(i,e){let t=e;for(;t!==null;){if(t===i)return!0;t=_o(t)}return!1}const Bt=document.createElement("div");function Eg(i){return i instanceof En}class fr{setProperty(e,t){ee.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){ee.queueUpdate(()=>this.target.removeProperty(e))}}class Ag extends fr{constructor(e){super();const t=new CSSStyleSheet;t[Tc]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(Ke.create([t]))}}class Dg extends fr{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class _g extends fr{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class Gc{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),K.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),ee.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),ee.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){const{sheet:s}=this.style;if(s){const n=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[n].style}else this.target=null}}g([P],Gc.prototype,"target",void 0);class Pg{constructor(e){this.target=e.style}setProperty(e,t){ee.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){ee.queueUpdate(()=>this.target.removeProperty(e))}}class Ie{setProperty(e,t){Ie.properties[e]=t;for(const s of Ie.roots.values())Ii.getOrCreate(Ie.normalizeRoot(s)).setProperty(e,t)}removeProperty(e){delete Ie.properties[e];for(const t of Ie.roots.values())Ii.getOrCreate(Ie.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Ie;if(!t.has(e)){t.add(e);const s=Ii.getOrCreate(this.normalizeRoot(e));for(const n in Ie.properties)s.setProperty(n,Ie.properties[n])}}static unregisterRoot(e){const{roots:t}=Ie;if(t.has(e)){t.delete(e);const s=Ii.getOrCreate(Ie.normalizeRoot(e));for(const n in Ie.properties)s.removeProperty(n)}}static normalizeRoot(e){return e===Bt?document:e}}Ie.roots=new Set;Ie.properties={};const ho=new WeakMap,Lg=ee.supportsAdoptedStyleSheets?Ag:Gc,Ii=Object.freeze({getOrCreate(i){if(ho.has(i))return ho.get(i);let e;return i===Bt?e=new Ie:i instanceof Document?e=ee.supportsAdoptedStyleSheets?new Dg:new _g:Eg(i)?e=new Lg(i):e=new Pg(i),ho.set(i,e),e}});class Ve extends Dc{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Ve.uniqueId(),Ve.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Ve({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return Ve.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=we.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof Ve&&(t=this.alias(t)),we.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),we.existsFor(e)&&we.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Bt,e),this}subscribe(e,t){const s=this.getOrCreateSubscriberSet(t);t&&!we.existsFor(t)&&we.getOrCreate(t),s.has(e)||s.add(e)}unsubscribe(e,t){const s=this.subscribers.get(t||this);s&&s.has(e)&&s.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(s=>s.handleChange(t))}alias(e){return(t=>e.getValueFor(t))}}Ve.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();Ve.tokensById=new Map;class Fg{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:s}=e;this.add(t,s)}add(e,t){Ii.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(we.getOrCreate(t).get(e)))}remove(e,t){Ii.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class Mg{constructor(e,t,s){this.source=e,this.token=t,this.node=s,this.dependencies=new Set,this.observer=K.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,vs))}catch(e){console.error(e)}}}class Ng{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),K.getNotifier(this).notify(e.id))}get(e){return K.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),K.getNotifier(this).notify(e.id)}all(){return this.values.entries()}}const ss=new WeakMap,ns=new WeakMap;class we{constructor(e){this.target=e,this.store=new Ng,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,s)=>{const n=Ve.getTokenById(s);n&&(n.notify(this.target),this.updateCSSTokenReflection(t,n))}},ss.set(e,this),K.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof En?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return ss.get(e)||new we(e)}static existsFor(e){return ss.has(e)}static findParent(e){if(Bt!==e.target){let t=_o(e.target);for(;t!==null;){if(ss.has(t))return ss.get(t);t=_o(t)}return we.getOrCreate(Bt)}return null}static findClosestAssignedNode(e,t){let s=t;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==Bt?we.getOrCreate(Bt):null}while(s!==null);return null}get parent(){return ns.get(this)||null}updateCSSTokenReflection(e,t){if(Ve.isCSSDesignToken(t)){const s=this.parent,n=this.isReflecting(t);if(s){const o=s.get(t),r=e.get(t);o!==r&&!n?this.reflectToCSS(t):o===r&&n&&this.stopReflectToCSS(t)}else n||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(t!==void 0)return t;const s=this.getRaw(e);if(s!==void 0)return this.hydrate(e,s),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=we.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){Ve.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Ve.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=we.findParent(this);e&&e.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&ns.get(this).removeChild(this);for(const e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&ns.get(e).removeChild(e);const t=this.children.filter(s=>e.contains(s));ns.set(e,this),this.children.push(e),t.forEach(s=>e.appendChild(s)),K.getNotifier(this.store).subscribe(e);for(const[s,n]of this.store.all())e.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):n),e.updateCSSTokenReflection(e.store,s)}removeChild(e){const t=this.children.indexOf(e);if(t!==-1&&this.children.splice(t,1),K.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;const s=ns.delete(e);for(const[n]of this.store.all())e.hydrate(n,e.getRaw(n)),e.updateCSSTokenReflection(e.store,n);return s}contains(e){return Rg(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),we.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),we.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const s=Ve.getTokenById(t);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(e,t){if(!this.has(e)){const s=this.bindingObservers.get(e);Ve.isDerivedDesignTokenValue(t)?s?s.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(s&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const s=new Mg(t,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}we.cssCustomPropertyReflector=new Fg;g([P],we.prototype,"children",void 0);function Bg(i){return Ve.from(i)}const Yc=Object.freeze({create:Bg,notifyConnection(i){return!i.isConnected||!we.existsFor(i)?!1:(we.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!we.existsFor(i)?!1:(we.getOrCreate(i).unbind(),!0)},registerRoot(i=Bt){Ie.registerRoot(i)},unregisterRoot(i=Bt){Ie.unregisterRoot(i)}}),fo=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),po=new Map,tn=new Map;let Pi=null;const os=ve.createInterface(i=>i.cachedCallback(e=>(Pi===null&&(Pi=new Qc(null,e)),Pi))),Jc=Object.freeze({tagFor(i){return tn.get(i)},responsibleFor(i){const e=i.$$designSystem$$;return e||ve.findResponsibleContainer(i).get(os)},getOrCreate(i){if(!i)return Pi===null&&(Pi=ve.getOrCreateDOMContainer().get(os)),Pi;const e=i.$$designSystem$$;if(e)return e;const t=ve.getOrCreateDOMContainer(i);if(t.has(os,!1))return t.get(os);{const s=new Qc(i,t);return t.register(Rs.instance(os,s)),s}}});function Hg(i,e,t){return typeof i=="string"?{name:i,type:e,callback:t}:i}class Qc{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>fo.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,s=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const d=Hg(a,l,c),{name:u,callback:p,baseClass:m}=d;let{type:b}=d,T=u,V=po.get(T),Y=!0;for(;V;){const F=n(T,b,V);switch(F){case fo.ignoreDuplicate:return;case fo.definitionCallbackOnly:Y=!1,V=void 0;break;default:T=F,V=po.get(T);break}}Y&&((tn.has(b)||b===me)&&(b=class extends b{}),po.set(T,b),tn.set(b,T),m&&tn.set(m,T)),s.push(new Vg(t,T,b,o,p,Y))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Yc.registerRoot(this.designTokenRoot)),t.registerWithContext(r,...e);for(const a of s)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class Vg{constructor(e,t,s,n,o,r){this.container=e,this.name=t,this.type=s,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(e){zc.define(this.name,e,this.container)}defineElement(e){this.definition=new Rn(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Jc.tagFor(e)}}const jg=(i,e)=>re`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,zg={separator:"separator"};let pr=class extends me{constructor(){super(...arguments),this.role=zg.separator,this.orientation=dr.horizontal}};g([y],pr.prototype,"role",void 0);g([y],pr.prototype,"orientation",void 0);const Ug=(i,e)=>re`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${qi(i,e)}
        <span class="content" part="content">
            <slot ${ut("content")}></slot>
        </span>
        ${Ui(i,e)}
    </template>
`;class Pn extends ze{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var s,n;this.ariaActiveDescendant=(n=(s=this.options[t])===null||s===void 0?void 0:s.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,s)=>{t.checked=Gs(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,s)=>{t.checked=Gs(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,s)=>{t.checked=Gs(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,s)=>{t.checked=Gs(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const s=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:s}=e;switch(this.shouldSkipFocus=!1,t){case Wi:{this.checkFirstOption(s);return}case bi:{this.checkNextOption(s);return}case vi:{this.checkPreviousOption(s);return}case Gi:{this.checkLastOption(s);return}case ur:return this.focusAndScrollOptionIntoView(),!0;case An:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Fs:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var s;this.ariaMultiSelectable=t?"true":null,(s=this.options)===null||s===void 0||s.forEach(n=>{n.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var s;const n=Math.max(0,parseInt((s=t?.toFixed())!==null&&s!==void 0?s:"",10));n!==t&&ee.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(s=>!s.disabled),t=!e.every(s=>s.selected);e.forEach(s=>s.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),n=this.options.indexOf(s[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}g([P],Pn.prototype,"activeIndex",void 0);g([y({mode:"boolean"})],Pn.prototype,"multiple",void 0);g([y({converter:bt})],Pn.prototype,"size",void 0);class qg extends me{}class Wg extends Ns(qg){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Gg={text:"text"};let nt=class extends Wg{constructor(){super(...arguments),this.type=Gg.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&ee.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};g([y({attribute:"readonly",mode:"boolean"})],nt.prototype,"readOnly",void 0);g([y({mode:"boolean"})],nt.prototype,"autofocus",void 0);g([y],nt.prototype,"placeholder",void 0);g([y],nt.prototype,"type",void 0);g([y],nt.prototype,"list",void 0);g([y({converter:bt})],nt.prototype,"maxlength",void 0);g([y({converter:bt})],nt.prototype,"minlength",void 0);g([y],nt.prototype,"pattern",void 0);g([y({converter:bt})],nt.prototype,"size",void 0);g([y({mode:"boolean"})],nt.prototype,"spellcheck",void 0);g([P],nt.prototype,"defaultSlottedNodes",void 0);class gr{}tt(gr,be);tt(nt,zi,gr);const Ja=44,Yg=(i,e)=>re`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${lr(t=>typeof t.value=="number",re`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>Ja*t.percentComplete/100}px ${Ja}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,re`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class Ji extends me{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,t=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,n=t-e;this.percentComplete=n===0?0:Math.fround((s-e)/n*100)}}g([y({converter:bt})],Ji.prototype,"value",void 0);g([y({converter:bt})],Ji.prototype,"min",void 0);g([y({converter:bt})],Ji.prototype,"max",void 0);g([y({mode:"boolean"})],Ji.prototype,"paused",void 0);g([P],Ji.prototype,"percentComplete",void 0);const Jg=(i,e)=>re`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @focusout="${(t,s)=>t.focusOutHandler(s.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===dr.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${ut({property:"slottedRadioButtons",filter:cr("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;let si=class extends me{constructor(){super(...arguments),this.orientation=dr.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach(s=>{s!==t&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const s=e[t];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(n=>{n!==s&&n.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,s=e.target,n=s!==null?t.indexOf(s):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===t.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const t=e.target;if(t){const s=this.slottedRadioButtons;t.checked||s.indexOf(t)===0?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,s)=>e===t.length&&this.isInsideToolbar&&s===As,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Es,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,t,e.key)){this.moveRightOffGroup();return}else s===t.length&&(s=0);for(;s<t.length&&t.length>1;)if(t[s].disabled){if(this.focusedRadio&&s===t.indexOf(this.focusedRadio))break;if(s+1>=t.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(t,s);break}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,s=s<0?t.length-1:s,this.shouldMoveOffGroupToTheLeft(t,e.key)){this.moveLeftOffGroup();return}for(;s>=0&&t.length>1;)if(t[s].disabled){if(this.focusedRadio&&s===t.indexOf(this.focusedRadio))break;s-1<0?s=t.length-1:s-=1}else{this.moveToRadioByIndex(t,s);break}},this.keydownHandler=e=>{const t=e.key;if(t in dg&&this.isInsideFoundationToolbar)return!0;switch(t){case Ls:{this.checkFocusedRadio();break}case As:case bi:{this.direction===ji.ltr?this.moveRight(e):this.moveLeft(e);break}case Es:case vi:{this.direction===ji.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=pg(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),t=e?e.length:0;if(t>1){const n=e[t-1];n.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!s){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};g([y({attribute:"readonly",mode:"boolean"})],si.prototype,"readOnly",void 0);g([y({attribute:"disabled",mode:"boolean"})],si.prototype,"disabled",void 0);g([y],si.prototype,"name",void 0);g([y],si.prototype,"value",void 0);g([y],si.prototype,"orientation",void 0);g([P],si.prototype,"childItems",void 0);g([P],si.prototype,"slottedRadioButtons",void 0);const Qg=(i,e)=>re`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,s)=>t.keypressHandler(s.event)}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ut("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Zg extends me{}class Xg extends qc(Zg){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Ln=class extends Xg{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key===Fs){!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};g([y({attribute:"readonly",mode:"boolean"})],Ln.prototype,"readOnly",void 0);g([P],Ln.prototype,"name",void 0);g([P],Ln.prototype,"defaultSlottedNodes",void 0);function Kg(i,e,t){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class em extends Pn{}class tm extends Ns(em){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class ni extends tm{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=mn("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,ee.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return K.track(this,"value"),this._value}set value(e){var t,s,n,o,r,a,l;const c=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){const d=this._options.findIndex(m=>m.value===e),u=(n=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null,p=(r=(o=this._options[d])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(d===-1||u!==p)&&(e="",this.selectedIndex=d),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),K.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,s;this.$fastController.isConnected&&(this.value=(s=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&s!==void 0?s:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),s=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>s?uo.above:uo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===uo.above?~~e.top:~~s}get displayValue(){var e,t;return K.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const s=e.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(s=>{K.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(s=>{K.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var s;super.selectedOptionsChanged(e,t),(s=this.options)===null||s===void 0||s.forEach((n,o)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);a&&(a.selected=n.selected)})}setDefaultSelectedOption(){var e;const t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(ze.slottedOptionFilter),s=t?.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case Fs:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Wi:case Gi:{e.preventDefault();break}case Ls:{e.preventDefault(),this.open=!this.open;break}case An:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case ur:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===bi||t===vi)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&K.notify(this,"displayValue")}}g([y({attribute:"open",mode:"boolean"})],ni.prototype,"open",void 0);g([sp],ni.prototype,"collapsible",null);g([P],ni.prototype,"control",void 0);g([y({attribute:"position"})],ni.prototype,"positionAttribute",void 0);g([P],ni.prototype,"position",void 0);g([P],ni.prototype,"maxHeight",void 0);class mr{}g([P],mr.prototype,"ariaControls",void 0);tt(mr,yi);tt(ni,zi,mr);const im=(i,e)=>re`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,s)=>t.clickHandler(s.event)}"
        @focusin="${(t,s)=>t.focusinHandler(s.event)}"
        @focusout="${(t,s)=>t.focusoutHandler(s.event)}"
        @keydown="${(t,s)=>t.keydownHandler(s.event)}"
        @mousedown="${(t,s)=>t.mousedownHandler(s.event)}"
    >
        ${lr(t=>t.collapsible,re`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${Ue("control")}
                >
                    ${qi(i,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Ui(i,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${Ue("listbox")}
        >
            <slot
                ${ut({filter:ze.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,sm=(i,e)=>re`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class nm extends me{}const om=(i,e)=>re`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`;class Zc extends me{}g([y({mode:"boolean"})],Zc.prototype,"disabled",void 0);const rm=(i,e)=>re`
    <template class="${t=>t.orientation}">
        ${qi(i,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${ut("tabs")}></slot>

            ${lr(t=>t.showActiveIndicator,re`
                    <div
                        ${Ue("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Ui(i,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${ut("tabpanels")}></slot>
        </div>
    </template>
`,Po={horizontal:"horizontal"};class Wt extends me{constructor(){super(...arguments),this.orientation=Po.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",s=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const a=this.tabIds[o],l=this.tabpanelIds[o];n.setAttribute("id",a),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",l),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n,this.activeid=a)}n.style[e]="",n.style[t]="",n.style[s]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{const s=this.tabIds[t],n=this.tabpanelIds[t];e.setAttribute("id",n),e.setAttribute("aria-labelledby",s),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Es:e.preventDefault(),this.adjustBackward(e);break;case As:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case vi:e.preventDefault(),this.adjustBackward(e);break;case bi:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case Wi:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case Gi:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)+1:1,s===t.length&&(s=0);s<t.length&&t.length>1;)if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}else{if(this.activetab&&s===t.indexOf(this.activetab))break;s+1>=t.length?s=0:s+=1}},this.adjustBackward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)-1:0,s=s<0?t.length-1:s;s>=0&&t.length>1;)if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}else s-1<0?s=t.length-1:s-=1},this.moveToTabByIndex=(e,t)=>{const s=e[t];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${mn()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${mn()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Po.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${t}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const t=this.tabs.filter(r=>this.isFocusableElement(r)),s=t.indexOf(this.activetab),n=ug(0,t.length-1,s+e),o=this.tabs.indexOf(t[n]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}g([y],Wt.prototype,"orientation",void 0);g([y],Wt.prototype,"activeid",void 0);g([P],Wt.prototype,"tabs",void 0);g([P],Wt.prototype,"tabpanels",void 0);g([y({mode:"boolean"})],Wt.prototype,"activeindicator",void 0);g([P],Wt.prototype,"activeIndicatorRef",void 0);g([P],Wt.prototype,"showActiveIndicator",void 0);tt(Wt,zi);class am extends me{}class lm extends Ns(am){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Xc={none:"none"};let We=class extends lm{constructor(){super(...arguments),this.resize=Xc.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};g([y({mode:"boolean"})],We.prototype,"readOnly",void 0);g([y],We.prototype,"resize",void 0);g([y({mode:"boolean"})],We.prototype,"autofocus",void 0);g([y({attribute:"form"})],We.prototype,"formId",void 0);g([y],We.prototype,"list",void 0);g([y({converter:bt})],We.prototype,"maxlength",void 0);g([y({converter:bt})],We.prototype,"minlength",void 0);g([y],We.prototype,"name",void 0);g([y],We.prototype,"placeholder",void 0);g([y({converter:bt,mode:"fromView"})],We.prototype,"cols",void 0);g([y({converter:bt,mode:"fromView"})],We.prototype,"rows",void 0);g([y({mode:"boolean"})],We.prototype,"spellcheck",void 0);g([P],We.prototype,"defaultSlottedNodes",void 0);tt(We,gr);const cm=(i,e)=>re`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.resize!==Xc.none?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ut("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,s)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${Ue("control")}
        ></textarea>
    </template>
`,dm=(i,e)=>re`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${ut({property:"defaultSlottedNodes",filter:Kg})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${qi(i,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Ue("control")}
            />
            ${Ui(i,e)}
        </div>
    </template>
`,ti="not-allowed",um=":host([hidden]){display:none}";function Me(i){return`${um}:host{display:${i}}`}const Pe=rg()?"focus-visible":"focus";function hm(i){return Jc.getOrCreate(i).withPrefix("vscode")}function fm(i){window.addEventListener("load",()=>{new MutationObserver(()=>{Qa(i)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Qa(i)})}function Qa(i){const e=getComputedStyle(document.body),t=document.querySelector("body");if(t){const s=t.getAttribute("data-vscode-theme-kind");for(const[n,o]of i){let r=e.getPropertyValue(n).toString();if(s==="vscode-high-contrast")r.length===0&&o.name.includes("background")&&(r="transparent"),o.name==="button-icon-hover-background"&&(r="transparent");else if(s==="vscode-high-contrast-light"){if(r.length===0&&o.name.includes("background"))switch(o.name){case"button-primary-hover-background":r="#0F4A85";break;case"button-secondary-hover-background":r="transparent";break;case"button-icon-hover-background":r="transparent";break}}else o.name==="contrast-active-border"&&(r="transparent");o.setValueFor(t,r)}}}const Za=new Map;let Xa=!1;function _(i,e){const t=Yc.create(i);if(e){if(e.includes("--fake-vscode-token")){const s="id"+Math.random().toString(16).slice(2);e=`${e}-${s}`}Za.set(e,t)}return Xa||(fm(Za),Xa=!0),t}const pm=_("background","--vscode-editor-background").withDefault("#1e1e1e"),oe=_("border-width").withDefault(1),Kc=_("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");_("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const Bs=_("corner-radius").withDefault(0),Li=_("corner-radius-round").withDefault(2),U=_("design-unit").withDefault(4),xi=_("disabled-opacity").withDefault(.4),$e=_("focus-border","--vscode-focusBorder").withDefault("#007fd4"),ht=_("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");_("font-weight","--vscode-font-weight").withDefault("400");const De=_("foreground","--vscode-foreground").withDefault("#cccccc"),sn=_("input-height").withDefault("26"),br=_("input-min-width").withDefault("100px"),qe=_("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),et=_("type-ramp-base-line-height").withDefault("normal"),ed=_("type-ramp-minus1-font-size").withDefault("11px"),td=_("type-ramp-minus1-line-height").withDefault("16px");_("type-ramp-minus2-font-size").withDefault("9px");_("type-ramp-minus2-line-height").withDefault("16px");_("type-ramp-plus1-font-size").withDefault("16px");_("type-ramp-plus1-line-height").withDefault("24px");const gm=_("scrollbarWidth").withDefault("10px"),mm=_("scrollbarHeight").withDefault("10px"),bm=_("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),vm=_("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),ym=_("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),id=_("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),sd=_("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),vr=_("button-border","--vscode-button-border").withDefault("transparent"),Ka=_("button-icon-background").withDefault("transparent"),xm=_("button-icon-corner-radius").withDefault("5px"),wm=_("button-icon-outline-offset").withDefault(0),el=_("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),$m=_("button-icon-padding").withDefault("3px"),Fi=_("button-primary-background","--vscode-button-background").withDefault("#0e639c"),nd=_("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),od=_("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),go=_("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Cm=_("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Sm=_("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),km=_("button-padding-horizontal").withDefault("11px"),Tm=_("button-padding-vertical").withDefault("4px"),Ft=_("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Ri=_("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Om=_("checkbox-corner-radius").withDefault(3);_("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const ui=_("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),Mi=_("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Im=_("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Rm=_("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Js=_("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Zt=_("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");_("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const Em=_("dropdown-list-max-height").withDefault("200px"),hi=_("input-background","--vscode-input-background").withDefault("#3c3c3c"),rd=_("input-foreground","--vscode-input-foreground").withDefault("#cccccc");_("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const tl=_("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Am=_("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Dm=_("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),_m=_("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Oi=_("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Pm=_("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");_("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e");_("panel-view-border","--vscode-panel-border").withDefault("#80808059");const Lm=_("tag-corner-radius").withDefault("2px"),Fm=(i,e)=>ye`
	${Me("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${ht};
		font-size: ${ed};
		line-height: ${td};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${id};
		border: calc(${oe} * 1px) solid ${vr};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${sd};
		display: flex;
		height: calc(${U} * 4px);
		justify-content: center;
		min-width: calc(${U} * 4px + 2px);
		min-height: calc(${U} * 4px + 2px);
		padding: 3px 6px;
	}
`;class Mm extends Ms{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const Nm=Mm.compose({baseName:"badge",template:Uc,styles:Fm});function Bm(i,e,t,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(o=(n<3?r(o):n>3?r(e,t,o):r(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o}const Hm=ye`
	${Me("inline-flex")} :host {
		outline: none;
		font-family: ${ht};
		font-size: ${qe};
		line-height: ${et};
		color: ${nd};
		background: ${Fi};
		border-radius: calc(${Li} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Tm} ${km};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${oe} * 1px) solid ${vr};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${od};
	}
	:host(:active) {
		background: ${Fi};
	}
	.control:${Pe} {
		outline: calc(${oe} * 1px) solid ${$e};
		outline-offset: calc(${oe} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${xi};
		background: ${Fi};
		cursor: ${ti};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${U} * 4px);
		height: calc(${U} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Vm=ye`
	:host([appearance='primary']) {
		background: ${Fi};
		color: ${nd};
	}
	:host([appearance='primary']:hover) {
		background: ${od};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${Fi};
	}
	:host([appearance='primary']) .control:${Pe} {
		outline: calc(${oe} * 1px) solid ${$e};
		outline-offset: calc(${oe} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${Fi};
	}
`,jm=ye`
	:host([appearance='secondary']) {
		background: ${go};
		color: ${Cm};
	}
	:host([appearance='secondary']:hover) {
		background: ${Sm};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${go};
	}
	:host([appearance='secondary']) .control:${Pe} {
		outline: calc(${oe} * 1px) solid ${$e};
		outline-offset: calc(${oe} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${go};
	}
`,zm=ye`
	:host([appearance='icon']) {
		background: ${Ka};
		border-radius: ${xm};
		color: ${De};
	}
	:host([appearance='icon']:hover) {
		background: ${el};
		outline: 1px dotted ${Kc};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${$m};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${el};
	}
	:host([appearance='icon']) .control:${Pe} {
		outline: calc(${oe} * 1px) solid ${$e};
		outline-offset: ${wm};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Ka};
	}
`,Um=(i,e)=>ye`
	${Hm}
	${Vm}
	${jm}
	${zm}
`;class ad extends yt{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,s){e==="appearance"&&s==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=s),e==="disabled"&&(this.disabled=s!==null)}}Bm([y],ad.prototype,"appearance",void 0);const qm=ad.compose({baseName:"button",template:gg,styles:Um,shadowOptions:{delegatesFocus:!0}}),Wm=(i,e)=>ye`
	${Me("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${U} * 1px) 0;
		user-select: none;
		font-size: ${qe};
		line-height: ${et};
	}
	.control {
		position: relative;
		width: calc(${U} * 4px + 2px);
		height: calc(${U} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Om} * 1px);
		border: calc(${oe} * 1px) solid ${Ri};
		background: ${Ft};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${ht};
		color: ${De};
		padding-inline-start: calc(${U} * 2px + 2px);
		margin-inline-end: calc(${U} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${De};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${De};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Ft};
		border-color: ${Ri};
	}
	:host(:enabled) .control:active {
		background: ${Ft};
		border-color: ${$e};
	}
	:host(:${Pe}) .control {
		border: calc(${oe} * 1px) solid ${$e};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${ti};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${xi};
	}
`;class Gm extends _n{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const Ym=Gm.compose({baseName:"checkbox",template:Tg,styles:Wm,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`}),Jm=(i,e)=>ye`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`,Qm=(i,e)=>ye`
	:host {
		display: grid;
		padding: calc((${U} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${pm};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Im};
		outline: 1px dotted ${Kc};
		outline-offset: -1px;
	}
`,Zm=(i,e)=>ye`
	:host {
		padding: calc(${U} * 1px) calc(${U} * 3px);
		color: ${De};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${ht};
		font-size: ${qe};
		line-height: ${et};
		font-weight: 400;
		border: solid calc(${oe} * 1px) transparent;
		border-radius: calc(${Bs} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${Pe}),
	:host(:focus),
	:host(:active) {
		background: ${ui};
		border: solid calc(${oe} * 1px) ${$e};
		color: ${Mi};
		outline: none;
	}
	:host(:${Pe}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Mi} !important;
	}
`;class Xm extends Fe{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const Km=Xm.compose({baseName:"data-grid",baseClass:Fe,template:yg,styles:Jm});class eb extends Le{}const tb=eb.compose({baseName:"data-grid-row",baseClass:Le,template:Sg,styles:Qm});class ib extends ii{}const sb=ib.compose({baseName:"data-grid-cell",baseClass:ii,template:kg,styles:Zm}),nb=(i,e)=>ye`
	${Me("block")} :host {
		border: none;
		border-top: calc(${oe} * 1px) solid ${Rm};
		box-sizing: content-box;
		height: 0;
		margin: calc(${U} * 1px) 0;
		width: 100%;
	}
`;class ob extends pr{}const rb=ob.compose({baseName:"divider",template:jg,styles:nb}),ab=(i,e)=>ye`
	${Me("inline-flex")} :host {
		background: ${Js};
		border-radius: calc(${Li} * 1px);
		box-sizing: border-box;
		color: ${De};
		contain: contents;
		font-family: ${ht};
		height: calc(${sn} * 1px);
		position: relative;
		user-select: none;
		min-width: ${br};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${oe} * 1px) solid ${Zt};
		border-radius: calc(${Li} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${qe};
		line-height: ${et};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Js};
		border: calc(${oe} * 1px) solid ${$e};
		border-radius: calc(${Li} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Em};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${Pe}) .control {
		border-color: ${$e};
	}
	:host(:not([disabled]):hover) {
		background: ${Js};
		border-color: ${Zt};
	}
	:host(:${Pe}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${ui};
		border: calc(${oe} * 1px) solid transparent;
		color: ${Mi};
	}
	:host([disabled]) {
		cursor: ${ti};
		opacity: ${xi};
	}
	:host([disabled]) .control {
		cursor: ${ti};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Js};
		color: ${De};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${$e};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${$e};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${sn} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${sn} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${U} * 4px);
		min-width: calc(${U} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;class lb extends ni{}const cb=lb.compose({baseName:"dropdown",template:im,styles:ab,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`}),db=(i,e)=>ye`
	${Me("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Am};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${ht};
		font-size: ${qe};
		line-height: ${et};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${oe} * 1px) solid transparent;
		border-radius: calc(${Bs} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${tl};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${tl};
	}
	:host(:${Pe}) .control,
	:host(:focus) .control {
		border: calc(${oe} * 1px) solid ${$e};
	}
`;class ub extends vt{}const hb=ub.compose({baseName:"link",template:fg,styles:db,shadowOptions:{delegatesFocus:!0}}),fb=(i,e)=>ye`
	${Me("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Bs};
		border: calc(${oe} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${De};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${qe};
		line-height: ${et};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${U} / 2) * 1px)
			calc((${U} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${Pe}) {
		border-color: ${$e};
		background: ${ui};
		color: ${De};
	}
	:host([aria-selected='true']) {
		background: ${ui};
		border: calc(${oe} * 1px) solid transparent;
		color: ${Mi};
	}
	:host(:active) {
		background: ${ui};
		color: ${Mi};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${ui};
		border: calc(${oe} * 1px) solid transparent;
		color: ${Mi};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${ui};
		color: ${De};
	}
	:host([disabled]) {
		cursor: ${ti};
		opacity: ${xi};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;let pb=class extends qt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}};const gb=pb.compose({baseName:"option",template:Ug,styles:fb}),mb=(i,e)=>ye`
	${Me("grid")} :host {
		box-sizing: border-box;
		font-family: ${ht};
		font-size: ${qe};
		line-height: ${et};
		color: ${De};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${U} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${U} * 1px) calc(${U} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${U} / 4) * 1px);
		justify-self: center;
		background: ${Oi};
		margin: 0;
		border-radius: calc(${Bs} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`,bb=(i,e)=>ye`
	${Me("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${ht};
		font-size: ${qe};
		line-height: ${et};
		height: calc(${U} * 7px);
		padding: calc(${U} * 1px) 0;
		color: ${Pm};
		fill: currentcolor;
		border-radius: calc(${Bs} * 1px);
		border: solid calc(${oe} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Oi};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Oi};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Oi};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Oi};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Oi};
		fill: currentcolor;
	}
	:host(:${Pe}) {
		outline: none;
		border: solid calc(${oe} * 1px) ${_m};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${U} * 2px);
	}
`,vb=(i,e)=>ye`
	${Me("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${oe} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${qe};
		line-height: ${et};
		padding: 10px calc((${U} + 2) * 1px);
	}
`;class yb extends Wt{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Po.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}yb.compose({baseName:"panels",template:rm,styles:mb});class xb extends Zc{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}xb.compose({baseName:"panel-tab",template:om,styles:bb});class wb extends nm{}wb.compose({baseName:"panel-view",template:sm,styles:vb});const $b=(i,e)=>ye`
	${Me("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${U} * 7px);
		width: calc(${U} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${U} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${Dm};
		stroke-width: calc(${U} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;class Cb extends Ji{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,s){e==="value"&&this.removeAttribute("value")}}const Sb=Cb.compose({baseName:"progress-ring",template:Yg,styles:$b,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`}),kb=(i,e)=>ye`
	${Me("flex")} :host {
		align-items: flex-start;
		margin: calc(${U} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${De};
		font-size: ${qe};
		margin: calc(${U} * 1px) 0;
	}
`;class Tb extends si{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}const Ob=Tb.compose({baseName:"radio-group",template:Jg,styles:kb}),Ib=(i,e)=>ye`
	${Me("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${qe};
		line-height: ${et};
		margin: calc(${U} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Ft};
		border-radius: 999px;
		border: calc(${oe} * 1px) solid ${Ri};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${U} * 4px);
		position: relative;
		outline: none;
		width: calc(${U} * 4px);
	}
	.label {
		color: ${De};
		cursor: pointer;
		font-family: ${ht};
		margin-inline-end: calc(${U} * 2px + 2px);
		padding-inline-start: calc(${U} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${De};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${U} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Ft};
		border-color: ${Ri};
	}
	:host(:not([disabled])) .control:active {
		background: ${Ft};
		border-color: ${$e};
	}
	:host(:${Pe}) .control {
		border: calc(${oe} * 1px) solid ${$e};
	}
	:host([aria-checked='true']) .control {
		background: ${Ft};
		border: calc(${oe} * 1px) solid ${Ri};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Ft};
		border: calc(${oe} * 1px) solid ${Ri};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Ft};
		border: calc(${oe} * 1px) solid ${$e};
	}
	:host([aria-checked="true"]:${Pe}:not([disabled])) .control {
		border: calc(${oe} * 1px) solid ${$e};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${ti};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${xi};
	}
`;class Rb extends Ln{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const Eb=Rb.compose({baseName:"radio",template:Qg,styles:Ib,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`}),Ab=(i,e)=>ye`
	${Me("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${ht};
		font-size: ${ed};
		line-height: ${td};
	}
	.control {
		background-color: ${id};
		border: calc(${oe} * 1px) solid ${vr};
		border-radius: ${Lm};
		color: ${sd};
		padding: calc(${U} * 0.5px) calc(${U} * 1px);
		text-transform: uppercase;
	}
`;class Db extends Ms{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const _b=Db.compose({baseName:"tag",template:Uc,styles:Ab}),Pb=(i,e)=>ye`
	${Me("inline-block")} :host {
		font-family: ${ht};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${rd};
		background: ${hi};
		border-radius: calc(${Li} * 1px);
		border: calc(${oe} * 1px) solid ${Zt};
		font: inherit;
		font-size: ${qe};
		line-height: ${et};
		padding: calc(${U} * 2px + 1px);
		width: 100%;
		min-width: ${br};
		resize: none;
	}
	.control:hover:enabled {
		background: ${hi};
		border-color: ${Zt};
	}
	.control:active:enabled {
		background: ${hi};
		border-color: ${$e};
	}
	.control:hover,
	.control:${Pe},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${gm};
		height: ${mm};
	}
	.control::-webkit-scrollbar-corner {
		background: ${hi};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${bm};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${vm};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${ym};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${$e};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${De};
		cursor: pointer;
		font-size: ${qe};
		line-height: ${et};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${ti};
	}
	:host([disabled]) {
		opacity: ${xi};
	}
	:host([disabled]) .control {
		border-color: ${Zt};
	}
`;class Lb extends We{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const Fb=Lb.compose({baseName:"text-area",template:cm,styles:Pb,shadowOptions:{delegatesFocus:!0}}),Mb=(i,e)=>ye`
	${Me("inline-block")} :host {
		font-family: ${ht};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${rd};
		background: ${hi};
		border-radius: calc(${Li} * 1px);
		border: calc(${oe} * 1px) solid ${Zt};
		height: calc(${sn} * 1px);
		min-width: ${br};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${U} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${U} * 2px + 1px);
		font-size: ${qe};
		line-height: ${et};
	}
	.control:hover,
	.control:${Pe},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${De};
		cursor: pointer;
		font-size: ${qe};
		line-height: ${et};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${U} * 4px);
		height: calc(${U} * 4px);
	}
	.start {
		margin-inline-start: calc(${U} * 2px);
	}
	.end {
		margin-inline-end: calc(${U} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${hi};
		border-color: ${Zt};
	}
	:host(:active:not([disabled])) .root {
		background: ${hi};
		border-color: ${$e};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${$e};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${ti};
	}
	:host([disabled]) {
		opacity: ${xi};
	}
	:host([disabled]) .control {
		border-color: ${Zt};
	}
`;class Nb extends nt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const Bb=Nb.compose({baseName:"text-field",template:dm,styles:Mb,shadowOptions:{delegatesFocus:!0}});hm().register(qm(),Ym(),Sb(),Eb(),Ob(),Km(),Nm(),rb(),hb(),cb(),gb(),_b(),Fb(),Bb(),tb(),sb());const yr=Dh(cf);yr.use(Zf,ip);yr.config.errorHandler=(i,e,t)=>{acquireVsCodeApi().postMessage({type:"webviewError",payload:{errMsg:i?.message,stack:i?.stack}})};yr.mount("#app");
