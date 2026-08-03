(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ph={exports:{}},$o={};var T_;function By(){if(T_)return $o;T_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return $o.Fragment=t,$o.jsx=i,$o.jsxs=i,$o}var A_;function zy(){return A_||(A_=1,Ph.exports=By()),Ph.exports}var Fe=zy(),Oh={exports:{}},tl={},Ih={exports:{}},Fh={};var R_;function Hy(){return R_||(R_=1,(function(r){function t(I,H){var $=I.length;I.push(H);t:for(;0<$;){var pt=$-1>>>1,bt=I[pt];if(0<l(bt,H))I[pt]=H,I[$]=bt,$=pt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],$=I.pop();if($!==H){I[0]=$;t:for(var pt=0,bt=I.length,U=bt>>>1;pt<U;){var Z=2*(pt+1)-1,yt=I[Z],Rt=Z+1,Ot=I[Rt];if(0>l(yt,$))Rt<bt&&0>l(Ot,yt)?(I[pt]=Ot,I[Rt]=$,pt=Rt):(I[pt]=yt,I[Z]=$,pt=Z);else if(Rt<bt&&0>l(Ot,$))I[pt]=Ot,I[Rt]=$,pt=Rt;else break t}}return H}function l(I,H){var $=I.sortIndex-H.sortIndex;return $!==0?$:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,g=3,S=!1,T=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=I)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function P(I){if(w=!1,C(I),!T)if(i(m)!==null)T=!0,L||(L=!0,q());else{var H=i(p);H!==null&&J(P,H.startTime-I)}}var L=!1,O=-1,b=5,N=-1;function W(){return M?!0:!(r.unstable_now()-N<b)}function G(){if(M=!1,L){var I=r.unstable_now();N=I;var H=!0;try{t:{T=!1,w&&(w=!1,F(O),O=-1),S=!0;var $=g;try{e:{for(C(I),v=i(m);v!==null&&!(v.expirationTime>I&&W());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,g=v.priorityLevel;var bt=pt(v.expirationTime<=I);if(I=r.unstable_now(),typeof bt=="function"){v.callback=bt,C(I),H=!0;break e}v===i(m)&&s(m),C(I)}else s(m);v=i(m)}if(v!==null)H=!0;else{var U=i(p);U!==null&&J(P,U.startTime-I),H=!1}}break t}finally{v=null,g=$,S=!1}H=void 0}}finally{H?q():L=!1}}}var q;if(typeof B=="function")q=function(){B(G)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,gt=ct.port2;ct.port1.onmessage=G,q=function(){gt.postMessage(null)}}else q=function(){y(G,0)};function J(I,H){O=y(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(I){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var $=g;g=H;try{return I()}finally{g=$}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=g;g=I;try{return H()}finally{g=$}},r.unstable_scheduleCallback=function(I,H,$){var pt=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?pt+$:pt):$=pt,I){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=$+bt,I={id:_++,callback:H,priorityLevel:I,startTime:$,expirationTime:bt,sortIndex:-1},$>pt?(I.sortIndex=$,t(p,I),i(m)===null&&I===i(p)&&(w?(F(O),O=-1):w=!0,J(P,$-pt))):(I.sortIndex=bt,t(m,I),T||S||(T=!0,L||(L=!0,q()))),I},r.unstable_shouldYield=W,r.unstable_wrapCallback=function(I){var H=g;return function(){var $=g;g=H;try{return I.apply(this,arguments)}finally{g=$}}}})(Fh)),Fh}var C_;function Gy(){return C_||(C_=1,Ih.exports=Hy()),Ih.exports}var Bh={exports:{}},se={};var w_;function Vy(){if(w_)return se;w_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function y(U,Z,yt){this.props=U,this.context=Z,this.refs=M,this.updater=yt||T}y.prototype.isReactComponent={},y.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=y.prototype;function B(U,Z,yt){this.props=U,this.context=Z,this.refs=M,this.updater=yt||T}var C=B.prototype=new F;C.constructor=B,w(C,y.prototype),C.isPureReactComponent=!0;var P=Array.isArray;function L(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function N(U,Z,yt){var Rt=yt.ref;return{$$typeof:r,type:U,key:Z,ref:Rt!==void 0?Rt:null,props:yt}}function W(U,Z){return N(U.type,Z,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function q(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(yt){return Z[yt]})}var ct=/\/+/g;function gt(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?q(""+U.key):Z.toString(36)}function J(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function I(U,Z,yt,Rt,Ot){var at=typeof U;(at==="undefined"||at==="boolean")&&(U=null);var xt=!1;if(U===null)xt=!0;else switch(at){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(U.$$typeof){case r:case t:xt=!0;break;case _:return xt=U._init,I(xt(U._payload),Z,yt,Rt,Ot)}}if(xt)return Ot=Ot(U),xt=Rt===""?"."+gt(U,0):Rt,P(Ot)?(yt="",xt!=null&&(yt=xt.replace(ct,"$&/")+"/"),I(Ot,Z,yt,"",function(ne){return ne})):Ot!=null&&(G(Ot)&&(Ot=W(Ot,yt+(Ot.key==null||U&&U.key===Ot.key?"":(""+Ot.key).replace(ct,"$&/")+"/")+xt)),Z.push(Ot)),1;xt=0;var Mt=Rt===""?".":Rt+":";if(P(U))for(var zt=0;zt<U.length;zt++)Rt=U[zt],at=Mt+gt(Rt,zt),xt+=I(Rt,Z,yt,at,Ot);else if(zt=S(U),typeof zt=="function")for(U=zt.call(U),zt=0;!(Rt=U.next()).done;)Rt=Rt.value,at=Mt+gt(Rt,zt++),xt+=I(Rt,Z,yt,at,Ot);else if(at==="object"){if(typeof U.then=="function")return I(J(U),Z,yt,Rt,Ot);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return xt}function H(U,Z,yt){if(U==null)return U;var Rt=[],Ot=0;return I(U,Rt,"","",function(at){return Z.call(yt,at,Ot++)}),Rt}function $(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(yt){(U._status===0||U._status===-1)&&(U._status=1,U._result=yt)},function(yt){(U._status===0||U._status===-1)&&(U._status=2,U._result=yt)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var pt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},bt={map:H,forEach:function(U,Z,yt){H(U,function(){Z.apply(this,arguments)},yt)},count:function(U){var Z=0;return H(U,function(){Z++}),Z},toArray:function(U){return H(U,function(Z){return Z})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return se.Activity=v,se.Children=bt,se.Component=y,se.Fragment=i,se.Profiler=l,se.PureComponent=B,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,se.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},se.cache=function(U){return function(){return U.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(U,Z,yt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Rt=w({},U.props),Ot=U.key;if(Z!=null)for(at in Z.key!==void 0&&(Ot=""+Z.key),Z)!b.call(Z,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Z.ref===void 0||(Rt[at]=Z[at]);var at=arguments.length-2;if(at===1)Rt.children=yt;else if(1<at){for(var xt=Array(at),Mt=0;Mt<at;Mt++)xt[Mt]=arguments[Mt+2];Rt.children=xt}return N(U.type,Ot,Rt)},se.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},se.createElement=function(U,Z,yt){var Rt,Ot={},at=null;if(Z!=null)for(Rt in Z.key!==void 0&&(at=""+Z.key),Z)b.call(Z,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Ot[Rt]=Z[Rt]);var xt=arguments.length-2;if(xt===1)Ot.children=yt;else if(1<xt){for(var Mt=Array(xt),zt=0;zt<xt;zt++)Mt[zt]=arguments[zt+2];Ot.children=Mt}if(U&&U.defaultProps)for(Rt in xt=U.defaultProps,xt)Ot[Rt]===void 0&&(Ot[Rt]=xt[Rt]);return N(U,at,Ot)},se.createRef=function(){return{current:null}},se.forwardRef=function(U){return{$$typeof:d,render:U}},se.isValidElement=G,se.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:$}},se.memo=function(U,Z){return{$$typeof:p,type:U,compare:Z===void 0?null:Z}},se.startTransition=function(U){var Z=O.T,yt={};O.T=yt;try{var Rt=U(),Ot=O.S;Ot!==null&&Ot(yt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(L,pt)}catch(at){pt(at)}finally{Z!==null&&yt.types!==null&&(Z.types=yt.types),O.T=Z}},se.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},se.use=function(U){return O.H.use(U)},se.useActionState=function(U,Z,yt){return O.H.useActionState(U,Z,yt)},se.useCallback=function(U,Z){return O.H.useCallback(U,Z)},se.useContext=function(U){return O.H.useContext(U)},se.useDebugValue=function(){},se.useDeferredValue=function(U,Z){return O.H.useDeferredValue(U,Z)},se.useEffect=function(U,Z){return O.H.useEffect(U,Z)},se.useEffectEvent=function(U){return O.H.useEffectEvent(U)},se.useId=function(){return O.H.useId()},se.useImperativeHandle=function(U,Z,yt){return O.H.useImperativeHandle(U,Z,yt)},se.useInsertionEffect=function(U,Z){return O.H.useInsertionEffect(U,Z)},se.useLayoutEffect=function(U,Z){return O.H.useLayoutEffect(U,Z)},se.useMemo=function(U,Z){return O.H.useMemo(U,Z)},se.useOptimistic=function(U,Z){return O.H.useOptimistic(U,Z)},se.useReducer=function(U,Z,yt){return O.H.useReducer(U,Z,yt)},se.useRef=function(U){return O.H.useRef(U)},se.useState=function(U){return O.H.useState(U)},se.useSyncExternalStore=function(U,Z,yt){return O.H.useSyncExternalStore(U,Z,yt)},se.useTransition=function(){return O.H.useTransition()},se.version="19.2.7",se}var D_;function x0(){return D_||(D_=1,Bh.exports=Vy()),Bh.exports}var zh={exports:{}},Hn={};var U_;function ky(){if(U_)return Hn;U_=1;var r=x0();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Hn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Hn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Hn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Hn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Hn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Hn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Hn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Hn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Hn.requestFormReset=function(m){s.d.r(m)},Hn.unstable_batchedUpdates=function(m,p){return m(p)},Hn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Hn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Hn.version="19.2.7",Hn}var L_;function Xy(){if(L_)return zh.exports;L_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),zh.exports=ky(),zh.exports}var N_;function Wy(){if(N_)return tl;N_=1;var r=Gy(),t=x0(),i=Xy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=h;break}if(R===o){x=!0,o=u,a=h;break}R=R.sibling}if(!x){for(R=h.child;R;){if(R===a){x=!0,a=h,o=u;break}if(R===o){x=!0,o=h,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),B=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case B:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var J=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},pt=[],bt=-1;function U(e){return{current:e}}function Z(e){0>bt||(e.current=pt[bt],pt[bt]=null,bt--)}function yt(e,n){bt++,pt[bt]=e.current,e.current=n}var Rt=U(null),Ot=U(null),at=U(null),xt=U(null);function Mt(e,n){switch(yt(at,n),yt(Ot,e),yt(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Zg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Zg(n),e=Kg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(Rt),yt(Rt,e)}function zt(){Z(Rt),Z(Ot),Z(at)}function ne(e){e.memoizedState!==null&&yt(xt,e);var n=Rt.current,a=Kg(n,e.type);n!==a&&(yt(Ot,e),yt(Rt,a))}function Qt(e){Ot.current===e&&(Z(Rt),Z(Ot)),xt.current===e&&(Z(xt),Ko._currentValue=$)}var Ke,fe;function ye(e){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+fe}var Se=!1;function de(e,n){if(!e||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var ot=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){ot=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){ot=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&ot&&typeof lt.stack=="string")return[lt.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],R=h[1];if(x&&R){var z=x.split(`
`),et=R.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===et.length)for(o=z.length-1,u=et.length-1;1<=o&&0<=u&&z[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==et[u]){var dt=`
`+z[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ye(a):""}function an(e,n){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye("Lazy");case 13:return e.child!==n&&n!==null?ye("Suspense Fallback"):ye("Suspense");case 19:return ye("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return ye("Activity");default:return""}}function sn(e){try{var n="",a=null;do n+=an(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var rn=Object.prototype.hasOwnProperty,un=r.unstable_scheduleCallback,Ye=r.unstable_cancelCallback,on=r.unstable_shouldYield,Y=r.unstable_requestPaint,Be=r.unstable_now,Re=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,st=r.unstable_LowPriority,ft=r.unstable_IdlePriority,Et=r.log,wt=r.unstable_setDisableYieldValue,ut=null,ht=null;function At(e){if(typeof Et=="function"&&wt(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ut,e)}catch{}}var Ft=Math.clz32?Math.clz32:Kt,Lt=Math.log,Dt=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(Lt(e)/Dt|0)|0}var Jt=256,ie=262144,k=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Tt(o):(x&=R,x!==0?u=Tt(x):a||(a=R&~e,a!==0&&(u=Tt(a))))):(R=o&~h,R!==0?u=Tt(R):x!==0?u=Tt(x):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function It(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function St(){var e=k;return k<<=1,(k&62914560)===0&&(k=4194304),e}function Wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function je(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,z=e.expirationTimes,et=e.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-Ft(a),vt=1<<dt;R[dt]=0,z[dt]=-1;var ot=et[dt];if(ot!==null)for(et[dt]=null,dt=0;dt<ot.length;dt++){var lt=ot[dt];lt!==null&&(lt.lane&=-536870913)}a&=~vt}o!==0&&Ue(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function Ue(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function si(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ri(e,n){var a=n&-n;return a=(a&42)!==0?1:lo(a),(a&(e.suspendedLanes|n))!==0?0:a}function lo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function co(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:v_(e.type))}function Js(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Xi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Xi,Ln="__reactProps$"+Xi,Jn="__reactContainer$"+Xi,vs="__reactEvents$"+Xi,Ml="__reactListeners$"+Xi,bl="__reactHandles$"+Xi,xs="__reactResources$"+Xi,Oa="__reactMarker$"+Xi;function Ia(e){delete e[dn],delete e[Ln],delete e[vs],delete e[Ml],delete e[bl]}function ra(e){var n=e[dn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Jn]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=n_(e);e!==null;){if(a=e[dn])return a;e=n_(e)}return n}e=a,a=e.parentNode}return null}function oa(e){if(e=e[dn]||e[Jn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ys(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Fa(e){var n=e[xs];return n||(n=e[xs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(e){e[Oa]=!0}var El=new Set,A={};function X(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(A[e]=n,e=0;e<n.length;e++)El.add(n[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},Nt={};function Ht(e){return rn.call(Nt,e)?!0:rn.call(it,e)?!1:nt.test(e)?Nt[e]=!0:(it[e]=!0,!1)}function Ut(e,n,a){if(Ht(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function kt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Vt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){if(!e._valueTracker){var n=oe(e)?"checked":"value";e._valueTracker=Zt(e,n,""+e[n])}}function $e(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Le=/[\n"\\]/g;function Ne(e){return e.replace(Le,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bt(e,n,a,o,u,h,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+jt(n)):e.value!==""+jt(n)&&(e.value=""+jt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?pe(e,x,jt(n)):a!=null?pe(e,x,jt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+jt(R):e.removeAttribute("name")}function zn(e,n,a,o,u,h,x,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ee(e);return}a=a!=null?""+jt(a):"",n=n!=null?""+jt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ee(e)}function pe(e,n,a){n==="number"&&ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Sn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function oi(e,n,a){if(n!=null&&(n=""+jt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+jt(a):""}function Ui(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=jt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ee(e)}function li(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Pe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Pe.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Li(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&tn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&tn(e,h,n[h])}function we(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ba=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ss(e){return Ba.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var Du=null;function Uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,$s=null;function q0(e){var n=oa(e);if(n&&(e=n.stateNode)){var a=e[Ln]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ne(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Ln]||null;if(!u)throw Error(s(90));Bt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&$e(o)}break t;case"textarea":oi(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Sn(e,!!a.multiple,n,!1)}}}var Lu=!1;function Z0(e,n,a){if(Lu)return e(n,a);Lu=!0;try{var o=e(n);return o}finally{if(Lu=!1,(js!==null||$s!==null)&&(fc(),js&&(n=js,e=$s,$s=js=null,q0(n),e)))for(n=0;n<e.length;n++)q0(e[n])}}function fo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Ln]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(ca)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Nu=!1}var za=null,Pu=null,Tl=null;function K0(){if(Tl)return Tl;var e,n=Pu,a=n.length,o,u="value"in za?za.value:za.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return Tl=u.slice(e,1<o?1-o:void 0)}function Al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function Q0(){return!1}function jn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Rl:Q0,this.isPropagationStopped=Q0,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),n}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=jn(Ms),po=v({},Ms,{view:0,detail:0}),Iv=jn(po),Ou,Iu,mo,wl=v({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(Ou=e.screenX-mo.screenX,Iu=e.screenY-mo.screenY):Iu=Ou=0,mo=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Iu}}),J0=jn(wl),Fv=v({},wl,{dataTransfer:0}),Bv=jn(Fv),zv=v({},po,{relatedTarget:0}),Fu=jn(zv),Hv=v({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Gv=jn(Hv),Vv=v({},Ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kv=jn(Vv),Xv=v({},Ms,{data:0}),j0=jn(Xv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qv[e])?!!n[e]:!1}function Bu(){return Zv}var Kv=v({},po,{key:function(e){if(e.key){var n=Wv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qv=jn(Kv),Jv=v({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$0=jn(Jv),jv=v({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),$v=jn(jv),tx=v({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=jn(tx),nx=v({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=jn(nx),ax=v({},Ms,{newState:0,oldState:0}),sx=jn(ax),rx=[9,13,27,32],zu=ca&&"CompositionEvent"in window,go=null;ca&&"documentMode"in document&&(go=document.documentMode);var ox=ca&&"TextEvent"in window&&!go,tp=ca&&(!zu||go&&8<go&&11>=go),ep=" ",np=!1;function ip(e,n){switch(e){case"keyup":return rx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function lx(e,n){switch(e){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,ep);case"textInput":return e=n.data,e===ep&&np?null:e;default:return null}}function cx(e,n){if(tr)return e==="compositionend"||!zu&&ip(e,n)?(e=K0(),Tl=Pu=za=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ux[e.type]:n==="textarea"}function rp(e,n,a,o){js?$s?$s.push(o):$s=[o]:js=o,n=vc(n,"onChange"),0<n.length&&(a=new Cl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var _o=null,vo=null;function fx(e){Vg(e,0)}function Dl(e){var n=ys(e);if($e(n))return e}function op(e,n){if(e==="change")return n}var lp=!1;if(ca){var Hu;if(ca){var Gu="oninput"in document;if(!Gu){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),Gu=typeof cp.oninput=="function"}Hu=Gu}else Hu=!1;lp=Hu&&(!document.documentMode||9<document.documentMode)}function up(){_o&&(_o.detachEvent("onpropertychange",fp),vo=_o=null)}function fp(e){if(e.propertyName==="value"&&Dl(vo)){var n=[];rp(n,vo,e,Uu(e)),Z0(fx,n)}}function hx(e,n,a){e==="focusin"?(up(),_o=n,vo=a,_o.attachEvent("onpropertychange",fp)):e==="focusout"&&up()}function dx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(vo)}function px(e,n){if(e==="click")return Dl(n)}function mx(e,n){if(e==="input"||e==="change")return Dl(n)}function gx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ci=typeof Object.is=="function"?Object.is:gx;function xo(e,n){if(ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!rn.call(n,u)||!ci(e[u],n[u]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dp(e,n){var a=hp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hp(a)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ke(e.document)}return n}function Vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var _x=ca&&"documentMode"in document&&11>=document.documentMode,er=null,ku=null,yo=null,Xu=!1;function gp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||er==null||er!==ke(o)||(o=er,"selectionStart"in o&&Vu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yo&&xo(yo,o)||(yo=o,o=vc(ku,"onSelect"),0<o.length&&(n=new Cl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=er)))}function bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var nr={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},Wu={},_p={};ca&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function Es(e){if(Wu[e])return Wu[e];if(!nr[e])return e;var n=nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return Wu[e]=n[a];return e}var vp=Es("animationend"),xp=Es("animationiteration"),yp=Es("animationstart"),vx=Es("transitionrun"),xx=Es("transitionstart"),yx=Es("transitioncancel"),Sp=Es("transitionend"),Mp=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function Ni(e,n){Mp.set(e,n),X(n,[e])}var Ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],ir=0,qu=0;function Ll(){for(var e=ir,n=qu=ir=0;n<e;){var a=Si[n];Si[n++]=null;var o=Si[n];Si[n++]=null;var u=Si[n];Si[n++]=null;var h=Si[n];if(Si[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&bp(a,u,h)}}function Nl(e,n,a,o){Si[ir++]=e,Si[ir++]=n,Si[ir++]=a,Si[ir++]=o,qu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Zu(e,n,a,o){return Nl(e,n,a,o),Pl(e)}function Ts(e,n){return Nl(e,null,null,n),Pl(e)}function bp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Pl(e){if(50<Vo)throw Vo=0,ah=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ar={};function Sx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,n,a,o){return new Sx(e,n,a,o)}function Ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,n){var a=e.alternate;return a===null?(a=ui(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ep(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ol(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")Ku(e)&&(x=1);else if(typeof e=="string")x=Ay(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=ui(31,a,n,u),e.elementType=N,e.lanes=h,e;case w:return As(a.children,u,h,n);case M:x=8,u|=24;break;case y:return e=ui(12,a,n,u|2),e.elementType=y,e.lanes=h,e;case P:return e=ui(13,a,n,u),e.elementType=P,e.lanes=h,e;case L:return e=ui(19,a,n,u),e.elementType=L,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:x=10;break t;case F:x=9;break t;case C:x=11;break t;case O:x=14;break t;case b:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ui(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function As(e,n,a,o){return e=ui(7,e,o,n),e.lanes=a,e}function Qu(e,n,a){return e=ui(6,e,null,n),e.lanes=a,e}function Tp(e){var n=ui(18,null,null,0);return n.stateNode=e,n}function Ju(e,n,a){return n=ui(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ap=new WeakMap;function Mi(e,n){if(typeof e=="object"&&e!==null){var a=Ap.get(e);return a!==void 0?a:(n={value:e,source:n,stack:sn(n)},Ap.set(e,n),n)}return{value:e,source:n,stack:sn(n)}}var sr=[],rr=0,Il=null,So=0,bi=[],Ei=0,Ha=null,Yi=1,qi="";function fa(e,n){sr[rr++]=So,sr[rr++]=Il,Il=e,So=n}function Rp(e,n,a){bi[Ei++]=Yi,bi[Ei++]=qi,bi[Ei++]=Ha,Ha=e;var o=Yi;e=qi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var h=32-Ft(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Yi=1<<32-Ft(n)+u|a<<u|o,qi=h+e}else Yi=1<<h|a<<u|o,qi=e}function ju(e){e.return!==null&&(fa(e,1),Rp(e,1,0))}function $u(e){for(;e===Il;)Il=sr[--rr],sr[rr]=null,So=sr[--rr],sr[rr]=null;for(;e===Ha;)Ha=bi[--Ei],bi[Ei]=null,qi=bi[--Ei],bi[Ei]=null,Yi=bi[--Ei],bi[Ei]=null}function Cp(e,n){bi[Ei++]=Yi,bi[Ei++]=qi,bi[Ei++]=Ha,Yi=n.id,qi=n.overflow,Ha=e}var Nn=null,Qe=null,Me=!1,Ga=null,Ti=!1,tf=Error(s(519));function Va(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mo(Mi(n,e)),tf}function wp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[dn]=e,n[Ln]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Xo.length;a++)ge(Xo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Ui(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Yg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||Va(e,!0)}function Dp(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Nn=Nn.return}}function or(e){if(e!==Nn)return!1;if(!Me)return Dp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xh(e.type,e.memoizedProps)),a=!a),a&&Qe&&Va(e),Dp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=e_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=e_(e)}else n===27?(n=Qe,ns(e.type)?(e=Eh,Eh=null,Qe=e):Qe=n):Qe=Nn?Ri(e.stateNode.nextSibling):null;return!0}function Rs(){Qe=Nn=null,Me=!1}function ef(){var e=Ga;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),Ga=null),e}function Mo(e){Ga===null?Ga=[e]:Ga.push(e)}var nf=U(null),Cs=null,ha=null;function ka(e,n,a){yt(nf,n._currentValue),n._currentValue=a}function da(e){e._currentValue=nf.current,Z(nf)}function af(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function sf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),af(h.return,a,e),o||(x=null);break t}h=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),af(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function lr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;ci(u.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(u===xt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ko):e=[Ko])}u=u.return}e!==null&&sf(n,e,a,o),n.flags|=262144}function Fl(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ws(e){Cs=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pn(e){return Up(Cs,e)}function Bl(e,n){return Cs===null&&ws(e),Up(e,n)}function Up(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ha===null){if(e===null)throw Error(s(308));ha=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ha=ha.next=n;return a}var Mx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},bx=r.unstable_scheduleCallback,Ex=r.unstable_NormalPriority,mn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new Mx,data:new Map,refCount:0}}function bo(e){e.refCount--,e.refCount===0&&bx(Ex,function(){e.controller.abort()})}var Eo=null,of=0,cr=0,ur=null;function Tx(e,n){if(Eo===null){var a=Eo=[];of=0,cr=uh(),ur={status:"pending",value:void 0,then:function(o){a.push(o)}}}return of++,n.then(Lp,Lp),n}function Lp(){if(--of===0&&Eo!==null){ur!==null&&(ur.status="fulfilled");var e=Eo;Eo=null,cr=0,ur=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ax(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Np=I.S;I.S=function(e,n){gg=Be(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Tx(e,n),Np!==null&&Np(e,n)};var Ds=U(null);function lf(){var e=Ds.current;return e!==null?e:Xe.pooledCache}function zl(e,n){n===null?yt(Ds,Ds.current):yt(Ds,n.pool)}function Pp(){var e=lf();return e===null?null:{parent:mn._currentValue,pool:e}}var fr=Error(s(460)),cf=Error(s(474)),Hl=Error(s(542)),Gl={then:function(){}};function Op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ip(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(la,la),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e;default:if(typeof n.status=="string")n.then(la,la);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e}throw Ls=n,fr}}function Us(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ls=a,fr):a}}var Ls=null;function Fp(){if(Ls===null)throw Error(s(459));var e=Ls;return Ls=null,e}function Bp(e){if(e===fr||e===Hl)throw Error(s(483))}var hr=null,To=0;function Vl(e){var n=To;return To+=1,hr===null&&(hr=[]),Ip(hr,e,n)}function Ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function kl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function zp(e){function n(K,V){if(e){var tt=K.deletions;tt===null?(K.deletions=[V],K.flags|=16):tt.push(V)}}function a(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=ua(K,V),K.index=0,K.sibling=null,K}function h(K,V,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<V?(K.flags|=67108866,V):tt):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,V,tt,_t){return V===null||V.tag!==6?(V=Qu(tt,K.mode,_t),V.return=K,V):(V=u(V,tt),V.return=K,V)}function z(K,V,tt,_t){var $t=tt.type;return $t===w?dt(K,V,tt.props.children,_t,tt.key):V!==null&&(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===b&&Us($t)===V.type)?(V=u(V,tt.props),Ao(V,tt),V.return=K,V):(V=Ol(tt.type,tt.key,tt.props,null,K.mode,_t),Ao(V,tt),V.return=K,V)}function et(K,V,tt,_t){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=Ju(tt,K.mode,_t),V.return=K,V):(V=u(V,tt.children||[]),V.return=K,V)}function dt(K,V,tt,_t,$t){return V===null||V.tag!==7?(V=As(tt,K.mode,_t,$t),V.return=K,V):(V=u(V,tt),V.return=K,V)}function vt(K,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Qu(""+V,K.mode,tt),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return tt=Ol(V.type,V.key,V.props,null,K.mode,tt),Ao(tt,V),tt.return=K,tt;case T:return V=Ju(V,K.mode,tt),V.return=K,V;case b:return V=Us(V),vt(K,V,tt)}if(J(V)||q(V))return V=As(V,K.mode,tt,null),V.return=K,V;if(typeof V.then=="function")return vt(K,Vl(V),tt);if(V.$$typeof===B)return vt(K,Bl(K,V),tt);kl(K,V)}return null}function ot(K,V,tt,_t){var $t=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:R(K,V,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:return tt.key===$t?z(K,V,tt,_t):null;case T:return tt.key===$t?et(K,V,tt,_t):null;case b:return tt=Us(tt),ot(K,V,tt,_t)}if(J(tt)||q(tt))return $t!==null?null:dt(K,V,tt,_t,null);if(typeof tt.then=="function")return ot(K,V,Vl(tt),_t);if(tt.$$typeof===B)return ot(K,V,Bl(K,tt),_t);kl(K,tt)}return null}function lt(K,V,tt,_t,$t){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(tt)||null,R(V,K,""+_t,$t);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case S:return K=K.get(_t.key===null?tt:_t.key)||null,z(V,K,_t,$t);case T:return K=K.get(_t.key===null?tt:_t.key)||null,et(V,K,_t,$t);case b:return _t=Us(_t),lt(K,V,tt,_t,$t)}if(J(_t)||q(_t))return K=K.get(tt)||null,dt(V,K,_t,$t,null);if(typeof _t.then=="function")return lt(K,V,tt,Vl(_t),$t);if(_t.$$typeof===B)return lt(K,V,tt,Bl(V,_t),$t);kl(V,_t)}return null}function Xt(K,V,tt,_t){for(var $t=null,Te=null,Yt=V,ce=V=0,ve=null;Yt!==null&&ce<tt.length;ce++){Yt.index>ce?(ve=Yt,Yt=null):ve=Yt.sibling;var Ae=ot(K,Yt,tt[ce],_t);if(Ae===null){Yt===null&&(Yt=ve);break}e&&Yt&&Ae.alternate===null&&n(K,Yt),V=h(Ae,V,ce),Te===null?$t=Ae:Te.sibling=Ae,Te=Ae,Yt=ve}if(ce===tt.length)return a(K,Yt),Me&&fa(K,ce),$t;if(Yt===null){for(;ce<tt.length;ce++)Yt=vt(K,tt[ce],_t),Yt!==null&&(V=h(Yt,V,ce),Te===null?$t=Yt:Te.sibling=Yt,Te=Yt);return Me&&fa(K,ce),$t}for(Yt=o(Yt);ce<tt.length;ce++)ve=lt(Yt,K,ce,tt[ce],_t),ve!==null&&(e&&ve.alternate!==null&&Yt.delete(ve.key===null?ce:ve.key),V=h(ve,V,ce),Te===null?$t=ve:Te.sibling=ve,Te=ve);return e&&Yt.forEach(function(os){return n(K,os)}),Me&&fa(K,ce),$t}function te(K,V,tt,_t){if(tt==null)throw Error(s(151));for(var $t=null,Te=null,Yt=V,ce=V=0,ve=null,Ae=tt.next();Yt!==null&&!Ae.done;ce++,Ae=tt.next()){Yt.index>ce?(ve=Yt,Yt=null):ve=Yt.sibling;var os=ot(K,Yt,Ae.value,_t);if(os===null){Yt===null&&(Yt=ve);break}e&&Yt&&os.alternate===null&&n(K,Yt),V=h(os,V,ce),Te===null?$t=os:Te.sibling=os,Te=os,Yt=ve}if(Ae.done)return a(K,Yt),Me&&fa(K,ce),$t;if(Yt===null){for(;!Ae.done;ce++,Ae=tt.next())Ae=vt(K,Ae.value,_t),Ae!==null&&(V=h(Ae,V,ce),Te===null?$t=Ae:Te.sibling=Ae,Te=Ae);return Me&&fa(K,ce),$t}for(Yt=o(Yt);!Ae.done;ce++,Ae=tt.next())Ae=lt(Yt,K,ce,Ae.value,_t),Ae!==null&&(e&&Ae.alternate!==null&&Yt.delete(Ae.key===null?ce:Ae.key),V=h(Ae,V,ce),Te===null?$t=Ae:Te.sibling=Ae,Te=Ae);return e&&Yt.forEach(function(Fy){return n(K,Fy)}),Me&&fa(K,ce),$t}function Ge(K,V,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===w&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:t:{for(var $t=tt.key;V!==null;){if(V.key===$t){if($t=tt.type,$t===w){if(V.tag===7){a(K,V.sibling),_t=u(V,tt.props.children),_t.return=K,K=_t;break t}}else if(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===b&&Us($t)===V.type){a(K,V.sibling),_t=u(V,tt.props),Ao(_t,tt),_t.return=K,K=_t;break t}a(K,V);break}else n(K,V);V=V.sibling}tt.type===w?(_t=As(tt.props.children,K.mode,_t,tt.key),_t.return=K,K=_t):(_t=Ol(tt.type,tt.key,tt.props,null,K.mode,_t),Ao(_t,tt),_t.return=K,K=_t)}return x(K);case T:t:{for($t=tt.key;V!==null;){if(V.key===$t)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(K,V.sibling),_t=u(V,tt.children||[]),_t.return=K,K=_t;break t}else{a(K,V);break}else n(K,V);V=V.sibling}_t=Ju(tt,K.mode,_t),_t.return=K,K=_t}return x(K);case b:return tt=Us(tt),Ge(K,V,tt,_t)}if(J(tt))return Xt(K,V,tt,_t);if(q(tt)){if($t=q(tt),typeof $t!="function")throw Error(s(150));return tt=$t.call(tt),te(K,V,tt,_t)}if(typeof tt.then=="function")return Ge(K,V,Vl(tt),_t);if(tt.$$typeof===B)return Ge(K,V,Bl(K,tt),_t);kl(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(K,V.sibling),_t=u(V,tt),_t.return=K,K=_t):(a(K,V),_t=Qu(tt,K.mode,_t),_t.return=K,K=_t),x(K)):a(K,V)}return function(K,V,tt,_t){try{To=0;var $t=Ge(K,V,tt,_t);return hr=null,$t}catch(Yt){if(Yt===fr||Yt===Hl)throw Yt;var Te=ui(29,Yt,null,K.mode);return Te.lanes=_t,Te.return=K,Te}}}var Ns=zp(!0),Hp=zp(!1),Xa=!1;function uf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Pl(e),bp(e,null,a),n}return Nl(e,o,n,a),Pl(e)}function Ro(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,si(e,a)}}function hf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var df=!1;function Co(){if(df){var e=ur;if(e!==null)throw e}}function wo(e,n,a,o){df=!1;var u=e.updateQueue;Xa=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,et=z.next;z.next=null,x===null?h=et:x.next=et,x=z;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==x&&(R===null?dt.firstBaseUpdate=et:R.next=et,dt.lastBaseUpdate=z))}if(h!==null){var vt=u.baseState;x=0,dt=et=z=null,R=h;do{var ot=R.lane&-536870913,lt=ot!==R.lane;if(lt?(_e&ot)===ot:(o&ot)===ot){ot!==0&&ot===cr&&(df=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Xt=e,te=R;ot=n;var Ge=a;switch(te.tag){case 1:if(Xt=te.payload,typeof Xt=="function"){vt=Xt.call(Ge,vt,ot);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=te.payload,ot=typeof Xt=="function"?Xt.call(Ge,vt,ot):Xt,ot==null)break t;vt=v({},vt,ot);break t;case 2:Xa=!0}}ot=R.callback,ot!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[ot]:lt.push(ot))}else lt={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(et=dt=lt,z=vt):dt=dt.next=lt,x|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(z=vt),u.baseState=z,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),Ja|=x,e.lanes=x,e.memoizedState=vt}}function Gp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Vp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gp(a[e],n)}var dr=U(null),Xl=U(0);function kp(e,n){e=Ma,yt(Xl,e),yt(dr,n),Ma=e|n.baseLanes}function pf(){yt(Xl,Ma),yt(dr,dr.current)}function mf(){Ma=Xl.current,Z(dr),Z(Xl)}var fi=U(null),Ai=null;function qa(e){var n=e.alternate;yt(fn,fn.current&1),yt(fi,e),Ai===null&&(n===null||dr.current!==null||n.memoizedState!==null)&&(Ai=e)}function gf(e){yt(fn,fn.current),yt(fi,e),Ai===null&&(Ai=e)}function Xp(e){e.tag===22?(yt(fn,fn.current),yt(fi,e),Ai===null&&(Ai=e)):Za()}function Za(){yt(fn,fn.current),yt(fi,fi.current)}function hi(e){Z(fi),Ai===e&&(Ai=null),Z(fn)}var fn=U(0);function Wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mh(a)||bh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=0,le=null,ze=null,gn=null,Yl=!1,pr=!1,Ps=!1,ql=0,Do=0,mr=null,Rx=0;function ln(){throw Error(s(321))}function _f(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ci(e[a],n[a]))return!1;return!0}function vf(e,n,a,o,u,h){return pa=h,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Rm:Nf,Ps=!1,h=a(o,u),Ps=!1,pr&&(h=Yp(n,a,o,u)),Wp(e),h}function Wp(e){I.H=No;var n=ze!==null&&ze.next!==null;if(pa=0,gn=ze=le=null,Yl=!1,Do=0,mr=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&Fl(e)&&(_n=!0))}function Yp(e,n,a,o){le=e;var u=0;do{if(pr&&(mr=null),Do=0,pr=!1,25<=u)throw Error(s(301));if(u+=1,gn=ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=Cm,h=n(a,o)}while(pr);return h}function Cx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?Uo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(le.flags|=1024),n}function xf(){var e=ql!==0;return ql=0,e}function yf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Sf(e){if(Yl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Yl=!1}pa=0,gn=ze=le=null,pr=!1,Do=ql=0,mr=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?le.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if(ze===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=gn===null?le.memoizedState:gn.next;if(n!==null)gn=n,ze=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},gn===null?le.memoizedState=gn=e:gn=gn.next=e}return gn}function Zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(e){var n=Do;return Do+=1,mr===null&&(mr=[]),e=Ip(mr,e,n),n=le,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Rm:Nf),e}function Kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Uo(e);if(e.$$typeof===B)return Pn(e)}throw Error(s(438,String(e)))}function Mf(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Zl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=W;return n.index++,a}function ma(e,n){return typeof n=="function"?n(e):n}function Ql(e){var n=hn();return bf(n,ze,e)}function bf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=x=null,z=null,et=n,dt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(_e&vt)===vt:(pa&vt)===vt){var ot=et.revertLane;if(ot===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===cr&&(dt=!0);else if((pa&ot)===ot){et=et.next,ot===cr&&(dt=!0);continue}else vt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(R=z=vt,x=h):z=z.next=vt,le.lanes|=ot,Ja|=ot;vt=et.action,Ps&&a(h,vt),h=et.hasEagerState?et.eagerState:a(h,vt)}else ot={lane:vt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(R=z=ot,x=h):z=z.next=ot,le.lanes|=vt,Ja|=vt;et=et.next}while(et!==null&&et!==n);if(z===null?x=h:z.next=R,!ci(h,e.memoizedState)&&(_n=!0,dt&&(a=ur,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=z,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ef(e){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);ci(h,n.memoizedState)||(_n=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function qp(e,n,a){var o=le,u=hn(),h=Me;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ci((ze||u).memoizedState,a);if(x&&(u.memoizedState=a,_n=!0),u=u.queue,Rf(Qp.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,gr(9,{destroy:void 0},Kp.bind(null,o,u,a,n),null),Xe===null)throw Error(s(349));h||(pa&127)!==0||Zp(o,n,a)}return a}function Zp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Zl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Kp(e,n,a,o){n.value=a,n.getSnapshot=o,Jp(n)&&jp(e)}function Qp(e,n,a){return a(function(){Jp(n)&&jp(e)})}function Jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ci(e,a)}catch{return!0}}function jp(e){var n=Ts(e,2);n!==null&&ii(n,e,2)}function Tf(e){var n=Xn();if(typeof e=="function"){var a=e;if(e=a(),Ps){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},n}function $p(e,n,a,o){return e.baseState=a,bf(e,ze,typeof o=="function"?o:ma)}function wx(e,n,a,o,u){if($l(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,tm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function tm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=I.T,x={};I.T=x;try{var R=a(u,o),z=I.S;z!==null&&z(x,R),em(e,n,R)}catch(et){Af(e,n,et)}finally{h!==null&&x.types!==null&&(h.types=x.types),I.T=h}}else try{h=a(u,o),em(e,n,h)}catch(et){Af(e,n,et)}}function em(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){nm(e,n,o)},function(o){return Af(e,n,o)}):nm(e,n,a)}function nm(e,n,a){n.status="fulfilled",n.value=a,im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,tm(e,a)))}function Af(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==o)}e.action=null}function im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function am(e,n){return n}function sm(e,n){if(Me){var a=Xe.formState;if(a!==null){t:{var o=le;if(Me){if(Qe){e:{for(var u=Qe,h=Ti;u.nodeType!==8;){if(!h){u=null;break e}if(u=Ri(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qe=Ri(u.nextSibling),o=u.data==="F!";break t}}Va(o)}o=!1}o&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=o,a=Em.bind(null,le,o),o.dispatch=a,o=Tf(!1),h=Lf.bind(null,le,!1,o.queue),o=Xn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=wx.bind(null,le,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function rm(e){var n=hn();return om(n,ze,e)}function om(e,n,a){if(n=bf(e,n,am)[0],e=Ql(ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Uo(n)}catch(x){throw x===fr?Hl:x}else o=n;n=hn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,gr(9,{destroy:void 0},Dx.bind(null,u,a),null)),[o,h,e]}function Dx(e,n){e.action=n}function lm(e){var n=hn(),a=ze;if(a!==null)return om(n,a,e);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function gr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Zl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function cm(){return hn().memoizedState}function Jl(e,n,a,o){var u=Xn();le.flags|=e,u.memoizedState=gr(1|n,{destroy:void 0},a,o===void 0?null:o)}function jl(e,n,a,o){var u=hn();o=o===void 0?null:o;var h=u.memoizedState.inst;ze!==null&&o!==null&&_f(o,ze.memoizedState.deps)?u.memoizedState=gr(n,h,a,o):(le.flags|=e,u.memoizedState=gr(1|n,h,a,o))}function um(e,n){Jl(8390656,8,e,n)}function Rf(e,n){jl(2048,8,e,n)}function Ux(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Zl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function fm(e){var n=hn().memoizedState;return Ux({ref:n,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function hm(e,n){return jl(4,2,e,n)}function dm(e,n){return jl(4,4,e,n)}function pm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mm(e,n,a){a=a!=null?a.concat([e]):null,jl(4,4,pm.bind(null,n,e),a)}function Cf(){}function gm(e,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&_f(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function _m(e,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&_f(n,o[1]))return o[0];if(o=e(),Ps){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o}function wf(e,n,a){return a===void 0||(pa&1073741824)!==0&&(_e&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=vg(),le.lanes|=e,Ja|=e,a)}function vm(e,n,a,o){return ci(a,n)?a:dr.current!==null?(e=wf(e,a,o),ci(e,n)||(_n=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(_e&261930)===0?(_n=!0,e.memoizedState=a):(e=vg(),le.lanes|=e,Ja|=e,n)}function xm(e,n,a,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var x=I.T,R={};I.T=R,Lf(e,!1,n,a);try{var z=u(),et=I.S;if(et!==null&&et(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var dt=Ax(z,o);Lo(e,n,dt,mi(e))}else Lo(e,n,o,mi(e))}catch(vt){Lo(e,n,{then:function(){},status:"rejected",reason:vt},mi())}finally{H.p=h,x!==null&&R.types!==null&&(x.types=R.types),I.T=x}}function Lx(){}function Df(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=ym(e).queue;xm(e,u,n,$,a===null?Lx:function(){return Sm(e),a(o)})}function ym(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Sm(e){var n=ym(e);n.next===null&&(n=e.alternate.memoizedState),Lo(e,n.next.queue,{},mi())}function Uf(){return Pn(Ko)}function Mm(){return hn().memoizedState}function bm(){return hn().memoizedState}function Nx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=mi();e=Wa(a);var o=Ya(n,e,a);o!==null&&(ii(o,n,a),Ro(o,n,a)),n={cache:rf()},e.payload=n;return}n=n.return}}function Px(e,n,a){var o=mi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$l(e)?Tm(n,a):(a=Zu(e,n,a,o),a!==null&&(ii(a,e,o),Am(a,n,o)))}function Em(e,n,a){var o=mi();Lo(e,n,a,o)}function Lo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($l(e))Tm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,R=h(x,a);if(u.hasEagerState=!0,u.eagerState=R,ci(R,x))return Nl(e,n,u,0),Xe===null&&Ll(),!1}catch{}if(a=Zu(e,n,u,o),a!==null)return ii(a,e,o),Am(a,n,o),!0}return!1}function Lf(e,n,a,o){if(o={lane:2,revertLane:uh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},$l(e)){if(n)throw Error(s(479))}else n=Zu(e,a,o,2),n!==null&&ii(n,e,2)}function $l(e){var n=e.alternate;return e===le||n!==null&&n===le}function Tm(e,n){pr=Yl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Am(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,si(e,a)}}var No={readContext:Pn,use:Kl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};No.useEffectEvent=ln;var Rm={readContext:Pn,use:Kl,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Pn,useEffect:um,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Jl(4194308,4,pm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Jl(4194308,4,e,n)},useInsertionEffect:function(e,n){Jl(4,2,e,n)},useMemo:function(e,n){var a=Xn();n=n===void 0?null:n;var o=e();if(Ps){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Xn();if(a!==void 0){var u=a(n);if(Ps){At(!0);try{a(n)}finally{At(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Px.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Tf(e);var n=e.queue,a=Em.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Cf,useDeferredValue:function(e,n){var a=Xn();return wf(a,e,n)},useTransition:function(){var e=Tf(!1);return e=xm.bind(null,le,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=Xn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(_e&127)!==0||Zp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,um(Qp.bind(null,o,h,e),[e]),o.flags|=2048,gr(9,{destroy:void 0},Kp.bind(null,o,h,a,n),null),a},useId:function(){var e=Xn(),n=Xe.identifierPrefix;if(Me){var a=qi,o=Yi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ql++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Rx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Uf,useFormState:sm,useActionState:sm,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Lf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Mf,useCacheRefresh:function(){return Xn().memoizedState=Nx.bind(null,le)},useEffectEvent:function(e){var n=Xn(),a={impl:e};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Nf={readContext:Pn,use:Kl,useCallback:gm,useContext:Pn,useEffect:Rf,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Ql,useRef:cm,useState:function(){return Ql(ma)},useDebugValue:Cf,useDeferredValue:function(e,n){var a=hn();return vm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Ql(ma)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Uo(e),n]},useSyncExternalStore:qp,useId:Mm,useHostTransitionStatus:Uf,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=hn();return $p(a,ze,e,n)},useMemoCache:Mf,useCacheRefresh:bm};Nf.useEffectEvent=fm;var Cm={readContext:Pn,use:Kl,useCallback:gm,useContext:Pn,useEffect:Rf,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Ef,useRef:cm,useState:function(){return Ef(ma)},useDebugValue:Cf,useDeferredValue:function(e,n){var a=hn();return ze===null?wf(a,e,n):vm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Ef(ma)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Uo(e),n]},useSyncExternalStore:qp,useId:Mm,useHostTransitionStatus:Uf,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=hn();return ze!==null?$p(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:bm};Cm.useEffectEvent=fm;function Pf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Of={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=mi(),u=Wa(o);u.payload=n,a!=null&&(u.callback=a),n=Ya(e,u,o),n!==null&&(ii(n,e,o),Ro(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=mi(),u=Wa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ya(e,u,o),n!==null&&(ii(n,e,o),Ro(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=mi(),o=Wa(a);o.tag=2,n!=null&&(o.callback=n),n=Ya(e,o,a),n!==null&&(ii(n,e,a),Ro(n,e,a))}};function wm(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!xo(a,o)||!xo(u,h):!0}function Dm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Of.enqueueReplaceState(n,n.state,null)}function Os(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Um(e){Ul(e)}function Lm(e){console.error(e)}function Nm(e){Ul(e)}function tc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Pm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function If(e,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){tc(e,n)},a}function Om(e){return e=Wa(e),e.tag=3,e}function Im(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Pm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Pm(n,a,o),typeof u!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Ox(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&lr(n,a,u,!0),a=fi.current,a!==null){switch(a.tag){case 31:case 13:return Ai===null?hc():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),oh(e,o,u)),!1;case 22:return a.flags|=65536,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),oh(e,o,u)),!1}throw Error(s(435,a.tag))}return oh(e,o,u),hc(),!1}if(Me)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==tf&&(e=Error(s(422),{cause:o}),Mo(Mi(e,a)))):(o!==tf&&(n=Error(s(423),{cause:o}),Mo(Mi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Mi(o,a),u=If(e.stateNode,o,u),hf(e,u),cn!==4&&(cn=2)),!1;var h=Error(s(520),{cause:o});if(h=Mi(h,a),Go===null?Go=[h]:Go.push(h),cn!==4&&(cn=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=If(a.stateNode,o,e),hf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ja===null||!ja.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Om(u),Im(u,e,a,o),hf(a,u),!1}a=a.return}while(a!==null);return!1}var Ff=Error(s(461)),_n=!1;function On(e,n,a,o){n.child=e===null?Hp(n,null,a,o):Ns(n,e.child,a,o)}function Fm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return ws(n),o=vf(e,n,a,x,h,u),R=xf(),e!==null&&!_n?(yf(e,n,u),ga(e,n,u)):(Me&&R&&ju(n),n.flags|=1,On(e,n,o,u),n.child)}function Bm(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Ku(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,zm(e,n,h,o,u)):(e=Ol(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Wf(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(x,o)&&e.ref===n.ref)return ga(e,n,u)}return n.flags|=1,e=ua(h,o),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(xo(h,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=h,Wf(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,ga(e,n,u)}return Bf(e,n,a,o,u)}function Hm(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Gm(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&zl(n,h!==null?h.cachePool:null),h!==null?kp(n,h):pf(),Xp(n);else return o=n.lanes=536870912,Gm(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(zl(n,h.cachePool),kp(n,h),Za(),n.memoizedState=null):(e!==null&&zl(n,null),pf(),Za());return On(e,n,u,a),n.child}function Po(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gm(e,n,a,o,u){var h=lf();return h=h===null?null:{parent:mn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&zl(n,null),pf(),Xp(n),e!==null&&lr(e,n,o,!0),n.childLanes=u,null}function ec(e,n){return n=ic({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Vm(e,n,a){return Ns(n,e.child,null,a),e=ec(n,n.pendingProps),e.flags|=2,hi(n),n.memoizedState=null,e}function Ix(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=ec(n,o),n.lanes=536870912,Po(null,e);if(gf(n),(e=Qe)?(e=t_(e,Ti),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Tp(e),a.return=n,n.child=a,Nn=n,Qe=null)):e=null,e===null)throw Va(n);return n.lanes=536870912,null}return ec(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(gf(n),u)if(n.flags&256)n.flags&=-257,n=Vm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||lr(e,n,a,!1),u=(a&e.childLanes)!==0,_n||u){if(o=Xe,o!==null&&(x=ri(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,Ts(e,x),ii(o,e,x),Ff;hc(),n=Vm(e,n,a)}else e=h.treeContext,Qe=Ri(x.nextSibling),Nn=n,Me=!0,Ga=null,Ti=!1,e!==null&&Cp(n,e),n=ec(n,o),n.flags|=4096;return n}return e=ua(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function nc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Bf(e,n,a,o,u){return ws(n),a=vf(e,n,a,o,void 0,u),o=xf(),e!==null&&!_n?(yf(e,n,u),ga(e,n,u)):(Me&&o&&ju(n),n.flags|=1,On(e,n,a,u),n.child)}function km(e,n,a,o,u,h){return ws(n),n.updateQueue=null,a=Yp(n,o,a,u),Wp(e),o=xf(),e!==null&&!_n?(yf(e,n,h),ga(e,n,h)):(Me&&o&&ju(n),n.flags|=1,On(e,n,a,h),n.child)}function Xm(e,n,a,o,u){if(ws(n),n.stateNode===null){var h=ar,x=a.contextType;typeof x=="object"&&x!==null&&(h=Pn(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Of,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},uf(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?Pn(x):ar,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Pf(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Of.enqueueReplaceState(h,h.state,null),wo(n,o,h,u),Co(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,z=Os(a,R);h.props=z;var et=h.context,dt=a.contextType;x=ar,typeof dt=="object"&&dt!==null&&(x=Pn(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||et!==x)&&Dm(n,h,o,x),Xa=!1;var ot=n.memoizedState;h.state=ot,wo(n,o,h,u),Co(),et=n.memoizedState,R||ot!==et||Xa?(typeof vt=="function"&&(Pf(n,a,vt,o),et=n.memoizedState),(z=Xa||wm(n,a,z,o,ot,et,x))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),h.props=o,h.state=et,h.context=x,o=z):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,ff(e,n),x=n.memoizedProps,dt=Os(a,x),h.props=dt,vt=n.pendingProps,ot=h.context,et=a.contextType,z=ar,typeof et=="object"&&et!==null&&(z=Pn(et)),R=a.getDerivedStateFromProps,(et=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==vt||ot!==z)&&Dm(n,h,o,z),Xa=!1,ot=n.memoizedState,h.state=ot,wo(n,o,h,u),Co();var lt=n.memoizedState;x!==vt||ot!==lt||Xa||e!==null&&e.dependencies!==null&&Fl(e.dependencies)?(typeof R=="function"&&(Pf(n,a,R,o),lt=n.memoizedState),(dt=Xa||wm(n,a,dt,o,ot,lt,z)||e!==null&&e.dependencies!==null&&Fl(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,z),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,z)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=z,o=dt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,nc(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Ns(n,e.child,null,u),n.child=Ns(n,null,a,u)):On(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ga(e,n,u),e}function Wm(e,n,a,o){return Rs(),n.flags|=256,On(e,n,a,o),n.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:Pp()}}function Gf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=pi),e}function Ym(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?qa(n):Za(),(e=Qe)?(e=t_(e,Ti),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Tp(e),a.return=n,n.child=a,Nn=n,Qe=null)):e=null,e===null)throw Va(n);return bh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Za(),u=n.mode,R=ic({mode:"hidden",children:R},u),o=As(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Hf(a),o.childLanes=Gf(e,x,a),n.memoizedState=zf,Po(null,o)):(qa(n),Vf(n,R))}var z=e.memoizedState;if(z!==null&&(R=z.dehydrated,R!==null)){if(h)n.flags&256?(qa(n),n.flags&=-257,n=kf(e,n,a)):n.memoizedState!==null?(Za(),n.child=e.child,n.flags|=128,n=null):(Za(),R=o.fallback,u=n.mode,o=ic({mode:"visible",children:o.children},u),R=As(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ns(n,e.child,null,a),o=n.child,o.memoizedState=Hf(a),o.childLanes=Gf(e,x,a),n.memoizedState=zf,n=Po(null,o));else if(qa(n),bh(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var et=x.dgst;x=et,o=Error(s(419)),o.stack="",o.digest=x,Mo({value:o,source:null,stack:null}),n=kf(e,n,a)}else if(_n||lr(e,n,a,!1),x=(a&e.childLanes)!==0,_n||x){if(x=Xe,x!==null&&(o=ri(x,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,Ts(e,o),ii(x,e,o),Ff;Mh(R)||hc(),n=kf(e,n,a)}else Mh(R)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Qe=Ri(R.nextSibling),Nn=n,Me=!0,Ga=null,Ti=!1,e!==null&&Cp(n,e),n=Vf(n,o.children),n.flags|=4096);return n}return u?(Za(),R=o.fallback,u=n.mode,z=e.child,et=z.sibling,o=ua(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,et!==null?R=ua(et,R):(R=As(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Po(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Hf(a):(u=R.cachePool,u!==null?(z=mn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Pp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Gf(e,x,a),n.memoizedState=zf,Po(e.child,o)):(qa(n),a=e.child,e=a.sibling,a=ua(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Vf(e,n){return n=ic({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ic(e,n){return e=ui(22,e,null,n),e.lanes=0,e}function kf(e,n,a){return Ns(n,e.child,null,a),e=Vf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function qm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),af(e.return,n,a)}function Xf(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function Zm(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=fn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,yt(fn,x),On(e,n,o,a),o=Me?So:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qm(e,a,n);else if(e.tag===19)qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Xf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Xf(n,!0,a,null,h,o);break;case"together":Xf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ga(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ja|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(lr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ua(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ua(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Wf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Fl(e)))}function Fx(e,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),ka(n,mn,e.memoizedState.cache),Rs();break;case 27:case 5:ne(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,gf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ym(e,n,a):(qa(n),e=ga(e,n,a),e!==null?e.sibling:null);qa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(lr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Zm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(fn,fn.current),o)break;return null;case 22:return n.lanes=0,Hm(e,n,a,n.pendingProps);case 24:ka(n,mn,e.memoizedState.cache)}return ga(e,n,a)}function Km(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Wf(e,a)&&(n.flags&128)===0)return _n=!1,Fx(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Me&&(n.flags&1048576)!==0&&Rp(n,So,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Us(n.elementType),n.type=e,typeof e=="function")Ku(e)?(o=Os(e,o),n.tag=1,n=Xm(null,n,e,o,a)):(n.tag=0,n=Bf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===C){n.tag=11,n=Fm(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=Bm(null,n,e,o,a);break t}}throw n=gt(e)||e,Error(s(306,n,""))}}return n;case 0:return Bf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Os(o,n.pendingProps),Xm(e,n,o,u,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,ff(e,n),wo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,ka(n,mn,o),o!==h.cache&&sf(n,[mn],a,!0),Co(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Wm(e,n,o,a);break t}else if(o!==u){u=Mi(Error(s(424)),n),Mo(u),n=Wm(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=Ri(e.firstChild),Nn=n,Me=!0,Ga=null,Ti=!0,a=Hp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),o===u){n=ga(e,n,a);break t}On(e,n,o,a)}n=n.child}return n;case 26:return nc(e,n),e===null?(a=r_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=xc(at.current).createElement(a),o[dn]=n,o[Ln]=e,In(o,a,e),pn(o),n.stateNode=o):n.memoizedState=r_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ne(n),e===null&&Me&&(o=n.stateNode=i_(n.type,n.pendingProps,at.current),Nn=n,Ti=!0,u=Qe,ns(n.type)?(Eh=u,Qe=Ri(o.firstChild)):Qe=u),On(e,n,n.pendingProps.children,a),nc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=Qe)&&(o=dy(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Nn=n,Qe=Ri(o.firstChild),Ti=!1,u=!0):u=!1),u||Va(n)),ne(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,xh(u,h)?o=null:x!==null&&xh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=vf(e,n,Cx,null,null,a),Ko._currentValue=u),nc(e,n),On(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=Qe)&&(a=py(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Nn=n,Qe=null,e=!0):e=!1),e||Va(n)),null;case 13:return Ym(e,n,a);case 4:return Mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ns(n,null,o,a):On(e,n,o,a),n.child;case 11:return Fm(e,n,n.type,n.pendingProps,a);case 7:return On(e,n,n.pendingProps,a),n.child;case 8:return On(e,n,n.pendingProps.children,a),n.child;case 12:return On(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ka(n,n.type,o.value),On(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ws(n),u=Pn(u),o=o(u),n.flags|=1,On(e,n,o,a),n.child;case 14:return Bm(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return Zm(e,n,a);case 31:return Ix(e,n,a);case 22:return Hm(e,n,a,n.pendingProps);case 24:return ws(n),o=Pn(mn),e===null?(u=lf(),u===null&&(u=Xe,h=rf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},uf(n),ka(n,mn,u)):((e.lanes&a)!==0&&(ff(e,n),wo(n,null,null,a),Co()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ka(n,mn,o)):(o=h.cache,ka(n,mn,o),o!==u.cache&&sf(n,[mn],a,!0))),On(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function _a(e){e.flags|=4}function Yf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Mg())e.flags|=8192;else throw Ls=Gl,cf}else e.flags&=-16777217}function Qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f_(n))if(Mg())e.flags|=8192;else throw Ls=Gl,cf}function ac(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?St():536870912,e.lanes|=n,yr|=n)}function Oo(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Bx(e,n,a){var o=n.pendingProps;switch($u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),da(mn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(or(n)?_a(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ef())),Je(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(_a(n),h!==null?(Je(n),Qm(n,h)):(Je(n),Yf(n,u,null,o,a))):h?h!==e.memoizedState?(_a(n),Je(n),Qm(n,h)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&_a(n),Je(n),Yf(n,u,e,o,a)),null;case 27:if(Qt(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&_a(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}e=Rt.current,or(n)?wp(n):(e=i_(u,o,a),n.stateNode=e,_a(n))}return Je(n),null;case 5:if(Qt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&_a(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}if(h=Rt.current,or(n))wp(n);else{var x=xc(at.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[dn]=n,h[Ln]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(In(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&_a(n)}}return Je(n),Yf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&_a(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,or(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[dn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Yg(e.nodeValue,a)),e||Va(n,!0)}else e=xc(e).createTextNode(o),e[dn]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=or(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[dn]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(hi(n),n):(hi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=or(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(hi(n),n):(hi(n),null)}return hi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ac(n,n.updateQueue),Je(n),null);case 4:return zt(),e===null&&ph(n.stateNode.containerInfo),Je(n),null;case 10:return da(n.type),Je(n),null;case 19:if(Z(fn),o=n.memoizedState,o===null)return Je(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Oo(o,!1);else{if(cn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Wl(e),h!==null){for(n.flags|=128,Oo(o,!1),e=h.updateQueue,n.updateQueue=e,ac(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ep(a,e),a=a.sibling;return yt(fn,fn.current&1|2),Me&&fa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Be()>cc&&(n.flags|=128,u=!0,Oo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Wl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ac(n,e),Oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Me)return Je(n),null}else 2*Be()-o.renderingStartTime>cc&&a!==536870912&&(n.flags|=128,u=!0,Oo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Be(),e.sibling=null,a=fn.current,yt(fn,u?a&1|2:a&1),Me&&fa(n,o.treeForkCount),e):(Je(n),null);case 22:case 23:return hi(n),mf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&ac(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Z(Ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),da(mn),Je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function zx(e,n){switch($u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return da(mn),zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(hi(n),n.alternate===null)throw Error(s(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(fn),null;case 4:return zt(),null;case 10:return da(n.type),null;case 22:case 23:return hi(n),mf(),e!==null&&Z(Ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return da(mn),null;case 25:return null;default:return null}}function Jm(e,n){switch($u(n),n.tag){case 3:da(mn),zt();break;case 26:case 27:case 5:Qt(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&hi(n);break;case 13:hi(n);break;case 19:Z(fn);break;case 10:da(n.type);break;case 22:case 23:hi(n),mf(),e!==null&&Z(Ds);break;case 24:da(mn)}}function Io(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){Ie(n,n.return,R)}}function Ka(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var z=a,et=R;try{et()}catch(dt){Ie(u,z,dt)}}}o=o.next}while(o!==h)}}catch(dt){Ie(n,n.return,dt)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Vp(n,a)}catch(o){Ie(e,e.return,o)}}}function $m(e,n,a){a.props=Os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,n,o)}}function Fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ie(e,n,u)}}function Zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ie(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(e,n,u)}else a.current=null}function tg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ie(e,e.return,u)}}function qf(e,n,a){try{var o=e.stateNode;oy(o,e.type,a,n),o[Ln]=n}catch(u){Ie(e,e.return,u)}}function eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ns(e.type)||e.tag===4}function Zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ns(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=la));else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Kf(e,n,a),e=e.sibling;e!==null;)Kf(e,n,a),e=e.sibling}function sc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ns(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(sc(e,n,a),e=e.sibling;e!==null;)sc(e,n,a),e=e.sibling}function ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);In(n,o,a),n[dn]=e,n[Ln]=a}catch(h){Ie(e,e.return,h)}}var va=!1,vn=!1,Qf=!1,ig=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function Hx(e,n){if(e=e.containerInfo,_h=Ac,e=mp(e),Vu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,R=-1,z=-1,et=0,dt=0,vt=e,ot=null;e:for(;;){for(var lt;vt!==a||u!==0&&vt.nodeType!==3||(R=x+u),vt!==h||o!==0&&vt.nodeType!==3||(z=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)ot=vt,vt=lt;for(;;){if(vt===e)break e;if(ot===a&&++et===u&&(R=x),ot===h&&++dt===o&&(z=x),(lt=vt.nextSibling)!==null)break;vt=ot,ot=vt.parentNode}vt=lt}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(vh={focusedElem:e,selectionRange:a},Ac=!1,Cn=n;Cn!==null;)if(n=Cn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Cn=e;else for(;Cn!==null;){switch(n=Cn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Xt=Os(a.type,u);e=o.getSnapshotBeforeUpdate(Xt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ie(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Sh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Cn=e;break}Cn=n.return}}function ag(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),o&4&&Io(5,a);break;case 1:if(ya(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ie(a,a.return,x)}else{var u=Os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(a,a.return,x)}}o&64&&jm(a),o&512&&Fo(a,a.return);break;case 3:if(ya(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(e,n)}catch(x){Ie(a,a.return,x)}}break;case 27:n===null&&o&4&&ng(a);case 26:case 5:ya(e,a),n===null&&o&4&&tg(a),o&512&&Fo(a,a.return);break;case 12:ya(e,a);break;case 31:ya(e,a),o&4&&og(e,a);break;case 13:ya(e,a),o&4&&lg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Kx.bind(null,a),my(e,a))));break;case 22:if(o=a.memoizedState!==null||va,!o){n=n!==null&&n.memoizedState!==null||vn,u=va;var h=vn;va=o,(vn=n)&&!h?Sa(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),va=u,vn=h}break;case 30:break;default:ya(e,a)}}function sg(e){var n=e.alternate;n!==null&&(e.alternate=null,sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ia(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,$n=!1;function xa(e,n,a){for(a=a.child;a!==null;)rg(e,n,a),a=a.sibling}function rg(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:vn||Zi(a,n),xa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||Zi(a,n);var o=en,u=$n;ns(a.type)&&(en=a.stateNode,$n=!1),xa(e,n,a),Yo(a.stateNode),en=o,$n=u;break;case 5:vn||Zi(a,n);case 6:if(o=en,u=$n,en=null,xa(e,n,a),en=o,$n=u,en!==null)if($n)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(h){Ie(a,n,h)}else try{en.removeChild(a.stateNode)}catch(h){Ie(a,n,h)}break;case 18:en!==null&&($n?(e=en,jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cr(e)):jg(en,a.stateNode));break;case 4:o=en,u=$n,en=a.stateNode.containerInfo,$n=!0,xa(e,n,a),en=o,$n=u;break;case 0:case 11:case 14:case 15:Ka(2,a,n),vn||Ka(4,a,n),xa(e,n,a);break;case 1:vn||(Zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&$m(a,n,o)),xa(e,n,a);break;case 21:xa(e,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,xa(e,n,a),vn=o;break;default:xa(e,n,a)}}function og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cr(e)}catch(a){Ie(n,n.return,a)}}}function lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cr(e)}catch(a){Ie(n,n.return,a)}}function Gx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ig),n;default:throw Error(s(435,e.tag))}}function rc(e,n){var a=Gx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Qx.bind(null,e,o);o.then(u,u)}})}function ti(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,R=x;t:for(;R!==null;){switch(R.tag){case 27:if(ns(R.type)){en=R.stateNode,$n=!1;break t}break;case 5:en=R.stateNode,$n=!1;break t;case 3:case 4:en=R.stateNode.containerInfo,$n=!0;break t}R=R.return}if(en===null)throw Error(s(160));rg(h,x,u),en=null,$n=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)cg(n,e),n=n.sibling}var Pi=null;function cg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(n,e),ei(e),o&4&&(Ka(3,e,e.return),Io(3,e),Ka(5,e,e.return));break;case 1:ti(n,e),ei(e),o&512&&(vn||a===null||Zi(a,a.return)),o&64&&va&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Pi;if(ti(n,e),ei(e),o&512&&(vn||a===null||Zi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Oa]||h[dn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),In(h,o,a),h[dn]=e,pn(h),o=h;break t;case"link":var x=c_("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(h=x[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}h=u.createElement(o),In(h,o,a),u.head.appendChild(h);break;case"meta":if(x=c_("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(h=x[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}h=u.createElement(o),In(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[dn]=e,pn(h),o=h}e.stateNode=o}else u_(u,e.type,e.stateNode);else e.stateNode=l_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?u_(u,e.type,e.stateNode):l_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&qf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ti(n,e),ei(e),o&512&&(vn||a===null||Zi(a,a.return)),a!==null&&o&4&&qf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ti(n,e),ei(e),o&512&&(vn||a===null||Zi(a,a.return)),e.flags&32){u=e.stateNode;try{li(u,"")}catch(Xt){Ie(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,qf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Qf=!0);break;case 6:if(ti(n,e),ei(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Ie(e,e.return,Xt)}}break;case 3:if(Mc=null,u=Pi,Pi=yc(n.containerInfo),ti(n,e),Pi=u,ei(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cr(n.containerInfo)}catch(Xt){Ie(e,e.return,Xt)}Qf&&(Qf=!1,ug(e));break;case 4:o=Pi,Pi=yc(e.stateNode.containerInfo),ti(n,e),ei(e),Pi=o;break;case 12:ti(n,e),ei(e);break;case 31:ti(n,e),ei(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 13:ti(n,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lc=Be()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,et=va,dt=vn;if(va=et||u,vn=dt||z,ti(n,e),vn=dt,va=et,ei(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||va||vn||Is(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(h=z.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=z.stateNode;var vt=z.memoizedProps.style,ot=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Xt){Ie(z,z.return,Xt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Xt){Ie(z,z.return,Xt)}}}else if(n.tag===18){if(a===null){z=n;try{var lt=z.stateNode;u?$g(lt,!0):$g(z.stateNode,!1)}catch(Xt){Ie(z,z.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,rc(e,a))));break;case 19:ti(n,e),ei(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 30:break;case 21:break;default:ti(n,e),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(eg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Zf(e);sc(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(li(x,""),a.flags&=-33);var R=Zf(e);sc(e,R,x);break;case 3:case 4:var z=a.stateNode.containerInfo,et=Zf(e);Kf(e,et,z);break;default:throw Error(s(161))}}catch(dt){Ie(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(e,n.alternate,n),n=n.sibling}function Is(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ka(4,n,n.return),Is(n);break;case 1:Zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),Is(n);break;case 27:Yo(n.stateNode);case 26:case 5:Zi(n,n.return),Is(n);break;case 22:n.memoizedState===null&&Is(n);break;case 30:Is(n);break;default:Is(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:Sa(u,h,a),Io(4,h);break;case 1:if(Sa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ie(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Gp(z[u],R)}catch(et){Ie(o,o.return,et)}}a&&x&64&&jm(h),Fo(h,h.return);break;case 27:ng(h);case 26:case 5:Sa(u,h,a),a&&o===null&&x&4&&tg(h),Fo(h,h.return);break;case 12:Sa(u,h,a);break;case 31:Sa(u,h,a),a&&x&4&&og(u,h);break;case 13:Sa(u,h,a),a&&x&4&&lg(u,h);break;case 22:h.memoizedState===null&&Sa(u,h,a),Fo(h,h.return);break;case 30:break;default:Sa(u,h,a)}n=n.sibling}}function Jf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&bo(a))}function jf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&bo(e))}function Oi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(e,n,a,o),n=n.sibling}function fg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n,a,o),u&2048&&Io(9,n);break;case 1:Oi(e,n,a,o);break;case 3:Oi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&bo(e)));break;case 12:if(u&2048){Oi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,R=h.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Ie(n,n.return,z)}}else Oi(e,n,a,o);break;case 31:Oi(e,n,a,o);break;case 13:Oi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?Oi(e,n,a,o):Bo(e,n):h._visibility&2?Oi(e,n,a,o):(h._visibility|=2,_r(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Jf(x,n);break;case 24:Oi(e,n,a,o),u&2048&&jf(n.alternate,n);break;default:Oi(e,n,a,o)}}function _r(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,R=a,z=o,et=x.flags;switch(x.tag){case 0:case 11:case 15:_r(h,x,R,z,u),Io(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?_r(h,x,R,z,u):Bo(h,x):(dt._visibility|=2,_r(h,x,R,z,u)),u&&et&2048&&Jf(x.alternate,x);break;case 24:_r(h,x,R,z,u),u&&et&2048&&jf(x.alternate,x);break;default:_r(h,x,R,z,u)}n=n.sibling}}function Bo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Bo(a,o),u&2048&&Jf(o.alternate,o);break;case 24:Bo(a,o),u&2048&&jf(o.alternate,o);break;default:Bo(a,o)}n=n.sibling}}var zo=8192;function vr(e,n,a){if(e.subtreeFlags&zo)for(e=e.child;e!==null;)hg(e,n,a),e=e.sibling}function hg(e,n,a){switch(e.tag){case 26:vr(e,n,a),e.flags&zo&&e.memoizedState!==null&&Ry(a,Pi,e.memoizedState,e.memoizedProps);break;case 5:vr(e,n,a);break;case 3:case 4:var o=Pi;Pi=yc(e.stateNode.containerInfo),vr(e,n,a),Pi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=zo,zo=16777216,vr(e,n,a),zo=o):vr(e,n,a));break;default:vr(e,n,a)}}function dg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Cn=o,mg(o,e)}dg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 0:case 11:case 15:Ho(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:Ho(e);break;case 12:Ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,oc(e)):Ho(e);break;default:Ho(e)}}function oc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Cn=o,mg(o,e)}dg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ka(8,n,n.return),oc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,oc(n));break;default:oc(n)}e=e.sibling}}function mg(e,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:Ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:bo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Cn=o;else t:for(a=e;Cn!==null;){o=Cn;var u=o.sibling,h=o.return;if(sg(o),o===a){Cn=null;break t}if(u!==null){u.return=h,Cn=u;break t}Cn=h}}}var Vx={getCacheForType:function(e){var n=Pn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Pn(mn).controller.signal}},kx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Xe=null,me=null,_e=0,Oe=0,di=null,Qa=!1,xr=!1,$f=!1,Ma=0,cn=0,Ja=0,Fs=0,th=0,pi=0,yr=0,Go=null,ni=null,eh=!1,lc=0,gg=0,cc=1/0,uc=null,ja=null,Mn=0,$a=null,Sr=null,ba=0,nh=0,ih=null,_g=null,Vo=0,ah=null;function mi(){return(Ce&2)!==0&&_e!==0?_e&-_e:I.T!==null?uh():uo()}function vg(){if(pi===0)if((_e&536870912)===0||Me){var e=ie;ie<<=1,(ie&3932160)===0&&(ie=262144),pi=e}else pi=536870912;return e=fi.current,e!==null&&(e.flags|=32),pi}function ii(e,n,a){(e===Xe&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(Mr(e,0),ts(e,_e,pi,!1)),Gt(e,a),((Ce&2)===0||e!==Xe)&&(e===Xe&&((Ce&2)===0&&(Fs|=a),cn===4&&ts(e,_e,pi,!1)),Ki(e))}function xg(e,n,a){if((Ce&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?Yx(e,n):rh(e,n,!0),h=o;do{if(u===0){xr&&!o&&ts(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Xx(a)){u=rh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;u=Go;var z=R.current.memoizedState.isDehydrated;if(z&&(Mr(R,x).flags|=256),x=rh(R,x,!1),x!==2){if($f&&!z){R.errorRecoveryDisabledLanes|=h,Fs|=h,u=4;break t}h=ni,ni=u,h!==null&&(ni===null?ni=h:ni.push.apply(ni,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){Mr(e,0),ts(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ts(o,n,pi,!Qa);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=lc+300-Be(),10<u)){if(ts(o,n,pi,!Qa),mt(o,0,!0)!==0)break t;ba=n,o.timeoutHandle=Qg(yg.bind(null,o,a,ni,uc,eh,n,pi,Fs,yr,Qa,h,"Throttled",-0,0),u);break t}yg(o,a,ni,uc,eh,n,pi,Fs,yr,Qa,h,null,-0,0)}}break}while(!0);Ki(e)}function yg(e,n,a,o,u,h,x,R,z,et,dt,vt,ot,lt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},hg(n,h,vt);var Xt=(h&62914560)===h?lc-Be():(h&4194048)===h?gg-Be():0;if(Xt=Cy(vt,Xt),Xt!==null){ba=h,e.cancelPendingCommit=Xt(Cg.bind(null,e,n,h,a,o,u,x,R,z,dt,vt,null,ot,lt)),ts(e,h,x,!et);return}}Cg(e,n,h,a,o,u,x,R,z)}function Xx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ci(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ts(e,n,a,o){n&=~th,n&=~Fs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Ft(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&Ue(e,a,n)}function fc(){return(Ce&6)===0?(ko(0),!1):!0}function sh(){if(me!==null){if(Oe===0)var e=me.return;else e=me,ha=Cs=null,Sf(e),hr=null,To=0,e=me;for(;e!==null;)Jm(e.alternate,e),e=e.return;me=null}}function Mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,uy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ba=0,sh(),Xe=e,me=a=ua(e.current,null),_e=n,Oe=0,di=null,Qa=!1,xr=Ct(e,n),$f=!1,yr=pi=th=Fs=Ja=cn=0,ni=Go=null,eh=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),h=1<<u;n|=e[u],o&=~h}return Ma=n,Ll(),a}function Sg(e,n){le=null,I.H=No,n===fr||n===Hl?(n=Fp(),Oe=3):n===cf?(n=Fp(),Oe=4):Oe=n===Ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,me===null&&(cn=1,tc(e,Mi(n,e.current)))}function Mg(){var e=fi.current;return e===null?!0:(_e&4194048)===_e?Ai===null:(_e&62914560)===_e||(_e&536870912)!==0?e===Ai:!1}function bg(){var e=I.H;return I.H=No,e===null?No:e}function Eg(){var e=I.A;return I.A=Vx,e}function hc(){cn=4,Qa||(_e&4194048)!==_e&&fi.current!==null||(xr=!0),(Ja&134217727)===0&&(Fs&134217727)===0||Xe===null||ts(Xe,_e,pi,!1)}function rh(e,n,a){var o=Ce;Ce|=2;var u=bg(),h=Eg();(Xe!==e||_e!==n)&&(uc=null,Mr(e,n)),n=!1;var x=cn;t:do try{if(Oe!==0&&me!==null){var R=me,z=di;switch(Oe){case 8:sh(),x=6;break t;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var et=Oe;if(Oe=0,di=null,br(e,R,z,et),a&&xr){x=0;break t}break;default:et=Oe,Oe=0,di=null,br(e,R,z,et)}}Wx(),x=cn;break}catch(dt){Sg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ha=Cs=null,Ce=o,I.H=u,I.A=h,me===null&&(Xe=null,_e=0,Ll()),x}function Wx(){for(;me!==null;)Tg(me)}function Yx(e,n){var a=Ce;Ce|=2;var o=bg(),u=Eg();Xe!==e||_e!==n?(uc=null,cc=Be()+500,Mr(e,n)):xr=Ct(e,n);t:do try{if(Oe!==0&&me!==null){n=me;var h=di;e:switch(Oe){case 1:Oe=0,di=null,br(e,n,h,1);break;case 2:case 9:if(Op(h)){Oe=0,di=null,Ag(n);break}n=function(){Oe!==2&&Oe!==9||Xe!==e||(Oe=7),Ki(e)},h.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Op(h)?(Oe=0,di=null,Ag(n)):(Oe=0,di=null,br(e,n,h,7));break;case 5:var x=null;switch(me.tag){case 26:x=me.memoizedState;case 5:case 27:var R=me;if(x?f_(x):R.stateNode.complete){Oe=0,di=null;var z=R.sibling;if(z!==null)me=z;else{var et=R.return;et!==null?(me=et,dc(et)):me=null}break e}}Oe=0,di=null,br(e,n,h,5);break;case 6:Oe=0,di=null,br(e,n,h,6);break;case 8:sh(),cn=6;break t;default:throw Error(s(462))}}qx();break}catch(dt){Sg(e,dt)}while(!0);return ha=Cs=null,I.H=o,I.A=u,Ce=a,me!==null?0:(Xe=null,_e=0,Ll(),cn)}function qx(){for(;me!==null&&!on();)Tg(me)}function Tg(e){var n=Km(e.alternate,e,Ma);e.memoizedProps=e.pendingProps,n===null?dc(e):me=n}function Ag(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=km(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=km(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Sf(n);default:Jm(a,n),n=me=Ep(n,Ma),n=Km(a,n,Ma)}e.memoizedProps=e.pendingProps,n===null?dc(e):me=n}function br(e,n,a,o){ha=Cs=null,Sf(n),hr=null,To=0;var u=n.return;try{if(Ox(e,u,n,a,_e)){cn=1,tc(e,Mi(a,e.current)),me=null;return}}catch(h){if(u!==null)throw me=u,h;cn=1,tc(e,Mi(a,e.current)),me=null;return}n.flags&32768?(Me||o===1?e=!0:xr||(_e&536870912)!==0?e=!1:(Qa=e=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Rg(n,e)):dc(n)}function dc(e){var n=e;do{if((n.flags&32768)!==0){Rg(n,Qa);return}e=n.return;var a=Bx(n.alternate,n,Ma);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);cn===0&&(cn=5)}function Rg(e,n){do{var a=zx(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);cn=6,me=null}function Cg(e,n,a,o,u,h,x,R,z){e.cancelPendingCommit=null;do pc();while(Mn!==0);if((Ce&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=qu,je(e,a,h,x,R,z),e===Xe&&(me=Xe=null,_e=0),Sr=n,$a=e,ba=a,nh=h,ih=u,_g=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jx(Q,function(){return Ng(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=H.p,H.p=2,x=Ce,Ce|=4;try{Hx(e,n,a)}finally{Ce=x,H.p=u,I.T=o}}Mn=1,wg(),Dg(),Ug()}}function wg(){if(Mn===1){Mn=0;var e=$a,n=Sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=Ce;Ce|=4;try{cg(n,e);var h=vh,x=mp(e.containerInfo),R=h.focusedElem,z=h.selectionRange;if(x!==R&&R&&R.ownerDocument&&pp(R.ownerDocument.documentElement,R)){if(z!==null&&Vu(R)){var et=z.start,dt=z.end;if(dt===void 0&&(dt=et),"selectionStart"in R)R.selectionStart=et,R.selectionEnd=Math.min(dt,R.value.length);else{var vt=R.ownerDocument||document,ot=vt&&vt.defaultView||window;if(ot.getSelection){var lt=ot.getSelection(),Xt=R.textContent.length,te=Math.min(z.start,Xt),Ge=z.end===void 0?te:Math.min(z.end,Xt);!lt.extend&&te>Ge&&(x=Ge,Ge=te,te=x);var K=dp(R,te),V=dp(R,Ge);if(K&&V&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var tt=vt.createRange();tt.setStart(K.node,K.offset),lt.removeAllRanges(),te>Ge?(lt.addRange(tt),lt.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),lt.addRange(tt))}}}}for(vt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var _t=vt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Ac=!!_h,vh=_h=null}finally{Ce=u,H.p=o,I.T=a}}e.current=n,Mn=2}}function Dg(){if(Mn===2){Mn=0;var e=$a,n=Sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=Ce;Ce|=4;try{ag(e,n.alternate,n)}finally{Ce=u,H.p=o,I.T=a}}Mn=3}}function Ug(){if(Mn===4||Mn===3){Mn=0,Y();var e=$a,n=Sr,a=ba,o=_g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Sr=$a=null,Lg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ja=null),co(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=H.p,H.p=2,I.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var R=o[x];h(R.value,{componentStack:R.stack})}}finally{I.T=n,H.p=u}}(ba&3)!==0&&pc(),Ki(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===ah?Vo++:(Vo=0,ah=e):Vo=0,ko(0)}}function Lg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,bo(n)))}function pc(){return wg(),Dg(),Ug(),Ng()}function Ng(){if(Mn!==5)return!1;var e=$a,n=nh;nh=0;var a=co(ba),o=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=ih,ih=null;var h=$a,x=ba;if(Mn=0,Sr=$a=null,ba=0,(Ce&6)!==0)throw Error(s(331));var R=Ce;if(Ce|=4,pg(h.current),fg(h,h.current,x,a),Ce=R,ko(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ut,h)}catch{}return!0}finally{H.p=u,I.T=o,Lg(e,n)}}function Pg(e,n,a){n=Mi(a,n),n=If(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(Gt(e,2),Ki(e))}function Ie(e,n,a){if(e.tag===3)Pg(e,e,a);else for(;n!==null;){if(n.tag===3){Pg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ja===null||!ja.has(o))){e=Mi(a,e),a=Om(2),o=Ya(n,a,2),o!==null&&(Im(a,o,n,e),Gt(o,2),Ki(o));break}}n=n.return}}function oh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new kx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||($f=!0,u.add(a),e=Zx.bind(null,e,n,a),n.then(e,e))}function Zx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(_e&a)===a&&(cn===4||cn===3&&(_e&62914560)===_e&&300>Be()-lc?(Ce&2)===0&&Mr(e,0):th|=a,yr===_e&&(yr=0)),Ki(e)}function Og(e,n){n===0&&(n=St()),e=Ts(e,n),e!==null&&(Gt(e,n),Ki(e))}function Kx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Og(e,a)}function Qx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Og(e,a)}function Jx(e,n){return un(e,n)}var mc=null,Er=null,lh=!1,gc=!1,ch=!1,es=0;function Ki(e){e!==Er&&e.next===null&&(Er===null?mc=Er=e:Er=Er.next=e),gc=!0,lh||(lh=!0,$x())}function ko(e,n){if(!ch&&gc){ch=!0;do for(var a=!1,o=mc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Ft(42|e)+1)-1,h&=u&~(x&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,zg(o,h))}else h=_e,h=mt(o,o===Xe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ct(o,h)||(a=!0,zg(o,h));o=o.next}while(a);ch=!1}}function jx(){Ig()}function Ig(){gc=lh=!1;var e=0;es!==0&&cy()&&(e=es);for(var n=Be(),a=null,o=mc;o!==null;){var u=o.next,h=Fg(o,n);h===0?(o.next=null,a===null?mc=u:a.next=u,u===null&&(Er=a)):(a=o,(e!==0||(h&3)!==0)&&(gc=!0)),o=u}Mn!==0&&Mn!==5||ko(e),es!==0&&(es=0)}function Fg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Ft(h),R=1<<x,z=u[x];z===-1?((R&a)===0||(R&o)!==0)&&(u[x]=It(R,n)):z<=n&&(e.expiredLanes|=R),h&=~R}if(n=Xe,a=_e,a=mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ye(o),co(a)){case 2:case 8:a=E;break;case 32:a=Q;break;case 268435456:a=ft;break;default:a=Q}return o=Bg.bind(null,e),a=un(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ye(o),e.callbackPriority=2,e.callbackNode=null,2}function Bg(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(pc()&&e.callbackNode!==a)return null;var o=_e;return o=mt(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(xg(e,o,n),Fg(e,Be()),e.callbackNode!=null&&e.callbackNode===a?Bg.bind(null,e):null)}function zg(e,n){if(pc())return null;xg(e,n,!0)}function $x(){fy(function(){(Ce&6)!==0?un(D,jx):Ig()})}function uh(){if(es===0){var e=cr;e===0&&(e=Jt,Jt<<=1,(Jt&261888)===0&&(Jt=256)),es=e}return es}function Hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ss(""+e)}function Gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ty(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Hg((u[Ln]||null).action),x=o.submitter;x&&(n=(n=x[Ln]||null)?Hg(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var R=new Cl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(es!==0){var z=x?Gg(u,x):new FormData(u);Df(a,{pending:!0,data:z,method:u.method,action:h},null,z)}}else typeof h=="function"&&(R.preventDefault(),z=x?Gg(u,x):new FormData(u),Df(a,{pending:!0,data:z,method:u.method,action:h},h,z))},currentTarget:u}]})}}for(var fh=0;fh<Yu.length;fh++){var hh=Yu[fh],ey=hh.toLowerCase(),ny=hh[0].toUpperCase()+hh.slice(1);Ni(ey,"on"+ny)}Ni(vp,"onAnimationEnd"),Ni(xp,"onAnimationIteration"),Ni(yp,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(vx,"onTransitionRun"),Ni(xx,"onTransitionStart"),Ni(yx,"onTransitionCancel"),Ni(Sp,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),X("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),X("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),X("onBeforeInput",["compositionend","keypress","textInput","paste"]),X("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function Vg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],z=R.instance,et=R.currentTarget;if(R=R.listener,z!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=et;try{h(u)}catch(dt){Ul(dt)}u.currentTarget=null,h=z}else for(x=0;x<o.length;x++){if(R=o[x],z=R.instance,et=R.currentTarget,R=R.listener,z!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=et;try{h(u)}catch(dt){Ul(dt)}u.currentTarget=null,h=z}}}}function ge(e,n){var a=n[vs];a===void 0&&(a=n[vs]=new Set);var o=e+"__bubble";a.has(o)||(kg(n,e,2,!1),a.add(o))}function dh(e,n,a){var o=0;n&&(o|=4),kg(a,e,o,n)}var _c="_reactListening"+Math.random().toString(36).slice(2);function ph(e){if(!e[_c]){e[_c]=!0,El.forEach(function(a){a!=="selectionchange"&&(iy.has(a)||dh(a,!1,e),dh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_c]||(n[_c]=!0,dh("selectionchange",!1,n))}}function kg(e,n,a,o){switch(v_(n)){case 2:var u=Uy;break;case 8:u=Ly;break;default:u=wh}a=u.bind(null,n,a,e),u=void 0,!Nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function mh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=ra(R),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){o=h=x;continue t}R=R.parentNode}}o=o.return}Z0(function(){var et=h,dt=Uu(a),vt=[];t:{var ot=Mp.get(e);if(ot!==void 0){var lt=Cl,Xt=e;switch(e){case"keypress":if(Al(a)===0)break t;case"keydown":case"keyup":lt=Qv;break;case"focusin":Xt="focus",lt=Fu;break;case"focusout":Xt="blur",lt=Fu;break;case"beforeblur":case"afterblur":lt=Fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=J0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=$v;break;case vp:case xp:case yp:lt=Gv;break;case Sp:lt=ex;break;case"scroll":case"scrollend":lt=Iv;break;case"wheel":lt=ix;break;case"copy":case"cut":case"paste":lt=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=$0;break;case"toggle":case"beforetoggle":lt=sx}var te=(n&4)!==0,Ge=!te&&(e==="scroll"||e==="scrollend"),K=te?ot!==null?ot+"Capture":null:ot;te=[];for(var V=et,tt;V!==null;){var _t=V;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||K===null||(_t=fo(V,K),_t!=null&&te.push(Wo(V,_t,tt))),Ge)break;V=V.return}0<te.length&&(ot=new lt(ot,Xt,null,a,dt),vt.push({event:ot,listeners:te}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",ot&&a!==Du&&(Xt=a.relatedTarget||a.fromElement)&&(ra(Xt)||Xt[Jn]))break t;if((lt||ot)&&(ot=dt.window===dt?dt:(ot=dt.ownerDocument)?ot.defaultView||ot.parentWindow:window,lt?(Xt=a.relatedTarget||a.toElement,lt=et,Xt=Xt?ra(Xt):null,Xt!==null&&(Ge=c(Xt),te=Xt.tag,Xt!==Ge||te!==5&&te!==27&&te!==6)&&(Xt=null)):(lt=null,Xt=et),lt!==Xt)){if(te=J0,_t="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=$0,_t="onPointerLeave",K="onPointerEnter",V="pointer"),Ge=lt==null?ot:ys(lt),tt=Xt==null?ot:ys(Xt),ot=new te(_t,V+"leave",lt,a,dt),ot.target=Ge,ot.relatedTarget=tt,_t=null,ra(dt)===et&&(te=new te(K,V+"enter",Xt,a,dt),te.target=tt,te.relatedTarget=Ge,_t=te),Ge=_t,lt&&Xt)e:{for(te=ay,K=lt,V=Xt,tt=0,_t=K;_t;_t=te(_t))tt++;_t=0;for(var $t=V;$t;$t=te($t))_t++;for(;0<tt-_t;)K=te(K),tt--;for(;0<_t-tt;)V=te(V),_t--;for(;tt--;){if(K===V||V!==null&&K===V.alternate){te=K;break e}K=te(K),V=te(V)}te=null}else te=null;lt!==null&&Xg(vt,ot,lt,te,!1),Xt!==null&&Ge!==null&&Xg(vt,Ge,Xt,te,!0)}}t:{if(ot=et?ys(et):window,lt=ot.nodeName&&ot.nodeName.toLowerCase(),lt==="select"||lt==="input"&&ot.type==="file")var Te=op;else if(sp(ot))if(lp)Te=mx;else{Te=dx;var Yt=hx}else lt=ot.nodeName,!lt||lt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?et&&we(et.elementType)&&(Te=op):Te=px;if(Te&&(Te=Te(e,et))){rp(vt,Te,a,dt);break t}Yt&&Yt(e,ot,et),e==="focusout"&&et&&ot.type==="number"&&et.memoizedProps.value!=null&&pe(ot,"number",ot.value)}switch(Yt=et?ys(et):window,e){case"focusin":(sp(Yt)||Yt.contentEditable==="true")&&(er=Yt,ku=et,yo=null);break;case"focusout":yo=ku=er=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,gp(vt,a,dt);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":gp(vt,a,dt)}var ce;if(zu)t:{switch(e){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else tr?ip(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(tp&&a.locale!=="ko"&&(tr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&tr&&(ce=K0()):(za=dt,Pu="value"in za?za.value:za.textContent,tr=!0)),Yt=vc(et,ve),0<Yt.length&&(ve=new j0(ve,e,null,a,dt),vt.push({event:ve,listeners:Yt}),ce?ve.data=ce:(ce=ap(a),ce!==null&&(ve.data=ce)))),(ce=ox?lx(e,a):cx(e,a))&&(ve=vc(et,"onBeforeInput"),0<ve.length&&(Yt=new j0("onBeforeInput","beforeinput",null,a,dt),vt.push({event:Yt,listeners:ve}),Yt.data=ce)),ty(vt,e,et,a,dt)}Vg(vt,n)})}function Wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function vc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=fo(e,a),u!=null&&o.unshift(Wo(e,u,h)),u=fo(e,n),u!=null&&o.push(Wo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ay(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xg(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var R=a,z=R.alternate,et=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||et===null||(z=et,u?(et=fo(a,h),et!=null&&x.unshift(Wo(a,et,z))):u||(et=fo(a,h),et!=null&&x.push(Wo(a,et,z)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var sy=/\r\n?/g,ry=/\u0000|\uFFFD/g;function Wg(e){return(typeof e=="string"?e:""+e).replace(sy,`
`).replace(ry,"")}function Yg(e,n){return n=Wg(n),Wg(e)===n}function He(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||li(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&li(e,""+o);break;case"className":kt(e,"class",o);break;case"tabIndex":kt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(e,a,o);break;case"style":Li(e,o,h);break;case"data":if(n!=="object"){kt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ss(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ss(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=la);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ss(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ut(e,"popover",o);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ut(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wi.get(a)||a,Ut(e,a,o))}}function gh(e,n,a,o,u,h){switch(a){case"style":Li(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?li(e,o):(typeof o=="number"||typeof o=="bigint")&&li(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Ln]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ut(e,a,o)}}}function In(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,h,x,a,null)}}u&&He(e,n,"srcSet",a.srcSet,a,null),o&&He(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var R=h=x=u=null,z=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":x=dt;break;case"checked":z=dt;break;case"defaultChecked":et=dt;break;case"value":h=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:He(e,n,o,dt,a,null)}}zn(e,h,R,z,et,x,u,!1);return;case"select":ge("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:He(e,n,u,R,a,null)}n=h,a=x,e.multiple=!!o,n!=null?Sn(e,!!o,n,!1):a!=null&&Sn(e,!!o,a,!0);return;case"textarea":ge("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:He(e,n,x,R,a,null)}Ui(e,o,u,h);return;case"option":for(z in a)a.hasOwnProperty(z)&&(o=a[z],o!=null)&&(z==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,n,z,o,a,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<Xo.length;o++)ge(Xo[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,et,o,a,null)}return;default:if(we(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&gh(e,n,dt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&He(e,n,R,o,a,null))}function oy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,R=null,z=null,et=null,dt=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":z=vt;default:o.hasOwnProperty(lt)||He(e,n,lt,null,o,vt)}}for(var ot in o){var lt=o[ot];if(vt=a[ot],o.hasOwnProperty(ot)&&(lt!=null||vt!=null))switch(ot){case"type":h=lt;break;case"name":u=lt;break;case"checked":et=lt;break;case"defaultChecked":dt=lt;break;case"value":x=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==vt&&He(e,n,ot,lt,o,vt)}}Bt(e,x,R,z,et,dt,h,u);return;case"select":lt=x=R=ot=null;for(h in a)if(z=a[h],a.hasOwnProperty(h)&&z!=null)switch(h){case"value":break;case"multiple":lt=z;default:o.hasOwnProperty(h)||He(e,n,h,null,o,z)}for(u in o)if(h=o[u],z=a[u],o.hasOwnProperty(u)&&(h!=null||z!=null))switch(u){case"value":ot=h;break;case"defaultValue":R=h;break;case"multiple":x=h;default:h!==z&&He(e,n,u,h,o,z)}n=R,a=x,o=lt,ot!=null?Sn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?Sn(e,!!a,n,!0):Sn(e,!!a,a?[]:"",!1));return;case"textarea":lt=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:He(e,n,R,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":ot=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&He(e,n,x,u,o,h)}oi(e,ot,lt);return;case"option":for(var Xt in a)ot=a[Xt],a.hasOwnProperty(Xt)&&ot!=null&&!o.hasOwnProperty(Xt)&&(Xt==="selected"?e.selected=!1:He(e,n,Xt,null,o,ot));for(z in o)ot=o[z],lt=a[z],o.hasOwnProperty(z)&&ot!==lt&&(ot!=null||lt!=null)&&(z==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":He(e,n,z,ot,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)ot=a[te],a.hasOwnProperty(te)&&ot!=null&&!o.hasOwnProperty(te)&&He(e,n,te,null,o,ot);for(et in o)if(ot=o[et],lt=a[et],o.hasOwnProperty(et)&&ot!==lt&&(ot!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:He(e,n,et,ot,o,lt)}return;default:if(we(n)){for(var Ge in a)ot=a[Ge],a.hasOwnProperty(Ge)&&ot!==void 0&&!o.hasOwnProperty(Ge)&&gh(e,n,Ge,void 0,o,ot);for(dt in o)ot=o[dt],lt=a[dt],!o.hasOwnProperty(dt)||ot===lt||ot===void 0&&lt===void 0||gh(e,n,dt,ot,o,lt);return}}for(var K in a)ot=a[K],a.hasOwnProperty(K)&&ot!=null&&!o.hasOwnProperty(K)&&He(e,n,K,null,o,ot);for(vt in o)ot=o[vt],lt=a[vt],!o.hasOwnProperty(vt)||ot===lt||ot==null&&lt==null||He(e,n,vt,ot,o,lt)}function qg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ly(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,R=u.duration;if(h&&R&&qg(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],et=z.startTime;if(et>R)break;var dt=z.transferSize,vt=z.initiatorType;dt&&qg(vt)&&(z=z.responseEnd,x+=dt*(z<R?1:(R-et)/(z-et)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _h=null,vh=null;function xc(e){return e.nodeType===9?e:e.ownerDocument}function Zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function xh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yh=null;function cy(){var e=window.event;return e&&e.type==="popstate"?e===yh?!1:(yh=e,!0):(yh=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(e){return Jg.resolve(null).then(e).catch(hy)}:Qg;function hy(e){setTimeout(function(){throw e})}function ns(e){return e==="head"}function jg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Cr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Yo(a);for(var h=a.firstChild;h;){var x=h.nextSibling,R=h.nodeName;h[Oa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Yo(e.ownerDocument.body);a=u}while(a);Cr(n)}function $g(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Sh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sh(a),Ia(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Oa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function py(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function t_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function Mh(e){return e.data==="$?"||e.data==="$~"}function bh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function my(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Eh=null;function e_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function n_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function i_(e,n,a){switch(n=xc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ia(e)}var Ci=new Map,a_=new Set;function yc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=H.d;H.d={f:gy,r:_y,D:vy,C:xy,L:yy,m:Sy,X:by,S:My,M:Ey};function gy(){var e=Ea.f(),n=fc();return e||n}function _y(e){var n=oa(e);n!==null&&n.tag===5&&n.type==="form"?Sm(n):Ea.r(e)}var Tr=typeof document>"u"?null:document;function s_(e,n,a){var o=Tr;if(o&&typeof n=="string"&&n){var u=Ne(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),a_.has(u)||(a_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),In(n,"link",e),pn(n),o.head.appendChild(n)))}}function vy(e){Ea.D(e),s_("dns-prefetch",e,null)}function xy(e,n){Ea.C(e,n),s_("preconnect",e,n)}function yy(e,n,a){Ea.L(e,n,a);var o=Tr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ne(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ne(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ne(a.imageSizes)+'"]')):u+='[href="'+Ne(e)+'"]';var h=u;switch(n){case"style":h=Ar(e);break;case"script":h=Rr(e)}Ci.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(qo(h))||n==="script"&&o.querySelector(Zo(h))||(n=o.createElement("link"),In(n,"link",e),pn(n),o.head.appendChild(n)))}}function Sy(e,n){Ea.m(e,n);var a=Tr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ne(o)+'"][href="'+Ne(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Rr(e)}if(!Ci.has(h)&&(e=v({rel:"modulepreload",href:e},n),Ci.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zo(h)))return}o=a.createElement("link"),In(o,"link",e),pn(o),a.head.appendChild(o)}}}function My(e,n,a){Ea.S(e,n,a);var o=Tr;if(o&&e){var u=Fa(o).hoistableStyles,h=Ar(e);n=n||"default";var x=u.get(h);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(qo(h)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(h))&&Th(e,a);var z=x=o.createElement("link");pn(z),In(z,"link",e),z._p=new Promise(function(et,dt){z.onload=et,z.onerror=dt}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Sc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(h,x)}}}function by(e,n){Ea.X(e,n);var a=Tr;if(a&&e){var o=Fa(a).hoistableScripts,u=Rr(e),h=o.get(u);h||(h=a.querySelector(Zo(u)),h||(e=v({src:e,async:!0},n),(n=Ci.get(u))&&Ah(e,n),h=a.createElement("script"),pn(h),In(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Ey(e,n){Ea.M(e,n);var a=Tr;if(a&&e){var o=Fa(a).hoistableScripts,u=Rr(e),h=o.get(u);h||(h=a.querySelector(Zo(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=Ci.get(u))&&Ah(e,n),h=a.createElement("script"),pn(h),In(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function r_(e,n,a,o){var u=(u=at.current)?yc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ar(a.href),a=Fa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ar(a.href);var h=Fa(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(qo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),Ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,a),h||Ty(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Rr(a),a=Fa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ar(e){return'href="'+Ne(e)+'"'}function qo(e){return'link[rel="stylesheet"]['+e+"]"}function o_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Ty(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),In(n,"link",a),pn(n),e.head.appendChild(n))}function Rr(e){return'[src="'+Ne(e)+'"]'}function Zo(e){return"script[async]"+e}function l_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ne(a.href)+'"]');if(o)return n.instance=o,pn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),pn(o),In(o,"style",u),Sc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Ar(a.href);var h=e.querySelector(qo(u));if(h)return n.state.loading|=4,n.instance=h,pn(h),h;o=o_(a),(u=Ci.get(u))&&Th(o,u),h=(e.ownerDocument||e).createElement("link"),pn(h);var x=h;return x._p=new Promise(function(R,z){x.onload=R,x.onerror=z}),In(h,"link",o),n.state.loading|=4,Sc(h,a.precedence,e),n.instance=h;case"script":return h=Rr(a.src),(u=e.querySelector(Zo(h)))?(n.instance=u,pn(u),u):(o=a,(u=Ci.get(h))&&(o=v({},a),Ah(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),pn(u),In(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Sc(o,a.precedence,e));return n.instance}function Sc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ah(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Mc=null;function c_(e,n,a){if(Mc===null){var o=new Map,u=Mc=new Map;u.set(a,o)}else u=Mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Oa]||h[dn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var R=o.get(x);R?R.push(h):o.set(x,[h])}}return o}function u_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ay(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ry(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ar(o.href),h=n.querySelector(qo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=bc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,pn(h);return}h=n.ownerDocument||n,o=o_(o),(u=Ci.get(u))&&Th(o,u),h=h.createElement("link"),pn(h);var x=h;x._p=new Promise(function(R,z){x.onload=R,x.onerror=z}),In(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=bc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Rh=0;function Cy(e,n){return e.stylesheets&&e.count===0&&Tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Rh===0&&(Rh=62500*ly());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Rh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ec=null;function Tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ec=new Map,n.forEach(wy,e),Ec=null,bc.call(e))}function wy(e,n){if(!(n.state.loading&4)){var a=Ec.get(e);if(a)var o=a.get(null);else{a=new Map,Ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=bc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ko={$$typeof:B,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Dy(e,n,a,o,u,h,x,R,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.hiddenUpdates=Wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function h_(e,n,a,o,u,h,x,R,z,et,dt,vt){return e=new Dy(e,n,a,x,z,et,dt,vt,R),n=1,h===!0&&(n|=24),h=ui(3,null,null,n),e.current=h,h.stateNode=e,n=rf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},uf(h),e}function d_(e){return e?(e=ar,e):ar}function p_(e,n,a,o,u,h){u=d_(u),o.context===null?o.context=u:o.pendingContext=u,o=Wa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ya(e,o,n),a!==null&&(ii(a,e,n),Ro(a,e,n))}function m_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ch(e,n){m_(e,n),(e=e.alternate)&&m_(e,n)}function g_(e){if(e.tag===13||e.tag===31){var n=Ts(e,67108864);n!==null&&ii(n,e,67108864),Ch(e,67108864)}}function __(e){if(e.tag===13||e.tag===31){var n=mi();n=lo(n);var a=Ts(e,n);a!==null&&ii(a,e,n),Ch(e,n)}}var Ac=!0;function Uy(e,n,a,o){var u=I.T;I.T=null;var h=H.p;try{H.p=2,wh(e,n,a,o)}finally{H.p=h,I.T=u}}function Ly(e,n,a,o){var u=I.T;I.T=null;var h=H.p;try{H.p=8,wh(e,n,a,o)}finally{H.p=h,I.T=u}}function wh(e,n,a,o){if(Ac){var u=Dh(o);if(u===null)mh(e,n,o,Rc,a),x_(e,o);else if(Py(u,e,n,a,o))o.stopPropagation();else if(x_(e,o),n&4&&-1<Ny.indexOf(e)){for(;u!==null;){var h=oa(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Tt(h.pendingLanes);if(x!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var z=1<<31-Ft(x);R.entanglements[1]|=z,x&=~z}Ki(h),(Ce&6)===0&&(cc=Be()+500,ko(0))}}break;case 31:case 13:R=Ts(h,2),R!==null&&ii(R,h,2),fc(),Ch(h,2)}if(h=Dh(o),h===null&&mh(e,n,o,Rc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else mh(e,n,o,null,a)}}function Dh(e){return e=Uu(e),Uh(e)}var Rc=null;function Uh(e){if(Rc=null,e=ra(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Rc=e,null}function v_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Re()){case D:return 2;case E:return 8;case Q:case st:return 32;case ft:return 268435456;default:return 32}default:return 32}}var Lh=!1,is=null,as=null,ss=null,Qo=new Map,Jo=new Map,rs=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x_(e,n){switch(e){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":Qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(n.pointerId)}}function jo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=oa(n),n!==null&&g_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Py(e,n,a,o,u){switch(n){case"focusin":return is=jo(is,e,n,a,o,u),!0;case"dragenter":return as=jo(as,e,n,a,o,u),!0;case"mouseover":return ss=jo(ss,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Qo.set(h,jo(Qo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Jo.set(h,jo(Jo.get(h)||null,e,n,a,o,u)),!0}return!1}function y_(e){var n=ra(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Js(e.priority,function(){__(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Js(e.priority,function(){__(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Dh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Du=o,a.target.dispatchEvent(o),Du=null}else return n=oa(a),n!==null&&g_(n),e.blockedOn=a,!1;n.shift()}return!0}function S_(e,n,a){Cc(e)&&a.delete(n)}function Oy(){Lh=!1,is!==null&&Cc(is)&&(is=null),as!==null&&Cc(as)&&(as=null),ss!==null&&Cc(ss)&&(ss=null),Qo.forEach(S_),Jo.forEach(S_)}function wc(e,n){e.blockedOn===n&&(e.blockedOn=null,Lh||(Lh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Oy)))}var Dc=null;function M_(e){Dc!==e&&(Dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Dc===e&&(Dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Uh(o||a)===null)continue;break}var h=oa(a);h!==null&&(e.splice(n,3),n-=3,Df(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cr(e){function n(z){return wc(z,e)}is!==null&&wc(is,e),as!==null&&wc(as,e),ss!==null&&wc(ss,e),Qo.forEach(n),Jo.forEach(n);for(var a=0;a<rs.length;a++){var o=rs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)y_(a),a.blockedOn===null&&rs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[Ln]||null;if(typeof h=="function")x||M_(a);else if(x){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[Ln]||null)R=x.formAction;else if(Uh(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),M_(a)}}}function b_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Nh(e){this._internalRoot=e}Uc.prototype.render=Nh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=mi();p_(a,o,e,n,null,null)},Uc.prototype.unmount=Nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;p_(e.current,2,null,e,null,null),fc(),n[Jn]=null}};function Uc(e){this._internalRoot=e}Uc.prototype.unstable_scheduleHydration=function(e){if(e){var n=uo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<rs.length&&n!==0&&n<rs[a].priority;a++);rs.splice(a,0,e),a===0&&y_(e)}};var E_=t.version;if(E_!=="19.2.7")throw Error(s(527,E_,"19.2.7"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Iy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{ut=Lc.inject(Iy),ht=Lc}catch{}}return tl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Um,h=Lm,x=Nm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=h_(e,1,!1,null,null,a,o,null,u,h,x,b_),e[Jn]=n.current,ph(e),new Nh(n)},tl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Um,x=Lm,R=Nm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=h_(e,1,!0,n,a??null,o,u,z,h,x,R,b_),n.context=d_(null),a=n.current,o=mi(),o=lo(o),u=Wa(o),u.callback=null,Ya(a,u,o),a=o,n.current.lanes=a,Gt(n,a),Ki(n),e[Jn]=n.current,ph(e),new Uc(n)},tl.version="19.2.7",tl}var P_;function Yy(){if(P_)return Oh.exports;P_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Oh.exports=Wy(),Oh.exports}var qy=Yy(),bn=x0();const y0="185",Ua={ROTATE:0,DOLLY:1,PAN:2},qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zy=0,O_=1,Ky=2,lu=1,Qy=2,cl=3,ms=0,Kn=1,$i=2,Vi=0,Zr=1,bd=2,I_=3,F_=4,Jy=5,Vs=100,jy=101,$y=102,tS=103,eS=104,nS=200,iS=201,aS=202,sS=203,Ed=204,Td=205,rS=206,oS=207,lS=208,cS=209,uS=210,fS=211,hS=212,dS=213,pS=214,Ad=0,Rd=1,Cd=2,jr=3,wd=4,Dd=5,Ud=6,Ld=7,S0=0,mS=1,gS=2,ia=0,M0=1,b0=2,E0=3,Mu=4,T0=5,$r=6,bu=7,tv=300,qs=301,to=302,Hh=303,Gh=304,Eu=306,dl=1e3,ea=1001,Nd=1002,Tn=1003,_S=1004,Nc=1005,Dn=1006,Vh=1007,Xs=1008,xi=1009,ev=1010,nv=1011,pl=1012,A0=1013,aa=1014,Hi=1015,Qn=1016,R0=1017,C0=1018,ml=1020,iv=35902,av=35899,sv=1021,rv=1022,Gi=1023,Na=1026,Ws=1027,w0=1028,D0=1029,Zs=1030,U0=1031,L0=1033,cu=33776,uu=33777,fu=33778,hu=33779,Pd=35840,Od=35841,Id=35842,Fd=35843,Bd=36196,zd=37492,Hd=37496,Gd=37488,Vd=37489,mu=37490,kd=37491,Xd=37808,Wd=37809,Yd=37810,qd=37811,Zd=37812,Kd=37813,Qd=37814,Jd=37815,jd=37816,$d=37817,t0=37818,e0=37819,n0=37820,i0=37821,a0=36492,s0=36494,r0=36495,o0=36283,l0=36284,gu=36285,c0=36286,vS=3200,xS=3201,_u=0,yS=1,ta="",Zn="srgb",vu="srgb-linear",xu="linear",De="srgb",wr=7680,B_=519,SS=512,MS=513,bS=514,N0=515,ES=516,TS=517,P0=518,AS=519,z_=35044,H_=35048,G_="300 es",na=2e3,gl=2001;function RS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function yu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function CS(){const r=yu("canvas");return r.style.display="block",r}const V_={};function k_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ov(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ee(...r){r=ov(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function be(...r){r=ov(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Kr(...r){const t=r.join(" ");t in V_||(V_[t]=!0,ee(...r))}function wS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const DS={[Ad]:Rd,[Cd]:Ud,[wd]:Ld,[jr]:Dd,[Rd]:Ad,[Ud]:Cd,[Ld]:wd,[Dd]:jr};class _s{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let X_=1234567;const fl=Math.PI/180,_l=180/Math.PI;function ao(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function he(r,t,i){return Math.max(t,Math.min(i,r))}function O0(r,t){return(r%t+t)%t}function US(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function LS(r,t,i){return r!==t?(i-r)/(t-r):0}function hl(r,t,i){return(1-i)*r+i*t}function NS(r,t,i,s){return hl(r,t,1-Math.exp(-i*s))}function PS(r,t=1){return t-Math.abs(O0(r,t*2)-t)}function OS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function IS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function FS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function BS(r,t){return r+Math.random()*(t-r)}function zS(r){return r*(.5-Math.random())}function HS(r){r!==void 0&&(X_=r);let t=X_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function GS(r){return r*fl}function VS(r){return r*_l}function kS(r){return(r&r-1)===0&&r!==0}function XS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function WS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function YS(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),S=c((s-t)/2),T=f((s-t)/2);switch(l){case"XYX":r.set(d*_,m*v,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*v,d*p);break;case"ZXZ":r.set(m*v,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*T,m*S,d*p);break;case"YXY":r.set(m*S,d*_,m*T,d*p);break;case"ZYZ":r.set(m*T,m*S,d*_,d*p);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Yr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const lv={DEG2RAD:fl,RAD2DEG:_l,generateUUID:ao,clamp:he,euclideanModulo:O0,mapLinear:US,inverseLerp:LS,lerp:hl,damp:NS,pingpong:PS,smoothstep:OS,smootherstep:IS,randInt:FS,randFloat:BS,randFloatSpread:zS,seededRandom:HS,degToRad:GS,radToDeg:VS,isPowerOfTwo:kS,ceilPowerOfTwo:XS,floorPowerOfTwo:WS,setQuaternionFromProperEuler:YS,normalize:Wn,denormalize:Yr},V0=class V0{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(he(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(he(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};V0.prototype.isVector2=!0;let qt=V0;class gs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],S=c[f+1],T=c[f+2],w=c[f+3];if(v!==w||m!==g||p!==S||_!==T){let M=m*g+p*S+_*T+v*w;M<0&&(g=-g,S=-S,T=-T,w=-w,M=-M);let y=1-d;if(M<.9995){const F=Math.acos(M),B=Math.sin(F);y=Math.sin(y*F)/B,d=Math.sin(d*F)/B,m=m*y+g*d,p=p*y+S*d,_=_*y+T*d,v=v*y+w*d}else{m=m*y+g*d,p=p*y+S*d,_=_*y+T*d,v=v*y+w*d;const F=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=F,p*=F,_*=F,v*=F}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],S=c[f+2],T=c[f+3];return t[i]=d*T+_*v+m*S-p*g,t[i+1]=m*T+_*g+p*v-d*S,t[i+2]=p*T+_*S+d*g-m*v,t[i+3]=_*T-d*v-m*g-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),g=m(s/2),S=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"YXZ":this._x=g*_*v+p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"ZXY":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v-g*S*T;break;case"ZYX":this._x=g*_*v-p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v+g*S*T;break;case"YZX":this._x=g*_*v+p*S*T,this._y=p*S*v+g*_*T,this._z=p*_*T-g*S*v,this._w=p*_*v-g*S*T;break;case"XZY":this._x=g*_*v-p*S*T,this._y=p*S*v-g*_*T,this._z=p*_*T+g*S*v,this._w=p*_*v+g*S*T;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=s+d+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const k0=class k0{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(W_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(W_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+m*p+f*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this.z=he(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this.z=he(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(he(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return kh.copy(this).projectOnVector(t),this.sub(kh)}reflect(t){return this.sub(kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(he(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};k0.prototype.isVector3=!0;let j=k0;const kh=new j,W_=new gs,X0=class X0{constructor(t,i,s,l,c,f,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],S=s[5],T=s[8],w=l[0],M=l[3],y=l[6],F=l[1],B=l[4],C=l[7],P=l[2],L=l[5],O=l[8];return c[0]=f*w+d*F+m*P,c[3]=f*M+d*B+m*L,c[6]=f*y+d*C+m*O,c[1]=p*w+_*F+v*P,c[4]=p*M+_*B+v*L,c[7]=p*y+_*C+v*O,c[2]=g*w+S*F+T*P,c[5]=g*M+S*B+T*L,c[8]=g*y+S*C+T*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,g=d*m-_*c,S=p*c-f*m,T=i*v+s*g+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=v*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*f)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=S*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return Kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xh.makeScale(t,i)),this}rotate(t){return Kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xh.makeRotation(-t)),this}translate(t,i){return Kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};X0.prototype.isMatrix3=!0;let re=X0;const Xh=new re,Y_=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q_=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qS(){const r={enabled:!0,workingColorSpace:vu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===De&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===De&&(l.r=Qr(l.r),l.g=Qr(l.g),l.b=Qr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ta?xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[vu]:{primaries:t,whitePoint:s,transfer:xu,toXYZ:Y_,fromXYZ:q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:t,whitePoint:s,transfer:De,toXYZ:Y_,fromXYZ:q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),r}const xe=qS();function La(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class ZS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Dr===void 0&&(Dr=yu("canvas")),Dr.width=t.width,Dr.height=t.height;const l=Dr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Dr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=yu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=La(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(La(i[s]/255)*255):i[s]=La(i[s]);return{data:i,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let KS=0;class I0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=ao(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Wh(l[f].image)):c.push(Wh(l[f]))}else c=Wh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Wh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ZS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let QS=0;const Yh=new j;class kn extends _s{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=ea,l=ea,c=Dn,f=Xs,d=Gi,m=xi,p=kn.DEFAULT_ANISOTROPY,_=ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=ao(),this.name="",this.source=new I0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yh).x}get height(){return this.source.getSize(Yh).y}get depth(){return this.source.getSize(Yh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dl:t.x=t.x-Math.floor(t.x);break;case ea:t.x=t.x<0?0:1;break;case Nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dl:t.y=t.y-Math.floor(t.y);break;case ea:t.y=t.y<0?0:1;break;case Nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=tv;kn.DEFAULT_ANISOTROPY=1;const W0=class W0{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],T=m[9],w=m[2],M=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+w)<.1&&Math.abs(T+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(p+1)/2,C=(S+1)/2,P=(y+1)/2,L=(_+g)/4,O=(v+w)/4,b=(T+M)/4;return B>C&&B>P?B<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(B),l=L/s,c=O/s):C>P?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=L/l,c=b/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=O/c,l=b/c),this.set(s,l,c,i),this}let F=Math.sqrt((M-T)*(M-T)+(v-w)*(v-w)+(g-_)*(g-_));return Math.abs(F)<.001&&(F=1),this.x=(M-T)/F,this.y=(v-w)/F,this.z=(g-_)/F,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this.z=he(this.z,t.z,i.z),this.w=he(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this.z=he(this.z,t,i),this.w=he(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(he(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};W0.prototype.isVector4=!0;let nn=W0;class JS extends _s{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new kn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new I0(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends JS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class cv extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jS extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Su=class Su{constructor(t,i,s,l,c,f,d,m,p,_,v,g,S,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,v,g,S,T,w,M)}set(t,i,s,l,c,f,d,m,p,_,v,g,S,T,w,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=d,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=T,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Su().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Ur.setFromMatrixColumn(t,0).length(),c=1/Ur.setFromMatrixColumn(t,1).length(),f=1/Ur.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,S=f*v,T=d*_,w=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+T*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=T+S*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,S=m*v,T=p*_,w=p*v;i[0]=g+w*d,i[4]=T*d-S,i[8]=f*p,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=S*d-T,i[6]=w+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,S=m*v,T=p*_,w=p*v;i[0]=g-w*d,i[4]=-f*v,i[8]=T+S*d,i[1]=S+T*d,i[5]=f*_,i[9]=w-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,S=f*v,T=d*_,w=d*v;i[0]=m*_,i[4]=T*p-S,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=S*p-T,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,S=f*p,T=d*m,w=d*p;i[0]=m*_,i[4]=w-g*v,i[8]=T*v+S,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*v+T,i[10]=g-w*v}else if(t.order==="XZY"){const g=f*m,S=f*p,T=d*m,w=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+w,i[5]=f*_,i[9]=S*v-T,i[2]=T*v-S,i[6]=d*_,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose($S,t,tM)}lookAt(t,i,s){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ls.crossVectors(s,gi),ls.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ls.crossVectors(s,gi)),ls.normalize(),Pc.crossVectors(gi,ls),l[0]=ls.x,l[4]=Pc.x,l[8]=gi.x,l[1]=ls.y,l[5]=Pc.y,l[9]=gi.y,l[2]=ls.z,l[6]=Pc.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],S=s[13],T=s[2],w=s[6],M=s[10],y=s[14],F=s[3],B=s[7],C=s[11],P=s[15],L=l[0],O=l[4],b=l[8],N=l[12],W=l[1],G=l[5],q=l[9],ct=l[13],gt=l[2],J=l[6],I=l[10],H=l[14],$=l[3],pt=l[7],bt=l[11],U=l[15];return c[0]=f*L+d*W+m*gt+p*$,c[4]=f*O+d*G+m*J+p*pt,c[8]=f*b+d*q+m*I+p*bt,c[12]=f*N+d*ct+m*H+p*U,c[1]=_*L+v*W+g*gt+S*$,c[5]=_*O+v*G+g*J+S*pt,c[9]=_*b+v*q+g*I+S*bt,c[13]=_*N+v*ct+g*H+S*U,c[2]=T*L+w*W+M*gt+y*$,c[6]=T*O+w*G+M*J+y*pt,c[10]=T*b+w*q+M*I+y*bt,c[14]=T*N+w*ct+M*H+y*U,c[3]=F*L+B*W+C*gt+P*$,c[7]=F*O+B*G+C*J+P*pt,c[11]=F*b+B*q+C*I+P*bt,c[15]=F*N+B*ct+C*H+P*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],S=t[14],T=t[3],w=t[7],M=t[11],y=t[15],F=m*S-p*g,B=d*S-p*v,C=d*g-m*v,P=f*S-p*_,L=f*g-m*_,O=f*v-d*_;return i*(w*F-M*B+y*C)-s*(T*F-M*P+y*L)+l*(T*B-w*P+y*O)-c*(T*C-w*L+M*O)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],f=t[5],d=t[9],m=t[2],p=t[6],_=t[10];return i*(f*_-d*p)-s*(c*_-d*m)+l*(c*p-f*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],S=t[11],T=t[12],w=t[13],M=t[14],y=t[15],F=i*d-s*f,B=i*m-l*f,C=i*p-c*f,P=s*m-l*d,L=s*p-c*d,O=l*p-c*m,b=_*w-v*T,N=_*M-g*T,W=_*y-S*T,G=v*M-g*w,q=v*y-S*w,ct=g*y-S*M,gt=F*ct-B*q+C*G+P*W-L*N+O*b;if(gt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/gt;return t[0]=(d*ct-m*q+p*G)*J,t[1]=(l*q-s*ct-c*G)*J,t[2]=(w*O-M*L+y*P)*J,t[3]=(g*L-v*O-S*P)*J,t[4]=(m*W-f*ct-p*N)*J,t[5]=(i*ct-l*W+c*N)*J,t[6]=(M*C-T*O-y*B)*J,t[7]=(_*O-g*C+S*B)*J,t[8]=(f*q-d*W+p*b)*J,t[9]=(s*W-i*q-c*b)*J,t[10]=(T*L-w*C+y*F)*J,t[11]=(v*C-_*L-S*F)*J,t[12]=(d*N-f*G-m*b)*J,t[13]=(i*G-s*N+l*b)*J,t[14]=(w*B-T*P-M*F)*J,t[15]=(_*P-v*B+g*F)*J,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,v=d+d,g=c*p,S=c*_,T=c*v,w=f*_,M=f*v,y=d*v,F=m*p,B=m*_,C=m*v,P=s.x,L=s.y,O=s.z;return l[0]=(1-(w+y))*P,l[1]=(S+C)*P,l[2]=(T-B)*P,l[3]=0,l[4]=(S-C)*L,l[5]=(1-(g+y))*L,l[6]=(M+F)*L,l[7]=0,l[8]=(T+B)*O,l[9]=(M-F)*O,l[10]=(1-(g+w))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ur.set(l[0],l[1],l[2]).length();const d=Ur.set(l[4],l[5],l[6]).length(),m=Ur.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ii.copy(this);const p=1/f,_=1/d,v=1/m;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=_,Ii.elements[5]*=_,Ii.elements[6]*=_,Ii.elements[8]*=v,Ii.elements[9]*=v,Ii.elements[10]*=v,i.setFromRotationMatrix(Ii),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=na,m=!1){const p=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),S=(s+l)/(s-l);let T,w;if(m)T=c/(f-c),w=f*c/(f-c);else if(d===na)T=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(d===gl)T=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=na,m=!1){const p=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),S=-(s+l)/(s-l);let T,w;if(m)T=1/(f-c),w=f/(f-c);else if(d===na)T=-2/(f-c),w=-(f+c)/(f-c);else if(d===gl)T=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Su.prototype.isMatrix4=!0;let Ze=Su;const Ur=new j,Ii=new Ze,$S=new j(0,0,0),tM=new j(1,1,1),ls=new j,Pc=new j,gi=new j,Z_=new Ze,K_=new gs;class Pa{constructor(t=0,i=0,s=0,l=Pa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-he(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(he(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-he(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(he(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-he(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Z_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Z_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return K_.setFromEuler(this),this.setFromQuaternion(K_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pa.DEFAULT_ORDER="XYZ";class F0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eM=0;const Q_=new j,Lr=new gs,Ta=new Ze,Oc=new j,el=new j,nM=new j,iM=new gs,J_=new j(1,0,0),j_=new j(0,1,0),$_=new j(0,0,1),t1={type:"added"},aM={type:"removed"},Nr={type:"childadded",child:null},qh={type:"childremoved",child:null};class Bn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const t=new j,i=new Pa,s=new gs,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new re}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Lr.setFromAxisAngle(t,i),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,i){return Lr.setFromAxisAngle(t,i),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(J_,t)}rotateY(t){return this.rotateOnAxis(j_,t)}rotateZ(t){return this.rotateOnAxis($_,t)}translateOnAxis(t,i){return Q_.copy(t).applyQuaternion(this.quaternion),this.position.add(Q_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(J_,t)}translateY(t){return this.translateOnAxis(j_,t)}translateZ(t){return this.translateOnAxis($_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Oc.copy(t):Oc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(el,Oc,this.up):Ta.lookAt(Oc,el,this.up),this.quaternion.setFromRotationMatrix(Ta),l&&(Ta.extractRotation(l.matrixWorld),Lr.setFromRotationMatrix(Ta),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(t1),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(aM),qh.child=t,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(t1),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,t,nM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,iM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),S=f(t.animations),T=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new j(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ic extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sM={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),y=this._getHandJoint(p,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,T=.005;p.inputState.pinching&&g>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(sM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ic;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function Kh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ae{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=xe.workingColorSpace){return this.r=t,this.g=i,this.b=s,xe.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=xe.workingColorSpace){if(t=O0(t,1),i=he(i,0,1),s=he(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Kh(f,c,t+1/3),this.g=Kh(f,c,t),this.b=Kh(f,c,t-1/3)}return xe.colorSpaceToWorking(this,l),this}setStyle(t,i=Zn){function s(c){c!==void 0&&parseFloat(c)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ee("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Zn){const s=uv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return xe.workingToColorSpace(Vn.copy(this),t),Math.round(he(Vn.r*255,0,255))*65536+Math.round(he(Vn.g*255,0,255))*256+Math.round(he(Vn.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=xe.workingColorSpace){xe.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,c=Vn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=xe.workingColorSpace){return xe.workingToColorSpace(Vn.copy(this),i),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Zn){xe.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,s=Vn.g,l=Vn.b;return t!==Zn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+i,cs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(cs),t.getHSL(Fc);const s=hl(cs.h,Fc.h,i),l=hl(cs.s,Fc.s,i),c=hl(cs.l,Fc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new ae;ae.NAMES=uv;class fv extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pa,this.environmentIntensity=1,this.environmentRotation=new Pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fi=new j,Aa=new j,Qh=new j,Ra=new j,Pr=new j,Or=new j,e1=new j,Jh=new j,jh=new j,$h=new j,td=new nn,ed=new nn,nd=new nn;class zi{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Fi.subVectors(t,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Fi.subVectors(l,i),Aa.subVectors(s,i),Qh.subVectors(t,i);const f=Fi.dot(Fi),d=Fi.dot(Aa),m=Fi.dot(Qh),p=Aa.dot(Aa),_=Aa.dot(Qh),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-d*_)*g,T=(f*_-d*m)*g;return c.set(1-S-T,T,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ra.x),m.addScaledVector(f,Ra.y),m.addScaledVector(d,Ra.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return td.setScalar(0),ed.setScalar(0),nd.setScalar(0),td.fromBufferAttribute(t,i),ed.fromBufferAttribute(t,s),nd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(td,c.x),f.addScaledVector(ed,c.y),f.addScaledVector(nd,c.z),f}static isFrontFacing(t,i,s,l){return Fi.subVectors(s,i),Aa.subVectors(t,i),Fi.cross(Aa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Fi.cross(Aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return zi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return zi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Pr.subVectors(l,s),Or.subVectors(c,s),Jh.subVectors(t,s);const m=Pr.dot(Jh),p=Or.dot(Jh);if(m<=0&&p<=0)return i.copy(s);jh.subVectors(t,l);const _=Pr.dot(jh),v=Or.dot(jh);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Pr,f);$h.subVectors(t,c);const S=Pr.dot($h),T=Or.dot($h);if(T>=0&&S<=T)return i.copy(c);const w=S*p-m*T;if(w<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(Or,d);const M=_*T-S*v;if(M<=0&&v-_>=0&&S-T>=0)return e1.subVectors(c,l),d=(v-_)/(v-_+(S-T)),i.copy(l).addScaledVector(e1,d);const y=1/(M+w+g);return f=w*y,d=g*y,i.copy(s).addScaledVector(Pr,f).addScaledVector(Or,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ks{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Bi):Bi.fromBufferAttribute(c,f),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Bc.copy(s.boundingBox)),Bc.applyMatrix4(t.matrixWorld),this.union(Bc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nl),zc.subVectors(this.max,nl),Ir.subVectors(t.a,nl),Fr.subVectors(t.b,nl),Br.subVectors(t.c,nl),us.subVectors(Fr,Ir),fs.subVectors(Br,Fr),Bs.subVectors(Ir,Br);let i=[0,-us.z,us.y,0,-fs.z,fs.y,0,-Bs.z,Bs.y,us.z,0,-us.x,fs.z,0,-fs.x,Bs.z,0,-Bs.x,-us.y,us.x,0,-fs.y,fs.x,0,-Bs.y,Bs.x,0];return!id(i,Ir,Fr,Br,zc)||(i=[1,0,0,0,1,0,0,0,1],!id(i,Ir,Fr,Br,zc))?!1:(Hc.crossVectors(us,fs),i=[Hc.x,Hc.y,Hc.z],id(i,Ir,Fr,Br,zc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new j,new j,new j,new j,new j,new j,new j,new j],Bi=new j,Bc=new Ks,Ir=new j,Fr=new j,Br=new j,us=new j,fs=new j,Bs=new j,nl=new j,zc=new j,Hc=new j,zs=new j;function id(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){zs.fromArray(r,c);const d=l.x*Math.abs(zs.x)+l.y*Math.abs(zs.y)+l.z*Math.abs(zs.z),m=t.dot(zs),p=i.dot(zs),_=s.dot(zs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const xn=new j,Gc=new qt;let rM=0;class yi extends _s{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=z_,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Gc.fromBufferAttribute(this,i),Gc.applyMatrix3(t),this.setXY(i,Gc.x,Gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Yr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Yr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Yr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Yr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Yr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==z_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class hv extends yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class dv extends yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ki extends yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const oM=new Ks,il=new j,ad=new j;class yl{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):oM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);const i=il.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(il,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(ad)),this.expandByPoint(il.copy(t.center).sub(ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let lM=0;const wi=new Ze,sd=new Bn,zr=new j,_i=new Ks,al=new Ks,wn=new j;class sa extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(RS(t)?dv:hv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new re().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,i,s){return wi.makeTranslation(t,i,s),this.applyMatrix4(wi),this}scale(t,i,s){return wi.makeScale(t,i,s),this.applyMatrix4(wi),this}lookAt(t){return sd.lookAt(t),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ki(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];al.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(_i.min,al.min),_i.expandByPoint(wn),wn.addVectors(_i.max,al.max),_i.expandByPoint(wn)):(_i.expandByPoint(al.min),_i.expandByPoint(al.max))}_i.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)wn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(wn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)wn.fromBufferAttribute(d,p),m&&(zr.fromBufferAttribute(t,p),wn.add(zr)),l=Math.max(l,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new yi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const d=[],m=[];for(let b=0;b<s.count;b++)d[b]=new j,m[b]=new j;const p=new j,_=new j,v=new j,g=new qt,S=new qt,T=new qt,w=new j,M=new j;function y(b,N,W){p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,N),v.fromBufferAttribute(s,W),g.fromBufferAttribute(c,b),S.fromBufferAttribute(c,N),T.fromBufferAttribute(c,W),_.sub(p),v.sub(p),S.sub(g),T.sub(g);const G=1/(S.x*T.y-T.x*S.y);isFinite(G)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(G),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(G),d[b].add(w),d[N].add(w),d[W].add(w),m[b].add(M),m[N].add(M),m[W].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let b=0,N=F.length;b<N;++b){const W=F[b],G=W.start,q=W.count;for(let ct=G,gt=G+q;ct<gt;ct+=3)y(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const B=new j,C=new j,P=new j,L=new j;function O(b){P.fromBufferAttribute(l,b),L.copy(P);const N=d[b];B.copy(N),B.sub(P.multiplyScalar(P.dot(N))).normalize(),C.crossVectors(L,N);const G=C.dot(m[b])<0?-1:1;f.setXYZW(b,B.x,B.y,B.z,G)}for(let b=0,N=F.length;b<N;++b){const W=F[b],G=W.start,q=W.count;for(let ct=G,gt=G+q;ct<gt;ct+=3)O(t.getX(ct+0)),O(t.getX(ct+1)),O(t.getX(ct+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,f=new j,d=new j,m=new j,p=new j,_=new j,v=new j;if(t)for(let g=0,S=t.count;g<S;g+=3){const T=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)wn.fromBufferAttribute(t,i),wn.normalize(),t.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let S=0,T=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?S=m[w]*d.data.stride+d.offset:S=m[w]*_;for(let y=0;y<_;y++)g[T++]=p[S++]}return new yi(g,_,v)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new sa,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=t(g,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cM=0;class so extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Zr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=Td,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(s.blending=this.blending),this.side!==ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ed&&(s.blendSrc=this.blendSrc),this.blendDst!==Td&&(s.blendDst=this.blendDst),this.blendEquation!==Vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new qt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa=new j,rd=new j,Vc=new j,hs=new j,od=new j,kc=new j,ld=new j;class B0{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=wa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){rd.copy(t).add(i).multiplyScalar(.5),Vc.copy(i).sub(t).normalize(),hs.copy(this.origin).sub(rd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Vc),d=hs.dot(this.direction),m=-hs.dot(Vc),p=hs.lengthSq(),_=Math.abs(1-f*f);let v,g,S,T;if(_>0)if(v=f*m-d,g=f*d-m,T=c*_,v>=0)if(g>=-T)if(g<=T){const w=1/_;v*=w,g*=w,S=v*(v+f*g+2*d)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;else g<=-T?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),S=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(rd).addScaledVector(Vc,g),S}intersectSphere(t,i){wa.subVectors(t.center,this.origin);const s=wa.dot(this.direction),l=wa.dot(wa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,wa)!==null}intersectTriangle(t,i,s,l,c){od.subVectors(i,t),kc.subVectors(s,t),ld.crossVectors(od,kc);let f=this.direction.dot(ld),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;hs.subVectors(this.origin,t);const m=d*this.direction.dot(kc.crossVectors(hs,kc));if(m<0)return null;const p=d*this.direction.dot(od.cross(hs));if(p<0||m+p>f)return null;const _=-d*hs.dot(ld);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class z0 extends so{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=S0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const n1=new Ze,Hs=new B0,Xc=new yl,i1=new j,Wc=new j,Yc=new j,qc=new j,cd=new j,Zc=new j,a1=new j,Kc=new j;class yn extends Bn{constructor(t=new sa,i=new z0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(cd.fromBufferAttribute(v,t),f?Zc.addScaledVector(cd,_):Zc.addScaledVector(cd.sub(i),_))}i.add(Zc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Xc.copy(s.boundingSphere),Xc.applyMatrix4(c),Hs.copy(t.ray).recast(t.near),!(Xc.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Xc,i1)===null||Hs.origin.distanceToSquared(i1)>(t.far-t.near)**2))&&(n1.copy(c).invert(),Hs.copy(t.ray).applyMatrix4(n1),!(s.boundingBox!==null&&Hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Hs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,w=g.length;T<w;T++){const M=g[T],y=f[M.materialIndex],F=Math.max(M.start,S.start),B=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let C=F,P=B;C<P;C+=3){const L=d.getX(C),O=d.getX(C+1),b=d.getX(C+2);l=Qc(this,y,t,s,p,_,v,L,O,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let M=T,y=w;M<y;M+=3){const F=d.getX(M),B=d.getX(M+1),C=d.getX(M+2);l=Qc(this,f,t,s,p,_,v,F,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,w=g.length;T<w;T++){const M=g[T],y=f[M.materialIndex],F=Math.max(M.start,S.start),B=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let C=F,P=B;C<P;C+=3){const L=C,O=C+1,b=C+2;l=Qc(this,y,t,s,p,_,v,L,O,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=T,y=w;M<y;M+=3){const F=M,B=M+1,C=M+2;l=Qc(this,f,t,s,p,_,v,F,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function uM(r,t,i,s,l,c,f,d){let m;if(t.side===Kn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===ms,d),m===null)return null;Kc.copy(d),Kc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Kc);return p<i.near||p>i.far?null:{distance:p,point:Kc.clone(),object:r}}function Qc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Wc),r.getVertexPosition(m,Yc),r.getVertexPosition(p,qc);const _=uM(r,t,i,s,Wc,Yc,qc,a1);if(_){const v=new j;zi.getBarycoord(a1,Wc,Yc,qc,v),l&&(_.uv=zi.getInterpolatedAttribute(l,d,m,p,v,new qt)),c&&(_.uv1=zi.getInterpolatedAttribute(c,d,m,p,v,new qt)),f&&(_.normal=zi.getInterpolatedAttribute(f,d,m,p,v,new j),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new j,materialIndex:0};zi.getNormal(Wc,Yc,qc,g.normal),_.face=g,_.barycoord=v}return _}class pv extends kn{constructor(t=null,i=1,s=1,l,c,f,d,m,p=Tn,_=Tn,v,g){super(null,f,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class s1 extends yi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hr=new Ze,r1=new Ze,Jc=[],o1=new Ks,fM=new Ze,sl=new yn,rl=new yl;class hM extends yn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new s1(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,fM)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Ks),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Hr),o1.copy(t.boundingBox).applyMatrix4(Hr),this.boundingBox.union(o1)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new yl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Hr),rl.copy(t.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(rl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(sl.geometry=this.geometry,sl.material=this.material,sl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(s),t.ray.intersectsSphere(rl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Hr),r1.multiplyMatrices(s,Hr),sl.matrixWorld=r1,sl.raycast(t,Jc);for(let f=0,d=Jc.length;f<d;f++){const m=Jc[f];m.instanceId=c,m.object=this,i.push(m)}Jc.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new s1(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new pv(new Float32Array(l*this.count),l,this.count,w0,Hi));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*t;return c[m]=d,c.set(s,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ud=new j,dM=new j,pM=new re;class Da{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=ud.subVectors(s,i).cross(dM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(ud),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||pM.getNormalMatrix(t),l=this.coplanarPoint(ud).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new yl,mM=new qt(.5,.5),jc=new j;class H0{constructor(t=new Da,i=new Da,s=new Da,l=new Da,c=new Da,f=new Da){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=na,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],T=c[8],w=c[9],M=c[10],y=c[11],F=c[12],B=c[13],C=c[14],P=c[15];if(l[0].setComponents(p-f,S-_,y-T,P-F).normalize(),l[1].setComponents(p+f,S+_,y+T,P+F).normalize(),l[2].setComponents(p+d,S+v,y+w,P+B).normalize(),l[3].setComponents(p-d,S-v,y-w,P-B).normalize(),s)l[4].setComponents(m,g,M,C).normalize(),l[5].setComponents(p-m,S-g,y-M,P-C).normalize();else if(l[4].setComponents(p-m,S-g,y-M,P-C).normalize(),i===na)l[5].setComponents(p+m,S+g,y+M,P+C).normalize();else if(i===gl)l[5].setComponents(m,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(t){Gs.center.set(0,0,0);const i=mM.distanceTo(t.center);return Gs.radius=.7071067811865476+i,Gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(jc.x=l.normal.x>0?t.max.x:t.min.x,jc.y=l.normal.y>0?t.max.y:t.min.y,jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mv extends kn{constructor(t=[],i=qs,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vl extends kn{constructor(t,i,s,l,c,f,d,m,p){super(t,i,s,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eo extends kn{constructor(t,i,s=aa,l,c,f,d=Tn,m=Tn,p,_=Na,v=1){if(_!==Na&&_!==Ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new I0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gM extends eo{constructor(t,i=aa,s=qs,l,c,f=Tn,d=Tn,m,p=Na){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gv extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ro extends sa{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,S=0;T("z","y","x",-1,-1,s,i,t,f,c,0),T("z","y","x",1,-1,s,i,-t,f,c,1),T("x","z","y",1,1,t,s,i,l,f,2),T("x","z","y",1,-1,t,s,-i,l,f,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ki(p,3)),this.setAttribute("normal",new ki(_,3)),this.setAttribute("uv",new ki(v,2));function T(w,M,y,F,B,C,P,L,O,b,N){const W=C/O,G=P/b,q=C/2,ct=P/2,gt=L/2,J=O+1,I=b+1;let H=0,$=0;const pt=new j;for(let bt=0;bt<I;bt++){const U=bt*G-ct;for(let Z=0;Z<J;Z++){const yt=Z*W-q;pt[w]=yt*F,pt[M]=U*B,pt[y]=gt,p.push(pt.x,pt.y,pt.z),pt[w]=0,pt[M]=0,pt[y]=L>0?1:-1,_.push(pt.x,pt.y,pt.z),v.push(Z/O),v.push(1-bt/b),H+=1}}for(let bt=0;bt<b;bt++)for(let U=0;U<O;U++){const Z=g+U+J*bt,yt=g+U+J*(bt+1),Rt=g+(U+1)+J*(bt+1),Ot=g+(U+1)+J*bt;m.push(Z,yt,Ot),m.push(yt,Rt,Ot),$+=6}d.addGroup(S,$,N),S+=$,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Sl extends sa{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=i/m,S=[],T=[],w=[],M=[];for(let y=0;y<_;y++){const F=y*g-f;for(let B=0;B<p;B++){const C=B*v-c;T.push(C,-F,0),w.push(0,0,1),M.push(B/d),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let F=0;F<d;F++){const B=F+p*y,C=F+p*(y+1),P=F+1+p*(y+1),L=F+1+p*y;S.push(B,C,L),S.push(C,P,L)}this.setIndex(S),this.setAttribute("position",new ki(T,3)),this.setAttribute("normal",new ki(w,3)),this.setAttribute("uv",new ki(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.width,t.height,t.widthSegments,t.heightSegments)}}function no(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(l1(l))l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(l1(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Yn(r){const t={};for(let i=0;i<r.length;i++){const s=no(r[i]);for(const l in s)t[l]=s[l]}return t}function l1(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function _M(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function _v(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const xl={clone:no,merge:Yn};var vM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends so{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vM,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=no(t.uniforms),this.uniformsGroups=_M(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new ae().setHex(l.value);break;case"v2":this.uniforms[s].value=new qt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new j().fromArray(l.value);break;case"v4":this.uniforms[s].value=new nn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new re().fromArray(l.value);break;case"m4":this.uniforms[s].value=new Ze().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class vv extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class u0 extends so{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yM extends u0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class SM extends so{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=S0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xv extends so{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class MM extends so{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yv extends Bn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const fd=new Ze,c1=new j,u1=new j;class Sv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new H0,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;c1.setFromMatrixPosition(t.matrixWorld),i.position.copy(c1),u1.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(u1),i.updateMatrixWorld(),fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===gl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $c=new j,tu=new gs,Qi=new j;class Mv extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($c,tu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($c,tu,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose($c,tu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($c,tu,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new j,f1=new qt,h1=new qt;class vi extends Mv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=_l*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,i){return this.getViewBounds(t,f1,h1),i.subVectors(h1,f1)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(fl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class bM extends Sv{constructor(){super(new vi(90,1,.5,500)),this.isPointLightShadow=!0}}class EM extends yv{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new bM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Tu extends Mv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class TM extends Sv{constructor(){super(new Tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hd extends yv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new TM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Gr=-90,Vr=1;class AM extends Bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(Gr,Vr,t,i);l.layers=this.layers,this.add(l);const c=new vi(Gr,Vr,t,i);c.layers=this.layers,this.add(c);const f=new vi(Gr,Vr,t,i);f.layers=this.layers,this.add(f);const d=new vi(Gr,Vr,t,i);d.layers=this.layers,this.add(d);const m=new vi(Gr,Vr,t,i);m.layers=this.layers,this.add(m);const p=new vi(Gr,Vr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===na)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===gl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class RM extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class CM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=wM.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function wM(){this._document.hidden===!1&&this.reset()}const d1=new Ze;class DM{constructor(t,i,s=0,l=1/0){this.ray=new B0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new F0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):be("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return d1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(d1),this}intersectObject(t,i=!0,s=[]){return f0(t,this,s,i),s.sort(p1),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)f0(t[l],this,s,i);return s.sort(p1),s}}function p1(r,t){return r.distance-t.distance}function f0(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)f0(c[f],t,i,!0)}}class UM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ee("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class m1{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=he(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(he(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Y0=class Y0{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Y0.prototype.isMatrix2=!0;let g1=Y0;class LM extends _s{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function _1(r,t,i,s){const l=NM(s);switch(i){case sv:return r*t;case w0:return r*t/l.components*l.byteLength;case D0:return r*t/l.components*l.byteLength;case Zs:return r*t*2/l.components*l.byteLength;case U0:return r*t*2/l.components*l.byteLength;case rv:return r*t*3/l.components*l.byteLength;case Gi:return r*t*4/l.components*l.byteLength;case L0:return r*t*4/l.components*l.byteLength;case cu:case uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case fu:case hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Od:case Fd:return Math.max(r,16)*Math.max(t,8)/4;case Pd:case Id:return Math.max(r,8)*Math.max(t,8)/2;case Bd:case zd:case Gd:case Vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hd:case mu:case kd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case qd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case $d:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case t0:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case e0:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case n0:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case i0:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case a0:case s0:case r0:return Math.ceil(r/4)*Math.ceil(t/4)*16;case o0:case l0:return Math.ceil(r/4)*Math.ceil(t/4)*8;case gu:case c0:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function NM(r){switch(r){case xi:case ev:return{byteLength:1,components:1};case pl:case nv:case Qn:return{byteLength:2,components:1};case R0:case C0:return{byteLength:2,components:4};case aa:case A0:case Hi:return{byteLength:4,components:1};case iv:case av:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:y0}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=y0);function bv(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function PM(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<v.length;S++){const T=v[g],w=v[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,v[g]=w)}v.length=g+1;for(let S=0,T=v.length;S<T;S++){const w=v[S];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var OM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
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
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
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
#endif`,VM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kM=`#ifdef USE_BATCHING
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
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZM=`#ifdef USE_IRIDESCENCE
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
#endif`,KM=`#ifdef USE_BUMPMAP
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,a2=`#define PI 3.141592653589793
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
} // validated`,s2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r2=`vec3 transformedNormal = objectNormal;
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
#endif`,o2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f2="gl_FragColor = linearToOutputTexel( gl_FragColor );",h2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d2=`#ifdef USE_ENVMAP
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
#endif`,p2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,m2=`#ifdef USE_ENVMAP
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
#endif`,g2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
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
#endif`,v2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M2=`#ifdef USE_GRADIENTMAP
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
}`,b2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,R2=`#ifdef USE_ENVMAP
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
#endif`,C2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L2=`PhysicalMaterial material;
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
#endif`,N2=`uniform sampler2D dfgLUT;
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
}`,P2=`
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
#endif`,O2=`#if defined( RE_IndirectDiffuse )
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
#endif`,I2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,B2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W2=`#if defined( USE_POINTS_UV )
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
#endif`,Y2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J2=`#ifdef USE_MORPHTARGETS
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
#endif`,j2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a3=`#ifdef USE_NORMALMAP
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
#endif`,s3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y3=`float getShadowMask() {
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
}`,S3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M3=`#ifdef USE_SKINNING
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
#endif`,b3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E3=`#ifdef USE_SKINNING
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
#endif`,T3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w3=`#ifdef USE_TRANSMISSION
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
#endif`,D3=`#ifdef USE_TRANSMISSION
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
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I3=`uniform sampler2D t2D;
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
}`,F3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G3=`#include <common>
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
}`,V3=`#if DEPTH_PACKING == 3200
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
}`,k3=`#define DISTANCE
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
}`,X3=`#define DISTANCE
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
}`,W3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q3=`uniform float scale;
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
}`,Z3=`uniform vec3 diffuse;
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
}`,K3=`#include <common>
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
}`,Q3=`uniform vec3 diffuse;
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
}`,J3=`#define LAMBERT
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
}`,j3=`#define LAMBERT
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
}`,$3=`#define MATCAP
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
}`,tb=`#define MATCAP
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
}`,eb=`#define NORMAL
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
}`,nb=`#define NORMAL
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
}`,ib=`#define PHONG
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
}`,ab=`#define PHONG
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
}`,sb=`#define STANDARD
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
}`,rb=`#define STANDARD
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
}`,ob=`#define TOON
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
}`,lb=`#define TOON
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
}`,cb=`uniform float size;
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
}`,ub=`uniform vec3 diffuse;
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
}`,fb=`#include <common>
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
}`,hb=`uniform vec3 color;
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
}`,db=`uniform float rotation;
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
}`,pb=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:OM,alphahash_pars_fragment:IM,alphamap_fragment:FM,alphamap_pars_fragment:BM,alphatest_fragment:zM,alphatest_pars_fragment:HM,aomap_fragment:GM,aomap_pars_fragment:VM,batching_pars_vertex:kM,batching_vertex:XM,begin_vertex:WM,beginnormal_vertex:YM,bsdfs:qM,iridescence_fragment:ZM,bumpmap_pars_fragment:KM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:jM,clipping_planes_vertex:$M,color_fragment:t2,color_pars_fragment:e2,color_pars_vertex:n2,color_vertex:i2,common:a2,cube_uv_reflection_fragment:s2,defaultnormal_vertex:r2,displacementmap_pars_vertex:o2,displacementmap_vertex:l2,emissivemap_fragment:c2,emissivemap_pars_fragment:u2,colorspace_fragment:f2,colorspace_pars_fragment:h2,envmap_fragment:d2,envmap_common_pars_fragment:p2,envmap_pars_fragment:m2,envmap_pars_vertex:g2,envmap_physical_pars_fragment:R2,envmap_vertex:_2,fog_vertex:v2,fog_pars_vertex:x2,fog_fragment:y2,fog_pars_fragment:S2,gradientmap_pars_fragment:M2,lightmap_pars_fragment:b2,lights_lambert_fragment:E2,lights_lambert_pars_fragment:T2,lights_pars_begin:A2,lights_toon_fragment:C2,lights_toon_pars_fragment:w2,lights_phong_fragment:D2,lights_phong_pars_fragment:U2,lights_physical_fragment:L2,lights_physical_pars_fragment:N2,lights_fragment_begin:P2,lights_fragment_maps:O2,lights_fragment_end:I2,lightprobes_pars_fragment:F2,logdepthbuf_fragment:B2,logdepthbuf_pars_fragment:z2,logdepthbuf_pars_vertex:H2,logdepthbuf_vertex:G2,map_fragment:V2,map_pars_fragment:k2,map_particle_fragment:X2,map_particle_pars_fragment:W2,metalnessmap_fragment:Y2,metalnessmap_pars_fragment:q2,morphinstance_vertex:Z2,morphcolor_vertex:K2,morphnormal_vertex:Q2,morphtarget_pars_vertex:J2,morphtarget_vertex:j2,normal_fragment_begin:$2,normal_fragment_maps:t3,normal_pars_fragment:e3,normal_pars_vertex:n3,normal_vertex:i3,normalmap_pars_fragment:a3,clearcoat_normal_fragment_begin:s3,clearcoat_normal_fragment_maps:r3,clearcoat_pars_fragment:o3,iridescence_pars_fragment:l3,opaque_fragment:c3,packing:u3,premultiplied_alpha_fragment:f3,project_vertex:h3,dithering_fragment:d3,dithering_pars_fragment:p3,roughnessmap_fragment:m3,roughnessmap_pars_fragment:g3,shadowmap_pars_fragment:_3,shadowmap_pars_vertex:v3,shadowmap_vertex:x3,shadowmask_pars_fragment:y3,skinbase_vertex:S3,skinning_pars_vertex:M3,skinning_vertex:b3,skinnormal_vertex:E3,specularmap_fragment:T3,specularmap_pars_fragment:A3,tonemapping_fragment:R3,tonemapping_pars_fragment:C3,transmission_fragment:w3,transmission_pars_fragment:D3,uv_pars_fragment:U3,uv_pars_vertex:L3,uv_vertex:N3,worldpos_vertex:P3,background_vert:O3,background_frag:I3,backgroundCube_vert:F3,backgroundCube_frag:B3,cube_vert:z3,cube_frag:H3,depth_vert:G3,depth_frag:V3,distance_vert:k3,distance_frag:X3,equirect_vert:W3,equirect_frag:Y3,linedashed_vert:q3,linedashed_frag:Z3,meshbasic_vert:K3,meshbasic_frag:Q3,meshlambert_vert:J3,meshlambert_frag:j3,meshmatcap_vert:$3,meshmatcap_frag:tb,meshnormal_vert:eb,meshnormal_frag:nb,meshphong_vert:ib,meshphong_frag:ab,meshphysical_vert:sb,meshphysical_frag:rb,meshtoon_vert:ob,meshtoon_frag:lb,points_vert:cb,points_frag:ub,shadow_vert:fb,shadow_frag:hb,sprite_vert:db,sprite_frag:pb},Pt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},ji={basic:{uniforms:Yn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Yn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Yn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Yn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Yn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ae(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Yn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Yn([Pt.points,Pt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Yn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Yn([Pt.common,Pt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Yn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Yn([Pt.sprite,Pt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Yn([Pt.common,Pt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Yn([Pt.lights,Pt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ji.physical={uniforms:Yn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const eu={r:0,b:0,g:0},mb=new Ze,Ev=new re;Ev.set(-1,0,0,0,1,0,0,0,1);function gb(r,t,i,s,l,c){const f=new ae(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function S(F){let B=F.isScene===!0?F.background:null;if(B&&B.isTexture){const C=F.backgroundBlurriness>0;B=t.get(B,C)}return B}function T(F){let B=!1;const C=S(F);C===null?M(f,d):C&&C.isColor&&(M(C,1),B=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(F,B){const C=S(B);C&&(C.isCubeTexture||C.mapping===Eu)?(p===void 0&&(p=new yn(new ro(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:no(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(mb.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Ev),p.material.toneMapped=xe.getTransfer(C.colorSpace)!==De,(_!==C||v!==C.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=C,v=C.version,g=r.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new yn(new Sl(2,2),new Un({name:"BackgroundMaterial",uniforms:no(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=xe.getTransfer(C.colorSpace)!==De,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=C,v=C.version,g=r.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function M(F,B){F.getRGB(eu,_v(r)),i.buffers.color.setClear(eu.r,eu.g,eu.b,B,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(F,B=1){f.set(F),d=B,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(F){d=F,M(f,d)},render:T,addToRenderList:w,dispose:y}}function _b(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(G,q,ct,gt,J){let I=!1;const H=v(G,gt,ct,q);c!==H&&(c=H,p(c.object)),I=S(G,gt,ct,J),I&&T(G,gt,ct,J),J!==null&&t.update(J,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,C(G,q,ct,gt),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,q,ct,gt){const J=gt.wireframe===!0;let I=s[q.id];I===void 0&&(I={},s[q.id]=I);const H=G.isInstancedMesh===!0?G.id:0;let $=I[H];$===void 0&&($={},I[H]=$);let pt=$[ct.id];pt===void 0&&(pt={},$[ct.id]=pt);let bt=pt[J];return bt===void 0&&(bt=g(m()),pt[J]=bt),bt}function g(G){const q=[],ct=[],gt=[];for(let J=0;J<i;J++)q[J]=0,ct[J]=0,gt[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ct,attributeDivisors:gt,object:G,attributes:{},index:null}}function S(G,q,ct,gt){const J=c.attributes,I=q.attributes;let H=0;const $=ct.getAttributes();for(const pt in $)if($[pt].location>=0){const U=J[pt];let Z=I[pt];if(Z===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==gt}function T(G,q,ct,gt){const J={},I=q.attributes;let H=0;const $=ct.getAttributes();for(const pt in $)if($[pt].location>=0){let U=I[pt];U===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),J[pt]=Z,H++}c.attributes=J,c.attributesNum=H,c.index=gt}function w(){const G=c.newAttributes;for(let q=0,ct=G.length;q<ct;q++)G[q]=0}function M(G){y(G,0)}function y(G,q){const ct=c.newAttributes,gt=c.enabledAttributes,J=c.attributeDivisors;ct[G]=1,gt[G]===0&&(r.enableVertexAttribArray(G),gt[G]=1),J[G]!==q&&(r.vertexAttribDivisor(G,q),J[G]=q)}function F(){const G=c.newAttributes,q=c.enabledAttributes;for(let ct=0,gt=q.length;ct<gt;ct++)q[ct]!==G[ct]&&(r.disableVertexAttribArray(ct),q[ct]=0)}function B(G,q,ct,gt,J,I,H){H===!0?r.vertexAttribIPointer(G,q,ct,J,I):r.vertexAttribPointer(G,q,ct,gt,J,I)}function C(G,q,ct,gt){w();const J=gt.attributes,I=ct.getAttributes(),H=q.defaultAttributeValues;for(const $ in I){const pt=I[$];if(pt.location>=0){let bt=J[$];if(bt===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(bt=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(bt=G.instanceColor)),bt!==void 0){const U=bt.normalized,Z=bt.itemSize,yt=t.get(bt);if(yt===void 0)continue;const Rt=yt.buffer,Ot=yt.type,at=yt.bytesPerElement,xt=Ot===r.INT||Ot===r.UNSIGNED_INT||bt.gpuType===A0;if(bt.isInterleavedBufferAttribute){const Mt=bt.data,zt=Mt.stride,ne=bt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<pt.locationSize;Qt++)y(pt.location+Qt,Mt.meshPerAttribute);G.isInstancedMesh!==!0&&gt._maxInstanceCount===void 0&&(gt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Qt=0;Qt<pt.locationSize;Qt++)M(pt.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Qt=0;Qt<pt.locationSize;Qt++)B(pt.location+Qt,Z/pt.locationSize,Ot,U,zt*at,(ne+Z/pt.locationSize*Qt)*at,xt)}else{if(bt.isInstancedBufferAttribute){for(let Mt=0;Mt<pt.locationSize;Mt++)y(pt.location+Mt,bt.meshPerAttribute);G.isInstancedMesh!==!0&&gt._maxInstanceCount===void 0&&(gt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Mt=0;Mt<pt.locationSize;Mt++)M(pt.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Mt=0;Mt<pt.locationSize;Mt++)B(pt.location+Mt,Z/pt.locationSize,Ot,U,Z*at,Z/pt.locationSize*Mt*at,xt)}}else if(H!==void 0){const U=H[$];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(pt.location,U);break;case 3:r.vertexAttrib3fv(pt.location,U);break;case 4:r.vertexAttrib4fv(pt.location,U);break;default:r.vertexAttrib1fv(pt.location,U)}}}}F()}function P(){N();for(const G in s){const q=s[G];for(const ct in q){const gt=q[ct];for(const J in gt){const I=gt[J];for(const H in I)_(I[H].object),delete I[H];delete gt[J]}}delete s[G]}}function L(G){if(s[G.id]===void 0)return;const q=s[G.id];for(const ct in q){const gt=q[ct];for(const J in gt){const I=gt[J];for(const H in I)_(I[H].object),delete I[H];delete gt[J]}}delete s[G.id]}function O(G){for(const q in s){const ct=s[q];for(const gt in ct){const J=ct[gt];if(J[G.id]===void 0)continue;const I=J[G.id];for(const H in I)_(I[H].object),delete I[H];delete J[G.id]}}}function b(G){for(const q in s){const ct=s[q],gt=G.isInstancedMesh===!0?G.id:0,J=ct[gt];if(J!==void 0){for(const I in J){const H=J[I];for(const $ in H)_(H[$].object),delete H[$];delete J[I]}delete ct[gt],Object.keys(ct).length===0&&delete s[q]}}}function N(){W(),f=!0,c!==l&&(c=l,p(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:W,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:M,disableUnusedAttributes:F}}function vb(r,t,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function d(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function xb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Gi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const b=O===Qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==xi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Hi&&!b)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ee("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:F,maxVaryings:B,maxFragmentUniforms:C,maxSamples:P,samples:L}}function yb(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Da,d=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||s!==0||l;return l=g,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const T=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!l||T===null||T.length===0||c&&!M)c?_(null):p();else{const F=c?0:s,B=F*4;let C=y.clippingState||null;m.value=C,C=_(T,g,B,S);for(let P=0;P!==B;++P)C[P]=i[P];y.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,S,T){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,T!==!0||M===null){const y=S+w*4,F=g.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<y)&&(M=new Float32Array(y));for(let B=0,C=S;B!==w;++B,C+=4)f.copy(v[B]).applyMatrix4(F,d),f.normal.toArray(M,C),M[C+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const ps=4,v1=[.125,.215,.35,.446,.526,.582],ks=20,Sb=256,ol=new Tu,x1=new ae;let dd=null,pd=0,md=0,gd=!1;const Mb=new j;class h0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=Mb}=c;dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dd,pd,md),this._renderer.xr.enabled=gd,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===qs||t.mapping===to?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Qn,format:Gi,colorSpace:vu,depthBuffer:!1},l=y1(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y1(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bb(c)),this._blurMaterial=Tb(c,t,i),this._ggxMaterial=Eb(c,t,i)}return l}_compileMaterial(t){const i=new yn(new sa,t);this._renderer.compile(i,ol)}_sceneToCubeUV(t,i,s,l,c){const m=new vi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(x1),v.toneMapping=ia,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new ro,new z0({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let y=!1;const F=t.background;F?F.isColor&&(M.color.copy(F),t.background=null,y=!0):(M.color.copy(x1),y=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[B],c.y,c.z)):C===1?(m.up.set(0,0,p[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[B],c.z)):(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[B]));const P=this._cubeSize;kr(l,C*P,B>2?P:0,P,P),v.setRenderTarget(l),y&&v.render(w,m),v.render(t,m)}v.toneMapping=S,v.autoClear=g,t.background=F}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===qs||t.mapping===to;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=M1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S1());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,ol)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:T}=this,w=this._sizeLods[s],M=3*w*(s>T-ps?s-T+ps:0),y=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=T-i,kr(c,M,y,3*w,2*w),l.setRenderTarget(c),l.render(d,ol),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,kr(t,M,y,3*w,2*w),l.setRenderTarget(t),l.render(d,ol)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&be("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ks-1),w=c/T,M=isFinite(c)?1+Math.floor(_*w):ks;M>ks&&ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ks}`);const y=[];let F=0;for(let O=0;O<ks;++O){const b=O/w,N=Math.exp(-b*b/2);y.push(N),O===0?F+=N:O<M&&(F+=2*N)}for(let O=0;O<y.length;O++)y[O]=y[O]/F;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:B}=this;g.dTheta.value=T,g.mipInt.value=B-s;const C=this._sizeLods[l],P=3*C*(l>B-ps?l-B+ps:0),L=4*(this._cubeSize-C);kr(i,P,L,3*C,2*C),m.setRenderTarget(i),m.render(v,ol)}}function bb(r){const t=[],i=[],s=[];let l=r;const c=r-ps+1+v1.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-ps?m=v1[f-r+ps-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,w=3,M=2,y=1,F=new Float32Array(w*T*S),B=new Float32Array(M*T*S),C=new Float32Array(y*T*S);for(let L=0;L<S;L++){const O=L%3*2/3-1,b=L>2?0:-1,N=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];F.set(N,w*T*L),B.set(g,M*T*L);const W=[L,L,L,L,L,L];C.set(W,y*T*L)}const P=new sa;P.setAttribute("position",new yi(F,w)),P.setAttribute("uv",new yi(B,M)),P.setAttribute("faceIndex",new yi(C,y)),s.push(new yn(P,null)),l>ps&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function y1(r,t,i){const s=new Fn(r,t,i);return s.texture.mapping=Eu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Eb(r,t,i){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Tb(r,t,i){const s=new Float32Array(ks),l=new j(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function S1(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function M1(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}class Tv extends Fn{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new mv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ro(5,5,5),c=new Un({name:"CubemapFromEquirect",uniforms:no(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Vi});c.uniforms.tEquirect.value=i;const f=new yn(l,c),d=i.minFilter;return i.minFilter===Xs&&(i.minFilter=Dn),new AM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function Ab(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Hh||S===Gh)if(t.has(g)){const T=t.get(g).texture;return d(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new Tv(T.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,T=S===Hh||S===Gh,w=S===qs||S===to;if(T||w){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new h0(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const F=g.image;return T&&F&&F.height>0||w&&F&&m(F)?(s===null&&(s=new h0(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,S){return S===Hh?g.mapping=qs:S===Gh&&(g.mapping=to),g}function m(g){let S=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&S++;return S===T}function p(g){const S=g.target;S.removeEventListener("dispose",p);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const T=i.get(S);T!==void 0&&(i.delete(S),T.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function Rb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Kr("WebGLRenderer: "+s+" extension not supported."),l}}}function Cb(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(t.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)t.update(g[S],r.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,T=v.attributes.position;let w=0;if(T===void 0)return;if(S!==null){const F=S.array;w=S.version;for(let B=0,C=F.length;B<C;B+=3){const P=F[B+0],L=F[B+1],O=F[B+2];g.push(P,L,L,O,O,P)}}else{const F=T.array;w=T.version;for(let B=0,C=F.length/3-1;B<C;B+=3){const P=B+0,L=B+1,O=B+2;g.push(P,L,L,O,O,P)}}const M=new(T.count>=65535?dv:hv)(g,1);M.version=w;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function wb(r,t,i){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*f),i.update(g,s,1)}function p(v,g,S){S!==0&&(r.drawElementsInstanced(s,g,c,v*f,S),i.update(g,s,S))}function _(v,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,S);let w=0;for(let M=0;M<S;M++)w+=g[M];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function Db(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:be("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Ub(r,t,i){const s=new WeakMap,l=new nn;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let W=function(){b.dispose(),s.delete(d),d.removeEventListener("dispose",W)};var S=W;g!==void 0&&g.texture.dispose();const T=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let P=d.attributes.position.count*C,L=1;P>t.maxTextureSize&&(L=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*L*4*v),b=new cv(O,P,L,v);b.type=Hi,b.needsUpdate=!0;const N=C*4;for(let G=0;G<v;G++){const q=y[G],ct=F[G],gt=B[G],J=P*L*4*G;for(let I=0;I<q.count;I++){const H=I*N;T===!0&&(l.fromBufferAttribute(q,I),O[J+H+0]=l.x,O[J+H+1]=l.y,O[J+H+2]=l.z,O[J+H+3]=0),w===!0&&(l.fromBufferAttribute(ct,I),O[J+H+4]=l.x,O[J+H+5]=l.y,O[J+H+6]=l.z,O[J+H+7]=0),M===!0&&(l.fromBufferAttribute(gt,I),O[J+H+8]=l.x,O[J+H+9]=l.y,O[J+H+10]=l.z,O[J+H+11]=gt.itemSize===4?l.w:1)}}g={count:v,texture:b,size:new qt(P,L)},s.set(d,g),d.addEventListener("dispose",W)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const w=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function Lb(r,t,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const Nb={[M0]:"LINEAR_TONE_MAPPING",[b0]:"REINHARD_TONE_MAPPING",[E0]:"CINEON_TONE_MAPPING",[Mu]:"ACES_FILMIC_TONE_MAPPING",[$r]:"AGX_TONE_MAPPING",[bu]:"NEUTRAL_TONE_MAPPING",[T0]:"CUSTOM_TONE_MAPPING"};function Pb(r,t,i,s,l,c){const f=new Fn(t,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new eo(t,i):void 0}),d=new Fn(t,i,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),m=new sa;m.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ki([0,2,0,0,2,0],2));const p=new vv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new yn(m,p),v=new Tu(-1,1,1,-1,0,1);let g=null,S=null,T=!1,w,M=null,y=[],F=!1;this.setSize=function(B,C){f.setSize(B,C),d.setSize(B,C);for(let P=0;P<y.length;P++){const L=y[P];L.setSize&&L.setSize(B,C)}},this.setEffects=function(B){y=B,F=y.length>0&&y[0].isRenderPass===!0;const C=f.width,P=f.height;for(let L=0;L<y.length;L++){const O=y[L];O.setSize&&O.setSize(C,P)}},this.begin=function(B,C){if(T||B.toneMapping===ia&&y.length===0)return!1;if(M=C,C!==null){const P=C.width,L=C.height;(f.width!==P||f.height!==L)&&this.setSize(P,L)}return F===!1&&B.setRenderTarget(f),w=B.toneMapping,B.toneMapping=ia,!0},this.hasRenderPass=function(){return F},this.end=function(B,C){B.toneMapping=w,T=!0;let P=f,L=d;for(let O=0;O<y.length;O++){const b=y[O];if(b.enabled!==!1&&(b.render(B,L,P,C),b.needsSwap!==!1)){const N=P;P=L,L=N}}if(g!==B.outputColorSpace||S!==B.toneMapping){g=B.outputColorSpace,S=B.toneMapping,p.defines={},xe.getTransfer(g)===De&&(p.defines.SRGB_TRANSFER="");const O=Nb[S];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,B.setRenderTarget(M),B.render(_,v),M=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),d.dispose(),m.dispose(),p.dispose()}}const Av=new kn,d0=new eo(1,1),Rv=new cv,Cv=new jS,wv=new mv,b1=[],E1=[],T1=new Float32Array(16),A1=new Float32Array(9),R1=new Float32Array(4);function oo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=b1[l];if(c===void 0&&(c=new Float32Array(l),b1[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function An(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Rn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Ru(r,t){let i=E1[t];i===void 0&&(i=new Int32Array(t),E1[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Ob(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Ib(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2fv(this.addr,t),Rn(i,t)}}function Fb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(An(i,t))return;r.uniform3fv(this.addr,t),Rn(i,t)}}function Bb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4fv(this.addr,t),Rn(i,t)}}function zb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Rn(i,t)}else{if(An(i,s))return;R1.set(s),r.uniformMatrix2fv(this.addr,!1,R1),Rn(i,s)}}function Hb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Rn(i,t)}else{if(An(i,s))return;A1.set(s),r.uniformMatrix3fv(this.addr,!1,A1),Rn(i,s)}}function Gb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Rn(i,t)}else{if(An(i,s))return;T1.set(s),r.uniformMatrix4fv(this.addr,!1,T1),Rn(i,s)}}function Vb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function kb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2iv(this.addr,t),Rn(i,t)}}function Xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;r.uniform3iv(this.addr,t),Rn(i,t)}}function Wb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4iv(this.addr,t),Rn(i,t)}}function Yb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function qb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2uiv(this.addr,t),Rn(i,t)}}function Zb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;r.uniform3uiv(this.addr,t),Rn(i,t)}}function Kb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4uiv(this.addr,t),Rn(i,t)}}function Qb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(d0.compareFunction=i.isReversedDepthBuffer()?P0:N0,c=d0):c=Av,i.setTexture2D(t||c,l)}function Jb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Cv,l)}function jb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||wv,l)}function $b(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Rv,l)}function tE(r){switch(r){case 5126:return Ob;case 35664:return Ib;case 35665:return Fb;case 35666:return Bb;case 35674:return zb;case 35675:return Hb;case 35676:return Gb;case 5124:case 35670:return Vb;case 35667:case 35671:return kb;case 35668:case 35672:return Xb;case 35669:case 35673:return Wb;case 5125:return Yb;case 36294:return qb;case 36295:return Zb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return $b}}function eE(r,t){r.uniform1fv(this.addr,t)}function nE(r,t){const i=oo(t,this.size,2);r.uniform2fv(this.addr,i)}function iE(r,t){const i=oo(t,this.size,3);r.uniform3fv(this.addr,i)}function aE(r,t){const i=oo(t,this.size,4);r.uniform4fv(this.addr,i)}function sE(r,t){const i=oo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function rE(r,t){const i=oo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function oE(r,t){const i=oo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function lE(r,t){r.uniform1iv(this.addr,t)}function cE(r,t){r.uniform2iv(this.addr,t)}function uE(r,t){r.uniform3iv(this.addr,t)}function fE(r,t){r.uniform4iv(this.addr,t)}function hE(r,t){r.uniform1uiv(this.addr,t)}function dE(r,t){r.uniform2uiv(this.addr,t)}function pE(r,t){r.uniform3uiv(this.addr,t)}function mE(r,t){r.uniform4uiv(this.addr,t)}function gE(r,t,i){const s=this.cache,l=t.length,c=Ru(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=d0:f=Av;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function _E(r,t,i){const s=this.cache,l=t.length,c=Ru(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Cv,c[f])}function vE(r,t,i){const s=this.cache,l=t.length,c=Ru(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||wv,c[f])}function xE(r,t,i){const s=this.cache,l=t.length,c=Ru(i,l);An(s,c)||(r.uniform1iv(this.addr,c),Rn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Rv,c[f])}function yE(r){switch(r){case 5126:return eE;case 35664:return nE;case 35665:return iE;case 35666:return aE;case 35674:return sE;case 35675:return rE;case 35676:return oE;case 5124:case 35670:return lE;case 35667:case 35671:return cE;case 35668:case 35672:return uE;case 35669:case 35673:return fE;case 5125:return hE;case 36294:return dE;case 36295:return pE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return xE}}class SE{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=tE(i.type)}}class ME{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yE(i.type)}}class bE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function C1(r,t){r.seq.push(t),r.map[t.id]=t}function EE(r,t,i){const s=r.name,l=s.length;for(_d.lastIndex=0;;){const c=_d.exec(s),f=_d.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){C1(i,p===void 0?new SE(d,r,t):new ME(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new bE(d),C1(i,v)),i=v}}}class du{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);EE(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function w1(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const TE=37297;let AE=0;function RE(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const D1=new re;function CE(r){xe._getMatrix(D1,xe.workingColorSpace,r);const t=`mat3( ${D1.elements.map(i=>i.toFixed(4))} )`;switch(xe.getTransfer(r)){case xu:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function U1(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+RE(r.getShaderSource(t),d)}else return c}function wE(r,t){const i=CE(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const DE={[M0]:"Linear",[b0]:"Reinhard",[E0]:"Cineon",[Mu]:"ACESFilmic",[$r]:"AgX",[bu]:"Neutral",[T0]:"Custom"};function UE(r,t){const i=DE[t];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const nu=new j;function LE(){xe.getLuminanceCoefficients(nu);const r=nu.x.toFixed(4),t=nu.y.toFixed(4),i=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function PE(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function OE(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function ul(r){return r!==""}function L1(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function N1(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function p0(r){return r.replace(IE,BE)}const FE=new Map;function BE(r,t){let i=ue[t];if(i===void 0){const s=FE.get(t);if(s!==void 0)i=ue[s],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return p0(i)}const zE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P1(r){return r.replace(zE,HE)}function HE(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function O1(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const GE={[lu]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};function VE(r){return GE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kE={[qs]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function XE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":kE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const WE={[to]:"ENVMAP_MODE_REFRACTION"};function YE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":WE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qE={[S0]:"ENVMAP_BLENDING_MULTIPLY",[mS]:"ENVMAP_BLENDING_MIX",[gS]:"ENVMAP_BLENDING_ADD"};function ZE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":qE[r.combine]||"ENVMAP_BLENDING_NONE"}function KE(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function QE(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=VE(i),p=XE(i),_=YE(i),v=ZE(i),g=KE(i),S=NE(i),T=PE(c),w=l.createProgram();let M,y,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ul).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ul).join(`
`),y.length>0&&(y+=`
`)):(M=[O1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),y=[O1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ia?"#define TONE_MAPPING":"",i.toneMapping!==ia?ue.tonemapping_pars_fragment:"",i.toneMapping!==ia?UE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,wE("linearToOutputTexel",i.outputColorSpace),LE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ul).join(`
`)),f=p0(f),f=L1(f,i),f=N1(f,i),d=p0(d),d=L1(d,i),d=N1(d,i),f=P1(f),d=P1(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===G_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===G_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const B=F+M+f,C=F+y+d,P=w1(l,l.VERTEX_SHADER,B),L=w1(l,l.FRAGMENT_SHADER,C);l.attachShader(w,P),l.attachShader(w,L),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function O(G){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(w)||"",ct=l.getShaderInfoLog(P)||"",gt=l.getShaderInfoLog(L)||"",J=q.trim(),I=ct.trim(),H=gt.trim();let $=!0,pt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,P,L);else{const bt=U1(l,P,"vertex"),U=U1(l,L,"fragment");be("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+bt+`
`+U)}else J!==""?ee("WebGLProgram: Program Info Log:",J):(I===""||H==="")&&(pt=!1);pt&&(G.diagnostics={runnable:$,programLog:J,vertexShader:{log:I,prefix:M},fragmentShader:{log:H,prefix:y}})}l.deleteShader(P),l.deleteShader(L),b=new du(l,w),N=OE(l,w)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=l.getProgramParameter(w,TE)),W},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=AE++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=L,this}let JE=0;class jE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new $E(t),i.set(t,s)),s}}class $E{constructor(t){this.id=JE++,this.code=t,this.usedTimes=0}}function tT(r){return r===Zs||r===mu||r===gu}function eT(r,t,i,s,l,c){const f=new F0,d=new jE,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,N,W,G,q,ct){const gt=G.fog,J=q.geometry,I=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,$=t.get(b.envMap||I,H),pt=$&&$.mapping===Eu?$.image.height:null,bt=S[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&ee("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const U=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=U!==void 0?U.length:0;let yt=0;J.morphAttributes.position!==void 0&&(yt=1),J.morphAttributes.normal!==void 0&&(yt=2),J.morphAttributes.color!==void 0&&(yt=3);let Rt,Ot,at,xt;if(bt){const Gt=ji[bt];Rt=Gt.vertexShader,Ot=Gt.fragmentShader}else{Rt=b.vertexShader,Ot=b.fragmentShader;const Gt=d.getVertexShaderStage(b),je=d.getFragmentShaderStage(b);d.update(b,Gt,je),at=Gt.id,xt=je.id}const Mt=r.getRenderTarget(),zt=r.state.buffers.depth.getReversed(),ne=q.isInstancedMesh===!0,Qt=q.isBatchedMesh===!0,Ke=!!b.map,fe=!!b.matcap,ye=!!$,Se=!!b.aoMap,de=!!b.lightMap,an=!!b.bumpMap&&b.wireframe===!1,sn=!!b.normalMap,rn=!!b.displacementMap,un=!!b.emissiveMap,Ye=!!b.metalnessMap,on=!!b.roughnessMap,Y=b.anisotropy>0,Be=b.clearcoat>0,Re=b.dispersion>0,D=b.iridescence>0,E=b.sheen>0,Q=b.transmission>0,st=Y&&!!b.anisotropyMap,ft=Be&&!!b.clearcoatMap,Et=Be&&!!b.clearcoatNormalMap,wt=Be&&!!b.clearcoatRoughnessMap,ut=D&&!!b.iridescenceMap,ht=D&&!!b.iridescenceThicknessMap,At=E&&!!b.sheenColorMap,Ft=E&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,Dt=!!b.specularColorMap,Kt=!!b.specularIntensityMap,Jt=Q&&!!b.transmissionMap,ie=Q&&!!b.thicknessMap,k=!!b.gradientMap,Tt=!!b.alphaMap,mt=b.alphaTest>0,Ct=!!b.alphaHash,It=!!b.extensions;let St=ia;b.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(St=r.toneMapping);const Wt={shaderID:bt,shaderType:b.type,shaderName:b.name,vertexShader:Rt,fragmentShader:Ot,defines:b.defines,customVertexShaderID:at,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&q._colorsTexture!==null,instancing:ne,instancingColor:ne&&q.instanceColor!==null,instancingMorph:ne&&q.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ke,matcap:fe,envMap:ye,envMapMode:ye&&$.mapping,envMapCubeUVHeight:pt,aoMap:Se,lightMap:de,bumpMap:an,normalMap:sn,displacementMap:rn,emissiveMap:un,normalMapObjectSpace:sn&&b.normalMapType===yS,normalMapTangentSpace:sn&&b.normalMapType===_u,packedNormalMap:sn&&b.normalMapType===_u&&tT(b.normalMap.format),metalnessMap:Ye,roughnessMap:on,anisotropy:Y,anisotropyMap:st,clearcoat:Be,clearcoatMap:ft,clearcoatNormalMap:Et,clearcoatRoughnessMap:wt,dispersion:Re,iridescence:D,iridescenceMap:ut,iridescenceThicknessMap:ht,sheen:E,sheenColorMap:At,sheenRoughnessMap:Ft,specularMap:Lt,specularColorMap:Dt,specularIntensityMap:Kt,transmission:Q,transmissionMap:Jt,thicknessMap:ie,gradientMap:k,opaque:b.transparent===!1&&b.blending===Zr&&b.alphaToCoverage===!1,alphaMap:Tt,alphaTest:mt,alphaHash:Ct,combine:b.combine,mapUv:Ke&&T(b.map.channel),aoMapUv:Se&&T(b.aoMap.channel),lightMapUv:de&&T(b.lightMap.channel),bumpMapUv:an&&T(b.bumpMap.channel),normalMapUv:sn&&T(b.normalMap.channel),displacementMapUv:rn&&T(b.displacementMap.channel),emissiveMapUv:un&&T(b.emissiveMap.channel),metalnessMapUv:Ye&&T(b.metalnessMap.channel),roughnessMapUv:on&&T(b.roughnessMap.channel),anisotropyMapUv:st&&T(b.anisotropyMap.channel),clearcoatMapUv:ft&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Et&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:At&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&T(b.sheenRoughnessMap.channel),specularMapUv:Lt&&T(b.specularMap.channel),specularColorMapUv:Dt&&T(b.specularColorMap.channel),specularIntensityMapUv:Kt&&T(b.specularIntensityMap.channel),transmissionMapUv:Jt&&T(b.transmissionMap.channel),thicknessMapUv:ie&&T(b.thicknessMap.channel),alphaMapUv:Tt&&T(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(sn||Y),vertexNormals:!!J.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(Ke||Tt),fog:!!gt,useFog:b.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||J.attributes.normal===void 0&&sn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:zt,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:yt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ct.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:St,decodeVideoTexture:Ke&&b.map.isVideoTexture===!0&&xe.getTransfer(b.map.colorSpace)===De,decodeVideoTextureEmissive:un&&b.emissiveMap.isVideoTexture===!0&&xe.getTransfer(b.emissiveMap.colorSpace)===De,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$i,flipSided:b.side===Kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function M(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)N.push(W),N.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(y(N,b),F(N,b),N.push(r.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function y(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function F(b,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),N.packedNormalMap&&f.enable(22),N.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),N.numLightProbeGrids>0&&f.enable(22),N.hasPositionAttribute&&f.enable(23),b.push(f.mask)}function B(b){const N=S[b.type];let W;if(N){const G=ji[N];W=xl.clone(G.uniforms)}else W=b.uniforms;return W}function C(b,N){let W=_.get(N);return W!==void 0?++W.usedTimes:(W=new QE(r,N,b,l),p.push(W),_.set(N,W)),W}function P(b){if(--b.usedTimes===0){const N=p.indexOf(b);p[N]=p[p.length-1],p.pop(),_.delete(b.cacheKey),b.destroy()}}function L(b){d.remove(b)}function O(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:B,acquireProgram:C,releaseProgram:P,releaseShaderCache:L,programs:p,dispose:O}}function nT(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function iT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function I1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function F1(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,T,w,M,y){let F=r[t];return F===void 0?(F={id:g.id,object:g,geometry:S,material:T,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:y},r[t]=F):(F.id=g.id,F.object=g,F.geometry=S,F.material=T,F.materialVariant=f(g),F.groupOrder=w,F.renderOrder=g.renderOrder,F.z=M,F.group=y),t++,F}function m(g,S,T,w,M,y){const F=d(g,S,T,w,M,y);T.transmission>0?s.push(F):T.transparent===!0?l.push(F):i.push(F)}function p(g,S,T,w,M,y){const F=d(g,S,T,w,M,y);T.transmission>0?s.unshift(F):T.transparent===!0?l.unshift(F):i.unshift(F)}function _(g,S,T){i.length>1&&i.sort(g||iT),s.length>1&&s.sort(S||I1),l.length>1&&l.sort(S||I1),T&&(i.reverse(),s.reverse(),l.reverse())}function v(){for(let g=t,S=r.length;g<S;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function aT(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new F1,r.set(s,[f])):l>=c.length?(f=new F1,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function sT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new ae};break;case"SpotLight":i={position:new j,direction:new j,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":i={color:new ae,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function rT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let oT=0;function lT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function cT(r){const t=new sT,i=rT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new Ze,f=new Ze;function d(p){let _=0,v=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,T=0,w=0,M=0,y=0,F=0,B=0,C=0,P=0,L=0,O=0;p.sort(lT);for(let N=0,W=p.length;N<W;N++){const G=p[N],q=G.color,ct=G.intensity,gt=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Zs?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=q.r*ct,v+=q.g*ct,g+=q.b*ct;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],ct);O++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.directionalShadow[S]=$,s.directionalShadowMap[S]=J,s.directionalShadowMatrix[S]=G.shadow.matrix,F++}s.directional[S]=I,S++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(q).multiplyScalar(ct),I.distance=gt,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[w]=I;const H=G.shadow;if(G.map&&(s.spotLightMap[P]=G.map,P++,H.updateMatrices(G),G.castShadow&&L++),s.spotLightMatrix[w]=H.matrix,G.castShadow){const $=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.spotShadow[w]=$,s.spotShadowMap[w]=J,C++}w++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(q).multiplyScalar(ct),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=I,M++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,s.pointShadow[T]=$,s.pointShadowMap[T]=J,s.pointShadowMatrix[T]=G.shadow.matrix,B++}s.point[T]=I,T++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(ct),I.groundColor.copy(G.groundColor).multiplyScalar(ct),s.hemi[y]=I,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==S||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==M||b.hemiLength!==y||b.numDirectionalShadows!==F||b.numPointShadows!==B||b.numSpotShadows!==C||b.numSpotMaps!==P||b.numLightProbes!==O)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=M,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=C+P-L,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=O,b.directionalLength=S,b.pointLength=T,b.spotLength=w,b.rectAreaLength=M,b.hemiLength=y,b.numDirectionalShadows=F,b.numPointShadows=B,b.numSpotShadows=C,b.numSpotMaps=P,b.numLightProbes=O,s.version=oT++)}function m(p,_){let v=0,g=0,S=0,T=0,w=0;const M=_.matrixWorldInverse;for(let y=0,F=p.length;y<F;y++){const B=p[y];if(B.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),v++}else if(B.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),S++}else if(B.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),f.identity(),c.copy(B.matrixWorld),c.premultiply(M),f.extractRotation(c),C.halfWidth.set(B.width*.5,0,0),C.halfHeight.set(0,B.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),T++}else if(B.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(M),g++}else if(B.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function B1(r){const t=new cT(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function _(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:d,pushLightProbeGrid:m}}function uT(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new B1(r),t.set(l,[d])):c>=f.length?(d=new B1(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const fT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hT=`uniform sampler2D shadow_pass;
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
}`,dT=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],pT=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],z1=new Ze,ll=new j,vd=new j;function mT(r,t,i){let s=new H0;const l=new qt,c=new qt,f=new nn,d=new xv,m=new MM,p={},_=i.maxTextureSize,v={[ms]:Kn,[Kn]:ms,[$i]:$i},g=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:fT,fragmentShader:hT}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new sa;T.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new yn(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let y=this.type;this.render=function(L,O,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===Qy&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=lu);const N=r.getRenderTarget(),W=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Vi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ct=y!==this.type;ct&&O.traverse(function(gt){gt.material&&(Array.isArray(gt.material)?gt.material.forEach(J=>J.needsUpdate=!0):gt.material.needsUpdate=!0)});for(let gt=0,J=L.length;gt<J;gt++){const I=L[gt],H=I.shadow;if(H===void 0){ee("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const $=H.getFrameExtents();l.multiply($),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/$.x),l.x=c.x*$.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/$.y),l.y=c.y*$.y,H.mapSize.y=c.y));const pt=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=pt,H.map===null||ct===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===cl){if(I.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Fn(l.x,l.y,{format:Zs,type:Qn,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new eo(l.x,l.y,Hi),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=Na,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Tn,H.map.depthTexture.magFilter=Tn}else I.isPointLight?(H.map=new Tv(l.x),H.map.depthTexture=new gM(l.x,aa)):(H.map=new Fn(l.x,l.y),H.map.depthTexture=new eo(l.x,l.y,aa)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=Na,this.type===lu?(H.map.depthTexture.compareFunction=pt?P0:N0,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Tn,H.map.depthTexture.magFilter=Tn);H.camera.updateProjectionMatrix()}const bt=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<bt;U++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,U),r.clear();else{U===0&&(r.setRenderTarget(H.map),r.clear());const Z=H.getViewport(U);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),q.viewport(f)}if(I.isPointLight){const Z=H.camera,yt=H.matrix,Rt=I.distance||Z.far;Rt!==Z.far&&(Z.far=Rt,Z.updateProjectionMatrix()),ll.setFromMatrixPosition(I.matrixWorld),Z.position.copy(ll),vd.copy(Z.position),vd.add(dT[U]),Z.up.copy(pT[U]),Z.lookAt(vd),Z.updateMatrixWorld(),yt.makeTranslation(-ll.x,-ll.y,-ll.z),z1.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(z1,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),C(O,b,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===cl&&F(H,b),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(N,W,G)};function F(L,O){const b=t.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Fn(l.x,l.y,{format:Zs,type:Qn})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(O,null,b,g,w,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(O,null,b,S,w,null)}function B(L,O,b,N){let W=null;const G=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)W=G;else if(W=b.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const q=W.uuid,ct=O.uuid;let gt=p[q];gt===void 0&&(gt={},p[q]=gt);let J=gt[ct];J===void 0&&(J=W.clone(),gt[ct]=J,O.addEventListener("dispose",P)),W=J}if(W.visible=O.visible,W.wireframe=O.wireframe,N===cl?W.side=O.shadowSide!==null?O.shadowSide:O.side:W.side=O.shadowSide!==null?O.shadowSide:v[O.side],W.alphaMap=O.alphaMap,W.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,W.map=O.map,W.clipShadows=O.clipShadows,W.clippingPlanes=O.clippingPlanes,W.clipIntersection=O.clipIntersection,W.displacementMap=O.displacementMap,W.displacementScale=O.displacementScale,W.displacementBias=O.displacementBias,W.wireframeLinewidth=O.wireframeLinewidth,W.linewidth=O.linewidth,b.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const q=r.properties.get(W);q.light=b}return W}function C(L,O,b,N,W){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&W===cl)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const ct=t.update(L),gt=L.material;if(Array.isArray(gt)){const J=ct.groups;for(let I=0,H=J.length;I<H;I++){const $=J[I],pt=gt[$.materialIndex];if(pt&&pt.visible){const bt=B(L,pt,N,W);L.onBeforeShadow(r,L,O,b,ct,bt,$),r.renderBufferDirect(b,null,ct,bt,L,$),L.onAfterShadow(r,L,O,b,ct,bt,$)}}}else if(gt.visible){const J=B(L,gt,N,W);L.onBeforeShadow(r,L,O,b,ct,J,null),r.renderBufferDirect(b,null,ct,J,L,null),L.onAfterShadow(r,L,O,b,ct,J,null)}}const q=L.children;for(let ct=0,gt=q.length;ct<gt;ct++)C(q[ct],O,b,N,W)}function P(L){L.target.removeEventListener("dispose",P);for(const b in p){const N=p[b],W=L.target.uuid;W in N&&(N[W].dispose(),delete N[W])}}}function gT(r,t){function i(){let k=!1;const Tt=new nn;let mt=null;const Ct=new nn(0,0,0,0);return{setMask:function(It){mt!==It&&!k&&(r.colorMask(It,It,It,It),mt=It)},setLocked:function(It){k=It},setClear:function(It,St,Wt,Gt,je){je===!0&&(It*=Gt,St*=Gt,Wt*=Gt),Tt.set(It,St,Wt,Gt),Ct.equals(Tt)===!1&&(r.clearColor(It,St,Wt,Gt),Ct.copy(Tt))},reset:function(){k=!1,mt=null,Ct.set(-1,0,0,0)}}}function s(){let k=!1,Tt=!1,mt=null,Ct=null,It=null;return{setReversed:function(St){if(Tt!==St){const Wt=t.get("EXT_clip_control");St?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Tt=St;const Gt=It;It=null,this.setClear(Gt)}},getReversed:function(){return Tt},setTest:function(St){St?Mt(r.DEPTH_TEST):zt(r.DEPTH_TEST)},setMask:function(St){mt!==St&&!k&&(r.depthMask(St),mt=St)},setFunc:function(St){if(Tt&&(St=DS[St]),Ct!==St){switch(St){case Ad:r.depthFunc(r.NEVER);break;case Rd:r.depthFunc(r.ALWAYS);break;case Cd:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case wd:r.depthFunc(r.EQUAL);break;case Dd:r.depthFunc(r.GEQUAL);break;case Ud:r.depthFunc(r.GREATER);break;case Ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ct=St}},setLocked:function(St){k=St},setClear:function(St){It!==St&&(It=St,Tt&&(St=1-St),r.clearDepth(St))},reset:function(){k=!1,mt=null,Ct=null,It=null,Tt=!1}}}function l(){let k=!1,Tt=null,mt=null,Ct=null,It=null,St=null,Wt=null,Gt=null,je=null;return{setTest:function(Ue){k||(Ue?Mt(r.STENCIL_TEST):zt(r.STENCIL_TEST))},setMask:function(Ue){Tt!==Ue&&!k&&(r.stencilMask(Ue),Tt=Ue)},setFunc:function(Ue,si,ri){(mt!==Ue||Ct!==si||It!==ri)&&(r.stencilFunc(Ue,si,ri),mt=Ue,Ct=si,It=ri)},setOp:function(Ue,si,ri){(St!==Ue||Wt!==si||Gt!==ri)&&(r.stencilOp(Ue,si,ri),St=Ue,Wt=si,Gt=ri)},setLocked:function(Ue){k=Ue},setClear:function(Ue){je!==Ue&&(r.clearStencil(Ue),je=Ue)},reset:function(){k=!1,Tt=null,mt=null,Ct=null,It=null,St=null,Wt=null,Gt=null,je=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,T=[],w=null,M=!1,y=null,F=null,B=null,C=null,P=null,L=null,O=null,b=new ae(0,0,0),N=0,W=!1,G=null,q=null,ct=null,gt=null,J=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const pt=r.getParameter(r.VERSION);pt.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(pt)[1]),H=$>=1):pt.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),H=$>=2);let bt=null,U={};const Z=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Rt=new nn().fromArray(Z),Ot=new nn().fromArray(yt);function at(k,Tt,mt,Ct){const It=new Uint8Array(4),St=r.createTexture();r.bindTexture(k,St),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Wt=0;Wt<mt;Wt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,Ct,0,r.RGBA,r.UNSIGNED_BYTE,It):r.texImage2D(Tt+Wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,It);return St}const xt={};xt[r.TEXTURE_2D]=at(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=at(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=at(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=at(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Mt(r.DEPTH_TEST),f.setFunc(jr),an(!1),sn(O_),Mt(r.CULL_FACE),Se(Vi);function Mt(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function zt(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function ne(k,Tt){return g[k]!==Tt?(r.bindFramebuffer(k,Tt),g[k]=Tt,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Tt),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Qt(k,Tt){let mt=T,Ct=!1;if(k){mt=S.get(Tt),mt===void 0&&(mt=[],S.set(Tt,mt));const It=k.textures;if(mt.length!==It.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Wt=It.length;St<Wt;St++)mt[St]=r.COLOR_ATTACHMENT0+St;mt.length=It.length,Ct=!0}}else mt[0]!==r.BACK&&(mt[0]=r.BACK,Ct=!0);Ct&&r.drawBuffers(mt)}function Ke(k){return w!==k?(r.useProgram(k),w=k,!0):!1}const fe={[Vs]:r.FUNC_ADD,[jy]:r.FUNC_SUBTRACT,[$y]:r.FUNC_REVERSE_SUBTRACT};fe[tS]=r.MIN,fe[eS]=r.MAX;const ye={[nS]:r.ZERO,[iS]:r.ONE,[aS]:r.SRC_COLOR,[Ed]:r.SRC_ALPHA,[uS]:r.SRC_ALPHA_SATURATE,[lS]:r.DST_COLOR,[rS]:r.DST_ALPHA,[sS]:r.ONE_MINUS_SRC_COLOR,[Td]:r.ONE_MINUS_SRC_ALPHA,[cS]:r.ONE_MINUS_DST_COLOR,[oS]:r.ONE_MINUS_DST_ALPHA,[fS]:r.CONSTANT_COLOR,[hS]:r.ONE_MINUS_CONSTANT_COLOR,[dS]:r.CONSTANT_ALPHA,[pS]:r.ONE_MINUS_CONSTANT_ALPHA};function Se(k,Tt,mt,Ct,It,St,Wt,Gt,je,Ue){if(k===Vi){M===!0&&(zt(r.BLEND),M=!1);return}if(M===!1&&(Mt(r.BLEND),M=!0),k!==Jy){if(k!==y||Ue!==W){if((F!==Vs||P!==Vs)&&(r.blendEquation(r.FUNC_ADD),F=Vs,P=Vs),Ue)switch(k){case Zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bd:r.blendFunc(r.ONE,r.ONE);break;case I_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case F_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:be("WebGLState: Invalid blending: ",k);break}else switch(k){case Zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case I_:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case F_:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",k);break}B=null,C=null,L=null,O=null,b.set(0,0,0),N=0,y=k,W=Ue}return}It=It||Tt,St=St||mt,Wt=Wt||Ct,(Tt!==F||It!==P)&&(r.blendEquationSeparate(fe[Tt],fe[It]),F=Tt,P=It),(mt!==B||Ct!==C||St!==L||Wt!==O)&&(r.blendFuncSeparate(ye[mt],ye[Ct],ye[St],ye[Wt]),B=mt,C=Ct,L=St,O=Wt),(Gt.equals(b)===!1||je!==N)&&(r.blendColor(Gt.r,Gt.g,Gt.b,je),b.copy(Gt),N=je),y=k,W=!1}function de(k,Tt){k.side===$i?zt(r.CULL_FACE):Mt(r.CULL_FACE);let mt=k.side===Kn;Tt&&(mt=!mt),an(mt),k.blending===Zr&&k.transparent===!1?Se(Vi):Se(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ct=k.stencilWrite;d.setTest(Ct),Ct&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),un(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function an(k){G!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),G=k)}function sn(k){k!==Zy?(Mt(r.CULL_FACE),k!==q&&(k===O_?r.cullFace(r.BACK):k===Ky?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):zt(r.CULL_FACE),q=k}function rn(k){k!==ct&&(H&&r.lineWidth(k),ct=k)}function un(k,Tt,mt){k?(Mt(r.POLYGON_OFFSET_FILL),(gt!==Tt||J!==mt)&&(gt=Tt,J=mt,f.getReversed()&&(Tt=-Tt),r.polygonOffset(Tt,mt))):zt(r.POLYGON_OFFSET_FILL)}function Ye(k){k?Mt(r.SCISSOR_TEST):zt(r.SCISSOR_TEST)}function on(k){k===void 0&&(k=r.TEXTURE0+I-1),bt!==k&&(r.activeTexture(k),bt=k)}function Y(k,Tt,mt){mt===void 0&&(bt===null?mt=r.TEXTURE0+I-1:mt=bt);let Ct=U[mt];Ct===void 0&&(Ct={type:void 0,texture:void 0},U[mt]=Ct),(Ct.type!==k||Ct.texture!==Tt)&&(bt!==mt&&(r.activeTexture(mt),bt=mt),r.bindTexture(k,Tt||xt[k]),Ct.type=k,Ct.texture=Tt)}function Be(){const k=U[bt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Re(){try{r.compressedTexImage2D(...arguments)}catch(k){be("WebGLState:",k)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(k){be("WebGLState:",k)}}function E(){try{r.texSubImage2D(...arguments)}catch(k){be("WebGLState:",k)}}function Q(){try{r.texSubImage3D(...arguments)}catch(k){be("WebGLState:",k)}}function st(){try{r.compressedTexSubImage2D(...arguments)}catch(k){be("WebGLState:",k)}}function ft(){try{r.compressedTexSubImage3D(...arguments)}catch(k){be("WebGLState:",k)}}function Et(){try{r.texStorage2D(...arguments)}catch(k){be("WebGLState:",k)}}function wt(){try{r.texStorage3D(...arguments)}catch(k){be("WebGLState:",k)}}function ut(){try{r.texImage2D(...arguments)}catch(k){be("WebGLState:",k)}}function ht(){try{r.texImage3D(...arguments)}catch(k){be("WebGLState:",k)}}function At(k){return v[k]!==void 0?v[k]:r.getParameter(k)}function Ft(k,Tt){v[k]!==Tt&&(r.pixelStorei(k,Tt),v[k]=Tt)}function Lt(k){Rt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Rt.copy(k))}function Dt(k){Ot.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Ot.copy(k))}function Kt(k,Tt){let mt=p.get(Tt);mt===void 0&&(mt=new WeakMap,p.set(Tt,mt));let Ct=mt.get(k);Ct===void 0&&(Ct=r.getUniformBlockIndex(Tt,k.name),mt.set(k,Ct))}function Jt(k,Tt){const Ct=p.get(Tt).get(k);m.get(Tt)!==Ct&&(r.uniformBlockBinding(Tt,Ct,k.__bindingPointIndex),m.set(Tt,Ct))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},bt=null,U={},g={},S=new WeakMap,T=[],w=null,M=!1,y=null,F=null,B=null,C=null,P=null,L=null,O=null,b=new ae(0,0,0),N=0,W=!1,G=null,q=null,ct=null,gt=null,J=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Ot.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Mt,disable:zt,bindFramebuffer:ne,drawBuffers:Qt,useProgram:Ke,setBlending:Se,setMaterial:de,setFlipSided:an,setCullFace:sn,setLineWidth:rn,setPolygonOffset:un,setScissorTest:Ye,activeTexture:on,bindTexture:Y,unbindTexture:Be,compressedTexImage2D:Re,compressedTexImage3D:D,texImage2D:ut,texImage3D:ht,pixelStorei:Ft,getParameter:At,updateUBOMapping:Kt,uniformBlockBinding:Jt,texStorage2D:Et,texStorage3D:wt,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:st,compressedTexSubImage3D:ft,scissor:Lt,viewport:Dt,reset:ie}}function _T(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new qt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return T?new OffscreenCanvas(D,E):yu("canvas")}function M(D,E,Q){let st=1;const ft=Re(D);if((ft.width>Q||ft.height>Q)&&(st=Q/Math.max(ft.width,ft.height)),st<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Et=Math.floor(st*ft.width),wt=Math.floor(st*ft.height);g===void 0&&(g=w(Et,wt));const ut=E?w(Et,wt):g;return ut.width=Et,ut.height=wt,ut.getContext("2d").drawImage(D,0,0,Et,wt),ee("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+Et+"x"+wt+")."),ut}else return"data"in D&&ee("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),D;return D}function y(D){return D.generateMipmaps}function F(D){r.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(D,E,Q,st,ft,Et=!1){if(D!==null){if(r[D]!==void 0)return r[D];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let wt;st&&(wt=t.get("EXT_texture_norm16"),wt||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=E;if(E===r.RED&&(Q===r.FLOAT&&(ut=r.R32F),Q===r.HALF_FLOAT&&(ut=r.R16F),Q===r.UNSIGNED_BYTE&&(ut=r.R8),Q===r.UNSIGNED_SHORT&&wt&&(ut=wt.R16_EXT),Q===r.SHORT&&wt&&(ut=wt.R16_SNORM_EXT)),E===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.R8UI),Q===r.UNSIGNED_SHORT&&(ut=r.R16UI),Q===r.UNSIGNED_INT&&(ut=r.R32UI),Q===r.BYTE&&(ut=r.R8I),Q===r.SHORT&&(ut=r.R16I),Q===r.INT&&(ut=r.R32I)),E===r.RG&&(Q===r.FLOAT&&(ut=r.RG32F),Q===r.HALF_FLOAT&&(ut=r.RG16F),Q===r.UNSIGNED_BYTE&&(ut=r.RG8),Q===r.UNSIGNED_SHORT&&wt&&(ut=wt.RG16_EXT),Q===r.SHORT&&wt&&(ut=wt.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ut=r.RG16UI),Q===r.UNSIGNED_INT&&(ut=r.RG32UI),Q===r.BYTE&&(ut=r.RG8I),Q===r.SHORT&&(ut=r.RG16I),Q===r.INT&&(ut=r.RG32I)),E===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),Q===r.UNSIGNED_INT&&(ut=r.RGB32UI),Q===r.BYTE&&(ut=r.RGB8I),Q===r.SHORT&&(ut=r.RGB16I),Q===r.INT&&(ut=r.RGB32I)),E===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ut=r.RGBA32UI),Q===r.BYTE&&(ut=r.RGBA8I),Q===r.SHORT&&(ut=r.RGBA16I),Q===r.INT&&(ut=r.RGBA32I)),E===r.RGB&&(Q===r.UNSIGNED_SHORT&&wt&&(ut=wt.RGB16_EXT),Q===r.SHORT&&wt&&(ut=wt.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),E===r.RGBA){const ht=Et?xu:xe.getTransfer(ft);Q===r.FLOAT&&(ut=r.RGBA32F),Q===r.HALF_FLOAT&&(ut=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ut=ht===De?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&wt&&(ut=wt.RGBA16_EXT),Q===r.SHORT&&wt&&(ut=wt.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function P(D,E){let Q;return D?E===null||E===aa||E===ml?Q=r.DEPTH24_STENCIL8:E===Hi?Q=r.DEPTH32F_STENCIL8:E===pl&&(Q=r.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===aa||E===ml?Q=r.DEPTH_COMPONENT24:E===Hi?Q=r.DEPTH_COMPONENT32F:E===pl&&(Q=r.DEPTH_COMPONENT16),Q}function L(D,E){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Tn&&D.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function O(D){const E=D.target;E.removeEventListener("dispose",O),N(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function b(D){const E=D.target;E.removeEventListener("dispose",b),G(E)}function N(D){const E=s.get(D);if(E.__webglInit===void 0)return;const Q=D.source,st=S.get(Q);if(st){const ft=st[E.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&W(D),Object.keys(st).length===0&&S.delete(Q)}s.remove(D)}function W(D){const E=s.get(D);r.deleteTexture(E.__webglTexture);const Q=D.source,st=S.get(Q);delete st[E.__cacheKey],f.memory.textures--}function G(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let ft=0;ft<E.__webglFramebuffer[st].length;ft++)r.deleteFramebuffer(E.__webglFramebuffer[st][ft]);else r.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)r.deleteFramebuffer(E.__webglFramebuffer[st]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=D.textures;for(let st=0,ft=Q.length;st<ft;st++){const Et=s.get(Q[st]);Et.__webglTexture&&(r.deleteTexture(Et.__webglTexture),f.memory.textures--),s.remove(Q[st])}s.remove(D)}let q=0;function ct(){q=0}function gt(){return q}function J(D){q=D}function I(){const D=q;return D>=l.maxTextures&&ee("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),q+=1,D}function H(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function $(D,E){const Q=s.get(D);if(D.isVideoTexture&&Y(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const st=D.image;if(st===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(Q,D,E);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+E)}function pt(D,E){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){zt(Q,D,E);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+E)}function bt(D,E){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){zt(Q,D,E);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+E)}function U(D,E){const Q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){ne(Q,D,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+E)}const Z={[dl]:r.REPEAT,[ea]:r.CLAMP_TO_EDGE,[Nd]:r.MIRRORED_REPEAT},yt={[Tn]:r.NEAREST,[_S]:r.NEAREST_MIPMAP_NEAREST,[Nc]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Vh]:r.LINEAR_MIPMAP_NEAREST,[Xs]:r.LINEAR_MIPMAP_LINEAR},Rt={[SS]:r.NEVER,[AS]:r.ALWAYS,[MS]:r.LESS,[N0]:r.LEQUAL,[bS]:r.EQUAL,[P0]:r.GEQUAL,[ES]:r.GREATER,[TS]:r.NOTEQUAL};function Ot(D,E){if(E.type===Hi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===Vh||E.magFilter===Nc||E.magFilter===Xs||E.minFilter===Dn||E.minFilter===Vh||E.minFilter===Nc||E.minFilter===Xs)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Z[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Z[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Z[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,yt[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Rt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Nc&&E.minFilter!==Xs||E.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function at(D,E){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",O));const st=E.source;let ft=S.get(st);ft===void 0&&(ft={},S.set(st,ft));const Et=H(E);if(Et!==D.__cacheKey){ft[Et]===void 0&&(ft[Et]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),ft[Et].usedTimes++;const wt=ft[D.__cacheKey];wt!==void 0&&(ft[D.__cacheKey].usedTimes--,wt.usedTimes===0&&W(E)),D.__cacheKey=Et,D.__webglTexture=ft[Et].texture}return Q}function xt(D,E,Q){return Math.floor(Math.floor(D/Q)/E)}function Mt(D,E,Q,st){const Et=D.updateRanges;if(Et.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Q,st,E.data);else{Et.sort((Ft,Lt)=>Ft.start-Lt.start);let wt=0;for(let Ft=1;Ft<Et.length;Ft++){const Lt=Et[wt],Dt=Et[Ft],Kt=Lt.start+Lt.count,Jt=xt(Dt.start,E.width,4),ie=xt(Lt.start,E.width,4);Dt.start<=Kt+1&&Jt===ie&&xt(Dt.start+Dt.count-1,E.width,4)===Jt?Lt.count=Math.max(Lt.count,Dt.start+Dt.count-Lt.start):(++wt,Et[wt]=Dt)}Et.length=wt+1;const ut=i.getParameter(r.UNPACK_ROW_LENGTH),ht=i.getParameter(r.UNPACK_SKIP_PIXELS),At=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ft=0,Lt=Et.length;Ft<Lt;Ft++){const Dt=Et[Ft],Kt=Math.floor(Dt.start/4),Jt=Math.ceil(Dt.count/4),ie=Kt%E.width,k=Math.floor(Kt/E.width),Tt=Jt,mt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,ie,k,Tt,mt,Q,st,E.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ut),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(r.UNPACK_SKIP_ROWS,At)}}function zt(D,E,Q){let st=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=r.TEXTURE_3D);const ft=at(D,E),Et=E.source;i.bindTexture(st,D.__webglTexture,r.TEXTURE0+Q);const wt=s.get(Et);if(Et.version!==wt.__version||ft===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const mt=xe.getPrimaries(xe.workingColorSpace),Ct=E.colorSpace===ta?null:xe.getPrimaries(E.colorSpace),It=E.colorSpace===ta||mt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let ht=M(E.image,!1,l.maxTextureSize);ht=Be(E,ht);const At=c.convert(E.format,E.colorSpace),Ft=c.convert(E.type);let Lt=C(E.internalFormat,At,Ft,E.normalized,E.colorSpace,E.isVideoTexture);Ot(st,E);let Dt;const Kt=E.mipmaps,Jt=E.isVideoTexture!==!0,ie=wt.__version===void 0||ft===!0,k=Et.dataReady,Tt=L(E,ht);if(E.isDepthTexture)Lt=P(E.format===Ws,E.type),ie&&(Jt?i.texStorage2D(r.TEXTURE_2D,1,Lt,ht.width,ht.height):i.texImage2D(r.TEXTURE_2D,0,Lt,ht.width,ht.height,0,At,Ft,null));else if(E.isDataTexture)if(Kt.length>0){Jt&&ie&&i.texStorage2D(r.TEXTURE_2D,Tt,Lt,Kt[0].width,Kt[0].height);for(let mt=0,Ct=Kt.length;mt<Ct;mt++)Dt=Kt[mt],Jt?k&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,At,Ft,Dt.data):i.texImage2D(r.TEXTURE_2D,mt,Lt,Dt.width,Dt.height,0,At,Ft,Dt.data);E.generateMipmaps=!1}else Jt?(ie&&i.texStorage2D(r.TEXTURE_2D,Tt,Lt,ht.width,ht.height),k&&Mt(E,ht,At,Ft)):i.texImage2D(r.TEXTURE_2D,0,Lt,ht.width,ht.height,0,At,Ft,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Jt&&ie&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Lt,Kt[0].width,Kt[0].height,ht.depth);for(let mt=0,Ct=Kt.length;mt<Ct;mt++)if(Dt=Kt[mt],E.format!==Gi)if(At!==null)if(Jt){if(k)if(E.layerUpdates.size>0){const It=_1(Dt.width,Dt.height,E.format,E.type);for(const St of E.layerUpdates){const Wt=Dt.data.subarray(St*It/Dt.data.BYTES_PER_ELEMENT,(St+1)*It/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,St,Dt.width,Dt.height,1,At,Wt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Dt.width,Dt.height,ht.depth,At,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Lt,Dt.width,Dt.height,ht.depth,0,Dt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Dt.width,Dt.height,ht.depth,At,Ft,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,mt,Lt,Dt.width,Dt.height,ht.depth,0,At,Ft,Dt.data)}else{Jt&&ie&&i.texStorage2D(r.TEXTURE_2D,Tt,Lt,Kt[0].width,Kt[0].height);for(let mt=0,Ct=Kt.length;mt<Ct;mt++)Dt=Kt[mt],E.format!==Gi?At!==null?Jt?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,At,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,mt,Lt,Dt.width,Dt.height,0,Dt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?k&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,At,Ft,Dt.data):i.texImage2D(r.TEXTURE_2D,mt,Lt,Dt.width,Dt.height,0,At,Ft,Dt.data)}else if(E.isDataArrayTexture)if(Jt){if(ie&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Lt,ht.width,ht.height,ht.depth),k)if(E.layerUpdates.size>0){const mt=_1(ht.width,ht.height,E.format,E.type);for(const Ct of E.layerUpdates){const It=ht.data.subarray(Ct*mt/ht.data.BYTES_PER_ELEMENT,(Ct+1)*mt/ht.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ct,ht.width,ht.height,1,At,Ft,It)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,At,Ft,ht.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,At,Ft,ht.data);else if(E.isData3DTexture)Jt?(ie&&i.texStorage3D(r.TEXTURE_3D,Tt,Lt,ht.width,ht.height,ht.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,At,Ft,ht.data)):i.texImage3D(r.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,At,Ft,ht.data);else if(E.isFramebufferTexture){if(ie)if(Jt)i.texStorage2D(r.TEXTURE_2D,Tt,Lt,ht.width,ht.height);else{let mt=ht.width,Ct=ht.height;for(let It=0;It<Tt;It++)i.texImage2D(r.TEXTURE_2D,It,Lt,mt,Ct,0,At,Ft,null),mt>>=1,Ct>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const mt=r.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),ht.parentNode!==mt){mt.appendChild(ht),v.add(E),mt.onpaint=Ct=>{const It=Ct.changedElements;for(const St of v)It.includes(St.image)&&(St.needsUpdate=!0)},mt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ht);else{const It=r.RGBA,St=r.RGBA,Wt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,It,St,Wt,ht)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(Jt&&ie){const mt=Re(Kt[0]);i.texStorage2D(r.TEXTURE_2D,Tt,Lt,mt.width,mt.height)}for(let mt=0,Ct=Kt.length;mt<Ct;mt++)Dt=Kt[mt],Jt?k&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,At,Ft,Dt):i.texImage2D(r.TEXTURE_2D,mt,Lt,At,Ft,Dt);E.generateMipmaps=!1}else if(Jt){if(ie){const mt=Re(ht);i.texStorage2D(r.TEXTURE_2D,Tt,Lt,mt.width,mt.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Ft,ht)}else i.texImage2D(r.TEXTURE_2D,0,Lt,At,Ft,ht);y(E)&&F(st),wt.__version=Et.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ne(D,E,Q){if(E.image.length!==6)return;const st=at(D,E),ft=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const Et=s.get(ft);if(ft.version!==Et.__version||st===!0){i.activeTexture(r.TEXTURE0+Q);const wt=xe.getPrimaries(xe.workingColorSpace),ut=E.colorSpace===ta?null:xe.getPrimaries(E.colorSpace),ht=E.colorSpace===ta||wt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const At=E.isCompressedTexture||E.image[0].isCompressedTexture,Ft=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let St=0;St<6;St++)!At&&!Ft?Lt[St]=M(E.image[St],!0,l.maxCubemapSize):Lt[St]=Ft?E.image[St].image:E.image[St],Lt[St]=Be(E,Lt[St]);const Dt=Lt[0],Kt=c.convert(E.format,E.colorSpace),Jt=c.convert(E.type),ie=C(E.internalFormat,Kt,Jt,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Tt=Et.__version===void 0||st===!0,mt=ft.dataReady;let Ct=L(E,Dt);Ot(r.TEXTURE_CUBE_MAP,E);let It;if(At){k&&Tt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,ie,Dt.width,Dt.height);for(let St=0;St<6;St++){It=Lt[St].mipmaps;for(let Wt=0;Wt<It.length;Wt++){const Gt=It[Wt];E.format!==Gi?Kt!==null?k?mt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,0,0,Gt.width,Gt.height,Kt,Gt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,ie,Gt.width,Gt.height,0,Gt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,0,0,Gt.width,Gt.height,Kt,Jt,Gt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,ie,Gt.width,Gt.height,0,Kt,Jt,Gt.data)}}}else{if(It=E.mipmaps,k&&Tt){It.length>0&&Ct++;const St=Re(Lt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,ie,St.width,St.height)}for(let St=0;St<6;St++)if(Ft){k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Lt[St].width,Lt[St].height,Kt,Jt,Lt[St].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ie,Lt[St].width,Lt[St].height,0,Kt,Jt,Lt[St].data);for(let Wt=0;Wt<It.length;Wt++){const je=It[Wt].image[St].image;k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,0,0,je.width,je.height,Kt,Jt,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,ie,je.width,je.height,0,Kt,Jt,je.data)}}else{k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Kt,Jt,Lt[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ie,Kt,Jt,Lt[St]);for(let Wt=0;Wt<It.length;Wt++){const Gt=It[Wt];k?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,0,0,Kt,Jt,Gt.image[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,ie,Kt,Jt,Gt.image[St])}}}y(E)&&F(r.TEXTURE_CUBE_MAP),Et.__version=ft.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Qt(D,E,Q,st,ft,Et){const wt=c.convert(Q.format,Q.colorSpace),ut=c.convert(Q.type),ht=C(Q.internalFormat,wt,ut,Q.normalized,Q.colorSpace),At=s.get(E),Ft=s.get(Q);if(Ft.__renderTarget=E,!At.__hasExternalTextures){const Lt=Math.max(1,E.width>>Et),Dt=Math.max(1,E.height>>Et);ft===r.TEXTURE_3D||ft===r.TEXTURE_2D_ARRAY?i.texImage3D(ft,Et,ht,Lt,Dt,E.depth,0,wt,ut,null):i.texImage2D(ft,Et,ht,Lt,Dt,0,wt,ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),on(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,ft,Ft.__webglTexture,0,Ye(E)):(ft===r.TEXTURE_2D||ft>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,ft,Ft.__webglTexture,Et),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(D,E,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const st=E.depthTexture,ft=st&&st.isDepthTexture?st.type:null,Et=P(E.stencilBuffer,ft),wt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;on(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(E),Et,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(E),Et,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Et,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,D)}else{const st=E.textures;for(let ft=0;ft<st.length;ft++){const Et=st[ft],wt=c.convert(Et.format,Et.colorSpace),ut=c.convert(Et.type),ht=C(Et.internalFormat,wt,ut,Et.normalized,Et.colorSpace);on(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(E),ht,E.width,E.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(E),ht,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ht,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(D,E,Q){const st=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ft=s.get(E.depthTexture);if(ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),st){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),ft.__webglTexture===void 0){ft.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,E.depthTexture);const At=c.convert(E.depthTexture.format),Ft=c.convert(E.depthTexture.type);let Lt;E.depthTexture.format===Na?Lt=r.DEPTH_COMPONENT24:E.depthTexture.format===Ws&&(Lt=r.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Lt,E.width,E.height,0,At,Ft,null)}}else $(E.depthTexture,0);const Et=ft.__webglTexture,wt=Ye(E),ut=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,ht=E.depthTexture.format===Ws?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Na)on(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ut,Et,0,wt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ut,Et,0);else if(E.depthTexture.format===Ws)on(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ut,Et,0,wt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ut,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(D){const E=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const st=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const ft=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",ft)};st.addEventListener("dispose",ft),E.__depthDisposeCallback=ft}E.__boundDepthTexture=st}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let st=0;st<6;st++)fe(E.__webglFramebuffer[st],D,st);else{const st=D.texture.mipmaps;st&&st.length>0?fe(E.__webglFramebuffer[0],D,0):fe(E.__webglFramebuffer,D,0)}else if(Q){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=r.createRenderbuffer(),Ke(E.__webglDepthbuffer[st],D,!1);else{const ft=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=E.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,Et),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,Et)}}else{const st=D.texture.mipmaps;if(st&&st.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ke(E.__webglDepthbuffer,D,!1);else{const ft=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Et),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,Et)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(D,E,Q){const st=s.get(D);E!==void 0&&Qt(st.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&ye(D)}function de(D){const E=D.texture,Q=s.get(D),st=s.get(E);D.addEventListener("dispose",b);const ft=D.textures,Et=D.isWebGLCubeRenderTarget===!0,wt=ft.length>1;if(wt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=E.version,f.memory.textures++),Et){Q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ut]=[];for(let ht=0;ht<E.mipmaps.length;ht++)Q.__webglFramebuffer[ut][ht]=r.createFramebuffer()}else Q.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)Q.__webglFramebuffer[ut]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(wt)for(let ut=0,ht=ft.length;ut<ht;ut++){const At=s.get(ft[ut]);At.__webglTexture===void 0&&(At.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&on(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ut=0;ut<ft.length;ut++){const ht=ft[ut];Q.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ut]);const At=c.convert(ht.format,ht.colorSpace),Ft=c.convert(ht.type),Lt=C(ht.internalFormat,At,Ft,ht.normalized,ht.colorSpace,D.isXRRenderTarget===!0),Dt=Ye(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,Lt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ke(Q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Et){i.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)Qt(Q.__webglFramebuffer[ut][ht],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ht);else Qt(Q.__webglFramebuffer[ut],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);y(E)&&F(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(wt){for(let ut=0,ht=ft.length;ut<ht;ut++){const At=ft[ut],Ft=s.get(At);let Lt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Lt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Ft.__webglTexture),Ot(Lt,At),Qt(Q.__webglFramebuffer,D,At,r.COLOR_ATTACHMENT0+ut,Lt,0),y(At)&&F(Lt)}i.unbindTexture()}else{let ut=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ut=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ut,st.__webglTexture),Ot(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)Qt(Q.__webglFramebuffer[ht],D,E,r.COLOR_ATTACHMENT0,ut,ht);else Qt(Q.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,ut,0);y(E)&&F(ut),i.unbindTexture()}D.depthBuffer&&ye(D)}function an(D){const E=D.textures;for(let Q=0,st=E.length;Q<st;Q++){const ft=E[Q];if(y(ft)){const Et=B(D),wt=s.get(ft).__webglTexture;i.bindTexture(Et,wt),F(Et),i.unbindTexture()}}}const sn=[],rn=[];function un(D){if(D.samples>0){if(on(D)===!1){const E=D.textures,Q=D.width,st=D.height;let ft=r.COLOR_BUFFER_BIT;const Et=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=s.get(D),ut=E.length>1;if(ut)for(let At=0;At<E.length;At++)i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const ht=D.texture.mipmaps;ht&&ht.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<E.length;At++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ft|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ft|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const Ft=s.get(E[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ft,0)}r.blitFramebuffer(0,0,Q,st,0,0,Q,st,ft,r.NEAREST),m===!0&&(sn.length=0,rn.length=0,sn.push(r.COLOR_ATTACHMENT0+At),D.depthBuffer&&D.resolveDepthBuffer===!1&&(sn.push(Et),rn.push(Et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,sn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let At=0;At<E.length;At++){i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const Ft=s.get(E[At]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,Ft,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ye(D){return Math.min(l.maxSamples,D.samples)}function on(D){const E=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(D){const E=f.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function Be(D,E){const Q=D.colorSpace,st=D.format,ft=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==vu&&Q!==ta&&(xe.getTransfer(Q)===De?(st!==Gi||ft!==xi)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",Q)),E}function Re(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=I,this.resetTextureUnits=ct,this.getTextureUnits=gt,this.setTextureUnits=J,this.setTexture2D=$,this.setTexture2DArray=pt,this.setTexture3D=bt,this.setTextureCube=U,this.rebindTextures=Se,this.setupRenderTarget=de,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function vT(r,t){function i(s,l=ta){let c;const f=xe.getTransfer(l);if(s===xi)return r.UNSIGNED_BYTE;if(s===R0)return r.UNSIGNED_SHORT_4_4_4_4;if(s===C0)return r.UNSIGNED_SHORT_5_5_5_1;if(s===iv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===av)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ev)return r.BYTE;if(s===nv)return r.SHORT;if(s===pl)return r.UNSIGNED_SHORT;if(s===A0)return r.INT;if(s===aa)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===Qn)return r.HALF_FLOAT;if(s===sv)return r.ALPHA;if(s===rv)return r.RGB;if(s===Gi)return r.RGBA;if(s===Na)return r.DEPTH_COMPONENT;if(s===Ws)return r.DEPTH_STENCIL;if(s===w0)return r.RED;if(s===D0)return r.RED_INTEGER;if(s===Zs)return r.RG;if(s===U0)return r.RG_INTEGER;if(s===L0)return r.RGBA_INTEGER;if(s===cu||s===uu||s===fu||s===hu)if(f===De)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===cu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===cu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pd||s===Od||s===Id||s===Fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Pd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Od)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Id)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bd||s===zd||s===Hd||s===Gd||s===Vd||s===mu||s===kd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Bd||s===zd)return f===De?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Hd)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Gd)return c.COMPRESSED_R11_EAC;if(s===Vd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===mu)return c.COMPRESSED_RG11_EAC;if(s===kd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Xd||s===Wd||s===Yd||s===qd||s===Zd||s===Kd||s===Qd||s===Jd||s===jd||s===$d||s===t0||s===e0||s===n0||s===i0)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Xd)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wd)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yd)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qd)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zd)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kd)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qd)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jd)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jd)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$d)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===t0)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===e0)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===n0)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===i0)return f===De?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===a0||s===s0||s===r0)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===a0)return f===De?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===s0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===r0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===o0||s===l0||s===gu||s===c0)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===o0)return c.COMPRESSED_RED_RGTC1_EXT;if(s===l0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===c0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ml?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const xT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yT=`
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

}`;class ST{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new gv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Un({vertexShader:xT,fragmentShader:yT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yn(new Sl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MT extends _s{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,T=null;const w=typeof XRWebGLBinding<"u",M=new ST,y={},F=i.getContextAttributes();let B=null,C=null;const P=[],L=[],O=new qt;let b=null;const N=new vi;N.viewport=new nn;const W=new vi;W.viewport=new nn;const G=[N,W],q=new RM;let ct=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let xt=P[at];return xt===void 0&&(xt=new Zh,P[at]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(at){let xt=P[at];return xt===void 0&&(xt=new Zh,P[at]=xt),xt.getGripSpace()},this.getHand=function(at){let xt=P[at];return xt===void 0&&(xt=new Zh,P[at]=xt),xt.getHandSpace()};function J(at){const xt=L.indexOf(at.inputSource);if(xt===-1)return;const Mt=P[xt];Mt!==void 0&&(Mt.update(at.inputSource,at.frame,p||f),Mt.dispatchEvent({type:at.type,data:at.inputSource}))}function I(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let at=0;at<P.length;at++){const xt=L[at];xt!==null&&(L[at]=null,P[at].disconnect(xt))}ct=null,gt=null,M.reset();for(const at in y)delete y[at];t.setRenderTarget(B),S=null,g=null,v=null,l=null,C=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,s.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),F.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,zt=null,ne=null;F.depth&&(ne=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=F.stencil?Ws:Na,zt=F.stencil?ml:aa);const Qt={colorFormat:i.RGBA8,depthFormat:ne,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Qt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new Fn(g.textureWidth,g.textureHeight,{format:Gi,type:xi,depthTexture:new eo(g.textureWidth,g.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Fn(S.framebufferWidth,S.framebufferHeight,{format:Gi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(at){for(let xt=0;xt<at.removed.length;xt++){const Mt=at.removed[xt],zt=L.indexOf(Mt);zt>=0&&(L[zt]=null,P[zt].disconnect(Mt))}for(let xt=0;xt<at.added.length;xt++){const Mt=at.added[xt];let zt=L.indexOf(Mt);if(zt===-1){for(let Qt=0;Qt<P.length;Qt++)if(Qt>=L.length){L.push(Mt),zt=Qt;break}else if(L[Qt]===null){L[Qt]=Mt,zt=Qt;break}if(zt===-1)break}const ne=P[zt];ne&&ne.connect(Mt)}}const $=new j,pt=new j;function bt(at,xt,Mt){$.setFromMatrixPosition(xt.matrixWorld),pt.setFromMatrixPosition(Mt.matrixWorld);const zt=$.distanceTo(pt),ne=xt.projectionMatrix.elements,Qt=Mt.projectionMatrix.elements,Ke=ne[14]/(ne[10]-1),fe=ne[14]/(ne[10]+1),ye=(ne[9]+1)/ne[5],Se=(ne[9]-1)/ne[5],de=(ne[8]-1)/ne[0],an=(Qt[8]+1)/Qt[0],sn=Ke*de,rn=Ke*an,un=zt/(-de+an),Ye=un*-de;if(xt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ye),at.translateZ(un),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),ne[10]===-1)at.projectionMatrix.copy(xt.projectionMatrix),at.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const on=Ke+un,Y=fe+un,Be=sn-Ye,Re=rn+(zt-Ye),D=ye*fe/Y*on,E=Se*fe/Y*on;at.projectionMatrix.makePerspective(Be,Re,D,E,on,Y),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function U(at,xt){xt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(xt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let xt=at.near,Mt=at.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),q.near=W.near=N.near=xt,q.far=W.far=N.far=Mt,(ct!==q.near||gt!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),ct=q.near,gt=q.far),q.layers.mask=at.layers.mask|6,N.layers.mask=q.layers.mask&-5,W.layers.mask=q.layers.mask&-3;const zt=at.parent,ne=q.cameras;U(q,zt);for(let Qt=0;Qt<ne.length;Qt++)U(ne[Qt],zt);ne.length===2?bt(q,N,W):q.projectionMatrix.copy(N.projectionMatrix),Z(at,q,zt)};function Z(at,xt,Mt){Mt===null?at.matrix.copy(xt.matrixWorld):(at.matrix.copy(Mt.matrixWorld),at.matrix.invert(),at.matrix.multiply(xt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(xt.projectionMatrix),at.projectionMatrixInverse.copy(xt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=_l*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(at){m=at,g!==null&&(g.fixedFoveation=at),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(at){return y[at]};let yt=null;function Rt(at,xt){if(_=xt.getViewerPose(p||f),T=xt,_!==null){const Mt=_.views;S!==null&&(t.setRenderTargetFramebuffer(C,S.framebuffer),t.setRenderTarget(C));let zt=!1;Mt.length!==q.cameras.length&&(q.cameras.length=0,zt=!0);for(let fe=0;fe<Mt.length;fe++){const ye=Mt[fe];let Se=null;if(S!==null)Se=S.getViewport(ye);else{const an=v.getViewSubImage(g,ye);Se=an.viewport,fe===0&&(t.setRenderTargetTextures(C,an.colorTexture,an.depthStencilTexture),t.setRenderTarget(C))}let de=G[fe];de===void 0&&(de=new vi,de.layers.enable(fe),de.viewport=new nn,G[fe]=de),de.matrix.fromArray(ye.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ye.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Se.x,Se.y,Se.width,Se.height),fe===0&&(q.matrix.copy(de.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),zt===!0&&q.cameras.push(de)}const ne=l.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const fe=v.getDepthInformation(Mt[0]);fe&&fe.isValid&&fe.texture&&M.init(fe,l.renderState)}if(ne&&ne.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let fe=0;fe<Mt.length;fe++){const ye=Mt[fe].camera;if(ye){let Se=y[ye];Se||(Se=new gv,y[ye]=Se);const de=v.getCameraImage(ye);Se.sourceTexture=de}}}}for(let Mt=0;Mt<P.length;Mt++){const zt=L[Mt],ne=P[Mt];zt!==null&&ne!==void 0&&ne.update(zt,xt,p||f)}yt&&yt(at,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),T=null}const Ot=new bv;Ot.setAnimationLoop(Rt),this.setAnimationLoop=function(at){yt=at},this.dispose=function(){}}}const bT=new Ze,Dv=new re;Dv.set(-1,0,0,0,1,0,0,0,1);function ET(r,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,_v(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,F,B,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),_(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,C)):y.isMeshMatcapMaterial?(c(M,y),T(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),w(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?m(M,y,F,B):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Kn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Kn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const F=t.get(y),B=F.envMap,C=F.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(bT.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Dv),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,F,B){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*F,M.scale.value=B*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,F){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const F=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function TT(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,P){const L=P.program;s.uniformBlockBinding(C,L)}function p(C,P){let L=l[C.id];L===void 0&&(M(C),L=_(C),l[C.id]=L,C.addEventListener("dispose",F));const O=P.program;s.updateUBOMapping(C,O);const b=t.render.frame;c[C.id]!==b&&(g(C),c[C.id]=b)}function _(C){const P=v();C.__bindingPointIndex=P;const L=r.createBuffer(),O=C.__size,b=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,O,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,L),L}function v(){for(let C=0;C<d;C++)if(f.indexOf(C)===-1)return f.push(C),C;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=l[C.id],L=C.uniforms,O=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let b=0,N=L.length;b<N;b++){const W=L[b];if(Array.isArray(W))for(let G=0,q=W.length;G<q;G++)S(W[G],b,G,O);else S(W,b,0,O)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,P,L,O){if(w(C,P,L,O)===!0){const b=C.__offset,N=C.value;if(Array.isArray(N)){let W=0;for(let G=0;G<N.length;G++){const q=N[G],ct=y(q);T(q,C.__data,W),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(W+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(N,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,C.__data)}}function T(C,P,L){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,L)}function w(C,P,L,O){const b=C.value,N=P+"_"+L;if(O[N]===void 0)return typeof b=="number"||typeof b=="boolean"?O[N]=b:ArrayBuffer.isView(b)?O[N]=b.slice():O[N]=b.clone(),!0;{const W=O[N];if(typeof b=="number"||typeof b=="boolean"){if(W!==b)return O[N]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(W.equals(b)===!1)return W.copy(b),!0}}return!1}function M(C){const P=C.uniforms;let L=0;const O=16;for(let N=0,W=P.length;N<W;N++){const G=Array.isArray(P[N])?P[N]:[P[N]];for(let q=0,ct=G.length;q<ct;q++){const gt=G[q],J=Array.isArray(gt.value)?gt.value:[gt.value];for(let I=0,H=J.length;I<H;I++){const $=J[I],pt=y($),bt=L%O,U=bt%pt.boundary,Z=bt+U;L+=U,Z!==0&&O-Z<pt.storage&&(L+=O-Z),gt.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),gt.__offset=L,L+=pt.storage}}}const b=L%O;return b>0&&(L+=O-b),C.__size=L,C.__cache={},this}function y(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",C),P}function F(C){const P=C.target;P.removeEventListener("dispose",F);const L=f.indexOf(P.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function B(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:B}}const AT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function RT(){return Ji===null&&(Ji=new pv(AT,16,16,Zs,Qn),Ji.name="DFG_LUT",Ji.minFilter=Dn,Ji.magFilter=Dn,Ji.wrapS=ea,Ji.wrapT=ea,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class CT{constructor(t={}){const{canvas:i=CS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=xi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const w=S,M=new Set([L0,U0,D0]),y=new Set([xi,aa,pl,ml,R0,C0]),F=new Uint32Array(4),B=new Int32Array(4),C=new j;let P=null,L=null;const O=[],b=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let G=!1,q=null,ct=null,gt=null,J=null;this._outputColorSpace=Zn;let I=0,H=0,$=null,pt=-1,bt=null;const U=new nn,Z=new nn;let yt=null;const Rt=new ae(0);let Ot=0,at=i.width,xt=i.height,Mt=1,zt=null,ne=null;const Qt=new nn(0,0,at,xt),Ke=new nn(0,0,at,xt);let fe=!1;const ye=new H0;let Se=!1,de=!1;const an=new Ze,sn=new j,rn=new nn,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function on(){return $===null?Mt:1}let Y=s;function Be(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${y0}`),i.addEventListener("webglcontextlost",je,!1),i.addEventListener("webglcontextrestored",Ue,!1),i.addEventListener("webglcontextcreationerror",si,!1),Y===null){const X="webgl2";if(Y=Be(X,A),Y===null)throw Be(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw be("WebGLRenderer: "+A.message),A}let Re,D,E,Q,st,ft,Et,wt,ut,ht,At,Ft,Lt,Dt,Kt,Jt,ie,k,Tt,mt,Ct,It,St;function Wt(){Re=new Rb(Y),Re.init(),Ct=new vT(Y,Re),D=new xb(Y,Re,t,Ct),E=new gT(Y,Re),D.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ct=Y.createFramebuffer(),gt=Y.createFramebuffer(),J=Y.createFramebuffer(),Q=new Db(Y),st=new nT,ft=new _T(Y,Re,E,st,D,Ct,Q),Et=new Ab(W),wt=new PM(Y),It=new _b(Y,wt),ut=new Cb(Y,wt,Q,It),ht=new Lb(Y,ut,wt,It,Q),k=new Ub(Y,D,ft),Kt=new yb(st),At=new eT(W,Et,Re,D,It,Kt),Ft=new ET(W,st),Lt=new aT,Dt=new uT(Re),ie=new gb(W,Et,E,ht,T,m),Jt=new mT(W,ht,D),St=new TT(Y,Q,D,E),Tt=new vb(Y,Re,Q),mt=new wb(Y,Re,Q),Q.programs=At.programs,W.capabilities=D,W.extensions=Re,W.properties=st,W.renderLists=Lt,W.shadowMap=Jt,W.state=E,W.info=Q}Wt(),w!==xi&&(N=new Pb(w,i.width,i.height,d,l,c));const Gt=new MT(W,Y);this.xr=Gt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(A){A!==void 0&&(Mt=A,this.setSize(at,xt,!1))},this.getSize=function(A){return A.set(at,xt)},this.setSize=function(A,X,rt=!0){if(Gt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}at=A,xt=X,i.width=Math.floor(A*Mt),i.height=Math.floor(X*Mt),rt===!0&&(i.style.width=A+"px",i.style.height=X+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(at*Mt,xt*Mt).floor()},this.setDrawingBufferSize=function(A,X,rt){at=A,xt=X,Mt=rt,i.width=Math.floor(A*rt),i.height=Math.floor(X*rt),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(w===xi){be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Qt)},this.setViewport=function(A,X,rt,nt){A.isVector4?Qt.set(A.x,A.y,A.z,A.w):Qt.set(A,X,rt,nt),E.viewport(U.copy(Qt).multiplyScalar(Mt).round())},this.getScissor=function(A){return A.copy(Ke)},this.setScissor=function(A,X,rt,nt){A.isVector4?Ke.set(A.x,A.y,A.z,A.w):Ke.set(A,X,rt,nt),E.scissor(Z.copy(Ke).multiplyScalar(Mt).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){E.setScissorTest(fe=A)},this.setOpaqueSort=function(A){zt=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,rt=!0){let nt=0;if(A){let it=!1;if($!==null){const Nt=$.texture.format;it=M.has(Nt)}if(it){const Nt=$.texture.type,Ht=y.has(Nt),Ut=ie.getClearColor(),kt=ie.getClearAlpha(),Vt=Ut.r,jt=Ut.g,oe=Ut.b;Ht?(F[0]=Vt,F[1]=jt,F[2]=oe,F[3]=kt,Y.clearBufferuiv(Y.COLOR,0,F)):(B[0]=Vt,B[1]=jt,B[2]=oe,B[3]=kt,Y.clearBufferiv(Y.COLOR,0,B))}else nt|=Y.COLOR_BUFFER_BIT}X&&(nt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(nt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&Y.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",je,!1),i.removeEventListener("webglcontextrestored",Ue,!1),i.removeEventListener("webglcontextcreationerror",si,!1),ie.dispose(),Lt.dispose(),Dt.dispose(),st.dispose(),Et.dispose(),ht.dispose(),It.dispose(),St.dispose(),At.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",dn),Gt.removeEventListener("sessionend",Ln),Jn.stop()};function je(A){A.preventDefault(),k_("WebGLRenderer: Context Lost."),G=!0}function Ue(){k_("WebGLRenderer: Context Restored."),G=!1;const A=Q.autoReset,X=Jt.enabled,rt=Jt.autoUpdate,nt=Jt.needsUpdate,it=Jt.type;Wt(),Q.autoReset=A,Jt.enabled=X,Jt.autoUpdate=rt,Jt.needsUpdate=nt,Jt.type=it}function si(A){be("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ri(A){const X=A.target;X.removeEventListener("dispose",ri),lo(X)}function lo(A){co(A),st.remove(A)}function co(A){const X=st.get(A).programs;X!==void 0&&(X.forEach(function(rt){At.releaseProgram(rt)}),A.isShaderMaterial&&At.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,rt,nt,it,Nt){X===null&&(X=un);const Ht=it.isMesh&&it.matrixWorld.determinantAffine()<0,Ut=Fa(A,X,rt,nt,it);E.setMaterial(nt,Ht);let kt=rt.index,Vt=1;if(nt.wireframe===!0){if(kt=ut.getWireframeAttribute(rt),kt===void 0)return;Vt=2}const jt=rt.drawRange,oe=rt.attributes.position;let Zt=jt.start*Vt,Ee=(jt.start+jt.count)*Vt;Nt!==null&&(Zt=Math.max(Zt,Nt.start*Vt),Ee=Math.min(Ee,(Nt.start+Nt.count)*Vt)),kt!==null?(Zt=Math.max(Zt,0),Ee=Math.min(Ee,kt.count)):oe!=null&&(Zt=Math.max(Zt,0),Ee=Math.min(Ee,oe.count));const $e=Ee-Zt;if($e<0||$e===1/0)return;It.setup(it,nt,Ut,rt,kt);let ke,Le=Tt;if(kt!==null&&(ke=wt.get(kt),Le=mt,Le.setIndex(ke)),it.isMesh)nt.wireframe===!0?(E.setLineWidth(nt.wireframeLinewidth*on()),Le.setMode(Y.LINES)):Le.setMode(Y.TRIANGLES);else if(it.isLine){let Ne=nt.linewidth;Ne===void 0&&(Ne=1),E.setLineWidth(Ne*on()),it.isLineSegments?Le.setMode(Y.LINES):it.isLineLoop?Le.setMode(Y.LINE_LOOP):Le.setMode(Y.LINE_STRIP)}else it.isPoints?Le.setMode(Y.POINTS):it.isSprite&&Le.setMode(Y.TRIANGLES);if(it.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))Le.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Ne=it._multiDrawStarts,Bt=it._multiDrawCounts,zn=it._multiDrawCount,pe=kt?wt.get(kt).bytesPerElement:1,Sn=st.get(nt).currentProgram.getUniforms();for(let oi=0;oi<zn;oi++)Sn.setValue(Y,"_gl_DrawID",oi),Le.render(Ne[oi]/pe,Bt[oi])}else if(it.isInstancedMesh)Le.renderInstances(Zt,$e,it.count);else if(rt.isInstancedBufferGeometry){const Ne=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Bt=Math.min(rt.instanceCount,Ne);Le.renderInstances(Zt,$e,Bt)}else Le.render(Zt,$e)};function uo(A,X,rt){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=Kn,A.needsUpdate=!0,Ia(A,X,rt),A.side=ms,A.needsUpdate=!0,Ia(A,X,rt),A.side=$i):Ia(A,X,rt)}this.compile=function(A,X,rt=null){rt===null&&(rt=A),L=Dt.get(rt),L.init(X),b.push(L),rt.traverseVisible(function(it){it.isLight&&it.layers.test(X.layers)&&(L.pushLight(it),it.castShadow&&L.pushShadow(it))}),A!==rt&&A.traverseVisible(function(it){it.isLight&&it.layers.test(X.layers)&&(L.pushLight(it),it.castShadow&&L.pushShadow(it))}),L.setupLights();const nt=new Set;return A.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Nt=it.material;if(Nt)if(Array.isArray(Nt))for(let Ht=0;Ht<Nt.length;Ht++){const Ut=Nt[Ht];uo(Ut,rt,it),nt.add(Ut)}else uo(Nt,rt,it),nt.add(Nt)}),L=b.pop(),nt},this.compileAsync=function(A,X,rt=null){const nt=this.compile(A,X,rt);return new Promise(it=>{function Nt(){if(nt.forEach(function(Ht){st.get(Ht).currentProgram.isReady()&&nt.delete(Ht)}),nt.size===0){it(A);return}setTimeout(Nt,10)}Re.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Js=null;function Xi(A){Js&&Js(A)}function dn(){Jn.stop()}function Ln(){Jn.start()}const Jn=new bv;Jn.setAnimationLoop(Xi),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(A){Js=A,Gt.setAnimationLoop(A),A===null?Jn.stop():Jn.start()},Gt.addEventListener("sessionstart",dn),Gt.addEventListener("sessionend",Ln),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(A,X);const rt=Gt.enabled===!0&&Gt.isPresenting===!0,nt=N!==null&&($===null||rt)&&N.begin(W,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(X),X=Gt.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,X,$),L=Dt.get(A,b.length),L.init(X),L.state.textureUnits=ft.getTextureUnits(),b.push(L),an.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ye.setFromProjectionMatrix(an,na,X.reversedDepth),de=this.localClippingEnabled,Se=Kt.init(this.clippingPlanes,de),P=Lt.get(A,O.length),P.init(),O.push(P),Gt.enabled===!0&&Gt.isPresenting===!0){const Ht=W.xr.getDepthSensingMesh();Ht!==null&&vs(Ht,X,-1/0,W.sortObjects)}vs(A,X,0,W.sortObjects),P.finish(),W.sortObjects===!0&&P.sort(zt,ne,X.reversedDepth),Ye=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Ye&&ie.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&Kt.beginShadows();const it=L.state.shadowsArray;if(Jt.render(it,A,X),Se===!0&&Kt.endShadows(),(nt&&N.hasRenderPass())===!1){const Ht=P.opaque,Ut=P.transmissive;if(L.setupLights(),X.isArrayCamera){const kt=X.cameras;if(Ut.length>0)for(let Vt=0,jt=kt.length;Vt<jt;Vt++){const oe=kt[Vt];bl(Ht,Ut,A,oe)}Ye&&ie.render(A);for(let Vt=0,jt=kt.length;Vt<jt;Vt++){const oe=kt[Vt];Ml(P,A,oe,oe.viewport)}}else Ut.length>0&&bl(Ht,Ut,A,X),Ye&&ie.render(A),Ml(P,A,X)}$!==null&&H===0&&(ft.updateMultisampleRenderTarget($),ft.updateRenderTargetMipmap($)),nt&&N.end(W),A.isScene===!0&&A.onAfterRender(W,A,X),It.resetDefaultState(),pt=-1,bt=null,b.pop(),b.length>0?(L=b[b.length-1],ft.setTextureUnits(L.state.textureUnits),Se===!0&&Kt.setGlobalState(W.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?P=O[O.length-1]:P=null,q!==null&&q.renderEnd()};function vs(A,X,rt,nt){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ye.intersectsSprite(A)){nt&&rn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(an);const Ht=ht.update(A),Ut=A.material;Ut.visible&&P.push(A,Ht,Ut,rt,rn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ye.intersectsObject(A))){const Ht=ht.update(A),Ut=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rn.copy(A.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),rn.copy(Ht.boundingSphere.center)),rn.applyMatrix4(A.matrixWorld).applyMatrix4(an)),Array.isArray(Ut)){const kt=Ht.groups;for(let Vt=0,jt=kt.length;Vt<jt;Vt++){const oe=kt[Vt],Zt=Ut[oe.materialIndex];Zt&&Zt.visible&&P.push(A,Ht,Zt,rt,rn.z,oe)}}else Ut.visible&&P.push(A,Ht,Ut,rt,rn.z,null)}}const Nt=A.children;for(let Ht=0,Ut=Nt.length;Ht<Ut;Ht++)vs(Nt[Ht],X,rt,nt)}function Ml(A,X,rt,nt){const{opaque:it,transmissive:Nt,transparent:Ht}=A;L.setupLightsView(rt),Se===!0&&Kt.setGlobalState(W.clippingPlanes,rt),nt&&E.viewport(U.copy(nt)),it.length>0&&xs(it,X,rt),Nt.length>0&&xs(Nt,X,rt),Ht.length>0&&xs(Ht,X,rt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function bl(A,X,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[nt.id]===void 0){const Zt=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[nt.id]=new Fn(1,1,{generateMipmaps:!0,type:Zt?Qn:xi,minFilter:Xs,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const Nt=L.state.transmissionRenderTarget[nt.id],Ht=nt.viewport||U;Nt.setSize(Ht.z*W.transmissionResolutionScale,Ht.w*W.transmissionResolutionScale);const Ut=W.getRenderTarget(),kt=W.getActiveCubeFace(),Vt=W.getActiveMipmapLevel();W.setRenderTarget(Nt),W.getClearColor(Rt),Ot=W.getClearAlpha(),Ot<1&&W.setClearColor(16777215,.5),W.clear(),Ye&&ie.render(rt);const jt=W.toneMapping;W.toneMapping=ia;const oe=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),L.setupLightsView(nt),Se===!0&&Kt.setGlobalState(W.clippingPlanes,nt),xs(A,rt,nt),ft.updateMultisampleRenderTarget(Nt),ft.updateRenderTargetMipmap(Nt),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ee=0,$e=X.length;Ee<$e;Ee++){const ke=X[Ee],{object:Le,geometry:Ne,material:Bt,group:zn}=ke;if(Bt.side===$i&&Le.layers.test(nt.layers)){const pe=Bt.side;Bt.side=Kn,Bt.needsUpdate=!0,Oa(Le,rt,nt,Ne,Bt,zn),Bt.side=pe,Bt.needsUpdate=!0,Zt=!0}}Zt===!0&&(ft.updateMultisampleRenderTarget(Nt),ft.updateRenderTargetMipmap(Nt))}W.setRenderTarget(Ut,kt,Vt),W.setClearColor(Rt,Ot),oe!==void 0&&(nt.viewport=oe),W.toneMapping=jt}function xs(A,X,rt){const nt=X.isScene===!0?X.overrideMaterial:null;for(let it=0,Nt=A.length;it<Nt;it++){const Ht=A[it],{object:Ut,geometry:kt,group:Vt}=Ht;let jt=Ht.material;jt.allowOverride===!0&&nt!==null&&(jt=nt),Ut.layers.test(rt.layers)&&Oa(Ut,X,rt,kt,jt,Vt)}}function Oa(A,X,rt,nt,it,Nt){A.onBeforeRender(W,X,rt,nt,it,Nt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),it.onBeforeRender(W,X,rt,nt,A,Nt),it.transparent===!0&&it.side===$i&&it.forceSinglePass===!1?(it.side=Kn,it.needsUpdate=!0,W.renderBufferDirect(rt,X,nt,it,A,Nt),it.side=ms,it.needsUpdate=!0,W.renderBufferDirect(rt,X,nt,it,A,Nt),it.side=$i):W.renderBufferDirect(rt,X,nt,it,A,Nt),A.onAfterRender(W,X,rt,nt,it,Nt)}function Ia(A,X,rt){X.isScene!==!0&&(X=un);const nt=st.get(A),it=L.state.lights,Nt=L.state.shadowsArray,Ht=it.state.version,Ut=At.getParameters(A,it.state,Nt,X,rt,L.state.lightProbeGridArray),kt=At.getProgramCacheKey(Ut);let Vt=nt.programs;nt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,nt.fog=X.fog;const jt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;nt.envMap=Et.get(A.envMap||nt.environment,jt),nt.envMapRotation=nt.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",ri),Vt=new Map,nt.programs=Vt);let oe=Vt.get(kt);if(oe!==void 0){if(nt.currentProgram===oe&&nt.lightsStateVersion===Ht)return oa(A,Ut),oe}else Ut.uniforms=At.getUniforms(A),q!==null&&A.isNodeMaterial&&q.build(A,rt,Ut),A.onBeforeCompile(Ut,W),oe=At.acquireProgram(Ut,kt),Vt.set(kt,oe),nt.uniforms=Ut.uniforms;const Zt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=Kt.uniform),oa(A,Ut),nt.needsLights=El(A),nt.lightsStateVersion=Ht,nt.needsLights&&(Zt.ambientLightColor.value=it.state.ambient,Zt.lightProbe.value=it.state.probe,Zt.directionalLights.value=it.state.directional,Zt.directionalLightShadows.value=it.state.directionalShadow,Zt.spotLights.value=it.state.spot,Zt.spotLightShadows.value=it.state.spotShadow,Zt.rectAreaLights.value=it.state.rectArea,Zt.ltc_1.value=it.state.rectAreaLTC1,Zt.ltc_2.value=it.state.rectAreaLTC2,Zt.pointLights.value=it.state.point,Zt.pointLightShadows.value=it.state.pointShadow,Zt.hemisphereLights.value=it.state.hemi,Zt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Zt.spotLightMatrix.value=it.state.spotLightMatrix,Zt.spotLightMap.value=it.state.spotLightMap,Zt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=L.state.lightProbeGridArray.length>0,nt.currentProgram=oe,nt.uniformsList=null,oe}function ra(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=du.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function oa(A,X){const rt=st.get(A);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function ys(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(X.matrixWorld);for(let rt=0,nt=A.length;rt<nt;rt++){const it=A[rt];if(it.texture!==null&&it.boundingBox.containsPoint(C))return it}return null}function Fa(A,X,rt,nt,it){X.isScene!==!0&&(X=un),ft.resetTextureUnits();const Nt=X.fog,Ht=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?X.environment:null,Ut=$===null?W.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:xe.workingColorSpace,kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Vt=Et.get(nt.envMap||Ht,kt),jt=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,oe=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!rt.morphAttributes.position,Ee=!!rt.morphAttributes.normal,$e=!!rt.morphAttributes.color;let ke=ia;nt.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ke=W.toneMapping);const Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ne=Le!==void 0?Le.length:0,Bt=st.get(nt),zn=L.state.lights;if(Se===!0&&(de===!0||A!==bt)){const we=A===bt&&nt.id===pt;Kt.setState(nt,A,we)}let pe=!1;nt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==zn.state.version||Bt.outputColorSpace!==Ut||it.isBatchedMesh&&Bt.batching===!1||!it.isBatchedMesh&&Bt.batching===!0||it.isBatchedMesh&&Bt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Bt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Bt.instancing===!1||!it.isInstancedMesh&&Bt.instancing===!0||it.isSkinnedMesh&&Bt.skinning===!1||!it.isSkinnedMesh&&Bt.skinning===!0||it.isInstancedMesh&&Bt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Bt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Bt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Bt.instancingMorph===!1&&it.morphTexture!==null||Bt.envMap!==Vt||nt.fog===!0&&Bt.fog!==Nt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Kt.numPlanes||Bt.numIntersection!==Kt.numIntersection)||Bt.vertexAlphas!==jt||Bt.vertexTangents!==oe||Bt.morphTargets!==Zt||Bt.morphNormals!==Ee||Bt.morphColors!==$e||Bt.toneMapping!==ke||Bt.morphTargetsCount!==Ne||!!Bt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Bt.__version=nt.version);let Sn=Bt.currentProgram;pe===!0&&(Sn=Ia(nt,X,it),q&&nt.isNodeMaterial&&q.onUpdateProgram(nt,Sn,Bt));let oi=!1,Ui=!1,li=!1;const Pe=Sn.getUniforms(),tn=Bt.uniforms;if(E.useProgram(Sn.program)&&(oi=!0,Ui=!0,li=!0),nt.id!==pt&&(pt=nt.id,Ui=!0),Bt.needsLights){const we=ys(L.state.lightProbeGridArray,it);Bt.lightProbeGrid!==we&&(Bt.lightProbeGrid=we,Ui=!0)}if(oi||bt!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pe.setValue(Y,"projectionMatrix",A.projectionMatrix),Pe.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Wi=Pe.map.cameraPosition;Wi!==void 0&&Wi.setValue(Y,sn.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Pe.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Pe.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),bt!==A&&(bt=A,Ui=!0,li=!0)}if(Bt.needsLights&&(zn.state.directionalShadowMap.length>0&&Pe.setValue(Y,"directionalShadowMap",zn.state.directionalShadowMap,ft),zn.state.spotShadowMap.length>0&&Pe.setValue(Y,"spotShadowMap",zn.state.spotShadowMap,ft),zn.state.pointShadowMap.length>0&&Pe.setValue(Y,"pointShadowMap",zn.state.pointShadowMap,ft)),it.isSkinnedMesh){Pe.setOptional(Y,it,"bindMatrix"),Pe.setOptional(Y,it,"bindMatrixInverse");const we=it.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Pe.setValue(Y,"boneTexture",we.boneTexture,ft))}it.isBatchedMesh&&(Pe.setOptional(Y,it,"batchingTexture"),Pe.setValue(Y,"batchingTexture",it._matricesTexture,ft),Pe.setOptional(Y,it,"batchingIdTexture"),Pe.setValue(Y,"batchingIdTexture",it._indirectTexture,ft),Pe.setOptional(Y,it,"batchingColorTexture"),it._colorsTexture!==null&&Pe.setValue(Y,"batchingColorTexture",it._colorsTexture,ft));const Li=rt.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&k.update(it,rt,Sn),(Ui||Bt.receiveShadow!==it.receiveShadow)&&(Bt.receiveShadow=it.receiveShadow,Pe.setValue(Y,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&X.environment!==null&&(tn.envMapIntensity.value=X.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=RT()),Ui){if(Pe.setValue(Y,"toneMappingExposure",W.toneMappingExposure),Bt.needsLights&&pn(tn,li),Nt&&nt.fog===!0&&Ft.refreshFogUniforms(tn,Nt),Ft.refreshMaterialUniforms(tn,nt,Mt,xt,L.state.transmissionRenderTarget[A.id]),Bt.needsLights&&Bt.lightProbeGrid){const we=Bt.lightProbeGrid;tn.probesSH.value=we.texture,tn.probesMin.value.copy(we.boundingBox.min),tn.probesMax.value.copy(we.boundingBox.max),tn.probesResolution.value.copy(we.resolution)}du.upload(Y,ra(Bt),tn,ft)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(du.upload(Y,ra(Bt),tn,ft),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Pe.setValue(Y,"center",it.center),Pe.setValue(Y,"modelViewMatrix",it.modelViewMatrix),Pe.setValue(Y,"normalMatrix",it.normalMatrix),Pe.setValue(Y,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const we=nt.uniformsGroups;for(let Wi=0,Ba=we.length;Wi<Ba;Wi++){const Ss=we[Wi];St.update(Ss,Sn),St.bind(Ss,Sn)}}return Sn}function pn(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function El(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,X,rt){const nt=st.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),st.get(A.texture).__webglTexture=X,st.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const rt=st.get(A);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,rt=0){$=A,I=X,H=rt;let nt=null,it=!1,Nt=!1;if(A){const Ut=st.get(A);if(Ut.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Ut.__webglFramebuffer),U.copy(A.viewport),Z.copy(A.scissor),yt=A.scissorTest,E.viewport(U),E.scissor(Z),E.setScissorTest(yt),pt=-1;return}else if(Ut.__webglFramebuffer===void 0)ft.setupRenderTarget(A);else if(Ut.__hasExternalTextures)ft.rebindTextures(A,st.get(A.texture).__webglTexture,st.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const jt=A.depthTexture;if(Ut.__boundDepthTexture!==jt){if(jt!==null&&st.has(jt)&&(A.width!==jt.image.width||A.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(A)}}const kt=A.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Nt=!0);const Vt=st.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[X])?nt=Vt[X][rt]:nt=Vt[X],it=!0):A.samples>0&&ft.useMultisampledRTT(A)===!1?nt=st.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?nt=Vt[rt]:nt=Vt,U.copy(A.viewport),Z.copy(A.scissor),yt=A.scissorTest}else U.copy(Qt).multiplyScalar(Mt).floor(),Z.copy(Ke).multiplyScalar(Mt).floor(),yt=fe;if(rt!==0&&(nt=ct),E.bindFramebuffer(Y.FRAMEBUFFER,nt)&&E.drawBuffers(A,nt),E.viewport(U),E.scissor(Z),E.setScissorTest(yt),it){const Ut=st.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ut.__webglTexture,rt)}else if(Nt){const Ut=X;for(let kt=0;kt<A.textures.length;kt++){const Vt=st.get(A.textures[kt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+kt,Vt.__webglTexture,rt,Ut)}}else if(A!==null&&rt!==0){const Ut=st.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ut.__webglTexture,rt)}pt=-1},this.readRenderTargetPixels=function(A,X,rt,nt,it,Nt,Ht,Ut=0){if(!(A&&A.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ht!==void 0&&(kt=kt[Ht]),kt){E.bindFramebuffer(Y.FRAMEBUFFER,kt);try{const Vt=A.textures[Ut],jt=Vt.format,oe=Vt.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ut),!D.textureFormatReadable(jt)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(oe)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-nt&&rt>=0&&rt<=A.height-it&&Y.readPixels(X,rt,nt,it,Ct.convert(jt),Ct.convert(oe),Nt)}finally{const Vt=$!==null?st.get($).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,X,rt,nt,it,Nt,Ht,Ut=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ht!==void 0&&(kt=kt[Ht]),kt)if(X>=0&&X<=A.width-nt&&rt>=0&&rt<=A.height-it){E.bindFramebuffer(Y.FRAMEBUFFER,kt);const Vt=A.textures[Ut],jt=Vt.format,oe=Vt.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ut),!D.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Zt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Nt.byteLength,Y.STREAM_READ),Y.readPixels(X,rt,nt,it,Ct.convert(jt),Ct.convert(oe),0);const Ee=$!==null?st.get($).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Ee);const $e=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await wS(Y,$e,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Zt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Nt),Y.deleteBuffer(Zt),Y.deleteSync($e),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,rt=0){const nt=Math.pow(2,-rt),it=Math.floor(A.image.width*nt),Nt=Math.floor(A.image.height*nt),Ht=X!==null?X.x:0,Ut=X!==null?X.y:0;ft.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,rt,0,0,Ht,Ut,it,Nt),E.unbindTexture()},this.copyTextureToTexture=function(A,X,rt=null,nt=null,it=0,Nt=0){let Ht,Ut,kt,Vt,jt,oe,Zt,Ee,$e;const ke=A.isCompressedTexture?A.mipmaps[Nt]:A.image;if(rt!==null)Ht=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,kt=rt.isBox3?rt.max.z-rt.min.z:1,Vt=rt.min.x,jt=rt.min.y,oe=rt.isBox3?rt.min.z:0;else{const tn=Math.pow(2,-it);Ht=Math.floor(ke.width*tn),Ut=Math.floor(ke.height*tn),A.isDataArrayTexture?kt=ke.depth:A.isData3DTexture?kt=Math.floor(ke.depth*tn):kt=1,Vt=0,jt=0,oe=0}nt!==null?(Zt=nt.x,Ee=nt.y,$e=nt.z):(Zt=0,Ee=0,$e=0);const Le=Ct.convert(X.format),Ne=Ct.convert(X.type);let Bt;X.isData3DTexture?(ft.setTexture3D(X,0),Bt=Y.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ft.setTexture2DArray(X,0),Bt=Y.TEXTURE_2D_ARRAY):(ft.setTexture2D(X,0),Bt=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,X.unpackAlignment);const zn=E.getParameter(Y.UNPACK_ROW_LENGTH),pe=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Sn=E.getParameter(Y.UNPACK_SKIP_PIXELS),oi=E.getParameter(Y.UNPACK_SKIP_ROWS),Ui=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,ke.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ke.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Vt),E.pixelStorei(Y.UNPACK_SKIP_ROWS,jt),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,oe);const li=A.isDataArrayTexture||A.isData3DTexture,Pe=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const tn=st.get(A),Li=st.get(X),we=st.get(tn.__renderTarget),Wi=st.get(Li.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,we.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Ba=0;Ba<kt;Ba++)li&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,st.get(A).__webglTexture,it,oe+Ba),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,st.get(X).__webglTexture,Nt,$e+Ba)),Y.blitFramebuffer(Vt,jt,Ht,Ut,Zt,Ee,Ht,Ut,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(it!==0||A.isRenderTargetTexture||st.has(A)){const tn=st.get(A),Li=st.get(X);E.bindFramebuffer(Y.READ_FRAMEBUFFER,gt),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,J);for(let we=0;we<kt;we++)li?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,tn.__webglTexture,it,oe+we):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,tn.__webglTexture,it),Pe?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Li.__webglTexture,Nt,$e+we):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Li.__webglTexture,Nt),it!==0?Y.blitFramebuffer(Vt,jt,Ht,Ut,Zt,Ee,Ht,Ut,Y.COLOR_BUFFER_BIT,Y.NEAREST):Pe?Y.copyTexSubImage3D(Bt,Nt,Zt,Ee,$e+we,Vt,jt,Ht,Ut):Y.copyTexSubImage2D(Bt,Nt,Zt,Ee,Vt,jt,Ht,Ut);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Pe?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Bt,Nt,Zt,Ee,$e,Ht,Ut,kt,Le,Ne,ke.data):X.isCompressedArrayTexture?Y.compressedTexSubImage3D(Bt,Nt,Zt,Ee,$e,Ht,Ut,kt,Le,ke.data):Y.texSubImage3D(Bt,Nt,Zt,Ee,$e,Ht,Ut,kt,Le,Ne,ke):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Nt,Zt,Ee,Ht,Ut,Le,Ne,ke.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Nt,Zt,Ee,ke.width,ke.height,Le,ke.data):Y.texSubImage2D(Y.TEXTURE_2D,Nt,Zt,Ee,Ht,Ut,Le,Ne,ke);E.pixelStorei(Y.UNPACK_ROW_LENGTH,zn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,pe),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Sn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,oi),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ui),Nt===0&&X.generateMipmaps&&Y.generateMipmap(Bt),E.unbindTexture()},this.initRenderTarget=function(A){st.get(A).__webglFramebuffer===void 0&&ft.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ft.setTextureCube(A,0):A.isData3DTexture?ft.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ft.setTexture2DArray(A,0):ft.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){I=0,H=0,$=null,E.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),i.unpackColorSpace=xe._getUnpackColorSpace()}}const H1={type:"change"},G0={type:"start"},Uv={type:"end"},iu=new B0,G1=new Da,wT=Math.cos(70*lv.DEG2RAD),En=new j,ai=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xd=1e-6;class DT extends LM{constructor(t,i=null){super(t,i),this.state=Ve.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ua.ROTATE,MIDDLE:Ua.DOLLY,RIGHT:Ua.PAN},this.touches={ONE:qr.ROTATE,TWO:qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new gs,this._lastTargetPosition=new j,this._quat=new gs().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new m1,this._sphericalDelta=new m1,this._scale=1,this._panOffset=new j,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new j,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=LT.bind(this),this._onPointerDown=UT.bind(this),this._onPointerUp=NT.bind(this),this._onContextMenu=HT.bind(this),this._onMouseWheel=IT.bind(this),this._onKeyDown=FT.bind(this),this._onTouchStart=BT.bind(this),this._onTouchMove=zT.bind(this),this._onMouseDown=PT.bind(this),this._onMouseMove=OT.bind(this),this._interceptControlDown=GT.bind(this),this._interceptControlUp=VT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(H1),this.update(),this.state=Ve.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;En.copy(i).sub(this.target),En.applyQuaternion(this._quat),this._spherical.setFromVector3(En),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ai:s>Math.PI&&(s-=ai),l<-Math.PI?l+=ai:l>Math.PI&&(l-=ai),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(En.setFromSpherical(this._spherical),En.applyQuaternion(this._quatInverse),i.copy(this.target).add(En),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=En.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=En.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(iu.origin.copy(this.object.position),iu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(iu.direction))<wT?this.object.lookAt(this.target):(G1.setFromNormalAndCoplanarPoint(this.object.up,this.target),iu.intersectPlane(G1,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>xd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xd||this._lastTargetPosition.distanceToSquared(this.target)>xd?(this.dispatchEvent(H1),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ai/60*this.autoRotateSpeed*t:ai/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){En.setFromMatrixColumn(i,0),En.multiplyScalar(-t),this._panOffset.add(En)}_panUp(t,i){this.screenSpacePanning===!0?En.setFromMatrixColumn(i,1):(En.setFromMatrixColumn(i,0),En.crossVectors(this.object.up,En)),En.multiplyScalar(t),this._panOffset.add(En)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;En.copy(l).sub(this.target);let c=En.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/i.clientHeight),this._rotateUp(ai*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/i.clientHeight),this._rotateUp(ai*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new qt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function UT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function LT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function NT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uv),this.state=Ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function PT(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ua.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ve.DOLLY;break;case Ua.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ve.ROTATE}break;case Ua.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(G0)}function OT(r){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function IT(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(r.preventDefault(),this.dispatchEvent(G0),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Uv))}function FT(r){this.enabled!==!1&&this._handleKeyDown(r)}function BT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ve.TOUCH_ROTATE;break;case qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ve.TOUCH_DOLLY_PAN;break;case qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(G0)}function zT(r){switch(this._trackPointer(r),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ve.NONE}}function HT(r){this.enabled!==!1&&r.preventDefault()}function GT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class kT extends fv{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new ro;t.deleteAttribute("uv");const i=new u0({side:Kn}),s=new u0,l=new EM(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new yn(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new hM(t,s,6),d=new Bn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),f.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),f.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),f.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),f.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),f.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),f.setMatrixAt(5,d.matrix),this.add(f);const m=new yn(t,Xr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new yn(t,Xr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new yn(t,Xr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new yn(t,Xr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new yn(t,Xr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const S=new yn(t,Xr(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function Xr(r){return new SM({color:0,emissive:16777215,emissiveIntensity:r})}const pu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const XT=new Tu(-1,1,1,-1,0,1);class WT extends sa{constructor(){super(),this.setAttribute("position",new ki([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ki([0,2,0,0,2,0],2))}}const YT=new WT;class Cu{constructor(t){this._mesh=new yn(YT,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,XT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Lv extends Qs{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Un?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xl.clone(t.uniforms),this.material=new Un({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Cu(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class V1 extends Qs{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class qT extends Qs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ZT{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new qt);this._width=s.width,this._height=s.height,i=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lv(pu),this.copyPass.material.blending=Vi,this.timer=new CM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}V1!==void 0&&(f instanceof V1?s=!0:f instanceof qT&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new qt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class KT extends Qs{constructor(t,i,s=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ae}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const QT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class io extends Qs{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new qt(t.x,t.y):new qt(256,256),this.clearColor=new ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(c,f,{type:Qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const v=new Fn(c,f,{type:Qn});v.texture.name="UnrealBloomPass.h"+_,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const g=new Fn(c,f,{type:Qn});g.texture.name="UnrealBloomPass.v"+_,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),f=Math.round(f/2)}const d=QT;this.highPassUniforms=xl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Un({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new qt(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xl.clone(pu.uniforms),this.blendMaterial=new Un({uniforms:this.copyUniforms,vertexShader:pu.vertexShader,fragmentShader:pu.fragmentShader,premultipliedAlpha:!0,blending:bd,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ae,this._oldClearAlpha=1,this._basic=new z0,this._fsQuad=new Cu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new qt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=io.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=io.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[],s=t/3;for(let l=0;l<t;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Un({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new qt(.5,.5)},direction:{value:new qt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Un({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}io.BlurDirectionX=new qt(1,0);io.BlurDirectionY=new qt(0,1);const au={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class JT extends Qs{constructor(){super(),this.isOutputPass=!0,this.uniforms=xl.clone(au.uniforms),this.material=new vv({name:au.name,uniforms:this.uniforms,vertexShader:au.vertexShader,fragmentShader:au.fragmentShader}),this._fsQuad=new Cu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===De&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===M0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===b0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===E0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$r?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===T0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const m0={cols:33,rows:49,width:2.0015625000000004,height:3,camera:[.925,.654,5.166],target:[.525,-.046,-.034],data:new Float32Array([-.499,1.389,-.95,-.439,1.374,-.939,-.38,1.36,-.927,-.32,1.345,-.915,-.26,1.33,-.903,-.201,1.315,-.892,-.141,1.301,-.88,-.081,1.287,-.867,-.022,1.275,-.851,.037,1.264,-.834,.096,1.253,-.817,.156,1.242,-.801,.215,1.231,-.783,.274,1.221,-.765,.332,1.211,-.745,.391,1.202,-.726,.45,1.192,-.706,.508,1.183,-.686,.567,1.174,-.666,.625,1.165,-.646,.684,1.156,-.625,.742,1.147,-.604,.8,1.139,-.583,.858,1.13,-.56,.916,1.122,-.538,.973,1.115,-.514,1.03,1.107,-.49,1.087,1.1,-.465,1.143,1.093,-.438,1.199,1.087,-.41,1.253,1.081,-.38,1.307,1.075,-.348,1.36,1.069,-.315,-.518,1.336,-.922,-.458,1.322,-.91,-.398,1.308,-.898,-.339,1.294,-.885,-.279,1.279,-.873,-.219,1.265,-.861,-.16,1.251,-.847,-.1,1.239,-.831,-.041,1.229,-.814,.018,1.22,-.795,.077,1.21,-.777,.136,1.197,-.762,.195,1.183,-.748,.255,1.172,-.731,.314,1.161,-.713,.372,1.151,-.695,.431,1.141,-.676,.49,1.13,-.658,.549,1.121,-.639,.608,1.111,-.62,.666,1.101,-.6,.725,1.092,-.58,.783,1.083,-.56,.842,1.074,-.539,.9,1.065,-.518,.958,1.057,-.497,1.016,1.048,-.475,1.074,1.041,-.451,1.131,1.033,-.427,1.187,1.026,-.402,1.243,1.019,-.375,1.299,1.013,-.346,1.353,1.007,-.315,-.536,1.285,-.892,-.477,1.271,-.88,-.417,1.257,-.867,-.357,1.243,-.854,-.298,1.229,-.841,-.238,1.216,-.827,-.179,1.204,-.811,-.12,1.194,-.793,-.061,1.186,-.773,-.002,1.178,-.753,.057,1.167,-.736,.116,1.153,-.722,.176,1.138,-.709,.235,1.125,-.694,.294,1.113,-.679,.353,1.101,-.662,.413,1.09,-.644,.472,1.08,-.626,.53,1.069,-.608,.589,1.059,-.59,.648,1.049,-.572,.707,1.039,-.553,.766,1.029,-.534,.825,1.019,-.515,.883,1.01,-.495,.942,1,-.475,1,.991,-.454,1.058,.983,-.433,1.116,.974,-.411,1.174,.966,-.388,1.231,.959,-.364,1.288,.952,-.339,1.344,.945,-.311,-.555,1.234,-.861,-.495,1.22,-.848,-.436,1.207,-.834,-.376,1.194,-.82,-.317,1.181,-.806,-.257,1.169,-.79,-.198,1.16,-.771,-.14,1.152,-.751,-.081,1.146,-.73,-.022,1.136,-.712,.037,1.123,-.697,.097,1.108,-.683,.156,1.093,-.671,.215,1.079,-.657,.275,1.066,-.642,.334,1.054,-.625,.393,1.043,-.608,.452,1.032,-.591,.511,1.021,-.574,.57,1.01,-.556,.629,.999,-.539,.688,.988,-.521,.747,.978,-.503,.806,.967,-.485,.865,.957,-.467,.924,.947,-.448,.983,.937,-.429,1.041,.927,-.41,1.1,.918,-.39,1.158,.909,-.369,1.217,.9,-.348,1.274,.892,-.326,1.332,.885,-.302,-.574,1.184,-.828,-.514,1.171,-.814,-.455,1.159,-.799,-.395,1.146,-.784,-.336,1.134,-.768,-.277,1.125,-.75,-.218,1.118,-.729,-.16,1.113,-.707,-.101,1.104,-.688,-.042,1.092,-.672,.018,1.077,-.658,.077,1.062,-.646,.136,1.048,-.632,.196,1.035,-.617,.255,1.023,-.601,.314,1.011,-.585,.373,.999,-.568,.432,.987,-.552,.492,.976,-.535,.551,.964,-.518,.61,.953,-.502,.669,.941,-.485,.728,.93,-.468,.787,.919,-.451,.846,.908,-.433,.905,.897,-.416,.964,.886,-.398,1.023,.875,-.38,1.082,.865,-.362,1.141,.855,-.344,1.2,.845,-.324,1.258,.835,-.305,1.317,.826,-.284,-.593,1.136,-.793,-.533,1.124,-.778,-.474,1.112,-.762,-.414,1.1,-.746,-.355,1.091,-.728,-.297,1.084,-.707,-.239,1.08,-.684,-.18,1.072,-.664,-.121,1.06,-.648,-.061,1.046,-.634,-.002,1.031,-.621,.057,1.018,-.606,.117,1.006,-.591,.176,.994,-.574,.235,.986,-.555,.294,.973,-.539,.353,.959,-.524,.412,.947,-.509,.471,.934,-.493,.531,.922,-.477,.59,.91,-.461,.649,.898,-.444,.708,.886,-.428,.767,.874,-.412,.827,.862,-.395,.886,.85,-.379,.945,.839,-.362,1.004,.827,-.345,1.063,.816,-.328,1.122,.805,-.311,1.181,.794,-.294,1.24,.783,-.276,1.299,.772,-.258,-.612,1.089,-.757,-.552,1.078,-.74,-.493,1.067,-.724,-.434,1.056,-.706,-.375,1.049,-.686,-.317,1.045,-.662,-.259,1.04,-.641,-.2,1.029,-.624,-.14,1.014,-.61,-.081,1.001,-.596,-.022,.988,-.58,.038,.977,-.564,.097,.966,-.547,.156,.956,-.529,.215,.95,-.508,.274,.939,-.491,.333,.924,-.477,.392,.909,-.463,.451,.896,-.448,.511,.883,-.432,.57,.87,-.417,.629,.858,-.401,.688,.845,-.385,.747,.832,-.369,.807,.82,-.353,.866,.808,-.337,.925,.796,-.321,.984,.784,-.305,1.043,.772,-.289,1.102,.76,-.272,1.162,.748,-.256,1.221,.736,-.24,1.28,.724,-.223,-.631,1.043,-.718,-.572,1.033,-.701,-.513,1.023,-.684,-.454,1.014,-.665,-.395,1.008,-.643,-.338,1.005,-.619,-.279,.997,-.599,-.219,.984,-.585,-.16,.971,-.57,-.101,.959,-.554,-.042,.948,-.537,.018,.937,-.52,.077,.927,-.502,.136,.918,-.483,.195,.912,-.463,.254,.903,-.444,.313,.89,-.429,.372,.875,-.415,.431,.86,-.401,.49,.847,-.386,.55,.833,-.37,.609,.82,-.355,.668,.807,-.339,.727,.795,-.324,.786,.782,-.308,.846,.77,-.292,.905,.757,-.276,.964,.745,-.26,1.023,.733,-.244,1.082,.72,-.228,1.141,.708,-.212,1.201,.696,-.196,1.26,.683,-.18,-.65,.999,-.679,-.591,.99,-.66,-.532,.98,-.642,-.473,.972,-.623,-.415,.966,-.601,-.357,.963,-.577,-.298,.956,-.557,-.239,.943,-.542,-.18,.931,-.526,-.121,.921,-.508,-.062,.911,-.491,-.002,.9,-.474,.057,.889,-.457,.116,.88,-.438,.175,.873,-.418,.234,.866,-.398,.293,.855,-.381,.352,.841,-.366,.411,.826,-.353,.47,.811,-.338,.529,.798,-.323,.589,.785,-.307,.648,.773,-.291,.707,.761,-.275,.766,.748,-.259,.825,.736,-.243,.885,.724,-.227,.944,.712,-.211,1.003,.699,-.195,1.062,.687,-.179,1.121,.675,-.163,1.181,.663,-.147,1.24,.651,-.131,-.67,.957,-.637,-.611,.948,-.618,-.552,.939,-.599,-.493,.93,-.581,-.434,.923,-.56,-.376,.919,-.537,-.318,.914,-.515,-.259,.906,-.496,-.2,.896,-.478,-.141,.886,-.46,-.082,.877,-.442,-.023,.867,-.425,.037,.853,-.409,.096,.842,-.392,.155,.834,-.373,.214,.828,-.353,.273,.819,-.334,.332,.807,-.318,.391,.791,-.304,.45,.777,-.29,.509,.764,-.274,.569,.753,-.258,.628,.741,-.241,.687,.73,-.225,.746,.718,-.209,.805,.706,-.192,.865,.695,-.176,.924,.683,-.159,.983,.671,-.143,1.042,.659,-.127,1.101,.648,-.11,1.161,.636,-.094,1.22,.625,-.078,-.69,.917,-.593,-.631,.908,-.574,-.572,.899,-.556,-.513,.89,-.537,-.454,.881,-.518,-.395,.874,-.498,-.337,.868,-.477,-.278,.863,-.454,-.22,.855,-.435,-.161,.847,-.416,-.102,.838,-.397,-.043,.83,-.378,.016,.82,-.36,.076,.807,-.345,.135,.796,-.328,.194,.789,-.308,.253,.782,-.288,.312,.772,-.27,.371,.757,-.256,.43,.744,-.241,.489,.733,-.224,.549,.723,-.206,.608,.712,-.19,.667,.701,-.173,.726,.69,-.156,.785,.679,-.139,.845,.668,-.123,.904,.657,-.106,.963,.646,-.089,1.022,.635,-.073,1.082,.624,-.056,1.141,.612,-.04,1.2,.601,-.023,-.71,.88,-.548,-.651,.871,-.529,-.592,.862,-.51,-.533,.853,-.491,-.474,.843,-.473,-.415,.834,-.454,-.356,.826,-.435,-.298,.818,-.415,-.239,.811,-.395,-.18,.803,-.375,-.121,.796,-.355,-.062,.789,-.335,-.004,.784,-.314,.055,.773,-.297,.115,.761,-.28,.174,.752,-.262,.233,.744,-.242,.292,.736,-.223,.351,.724,-.207,.41,.713,-.19,.469,.702,-.174,.529,.691,-.157,.588,.68,-.14,.647,.669,-.123,.706,.659,-.106,.765,.648,-.089,.825,.637,-.073,.884,.625,-.056,.943,.614,-.039,1.002,.603,-.023,1.062,.592,-.006,1.121,.581,.01,1.18,.569,.027,-.731,.845,-.5,-.672,.836,-.481,-.613,.827,-.462,-.554,.818,-.444,-.495,.809,-.425,-.436,.799,-.406,-.377,.79,-.388,-.318,.781,-.369,-.259,.773,-.349,-.2,.766,-.329,-.141,.759,-.309,-.082,.752,-.289,-.024,.746,-.268,.035,.737,-.25,.094,.726,-.232,.153,.717,-.214,.212,.708,-.196,.272,.698,-.178,.331,.687,-.161,.39,.676,-.144,.449,.665,-.127,.509,.654,-.11,.568,.643,-.094,.627,.632,-.077,.686,.621,-.06,.746,.609,-.044,.805,.598,-.028,.864,.587,-.011,.923,.575,.005,.983,.563,.021,1.042,.552,.038,1.101,.54,.054,1.16,.528,.07,-.751,.812,-.451,-.692,.803,-.432,-.633,.795,-.413,-.574,.787,-.394,-.515,.778,-.375,-.456,.769,-.356,-.397,.76,-.337,-.339,.751,-.318,-.28,.742,-.299,-.221,.734,-.28,-.162,.726,-.26,-.103,.717,-.241,-.044,.708,-.222,.015,.698,-.205,.074,.688,-.187,.133,.678,-.17,.193,.667,-.152,.252,.656,-.135,.311,.645,-.118,.37,.634,-.102,.43,.623,-.085,.489,.611,-.069,.548,.6,-.053,.607,.588,-.037,.667,.576,-.021,.726,.564,-.005,.785,.552,.011,.845,.54,.026,.904,.528,.042,.963,.516,.057,1.023,.504,.073,1.082,.491,.088,1.141,.479,.104,-.772,.781,-.401,-.713,.772,-.382,-.654,.763,-.363,-.595,.754,-.345,-.536,.744,-.326,-.477,.735,-.308,-.418,.725,-.289,-.359,.716,-.271,-.3,.706,-.252,-.241,.697,-.234,-.182,.687,-.216,-.123,.676,-.198,-.064,.666,-.181,-.004,.655,-.164,.055,.644,-.147,.114,.633,-.13,.173,.622,-.114,.233,.61,-.098,.292,.598,-.082,.351,.587,-.066,.411,.575,-.051,.47,.562,-.035,.529,.55,-.02,.589,.538,-.005,.648,.525,.01,.708,.513,.025,.767,.5,.04,.827,.487,.055,.886,.475,.069,.945,.462,.084,1.005,.449,.098,1.064,.436,.112,1.124,.423,.127,-.792,.745,-.354,-.733,.735,-.336,-.674,.725,-.318,-.615,.715,-.3,-.556,.705,-.282,-.497,.694,-.264,-.438,.684,-.246,-.379,.674,-.229,-.32,.663,-.212,-.261,.652,-.195,-.201,.641,-.178,-.142,.63,-.161,-.083,.618,-.145,-.023,.606,-.129,.036,.595,-.114,.095,.583,-.098,.155,.57,-.083,.214,.558,-.068,.274,.546,-.053,.333,.533,-.039,.393,.521,-.024,.452,.508,-.01,.512,.495,.004,.572,.482,.018,.631,.469,.031,.691,.456,.045,.75,.443,.059,.81,.43,.072,.87,.417,.085,.929,.403,.099,.989,.39,.112,1.049,.377,.125,1.108,.364,.138,-.812,.703,-.312,-.753,.692,-.295,-.694,.681,-.278,-.635,.67,-.261,-.575,.659,-.244,-.516,.647,-.228,-.457,.636,-.211,-.398,.625,-.195,-.338,.613,-.179,-.279,.601,-.163,-.22,.589,-.148,-.16,.577,-.133,-.101,.565,-.118,-.041,.552,-.103,.019,.54,-.089,.078,.527,-.075,.138,.514,-.061,.197,.501,-.048,.257,.488,-.035,.317,.475,-.022,.377,.462,-.009,.436,.449,.004,.496,.436,.017,.556,.422,.029,.616,.409,.041,.676,.396,.054,.735,.382,.066,.795,.369,.078,.855,.356,.09,.915,.342,.102,.975,.329,.114,1.035,.316,.125,1.095,.303,.137,-.831,.654,-.278,-.772,.642,-.262,-.712,.63,-.246,-.653,.618,-.23,-.594,.606,-.215,-.534,.594,-.2,-.475,.582,-.185,-.415,.57,-.17,-.356,.558,-.155,-.296,.545,-.141,-.236,.532,-.127,-.177,.52,-.114,-.117,.507,-.101,-.057,.494,-.088,.003,.481,-.075,.063,.468,-.063,.123,.454,-.051,.182,.441,-.039,.242,.428,-.028,.302,.415,-.016,.362,.401,-.005,.422,.388,.006,.482,.375,.018,.542,.361,.029,.603,.348,.04,.663,.335,.051,.723,.321,.062,.783,.308,.073,.843,.295,.083,.903,.282,.094,.963,.268,.104,1.024,.255,.114,1.084,.242,.124,-.848,.599,-.253,-.789,.587,-.239,-.729,.574,-.224,-.67,.562,-.21,-.61,.549,-.196,-.55,.536,-.182,-.491,.524,-.169,-.431,.511,-.155,-.371,.498,-.143,-.311,.485,-.13,-.251,.472,-.118,-.191,.459,-.106,-.131,.446,-.095,-.071,.433,-.084,-.011,.42,-.073,.049,.406,-.063,.109,.393,-.053,.17,.38,-.042,.23,.367,-.032,.29,.354,-.022,.35,.34,-.012,.411,.327,-.003,.471,.314,.007,.531,.301,.017,.592,.288,.027,.652,.275,.037,.712,.261,.047,.773,.248,.056,.833,.236,.066,.894,.223,.075,.954,.21,.084,1.015,.197,.092,1.075,.185,.101,-.864,.54,-.239,-.804,.527,-.226,-.745,.514,-.213,-.685,.502,-.2,-.625,.489,-.188,-.565,.476,-.176,-.505,.463,-.164,-.445,.45,-.153,-.384,.437,-.142,-.324,.424,-.131,-.264,.411,-.121,-.204,.398,-.112,-.143,.385,-.102,-.083,.372,-.093,-.022,.359,-.084,.038,.346,-.075,.099,.333,-.066,.159,.32,-.057,.22,.307,-.049,.28,.294,-.04,.341,.281,-.031,.401,.268,-.022,.462,.255,-.013,.522,.243,-.004,.583,.23,.005,.643,.217,.013,.704,.205,.022,.765,.192,.03,.825,.18,.038,.886,.168,.046,.947,.156,.053,1.008,.144,.06,1.069,.132,.067,-.878,.479,-.236,-.818,.466,-.224,-.758,.453,-.213,-.698,.44,-.202,-.637,.428,-.191,-.577,.415,-.181,-.517,.402,-.171,-.456,.389,-.162,-.395,.376,-.154,-.335,.364,-.145,-.274,.351,-.137,-.213,.339,-.13,-.153,.326,-.122,-.092,.314,-.114,-.031,.301,-.107,.029,.289,-.099,.09,.276,-.091,.151,.264,-.083,.212,.251,-.075,.272,.238,-.067,.333,.226,-.058,.393,.213,-.05,.454,.2,-.041,.515,.188,-.033,.576,.176,-.026,.637,.164,-.018,.698,.152,-.011,.759,.14,-.004,.82,.129,.002,.881,.118,.009,.942,.107,.015,1.003,.095,.021,1.065,.084,.027,-.89,.418,-.243,-.829,.405,-.232,-.769,.392,-.222,-.708,.38,-.213,-.648,.367,-.205,-.587,.355,-.197,-.526,.343,-.19,-.465,.331,-.183,-.404,.319,-.176,-.343,.307,-.171,-.282,.296,-.165,-.221,.284,-.159,-.16,.272,-.152,-.099,.26,-.146,-.038,.248,-.139,.023,.236,-.132,.084,.224,-.124,.145,.211,-.117,.205,.199,-.109,.266,.186,-.1,.327,.173,-.092,.387,.161,-.084,.448,.149,-.076,.509,.137,-.069,.57,.126,-.063,.631,.114,-.056,.693,.103,-.05,.754,.093,-.044,.816,.083,-.04,.877,.073,-.034,.939,.062,-.029,1,.051,-.023,1.061,.04,-.017,-.9,.358,-.257,-.839,.346,-.248,-.779,.333,-.24,-.718,.322,-.234,-.656,.31,-.228,-.595,.298,-.222,-.534,.287,-.217,-.473,.276,-.211,-.411,.265,-.207,-.35,.255,-.205,-.288,.245,-.2,-.227,.233,-.195,-.166,.222,-.19,-.104,.211,-.184,-.043,.199,-.177,.018,.187,-.171,.079,.175,-.164,.14,.163,-.156,.2,.15,-.147,.261,.137,-.139,.321,.124,-.13,.382,.111,-.122,.443,.101,-.116,.505,.09,-.11,.566,.079,-.104,.627,.068,-.098,.689,.057,-.092,.75,.046,-.086,.811,.035,-.08,.872,.024,-.074,.934,.013,-.067,.995,.002,-.061,1.056,-.01,-.054,-.91,.299,-.274,-.848,.288,-.27,-.787,.277,-.266,-.725,.266,-.261,-.664,.255,-.257,-.603,.244,-.252,-.541,.233,-.248,-.48,.223,-.244,-.418,.212,-.24,-.357,.201,-.235,-.295,.191,-.231,-.234,.18,-.227,-.172,.169,-.222,-.111,.158,-.217,-.05,.147,-.211,.012,.136,-.205,.073,.124,-.199,.134,.112,-.192,.195,.1,-.185,.256,.088,-.177,.316,.075,-.168,.377,.062,-.16,.438,.051,-.153,.499,.04,-.147,.561,.029,-.141,.622,.018,-.135,.683,.006,-.128,.744,-.005,-.121,.805,-.017,-.114,.866,-.029,-.106,.927,-.041,-.098,.988,-.053,-.09,1.049,-.065,-.082,-.919,.239,-.289,-.857,.228,-.287,-.796,.218,-.284,-.734,.207,-.281,-.673,.196,-.277,-.611,.186,-.273,-.55,.175,-.27,-.488,.165,-.266,-.427,.154,-.262,-.365,.143,-.258,-.304,.133,-.254,-.242,.122,-.249,-.181,.112,-.245,-.119,.101,-.241,-.058,.09,-.236,.004,.079,-.231,.065,.068,-.226,.126,.057,-.221,.188,.046,-.215,.249,.034,-.209,.31,.022,-.202,.371,.01,-.194,.432,-.003,-.185,.493,-.014,-.178,.554,-.026,-.171,.615,-.038,-.163,.676,-.05,-.155,.736,-.062,-.146,.797,-.074,-.137,.858,-.087,-.128,.918,-.099,-.119,.979,-.112,-.11,1.039,-.124,-.101,-.929,.178,-.299,-.867,.167,-.296,-.806,.157,-.293,-.744,.146,-.29,-.683,.135,-.287,-.621,.125,-.284,-.56,.114,-.28,-.498,.104,-.277,-.437,.093,-.273,-.375,.083,-.269,-.314,.072,-.265,-.252,.062,-.262,-.191,.051,-.258,-.129,.04,-.254,-.067,.03,-.25,-.006,.019,-.246,.056,.009,-.242,.117,-.002,-.238,.179,-.013,-.235,.24,-.024,-.23,.302,-.035,-.225,.363,-.047,-.22,.424,-.059,-.211,.484,-.072,-.2,.545,-.084,-.191,.606,-.097,-.182,.666,-.109,-.172,.726,-.122,-.161,.787,-.135,-.151,.847,-.147,-.141,.907,-.16,-.131,.968,-.173,-.12,1.028,-.185,-.11,-.94,.116,-.3,-.878,.106,-.297,-.816,.095,-.293,-.755,.084,-.29,-.693,.074,-.287,-.632,.063,-.284,-.57,.053,-.28,-.509,.042,-.277,-.447,.032,-.273,-.386,.021,-.27,-.324,.01,-.266,-.263,0,-.262,-.201,-.011,-.259,-.14,-.021,-.255,-.078,-.032,-.252,-.017,-.042,-.248,.045,-.053,-.245,.106,-.064,-.242,.168,-.075,-.239,.229,-.085,-.237,.291,-.096,-.234,.352,-.107,-.232,.414,-.119,-.227,.475,-.132,-.216,.534,-.145,-.201,.594,-.158,-.189,.654,-.17,-.178,.715,-.183,-.167,.775,-.196,-.156,.835,-.209,-.145,.895,-.221,-.133,.955,-.234,-.122,1.015,-.246,-.11,-.95,.055,-.292,-.889,.045,-.288,-.827,.034,-.284,-.766,.024,-.281,-.704,.013,-.277,-.643,.003,-.274,-.581,-.008,-.27,-.52,-.019,-.266,-.458,-.029,-.263,-.397,-.04,-.259,-.335,-.05,-.256,-.274,-.061,-.252,-.212,-.071,-.249,-.151,-.082,-.245,-.089,-.093,-.242,-.028,-.103,-.238,.034,-.114,-.235,.095,-.125,-.232,.156,-.135,-.229,.218,-.146,-.226,.279,-.157,-.224,.34,-.168,-.221,.401,-.181,-.221,.463,-.194,-.219,.523,-.207,-.207,.581,-.219,-.188,.641,-.231,-.173,.701,-.244,-.165,.761,-.257,-.153,.822,-.27,-.141,.882,-.282,-.129,.941,-.294,-.116,1.001,-.306,-.1,-.962,-.004,-.274,-.9,-.014,-.27,-.838,-.025,-.266,-.777,-.035,-.262,-.715,-.046,-.258,-.654,-.056,-.255,-.592,-.067,-.251,-.531,-.077,-.247,-.469,-.087,-.243,-.408,-.098,-.239,-.346,-.108,-.236,-.285,-.119,-.232,-.223,-.129,-.228,-.162,-.14,-.224,-.1,-.15,-.221,-.039,-.161,-.217,.023,-.171,-.213,.084,-.182,-.209,.145,-.192,-.205,.207,-.202,-.201,.268,-.212,-.196,.329,-.22,-.189,.391,-.233,-.189,.448,-.253,-.205,.509,-.268,-.204,.569,-.28,-.189,.627,-.292,-.17,.687,-.305,-.158,.748,-.318,-.147,.807,-.33,-.133,.867,-.342,-.118,.926,-.353,-.1,.983,-.363,-.078,-.973,-.06,-.249,-.911,-.07,-.245,-.85,-.081,-.241,-.788,-.091,-.236,-.727,-.101,-.232,-.665,-.112,-.228,-.603,-.122,-.224,-.542,-.132,-.22,-.48,-.142,-.216,-.419,-.153,-.211,-.357,-.163,-.207,-.296,-.173,-.203,-.234,-.184,-.199,-.173,-.194,-.195,-.111,-.204,-.19,-.05,-.214,-.186,.012,-.224,-.181,.073,-.234,-.177,.135,-.244,-.171,.196,-.253,-.166,.258,-.259,-.156,.319,-.271,-.153,.379,-.288,-.161,.435,-.309,-.181,.494,-.327,-.191,.555,-.341,-.183,.614,-.353,-.166,.673,-.365,-.152,.733,-.377,-.137,.792,-.389,-.119,.85,-.399,-.1,.908,-.408,-.076,.963,-.413,-.048,-.984,-.113,-.217,-.922,-.123,-.213,-.861,-.133,-.208,-.799,-.143,-.204,-.737,-.153,-.199,-.676,-.164,-.195,-.614,-.174,-.19,-.553,-.184,-.186,-.491,-.194,-.181,-.43,-.204,-.177,-.368,-.213,-.172,-.307,-.223,-.167,-.245,-.233,-.162,-.184,-.243,-.157,-.122,-.253,-.152,-.061,-.262,-.147,.001,-.271,-.141,.063,-.281,-.137,.124,-.291,-.132,.186,-.297,-.123,.247,-.309,-.12,.308,-.326,-.125,.366,-.344,-.137,.424,-.363,-.152,.479,-.384,-.172,.54,-.401,-.172,.599,-.413,-.156,.658,-.424,-.138,.716,-.435,-.119,.775,-.445,-.098,.832,-.453,-.073,.887,-.457,-.044,.939,-.457,-.01,-.994,-.162,-.181,-.933,-.172,-.176,-.871,-.182,-.171,-.81,-.192,-.166,-.748,-.202,-.162,-.687,-.212,-.157,-.625,-.222,-.152,-.563,-.231,-.147,-.502,-.241,-.141,-.44,-.25,-.136,-.379,-.259,-.131,-.317,-.269,-.125,-.256,-.278,-.12,-.194,-.287,-.114,-.132,-.296,-.109,-.071,-.306,-.104,-.009,-.313,-.096,.052,-.323,-.091,.114,-.334,-.087,.175,-.347,-.086,.235,-.364,-.092,.294,-.383,-.103,.351,-.402,-.119,.408,-.422,-.136,.463,-.442,-.157,.524,-.46,-.156,.583,-.471,-.138,.641,-.481,-.117,.698,-.49,-.095,.755,-.497,-.07,.81,-.501,-.04,.863,-.501,-.006,.912,-.494,.032,-1.005,-.209,-.14,-.944,-.219,-.135,-.882,-.228,-.13,-.82,-.238,-.125,-.759,-.247,-.12,-.697,-.257,-.114,-.636,-.266,-.109,-.574,-.275,-.103,-.512,-.284,-.098,-.451,-.293,-.092,-.389,-.301,-.086,-.327,-.31,-.08,-.266,-.319,-.074,-.204,-.326,-.067,-.142,-.336,-.061,-.081,-.346,-.057,-.02,-.357,-.053,.042,-.37,-.052,.102,-.386,-.054,.162,-.403,-.061,.22,-.422,-.073,.277,-.441,-.09,.333,-.461,-.11,.388,-.481,-.135,.446,-.501,-.144,.507,-.517,-.136,.565,-.526,-.115,.622,-.535,-.092,.679,-.542,-.066,.734,-.546,-.036,.786,-.545,-.002,.835,-.538,.036,.882,-.526,.077,-1.016,-.253,-.097,-.954,-.263,-.092,-.892,-.272,-.087,-.831,-.281,-.081,-.769,-.29,-.075,-.707,-.299,-.069,-.646,-.307,-.063,-.584,-.316,-.057,-.522,-.324,-.051,-.461,-.333,-.045,-.399,-.34,-.038,-.337,-.349,-.032,-.276,-.358,-.026,-.214,-.368,-.022,-.153,-.38,-.018,-.092,-.393,-.017,-.031,-.408,-.018,.029,-.424,-.022,.089,-.442,-.031,.146,-.462,-.045,.203,-.481,-.064,.258,-.501,-.086,.311,-.52,-.113,.369,-.54,-.128,.429,-.559,-.127,.489,-.572,-.112,.546,-.58,-.088,.602,-.586,-.062,.657,-.59,-.032,.71,-.589,.002,.759,-.583,.04,.805,-.571,.08,.849,-.555,.122,-1.026,-.296,-.053,-.964,-.305,-.047,-.903,-.314,-.041,-.841,-.322,-.035,-.779,-.331,-.029,-.718,-.339,-.022,-.656,-.347,-.016,-.594,-.355,-.009,-.533,-.363,-.003,-.471,-.372,.003,-.409,-.381,.009,-.348,-.391,.013,-.286,-.403,.017,-.225,-.416,.018,-.164,-.43,.018,-.104,-.446,.014,-.044,-.463,.008,.015,-.482,-.003,.072,-.501,-.019,.128,-.521,-.039,.182,-.54,-.063,.235,-.559,-.092,.292,-.579,-.11,.351,-.599,-.114,.411,-.614,-.105,.47,-.625,-.085,.526,-.631,-.058,.581,-.634,-.028,.633,-.634,.006,.683,-.627,.044,.729,-.615,.084,.773,-.599,.126,.816,-.582,.167,-1.036,-.337,-.007,-.975,-.346,-.001,-.913,-.354,.005,-.851,-.362,.012,-.789,-.37,.019,-.728,-.378,.025,-.666,-.386,.032,-.604,-.394,.038,-.543,-.404,.043,-.481,-.414,.048,-.42,-.425,.051,-.359,-.438,.053,-.298,-.452,.053,-.237,-.468,.051,-.177,-.484,.045,-.118,-.503,.037,-.06,-.522,.024,-.003,-.541,.006,.053,-.561,-.016,.107,-.58,-.041,.159,-.598,-.071,.215,-.618,-.091,.273,-.638,-.1,.333,-.656,-.095,.393,-.668,-.079,.45,-.676,-.054,.504,-.679,-.024,.557,-.678,.009,.607,-.672,.047,.653,-.66,.088,.696,-.643,.13,.738,-.623,.172,.783,-.61,.213,-1.046,-.378,.039,-.985,-.386,.046,-.923,-.393,.053,-.861,-.401,.06,-.8,-.409,.066,-.738,-.418,.072,-.676,-.427,.078,-.615,-.437,.082,-.553,-.448,.086,-.492,-.461,.088,-.431,-.474,.089,-.37,-.489,.087,-.31,-.506,.083,-.251,-.524,.075,-.192,-.542,.064,-.134,-.562,.049,-.078,-.581,.03,-.023,-.601,.007,.03,-.619,-.02,.082,-.637,-.05,.137,-.656,-.073,.196,-.677,-.084,.255,-.696,-.084,.315,-.71,-.072,.373,-.72,-.049,.428,-.724,-.021,.481,-.723,.013,.531,-.717,.051,.577,-.705,.091,.62,-.687,.133,.66,-.665,.176,.704,-.649,.217,.751,-.639,.258,-1.057,-.417,.087,-.995,-.425,.093,-.933,-.433,.1,-.872,-.441,.107,-.81,-.45,.112,-.748,-.46,.117,-.687,-.471,.121,-.626,-.483,.123,-.564,-.497,.124,-.504,-.511,.123,-.443,-.527,.12,-.383,-.545,.113,-.324,-.563,.104,-.266,-.582,.091,-.209,-.602,.074,-.153,-.621,.053,-.099,-.64,.029,-.046,-.659,.001,.006,-.676,-.03,.06,-.695,-.054,.118,-.716,-.068,.177,-.735,-.071,.237,-.752,-.063,.296,-.763,-.043,.352,-.768,-.016,.405,-.768,.017,.455,-.762,.054,.501,-.75,.095,.543,-.731,.137,.583,-.708,.18,.626,-.69,.222,.672,-.678,.262,.721,-.672,.301,-1.067,-.457,.134,-1.005,-.465,.141,-.943,-.474,.146,-.882,-.483,.151,-.82,-.494,.155,-.759,-.506,.158,-.698,-.519,.159,-.637,-.533,.159,-.576,-.549,.156,-.516,-.566,.151,-.457,-.584,.143,-.398,-.603,.132,-.341,-.622,.117,-.284,-.642,.098,-.229,-.661,.076,-.175,-.68,.05,-.122,-.698,.022,-.071,-.715,-.01,-.017,-.734,-.035,.04,-.754,-.051,.099,-.774,-.058,.159,-.792,-.052,.218,-.805,-.036,.275,-.812,-.011,.329,-.813,.021,.379,-.808,.058,.426,-.795,.099,.468,-.776,.141,.507,-.752,.183,.548,-.732,.226,.593,-.718,.267,.641,-.71,.306,.692,-.709,.343,-1.077,-.497,.18,-1.015,-.507,.186,-.954,-.517,.19,-.892,-.529,.193,-.831,-.542,.195,-.77,-.556,.195,-.71,-.571,.193,-.649,-.587,.188,-.59,-.605,.181,-.531,-.623,.171,-.473,-.642,.158,-.416,-.662,.142,-.36,-.681,.121,-.305,-.701,.098,-.252,-.719,.071,-.199,-.737,.042,-.148,-.754,.01,-.094,-.773,-.016,-.038,-.793,-.034,.021,-.813,-.043,.081,-.832,-.041,.14,-.847,-.028,.198,-.856,-.005,.253,-.858,.026,.304,-.853,.062,.35,-.842,.102,.393,-.823,.144,.431,-.798,.187,.471,-.775,.229,.515,-.759,.271,.562,-.749,.311,.612,-.746,.349,.665,-.749,.382,-1.087,-.54,.224,-1.026,-.552,.228,-.965,-.564,.23,-.904,-.578,.23,-.843,-.593,.229,-.782,-.609,.225,-.723,-.626,.219,-.663,-.644,.211,-.605,-.663,.199,-.547,-.682,.184,-.491,-.702,.166,-.435,-.721,.144,-.381,-.74,.119,-.328,-.758,.092,-.276,-.776,.062,-.225,-.793,.03,-.171,-.811,.003,-.115,-.831,-.017,-.057,-.852,-.028,.003,-.871,-.029,.062,-.887,-.019,.121,-.898,.002,.176,-.902,.03,.228,-.899,.066,.275,-.888,.106,.318,-.87,.148,.357,-.846,.19,.395,-.82,.233,.437,-.801,.275,.483,-.788,.316,.532,-.783,.354,.584,-.785,.389,.639,-.793,.419,-1.098,-.587,.265,-1.037,-.6,.266,-.976,-.615,.265,-.916,-.63,.262,-.856,-.647,.257,-.796,-.665,.25,-.737,-.683,.239,-.679,-.703,.226,-.622,-.722,.209,-.566,-.742,.189,-.511,-.761,.166,-.457,-.78,.14,-.405,-.798,.112,-.353,-.815,.082,-.301,-.832,.05,-.248,-.85,.022,-.193,-.87,.001,-.135,-.891,-.012,-.076,-.91,-.016,-.016,-.928,-.008,.043,-.94,.009,.1,-.946,.036,.152,-.944,.07,.2,-.935,.109,.244,-.917,.151,.283,-.893,.193,.319,-.866,.236,.36,-.844,.278,.404,-.829,.32,.452,-.821,.359,.504,-.821,.395,.558,-.827,.427,.613,-.839,.452,-1.109,-.637,.301,-1.049,-.652,.299,-.989,-.668,.295,-.929,-.686,.288,-.87,-.704,.279,-.811,-.723,.267,-.754,-.742,.252,-.697,-.762,.233,-.642,-.781,.212,-.587,-.8,.188,-.534,-.819,.161,-.482,-.837,.131,-.43,-.854,.101,-.378,-.871,.069,-.325,-.889,.042,-.27,-.909,.019,-.213,-.929,.004,-.154,-.949,-.002,-.094,-.967,.003,-.035,-.981,.017,.022,-.989,.042,.076,-.989,.075,.125,-.981,.113,.169,-.965,.154,.209,-.941,.197,.245,-.913,.239,.283,-.888,.282,.326,-.87,.324,.373,-.86,.364,.423,-.857,.402,.477,-.862,.434,.532,-.872,.461,.589,-.888,.482,-1.122,-.69,.332,-1.062,-.707,.326,-1.002,-.725,.318,-.944,-.743,.307,-.886,-.763,.293,-.829,-.782,.277,-.772,-.802,.257,-.717,-.821,.234,-.664,-.84,.209,-.611,-.858,.181,-.559,-.875,.151,-.507,-.892,.119,-.455,-.909,.089,-.402,-.928,.061,-.348,-.947,.038,-.291,-.968,.021,-.232,-.988,.013,-.172,-1.007,.014,-.113,-1.022,.026,-.055,-1.032,.049,0,-1.034,.079,.05,-1.028,.117,.095,-1.013,.158,.135,-.99,.2,.171,-.962,.242,.208,-.934,.285,.249,-.913,.327,.294,-.9,.369,.343,-.895,.407,.396,-.897,.441,.451,-.906,.47,.507,-.92,.493,.565,-.939,.509,-1.135,-.746,.356,-1.076,-.764,.347,-1.018,-.783,.334,-.96,-.803,.319,-.904,-.822,.301,-.848,-.842,.28,-.793,-.861,.256,-.74,-.879,.23,-.687,-.897,.201,-.636,-.914,.17,-.584,-.931,.138,-.533,-.948,.108,-.48,-.967,.08,-.425,-.986,.056,-.368,-1.006,.038,-.31,-1.027,.028,-.251,-1.046,.027,-.191,-1.063,.036,-.132,-1.074,.056,-.077,-1.078,.085,-.025,-1.074,.121,.021,-1.061,.161,.062,-1.039,.203,.098,-1.012,.246,.133,-.981,.288,.172,-.957,.331,.216,-.941,.373,.264,-.933,.412,.315,-.933,.448,.369,-.939,.479,.426,-.953,.503,.483,-.971,.521,.541,-.992,.532,-1.15,-.804,.375,-1.092,-.823,.361,-1.035,-.842,.344,-.979,-.862,.325,-.924,-.881,.303,-.87,-.9,.278,-.816,-.919,.25,-.764,-.936,.22,-.713,-.953,.189,-.662,-.97,.157,-.61,-.987,.127,-.557,-1.005,.099,-.502,-1.025,.075,-.446,-1.045,.056,-.388,-1.065,.044,-.329,-1.085,.04,-.269,-1.103,.047,-.21,-1.115,.064,-.154,-1.121,.09,-.101,-1.119,.125,-.054,-1.108,.165,-.012,-1.089,.207,.025,-1.062,.249,.059,-1.03,.291,.097,-1.003,.334,.138,-.984,.376,.185,-.972,.417,.235,-.969,.454,.288,-.974,.487,.344,-.985,.513,.401,-1.002,.533,.459,-1.023,.545,.516,-1.047,.551,-1.167,-.863,.387,-1.11,-.882,.369,-1.054,-.902,.348,-1,-.921,.325,-.946,-.94,.299,-.893,-.958,.27,-.841,-.975,.24,-.79,-.992,.208,-.739,-1.009,.177,-.687,-1.026,.147,-.634,-1.044,.119,-.579,-1.063,.094,-.524,-1.083,.074,-.466,-1.104,.06,-.407,-1.124,.054,-.347,-1.142,.058,-.288,-1.156,.072,-.231,-1.164,.097,-.177,-1.164,.13,-.129,-1.155,.168,-.085,-1.137,.21,-.047,-1.112,.253,-.013,-1.08,.295,.022,-1.051,.337,.062,-1.028,.38,.106,-1.013,.421,.155,-1.006,.46,.207,-1.009,.494,.262,-1.018,.523,.319,-1.034,.544,.377,-1.054,.558,.435,-1.077,.565,.492,-1.102,.567,-1.185,-.922,.393,-1.13,-.942,.371,-1.076,-.961,.346,-1.022,-.979,.319,-.97,-.997,.29,-.918,-1.014,.26,-.867,-1.031,.227,-.816,-1.048,.196,-.764,-1.065,.166,-.711,-1.083,.138,-.657,-1.102,.113,-.601,-1.122,.092,-.544,-1.142,.076,-.485,-1.163,.068,-.425,-1.182,.07,-.366,-1.197,.081,-.308,-1.207,.103,-.253,-1.209,.134,-.204,-1.202,.172,-.159,-1.186,.213,-.12,-1.162,.256,-.085,-1.132,.298,-.052,-1.1,.34,-.014,-1.073,.383,.028,-1.054,.425,.075,-1.045,.465,.127,-1.044,.501,.181,-1.052,.531,.238,-1.066,.555,.295,-1.085,.571,.353,-1.107,.579,.41,-1.132,.582,.467,-1.158,.58,-1.206,-.981,.394,-1.152,-1,.368,-1.099,-1.018,.34,-1.047,-1.036,.31,-.995,-1.053,.279,-.944,-1.07,.247,-.892,-1.087,.216,-.84,-1.104,.186,-.788,-1.122,.158,-.734,-1.141,.132,-.678,-1.161,.11,-.622,-1.181,.094,-.563,-1.201,.084,-.504,-1.221,.083,-.444,-1.237,.092,-.385,-1.249,.111,-.33,-1.253,.14,-.279,-1.248,.176,-.233,-1.234,.217,-.193,-1.212,.259,-.157,-1.183,.302,-.124,-1.15,.343,-.089,-1.121,.386,-.049,-1.098,.428,-.004,-1.085,.47,.046,-1.081,.508,.1,-1.086,.54,.156,-1.098,.565,.213,-1.116,.583,.271,-1.138,.593,.328,-1.162,.597,.386,-1.188,.595,.442,-1.214,.59])},yd=1/120,k1=4,jT=1.6,$T=2,tA=1,su=2;class eA{constructor(t,i,s,l){this.width=t,this.height=i,this.segX=s,this.segY=l,this.cols=s+1,this.rows=l+1,this.count=this.cols*this.rows,this.positions=new Float32Array(this.count*3),this.prev=new Float32Array(this.count*3),this.rest=new Float32Array(this.count*3),this.initPositions();const c=[],f=[],d=[],m=(p,_)=>_*this.cols+p;for(let p=0;p<this.rows;p++)for(let _=0;_<this.cols;_++)_+1<this.cols&&(c.push(m(_,p)),f.push(m(_+1,p)),d.push(1)),p+1<this.rows&&(c.push(m(_,p)),f.push(m(_,p+1)),d.push(1)),_+1<this.cols&&p+1<this.rows&&(c.push(m(_,p)),f.push(m(_+1,p+1)),d.push(.85),c.push(m(_+1,p)),f.push(m(_,p+1)),d.push(.85)),_+2<this.cols&&(c.push(m(_,p)),f.push(m(_+2,p)),d.push(.5)),p+2<this.rows&&(c.push(m(_,p)),f.push(m(_,p+2)),d.push(.5));this.cA=new Int32Array(c),this.cB=new Int32Array(f),this.cMul=new Float32Array(d),this.cRest=new Float32Array(c.length),this.computeRestLengths(),this.neighbors=new Int32Array(this.count*4).fill(-1);for(let p=0;p<this.rows;p++)for(let _=0;_<this.cols;_++){const v=m(_,p)*4;this.neighbors[v+0]=_>0?m(_-1,p):-1,this.neighbors[v+1]=_+1<this.cols?m(_+1,p):-1,this.neighbors[v+2]=p>0?m(_,p-1):-1,this.neighbors[v+3]=p+1<this.rows?m(_,p+1):-1}this.selfRadius=Math.min(this.width/this.segX,this.height/this.segY)*jT,this.selfHashInv=1/this.selfRadius}width;height;segX;segY;cols;rows;count;positions;prev;rest;cA;cB;cRest;cMul;neighbors;grab=null;accumulator=0;selfRadius=.1;selfHashInv=10;selfHash=new Map;initPositions(){const t=m0,i=t.cols,s=t.rows,l=this.width/t.width,c=this.height/t.height,f=(l+c)/2;let d=0;for(let m=0;m<this.rows;m++)for(let p=0;p<this.cols;p++){const _=p/this.segX*(i-1),v=m/this.segY*(s-1),g=Math.min(i-2,Math.floor(_)),S=Math.min(s-2,Math.floor(v)),T=_-g,w=v-S;for(let M=0;M<3;M++){const y=(S*i+g)*3+M,F=(S*i+g+1)*3+M,B=((S+1)*i+g)*3+M,C=((S+1)*i+g+1)*3+M,P=t.data[y]*(1-T)+t.data[F]*T,L=t.data[B]*(1-T)+t.data[C]*T,O=M===0?l:M===1?c:f;this.positions[d+M]=(P*(1-w)+L*w)*O}d+=3}this.prev.set(this.positions),this.rest.set(this.positions)}computeRestLengths(){const t=this.width/this.segX,i=this.height/this.segY;for(let s=0;s<this.cA.length;s++){const l=this.cA[s],c=this.cB[s],f=l%this.cols,d=Math.floor(l/this.cols),m=c%this.cols,p=Math.floor(c/this.cols),_=(f-m)*t,v=(d-p)*i;this.cRest[s]=Math.hypot(_,v)}}reset(){this.initPositions(),this.grab=null}poke(t=.5){const i=this.positions,s=Math.floor(Math.random()*this.count),l=i[s*3],c=i[s*3+1],f=i[s*3+2],d=new j(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(t*.09),m=Math.max(this.width,this.height)*.28;for(let p=0;p<this.count;p++){const _=i[p*3]-l,v=i[p*3+1]-c,g=i[p*3+2]-f,S=Math.sqrt(_*_+v*v+g*g);if(S>m)continue;const T=1-S/m,w=T*T*(3-2*T);this.prev[p*3]-=d.x*w,this.prev[p*3+1]-=d.y*w,this.prev[p*3+2]-=d.z*w}}startGrab(t,i){const s=this.positions,l=[],c=[],f=[];let d=1/0;for(let m=0;m<this.count;m++){const p=s[m*3]-t.x,_=s[m*3+1]-t.y,v=s[m*3+2]-t.z,g=Math.sqrt(p*p+_*_+v*v);if(d=Math.min(d,g),g>i)continue;const S=1-g/i,T=S*S*(3-2*S);l.push(m),c.push(T),f.push(p,_,v)}return l.length===0||d>i?!1:(this.grab={indices:l,weights:c,offsets:new Float32Array(f),target:t.clone()},!0)}moveGrab(t){this.grab&&this.grab.target.copy(t)}endGrab(){this.grab=null}get isGrabbing(){return this.grab!==null}cavityScratch=null;computeCavity(t,i,s=6){const l=this.positions,c=this.neighbors,f=this.count,d=1/Math.min(this.width/this.segX,this.height/this.segY);(!this.cavityScratch||this.cavityScratch.length<f)&&(this.cavityScratch=new Float32Array(f));const m=this.cavityScratch;for(let p=0;p<f;p++){let _=0,v=0,g=0,S=0;for(let B=0;B<4;B++){const C=c[p*4+B];C<0||(_+=l[C*3],v+=l[C*3+1],g+=l[C*3+2],S++)}if(S===0){m[p]=0;continue}const T=1/S,w=_*T-l[p*3],M=v*T-l[p*3+1],y=g*T-l[p*3+2],F=(w*t[p*3]+M*t[p*3+1]+y*t[p*3+2])*d;m[p]=Math.min(1,Math.max(0,F*s))}for(let p=0;p<f;p++){let _=0,v=0;for(let g=0;g<4;g++){const S=c[p*4+g];S<0||(_+=m[S],v++)}i[p]=v>0?m[p]*.5+_/v*.5:m[p]}}step(t,i){this.accumulator+=Math.min(t,.05);let s=0;for(;this.accumulator>=yd&&s<k1;)this.substep(i),this.accumulator-=yd,s++;s===k1&&(this.accumulator=0),s>0&&this.selfCollide()}selfCollide(){const t=this.positions,i=this.count,s=this.cols,l=this.selfRadius,c=l*l,f=this.selfHashInv,d=this.selfHash;for(let m=0;m<$T;m++){d.clear();for(let p=0;p<i;p++){const _=Math.floor(t[p*3]*f),v=Math.floor(t[p*3+1]*f),g=Math.floor(t[p*3+2]*f),S=(_*73856093^v*19349663^g*83492791)>>>0;let T=d.get(S);T||(T=[],d.set(S,T)),T.push(p)}for(let p=0;p<i;p++){const _=p%s,v=p/s|0,g=Math.floor(t[p*3]*f),S=Math.floor(t[p*3+1]*f),T=Math.floor(t[p*3+2]*f);for(let w=-1;w<=1;w++)for(let M=-1;M<=1;M++)for(let y=-1;y<=1;y++){const F=((g+y)*73856093^(S+M)*19349663^(T+w)*83492791)>>>0,B=d.get(F);if(B)for(let C=0;C<B.length;C++){const P=B[C];if(P<=p)continue;const L=P%s,O=P/s|0,b=_-L,N=v-O;if(b>=-su&&b<=su&&N>=-su&&N<=su)continue;const W=t[P*3]-t[p*3],G=t[P*3+1]-t[p*3+1],q=t[P*3+2]-t[p*3+2],ct=W*W+G*G+q*q;if(ct>=c||ct<1e-12)continue;const gt=Math.sqrt(ct),J=(l-gt)/gt*.5*tA,I=W*J,H=G*J,$=q*J;t[p*3]-=I,t[p*3+1]-=H,t[p*3+2]-=$,t[P*3]+=I,t[P*3+1]+=H,t[P*3+2]+=$}}}}}substep(t){const i=this.positions,s=this.prev,l=this.count,c=Math.pow(1-Math.min(t.viscosity,.99),yd*60);for(let S=0;S<l*3;S++){const T=i[S],w=(T-s[S])*c;s[S]=T,i[S]=T+w}if(t.smoothing>0){const S=t.smoothing*.5,T=this.neighbors;for(let w=0;w<l;w++){let M=0,y=0,F=0,B=0;for(let P=0;P<4;P++){const L=T[w*4+P];L<0||(M+=i[L*3],y+=i[L*3+1],F+=i[L*3+2],B++)}if(B===0)continue;const C=1/B;i[w*3]+=(M*C-i[w*3])*S,i[w*3+1]+=(y*C-i[w*3+1])*S,i[w*3+2]+=(F*C-i[w*3+2])*S}}const f=Math.max(1,Math.round(t.iterations)),d=t.stiffness,m=this.cA,p=this.cB,_=this.cRest,v=this.cMul,g=m.length;for(let S=0;S<f;S++){for(let T=0;T<g;T++){const w=m[T]*3,M=p[T]*3,y=i[M]-i[w],F=i[M+1]-i[w+1],B=i[M+2]-i[w+2],C=Math.sqrt(y*y+F*F+B*B);if(C<1e-9)continue;const P=(C-_[T])/C*.5*d*v[T],L=y*P,O=F*P,b=B*P;i[w]+=L,i[w+1]+=O,i[w+2]+=b,i[M]-=L,i[M+1]-=O,i[M+2]-=b}this.applyGrab()}}applyGrab(){const t=this.grab;if(!t)return;const i=this.positions;for(let s=0;s<t.indices.length;s++){const l=t.indices[s]*3,c=t.weights[s],f=t.target.x+t.offsets[s*3],d=t.target.y+t.offsets[s*3+1],m=t.target.z+t.offsets[s*3+2];i[l]+=(f-i[l])*c,i[l+1]+=(d-i[l+1])*c,i[l+2]+=(m-i[l+2])*c}}}function Nv(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function nA(r,t,i){const s=new Float32Array(r*r),l=new Float32Array(t+1),c=new Float32Array(t+1);for(let d=0;d<=t;d++)l[d]=.85+i()*.3,c[d]=.85+i()*.3;const f=new Float32Array(r*r);for(let d=0;d<f.length;d++)f[d]=i();for(let d=0;d<r;d++){const m=d/r*t,p=Math.floor(m),_=m-p;for(let v=0;v<r;v++){const g=v/r*t,S=Math.floor(g),T=g-S,w=Math.sin(T*Math.PI)*l[S%(t+1)],M=Math.sin(_*Math.PI)*c[p%(t+1)],F=(S+p)%2===0?w*.62+M*.38:M*.62+w*.38,B=f[d*r+v];s[d*r+v]=F*.85+B*.15}}return s}function Pv(r,t,i){const s=document.createElement("canvas");s.width=t,s.height=t;const l=s.getContext("2d"),c=l.createImageData(t,t),f=c.data,d=(p,_)=>r[(_+t)%t*t+(p+t)%t];for(let p=0;p<t;p++)for(let _=0;_<t;_++){const v=(d(_+1,p)-d(_-1,p))*i,g=(d(_,p+1)-d(_,p-1))*i,S=1/Math.sqrt(v*v+g*g+1),T=(p*t+_)*4;f[T]=Math.round((-v*S*.5+.5)*255),f[T+1]=Math.round((g*S*.5+.5)*255),f[T+2]=Math.round((S*.5+.5)*255),f[T+3]=255}l.putImageData(c,0,0);const m=new vl(s);return m.wrapS=m.wrapT=dl,m.repeat.set(2,2),m.colorSpace=ta,m}function iA(r,t,i,s){const l=new Float32Array(r*r),c=new Float32Array(r*r);for(let d=0;d<c.length;d++)c[d]=s();const f=new Float32Array(Math.ceil(t)+2);for(let d=0;d<f.length;d++)f[d]=.85+s()*.3;for(let d=0;d<r;d++){const m=d/r*i,p=Math.floor(m),_=m-p,v=p%2===0?0:.5;for(let g=0;g<r;g++){const S=g/r*t+v,T=Math.floor(S),w=S-T,M=Math.sin(w*Math.PI)*f[(T+1)%f.length],y=Math.sin(_*Math.PI),F=.5+.5*Math.cos((w-.5)*2*Math.PI),B=.55*M+.3*y*F;l[d*r+g]=B*.85+c[d*r+g]*.15}}return l}function aA(r){const t=r.size??512,i=Nv(r.seed??20240),s=r.type==="woven"?nA(t,r.threads,i):iA(t,r.threads,Math.max(2,Math.round(r.threads*.8)),i);return Pv(s,t,r.strength)}function sA(r,t=512,i=1.6){const s=document.createElement("canvas");s.width=t,s.height=t;const l=s.getContext("2d");l.drawImage(r,0,0,t,t);const c=l.getImageData(0,0,t,t).data,f=new Float32Array(t*t);for(let d=0;d<f.length;d++)f[d]=(c[d*4]*.2126+c[d*4+1]*.7152+c[d*4+2]*.0722)/255;return Pv(f,t,i)}function rA(r=256,t=4242){const i=Nv(t),s=document.createElement("canvas");s.width=r,s.height=r;const l=s.getContext("2d"),c=l.createImageData(r,r),f=c.data;for(let m=0;m<r*r;m++){const p=Math.round(215+(i()-.5)*70);f[m*4]=p,f[m*4+1]=p,f[m*4+2]=p,f[m*4+3]=255}l.putImageData(c,0,0);const d=new vl(s);return d.wrapS=d.wrapT=dl,d.repeat.set(4,4),d.colorSpace=ta,d}function oA(r){const t=rA(),i=new yM({color:new ae("#9aa1ad"),metalness:.95,roughness:.1,roughnessMap:t,normalScale:new qt(.5,.5),clearcoat:1,clearcoatRoughness:.08,sheen:.35,sheenRoughness:.55,sheenColor:new ae("#cfd6ff"),iridescence:1,iridescenceIOR:1.35,iridescenceThicknessRange:[120,480],side:$i}),s={uHoloIntensity:{value:1},uHoloScale:{value:110},uBandFreq:{value:3},uRadialFreq:{value:1.6},uSaturation:{value:.8},uHueShift:{value:0},uSparkle:{value:.6},uSpecTint:{value:.85},uSurfaceMap:{value:r},uSurfaceOpacity:{value:1},uCavityAmount:{value:0},uCornerRound:{value:0},uClothSize:{value:new qt(3,3)}};return i.alphaToCoverage=!0,i.onBeforeCompile=l=>{Object.assign(l.uniforms,s),l.vertexShader=`varying vec2 vHoloUv;
attribute float aCavity;
varying float vCavity;
`+l.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
	vHoloUv = uv;
	vCavity = aCavity;`),l.fragmentShader=`
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
      `+l.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
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
        }`)},{material:i,uniforms:s}}const Wr=2048;class lA{canvas;texture;decals=[];clothImage=null;selected=null;ctx;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=Wr,this.canvas.height=Wr,this.ctx=this.canvas.getContext("2d"),this.texture=new vl(this.canvas),this.texture.colorSpace=Zn,this.redraw()}setAspect(t){const i=t>=1?Wr:Math.round(Wr*t),s=t>=1?Math.round(Wr/t):Wr;return this.canvas.width===i&&this.canvas.height===s?(this.redraw(),!1):(this.canvas.width=i,this.canvas.height=s,this.texture.dispose(),this.texture=new vl(this.canvas),this.texture.colorSpace=Zn,this.redraw(),!0)}addDecal(t){const i={img:t,u:.5,v:.5,scale:.35,rotation:0};return this.decals.push(i),this.selected=i,this.redraw(),i}setClothImage(t){this.clothImage=t,this.redraw()}clear(){this.decals=[],this.clothImage=null,this.selected=null,this.redraw()}hitTest(t,i){const s=this.canvas.width,l=this.canvas.height,c=t*s,f=(1-i)*l;for(let d=this.decals.length-1;d>=0;d--){const m=this.decals[d],{w:p,h:_}=this.decalPixelSize(m),v=m.u*s,g=(1-m.v)*l,S=-m.rotation*Math.PI/180,T=c-v,w=f-g,M=T*Math.cos(S)-w*Math.sin(S),y=T*Math.sin(S)+w*Math.cos(S);if(Math.abs(M)<=p/2&&Math.abs(y)<=_/2)return m}return null}decalPixelSize(t){const i=this.canvas.width,s=t.img.naturalWidth||t.img.width||300,l=t.img.naturalHeight||t.img.height||300,c=t.scale*i,f=c*l/s;return{w:c,h:f}}redraw(){const{ctx:t,canvas:i}=this;t.clearRect(0,0,i.width,i.height),this.clothImage&&t.drawImage(this.clothImage,0,0,i.width,i.height);for(const s of this.decals){const{w:l,h:c}=this.decalPixelSize(s);t.save(),t.translate(s.u*i.width,(1-s.v)*i.height),t.rotate(s.rotation*Math.PI/180),t.drawImage(s.img,-l/2,-c/2,l,c),t.restore()}this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}const X1=`
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
`,cA=`
  
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
`,uA=`
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
`,W1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;function Y1(){return{tDepth:{value:null},focus:{value:5.2},focalDepth:{value:.15},aperture:{value:.4},maxblur:{value:.04},nearClip:{value:.1},farClip:{value:200}}}class fA extends Qs{sceneRef;cameraRef;depthMaterial;depthRT;blurRT;gatherMat;compositeMat;fsQuad;clearColorTmp=new ae;constructor(t,i){super(),this.sceneRef=t,this.cameraRef=i,this.needsSwap=!0,this.depthMaterial=new xv,this.depthMaterial.depthPacking=xS,this.depthMaterial.blending=Vi,this.depthRT=new Fn(1,1,{minFilter:Tn,magFilter:Tn}),this.blurRT=new Fn(1,1,{minFilter:Dn,magFilter:Dn,type:Qn}),this.gatherMat=new Un({uniforms:{...Y1(),tColor:{value:null}},vertexShader:W1,fragmentShader:X1+cA}),this.compositeMat=new Un({uniforms:{...Y1(),tSharp:{value:null},tBlur:{value:null}},vertexShader:W1,fragmentShader:X1+uA}),this.fsQuad=new Cu(this.gatherMat)}setBoth(t,i){this.gatherMat.uniforms[t].value=i,this.compositeMat.uniforms[t].value=i}setParams(t,i,s){this.setBoth("aperture",t),this.setBoth("maxblur",i),this.setBoth("focalDepth",s)}setFocus(t){this.setBoth("focus",t)}setSize(t,i){this.depthRT.setSize(t,i),this.blurRT.setSize(Math.max(1,t>>1),Math.max(1,i>>1))}render(t,i,s){this.setBoth("nearClip",this.cameraRef.near),this.setBoth("farClip",this.cameraRef.far),t.getClearColor(this.clearColorTmp);const l=t.getClearAlpha(),c=t.autoClear;t.autoClear=!1,this.sceneRef.overrideMaterial=this.depthMaterial,t.setClearColor(16777215,1),t.setRenderTarget(this.depthRT),t.clear(),t.render(this.sceneRef,this.cameraRef),this.sceneRef.overrideMaterial=null,t.setClearColor(this.clearColorTmp,l),this.gatherMat.uniforms.tColor.value=s.texture,this.gatherMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.gatherMat,t.setRenderTarget(this.blurRT),this.fsQuad.render(t),this.compositeMat.uniforms.tSharp.value=s.texture,this.compositeMat.uniforms.tBlur.value=this.blurRT.texture,this.compositeMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.compositeMat,t.setRenderTarget(this.renderToScreen?null:i),this.fsQuad.render(t),t.autoClear=c}dispose(){this.depthMaterial.dispose(),this.depthRT.dispose(),this.blurRT.dispose(),this.gatherMat.dispose(),this.compositeMat.dispose(),this.fsQuad.dispose()}}const hA={AgX:$r,ACES:Mu,Neutral:bu},ru=5.4,dA=72,q1=new ae(16777215),pA={uniforms:{tDiffuse:{value:null},uAmount:{value:.08},uTime:{value:0}},vertexShader:`
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
  `};class mA{constructor(t){this.host=t;const i=t.clientWidth||window.innerWidth,s=t.clientHeight||window.innerHeight;this.renderer=new CT({antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(i,s),this.renderer.toneMapping=$r,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement),this.scene=new fv,this.scene.background=this.background,this.camera=new vi(38,i/s,.1,200),this.camera.position.set(...m0.camera);const l=new h0(this.renderer),c=l.fromScene(new kT,.04).texture;this.scene.environment=c,l.dispose();const f=new hd(8377599,1.1);f.position.set(-4,2.5,-3);const d=new hd(16751317,.9);d.position.set(4.5,-1.5,-2.5);const m=new hd(16777215,.7);m.position.set(1.5,3,4),this.scene.add(f,d,m),this.surface=new lA;const p=oA(this.surface.texture);this.holoMaterial=p.material,this.holoUniforms=p.uniforms;const _=this.renderer.capabilities.getMaxAnisotropy();this.holoMaterial.roughnessMap&&(this.holoMaterial.roughnessMap.anisotropy=_),this.surface.texture.anisotropy=_,this.clothMesh=new yn(void 0,this.holoMaterial),this.clothMesh.frustumCulled=!1,this.clothMesh.visible=!1,this.buildCloth(1),this.scene.add(this.clothMesh);const v=this.renderer.domElement;v.addEventListener("pointerdown",this.onPointerDown),v.addEventListener("pointermove",this.onPointerMove),v.addEventListener("pointerup",this.onPointerUp),v.addEventListener("pointercancel",this.onPointerUp),v.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onWindowBlur),this.controls=new DT(this.camera,v),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=1.6,this.controls.maxDistance=30,this.controls.target.set(...m0.target),this.controls.update();const g=new Fn(i,s,{samples:8,type:Qn});this.composer=new ZT(this.renderer,g),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer.addPass(new KT(this.scene,this.camera)),this.dofPass=new fA(this.scene,this.camera),this.dofPass.enabled=!1,this.composer.addPass(this.dofPass),this.bloomPass=new io(new qt(i,s),.18,.85,1),this.composer.addPass(this.bloomPass),this.composer.addPass(new JT),this.grainPass=new Lv(pA),this.composer.addPass(this.grainPass),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(t),this.renderer.setAnimationLoop(this.tick)}host;renderer;scene;camera;controls;composer;bloomPass;dofPass;grainPass;cavityAttr;sim;clothMesh;clothGeometry;holoUniforms;holoMaterial;surface;bumpSource=null;thumbCache=new WeakMap;perfProfile="High";clothSegments=dA;currentPR=Math.min(window.devicePixelRatio,2);background=new ae("#0b0c12");clock=new UM;elapsed=0;raycaster=new DM;pointerNdc=new qt;dragPlane=new Da;grabbing=!1;grabPointerId=null;draggingDecal=!1;decalGrabOffset={u:0,v:0};pickingFocus=!1;focusVertex=null;pickReleaseId=null;spaceHeld=!1;focusTmp=new j;editMode=!1;prevUseImage=!1;hoverCursor="default";resizeObserver;params=null;disposed=!1;onDecalSelect=null;onImagesChanged=null;clothAspect=1;buildCloth(t){this.clothAspect=t;const i=t>=1?ru:ru*t,s=t>=1?ru/t:ru,l=this.clothSegments,c=t>=1?l:Math.max(10,Math.round(l*t)),f=t>=1?Math.max(10,Math.round(l/t)):l;this.sim=new eA(i,s,c,f);const d=new Sl(i,s,c,f),m=new yi(this.sim.positions,3);m.setUsage(H_),d.setAttribute("position",m),this.cavityAttr=new yi(new Float32Array(this.sim.count),1),this.cavityAttr.setUsage(H_),d.setAttribute("aCavity",this.cavityAttr),d.computeVertexNormals();const p=this.clothMesh.geometry;this.clothMesh.geometry=d,this.clothGeometry=d,p&&p.dispose(),this.holoUniforms.uClothSize.value.set(i,s),this.focusVertex=null,this.cancelInteraction()}cancelInteraction(){this.grabPointerId!==null&&this.renderer.domElement.hasPointerCapture(this.grabPointerId)&&this.renderer.domElement.releasePointerCapture(this.grabPointerId),this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls&&(this.controls.enabled=!0)}applyParams(t){this.params=t,t.performance!==this.perfProfile&&this.applyPerfProfile(t.performance);const i=this.holoMaterial;i.color.set(t.material.baseColor),i.roughness=t.material.roughness,i.metalness=t.material.metalness,i.clearcoat=t.material.clearcoat,i.clearcoatRoughness=t.material.coatRoughness,i.sheen=t.material.sheen,i.sheenColor.set(t.material.baseColor).lerp(q1,.5),i.iridescence=0,i.normalScale.set(t.material.bump,t.material.bump),i.normalMap&&i.normalMap.repeat.set(t.material.bumpTiling,t.material.bumpTiling),this.scene.environmentIntensity=t.render.environment;const s=this.holoUniforms;s.uHoloIntensity.value=0,s.uSparkle.value=0,s.uSpecTint.value=0,s.uSaturation.value=0;const l=t.images??{opacity:1,cornerRadius:0,edit:!1,useImage:!1,scale:0,rotation:0};s.uSurfaceOpacity.value=l.opacity,s.uCornerRound.value=l.cornerRadius,this.background.set(t.render.background),this.renderer.toneMappingExposure=t.render.exposure;const c=hA[t.render.toneMapping]??$r;this.renderer.toneMapping!==c&&(this.renderer.toneMapping=c),this.bloomPass.strength=t.render.bloom,this.bloomPass.threshold=t.render.bloomThreshold,this.grainPass.uniforms.uAmount.value=t.render.noise,s.uCavityAmount.value=t.render.occlusion?t.render.occlusionStrength:0,this.dofPass.enabled=t.render.dof,this.dofPass.setParams(t.render.dofAperture*.01,t.render.dofBlur,t.render.dofRange*.5),this.editMode=l.edit,this.controls.enableZoom=!this.editMode,this.prevUseImage&&!l.useImage&&this.surface.clothImage&&this.removeClothImage(),this.prevUseImage=l.useImage;const f=this.surface.selected;f&&(f.scale!==l.scale||f.rotation!==l.rotation)&&(f.scale=l.scale,f.rotation=l.rotation,this.surface.redraw())}applyFabric(t){const i=this.holoMaterial.normalMap,s=aA(t);if(s.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.params){const l=this.params.material.bumpTiling;s.repeat.set(l,l)}this.holoMaterial.normalMap=s,this.holoMaterial.needsUpdate=!0,i&&i.dispose()}resetCloth(){this.sim.reset(),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals()}setColor(t){this.holoMaterial.color.set(t),this.holoMaterial.sheenColor.set(t).lerp(q1,.5)}patternTex=null;setPattern(t){this.patternTex&&this.patternTex!==t&&this.patternTex.dispose(),this.patternTex=t,t?(t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=t,this.holoUniforms.uSurfaceOpacity.value=1):this.holoUniforms.uSurfaceMap.value=this.surface.texture}setSlideOffset(t){this.clothMesh.position.x=t}getSlideOffset(){return this.clothMesh.position.x}poke(){this.sim.poke(1)}addDecal(t){const i=this.surface.addDecal(t);this.onDecalSelect?.(i.scale,i.rotation),this.onImagesChanged?.()}setClothImage(t){const i=t.naturalWidth||t.width||1,s=t.naturalHeight||t.height||1,l=Math.min(3,Math.max(1/3,i/s));this.surface.setClothImage(t),this.surface.setAspect(l)&&this.rebindSurfaceTexture(),this.buildCloth(l),this.onImagesChanged?.()}clearImages(){this.surface.clear(),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}removeClothImage(){this.surface.setClothImage(null),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}get hasClothImage(){return this.surface.clothImage!==null}reveal(){this.clothMesh.visible=!0}thumbnailOf(t){let i=this.thumbCache.get(t);if(i)return i;const s=t.naturalWidth||t.width||1,l=t.naturalHeight||t.height||1,c=96/Math.max(s,l),f=document.createElement("canvas");return f.width=Math.max(1,Math.round(s*c)),f.height=Math.max(1,Math.round(l*c)),f.getContext("2d").drawImage(t,0,0,f.width,f.height),i=f.toDataURL("image/png"),this.thumbCache.set(t,i),i}getClothThumbnail(){return this.surface.clothImage?this.thumbnailOf(this.surface.clothImage):null}getDecalThumbnails(){return this.surface.decals.map(t=>this.thumbnailOf(t.img))}removeDecal(t){const i=this.surface.decals[t];i&&(this.surface.decals.splice(t,1),this.surface.selected===i&&(this.surface.selected=null),this.surface.redraw(),this.onImagesChanged?.())}snapshotImages(){return{clothImage:this.surface.clothImage,decals:this.surface.decals.map(t=>({...t}))}}restoreImages(t){this.surface.clothImage=t.clothImage,this.surface.decals=t.decals.map(s=>({...s})),this.surface.selected=null;let i=1;if(t.clothImage){const s=t.clothImage.naturalWidth||t.clothImage.width||1,l=t.clothImage.naturalHeight||t.clothImage.height||1;i=Math.min(3,Math.max(1/3,s/l))}this.surface.setAspect(i)&&this.rebindSurfaceTexture(),i!==this.clothAspect&&this.buildCloth(i),this.onImagesChanged?.()}applyPerfProfile(t){this.perfProfile=t;const i=window.devicePixelRatio;this.currentPR=t==="Low"?1:t==="Medium"?Math.min(i,1.5):Math.min(i,2);const s=t==="Low"?0:t==="Medium"?4:8,l=t==="Low"?36:t==="Medium"?52:72,c=this.host.clientWidth||window.innerWidth,f=this.host.clientHeight||window.innerHeight;this.renderer.setPixelRatio(this.currentPR),this.renderer.setSize(c,f),this.composer.setPixelRatio(this.currentPR),this.composer.renderTarget1.samples=s,this.composer.renderTarget2.samples=s,this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer.setSize(c,f),l!==this.clothSegments&&(this.clothSegments=l,this.buildCloth(this.clothAspect))}setBumpMap(t){const i=this.holoMaterial.normalMap;let s=null;if(t){s=sA(t),s.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const l=this.params?.material.bumpTiling??3;s.repeat.set(l,l)}this.bumpSource=t,this.holoMaterial.normalMap=s,!!i!=!!s&&(this.holoMaterial.needsUpdate=!0),i&&i.dispose(),this.onImagesChanged?.()}get hasBumpMap(){return this.bumpSource!==null}getBumpThumbnail(){return this.bumpSource?this.thumbnailOf(this.bumpSource):null}rebindSurfaceTexture(){this.surface.texture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=this.surface.texture}exportPNG(t=!1){const i=this.host.clientWidth||window.innerWidth,s=this.host.clientHeight||window.innerHeight,l=this.currentPR,c=Math.min(4,Math.max(2,3200/Math.max(i,s)));t&&(this.scene.background=null,this.renderer.setClearColor(0,0)),this.renderer.setPixelRatio(c),this.composer.setPixelRatio(c),this.renderer.setSize(i,s),this.composer.setSize(i,s),this.composer.render();const f=this.renderer.domElement.toDataURL("image/png");t&&(this.scene.background=this.background,this.renderer.setClearColor(0,1)),this.renderer.setPixelRatio(l),this.composer.setPixelRatio(l),this.renderer.setSize(i,s),this.composer.setSize(i,s);const d=document.createElement("a");d.href=f;const m=t?"holocloth-nobg":"holocloth";d.download=`${m}-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,d.click()}updatePointer(t){const i=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.set((t.clientX-i.left)/i.width*2-1,-((t.clientY-i.top)/i.height)*2+1)}raycastCloth(){this.raycaster.setFromCamera(this.pointerNdc,this.camera),this.clothGeometry.computeBoundingSphere();const t=this.raycaster.intersectObject(this.clothMesh,!1);return t.length>0?t[0]:null}startPickFocus(){this.pickingFocus=!0,this.renderer.domElement.style.cursor="crosshair"}clearPickFocus(){this.focusVertex=null}onKeyDown=t=>{if(t.code!=="Space"||t.repeat)return;const i=t.target;i&&(i.tagName==="INPUT"||i.tagName==="TEXTAREA"||i.isContentEditable)||(t.preventDefault(),this.spaceHeld=!0,this.controls.mouseButtons.LEFT=Ua.PAN,!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&(this.renderer.domElement.style.cursor="grab"))};onKeyUp=t=>{t.code==="Space"&&(this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Ua.ROTATE)};onWindowBlur=()=>{this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Ua.ROTATE};onPointerDown=t=>{if(t.button!==0||this.grabbing||this.draggingDecal)return;if(this.updatePointer(t),this.pickingFocus){this.pickingFocus=!1,this.renderer.domElement.style.cursor="default";const c=this.raycastCloth();if(c){const f=this.sim.positions;let d=0,m=1/0;for(let p=0;p<this.sim.count;p++){const _=f[p*3]-c.point.x,v=f[p*3+1]-c.point.y,g=f[p*3+2]-c.point.z,S=_*_+v*v+g*g;S<m&&(m=S,d=p)}this.focusVertex=d}this.pickReleaseId=t.pointerId,this.controls.enabled=!1;return}if(this.spaceHeld)return;const i=this.raycastCloth();if(!i)return;if(this.editMode){if(!i.uv)return;const c=this.surface.hitTest(i.uv.x,i.uv.y);if(!c)return;this.surface.selected=c,this.draggingDecal=!0,this.decalGrabOffset.u=c.u-i.uv.x,this.decalGrabOffset.v=c.v-i.uv.y,this.grabPointerId=t.pointerId,this.controls.enabled=!1,this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="move",this.onDecalSelect?.(c.scale,c.rotation);return}const s=this.params?.physics.grabRadius??.45;if(!this.sim.startGrab(i.point,s))return;this.grabbing=!0,this.grabPointerId=t.pointerId,this.controls.enabled=!1;const l=new j;this.camera.getWorldDirection(l),this.dragPlane.setFromNormalAndCoplanarPoint(l,i.point),this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="grabbing"};onPointerMove=t=>{if((this.grabbing||this.draggingDecal)&&t.pointerId!==this.grabPointerId)return;if(this.updatePointer(t),this.draggingDecal){const l=this.raycastCloth(),c=this.surface.selected;l?.uv&&c&&(c.u=l.uv.x+this.decalGrabOffset.u,c.v=l.uv.y+this.decalGrabOffset.v,this.surface.redraw());return}if(!this.grabbing)return;this.raycaster.setFromCamera(this.pointerNdc,this.camera);const s=new j;this.raycaster.ray.intersectPlane(this.dragPlane,s)&&this.sim.moveGrab(s)};onPointerUp=t=>{if(t.pointerId===this.pickReleaseId){this.pickReleaseId=null,this.controls.enabled=!0;return}!(this.grabbing||this.draggingDecal)||t.pointerId!==this.grabPointerId||(this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls.enabled=!0,this.renderer.domElement.hasPointerCapture(t.pointerId)&&this.renderer.domElement.releasePointerCapture(t.pointerId),this.renderer.domElement.style.cursor=this.hoverCursor)};onWheel=t=>{if(!this.editMode)return;const i=this.surface.selected;i&&(t.preventDefault(),t.stopImmediatePropagation(),i.scale=lv.clamp(i.scale*Math.exp(-t.deltaY*.0012),.02,2.5),this.surface.redraw(),this.onDecalSelect?.(i.scale,i.rotation))};onResize(){const t=this.host.clientWidth||window.innerWidth,i=this.host.clientHeight||window.innerHeight;t===0||i===0||(this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i),this.composer.setSize(t,i))}tick=()=>{if(this.disposed)return;const t=this.clock.getDelta();if(this.elapsed+=t,this.grainPass.uniforms.uTime.value=this.elapsed%61.7,this.params&&(this.sim.step(t,this.params.physics),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals()),this.params?.render.occlusion&&(this.sim.computeCavity(this.clothGeometry.attributes.normal.array,this.cavityAttr.array),this.cavityAttr.needsUpdate=!0),this.params?.render.dof){let i;if(this.focusVertex!==null&&this.focusVertex<this.sim.count){const s=this.sim.positions,l=this.focusVertex*3;this.focusTmp.set(s[l],s[l+1],s[l+2]),i=this.camera.position.distanceTo(this.focusTmp)}else i=this.camera.position.distanceTo(this.controls.target);this.dofPass.setFocus(i)}if(!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&!this.spaceHeld&&this.perfProfile!=="Low"){const i=this.raycastCloth();let s="default";i&&(s=this.editMode?i.uv&&this.surface.hitTest(i.uv.x,i.uv.y)?"move":"default":"grab"),s!==this.hoverCursor&&(this.hoverCursor=s,this.renderer.domElement.style.cursor=s)}this.controls.update(),this.composer.render()};dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.controls.dispose(),this.dofPass.dispose(),this.composer.dispose(),this.clothGeometry.dispose(),this.holoMaterial.dispose(),this.surface.dispose(),this.scene.traverse(i=>{const s=i;s.geometry&&s.geometry!==this.clothGeometry&&s.geometry.dispose()}),this.renderer.dispose(),t.remove()}}const Jr=["Nulu","Luon","Luxtreme","Everlux","Warpstreme"],Di={Nulu:{label:"Nulu",blurb:"Buttery-soft, lightweight knit. Matte, next-to-nothing drape.",material:{finish:"Matte",baseColor:"#c9c4bf",roughness:.88,metalness:0,clearcoat:0,coatRoughness:.9,sheen:.28,bump:.6,bumpTiling:6},physics:{viscosity:.5,stiffness:.45,iterations:12,smoothing:.12,grabRadius:.3},weave:{type:"knit",threads:96,strength:1,seed:11}},Luon:{label:"Luon",blurb:"The original: cottony-soft, structured, medium-weight knit.",material:{finish:"Matte",baseColor:"#2c313a",roughness:.76,metalness:0,clearcoat:.05,coatRoughness:.75,sheen:.2,bump:.95,bumpTiling:5},physics:{viscosity:.42,stiffness:.7,iterations:12,smoothing:.07,grabRadius:.27},weave:{type:"knit",threads:72,strength:1.35,seed:22}},Luxtreme:{label:"Luxtreme",blurb:"Slick, cool-to-touch performance knit. Satin sheen, lively.",material:{finish:"Matte",baseColor:"#33435f",roughness:.58,metalness:0,clearcoat:.03,coatRoughness:.6,sheen:.38,bump:.3,bumpTiling:8},physics:{viscosity:.24,stiffness:.82,iterations:13,smoothing:.03,grabRadius:.27},weave:{type:"knit",threads:120,strength:.7,seed:33}},Everlux:{label:"Everlux",blurb:"Thicker double-knit. Springy shape retention, textured hand.",material:{finish:"Matte",baseColor:"#454851",roughness:.6,metalness:0,clearcoat:.1,coatRoughness:.6,sheen:.32,bump:1.15,bumpTiling:4},physics:{viscosity:.34,stiffness:.9,iterations:14,smoothing:.09,grabRadius:.27},weave:{type:"knit",threads:56,strength:1.6,seed:44}},Warpstreme:{label:"Warpstreme",blurb:"Finely woven, structured & wrinkle-resistant. Holds its shape.",material:{finish:"Matte",baseColor:"#21252c",roughness:.72,metalness:0,clearcoat:0,coatRoughness:.6,sheen:.2,bump:.5,bumpTiling:7},physics:{viscosity:.3,stiffness:1,iterations:14,smoothing:.15,grabRadius:.26},weave:{type:"woven",threads:110,strength:.9,seed:55}}},Z1="Nulu";function Ov(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function K1(r,t){const i=r.replace("#",""),s=parseInt(i.slice(0,2),16),l=parseInt(i.slice(2,4),16),c=parseInt(i.slice(4,6),16);return`rgba(${s},${l},${c},${t})`}function gA(r){const t=new vl(r);return t.colorSpace=Zn,t.wrapS=t.wrapT=ea,t.needsUpdate=!0,t}function Q1(r,t,i,s,l){r.fillStyle=i,r.fillRect(0,0,t,t);const c=Ov(l);r.filter=`blur(${Math.round(t*.05)}px)`;const f=16;for(let d=0;d<f;d++){const m=s[Math.floor(c()*s.length)],p=c()*t,_=c()*t,v=t*(.22+c()*.32),g=r.createRadialGradient(p,_,0,p,_,v);g.addColorStop(0,K1(m,.7)),g.addColorStop(1,K1(m,0)),r.fillStyle=g,r.beginPath(),r.arc(p,_,v,0,Math.PI*2),r.fill()}r.filter="none"}function _A(r,t=1024){if(r==="none")return null;const i=document.createElement("canvas");i.width=i.height=t;const s=i.getContext("2d");if(s.clearRect(0,0,t,t),r==="aura"&&Q1(s,t,"#eceef0",["#f3c6d6","#c3e6d4","#d2ccef","#f5dcc4","#cfe1ee","#f0cfe0"],5),r==="auraBold"&&Q1(s,t,"#3a2440",["#d81f6a","#ec5a86","#e2542f","#7a3fa6","#2f8f7f","#c0246a"],9),r==="dot"){const c=t/13,f=Ov(3);s.fillStyle="rgba(255,255,255,0.9)";for(let d=-1;d<14;d++)for(let m=-1;m<14;m++){const p=d%2===0?0:c/2,_=m*c+c/2+p+(f()-.5)*c*.3,v=d*c+c/2+(f()-.5)*c*.3,g=c*(.15+f()*.06);s.beginPath();const S=9;for(let T=0;T<=S;T++){const w=T/S*Math.PI*2,M=g*(.82+f()*.36),y=_+Math.cos(w)*M,F=v+Math.sin(w)*M;T===0?s.moveTo(y,F):s.lineTo(y,F)}s.closePath(),s.fill()}}if(r==="check"){const l=t/6,c=f=>{for(let d=0;d<6;d++){const m=d*l;s.fillStyle="rgba(0,0,0,0.16)",f?s.fillRect(0,m,t,l*.5):s.fillRect(m,0,l*.5,t),s.fillStyle="rgba(0,0,0,0.30)",f?s.fillRect(0,m+l*.5,t,l*.06):s.fillRect(m+l*.5,0,l*.06,t)}};c(!1),c(!0)}return gA(i)}const Sd=["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it coats the fibers and kills sweat-wicking.","Hang or lay flat to dry; avoid the dryer to protect the stretch.","Keep away from Velcro, zippers and denim to avoid snags and pilling."],Ys={Nulu:{meaning:'"Naked" lu — the softest, lightest fabric lululemon makes. The "nu" is for nude / next-to-nothing.',feel:"Buttery-soft and weightless with a matte finish and gentle four-way stretch. No compression — it feels like a second skin.",bestFor:["Yoga","Pilates","Barre","Stretching","Lounging","Travel & errands"],notFor:"High-sweat or high-impact workouts — it offers no compression and can pill under friction.",care:["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it clogs the fibers.","Hang or lay flat to dry; never tumble dry.","Prone to pilling — keep away from Velcro, zippers and denim."],products:[{name:'Align High-Rise Pant 25"',price:"$98",url:"https://shop.lululemon.com/c/women-align-leggings/n1esuuzudsq"},{name:"Align Tank Top",price:"$68",url:"https://shop.lululemon.com/c/women-align-clothes/n14uwkzesuu"},{name:"Groove Nulu Flared Pant",price:"$128",url:"https://shop.lululemon.com/c/women-align-pants/n1esuuzqd1q"}],affinity:{activity:{yoga:3,run:-2,studio:0,everyday:1},sweat:{low:3,med:0,high:-2},feel:{soft:3,smooth:0,structured:-1,cushioned:0},care:{easy:-1,ok:2}}},Luon:{meaning:'The original lululemon fabric — the knit that launched the brand. Simply "lu" + "on".',feel:"Cottony-soft but more structured than Nulu: medium-weight, lightly holding, with a matte look.",bestFor:["Yoga","Barre","Dance","Low–medium impact","Layering","Casual"],notFor:"Running or spin — the cottony knit can pill under repeated friction.",care:Sd,products:[{name:"Wunder Under Luon High-Rise Tight",price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:"Classic Luon layering tops",price:"from $68",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:2,run:-1,studio:1,everyday:1},sweat:{low:2,med:1,high:-1},feel:{soft:2,smooth:0,structured:0,cushioned:1},care:{easy:0,ok:1}}},Luxtreme:{meaning:`"Luxe" + "extreme" — lululemon's first performance fabric, built for runners back in 2008.`,feel:"Slick and cool-to-touch, compressive and supportive with a subtle sheen. Sweat-wicking and quick-drying.",bestFor:["Running","HIIT","Cycling / spin","High-impact training"],notFor:"Gentle lounging if you dislike compression — it's a firmer, hold-you-in feel.",care:Sd,products:[{name:'Wunder Under Full-On Luxtreme Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:'Wunder Under Luxtreme Tight 28"',price:"$98",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:-1,run:3,studio:2,everyday:0},sweat:{low:-1,med:1,high:3},feel:{soft:0,smooth:3,structured:1,cushioned:0},care:{easy:1,ok:0}}},Everlux:{meaning:'"Ever" (endure) + "lux" — a 2017 studio fabric made for sweaty, mid-to-high-intensity workouts.',feel:"Fast-drying and cool against the skin, with a cushioned double-knit body and springy shape retention.",bestFor:["Studio & HIIT","Spin","Cardio classes","Hot workouts","Strength training"],notFor:"Nothing much — it's the most versatile; just heavier than Nulu for pure lounging.",care:Sd,products:[{name:'Wunder Train High-Rise Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:'Wunder Train Tight with Pockets 28"',price:"$128",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:"Wunder Train No Line High-Rise Tight",price:"$108",url:"https://shop.lululemon.com/c/women-everlux-leggings/n1n918zudsq"}],affinity:{activity:{yoga:0,run:2,studio:3,everyday:1},sweat:{low:0,med:3,high:2},feel:{soft:0,smooth:1,structured:0,cushioned:3},care:{easy:2,ok:0}}},Warpstreme:{meaning:'A finely warp-woven fabric (woven, not knit) — "warp" weaving + "streme" for stream / extreme.',feel:"Smooth, structured and wrinkle-resistant with a cool hand. Holds its shape from morning to night.",bestFor:["Travel","Commute","Work / office","Everyday","Versatile wear"],notFor:"Sweaty high-intensity training — it's built for structure and polish, not compression.",care:["Machine wash cold with like colors.","Skip fabric softener.","Hang dry — avoid high heat.","Wrinkle-resistant, so it bounces back without ironing."],products:[{name:"ABC Classic-Fit 5 Pocket Pant",price:"$138",url:"https://shop.lululemon.com/c/men-warpstreme-pants/n13u4nzu9dn"},{name:"ABC Trouser (formerly Commission)",price:"$138",url:"https://shop.lululemon.com/c/men-abc-trousers/n146jrzsddx"},{name:"ABC Jogger",price:"$128",url:"https://shop.lululemon.com/c/men-abc-pants/n1sddxzu9dn"}],affinity:{activity:{yoga:0,run:-1,studio:0,everyday:3},sweat:{low:2,med:1,high:-2},feel:{soft:0,smooth:1,structured:3,cushioned:0},care:{easy:3,ok:0}}}};function vA(r,t){return t.map(i=>{const s=Ys[i].affinity;let l=0;return r.activity&&(l+=s.activity[r.activity]),r.sweat&&(l+=s.sweat[r.sweat]),r.feel&&(l+=s.feel[r.feel]),r.care&&(l+=s.care[r.care]),{name:i,score:l}}).sort((i,s)=>s.score-i.score)}const g0={step:"activity",answers:{},fabric:null,colorHex:null,colorName:null},wu=[{name:"Black",hex:"#1a1a1a"},{name:"True Navy",hex:"#26324a"},{name:"Heathered Grey",hex:"#9a9793"},{name:"Dark Olive",hex:"#3f4531"},{name:"Red Merlot",hex:"#7d1f2b"},{name:"Pink Mist",hex:"#e3b0bf"},{name:"Blue Nile",hex:"#3b5d7a"},{name:"White Opal",hex:"#e8e5df"}],qe=r=>r[Math.floor(Math.random()*r.length)],qn={activity:[{label:"Yoga & stretching",value:"yoga"},{label:"Running & cardio",value:"running"},{label:"Studio & HIIT",value:"studio"},{label:"Everyday & travel",value:"everyday"}],sweat:[{label:"Barely",value:"barely"},{label:"A moderate amount",value:"moderate"},{label:"A lot",value:"a lot"}],feel:[{label:"Softest & barely-there",value:"soft"},{label:"Smooth & supportive",value:"smooth"},{label:"Cushioned",value:"cushioned"},{label:"Structured",value:"structured"}],care:[{label:"Low-maintenance",value:"low maintenance"},{label:"Happy to hand-wash",value:"hand wash"}],print:[{label:"Aura",value:"aura"},{label:"Aura Bold",value:"aura bold"},{label:"Painted dot",value:"dot"},{label:"Tonal check",value:"check"},{label:"Keep it solid",value:"solid"}],open:[{label:"Care tips",value:"care tips"},{label:"Compare fabrics",value:"compare"},{label:"Start over",value:"start over"}]},_0=()=>[...wu.map(r=>({label:r.name,value:r.name})),{label:"Surprise me",value:"surprise me"}],We=(r,t)=>t.some(i=>r.includes(i));function xA(r){return r.includes("nulu")||r.includes("align")?"Nulu":r.includes("luon")?"Luon":r.includes("luxtreme")?"Luxtreme":r.includes("everlux")||r.includes("wunder train")?"Everlux":r.includes("warpstreme")||r.includes("abc")?"Warpstreme":null}function yA(r){return We(r,["yoga","stretch","flow","pilates","barre","lounge","relax"])?"yoga":We(r,["run","jog","sprint","cardio"])?"run":We(r,["studio","hiit","train","gym","spin","cycle","cycling","strength","lift","class","workout","hot"])?"studio":We(r,["everyday","travel","work","office","commute","casual","errand","walk","daily"])?"everyday":null}function SA(r){return We(r,["barely","not much","don't sweat","dry","a little","light sweat","low"])?"low":We(r,["moderate","some","medium","average","a bit"])?"med":We(r,["a lot","lots","very","heavy","sweaty","drench","soak","buckets","tons"])?"high":null}function MA(r){return We(r,["soft","buttery","barely","naked","light","gentle","second skin"])?"soft":We(r,["smooth","slick","sleek","silky","compress","support","tight","hold","sculpt"])?"smooth":We(r,["cushion","thick","substantial","plush","cozy","warm","sturdy"])?"cushioned":We(r,["structured","crisp","polished","put together","stiff","woven","shape"])?"structured":null}function J1(r){return We(r,["low maintenance","low-maintenance","easy","durable","wrinkle","no fuss","toss","lazy","whatever"])?"easy":We(r,["hand wash","hand-wash","delicate","hang","baby","careful","gentle","don't mind"])?"ok":null}function bA(r){const t=[[["black","noir"],"Black"],[["navy","dark blue"],"True Navy"],[["grey","gray","heather"],"Heathered Grey"],[["olive","green","army","khaki"],"Dark Olive"],[["red","merlot","wine","maroon","burgundy","berry"],"Red Merlot"],[["pink","rose","blush","mauve"],"Pink Mist"],[["blue","nile","cobalt","teal"],"Blue Nile"],[["white","cream","opal","ivory","light"],"White Opal"]];for(const[i,s]of t)if(We(r,i))return wu.find(l=>l.name===s);return null}function EA(r){return We(r,["aura bold","bold","vibrant","swirl","multicolor","colorful","bright"])?"auraBold":We(r,["aura","gradient","pastel","wash","tie dye","tie-dye","ombre"])?"aura":We(r,["dot","polka","spot"])?"dot":We(r,["check","plaid","windowpane","tartan","grid"])?"check":We(r,["solid","plain","no print","none","clean"])?"none":null}function TA(r){const t=Ys[r];return[{text:`${qe([`Based on that, I'd put you in ${r}.`,`Here's your match: ${r}.`,`${r} is the one for you.`])} ${t.meaning}`},{text:`${t.feel} It's great for ${t.bestFor.slice(0,3).join(", ").toLowerCase()} — and I've loaded it onto the fabric so you can drag it around and feel how it moves.`},{text:qe(["Now the fun part — what color are you drawn to?","Let's dress it. Which color speaks to you?","Pick a color and I'll dye it live:"]),swatch:Di[r].material.baseColor,chips:_0()}]}function j1(r,t){const s=Ys[r].products[0];return[{text:qe([`${t} on ${r} — beautiful choice.`,`Love it. ${t} really suits ${r}.`,`${t} it is.`])},{text:`If you want to take this home, here's the piece I'd start with in ${r}:`,product:s},{text:qe(["Want to try a print on it too, or keep it solid?","Fancy a print — an aura wash, painted dots — or keep it clean?","We can add a print if you like, or leave it solid:"]),chips:[...qn.print]}]}function AA(r){if(!r)return{text:"Tell me which fabric you're curious about and I'll give you its care routine — or let's find your match first."};const t=Ys[r];return{text:`Caring for ${r}: ${t.care.join(" ")}`}}function v0(){return[{text:qe(["Hi — I'm your Fabric Lab guide. lululemon makes a handful of fabrics with very different feels, and I'll help you find yours.","Welcome to the Fabric Lab. I'll help you cut through the names — Nulu, Luon, Luxtreme and friends — and land on the right one for you."])},{text:"First up — what will you mostly be doing in it?",chips:[...qn.activity]}]}function RA(r,t){const i={...r,answers:{...r.answers}},s=t.toLowerCase().trim(),l={ctx:i,reply:[]};if(We(s,["start over","restart","reset","begin again","over again"]))return l.ctx={...g0},l.reply=[{text:qe(["Fresh start — let's do it.","Wiping the slate. Here we go."])},...v0()],l;if(We(s,["help","what can you","how does this","what do you do"]))return l.reply=[{text:"I can find your ideal fabric, explain what each one means, tell you how to care for it, compare them, recolor the fabric in front of you, add prints, and point you to the right product. Just talk to me — or tap a chip.",chips:i.step==="open"?[...qn.open]:void 0}],l;if(We(s,["thank","thanks","ty","appreciate"]))return l.reply=[{text:qe(["Anytime! 💧 stay comfy.","My pleasure — happy moving.","You got it."])}],l;const c=xA(s);if(c&&!J1(s)&&!We(s,["wash","care"])){i.fabric=c,i.step="color",l.selectFabric=c;const m=Ys[c];return l.reply=[{text:`${c} — ${m.meaning}`},{text:`${m.feel} Best for ${m.bestFor.slice(0,3).join(", ").toLowerCase()}. Dragging it now will show you how it drapes.`},{text:"Want to see it in a color?",swatch:Di[c].material.baseColor,chips:_0()}],l}if(We(s,["wash","care","clean","dry","pill","shrink","launder"]))return l.reply=[AA(i.fabric)],i.step==="open"&&l.reply.push({text:"Anything else?",chips:[...qn.open]}),l;if(We(s,["what is","what does","mean","why called","what's"])&&i.fabric)return l.reply=[{text:Ys[i.fabric].meaning}],l;if(We(s,["price","cost","how much","buy","shop","purchase","link","where"]))return i.fabric?l.reply=[{text:`Here's the piece I'd recommend in ${i.fabric}:`,product:Ys[i.fabric].products[0]}]:l.reply=[{text:"Let's find your fabric first, then I'll point you to the exact product. What will you mostly do in it?",chips:[...qn.activity]}],l;if(We(s,["compare","difference","versus"," vs","better"])){const m=Jr[0],p=Jr[2];return l.reply=[{text:`Happy to compare. For example — ${m}: ${Di[m].blurb.toLowerCase()} ${p}: ${Di[p].blurb.toLowerCase()} Ask me about any two by name (e.g. "Nulu vs Luxtreme").`}],l}const f=bA(s);if(f&&(i.step==="color"||i.fabric))return i.colorHex=f.hex,i.colorName=f.name,l.setColor=f.hex,i.step==="color"&&i.fabric?(i.step="print",l.reply=j1(i.fabric,f.name)):l.reply=[{text:qe([`There it is — ${f.name}.`,`${f.name}, nice.`,`Dyed it ${f.name} for you.`])}],l;if((s.includes("surprise")||s.includes("random"))&&i.step==="color"){const m=qe(wu);return i.colorHex=m.hex,i.colorName=m.name,i.step="print",l.setColor=m.hex,l.reply=[{text:`Let's go bold — ${m.name}.`},...j1(i.fabric,m.name).slice(1)],l}const d=EA(s);if(d&&(i.step==="print"||i.step==="open"||i.fabric)){l.setPattern=d;const m=d==="none"?"a clean solid":d==="auraBold"?"the bold aura swirl":d==="aura"?"a soft aura wash":d==="dot"?"hand-painted dots":"a tonal check";return i.step==="print"?(i.step="open",l.reply=[{text:qe([`Done — ${m}. That's a full look: ${i.fabric} in ${i.colorName??"your color"} with ${m}.`,`${m} it is. You've styled a full piece.`])},{text:"Anything else I can help with — care tips, comparing fabrics, or start fresh?",chips:[...qn.open]}]):l.reply=[{text:`Switched to ${m}.`}],l}switch(i.step){case"activity":{const m=yA(s);return m?(i.answers.activity=m,i.step="sweat",l.reply=[{text:CA(m)},{text:"Good to know. And how much do you sweat when you do?",chips:[...qn.sweat]}],l):(l.reply=[ou(),{text:"What will you mostly do in it?",chips:[...qn.activity]}],l)}case"sweat":{const m=SA(s);return m?(i.answers.sweat=m,i.step="feel",l.reply=[{text:wA(m)},{text:"Last couple — what feel do you love against your skin?",chips:[...qn.feel]}],l):(l.reply=[ou(),{text:"Roughly how sweaty do you get?",chips:[...qn.sweat]}],l)}case"feel":{const m=MA(s);return m?(i.answers.feel=m,i.step="care",l.reply=[{text:DA(m)},{text:"And how do you like to care for your gear?",chips:[...qn.care]}],l):(l.reply=[ou(),{text:"What feel are you after?",chips:[...qn.feel]}],l)}case"care":{const m=J1(s);if(!m)return l.reply=[ou(),{text:"Low-maintenance, or happy to baby it a little?",chips:[...qn.care]}],l;i.answers.care=m;const p=vA(i.answers,Jr)[0].name;return i.fabric=p,i.step="color",l.selectFabric=p,l.reply=[{text:UA(m)},...TA(p)],l}case"color":return l.reply=[{text:qe(["I didn't catch a color there — pick one and I'll dye it live:","Tap a color, or name one:"]),chips:_0()}],l;case"print":return l.reply=[{text:"Want a print, or keep it solid?",chips:[...qn.print]}],l;default:return l.reply=[{text:qe(["I can talk care, compare fabrics, recolor this, add a print, or find you a new match — what's on your mind?","Ask me anything — how to wash it, how it compares, or say a fabric or color name."]),chips:[...qn.open]}],l}}function CA(r){return{yoga:qe(["Yoga — so you want stretch and zero distraction.","Lovely. Flow work rewards soft, unrestrictive fabric."]),run:qe(["A runner. You'll want sweat-wicking and lightweight.","Running — breathability and stay-put support matter most here."]),studio:qe(["Studio sweat sessions — versatile and quick-drying is the goal.","HIIT and classes ask a lot of a fabric: grip, wick, recover."]),everyday:qe(["Everyday and travel — comfort that still looks pulled-together.","Life in it all day — so structure and easy care count."])}[r]}function wA(r){return{low:qe(["Barely a bead — that opens up the softer fabrics.","Cool and dry, noted."]),med:qe(["A moderate glow — plenty of options there.","Middle of the road, got it."]),high:qe(["A proper sweat — we'll lean into wicking, quick-dry fabrics.","You run hot — good to know, that rules a few things in."])}[r]}function DA(r){return{soft:qe(["Buttery and barely-there — my favorite kind of comfy.","Second-skin soft, noted."]),smooth:qe(["Smooth and holding — you like that supported feel.","Sleek and compressive, got it."]),cushioned:qe(["Something with body and cushion — cozy and substantial.","A bit more heft, noted."]),structured:qe(["Structured and polished — fabric that holds its shape.","Crisp and put-together, love it."])}[r]}function UA(r){return{easy:qe(["And low-fuss laundry — I'll factor in durability.","Toss-and-go care, understood."]),ok:qe(["Happy to hand-wash — that keeps the delicate ones on the table.","A little TLC is fine, noted."])}[r]}function ou(r){return{text:qe(["I want to get this right — let me put it simply.","Hmm, let me ask that a different way.","No worries — tap one of these and we'll keep moving."])}}const LA={background:"#f5f5f5",exposure:.82,environment:1.05,bloom:0,bloomThreshold:1.4,noise:.04,toneMapping:"Neutral",occlusion:!0,occlusionStrength:1,dof:!1,dofAperture:40,dofBlur:.04,dofRange:.3};function Md(r,t){const i=Di[r];return{performance:"High",physics:{...i.physics},material:{fabric:r,...i.material,baseColor:t??i.material.baseColor},images:{edit:!1,useImage:!1,scale:.35,rotation:0,opacity:1,cornerRadius:0},render:{...LA}}}const $1=8.5,NA=300,PA=r=>r*r*r,OA=r=>1-Math.pow(1-r,3);function IA(){const r=bn.useRef(null),t=bn.useRef(null),[i,s]=bn.useState(Z1),[l,c]=bn.useState(null),[f,d]=bn.useState("none"),[m,p]=bn.useState([]),[_,v]=bn.useState(""),g=bn.useRef({...g0}),S=bn.useRef(0),T=bn.useRef(null);bn.useEffect(()=>{if(!r.current)return;const b=new mA(r.current);return t.current=b,b.onDecalSelect=()=>{},b.onImagesChanged=()=>{},b.setSlideOffset(0),b.applyParams(Md(i)),b.applyFabric(Di[i].weave),b.reveal(),v0().forEach((N,W)=>setTimeout(()=>B({role:"bot",...N}),250*W+300)),()=>{b.dispose(),t.current=null}},[]);const w=bn.useRef(!0),M=bn.useRef(Z1),y=bn.useRef(0),F=bn.useRef(null);bn.useEffect(()=>{const b=t.current;if(!b)return;const N=M.current;if(M.current=i,w.current){w.current=!1,b.setSlideOffset(0),b.applyParams(Md(i)),b.applyFabric(Di[i].weave);return}if(N===i)return;c(null),F.current?.(),F.current=null;const G=Jr.indexOf(i)>Jr.indexOf(N)?-$1:$1,q=-G,ct=(gt,J,I,H)=>{const $=performance.now();let pt=0;const bt=U=>{const Z=Math.min(1,(U-$)/NA),yt=gt+(J-gt)*I(Z);y.current=yt,t.current?.setSlideOffset(yt),Z<1?pt=requestAnimationFrame(bt):H?.()};pt=requestAnimationFrame(bt),F.current=()=>cancelAnimationFrame(pt)};return ct(y.current,G,PA,()=>{b.applyParams(Md(i)),b.applyFabric(Di[i].weave),b.resetCloth(),y.current=q,b.setSlideOffset(q),ct(q,0,OA,()=>{F.current=null})}),()=>{F.current?.()}},[i]),bn.useEffect(()=>{l!=null&&t.current?.setColor(l)},[l]),bn.useEffect(()=>{t.current?.setPattern(_A(f))},[f]),bn.useEffect(()=>{T.current?.scrollTo({top:T.current.scrollHeight,behavior:"smooth"})},[m]);const B=b=>p(N=>[...N,{id:S.current++,...b}]),C=(b,N)=>{const W=b.trim();if(!W)return;B({role:"user",text:N??W});const G=RA(g.current,W);g.current=G.ctx,G.selectFabric&&s(G.selectFabric),Object.prototype.hasOwnProperty.call(G,"setColor")&&c(G.setColor??null),G.setPattern&&d(G.setPattern),G.reply.forEach((q,ct)=>setTimeout(()=>B({role:"bot",...q}),260*ct+220)),v("")},P=()=>{g.current={...g0},p([]),d("none"),v0().forEach((b,N)=>setTimeout(()=>B({role:"bot",...b}),200*N+150))},L=m[m.length-1],O=b=>wu.find(N=>N.name===b)?.hex;return Fe.jsxs(Fe.Fragment,{children:[Fe.jsx("div",{id:"canvas-host",ref:r}),Fe.jsxs("div",{className:"ui",children:[Fe.jsx("div",{className:"topbar",children:Fe.jsxs("div",{className:"brand",children:[Fe.jsx("span",{className:"k",children:"lululemon"}),Fe.jsx("span",{className:"t",children:"Fabric Lab"})]})}),Fe.jsxs("div",{className:"acts",children:[Fe.jsx("button",{title:"Reset the fabric","aria-label":"Reset the fabric",onClick:()=>t.current?.resetCloth(),children:"↺"}),Fe.jsx("button",{title:"Give it a nudge","aria-label":"Give it a nudge",onClick:()=>t.current?.poke(),children:"✦"})]}),Fe.jsxs("div",{className:"convo",children:[Fe.jsx("div",{className:"stream",ref:T,children:m.slice(-6).map(b=>Fe.jsxs("div",{className:"msg "+b.role,children:[Fe.jsx("span",{children:b.text}),b.product&&Fe.jsxs("a",{className:"prodcard",href:b.product.url,target:"_blank",rel:"noreferrer",children:[Fe.jsx("span",{className:"pn",children:b.product.name}),Fe.jsxs("span",{className:"pp",children:[b.product.price," →"]})]})]},b.id))}),L?.chips&&L.role==="bot"&&Fe.jsx("div",{className:"chips",children:L.chips.map(b=>Fe.jsxs("button",{className:"chip2",onClick:()=>C(b.value,b.label),children:[O(b.value)&&Fe.jsx("span",{className:"cdot",style:{background:O(b.value)}}),b.label]},b.value))}),Fe.jsxs("form",{className:"ask",onSubmit:b=>{b.preventDefault(),C(_)},children:[Fe.jsx("input",{value:_,onChange:b=>v(b.target.value),placeholder:"Say anything…","aria-label":"Message the Fabric Lab guide"}),Fe.jsx("button",{className:"askbtn",type:"submit","aria-label":"Send",children:"→"})]}),Fe.jsx("button",{className:"restart",onClick:P,children:"Start over"})]}),Fe.jsx("div",{className:"rail",children:Jr.map(b=>Fe.jsxs("button",{className:b===i?"sel":"",onClick:()=>C(Di[b].label,Di[b].label),children:[Fe.jsx("span",{className:"dot",style:{background:Di[b].material.baseColor}}),Di[b].label]},b))})]})]})}qy.createRoot(document.getElementById("root")).render(Fe.jsx(IA,{}));
