(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var nd={exports:{}},ul={};var i_;function KM(){if(i_)return ul;i_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return ul.Fragment=t,ul.jsx=n,ul.jsxs=n,ul}var a_;function jM(){return a_||(a_=1,nd.exports=KM()),nd.exports}var bt=jM(),id={exports:{}},hl={},ad={exports:{}},sd={};var s_;function QM(){return s_||(s_=1,(function(s){function t(B,z){var Q=B.length;B.push(z);t:for(;0<Q;){var ut=Q-1>>>1,Et=B[ut];if(0<o(Et,z))B[ut]=z,B[Q]=Et,Q=ut;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var z=B[0],Q=B.pop();if(Q!==z){B[0]=Q;t:for(var ut=0,Et=B.length,P=Et>>>1;ut<P;){var K=2*(ut+1)-1,St=B[K],At=K+1,wt=B[At];if(0>o(St,Q))At<Et&&0>o(wt,St)?(B[ut]=wt,B[At]=Q,ut=At):(B[ut]=St,B[K]=Q,ut=K);else if(At<Et&&0>o(wt,Q))B[ut]=wt,B[At]=Q,ut=At;else break t}}return z}function o(B,z){var Q=B.sortIndex-z.sortIndex;return Q!==0?Q:B.id-z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],d=[],g=1,_=null,v=3,x=!1,b=!1,A=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var z=n(d);z!==null;){if(z.callback===null)a(d);else if(z.startTime<=B)a(d),z.sortIndex=z.expirationTime,t(p,z);else break;z=n(d)}}function F(B){if(A=!1,w(B),!b)if(n(p)!==null)b=!0,D||(D=!0,q());else{var z=n(d);z!==null&&j(F,z.startTime-B)}}var D=!1,O=-1,T=5,U=-1;function k(){return S?!0:!(s.unstable_now()-U<T)}function G(){if(S=!1,D){var B=s.unstable_now();U=B;var z=!0;try{t:{b=!1,A&&(A=!1,N(O),O=-1),x=!0;var Q=v;try{e:{for(w(B),_=n(p);_!==null&&!(_.expirationTime>B&&k());){var ut=_.callback;if(typeof ut=="function"){_.callback=null,v=_.priorityLevel;var Et=ut(_.expirationTime<=B);if(B=s.unstable_now(),typeof Et=="function"){_.callback=Et,w(B),z=!0;break e}_===n(p)&&a(p),w(B)}else a(p);_=n(p)}if(_!==null)z=!0;else{var P=n(d);P!==null&&j(F,P.startTime-B),z=!1}}break t}finally{_=null,v=Q,x=!1}z=void 0}}finally{z?q():D=!1}}}var q;if(typeof L=="function")q=function(){L(G)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ft=ct.port2;ct.port1.onmessage=G,q=function(){ft.postMessage(null)}}else q=function(){y(G,0)};function j(B,z){O=y(function(){B(s.unstable_now())},z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var Q=v;v=z;try{return B()}finally{v=Q}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=v;v=B;try{return z()}finally{v=Q}},s.unstable_scheduleCallback=function(B,z,Q){var ut=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ut+Q:ut):Q=ut,B){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=Q+Et,B={id:g++,callback:z,priorityLevel:B,startTime:Q,expirationTime:Et,sortIndex:-1},Q>ut?(B.sortIndex=Q,t(d,B),n(p)===null&&B===n(d)&&(A?(N(O),O=-1):A=!0,j(F,Q-ut))):(B.sortIndex=Et,t(p,B),b||x||(b=!0,D||(D=!0,q()))),B},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(B){var z=v;return function(){var Q=v;v=z;try{return B.apply(this,arguments)}finally{v=Q}}}})(sd)),sd}var r_;function $M(){return r_||(r_=1,ad.exports=QM()),ad.exports}var rd={exports:{}},de={};var o_;function JM(){if(o_)return de;o_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function y(P,K,St){this.props=P,this.context=K,this.refs=S,this.updater=St||b}y.prototype.isReactComponent={},y.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function N(){}N.prototype=y.prototype;function L(P,K,St){this.props=P,this.context=K,this.refs=S,this.updater=St||b}var w=L.prototype=new N;w.constructor=L,A(w,y.prototype),w.isPureReactComponent=!0;var F=Array.isArray;function D(){}var O={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(P,K,St){var At=St.ref;return{$$typeof:s,type:P,key:K,ref:At!==void 0?At:null,props:St}}function k(P,K){return U(P.type,K,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function q(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(St){return K[St]})}var ct=/\/+/g;function ft(P,K){return typeof P=="object"&&P!==null&&P.key!=null?q(""+P.key):K.toString(36)}function j(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(D,D):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,K,St,At,wt){var tt=typeof P;(tt==="undefined"||tt==="boolean")&&(P=null);var xt=!1;if(P===null)xt=!0;else switch(tt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(P.$$typeof){case s:case t:xt=!0;break;case g:return xt=P._init,B(xt(P._payload),K,St,At,wt)}}if(xt)return wt=wt(P),xt=At===""?"."+ft(P,0):At,F(wt)?(St="",xt!=null&&(St=xt.replace(ct,"$&/")+"/"),B(wt,K,St,"",function(ae){return ae})):wt!=null&&(G(wt)&&(wt=k(wt,St+(wt.key==null||P&&P.key===wt.key?"":(""+wt.key).replace(ct,"$&/")+"/")+xt)),K.push(wt)),1;xt=0;var yt=At===""?".":At+":";if(F(P))for(var zt=0;zt<P.length;zt++)At=P[zt],tt=yt+ft(At,zt),xt+=B(At,K,St,tt,wt);else if(zt=x(P),typeof zt=="function")for(P=zt.call(P),zt=0;!(At=P.next()).done;)At=At.value,tt=yt+ft(At,zt++),xt+=B(At,K,St,tt,wt);else if(tt==="object"){if(typeof P.then=="function")return B(j(P),K,St,At,wt);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return xt}function z(P,K,St){if(P==null)return P;var At=[],wt=0;return B(P,At,"","",function(tt){return K.call(St,tt,wt++)}),At}function Q(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(St){(P._status===0||P._status===-1)&&(P._status=1,P._result=St)},function(St){(P._status===0||P._status===-1)&&(P._status=2,P._result=St)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var ut=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Et={map:z,forEach:function(P,K,St){z(P,function(){K.apply(this,arguments)},St)},count:function(P){var K=0;return z(P,function(){K++}),K},toArray:function(P){return z(P,function(K){return K})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return de.Activity=_,de.Children=Et,de.Component=y,de.Fragment=n,de.Profiler=o,de.PureComponent=L,de.StrictMode=a,de.Suspense=p,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,de.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},de.cache=function(P){return function(){return P.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(P,K,St){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var At=A({},P.props),wt=P.key;if(K!=null)for(tt in K.key!==void 0&&(wt=""+K.key),K)!T.call(K,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&K.ref===void 0||(At[tt]=K[tt]);var tt=arguments.length-2;if(tt===1)At.children=St;else if(1<tt){for(var xt=Array(tt),yt=0;yt<tt;yt++)xt[yt]=arguments[yt+2];At.children=xt}return U(P.type,wt,At)},de.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},de.createElement=function(P,K,St){var At,wt={},tt=null;if(K!=null)for(At in K.key!==void 0&&(tt=""+K.key),K)T.call(K,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(wt[At]=K[At]);var xt=arguments.length-2;if(xt===1)wt.children=St;else if(1<xt){for(var yt=Array(xt),zt=0;zt<xt;zt++)yt[zt]=arguments[zt+2];wt.children=yt}if(P&&P.defaultProps)for(At in xt=P.defaultProps,xt)wt[At]===void 0&&(wt[At]=xt[At]);return U(P,tt,wt)},de.createRef=function(){return{current:null}},de.forwardRef=function(P){return{$$typeof:f,render:P}},de.isValidElement=G,de.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:Q}},de.memo=function(P,K){return{$$typeof:d,type:P,compare:K===void 0?null:K}},de.startTransition=function(P){var K=O.T,St={};O.T=St;try{var At=P(),wt=O.S;wt!==null&&wt(St,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(D,ut)}catch(tt){ut(tt)}finally{K!==null&&St.types!==null&&(K.types=St.types),O.T=K}},de.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},de.use=function(P){return O.H.use(P)},de.useActionState=function(P,K,St){return O.H.useActionState(P,K,St)},de.useCallback=function(P,K){return O.H.useCallback(P,K)},de.useContext=function(P){return O.H.useContext(P)},de.useDebugValue=function(){},de.useDeferredValue=function(P,K){return O.H.useDeferredValue(P,K)},de.useEffect=function(P,K){return O.H.useEffect(P,K)},de.useEffectEvent=function(P){return O.H.useEffectEvent(P)},de.useId=function(){return O.H.useId()},de.useImperativeHandle=function(P,K,St){return O.H.useImperativeHandle(P,K,St)},de.useInsertionEffect=function(P,K){return O.H.useInsertionEffect(P,K)},de.useLayoutEffect=function(P,K){return O.H.useLayoutEffect(P,K)},de.useMemo=function(P,K){return O.H.useMemo(P,K)},de.useOptimistic=function(P,K){return O.H.useOptimistic(P,K)},de.useReducer=function(P,K,St){return O.H.useReducer(P,K,St)},de.useRef=function(P){return O.H.useRef(P)},de.useState=function(P){return O.H.useState(P)},de.useSyncExternalStore=function(P,K,St){return O.H.useSyncExternalStore(P,K,St)},de.useTransition=function(){return O.H.useTransition()},de.version="19.2.7",de}var l_;function X0(){return l_||(l_=1,rd.exports=JM()),rd.exports}var od={exports:{}},Yn={};var c_;function tS(){if(c_)return Yn;c_=1;var s=X0();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Yn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,g)},Yn.flushSync=function(p){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=g,a.d.f()}},Yn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Yn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Yn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=f(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Yn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Yn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=f(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Yn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Yn.requestFormReset=function(p){a.d.r(p)},Yn.unstable_batchedUpdates=function(p,d){return p(d)},Yn.useFormState=function(p,d,g){return u.H.useFormState(p,d,g)},Yn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var u_;function eS(){if(u_)return od.exports;u_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),od.exports=tS(),od.exports}var h_;function nS(){if(h_)return hl;h_=1;var s=$M(),t=X0(),n=eS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var M=!1,C=h.child;C;){if(C===r){M=!0,r=h,l=m;break}if(C===l){M=!0,l=h,r=m;break}C=C.sibling}if(!M){for(C=m.child;C;){if(C===r){M=!0,r=m,l=h;break}if(C===l){M=!0,l=m,r=h;break}C=C.sibling}if(!M)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case D:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ft(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return ft(e(i))}catch{}}return null}var j=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ut=[],Et=-1;function P(e){return{current:e}}function K(e){0>Et||(e.current=ut[Et],ut[Et]=null,Et--)}function St(e,i){Et++,ut[Et]=e.current,e.current=i}var At=P(null),wt=P(null),tt=P(null),xt=P(null);function yt(e,i){switch(St(tt,i),St(wt,e),St(At,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Av(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Av(i),e=wv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(At),St(At,e)}function zt(){K(At),K(wt),K(tt)}function ae(e){e.memoizedState!==null&&St(xt,e);var i=At.current,r=wv(i,e.type);i!==r&&(St(wt,e),St(At,r))}function Qt(e){wt.current===e&&(K(At),K(wt)),xt.current===e&&(K(xt),rl._currentValue=Q)}var ze,le;function ge(e){if(ze===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);ze=i&&i[1]||"",le=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+e+le}var we=!1;function be(e,i){if(!e||we)return"";we=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(lt){var ot=lt}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(lt){ot=lt}e.call(Mt.prototype)}}else{try{throw Error()}catch(lt){ot=lt}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(lt){if(lt&&ot&&typeof lt.stack=="string")return[lt.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],C=m[1];if(M&&C){var H=M.split(`
`),nt=C.split(`
`);for(h=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(l===H.length||h===nt.length)for(l=H.length-1,h=nt.length-1;1<=l&&0<=h&&H[l]!==nt[h];)h--;for(;1<=l&&0<=h;l--,h--)if(H[l]!==nt[h]){if(l!==1||h!==1)do if(l--,h--,0>h||H[l]!==nt[h]){var gt=`
`+H[l].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=l&&0<=h);break}}}finally{we=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ge(r):""}function mt(e,i){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return e.child!==i&&i!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return ge("Activity");default:return""}}function $t(e){try{var i="",r=null;do i+=mt(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ue=Object.prototype.hasOwnProperty,fe=s.unstable_scheduleCallback,ve=s.unstable_cancelCallback,Ge=s.unstable_shouldYield,X=s.unstable_requestPaint,Te=s.unstable_now,me=s.unstable_getCurrentPriorityLevel,I=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,$=s.unstable_NormalPriority,st=s.unstable_LowPriority,ht=s.unstable_IdlePriority,Rt=s.log,Nt=s.unstable_setDisableYieldValue,dt=null,pt=null;function Dt(e){if(typeof Rt=="function"&&Nt(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(dt,e)}catch{}}var Ht=Math.clz32?Math.clz32:te,Ot=Math.log,Lt=Math.LN2;function te(e){return e>>>=0,e===0?32:31-(Ot(e)/Lt|0)|0}var ee=256,ce=262144,W=4194304;function Ct(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?h=Ct(l):(M&=C,M!==0?h=Ct(M):r||(r=C&~e,r!==0&&(h=Ct(r))))):(C=l&~m,C!==0?h=Ct(C):M!==0?h=Ct(M):r||(r=l&~e,r!==0&&(h=Ct(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Ut(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Bt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tt(){var e=W;return W<<=1,(W&62914560)===0&&(W=4194304),e}function Yt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function kt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cn(e,i,r,l,h,m){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(r=M&~r;0<r;){var gt=31-Ht(r),Mt=1<<gt;C[gt]=0,H[gt]=-1;var ot=nt[gt];if(ot!==null)for(nt[gt]=null,gt=0;gt<ot.length;gt++){var lt=ot[gt];lt!==null&&(lt.lane&=-536870913)}r&=~Mt}l!==0&&Xe(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~i))}function Xe(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ht(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function pi(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-Ht(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function mi(e,i){var r=i&-i;return r=(r&42)!==0?1:yo(r),(r&(e.suspendedLanes|i))!==0?0:r}function yo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function So(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:jv(e.type))}function cr(e,i){var r=z.p;try{return z.p=e,i()}finally{z.p=r}}var na=Math.random().toString(36).slice(2),_n="__reactFiber$"+na,Bn="__reactProps$"+na,ii="__reactContainer$"+na,Cs="__reactEvents$"+na,Bl="__reactListeners$"+na,zl="__reactHandles$"+na,Ds="__reactResources$"+na,qa="__reactMarker$"+na;function Ya(e){delete e[_n],delete e[Bn],delete e[Cs],delete e[Bl],delete e[zl]}function ga(e){var i=e[_n];if(i)return i;for(var r=e.parentNode;r;){if(i=r[ii]||r[_n]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Pv(e);e!==null;){if(r=e[_n])return r;e=Pv(e)}return i}e=r,r=e.parentNode}return null}function va(e){if(e=e[_n]||e[ii]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Ns(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Za(e){var i=e[Ds];return i||(i=e[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function xn(e){e[qa]=!0}var Hl=new Set,R={};function Y(e,i){rt(e,i),rt(e+"Capture",i)}function rt(e,i){for(R[e]=i,e=0;e<i.length;e++)Hl.add(i[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},It={};function Vt(e){return ue.call(It,e)?!0:ue.call(at,e)?!1:it.test(e)?It[e]=!0:(at[e]=!0,!1)}function Pt(e,i,r){if(Vt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Xt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Wt(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _e(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Jt(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(M){r=""+M,m.call(this,M)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ie(e){if(!e._valueTracker){var i=_e(e)?"checked":"value";e._valueTracker=Jt(e,i,""+e[i])}}function un(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=_e(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function en(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qe=/[\n"\\]/g;function Ye(e){return e.replace(qe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Gt(e,i,r,l,h,m,M,C){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ne(i)):e.value!==""+ne(i)&&(e.value=""+ne(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?Re(e,M,ne(i)):r!=null?Re(e,M,ne(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+ne(C):e.removeAttribute("name")}function qn(e,i,r,l,h,m,M,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ie(e);return}r=r!=null?""+ne(r):"",i=i!=null?""+ne(i):r,C||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Ie(e)}function Re(e,i,r){i==="number"&&en(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function An(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+ne(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function gi(e,i,r){if(i!=null&&(i=""+ne(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+ne(r):""}function Vi(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(j(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=ne(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ie(e)}function vi(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Ze=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hn(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||Ze.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function ki(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&hn(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&hn(e,m,i[m])}function Ve(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Us(e){return Ka.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function _a(){}var $u=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ur=null,hr=null;function Tp(e){var i=va(e);if(i&&(e=i.stateNode)){var r=e[Bn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Gt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ye(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[Bn]||null;if(!h)throw Error(a(90));Gt(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&un(l)}break t;case"textarea":gi(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&An(e,!!r.multiple,i,!1)}}}var th=!1;function Ap(e,i,r){if(th)return e(i,r);th=!0;try{var l=e(i);return l}finally{if(th=!1,(ur!==null||hr!==null)&&(wc(),ur&&(i=ur,e=hr,hr=ur=null,Tp(i),e)))for(i=0;i<e.length;i++)Tp(e[i])}}function bo(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Bn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var xa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=!1;if(xa)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){eh=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{eh=!1}var ja=null,nh=null,Gl=null;function wp(){if(Gl)return Gl;var e,i=nh,r=i.length,l,h="value"in ja?ja.value:ja.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var M=r-e;for(l=1;l<=M&&i[r-l]===h[m-l];l++);return Gl=h.slice(e,1<l?1-l:void 0)}function Vl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function kl(){return!0}function Rp(){return!1}function ai(e){function i(r,l,h,m,M){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?kl:Rp,this.isPropagationStopped=Rp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=ai(Ls),To=_({},Ls,{view:0,detail:0}),Yx=ai(To),ih,ah,Ao,Xl=_({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ao&&(Ao&&e.type==="mousemove"?(ih=e.screenX-Ao.screenX,ah=e.screenY-Ao.screenY):ah=ih=0,Ao=e),ih)},movementY:function(e){return"movementY"in e?e.movementY:ah}}),Cp=ai(Xl),Zx=_({},Xl,{dataTransfer:0}),Kx=ai(Zx),jx=_({},To,{relatedTarget:0}),sh=ai(jx),Qx=_({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=ai(Qx),Jx=_({},Ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ty=ai(Jx),ey=_({},Ls,{data:0}),Dp=ai(ey),ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=ay[e])?!!i[e]:!1}function rh(){return sy}var ry=_({},To,{key:function(e){if(e.key){var i=ny[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rh,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=ai(ry),ly=_({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=ai(ly),cy=_({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rh}),uy=ai(cy),hy=_({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=ai(hy),dy=_({},Xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),py=ai(dy),my=_({},Ls,{newState:0,oldState:0}),gy=ai(my),vy=[9,13,27,32],oh=xa&&"CompositionEvent"in window,wo=null;xa&&"documentMode"in document&&(wo=document.documentMode);var _y=xa&&"TextEvent"in window&&!wo,Up=xa&&(!oh||wo&&8<wo&&11>=wo),Lp=" ",Pp=!1;function Op(e,i){switch(e){case"keyup":return vy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function xy(e,i){switch(e){case"compositionend":return Ip(i);case"keypress":return i.which!==32?null:(Pp=!0,Lp);case"textInput":return e=i.data,e===Lp&&Pp?null:e;default:return null}}function yy(e,i){if(fr)return e==="compositionend"||!oh&&Op(e,i)?(e=wp(),Gl=nh=ja=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Up&&i.locale!=="ko"?null:i.data;default:return null}}var My={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!My[e.type]:i==="textarea"}function Bp(e,i,r,l){ur?hr?hr.push(l):hr=[l]:ur=l,i=Pc(i,"onChange"),0<i.length&&(r=new Wl("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Ro=null,Co=null;function Sy(e){yv(e,0)}function ql(e){var i=Ns(e);if(un(i))return e}function zp(e,i){if(e==="change")return i}var Hp=!1;if(xa){var lh;if(xa){var ch="oninput"in document;if(!ch){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),ch=typeof Gp.oninput=="function"}lh=ch}else lh=!1;Hp=lh&&(!document.documentMode||9<document.documentMode)}function Vp(){Ro&&(Ro.detachEvent("onpropertychange",kp),Co=Ro=null)}function kp(e){if(e.propertyName==="value"&&ql(Co)){var i=[];Bp(i,Co,e,Ju(e)),Ap(Sy,i)}}function by(e,i,r){e==="focusin"?(Vp(),Ro=i,Co=r,Ro.attachEvent("onpropertychange",kp)):e==="focusout"&&Vp()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(Co)}function Ty(e,i){if(e==="click")return ql(i)}function Ay(e,i){if(e==="input"||e==="change")return ql(i)}function wy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var _i=typeof Object.is=="function"?Object.is:wy;function Do(e,i){if(_i(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!ue.call(i,h)||!_i(e[h],i[h]))return!1}return!0}function Wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xp(e,i){var r=Wp(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Wp(r)}}function qp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?qp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=en(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=en(e.document)}return i}function uh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Ry=xa&&"documentMode"in document&&11>=document.documentMode,dr=null,hh=null,No=null,fh=!1;function Zp(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;fh||dr==null||dr!==en(l)||(l=dr,"selectionStart"in l&&uh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&Do(No,l)||(No=l,l=Pc(hh,"onSelect"),0<l.length&&(i=new Wl("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=dr)))}function Ps(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var pr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},dh={},Kp={};xa&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Os(e){if(dh[e])return dh[e];if(!pr[e])return e;var i=pr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in Kp)return dh[e]=i[r];return e}var jp=Os("animationend"),Qp=Os("animationiteration"),$p=Os("animationstart"),Cy=Os("transitionrun"),Dy=Os("transitionstart"),Ny=Os("transitioncancel"),Jp=Os("transitionend"),tm=new Map,ph="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ph.push("scrollEnd");function Wi(e,i){tm.set(e,i),Y(i,[e])}var Yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ui=[],mr=0,mh=0;function Zl(){for(var e=mr,i=mh=mr=0;i<e;){var r=Ui[i];Ui[i++]=null;var l=Ui[i];Ui[i++]=null;var h=Ui[i];Ui[i++]=null;var m=Ui[i];if(Ui[i++]=null,l!==null&&h!==null){var M=l.pending;M===null?h.next=h:(h.next=M.next,M.next=h),l.pending=h}m!==0&&em(r,h,m)}}function Kl(e,i,r,l){Ui[mr++]=e,Ui[mr++]=i,Ui[mr++]=r,Ui[mr++]=l,mh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function gh(e,i,r,l){return Kl(e,i,r,l),jl(e)}function Is(e,i){return Kl(e,null,null,i),jl(e)}function em(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Ht(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function jl(e){if(50<Jo)throw Jo=0,Af=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var gr={};function Uy(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(e,i,r,l){return new Uy(e,i,r,l)}function vh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ya(e,i){var r=e.alternate;return r===null?(r=xi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function nm(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ql(e,i,r,l,h,m){var M=0;if(l=e,typeof e=="function")vh(e)&&(M=1);else if(typeof e=="string")M=FM(e,r,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=xi(31,r,i,h),e.elementType=U,e.lanes=m,e;case A:return Fs(r.children,h,m,i);case S:M=8,h|=24;break;case y:return e=xi(12,r,i,h|2),e.elementType=y,e.lanes=m,e;case F:return e=xi(13,r,i,h),e.elementType=F,e.lanes=m,e;case D:return e=xi(19,r,i,h),e.elementType=D,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:M=10;break t;case N:M=9;break t;case w:M=11;break t;case O:M=14;break t;case T:M=16,l=null;break t}M=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=xi(M,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function Fs(e,i,r,l){return e=xi(7,e,l,i),e.lanes=r,e}function _h(e,i,r){return e=xi(6,e,null,i),e.lanes=r,e}function im(e){var i=xi(18,null,null,0);return i.stateNode=e,i}function xh(e,i,r){return i=xi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var am=new WeakMap;function Li(e,i){if(typeof e=="object"&&e!==null){var r=am.get(e);return r!==void 0?r:(i={value:e,source:i,stack:$t(i)},am.set(e,i),i)}return{value:e,source:i,stack:$t(i)}}var vr=[],_r=0,$l=null,Uo=0,Pi=[],Oi=0,Qa=null,aa=1,sa="";function Ma(e,i){vr[_r++]=Uo,vr[_r++]=$l,$l=e,Uo=i}function sm(e,i,r){Pi[Oi++]=aa,Pi[Oi++]=sa,Pi[Oi++]=Qa,Qa=e;var l=aa;e=sa;var h=32-Ht(l)-1;l&=~(1<<h),r+=1;var m=32-Ht(i)+h;if(30<m){var M=h-h%5;m=(l&(1<<M)-1).toString(32),l>>=M,h-=M,aa=1<<32-Ht(i)+h|r<<h|l,sa=m+e}else aa=1<<m|r<<h|l,sa=e}function yh(e){e.return!==null&&(Ma(e,1),sm(e,1,0))}function Mh(e){for(;e===$l;)$l=vr[--_r],vr[_r]=null,Uo=vr[--_r],vr[_r]=null;for(;e===Qa;)Qa=Pi[--Oi],Pi[Oi]=null,sa=Pi[--Oi],Pi[Oi]=null,aa=Pi[--Oi],Pi[Oi]=null}function rm(e,i){Pi[Oi++]=aa,Pi[Oi++]=sa,Pi[Oi++]=Qa,aa=i.id,sa=i.overflow,Qa=e}var zn=null,sn=null,Oe=!1,$a=null,Ii=!1,Sh=Error(a(519));function Ja(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(Li(i,e)),Sh}function om(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[_n]=e,i[Bn]=l,r){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(r=0;r<el.length;r++)De(el[r],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":De("invalid",i),qn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":De("invalid",i);break;case"textarea":De("invalid",i),Vi(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||Ev(i.textContent,r)?(l.popover!=null&&(De("beforetoggle",i),De("toggle",i)),l.onScroll!=null&&De("scroll",i),l.onScrollEnd!=null&&De("scrollend",i),l.onClick!=null&&(i.onclick=_a),i=!0):i=!1,i||Ja(e,!0)}function lm(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:zn=zn.return}}function xr(e){if(e!==zn)return!1;if(!Oe)return lm(e),Oe=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Gf(e.type,e.memoizedProps)),r=!r),r&&sn&&Ja(e),lm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));sn=Lv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));sn=Lv(e)}else i===27?(i=sn,ds(e.type)?(e=qf,qf=null,sn=e):sn=i):sn=zn?Bi(e.stateNode.nextSibling):null;return!0}function Bs(){sn=zn=null,Oe=!1}function bh(){var e=$a;return e!==null&&(li===null?li=e:li.push.apply(li,e),$a=null),e}function Lo(e){$a===null?$a=[e]:$a.push(e)}var Eh=P(null),zs=null,Sa=null;function ts(e,i,r){St(Eh,i._currentValue),i._currentValue=r}function ba(e){e._currentValue=Eh.current,K(Eh)}function Th(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function Ah(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var M=h.child;m=m.firstContext;t:for(;m!==null;){var C=m;m=h;for(var H=0;H<i.length;H++)if(C.context===i[H]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),Th(m.return,r,e),l||(M=null);break t}m=C.next}}else if(h.tag===18){if(M=h.return,M===null)throw Error(a(341));M.lanes|=r,m=M.alternate,m!==null&&(m.lanes|=r),Th(M,r,e),M=null}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===e){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}}function yr(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var M=h.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var C=h.type;_i(h.pendingProps.value,M.value)||(e!==null?e.push(C):e=[C])}}else if(h===xt.current){if(M=h.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(rl):e=[rl])}h=h.return}e!==null&&Ah(i,e,r,l),i.flags|=262144}function Jl(e){for(e=e.firstContext;e!==null;){if(!_i(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hs(e){zs=e,Sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return cm(zs,e)}function tc(e,i){return zs===null&&Hs(e),cm(e,i)}function cm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Sa===null){if(e===null)throw Error(a(308));Sa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Sa=Sa.next=i;return r}var Ly=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},Py=s.unstable_scheduleCallback,Oy=s.unstable_NormalPriority,yn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wh(){return{controller:new Ly,data:new Map,refCount:0}}function Po(e){e.refCount--,e.refCount===0&&Py(Oy,function(){e.controller.abort()})}var Oo=null,Rh=0,Mr=0,Sr=null;function Iy(e,i){if(Oo===null){var r=Oo=[];Rh=0,Mr=Uf(),Sr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Rh++,i.then(um,um),i}function um(){if(--Rh===0&&Oo!==null){Sr!==null&&(Sr.status="fulfilled");var e=Oo;Oo=null,Mr=0,Sr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Fy(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var hm=B.S;B.S=function(e,i){Zg=Te(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Iy(e,i),hm!==null&&hm(e,i)};var Gs=P(null);function Ch(){var e=Gs.current;return e!==null?e:nn.pooledCache}function ec(e,i){i===null?St(Gs,Gs.current):St(Gs,i.pool)}function fm(){var e=Ch();return e===null?null:{parent:yn._currentValue,pool:e}}var br=Error(a(460)),Dh=Error(a(474)),nc=Error(a(542)),ic={then:function(){}};function dm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pm(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(_a,_a),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,gm(e),e;default:if(typeof i.status=="string")i.then(_a,_a);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,gm(e),e}throw ks=i,br}}function Vs(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ks=r,br):r}}var ks=null;function mm(){if(ks===null)throw Error(a(459));var e=ks;return ks=null,e}function gm(e){if(e===br||e===nc)throw Error(a(483))}var Er=null,Io=0;function ac(e){var i=Io;return Io+=1,Er===null&&(Er=[]),pm(Er,e,i)}function Fo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function sc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function vm(e){function i(J,V){if(e){var et=J.deletions;et===null?(J.deletions=[V],J.flags|=16):et.push(V)}}function r(J,V){if(!e)return null;for(;V!==null;)i(J,V),V=V.sibling;return null}function l(J){for(var V=new Map;J!==null;)J.key!==null?V.set(J.key,J):V.set(J.index,J),J=J.sibling;return V}function h(J,V){return J=ya(J,V),J.index=0,J.sibling=null,J}function m(J,V,et){return J.index=et,e?(et=J.alternate,et!==null?(et=et.index,et<V?(J.flags|=67108866,V):et):(J.flags|=67108866,V)):(J.flags|=1048576,V)}function M(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function C(J,V,et,_t){return V===null||V.tag!==6?(V=_h(et,J.mode,_t),V.return=J,V):(V=h(V,et),V.return=J,V)}function H(J,V,et,_t){var ie=et.type;return ie===A?gt(J,V,et.props.children,_t,et.key):V!==null&&(V.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===T&&Vs(ie)===V.type)?(V=h(V,et.props),Fo(V,et),V.return=J,V):(V=Ql(et.type,et.key,et.props,null,J.mode,_t),Fo(V,et),V.return=J,V)}function nt(J,V,et,_t){return V===null||V.tag!==4||V.stateNode.containerInfo!==et.containerInfo||V.stateNode.implementation!==et.implementation?(V=xh(et,J.mode,_t),V.return=J,V):(V=h(V,et.children||[]),V.return=J,V)}function gt(J,V,et,_t,ie){return V===null||V.tag!==7?(V=Fs(et,J.mode,_t,ie),V.return=J,V):(V=h(V,et),V.return=J,V)}function Mt(J,V,et){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=_h(""+V,J.mode,et),V.return=J,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return et=Ql(V.type,V.key,V.props,null,J.mode,et),Fo(et,V),et.return=J,et;case b:return V=xh(V,J.mode,et),V.return=J,V;case T:return V=Vs(V),Mt(J,V,et)}if(j(V)||q(V))return V=Fs(V,J.mode,et,null),V.return=J,V;if(typeof V.then=="function")return Mt(J,ac(V),et);if(V.$$typeof===L)return Mt(J,tc(J,V),et);sc(J,V)}return null}function ot(J,V,et,_t){var ie=V!==null?V.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ie!==null?null:C(J,V,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case x:return et.key===ie?H(J,V,et,_t):null;case b:return et.key===ie?nt(J,V,et,_t):null;case T:return et=Vs(et),ot(J,V,et,_t)}if(j(et)||q(et))return ie!==null?null:gt(J,V,et,_t,null);if(typeof et.then=="function")return ot(J,V,ac(et),_t);if(et.$$typeof===L)return ot(J,V,tc(J,et),_t);sc(J,et)}return null}function lt(J,V,et,_t,ie){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return J=J.get(et)||null,C(V,J,""+_t,ie);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case x:return J=J.get(_t.key===null?et:_t.key)||null,H(V,J,_t,ie);case b:return J=J.get(_t.key===null?et:_t.key)||null,nt(V,J,_t,ie);case T:return _t=Vs(_t),lt(J,V,et,_t,ie)}if(j(_t)||q(_t))return J=J.get(et)||null,gt(V,J,_t,ie,null);if(typeof _t.then=="function")return lt(J,V,et,ac(_t),ie);if(_t.$$typeof===L)return lt(J,V,et,tc(V,_t),ie);sc(V,_t)}return null}function qt(J,V,et,_t){for(var ie=null,Fe=null,Zt=V,Me=V=0,Ue=null;Zt!==null&&Me<et.length;Me++){Zt.index>Me?(Ue=Zt,Zt=null):Ue=Zt.sibling;var Be=ot(J,Zt,et[Me],_t);if(Be===null){Zt===null&&(Zt=Ue);break}e&&Zt&&Be.alternate===null&&i(J,Zt),V=m(Be,V,Me),Fe===null?ie=Be:Fe.sibling=Be,Fe=Be,Zt=Ue}if(Me===et.length)return r(J,Zt),Oe&&Ma(J,Me),ie;if(Zt===null){for(;Me<et.length;Me++)Zt=Mt(J,et[Me],_t),Zt!==null&&(V=m(Zt,V,Me),Fe===null?ie=Zt:Fe.sibling=Zt,Fe=Zt);return Oe&&Ma(J,Me),ie}for(Zt=l(Zt);Me<et.length;Me++)Ue=lt(Zt,J,Me,et[Me],_t),Ue!==null&&(e&&Ue.alternate!==null&&Zt.delete(Ue.key===null?Me:Ue.key),V=m(Ue,V,Me),Fe===null?ie=Ue:Fe.sibling=Ue,Fe=Ue);return e&&Zt.forEach(function(_s){return i(J,_s)}),Oe&&Ma(J,Me),ie}function re(J,V,et,_t){if(et==null)throw Error(a(151));for(var ie=null,Fe=null,Zt=V,Me=V=0,Ue=null,Be=et.next();Zt!==null&&!Be.done;Me++,Be=et.next()){Zt.index>Me?(Ue=Zt,Zt=null):Ue=Zt.sibling;var _s=ot(J,Zt,Be.value,_t);if(_s===null){Zt===null&&(Zt=Ue);break}e&&Zt&&_s.alternate===null&&i(J,Zt),V=m(_s,V,Me),Fe===null?ie=_s:Fe.sibling=_s,Fe=_s,Zt=Ue}if(Be.done)return r(J,Zt),Oe&&Ma(J,Me),ie;if(Zt===null){for(;!Be.done;Me++,Be=et.next())Be=Mt(J,Be.value,_t),Be!==null&&(V=m(Be,V,Me),Fe===null?ie=Be:Fe.sibling=Be,Fe=Be);return Oe&&Ma(J,Me),ie}for(Zt=l(Zt);!Be.done;Me++,Be=et.next())Be=lt(Zt,J,Me,Be.value,_t),Be!==null&&(e&&Be.alternate!==null&&Zt.delete(Be.key===null?Me:Be.key),V=m(Be,V,Me),Fe===null?ie=Be:Fe.sibling=Be,Fe=Be);return e&&Zt.forEach(function(ZM){return i(J,ZM)}),Oe&&Ma(J,Me),ie}function Je(J,V,et,_t){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case x:t:{for(var ie=et.key;V!==null;){if(V.key===ie){if(ie=et.type,ie===A){if(V.tag===7){r(J,V.sibling),_t=h(V,et.props.children),_t.return=J,J=_t;break t}}else if(V.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===T&&Vs(ie)===V.type){r(J,V.sibling),_t=h(V,et.props),Fo(_t,et),_t.return=J,J=_t;break t}r(J,V);break}else i(J,V);V=V.sibling}et.type===A?(_t=Fs(et.props.children,J.mode,_t,et.key),_t.return=J,J=_t):(_t=Ql(et.type,et.key,et.props,null,J.mode,_t),Fo(_t,et),_t.return=J,J=_t)}return M(J);case b:t:{for(ie=et.key;V!==null;){if(V.key===ie)if(V.tag===4&&V.stateNode.containerInfo===et.containerInfo&&V.stateNode.implementation===et.implementation){r(J,V.sibling),_t=h(V,et.children||[]),_t.return=J,J=_t;break t}else{r(J,V);break}else i(J,V);V=V.sibling}_t=xh(et,J.mode,_t),_t.return=J,J=_t}return M(J);case T:return et=Vs(et),Je(J,V,et,_t)}if(j(et))return qt(J,V,et,_t);if(q(et)){if(ie=q(et),typeof ie!="function")throw Error(a(150));return et=ie.call(et),re(J,V,et,_t)}if(typeof et.then=="function")return Je(J,V,ac(et),_t);if(et.$$typeof===L)return Je(J,V,tc(J,et),_t);sc(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,V!==null&&V.tag===6?(r(J,V.sibling),_t=h(V,et),_t.return=J,J=_t):(r(J,V),_t=_h(et,J.mode,_t),_t.return=J,J=_t),M(J)):r(J,V)}return function(J,V,et,_t){try{Io=0;var ie=Je(J,V,et,_t);return Er=null,ie}catch(Zt){if(Zt===br||Zt===nc)throw Zt;var Fe=xi(29,Zt,null,J.mode);return Fe.lanes=_t,Fe.return=J,Fe}}}var Ws=vm(!0),_m=vm(!1),es=!1;function Nh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ns(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function is(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(He&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=jl(e),em(e,null,r),i}return Kl(e,l,i,r),jl(e)}function Bo(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,pi(e,r)}}function Lh(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=M:m=m.next=M,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Ph=!1;function zo(){if(Ph){var e=Sr;if(e!==null)throw e}}function Ho(e,i,r,l){Ph=!1;var h=e.updateQueue;es=!1;var m=h.firstBaseUpdate,M=h.lastBaseUpdate,C=h.shared.pending;if(C!==null){h.shared.pending=null;var H=C,nt=H.next;H.next=null,M===null?m=nt:M.next=nt,M=H;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,C=gt.lastBaseUpdate,C!==M&&(C===null?gt.firstBaseUpdate=nt:C.next=nt,gt.lastBaseUpdate=H))}if(m!==null){var Mt=h.baseState;M=0,gt=nt=H=null,C=m;do{var ot=C.lane&-536870913,lt=ot!==C.lane;if(lt?(Ne&ot)===ot:(l&ot)===ot){ot!==0&&ot===Mr&&(Ph=!0),gt!==null&&(gt=gt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var qt=e,re=C;ot=i;var Je=r;switch(re.tag){case 1:if(qt=re.payload,typeof qt=="function"){Mt=qt.call(Je,Mt,ot);break t}Mt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=re.payload,ot=typeof qt=="function"?qt.call(Je,Mt,ot):qt,ot==null)break t;Mt=_({},Mt,ot);break t;case 2:es=!0}}ot=C.callback,ot!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=h.callbacks,lt===null?h.callbacks=[ot]:lt.push(ot))}else lt={lane:ot,tag:C.tag,payload:C.payload,callback:C.callback,next:null},gt===null?(nt=gt=lt,H=Mt):gt=gt.next=lt,M|=ot;if(C=C.next,C===null){if(C=h.shared.pending,C===null)break;lt=C,C=lt.next,lt.next=null,h.lastBaseUpdate=lt,h.shared.pending=null}}while(!0);gt===null&&(H=Mt),h.baseState=H,h.firstBaseUpdate=nt,h.lastBaseUpdate=gt,m===null&&(h.shared.lanes=0),ls|=M,e.lanes=M,e.memoizedState=Mt}}function xm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function ym(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)xm(r[e],i)}var Tr=P(null),rc=P(0);function Mm(e,i){e=Ua,St(rc,e),St(Tr,i),Ua=e|i.baseLanes}function Oh(){St(rc,Ua),St(Tr,Tr.current)}function Ih(){Ua=rc.current,K(Tr),K(rc)}var yi=P(null),Fi=null;function as(e){var i=e.alternate;St(gn,gn.current&1),St(yi,e),Fi===null&&(i===null||Tr.current!==null||i.memoizedState!==null)&&(Fi=e)}function Fh(e){St(gn,gn.current),St(yi,e),Fi===null&&(Fi=e)}function Sm(e){e.tag===22?(St(gn,gn.current),St(yi,e),Fi===null&&(Fi=e)):ss()}function ss(){St(gn,gn.current),St(yi,yi.current)}function Mi(e){K(yi),Fi===e&&(Fi=null),K(gn)}var gn=P(0);function oc(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Wf(r)||Xf(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ea=0,xe=null,Qe=null,Mn=null,lc=!1,Ar=!1,Xs=!1,cc=0,Go=0,wr=null,By=0;function pn(){throw Error(a(321))}function Bh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!_i(e[r],i[r]))return!1;return!0}function zh(e,i,r,l,h,m){return Ea=m,xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?sg:tf,Xs=!1,m=r(l,h),Xs=!1,Ar&&(m=Em(i,r,l,h)),bm(e),m}function bm(e){B.H=Wo;var i=Qe!==null&&Qe.next!==null;if(Ea=0,Mn=Qe=xe=null,lc=!1,Go=0,wr=null,i)throw Error(a(300));e===null||Sn||(e=e.dependencies,e!==null&&Jl(e)&&(Sn=!0))}function Em(e,i,r,l){xe=e;var h=0;do{if(Ar&&(wr=null),Go=0,Ar=!1,25<=h)throw Error(a(301));if(h+=1,Mn=Qe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=rg,m=i(r,l)}while(Ar);return m}function zy(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Vo(i):i,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(xe.flags|=1024),i}function Hh(){var e=cc!==0;return cc=0,e}function Gh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Vh(e){if(lc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}lc=!1}Ea=0,Mn=Qe=xe=null,Ar=!1,Go=cc=0,wr=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?xe.memoizedState=Mn=e:Mn=Mn.next=e,Mn}function vn(){if(Qe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var i=Mn===null?xe.memoizedState:Mn.next;if(i!==null)Mn=i,Qe=e;else{if(e===null)throw xe.alternate===null?Error(a(467)):Error(a(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Mn===null?xe.memoizedState=Mn=e:Mn=Mn.next=e}return Mn}function uc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(e){var i=Go;return Go+=1,wr===null&&(wr=[]),e=pm(wr,e,i),i=xe,(Mn===null?i.memoizedState:Mn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?sg:tf),e}function hc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vo(e);if(e.$$typeof===L)return Hn(e)}throw Error(a(438,String(e)))}function kh(e){var i=null,r=xe.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=uc(),xe.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=k;return i.index++,r}function Ta(e,i){return typeof i=="function"?i(e):i}function fc(e){var i=vn();return Wh(i,Qe,e)}function Wh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var M=h.next;h.next=m.next,m.next=M}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var C=M=null,H=null,nt=i,gt=!1;do{var Mt=nt.lane&-536870913;if(Mt!==nt.lane?(Ne&Mt)===Mt:(Ea&Mt)===Mt){var ot=nt.revertLane;if(ot===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),Mt===Mr&&(gt=!0);else if((Ea&ot)===ot){nt=nt.next,ot===Mr&&(gt=!0);continue}else Mt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(C=H=Mt,M=m):H=H.next=Mt,xe.lanes|=ot,ls|=ot;Mt=nt.action,Xs&&r(m,Mt),m=nt.hasEagerState?nt.eagerState:r(m,Mt)}else ot={lane:Mt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(C=H=ot,M=m):H=H.next=ot,xe.lanes|=Mt,ls|=Mt;nt=nt.next}while(nt!==null&&nt!==i);if(H===null?M=m:H.next=C,!_i(m,e.memoizedState)&&(Sn=!0,gt&&(r=Sr,r!==null)))throw r;e.memoizedState=m,e.baseState=M,e.baseQueue=H,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xh(e){var i=vn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var M=h=h.next;do m=e(m,M.action),M=M.next;while(M!==h);_i(m,i.memoizedState)||(Sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function Tm(e,i,r){var l=xe,h=vn(),m=Oe;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var M=!_i((Qe||h).memoizedState,r);if(M&&(h.memoizedState=r,Sn=!0),h=h.queue,Zh(Rm.bind(null,l,h,e),[e]),h.getSnapshot!==i||M||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,Rr(9,{destroy:void 0},wm.bind(null,l,h,r,i),null),nn===null)throw Error(a(349));m||(Ea&127)!==0||Am(l,i,r)}return r}function Am(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=xe.updateQueue,i===null?(i=uc(),xe.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function wm(e,i,r,l){i.value=r,i.getSnapshot=l,Cm(i)&&Dm(e)}function Rm(e,i,r){return r(function(){Cm(i)&&Dm(e)})}function Cm(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!_i(e,r)}catch{return!0}}function Dm(e){var i=Is(e,2);i!==null&&ci(i,e,2)}function qh(e){var i=$n();if(typeof e=="function"){var r=e;if(e=r(),Xs){Dt(!0);try{r()}finally{Dt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},i}function Nm(e,i,r,l){return e.baseState=r,Wh(e,Qe,typeof l=="function"?l:Ta)}function Hy(e,i,r,l,h){if(mc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};B.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,Um(i,m)):(m.next=r.next,i.pending=r.next=m)}}function Um(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=B.T,M={};B.T=M;try{var C=r(h,l),H=B.S;H!==null&&H(M,C),Lm(e,i,C)}catch(nt){Yh(e,i,nt)}finally{m!==null&&M.types!==null&&(m.types=M.types),B.T=m}}else try{m=r(h,l),Lm(e,i,m)}catch(nt){Yh(e,i,nt)}}function Lm(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Pm(e,i,l)},function(l){return Yh(e,i,l)}):Pm(e,i,r)}function Pm(e,i,r){i.status="fulfilled",i.value=r,Om(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,Um(e,r)))}function Yh(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,Om(i),i=i.next;while(i!==l)}e.action=null}function Om(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Im(e,i){return i}function Fm(e,i){if(Oe){var r=nn.formState;if(r!==null){t:{var l=xe;if(Oe){if(sn){e:{for(var h=sn,m=Ii;h.nodeType!==8;){if(!m){h=null;break e}if(h=Bi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){sn=Bi(h.nextSibling),l=h.data==="F!";break t}}Ja(l)}l=!1}l&&(i=r[0])}}return r=$n(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:i},r.queue=l,r=ng.bind(null,xe,l),l.dispatch=r,l=qh(!1),m=Jh.bind(null,xe,!1,l.queue),l=$n(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=Hy.bind(null,xe,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function Bm(e){var i=vn();return zm(i,Qe,e)}function zm(e,i,r){if(i=Wh(e,i,Im)[0],e=fc(Ta)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Vo(i)}catch(M){throw M===br?nc:M}else l=i;i=vn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(xe.flags|=2048,Rr(9,{destroy:void 0},Gy.bind(null,h,r),null)),[l,m,e]}function Gy(e,i){e.action=i}function Hm(e){var i=vn(),r=Qe;if(r!==null)return zm(i,r,e);vn(),i=i.memoizedState,r=vn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function Rr(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=xe.updateQueue,i===null&&(i=uc(),xe.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function Gm(){return vn().memoizedState}function dc(e,i,r,l){var h=$n();xe.flags|=e,h.memoizedState=Rr(1|i,{destroy:void 0},r,l===void 0?null:l)}function pc(e,i,r,l){var h=vn();l=l===void 0?null:l;var m=h.memoizedState.inst;Qe!==null&&l!==null&&Bh(l,Qe.memoizedState.deps)?h.memoizedState=Rr(i,m,r,l):(xe.flags|=e,h.memoizedState=Rr(1|i,m,r,l))}function Vm(e,i){dc(8390656,8,e,i)}function Zh(e,i){pc(2048,8,e,i)}function Vy(e){xe.flags|=4;var i=xe.updateQueue;if(i===null)i=uc(),xe.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function km(e){var i=vn().memoizedState;return Vy({ref:i,nextImpl:e}),function(){if((He&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Wm(e,i){return pc(4,2,e,i)}function Xm(e,i){return pc(4,4,e,i)}function qm(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Ym(e,i,r){r=r!=null?r.concat([e]):null,pc(4,4,qm.bind(null,i,e),r)}function Kh(){}function Zm(e,i){var r=vn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Bh(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function Km(e,i){var r=vn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Bh(i,l[1]))return l[0];if(l=e(),Xs){Dt(!0);try{e()}finally{Dt(!1)}}return r.memoizedState=[l,i],l}function jh(e,i,r){return r===void 0||(Ea&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=jg(),xe.lanes|=e,ls|=e,r)}function jm(e,i,r,l){return _i(r,i)?r:Tr.current!==null?(e=jh(e,r,l),_i(e,i)||(Sn=!0),e):(Ea&42)===0||(Ea&1073741824)!==0&&(Ne&261930)===0?(Sn=!0,e.memoizedState=r):(e=jg(),xe.lanes|=e,ls|=e,i)}function Qm(e,i,r,l,h){var m=z.p;z.p=m!==0&&8>m?m:8;var M=B.T,C={};B.T=C,Jh(e,!1,i,r);try{var H=h(),nt=B.S;if(nt!==null&&nt(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var gt=Fy(H,l);ko(e,i,gt,Ei(e))}else ko(e,i,l,Ei(e))}catch(Mt){ko(e,i,{then:function(){},status:"rejected",reason:Mt},Ei())}finally{z.p=m,M!==null&&C.types!==null&&(M.types=C.types),B.T=M}}function ky(){}function Qh(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=$m(e).queue;Qm(e,h,i,Q,r===null?ky:function(){return Jm(e),r(l)})}function $m(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:Q},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Jm(e){var i=$m(e);i.next===null&&(i=e.alternate.memoizedState),ko(e,i.next.queue,{},Ei())}function $h(){return Hn(rl)}function tg(){return vn().memoizedState}function eg(){return vn().memoizedState}function Wy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Ei();e=ns(r);var l=is(i,e,r);l!==null&&(ci(l,i,r),Bo(l,i,r)),i={cache:wh()},e.payload=i;return}i=i.return}}function Xy(e,i,r){var l=Ei();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},mc(e)?ig(i,r):(r=gh(e,i,r,l),r!==null&&(ci(r,e,l),ag(r,i,l)))}function ng(e,i,r){var l=Ei();ko(e,i,r,l)}function ko(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(mc(e))ig(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,C=m(M,r);if(h.hasEagerState=!0,h.eagerState=C,_i(C,M))return Kl(e,i,h,0),nn===null&&Zl(),!1}catch{}if(r=gh(e,i,h,l),r!==null)return ci(r,e,l),ag(r,i,l),!0}return!1}function Jh(e,i,r,l){if(l={lane:2,revertLane:Uf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},mc(e)){if(i)throw Error(a(479))}else i=gh(e,r,l,2),i!==null&&ci(i,e,2)}function mc(e){var i=e.alternate;return e===xe||i!==null&&i===xe}function ig(e,i){Ar=lc=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function ag(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,pi(e,r)}}var Wo={readContext:Hn,use:hc,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};Wo.useEffectEvent=pn;var sg={readContext:Hn,use:hc,useCallback:function(e,i){return $n().memoizedState=[e,i===void 0?null:i],e},useContext:Hn,useEffect:Vm,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,dc(4194308,4,qm.bind(null,i,e),r)},useLayoutEffect:function(e,i){return dc(4194308,4,e,i)},useInsertionEffect:function(e,i){dc(4,2,e,i)},useMemo:function(e,i){var r=$n();i=i===void 0?null:i;var l=e();if(Xs){Dt(!0);try{e()}finally{Dt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=$n();if(r!==void 0){var h=r(i);if(Xs){Dt(!0);try{r(i)}finally{Dt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Xy.bind(null,xe,e),[l.memoizedState,e]},useRef:function(e){var i=$n();return e={current:e},i.memoizedState=e},useState:function(e){e=qh(e);var i=e.queue,r=ng.bind(null,xe,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Kh,useDeferredValue:function(e,i){var r=$n();return jh(r,e,i)},useTransition:function(){var e=qh(!1);return e=Qm.bind(null,xe,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=xe,h=$n();if(Oe){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),nn===null)throw Error(a(349));(Ne&127)!==0||Am(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,Vm(Rm.bind(null,l,m,e),[e]),l.flags|=2048,Rr(9,{destroy:void 0},wm.bind(null,l,m,r,i),null),r},useId:function(){var e=$n(),i=nn.identifierPrefix;if(Oe){var r=sa,l=aa;r=(l&~(1<<32-Ht(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=cc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=By++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:$h,useFormState:Fm,useActionState:Fm,useOptimistic:function(e){var i=$n();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Jh.bind(null,xe,!0,r),r.dispatch=i,[e,i]},useMemoCache:kh,useCacheRefresh:function(){return $n().memoizedState=Wy.bind(null,xe)},useEffectEvent:function(e){var i=$n(),r={impl:e};return i.memoizedState=r,function(){if((He&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},tf={readContext:Hn,use:hc,useCallback:Zm,useContext:Hn,useEffect:Zh,useImperativeHandle:Ym,useInsertionEffect:Wm,useLayoutEffect:Xm,useMemo:Km,useReducer:fc,useRef:Gm,useState:function(){return fc(Ta)},useDebugValue:Kh,useDeferredValue:function(e,i){var r=vn();return jm(r,Qe.memoizedState,e,i)},useTransition:function(){var e=fc(Ta)[0],i=vn().memoizedState;return[typeof e=="boolean"?e:Vo(e),i]},useSyncExternalStore:Tm,useId:tg,useHostTransitionStatus:$h,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,i){var r=vn();return Nm(r,Qe,e,i)},useMemoCache:kh,useCacheRefresh:eg};tf.useEffectEvent=km;var rg={readContext:Hn,use:hc,useCallback:Zm,useContext:Hn,useEffect:Zh,useImperativeHandle:Ym,useInsertionEffect:Wm,useLayoutEffect:Xm,useMemo:Km,useReducer:Xh,useRef:Gm,useState:function(){return Xh(Ta)},useDebugValue:Kh,useDeferredValue:function(e,i){var r=vn();return Qe===null?jh(r,e,i):jm(r,Qe.memoizedState,e,i)},useTransition:function(){var e=Xh(Ta)[0],i=vn().memoizedState;return[typeof e=="boolean"?e:Vo(e),i]},useSyncExternalStore:Tm,useId:tg,useHostTransitionStatus:$h,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,i){var r=vn();return Qe!==null?Nm(r,Qe,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:kh,useCacheRefresh:eg};rg.useEffectEvent=km;function ef(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:_({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var nf={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=Ei(),h=ns(l);h.payload=i,r!=null&&(h.callback=r),i=is(e,h,l),i!==null&&(ci(i,e,l),Bo(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=Ei(),h=ns(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=is(e,h,l),i!==null&&(ci(i,e,l),Bo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Ei(),l=ns(r);l.tag=2,i!=null&&(l.callback=i),i=is(e,l,r),i!==null&&(ci(i,e,r),Bo(i,e,r))}};function og(e,i,r,l,h,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!Do(r,l)||!Do(h,m):!0}function lg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&nf.enqueueReplaceState(i,i.state,null)}function qs(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=_({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function cg(e){Yl(e)}function ug(e){console.error(e)}function hg(e){Yl(e)}function gc(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function fg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function af(e,i,r){return r=ns(r),r.tag=3,r.payload={element:null},r.callback=function(){gc(e,i)},r}function dg(e){return e=ns(e),e.tag=3,e}function pg(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){fg(i,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){fg(i,r,l),typeof h!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function qy(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&yr(i,r,h,!0),r=yi.current,r!==null){switch(r.tag){case 31:case 13:return Fi===null?Rc():r.alternate===null&&mn===0&&(mn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===ic?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Cf(e,l,h)),!1;case 22:return r.flags|=65536,l===ic?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Cf(e,l,h)),!1}throw Error(a(435,r.tag))}return Cf(e,l,h),Rc(),!1}if(Oe)return i=yi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Sh&&(e=Error(a(422),{cause:l}),Lo(Li(e,r)))):(l!==Sh&&(i=Error(a(423),{cause:l}),Lo(Li(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Li(l,r),h=af(e.stateNode,l,h),Lh(e,h),mn!==4&&(mn=2)),!1;var m=Error(a(520),{cause:l});if(m=Li(m,r),$o===null?$o=[m]:$o.push(m),mn!==4&&(mn=2),i===null)return!0;l=Li(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=af(r.stateNode,l,e),Lh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(cs===null||!cs.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=dg(h),pg(h,e,r,l),Lh(r,h),!1}r=r.return}while(r!==null);return!1}var sf=Error(a(461)),Sn=!1;function Gn(e,i,r,l){i.child=e===null?_m(i,null,r,l):Ws(i,e.child,r,l)}function mg(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var M={};for(var C in l)C!=="ref"&&(M[C]=l[C])}else M=l;return Hs(i),l=zh(e,i,r,M,m,h),C=Hh(),e!==null&&!Sn?(Gh(e,i,h),Aa(e,i,h)):(Oe&&C&&yh(i),i.flags|=1,Gn(e,i,l,h),i.child)}function gg(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!vh(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,vg(e,i,m,l,h)):(e=Ql(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!df(e,h)){var M=m.memoizedProps;if(r=r.compare,r=r!==null?r:Do,r(M,l)&&e.ref===i.ref)return Aa(e,i,h)}return i.flags|=1,e=ya(m,l),e.ref=i.ref,e.return=i,i.child=e}function vg(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if(Do(m,l)&&e.ref===i.ref)if(Sn=!1,i.pendingProps=l=m,df(e,h))(e.flags&131072)!==0&&(Sn=!0);else return i.lanes=e.lanes,Aa(e,i,h)}return rf(e,i,r,l,h)}function _g(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return xg(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ec(i,m!==null?m.cachePool:null),m!==null?Mm(i,m):Oh(),Sm(i);else return l=i.lanes=536870912,xg(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(ec(i,m.cachePool),Mm(i,m),ss(),i.memoizedState=null):(e!==null&&ec(i,null),Oh(),ss());return Gn(e,i,h,r),i.child}function Xo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function xg(e,i,r,l,h){var m=Ch();return m=m===null?null:{parent:yn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&ec(i,null),Oh(),Sm(i),e!==null&&yr(e,i,l,!0),i.childLanes=h,null}function vc(e,i){return i=xc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function yg(e,i,r){return Ws(i,e.child,null,r),e=vc(i,i.pendingProps),e.flags|=2,Mi(i),i.memoizedState=null,e}function Yy(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Oe){if(l.mode==="hidden")return e=vc(i,l),i.lanes=536870912,Xo(null,e);if(Fh(i),(e=sn)?(e=Uv(e,Ii),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},r=im(e),r.return=i,i.child=r,zn=i,sn=null)):e=null,e===null)throw Ja(i);return i.lanes=536870912,null}return vc(i,l)}var m=e.memoizedState;if(m!==null){var M=m.dehydrated;if(Fh(i),h)if(i.flags&256)i.flags&=-257,i=yg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Sn||yr(e,i,r,!1),h=(r&e.childLanes)!==0,Sn||h){if(l=nn,l!==null&&(M=mi(l,r),M!==0&&M!==m.retryLane))throw m.retryLane=M,Is(e,M),ci(l,e,M),sf;Rc(),i=yg(e,i,r)}else e=m.treeContext,sn=Bi(M.nextSibling),zn=i,Oe=!0,$a=null,Ii=!1,e!==null&&rm(i,e),i=vc(i,l),i.flags|=4096;return i}return e=ya(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function _c(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function rf(e,i,r,l,h){return Hs(i),r=zh(e,i,r,l,void 0,h),l=Hh(),e!==null&&!Sn?(Gh(e,i,h),Aa(e,i,h)):(Oe&&l&&yh(i),i.flags|=1,Gn(e,i,r,h),i.child)}function Mg(e,i,r,l,h,m){return Hs(i),i.updateQueue=null,r=Em(i,l,r,h),bm(e),l=Hh(),e!==null&&!Sn?(Gh(e,i,m),Aa(e,i,m)):(Oe&&l&&yh(i),i.flags|=1,Gn(e,i,r,m),i.child)}function Sg(e,i,r,l,h){if(Hs(i),i.stateNode===null){var m=gr,M=r.contextType;typeof M=="object"&&M!==null&&(m=Hn(M)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=nf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Nh(i),M=r.contextType,m.context=typeof M=="object"&&M!==null?Hn(M):gr,m.state=i.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(ef(i,r,M,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&nf.enqueueReplaceState(m,m.state,null),Ho(i,l,m,h),zo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var C=i.memoizedProps,H=qs(r,C);m.props=H;var nt=m.context,gt=r.contextType;M=gr,typeof gt=="object"&&gt!==null&&(M=Hn(gt));var Mt=r.getDerivedStateFromProps;gt=typeof Mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,gt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||nt!==M)&&lg(i,m,l,M),es=!1;var ot=i.memoizedState;m.state=ot,Ho(i,l,m,h),zo(),nt=i.memoizedState,C||ot!==nt||es?(typeof Mt=="function"&&(ef(i,r,Mt,l),nt=i.memoizedState),(H=es||og(i,r,H,l,ot,nt,M))?(gt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=nt),m.props=l,m.state=nt,m.context=M,l=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Uh(e,i),M=i.memoizedProps,gt=qs(r,M),m.props=gt,Mt=i.pendingProps,ot=m.context,nt=r.contextType,H=gr,typeof nt=="object"&&nt!==null&&(H=Hn(nt)),C=r.getDerivedStateFromProps,(nt=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==Mt||ot!==H)&&lg(i,m,l,H),es=!1,ot=i.memoizedState,m.state=ot,Ho(i,l,m,h),zo();var lt=i.memoizedState;M!==Mt||ot!==lt||es||e!==null&&e.dependencies!==null&&Jl(e.dependencies)?(typeof C=="function"&&(ef(i,r,C,l),lt=i.memoizedState),(gt=es||og(i,r,gt,l,ot,lt,H)||e!==null&&e.dependencies!==null&&Jl(e.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,lt,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,lt,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=lt),m.props=l,m.state=lt,m.context=H,l=gt):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,_c(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Ws(i,e.child,null,h),i.child=Ws(i,null,r,h)):Gn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=Aa(e,i,h),e}function bg(e,i,r,l){return Bs(),i.flags|=256,Gn(e,i,r,l),i.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(e){return{baseLanes:e,cachePool:fm()}}function cf(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=bi),e}function Eg(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),M&&(h=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(Oe){if(h?as(i):ss(),(e=sn)?(e=Uv(e,Ii),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},r=im(e),r.return=i,i.child=r,zn=i,sn=null)):e=null,e===null)throw Ja(i);return Xf(e)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,h?(ss(),h=i.mode,C=xc({mode:"hidden",children:C},h),l=Fs(l,h,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=lf(r),l.childLanes=cf(e,M,r),i.memoizedState=of,Xo(null,l)):(as(i),uf(i,C))}var H=e.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(m)i.flags&256?(as(i),i.flags&=-257,i=hf(e,i,r)):i.memoizedState!==null?(ss(),i.child=e.child,i.flags|=128,i=null):(ss(),C=l.fallback,h=i.mode,l=xc({mode:"visible",children:l.children},h),C=Fs(C,h,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Ws(i,e.child,null,r),l=i.child,l.memoizedState=lf(r),l.childLanes=cf(e,M,r),i.memoizedState=of,i=Xo(null,l));else if(as(i),Xf(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var nt=M.dgst;M=nt,l=Error(a(419)),l.stack="",l.digest=M,Lo({value:l,source:null,stack:null}),i=hf(e,i,r)}else if(Sn||yr(e,i,r,!1),M=(r&e.childLanes)!==0,Sn||M){if(M=nn,M!==null&&(l=mi(M,r),l!==0&&l!==H.retryLane))throw H.retryLane=l,Is(e,l),ci(M,e,l),sf;Wf(C)||Rc(),i=hf(e,i,r)}else Wf(C)?(i.flags|=192,i.child=e.child,i=null):(e=H.treeContext,sn=Bi(C.nextSibling),zn=i,Oe=!0,$a=null,Ii=!1,e!==null&&rm(i,e),i=uf(i,l.children),i.flags|=4096);return i}return h?(ss(),C=l.fallback,h=i.mode,H=e.child,nt=H.sibling,l=ya(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,nt!==null?C=ya(nt,C):(C=Fs(C,h,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,Xo(null,l),l=i.child,C=e.child.memoizedState,C===null?C=lf(r):(h=C.cachePool,h!==null?(H=yn._currentValue,h=h.parent!==H?{parent:H,pool:H}:h):h=fm(),C={baseLanes:C.baseLanes|r,cachePool:h}),l.memoizedState=C,l.childLanes=cf(e,M,r),i.memoizedState=of,Xo(e.child,l)):(as(i),r=e.child,e=r.sibling,r=ya(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=r,i.memoizedState=null,r)}function uf(e,i){return i=xc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function xc(e,i){return e=xi(22,e,null,i),e.lanes=0,e}function hf(e,i,r){return Ws(i,e.child,null,r),e=uf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Tg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Th(e.return,i,r)}function ff(e,i,r,l,h,m){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=r,M.tailMode=h,M.treeForkCount=m)}function Ag(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var M=gn.current,C=(M&2)!==0;if(C?(M=M&1|2,i.flags|=128):M&=1,St(gn,M),Gn(e,i,l,r),l=Oe?Uo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tg(e,r,i);else if(e.tag===19)Tg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&oc(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),ff(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&oc(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}ff(i,!0,r,null,m,l);break;case"together":ff(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Aa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),ls|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(yr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=ya(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=ya(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function df(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Jl(e)))}function Zy(e,i,r){switch(i.tag){case 3:yt(i,i.stateNode.containerInfo),ts(i,yn,e.memoizedState.cache),Bs();break;case 27:case 5:ae(i);break;case 4:yt(i,i.stateNode.containerInfo);break;case 10:ts(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Fh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(as(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Eg(e,i,r):(as(i),e=Aa(e,i,r),e!==null?e.sibling:null);as(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(yr(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return Ag(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),St(gn,gn.current),l)break;return null;case 22:return i.lanes=0,_g(e,i,r,i.pendingProps);case 24:ts(i,yn,e.memoizedState.cache)}return Aa(e,i,r)}function wg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)Sn=!0;else{if(!df(e,r)&&(i.flags&128)===0)return Sn=!1,Zy(e,i,r);Sn=(e.flags&131072)!==0}else Sn=!1,Oe&&(i.flags&1048576)!==0&&sm(i,Uo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Vs(i.elementType),i.type=e,typeof e=="function")vh(e)?(l=qs(e,l),i.tag=1,i=Sg(null,i,e,l,r)):(i.tag=0,i=rf(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===w){i.tag=11,i=mg(null,i,e,l,r);break t}else if(h===O){i.tag=14,i=gg(null,i,e,l,r);break t}}throw i=ft(e)||e,Error(a(306,i,""))}}return i;case 0:return rf(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=qs(l,i.pendingProps),Sg(e,i,l,h,r);case 3:t:{if(yt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,Uh(e,i),Ho(i,l,null,r);var M=i.memoizedState;if(l=M.cache,ts(i,yn,l),l!==m.cache&&Ah(i,[yn],r,!0),zo(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=bg(e,i,l,r);break t}else if(l!==h){h=Li(Error(a(424)),i),Lo(h),i=bg(e,i,l,r);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,sn=Bi(e.firstChild),zn=i,Oe=!0,$a=null,Ii=!0,r=_m(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bs(),l===h){i=Aa(e,i,r);break t}Gn(e,i,l,r)}i=i.child}return i;case 26:return _c(e,i),e===null?(r=Bv(i.type,null,i.pendingProps,null))?i.memoizedState=r:Oe||(r=i.type,e=i.pendingProps,l=Oc(tt.current).createElement(r),l[_n]=i,l[Bn]=e,Vn(l,r,e),xn(l),i.stateNode=l):i.memoizedState=Bv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ae(i),e===null&&Oe&&(l=i.stateNode=Ov(i.type,i.pendingProps,tt.current),zn=i,Ii=!0,h=sn,ds(i.type)?(qf=h,sn=Bi(l.firstChild)):sn=h),Gn(e,i,i.pendingProps.children,r),_c(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Oe&&((h=l=sn)&&(l=EM(l,i.type,i.pendingProps,Ii),l!==null?(i.stateNode=l,zn=i,sn=Bi(l.firstChild),Ii=!1,h=!0):h=!1),h||Ja(i)),ae(i),h=i.type,m=i.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,Gf(h,m)?l=null:M!==null&&Gf(h,M)&&(i.flags|=32),i.memoizedState!==null&&(h=zh(e,i,zy,null,null,r),rl._currentValue=h),_c(e,i),Gn(e,i,l,r),i.child;case 6:return e===null&&Oe&&((e=r=sn)&&(r=TM(r,i.pendingProps,Ii),r!==null?(i.stateNode=r,zn=i,sn=null,e=!0):e=!1),e||Ja(i)),null;case 13:return Eg(e,i,r);case 4:return yt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ws(i,null,l,r):Gn(e,i,l,r),i.child;case 11:return mg(e,i,i.type,i.pendingProps,r);case 7:return Gn(e,i,i.pendingProps,r),i.child;case 8:return Gn(e,i,i.pendingProps.children,r),i.child;case 12:return Gn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,ts(i,i.type,l.value),Gn(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Hs(i),h=Hn(h),l=l(h),i.flags|=1,Gn(e,i,l,r),i.child;case 14:return gg(e,i,i.type,i.pendingProps,r);case 15:return vg(e,i,i.type,i.pendingProps,r);case 19:return Ag(e,i,r);case 31:return Yy(e,i,r);case 22:return _g(e,i,r,i.pendingProps);case 24:return Hs(i),l=Hn(yn),e===null?(h=Ch(),h===null&&(h=nn,m=wh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},Nh(i),ts(i,yn,h)):((e.lanes&r)!==0&&(Uh(e,i),Ho(i,null,null,r),zo()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ts(i,yn,l)):(l=m.cache,ts(i,yn,l),l!==h.cache&&Ah(i,[yn],r,!0))),Gn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function wa(e){e.flags|=4}function pf(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(tv())e.flags|=8192;else throw ks=ic,Dh}else e.flags&=-16777217}function Rg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kv(i))if(tv())e.flags|=8192;else throw ks=ic,Dh}function yc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Tt():536870912,e.lanes|=i,Ur|=i)}function qo(e,i){if(!Oe)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function rn(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function Ky(e,i,r){var l=i.pendingProps;switch(Mh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(i),null;case 1:return rn(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ba(yn),zt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(i)?wa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,bh())),rn(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(wa(i),m!==null?(rn(i),Rg(i,m)):(rn(i),pf(i,h,null,l,r))):m?m!==e.memoizedState?(wa(i),rn(i),Rg(i,m)):(rn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&wa(i),rn(i),pf(i,h,e,l,r)),null;case 27:if(Qt(i),r=tt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&wa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return rn(i),null}e=At.current,xr(i)?om(i):(e=Ov(h,l,r),i.stateNode=e,wa(i))}return rn(i),null;case 5:if(Qt(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&wa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return rn(i),null}if(m=At.current,xr(i))om(i);else{var M=Oc(tt.current);switch(m){case 1:m=M.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=M.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=M.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=M.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=M.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?M.createElement(h,{is:l.is}):M.createElement(h)}}m[_n]=i,m[Bn]=l;t:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)m.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break t;for(;M.sibling===null;){if(M.return===null||M.return===i)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=m;t:switch(Vn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&wa(i)}}return rn(i),pf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&wa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=tt.current,xr(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=zn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_n]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Ev(e.nodeValue,r)),e||Ja(i,!0)}else e=Oc(e).createTextNode(l),e[_n]=i,i.stateNode=e}return rn(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=xr(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[_n]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),e=!1}else r=bh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(Mi(i),i):(Mi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return rn(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=xr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_n]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),h=!1}else h=bh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Mi(i),i):(Mi(i),null)}return Mi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),yc(i,i.updateQueue),rn(i),null);case 4:return zt(),e===null&&If(i.stateNode.containerInfo),rn(i),null;case 10:return ba(i.type),rn(i),null;case 19:if(K(gn),l=i.memoizedState,l===null)return rn(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)qo(l,!1);else{if(mn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=oc(e),m!==null){for(i.flags|=128,qo(l,!1),e=m.updateQueue,i.updateQueue=e,yc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)nm(r,e),r=r.sibling;return St(gn,gn.current&1|2),Oe&&Ma(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&Te()>Tc&&(i.flags|=128,h=!0,qo(l,!1),i.lanes=4194304)}else{if(!h)if(e=oc(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,yc(i,e),qo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Oe)return rn(i),null}else 2*Te()-l.renderingStartTime>Tc&&r!==536870912&&(i.flags|=128,h=!0,qo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Te(),e.sibling=null,r=gn.current,St(gn,h?r&1|2:r&1),Oe&&Ma(i,l.treeForkCount),e):(rn(i),null);case 22:case 23:return Mi(i),Ih(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(rn(i),i.subtreeFlags&6&&(i.flags|=8192)):rn(i),r=i.updateQueue,r!==null&&yc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&K(Gs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ba(yn),rn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function jy(e,i){switch(Mh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ba(yn),zt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Qt(i),null;case 31:if(i.memoizedState!==null){if(Mi(i),i.alternate===null)throw Error(a(340));Bs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Mi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Bs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return K(gn),null;case 4:return zt(),null;case 10:return ba(i.type),null;case 22:case 23:return Mi(i),Ih(),e!==null&&K(Gs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ba(yn),null;case 25:return null;default:return null}}function Cg(e,i){switch(Mh(i),i.tag){case 3:ba(yn),zt();break;case 26:case 27:case 5:Qt(i);break;case 4:zt();break;case 31:i.memoizedState!==null&&Mi(i);break;case 13:Mi(i);break;case 19:K(gn);break;case 10:ba(i.type);break;case 22:case 23:Mi(i),Ih(),e!==null&&K(Gs);break;case 24:ba(yn)}}function Yo(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,M=r.inst;l=m(),M.destroy=l}r=r.next}while(r!==h)}}catch(C){je(i,i.return,C)}}function rs(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var M=l.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,h=i;var H=r,nt=C;try{nt()}catch(gt){je(h,H,gt)}}}l=l.next}while(l!==m)}}catch(gt){je(i,i.return,gt)}}function Dg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{ym(i,r)}catch(l){je(e,e.return,l)}}}function Ng(e,i,r){r.props=qs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){je(e,i,l)}}function Zo(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){je(e,i,h)}}function ra(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){je(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){je(e,i,h)}else r.current=null}function Ug(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){je(e,e.return,h)}}function mf(e,i,r){try{var l=e.stateNode;_M(l,e.type,r,i),l[Bn]=i}catch(h){je(e,e.return,h)}}function Lg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ds(e.type)||e.tag===4}function gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Lg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ds(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vf(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=_a));else if(l!==4&&(l===27&&ds(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(vf(e,i,r),e=e.sibling;e!==null;)vf(e,i,r),e=e.sibling}function Mc(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&ds(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Mc(e,i,r),e=e.sibling;e!==null;)Mc(e,i,r),e=e.sibling}function Pg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Vn(i,l,r),i[_n]=e,i[Bn]=r}catch(m){je(e,e.return,m)}}var Ra=!1,bn=!1,_f=!1,Og=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function Qy(e,i){if(e=e.containerInfo,zf=Vc,e=Yp(e),uh(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var M=0,C=-1,H=-1,nt=0,gt=0,Mt=e,ot=null;e:for(;;){for(var lt;Mt!==r||h!==0&&Mt.nodeType!==3||(C=M+h),Mt!==m||l!==0&&Mt.nodeType!==3||(H=M+l),Mt.nodeType===3&&(M+=Mt.nodeValue.length),(lt=Mt.firstChild)!==null;)ot=Mt,Mt=lt;for(;;){if(Mt===e)break e;if(ot===r&&++nt===h&&(C=M),ot===m&&++gt===l&&(H=M),(lt=Mt.nextSibling)!==null)break;Mt=ot,ot=Mt.parentNode}Mt=lt}r=C===-1||H===-1?null:{start:C,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hf={focusedElem:e,selectionRange:r},Vc=!1,Ln=i;Ln!==null;)if(i=Ln,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Ln=e;else for(;Ln!==null;){switch(i=Ln,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var qt=qs(r.type,h);e=l.getSnapshotBeforeUpdate(qt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(re){je(r,r.return,re)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)kf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Ln=e;break}Ln=i.return}}function Ig(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Da(e,r),l&4&&Yo(5,r);break;case 1:if(Da(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(M){je(r,r.return,M)}else{var h=qs(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){je(r,r.return,M)}}l&64&&Dg(r),l&512&&Zo(r,r.return);break;case 3:if(Da(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{ym(e,i)}catch(M){je(r,r.return,M)}}break;case 27:i===null&&l&4&&Pg(r);case 26:case 5:Da(e,r),i===null&&l&4&&Ug(r),l&512&&Zo(r,r.return);break;case 12:Da(e,r);break;case 31:Da(e,r),l&4&&zg(e,r);break;case 13:Da(e,r),l&4&&Hg(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=rM.bind(null,r),AM(e,r))));break;case 22:if(l=r.memoizedState!==null||Ra,!l){i=i!==null&&i.memoizedState!==null||bn,h=Ra;var m=bn;Ra=l,(bn=i)&&!m?Na(e,r,(r.subtreeFlags&8772)!==0):Da(e,r),Ra=h,bn=m}break;case 30:break;default:Da(e,r)}}function Fg(e){var i=e.alternate;i!==null&&(e.alternate=null,Fg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ya(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,si=!1;function Ca(e,i,r){for(r=r.child;r!==null;)Bg(e,i,r),r=r.sibling}function Bg(e,i,r){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(dt,r)}catch{}switch(r.tag){case 26:bn||ra(r,i),Ca(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:bn||ra(r,i);var l=fn,h=si;ds(r.type)&&(fn=r.stateNode,si=!1),Ca(e,i,r),il(r.stateNode),fn=l,si=h;break;case 5:bn||ra(r,i);case 6:if(l=fn,h=si,fn=null,Ca(e,i,r),fn=l,si=h,fn!==null)if(si)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(r.stateNode)}catch(m){je(r,i,m)}else try{fn.removeChild(r.stateNode)}catch(m){je(r,i,m)}break;case 18:fn!==null&&(si?(e=fn,Dv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Hr(e)):Dv(fn,r.stateNode));break;case 4:l=fn,h=si,fn=r.stateNode.containerInfo,si=!0,Ca(e,i,r),fn=l,si=h;break;case 0:case 11:case 14:case 15:rs(2,r,i),bn||rs(4,r,i),Ca(e,i,r);break;case 1:bn||(ra(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Ng(r,i,l)),Ca(e,i,r);break;case 21:Ca(e,i,r);break;case 22:bn=(l=bn)||r.memoizedState!==null,Ca(e,i,r),bn=l;break;default:Ca(e,i,r)}}function zg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hr(e)}catch(r){je(i,i.return,r)}}}function Hg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hr(e)}catch(r){je(i,i.return,r)}}function $y(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Og),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Og),i;default:throw Error(a(435,e.tag))}}function Sc(e,i){var r=$y(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=oM.bind(null,e,l);l.then(h,h)}})}function ri(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,M=i,C=M;t:for(;C!==null;){switch(C.tag){case 27:if(ds(C.type)){fn=C.stateNode,si=!1;break t}break;case 5:fn=C.stateNode,si=!1;break t;case 3:case 4:fn=C.stateNode.containerInfo,si=!0;break t}C=C.return}if(fn===null)throw Error(a(160));Bg(m,M,h),fn=null,si=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Gg(i,e),i=i.sibling}var Xi=null;function Gg(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ri(i,e),oi(e),l&4&&(rs(3,e,e.return),Yo(3,e),rs(5,e,e.return));break;case 1:ri(i,e),oi(e),l&512&&(bn||r===null||ra(r,r.return)),l&64&&Ra&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=Xi;if(ri(i,e),oi(e),l&512&&(bn||r===null||ra(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[qa]||m[_n]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Vn(m,l,r),m[_n]=e,xn(m),l=m;break t;case"link":var M=Gv("link","href",h).get(l+(r.href||""));if(M){for(var C=0;C<M.length;C++)if(m=M[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(C,1);break e}}m=h.createElement(l),Vn(m,l,r),h.head.appendChild(m);break;case"meta":if(M=Gv("meta","content",h).get(l+(r.content||""))){for(C=0;C<M.length;C++)if(m=M[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(C,1);break e}}m=h.createElement(l),Vn(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[_n]=e,xn(m),l=m}e.stateNode=l}else Vv(h,e.type,e.stateNode);else e.stateNode=Hv(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?Vv(h,e.type,e.stateNode):Hv(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&mf(e,e.memoizedProps,r.memoizedProps)}break;case 27:ri(i,e),oi(e),l&512&&(bn||r===null||ra(r,r.return)),r!==null&&l&4&&mf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(ri(i,e),oi(e),l&512&&(bn||r===null||ra(r,r.return)),e.flags&32){h=e.stateNode;try{vi(h,"")}catch(qt){je(e,e.return,qt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,mf(e,h,r!==null?r.memoizedProps:h)),l&1024&&(_f=!0);break;case 6:if(ri(i,e),oi(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(qt){je(e,e.return,qt)}}break;case 3:if(Bc=null,h=Xi,Xi=Ic(i.containerInfo),ri(i,e),Xi=h,oi(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Hr(i.containerInfo)}catch(qt){je(e,e.return,qt)}_f&&(_f=!1,Vg(e));break;case 4:l=Xi,Xi=Ic(e.stateNode.containerInfo),ri(i,e),oi(e),Xi=l;break;case 12:ri(i,e),oi(e);break;case 31:ri(i,e),oi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Sc(e,l)));break;case 13:ri(i,e),oi(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ec=Te()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Sc(e,l)));break;case 22:h=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,nt=Ra,gt=bn;if(Ra=nt||h,bn=gt||H,ri(i,e),bn=gt,Ra=nt,oi(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||H||Ra||bn||Ys(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){H=r=i;try{if(m=H.stateNode,h)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=H.stateNode;var Mt=H.memoizedProps.style,ot=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;C.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(qt){je(H,H.return,qt)}}}else if(i.tag===6){if(r===null){H=i;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(qt){je(H,H.return,qt)}}}else if(i.tag===18){if(r===null){H=i;try{var lt=H.stateNode;h?Nv(lt,!0):Nv(H.stateNode,!1)}catch(qt){je(H,H.return,qt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Sc(e,r))));break;case 19:ri(i,e),oi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Sc(e,l)));break;case 30:break;case 21:break;default:ri(i,e),oi(e)}}function oi(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Lg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=gf(e);Mc(e,m,h);break;case 5:var M=r.stateNode;r.flags&32&&(vi(M,""),r.flags&=-33);var C=gf(e);Mc(e,C,M);break;case 3:case 4:var H=r.stateNode.containerInfo,nt=gf(e);vf(e,nt,H);break;default:throw Error(a(161))}}catch(gt){je(e,e.return,gt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Vg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Da(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ig(e,i.alternate,i),i=i.sibling}function Ys(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:rs(4,i,i.return),Ys(i);break;case 1:ra(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Ng(i,i.return,r),Ys(i);break;case 27:il(i.stateNode);case 26:case 5:ra(i,i.return),Ys(i);break;case 22:i.memoizedState===null&&Ys(i);break;case 30:Ys(i);break;default:Ys(i)}e=e.sibling}}function Na(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Na(h,m,r),Yo(4,m);break;case 1:if(Na(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){je(l,l.return,nt)}if(l=m,h=l.updateQueue,h!==null){var C=l.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)xm(H[h],C)}catch(nt){je(l,l.return,nt)}}r&&M&64&&Dg(m),Zo(m,m.return);break;case 27:Pg(m);case 26:case 5:Na(h,m,r),r&&l===null&&M&4&&Ug(m),Zo(m,m.return);break;case 12:Na(h,m,r);break;case 31:Na(h,m,r),r&&M&4&&zg(h,m);break;case 13:Na(h,m,r),r&&M&4&&Hg(h,m);break;case 22:m.memoizedState===null&&Na(h,m,r),Zo(m,m.return);break;case 30:break;default:Na(h,m,r)}i=i.sibling}}function xf(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Po(r))}function yf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e))}function qi(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)kg(e,i,r,l),i=i.sibling}function kg(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:qi(e,i,r,l),h&2048&&Yo(9,i);break;case 1:qi(e,i,r,l);break;case 3:qi(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e)));break;case 12:if(h&2048){qi(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,M=m.id,C=m.onPostCommit;typeof C=="function"&&C(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){je(i,i.return,H)}}else qi(e,i,r,l);break;case 31:qi(e,i,r,l);break;case 13:qi(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?qi(e,i,r,l):Ko(e,i):m._visibility&2?qi(e,i,r,l):(m._visibility|=2,Cr(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&xf(M,i);break;case 24:qi(e,i,r,l),h&2048&&yf(i.alternate,i);break;default:qi(e,i,r,l)}}function Cr(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,M=i,C=r,H=l,nt=M.flags;switch(M.tag){case 0:case 11:case 15:Cr(m,M,C,H,h),Yo(8,M);break;case 23:break;case 22:var gt=M.stateNode;M.memoizedState!==null?gt._visibility&2?Cr(m,M,C,H,h):Ko(m,M):(gt._visibility|=2,Cr(m,M,C,H,h)),h&&nt&2048&&xf(M.alternate,M);break;case 24:Cr(m,M,C,H,h),h&&nt&2048&&yf(M.alternate,M);break;default:Cr(m,M,C,H,h)}i=i.sibling}}function Ko(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:Ko(r,l),h&2048&&xf(l.alternate,l);break;case 24:Ko(r,l),h&2048&&yf(l.alternate,l);break;default:Ko(r,l)}i=i.sibling}}var jo=8192;function Dr(e,i,r){if(e.subtreeFlags&jo)for(e=e.child;e!==null;)Wg(e,i,r),e=e.sibling}function Wg(e,i,r){switch(e.tag){case 26:Dr(e,i,r),e.flags&jo&&e.memoizedState!==null&&BM(r,Xi,e.memoizedState,e.memoizedProps);break;case 5:Dr(e,i,r);break;case 3:case 4:var l=Xi;Xi=Ic(e.stateNode.containerInfo),Dr(e,i,r),Xi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=jo,jo=16777216,Dr(e,i,r),jo=l):Dr(e,i,r));break;default:Dr(e,i,r)}}function Xg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Qo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Ln=l,Yg(l,e)}Xg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qg(e),e=e.sibling}function qg(e){switch(e.tag){case 0:case 11:case 15:Qo(e),e.flags&2048&&rs(9,e,e.return);break;case 3:Qo(e);break;case 12:Qo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,bc(e)):Qo(e);break;default:Qo(e)}}function bc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Ln=l,Yg(l,e)}Xg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:rs(8,i,i.return),bc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,bc(i));break;default:bc(i)}e=e.sibling}}function Yg(e,i){for(;Ln!==null;){var r=Ln;switch(r.tag){case 0:case 11:case 15:rs(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Po(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Ln=l;else t:for(r=e;Ln!==null;){l=Ln;var h=l.sibling,m=l.return;if(Fg(l),l===r){Ln=null;break t}if(h!==null){h.return=m,Ln=h;break t}Ln=m}}}var Jy={getCacheForType:function(e){var i=Hn(yn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Hn(yn).controller.signal}},tM=typeof WeakMap=="function"?WeakMap:Map,He=0,nn=null,Ce=null,Ne=0,Ke=0,Si=null,os=!1,Nr=!1,Mf=!1,Ua=0,mn=0,ls=0,Zs=0,Sf=0,bi=0,Ur=0,$o=null,li=null,bf=!1,Ec=0,Zg=0,Tc=1/0,Ac=null,cs=null,wn=0,us=null,Lr=null,La=0,Ef=0,Tf=null,Kg=null,Jo=0,Af=null;function Ei(){return(He&2)!==0&&Ne!==0?Ne&-Ne:B.T!==null?Uf():So()}function jg(){if(bi===0)if((Ne&536870912)===0||Oe){var e=ce;ce<<=1,(ce&3932160)===0&&(ce=262144),bi=e}else bi=536870912;return e=yi.current,e!==null&&(e.flags|=32),bi}function ci(e,i,r){(e===nn&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),hs(e,Ne,bi,!1)),kt(e,r),((He&2)===0||e!==nn)&&(e===nn&&((He&2)===0&&(Zs|=r),mn===4&&hs(e,Ne,bi,!1)),oa(e))}function Qg(e,i,r){if((He&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Ut(e,i),h=l?iM(e,i):Rf(e,i,!0),m=l;do{if(h===0){Nr&&!l&&hs(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!eM(r)){h=Rf(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var C=e;h=$o;var H=C.current.memoizedState.isDehydrated;if(H&&(Pr(C,M).flags|=256),M=Rf(C,M,!1),M!==2){if(Mf&&!H){C.errorRecoveryDisabledLanes|=m,Zs|=m,h=4;break t}m=li,li=h,m!==null&&(li===null?li=m:li.push.apply(li,m))}h=M}if(m=!1,h!==2)continue}}if(h===1){Pr(e,0),hs(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:hs(l,i,bi,!os);break t;case 2:li=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Ec+300-Te(),10<h)){if(hs(l,i,bi,!os),vt(l,0,!0)!==0)break t;La=i,l.timeoutHandle=Rv($g.bind(null,l,r,li,Ac,bf,i,bi,Zs,Ur,os,m,"Throttled",-0,0),h);break t}$g(l,r,li,Ac,bf,i,bi,Zs,Ur,os,m,null,-0,0)}}break}while(!0);oa(e)}function $g(e,i,r,l,h,m,M,C,H,nt,gt,Mt,ot,lt){if(e.timeoutHandle=-1,Mt=i.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},Wg(i,m,Mt);var qt=(m&62914560)===m?Ec-Te():(m&4194048)===m?Zg-Te():0;if(qt=zM(Mt,qt),qt!==null){La=m,e.cancelPendingCommit=qt(rv.bind(null,e,i,m,r,l,h,M,C,H,gt,Mt,null,ot,lt)),hs(e,m,M,!nt);return}}rv(e,i,m,r,l,h,M,C,H)}function eM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!_i(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hs(e,i,r,l){i&=~Sf,i&=~Zs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-Ht(h),M=1<<m;l[m]=-1,h&=~M}r!==0&&Xe(e,r,i)}function wc(){return(He&6)===0?(tl(0),!1):!0}function wf(){if(Ce!==null){if(Ke===0)var e=Ce.return;else e=Ce,Sa=zs=null,Vh(e),Er=null,Io=0,e=Ce;for(;e!==null;)Cg(e.alternate,e),e=e.return;Ce=null}}function Pr(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,MM(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),La=0,wf(),nn=e,Ce=r=ya(e.current,null),Ne=i,Ke=0,Si=null,os=!1,Nr=Ut(e,i),Mf=!1,Ur=bi=Sf=Zs=ls=mn=0,li=$o=null,bf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ht(l),m=1<<h;i|=e[h],l&=~m}return Ua=i,Zl(),r}function Jg(e,i){xe=null,B.H=Wo,i===br||i===nc?(i=mm(),Ke=3):i===Dh?(i=mm(),Ke=4):Ke=i===sf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Si=i,Ce===null&&(mn=1,gc(e,Li(i,e.current)))}function tv(){var e=yi.current;return e===null?!0:(Ne&4194048)===Ne?Fi===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Fi:!1}function ev(){var e=B.H;return B.H=Wo,e===null?Wo:e}function nv(){var e=B.A;return B.A=Jy,e}function Rc(){mn=4,os||(Ne&4194048)!==Ne&&yi.current!==null||(Nr=!0),(ls&134217727)===0&&(Zs&134217727)===0||nn===null||hs(nn,Ne,bi,!1)}function Rf(e,i,r){var l=He;He|=2;var h=ev(),m=nv();(nn!==e||Ne!==i)&&(Ac=null,Pr(e,i)),i=!1;var M=mn;t:do try{if(Ke!==0&&Ce!==null){var C=Ce,H=Si;switch(Ke){case 8:wf(),M=6;break t;case 3:case 2:case 9:case 6:yi.current===null&&(i=!0);var nt=Ke;if(Ke=0,Si=null,Or(e,C,H,nt),r&&Nr){M=0;break t}break;default:nt=Ke,Ke=0,Si=null,Or(e,C,H,nt)}}nM(),M=mn;break}catch(gt){Jg(e,gt)}while(!0);return i&&e.shellSuspendCounter++,Sa=zs=null,He=l,B.H=h,B.A=m,Ce===null&&(nn=null,Ne=0,Zl()),M}function nM(){for(;Ce!==null;)iv(Ce)}function iM(e,i){var r=He;He|=2;var l=ev(),h=nv();nn!==e||Ne!==i?(Ac=null,Tc=Te()+500,Pr(e,i)):Nr=Ut(e,i);t:do try{if(Ke!==0&&Ce!==null){i=Ce;var m=Si;e:switch(Ke){case 1:Ke=0,Si=null,Or(e,i,m,1);break;case 2:case 9:if(dm(m)){Ke=0,Si=null,av(i);break}i=function(){Ke!==2&&Ke!==9||nn!==e||(Ke=7),oa(e)},m.then(i,i);break t;case 3:Ke=7;break t;case 4:Ke=5;break t;case 7:dm(m)?(Ke=0,Si=null,av(i)):(Ke=0,Si=null,Or(e,i,m,7));break;case 5:var M=null;switch(Ce.tag){case 26:M=Ce.memoizedState;case 5:case 27:var C=Ce;if(M?kv(M):C.stateNode.complete){Ke=0,Si=null;var H=C.sibling;if(H!==null)Ce=H;else{var nt=C.return;nt!==null?(Ce=nt,Cc(nt)):Ce=null}break e}}Ke=0,Si=null,Or(e,i,m,5);break;case 6:Ke=0,Si=null,Or(e,i,m,6);break;case 8:wf(),mn=6;break t;default:throw Error(a(462))}}aM();break}catch(gt){Jg(e,gt)}while(!0);return Sa=zs=null,B.H=l,B.A=h,He=r,Ce!==null?0:(nn=null,Ne=0,Zl(),mn)}function aM(){for(;Ce!==null&&!Ge();)iv(Ce)}function iv(e){var i=wg(e.alternate,e,Ua);e.memoizedProps=e.pendingProps,i===null?Cc(e):Ce=i}function av(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Mg(r,i,i.pendingProps,i.type,void 0,Ne);break;case 11:i=Mg(r,i,i.pendingProps,i.type.render,i.ref,Ne);break;case 5:Vh(i);default:Cg(r,i),i=Ce=nm(i,Ua),i=wg(r,i,Ua)}e.memoizedProps=e.pendingProps,i===null?Cc(e):Ce=i}function Or(e,i,r,l){Sa=zs=null,Vh(i),Er=null,Io=0;var h=i.return;try{if(qy(e,h,i,r,Ne)){mn=1,gc(e,Li(r,e.current)),Ce=null;return}}catch(m){if(h!==null)throw Ce=h,m;mn=1,gc(e,Li(r,e.current)),Ce=null;return}i.flags&32768?(Oe||l===1?e=!0:Nr||(Ne&536870912)!==0?e=!1:(os=e=!0,(l===2||l===9||l===3||l===6)&&(l=yi.current,l!==null&&l.tag===13&&(l.flags|=16384))),sv(i,e)):Cc(i)}function Cc(e){var i=e;do{if((i.flags&32768)!==0){sv(i,os);return}e=i.return;var r=Ky(i.alternate,i,Ua);if(r!==null){Ce=r;return}if(i=i.sibling,i!==null){Ce=i;return}Ce=i=e}while(i!==null);mn===0&&(mn=5)}function sv(e,i){do{var r=jy(e.alternate,e);if(r!==null){r.flags&=32767,Ce=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=r}while(e!==null);mn=6,Ce=null}function rv(e,i,r,l,h,m,M,C,H){e.cancelPendingCommit=null;do Dc();while(wn!==0);if((He&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=mh,cn(e,r,m,M,C,H),e===nn&&(Ce=nn=null,Ne=0),Lr=i,us=e,La=r,Ef=m,Tf=h,Kg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lM($,function(){return hv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,h=z.p,z.p=2,M=He,He|=4;try{Qy(e,i,r)}finally{He=M,z.p=h,B.T=l}}wn=1,ov(),lv(),cv()}}function ov(){if(wn===1){wn=0;var e=us,i=Lr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=z.p;z.p=2;var h=He;He|=4;try{Gg(i,e);var m=Hf,M=Yp(e.containerInfo),C=m.focusedElem,H=m.selectionRange;if(M!==C&&C&&C.ownerDocument&&qp(C.ownerDocument.documentElement,C)){if(H!==null&&uh(C)){var nt=H.start,gt=H.end;if(gt===void 0&&(gt=nt),"selectionStart"in C)C.selectionStart=nt,C.selectionEnd=Math.min(gt,C.value.length);else{var Mt=C.ownerDocument||document,ot=Mt&&Mt.defaultView||window;if(ot.getSelection){var lt=ot.getSelection(),qt=C.textContent.length,re=Math.min(H.start,qt),Je=H.end===void 0?re:Math.min(H.end,qt);!lt.extend&&re>Je&&(M=Je,Je=re,re=M);var J=Xp(C,re),V=Xp(C,Je);if(J&&V&&(lt.rangeCount!==1||lt.anchorNode!==J.node||lt.anchorOffset!==J.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var et=Mt.createRange();et.setStart(J.node,J.offset),lt.removeAllRanges(),re>Je?(lt.addRange(et),lt.extend(V.node,V.offset)):(et.setEnd(V.node,V.offset),lt.addRange(et))}}}}for(Mt=[],lt=C;lt=lt.parentNode;)lt.nodeType===1&&Mt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Mt.length;C++){var _t=Mt[C];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Vc=!!zf,Hf=zf=null}finally{He=h,z.p=l,B.T=r}}e.current=i,wn=2}}function lv(){if(wn===2){wn=0;var e=us,i=Lr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=z.p;z.p=2;var h=He;He|=4;try{Ig(e,i.alternate,i)}finally{He=h,z.p=l,B.T=r}}wn=3}}function cv(){if(wn===4||wn===3){wn=0,X();var e=us,i=Lr,r=La,l=Kg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,Lr=us=null,uv(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(cs=null),Mo(r),i=i.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,h=z.p,z.p=2,B.T=null;try{for(var m=e.onRecoverableError,M=0;M<l.length;M++){var C=l[M];m(C.value,{componentStack:C.stack})}}finally{B.T=i,z.p=h}}(La&3)!==0&&Dc(),oa(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===Af?Jo++:(Jo=0,Af=e):Jo=0,tl(0)}}function uv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Po(i)))}function Dc(){return ov(),lv(),cv(),hv()}function hv(){if(wn!==5)return!1;var e=us,i=Ef;Ef=0;var r=Mo(La),l=B.T,h=z.p;try{z.p=32>r?32:r,B.T=null,r=Tf,Tf=null;var m=us,M=La;if(wn=0,Lr=us=null,La=0,(He&6)!==0)throw Error(a(331));var C=He;if(He|=4,qg(m.current),kg(m,m.current,M,r),He=C,tl(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(dt,m)}catch{}return!0}finally{z.p=h,B.T=l,uv(e,i)}}function fv(e,i,r){i=Li(r,i),i=af(e.stateNode,i,2),e=is(e,i,2),e!==null&&(kt(e,2),oa(e))}function je(e,i,r){if(e.tag===3)fv(e,e,r);else for(;i!==null;){if(i.tag===3){fv(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cs===null||!cs.has(l))){e=Li(r,e),r=dg(2),l=is(i,r,2),l!==null&&(pg(r,l,i,e),kt(l,2),oa(l));break}}i=i.return}}function Cf(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new tM;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||(Mf=!0,h.add(r),e=sM.bind(null,e,i,r),i.then(e,e))}function sM(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,nn===e&&(Ne&r)===r&&(mn===4||mn===3&&(Ne&62914560)===Ne&&300>Te()-Ec?(He&2)===0&&Pr(e,0):Sf|=r,Ur===Ne&&(Ur=0)),oa(e)}function dv(e,i){i===0&&(i=Tt()),e=Is(e,i),e!==null&&(kt(e,i),oa(e))}function rM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),dv(e,r)}function oM(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),dv(e,r)}function lM(e,i){return fe(e,i)}var Nc=null,Ir=null,Df=!1,Uc=!1,Nf=!1,fs=0;function oa(e){e!==Ir&&e.next===null&&(Ir===null?Nc=Ir=e:Ir=Ir.next=e),Uc=!0,Df||(Df=!0,uM())}function tl(e,i){if(!Nf&&Uc){Nf=!0;do for(var r=!1,l=Nc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var M=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-Ht(42|e)+1)-1,m&=h&~(M&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,vv(l,m))}else m=Ne,m=vt(l,l===nn?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ut(l,m)||(r=!0,vv(l,m));l=l.next}while(r);Nf=!1}}function cM(){pv()}function pv(){Uc=Df=!1;var e=0;fs!==0&&yM()&&(e=fs);for(var i=Te(),r=null,l=Nc;l!==null;){var h=l.next,m=mv(l,i);m===0?(l.next=null,r===null?Nc=h:r.next=h,h===null&&(Ir=r)):(r=l,(e!==0||(m&3)!==0)&&(Uc=!0)),l=h}wn!==0&&wn!==5||tl(e),fs!==0&&(fs=0)}function mv(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-Ht(m),C=1<<M,H=h[M];H===-1?((C&r)===0||(C&l)!==0)&&(h[M]=Bt(C,i)):H<=i&&(e.expiredLanes|=C),m&=~C}if(i=nn,r=Ne,r=vt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ve(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ut(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&ve(l),Mo(r)){case 2:case 8:r=E;break;case 32:r=$;break;case 268435456:r=ht;break;default:r=$}return l=gv.bind(null,e),r=fe(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&ve(l),e.callbackPriority=2,e.callbackNode=null,2}function gv(e,i){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Dc()&&e.callbackNode!==r)return null;var l=Ne;return l=vt(e,e===nn?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Qg(e,l,i),mv(e,Te()),e.callbackNode!=null&&e.callbackNode===r?gv.bind(null,e):null)}function vv(e,i){if(Dc())return null;Qg(e,i,!0)}function uM(){SM(function(){(He&6)!==0?fe(I,cM):pv()})}function Uf(){if(fs===0){var e=Mr;e===0&&(e=ee,ee<<=1,(ee&261888)===0&&(ee=256)),fs=e}return fs}function _v(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Us(""+e)}function xv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function hM(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=_v((h[Bn]||null).action),M=l.submitter;M&&(i=(i=M[Bn]||null)?_v(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var C=new Wl("action","action",null,l,h);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(fs!==0){var H=M?xv(h,M):new FormData(h);Qh(r,{pending:!0,data:H,method:h.method,action:m},null,H)}}else typeof m=="function"&&(C.preventDefault(),H=M?xv(h,M):new FormData(h),Qh(r,{pending:!0,data:H,method:h.method,action:m},m,H))},currentTarget:h}]})}}for(var Lf=0;Lf<ph.length;Lf++){var Pf=ph[Lf],fM=Pf.toLowerCase(),dM=Pf[0].toUpperCase()+Pf.slice(1);Wi(fM,"on"+dM)}Wi(jp,"onAnimationEnd"),Wi(Qp,"onAnimationIteration"),Wi($p,"onAnimationStart"),Wi("dblclick","onDoubleClick"),Wi("focusin","onFocus"),Wi("focusout","onBlur"),Wi(Cy,"onTransitionRun"),Wi(Dy,"onTransitionStart"),Wi(Ny,"onTransitionCancel"),Wi(Jp,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function yv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var C=l[M],H=C.instance,nt=C.currentTarget;if(C=C.listener,H!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=nt;try{m(h)}catch(gt){Yl(gt)}h.currentTarget=null,m=H}else for(M=0;M<l.length;M++){if(C=l[M],H=C.instance,nt=C.currentTarget,C=C.listener,H!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=nt;try{m(h)}catch(gt){Yl(gt)}h.currentTarget=null,m=H}}}}function De(e,i){var r=i[Cs];r===void 0&&(r=i[Cs]=new Set);var l=e+"__bubble";r.has(l)||(Mv(i,e,2,!1),r.add(l))}function Of(e,i,r){var l=0;i&&(l|=4),Mv(r,e,l,i)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function If(e){if(!e[Lc]){e[Lc]=!0,Hl.forEach(function(r){r!=="selectionchange"&&(pM.has(r)||Of(r,!1,e),Of(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Lc]||(i[Lc]=!0,Of("selectionchange",!1,i))}}function Mv(e,i,r,l){switch(jv(i)){case 2:var h=VM;break;case 8:h=kM;break;default:h=Qf}r=h.bind(null,i,r,e),h=void 0,!eh||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function Ff(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var C=l.stateNode.containerInfo;if(C===h)break;if(M===4)for(M=l.return;M!==null;){var H=M.tag;if((H===3||H===4)&&M.stateNode.containerInfo===h)return;M=M.return}for(;C!==null;){if(M=ga(C),M===null)return;if(H=M.tag,H===5||H===6||H===26||H===27){l=m=M;continue t}C=C.parentNode}}l=l.return}Ap(function(){var nt=m,gt=Ju(r),Mt=[];t:{var ot=tm.get(e);if(ot!==void 0){var lt=Wl,qt=e;switch(e){case"keypress":if(Vl(r)===0)break t;case"keydown":case"keyup":lt=oy;break;case"focusin":qt="focus",lt=sh;break;case"focusout":qt="blur",lt=sh;break;case"beforeblur":case"afterblur":lt=sh;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=uy;break;case jp:case Qp:case $p:lt=$x;break;case Jp:lt=fy;break;case"scroll":case"scrollend":lt=Yx;break;case"wheel":lt=py;break;case"copy":case"cut":case"paste":lt=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Np;break;case"toggle":case"beforetoggle":lt=gy}var re=(i&4)!==0,Je=!re&&(e==="scroll"||e==="scrollend"),J=re?ot!==null?ot+"Capture":null:ot;re=[];for(var V=nt,et;V!==null;){var _t=V;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||J===null||(_t=bo(V,J),_t!=null&&re.push(nl(V,_t,et))),Je)break;V=V.return}0<re.length&&(ot=new lt(ot,qt,null,r,gt),Mt.push({event:ot,listeners:re}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",ot&&r!==$u&&(qt=r.relatedTarget||r.fromElement)&&(ga(qt)||qt[ii]))break t;if((lt||ot)&&(ot=gt.window===gt?gt:(ot=gt.ownerDocument)?ot.defaultView||ot.parentWindow:window,lt?(qt=r.relatedTarget||r.toElement,lt=nt,qt=qt?ga(qt):null,qt!==null&&(Je=c(qt),re=qt.tag,qt!==Je||re!==5&&re!==27&&re!==6)&&(qt=null)):(lt=null,qt=nt),lt!==qt)){if(re=Cp,_t="onMouseLeave",J="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(re=Np,_t="onPointerLeave",J="onPointerEnter",V="pointer"),Je=lt==null?ot:Ns(lt),et=qt==null?ot:Ns(qt),ot=new re(_t,V+"leave",lt,r,gt),ot.target=Je,ot.relatedTarget=et,_t=null,ga(gt)===nt&&(re=new re(J,V+"enter",qt,r,gt),re.target=et,re.relatedTarget=Je,_t=re),Je=_t,lt&&qt)e:{for(re=mM,J=lt,V=qt,et=0,_t=J;_t;_t=re(_t))et++;_t=0;for(var ie=V;ie;ie=re(ie))_t++;for(;0<et-_t;)J=re(J),et--;for(;0<_t-et;)V=re(V),_t--;for(;et--;){if(J===V||V!==null&&J===V.alternate){re=J;break e}J=re(J),V=re(V)}re=null}else re=null;lt!==null&&Sv(Mt,ot,lt,re,!1),qt!==null&&Je!==null&&Sv(Mt,Je,qt,re,!0)}}t:{if(ot=nt?Ns(nt):window,lt=ot.nodeName&&ot.nodeName.toLowerCase(),lt==="select"||lt==="input"&&ot.type==="file")var Fe=zp;else if(Fp(ot))if(Hp)Fe=Ay;else{Fe=Ey;var Zt=by}else lt=ot.nodeName,!lt||lt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?nt&&Ve(nt.elementType)&&(Fe=zp):Fe=Ty;if(Fe&&(Fe=Fe(e,nt))){Bp(Mt,Fe,r,gt);break t}Zt&&Zt(e,ot,nt),e==="focusout"&&nt&&ot.type==="number"&&nt.memoizedProps.value!=null&&Re(ot,"number",ot.value)}switch(Zt=nt?Ns(nt):window,e){case"focusin":(Fp(Zt)||Zt.contentEditable==="true")&&(dr=Zt,hh=nt,No=null);break;case"focusout":No=hh=dr=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,Zp(Mt,r,gt);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Zp(Mt,r,gt)}var Me;if(oh)t:{switch(e){case"compositionstart":var Ue="onCompositionStart";break t;case"compositionend":Ue="onCompositionEnd";break t;case"compositionupdate":Ue="onCompositionUpdate";break t}Ue=void 0}else fr?Op(e,r)&&(Ue="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ue="onCompositionStart");Ue&&(Up&&r.locale!=="ko"&&(fr||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&fr&&(Me=wp()):(ja=gt,nh="value"in ja?ja.value:ja.textContent,fr=!0)),Zt=Pc(nt,Ue),0<Zt.length&&(Ue=new Dp(Ue,e,null,r,gt),Mt.push({event:Ue,listeners:Zt}),Me?Ue.data=Me:(Me=Ip(r),Me!==null&&(Ue.data=Me)))),(Me=_y?xy(e,r):yy(e,r))&&(Ue=Pc(nt,"onBeforeInput"),0<Ue.length&&(Zt=new Dp("onBeforeInput","beforeinput",null,r,gt),Mt.push({event:Zt,listeners:Ue}),Zt.data=Me)),hM(Mt,e,nt,r,gt)}yv(Mt,i)})}function nl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function Pc(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=bo(e,r),h!=null&&l.unshift(nl(e,h,m)),h=bo(e,i),h!=null&&l.push(nl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function mM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sv(e,i,r,l,h){for(var m=i._reactName,M=[];r!==null&&r!==l;){var C=r,H=C.alternate,nt=C.stateNode;if(C=C.tag,H!==null&&H===l)break;C!==5&&C!==26&&C!==27||nt===null||(H=nt,h?(nt=bo(r,m),nt!=null&&M.unshift(nl(r,nt,H))):h||(nt=bo(r,m),nt!=null&&M.push(nl(r,nt,H)))),r=r.return}M.length!==0&&e.push({event:i,listeners:M})}var gM=/\r\n?/g,vM=/\u0000|\uFFFD/g;function bv(e){return(typeof e=="string"?e:""+e).replace(gM,`
`).replace(vM,"")}function Ev(e,i){return i=bv(i),bv(e)===i}function $e(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||vi(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&vi(e,""+l);break;case"className":Xt(e,"class",l);break;case"tabIndex":Xt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,r,l);break;case"style":ki(e,l,m);break;case"data":if(i!=="object"){Xt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Us(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&$e(e,i,"name",h.name,h,null),$e(e,i,"formEncType",h.formEncType,h,null),$e(e,i,"formMethod",h.formMethod,h,null),$e(e,i,"formTarget",h.formTarget,h,null)):($e(e,i,"encType",h.encType,h,null),$e(e,i,"method",h.method,h,null),$e(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Us(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=_a);break;case"onScroll":l!=null&&De("scroll",e);break;case"onScrollEnd":l!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Us(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":De("beforetoggle",e),De("toggle",e),Pt(e,"popover",l);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ia.get(r)||r,Pt(e,r,l))}}function Bf(e,i,r,l,h,m){switch(r){case"style":ki(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?vi(e,l):(typeof l=="number"||typeof l=="bigint")&&vi(e,""+l);break;case"onScroll":l!=null&&De("scroll",e);break;case"onScrollEnd":l!=null&&De("scrollend",e);break;case"onClick":l!=null&&(e.onclick=_a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Bn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Pt(e,r,l)}}}function Vn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var M=r[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:$e(e,i,m,M,r,null)}}h&&$e(e,i,"srcSet",r.srcSet,r,null),l&&$e(e,i,"src",r.src,r,null);return;case"input":De("invalid",e);var C=m=M=h=null,H=null,nt=null;for(l in r)if(r.hasOwnProperty(l)){var gt=r[l];if(gt!=null)switch(l){case"name":h=gt;break;case"type":M=gt;break;case"checked":H=gt;break;case"defaultChecked":nt=gt;break;case"value":m=gt;break;case"defaultValue":C=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(a(137,i));break;default:$e(e,i,l,gt,r,null)}}qn(e,m,C,H,nt,M,h,!1);return;case"select":De("invalid",e),l=M=m=null;for(h in r)if(r.hasOwnProperty(h)&&(C=r[h],C!=null))switch(h){case"value":m=C;break;case"defaultValue":M=C;break;case"multiple":l=C;default:$e(e,i,h,C,r,null)}i=m,r=M,e.multiple=!!l,i!=null?An(e,!!l,i,!1):r!=null&&An(e,!!l,r,!0);return;case"textarea":De("invalid",e),m=h=l=null;for(M in r)if(r.hasOwnProperty(M)&&(C=r[M],C!=null))switch(M){case"value":l=C;break;case"defaultValue":h=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:$e(e,i,M,C,r,null)}Vi(e,l,h,m);return;case"option":for(H in r)r.hasOwnProperty(H)&&(l=r[H],l!=null)&&(H==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":$e(e,i,H,l,r,null));return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(l=0;l<el.length;l++)De(el[l],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(l=r[nt],l!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:$e(e,i,nt,l,r,null)}return;default:if(Ve(i)){for(gt in r)r.hasOwnProperty(gt)&&(l=r[gt],l!==void 0&&Bf(e,i,gt,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&$e(e,i,C,l,r,null))}function _M(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,M=null,C=null,H=null,nt=null,gt=null;for(lt in r){var Mt=r[lt];if(r.hasOwnProperty(lt)&&Mt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":H=Mt;default:l.hasOwnProperty(lt)||$e(e,i,lt,null,l,Mt)}}for(var ot in l){var lt=l[ot];if(Mt=r[ot],l.hasOwnProperty(ot)&&(lt!=null||Mt!=null))switch(ot){case"type":m=lt;break;case"name":h=lt;break;case"checked":nt=lt;break;case"defaultChecked":gt=lt;break;case"value":M=lt;break;case"defaultValue":C=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:lt!==Mt&&$e(e,i,ot,lt,l,Mt)}}Gt(e,M,C,H,nt,gt,m,h);return;case"select":lt=M=C=ot=null;for(m in r)if(H=r[m],r.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":lt=H;default:l.hasOwnProperty(m)||$e(e,i,m,null,l,H)}for(h in l)if(m=l[h],H=r[h],l.hasOwnProperty(h)&&(m!=null||H!=null))switch(h){case"value":ot=m;break;case"defaultValue":C=m;break;case"multiple":M=m;default:m!==H&&$e(e,i,h,m,l,H)}i=C,r=M,l=lt,ot!=null?An(e,!!r,ot,!1):!!l!=!!r&&(i!=null?An(e,!!r,i,!0):An(e,!!r,r?[]:"",!1));return;case"textarea":lt=ot=null;for(C in r)if(h=r[C],r.hasOwnProperty(C)&&h!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:$e(e,i,C,null,l,h)}for(M in l)if(h=l[M],m=r[M],l.hasOwnProperty(M)&&(h!=null||m!=null))switch(M){case"value":ot=h;break;case"defaultValue":lt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&$e(e,i,M,h,l,m)}gi(e,ot,lt);return;case"option":for(var qt in r)ot=r[qt],r.hasOwnProperty(qt)&&ot!=null&&!l.hasOwnProperty(qt)&&(qt==="selected"?e.selected=!1:$e(e,i,qt,null,l,ot));for(H in l)ot=l[H],lt=r[H],l.hasOwnProperty(H)&&ot!==lt&&(ot!=null||lt!=null)&&(H==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":$e(e,i,H,ot,l,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in r)ot=r[re],r.hasOwnProperty(re)&&ot!=null&&!l.hasOwnProperty(re)&&$e(e,i,re,null,l,ot);for(nt in l)if(ot=l[nt],lt=r[nt],l.hasOwnProperty(nt)&&ot!==lt&&(ot!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:$e(e,i,nt,ot,l,lt)}return;default:if(Ve(i)){for(var Je in r)ot=r[Je],r.hasOwnProperty(Je)&&ot!==void 0&&!l.hasOwnProperty(Je)&&Bf(e,i,Je,void 0,l,ot);for(gt in l)ot=l[gt],lt=r[gt],!l.hasOwnProperty(gt)||ot===lt||ot===void 0&&lt===void 0||Bf(e,i,gt,ot,l,lt);return}}for(var J in r)ot=r[J],r.hasOwnProperty(J)&&ot!=null&&!l.hasOwnProperty(J)&&$e(e,i,J,null,l,ot);for(Mt in l)ot=l[Mt],lt=r[Mt],!l.hasOwnProperty(Mt)||ot===lt||ot==null&&lt==null||$e(e,i,Mt,ot,l,lt)}function Tv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,M=h.initiatorType,C=h.duration;if(m&&C&&Tv(M)){for(M=0,C=h.responseEnd,l+=1;l<r.length;l++){var H=r[l],nt=H.startTime;if(nt>C)break;var gt=H.transferSize,Mt=H.initiatorType;gt&&Tv(Mt)&&(H=H.responseEnd,M+=gt*(H<C?1:(C-nt)/(H-nt)))}if(--l,i+=8*(m+M)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zf=null,Hf=null;function Oc(e){return e.nodeType===9?e:e.ownerDocument}function Av(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Gf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vf=null;function yM(){var e=window.event;return e&&e.type==="popstate"?e===Vf?!1:(Vf=e,!0):(Vf=null,!1)}var Rv=typeof setTimeout=="function"?setTimeout:void 0,MM=typeof clearTimeout=="function"?clearTimeout:void 0,Cv=typeof Promise=="function"?Promise:void 0,SM=typeof queueMicrotask=="function"?queueMicrotask:typeof Cv<"u"?function(e){return Cv.resolve(null).then(e).catch(bM)}:Rv;function bM(e){setTimeout(function(){throw e})}function ds(e){return e==="head"}function Dv(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),Hr(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")il(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,il(r);for(var m=r.firstChild;m;){var M=m.nextSibling,C=m.nodeName;m[qa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=M}}else r==="body"&&il(e.ownerDocument.body);r=h}while(r);Hr(i)}function Nv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function kf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":kf(r),Ya(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function EM(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[qa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Bi(e.nextSibling),e===null)break}return null}function TM(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Bi(e.nextSibling),e===null))return null;return e}function Uv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Bi(e.nextSibling),e===null))return null;return e}function Wf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function AM(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var qf=null;function Lv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Bi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Pv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Ov(e,i,r){switch(i=Oc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function il(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ya(e)}var zi=new Map,Iv=new Set;function Ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pa=z.d;z.d={f:wM,r:RM,D:CM,C:DM,L:NM,m:UM,X:PM,S:LM,M:OM};function wM(){var e=Pa.f(),i=wc();return e||i}function RM(e){var i=va(e);i!==null&&i.tag===5&&i.type==="form"?Jm(i):Pa.r(e)}var Fr=typeof document>"u"?null:document;function Fv(e,i,r){var l=Fr;if(l&&typeof i=="string"&&i){var h=Ye(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),Iv.has(h)||(Iv.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Vn(i,"link",e),xn(i),l.head.appendChild(i)))}}function CM(e){Pa.D(e),Fv("dns-prefetch",e,null)}function DM(e,i){Pa.C(e,i),Fv("preconnect",e,i)}function NM(e,i,r){Pa.L(e,i,r);var l=Fr;if(l&&e&&i){var h='link[rel="preload"][as="'+Ye(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+Ye(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+Ye(r.imageSizes)+'"]')):h+='[href="'+Ye(e)+'"]';var m=h;switch(i){case"style":m=Br(e);break;case"script":m=zr(e)}zi.has(m)||(e=_({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),zi.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(al(m))||i==="script"&&l.querySelector(sl(m))||(i=l.createElement("link"),Vn(i,"link",e),xn(i),l.head.appendChild(i)))}}function UM(e,i){Pa.m(e,i);var r=Fr;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Ye(l)+'"][href="'+Ye(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=zr(e)}if(!zi.has(m)&&(e=_({rel:"modulepreload",href:e},i),zi.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(sl(m)))return}l=r.createElement("link"),Vn(l,"link",e),xn(l),r.head.appendChild(l)}}}function LM(e,i,r){Pa.S(e,i,r);var l=Fr;if(l&&e){var h=Za(l).hoistableStyles,m=Br(e);i=i||"default";var M=h.get(m);if(!M){var C={loading:0,preload:null};if(M=l.querySelector(al(m)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},r),(r=zi.get(m))&&Yf(e,r);var H=M=l.createElement("link");xn(H),Vn(H,"link",e),H._p=new Promise(function(nt,gt){H.onload=nt,H.onerror=gt}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Fc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:C},h.set(m,M)}}}function PM(e,i){Pa.X(e,i);var r=Fr;if(r&&e){var l=Za(r).hoistableScripts,h=zr(e),m=l.get(h);m||(m=r.querySelector(sl(h)),m||(e=_({src:e,async:!0},i),(i=zi.get(h))&&Zf(e,i),m=r.createElement("script"),xn(m),Vn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function OM(e,i){Pa.M(e,i);var r=Fr;if(r&&e){var l=Za(r).hoistableScripts,h=zr(e),m=l.get(h);m||(m=r.querySelector(sl(h)),m||(e=_({src:e,async:!0,type:"module"},i),(i=zi.get(h))&&Zf(e,i),m=r.createElement("script"),xn(m),Vn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function Bv(e,i,r,l){var h=(h=tt.current)?Ic(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Br(r.href),r=Za(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Br(r.href);var m=Za(h).hoistableStyles,M=m.get(e);if(M||(h=h.ownerDocument||h,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=h.querySelector(al(e)))&&!m._p&&(M.instance=m,M.state.loading=5),zi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},zi.set(e,r),m||IM(h,e,r,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=zr(r),r=Za(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Br(e){return'href="'+Ye(e)+'"'}function al(e){return'link[rel="stylesheet"]['+e+"]"}function zv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function IM(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Vn(i,"link",r),xn(i),e.head.appendChild(i))}function zr(e){return'[src="'+Ye(e)+'"]'}function sl(e){return"script[async]"+e}function Hv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Ye(r.href)+'"]');if(l)return i.instance=l,xn(l),l;var h=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),xn(l),Vn(l,"style",h),Fc(l,r.precedence,e),i.instance=l;case"stylesheet":h=Br(r.href);var m=e.querySelector(al(h));if(m)return i.state.loading|=4,i.instance=m,xn(m),m;l=zv(r),(h=zi.get(h))&&Yf(l,h),m=(e.ownerDocument||e).createElement("link"),xn(m);var M=m;return M._p=new Promise(function(C,H){M.onload=C,M.onerror=H}),Vn(m,"link",l),i.state.loading|=4,Fc(m,r.precedence,e),i.instance=m;case"script":return m=zr(r.src),(h=e.querySelector(sl(m)))?(i.instance=h,xn(h),h):(l=r,(h=zi.get(m))&&(l=_({},r),Zf(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),xn(h),Vn(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Fc(l,r.precedence,e));return i.instance}function Fc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,M=0;M<l.length;M++){var C=l[M];if(C.dataset.precedence===i)m=C;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Yf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Zf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Bc=null;function Gv(e,i,r){if(Bc===null){var l=new Map,h=Bc=new Map;h.set(r,l)}else h=Bc,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[qa]||m[_n]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=e+M;var C=l.get(M);C?C.push(m):l.set(M,[m])}}return l}function Vv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function FM(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function kv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function BM(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Br(l.href),m=i.querySelector(al(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=zc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,xn(m);return}m=i.ownerDocument||i,l=zv(l),(h=zi.get(h))&&Yf(l,h),m=m.createElement("link"),xn(m);var M=m;M._p=new Promise(function(C,H){M.onload=C,M.onerror=H}),Vn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=zc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Kf=0;function zM(e,i){return e.stylesheets&&e.count===0&&Gc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Gc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Kf===0&&(Kf=62500*xM());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Kf?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hc=null;function Gc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hc=new Map,i.forEach(HM,e),Hc=null,zc.call(e))}function HM(e,i){if(!(i.state.loading&4)){var r=Hc.get(e);if(r)var l=r.get(null);else{r=new Map,Hc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var M=h[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}h=i.instance,M=h.getAttribute("data-precedence"),m=r.get(M)||l,m===l&&r.set(null,h),r.set(M,h),this.count++,l=zc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var rl={$$typeof:L,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function GM(e,i,r,l,h,m,M,C,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yt(0),this.hiddenUpdates=Yt(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Wv(e,i,r,l,h,m,M,C,H,nt,gt,Mt){return e=new GM(e,i,r,M,H,nt,gt,Mt,C),i=1,m===!0&&(i|=24),m=xi(3,null,null,i),e.current=m,m.stateNode=e,i=wh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},Nh(m),e}function Xv(e){return e?(e=gr,e):gr}function qv(e,i,r,l,h,m){h=Xv(h),l.context===null?l.context=h:l.pendingContext=h,l=ns(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=is(e,l,i),r!==null&&(ci(r,e,i),Bo(r,e,i))}function Yv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function jf(e,i){Yv(e,i),(e=e.alternate)&&Yv(e,i)}function Zv(e){if(e.tag===13||e.tag===31){var i=Is(e,67108864);i!==null&&ci(i,e,67108864),jf(e,67108864)}}function Kv(e){if(e.tag===13||e.tag===31){var i=Ei();i=yo(i);var r=Is(e,i);r!==null&&ci(r,e,i),jf(e,i)}}var Vc=!0;function VM(e,i,r,l){var h=B.T;B.T=null;var m=z.p;try{z.p=2,Qf(e,i,r,l)}finally{z.p=m,B.T=h}}function kM(e,i,r,l){var h=B.T;B.T=null;var m=z.p;try{z.p=8,Qf(e,i,r,l)}finally{z.p=m,B.T=h}}function Qf(e,i,r,l){if(Vc){var h=$f(l);if(h===null)Ff(e,i,l,kc,r),Qv(e,l);else if(XM(h,e,i,r,l))l.stopPropagation();else if(Qv(e,l),i&4&&-1<WM.indexOf(e)){for(;h!==null;){var m=va(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Ct(m.pendingLanes);if(M!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var H=1<<31-Ht(M);C.entanglements[1]|=H,M&=~H}oa(m),(He&6)===0&&(Tc=Te()+500,tl(0))}}break;case 31:case 13:C=Is(m,2),C!==null&&ci(C,m,2),wc(),jf(m,2)}if(m=$f(l),m===null&&Ff(e,i,l,kc,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else Ff(e,i,l,null,r)}}function $f(e){return e=Ju(e),Jf(e)}var kc=null;function Jf(e){if(kc=null,e=ga(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return kc=e,null}function jv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(me()){case I:return 2;case E:return 8;case $:case st:return 32;case ht:return 268435456;default:return 32}default:return 32}}var td=!1,ps=null,ms=null,gs=null,ol=new Map,ll=new Map,vs=[],WM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qv(e,i){switch(e){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":ol.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(i.pointerId)}}function cl(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=va(i),i!==null&&Zv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function XM(e,i,r,l,h){switch(i){case"focusin":return ps=cl(ps,e,i,r,l,h),!0;case"dragenter":return ms=cl(ms,e,i,r,l,h),!0;case"mouseover":return gs=cl(gs,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return ol.set(m,cl(ol.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,ll.set(m,cl(ll.get(m)||null,e,i,r,l,h)),!0}return!1}function $v(e){var i=ga(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,cr(e.priority,function(){Kv(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,cr(e.priority,function(){Kv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=$f(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);$u=l,r.target.dispatchEvent(l),$u=null}else return i=va(r),i!==null&&Zv(i),e.blockedOn=r,!1;i.shift()}return!0}function Jv(e,i,r){Wc(e)&&r.delete(i)}function qM(){td=!1,ps!==null&&Wc(ps)&&(ps=null),ms!==null&&Wc(ms)&&(ms=null),gs!==null&&Wc(gs)&&(gs=null),ol.forEach(Jv),ll.forEach(Jv)}function Xc(e,i){e.blockedOn===i&&(e.blockedOn=null,td||(td=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,qM)))}var qc=null;function t_(e){qc!==e&&(qc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){qc===e&&(qc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Jf(l||r)===null)continue;break}var m=va(r);m!==null&&(e.splice(i,3),i-=3,Qh(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function Hr(e){function i(H){return Xc(H,e)}ps!==null&&Xc(ps,e),ms!==null&&Xc(ms,e),gs!==null&&Xc(gs,e),ol.forEach(i),ll.forEach(i);for(var r=0;r<vs.length;r++){var l=vs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<vs.length&&(r=vs[0],r.blockedOn===null);)$v(r),r.blockedOn===null&&vs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],M=h[Bn]||null;if(typeof m=="function")M||t_(r);else if(M){var C=null;if(m&&m.hasAttribute("formAction")){if(h=m,M=m[Bn]||null)C=M.formAction;else if(Jf(h)!==null)continue}else C=M.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),t_(r)}}}function e_(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(M){return h=M})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function ed(e){this._internalRoot=e}Yc.prototype.render=ed.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=Ei();qv(r,l,e,i,null,null)},Yc.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;qv(e.current,2,null,e,null,null),wc(),i[ii]=null}};function Yc(e){this._internalRoot=e}Yc.prototype.unstable_scheduleHydration=function(e){if(e){var i=So();e={blockedOn:null,target:e,priority:i};for(var r=0;r<vs.length&&i!==0&&i<vs[r].priority;r++);vs.splice(r,0,e),r===0&&$v(e)}};var n_=t.version;if(n_!=="19.2.7")throw Error(a(527,n_,"19.2.7"));z.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var YM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{dt=Zc.inject(YM),pt=Zc}catch{}}return hl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",h=cg,m=ug,M=hg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=Wv(e,1,!1,null,null,r,l,null,h,m,M,e_),e[ii]=i.current,If(e),new ed(i)},hl.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,h="",m=cg,M=ug,C=hg,H=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(H=r.formState)),i=Wv(e,1,!0,i,r??null,l,h,H,m,M,C,e_),i.context=Xv(null),r=i.current,l=Ei(),l=yo(l),h=ns(l),h.callback=null,is(r,h,l),r=l,i.current.lanes=r,kt(i,r),oa(i),e[ii]=i.current,If(e),new Yc(i)},hl.version="19.2.7",hl}var f_;function iS(){if(f_)return id.exports;f_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),id.exports=nS(),id.exports}var aS=iS(),Se=X0();const q0="185",Va={ROTATE:0,DOLLY:1,PAN:2},so={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sS=0,d_=1,rS=2,wu=1,oS=2,bl=3,ws=0,ei=1,ji=2,ta=0,ro=1,Zd=2,p_=3,m_=4,lS=5,tr=100,cS=101,uS=102,hS=103,fS=104,dS=200,pS=201,mS=202,gS=203,Kd=204,jd=205,vS=206,_S=207,xS=208,yS=209,MS=210,SS=211,bS=212,ES=213,TS=214,Qd=0,$d=1,Jd=2,co=3,t0=4,e0=5,n0=6,i0=7,Y0=0,AS=1,wS=2,da=0,Z0=1,K0=2,j0=3,Wu=4,Q0=5,uo=6,Xu=7,q1=300,ar=301,ho=302,ld=303,cd=304,qu=306,Rl=1e3,ha=1001,a0=1002,Dn=1003,RS=1004,Kc=1005,On=1006,ud=1007,nr=1008,Ri=1009,Y1=1010,Z1=1011,Cl=1012,$0=1013,pa=1014,$i=1015,ni=1016,J0=1017,tp=1018,Dl=1020,K1=35902,j1=35899,Q1=1021,$1=1022,Ji=1023,Wa=1026,ir=1027,ep=1028,np=1029,sr=1030,ip=1031,ap=1033,Ru=33776,Cu=33777,Du=33778,Nu=33779,s0=35840,r0=35841,o0=35842,l0=35843,c0=36196,u0=37492,h0=37496,f0=37488,d0=37489,Ou=37490,p0=37491,m0=37808,g0=37809,v0=37810,_0=37811,x0=37812,y0=37813,M0=37814,S0=37815,b0=37816,E0=37817,T0=37818,A0=37819,w0=37820,R0=37821,C0=36492,D0=36494,N0=36495,U0=36283,L0=36284,Iu=36285,P0=36286,CS=3200,DS=3201,Fu=0,NS=1,Gi="",hi="srgb",Bu="srgb-linear",zu="linear",ke="srgb",Gr=7680,g_=519,US=512,LS=513,PS=514,sp=515,OS=516,IS=517,rp=518,FS=519,v_=35044,__=35048,x_="300 es",fa=2e3,Nl=2001;function BS(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zS(){const s=Hu("canvas");return s.style.display="block",s}const y_={};function M_(...s){const t="THREE."+s.shift();console.log(t,...s)}function J1(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function oe(...s){s=J1(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...s)}}function pe(...s){s=J1(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...s)}}function oo(...s){const t=s.join(" ");t in y_||(y_[t]=!0,oe(...s))}function HS(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const GS={[Qd]:$d,[Jd]:n0,[t0]:i0,[co]:e0,[$d]:Qd,[n0]:Jd,[i0]:t0,[e0]:co};class Rs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let S_=1234567;const Tl=Math.PI/180,Ul=180/Math.PI;function go(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[n&63|128]+Zn[n>>8&255]+"-"+Zn[n>>16&255]+Zn[n>>24&255]+Zn[a&255]+Zn[a>>8&255]+Zn[a>>16&255]+Zn[a>>24&255]).toLowerCase()}function Ae(s,t,n){return Math.max(t,Math.min(n,s))}function op(s,t){return(s%t+t)%t}function VS(s,t,n,a,o){return a+(s-t)*(o-a)/(n-t)}function kS(s,t,n){return s!==t?(n-s)/(t-s):0}function Al(s,t,n){return(1-n)*s+n*t}function WS(s,t,n,a){return Al(s,t,1-Math.exp(-n*a))}function XS(s,t=1){return t-Math.abs(op(s,t*2)-t)}function qS(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*(3-2*s))}function YS(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*s*(s*(s*6-15)+10))}function ZS(s,t){return s+Math.floor(Math.random()*(t-s+1))}function KS(s,t){return s+Math.random()*(t-s)}function jS(s){return s*(.5-Math.random())}function QS(s){s!==void 0&&(S_=s);let t=S_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $S(s){return s*Tl}function JS(s){return s*Ul}function t2(s){return(s&s-1)===0&&s!==0}function e2(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function n2(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function i2(s,t,n,a,o){const c=Math.cos,u=Math.sin,f=c(n/2),p=u(n/2),d=c((t+a)/2),g=u((t+a)/2),_=c((t-a)/2),v=u((t-a)/2),x=c((a-t)/2),b=u((a-t)/2);switch(o){case"XYX":s.set(f*g,p*_,p*v,f*d);break;case"YZY":s.set(p*v,f*g,p*_,f*d);break;case"ZXZ":s.set(p*_,p*v,f*g,f*d);break;case"XZX":s.set(f*g,p*b,p*x,f*d);break;case"YXY":s.set(p*x,f*g,p*b,f*d);break;case"ZYZ":s.set(p*b,p*x,f*g,f*d);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ao(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tx={DEG2RAD:Tl,RAD2DEG:Ul,generateUUID:go,clamp:Ae,euclideanModulo:op,mapLinear:VS,inverseLerp:kS,lerp:Al,damp:WS,pingpong:XS,smoothstep:qS,smootherstep:YS,randInt:ZS,randFloat:KS,randFloatSpread:jS,seededRandom:QS,degToRad:$S,radToDeg:JS,isPowerOfTwo:t2,ceilPowerOfTwo:e2,floorPowerOfTwo:n2,setQuaternionFromProperEuler:i2,normalize:Jn,denormalize:ao},yp=class yp{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ae(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ae(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yp.prototype.isVector2=!0;let jt=yp;class ma{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,f){let p=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3],v=c[u+0],x=c[u+1],b=c[u+2],A=c[u+3];if(_!==A||p!==v||d!==x||g!==b){let S=p*v+d*x+g*b+_*A;S<0&&(v=-v,x=-x,b=-b,A=-A,S=-S);let y=1-f;if(S<.9995){const N=Math.acos(S),L=Math.sin(N);y=Math.sin(y*N)/L,f=Math.sin(f*N)/L,p=p*y+v*f,d=d*y+x*f,g=g*y+b*f,_=_*y+A*f}else{p=p*y+v*f,d=d*y+x*f,g=g*y+b*f,_=_*y+A*f;const N=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=N,d*=N,g*=N,_*=N}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,c,u){const f=a[o],p=a[o+1],d=a[o+2],g=a[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return t[n]=f*b+g*_+p*x-d*v,t[n+1]=p*b+g*v+d*_-f*x,t[n+2]=d*b+g*x+f*v-p*_,t[n+3]=g*b-f*_-p*v-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(a/2),g=f(o/2),_=f(c/2),v=p(a/2),x=p(o/2),b=p(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"YZX":this._x=v*g*_+d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_-v*x*b;break;case"XZY":this._x=v*g*_-d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_+v*x*b;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],d=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(a>f&&a>_){const x=2*Math.sqrt(1+a-f-_);this._w=(g-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(f>_){const x=2*Math.sqrt(1+f-a-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+_-a-f);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,f=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+u*f+o*d-c*p,this._y=o*g+u*p+c*f-a*d,this._z=c*g+u*d+a*p-o*f,this._w=u*g-a*f-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,o=-o,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mp=class Mp{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(b_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(b_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*o-f*a),g=2*(f*n-c*o),_=2*(c*a-u*n);return this.x=n+p*d+u*_-f*g,this.y=a+p*g+f*d-c*_,this.z=o+p*_+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ae(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-a*p,this.z=a*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return hd.copy(this).projectOnVector(t),this.sub(hd)}reflect(t){return this.sub(hd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ae(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mp.prototype.isVector3=!0;let Z=Mp;const hd=new Z,b_=new ma,Sp=class Sp{constructor(t,n,a,o,c,u,f,p,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,p,d)}set(t,n,a,o,c,u,f,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],g=a[4],_=a[7],v=a[2],x=a[5],b=a[8],A=o[0],S=o[3],y=o[6],N=o[1],L=o[4],w=o[7],F=o[2],D=o[5],O=o[8];return c[0]=u*A+f*N+p*F,c[3]=u*S+f*L+p*D,c[6]=u*y+f*w+p*O,c[1]=d*A+g*N+_*F,c[4]=d*S+g*L+_*D,c[7]=d*y+g*w+_*O,c[2]=v*A+x*N+b*F,c[5]=v*S+x*L+b*D,c[8]=v*y+x*w+b*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8];return n*u*g-n*f*d-a*c*g+a*f*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],_=g*u-f*d,v=f*p-g*c,x=d*c-u*p,b=n*_+a*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=_*A,t[1]=(o*d-g*a)*A,t[2]=(f*a-o*u)*A,t[3]=v*A,t[4]=(g*n-o*p)*A,t[5]=(o*c-f*n)*A,t[6]=x*A,t[7]=(a*p-d*n)*A,t[8]=(u*n-a*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,f){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*f)+u+t,-o*d,o*p,-o*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fd.makeScale(t,n)),this}rotate(t){return oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fd.makeRotation(-t)),this}translate(t,n){return oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sp.prototype.isMatrix3=!0;let he=Sp;const fd=new he,E_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a2(){const s={enabled:!0,workingColorSpace:Bu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ke&&(o.r=ka(o.r),o.g=ka(o.g),o.b=ka(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ke&&(o.r=lo(o.r),o.g=lo(o.g),o.b=lo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Gi?zu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Bu]:{primaries:t,whitePoint:a,transfer:zu,toXYZ:E_,fromXYZ:T_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:a,transfer:ke,toXYZ:E_,fromXYZ:T_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Pe=a2();function ka(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vr;class s2{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Vr===void 0&&(Vr=Hu("canvas")),Vr.width=t.width,Vr.height=t.height;const o=Vr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Vr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Hu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ka(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ka(n[a]/255)*255):n[a]=ka(n[a]);return{data:n,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let r2=0;class lp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r2++}),this.uuid=go(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(dd(o[u].image)):c.push(dd(o[u]))}else c=dd(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function dd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?s2.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let o2=0;const pd=new Z;class jn extends Rs{constructor(t=jn.DEFAULT_IMAGE,n=jn.DEFAULT_MAPPING,a=ha,o=ha,c=On,u=nr,f=Ji,p=Ri,d=jn.DEFAULT_ANISOTROPY,g=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=go(),this.name="",this.source=new lp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==q1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rl:t.x=t.x-Math.floor(t.x);break;case ha:t.x=t.x<0?0:1;break;case a0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rl:t.y=t.y-Math.floor(t.y);break;case ha:t.y=t.y<0?0:1;break;case a0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=q1;jn.DEFAULT_ANISOTROPY=1;const bp=class bp{constructor(t=0,n=0,a=0,o=1){this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const p=t.elements,d=p[0],g=p[4],_=p[8],v=p[1],x=p[5],b=p[9],A=p[2],S=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(b+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,w=(x+1)/2,F=(y+1)/2,D=(g+v)/4,O=(_+A)/4,T=(b+S)/4;return L>w&&L>F?L<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(L),o=D/a,c=O/a):w>F?w<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),a=D/o,c=T/o):F<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),a=O/c,o=T/c),this.set(a,o,c,n),this}let N=Math.sqrt((S-b)*(S-b)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(N)<.001&&(N=1),this.x=(S-b)/N,this.y=(_-A)/N,this.z=(v-g)/N,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this.w=Ae(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this.w=Ae(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ae(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bp.prototype.isVector4=!0;let dn=bp;class l2 extends Rs{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new dn(0,0,t,n),this.scissorTest=!1,this.viewport=new dn(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},c=new jn(o),u=a.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new lp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends l2{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class ex extends jn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class c2 extends jn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ku=class ku{constructor(t,n,a,o,c,u,f,p,d,g,_,v,x,b,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,p,d,g,_,v,x,b,A,S)}set(t,n,a,o,c,u,f,p,d,g,_,v,x,b,A,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=f,y[13]=p,y[2]=d,y[6]=g,y[10]=_,y[14]=v,y[3]=x,y[7]=b,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ku().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,a=t.elements,o=1/kr.setFromMatrixColumn(t,0).length(),c=1/kr.setFromMatrixColumn(t,1).length(),u=1/kr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,x=u*_,b=f*g,A=f*_;n[0]=p*g,n[4]=-p*_,n[8]=d,n[1]=x+b*d,n[5]=v-A*d,n[9]=-f*p,n[2]=A-v*d,n[6]=b+x*d,n[10]=u*p}else if(t.order==="YXZ"){const v=p*g,x=p*_,b=d*g,A=d*_;n[0]=v+A*f,n[4]=b*f-x,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=x*f-b,n[6]=A+v*f,n[10]=u*p}else if(t.order==="ZXY"){const v=p*g,x=p*_,b=d*g,A=d*_;n[0]=v-A*f,n[4]=-u*_,n[8]=b+x*f,n[1]=x+b*f,n[5]=u*g,n[9]=A-v*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const v=u*g,x=u*_,b=f*g,A=f*_;n[0]=p*g,n[4]=b*d-x,n[8]=v*d+A,n[1]=p*_,n[5]=A*d+v,n[9]=x*d-b,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,x=u*d,b=f*p,A=f*d;n[0]=p*g,n[4]=A-v*_,n[8]=b*_+x,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-d*g,n[6]=x*_+b,n[10]=v-A*_}else if(t.order==="XZY"){const v=u*p,x=u*d,b=f*p,A=f*d;n[0]=p*g,n[4]=-_,n[8]=d*g,n[1]=v*_+A,n[5]=u*g,n[9]=x*_-b,n[2]=b*_-x,n[6]=f*g,n[10]=A*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(u2,t,h2)}lookAt(t,n,a){const o=this.elements;return Ti.subVectors(t,n),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),xs.crossVectors(a,Ti),xs.lengthSq()===0&&(Math.abs(a.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),xs.crossVectors(a,Ti)),xs.normalize(),jc.crossVectors(Ti,xs),o[0]=xs.x,o[4]=jc.x,o[8]=Ti.x,o[1]=xs.y,o[5]=jc.y,o[9]=Ti.y,o[2]=xs.z,o[6]=jc.z,o[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],g=a[1],_=a[5],v=a[9],x=a[13],b=a[2],A=a[6],S=a[10],y=a[14],N=a[3],L=a[7],w=a[11],F=a[15],D=o[0],O=o[4],T=o[8],U=o[12],k=o[1],G=o[5],q=o[9],ct=o[13],ft=o[2],j=o[6],B=o[10],z=o[14],Q=o[3],ut=o[7],Et=o[11],P=o[15];return c[0]=u*D+f*k+p*ft+d*Q,c[4]=u*O+f*G+p*j+d*ut,c[8]=u*T+f*q+p*B+d*Et,c[12]=u*U+f*ct+p*z+d*P,c[1]=g*D+_*k+v*ft+x*Q,c[5]=g*O+_*G+v*j+x*ut,c[9]=g*T+_*q+v*B+x*Et,c[13]=g*U+_*ct+v*z+x*P,c[2]=b*D+A*k+S*ft+y*Q,c[6]=b*O+A*G+S*j+y*ut,c[10]=b*T+A*q+S*B+y*Et,c[14]=b*U+A*ct+S*z+y*P,c[3]=N*D+L*k+w*ft+F*Q,c[7]=N*O+L*G+w*j+F*ut,c[11]=N*T+L*q+w*B+F*Et,c[15]=N*U+L*ct+w*z+F*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],f=t[5],p=t[9],d=t[13],g=t[2],_=t[6],v=t[10],x=t[14],b=t[3],A=t[7],S=t[11],y=t[15],N=p*x-d*v,L=f*x-d*_,w=f*v-p*_,F=u*x-d*g,D=u*v-p*g,O=u*_-f*g;return n*(A*N-S*L+y*w)-a*(b*N-S*F+y*D)+o*(b*L-A*F+y*O)-c*(b*w-A*D+S*O)}determinantAffine(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[1],u=t[5],f=t[9],p=t[2],d=t[6],g=t[10];return n*(u*g-f*d)-a*(c*g-f*p)+o*(c*d-u*p)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],g=t[8],_=t[9],v=t[10],x=t[11],b=t[12],A=t[13],S=t[14],y=t[15],N=n*f-a*u,L=n*p-o*u,w=n*d-c*u,F=a*p-o*f,D=a*d-c*f,O=o*d-c*p,T=g*A-_*b,U=g*S-v*b,k=g*y-x*b,G=_*S-v*A,q=_*y-x*A,ct=v*y-x*S,ft=N*ct-L*q+w*G+F*k-D*U+O*T;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ft;return t[0]=(f*ct-p*q+d*G)*j,t[1]=(o*q-a*ct-c*G)*j,t[2]=(A*O-S*D+y*F)*j,t[3]=(v*D-_*O-x*F)*j,t[4]=(p*k-u*ct-d*U)*j,t[5]=(n*ct-o*k+c*U)*j,t[6]=(S*w-b*O-y*L)*j,t[7]=(g*O-v*w+x*L)*j,t[8]=(u*q-f*k+d*T)*j,t[9]=(a*k-n*q-c*T)*j,t[10]=(b*D-A*w+y*N)*j,t[11]=(_*w-g*D-x*N)*j,t[12]=(f*U-u*G-p*T)*j,t[13]=(n*G-a*U+o*T)*j,t[14]=(A*L-b*F-S*N)*j,t[15]=(g*F-_*L+v*N)*j,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,f=t.y,p=t.z,d=c*u,g=c*f;return this.set(d*u+a,d*f-o*p,d*p+o*f,0,d*f+o*p,g*f+a,g*p-o*u,0,d*p-o*f,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,d=c+c,g=u+u,_=f+f,v=c*d,x=c*g,b=c*_,A=u*g,S=u*_,y=f*_,N=p*d,L=p*g,w=p*_,F=a.x,D=a.y,O=a.z;return o[0]=(1-(A+y))*F,o[1]=(x+w)*F,o[2]=(b-L)*F,o[3]=0,o[4]=(x-w)*D,o[5]=(1-(v+y))*D,o[6]=(S+N)*D,o[7]=0,o[8]=(b+L)*O,o[9]=(S-N)*O,o[10]=(1-(v+A))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=kr.set(o[0],o[1],o[2]).length();const f=kr.set(o[4],o[5],o[6]).length(),p=kr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Yi.copy(this);const d=1/u,g=1/f,_=1/p;return Yi.elements[0]*=d,Yi.elements[1]*=d,Yi.elements[2]*=d,Yi.elements[4]*=g,Yi.elements[5]*=g,Yi.elements[6]*=g,Yi.elements[8]*=_,Yi.elements[9]*=_,Yi.elements[10]*=_,n.setFromRotationMatrix(Yi),a.x=u,a.y=f,a.z=p,this}makePerspective(t,n,a,o,c,u,f=fa,p=!1){const d=this.elements,g=2*c/(n-t),_=2*c/(a-o),v=(n+t)/(n-t),x=(a+o)/(a-o);let b,A;if(p)b=c/(u-c),A=u*c/(u-c);else if(f===fa)b=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(f===Nl)b=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,c,u,f=fa,p=!1){const d=this.elements,g=2/(n-t),_=2/(a-o),v=-(n+t)/(n-t),x=-(a+o)/(a-o);let b,A;if(p)b=1/(u-c),A=u/(u-c);else if(f===fa)b=-2/(u-c),A=-(u+c)/(u-c);else if(f===Nl)b=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};ku.prototype.isMatrix4=!0;let an=ku;const kr=new Z,Yi=new an,u2=new Z(0,0,0),h2=new Z(1,1,1),xs=new Z,jc=new Z,Ti=new Z,A_=new an,w_=new ma;class Xa{constructor(t=0,n=0,a=0,o=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],p=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return A_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(A_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return w_.setFromEuler(this),this.setFromQuaternion(w_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class cp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let f2=0;const R_=new Z,Wr=new ma,Oa=new an,Qc=new Z,fl=new Z,d2=new Z,p2=new ma,C_=new Z(1,0,0),D_=new Z(0,1,0),N_=new Z(0,0,1),U_={type:"added"},m2={type:"removed"},Xr={type:"childadded",child:null},md={type:"childremoved",child:null};class Fn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f2++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new Z,n=new Xa,a=new ma,o=new Z(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new he}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Wr.setFromAxisAngle(t,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(t,n){return Wr.setFromAxisAngle(t,n),this.quaternion.premultiply(Wr),this}rotateX(t){return this.rotateOnAxis(C_,t)}rotateY(t){return this.rotateOnAxis(D_,t)}rotateZ(t){return this.rotateOnAxis(N_,t)}translateOnAxis(t,n){return R_.copy(t).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(C_,t)}translateY(t){return this.translateOnAxis(D_,t)}translateZ(t){return this.translateOnAxis(N_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Qc.copy(t):Qc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(fl,Qc,this.up):Oa.lookAt(Qc,fl,this.up),this.quaternion.setFromRotationMatrix(Oa),o&&(Oa.extractRotation(o.matrixWorld),Wr.setFromRotationMatrix(Oa),this.quaternion.premultiply(Wr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(U_),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(m2),md.child=t,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(U_),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,t,d2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,p2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n,a=!1){const o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,f=c.length;u<f;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(c(t.materials,this.material[p]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),x=u(t.animations),b=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(f){const p=[];for(const d in f){const g=f[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new Z(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $c extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g2={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $c,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $c,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $c,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const A of t.hand.values()){const S=n.getJointPose(A,a),y=this._getHandJoint(d,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;d.inputState.pinching&&v>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));f!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(g2)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new $c;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function vd(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class se{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Pe.workingColorSpace){return this.r=t,this.g=n,this.b=a,Pe.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Pe.workingColorSpace){if(t=op(t,1),n=Ae(n,0,1),a=Ae(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=vd(u,c,t+1/3),this.g=vd(u,c,t),this.b=vd(u,c,t-1/3)}return Pe.colorSpaceToWorking(this,o),this}setStyle(t,n=hi){function a(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:oe("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=hi){const a=nx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ka(t.r),this.g=ka(t.g),this.b=ka(t.b),this}copyLinearToSRGB(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Pe.workingToColorSpace(Kn.copy(this),t),Math.round(Ae(Kn.r*255,0,255))*65536+Math.round(Ae(Kn.g*255,0,255))*256+Math.round(Ae(Kn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Pe.workingColorSpace){Pe.workingToColorSpace(Kn.copy(this),n);const a=Kn.r,o=Kn.g,c=Kn.b,u=Math.max(a,o,c),f=Math.min(a,o,c);let p,d;const g=(f+u)/2;if(f===u)p=0,d=0;else{const _=u-f;switch(d=g<=.5?_/(u+f):_/(2-u-f),u){case a:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-a)/_+2;break;case c:p=(a-o)/_+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Pe.workingColorSpace){return Pe.workingToColorSpace(Kn.copy(this),n),t.r=Kn.r,t.g=Kn.g,t.b=Kn.b,t}getStyle(t=hi){Pe.workingToColorSpace(Kn.copy(this),t);const n=Kn.r,a=Kn.g,o=Kn.b;return t!==hi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(ys),this.setHSL(ys.h+t,ys.s+n,ys.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ys),t.getHSL(Jc);const a=Al(ys.h,Jc.h,n),o=Al(ys.s,Jc.s,n),c=Al(ys.l,Jc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new se;se.NAMES=nx;class ix extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xa,this.environmentIntensity=1,this.environmentRotation=new Xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zi=new Z,Ia=new Z,_d=new Z,Fa=new Z,qr=new Z,Yr=new Z,L_=new Z,xd=new Z,yd=new Z,Md=new Z,Sd=new dn,bd=new dn,Ed=new dn;class Qi{constructor(t=new Z,n=new Z,a=new Z){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Zi.subVectors(t,n),o.cross(Zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Zi.subVectors(o,n),Ia.subVectors(a,n),_d.subVectors(t,n);const u=Zi.dot(Zi),f=Zi.dot(Ia),p=Zi.dot(_d),d=Ia.dot(Ia),g=Ia.dot(_d),_=u*d-f*f;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*p-f*g)*v,b=(u*g-f*p)*v;return c.set(1-x-b,b,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Fa)===null?!1:Fa.x>=0&&Fa.y>=0&&Fa.x+Fa.y<=1}static getInterpolation(t,n,a,o,c,u,f,p){return this.getBarycoord(t,n,a,o,Fa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Fa.x),p.addScaledVector(u,Fa.y),p.addScaledVector(f,Fa.z),p)}static getInterpolatedAttribute(t,n,a,o,c,u){return Sd.setScalar(0),bd.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(t,n),bd.fromBufferAttribute(t,a),Ed.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Sd,c.x),u.addScaledVector(bd,c.y),u.addScaledVector(Ed,c.z),u}static isFrontFacing(t,n,a,o){return Zi.subVectors(a,n),Ia.subVectors(t,n),Zi.cross(Ia).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zi.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Zi.cross(Ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Qi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Qi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,f;qr.subVectors(o,a),Yr.subVectors(c,a),xd.subVectors(t,a);const p=qr.dot(xd),d=Yr.dot(xd);if(p<=0&&d<=0)return n.copy(a);yd.subVectors(t,o);const g=qr.dot(yd),_=Yr.dot(yd);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*d;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(qr,u);Md.subVectors(t,c);const x=qr.dot(Md),b=Yr.dot(Md);if(b>=0&&x<=b)return n.copy(c);const A=x*d-p*b;if(A<=0&&d>=0&&b<=0)return f=d/(d-b),n.copy(a).addScaledVector(Yr,f);const S=g*b-x*_;if(S<=0&&_-g>=0&&x-b>=0)return L_.subVectors(c,o),f=(_-g)/(_-g+(x-b)),n.copy(o).addScaledVector(L_,f);const y=1/(S+A+v);return u=A*y,f=v*y,n.copy(a).addScaledVector(qr,u).addScaledVector(Yr,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class or{constructor(t=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Ki):Ki.fromBufferAttribute(c,u),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),tu.copy(a.boundingBox)),tu.applyMatrix4(t.matrixWorld),this.union(tu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dl),eu.subVectors(this.max,dl),Zr.subVectors(t.a,dl),Kr.subVectors(t.b,dl),jr.subVectors(t.c,dl),Ms.subVectors(Kr,Zr),Ss.subVectors(jr,Kr),Ks.subVectors(Zr,jr);let n=[0,-Ms.z,Ms.y,0,-Ss.z,Ss.y,0,-Ks.z,Ks.y,Ms.z,0,-Ms.x,Ss.z,0,-Ss.x,Ks.z,0,-Ks.x,-Ms.y,Ms.x,0,-Ss.y,Ss.x,0,-Ks.y,Ks.x,0];return!Td(n,Zr,Kr,jr,eu)||(n=[1,0,0,0,1,0,0,0,1],!Td(n,Zr,Kr,jr,eu))?!1:(nu.crossVectors(Ms,Ss),n=[nu.x,nu.y,nu.z],Td(n,Zr,Kr,jr,eu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ba=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ki=new Z,tu=new or,Zr=new Z,Kr=new Z,jr=new Z,Ms=new Z,Ss=new Z,Ks=new Z,dl=new Z,eu=new Z,nu=new Z,js=new Z;function Td(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){js.fromArray(s,c);const f=o.x*Math.abs(js.x)+o.y*Math.abs(js.y)+o.z*Math.abs(js.z),p=t.dot(js),d=n.dot(js),g=a.dot(js);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>f)return!1}return!0}const En=new Z,iu=new jt;let v2=0;class Ni extends Rs{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=v_,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)iu.fromBufferAttribute(this,n),iu.applyMatrix3(t),this.setXY(n,iu.x,iu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyMatrix3(t),this.setXYZ(n,En.x,En.y,En.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(t),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(t),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.transformDirection(t),this.setXYZ(n,En.x,En.y,En.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=ao(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Jn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ao(n,this.array)),n}setX(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ao(n,this.array)),n}setY(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ao(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ao(n,this.array)),n}setW(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),o=Jn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),o=Jn(o,this.array),c=Jn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==v_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class ax extends Ni{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class sx extends Ni{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class di extends Ni{constructor(t,n,a){super(new Float32Array(t),n,a)}}const _2=new or,pl=new Z,Ad=new Z;class Il{constructor(t=new Z,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):_2.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pl.subVectors(t,this.center);const n=pl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(pl,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pl.copy(t.center).add(Ad)),this.expandByPoint(pl.copy(t.center).sub(Ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let x2=0;const Hi=new an,wd=new Fn,Qr=new Z,Ai=new or,ml=new or,Pn=new Z;class ea extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x2++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(BS(t)?sx:ax)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new he().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hi.makeRotationFromQuaternion(t),this.applyMatrix4(Hi),this}rotateX(t){return Hi.makeRotationX(t),this.applyMatrix4(Hi),this}rotateY(t){return Hi.makeRotationY(t),this.applyMatrix4(Hi),this}rotateZ(t){return Hi.makeRotationZ(t),this.applyMatrix4(Hi),this}translate(t,n,a){return Hi.makeTranslation(t,n,a),this.applyMatrix4(Hi),this}scale(t,n,a){return Hi.makeScale(t,n,a),this.applyMatrix4(Hi),this}lookAt(t){return wd.lookAt(t),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new di(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const a=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];ml.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(Ai.min,ml.min),Ai.expandByPoint(Pn),Pn.addVectors(Ai.max,ml.max),Ai.expandByPoint(Pn)):(Ai.expandByPoint(ml.min),Ai.expandByPoint(ml.max))}Ai.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Pn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Pn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)Pn.fromBufferAttribute(f,d),p&&(Qr.fromBufferAttribute(t,d),Pn.add(Qr)),o=Math.max(o,a.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Ni(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const f=[],p=[];for(let T=0;T<a.count;T++)f[T]=new Z,p[T]=new Z;const d=new Z,g=new Z,_=new Z,v=new jt,x=new jt,b=new jt,A=new Z,S=new Z;function y(T,U,k){d.fromBufferAttribute(a,T),g.fromBufferAttribute(a,U),_.fromBufferAttribute(a,k),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,U),b.fromBufferAttribute(c,k),g.sub(d),_.sub(d),x.sub(v),b.sub(v);const G=1/(x.x*b.y-b.x*x.y);isFinite(G)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(G),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(G),f[T].add(A),f[U].add(A),f[k].add(A),p[T].add(S),p[U].add(S),p[k].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let T=0,U=N.length;T<U;++T){const k=N[T],G=k.start,q=k.count;for(let ct=G,ft=G+q;ct<ft;ct+=3)y(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const L=new Z,w=new Z,F=new Z,D=new Z;function O(T){F.fromBufferAttribute(o,T),D.copy(F);const U=f[T];L.copy(U),L.sub(F.multiplyScalar(F.dot(U))).normalize(),w.crossVectors(D,U);const G=w.dot(p[T])<0?-1:1;u.setXYZW(T,L.x,L.y,L.z,G)}for(let T=0,U=N.length;T<U;++T){const k=N[T],G=k.start,q=k.count;for(let ct=G,ft=G+q;ct<ft;ct+=3)O(t.getX(ct+0)),O(t.getX(ct+1)),O(t.getX(ct+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new Z,c=new Z,u=new Z,f=new Z,p=new Z,d=new Z,g=new Z,_=new Z;if(t)for(let v=0,x=t.count;v<x;v+=3){const b=t.getX(v+0),A=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),f.fromBufferAttribute(a,b),p.fromBufferAttribute(a,A),d.fromBufferAttribute(a,S),f.add(g),p.add(g),d.add(g),a.setXYZ(b,f.x,f.y,f.z),a.setXYZ(A,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Pn.fromBufferAttribute(t,n),Pn.normalize(),t.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(f,p){const d=f.array,g=f.itemSize,_=f.normalized,v=new d.constructor(p.length*g);let x=0,b=0;for(let A=0,S=p.length;A<S;A++){f.isInterleavedBufferAttribute?x=p[A]*f.data.stride+f.offset:x=p[A]*g;for(let y=0;y<g;y++)v[b++]=d[x++]}return new Ni(v,g,_)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ea,a=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=t(p,a);n.setAttribute(f,d)}const c=this.morphAttributes;for(const f in c){const p=[],d=c[f];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=t(v,a);p.push(x)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let y2=0;class vo extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y2++}),this.uuid=go(),this.name="",this.type="Material",this.blending=ro,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=jd,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){oe(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(a.blending=this.blending),this.side!==ws&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Kd&&(a.blendSrc=this.blendSrc),this.blendDst!==jd&&(a.blendDst=this.blendDst),this.blendEquation!==tr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new jt().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const za=new Z,Rd=new Z,au=new Z,bs=new Z,Cd=new Z,su=new Z,Dd=new Z;class up{constructor(t=new Z,n=new Z(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,za)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=za.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(za.copy(this.origin).addScaledVector(this.direction,n),za.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Rd.copy(t).add(n).multiplyScalar(.5),au.copy(n).sub(t).normalize(),bs.copy(this.origin).sub(Rd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(au),f=bs.dot(this.direction),p=-bs.dot(au),d=bs.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*p-f,v=u*f-p,b=c*g,_>=0)if(v>=-b)if(v<=b){const A=1/g;_*=A,v*=A,x=_*(_+u*v+2*f)+v*(u*_+v+2*p)+d}else v=c,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*p)+d;else v=-c,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*p)+d;else v<=-b?(_=Math.max(0,-(-u*c+f)),v=_>0?-c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+d):v<=b?(_=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+d):(_=Math.max(0,-(u*c+f)),v=_>0?c:Math.min(Math.max(-c,-p),c),x=-_*_+v*(v+2*p)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Rd).addScaledVector(au,v),x}intersectSphere(t,n){za.subVectors(t.center,this.origin);const a=za.dot(this.direction),o=za.dot(za)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,f,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(f=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||f>o)||((f>a||a!==a)&&(a=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,za)!==null}intersectTriangle(t,n,a,o,c){Cd.subVectors(n,t),su.subVectors(a,t),Dd.crossVectors(Cd,su);let u=this.direction.dot(Dd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;bs.subVectors(this.origin,t);const p=f*this.direction.dot(su.crossVectors(bs,su));if(p<0)return null;const d=f*this.direction.dot(Cd.cross(bs));if(d<0||p+d>u)return null;const g=-f*bs.dot(Dd);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hp extends vo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=Y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const P_=new an,Qs=new up,ru=new Il,O_=new Z,ou=new Z,lu=new Z,cu=new Z,Nd=new Z,uu=new Z,I_=new Z,hu=new Z;class Tn extends Fn{constructor(t=new ea,n=new hp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){uu.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const g=f[p],_=c[p];g!==0&&(Nd.fromBufferAttribute(_,t),u?uu.addScaledVector(Nd,g):uu.addScaledVector(Nd.sub(n),g))}n.add(uu)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),ru.copy(a.boundingSphere),ru.applyMatrix4(c),Qs.copy(t.ray).recast(t.near),!(ru.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(ru,O_)===null||Qs.origin.distanceToSquared(O_)>(t.far-t.near)**2))&&(P_.copy(c).invert(),Qs.copy(t.ray).applyMatrix4(P_),!(a.boundingBox!==null&&Qs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Qs)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const S=v[b],y=u[S.materialIndex],N=Math.max(S.start,x.start),L=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let w=N,F=L;w<F;w+=3){const D=f.getX(w),O=f.getX(w+1),T=f.getX(w+2);o=fu(this,y,t,a,d,g,_,D,O,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(f.count,x.start+x.count);for(let S=b,y=A;S<y;S+=3){const N=f.getX(S),L=f.getX(S+1),w=f.getX(S+2);o=fu(this,u,t,a,d,g,_,N,L,w),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const S=v[b],y=u[S.materialIndex],N=Math.max(S.start,x.start),L=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let w=N,F=L;w<F;w+=3){const D=w,O=w+1,T=w+2;o=fu(this,y,t,a,d,g,_,D,O,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let S=b,y=A;S<y;S+=3){const N=S,L=S+1,w=S+2;o=fu(this,u,t,a,d,g,_,N,L,w),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function M2(s,t,n,a,o,c,u,f){let p;if(t.side===ei?p=a.intersectTriangle(u,c,o,!0,f):p=a.intersectTriangle(o,c,u,t.side===ws,f),p===null)return null;hu.copy(f),hu.applyMatrix4(s.matrixWorld);const d=n.ray.origin.distanceTo(hu);return d<n.near||d>n.far?null:{distance:d,point:hu.clone(),object:s}}function fu(s,t,n,a,o,c,u,f,p,d){s.getVertexPosition(f,ou),s.getVertexPosition(p,lu),s.getVertexPosition(d,cu);const g=M2(s,t,n,a,ou,lu,cu,I_);if(g){const _=new Z;Qi.getBarycoord(I_,ou,lu,cu,_),o&&(g.uv=Qi.getInterpolatedAttribute(o,f,p,d,_,new jt)),c&&(g.uv1=Qi.getInterpolatedAttribute(c,f,p,d,_,new jt)),u&&(g.normal=Qi.getInterpolatedAttribute(u,f,p,d,_,new Z),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new Z,materialIndex:0};Qi.getNormal(ou,lu,cu,v.normal),g.face=v,g.barycoord=_}return g}class rx extends jn{constructor(t=null,n=1,a=1,o,c,u,f,p,d=Dn,g=Dn,_,v){super(null,u,f,p,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class F_ extends Ni{constructor(t,n,a,o=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $r=new an,B_=new an,du=[],z_=new or,S2=new an,gl=new Tn,vl=new Il;class ox extends Tn{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new F_(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,S2)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new or),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,$r),z_.copy(t.boundingBox).applyMatrix4($r),this.boundingBox.union(z_)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Il),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,$r),vl.copy(t.boundingSphere).applyMatrix4($r),this.boundingSphere.union(vl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let f=0;f<a.length;f++)a[f]=o[u+f]}raycast(t,n){const a=this.matrixWorld,o=this.count;if(gl.geometry=this.geometry,gl.material=this.material,gl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(a),t.ray.intersectsSphere(vl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,$r),B_.multiplyMatrices(a,$r),gl.matrixWorld=B_,gl.raycast(t,du);for(let u=0,f=du.length;u<f;u++){const p=du[u];p.instanceId=c,p.object=this,n.push(p)}du.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new F_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new rx(new Float32Array(o*this.count),o,this.count,ep,$i));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const f=this.geometry.morphTargetsRelative?1:1-u,p=o*t;return c[p]=f,c.set(a,p+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ud=new Z,b2=new Z,E2=new he;class Ga{constructor(t=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Ud.subVectors(a,n).cross(b2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const o=t.delta(Ud),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(o,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||E2.getNormalMatrix(t),o=this.coplanarPoint(Ud).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new Il,T2=new jt(.5,.5),pu=new Z;class fp{constructor(t=new Ga,n=new Ga,a=new Ga,o=new Ga,c=new Ga,u=new Ga){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=fa,a=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],p=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],A=c[9],S=c[10],y=c[11],N=c[12],L=c[13],w=c[14],F=c[15];if(o[0].setComponents(d-u,x-g,y-b,F-N).normalize(),o[1].setComponents(d+u,x+g,y+b,F+N).normalize(),o[2].setComponents(d+f,x+_,y+A,F+L).normalize(),o[3].setComponents(d-f,x-_,y-A,F-L).normalize(),a)o[4].setComponents(p,v,S,w).normalize(),o[5].setComponents(d-p,x-v,y-S,F-w).normalize();else if(o[4].setComponents(d-p,x-v,y-S,F-w).normalize(),n===fa)o[5].setComponents(d+p,x+v,y+S,F+w).normalize();else if(n===Nl)o[5].setComponents(p,v,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(t){$s.center.set(0,0,0);const n=T2.distanceTo(t.center);return $s.radius=.7071067811865476+n,$s.applyMatrix4(t.matrixWorld),this.intersectsSphere($s)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(pu.x=o.normal.x>0?t.max.x:t.min.x,pu.y=o.normal.y>0?t.max.y:t.min.y,pu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(pu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lx extends jn{constructor(t=[],n=ar,a,o,c,u,f,p,d,g){super(t,n,a,o,c,u,f,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ll extends jn{constructor(t,n,a,o,c,u,f,p,d){super(t,n,a,o,c,u,f,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fo extends jn{constructor(t,n,a=pa,o,c,u,f=Dn,p=Dn,d,g=Wa,_=1){if(g!==Wa&&g!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,u,f,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class A2 extends fo{constructor(t,n=pa,a=ar,o,c,u=Dn,f=Dn,p,d=Wa){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,o,c,u,f,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class cx extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _o extends ea{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,a,n,t,u,c,0),b("z","y","x",1,-1,a,n,-t,u,c,1),b("x","z","y",1,1,t,a,n,o,u,2),b("x","z","y",1,-1,t,a,-n,o,u,3),b("x","y","z",1,-1,t,n,a,o,c,4),b("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new di(d,3)),this.setAttribute("normal",new di(g,3)),this.setAttribute("uv",new di(_,2));function b(A,S,y,N,L,w,F,D,O,T,U){const k=w/O,G=F/T,q=w/2,ct=F/2,ft=D/2,j=O+1,B=T+1;let z=0,Q=0;const ut=new Z;for(let Et=0;Et<B;Et++){const P=Et*G-ct;for(let K=0;K<j;K++){const St=K*k-q;ut[A]=St*N,ut[S]=P*L,ut[y]=ft,d.push(ut.x,ut.y,ut.z),ut[A]=0,ut[S]=0,ut[y]=D>0?1:-1,g.push(ut.x,ut.y,ut.z),_.push(K/O),_.push(1-Et/T),z+=1}}for(let Et=0;Et<T;Et++)for(let P=0;P<O;P++){const K=v+P+j*Et,St=v+P+j*(Et+1),At=v+(P+1)+j*(Et+1),wt=v+(P+1)+j*Et;p.push(K,St,wt),p.push(St,At,wt),Q+=6}f.addGroup(x,Q,U),x+=Q,v+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Fl extends ea{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(a),p=Math.floor(o),d=f+1,g=p+1,_=t/f,v=n/p,x=[],b=[],A=[],S=[];for(let y=0;y<g;y++){const N=y*v-u;for(let L=0;L<d;L++){const w=L*_-c;b.push(w,-N,0),A.push(0,0,1),S.push(L/f),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let N=0;N<f;N++){const L=N+d*y,w=N+d*(y+1),F=N+1+d*(y+1),D=N+1+d*y;x.push(L,w,D),x.push(w,F,D)}this.setIndex(x),this.setAttribute("position",new di(b,3)),this.setAttribute("normal",new di(A,3)),this.setAttribute("uv",new di(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.width,t.height,t.widthSegments,t.heightSegments)}}class dp extends ea{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+f,Math.PI);let d=0;const g=[],_=new Z,v=new Z,x=[],b=[],A=[],S=[];for(let y=0;y<=a;y++){const N=[],L=y/a,w=u+L*f,F=t*Math.cos(w),D=Math.sqrt(t*t-F*F);let O=0;y===0&&u===0?O=.5/n:y===a&&p===Math.PI&&(O=-.5/n);for(let T=0;T<=n;T++){const U=T/n,k=o+U*c;_.x=-D*Math.cos(k),_.y=F,_.z=D*Math.sin(k),b.push(_.x,_.y,_.z),v.copy(_).normalize(),A.push(v.x,v.y,v.z),S.push(U+O,1-L),N.push(d++)}g.push(N)}for(let y=0;y<a;y++)for(let N=0;N<n;N++){const L=g[y][N+1],w=g[y][N],F=g[y+1][N],D=g[y+1][N+1];(y!==0||u>0)&&x.push(L,w,D),(y!==a-1||p<Math.PI)&&x.push(w,F,D)}this.setIndex(x),this.setAttribute("position",new di(b,3)),this.setAttribute("normal",new di(A,3)),this.setAttribute("uv",new di(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function po(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];if(H_(o))o.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone();else if(Array.isArray(o))if(H_(o[0])){const c=[];for(let u=0,f=o.length;u<f;u++)c[u]=o[u].clone();t[n][a]=c}else t[n][a]=o.slice();else t[n][a]=o}}return t}function ti(s){const t={};for(let n=0;n<s.length;n++){const a=po(s[n]);for(const o in a)t[o]=a[o]}return t}function H_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function w2(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function ux(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const Pl={clone:po,merge:ti};var R2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends vo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R2,this.fragmentShader=C2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=po(t.uniforms),this.uniformsGroups=w2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const a in t.uniforms){const o=t.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new se().setHex(o.value);break;case"v2":this.uniforms[a].value=new jt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new Z().fromArray(o.value);break;case"v4":this.uniforms[a].value=new dn().fromArray(o.value);break;case"m3":this.uniforms[a].value=new he().fromArray(o.value);break;case"m4":this.uniforms[a].value=new an().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class hx extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class O0 extends vo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fx extends O0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class D2 extends vo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=Y0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dx extends vo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class N2 extends vo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class px extends Fn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ld=new an,G_=new Z,V_=new Z;class mx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fp,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;G_.setFromMatrixPosition(t.matrixWorld),n.position.copy(G_),V_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(V_),n.updateMatrixWorld(),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Nl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Ld)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mu=new Z,gu=new ma,la=new Z;class gx extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=fa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mu,gu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,la.set(1,1,1)).invert()}updateWorldMatrix(t,n,a=!1){super.updateWorldMatrix(t,n,a),this.matrixWorld.decompose(mu,gu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,la.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Es=new Z,k_=new jt,W_=new jt;class wi extends gx{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ul*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ul*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,n){return this.getViewBounds(t,k_,W_),n.subVectors(W_,k_)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Tl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class U2 extends mx{constructor(){super(new wi(90,1,.5,500)),this.isPointLightShadow=!0}}class L2 extends px{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new U2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Yu extends gx{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class P2 extends mx{constructor(){super(new Yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pd extends px{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new P2}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Jr=-90,to=1;class O2 extends Fn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new wi(Jr,to,t,n);o.layers=this.layers,this.add(o);const c=new wi(Jr,to,t,n);c.layers=this.layers,this.add(c);const u=new wi(Jr,to,t,n);u.layers=this.layers,this.add(u);const f=new wi(Jr,to,t,n);f.layers=this.layers,this.add(f);const p=new wi(Jr,to,t,n);p.layers=this.layers,this.add(p);const d=new wi(Jr,to,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,f,p]=n;for(const d of n)this.remove(d);if(t===fa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Nl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(a,3,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,4,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=A,t.setRenderTarget(a,5,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(_,v,x),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class I2 extends wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class F2{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=B2.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function B2(){this._document.hidden===!1&&this.reset()}const pp="\\[\\]\\.:\\/",z2=new RegExp("["+pp+"]","g"),mp="[^"+pp+"]",H2="[^"+pp.replace("\\.","")+"]",G2=/((?:WC+[\/:])*)/.source.replace("WC",mp),V2=/(WCOD+)?/.source.replace("WCOD",H2),k2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mp),W2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mp),X2=new RegExp("^"+G2+V2+k2+W2+"$"),q2=["material","materials","bones","map"];class Y2{constructor(t,n,a){const o=a||We.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,o)}getValue(t,n){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(t,n)}setValue(t,n){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=t.length;n!==a;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=t.length;n!==a;++n)t[n].unbind()}}class We{constructor(t,n,a){this.path=n,this.parsedPath=a||We.parseTrackName(n),this.node=We.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,a){return t&&t.isAnimationObjectGroup?new We.Composite(t,n,a):new We(t,n,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(z2,"")}static parseTrackName(t){const n=X2.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);q2.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const a=t.skeleton.getBoneByName(n);if(a!==void 0)return a}if(t.children){const a=function(c){for(let u=0;u<c.length;u++){const f=c[u];if(f.name===n||f.uuid===n)return f;const p=a(f.children);if(p)return p}return null},o=a(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)t[n++]=a[o]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,a=n.objectName,o=n.propertyName;let c=n.propertyIndex;if(t||(t=We.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!t.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[a]===void 0){pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(d!==void 0){if(t[d]===void 0){pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}const u=t[o];if(u===void 0){const d=n.nodeName;pe("PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",t);return}let f=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?f=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let p=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[c]!==void 0&&(c=t.morphTargetDictionary[c])}p=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(p=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(p=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[p],this.setValue=this.SetterByBindingTypeAndVersioning[p][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}We.Composite=Y2;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const X_=new an;class Z2{constructor(t,n,a=0,o=1/0){this.ray=new up(t,n),this.near=a,this.far=o,this.camera=null,this.layers=new cp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):pe("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return X_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(X_),this}intersectObject(t,n=!0,a=[]){return I0(t,this,a,n),a.sort(q_),a}intersectObjects(t,n=!0,a=[]){for(let o=0,c=t.length;o<c;o++)I0(t[o],this,a,n);return a.sort(q_),a}}function q_(s,t){return s.distance-t.distance}function I0(s,t,n,a){let o=!0;if(s.layers.test(t.layers)&&s.raycast(t,n)===!1&&(o=!1),o===!0&&a===!0){const c=s.children;for(let u=0,f=c.length;u<f;u++)I0(c[u],t,n,!0)}}class K2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class Y_{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(Ae(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ep=class Ep{constructor(t,n,a,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,o){const c=this.elements;return c[0]=t,c[2]=n,c[1]=a,c[3]=o,this}};Ep.prototype.isMatrix2=!0;let Z_=Ep;class j2 extends Rs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function K_(s,t,n,a){const o=Q2(a);switch(n){case Q1:return s*t;case ep:return s*t/o.components*o.byteLength;case np:return s*t/o.components*o.byteLength;case sr:return s*t*2/o.components*o.byteLength;case ip:return s*t*2/o.components*o.byteLength;case $1:return s*t*3/o.components*o.byteLength;case Ji:return s*t*4/o.components*o.byteLength;case ap:return s*t*4/o.components*o.byteLength;case Ru:case Cu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Du:case Nu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case r0:case l0:return Math.max(s,16)*Math.max(t,8)/4;case s0:case o0:return Math.max(s,8)*Math.max(t,8)/2;case c0:case u0:case f0:case d0:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case h0:case Ou:case p0:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case m0:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case g0:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case v0:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case _0:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case x0:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case y0:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case M0:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case S0:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case b0:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case E0:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case T0:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case A0:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case w0:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case R0:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case C0:case D0:case N0:return Math.ceil(s/4)*Math.ceil(t/4)*16;case U0:case L0:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Iu:case P0:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Q2(s){switch(s){case Ri:case Y1:return{byteLength:1,components:1};case Cl:case Z1:case ni:return{byteLength:2,components:1};case J0:case tp:return{byteLength:2,components:4};case pa:case $0:case $i:return{byteLength:4,components:1};case K1:case j1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:q0}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=q0);function vx(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function $2(s){const t=new WeakMap;function n(f,p){const d=f.array,g=f.usage,_=d.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,d,g),f.onUploadCallback();let x;if(d instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=s.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=s.SHORT;else if(d instanceof Uint32Array)x=s.UNSIGNED_INT;else if(d instanceof Int32Array)x=s.INT;else if(d instanceof Int8Array)x=s.BYTE;else if(d instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,p,d){const g=p.array,_=p.updateRanges;if(s.bindBuffer(d,f),_.length===0)s.bufferSubData(d,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],A=_[x];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++v,_[v]=A)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const A=_[x];s.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(s.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:o,remove:c,update:u}}var J2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ob=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,db=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Db=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$b=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,n3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,b3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,C3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,I3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,z3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_E=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ME=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ee={alphahash_fragment:J2,alphahash_pars_fragment:tb,alphamap_fragment:eb,alphamap_pars_fragment:nb,alphatest_fragment:ib,alphatest_pars_fragment:ab,aomap_fragment:sb,aomap_pars_fragment:rb,batching_pars_vertex:ob,batching_vertex:lb,begin_vertex:cb,beginnormal_vertex:ub,bsdfs:hb,iridescence_fragment:fb,bumpmap_pars_fragment:db,clipping_planes_fragment:pb,clipping_planes_pars_fragment:mb,clipping_planes_pars_vertex:gb,clipping_planes_vertex:vb,color_fragment:_b,color_pars_fragment:xb,color_pars_vertex:yb,color_vertex:Mb,common:Sb,cube_uv_reflection_fragment:bb,defaultnormal_vertex:Eb,displacementmap_pars_vertex:Tb,displacementmap_vertex:Ab,emissivemap_fragment:wb,emissivemap_pars_fragment:Rb,colorspace_fragment:Cb,colorspace_pars_fragment:Db,envmap_fragment:Nb,envmap_common_pars_fragment:Ub,envmap_pars_fragment:Lb,envmap_pars_vertex:Pb,envmap_physical_pars_fragment:Xb,envmap_vertex:Ob,fog_vertex:Ib,fog_pars_vertex:Fb,fog_fragment:Bb,fog_pars_fragment:zb,gradientmap_pars_fragment:Hb,lightmap_pars_fragment:Gb,lights_lambert_fragment:Vb,lights_lambert_pars_fragment:kb,lights_pars_begin:Wb,lights_toon_fragment:qb,lights_toon_pars_fragment:Yb,lights_phong_fragment:Zb,lights_phong_pars_fragment:Kb,lights_physical_fragment:jb,lights_physical_pars_fragment:Qb,lights_fragment_begin:$b,lights_fragment_maps:Jb,lights_fragment_end:t3,lightprobes_pars_fragment:e3,logdepthbuf_fragment:n3,logdepthbuf_pars_fragment:i3,logdepthbuf_pars_vertex:a3,logdepthbuf_vertex:s3,map_fragment:r3,map_pars_fragment:o3,map_particle_fragment:l3,map_particle_pars_fragment:c3,metalnessmap_fragment:u3,metalnessmap_pars_fragment:h3,morphinstance_vertex:f3,morphcolor_vertex:d3,morphnormal_vertex:p3,morphtarget_pars_vertex:m3,morphtarget_vertex:g3,normal_fragment_begin:v3,normal_fragment_maps:_3,normal_pars_fragment:x3,normal_pars_vertex:y3,normal_vertex:M3,normalmap_pars_fragment:S3,clearcoat_normal_fragment_begin:b3,clearcoat_normal_fragment_maps:E3,clearcoat_pars_fragment:T3,iridescence_pars_fragment:A3,opaque_fragment:w3,packing:R3,premultiplied_alpha_fragment:C3,project_vertex:D3,dithering_fragment:N3,dithering_pars_fragment:U3,roughnessmap_fragment:L3,roughnessmap_pars_fragment:P3,shadowmap_pars_fragment:O3,shadowmap_pars_vertex:I3,shadowmap_vertex:F3,shadowmask_pars_fragment:B3,skinbase_vertex:z3,skinning_pars_vertex:H3,skinning_vertex:G3,skinnormal_vertex:V3,specularmap_fragment:k3,specularmap_pars_fragment:W3,tonemapping_fragment:X3,tonemapping_pars_fragment:q3,transmission_fragment:Y3,transmission_pars_fragment:Z3,uv_pars_fragment:K3,uv_pars_vertex:j3,uv_vertex:Q3,worldpos_vertex:$3,background_vert:J3,background_frag:tE,backgroundCube_vert:eE,backgroundCube_frag:nE,cube_vert:iE,cube_frag:aE,depth_vert:sE,depth_frag:rE,distance_vert:oE,distance_frag:lE,equirect_vert:cE,equirect_frag:uE,linedashed_vert:hE,linedashed_frag:fE,meshbasic_vert:dE,meshbasic_frag:pE,meshlambert_vert:mE,meshlambert_frag:gE,meshmatcap_vert:vE,meshmatcap_frag:_E,meshnormal_vert:xE,meshnormal_frag:yE,meshphong_vert:ME,meshphong_frag:SE,meshphysical_vert:bE,meshphysical_frag:EE,meshtoon_vert:TE,meshtoon_frag:AE,points_vert:wE,points_frag:RE,shadow_vert:CE,shadow_frag:DE,sprite_vert:NE,sprite_frag:UE},Ft={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ua={basic:{uniforms:ti([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:ti([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:ti([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:ti([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:ti([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new se(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:ti([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:ti([Ft.points,Ft.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:ti([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:ti([Ft.common,Ft.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:ti([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:ti([Ft.sprite,Ft.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:ti([Ft.common,Ft.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:ti([Ft.lights,Ft.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};ua.physical={uniforms:ti([ua.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const vu={r:0,b:0,g:0},LE=new an,_x=new he;_x.set(-1,0,0,0,1,0,0,0,1);function PE(s,t,n,a,o,c){const u=new se(0);let f=o===!0?0:1,p,d,g=null,_=0,v=null;function x(N){let L=N.isScene===!0?N.background:null;if(L&&L.isTexture){const w=N.backgroundBlurriness>0;L=t.get(L,w)}return L}function b(N){let L=!1;const w=x(N);w===null?S(u,f):w&&w.isColor&&(S(w,1),L=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(N,L){const w=x(L);w&&(w.isCubeTexture||w.mapping===qu)?(d===void 0&&(d=new Tn(new _o(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:po(ua.backgroundCube.uniforms),vertexShader:ua.backgroundCube.vertexShader,fragmentShader:ua.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(LE.makeRotationFromEuler(L.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(_x),d.material.toneMapped=Pe.getTransfer(w.colorSpace)!==ke,(g!==w||_!==w.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,g=w,_=w.version,v=s.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new Tn(new Fl(2,2),new In({name:"BackgroundMaterial",uniforms:po(ua.background.uniforms),vertexShader:ua.background.vertexShader,fragmentShader:ua.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Pe.getTransfer(w.colorSpace)!==ke,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||_!==w.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,g=w,_=w.version,v=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function S(N,L){N.getRGB(vu,ux(s)),n.buffers.color.setClear(vu.r,vu.g,vu.b,L,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,L=1){u.set(N),f=L,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,S(u,f)},render:b,addToRenderList:A,dispose:y}}function OE(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function f(G,q,ct,ft,j){let B=!1;const z=_(G,ft,ct,q);c!==z&&(c=z,d(c.object)),B=x(G,ft,ct,j),B&&b(G,ft,ct,j),j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,w(G,q,ct,ft),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function p(){return s.createVertexArray()}function d(G){return s.bindVertexArray(G)}function g(G){return s.deleteVertexArray(G)}function _(G,q,ct,ft){const j=ft.wireframe===!0;let B=a[q.id];B===void 0&&(B={},a[q.id]=B);const z=G.isInstancedMesh===!0?G.id:0;let Q=B[z];Q===void 0&&(Q={},B[z]=Q);let ut=Q[ct.id];ut===void 0&&(ut={},Q[ct.id]=ut);let Et=ut[j];return Et===void 0&&(Et=v(p()),ut[j]=Et),Et}function v(G){const q=[],ct=[],ft=[];for(let j=0;j<n;j++)q[j]=0,ct[j]=0,ft[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ct,attributeDivisors:ft,object:G,attributes:{},index:null}}function x(G,q,ct,ft){const j=c.attributes,B=q.attributes;let z=0;const Q=ct.getAttributes();for(const ut in Q)if(Q[ut].location>=0){const P=j[ut];let K=B[ut];if(K===void 0&&(ut==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),ut==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;z++}return c.attributesNum!==z||c.index!==ft}function b(G,q,ct,ft){const j={},B=q.attributes;let z=0;const Q=ct.getAttributes();for(const ut in Q)if(Q[ut].location>=0){let P=B[ut];P===void 0&&(ut==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),ut==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),j[ut]=K,z++}c.attributes=j,c.attributesNum=z,c.index=ft}function A(){const G=c.newAttributes;for(let q=0,ct=G.length;q<ct;q++)G[q]=0}function S(G){y(G,0)}function y(G,q){const ct=c.newAttributes,ft=c.enabledAttributes,j=c.attributeDivisors;ct[G]=1,ft[G]===0&&(s.enableVertexAttribArray(G),ft[G]=1),j[G]!==q&&(s.vertexAttribDivisor(G,q),j[G]=q)}function N(){const G=c.newAttributes,q=c.enabledAttributes;for(let ct=0,ft=q.length;ct<ft;ct++)q[ct]!==G[ct]&&(s.disableVertexAttribArray(ct),q[ct]=0)}function L(G,q,ct,ft,j,B,z){z===!0?s.vertexAttribIPointer(G,q,ct,j,B):s.vertexAttribPointer(G,q,ct,ft,j,B)}function w(G,q,ct,ft){A();const j=ft.attributes,B=ct.getAttributes(),z=q.defaultAttributeValues;for(const Q in B){const ut=B[Q];if(ut.location>=0){let Et=j[Q];if(Et===void 0&&(Q==="instanceMatrix"&&G.instanceMatrix&&(Et=G.instanceMatrix),Q==="instanceColor"&&G.instanceColor&&(Et=G.instanceColor)),Et!==void 0){const P=Et.normalized,K=Et.itemSize,St=t.get(Et);if(St===void 0)continue;const At=St.buffer,wt=St.type,tt=St.bytesPerElement,xt=wt===s.INT||wt===s.UNSIGNED_INT||Et.gpuType===$0;if(Et.isInterleavedBufferAttribute){const yt=Et.data,zt=yt.stride,ae=Et.offset;if(yt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<ut.locationSize;Qt++)y(ut.location+Qt,yt.meshPerAttribute);G.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Qt=0;Qt<ut.locationSize;Qt++)S(ut.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let Qt=0;Qt<ut.locationSize;Qt++)L(ut.location+Qt,K/ut.locationSize,wt,P,zt*tt,(ae+K/ut.locationSize*Qt)*tt,xt)}else{if(Et.isInstancedBufferAttribute){for(let yt=0;yt<ut.locationSize;yt++)y(ut.location+yt,Et.meshPerAttribute);G.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let yt=0;yt<ut.locationSize;yt++)S(ut.location+yt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let yt=0;yt<ut.locationSize;yt++)L(ut.location+yt,K/ut.locationSize,wt,P,K*tt,K/ut.locationSize*yt*tt,xt)}}else if(z!==void 0){const P=z[Q];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(ut.location,P);break;case 3:s.vertexAttrib3fv(ut.location,P);break;case 4:s.vertexAttrib4fv(ut.location,P);break;default:s.vertexAttrib1fv(ut.location,P)}}}}N()}function F(){U();for(const G in a){const q=a[G];for(const ct in q){const ft=q[ct];for(const j in ft){const B=ft[j];for(const z in B)g(B[z].object),delete B[z];delete ft[j]}}delete a[G]}}function D(G){if(a[G.id]===void 0)return;const q=a[G.id];for(const ct in q){const ft=q[ct];for(const j in ft){const B=ft[j];for(const z in B)g(B[z].object),delete B[z];delete ft[j]}}delete a[G.id]}function O(G){for(const q in a){const ct=a[q];for(const ft in ct){const j=ct[ft];if(j[G.id]===void 0)continue;const B=j[G.id];for(const z in B)g(B[z].object),delete B[z];delete j[G.id]}}}function T(G){for(const q in a){const ct=a[q],ft=G.isInstancedMesh===!0?G.id:0,j=ct[ft];if(j!==void 0){for(const B in j){const z=j[B];for(const Q in z)g(z[Q].object),delete z[Q];delete j[B]}delete ct[ft],Object.keys(ct).length===0&&delete a[q]}}}function U(){k(),u=!0,c!==o&&(c=o,d(c.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:k,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:S,disableUnusedAttributes:N}}function IE(s,t,n){let a;function o(p){a=p}function c(p,d){s.drawArrays(a,p,d),n.update(d,a,1)}function u(p,d,g){g!==0&&(s.drawArraysInstanced(a,p,d,g),n.update(d,a,g))}function f(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];n.update(v,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function FE(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ji&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const T=O===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ri&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==$i&&!T)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(oe("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:w,maxSamples:F,samples:D}}function BE(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Ga,f=new he,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,y=s.get(_);if(!o||b===null||b.length===0||c&&!S)c?g(null):d();else{const N=c?0:a,L=N*4;let w=y.clippingState||null;p.value=w,w=g(b,v,L,x);for(let F=0;F!==L;++F)w[F]=n[F];y.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,x,b){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=p.value,b!==!0||S===null){const y=x+A*4,N=v.matrixWorldInverse;f.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,w=x;L!==A;++L,w+=4)u.copy(_[L]).applyMatrix4(N,f),u.normal.toArray(S,w),S[w+3]=u.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}const As=4,j_=[.125,.215,.35,.446,.526,.582],er=20,zE=256,_l=new Yu,Q_=new se;let Od=null,Id=0,Fd=0,Bd=!1;const HE=new Z;class F0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:f=HE}=c;Od=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Od,Id,Fd),this._renderer.xr.enabled=Bd,t.scissorTest=!1,eo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ar||t.mapping===ho?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Od=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:On,minFilter:On,generateMipmaps:!1,type:ni,format:Ji,colorSpace:Bu,depthBuffer:!1},o=$_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=GE(c)),this._blurMaterial=kE(c,t,n),this._ggxMaterial=VE(c,t,n)}return o}_compileMaterial(t){const n=new Tn(new ea,t);this._renderer.compile(n,_l)}_sceneToCubeUV(t,n,a,o,c){const p=new wi(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Q_),_.toneMapping=da,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new _o,new hp({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let y=!1;const N=t.background;N?N.isColor&&(S.color.copy(N),t.background=null,y=!0):(S.color.copy(Q_),y=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(p.up.set(0,d[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[L],c.y,c.z)):w===1?(p.up.set(0,0,d[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[L],c.z)):(p.up.set(0,d[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[L]));const F=this._cubeSize;eo(o,w*F,L>2?F:0,F,F),_.setRenderTarget(o),y&&_.render(A,p),_.render(t,p)}_.toneMapping=x,_.autoClear=v,t.background=N}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===ar||t.mapping===ho;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=t1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;eo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,_l)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:b}=this,A=this._sizeLods[a],S=3*A*(a>b-As?a-b+As:0),y=4*(this._cubeSize-A);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=b-n,eo(c,S,y,3*A,2*A),o.setRenderTarget(c),o.render(f,_l),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=b-a,eo(t,S,y,3*A,2*A),o.setRenderTarget(t),o.render(f,_l)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&pe("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*er-1),A=c/b,S=isFinite(c)?1+Math.floor(g*A):er;S>er&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${er}`);const y=[];let N=0;for(let O=0;O<er;++O){const T=O/A,U=Math.exp(-T*T/2);y.push(U),O===0?N+=U:O<S&&(N+=2*U)}for(let O=0;O<y.length;O++)y[O]=y[O]/N;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=b,v.mipInt.value=L-a;const w=this._sizeLods[o],F=3*w*(o>L-As?o-L+As:0),D=4*(this._cubeSize-w);eo(n,F,D,3*w,2*w),p.setRenderTarget(n),p.render(_,_l)}}function GE(s){const t=[],n=[],a=[];let o=s;const c=s-As+1+j_.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>s-As?p=j_[u-s+As-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,A=3,S=2,y=1,N=new Float32Array(A*b*x),L=new Float32Array(S*b*x),w=new Float32Array(y*b*x);for(let D=0;D<x;D++){const O=D%3*2/3-1,T=D>2?0:-1,U=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];N.set(U,A*b*D),L.set(v,S*b*D);const k=[D,D,D,D,D,D];w.set(k,y*b*D)}const F=new ea;F.setAttribute("position",new Ni(N,A)),F.setAttribute("uv",new Ni(L,S)),F.setAttribute("faceIndex",new Ni(w,y)),a.push(new Tn(F,null)),o>As&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function $_(s,t,n){const a=new Xn(s,t,n);return a.texture.mapping=qu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function eo(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function VE(s,t,n){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function kE(s,t,n){const a=new Float32Array(er),o=new Z(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function J_(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function t1(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function Zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xx extends Xn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new lx(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new _o(5,5,5),c=new In({name:"CubemapFromEquirect",uniforms:po(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ei,blending:ta});c.uniforms.tEquirect.value=n;const u=new Tn(o,c),f=n.minFilter;return n.minFilter===nr&&(n.minFilter=On),new O2(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}function WE(s){let t=new WeakMap,n=new WeakMap,a=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===ld||x===cd)if(t.has(v)){const b=t.get(v).texture;return f(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const A=new xx(b.height);return A.fromEquirectangularTexture(s,v),t.set(v,A),v.addEventListener("dispose",d),f(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===ld||x===cd,A=x===ar||x===ho;if(b||A){let S=n.get(v);const y=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return a===null&&(a=new F0(s)),S=b?a.fromEquirectangular(v,S):a.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const N=v.image;return b&&N&&N.height>0||A&&N&&p(N)?(a===null&&(a=new F0(s)),S=b?a.fromEquirectangular(v):a.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function f(v,x){return x===ld?v.mapping=ar:x===cd&&(v.mapping=ho),v}function p(v){let x=0;const b=6;for(let A=0;A<b;A++)v[A]!==void 0&&x++;return x===b}function d(v){const x=v.target;x.removeEventListener("dispose",d);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function _(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function XE(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&oo("WebGLRenderer: "+a+" extension not supported."),o}}}function qE(s,t,n,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(t.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const x in v)t.update(v[x],s.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,b=_.attributes.position;let A=0;if(b===void 0)return;if(x!==null){const N=x.array;A=x.version;for(let L=0,w=N.length;L<w;L+=3){const F=N[L+0],D=N[L+1],O=N[L+2];v.push(F,D,D,O,O,F)}}else{const N=b.array;A=b.version;for(let L=0,w=N.length/3-1;L<w;L+=3){const F=L+0,D=L+1,O=L+2;v.push(F,D,D,O,O,F)}}const S=new(b.count>=65535?sx:ax)(v,1);S.version=A;const y=c.get(_);y&&t.remove(y),c.set(_,S)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function YE(s,t,n){let a;function o(_){a=_}let c,u;function f(_){c=_.type,u=_.bytesPerElement}function p(_,v){s.drawElements(a,v,c,_*u),n.update(v,a,1)}function d(_,v,x){x!==0&&(s.drawElementsInstanced(a,v,c,_*u,x),n.update(v,a,x))}function g(_,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,_,0,x);let A=0;for(let S=0;S<x;S++)A+=v[S];n.update(A,a,1)}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=g}function ZE(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:pe("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function KE(s,t,n){const a=new WeakMap,o=new dn;function c(u,f,p){const d=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let k=function(){T.dispose(),a.delete(f),f.removeEventListener("dispose",k)};var x=k;v!==void 0&&v.texture.dispose();const b=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let w=0;b===!0&&(w=1),A===!0&&(w=2),S===!0&&(w=3);let F=f.attributes.position.count*w,D=1;F>t.maxTextureSize&&(D=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const O=new Float32Array(F*D*4*_),T=new ex(O,F,D,_);T.type=$i,T.needsUpdate=!0;const U=w*4;for(let G=0;G<_;G++){const q=y[G],ct=N[G],ft=L[G],j=F*D*4*G;for(let B=0;B<q.count;B++){const z=B*U;b===!0&&(o.fromBufferAttribute(q,B),O[j+z+0]=o.x,O[j+z+1]=o.y,O[j+z+2]=o.z,O[j+z+3]=0),A===!0&&(o.fromBufferAttribute(ct,B),O[j+z+4]=o.x,O[j+z+5]=o.y,O[j+z+6]=o.z,O[j+z+7]=0),S===!0&&(o.fromBufferAttribute(ft,B),O[j+z+8]=o.x,O[j+z+9]=o.y,O[j+z+10]=o.z,O[j+z+11]=ft.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new jt(F,D)},a.set(f,v),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let b=0;for(let S=0;S<d.length;S++)b+=d[S];const A=f.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",d)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function jE(s,t,n,a,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=t.get(d,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),c.get(d)!==g&&(n.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function f(){c=new WeakMap}function p(d){const g=d.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:f}}const QE={[Z0]:"LINEAR_TONE_MAPPING",[K0]:"REINHARD_TONE_MAPPING",[j0]:"CINEON_TONE_MAPPING",[Wu]:"ACES_FILMIC_TONE_MAPPING",[uo]:"AGX_TONE_MAPPING",[Xu]:"NEUTRAL_TONE_MAPPING",[Q0]:"CUSTOM_TONE_MAPPING"};function $E(s,t,n,a,o,c){const u=new Xn(t,n,{type:s,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new fo(t,n):void 0}),f=new Xn(t,n,{type:ni,depthBuffer:!1,stencilBuffer:!1}),p=new ea;p.setAttribute("position",new di([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new di([0,2,0,0,2,0],2));const d=new hx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Tn(p,d),_=new Yu(-1,1,1,-1,0,1);let v=null,x=null,b=!1,A,S=null,y=[],N=!1;this.setSize=function(L,w){u.setSize(L,w),f.setSize(L,w);for(let F=0;F<y.length;F++){const D=y[F];D.setSize&&D.setSize(L,w)}},this.setEffects=function(L){y=L,N=y.length>0&&y[0].isRenderPass===!0;const w=u.width,F=u.height;for(let D=0;D<y.length;D++){const O=y[D];O.setSize&&O.setSize(w,F)}},this.begin=function(L,w){if(b||L.toneMapping===da&&y.length===0)return!1;if(S=w,w!==null){const F=w.width,D=w.height;(u.width!==F||u.height!==D)&&this.setSize(F,D)}return N===!1&&L.setRenderTarget(u),A=L.toneMapping,L.toneMapping=da,!0},this.hasRenderPass=function(){return N},this.end=function(L,w){L.toneMapping=A,b=!0;let F=u,D=f;for(let O=0;O<y.length;O++){const T=y[O];if(T.enabled!==!1&&(T.render(L,D,F,w),T.needsSwap!==!1)){const U=F;F=D,D=U}}if(v!==L.outputColorSpace||x!==L.toneMapping){v=L.outputColorSpace,x=L.toneMapping,d.defines={},Pe.getTransfer(v)===ke&&(d.defines.SRGB_TRANSFER="");const O=QE[x];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=F.texture,L.setRenderTarget(S),L.render(g,_),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),p.dispose(),d.dispose()}}const yx=new jn,B0=new fo(1,1),Mx=new ex,Sx=new c2,bx=new lx,e1=[],n1=[],i1=new Float32Array(16),a1=new Float32Array(9),s1=new Float32Array(4);function xo(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=e1[o];if(c===void 0&&(c=new Float32Array(o),e1[o]=c),t!==0){a.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,s[u].toArray(c,f)}return c}function Nn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function Un(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function Ku(s,t){let n=n1[t];n===void 0&&(n=new Int32Array(t),n1[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function JE(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function tT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nn(n,t))return;s.uniform2fv(this.addr,t),Un(n,t)}}function eT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Nn(n,t))return;s.uniform3fv(this.addr,t),Un(n,t)}}function nT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nn(n,t))return;s.uniform4fv(this.addr,t),Un(n,t)}}function iT(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Nn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),Un(n,t)}else{if(Nn(n,a))return;s1.set(a),s.uniformMatrix2fv(this.addr,!1,s1),Un(n,a)}}function aT(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Nn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),Un(n,t)}else{if(Nn(n,a))return;a1.set(a),s.uniformMatrix3fv(this.addr,!1,a1),Un(n,a)}}function sT(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Nn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),Un(n,t)}else{if(Nn(n,a))return;i1.set(a),s.uniformMatrix4fv(this.addr,!1,i1),Un(n,a)}}function rT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function oT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nn(n,t))return;s.uniform2iv(this.addr,t),Un(n,t)}}function lT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nn(n,t))return;s.uniform3iv(this.addr,t),Un(n,t)}}function cT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nn(n,t))return;s.uniform4iv(this.addr,t),Un(n,t)}}function uT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function hT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nn(n,t))return;s.uniform2uiv(this.addr,t),Un(n,t)}}function fT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nn(n,t))return;s.uniform3uiv(this.addr,t),Un(n,t)}}function dT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nn(n,t))return;s.uniform4uiv(this.addr,t),Un(n,t)}}function pT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(B0.compareFunction=n.isReversedDepthBuffer()?rp:sp,c=B0):c=yx,n.setTexture2D(t||c,o)}function mT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Sx,o)}function gT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||bx,o)}function vT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Mx,o)}function _T(s){switch(s){case 5126:return JE;case 35664:return tT;case 35665:return eT;case 35666:return nT;case 35674:return iT;case 35675:return aT;case 35676:return sT;case 5124:case 35670:return rT;case 35667:case 35671:return oT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return uT;case 36294:return hT;case 36295:return fT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return vT}}function xT(s,t){s.uniform1fv(this.addr,t)}function yT(s,t){const n=xo(t,this.size,2);s.uniform2fv(this.addr,n)}function MT(s,t){const n=xo(t,this.size,3);s.uniform3fv(this.addr,n)}function ST(s,t){const n=xo(t,this.size,4);s.uniform4fv(this.addr,n)}function bT(s,t){const n=xo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function ET(s,t){const n=xo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function TT(s,t){const n=xo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function AT(s,t){s.uniform1iv(this.addr,t)}function wT(s,t){s.uniform2iv(this.addr,t)}function RT(s,t){s.uniform3iv(this.addr,t)}function CT(s,t){s.uniform4iv(this.addr,t)}function DT(s,t){s.uniform1uiv(this.addr,t)}function NT(s,t){s.uniform2uiv(this.addr,t)}function UT(s,t){s.uniform3uiv(this.addr,t)}function LT(s,t){s.uniform4uiv(this.addr,t)}function PT(s,t,n){const a=this.cache,o=t.length,c=Ku(n,o);Nn(a,c)||(s.uniform1iv(this.addr,c),Un(a,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=B0:u=yx;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,c[f])}function OT(s,t,n){const a=this.cache,o=t.length,c=Ku(n,o);Nn(a,c)||(s.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||Sx,c[u])}function IT(s,t,n){const a=this.cache,o=t.length,c=Ku(n,o);Nn(a,c)||(s.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||bx,c[u])}function FT(s,t,n){const a=this.cache,o=t.length,c=Ku(n,o);Nn(a,c)||(s.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||Mx,c[u])}function BT(s){switch(s){case 5126:return xT;case 35664:return yT;case 35665:return MT;case 35666:return ST;case 35674:return bT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return AT;case 35667:case 35671:return wT;case 35668:case 35672:return RT;case 35669:case 35673:return CT;case 5125:return DT;case 36294:return NT;case 36295:return UT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return FT}}class zT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=_T(n.type)}}class HT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BT(n.type)}}class GT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],a)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function r1(s,t){s.seq.push(t),s.map[t.id]=t}function VT(s,t,n){const a=s.name,o=a.length;for(zd.lastIndex=0;;){const c=zd.exec(a),u=zd.lastIndex;let f=c[1];const p=c[2]==="]",d=c[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===o){r1(n,d===void 0?new zT(f,s,t):new HT(f,s,t));break}else{let _=n.map[f];_===void 0&&(_=new GT(f),r1(n,_)),n=_}}}class Uu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);VT(f,p,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function o1(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const kT=37297;let WT=0;function XT(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const l1=new he;function qT(s){Pe._getMatrix(l1,Pe.workingColorSpace,s);const t=`mat3( ${l1.elements.map(n=>n.toFixed(4))} )`;switch(Pe.getTransfer(s)){case zu:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function c1(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+XT(s.getShaderSource(t),f)}else return c}function YT(s,t){const n=qT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const ZT={[Z0]:"Linear",[K0]:"Reinhard",[j0]:"Cineon",[Wu]:"ACESFilmic",[uo]:"AgX",[Xu]:"Neutral",[Q0]:"Custom"};function KT(s,t){const n=ZT[t];return n===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _u=new Z;function jT(){Pe.getLuminanceCoefficients(_u);const s=_u.x.toFixed(4),t=_u.y.toFixed(4),n=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(El).join(`
`)}function $T(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function JT(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:f}}return n}function El(s){return s!==""}function u1(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function h1(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tA=/^[ \t]*#include +<([\w\d./]+)>/gm;function z0(s){return s.replace(tA,nA)}const eA=new Map;function nA(s,t){let n=Ee[t];if(n===void 0){const a=eA.get(t);if(a!==void 0)n=Ee[a],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return z0(n)}const iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f1(s){return s.replace(iA,aA)}function aA(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function d1(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const sA={[wu]:"SHADOWMAP_TYPE_PCF",[bl]:"SHADOWMAP_TYPE_VSM"};function rA(s){return sA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oA={[ar]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[qu]:"ENVMAP_TYPE_CUBE_UV"};function lA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":oA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const cA={[ho]:"ENVMAP_MODE_REFRACTION"};function uA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":cA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hA={[Y0]:"ENVMAP_BLENDING_MULTIPLY",[AS]:"ENVMAP_BLENDING_MIX",[wS]:"ENVMAP_BLENDING_ADD"};function fA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":hA[s.combine]||"ENVMAP_BLENDING_NONE"}function dA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function pA(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=rA(n),d=lA(n),g=uA(n),_=fA(n),v=dA(n),x=QT(n),b=$T(c),A=o.createProgram();let S,y,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(El).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(El).join(`
`),y.length>0&&(y+=`
`)):(S=[d1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(El).join(`
`),y=[d1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==da?"#define TONE_MAPPING":"",n.toneMapping!==da?Ee.tonemapping_pars_fragment:"",n.toneMapping!==da?KT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,YT("linearToOutputTexel",n.outputColorSpace),jT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(El).join(`
`)),u=z0(u),u=u1(u,n),u=h1(u,n),f=z0(f),f=u1(f,n),f=h1(f,n),u=f1(u),f=f1(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=N+S+u,w=N+y+f,F=o1(o,o.VERTEX_SHADER,L),D=o1(o,o.FRAGMENT_SHADER,w);o.attachShader(A,F),o.attachShader(A,D),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(G){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(A)||"",ct=o.getShaderInfoLog(F)||"",ft=o.getShaderInfoLog(D)||"",j=q.trim(),B=ct.trim(),z=ft.trim();let Q=!0,ut=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,F,D);else{const Et=c1(o,F,"vertex"),P=c1(o,D,"fragment");pe("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+Et+`
`+P)}else j!==""?oe("WebGLProgram: Program Info Log:",j):(B===""||z==="")&&(ut=!1);ut&&(G.diagnostics={runnable:Q,programLog:j,vertexShader:{log:B,prefix:S},fragmentShader:{log:z,prefix:y}})}o.deleteShader(F),o.deleteShader(D),T=new Uu(o,A),U=JT(o,A)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(A,kT)),k},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=D,this}let mA=0;class gA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,a){const o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new vA(t),n.set(t,a)),a}}class vA{constructor(t){this.id=mA++,this.code=t,this.usedTimes=0}}function _A(s){return s===sr||s===Ou||s===Iu}function xA(s,t,n,a,o,c){const u=new cp,f=new gA,p=new Set,d=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return p.add(T),T===0?"uv":`uv${T}`}function A(T,U,k,G,q,ct){const ft=G.fog,j=q.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Q=t.get(T.envMap||B,z),ut=Q&&Q.mapping===qu?Q.image.height:null,Et=x[T.type];T.precision!==null&&(v=a.getMaxPrecision(T.precision),v!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const P=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,K=P!==void 0?P.length:0;let St=0;j.morphAttributes.position!==void 0&&(St=1),j.morphAttributes.normal!==void 0&&(St=2),j.morphAttributes.color!==void 0&&(St=3);let At,wt,tt,xt;if(Et){const kt=ua[Et];At=kt.vertexShader,wt=kt.fragmentShader}else{At=T.vertexShader,wt=T.fragmentShader;const kt=f.getVertexShaderStage(T),cn=f.getFragmentShaderStage(T);f.update(T,kt,cn),tt=kt.id,xt=cn.id}const yt=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),ae=q.isInstancedMesh===!0,Qt=q.isBatchedMesh===!0,ze=!!T.map,le=!!T.matcap,ge=!!Q,we=!!T.aoMap,be=!!T.lightMap,mt=!!T.bumpMap&&T.wireframe===!1,$t=!!T.normalMap,ue=!!T.displacementMap,fe=!!T.emissiveMap,ve=!!T.metalnessMap,Ge=!!T.roughnessMap,X=T.anisotropy>0,Te=T.clearcoat>0,me=T.dispersion>0,I=T.iridescence>0,E=T.sheen>0,$=T.transmission>0,st=X&&!!T.anisotropyMap,ht=Te&&!!T.clearcoatMap,Rt=Te&&!!T.clearcoatNormalMap,Nt=Te&&!!T.clearcoatRoughnessMap,dt=I&&!!T.iridescenceMap,pt=I&&!!T.iridescenceThicknessMap,Dt=E&&!!T.sheenColorMap,Ht=E&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Lt=!!T.specularColorMap,te=!!T.specularIntensityMap,ee=$&&!!T.transmissionMap,ce=$&&!!T.thicknessMap,W=!!T.gradientMap,Ct=!!T.alphaMap,vt=T.alphaTest>0,Ut=!!T.alphaHash,Bt=!!T.extensions;let Tt=da;T.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Tt=s.toneMapping);const Yt={shaderID:Et,shaderType:T.type,shaderName:T.name,vertexShader:At,fragmentShader:wt,defines:T.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Qt,batchingColor:Qt&&q._colorsTexture!==null,instancing:ae,instancingColor:ae&&q.instanceColor!==null,instancingMorph:ae&&q.morphTexture!==null,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Pe.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ze,matcap:le,envMap:ge,envMapMode:ge&&Q.mapping,envMapCubeUVHeight:ut,aoMap:we,lightMap:be,bumpMap:mt,normalMap:$t,displacementMap:ue,emissiveMap:fe,normalMapObjectSpace:$t&&T.normalMapType===NS,normalMapTangentSpace:$t&&T.normalMapType===Fu,packedNormalMap:$t&&T.normalMapType===Fu&&_A(T.normalMap.format),metalnessMap:ve,roughnessMap:Ge,anisotropy:X,anisotropyMap:st,clearcoat:Te,clearcoatMap:ht,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Nt,dispersion:me,iridescence:I,iridescenceMap:dt,iridescenceThicknessMap:pt,sheen:E,sheenColorMap:Dt,sheenRoughnessMap:Ht,specularMap:Ot,specularColorMap:Lt,specularIntensityMap:te,transmission:$,transmissionMap:ee,thicknessMap:ce,gradientMap:W,opaque:T.transparent===!1&&T.blending===ro&&T.alphaToCoverage===!1,alphaMap:Ct,alphaTest:vt,alphaHash:Ut,combine:T.combine,mapUv:ze&&b(T.map.channel),aoMapUv:we&&b(T.aoMap.channel),lightMapUv:be&&b(T.lightMap.channel),bumpMapUv:mt&&b(T.bumpMap.channel),normalMapUv:$t&&b(T.normalMap.channel),displacementMapUv:ue&&b(T.displacementMap.channel),emissiveMapUv:fe&&b(T.emissiveMap.channel),metalnessMapUv:ve&&b(T.metalnessMap.channel),roughnessMapUv:Ge&&b(T.roughnessMap.channel),anisotropyMapUv:st&&b(T.anisotropyMap.channel),clearcoatMapUv:ht&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(T.sheenRoughnessMap.channel),specularMapUv:Ot&&b(T.specularMap.channel),specularColorMapUv:Lt&&b(T.specularColorMap.channel),specularIntensityMapUv:te&&b(T.specularIntensityMap.channel),transmissionMapUv:ee&&b(T.transmissionMap.channel),thicknessMapUv:ce&&b(T.thicknessMap.channel),alphaMapUv:Ct&&b(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&($t||X),vertexNormals:!!j.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!j.attributes.uv&&(ze||Ct),fog:!!ft,useFog:T.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||j.attributes.normal===void 0&&$t===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:zt,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:St,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ct.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Tt,decodeVideoTexture:ze&&T.map.isVideoTexture===!0&&Pe.getTransfer(T.map.colorSpace)===ke,decodeVideoTextureEmissive:fe&&T.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(T.emissiveMap.colorSpace)===ke,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ji,flipSided:T.side===ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Bt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&T.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Yt.vertexUv1s=p.has(1),Yt.vertexUv2s=p.has(2),Yt.vertexUv3s=p.has(3),p.clear(),Yt}function S(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)U.push(k),U.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(y(U,T),N(U,T),U.push(s.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function y(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function N(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function L(T){const U=x[T.type];let k;if(U){const G=ua[U];k=Pl.clone(G.uniforms)}else k=T.uniforms;return k}function w(T,U){let k=g.get(U);return k!==void 0?++k.usedTimes:(k=new pA(s,U,T,o),d.push(k),g.set(U,k)),k}function F(T){if(--T.usedTimes===0){const U=d.indexOf(T);d[U]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function D(T){f.remove(T)}function O(){f.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:L,acquireProgram:w,releaseProgram:F,releaseShaderCache:D,programs:d,dispose:O}}function yA(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function a(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function MA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function p1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function m1(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function f(v,x,b,A,S,y){let N=s[t];return N===void 0?(N={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:S,group:y},s[t]=N):(N.id=v.id,N.object=v,N.geometry=x,N.material=b,N.materialVariant=u(v),N.groupOrder=A,N.renderOrder=v.renderOrder,N.z=S,N.group=y),t++,N}function p(v,x,b,A,S,y){const N=f(v,x,b,A,S,y);b.transmission>0?a.push(N):b.transparent===!0?o.push(N):n.push(N)}function d(v,x,b,A,S,y){const N=f(v,x,b,A,S,y);b.transmission>0?a.unshift(N):b.transparent===!0?o.unshift(N):n.unshift(N)}function g(v,x,b){n.length>1&&n.sort(v||MA),a.length>1&&a.sort(x||p1),o.length>1&&o.sort(x||p1),b&&(n.reverse(),a.reverse(),o.reverse())}function _(){for(let v=t,x=s.length;v<x;v++){const b=s[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:p,unshift:d,finish:_,sort:g}}function SA(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new m1,s.set(a,[u])):o>=c.length?(u=new m1,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function bA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Z,color:new se};break;case"SpotLight":n={position:new Z,direction:new Z,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[t.id]=n,n}}}function EA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let TA=0;function AA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wA(s){const t=new bA,n=EA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new Z);const o=new Z,c=new an,u=new an;function f(d){let g=0,_=0,v=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,b=0,A=0,S=0,y=0,N=0,L=0,w=0,F=0,D=0,O=0;d.sort(AA);for(let U=0,k=d.length;U<k;U++){const G=d[U],q=G.color,ct=G.intensity,ft=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===sr?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=q.r*ct,_+=q.g*ct,v+=q.b*ct;else if(G.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(G.sh.coefficients[B],ct);O++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,Q=n.get(G);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,a.directionalShadow[x]=Q,a.directionalShadowMap[x]=j,a.directionalShadowMatrix[x]=G.shadow.matrix,N++}a.directional[x]=B,x++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(q).multiplyScalar(ct),B.distance=ft,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,a.spot[A]=B;const z=G.shadow;if(G.map&&(a.spotLightMap[F]=G.map,F++,z.updateMatrices(G),G.castShadow&&D++),a.spotLightMatrix[A]=z.matrix,G.castShadow){const Q=n.get(G);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,a.spotShadow[A]=Q,a.spotShadowMap[A]=j,w++}A++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(q).multiplyScalar(ct),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=B,S++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const z=G.shadow,Q=n.get(G);Q.shadowIntensity=z.intensity,Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,Q.shadowCameraNear=z.camera.near,Q.shadowCameraFar=z.camera.far,a.pointShadow[b]=Q,a.pointShadowMap[b]=j,a.pointShadowMatrix[b]=G.shadow.matrix,L++}a.point[b]=B,b++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(ct),B.groundColor.copy(G.groundColor).multiplyScalar(ct),a.hemi[y]=B,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ft.LTC_FLOAT_1,a.rectAreaLTC2=Ft.LTC_FLOAT_2):(a.rectAreaLTC1=Ft.LTC_HALF_1,a.rectAreaLTC2=Ft.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const T=a.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==A||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==N||T.numPointShadows!==L||T.numSpotShadows!==w||T.numSpotMaps!==F||T.numLightProbes!==O)&&(a.directional.length=x,a.spot.length=A,a.rectArea.length=S,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=w+F-D,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=D,a.numLightProbes=O,T.directionalLength=x,T.pointLength=b,T.spotLength=A,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=N,T.numPointShadows=L,T.numSpotShadows=w,T.numSpotMaps=F,T.numLightProbes=O,a.version=TA++)}function p(d,g){let _=0,v=0,x=0,b=0,A=0;const S=g.matrixWorldInverse;for(let y=0,N=d.length;y<N;y++){const L=d[y];if(L.isDirectionalLight){const w=a.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),_++}else if(L.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const w=a.rectArea[b];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),u.identity(),c.copy(L.matrixWorld),c.premultiply(S),u.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),b++}else if(L.isPointLight){const w=a.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const w=a.hemi[A];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(S),A++}}}return{setup:f,setupView:p,state:a}}function g1(s){const t=new wA(s),n=[],a=[],o=[];function c(v){_.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function f(v){a.push(v)}function p(v){o.push(v)}function d(){t.setup(n)}function g(v){t.setupView(n,v)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function RA(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new g1(s),t.set(o,[f])):c>=u.length?(f=new g1(s),u.push(f)):f=u[c],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const CA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,NA=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],UA=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],v1=new an,xl=new Z,Hd=new Z;function LA(s,t,n){let a=new fp;const o=new jt,c=new jt,u=new dn,f=new dx,p=new N2,d={},g=n.maxTextureSize,_={[ws]:ei,[ei]:ws,[ji]:ji},v=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:CA,fragmentShader:DA}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new ea;b.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Tn(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let y=this.type;this.render=function(D,O,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;this.type===oS&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wu);const U=s.getRenderTarget(),k=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),q=s.state;q.setBlending(ta),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ct=y!==this.type;ct&&O.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(j=>j.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,j=D.length;ft<j;ft++){const B=D[ft],z=B.shadow;if(z===void 0){oe("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const Q=z.getFrameExtents();o.multiply(Q),c.copy(z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Q.x),o.x=c.x*Q.x,z.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Q.y),o.y=c.y*Q.y,z.mapSize.y=c.y));const ut=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ut,z.map===null||ct===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===bl){if(B.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Xn(o.x,o.y,{format:sr,type:ni,minFilter:On,magFilter:On,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new fo(o.x,o.y,$i),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=Wa,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dn,z.map.depthTexture.magFilter=Dn}else B.isPointLight?(z.map=new xx(o.x),z.map.depthTexture=new A2(o.x,pa)):(z.map=new Xn(o.x,o.y),z.map.depthTexture=new fo(o.x,o.y,pa)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=Wa,this.type===wu?(z.map.depthTexture.compareFunction=ut?rp:sp,z.map.depthTexture.minFilter=On,z.map.depthTexture.magFilter=On):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dn,z.map.depthTexture.magFilter=Dn);z.camera.updateProjectionMatrix()}const Et=z.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Et;P++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,P),s.clear();else{P===0&&(s.setRenderTarget(z.map),s.clear());const K=z.getViewport(P);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),q.viewport(u)}if(B.isPointLight){const K=z.camera,St=z.matrix,At=B.distance||K.far;At!==K.far&&(K.far=At,K.updateProjectionMatrix()),xl.setFromMatrixPosition(B.matrixWorld),K.position.copy(xl),Hd.copy(K.position),Hd.add(NA[P]),K.up.copy(UA[P]),K.lookAt(Hd),K.updateMatrixWorld(),St.makeTranslation(-xl.x,-xl.y,-xl.z),v1.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),z._frustum.setFromProjectionMatrix(v1,K.coordinateSystem,K.reversedDepth)}else z.updateMatrices(B);a=z.getFrustum(),w(O,T,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===bl&&N(z,T),z.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(U,k,G)};function N(D,O){const T=t.update(A);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Xn(o.x,o.y,{format:sr,type:ni})),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(O,null,T,v,A,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(O,null,T,x,A,null)}function L(D,O,T,U){let k=null;const G=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)k=G;else if(k=T.isPointLight===!0?p:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const q=k.uuid,ct=O.uuid;let ft=d[q];ft===void 0&&(ft={},d[q]=ft);let j=ft[ct];j===void 0&&(j=k.clone(),ft[ct]=j,O.addEventListener("dispose",F)),k=j}if(k.visible=O.visible,k.wireframe=O.wireframe,U===bl?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:_[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=s.properties.get(k);q.light=T}return k}function w(D,O,T,U,k){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===bl)&&(!D.frustumCulled||a.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const ct=t.update(D),ft=D.material;if(Array.isArray(ft)){const j=ct.groups;for(let B=0,z=j.length;B<z;B++){const Q=j[B],ut=ft[Q.materialIndex];if(ut&&ut.visible){const Et=L(D,ut,U,k);D.onBeforeShadow(s,D,O,T,ct,Et,Q),s.renderBufferDirect(T,null,ct,Et,D,Q),D.onAfterShadow(s,D,O,T,ct,Et,Q)}}}else if(ft.visible){const j=L(D,ft,U,k);D.onBeforeShadow(s,D,O,T,ct,j,null),s.renderBufferDirect(T,null,ct,j,D,null),D.onAfterShadow(s,D,O,T,ct,j,null)}}const q=D.children;for(let ct=0,ft=q.length;ct<ft;ct++)w(q[ct],O,T,U,k)}function F(D){D.target.removeEventListener("dispose",F);for(const T in d){const U=d[T],k=D.target.uuid;k in U&&(U[k].dispose(),delete U[k])}}}function PA(s,t){function n(){let W=!1;const Ct=new dn;let vt=null;const Ut=new dn(0,0,0,0);return{setMask:function(Bt){vt!==Bt&&!W&&(s.colorMask(Bt,Bt,Bt,Bt),vt=Bt)},setLocked:function(Bt){W=Bt},setClear:function(Bt,Tt,Yt,kt,cn){cn===!0&&(Bt*=kt,Tt*=kt,Yt*=kt),Ct.set(Bt,Tt,Yt,kt),Ut.equals(Ct)===!1&&(s.clearColor(Bt,Tt,Yt,kt),Ut.copy(Ct))},reset:function(){W=!1,vt=null,Ut.set(-1,0,0,0)}}}function a(){let W=!1,Ct=!1,vt=null,Ut=null,Bt=null;return{setReversed:function(Tt){if(Ct!==Tt){const Yt=t.get("EXT_clip_control");Tt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Tt;const kt=Bt;Bt=null,this.setClear(kt)}},getReversed:function(){return Ct},setTest:function(Tt){Tt?yt(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(Tt){vt!==Tt&&!W&&(s.depthMask(Tt),vt=Tt)},setFunc:function(Tt){if(Ct&&(Tt=GS[Tt]),Ut!==Tt){switch(Tt){case Qd:s.depthFunc(s.NEVER);break;case $d:s.depthFunc(s.ALWAYS);break;case Jd:s.depthFunc(s.LESS);break;case co:s.depthFunc(s.LEQUAL);break;case t0:s.depthFunc(s.EQUAL);break;case e0:s.depthFunc(s.GEQUAL);break;case n0:s.depthFunc(s.GREATER);break;case i0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ut=Tt}},setLocked:function(Tt){W=Tt},setClear:function(Tt){Bt!==Tt&&(Bt=Tt,Ct&&(Tt=1-Tt),s.clearDepth(Tt))},reset:function(){W=!1,vt=null,Ut=null,Bt=null,Ct=!1}}}function o(){let W=!1,Ct=null,vt=null,Ut=null,Bt=null,Tt=null,Yt=null,kt=null,cn=null;return{setTest:function(Xe){W||(Xe?yt(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(Xe){Ct!==Xe&&!W&&(s.stencilMask(Xe),Ct=Xe)},setFunc:function(Xe,pi,mi){(vt!==Xe||Ut!==pi||Bt!==mi)&&(s.stencilFunc(Xe,pi,mi),vt=Xe,Ut=pi,Bt=mi)},setOp:function(Xe,pi,mi){(Tt!==Xe||Yt!==pi||kt!==mi)&&(s.stencilOp(Xe,pi,mi),Tt=Xe,Yt=pi,kt=mi)},setLocked:function(Xe){W=Xe},setClear:function(Xe){cn!==Xe&&(s.clearStencil(Xe),cn=Xe)},reset:function(){W=!1,Ct=null,vt=null,Ut=null,Bt=null,Tt=null,Yt=null,kt=null,cn=null}}}const c=new n,u=new a,f=new o,p=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],A=null,S=!1,y=null,N=null,L=null,w=null,F=null,D=null,O=null,T=new se(0,0,0),U=0,k=!1,G=null,q=null,ct=null,ft=null,j=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const ut=s.getParameter(s.VERSION);ut.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ut)[1]),z=Q>=1):ut.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),z=Q>=2);let Et=null,P={};const K=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),At=new dn().fromArray(K),wt=new dn().fromArray(St);function tt(W,Ct,vt,Ut){const Bt=new Uint8Array(4),Tt=s.createTexture();s.bindTexture(W,Tt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<vt;Yt++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,Ut,0,s.RGBA,s.UNSIGNED_BYTE,Bt):s.texImage2D(Ct+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Bt);return Tt}const xt={};xt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),yt(s.DEPTH_TEST),u.setFunc(co),mt(!1),$t(d_),yt(s.CULL_FACE),we(ta);function yt(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function zt(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function ae(W,Ct){return v[W]!==Ct?(s.bindFramebuffer(W,Ct),v[W]=Ct,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ct),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Qt(W,Ct){let vt=b,Ut=!1;if(W){vt=x.get(Ct),vt===void 0&&(vt=[],x.set(Ct,vt));const Bt=W.textures;if(vt.length!==Bt.length||vt[0]!==s.COLOR_ATTACHMENT0){for(let Tt=0,Yt=Bt.length;Tt<Yt;Tt++)vt[Tt]=s.COLOR_ATTACHMENT0+Tt;vt.length=Bt.length,Ut=!0}}else vt[0]!==s.BACK&&(vt[0]=s.BACK,Ut=!0);Ut&&s.drawBuffers(vt)}function ze(W){return A!==W?(s.useProgram(W),A=W,!0):!1}const le={[tr]:s.FUNC_ADD,[cS]:s.FUNC_SUBTRACT,[uS]:s.FUNC_REVERSE_SUBTRACT};le[hS]=s.MIN,le[fS]=s.MAX;const ge={[dS]:s.ZERO,[pS]:s.ONE,[mS]:s.SRC_COLOR,[Kd]:s.SRC_ALPHA,[MS]:s.SRC_ALPHA_SATURATE,[xS]:s.DST_COLOR,[vS]:s.DST_ALPHA,[gS]:s.ONE_MINUS_SRC_COLOR,[jd]:s.ONE_MINUS_SRC_ALPHA,[yS]:s.ONE_MINUS_DST_COLOR,[_S]:s.ONE_MINUS_DST_ALPHA,[SS]:s.CONSTANT_COLOR,[bS]:s.ONE_MINUS_CONSTANT_COLOR,[ES]:s.CONSTANT_ALPHA,[TS]:s.ONE_MINUS_CONSTANT_ALPHA};function we(W,Ct,vt,Ut,Bt,Tt,Yt,kt,cn,Xe){if(W===ta){S===!0&&(zt(s.BLEND),S=!1);return}if(S===!1&&(yt(s.BLEND),S=!0),W!==lS){if(W!==y||Xe!==k){if((N!==tr||F!==tr)&&(s.blendEquation(s.FUNC_ADD),N=tr,F=tr),Xe)switch(W){case ro:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zd:s.blendFunc(s.ONE,s.ONE);break;case p_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case m_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:pe("WebGLState: Invalid blending: ",W);break}else switch(W){case ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case p_:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m_:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",W);break}L=null,w=null,D=null,O=null,T.set(0,0,0),U=0,y=W,k=Xe}return}Bt=Bt||Ct,Tt=Tt||vt,Yt=Yt||Ut,(Ct!==N||Bt!==F)&&(s.blendEquationSeparate(le[Ct],le[Bt]),N=Ct,F=Bt),(vt!==L||Ut!==w||Tt!==D||Yt!==O)&&(s.blendFuncSeparate(ge[vt],ge[Ut],ge[Tt],ge[Yt]),L=vt,w=Ut,D=Tt,O=Yt),(kt.equals(T)===!1||cn!==U)&&(s.blendColor(kt.r,kt.g,kt.b,cn),T.copy(kt),U=cn),y=W,k=!1}function be(W,Ct){W.side===ji?zt(s.CULL_FACE):yt(s.CULL_FACE);let vt=W.side===ei;Ct&&(vt=!vt),mt(vt),W.blending===ro&&W.transparent===!1?we(ta):we(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ut=W.stencilWrite;f.setTest(Ut),Ut&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),fe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){G!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),G=W)}function $t(W){W!==sS?(yt(s.CULL_FACE),W!==q&&(W===d_?s.cullFace(s.BACK):W===rS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),q=W}function ue(W){W!==ct&&(z&&s.lineWidth(W),ct=W)}function fe(W,Ct,vt){W?(yt(s.POLYGON_OFFSET_FILL),(ft!==Ct||j!==vt)&&(ft=Ct,j=vt,u.getReversed()&&(Ct=-Ct),s.polygonOffset(Ct,vt))):zt(s.POLYGON_OFFSET_FILL)}function ve(W){W?yt(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function Ge(W){W===void 0&&(W=s.TEXTURE0+B-1),Et!==W&&(s.activeTexture(W),Et=W)}function X(W,Ct,vt){vt===void 0&&(Et===null?vt=s.TEXTURE0+B-1:vt=Et);let Ut=P[vt];Ut===void 0&&(Ut={type:void 0,texture:void 0},P[vt]=Ut),(Ut.type!==W||Ut.texture!==Ct)&&(Et!==vt&&(s.activeTexture(vt),Et=vt),s.bindTexture(W,Ct||xt[W]),Ut.type=W,Ut.texture=Ct)}function Te(){const W=P[Et];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(W){pe("WebGLState:",W)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(W){pe("WebGLState:",W)}}function E(){try{s.texSubImage2D(...arguments)}catch(W){pe("WebGLState:",W)}}function $(){try{s.texSubImage3D(...arguments)}catch(W){pe("WebGLState:",W)}}function st(){try{s.compressedTexSubImage2D(...arguments)}catch(W){pe("WebGLState:",W)}}function ht(){try{s.compressedTexSubImage3D(...arguments)}catch(W){pe("WebGLState:",W)}}function Rt(){try{s.texStorage2D(...arguments)}catch(W){pe("WebGLState:",W)}}function Nt(){try{s.texStorage3D(...arguments)}catch(W){pe("WebGLState:",W)}}function dt(){try{s.texImage2D(...arguments)}catch(W){pe("WebGLState:",W)}}function pt(){try{s.texImage3D(...arguments)}catch(W){pe("WebGLState:",W)}}function Dt(W){return _[W]!==void 0?_[W]:s.getParameter(W)}function Ht(W,Ct){_[W]!==Ct&&(s.pixelStorei(W,Ct),_[W]=Ct)}function Ot(W){At.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),At.copy(W))}function Lt(W){wt.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),wt.copy(W))}function te(W,Ct){let vt=d.get(Ct);vt===void 0&&(vt=new WeakMap,d.set(Ct,vt));let Ut=vt.get(W);Ut===void 0&&(Ut=s.getUniformBlockIndex(Ct,W.name),vt.set(W,Ut))}function ee(W,Ct){const Ut=d.get(Ct).get(W);p.get(Ct)!==Ut&&(s.uniformBlockBinding(Ct,Ut,W.__bindingPointIndex),p.set(Ct,Ut))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},Et=null,P={},v={},x=new WeakMap,b=[],A=null,S=!1,y=null,N=null,L=null,w=null,F=null,D=null,O=null,T=new se(0,0,0),U=0,k=!1,G=null,q=null,ct=null,ft=null,j=null,At.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:yt,disable:zt,bindFramebuffer:ae,drawBuffers:Qt,useProgram:ze,setBlending:we,setMaterial:be,setFlipSided:mt,setCullFace:$t,setLineWidth:ue,setPolygonOffset:fe,setScissorTest:ve,activeTexture:Ge,bindTexture:X,unbindTexture:Te,compressedTexImage2D:me,compressedTexImage3D:I,texImage2D:dt,texImage3D:pt,pixelStorei:Ht,getParameter:Dt,updateUBOMapping:te,uniformBlockBinding:ee,texStorage2D:Rt,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:st,compressedTexSubImage3D:ht,scissor:Ot,viewport:Lt,reset:ce}}function OA(s,t,n,a,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new jt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,E){return b?new OffscreenCanvas(I,E):Hu("canvas")}function S(I,E,$){let st=1;const ht=me(I);if((ht.width>$||ht.height>$)&&(st=$/Math.max(ht.width,ht.height)),st<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Rt=Math.floor(st*ht.width),Nt=Math.floor(st*ht.height);v===void 0&&(v=A(Rt,Nt));const dt=E?A(Rt,Nt):v;return dt.width=Rt,dt.height=Nt,dt.getContext("2d").drawImage(I,0,0,Rt,Nt),oe("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Rt+"x"+Nt+")."),dt}else return"data"in I&&oe("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function y(I){return I.generateMipmaps}function N(I){s.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(I,E,$,st,ht,Rt=!1){if(I!==null){if(s[I]!==void 0)return s[I];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Nt;st&&(Nt=t.get("EXT_texture_norm16"),Nt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=E;if(E===s.RED&&($===s.FLOAT&&(dt=s.R32F),$===s.HALF_FLOAT&&(dt=s.R16F),$===s.UNSIGNED_BYTE&&(dt=s.R8),$===s.UNSIGNED_SHORT&&Nt&&(dt=Nt.R16_EXT),$===s.SHORT&&Nt&&(dt=Nt.R16_SNORM_EXT)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(dt=s.R8UI),$===s.UNSIGNED_SHORT&&(dt=s.R16UI),$===s.UNSIGNED_INT&&(dt=s.R32UI),$===s.BYTE&&(dt=s.R8I),$===s.SHORT&&(dt=s.R16I),$===s.INT&&(dt=s.R32I)),E===s.RG&&($===s.FLOAT&&(dt=s.RG32F),$===s.HALF_FLOAT&&(dt=s.RG16F),$===s.UNSIGNED_BYTE&&(dt=s.RG8),$===s.UNSIGNED_SHORT&&Nt&&(dt=Nt.RG16_EXT),$===s.SHORT&&Nt&&(dt=Nt.RG16_SNORM_EXT)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(dt=s.RG8UI),$===s.UNSIGNED_SHORT&&(dt=s.RG16UI),$===s.UNSIGNED_INT&&(dt=s.RG32UI),$===s.BYTE&&(dt=s.RG8I),$===s.SHORT&&(dt=s.RG16I),$===s.INT&&(dt=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(dt=s.RGB8UI),$===s.UNSIGNED_SHORT&&(dt=s.RGB16UI),$===s.UNSIGNED_INT&&(dt=s.RGB32UI),$===s.BYTE&&(dt=s.RGB8I),$===s.SHORT&&(dt=s.RGB16I),$===s.INT&&(dt=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(dt=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(dt=s.RGBA16UI),$===s.UNSIGNED_INT&&(dt=s.RGBA32UI),$===s.BYTE&&(dt=s.RGBA8I),$===s.SHORT&&(dt=s.RGBA16I),$===s.INT&&(dt=s.RGBA32I)),E===s.RGB&&($===s.UNSIGNED_SHORT&&Nt&&(dt=Nt.RGB16_EXT),$===s.SHORT&&Nt&&(dt=Nt.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(dt=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(dt=s.R11F_G11F_B10F)),E===s.RGBA){const pt=Rt?zu:Pe.getTransfer(ht);$===s.FLOAT&&(dt=s.RGBA32F),$===s.HALF_FLOAT&&(dt=s.RGBA16F),$===s.UNSIGNED_BYTE&&(dt=pt===ke?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Nt&&(dt=Nt.RGBA16_EXT),$===s.SHORT&&Nt&&(dt=Nt.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function F(I,E){let $;return I?E===null||E===pa||E===Dl?$=s.DEPTH24_STENCIL8:E===$i?$=s.DEPTH32F_STENCIL8:E===Cl&&($=s.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pa||E===Dl?$=s.DEPTH_COMPONENT24:E===$i?$=s.DEPTH_COMPONENT32F:E===Cl&&($=s.DEPTH_COMPONENT16),$}function D(I,E){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Dn&&I.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function O(I){const E=I.target;E.removeEventListener("dispose",O),U(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(I){const E=I.target;E.removeEventListener("dispose",T),G(E)}function U(I){const E=a.get(I);if(E.__webglInit===void 0)return;const $=I.source,st=x.get($);if(st){const ht=st[E.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&k(I),Object.keys(st).length===0&&x.delete($)}a.remove(I)}function k(I){const E=a.get(I);s.deleteTexture(E.__webglTexture);const $=I.source,st=x.get($);delete st[E.__cacheKey],u.memory.textures--}function G(I){const E=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let ht=0;ht<E.__webglFramebuffer[st].length;ht++)s.deleteFramebuffer(E.__webglFramebuffer[st][ht]);else s.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)s.deleteFramebuffer(E.__webglFramebuffer[st]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=I.textures;for(let st=0,ht=$.length;st<ht;st++){const Rt=a.get($[st]);Rt.__webglTexture&&(s.deleteTexture(Rt.__webglTexture),u.memory.textures--),a.remove($[st])}a.remove(I)}let q=0;function ct(){q=0}function ft(){return q}function j(I){q=I}function B(){const I=q;return I>=o.maxTextures&&oe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),q+=1,I}function z(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function Q(I,E){const $=a.get(I);if(I.isVideoTexture&&X(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const st=I.image;if(st===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{zt($,I,E);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function ut(I,E){const $=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){zt($,I,E);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function Et(I,E){const $=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){zt($,I,E);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function P(I,E){const $=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){ae($,I,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const K={[Rl]:s.REPEAT,[ha]:s.CLAMP_TO_EDGE,[a0]:s.MIRRORED_REPEAT},St={[Dn]:s.NEAREST,[RS]:s.NEAREST_MIPMAP_NEAREST,[Kc]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[ud]:s.LINEAR_MIPMAP_NEAREST,[nr]:s.LINEAR_MIPMAP_LINEAR},At={[US]:s.NEVER,[FS]:s.ALWAYS,[LS]:s.LESS,[sp]:s.LEQUAL,[PS]:s.EQUAL,[rp]:s.GEQUAL,[OS]:s.GREATER,[IS]:s.NOTEQUAL};function wt(I,E){if(E.type===$i&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===ud||E.magFilter===Kc||E.magFilter===nr||E.minFilter===On||E.minFilter===ud||E.minFilter===Kc||E.minFilter===nr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,K[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,K[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,K[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,St[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==Kc&&E.minFilter!==nr||E.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function tt(I,E){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",O));const st=E.source;let ht=x.get(st);ht===void 0&&(ht={},x.set(st,ht));const Rt=z(E);if(Rt!==I.__cacheKey){ht[Rt]===void 0&&(ht[Rt]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ht[Rt].usedTimes++;const Nt=ht[I.__cacheKey];Nt!==void 0&&(ht[I.__cacheKey].usedTimes--,Nt.usedTimes===0&&k(E)),I.__cacheKey=Rt,I.__webglTexture=ht[Rt].texture}return $}function xt(I,E,$){return Math.floor(Math.floor(I/$)/E)}function yt(I,E,$,st){const Rt=I.updateRanges;if(Rt.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,$,st,E.data);else{Rt.sort((Ht,Ot)=>Ht.start-Ot.start);let Nt=0;for(let Ht=1;Ht<Rt.length;Ht++){const Ot=Rt[Nt],Lt=Rt[Ht],te=Ot.start+Ot.count,ee=xt(Lt.start,E.width,4),ce=xt(Ot.start,E.width,4);Lt.start<=te+1&&ee===ce&&xt(Lt.start+Lt.count-1,E.width,4)===ee?Ot.count=Math.max(Ot.count,Lt.start+Lt.count-Ot.start):(++Nt,Rt[Nt]=Lt)}Rt.length=Nt+1;const dt=n.getParameter(s.UNPACK_ROW_LENGTH),pt=n.getParameter(s.UNPACK_SKIP_PIXELS),Dt=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ht=0,Ot=Rt.length;Ht<Ot;Ht++){const Lt=Rt[Ht],te=Math.floor(Lt.start/4),ee=Math.ceil(Lt.count/4),ce=te%E.width,W=Math.floor(te/E.width),Ct=ee,vt=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),n.pixelStorei(s.UNPACK_SKIP_ROWS,W),n.texSubImage2D(s.TEXTURE_2D,0,ce,W,Ct,vt,$,st,E.data)}I.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,dt),n.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(s.UNPACK_SKIP_ROWS,Dt)}}function zt(I,E,$){let st=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=s.TEXTURE_3D);const ht=tt(I,E),Rt=E.source;n.bindTexture(st,I.__webglTexture,s.TEXTURE0+$);const Nt=a.get(Rt);if(Rt.version!==Nt.__version||ht===!0){if(n.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const vt=Pe.getPrimaries(Pe.workingColorSpace),Ut=E.colorSpace===Gi?null:Pe.getPrimaries(E.colorSpace),Bt=E.colorSpace===Gi||vt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let pt=S(E.image,!1,o.maxTextureSize);pt=Te(E,pt);const Dt=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type);let Ot=w(E.internalFormat,Dt,Ht,E.normalized,E.colorSpace,E.isVideoTexture);wt(st,E);let Lt;const te=E.mipmaps,ee=E.isVideoTexture!==!0,ce=Nt.__version===void 0||ht===!0,W=Rt.dataReady,Ct=D(E,pt);if(E.isDepthTexture)Ot=F(E.format===ir,E.type),ce&&(ee?n.texStorage2D(s.TEXTURE_2D,1,Ot,pt.width,pt.height):n.texImage2D(s.TEXTURE_2D,0,Ot,pt.width,pt.height,0,Dt,Ht,null));else if(E.isDataTexture)if(te.length>0){ee&&ce&&n.texStorage2D(s.TEXTURE_2D,Ct,Ot,te[0].width,te[0].height);for(let vt=0,Ut=te.length;vt<Ut;vt++)Lt=te[vt],ee?W&&n.texSubImage2D(s.TEXTURE_2D,vt,0,0,Lt.width,Lt.height,Dt,Ht,Lt.data):n.texImage2D(s.TEXTURE_2D,vt,Ot,Lt.width,Lt.height,0,Dt,Ht,Lt.data);E.generateMipmaps=!1}else ee?(ce&&n.texStorage2D(s.TEXTURE_2D,Ct,Ot,pt.width,pt.height),W&&yt(E,pt,Dt,Ht)):n.texImage2D(s.TEXTURE_2D,0,Ot,pt.width,pt.height,0,Dt,Ht,pt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ee&&ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Ot,te[0].width,te[0].height,pt.depth);for(let vt=0,Ut=te.length;vt<Ut;vt++)if(Lt=te[vt],E.format!==Ji)if(Dt!==null)if(ee){if(W)if(E.layerUpdates.size>0){const Bt=K_(Lt.width,Lt.height,E.format,E.type);for(const Tt of E.layerUpdates){const Yt=Lt.data.subarray(Tt*Bt/Lt.data.BYTES_PER_ELEMENT,(Tt+1)*Bt/Lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,Tt,Lt.width,Lt.height,1,Dt,Yt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,Lt.width,Lt.height,pt.depth,Dt,Lt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,vt,Ot,Lt.width,Lt.height,pt.depth,0,Lt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,Lt.width,Lt.height,pt.depth,Dt,Ht,Lt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,vt,Ot,Lt.width,Lt.height,pt.depth,0,Dt,Ht,Lt.data)}else{ee&&ce&&n.texStorage2D(s.TEXTURE_2D,Ct,Ot,te[0].width,te[0].height);for(let vt=0,Ut=te.length;vt<Ut;vt++)Lt=te[vt],E.format!==Ji?Dt!==null?ee?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,vt,0,0,Lt.width,Lt.height,Dt,Lt.data):n.compressedTexImage2D(s.TEXTURE_2D,vt,Ot,Lt.width,Lt.height,0,Lt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?W&&n.texSubImage2D(s.TEXTURE_2D,vt,0,0,Lt.width,Lt.height,Dt,Ht,Lt.data):n.texImage2D(s.TEXTURE_2D,vt,Ot,Lt.width,Lt.height,0,Dt,Ht,Lt.data)}else if(E.isDataArrayTexture)if(ee){if(ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Ot,pt.width,pt.height,pt.depth),W)if(E.layerUpdates.size>0){const vt=K_(pt.width,pt.height,E.format,E.type);for(const Ut of E.layerUpdates){const Bt=pt.data.subarray(Ut*vt/pt.data.BYTES_PER_ELEMENT,(Ut+1)*vt/pt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ut,pt.width,pt.height,1,Dt,Ht,Bt)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Dt,Ht,pt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,pt.width,pt.height,pt.depth,0,Dt,Ht,pt.data);else if(E.isData3DTexture)ee?(ce&&n.texStorage3D(s.TEXTURE_3D,Ct,Ot,pt.width,pt.height,pt.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Dt,Ht,pt.data)):n.texImage3D(s.TEXTURE_3D,0,Ot,pt.width,pt.height,pt.depth,0,Dt,Ht,pt.data);else if(E.isFramebufferTexture){if(ce)if(ee)n.texStorage2D(s.TEXTURE_2D,Ct,Ot,pt.width,pt.height);else{let vt=pt.width,Ut=pt.height;for(let Bt=0;Bt<Ct;Bt++)n.texImage2D(s.TEXTURE_2D,Bt,Ot,vt,Ut,0,Dt,Ht,null),vt>>=1,Ut>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const vt=s.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),pt.parentNode!==vt){vt.appendChild(pt),_.add(E),vt.onpaint=Ut=>{const Bt=Ut.changedElements;for(const Tt of _)Bt.includes(Tt.image)&&(Tt.needsUpdate=!0)},vt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,pt);else{const Bt=s.RGBA,Tt=s.RGBA,Yt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Bt,Tt,Yt,pt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(te.length>0){if(ee&&ce){const vt=me(te[0]);n.texStorage2D(s.TEXTURE_2D,Ct,Ot,vt.width,vt.height)}for(let vt=0,Ut=te.length;vt<Ut;vt++)Lt=te[vt],ee?W&&n.texSubImage2D(s.TEXTURE_2D,vt,0,0,Dt,Ht,Lt):n.texImage2D(s.TEXTURE_2D,vt,Ot,Dt,Ht,Lt);E.generateMipmaps=!1}else if(ee){if(ce){const vt=me(pt);n.texStorage2D(s.TEXTURE_2D,Ct,Ot,vt.width,vt.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Dt,Ht,pt)}else n.texImage2D(s.TEXTURE_2D,0,Ot,Dt,Ht,pt);y(E)&&N(st),Nt.__version=Rt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ae(I,E,$){if(E.image.length!==6)return;const st=tt(I,E),ht=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+$);const Rt=a.get(ht);if(ht.version!==Rt.__version||st===!0){n.activeTexture(s.TEXTURE0+$);const Nt=Pe.getPrimaries(Pe.workingColorSpace),dt=E.colorSpace===Gi?null:Pe.getPrimaries(E.colorSpace),pt=E.colorSpace===Gi||Nt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ht=E.image[0]&&E.image[0].isDataTexture,Ot=[];for(let Tt=0;Tt<6;Tt++)!Dt&&!Ht?Ot[Tt]=S(E.image[Tt],!0,o.maxCubemapSize):Ot[Tt]=Ht?E.image[Tt].image:E.image[Tt],Ot[Tt]=Te(E,Ot[Tt]);const Lt=Ot[0],te=c.convert(E.format,E.colorSpace),ee=c.convert(E.type),ce=w(E.internalFormat,te,ee,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Ct=Rt.__version===void 0||st===!0,vt=ht.dataReady;let Ut=D(E,Lt);wt(s.TEXTURE_CUBE_MAP,E);let Bt;if(Dt){W&&Ct&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,ce,Lt.width,Lt.height);for(let Tt=0;Tt<6;Tt++){Bt=Ot[Tt].mipmaps;for(let Yt=0;Yt<Bt.length;Yt++){const kt=Bt[Yt];E.format!==Ji?te!==null?W?vt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Yt,0,0,kt.width,kt.height,te,kt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Yt,ce,kt.width,kt.height,0,kt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?vt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Yt,0,0,kt.width,kt.height,te,ee,kt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Yt,ce,kt.width,kt.height,0,te,ee,kt.data)}}}else{if(Bt=E.mipmaps,W&&Ct){Bt.length>0&&Ut++;const Tt=me(Ot[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,ce,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(Ht){W?vt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Ot[Tt].width,Ot[Tt].height,te,ee,Ot[Tt].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ce,Ot[Tt].width,Ot[Tt].height,0,te,ee,Ot[Tt].data);for(let Yt=0;Yt<Bt.length;Yt++){const cn=Bt[Yt].image[Tt].image;W?vt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Yt+1,0,0,cn.width,cn.height,te,ee,cn.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Yt+1,ce,cn.width,cn.height,0,te,ee,cn.data)}}else{W?vt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,te,ee,Ot[Tt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ce,te,ee,Ot[Tt]);for(let Yt=0;Yt<Bt.length;Yt++){const kt=Bt[Yt];W?vt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Yt+1,0,0,te,ee,kt.image[Tt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Yt+1,ce,te,ee,kt.image[Tt])}}}y(E)&&N(s.TEXTURE_CUBE_MAP),Rt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Qt(I,E,$,st,ht,Rt){const Nt=c.convert($.format,$.colorSpace),dt=c.convert($.type),pt=w($.internalFormat,Nt,dt,$.normalized,$.colorSpace),Dt=a.get(E),Ht=a.get($);if(Ht.__renderTarget=E,!Dt.__hasExternalTextures){const Ot=Math.max(1,E.width>>Rt),Lt=Math.max(1,E.height>>Rt);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?n.texImage3D(ht,Rt,pt,Ot,Lt,E.depth,0,Nt,dt,null):n.texImage2D(ht,Rt,pt,Ot,Lt,0,Nt,dt,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),Ge(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,ht,Ht.__webglTexture,0,ve(E)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,ht,Ht.__webglTexture,Rt),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(I,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const st=E.depthTexture,ht=st&&st.isDepthTexture?st.type:null,Rt=F(E.stencilBuffer,ht),Nt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ge(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve(E),Rt,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve(E),Rt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Nt,s.RENDERBUFFER,I)}else{const st=E.textures;for(let ht=0;ht<st.length;ht++){const Rt=st[ht],Nt=c.convert(Rt.format,Rt.colorSpace),dt=c.convert(Rt.type),pt=w(Rt.internalFormat,Nt,dt,Rt.normalized,Rt.colorSpace);Ge(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve(E),pt,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve(E),pt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function le(I,E,$){const st=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=a.get(E.depthTexture);if(ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),st){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),ht.__webglTexture===void 0){ht.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),wt(s.TEXTURE_CUBE_MAP,E.depthTexture);const Dt=c.convert(E.depthTexture.format),Ht=c.convert(E.depthTexture.type);let Ot;E.depthTexture.format===Wa?Ot=s.DEPTH_COMPONENT24:E.depthTexture.format===ir&&(Ot=s.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,Ot,E.width,E.height,0,Dt,Ht,null)}}else Q(E.depthTexture,0);const Rt=ht.__webglTexture,Nt=ve(E),dt=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,pt=E.depthTexture.format===ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Wa)Ge(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,dt,Rt,0,Nt):s.framebufferTexture2D(s.FRAMEBUFFER,pt,dt,Rt,0);else if(E.depthTexture.format===ir)Ge(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,dt,Rt,0,Nt):s.framebufferTexture2D(s.FRAMEBUFFER,pt,dt,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ge(I){const E=a.get(I),$=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const st=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const ht=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",ht)};st.addEventListener("dispose",ht),E.__depthDisposeCallback=ht}E.__boundDepthTexture=st}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let st=0;st<6;st++)le(E.__webglFramebuffer[st],I,st);else{const st=I.texture.mipmaps;st&&st.length>0?le(E.__webglFramebuffer[0],I,0):le(E.__webglFramebuffer,I,0)}else if($){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=s.createRenderbuffer(),ze(E.__webglDepthbuffer[st],I,!1);else{const ht=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=E.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,Rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,Rt)}}else{const st=I.texture.mipmaps;if(st&&st.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ze(E.__webglDepthbuffer,I,!1);else{const ht=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,Rt)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function we(I,E,$){const st=a.get(I);E!==void 0&&Qt(st.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&ge(I)}function be(I){const E=I.texture,$=a.get(I),st=a.get(E);I.addEventListener("dispose",T);const ht=I.textures,Rt=I.isWebGLCubeRenderTarget===!0,Nt=ht.length>1;if(Nt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=E.version,u.memory.textures++),Rt){$.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[dt]=[];for(let pt=0;pt<E.mipmaps.length;pt++)$.__webglFramebuffer[dt][pt]=s.createFramebuffer()}else $.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let dt=0;dt<E.mipmaps.length;dt++)$.__webglFramebuffer[dt]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Nt)for(let dt=0,pt=ht.length;dt<pt;dt++){const Dt=a.get(ht[dt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&Ge(I)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let dt=0;dt<ht.length;dt++){const pt=ht[dt];$.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[dt]);const Dt=c.convert(pt.format,pt.colorSpace),Ht=c.convert(pt.type),Ot=w(pt.internalFormat,Dt,Ht,pt.normalized,pt.colorSpace,I.isXRRenderTarget===!0),Lt=ve(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,Ot,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,$.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ze($.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Rt){n.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),wt(s.TEXTURE_CUBE_MAP,E);for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)Qt($.__webglFramebuffer[dt][pt],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,pt);else Qt($.__webglFramebuffer[dt],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);y(E)&&N(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Nt){for(let dt=0,pt=ht.length;dt<pt;dt++){const Dt=ht[dt],Ht=a.get(Dt);let Ot=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ot=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ot,Ht.__webglTexture),wt(Ot,Dt),Qt($.__webglFramebuffer,I,Dt,s.COLOR_ATTACHMENT0+dt,Ot,0),y(Dt)&&N(Ot)}n.unbindTexture()}else{let dt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(dt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(dt,st.__webglTexture),wt(dt,E),E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)Qt($.__webglFramebuffer[pt],I,E,s.COLOR_ATTACHMENT0,dt,pt);else Qt($.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,dt,0);y(E)&&N(dt),n.unbindTexture()}I.depthBuffer&&ge(I)}function mt(I){const E=I.textures;for(let $=0,st=E.length;$<st;$++){const ht=E[$];if(y(ht)){const Rt=L(I),Nt=a.get(ht).__webglTexture;n.bindTexture(Rt,Nt),N(Rt),n.unbindTexture()}}}const $t=[],ue=[];function fe(I){if(I.samples>0){if(Ge(I)===!1){const E=I.textures,$=I.width,st=I.height;let ht=s.COLOR_BUFFER_BIT;const Rt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=a.get(I),dt=E.length>1;if(dt)for(let Dt=0;Dt<E.length;Dt++)n.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const pt=I.texture.mipmaps;pt&&pt.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const Ht=a.get(E[Dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ht,0)}s.blitFramebuffer(0,0,$,st,0,0,$,st,ht,s.NEAREST),p===!0&&($t.length=0,ue.length=0,$t.push(s.COLOR_ATTACHMENT0+Dt),I.depthBuffer&&I.resolveDepthBuffer===!1&&($t.push(Rt),ue.push(Rt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ue)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$t))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let Dt=0;Dt<E.length;Dt++){n.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const Ht=a.get(E[Dt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,Ht,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ve(I){return Math.min(o.maxSamples,I.samples)}function Ge(I){const E=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(I){const E=u.render.frame;g.get(I)!==E&&(g.set(I,E),I.update())}function Te(I,E){const $=I.colorSpace,st=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Bu&&$!==Gi&&(Pe.getTransfer($)===ke?(st!==Ji||ht!==Ri)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",$)),E}function me(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=ct,this.getTextureUnits=ft,this.setTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=ut,this.setTexture3D=Et,this.setTextureCube=P,this.rebindTextures=we,this.setupRenderTarget=be,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function IA(s,t){function n(a,o=Gi){let c;const u=Pe.getTransfer(o);if(a===Ri)return s.UNSIGNED_BYTE;if(a===J0)return s.UNSIGNED_SHORT_4_4_4_4;if(a===tp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===K1)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===j1)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===Y1)return s.BYTE;if(a===Z1)return s.SHORT;if(a===Cl)return s.UNSIGNED_SHORT;if(a===$0)return s.INT;if(a===pa)return s.UNSIGNED_INT;if(a===$i)return s.FLOAT;if(a===ni)return s.HALF_FLOAT;if(a===Q1)return s.ALPHA;if(a===$1)return s.RGB;if(a===Ji)return s.RGBA;if(a===Wa)return s.DEPTH_COMPONENT;if(a===ir)return s.DEPTH_STENCIL;if(a===ep)return s.RED;if(a===np)return s.RED_INTEGER;if(a===sr)return s.RG;if(a===ip)return s.RG_INTEGER;if(a===ap)return s.RGBA_INTEGER;if(a===Ru||a===Cu||a===Du||a===Nu)if(u===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Ru)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Ru)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===s0||a===r0||a===o0||a===l0)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===s0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===r0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===o0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===l0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===c0||a===u0||a===h0||a===f0||a===d0||a===Ou||a===p0)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===c0||a===u0)return u===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===h0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===f0)return c.COMPRESSED_R11_EAC;if(a===d0)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Ou)return c.COMPRESSED_RG11_EAC;if(a===p0)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===m0||a===g0||a===v0||a===_0||a===x0||a===y0||a===M0||a===S0||a===b0||a===E0||a===T0||a===A0||a===w0||a===R0)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===m0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===g0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===v0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===_0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===x0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===y0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===M0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===S0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===b0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===E0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===T0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===A0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===w0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===R0)return u===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===C0||a===D0||a===N0)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===C0)return u===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===D0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===N0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===U0||a===L0||a===Iu||a===P0)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===U0)return c.COMPRESSED_RED_RGTC1_EXT;if(a===L0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===P0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Dl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const FA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new cx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new In({vertexShader:FA,fragmentShader:BA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tn(new Fl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends Rs{constructor(t,n){super();const a=this;let o=null,c=1,u=null,f="local-floor",p=1,d=null,g=null,_=null,v=null,x=null,b=null;const A=typeof XRWebGLBinding<"u",S=new zA,y={},N=n.getContextAttributes();let L=null,w=null;const F=[],D=[],O=new jt;let T=null;const U=new wi;U.viewport=new dn;const k=new wi;k.viewport=new dn;const G=[U,k],q=new I2;let ct=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let xt=F[tt];return xt===void 0&&(xt=new gd,F[tt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(tt){let xt=F[tt];return xt===void 0&&(xt=new gd,F[tt]=xt),xt.getGripSpace()},this.getHand=function(tt){let xt=F[tt];return xt===void 0&&(xt=new gd,F[tt]=xt),xt.getHandSpace()};function j(tt){const xt=D.indexOf(tt.inputSource);if(xt===-1)return;const yt=F[xt];yt!==void 0&&(yt.update(tt.inputSource,tt.frame,d||u),yt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function B(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",z);for(let tt=0;tt<F.length;tt++){const xt=D[tt];xt!==null&&(D[tt]=null,F[tt].disconnect(xt))}ct=null,ft=null,S.reset();for(const tt in y)delete y[tt];t.setRenderTarget(L),x=null,v=null,_=null,o=null,w=null,wt.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,a.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){f=tt,a.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(tt){d=tt},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(tt){if(o=tt,o!==null){if(L=t.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",B),o.addEventListener("inputsourceschange",z),N.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,zt=null,ae=null;N.depth&&(ae=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=N.stencil?ir:Wa,zt=N.stencil?Dl:pa);const Qt={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Qt),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),w=new Xn(v.textureWidth,v.textureHeight,{format:Ji,type:Ri,depthTexture:new fo(v.textureWidth,v.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const yt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,yt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Xn(x.framebufferWidth,x.framebufferHeight,{format:Ji,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(f),wt.setContext(o),wt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function z(tt){for(let xt=0;xt<tt.removed.length;xt++){const yt=tt.removed[xt],zt=D.indexOf(yt);zt>=0&&(D[zt]=null,F[zt].disconnect(yt))}for(let xt=0;xt<tt.added.length;xt++){const yt=tt.added[xt];let zt=D.indexOf(yt);if(zt===-1){for(let Qt=0;Qt<F.length;Qt++)if(Qt>=D.length){D.push(yt),zt=Qt;break}else if(D[Qt]===null){D[Qt]=yt,zt=Qt;break}if(zt===-1)break}const ae=F[zt];ae&&ae.connect(yt)}}const Q=new Z,ut=new Z;function Et(tt,xt,yt){Q.setFromMatrixPosition(xt.matrixWorld),ut.setFromMatrixPosition(yt.matrixWorld);const zt=Q.distanceTo(ut),ae=xt.projectionMatrix.elements,Qt=yt.projectionMatrix.elements,ze=ae[14]/(ae[10]-1),le=ae[14]/(ae[10]+1),ge=(ae[9]+1)/ae[5],we=(ae[9]-1)/ae[5],be=(ae[8]-1)/ae[0],mt=(Qt[8]+1)/Qt[0],$t=ze*be,ue=ze*mt,fe=zt/(-be+mt),ve=fe*-be;if(xt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ve),tt.translateZ(fe),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),ae[10]===-1)tt.projectionMatrix.copy(xt.projectionMatrix),tt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const Ge=ze+fe,X=le+fe,Te=$t-ve,me=ue+(zt-ve),I=ge*le/X*Ge,E=we*le/X*Ge;tt.projectionMatrix.makePerspective(Te,me,I,E,Ge,X),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function P(tt,xt){xt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(xt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(o===null)return;let xt=tt.near,yt=tt.far;S.texture!==null&&(S.depthNear>0&&(xt=S.depthNear),S.depthFar>0&&(yt=S.depthFar)),q.near=k.near=U.near=xt,q.far=k.far=U.far=yt,(ct!==q.near||ft!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),ct=q.near,ft=q.far),q.layers.mask=tt.layers.mask|6,U.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;const zt=tt.parent,ae=q.cameras;P(q,zt);for(let Qt=0;Qt<ae.length;Qt++)P(ae[Qt],zt);ae.length===2?Et(q,U,k):q.projectionMatrix.copy(U.projectionMatrix),K(tt,q,zt)};function K(tt,xt,yt){yt===null?tt.matrix.copy(xt.matrixWorld):(tt.matrix.copy(yt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(xt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(xt.projectionMatrix),tt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ul*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(tt){p=tt,v!==null&&(v.fixedFoveation=tt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=tt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(tt){return y[tt]};let St=null;function At(tt,xt){if(g=xt.getViewerPose(d||u),b=xt,g!==null){const yt=g.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let zt=!1;yt.length!==q.cameras.length&&(q.cameras.length=0,zt=!0);for(let le=0;le<yt.length;le++){const ge=yt[le];let we=null;if(x!==null)we=x.getViewport(ge);else{const mt=_.getViewSubImage(v,ge);we=mt.viewport,le===0&&(t.setRenderTargetTextures(w,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(w))}let be=G[le];be===void 0&&(be=new wi,be.layers.enable(le),be.viewport=new dn,G[le]=be),be.matrix.fromArray(ge.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(ge.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(we.x,we.y,we.width,we.height),le===0&&(q.matrix.copy(be.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),zt===!0&&q.cameras.push(be)}const ae=o.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=a.getBinding();const le=_.getDepthInformation(yt[0]);le&&le.isValid&&le.texture&&S.init(le,o.renderState)}if(ae&&ae.includes("camera-access")&&A){t.state.unbindTexture(),_=a.getBinding();for(let le=0;le<yt.length;le++){const ge=yt[le].camera;if(ge){let we=y[ge];we||(we=new cx,y[ge]=we);const be=_.getCameraImage(ge);we.sourceTexture=be}}}}for(let yt=0;yt<F.length;yt++){const zt=D[yt],ae=F[yt];zt!==null&&ae!==void 0&&ae.update(zt,xt,d||u)}St&&St(tt,xt),xt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:xt}),b=null}const wt=new vx;wt.setAnimationLoop(At),this.setAnimationLoop=function(tt){St=tt},this.dispose=function(){}}}const GA=new an,Ex=new he;Ex.set(-1,0,0,0,1,0,0,0,1);function VA(s,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,ux(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,N,L,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(c(S,y),b(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),A(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?p(S,y,N,L):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ei&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ei&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=t.get(y),L=N.envMap,w=N.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(w)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Ex),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,N,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=L*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const N=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function kA(s,t,n,a){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,F){const D=F.program;a.uniformBlockBinding(w,D)}function d(w,F){let D=o[w.id];D===void 0&&(S(w),D=g(w),o[w.id]=D,w.addEventListener("dispose",N));const O=F.program;a.updateUBOMapping(w,O);const T=t.render.frame;c[w.id]!==T&&(v(w),c[w.id]=T)}function g(w){const F=_();w.__bindingPointIndex=F;const D=s.createBuffer(),O=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,O,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,F,D),D}function _(){for(let w=0;w<f;w++)if(u.indexOf(w)===-1)return u.push(w),w;return pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const F=o[w.id],D=w.uniforms,O=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let T=0,U=D.length;T<U;T++){const k=D[T];if(Array.isArray(k))for(let G=0,q=k.length;G<q;G++)x(k[G],T,G,O);else x(k,T,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(w,F,D,O){if(A(w,F,D,O)===!0){const T=w.__offset,U=w.value;if(Array.isArray(U)){let k=0;for(let G=0;G<U.length;G++){const q=U[G],ct=y(q);b(q,w.__data,k),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(k+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(U,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,w.__data)}}function b(w,F,D){typeof w=="number"||typeof w=="boolean"?F[0]=w:w.isMatrix3?(F[0]=w.elements[0],F[1]=w.elements[1],F[2]=w.elements[2],F[3]=0,F[4]=w.elements[3],F[5]=w.elements[4],F[6]=w.elements[5],F[7]=0,F[8]=w.elements[6],F[9]=w.elements[7],F[10]=w.elements[8],F[11]=0):ArrayBuffer.isView(w)?F.set(new w.constructor(w.buffer,w.byteOffset,F.length)):w.toArray(F,D)}function A(w,F,D,O){const T=w.value,U=F+"_"+D;if(O[U]===void 0)return typeof T=="number"||typeof T=="boolean"?O[U]=T:ArrayBuffer.isView(T)?O[U]=T.slice():O[U]=T.clone(),!0;{const k=O[U];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return O[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function S(w){const F=w.uniforms;let D=0;const O=16;for(let U=0,k=F.length;U<k;U++){const G=Array.isArray(F[U])?F[U]:[F[U]];for(let q=0,ct=G.length;q<ct;q++){const ft=G[q],j=Array.isArray(ft.value)?ft.value:[ft.value];for(let B=0,z=j.length;B<z;B++){const Q=j[B],ut=y(Q),Et=D%O,P=Et%ut.boundary,K=Et+P;D+=P,K!==0&&O-K<ut.storage&&(D+=O-K),ft.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=D,D+=ut.storage}}}const T=D%O;return T>0&&(D+=O-T),w.__size=D,w.__cache={},this}function y(w){const F={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(F.boundary=4,F.storage=4):w.isVector2?(F.boundary=8,F.storage=8):w.isVector3||w.isColor?(F.boundary=16,F.storage=12):w.isVector4?(F.boundary=16,F.storage=16):w.isMatrix3?(F.boundary=48,F.storage=48):w.isMatrix4?(F.boundary=64,F.storage=64):w.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(F.boundary=16,F.storage=w.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",w),F}function N(w){const F=w.target;F.removeEventListener("dispose",N);const D=u.indexOf(F.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(o[F.id]),delete o[F.id],delete c[F.id]}function L(){for(const w in o)s.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:p,update:d,dispose:L}}const WA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function XA(){return ca===null&&(ca=new rx(WA,16,16,sr,ni),ca.name="DFG_LUT",ca.minFilter=On,ca.magFilter=On,ca.wrapS=ha,ca.wrapT=ha,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class qA{constructor(t={}){const{canvas:n=zS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Ri}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const A=x,S=new Set([ap,ip,np]),y=new Set([Ri,pa,Cl,Dl,J0,tp]),N=new Uint32Array(4),L=new Int32Array(4),w=new Z;let F=null,D=null;const O=[],T=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,q=null,ct=null,ft=null,j=null;this._outputColorSpace=hi;let B=0,z=0,Q=null,ut=-1,Et=null;const P=new dn,K=new dn;let St=null;const At=new se(0);let wt=0,tt=n.width,xt=n.height,yt=1,zt=null,ae=null;const Qt=new dn(0,0,tt,xt),ze=new dn(0,0,tt,xt);let le=!1;const ge=new fp;let we=!1,be=!1;const mt=new an,$t=new Z,ue=new dn,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Ge(){return Q===null?yt:1}let X=a;function Te(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${q0}`),n.addEventListener("webglcontextlost",cn,!1),n.addEventListener("webglcontextrestored",Xe,!1),n.addEventListener("webglcontextcreationerror",pi,!1),X===null){const Y="webgl2";if(X=Te(Y,R),X===null)throw Te(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw pe("WebGLRenderer: "+R.message),R}let me,I,E,$,st,ht,Rt,Nt,dt,pt,Dt,Ht,Ot,Lt,te,ee,ce,W,Ct,vt,Ut,Bt,Tt;function Yt(){me=new XE(X),me.init(),Ut=new IA(X,me),I=new FE(X,me,t,Ut),E=new PA(X,me),I.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ct=X.createFramebuffer(),ft=X.createFramebuffer(),j=X.createFramebuffer(),$=new ZE(X),st=new yA,ht=new OA(X,me,E,st,I,Ut,$),Rt=new WE(k),Nt=new $2(X),Bt=new OE(X,Nt),dt=new qE(X,Nt,$,Bt),pt=new jE(X,dt,Nt,Bt,$),W=new KE(X,I,ht),te=new BE(st),Dt=new xA(k,Rt,me,I,Bt,te),Ht=new VA(k,st),Ot=new SA,Lt=new RA(me),ce=new PE(k,Rt,E,pt,b,p),ee=new LA(k,pt,I),Tt=new kA(X,$,I,E),Ct=new IE(X,me,$),vt=new YE(X,me,$),$.programs=Dt.programs,k.capabilities=I,k.extensions=me,k.properties=st,k.renderLists=Ot,k.shadowMap=ee,k.state=E,k.info=$}Yt(),A!==Ri&&(U=new $E(A,n.width,n.height,f,o,c));const kt=new HA(k,X);this.xr=kt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(R){R!==void 0&&(yt=R,this.setSize(tt,xt,!1))},this.getSize=function(R){return R.set(tt,xt)},this.setSize=function(R,Y,rt=!0){if(kt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=R,xt=Y,n.width=Math.floor(R*yt),n.height=Math.floor(Y*yt),rt===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(tt*yt,xt*yt).floor()},this.setDrawingBufferSize=function(R,Y,rt){tt=R,xt=Y,yt=rt,n.width=Math.floor(R*rt),n.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(A===Ri){pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(Qt)},this.setViewport=function(R,Y,rt,it){R.isVector4?Qt.set(R.x,R.y,R.z,R.w):Qt.set(R,Y,rt,it),E.viewport(P.copy(Qt).multiplyScalar(yt).round())},this.getScissor=function(R){return R.copy(ze)},this.setScissor=function(R,Y,rt,it){R.isVector4?ze.set(R.x,R.y,R.z,R.w):ze.set(R,Y,rt,it),E.scissor(K.copy(ze).multiplyScalar(yt).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){E.setScissorTest(le=R)},this.setOpaqueSort=function(R){zt=R},this.setTransparentSort=function(R){ae=R},this.getClearColor=function(R){return R.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let it=0;if(R){let at=!1;if(Q!==null){const It=Q.texture.format;at=S.has(It)}if(at){const It=Q.texture.type,Vt=y.has(It),Pt=ce.getClearColor(),Xt=ce.getClearAlpha(),Wt=Pt.r,ne=Pt.g,_e=Pt.b;Vt?(N[0]=Wt,N[1]=ne,N[2]=_e,N[3]=Xt,X.clearBufferuiv(X.COLOR,0,N)):(L[0]=Wt,L[1]=ne,L[2]=_e,L[3]=Xt,X.clearBufferiv(X.COLOR,0,L))}else it|=X.COLOR_BUFFER_BIT}Y&&(it|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(it|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&X.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){n.removeEventListener("webglcontextlost",cn,!1),n.removeEventListener("webglcontextrestored",Xe,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),ce.dispose(),Ot.dispose(),Lt.dispose(),st.dispose(),Rt.dispose(),pt.dispose(),Bt.dispose(),Tt.dispose(),Dt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",_n),kt.removeEventListener("sessionend",Bn),ii.stop()};function cn(R){R.preventDefault(),M_("WebGLRenderer: Context Lost."),G=!0}function Xe(){M_("WebGLRenderer: Context Restored."),G=!1;const R=$.autoReset,Y=ee.enabled,rt=ee.autoUpdate,it=ee.needsUpdate,at=ee.type;Yt(),$.autoReset=R,ee.enabled=Y,ee.autoUpdate=rt,ee.needsUpdate=it,ee.type=at}function pi(R){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mi(R){const Y=R.target;Y.removeEventListener("dispose",mi),yo(Y)}function yo(R){Mo(R),st.remove(R)}function Mo(R){const Y=st.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){Dt.releaseProgram(rt)}),R.isShaderMaterial&&Dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,it,at,It){Y===null&&(Y=fe);const Vt=at.isMesh&&at.matrixWorld.determinantAffine()<0,Pt=Za(R,Y,rt,it,at);E.setMaterial(it,Vt);let Xt=rt.index,Wt=1;if(it.wireframe===!0){if(Xt=dt.getWireframeAttribute(rt),Xt===void 0)return;Wt=2}const ne=rt.drawRange,_e=rt.attributes.position;let Jt=ne.start*Wt,Ie=(ne.start+ne.count)*Wt;It!==null&&(Jt=Math.max(Jt,It.start*Wt),Ie=Math.min(Ie,(It.start+It.count)*Wt)),Xt!==null?(Jt=Math.max(Jt,0),Ie=Math.min(Ie,Xt.count)):_e!=null&&(Jt=Math.max(Jt,0),Ie=Math.min(Ie,_e.count));const un=Ie-Jt;if(un<0||un===1/0)return;Bt.setup(at,it,Pt,rt,Xt);let en,qe=Ct;if(Xt!==null&&(en=Nt.get(Xt),qe=vt,qe.setIndex(en)),at.isMesh)it.wireframe===!0?(E.setLineWidth(it.wireframeLinewidth*Ge()),qe.setMode(X.LINES)):qe.setMode(X.TRIANGLES);else if(at.isLine){let Ye=it.linewidth;Ye===void 0&&(Ye=1),E.setLineWidth(Ye*Ge()),at.isLineSegments?qe.setMode(X.LINES):at.isLineLoop?qe.setMode(X.LINE_LOOP):qe.setMode(X.LINE_STRIP)}else at.isPoints?qe.setMode(X.POINTS):at.isSprite&&qe.setMode(X.TRIANGLES);if(at.isBatchedMesh)if(me.get("WEBGL_multi_draw"))qe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Ye=at._multiDrawStarts,Gt=at._multiDrawCounts,qn=at._multiDrawCount,Re=Xt?Nt.get(Xt).bytesPerElement:1,An=st.get(it).currentProgram.getUniforms();for(let gi=0;gi<qn;gi++)An.setValue(X,"_gl_DrawID",gi),qe.render(Ye[gi]/Re,Gt[gi])}else if(at.isInstancedMesh)qe.renderInstances(Jt,un,at.count);else if(rt.isInstancedBufferGeometry){const Ye=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Gt=Math.min(rt.instanceCount,Ye);qe.renderInstances(Jt,un,Gt)}else qe.render(Jt,un)};function So(R,Y,rt){R.transparent===!0&&R.side===ji&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,Ya(R,Y,rt),R.side=ws,R.needsUpdate=!0,Ya(R,Y,rt),R.side=ji):Ya(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),D=Lt.get(rt),D.init(Y),T.push(D),rt.traverseVisible(function(at){at.isLight&&at.layers.test(Y.layers)&&(D.pushLight(at),at.castShadow&&D.pushShadow(at))}),R!==rt&&R.traverseVisible(function(at){at.isLight&&at.layers.test(Y.layers)&&(D.pushLight(at),at.castShadow&&D.pushShadow(at))}),D.setupLights();const it=new Set;return R.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const It=at.material;if(It)if(Array.isArray(It))for(let Vt=0;Vt<It.length;Vt++){const Pt=It[Vt];So(Pt,rt,at),it.add(Pt)}else So(It,rt,at),it.add(It)}),D=T.pop(),it},this.compileAsync=function(R,Y,rt=null){const it=this.compile(R,Y,rt);return new Promise(at=>{function It(){if(it.forEach(function(Vt){st.get(Vt).currentProgram.isReady()&&it.delete(Vt)}),it.size===0){at(R);return}setTimeout(It,10)}me.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let cr=null;function na(R){cr&&cr(R)}function _n(){ii.stop()}function Bn(){ii.start()}const ii=new vx;ii.setAnimationLoop(na),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(R){cr=R,kt.setAnimationLoop(R),R===null?ii.stop():ii.start()},kt.addEventListener("sessionstart",_n),kt.addEventListener("sessionend",Bn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(R,Y);const rt=kt.enabled===!0&&kt.isPresenting===!0,it=U!==null&&(Q===null||rt)&&U.begin(k,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(Y),Y=kt.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,Y,Q),D=Lt.get(R,T.length),D.init(Y),D.state.textureUnits=ht.getTextureUnits(),T.push(D),mt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ge.setFromProjectionMatrix(mt,fa,Y.reversedDepth),be=this.localClippingEnabled,we=te.init(this.clippingPlanes,be),F=Ot.get(R,O.length),F.init(),O.push(F),kt.enabled===!0&&kt.isPresenting===!0){const Vt=k.xr.getDepthSensingMesh();Vt!==null&&Cs(Vt,Y,-1/0,k.sortObjects)}Cs(R,Y,0,k.sortObjects),F.finish(),k.sortObjects===!0&&F.sort(zt,ae,Y.reversedDepth),ve=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,ve&&ce.addToRenderList(F,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&te.beginShadows();const at=D.state.shadowsArray;if(ee.render(at,R,Y),we===!0&&te.endShadows(),(it&&U.hasRenderPass())===!1){const Vt=F.opaque,Pt=F.transmissive;if(D.setupLights(),Y.isArrayCamera){const Xt=Y.cameras;if(Pt.length>0)for(let Wt=0,ne=Xt.length;Wt<ne;Wt++){const _e=Xt[Wt];zl(Vt,Pt,R,_e)}ve&&ce.render(R);for(let Wt=0,ne=Xt.length;Wt<ne;Wt++){const _e=Xt[Wt];Bl(F,R,_e,_e.viewport)}}else Pt.length>0&&zl(Vt,Pt,R,Y),ve&&ce.render(R),Bl(F,R,Y)}Q!==null&&z===0&&(ht.updateMultisampleRenderTarget(Q),ht.updateRenderTargetMipmap(Q)),it&&U.end(k),R.isScene===!0&&R.onAfterRender(k,R,Y),Bt.resetDefaultState(),ut=-1,Et=null,T.pop(),T.length>0?(D=T[T.length-1],ht.setTextureUnits(D.state.textureUnits),we===!0&&te.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?F=O[O.length-1]:F=null,q!==null&&q.renderEnd()};function Cs(R,Y,rt,it){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ge.intersectsSprite(R)){it&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const Vt=pt.update(R),Pt=R.material;Pt.visible&&F.push(R,Vt,Pt,rt,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ge.intersectsObject(R))){const Vt=pt.update(R),Pt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ue.copy(R.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ue.copy(Vt.boundingSphere.center)),ue.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(Pt)){const Xt=Vt.groups;for(let Wt=0,ne=Xt.length;Wt<ne;Wt++){const _e=Xt[Wt],Jt=Pt[_e.materialIndex];Jt&&Jt.visible&&F.push(R,Vt,Jt,rt,ue.z,_e)}}else Pt.visible&&F.push(R,Vt,Pt,rt,ue.z,null)}}const It=R.children;for(let Vt=0,Pt=It.length;Vt<Pt;Vt++)Cs(It[Vt],Y,rt,it)}function Bl(R,Y,rt,it){const{opaque:at,transmissive:It,transparent:Vt}=R;D.setupLightsView(rt),we===!0&&te.setGlobalState(k.clippingPlanes,rt),it&&E.viewport(P.copy(it)),at.length>0&&Ds(at,Y,rt),It.length>0&&Ds(It,Y,rt),Vt.length>0&&Ds(Vt,Y,rt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function zl(R,Y,rt,it){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[it.id]===void 0){const Jt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[it.id]=new Xn(1,1,{generateMipmaps:!0,type:Jt?ni:Ri,minFilter:nr,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const It=D.state.transmissionRenderTarget[it.id],Vt=it.viewport||P;It.setSize(Vt.z*k.transmissionResolutionScale,Vt.w*k.transmissionResolutionScale);const Pt=k.getRenderTarget(),Xt=k.getActiveCubeFace(),Wt=k.getActiveMipmapLevel();k.setRenderTarget(It),k.getClearColor(At),wt=k.getClearAlpha(),wt<1&&k.setClearColor(16777215,.5),k.clear(),ve&&ce.render(rt);const ne=k.toneMapping;k.toneMapping=da;const _e=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),D.setupLightsView(it),we===!0&&te.setGlobalState(k.clippingPlanes,it),Ds(R,rt,it),ht.updateMultisampleRenderTarget(It),ht.updateRenderTargetMipmap(It),me.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ie=0,un=Y.length;Ie<un;Ie++){const en=Y[Ie],{object:qe,geometry:Ye,material:Gt,group:qn}=en;if(Gt.side===ji&&qe.layers.test(it.layers)){const Re=Gt.side;Gt.side=ei,Gt.needsUpdate=!0,qa(qe,rt,it,Ye,Gt,qn),Gt.side=Re,Gt.needsUpdate=!0,Jt=!0}}Jt===!0&&(ht.updateMultisampleRenderTarget(It),ht.updateRenderTargetMipmap(It))}k.setRenderTarget(Pt,Xt,Wt),k.setClearColor(At,wt),_e!==void 0&&(it.viewport=_e),k.toneMapping=ne}function Ds(R,Y,rt){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let at=0,It=R.length;at<It;at++){const Vt=R[at],{object:Pt,geometry:Xt,group:Wt}=Vt;let ne=Vt.material;ne.allowOverride===!0&&it!==null&&(ne=it),Pt.layers.test(rt.layers)&&qa(Pt,Y,rt,Xt,ne,Wt)}}function qa(R,Y,rt,it,at,It){R.onBeforeRender(k,Y,rt,it,at,It),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),at.onBeforeRender(k,Y,rt,it,R,It),at.transparent===!0&&at.side===ji&&at.forceSinglePass===!1?(at.side=ei,at.needsUpdate=!0,k.renderBufferDirect(rt,Y,it,at,R,It),at.side=ws,at.needsUpdate=!0,k.renderBufferDirect(rt,Y,it,at,R,It),at.side=ji):k.renderBufferDirect(rt,Y,it,at,R,It),R.onAfterRender(k,Y,rt,it,at,It)}function Ya(R,Y,rt){Y.isScene!==!0&&(Y=fe);const it=st.get(R),at=D.state.lights,It=D.state.shadowsArray,Vt=at.state.version,Pt=Dt.getParameters(R,at.state,It,Y,rt,D.state.lightProbeGridArray),Xt=Dt.getProgramCacheKey(Pt);let Wt=it.programs;it.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,it.fog=Y.fog;const ne=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;it.envMap=Rt.get(R.envMap||it.environment,ne),it.envMapRotation=it.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",mi),Wt=new Map,it.programs=Wt);let _e=Wt.get(Xt);if(_e!==void 0){if(it.currentProgram===_e&&it.lightsStateVersion===Vt)return va(R,Pt),_e}else Pt.uniforms=Dt.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,rt,Pt),R.onBeforeCompile(Pt,k),_e=Dt.acquireProgram(Pt,Xt),Wt.set(Xt,_e),it.uniforms=Pt.uniforms;const Jt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=te.uniform),va(R,Pt),it.needsLights=Hl(R),it.lightsStateVersion=Vt,it.needsLights&&(Jt.ambientLightColor.value=at.state.ambient,Jt.lightProbe.value=at.state.probe,Jt.directionalLights.value=at.state.directional,Jt.directionalLightShadows.value=at.state.directionalShadow,Jt.spotLights.value=at.state.spot,Jt.spotLightShadows.value=at.state.spotShadow,Jt.rectAreaLights.value=at.state.rectArea,Jt.ltc_1.value=at.state.rectAreaLTC1,Jt.ltc_2.value=at.state.rectAreaLTC2,Jt.pointLights.value=at.state.point,Jt.pointLightShadows.value=at.state.pointShadow,Jt.hemisphereLights.value=at.state.hemi,Jt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Jt.spotLightMatrix.value=at.state.spotLightMatrix,Jt.spotLightMap.value=at.state.spotLightMap,Jt.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=D.state.lightProbeGridArray.length>0,it.currentProgram=_e,it.uniformsList=null,_e}function ga(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Uu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function va(R,Y){const rt=st.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Ns(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(Y.matrixWorld);for(let rt=0,it=R.length;rt<it;rt++){const at=R[rt];if(at.texture!==null&&at.boundingBox.containsPoint(w))return at}return null}function Za(R,Y,rt,it,at){Y.isScene!==!0&&(Y=fe),ht.resetTextureUnits();const It=Y.fog,Vt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?Y.environment:null,Pt=Q===null?k.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Pe.workingColorSpace,Xt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Wt=Rt.get(it.envMap||Vt,Xt),ne=it.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,_e=!!rt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Jt=!!rt.morphAttributes.position,Ie=!!rt.morphAttributes.normal,un=!!rt.morphAttributes.color;let en=da;it.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(en=k.toneMapping);const qe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ye=qe!==void 0?qe.length:0,Gt=st.get(it),qn=D.state.lights;if(we===!0&&(be===!0||R!==Et)){const Ve=R===Et&&it.id===ut;te.setState(it,R,Ve)}let Re=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==qn.state.version||Gt.outputColorSpace!==Pt||at.isBatchedMesh&&Gt.batching===!1||!at.isBatchedMesh&&Gt.batching===!0||at.isBatchedMesh&&Gt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Gt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Gt.instancing===!1||!at.isInstancedMesh&&Gt.instancing===!0||at.isSkinnedMesh&&Gt.skinning===!1||!at.isSkinnedMesh&&Gt.skinning===!0||at.isInstancedMesh&&Gt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Gt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Gt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Gt.instancingMorph===!1&&at.morphTexture!==null||Gt.envMap!==Wt||it.fog===!0&&Gt.fog!==It||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==te.numPlanes||Gt.numIntersection!==te.numIntersection)||Gt.vertexAlphas!==ne||Gt.vertexTangents!==_e||Gt.morphTargets!==Jt||Gt.morphNormals!==Ie||Gt.morphColors!==un||Gt.toneMapping!==en||Gt.morphTargetsCount!==Ye||!!Gt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Re=!0):(Re=!0,Gt.__version=it.version);let An=Gt.currentProgram;Re===!0&&(An=Ya(it,Y,at),q&&it.isNodeMaterial&&q.onUpdateProgram(it,An,Gt));let gi=!1,Vi=!1,vi=!1;const Ze=An.getUniforms(),hn=Gt.uniforms;if(E.useProgram(An.program)&&(gi=!0,Vi=!0,vi=!0),it.id!==ut&&(ut=it.id,Vi=!0),Gt.needsLights){const Ve=Ns(D.state.lightProbeGridArray,at);Gt.lightProbeGrid!==Ve&&(Gt.lightProbeGrid=Ve,Vi=!0)}if(gi||Et!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ze.setValue(X,"projectionMatrix",R.projectionMatrix),Ze.setValue(X,"viewMatrix",R.matrixWorldInverse);const ia=Ze.map.cameraPosition;ia!==void 0&&ia.setValue(X,$t.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&Ze.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ze.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),Et!==R&&(Et=R,Vi=!0,vi=!0)}if(Gt.needsLights&&(qn.state.directionalShadowMap.length>0&&Ze.setValue(X,"directionalShadowMap",qn.state.directionalShadowMap,ht),qn.state.spotShadowMap.length>0&&Ze.setValue(X,"spotShadowMap",qn.state.spotShadowMap,ht),qn.state.pointShadowMap.length>0&&Ze.setValue(X,"pointShadowMap",qn.state.pointShadowMap,ht)),at.isSkinnedMesh){Ze.setOptional(X,at,"bindMatrix"),Ze.setOptional(X,at,"bindMatrixInverse");const Ve=at.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ze.setValue(X,"boneTexture",Ve.boneTexture,ht))}at.isBatchedMesh&&(Ze.setOptional(X,at,"batchingTexture"),Ze.setValue(X,"batchingTexture",at._matricesTexture,ht),Ze.setOptional(X,at,"batchingIdTexture"),Ze.setValue(X,"batchingIdTexture",at._indirectTexture,ht),Ze.setOptional(X,at,"batchingColorTexture"),at._colorsTexture!==null&&Ze.setValue(X,"batchingColorTexture",at._colorsTexture,ht));const ki=rt.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&W.update(at,rt,An),(Vi||Gt.receiveShadow!==at.receiveShadow)&&(Gt.receiveShadow=at.receiveShadow,Ze.setValue(X,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&Y.environment!==null&&(hn.envMapIntensity.value=Y.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=XA()),Vi){if(Ze.setValue(X,"toneMappingExposure",k.toneMappingExposure),Gt.needsLights&&xn(hn,vi),It&&it.fog===!0&&Ht.refreshFogUniforms(hn,It),Ht.refreshMaterialUniforms(hn,it,yt,xt,D.state.transmissionRenderTarget[R.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ve=Gt.lightProbeGrid;hn.probesSH.value=Ve.texture,hn.probesMin.value.copy(Ve.boundingBox.min),hn.probesMax.value.copy(Ve.boundingBox.max),hn.probesResolution.value.copy(Ve.resolution)}Uu.upload(X,ga(Gt),hn,ht)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Uu.upload(X,ga(Gt),hn,ht),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ze.setValue(X,"center",at.center),Ze.setValue(X,"modelViewMatrix",at.modelViewMatrix),Ze.setValue(X,"normalMatrix",at.normalMatrix),Ze.setValue(X,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const Ve=it.uniformsGroups;for(let ia=0,Ka=Ve.length;ia<Ka;ia++){const Us=Ve[ia];Tt.update(Us,An),Tt.bind(Us,An)}}return An}function xn(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Hl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,Y,rt){const it=st.get(R);it.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),st.get(R.texture).__webglTexture=Y,st.get(R.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:rt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=st.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,rt=0){Q=R,B=Y,z=rt;let it=null,at=!1,It=!1;if(R){const Pt=st.get(R);if(Pt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Pt.__webglFramebuffer),P.copy(R.viewport),K.copy(R.scissor),St=R.scissorTest,E.viewport(P),E.scissor(K),E.setScissorTest(St),ut=-1;return}else if(Pt.__webglFramebuffer===void 0)ht.setupRenderTarget(R);else if(Pt.__hasExternalTextures)ht.rebindTextures(R,st.get(R.texture).__webglTexture,st.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ne=R.depthTexture;if(Pt.__boundDepthTexture!==ne){if(ne!==null&&st.has(ne)&&(R.width!==ne.image.width||R.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(It=!0);const Wt=st.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?it=Wt[Y][rt]:it=Wt[Y],at=!0):R.samples>0&&ht.useMultisampledRTT(R)===!1?it=st.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?it=Wt[rt]:it=Wt,P.copy(R.viewport),K.copy(R.scissor),St=R.scissorTest}else P.copy(Qt).multiplyScalar(yt).floor(),K.copy(ze).multiplyScalar(yt).floor(),St=le;if(rt!==0&&(it=ct),E.bindFramebuffer(X.FRAMEBUFFER,it)&&E.drawBuffers(R,it),E.viewport(P),E.scissor(K),E.setScissorTest(St),at){const Pt=st.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,rt)}else if(It){const Pt=Y;for(let Xt=0;Xt<R.textures.length;Xt++){const Wt=st.get(R.textures[Xt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Xt,Wt.__webglTexture,rt,Pt)}}else if(R!==null&&rt!==0){const Pt=st.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Pt.__webglTexture,rt)}ut=-1},this.readRenderTargetPixels=function(R,Y,rt,it,at,It,Vt,Pt=0){if(!(R&&R.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){E.bindFramebuffer(X.FRAMEBUFFER,Xt);try{const Wt=R.textures[Pt],ne=Wt.format,_e=Wt.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pt),!I.textureFormatReadable(ne)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(_e)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-it&&rt>=0&&rt<=R.height-at&&X.readPixels(Y,rt,it,at,Ut.convert(ne),Ut.convert(_e),It)}finally{const Wt=Q!==null?st.get(Q).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,it,at,It,Vt,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(Y>=0&&Y<=R.width-it&&rt>=0&&rt<=R.height-at){E.bindFramebuffer(X.FRAMEBUFFER,Xt);const Wt=R.textures[Pt],ne=Wt.format,_e=Wt.type;if(R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pt),!I.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Jt),X.bufferData(X.PIXEL_PACK_BUFFER,It.byteLength,X.STREAM_READ),X.readPixels(Y,rt,it,at,Ut.convert(ne),Ut.convert(_e),0);const Ie=Q!==null?st.get(Q).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Ie);const un=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await HS(X,un,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Jt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,It),X.deleteBuffer(Jt),X.deleteSync(un),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const it=Math.pow(2,-rt),at=Math.floor(R.image.width*it),It=Math.floor(R.image.height*it),Vt=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;ht.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,rt,0,0,Vt,Pt,at,It),E.unbindTexture()},this.copyTextureToTexture=function(R,Y,rt=null,it=null,at=0,It=0){let Vt,Pt,Xt,Wt,ne,_e,Jt,Ie,un;const en=R.isCompressedTexture?R.mipmaps[It]:R.image;if(rt!==null)Vt=rt.max.x-rt.min.x,Pt=rt.max.y-rt.min.y,Xt=rt.isBox3?rt.max.z-rt.min.z:1,Wt=rt.min.x,ne=rt.min.y,_e=rt.isBox3?rt.min.z:0;else{const hn=Math.pow(2,-at);Vt=Math.floor(en.width*hn),Pt=Math.floor(en.height*hn),R.isDataArrayTexture?Xt=en.depth:R.isData3DTexture?Xt=Math.floor(en.depth*hn):Xt=1,Wt=0,ne=0,_e=0}it!==null?(Jt=it.x,Ie=it.y,un=it.z):(Jt=0,Ie=0,un=0);const qe=Ut.convert(Y.format),Ye=Ut.convert(Y.type);let Gt;Y.isData3DTexture?(ht.setTexture3D(Y,0),Gt=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ht.setTexture2DArray(Y,0),Gt=X.TEXTURE_2D_ARRAY):(ht.setTexture2D(Y,0),Gt=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const qn=E.getParameter(X.UNPACK_ROW_LENGTH),Re=E.getParameter(X.UNPACK_IMAGE_HEIGHT),An=E.getParameter(X.UNPACK_SKIP_PIXELS),gi=E.getParameter(X.UNPACK_SKIP_ROWS),Vi=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,en.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,en.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Wt),E.pixelStorei(X.UNPACK_SKIP_ROWS,ne),E.pixelStorei(X.UNPACK_SKIP_IMAGES,_e);const vi=R.isDataArrayTexture||R.isData3DTexture,Ze=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const hn=st.get(R),ki=st.get(Y),Ve=st.get(hn.__renderTarget),ia=st.get(ki.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,Ve.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let Ka=0;Ka<Xt;Ka++)vi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,st.get(R).__webglTexture,at,_e+Ka),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,st.get(Y).__webglTexture,It,un+Ka)),X.blitFramebuffer(Wt,ne,Vt,Pt,Jt,Ie,Vt,Pt,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(at!==0||R.isRenderTargetTexture||st.has(R)){const hn=st.get(R),ki=st.get(Y);E.bindFramebuffer(X.READ_FRAMEBUFFER,ft),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,j);for(let Ve=0;Ve<Xt;Ve++)vi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,hn.__webglTexture,at,_e+Ve):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,hn.__webglTexture,at),Ze?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ki.__webglTexture,It,un+Ve):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ki.__webglTexture,It),at!==0?X.blitFramebuffer(Wt,ne,Vt,Pt,Jt,Ie,Vt,Pt,X.COLOR_BUFFER_BIT,X.NEAREST):Ze?X.copyTexSubImage3D(Gt,It,Jt,Ie,un+Ve,Wt,ne,Vt,Pt):X.copyTexSubImage2D(Gt,It,Jt,Ie,Wt,ne,Vt,Pt);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ze?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Gt,It,Jt,Ie,un,Vt,Pt,Xt,qe,Ye,en.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Gt,It,Jt,Ie,un,Vt,Pt,Xt,qe,en.data):X.texSubImage3D(Gt,It,Jt,Ie,un,Vt,Pt,Xt,qe,Ye,en):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,It,Jt,Ie,Vt,Pt,qe,Ye,en.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,It,Jt,Ie,en.width,en.height,qe,en.data):X.texSubImage2D(X.TEXTURE_2D,It,Jt,Ie,Vt,Pt,qe,Ye,en);E.pixelStorei(X.UNPACK_ROW_LENGTH,qn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Re),E.pixelStorei(X.UNPACK_SKIP_PIXELS,An),E.pixelStorei(X.UNPACK_SKIP_ROWS,gi),E.pixelStorei(X.UNPACK_SKIP_IMAGES,Vi),It===0&&Y.generateMipmaps&&X.generateMipmap(Gt),E.unbindTexture()},this.initRenderTarget=function(R){st.get(R).__webglFramebuffer===void 0&&ht.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ht.setTextureCube(R,0):R.isData3DTexture?ht.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ht.setTexture2DArray(R,0):ht.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){B=0,z=0,Q=null,E.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Pe._getUnpackColorSpace()}}const _1={type:"change"},gp={type:"start"},Tx={type:"end"},xu=new up,x1=new Ga,YA=Math.cos(70*tx.DEG2RAD),Rn=new Z,ui=2*Math.PI,tn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gd=1e-6;class ZA extends j2{constructor(t,n=null){super(t,n),this.state=tn.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Va.ROTATE,MIDDLE:Va.DOLLY,RIGHT:Va.PAN},this.touches={ONE:so.ROTATE,TWO:so.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new ma,this._lastTargetPosition=new Z,this._quat=new ma().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Y_,this._sphericalDelta=new Y_,this._scale=1,this._panOffset=new Z,this._rotateStart=new jt,this._rotateEnd=new jt,this._rotateDelta=new jt,this._panStart=new jt,this._panEnd=new jt,this._panDelta=new jt,this._dollyStart=new jt,this._dollyEnd=new jt,this._dollyDelta=new jt,this._dollyDirection=new Z,this._mouse=new jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jA.bind(this),this._onPointerDown=KA.bind(this),this._onPointerUp=QA.bind(this),this._onContextMenu=aw.bind(this),this._onMouseWheel=tw.bind(this),this._onKeyDown=ew.bind(this),this._onTouchStart=nw.bind(this),this._onTouchMove=iw.bind(this),this._onMouseDown=$A.bind(this),this._onMouseMove=JA.bind(this),this._interceptControlDown=sw.bind(this),this._interceptControlUp=rw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_1),this.update(),this.state=tn.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;Rn.copy(n).sub(this.target),Rn.applyQuaternion(this._quat),this._spherical.setFromVector3(Rn),this.autoRotate&&this.state===tn.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=ui:a>Math.PI&&(a-=ui),o<-Math.PI?o+=ui:o>Math.PI&&(o-=ui),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(Rn.setFromSpherical(this._spherical),Rn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=Rn.length();u=this._clampDistance(f*this._scale);const p=f-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const f=new Z(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(f),this.object.updateMatrixWorld(),u=Rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(xu.origin.copy(this.object.position),xu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xu.direction))<YA?this.object.lookAt(this.target):(x1.setFromNormalAndCoplanarPoint(this.object.up,this.target),xu.intersectPlane(x1,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Gd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gd||this._lastTargetPosition.distanceToSquared(this.target)>Gd?(this.dispatchEvent(_1),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ui/60*this.autoRotateSpeed*t:ui/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Rn.setFromMatrixColumn(n,0),Rn.multiplyScalar(-t),this._panOffset.add(Rn)}_panUp(t,n){this.screenSpacePanning===!0?Rn.setFromMatrixColumn(n,1):(Rn.setFromMatrixColumn(n,0),Rn.crossVectors(this.object.up,Rn)),Rn.multiplyScalar(t),this._panOffset.add(Rn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Rn.copy(o).sub(this.target);let c=Rn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,f=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/n.clientHeight),this._rotateUp(ui*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/n.clientHeight),this._rotateUp(ui*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,f=(t.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new jt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function KA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function QA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tx),this.state=tn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function $A(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Va.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=tn.DOLLY;break;case Va.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=tn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=tn.ROTATE}break;case Va.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=tn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=tn.PAN}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(gp)}function JA(s){switch(this.state){case tn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case tn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case tn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function tw(s){this.enabled===!1||this.enableZoom===!1||this.state!==tn.NONE||(s.preventDefault(),this.dispatchEvent(gp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Tx))}function ew(s){this.enabled!==!1&&this._handleKeyDown(s)}function nw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case so.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=tn.TOUCH_ROTATE;break;case so.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=tn.TOUCH_PAN;break;default:this.state=tn.NONE}break;case 2:switch(this.touches.TWO){case so.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=tn.TOUCH_DOLLY_PAN;break;case so.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=tn.TOUCH_DOLLY_ROTATE;break;default:this.state=tn.NONE}break;default:this.state=tn.NONE}this.state!==tn.NONE&&this.dispatchEvent(gp)}function iw(s){switch(this._trackPointer(s),this.state){case tn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case tn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case tn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case tn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=tn.NONE}}function aw(s){this.enabled!==!1&&s.preventDefault()}function sw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ow extends ix{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new _o;t.deleteAttribute("uv");const n=new O0({side:ei}),a=new O0,o=new L2(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const c=new Tn(t,n);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const u=new ox(t,a,6),f=new Fn;f.position.set(-10.906,2.009,1.846),f.rotation.set(0,-.195,0),f.scale.set(2.328,7.905,4.651),f.updateMatrix(),u.setMatrixAt(0,f.matrix),f.position.set(-5.607,-.754,-.758),f.rotation.set(0,.994,0),f.scale.set(1.97,1.534,3.955),f.updateMatrix(),u.setMatrixAt(1,f.matrix),f.position.set(6.167,.857,7.803),f.rotation.set(0,.561,0),f.scale.set(3.927,6.285,3.687),f.updateMatrix(),u.setMatrixAt(2,f.matrix),f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),f.updateMatrix(),u.setMatrixAt(3,f.matrix),f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),f.updateMatrix(),u.setMatrixAt(4,f.matrix),f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),f.updateMatrix(),u.setMatrixAt(5,f.matrix),this.add(u);const p=new Tn(t,no(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const d=new Tn(t,no(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new Tn(t,no(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Tn(t,no(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const v=new Tn(t,no(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const x=new Tn(t,no(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(const n of t)n.dispose()}}function no(s){return new D2({color:0,emissive:16777215,emissiveIntensity:s})}const Lu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class lr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lw=new Yu(-1,1,1,-1,0,1);class cw extends ea{constructor(){super(),this.setAttribute("position",new di([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new di([0,2,0,0,2,0],2))}}const uw=new cw;class ju{constructor(t){this._mesh=new Tn(uw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,lw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ax extends lr{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof In?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Pl.clone(t.uniforms),this.material=new In({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ju(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class y1 extends lr{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(f),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class hw extends lr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class fw{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new jt);this._width=a.width,this._height=a.height,n=new Xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ax(Lu),this.copyPass.material.blending=ta,this.timer=new F2}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const f=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}y1!==void 0&&(u instanceof y1?a=!0:u instanceof hw&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new jt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dw extends lr{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new se}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const pw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class mo extends lr{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new jt(t.x,t.y):new jt(256,256),this.clearColor=new se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Xn(c,u,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new Xn(c,u,{type:ni});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const v=new Xn(c,u,{type:ni});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),c=Math.round(c/2),u=Math.round(u/2)}const f=pw;this.highPassUniforms=Pl.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new In({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new jt(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pl.clone(Lu.uniforms),this.blendMaterial=new In({uniforms:this.copyUniforms,vertexShader:Lu.vertexShader,fragmentShader:Lu.fragmentShader,premultipliedAlpha:!0,blending:Zd,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new se,this._oldClearAlpha=1,this._basic=new hp,this._fsQuad=new ju(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new jt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[p].uniforms.direction.value=mo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=mo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let o=0;o<t;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new In({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new jt(.5,.5)},direction:{value:new jt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new In({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}mo.BlurDirectionX=new jt(1,0);mo.BlurDirectionY=new jt(0,1);const yu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class mw extends lr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Pl.clone(yu.uniforms),this.material=new hx({name:yu.name,uniforms:this.uniforms,vertexShader:yu.vertexShader,fragmentShader:yu.fragmentShader}),this._fsQuad=new ju(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Pe.getTransfer(this._outputColorSpace)===ke&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Z0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===K0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===j0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Q0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Pu={cols:33,rows:49,width:2.0015625000000004,height:3,camera:[.925,.654,5.166],target:[.525,-.046,-.034],data:new Float32Array([-.499,1.389,-.95,-.439,1.374,-.939,-.38,1.36,-.927,-.32,1.345,-.915,-.26,1.33,-.903,-.201,1.315,-.892,-.141,1.301,-.88,-.081,1.287,-.867,-.022,1.275,-.851,.037,1.264,-.834,.096,1.253,-.817,.156,1.242,-.801,.215,1.231,-.783,.274,1.221,-.765,.332,1.211,-.745,.391,1.202,-.726,.45,1.192,-.706,.508,1.183,-.686,.567,1.174,-.666,.625,1.165,-.646,.684,1.156,-.625,.742,1.147,-.604,.8,1.139,-.583,.858,1.13,-.56,.916,1.122,-.538,.973,1.115,-.514,1.03,1.107,-.49,1.087,1.1,-.465,1.143,1.093,-.438,1.199,1.087,-.41,1.253,1.081,-.38,1.307,1.075,-.348,1.36,1.069,-.315,-.518,1.336,-.922,-.458,1.322,-.91,-.398,1.308,-.898,-.339,1.294,-.885,-.279,1.279,-.873,-.219,1.265,-.861,-.16,1.251,-.847,-.1,1.239,-.831,-.041,1.229,-.814,.018,1.22,-.795,.077,1.21,-.777,.136,1.197,-.762,.195,1.183,-.748,.255,1.172,-.731,.314,1.161,-.713,.372,1.151,-.695,.431,1.141,-.676,.49,1.13,-.658,.549,1.121,-.639,.608,1.111,-.62,.666,1.101,-.6,.725,1.092,-.58,.783,1.083,-.56,.842,1.074,-.539,.9,1.065,-.518,.958,1.057,-.497,1.016,1.048,-.475,1.074,1.041,-.451,1.131,1.033,-.427,1.187,1.026,-.402,1.243,1.019,-.375,1.299,1.013,-.346,1.353,1.007,-.315,-.536,1.285,-.892,-.477,1.271,-.88,-.417,1.257,-.867,-.357,1.243,-.854,-.298,1.229,-.841,-.238,1.216,-.827,-.179,1.204,-.811,-.12,1.194,-.793,-.061,1.186,-.773,-.002,1.178,-.753,.057,1.167,-.736,.116,1.153,-.722,.176,1.138,-.709,.235,1.125,-.694,.294,1.113,-.679,.353,1.101,-.662,.413,1.09,-.644,.472,1.08,-.626,.53,1.069,-.608,.589,1.059,-.59,.648,1.049,-.572,.707,1.039,-.553,.766,1.029,-.534,.825,1.019,-.515,.883,1.01,-.495,.942,1,-.475,1,.991,-.454,1.058,.983,-.433,1.116,.974,-.411,1.174,.966,-.388,1.231,.959,-.364,1.288,.952,-.339,1.344,.945,-.311,-.555,1.234,-.861,-.495,1.22,-.848,-.436,1.207,-.834,-.376,1.194,-.82,-.317,1.181,-.806,-.257,1.169,-.79,-.198,1.16,-.771,-.14,1.152,-.751,-.081,1.146,-.73,-.022,1.136,-.712,.037,1.123,-.697,.097,1.108,-.683,.156,1.093,-.671,.215,1.079,-.657,.275,1.066,-.642,.334,1.054,-.625,.393,1.043,-.608,.452,1.032,-.591,.511,1.021,-.574,.57,1.01,-.556,.629,.999,-.539,.688,.988,-.521,.747,.978,-.503,.806,.967,-.485,.865,.957,-.467,.924,.947,-.448,.983,.937,-.429,1.041,.927,-.41,1.1,.918,-.39,1.158,.909,-.369,1.217,.9,-.348,1.274,.892,-.326,1.332,.885,-.302,-.574,1.184,-.828,-.514,1.171,-.814,-.455,1.159,-.799,-.395,1.146,-.784,-.336,1.134,-.768,-.277,1.125,-.75,-.218,1.118,-.729,-.16,1.113,-.707,-.101,1.104,-.688,-.042,1.092,-.672,.018,1.077,-.658,.077,1.062,-.646,.136,1.048,-.632,.196,1.035,-.617,.255,1.023,-.601,.314,1.011,-.585,.373,.999,-.568,.432,.987,-.552,.492,.976,-.535,.551,.964,-.518,.61,.953,-.502,.669,.941,-.485,.728,.93,-.468,.787,.919,-.451,.846,.908,-.433,.905,.897,-.416,.964,.886,-.398,1.023,.875,-.38,1.082,.865,-.362,1.141,.855,-.344,1.2,.845,-.324,1.258,.835,-.305,1.317,.826,-.284,-.593,1.136,-.793,-.533,1.124,-.778,-.474,1.112,-.762,-.414,1.1,-.746,-.355,1.091,-.728,-.297,1.084,-.707,-.239,1.08,-.684,-.18,1.072,-.664,-.121,1.06,-.648,-.061,1.046,-.634,-.002,1.031,-.621,.057,1.018,-.606,.117,1.006,-.591,.176,.994,-.574,.235,.986,-.555,.294,.973,-.539,.353,.959,-.524,.412,.947,-.509,.471,.934,-.493,.531,.922,-.477,.59,.91,-.461,.649,.898,-.444,.708,.886,-.428,.767,.874,-.412,.827,.862,-.395,.886,.85,-.379,.945,.839,-.362,1.004,.827,-.345,1.063,.816,-.328,1.122,.805,-.311,1.181,.794,-.294,1.24,.783,-.276,1.299,.772,-.258,-.612,1.089,-.757,-.552,1.078,-.74,-.493,1.067,-.724,-.434,1.056,-.706,-.375,1.049,-.686,-.317,1.045,-.662,-.259,1.04,-.641,-.2,1.029,-.624,-.14,1.014,-.61,-.081,1.001,-.596,-.022,.988,-.58,.038,.977,-.564,.097,.966,-.547,.156,.956,-.529,.215,.95,-.508,.274,.939,-.491,.333,.924,-.477,.392,.909,-.463,.451,.896,-.448,.511,.883,-.432,.57,.87,-.417,.629,.858,-.401,.688,.845,-.385,.747,.832,-.369,.807,.82,-.353,.866,.808,-.337,.925,.796,-.321,.984,.784,-.305,1.043,.772,-.289,1.102,.76,-.272,1.162,.748,-.256,1.221,.736,-.24,1.28,.724,-.223,-.631,1.043,-.718,-.572,1.033,-.701,-.513,1.023,-.684,-.454,1.014,-.665,-.395,1.008,-.643,-.338,1.005,-.619,-.279,.997,-.599,-.219,.984,-.585,-.16,.971,-.57,-.101,.959,-.554,-.042,.948,-.537,.018,.937,-.52,.077,.927,-.502,.136,.918,-.483,.195,.912,-.463,.254,.903,-.444,.313,.89,-.429,.372,.875,-.415,.431,.86,-.401,.49,.847,-.386,.55,.833,-.37,.609,.82,-.355,.668,.807,-.339,.727,.795,-.324,.786,.782,-.308,.846,.77,-.292,.905,.757,-.276,.964,.745,-.26,1.023,.733,-.244,1.082,.72,-.228,1.141,.708,-.212,1.201,.696,-.196,1.26,.683,-.18,-.65,.999,-.679,-.591,.99,-.66,-.532,.98,-.642,-.473,.972,-.623,-.415,.966,-.601,-.357,.963,-.577,-.298,.956,-.557,-.239,.943,-.542,-.18,.931,-.526,-.121,.921,-.508,-.062,.911,-.491,-.002,.9,-.474,.057,.889,-.457,.116,.88,-.438,.175,.873,-.418,.234,.866,-.398,.293,.855,-.381,.352,.841,-.366,.411,.826,-.353,.47,.811,-.338,.529,.798,-.323,.589,.785,-.307,.648,.773,-.291,.707,.761,-.275,.766,.748,-.259,.825,.736,-.243,.885,.724,-.227,.944,.712,-.211,1.003,.699,-.195,1.062,.687,-.179,1.121,.675,-.163,1.181,.663,-.147,1.24,.651,-.131,-.67,.957,-.637,-.611,.948,-.618,-.552,.939,-.599,-.493,.93,-.581,-.434,.923,-.56,-.376,.919,-.537,-.318,.914,-.515,-.259,.906,-.496,-.2,.896,-.478,-.141,.886,-.46,-.082,.877,-.442,-.023,.867,-.425,.037,.853,-.409,.096,.842,-.392,.155,.834,-.373,.214,.828,-.353,.273,.819,-.334,.332,.807,-.318,.391,.791,-.304,.45,.777,-.29,.509,.764,-.274,.569,.753,-.258,.628,.741,-.241,.687,.73,-.225,.746,.718,-.209,.805,.706,-.192,.865,.695,-.176,.924,.683,-.159,.983,.671,-.143,1.042,.659,-.127,1.101,.648,-.11,1.161,.636,-.094,1.22,.625,-.078,-.69,.917,-.593,-.631,.908,-.574,-.572,.899,-.556,-.513,.89,-.537,-.454,.881,-.518,-.395,.874,-.498,-.337,.868,-.477,-.278,.863,-.454,-.22,.855,-.435,-.161,.847,-.416,-.102,.838,-.397,-.043,.83,-.378,.016,.82,-.36,.076,.807,-.345,.135,.796,-.328,.194,.789,-.308,.253,.782,-.288,.312,.772,-.27,.371,.757,-.256,.43,.744,-.241,.489,.733,-.224,.549,.723,-.206,.608,.712,-.19,.667,.701,-.173,.726,.69,-.156,.785,.679,-.139,.845,.668,-.123,.904,.657,-.106,.963,.646,-.089,1.022,.635,-.073,1.082,.624,-.056,1.141,.612,-.04,1.2,.601,-.023,-.71,.88,-.548,-.651,.871,-.529,-.592,.862,-.51,-.533,.853,-.491,-.474,.843,-.473,-.415,.834,-.454,-.356,.826,-.435,-.298,.818,-.415,-.239,.811,-.395,-.18,.803,-.375,-.121,.796,-.355,-.062,.789,-.335,-.004,.784,-.314,.055,.773,-.297,.115,.761,-.28,.174,.752,-.262,.233,.744,-.242,.292,.736,-.223,.351,.724,-.207,.41,.713,-.19,.469,.702,-.174,.529,.691,-.157,.588,.68,-.14,.647,.669,-.123,.706,.659,-.106,.765,.648,-.089,.825,.637,-.073,.884,.625,-.056,.943,.614,-.039,1.002,.603,-.023,1.062,.592,-.006,1.121,.581,.01,1.18,.569,.027,-.731,.845,-.5,-.672,.836,-.481,-.613,.827,-.462,-.554,.818,-.444,-.495,.809,-.425,-.436,.799,-.406,-.377,.79,-.388,-.318,.781,-.369,-.259,.773,-.349,-.2,.766,-.329,-.141,.759,-.309,-.082,.752,-.289,-.024,.746,-.268,.035,.737,-.25,.094,.726,-.232,.153,.717,-.214,.212,.708,-.196,.272,.698,-.178,.331,.687,-.161,.39,.676,-.144,.449,.665,-.127,.509,.654,-.11,.568,.643,-.094,.627,.632,-.077,.686,.621,-.06,.746,.609,-.044,.805,.598,-.028,.864,.587,-.011,.923,.575,.005,.983,.563,.021,1.042,.552,.038,1.101,.54,.054,1.16,.528,.07,-.751,.812,-.451,-.692,.803,-.432,-.633,.795,-.413,-.574,.787,-.394,-.515,.778,-.375,-.456,.769,-.356,-.397,.76,-.337,-.339,.751,-.318,-.28,.742,-.299,-.221,.734,-.28,-.162,.726,-.26,-.103,.717,-.241,-.044,.708,-.222,.015,.698,-.205,.074,.688,-.187,.133,.678,-.17,.193,.667,-.152,.252,.656,-.135,.311,.645,-.118,.37,.634,-.102,.43,.623,-.085,.489,.611,-.069,.548,.6,-.053,.607,.588,-.037,.667,.576,-.021,.726,.564,-.005,.785,.552,.011,.845,.54,.026,.904,.528,.042,.963,.516,.057,1.023,.504,.073,1.082,.491,.088,1.141,.479,.104,-.772,.781,-.401,-.713,.772,-.382,-.654,.763,-.363,-.595,.754,-.345,-.536,.744,-.326,-.477,.735,-.308,-.418,.725,-.289,-.359,.716,-.271,-.3,.706,-.252,-.241,.697,-.234,-.182,.687,-.216,-.123,.676,-.198,-.064,.666,-.181,-.004,.655,-.164,.055,.644,-.147,.114,.633,-.13,.173,.622,-.114,.233,.61,-.098,.292,.598,-.082,.351,.587,-.066,.411,.575,-.051,.47,.562,-.035,.529,.55,-.02,.589,.538,-.005,.648,.525,.01,.708,.513,.025,.767,.5,.04,.827,.487,.055,.886,.475,.069,.945,.462,.084,1.005,.449,.098,1.064,.436,.112,1.124,.423,.127,-.792,.745,-.354,-.733,.735,-.336,-.674,.725,-.318,-.615,.715,-.3,-.556,.705,-.282,-.497,.694,-.264,-.438,.684,-.246,-.379,.674,-.229,-.32,.663,-.212,-.261,.652,-.195,-.201,.641,-.178,-.142,.63,-.161,-.083,.618,-.145,-.023,.606,-.129,.036,.595,-.114,.095,.583,-.098,.155,.57,-.083,.214,.558,-.068,.274,.546,-.053,.333,.533,-.039,.393,.521,-.024,.452,.508,-.01,.512,.495,.004,.572,.482,.018,.631,.469,.031,.691,.456,.045,.75,.443,.059,.81,.43,.072,.87,.417,.085,.929,.403,.099,.989,.39,.112,1.049,.377,.125,1.108,.364,.138,-.812,.703,-.312,-.753,.692,-.295,-.694,.681,-.278,-.635,.67,-.261,-.575,.659,-.244,-.516,.647,-.228,-.457,.636,-.211,-.398,.625,-.195,-.338,.613,-.179,-.279,.601,-.163,-.22,.589,-.148,-.16,.577,-.133,-.101,.565,-.118,-.041,.552,-.103,.019,.54,-.089,.078,.527,-.075,.138,.514,-.061,.197,.501,-.048,.257,.488,-.035,.317,.475,-.022,.377,.462,-.009,.436,.449,.004,.496,.436,.017,.556,.422,.029,.616,.409,.041,.676,.396,.054,.735,.382,.066,.795,.369,.078,.855,.356,.09,.915,.342,.102,.975,.329,.114,1.035,.316,.125,1.095,.303,.137,-.831,.654,-.278,-.772,.642,-.262,-.712,.63,-.246,-.653,.618,-.23,-.594,.606,-.215,-.534,.594,-.2,-.475,.582,-.185,-.415,.57,-.17,-.356,.558,-.155,-.296,.545,-.141,-.236,.532,-.127,-.177,.52,-.114,-.117,.507,-.101,-.057,.494,-.088,.003,.481,-.075,.063,.468,-.063,.123,.454,-.051,.182,.441,-.039,.242,.428,-.028,.302,.415,-.016,.362,.401,-.005,.422,.388,.006,.482,.375,.018,.542,.361,.029,.603,.348,.04,.663,.335,.051,.723,.321,.062,.783,.308,.073,.843,.295,.083,.903,.282,.094,.963,.268,.104,1.024,.255,.114,1.084,.242,.124,-.848,.599,-.253,-.789,.587,-.239,-.729,.574,-.224,-.67,.562,-.21,-.61,.549,-.196,-.55,.536,-.182,-.491,.524,-.169,-.431,.511,-.155,-.371,.498,-.143,-.311,.485,-.13,-.251,.472,-.118,-.191,.459,-.106,-.131,.446,-.095,-.071,.433,-.084,-.011,.42,-.073,.049,.406,-.063,.109,.393,-.053,.17,.38,-.042,.23,.367,-.032,.29,.354,-.022,.35,.34,-.012,.411,.327,-.003,.471,.314,.007,.531,.301,.017,.592,.288,.027,.652,.275,.037,.712,.261,.047,.773,.248,.056,.833,.236,.066,.894,.223,.075,.954,.21,.084,1.015,.197,.092,1.075,.185,.101,-.864,.54,-.239,-.804,.527,-.226,-.745,.514,-.213,-.685,.502,-.2,-.625,.489,-.188,-.565,.476,-.176,-.505,.463,-.164,-.445,.45,-.153,-.384,.437,-.142,-.324,.424,-.131,-.264,.411,-.121,-.204,.398,-.112,-.143,.385,-.102,-.083,.372,-.093,-.022,.359,-.084,.038,.346,-.075,.099,.333,-.066,.159,.32,-.057,.22,.307,-.049,.28,.294,-.04,.341,.281,-.031,.401,.268,-.022,.462,.255,-.013,.522,.243,-.004,.583,.23,.005,.643,.217,.013,.704,.205,.022,.765,.192,.03,.825,.18,.038,.886,.168,.046,.947,.156,.053,1.008,.144,.06,1.069,.132,.067,-.878,.479,-.236,-.818,.466,-.224,-.758,.453,-.213,-.698,.44,-.202,-.637,.428,-.191,-.577,.415,-.181,-.517,.402,-.171,-.456,.389,-.162,-.395,.376,-.154,-.335,.364,-.145,-.274,.351,-.137,-.213,.339,-.13,-.153,.326,-.122,-.092,.314,-.114,-.031,.301,-.107,.029,.289,-.099,.09,.276,-.091,.151,.264,-.083,.212,.251,-.075,.272,.238,-.067,.333,.226,-.058,.393,.213,-.05,.454,.2,-.041,.515,.188,-.033,.576,.176,-.026,.637,.164,-.018,.698,.152,-.011,.759,.14,-.004,.82,.129,.002,.881,.118,.009,.942,.107,.015,1.003,.095,.021,1.065,.084,.027,-.89,.418,-.243,-.829,.405,-.232,-.769,.392,-.222,-.708,.38,-.213,-.648,.367,-.205,-.587,.355,-.197,-.526,.343,-.19,-.465,.331,-.183,-.404,.319,-.176,-.343,.307,-.171,-.282,.296,-.165,-.221,.284,-.159,-.16,.272,-.152,-.099,.26,-.146,-.038,.248,-.139,.023,.236,-.132,.084,.224,-.124,.145,.211,-.117,.205,.199,-.109,.266,.186,-.1,.327,.173,-.092,.387,.161,-.084,.448,.149,-.076,.509,.137,-.069,.57,.126,-.063,.631,.114,-.056,.693,.103,-.05,.754,.093,-.044,.816,.083,-.04,.877,.073,-.034,.939,.062,-.029,1,.051,-.023,1.061,.04,-.017,-.9,.358,-.257,-.839,.346,-.248,-.779,.333,-.24,-.718,.322,-.234,-.656,.31,-.228,-.595,.298,-.222,-.534,.287,-.217,-.473,.276,-.211,-.411,.265,-.207,-.35,.255,-.205,-.288,.245,-.2,-.227,.233,-.195,-.166,.222,-.19,-.104,.211,-.184,-.043,.199,-.177,.018,.187,-.171,.079,.175,-.164,.14,.163,-.156,.2,.15,-.147,.261,.137,-.139,.321,.124,-.13,.382,.111,-.122,.443,.101,-.116,.505,.09,-.11,.566,.079,-.104,.627,.068,-.098,.689,.057,-.092,.75,.046,-.086,.811,.035,-.08,.872,.024,-.074,.934,.013,-.067,.995,.002,-.061,1.056,-.01,-.054,-.91,.299,-.274,-.848,.288,-.27,-.787,.277,-.266,-.725,.266,-.261,-.664,.255,-.257,-.603,.244,-.252,-.541,.233,-.248,-.48,.223,-.244,-.418,.212,-.24,-.357,.201,-.235,-.295,.191,-.231,-.234,.18,-.227,-.172,.169,-.222,-.111,.158,-.217,-.05,.147,-.211,.012,.136,-.205,.073,.124,-.199,.134,.112,-.192,.195,.1,-.185,.256,.088,-.177,.316,.075,-.168,.377,.062,-.16,.438,.051,-.153,.499,.04,-.147,.561,.029,-.141,.622,.018,-.135,.683,.006,-.128,.744,-.005,-.121,.805,-.017,-.114,.866,-.029,-.106,.927,-.041,-.098,.988,-.053,-.09,1.049,-.065,-.082,-.919,.239,-.289,-.857,.228,-.287,-.796,.218,-.284,-.734,.207,-.281,-.673,.196,-.277,-.611,.186,-.273,-.55,.175,-.27,-.488,.165,-.266,-.427,.154,-.262,-.365,.143,-.258,-.304,.133,-.254,-.242,.122,-.249,-.181,.112,-.245,-.119,.101,-.241,-.058,.09,-.236,.004,.079,-.231,.065,.068,-.226,.126,.057,-.221,.188,.046,-.215,.249,.034,-.209,.31,.022,-.202,.371,.01,-.194,.432,-.003,-.185,.493,-.014,-.178,.554,-.026,-.171,.615,-.038,-.163,.676,-.05,-.155,.736,-.062,-.146,.797,-.074,-.137,.858,-.087,-.128,.918,-.099,-.119,.979,-.112,-.11,1.039,-.124,-.101,-.929,.178,-.299,-.867,.167,-.296,-.806,.157,-.293,-.744,.146,-.29,-.683,.135,-.287,-.621,.125,-.284,-.56,.114,-.28,-.498,.104,-.277,-.437,.093,-.273,-.375,.083,-.269,-.314,.072,-.265,-.252,.062,-.262,-.191,.051,-.258,-.129,.04,-.254,-.067,.03,-.25,-.006,.019,-.246,.056,.009,-.242,.117,-.002,-.238,.179,-.013,-.235,.24,-.024,-.23,.302,-.035,-.225,.363,-.047,-.22,.424,-.059,-.211,.484,-.072,-.2,.545,-.084,-.191,.606,-.097,-.182,.666,-.109,-.172,.726,-.122,-.161,.787,-.135,-.151,.847,-.147,-.141,.907,-.16,-.131,.968,-.173,-.12,1.028,-.185,-.11,-.94,.116,-.3,-.878,.106,-.297,-.816,.095,-.293,-.755,.084,-.29,-.693,.074,-.287,-.632,.063,-.284,-.57,.053,-.28,-.509,.042,-.277,-.447,.032,-.273,-.386,.021,-.27,-.324,.01,-.266,-.263,0,-.262,-.201,-.011,-.259,-.14,-.021,-.255,-.078,-.032,-.252,-.017,-.042,-.248,.045,-.053,-.245,.106,-.064,-.242,.168,-.075,-.239,.229,-.085,-.237,.291,-.096,-.234,.352,-.107,-.232,.414,-.119,-.227,.475,-.132,-.216,.534,-.145,-.201,.594,-.158,-.189,.654,-.17,-.178,.715,-.183,-.167,.775,-.196,-.156,.835,-.209,-.145,.895,-.221,-.133,.955,-.234,-.122,1.015,-.246,-.11,-.95,.055,-.292,-.889,.045,-.288,-.827,.034,-.284,-.766,.024,-.281,-.704,.013,-.277,-.643,.003,-.274,-.581,-.008,-.27,-.52,-.019,-.266,-.458,-.029,-.263,-.397,-.04,-.259,-.335,-.05,-.256,-.274,-.061,-.252,-.212,-.071,-.249,-.151,-.082,-.245,-.089,-.093,-.242,-.028,-.103,-.238,.034,-.114,-.235,.095,-.125,-.232,.156,-.135,-.229,.218,-.146,-.226,.279,-.157,-.224,.34,-.168,-.221,.401,-.181,-.221,.463,-.194,-.219,.523,-.207,-.207,.581,-.219,-.188,.641,-.231,-.173,.701,-.244,-.165,.761,-.257,-.153,.822,-.27,-.141,.882,-.282,-.129,.941,-.294,-.116,1.001,-.306,-.1,-.962,-.004,-.274,-.9,-.014,-.27,-.838,-.025,-.266,-.777,-.035,-.262,-.715,-.046,-.258,-.654,-.056,-.255,-.592,-.067,-.251,-.531,-.077,-.247,-.469,-.087,-.243,-.408,-.098,-.239,-.346,-.108,-.236,-.285,-.119,-.232,-.223,-.129,-.228,-.162,-.14,-.224,-.1,-.15,-.221,-.039,-.161,-.217,.023,-.171,-.213,.084,-.182,-.209,.145,-.192,-.205,.207,-.202,-.201,.268,-.212,-.196,.329,-.22,-.189,.391,-.233,-.189,.448,-.253,-.205,.509,-.268,-.204,.569,-.28,-.189,.627,-.292,-.17,.687,-.305,-.158,.748,-.318,-.147,.807,-.33,-.133,.867,-.342,-.118,.926,-.353,-.1,.983,-.363,-.078,-.973,-.06,-.249,-.911,-.07,-.245,-.85,-.081,-.241,-.788,-.091,-.236,-.727,-.101,-.232,-.665,-.112,-.228,-.603,-.122,-.224,-.542,-.132,-.22,-.48,-.142,-.216,-.419,-.153,-.211,-.357,-.163,-.207,-.296,-.173,-.203,-.234,-.184,-.199,-.173,-.194,-.195,-.111,-.204,-.19,-.05,-.214,-.186,.012,-.224,-.181,.073,-.234,-.177,.135,-.244,-.171,.196,-.253,-.166,.258,-.259,-.156,.319,-.271,-.153,.379,-.288,-.161,.435,-.309,-.181,.494,-.327,-.191,.555,-.341,-.183,.614,-.353,-.166,.673,-.365,-.152,.733,-.377,-.137,.792,-.389,-.119,.85,-.399,-.1,.908,-.408,-.076,.963,-.413,-.048,-.984,-.113,-.217,-.922,-.123,-.213,-.861,-.133,-.208,-.799,-.143,-.204,-.737,-.153,-.199,-.676,-.164,-.195,-.614,-.174,-.19,-.553,-.184,-.186,-.491,-.194,-.181,-.43,-.204,-.177,-.368,-.213,-.172,-.307,-.223,-.167,-.245,-.233,-.162,-.184,-.243,-.157,-.122,-.253,-.152,-.061,-.262,-.147,.001,-.271,-.141,.063,-.281,-.137,.124,-.291,-.132,.186,-.297,-.123,.247,-.309,-.12,.308,-.326,-.125,.366,-.344,-.137,.424,-.363,-.152,.479,-.384,-.172,.54,-.401,-.172,.599,-.413,-.156,.658,-.424,-.138,.716,-.435,-.119,.775,-.445,-.098,.832,-.453,-.073,.887,-.457,-.044,.939,-.457,-.01,-.994,-.162,-.181,-.933,-.172,-.176,-.871,-.182,-.171,-.81,-.192,-.166,-.748,-.202,-.162,-.687,-.212,-.157,-.625,-.222,-.152,-.563,-.231,-.147,-.502,-.241,-.141,-.44,-.25,-.136,-.379,-.259,-.131,-.317,-.269,-.125,-.256,-.278,-.12,-.194,-.287,-.114,-.132,-.296,-.109,-.071,-.306,-.104,-.009,-.313,-.096,.052,-.323,-.091,.114,-.334,-.087,.175,-.347,-.086,.235,-.364,-.092,.294,-.383,-.103,.351,-.402,-.119,.408,-.422,-.136,.463,-.442,-.157,.524,-.46,-.156,.583,-.471,-.138,.641,-.481,-.117,.698,-.49,-.095,.755,-.497,-.07,.81,-.501,-.04,.863,-.501,-.006,.912,-.494,.032,-1.005,-.209,-.14,-.944,-.219,-.135,-.882,-.228,-.13,-.82,-.238,-.125,-.759,-.247,-.12,-.697,-.257,-.114,-.636,-.266,-.109,-.574,-.275,-.103,-.512,-.284,-.098,-.451,-.293,-.092,-.389,-.301,-.086,-.327,-.31,-.08,-.266,-.319,-.074,-.204,-.326,-.067,-.142,-.336,-.061,-.081,-.346,-.057,-.02,-.357,-.053,.042,-.37,-.052,.102,-.386,-.054,.162,-.403,-.061,.22,-.422,-.073,.277,-.441,-.09,.333,-.461,-.11,.388,-.481,-.135,.446,-.501,-.144,.507,-.517,-.136,.565,-.526,-.115,.622,-.535,-.092,.679,-.542,-.066,.734,-.546,-.036,.786,-.545,-.002,.835,-.538,.036,.882,-.526,.077,-1.016,-.253,-.097,-.954,-.263,-.092,-.892,-.272,-.087,-.831,-.281,-.081,-.769,-.29,-.075,-.707,-.299,-.069,-.646,-.307,-.063,-.584,-.316,-.057,-.522,-.324,-.051,-.461,-.333,-.045,-.399,-.34,-.038,-.337,-.349,-.032,-.276,-.358,-.026,-.214,-.368,-.022,-.153,-.38,-.018,-.092,-.393,-.017,-.031,-.408,-.018,.029,-.424,-.022,.089,-.442,-.031,.146,-.462,-.045,.203,-.481,-.064,.258,-.501,-.086,.311,-.52,-.113,.369,-.54,-.128,.429,-.559,-.127,.489,-.572,-.112,.546,-.58,-.088,.602,-.586,-.062,.657,-.59,-.032,.71,-.589,.002,.759,-.583,.04,.805,-.571,.08,.849,-.555,.122,-1.026,-.296,-.053,-.964,-.305,-.047,-.903,-.314,-.041,-.841,-.322,-.035,-.779,-.331,-.029,-.718,-.339,-.022,-.656,-.347,-.016,-.594,-.355,-.009,-.533,-.363,-.003,-.471,-.372,.003,-.409,-.381,.009,-.348,-.391,.013,-.286,-.403,.017,-.225,-.416,.018,-.164,-.43,.018,-.104,-.446,.014,-.044,-.463,.008,.015,-.482,-.003,.072,-.501,-.019,.128,-.521,-.039,.182,-.54,-.063,.235,-.559,-.092,.292,-.579,-.11,.351,-.599,-.114,.411,-.614,-.105,.47,-.625,-.085,.526,-.631,-.058,.581,-.634,-.028,.633,-.634,.006,.683,-.627,.044,.729,-.615,.084,.773,-.599,.126,.816,-.582,.167,-1.036,-.337,-.007,-.975,-.346,-.001,-.913,-.354,.005,-.851,-.362,.012,-.789,-.37,.019,-.728,-.378,.025,-.666,-.386,.032,-.604,-.394,.038,-.543,-.404,.043,-.481,-.414,.048,-.42,-.425,.051,-.359,-.438,.053,-.298,-.452,.053,-.237,-.468,.051,-.177,-.484,.045,-.118,-.503,.037,-.06,-.522,.024,-.003,-.541,.006,.053,-.561,-.016,.107,-.58,-.041,.159,-.598,-.071,.215,-.618,-.091,.273,-.638,-.1,.333,-.656,-.095,.393,-.668,-.079,.45,-.676,-.054,.504,-.679,-.024,.557,-.678,.009,.607,-.672,.047,.653,-.66,.088,.696,-.643,.13,.738,-.623,.172,.783,-.61,.213,-1.046,-.378,.039,-.985,-.386,.046,-.923,-.393,.053,-.861,-.401,.06,-.8,-.409,.066,-.738,-.418,.072,-.676,-.427,.078,-.615,-.437,.082,-.553,-.448,.086,-.492,-.461,.088,-.431,-.474,.089,-.37,-.489,.087,-.31,-.506,.083,-.251,-.524,.075,-.192,-.542,.064,-.134,-.562,.049,-.078,-.581,.03,-.023,-.601,.007,.03,-.619,-.02,.082,-.637,-.05,.137,-.656,-.073,.196,-.677,-.084,.255,-.696,-.084,.315,-.71,-.072,.373,-.72,-.049,.428,-.724,-.021,.481,-.723,.013,.531,-.717,.051,.577,-.705,.091,.62,-.687,.133,.66,-.665,.176,.704,-.649,.217,.751,-.639,.258,-1.057,-.417,.087,-.995,-.425,.093,-.933,-.433,.1,-.872,-.441,.107,-.81,-.45,.112,-.748,-.46,.117,-.687,-.471,.121,-.626,-.483,.123,-.564,-.497,.124,-.504,-.511,.123,-.443,-.527,.12,-.383,-.545,.113,-.324,-.563,.104,-.266,-.582,.091,-.209,-.602,.074,-.153,-.621,.053,-.099,-.64,.029,-.046,-.659,.001,.006,-.676,-.03,.06,-.695,-.054,.118,-.716,-.068,.177,-.735,-.071,.237,-.752,-.063,.296,-.763,-.043,.352,-.768,-.016,.405,-.768,.017,.455,-.762,.054,.501,-.75,.095,.543,-.731,.137,.583,-.708,.18,.626,-.69,.222,.672,-.678,.262,.721,-.672,.301,-1.067,-.457,.134,-1.005,-.465,.141,-.943,-.474,.146,-.882,-.483,.151,-.82,-.494,.155,-.759,-.506,.158,-.698,-.519,.159,-.637,-.533,.159,-.576,-.549,.156,-.516,-.566,.151,-.457,-.584,.143,-.398,-.603,.132,-.341,-.622,.117,-.284,-.642,.098,-.229,-.661,.076,-.175,-.68,.05,-.122,-.698,.022,-.071,-.715,-.01,-.017,-.734,-.035,.04,-.754,-.051,.099,-.774,-.058,.159,-.792,-.052,.218,-.805,-.036,.275,-.812,-.011,.329,-.813,.021,.379,-.808,.058,.426,-.795,.099,.468,-.776,.141,.507,-.752,.183,.548,-.732,.226,.593,-.718,.267,.641,-.71,.306,.692,-.709,.343,-1.077,-.497,.18,-1.015,-.507,.186,-.954,-.517,.19,-.892,-.529,.193,-.831,-.542,.195,-.77,-.556,.195,-.71,-.571,.193,-.649,-.587,.188,-.59,-.605,.181,-.531,-.623,.171,-.473,-.642,.158,-.416,-.662,.142,-.36,-.681,.121,-.305,-.701,.098,-.252,-.719,.071,-.199,-.737,.042,-.148,-.754,.01,-.094,-.773,-.016,-.038,-.793,-.034,.021,-.813,-.043,.081,-.832,-.041,.14,-.847,-.028,.198,-.856,-.005,.253,-.858,.026,.304,-.853,.062,.35,-.842,.102,.393,-.823,.144,.431,-.798,.187,.471,-.775,.229,.515,-.759,.271,.562,-.749,.311,.612,-.746,.349,.665,-.749,.382,-1.087,-.54,.224,-1.026,-.552,.228,-.965,-.564,.23,-.904,-.578,.23,-.843,-.593,.229,-.782,-.609,.225,-.723,-.626,.219,-.663,-.644,.211,-.605,-.663,.199,-.547,-.682,.184,-.491,-.702,.166,-.435,-.721,.144,-.381,-.74,.119,-.328,-.758,.092,-.276,-.776,.062,-.225,-.793,.03,-.171,-.811,.003,-.115,-.831,-.017,-.057,-.852,-.028,.003,-.871,-.029,.062,-.887,-.019,.121,-.898,.002,.176,-.902,.03,.228,-.899,.066,.275,-.888,.106,.318,-.87,.148,.357,-.846,.19,.395,-.82,.233,.437,-.801,.275,.483,-.788,.316,.532,-.783,.354,.584,-.785,.389,.639,-.793,.419,-1.098,-.587,.265,-1.037,-.6,.266,-.976,-.615,.265,-.916,-.63,.262,-.856,-.647,.257,-.796,-.665,.25,-.737,-.683,.239,-.679,-.703,.226,-.622,-.722,.209,-.566,-.742,.189,-.511,-.761,.166,-.457,-.78,.14,-.405,-.798,.112,-.353,-.815,.082,-.301,-.832,.05,-.248,-.85,.022,-.193,-.87,.001,-.135,-.891,-.012,-.076,-.91,-.016,-.016,-.928,-.008,.043,-.94,.009,.1,-.946,.036,.152,-.944,.07,.2,-.935,.109,.244,-.917,.151,.283,-.893,.193,.319,-.866,.236,.36,-.844,.278,.404,-.829,.32,.452,-.821,.359,.504,-.821,.395,.558,-.827,.427,.613,-.839,.452,-1.109,-.637,.301,-1.049,-.652,.299,-.989,-.668,.295,-.929,-.686,.288,-.87,-.704,.279,-.811,-.723,.267,-.754,-.742,.252,-.697,-.762,.233,-.642,-.781,.212,-.587,-.8,.188,-.534,-.819,.161,-.482,-.837,.131,-.43,-.854,.101,-.378,-.871,.069,-.325,-.889,.042,-.27,-.909,.019,-.213,-.929,.004,-.154,-.949,-.002,-.094,-.967,.003,-.035,-.981,.017,.022,-.989,.042,.076,-.989,.075,.125,-.981,.113,.169,-.965,.154,.209,-.941,.197,.245,-.913,.239,.283,-.888,.282,.326,-.87,.324,.373,-.86,.364,.423,-.857,.402,.477,-.862,.434,.532,-.872,.461,.589,-.888,.482,-1.122,-.69,.332,-1.062,-.707,.326,-1.002,-.725,.318,-.944,-.743,.307,-.886,-.763,.293,-.829,-.782,.277,-.772,-.802,.257,-.717,-.821,.234,-.664,-.84,.209,-.611,-.858,.181,-.559,-.875,.151,-.507,-.892,.119,-.455,-.909,.089,-.402,-.928,.061,-.348,-.947,.038,-.291,-.968,.021,-.232,-.988,.013,-.172,-1.007,.014,-.113,-1.022,.026,-.055,-1.032,.049,0,-1.034,.079,.05,-1.028,.117,.095,-1.013,.158,.135,-.99,.2,.171,-.962,.242,.208,-.934,.285,.249,-.913,.327,.294,-.9,.369,.343,-.895,.407,.396,-.897,.441,.451,-.906,.47,.507,-.92,.493,.565,-.939,.509,-1.135,-.746,.356,-1.076,-.764,.347,-1.018,-.783,.334,-.96,-.803,.319,-.904,-.822,.301,-.848,-.842,.28,-.793,-.861,.256,-.74,-.879,.23,-.687,-.897,.201,-.636,-.914,.17,-.584,-.931,.138,-.533,-.948,.108,-.48,-.967,.08,-.425,-.986,.056,-.368,-1.006,.038,-.31,-1.027,.028,-.251,-1.046,.027,-.191,-1.063,.036,-.132,-1.074,.056,-.077,-1.078,.085,-.025,-1.074,.121,.021,-1.061,.161,.062,-1.039,.203,.098,-1.012,.246,.133,-.981,.288,.172,-.957,.331,.216,-.941,.373,.264,-.933,.412,.315,-.933,.448,.369,-.939,.479,.426,-.953,.503,.483,-.971,.521,.541,-.992,.532,-1.15,-.804,.375,-1.092,-.823,.361,-1.035,-.842,.344,-.979,-.862,.325,-.924,-.881,.303,-.87,-.9,.278,-.816,-.919,.25,-.764,-.936,.22,-.713,-.953,.189,-.662,-.97,.157,-.61,-.987,.127,-.557,-1.005,.099,-.502,-1.025,.075,-.446,-1.045,.056,-.388,-1.065,.044,-.329,-1.085,.04,-.269,-1.103,.047,-.21,-1.115,.064,-.154,-1.121,.09,-.101,-1.119,.125,-.054,-1.108,.165,-.012,-1.089,.207,.025,-1.062,.249,.059,-1.03,.291,.097,-1.003,.334,.138,-.984,.376,.185,-.972,.417,.235,-.969,.454,.288,-.974,.487,.344,-.985,.513,.401,-1.002,.533,.459,-1.023,.545,.516,-1.047,.551,-1.167,-.863,.387,-1.11,-.882,.369,-1.054,-.902,.348,-1,-.921,.325,-.946,-.94,.299,-.893,-.958,.27,-.841,-.975,.24,-.79,-.992,.208,-.739,-1.009,.177,-.687,-1.026,.147,-.634,-1.044,.119,-.579,-1.063,.094,-.524,-1.083,.074,-.466,-1.104,.06,-.407,-1.124,.054,-.347,-1.142,.058,-.288,-1.156,.072,-.231,-1.164,.097,-.177,-1.164,.13,-.129,-1.155,.168,-.085,-1.137,.21,-.047,-1.112,.253,-.013,-1.08,.295,.022,-1.051,.337,.062,-1.028,.38,.106,-1.013,.421,.155,-1.006,.46,.207,-1.009,.494,.262,-1.018,.523,.319,-1.034,.544,.377,-1.054,.558,.435,-1.077,.565,.492,-1.102,.567,-1.185,-.922,.393,-1.13,-.942,.371,-1.076,-.961,.346,-1.022,-.979,.319,-.97,-.997,.29,-.918,-1.014,.26,-.867,-1.031,.227,-.816,-1.048,.196,-.764,-1.065,.166,-.711,-1.083,.138,-.657,-1.102,.113,-.601,-1.122,.092,-.544,-1.142,.076,-.485,-1.163,.068,-.425,-1.182,.07,-.366,-1.197,.081,-.308,-1.207,.103,-.253,-1.209,.134,-.204,-1.202,.172,-.159,-1.186,.213,-.12,-1.162,.256,-.085,-1.132,.298,-.052,-1.1,.34,-.014,-1.073,.383,.028,-1.054,.425,.075,-1.045,.465,.127,-1.044,.501,.181,-1.052,.531,.238,-1.066,.555,.295,-1.085,.571,.353,-1.107,.579,.41,-1.132,.582,.467,-1.158,.58,-1.206,-.981,.394,-1.152,-1,.368,-1.099,-1.018,.34,-1.047,-1.036,.31,-.995,-1.053,.279,-.944,-1.07,.247,-.892,-1.087,.216,-.84,-1.104,.186,-.788,-1.122,.158,-.734,-1.141,.132,-.678,-1.161,.11,-.622,-1.181,.094,-.563,-1.201,.084,-.504,-1.221,.083,-.444,-1.237,.092,-.385,-1.249,.111,-.33,-1.253,.14,-.279,-1.248,.176,-.233,-1.234,.217,-.193,-1.212,.259,-.157,-1.183,.302,-.124,-1.15,.343,-.089,-1.121,.386,-.049,-1.098,.428,-.004,-1.085,.47,.046,-1.081,.508,.1,-1.086,.54,.156,-1.098,.565,.213,-1.116,.583,.271,-1.138,.593,.328,-1.162,.597,.386,-1.188,.595,.442,-1.214,.59])},Vd=1/120,M1=4,gw=2,vw=2,_w=.95,xw=.5,Mu=2;class yw{constructor(t,n,a,o){this.width=t,this.height=n,this.segX=a,this.segY=o,this.cols=a+1,this.rows=o+1,this.count=this.cols*this.rows,this.positions=new Float32Array(this.count*3),this.prev=new Float32Array(this.count*3),this.rest=new Float32Array(this.count*3),this.initPositions();const c=[],u=[],f=[],p=(d,g)=>g*this.cols+d;for(let d=0;d<this.rows;d++)for(let g=0;g<this.cols;g++)g+1<this.cols&&(c.push(p(g,d)),u.push(p(g+1,d)),f.push(1)),d+1<this.rows&&(c.push(p(g,d)),u.push(p(g,d+1)),f.push(1)),g+1<this.cols&&d+1<this.rows&&(c.push(p(g,d)),u.push(p(g+1,d+1)),f.push(.85),c.push(p(g+1,d)),u.push(p(g,d+1)),f.push(.85)),g+2<this.cols&&(c.push(p(g,d)),u.push(p(g+2,d)),f.push(.5)),d+2<this.rows&&(c.push(p(g,d)),u.push(p(g,d+2)),f.push(.5));this.cA=new Int32Array(c),this.cB=new Int32Array(u),this.cMul=new Float32Array(f),this.cRest=new Float32Array(c.length),this.computeRestLengths(),this.neighbors=new Int32Array(this.count*4).fill(-1);for(let d=0;d<this.rows;d++)for(let g=0;g<this.cols;g++){const _=p(g,d)*4;this.neighbors[_+0]=g>0?p(g-1,d):-1,this.neighbors[_+1]=g+1<this.cols?p(g+1,d):-1,this.neighbors[_+2]=d>0?p(g,d-1):-1,this.neighbors[_+3]=d+1<this.rows?p(g,d+1):-1}this.selfRadius=Math.min(this.width/this.segX,this.height/this.segY)*gw,this.selfHashInv=1/this.selfRadius}width;height;segX;segY;cols;rows;count;positions;prev;rest;cA;cB;cRest;cMul;neighbors;grab=null;accumulator=0;selfRadius=.1;selfHashInv=10;selfHash=new Map;smoothScratch=null;initPositions(){const t=Pu,n=t.cols,a=t.rows,o=this.width/t.width,c=this.height/t.height,u=(o+c)/2;let f=0;for(let p=0;p<this.rows;p++)for(let d=0;d<this.cols;d++){const g=d/this.segX*(n-1),_=p/this.segY*(a-1),v=Math.min(n-2,Math.floor(g)),x=Math.min(a-2,Math.floor(_)),b=g-v,A=_-x;for(let S=0;S<3;S++){const y=(x*n+v)*3+S,N=(x*n+v+1)*3+S,L=((x+1)*n+v)*3+S,w=((x+1)*n+v+1)*3+S,F=t.data[y]*(1-b)+t.data[N]*b,D=t.data[L]*(1-b)+t.data[w]*b,O=S===0?o:S===1?c:u;this.positions[f+S]=(F*(1-A)+D*A)*O}f+=3}this.prev.set(this.positions),this.rest.set(this.positions)}computeRestLengths(){const t=this.width/this.segX,n=this.height/this.segY;for(let a=0;a<this.cA.length;a++){const o=this.cA[a],c=this.cB[a],u=o%this.cols,f=Math.floor(o/this.cols),p=c%this.cols,d=Math.floor(c/this.cols),g=(u-p)*t,_=(f-d)*n;this.cRest[a]=Math.hypot(g,_)}}reset(){this.initPositions(),this.grab=null}poke(t=.5){const n=this.positions,a=Math.floor(Math.random()*this.count),o=n[a*3],c=n[a*3+1],u=n[a*3+2],f=new Z(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(t*.09),p=Math.max(this.width,this.height)*.28;for(let d=0;d<this.count;d++){const g=n[d*3]-o,_=n[d*3+1]-c,v=n[d*3+2]-u,x=Math.sqrt(g*g+_*_+v*v);if(x>p)continue;const b=1-x/p,A=b*b*(3-2*b);this.prev[d*3]-=f.x*A,this.prev[d*3+1]-=f.y*A,this.prev[d*3+2]-=f.z*A}}startGrab(t,n){const a=this.positions,o=[],c=[],u=[];let f=1/0;for(let p=0;p<this.count;p++){const d=a[p*3]-t.x,g=a[p*3+1]-t.y,_=a[p*3+2]-t.z,v=Math.sqrt(d*d+g*g+_*_);if(f=Math.min(f,v),v>n)continue;const x=1-v/n,b=x*x*(3-2*x);o.push(p),c.push(b),u.push(d,g,_)}return o.length===0||f>n?!1:(this.grab={indices:o,weights:c,offsets:new Float32Array(u),target:t.clone()},!0)}moveGrab(t){this.grab&&this.grab.target.copy(t)}endGrab(){this.grab=null}get isGrabbing(){return this.grab!==null}cavityScratch=null;cavityScratch2=null;normalScratch=null;computeGridNormals(t){const n=this.positions,a=this.neighbors,o=this.count;for(let c=0;c<o;c++){const u=c*3,f=a[c*4],p=a[c*4+1],d=a[c*4+2],g=a[c*4+3];let _,v,x;f>=0&&p>=0?(_=n[p*3]-n[f*3],v=n[p*3+1]-n[f*3+1],x=n[p*3+2]-n[f*3+2]):p>=0?(_=n[p*3]-n[u],v=n[p*3+1]-n[u+1],x=n[p*3+2]-n[u+2]):f>=0?(_=n[u]-n[f*3],v=n[u+1]-n[f*3+1],x=n[u+2]-n[f*3+2]):(_=1,v=0,x=0);let b,A,S;d>=0&&g>=0?(b=n[g*3]-n[d*3],A=n[g*3+1]-n[d*3+1],S=n[g*3+2]-n[d*3+2]):g>=0?(b=n[g*3]-n[u],A=n[g*3+1]-n[u+1],S=n[g*3+2]-n[u+2]):d>=0?(b=n[u]-n[d*3],A=n[u+1]-n[d*3+1],S=n[u+2]-n[d*3+2]):(b=0,A=1,S=0);let y=v*S-x*A,N=x*b-_*S,L=_*A-v*b;const w=Math.hypot(y,N,L)||1;t[u]=y/w,t[u+1]=N/w,t[u+2]=L/w}}smoothNormals(t){const n=this.count,a=this.neighbors;(!this.normalScratch||this.normalScratch.length<n*3)&&(this.normalScratch=new Float32Array(n*3));const o=this.normalScratch;for(let c=0;c<n;c++){const u=c*3;let f=t[u]*2,p=t[u+1]*2,d=t[u+2]*2;for(let _=0;_<4;_++){const v=a[c*4+_];v<0||(f+=t[v*3],p+=t[v*3+1],d+=t[v*3+2])}const g=Math.hypot(f,p,d)||1;o[u]=f/g,o[u+1]=p/g,o[u+2]=d/g}t.set(o.subarray(0,n*3))}computeCavity(t,n,a=5){const o=this.positions,c=this.neighbors,u=this.count,f=1/Math.min(this.width/this.segX,this.height/this.segY);(!this.cavityScratch||this.cavityScratch.length<u)&&(this.cavityScratch=new Float32Array(u));const p=this.cavityScratch;for(let v=0;v<u;v++){let x=0,b=0,A=0,S=0;for(let D=0;D<4;D++){const O=c[v*4+D];O<0||(x+=o[O*3],b+=o[O*3+1],A+=o[O*3+2],S++)}if(S===0){p[v]=0;continue}const y=1/S,N=x*y-o[v*3],L=b*y-o[v*3+1],w=A*y-o[v*3+2],F=(N*t[v*3]+L*t[v*3+1]+w*t[v*3+2])*f;p[v]=Math.min(1,Math.max(0,F*a))}(!this.cavityScratch2||this.cavityScratch2.length<u)&&(this.cavityScratch2=new Float32Array(u));let d=p,g=this.cavityScratch2;const _=4;for(let v=0;v<_;v++){for(let b=0;b<u;b++){let A=0,S=0;for(let y=0;y<4;y++){const N=c[b*4+y];N<0||(A+=d[N],S++)}g[b]=S>0?d[b]*.3+A/S*.7:d[b]}const x=d;d=g,g=x}n.set(d.subarray(0,u))}step(t,n){this.accumulator+=Math.min(t,.05);let a=0;for(;this.accumulator>=Vd&&a<M1;)this.substep(n),this.accumulator-=Vd,a++;a===M1&&(this.accumulator=0),a>0&&(this.smoothPass(xw),this.selfCollide(vw))}smoothPass(t){const n=this.positions,a=this.neighbors,o=this.count;(!this.smoothScratch||this.smoothScratch.length<o*3)&&(this.smoothScratch=new Float32Array(o*3));const c=this.smoothScratch;for(let u=0;u<o;u++){let f=0,p=0,d=0,g=0;for(let x=0;x<4;x++){const b=a[u*4+x];b<0||(f+=n[b*3],p+=n[b*3+1],d+=n[b*3+2],g++)}const _=u*3;if(g===0){c[_]=n[_],c[_+1]=n[_+1],c[_+2]=n[_+2];continue}const v=1/g;c[_]=n[_]+(f*v-n[_])*t,c[_+1]=n[_+1]+(p*v-n[_+1])*t,c[_+2]=n[_+2]+(d*v-n[_+2])*t}n.set(c.subarray(0,o*3))}selfCollide(t){const n=this.positions,a=this.count,o=this.cols,c=this.selfRadius,u=c*c,f=this.selfHashInv,p=this.selfHash;for(let d=0;d<t;d++){p.clear();for(let g=0;g<a;g++){const _=Math.floor(n[g*3]*f),v=Math.floor(n[g*3+1]*f),x=Math.floor(n[g*3+2]*f),b=(_*73856093^v*19349663^x*83492791)>>>0;let A=p.get(b);A||(A=[],p.set(b,A)),A.push(g)}for(let g=0;g<a;g++){const _=g%o,v=g/o|0,x=Math.floor(n[g*3]*f),b=Math.floor(n[g*3+1]*f),A=Math.floor(n[g*3+2]*f);for(let S=-1;S<=1;S++)for(let y=-1;y<=1;y++)for(let N=-1;N<=1;N++){const L=((x+N)*73856093^(b+y)*19349663^(A+S)*83492791)>>>0,w=p.get(L);if(w)for(let F=0;F<w.length;F++){const D=w[F];if(D<=g)continue;const O=D%o,T=D/o|0,U=_-O,k=v-T;if(U>=-Mu&&U<=Mu&&k>=-Mu&&k<=Mu)continue;const G=n[D*3]-n[g*3],q=n[D*3+1]-n[g*3+1],ct=n[D*3+2]-n[g*3+2],ft=G*G+q*q+ct*ct;if(ft>=u||ft<1e-12)continue;const j=Math.sqrt(ft),B=(c-j)/j*.5*_w,z=G*B,Q=q*B,ut=ct*B;n[g*3]-=z,n[g*3+1]-=Q,n[g*3+2]-=ut,n[D*3]+=z,n[D*3+1]+=Q,n[D*3+2]+=ut}}}}}substep(t){const n=this.positions,a=this.prev,o=this.count,c=Math.pow(1-Math.min(t.viscosity,.99),Vd*60);for(let x=0;x<o*3;x++){const b=n[x],A=(b-a[x])*c;a[x]=b,n[x]=b+A}if(t.smoothing>0){const x=t.smoothing*.5,b=this.neighbors;for(let A=0;A<o;A++){let S=0,y=0,N=0,L=0;for(let F=0;F<4;F++){const D=b[A*4+F];D<0||(S+=n[D*3],y+=n[D*3+1],N+=n[D*3+2],L++)}if(L===0)continue;const w=1/L;n[A*3]+=(S*w-n[A*3])*x,n[A*3+1]+=(y*w-n[A*3+1])*x,n[A*3+2]+=(N*w-n[A*3+2])*x}}const u=Math.max(1,Math.round(t.iterations)),f=t.stiffness,p=this.cA,d=this.cB,g=this.cRest,_=this.cMul,v=p.length;for(let x=0;x<u;x++){for(let b=0;b<v;b++){const A=p[b]*3,S=d[b]*3,y=n[S]-n[A],N=n[S+1]-n[A+1],L=n[S+2]-n[A+2],w=Math.sqrt(y*y+N*N+L*L);if(w<1e-9)continue;const F=(w-g[b])/w*.5*f*_[b],D=y*F,O=N*F,T=L*F;n[A]+=D,n[A+1]+=O,n[A+2]+=T,n[S]-=D,n[S+1]-=O,n[S+2]-=T}this.applyGrab()}this.selfCollide(2),this.applyGrab()}applyGrab(){const t=this.grab;if(!t)return;const n=this.positions;for(let a=0;a<t.indices.length;a++){const o=t.indices[a]*3,c=t.weights[a],u=t.target.x+t.offsets[a*3],f=t.target.y+t.offsets[a*3+1],p=t.target.z+t.offsets[a*3+2];n[o]+=(u-n[o])*c,n[o+1]+=(f-n[o+1])*c,n[o+2]+=(p-n[o+2])*c}}}function wx(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Mw(s,t,n){const a=new Float32Array(s*s),o=new Float32Array(t+1),c=new Float32Array(t+1);for(let f=0;f<=t;f++)o[f]=.85+n()*.3,c[f]=.85+n()*.3;const u=new Float32Array(s*s);for(let f=0;f<u.length;f++)u[f]=n();for(let f=0;f<s;f++){const p=f/s*t,d=Math.floor(p),g=p-d;for(let _=0;_<s;_++){const v=_/s*t,x=Math.floor(v),b=v-x,A=Math.sin(b*Math.PI)*o[x%(t+1)],S=Math.sin(g*Math.PI)*c[d%(t+1)],N=(x+d)%2===0?A*.62+S*.38:S*.62+A*.38,L=u[f*s+_];a[f*s+_]=N*.85+L*.15}}return a}function Rx(s,t,n){const a=document.createElement("canvas");a.width=t,a.height=t;const o=a.getContext("2d"),c=o.createImageData(t,t),u=c.data,f=(d,g)=>s[(g+t)%t*t+(d+t)%t];for(let d=0;d<t;d++)for(let g=0;g<t;g++){const _=(f(g+1,d)-f(g-1,d))*n,v=(f(g,d+1)-f(g,d-1))*n,x=1/Math.sqrt(_*_+v*v+1),b=(d*t+g)*4;u[b]=Math.round((-_*x*.5+.5)*255),u[b+1]=Math.round((v*x*.5+.5)*255),u[b+2]=Math.round((x*.5+.5)*255),u[b+3]=255}o.putImageData(c,0,0);const p=new Ll(a);return p.wrapS=p.wrapT=Rl,p.repeat.set(2,2),p.colorSpace=Gi,p}function Sw(s,t,n,a){const o=new Float32Array(s*s),c=new Float32Array(s*s);for(let f=0;f<c.length;f++)c[f]=a();const u=new Float32Array(Math.ceil(t)+2);for(let f=0;f<u.length;f++)u[f]=.85+a()*.3;for(let f=0;f<s;f++){const p=f/s*n,d=Math.floor(p),g=p-d,_=d%2===0?0:.5;for(let v=0;v<s;v++){const x=v/s*t+_,b=Math.floor(x),A=x-b,S=Math.sin(A*Math.PI)*u[(b+1)%u.length],y=Math.sin(g*Math.PI),N=.5+.5*Math.cos((A-.5)*2*Math.PI),L=.55*S+.3*y*N;o[f*s+v]=L*.85+c[f*s+v]*.15}}return o}function bw(s){const t=s.size??512,n=wx(s.seed??20240),a=s.type==="woven"?Mw(t,s.threads,n):Sw(t,s.threads,Math.max(2,Math.round(s.threads*.8)),n);return Rx(a,t,s.strength)}function Ew(s,t=512,n=1.6){const a=document.createElement("canvas");a.width=t,a.height=t;const o=a.getContext("2d");o.drawImage(s,0,0,t,t);const c=o.getImageData(0,0,t,t).data,u=new Float32Array(t*t);for(let f=0;f<u.length;f++)u[f]=(c[f*4]*.2126+c[f*4+1]*.7152+c[f*4+2]*.0722)/255;return Rx(u,t,n)}function Tw(s=256,t=4242){const n=wx(t),a=document.createElement("canvas");a.width=s,a.height=s;const o=a.getContext("2d"),c=o.createImageData(s,s),u=c.data;for(let p=0;p<s*s;p++){const d=Math.round(215+(n()-.5)*70);u[p*4]=d,u[p*4+1]=d,u[p*4+2]=d,u[p*4+3]=255}o.putImageData(c,0,0);const f=new Ll(a);return f.wrapS=f.wrapT=Rl,f.repeat.set(4,4),f.colorSpace=Gi,f}function Aw(s){const t=Tw(),n=new fx({color:new se("#9aa1ad"),metalness:.95,roughness:.1,roughnessMap:t,normalScale:new jt(.5,.5),clearcoat:1,clearcoatRoughness:.08,sheen:.35,sheenRoughness:.55,sheenColor:new se("#cfd6ff"),iridescence:1,iridescenceIOR:1.35,iridescenceThicknessRange:[120,480],side:ji}),a={uHoloIntensity:{value:1},uHoloScale:{value:110},uBandFreq:{value:3},uRadialFreq:{value:1.6},uSaturation:{value:.8},uHueShift:{value:0},uSparkle:{value:.6},uSpecTint:{value:.85},uSurfaceMap:{value:s},uSurfaceOpacity:{value:1},uCavityAmount:{value:0},uCornerRound:{value:0},uClothSize:{value:new jt(3,3)},uWetMap:{value:null}};return n.alphaToCoverage=!0,n.onBeforeCompile=o=>{Object.assign(o.uniforms,a),o.vertexShader=`varying vec2 vHoloUv;
attribute float aCavity;
varying float vCavity;
`+o.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
	vHoloUv = uv;
	vCavity = aCavity;`),o.fragmentShader=`
      varying vec2 vHoloUv;
      uniform float uHoloIntensity;
      uniform float uHoloScale;
      uniform float uBandFreq;
      uniform float uRadialFreq;
      uniform float uSaturation;
      uniform float uHueShift;
      uniform float uSparkle;
      uniform float uSpecTint;
      uniform sampler2D uSurfaceMap;
      uniform float uSurfaceOpacity;
      varying float vCavity;
      uniform float uCavityAmount;
      uniform float uCornerRound;
      uniform vec2 uClothSize;
      uniform sampler2D uWetMap;

      float holoHash(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      vec3 holoHsv2rgb(vec3 c) {
        vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
        rgb = rgb * rgb * (3.0 - 2.0 * rgb); // smooth rainbow
        return c.z * mix(vec3(1.0), rgb, c.y);
      }
      `+o.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          // rounded-corner cutout: rounded-rect SDF in cloth space; sharp at 0
          if (uCornerRound > 0.0) {
            vec2 cp = (vHoloUv - 0.5) * uClothSize;
            float cr = uCornerRound * 0.5 * min(uClothSize.x, uClothSize.y);
            vec2 cq = abs(cp) - (0.5 * uClothSize - vec2(cr));
            float cd = length(max(cq, vec2(0.0))) - cr;
            float cEdge = fwidth(cd) + 1e-4;
            float cMask = 1.0 - smoothstep(-cEdge, cEdge, cd);
            if (cMask <= 0.0) discard;
            diffuseColor.a *= cMask;
          }

          // uploaded graphics live in UV space, so they morph with the cloth;
          // ink reads as dielectric, so pull metalness down where it covers
          vec4 surf = texture2D(uSurfaceMap, vHoloUv);
          float surfA = surf.a * uSurfaceOpacity;
          diffuseColor.rgb = mix(diffuseColor.rgb, surf.rgb, surfA);
          metalnessFactor = mix(metalnessFactor, 0.05, surfA * 0.8);

          vec3 hView = normalize(vViewPosition);
          float facing = clamp(abs(dot(normal, hView)), 0.0, 1.0);
          float fres = pow(1.0 - facing, 1.5);

          // micro flake cells — each has a random phase so neighbouring
          // flakes catch different colors, like holo foil grain
          vec2 cellUv = vHoloUv * uHoloScale;
          vec2 cellId = floor(cellUv);
          float rnd = holoHash(cellId);
          float rnd2 = holoHash(cellId + 71.7);

          // diffraction sweep: broad smooth bands driven by view angle and
          // radial distance; flakes only nudge the phase slightly
          float radial = length(vHoloUv - 0.5) * uRadialFreq;
          float hue = fract(uHueShift + facing * uBandFreq + radial + rnd * 0.06);
          vec3 rainbow = holoHsv2rgb(vec3(hue, uSaturation, 1.0));

          // flake mask: soft variation so the foil reads as granular, not flat
          float flake = 0.82 + 0.18 * rnd2;

          // angle-gated glints: a sparse set of flakes flares at specific angles
          float gate = fract(rnd2 * 13.7 + facing * 6.0);
          float glint = smoothstep(1.0 - 0.012 * uSparkle, 1.0, gate) * 5.0;

          // rainbow brightest at grazing angles but present face-on too;
          // folds swallow the glow where cavity occlusion applies
          float energy = (0.22 + 0.78 * fres) * flake;
          float holoAO = 1.0 - uCavityAmount * vCavity * 0.8;
          totalEmissiveRadiance += rainbow * uHoloIntensity * (energy * 0.55 + glint * fres * 0.5) * holoAO;

          // tint the metallic F0 so specular reflections go iridescent —
          // this is what makes real holo foil flash color, not glow
          vec3 tinted = diffuseColor.rgb * (0.25 + rainbow * 1.9);
          diffuseColor.rgb = mix(diffuseColor.rgb, tinted, uSpecTint);

          // --- moisture ---
          vec4 wet = texture2D(uWetMap, vHoloUv);
          float absorbed = clamp(wet.r, 0.0, 1.0);
          float bead = clamp(wet.g, 0.0, 1.0);
          // absorbed water darkens the fabric and makes it a touch glossier
          diffuseColor.rgb *= (1.0 - absorbed * 0.55);
          roughnessFactor *= (1.0 - absorbed * 0.35);
          // beads are little glossy lenses: very smooth + a bright rim highlight
          roughnessFactor = mix(roughnessFactor, 0.05, bead);
          float bFacing = clamp(abs(dot(normal, normalize(vViewPosition))), 0.0, 1.0);
          float bFres = pow(1.0 - bFacing, 2.5);
          totalEmissiveRadiance += bead * (0.12 + 0.7 * bFres) * vec3(1.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85), bead * 0.2);
        }`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
        {
          // cavity occlusion: deep folds see less of the environment.
          // Mirrors aomap_fragment's application points.
          float cavityAO = 1.0 - uCavityAmount * vCavity;
          reflectedLight.indirectDiffuse *= cavityAO;
          #if defined( USE_CLEARCOAT )
            clearcoatSpecularIndirect *= cavityAO;
          #endif
          #if defined( USE_SHEEN )
            sheenSpecularIndirect *= cavityAO;
          #endif
          #if defined( USE_ENVMAP ) && defined( STANDARD )
            float cavDotNV = saturate( dot( geometryNormal, geometryViewDir ) );
            reflectedLight.indirectSpecular *= computeSpecularOcclusion( cavDotNV, cavityAO, material.roughness );
          #endif
        }`)},{material:n,uniforms:a}}const io=2048;class ww{canvas;texture;decals=[];clothImage=null;selected=null;ctx;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=io,this.canvas.height=io,this.ctx=this.canvas.getContext("2d"),this.texture=new Ll(this.canvas),this.texture.colorSpace=hi,this.redraw()}setAspect(t){const n=t>=1?io:Math.round(io*t),a=t>=1?Math.round(io/t):io;return this.canvas.width===n&&this.canvas.height===a?(this.redraw(),!1):(this.canvas.width=n,this.canvas.height=a,this.texture.dispose(),this.texture=new Ll(this.canvas),this.texture.colorSpace=hi,this.redraw(),!0)}addDecal(t){const n={img:t,u:.5,v:.5,scale:.35,rotation:0};return this.decals.push(n),this.selected=n,this.redraw(),n}setClothImage(t){this.clothImage=t,this.redraw()}clear(){this.decals=[],this.clothImage=null,this.selected=null,this.redraw()}hitTest(t,n){const a=this.canvas.width,o=this.canvas.height,c=t*a,u=(1-n)*o;for(let f=this.decals.length-1;f>=0;f--){const p=this.decals[f],{w:d,h:g}=this.decalPixelSize(p),_=p.u*a,v=(1-p.v)*o,x=-p.rotation*Math.PI/180,b=c-_,A=u-v,S=b*Math.cos(x)-A*Math.sin(x),y=b*Math.sin(x)+A*Math.cos(x);if(Math.abs(S)<=d/2&&Math.abs(y)<=g/2)return p}return null}decalPixelSize(t){const n=this.canvas.width,a=t.img.naturalWidth||t.img.width||300,o=t.img.naturalHeight||t.img.height||300,c=t.scale*n,u=c*o/a;return{w:c,h:u}}redraw(){const{ctx:t,canvas:n}=this;t.clearRect(0,0,n.width,n.height),this.clothImage&&t.drawImage(this.clothImage,0,0,n.width,n.height);for(const a of this.decals){const{w:o,h:c}=this.decalPixelSize(a);t.save(),t.translate(a.u*n.width,(1-a.v)*n.height),t.rotate(a.rotation*Math.PI/180),t.drawImage(a.img,-o/2,-c/2,o,c),t.restore()}this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}const S1=`
  #include <common>
  #include <packing>
  varying vec2 vUv;
  uniform sampler2D tDepth;
  uniform float focus;
  uniform float focalDepth;
  uniform float aperture;
  uniform float maxblur;
  uniform float nearClip;
  uniform float farClip;

  float viewDist( const in vec2 uv ) {
    float d = unpackRGBAToDepth( texture2D( tDepth, uv ) );
    return -perspectiveDepthToViewZ( d, nearClip, farClip );
  }

  float cocPx( const in float dist, const in float pxY ) {
    float excess = abs( dist - focus ) - focalDepth;
    if ( excess <= 0.0 ) return 0.0;
    return min( aperture * excess / max( dist, 0.2 ), maxblur ) / pxY;
  }
`,Rw=`
  
  uniform sampler2D tColor;

  void main() {
    vec2 px = vec2( abs( dFdx( vUv.x ) ), abs( dFdy( vUv.y ) ) );
    float pxY = max( px.y, 1e-6 );
    float maxRadPx = maxblur / pxY;

    vec4 center = texture2D( tColor, vUv );
    float centerDist = viewDist( vUv );
    float centerCoc = cocPx( centerDist, pxY );

    // adaptive reach: full radius only where the pixel (or potential
    // foreground spill) needs it
    float radius = min( maxRadPx, max( centerCoc * 1.15, maxRadPx * 0.25 ) );

    // flatness early-out: fully-blurred flat regions (mostly the solid
    // background) blur to themselves — probe a ring and skip the gather
    if ( centerCoc >= maxRadPx * 0.95 ) {
      vec4 p0 = texture2D( tColor, vUv + vec2( radius * px.x, 0.0 ) );
      vec4 p1 = texture2D( tColor, vUv - vec2( radius * px.x, 0.0 ) );
      vec4 p2 = texture2D( tColor, vUv + vec2( 0.0, radius * px.y ) );
      vec4 p3 = texture2D( tColor, vUv - vec2( 0.0, radius * px.y ) );
      vec4 avg = ( p0 + p1 + p2 + p3 ) * 0.25;
      float dev = dot( abs( p0 - avg ).rgb + abs( p1 - avg ).rgb + abs( p2 - avg ).rgb + abs( p3 - avg ).rgb, vec3( 1.0 ) )
        + abs( center.a - avg.a ) * 4.0;
      if ( dev < 0.02 ) {
        gl_FragColor = mix( center, avg, 0.5 );
        return;
      }
    }

    // per-pixel rotation turns ring artifacts into fine noise
    float rnd = fract( sin( dot( gl_FragCoord.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 ) * 6.28318;

    vec4 acc = center;
    float tot = 1.0;
    const int N = 96;
    // tap count scales with the disc area actually gathered
    float nEff = clamp( radius * radius * 0.1, 12.0, float( N ) );
    const float GOLDEN = 2.39996323;
    for ( int i = 1; i <= N; i ++ ) {
      float fi = float( i );
      if ( fi > nEff ) break;
      float ang = fi * GOLDEN + rnd;
      float rad = radius * sqrt( fi / nEff );
      vec2 tc = vUv + vec2( cos( ang ) * px.x, sin( ang ) * px.y ) * rad;
      vec4 sColor = texture2D( tColor, tc );
      float sDist = viewDist( tc );
      float sCoc = cocPx( sDist, pxY );
      // background may not bleed over a sharp foreground
      if ( sDist > centerDist ) sCoc = min( sCoc, centerCoc * 2.0 + 1.0 );
      float m = smoothstep( rad - 1.0, rad + 1.0, sCoc );
      acc += mix( acc / tot, sColor, m );
      tot += 1.0;
    }
    gl_FragColor = acc / tot;
  }
`,Cw=`
  uniform sampler2D tSharp;
  uniform sampler2D tBlur;

  void main() {
    vec4 sharp = texture2D( tSharp, vUv );
    vec4 blur = texture2D( tBlur, vUv );
    float pxY = max( abs( dFdy( vUv.y ) ), 1e-6 );
    float coc = cocPx( viewDist( vUv ), pxY );
    float w = smoothstep( 0.3, 1.5, coc );
    gl_FragColor = mix( sharp, blur, w );
  }
`,b1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;function E1(){return{tDepth:{value:null},focus:{value:5.2},focalDepth:{value:.15},aperture:{value:.4},maxblur:{value:.04},nearClip:{value:.1},farClip:{value:200}}}class Dw extends lr{sceneRef;cameraRef;depthMaterial;depthRT;blurRT;gatherMat;compositeMat;fsQuad;clearColorTmp=new se;constructor(t,n){super(),this.sceneRef=t,this.cameraRef=n,this.needsSwap=!0,this.depthMaterial=new dx,this.depthMaterial.depthPacking=DS,this.depthMaterial.blending=ta,this.depthRT=new Xn(1,1,{minFilter:Dn,magFilter:Dn}),this.blurRT=new Xn(1,1,{minFilter:On,magFilter:On,type:ni}),this.gatherMat=new In({uniforms:{...E1(),tColor:{value:null}},vertexShader:b1,fragmentShader:S1+Rw}),this.compositeMat=new In({uniforms:{...E1(),tSharp:{value:null},tBlur:{value:null}},vertexShader:b1,fragmentShader:S1+Cw}),this.fsQuad=new ju(this.gatherMat)}setBoth(t,n){this.gatherMat.uniforms[t].value=n,this.compositeMat.uniforms[t].value=n}setParams(t,n,a){this.setBoth("aperture",t),this.setBoth("maxblur",n),this.setBoth("focalDepth",a)}setFocus(t){this.setBoth("focus",t)}setSize(t,n){this.depthRT.setSize(t,n),this.blurRT.setSize(Math.max(1,t>>1),Math.max(1,n>>1))}render(t,n,a){this.setBoth("nearClip",this.cameraRef.near),this.setBoth("farClip",this.cameraRef.far),t.getClearColor(this.clearColorTmp);const o=t.getClearAlpha(),c=t.autoClear;t.autoClear=!1,this.sceneRef.overrideMaterial=this.depthMaterial,t.setClearColor(16777215,1),t.setRenderTarget(this.depthRT),t.clear(),t.render(this.sceneRef,this.cameraRef),this.sceneRef.overrideMaterial=null,t.setClearColor(this.clearColorTmp,o),this.gatherMat.uniforms.tColor.value=a.texture,this.gatherMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.gatherMat,t.setRenderTarget(this.blurRT),this.fsQuad.render(t),this.compositeMat.uniforms.tSharp.value=a.texture,this.compositeMat.uniforms.tBlur.value=this.blurRT.texture,this.compositeMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.compositeMat,t.setRenderTarget(this.renderToScreen?null:n),this.fsQuad.render(t),t.autoClear=c}dispose(){this.depthMaterial.dispose(),this.depthRT.dispose(),this.blurRT.dispose(),this.gatherMat.dispose(),this.compositeMat.dispose(),this.fsQuad.dispose()}}var Qn=Uint8Array,Ci=Uint16Array,vp=Int32Array,_p=new Qn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xp=new Qn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),T1=new Qn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Cx=function(s,t){for(var n=new Ci(31),a=0;a<31;++a)n[a]=t+=1<<s[a-1];for(var o=new vp(n[30]),a=1;a<30;++a)for(var c=n[a];c<n[a+1];++c)o[c]=c-n[a]<<5|a;return{b:n,r:o}},Dx=Cx(_p,2),Nw=Dx.b,H0=Dx.r;Nw[28]=258,H0[258]=28;var Uw=Cx(xp,0),A1=Uw.r,G0=new Ci(32768);for(var ln=0;ln<32768;++ln){var Ts=(ln&43690)>>1|(ln&21845)<<1;Ts=(Ts&52428)>>2|(Ts&13107)<<2,Ts=(Ts&61680)>>4|(Ts&3855)<<4,G0[ln]=((Ts&65280)>>8|(Ts&255)<<8)>>1}var wl=(function(s,t,n){for(var a=s.length,o=0,c=new Ci(t);o<a;++o)s[o]&&++c[s[o]-1];var u=new Ci(t);for(o=1;o<t;++o)u[o]=u[o-1]+c[o-1]<<1;var f;if(n){f=new Ci(1<<t);var p=15-t;for(o=0;o<a;++o)if(s[o])for(var d=o<<4|s[o],g=t-s[o],_=u[s[o]-1]++<<g,v=_|(1<<g)-1;_<=v;++_)f[G0[_]>>p]=d}else for(f=new Ci(a),o=0;o<a;++o)s[o]&&(f[o]=G0[u[s[o]-1]++]>>15-s[o]);return f}),rr=new Qn(288);for(var ln=0;ln<144;++ln)rr[ln]=8;for(var ln=144;ln<256;++ln)rr[ln]=9;for(var ln=256;ln<280;++ln)rr[ln]=7;for(var ln=280;ln<288;++ln)rr[ln]=8;var Gu=new Qn(32);for(var ln=0;ln<32;++ln)Gu[ln]=5;var Lw=wl(rr,9,0),Pw=wl(Gu,5,0),Nx=function(s){return(s+7)/8|0},Ux=function(s,t,n){return(n==null||n>s.length)&&(n=s.length),new Qn(s.subarray(t,n))},Ow=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Qu=function(s,t,n){var a=new Error(t||Ow[s]);if(a.code=s,Error.captureStackTrace&&Error.captureStackTrace(a,Qu),!n)throw a;return a},Ha=function(s,t,n){n<<=t&7;var a=t/8|0;s[a]|=n,s[a+1]|=n>>8},yl=function(s,t,n){n<<=t&7;var a=t/8|0;s[a]|=n,s[a+1]|=n>>8,s[a+2]|=n>>16},kd=function(s,t){for(var n=[],a=0;a<s.length;++a)s[a]&&n.push({s:a,f:s[a]});var o=n.length,c=n.slice();if(!o)return{t:Px,l:0};if(o==1){var u=new Qn(n[0].s+1);return u[n[0].s]=1,{t:u,l:1}}n.sort(function(F,D){return F.f-D.f}),n.push({s:-1,f:25001});var f=n[0],p=n[1],d=0,g=1,_=2;for(n[0]={s:-1,f:f.f+p.f,l:f,r:p};g!=o-1;)f=n[n[d].f<n[_].f?d++:_++],p=n[d!=g&&n[d].f<n[_].f?d++:_++],n[g++]={s:-1,f:f.f+p.f,l:f,r:p};for(var v=c[0].s,a=1;a<o;++a)c[a].s>v&&(v=c[a].s);var x=new Ci(v+1),b=V0(n[g-1],x,0);if(b>t){var a=0,A=0,S=b-t,y=1<<S;for(c.sort(function(D,O){return x[O.s]-x[D.s]||D.f-O.f});a<o;++a){var N=c[a].s;if(x[N]>t)A+=y-(1<<b-x[N]),x[N]=t;else break}for(A>>=S;A>0;){var L=c[a].s;x[L]<t?A-=1<<t-x[L]++-1:++a}for(;a>=0&&A;--a){var w=c[a].s;x[w]==t&&(--x[w],++A)}b=t}return{t:new Qn(x),l:b}},V0=function(s,t,n){return s.s==-1?Math.max(V0(s.l,t,n+1),V0(s.r,t,n+1)):t[s.s]=n},w1=function(s){for(var t=s.length;t&&!s[--t];);for(var n=new Ci(++t),a=0,o=s[0],c=1,u=function(p){n[a++]=p},f=1;f<=t;++f)if(s[f]==o&&f!=t)++c;else{if(!o&&c>2){for(;c>138;c-=138)u(32754);c>2&&(u(c>10?c-11<<5|28690:c-3<<5|12305),c=0)}else if(c>3){for(u(o),--c;c>6;c-=6)u(8304);c>2&&(u(c-3<<5|8208),c=0)}for(;c--;)u(o);c=1,o=s[f]}return{c:n.subarray(0,a),n:t}},Ml=function(s,t){for(var n=0,a=0;a<t.length;++a)n+=s[a]*t[a];return n},Lx=function(s,t,n){var a=n.length,o=Nx(t+2);s[o]=a&255,s[o+1]=a>>8,s[o+2]=s[o]^255,s[o+3]=s[o+1]^255;for(var c=0;c<a;++c)s[o+c+4]=n[c];return(o+4+a)*8},R1=function(s,t,n,a,o,c,u,f,p,d,g){Ha(t,g++,n),++o[256];for(var _=kd(o,15),v=_.t,x=_.l,b=kd(c,15),A=b.t,S=b.l,y=w1(v),N=y.c,L=y.n,w=w1(A),F=w.c,D=w.n,O=new Ci(19),T=0;T<N.length;++T)++O[N[T]&31];for(var T=0;T<F.length;++T)++O[F[T]&31];for(var U=kd(O,7),k=U.t,G=U.l,q=19;q>4&&!k[T1[q-1]];--q);var ct=d+5<<3,ft=Ml(o,rr)+Ml(c,Gu)+u,j=Ml(o,v)+Ml(c,A)+u+14+3*q+Ml(O,k)+2*O[16]+3*O[17]+7*O[18];if(p>=0&&ct<=ft&&ct<=j)return Lx(t,g,s.subarray(p,p+d));var B,z,Q,ut;if(Ha(t,g,1+(j<ft)),g+=2,j<ft){B=wl(v,x,0),z=v,Q=wl(A,S,0),ut=A;var Et=wl(k,G,0);Ha(t,g,L-257),Ha(t,g+5,D-1),Ha(t,g+10,q-4),g+=14;for(var T=0;T<q;++T)Ha(t,g+3*T,k[T1[T]]);g+=3*q;for(var P=[N,F],K=0;K<2;++K)for(var St=P[K],T=0;T<St.length;++T){var At=St[T]&31;Ha(t,g,Et[At]),g+=k[At],At>15&&(Ha(t,g,St[T]>>5&127),g+=St[T]>>12)}}else B=Lw,z=rr,Q=Pw,ut=Gu;for(var T=0;T<f;++T){var wt=a[T];if(wt>255){var At=wt>>18&31;yl(t,g,B[At+257]),g+=z[At+257],At>7&&(Ha(t,g,wt>>23&31),g+=_p[At]);var tt=wt&31;yl(t,g,Q[tt]),g+=ut[tt],tt>3&&(yl(t,g,wt>>5&8191),g+=xp[tt])}else yl(t,g,B[wt]),g+=z[wt]}return yl(t,g,B[256]),g+z[256]},Iw=new vp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Px=new Qn(0),Fw=function(s,t,n,a,o,c){var u=c.z||s.length,f=new Qn(a+u+5*(1+Math.ceil(u/7e3))+o),p=f.subarray(a,f.length-o),d=c.l,g=(c.r||0)&7;if(t){g&&(p[0]=c.r>>3);for(var _=Iw[t-1],v=_>>13,x=_&8191,b=(1<<n)-1,A=c.p||new Ci(32768),S=c.h||new Ci(b+1),y=Math.ceil(n/3),N=2*y,L=function(ge){return(s[ge]^s[ge+1]<<y^s[ge+2]<<N)&b},w=new vp(25e3),F=new Ci(288),D=new Ci(32),O=0,T=0,U=c.i||0,k=0,G=c.w||0,q=0;U+2<u;++U){var ct=L(U),ft=U&32767,j=S[ct];if(A[ft]=j,S[ct]=ft,G<=U){var B=u-U;if((O>7e3||k>24576)&&(B>423||!d)){g=R1(s,p,0,w,F,D,T,k,q,U-q,g),k=O=T=0,q=U;for(var z=0;z<286;++z)F[z]=0;for(var z=0;z<30;++z)D[z]=0}var Q=2,ut=0,Et=x,P=ft-j&32767;if(B>2&&ct==L(U-P))for(var K=Math.min(v,B)-1,St=Math.min(32767,U),At=Math.min(258,B);P<=St&&--Et&&ft!=j;){if(s[U+Q]==s[U+Q-P]){for(var wt=0;wt<At&&s[U+wt]==s[U+wt-P];++wt);if(wt>Q){if(Q=wt,ut=P,wt>K)break;for(var tt=Math.min(P,wt-2),xt=0,z=0;z<tt;++z){var yt=U-P+z&32767,zt=A[yt],ae=yt-zt&32767;ae>xt&&(xt=ae,j=yt)}}}ft=j,j=A[ft],P+=ft-j&32767}if(ut){w[k++]=268435456|H0[Q]<<18|A1[ut];var Qt=H0[Q]&31,ze=A1[ut]&31;T+=_p[Qt]+xp[ze],++F[257+Qt],++D[ze],G=U+Q,++O}else w[k++]=s[U],++F[s[U]]}}for(U=Math.max(U,G);U<u;++U)w[k++]=s[U],++F[s[U]];g=R1(s,p,d,w,F,D,T,k,q,U-q,g),d||(c.r=g&7|p[g/8|0]<<3,g-=7,c.h=S,c.p=A,c.i=U,c.w=G)}else{for(var U=c.w||0;U<u+d;U+=65535){var le=U+65535;le>=u&&(p[g/8|0]=d,le=u),g=Lx(p,g+1,s.subarray(U,le))}c.i=u}return Ux(f,0,a+Nx(g)+o)},Bw=(function(){for(var s=new Int32Array(256),t=0;t<256;++t){for(var n=t,a=9;--a;)n=(n&1&&-306674912)^n>>>1;s[t]=n}return s})(),zw=function(){var s=-1;return{p:function(t){for(var n=s,a=0;a<t.length;++a)n=Bw[n&255^t[a]]^n>>>8;s=n},d:function(){return~s}}},Hw=function(s,t,n,a,o){if(!o&&(o={l:1},t.dictionary)){var c=t.dictionary.subarray(-32768),u=new Qn(c.length+s.length);u.set(c),u.set(s,c.length),s=u,o.w=c.length}return Fw(s,t.level==null?6:t.level,t.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):20:12+t.mem,n,a,o)},Ox=function(s,t){var n={};for(var a in s)n[a]=s[a];for(var a in t)n[a]=t[a];return n},kn=function(s,t,n){for(;n;++t)s[t]=n,n>>>=8};function Gw(s,t){return Hw(s,t||{},0,0)}var Ix=function(s,t,n,a){for(var o in s){var c=s[o],u=t+o,f=a;Array.isArray(c)&&(f=Ox(a,c[1]),c=c[0]),c instanceof Qn?n[u]=[c,f]:(n[u+="/"]=[new Qn(0),f],Ix(c,u,n,a))}},C1=typeof TextEncoder<"u"&&new TextEncoder,Vw=typeof TextDecoder<"u"&&new TextDecoder,kw=0;try{Vw.decode(Px,{stream:!0}),kw=1}catch{}function Vu(s,t){var n;if(C1)return C1.encode(s);for(var a=s.length,o=new Qn(s.length+(s.length>>1)),c=0,u=function(d){o[c++]=d},n=0;n<a;++n){if(c+5>o.length){var f=new Qn(c+8+(a-n<<1));f.set(o),o=f}var p=s.charCodeAt(n);p<128||t?u(p):p<2048?(u(192|p>>6),u(128|p&63)):p>55295&&p<57344?(p=65536+(p&1047552)|s.charCodeAt(++n)&1023,u(240|p>>18),u(128|p>>12&63),u(128|p>>6&63),u(128|p&63)):(u(224|p>>12),u(128|p>>6&63),u(128|p&63))}return Ux(o,0,c)}var k0=function(s){var t=0;if(s)for(var n in s){var a=s[n].length;a>65535&&Qu(9),t+=a+4}return t},D1=function(s,t,n,a,o,c,u,f){var p=a.length,d=n.extra,g=f&&f.length,_=k0(d);kn(s,t,u!=null?33639248:67324752),t+=4,u!=null&&(s[t++]=20,s[t++]=n.os),s[t]=20,t+=2,s[t++]=n.flag<<1|(c<0&&8),s[t++]=o&&8,s[t++]=n.compression&255,s[t++]=n.compression>>8;var v=new Date(n.mtime==null?Date.now():n.mtime),x=v.getFullYear()-1980;if((x<0||x>119)&&Qu(10),kn(s,t,x<<25|v.getMonth()+1<<21|v.getDate()<<16|v.getHours()<<11|v.getMinutes()<<5|v.getSeconds()>>1),t+=4,c!=-1&&(kn(s,t,n.crc),kn(s,t+4,c<0?-c-2:c),kn(s,t+8,n.size)),kn(s,t+12,p),kn(s,t+14,_),t+=16,u!=null&&(kn(s,t,g),kn(s,t+6,n.attrs),kn(s,t+10,u),t+=14),s.set(a,t),t+=p,_)for(var b in d){var A=d[b],S=A.length;kn(s,t,+b),kn(s,t+2,S),s.set(A,t+4),t+=4+S}return g&&(s.set(f,t),t+=g),t},Ww=function(s,t,n,a,o){kn(s,t,101010256),kn(s,t+8,n),kn(s,t+10,n),kn(s,t+12,a),kn(s,t+16,o)};function Xw(s,t){t||(t={});var n={},a=[];Ix(s,"",n,t);var o=0,c=0;for(var u in n){var f=n[u],p=f[0],d=f[1],g=d.level==0?0:8,_=Vu(u),v=_.length,x=d.comment,b=x&&Vu(x),A=b&&b.length,S=k0(d.extra);v>65535&&Qu(11);var y=g?Gw(p,d):p,N=y.length,L=zw();L.p(p),a.push(Ox(d,{size:p.length,crc:L.d(),c:y,f:_,m:b,u:v!=u.length||b&&x.length!=A,o,compression:g})),o+=30+v+S+N,c+=76+2*(v+S)+(A||0)+N}for(var w=new Qn(c+22),F=o,D=c-o,O=0;O<a.length;++O){var _=a[O];D1(w,_.o,_,_.f,_.u,_.c.length);var T=30+_.f.length+k0(_.extra);w.set(_.c,_.o+T),D1(w,o,_,_.f,_.u,_.c.length,_.o,_.m),o+=16+T+(_.m?_.m.length:0)}return Ww(w,o,a.length,D,F),w}class fi{constructor(t,n="",a=[],o=[]){this.name=t,this.type=n,this.metadata=a,this.properties=o,this.children=[]}addMetadata(t,n){this.metadata.push({key:t,value:n})}addProperty(t,n=[]){this.properties.push({property:t,metadata:n})}addChild(t){this.children.push(t)}toString(t=0){const n="	".repeat(t),a=this.metadata.map(g=>{const _=g.key,v=g.value;if(Array.isArray(v)){const x=[];return x.push(`${_} = {`),v.forEach(b=>{x.push(`${n}		${b}`)}),x.push(`${n}	}`),x.join(`
`)}else return`${_} = ${v}`}),o=a.length?` (
${a.map(g=>`${n}	${g}`).join(`
`)}
${n})`:"",c=this.properties.map(g=>{const _=g.property.replace(/\n/g,`
`+n+"	"),v=g.metadata.length?` (
${g.metadata.map(x=>`${n}		${x}`).join(`
`)}
${n}	)`:"";return`${n}	${_}${v}`}),u=this.children.map(g=>g.toString(t+1)),f=[];if(c.length>0&&f.push(...c),u.length>0){c.length>0&&f.push("");for(let g=0;g<u.length;g++)f.push(u[g]),g<u.length-1&&f.push("")}const p=f.join(`
`),d=this.type?this.type+" ":"";return`${n}def ${d}"${this.name}"${o}
${n}{
${p}
${n}}`}}class qw{constructor(){this.textureUtils=null}setTextureUtils(t){this.textureUtils=t}parse(t,n,a,o){this.parseAsync(t,o).then(n).catch(a)}async parseAsync(t,n={}){n=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},n);const a=new Set,o={},c="model.usda";o[c]=null;const u=Zw(t,n.animations);n.animationTracks=u;const f=new fi("Root","Xform"),p=new fi("Scenes","Scope");p.addMetadata("kind",'"sceneLibrary"'),f.addChild(p);const d="Scene",g=new fi(d,"Xform");g.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${d}"`]),g.addMetadata("sceneName",`"${d}"`),n.includeAnchoringProperties&&(g.addProperty(`token preliminary:anchoring:type = "${n.ar.anchoring.type}"`),g.addProperty(`token preliminary:planeAnchoring:alignment = "${n.ar.planeAnchoring.alignment}"`)),p.addChild(g);let _;const v={},x={};t.isScene?Hx(t,g,v,a,o,n):Gx(t,g,v,a,o,n);const b=iR(v,x,n.quickLookCompatible),A=u.size>0?{fps:n.animationFrameRate,endTimeCode:Kw(n.animations)*n.animationFrameRate}:null;_=zx(A)+`
`+f.toString()+`

`+b.toString(),o[c]=Vu(_),_=null;for(const y in x){let N=x[y];if(N.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");N=await this.textureUtils.decompress(N)}const L=Yw(N.image,N.flipY,n.maxTextureSize),w=N.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",F=await new Promise(D=>L.toBlob(D,w));o[`textures/Texture_${y}.${Bx(N)}`]=new Uint8Array(await F.arrayBuffer())}let S=0;for(const y in o){const N=o[y],L=34+y.length;S+=L;const w=S&63;if(w!==4){const F=64-w,D=new Uint8Array(F);o[y]=[N,{extra:{12345:D}}]}S=N.length}return Xw(o,{level:0})}}function Fx(s,t){let n=s.name;return n=n.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(n)&&(n="_"+n),n===""&&(s.isCamera?n="Camera":n="Object"),t.has(n)&&(n=n+"_"+s.id),t.add(n),n}function Bx(s){return s.userData.mimeType==="image/jpeg"?"jpg":"png"}function Yw(s,t,n){if(typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&s instanceof ImageBitmap){const a=n/Math.max(s.width,s.height),o=document.createElement("canvas");o.width=s.width*Math.min(1,a),o.height=s.height*Math.min(1,a);const c=o.getContext("2d");return t===!0&&(c.translate(0,o.height),c.scale(1,-1)),c.drawImage(s,0,0,o.width,o.height),o}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const Le=7;function zx(s=null){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"${s?`
	startTimeCode = 0
	endTimeCode = ${s.endTimeCode}
	timeCodesPerSecond = ${s.fps}
	framesPerSecond = ${s.fps}`:""}
)
`}function Zw(s,t){const n=new Map;for(let a=0;a<t.length;a++){const o=t[a];for(let c=0;c<o.tracks.length;c++){const u=o.tracks[c],f=We.parseTrackName(u.name),p=We.findNode(s,f.nodeName);if(p==null)continue;const d=f.propertyName;if(d!=="position"&&d!=="quaternion"&&d!=="scale")continue;let g=n.get(p);g===void 0&&(g={},n.set(p,g)),g[d]=u}}return n}function Kw(s){let t=0;for(let n=0;n<s.length;n++)s[n].duration>t&&(t=s[n].duration);return t}function N1(s,t,n,a){const o=n.times,c=n.values,u=[];for(let f=0;f<o.length;f++){const p=f*3;u.push(`${(o[f]*a).toPrecision(Le)}: (${c[p].toPrecision(Le)}, ${c[p+1].toPrecision(Le)}, ${c[p+2].toPrecision(Le)})`)}return`${t} ${s}.timeSamples = {
	${u.join(`,
	`)},
}`}function jw(s,t){const n=s.times,a=s.values,o=[];for(let c=0;c<n.length;c++){const u=c*4;o.push(`${(n[c]*t).toPrecision(Le)}: (${a[u+3].toPrecision(Le)}, ${a[u].toPrecision(Le)}, ${a[u+1].toPrecision(Le)}, ${a[u+2].toPrecision(Le)})`)}return`quatf xformOp:orient.timeSamples = {
	${o.join(`,
	`)},
}`}function Hx(s,t,n,a,o,c){for(let u=0,f=s.children.length;u<f;u++)Gx(s.children[u],t,n,a,o,c)}function Gx(s,t,n,a,o,c){if(s.visible===!1&&c.onlyVisible===!0)return;let u;if(s.isMesh){const f=s.geometry,p=Array.isArray(s.material),d=p?s.material:[s.material];for(let _=0;_<d.length;_++){const v=d[_];v.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),v.uuid in n||(n[v.uuid]=v)}const g=d.map(_=>n[_.uuid]);if(p===!1){const _=`geometries/Geometry_${f.id}.usda`;if(!(_ in o)){const v=Jw(f);o[_]=Vu(zx()+`
`+v.toString())}}u=Qw(s,f,g,a,c)}else s.isCamera?u=rR(s,a,c):u=kx(s,a,c);t.addChild(u),Hx(s,u,n,a,o,c)}function Vx(s,t,n){const a=n.animationTracks.get(t),o=t.pivot!==null;if(!o&&a===void 0){const d=$w(t.matrix);s.addProperty(`matrix4d xformOp:transform = ${d}`),s.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}const c=n.animationFrameRate,u=t.position,f=t.quaternion,p=t.scale;if(a!==void 0&&a.position!==void 0?s.addProperty(N1("xformOp:translate","float3",a.position,c)):s.addProperty(`float3 xformOp:translate = (${u.x.toPrecision(Le)}, ${u.y.toPrecision(Le)}, ${u.z.toPrecision(Le)})`),o){const d=t.pivot;s.addProperty(`float3 xformOp:translate:pivot = (${d.x.toPrecision(Le)}, ${d.y.toPrecision(Le)}, ${d.z.toPrecision(Le)})`)}a!==void 0&&a.quaternion!==void 0?s.addProperty(jw(a.quaternion,c)):s.addProperty(`quatf xformOp:orient = (${f.w.toPrecision(Le)}, ${f.x.toPrecision(Le)}, ${f.y.toPrecision(Le)}, ${f.z.toPrecision(Le)})`),a!==void 0&&a.scale!==void 0?s.addProperty(N1("xformOp:scale","float3",a.scale,c)):s.addProperty(`float3 xformOp:scale = (${p.x.toPrecision(Le)}, ${p.y.toPrecision(Le)}, ${p.z.toPrecision(Le)})`),o?s.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):s.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function kx(s,t,n){const a=Fx(s,t);s.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s);const o=new fi(a,"Xform");return Vx(o,s,n),o}function Qw(s,t,n,a,o){const c=kx(s,a,o);return n.length===1?(c.addMetadata("prepend references",`@./geometries/Geometry_${t.id}.usda@</Geometry>`),c.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),c.addProperty(`rel material:binding = </Materials/Material_${n[0].id}>`)):c.addChild(Wx(t,n)),c}function $w(s){const t=s.elements;return`( ${Su(t,0)}, ${Su(t,4)}, ${Su(t,8)}, ${Su(t,12)} )`}function Su(s,t){return`(${s[t+0]}, ${s[t+1]}, ${s[t+2]}, ${s[t+3]})`}function Jw(s){const t=new fi("Geometry"),n=Wx(s);return t.addChild(n),t}function Wx(s,t=null){const n="Geometry",a=s.attributes,o=a.position.count,c=new fi(n,"Mesh");c.addProperty(`int[] faceVertexCounts = [${tR(s)}]`),c.addProperty(`int[] faceVertexIndices = [${eR(s)}]`),c.addProperty(`normal3f[] normals = [${Wd(a.normal,o)}]`,['interpolation = "vertex"']),c.addProperty(`point3f[] points = [${Wd(a.position,o)}]`);for(let f=0;f<4;f++){const p=f>0?f:"",d=a["uv"+p];d!==void 0&&c.addProperty(`texCoord2f[] primvars:st${p} = [${nR(d)}]`,['interpolation = "vertex"'])}const u=a.color;if(u!==void 0&&c.addProperty(`color3f[] primvars:displayColor = [${Wd(u,o)}]`,['interpolation = "vertex"']),c.addProperty('uniform token subdivisionScheme = "none"'),t!==null){const f=s.groups,p=(s.index!==null?s.index.count:a.position.count)/3;for(let d=0;d<f.length;d++){const g=f[d],_=t[g.materialIndex];if(_===void 0)continue;const v=Math.floor(g.start/3),x=Math.min(v+Math.floor(g.count/3),p),b=[];for(let S=v;S<x;S++)b.push(S);const A=new fi(`subset_${d}`,"GeomSubset");A.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),A.addProperty('uniform token elementType = "face"'),A.addProperty('uniform token familyName = "materialBind"'),A.addProperty(`int[] indices = [${b.join(", ")}]`),A.addProperty(`rel material:binding = </Materials/Material_${_.id}>`),c.addChild(A)}}return c}function tR(s){const t=s.index!==null?s.index.count:s.attributes.position.count;return Array(t/3).fill(3).join(", ")}function eR(s){const t=s.index,n=[];if(t!==null)for(let a=0;a<t.count;a++)n.push(t.getX(a));else{const a=s.attributes.position.count;for(let o=0;o<a;o++)n.push(o)}return n.join(", ")}function Wd(s,t){if(s===void 0)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");const n=[];for(let a=0;a<s.count;a++){const o=s.getX(a),c=s.getY(a),u=s.getZ(a);n.push(`(${o.toPrecision(Le)}, ${c.toPrecision(Le)}, ${u.toPrecision(Le)})`)}return n.join(", ")}function nR(s){const t=[];for(let n=0;n<s.count;n++){const a=s.getX(n),o=s.getY(n);t.push(`(${a.toPrecision(Le)}, ${1-o.toPrecision(Le)})`)}return t.join(", ")}function iR(s,t,n=!1){const a=new fi("Materials");for(const o in s){const c=s[o];a.addChild(aR(c,t,n))}return a}function aR(s,t,n=!1){const a=new fi(`Material_${s.id}`,"Material");function o(u,f,p){const d=u.source.id+"_"+u.flipY;t[d]=u;const g=u.channel>0?"st"+u.channel:"st",_={1e3:"repeat",1001:"clamp",1002:"mirror"},v=u.repeat.clone(),x=u.offset.clone(),b=u.rotation,A=Math.sin(b),S=Math.cos(b);x.y=1-x.y-v.y,n?(x.x=x.x/v.x,x.y=x.y/v.y,x.x+=A/v.x,x.y+=S-1):(x.x+=A*v.x,x.y+=(1-S)*v.y);const y=new fi(`PrimvarReader_${f}`,"Shader");y.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),y.addProperty("float2 inputs:fallback = (0.0, 0.0)"),y.addProperty(`string inputs:varname = "${g}"`),y.addProperty("float2 outputs:result");const N=new fi(`Transform2d_${f}`,"Shader");N.addProperty('uniform token info:id = "UsdTransform2d"'),N.addProperty(`float2 inputs:in.connect = </Materials/Material_${s.id}/PrimvarReader_${f}.outputs:result>`),N.addProperty(`float inputs:rotation = ${(b*(180/Math.PI)).toFixed(Le)}`),N.addProperty(`float2 inputs:scale = ${L1(v)}`),N.addProperty(`float2 inputs:translation = ${L1(x)}`),N.addProperty("float2 outputs:result");const L=new fi(`Texture_${u.id}_${f}`,"Shader");if(L.addProperty('uniform token info:id = "UsdUVTexture"'),L.addProperty(`asset inputs:file = @textures/Texture_${d}.${Bx(u)}@`),L.addProperty(`float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${f}.outputs:result>`),p!==void 0){const w=f==="diffuse"?s.opacity:1;L.addProperty(`float4 inputs:scale = ${sR(p,w)}`)}if(f==="normal"){const w=s.normalScale.x;L.addProperty(`float4 inputs:scale = (${2*w}, ${2*w}, 2, 1)`),L.addProperty(`float4 inputs:bias = (${-w}, ${-w}, -1, 0)`)}return L.addProperty(`token inputs:sourceColorSpace = "${u.colorSpace===Gi?"raw":"sRGB"}"`),L.addProperty(`token inputs:wrapS = "${_[u.wrapS]}"`),L.addProperty(`token inputs:wrapT = "${_[u.wrapT]}"`),L.addProperty("float outputs:r"),L.addProperty("float outputs:g"),L.addProperty("float outputs:b"),L.addProperty("float3 outputs:rgb"),(s.transparent||s.alphaTest>0)&&L.addProperty("float outputs:a"),[y,N,L]}s.side===ji&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",s);const c=new fi("PreviewSurface","Shader");if(c.addProperty('uniform token info:id = "UsdPreviewSurface"'),s.map!==null?(c.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`),s.transparent?c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`):s.alphaTest>0&&(c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`),c.addProperty(`float inputs:opacityThreshold = ${s.alphaTest}`)),o(s.map,"diffuse",s.color).forEach(f=>a.addChild(f))):c.addProperty(`color3f inputs:diffuseColor = ${U1(s.color)}`),s.emissive){const u=s.emissiveIntensity??1;if(s.emissiveMap){c.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`);const f=new se(s.emissive.r*u,s.emissive.g*u,s.emissive.b*u);o(s.emissiveMap,"emissive",f).forEach(d=>a.addChild(d))}else s.emissive.getHex()>0&&c.addProperty(`color3f inputs:emissiveColor = ${U1(s.emissive)}`)}if(s.normalMap&&(c.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`),o(s.normalMap,"normal").forEach(f=>a.addChild(f))),s.aoMap){c.addProperty(`float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`);const u=s.aoMapIntensity??1,f=new se(u,u,u);o(s.aoMap,"occlusion",f).forEach(d=>a.addChild(d))}if(s.roughnessMap){c.addProperty(`float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`);const u=new se(s.roughness,s.roughness,s.roughness);o(s.roughnessMap,"roughness",u).forEach(p=>a.addChild(p))}else c.addProperty(`float inputs:roughness = ${s.roughness??1}`);if(s.metalnessMap){c.addProperty(`float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`);const u=new se(s.metalness,s.metalness,s.metalness);o(s.metalnessMap,"metallic",u).forEach(p=>a.addChild(p))}else c.addProperty(`float inputs:metallic = ${s.metalness??0}`);if(s.alphaMap?(c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`),c.addProperty("float inputs:opacityThreshold = 0.0001"),o(s.alphaMap,"opacity").forEach(f=>a.addChild(f))):c.addProperty(`float inputs:opacity = ${s.opacity}`),s.isMeshPhysicalMaterial){if(s.clearcoatMap!==null){c.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatMap.id}_clearcoat.outputs:r>`);const u=new se(s.clearcoat,s.clearcoat,s.clearcoat);o(s.clearcoatMap,"clearcoat",u).forEach(p=>a.addChild(p))}else c.addProperty(`float inputs:clearcoat = ${s.clearcoat}`);if(s.clearcoatRoughnessMap!==null){c.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);const u=new se(s.clearcoatRoughness,s.clearcoatRoughness,s.clearcoatRoughness);o(s.clearcoatRoughnessMap,"clearcoatRoughness",u).forEach(p=>a.addChild(p))}else c.addProperty(`float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`);c.addProperty(`float inputs:ior = ${s.ior}`)}return c.addProperty("int inputs:useSpecularWorkflow = 0"),c.addProperty("token outputs:surface"),a.addChild(c),a.addProperty(`token outputs:surface.connect = </Materials/Material_${s.id}/PreviewSurface.outputs:surface>`),a}function U1(s){return`(${s.r}, ${s.g}, ${s.b})`}function sR(s,t=1){return`(${s.r}, ${s.g}, ${s.b}, ${t})`}function L1(s){return`(${s.x}, ${s.y})`}function rR(s,t,n){const a=Fx(s,t);s.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s);const o=new fi(a,"Camera");Vx(o,s,n);const c=s.isOrthographicCamera?"orthographic":"perspective";o.addProperty(`token projection = "${c}"`);const u=`(${s.near.toPrecision(Le)}, ${s.far.toPrecision(Le)})`;o.addProperty(`float2 clippingRange = ${u}`);let f;s.isOrthographicCamera?f=((Math.abs(s.left)+Math.abs(s.right))*10).toPrecision(Le):f=s.getFilmWidth().toPrecision(Le),o.addProperty(`float horizontalAperture = ${f}`);let p;if(s.isOrthographicCamera?p=((Math.abs(s.top)+Math.abs(s.bottom))*10).toPrecision(Le):p=s.getFilmHeight().toPrecision(Le),o.addProperty(`float verticalAperture = ${p}`),s.isPerspectiveCamera){const d=s.getFocalLength().toPrecision(Le);o.addProperty(`float focalLength = ${d}`);const g=s.focus.toPrecision(Le);o.addProperty(`float focusDistance = ${g}`)}return o}class oR{texture;canvas;ctx;size;beads=[];stains=[];detached=[];absorb=.5;constructor(t=256){this.size=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.ctx.clearRect(0,0,t,t),this.texture=new Ll(this.canvas),this.texture.colorSpace=Gi,this.texture.wrapS=this.texture.wrapT=ha}get active(){return this.beads.length>0||this.stains.length>0}getDroplets(){return this.beads}addDrop(t,n,a){this.beads.push({u:t,v:n,r:a,life:1})}clear(){this.beads=[],this.stains=[],this.detached.length=0,this.redraw()}splash(t,n=16){for(let a=0;a<n;a++){const o=.1+Math.random()*.8,c=.1+Math.random()*.78,u=(.013+Math.random()*.02)*(1-t.absorb*.35);this.beads.push({u:o,v:c,r:u,life:1})}}update(t,n,a){this.absorb=n.absorb;const o=.02,c=.22+n.absorb*.3;for(const f of this.beads){const p=a(Math.min(1,f.u+o),f.v),d=a(Math.max(0,f.u-o),f.v),g=a(f.u,Math.min(1,f.v+o)),_=a(f.u,Math.max(0,f.v-o)),v=p-d,x=g-_,b=Math.hypot(v,x)||1e-5,A=Math.min(1,b*30),S=t*(.003+A*.075),y=v/b*S,N=x/b*S;f.u-=y,f.v-=N,Math.hypot(y,N)>1e-4&&Math.random()<.5&&this.stains.push({u:f.u,v:f.v,r:f.r*.6,max:f.r*.7,age:0,life:.85+Math.random()*.3}),f.life-=t*c}const u=[];for(const f of this.beads){if(f.life<=0){n.absorb>.4&&this.stains.push({u:f.u,v:f.v,r:f.r*1.2,max:f.r*1.4,age:0,life:.8+Math.random()*.5});continue}if(f.u<=.015||f.u>=.985||f.v<=.015||f.v>=.985){this.detached.push({u:Math.max(0,Math.min(1,f.u)),v:Math.max(0,Math.min(1,f.v)),r:f.r});continue}u.push(f)}this.beads=u;for(const f of this.stains)f.age+=t;this.stains=this.stains.filter(f=>f.age<f.life),this.redraw()}redraw(){const t=this.size,n=this.ctx;n.clearRect(0,0,t,t),n.globalCompositeOperation="lighter";for(const a of this.stains){const o=a.age/a.life,c=(o<.5?1:1-(o-.5)/.5)*.55,u=a.u*t,f=a.v*t,p=Math.max(2,a.r*t),d=n.createRadialGradient(u,f,0,u,f,p);d.addColorStop(0,`rgba(255,0,0,${c})`),d.addColorStop(1,"rgba(255,0,0,0)"),n.fillStyle=d,n.beginPath(),n.arc(u,f,p,0,Math.PI*2),n.fill()}for(const a of this.beads){const o=a.u*t,c=a.v*t,u=Math.max(0,Math.min(1,a.life));if(this.absorb>.05){const g=Math.max(2,a.r*t*(1.4+this.absorb*1.8)),_=u*this.absorb*.5,v=n.createRadialGradient(o,c,0,o,c,g);v.addColorStop(0,`rgba(255,0,0,${_})`),v.addColorStop(1,"rgba(255,0,0,0)"),n.fillStyle=v,n.beginPath(),n.arc(o,c,g,0,Math.PI*2),n.fill()}const f=Math.max(1.5,a.r*t*1.15),p=u*(.16+this.absorb*.24),d=n.createRadialGradient(o,c,0,o,c,f);d.addColorStop(0,`rgba(255,0,0,${p})`),d.addColorStop(.7,`rgba(255,0,0,${p*.6})`),d.addColorStop(1,"rgba(255,0,0,0)"),n.fillStyle=d,n.beginPath(),n.arc(o,c,f,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over",this.texture.needsUpdate=!0}}const lR={AgX:uo,ACES:Wu,Neutral:Xu},bu=5.4,cR=72,P1=new se(16777215),uR=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,hR=s=>1-Math.pow(1-s,3),O1={Maximum:{pr:2,samples:8,segs:96},High:{pr:2,samples:8,segs:72},Balanced:{pr:1.5,samples:4,segs:56},Performance:{pr:1,samples:0,segs:40}},Sl=["Maximum","High","Balanced","Performance"],Eu=96,I1={Studio:{rimA:["#c6d6e4",.5],rimB:["#efe4d6",.45],key:["#ffffff",.9],env:.62,exposure:.8,bg:"#f5f5f5"},Daylight:{rimA:["#dbe8ff",.45],rimB:["#fff3e2",.7],key:["#fffaf3",1.05],env:.88,exposure:.94,bg:"#f6f7f8"},Store:{rimA:["#ffe8cf",.5],rimB:["#fff2e3",.6],key:["#fff0dc",.95],env:.72,exposure:.86,bg:"#f2f0ec"},Night:{rimA:["#93b2ff",.55],rimB:["#3d4b6a",.4],key:["#cdd6ea",.5],env:.34,exposure:.62,bg:"#121420"}},fR=["Studio","Daylight","Store","Night"],dR={uniforms:{tDiffuse:{value:null},uAmount:{value:.08},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uAmount;
    uniform float uTime;
    varying vec2 vUv;
    // sinless hash (Dave Hoskins style): sin-based hashes lose precision at
    // large arguments on some ANGLE backends (Chrome on Windows/Metal) and
    // collapse into marching bands — this one stays white noise everywhere
    float gHash(vec3 p3) {
      p3 = fract(p3 * 0.1031);
      p3 += dot(p3, p3.zyx + 31.32);
      return fract((p3.x + p3.y) * p3.z);
    }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      // coords wrapped to keep magnitudes float32-safe; time is a hash
      // dimension, not an offset, so no pattern travels between frames
      vec2 p = mod(gl_FragCoord.xy, 1024.0);
      float n = gHash(vec3(p, mod(uTime * 120.0, 512.0))) - 0.5;
      c.rgb += n * uAmount;
      gl_FragColor = c;
    }
  `};class pR{constructor(t){this.host=t;const n=t.clientWidth||window.innerWidth,a=t.clientHeight||window.innerHeight;this.renderer=new qA({antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(n,a),this.renderer.toneMapping=uo,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement),this.renderer.xr.enabled=!0,this.scene=new ix,this.scene.background=this.background,this.camera=new wi(38,n/a,.1,200);{const v=new Z(...Pu.camera),x=new Z(...Pu.target);v.sub(x).multiplyScalar(.56).add(x),this.camera.position.copy(v),this.defaultCamPos.copy(v)}const o=new F0(this.renderer),c=o.fromScene(new ow,.04).texture;this.scene.environment=c,o.dispose(),this.rimA=new Pd(16777215,.5),this.rimA.position.set(-4,2.5,-3),this.rimB=new Pd(16777215,.5),this.rimB.position.set(4.5,-1.5,-2.5),this.key=new Pd(16777215,.9),this.key.position.set(1.5,3,4),this.scene.add(this.rimA,this.rimB,this.key),this.surface=new ww;const u=Aw(this.surface.texture);this.holoMaterial=u.material,this.holoUniforms=u.uniforms,this.holoUniforms.uWetMap.value=this.moisture.texture;const f=this.renderer.capabilities.getMaxAnisotropy();this.holoMaterial.roughnessMap&&(this.holoMaterial.roughnessMap.anisotropy=f),this.surface.texture.anisotropy=f,this.clothMesh=new Tn(void 0,this.holoMaterial),this.clothMesh.frustumCulled=!1,this.clothMesh.visible=!1,this.buildCloth(1),this.scene.add(this.clothMesh);const p=new dp(1,32,24),d=new fx({color:16777215,roughness:.02,metalness:0,transmission:.95,ior:1.333,thickness:.18,transparent:!0,clearcoat:1,clearcoatRoughness:.02,specularIntensity:1,envMapIntensity:1.5,depthWrite:!1});this.dropletMesh=new ox(p,d,Eu),this.dropletMesh.frustumCulled=!1,this.dropletMesh.visible=!1,this.dropletMesh.renderOrder=3,this.scene.add(this.dropletMesh);const g=this.renderer.domElement;g.addEventListener("pointerdown",this.onPointerDown),g.addEventListener("pointermove",this.onPointerMove),g.addEventListener("pointerup",this.onPointerUp),g.addEventListener("pointercancel",this.onPointerUp),g.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onWindowBlur),this.controls=new ZA(this.camera,g),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=1.6,this.controls.maxDistance=30,this.controls.target.set(...Pu.target),this.controls.update(),this.setLighting("Studio");const _=new Xn(n,a,{samples:8,type:ni});this.composer=new fw(this.renderer,_),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer.addPass(new dw(this.scene,this.camera)),this.dofPass=new Dw(this.scene,this.camera),this.dofPass.enabled=!1,this.composer.addPass(this.dofPass),this.bloomPass=new mo(new jt(n,a),.18,.85,1),this.composer.addPass(this.bloomPass),this.composer.addPass(new mw),this.grainPass=new Ax(dR),this.composer.addPass(this.grainPass),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(t),this.renderer.setAnimationLoop(this.tick)}host;renderer;scene;camera;controls;composer;bloomPass;dofPass;grainPass;cavityAttr;sim;clothMesh;clothGeometry;holoUniforms;holoMaterial;surface;bumpSource=null;thumbCache=new WeakMap;perfProfile="High";clothSegments=cR;camRaf=0;gestureRaf=0;defaultCamPos=new Z;arSavedScale=1;arSavedPos=new Z;bgBackup=null;onARChange=null;xrSelecting=!1;xrInputSource=null;grabInv=new an;moisture=new oR;wetProps={absorb:.6,bead:.3};dropletMesh;dropDummy=new Fn;dropQuat=new ma;dropUp=new Z(0,1,0);dropNormalMat=new he;surfP=new Z;surfN=new Z;fallingDrops=[];incomingDrops=[];rimA;rimB;key;currentPR=Math.min(window.devicePixelRatio,2);background=new se("#0b0c12");clock=new K2;elapsed=0;raycaster=new Z2;pointerNdc=new jt;dragPlane=new Ga;grabbing=!1;grabPointerId=null;draggingDecal=!1;decalGrabOffset={u:0,v:0};pickingFocus=!1;focusVertex=null;pickReleaseId=null;spaceHeld=!1;focusTmp=new Z;editMode=!1;prevUseImage=!1;hoverCursor="default";resizeObserver;params=null;disposed=!1;onDecalSelect=null;onImagesChanged=null;clothAspect=1;buildCloth(t){this.clothAspect=t;const n=t>=1?bu:bu*t,a=t>=1?bu/t:bu,o=this.clothSegments,c=t>=1?o:Math.max(10,Math.round(o*t)),u=t>=1?Math.max(10,Math.round(o/t)):o;this.sim=new yw(n,a,c,u);const f=new Fl(n,a,c,u),p=new Ni(this.sim.positions,3);p.setUsage(__),f.setAttribute("position",p),this.cavityAttr=new Ni(new Float32Array(this.sim.count),1),this.cavityAttr.setUsage(__),f.setAttribute("aCavity",this.cavityAttr),f.computeVertexNormals();const d=this.clothMesh.geometry;this.clothMesh.geometry=f,this.clothGeometry=f,d&&d.dispose(),this.holoUniforms.uClothSize.value.set(n,a),this.focusVertex=null,this.cancelInteraction()}cancelInteraction(){this.grabPointerId!==null&&this.renderer.domElement.hasPointerCapture(this.grabPointerId)&&this.renderer.domElement.releasePointerCapture(this.grabPointerId),this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls&&(this.controls.enabled=!0)}applyParams(t){this.params=t,t.performance!==this.perfProfile&&this.applyPerfProfile(t.performance);const n=this.holoMaterial;n.color.set(t.material.baseColor),n.roughness=t.material.roughness,n.metalness=t.material.metalness,n.clearcoat=t.material.clearcoat,n.clearcoatRoughness=t.material.coatRoughness,n.sheen=t.material.sheen,n.sheenColor.set(t.material.baseColor).lerp(P1,.5),n.iridescence=0,n.normalScale.set(t.material.bump,t.material.bump),n.normalMap&&n.normalMap.repeat.set(t.material.bumpTiling,t.material.bumpTiling);const a=this.holoUniforms;a.uHoloIntensity.value=0,a.uSparkle.value=0,a.uSpecTint.value=0,a.uSaturation.value=0;const o=t.images??{opacity:1,cornerRadius:0,edit:!1,useImage:!1,scale:0,rotation:0};a.uSurfaceOpacity.value=o.opacity,a.uCornerRound.value=o.cornerRadius;const c=lR[t.render.toneMapping]??uo;this.renderer.toneMapping!==c&&(this.renderer.toneMapping=c),this.bloomPass.strength=t.render.bloom,this.bloomPass.threshold=t.render.bloomThreshold,this.grainPass.uniforms.uAmount.value=t.render.noise,a.uCavityAmount.value=t.render.occlusion?t.render.occlusionStrength:0,this.dofPass.enabled=t.render.dof,this.dofPass.setParams(t.render.dofAperture*.01,t.render.dofBlur,t.render.dofRange*.5),this.editMode=o.edit,this.controls.enableZoom=!this.editMode,this.prevUseImage&&!o.useImage&&this.surface.clothImage&&this.removeClothImage(),this.prevUseImage=o.useImage;const u=this.surface.selected;u&&(u.scale!==o.scale||u.rotation!==o.rotation)&&(u.scale=o.scale,u.rotation=o.rotation,this.surface.redraw())}applyFabric(t){const n=this.holoMaterial.normalMap,a=bw(t);if(a.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.params){const o=this.params.material.bumpTiling;a.repeat.set(o,o)}this.holoMaterial.normalMap=a,this.holoMaterial.needsUpdate=!0,n&&n.dispose()}resetCloth(){this.sim.reset(),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals(),this.moisture.clear(),this.fallingDrops.length=0,this.incomingDrops.length=0}setLive(t){this.params&&(t.stiffness!=null&&(this.params.physics.stiffness=t.stiffness),t.viscosity!=null&&(this.params.physics.viscosity=t.viscosity),t.smoothing!=null&&(this.params.physics.smoothing=t.smoothing));const n=this.holoMaterial;t.bump!=null&&n.normalScale.set(t.bump,t.bump),t.sheen!=null&&(n.sheen=t.sheen),t.roughness!=null&&(n.roughness=t.roughness)}setWet(t){this.wetProps=t}splash(){const t=Math.round(44*(1-this.wetProps.absorb*.45)),n=this.camera.position,a=new Z;this.camera.getWorldDirection(a);const o=new Z(0,1,0),c=new Z().crossVectors(a,o).normalize();for(let u=0;u<t;u++){const f=.08+Math.random()*.84,p=.08+Math.random()*.82,g=(.005+Math.pow(Math.random(),3)*.02)*(1-this.wetProps.absorb*.3),_=n.clone().addScaledVector(o,.7+Math.random()*.6).addScaledVector(c,(Math.random()-.5)*1.4).addScaledVector(a,.1+Math.random()*.3);this.incomingDrops.push({u:f,v:p,r:g,start:_,pos:_.clone(),t:0,dur:.4+Math.random()*.35})}}updateDroplets(t){const n=this.dropletMesh;this.clothMesh.updateWorldMatrix(!0,!1),this.dropNormalMat.getNormalMatrix(this.clothMesh.matrixWorld);const a=Math.min(this.sim.width,this.sim.height)*this.clothMesh.scale.x,o=this.moisture.detached;for(let p=0;p<o.length;p++){const d=o[p];this.sampleSurface(d.u,d.v),this.surfP.applyMatrix4(this.clothMesh.matrixWorld),this.fallingDrops.push({pos:this.surfP.clone(),vel:new Z((Math.random()-.5)*.15,-.25,(Math.random()-.5)*.15),rW:d.r*a,life:1.5})}if(o.length=0,this.fallingDrops.length){const p=4.5*Math.max(.2,this.clothMesh.scale.x);for(const d of this.fallingDrops)d.vel.y-=p*t,d.pos.addScaledVector(d.vel,t),d.life-=t;this.fallingDrops=this.fallingDrops.filter(d=>d.life>0)}if(this.incomingDrops.length){const p=[];for(const d of this.incomingDrops){d.t+=t/d.dur,this.sampleSurface(d.u,d.v),this.surfP.applyMatrix4(this.clothMesh.matrixWorld);const g=Math.min(1,d.t*d.t);d.pos.lerpVectors(d.start,this.surfP,g),d.t>=1?this.moisture.addDrop(d.u,d.v,d.r):p.push(d)}this.incomingDrops=p}const c=this.moisture.getDroplets();if(c.length===0&&this.fallingDrops.length===0&&this.incomingDrops.length===0){n.visible&&(n.visible=!1);return}n.visible=!0;let u=0;const f=Math.min(c.length,Eu);for(let p=0;p<f;p++){const d=c[p];this.sampleSurface(d.u,d.v),this.surfP.applyMatrix4(this.clothMesh.matrixWorld),this.surfN.applyMatrix3(this.dropNormalMat).normalize();const g=d.r*a;this.dropQuat.setFromUnitVectors(this.dropUp,this.surfN);const _=.6+this.wetProps.bead*.35,v=1.05-this.wetProps.bead*.15;this.dropDummy.position.copy(this.surfP).addScaledVector(this.surfN,g*_*.55),this.dropDummy.quaternion.copy(this.dropQuat),this.dropDummy.scale.set(g*v,g*_,g*v),this.dropDummy.updateMatrix(),n.setMatrixAt(u++,this.dropDummy.matrix)}for(let p=0;p<this.fallingDrops.length&&u<Eu;p++){const d=this.fallingDrops[p];this.dropDummy.position.copy(d.pos),this.dropDummy.quaternion.identity(),this.dropDummy.scale.setScalar(d.rW),this.dropDummy.updateMatrix(),n.setMatrixAt(u++,this.dropDummy.matrix)}for(let p=0;p<this.incomingDrops.length&&u<Eu;p++){const d=this.incomingDrops[p];this.dropDummy.position.copy(d.pos),this.dropDummy.quaternion.identity(),this.dropDummy.scale.setScalar(d.r*a),this.dropDummy.updateMatrix(),n.setMatrixAt(u++,this.dropDummy.matrix)}n.count=u,n.instanceMatrix.needsUpdate=!0}sampleSurface(t,n){const a=this.sim.cols,o=this.sim.rows,c=t*(a-1),u=n*(o-1),f=Math.min(a-2,Math.max(0,Math.floor(c))),p=Math.min(o-2,Math.max(0,Math.floor(u))),d=c-f,g=u-p,_=this.sim.positions,v=this.clothGeometry.attributes.normal.array,x=(b,A)=>{const S=(p*a+f)*3+A,y=(p*a+f+1)*3+A,N=((p+1)*a+f)*3+A,L=((p+1)*a+f+1)*3+A;return(b[S]*(1-d)+b[y]*d)*(1-g)+(b[N]*(1-d)+b[L]*d)*g};this.surfP.set(x(_,0),x(_,1),x(_,2)),this.surfN.set(x(v,0),x(v,1),x(v,2)).normalize()}heightAt=(t,n)=>{const a=this.sim.cols,o=this.sim.rows,c=t*(a-1),u=n*(o-1),f=Math.min(a-2,Math.max(0,Math.floor(c))),p=Math.min(o-2,Math.max(0,Math.floor(u))),d=c-f,g=u-p,_=this.sim.positions,v=(y,N)=>_[(N*a+y)*3+1],x=v(f,p),b=v(f+1,p),A=v(f,p+1),S=v(f+1,p+1);return(x*(1-d)+b*d)*(1-g)+(A*(1-d)+S*d)*g};setColor(t){this.holoMaterial.color.set(t),this.holoMaterial.sheenColor.set(t).lerp(P1,.5)}patternTex=null;setPattern(t){this.patternTex&&this.patternTex!==t&&this.patternTex.dispose(),this.patternTex=t,t?(t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=t,this.holoUniforms.uSurfaceOpacity.value=1):this.holoUniforms.uSurfaceMap.value=this.surface.texture}setSlideOffset(t){this.clothMesh.position.x=t}getSlideOffset(){return this.clothMesh.position.x}async startAR(t){const n=navigator.xr;if(!n)return!1;try{if(!await n.isSessionSupported("immersive-ar"))return!1;const a=await n.requestSession("immersive-ar",{optionalFeatures:["dom-overlay","local-floor"],domOverlay:{root:t}});return await this.renderer.xr.setSession(a),this.arSavedPos.copy(this.clothMesh.position),this.arSavedScale=this.clothMesh.scale.x,this.clothMesh.scale.setScalar(.12),this.clothMesh.position.set(0,1.1,-.9),this.bgBackup=this.scene.background,this.scene.background=null,this.onARChange?.(!0),a.addEventListener("end",this.handleAREnd),a.addEventListener("selectstart",this.onXRSelectStart),a.addEventListener("selectend",this.onXRSelectEnd),!0}catch{return!1}}endAR(){this.renderer.xr.getSession()?.end()}handleAREnd=()=>{this.xrSelecting=!1,this.xrInputSource=null,this.grabbing&&(this.grabbing=!1,this.sim.endGrab()),this.scene.background=this.bgBackup,this.clothMesh.scale.setScalar(this.arSavedScale),this.clothMesh.position.copy(this.arSavedPos),this.camera.position.copy(this.defaultCamPos),this.controls.update(),this.onARChange?.(!1)};onXRSelectStart=t=>{this.xrInputSource=t.inputSource,this.xrSelecting=!0};onXRSelectEnd=()=>{this.xrSelecting=!1,this.xrInputSource=null,this.grabbing&&(this.grabbing=!1,this.sim.endGrab())};handleXRGrab(t){if(!this.xrSelecting||!this.xrInputSource||!t){this.grabbing&&!this.xrSelecting&&(this.grabbing=!1,this.sim.endGrab());return}const n=this.renderer.xr.getReferenceSpace();if(!n)return;const a=t.getPose(this.xrInputSource.targetRaySpace,n);if(!a)return;const o=a.transform.position,c=a.transform.orientation,u=new Z(o.x,o.y,o.z),f=new Z(0,0,-1).applyQuaternion(new ma(c.x,c.y,c.z,c.w)).normalize();if(this.raycaster.set(u,f),this.grabbing){const p=new Z;this.raycaster.ray.intersectPlane(this.dragPlane,p)&&this.sim.moveGrab(p.applyMatrix4(this.grabInv))}else{const p=this.raycaster.intersectObject(this.clothMesh,!1);if(p.length===0)return;const d=p[0];this.clothMesh.updateWorldMatrix(!0,!1),this.grabInv.copy(this.clothMesh.matrixWorld).invert();const g=this.params?.physics.grabRadius??.45;if(!this.sim.startGrab(d.point.clone().applyMatrix4(this.grabInv),g))return;this.grabbing=!0,this.dragPlane.setFromNormalAndCoplanarPoint(f.clone().negate(),d.point)}}async exportUSDZ(){const t=this.clothMesh.clone();t.geometry=this.clothGeometry.clone(),t.position.set(0,0,0),t.scale.setScalar(.12);const n=new qw;return n.parseAsync?await n.parseAsync(t):await n.parse(t)}setQuality(t){t!==this.perfProfile&&this.applyPerfProfile(t)}setLighting(t){const n=I1[t]??I1.Studio;this.rimA.color.set(n.rimA[0]),this.rimA.intensity=n.rimA[1],this.rimB.color.set(n.rimB[0]),this.rimB.intensity=n.rimB[1],this.key.color.set(n.key[0]),this.key.intensity=n.key[1],this.scene.environmentIntensity=n.env,this.renderer.toneMappingExposure=n.exposure,this.background.set(n.bg)}getRenderStats(){const t=this.renderer.info;return{calls:t.render.calls,triangles:t.render.triangles,geometries:t.memory.geometries,textures:t.memory.textures,programs:t.programs?.length??0,clothVerts:this.sim.count,segments:this.clothSegments,pixelRatio:this.currentPR}}animateCam(t,n){cancelAnimationFrame(this.camRaf),this.controls.enableDamping=!1;const a=performance.now(),o=c=>{const u=Math.min(1,(c-a)/n);t(u),this.controls.update(),u<1?this.camRaf=requestAnimationFrame(o):this.controls.enableDamping=!0};this.camRaf=requestAnimationFrame(o)}zoomTo(t,n=650){const a=this.controls.target,o=this.camera.position.clone(),c=a.clone().add(this.defaultCamPos.clone().sub(a).multiplyScalar(t));this.animateCam(u=>this.camera.position.lerpVectors(o,c,uR(u)),n)}spin(t=1500){const n=this.controls.target.clone(),a=this.camera.position.clone(),o=a.x-n.x,c=a.z-n.z;this.animateCam(u=>{const f=Math.sin(u*Math.PI)*.6,p=Math.sin(f),d=Math.cos(f);this.camera.position.set(n.x+o*d-c*p,a.y,n.z+o*p+c*d)},t)}demoStretch(){cancelAnimationFrame(this.gestureRaf);const t=this.sim,n=Math.floor(t.cols/2),o=Math.floor(t.rows/2)*t.cols+n,c=new Z(t.positions[o*3],t.positions[o*3+1],t.positions[o*3+2]),u=Math.max(t.width,t.height)*.55;if(!t.startGrab(c,u))return;const f=this.camera.position.clone().sub(c).normalize().multiplyScalar(1.1);f.y-=.4;const p=performance.now(),d=520,g=360,_=v=>{const x=v-p;x<d?(t.moveGrab(c.clone().add(f.clone().multiplyScalar(hR(x/d)))),this.gestureRaf=requestAnimationFrame(_)):x<d+g?this.gestureRaf=requestAnimationFrame(_):t.endGrab()};this.gestureRaf=requestAnimationFrame(_)}poke(){this.sim.poke(1)}addDecal(t){const n=this.surface.addDecal(t);this.onDecalSelect?.(n.scale,n.rotation),this.onImagesChanged?.()}setClothImage(t){const n=t.naturalWidth||t.width||1,a=t.naturalHeight||t.height||1,o=Math.min(3,Math.max(1/3,n/a));this.surface.setClothImage(t),this.surface.setAspect(o)&&this.rebindSurfaceTexture(),this.buildCloth(o),this.onImagesChanged?.()}clearImages(){this.surface.clear(),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}removeClothImage(){this.surface.setClothImage(null),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}get hasClothImage(){return this.surface.clothImage!==null}reveal(){this.clothMesh.visible=!0}thumbnailOf(t){let n=this.thumbCache.get(t);if(n)return n;const a=t.naturalWidth||t.width||1,o=t.naturalHeight||t.height||1,c=96/Math.max(a,o),u=document.createElement("canvas");return u.width=Math.max(1,Math.round(a*c)),u.height=Math.max(1,Math.round(o*c)),u.getContext("2d").drawImage(t,0,0,u.width,u.height),n=u.toDataURL("image/png"),this.thumbCache.set(t,n),n}getClothThumbnail(){return this.surface.clothImage?this.thumbnailOf(this.surface.clothImage):null}getDecalThumbnails(){return this.surface.decals.map(t=>this.thumbnailOf(t.img))}removeDecal(t){const n=this.surface.decals[t];n&&(this.surface.decals.splice(t,1),this.surface.selected===n&&(this.surface.selected=null),this.surface.redraw(),this.onImagesChanged?.())}snapshotImages(){return{clothImage:this.surface.clothImage,decals:this.surface.decals.map(t=>({...t}))}}restoreImages(t){this.surface.clothImage=t.clothImage,this.surface.decals=t.decals.map(a=>({...a})),this.surface.selected=null;let n=1;if(t.clothImage){const a=t.clothImage.naturalWidth||t.clothImage.width||1,o=t.clothImage.naturalHeight||t.clothImage.height||1;n=Math.min(3,Math.max(1/3,a/o))}this.surface.setAspect(n)&&this.rebindSurfaceTexture(),n!==this.clothAspect&&this.buildCloth(n),this.onImagesChanged?.()}applyPerfProfile(t){this.perfProfile=t;const n=window.devicePixelRatio,a=O1[t]??O1.Maximum;this.currentPR=Math.min(n,a.pr);const o=a.samples,c=a.segs,u=this.host.clientWidth||window.innerWidth,f=this.host.clientHeight||window.innerHeight;this.renderer.setPixelRatio(this.currentPR),this.renderer.setSize(u,f),this.composer.setPixelRatio(this.currentPR),this.composer.renderTarget1.samples=o,this.composer.renderTarget2.samples=o,this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer.setSize(u,f),c!==this.clothSegments&&(this.clothSegments=c,this.buildCloth(this.clothAspect))}setBumpMap(t){const n=this.holoMaterial.normalMap;let a=null;if(t){a=Ew(t),a.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=this.params?.material.bumpTiling??3;a.repeat.set(o,o)}this.bumpSource=t,this.holoMaterial.normalMap=a,!!n!=!!a&&(this.holoMaterial.needsUpdate=!0),n&&n.dispose(),this.onImagesChanged?.()}get hasBumpMap(){return this.bumpSource!==null}getBumpThumbnail(){return this.bumpSource?this.thumbnailOf(this.bumpSource):null}rebindSurfaceTexture(){this.surface.texture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=this.surface.texture}exportPNG(t=!1){const n=this.host.clientWidth||window.innerWidth,a=this.host.clientHeight||window.innerHeight,o=this.currentPR,c=Math.min(4,Math.max(2,3200/Math.max(n,a)));t&&(this.scene.background=null,this.renderer.setClearColor(0,0)),this.renderer.setPixelRatio(c),this.composer.setPixelRatio(c),this.renderer.setSize(n,a),this.composer.setSize(n,a),this.composer.render();const u=this.renderer.domElement.toDataURL("image/png");t&&(this.scene.background=this.background,this.renderer.setClearColor(0,1)),this.renderer.setPixelRatio(o),this.composer.setPixelRatio(o),this.renderer.setSize(n,a),this.composer.setSize(n,a);const f=document.createElement("a");f.href=u;const p=t?"holocloth-nobg":"holocloth";f.download=`${p}-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,f.click()}updatePointer(t){const n=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1)}raycastCloth(){this.raycaster.setFromCamera(this.pointerNdc,this.camera),this.clothGeometry.computeBoundingSphere();const t=this.raycaster.intersectObject(this.clothMesh,!1);return t.length>0?t[0]:null}startPickFocus(){this.pickingFocus=!0,this.renderer.domElement.style.cursor="crosshair"}clearPickFocus(){this.focusVertex=null}onKeyDown=t=>{if(t.code!=="Space"||t.repeat)return;const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)||(t.preventDefault(),this.spaceHeld=!0,this.controls.mouseButtons.LEFT=Va.PAN,!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&(this.renderer.domElement.style.cursor="grab"))};onKeyUp=t=>{t.code==="Space"&&(this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Va.ROTATE)};onWindowBlur=()=>{this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Va.ROTATE};onPointerDown=t=>{if(t.button!==0||this.grabbing||this.draggingDecal)return;if(this.updatePointer(t),this.pickingFocus){this.pickingFocus=!1,this.renderer.domElement.style.cursor="default";const c=this.raycastCloth();if(c){const u=this.sim.positions;let f=0,p=1/0;for(let d=0;d<this.sim.count;d++){const g=u[d*3]-c.point.x,_=u[d*3+1]-c.point.y,v=u[d*3+2]-c.point.z,x=g*g+_*_+v*v;x<p&&(p=x,f=d)}this.focusVertex=f}this.pickReleaseId=t.pointerId,this.controls.enabled=!1;return}if(this.spaceHeld)return;const n=this.raycastCloth();if(!n)return;if(this.editMode){if(!n.uv)return;const c=this.surface.hitTest(n.uv.x,n.uv.y);if(!c)return;this.surface.selected=c,this.draggingDecal=!0,this.decalGrabOffset.u=c.u-n.uv.x,this.decalGrabOffset.v=c.v-n.uv.y,this.grabPointerId=t.pointerId,this.controls.enabled=!1,this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="move",this.onDecalSelect?.(c.scale,c.rotation);return}const a=this.params?.physics.grabRadius??.45;if(this.clothMesh.updateWorldMatrix(!0,!1),this.grabInv.copy(this.clothMesh.matrixWorld).invert(),!this.sim.startGrab(n.point.clone().applyMatrix4(this.grabInv),a))return;this.grabbing=!0,this.grabPointerId=t.pointerId,this.controls.enabled=!1;const o=new Z;this.camera.getWorldDirection(o),this.dragPlane.setFromNormalAndCoplanarPoint(o,n.point),this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="grabbing"};onPointerMove=t=>{if((this.grabbing||this.draggingDecal)&&t.pointerId!==this.grabPointerId)return;if(this.updatePointer(t),this.draggingDecal){const o=this.raycastCloth(),c=this.surface.selected;o?.uv&&c&&(c.u=o.uv.x+this.decalGrabOffset.u,c.v=o.uv.y+this.decalGrabOffset.v,this.surface.redraw());return}if(!this.grabbing)return;this.raycaster.setFromCamera(this.pointerNdc,this.camera);const a=new Z;this.raycaster.ray.intersectPlane(this.dragPlane,a)&&this.sim.moveGrab(a.applyMatrix4(this.grabInv))};onPointerUp=t=>{if(t.pointerId===this.pickReleaseId){this.pickReleaseId=null,this.controls.enabled=!0;return}!(this.grabbing||this.draggingDecal)||t.pointerId!==this.grabPointerId||(this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls.enabled=!0,this.renderer.domElement.hasPointerCapture(t.pointerId)&&this.renderer.domElement.releasePointerCapture(t.pointerId),this.renderer.domElement.style.cursor=this.hoverCursor)};onWheel=t=>{if(!this.editMode)return;const n=this.surface.selected;n&&(t.preventDefault(),t.stopImmediatePropagation(),n.scale=tx.clamp(n.scale*Math.exp(-t.deltaY*.0012),.02,2.5),this.surface.redraw(),this.onDecalSelect?.(n.scale,n.rotation))};onResize(){const t=this.host.clientWidth||window.innerWidth,n=this.host.clientHeight||window.innerHeight;t===0||n===0||(this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.composer.setSize(t,n))}tick=(t,n)=>{if(this.disposed)return;const a=this.clock.getDelta();if(this.elapsed+=a,this.grainPass.uniforms.uTime.value=this.elapsed%61.7,this.renderer.xr.isPresenting&&this.handleXRGrab(n),this.params){this.sim.step(a,this.params.physics),this.clothGeometry.attributes.position.needsUpdate=!0;const o=this.clothGeometry.attributes.normal.array;this.sim.computeGridNormals(o),this.sim.smoothNormals(o),this.clothGeometry.attributes.normal.needsUpdate=!0}if(this.moisture.active&&this.moisture.update(a,this.wetProps,this.heightAt),this.updateDroplets(a),this.params?.render.occlusion&&(this.sim.computeCavity(this.clothGeometry.attributes.normal.array,this.cavityAttr.array),this.cavityAttr.needsUpdate=!0),this.params?.render.dof){let o;if(this.focusVertex!==null&&this.focusVertex<this.sim.count){const c=this.sim.positions,u=this.focusVertex*3;this.focusTmp.set(c[u],c[u+1],c[u+2]),o=this.camera.position.distanceTo(this.focusTmp)}else o=this.camera.position.distanceTo(this.controls.target);this.dofPass.setFocus(o)}if(this.renderer.xr.isPresenting){this.renderer.render(this.scene,this.camera);return}if(!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&!this.spaceHeld&&this.perfProfile!=="Low"){const o=this.raycastCloth();let c="default";o&&(c=this.editMode?o.uv&&this.surface.hitTest(o.uv.x,o.uv.y)?"move":"default":"grab"),c!==this.hoverCursor&&(this.hoverCursor=c,this.renderer.domElement.style.cursor=c)}this.controls.update(),this.composer.render()};dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.controls.dispose(),this.dofPass.dispose(),this.composer.dispose(),this.clothGeometry.dispose(),this.holoMaterial.dispose(),this.surface.dispose(),this.scene.traverse(n=>{const a=n;a.geometry&&a.geometry!==this.clothGeometry&&a.geometry.dispose()}),this.renderer.dispose(),t.remove()}}const Di=["Nulu","Luon","Luxtreme","Everlux","Warpstreme"],on={Nulu:{label:"Nulu",blurb:"Buttery-soft, lightweight knit. Matte, next-to-nothing drape.",material:{finish:"Matte",baseColor:"#c9c4bf",roughness:.88,metalness:0,clearcoat:0,coatRoughness:.9,sheen:.28,bump:.6,bumpTiling:6},physics:{viscosity:.5,stiffness:.45,iterations:12,smoothing:.12,grabRadius:.3},weave:{type:"knit",threads:96,strength:1,seed:11},wet:{absorb:.85,bead:.08}},Luon:{label:"Luon",blurb:"The original: cottony-soft, structured, medium-weight knit.",material:{finish:"Matte",baseColor:"#2c313a",roughness:.86,metalness:0,clearcoat:0,coatRoughness:.75,sheen:.2,bump:.95,bumpTiling:5},physics:{viscosity:.42,stiffness:.7,iterations:12,smoothing:.07,grabRadius:.27},weave:{type:"knit",threads:72,strength:1.35,seed:22},wet:{absorb:.8,bead:.12}},Luxtreme:{label:"Luxtreme",blurb:"Slick, cool-to-touch performance knit. Satin sheen, lively.",material:{finish:"Matte",baseColor:"#33435f",roughness:.72,metalness:0,clearcoat:.02,coatRoughness:.6,sheen:.38,bump:.3,bumpTiling:8},physics:{viscosity:.24,stiffness:.82,iterations:13,smoothing:.03,grabRadius:.27},weave:{type:"knit",threads:120,strength:.7,seed:33},wet:{absorb:.45,bead:.5}},Everlux:{label:"Everlux",blurb:"Thicker double-knit. Springy shape retention, textured hand.",material:{finish:"Matte",baseColor:"#454851",roughness:.82,metalness:0,clearcoat:0,coatRoughness:.6,sheen:.32,bump:1.15,bumpTiling:4},physics:{viscosity:.34,stiffness:.9,iterations:14,smoothing:.09,grabRadius:.27},weave:{type:"knit",threads:56,strength:1.6,seed:44},wet:{absorb:.7,bead:.2}},Warpstreme:{label:"Warpstreme",blurb:"Finely woven, structured & wrinkle-resistant. Holds its shape.",material:{finish:"Matte",baseColor:"#21252c",roughness:.84,metalness:0,clearcoat:0,coatRoughness:.6,sheen:.2,bump:.5,bumpTiling:7},physics:{viscosity:.3,stiffness:1,iterations:14,smoothing:.15,grabRadius:.26},weave:{type:"woven",threads:110,strength:.9,seed:55},wet:{absorb:.12,bead:.9}}},Tu="Nulu",Xd=["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it coats the fibers and kills sweat-wicking.","Hang or lay flat to dry; avoid the dryer to protect the stretch.","Keep away from Velcro, zippers and denim to avoid snags and pilling."],Wn={Nulu:{meaning:'"Naked" lu — the softest, lightest fabric lululemon makes. The "nu" is for nude / next-to-nothing.',feel:"Buttery-soft and weightless with a matte finish and gentle four-way stretch. No compression — it feels like a second skin.",bestFor:["Yoga","Pilates","Barre","Stretching","Lounging","Travel & errands"],notFor:"High-sweat or high-impact workouts — it offers no compression and can pill under friction.",care:["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it clogs the fibers.","Hang or lay flat to dry; never tumble dry.","Prone to pilling — keep away from Velcro, zippers and denim."],products:[{name:'Align High-Rise Pant 25"',price:"$98",url:"https://shop.lululemon.com/c/women-align-leggings/n1esuuzudsq"},{name:"Align Tank Top",price:"$68",url:"https://shop.lululemon.com/c/women-align-clothes/n14uwkzesuu"},{name:"Groove Nulu Flared Pant",price:"$128",url:"https://shop.lululemon.com/c/women-align-pants/n1esuuzqd1q"}],affinity:{activity:{yoga:3,run:-2,studio:0,everyday:1},sweat:{low:3,med:0,high:-2},feel:{soft:3,smooth:0,structured:-1,cushioned:0},care:{easy:-1,ok:2}}},Luon:{meaning:'The original lululemon fabric — the knit that launched the brand. Simply "lu" + "on".',feel:"Cottony-soft but more structured than Nulu: medium-weight, lightly holding, with a matte look.",bestFor:["Yoga","Barre","Dance","Low–medium impact","Layering","Casual"],notFor:"Running or spin — the cottony knit can pill under repeated friction.",care:Xd,products:[{name:"Wunder Under Luon High-Rise Tight",price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:"Classic Luon layering tops",price:"from $68",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:2,run:-1,studio:1,everyday:1},sweat:{low:2,med:1,high:-1},feel:{soft:2,smooth:0,structured:0,cushioned:1},care:{easy:0,ok:1}}},Luxtreme:{meaning:`"Luxe" + "extreme" — lululemon's first performance fabric, built for runners back in 2008.`,feel:"Slick and cool-to-touch, compressive and supportive with a subtle sheen. Sweat-wicking and quick-drying.",bestFor:["Running","HIIT","Cycling / spin","High-impact training"],notFor:"Gentle lounging if you dislike compression — it's a firmer, hold-you-in feel.",care:Xd,products:[{name:'Wunder Under Full-On Luxtreme Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:'Wunder Under Luxtreme Tight 28"',price:"$98",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:-1,run:3,studio:2,everyday:0},sweat:{low:-1,med:1,high:3},feel:{soft:0,smooth:3,structured:1,cushioned:0},care:{easy:1,ok:0}}},Everlux:{meaning:'"Ever" (endure) + "lux" — a 2017 studio fabric made for sweaty, mid-to-high-intensity workouts.',feel:"Fast-drying and cool against the skin, with a cushioned double-knit body and springy shape retention.",bestFor:["Studio & HIIT","Spin","Cardio classes","Hot workouts","Strength training"],notFor:"Nothing much — it's the most versatile; just heavier than Nulu for pure lounging.",care:Xd,products:[{name:'Wunder Train High-Rise Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:'Wunder Train Tight with Pockets 28"',price:"$128",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:"Wunder Train No Line High-Rise Tight",price:"$108",url:"https://shop.lululemon.com/c/women-everlux-leggings/n1n918zudsq"}],affinity:{activity:{yoga:0,run:2,studio:3,everyday:1},sweat:{low:0,med:3,high:2},feel:{soft:0,smooth:1,structured:0,cushioned:3},care:{easy:2,ok:0}}},Warpstreme:{meaning:'A finely warp-woven fabric (woven, not knit) — "warp" weaving + "streme" for stream / extreme.',feel:"Smooth, structured and wrinkle-resistant with a cool hand. Holds its shape from morning to night.",bestFor:["Travel","Commute","Work / office","Everyday","Versatile wear"],notFor:"Sweaty high-intensity training — it's built for structure and polish, not compression.",care:["Machine wash cold with like colors.","Skip fabric softener.","Hang dry — avoid high heat.","Wrinkle-resistant, so it bounces back without ironing."],products:[{name:"ABC Classic-Fit 5 Pocket Pant",price:"$138",url:"https://shop.lululemon.com/c/men-warpstreme-pants/n13u4nzu9dn"},{name:"ABC Trouser (formerly Commission)",price:"$138",url:"https://shop.lululemon.com/c/men-abc-trousers/n146jrzsddx"},{name:"ABC Jogger",price:"$128",url:"https://shop.lululemon.com/c/men-abc-pants/n1sddxzu9dn"}],affinity:{activity:{yoga:0,run:-1,studio:0,everyday:3},sweat:{low:2,med:1,high:-2},feel:{soft:0,smooth:1,structured:3,cushioned:0},care:{easy:3,ok:0}}}};function mR(s,t){return t.map(n=>{const a=Wn[n].affinity;let o=0;return s.activity&&(o+=a.activity[s.activity]),s.sweat&&(o+=a.sweat[s.sweat]),s.feel&&(o+=a.feel[s.feel]),s.care&&(o+=a.care[s.care]),{name:n,score:o}}).sort((n,a)=>a.score-n.score)}const Xx={step:"start",answers:{},fabric:null,colorHex:null,colorName:null,askedColor:!1},Ol=[{name:"Black",hex:"#1a1a1a"},{name:"True Navy",hex:"#26324a"},{name:"Heathered Grey",hex:"#9a9793"},{name:"Dark Olive",hex:"#3f4531"},{name:"Red Merlot",hex:"#7d1f2b"},{name:"Pink Mist",hex:"#e3b0bf"},{name:"Blue Nile",hex:"#3b5d7a"},{name:"White Opal",hex:"#e8e5df"}],F1={Nulu:"81% nylon, 19% Lycra elastane",Luon:"a nylon / Lycra blend (sometimes with polyester)",Luxtreme:"69% nylon, 31% Lycra elastane — the highest elastane of the bunch",Everlux:"a high-elastane nylon / Lycra double-knit",Warpstreme:"100% polyester, finely warp-woven"},ye=s=>s[Math.floor(Math.random()*s.length)],Kt=(s,t)=>t.some(n=>s.includes(n)),Cn={activity:[{label:"Yoga & stretching",value:"yoga"},{label:"Running & cardio",value:"running"},{label:"Studio & HIIT",value:"studio"},{label:"Everyday & travel",value:"everyday"}],sweat:[{label:"Barely",value:"barely sweat"},{label:"A moderate amount",value:"moderate sweat"},{label:"A lot",value:"sweat a lot"}],feel:[{label:"Softest & barely-there",value:"softest feel"},{label:"Smooth & supportive",value:"smooth supportive"},{label:"Cushioned",value:"cushioned feel"},{label:"Structured",value:"structured feel"}],care:[{label:"Low-maintenance",value:"low maintenance"},{label:"Happy to hand-wash",value:"hand wash"}],explore:[{label:"Find my match",value:"find my match"},{label:"Tell me about the fabrics",value:"tell me about the fabrics"},{label:"Compare two",value:"compare fabrics"}],demos:[{label:"Show its stretch",value:"show its stretch"},{label:"See the drape",value:"see the drape"},{label:"Zoom in",value:"zoom in"}]},W0=()=>[...Ol.map(s=>({label:s.name,value:s.name})),{label:"Surprise me",value:"surprise me"}];function gR(s){return s.includes("nulu")||s.includes("align")?"Nulu":s.includes("luon")?"Luon":s.includes("luxtreme")?"Luxtreme":s.includes("everlux")||s.includes("wunder train")?"Everlux":s.includes("warpstreme")||s.includes("abc")?"Warpstreme":null}function vR(s){return Kt(s,["yoga","stretch","flow","pilates","barre","lounge","relax","restor"])?"yoga":Kt(s,["run","jog","sprint","cardio","marathon","5k","10k"])?"run":Kt(s,["studio","hiit","train","gym","spin","cycle","cycling","strength","lift","weight","class","crossfit","bootcamp","tennis","dance","workout"])?"studio":Kt(s,["everyday","travel","work","office","commute","casual","errand","walk","daily","hike","hiking","flight","plane","desk","lounging around"])?"everyday":null}function _R(s){return Kt(s,["barely","not much","don't sweat","dry workout","a little","light sweat","low sweat"])?"low":Kt(s,["moderate","medium","average","a bit"])?"med":Kt(s,["a lot","lots","heavy sweat","sweaty","drench","soak","buckets","sweat a lot","hot ","hot yoga","sauna"])?"high":null}function xR(s){return Kt(s,["softest","buttery","barely-there","barely there","naked","second skin","gentle","butter","soft feel"])?"soft":Kt(s,["smooth","slick","sleek","silky","compress","support","sculpt","hold-you","hold you","firm"])?"smooth":Kt(s,["cushion","thick","substantial","plush","cozy","hefty","more body"])?"cushioned":Kt(s,["structured","crisp","polished","put together","put-together","stiff","tailored","holds shape"])?"structured":null}function yR(s){return Kt(s,["low maintenance","low-maintenance","easy care","durable","wrinkle","no fuss","toss","throw it in","lazy"])?"easy":Kt(s,["hand wash","hand-wash","delicate","hang dry","baby it","careful","don't mind washing"])?"ok":null}function MR(s){const t=[[["black","noir"],"Black"],[["navy","dark blue"],"True Navy"],[["grey","gray","heather"],"Heathered Grey"],[["olive","green","army","khaki"],"Dark Olive"],[["red","merlot","wine","maroon","burgundy","berry"],"Red Merlot"],[["pink","rose","blush","mauve"],"Pink Mist"],[["blue","nile","cobalt","teal"],"Blue Nile"],[["white","cream","opal","ivory"],"White Opal"]];for(const[n,a]of t)if(Kt(s,n))return Ol.find(o=>o.name===a);return null}function SR(s){return Kt(s,["reset","re-drape","redrape","settle it","drop it","let it fall","fresh drape"])?"reset":Kt(s,["nudge","poke","wobble","jiggle","shake it","bounce"])?"nudge":Kt(s,["zoom in","closer","close up","close-up","get close","look closer"])?"closeup":Kt(s,["zoom out","back up","pull back","farther","further","see it all","zoom back","wider","whole thing"])?"zoomout":Kt(s,["spin","rotate","turn it","turn around","another angle","different angle"])?"spin":null}function B1(s){return Kt(s,["durab","stretch","elastic","recover","hold up","holds up","last","four-way","4-way","compression","compress","squat","support","pull it"])?"stretch":Kt(s,["soft","buttery","how does it feel","feel like","next to skin","against my skin","touch","plush","cozy"])?"soft":Kt(s,["drape","flow","how it moves","how does it move","movement","fall","swish","fluid","floaty"])?"drape":Kt(s,["sheen","shine","shiny","gloss","matte","luster","finish","how it looks","how does it look"])?"sheen":Kt(s,["weave","woven","knit","texture","construction","grain","stitch","mesh","up close"])?"weave":Kt(s,["breath","airflow","ventil","cool ","cooling","hot workout","overheat","wick","quick dry","quick-dry"])?"breath":Kt(s,["warm","warmth","cold","winter","chilly","heat retention"])?"warmth":Kt(s,["see-through","see through","sheer","squat proof","squat-proof","opaque","opacity","transparent"])?"opacity":Kt(s,["pill","pilling"])?"pill":Kt(s,["made of","material","composition","fabric content","nylon","polyester","lycra","spandex","elastane","what is it made"])?"material":Kt(s,["size","sizing","fit ","true to size","runs small","runs big","tight or","sizing up"])?"fit":Kt(s,["sustainab","recycled","eco","environment","planet"])?"sustain":Kt(s,["smell","odor","odour","stink","anti-odor","anti-odour"])?"odor":null}function bR(s){return!Kt(s,["most","best","softest","warmest","coolest","lightest","cheapest","priciest","stretchiest","which","top ","strongest"])&&!Kt(s,["won't pill","wont pill","no pill"])?null:Kt(s,["softest","most soft","most comfortable","comfiest"])?"softest":Kt(s,["warmest","warm","coziest","thickest","winter"])?"warmest":Kt(s,["coolest","cool-to-touch","cool to touch"])?"coolest":Kt(s,["breathable","most breathable","breathability"])?"breathable":Kt(s,["durable","most durable","longest","toughest","won't pill","wont pill","no pill","strongest","last longest"])?"durable":Kt(s,["supportive","most support","most compress","compressive","hold you in"])?"supportive":Kt(s,["stretchiest","most stretch","most flexible","stretchy"])?"stretchiest":Kt(s,["lightest","most lightweight","thinnest"])?"lightest":Kt(s,["versatile","do everything","all-rounder","all rounder","most versatile"])?"versatile":Kt(s,["cheapest","least expensive","most affordable","lowest price"])?"cheapest":Kt(s,["priciest","most expensive","highest price"])?"priciest":Kt(s,["best"])?"best":null}function z1(s){const t=s.match(/\$(\d+)/);return t?parseInt(t[1],10):9999}function ER(s,t){const n=Wn[s];return[{text:`${t??ye([`I'd put you in ${s}.`,`Here's your match: ${s}.`,`${s} is the one for you.`])} ${n.meaning}`},{text:`${n.feel} It's a favorite for ${n.bestFor.slice(0,3).join(", ").toLowerCase()} — I've loaded it onto the cloth, so drag it to feel how it moves.`},{text:ye(["Want to see it in a color?","Shall I dye it? Just name a color.","Pick a color and I'll apply it live:"]),swatch:on[s].material.baseColor,chips:W0()}]}function H1(s,t){const n=Wn[s].products[0];return[{text:ye([`${t} on ${s} — beautiful.`,`Love it — ${t} suits ${s}.`,`${t} it is.`])},{text:`Here's the piece I'd start with in ${s}:`,product:n},{text:ye(["Want me to show you its stretch, drape, or how it feels?","Say the word and I'll stretch it, zoom in, or turn it in the light."]),chips:[...Cn.demos,{label:"Start over",value:"start over"}]}]}function TR(s){return s?{text:`Caring for ${s}: ${Wn[s].care.join(" ")}`}:{text:"Tell me which fabric and I'll give you its care routine — or I can find your match first.",chips:[...Cn.explore]}}function AR(){return{text:`Here are the five, in a nutshell:
${Di.map(t=>`• ${t} — ${on[t].blurb.toLowerCase()}`).join(`
`)}
Ask me about any of them, or tell me what you'll do in it and I'll match you.`,chips:[...Cn.activity]}}const qd=s=>[s.activity,s.sweat,s.feel,s.care].filter(Boolean).length;function G1(s){return s.activity?s.feel?s.sweat?{key:"care",msg:{text:ye(["Last one — how do you like to care for your gear?","How much laundry fuss are you up for?"]),chips:[...Cn.care]}}:{key:"sweat",msg:{text:ye(["How much do you sweat when you do it?","And how sweaty do you get?"]),chips:[...Cn.sweat]}}:{key:"feel",msg:{text:ye(["What feel do you love against your skin?","How do you want it to feel?"]),chips:[...Cn.feel]}}:{key:"activity",msg:{text:ye(["What will you mostly do in it?","What's it for — what will you be doing?"]),chips:[...Cn.activity]}}}function Yd(s,t,n){const a=mR(s.answers,Di)[0].name;s.fabric=a,s.step="recommended",s.askedColor=!0,t.selectFabric=a,t.reply.push(...ER(a,n))}function V1(s,t){const n=t&&on[t].weave.type==="woven";switch(s){case"stretch":return{demo:["closeup","stretch"],text:t?`${ye(["Watch it stretch and snap back.","I'll pull it so you can see the recovery."])} ${{Nulu:"Lovely give, but it's a soft knit — best for low-impact; it can pill under heavy friction.",Luon:"Reliable four-way stretch with more body than Nulu.",Luxtreme:"Compressive four-way stretch with quick recovery — it holds shape through hard training.",Everlux:"Springy recovery from the double-knit and high elastane — supportive rep after rep.",Warpstreme:"It's woven, so it gives but stays structured — it won't bag out."}[t]}`:"Good athletic fabric gives, then returns to shape — pick a fabric and I'll show you."};case"soft":return{demo:["closeup","nudge"],text:t?`${ye(["Getting in close.","Here it is up close."])} ${{Nulu:"Nulu is the buttery, next-to-nothing one.",Luon:"Luon is cottony-soft with more structure.",Luxtreme:"Luxtreme is cool and slick rather than fuzzy.",Everlux:"Everlux is cushioned and substantial.",Warpstreme:"Warpstreme is smooth and crisp, not plush."}[t]}`:"Softest of all is Nulu — want to feel it?"};case"drape":return{demo:["zoomout","drape"],text:t?`${ye(["Watch how it falls.","Here it is in motion."])} ${{Nulu:"Fluid and flowy — lightweight drape.",Luon:"A little more body as it moves.",Luxtreme:"Slick and lively, settles sleek.",Everlux:"Heavier drape with spring.",Warpstreme:"Structured — it keeps its shape."}[t]}`:"Every fabric falls differently — pick one and I'll show you."};case"sheen":return{demo:["spin"],text:t?`${ye(["Turning it through the light.","Catching the light across it."])} ${{Nulu:"Matte and soft, barely any shine.",Luon:"Matte, cottony surface.",Luxtreme:"A subtle performance sheen.",Everlux:"Mostly matte, dry finish.",Warpstreme:"Matte with a fine woven glint."}[t]}`:"Luxtreme has the most sheen; Nulu the least."};case"weave":return{demo:["closeup"],text:t?`${ye(["Here's the construction up close.","Zooming into the surface."])} ${n?`See the tight woven grid — that's what makes ${t} structured and wrinkle-resistant.`:`You can see the knit loops — that interlock gives ${t} its stretch and softness.`}`:"Four of the five are knits; Warpstreme is woven. Want to see one up close?"};case"breath":return{demo:["spin"],text:t?`On breathability: ${{Nulu:"Nulu is light and airy but has no compression — great for gentle heat, less so for heavy sweat.",Luon:"Luon breathes reasonably for low-medium efforts.",Luxtreme:"Luxtreme is sweat-wicking, breathable and quick-drying — built for working hard.",Everlux:"Everlux was made for sweaty studio sessions — it wicks and dries fast while staying cool.",Warpstreme:"Warpstreme is a woven travel fabric — breathable and structured, though not a high-sweat performer."}[t]}`:"For heavy sweat, Luxtreme and Everlux breathe and wick best. Want details on one?"};case"warmth":return{text:t?`On warmth: ${{Nulu:"Nulu is the lightest and coolest — not a warm layer.",Luon:"Luon has a little more body but is still light.",Luxtreme:"Luxtreme is cool-to-touch — it runs cool, not warm.",Everlux:"Everlux is the thickest, so it holds a bit more warmth.",Warpstreme:"Warpstreme is structured and mid-weight — fine for cooler-weather everyday wear."}[t]}`:"Everlux is the warmest (thickest); Nulu the coolest and lightest."};case"opacity":return{demo:["closeup","stretch"],text:t?`On coverage: ${{Nulu:"Nulu is soft and non-compressive, so in very light colors it can go a touch sheer when stretched — dark colors are safest.",Luon:"Luon is medium-weight and generally opaque.",Luxtreme:"Luxtreme is compressive and reliably squat-proof.",Everlux:"Everlux is thick and fully opaque — very squat-proof.",Warpstreme:"Warpstreme is a woven — fully opaque."}[t]}`:"Everlux and Luxtreme are the most squat-proof; Nulu can be sheer in pale colors."};case"pill":return{text:t?`On pilling: ${{Nulu:"Nulu is the softest but most prone to pilling — keep it away from Velcro and rough surfaces.",Luon:"Luon can pill under heavy friction like running or spin.",Luxtreme:"Luxtreme is highly friction-resistant and won't pill.",Everlux:"Everlux is durable and resists pilling well.",Warpstreme:"Warpstreme is woven and very resistant to pilling."}[t]}`:"Luxtreme and Warpstreme resist pilling best; Nulu pills most easily."};case"material":return{text:t?`${t} is ${F1[t]}. ${Wn[t].feel}`:`Composition varies: ${Di.map(a=>`${a} is ${F1[a]}`).join("; ")}.`};case"fit":return{text:t?`On fit: ${{Nulu:"Nulu is a relaxed, second-skin feel with no compression.",Luon:"Luon is a supportive-but-comfortable everyday fit.",Luxtreme:"Luxtreme is snug and compressive — hold-you-in.",Everlux:"Everlux is supportive with a substantial, sculpting fit.",Warpstreme:"Warpstreme is a structured, tailored fit."}[t]} For exact sizing, lululemon.com or a store is your best bet.`:"Fit depends on the fabric — compressive ones like Luxtreme run snug, Nulu is relaxed. For sizing, check lululemon.com."};case"sustain":return{text:"I'm focused on how the fabrics feel and perform — for lululemon's materials and sustainability details, their site is the source of truth. I can tell you what each fabric is made of, though — just ask."};case"odor":return{text:t?`Most of these are synthetic performance fabrics, so wash them promptly and skip fabric softener (it traps odor). ${t==="Nulu"?"Nulu especially likes a gentle, prompt wash.":""}`:"Wash promptly and skip fabric softener to keep them fresh — softener coats the fibers and traps smell."}}}function wR(s,t,n){const a=(o,c,u)=>{t.fabric=o,t.step="open",n.selectFabric=o,u&&(n.demo=u),n.reply.push({text:c},{text:ye(["Want to see it in a color, or shall I show it off?","I can dye it or demonstrate it — your call."]),swatch:on[o].material.baseColor,chips:[...Cn.demos,{label:"See colors",value:"see colors"}]})};switch(s){case"softest":return a("Nulu","Softest by a mile is Nulu — buttery and barely-there. Here it is.",["closeup","nudge"]);case"warmest":return a("Everlux","The warmest is Everlux — it's the thickest, a cushioned double-knit that holds a little heat.",["closeup"]);case"coolest":return a("Luxtreme","Coolest-to-touch is Luxtreme — slick and quick-drying, it runs cool.",["spin"]);case"breathable":return a("Luxtreme","Most breathable for hard efforts is Luxtreme — sweat-wicking and quick-drying (Everlux is a close second for studio heat).",["spin"]);case"durable":return a("Warpstreme","Most durable is Warpstreme — a tightly woven fabric that holds its shape and resists pilling. Luxtreme is the toughest of the knits.",["closeup","stretch"]);case"supportive":return a("Luxtreme","Most supportive is Luxtreme — compressive, hold-you-in, and quick to recover.",["closeup","stretch"]);case"stretchiest":return a("Luxtreme","Stretchiest is Luxtreme — it has the highest elastane, so it's the most flexible.",["closeup","stretch"]);case"lightest":return a("Nulu","Lightest is Nulu — a next-to-nothing feel.",["closeup"]);case"versatile":return a("Everlux","Most versatile is Everlux — comfy enough for low-impact, tough enough for hard training.",["drape"]);case"cheapest":{let o=Di[0],c=99999;for(const u of Di){const f=z1(Wn[u].products[0].price);f<c&&(c=f,o=u)}t.fabric=o,n.selectFabric=o,t.step="open",n.reply.push({text:`The most affordable starting point is ${o}.`},{text:"Here's the piece:",product:Wn[o].products[0]});return}case"priciest":{let o=Di[0],c=-1;for(const u of Di){const f=z1(Wn[u].products[0].price);f>c&&(c=f,o=u)}t.fabric=o,n.selectFabric=o,t.step="open",n.reply.push({text:`The most premium of these is ${o}.`},{text:"Here's the piece:",product:Wn[o].products[0]});return}default:n.reply.push({text:ye([`"Best" really depends on what you're doing — what's the plan?`,"They're each best at something — what will you be doing in it?"]),chips:[...Cn.activity]}),t.step="guiding";return}}function RR(s,t){const n=Di.filter(u=>s.includes(u.toLowerCase())),[a,o]=n.length>=2?[n[0],n[1]]:[t.fabric??"Nulu",n[0]&&n[0]!==t.fabric?n[0]:"Luxtreme"],c=u=>`${u}: ${on[u].blurb.toLowerCase()} Best for ${Wn[u].bestFor.slice(0,2).join(" & ").toLowerCase()}.`;return{text:`${a} vs ${o} —
${c(a)}
${c(o)}
Want me to load either one so you can feel it?`}}function CR(){return[{text:ye(["Hi — I'm your FABLAB expert. Ask me anything about lululemon's fabrics and I'll show you on the cloth: how they feel, stretch, drape and hold up.","Welcome — I know these fabrics inside out. Ask me anything, and I'll demonstrate right on the cloth. What can I help you figure out?"])},{text:"You can tell me what you'll be doing and I'll find your match — or just ask a question.",chips:[...Cn.activity]}]}function DR(s,t){const n={...s,answers:{...s.answers}},a=t.toLowerCase().trim(),o={ctx:n,reply:[]};if(Kt(a,["start over","restart","reset chat","begin again","start again"]))return o.ctx={...Xx},o.reply=[{text:ye(["Fresh start — let's go.","Clean slate."])},...CR()],o;if(Kt(a,["thank","thanks","ty ","appreciate","cheers"]))return o.reply=[{text:ye(["Anytime — happy moving.","My pleasure.","You got it."])}],o;if(a.length<=6&&Kt(a,["hi","hey","hello","yo","sup","hola"]))return o.reply=[{text:ye(["Hey! Ask me anything about the fabrics, or tell me what you'll be doing in it.","Hi there — what are you shopping for?"]),chips:[...Cn.explore]}],o;if(Kt(a,["help","what can you","how does this work","what do you do","options"]))return o.reply=[{text:"I can find your ideal fabric, explain what each one means, how it feels, stretches, drapes and holds up, compare them, recolor the cloth, and point you to the right product. I'll show you on the fabric as we go. What are you after?",chips:[...Cn.explore]}],o;const c=vR(a),u=_R(a),f=xR(a),p=yR(a);c&&(n.answers.activity=c),u&&(n.answers.sweat=u),f&&(n.answers.feel=f),p&&(n.answers.care=p);const d=!!(c||u||f||p),g=SR(a);if(g)return o.demo=[g],o.reply=[{text:{reset:ye(["Resetting to a clean drape.","Dropped it fresh."]),nudge:ye(["Giving it a nudge.","There it goes."]),closeup:ye(["Moving in close.","Here's a closer look."]),zoomout:ye(["Pulling back for the full piece.","Zooming out."]),spin:ye(["Turning it through the light.","Sweeping it round."])}[g]}],o;const _=Di.filter(w=>a.includes(w.toLowerCase())).length>=2;if(Kt(a,["compare","difference","versus"," vs "," vs","vs."])||_)return o.reply=[RR(a,n)],o;const x=gR(a),b=B1(a);if(x){if(n.fabric=x,n.step="open",o.selectFabric=x,b){const w=V1(b,x);w.demo&&(o.demo=w.demo),o.reply=[{text:`${x} — ${Wn[x].meaning}`},{text:w.text}]}else o.reply=[{text:`${x} — ${Wn[x].meaning}`},{text:`${Wn[x].feel} Best for ${Wn[x].bestFor.slice(0,3).join(", ").toLowerCase()}. Drag it to feel the drape.`},{text:"Want to see it in a color, or have me show its stretch or drape?",swatch:on[x].material.baseColor,chips:[...Cn.demos,{label:"See colors",value:"see colors"}]}];return o}if(Kt(a,["see color","see colors","show color","colours","what colors","color options"]))return o.reply=[{text:n.fabric?`Here are colors for ${n.fabric} — pick one:`:"Pick a color and I'll apply it:",swatch:n.fabric?on[n.fabric].material.baseColor:void 0,chips:W0()}],n.step=n.fabric?"recommended":n.step,o;const A=MR(a);if(A&&n.fabric)return n.colorHex=A.hex,n.colorName=A.name,o.setColor=A.hex,!n.colorName||n.step,o.reply=H1(n.fabric,A.name),n.step="open",o;if(Kt(a,["surprise","random color","you pick","any color"])&&n.fabric){const w=ye(Ol);return n.colorHex=w.hex,n.colorName=w.name,o.setColor=w.hex,o.reply=[{text:`Let's go with ${w.name}.`},...H1(n.fabric,w.name).slice(1)],n.step="open",o}const S=bR(a);if(S)return wR(S,n,o),o;if(Kt(a,["water","wet","moist","rain","splash","sweat","wick","absorb","soak","droplet","waterproof","water resistant","water-resistant","repel"]))return o.demo=["splash"],o.reply=[{text:PR(n.fabric)}],(n.step==="open"||n.step==="recommended")&&o.reply.push({text:"Want to see anything else?",chips:[...Cn.demos]}),o;const y=B1(a);if(y){const w=V1(y,n.fabric);return w.demo&&(o.demo=w.demo),o.reply=[{text:w.text}],(n.step==="open"||n.step==="recommended")&&o.reply.push({text:"Anything else you'd like to see?",chips:[...Cn.demos]}),o}if(Kt(a,["wash","care","clean it","dry it","shrink","launder","machine wash"]))return o.reply=[TR(n.fabric)],o;if(Kt(a,["what is","what does","mean","why called","what's a","tell me about"])&&(x||n.fabric)){const w=x??n.fabric;return o.reply=[{text:`${w} — ${Wn[w].meaning}`},{text:Wn[w].feel}],o}if(Kt(a,["price","cost","how much","buy","shop","purchase","link","where can i"]))return n.fabric?o.reply=[{text:`Here's the piece I'd recommend in ${n.fabric}:`,product:Wn[n.fabric].products[0]}]:o.reply=[{text:"Let's land on a fabric first — what will you be doing in it?",chips:[...Cn.activity]}],o;if(Kt(a,["list","the fabrics","all the fabric","what are the","options","overview","which fabrics"]))return o.reply=[AR()],o;const N=Kt(a,["recommend","suggest","what should i","help me choose","help me pick","which one","what do you recommend","i need","looking for","find my match","match me","pick for me"]);if(N&&qd(n.answers)>=1)return Yd(n,o,ye(["Based on that, ","Got it — "])),o;if(qd(n.answers)>=2)return Yd(n,o),o;if(N){const w=G1(n.answers);return o.reply=[{text:ye(["Happy to — quick question first.","Let's find it — one thing first."])},w.msg],n.step="guiding",o}if(d){const w=c?NR(c):f?LR(f):u?UR(u):OR(p);return n.step="guiding",qd(n.answers)>=2?(o.reply=[{text:w}],Yd(n,o),o):(o.reply=[{text:w},G1(n.answers).msg],o)}if(Kt(a,["return","refund","ship","delivery","order","track","store near","coupon","discount","sale"]))return o.reply=[{text:"That's one for lululemon.com or a store — I'm the fabric side of things. But I can tell you which fabric fits your workout and how it feels. Want to start there?",chips:[...Cn.explore]}],o;if(Kt(a,["yes","yeah","yep","sure","ok","okay","please do","go for it"])&&n.fabric&&n.step!=="open")return o.reply=[{text:`Here are colors for ${n.fabric}:`,swatch:on[n.fabric].material.baseColor,chips:W0()}],o;const L=n.fabric;return o.reply=[{text:ye([L?`We're looking at ${L} right now — I can show its stretch, drape or feel, dye it a new color, or compare it with another. What sounds good?`:"I'm your fabric expert — I can find your match, explain any fabric, show how it feels and moves, and point you to the right product. Where should we start?",L?`Ask me how ${L} feels, how it holds up, or what it's made of — or say a color and I'll dye it. What are you curious about?`:"Tell me what you'll be doing in it and I'll match you — or ask about any fabric by name.","Happy to dig in — I know how each fabric feels, stretches, drapes and lasts, and which suits which workout. What would help most?"]),chips:L?[...Cn.demos,{label:"Compare",value:"compare fabrics"}]:[...Cn.explore]}],o}function NR(s){return{yoga:ye(["Yoga — soft and unrestrictive is the goal.","Flow work rewards a soft, stretchy fabric."]),run:ye(["A runner — lightweight and sweat-wicking matter most.","Running: breathability and stay-put support."]),studio:ye(["Studio sweat — versatile and quick-drying wins.","HIIT and classes ask for grip, wick and recovery."]),everyday:ye(["Everyday and travel — comfort that looks pulled-together.","All-day wear — structure and easy care count."])}[s]}function UR(s){return{low:ye(["Cool and dry — the softer fabrics open up.","Barely a bead, noted."]),med:ye(["A moderate glow — lots of options.","Middle of the road, got it."]),high:ye(["A proper sweat — we'll lean into wicking, quick-dry fabrics.","You run hot — good to know."])}[s]}function LR(s){return{soft:ye(["Buttery and barely-there — my favorite.","Second-skin soft, noted."]),smooth:ye(["Smooth and supported — got it.","Sleek and compressive."]),cushioned:ye(["Something with body and cushion.","A bit more heft, noted."]),structured:ye(["Structured and polished.","Crisp and put-together, love it."])}[s]}function PR(s){const t=ye(["Let me pour some water on it.","Splashing it now — watch what happens.","Here comes the water."]);return s?`${t} ${{Nulu:"Nulu drinks it in — see it darken and spread. Soft knits absorb, so they hold moisture rather than shedding it.",Luon:"Luon soaks it up and darkens — cottony and comfy, but it absorbs sweat rather than repelling it.",Luxtreme:"Luxtreme does a bit of both — some beads roll off while the rest wicks and spreads to dry fast. That's the sweat-wicking trick.",Everlux:"Everlux wicks it away — it darkens as it pulls moisture across the surface to dry quickly. Built for sweaty sessions.",Warpstreme:"Warpstreme repels it — watch the beads form and roll straight off the folds. The tight woven face sheds water."}[s]}`:`${t} Woven fabrics bead and roll water off; soft knits soak it in and wick.`}function OR(s){return{easy:ye(["And low-fuss laundry — durability it is.","Toss-and-go care, understood."]),ok:ye(["Happy to hand-wash — keeps the delicate ones in play.","A little TLC is fine, noted."])}[s]}const IR={background:"#f5f5f5",exposure:.8,environment:.62,bloom:0,bloomThreshold:1.4,noise:.04,toneMapping:"Neutral",occlusion:!0,occlusionStrength:.7,dof:!1,dofAperture:40,dofBlur:.04,dofRange:.3};let qx="Balanced";function Au(s,t){const n=on[s];return{performance:qx,physics:{...n.physics},material:{fabric:s,...n.material,baseColor:t??n.material.baseColor},images:{edit:!1,useImage:!1,scale:.35,rotation:0,opacity:1,cornerRadius:0},render:{...IR}}}const Js=s=>Math.max(0,Math.min(1,s)),FR=[{key:"stretch",label:"Stretch"},{key:"weight",label:"Weight"},{key:"thickness",label:"Thickness"},{key:"structure",label:"Structure"},{key:"sheen",label:"Sheen"},{key:"matte",label:"Matte"}];function BR(s){return{stiffness:1-s.stretch*.65,viscosity:.15+s.weight*.45,smoothing:.02+s.structure*.26,bump:.2+s.thickness*1.5,sheen:s.sheen*.6,roughness:.3+s.matte*.65}}function k1(s){const t=on[s];return{stretch:Js((1-t.physics.stiffness)/.65),weight:Js((t.physics.viscosity-.15)/.45),thickness:Js((t.material.bump-.2)/1.5),structure:Js((t.physics.smoothing-.02)/.26),sheen:Js(t.material.sheen/.6),matte:Js((t.material.roughness-.3)/.65)}}const zR=s=>({absorb:.1+s*.85,bead:.1+(1-s)*.85}),W1=s=>{const t=on[s].wet;return Js(t.absorb/(t.absorb+t.bead+.001))},X1=8.5,HR=300,GR=s=>s*s*s,VR=s=>1-Math.pow(1-s,3);function kR(){const s=Se.useRef(null),t=Se.useRef(null),[n,a]=Se.useState(Tu),[o,c]=Se.useState(null),[u,f]=Se.useState(!1),[p,d]=Se.useState(!1),[g,_]=Se.useState(!1),[v,x]=Se.useState(null),[b,A]=Se.useState(!1),[S,y]=Se.useState("Balanced");Se.useEffect(()=>{qx=S,t.current?.setQuality(S)},[S]);const[N,L]=Se.useState("Studio");Se.useEffect(()=>{t.current?.setLighting(N)},[N]);const[w,F]=Se.useState(!1),[D,O]=Se.useState(!1),[T,U]=Se.useState(()=>W1(Tu));Se.useEffect(()=>{U(W1(n))},[n]),Se.useEffect(()=>{t.current?.setWet(zR(T))},[T]);const[k,G]=Se.useState(()=>k1(Tu));Se.useEffect(()=>{G(k1(n))},[n]),Se.useEffect(()=>{t.current?.setLive(BR(k))},[k]);const[q,ct]=Se.useState("none"),[ft,j]=Se.useState(!1),B=Se.useRef(!1),z=Se.useRef(null),[Q,ut]=Se.useState([]),[Et,P]=Se.useState(""),K=Se.useRef({...Xx}),St=Se.useRef(0),At=Se.useRef(null);Se.useEffect(()=>{if(!s.current)return;const mt=new pR(s.current);return t.current=mt,mt.onDecalSelect=()=>{},mt.onImagesChanged=()=>{},mt.onARChange=$t=>{B.current=$t,j($t)},mt.setSlideOffset(0),mt.applyParams(Au(n)),mt.applyFabric(on[n].weave),mt.setWet(on[n].wet),mt.reveal(),()=>{mt.dispose(),t.current=null}},[]);const wt=Se.useRef(!0),tt=Se.useRef(Tu),xt=Se.useRef(0),yt=Se.useRef(null);Se.useEffect(()=>{const mt=t.current;if(!mt)return;const $t=tt.current;if(tt.current=n,wt.current){wt.current=!1,mt.setSlideOffset(0),mt.applyParams(Au(n)),mt.applyFabric(on[n].weave),mt.setWet(on[n].wet);return}if(B.current){mt.applyParams(Au(n)),mt.applyFabric(on[n].weave),mt.setWet(on[n].wet),mt.resetCloth();return}if($t===n)return;c(null),yt.current?.(),yt.current=null;const fe=Di.indexOf(n)>Di.indexOf($t)?-X1:X1,ve=-fe,Ge=(X,Te,me,I)=>{const E=performance.now();let $=0;const st=ht=>{const Rt=Math.min(1,(ht-E)/HR),Nt=X+(Te-X)*me(Rt);xt.current=Nt,t.current?.setSlideOffset(Nt),Rt<1?$=requestAnimationFrame(st):I?.()};$=requestAnimationFrame(st),yt.current=()=>cancelAnimationFrame($)};return Ge(xt.current,fe,GR,()=>{mt.applyParams(Au(n)),mt.applyFabric(on[n].weave),mt.setWet(on[n].wet),mt.resetCloth(),xt.current=ve,mt.setSlideOffset(ve),Ge(ve,0,VR,()=>{yt.current=null})}),()=>{yt.current?.()}},[n]),Se.useEffect(()=>{o!=null&&t.current?.setColor(o)},[o]),Se.useEffect(()=>{K.current={...K.current,fabric:n}},[n]),Se.useEffect(()=>{At.current?.scrollTo({top:At.current.scrollHeight,behavior:"smooth"})},[Q]),Se.useEffect(()=>{let mt=0,$t=0,ue=performance.now(),fe=0;const ve=X=>{if($t++,fe+=X-ue,ue=X,fe>=500){const Te=performance.memory,me=t.current?.getRenderStats();x({fps:Math.round($t*1e3/fe),frameMs:+(fe/$t).toFixed(1),heapUsed:Te?Math.round(Te.usedJSHeapSize/1048576):null,heapLimit:Te?Math.round(Te.jsHeapSizeLimit/1048576):null,calls:me?.calls??0,tris:me?.triangles??0,geometries:me?.geometries??0,textures:me?.textures??0,verts:me?.clothVerts??0,segments:me?.segments??0,pr:me?.pixelRatio??1}),$t=0,fe=0}mt=requestAnimationFrame(ve)};mt=requestAnimationFrame(ve);const Ge=X=>{const Te=X.target;Te&&(Te.tagName==="INPUT"||Te.tagName==="TEXTAREA")||X.key==="`"&&A(me=>!me)};return window.addEventListener("keydown",Ge),()=>{cancelAnimationFrame(mt),window.removeEventListener("keydown",Ge)}},[]),Se.useEffect(()=>{let mt=!0;return(async()=>{const $t=navigator.xr;try{if($t&&await $t.isSessionSupported?.("immersive-ar")){mt&&ct("webxr");return}}catch{}const ue=navigator.userAgent,fe=/iphone|ipad|ipod/i.test(ue)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;mt&&ct(fe?"quicklook":"none")})(),()=>{mt=!1}},[]);const zt=async()=>{const mt=t.current;if(mt){if(q==="webxr")B.current=!0,j(!0),await mt.startAR(z.current)||(B.current=!1,j(!1));else if(q==="quicklook")try{const $t=await mt.exportUSDZ(),ue=new Blob([$t],{type:"model/vnd.usdz+zip"}),fe=URL.createObjectURL(ue),ve=document.createElement("a");ve.setAttribute("rel","ar"),ve.href=fe,ve.appendChild(document.createElement("img")),document.body.appendChild(ve),ve.click(),window.setTimeout(()=>{ve.remove(),URL.revokeObjectURL(fe)},15e3)}catch($t){console.error("[AR] USDZ export failed",$t)}}},ae=mt=>ut($t=>[...$t,{id:St.current++,...mt}]),Qt=mt=>{const $t=t.current;$t&&mt.forEach(ue=>{ue==="reset"?$t.resetCloth():ue==="nudge"?$t.poke():ue==="stretch"?$t.demoStretch():ue==="closeup"?$t.zoomTo(.6):ue==="zoomout"?$t.zoomTo(1.12):ue==="spin"?$t.spin():ue==="drape"?($t.resetCloth(),window.setTimeout(()=>t.current?.poke(),140)):ue==="splash"&&$t.splash()})},ze=(mt,$t)=>{const ue=mt.trim();if(!ue)return;ae({role:"user",text:$t??ue});const fe=DR(K.current,ue);K.current=fe.ctx,fe.selectFabric&&a(fe.selectFabric),Object.prototype.hasOwnProperty.call(fe,"setColor")&&c(fe.setColor??null),fe.demo&&Qt(fe.demo),fe.reply.forEach((ve,Ge)=>setTimeout(()=>ae({role:"bot",...ve}),260*Ge+220)),P("")},le=Q[Q.length-1],ge=[...Q].reverse().find(mt=>mt.role==="bot"),we=o??on[n].material.baseColor,be=mt=>Ol.find($t=>$t.name===mt)?.hex;return bt.jsxs(bt.Fragment,{children:[bt.jsx("div",{id:"canvas-host",ref:s}),bt.jsxs("div",{className:"ui",children:[bt.jsxs("div",{className:"topbar",children:[bt.jsxs("div",{className:"brand",children:[bt.jsx("span",{className:"k",children:"lululemon"}),bt.jsx("span",{className:"t",children:"FABLAB"})]}),q!=="none"&&bt.jsx("button",{className:"pill accent",onClick:zt,children:"View in AR"})]}),bt.jsxs("div",{className:"menu",children:[bt.jsx("button",{className:"gear",onClick:()=>F(mt=>!mt),"aria-label":"Settings",children:w?"✕":"☰"}),w&&bt.jsxs("div",{className:"menu-stack",children:[bt.jsxs("div",{className:"panel",children:[bt.jsxs("button",{className:"panel-head",onClick:()=>O(mt=>!mt),children:[bt.jsx("span",{children:"Effectors"}),bt.jsx("span",{className:"chev",children:D?"–":"+"})]}),D&&bt.jsxs("div",{className:"panel-body",children:[bt.jsxs("div",{className:"grp",children:[bt.jsx("h6",{children:"Fabric"}),FR.map(mt=>bt.jsxs("label",{className:"srow",children:[bt.jsx("span",{children:mt.label}),bt.jsx("input",{type:"range",min:0,max:1,step:.01,value:k[mt.key],onChange:$t=>G(ue=>({...ue,[mt.key]:+$t.target.value}))})]},mt.key))]}),bt.jsxs("div",{className:"grp",children:[bt.jsx("h6",{children:"Water"}),bt.jsxs("label",{className:"srow",children:[bt.jsx("span",{children:"Absorbency"}),bt.jsx("input",{type:"range",min:0,max:1,step:.01,value:T,onChange:mt=>U(+mt.target.value)})]}),bt.jsx("button",{className:"menu-action",onClick:()=>t.current?.splash(),children:"Splash water"})]}),bt.jsxs("div",{className:"grp",children:[bt.jsx("h6",{children:"Lighting"}),bt.jsx("div",{className:"seg",children:fR.map(mt=>bt.jsx("button",{className:mt===N?"on":"",onClick:()=>L(mt),children:mt},mt))})]})]})]}),bt.jsx("div",{className:"panel",children:bt.jsxs("div",{className:"panel-body",children:[bt.jsxs("div",{className:"grp",children:[bt.jsxs("h6",{children:["Quality — ",S]}),bt.jsx("input",{className:"qslider",type:"range",min:0,max:Sl.length-1,step:1,value:Sl.length-1-Sl.indexOf(S),onChange:mt=>y(Sl[Sl.length-1-+mt.target.value])})]}),bt.jsxs("div",{className:"grp",children:[bt.jsxs("button",{className:"grp-head",onClick:()=>A(mt=>!mt),children:[bt.jsx("h6",{children:"Performance metrics"}),bt.jsx("span",{className:"chev",children:b?"–":"+"})]}),b&&v&&bt.jsxs("div",{className:"perf",children:[bt.jsxs("div",{className:"prow",children:[bt.jsx("span",{children:"fps"}),bt.jsx("b",{style:{color:v.fps>=50?"#1f9d55":v.fps>=30?"#b8860b":"#d1202f"},children:v.fps})]}),bt.jsxs("div",{className:"prow",children:[bt.jsx("span",{children:"frame"}),bt.jsxs("b",{children:[v.frameMs," ms"]})]}),bt.jsxs("div",{className:"prow",children:[bt.jsx("span",{children:"js heap"}),bt.jsx("b",{children:v.heapUsed!=null?`${v.heapUsed} / ${v.heapLimit} MB`:"n/a*"})]}),bt.jsxs("div",{className:"prow",children:[bt.jsx("span",{children:"draw calls"}),bt.jsx("b",{children:v.calls})]}),bt.jsxs("div",{className:"prow",children:[bt.jsx("span",{children:"triangles"}),bt.jsxs("b",{children:[(v.tris/1e3).toFixed(0),"k"]})]}),bt.jsxs("div",{className:"prow",children:[bt.jsx("span",{children:"cloth verts"}),bt.jsxs("b",{children:[v.verts.toLocaleString()," · ",v.segments,"²"]})]}),bt.jsxs("div",{className:"prow",children:[bt.jsx("span",{children:"pixel ratio"}),bt.jsxs("b",{children:[v.pr,"×"]})]}),v.heapUsed==null&&bt.jsx("div",{className:"pnote",children:"*JS heap is Chrome-only"})]})]})]})})]})]}),bt.jsxs("div",{className:"dock",children:[bt.jsx("div",{className:"dockgroup convo"+(u?" open":""),children:u?bt.jsxs(bt.Fragment,{children:[bt.jsx("div",{className:"stream",ref:At,children:Q.slice(-8).map(mt=>bt.jsxs("div",{className:"msg "+mt.role,children:[bt.jsx("span",{children:mt.text}),mt.product&&bt.jsxs("a",{className:"prodcard",href:mt.product.url,target:"_blank",rel:"noreferrer",children:[bt.jsx("span",{className:"pn",children:mt.product.name}),bt.jsxs("span",{className:"pp",children:[mt.product.price," →"]})]})]},mt.id))}),le?.chips&&le.role==="bot"&&bt.jsx("div",{className:"chips",children:le.chips.map(mt=>bt.jsxs("button",{className:"chip2",onClick:()=>ze(mt.value,mt.label),children:[be(mt.value)&&bt.jsx("span",{className:"cdot",style:{background:be(mt.value)}}),mt.label]},mt.value))}),bt.jsxs("form",{className:"ask",onSubmit:mt=>{mt.preventDefault(),ze(Et)},children:[bt.jsx("button",{type:"button",className:"ask-collapse",onClick:()=>f(!1),"aria-label":"Collapse chat",children:"▾"}),bt.jsx("input",{value:Et,onChange:mt=>P(mt.target.value),placeholder:"Say anything…","aria-label":"Message the FABLAB guide",autoFocus:!0}),bt.jsx("button",{className:"askbtn",type:"submit","aria-label":"Send",children:"→"})]})]}):bt.jsxs("button",{className:"collapsed chat",onClick:()=>f(!0),children:[bt.jsx("span",{className:"c-ic",children:"✳"}),bt.jsx("span",{className:"c-txt",children:ge?ge.text:"Ask the guide anything"}),bt.jsx("span",{className:"c-caret",children:"▸"})]})}),bt.jsx("div",{className:"dockgroup"+(p?" open":""),children:p?bt.jsxs("div",{className:"swatch-row",children:[bt.jsx("button",{className:"dock-label",onClick:()=>d(!1),children:"Color ▾"}),bt.jsx("button",{className:"sw"+(o==null?" sel":""),style:{background:on[n].material.baseColor},title:"Original color","aria-label":"Original color",onClick:()=>c(null)}),Ol.map(mt=>bt.jsx("button",{className:"sw"+(o===mt.hex?" sel":""),style:{background:mt.hex},title:mt.name,"aria-label":mt.name,onClick:()=>c(mt.hex)},mt.hex))]}):bt.jsxs("button",{className:"collapsed",onClick:()=>d(!0),children:[bt.jsx("span",{className:"c-lab",children:"Color"}),bt.jsx("span",{className:"c-dot",style:{background:we}}),bt.jsx("span",{className:"c-caret",children:"▸"})]})}),bt.jsx("div",{className:"dockgroup"+(g?" open":""),children:g?bt.jsxs("div",{className:"rail",children:[bt.jsx("button",{className:"dock-label",onClick:()=>_(!1),children:"Fabric ▾"}),Di.map(mt=>bt.jsx("button",{className:mt===n?"sel":"",onClick:()=>{a(mt),_(!1)},children:on[mt].label},mt))]}):bt.jsxs("button",{className:"collapsed",onClick:()=>_(!0),children:[bt.jsx("span",{className:"c-lab",children:"Fabric"}),bt.jsx("span",{className:"c-val",children:on[n].label}),bt.jsx("span",{className:"c-caret",children:"▸"})]})})]})]}),bt.jsxs("div",{id:"ar-overlay",ref:z,style:{display:ft?"flex":"none"},children:[bt.jsxs("div",{className:"ar-top",children:[bt.jsx("span",{className:"ar-brand",children:"FABLAB · AR"}),bt.jsx("button",{className:"ar-exit",onClick:()=>t.current?.endAR(),children:"Exit AR"})]}),bt.jsx("div",{className:"ar-hint",children:"Touch and drag the fabric to shape it"}),bt.jsxs("div",{className:"ar-bottom",children:[bt.jsx("div",{className:"ar-rail",children:Di.map(mt=>bt.jsxs("button",{className:mt===n?"sel":"",onClick:()=>a(mt),children:[bt.jsx("span",{className:"dot",style:{background:on[mt].material.baseColor}}),on[mt].label]},mt))}),bt.jsx("button",{className:"ar-poke",onClick:()=>t.current?.splash(),children:"Splash"}),bt.jsx("button",{className:"ar-poke",onClick:()=>t.current?.poke(),children:"Nudge it"})]})]})]})}aS.createRoot(document.getElementById("root")).render(bt.jsx(kR,{}));
