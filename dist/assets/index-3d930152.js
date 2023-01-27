(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function _6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}function O6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=H1(s)?co(s):O6(s);if(r)for(const i in r)a[i]=r[i]}return a}else{if(H1(c))return c;if(t1(c))return c}}const Xl=/;(?![^(]*\))/g,Ql=/:([^]+)/,Jl=/\/\*.*?\*\//gs;function co(c){const a={};return c.replace(Jl,"").split(Xl).forEach(e=>{if(e){const s=e.split(Ql);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function $6(c){let a="";if(H1(c))a=c;else if(U(c))for(let e=0;e<c.length;e++){const s=$6(c[e]);s&&(a+=s+" ")}else if(t1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const ao="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eo=_6(ao);function $0(c){return!!c||c===""}const i1={},q2=[],D1=()=>{},so=()=>!1,ro=/^on[^a-z]/,M4=c=>ro.test(c),U6=c=>c.startsWith("onUpdate:"),d1=Object.assign,I6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},io=Object.prototype.hasOwnProperty,K=(c,a)=>io.call(c,a),U=Array.isArray,n3=c=>p4(c)==="[object Map]",no=c=>p4(c)==="[object Set]",$=c=>typeof c=="function",H1=c=>typeof c=="string",G6=c=>typeof c=="symbol",t1=c=>c!==null&&typeof c=="object",U0=c=>t1(c)&&$(c.then)&&$(c.catch),fo=Object.prototype.toString,p4=c=>fo.call(c),lo=c=>p4(c).slice(8,-1),oo=c=>p4(c)==="[object Object]",W6=c=>H1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,s4=_6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),d4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},to=/-(\w)/g,j1=d4(c=>c.replace(to,(a,e)=>e?e.toUpperCase():"")),mo=/\B([A-Z])/g,Y2=d4(c=>c.replace(mo,"-$1").toLowerCase()),L4=d4(c=>c.charAt(0).toUpperCase()+c.slice(1)),Q4=d4(c=>c?`on${L4(c)}`:""),h3=(c,a)=>!Object.is(c,a),J4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},o4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},I0=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let S5;const zo=()=>S5||(S5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let I1;class Co{constructor(a=!1){this.detached=a,this.active=!0,this.effects=[],this.cleanups=[],this.parent=I1,!a&&I1&&(this.index=(I1.scopes||(I1.scopes=[])).push(this)-1)}run(a){if(this.active){const e=I1;try{return I1=this,a()}finally{I1=e}}}on(){I1=this}off(){I1=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function vo(c,a=I1){a&&a.active&&a.effects.push(c)}const Z6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},G0=c=>(c.w&v2)>0,W0=c=>(c.n&v2)>0,ho=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=v2},Ho=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];G0(r)&&!W0(r)?r.delete(c):a[e++]=r,r.w&=~v2,r.n&=~v2}a.length=e}},z6=new WeakMap;let r3=0,v2=1;const C6=30;let T1;const N2=Symbol(""),v6=Symbol("");class j6{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,vo(this,s)}run(){if(!this.active)return this.fn();let a=T1,e=m2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=T1,T1=this,m2=!0,v2=1<<++r3,r3<=C6?ho(this):N5(this),this.fn()}finally{r3<=C6&&Ho(this),v2=1<<--r3,T1=this.parent,m2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){T1===this?this.deferStop=!0:this.active&&(N5(this),this.onStop&&this.onStop(),this.active=!1)}}function N5(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let m2=!0;const Z0=[];function X2(){Z0.push(m2),m2=!1}function Q2(){const c=Z0.pop();m2=c===void 0?!0:c}function N1(c,a,e){if(m2&&T1){let s=z6.get(c);s||z6.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=Z6()),j0(r)}}function j0(c,a){let e=!1;r3<=C6?W0(c)||(c.n|=v2,e=!G0(c)):e=!c.has(T1),e&&(c.add(T1),T1.deps.push(c))}function J1(c,a,e,s,r,i){const n=z6.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&U(c)){const l=I0(s);n.forEach((t,o)=>{(o==="length"||o>=l)&&f.push(t)})}else switch(e!==void 0&&f.push(n.get(e)),a){case"add":U(c)?W6(e)&&f.push(n.get("length")):(f.push(n.get(N2)),n3(c)&&f.push(n.get(v6)));break;case"delete":U(c)||(f.push(n.get(N2)),n3(c)&&f.push(n.get(v6)));break;case"set":n3(c)&&f.push(n.get(N2));break}if(f.length===1)f[0]&&h6(f[0]);else{const l=[];for(const t of f)t&&l.push(...t);h6(Z6(l))}}function h6(c,a){const e=U(c)?c:[...c];for(const s of e)s.computed&&w5(s);for(const s of e)s.computed||w5(s)}function w5(c,a){(c!==T1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const uo=_6("__proto__,__v_isRef,__isVue"),K0=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(G6)),Vo=K6(),Mo=K6(!1,!0),po=K6(!0),k5=Lo();function Lo(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=Y(this);for(let i=0,n=this.length;i<n;i++)N1(s,"get",i+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){X2();const s=Y(this)[a].apply(this,e);return Q2(),s}}),c}function K6(c=!1,a=!1){return function(s,r,i){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&i===(c?a?Do:c7:a?J0:Q0).get(s))return s;const n=U(s);if(!c&&n&&K(k5,r))return Reflect.get(k5,r,i);const f=Reflect.get(s,r,i);return(G6(r)?K0.has(r):uo(r))||(c||N1(s,"get",r),a)?f:V1(f)?n&&W6(r)?f:f.value:t1(f)?c?a7(f):w3(f):f}}const go=Y0(),xo=Y0(!0);function Y0(c=!1){return function(e,s,r,i){let n=e[s];if(I2(n)&&V1(n)&&!V1(r))return!1;if(!c&&(!t4(r)&&!I2(r)&&(n=Y(n),r=Y(r)),!U(e)&&V1(n)&&!V1(r)))return n.value=r,!0;const f=U(e)&&W6(s)?Number(s)<e.length:K(e,s),l=Reflect.set(e,s,r,i);return e===Y(i)&&(f?h3(r,n)&&J1(e,"set",s,r):J1(e,"add",s,r)),l}}function bo(c,a){const e=K(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&J1(c,"delete",a,void 0),s}function So(c,a){const e=Reflect.has(c,a);return(!G6(a)||!K0.has(a))&&N1(c,"has",a),e}function No(c){return N1(c,"iterate",U(c)?"length":N2),Reflect.ownKeys(c)}const X0={get:Vo,set:go,deleteProperty:bo,has:So,ownKeys:No},wo={get:po,set(c,a){return!0},deleteProperty(c,a){return!0}},ko=d1({},X0,{get:Mo,set:xo}),Y6=c=>c,g4=c=>Reflect.getPrototypeOf(c);function $3(c,a,e=!1,s=!1){c=c.__v_raw;const r=Y(c),i=Y(a);e||(a!==i&&N1(r,"get",a),N1(r,"get",i));const{has:n}=g4(r),f=s?Y6:e?J6:H3;if(n.call(r,a))return f(c.get(a));if(n.call(r,i))return f(c.get(i));c!==r&&c.get(a)}function U3(c,a=!1){const e=this.__v_raw,s=Y(e),r=Y(c);return a||(c!==r&&N1(s,"has",c),N1(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function I3(c,a=!1){return c=c.__v_raw,!a&&N1(Y(c),"iterate",N2),Reflect.get(c,"size",c)}function y5(c){c=Y(c);const a=Y(this);return g4(a).has.call(a,c)||(a.add(c),J1(a,"add",c,c)),this}function A5(c,a){a=Y(a);const e=Y(this),{has:s,get:r}=g4(e);let i=s.call(e,c);i||(c=Y(c),i=s.call(e,c));const n=r.call(e,c);return e.set(c,a),i?h3(a,n)&&J1(e,"set",c,a):J1(e,"add",c,a),this}function P5(c){const a=Y(this),{has:e,get:s}=g4(a);let r=e.call(a,c);r||(c=Y(c),r=e.call(a,c)),s&&s.call(a,c);const i=a.delete(c);return r&&J1(a,"delete",c,void 0),i}function T5(){const c=Y(this),a=c.size!==0,e=c.clear();return a&&J1(c,"clear",void 0,void 0),e}function G3(c,a){return function(s,r){const i=this,n=i.__v_raw,f=Y(n),l=a?Y6:c?J6:H3;return!c&&N1(f,"iterate",N2),n.forEach((t,o)=>s.call(r,l(t),l(o),i))}}function W3(c,a,e){return function(...s){const r=this.__v_raw,i=Y(r),n=n3(i),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,t=r[c](...s),o=e?Y6:a?J6:H3;return!a&&N1(i,"iterate",l?v6:N2),{next(){const{value:z,done:v}=t.next();return v?{value:z,done:v}:{value:f?[o(z[0]),o(z[1])]:o(z),done:v}},[Symbol.iterator](){return this}}}}function n2(c){return function(...a){return c==="delete"?!1:this}}function yo(){const c={get(i){return $3(this,i)},get size(){return I3(this)},has:U3,add:y5,set:A5,delete:P5,clear:T5,forEach:G3(!1,!1)},a={get(i){return $3(this,i,!1,!0)},get size(){return I3(this)},has:U3,add:y5,set:A5,delete:P5,clear:T5,forEach:G3(!1,!0)},e={get(i){return $3(this,i,!0)},get size(){return I3(this,!0)},has(i){return U3.call(this,i,!0)},add:n2("add"),set:n2("set"),delete:n2("delete"),clear:n2("clear"),forEach:G3(!0,!1)},s={get(i){return $3(this,i,!0,!0)},get size(){return I3(this,!0)},has(i){return U3.call(this,i,!0)},add:n2("add"),set:n2("set"),delete:n2("delete"),clear:n2("clear"),forEach:G3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=W3(i,!1,!1),e[i]=W3(i,!0,!1),a[i]=W3(i,!1,!0),s[i]=W3(i,!0,!0)}),[c,e,a,s]}const[Ao,Po,To,Fo]=yo();function X6(c,a){const e=a?c?Fo:To:c?Po:Ao;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(K(e,r)&&r in s?e:s,r,i)}const Bo={get:X6(!1,!1)},Ro={get:X6(!1,!0)},Eo={get:X6(!0,!1)},Q0=new WeakMap,J0=new WeakMap,c7=new WeakMap,Do=new WeakMap;function qo(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _o(c){return c.__v_skip||!Object.isExtensible(c)?0:qo(lo(c))}function w3(c){return I2(c)?c:Q6(c,!1,X0,Bo,Q0)}function Oo(c){return Q6(c,!1,ko,Ro,J0)}function a7(c){return Q6(c,!0,wo,Eo,c7)}function Q6(c,a,e,s,r){if(!t1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const n=_o(c);if(n===0)return c;const f=new Proxy(c,n===2?s:e);return r.set(c,f),f}function _2(c){return I2(c)?_2(c.__v_raw):!!(c&&c.__v_isReactive)}function I2(c){return!!(c&&c.__v_isReadonly)}function t4(c){return!!(c&&c.__v_isShallow)}function e7(c){return _2(c)||I2(c)}function Y(c){const a=c&&c.__v_raw;return a?Y(a):c}function s7(c){return o4(c,"__v_skip",!0),c}const H3=c=>t1(c)?w3(c):c,J6=c=>t1(c)?a7(c):c;function r7(c){m2&&T1&&(c=Y(c),j0(c.dep||(c.dep=Z6())))}function i7(c,a){c=Y(c),c.dep&&h6(c.dep)}function V1(c){return!!(c&&c.__v_isRef===!0)}function $o(c){return n7(c,!1)}function Uo(c){return n7(c,!0)}function n7(c,a){return V1(c)?c:new Io(c,a)}class Io{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:Y(a),this._value=e?a:H3(a)}get value(){return r7(this),this._value}set value(a){const e=this.__v_isShallow||t4(a)||I2(a);a=e?a:Y(a),h3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:H3(a),i7(this))}}function O2(c){return V1(c)?c.value:c}const Go={get:(c,a,e)=>O2(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return V1(r)&&!V1(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function f7(c){return _2(c)?c:new Proxy(c,Go)}var l7;class Wo{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[l7]=!1,this._dirty=!0,this.effect=new j6(a,()=>{this._dirty||(this._dirty=!0,i7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=Y(this);return r7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}l7="__v_isReadonly";function Zo(c,a,e=!1){let s,r;const i=$(c);return i?(s=c,r=D1):(s=c.get,r=c.set),new Wo(s,r,i||!r,e)}function z2(c,a,e,s){let r;try{r=s?c(...s):c()}catch(i){x4(i,a,e)}return r}function q1(c,a,e,s){if($(c)){const i=z2(c,a,e,s);return i&&U0(i)&&i.catch(n=>{x4(n,a,e)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(q1(c[i],a,e,s));return r}function x4(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,f=e;for(;i;){const t=i.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,f)===!1)return}i=i.parent}const l=a.appContext.config.errorHandler;if(l){z2(l,null,10,[c,n,f]);return}}jo(c,e,r,s)}function jo(c,a,e,s=!0){console.error(c)}let u3=!1,H6=!1;const u1=[];let W1=0;const $2=[];let Y1=null,g2=0;const o7=Promise.resolve();let c8=null;function t7(c){const a=c8||o7;return c?a.then(this?c.bind(this):c):a}function Ko(c){let a=W1+1,e=u1.length;for(;a<e;){const s=a+e>>>1;V3(u1[s])<c?a=s+1:e=s}return a}function a8(c){(!u1.length||!u1.includes(c,u3&&c.allowRecurse?W1+1:W1))&&(c.id==null?u1.push(c):u1.splice(Ko(c.id),0,c),m7())}function m7(){!u3&&!H6&&(H6=!0,c8=o7.then(C7))}function Yo(c){const a=u1.indexOf(c);a>W1&&u1.splice(a,1)}function Xo(c){U(c)?$2.push(...c):(!Y1||!Y1.includes(c,c.allowRecurse?g2+1:g2))&&$2.push(c),m7()}function F5(c,a=u3?W1+1:0){for(;a<u1.length;a++){const e=u1[a];e&&e.pre&&(u1.splice(a,1),a--,e())}}function z7(c){if($2.length){const a=[...new Set($2)];if($2.length=0,Y1){Y1.push(...a);return}for(Y1=a,Y1.sort((e,s)=>V3(e)-V3(s)),g2=0;g2<Y1.length;g2++)Y1[g2]();Y1=null,g2=0}}const V3=c=>c.id==null?1/0:c.id,Qo=(c,a)=>{const e=V3(c)-V3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function C7(c){H6=!1,u3=!0,u1.sort(Qo);const a=D1;try{for(W1=0;W1<u1.length;W1++){const e=u1[W1];e&&e.active!==!1&&z2(e,null,14)}}finally{W1=0,u1.length=0,z7(),u3=!1,c8=null,(u1.length||$2.length)&&C7()}}function Jo(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||i1;let r=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in s){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:v}=s[o]||i1;v&&(r=e.map(H=>H1(H)?H.trim():H)),z&&(r=e.map(I0))}let f,l=s[f=Q4(a)]||s[f=Q4(j1(a))];!l&&i&&(l=s[f=Q4(Y2(a))]),l&&q1(l,c,6,r);const t=s[f+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,q1(t,c,6,r)}}function v7(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let n={},f=!1;if(!$(c)){const l=t=>{const o=v7(t,a,!0);o&&(f=!0,d1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!i&&!f?(t1(c)&&s.set(c,null),null):(U(i)?i.forEach(l=>n[l]=null):d1(n,i),t1(c)&&s.set(c,n),n)}function b4(c,a){return!c||!M4(a)?!1:(a=a.slice(2).replace(/Once$/,""),K(c,a[0].toLowerCase()+a.slice(1))||K(c,Y2(a))||K(c,a))}let B1=null,h7=null;function m4(c){const a=B1;return B1=c,h7=c&&c.type.__scopeId||null,a}function C1(c,a=B1,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&U5(-1);const i=m4(a);let n;try{n=c(...r)}finally{m4(i),s._d&&U5(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function c6(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:i,propsOptions:[n],slots:f,attrs:l,emit:t,render:o,renderCache:z,data:v,setupState:H,ctx:b,inheritAttrs:k}=c;let B,V;const d=m4(c);try{if(e.shapeFlag&4){const _=r||s;B=G1(o.call(_,_,z,i,H,v,b)),V=l}else{const _=a;B=G1(_.length>1?_(i,{attrs:l,slots:f,emit:t}):_(i,null)),V=a.props?l:ct(l)}}catch(_){o3.length=0,x4(_,c,1),B=E(M3)}let S=B;if(V&&k!==!1){const _=Object.keys(V),{shapeFlag:G}=S;_.length&&G&7&&(n&&_.some(U6)&&(V=at(V,n)),S=G2(S,V))}return e.dirs&&(S=G2(S),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&(S.transition=e.transition),B=S,m4(d),B}const ct=c=>{let a;for(const e in c)(e==="class"||e==="style"||M4(e))&&((a||(a={}))[e]=c[e]);return a},at=(c,a)=>{const e={};for(const s in c)(!U6(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function et(c,a,e){const{props:s,children:r,component:i}=c,{props:n,children:f,patchFlag:l}=a,t=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?B5(s,n,t):!!n;if(l&8){const o=a.dynamicProps;for(let z=0;z<o.length;z++){const v=o[z];if(n[v]!==s[v]&&!b4(t,v))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:s===n?!1:s?n?B5(s,n,t):!0:!!n;return!1}function B5(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(a[i]!==c[i]&&!b4(e,i))return!0}return!1}function st({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const rt=c=>c.__isSuspense;function it(c,a){a&&a.pendingBranch?U(c)?a.effects.push(...c):a.effects.push(c):Xo(c)}function r4(c,a){if(h1){let e=h1.provides;const s=h1.parent&&h1.parent.provides;s===e&&(e=h1.provides=Object.create(s)),e[c]=a}}function Q1(c,a,e=!1){const s=h1||B1;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&$(a)?a.call(s.proxy):a}}const Z3={};function f3(c,a,e){return H7(c,a,e)}function H7(c,a,{immediate:e,deep:s,flush:r,onTrack:i,onTrigger:n}=i1){const f=h1;let l,t=!1,o=!1;if(V1(c)?(l=()=>c.value,t=t4(c)):_2(c)?(l=()=>c,s=!0):U(c)?(o=!0,t=c.some(S=>_2(S)||t4(S)),l=()=>c.map(S=>{if(V1(S))return S.value;if(_2(S))return R2(S);if($(S))return z2(S,f,2)})):$(c)?a?l=()=>z2(c,f,2):l=()=>{if(!(f&&f.isUnmounted))return z&&z(),q1(c,f,3,[v])}:l=D1,a&&s){const S=l;l=()=>R2(S())}let z,v=S=>{z=V.onStop=()=>{z2(S,f,4)}},H;if(d3)if(v=D1,a?e&&q1(a,f,3,[l(),o?[]:void 0,v]):l(),r==="sync"){const S=cm();H=S.__watcherHandles||(S.__watcherHandles=[])}else return D1;let b=o?new Array(c.length).fill(Z3):Z3;const k=()=>{if(V.active)if(a){const S=V.run();(s||t||(o?S.some((_,G)=>h3(_,b[G])):h3(S,b)))&&(z&&z(),q1(a,f,3,[S,b===Z3?void 0:o&&b[0]===Z3?[]:b,v]),b=S)}else V.run()};k.allowRecurse=!!a;let B;r==="sync"?B=k:r==="post"?B=()=>x1(k,f&&f.suspense):(k.pre=!0,f&&(k.id=f.uid),B=()=>a8(k));const V=new j6(l,B);a?e?k():b=V.run():r==="post"?x1(V.run.bind(V),f&&f.suspense):V.run();const d=()=>{V.stop(),f&&f.scope&&I6(f.scope.effects,V)};return H&&H.push(d),d}function nt(c,a,e){const s=this.proxy,r=H1(c)?c.includes(".")?u7(s,c):()=>s[c]:c.bind(s,s);let i;$(a)?i=a:(i=a.handler,e=a);const n=h1;W2(this);const f=H7(r,i.bind(s),e);return n?W2(n):w2(),f}function u7(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function R2(c,a){if(!t1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),V1(c))R2(c.value,a);else if(U(c))for(let e=0;e<c.length;e++)R2(c[e],a);else if(no(c)||n3(c))c.forEach(e=>{R2(e,a)});else if(oo(c))for(const e in c)R2(c[e],a);return c}function k3(c){return $(c)?{setup:c,name:c.name}:c}const i4=c=>!!c.type.__asyncLoader,V7=c=>c.type.__isKeepAlive;function ft(c,a){M7(c,"a",a)}function lt(c,a){M7(c,"da",a)}function M7(c,a,e=h1){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(S4(a,s,e),e){let r=e.parent;for(;r&&r.parent;)V7(r.parent.vnode)&&ot(s,a,e,r),r=r.parent}}function ot(c,a,e,s){const r=S4(a,c,s,!0);p7(()=>{I6(s[a],r)},e)}function S4(c,a,e=h1,s=!1){if(e){const r=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;X2(),W2(e);const f=q1(a,e,c,n);return w2(),Q2(),f});return s?r.unshift(i):r.push(i),i}}const s2=c=>(a,e=h1)=>(!d3||c==="sp")&&S4(c,(...s)=>a(...s),e),tt=s2("bm"),mt=s2("m"),zt=s2("bu"),Ct=s2("u"),vt=s2("bum"),p7=s2("um"),ht=s2("sp"),Ht=s2("rtg"),ut=s2("rtc");function Vt(c,a=h1){S4("ec",c,a)}function p2(c,a,e,s){const r=c.dirs,i=a&&a.dirs;for(let n=0;n<r.length;n++){const f=r[n];i&&(f.oldValue=i[n].value);let l=f.dir[s];l&&(X2(),q1(l,e,8,[c.el,f,c,a]),Q2())}}const d7="components";function C2(c,a){return pt(d7,c,!0,a)||c}const Mt=Symbol();function pt(c,a,e=!0,s=!1){const r=B1||h1;if(r){const i=r.type;if(c===d7){const f=Xt(i,!1);if(f&&(f===a||f===j1(a)||f===L4(j1(a))))return i}const n=R5(r[c]||i[c],a)||R5(r.appContext[c],a);return!n&&s?i:n}}function R5(c,a){return c&&(c[a]||c[j1(a)]||c[L4(j1(a))])}const u6=c=>c?A7(c)?i8(c)||c.proxy:u6(c.parent):null,l3=d1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>u6(c.parent),$root:c=>u6(c.root),$emit:c=>c.emit,$options:c=>e8(c),$forceUpdate:c=>c.f||(c.f=()=>a8(c.update)),$nextTick:c=>c.n||(c.n=t7.bind(c.proxy)),$watch:c=>nt.bind(c)}),a6=(c,a)=>c!==i1&&!c.__isScriptSetup&&K(c,a),dt={get({_:c},a){const{ctx:e,setupState:s,data:r,props:i,accessCache:n,type:f,appContext:l}=c;let t;if(a[0]!=="$"){const H=n[a];if(H!==void 0)switch(H){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if(a6(s,a))return n[a]=1,s[a];if(r!==i1&&K(r,a))return n[a]=2,r[a];if((t=c.propsOptions[0])&&K(t,a))return n[a]=3,i[a];if(e!==i1&&K(e,a))return n[a]=4,e[a];V6&&(n[a]=0)}}const o=l3[a];let z,v;if(o)return a==="$attrs"&&N1(c,"get",a),o(c);if((z=f.__cssModules)&&(z=z[a]))return z;if(e!==i1&&K(e,a))return n[a]=4,e[a];if(v=l.config.globalProperties,K(v,a))return v[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:i}=c;return a6(r,a)?(r[a]=e,!0):s!==i1&&K(s,a)?(s[a]=e,!0):K(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:i}},n){let f;return!!e[n]||c!==i1&&K(c,n)||a6(a,n)||(f=i[0])&&K(f,n)||K(s,n)||K(l3,n)||K(r.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:K(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let V6=!0;function Lt(c){const a=e8(c),e=c.proxy,s=c.ctx;V6=!1,a.beforeCreate&&E5(a.beforeCreate,c,"bc");const{data:r,computed:i,methods:n,watch:f,provide:l,inject:t,created:o,beforeMount:z,mounted:v,beforeUpdate:H,updated:b,activated:k,deactivated:B,beforeDestroy:V,beforeUnmount:d,destroyed:S,unmounted:_,render:G,renderTracked:r1,renderTriggered:l1,errorCaptured:b1,serverPrefetch:M1,expose:k1,inheritAttrs:i2,components:O1,directives:A2,filters:V2}=a;if(t&&gt(t,s,null,c.appContext.config.unwrapInjectedRef),n)for(const c1 in n){const Q=n[c1];$(Q)&&(s[c1]=Q.bind(e))}if(r){const c1=r.call(e,e);t1(c1)&&(c.data=w3(c1))}if(V6=!0,i)for(const c1 in i){const Q=i[c1],y1=$(Q)?Q.bind(e,e):$(Q.get)?Q.get.bind(e,e):D1,M2=!$(Q)&&$(Q.set)?Q.set.bind(e):D1,A1=f1({get:y1,set:M2});Object.defineProperty(s,c1,{enumerable:!0,configurable:!0,get:()=>A1.value,set:L1=>A1.value=L1})}if(f)for(const c1 in f)L7(f[c1],s,e,c1);if(l){const c1=$(l)?l.call(e):l;Reflect.ownKeys(c1).forEach(Q=>{r4(Q,c1[Q])})}o&&E5(o,c,"c");function m1(c1,Q){U(Q)?Q.forEach(y1=>c1(y1.bind(e))):Q&&c1(Q.bind(e))}if(m1(tt,z),m1(mt,v),m1(zt,H),m1(Ct,b),m1(ft,k),m1(lt,B),m1(Vt,b1),m1(ut,r1),m1(Ht,l1),m1(vt,d),m1(p7,_),m1(ht,M1),U(k1))if(k1.length){const c1=c.exposed||(c.exposed={});k1.forEach(Q=>{Object.defineProperty(c1,Q,{get:()=>e[Q],set:y1=>e[Q]=y1})})}else c.exposed||(c.exposed={});G&&c.render===D1&&(c.render=G),i2!=null&&(c.inheritAttrs=i2),O1&&(c.components=O1),A2&&(c.directives=A2)}function gt(c,a,e=D1,s=!1){U(c)&&(c=M6(c));for(const r in c){const i=c[r];let n;t1(i)?"default"in i?n=Q1(i.from||r,i.default,!0):n=Q1(i.from||r):n=Q1(i),V1(n)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:f=>n.value=f}):a[r]=n}}function E5(c,a,e){q1(U(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function L7(c,a,e,s){const r=s.includes(".")?u7(e,s):()=>e[s];if(H1(c)){const i=a[c];$(i)&&f3(r,i)}else if($(c))f3(r,c.bind(e));else if(t1(c))if(U(c))c.forEach(i=>L7(i,a,e,s));else{const i=$(c.handler)?c.handler.bind(e):a[c.handler];$(i)&&f3(r,i,c)}}function e8(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,f=i.get(a);let l;return f?l=f:!r.length&&!e&&!s?l=a:(l={},r.length&&r.forEach(t=>z4(l,t,n,!0)),z4(l,a,n)),t1(a)&&i.set(a,l),l}function z4(c,a,e,s=!1){const{mixins:r,extends:i}=a;i&&z4(c,i,e,!0),r&&r.forEach(n=>z4(c,n,e,!0));for(const n in a)if(!(s&&n==="expose")){const f=xt[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const xt={data:D5,props:L2,emits:L2,methods:L2,computed:L2,beforeCreate:p1,created:p1,beforeMount:p1,mounted:p1,beforeUpdate:p1,updated:p1,beforeDestroy:p1,beforeUnmount:p1,destroyed:p1,unmounted:p1,activated:p1,deactivated:p1,errorCaptured:p1,serverPrefetch:p1,components:L2,directives:L2,watch:St,provide:D5,inject:bt};function D5(c,a){return a?c?function(){return d1($(c)?c.call(this,this):c,$(a)?a.call(this,this):a)}:a:c}function bt(c,a){return L2(M6(c),M6(a))}function M6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function p1(c,a){return c?[...new Set([].concat(c,a))]:a}function L2(c,a){return c?d1(d1(Object.create(null),c),a):a}function St(c,a){if(!c)return a;if(!a)return c;const e=d1(Object.create(null),c);for(const s in a)e[s]=p1(c[s],a[s]);return e}function Nt(c,a,e,s=!1){const r={},i={};o4(i,w4,1),c.propsDefaults=Object.create(null),g7(c,a,r,i);for(const n in c.propsOptions[0])n in r||(r[n]=void 0);e?c.props=s?r:Oo(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function wt(c,a,e,s){const{props:r,attrs:i,vnode:{patchFlag:n}}=c,f=Y(r),[l]=c.propsOptions;let t=!1;if((s||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let z=0;z<o.length;z++){let v=o[z];if(b4(c.emitsOptions,v))continue;const H=a[v];if(l)if(K(i,v))H!==i[v]&&(i[v]=H,t=!0);else{const b=j1(v);r[b]=p6(l,f,b,H,c,!1)}else H!==i[v]&&(i[v]=H,t=!0)}}}else{g7(c,a,r,i)&&(t=!0);let o;for(const z in f)(!a||!K(a,z)&&((o=Y2(z))===z||!K(a,o)))&&(l?e&&(e[z]!==void 0||e[o]!==void 0)&&(r[z]=p6(l,f,z,void 0,c,!0)):delete r[z]);if(i!==f)for(const z in i)(!a||!K(a,z))&&(delete i[z],t=!0)}t&&J1(c,"set","$attrs")}function g7(c,a,e,s){const[r,i]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(s4(l))continue;const t=a[l];let o;r&&K(r,o=j1(l))?!i||!i.includes(o)?e[o]=t:(f||(f={}))[o]=t:b4(c.emitsOptions,l)||(!(l in s)||t!==s[l])&&(s[l]=t,n=!0)}if(i){const l=Y(e),t=f||i1;for(let o=0;o<i.length;o++){const z=i[o];e[z]=p6(r,l,z,t[z],c,!K(t,z))}}return n}function p6(c,a,e,s,r,i){const n=c[e];if(n!=null){const f=K(n,"default");if(f&&s===void 0){const l=n.default;if(n.type!==Function&&$(l)){const{propsDefaults:t}=r;e in t?s=t[e]:(W2(r),s=t[e]=l.call(null,a),w2())}else s=l}n[0]&&(i&&!f?s=!1:n[1]&&(s===""||s===Y2(e))&&(s=!0))}return s}function x7(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const i=c.props,n={},f=[];let l=!1;if(!$(c)){const o=z=>{l=!0;const[v,H]=x7(z,a,!0);d1(n,v),H&&f.push(...H)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!i&&!l)return t1(c)&&s.set(c,q2),q2;if(U(i))for(let o=0;o<i.length;o++){const z=j1(i[o]);q5(z)&&(n[z]=i1)}else if(i)for(const o in i){const z=j1(o);if(q5(z)){const v=i[o],H=n[z]=U(v)||$(v)?{type:v}:Object.assign({},v);if(H){const b=$5(Boolean,H.type),k=$5(String,H.type);H[0]=b>-1,H[1]=k<0||b<k,(b>-1||K(H,"default"))&&f.push(z)}}}const t=[n,f];return t1(c)&&s.set(c,t),t}function q5(c){return c[0]!=="$"}function _5(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function O5(c,a){return _5(c)===_5(a)}function $5(c,a){return U(a)?a.findIndex(e=>O5(e,c)):$(a)&&O5(a,c)?0:-1}const b7=c=>c[0]==="_"||c==="$stable",s8=c=>U(c)?c.map(G1):[G1(c)],kt=(c,a,e)=>{if(a._n)return a;const s=C1((...r)=>s8(a(...r)),e);return s._c=!1,s},S7=(c,a,e)=>{const s=c._ctx;for(const r in c){if(b7(r))continue;const i=c[r];if($(i))a[r]=kt(r,i,s);else if(i!=null){const n=s8(i);a[r]=()=>n}}},N7=(c,a)=>{const e=s8(a);c.slots.default=()=>e},yt=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=Y(a),o4(a,"_",e)):S7(a,c.slots={})}else c.slots={},a&&N7(c,a);o4(c.slots,w4,1)},At=(c,a,e)=>{const{vnode:s,slots:r}=c;let i=!0,n=i1;if(s.shapeFlag&32){const f=a._;f?e&&f===1?i=!1:(d1(r,a),!e&&f===1&&delete r._):(i=!a.$stable,S7(a,r)),n=a}else a&&(N7(c,a),n={default:1});if(i)for(const f in r)!b7(f)&&!(f in n)&&delete r[f]};function w7(){return{app:null,config:{isNativeTag:so,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pt=0;function Tt(c,a){return function(s,r=null){$(s)||(s=Object.assign({},s)),r!=null&&!t1(r)&&(r=null);const i=w7(),n=new Set;let f=!1;const l=i.app={_uid:Pt++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:am,get config(){return i.config},set config(t){},use(t,...o){return n.has(t)||(t&&$(t.install)?(n.add(t),t.install(l,...o)):$(t)&&(n.add(t),t(l,...o))),l},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),l},component(t,o){return o?(i.components[t]=o,l):i.components[t]},directive(t,o){return o?(i.directives[t]=o,l):i.directives[t]},mount(t,o,z){if(!f){const v=E(s,r);return v.appContext=i,o&&a?a(v,t):c(v,t,z),f=!0,l._container=t,t.__vue_app__=l,i8(v.component)||v.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,o){return i.provides[t]=o,l}};return l}}function d6(c,a,e,s,r=!1){if(U(c)){c.forEach((v,H)=>d6(v,a&&(U(a)?a[H]:a),e,s,r));return}if(i4(s)&&!r)return;const i=s.shapeFlag&4?i8(s.component)||s.component.proxy:s.el,n=r?null:i,{i:f,r:l}=c,t=a&&a.r,o=f.refs===i1?f.refs={}:f.refs,z=f.setupState;if(t!=null&&t!==l&&(H1(t)?(o[t]=null,K(z,t)&&(z[t]=null)):V1(t)&&(t.value=null)),$(l))z2(l,f,12,[n,o]);else{const v=H1(l),H=V1(l);if(v||H){const b=()=>{if(c.f){const k=v?K(z,l)?z[l]:o[l]:l.value;r?U(k)&&I6(k,i):U(k)?k.includes(i)||k.push(i):v?(o[l]=[i],K(z,l)&&(z[l]=o[l])):(l.value=[i],c.k&&(o[c.k]=l.value))}else v?(o[l]=n,K(z,l)&&(z[l]=n)):H&&(l.value=n,c.k&&(o[c.k]=n))};n?(b.id=-1,x1(b,e)):b()}}}const x1=it;function Ft(c){return Bt(c)}function Bt(c,a){const e=zo();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:n,createText:f,createComment:l,setText:t,setElementText:o,parentNode:z,nextSibling:v,setScopeId:H=D1,insertStaticContent:b}=c,k=(m,C,h,u=null,p=null,x=null,y=!1,g=null,N=!!C.dynamicChildren)=>{if(m===C)return;m&&!e3(m,C)&&(u=w(m),L1(m,p,x,!0),m=null),C.patchFlag===-2&&(N=!1,C.dynamicChildren=null);const{type:L,ref:D,shapeFlag:T}=C;switch(L){case N4:B(m,C,h,u);break;case M3:V(m,C,h,u);break;case e6:m==null&&d(C,h,u,y);break;case X1:O1(m,C,h,u,p,x,y,g,N);break;default:T&1?G(m,C,h,u,p,x,y,g,N):T&6?A2(m,C,h,u,p,x,y,g,N):(T&64||T&128)&&L.process(m,C,h,u,p,x,y,g,N,j)}D!=null&&p&&d6(D,m&&m.ref,x,C||m,!C)},B=(m,C,h,u)=>{if(m==null)s(C.el=f(C.children),h,u);else{const p=C.el=m.el;C.children!==m.children&&t(p,C.children)}},V=(m,C,h,u)=>{m==null?s(C.el=l(C.children||""),h,u):C.el=m.el},d=(m,C,h,u)=>{[m.el,m.anchor]=b(m.children,C,h,u,m.el,m.anchor)},S=({el:m,anchor:C},h,u)=>{let p;for(;m&&m!==C;)p=v(m),s(m,h,u),m=p;s(C,h,u)},_=({el:m,anchor:C})=>{let h;for(;m&&m!==C;)h=v(m),r(m),m=h;r(C)},G=(m,C,h,u,p,x,y,g,N)=>{y=y||C.type==="svg",m==null?r1(C,h,u,p,x,y,g,N):M1(m,C,p,x,y,g,N)},r1=(m,C,h,u,p,x,y,g)=>{let N,L;const{type:D,props:T,shapeFlag:q,transition:O,dirs:W}=m;if(N=m.el=n(m.type,x,T&&T.is,T),q&8?o(N,m.children):q&16&&b1(m.children,N,null,u,p,x&&D!=="foreignObject",y,g),W&&p2(m,null,u,"created"),T){for(const J in T)J!=="value"&&!s4(J)&&i(N,J,null,T[J],x,m.children,u,p,A);"value"in T&&i(N,"value",null,T.value),(L=T.onVnodeBeforeMount)&&U1(L,u,m)}l1(N,m,m.scopeId,y,u),W&&p2(m,null,u,"beforeMount");const a1=(!p||p&&!p.pendingBranch)&&O&&!O.persisted;a1&&O.beforeEnter(N),s(N,C,h),((L=T&&T.onVnodeMounted)||a1||W)&&x1(()=>{L&&U1(L,u,m),a1&&O.enter(N),W&&p2(m,null,u,"mounted")},p)},l1=(m,C,h,u,p)=>{if(h&&H(m,h),u)for(let x=0;x<u.length;x++)H(m,u[x]);if(p){let x=p.subTree;if(C===x){const y=p.vnode;l1(m,y,y.scopeId,y.slotScopeIds,p.parent)}}},b1=(m,C,h,u,p,x,y,g,N=0)=>{for(let L=N;L<m.length;L++){const D=m[L]=g?o2(m[L]):G1(m[L]);k(null,D,C,h,u,p,x,y,g)}},M1=(m,C,h,u,p,x,y)=>{const g=C.el=m.el;let{patchFlag:N,dynamicChildren:L,dirs:D}=C;N|=m.patchFlag&16;const T=m.props||i1,q=C.props||i1;let O;h&&d2(h,!1),(O=q.onVnodeBeforeUpdate)&&U1(O,h,C,m),D&&p2(C,m,h,"beforeUpdate"),h&&d2(h,!0);const W=p&&C.type!=="foreignObject";if(L?k1(m.dynamicChildren,L,g,h,u,W,x):y||Q(m,C,g,null,h,u,W,x,!1),N>0){if(N&16)i2(g,C,T,q,h,u,p);else if(N&2&&T.class!==q.class&&i(g,"class",null,q.class,p),N&4&&i(g,"style",T.style,q.style,p),N&8){const a1=C.dynamicProps;for(let J=0;J<a1.length;J++){const z1=a1[J],P1=T[z1],T2=q[z1];(T2!==P1||z1==="value")&&i(g,z1,P1,T2,p,m.children,h,u,A)}}N&1&&m.children!==C.children&&o(g,C.children)}else!y&&L==null&&i2(g,C,T,q,h,u,p);((O=q.onVnodeUpdated)||D)&&x1(()=>{O&&U1(O,h,C,m),D&&p2(C,m,h,"updated")},u)},k1=(m,C,h,u,p,x,y)=>{for(let g=0;g<C.length;g++){const N=m[g],L=C[g],D=N.el&&(N.type===X1||!e3(N,L)||N.shapeFlag&70)?z(N.el):h;k(N,L,D,null,u,p,x,y,!0)}},i2=(m,C,h,u,p,x,y)=>{if(h!==u){if(h!==i1)for(const g in h)!s4(g)&&!(g in u)&&i(m,g,h[g],null,y,C.children,p,x,A);for(const g in u){if(s4(g))continue;const N=u[g],L=h[g];N!==L&&g!=="value"&&i(m,g,L,N,y,C.children,p,x,A)}"value"in u&&i(m,"value",h.value,u.value)}},O1=(m,C,h,u,p,x,y,g,N)=>{const L=C.el=m?m.el:f(""),D=C.anchor=m?m.anchor:f("");let{patchFlag:T,dynamicChildren:q,slotScopeIds:O}=C;O&&(g=g?g.concat(O):O),m==null?(s(L,h,u),s(D,h,u),b1(C.children,h,D,p,x,y,g,N)):T>0&&T&64&&q&&m.dynamicChildren?(k1(m.dynamicChildren,q,h,p,x,y,g),(C.key!=null||p&&C===p.subTree)&&k7(m,C,!0)):Q(m,C,h,D,p,x,y,g,N)},A2=(m,C,h,u,p,x,y,g,N)=>{C.slotScopeIds=g,m==null?C.shapeFlag&512?p.ctx.activate(C,h,u,y,N):V2(C,h,u,p,x,y,N):c3(m,C,N)},V2=(m,C,h,u,p,x,y)=>{const g=m.component=Wt(m,u,p);if(V7(m)&&(g.ctx.renderer=j),Zt(g),g.asyncDep){if(p&&p.registerDep(g,m1),!m.el){const N=g.subTree=E(M3);V(null,N,C,h)}return}m1(g,m,C,h,p,x,y)},c3=(m,C,h)=>{const u=C.component=m.component;if(et(m,C,h))if(u.asyncDep&&!u.asyncResolved){c1(u,C,h);return}else u.next=C,Yo(u.update),u.update();else C.el=m.el,u.vnode=C},m1=(m,C,h,u,p,x,y)=>{const g=()=>{if(m.isMounted){let{next:D,bu:T,u:q,parent:O,vnode:W}=m,a1=D,J;d2(m,!1),D?(D.el=W.el,c1(m,D,y)):D=W,T&&J4(T),(J=D.props&&D.props.onVnodeBeforeUpdate)&&U1(J,O,D,W),d2(m,!0);const z1=c6(m),P1=m.subTree;m.subTree=z1,k(P1,z1,z(P1.el),w(P1),m,p,x),D.el=z1.el,a1===null&&st(m,z1.el),q&&x1(q,p),(J=D.props&&D.props.onVnodeUpdated)&&x1(()=>U1(J,O,D,W),p)}else{let D;const{el:T,props:q}=C,{bm:O,m:W,parent:a1}=m,J=i4(C);if(d2(m,!1),O&&J4(O),!J&&(D=q&&q.onVnodeBeforeMount)&&U1(D,a1,C),d2(m,!0),T&&I){const z1=()=>{m.subTree=c6(m),I(T,m.subTree,m,p,null)};J?C.type.__asyncLoader().then(()=>!m.isUnmounted&&z1()):z1()}else{const z1=m.subTree=c6(m);k(null,z1,h,u,m,p,x),C.el=z1.el}if(W&&x1(W,p),!J&&(D=q&&q.onVnodeMounted)){const z1=C;x1(()=>U1(D,a1,z1),p)}(C.shapeFlag&256||a1&&i4(a1.vnode)&&a1.vnode.shapeFlag&256)&&m.a&&x1(m.a,p),m.isMounted=!0,C=h=u=null}},N=m.effect=new j6(g,()=>a8(L),m.scope),L=m.update=()=>N.run();L.id=m.uid,d2(m,!0),L()},c1=(m,C,h)=>{C.component=m;const u=m.vnode.props;m.vnode=C,m.next=null,wt(m,C.props,u,h),At(m,C.children,h),X2(),F5(),Q2()},Q=(m,C,h,u,p,x,y,g,N=!1)=>{const L=m&&m.children,D=m?m.shapeFlag:0,T=C.children,{patchFlag:q,shapeFlag:O}=C;if(q>0){if(q&128){M2(L,T,h,u,p,x,y,g,N);return}else if(q&256){y1(L,T,h,u,p,x,y,g,N);return}}O&8?(D&16&&A(L,p,x),T!==L&&o(h,T)):D&16?O&16?M2(L,T,h,u,p,x,y,g,N):A(L,p,x,!0):(D&8&&o(h,""),O&16&&b1(T,h,u,p,x,y,g,N))},y1=(m,C,h,u,p,x,y,g,N)=>{m=m||q2,C=C||q2;const L=m.length,D=C.length,T=Math.min(L,D);let q;for(q=0;q<T;q++){const O=C[q]=N?o2(C[q]):G1(C[q]);k(m[q],O,h,null,p,x,y,g,N)}L>D?A(m,p,x,!0,!1,T):b1(C,h,u,p,x,y,g,N,T)},M2=(m,C,h,u,p,x,y,g,N)=>{let L=0;const D=C.length;let T=m.length-1,q=D-1;for(;L<=T&&L<=q;){const O=m[L],W=C[L]=N?o2(C[L]):G1(C[L]);if(e3(O,W))k(O,W,h,null,p,x,y,g,N);else break;L++}for(;L<=T&&L<=q;){const O=m[T],W=C[q]=N?o2(C[q]):G1(C[q]);if(e3(O,W))k(O,W,h,null,p,x,y,g,N);else break;T--,q--}if(L>T){if(L<=q){const O=q+1,W=O<D?C[O].el:u;for(;L<=q;)k(null,C[L]=N?o2(C[L]):G1(C[L]),h,W,p,x,y,g,N),L++}}else if(L>q)for(;L<=T;)L1(m[L],p,x,!0),L++;else{const O=L,W=L,a1=new Map;for(L=W;L<=q;L++){const S1=C[L]=N?o2(C[L]):G1(C[L]);S1.key!=null&&a1.set(S1.key,L)}let J,z1=0;const P1=q-W+1;let T2=!1,g5=0;const a3=new Array(P1);for(L=0;L<P1;L++)a3[L]=0;for(L=O;L<=T;L++){const S1=m[L];if(z1>=P1){L1(S1,p,x,!0);continue}let $1;if(S1.key!=null)$1=a1.get(S1.key);else for(J=W;J<=q;J++)if(a3[J-W]===0&&e3(S1,C[J])){$1=J;break}$1===void 0?L1(S1,p,x,!0):(a3[$1-W]=L+1,$1>=g5?g5=$1:T2=!0,k(S1,C[$1],h,null,p,x,y,g,N),z1++)}const x5=T2?Rt(a3):q2;for(J=x5.length-1,L=P1-1;L>=0;L--){const S1=W+L,$1=C[S1],b5=S1+1<D?C[S1+1].el:u;a3[L]===0?k(null,$1,h,b5,p,x,y,g,N):T2&&(J<0||L!==x5[J]?A1($1,h,b5,2):J--)}}},A1=(m,C,h,u,p=null)=>{const{el:x,type:y,transition:g,children:N,shapeFlag:L}=m;if(L&6){A1(m.component.subTree,C,h,u);return}if(L&128){m.suspense.move(C,h,u);return}if(L&64){y.move(m,C,h,j);return}if(y===X1){s(x,C,h);for(let T=0;T<N.length;T++)A1(N[T],C,h,u);s(m.anchor,C,h);return}if(y===e6){S(m,C,h);return}if(u!==2&&L&1&&g)if(u===0)g.beforeEnter(x),s(x,C,h),x1(()=>g.enter(x),p);else{const{leave:T,delayLeave:q,afterLeave:O}=g,W=()=>s(x,C,h),a1=()=>{T(x,()=>{W(),O&&O()})};q?q(x,W,a1):a1()}else s(x,C,h)},L1=(m,C,h,u=!1,p=!1)=>{const{type:x,props:y,ref:g,children:N,dynamicChildren:L,shapeFlag:D,patchFlag:T,dirs:q}=m;if(g!=null&&d6(g,null,h,m,!0),D&256){C.ctx.deactivate(m);return}const O=D&1&&q,W=!i4(m);let a1;if(W&&(a1=y&&y.onVnodeBeforeUnmount)&&U1(a1,C,m),D&6)M(m.component,h,u);else{if(D&128){m.suspense.unmount(h,u);return}O&&p2(m,null,C,"beforeUnmount"),D&64?m.type.remove(m,C,h,p,j,u):L&&(x!==X1||T>0&&T&64)?A(L,C,h,!1,!0):(x===X1&&T&384||!p&&D&16)&&A(N,C,h),u&&P2(m)}(W&&(a1=y&&y.onVnodeUnmounted)||O)&&x1(()=>{a1&&U1(a1,C,m),O&&p2(m,null,C,"unmounted")},h)},P2=m=>{const{type:C,el:h,anchor:u,transition:p}=m;if(C===X1){O3(h,u);return}if(C===e6){_(m);return}const x=()=>{r(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(m.shapeFlag&1&&p&&!p.persisted){const{leave:y,delayLeave:g}=p,N=()=>y(h,x);g?g(m.el,x,N):N()}else x()},O3=(m,C)=>{let h;for(;m!==C;)h=v(m),r(m),m=h;r(C)},M=(m,C,h)=>{const{bum:u,scope:p,update:x,subTree:y,um:g}=m;u&&J4(u),p.stop(),x&&(x.active=!1,L1(y,m,C,h)),g&&x1(g,C),x1(()=>{m.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},A=(m,C,h,u=!1,p=!1,x=0)=>{for(let y=x;y<m.length;y++)L1(m[y],C,h,u,p)},w=m=>m.shapeFlag&6?w(m.component.subTree):m.shapeFlag&128?m.suspense.next():v(m.anchor||m.el),R=(m,C,h)=>{m==null?C._vnode&&L1(C._vnode,null,null,!0):k(C._vnode||null,m,C,null,null,null,h),F5(),z7(),C._vnode=m},j={p:k,um:L1,m:A1,r:P2,mt:V2,mc:b1,pc:Q,pbc:k1,n:w,o:c};let n1,I;return a&&([n1,I]=a(j)),{render:R,hydrate:n1,createApp:Tt(R,n1)}}function d2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function k7(c,a,e=!1){const s=c.children,r=a.children;if(U(s)&&U(r))for(let i=0;i<s.length;i++){const n=s[i];let f=r[i];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[i]=o2(r[i]),f.el=n.el),e||k7(n,f)),f.type===N4&&(f.el=n.el)}}function Rt(c){const a=c.slice(),e=[0];let s,r,i,n,f;const l=c.length;for(s=0;s<l;s++){const t=c[s];if(t!==0){if(r=e[e.length-1],c[r]<t){a[s]=r,e.push(s);continue}for(i=0,n=e.length-1;i<n;)f=i+n>>1,c[e[f]]<t?i=f+1:n=f;t<c[e[i]]&&(i>0&&(a[s]=e[i-1]),e[i]=s)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const Et=c=>c.__isTeleport,X1=Symbol(void 0),N4=Symbol(void 0),M3=Symbol(void 0),e6=Symbol(void 0),o3=[];let R1=null;function y3(c=!1){o3.push(R1=c?null:[])}function Dt(){o3.pop(),R1=o3[o3.length-1]||null}let p3=1;function U5(c){p3+=c}function qt(c){return c.dynamicChildren=p3>0?R1||q2:null,Dt(),p3>0&&R1&&R1.push(c),c}function A3(c,a,e,s,r,i){return qt(Z(c,a,e,s,r,i,!0))}function L6(c){return c?c.__v_isVNode===!0:!1}function e3(c,a){return c.type===a.type&&c.key===a.key}const w4="__vInternal",y7=({key:c})=>c??null,n4=({ref:c,ref_key:a,ref_for:e})=>c!=null?H1(c)||V1(c)||$(c)?{i:B1,r:c,k:a,f:!!e}:c:null;function Z(c,a=null,e=null,s=0,r=null,i=c===X1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&y7(a),ref:a&&n4(a),scopeId:h7,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:B1};return f?(r8(l,e),i&128&&c.normalize(l)):e&&(l.shapeFlag|=H1(e)?8:16),p3>0&&!n&&R1&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&R1.push(l),l}const E=_t;function _t(c,a=null,e=null,s=0,r=null,i=!1){if((!c||c===Mt)&&(c=M3),L6(c)){const f=G2(c,a,!0);return e&&r8(f,e),p3>0&&!i&&R1&&(f.shapeFlag&6?R1[R1.indexOf(c)]=f:R1.push(f)),f.patchFlag|=-2,f}if(Qt(c)&&(c=c.__vccOpts),a){a=Ot(a);let{class:f,style:l}=a;f&&!H1(f)&&(a.class=$6(f)),t1(l)&&(e7(l)&&!U(l)&&(l=d1({},l)),a.style=O6(l))}const n=H1(c)?1:rt(c)?128:Et(c)?64:t1(c)?4:$(c)?2:0;return Z(c,a,e,s,r,n,i,!0)}function Ot(c){return c?e7(c)||w4 in c?d1({},c):c:null}function G2(c,a,e=!1){const{props:s,ref:r,patchFlag:i,children:n}=c,f=a?Ut(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&y7(f),ref:a&&a.ref?e&&r?U(r)?r.concat(n4(a)):[r,n4(a)]:n4(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==X1?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&G2(c.ssContent),ssFallback:c.ssFallback&&G2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx}}function $t(c=" ",a=0){return E(N4,null,c,a)}function G1(c){return c==null||typeof c=="boolean"?E(M3):U(c)?E(X1,null,c.slice()):typeof c=="object"?o2(c):E(N4,null,String(c))}function o2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:G2(c)}function r8(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(U(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),r8(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(w4 in a)?a._ctx=B1:r===3&&B1&&(B1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else $(a)?(a={default:a,_ctx:B1},e=32):(a=String(a),s&64?(e=16,a=[$t(a)]):e=8);c.children=a,c.shapeFlag|=e}function Ut(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=$6([a.class,s.class]));else if(r==="style")a.style=O6([a.style,s.style]);else if(M4(r)){const i=a[r],n=s[r];n&&i!==n&&!(U(i)&&i.includes(n))&&(a[r]=i?[].concat(i,n):n)}else r!==""&&(a[r]=s[r])}return a}function U1(c,a,e,s=null){q1(c,a,7,[e,s])}const It=w7();let Gt=0;function Wt(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||It,i={uid:Gt++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Co(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:x7(s,r),emitsOptions:v7(s,r),emit:null,emitted:null,propsDefaults:i1,inheritAttrs:s.inheritAttrs,ctx:i1,data:i1,props:i1,attrs:i1,slots:i1,refs:i1,setupState:i1,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=Jo.bind(null,i),c.ce&&c.ce(i),i}let h1=null;const W2=c=>{h1=c,c.scope.on()},w2=()=>{h1&&h1.scope.off(),h1=null};function A7(c){return c.vnode.shapeFlag&4}let d3=!1;function Zt(c,a=!1){d3=a;const{props:e,children:s}=c.vnode,r=A7(c);Nt(c,e,r,a),yt(c,s);const i=r?jt(c,a):void 0;return d3=!1,i}function jt(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=s7(new Proxy(c.ctx,dt));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?Yt(c):null;W2(c),X2();const i=z2(s,c,0,[c.props,r]);if(Q2(),w2(),U0(i)){if(i.then(w2,w2),a)return i.then(n=>{I5(c,n,a)}).catch(n=>{x4(n,c,0)});c.asyncDep=i}else I5(c,i,a)}else P7(c,a)}function I5(c,a,e){$(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:t1(a)&&(c.setupState=f7(a)),P7(c,e)}let G5;function P7(c,a,e){const s=c.type;if(!c.render){if(!a&&G5&&!s.render){const r=s.template||e8(c).template;if(r){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=s,t=d1(d1({isCustomElement:i,delimiters:f},n),l);s.render=G5(r,t)}}c.render=s.render||D1}W2(c),X2(),Lt(c),Q2(),w2()}function Kt(c){return new Proxy(c.attrs,{get(a,e){return N1(c,"get","$attrs"),a[e]}})}function Yt(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=Kt(c))},slots:c.slots,emit:c.emit,expose:a}}function i8(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(f7(s7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in l3)return l3[e](c)},has(a,e){return e in a||e in l3}}))}function Xt(c,a=!0){return $(c)?c.displayName||c.name:c.name||a&&c.__name}function Qt(c){return $(c)&&"__vccOpts"in c}const f1=(c,a)=>Zo(c,a,d3);function k4(c,a,e){const s=arguments.length;return s===2?t1(a)&&!U(a)?L6(a)?E(c,null,[a]):E(c,a):E(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&L6(e)&&(e=[e]),E(c,a,e))}const Jt=Symbol(""),cm=()=>Q1(Jt),am="3.2.45",em="http://www.w3.org/2000/svg",x2=typeof document<"u"?document:null,W5=x2&&x2.createElement("template"),sm={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?x2.createElementNS(em,c):x2.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>x2.createTextNode(c),createComment:c=>x2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>x2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,s,r,i){const n=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{W5.innerHTML=s?`<svg>${c}</svg>`:c;const f=W5.content;if(s){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function rm(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function im(c,a,e){const s=c.style,r=H1(e);if(e&&!r){for(const i in e)g6(s,i,e[i]);if(a&&!H1(a))for(const i in a)e[i]==null&&g6(s,i,"")}else{const i=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=i)}}const Z5=/\s*!important$/;function g6(c,a,e){if(U(e))e.forEach(s=>g6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=nm(c,a);Z5.test(e)?c.setProperty(Y2(s),e.replace(Z5,""),"important"):c[s]=e}}const j5=["Webkit","Moz","ms"],s6={};function nm(c,a){const e=s6[a];if(e)return e;let s=j1(a);if(s!=="filter"&&s in c)return s6[a]=s;s=L4(s);for(let r=0;r<j5.length;r++){const i=j5[r]+s;if(i in c)return s6[a]=i}return a}const K5="http://www.w3.org/1999/xlink";function fm(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(K5,a.slice(6,a.length)):c.setAttributeNS(K5,a,e);else{const i=eo(a);e==null||i&&!$0(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function lm(c,a,e,s,r,i,n){if(a==="innerHTML"||a==="textContent"){s&&n(s,r,i),c[a]=e??"";return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const l=e??"";(c.value!==l||c.tagName==="OPTION")&&(c.value=l),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=$0(e):e==null&&l==="string"?(e="",f=!0):l==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function om(c,a,e,s){c.addEventListener(a,e,s)}function tm(c,a,e,s){c.removeEventListener(a,e,s)}function mm(c,a,e,s,r=null){const i=c._vei||(c._vei={}),n=i[a];if(s&&n)n.value=s;else{const[f,l]=zm(a);if(s){const t=i[a]=hm(s,r);om(c,f,t,l)}else n&&(tm(c,f,n,l),i[a]=void 0)}}const Y5=/(?:Once|Passive|Capture)$/;function zm(c){let a;if(Y5.test(c)){a={};let s;for(;s=c.match(Y5);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):Y2(c.slice(2)),a]}let r6=0;const Cm=Promise.resolve(),vm=()=>r6||(Cm.then(()=>r6=0),r6=Date.now());function hm(c,a){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;q1(Hm(s,e.value),a,5,[s])};return e.value=c,e.attached=vm(),e}function Hm(c,a){if(U(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const X5=/^on[a-z]/,um=(c,a,e,s,r=!1,i,n,f,l)=>{a==="class"?rm(c,s,r):a==="style"?im(c,e,s):M4(a)?U6(a)||mm(c,a,e,s,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Vm(c,a,s,r))?lm(c,a,s,i,n,f,l):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),fm(c,a,s,r))};function Vm(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&X5.test(a)&&$(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||X5.test(a)&&H1(e)?!1:a in c}const Mm=d1({patchProp:um},sm);let Q5;function pm(){return Q5||(Q5=Ft(Mm))}const dm=(...c)=>{const a=pm().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=Lm(s);if(!r)return;const i=a._component;!$(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const n=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},a};function Lm(c){return H1(c)?document.querySelector(c):c}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const B2=typeof window<"u";function gm(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const X=Object.assign;function i6(c,a){const e={};for(const s in a){const r=a[s];e[s]=_1(r)?r.map(c):c(r)}return e}const t3=()=>{},_1=Array.isArray,xm=/\/$/,bm=c=>c.replace(xm,"");function n6(c,a,e="/"){let s,r={},i="",n="";const f=a.indexOf("#");let l=a.indexOf("?");return f<l&&f>=0&&(l=-1),l>-1&&(s=a.slice(0,l),i=a.slice(l+1,f>-1?f:a.length),r=c(i)),f>-1&&(s=s||a.slice(0,f),n=a.slice(f,a.length)),s=km(s??a,e),{fullPath:s+(i&&"?")+i+n,path:s,query:r,hash:n}}function Sm(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function J5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function Nm(c,a,e){const s=a.matched.length-1,r=e.matched.length-1;return s>-1&&s===r&&Z2(a.matched[s],e.matched[r])&&T7(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function Z2(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function T7(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!wm(c[e],a[e]))return!1;return!0}function wm(c,a){return _1(c)?c0(c,a):_1(a)?c0(a,c):c===a}function c0(c,a){return _1(a)?c.length===a.length&&c.every((e,s)=>e===a[s]):c.length===1&&c[0]===a}function km(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),s=c.split("/");let r=e.length-1,i,n;for(i=0;i<s.length;i++)if(n=s[i],n!==".")if(n==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var L3;(function(c){c.pop="pop",c.push="push"})(L3||(L3={}));var m3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(m3||(m3={}));function ym(c){if(!c)if(B2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),bm(c)}const Am=/^[^#]+#/;function Pm(c,a){return c.replace(Am,"#")+a}function Tm(c,a){const e=document.documentElement.getBoundingClientRect(),s=c.getBoundingClientRect();return{behavior:a.behavior,left:s.left-e.left-(a.left||0),top:s.top-e.top-(a.top||0)}}const y4=()=>({left:window.pageXOffset,top:window.pageYOffset});function Fm(c){let a;if("el"in c){const e=c.el,s=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?s?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;a=Tm(r,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function a0(c,a){return(history.state?history.state.position-a:-1)+c}const x6=new Map;function Bm(c,a){x6.set(c,a)}function Rm(c){const a=x6.get(c);return x6.delete(c),a}let Em=()=>location.protocol+"//"+location.host;function F7(c,a){const{pathname:e,search:s,hash:r}=a,i=c.indexOf("#");if(i>-1){let f=r.includes(c.slice(i))?c.slice(i).length:1,l=r.slice(f);return l[0]!=="/"&&(l="/"+l),J5(l,"")}return J5(e,c)+s+r}function Dm(c,a,e,s){let r=[],i=[],n=null;const f=({state:v})=>{const H=F7(c,location),b=e.value,k=a.value;let B=0;if(v){if(e.value=H,a.value=v,n&&n===b){n=null;return}B=k?v.position-k.position:0}else s(H);r.forEach(V=>{V(e.value,b,{delta:B,type:L3.pop,direction:B?B>0?m3.forward:m3.back:m3.unknown})})};function l(){n=e.value}function t(v){r.push(v);const H=()=>{const b=r.indexOf(v);b>-1&&r.splice(b,1)};return i.push(H),H}function o(){const{history:v}=window;v.state&&v.replaceState(X({},v.state,{scroll:y4()}),"")}function z(){for(const v of i)v();i=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",o),{pauseListeners:l,listen:t,destroy:z}}function e0(c,a,e,s=!1,r=!1){return{back:c,current:a,forward:e,replaced:s,position:window.history.length,scroll:r?y4():null}}function qm(c){const{history:a,location:e}=window,s={value:F7(c,e)},r={value:a.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function i(l,t,o){const z=c.indexOf("#"),v=z>-1?(e.host&&document.querySelector("base")?c:c.slice(z))+l:Em()+c+l;try{a[o?"replaceState":"pushState"](t,"",v),r.value=t}catch(H){console.error(H),e[o?"replace":"assign"](v)}}function n(l,t){const o=X({},a.state,e0(r.value.back,l,r.value.forward,!0),t,{position:r.value.position});i(l,o,!0),s.value=l}function f(l,t){const o=X({},r.value,a.state,{forward:l,scroll:y4()});i(o.current,o,!0);const z=X({},e0(s.value,l,null),{position:o.position+1},t);i(l,z,!1),s.value=l}return{location:s,state:r,push:f,replace:n}}function _m(c){c=ym(c);const a=qm(c),e=Dm(c,a.state,a.location,a.replace);function s(i,n=!0){n||e.pauseListeners(),history.go(i)}const r=X({location:"",base:c,go:s,createHref:Pm.bind(null,c)},a,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function Om(c){return c=location.host?c||location.pathname+location.search:"",c.includes("#")||(c+="#"),_m(c)}function $m(c){return typeof c=="string"||c&&typeof c=="object"}function B7(c){return typeof c=="string"||typeof c=="symbol"}const f2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},R7=Symbol("");var s0;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(s0||(s0={}));function j2(c,a){return X(new Error,{type:c,[R7]:!0},a)}function K1(c,a){return c instanceof Error&&R7 in c&&(a==null||!!(c.type&a))}const r0="[^/]+?",Um={sensitive:!1,strict:!1,start:!0,end:!0},Im=/[.+*?^${}()[\]/\\]/g;function Gm(c,a){const e=X({},Um,a),s=[];let r=e.start?"^":"";const i=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(r+="/");for(let z=0;z<t.length;z++){const v=t[z];let H=40+(e.sensitive?.25:0);if(v.type===0)z||(r+="/"),r+=v.value.replace(Im,"\\$&"),H+=40;else if(v.type===1){const{value:b,repeatable:k,optional:B,regexp:V}=v;i.push({name:b,repeatable:k,optional:B});const d=V||r0;if(d!==r0){H+=10;try{new RegExp(`(${d})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${b}" (${d}): `+_.message)}}let S=k?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;z||(S=B&&t.length<2?`(?:/${S})`:"/"+S),B&&(S+="?"),r+=S,H+=20,B&&(H+=-8),k&&(H+=-20),d===".*"&&(H+=-50)}o.push(H)}s.push(o)}if(e.strict&&e.end){const t=s.length-1;s[t][s[t].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const n=new RegExp(r,e.sensitive?"":"i");function f(t){const o=t.match(n),z={};if(!o)return null;for(let v=1;v<o.length;v++){const H=o[v]||"",b=i[v-1];z[b.name]=H&&b.repeatable?H.split("/"):H}return z}function l(t){let o="",z=!1;for(const v of c){(!z||!o.endsWith("/"))&&(o+="/"),z=!1;for(const H of v)if(H.type===0)o+=H.value;else if(H.type===1){const{value:b,repeatable:k,optional:B}=H,V=b in t?t[b]:"";if(_1(V)&&!k)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const d=_1(V)?V.join("/"):V;if(!d)if(B)v.length<2&&(o.endsWith("/")?o=o.slice(0,-1):z=!0);else throw new Error(`Missing required param "${b}"`);o+=d}}return o||"/"}return{re:n,score:s,keys:i,parse:f,stringify:l}}function Wm(c,a){let e=0;for(;e<c.length&&e<a.length;){const s=a[e]-c[e];if(s)return s;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function Zm(c,a){let e=0;const s=c.score,r=a.score;for(;e<s.length&&e<r.length;){const i=Wm(s[e],r[e]);if(i)return i;e++}if(Math.abs(r.length-s.length)===1){if(i0(s))return 1;if(i0(r))return-1}return r.length-s.length}function i0(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const jm={type:0,value:""},Km=/[a-zA-Z0-9_]/;function Ym(c){if(!c)return[[]];if(c==="/")return[[jm]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(H){throw new Error(`ERR (${e})/"${t}": ${H}`)}let e=0,s=e;const r=[];let i;function n(){i&&r.push(i),i=[]}let f=0,l,t="",o="";function z(){t&&(e===0?i.push({type:0,value:t}):e===1||e===2||e===3?(i.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:t,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),t="")}function v(){t+=l}for(;f<c.length;){if(l=c[f++],l==="\\"&&e!==2){s=e,e=4;continue}switch(e){case 0:l==="/"?(t&&z(),n()):l===":"?(z(),e=1):v();break;case 4:v(),e=s;break;case 1:l==="("?e=2:Km.test(l)?v():(z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:z(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),z(),n(),r}function Xm(c,a,e){const s=Gm(Ym(c.path),e),r=X(s,{record:c,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function Qm(c,a){const e=[],s=new Map;a=l0({strict:!1,end:!0,sensitive:!1},a);function r(o){return s.get(o)}function i(o,z,v){const H=!v,b=Jm(o);b.aliasOf=v&&v.record;const k=l0(a,o),B=[b];if("alias"in o){const S=typeof o.alias=="string"?[o.alias]:o.alias;for(const _ of S)B.push(X({},b,{components:v?v.record.components:b.components,path:_,aliasOf:v?v.record:b}))}let V,d;for(const S of B){const{path:_}=S;if(z&&_[0]!=="/"){const G=z.record.path,r1=G[G.length-1]==="/"?"":"/";S.path=z.record.path+(_&&r1+_)}if(V=Xm(S,z,k),v?v.alias.push(V):(d=d||V,d!==V&&d.alias.push(V),H&&o.name&&!f0(V)&&n(o.name)),b.children){const G=b.children;for(let r1=0;r1<G.length;r1++)i(G[r1],V,v&&v.children[r1])}v=v||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&l(V)}return d?()=>{n(d)}:t3}function n(o){if(B7(o)){const z=s.get(o);z&&(s.delete(o),e.splice(e.indexOf(z),1),z.children.forEach(n),z.alias.forEach(n))}else{const z=e.indexOf(o);z>-1&&(e.splice(z,1),o.record.name&&s.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function f(){return e}function l(o){let z=0;for(;z<e.length&&Zm(o,e[z])>=0&&(o.record.path!==e[z].record.path||!E7(o,e[z]));)z++;e.splice(z,0,o),o.record.name&&!f0(o)&&s.set(o.record.name,o)}function t(o,z){let v,H={},b,k;if("name"in o&&o.name){if(v=s.get(o.name),!v)throw j2(1,{location:o});k=v.record.name,H=X(n0(z.params,v.keys.filter(d=>!d.optional).map(d=>d.name)),o.params&&n0(o.params,v.keys.map(d=>d.name))),b=v.stringify(H)}else if("path"in o)b=o.path,v=e.find(d=>d.re.test(b)),v&&(H=v.parse(b),k=v.record.name);else{if(v=z.name?s.get(z.name):e.find(d=>d.re.test(z.path)),!v)throw j2(1,{location:o,currentLocation:z});k=v.record.name,H=X({},z.params,o.params),b=v.stringify(H)}const B=[];let V=v;for(;V;)B.unshift(V.record),V=V.parent;return{name:k,path:b,params:H,matched:B,meta:az(B)}}return c.forEach(o=>i(o)),{addRoute:i,resolve:t,removeRoute:n,getRoutes:f,getRecordMatcher:r}}function n0(c,a){const e={};for(const s of a)s in c&&(e[s]=c[s]);return e}function Jm(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:cz(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function cz(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const s in c.components)a[s]=typeof e=="boolean"?e:e[s];return a}function f0(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function az(c){return c.reduce((a,e)=>X(a,e.meta),{})}function l0(c,a){const e={};for(const s in c)e[s]=s in a?a[s]:c[s];return e}function E7(c,a){return a.children.some(e=>e===c||E7(c,e))}const D7=/#/g,ez=/&/g,sz=/\//g,rz=/=/g,iz=/\?/g,q7=/\+/g,nz=/%5B/g,fz=/%5D/g,_7=/%5E/g,lz=/%60/g,O7=/%7B/g,oz=/%7C/g,$7=/%7D/g,tz=/%20/g;function n8(c){return encodeURI(""+c).replace(oz,"|").replace(nz,"[").replace(fz,"]")}function mz(c){return n8(c).replace(O7,"{").replace($7,"}").replace(_7,"^")}function b6(c){return n8(c).replace(q7,"%2B").replace(tz,"+").replace(D7,"%23").replace(ez,"%26").replace(lz,"`").replace(O7,"{").replace($7,"}").replace(_7,"^")}function zz(c){return b6(c).replace(rz,"%3D")}function Cz(c){return n8(c).replace(D7,"%23").replace(iz,"%3F")}function vz(c){return c==null?"":Cz(c).replace(sz,"%2F")}function C4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function hz(c){const a={};if(c===""||c==="?")return a;const s=(c[0]==="?"?c.slice(1):c).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(q7," "),n=i.indexOf("="),f=C4(n<0?i:i.slice(0,n)),l=n<0?null:C4(i.slice(n+1));if(f in a){let t=a[f];_1(t)||(t=a[f]=[t]),t.push(l)}else a[f]=l}return a}function o0(c){let a="";for(let e in c){const s=c[e];if(e=zz(e),s==null){s!==void 0&&(a+=(a.length?"&":"")+e);continue}(_1(s)?s.map(i=>i&&b6(i)):[s&&b6(s)]).forEach(i=>{i!==void 0&&(a+=(a.length?"&":"")+e,i!=null&&(a+="="+i))})}return a}function Hz(c){const a={};for(const e in c){const s=c[e];s!==void 0&&(a[e]=_1(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return a}const uz=Symbol(""),t0=Symbol(""),f8=Symbol(""),U7=Symbol(""),S6=Symbol("");function s3(){let c=[];function a(s){return c.push(s),()=>{const r=c.indexOf(s);r>-1&&c.splice(r,1)}}function e(){c=[]}return{add:a,list:()=>c,reset:e}}function t2(c,a,e,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((n,f)=>{const l=z=>{z===!1?f(j2(4,{from:e,to:a})):z instanceof Error?f(z):$m(z)?f(j2(2,{from:a,to:z})):(i&&s.enterCallbacks[r]===i&&typeof z=="function"&&i.push(z),n())},t=c.call(s&&s.instances[r],a,e,l);let o=Promise.resolve(t);c.length<3&&(o=o.then(l)),o.catch(z=>f(z))})}function f6(c,a,e,s){const r=[];for(const i of c)for(const n in i.components){let f=i.components[n];if(!(a!=="beforeRouteEnter"&&!i.instances[n]))if(Vz(f)){const t=(f.__vccOpts||f)[a];t&&r.push(t2(t,e,s,i,n))}else{let l=f();r.push(()=>l.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${i.path}"`));const o=gm(t)?t.default:t;i.components[n]=o;const v=(o.__vccOpts||o)[a];return v&&t2(v,e,s,i,n)()}))}}return r}function Vz(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function m0(c){const a=Q1(f8),e=Q1(U7),s=f1(()=>a.resolve(O2(c.to))),r=f1(()=>{const{matched:l}=s.value,{length:t}=l,o=l[t-1],z=e.matched;if(!o||!z.length)return-1;const v=z.findIndex(Z2.bind(null,o));if(v>-1)return v;const H=z0(l[t-2]);return t>1&&z0(o)===H&&z[z.length-1].path!==H?z.findIndex(Z2.bind(null,l[t-2])):v}),i=f1(()=>r.value>-1&&Lz(e.params,s.value.params)),n=f1(()=>r.value>-1&&r.value===e.matched.length-1&&T7(e.params,s.value.params));function f(l={}){return dz(l)?a[O2(c.replace)?"replace":"push"](O2(c.to)).catch(t3):Promise.resolve()}return{route:s,href:f1(()=>s.value.href),isActive:i,isExactActive:n,navigate:f}}const Mz=k3({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:m0,setup(c,{slots:a}){const e=w3(m0(c)),{options:s}=Q1(f8),r=f1(()=>({[C0(c.activeClass,s.linkActiveClass,"router-link-active")]:e.isActive,[C0(c.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=a.default&&a.default(e);return c.custom?i:k4("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},i)}}}),pz=Mz;function dz(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function Lz(c,a){for(const e in a){const s=a[e],r=c[e];if(typeof s=="string"){if(s!==r)return!1}else if(!_1(r)||r.length!==s.length||s.some((i,n)=>i!==r[n]))return!1}return!0}function z0(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const C0=(c,a,e)=>c??a??e,gz=k3({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const s=Q1(S6),r=f1(()=>c.route||s.value),i=Q1(t0,0),n=f1(()=>{let t=O2(i);const{matched:o}=r.value;let z;for(;(z=o[t])&&!z.components;)t++;return t}),f=f1(()=>r.value.matched[n.value]);r4(t0,f1(()=>n.value+1)),r4(uz,f),r4(S6,r);const l=$o();return f3(()=>[l.value,f.value,c.name],([t,o,z],[v,H,b])=>{o&&(o.instances[z]=t,H&&H!==o&&t&&t===v&&(o.leaveGuards.size||(o.leaveGuards=H.leaveGuards),o.updateGuards.size||(o.updateGuards=H.updateGuards))),t&&o&&(!H||!Z2(o,H)||!v)&&(o.enterCallbacks[z]||[]).forEach(k=>k(t))},{flush:"post"}),()=>{const t=r.value,o=c.name,z=f.value,v=z&&z.components[o];if(!v)return v0(e.default,{Component:v,route:t});const H=z.props[o],b=H?H===!0?t.params:typeof H=="function"?H(t):H:null,B=k4(v,X({},b,a,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(z.instances[o]=null)},ref:l}));return v0(e.default,{Component:B,route:t})||B}}});function v0(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const xz=gz;function bz(c){const a=Qm(c.routes,c),e=c.parseQuery||hz,s=c.stringifyQuery||o0,r=c.history,i=s3(),n=s3(),f=s3(),l=Uo(f2);let t=f2;B2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=i6.bind(null,M=>""+M),z=i6.bind(null,vz),v=i6.bind(null,C4);function H(M,A){let w,R;return B7(M)?(w=a.getRecordMatcher(M),R=A):R=M,a.addRoute(R,w)}function b(M){const A=a.getRecordMatcher(M);A&&a.removeRoute(A)}function k(){return a.getRoutes().map(M=>M.record)}function B(M){return!!a.getRecordMatcher(M)}function V(M,A){if(A=X({},A||l.value),typeof M=="string"){const m=n6(e,M,A.path),C=a.resolve({path:m.path},A),h=r.createHref(m.fullPath);return X(m,C,{params:v(C.params),hash:C4(m.hash),redirectedFrom:void 0,href:h})}let w;if("path"in M)w=X({},M,{path:n6(e,M.path,A.path).path});else{const m=X({},M.params);for(const C in m)m[C]==null&&delete m[C];w=X({},M,{params:z(M.params)}),A.params=z(A.params)}const R=a.resolve(w,A),j=M.hash||"";R.params=o(v(R.params));const n1=Sm(s,X({},M,{hash:mz(j),path:R.path})),I=r.createHref(n1);return X({fullPath:n1,hash:j,query:s===o0?Hz(M.query):M.query||{}},R,{redirectedFrom:void 0,href:I})}function d(M){return typeof M=="string"?n6(e,M,l.value.path):X({},M)}function S(M,A){if(t!==M)return j2(8,{from:A,to:M})}function _(M){return l1(M)}function G(M){return _(X(d(M),{replace:!0}))}function r1(M){const A=M.matched[M.matched.length-1];if(A&&A.redirect){const{redirect:w}=A;let R=typeof w=="function"?w(M):w;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=d(R):{path:R},R.params={}),X({query:M.query,hash:M.hash,params:"path"in R?{}:M.params},R)}}function l1(M,A){const w=t=V(M),R=l.value,j=M.state,n1=M.force,I=M.replace===!0,m=r1(w);if(m)return l1(X(d(m),{state:typeof m=="object"?X({},j,m.state):j,force:n1,replace:I}),A||w);const C=w;C.redirectedFrom=A;let h;return!n1&&Nm(s,R,w)&&(h=j2(16,{to:C,from:R}),M2(R,R,!0,!1)),(h?Promise.resolve(h):M1(C,R)).catch(u=>K1(u)?K1(u,2)?u:y1(u):c1(u,C,R)).then(u=>{if(u){if(K1(u,2))return l1(X({replace:I},d(u.to),{state:typeof u.to=="object"?X({},j,u.to.state):j,force:n1}),A||C)}else u=i2(C,R,!0,I,j);return k1(C,R,u),u})}function b1(M,A){const w=S(M,A);return w?Promise.reject(w):Promise.resolve()}function M1(M,A){let w;const[R,j,n1]=Sz(M,A);w=f6(R.reverse(),"beforeRouteLeave",M,A);for(const m of R)m.leaveGuards.forEach(C=>{w.push(t2(C,M,A))});const I=b1.bind(null,M,A);return w.push(I),F2(w).then(()=>{w=[];for(const m of i.list())w.push(t2(m,M,A));return w.push(I),F2(w)}).then(()=>{w=f6(j,"beforeRouteUpdate",M,A);for(const m of j)m.updateGuards.forEach(C=>{w.push(t2(C,M,A))});return w.push(I),F2(w)}).then(()=>{w=[];for(const m of M.matched)if(m.beforeEnter&&!A.matched.includes(m))if(_1(m.beforeEnter))for(const C of m.beforeEnter)w.push(t2(C,M,A));else w.push(t2(m.beforeEnter,M,A));return w.push(I),F2(w)}).then(()=>(M.matched.forEach(m=>m.enterCallbacks={}),w=f6(n1,"beforeRouteEnter",M,A),w.push(I),F2(w))).then(()=>{w=[];for(const m of n.list())w.push(t2(m,M,A));return w.push(I),F2(w)}).catch(m=>K1(m,8)?m:Promise.reject(m))}function k1(M,A,w){for(const R of f.list())R(M,A,w)}function i2(M,A,w,R,j){const n1=S(M,A);if(n1)return n1;const I=A===f2,m=B2?history.state:{};w&&(R||I?r.replace(M.fullPath,X({scroll:I&&m&&m.scroll},j)):r.push(M.fullPath,j)),l.value=M,M2(M,A,w,I),y1()}let O1;function A2(){O1||(O1=r.listen((M,A,w)=>{if(!O3.listening)return;const R=V(M),j=r1(R);if(j){l1(X(j,{replace:!0}),R).catch(t3);return}t=R;const n1=l.value;B2&&Bm(a0(n1.fullPath,w.delta),y4()),M1(R,n1).catch(I=>K1(I,12)?I:K1(I,2)?(l1(I.to,R).then(m=>{K1(m,20)&&!w.delta&&w.type===L3.pop&&r.go(-1,!1)}).catch(t3),Promise.reject()):(w.delta&&r.go(-w.delta,!1),c1(I,R,n1))).then(I=>{I=I||i2(R,n1,!1),I&&(w.delta&&!K1(I,8)?r.go(-w.delta,!1):w.type===L3.pop&&K1(I,20)&&r.go(-1,!1)),k1(R,n1,I)}).catch(t3)}))}let V2=s3(),c3=s3(),m1;function c1(M,A,w){y1(M);const R=c3.list();return R.length?R.forEach(j=>j(M,A,w)):console.error(M),Promise.reject(M)}function Q(){return m1&&l.value!==f2?Promise.resolve():new Promise((M,A)=>{V2.add([M,A])})}function y1(M){return m1||(m1=!M,A2(),V2.list().forEach(([A,w])=>M?w(M):A()),V2.reset()),M}function M2(M,A,w,R){const{scrollBehavior:j}=c;if(!B2||!j)return Promise.resolve();const n1=!w&&Rm(a0(M.fullPath,0))||(R||!w)&&history.state&&history.state.scroll||null;return t7().then(()=>j(M,A,n1)).then(I=>I&&Fm(I)).catch(I=>c1(I,M,A))}const A1=M=>r.go(M);let L1;const P2=new Set,O3={currentRoute:l,listening:!0,addRoute:H,removeRoute:b,hasRoute:B,getRoutes:k,resolve:V,options:c,push:_,replace:G,go:A1,back:()=>A1(-1),forward:()=>A1(1),beforeEach:i.add,beforeResolve:n.add,afterEach:f.add,onError:c3.add,isReady:Q,install(M){const A=this;M.component("RouterLink",pz),M.component("RouterView",xz),M.config.globalProperties.$router=A,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>O2(l)}),B2&&!L1&&l.value===f2&&(L1=!0,_(r.location).catch(j=>{}));const w={};for(const j in f2)w[j]=f1(()=>l.value[j]);M.provide(f8,A),M.provide(U7,w3(w)),M.provide(S6,l);const R=M.unmount;P2.add(M),M.unmount=function(){P2.delete(M),P2.size<1&&(t=f2,O1&&O1(),O1=null,l.value=f2,L1=!1,m1=!1),R()}}};return O3}function F2(c){return c.reduce((a,e)=>a.then(()=>e()),Promise.resolve())}function Sz(c,a){const e=[],s=[],r=[],i=Math.max(a.matched.length,c.matched.length);for(let n=0;n<i;n++){const f=a.matched[n];f&&(c.matched.find(t=>Z2(t,f))?s.push(f):e.push(f));const l=c.matched[n];l&&(a.matched.find(t=>Z2(t,l))||r.push(l))}return[e,s,r]}const P3=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},Nz={},wz={class:"app-header"},kz={class:"logo"},yz=Z("h1",null,"Vuebook",-1),Az={class:"search-bar flex"},Pz={class:"search-btn"},Tz=Z("input",{type:"text",id:"search",placeholder:"Search Vuebook"},null,-1),Fz={class:"header-icons flex"};function Bz(c,a,e,s,r,i){const n=C2("router-link"),f=C2("font-awesome-icon");return y3(),A3("section",wz,[Z("div",kz,[E(n,{to:"/"},{default:C1(()=>[yz]),_:1})]),Z("div",Az,[Z("button",Pz,[E(f,{icon:"magnifying-glass"})]),Tz]),Z("div",Fz,[Z("button",null,[E(f,{icon:"fa-brands fa-facebook-messenger"})]),Z("button",null,[E(f,{icon:"fa-solid fa-bell"})]),Z("button",null,[E(f,{icon:"user"})])])])}const Rz=P3(Nz,[["render",Bz]]),Ez={},Dz={class:"side-bar flex"},qz=Z("span",null,"Home",-1),_z=Z("span",null,"UserName",-1),Oz=Z("hr",null,null,-1),$z=Z("span",null,"Friends",-1),Uz=Z("span",null,"Most Recent",-1),Iz=Z("span",null,"Groups",-1),Gz=Z("span",null,"Market Place",-1),Wz=Z("span",null,"Watch",-1),Zz=Z("span",null,"See all",-1),jz=Z("hr",null,null,-1),Kz=Z("span",null,"Group1",-1),Yz=Z("span",null,"Group2",-1),Xz=Z("span",null,"Group3",-1),Qz=Z("span",null,"See all groups",-1),Jz=Z("hr",null,null,-1),cC=Z("span",null,"Game1",-1),aC=Z("span",null,"Game2",-1),eC=Z("span",null,"Game3",-1),sC=Z("span",null,"Game4",-1),rC=Z("span",null,"See all shortcuts",-1);function iC(c,a,e,s,r,i){const n=C2("font-awesome-icon"),f=C2("router-link");return y3(),A3("section",Dz,[Z("nav",null,[E(f,{to:"/"},{default:C1(()=>[E(n,{icon:"fa-solid fa-house-chimney"}),qz]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-user"}),_z]),_:1}),Oz,E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-user-group"}),$z]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-user-clock"}),Uz]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-users"}),Iz]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-store"}),Gz]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-tv"}),Wz]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-grip"}),Zz]),_:1}),jz,E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-user"}),Kz]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-user"}),Yz]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-user"}),Xz]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-grip"}),Qz]),_:1}),Jz,E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-user"}),cC]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-user"}),aC]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-user"}),eC]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-user"}),sC]),_:1}),E(f,{to:""},{default:C1(()=>[E(n,{icon:"fa-solid fa-link"}),rC]),_:1})])])}const nC=P3(Ez,[["render",iC]]),fC={data(){},async created(){},components:{AppHeader:Rz,SideBar:nC}},lC={class:"main-layout"},oC={class:"main-content flex"};function tC(c,a,e,s,r,i){const n=C2("AppHeader"),f=C2("SideBar"),l=C2("RouterView");return y3(),A3("section",lC,[E(n),E(f),Z("section",oC,[E(l)])])}const mC=P3(fC,[["render",tC]]),zC={},CC={class:"sponsored"},vC=Z("h2",null,"Sponsored",-1),hC=[vC];function HC(c,a,e,s,r,i){return y3(),A3("section",CC,hC)}const uC=P3(zC,[["render",HC]]),VC={components:{Sponsored:uC}},MC={class:"home-page"},pC=Z("section",null,[Z("h1",null,"Hello home Page")],-1);function dC(c,a,e,s,r,i){const n=C2("Sponsored");return y3(),A3("section",MC,[pC,E(n)])}const LC=P3(VC,[["render",dC]]),gC=bz({history:Om("/Vuebook-front/"),routes:[{path:"/",component:LC},{}]});function h0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function P(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?h0(Object(e),!0).forEach(function(s){v1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):h0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function v4(c){return v4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},v4(c)}function xC(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function H0(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function bC(c,a,e){return a&&H0(c.prototype,a),e&&H0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function v1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function l8(c,a){return NC(c)||kC(c,a)||I7(c,a)||AC()}function T3(c){return SC(c)||wC(c)||I7(c)||yC()}function SC(c){if(Array.isArray(c))return N6(c)}function NC(c){if(Array.isArray(c))return c}function wC(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function kC(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,n,f;try{for(e=e.call(c);!(r=(n=e.next()).done)&&(s.push(n.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,f=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return s}}function I7(c,a){if(c){if(typeof c=="string")return N6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return N6(c,a)}}function N6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function yC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function AC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u0=function(){},o8={},G7={},W7=null,Z7={mark:u0,measure:u0};try{typeof window<"u"&&(o8=window),typeof document<"u"&&(G7=document),typeof MutationObserver<"u"&&(W7=MutationObserver),typeof performance<"u"&&(Z7=performance)}catch{}var PC=o8.navigator||{},V0=PC.userAgent,M0=V0===void 0?"":V0,h2=o8,s1=G7,p0=W7,j3=Z7;h2.document;var r2=!!s1.documentElement&&!!s1.head&&typeof s1.addEventListener=="function"&&typeof s1.createElement=="function",j7=~M0.indexOf("MSIE")||~M0.indexOf("Trident/"),K3,Y3,X3,Q3,J3,c2="___FONT_AWESOME___",w6=16,K7="fa",Y7="svg-inline--fa",k2="data-fa-i2svg",k6="data-fa-pseudo-element",TC="data-fa-pseudo-element-pending",t8="data-prefix",m8="data-icon",d0="fontawesome-i2svg",FC="async",BC=["HTML","HEAD","STYLE","SCRIPT"],X7=function(){try{return!0}catch{return!1}}(),e1="classic",o1="sharp",z8=[e1,o1];function F3(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[e1]}})}var g3=F3((K3={},v1(K3,e1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),v1(K3,o1,{fa:"solid",fass:"solid","fa-solid":"solid"}),K3)),x3=F3((Y3={},v1(Y3,e1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),v1(Y3,o1,{solid:"fass"}),Y3)),b3=F3((X3={},v1(X3,e1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),v1(X3,o1,{fass:"fa-solid"}),X3)),RC=F3((Q3={},v1(Q3,e1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),v1(Q3,o1,{"fa-solid":"fass"}),Q3)),EC=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Q7="fa-layers-text",DC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qC=F3((J3={},v1(J3,e1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),v1(J3,o1,{900:"fass"}),J3)),J7=[1,2,3,4,5,6,7,8,9,10],_C=J7.concat([11,12,13,14,15,16,17,18,19,20]),OC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],b2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},S3=new Set;Object.keys(x3[e1]).map(S3.add.bind(S3));Object.keys(x3[o1]).map(S3.add.bind(S3));var $C=[].concat(z8,T3(S3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",b2.GROUP,b2.SWAP_OPACITY,b2.PRIMARY,b2.SECONDARY]).concat(J7.map(function(c){return"".concat(c,"x")})).concat(_C.map(function(c){return"w-".concat(c)})),z3=h2.FontAwesomeConfig||{};function UC(c){var a=s1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function IC(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(s1&&typeof s1.querySelector=="function"){var GC=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];GC.forEach(function(c){var a=l8(c,2),e=a[0],s=a[1],r=IC(UC(e));r!=null&&(z3[s]=r)})}var c9={styleDefault:"solid",familyDefault:"classic",cssPrefix:K7,replacementClass:Y7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z3.familyPrefix&&(z3.cssPrefix=z3.familyPrefix);var K2=P(P({},c9),z3);K2.autoReplaceSvg||(K2.observeMutations=!1);var F={};Object.keys(c9).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){K2[c]=e,C3.forEach(function(s){return s(F)})},get:function(){return K2[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){K2.cssPrefix=a,C3.forEach(function(e){return e(F)})},get:function(){return K2.cssPrefix}});h2.FontAwesomeConfig=F;var C3=[];function WC(c){return C3.push(c),function(){C3.splice(C3.indexOf(c),1)}}var l2=w6,Z1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ZC(c){if(!(!c||!r2)){var a=s1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=s1.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return s1.head.insertBefore(a,s),c}}var jC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function N3(){for(var c=12,a="";c-- >0;)a+=jC[Math.random()*62|0];return a}function J2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function C8(c){return c.classList?J2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function a9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function KC(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(a9(c[e]),'" ')},"").trim()}function A4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function v8(c){return c.size!==Z1.size||c.x!==Z1.x||c.y!==Z1.y||c.rotate!==Z1.rotate||c.flipX||c.flipY}function YC(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:t}}function XC(c){var a=c.transform,e=c.width,s=e===void 0?w6:e,r=c.height,i=r===void 0?w6:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&j7?l+="translate(".concat(a.x/l2-s/2,"em, ").concat(a.y/l2-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/l2,"em), calc(-50% + ").concat(a.y/l2,"em)) "):l+="translate(".concat(a.x/l2,"em, ").concat(a.y/l2,"em) "),l+="scale(".concat(a.size/l2*(a.flipX?-1:1),", ").concat(a.size/l2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var QC=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function e9(){var c=K7,a=Y7,e=F.cssPrefix,s=F.replacementClass,r=QC;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(s))}return r}var L0=!1;function l6(){F.autoAddCss&&!L0&&(ZC(e9()),L0=!0)}var JC={mixout:function(){return{dom:{css:e9,insertCss:l6}}},hooks:function(){return{beforeDOMElementCreation:function(){l6()},beforeI2svg:function(){l6()}}}},a2=h2||{};a2[c2]||(a2[c2]={});a2[c2].styles||(a2[c2].styles={});a2[c2].hooks||(a2[c2].hooks={});a2[c2].shims||(a2[c2].shims=[]);var E1=a2[c2],s9=[],cv=function c(){s1.removeEventListener("DOMContentLoaded",c),h4=1,s9.map(function(a){return a()})},h4=!1;r2&&(h4=(s1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(s1.readyState),h4||s1.addEventListener("DOMContentLoaded",cv));function av(c){r2&&(h4?setTimeout(c,0):s9.push(c))}function B3(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?a9(c):"<".concat(a," ").concat(KC(s),">").concat(i.map(B3).join(""),"</").concat(a,">")}function g0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var ev=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},o6=function(a,e,s,r){var i=Object.keys(a),n=i.length,f=r!==void 0?ev(e,r):e,l,t,o;for(s===void 0?(l=1,o=a[i[0]]):(l=0,o=s);l<n;l++)t=i[l],o=f(o,a[t],t,a);return o};function sv(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function y6(c){var a=sv(c);return a.length===1?a[0].toString(16):null}function rv(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function x0(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function A6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=x0(a);typeof E1.hooks.addPack=="function"&&!r?E1.hooks.addPack(c,x0(a)):E1.styles[c]=P(P({},E1.styles[c]||{}),i),c==="fas"&&A6("fa",a)}var c4,a4,e4,E2=E1.styles,iv=E1.shims,nv=(c4={},v1(c4,e1,Object.values(b3[e1])),v1(c4,o1,Object.values(b3[o1])),c4),h8=null,r9={},i9={},n9={},f9={},l9={},fv=(a4={},v1(a4,e1,Object.keys(g3[e1])),v1(a4,o1,Object.keys(g3[o1])),a4);function lv(c){return~$C.indexOf(c)}function ov(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!lv(r)?r:null}var o9=function(){var a=function(i){return o6(E2,function(n,f,l){return n[l]=o6(f,i,{}),n},{})};r9=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),i9=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),l9=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var e="far"in E2||F.autoFetchSvg,s=o6(iv,function(r,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});n9=s.names,f9=s.unicodes,h8=P4(F.styleDefault,{family:F.familyDefault})};WC(function(c){h8=P4(c.styleDefault,{family:F.familyDefault})});o9();function H8(c,a){return(r9[c]||{})[a]}function tv(c,a){return(i9[c]||{})[a]}function S2(c,a){return(l9[c]||{})[a]}function t9(c){return n9[c]||{prefix:null,iconName:null}}function mv(c){var a=f9[c],e=H8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function H2(){return h8}var u8=function(){return{prefix:null,iconName:null,rest:[]}};function P4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?e1:e,r=g3[s][c],i=x3[s][c]||x3[s][r],n=c in E1.styles?c:null;return i||n||null}var b0=(e4={},v1(e4,e1,Object.keys(b3[e1])),v1(e4,o1,Object.keys(b3[o1])),e4);function T4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},v1(a,e1,"".concat(F.cssPrefix,"-").concat(e1)),v1(a,o1,"".concat(F.cssPrefix,"-").concat(o1)),a),n=null,f=e1;(c.includes(i[e1])||c.some(function(t){return b0[e1].includes(t)}))&&(f=e1),(c.includes(i[o1])||c.some(function(t){return b0[o1].includes(t)}))&&(f=o1);var l=c.reduce(function(t,o){var z=ov(F.cssPrefix,o);if(E2[o]?(o=nv[f].includes(o)?RC[f][o]:o,n=o,t.prefix=o):fv[f].indexOf(o)>-1?(n=o,t.prefix=P4(o,{family:f})):z?t.iconName=z:o!==F.replacementClass&&o!==i[e1]&&o!==i[o1]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var v=n==="fa"?t9(t.iconName):{},H=S2(t.prefix,t.iconName);v.prefix&&(n=null),t.iconName=v.iconName||H||t.iconName,t.prefix=v.prefix||t.prefix,t.prefix==="far"&&!E2.far&&E2.fas&&!F.autoFetchSvg&&(t.prefix="fas")}return t},u8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===o1&&(E2.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=S2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=H2()||"fas"),l}var zv=function(){function c(){xC(this,c),this.definitions={}}return bC(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=P(P({},e.definitions[f]||{}),n[f]),A6(f,n[f]);var l=b3[e1][f];l&&A6(l,n[f]),o9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=t)}),e[f][l]=t}),e}}]),c}(),S0=[],D2={},U2={},Cv=Object.keys(U2);function vv(c,a){var e=a.mixoutsTo;return S0=c,D2={},Object.keys(U2).forEach(function(s){Cv.indexOf(s)===-1&&delete U2[s]}),S0.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),v4(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=r[n][f]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){D2[n]||(D2[n]=[]),D2[n].push(i[n])})}s.provides&&s.provides(U2)}),e}function P6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=D2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function y2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=D2[c]||[];r.forEach(function(i){i.apply(null,e)})}function e2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return U2[c]?U2[c].apply(null,a):void 0}function T6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||H2();if(a)return a=S2(e,a)||a,g0(m9.definitions,e,a)||g0(E1.styles,e,a)}var m9=new zv,hv=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,y2("noAuto")},Hv={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return r2?(y2("beforeI2svg",a),e2("pseudoElements2svg",a),e2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,av(function(){Vv({autoReplaceSvgRoot:e}),y2("watch",a)})}},uv={icon:function(a){if(a===null)return null;if(v4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:S2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=P4(a[0]);return{prefix:s,iconName:S2(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(EC))){var r=T4(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||H2(),iconName:S2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=H2();return{prefix:i,iconName:S2(i,a)||a}}}},w1={noAuto:hv,config:F,dom:Hv,parse:uv,library:m9,findIconDefinition:T6,toHtml:B3},Vv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?s1:e;(Object.keys(E1.styles).length>0||F.autoFetchSvg)&&r2&&F.autoReplaceSvg&&w1.dom.i2svg({node:s})};function F4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return B3(s)})}}),Object.defineProperty(c,"node",{get:function(){if(r2){var s=s1.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Mv(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(v8(n)&&e.found&&!s.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};r.style=A4(P(P({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function pv(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},r),{},{id:n}),children:s}]}]}function V8(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,z=c.extra,v=c.watchable,H=v===void 0?!1:v,b=s.found?s:e,k=b.width,B=b.height,V=r==="fak",d=[F.replacementClass,i?"".concat(F.cssPrefix,"-").concat(i):""].filter(function(M1){return z.classes.indexOf(M1)===-1}).filter(function(M1){return M1!==""||!!M1}).concat(z.classes).join(" "),S={children:[],attributes:P(P({},z.attributes),{},{"data-prefix":r,"data-icon":i,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(B)})},_=V&&!~z.classes.indexOf("fa-fw")?{width:"".concat(k/B*16*.0625,"em")}:{};H&&(S.attributes[k2]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(o||N3())},children:[l]}),delete S.attributes.title);var G=P(P({},S),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:n,symbol:f,styles:P(P({},_),z.styles)}),r1=s.found&&e.found?e2("generateAbstractMask",G)||{children:[],attributes:{}}:e2("generateAbstractIcon",G)||{children:[],attributes:{}},l1=r1.children,b1=r1.attributes;return G.children=l1,G.attributes=b1,f?pv(G):Mv(G)}function N0(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=P(P(P({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(t[k2]="");var o=P({},n.styles);v8(r)&&(o.transform=XC({transform:r,startCentered:!0,width:e,height:s}),o["-webkit-transform"]=o.transform);var z=A4(o);z.length>0&&(t.style=z);var v=[];return v.push({tag:"span",attributes:t,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function dv(c){var a=c.content,e=c.title,s=c.extra,r=P(P(P({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=A4(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var t6=E1.styles;function F6(c){var a=c[0],e=c[1],s=c.slice(4),r=l8(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(b2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(b2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(b2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var Lv={found:!1,width:512,height:512};function gv(c,a){!X7&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function B6(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=H2()),new Promise(function(s,r){if(e2("missingIconAbstract"),e==="fa"){var i=t9(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&t6[a]&&t6[a][c]){var n=t6[a][c];return s(F6(n))}gv(c,a),s(P(P({},Lv),{},{icon:F.showMissingIcons&&c?e2("missingIconAbstract")||{}:{}}))})}var w0=function(){},R6=F.measurePerformance&&j3&&j3.mark&&j3.measure?j3:{mark:w0,measure:w0},i3='FA "6.2.1"',xv=function(a){return R6.mark("".concat(i3," ").concat(a," begins")),function(){return z9(a)}},z9=function(a){R6.mark("".concat(i3," ").concat(a," ends")),R6.measure("".concat(i3," ").concat(a),"".concat(i3," ").concat(a," begins"),"".concat(i3," ").concat(a," ends"))},M8={begin:xv,end:z9},f4=function(){};function k0(c){var a=c.getAttribute?c.getAttribute(k2):null;return typeof a=="string"}function bv(c){var a=c.getAttribute?c.getAttribute(t8):null,e=c.getAttribute?c.getAttribute(m8):null;return a&&e}function Sv(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function Nv(){if(F.autoReplaceSvg===!0)return l4.replace;var c=l4[F.autoReplaceSvg];return c||l4.replace}function wv(c){return s1.createElementNS("http://www.w3.org/2000/svg",c)}function kv(c){return s1.createElement(c)}function C9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?wv:kv:e;if(typeof c=="string")return s1.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(C9(n,{ceFn:s}))}),r}function yv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var l4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(C9(r),e)}),e.getAttribute(k2)===null&&F.keepOriginalSource){var s=s1.createComment(yv(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~C8(e).indexOf(F.replacementClass))return l4.replace(a);var r=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(f,l){return l===F.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(f){return B3(f)}).join(`
`);e.setAttribute(k2,""),e.innerHTML=n}};function y0(c){c()}function v9(c,a){var e=typeof a=="function"?a:f4;if(c.length===0)e();else{var s=y0;F.mutateApproach===FC&&(s=h2.requestAnimationFrame||y0),s(function(){var r=Nv(),i=M8.begin("mutate");c.map(r),i(),e()})}}var p8=!1;function h9(){p8=!0}function E6(){p8=!1}var H4=null;function A0(c){if(p0&&F.observeMutations){var a=c.treeCallback,e=a===void 0?f4:a,s=c.nodeCallback,r=s===void 0?f4:s,i=c.pseudoElementsCallback,n=i===void 0?f4:i,f=c.observeMutationsRoot,l=f===void 0?s1:f;H4=new p0(function(t){if(!p8){var o=H2();J2(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!k0(z.addedNodes[0])&&(F.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&F.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&k0(z.target)&&~OC.indexOf(z.attributeName))if(z.attributeName==="class"&&bv(z.target)){var v=T4(C8(z.target)),H=v.prefix,b=v.iconName;z.target.setAttribute(t8,H||o),b&&z.target.setAttribute(m8,b)}else Sv(z.target)&&r(z.target)})}}),r2&&H4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Av(){H4&&H4.disconnect()}function Pv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(s[n]=f.join(":").trim()),s},{})),e}function Tv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=T4(C8(c));return r.prefix||(r.prefix=H2()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=tv(r.prefix,c.innerText)||H8(r.prefix,y6(c.innerText))),!r.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Fv(c){var a=J2(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(s||N3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Bv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function P0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Tv(c),s=e.iconName,r=e.prefix,i=e.rest,n=Fv(c),f=P6("parseNodeAttributes",{},c),l=a.styleParser?Pv(c):[];return P({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:Z1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var Rv=E1.styles;function H9(c){var a=F.autoReplaceSvg==="nest"?P0(c,{styleParser:!1}):P0(c);return~a.extra.classes.indexOf(Q7)?e2("generateLayersText",c,a):e2("generateSvgReplacementMutation",c,a)}var u2=new Set;z8.map(function(c){u2.add("fa-".concat(c))});Object.keys(g3[e1]).map(u2.add.bind(u2));Object.keys(g3[o1]).map(u2.add.bind(u2));u2=T3(u2);function T0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!r2)return Promise.resolve();var e=s1.documentElement.classList,s=function(z){return e.add("".concat(d0,"-").concat(z))},r=function(z){return e.remove("".concat(d0,"-").concat(z))},i=F.autoFetchSvg?u2:z8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(Rv));i.includes("fa")||i.push("fa");var n=[".".concat(Q7,":not([").concat(k2,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(k2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=J2(c.querySelectorAll(n))}catch{}if(f.length>0)s("pending"),r("complete");else return Promise.resolve();var l=M8.begin("onTree"),t=f.reduce(function(o,z){try{var v=H9(z);v&&o.push(v)}catch(H){X7||H.name==="MissingIcon"&&console.error(H)}return o},[]);return new Promise(function(o,z){Promise.all(t).then(function(v){v9(v,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),z(v)})})}function Ev(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;H9(c).then(function(e){e&&v9([e],a)})}function Dv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:T6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:T6(r||{})),c(s,P(P({},e),{},{mask:r}))}}var qv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?Z1:s,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,z=e.title,v=z===void 0?null:z,H=e.titleId,b=H===void 0?null:H,k=e.classes,B=k===void 0?[]:k,V=e.attributes,d=V===void 0?{}:V,S=e.styles,_=S===void 0?{}:S;if(a){var G=a.prefix,r1=a.iconName,l1=a.icon;return F4(P({type:"icon"},a),function(){return y2("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(v?d["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(b||N3()):(d["aria-hidden"]="true",d.focusable="false")),V8({icons:{main:F6(l1),mask:l?F6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:G,iconName:r1,transform:P(P({},Z1),r),symbol:n,title:v,maskId:o,titleId:b,extra:{attributes:d,styles:_,classes:B}})})}},_v={mixout:function(){return{icon:Dv(qv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=T0,e.nodeCallback=Ev,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?s1:s,i=e.callback,n=i===void 0?function(){}:i;return T0(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,f=s.prefix,l=s.transform,t=s.symbol,o=s.mask,z=s.maskId,v=s.extra;return new Promise(function(H,b){Promise.all([B6(r,f),o.iconName?B6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var B=l8(k,2),V=B[0],d=B[1];H([e,V8({icons:{main:V,mask:d},prefix:f,iconName:r,transform:l,symbol:t,maskId:z,title:i,titleId:n,extra:v,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,f=e.styles,l=A4(f);l.length>0&&(r.style=l);var t;return v8(n)&&(t=e2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},Ov={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return F4({type:"layer"},function(){y2("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(T3(i)).join(" ")},children:n}]})}}}},$v={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,f=n===void 0?[]:n,l=s.attributes,t=l===void 0?{}:l,o=s.styles,z=o===void 0?{}:o;return F4({type:"counter",content:e},function(){return y2("beforeDOMElementCreation",{content:e,params:s}),dv({content:e.toString(),title:i,extra:{attributes:t,styles:z,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(T3(f))}})})}}}},Uv={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?Z1:r,n=s.title,f=n===void 0?null:n,l=s.classes,t=l===void 0?[]:l,o=s.attributes,z=o===void 0?{}:o,v=s.styles,H=v===void 0?{}:v;return F4({type:"text",content:e},function(){return y2("beforeDOMElementCreation",{content:e,params:s}),N0({content:e,transform:P(P({},Z1),i),title:f,extra:{attributes:z,styles:H,classes:["".concat(F.cssPrefix,"-layers-text")].concat(T3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,f=null,l=null;if(j7){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return F.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,N0({content:e.innerHTML,width:f,height:l,transform:i,title:r,extra:n,watchable:!0})])}}},Iv=new RegExp('"',"ug"),F0=[1105920,1112319];function Gv(c){var a=c.replace(Iv,""),e=rv(a,0),s=e>=F0[0]&&e<=F0[1],r=a.length===2?a[0]===a[1]:!1;return{value:y6(r?a[0]:a),isSecondary:s||r}}function B0(c,a){var e="".concat(TC).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=J2(c.children),n=i.filter(function(l1){return l1.getAttribute(k6)===a})[0],f=h2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(DC),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),s();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?o1:e1,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?x3[v][l[2].toLowerCase()]:qC[v][t],b=Gv(z),k=b.value,B=b.isSecondary,V=l[0].startsWith("FontAwesome"),d=H8(H,k),S=d;if(V){var _=mv(k);_.iconName&&_.prefix&&(d=_.iconName,H=_.prefix)}if(d&&!B&&(!n||n.getAttribute(t8)!==H||n.getAttribute(m8)!==S)){c.setAttribute(e,S),n&&c.removeChild(n);var G=Bv(),r1=G.extra;r1.attributes[k6]=a,B6(d,H).then(function(l1){var b1=V8(P(P({},G),{},{icons:{main:l1,mask:u8()},prefix:H,iconName:S,extra:r1,watchable:!0})),M1=s1.createElement("svg");a==="::before"?c.insertBefore(M1,c.firstChild):c.appendChild(M1),M1.outerHTML=b1.map(function(k1){return B3(k1)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function Wv(c){return Promise.all([B0(c,"::before"),B0(c,"::after")])}function Zv(c){return c.parentNode!==document.head&&!~BC.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(k6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function R0(c){if(r2)return new Promise(function(a,e){var s=J2(c.querySelectorAll("*")).filter(Zv).map(Wv),r=M8.begin("searchPseudoElements");h9(),Promise.all(s).then(function(){r(),E6(),a()}).catch(function(){r(),E6(),e()})})}var jv={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=R0,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?s1:s;F.searchPseudoElements&&R0(r)}}},E0=!1,Kv={mixout:function(){return{dom:{unwatch:function(){h9(),E0=!0}}}},hooks:function(){return{bootstrap:function(){A0(P6("mutationObserverCallbacks",{}))},noAuto:function(){Av()},watch:function(e){var s=e.observeMutationsRoot;E0?E6():A0(P6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},D0=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return s.flipX=!0,s;if(n&&f==="v")return s.flipY=!0,s;if(f=parseFloat(f),isNaN(f))return s;switch(n){case"grow":s.size=s.size+f;break;case"shrink":s.size=s.size-f;break;case"left":s.x=s.x-f;break;case"right":s.x=s.x+f;break;case"up":s.y=s.y-f;break;case"down":s.y=s.y+f;break;case"rotate":s.rotate=s.rotate+f;break}return s},e)},Yv={mixout:function(){return{parse:{transform:function(e){return D0(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=D0(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),o="rotate(".concat(r.rotate," 0 0)"),z={transform:"".concat(l," ").concat(t," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},H={outer:f,inner:z,path:v};return{tag:"g",attributes:P({},H.outer),children:[{tag:"g",attributes:P({},H.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:P(P({},s.icon.attributes),H.path)}]}]}}}},m6={x:0,y:0,width:"100%",height:"100%"};function q0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function Xv(c){return c.tag==="g"?c.children:[c]}var Qv={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?T4(r.split(" ").map(function(n){return n.trim()})):u8();return i.prefix||(i.prefix=H2()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,t=i.width,o=i.icon,z=n.width,v=n.icon,H=YC({transform:l,containerWidth:z,iconWidth:t}),b={tag:"rect",attributes:P(P({},m6),{},{fill:"white"})},k=o.children?{children:o.children.map(q0)}:{},B={tag:"g",attributes:P({},H.inner),children:[q0(P({tag:o.tag,attributes:P(P({},o.attributes),H.path)},k))]},V={tag:"g",attributes:P({},H.outer),children:[B]},d="mask-".concat(f||N3()),S="clip-".concat(f||N3()),_={tag:"mask",attributes:P(P({},m6),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,V]},G={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Xv(v)},_]};return s.push(G,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(d,")")},m6)}),{children:s,attributes:r}}}},Jv={provides:function(a){var e=!1;h2.matchMedia&&(e=h2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:P(P({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=P(P({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:P(P({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(f),s.push({tag:"path",attributes:P(P({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:P(P({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:P(P({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},ch={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},ah=[JC,_v,Ov,$v,Uv,jv,Kv,Yv,Qv,Jv,ch];vv(ah,{mixoutsTo:w1});w1.noAuto;var u9=w1.config,d8=w1.library,eh=w1.dom,u4=w1.parse;w1.findIconDefinition;w1.toHtml;var sh=w1.icon;w1.layer;var rh=w1.text;w1.counter;function _0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function F1(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?_0(Object(e),!0).forEach(function(s){g1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):_0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function V4(c){return V4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},V4(c)}function g1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function ih(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function nh(c,a){if(c==null)return{};var e=ih(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(c,s)&&(e[s]=c[s])}return e}function D6(c){return fh(c)||lh(c)||oh(c)||th()}function fh(c){if(Array.isArray(c))return q6(c)}function lh(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function oh(c,a){if(c){if(typeof c=="string")return q6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return q6(c,a)}}function q6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function th(){throw new TypeError(`Invalid attempt to spread non-iterable instance.