(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Rh={exports:{}},Zo={};var m_;function yS(){if(m_)return Zo;m_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Zo.Fragment=t,Zo.jsx=i,Zo.jsxs=i,Zo}var g_;function bS(){return g_||(g_=1,Rh.exports=yS()),Rh.exports}var te=bS(),Ch={exports:{}},Ko={},wh={exports:{}},Dh={};var __;function ES(){return __||(__=1,(function(r){function t(I,H){var $=I.length;I.push(H);t:for(;0<$;){var mt=$-1>>>1,bt=I[mt];if(0<l(bt,H))I[mt]=H,I[$]=bt,$=mt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],$=I.pop();if($!==H){I[0]=$;t:for(var mt=0,bt=I.length,U=bt>>>1;mt<U;){var Z=2*(mt+1)-1,yt=I[Z],Rt=Z+1,Ot=I[Rt];if(0>l(yt,$))Rt<bt&&0>l(Ot,yt)?(I[mt]=Ot,I[Rt]=$,mt=Rt):(I[mt]=yt,I[Z]=$,mt=Z);else if(Rt<bt&&0>l(Ot,$))I[mt]=Ot,I[Rt]=$,mt=Rt;else break t}}return H}function l(I,H){var $=I.sortIndex-H.sortIndex;return $!==0?$:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],d=[],_=1,x=null,g=3,M=!1,E=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function w(I){for(var H=i(d);H!==null;){if(H.callback===null)s(d);else if(H.startTime<=I)s(d),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(d)}}function P(I){if(C=!1,w(I),!E)if(i(m)!==null)E=!0,L||(L=!0,Q());else{var H=i(d);H!==null&&J(P,H.startTime-I)}}var L=!1,O=-1,T=5,N=-1;function Y(){return y?!0:!(r.unstable_now()-N<T)}function G(){if(y=!1,L){var I=r.unstable_now();N=I;var H=!0;try{t:{E=!1,C&&(C=!1,F(O),O=-1),M=!0;var $=g;try{e:{for(w(I),x=i(m);x!==null&&!(x.expirationTime>I&&Y());){var mt=x.callback;if(typeof mt=="function"){x.callback=null,g=x.priorityLevel;var bt=mt(x.expirationTime<=I);if(I=r.unstable_now(),typeof bt=="function"){x.callback=bt,w(I),H=!0;break e}x===i(m)&&s(m),w(I)}else s(m);x=i(m)}if(x!==null)H=!0;else{var U=i(d);U!==null&&J(P,U.startTime-I),H=!1}}break t}finally{x=null,g=$,M=!1}H=void 0}}finally{H?Q():L=!1}}}var Q;if(typeof B=="function")Q=function(){B(G)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,_t=ht.port2;ht.port1.onmessage=G,Q=function(){_t.postMessage(null)}}else Q=function(){S(G,0)};function J(I,H){O=S(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(I){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var $=g;g=H;try{return I()}finally{g=$}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=g;g=I;try{return H()}finally{g=$}},r.unstable_scheduleCallback=function(I,H,$){var mt=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?mt+$:mt):$=mt,I){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=$+bt,I={id:_++,callback:H,priorityLevel:I,startTime:$,expirationTime:bt,sortIndex:-1},$>mt?(I.sortIndex=$,t(d,I),i(m)===null&&I===i(d)&&(C?(F(O),O=-1):C=!0,J(P,$-mt))):(I.sortIndex=bt,t(m,I),E||M||(E=!0,L||(L=!0,Q()))),I},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(I){var H=g;return function(){var $=g;g=H;try{return I.apply(this,arguments)}finally{g=$}}}})(Dh)),Dh}var v_;function TS(){return v_||(v_=1,wh.exports=ES()),wh.exports}var Uh={exports:{}},re={};var x_;function AS(){if(x_)return re;x_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function S(U,Z,yt){this.props=U,this.context=Z,this.refs=y,this.updater=yt||E}S.prototype.isReactComponent={},S.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=S.prototype;function B(U,Z,yt){this.props=U,this.context=Z,this.refs=y,this.updater=yt||E}var w=B.prototype=new F;w.constructor=B,C(w,S.prototype),w.isPureReactComponent=!0;var P=Array.isArray;function L(){}var O={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(U,Z,yt){var Rt=yt.ref;return{$$typeof:r,type:U,key:Z,ref:Rt!==void 0?Rt:null,props:yt}}function Y(U,Z){return N(U.type,Z,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function Q(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(yt){return Z[yt]})}var ht=/\/+/g;function _t(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?Q(""+U.key):Z.toString(36)}function J(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function I(U,Z,yt,Rt,Ot){var at=typeof U;(at==="undefined"||at==="boolean")&&(U=null);var xt=!1;if(U===null)xt=!0;else switch(at){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(U.$$typeof){case r:case t:xt=!0;break;case _:return xt=U._init,I(xt(U._payload),Z,yt,Rt,Ot)}}if(xt)return Ot=Ot(U),xt=Rt===""?"."+_t(U,0):Rt,P(Ot)?(yt="",xt!=null&&(yt=xt.replace(ht,"$&/")+"/"),I(Ot,Z,yt,"",function(ie){return ie})):Ot!=null&&(G(Ot)&&(Ot=Y(Ot,yt+(Ot.key==null||U&&U.key===Ot.key?"":(""+Ot.key).replace(ht,"$&/")+"/")+xt)),Z.push(Ot)),1;xt=0;var Mt=Rt===""?".":Rt+":";if(P(U))for(var zt=0;zt<U.length;zt++)Rt=U[zt],at=Mt+_t(Rt,zt),xt+=I(Rt,Z,yt,at,Ot);else if(zt=M(U),typeof zt=="function")for(U=zt.call(U),zt=0;!(Rt=U.next()).done;)Rt=Rt.value,at=Mt+_t(Rt,zt++),xt+=I(Rt,Z,yt,at,Ot);else if(at==="object"){if(typeof U.then=="function")return I(J(U),Z,yt,Rt,Ot);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return xt}function H(U,Z,yt){if(U==null)return U;var Rt=[],Ot=0;return I(U,Rt,"","",function(at){return Z.call(yt,at,Ot++)}),Rt}function $(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(yt){(U._status===0||U._status===-1)&&(U._status=1,U._result=yt)},function(yt){(U._status===0||U._status===-1)&&(U._status=2,U._result=yt)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var mt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},bt={map:H,forEach:function(U,Z,yt){H(U,function(){Z.apply(this,arguments)},yt)},count:function(U){var Z=0;return H(U,function(){Z++}),Z},toArray:function(U){return H(U,function(Z){return Z})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return re.Activity=x,re.Children=bt,re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=B,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(U,Z,yt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Rt=C({},U.props),Ot=U.key;if(Z!=null)for(at in Z.key!==void 0&&(Ot=""+Z.key),Z)!T.call(Z,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Z.ref===void 0||(Rt[at]=Z[at]);var at=arguments.length-2;if(at===1)Rt.children=yt;else if(1<at){for(var xt=Array(at),Mt=0;Mt<at;Mt++)xt[Mt]=arguments[Mt+2];Rt.children=xt}return N(U.type,Ot,Rt)},re.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},re.createElement=function(U,Z,yt){var Rt,Ot={},at=null;if(Z!=null)for(Rt in Z.key!==void 0&&(at=""+Z.key),Z)T.call(Z,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Ot[Rt]=Z[Rt]);var xt=arguments.length-2;if(xt===1)Ot.children=yt;else if(1<xt){for(var Mt=Array(xt),zt=0;zt<xt;zt++)Mt[zt]=arguments[zt+2];Ot.children=Mt}if(U&&U.defaultProps)for(Rt in xt=U.defaultProps,xt)Ot[Rt]===void 0&&(Ot[Rt]=xt[Rt]);return N(U,at,Ot)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:p,render:U}},re.isValidElement=G,re.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:$}},re.memo=function(U,Z){return{$$typeof:d,type:U,compare:Z===void 0?null:Z}},re.startTransition=function(U){var Z=O.T,yt={};O.T=yt;try{var Rt=U(),Ot=O.S;Ot!==null&&Ot(yt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(L,mt)}catch(at){mt(at)}finally{Z!==null&&yt.types!==null&&(Z.types=yt.types),O.T=Z}},re.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},re.use=function(U){return O.H.use(U)},re.useActionState=function(U,Z,yt){return O.H.useActionState(U,Z,yt)},re.useCallback=function(U,Z){return O.H.useCallback(U,Z)},re.useContext=function(U){return O.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,Z){return O.H.useDeferredValue(U,Z)},re.useEffect=function(U,Z){return O.H.useEffect(U,Z)},re.useEffectEvent=function(U){return O.H.useEffectEvent(U)},re.useId=function(){return O.H.useId()},re.useImperativeHandle=function(U,Z,yt){return O.H.useImperativeHandle(U,Z,yt)},re.useInsertionEffect=function(U,Z){return O.H.useInsertionEffect(U,Z)},re.useLayoutEffect=function(U,Z){return O.H.useLayoutEffect(U,Z)},re.useMemo=function(U,Z){return O.H.useMemo(U,Z)},re.useOptimistic=function(U,Z){return O.H.useOptimistic(U,Z)},re.useReducer=function(U,Z,yt){return O.H.useReducer(U,Z,yt)},re.useRef=function(U){return O.H.useRef(U)},re.useState=function(U){return O.H.useState(U)},re.useSyncExternalStore=function(U,Z,yt){return O.H.useSyncExternalStore(U,Z,yt)},re.useTransition=function(){return O.H.useTransition()},re.version="19.2.7",re}var S_;function c0(){return S_||(S_=1,Uh.exports=AS()),Uh.exports}var Lh={exports:{}},Fn={};var M_;function RS(){if(M_)return Fn;M_=1;var r=c0();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,_)},Fn.flushSync=function(m){var d=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=d,s.p=_,s.d.f()}},Fn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Fn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Fn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Fn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Fn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Fn.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Fn.requestFormReset=function(m){s.d.r(m)},Fn.unstable_batchedUpdates=function(m,d){return m(d)},Fn.useFormState=function(m,d,_){return f.H.useFormState(m,d,_)},Fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fn.version="19.2.7",Fn}var y_;function CS(){if(y_)return Lh.exports;y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Lh.exports=RS(),Lh.exports}var b_;function wS(){if(b_)return Ko;b_=1;var r=TS(),t=c0(),i=CS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=h;break}if(R===o){v=!0,o=u,a=h;break}R=R.sibling}if(!v){for(R=h.child;R;){if(R===a){v=!0,a=h,o=u;break}if(R===o){v=!0,o=h,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),B=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case B:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var J=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},mt=[],bt=-1;function U(e){return{current:e}}function Z(e){0>bt||(e.current=mt[bt],mt[bt]=null,bt--)}function yt(e,n){bt++,mt[bt]=e.current,e.current=n}var Rt=U(null),Ot=U(null),at=U(null),xt=U(null);function Mt(e,n){switch(yt(at,n),yt(Ot,e),yt(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Bg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Bg(n),e=zg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(Rt),yt(Rt,e)}function zt(){Z(Rt),Z(Ot),Z(at)}function ie(e){e.memoizedState!==null&&yt(xt,e);var n=Rt.current,a=zg(n,e.type);n!==a&&(yt(Ot,e),yt(Rt,a))}function Qt(e){Ot.current===e&&(Z(Rt),Z(Ot)),xt.current===e&&(Z(xt),Xo._currentValue=$)}var qe,he;function Me(e){if(qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qe=n&&n[1]||"",he=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qe+e+he}var ye=!1;function pe(e,n){if(!e||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var ot=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){ot=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){ot=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&ot&&typeof lt.stack=="string")return[lt.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),v=h[0],R=h[1];if(v&&R){var z=v.split(`
`),et=R.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===et.length)for(o=z.length-1,u=et.length-1;1<=o&&0<=u&&z[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==et[u]){var dt=`
`+z[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Me(a):""}function en(e,n){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return e.child!==n&&n!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return Me("Activity");default:return""}}function nn(e){try{var n="",a=null;do n+=en(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var an=Object.prototype.hasOwnProperty,ln=r.unstable_scheduleCallback,We=r.unstable_cancelCallback,sn=r.unstable_shouldYield,W=r.unstable_requestPaint,Be=r.unstable_now,Ce=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,st=r.unstable_LowPriority,ut=r.unstable_IdlePriority,Et=r.log,wt=r.unstable_setDisableYieldValue,ct=null,ft=null;function At(e){if(typeof Et=="function"&&wt(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(ct,e)}catch{}}var Ft=Math.clz32?Math.clz32:Kt,Lt=Math.log,Dt=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(Lt(e)/Dt|0)|0}var jt=256,ae=262144,k=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Tt(o):(v&=R,v!==0?u=Tt(v):a||(a=R&~e,a!==0&&(u=Tt(a))))):(R=o&~h,R!==0?u=Tt(R):v!==0?u=Tt(v):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function It(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function St(){var e=k;return k<<=1,(k&62914560)===0&&(k=4194304),e}function Wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,n,a,o,u,h){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,z=e.expirationTimes,et=e.hiddenUpdates;for(a=v&~a;0<a;){var dt=31-Ft(a),vt=1<<dt;R[dt]=0,z[dt]=-1;var ot=et[dt];if(ot!==null)for(et[dt]=null,dt=0;dt<ot.length;dt++){var lt=ot[dt];lt!==null&&(lt.lane&=-536870913)}a&=~vt}o!==0&&Le(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(v&~n))}function Le(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ei(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ni(e,n){var a=n&-n;return a=(a&42)!==0?1:io(a),(a&(e.suspendedLanes|n))!==0?0:a}function io(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ao(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function so(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:l_(e.type))}function qs(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var zi=Math.random().toString(36).slice(2),fn="__reactFiber$"+zi,wn="__reactProps$"+zi,Yn="__reactContainer$"+zi,ms="__reactEvents$"+zi,gl="__reactListeners$"+zi,_l="__reactHandles$"+zi,gs="__reactResources$"+zi,Ua="__reactMarker$"+zi;function La(e){delete e[fn],delete e[wn],delete e[ms],delete e[gl],delete e[_l]}function ta(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Yn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Yg(e);e!==null;){if(a=e[fn])return a;e=Yg(e)}return n}e=a,a=e.parentNode}return null}function ea(e){if(e=e[fn]||e[Yn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function _s(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Na(e){var n=e[gs];return n||(n=e[gs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(e){e[Ua]=!0}var vl=new Set,A={};function X(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(A[e]=n,e=0;e<n.length;e++)vl.add(n[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},Nt={};function Ht(e){return an.call(Nt,e)?!0:an.call(it,e)?!1:nt.test(e)?Nt[e]=!0:(it[e]=!0,!1)}function Ut(e,n,a){if(Ht(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function kt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Vt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,h.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Te(e){if(!e._valueTracker){var n=le(e)?"checked":"value";e._valueTracker=Zt(e,n,""+e[n])}}function je(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=le(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function Pe(e){return e.replace(Ne,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bt(e,n,a,o,u,h,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Jt(n)):e.value!==""+Jt(n)&&(e.value=""+Jt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?me(e,v,Jt(n)):a!=null?me(e,v,Jt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Jt(R):e.removeAttribute("name")}function In(e,n,a,o,u,h,v,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Te(e);return}a=a!=null?""+Jt(a):"",n=n!=null?""+Jt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Te(e)}function me(e,n,a){n==="number"&&ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Jt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ii(e,n,a){if(n!=null&&(n=""+Jt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Jt(a):""}function Ai(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Jt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Te(e)}function ai(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Oe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Je(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Oe.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ri(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Je(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Je(e,h,n[h])}function De(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(e){return Pa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var bu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Ks=null;function F0(e){var n=ea(e);if(n&&(e=n.stateNode)){var a=e[wn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[wn]||null;if(!u)throw Error(s(90));Bt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&je(o)}break t;case"textarea":ii(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xn(e,!!a.multiple,n,!1)}}}var Tu=!1;function B0(e,n,a){if(Tu)return e(n,a);Tu=!0;try{var o=e(n);return o}finally{if(Tu=!1,(Zs!==null||Ks!==null)&&(sc(),Zs&&(n=Zs,e=Ks,Ks=Zs=null,F0(n),e)))for(n=0;n<e.length;n++)F0(e[n])}}function ro(e,n){var a=e.stateNode;if(a===null)return null;var o=a[wn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(ia)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Au=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Au=!1}var Oa=null,Ru=null,xl=null;function z0(){if(xl)return xl;var e,n=Ru,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[h-o];o++);return xl=u.slice(e,1<o?1-o:void 0)}function Sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ml(){return!0}function H0(){return!1}function qn(e){function n(a,o,u,h,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ml:H0,this.isPropagationStopped=H0,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),n}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=qn(xs),lo=x({},xs,{view:0,detail:0}),Sv=qn(lo),Cu,wu,co,bl=x({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Cu=e.screenX-co.screenX,wu=e.screenY-co.screenY):wu=Cu=0,co=e),Cu)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),G0=qn(bl),Mv=x({},bl,{dataTransfer:0}),yv=qn(Mv),bv=x({},lo,{relatedTarget:0}),Du=qn(bv),Ev=x({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=qn(Ev),Av=x({},xs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rv=qn(Av),Cv=x({},xs,{data:0}),V0=qn(Cv),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Uv[e])?!!n[e]:!1}function Uu(){return Lv}var Nv=x({},lo,{key:function(e){if(e.key){var n=wv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pv=qn(Nv),Ov=x({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k0=qn(Ov),Iv=x({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Fv=qn(Iv),Bv=x({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=qn(Bv),Hv=x({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=qn(Hv),Vv=x({},xs,{newState:0,oldState:0}),kv=qn(Vv),Xv=[9,13,27,32],Lu=ia&&"CompositionEvent"in window,uo=null;ia&&"documentMode"in document&&(uo=document.documentMode);var Wv=ia&&"TextEvent"in window&&!uo,X0=ia&&(!Lu||uo&&8<uo&&11>=uo),W0=" ",Y0=!1;function q0(e,n){switch(e){case"keyup":return Xv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function Yv(e,n){switch(e){case"compositionend":return Z0(n);case"keypress":return n.which!==32?null:(Y0=!0,W0);case"textInput":return e=n.data,e===W0&&Y0?null:e;default:return null}}function qv(e,n){if(Qs)return e==="compositionend"||!Lu&&q0(e,n)?(e=z0(),xl=Ru=Oa=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return X0&&n.locale!=="ko"?null:n.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zv[e.type]:n==="textarea"}function Q0(e,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=hc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var fo=null,ho=null;function Kv(e){Lg(e,0)}function El(e){var n=_s(e);if(je(n))return e}function j0(e,n){if(e==="change")return n}var J0=!1;if(ia){var Nu;if(ia){var Pu="oninput"in document;if(!Pu){var $0=document.createElement("div");$0.setAttribute("oninput","return;"),Pu=typeof $0.oninput=="function"}Nu=Pu}else Nu=!1;J0=Nu&&(!document.documentMode||9<document.documentMode)}function tp(){fo&&(fo.detachEvent("onpropertychange",ep),ho=fo=null)}function ep(e){if(e.propertyName==="value"&&El(ho)){var n=[];Q0(n,ho,e,Eu(e)),B0(Kv,n)}}function Qv(e,n,a){e==="focusin"?(tp(),fo=n,ho=a,fo.attachEvent("onpropertychange",ep)):e==="focusout"&&tp()}function jv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(ho)}function Jv(e,n){if(e==="click")return El(n)}function $v(e,n){if(e==="input"||e==="change")return El(n)}function tx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var si=typeof Object.is=="function"?Object.is:tx;function po(e,n){if(si(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!an.call(n,u)||!si(e[u],n[u]))return!1}return!0}function np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ip(e,n){var a=np(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=np(a)}}function ap(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ap(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function sp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ke(e.document)}return n}function Ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ex=ia&&"documentMode"in document&&11>=document.documentMode,js=null,Iu=null,mo=null,Fu=!1;function rp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||js==null||js!==ke(o)||(o=js,"selectionStart"in o&&Ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=hc(Iu,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=js)))}function Ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},Bu={},op={};ia&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Ms(e){if(Bu[e])return Bu[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return Bu[e]=n[a];return e}var lp=Ms("animationend"),cp=Ms("animationiteration"),up=Ms("animationstart"),nx=Ms("transitionrun"),ix=Ms("transitionstart"),ax=Ms("transitioncancel"),fp=Ms("transitionend"),hp=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Ci(e,n){hp.set(e,n),X(n,[e])}var Tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],$s=0,Hu=0;function Al(){for(var e=$s,n=Hu=$s=0;n<e;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var h=_i[n];if(_i[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}h!==0&&dp(a,u,h)}}function Rl(e,n,a,o){_i[$s++]=e,_i[$s++]=n,_i[$s++]=a,_i[$s++]=o,Hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gu(e,n,a,o){return Rl(e,n,a,o),Cl(e)}function ys(e,n){return Rl(e,null,null,n),Cl(e)}function dp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Cl(e){if(50<Fo)throw Fo=0,jf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var tr={};function sx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,n,a,o){return new sx(e,n,a,o)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,n){var a=e.alternate;return a===null?(a=ri(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function pp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function wl(e,n,a,o,u,h){var v=0;if(o=e,typeof e=="function")Vu(e)&&(v=1);else if(typeof e=="string")v=uS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=ri(31,a,n,u),e.elementType=N,e.lanes=h,e;case C:return bs(a.children,u,h,n);case y:v=8,u|=24;break;case S:return e=ri(12,a,n,u|2),e.elementType=S,e.lanes=h,e;case P:return e=ri(13,a,n,u),e.elementType=P,e.lanes=h,e;case L:return e=ri(19,a,n,u),e.elementType=L,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:v=10;break t;case F:v=9;break t;case w:v=11;break t;case O:v=14;break t;case T:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ri(v,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function bs(e,n,a,o){return e=ri(7,e,o,n),e.lanes=a,e}function ku(e,n,a){return e=ri(6,e,null,n),e.lanes=a,e}function mp(e){var n=ri(18,null,null,0);return n.stateNode=e,n}function Xu(e,n,a){return n=ri(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var gp=new WeakMap;function vi(e,n){if(typeof e=="object"&&e!==null){var a=gp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:nn(n)},gp.set(e,n),n)}return{value:e,source:n,stack:nn(n)}}var er=[],nr=0,Dl=null,go=0,xi=[],Si=0,Ia=null,Gi=1,Vi="";function sa(e,n){er[nr++]=go,er[nr++]=Dl,Dl=e,go=n}function _p(e,n,a){xi[Si++]=Gi,xi[Si++]=Vi,xi[Si++]=Ia,Ia=e;var o=Gi;e=Vi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var h=32-Ft(n)+u;if(30<h){var v=u-u%5;h=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Gi=1<<32-Ft(n)+u|a<<u|o,Vi=h+e}else Gi=1<<h|a<<u|o,Vi=e}function Wu(e){e.return!==null&&(sa(e,1),_p(e,1,0))}function Yu(e){for(;e===Dl;)Dl=er[--nr],er[nr]=null,go=er[--nr],er[nr]=null;for(;e===Ia;)Ia=xi[--Si],xi[Si]=null,Vi=xi[--Si],xi[Si]=null,Gi=xi[--Si],xi[Si]=null}function vp(e,n){xi[Si++]=Gi,xi[Si++]=Vi,xi[Si++]=Ia,Gi=n.id,Vi=n.overflow,Ia=e}var Dn=null,Ze=null,be=!1,Fa=null,Mi=!1,qu=Error(s(519));function Ba(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(vi(n,e)),qu}function xp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[fn]=e,n[wn]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)_e(zo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ig(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=na),n=!0):n=!1,n||Ba(e,!0)}function Sp(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Dn=Dn.return}}function ir(e){if(e!==Dn)return!1;if(!be)return Sp(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ba(e),Sp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Wg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Wg(e)}else n===27?(n=Ze,Ja(e.type)?(e=_h,_h=null,Ze=e):Ze=n):Ze=Dn?bi(e.stateNode.nextSibling):null;return!0}function Es(){Ze=Dn=null,be=!1}function Zu(){var e=Fa;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Fa=null),e}function _o(e){Fa===null?Fa=[e]:Fa.push(e)}var Ku=U(null),Ts=null,ra=null;function za(e,n,a){yt(Ku,n._currentValue),n._currentValue=a}function oa(e){e._currentValue=Ku.current,Z(Ku)}function Qu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function ju(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var v=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),Qu(h.return,a,e),o||(v=null);break t}h=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,h=v.alternate,h!==null&&(h.lanes|=a),Qu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function ar(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;si(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===xt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}u=u.return}e!==null&&ju(n,e,a,o),n.flags|=262144}function Ul(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Ts=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return Mp(Ts,e)}function Ll(e,n){return Ts===null&&As(e),Mp(e,n)}function Mp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(s(308));ra=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ra=ra.next=n;return a}var rx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ox=r.unstable_scheduleCallback,lx=r.unstable_NormalPriority,dn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new rx,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&ox(lx,function(){e.controller.abort()})}var xo=null,$u=0,sr=0,rr=null;function cx(e,n){if(xo===null){var a=xo=[];$u=0,sr=ih(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(yp,yp),n}function yp(){if(--$u===0&&xo!==null){rr!==null&&(rr.status="fulfilled");var e=xo;xo=null,sr=0,rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ux(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var bp=I.S;I.S=function(e,n){rg=Be(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&cx(e,n),bp!==null&&bp(e,n)};var Rs=U(null);function tf(){var e=Rs.current;return e!==null?e:Xe.pooledCache}function Nl(e,n){n===null?yt(Rs,Rs.current):yt(Rs,n.pool)}function Ep(){var e=tf();return e===null?null:{parent:dn._currentValue,pool:e}}var or=Error(s(460)),ef=Error(s(474)),Pl=Error(s(542)),Ol={then:function(){}};function Tp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ap(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(na,na),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cp(e),e;default:if(typeof n.status=="string")n.then(na,na);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Cp(e),e}throw ws=n,or}}function Cs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ws=a,or):a}}var ws=null;function Rp(){if(ws===null)throw Error(s(459));var e=ws;return ws=null,e}function Cp(e){if(e===or||e===Pl)throw Error(s(483))}var lr=null,So=0;function Il(e){var n=So;return So+=1,lr===null&&(lr=[]),Ap(lr,e,n)}function Mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Fl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function wp(e){function n(q,V){if(e){var tt=q.deletions;tt===null?(q.deletions=[V],q.flags|=16):tt.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function o(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function u(q,V){return q=aa(q,V),q.index=0,q.sibling=null,q}function h(q,V,tt){return q.index=tt,e?(tt=q.alternate,tt!==null?(tt=tt.index,tt<V?(q.flags|=67108866,V):tt):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function v(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function R(q,V,tt,gt){return V===null||V.tag!==6?(V=ku(tt,q.mode,gt),V.return=q,V):(V=u(V,tt),V.return=q,V)}function z(q,V,tt,gt){var $t=tt.type;return $t===C?dt(q,V,tt.props.children,gt,tt.key):V!==null&&(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Cs($t)===V.type)?(V=u(V,tt.props),Mo(V,tt),V.return=q,V):(V=wl(tt.type,tt.key,tt.props,null,q.mode,gt),Mo(V,tt),V.return=q,V)}function et(q,V,tt,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=Xu(tt,q.mode,gt),V.return=q,V):(V=u(V,tt.children||[]),V.return=q,V)}function dt(q,V,tt,gt,$t){return V===null||V.tag!==7?(V=bs(tt,q.mode,gt,$t),V.return=q,V):(V=u(V,tt),V.return=q,V)}function vt(q,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ku(""+V,q.mode,tt),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return tt=wl(V.type,V.key,V.props,null,q.mode,tt),Mo(tt,V),tt.return=q,tt;case E:return V=Xu(V,q.mode,tt),V.return=q,V;case T:return V=Cs(V),vt(q,V,tt)}if(J(V)||Q(V))return V=bs(V,q.mode,tt,null),V.return=q,V;if(typeof V.then=="function")return vt(q,Il(V),tt);if(V.$$typeof===B)return vt(q,Ll(q,V),tt);Fl(q,V)}return null}function ot(q,V,tt,gt){var $t=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:R(q,V,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===$t?z(q,V,tt,gt):null;case E:return tt.key===$t?et(q,V,tt,gt):null;case T:return tt=Cs(tt),ot(q,V,tt,gt)}if(J(tt)||Q(tt))return $t!==null?null:dt(q,V,tt,gt,null);if(typeof tt.then=="function")return ot(q,V,Il(tt),gt);if(tt.$$typeof===B)return ot(q,V,Ll(q,tt),gt);Fl(q,tt)}return null}function lt(q,V,tt,gt,$t){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return q=q.get(tt)||null,R(V,q,""+gt,$t);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case M:return q=q.get(gt.key===null?tt:gt.key)||null,z(V,q,gt,$t);case E:return q=q.get(gt.key===null?tt:gt.key)||null,et(V,q,gt,$t);case T:return gt=Cs(gt),lt(q,V,tt,gt,$t)}if(J(gt)||Q(gt))return q=q.get(tt)||null,dt(V,q,gt,$t,null);if(typeof gt.then=="function")return lt(q,V,tt,Il(gt),$t);if(gt.$$typeof===B)return lt(q,V,tt,Ll(V,gt),$t);Fl(V,gt)}return null}function Xt(q,V,tt,gt){for(var $t=null,Ae=null,Yt=V,ue=V=0,xe=null;Yt!==null&&ue<tt.length;ue++){Yt.index>ue?(xe=Yt,Yt=null):xe=Yt.sibling;var Re=ot(q,Yt,tt[ue],gt);if(Re===null){Yt===null&&(Yt=xe);break}e&&Yt&&Re.alternate===null&&n(q,Yt),V=h(Re,V,ue),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re,Yt=xe}if(ue===tt.length)return a(q,Yt),be&&sa(q,ue),$t;if(Yt===null){for(;ue<tt.length;ue++)Yt=vt(q,tt[ue],gt),Yt!==null&&(V=h(Yt,V,ue),Ae===null?$t=Yt:Ae.sibling=Yt,Ae=Yt);return be&&sa(q,ue),$t}for(Yt=o(Yt);ue<tt.length;ue++)xe=lt(Yt,q,ue,tt[ue],gt),xe!==null&&(e&&xe.alternate!==null&&Yt.delete(xe.key===null?ue:xe.key),V=h(xe,V,ue),Ae===null?$t=xe:Ae.sibling=xe,Ae=xe);return e&&Yt.forEach(function(is){return n(q,is)}),be&&sa(q,ue),$t}function ee(q,V,tt,gt){if(tt==null)throw Error(s(151));for(var $t=null,Ae=null,Yt=V,ue=V=0,xe=null,Re=tt.next();Yt!==null&&!Re.done;ue++,Re=tt.next()){Yt.index>ue?(xe=Yt,Yt=null):xe=Yt.sibling;var is=ot(q,Yt,Re.value,gt);if(is===null){Yt===null&&(Yt=xe);break}e&&Yt&&is.alternate===null&&n(q,Yt),V=h(is,V,ue),Ae===null?$t=is:Ae.sibling=is,Ae=is,Yt=xe}if(Re.done)return a(q,Yt),be&&sa(q,ue),$t;if(Yt===null){for(;!Re.done;ue++,Re=tt.next())Re=vt(q,Re.value,gt),Re!==null&&(V=h(Re,V,ue),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re);return be&&sa(q,ue),$t}for(Yt=o(Yt);!Re.done;ue++,Re=tt.next())Re=lt(Yt,q,ue,Re.value,gt),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?ue:Re.key),V=h(Re,V,ue),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re);return e&&Yt.forEach(function(MS){return n(q,MS)}),be&&sa(q,ue),$t}function Ge(q,V,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===C&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var $t=tt.key;V!==null;){if(V.key===$t){if($t=tt.type,$t===C){if(V.tag===7){a(q,V.sibling),gt=u(V,tt.props.children),gt.return=q,q=gt;break t}}else if(V.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Cs($t)===V.type){a(q,V.sibling),gt=u(V,tt.props),Mo(gt,tt),gt.return=q,q=gt;break t}a(q,V);break}else n(q,V);V=V.sibling}tt.type===C?(gt=bs(tt.props.children,q.mode,gt,tt.key),gt.return=q,q=gt):(gt=wl(tt.type,tt.key,tt.props,null,q.mode,gt),Mo(gt,tt),gt.return=q,q=gt)}return v(q);case E:t:{for($t=tt.key;V!==null;){if(V.key===$t)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(q,V.sibling),gt=u(V,tt.children||[]),gt.return=q,q=gt;break t}else{a(q,V);break}else n(q,V);V=V.sibling}gt=Xu(tt,q.mode,gt),gt.return=q,q=gt}return v(q);case T:return tt=Cs(tt),Ge(q,V,tt,gt)}if(J(tt))return Xt(q,V,tt,gt);if(Q(tt)){if($t=Q(tt),typeof $t!="function")throw Error(s(150));return tt=$t.call(tt),ee(q,V,tt,gt)}if(typeof tt.then=="function")return Ge(q,V,Il(tt),gt);if(tt.$$typeof===B)return Ge(q,V,Ll(q,tt),gt);Fl(q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(q,V.sibling),gt=u(V,tt),gt.return=q,q=gt):(a(q,V),gt=ku(tt,q.mode,gt),gt.return=q,q=gt),v(q)):a(q,V)}return function(q,V,tt,gt){try{So=0;var $t=Ge(q,V,tt,gt);return lr=null,$t}catch(Yt){if(Yt===or||Yt===Pl)throw Yt;var Ae=ri(29,Yt,null,q.mode);return Ae.lanes=gt,Ae.return=q,Ae}}}var Ds=wp(!0),Dp=wp(!1),Ha=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Cl(e),dp(e,null,a),n}return Rl(e,o,n,a),Cl(e)}function yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ei(e,a)}}function sf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=v:h=h.next=v,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var rf=!1;function bo(){if(rf){var e=rr;if(e!==null)throw e}}function Eo(e,n,a,o){rf=!1;var u=e.updateQueue;Ha=!1;var h=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,et=z.next;z.next=null,v===null?h=et:v.next=et,v=z;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==v&&(R===null?dt.firstBaseUpdate=et:R.next=et,dt.lastBaseUpdate=z))}if(h!==null){var vt=u.baseState;v=0,dt=et=z=null,R=h;do{var ot=R.lane&-536870913,lt=ot!==R.lane;if(lt?(ve&ot)===ot:(o&ot)===ot){ot!==0&&ot===sr&&(rf=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Xt=e,ee=R;ot=n;var Ge=a;switch(ee.tag){case 1:if(Xt=ee.payload,typeof Xt=="function"){vt=Xt.call(Ge,vt,ot);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ee.payload,ot=typeof Xt=="function"?Xt.call(Ge,vt,ot):Xt,ot==null)break t;vt=x({},vt,ot);break t;case 2:Ha=!0}}ot=R.callback,ot!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[ot]:lt.push(ot))}else lt={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(et=dt=lt,z=vt):dt=dt.next=lt,v|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(z=vt),u.baseState=z,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),qa|=v,e.lanes=v,e.memoizedState=vt}}function Up(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Lp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Up(a[e],n)}var cr=U(null),Bl=U(0);function Np(e,n){e=ga,yt(Bl,e),yt(cr,n),ga=e|n.baseLanes}function of(){yt(Bl,ga),yt(cr,cr.current)}function lf(){ga=Bl.current,Z(cr),Z(Bl)}var oi=U(null),yi=null;function ka(e){var n=e.alternate;yt(cn,cn.current&1),yt(oi,e),yi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(yi=e)}function cf(e){yt(cn,cn.current),yt(oi,e),yi===null&&(yi=e)}function Pp(e){e.tag===22?(yt(cn,cn.current),yt(oi,e),yi===null&&(yi=e)):Xa()}function Xa(){yt(cn,cn.current),yt(oi,oi.current)}function li(e){Z(oi),yi===e&&(yi=null),Z(cn)}var cn=U(0);function zl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mh(a)||gh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var la=0,ce=null,ze=null,pn=null,Hl=!1,ur=!1,Us=!1,Gl=0,To=0,fr=null,fx=0;function rn(){throw Error(s(321))}function uf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!si(e[a],n[a]))return!1;return!0}function ff(e,n,a,o,u,h){return la=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?_m:Af,Us=!1,h=a(o,u),Us=!1,ur&&(h=Ip(n,a,o,u)),Op(e),h}function Op(e){I.H=Co;var n=ze!==null&&ze.next!==null;if(la=0,pn=ze=ce=null,Hl=!1,To=0,fr=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&Ul(e)&&(mn=!0))}function Ip(e,n,a,o){ce=e;var u=0;do{if(ur&&(fr=null),To=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,pn=ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=vm,h=n(a,o)}while(ur);return h}function hx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?Ao(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ce.flags|=1024),n}function hf(){var e=Gl!==0;return Gl=0,e}function df(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pf(e){if(Hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Hl=!1}la=0,pn=ze=ce=null,ur=!1,To=Gl=0,fr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ce.memoizedState=pn=e:pn=pn.next=e,pn}function un(){if(ze===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=pn===null?ce.memoizedState:pn.next;if(n!==null)pn=n,ze=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},pn===null?ce.memoizedState=pn=e:pn=pn.next=e}return pn}function Vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var n=To;return To+=1,fr===null&&(fr=[]),e=Ap(fr,e,n),n=ce,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?_m:Af),e}function kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===B)return Un(e)}throw Error(s(438,String(e)))}function mf(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Y;return n.index++,a}function ca(e,n){return typeof n=="function"?n(e):n}function Xl(e){var n=un();return gf(n,ze,e)}function gf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var v=u.next;u.next=h.next,h.next=v}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=v=null,z=null,et=n,dt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(ve&vt)===vt:(la&vt)===vt){var ot=et.revertLane;if(ot===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===sr&&(dt=!0);else if((la&ot)===ot){et=et.next,ot===sr&&(dt=!0);continue}else vt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(R=z=vt,v=h):z=z.next=vt,ce.lanes|=ot,qa|=ot;vt=et.action,Us&&a(h,vt),h=et.hasEagerState?et.eagerState:a(h,vt)}else ot={lane:vt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(R=z=ot,v=h):z=z.next=ot,ce.lanes|=vt,qa|=vt;et=et.next}while(et!==null&&et!==n);if(z===null?v=h:z.next=R,!si(h,e.memoizedState)&&(mn=!0,dt&&(a=rr,a!==null)))throw a;e.memoizedState=h,e.baseState=v,e.baseQueue=z,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function _f(e){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do h=e(h,v.action),v=v.next;while(v!==u);si(h,n.memoizedState)||(mn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Fp(e,n,a){var o=ce,u=un(),h=be;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!si((ze||u).memoizedState,a);if(v&&(u.memoizedState=a,mn=!0),u=u.queue,Sf(Hp.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},zp.bind(null,o,u,a,n),null),Xe===null)throw Error(s(349));h||(la&127)!==0||Bp(o,n,a)}return a}function Bp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Vl(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function zp(e,n,a,o){n.value=a,n.getSnapshot=o,Gp(n)&&Vp(e)}function Hp(e,n,a){return a(function(){Gp(n)&&Vp(e)})}function Gp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!si(e,a)}catch{return!0}}function Vp(e){var n=ys(e,2);n!==null&&Jn(n,e,2)}function vf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Us){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},n}function kp(e,n,a,o){return e.baseState=a,gf(e,ze,typeof o=="function"?o:ca)}function dx(e,n,a,o,u){if(ql(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Xp(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Xp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=I.T,v={};I.T=v;try{var R=a(u,o),z=I.S;z!==null&&z(v,R),Wp(e,n,R)}catch(et){xf(e,n,et)}finally{h!==null&&v.types!==null&&(h.types=v.types),I.T=h}}else try{h=a(u,o),Wp(e,n,h)}catch(et){xf(e,n,et)}}function Wp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Yp(e,n,o)},function(o){return xf(e,n,o)}):Yp(e,n,a)}function Yp(e,n,a){n.status="fulfilled",n.value=a,qp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Xp(e,a)))}function xf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,qp(n),n=n.next;while(n!==o)}e.action=null}function qp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Zp(e,n){return n}function Kp(e,n){if(be){var a=Xe.formState;if(a!==null){t:{var o=ce;if(be){if(Ze){e:{for(var u=Ze,h=Mi;u.nodeType!==8;){if(!h){u=null;break e}if(u=bi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ze=bi(u.nextSibling),o=u.data==="F!";break t}}Ba(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:n},a.queue=o,a=pm.bind(null,ce,o),o.dispatch=a,o=vf(!1),h=Tf.bind(null,ce,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=dx.bind(null,ce,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Qp(e){var n=un();return jp(n,ze,e)}function jp(e,n,a){if(n=gf(e,n,Zp)[0],e=Xl(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ao(n)}catch(v){throw v===or?Pl:v}else o=n;n=un();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,hr(9,{destroy:void 0},px.bind(null,u,a),null)),[o,h,e]}function px(e,n){e.action=n}function Jp(e){var n=un(),a=ze;if(a!==null)return jp(n,a,e);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function hr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Vl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function $p(){return un().memoizedState}function Wl(e,n,a,o){var u=Gn();ce.flags|=e,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Yl(e,n,a,o){var u=un();o=o===void 0?null:o;var h=u.memoizedState.inst;ze!==null&&o!==null&&uf(o,ze.memoizedState.deps)?u.memoizedState=hr(n,h,a,o):(ce.flags|=e,u.memoizedState=hr(1|n,h,a,o))}function tm(e,n){Wl(8390656,8,e,n)}function Sf(e,n){Yl(2048,8,e,n)}function mx(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Vl(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function em(e){var n=un().memoizedState;return mx({ref:n,nextImpl:e}),function(){if((we&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function nm(e,n){return Yl(4,2,e,n)}function im(e,n){return Yl(4,4,e,n)}function am(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function sm(e,n,a){a=a!=null?a.concat([e]):null,Yl(4,4,am.bind(null,n,e),a)}function Mf(){}function rm(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function om(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=e(),Us){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o}function yf(e,n,a){return a===void 0||(la&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=lg(),ce.lanes|=e,qa|=e,a)}function lm(e,n,a,o){return si(a,n)?a:cr.current!==null?(e=yf(e,a,o),si(e,n)||(mn=!0),e):(la&42)===0||(la&1073741824)!==0&&(ve&261930)===0?(mn=!0,e.memoizedState=a):(e=lg(),ce.lanes|=e,qa|=e,n)}function cm(e,n,a,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var v=I.T,R={};I.T=R,Tf(e,!1,n,a);try{var z=u(),et=I.S;if(et!==null&&et(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var dt=ux(z,o);Ro(e,n,dt,fi(e))}else Ro(e,n,o,fi(e))}catch(vt){Ro(e,n,{then:function(){},status:"rejected",reason:vt},fi())}finally{H.p=h,v!==null&&R.types!==null&&(v.types=R.types),I.T=v}}function gx(){}function bf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=um(e).queue;cm(e,u,n,$,a===null?gx:function(){return fm(e),a(o)})}function um(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function fm(e){var n=um(e);n.next===null&&(n=e.alternate.memoizedState),Ro(e,n.next.queue,{},fi())}function Ef(){return Un(Xo)}function hm(){return un().memoizedState}function dm(){return un().memoizedState}function _x(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();e=Ga(a);var o=Va(n,e,a);o!==null&&(Jn(o,n,a),yo(o,n,a)),n={cache:Ju()},e.payload=n;return}n=n.return}}function vx(e,n,a){var o=fi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(e)?mm(n,a):(a=Gu(e,n,a,o),a!==null&&(Jn(a,e,o),gm(a,n,o)))}function pm(e,n,a){var o=fi();Ro(e,n,a,o)}function Ro(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(e))mm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,R=h(v,a);if(u.hasEagerState=!0,u.eagerState=R,si(R,v))return Rl(e,n,u,0),Xe===null&&Al(),!1}catch{}if(a=Gu(e,n,u,o),a!==null)return Jn(a,e,o),gm(a,n,o),!0}return!1}function Tf(e,n,a,o){if(o={lane:2,revertLane:ih(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(n)throw Error(s(479))}else n=Gu(e,a,o,2),n!==null&&Jn(n,e,2)}function ql(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function mm(e,n){ur=Hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function gm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ei(e,a)}}var Co={readContext:Un,use:kl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Co.useEffectEvent=rn;var _m={readContext:Un,use:kl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:tm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Wl(4194308,4,am.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Wl(4194308,4,e,n)},useInsertionEffect:function(e,n){Wl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(Us){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Us){At(!0);try{a(n)}finally{At(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=vx.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=vf(e);var n=e.queue,a=pm.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Mf,useDeferredValue:function(e,n){var a=Gn();return yf(a,e,n)},useTransition:function(){var e=vf(!1);return e=cm.bind(null,ce,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,u=Gn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ve&127)!==0||Bp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,tm(Hp.bind(null,o,h,e),[e]),o.flags|=2048,hr(9,{destroy:void 0},zp.bind(null,o,h,a,n),null),a},useId:function(){var e=Gn(),n=Xe.identifierPrefix;if(be){var a=Vi,o=Gi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ef,useFormState:Kp,useActionState:Kp,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:mf,useCacheRefresh:function(){return Gn().memoizedState=_x.bind(null,ce)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:Un,use:kl,useCallback:rm,useContext:Un,useEffect:Sf,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Xl,useRef:$p,useState:function(){return Xl(ca)},useDebugValue:Mf,useDeferredValue:function(e,n){var a=un();return lm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Xl(ca)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Fp,useId:hm,useHostTransitionStatus:Ef,useFormState:Qp,useActionState:Qp,useOptimistic:function(e,n){var a=un();return kp(a,ze,e,n)},useMemoCache:mf,useCacheRefresh:dm};Af.useEffectEvent=em;var vm={readContext:Un,use:kl,useCallback:rm,useContext:Un,useEffect:Sf,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:_f,useRef:$p,useState:function(){return _f(ca)},useDebugValue:Mf,useDeferredValue:function(e,n){var a=un();return ze===null?yf(a,e,n):lm(a,ze.memoizedState,e,n)},useTransition:function(){var e=_f(ca)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Fp,useId:hm,useHostTransitionStatus:Ef,useFormState:Jp,useActionState:Jp,useOptimistic:function(e,n){var a=un();return ze!==null?kp(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:dm};vm.useEffectEvent=em;function Rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=fi(),u=Ga(o);u.payload=n,a!=null&&(u.callback=a),n=Va(e,u,o),n!==null&&(Jn(n,e,o),yo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=fi(),u=Ga(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Va(e,u,o),n!==null&&(Jn(n,e,o),yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=fi(),o=Ga(a);o.tag=2,n!=null&&(o.callback=n),n=Va(e,o,a),n!==null&&(Jn(n,e,a),yo(n,e,a))}};function xm(e,n,a,o,u,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,v):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(u,h):!0}function Sm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Cf.enqueueReplaceState(n,n.state,null)}function Ls(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Mm(e){Tl(e)}function ym(e){console.error(e)}function bm(e){Tl(e)}function Zl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Em(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wf(e,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Zl(e,n)},a}function Tm(e){return e=Ga(e),e.tag=3,e}function Am(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Em(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Em(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function xx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?rc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),th(e,o,u)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),th(e,o,u)),!1}throw Error(s(435,a.tag))}return th(e,o,u),rc(),!1}if(be)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==qu&&(e=Error(s(422),{cause:o}),_o(vi(e,a)))):(o!==qu&&(n=Error(s(423),{cause:o}),_o(vi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=vi(o,a),u=wf(e.stateNode,o,u),sf(e,u),on!==4&&(on=2)),!1;var h=Error(s(520),{cause:o});if(h=vi(h,a),Io===null?Io=[h]:Io.push(h),on!==4&&(on=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=wf(a.stateNode,o,e),sf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Za===null||!Za.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Tm(u),Am(u,e,a,o),sf(a,u),!1}a=a.return}while(a!==null);return!1}var Df=Error(s(461)),mn=!1;function Ln(e,n,a,o){n.child=e===null?Dp(n,null,a,o):Ds(n,e.child,a,o)}function Rm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return As(n),o=ff(e,n,a,v,h,u),R=hf(),e!==null&&!mn?(df(e,n,u),ua(e,n,u)):(be&&R&&Wu(n),n.flags|=1,Ln(e,n,o,u),n.child)}function Cm(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Vu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,wm(e,n,h,o,u)):(e=wl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Bf(e,u)){var v=h.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(v,o)&&e.ref===n.ref)return ua(e,n,u)}return n.flags|=1,e=aa(h,o),e.ref=n.ref,e.return=n,n.child=e}function wm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(po(h,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=h,Bf(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,ua(e,n,u)}return Uf(e,n,a,o,u)}function Dm(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Um(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nl(n,h!==null?h.cachePool:null),h!==null?Np(n,h):of(),Pp(n);else return o=n.lanes=536870912,Um(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Nl(n,h.cachePool),Np(n,h),Xa(),n.memoizedState=null):(e!==null&&Nl(n,null),of(),Xa());return Ln(e,n,u,a),n.child}function wo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Um(e,n,a,o,u){var h=tf();return h=h===null?null:{parent:dn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Nl(n,null),of(),Pp(n),e!==null&&ar(e,n,o,!0),n.childLanes=u,null}function Kl(e,n){return n=jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Lm(e,n,a){return Ds(n,e.child,null,a),e=Kl(n,n.pendingProps),e.flags|=2,li(n),n.memoizedState=null,e}function Sx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(be){if(o.mode==="hidden")return e=Kl(n,o),n.lanes=536870912,wo(null,e);if(cf(n),(e=Ze)?(e=Xg(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=mp(e),a.return=n,n.child=a,Dn=n,Ze=null)):e=null,e===null)throw Ba(n);return n.lanes=536870912,null}return Kl(n,o)}var h=e.memoizedState;if(h!==null){var v=h.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=Lm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||ar(e,n,a,!1),u=(a&e.childLanes)!==0,mn||u){if(o=Xe,o!==null&&(v=ni(o,a),v!==0&&v!==h.retryLane))throw h.retryLane=v,ys(e,v),Jn(o,e,v),Df;rc(),n=Lm(e,n,a)}else e=h.treeContext,Ze=bi(v.nextSibling),Dn=n,be=!0,Fa=null,Mi=!1,e!==null&&vp(n,e),n=Kl(n,o),n.flags|=4096;return n}return e=aa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uf(e,n,a,o,u){return As(n),a=ff(e,n,a,o,void 0,u),o=hf(),e!==null&&!mn?(df(e,n,u),ua(e,n,u)):(be&&o&&Wu(n),n.flags|=1,Ln(e,n,a,u),n.child)}function Nm(e,n,a,o,u,h){return As(n),n.updateQueue=null,a=Ip(n,o,a,u),Op(e),o=hf(),e!==null&&!mn?(df(e,n,h),ua(e,n,h)):(be&&o&&Wu(n),n.flags|=1,Ln(e,n,a,h),n.child)}function Pm(e,n,a,o,u){if(As(n),n.stateNode===null){var h=tr,v=a.contextType;typeof v=="object"&&v!==null&&(h=Un(v)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Cf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},nf(n),v=a.contextType,h.context=typeof v=="object"&&v!==null?Un(v):tr,h.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Rf(n,a,v,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&Cf.enqueueReplaceState(h,h.state,null),Eo(n,o,h,u),bo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,z=Ls(a,R);h.props=z;var et=h.context,dt=a.contextType;v=tr,typeof dt=="object"&&dt!==null&&(v=Un(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||et!==v)&&Sm(n,h,o,v),Ha=!1;var ot=n.memoizedState;h.state=ot,Eo(n,o,h,u),bo(),et=n.memoizedState,R||ot!==et||Ha?(typeof vt=="function"&&(Rf(n,a,vt,o),et=n.memoizedState),(z=Ha||xm(n,a,z,o,ot,et,v))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),h.props=o,h.state=et,h.context=v,o=z):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,af(e,n),v=n.memoizedProps,dt=Ls(a,v),h.props=dt,vt=n.pendingProps,ot=h.context,et=a.contextType,z=tr,typeof et=="object"&&et!==null&&(z=Un(et)),R=a.getDerivedStateFromProps,(et=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==vt||ot!==z)&&Sm(n,h,o,z),Ha=!1,ot=n.memoizedState,h.state=ot,Eo(n,o,h,u),bo();var lt=n.memoizedState;v!==vt||ot!==lt||Ha||e!==null&&e.dependencies!==null&&Ul(e.dependencies)?(typeof R=="function"&&(Rf(n,a,R,o),lt=n.memoizedState),(dt=Ha||xm(n,a,dt,o,ot,lt,z)||e!==null&&e.dependencies!==null&&Ul(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,z),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,z)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=z,o=dt):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ql(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Ds(n,e.child,null,u),n.child=Ds(n,null,a,u)):Ln(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ua(e,n,u),e}function Om(e,n,a,o){return Es(),n.flags|=256,Ln(e,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(e){return{baseLanes:e,cachePool:Ep()}}function Pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ui),e}function Im(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,v;if((v=h)||(v=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(u?ka(n):Xa(),(e=Ze)?(e=Xg(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=mp(e),a.return=n,n.child=a,Dn=n,Ze=null)):e=null,e===null)throw Ba(n);return gh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Xa(),u=n.mode,R=jl({mode:"hidden",children:R},u),o=bs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Nf(a),o.childLanes=Pf(e,v,a),n.memoizedState=Lf,wo(null,o)):(ka(n),Of(n,R))}var z=e.memoizedState;if(z!==null&&(R=z.dehydrated,R!==null)){if(h)n.flags&256?(ka(n),n.flags&=-257,n=If(e,n,a)):n.memoizedState!==null?(Xa(),n.child=e.child,n.flags|=128,n=null):(Xa(),R=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),R=bs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ds(n,e.child,null,a),o=n.child,o.memoizedState=Nf(a),o.childLanes=Pf(e,v,a),n.memoizedState=Lf,n=wo(null,o));else if(ka(n),gh(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var et=v.dgst;v=et,o=Error(s(419)),o.stack="",o.digest=v,_o({value:o,source:null,stack:null}),n=If(e,n,a)}else if(mn||ar(e,n,a,!1),v=(a&e.childLanes)!==0,mn||v){if(v=Xe,v!==null&&(o=ni(v,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,ys(e,o),Jn(v,e,o),Df;mh(R)||rc(),n=If(e,n,a)}else mh(R)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Ze=bi(R.nextSibling),Dn=n,be=!0,Fa=null,Mi=!1,e!==null&&vp(n,e),n=Of(n,o.children),n.flags|=4096);return n}return u?(Xa(),R=o.fallback,u=n.mode,z=e.child,et=z.sibling,o=aa(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,et!==null?R=aa(et,R):(R=bs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,wo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Nf(a):(u=R.cachePool,u!==null?(z=dn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Ep(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Pf(e,v,a),n.memoizedState=Lf,wo(e.child,o)):(ka(n),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Of(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=ri(22,e,null,n),e.lanes=0,e}function If(e,n,a){return Ds(n,e.child,null,a),e=Of(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Qu(e.return,n,a)}function Ff(e,n,a,o,u,h){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=h)}function Bm(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var v=cn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,yt(cn,v),Ln(e,n,o,a),o=be?go:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fm(e,a,n);else if(e.tag===19)Fm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&zl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ff(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&zl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ff(n,!0,a,null,h,o);break;case"together":Ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ua(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=aa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ul(e)))}function Mx(e,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),za(n,dn,e.memoizedState.cache),Es();break;case 27:case 5:ie(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Im(e,n,a):(ka(n),e=ua(e,n,a),e!==null?e.sibling:null);ka(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ar(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Bm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(cn,cn.current),o)break;return null;case 22:return n.lanes=0,Dm(e,n,a,n.pendingProps);case 24:za(n,dn,e.memoizedState.cache)}return ua(e,n,a)}function zm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Bf(e,a)&&(n.flags&128)===0)return mn=!1,Mx(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,be&&(n.flags&1048576)!==0&&_p(n,go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Cs(n.elementType),n.type=e,typeof e=="function")Vu(e)?(o=Ls(e,o),n.tag=1,n=Pm(null,n,e,o,a)):(n.tag=0,n=Uf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=Rm(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=Cm(null,n,e,o,a);break t}}throw n=_t(e)||e,Error(s(306,n,""))}}return n;case 0:return Uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ls(o,n.pendingProps),Pm(e,n,o,u,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,af(e,n),Eo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,za(n,dn,o),o!==h.cache&&ju(n,[dn],a,!0),bo(),o=v.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Om(e,n,o,a);break t}else if(o!==u){u=vi(Error(s(424)),n),_o(u),n=Om(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=bi(e.firstChild),Dn=n,be=!0,Fa=null,Mi=!0,a=Dp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Es(),o===u){n=ua(e,n,a);break t}Ln(e,n,o,a)}n=n.child}return n;case 26:return Ql(e,n),e===null?(a=Qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,o=dc(at.current).createElement(a),o[fn]=n,o[wn]=e,Nn(o,a,e),hn(o),n.stateNode=o):n.memoizedState=Qg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&be&&(o=n.stateNode=qg(n.type,n.pendingProps,at.current),Dn=n,Mi=!0,u=Ze,Ja(n.type)?(_h=u,Ze=bi(o.firstChild)):Ze=u),Ln(e,n,n.pendingProps.children,a),Ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((u=o=Ze)&&(o=jx(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Dn=n,Ze=bi(o.firstChild),Mi=!1,u=!0):u=!1),u||Ba(n)),ie(n),u=n.type,h=n.pendingProps,v=e!==null?e.memoizedProps:null,o=h.children,hh(u,h)?o=null:v!==null&&hh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(e,n,hx,null,null,a),Xo._currentValue=u),Ql(e,n),Ln(e,n,o,a),n.child;case 6:return e===null&&be&&((e=a=Ze)&&(a=Jx(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Dn=n,Ze=null,e=!0):e=!1),e||Ba(n)),null;case 13:return Im(e,n,a);case 4:return Mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ds(n,null,o,a):Ln(e,n,o,a),n.child;case 11:return Rm(e,n,n.type,n.pendingProps,a);case 7:return Ln(e,n,n.pendingProps,a),n.child;case 8:return Ln(e,n,n.pendingProps.children,a),n.child;case 12:return Ln(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,za(n,n.type,o.value),Ln(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,As(n),u=Un(u),o=o(u),n.flags|=1,Ln(e,n,o,a),n.child;case 14:return Cm(e,n,n.type,n.pendingProps,a);case 15:return wm(e,n,n.type,n.pendingProps,a);case 19:return Bm(e,n,a);case 31:return Sx(e,n,a);case 22:return Dm(e,n,a,n.pendingProps);case 24:return As(n),o=Un(dn),e===null?(u=tf(),u===null&&(u=Xe,h=Ju(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},nf(n),za(n,dn,u)):((e.lanes&a)!==0&&(af(e,n),Eo(n,null,null,a),bo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,dn,o)):(o=h.cache,za(n,dn,o),o!==u.cache&&ju(n,[dn],a,!0))),Ln(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function fa(e){e.flags|=4}function zf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(hg())e.flags|=8192;else throw ws=Ol,ef}else e.flags&=-16777217}function Hm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!e_(n))if(hg())e.flags|=8192;else throw ws=Ol,ef}function Jl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?St():536870912,e.lanes|=n,gr|=n)}function Do(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function yx(e,n,a){var o=n.pendingProps;switch(Yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(dn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?fa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zu())),Ke(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(fa(n),h!==null?(Ke(n),Hm(n,h)):(Ke(n),zf(n,u,null,o,a))):h?h!==e.memoizedState?(fa(n),Ke(n),Hm(n,h)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&fa(n),Ke(n),zf(n,u,e,o,a)),null;case 27:if(Qt(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Rt.current,ir(n)?xp(n):(e=qg(u,o,a),n.stateNode=e,fa(n))}return Ke(n),null;case 5:if(Qt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(h=Rt.current,ir(n))xp(n);else{var v=dc(at.current);switch(h){case 1:h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=v.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}h[fn]=n,h[wn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)h.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=h;t:switch(Nn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&fa(n)}}return Ke(n),zf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,ir(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ig(e.nodeValue,a)),e||Ba(n,!0)}else e=dc(e).createTextNode(o),e[fn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ir(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[fn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),Ke(n),null);case 4:return zt(),e===null&&oh(n.stateNode.containerInfo),Ke(n),null;case 10:return oa(n.type),Ke(n),null;case 19:if(Z(cn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Do(o,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=zl(e),h!==null){for(n.flags|=128,Do(o,!1),e=h.updateQueue,n.updateQueue=e,Jl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)pp(a,e),a=a.sibling;return yt(cn,cn.current&1|2),be&&sa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Be()>ic&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304)}else{if(!u)if(e=zl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Jl(n,e),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!be)return Ke(n),null}else 2*Be()-o.renderingStartTime>ic&&a!==536870912&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Be(),e.sibling=null,a=cn.current,yt(cn,u?a&1|2:a&1),be&&sa(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return li(n),lf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Z(Rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(dn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function bx(e,n){switch(Yu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return oa(dn),zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(li(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(cn),null;case 4:return zt(),null;case 10:return oa(n.type),null;case 22:case 23:return li(n),lf(),e!==null&&Z(Rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return oa(dn),null;case 25:return null;default:return null}}function Gm(e,n){switch(Yu(n),n.tag){case 3:oa(dn),zt();break;case 26:case 27:case 5:Qt(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:Z(cn);break;case 10:oa(n.type);break;case 22:case 23:li(n),lf(),e!==null&&Z(Rs);break;case 24:oa(dn)}}function Uo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,v=a.inst;o=h(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){Fe(n,n.return,R)}}function Wa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var z=a,et=R;try{et()}catch(dt){Fe(u,z,dt)}}}o=o.next}while(o!==h)}}catch(dt){Fe(n,n.return,dt)}}function Vm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Lp(n,a)}catch(o){Fe(e,e.return,o)}}}function km(e,n,a){a.props=Ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function Lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function ki(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function Xm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function Hf(e,n,a){try{var o=e.stateNode;Wx(o,e.type,a,n),o[wn]=n}catch(u){Fe(e,e.return,u)}}function Wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function Gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=na));else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Vf(e,n,a),e=e.sibling;e!==null;)Vf(e,n,a),e=e.sibling}function $l(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($l(e,n,a),e=e.sibling;e!==null;)$l(e,n,a),e=e.sibling}function Ym(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[fn]=e,n[wn]=a}catch(h){Fe(e,e.return,h)}}var ha=!1,gn=!1,kf=!1,qm=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function Ex(e,n){if(e=e.containerInfo,uh=Sc,e=sp(e),Ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var v=0,R=-1,z=-1,et=0,dt=0,vt=e,ot=null;e:for(;;){for(var lt;vt!==a||u!==0&&vt.nodeType!==3||(R=v+u),vt!==h||o!==0&&vt.nodeType!==3||(z=v+o),vt.nodeType===3&&(v+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)ot=vt,vt=lt;for(;;){if(vt===e)break e;if(ot===a&&++et===u&&(R=v),ot===h&&++dt===o&&(z=v),(lt=vt.nextSibling)!==null)break;vt=ot,ot=vt.parentNode}vt=lt}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:e,selectionRange:a},Sc=!1,Tn=n;Tn!==null;)if(n=Tn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Tn=e;else for(;Tn!==null;){switch(n=Tn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Xt=Ls(a.type,u);e=o.getSnapshotBeforeUpdate(Xt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Fe(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ph(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ph(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Tn=e;break}Tn=n.return}}function Zm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pa(e,a),o&4&&Uo(5,a);break;case 1:if(pa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Fe(a,a.return,v)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Fe(a,a.return,v)}}o&64&&Vm(a),o&512&&Lo(a,a.return);break;case 3:if(pa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(e,n)}catch(v){Fe(a,a.return,v)}}break;case 27:n===null&&o&4&&Ym(a);case 26:case 5:pa(e,a),n===null&&o&4&&Xm(a),o&512&&Lo(a,a.return);break;case 12:pa(e,a);break;case 31:pa(e,a),o&4&&jm(e,a);break;case 13:pa(e,a),o&4&&Jm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Nx.bind(null,a),$x(e,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){n=n!==null&&n.memoizedState!==null||gn,u=ha;var h=gn;ha=o,(gn=n)&&!h?ma(e,a,(a.subtreeFlags&8772)!==0):pa(e,a),ha=u,gn=h}break;case 30:break;default:pa(e,a)}}function Km(e){var n=e.alternate;n!==null&&(e.alternate=null,Km(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&La(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Zn=!1;function da(e,n,a){for(a=a.child;a!==null;)Qm(e,n,a),a=a.sibling}function Qm(e,n,a){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:gn||ki(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||ki(a,n);var o=$e,u=Zn;Ja(a.type)&&($e=a.stateNode,Zn=!1),da(e,n,a),Go(a.stateNode),$e=o,Zn=u;break;case 5:gn||ki(a,n);case 6:if(o=$e,u=Zn,$e=null,da(e,n,a),$e=o,Zn=u,$e!==null)if(Zn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(h){Fe(a,n,h)}else try{$e.removeChild(a.stateNode)}catch(h){Fe(a,n,h)}break;case 18:$e!==null&&(Zn?(e=$e,Vg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Er(e)):Vg($e,a.stateNode));break;case 4:o=$e,u=Zn,$e=a.stateNode.containerInfo,Zn=!0,da(e,n,a),$e=o,Zn=u;break;case 0:case 11:case 14:case 15:Wa(2,a,n),gn||Wa(4,a,n),da(e,n,a);break;case 1:gn||(ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&km(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,da(e,n,a),gn=o;break;default:da(e,n,a)}}function jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(a){Fe(n,n.return,a)}}}function Jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(a){Fe(n,n.return,a)}}function Tx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new qm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new qm),n;default:throw Error(s(435,e.tag))}}function tc(e,n){var a=Tx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Px.bind(null,e,o);o.then(u,u)}})}function Kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,v=n,R=v;t:for(;R!==null;){switch(R.tag){case 27:if(Ja(R.type)){$e=R.stateNode,Zn=!1;break t}break;case 5:$e=R.stateNode,Zn=!1;break t;case 3:case 4:$e=R.stateNode.containerInfo,Zn=!0;break t}R=R.return}if($e===null)throw Error(s(160));Qm(h,v,u),$e=null,Zn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,e),n=n.sibling}var wi=null;function $m(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(n,e),Qn(e),o&4&&(Wa(3,e,e.return),Uo(3,e),Wa(5,e,e.return));break;case 1:Kn(n,e),Qn(e),o&512&&(gn||a===null||ki(a,a.return)),o&64&&ha&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(Kn(n,e),Qn(e),o&512&&(gn||a===null||ki(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ua]||h[fn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Nn(h,o,a),h[fn]=e,hn(h),o=h;break t;case"link":var v=$g("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(h=v[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break e}}h=u.createElement(o),Nn(h,o,a),u.head.appendChild(h);break;case"meta":if(v=$g("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(h=v[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break e}}h=u.createElement(o),Nn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[fn]=e,hn(h),o=h}e.stateNode=o}else t_(u,e.type,e.stateNode);else e.stateNode=Jg(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?t_(u,e.type,e.stateNode):Jg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,e),Qn(e),o&512&&(gn||a===null||ki(a,a.return)),a!==null&&o&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,e),Qn(e),o&512&&(gn||a===null||ki(a,a.return)),e.flags&32){u=e.stateNode;try{ai(u,"")}catch(Xt){Fe(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Hf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(kf=!0);break;case 6:if(Kn(n,e),Qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Fe(e,e.return,Xt)}}break;case 3:if(gc=null,u=wi,wi=pc(n.containerInfo),Kn(n,e),wi=u,Qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Xt){Fe(e,e.return,Xt)}kf&&(kf=!1,tg(e));break;case 4:o=wi,wi=pc(e.stateNode.containerInfo),Kn(n,e),Qn(e),wi=o;break;case 12:Kn(n,e),Qn(e);break;case 31:Kn(n,e),Qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,tc(e,o)));break;case 13:Kn(n,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=Be()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,tc(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,et=ha,dt=gn;if(ha=et||u,gn=dt||z,Kn(n,e),gn=dt,ha=et,Qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||ha||gn||Ns(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(h=z.stateNode,u)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=z.stateNode;var vt=z.memoizedProps.style,ot=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Xt){Fe(z,z.return,Xt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Xt){Fe(z,z.return,Xt)}}}else if(n.tag===18){if(a===null){z=n;try{var lt=z.stateNode;u?kg(lt,!0):kg(z.stateNode,!1)}catch(Xt){Fe(z,z.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,tc(e,a))));break;case 19:Kn(n,e),Qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,tc(e,o)));break;case 30:break;case 21:break;default:Kn(n,e),Qn(e)}}function Qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Wm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Gf(e);$l(e,h,u);break;case 5:var v=a.stateNode;a.flags&32&&(ai(v,""),a.flags&=-33);var R=Gf(e);$l(e,R,v);break;case 3:case 4:var z=a.stateNode.containerInfo,et=Gf(e);Vf(e,et,z);break;default:throw Error(s(161))}}catch(dt){Fe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function tg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;tg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function pa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zm(e,n.alternate,n),n=n.sibling}function Ns(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Wa(4,n,n.return),Ns(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),Ns(n);break;case 27:Go(n.stateNode);case 26:case 5:ki(n,n.return),Ns(n);break;case 22:n.memoizedState===null&&Ns(n);break;case 30:Ns(n);break;default:Ns(n)}e=e.sibling}}function ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,v=h.flags;switch(h.tag){case 0:case 11:case 15:ma(u,h,a),Uo(4,h);break;case 1:if(ma(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Fe(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Up(z[u],R)}catch(et){Fe(o,o.return,et)}}a&&v&64&&Vm(h),Lo(h,h.return);break;case 27:Ym(h);case 26:case 5:ma(u,h,a),a&&o===null&&v&4&&Xm(h),Lo(h,h.return);break;case 12:ma(u,h,a);break;case 31:ma(u,h,a),a&&v&4&&jm(u,h);break;case 13:ma(u,h,a),a&&v&4&&Jm(u,h);break;case 22:h.memoizedState===null&&ma(u,h,a),Lo(h,h.return);break;case 30:break;default:ma(u,h,a)}n=n.sibling}}function Xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vo(a))}function Wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e))}function Di(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)eg(e,n,a,o),n=n.sibling}function eg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,o),u&2048&&Uo(9,n);break;case 1:Di(e,n,a,o);break;case 3:Di(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e)));break;case 12:if(u&2048){Di(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,v=h.id,R=h.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else Di(e,n,a,o);break;case 31:Di(e,n,a,o);break;case 13:Di(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,v=n.alternate,n.memoizedState!==null?h._visibility&2?Di(e,n,a,o):No(e,n):h._visibility&2?Di(e,n,a,o):(h._visibility|=2,dr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Xf(v,n);break;case 24:Di(e,n,a,o),u&2048&&Wf(n.alternate,n);break;default:Di(e,n,a,o)}}function dr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,v=n,R=a,z=o,et=v.flags;switch(v.tag){case 0:case 11:case 15:dr(h,v,R,z,u),Uo(8,v);break;case 23:break;case 22:var dt=v.stateNode;v.memoizedState!==null?dt._visibility&2?dr(h,v,R,z,u):No(h,v):(dt._visibility|=2,dr(h,v,R,z,u)),u&&et&2048&&Xf(v.alternate,v);break;case 24:dr(h,v,R,z,u),u&&et&2048&&Wf(v.alternate,v);break;default:dr(h,v,R,z,u)}n=n.sibling}}function No(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:No(a,o),u&2048&&Xf(o.alternate,o);break;case 24:No(a,o),u&2048&&Wf(o.alternate,o);break;default:No(a,o)}n=n.sibling}}var Po=8192;function pr(e,n,a){if(e.subtreeFlags&Po)for(e=e.child;e!==null;)ng(e,n,a),e=e.sibling}function ng(e,n,a){switch(e.tag){case 26:pr(e,n,a),e.flags&Po&&e.memoizedState!==null&&fS(a,wi,e.memoizedState,e.memoizedProps);break;case 5:pr(e,n,a);break;case 3:case 4:var o=wi;wi=pc(e.stateNode.containerInfo),pr(e,n,a),wi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,pr(e,n,a),Po=o):pr(e,n,a));break;default:pr(e,n,a)}}function ig(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,sg(o,e)}ig(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ag(e),e=e.sibling}function ag(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&Wa(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ec(e)):Oo(e);break;default:Oo(e)}}function ec(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,sg(o,e)}ig(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}e=e.sibling}}function sg(e,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else t:for(a=e;Tn!==null;){o=Tn;var u=o.sibling,h=o.return;if(Km(o),o===a){Tn=null;break t}if(u!==null){u.return=h,Tn=u;break t}Tn=h}}}var Ax={getCacheForType:function(e){var n=Un(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(dn).controller.signal}},Rx=typeof WeakMap=="function"?WeakMap:Map,we=0,Xe=null,ge=null,ve=0,Ie=0,ci=null,Ya=!1,mr=!1,Yf=!1,ga=0,on=0,qa=0,Ps=0,qf=0,ui=0,gr=0,Io=null,jn=null,Zf=!1,nc=0,rg=0,ic=1/0,ac=null,Za=null,Sn=0,Ka=null,_r=null,_a=0,Kf=0,Qf=null,og=null,Fo=0,jf=null;function fi(){return(we&2)!==0&&ve!==0?ve&-ve:I.T!==null?ih():so()}function lg(){if(ui===0)if((ve&536870912)===0||be){var e=ae;ae<<=1,(ae&3932160)===0&&(ae=262144),ui=e}else ui=536870912;return e=oi.current,e!==null&&(e.flags|=32),ui}function Jn(e,n,a){(e===Xe&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(vr(e,0),Qa(e,ve,ui,!1)),Gt(e,a),((we&2)===0||e!==Xe)&&(e===Xe&&((we&2)===0&&(Ps|=a),on===4&&Qa(e,ve,ui,!1)),Xi(e))}function cg(e,n,a){if((we&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?Dx(e,n):$f(e,n,!0),h=o;do{if(u===0){mr&&!o&&Qa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Cx(a)){u=$f(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=e;u=Io;var z=R.current.memoizedState.isDehydrated;if(z&&(vr(R,v).flags|=256),v=$f(R,v,!1),v!==2){if(Yf&&!z){R.errorRecoveryDisabledLanes|=h,Ps|=h,u=4;break t}h=jn,jn=u,h!==null&&(jn===null?jn=h:jn.push.apply(jn,h))}u=v}if(h=!1,u!==2)continue}}if(u===1){vr(e,0),Qa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,ui,!Ya);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=nc+300-Be(),10<u)){if(Qa(o,n,ui,!Ya),pt(o,0,!0)!==0)break t;_a=n,o.timeoutHandle=Hg(ug.bind(null,o,a,jn,ac,Zf,n,ui,Ps,gr,Ya,h,"Throttled",-0,0),u);break t}ug(o,a,jn,ac,Zf,n,ui,Ps,gr,Ya,h,null,-0,0)}}break}while(!0);Xi(e)}function ug(e,n,a,o,u,h,v,R,z,et,dt,vt,ot,lt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},ng(n,h,vt);var Xt=(h&62914560)===h?nc-Be():(h&4194048)===h?rg-Be():0;if(Xt=hS(vt,Xt),Xt!==null){_a=h,e.cancelPendingCommit=Xt(vg.bind(null,e,n,h,a,o,u,v,R,z,dt,vt,null,ot,lt)),Qa(e,h,v,!et);return}}vg(e,n,h,a,o,u,v,R,z)}function Cx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!si(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(e,n,a,o){n&=~qf,n&=~Ps,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Ft(u),v=1<<h;o[h]=-1,u&=~v}a!==0&&Le(e,a,n)}function sc(){return(we&6)===0?(Bo(0),!1):!0}function Jf(){if(ge!==null){if(Ie===0)var e=ge.return;else e=ge,ra=Ts=null,pf(e),lr=null,So=0,e=ge;for(;e!==null;)Gm(e.alternate,e),e=e.return;ge=null}}function vr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Zx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),_a=0,Jf(),Xe=e,ge=a=aa(e.current,null),ve=n,Ie=0,ci=null,Ya=!1,mr=Ct(e,n),Yf=!1,gr=ui=qf=Ps=qa=on=0,jn=Io=null,Zf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),h=1<<u;n|=e[u],o&=~h}return ga=n,Al(),a}function fg(e,n){ce=null,I.H=Co,n===or||n===Pl?(n=Rp(),Ie=3):n===ef?(n=Rp(),Ie=4):Ie=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,ge===null&&(on=1,Zl(e,vi(n,e.current)))}function hg(){var e=oi.current;return e===null?!0:(ve&4194048)===ve?yi===null:(ve&62914560)===ve||(ve&536870912)!==0?e===yi:!1}function dg(){var e=I.H;return I.H=Co,e===null?Co:e}function pg(){var e=I.A;return I.A=Ax,e}function rc(){on=4,Ya||(ve&4194048)!==ve&&oi.current!==null||(mr=!0),(qa&134217727)===0&&(Ps&134217727)===0||Xe===null||Qa(Xe,ve,ui,!1)}function $f(e,n,a){var o=we;we|=2;var u=dg(),h=pg();(Xe!==e||ve!==n)&&(ac=null,vr(e,n)),n=!1;var v=on;t:do try{if(Ie!==0&&ge!==null){var R=ge,z=ci;switch(Ie){case 8:Jf(),v=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var et=Ie;if(Ie=0,ci=null,xr(e,R,z,et),a&&mr){v=0;break t}break;default:et=Ie,Ie=0,ci=null,xr(e,R,z,et)}}wx(),v=on;break}catch(dt){fg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ra=Ts=null,we=o,I.H=u,I.A=h,ge===null&&(Xe=null,ve=0,Al()),v}function wx(){for(;ge!==null;)mg(ge)}function Dx(e,n){var a=we;we|=2;var o=dg(),u=pg();Xe!==e||ve!==n?(ac=null,ic=Be()+500,vr(e,n)):mr=Ct(e,n);t:do try{if(Ie!==0&&ge!==null){n=ge;var h=ci;e:switch(Ie){case 1:Ie=0,ci=null,xr(e,n,h,1);break;case 2:case 9:if(Tp(h)){Ie=0,ci=null,gg(n);break}n=function(){Ie!==2&&Ie!==9||Xe!==e||(Ie=7),Xi(e)},h.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Tp(h)?(Ie=0,ci=null,gg(n)):(Ie=0,ci=null,xr(e,n,h,7));break;case 5:var v=null;switch(ge.tag){case 26:v=ge.memoizedState;case 5:case 27:var R=ge;if(v?e_(v):R.stateNode.complete){Ie=0,ci=null;var z=R.sibling;if(z!==null)ge=z;else{var et=R.return;et!==null?(ge=et,oc(et)):ge=null}break e}}Ie=0,ci=null,xr(e,n,h,5);break;case 6:Ie=0,ci=null,xr(e,n,h,6);break;case 8:Jf(),on=6;break t;default:throw Error(s(462))}}Ux();break}catch(dt){fg(e,dt)}while(!0);return ra=Ts=null,I.H=o,I.A=u,we=a,ge!==null?0:(Xe=null,ve=0,Al(),on)}function Ux(){for(;ge!==null&&!sn();)mg(ge)}function mg(e){var n=zm(e.alternate,e,ga);e.memoizedProps=e.pendingProps,n===null?oc(e):ge=n}function gg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Nm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Nm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:pf(n);default:Gm(a,n),n=ge=pp(n,ga),n=zm(a,n,ga)}e.memoizedProps=e.pendingProps,n===null?oc(e):ge=n}function xr(e,n,a,o){ra=Ts=null,pf(n),lr=null,So=0;var u=n.return;try{if(xx(e,u,n,a,ve)){on=1,Zl(e,vi(a,e.current)),ge=null;return}}catch(h){if(u!==null)throw ge=u,h;on=1,Zl(e,vi(a,e.current)),ge=null;return}n.flags&32768?(be||o===1?e=!0:mr||(ve&536870912)!==0?e=!1:(Ya=e=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),_g(n,e)):oc(n)}function oc(e){var n=e;do{if((n.flags&32768)!==0){_g(n,Ya);return}e=n.return;var a=yx(n.alternate,n,ga);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);on===0&&(on=5)}function _g(e,n){do{var a=bx(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);on=6,ge=null}function vg(e,n,a,o,u,h,v,R,z){e.cancelPendingCommit=null;do lc();while(Sn!==0);if((we&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Hu,Qe(e,a,h,v,R,z),e===Xe&&(ge=Xe=null,ve=0),_r=n,Ka=e,_a=a,Kf=h,Qf=u,og=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ox(K,function(){return bg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=H.p,H.p=2,v=we,we|=4;try{Ex(e,n,a)}finally{we=v,H.p=u,I.T=o}}Sn=1,xg(),Sg(),Mg()}}function xg(){if(Sn===1){Sn=0;var e=Ka,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=we;we|=4;try{$m(n,e);var h=fh,v=sp(e.containerInfo),R=h.focusedElem,z=h.selectionRange;if(v!==R&&R&&R.ownerDocument&&ap(R.ownerDocument.documentElement,R)){if(z!==null&&Ou(R)){var et=z.start,dt=z.end;if(dt===void 0&&(dt=et),"selectionStart"in R)R.selectionStart=et,R.selectionEnd=Math.min(dt,R.value.length);else{var vt=R.ownerDocument||document,ot=vt&&vt.defaultView||window;if(ot.getSelection){var lt=ot.getSelection(),Xt=R.textContent.length,ee=Math.min(z.start,Xt),Ge=z.end===void 0?ee:Math.min(z.end,Xt);!lt.extend&&ee>Ge&&(v=Ge,Ge=ee,ee=v);var q=ip(R,ee),V=ip(R,Ge);if(q&&V&&(lt.rangeCount!==1||lt.anchorNode!==q.node||lt.anchorOffset!==q.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var tt=vt.createRange();tt.setStart(q.node,q.offset),lt.removeAllRanges(),ee>Ge?(lt.addRange(tt),lt.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),lt.addRange(tt))}}}}for(vt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var gt=vt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Sc=!!uh,fh=uh=null}finally{we=u,H.p=o,I.T=a}}e.current=n,Sn=2}}function Sg(){if(Sn===2){Sn=0;var e=Ka,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=we;we|=4;try{Zm(e,n.alternate,n)}finally{we=u,H.p=o,I.T=a}}Sn=3}}function Mg(){if(Sn===4||Sn===3){Sn=0,W();var e=Ka,n=_r,a=_a,o=og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,_r=Ka=null,yg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Za=null),ao(a),n=n.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=H.p,H.p=2,I.T=null;try{for(var h=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];h(R.value,{componentStack:R.stack})}}finally{I.T=n,H.p=u}}(_a&3)!==0&&lc(),Xi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===jf?Fo++:(Fo=0,jf=e):Fo=0,Bo(0)}}function yg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,vo(n)))}function lc(){return xg(),Sg(),Mg(),bg()}function bg(){if(Sn!==5)return!1;var e=Ka,n=Kf;Kf=0;var a=ao(_a),o=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=Qf,Qf=null;var h=Ka,v=_a;if(Sn=0,_r=Ka=null,_a=0,(we&6)!==0)throw Error(s(331));var R=we;if(we|=4,ag(h.current),eg(h,h.current,v,a),we=R,Bo(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ct,h)}catch{}return!0}finally{H.p=u,I.T=o,yg(e,n)}}function Eg(e,n,a){n=vi(a,n),n=wf(e.stateNode,n,2),e=Va(e,n,2),e!==null&&(Gt(e,2),Xi(e))}function Fe(e,n,a){if(e.tag===3)Eg(e,e,a);else for(;n!==null;){if(n.tag===3){Eg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){e=vi(a,e),a=Tm(2),o=Va(n,a,2),o!==null&&(Am(a,o,n,e),Gt(o,2),Xi(o));break}}n=n.return}}function th(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Rx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Yf=!0,u.add(a),e=Lx.bind(null,e,n,a),n.then(e,e))}function Lx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ve&a)===a&&(on===4||on===3&&(ve&62914560)===ve&&300>Be()-nc?(we&2)===0&&vr(e,0):qf|=a,gr===ve&&(gr=0)),Xi(e)}function Tg(e,n){n===0&&(n=St()),e=ys(e,n),e!==null&&(Gt(e,n),Xi(e))}function Nx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Tg(e,a)}function Px(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Tg(e,a)}function Ox(e,n){return ln(e,n)}var cc=null,Sr=null,eh=!1,uc=!1,nh=!1,ja=0;function Xi(e){e!==Sr&&e.next===null&&(Sr===null?cc=Sr=e:Sr=Sr.next=e),uc=!0,eh||(eh=!0,Fx())}function Bo(e,n){if(!nh&&uc){nh=!0;do for(var a=!1,o=cc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var v=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Ft(42|e)+1)-1,h&=u&~(v&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,wg(o,h))}else h=ve,h=pt(o,o===Xe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ct(o,h)||(a=!0,wg(o,h));o=o.next}while(a);nh=!1}}function Ix(){Ag()}function Ag(){uc=eh=!1;var e=0;ja!==0&&qx()&&(e=ja);for(var n=Be(),a=null,o=cc;o!==null;){var u=o.next,h=Rg(o,n);h===0?(o.next=null,a===null?cc=u:a.next=u,u===null&&(Sr=a)):(a=o,(e!==0||(h&3)!==0)&&(uc=!0)),o=u}Sn!==0&&Sn!==5||Bo(e),ja!==0&&(ja=0)}function Rg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var v=31-Ft(h),R=1<<v,z=u[v];z===-1?((R&a)===0||(R&o)!==0)&&(u[v]=It(R,n)):z<=n&&(e.expiredLanes|=R),h&=~R}if(n=Xe,a=ve,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&We(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&We(o),ao(a)){case 2:case 8:a=b;break;case 32:a=K;break;case 268435456:a=ut;break;default:a=K}return o=Cg.bind(null,e),a=ln(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&We(o),e.callbackPriority=2,e.callbackNode=null,2}function Cg(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(lc()&&e.callbackNode!==a)return null;var o=ve;return o=pt(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(cg(e,o,n),Rg(e,Be()),e.callbackNode!=null&&e.callbackNode===a?Cg.bind(null,e):null)}function wg(e,n){if(lc())return null;cg(e,n,!0)}function Fx(){Kx(function(){(we&6)!==0?ln(D,Ix):Ag()})}function ih(){if(ja===0){var e=sr;e===0&&(e=jt,jt<<=1,(jt&261888)===0&&(jt=256)),ja=e}return ja}function Dg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vs(""+e)}function Ug(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Bx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Dg((u[wn]||null).action),v=o.submitter;v&&(n=(n=v[wn]||null)?Dg(n.formAction):v.getAttribute("formAction"),n!==null&&(h=n,v=null));var R=new yl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var z=v?Ug(u,v):new FormData(u);bf(a,{pending:!0,data:z,method:u.method,action:h},null,z)}}else typeof h=="function"&&(R.preventDefault(),z=v?Ug(u,v):new FormData(u),bf(a,{pending:!0,data:z,method:u.method,action:h},h,z))},currentTarget:u}]})}}for(var ah=0;ah<zu.length;ah++){var sh=zu[ah],zx=sh.toLowerCase(),Hx=sh[0].toUpperCase()+sh.slice(1);Ci(zx,"on"+Hx)}Ci(lp,"onAnimationEnd"),Ci(cp,"onAnimationIteration"),Ci(up,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(nx,"onTransitionRun"),Ci(ix,"onTransitionStart"),Ci(ax,"onTransitionCancel"),Ci(fp,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),X("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),X("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),X("onBeforeInput",["compositionend","keypress","textInput","paste"]),X("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function Lg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],z=R.instance,et=R.currentTarget;if(R=R.listener,z!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=et;try{h(u)}catch(dt){Tl(dt)}u.currentTarget=null,h=z}else for(v=0;v<o.length;v++){if(R=o[v],z=R.instance,et=R.currentTarget,R=R.listener,z!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=et;try{h(u)}catch(dt){Tl(dt)}u.currentTarget=null,h=z}}}}function _e(e,n){var a=n[ms];a===void 0&&(a=n[ms]=new Set);var o=e+"__bubble";a.has(o)||(Ng(n,e,2,!1),a.add(o))}function rh(e,n,a){var o=0;n&&(o|=4),Ng(a,e,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function oh(e){if(!e[fc]){e[fc]=!0,vl.forEach(function(a){a!=="selectionchange"&&(Gx.has(a)||rh(a,!1,e),rh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fc]||(n[fc]=!0,rh("selectionchange",!1,n))}}function Ng(e,n,a,o){switch(l_(n)){case 2:var u=mS;break;case 8:u=gS;break;default:u=yh}a=u.bind(null,n,a,e),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function lh(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=ta(R),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){o=h=v;continue t}R=R.parentNode}}o=o.return}B0(function(){var et=h,dt=Eu(a),vt=[];t:{var ot=hp.get(e);if(ot!==void 0){var lt=yl,Xt=e;switch(e){case"keypress":if(Sl(a)===0)break t;case"keydown":case"keyup":lt=Pv;break;case"focusin":Xt="focus",lt=Du;break;case"focusout":Xt="blur",lt=Du;break;case"beforeblur":case"afterblur":lt=Du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=G0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Fv;break;case lp:case cp:case up:lt=Tv;break;case fp:lt=zv;break;case"scroll":case"scrollend":lt=Sv;break;case"wheel":lt=Gv;break;case"copy":case"cut":case"paste":lt=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=k0;break;case"toggle":case"beforetoggle":lt=kv}var ee=(n&4)!==0,Ge=!ee&&(e==="scroll"||e==="scrollend"),q=ee?ot!==null?ot+"Capture":null:ot;ee=[];for(var V=et,tt;V!==null;){var gt=V;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||q===null||(gt=ro(V,q),gt!=null&&ee.push(Ho(V,gt,tt))),Ge)break;V=V.return}0<ee.length&&(ot=new lt(ot,Xt,null,a,dt),vt.push({event:ot,listeners:ee}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",ot&&a!==bu&&(Xt=a.relatedTarget||a.fromElement)&&(ta(Xt)||Xt[Yn]))break t;if((lt||ot)&&(ot=dt.window===dt?dt:(ot=dt.ownerDocument)?ot.defaultView||ot.parentWindow:window,lt?(Xt=a.relatedTarget||a.toElement,lt=et,Xt=Xt?ta(Xt):null,Xt!==null&&(Ge=c(Xt),ee=Xt.tag,Xt!==Ge||ee!==5&&ee!==27&&ee!==6)&&(Xt=null)):(lt=null,Xt=et),lt!==Xt)){if(ee=G0,gt="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ee=k0,gt="onPointerLeave",q="onPointerEnter",V="pointer"),Ge=lt==null?ot:_s(lt),tt=Xt==null?ot:_s(Xt),ot=new ee(gt,V+"leave",lt,a,dt),ot.target=Ge,ot.relatedTarget=tt,gt=null,ta(dt)===et&&(ee=new ee(q,V+"enter",Xt,a,dt),ee.target=tt,ee.relatedTarget=Ge,gt=ee),Ge=gt,lt&&Xt)e:{for(ee=Vx,q=lt,V=Xt,tt=0,gt=q;gt;gt=ee(gt))tt++;gt=0;for(var $t=V;$t;$t=ee($t))gt++;for(;0<tt-gt;)q=ee(q),tt--;for(;0<gt-tt;)V=ee(V),gt--;for(;tt--;){if(q===V||V!==null&&q===V.alternate){ee=q;break e}q=ee(q),V=ee(V)}ee=null}else ee=null;lt!==null&&Pg(vt,ot,lt,ee,!1),Xt!==null&&Ge!==null&&Pg(vt,Ge,Xt,ee,!0)}}t:{if(ot=et?_s(et):window,lt=ot.nodeName&&ot.nodeName.toLowerCase(),lt==="select"||lt==="input"&&ot.type==="file")var Ae=j0;else if(K0(ot))if(J0)Ae=$v;else{Ae=jv;var Yt=Qv}else lt=ot.nodeName,!lt||lt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?et&&De(et.elementType)&&(Ae=j0):Ae=Jv;if(Ae&&(Ae=Ae(e,et))){Q0(vt,Ae,a,dt);break t}Yt&&Yt(e,ot,et),e==="focusout"&&et&&ot.type==="number"&&et.memoizedProps.value!=null&&me(ot,"number",ot.value)}switch(Yt=et?_s(et):window,e){case"focusin":(K0(Yt)||Yt.contentEditable==="true")&&(js=Yt,Iu=et,mo=null);break;case"focusout":mo=Iu=js=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,rp(vt,a,dt);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":rp(vt,a,dt)}var ue;if(Lu)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Qs?q0(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(X0&&a.locale!=="ko"&&(Qs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Qs&&(ue=z0()):(Oa=dt,Ru="value"in Oa?Oa.value:Oa.textContent,Qs=!0)),Yt=hc(et,xe),0<Yt.length&&(xe=new V0(xe,e,null,a,dt),vt.push({event:xe,listeners:Yt}),ue?xe.data=ue:(ue=Z0(a),ue!==null&&(xe.data=ue)))),(ue=Wv?Yv(e,a):qv(e,a))&&(xe=hc(et,"onBeforeInput"),0<xe.length&&(Yt=new V0("onBeforeInput","beforeinput",null,a,dt),vt.push({event:Yt,listeners:xe}),Yt.data=ue)),Bx(vt,e,et,a,dt)}Lg(vt,n)})}function Ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function hc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=ro(e,a),u!=null&&o.unshift(Ho(e,u,h)),u=ro(e,n),u!=null&&o.push(Ho(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Vx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pg(e,n,a,o,u){for(var h=n._reactName,v=[];a!==null&&a!==o;){var R=a,z=R.alternate,et=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||et===null||(z=et,u?(et=ro(a,h),et!=null&&v.unshift(Ho(a,et,z))):u||(et=ro(a,h),et!=null&&v.push(Ho(a,et,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var kx=/\r\n?/g,Xx=/\u0000|\uFFFD/g;function Og(e){return(typeof e=="string"?e:""+e).replace(kx,`
`).replace(Xx,"")}function Ig(e,n){return n=Og(n),Og(e)===n}function He(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ai(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ai(e,""+o);break;case"className":kt(e,"class",o);break;case"tabIndex":kt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(e,a,o);break;case"style":Ri(e,o,h);break;case"data":if(n!=="object"){kt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=na);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=vs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Ut(e,"popover",o);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ut(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hi.get(a)||a,Ut(e,a,o))}}function ch(e,n,a,o,u,h){switch(a){case"style":Ri(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ai(e,o):(typeof o=="number"||typeof o=="bigint")&&ai(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[wn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ut(e,a,o)}}}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var v=a[h];if(v!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,h,v,a,null)}}u&&He(e,n,"srcSet",a.srcSet,a,null),o&&He(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var R=h=v=u=null,z=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":v=dt;break;case"checked":z=dt;break;case"defaultChecked":et=dt;break;case"value":h=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:He(e,n,o,dt,a,null)}}In(e,h,R,z,et,v,u,!1);return;case"select":_e("invalid",e),o=v=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:He(e,n,u,R,a,null)}n=h,a=v,e.multiple=!!o,n!=null?xn(e,!!o,n,!1):a!=null&&xn(e,!!o,a,!0);return;case"textarea":_e("invalid",e),h=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:He(e,n,v,R,a,null)}Ai(e,o,u,h);return;case"option":for(z in a)a.hasOwnProperty(z)&&(o=a[z],o!=null)&&(z==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":He(e,n,z,o,a,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)_e(zo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,et,o,a,null)}return;default:if(De(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&ch(e,n,dt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&He(e,n,R,o,a,null))}function Wx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,v=null,R=null,z=null,et=null,dt=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":z=vt;default:o.hasOwnProperty(lt)||He(e,n,lt,null,o,vt)}}for(var ot in o){var lt=o[ot];if(vt=a[ot],o.hasOwnProperty(ot)&&(lt!=null||vt!=null))switch(ot){case"type":h=lt;break;case"name":u=lt;break;case"checked":et=lt;break;case"defaultChecked":dt=lt;break;case"value":v=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==vt&&He(e,n,ot,lt,o,vt)}}Bt(e,v,R,z,et,dt,h,u);return;case"select":lt=v=R=ot=null;for(h in a)if(z=a[h],a.hasOwnProperty(h)&&z!=null)switch(h){case"value":break;case"multiple":lt=z;default:o.hasOwnProperty(h)||He(e,n,h,null,o,z)}for(u in o)if(h=o[u],z=a[u],o.hasOwnProperty(u)&&(h!=null||z!=null))switch(u){case"value":ot=h;break;case"defaultValue":R=h;break;case"multiple":v=h;default:h!==z&&He(e,n,u,h,o,z)}n=R,a=v,o=lt,ot!=null?xn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?xn(e,!!a,n,!0):xn(e,!!a,a?[]:"",!1));return;case"textarea":lt=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:He(e,n,R,null,o,u)}for(v in o)if(u=o[v],h=a[v],o.hasOwnProperty(v)&&(u!=null||h!=null))switch(v){case"value":ot=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&He(e,n,v,u,o,h)}ii(e,ot,lt);return;case"option":for(var Xt in a)ot=a[Xt],a.hasOwnProperty(Xt)&&ot!=null&&!o.hasOwnProperty(Xt)&&(Xt==="selected"?e.selected=!1:He(e,n,Xt,null,o,ot));for(z in o)ot=o[z],lt=a[z],o.hasOwnProperty(z)&&ot!==lt&&(ot!=null||lt!=null)&&(z==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":He(e,n,z,ot,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)ot=a[ee],a.hasOwnProperty(ee)&&ot!=null&&!o.hasOwnProperty(ee)&&He(e,n,ee,null,o,ot);for(et in o)if(ot=o[et],lt=a[et],o.hasOwnProperty(et)&&ot!==lt&&(ot!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:He(e,n,et,ot,o,lt)}return;default:if(De(n)){for(var Ge in a)ot=a[Ge],a.hasOwnProperty(Ge)&&ot!==void 0&&!o.hasOwnProperty(Ge)&&ch(e,n,Ge,void 0,o,ot);for(dt in o)ot=o[dt],lt=a[dt],!o.hasOwnProperty(dt)||ot===lt||ot===void 0&&lt===void 0||ch(e,n,dt,ot,o,lt);return}}for(var q in a)ot=a[q],a.hasOwnProperty(q)&&ot!=null&&!o.hasOwnProperty(q)&&He(e,n,q,null,o,ot);for(vt in o)ot=o[vt],lt=a[vt],!o.hasOwnProperty(vt)||ot===lt||ot==null&&lt==null||He(e,n,vt,ot,o,lt)}function Fg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,v=u.initiatorType,R=u.duration;if(h&&R&&Fg(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var z=a[o],et=z.startTime;if(et>R)break;var dt=z.transferSize,vt=z.initiatorType;dt&&Fg(vt)&&(z=z.responseEnd,v+=dt*(z<R?1:(R-et)/(z-et)))}if(--o,n+=8*(h+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uh=null,fh=null;function dc(e){return e.nodeType===9?e:e.ownerDocument}function Bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function hh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dh=null;function qx(){var e=window.event;return e&&e.type==="popstate"?e===dh?!1:(dh=e,!0):(dh=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(e){return Gg.resolve(null).then(e).catch(Qx)}:Hg;function Qx(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function Vg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Go(a);for(var h=a.firstChild;h;){var v=h.nextSibling,R=h.nodeName;h[Ua]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=v}}else a==="body"&&Go(e.ownerDocument.body);a=u}while(a);Er(n)}function kg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ph(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ph(a),La(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ua])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function Jx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function Xg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bi(e.nextSibling),e===null))return null;return e}function mh(e){return e.data==="$?"||e.data==="$~"}function gh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $x(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function bi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _h=null;function Wg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return bi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Yg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function qg(e,n,a){switch(n=dc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);La(e)}var Ei=new Map,Zg=new Set;function pc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=H.d;H.d={f:tS,r:eS,D:nS,C:iS,L:aS,m:sS,X:oS,S:rS,M:lS};function tS(){var e=va.f(),n=sc();return e||n}function eS(e){var n=ea(e);n!==null&&n.tag===5&&n.type==="form"?fm(n):va.r(e)}var Mr=typeof document>"u"?null:document;function Kg(e,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=Pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Zg.has(u)||(Zg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",e),hn(n),o.head.appendChild(n)))}}function nS(e){va.D(e),Kg("dns-prefetch",e,null)}function iS(e,n){va.C(e,n),Kg("preconnect",e,n)}function aS(e,n,a){va.L(e,n,a);var o=Mr;if(o&&e&&n){var u='link[rel="preload"][as="'+Pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pe(a.imageSizes)+'"]')):u+='[href="'+Pe(e)+'"]';var h=u;switch(n){case"style":h=yr(e);break;case"script":h=br(e)}Ei.has(h)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ei.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Vo(h))||n==="script"&&o.querySelector(ko(h))||(n=o.createElement("link"),Nn(n,"link",e),hn(n),o.head.appendChild(n)))}}function sS(e,n){va.m(e,n);var a=Mr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pe(o)+'"][href="'+Pe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=br(e)}if(!Ei.has(h)&&(e=x({rel:"modulepreload",href:e},n),Ei.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(h)))return}o=a.createElement("link"),Nn(o,"link",e),hn(o),a.head.appendChild(o)}}}function rS(e,n,a){va.S(e,n,a);var o=Mr;if(o&&e){var u=Na(o).hoistableStyles,h=yr(e);n=n||"default";var v=u.get(h);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(Vo(h)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ei.get(h))&&vh(e,a);var z=v=o.createElement("link");hn(z),Nn(z,"link",e),z._p=new Promise(function(et,dt){z.onload=et,z.onerror=dt}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,mc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(h,v)}}}function oS(e,n){va.X(e,n);var a=Mr;if(a&&e){var o=Na(a).hoistableScripts,u=br(e),h=o.get(u);h||(h=a.querySelector(ko(u)),h||(e=x({src:e,async:!0},n),(n=Ei.get(u))&&xh(e,n),h=a.createElement("script"),hn(h),Nn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function lS(e,n){va.M(e,n);var a=Mr;if(a&&e){var o=Na(a).hoistableScripts,u=br(e),h=o.get(u);h||(h=a.querySelector(ko(u)),h||(e=x({src:e,async:!0,type:"module"},n),(n=Ei.get(u))&&xh(e,n),h=a.createElement("script"),hn(h),Nn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Qg(e,n,a,o){var u=(u=at.current)?pc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=Na(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var h=Na(u).hoistableStyles,v=h.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,v),(h=u.querySelector(Vo(e)))&&!h._p&&(v.instance=h,v.state.loading=5),Ei.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(e,a),h||cS(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=br(a),a=Na(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yr(e){return'href="'+Pe(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function jg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function cS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),hn(n),e.head.appendChild(n))}function br(e){return'[src="'+Pe(e)+'"]'}function ko(e){return"script[async]"+e}function Jg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Pe(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),hn(o),Nn(o,"style",u),mc(o,a.precedence,e),n.instance=o;case"stylesheet":u=yr(a.href);var h=e.querySelector(Vo(u));if(h)return n.state.loading|=4,n.instance=h,hn(h),h;o=jg(a),(u=Ei.get(u))&&vh(o,u),h=(e.ownerDocument||e).createElement("link"),hn(h);var v=h;return v._p=new Promise(function(R,z){v.onload=R,v.onerror=z}),Nn(h,"link",o),n.state.loading|=4,mc(h,a.precedence,e),n.instance=h;case"script":return h=br(a.src),(u=e.querySelector(ko(h)))?(n.instance=u,hn(u),u):(o=a,(u=Ei.get(h))&&(o=x({},a),xh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),hn(u),Nn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mc(o,a.precedence,e));return n.instance}function mc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function vh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var gc=null;function $g(e,n,a){if(gc===null){var o=new Map,u=gc=new Map;u.set(a,o)}else u=gc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Ua]||h[fn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(h):o.set(v,[h])}}return o}function t_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function uS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(o.href),h=n.querySelector(Vo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_c.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,hn(h);return}h=n.ownerDocument||n,o=jg(o),(u=Ei.get(u))&&vh(o,u),h=h.createElement("link"),hn(h);var v=h;v._p=new Promise(function(R,z){v.onload=R,v.onerror=z}),Nn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_c.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Sh=0;function hS(e,n){return e.stylesheets&&e.count===0&&xc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&xc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Sh===0&&(Sh=62500*Yx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Sh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function xc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,n.forEach(dS,e),vc=null,_c.call(e))}function dS(e,n){if(!(n.state.loading&4)){var a=vc.get(e);if(a)var o=a.get(null);else{a=new Map,vc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var v=u[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),h=a.get(v)||o,h===o&&a.set(null,u),a.set(v,u),this.count++,o=_c.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Xo={$$typeof:B,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function pS(e,n,a,o,u,h,v,R,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.hiddenUpdates=Wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function n_(e,n,a,o,u,h,v,R,z,et,dt,vt){return e=new pS(e,n,a,v,z,et,dt,vt,R),n=1,h===!0&&(n|=24),h=ri(3,null,null,n),e.current=h,h.stateNode=e,n=Ju(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},nf(h),e}function i_(e){return e?(e=tr,e):tr}function a_(e,n,a,o,u,h){u=i_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ga(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Va(e,o,n),a!==null&&(Jn(a,e,n),yo(a,e,n))}function s_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Mh(e,n){s_(e,n),(e=e.alternate)&&s_(e,n)}function r_(e){if(e.tag===13||e.tag===31){var n=ys(e,67108864);n!==null&&Jn(n,e,67108864),Mh(e,67108864)}}function o_(e){if(e.tag===13||e.tag===31){var n=fi();n=io(n);var a=ys(e,n);a!==null&&Jn(a,e,n),Mh(e,n)}}var Sc=!0;function mS(e,n,a,o){var u=I.T;I.T=null;var h=H.p;try{H.p=2,yh(e,n,a,o)}finally{H.p=h,I.T=u}}function gS(e,n,a,o){var u=I.T;I.T=null;var h=H.p;try{H.p=8,yh(e,n,a,o)}finally{H.p=h,I.T=u}}function yh(e,n,a,o){if(Sc){var u=bh(o);if(u===null)lh(e,n,o,Mc,a),c_(e,o);else if(vS(u,e,n,a,o))o.stopPropagation();else if(c_(e,o),n&4&&-1<_S.indexOf(e)){for(;u!==null;){var h=ea(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=Tt(h.pendingLanes);if(v!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var z=1<<31-Ft(v);R.entanglements[1]|=z,v&=~z}Xi(h),(we&6)===0&&(ic=Be()+500,Bo(0))}}break;case 31:case 13:R=ys(h,2),R!==null&&Jn(R,h,2),sc(),Mh(h,2)}if(h=bh(o),h===null&&lh(e,n,o,Mc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else lh(e,n,o,null,a)}}function bh(e){return e=Eu(e),Eh(e)}var Mc=null;function Eh(e){if(Mc=null,e=ta(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Mc=e,null}function l_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ce()){case D:return 2;case b:return 8;case K:case st:return 32;case ut:return 268435456;default:return 32}default:return 32}}var Th=!1,$a=null,ts=null,es=null,Wo=new Map,Yo=new Map,ns=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c_(e,n){switch(e){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(n.pointerId)}}function qo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ea(n),n!==null&&r_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function vS(e,n,a,o,u){switch(n){case"focusin":return $a=qo($a,e,n,a,o,u),!0;case"dragenter":return ts=qo(ts,e,n,a,o,u),!0;case"mouseover":return es=qo(es,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Wo.set(h,qo(Wo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Yo.set(h,qo(Yo.get(h)||null,e,n,a,o,u)),!0}return!1}function u_(e){var n=ta(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,qs(e.priority,function(){o_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,qs(e.priority,function(){o_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=bh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);bu=o,a.target.dispatchEvent(o),bu=null}else return n=ea(a),n!==null&&r_(n),e.blockedOn=a,!1;n.shift()}return!0}function f_(e,n,a){yc(e)&&a.delete(n)}function xS(){Th=!1,$a!==null&&yc($a)&&($a=null),ts!==null&&yc(ts)&&(ts=null),es!==null&&yc(es)&&(es=null),Wo.forEach(f_),Yo.forEach(f_)}function bc(e,n){e.blockedOn===n&&(e.blockedOn=null,Th||(Th=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xS)))}var Ec=null;function h_(e){Ec!==e&&(Ec=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===e&&(Ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Eh(o||a)===null)continue;break}var h=ea(a);h!==null&&(e.splice(n,3),n-=3,bf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Er(e){function n(z){return bc(z,e)}$a!==null&&bc($a,e),ts!==null&&bc(ts,e),es!==null&&bc(es,e),Wo.forEach(n),Yo.forEach(n);for(var a=0;a<ns.length;a++){var o=ns[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ns.length&&(a=ns[0],a.blockedOn===null);)u_(a),a.blockedOn===null&&ns.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],v=u[wn]||null;if(typeof h=="function")v||h_(a);else if(v){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,v=h[wn]||null)R=v.formAction;else if(Eh(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),h_(a)}}}function d_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ah(e){this._internalRoot=e}Tc.prototype.render=Ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=fi();a_(a,o,e,n,null,null)},Tc.prototype.unmount=Ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;a_(e.current,2,null,e,null,null),sc(),n[Yn]=null}};function Tc(e){this._internalRoot=e}Tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=so();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ns.length&&n!==0&&n<ns[a].priority;a++);ns.splice(a,0,e),a===0&&u_(e)}};var p_=t.version;if(p_!=="19.2.7")throw Error(s(527,p_,"19.2.7"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var SS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{ct=Ac.inject(SS),ft=Ac}catch{}}return Ko.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Mm,h=ym,v=bm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=n_(e,1,!1,null,null,a,o,null,u,h,v,d_),e[Yn]=n.current,oh(e),new Ah(n)},Ko.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Mm,v=ym,R=bm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=n_(e,1,!0,n,a??null,o,u,z,h,v,R,d_),n.context=i_(null),a=n.current,o=fi(),o=io(o),u=Ga(o),u.callback=null,Va(a,u,o),a=o,n.current.lanes=a,Gt(n,a),Xi(n),e[Yn]=n.current,oh(e),new Tc(n)},Ko.version="19.2.7",Ko}var E_;function DS(){if(E_)return Ch.exports;E_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ch.exports=wS(),Ch.exports}var US=DS(),xa=c0();const u0="185",Ra={ROTATE:0,DOLLY:1,PAN:2},kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},LS=0,T_=1,NS=2,eu=1,PS=2,al=3,hs=0,Xn=1,Zi=2,Fi=0,Xr=1,md=2,A_=3,R_=4,OS=5,zs=100,IS=101,FS=102,BS=103,zS=104,HS=200,GS=201,VS=202,kS=203,gd=204,_d=205,XS=206,WS=207,YS=208,qS=209,ZS=210,KS=211,QS=212,jS=213,JS=214,vd=0,xd=1,Sd=2,qr=3,Md=4,yd=5,bd=6,Ed=7,f0=0,$S=1,tM=2,ji=0,h0=1,d0=2,p0=3,gu=4,m0=5,Zr=6,_u=7,z1=300,ks=301,Kr=302,Nh=303,Ph=304,vu=306,ll=1e3,Aa=1001,Td=1002,yn=1003,eM=1004,Rc=1005,Rn=1006,Oh=1007,Gs=1008,mi=1009,H1=1010,G1=1011,cl=1012,g0=1013,Ji=1014,Oi=1015,Wn=1016,_0=1017,v0=1018,ul=1020,V1=35902,k1=35899,X1=1021,W1=1022,Ii=1023,wa=1026,Vs=1027,x0=1028,S0=1029,Xs=1030,M0=1031,y0=1033,nu=33776,iu=33777,au=33778,su=33779,Ad=35840,Rd=35841,Cd=35842,wd=35843,Dd=36196,Ud=37492,Ld=37496,Nd=37488,Pd=37489,lu=37490,Od=37491,Id=37808,Fd=37809,Bd=37810,zd=37811,Hd=37812,Gd=37813,Vd=37814,kd=37815,Xd=37816,Wd=37817,Yd=37818,qd=37819,Zd=37820,Kd=37821,Qd=36492,jd=36494,Jd=36495,$d=36283,t0=36284,cu=36285,e0=36286,nM=3200,iM=3201,uu=0,aM=1,Ki="",ti="srgb",fu="srgb-linear",hu="linear",Ue="srgb",Tr=7680,C_=519,sM=512,rM=513,oM=514,b0=515,lM=516,cM=517,E0=518,uM=519,w_=35044,D_=35048,U_="300 es",Qi=2e3,fl=2001;function fM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function du(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hM(){const r=du("canvas");return r.style.display="block",r}const L_={};function N_(...r){const t="THREE."+r.shift();console.log(t,...r)}function Y1(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ne(...r){r=Y1(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ee(...r){r=Y1(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Wr(...r){const t=r.join(" ");t in L_||(L_[t]=!0,ne(...r))}function dM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const pM={[vd]:xd,[Sd]:bd,[Md]:Ed,[qr]:yd,[xd]:vd,[bd]:Sd,[Ed]:Md,[yd]:qr};class ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let P_=1234567;const rl=Math.PI/180,hl=180/Math.PI;function $r(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function de(r,t,i){return Math.max(t,Math.min(i,r))}function T0(r,t){return(r%t+t)%t}function mM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function gM(r,t,i){return r!==t?(i-r)/(t-r):0}function ol(r,t,i){return(1-i)*r+i*t}function _M(r,t,i,s){return ol(r,t,1-Math.exp(-i*s))}function vM(r,t=1){return t-Math.abs(T0(r,t*2)-t)}function xM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function SM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function MM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function yM(r,t){return r+Math.random()*(t-r)}function bM(r){return r*(.5-Math.random())}function EM(r){r!==void 0&&(P_=r);let t=P_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function TM(r){return r*rl}function AM(r){return r*hl}function RM(r){return(r&r-1)===0&&r!==0}function CM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function DM(r,t,i,s,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),d=c((t+s)/2),_=f((t+s)/2),x=c((t-s)/2),g=f((t-s)/2),M=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(p*_,m*x,m*g,p*d);break;case"YZY":r.set(m*g,p*_,m*x,p*d);break;case"ZXZ":r.set(m*x,m*g,p*_,p*d);break;case"XZX":r.set(p*_,m*E,m*M,p*d);break;case"YXY":r.set(m*M,p*_,m*E,p*d);break;case"ZYZ":r.set(m*E,m*M,p*_,p*d);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Vr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const q1={DEG2RAD:rl,RAD2DEG:hl,generateUUID:$r,clamp:de,euclideanModulo:T0,mapLinear:mM,inverseLerp:gM,lerp:ol,damp:_M,pingpong:vM,smoothstep:xM,smootherstep:SM,randInt:MM,randFloat:yM,randFloatSpread:bM,seededRandom:EM,degToRad:TM,radToDeg:AM,isPowerOfTwo:RM,ceilPowerOfTwo:CM,floorPowerOfTwo:wM,setQuaternionFromProperEuler:DM,normalize:Vn,denormalize:Vr},L0=class L0{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};L0.prototype.isVector2=!0;let qt=L0;class ds{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,p){let m=s[l+0],d=s[l+1],_=s[l+2],x=s[l+3],g=c[f+0],M=c[f+1],E=c[f+2],C=c[f+3];if(x!==C||m!==g||d!==M||_!==E){let y=m*g+d*M+_*E+x*C;y<0&&(g=-g,M=-M,E=-E,C=-C,y=-y);let S=1-p;if(y<.9995){const F=Math.acos(y),B=Math.sin(F);S=Math.sin(S*F)/B,p=Math.sin(p*F)/B,m=m*S+g*p,d=d*S+M*p,_=_*S+E*p,x=x*S+C*p}else{m=m*S+g*p,d=d*S+M*p,_=_*S+E*p,x=x*S+C*p;const F=1/Math.sqrt(m*m+d*d+_*_+x*x);m*=F,d*=F,_*=F,x*=F}}t[i]=m,t[i+1]=d,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,f){const p=s[l],m=s[l+1],d=s[l+2],_=s[l+3],x=c[f],g=c[f+1],M=c[f+2],E=c[f+3];return t[i]=p*E+_*x+m*M-d*g,t[i+1]=m*E+_*g+d*x-p*M,t[i+2]=d*E+_*M+p*g-m*x,t[i+3]=_*E-p*x-m*g-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(s/2),_=p(l/2),x=p(c/2),g=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*x+d*M*E,this._y=d*M*x-g*_*E,this._z=d*_*E+g*M*x,this._w=d*_*x-g*M*E;break;case"YXZ":this._x=g*_*x+d*M*E,this._y=d*M*x-g*_*E,this._z=d*_*E-g*M*x,this._w=d*_*x+g*M*E;break;case"ZXY":this._x=g*_*x-d*M*E,this._y=d*M*x+g*_*E,this._z=d*_*E+g*M*x,this._w=d*_*x-g*M*E;break;case"ZYX":this._x=g*_*x-d*M*E,this._y=d*M*x+g*_*E,this._z=d*_*E-g*M*x,this._w=d*_*x+g*M*E;break;case"YZX":this._x=g*_*x+d*M*E,this._y=d*M*x+g*_*E,this._z=d*_*E-g*M*x,this._w=d*_*x-g*M*E;break;case"XZY":this._x=g*_*x-d*M*E,this._y=d*M*x-g*_*E,this._z=d*_*E+g*M*x,this._w=d*_*x+g*M*E;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],_=i[6],x=i[10],g=s+p+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-d)*M,this._z=(f-l)*M}else if(s>p&&s>x){const M=2*Math.sqrt(1+s-p-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+d)/M}else if(p>x){const M=2*Math.sqrt(1+p-s-x);this._w=(c-d)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-s-p);this._w=(f-l)/M,this._x=(c+d)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=s*_+f*p+l*d-c*m,this._y=l*_+f*m+c*p-s*d,this._z=c*_+f*d+s*m-l*p,this._w=f*_-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const N0=class N0{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(O_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(O_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*s),_=2*(p*i-c*l),x=2*(c*s-f*i);return this.x=i+m*d+f*x-p*_,this.y=s+m*_+p*d-c*x,this.z=l+m*x+c*_-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ih.copy(this).projectOnVector(t),this.sub(Ih)}reflect(t){return this.sub(Ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};N0.prototype.isVector3=!0;let j=N0;const Ih=new j,O_=new ds,P0=class P0{constructor(t,i,s,l,c,f,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d)}set(t,i,s,l,c,f,p,m,d){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],d=s[1],_=s[4],x=s[7],g=s[2],M=s[5],E=s[8],C=l[0],y=l[3],S=l[6],F=l[1],B=l[4],w=l[7],P=l[2],L=l[5],O=l[8];return c[0]=f*C+p*F+m*P,c[3]=f*y+p*B+m*L,c[6]=f*S+p*w+m*O,c[1]=d*C+_*F+x*P,c[4]=d*y+_*B+x*L,c[7]=d*S+_*w+x*O,c[2]=g*C+M*F+E*P,c[5]=g*y+M*B+E*L,c[8]=g*S+M*w+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],_=t[8];return i*f*_-i*p*d-s*c*_+s*p*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],_=t[8],x=_*f-p*d,g=p*m-_*c,M=d*c-f*m,E=i*x+s*g+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=x*C,t[1]=(l*d-_*s)*C,t[2]=(p*s-l*f)*C,t[3]=g*C,t[4]=(_*i-l*m)*C,t[5]=(l*c-p*i)*C,t[6]=M*C,t[7]=(s*m-d*i)*C,t[8]=(f*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return Wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fh.makeScale(t,i)),this}rotate(t){return Wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fh.makeRotation(-t)),this}translate(t,i){return Wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};P0.prototype.isMatrix3=!0;let oe=P0;const Fh=new oe,I_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UM(){const r={enabled:!0,workingColorSpace:fu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ue&&(l.r=Ca(l.r),l.g=Ca(l.g),l.b=Ca(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ue&&(l.r=Yr(l.r),l.g=Yr(l.g),l.b=Yr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ki?hu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[fu]:{primaries:t,whitePoint:s,transfer:hu,toXYZ:I_,fromXYZ:F_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:s,transfer:Ue,toXYZ:I_,fromXYZ:F_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const Se=UM();function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class LM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=du("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=du("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ca(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let NM=0;class A0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=$r(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Bh(l[f].image)):c.push(Bh(l[f]))}else c=Bh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Bh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let PM=0;const zh=new j;class Hn extends ps{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=Aa,l=Aa,c=Rn,f=Gs,p=Ii,m=mi,d=Hn.DEFAULT_ANISOTROPY,_=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=$r(),this.name="",this.source=new A0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==z1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ll:t.x=t.x-Math.floor(t.x);break;case Aa:t.x=t.x<0?0:1;break;case Td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ll:t.y=t.y-Math.floor(t.y);break;case Aa:t.y=t.y<0?0:1;break;case Td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=z1;Hn.DEFAULT_ANISOTROPY=1;const O0=class O0{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],_=m[4],x=m[8],g=m[1],M=m[5],E=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+C)<.1&&Math.abs(E+y)<.1&&Math.abs(d+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(d+1)/2,w=(M+1)/2,P=(S+1)/2,L=(_+g)/4,O=(x+C)/4,T=(E+y)/4;return B>w&&B>P?B<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(B),l=L/s,c=O/s):w>P?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=L/l,c=T/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=O/c,l=T/c),this.set(s,l,c,i),this}let F=Math.sqrt((y-E)*(y-E)+(x-C)*(x-C)+(g-_)*(g-_));return Math.abs(F)<.001&&(F=1),this.x=(y-E)/F,this.y=(x-C)/F,this.z=(g-_)/F,this.w=Math.acos((d+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this.w=de(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this.w=de(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};O0.prototype.isVector4=!0;let tn=O0;class OM extends ps{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Hn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new A0(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends OM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Z1 extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yn,this.minFilter=yn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IM extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yn,this.minFilter=yn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mu=class mu{constructor(t,i,s,l,c,f,p,m,d,_,x,g,M,E,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d,_,x,g,M,E,C,y)}set(t,i,s,l,c,f,p,m,d,_,x,g,M,E,C,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=p,S[13]=m,S[2]=d,S[6]=_,S[10]=x,S[14]=g,S[3]=M,S[7]=E,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),f=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=f*_,M=f*x,E=p*_,C=p*x;i[0]=m*_,i[4]=-m*x,i[8]=d,i[1]=M+E*d,i[5]=g-C*d,i[9]=-p*m,i[2]=C-g*d,i[6]=E+M*d,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,M=m*x,E=d*_,C=d*x;i[0]=g+C*p,i[4]=E*p-M,i[8]=f*d,i[1]=f*x,i[5]=f*_,i[9]=-p,i[2]=M*p-E,i[6]=C+g*p,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,M=m*x,E=d*_,C=d*x;i[0]=g-C*p,i[4]=-f*x,i[8]=E+M*p,i[1]=M+E*p,i[5]=f*_,i[9]=C-g*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,M=f*x,E=p*_,C=p*x;i[0]=m*_,i[4]=E*d-M,i[8]=g*d+C,i[1]=m*x,i[5]=C*d+g,i[9]=M*d-E,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,M=f*d,E=p*m,C=p*d;i[0]=m*_,i[4]=C-g*x,i[8]=E*x+M,i[1]=x,i[5]=f*_,i[9]=-p*_,i[2]=-d*_,i[6]=M*x+E,i[10]=g-C*x}else if(t.order==="XZY"){const g=f*m,M=f*d,E=p*m,C=p*d;i[0]=m*_,i[4]=-x,i[8]=d*_,i[1]=g*x+C,i[5]=f*_,i[9]=M*x-E,i[2]=E*x-M,i[6]=p*_,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(FM,t,BM)}lookAt(t,i,s){const l=this.elements;return hi.subVectors(t,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),as.crossVectors(s,hi),as.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),as.crossVectors(s,hi)),as.normalize(),Cc.crossVectors(hi,as),l[0]=as.x,l[4]=Cc.x,l[8]=hi.x,l[1]=as.y,l[5]=Cc.y,l[9]=hi.y,l[2]=as.z,l[6]=Cc.z,l[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],d=s[12],_=s[1],x=s[5],g=s[9],M=s[13],E=s[2],C=s[6],y=s[10],S=s[14],F=s[3],B=s[7],w=s[11],P=s[15],L=l[0],O=l[4],T=l[8],N=l[12],Y=l[1],G=l[5],Q=l[9],ht=l[13],_t=l[2],J=l[6],I=l[10],H=l[14],$=l[3],mt=l[7],bt=l[11],U=l[15];return c[0]=f*L+p*Y+m*_t+d*$,c[4]=f*O+p*G+m*J+d*mt,c[8]=f*T+p*Q+m*I+d*bt,c[12]=f*N+p*ht+m*H+d*U,c[1]=_*L+x*Y+g*_t+M*$,c[5]=_*O+x*G+g*J+M*mt,c[9]=_*T+x*Q+g*I+M*bt,c[13]=_*N+x*ht+g*H+M*U,c[2]=E*L+C*Y+y*_t+S*$,c[6]=E*O+C*G+y*J+S*mt,c[10]=E*T+C*Q+y*I+S*bt,c[14]=E*N+C*ht+y*H+S*U,c[3]=F*L+B*Y+w*_t+P*$,c[7]=F*O+B*G+w*J+P*mt,c[11]=F*T+B*Q+w*I+P*bt,c[15]=F*N+B*ht+w*H+P*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],d=t[13],_=t[2],x=t[6],g=t[10],M=t[14],E=t[3],C=t[7],y=t[11],S=t[15],F=m*M-d*g,B=p*M-d*x,w=p*g-m*x,P=f*M-d*_,L=f*g-m*_,O=f*x-p*_;return i*(C*F-y*B+S*w)-s*(E*F-y*P+S*L)+l*(E*B-C*P+S*O)-c*(E*w-C*L+y*O)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],f=t[5],p=t[9],m=t[2],d=t[6],_=t[10];return i*(f*_-p*d)-s*(c*_-p*m)+l*(c*d-f*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],_=t[8],x=t[9],g=t[10],M=t[11],E=t[12],C=t[13],y=t[14],S=t[15],F=i*p-s*f,B=i*m-l*f,w=i*d-c*f,P=s*m-l*p,L=s*d-c*p,O=l*d-c*m,T=_*C-x*E,N=_*y-g*E,Y=_*S-M*E,G=x*y-g*C,Q=x*S-M*C,ht=g*S-M*y,_t=F*ht-B*Q+w*G+P*Y-L*N+O*T;if(_t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/_t;return t[0]=(p*ht-m*Q+d*G)*J,t[1]=(l*Q-s*ht-c*G)*J,t[2]=(C*O-y*L+S*P)*J,t[3]=(g*L-x*O-M*P)*J,t[4]=(m*Y-f*ht-d*N)*J,t[5]=(i*ht-l*Y+c*N)*J,t[6]=(y*w-E*O-S*B)*J,t[7]=(_*O-g*w+M*B)*J,t[8]=(f*Q-p*Y+d*T)*J,t[9]=(s*Y-i*Q-c*T)*J,t[10]=(E*L-C*w+S*F)*J,t[11]=(x*w-_*L-M*F)*J,t[12]=(p*N-f*G-m*T)*J,t[13]=(i*G-s*N+l*T)*J,t[14]=(C*B-E*P-y*F)*J,t[15]=(_*P-x*B+g*F)*J,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,p=t.y,m=t.z,d=c*f,_=c*p;return this.set(d*f+s,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+s,_*m-l*f,0,d*m-l*p,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,_=f+f,x=p+p,g=c*d,M=c*_,E=c*x,C=f*_,y=f*x,S=p*x,F=m*d,B=m*_,w=m*x,P=s.x,L=s.y,O=s.z;return l[0]=(1-(C+S))*P,l[1]=(M+w)*P,l[2]=(E-B)*P,l[3]=0,l[4]=(M-w)*L,l[5]=(1-(g+S))*L,l[6]=(y+F)*L,l[7]=0,l[8]=(E+B)*O,l[9]=(y-F)*O,l[10]=(1-(g+C))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ui.copy(this);const d=1/f,_=1/p,x=1/m;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=_,Ui.elements[5]*=_,Ui.elements[6]*=_,Ui.elements[8]*=x,Ui.elements[9]*=x,Ui.elements[10]*=x,i.setFromRotationMatrix(Ui),s.x=f,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,f,p=Qi,m=!1){const d=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(p===Qi)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===fl)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,f,p=Qi,m=!1){const d=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(p===Qi)E=-2/(f-c),C=-(f+c)/(f-c);else if(p===fl)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=E,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};mu.prototype.isMatrix4=!0;let Ye=mu;const Rr=new j,Ui=new Ye,FM=new j(0,0,0),BM=new j(1,1,1),as=new j,Cc=new j,hi=new j,B_=new Ye,z_=new ds;class Da{constructor(t=0,i=0,s=0,l=Da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],_=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(de(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-de(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(de(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-de(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(de(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-de(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return B_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(B_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return z_.setFromEuler(this),this.setFromQuaternion(z_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Da.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zM=0;const H_=new j,Cr=new ds,Sa=new Ye,wc=new j,Qo=new j,HM=new j,GM=new ds,G_=new j(1,0,0),V_=new j(0,1,0),k_=new j(0,0,1),X_={type:"added"},VM={type:"removed"},wr={type:"childadded",child:null},Hh={type:"childremoved",child:null};class On extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new j,i=new Da,s=new ds,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new oe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(G_,t)}rotateY(t){return this.rotateOnAxis(V_,t)}rotateZ(t){return this.rotateOnAxis(k_,t)}translateOnAxis(t,i){return H_.copy(t).applyQuaternion(this.quaternion),this.position.add(H_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(G_,t)}translateY(t){return this.translateOnAxis(V_,t)}translateZ(t){return this.translateOnAxis(k_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?wc.copy(t):wc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(Qo,wc,this.up):Sa.lookAt(wc,Qo,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(Sa),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(X_),wr.child=t,this.dispatchEvent(wr),wr.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VM),Hh.child=t,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(X_),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,HM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,GM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),_=f(t.images),x=f(t.shapes),g=f(t.skeletons),M=f(t.animations),E=f(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}On.DEFAULT_UP=new j(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kM={type:"move"};class Gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),S=this._getHandJoint(d,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=_.position.distanceTo(x.position),M=.02,E=.005;d.inputState.pinching&&g>M+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=M-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(kM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Dc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const K1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function Vh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class se{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Se.workingColorSpace){return this.r=t,this.g=i,this.b=s,Se.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Se.workingColorSpace){if(t=T0(t,1),i=de(i,0,1),s=de(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Vh(f,c,t+1/3),this.g=Vh(f,c,t),this.b=Vh(f,c,t-1/3)}return Se.colorSpaceToWorking(this,l),this}setStyle(t,i=ti){function s(c){c!==void 0&&parseFloat(c)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ne("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ti){const s=K1[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return Se.workingToColorSpace(zn.copy(this),t),Math.round(de(zn.r*255,0,255))*65536+Math.round(de(zn.g*255,0,255))*256+Math.round(de(zn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Se.workingColorSpace){Se.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const _=(p+f)/2;if(p===f)m=0,d=0;else{const x=f-p;switch(d=_<=.5?x/(f+p):x/(2-f-p),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=_,t}getRGB(t,i=Se.workingColorSpace){return Se.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=ti){Se.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,l=zn.b;return t!==ti?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+i,ss.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ss),t.getHSL(Uc);const s=ol(ss.h,Uc.h,i),l=ol(ss.s,Uc.s,i),c=ol(ss.l,Uc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new se;se.NAMES=K1;class Q1 extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Da,this.environmentIntensity=1,this.environmentRotation=new Da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Li=new j,Ma=new j,kh=new j,ya=new j,Dr=new j,Ur=new j,W_=new j,Xh=new j,Wh=new j,Yh=new j,qh=new tn,Zh=new tn,Kh=new tn;class Pi{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Li.subVectors(t,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Li.subVectors(l,i),Ma.subVectors(s,i),kh.subVectors(t,i);const f=Li.dot(Li),p=Li.dot(Ma),m=Li.dot(kh),d=Ma.dot(Ma),_=Ma.dot(kh),x=f*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(d*m-p*_)*g,E=(f*_-p*m)*g;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(t,i,s,l,c,f,p,m){return this.getBarycoord(t,i,s,l,ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ya.x),m.addScaledVector(f,ya.y),m.addScaledVector(p,ya.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return qh.setScalar(0),Zh.setScalar(0),Kh.setScalar(0),qh.fromBufferAttribute(t,i),Zh.fromBufferAttribute(t,s),Kh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(qh,c.x),f.addScaledVector(Zh,c.y),f.addScaledVector(Kh,c.z),f}static isFrontFacing(t,i,s,l){return Li.subVectors(s,i),Ma.subVectors(t,i),Li.cross(Ma).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Li.cross(Ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Pi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,p;Dr.subVectors(l,s),Ur.subVectors(c,s),Xh.subVectors(t,s);const m=Dr.dot(Xh),d=Ur.dot(Xh);if(m<=0&&d<=0)return i.copy(s);Wh.subVectors(t,l);const _=Dr.dot(Wh),x=Ur.dot(Wh);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*d;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Dr,f);Yh.subVectors(t,c);const M=Dr.dot(Yh),E=Ur.dot(Yh);if(E>=0&&M<=E)return i.copy(c);const C=M*d-m*E;if(C<=0&&d>=0&&E<=0)return p=d/(d-E),i.copy(s).addScaledVector(Ur,p);const y=_*E-M*x;if(y<=0&&x-_>=0&&M-E>=0)return W_.subVectors(c,l),p=(x-_)/(x-_+(M-E)),i.copy(l).addScaledVector(W_,p);const S=1/(y+C+g);return f=C*S,p=g*S,i.copy(s).addScaledVector(Dr,f).addScaledVector(Ur,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ws{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Ni):Ni.fromBufferAttribute(c,f),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Lc.copy(s.boundingBox)),Lc.applyMatrix4(t.matrixWorld),this.union(Lc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Nc.subVectors(this.max,jo),Lr.subVectors(t.a,jo),Nr.subVectors(t.b,jo),Pr.subVectors(t.c,jo),rs.subVectors(Nr,Lr),os.subVectors(Pr,Nr),Os.subVectors(Lr,Pr);let i=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Os.z,Os.y,rs.z,0,-rs.x,os.z,0,-os.x,Os.z,0,-Os.x,-rs.y,rs.x,0,-os.y,os.x,0,-Os.y,Os.x,0];return!Qh(i,Lr,Nr,Pr,Nc)||(i=[1,0,0,0,1,0,0,0,1],!Qh(i,Lr,Nr,Pr,Nc))?!1:(Pc.crossVectors(rs,os),i=[Pc.x,Pc.y,Pc.z],Qh(i,Lr,Nr,Pr,Nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new j,new j,new j,new j,new j,new j,new j,new j],Ni=new j,Lc=new Ws,Lr=new j,Nr=new j,Pr=new j,rs=new j,os=new j,Os=new j,jo=new j,Nc=new j,Pc=new j,Is=new j;function Qh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Is.fromArray(r,c);const p=l.x*Math.abs(Is.x)+l.y*Math.abs(Is.y)+l.z*Math.abs(Is.z),m=t.dot(Is),d=i.dot(Is),_=s.dot(Is);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const _n=new j,Oc=new qt;let XM=0;class gi extends ps{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=w_,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(t),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Vr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Vr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Vr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Vr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Vr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==w_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class j1 extends gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class J1 extends gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Bi extends gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const WM=new Ws,Jo=new j,jh=new j;class pl{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):WM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add(jh)),this.expandByPoint(Jo.copy(t.center).sub(jh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let YM=0;const Ti=new Ye,Jh=new On,Or=new j,di=new Ws,$o=new Ws,An=new j;class $i extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fM(t)?J1:j1)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new oe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,s){return Ti.makeTranslation(t,i,s),this.applyMatrix4(Ti),this}scale(t,i,s){return Ti.makeScale(t,i,s),this.applyMatrix4(Ti),this}lookAt(t){return Jh.lookAt(t),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Bi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];di.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];$o.setFromBufferAttribute(p),this.morphTargetsRelative?(An.addVectors(di.min,$o.min),di.expandByPoint(An),An.addVectors(di.max,$o.max),di.expandByPoint(An)):(di.expandByPoint($o.min),di.expandByPoint($o.max))}di.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)An.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)An.fromBufferAttribute(p,d),m&&(Or.fromBufferAttribute(t,d),An.add(Or)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new gi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new j,m[T]=new j;const d=new j,_=new j,x=new j,g=new qt,M=new qt,E=new qt,C=new j,y=new j;function S(T,N,Y){d.fromBufferAttribute(s,T),_.fromBufferAttribute(s,N),x.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,N),E.fromBufferAttribute(c,Y),_.sub(d),x.sub(d),M.sub(g),E.sub(g);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(G),y.copy(x).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(G),p[T].add(C),p[N].add(C),p[Y].add(C),m[T].add(y),m[N].add(y),m[Y].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let T=0,N=F.length;T<N;++T){const Y=F[T],G=Y.start,Q=Y.count;for(let ht=G,_t=G+Q;ht<_t;ht+=3)S(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}const B=new j,w=new j,P=new j,L=new j;function O(T){P.fromBufferAttribute(l,T),L.copy(P);const N=p[T];B.copy(N),B.sub(P.multiplyScalar(P.dot(N))).normalize(),w.crossVectors(L,N);const G=w.dot(m[T])<0?-1:1;f.setXYZW(T,B.x,B.y,B.z,G)}for(let T=0,N=F.length;T<N;++T){const Y=F[T],G=Y.start,Q=Y.count;for(let ht=G,_t=G+Q;ht<_t;ht+=3)O(t.getX(ht+0)),O(t.getX(ht+1)),O(t.getX(ht+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,f=new j,p=new j,m=new j,d=new j,_=new j,x=new j;if(t)for(let g=0,M=t.count;g<M;g+=3){const E=t.getX(g+0),C=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),d.fromBufferAttribute(s,y),p.add(_),m.add(_),d.add(_),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)An.fromBufferAttribute(t,i),An.normalize(),t.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function t(p,m){const d=p.array,_=p.itemSize,x=p.normalized,g=new d.constructor(m.length*_);let M=0,E=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*_;for(let S=0;S<_;S++)g[E++]=d[M++]}return new gi(g,_,x)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,x=d.length;_<x;_++){const g=d[_],M=t(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let x=0,g=d.length;x<g;x++){const M=d[x];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const c=t.morphAttributes;for(const d in c){const _=[],x=c[d];for(let g=0,M=x.length;g<M;g++)_.push(x[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,_=f.length;d<_;d++){const x=f[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let qM=0;class to extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Xr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ne(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gd&&(s.blendSrc=this.blendSrc),this.blendDst!==_d&&(s.blendDst=this.blendDst),this.blendEquation!==zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new qt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ea=new j,$h=new j,Ic=new j,ls=new j,td=new j,Fc=new j,ed=new j;class C0{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ea.copy(this.origin).addScaledVector(this.direction,i),Ea.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){$h.copy(t).add(i).multiplyScalar(.5),Ic.copy(i).sub(t).normalize(),ls.copy(this.origin).sub($h);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Ic),p=ls.dot(this.direction),m=-ls.dot(Ic),d=ls.lengthSq(),_=Math.abs(1-f*f);let x,g,M,E;if(_>0)if(x=f*m-p,g=f*p-m,E=c*_,x>=0)if(g>=-E)if(g<=E){const C=1/_;x*=C,g*=C,M=x*(x+f*g+2*p)+g*(f*x+g+2*m)+d}else g=c,x=Math.max(0,-(f*g+p)),M=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(f*g+p)),M=-x*x+g*(g+2*m)+d;else g<=-E?(x=Math.max(0,-(-f*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d):g<=E?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+d):(x=Math.max(0,-(f*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d);else g=f>0?-c:c,x=Math.max(0,-(f*g+p)),M=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy($h).addScaledVector(Ic,g),M}intersectSphere(t,i){Ea.subVectors(t.center,this.origin);const s=Ea.dot(this.direction),l=Ea.dot(Ea)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,p,m;const d=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(p=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(p=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ea)!==null}intersectTriangle(t,i,s,l,c){td.subVectors(i,t),Fc.subVectors(s,t),ed.crossVectors(td,Fc);let f=this.direction.dot(ed),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ls.subVectors(this.origin,t);const m=p*this.direction.dot(Fc.crossVectors(ls,Fc));if(m<0)return null;const d=p*this.direction.dot(td.cross(ls));if(d<0||m+d>f)return null;const _=-p*ls.dot(ed);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class w0 extends to{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.combine=f0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Y_=new Ye,Fs=new C0,Bc=new pl,q_=new j,zc=new j,Hc=new j,Gc=new j,nd=new j,Vc=new j,Z_=new j,kc=new j;class vn extends On{constructor(t=new $i,i=new w0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Vc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],x=c[m];_!==0&&(nd.fromBufferAttribute(x,t),f?Vc.addScaledVector(nd,_):Vc.addScaledVector(nd.sub(i),_))}i.add(Vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),Fs.copy(t.ray).recast(t.near),!(Bc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Bc,q_)===null||Fs.origin.distanceToSquared(q_)>(t.far-t.near)**2))&&(Y_.copy(c).invert(),Fs.copy(t.ray).applyMatrix4(Y_),!(s.boundingBox!==null&&Fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Fs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const y=g[E],S=f[y.materialIndex],F=Math.max(y.start,M.start),B=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let w=F,P=B;w<P;w+=3){const L=p.getX(w),O=p.getX(w+1),T=p.getX(w+2);l=Xc(this,S,t,s,d,_,x,L,O,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=E,S=C;y<S;y+=3){const F=p.getX(y),B=p.getX(y+1),w=p.getX(y+2);l=Xc(this,f,t,s,d,_,x,F,B,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const y=g[E],S=f[y.materialIndex],F=Math.max(y.start,M.start),B=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=F,P=B;w<P;w+=3){const L=w,O=w+1,T=w+2;l=Xc(this,S,t,s,d,_,x,L,O,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=E,S=C;y<S;y+=3){const F=y,B=y+1,w=y+2;l=Xc(this,f,t,s,d,_,x,F,B,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ZM(r,t,i,s,l,c,f,p){let m;if(t.side===Xn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,t.side===hs,p),m===null)return null;kc.copy(p),kc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(kc);return d<i.near||d>i.far?null:{distance:d,point:kc.clone(),object:r}}function Xc(r,t,i,s,l,c,f,p,m,d){r.getVertexPosition(p,zc),r.getVertexPosition(m,Hc),r.getVertexPosition(d,Gc);const _=ZM(r,t,i,s,zc,Hc,Gc,Z_);if(_){const x=new j;Pi.getBarycoord(Z_,zc,Hc,Gc,x),l&&(_.uv=Pi.getInterpolatedAttribute(l,p,m,d,x,new qt)),c&&(_.uv1=Pi.getInterpolatedAttribute(c,p,m,d,x,new qt)),f&&(_.normal=Pi.getInterpolatedAttribute(f,p,m,d,x,new j),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new j,materialIndex:0};Pi.getNormal(zc,Hc,Gc,g.normal),_.face=g,_.barycoord=x}return _}class $1 extends Hn{constructor(t=null,i=1,s=1,l,c,f,p,m,d=yn,_=yn,x,g){super(null,f,p,m,d,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K_ extends gi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ir=new Ye,Q_=new Ye,Wc=[],j_=new Ws,KM=new Ye,tl=new vn,el=new pl;class QM extends vn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new K_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,KM)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Ws),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ir),j_.copy(t.boundingBox).applyMatrix4(Ir),this.boundingBox.union(j_)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new pl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Ir),el.copy(t.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(el)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let p=0;p<s.length;p++)s[p]=l[f+p]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(tl.geometry=this.geometry,tl.material=this.material,tl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(s),t.ray.intersectsSphere(el)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ir),Q_.multiplyMatrices(s,Ir),tl.matrixWorld=Q_,tl.raycast(t,Wc);for(let f=0,p=Wc.length;f<p;f++){const m=Wc[f];m.instanceId=c,m.object=this,i.push(m)}Wc.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new K_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new $1(new Float32Array(l*this.count),l,this.count,x0,Oi));const c=this.morphTexture.source.data.data;let f=0;for(let d=0;d<s.length;d++)f+=s[d];const p=this.geometry.morphTargetsRelative?1:1-f,m=l*t;return c[m]=p,c.set(s,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const id=new j,jM=new j,JM=new oe;class Ta{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=id.subVectors(s,i).cross(jM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(id),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||JM.getNormalMatrix(t),l=this.coplanarPoint(id).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new pl,$M=new qt(.5,.5),Yc=new j;class D0{constructor(t=new Ta,i=new Ta,s=new Ta,l=new Ta,c=new Ta,f=new Ta){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Qi,s=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],d=c[3],_=c[4],x=c[5],g=c[6],M=c[7],E=c[8],C=c[9],y=c[10],S=c[11],F=c[12],B=c[13],w=c[14],P=c[15];if(l[0].setComponents(d-f,M-_,S-E,P-F).normalize(),l[1].setComponents(d+f,M+_,S+E,P+F).normalize(),l[2].setComponents(d+p,M+x,S+C,P+B).normalize(),l[3].setComponents(d-p,M-x,S-C,P-B).normalize(),s)l[4].setComponents(m,g,y,w).normalize(),l[5].setComponents(d-m,M-g,S-y,P-w).normalize();else if(l[4].setComponents(d-m,M-g,S-y,P-w).normalize(),i===Qi)l[5].setComponents(d+m,M+g,S+y,P+w).normalize();else if(i===fl)l[5].setComponents(m,g,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(t){Bs.center.set(0,0,0);const i=$M.distanceTo(t.center);return Bs.radius=.7071067811865476+i,Bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Yc.x=l.normal.x>0?t.max.x:t.min.x,Yc.y=l.normal.y>0?t.max.y:t.min.y,Yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tv extends Hn{constructor(t=[],i=ks,s,l,c,f,p,m,d,_){super(t,i,s,l,c,f,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pu extends Hn{constructor(t,i,s,l,c,f,p,m,d){super(t,i,s,l,c,f,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qr extends Hn{constructor(t,i,s=Ji,l,c,f,p=yn,m=yn,d,_=wa,x=1){if(_!==wa&&_!==Vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,f,p,m,_,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new A0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ty extends Qr{constructor(t,i=Ji,s=ks,l,c,f=yn,p=yn,m,d=wa){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ev extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class eo extends $i{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],_=[],x=[];let g=0,M=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Bi(d,3)),this.setAttribute("normal",new Bi(_,3)),this.setAttribute("uv",new Bi(x,2));function E(C,y,S,F,B,w,P,L,O,T,N){const Y=w/O,G=P/T,Q=w/2,ht=P/2,_t=L/2,J=O+1,I=T+1;let H=0,$=0;const mt=new j;for(let bt=0;bt<I;bt++){const U=bt*G-ht;for(let Z=0;Z<J;Z++){const yt=Z*Y-Q;mt[C]=yt*F,mt[y]=U*B,mt[S]=_t,d.push(mt.x,mt.y,mt.z),mt[C]=0,mt[y]=0,mt[S]=L>0?1:-1,_.push(mt.x,mt.y,mt.z),x.push(Z/O),x.push(1-bt/T),H+=1}}for(let bt=0;bt<T;bt++)for(let U=0;U<O;U++){const Z=g+U+J*bt,yt=g+U+J*(bt+1),Rt=g+(U+1)+J*(bt+1),Ot=g+(U+1)+J*bt;m.push(Z,yt,Ot),m.push(yt,Rt,Ot),$+=6}p.addGroup(M,$,N),M+=$,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ml extends $i{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,_=m+1,x=t/p,g=i/m,M=[],E=[],C=[],y=[];for(let S=0;S<_;S++){const F=S*g-f;for(let B=0;B<d;B++){const w=B*x-c;E.push(w,-F,0),C.push(0,0,1),y.push(B/p),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let F=0;F<p;F++){const B=F+d*S,w=F+d*(S+1),P=F+1+d*(S+1),L=F+1+d*S;M.push(B,w,L),M.push(w,P,L)}this.setIndex(M),this.setAttribute("position",new Bi(E,3)),this.setAttribute("normal",new Bi(C,3)),this.setAttribute("uv",new Bi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.width,t.height,t.widthSegments,t.heightSegments)}}function jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(J_(l))l.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(J_(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=jr(r[i]);for(const l in s)t[l]=s[l]}return t}function J_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ey(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function nv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const dl={clone:jr,merge:kn};var ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends to{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ny,this.fragmentShader=iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=ey(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new se().setHex(l.value);break;case"v2":this.uniforms[s].value=new qt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new j().fromArray(l.value);break;case"v4":this.uniforms[s].value=new tn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new oe().fromArray(l.value);break;case"m4":this.uniforms[s].value=new Ye().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class iv extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class n0 extends to{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ay extends n0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class sy extends to{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.combine=f0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class av extends to{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ry extends to{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sv extends On{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ad=new Ye,$_=new j,t1=new j;class rv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new D0,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;$_.setFromMatrixPosition(t.matrixWorld),i.position.copy($_),t1.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(t1),i.updateMatrixWorld(),ad.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===fl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ad)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qc=new j,Zc=new ds,Wi=new j;class ov extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qc,Zc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Zc,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(qc,Zc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,Zc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cs=new j,e1=new qt,n1=new qt;class pi extends ov{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,i){return this.getViewBounds(t,e1,n1),i.subVectors(n1,e1)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/d,l*=f.width/m,s*=f.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class oy extends rv{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class ly extends sv{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new oy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class xu extends ov{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class cy extends rv{constructor(){super(new xu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sd extends sv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new cy}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Fr=-90,Br=1;class uy extends On{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Fr,Br,t,i);l.layers=this.layers,this.add(l);const c=new pi(Fr,Br,t,i);c.layers=this.layers,this.add(c);const f=new pi(Fr,Br,t,i);f.layers=this.layers,this.add(f);const p=new pi(Fr,Br,t,i);p.layers=this.layers,this.add(p);const m=new pi(Fr,Br,t,i);m.layers=this.layers,this.add(m);const d=new pi(Fr,Br,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(t===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===fl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class fy extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class hy{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=dy.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function dy(){this._document.hidden===!1&&this.reset()}const i1=new Ye;class py{constructor(t,i,s=0,l=1/0){this.ray=new C0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new R0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ee("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return i1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(i1),this}intersectObject(t,i=!0,s=[]){return i0(t,this,s,i),s.sort(a1),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)i0(t[l],this,s,i);return s.sort(a1),s}}function a1(r,t){return r.distance-t.distance}function i0(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,p=c.length;f<p;f++)i0(c[f],t,i,!0)}}class my{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class s1{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=de(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(de(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const I0=class I0{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};I0.prototype.isMatrix2=!0;let r1=I0;class gy extends ps{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function o1(r,t,i,s){const l=_y(s);switch(i){case X1:return r*t;case x0:return r*t/l.components*l.byteLength;case S0:return r*t/l.components*l.byteLength;case Xs:return r*t*2/l.components*l.byteLength;case M0:return r*t*2/l.components*l.byteLength;case W1:return r*t*3/l.components*l.byteLength;case Ii:return r*t*4/l.components*l.byteLength;case y0:return r*t*4/l.components*l.byteLength;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case au:case su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:case wd:return Math.max(r,16)*Math.max(t,8)/4;case Ad:case Cd:return Math.max(r,8)*Math.max(t,8)/2;case Dd:case Ud:case Nd:case Pd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ld:case lu:case Od:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Id:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Bd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case kd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case qd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Zd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Kd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Qd:case jd:case Jd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case $d:case t0:return Math.ceil(r/4)*Math.ceil(t/4)*8;case cu:case e0:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function _y(r){switch(r){case mi:case H1:return{byteLength:1,components:1};case cl:case G1:case Wn:return{byteLength:2,components:1};case _0:case v0:return{byteLength:2,components:4};case Ji:case g0:case Oi:return{byteLength:4,components:1};case V1:case k1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:u0}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=u0);function lv(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function vy(r){const t=new WeakMap;function i(p,m){const d=p.array,_=p.usage,x=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,_),p.onUploadCallback();let M;if(d instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=r.SHORT;else if(d instanceof Uint32Array)M=r.UNSIGNED_INT;else if(d instanceof Int32Array)M=r.INT;else if(d instanceof Int8Array)M=r.BYTE;else if(d instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const _=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,_);else{x.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<x.length;M++){const E=x[g],C=x[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,E=x.length;M<E;M++){const C=x[M];r.bufferSubData(d,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sy=`#ifdef USE_ALPHAHASH
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
#endif`,My=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,by=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ty=`#ifdef USE_AOMAP
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
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ry=`#ifdef USE_BATCHING
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
#endif`,Cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ly=`#ifdef USE_IRIDESCENCE
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
#endif`,Ny=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vy=`#define PI 3.141592653589793
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
} // validated`,ky=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xy=`vec3 transformedNormal = objectNormal;
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
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jy=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,t2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e2=`#ifdef USE_ENVMAP
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
#endif`,n2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r2=`#ifdef USE_GRADIENTMAP
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
}`,o2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,f2=`#ifdef USE_ENVMAP
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
#endif`,h2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g2=`PhysicalMaterial material;
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
#endif`,_2=`uniform sampler2D dfgLUT;
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
}`,v2=`
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
#endif`,x2=`#if defined( RE_IndirectDiffuse )
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
#endif`,S2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,y2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w2=`#if defined( USE_POINTS_UV )
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
#endif`,D2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O2=`#ifdef USE_MORPHTARGETS
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
#endif`,I2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V2=`#ifdef USE_NORMALMAP
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
#endif`,k2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a3=`float getShadowMask() {
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
}`,s3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r3=`#ifdef USE_SKINNING
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
#endif`,o3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l3=`#ifdef USE_SKINNING
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
#endif`,c3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d3=`#ifdef USE_TRANSMISSION
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
#endif`,p3=`#ifdef USE_TRANSMISSION
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
#endif`,m3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S3=`uniform sampler2D t2D;
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
}`,M3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T3=`#include <common>
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
}`,A3=`#if DEPTH_PACKING == 3200
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
}`,R3=`#define DISTANCE
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
}`,C3=`#define DISTANCE
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
}`,w3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U3=`uniform float scale;
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
}`,L3=`uniform vec3 diffuse;
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
}`,N3=`#include <common>
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
}`,P3=`uniform vec3 diffuse;
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
}`,O3=`#define LAMBERT
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
}`,I3=`#define LAMBERT
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
}`,F3=`#define MATCAP
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
}`,B3=`#define MATCAP
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
}`,z3=`#define NORMAL
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
}`,H3=`#define NORMAL
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
}`,G3=`#define PHONG
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
}`,V3=`#define PHONG
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
}`,k3=`#define STANDARD
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
}`,X3=`#define STANDARD
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
}`,W3=`#define TOON
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
}`,Y3=`#define TOON
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
}`,q3=`uniform float size;
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
}`,Z3=`uniform vec3 diffuse;
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
}`,K3=`#include <common>
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
}`,Q3=`uniform vec3 color;
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
}`,j3=`uniform float rotation;
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
}`,J3=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:xy,alphahash_pars_fragment:Sy,alphamap_fragment:My,alphamap_pars_fragment:yy,alphatest_fragment:by,alphatest_pars_fragment:Ey,aomap_fragment:Ty,aomap_pars_fragment:Ay,batching_pars_vertex:Ry,batching_vertex:Cy,begin_vertex:wy,beginnormal_vertex:Dy,bsdfs:Uy,iridescence_fragment:Ly,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Oy,clipping_planes_pars_vertex:Iy,clipping_planes_vertex:Fy,color_fragment:By,color_pars_fragment:zy,color_pars_vertex:Hy,color_vertex:Gy,common:Vy,cube_uv_reflection_fragment:ky,defaultnormal_vertex:Xy,displacementmap_pars_vertex:Wy,displacementmap_vertex:Yy,emissivemap_fragment:qy,emissivemap_pars_fragment:Zy,colorspace_fragment:Ky,colorspace_pars_fragment:Qy,envmap_fragment:jy,envmap_common_pars_fragment:Jy,envmap_pars_fragment:$y,envmap_pars_vertex:t2,envmap_physical_pars_fragment:f2,envmap_vertex:e2,fog_vertex:n2,fog_pars_vertex:i2,fog_fragment:a2,fog_pars_fragment:s2,gradientmap_pars_fragment:r2,lightmap_pars_fragment:o2,lights_lambert_fragment:l2,lights_lambert_pars_fragment:c2,lights_pars_begin:u2,lights_toon_fragment:h2,lights_toon_pars_fragment:d2,lights_phong_fragment:p2,lights_phong_pars_fragment:m2,lights_physical_fragment:g2,lights_physical_pars_fragment:_2,lights_fragment_begin:v2,lights_fragment_maps:x2,lights_fragment_end:S2,lightprobes_pars_fragment:M2,logdepthbuf_fragment:y2,logdepthbuf_pars_fragment:b2,logdepthbuf_pars_vertex:E2,logdepthbuf_vertex:T2,map_fragment:A2,map_pars_fragment:R2,map_particle_fragment:C2,map_particle_pars_fragment:w2,metalnessmap_fragment:D2,metalnessmap_pars_fragment:U2,morphinstance_vertex:L2,morphcolor_vertex:N2,morphnormal_vertex:P2,morphtarget_pars_vertex:O2,morphtarget_vertex:I2,normal_fragment_begin:F2,normal_fragment_maps:B2,normal_pars_fragment:z2,normal_pars_vertex:H2,normal_vertex:G2,normalmap_pars_fragment:V2,clearcoat_normal_fragment_begin:k2,clearcoat_normal_fragment_maps:X2,clearcoat_pars_fragment:W2,iridescence_pars_fragment:Y2,opaque_fragment:q2,packing:Z2,premultiplied_alpha_fragment:K2,project_vertex:Q2,dithering_fragment:j2,dithering_pars_fragment:J2,roughnessmap_fragment:$2,roughnessmap_pars_fragment:t3,shadowmap_pars_fragment:e3,shadowmap_pars_vertex:n3,shadowmap_vertex:i3,shadowmask_pars_fragment:a3,skinbase_vertex:s3,skinning_pars_vertex:r3,skinning_vertex:o3,skinnormal_vertex:l3,specularmap_fragment:c3,specularmap_pars_fragment:u3,tonemapping_fragment:f3,tonemapping_pars_fragment:h3,transmission_fragment:d3,transmission_pars_fragment:p3,uv_pars_fragment:m3,uv_pars_vertex:g3,uv_vertex:_3,worldpos_vertex:v3,background_vert:x3,background_frag:S3,backgroundCube_vert:M3,backgroundCube_frag:y3,cube_vert:b3,cube_frag:E3,depth_vert:T3,depth_frag:A3,distance_vert:R3,distance_frag:C3,equirect_vert:w3,equirect_frag:D3,linedashed_vert:U3,linedashed_frag:L3,meshbasic_vert:N3,meshbasic_frag:P3,meshlambert_vert:O3,meshlambert_frag:I3,meshmatcap_vert:F3,meshmatcap_frag:B3,meshnormal_vert:z3,meshnormal_frag:H3,meshphong_vert:G3,meshphong_frag:V3,meshphysical_vert:k3,meshphysical_frag:X3,meshtoon_vert:W3,meshtoon_frag:Y3,points_vert:q3,points_frag:Z3,shadow_vert:K3,shadow_frag:Q3,sprite_vert:j3,sprite_frag:J3},Pt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},qi={basic:{uniforms:kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:kn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:kn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new se(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:kn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:kn([Pt.points,Pt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:kn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:kn([Pt.common,Pt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:kn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:kn([Pt.sprite,Pt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:kn([Pt.common,Pt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:kn([Pt.lights,Pt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};qi.physical={uniforms:kn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Kc={r:0,b:0,g:0},$3=new Ye,cv=new oe;cv.set(-1,0,0,0,1,0,0,0,1);function tb(r,t,i,s,l,c){const f=new se(0);let p=l===!0?0:1,m,d,_=null,x=0,g=null;function M(F){let B=F.isScene===!0?F.background:null;if(B&&B.isTexture){const w=F.backgroundBlurriness>0;B=t.get(B,w)}return B}function E(F){let B=!1;const w=M(F);w===null?y(f,p):w&&w.isColor&&(y(w,1),B=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(F,B){const w=M(B);w&&(w.isCubeTexture||w.mapping===vu)?(d===void 0&&(d=new vn(new eo(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:jr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($3.makeRotationFromEuler(B.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(cv),d.material.toneMapped=Se.getTransfer(w.colorSpace)!==Ue,(_!==w||x!==w.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,_=w,x=w.version,g=r.toneMapping),d.layers.enableAll(),F.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new vn(new ml(2,2),new Cn({name:"BackgroundMaterial",uniforms:jr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Se.getTransfer(w.colorSpace)!==Ue,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||x!==w.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=w,x=w.version,g=r.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function y(F,B){F.getRGB(Kc,nv(r)),i.buffers.color.setClear(Kc.r,Kc.g,Kc.b,B,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(F,B=1){f.set(F),p=B,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(F){p=F,y(f,p)},render:E,addToRenderList:C,dispose:S}}function eb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function p(G,Q,ht,_t,J){let I=!1;const H=x(G,_t,ht,Q);c!==H&&(c=H,d(c.object)),I=M(G,_t,ht,J),I&&E(G,_t,ht,J),J!==null&&t.update(J,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,w(G,Q,ht,_t),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function m(){return r.createVertexArray()}function d(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function x(G,Q,ht,_t){const J=_t.wireframe===!0;let I=s[Q.id];I===void 0&&(I={},s[Q.id]=I);const H=G.isInstancedMesh===!0?G.id:0;let $=I[H];$===void 0&&($={},I[H]=$);let mt=$[ht.id];mt===void 0&&(mt={},$[ht.id]=mt);let bt=mt[J];return bt===void 0&&(bt=g(m()),mt[J]=bt),bt}function g(G){const Q=[],ht=[],_t=[];for(let J=0;J<i;J++)Q[J]=0,ht[J]=0,_t[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ht,attributeDivisors:_t,object:G,attributes:{},index:null}}function M(G,Q,ht,_t){const J=c.attributes,I=Q.attributes;let H=0;const $=ht.getAttributes();for(const mt in $)if($[mt].location>=0){const U=J[mt];let Z=I[mt];if(Z===void 0&&(mt==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),mt==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==_t}function E(G,Q,ht,_t){const J={},I=Q.attributes;let H=0;const $=ht.getAttributes();for(const mt in $)if($[mt].location>=0){let U=I[mt];U===void 0&&(mt==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),mt==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),J[mt]=Z,H++}c.attributes=J,c.attributesNum=H,c.index=_t}function C(){const G=c.newAttributes;for(let Q=0,ht=G.length;Q<ht;Q++)G[Q]=0}function y(G){S(G,0)}function S(G,Q){const ht=c.newAttributes,_t=c.enabledAttributes,J=c.attributeDivisors;ht[G]=1,_t[G]===0&&(r.enableVertexAttribArray(G),_t[G]=1),J[G]!==Q&&(r.vertexAttribDivisor(G,Q),J[G]=Q)}function F(){const G=c.newAttributes,Q=c.enabledAttributes;for(let ht=0,_t=Q.length;ht<_t;ht++)Q[ht]!==G[ht]&&(r.disableVertexAttribArray(ht),Q[ht]=0)}function B(G,Q,ht,_t,J,I,H){H===!0?r.vertexAttribIPointer(G,Q,ht,J,I):r.vertexAttribPointer(G,Q,ht,_t,J,I)}function w(G,Q,ht,_t){C();const J=_t.attributes,I=ht.getAttributes(),H=Q.defaultAttributeValues;for(const $ in I){const mt=I[$];if(mt.location>=0){let bt=J[$];if(bt===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(bt=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(bt=G.instanceColor)),bt!==void 0){const U=bt.normalized,Z=bt.itemSize,yt=t.get(bt);if(yt===void 0)continue;const Rt=yt.buffer,Ot=yt.type,at=yt.bytesPerElement,xt=Ot===r.INT||Ot===r.UNSIGNED_INT||bt.gpuType===g0;if(bt.isInterleavedBufferAttribute){const Mt=bt.data,zt=Mt.stride,ie=bt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<mt.locationSize;Qt++)S(mt.location+Qt,Mt.meshPerAttribute);G.isInstancedMesh!==!0&&_t._maxInstanceCount===void 0&&(_t._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Qt=0;Qt<mt.locationSize;Qt++)y(mt.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Qt=0;Qt<mt.locationSize;Qt++)B(mt.location+Qt,Z/mt.locationSize,Ot,U,zt*at,(ie+Z/mt.locationSize*Qt)*at,xt)}else{if(bt.isInstancedBufferAttribute){for(let Mt=0;Mt<mt.locationSize;Mt++)S(mt.location+Mt,bt.meshPerAttribute);G.isInstancedMesh!==!0&&_t._maxInstanceCount===void 0&&(_t._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Mt=0;Mt<mt.locationSize;Mt++)y(mt.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Mt=0;Mt<mt.locationSize;Mt++)B(mt.location+Mt,Z/mt.locationSize,Ot,U,Z*at,Z/mt.locationSize*Mt*at,xt)}}else if(H!==void 0){const U=H[$];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(mt.location,U);break;case 3:r.vertexAttrib3fv(mt.location,U);break;case 4:r.vertexAttrib4fv(mt.location,U);break;default:r.vertexAttrib1fv(mt.location,U)}}}}F()}function P(){N();for(const G in s){const Q=s[G];for(const ht in Q){const _t=Q[ht];for(const J in _t){const I=_t[J];for(const H in I)_(I[H].object),delete I[H];delete _t[J]}}delete s[G]}}function L(G){if(s[G.id]===void 0)return;const Q=s[G.id];for(const ht in Q){const _t=Q[ht];for(const J in _t){const I=_t[J];for(const H in I)_(I[H].object),delete I[H];delete _t[J]}}delete s[G.id]}function O(G){for(const Q in s){const ht=s[Q];for(const _t in ht){const J=ht[_t];if(J[G.id]===void 0)continue;const I=J[G.id];for(const H in I)_(I[H].object),delete I[H];delete J[G.id]}}}function T(G){for(const Q in s){const ht=s[Q],_t=G.isInstancedMesh===!0?G.id:0,J=ht[_t];if(J!==void 0){for(const I in J){const H=J[I];for(const $ in H)_(H[$].object),delete H[$];delete J[I]}delete ht[_t],Object.keys(ht).length===0&&delete s[Q]}}}function N(){Y(),f=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:Y,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:y,disableUnusedAttributes:F}}function nb(r,t,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function f(m,d,_){_!==0&&(r.drawArraysInstanced(s,m,d,_),i.update(d,s,_))}function p(m,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,_);let g=0;for(let M=0;M<_;M++)g+=d[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function ib(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Ii&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const T=O===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==mi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Oi&&!T)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(ne("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:F,maxVaryings:B,maxFragmentUniforms:w,maxSamples:P,samples:L}}function ab(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Ta,p=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,M){const E=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,S=r.get(x);if(!l||E===null||E.length===0||c&&!y)c?_(null):d();else{const F=c?0:s,B=F*4;let w=S.clippingState||null;m.value=w,w=_(E,g,B,M);for(let P=0;P!==B;++P)w[P]=i[P];S.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,M,E){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=m.value,E!==!0||y===null){const S=M+C*4,F=g.matrixWorldInverse;p.getNormalMatrix(F),(y===null||y.length<S)&&(y=new Float32Array(S));for(let B=0,w=M;B!==C;++B,w+=4)f.copy(x[B]).applyMatrix4(F,p),f.normal.toArray(y,w),y[w+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}const fs=4,l1=[.125,.215,.35,.446,.526,.582],Hs=20,sb=256,nl=new xu,c1=new se;let rd=null,od=0,ld=0,cd=!1;const rb=new j;class a0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=rb}=c;rd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rd,od,ld),this._renderer.xr.enabled=cd,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ks||t.mapping===Kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Wn,format:Ii,colorSpace:fu,depthBuffer:!1},l=u1(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u1(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ob(c)),this._blurMaterial=cb(c,t,i),this._ggxMaterial=lb(c,t,i)}return l}_compileMaterial(t){const i=new vn(new $i,t);this._renderer.compile(i,nl)}_sceneToCubeUV(t,i,s,l,c){const m=new pi(90,1,i,s),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(c1),x.toneMapping=ji,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vn(new eo,new w0({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const F=t.background;F?F.isColor&&(y.color.copy(F),t.background=null,S=!0):(y.color.copy(c1),S=!0);for(let B=0;B<6;B++){const w=B%3;w===0?(m.up.set(0,d[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[B],c.y,c.z)):w===1?(m.up.set(0,0,d[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[B],c.z)):(m.up.set(0,d[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[B]));const P=this._cubeSize;zr(l,w*P,B>2?P:0,P,P),x.setRenderTarget(l),S&&x.render(C,m),x.render(t,m)}x.toneMapping=M,x.autoClear=g,t.background=F}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===ks||t.mapping===Kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=h1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f1());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;zr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,nl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,d=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-_*_),g=0+d*1.25,M=x*g,{_lodMax:E}=this,C=this._sizeLods[s],y=3*C*(s>E-fs?s-E+fs:0),S=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=E-i,zr(c,y,S,3*C,2*C),l.setRenderTarget(c),l.render(p,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,zr(t,y,S,3*C,2*C),l.setRenderTarget(t),l.render(p,nl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ee("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Hs-1),C=c/E,y=isFinite(c)?1+Math.floor(_*C):Hs;y>Hs&&ne(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Hs}`);const S=[];let F=0;for(let O=0;O<Hs;++O){const T=O/C,N=Math.exp(-T*T/2);S.push(N),O===0?F+=N:O<y&&(F+=2*N)}for(let O=0;O<S.length;O++)S[O]=S[O]/F;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:B}=this;g.dTheta.value=E,g.mipInt.value=B-s;const w=this._sizeLods[l],P=3*w*(l>B-fs?l-B+fs:0),L=4*(this._cubeSize-w);zr(i,P,L,3*w,2*w),m.setRenderTarget(i),m.render(x,nl)}}function ob(r){const t=[],i=[],s=[];let l=r;const c=r-fs+1+l1.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>r-fs?m=l1[f-r+fs-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,x=1+d,g=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,E=6,C=3,y=2,S=1,F=new Float32Array(C*E*M),B=new Float32Array(y*E*M),w=new Float32Array(S*E*M);for(let L=0;L<M;L++){const O=L%3*2/3-1,T=L>2?0:-1,N=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];F.set(N,C*E*L),B.set(g,y*E*L);const Y=[L,L,L,L,L,L];w.set(Y,S*E*L)}const P=new $i;P.setAttribute("position",new gi(F,C)),P.setAttribute("uv",new gi(B,y)),P.setAttribute("faceIndex",new gi(w,S)),s.push(new vn(P,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function u1(r,t,i){const s=new Pn(r,t,i);return s.texture.mapping=vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function lb(r,t,i){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function cb(r,t,i){const s=new Float32Array(Hs),l=new j(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function f1(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function h1(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}class uv extends Pn{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new tv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new eo(5,5,5),c=new Cn({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:Fi});c.uniforms.tEquirect.value=i;const f=new vn(l,c),p=i.minFilter;return i.minFilter===Gs&&(i.minFilter=Rn),new uy(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function ub(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Nh||M===Ph)if(t.has(g)){const E=t.get(g).texture;return p(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new uv(E.height);return C.fromEquirectangularTexture(r,g),t.set(g,C),g.addEventListener("dispose",d),p(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,E=M===Nh||M===Ph,C=M===ks||M===Kr;if(E||C){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new a0(r)),y=E?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const F=g.image;return E&&F&&F.height>0||C&&F&&m(F)?(s===null&&(s=new a0(r)),y=E?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function p(g,M){return M===Nh?g.mapping=ks:M===Ph&&(g.mapping=Kr),g}function m(g){let M=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&M++;return M===E}function d(g){const M=g.target;M.removeEventListener("dispose",d);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function fb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wr("WebGLRenderer: "+s+" extension not supported."),l}}}function hb(r,t,i,s){const l={},c=new WeakMap;function f(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function d(x){const g=[],M=x.index,E=x.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const F=M.array;C=M.version;for(let B=0,w=F.length;B<w;B+=3){const P=F[B+0],L=F[B+1],O=F[B+2];g.push(P,L,L,O,O,P)}}else{const F=E.array;C=E.version;for(let B=0,w=F.length/3-1;B<w;B+=3){const P=B+0,L=B+1,O=B+2;g.push(P,L,L,O,O,P)}}const y=new(E.count>=65535?J1:j1)(g,1);y.version=C;const S=c.get(x);S&&t.remove(S),c.set(x,y)}function _(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:_}}function db(r,t,i){let s;function l(x){s=x}let c,f;function p(x){c=x.type,f=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*f),i.update(g,s,1)}function d(x,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,x*f,M),i.update(g,s,M))}function _(x,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,M);let C=0;for(let y=0;y<M;y++)C+=g[y];i.update(C,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_}function pb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ee("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function mb(r,t,i){const s=new WeakMap,l=new tn;function c(f,p,m){const d=f.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let Y=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",Y)};var M=Y;g!==void 0&&g.texture.dispose();const E=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let w=0;E===!0&&(w=1),C===!0&&(w=2),y===!0&&(w=3);let P=p.attributes.position.count*w,L=1;P>t.maxTextureSize&&(L=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*L*4*x),T=new Z1(O,P,L,x);T.type=Oi,T.needsUpdate=!0;const N=w*4;for(let G=0;G<x;G++){const Q=S[G],ht=F[G],_t=B[G],J=P*L*4*G;for(let I=0;I<Q.count;I++){const H=I*N;E===!0&&(l.fromBufferAttribute(Q,I),O[J+H+0]=l.x,O[J+H+1]=l.y,O[J+H+2]=l.z,O[J+H+3]=0),C===!0&&(l.fromBufferAttribute(ht,I),O[J+H+4]=l.x,O[J+H+5]=l.y,O[J+H+6]=l.z,O[J+H+7]=0),y===!0&&(l.fromBufferAttribute(_t,I),O[J+H+8]=l.x,O[J+H+9]=l.y,O[J+H+10]=l.z,O[J+H+11]=_t.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new qt(P,L)},s.set(p,g),p.addEventListener("dispose",Y)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<d.length;y++)E+=d[y];const C=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function gb(r,t,i,s,l){let c=new WeakMap;function f(d){const _=l.render.frame,x=d.geometry,g=t.get(d,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:p}}const _b={[h0]:"LINEAR_TONE_MAPPING",[d0]:"REINHARD_TONE_MAPPING",[p0]:"CINEON_TONE_MAPPING",[gu]:"ACES_FILMIC_TONE_MAPPING",[Zr]:"AGX_TONE_MAPPING",[_u]:"NEUTRAL_TONE_MAPPING",[m0]:"CUSTOM_TONE_MAPPING"};function vb(r,t,i,s,l,c){const f=new Pn(t,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Qr(t,i):void 0}),p=new Pn(t,i,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),m=new $i;m.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Bi([0,2,0,0,2,0],2));const d=new iv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new vn(m,d),x=new xu(-1,1,1,-1,0,1);let g=null,M=null,E=!1,C,y=null,S=[],F=!1;this.setSize=function(B,w){f.setSize(B,w),p.setSize(B,w);for(let P=0;P<S.length;P++){const L=S[P];L.setSize&&L.setSize(B,w)}},this.setEffects=function(B){S=B,F=S.length>0&&S[0].isRenderPass===!0;const w=f.width,P=f.height;for(let L=0;L<S.length;L++){const O=S[L];O.setSize&&O.setSize(w,P)}},this.begin=function(B,w){if(E||B.toneMapping===ji&&S.length===0)return!1;if(y=w,w!==null){const P=w.width,L=w.height;(f.width!==P||f.height!==L)&&this.setSize(P,L)}return F===!1&&B.setRenderTarget(f),C=B.toneMapping,B.toneMapping=ji,!0},this.hasRenderPass=function(){return F},this.end=function(B,w){B.toneMapping=C,E=!0;let P=f,L=p;for(let O=0;O<S.length;O++){const T=S[O];if(T.enabled!==!1&&(T.render(B,L,P,w),T.needsSwap!==!1)){const N=P;P=L,L=N}}if(g!==B.outputColorSpace||M!==B.toneMapping){g=B.outputColorSpace,M=B.toneMapping,d.defines={},Se.getTransfer(g)===Ue&&(d.defines.SRGB_TRANSFER="");const O=_b[M];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,B.setRenderTarget(y),B.render(_,x),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),d.dispose()}}const fv=new Hn,s0=new Qr(1,1),hv=new Z1,dv=new IM,pv=new tv,d1=[],p1=[],m1=new Float32Array(16),g1=new Float32Array(9),_1=new Float32Array(4);function no(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=d1[l];if(c===void 0&&(c=new Float32Array(l),d1[l]=c),t!==0){s.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,r[f].toArray(c,p)}return c}function bn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function En(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Mu(r,t){let i=p1[t];i===void 0&&(i=new Int32Array(t),p1[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function xb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Sb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;r.uniform2fv(this.addr,t),En(i,t)}}function Mb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bn(i,t))return;r.uniform3fv(this.addr,t),En(i,t)}}function yb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;r.uniform4fv(this.addr,t),En(i,t)}}function bb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),En(i,t)}else{if(bn(i,s))return;_1.set(s),r.uniformMatrix2fv(this.addr,!1,_1),En(i,s)}}function Eb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),En(i,t)}else{if(bn(i,s))return;g1.set(s),r.uniformMatrix3fv(this.addr,!1,g1),En(i,s)}}function Tb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),En(i,t)}else{if(bn(i,s))return;m1.set(s),r.uniformMatrix4fv(this.addr,!1,m1),En(i,s)}}function Ab(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function Rb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;r.uniform2iv(this.addr,t),En(i,t)}}function Cb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;r.uniform3iv(this.addr,t),En(i,t)}}function wb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;r.uniform4iv(this.addr,t),En(i,t)}}function Db(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Ub(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;r.uniform2uiv(this.addr,t),En(i,t)}}function Lb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;r.uniform3uiv(this.addr,t),En(i,t)}}function Nb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;r.uniform4uiv(this.addr,t),En(i,t)}}function Pb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(s0.compareFunction=i.isReversedDepthBuffer()?E0:b0,c=s0):c=fv,i.setTexture2D(t||c,l)}function Ob(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||dv,l)}function Ib(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||pv,l)}function Fb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||hv,l)}function Bb(r){switch(r){case 5126:return xb;case 35664:return Sb;case 35665:return Mb;case 35666:return yb;case 35674:return bb;case 35675:return Eb;case 35676:return Tb;case 5124:case 35670:return Ab;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return wb;case 5125:return Db;case 36294:return Ub;case 36295:return Lb;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Fb}}function zb(r,t){r.uniform1fv(this.addr,t)}function Hb(r,t){const i=no(t,this.size,2);r.uniform2fv(this.addr,i)}function Gb(r,t){const i=no(t,this.size,3);r.uniform3fv(this.addr,i)}function Vb(r,t){const i=no(t,this.size,4);r.uniform4fv(this.addr,i)}function kb(r,t){const i=no(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Xb(r,t){const i=no(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Wb(r,t){const i=no(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Yb(r,t){r.uniform1iv(this.addr,t)}function qb(r,t){r.uniform2iv(this.addr,t)}function Zb(r,t){r.uniform3iv(this.addr,t)}function Kb(r,t){r.uniform4iv(this.addr,t)}function Qb(r,t){r.uniform1uiv(this.addr,t)}function jb(r,t){r.uniform2uiv(this.addr,t)}function Jb(r,t){r.uniform3uiv(this.addr,t)}function $b(r,t){r.uniform4uiv(this.addr,t)}function tE(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=s0:f=fv;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function eE(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||dv,c[f])}function nE(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||pv,c[f])}function iE(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);bn(s,c)||(r.uniform1iv(this.addr,c),En(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||hv,c[f])}function aE(r){switch(r){case 5126:return zb;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return kb;case 35675:return Xb;case 35676:return Wb;case 5124:case 35670:return Yb;case 35667:case 35671:return qb;case 35668:case 35672:return Zb;case 35669:case 35673:return Kb;case 5125:return Qb;case 36294:return jb;case 36295:return Jb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return eE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return iE}}class sE{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Bb(i.type)}}class rE{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=aE(i.type)}}class oE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function v1(r,t){r.seq.push(t),r.map[t.id]=t}function lE(r,t,i){const s=r.name,l=s.length;for(ud.lastIndex=0;;){const c=ud.exec(s),f=ud.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){v1(i,d===void 0?new sE(p,r,t):new rE(p,r,t));break}else{let x=i.map[p];x===void 0&&(x=new oE(p),v1(i,x)),i=x}}}class ru{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);lE(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function x1(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const cE=37297;let uE=0;function fE(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const S1=new oe;function hE(r){Se._getMatrix(S1,Se.workingColorSpace,r);const t=`mat3( ${S1.elements.map(i=>i.toFixed(4))} )`;switch(Se.getTransfer(r)){case hu:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function M1(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+fE(r.getShaderSource(t),p)}else return c}function dE(r,t){const i=hE(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const pE={[h0]:"Linear",[d0]:"Reinhard",[p0]:"Cineon",[gu]:"ACESFilmic",[Zr]:"AgX",[_u]:"Neutral",[m0]:"Custom"};function mE(r,t){const i=pE[t];return i===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Qc=new j;function gE(){Se.getLuminanceCoefficients(Qc);const r=Qc.x.toFixed(4),t=Qc.y.toFixed(4),i=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _E(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function vE(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function xE(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:p}}return i}function sl(r){return r!==""}function y1(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function b1(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function r0(r){return r.replace(SE,yE)}const ME=new Map;function yE(r,t){let i=fe[t];if(i===void 0){const s=ME.get(t);if(s!==void 0)i=fe[s],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return r0(i)}const bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E1(r){return r.replace(bE,EE)}function EE(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function T1(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const TE={[eu]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function AE(r){return TE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RE={[ks]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function CE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":RE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const wE={[Kr]:"ENVMAP_MODE_REFRACTION"};function DE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":wE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UE={[f0]:"ENVMAP_BLENDING_MULTIPLY",[$S]:"ENVMAP_BLENDING_MIX",[tM]:"ENVMAP_BLENDING_ADD"};function LE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":UE[r.combine]||"ENVMAP_BLENDING_NONE"}function NE(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function PE(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=AE(i),d=CE(i),_=DE(i),x=LE(i),g=NE(i),M=_E(i),E=vE(c),C=l.createProgram();let y,S,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),S.length>0&&(S+=`
`)):(y=[T1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),S=[T1(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?fe.tonemapping_pars_fragment:"",i.toneMapping!==ji?mE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,dE("linearToOutputTexel",i.outputColorSpace),gE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),f=r0(f),f=y1(f,i),f=b1(f,i),p=r0(p),p=y1(p,i),p=b1(p,i),f=E1(f),p=E1(p),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===U_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const B=F+y+f,w=F+S+p,P=x1(l,l.VERTEX_SHADER,B),L=x1(l,l.FRAGMENT_SHADER,w);l.attachShader(C,P),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(G){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",ht=l.getShaderInfoLog(P)||"",_t=l.getShaderInfoLog(L)||"",J=Q.trim(),I=ht.trim(),H=_t.trim();let $=!0,mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,P,L);else{const bt=M1(l,P,"vertex"),U=M1(l,L,"fragment");Ee("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+bt+`
`+U)}else J!==""?ne("WebGLProgram: Program Info Log:",J):(I===""||H==="")&&(mt=!1);mt&&(G.diagnostics={runnable:$,programLog:J,vertexShader:{log:I,prefix:y},fragmentShader:{log:H,prefix:S}})}l.deleteShader(P),l.deleteShader(L),T=new ru(l,C),N=xE(l,C)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(C,cE)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=uE++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=L,this}let OE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new FE(t),i.set(t,s)),s}}class FE{constructor(t){this.id=OE++,this.code=t,this.usedTimes=0}}function BE(r){return r===Xs||r===lu||r===cu}function zE(r,t,i,s,l,c){const f=new R0,p=new IE,m=new Set,d=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,N,Y,G,Q,ht){const _t=G.fog,J=Q.geometry,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=t.get(T.envMap||I,H),mt=$&&$.mapping===vu?$.image.height:null,bt=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ne("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=U!==void 0?U.length:0;let yt=0;J.morphAttributes.position!==void 0&&(yt=1),J.morphAttributes.normal!==void 0&&(yt=2),J.morphAttributes.color!==void 0&&(yt=3);let Rt,Ot,at,xt;if(bt){const Gt=qi[bt];Rt=Gt.vertexShader,Ot=Gt.fragmentShader}else{Rt=T.vertexShader,Ot=T.fragmentShader;const Gt=p.getVertexShaderStage(T),Qe=p.getFragmentShaderStage(T);p.update(T,Gt,Qe),at=Gt.id,xt=Qe.id}const Mt=r.getRenderTarget(),zt=r.state.buffers.depth.getReversed(),ie=Q.isInstancedMesh===!0,Qt=Q.isBatchedMesh===!0,qe=!!T.map,he=!!T.matcap,Me=!!$,ye=!!T.aoMap,pe=!!T.lightMap,en=!!T.bumpMap&&T.wireframe===!1,nn=!!T.normalMap,an=!!T.displacementMap,ln=!!T.emissiveMap,We=!!T.metalnessMap,sn=!!T.roughnessMap,W=T.anisotropy>0,Be=T.clearcoat>0,Ce=T.dispersion>0,D=T.iridescence>0,b=T.sheen>0,K=T.transmission>0,st=W&&!!T.anisotropyMap,ut=Be&&!!T.clearcoatMap,Et=Be&&!!T.clearcoatNormalMap,wt=Be&&!!T.clearcoatRoughnessMap,ct=D&&!!T.iridescenceMap,ft=D&&!!T.iridescenceThicknessMap,At=b&&!!T.sheenColorMap,Ft=b&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Dt=!!T.specularColorMap,Kt=!!T.specularIntensityMap,jt=K&&!!T.transmissionMap,ae=K&&!!T.thicknessMap,k=!!T.gradientMap,Tt=!!T.alphaMap,pt=T.alphaTest>0,Ct=!!T.alphaHash,It=!!T.extensions;let St=ji;T.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(St=r.toneMapping);const Wt={shaderID:bt,shaderType:T.type,shaderName:T.name,vertexShader:Rt,fragmentShader:Ot,defines:T.defines,customVertexShaderID:at,customFragmentShaderID:xt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&Q._colorsTexture!==null,instancing:ie,instancingColor:ie&&Q.instanceColor!==null,instancingMorph:ie&&Q.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:qe,matcap:he,envMap:Me,envMapMode:Me&&$.mapping,envMapCubeUVHeight:mt,aoMap:ye,lightMap:pe,bumpMap:en,normalMap:nn,displacementMap:an,emissiveMap:ln,normalMapObjectSpace:nn&&T.normalMapType===aM,normalMapTangentSpace:nn&&T.normalMapType===uu,packedNormalMap:nn&&T.normalMapType===uu&&BE(T.normalMap.format),metalnessMap:We,roughnessMap:sn,anisotropy:W,anisotropyMap:st,clearcoat:Be,clearcoatMap:ut,clearcoatNormalMap:Et,clearcoatRoughnessMap:wt,dispersion:Ce,iridescence:D,iridescenceMap:ct,iridescenceThicknessMap:ft,sheen:b,sheenColorMap:At,sheenRoughnessMap:Ft,specularMap:Lt,specularColorMap:Dt,specularIntensityMap:Kt,transmission:K,transmissionMap:jt,thicknessMap:ae,gradientMap:k,opaque:T.transparent===!1&&T.blending===Xr&&T.alphaToCoverage===!1,alphaMap:Tt,alphaTest:pt,alphaHash:Ct,combine:T.combine,mapUv:qe&&E(T.map.channel),aoMapUv:ye&&E(T.aoMap.channel),lightMapUv:pe&&E(T.lightMap.channel),bumpMapUv:en&&E(T.bumpMap.channel),normalMapUv:nn&&E(T.normalMap.channel),displacementMapUv:an&&E(T.displacementMap.channel),emissiveMapUv:ln&&E(T.emissiveMap.channel),metalnessMapUv:We&&E(T.metalnessMap.channel),roughnessMapUv:sn&&E(T.roughnessMap.channel),anisotropyMapUv:st&&E(T.anisotropyMap.channel),clearcoatMapUv:ut&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Et&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:At&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(T.sheenRoughnessMap.channel),specularMapUv:Lt&&E(T.specularMap.channel),specularColorMapUv:Dt&&E(T.specularColorMap.channel),specularIntensityMapUv:Kt&&E(T.specularIntensityMap.channel),transmissionMapUv:jt&&E(T.transmissionMap.channel),thicknessMapUv:ae&&E(T.thicknessMap.channel),alphaMapUv:Tt&&E(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(nn||W),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(qe||Tt),fog:!!_t,useFog:T.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&nn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:zt,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:yt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ht.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:St,decodeVideoTexture:qe&&T.map.isVideoTexture===!0&&Se.getTransfer(T.map.colorSpace)===Ue,decodeVideoTextureEmissive:ln&&T.emissiveMap.isVideoTexture===!0&&Se.getTransfer(T.emissiveMap.colorSpace)===Ue,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Zi,flipSided:T.side===Xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)N.push(Y),N.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(S(N,T),F(N,T),N.push(r.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function S(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function F(T,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),N.packedNormalMap&&f.enable(22),N.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),N.numLightProbeGrids>0&&f.enable(22),N.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function B(T){const N=M[T.type];let Y;if(N){const G=qi[N];Y=dl.clone(G.uniforms)}else Y=T.uniforms;return Y}function w(T,N){let Y=_.get(N);return Y!==void 0?++Y.usedTimes:(Y=new PE(r,N,T,l),d.push(Y),_.set(N,Y)),Y}function P(T){if(--T.usedTimes===0){const N=d.indexOf(T);d[N]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function L(T){p.remove(T)}function O(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:B,acquireProgram:w,releaseProgram:P,releaseShaderCache:L,programs:d,dispose:O}}function HE(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function GE(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function A1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function R1(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,E,C,y,S){let F=r[t];return F===void 0?(F={id:g.id,object:g,geometry:M,material:E,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:S},r[t]=F):(F.id=g.id,F.object=g,F.geometry=M,F.material=E,F.materialVariant=f(g),F.groupOrder=C,F.renderOrder=g.renderOrder,F.z=y,F.group=S),t++,F}function m(g,M,E,C,y,S){const F=p(g,M,E,C,y,S);E.transmission>0?s.push(F):E.transparent===!0?l.push(F):i.push(F)}function d(g,M,E,C,y,S){const F=p(g,M,E,C,y,S);E.transmission>0?s.unshift(F):E.transparent===!0?l.unshift(F):i.unshift(F)}function _(g,M,E){i.length>1&&i.sort(g||GE),s.length>1&&s.sort(M||A1),l.length>1&&l.sort(M||A1),E&&(i.reverse(),s.reverse(),l.reverse())}function x(){for(let g=t,M=r.length;g<M;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:_}}function VE(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new R1,r.set(s,[f])):l>=c.length?(f=new R1,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function kE(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new se};break;case"SpotLight":i={position:new j,direction:new j,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new se,groundColor:new se};break;case"RectAreaLight":i={color:new se,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function XE(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let WE=0;function YE(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function qE(r){const t=new kE,i=XE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new j);const l=new j,c=new Ye,f=new Ye;function p(d){let _=0,x=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let M=0,E=0,C=0,y=0,S=0,F=0,B=0,w=0,P=0,L=0,O=0;d.sort(YE);for(let N=0,Y=d.length;N<Y;N++){const G=d[N],Q=G.color,ht=G.intensity,_t=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Xs?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=Q.r*ht,x+=Q.g*ht,g+=Q.b*ht;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],ht);O++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.directionalShadow[M]=$,s.directionalShadowMap[M]=J,s.directionalShadowMatrix[M]=G.shadow.matrix,F++}s.directional[M]=I,M++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(Q).multiplyScalar(ht),I.distance=_t,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[C]=I;const H=G.shadow;if(G.map&&(s.spotLightMap[P]=G.map,P++,H.updateMatrices(G),G.castShadow&&L++),s.spotLightMatrix[C]=H.matrix,G.castShadow){const $=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.spotShadow[C]=$,s.spotShadowMap[C]=J,w++}C++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(Q).multiplyScalar(ht),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=I,y++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const H=G.shadow,$=i.get(G);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=J,s.pointShadowMatrix[E]=G.shadow.matrix,B++}s.point[E]=I,E++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(ht),I.groundColor.copy(G.groundColor).multiplyScalar(ht),s.hemi[S]=I,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==F||T.numPointShadows!==B||T.numSpotShadows!==w||T.numSpotMaps!==P||T.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=w+P-L,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=O,T.directionalLength=M,T.pointLength=E,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=F,T.numPointShadows=B,T.numSpotShadows=w,T.numSpotMaps=P,T.numLightProbes=O,s.version=WE++)}function m(d,_){let x=0,g=0,M=0,E=0,C=0;const y=_.matrixWorldInverse;for(let S=0,F=d.length;S<F;S++){const B=d[S];if(B.isDirectionalLight){const w=s.directional[x];w.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),x++}else if(B.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(B.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(y),f.identity(),c.copy(B.matrixWorld),c.premultiply(y),f.extractRotation(c),w.halfWidth.set(B.width*.5,0,0),w.halfHeight.set(0,B.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(B.isPointLight){const w=s.point[g];w.position.setFromMatrixPosition(B.matrixWorld),w.position.applyMatrix4(y),g++}else if(B.isHemisphereLight){const w=s.hemi[C];w.direction.setFromMatrixPosition(B.matrixWorld),w.direction.transformDirection(y),C++}}}return{setup:p,setupView:m,state:s}}function C1(r){const t=new qE(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){t.setup(i)}function _(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function ZE(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new C1(r),t.set(l,[p])):c>=f.length?(p=new C1(r),f.push(p)):p=f[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QE=`uniform sampler2D shadow_pass;
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
}`,jE=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],JE=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],w1=new Ye,il=new j,fd=new j;function $E(r,t,i){let s=new D0;const l=new qt,c=new qt,f=new tn,p=new av,m=new ry,d={},_=i.maxTextureSize,x={[hs]:Xn,[Xn]:hs,[Zi]:Zi},g=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:KE,fragmentShader:QE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new $i;E.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new vn(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let S=this.type;this.render=function(L,O,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===PS&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eu);const N=r.getRenderTarget(),Y=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Fi),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ht=S!==this.type;ht&&O.traverse(function(_t){_t.material&&(Array.isArray(_t.material)?_t.material.forEach(J=>J.needsUpdate=!0):_t.material.needsUpdate=!0)});for(let _t=0,J=L.length;_t<J;_t++){const I=L[_t],H=I.shadow;if(H===void 0){ne("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const $=H.getFrameExtents();l.multiply($),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/$.x),l.x=c.x*$.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/$.y),l.y=c.y*$.y,H.mapSize.y=c.y));const mt=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=mt,H.map===null||ht===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===al){if(I.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Pn(l.x,l.y,{format:Xs,type:Wn,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new Qr(l.x,l.y,Oi),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=wa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=yn,H.map.depthTexture.magFilter=yn}else I.isPointLight?(H.map=new uv(l.x),H.map.depthTexture=new ty(l.x,Ji)):(H.map=new Pn(l.x,l.y),H.map.depthTexture=new Qr(l.x,l.y,Ji)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=wa,this.type===eu?(H.map.depthTexture.compareFunction=mt?E0:b0,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=yn,H.map.depthTexture.magFilter=yn);H.camera.updateProjectionMatrix()}const bt=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<bt;U++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,U),r.clear();else{U===0&&(r.setRenderTarget(H.map),r.clear());const Z=H.getViewport(U);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),Q.viewport(f)}if(I.isPointLight){const Z=H.camera,yt=H.matrix,Rt=I.distance||Z.far;Rt!==Z.far&&(Z.far=Rt,Z.updateProjectionMatrix()),il.setFromMatrixPosition(I.matrixWorld),Z.position.copy(il),fd.copy(Z.position),fd.add(jE[U]),Z.up.copy(JE[U]),Z.lookAt(fd),Z.updateMatrixWorld(),yt.makeTranslation(-il.x,-il.y,-il.z),w1.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(w1,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),w(O,T,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===al&&F(H,T),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(N,Y,G)};function F(L,O){const T=t.update(C);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Pn(l.x,l.y,{format:Xs,type:Wn})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(O,null,T,g,C,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(O,null,T,M,C,null)}function B(L,O,T,N){let Y=null;const G=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)Y=G;else if(Y=T.isPointLight===!0?m:p,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Q=Y.uuid,ht=O.uuid;let _t=d[Q];_t===void 0&&(_t={},d[Q]=_t);let J=_t[ht];J===void 0&&(J=Y.clone(),_t[ht]=J,O.addEventListener("dispose",P)),Y=J}if(Y.visible=O.visible,Y.wireframe=O.wireframe,N===al?Y.side=O.shadowSide!==null?O.shadowSide:O.side:Y.side=O.shadowSide!==null?O.shadowSide:x[O.side],Y.alphaMap=O.alphaMap,Y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,Y.map=O.map,Y.clipShadows=O.clipShadows,Y.clippingPlanes=O.clippingPlanes,Y.clipIntersection=O.clipIntersection,Y.displacementMap=O.displacementMap,Y.displacementScale=O.displacementScale,Y.displacementBias=O.displacementBias,Y.wireframeLinewidth=O.wireframeLinewidth,Y.linewidth=O.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Q=r.properties.get(Y);Q.light=T}return Y}function w(L,O,T,N,Y){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===al)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ht=t.update(L),_t=L.material;if(Array.isArray(_t)){const J=ht.groups;for(let I=0,H=J.length;I<H;I++){const $=J[I],mt=_t[$.materialIndex];if(mt&&mt.visible){const bt=B(L,mt,N,Y);L.onBeforeShadow(r,L,O,T,ht,bt,$),r.renderBufferDirect(T,null,ht,bt,L,$),L.onAfterShadow(r,L,O,T,ht,bt,$)}}}else if(_t.visible){const J=B(L,_t,N,Y);L.onBeforeShadow(r,L,O,T,ht,J,null),r.renderBufferDirect(T,null,ht,J,L,null),L.onAfterShadow(r,L,O,T,ht,J,null)}}const Q=L.children;for(let ht=0,_t=Q.length;ht<_t;ht++)w(Q[ht],O,T,N,Y)}function P(L){L.target.removeEventListener("dispose",P);for(const T in d){const N=d[T],Y=L.target.uuid;Y in N&&(N[Y].dispose(),delete N[Y])}}}function tT(r,t){function i(){let k=!1;const Tt=new tn;let pt=null;const Ct=new tn(0,0,0,0);return{setMask:function(It){pt!==It&&!k&&(r.colorMask(It,It,It,It),pt=It)},setLocked:function(It){k=It},setClear:function(It,St,Wt,Gt,Qe){Qe===!0&&(It*=Gt,St*=Gt,Wt*=Gt),Tt.set(It,St,Wt,Gt),Ct.equals(Tt)===!1&&(r.clearColor(It,St,Wt,Gt),Ct.copy(Tt))},reset:function(){k=!1,pt=null,Ct.set(-1,0,0,0)}}}function s(){let k=!1,Tt=!1,pt=null,Ct=null,It=null;return{setReversed:function(St){if(Tt!==St){const Wt=t.get("EXT_clip_control");St?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Tt=St;const Gt=It;It=null,this.setClear(Gt)}},getReversed:function(){return Tt},setTest:function(St){St?Mt(r.DEPTH_TEST):zt(r.DEPTH_TEST)},setMask:function(St){pt!==St&&!k&&(r.depthMask(St),pt=St)},setFunc:function(St){if(Tt&&(St=pM[St]),Ct!==St){switch(St){case vd:r.depthFunc(r.NEVER);break;case xd:r.depthFunc(r.ALWAYS);break;case Sd:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case Md:r.depthFunc(r.EQUAL);break;case yd:r.depthFunc(r.GEQUAL);break;case bd:r.depthFunc(r.GREATER);break;case Ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ct=St}},setLocked:function(St){k=St},setClear:function(St){It!==St&&(It=St,Tt&&(St=1-St),r.clearDepth(St))},reset:function(){k=!1,pt=null,Ct=null,It=null,Tt=!1}}}function l(){let k=!1,Tt=null,pt=null,Ct=null,It=null,St=null,Wt=null,Gt=null,Qe=null;return{setTest:function(Le){k||(Le?Mt(r.STENCIL_TEST):zt(r.STENCIL_TEST))},setMask:function(Le){Tt!==Le&&!k&&(r.stencilMask(Le),Tt=Le)},setFunc:function(Le,ei,ni){(pt!==Le||Ct!==ei||It!==ni)&&(r.stencilFunc(Le,ei,ni),pt=Le,Ct=ei,It=ni)},setOp:function(Le,ei,ni){(St!==Le||Wt!==ei||Gt!==ni)&&(r.stencilOp(Le,ei,ni),St=Le,Wt=ei,Gt=ni)},setLocked:function(Le){k=Le},setClear:function(Le){Qe!==Le&&(r.clearStencil(Le),Qe=Le)},reset:function(){k=!1,Tt=null,pt=null,Ct=null,It=null,St=null,Wt=null,Gt=null,Qe=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,d=new WeakMap;let _={},x={},g={},M=new WeakMap,E=[],C=null,y=!1,S=null,F=null,B=null,w=null,P=null,L=null,O=null,T=new se(0,0,0),N=0,Y=!1,G=null,Q=null,ht=null,_t=null,J=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const mt=r.getParameter(r.VERSION);mt.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(mt)[1]),H=$>=1):mt.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),H=$>=2);let bt=null,U={};const Z=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Rt=new tn().fromArray(Z),Ot=new tn().fromArray(yt);function at(k,Tt,pt,Ct){const It=new Uint8Array(4),St=r.createTexture();r.bindTexture(k,St),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Wt=0;Wt<pt;Wt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,Ct,0,r.RGBA,r.UNSIGNED_BYTE,It):r.texImage2D(Tt+Wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,It);return St}const xt={};xt[r.TEXTURE_2D]=at(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=at(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=at(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=at(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Mt(r.DEPTH_TEST),f.setFunc(qr),en(!1),nn(T_),Mt(r.CULL_FACE),ye(Fi);function Mt(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function zt(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function ie(k,Tt){return g[k]!==Tt?(r.bindFramebuffer(k,Tt),g[k]=Tt,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Tt),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Qt(k,Tt){let pt=E,Ct=!1;if(k){pt=M.get(Tt),pt===void 0&&(pt=[],M.set(Tt,pt));const It=k.textures;if(pt.length!==It.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Wt=It.length;St<Wt;St++)pt[St]=r.COLOR_ATTACHMENT0+St;pt.length=It.length,Ct=!0}}else pt[0]!==r.BACK&&(pt[0]=r.BACK,Ct=!0);Ct&&r.drawBuffers(pt)}function qe(k){return C!==k?(r.useProgram(k),C=k,!0):!1}const he={[zs]:r.FUNC_ADD,[IS]:r.FUNC_SUBTRACT,[FS]:r.FUNC_REVERSE_SUBTRACT};he[BS]=r.MIN,he[zS]=r.MAX;const Me={[HS]:r.ZERO,[GS]:r.ONE,[VS]:r.SRC_COLOR,[gd]:r.SRC_ALPHA,[ZS]:r.SRC_ALPHA_SATURATE,[YS]:r.DST_COLOR,[XS]:r.DST_ALPHA,[kS]:r.ONE_MINUS_SRC_COLOR,[_d]:r.ONE_MINUS_SRC_ALPHA,[qS]:r.ONE_MINUS_DST_COLOR,[WS]:r.ONE_MINUS_DST_ALPHA,[KS]:r.CONSTANT_COLOR,[QS]:r.ONE_MINUS_CONSTANT_COLOR,[jS]:r.CONSTANT_ALPHA,[JS]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(k,Tt,pt,Ct,It,St,Wt,Gt,Qe,Le){if(k===Fi){y===!0&&(zt(r.BLEND),y=!1);return}if(y===!1&&(Mt(r.BLEND),y=!0),k!==OS){if(k!==S||Le!==Y){if((F!==zs||P!==zs)&&(r.blendEquation(r.FUNC_ADD),F=zs,P=zs),Le)switch(k){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case md:r.blendFunc(r.ONE,r.ONE);break;case A_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case R_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ee("WebGLState: Invalid blending: ",k);break}else switch(k){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case md:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case A_:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R_:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",k);break}B=null,w=null,L=null,O=null,T.set(0,0,0),N=0,S=k,Y=Le}return}It=It||Tt,St=St||pt,Wt=Wt||Ct,(Tt!==F||It!==P)&&(r.blendEquationSeparate(he[Tt],he[It]),F=Tt,P=It),(pt!==B||Ct!==w||St!==L||Wt!==O)&&(r.blendFuncSeparate(Me[pt],Me[Ct],Me[St],Me[Wt]),B=pt,w=Ct,L=St,O=Wt),(Gt.equals(T)===!1||Qe!==N)&&(r.blendColor(Gt.r,Gt.g,Gt.b,Qe),T.copy(Gt),N=Qe),S=k,Y=!1}function pe(k,Tt){k.side===Zi?zt(r.CULL_FACE):Mt(r.CULL_FACE);let pt=k.side===Xn;Tt&&(pt=!pt),en(pt),k.blending===Xr&&k.transparent===!1?ye(Fi):ye(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Ct=k.stencilWrite;p.setTest(Ct),Ct&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ln(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function en(k){G!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),G=k)}function nn(k){k!==LS?(Mt(r.CULL_FACE),k!==Q&&(k===T_?r.cullFace(r.BACK):k===NS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):zt(r.CULL_FACE),Q=k}function an(k){k!==ht&&(H&&r.lineWidth(k),ht=k)}function ln(k,Tt,pt){k?(Mt(r.POLYGON_OFFSET_FILL),(_t!==Tt||J!==pt)&&(_t=Tt,J=pt,f.getReversed()&&(Tt=-Tt),r.polygonOffset(Tt,pt))):zt(r.POLYGON_OFFSET_FILL)}function We(k){k?Mt(r.SCISSOR_TEST):zt(r.SCISSOR_TEST)}function sn(k){k===void 0&&(k=r.TEXTURE0+I-1),bt!==k&&(r.activeTexture(k),bt=k)}function W(k,Tt,pt){pt===void 0&&(bt===null?pt=r.TEXTURE0+I-1:pt=bt);let Ct=U[pt];Ct===void 0&&(Ct={type:void 0,texture:void 0},U[pt]=Ct),(Ct.type!==k||Ct.texture!==Tt)&&(bt!==pt&&(r.activeTexture(pt),bt=pt),r.bindTexture(k,Tt||xt[k]),Ct.type=k,Ct.texture=Tt)}function Be(){const k=U[bt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ce(){try{r.compressedTexImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function b(){try{r.texSubImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function K(){try{r.texSubImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function st(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function ut(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function Et(){try{r.texStorage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function wt(){try{r.texStorage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function ct(){try{r.texImage2D(...arguments)}catch(k){Ee("WebGLState:",k)}}function ft(){try{r.texImage3D(...arguments)}catch(k){Ee("WebGLState:",k)}}function At(k){return x[k]!==void 0?x[k]:r.getParameter(k)}function Ft(k,Tt){x[k]!==Tt&&(r.pixelStorei(k,Tt),x[k]=Tt)}function Lt(k){Rt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Rt.copy(k))}function Dt(k){Ot.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Ot.copy(k))}function Kt(k,Tt){let pt=d.get(Tt);pt===void 0&&(pt=new WeakMap,d.set(Tt,pt));let Ct=pt.get(k);Ct===void 0&&(Ct=r.getUniformBlockIndex(Tt,k.name),pt.set(k,Ct))}function jt(k,Tt){const Ct=d.get(Tt).get(k);m.get(Tt)!==Ct&&(r.uniformBlockBinding(Tt,Ct,k.__bindingPointIndex),m.set(Tt,Ct))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},x={},bt=null,U={},g={},M=new WeakMap,E=[],C=null,y=!1,S=null,F=null,B=null,w=null,P=null,L=null,O=null,T=new se(0,0,0),N=0,Y=!1,G=null,Q=null,ht=null,_t=null,J=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Ot.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Mt,disable:zt,bindFramebuffer:ie,drawBuffers:Qt,useProgram:qe,setBlending:ye,setMaterial:pe,setFlipSided:en,setCullFace:nn,setLineWidth:an,setPolygonOffset:ln,setScissorTest:We,activeTexture:sn,bindTexture:W,unbindTexture:Be,compressedTexImage2D:Ce,compressedTexImage3D:D,texImage2D:ct,texImage3D:ft,pixelStorei:Ft,getParameter:At,updateUBOMapping:Kt,uniformBlockBinding:jt,texStorage2D:Et,texStorage3D:wt,texSubImage2D:b,texSubImage3D:K,compressedTexSubImage2D:st,compressedTexSubImage3D:ut,scissor:Lt,viewport:Dt,reset:ae}}function eT(r,t,i,s,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new qt,_=new WeakMap,x=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,b){return E?new OffscreenCanvas(D,b):du("canvas")}function y(D,b,K){let st=1;const ut=Ce(D);if((ut.width>K||ut.height>K)&&(st=K/Math.max(ut.width,ut.height)),st<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Et=Math.floor(st*ut.width),wt=Math.floor(st*ut.height);g===void 0&&(g=C(Et,wt));const ct=b?C(Et,wt):g;return ct.width=Et,ct.height=wt,ct.getContext("2d").drawImage(D,0,0,Et,wt),ne("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+Et+"x"+wt+")."),ct}else return"data"in D&&ne("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),D;return D}function S(D){return D.generateMipmaps}function F(D){r.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(D,b,K,st,ut,Et=!1){if(D!==null){if(r[D]!==void 0)return r[D];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let wt;st&&(wt=t.get("EXT_texture_norm16"),wt||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=b;if(b===r.RED&&(K===r.FLOAT&&(ct=r.R32F),K===r.HALF_FLOAT&&(ct=r.R16F),K===r.UNSIGNED_BYTE&&(ct=r.R8),K===r.UNSIGNED_SHORT&&wt&&(ct=wt.R16_EXT),K===r.SHORT&&wt&&(ct=wt.R16_SNORM_EXT)),b===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ct=r.R8UI),K===r.UNSIGNED_SHORT&&(ct=r.R16UI),K===r.UNSIGNED_INT&&(ct=r.R32UI),K===r.BYTE&&(ct=r.R8I),K===r.SHORT&&(ct=r.R16I),K===r.INT&&(ct=r.R32I)),b===r.RG&&(K===r.FLOAT&&(ct=r.RG32F),K===r.HALF_FLOAT&&(ct=r.RG16F),K===r.UNSIGNED_BYTE&&(ct=r.RG8),K===r.UNSIGNED_SHORT&&wt&&(ct=wt.RG16_EXT),K===r.SHORT&&wt&&(ct=wt.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(ct=r.RG8UI),K===r.UNSIGNED_SHORT&&(ct=r.RG16UI),K===r.UNSIGNED_INT&&(ct=r.RG32UI),K===r.BYTE&&(ct=r.RG8I),K===r.SHORT&&(ct=r.RG16I),K===r.INT&&(ct=r.RG32I)),b===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),K===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),K===r.UNSIGNED_INT&&(ct=r.RGB32UI),K===r.BYTE&&(ct=r.RGB8I),K===r.SHORT&&(ct=r.RGB16I),K===r.INT&&(ct=r.RGB32I)),b===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),K===r.UNSIGNED_INT&&(ct=r.RGBA32UI),K===r.BYTE&&(ct=r.RGBA8I),K===r.SHORT&&(ct=r.RGBA16I),K===r.INT&&(ct=r.RGBA32I)),b===r.RGB&&(K===r.UNSIGNED_SHORT&&wt&&(ct=wt.RGB16_EXT),K===r.SHORT&&wt&&(ct=wt.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),b===r.RGBA){const ft=Et?hu:Se.getTransfer(ut);K===r.FLOAT&&(ct=r.RGBA32F),K===r.HALF_FLOAT&&(ct=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ct=ft===Ue?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&wt&&(ct=wt.RGBA16_EXT),K===r.SHORT&&wt&&(ct=wt.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function P(D,b){let K;return D?b===null||b===Ji||b===ul?K=r.DEPTH24_STENCIL8:b===Oi?K=r.DEPTH32F_STENCIL8:b===cl&&(K=r.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ji||b===ul?K=r.DEPTH_COMPONENT24:b===Oi?K=r.DEPTH_COMPONENT32F:b===cl&&(K=r.DEPTH_COMPONENT16),K}function L(D,b){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==Rn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function O(D){const b=D.target;b.removeEventListener("dispose",O),N(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&x.delete(b)}function T(D){const b=D.target;b.removeEventListener("dispose",T),G(b)}function N(D){const b=s.get(D);if(b.__webglInit===void 0)return;const K=D.source,st=M.get(K);if(st){const ut=st[b.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&Y(D),Object.keys(st).length===0&&M.delete(K)}s.remove(D)}function Y(D){const b=s.get(D);r.deleteTexture(b.__webglTexture);const K=D.source,st=M.get(K);delete st[b.__cacheKey],f.memory.textures--}function G(D){const b=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(b.__webglFramebuffer[st]))for(let ut=0;ut<b.__webglFramebuffer[st].length;ut++)r.deleteFramebuffer(b.__webglFramebuffer[st][ut]);else r.deleteFramebuffer(b.__webglFramebuffer[st]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[st])}else{if(Array.isArray(b.__webglFramebuffer))for(let st=0;st<b.__webglFramebuffer.length;st++)r.deleteFramebuffer(b.__webglFramebuffer[st]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let st=0;st<b.__webglColorRenderbuffer.length;st++)b.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[st]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=D.textures;for(let st=0,ut=K.length;st<ut;st++){const Et=s.get(K[st]);Et.__webglTexture&&(r.deleteTexture(Et.__webglTexture),f.memory.textures--),s.remove(K[st])}s.remove(D)}let Q=0;function ht(){Q=0}function _t(){return Q}function J(D){Q=D}function I(){const D=Q;return D>=l.maxTextures&&ne("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),Q+=1,D}function H(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function $(D,b){const K=s.get(D);if(D.isVideoTexture&&W(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const st=D.image;if(st===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(K,D,b);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+b)}function mt(D,b){const K=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){zt(K,D,b);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+b)}function bt(D,b){const K=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){zt(K,D,b);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+b)}function U(D,b){const K=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&K.__version!==D.version){ie(K,D,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+b)}const Z={[ll]:r.REPEAT,[Aa]:r.CLAMP_TO_EDGE,[Td]:r.MIRRORED_REPEAT},yt={[yn]:r.NEAREST,[eM]:r.NEAREST_MIPMAP_NEAREST,[Rc]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[Oh]:r.LINEAR_MIPMAP_NEAREST,[Gs]:r.LINEAR_MIPMAP_LINEAR},Rt={[sM]:r.NEVER,[uM]:r.ALWAYS,[rM]:r.LESS,[b0]:r.LEQUAL,[oM]:r.EQUAL,[E0]:r.GEQUAL,[lM]:r.GREATER,[cM]:r.NOTEQUAL};function Ot(D,b){if(b.type===Oi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Rn||b.magFilter===Oh||b.magFilter===Rc||b.magFilter===Gs||b.minFilter===Rn||b.minFilter===Oh||b.minFilter===Rc||b.minFilter===Gs)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Z[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Z[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Z[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,yt[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===yn||b.minFilter!==Rc&&b.minFilter!==Gs||b.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function at(D,b){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",O));const st=b.source;let ut=M.get(st);ut===void 0&&(ut={},M.set(st,ut));const Et=H(b);if(Et!==D.__cacheKey){ut[Et]===void 0&&(ut[Et]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,K=!0),ut[Et].usedTimes++;const wt=ut[D.__cacheKey];wt!==void 0&&(ut[D.__cacheKey].usedTimes--,wt.usedTimes===0&&Y(b)),D.__cacheKey=Et,D.__webglTexture=ut[Et].texture}return K}function xt(D,b,K){return Math.floor(Math.floor(D/K)/b)}function Mt(D,b,K,st){const Et=D.updateRanges;if(Et.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,K,st,b.data);else{Et.sort((Ft,Lt)=>Ft.start-Lt.start);let wt=0;for(let Ft=1;Ft<Et.length;Ft++){const Lt=Et[wt],Dt=Et[Ft],Kt=Lt.start+Lt.count,jt=xt(Dt.start,b.width,4),ae=xt(Lt.start,b.width,4);Dt.start<=Kt+1&&jt===ae&&xt(Dt.start+Dt.count-1,b.width,4)===jt?Lt.count=Math.max(Lt.count,Dt.start+Dt.count-Lt.start):(++wt,Et[wt]=Dt)}Et.length=wt+1;const ct=i.getParameter(r.UNPACK_ROW_LENGTH),ft=i.getParameter(r.UNPACK_SKIP_PIXELS),At=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ft=0,Lt=Et.length;Ft<Lt;Ft++){const Dt=Et[Ft],Kt=Math.floor(Dt.start/4),jt=Math.ceil(Dt.count/4),ae=Kt%b.width,k=Math.floor(Kt/b.width),Tt=jt,pt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,ae,k,Tt,pt,K,st,b.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ct),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(r.UNPACK_SKIP_ROWS,At)}}function zt(D,b,K){let st=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=r.TEXTURE_3D);const ut=at(D,b),Et=b.source;i.bindTexture(st,D.__webglTexture,r.TEXTURE0+K);const wt=s.get(Et);if(Et.version!==wt.__version||ut===!0){if(i.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const pt=Se.getPrimaries(Se.workingColorSpace),Ct=b.colorSpace===Ki?null:Se.getPrimaries(b.colorSpace),It=b.colorSpace===Ki||pt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let ft=y(b.image,!1,l.maxTextureSize);ft=Be(b,ft);const At=c.convert(b.format,b.colorSpace),Ft=c.convert(b.type);let Lt=w(b.internalFormat,At,Ft,b.normalized,b.colorSpace,b.isVideoTexture);Ot(st,b);let Dt;const Kt=b.mipmaps,jt=b.isVideoTexture!==!0,ae=wt.__version===void 0||ut===!0,k=Et.dataReady,Tt=L(b,ft);if(b.isDepthTexture)Lt=P(b.format===Vs,b.type),ae&&(jt?i.texStorage2D(r.TEXTURE_2D,1,Lt,ft.width,ft.height):i.texImage2D(r.TEXTURE_2D,0,Lt,ft.width,ft.height,0,At,Ft,null));else if(b.isDataTexture)if(Kt.length>0){jt&&ae&&i.texStorage2D(r.TEXTURE_2D,Tt,Lt,Kt[0].width,Kt[0].height);for(let pt=0,Ct=Kt.length;pt<Ct;pt++)Dt=Kt[pt],jt?k&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,At,Ft,Dt.data):i.texImage2D(r.TEXTURE_2D,pt,Lt,Dt.width,Dt.height,0,At,Ft,Dt.data);b.generateMipmaps=!1}else jt?(ae&&i.texStorage2D(r.TEXTURE_2D,Tt,Lt,ft.width,ft.height),k&&Mt(b,ft,At,Ft)):i.texImage2D(r.TEXTURE_2D,0,Lt,ft.width,ft.height,0,At,Ft,ft.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){jt&&ae&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Lt,Kt[0].width,Kt[0].height,ft.depth);for(let pt=0,Ct=Kt.length;pt<Ct;pt++)if(Dt=Kt[pt],b.format!==Ii)if(At!==null)if(jt){if(k)if(b.layerUpdates.size>0){const It=o1(Dt.width,Dt.height,b.format,b.type);for(const St of b.layerUpdates){const Wt=Dt.data.subarray(St*It/Dt.data.BYTES_PER_ELEMENT,(St+1)*It/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,St,Dt.width,Dt.height,1,At,Wt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,Dt.width,Dt.height,ft.depth,At,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pt,Lt,Dt.width,Dt.height,ft.depth,0,Dt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,Dt.width,Dt.height,ft.depth,At,Ft,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pt,Lt,Dt.width,Dt.height,ft.depth,0,At,Ft,Dt.data)}else{jt&&ae&&i.texStorage2D(r.TEXTURE_2D,Tt,Lt,Kt[0].width,Kt[0].height);for(let pt=0,Ct=Kt.length;pt<Ct;pt++)Dt=Kt[pt],b.format!==Ii?At!==null?jt?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,At,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,pt,Lt,Dt.width,Dt.height,0,Dt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?k&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Dt.width,Dt.height,At,Ft,Dt.data):i.texImage2D(r.TEXTURE_2D,pt,Lt,Dt.width,Dt.height,0,At,Ft,Dt.data)}else if(b.isDataArrayTexture)if(jt){if(ae&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Lt,ft.width,ft.height,ft.depth),k)if(b.layerUpdates.size>0){const pt=o1(ft.width,ft.height,b.format,b.type);for(const Ct of b.layerUpdates){const It=ft.data.subarray(Ct*pt/ft.data.BYTES_PER_ELEMENT,(Ct+1)*pt/ft.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ct,ft.width,ft.height,1,At,Ft,It)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,At,Ft,ft.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,ft.width,ft.height,ft.depth,0,At,Ft,ft.data);else if(b.isData3DTexture)jt?(ae&&i.texStorage3D(r.TEXTURE_3D,Tt,Lt,ft.width,ft.height,ft.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,At,Ft,ft.data)):i.texImage3D(r.TEXTURE_3D,0,Lt,ft.width,ft.height,ft.depth,0,At,Ft,ft.data);else if(b.isFramebufferTexture){if(ae)if(jt)i.texStorage2D(r.TEXTURE_2D,Tt,Lt,ft.width,ft.height);else{let pt=ft.width,Ct=ft.height;for(let It=0;It<Tt;It++)i.texImage2D(r.TEXTURE_2D,It,Lt,pt,Ct,0,At,Ft,null),pt>>=1,Ct>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const pt=r.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ft.parentNode!==pt){pt.appendChild(ft),x.add(b),pt.onpaint=Ct=>{const It=Ct.changedElements;for(const St of x)It.includes(St.image)&&(St.needsUpdate=!0)},pt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ft);else{const It=r.RGBA,St=r.RGBA,Wt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,It,St,Wt,ft)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(jt&&ae){const pt=Ce(Kt[0]);i.texStorage2D(r.TEXTURE_2D,Tt,Lt,pt.width,pt.height)}for(let pt=0,Ct=Kt.length;pt<Ct;pt++)Dt=Kt[pt],jt?k&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,At,Ft,Dt):i.texImage2D(r.TEXTURE_2D,pt,Lt,At,Ft,Dt);b.generateMipmaps=!1}else if(jt){if(ae){const pt=Ce(ft);i.texStorage2D(r.TEXTURE_2D,Tt,Lt,pt.width,pt.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Ft,ft)}else i.texImage2D(r.TEXTURE_2D,0,Lt,At,Ft,ft);S(b)&&F(st),wt.__version=Et.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ie(D,b,K){if(b.image.length!==6)return;const st=at(D,b),ut=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+K);const Et=s.get(ut);if(ut.version!==Et.__version||st===!0){i.activeTexture(r.TEXTURE0+K);const wt=Se.getPrimaries(Se.workingColorSpace),ct=b.colorSpace===Ki?null:Se.getPrimaries(b.colorSpace),ft=b.colorSpace===Ki||wt===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const At=b.isCompressedTexture||b.image[0].isCompressedTexture,Ft=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let St=0;St<6;St++)!At&&!Ft?Lt[St]=y(b.image[St],!0,l.maxCubemapSize):Lt[St]=Ft?b.image[St].image:b.image[St],Lt[St]=Be(b,Lt[St]);const Dt=Lt[0],Kt=c.convert(b.format,b.colorSpace),jt=c.convert(b.type),ae=w(b.internalFormat,Kt,jt,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Tt=Et.__version===void 0||st===!0,pt=ut.dataReady;let Ct=L(b,Dt);Ot(r.TEXTURE_CUBE_MAP,b);let It;if(At){k&&Tt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,ae,Dt.width,Dt.height);for(let St=0;St<6;St++){It=Lt[St].mipmaps;for(let Wt=0;Wt<It.length;Wt++){const Gt=It[Wt];b.format!==Ii?Kt!==null?k?pt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,0,0,Gt.width,Gt.height,Kt,Gt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,ae,Gt.width,Gt.height,0,Gt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,0,0,Gt.width,Gt.height,Kt,jt,Gt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,ae,Gt.width,Gt.height,0,Kt,jt,Gt.data)}}}else{if(It=b.mipmaps,k&&Tt){It.length>0&&Ct++;const St=Ce(Lt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,ae,St.width,St.height)}for(let St=0;St<6;St++)if(Ft){k?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Lt[St].width,Lt[St].height,Kt,jt,Lt[St].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ae,Lt[St].width,Lt[St].height,0,Kt,jt,Lt[St].data);for(let Wt=0;Wt<It.length;Wt++){const Qe=It[Wt].image[St].image;k?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,0,0,Qe.width,Qe.height,Kt,jt,Qe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,ae,Qe.width,Qe.height,0,Kt,jt,Qe.data)}}else{k?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Kt,jt,Lt[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ae,Kt,jt,Lt[St]);for(let Wt=0;Wt<It.length;Wt++){const Gt=It[Wt];k?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,0,0,Kt,jt,Gt.image[St]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,ae,Kt,jt,Gt.image[St])}}}S(b)&&F(r.TEXTURE_CUBE_MAP),Et.__version=ut.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Qt(D,b,K,st,ut,Et){const wt=c.convert(K.format,K.colorSpace),ct=c.convert(K.type),ft=w(K.internalFormat,wt,ct,K.normalized,K.colorSpace),At=s.get(b),Ft=s.get(K);if(Ft.__renderTarget=b,!At.__hasExternalTextures){const Lt=Math.max(1,b.width>>Et),Dt=Math.max(1,b.height>>Et);ut===r.TEXTURE_3D||ut===r.TEXTURE_2D_ARRAY?i.texImage3D(ut,Et,ft,Lt,Dt,b.depth,0,wt,ct,null):i.texImage2D(ut,Et,ft,Lt,Dt,0,wt,ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),sn(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,ut,Ft.__webglTexture,0,We(b)):(ut===r.TEXTURE_2D||ut>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,ut,Ft.__webglTexture,Et),i.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(D,b,K){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const st=b.depthTexture,ut=st&&st.isDepthTexture?st.type:null,Et=P(b.stencilBuffer,ut),wt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;sn(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We(b),Et,b.width,b.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,We(b),Et,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Et,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,D)}else{const st=b.textures;for(let ut=0;ut<st.length;ut++){const Et=st[ut],wt=c.convert(Et.format,Et.colorSpace),ct=c.convert(Et.type),ft=w(Et.internalFormat,wt,ct,Et.normalized,Et.colorSpace);sn(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We(b),ft,b.width,b.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,We(b),ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function he(D,b,K){const st=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ut=s.get(b.depthTexture);if(ut.__renderTarget=b,(!ut.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),st){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,b.depthTexture.addEventListener("dispose",O)),ut.__webglTexture===void 0){ut.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,b.depthTexture);const At=c.convert(b.depthTexture.format),Ft=c.convert(b.depthTexture.type);let Lt;b.depthTexture.format===wa?Lt=r.DEPTH_COMPONENT24:b.depthTexture.format===Vs&&(Lt=r.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Lt,b.width,b.height,0,At,Ft,null)}}else $(b.depthTexture,0);const Et=ut.__webglTexture,wt=We(b),ct=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,ft=b.depthTexture.format===Vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===wa)sn(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,ct,Et,0,wt):r.framebufferTexture2D(r.FRAMEBUFFER,ft,ct,Et,0);else if(b.depthTexture.format===Vs)sn(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,ct,Et,0,wt):r.framebufferTexture2D(r.FRAMEBUFFER,ft,ct,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(D){const b=s.get(D),K=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const st=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){const ut=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",ut)};st.addEventListener("dispose",ut),b.__depthDisposeCallback=ut}b.__boundDepthTexture=st}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let st=0;st<6;st++)he(b.__webglFramebuffer[st],D,st);else{const st=D.texture.mipmaps;st&&st.length>0?he(b.__webglFramebuffer[0],D,0):he(b.__webglFramebuffer,D,0)}else if(K){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=r.createRenderbuffer(),qe(b.__webglDepthbuffer[st],D,!1);else{const ut=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=b.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,Et),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,Et)}}else{const st=D.texture.mipmaps;if(st&&st.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),qe(b.__webglDepthbuffer,D,!1);else{const ut=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Et),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,Et)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(D,b,K){const st=s.get(D);b!==void 0&&Qt(st.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Me(D)}function pe(D){const b=D.texture,K=s.get(D),st=s.get(b);D.addEventListener("dispose",T);const ut=D.textures,Et=D.isWebGLCubeRenderTarget===!0,wt=ut.length>1;if(wt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=b.version,f.memory.textures++),Et){K.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[ct]=[];for(let ft=0;ft<b.mipmaps.length;ft++)K.__webglFramebuffer[ct][ft]=r.createFramebuffer()}else K.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)K.__webglFramebuffer[ct]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(wt)for(let ct=0,ft=ut.length;ct<ft;ct++){const At=s.get(ut[ct]);At.__webglTexture===void 0&&(At.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&sn(D)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ct=0;ct<ut.length;ct++){const ft=ut[ct];K.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ct]);const At=c.convert(ft.format,ft.colorSpace),Ft=c.convert(ft.type),Lt=w(ft.internalFormat,At,Ft,ft.normalized,ft.colorSpace,D.isXRRenderTarget===!0),Dt=We(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,Lt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,K.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),qe(K.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Et){i.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,b);for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)Qt(K.__webglFramebuffer[ct][ft],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else Qt(K.__webglFramebuffer[ct],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);S(b)&&F(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(wt){for(let ct=0,ft=ut.length;ct<ft;ct++){const At=ut[ct],Ft=s.get(At);let Lt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Lt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Ft.__webglTexture),Ot(Lt,At),Qt(K.__webglFramebuffer,D,At,r.COLOR_ATTACHMENT0+ct,Lt,0),S(At)&&F(Lt)}i.unbindTexture()}else{let ct=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ct=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ct,st.__webglTexture),Ot(ct,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)Qt(K.__webglFramebuffer[ft],D,b,r.COLOR_ATTACHMENT0,ct,ft);else Qt(K.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,ct,0);S(b)&&F(ct),i.unbindTexture()}D.depthBuffer&&Me(D)}function en(D){const b=D.textures;for(let K=0,st=b.length;K<st;K++){const ut=b[K];if(S(ut)){const Et=B(D),wt=s.get(ut).__webglTexture;i.bindTexture(Et,wt),F(Et),i.unbindTexture()}}}const nn=[],an=[];function ln(D){if(D.samples>0){if(sn(D)===!1){const b=D.textures,K=D.width,st=D.height;let ut=r.COLOR_BUFFER_BIT;const Et=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=s.get(D),ct=b.length>1;if(ct)for(let At=0;At<b.length;At++)i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const ft=D.texture.mipmaps;ft&&ft.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<b.length;At++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ut|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ut|=r.STENCIL_BUFFER_BIT)),ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const Ft=s.get(b[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ft,0)}r.blitFramebuffer(0,0,K,st,0,0,K,st,ut,r.NEAREST),m===!0&&(nn.length=0,an.length=0,nn.push(r.COLOR_ATTACHMENT0+At),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nn.push(Et),an.push(Et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,an)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let At=0;At<b.length;At++){i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const Ft=s.get(b[At]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,Ft,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function We(D){return Math.min(l.maxSamples,D.samples)}function sn(D){const b=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function W(D){const b=f.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function Be(D,b){const K=D.colorSpace,st=D.format,ut=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==fu&&K!==Ki&&(Se.getTransfer(K)===Ue?(st!==Ii||ut!==mi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",K)),b}function Ce(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=I,this.resetTextureUnits=ht,this.getTextureUnits=_t,this.setTextureUnits=J,this.setTexture2D=$,this.setTexture2DArray=mt,this.setTexture3D=bt,this.setTextureCube=U,this.rebindTextures=ye,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=sn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function nT(r,t){function i(s,l=Ki){let c;const f=Se.getTransfer(l);if(s===mi)return r.UNSIGNED_BYTE;if(s===_0)return r.UNSIGNED_SHORT_4_4_4_4;if(s===v0)return r.UNSIGNED_SHORT_5_5_5_1;if(s===V1)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===k1)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===H1)return r.BYTE;if(s===G1)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===g0)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===Oi)return r.FLOAT;if(s===Wn)return r.HALF_FLOAT;if(s===X1)return r.ALPHA;if(s===W1)return r.RGB;if(s===Ii)return r.RGBA;if(s===wa)return r.DEPTH_COMPONENT;if(s===Vs)return r.DEPTH_STENCIL;if(s===x0)return r.RED;if(s===S0)return r.RED_INTEGER;if(s===Xs)return r.RG;if(s===M0)return r.RG_INTEGER;if(s===y0)return r.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===su)if(f===Ue)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ad||s===Rd||s===Cd||s===wd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dd||s===Ud||s===Ld||s===Nd||s===Pd||s===lu||s===Od)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Dd||s===Ud)return f===Ue?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ld)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Nd)return c.COMPRESSED_R11_EAC;if(s===Pd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===lu)return c.COMPRESSED_RG11_EAC;if(s===Od)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Id||s===Fd||s===Bd||s===zd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===Yd||s===qd||s===Zd||s===Kd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Id)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kd)return f===Ue?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qd||s===jd||s===Jd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Qd)return f===Ue?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$d||s===t0||s===cu||s===e0)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===$d)return c.COMPRESSED_RED_RGTC1_EXT;if(s===t0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===e0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const iT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aT=`
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

}`;class sT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ev(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Cn({vertexShader:iT,fragmentShader:aT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vn(new ml(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rT extends ps{constructor(t,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,_=null,x=null,g=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",y=new sT,S={},F=i.getContextAttributes();let B=null,w=null;const P=[],L=[],O=new qt;let T=null;const N=new pi;N.viewport=new tn;const Y=new pi;Y.viewport=new tn;const G=[N,Y],Q=new fy;let ht=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let xt=P[at];return xt===void 0&&(xt=new Gh,P[at]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(at){let xt=P[at];return xt===void 0&&(xt=new Gh,P[at]=xt),xt.getGripSpace()},this.getHand=function(at){let xt=P[at];return xt===void 0&&(xt=new Gh,P[at]=xt),xt.getHandSpace()};function J(at){const xt=L.indexOf(at.inputSource);if(xt===-1)return;const Mt=P[xt];Mt!==void 0&&(Mt.update(at.inputSource,at.frame,d||f),Mt.dispatchEvent({type:at.type,data:at.inputSource}))}function I(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let at=0;at<P.length;at++){const xt=L[at];xt!==null&&(L[at]=null,P[at].disconnect(xt))}ht=null,_t=null,y.reset();for(const at in S)delete S[at];t.setRenderTarget(B),M=null,g=null,x=null,l=null,w=null,Ot.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){p=at,s.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),F.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,zt=null,ie=null;F.depth&&(ie=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=F.stencil?Vs:wa,zt=F.stencil?ul:Ji);const Qt={colorFormat:i.RGBA8,depthFormat:ie,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Qt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),w=new Pn(g.textureWidth,g.textureHeight,{format:Ii,type:mi,depthTexture:new Qr(g.textureWidth,g.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new Pn(M.framebufferWidth,M.framebufferHeight,{format:Ii,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(at){for(let xt=0;xt<at.removed.length;xt++){const Mt=at.removed[xt],zt=L.indexOf(Mt);zt>=0&&(L[zt]=null,P[zt].disconnect(Mt))}for(let xt=0;xt<at.added.length;xt++){const Mt=at.added[xt];let zt=L.indexOf(Mt);if(zt===-1){for(let Qt=0;Qt<P.length;Qt++)if(Qt>=L.length){L.push(Mt),zt=Qt;break}else if(L[Qt]===null){L[Qt]=Mt,zt=Qt;break}if(zt===-1)break}const ie=P[zt];ie&&ie.connect(Mt)}}const $=new j,mt=new j;function bt(at,xt,Mt){$.setFromMatrixPosition(xt.matrixWorld),mt.setFromMatrixPosition(Mt.matrixWorld);const zt=$.distanceTo(mt),ie=xt.projectionMatrix.elements,Qt=Mt.projectionMatrix.elements,qe=ie[14]/(ie[10]-1),he=ie[14]/(ie[10]+1),Me=(ie[9]+1)/ie[5],ye=(ie[9]-1)/ie[5],pe=(ie[8]-1)/ie[0],en=(Qt[8]+1)/Qt[0],nn=qe*pe,an=qe*en,ln=zt/(-pe+en),We=ln*-pe;if(xt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(We),at.translateZ(ln),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),ie[10]===-1)at.projectionMatrix.copy(xt.projectionMatrix),at.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const sn=qe+ln,W=he+ln,Be=nn-We,Ce=an+(zt-We),D=Me*he/W*sn,b=ye*he/W*sn;at.projectionMatrix.makePerspective(Be,Ce,D,b,sn,W),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function U(at,xt){xt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(xt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let xt=at.near,Mt=at.far;y.texture!==null&&(y.depthNear>0&&(xt=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),Q.near=Y.near=N.near=xt,Q.far=Y.far=N.far=Mt,(ht!==Q.near||_t!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ht=Q.near,_t=Q.far),Q.layers.mask=at.layers.mask|6,N.layers.mask=Q.layers.mask&-5,Y.layers.mask=Q.layers.mask&-3;const zt=at.parent,ie=Q.cameras;U(Q,zt);for(let Qt=0;Qt<ie.length;Qt++)U(ie[Qt],zt);ie.length===2?bt(Q,N,Y):Q.projectionMatrix.copy(N.projectionMatrix),Z(at,Q,zt)};function Z(at,xt,Mt){Mt===null?at.matrix.copy(xt.matrixWorld):(at.matrix.copy(Mt.matrixWorld),at.matrix.invert(),at.matrix.multiply(xt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(xt.projectionMatrix),at.projectionMatrixInverse.copy(xt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=hl*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(at){m=at,g!==null&&(g.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(at){return S[at]};let yt=null;function Rt(at,xt){if(_=xt.getViewerPose(d||f),E=xt,_!==null){const Mt=_.views;M!==null&&(t.setRenderTargetFramebuffer(w,M.framebuffer),t.setRenderTarget(w));let zt=!1;Mt.length!==Q.cameras.length&&(Q.cameras.length=0,zt=!0);for(let he=0;he<Mt.length;he++){const Me=Mt[he];let ye=null;if(M!==null)ye=M.getViewport(Me);else{const en=x.getViewSubImage(g,Me);ye=en.viewport,he===0&&(t.setRenderTargetTextures(w,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(w))}let pe=G[he];pe===void 0&&(pe=new pi,pe.layers.enable(he),pe.viewport=new tn,G[he]=pe),pe.matrix.fromArray(Me.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Me.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(ye.x,ye.y,ye.width,ye.height),he===0&&(Q.matrix.copy(pe.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),zt===!0&&Q.cameras.push(pe)}const ie=l.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const he=x.getDepthInformation(Mt[0]);he&&he.isValid&&he.texture&&y.init(he,l.renderState)}if(ie&&ie.includes("camera-access")&&C){t.state.unbindTexture(),x=s.getBinding();for(let he=0;he<Mt.length;he++){const Me=Mt[he].camera;if(Me){let ye=S[Me];ye||(ye=new ev,S[Me]=ye);const pe=x.getCameraImage(Me);ye.sourceTexture=pe}}}}for(let Mt=0;Mt<P.length;Mt++){const zt=L[Mt],ie=P[Mt];zt!==null&&ie!==void 0&&ie.update(zt,xt,d||f)}yt&&yt(at,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),E=null}const Ot=new lv;Ot.setAnimationLoop(Rt),this.setAnimationLoop=function(at){yt=at},this.dispose=function(){}}}const oT=new Ye,mv=new oe;mv.set(-1,0,0,0,1,0,0,0,1);function lT(r,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,nv(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,F,B,w){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),x(y,S)):S.isMeshPhongMaterial?(c(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,w)):S.isMeshMatcapMaterial?(c(y,S),E(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),C(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(f(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?m(y,S,F,B):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Xn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Xn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const F=t.get(S),B=F.envMap,w=F.envMapRotation;B&&(y.envMap.value=B,y.envMapRotation.value.setFromMatrix4(oT.makeRotationFromEuler(w)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(mv),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,F,B){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*F,y.scale.value=B*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,F){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Xn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const F=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function cT(r,t,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const L=P.program;s.uniformBlockBinding(w,L)}function d(w,P){let L=l[w.id];L===void 0&&(y(w),L=_(w),l[w.id]=L,w.addEventListener("dispose",F));const O=P.program;s.updateUBOMapping(w,O);const T=t.render.frame;c[w.id]!==T&&(g(w),c[w.id]=T)}function _(w){const P=x();w.__bindingPointIndex=P;const L=r.createBuffer(),O=w.__size,T=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,O,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,L),L}function x(){for(let w=0;w<p;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const P=l[w.id],L=w.uniforms,O=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let T=0,N=L.length;T<N;T++){const Y=L[T];if(Array.isArray(Y))for(let G=0,Q=Y.length;G<Q;G++)M(Y[G],T,G,O);else M(Y,T,0,O)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,P,L,O){if(C(w,P,L,O)===!0){const T=w.__offset,N=w.value;if(Array.isArray(N)){let Y=0;for(let G=0;G<N.length;G++){const Q=N[G],ht=S(Q);E(Q,w.__data,Y),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(Y+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(N,w.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,w.__data)}}function E(w,P,L){typeof w=="number"||typeof w=="boolean"?P[0]=w:w.isMatrix3?(P[0]=w.elements[0],P[1]=w.elements[1],P[2]=w.elements[2],P[3]=0,P[4]=w.elements[3],P[5]=w.elements[4],P[6]=w.elements[5],P[7]=0,P[8]=w.elements[6],P[9]=w.elements[7],P[10]=w.elements[8],P[11]=0):ArrayBuffer.isView(w)?P.set(new w.constructor(w.buffer,w.byteOffset,P.length)):w.toArray(P,L)}function C(w,P,L,O){const T=w.value,N=P+"_"+L;if(O[N]===void 0)return typeof T=="number"||typeof T=="boolean"?O[N]=T:ArrayBuffer.isView(T)?O[N]=T.slice():O[N]=T.clone(),!0;{const Y=O[N];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return O[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Y.equals(T)===!1)return Y.copy(T),!0}}return!1}function y(w){const P=w.uniforms;let L=0;const O=16;for(let N=0,Y=P.length;N<Y;N++){const G=Array.isArray(P[N])?P[N]:[P[N]];for(let Q=0,ht=G.length;Q<ht;Q++){const _t=G[Q],J=Array.isArray(_t.value)?_t.value:[_t.value];for(let I=0,H=J.length;I<H;I++){const $=J[I],mt=S($),bt=L%O,U=bt%mt.boundary,Z=bt+U;L+=U,Z!==0&&O-Z<mt.storage&&(L+=O-Z),_t.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),_t.__offset=L,L+=mt.storage}}}const T=L%O;return T>0&&(L+=O-T),w.__size=L,w.__cache={},this}function S(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",w),P}function F(w){const P=w.target;P.removeEventListener("dispose",F);const L=f.indexOf(P.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function B(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:d,dispose:B}}const uT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function fT(){return Yi===null&&(Yi=new $1(uT,16,16,Xs,Wn),Yi.name="DFG_LUT",Yi.minFilter=Rn,Yi.magFilter=Rn,Yi.wrapS=Aa,Yi.wrapT=Aa,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class hT{constructor(t={}){const{canvas:i=hM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=mi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const C=M,y=new Set([y0,M0,S0]),S=new Set([mi,Ji,cl,ul,_0,v0]),F=new Uint32Array(4),B=new Int32Array(4),w=new j;let P=null,L=null;const O=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let G=!1,Q=null,ht=null,_t=null,J=null;this._outputColorSpace=ti;let I=0,H=0,$=null,mt=-1,bt=null;const U=new tn,Z=new tn;let yt=null;const Rt=new se(0);let Ot=0,at=i.width,xt=i.height,Mt=1,zt=null,ie=null;const Qt=new tn(0,0,at,xt),qe=new tn(0,0,at,xt);let he=!1;const Me=new D0;let ye=!1,pe=!1;const en=new Ye,nn=new j,an=new tn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function sn(){return $===null?Mt:1}let W=s;function Be(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${u0}`),i.addEventListener("webglcontextlost",Qe,!1),i.addEventListener("webglcontextrestored",Le,!1),i.addEventListener("webglcontextcreationerror",ei,!1),W===null){const X="webgl2";if(W=Be(X,A),W===null)throw Be(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ee("WebGLRenderer: "+A.message),A}let Ce,D,b,K,st,ut,Et,wt,ct,ft,At,Ft,Lt,Dt,Kt,jt,ae,k,Tt,pt,Ct,It,St;function Wt(){Ce=new fb(W),Ce.init(),Ct=new nT(W,Ce),D=new ib(W,Ce,t,Ct),b=new tT(W,Ce),D.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),ht=W.createFramebuffer(),_t=W.createFramebuffer(),J=W.createFramebuffer(),K=new pb(W),st=new HE,ut=new eT(W,Ce,b,st,D,Ct,K),Et=new ub(Y),wt=new vy(W),It=new eb(W,wt),ct=new hb(W,wt,K,It),ft=new gb(W,ct,wt,It,K),k=new mb(W,D,ut),Kt=new ab(st),At=new zE(Y,Et,Ce,D,It,Kt),Ft=new lT(Y,st),Lt=new VE,Dt=new ZE(Ce),ae=new tb(Y,Et,b,ft,E,m),jt=new $E(Y,ft,D),St=new cT(W,K,D,b),Tt=new nb(W,Ce,K),pt=new db(W,Ce,K),K.programs=At.programs,Y.capabilities=D,Y.extensions=Ce,Y.properties=st,Y.renderLists=Lt,Y.shadowMap=jt,Y.state=b,Y.info=K}Wt(),C!==mi&&(N=new vb(C,i.width,i.height,p,l,c));const Gt=new rT(Y,W);this.xr=Gt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(A){A!==void 0&&(Mt=A,this.setSize(at,xt,!1))},this.getSize=function(A){return A.set(at,xt)},this.setSize=function(A,X,rt=!0){if(Gt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}at=A,xt=X,i.width=Math.floor(A*Mt),i.height=Math.floor(X*Mt),rt===!0&&(i.style.width=A+"px",i.style.height=X+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(at*Mt,xt*Mt).floor()},this.setDrawingBufferSize=function(A,X,rt){at=A,xt=X,Mt=rt,i.width=Math.floor(A*rt),i.height=Math.floor(X*rt),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(C===mi){Ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Qt)},this.setViewport=function(A,X,rt,nt){A.isVector4?Qt.set(A.x,A.y,A.z,A.w):Qt.set(A,X,rt,nt),b.viewport(U.copy(Qt).multiplyScalar(Mt).round())},this.getScissor=function(A){return A.copy(qe)},this.setScissor=function(A,X,rt,nt){A.isVector4?qe.set(A.x,A.y,A.z,A.w):qe.set(A,X,rt,nt),b.scissor(Z.copy(qe).multiplyScalar(Mt).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){b.setScissorTest(he=A)},this.setOpaqueSort=function(A){zt=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,rt=!0){let nt=0;if(A){let it=!1;if($!==null){const Nt=$.texture.format;it=y.has(Nt)}if(it){const Nt=$.texture.type,Ht=S.has(Nt),Ut=ae.getClearColor(),kt=ae.getClearAlpha(),Vt=Ut.r,Jt=Ut.g,le=Ut.b;Ht?(F[0]=Vt,F[1]=Jt,F[2]=le,F[3]=kt,W.clearBufferuiv(W.COLOR,0,F)):(B[0]=Vt,B[1]=Jt,B[2]=le,B[3]=kt,W.clearBufferiv(W.COLOR,0,B))}else nt|=W.COLOR_BUFFER_BIT}X&&(nt|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(nt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&W.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Qe,!1),i.removeEventListener("webglcontextrestored",Le,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),ae.dispose(),Lt.dispose(),Dt.dispose(),st.dispose(),Et.dispose(),ft.dispose(),It.dispose(),St.dispose(),At.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",fn),Gt.removeEventListener("sessionend",wn),Yn.stop()};function Qe(A){A.preventDefault(),N_("WebGLRenderer: Context Lost."),G=!0}function Le(){N_("WebGLRenderer: Context Restored."),G=!1;const A=K.autoReset,X=jt.enabled,rt=jt.autoUpdate,nt=jt.needsUpdate,it=jt.type;Wt(),K.autoReset=A,jt.enabled=X,jt.autoUpdate=rt,jt.needsUpdate=nt,jt.type=it}function ei(A){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ni(A){const X=A.target;X.removeEventListener("dispose",ni),io(X)}function io(A){ao(A),st.remove(A)}function ao(A){const X=st.get(A).programs;X!==void 0&&(X.forEach(function(rt){At.releaseProgram(rt)}),A.isShaderMaterial&&At.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,rt,nt,it,Nt){X===null&&(X=ln);const Ht=it.isMesh&&it.matrixWorld.determinantAffine()<0,Ut=Na(A,X,rt,nt,it);b.setMaterial(nt,Ht);let kt=rt.index,Vt=1;if(nt.wireframe===!0){if(kt=ct.getWireframeAttribute(rt),kt===void 0)return;Vt=2}const Jt=rt.drawRange,le=rt.attributes.position;let Zt=Jt.start*Vt,Te=(Jt.start+Jt.count)*Vt;Nt!==null&&(Zt=Math.max(Zt,Nt.start*Vt),Te=Math.min(Te,(Nt.start+Nt.count)*Vt)),kt!==null?(Zt=Math.max(Zt,0),Te=Math.min(Te,kt.count)):le!=null&&(Zt=Math.max(Zt,0),Te=Math.min(Te,le.count));const je=Te-Zt;if(je<0||je===1/0)return;It.setup(it,nt,Ut,rt,kt);let ke,Ne=Tt;if(kt!==null&&(ke=wt.get(kt),Ne=pt,Ne.setIndex(ke)),it.isMesh)nt.wireframe===!0?(b.setLineWidth(nt.wireframeLinewidth*sn()),Ne.setMode(W.LINES)):Ne.setMode(W.TRIANGLES);else if(it.isLine){let Pe=nt.linewidth;Pe===void 0&&(Pe=1),b.setLineWidth(Pe*sn()),it.isLineSegments?Ne.setMode(W.LINES):it.isLineLoop?Ne.setMode(W.LINE_LOOP):Ne.setMode(W.LINE_STRIP)}else it.isPoints?Ne.setMode(W.POINTS):it.isSprite&&Ne.setMode(W.TRIANGLES);if(it.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))Ne.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Pe=it._multiDrawStarts,Bt=it._multiDrawCounts,In=it._multiDrawCount,me=kt?wt.get(kt).bytesPerElement:1,xn=st.get(nt).currentProgram.getUniforms();for(let ii=0;ii<In;ii++)xn.setValue(W,"_gl_DrawID",ii),Ne.render(Pe[ii]/me,Bt[ii])}else if(it.isInstancedMesh)Ne.renderInstances(Zt,je,it.count);else if(rt.isInstancedBufferGeometry){const Pe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Bt=Math.min(rt.instanceCount,Pe);Ne.renderInstances(Zt,je,Bt)}else Ne.render(Zt,je)};function so(A,X,rt){A.transparent===!0&&A.side===Zi&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,La(A,X,rt),A.side=hs,A.needsUpdate=!0,La(A,X,rt),A.side=Zi):La(A,X,rt)}this.compile=function(A,X,rt=null){rt===null&&(rt=A),L=Dt.get(rt),L.init(X),T.push(L),rt.traverseVisible(function(it){it.isLight&&it.layers.test(X.layers)&&(L.pushLight(it),it.castShadow&&L.pushShadow(it))}),A!==rt&&A.traverseVisible(function(it){it.isLight&&it.layers.test(X.layers)&&(L.pushLight(it),it.castShadow&&L.pushShadow(it))}),L.setupLights();const nt=new Set;return A.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Nt=it.material;if(Nt)if(Array.isArray(Nt))for(let Ht=0;Ht<Nt.length;Ht++){const Ut=Nt[Ht];so(Ut,rt,it),nt.add(Ut)}else so(Nt,rt,it),nt.add(Nt)}),L=T.pop(),nt},this.compileAsync=function(A,X,rt=null){const nt=this.compile(A,X,rt);return new Promise(it=>{function Nt(){if(nt.forEach(function(Ht){st.get(Ht).currentProgram.isReady()&&nt.delete(Ht)}),nt.size===0){it(A);return}setTimeout(Nt,10)}Ce.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let qs=null;function zi(A){qs&&qs(A)}function fn(){Yn.stop()}function wn(){Yn.start()}const Yn=new lv;Yn.setAnimationLoop(zi),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(A){qs=A,Gt.setAnimationLoop(A),A===null?Yn.stop():Yn.start()},Gt.addEventListener("sessionstart",fn),Gt.addEventListener("sessionend",wn),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Q!==null&&Q.renderStart(A,X);const rt=Gt.enabled===!0&&Gt.isPresenting===!0,nt=N!==null&&($===null||rt)&&N.begin(Y,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(X),X=Gt.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,X,$),L=Dt.get(A,T.length),L.init(X),L.state.textureUnits=ut.getTextureUnits(),T.push(L),en.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Me.setFromProjectionMatrix(en,Qi,X.reversedDepth),pe=this.localClippingEnabled,ye=Kt.init(this.clippingPlanes,pe),P=Lt.get(A,O.length),P.init(),O.push(P),Gt.enabled===!0&&Gt.isPresenting===!0){const Ht=Y.xr.getDepthSensingMesh();Ht!==null&&ms(Ht,X,-1/0,Y.sortObjects)}ms(A,X,0,Y.sortObjects),P.finish(),Y.sortObjects===!0&&P.sort(zt,ie,X.reversedDepth),We=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,We&&ae.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&Kt.beginShadows();const it=L.state.shadowsArray;if(jt.render(it,A,X),ye===!0&&Kt.endShadows(),(nt&&N.hasRenderPass())===!1){const Ht=P.opaque,Ut=P.transmissive;if(L.setupLights(),X.isArrayCamera){const kt=X.cameras;if(Ut.length>0)for(let Vt=0,Jt=kt.length;Vt<Jt;Vt++){const le=kt[Vt];_l(Ht,Ut,A,le)}We&&ae.render(A);for(let Vt=0,Jt=kt.length;Vt<Jt;Vt++){const le=kt[Vt];gl(P,A,le,le.viewport)}}else Ut.length>0&&_l(Ht,Ut,A,X),We&&ae.render(A),gl(P,A,X)}$!==null&&H===0&&(ut.updateMultisampleRenderTarget($),ut.updateRenderTargetMipmap($)),nt&&N.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,X),It.resetDefaultState(),mt=-1,bt=null,T.pop(),T.length>0?(L=T[T.length-1],ut.setTextureUnits(L.state.textureUnits),ye===!0&&Kt.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?P=O[O.length-1]:P=null,Q!==null&&Q.renderEnd()};function ms(A,X,rt,nt){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Me.intersectsSprite(A)){nt&&an.setFromMatrixPosition(A.matrixWorld).applyMatrix4(en);const Ht=ft.update(A),Ut=A.material;Ut.visible&&P.push(A,Ht,Ut,rt,an.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Me.intersectsObject(A))){const Ht=ft.update(A),Ut=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),an.copy(A.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),an.copy(Ht.boundingSphere.center)),an.applyMatrix4(A.matrixWorld).applyMatrix4(en)),Array.isArray(Ut)){const kt=Ht.groups;for(let Vt=0,Jt=kt.length;Vt<Jt;Vt++){const le=kt[Vt],Zt=Ut[le.materialIndex];Zt&&Zt.visible&&P.push(A,Ht,Zt,rt,an.z,le)}}else Ut.visible&&P.push(A,Ht,Ut,rt,an.z,null)}}const Nt=A.children;for(let Ht=0,Ut=Nt.length;Ht<Ut;Ht++)ms(Nt[Ht],X,rt,nt)}function gl(A,X,rt,nt){const{opaque:it,transmissive:Nt,transparent:Ht}=A;L.setupLightsView(rt),ye===!0&&Kt.setGlobalState(Y.clippingPlanes,rt),nt&&b.viewport(U.copy(nt)),it.length>0&&gs(it,X,rt),Nt.length>0&&gs(Nt,X,rt),Ht.length>0&&gs(Ht,X,rt),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function _l(A,X,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[nt.id]===void 0){const Zt=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[nt.id]=new Pn(1,1,{generateMipmaps:!0,type:Zt?Wn:mi,minFilter:Gs,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace})}const Nt=L.state.transmissionRenderTarget[nt.id],Ht=nt.viewport||U;Nt.setSize(Ht.z*Y.transmissionResolutionScale,Ht.w*Y.transmissionResolutionScale);const Ut=Y.getRenderTarget(),kt=Y.getActiveCubeFace(),Vt=Y.getActiveMipmapLevel();Y.setRenderTarget(Nt),Y.getClearColor(Rt),Ot=Y.getClearAlpha(),Ot<1&&Y.setClearColor(16777215,.5),Y.clear(),We&&ae.render(rt);const Jt=Y.toneMapping;Y.toneMapping=ji;const le=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),L.setupLightsView(nt),ye===!0&&Kt.setGlobalState(Y.clippingPlanes,nt),gs(A,rt,nt),ut.updateMultisampleRenderTarget(Nt),ut.updateRenderTargetMipmap(Nt),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Te=0,je=X.length;Te<je;Te++){const ke=X[Te],{object:Ne,geometry:Pe,material:Bt,group:In}=ke;if(Bt.side===Zi&&Ne.layers.test(nt.layers)){const me=Bt.side;Bt.side=Xn,Bt.needsUpdate=!0,Ua(Ne,rt,nt,Pe,Bt,In),Bt.side=me,Bt.needsUpdate=!0,Zt=!0}}Zt===!0&&(ut.updateMultisampleRenderTarget(Nt),ut.updateRenderTargetMipmap(Nt))}Y.setRenderTarget(Ut,kt,Vt),Y.setClearColor(Rt,Ot),le!==void 0&&(nt.viewport=le),Y.toneMapping=Jt}function gs(A,X,rt){const nt=X.isScene===!0?X.overrideMaterial:null;for(let it=0,Nt=A.length;it<Nt;it++){const Ht=A[it],{object:Ut,geometry:kt,group:Vt}=Ht;let Jt=Ht.material;Jt.allowOverride===!0&&nt!==null&&(Jt=nt),Ut.layers.test(rt.layers)&&Ua(Ut,X,rt,kt,Jt,Vt)}}function Ua(A,X,rt,nt,it,Nt){A.onBeforeRender(Y,X,rt,nt,it,Nt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),it.onBeforeRender(Y,X,rt,nt,A,Nt),it.transparent===!0&&it.side===Zi&&it.forceSinglePass===!1?(it.side=Xn,it.needsUpdate=!0,Y.renderBufferDirect(rt,X,nt,it,A,Nt),it.side=hs,it.needsUpdate=!0,Y.renderBufferDirect(rt,X,nt,it,A,Nt),it.side=Zi):Y.renderBufferDirect(rt,X,nt,it,A,Nt),A.onAfterRender(Y,X,rt,nt,it,Nt)}function La(A,X,rt){X.isScene!==!0&&(X=ln);const nt=st.get(A),it=L.state.lights,Nt=L.state.shadowsArray,Ht=it.state.version,Ut=At.getParameters(A,it.state,Nt,X,rt,L.state.lightProbeGridArray),kt=At.getProgramCacheKey(Ut);let Vt=nt.programs;nt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,nt.fog=X.fog;const Jt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;nt.envMap=Et.get(A.envMap||nt.environment,Jt),nt.envMapRotation=nt.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",ni),Vt=new Map,nt.programs=Vt);let le=Vt.get(kt);if(le!==void 0){if(nt.currentProgram===le&&nt.lightsStateVersion===Ht)return ea(A,Ut),le}else Ut.uniforms=At.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,rt,Ut),A.onBeforeCompile(Ut,Y),le=At.acquireProgram(Ut,kt),Vt.set(kt,le),nt.uniforms=Ut.uniforms;const Zt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=Kt.uniform),ea(A,Ut),nt.needsLights=vl(A),nt.lightsStateVersion=Ht,nt.needsLights&&(Zt.ambientLightColor.value=it.state.ambient,Zt.lightProbe.value=it.state.probe,Zt.directionalLights.value=it.state.directional,Zt.directionalLightShadows.value=it.state.directionalShadow,Zt.spotLights.value=it.state.spot,Zt.spotLightShadows.value=it.state.spotShadow,Zt.rectAreaLights.value=it.state.rectArea,Zt.ltc_1.value=it.state.rectAreaLTC1,Zt.ltc_2.value=it.state.rectAreaLTC2,Zt.pointLights.value=it.state.point,Zt.pointLightShadows.value=it.state.pointShadow,Zt.hemisphereLights.value=it.state.hemi,Zt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Zt.spotLightMatrix.value=it.state.spotLightMatrix,Zt.spotLightMap.value=it.state.spotLightMap,Zt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=L.state.lightProbeGridArray.length>0,nt.currentProgram=le,nt.uniformsList=null,le}function ta(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=ru.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function ea(A,X){const rt=st.get(A);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function _s(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(X.matrixWorld);for(let rt=0,nt=A.length;rt<nt;rt++){const it=A[rt];if(it.texture!==null&&it.boundingBox.containsPoint(w))return it}return null}function Na(A,X,rt,nt,it){X.isScene!==!0&&(X=ln),ut.resetTextureUnits();const Nt=X.fog,Ht=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?X.environment:null,Ut=$===null?Y.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Se.workingColorSpace,kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Vt=Et.get(nt.envMap||Ht,kt),Jt=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,le=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!rt.morphAttributes.position,Te=!!rt.morphAttributes.normal,je=!!rt.morphAttributes.color;let ke=ji;nt.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ke=Y.toneMapping);const Ne=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=Ne!==void 0?Ne.length:0,Bt=st.get(nt),In=L.state.lights;if(ye===!0&&(pe===!0||A!==bt)){const De=A===bt&&nt.id===mt;Kt.setState(nt,A,De)}let me=!1;nt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==In.state.version||Bt.outputColorSpace!==Ut||it.isBatchedMesh&&Bt.batching===!1||!it.isBatchedMesh&&Bt.batching===!0||it.isBatchedMesh&&Bt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Bt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Bt.instancing===!1||!it.isInstancedMesh&&Bt.instancing===!0||it.isSkinnedMesh&&Bt.skinning===!1||!it.isSkinnedMesh&&Bt.skinning===!0||it.isInstancedMesh&&Bt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Bt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Bt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Bt.instancingMorph===!1&&it.morphTexture!==null||Bt.envMap!==Vt||nt.fog===!0&&Bt.fog!==Nt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Kt.numPlanes||Bt.numIntersection!==Kt.numIntersection)||Bt.vertexAlphas!==Jt||Bt.vertexTangents!==le||Bt.morphTargets!==Zt||Bt.morphNormals!==Te||Bt.morphColors!==je||Bt.toneMapping!==ke||Bt.morphTargetsCount!==Pe||!!Bt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Bt.__version=nt.version);let xn=Bt.currentProgram;me===!0&&(xn=La(nt,X,it),Q&&nt.isNodeMaterial&&Q.onUpdateProgram(nt,xn,Bt));let ii=!1,Ai=!1,ai=!1;const Oe=xn.getUniforms(),Je=Bt.uniforms;if(b.useProgram(xn.program)&&(ii=!0,Ai=!0,ai=!0),nt.id!==mt&&(mt=nt.id,Ai=!0),Bt.needsLights){const De=_s(L.state.lightProbeGridArray,it);Bt.lightProbeGrid!==De&&(Bt.lightProbeGrid=De,Ai=!0)}if(ii||bt!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Oe.setValue(W,"projectionMatrix",A.projectionMatrix),Oe.setValue(W,"viewMatrix",A.matrixWorldInverse);const Hi=Oe.map.cameraPosition;Hi!==void 0&&Hi.setValue(W,nn.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Oe.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Oe.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),bt!==A&&(bt=A,Ai=!0,ai=!0)}if(Bt.needsLights&&(In.state.directionalShadowMap.length>0&&Oe.setValue(W,"directionalShadowMap",In.state.directionalShadowMap,ut),In.state.spotShadowMap.length>0&&Oe.setValue(W,"spotShadowMap",In.state.spotShadowMap,ut),In.state.pointShadowMap.length>0&&Oe.setValue(W,"pointShadowMap",In.state.pointShadowMap,ut)),it.isSkinnedMesh){Oe.setOptional(W,it,"bindMatrix"),Oe.setOptional(W,it,"bindMatrixInverse");const De=it.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Oe.setValue(W,"boneTexture",De.boneTexture,ut))}it.isBatchedMesh&&(Oe.setOptional(W,it,"batchingTexture"),Oe.setValue(W,"batchingTexture",it._matricesTexture,ut),Oe.setOptional(W,it,"batchingIdTexture"),Oe.setValue(W,"batchingIdTexture",it._indirectTexture,ut),Oe.setOptional(W,it,"batchingColorTexture"),it._colorsTexture!==null&&Oe.setValue(W,"batchingColorTexture",it._colorsTexture,ut));const Ri=rt.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&k.update(it,rt,xn),(Ai||Bt.receiveShadow!==it.receiveShadow)&&(Bt.receiveShadow=it.receiveShadow,Oe.setValue(W,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&X.environment!==null&&(Je.envMapIntensity.value=X.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=fT()),Ai){if(Oe.setValue(W,"toneMappingExposure",Y.toneMappingExposure),Bt.needsLights&&hn(Je,ai),Nt&&nt.fog===!0&&Ft.refreshFogUniforms(Je,Nt),Ft.refreshMaterialUniforms(Je,nt,Mt,xt,L.state.transmissionRenderTarget[A.id]),Bt.needsLights&&Bt.lightProbeGrid){const De=Bt.lightProbeGrid;Je.probesSH.value=De.texture,Je.probesMin.value.copy(De.boundingBox.min),Je.probesMax.value.copy(De.boundingBox.max),Je.probesResolution.value.copy(De.resolution)}ru.upload(W,ta(Bt),Je,ut)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ru.upload(W,ta(Bt),Je,ut),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Oe.setValue(W,"center",it.center),Oe.setValue(W,"modelViewMatrix",it.modelViewMatrix),Oe.setValue(W,"normalMatrix",it.normalMatrix),Oe.setValue(W,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const De=nt.uniformsGroups;for(let Hi=0,Pa=De.length;Hi<Pa;Hi++){const vs=De[Hi];St.update(vs,xn),St.bind(vs,xn)}}return xn}function hn(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function vl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,X,rt){const nt=st.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),st.get(A.texture).__webglTexture=X,st.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const rt=st.get(A);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,rt=0){$=A,I=X,H=rt;let nt=null,it=!1,Nt=!1;if(A){const Ut=st.get(A);if(Ut.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(W.FRAMEBUFFER,Ut.__webglFramebuffer),U.copy(A.viewport),Z.copy(A.scissor),yt=A.scissorTest,b.viewport(U),b.scissor(Z),b.setScissorTest(yt),mt=-1;return}else if(Ut.__webglFramebuffer===void 0)ut.setupRenderTarget(A);else if(Ut.__hasExternalTextures)ut.rebindTextures(A,st.get(A.texture).__webglTexture,st.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(Ut.__boundDepthTexture!==Jt){if(Jt!==null&&st.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(A)}}const kt=A.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Nt=!0);const Vt=st.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[X])?nt=Vt[X][rt]:nt=Vt[X],it=!0):A.samples>0&&ut.useMultisampledRTT(A)===!1?nt=st.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?nt=Vt[rt]:nt=Vt,U.copy(A.viewport),Z.copy(A.scissor),yt=A.scissorTest}else U.copy(Qt).multiplyScalar(Mt).floor(),Z.copy(qe).multiplyScalar(Mt).floor(),yt=he;if(rt!==0&&(nt=ht),b.bindFramebuffer(W.FRAMEBUFFER,nt)&&b.drawBuffers(A,nt),b.viewport(U),b.scissor(Z),b.setScissorTest(yt),it){const Ut=st.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ut.__webglTexture,rt)}else if(Nt){const Ut=X;for(let kt=0;kt<A.textures.length;kt++){const Vt=st.get(A.textures[kt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+kt,Vt.__webglTexture,rt,Ut)}}else if(A!==null&&rt!==0){const Ut=st.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ut.__webglTexture,rt)}mt=-1},this.readRenderTargetPixels=function(A,X,rt,nt,it,Nt,Ht,Ut=0){if(!(A&&A.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ht!==void 0&&(kt=kt[Ht]),kt){b.bindFramebuffer(W.FRAMEBUFFER,kt);try{const Vt=A.textures[Ut],Jt=Vt.format,le=Vt.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ut),!D.textureFormatReadable(Jt)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(le)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-nt&&rt>=0&&rt<=A.height-it&&W.readPixels(X,rt,nt,it,Ct.convert(Jt),Ct.convert(le),Nt)}finally{const Vt=$!==null?st.get($).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,X,rt,nt,it,Nt,Ht,Ut=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ht!==void 0&&(kt=kt[Ht]),kt)if(X>=0&&X<=A.width-nt&&rt>=0&&rt<=A.height-it){b.bindFramebuffer(W.FRAMEBUFFER,kt);const Vt=A.textures[Ut],Jt=Vt.format,le=Vt.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ut),!D.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Zt),W.bufferData(W.PIXEL_PACK_BUFFER,Nt.byteLength,W.STREAM_READ),W.readPixels(X,rt,nt,it,Ct.convert(Jt),Ct.convert(le),0);const Te=$!==null?st.get($).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,Te);const je=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await dM(W,je,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Zt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Nt),W.deleteBuffer(Zt),W.deleteSync(je),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,rt=0){const nt=Math.pow(2,-rt),it=Math.floor(A.image.width*nt),Nt=Math.floor(A.image.height*nt),Ht=X!==null?X.x:0,Ut=X!==null?X.y:0;ut.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,rt,0,0,Ht,Ut,it,Nt),b.unbindTexture()},this.copyTextureToTexture=function(A,X,rt=null,nt=null,it=0,Nt=0){let Ht,Ut,kt,Vt,Jt,le,Zt,Te,je;const ke=A.isCompressedTexture?A.mipmaps[Nt]:A.image;if(rt!==null)Ht=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,kt=rt.isBox3?rt.max.z-rt.min.z:1,Vt=rt.min.x,Jt=rt.min.y,le=rt.isBox3?rt.min.z:0;else{const Je=Math.pow(2,-it);Ht=Math.floor(ke.width*Je),Ut=Math.floor(ke.height*Je),A.isDataArrayTexture?kt=ke.depth:A.isData3DTexture?kt=Math.floor(ke.depth*Je):kt=1,Vt=0,Jt=0,le=0}nt!==null?(Zt=nt.x,Te=nt.y,je=nt.z):(Zt=0,Te=0,je=0);const Ne=Ct.convert(X.format),Pe=Ct.convert(X.type);let Bt;X.isData3DTexture?(ut.setTexture3D(X,0),Bt=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ut.setTexture2DArray(X,0),Bt=W.TEXTURE_2D_ARRAY):(ut.setTexture2D(X,0),Bt=W.TEXTURE_2D),b.activeTexture(W.TEXTURE0),b.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),b.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),b.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const In=b.getParameter(W.UNPACK_ROW_LENGTH),me=b.getParameter(W.UNPACK_IMAGE_HEIGHT),xn=b.getParameter(W.UNPACK_SKIP_PIXELS),ii=b.getParameter(W.UNPACK_SKIP_ROWS),Ai=b.getParameter(W.UNPACK_SKIP_IMAGES);b.pixelStorei(W.UNPACK_ROW_LENGTH,ke.width),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ke.height),b.pixelStorei(W.UNPACK_SKIP_PIXELS,Vt),b.pixelStorei(W.UNPACK_SKIP_ROWS,Jt),b.pixelStorei(W.UNPACK_SKIP_IMAGES,le);const ai=A.isDataArrayTexture||A.isData3DTexture,Oe=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Je=st.get(A),Ri=st.get(X),De=st.get(Je.__renderTarget),Hi=st.get(Ri.__renderTarget);b.bindFramebuffer(W.READ_FRAMEBUFFER,De.__webglFramebuffer),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Pa=0;Pa<kt;Pa++)ai&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(A).__webglTexture,it,le+Pa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(X).__webglTexture,Nt,je+Pa)),W.blitFramebuffer(Vt,Jt,Ht,Ut,Zt,Te,Ht,Ut,W.DEPTH_BUFFER_BIT,W.NEAREST);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(it!==0||A.isRenderTargetTexture||st.has(A)){const Je=st.get(A),Ri=st.get(X);b.bindFramebuffer(W.READ_FRAMEBUFFER,_t),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,J);for(let De=0;De<kt;De++)ai?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Je.__webglTexture,it,le+De):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Je.__webglTexture,it),Oe?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ri.__webglTexture,Nt,je+De):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ri.__webglTexture,Nt),it!==0?W.blitFramebuffer(Vt,Jt,Ht,Ut,Zt,Te,Ht,Ut,W.COLOR_BUFFER_BIT,W.NEAREST):Oe?W.copyTexSubImage3D(Bt,Nt,Zt,Te,je+De,Vt,Jt,Ht,Ut):W.copyTexSubImage2D(Bt,Nt,Zt,Te,Vt,Jt,Ht,Ut);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Oe?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Bt,Nt,Zt,Te,je,Ht,Ut,kt,Ne,Pe,ke.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(Bt,Nt,Zt,Te,je,Ht,Ut,kt,Ne,ke.data):W.texSubImage3D(Bt,Nt,Zt,Te,je,Ht,Ut,kt,Ne,Pe,ke):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Nt,Zt,Te,Ht,Ut,Ne,Pe,ke.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Nt,Zt,Te,ke.width,ke.height,Ne,ke.data):W.texSubImage2D(W.TEXTURE_2D,Nt,Zt,Te,Ht,Ut,Ne,Pe,ke);b.pixelStorei(W.UNPACK_ROW_LENGTH,In),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,me),b.pixelStorei(W.UNPACK_SKIP_PIXELS,xn),b.pixelStorei(W.UNPACK_SKIP_ROWS,ii),b.pixelStorei(W.UNPACK_SKIP_IMAGES,Ai),Nt===0&&X.generateMipmaps&&W.generateMipmap(Bt),b.unbindTexture()},this.initRenderTarget=function(A){st.get(A).__webglFramebuffer===void 0&&ut.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ut.setTextureCube(A,0):A.isData3DTexture?ut.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ut.setTexture2DArray(A,0):ut.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){I=0,H=0,$=null,b.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),i.unpackColorSpace=Se._getUnpackColorSpace()}}const D1={type:"change"},U0={type:"start"},gv={type:"end"},jc=new C0,U1=new Ta,dT=Math.cos(70*q1.DEG2RAD),Mn=new j,$n=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hd=1e-6;class pT extends gy{constructor(t,i=null){super(t,i),this.state=Ve.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ra.ROTATE,MIDDLE:Ra.DOLLY,RIGHT:Ra.PAN},this.touches={ONE:kr.ROTATE,TWO:kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new ds,this._lastTargetPosition=new j,this._quat=new ds().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new s1,this._sphericalDelta=new s1,this._scale=1,this._panOffset=new j,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new j,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gT.bind(this),this._onPointerDown=mT.bind(this),this._onPointerUp=_T.bind(this),this._onContextMenu=ET.bind(this),this._onMouseWheel=ST.bind(this),this._onKeyDown=MT.bind(this),this._onTouchStart=yT.bind(this),this._onTouchMove=bT.bind(this),this._onMouseDown=vT.bind(this),this._onMouseMove=xT.bind(this),this._interceptControlDown=TT.bind(this),this._interceptControlUp=AT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(D1),this.update(),this.state=Ve.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Mn.copy(i).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=$n:s>Math.PI&&(s-=$n),l<-Math.PI?l+=$n:l>Math.PI&&(l-=$n),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=Mn.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),f=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(jc.origin.copy(this.object.position),jc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jc.direction))<dT?this.object.lookAt(this.target):(U1.setFromNormalAndCoplanarPoint(this.object.up,this.target),jc.intersectPlane(U1,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>hd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hd||this._lastTargetPosition.distanceToSquared(this.target)>hd?(this.dispatchEvent(D1),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$n/60*this.autoRotateSpeed*t:$n/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Mn.setFromMatrixColumn(i,0),Mn.multiplyScalar(-t),this._panOffset.add(Mn)}_panUp(t,i){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(i,1):(Mn.setFromMatrixColumn(i,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(t),this._panOffset.add(Mn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Mn.copy(l).sub(this.target);let c=Mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,p=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new qt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function mT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function _T(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gv),this.state=Ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function vT(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ra.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ve.DOLLY;break;case Ra.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ve.ROTATE}break;case Ra.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(U0)}function xT(r){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function ST(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(r.preventDefault(),this.dispatchEvent(U0),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(gv))}function MT(r){this.enabled!==!1&&this._handleKeyDown(r)}function yT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case kr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ve.TOUCH_ROTATE;break;case kr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case kr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ve.TOUCH_DOLLY_PAN;break;case kr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(U0)}function bT(r){switch(this._trackPointer(r),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ve.NONE}}function ET(r){this.enabled!==!1&&r.preventDefault()}function TT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class RT extends Q1{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new eo;t.deleteAttribute("uv");const i=new n0({side:Xn}),s=new n0,l=new ly(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new vn(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new QM(t,s,6),p=new On;p.position.set(-10.906,2.009,1.846),p.rotation.set(0,-.195,0),p.scale.set(2.328,7.905,4.651),p.updateMatrix(),f.setMatrixAt(0,p.matrix),p.position.set(-5.607,-.754,-.758),p.rotation.set(0,.994,0),p.scale.set(1.97,1.534,3.955),p.updateMatrix(),f.setMatrixAt(1,p.matrix),p.position.set(6.167,.857,7.803),p.rotation.set(0,.561,0),p.scale.set(3.927,6.285,3.687),p.updateMatrix(),f.setMatrixAt(2,p.matrix),p.position.set(-2.017,.018,6.124),p.rotation.set(0,.333,0),p.scale.set(2.002,4.566,2.064),p.updateMatrix(),f.setMatrixAt(3,p.matrix),p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),p.updateMatrix(),f.setMatrixAt(4,p.matrix),p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),p.updateMatrix(),f.setMatrixAt(5,p.matrix),this.add(f);const m=new vn(t,Hr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const d=new vn(t,Hr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const _=new vn(t,Hr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const x=new vn(t,Hr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const g=new vn(t,Hr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const M=new vn(t,Hr(100));M.position.set(0,20,0),M.scale.set(1,.1,1),this.add(M)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function Hr(r){return new sy({color:0,emissive:16777215,emissiveIntensity:r})}const ou={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const CT=new xu(-1,1,1,-1,0,1);class wT extends $i{constructor(){super(),this.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bi([0,2,0,0,2,0],2))}}const DT=new wT;class yu{constructor(t){this._mesh=new vn(DT,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,CT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class _v extends Ys{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Cn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=dl.clone(t.uniforms),this.material=new Cn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new yu(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class L1 extends Ys{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,p;this.inverse?(f=0,p=1):(f=1,p=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(p),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class UT extends Ys{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class LT{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new qt);this._width=s.width,this._height=s.height,i=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _v(ou),this.copyPass.material.blending=Fi,this.timer=new hy}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const p=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(p.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(p.EQUAL,1,4294967295)}this.swapBuffers()}L1!==void 0&&(f instanceof L1?s=!0:f instanceof UT&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new qt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class NT extends Ys{constructor(t,i,s=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new se}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const PT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Jr extends Ys{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new qt(t.x,t.y):new qt(256,256),this.clearColor=new se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Pn(c,f,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const x=new Pn(c,f,{type:Wn});x.texture.name="UnrealBloomPass.h"+_,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const g=new Pn(c,f,{type:Wn});g.texture.name="UnrealBloomPass.v"+_,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),f=Math.round(f/2)}const p=PT;this.highPassUniforms=dl.clone(p.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Cn({uniforms:this.highPassUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new qt(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dl.clone(ou.uniforms),this.blendMaterial=new Cn({uniforms:this.copyUniforms,vertexShader:ou.vertexShader,fragmentShader:ou.fragmentShader,premultipliedAlpha:!0,blending:md,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new se,this._oldClearAlpha=1,this._basic=new w0,this._fsQuad=new yu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new qt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let p=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=p.texture,this.separableBlurMaterials[m].uniforms.direction.value=Jr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Jr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),p=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[],s=t/3;for(let l=0;l<t;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Cn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new qt(.5,.5)},direction:{value:new qt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Cn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Jr.BlurDirectionX=new qt(1,0);Jr.BlurDirectionY=new qt(0,1);const Jc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class OT extends Ys{constructor(){super(),this.isOutputPass=!0,this.uniforms=dl.clone(Jc.uniforms),this.material=new iv({name:Jc.name,uniforms:this.uniforms,vertexShader:Jc.vertexShader,fragmentShader:Jc.fragmentShader}),this._fsQuad=new yu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Se.getTransfer(this._outputColorSpace)===Ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===h0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===d0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===p0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===m0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const o0={cols:33,rows:49,width:2.0015625000000004,height:3,camera:[.925,.654,5.166],target:[.525,-.046,-.034],data:new Float32Array([-.499,1.389,-.95,-.439,1.374,-.939,-.38,1.36,-.927,-.32,1.345,-.915,-.26,1.33,-.903,-.201,1.315,-.892,-.141,1.301,-.88,-.081,1.287,-.867,-.022,1.275,-.851,.037,1.264,-.834,.096,1.253,-.817,.156,1.242,-.801,.215,1.231,-.783,.274,1.221,-.765,.332,1.211,-.745,.391,1.202,-.726,.45,1.192,-.706,.508,1.183,-.686,.567,1.174,-.666,.625,1.165,-.646,.684,1.156,-.625,.742,1.147,-.604,.8,1.139,-.583,.858,1.13,-.56,.916,1.122,-.538,.973,1.115,-.514,1.03,1.107,-.49,1.087,1.1,-.465,1.143,1.093,-.438,1.199,1.087,-.41,1.253,1.081,-.38,1.307,1.075,-.348,1.36,1.069,-.315,-.518,1.336,-.922,-.458,1.322,-.91,-.398,1.308,-.898,-.339,1.294,-.885,-.279,1.279,-.873,-.219,1.265,-.861,-.16,1.251,-.847,-.1,1.239,-.831,-.041,1.229,-.814,.018,1.22,-.795,.077,1.21,-.777,.136,1.197,-.762,.195,1.183,-.748,.255,1.172,-.731,.314,1.161,-.713,.372,1.151,-.695,.431,1.141,-.676,.49,1.13,-.658,.549,1.121,-.639,.608,1.111,-.62,.666,1.101,-.6,.725,1.092,-.58,.783,1.083,-.56,.842,1.074,-.539,.9,1.065,-.518,.958,1.057,-.497,1.016,1.048,-.475,1.074,1.041,-.451,1.131,1.033,-.427,1.187,1.026,-.402,1.243,1.019,-.375,1.299,1.013,-.346,1.353,1.007,-.315,-.536,1.285,-.892,-.477,1.271,-.88,-.417,1.257,-.867,-.357,1.243,-.854,-.298,1.229,-.841,-.238,1.216,-.827,-.179,1.204,-.811,-.12,1.194,-.793,-.061,1.186,-.773,-.002,1.178,-.753,.057,1.167,-.736,.116,1.153,-.722,.176,1.138,-.709,.235,1.125,-.694,.294,1.113,-.679,.353,1.101,-.662,.413,1.09,-.644,.472,1.08,-.626,.53,1.069,-.608,.589,1.059,-.59,.648,1.049,-.572,.707,1.039,-.553,.766,1.029,-.534,.825,1.019,-.515,.883,1.01,-.495,.942,1,-.475,1,.991,-.454,1.058,.983,-.433,1.116,.974,-.411,1.174,.966,-.388,1.231,.959,-.364,1.288,.952,-.339,1.344,.945,-.311,-.555,1.234,-.861,-.495,1.22,-.848,-.436,1.207,-.834,-.376,1.194,-.82,-.317,1.181,-.806,-.257,1.169,-.79,-.198,1.16,-.771,-.14,1.152,-.751,-.081,1.146,-.73,-.022,1.136,-.712,.037,1.123,-.697,.097,1.108,-.683,.156,1.093,-.671,.215,1.079,-.657,.275,1.066,-.642,.334,1.054,-.625,.393,1.043,-.608,.452,1.032,-.591,.511,1.021,-.574,.57,1.01,-.556,.629,.999,-.539,.688,.988,-.521,.747,.978,-.503,.806,.967,-.485,.865,.957,-.467,.924,.947,-.448,.983,.937,-.429,1.041,.927,-.41,1.1,.918,-.39,1.158,.909,-.369,1.217,.9,-.348,1.274,.892,-.326,1.332,.885,-.302,-.574,1.184,-.828,-.514,1.171,-.814,-.455,1.159,-.799,-.395,1.146,-.784,-.336,1.134,-.768,-.277,1.125,-.75,-.218,1.118,-.729,-.16,1.113,-.707,-.101,1.104,-.688,-.042,1.092,-.672,.018,1.077,-.658,.077,1.062,-.646,.136,1.048,-.632,.196,1.035,-.617,.255,1.023,-.601,.314,1.011,-.585,.373,.999,-.568,.432,.987,-.552,.492,.976,-.535,.551,.964,-.518,.61,.953,-.502,.669,.941,-.485,.728,.93,-.468,.787,.919,-.451,.846,.908,-.433,.905,.897,-.416,.964,.886,-.398,1.023,.875,-.38,1.082,.865,-.362,1.141,.855,-.344,1.2,.845,-.324,1.258,.835,-.305,1.317,.826,-.284,-.593,1.136,-.793,-.533,1.124,-.778,-.474,1.112,-.762,-.414,1.1,-.746,-.355,1.091,-.728,-.297,1.084,-.707,-.239,1.08,-.684,-.18,1.072,-.664,-.121,1.06,-.648,-.061,1.046,-.634,-.002,1.031,-.621,.057,1.018,-.606,.117,1.006,-.591,.176,.994,-.574,.235,.986,-.555,.294,.973,-.539,.353,.959,-.524,.412,.947,-.509,.471,.934,-.493,.531,.922,-.477,.59,.91,-.461,.649,.898,-.444,.708,.886,-.428,.767,.874,-.412,.827,.862,-.395,.886,.85,-.379,.945,.839,-.362,1.004,.827,-.345,1.063,.816,-.328,1.122,.805,-.311,1.181,.794,-.294,1.24,.783,-.276,1.299,.772,-.258,-.612,1.089,-.757,-.552,1.078,-.74,-.493,1.067,-.724,-.434,1.056,-.706,-.375,1.049,-.686,-.317,1.045,-.662,-.259,1.04,-.641,-.2,1.029,-.624,-.14,1.014,-.61,-.081,1.001,-.596,-.022,.988,-.58,.038,.977,-.564,.097,.966,-.547,.156,.956,-.529,.215,.95,-.508,.274,.939,-.491,.333,.924,-.477,.392,.909,-.463,.451,.896,-.448,.511,.883,-.432,.57,.87,-.417,.629,.858,-.401,.688,.845,-.385,.747,.832,-.369,.807,.82,-.353,.866,.808,-.337,.925,.796,-.321,.984,.784,-.305,1.043,.772,-.289,1.102,.76,-.272,1.162,.748,-.256,1.221,.736,-.24,1.28,.724,-.223,-.631,1.043,-.718,-.572,1.033,-.701,-.513,1.023,-.684,-.454,1.014,-.665,-.395,1.008,-.643,-.338,1.005,-.619,-.279,.997,-.599,-.219,.984,-.585,-.16,.971,-.57,-.101,.959,-.554,-.042,.948,-.537,.018,.937,-.52,.077,.927,-.502,.136,.918,-.483,.195,.912,-.463,.254,.903,-.444,.313,.89,-.429,.372,.875,-.415,.431,.86,-.401,.49,.847,-.386,.55,.833,-.37,.609,.82,-.355,.668,.807,-.339,.727,.795,-.324,.786,.782,-.308,.846,.77,-.292,.905,.757,-.276,.964,.745,-.26,1.023,.733,-.244,1.082,.72,-.228,1.141,.708,-.212,1.201,.696,-.196,1.26,.683,-.18,-.65,.999,-.679,-.591,.99,-.66,-.532,.98,-.642,-.473,.972,-.623,-.415,.966,-.601,-.357,.963,-.577,-.298,.956,-.557,-.239,.943,-.542,-.18,.931,-.526,-.121,.921,-.508,-.062,.911,-.491,-.002,.9,-.474,.057,.889,-.457,.116,.88,-.438,.175,.873,-.418,.234,.866,-.398,.293,.855,-.381,.352,.841,-.366,.411,.826,-.353,.47,.811,-.338,.529,.798,-.323,.589,.785,-.307,.648,.773,-.291,.707,.761,-.275,.766,.748,-.259,.825,.736,-.243,.885,.724,-.227,.944,.712,-.211,1.003,.699,-.195,1.062,.687,-.179,1.121,.675,-.163,1.181,.663,-.147,1.24,.651,-.131,-.67,.957,-.637,-.611,.948,-.618,-.552,.939,-.599,-.493,.93,-.581,-.434,.923,-.56,-.376,.919,-.537,-.318,.914,-.515,-.259,.906,-.496,-.2,.896,-.478,-.141,.886,-.46,-.082,.877,-.442,-.023,.867,-.425,.037,.853,-.409,.096,.842,-.392,.155,.834,-.373,.214,.828,-.353,.273,.819,-.334,.332,.807,-.318,.391,.791,-.304,.45,.777,-.29,.509,.764,-.274,.569,.753,-.258,.628,.741,-.241,.687,.73,-.225,.746,.718,-.209,.805,.706,-.192,.865,.695,-.176,.924,.683,-.159,.983,.671,-.143,1.042,.659,-.127,1.101,.648,-.11,1.161,.636,-.094,1.22,.625,-.078,-.69,.917,-.593,-.631,.908,-.574,-.572,.899,-.556,-.513,.89,-.537,-.454,.881,-.518,-.395,.874,-.498,-.337,.868,-.477,-.278,.863,-.454,-.22,.855,-.435,-.161,.847,-.416,-.102,.838,-.397,-.043,.83,-.378,.016,.82,-.36,.076,.807,-.345,.135,.796,-.328,.194,.789,-.308,.253,.782,-.288,.312,.772,-.27,.371,.757,-.256,.43,.744,-.241,.489,.733,-.224,.549,.723,-.206,.608,.712,-.19,.667,.701,-.173,.726,.69,-.156,.785,.679,-.139,.845,.668,-.123,.904,.657,-.106,.963,.646,-.089,1.022,.635,-.073,1.082,.624,-.056,1.141,.612,-.04,1.2,.601,-.023,-.71,.88,-.548,-.651,.871,-.529,-.592,.862,-.51,-.533,.853,-.491,-.474,.843,-.473,-.415,.834,-.454,-.356,.826,-.435,-.298,.818,-.415,-.239,.811,-.395,-.18,.803,-.375,-.121,.796,-.355,-.062,.789,-.335,-.004,.784,-.314,.055,.773,-.297,.115,.761,-.28,.174,.752,-.262,.233,.744,-.242,.292,.736,-.223,.351,.724,-.207,.41,.713,-.19,.469,.702,-.174,.529,.691,-.157,.588,.68,-.14,.647,.669,-.123,.706,.659,-.106,.765,.648,-.089,.825,.637,-.073,.884,.625,-.056,.943,.614,-.039,1.002,.603,-.023,1.062,.592,-.006,1.121,.581,.01,1.18,.569,.027,-.731,.845,-.5,-.672,.836,-.481,-.613,.827,-.462,-.554,.818,-.444,-.495,.809,-.425,-.436,.799,-.406,-.377,.79,-.388,-.318,.781,-.369,-.259,.773,-.349,-.2,.766,-.329,-.141,.759,-.309,-.082,.752,-.289,-.024,.746,-.268,.035,.737,-.25,.094,.726,-.232,.153,.717,-.214,.212,.708,-.196,.272,.698,-.178,.331,.687,-.161,.39,.676,-.144,.449,.665,-.127,.509,.654,-.11,.568,.643,-.094,.627,.632,-.077,.686,.621,-.06,.746,.609,-.044,.805,.598,-.028,.864,.587,-.011,.923,.575,.005,.983,.563,.021,1.042,.552,.038,1.101,.54,.054,1.16,.528,.07,-.751,.812,-.451,-.692,.803,-.432,-.633,.795,-.413,-.574,.787,-.394,-.515,.778,-.375,-.456,.769,-.356,-.397,.76,-.337,-.339,.751,-.318,-.28,.742,-.299,-.221,.734,-.28,-.162,.726,-.26,-.103,.717,-.241,-.044,.708,-.222,.015,.698,-.205,.074,.688,-.187,.133,.678,-.17,.193,.667,-.152,.252,.656,-.135,.311,.645,-.118,.37,.634,-.102,.43,.623,-.085,.489,.611,-.069,.548,.6,-.053,.607,.588,-.037,.667,.576,-.021,.726,.564,-.005,.785,.552,.011,.845,.54,.026,.904,.528,.042,.963,.516,.057,1.023,.504,.073,1.082,.491,.088,1.141,.479,.104,-.772,.781,-.401,-.713,.772,-.382,-.654,.763,-.363,-.595,.754,-.345,-.536,.744,-.326,-.477,.735,-.308,-.418,.725,-.289,-.359,.716,-.271,-.3,.706,-.252,-.241,.697,-.234,-.182,.687,-.216,-.123,.676,-.198,-.064,.666,-.181,-.004,.655,-.164,.055,.644,-.147,.114,.633,-.13,.173,.622,-.114,.233,.61,-.098,.292,.598,-.082,.351,.587,-.066,.411,.575,-.051,.47,.562,-.035,.529,.55,-.02,.589,.538,-.005,.648,.525,.01,.708,.513,.025,.767,.5,.04,.827,.487,.055,.886,.475,.069,.945,.462,.084,1.005,.449,.098,1.064,.436,.112,1.124,.423,.127,-.792,.745,-.354,-.733,.735,-.336,-.674,.725,-.318,-.615,.715,-.3,-.556,.705,-.282,-.497,.694,-.264,-.438,.684,-.246,-.379,.674,-.229,-.32,.663,-.212,-.261,.652,-.195,-.201,.641,-.178,-.142,.63,-.161,-.083,.618,-.145,-.023,.606,-.129,.036,.595,-.114,.095,.583,-.098,.155,.57,-.083,.214,.558,-.068,.274,.546,-.053,.333,.533,-.039,.393,.521,-.024,.452,.508,-.01,.512,.495,.004,.572,.482,.018,.631,.469,.031,.691,.456,.045,.75,.443,.059,.81,.43,.072,.87,.417,.085,.929,.403,.099,.989,.39,.112,1.049,.377,.125,1.108,.364,.138,-.812,.703,-.312,-.753,.692,-.295,-.694,.681,-.278,-.635,.67,-.261,-.575,.659,-.244,-.516,.647,-.228,-.457,.636,-.211,-.398,.625,-.195,-.338,.613,-.179,-.279,.601,-.163,-.22,.589,-.148,-.16,.577,-.133,-.101,.565,-.118,-.041,.552,-.103,.019,.54,-.089,.078,.527,-.075,.138,.514,-.061,.197,.501,-.048,.257,.488,-.035,.317,.475,-.022,.377,.462,-.009,.436,.449,.004,.496,.436,.017,.556,.422,.029,.616,.409,.041,.676,.396,.054,.735,.382,.066,.795,.369,.078,.855,.356,.09,.915,.342,.102,.975,.329,.114,1.035,.316,.125,1.095,.303,.137,-.831,.654,-.278,-.772,.642,-.262,-.712,.63,-.246,-.653,.618,-.23,-.594,.606,-.215,-.534,.594,-.2,-.475,.582,-.185,-.415,.57,-.17,-.356,.558,-.155,-.296,.545,-.141,-.236,.532,-.127,-.177,.52,-.114,-.117,.507,-.101,-.057,.494,-.088,.003,.481,-.075,.063,.468,-.063,.123,.454,-.051,.182,.441,-.039,.242,.428,-.028,.302,.415,-.016,.362,.401,-.005,.422,.388,.006,.482,.375,.018,.542,.361,.029,.603,.348,.04,.663,.335,.051,.723,.321,.062,.783,.308,.073,.843,.295,.083,.903,.282,.094,.963,.268,.104,1.024,.255,.114,1.084,.242,.124,-.848,.599,-.253,-.789,.587,-.239,-.729,.574,-.224,-.67,.562,-.21,-.61,.549,-.196,-.55,.536,-.182,-.491,.524,-.169,-.431,.511,-.155,-.371,.498,-.143,-.311,.485,-.13,-.251,.472,-.118,-.191,.459,-.106,-.131,.446,-.095,-.071,.433,-.084,-.011,.42,-.073,.049,.406,-.063,.109,.393,-.053,.17,.38,-.042,.23,.367,-.032,.29,.354,-.022,.35,.34,-.012,.411,.327,-.003,.471,.314,.007,.531,.301,.017,.592,.288,.027,.652,.275,.037,.712,.261,.047,.773,.248,.056,.833,.236,.066,.894,.223,.075,.954,.21,.084,1.015,.197,.092,1.075,.185,.101,-.864,.54,-.239,-.804,.527,-.226,-.745,.514,-.213,-.685,.502,-.2,-.625,.489,-.188,-.565,.476,-.176,-.505,.463,-.164,-.445,.45,-.153,-.384,.437,-.142,-.324,.424,-.131,-.264,.411,-.121,-.204,.398,-.112,-.143,.385,-.102,-.083,.372,-.093,-.022,.359,-.084,.038,.346,-.075,.099,.333,-.066,.159,.32,-.057,.22,.307,-.049,.28,.294,-.04,.341,.281,-.031,.401,.268,-.022,.462,.255,-.013,.522,.243,-.004,.583,.23,.005,.643,.217,.013,.704,.205,.022,.765,.192,.03,.825,.18,.038,.886,.168,.046,.947,.156,.053,1.008,.144,.06,1.069,.132,.067,-.878,.479,-.236,-.818,.466,-.224,-.758,.453,-.213,-.698,.44,-.202,-.637,.428,-.191,-.577,.415,-.181,-.517,.402,-.171,-.456,.389,-.162,-.395,.376,-.154,-.335,.364,-.145,-.274,.351,-.137,-.213,.339,-.13,-.153,.326,-.122,-.092,.314,-.114,-.031,.301,-.107,.029,.289,-.099,.09,.276,-.091,.151,.264,-.083,.212,.251,-.075,.272,.238,-.067,.333,.226,-.058,.393,.213,-.05,.454,.2,-.041,.515,.188,-.033,.576,.176,-.026,.637,.164,-.018,.698,.152,-.011,.759,.14,-.004,.82,.129,.002,.881,.118,.009,.942,.107,.015,1.003,.095,.021,1.065,.084,.027,-.89,.418,-.243,-.829,.405,-.232,-.769,.392,-.222,-.708,.38,-.213,-.648,.367,-.205,-.587,.355,-.197,-.526,.343,-.19,-.465,.331,-.183,-.404,.319,-.176,-.343,.307,-.171,-.282,.296,-.165,-.221,.284,-.159,-.16,.272,-.152,-.099,.26,-.146,-.038,.248,-.139,.023,.236,-.132,.084,.224,-.124,.145,.211,-.117,.205,.199,-.109,.266,.186,-.1,.327,.173,-.092,.387,.161,-.084,.448,.149,-.076,.509,.137,-.069,.57,.126,-.063,.631,.114,-.056,.693,.103,-.05,.754,.093,-.044,.816,.083,-.04,.877,.073,-.034,.939,.062,-.029,1,.051,-.023,1.061,.04,-.017,-.9,.358,-.257,-.839,.346,-.248,-.779,.333,-.24,-.718,.322,-.234,-.656,.31,-.228,-.595,.298,-.222,-.534,.287,-.217,-.473,.276,-.211,-.411,.265,-.207,-.35,.255,-.205,-.288,.245,-.2,-.227,.233,-.195,-.166,.222,-.19,-.104,.211,-.184,-.043,.199,-.177,.018,.187,-.171,.079,.175,-.164,.14,.163,-.156,.2,.15,-.147,.261,.137,-.139,.321,.124,-.13,.382,.111,-.122,.443,.101,-.116,.505,.09,-.11,.566,.079,-.104,.627,.068,-.098,.689,.057,-.092,.75,.046,-.086,.811,.035,-.08,.872,.024,-.074,.934,.013,-.067,.995,.002,-.061,1.056,-.01,-.054,-.91,.299,-.274,-.848,.288,-.27,-.787,.277,-.266,-.725,.266,-.261,-.664,.255,-.257,-.603,.244,-.252,-.541,.233,-.248,-.48,.223,-.244,-.418,.212,-.24,-.357,.201,-.235,-.295,.191,-.231,-.234,.18,-.227,-.172,.169,-.222,-.111,.158,-.217,-.05,.147,-.211,.012,.136,-.205,.073,.124,-.199,.134,.112,-.192,.195,.1,-.185,.256,.088,-.177,.316,.075,-.168,.377,.062,-.16,.438,.051,-.153,.499,.04,-.147,.561,.029,-.141,.622,.018,-.135,.683,.006,-.128,.744,-.005,-.121,.805,-.017,-.114,.866,-.029,-.106,.927,-.041,-.098,.988,-.053,-.09,1.049,-.065,-.082,-.919,.239,-.289,-.857,.228,-.287,-.796,.218,-.284,-.734,.207,-.281,-.673,.196,-.277,-.611,.186,-.273,-.55,.175,-.27,-.488,.165,-.266,-.427,.154,-.262,-.365,.143,-.258,-.304,.133,-.254,-.242,.122,-.249,-.181,.112,-.245,-.119,.101,-.241,-.058,.09,-.236,.004,.079,-.231,.065,.068,-.226,.126,.057,-.221,.188,.046,-.215,.249,.034,-.209,.31,.022,-.202,.371,.01,-.194,.432,-.003,-.185,.493,-.014,-.178,.554,-.026,-.171,.615,-.038,-.163,.676,-.05,-.155,.736,-.062,-.146,.797,-.074,-.137,.858,-.087,-.128,.918,-.099,-.119,.979,-.112,-.11,1.039,-.124,-.101,-.929,.178,-.299,-.867,.167,-.296,-.806,.157,-.293,-.744,.146,-.29,-.683,.135,-.287,-.621,.125,-.284,-.56,.114,-.28,-.498,.104,-.277,-.437,.093,-.273,-.375,.083,-.269,-.314,.072,-.265,-.252,.062,-.262,-.191,.051,-.258,-.129,.04,-.254,-.067,.03,-.25,-.006,.019,-.246,.056,.009,-.242,.117,-.002,-.238,.179,-.013,-.235,.24,-.024,-.23,.302,-.035,-.225,.363,-.047,-.22,.424,-.059,-.211,.484,-.072,-.2,.545,-.084,-.191,.606,-.097,-.182,.666,-.109,-.172,.726,-.122,-.161,.787,-.135,-.151,.847,-.147,-.141,.907,-.16,-.131,.968,-.173,-.12,1.028,-.185,-.11,-.94,.116,-.3,-.878,.106,-.297,-.816,.095,-.293,-.755,.084,-.29,-.693,.074,-.287,-.632,.063,-.284,-.57,.053,-.28,-.509,.042,-.277,-.447,.032,-.273,-.386,.021,-.27,-.324,.01,-.266,-.263,0,-.262,-.201,-.011,-.259,-.14,-.021,-.255,-.078,-.032,-.252,-.017,-.042,-.248,.045,-.053,-.245,.106,-.064,-.242,.168,-.075,-.239,.229,-.085,-.237,.291,-.096,-.234,.352,-.107,-.232,.414,-.119,-.227,.475,-.132,-.216,.534,-.145,-.201,.594,-.158,-.189,.654,-.17,-.178,.715,-.183,-.167,.775,-.196,-.156,.835,-.209,-.145,.895,-.221,-.133,.955,-.234,-.122,1.015,-.246,-.11,-.95,.055,-.292,-.889,.045,-.288,-.827,.034,-.284,-.766,.024,-.281,-.704,.013,-.277,-.643,.003,-.274,-.581,-.008,-.27,-.52,-.019,-.266,-.458,-.029,-.263,-.397,-.04,-.259,-.335,-.05,-.256,-.274,-.061,-.252,-.212,-.071,-.249,-.151,-.082,-.245,-.089,-.093,-.242,-.028,-.103,-.238,.034,-.114,-.235,.095,-.125,-.232,.156,-.135,-.229,.218,-.146,-.226,.279,-.157,-.224,.34,-.168,-.221,.401,-.181,-.221,.463,-.194,-.219,.523,-.207,-.207,.581,-.219,-.188,.641,-.231,-.173,.701,-.244,-.165,.761,-.257,-.153,.822,-.27,-.141,.882,-.282,-.129,.941,-.294,-.116,1.001,-.306,-.1,-.962,-.004,-.274,-.9,-.014,-.27,-.838,-.025,-.266,-.777,-.035,-.262,-.715,-.046,-.258,-.654,-.056,-.255,-.592,-.067,-.251,-.531,-.077,-.247,-.469,-.087,-.243,-.408,-.098,-.239,-.346,-.108,-.236,-.285,-.119,-.232,-.223,-.129,-.228,-.162,-.14,-.224,-.1,-.15,-.221,-.039,-.161,-.217,.023,-.171,-.213,.084,-.182,-.209,.145,-.192,-.205,.207,-.202,-.201,.268,-.212,-.196,.329,-.22,-.189,.391,-.233,-.189,.448,-.253,-.205,.509,-.268,-.204,.569,-.28,-.189,.627,-.292,-.17,.687,-.305,-.158,.748,-.318,-.147,.807,-.33,-.133,.867,-.342,-.118,.926,-.353,-.1,.983,-.363,-.078,-.973,-.06,-.249,-.911,-.07,-.245,-.85,-.081,-.241,-.788,-.091,-.236,-.727,-.101,-.232,-.665,-.112,-.228,-.603,-.122,-.224,-.542,-.132,-.22,-.48,-.142,-.216,-.419,-.153,-.211,-.357,-.163,-.207,-.296,-.173,-.203,-.234,-.184,-.199,-.173,-.194,-.195,-.111,-.204,-.19,-.05,-.214,-.186,.012,-.224,-.181,.073,-.234,-.177,.135,-.244,-.171,.196,-.253,-.166,.258,-.259,-.156,.319,-.271,-.153,.379,-.288,-.161,.435,-.309,-.181,.494,-.327,-.191,.555,-.341,-.183,.614,-.353,-.166,.673,-.365,-.152,.733,-.377,-.137,.792,-.389,-.119,.85,-.399,-.1,.908,-.408,-.076,.963,-.413,-.048,-.984,-.113,-.217,-.922,-.123,-.213,-.861,-.133,-.208,-.799,-.143,-.204,-.737,-.153,-.199,-.676,-.164,-.195,-.614,-.174,-.19,-.553,-.184,-.186,-.491,-.194,-.181,-.43,-.204,-.177,-.368,-.213,-.172,-.307,-.223,-.167,-.245,-.233,-.162,-.184,-.243,-.157,-.122,-.253,-.152,-.061,-.262,-.147,.001,-.271,-.141,.063,-.281,-.137,.124,-.291,-.132,.186,-.297,-.123,.247,-.309,-.12,.308,-.326,-.125,.366,-.344,-.137,.424,-.363,-.152,.479,-.384,-.172,.54,-.401,-.172,.599,-.413,-.156,.658,-.424,-.138,.716,-.435,-.119,.775,-.445,-.098,.832,-.453,-.073,.887,-.457,-.044,.939,-.457,-.01,-.994,-.162,-.181,-.933,-.172,-.176,-.871,-.182,-.171,-.81,-.192,-.166,-.748,-.202,-.162,-.687,-.212,-.157,-.625,-.222,-.152,-.563,-.231,-.147,-.502,-.241,-.141,-.44,-.25,-.136,-.379,-.259,-.131,-.317,-.269,-.125,-.256,-.278,-.12,-.194,-.287,-.114,-.132,-.296,-.109,-.071,-.306,-.104,-.009,-.313,-.096,.052,-.323,-.091,.114,-.334,-.087,.175,-.347,-.086,.235,-.364,-.092,.294,-.383,-.103,.351,-.402,-.119,.408,-.422,-.136,.463,-.442,-.157,.524,-.46,-.156,.583,-.471,-.138,.641,-.481,-.117,.698,-.49,-.095,.755,-.497,-.07,.81,-.501,-.04,.863,-.501,-.006,.912,-.494,.032,-1.005,-.209,-.14,-.944,-.219,-.135,-.882,-.228,-.13,-.82,-.238,-.125,-.759,-.247,-.12,-.697,-.257,-.114,-.636,-.266,-.109,-.574,-.275,-.103,-.512,-.284,-.098,-.451,-.293,-.092,-.389,-.301,-.086,-.327,-.31,-.08,-.266,-.319,-.074,-.204,-.326,-.067,-.142,-.336,-.061,-.081,-.346,-.057,-.02,-.357,-.053,.042,-.37,-.052,.102,-.386,-.054,.162,-.403,-.061,.22,-.422,-.073,.277,-.441,-.09,.333,-.461,-.11,.388,-.481,-.135,.446,-.501,-.144,.507,-.517,-.136,.565,-.526,-.115,.622,-.535,-.092,.679,-.542,-.066,.734,-.546,-.036,.786,-.545,-.002,.835,-.538,.036,.882,-.526,.077,-1.016,-.253,-.097,-.954,-.263,-.092,-.892,-.272,-.087,-.831,-.281,-.081,-.769,-.29,-.075,-.707,-.299,-.069,-.646,-.307,-.063,-.584,-.316,-.057,-.522,-.324,-.051,-.461,-.333,-.045,-.399,-.34,-.038,-.337,-.349,-.032,-.276,-.358,-.026,-.214,-.368,-.022,-.153,-.38,-.018,-.092,-.393,-.017,-.031,-.408,-.018,.029,-.424,-.022,.089,-.442,-.031,.146,-.462,-.045,.203,-.481,-.064,.258,-.501,-.086,.311,-.52,-.113,.369,-.54,-.128,.429,-.559,-.127,.489,-.572,-.112,.546,-.58,-.088,.602,-.586,-.062,.657,-.59,-.032,.71,-.589,.002,.759,-.583,.04,.805,-.571,.08,.849,-.555,.122,-1.026,-.296,-.053,-.964,-.305,-.047,-.903,-.314,-.041,-.841,-.322,-.035,-.779,-.331,-.029,-.718,-.339,-.022,-.656,-.347,-.016,-.594,-.355,-.009,-.533,-.363,-.003,-.471,-.372,.003,-.409,-.381,.009,-.348,-.391,.013,-.286,-.403,.017,-.225,-.416,.018,-.164,-.43,.018,-.104,-.446,.014,-.044,-.463,.008,.015,-.482,-.003,.072,-.501,-.019,.128,-.521,-.039,.182,-.54,-.063,.235,-.559,-.092,.292,-.579,-.11,.351,-.599,-.114,.411,-.614,-.105,.47,-.625,-.085,.526,-.631,-.058,.581,-.634,-.028,.633,-.634,.006,.683,-.627,.044,.729,-.615,.084,.773,-.599,.126,.816,-.582,.167,-1.036,-.337,-.007,-.975,-.346,-.001,-.913,-.354,.005,-.851,-.362,.012,-.789,-.37,.019,-.728,-.378,.025,-.666,-.386,.032,-.604,-.394,.038,-.543,-.404,.043,-.481,-.414,.048,-.42,-.425,.051,-.359,-.438,.053,-.298,-.452,.053,-.237,-.468,.051,-.177,-.484,.045,-.118,-.503,.037,-.06,-.522,.024,-.003,-.541,.006,.053,-.561,-.016,.107,-.58,-.041,.159,-.598,-.071,.215,-.618,-.091,.273,-.638,-.1,.333,-.656,-.095,.393,-.668,-.079,.45,-.676,-.054,.504,-.679,-.024,.557,-.678,.009,.607,-.672,.047,.653,-.66,.088,.696,-.643,.13,.738,-.623,.172,.783,-.61,.213,-1.046,-.378,.039,-.985,-.386,.046,-.923,-.393,.053,-.861,-.401,.06,-.8,-.409,.066,-.738,-.418,.072,-.676,-.427,.078,-.615,-.437,.082,-.553,-.448,.086,-.492,-.461,.088,-.431,-.474,.089,-.37,-.489,.087,-.31,-.506,.083,-.251,-.524,.075,-.192,-.542,.064,-.134,-.562,.049,-.078,-.581,.03,-.023,-.601,.007,.03,-.619,-.02,.082,-.637,-.05,.137,-.656,-.073,.196,-.677,-.084,.255,-.696,-.084,.315,-.71,-.072,.373,-.72,-.049,.428,-.724,-.021,.481,-.723,.013,.531,-.717,.051,.577,-.705,.091,.62,-.687,.133,.66,-.665,.176,.704,-.649,.217,.751,-.639,.258,-1.057,-.417,.087,-.995,-.425,.093,-.933,-.433,.1,-.872,-.441,.107,-.81,-.45,.112,-.748,-.46,.117,-.687,-.471,.121,-.626,-.483,.123,-.564,-.497,.124,-.504,-.511,.123,-.443,-.527,.12,-.383,-.545,.113,-.324,-.563,.104,-.266,-.582,.091,-.209,-.602,.074,-.153,-.621,.053,-.099,-.64,.029,-.046,-.659,.001,.006,-.676,-.03,.06,-.695,-.054,.118,-.716,-.068,.177,-.735,-.071,.237,-.752,-.063,.296,-.763,-.043,.352,-.768,-.016,.405,-.768,.017,.455,-.762,.054,.501,-.75,.095,.543,-.731,.137,.583,-.708,.18,.626,-.69,.222,.672,-.678,.262,.721,-.672,.301,-1.067,-.457,.134,-1.005,-.465,.141,-.943,-.474,.146,-.882,-.483,.151,-.82,-.494,.155,-.759,-.506,.158,-.698,-.519,.159,-.637,-.533,.159,-.576,-.549,.156,-.516,-.566,.151,-.457,-.584,.143,-.398,-.603,.132,-.341,-.622,.117,-.284,-.642,.098,-.229,-.661,.076,-.175,-.68,.05,-.122,-.698,.022,-.071,-.715,-.01,-.017,-.734,-.035,.04,-.754,-.051,.099,-.774,-.058,.159,-.792,-.052,.218,-.805,-.036,.275,-.812,-.011,.329,-.813,.021,.379,-.808,.058,.426,-.795,.099,.468,-.776,.141,.507,-.752,.183,.548,-.732,.226,.593,-.718,.267,.641,-.71,.306,.692,-.709,.343,-1.077,-.497,.18,-1.015,-.507,.186,-.954,-.517,.19,-.892,-.529,.193,-.831,-.542,.195,-.77,-.556,.195,-.71,-.571,.193,-.649,-.587,.188,-.59,-.605,.181,-.531,-.623,.171,-.473,-.642,.158,-.416,-.662,.142,-.36,-.681,.121,-.305,-.701,.098,-.252,-.719,.071,-.199,-.737,.042,-.148,-.754,.01,-.094,-.773,-.016,-.038,-.793,-.034,.021,-.813,-.043,.081,-.832,-.041,.14,-.847,-.028,.198,-.856,-.005,.253,-.858,.026,.304,-.853,.062,.35,-.842,.102,.393,-.823,.144,.431,-.798,.187,.471,-.775,.229,.515,-.759,.271,.562,-.749,.311,.612,-.746,.349,.665,-.749,.382,-1.087,-.54,.224,-1.026,-.552,.228,-.965,-.564,.23,-.904,-.578,.23,-.843,-.593,.229,-.782,-.609,.225,-.723,-.626,.219,-.663,-.644,.211,-.605,-.663,.199,-.547,-.682,.184,-.491,-.702,.166,-.435,-.721,.144,-.381,-.74,.119,-.328,-.758,.092,-.276,-.776,.062,-.225,-.793,.03,-.171,-.811,.003,-.115,-.831,-.017,-.057,-.852,-.028,.003,-.871,-.029,.062,-.887,-.019,.121,-.898,.002,.176,-.902,.03,.228,-.899,.066,.275,-.888,.106,.318,-.87,.148,.357,-.846,.19,.395,-.82,.233,.437,-.801,.275,.483,-.788,.316,.532,-.783,.354,.584,-.785,.389,.639,-.793,.419,-1.098,-.587,.265,-1.037,-.6,.266,-.976,-.615,.265,-.916,-.63,.262,-.856,-.647,.257,-.796,-.665,.25,-.737,-.683,.239,-.679,-.703,.226,-.622,-.722,.209,-.566,-.742,.189,-.511,-.761,.166,-.457,-.78,.14,-.405,-.798,.112,-.353,-.815,.082,-.301,-.832,.05,-.248,-.85,.022,-.193,-.87,.001,-.135,-.891,-.012,-.076,-.91,-.016,-.016,-.928,-.008,.043,-.94,.009,.1,-.946,.036,.152,-.944,.07,.2,-.935,.109,.244,-.917,.151,.283,-.893,.193,.319,-.866,.236,.36,-.844,.278,.404,-.829,.32,.452,-.821,.359,.504,-.821,.395,.558,-.827,.427,.613,-.839,.452,-1.109,-.637,.301,-1.049,-.652,.299,-.989,-.668,.295,-.929,-.686,.288,-.87,-.704,.279,-.811,-.723,.267,-.754,-.742,.252,-.697,-.762,.233,-.642,-.781,.212,-.587,-.8,.188,-.534,-.819,.161,-.482,-.837,.131,-.43,-.854,.101,-.378,-.871,.069,-.325,-.889,.042,-.27,-.909,.019,-.213,-.929,.004,-.154,-.949,-.002,-.094,-.967,.003,-.035,-.981,.017,.022,-.989,.042,.076,-.989,.075,.125,-.981,.113,.169,-.965,.154,.209,-.941,.197,.245,-.913,.239,.283,-.888,.282,.326,-.87,.324,.373,-.86,.364,.423,-.857,.402,.477,-.862,.434,.532,-.872,.461,.589,-.888,.482,-1.122,-.69,.332,-1.062,-.707,.326,-1.002,-.725,.318,-.944,-.743,.307,-.886,-.763,.293,-.829,-.782,.277,-.772,-.802,.257,-.717,-.821,.234,-.664,-.84,.209,-.611,-.858,.181,-.559,-.875,.151,-.507,-.892,.119,-.455,-.909,.089,-.402,-.928,.061,-.348,-.947,.038,-.291,-.968,.021,-.232,-.988,.013,-.172,-1.007,.014,-.113,-1.022,.026,-.055,-1.032,.049,0,-1.034,.079,.05,-1.028,.117,.095,-1.013,.158,.135,-.99,.2,.171,-.962,.242,.208,-.934,.285,.249,-.913,.327,.294,-.9,.369,.343,-.895,.407,.396,-.897,.441,.451,-.906,.47,.507,-.92,.493,.565,-.939,.509,-1.135,-.746,.356,-1.076,-.764,.347,-1.018,-.783,.334,-.96,-.803,.319,-.904,-.822,.301,-.848,-.842,.28,-.793,-.861,.256,-.74,-.879,.23,-.687,-.897,.201,-.636,-.914,.17,-.584,-.931,.138,-.533,-.948,.108,-.48,-.967,.08,-.425,-.986,.056,-.368,-1.006,.038,-.31,-1.027,.028,-.251,-1.046,.027,-.191,-1.063,.036,-.132,-1.074,.056,-.077,-1.078,.085,-.025,-1.074,.121,.021,-1.061,.161,.062,-1.039,.203,.098,-1.012,.246,.133,-.981,.288,.172,-.957,.331,.216,-.941,.373,.264,-.933,.412,.315,-.933,.448,.369,-.939,.479,.426,-.953,.503,.483,-.971,.521,.541,-.992,.532,-1.15,-.804,.375,-1.092,-.823,.361,-1.035,-.842,.344,-.979,-.862,.325,-.924,-.881,.303,-.87,-.9,.278,-.816,-.919,.25,-.764,-.936,.22,-.713,-.953,.189,-.662,-.97,.157,-.61,-.987,.127,-.557,-1.005,.099,-.502,-1.025,.075,-.446,-1.045,.056,-.388,-1.065,.044,-.329,-1.085,.04,-.269,-1.103,.047,-.21,-1.115,.064,-.154,-1.121,.09,-.101,-1.119,.125,-.054,-1.108,.165,-.012,-1.089,.207,.025,-1.062,.249,.059,-1.03,.291,.097,-1.003,.334,.138,-.984,.376,.185,-.972,.417,.235,-.969,.454,.288,-.974,.487,.344,-.985,.513,.401,-1.002,.533,.459,-1.023,.545,.516,-1.047,.551,-1.167,-.863,.387,-1.11,-.882,.369,-1.054,-.902,.348,-1,-.921,.325,-.946,-.94,.299,-.893,-.958,.27,-.841,-.975,.24,-.79,-.992,.208,-.739,-1.009,.177,-.687,-1.026,.147,-.634,-1.044,.119,-.579,-1.063,.094,-.524,-1.083,.074,-.466,-1.104,.06,-.407,-1.124,.054,-.347,-1.142,.058,-.288,-1.156,.072,-.231,-1.164,.097,-.177,-1.164,.13,-.129,-1.155,.168,-.085,-1.137,.21,-.047,-1.112,.253,-.013,-1.08,.295,.022,-1.051,.337,.062,-1.028,.38,.106,-1.013,.421,.155,-1.006,.46,.207,-1.009,.494,.262,-1.018,.523,.319,-1.034,.544,.377,-1.054,.558,.435,-1.077,.565,.492,-1.102,.567,-1.185,-.922,.393,-1.13,-.942,.371,-1.076,-.961,.346,-1.022,-.979,.319,-.97,-.997,.29,-.918,-1.014,.26,-.867,-1.031,.227,-.816,-1.048,.196,-.764,-1.065,.166,-.711,-1.083,.138,-.657,-1.102,.113,-.601,-1.122,.092,-.544,-1.142,.076,-.485,-1.163,.068,-.425,-1.182,.07,-.366,-1.197,.081,-.308,-1.207,.103,-.253,-1.209,.134,-.204,-1.202,.172,-.159,-1.186,.213,-.12,-1.162,.256,-.085,-1.132,.298,-.052,-1.1,.34,-.014,-1.073,.383,.028,-1.054,.425,.075,-1.045,.465,.127,-1.044,.501,.181,-1.052,.531,.238,-1.066,.555,.295,-1.085,.571,.353,-1.107,.579,.41,-1.132,.582,.467,-1.158,.58,-1.206,-.981,.394,-1.152,-1,.368,-1.099,-1.018,.34,-1.047,-1.036,.31,-.995,-1.053,.279,-.944,-1.07,.247,-.892,-1.087,.216,-.84,-1.104,.186,-.788,-1.122,.158,-.734,-1.141,.132,-.678,-1.161,.11,-.622,-1.181,.094,-.563,-1.201,.084,-.504,-1.221,.083,-.444,-1.237,.092,-.385,-1.249,.111,-.33,-1.253,.14,-.279,-1.248,.176,-.233,-1.234,.217,-.193,-1.212,.259,-.157,-1.183,.302,-.124,-1.15,.343,-.089,-1.121,.386,-.049,-1.098,.428,-.004,-1.085,.47,.046,-1.081,.508,.1,-1.086,.54,.156,-1.098,.565,.213,-1.116,.583,.271,-1.138,.593,.328,-1.162,.597,.386,-1.188,.595,.442,-1.214,.59])},dd=1/120,N1=4,IT=1.6,FT=2,BT=1,$c=2;class zT{constructor(t,i,s,l){this.width=t,this.height=i,this.segX=s,this.segY=l,this.cols=s+1,this.rows=l+1,this.count=this.cols*this.rows,this.positions=new Float32Array(this.count*3),this.prev=new Float32Array(this.count*3),this.rest=new Float32Array(this.count*3),this.initPositions();const c=[],f=[],p=[],m=(d,_)=>_*this.cols+d;for(let d=0;d<this.rows;d++)for(let _=0;_<this.cols;_++)_+1<this.cols&&(c.push(m(_,d)),f.push(m(_+1,d)),p.push(1)),d+1<this.rows&&(c.push(m(_,d)),f.push(m(_,d+1)),p.push(1)),_+1<this.cols&&d+1<this.rows&&(c.push(m(_,d)),f.push(m(_+1,d+1)),p.push(.85),c.push(m(_+1,d)),f.push(m(_,d+1)),p.push(.85)),_+2<this.cols&&(c.push(m(_,d)),f.push(m(_+2,d)),p.push(.5)),d+2<this.rows&&(c.push(m(_,d)),f.push(m(_,d+2)),p.push(.5));this.cA=new Int32Array(c),this.cB=new Int32Array(f),this.cMul=new Float32Array(p),this.cRest=new Float32Array(c.length),this.computeRestLengths(),this.neighbors=new Int32Array(this.count*4).fill(-1);for(let d=0;d<this.rows;d++)for(let _=0;_<this.cols;_++){const x=m(_,d)*4;this.neighbors[x+0]=_>0?m(_-1,d):-1,this.neighbors[x+1]=_+1<this.cols?m(_+1,d):-1,this.neighbors[x+2]=d>0?m(_,d-1):-1,this.neighbors[x+3]=d+1<this.rows?m(_,d+1):-1}this.selfRadius=Math.min(this.width/this.segX,this.height/this.segY)*IT,this.selfHashInv=1/this.selfRadius}width;height;segX;segY;cols;rows;count;positions;prev;rest;cA;cB;cRest;cMul;neighbors;grab=null;accumulator=0;selfRadius=.1;selfHashInv=10;selfHash=new Map;initPositions(){const t=o0,i=t.cols,s=t.rows,l=this.width/t.width,c=this.height/t.height,f=(l+c)/2;let p=0;for(let m=0;m<this.rows;m++)for(let d=0;d<this.cols;d++){const _=d/this.segX*(i-1),x=m/this.segY*(s-1),g=Math.min(i-2,Math.floor(_)),M=Math.min(s-2,Math.floor(x)),E=_-g,C=x-M;for(let y=0;y<3;y++){const S=(M*i+g)*3+y,F=(M*i+g+1)*3+y,B=((M+1)*i+g)*3+y,w=((M+1)*i+g+1)*3+y,P=t.data[S]*(1-E)+t.data[F]*E,L=t.data[B]*(1-E)+t.data[w]*E,O=y===0?l:y===1?c:f;this.positions[p+y]=(P*(1-C)+L*C)*O}p+=3}this.prev.set(this.positions),this.rest.set(this.positions)}computeRestLengths(){const t=this.width/this.segX,i=this.height/this.segY;for(let s=0;s<this.cA.length;s++){const l=this.cA[s],c=this.cB[s],f=l%this.cols,p=Math.floor(l/this.cols),m=c%this.cols,d=Math.floor(c/this.cols),_=(f-m)*t,x=(p-d)*i;this.cRest[s]=Math.hypot(_,x)}}reset(){this.initPositions(),this.grab=null}poke(t=.5){const i=this.positions,s=Math.floor(Math.random()*this.count),l=i[s*3],c=i[s*3+1],f=i[s*3+2],p=new j(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(t*.09),m=Math.max(this.width,this.height)*.28;for(let d=0;d<this.count;d++){const _=i[d*3]-l,x=i[d*3+1]-c,g=i[d*3+2]-f,M=Math.sqrt(_*_+x*x+g*g);if(M>m)continue;const E=1-M/m,C=E*E*(3-2*E);this.prev[d*3]-=p.x*C,this.prev[d*3+1]-=p.y*C,this.prev[d*3+2]-=p.z*C}}startGrab(t,i){const s=this.positions,l=[],c=[],f=[];let p=1/0;for(let m=0;m<this.count;m++){const d=s[m*3]-t.x,_=s[m*3+1]-t.y,x=s[m*3+2]-t.z,g=Math.sqrt(d*d+_*_+x*x);if(p=Math.min(p,g),g>i)continue;const M=1-g/i,E=M*M*(3-2*M);l.push(m),c.push(E),f.push(d,_,x)}return l.length===0||p>i?!1:(this.grab={indices:l,weights:c,offsets:new Float32Array(f),target:t.clone()},!0)}moveGrab(t){this.grab&&this.grab.target.copy(t)}endGrab(){this.grab=null}get isGrabbing(){return this.grab!==null}cavityScratch=null;computeCavity(t,i,s=6){const l=this.positions,c=this.neighbors,f=this.count,p=1/Math.min(this.width/this.segX,this.height/this.segY);(!this.cavityScratch||this.cavityScratch.length<f)&&(this.cavityScratch=new Float32Array(f));const m=this.cavityScratch;for(let d=0;d<f;d++){let _=0,x=0,g=0,M=0;for(let B=0;B<4;B++){const w=c[d*4+B];w<0||(_+=l[w*3],x+=l[w*3+1],g+=l[w*3+2],M++)}if(M===0){m[d]=0;continue}const E=1/M,C=_*E-l[d*3],y=x*E-l[d*3+1],S=g*E-l[d*3+2],F=(C*t[d*3]+y*t[d*3+1]+S*t[d*3+2])*p;m[d]=Math.min(1,Math.max(0,F*s))}for(let d=0;d<f;d++){let _=0,x=0;for(let g=0;g<4;g++){const M=c[d*4+g];M<0||(_+=m[M],x++)}i[d]=x>0?m[d]*.5+_/x*.5:m[d]}}step(t,i){this.accumulator+=Math.min(t,.05);let s=0;for(;this.accumulator>=dd&&s<N1;)this.substep(i),this.accumulator-=dd,s++;s===N1&&(this.accumulator=0),s>0&&this.selfCollide()}selfCollide(){const t=this.positions,i=this.count,s=this.cols,l=this.selfRadius,c=l*l,f=this.selfHashInv,p=this.selfHash;for(let m=0;m<FT;m++){p.clear();for(let d=0;d<i;d++){const _=Math.floor(t[d*3]*f),x=Math.floor(t[d*3+1]*f),g=Math.floor(t[d*3+2]*f),M=(_*73856093^x*19349663^g*83492791)>>>0;let E=p.get(M);E||(E=[],p.set(M,E)),E.push(d)}for(let d=0;d<i;d++){const _=d%s,x=d/s|0,g=Math.floor(t[d*3]*f),M=Math.floor(t[d*3+1]*f),E=Math.floor(t[d*3+2]*f);for(let C=-1;C<=1;C++)for(let y=-1;y<=1;y++)for(let S=-1;S<=1;S++){const F=((g+S)*73856093^(M+y)*19349663^(E+C)*83492791)>>>0,B=p.get(F);if(B)for(let w=0;w<B.length;w++){const P=B[w];if(P<=d)continue;const L=P%s,O=P/s|0,T=_-L,N=x-O;if(T>=-$c&&T<=$c&&N>=-$c&&N<=$c)continue;const Y=t[P*3]-t[d*3],G=t[P*3+1]-t[d*3+1],Q=t[P*3+2]-t[d*3+2],ht=Y*Y+G*G+Q*Q;if(ht>=c||ht<1e-12)continue;const _t=Math.sqrt(ht),J=(l-_t)/_t*.5*BT,I=Y*J,H=G*J,$=Q*J;t[d*3]-=I,t[d*3+1]-=H,t[d*3+2]-=$,t[P*3]+=I,t[P*3+1]+=H,t[P*3+2]+=$}}}}}substep(t){const i=this.positions,s=this.prev,l=this.count,c=Math.pow(1-Math.min(t.viscosity,.99),dd*60);for(let M=0;M<l*3;M++){const E=i[M],C=(E-s[M])*c;s[M]=E,i[M]=E+C}if(t.smoothing>0){const M=t.smoothing*.5,E=this.neighbors;for(let C=0;C<l;C++){let y=0,S=0,F=0,B=0;for(let P=0;P<4;P++){const L=E[C*4+P];L<0||(y+=i[L*3],S+=i[L*3+1],F+=i[L*3+2],B++)}if(B===0)continue;const w=1/B;i[C*3]+=(y*w-i[C*3])*M,i[C*3+1]+=(S*w-i[C*3+1])*M,i[C*3+2]+=(F*w-i[C*3+2])*M}}const f=Math.max(1,Math.round(t.iterations)),p=t.stiffness,m=this.cA,d=this.cB,_=this.cRest,x=this.cMul,g=m.length;for(let M=0;M<f;M++){for(let E=0;E<g;E++){const C=m[E]*3,y=d[E]*3,S=i[y]-i[C],F=i[y+1]-i[C+1],B=i[y+2]-i[C+2],w=Math.sqrt(S*S+F*F+B*B);if(w<1e-9)continue;const P=(w-_[E])/w*.5*p*x[E],L=S*P,O=F*P,T=B*P;i[C]+=L,i[C+1]+=O,i[C+2]+=T,i[y]-=L,i[y+1]-=O,i[y+2]-=T}this.applyGrab()}}applyGrab(){const t=this.grab;if(!t)return;const i=this.positions;for(let s=0;s<t.indices.length;s++){const l=t.indices[s]*3,c=t.weights[s],f=t.target.x+t.offsets[s*3],p=t.target.y+t.offsets[s*3+1],m=t.target.z+t.offsets[s*3+2];i[l]+=(f-i[l])*c,i[l+1]+=(p-i[l+1])*c,i[l+2]+=(m-i[l+2])*c}}}function vv(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function HT(r,t,i){const s=new Float32Array(r*r),l=new Float32Array(t+1),c=new Float32Array(t+1);for(let p=0;p<=t;p++)l[p]=.85+i()*.3,c[p]=.85+i()*.3;const f=new Float32Array(r*r);for(let p=0;p<f.length;p++)f[p]=i();for(let p=0;p<r;p++){const m=p/r*t,d=Math.floor(m),_=m-d;for(let x=0;x<r;x++){const g=x/r*t,M=Math.floor(g),E=g-M,C=Math.sin(E*Math.PI)*l[M%(t+1)],y=Math.sin(_*Math.PI)*c[d%(t+1)],F=(M+d)%2===0?C*.62+y*.38:y*.62+C*.38,B=f[p*r+x];s[p*r+x]=F*.85+B*.15}}return s}function xv(r,t,i){const s=document.createElement("canvas");s.width=t,s.height=t;const l=s.getContext("2d"),c=l.createImageData(t,t),f=c.data,p=(d,_)=>r[(_+t)%t*t+(d+t)%t];for(let d=0;d<t;d++)for(let _=0;_<t;_++){const x=(p(_+1,d)-p(_-1,d))*i,g=(p(_,d+1)-p(_,d-1))*i,M=1/Math.sqrt(x*x+g*g+1),E=(d*t+_)*4;f[E]=Math.round((-x*M*.5+.5)*255),f[E+1]=Math.round((g*M*.5+.5)*255),f[E+2]=Math.round((M*.5+.5)*255),f[E+3]=255}l.putImageData(c,0,0);const m=new pu(s);return m.wrapS=m.wrapT=ll,m.repeat.set(2,2),m.colorSpace=Ki,m}function GT(r,t,i,s){const l=new Float32Array(r*r),c=new Float32Array(r*r);for(let p=0;p<c.length;p++)c[p]=s();const f=new Float32Array(Math.ceil(t)+2);for(let p=0;p<f.length;p++)f[p]=.85+s()*.3;for(let p=0;p<r;p++){const m=p/r*i,d=Math.floor(m),_=m-d,x=d%2===0?0:.5;for(let g=0;g<r;g++){const M=g/r*t+x,E=Math.floor(M),C=M-E,y=Math.sin(C*Math.PI)*f[(E+1)%f.length],S=Math.sin(_*Math.PI),F=.5+.5*Math.cos((C-.5)*2*Math.PI),B=.55*y+.3*S*F;l[p*r+g]=B*.85+c[p*r+g]*.15}}return l}function VT(r){const t=r.size??512,i=vv(r.seed??20240),s=r.type==="woven"?HT(t,r.threads,i):GT(t,r.threads,Math.max(2,Math.round(r.threads*.8)),i);return xv(s,t,r.strength)}function kT(r,t=512,i=1.6){const s=document.createElement("canvas");s.width=t,s.height=t;const l=s.getContext("2d");l.drawImage(r,0,0,t,t);const c=l.getImageData(0,0,t,t).data,f=new Float32Array(t*t);for(let p=0;p<f.length;p++)f[p]=(c[p*4]*.2126+c[p*4+1]*.7152+c[p*4+2]*.0722)/255;return xv(f,t,i)}function XT(r=256,t=4242){const i=vv(t),s=document.createElement("canvas");s.width=r,s.height=r;const l=s.getContext("2d"),c=l.createImageData(r,r),f=c.data;for(let m=0;m<r*r;m++){const d=Math.round(215+(i()-.5)*70);f[m*4]=d,f[m*4+1]=d,f[m*4+2]=d,f[m*4+3]=255}l.putImageData(c,0,0);const p=new pu(s);return p.wrapS=p.wrapT=ll,p.repeat.set(4,4),p.colorSpace=Ki,p}function WT(r){const t=XT(),i=new ay({color:new se("#9aa1ad"),metalness:.95,roughness:.1,roughnessMap:t,normalScale:new qt(.5,.5),clearcoat:1,clearcoatRoughness:.08,sheen:.35,sheenRoughness:.55,sheenColor:new se("#cfd6ff"),iridescence:1,iridescenceIOR:1.35,iridescenceThicknessRange:[120,480],side:Zi}),s={uHoloIntensity:{value:1},uHoloScale:{value:110},uBandFreq:{value:3},uRadialFreq:{value:1.6},uSaturation:{value:.8},uHueShift:{value:0},uSparkle:{value:.6},uSpecTint:{value:.85},uSurfaceMap:{value:r},uSurfaceOpacity:{value:1},uCavityAmount:{value:0},uCornerRound:{value:0},uClothSize:{value:new qt(3,3)}};return i.alphaToCoverage=!0,i.onBeforeCompile=l=>{Object.assign(l.uniforms,s),l.vertexShader=`varying vec2 vHoloUv;
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
        }`)},{material:i,uniforms:s}}const Gr=2048;class YT{canvas;texture;decals=[];clothImage=null;selected=null;ctx;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=Gr,this.canvas.height=Gr,this.ctx=this.canvas.getContext("2d"),this.texture=new pu(this.canvas),this.texture.colorSpace=ti,this.redraw()}setAspect(t){const i=t>=1?Gr:Math.round(Gr*t),s=t>=1?Math.round(Gr/t):Gr;return this.canvas.width===i&&this.canvas.height===s?(this.redraw(),!1):(this.canvas.width=i,this.canvas.height=s,this.texture.dispose(),this.texture=new pu(this.canvas),this.texture.colorSpace=ti,this.redraw(),!0)}addDecal(t){const i={img:t,u:.5,v:.5,scale:.35,rotation:0};return this.decals.push(i),this.selected=i,this.redraw(),i}setClothImage(t){this.clothImage=t,this.redraw()}clear(){this.decals=[],this.clothImage=null,this.selected=null,this.redraw()}hitTest(t,i){const s=this.canvas.width,l=this.canvas.height,c=t*s,f=(1-i)*l;for(let p=this.decals.length-1;p>=0;p--){const m=this.decals[p],{w:d,h:_}=this.decalPixelSize(m),x=m.u*s,g=(1-m.v)*l,M=-m.rotation*Math.PI/180,E=c-x,C=f-g,y=E*Math.cos(M)-C*Math.sin(M),S=E*Math.sin(M)+C*Math.cos(M);if(Math.abs(y)<=d/2&&Math.abs(S)<=_/2)return m}return null}decalPixelSize(t){const i=this.canvas.width,s=t.img.naturalWidth||t.img.width||300,l=t.img.naturalHeight||t.img.height||300,c=t.scale*i,f=c*l/s;return{w:c,h:f}}redraw(){const{ctx:t,canvas:i}=this;t.clearRect(0,0,i.width,i.height),this.clothImage&&t.drawImage(this.clothImage,0,0,i.width,i.height);for(const s of this.decals){const{w:l,h:c}=this.decalPixelSize(s);t.save(),t.translate(s.u*i.width,(1-s.v)*i.height),t.rotate(s.rotation*Math.PI/180),t.drawImage(s.img,-l/2,-c/2,l,c),t.restore()}this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}const P1=`
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
`,qT=`
  
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
`,ZT=`
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
`,O1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;function I1(){return{tDepth:{value:null},focus:{value:5.2},focalDepth:{value:.15},aperture:{value:.4},maxblur:{value:.04},nearClip:{value:.1},farClip:{value:200}}}class KT extends Ys{sceneRef;cameraRef;depthMaterial;depthRT;blurRT;gatherMat;compositeMat;fsQuad;clearColorTmp=new se;constructor(t,i){super(),this.sceneRef=t,this.cameraRef=i,this.needsSwap=!0,this.depthMaterial=new av,this.depthMaterial.depthPacking=iM,this.depthMaterial.blending=Fi,this.depthRT=new Pn(1,1,{minFilter:yn,magFilter:yn}),this.blurRT=new Pn(1,1,{minFilter:Rn,magFilter:Rn,type:Wn}),this.gatherMat=new Cn({uniforms:{...I1(),tColor:{value:null}},vertexShader:O1,fragmentShader:P1+qT}),this.compositeMat=new Cn({uniforms:{...I1(),tSharp:{value:null},tBlur:{value:null}},vertexShader:O1,fragmentShader:P1+ZT}),this.fsQuad=new yu(this.gatherMat)}setBoth(t,i){this.gatherMat.uniforms[t].value=i,this.compositeMat.uniforms[t].value=i}setParams(t,i,s){this.setBoth("aperture",t),this.setBoth("maxblur",i),this.setBoth("focalDepth",s)}setFocus(t){this.setBoth("focus",t)}setSize(t,i){this.depthRT.setSize(t,i),this.blurRT.setSize(Math.max(1,t>>1),Math.max(1,i>>1))}render(t,i,s){this.setBoth("nearClip",this.cameraRef.near),this.setBoth("farClip",this.cameraRef.far),t.getClearColor(this.clearColorTmp);const l=t.getClearAlpha(),c=t.autoClear;t.autoClear=!1,this.sceneRef.overrideMaterial=this.depthMaterial,t.setClearColor(16777215,1),t.setRenderTarget(this.depthRT),t.clear(),t.render(this.sceneRef,this.cameraRef),this.sceneRef.overrideMaterial=null,t.setClearColor(this.clearColorTmp,l),this.gatherMat.uniforms.tColor.value=s.texture,this.gatherMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.gatherMat,t.setRenderTarget(this.blurRT),this.fsQuad.render(t),this.compositeMat.uniforms.tSharp.value=s.texture,this.compositeMat.uniforms.tBlur.value=this.blurRT.texture,this.compositeMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.compositeMat,t.setRenderTarget(this.renderToScreen?null:i),this.fsQuad.render(t),t.autoClear=c}dispose(){this.depthMaterial.dispose(),this.depthRT.dispose(),this.blurRT.dispose(),this.gatherMat.dispose(),this.compositeMat.dispose(),this.fsQuad.dispose()}}const QT={AgX:Zr,ACES:gu,Neutral:_u},tu=3,jT=48,JT=new se(16777215),$T={uniforms:{tDiffuse:{value:null},uAmount:{value:.08},uTime:{value:0}},vertexShader:`
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
  `};class tA{constructor(t){this.host=t;const i=t.clientWidth||window.innerWidth,s=t.clientHeight||window.innerHeight;this.renderer=new hT({antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(i,s),this.renderer.toneMapping=Zr,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement),this.scene=new Q1,this.scene.background=this.background,this.camera=new pi(38,i/s,.1,200),this.camera.position.set(...o0.camera);const l=new a0(this.renderer),c=l.fromScene(new RT,.04).texture;this.scene.environment=c,l.dispose();const f=new sd(8377599,1.1);f.position.set(-4,2.5,-3);const p=new sd(16751317,.9);p.position.set(4.5,-1.5,-2.5);const m=new sd(16777215,.7);m.position.set(1.5,3,4),this.scene.add(f,p,m),this.surface=new YT;const d=WT(this.surface.texture);this.holoMaterial=d.material,this.holoUniforms=d.uniforms;const _=this.renderer.capabilities.getMaxAnisotropy();this.holoMaterial.roughnessMap&&(this.holoMaterial.roughnessMap.anisotropy=_),this.surface.texture.anisotropy=_,this.clothMesh=new vn(void 0,this.holoMaterial),this.clothMesh.frustumCulled=!1,this.clothMesh.visible=!1,this.buildCloth(1),this.scene.add(this.clothMesh);const x=this.renderer.domElement;x.addEventListener("pointerdown",this.onPointerDown),x.addEventListener("pointermove",this.onPointerMove),x.addEventListener("pointerup",this.onPointerUp),x.addEventListener("pointercancel",this.onPointerUp),x.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onWindowBlur),this.controls=new pT(this.camera,x),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=1.6,this.controls.maxDistance=30,this.controls.target.set(...o0.target),this.controls.update();const g=new Pn(i,s,{samples:8,type:Wn});this.composer=new LT(this.renderer,g),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer.addPass(new NT(this.scene,this.camera)),this.dofPass=new KT(this.scene,this.camera),this.dofPass.enabled=!1,this.composer.addPass(this.dofPass),this.bloomPass=new Jr(new qt(i,s),.18,.85,1),this.composer.addPass(this.bloomPass),this.composer.addPass(new OT),this.grainPass=new _v($T),this.composer.addPass(this.grainPass),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(t),this.renderer.setAnimationLoop(this.tick)}host;renderer;scene;camera;controls;composer;bloomPass;dofPass;grainPass;cavityAttr;sim;clothMesh;clothGeometry;holoUniforms;holoMaterial;surface;bumpSource=null;thumbCache=new WeakMap;perfProfile="High";clothSegments=jT;currentPR=Math.min(window.devicePixelRatio,2);background=new se("#0b0c12");clock=new my;elapsed=0;raycaster=new py;pointerNdc=new qt;dragPlane=new Ta;grabbing=!1;grabPointerId=null;draggingDecal=!1;decalGrabOffset={u:0,v:0};pickingFocus=!1;focusVertex=null;pickReleaseId=null;spaceHeld=!1;focusTmp=new j;editMode=!1;prevUseImage=!1;hoverCursor="default";resizeObserver;params=null;disposed=!1;onDecalSelect=null;onImagesChanged=null;clothAspect=1;buildCloth(t){this.clothAspect=t;const i=t>=1?tu:tu*t,s=t>=1?tu/t:tu,l=this.clothSegments,c=t>=1?l:Math.max(10,Math.round(l*t)),f=t>=1?Math.max(10,Math.round(l/t)):l;this.sim=new zT(i,s,c,f);const p=new ml(i,s,c,f),m=new gi(this.sim.positions,3);m.setUsage(D_),p.setAttribute("position",m),this.cavityAttr=new gi(new Float32Array(this.sim.count),1),this.cavityAttr.setUsage(D_),p.setAttribute("aCavity",this.cavityAttr),p.computeVertexNormals();const d=this.clothMesh.geometry;this.clothMesh.geometry=p,this.clothGeometry=p,d&&d.dispose(),this.holoUniforms.uClothSize.value.set(i,s),this.focusVertex=null,this.cancelInteraction()}cancelInteraction(){this.grabPointerId!==null&&this.renderer.domElement.hasPointerCapture(this.grabPointerId)&&this.renderer.domElement.releasePointerCapture(this.grabPointerId),this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls&&(this.controls.enabled=!0)}applyParams(t){this.params=t,t.performance!==this.perfProfile&&this.applyPerfProfile(t.performance);const i=this.holoMaterial;i.color.set(t.material.baseColor),i.roughness=t.material.roughness,i.metalness=t.material.metalness,i.clearcoat=t.material.clearcoat,i.clearcoatRoughness=t.material.coatRoughness,i.sheen=t.material.sheen,i.sheenColor.set(t.material.baseColor).lerp(JT,.5),i.iridescence=0,i.normalScale.set(t.material.bump,t.material.bump),i.normalMap&&i.normalMap.repeat.set(t.material.bumpTiling,t.material.bumpTiling),this.scene.environmentIntensity=t.render.environment;const s=this.holoUniforms;s.uHoloIntensity.value=0,s.uSparkle.value=0,s.uSpecTint.value=0,s.uSaturation.value=0;const l=t.images??{opacity:1,cornerRadius:0,edit:!1,useImage:!1,scale:0,rotation:0};s.uSurfaceOpacity.value=l.opacity,s.uCornerRound.value=l.cornerRadius,this.background.set(t.render.background),this.renderer.toneMappingExposure=t.render.exposure;const c=QT[t.render.toneMapping]??Zr;this.renderer.toneMapping!==c&&(this.renderer.toneMapping=c),this.bloomPass.strength=t.render.bloom,this.bloomPass.threshold=t.render.bloomThreshold,this.grainPass.uniforms.uAmount.value=t.render.noise,s.uCavityAmount.value=t.render.occlusion?t.render.occlusionStrength:0,this.dofPass.enabled=t.render.dof,this.dofPass.setParams(t.render.dofAperture*.01,t.render.dofBlur,t.render.dofRange*.5),this.editMode=l.edit,this.controls.enableZoom=!this.editMode,this.prevUseImage&&!l.useImage&&this.surface.clothImage&&this.removeClothImage(),this.prevUseImage=l.useImage;const f=this.surface.selected;f&&(f.scale!==l.scale||f.rotation!==l.rotation)&&(f.scale=l.scale,f.rotation=l.rotation,this.surface.redraw())}applyFabric(t){const i=this.holoMaterial.normalMap,s=VT(t);if(s.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.params){const l=this.params.material.bumpTiling;s.repeat.set(l,l)}this.holoMaterial.normalMap=s,this.holoMaterial.needsUpdate=!0,i&&i.dispose()}resetCloth(){this.sim.reset(),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals()}poke(){this.sim.poke(1)}addDecal(t){const i=this.surface.addDecal(t);this.onDecalSelect?.(i.scale,i.rotation),this.onImagesChanged?.()}setClothImage(t){const i=t.naturalWidth||t.width||1,s=t.naturalHeight||t.height||1,l=Math.min(3,Math.max(1/3,i/s));this.surface.setClothImage(t),this.surface.setAspect(l)&&this.rebindSurfaceTexture(),this.buildCloth(l),this.onImagesChanged?.()}clearImages(){this.surface.clear(),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}removeClothImage(){this.surface.setClothImage(null),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}get hasClothImage(){return this.surface.clothImage!==null}reveal(){this.clothMesh.visible=!0}thumbnailOf(t){let i=this.thumbCache.get(t);if(i)return i;const s=t.naturalWidth||t.width||1,l=t.naturalHeight||t.height||1,c=96/Math.max(s,l),f=document.createElement("canvas");return f.width=Math.max(1,Math.round(s*c)),f.height=Math.max(1,Math.round(l*c)),f.getContext("2d").drawImage(t,0,0,f.width,f.height),i=f.toDataURL("image/png"),this.thumbCache.set(t,i),i}getClothThumbnail(){return this.surface.clothImage?this.thumbnailOf(this.surface.clothImage):null}getDecalThumbnails(){return this.surface.decals.map(t=>this.thumbnailOf(t.img))}removeDecal(t){const i=this.surface.decals[t];i&&(this.surface.decals.splice(t,1),this.surface.selected===i&&(this.surface.selected=null),this.surface.redraw(),this.onImagesChanged?.())}snapshotImages(){return{clothImage:this.surface.clothImage,decals:this.surface.decals.map(t=>({...t}))}}restoreImages(t){this.surface.clothImage=t.clothImage,this.surface.decals=t.decals.map(s=>({...s})),this.surface.selected=null;let i=1;if(t.clothImage){const s=t.clothImage.naturalWidth||t.clothImage.width||1,l=t.clothImage.naturalHeight||t.clothImage.height||1;i=Math.min(3,Math.max(1/3,s/l))}this.surface.setAspect(i)&&this.rebindSurfaceTexture(),i!==this.clothAspect&&this.buildCloth(i),this.onImagesChanged?.()}applyPerfProfile(t){this.perfProfile=t;const i=window.devicePixelRatio;this.currentPR=t==="Low"?1:t==="Medium"?Math.min(i,1.5):Math.min(i,2);const s=t==="Low"?0:t==="Medium"?4:8,l=t==="Low"?28:t==="Medium"?36:48,c=this.host.clientWidth||window.innerWidth,f=this.host.clientHeight||window.innerHeight;this.renderer.setPixelRatio(this.currentPR),this.renderer.setSize(c,f),this.composer.setPixelRatio(this.currentPR),this.composer.renderTarget1.samples=s,this.composer.renderTarget2.samples=s,this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer.setSize(c,f),l!==this.clothSegments&&(this.clothSegments=l,this.buildCloth(this.clothAspect))}setBumpMap(t){const i=this.holoMaterial.normalMap;let s=null;if(t){s=kT(t),s.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const l=this.params?.material.bumpTiling??3;s.repeat.set(l,l)}this.bumpSource=t,this.holoMaterial.normalMap=s,!!i!=!!s&&(this.holoMaterial.needsUpdate=!0),i&&i.dispose(),this.onImagesChanged?.()}get hasBumpMap(){return this.bumpSource!==null}getBumpThumbnail(){return this.bumpSource?this.thumbnailOf(this.bumpSource):null}rebindSurfaceTexture(){this.surface.texture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=this.surface.texture}exportPNG(t=!1){const i=this.host.clientWidth||window.innerWidth,s=this.host.clientHeight||window.innerHeight,l=this.currentPR,c=Math.min(4,Math.max(2,3200/Math.max(i,s)));t&&(this.scene.background=null,this.renderer.setClearColor(0,0)),this.renderer.setPixelRatio(c),this.composer.setPixelRatio(c),this.renderer.setSize(i,s),this.composer.setSize(i,s),this.composer.render();const f=this.renderer.domElement.toDataURL("image/png");t&&(this.scene.background=this.background,this.renderer.setClearColor(0,1)),this.renderer.setPixelRatio(l),this.composer.setPixelRatio(l),this.renderer.setSize(i,s),this.composer.setSize(i,s);const p=document.createElement("a");p.href=f;const m=t?"holocloth-nobg":"holocloth";p.download=`${m}-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,p.click()}updatePointer(t){const i=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.set((t.clientX-i.left)/i.width*2-1,-((t.clientY-i.top)/i.height)*2+1)}raycastCloth(){this.raycaster.setFromCamera(this.pointerNdc,this.camera),this.clothGeometry.computeBoundingSphere();const t=this.raycaster.intersectObject(this.clothMesh,!1);return t.length>0?t[0]:null}startPickFocus(){this.pickingFocus=!0,this.renderer.domElement.style.cursor="crosshair"}clearPickFocus(){this.focusVertex=null}onKeyDown=t=>{if(t.code!=="Space"||t.repeat)return;const i=t.target;i&&(i.tagName==="INPUT"||i.tagName==="TEXTAREA"||i.isContentEditable)||(t.preventDefault(),this.spaceHeld=!0,this.controls.mouseButtons.LEFT=Ra.PAN,!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&(this.renderer.domElement.style.cursor="grab"))};onKeyUp=t=>{t.code==="Space"&&(this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Ra.ROTATE)};onWindowBlur=()=>{this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Ra.ROTATE};onPointerDown=t=>{if(t.button!==0||this.grabbing||this.draggingDecal)return;if(this.updatePointer(t),this.pickingFocus){this.pickingFocus=!1,this.renderer.domElement.style.cursor="default";const c=this.raycastCloth();if(c){const f=this.sim.positions;let p=0,m=1/0;for(let d=0;d<this.sim.count;d++){const _=f[d*3]-c.point.x,x=f[d*3+1]-c.point.y,g=f[d*3+2]-c.point.z,M=_*_+x*x+g*g;M<m&&(m=M,p=d)}this.focusVertex=p}this.pickReleaseId=t.pointerId,this.controls.enabled=!1;return}if(this.spaceHeld)return;const i=this.raycastCloth();if(!i)return;if(this.editMode){if(!i.uv)return;const c=this.surface.hitTest(i.uv.x,i.uv.y);if(!c)return;this.surface.selected=c,this.draggingDecal=!0,this.decalGrabOffset.u=c.u-i.uv.x,this.decalGrabOffset.v=c.v-i.uv.y,this.grabPointerId=t.pointerId,this.controls.enabled=!1,this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="move",this.onDecalSelect?.(c.scale,c.rotation);return}const s=this.params?.physics.grabRadius??.45;if(!this.sim.startGrab(i.point,s))return;this.grabbing=!0,this.grabPointerId=t.pointerId,this.controls.enabled=!1;const l=new j;this.camera.getWorldDirection(l),this.dragPlane.setFromNormalAndCoplanarPoint(l,i.point),this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="grabbing"};onPointerMove=t=>{if((this.grabbing||this.draggingDecal)&&t.pointerId!==this.grabPointerId)return;if(this.updatePointer(t),this.draggingDecal){const l=this.raycastCloth(),c=this.surface.selected;l?.uv&&c&&(c.u=l.uv.x+this.decalGrabOffset.u,c.v=l.uv.y+this.decalGrabOffset.v,this.surface.redraw());return}if(!this.grabbing)return;this.raycaster.setFromCamera(this.pointerNdc,this.camera);const s=new j;this.raycaster.ray.intersectPlane(this.dragPlane,s)&&this.sim.moveGrab(s)};onPointerUp=t=>{if(t.pointerId===this.pickReleaseId){this.pickReleaseId=null,this.controls.enabled=!0;return}!(this.grabbing||this.draggingDecal)||t.pointerId!==this.grabPointerId||(this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls.enabled=!0,this.renderer.domElement.hasPointerCapture(t.pointerId)&&this.renderer.domElement.releasePointerCapture(t.pointerId),this.renderer.domElement.style.cursor=this.hoverCursor)};onWheel=t=>{if(!this.editMode)return;const i=this.surface.selected;i&&(t.preventDefault(),t.stopImmediatePropagation(),i.scale=q1.clamp(i.scale*Math.exp(-t.deltaY*.0012),.02,2.5),this.surface.redraw(),this.onDecalSelect?.(i.scale,i.rotation))};onResize(){const t=this.host.clientWidth||window.innerWidth,i=this.host.clientHeight||window.innerHeight;t===0||i===0||(this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i),this.composer.setSize(t,i))}tick=()=>{if(this.disposed)return;const t=this.clock.getDelta();if(this.elapsed+=t,this.grainPass.uniforms.uTime.value=this.elapsed%61.7,this.params&&(this.sim.step(t,this.params.physics),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals()),this.params?.render.occlusion&&(this.sim.computeCavity(this.clothGeometry.attributes.normal.array,this.cavityAttr.array),this.cavityAttr.needsUpdate=!0),this.params?.render.dof){let i;if(this.focusVertex!==null&&this.focusVertex<this.sim.count){const s=this.sim.positions,l=this.focusVertex*3;this.focusTmp.set(s[l],s[l+1],s[l+2]),i=this.camera.position.distanceTo(this.focusTmp)}else i=this.camera.position.distanceTo(this.controls.target);this.dofPass.setFocus(i)}if(!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&!this.spaceHeld&&this.perfProfile!=="Low"){const i=this.raycastCloth();let s="default";i&&(s=this.editMode?i.uv&&this.surface.hitTest(i.uv.x,i.uv.y)?"move":"default":"grab"),s!==this.hoverCursor&&(this.hoverCursor=s,this.renderer.domElement.style.cursor=s)}this.controls.update(),this.composer.render()};dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.controls.dispose(),this.dofPass.dispose(),this.composer.dispose(),this.clothGeometry.dispose(),this.holoMaterial.dispose(),this.surface.dispose(),this.scene.traverse(i=>{const s=i;s.geometry&&s.geometry!==this.clothGeometry&&s.geometry.dispose()}),this.renderer.dispose(),t.remove()}}const F1=["Nulu","Luon","Luxtreme","Everlux","Warpstreme"],us={Nulu:{label:"Nulu",blurb:"Buttery-soft, lightweight knit. Matte, next-to-nothing drape.",material:{finish:"Matte",baseColor:"#c9c4bf",roughness:.88,metalness:0,clearcoat:0,coatRoughness:.9,sheen:.28,bump:.6,bumpTiling:6},physics:{viscosity:.5,stiffness:.45,iterations:12,smoothing:.12,grabRadius:.3},weave:{type:"knit",threads:96,strength:1,seed:11}},Luon:{label:"Luon",blurb:"The original: cottony-soft, structured, medium-weight knit.",material:{finish:"Matte",baseColor:"#2c313a",roughness:.76,metalness:0,clearcoat:.05,coatRoughness:.75,sheen:.2,bump:.95,bumpTiling:5},physics:{viscosity:.42,stiffness:.7,iterations:12,smoothing:.07,grabRadius:.27},weave:{type:"knit",threads:72,strength:1.35,seed:22}},Luxtreme:{label:"Luxtreme",blurb:"Slick, cool-to-touch performance knit. Satin sheen, lively.",material:{finish:"Satin",baseColor:"#33435f",roughness:.34,metalness:0,clearcoat:.28,coatRoughness:.32,sheen:.5,bump:.3,bumpTiling:8},physics:{viscosity:.24,stiffness:.82,iterations:13,smoothing:.03,grabRadius:.27},weave:{type:"knit",threads:120,strength:.7,seed:33}},Everlux:{label:"Everlux",blurb:"Thicker double-knit. Springy shape retention, textured hand.",material:{finish:"Matte",baseColor:"#454851",roughness:.6,metalness:0,clearcoat:.1,coatRoughness:.6,sheen:.32,bump:1.15,bumpTiling:4},physics:{viscosity:.34,stiffness:.9,iterations:14,smoothing:.09,grabRadius:.27},weave:{type:"knit",threads:56,strength:1.6,seed:44}},Warpstreme:{label:"Warpstreme",blurb:"Finely woven, structured & wrinkle-resistant. Holds its shape.",material:{finish:"Satin",baseColor:"#21252c",roughness:.46,metalness:0,clearcoat:.2,coatRoughness:.42,sheen:.34,bump:.5,bumpTiling:7},physics:{viscosity:.3,stiffness:1,iterations:14,smoothing:.15,grabRadius:.26},weave:{type:"woven",threads:110,strength:.9,seed:55}}},eA="Nulu",pd=["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it coats the fibers and kills sweat-wicking.","Hang or lay flat to dry; avoid the dryer to protect the stretch.","Keep away from Velcro, zippers and denim to avoid snags and pilling."],l0={Nulu:{meaning:'"Naked" lu — the softest, lightest fabric lululemon makes. The "nu" is for nude / next-to-nothing.',feel:"Buttery-soft and weightless with a matte finish and gentle four-way stretch. No compression — it feels like a second skin.",bestFor:["Yoga","Pilates","Barre","Stretching","Lounging","Travel & errands"],notFor:"High-sweat or high-impact workouts — it offers no compression and can pill under friction.",care:["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it clogs the fibers.","Hang or lay flat to dry; never tumble dry.","Prone to pilling — keep away from Velcro, zippers and denim."],products:[{name:'Align High-Rise Pant 25"',price:"$98",url:"https://shop.lululemon.com/c/women-align-leggings/n1esuuzudsq"},{name:"Align Tank Top",price:"$68",url:"https://shop.lululemon.com/c/women-align-clothes/n14uwkzesuu"},{name:"Groove Nulu Flared Pant",price:"$128",url:"https://shop.lululemon.com/c/women-align-pants/n1esuuzqd1q"}],affinity:{activity:{yoga:3,run:-2,studio:0,everyday:1},sweat:{low:3,med:0,high:-2},feel:{soft:3,smooth:0,structured:-1,cushioned:0},care:{easy:-1,ok:2}}},Luon:{meaning:'The original lululemon fabric — the knit that launched the brand. Simply "lu" + "on".',feel:"Cottony-soft but more structured than Nulu: medium-weight, lightly holding, with a matte look.",bestFor:["Yoga","Barre","Dance","Low–medium impact","Layering","Casual"],notFor:"Running or spin — the cottony knit can pill under repeated friction.",care:pd,products:[{name:"Wunder Under Luon High-Rise Tight",price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:"Classic Luon layering tops",price:"from $68",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:2,run:-1,studio:1,everyday:1},sweat:{low:2,med:1,high:-1},feel:{soft:2,smooth:0,structured:0,cushioned:1},care:{easy:0,ok:1}}},Luxtreme:{meaning:`"Luxe" + "extreme" — lululemon's first performance fabric, built for runners back in 2008.`,feel:"Slick and cool-to-touch, compressive and supportive with a subtle sheen. Sweat-wicking and quick-drying.",bestFor:["Running","HIIT","Cycling / spin","High-impact training"],notFor:"Gentle lounging if you dislike compression — it's a firmer, hold-you-in feel.",care:pd,products:[{name:'Wunder Under Full-On Luxtreme Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:'Wunder Under Luxtreme Tight 28"',price:"$98",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:-1,run:3,studio:2,everyday:0},sweat:{low:-1,med:1,high:3},feel:{soft:0,smooth:3,structured:1,cushioned:0},care:{easy:1,ok:0}}},Everlux:{meaning:'"Ever" (endure) + "lux" — a 2017 studio fabric made for sweaty, mid-to-high-intensity workouts.',feel:"Fast-drying and cool against the skin, with a cushioned double-knit body and springy shape retention.",bestFor:["Studio & HIIT","Spin","Cardio classes","Hot workouts","Strength training"],notFor:"Nothing much — it's the most versatile; just heavier than Nulu for pure lounging.",care:pd,products:[{name:'Wunder Train High-Rise Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:'Wunder Train Tight with Pockets 28"',price:"$128",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:"Wunder Train No Line High-Rise Tight",price:"$108",url:"https://shop.lululemon.com/c/women-everlux-leggings/n1n918zudsq"}],affinity:{activity:{yoga:0,run:2,studio:3,everyday:1},sweat:{low:0,med:3,high:2},feel:{soft:0,smooth:1,structured:0,cushioned:3},care:{easy:2,ok:0}}},Warpstreme:{meaning:'A finely warp-woven fabric (woven, not knit) — "warp" weaving + "streme" for stream / extreme.',feel:"Smooth, structured and wrinkle-resistant with a cool hand. Holds its shape from morning to night.",bestFor:["Travel","Commute","Work / office","Everyday","Versatile wear"],notFor:"Sweaty high-intensity training — it's built for structure and polish, not compression.",care:["Machine wash cold with like colors.","Skip fabric softener.","Hang dry — avoid high heat.","Wrinkle-resistant, so it bounces back without ironing."],products:[{name:"ABC Classic-Fit 5 Pocket Pant",price:"$138",url:"https://shop.lululemon.com/c/men-warpstreme-pants/n13u4nzu9dn"},{name:"ABC Trouser (formerly Commission)",price:"$138",url:"https://shop.lululemon.com/c/men-abc-trousers/n146jrzsddx"},{name:"ABC Jogger",price:"$128",url:"https://shop.lululemon.com/c/men-abc-pants/n1sddxzu9dn"}],affinity:{activity:{yoga:0,run:-1,studio:0,everyday:3},sweat:{low:2,med:1,high:-2},feel:{soft:0,smooth:1,structured:3,cushioned:0},care:{easy:3,ok:0}}}},nA=[{key:"activity",prompt:"What will you mostly do in it?",options:[{value:"yoga",label:"Yoga & stretching",hint:"low-impact, flexible"},{value:"run",label:"Running & cardio",hint:"high-impact, sweaty"},{value:"studio",label:"Studio & HIIT",hint:"classes, strength, spin"},{value:"everyday",label:"Everyday & travel",hint:"work, commute, errands"}]},{key:"sweat",prompt:"How much do you sweat in it?",options:[{value:"low",label:"Barely"},{value:"med",label:"A moderate amount"},{value:"high",label:"A lot"}]},{key:"feel",prompt:"What feel do you want?",options:[{value:"soft",label:"Softest, barely-there"},{value:"smooth",label:"Smooth & supportive"},{value:"cushioned",label:"Cushioned & substantial"},{value:"structured",label:"Structured & put-together"}]},{key:"care",prompt:"How do you like to care for it?",options:[{value:"easy",label:"Low-maintenance",hint:"durable, wrinkle-resistant"},{value:"ok",label:"Happy to hang-dry & baby it"}]}];function iA(r,t){return t.map(i=>{const s=l0[i].affinity;let l=0;return r.activity&&(l+=s.activity[r.activity]),r.sweat&&(l+=s.sweat[r.sweat]),r.feel&&(l+=s.feel[r.feel]),r.care&&(l+=s.care[r.care]),{name:i,score:l}}).sort((i,s)=>s.score-i.score)}const aA={background:"#f5f5f5",exposure:.82,environment:1.05,bloom:0,bloomThreshold:1.4,noise:.04,toneMapping:"Neutral",occlusion:!0,occlusionStrength:1,dof:!1,dofAperture:40,dofBlur:.04,dofRange:.3};function B1(r){const t=us[r];return{performance:"High",physics:{...t.physics},material:{fabric:r,...t.material},images:{edit:!1,useImage:!1,scale:.35,rotation:0,opacity:1,cornerRadius:0},render:{...aA}}}function sA(){const r=xa.useRef(null),t=xa.useRef(null),[i,s]=xa.useState(eA),[l,c]=xa.useState(!0),[f,p]=xa.useState(!1),[m,d]=xa.useState({});xa.useEffect(()=>{if(!r.current)return;const C=new tA(r.current);return t.current=C,C.onDecalSelect=()=>{},C.onImagesChanged=()=>{},C.applyParams(B1(i)),C.applyFabric(us[i].weave),C.reveal(),()=>{C.dispose(),t.current=null}},[]),xa.useEffect(()=>{const C=t.current;C&&(C.applyParams(B1(i)),C.applyFabric(us[i].weave))},[i]);const _=m.activity&&m.sweat&&m.feel&&m.care,g=xa.useMemo(()=>_?iA(m,F1):[],[m,_])[0]?.name,M=l0[i],E=us[i];return te.jsxs(te.Fragment,{children:[te.jsx("div",{id:"canvas-host",ref:r}),te.jsxs("div",{className:"ui",children:[te.jsxs("div",{className:"topbar",children:[te.jsxs("div",{className:"brand",children:[te.jsx("span",{className:"k",children:"lululemon"}),te.jsx("span",{className:"t",children:"Fabric Lab"})]}),te.jsxs("div",{style:{display:"flex",gap:10},children:[!l&&te.jsx("button",{className:"pill",onClick:()=>c(!0),children:"Fabric info"}),te.jsx("button",{className:"pill accent",onClick:()=>{d({}),p(!0)},children:"Find my fabric"})]})]}),te.jsx("div",{className:"hint",children:"Drag the fabric to feel how it moves · hold Space to orbit"}),te.jsxs("div",{className:"acts",children:[te.jsx("button",{title:"Reset the fabric","aria-label":"Reset the fabric",onClick:()=>t.current?.resetCloth(),children:"↺"}),te.jsx("button",{title:"Give it a nudge","aria-label":"Give it a nudge",onClick:()=>t.current?.poke(),children:"✦"})]}),te.jsx("div",{className:"rail",children:F1.map(C=>te.jsxs("button",{className:C===i?"sel":"",onClick:()=>{s(C),c(!0)},children:[te.jsx("span",{className:"dot",style:{background:us[C].material.baseColor}}),us[C].label]},C))}),te.jsxs("aside",{className:"info"+(l?"":" hidden"),children:[te.jsx("button",{className:"close","aria-label":"Close",onClick:()=>c(!1),children:"×"}),te.jsx("h2",{children:E.label}),te.jsx("p",{className:"meaning",children:M.meaning}),te.jsx("p",{className:"feel",children:M.feel}),te.jsx("h4",{children:"Best for"}),te.jsx("div",{className:"tags",children:M.bestFor.map(C=>te.jsx("span",{className:"tag",children:C},C))}),te.jsxs("p",{className:"notfor",children:[te.jsx("b",{children:"Go easy on:"})," ",M.notFor]}),te.jsx("h4",{children:"How to care for it"}),te.jsx("ul",{className:"care",children:M.care.map((C,y)=>te.jsx("li",{children:C},y))}),te.jsx("h4",{children:"Shop this fabric"}),M.products.map(C=>te.jsxs("a",{className:"prod",href:C.url,target:"_blank",rel:"noreferrer",children:[te.jsx("span",{className:"pn",children:C.name}),te.jsxs("span",{className:"pp",children:[C.price," →"]})]},C.name))]}),f&&te.jsx("div",{className:"scrim",onClick:C=>{C.target===C.currentTarget&&p(!1)},children:te.jsxs("div",{className:"modal",children:[te.jsx("button",{className:"close","aria-label":"Close",onClick:()=>p(!1),children:"×"}),te.jsx("h3",{children:"Find my fabric"}),te.jsx("p",{className:"sub",children:"Four quick questions — we'll match you and load it into the lab."}),nA.map(C=>te.jsxs("div",{className:"q",children:[te.jsx("div",{className:"prompt",children:C.prompt}),te.jsx("div",{className:"opts",children:C.options.map(y=>{const S=m[C.key]===y.value;return te.jsxs("button",{className:"opt"+(S?" sel":""),onClick:()=>d(F=>({...F,[C.key]:y.value})),children:[te.jsx("span",{className:"lab",children:y.label}),y.hint&&te.jsx("span",{className:"hint",children:y.hint})]},y.value)})})]},C.key)),_&&g&&te.jsxs("div",{className:"match",children:[te.jsx("div",{className:"rlabel",children:"Your match"}),te.jsx("h4",{children:us[g].label}),te.jsx("p",{className:"why",children:l0[g].meaning}),te.jsxs("button",{className:"pill accent",onClick:()=>{s(g),p(!1),c(!0)},children:["Feel ",us[g].label," in the lab →"]})]})]})})]})]})}US.createRoot(document.getElementById("root")).render(te.jsx(sA,{}));
