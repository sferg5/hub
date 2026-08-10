(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();var Ph={exports:{}},$o={};var A_;function Hy(){if(A_)return $o;A_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return $o.Fragment=t,$o.jsx=n,$o.jsxs=n,$o}var w_;function Gy(){return w_||(w_=1,Ph.exports=Hy()),Ph.exports}var Qt=Gy(),Oh={exports:{}},tl={},Ih={exports:{}},Fh={};var R_;function Vy(){return R_||(R_=1,(function(r){function t(I,H){var $=I.length;I.push(H);t:for(;0<$;){var ht=$-1>>>1,bt=I[ht];if(0<l(bt,H))I[ht]=H,I[$]=bt,$=ht;else break t}}function n(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],$=I.pop();if($!==H){I[0]=$;t:for(var ht=0,bt=I.length,U=bt>>>1;ht<U;){var Z=2*(ht+1)-1,yt=I[Z],Et=Z+1,Lt=I[Et];if(0>l(yt,$))Et<bt&&0>l(Lt,yt)?(I[ht]=Lt,I[Et]=$,ht=Et):(I[ht]=yt,I[Z]=$,ht=Z);else if(Et<bt&&0>l(Lt,$))I[ht]=Lt,I[Et]=$,ht=Et;else break t}}return H}function l(I,H){var $=I.sortIndex-H.sortIndex;return $!==0?$:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,v=null,g=3,y=!1,E=!1,C=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function R(I){for(var H=n(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=I)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=n(p)}}function O(I){if(C=!1,R(I),!E)if(n(m)!==null)E=!0,L||(L=!0,k());else{var H=n(p);H!==null&&K(O,H.startTime-I)}}var L=!1,F=-1,T=5,P=-1;function Y(){return M?!0:!(r.unstable_now()-P<T)}function N(){if(M=!1,L){var I=r.unstable_now();P=I;var H=!0;try{t:{E=!1,C&&(C=!1,z(F),F=-1),y=!0;var $=g;try{e:{for(R(I),v=n(m);v!==null&&!(v.expirationTime>I&&Y());){var ht=v.callback;if(typeof ht=="function"){v.callback=null,g=v.priorityLevel;var bt=ht(v.expirationTime<=I);if(I=r.unstable_now(),typeof bt=="function"){v.callback=bt,R(I),H=!0;break e}v===n(m)&&s(m),R(I)}else s(m);v=n(m)}if(v!==null)H=!0;else{var U=n(p);U!==null&&K(O,U.startTime-I),H=!1}}break t}finally{v=null,g=$,y=!1}H=void 0}}finally{H?k():L=!1}}}var k;if(typeof B=="function")k=function(){B(N)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ut=lt.port2;lt.port1.onmessage=N,k=function(){ut.postMessage(null)}}else k=function(){S(N,0)};function K(I,H){F=S(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(I){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var $=g;g=H;try{return I()}finally{g=$}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=g;g=I;try{return H()}finally{g=$}},r.unstable_scheduleCallback=function(I,H,$){var ht=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ht+$:ht):$=ht,I){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=$+bt,I={id:_++,callback:H,priorityLevel:I,startTime:$,expirationTime:bt,sortIndex:-1},$>ht?(I.sortIndex=$,t(p,I),n(m)===null&&I===n(p)&&(C?(z(F),F=-1):C=!0,K(O,$-ht))):(I.sortIndex=bt,t(m,I),E||y||(E=!0,L||(L=!0,k()))),I},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(I){var H=g;return function(){var $=g;g=H;try{return I.apply(this,arguments)}finally{g=$}}}})(Fh)),Fh}var C_;function ky(){return C_||(C_=1,Ih.exports=Vy()),Ih.exports}var Bh={exports:{}},oe={};var D_;function Xy(){if(D_)return oe;D_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function S(U,Z,yt){this.props=U,this.context=Z,this.refs=M,this.updater=yt||E}S.prototype.isReactComponent={},S.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function z(){}z.prototype=S.prototype;function B(U,Z,yt){this.props=U,this.context=Z,this.refs=M,this.updater=yt||E}var R=B.prototype=new z;R.constructor=B,C(R,S.prototype),R.isPureReactComponent=!0;var O=Array.isArray;function L(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function P(U,Z,yt){var Et=yt.ref;return{$$typeof:r,type:U,key:Z,ref:Et!==void 0?Et:null,props:yt}}function Y(U,Z){return P(U.type,Z,U.props)}function N(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function k(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(yt){return Z[yt]})}var lt=/\/+/g;function ut(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):Z.toString(36)}function K(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function I(U,Z,yt,Et,Lt){var at=typeof U;(at==="undefined"||at==="boolean")&&(U=null);var xt=!1;if(U===null)xt=!0;else switch(at){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(U.$$typeof){case r:case t:xt=!0;break;case _:return xt=U._init,I(xt(U._payload),Z,yt,Et,Lt)}}if(xt)return Lt=Lt(U),xt=Et===""?"."+ut(U,0):Et,O(Lt)?(yt="",xt!=null&&(yt=xt.replace(lt,"$&/")+"/"),I(Lt,Z,yt,"",function(ae){return ae})):Lt!=null&&(N(Lt)&&(Lt=Y(Lt,yt+(Lt.key==null||U&&U.key===Lt.key?"":(""+Lt.key).replace(lt,"$&/")+"/")+xt)),Z.push(Lt)),1;xt=0;var Mt=Et===""?".":Et+":";if(O(U))for(var zt=0;zt<U.length;zt++)Et=U[zt],at=Mt+ut(Et,zt),xt+=I(Et,Z,yt,at,Lt);else if(zt=y(U),typeof zt=="function")for(U=zt.call(U),zt=0;!(Et=U.next()).done;)Et=Et.value,at=Mt+ut(Et,zt++),xt+=I(Et,Z,yt,at,Lt);else if(at==="object"){if(typeof U.then=="function")return I(K(U),Z,yt,Et,Lt);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return xt}function H(U,Z,yt){if(U==null)return U;var Et=[],Lt=0;return I(U,Et,"","",function(at){return Z.call(yt,at,Lt++)}),Et}function $(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(yt){(U._status===0||U._status===-1)&&(U._status=1,U._result=yt)},function(yt){(U._status===0||U._status===-1)&&(U._status=2,U._result=yt)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var ht=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},bt={map:H,forEach:function(U,Z,yt){H(U,function(){Z.apply(this,arguments)},yt)},count:function(U){var Z=0;return H(U,function(){Z++}),Z},toArray:function(U){return H(U,function(Z){return Z})||[]},only:function(U){if(!N(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return oe.Activity=v,oe.Children=bt,oe.Component=S,oe.Fragment=n,oe.Profiler=l,oe.PureComponent=B,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,oe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(U,Z,yt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Et=C({},U.props),Lt=U.key;if(Z!=null)for(at in Z.key!==void 0&&(Lt=""+Z.key),Z)!T.call(Z,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Z.ref===void 0||(Et[at]=Z[at]);var at=arguments.length-2;if(at===1)Et.children=yt;else if(1<at){for(var xt=Array(at),Mt=0;Mt<at;Mt++)xt[Mt]=arguments[Mt+2];Et.children=xt}return P(U.type,Lt,Et)},oe.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},oe.createElement=function(U,Z,yt){var Et,Lt={},at=null;if(Z!=null)for(Et in Z.key!==void 0&&(at=""+Z.key),Z)T.call(Z,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Lt[Et]=Z[Et]);var xt=arguments.length-2;if(xt===1)Lt.children=yt;else if(1<xt){for(var Mt=Array(xt),zt=0;zt<xt;zt++)Mt[zt]=arguments[zt+2];Lt.children=Mt}if(U&&U.defaultProps)for(Et in xt=U.defaultProps,xt)Lt[Et]===void 0&&(Lt[Et]=xt[Et]);return P(U,at,Lt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=N,oe.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:$}},oe.memo=function(U,Z){return{$$typeof:p,type:U,compare:Z===void 0?null:Z}},oe.startTransition=function(U){var Z=F.T,yt={};F.T=yt;try{var Et=U(),Lt=F.S;Lt!==null&&Lt(yt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(L,ht)}catch(at){ht(at)}finally{Z!==null&&yt.types!==null&&(Z.types=yt.types),F.T=Z}},oe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},oe.use=function(U){return F.H.use(U)},oe.useActionState=function(U,Z,yt){return F.H.useActionState(U,Z,yt)},oe.useCallback=function(U,Z){return F.H.useCallback(U,Z)},oe.useContext=function(U){return F.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,Z){return F.H.useDeferredValue(U,Z)},oe.useEffect=function(U,Z){return F.H.useEffect(U,Z)},oe.useEffectEvent=function(U){return F.H.useEffectEvent(U)},oe.useId=function(){return F.H.useId()},oe.useImperativeHandle=function(U,Z,yt){return F.H.useImperativeHandle(U,Z,yt)},oe.useInsertionEffect=function(U,Z){return F.H.useInsertionEffect(U,Z)},oe.useLayoutEffect=function(U,Z){return F.H.useLayoutEffect(U,Z)},oe.useMemo=function(U,Z){return F.H.useMemo(U,Z)},oe.useOptimistic=function(U,Z){return F.H.useOptimistic(U,Z)},oe.useReducer=function(U,Z,yt){return F.H.useReducer(U,Z,yt)},oe.useRef=function(U){return F.H.useRef(U)},oe.useState=function(U){return F.H.useState(U)},oe.useSyncExternalStore=function(U,Z,yt){return F.H.useSyncExternalStore(U,Z,yt)},oe.useTransition=function(){return F.H.useTransition()},oe.version="19.2.7",oe}var U_;function y0(){return U_||(U_=1,Bh.exports=Xy()),Bh.exports}var zh={exports:{}},Vn={};var L_;function Wy(){if(L_)return Vn;L_=1;var r=y0();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Vn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Vn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Vn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Vn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Vn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Vn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Vn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Vn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Vn.requestFormReset=function(m){s.d.r(m)},Vn.unstable_batchedUpdates=function(m,p){return m(p)},Vn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Vn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Vn.version="19.2.7",Vn}var N_;function qy(){if(N_)return zh.exports;N_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),zh.exports=Wy(),zh.exports}var P_;function Yy(){if(P_)return tl;P_=1;var r=ky(),t=y0(),n=qy();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),i;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,w=u.child;w;){if(w===a){x=!0,a=u,o=h;break}if(w===o){x=!0,o=u,a=h;break}w=w.sibling}if(!x){for(w=h.child;w;){if(w===a){x=!0,a=h,o=u;break}if(w===o){x=!0,o=h,a=u;break}w=w.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),B=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case P:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case B:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var K=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ht=[],bt=-1;function U(e){return{current:e}}function Z(e){0>bt||(e.current=ht[bt],ht[bt]=null,bt--)}function yt(e,i){bt++,ht[bt]=e.current,e.current=i}var Et=U(null),Lt=U(null),at=U(null),xt=U(null);function Mt(e,i){switch(yt(at,i),yt(Lt,e),yt(Et,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Kg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Kg(i),e=Qg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(Et),yt(Et,e)}function zt(){Z(Et),Z(Lt),Z(at)}function ae(e){e.memoizedState!==null&&yt(xt,e);var i=Et.current,a=Qg(i,e.type);i!==a&&(yt(Lt,e),yt(Et,a))}function Jt(e){Lt.current===e&&(Z(Et),Z(Lt)),xt.current===e&&(Z(xt),Ko._currentValue=$)}var Ke,pe;function be(e){if(Ke===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Ke=i&&i[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+pe}var Ee=!1;function ge(e,i){if(!e||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var ot=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){ot=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){ot=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&ot&&typeof ct.stack=="string")return[ct.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],w=h[1];if(x&&w){var G=x.split(`
`),et=w.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===et.length)for(o=G.length-1,u=et.length-1;1<=o&&0<=u&&G[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==et[u]){var mt=`
`+G[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?be(a):""}function an(e,i){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be("Lazy");case 13:return e.child!==i&&i!==null?be("Suspense Fallback"):be("Suspense");case 19:return be("SuspenseList");case 0:case 15:return ge(e.type,!1);case 11:return ge(e.type.render,!1);case 1:return ge(e.type,!0);case 31:return be("Activity");default:return""}}function sn(e){try{var i="",a=null;do i+=an(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var rn=Object.prototype.hasOwnProperty,un=r.unstable_scheduleCallback,Ye=r.unstable_cancelCallback,on=r.unstable_shouldYield,q=r.unstable_requestPaint,He=r.unstable_now,De=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,st=r.unstable_LowPriority,dt=r.unstable_IdlePriority,Tt=r.log,Ct=r.unstable_setDisableYieldValue,ft=null,pt=null;function wt(e){if(typeof Tt=="function"&&Ct(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ft,e)}catch{}}var Ft=Math.clz32?Math.clz32:jt,Nt=Math.log,Dt=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(Nt(e)/Dt|0)|0}var $t=256,se=262144,X=4194304;function At(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?u=At(o):(x&=w,x!==0?u=At(x):a||(a=w&~e,a!==0&&(u=At(a))))):(w=o&~h,w!==0?u=At(w):x!==0?u=At(x):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,a=i&-i,h>=a||h===32&&(a&4194048)!==0)?i:u}function Rt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function It(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function St(){var e=X;return X<<=1,(X&62914560)===0&&(X=4194304),e}function Wt(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Gt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Je(e,i,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,G=e.expirationTimes,et=e.hiddenUpdates;for(a=x&~a;0<a;){var mt=31-Ft(a),vt=1<<mt;w[mt]=0,G[mt]=-1;var ot=et[mt];if(ot!==null)for(et[mt]=null,mt=0;mt<ot.length;mt++){var ct=ot[mt];ct!==null&&(ct.lane&=-536870913)}a&=~vt}o!==0&&Pe(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~i))}function Pe(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Ft(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function oi(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&i|e[o]&i&&(e[o]|=i),a&=~u}}function li(e,i){var a=i&-i;return a=(a&42)!==0?1:lo(a),(a&(e.suspendedLanes|i))!==0?0:a}function lo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function co(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:x_(e.type))}function Js(e,i){var a=H.p;try{return H.p=e,i()}finally{H.p=a}}var qi=Math.random().toString(36).slice(2),dn="__reactFiber$"+qi,Nn="__reactProps$"+qi,Jn="__reactContainer$"+qi,ys="__reactEvents$"+qi,Sl="__reactListeners$"+qi,Ml="__reactHandles$"+qi,Ss="__reactResources$"+qi,Fa="__reactMarker$"+qi;function Ba(e){delete e[dn],delete e[Nn],delete e[ys],delete e[Sl],delete e[Ml]}function oa(e){var i=e[dn];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Jn]||a[dn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=i_(e);e!==null;){if(a=e[dn])return a;e=i_(e)}return i}e=a,a=e.parentNode}return null}function la(e){if(e=e[dn]||e[Jn]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Ms(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function za(e){var i=e[Ss];return i||(i=e[Ss]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function pn(e){e[Fa]=!0}var bl=new Set,A={};function W(e,i){rt(e,i),rt(e+"Capture",i)}function rt(e,i){for(A[e]=i,e=0;e<i.length;e++)bl.add(i[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},Pt={};function Ht(e){return rn.call(Pt,e)?!0:rn.call(it,e)?!1:nt.test(e)?Pt[e]=!0:(it[e]=!0,!1)}function Ut(e,i,a){if(Ht(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function kt(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Vt(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Kt(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function we(e){if(!e._valueTracker){var i=ce(e)?"checked":"value";e._valueTracker=Kt(e,i,""+e[i])}}function $e(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=ce(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function We(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oe=/[\n"\\]/g;function Ie(e){return e.replace(Oe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Bt(e,i,a,o,u,h,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),i!=null?x==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+te(i)):e.value!==""+te(i)&&(e.value=""+te(i)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),i!=null?_e(e,x,te(i)):a!=null?_e(e,x,te(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+te(w):e.removeAttribute("name")}function Gn(e,i,a,o,u,h,x,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){we(e);return}a=a!=null?""+te(a):"",i=i!=null?""+te(i):a,w||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),we(e)}function _e(e,i,a){i==="number"&&We(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Mn(e,i,a,o){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+te(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function ci(e,i,a){if(i!=null&&(i=""+te(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+te(a):""}function Ni(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=te(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),we(e)}function ui(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Fe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||Fe.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Pi(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&tn(e,u,o)}else for(var h in i)i.hasOwnProperty(h)&&tn(e,h,i[h])}function Le(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ha=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(e){return Ha.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ca(){}var Du=null;function Uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,tr=null;function Z0(e){var i=la(e);if(i&&(e=i.stateNode)){var a=e[Nn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Bt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ie(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var u=o[Nn]||null;if(!u)throw Error(s(90));Bt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&$e(o)}break t;case"textarea":ci(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Mn(e,!!a.multiple,i,!1)}}}var Lu=!1;function K0(e,i,a){if(Lu)return e(i,a);Lu=!0;try{var o=e(i);return o}finally{if(Lu=!1,($s!==null||tr!==null)&&(uc(),$s&&(i=$s,e=tr,tr=$s=null,Z0(i),e)))for(i=0;i<e.length;i++)Z0(e[i])}}function fo(e,i){var a=e.stateNode;if(a===null)return null;var o=a[Nn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(ua)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Nu=!1}var Ga=null,Pu=null,El=null;function Q0(){if(El)return El;var e,i=Pu,a=i.length,o,u="value"in Ga?Ga.value:Ga.textContent,h=u.length;for(e=0;e<a&&i[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&i[a-o]===u[h-o];o++);return El=u.slice(e,1<o?1-o:void 0)}function Tl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Al(){return!0}function j0(){return!1}function $n(e){function i(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Al:j0,this.isPropagationStopped=j0,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=$n(Es),po=v({},Es,{view:0,detail:0}),B1=$n(po),Ou,Iu,mo,Rl=v({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(Ou=e.screenX-mo.screenX,Iu=e.screenY-mo.screenY):Iu=Ou=0,mo=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Iu}}),J0=$n(Rl),z1=v({},Rl,{dataTransfer:0}),H1=$n(z1),G1=v({},po,{relatedTarget:0}),Fu=$n(G1),V1=v({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=$n(V1),X1=v({},Es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W1=$n(X1),q1=v({},Es,{data:0}),$0=$n(q1),Y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q1(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=K1[e])?!!i[e]:!1}function Bu(){return Q1}var j1=v({},po,{key:function(e){if(e.key){var i=Y1[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?Tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J1=$n(j1),$1=v({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=$n($1),tx=v({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),ex=$n(tx),nx=v({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=$n(nx),ax=v({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=$n(ax),rx=v({},Es,{newState:0,oldState:0}),ox=$n(rx),lx=[9,13,27,32],zu=ua&&"CompositionEvent"in window,go=null;ua&&"documentMode"in document&&(go=document.documentMode);var cx=ua&&"TextEvent"in window&&!go,ep=ua&&(!zu||go&&8<go&&11>=go),np=" ",ip=!1;function ap(e,i){switch(e){case"keyup":return lx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function ux(e,i){switch(e){case"compositionend":return sp(i);case"keypress":return i.which!==32?null:(ip=!0,np);case"textInput":return e=i.data,e===np&&ip?null:e;default:return null}}function fx(e,i){if(er)return e==="compositionend"||!zu&&ap(e,i)?(e=Q0(),El=Pu=Ga=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ep&&i.locale!=="ko"?null:i.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!hx[e.type]:i==="textarea"}function op(e,i,a,o){$s?tr?tr.push(o):tr=[o]:$s=o,i=_c(i,"onChange"),0<i.length&&(a=new wl("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var _o=null,vo=null;function dx(e){kg(e,0)}function Cl(e){var i=Ms(e);if($e(i))return e}function lp(e,i){if(e==="change")return i}var cp=!1;if(ua){var Hu;if(ua){var Gu="oninput"in document;if(!Gu){var up=document.createElement("div");up.setAttribute("oninput","return;"),Gu=typeof up.oninput=="function"}Hu=Gu}else Hu=!1;cp=Hu&&(!document.documentMode||9<document.documentMode)}function fp(){_o&&(_o.detachEvent("onpropertychange",hp),vo=_o=null)}function hp(e){if(e.propertyName==="value"&&Cl(vo)){var i=[];op(i,vo,e,Uu(e)),K0(dx,i)}}function px(e,i,a){e==="focusin"?(fp(),_o=i,vo=a,_o.attachEvent("onpropertychange",hp)):e==="focusout"&&fp()}function mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(vo)}function gx(e,i){if(e==="click")return Cl(i)}function _x(e,i){if(e==="input"||e==="change")return Cl(i)}function vx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var fi=typeof Object.is=="function"?Object.is:vx;function xo(e,i){if(fi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!rn.call(i,u)||!fi(e[u],i[u]))return!1}return!0}function dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pp(e,i){var a=dp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=dp(a)}}function mp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?mp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function gp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=We(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=We(e.document)}return i}function Vu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var xx=ua&&"documentMode"in document&&11>=document.documentMode,nr=null,ku=null,yo=null,Xu=!1;function _p(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||nr==null||nr!==We(o)||(o=nr,"selectionStart"in o&&Vu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yo&&xo(yo,o)||(yo=o,o=_c(ku,"onSelect"),0<o.length&&(i=new wl("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=nr)))}function Ts(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var ir={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},Wu={},vp={};ua&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function As(e){if(Wu[e])return Wu[e];if(!ir[e])return e;var i=ir[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in vp)return Wu[e]=i[a];return e}var xp=As("animationend"),yp=As("animationiteration"),Sp=As("animationstart"),yx=As("transitionrun"),Sx=As("transitionstart"),Mx=As("transitioncancel"),Mp=As("transitionend"),bp=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function Oi(e,i){bp.set(e,i),W(i,[e])}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bi=[],ar=0,Yu=0;function Ul(){for(var e=ar,i=Yu=ar=0;i<e;){var a=bi[i];bi[i++]=null;var o=bi[i];bi[i++]=null;var u=bi[i];bi[i++]=null;var h=bi[i];if(bi[i++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&Ep(a,u,h)}}function Ll(e,i,a,o){bi[ar++]=e,bi[ar++]=i,bi[ar++]=a,bi[ar++]=o,Yu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Zu(e,i,a,o){return Ll(e,i,a,o),Nl(e)}function ws(e,i){return Ll(e,null,null,i),Nl(e)}function Ep(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&i!==null&&(u=31-Ft(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=a|536870912),h):null}function Nl(e){if(50<Vo)throw Vo=0,ah=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var sr={};function bx(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,i,a,o){return new bx(e,i,a,o)}function Ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fa(e,i){var a=e.alternate;return a===null?(a=hi(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Tp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Pl(e,i,a,o,u,h){var x=0;if(o=e,typeof e=="function")Ku(e)&&(x=1);else if(typeof e=="string")x=Ry(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case P:return e=hi(31,a,i,u),e.elementType=P,e.lanes=h,e;case C:return Rs(a.children,u,h,i);case M:x=8,u|=24;break;case S:return e=hi(12,a,i,u|2),e.elementType=S,e.lanes=h,e;case O:return e=hi(13,a,i,u),e.elementType=O,e.lanes=h,e;case L:return e=hi(19,a,i,u),e.elementType=L,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:x=10;break t;case z:x=9;break t;case R:x=11;break t;case F:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=hi(x,a,i,u),i.elementType=e,i.type=o,i.lanes=h,i}function Rs(e,i,a,o){return e=hi(7,e,o,i),e.lanes=a,e}function Qu(e,i,a){return e=hi(6,e,null,i),e.lanes=a,e}function Ap(e){var i=hi(18,null,null,0);return i.stateNode=e,i}function ju(e,i,a){return i=hi(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var wp=new WeakMap;function Ei(e,i){if(typeof e=="object"&&e!==null){var a=wp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:sn(i)},wp.set(e,i),i)}return{value:e,source:i,stack:sn(i)}}var rr=[],or=0,Ol=null,So=0,Ti=[],Ai=0,Va=null,Zi=1,Ki="";function ha(e,i){rr[or++]=So,rr[or++]=Ol,Ol=e,So=i}function Rp(e,i,a){Ti[Ai++]=Zi,Ti[Ai++]=Ki,Ti[Ai++]=Va,Va=e;var o=Zi;e=Ki;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var h=32-Ft(i)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Zi=1<<32-Ft(i)+u|a<<u|o,Ki=h+e}else Zi=1<<h|a<<u|o,Ki=e}function Ju(e){e.return!==null&&(ha(e,1),Rp(e,1,0))}function $u(e){for(;e===Ol;)Ol=rr[--or],rr[or]=null,So=rr[--or],rr[or]=null;for(;e===Va;)Va=Ti[--Ai],Ti[Ai]=null,Ki=Ti[--Ai],Ti[Ai]=null,Zi=Ti[--Ai],Ti[Ai]=null}function Cp(e,i){Ti[Ai++]=Zi,Ti[Ai++]=Ki,Ti[Ai++]=Va,Zi=i.id,Ki=i.overflow,Va=e}var Pn=null,Qe=null,Te=!1,ka=null,wi=!1,tf=Error(s(519));function Xa(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mo(Ei(i,e)),tf}function Dp(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[dn]=e,i[Nn]=o,a){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(a=0;a<Xo.length;a++)xe(Xo[a],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),Gn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),Ni(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||Yg(i.textContent,a)?(o.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),o.onScroll!=null&&xe("scroll",i),o.onScrollEnd!=null&&xe("scrollend",i),o.onClick!=null&&(i.onclick=ca),i=!0):i=!1,i||Xa(e,!0)}function Up(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Pn=Pn.return}}function lr(e){if(e!==Pn)return!1;if(!Te)return Up(e),Te=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xh(e.type,e.memoizedProps)),a=!a),a&&Qe&&Xa(e),Up(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=n_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=n_(e)}else i===27?(i=Qe,as(e.type)?(e=Eh,Eh=null,Qe=e):Qe=i):Qe=Pn?Ci(e.stateNode.nextSibling):null;return!0}function Cs(){Qe=Pn=null,Te=!1}function ef(){var e=ka;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),ka=null),e}function Mo(e){ka===null?ka=[e]:ka.push(e)}var nf=U(null),Ds=null,da=null;function Wa(e,i,a){yt(nf,i._currentValue),i._currentValue=a}function pa(e){e._currentValue=nf.current,Z(nf)}function af(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function sf(e,i,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var w=h;h=u;for(var G=0;G<i.length;G++)if(w.context===i[G]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),af(h.return,a,e),o||(x=null);break t}h=w.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),af(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function cr(e,i,a,o){e=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var w=u.type;fi(u.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(u===xt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ko):e=[Ko])}u=u.return}e!==null&&sf(i,e,a,o),i.flags|=262144}function Il(e){for(e=e.firstContext;e!==null;){if(!fi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Ds=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return Lp(Ds,e)}function Fl(e,i){return Ds===null&&Us(e),Lp(e,i)}function Lp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},da===null){if(e===null)throw Error(s(308));da=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else da=da.next=i;return a}var Ex=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},Tx=r.unstable_scheduleCallback,Ax=r.unstable_NormalPriority,mn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new Ex,data:new Map,refCount:0}}function bo(e){e.refCount--,e.refCount===0&&Tx(Ax,function(){e.controller.abort()})}var Eo=null,of=0,ur=0,fr=null;function wx(e,i){if(Eo===null){var a=Eo=[];of=0,ur=uh(),fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return of++,i.then(Np,Np),i}function Np(){if(--of===0&&Eo!==null){fr!==null&&(fr.status="fulfilled");var e=Eo;Eo=null,ur=0,fr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Rx(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Pp=I.S;I.S=function(e,i){_g=He(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&wx(e,i),Pp!==null&&Pp(e,i)};var Ls=U(null);function lf(){var e=Ls.current;return e!==null?e:qe.pooledCache}function Bl(e,i){i===null?yt(Ls,Ls.current):yt(Ls,i.pool)}function Op(){var e=lf();return e===null?null:{parent:mn._currentValue,pool:e}}var hr=Error(s(460)),cf=Error(s(474)),zl=Error(s(542)),Hl={then:function(){}};function Ip(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(ca,ca),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,zp(e),e;default:if(typeof i.status=="string")i.then(ca,ca);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,zp(e),e}throw Ps=i,hr}}function Ns(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,hr):a}}var Ps=null;function Bp(){if(Ps===null)throw Error(s(459));var e=Ps;return Ps=null,e}function zp(e){if(e===hr||e===zl)throw Error(s(483))}var dr=null,To=0;function Gl(e){var i=To;return To+=1,dr===null&&(dr=[]),Fp(dr,e,i)}function Ao(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Vl(e,i){throw i.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Hp(e){function i(Q,V){if(e){var tt=Q.deletions;tt===null?(Q.deletions=[V],Q.flags|=16):tt.push(V)}}function a(Q,V){if(!e)return null;for(;V!==null;)i(Q,V),V=V.sibling;return null}function o(Q){for(var V=new Map;Q!==null;)Q.key!==null?V.set(Q.key,Q):V.set(Q.index,Q),Q=Q.sibling;return V}function u(Q,V){return Q=fa(Q,V),Q.index=0,Q.sibling=null,Q}function h(Q,V,tt){return Q.index=tt,e?(tt=Q.alternate,tt!==null?(tt=tt.index,tt<V?(Q.flags|=67108866,V):tt):(Q.flags|=67108866,V)):(Q.flags|=1048576,V)}function x(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function w(Q,V,tt,_t){return V===null||V.tag!==6?(V=Qu(tt,Q.mode,_t),V.return=Q,V):(V=u(V,tt),V.return=Q,V)}function G(Q,V,tt,_t){var ee=tt.type;return ee===C?mt(Q,V,tt.props.children,_t,tt.key):V!==null&&(V.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===T&&Ns(ee)===V.type)?(V=u(V,tt.props),Ao(V,tt),V.return=Q,V):(V=Pl(tt.type,tt.key,tt.props,null,Q.mode,_t),Ao(V,tt),V.return=Q,V)}function et(Q,V,tt,_t){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=ju(tt,Q.mode,_t),V.return=Q,V):(V=u(V,tt.children||[]),V.return=Q,V)}function mt(Q,V,tt,_t,ee){return V===null||V.tag!==7?(V=Rs(tt,Q.mode,_t,ee),V.return=Q,V):(V=u(V,tt),V.return=Q,V)}function vt(Q,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Qu(""+V,Q.mode,tt),V.return=Q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return tt=Pl(V.type,V.key,V.props,null,Q.mode,tt),Ao(tt,V),tt.return=Q,tt;case E:return V=ju(V,Q.mode,tt),V.return=Q,V;case T:return V=Ns(V),vt(Q,V,tt)}if(K(V)||k(V))return V=Rs(V,Q.mode,tt,null),V.return=Q,V;if(typeof V.then=="function")return vt(Q,Gl(V),tt);if(V.$$typeof===B)return vt(Q,Fl(Q,V),tt);Vl(Q,V)}return null}function ot(Q,V,tt,_t){var ee=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return ee!==null?null:w(Q,V,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===ee?G(Q,V,tt,_t):null;case E:return tt.key===ee?et(Q,V,tt,_t):null;case T:return tt=Ns(tt),ot(Q,V,tt,_t)}if(K(tt)||k(tt))return ee!==null?null:mt(Q,V,tt,_t,null);if(typeof tt.then=="function")return ot(Q,V,Gl(tt),_t);if(tt.$$typeof===B)return ot(Q,V,Fl(Q,tt),_t);Vl(Q,tt)}return null}function ct(Q,V,tt,_t,ee){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get(tt)||null,w(V,Q,""+_t,ee);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Q=Q.get(_t.key===null?tt:_t.key)||null,G(V,Q,_t,ee);case E:return Q=Q.get(_t.key===null?tt:_t.key)||null,et(V,Q,_t,ee);case T:return _t=Ns(_t),ct(Q,V,tt,_t,ee)}if(K(_t)||k(_t))return Q=Q.get(tt)||null,mt(V,Q,_t,ee,null);if(typeof _t.then=="function")return ct(Q,V,tt,Gl(_t),ee);if(_t.$$typeof===B)return ct(Q,V,tt,Fl(V,_t),ee);Vl(V,_t)}return null}function Xt(Q,V,tt,_t){for(var ee=null,Re=null,qt=V,fe=V=0,Se=null;qt!==null&&fe<tt.length;fe++){qt.index>fe?(Se=qt,qt=null):Se=qt.sibling;var Ce=ot(Q,qt,tt[fe],_t);if(Ce===null){qt===null&&(qt=Se);break}e&&qt&&Ce.alternate===null&&i(Q,qt),V=h(Ce,V,fe),Re===null?ee=Ce:Re.sibling=Ce,Re=Ce,qt=Se}if(fe===tt.length)return a(Q,qt),Te&&ha(Q,fe),ee;if(qt===null){for(;fe<tt.length;fe++)qt=vt(Q,tt[fe],_t),qt!==null&&(V=h(qt,V,fe),Re===null?ee=qt:Re.sibling=qt,Re=qt);return Te&&ha(Q,fe),ee}for(qt=o(qt);fe<tt.length;fe++)Se=ct(qt,Q,fe,tt[fe],_t),Se!==null&&(e&&Se.alternate!==null&&qt.delete(Se.key===null?fe:Se.key),V=h(Se,V,fe),Re===null?ee=Se:Re.sibling=Se,Re=Se);return e&&qt.forEach(function(cs){return i(Q,cs)}),Te&&ha(Q,fe),ee}function ne(Q,V,tt,_t){if(tt==null)throw Error(s(151));for(var ee=null,Re=null,qt=V,fe=V=0,Se=null,Ce=tt.next();qt!==null&&!Ce.done;fe++,Ce=tt.next()){qt.index>fe?(Se=qt,qt=null):Se=qt.sibling;var cs=ot(Q,qt,Ce.value,_t);if(cs===null){qt===null&&(qt=Se);break}e&&qt&&cs.alternate===null&&i(Q,qt),V=h(cs,V,fe),Re===null?ee=cs:Re.sibling=cs,Re=cs,qt=Se}if(Ce.done)return a(Q,qt),Te&&ha(Q,fe),ee;if(qt===null){for(;!Ce.done;fe++,Ce=tt.next())Ce=vt(Q,Ce.value,_t),Ce!==null&&(V=h(Ce,V,fe),Re===null?ee=Ce:Re.sibling=Ce,Re=Ce);return Te&&ha(Q,fe),ee}for(qt=o(qt);!Ce.done;fe++,Ce=tt.next())Ce=ct(qt,Q,fe,Ce.value,_t),Ce!==null&&(e&&Ce.alternate!==null&&qt.delete(Ce.key===null?fe:Ce.key),V=h(Ce,V,fe),Re===null?ee=Ce:Re.sibling=Ce,Re=Ce);return e&&qt.forEach(function(zy){return i(Q,zy)}),Te&&ha(Q,fe),ee}function ke(Q,V,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===C&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var ee=tt.key;V!==null;){if(V.key===ee){if(ee=tt.type,ee===C){if(V.tag===7){a(Q,V.sibling),_t=u(V,tt.props.children),_t.return=Q,Q=_t;break t}}else if(V.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===T&&Ns(ee)===V.type){a(Q,V.sibling),_t=u(V,tt.props),Ao(_t,tt),_t.return=Q,Q=_t;break t}a(Q,V);break}else i(Q,V);V=V.sibling}tt.type===C?(_t=Rs(tt.props.children,Q.mode,_t,tt.key),_t.return=Q,Q=_t):(_t=Pl(tt.type,tt.key,tt.props,null,Q.mode,_t),Ao(_t,tt),_t.return=Q,Q=_t)}return x(Q);case E:t:{for(ee=tt.key;V!==null;){if(V.key===ee)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(Q,V.sibling),_t=u(V,tt.children||[]),_t.return=Q,Q=_t;break t}else{a(Q,V);break}else i(Q,V);V=V.sibling}_t=ju(tt,Q.mode,_t),_t.return=Q,Q=_t}return x(Q);case T:return tt=Ns(tt),ke(Q,V,tt,_t)}if(K(tt))return Xt(Q,V,tt,_t);if(k(tt)){if(ee=k(tt),typeof ee!="function")throw Error(s(150));return tt=ee.call(tt),ne(Q,V,tt,_t)}if(typeof tt.then=="function")return ke(Q,V,Gl(tt),_t);if(tt.$$typeof===B)return ke(Q,V,Fl(Q,tt),_t);Vl(Q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(Q,V.sibling),_t=u(V,tt),_t.return=Q,Q=_t):(a(Q,V),_t=Qu(tt,Q.mode,_t),_t.return=Q,Q=_t),x(Q)):a(Q,V)}return function(Q,V,tt,_t){try{To=0;var ee=ke(Q,V,tt,_t);return dr=null,ee}catch(qt){if(qt===hr||qt===zl)throw qt;var Re=hi(29,qt,null,Q.mode);return Re.lanes=_t,Re.return=Q,Re}}}var Os=Hp(!0),Gp=Hp(!1),qa=!1;function uf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Nl(e),Ep(e,null,a),i}return Ll(e,o,i,a),Nl(e)}function wo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,oi(e,a)}}function hf(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=i:h=h.next=i}else u=h=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var df=!1;function Ro(){if(df){var e=fr;if(e!==null)throw e}}function Co(e,i,a,o){df=!1;var u=e.updateQueue;qa=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var G=w,et=G.next;G.next=null,x===null?h=et:x.next=et,x=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,w=mt.lastBaseUpdate,w!==x&&(w===null?mt.firstBaseUpdate=et:w.next=et,mt.lastBaseUpdate=G))}if(h!==null){var vt=u.baseState;x=0,mt=et=G=null,w=h;do{var ot=w.lane&-536870913,ct=ot!==w.lane;if(ct?(ye&ot)===ot:(o&ot)===ot){ot!==0&&ot===ur&&(df=!0),mt!==null&&(mt=mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Xt=e,ne=w;ot=i;var ke=a;switch(ne.tag){case 1:if(Xt=ne.payload,typeof Xt=="function"){vt=Xt.call(ke,vt,ot);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ne.payload,ot=typeof Xt=="function"?Xt.call(ke,vt,ot):Xt,ot==null)break t;vt=v({},vt,ot);break t;case 2:qa=!0}}ot=w.callback,ot!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[ot]:ct.push(ot))}else ct={lane:ot,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mt===null?(et=mt=ct,G=vt):mt=mt.next=ct,x|=ot;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ct=w,w=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);mt===null&&(G=vt),u.baseState=G,u.firstBaseUpdate=et,u.lastBaseUpdate=mt,h===null&&(u.shared.lanes=0),$a|=x,e.lanes=x,e.memoizedState=vt}}function Vp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function kp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Vp(a[e],i)}var pr=U(null),kl=U(0);function Xp(e,i){e=ba,yt(kl,e),yt(pr,i),ba=e|i.baseLanes}function pf(){yt(kl,ba),yt(pr,pr.current)}function mf(){ba=kl.current,Z(pr),Z(kl)}var di=U(null),Ri=null;function Ka(e){var i=e.alternate;yt(fn,fn.current&1),yt(di,e),Ri===null&&(i===null||pr.current!==null||i.memoizedState!==null)&&(Ri=e)}function gf(e){yt(fn,fn.current),yt(di,e),Ri===null&&(Ri=e)}function Wp(e){e.tag===22?(yt(fn,fn.current),yt(di,e),Ri===null&&(Ri=e)):Qa()}function Qa(){yt(fn,fn.current),yt(di,di.current)}function pi(e){Z(di),Ri===e&&(Ri=null),Z(fn)}var fn=U(0);function Xl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mh(a)||bh(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ma=0,ue=null,Ge=null,gn=null,Wl=!1,mr=!1,Is=!1,ql=0,Do=0,gr=null,Cx=0;function ln(){throw Error(s(321))}function _f(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!fi(e[a],i[a]))return!1;return!0}function vf(e,i,a,o,u,h){return ma=h,ue=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?Rm:Nf,Is=!1,h=a(o,u),Is=!1,mr&&(h=Yp(i,a,o,u)),qp(e),h}function qp(e){I.H=No;var i=Ge!==null&&Ge.next!==null;if(ma=0,gn=Ge=ue=null,Wl=!1,Do=0,gr=null,i)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&Il(e)&&(_n=!0))}function Yp(e,i,a,o){ue=e;var u=0;do{if(mr&&(gr=null),Do=0,mr=!1,25<=u)throw Error(s(301));if(u+=1,gn=Ge=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=Cm,h=i(a,o)}while(mr);return h}function Dx(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?Uo(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ue.flags|=1024),i}function xf(){var e=ql!==0;return ql=0,e}function yf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Sf(e){if(Wl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Wl=!1}ma=0,gn=Ge=ue=null,mr=!1,Do=ql=0,gr=null}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?ue.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if(Ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=gn===null?ue.memoizedState:gn.next;if(i!==null)gn=i,Ge=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},gn===null?ue.memoizedState=gn=e:gn=gn.next=e}return gn}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(e){var i=Do;return Do+=1,gr===null&&(gr=[]),e=Fp(gr,e,i),i=ue,(gn===null?i.memoizedState:gn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Rm:Nf),e}function Zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Uo(e);if(e.$$typeof===B)return On(e)}throw Error(s(438,String(e)))}function Mf(e){var i=null,a=ue.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Yl(),ue.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=Y;return i.index++,a}function ga(e,i){return typeof i=="function"?i(e):i}function Kl(e){var i=hn();return bf(i,Ge,e)}function bf(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}i.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{i=u.next;var w=x=null,G=null,et=i,mt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(ye&vt)===vt:(ma&vt)===vt){var ot=et.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===ur&&(mt=!0);else if((ma&ot)===ot){et=et.next,ot===ur&&(mt=!0);continue}else vt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(w=G=vt,x=h):G=G.next=vt,ue.lanes|=ot,$a|=ot;vt=et.action,Is&&a(h,vt),h=et.hasEagerState?et.eagerState:a(h,vt)}else ot={lane:vt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(w=G=ot,x=h):G=G.next=ot,ue.lanes|=vt,$a|=vt;et=et.next}while(et!==null&&et!==i);if(G===null?x=h:G.next=w,!fi(h,e.memoizedState)&&(_n=!0,mt&&(a=fr,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ef(e){var i=hn(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=i.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);fi(h,i.memoizedState)||(_n=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,o]}function Zp(e,i,a){var o=ue,u=hn(),h=Te;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=i();var x=!fi((Ge||u).memoizedState,a);if(x&&(u.memoizedState=a,_n=!0),u=u.queue,wf(jp.bind(null,o,u,e),[e]),u.getSnapshot!==i||x||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,_r(9,{destroy:void 0},Qp.bind(null,o,u,a,i),null),qe===null)throw Error(s(349));h||(ma&127)!==0||Kp(o,i,a)}return a}function Kp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=ue.updateQueue,i===null?(i=Yl(),ue.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Qp(e,i,a,o){i.value=a,i.getSnapshot=o,Jp(i)&&$p(e)}function jp(e,i,a){return a(function(){Jp(i)&&$p(e)})}function Jp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!fi(e,a)}catch{return!0}}function $p(e){var i=ws(e,2);i!==null&&ai(i,e,2)}function Tf(e){var i=Yn();if(typeof e=="function"){var a=e;if(e=a(),Is){wt(!0);try{a()}finally{wt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},i}function tm(e,i,a,o){return e.baseState=a,bf(e,Ge,typeof o=="function"?o:ga)}function Ux(e,i,a,o,u){if(Jl(e))throw Error(s(485));if(e=i.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=i.pending,a===null?(h.next=i.pending=h,em(i,h)):(h.next=a.next,i.pending=a.next=h)}}function em(e,i){var a=i.action,o=i.payload,u=e.state;if(i.isTransition){var h=I.T,x={};I.T=x;try{var w=a(u,o),G=I.S;G!==null&&G(x,w),nm(e,i,w)}catch(et){Af(e,i,et)}finally{h!==null&&x.types!==null&&(h.types=x.types),I.T=h}}else try{h=a(u,o),nm(e,i,h)}catch(et){Af(e,i,et)}}function nm(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){im(e,i,o)},function(o){return Af(e,i,o)}):im(e,i,a)}function im(e,i,a){i.status="fulfilled",i.value=a,am(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,em(e,a)))}function Af(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,am(i),i=i.next;while(i!==o)}e.action=null}function am(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function sm(e,i){return i}function rm(e,i){if(Te){var a=qe.formState;if(a!==null){t:{var o=ue;if(Te){if(Qe){e:{for(var u=Qe,h=wi;u.nodeType!==8;){if(!h){u=null;break e}if(u=Ci(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qe=Ci(u.nextSibling),o=u.data==="F!";break t}}Xa(o)}o=!1}o&&(i=a[0])}}return a=Yn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sm,lastRenderedState:i},a.queue=o,a=Tm.bind(null,ue,o),o.dispatch=a,o=Tf(!1),h=Lf.bind(null,ue,!1,o.queue),o=Yn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,a=Ux.bind(null,ue,u,h,a),u.dispatch=a,o.memoizedState=e,[i,a,!1]}function om(e){var i=hn();return lm(i,Ge,e)}function lm(e,i,a){if(i=bf(e,i,sm)[0],e=Kl(ga)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Uo(i)}catch(x){throw x===hr?zl:x}else o=i;i=hn();var u=i.queue,h=u.dispatch;return a!==i.memoizedState&&(ue.flags|=2048,_r(9,{destroy:void 0},Lx.bind(null,u,a),null)),[o,h,e]}function Lx(e,i){e.action=i}function cm(e){var i=hn(),a=Ge;if(a!==null)return lm(i,a,e);hn(),i=i.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function _r(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=ue.updateQueue,i===null&&(i=Yl(),ue.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function um(){return hn().memoizedState}function Ql(e,i,a,o){var u=Yn();ue.flags|=e,u.memoizedState=_r(1|i,{destroy:void 0},a,o===void 0?null:o)}function jl(e,i,a,o){var u=hn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ge!==null&&o!==null&&_f(o,Ge.memoizedState.deps)?u.memoizedState=_r(i,h,a,o):(ue.flags|=e,u.memoizedState=_r(1|i,h,a,o))}function fm(e,i){Ql(8390656,8,e,i)}function wf(e,i){jl(2048,8,e,i)}function Nx(e){ue.flags|=4;var i=ue.updateQueue;if(i===null)i=Yl(),ue.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function hm(e){var i=hn().memoizedState;return Nx({ref:i,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function dm(e,i){return jl(4,2,e,i)}function pm(e,i){return jl(4,4,e,i)}function mm(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function gm(e,i,a){a=a!=null?a.concat([e]):null,jl(4,4,mm.bind(null,i,e),a)}function Rf(){}function _m(e,i){var a=hn();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&_f(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function vm(e,i){var a=hn();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&_f(i,o[1]))return o[0];if(o=e(),Is){wt(!0);try{e()}finally{wt(!1)}}return a.memoizedState=[o,i],o}function Cf(e,i,a){return a===void 0||(ma&1073741824)!==0&&(ye&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=xg(),ue.lanes|=e,$a|=e,a)}function xm(e,i,a,o){return fi(a,i)?a:pr.current!==null?(e=Cf(e,a,o),fi(e,i)||(_n=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(ye&261930)===0?(_n=!0,e.memoizedState=a):(e=xg(),ue.lanes|=e,$a|=e,i)}function ym(e,i,a,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var x=I.T,w={};I.T=w,Lf(e,!1,i,a);try{var G=u(),et=I.S;if(et!==null&&et(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=Rx(G,o);Lo(e,i,mt,_i(e))}else Lo(e,i,o,_i(e))}catch(vt){Lo(e,i,{then:function(){},status:"rejected",reason:vt},_i())}finally{H.p=h,x!==null&&w.types!==null&&(x.types=w.types),I.T=x}}function Px(){}function Df(e,i,a,o){if(e.tag!==5)throw Error(s(476));var u=Sm(e).queue;ym(e,u,i,$,a===null?Px:function(){return Mm(e),a(o)})}function Sm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:$},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Mm(e){var i=Sm(e);i.next===null&&(i=e.alternate.memoizedState),Lo(e,i.next.queue,{},_i())}function Uf(){return On(Ko)}function bm(){return hn().memoizedState}function Em(){return hn().memoizedState}function Ox(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=_i();e=Ya(a);var o=Za(i,e,a);o!==null&&(ai(o,i,a),wo(o,i,a)),i={cache:rf()},e.payload=i;return}i=i.return}}function Ix(e,i,a){var o=_i();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Jl(e)?Am(i,a):(a=Zu(e,i,a,o),a!==null&&(ai(a,e,o),wm(a,i,o)))}function Tm(e,i,a){var o=_i();Lo(e,i,a,o)}function Lo(e,i,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jl(e))Am(i,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var x=i.lastRenderedState,w=h(x,a);if(u.hasEagerState=!0,u.eagerState=w,fi(w,x))return Ll(e,i,u,0),qe===null&&Ul(),!1}catch{}if(a=Zu(e,i,u,o),a!==null)return ai(a,e,o),wm(a,i,o),!0}return!1}function Lf(e,i,a,o){if(o={lane:2,revertLane:uh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Jl(e)){if(i)throw Error(s(479))}else i=Zu(e,a,o,2),i!==null&&ai(i,e,2)}function Jl(e){var i=e.alternate;return e===ue||i!==null&&i===ue}function Am(e,i){mr=Wl=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function wm(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,oi(e,a)}}var No={readContext:On,use:Zl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};No.useEffectEvent=ln;var Rm={readContext:On,use:Zl,useCallback:function(e,i){return Yn().memoizedState=[e,i===void 0?null:i],e},useContext:On,useEffect:fm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Ql(4194308,4,mm.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Ql(4194308,4,e,i)},useInsertionEffect:function(e,i){Ql(4,2,e,i)},useMemo:function(e,i){var a=Yn();i=i===void 0?null:i;var o=e();if(Is){wt(!0);try{e()}finally{wt(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=Yn();if(a!==void 0){var u=a(i);if(Is){wt(!0);try{a(i)}finally{wt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ix.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var i=Yn();return e={current:e},i.memoizedState=e},useState:function(e){e=Tf(e);var i=e.queue,a=Tm.bind(null,ue,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(e,i){var a=Yn();return Cf(a,e,i)},useTransition:function(){var e=Tf(!1);return e=ym.bind(null,ue,e.queue,!0,!1),Yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=ue,u=Yn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),qe===null)throw Error(s(349));(ye&127)!==0||Kp(o,i,a)}u.memoizedState=a;var h={value:a,getSnapshot:i};return u.queue=h,fm(jp.bind(null,o,h,e),[e]),o.flags|=2048,_r(9,{destroy:void 0},Qp.bind(null,o,h,a,i),null),a},useId:function(){var e=Yn(),i=qe.identifierPrefix;if(Te){var a=Ki,o=Zi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=ql++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=Cx++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Uf,useFormState:rm,useActionState:rm,useOptimistic:function(e){var i=Yn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Lf.bind(null,ue,!0,a),a.dispatch=i,[e,i]},useMemoCache:Mf,useCacheRefresh:function(){return Yn().memoizedState=Ox.bind(null,ue)},useEffectEvent:function(e){var i=Yn(),a={impl:e};return i.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Nf={readContext:On,use:Zl,useCallback:_m,useContext:On,useEffect:wf,useImperativeHandle:gm,useInsertionEffect:dm,useLayoutEffect:pm,useMemo:vm,useReducer:Kl,useRef:um,useState:function(){return Kl(ga)},useDebugValue:Rf,useDeferredValue:function(e,i){var a=hn();return xm(a,Ge.memoizedState,e,i)},useTransition:function(){var e=Kl(ga)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:Uo(e),i]},useSyncExternalStore:Zp,useId:bm,useHostTransitionStatus:Uf,useFormState:om,useActionState:om,useOptimistic:function(e,i){var a=hn();return tm(a,Ge,e,i)},useMemoCache:Mf,useCacheRefresh:Em};Nf.useEffectEvent=hm;var Cm={readContext:On,use:Zl,useCallback:_m,useContext:On,useEffect:wf,useImperativeHandle:gm,useInsertionEffect:dm,useLayoutEffect:pm,useMemo:vm,useReducer:Ef,useRef:um,useState:function(){return Ef(ga)},useDebugValue:Rf,useDeferredValue:function(e,i){var a=hn();return Ge===null?Cf(a,e,i):xm(a,Ge.memoizedState,e,i)},useTransition:function(){var e=Ef(ga)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:Uo(e),i]},useSyncExternalStore:Zp,useId:bm,useHostTransitionStatus:Uf,useFormState:cm,useActionState:cm,useOptimistic:function(e,i){var a=hn();return Ge!==null?tm(a,Ge,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:Em};Cm.useEffectEvent=hm;function Pf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:v({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Of={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=_i(),u=Ya(o);u.payload=i,a!=null&&(u.callback=a),i=Za(e,u,o),i!==null&&(ai(i,e,o),wo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=_i(),u=Ya(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=Za(e,u,o),i!==null&&(ai(i,e,o),wo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=_i(),o=Ya(a);o.tag=2,i!=null&&(o.callback=i),i=Za(e,o,a),i!==null&&(ai(i,e,a),wo(i,e,a))}};function Dm(e,i,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):i.prototype&&i.prototype.isPureReactComponent?!xo(a,o)||!xo(u,h):!0}function Um(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&Of.enqueueReplaceState(i,i.state,null)}function Fs(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Lm(e){Dl(e)}function Nm(e){console.error(e)}function Pm(e){Dl(e)}function $l(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Om(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function If(e,i,a){return a=Ya(a),a.tag=3,a.payload={element:null},a.callback=function(){$l(e,i)},a}function Im(e){return e=Ya(e),e.tag=3,e}function Fm(e,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Om(i,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Om(i,a,o),typeof u!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Fx(e,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&cr(i,a,u,!0),a=di.current,a!==null){switch(a.tag){case 31:case 13:return Ri===null?fc():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Hl?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),oh(e,o,u)),!1;case 22:return a.flags|=65536,o===Hl?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),oh(e,o,u)),!1}throw Error(s(435,a.tag))}return oh(e,o,u),fc(),!1}if(Te)return i=di.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==tf&&(e=Error(s(422),{cause:o}),Mo(Ei(e,a)))):(o!==tf&&(i=Error(s(423),{cause:o}),Mo(Ei(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ei(o,a),u=If(e.stateNode,o,u),hf(e,u),cn!==4&&(cn=2)),!1;var h=Error(s(520),{cause:o});if(h=Ei(h,a),Go===null?Go=[h]:Go.push(h),cn!==4&&(cn=2),i===null)return!0;o=Ei(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=If(a.stateNode,o,e),hf(a,e),!1;case 1:if(i=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ts===null||!ts.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Im(u),Fm(u,e,a,o),hf(a,u),!1}a=a.return}while(a!==null);return!1}var Ff=Error(s(461)),_n=!1;function In(e,i,a,o){i.child=e===null?Gp(i,null,a,o):Os(i,e.child,a,o)}function Bm(e,i,a,o,u){a=a.render;var h=i.ref;if("ref"in o){var x={};for(var w in o)w!=="ref"&&(x[w]=o[w])}else x=o;return Us(i),o=vf(e,i,a,x,h,u),w=xf(),e!==null&&!_n?(yf(e,i,u),_a(e,i,u)):(Te&&w&&Ju(i),i.flags|=1,In(e,i,o,u),i.child)}function zm(e,i,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Ku(h)&&h.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=h,Hm(e,i,h,o,u)):(e=Pl(a.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!Wf(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(x,o)&&e.ref===i.ref)return _a(e,i,u)}return i.flags|=1,e=fa(h,o),e.ref=i.ref,e.return=i,i.child=e}function Hm(e,i,a,o,u){if(e!==null){var h=e.memoizedProps;if(xo(h,o)&&e.ref===i.ref)if(_n=!1,i.pendingProps=o=h,Wf(e,u))(e.flags&131072)!==0&&(_n=!0);else return i.lanes=e.lanes,_a(e,i,u)}return Bf(e,i,a,o,u)}function Gm(e,i,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,i.child=null;return Vm(e,i,h,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(i,h!==null?h.cachePool:null),h!==null?Xp(i,h):pf(),Wp(i);else return o=i.lanes=536870912,Vm(e,i,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Bl(i,h.cachePool),Xp(i,h),Qa(),i.memoizedState=null):(e!==null&&Bl(i,null),pf(),Qa());return In(e,i,u,a),i.child}function Po(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Vm(e,i,a,o,u){var h=lf();return h=h===null?null:{parent:mn._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Bl(i,null),pf(),Wp(i),e!==null&&cr(e,i,o,!0),i.childLanes=u,null}function tc(e,i){return i=nc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function km(e,i,a){return Os(i,e.child,null,a),e=tc(i,i.pendingProps),e.flags|=2,pi(i),i.memoizedState=null,e}function Bx(e,i,a){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=tc(i,o),i.lanes=536870912,Po(null,e);if(gf(i),(e=Qe)?(e=e_(e,wi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Va!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=Ap(e),a.return=i,i.child=a,Pn=i,Qe=null)):e=null,e===null)throw Xa(i);return i.lanes=536870912,null}return tc(i,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(gf(i),u)if(i.flags&256)i.flags&=-257,i=km(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(_n||cr(e,i,a,!1),u=(a&e.childLanes)!==0,_n||u){if(o=qe,o!==null&&(x=li(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,ws(e,x),ai(o,e,x),Ff;fc(),i=km(e,i,a)}else e=h.treeContext,Qe=Ci(x.nextSibling),Pn=i,Te=!0,ka=null,wi=!1,e!==null&&Cp(i,e),i=tc(i,o),i.flags|=4096;return i}return e=fa(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function ec(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Bf(e,i,a,o,u){return Us(i),a=vf(e,i,a,o,void 0,u),o=xf(),e!==null&&!_n?(yf(e,i,u),_a(e,i,u)):(Te&&o&&Ju(i),i.flags|=1,In(e,i,a,u),i.child)}function Xm(e,i,a,o,u,h){return Us(i),i.updateQueue=null,a=Yp(i,o,a,u),qp(e),o=xf(),e!==null&&!_n?(yf(e,i,h),_a(e,i,h)):(Te&&o&&Ju(i),i.flags|=1,In(e,i,a,h),i.child)}function Wm(e,i,a,o,u){if(Us(i),i.stateNode===null){var h=sr,x=a.contextType;typeof x=="object"&&x!==null&&(h=On(x)),h=new a(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Of,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},uf(i),x=a.contextType,h.context=typeof x=="object"&&x!==null?On(x):sr,h.state=i.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Pf(i,a,x,o),h.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Of.enqueueReplaceState(h,h.state,null),Co(i,o,h,u),Ro(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){h=i.stateNode;var w=i.memoizedProps,G=Fs(a,w);h.props=G;var et=h.context,mt=a.contextType;x=sr,typeof mt=="object"&&mt!==null&&(x=On(mt));var vt=a.getDerivedStateFromProps;mt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||et!==x)&&Um(i,h,o,x),qa=!1;var ot=i.memoizedState;h.state=ot,Co(i,o,h,u),Ro(),et=i.memoizedState,w||ot!==et||qa?(typeof vt=="function"&&(Pf(i,a,vt,o),et=i.memoizedState),(G=qa||Dm(i,a,G,o,ot,et,x))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=et),h.props=o,h.state=et,h.context=x,o=G):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,ff(e,i),x=i.memoizedProps,mt=Fs(a,x),h.props=mt,vt=i.pendingProps,ot=h.context,et=a.contextType,G=sr,typeof et=="object"&&et!==null&&(G=On(et)),w=a.getDerivedStateFromProps,(et=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==vt||ot!==G)&&Um(i,h,o,G),qa=!1,ot=i.memoizedState,h.state=ot,Co(i,o,h,u),Ro();var ct=i.memoizedState;x!==vt||ot!==ct||qa||e!==null&&e.dependencies!==null&&Il(e.dependencies)?(typeof w=="function"&&(Pf(i,a,w,o),ct=i.memoizedState),(mt=qa||Dm(i,a,mt,o,ot,ct,G)||e!==null&&e.dependencies!==null&&Il(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,G)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ct),h.props=o,h.state=ct,h.context=G,o=mt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),o=!1)}return h=o,ec(e,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&o?(i.child=Os(i,e.child,null,u),i.child=Os(i,null,a,u)):In(e,i,a,u),i.memoizedState=h.state,e=i.child):e=_a(e,i,u),e}function qm(e,i,a,o){return Cs(),i.flags|=256,In(e,i,a,o),i.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:Op()}}function Gf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=gi),e}function Ym(e,i,a){var o=i.pendingProps,u=!1,h=(i.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),x&&(u=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,e===null){if(Te){if(u?Ka(i):Qa(),(e=Qe)?(e=e_(e,wi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Va!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=Ap(e),a.return=i,i.child=a,Pn=i,Qe=null)):e=null,e===null)throw Xa(i);return bh(e)?i.lanes=32:i.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Qa(),u=i.mode,w=nc({mode:"hidden",children:w},u),o=Rs(o,u,a,null),w.return=i,o.return=i,w.sibling=o,i.child=w,o=i.child,o.memoizedState=Hf(a),o.childLanes=Gf(e,x,a),i.memoizedState=zf,Po(null,o)):(Ka(i),Vf(i,w))}var G=e.memoizedState;if(G!==null&&(w=G.dehydrated,w!==null)){if(h)i.flags&256?(Ka(i),i.flags&=-257,i=kf(e,i,a)):i.memoizedState!==null?(Qa(),i.child=e.child,i.flags|=128,i=null):(Qa(),w=o.fallback,u=i.mode,o=nc({mode:"visible",children:o.children},u),w=Rs(w,u,a,null),w.flags|=2,o.return=i,w.return=i,o.sibling=w,i.child=o,Os(i,e.child,null,a),o=i.child,o.memoizedState=Hf(a),o.childLanes=Gf(e,x,a),i.memoizedState=zf,i=Po(null,o));else if(Ka(i),bh(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var et=x.dgst;x=et,o=Error(s(419)),o.stack="",o.digest=x,Mo({value:o,source:null,stack:null}),i=kf(e,i,a)}else if(_n||cr(e,i,a,!1),x=(a&e.childLanes)!==0,_n||x){if(x=qe,x!==null&&(o=li(x,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ws(e,o),ai(x,e,o),Ff;Mh(w)||fc(),i=kf(e,i,a)}else Mh(w)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,Qe=Ci(w.nextSibling),Pn=i,Te=!0,ka=null,wi=!1,e!==null&&Cp(i,e),i=Vf(i,o.children),i.flags|=4096);return i}return u?(Qa(),w=o.fallback,u=i.mode,G=e.child,et=G.sibling,o=fa(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,et!==null?w=fa(et,w):(w=Rs(w,u,a,null),w.flags|=2),w.return=i,o.return=i,o.sibling=w,i.child=o,Po(null,o),o=i.child,w=e.child.memoizedState,w===null?w=Hf(a):(u=w.cachePool,u!==null?(G=mn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Op(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Gf(e,x,a),i.memoizedState=zf,Po(e.child,o)):(Ka(i),a=e.child,e=a.sibling,a=fa(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(x=i.deletions,x===null?(i.deletions=[e],i.flags|=16):x.push(e)),i.child=a,i.memoizedState=null,a)}function Vf(e,i){return i=nc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function nc(e,i){return e=hi(22,e,null,i),e.lanes=0,e}function kf(e,i,a){return Os(i,e.child,null,a),e=Vf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Zm(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),af(e.return,i,a)}function Xf(e,i,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function Km(e,i,a){var o=i.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=fn.current,w=(x&2)!==0;if(w?(x=x&1|2,i.flags|=128):x&=1,yt(fn,x),In(e,i,o,a),o=Te?So:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zm(e,a,i);else if(e.tag===19)Zm(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&Xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Xf(i,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Xl(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Xf(i,!0,a,null,h,o);break;case"together":Xf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function _a(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),$a|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(cr(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=fa(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=fa(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Wf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Il(e)))}function zx(e,i,a){switch(i.tag){case 3:Mt(i,i.stateNode.containerInfo),Wa(i,mn,e.memoizedState.cache),Cs();break;case 27:case 5:ae(i);break;case 4:Mt(i,i.stateNode.containerInfo);break;case 10:Wa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,gf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ka(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Ym(e,i,a):(Ka(i),e=_a(e,i,a),e!==null?e.sibling:null);Ka(i);break;case 19:var u=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(cr(e,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return Km(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(fn,fn.current),o)break;return null;case 22:return i.lanes=0,Gm(e,i,a,i.pendingProps);case 24:Wa(i,mn,e.memoizedState.cache)}return _a(e,i,a)}function Qm(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)_n=!0;else{if(!Wf(e,a)&&(i.flags&128)===0)return _n=!1,zx(e,i,a);_n=(e.flags&131072)!==0}else _n=!1,Te&&(i.flags&1048576)!==0&&Rp(i,So,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=Ns(i.elementType),i.type=e,typeof e=="function")Ku(e)?(o=Fs(e,o),i.tag=1,i=Wm(null,i,e,o,a)):(i.tag=0,i=Bf(null,i,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===R){i.tag=11,i=Bm(null,i,e,o,a);break t}else if(u===F){i.tag=14,i=zm(null,i,e,o,a);break t}}throw i=ut(e)||e,Error(s(306,i,""))}}return i;case 0:return Bf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=Fs(o,i.pendingProps),Wm(e,i,o,u,a);case 3:t:{if(Mt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var h=i.memoizedState;u=h.element,ff(e,i),Co(i,o,null,a);var x=i.memoizedState;if(o=x.cache,Wa(i,mn,o),o!==h.cache&&sf(i,[mn],a,!0),Ro(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=qm(e,i,o,a);break t}else if(o!==u){u=Ei(Error(s(424)),i),Mo(u),i=qm(e,i,o,a);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=Ci(e.firstChild),Pn=i,Te=!0,ka=null,wi=!0,a=Gp(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Cs(),o===u){i=_a(e,i,a);break t}In(e,i,o,a)}i=i.child}return i;case 26:return ec(e,i),e===null?(a=o_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Te||(a=i.type,e=i.pendingProps,o=vc(at.current).createElement(a),o[dn]=i,o[Nn]=e,Fn(o,a,e),pn(o),i.stateNode=o):i.memoizedState=o_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ae(i),e===null&&Te&&(o=i.stateNode=a_(i.type,i.pendingProps,at.current),Pn=i,wi=!0,u=Qe,as(i.type)?(Eh=u,Qe=Ci(o.firstChild)):Qe=u),In(e,i,i.pendingProps.children,a),ec(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Te&&((u=o=Qe)&&(o=my(o,i.type,i.pendingProps,wi),o!==null?(i.stateNode=o,Pn=i,Qe=Ci(o.firstChild),wi=!1,u=!0):u=!1),u||Xa(i)),ae(i),u=i.type,h=i.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,xh(u,h)?o=null:x!==null&&xh(u,x)&&(i.flags|=32),i.memoizedState!==null&&(u=vf(e,i,Dx,null,null,a),Ko._currentValue=u),ec(e,i),In(e,i,o,a),i.child;case 6:return e===null&&Te&&((e=a=Qe)&&(a=gy(a,i.pendingProps,wi),a!==null?(i.stateNode=a,Pn=i,Qe=null,e=!0):e=!1),e||Xa(i)),null;case 13:return Ym(e,i,a);case 4:return Mt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Os(i,null,o,a):In(e,i,o,a),i.child;case 11:return Bm(e,i,i.type,i.pendingProps,a);case 7:return In(e,i,i.pendingProps,a),i.child;case 8:return In(e,i,i.pendingProps.children,a),i.child;case 12:return In(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Wa(i,i.type,o.value),In(e,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Us(i),u=On(u),o=o(u),i.flags|=1,In(e,i,o,a),i.child;case 14:return zm(e,i,i.type,i.pendingProps,a);case 15:return Hm(e,i,i.type,i.pendingProps,a);case 19:return Km(e,i,a);case 31:return Bx(e,i,a);case 22:return Gm(e,i,a,i.pendingProps);case 24:return Us(i),o=On(mn),e===null?(u=lf(),u===null&&(u=qe,h=rf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),i.memoizedState={parent:o,cache:u},uf(i),Wa(i,mn,u)):((e.lanes&a)!==0&&(ff(e,i),Co(i,null,null,a),Ro()),u=e.memoizedState,h=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Wa(i,mn,o)):(o=h.cache,Wa(i,mn,o),o!==u.cache&&sf(i,[mn],a,!0))),In(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function va(e){e.flags|=4}function qf(e,i,a,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(bg())e.flags|=8192;else throw Ps=Hl,cf}else e.flags&=-16777217}function jm(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!h_(i))if(bg())e.flags|=8192;else throw Ps=Hl,cf}function ic(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?St():536870912,e.lanes|=i,Sr|=i)}function Oo(e,i){if(!Te)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function Hx(e,i,a){var o=i.pendingProps;switch($u(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),pa(mn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(lr(i)?va(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ef())),je(i),null;case 26:var u=i.type,h=i.memoizedState;return e===null?(va(i),h!==null?(je(i),jm(i,h)):(je(i),qf(i,u,null,o,a))):h?h!==e.memoizedState?(va(i),je(i),jm(i,h)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&va(i),je(i),qf(i,u,e,o,a)),null;case 27:if(Jt(i),a=at.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&va(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return je(i),null}e=Et.current,lr(i)?Dp(i):(e=a_(u,o,a),i.stateNode=e,va(i))}return je(i),null;case 5:if(Jt(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&va(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return je(i),null}if(h=Et.current,lr(i))Dp(i);else{var x=vc(at.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[dn]=i,h[Nn]=o;t:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break t;for(;x.sibling===null;){if(x.return===null||x.return===i)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=h;t:switch(Fn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&va(i)}}return je(i),qf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&va(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=at.current,lr(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[dn]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Yg(e.nodeValue,a)),e||Xa(i,!0)}else e=vc(e).createTextNode(o),e[dn]=i,i.stateNode=e}return je(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=lr(i),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[dn]=i}else Cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else a=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(pi(i),i):(pi(i),null);if((i.flags&128)!==0)throw Error(s(558))}return je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=lr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=i}else Cs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),u=!1}else u=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(pi(i),i):(pi(i),null)}return pi(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),ic(i,i.updateQueue),je(i),null);case 4:return zt(),e===null&&ph(i.stateNode.containerInfo),je(i),null;case 10:return pa(i.type),je(i),null;case 19:if(Z(fn),o=i.memoizedState,o===null)return je(i),null;if(u=(i.flags&128)!==0,h=o.rendering,h===null)if(u)Oo(o,!1);else{if(cn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=Xl(e),h!==null){for(i.flags|=128,Oo(o,!1),e=h.updateQueue,i.updateQueue=e,ic(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Tp(a,e),a=a.sibling;return yt(fn,fn.current&1|2),Te&&ha(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&He()>lc&&(i.flags|=128,u=!0,Oo(o,!1),i.lanes=4194304)}else{if(!u)if(e=Xl(h),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,ic(i,e),Oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Te)return je(i),null}else 2*He()-o.renderingStartTime>lc&&a!==536870912&&(i.flags|=128,u=!0,Oo(o,!1),i.lanes=4194304);o.isBackwards?(h.sibling=i.child,i.child=h):(e=o.last,e!==null?e.sibling=h:i.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=He(),e.sibling=null,a=fn.current,yt(fn,u?a&1|2:a&1),Te&&ha(i,o.treeForkCount),e):(je(i),null);case 22:case 23:return pi(i),mf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),a=i.updateQueue,a!==null&&ic(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&Z(Ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),pa(mn),je(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Gx(e,i){switch($u(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return pa(mn),zt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Jt(i),null;case 31:if(i.memoizedState!==null){if(pi(i),i.alternate===null)throw Error(s(340));Cs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(pi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Cs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Z(fn),null;case 4:return zt(),null;case 10:return pa(i.type),null;case 22:case 23:return pi(i),mf(),e!==null&&Z(Ls),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return pa(mn),null;case 25:return null;default:return null}}function Jm(e,i){switch($u(i),i.tag){case 3:pa(mn),zt();break;case 26:case 27:case 5:Jt(i);break;case 4:zt();break;case 31:i.memoizedState!==null&&pi(i);break;case 13:pi(i);break;case 19:Z(fn);break;case 10:pa(i.type);break;case 22:case 23:pi(i),mf(),e!==null&&Z(Ls);break;case 24:pa(mn)}}function Io(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(w){ze(i,i.return,w)}}function ja(e,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,u=i;var G=a,et=w;try{et()}catch(mt){ze(u,G,mt)}}}o=o.next}while(o!==h)}}catch(mt){ze(i,i.return,mt)}}function $m(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{kp(i,a)}catch(o){ze(e,e.return,o)}}}function tg(e,i,a){a.props=Fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ze(e,i,o)}}function Fo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ze(e,i,u)}}function Qi(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ze(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,i,u)}else a.current=null}function eg(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function Yf(e,i,a){try{var o=e.stateNode;cy(o,e.type,a,i),o[Nn]=i}catch(u){ze(e,e.return,u)}}function ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&as(e.type)||e.tag===4}function Zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&as(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ca));else if(o!==4&&(o===27&&as(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Kf(e,i,a),e=e.sibling;e!==null;)Kf(e,i,a),e=e.sibling}function ac(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&as(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ac(e,i,a),e=e.sibling;e!==null;)ac(e,i,a),e=e.sibling}function ig(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Fn(i,o,a),i[dn]=e,i[Nn]=a}catch(h){ze(e,e.return,h)}}var xa=!1,vn=!1,Qf=!1,ag=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function Vx(e,i){if(e=e.containerInfo,_h=Tc,e=gp(e),Vu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,w=-1,G=-1,et=0,mt=0,vt=e,ot=null;e:for(;;){for(var ct;vt!==a||u!==0&&vt.nodeType!==3||(w=x+u),vt!==h||o!==0&&vt.nodeType!==3||(G=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)ot=vt,vt=ct;for(;;){if(vt===e)break e;if(ot===a&&++et===u&&(w=x),ot===h&&++mt===o&&(G=x),(ct=vt.nextSibling)!==null)break;vt=ot,ot=vt.parentNode}vt=ct}a=w===-1||G===-1?null:{start:w,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(vh={focusedElem:e,selectionRange:a},Tc=!1,Rn=i;Rn!==null;)if(i=Rn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Rn=e;else for(;Rn!==null;){switch(i=Rn,h=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=i,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Xt=Fs(a.type,u);e=o.getSnapshotBeforeUpdate(Xt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){ze(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Sh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Rn=e;break}Rn=i.return}}function sg(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),o&4&&Io(5,a);break;case 1:if(Sa(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(x){ze(a,a.return,x)}else{var u=Fs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(x){ze(a,a.return,x)}}o&64&&$m(a),o&512&&Fo(a,a.return);break;case 3:if(Sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{kp(e,i)}catch(x){ze(a,a.return,x)}}break;case 27:i===null&&o&4&&ig(a);case 26:case 5:Sa(e,a),i===null&&o&4&&eg(a),o&512&&Fo(a,a.return);break;case 12:Sa(e,a);break;case 31:Sa(e,a),o&4&&lg(e,a);break;case 13:Sa(e,a),o&4&&cg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=jx.bind(null,a),_y(e,a))));break;case 22:if(o=a.memoizedState!==null||xa,!o){i=i!==null&&i.memoizedState!==null||vn,u=xa;var h=vn;xa=o,(vn=i)&&!h?Ma(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),xa=u,vn=h}break;case 30:break;default:Sa(e,a)}}function rg(e){var i=e.alternate;i!==null&&(e.alternate=null,rg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ba(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,ti=!1;function ya(e,i,a){for(a=a.child;a!==null;)og(e,i,a),a=a.sibling}function og(e,i,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:vn||Qi(a,i),ya(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||Qi(a,i);var o=en,u=ti;as(a.type)&&(en=a.stateNode,ti=!1),ya(e,i,a),qo(a.stateNode),en=o,ti=u;break;case 5:vn||Qi(a,i);case 6:if(o=en,u=ti,en=null,ya(e,i,a),en=o,ti=u,en!==null)if(ti)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(h){ze(a,i,h)}else try{en.removeChild(a.stateNode)}catch(h){ze(a,i,h)}break;case 18:en!==null&&(ti?(e=en,$g(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cr(e)):$g(en,a.stateNode));break;case 4:o=en,u=ti,en=a.stateNode.containerInfo,ti=!0,ya(e,i,a),en=o,ti=u;break;case 0:case 11:case 14:case 15:ja(2,a,i),vn||ja(4,a,i),ya(e,i,a);break;case 1:vn||(Qi(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&tg(a,i,o)),ya(e,i,a);break;case 21:ya(e,i,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,ya(e,i,a),vn=o;break;default:ya(e,i,a)}}function lg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cr(e)}catch(a){ze(i,i.return,a)}}}function cg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cr(e)}catch(a){ze(i,i.return,a)}}function kx(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new ag),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new ag),i;default:throw Error(s(435,e.tag))}}function sc(e,i){var a=kx(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var u=Jx.bind(null,e,o);o.then(u,u)}})}function ei(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=i,w=x;t:for(;w!==null;){switch(w.tag){case 27:if(as(w.type)){en=w.stateNode,ti=!1;break t}break;case 5:en=w.stateNode,ti=!1;break t;case 3:case 4:en=w.stateNode.containerInfo,ti=!0;break t}w=w.return}if(en===null)throw Error(s(160));og(h,x,u),en=null,ti=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)ug(i,e),i=i.sibling}var Ii=null;function ug(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(i,e),ni(e),o&4&&(ja(3,e,e.return),Io(3,e),ja(5,e,e.return));break;case 1:ei(i,e),ni(e),o&512&&(vn||a===null||Qi(a,a.return)),o&64&&xa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ii;if(ei(i,e),ni(e),o&512&&(vn||a===null||Qi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Fa]||h[dn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Fn(h,o,a),h[dn]=e,pn(h),o=h;break t;case"link":var x=u_("link","href",u).get(o+(a.href||""));if(x){for(var w=0;w<x.length;w++)if(h=x[w],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(w,1);break e}}h=u.createElement(o),Fn(h,o,a),u.head.appendChild(h);break;case"meta":if(x=u_("meta","content",u).get(o+(a.content||""))){for(w=0;w<x.length;w++)if(h=x[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(w,1);break e}}h=u.createElement(o),Fn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[dn]=e,pn(h),o=h}e.stateNode=o}else f_(u,e.type,e.stateNode);else e.stateNode=c_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?f_(u,e.type,e.stateNode):c_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Yf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ei(i,e),ni(e),o&512&&(vn||a===null||Qi(a,a.return)),a!==null&&o&4&&Yf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ei(i,e),ni(e),o&512&&(vn||a===null||Qi(a,a.return)),e.flags&32){u=e.stateNode;try{ui(u,"")}catch(Xt){ze(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Yf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Qf=!0);break;case 6:if(ei(i,e),ni(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){ze(e,e.return,Xt)}}break;case 3:if(Sc=null,u=Ii,Ii=xc(i.containerInfo),ei(i,e),Ii=u,ni(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cr(i.containerInfo)}catch(Xt){ze(e,e.return,Xt)}Qf&&(Qf=!1,fg(e));break;case 4:o=Ii,Ii=xc(e.stateNode.containerInfo),ei(i,e),ni(e),Ii=o;break;case 12:ei(i,e),ni(e);break;case 31:ei(i,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sc(e,o)));break;case 13:ei(i,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(oc=He()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sc(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,et=xa,mt=vn;if(xa=et||u,vn=mt||G,ei(i,e),vn=mt,xa=et,ni(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||G||xa||vn||Bs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){G=a=i;try{if(h=G.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=G.stateNode;var vt=G.memoizedProps.style,ot=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;w.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Xt){ze(G,G.return,Xt)}}}else if(i.tag===6){if(a===null){G=i;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Xt){ze(G,G.return,Xt)}}}else if(i.tag===18){if(a===null){G=i;try{var ct=G.stateNode;u?t_(ct,!0):t_(G.stateNode,!1)}catch(Xt){ze(G,G.return,Xt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,sc(e,a))));break;case 19:ei(i,e),ni(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,sc(e,o)));break;case 30:break;case 21:break;default:ei(i,e),ni(e)}}function ni(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(ng(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Zf(e);ac(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(ui(x,""),a.flags&=-33);var w=Zf(e);ac(e,w,x);break;case 3:case 4:var G=a.stateNode.containerInfo,et=Zf(e);Kf(e,et,G);break;default:throw Error(s(161))}}catch(mt){ze(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function fg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;fg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Sa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)sg(e,i.alternate,i),i=i.sibling}function Bs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ja(4,i,i.return),Bs(i);break;case 1:Qi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&tg(i,i.return,a),Bs(i);break;case 27:qo(i.stateNode);case 26:case 5:Qi(i,i.return),Bs(i);break;case 22:i.memoizedState===null&&Bs(i);break;case 30:Bs(i);break;default:Bs(i)}e=e.sibling}}function Ma(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,h=i,x=h.flags;switch(h.tag){case 0:case 11:case 15:Ma(u,h,a),Io(4,h);break;case 1:if(Ma(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){ze(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Vp(G[u],w)}catch(et){ze(o,o.return,et)}}a&&x&64&&$m(h),Fo(h,h.return);break;case 27:ig(h);case 26:case 5:Ma(u,h,a),a&&o===null&&x&4&&eg(h),Fo(h,h.return);break;case 12:Ma(u,h,a);break;case 31:Ma(u,h,a),a&&x&4&&lg(u,h);break;case 13:Ma(u,h,a),a&&x&4&&cg(u,h);break;case 22:h.memoizedState===null&&Ma(u,h,a),Fo(h,h.return);break;case 30:break;default:Ma(u,h,a)}i=i.sibling}}function jf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&bo(a))}function Jf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&bo(e))}function Fi(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)hg(e,i,a,o),i=i.sibling}function hg(e,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(e,i,a,o),u&2048&&Io(9,i);break;case 1:Fi(e,i,a,o);break;case 3:Fi(e,i,a,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&bo(e)));break;case 12:if(u&2048){Fi(e,i,a,o),e=i.stateNode;try{var h=i.memoizedProps,x=h.id,w=h.onPostCommit;typeof w=="function"&&w(x,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){ze(i,i.return,G)}}else Fi(e,i,a,o);break;case 31:Fi(e,i,a,o);break;case 13:Fi(e,i,a,o);break;case 23:break;case 22:h=i.stateNode,x=i.alternate,i.memoizedState!==null?h._visibility&2?Fi(e,i,a,o):Bo(e,i):h._visibility&2?Fi(e,i,a,o):(h._visibility|=2,vr(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&jf(x,i);break;case 24:Fi(e,i,a,o),u&2048&&Jf(i.alternate,i);break;default:Fi(e,i,a,o)}}function vr(e,i,a,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=e,x=i,w=a,G=o,et=x.flags;switch(x.tag){case 0:case 11:case 15:vr(h,x,w,G,u),Io(8,x);break;case 23:break;case 22:var mt=x.stateNode;x.memoizedState!==null?mt._visibility&2?vr(h,x,w,G,u):Bo(h,x):(mt._visibility|=2,vr(h,x,w,G,u)),u&&et&2048&&jf(x.alternate,x);break;case 24:vr(h,x,w,G,u),u&&et&2048&&Jf(x.alternate,x);break;default:vr(h,x,w,G,u)}i=i.sibling}}function Bo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,u=o.flags;switch(o.tag){case 22:Bo(a,o),u&2048&&jf(o.alternate,o);break;case 24:Bo(a,o),u&2048&&Jf(o.alternate,o);break;default:Bo(a,o)}i=i.sibling}}var zo=8192;function xr(e,i,a){if(e.subtreeFlags&zo)for(e=e.child;e!==null;)dg(e,i,a),e=e.sibling}function dg(e,i,a){switch(e.tag){case 26:xr(e,i,a),e.flags&zo&&e.memoizedState!==null&&Cy(a,Ii,e.memoizedState,e.memoizedProps);break;case 5:xr(e,i,a);break;case 3:case 4:var o=Ii;Ii=xc(e.stateNode.containerInfo),xr(e,i,a),Ii=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=zo,zo=16777216,xr(e,i,a),zo=o):xr(e,i,a));break;default:xr(e,i,a)}}function pg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ho(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Rn=o,gg(o,e)}pg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mg(e),e=e.sibling}function mg(e){switch(e.tag){case 0:case 11:case 15:Ho(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Ho(e);break;case 12:Ho(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,rc(e)):Ho(e);break;default:Ho(e)}}function rc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Rn=o,gg(o,e)}pg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ja(8,i,i.return),rc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,rc(i));break;default:rc(i)}e=e.sibling}}function gg(e,i){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:ja(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:bo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Rn=o;else t:for(a=e;Rn!==null;){o=Rn;var u=o.sibling,h=o.return;if(rg(o),o===a){Rn=null;break t}if(u!==null){u.return=h,Rn=u;break t}Rn=h}}}var Xx={getCacheForType:function(e){var i=On(mn),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return On(mn).controller.signal}},Wx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,qe=null,ve=null,ye=0,Be=0,mi=null,Ja=!1,yr=!1,$f=!1,ba=0,cn=0,$a=0,zs=0,th=0,gi=0,Sr=0,Go=null,ii=null,eh=!1,oc=0,_g=0,lc=1/0,cc=null,ts=null,bn=0,es=null,Mr=null,Ea=0,nh=0,ih=null,vg=null,Vo=0,ah=null;function _i(){return(Ue&2)!==0&&ye!==0?ye&-ye:I.T!==null?uh():uo()}function xg(){if(gi===0)if((ye&536870912)===0||Te){var e=se;se<<=1,(se&3932160)===0&&(se=262144),gi=e}else gi=536870912;return e=di.current,e!==null&&(e.flags|=32),gi}function ai(e,i,a){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(br(e,0),ns(e,ye,gi,!1)),Gt(e,a),((Ue&2)===0||e!==qe)&&(e===qe&&((Ue&2)===0&&(zs|=a),cn===4&&ns(e,ye,gi,!1)),ji(e))}function yg(e,i,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Rt(e,i),u=o?Zx(e,i):rh(e,i,!0),h=o;do{if(u===0){yr&&!o&&ns(e,i,0,!1);break}else{if(a=e.current.alternate,h&&!qx(a)){u=rh(e,i,!1),h=!1;continue}if(u===2){if(h=i,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;t:{var w=e;u=Go;var G=w.current.memoizedState.isDehydrated;if(G&&(br(w,x).flags|=256),x=rh(w,x,!1),x!==2){if($f&&!G){w.errorRecoveryDisabledLanes|=h,zs|=h,u=4;break t}h=ii,ii=u,h!==null&&(ii===null?ii=h:ii.push.apply(ii,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){br(e,0),ns(e,i,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:ns(o,i,gi,!Ja);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=oc+300-He(),10<u)){if(ns(o,i,gi,!Ja),gt(o,0,!0)!==0)break t;Ea=i,o.timeoutHandle=jg(Sg.bind(null,o,a,ii,cc,eh,i,gi,zs,Sr,Ja,h,"Throttled",-0,0),u);break t}Sg(o,a,ii,cc,eh,i,gi,zs,Sr,Ja,h,null,-0,0)}}break}while(!0);ji(e)}function Sg(e,i,a,o,u,h,x,w,G,et,mt,vt,ot,ct){if(e.timeoutHandle=-1,vt=i.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},dg(i,h,vt);var Xt=(h&62914560)===h?oc-He():(h&4194048)===h?_g-He():0;if(Xt=Dy(vt,Xt),Xt!==null){Ea=h,e.cancelPendingCommit=Xt(Cg.bind(null,e,i,h,a,o,u,x,w,G,mt,vt,null,ot,ct)),ns(e,h,x,!et);return}}Cg(e,i,h,a,o,u,x,w,G)}function qx(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!fi(h(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ns(e,i,a,o){i&=~th,i&=~zs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var h=31-Ft(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&Pe(e,a,i)}function uc(){return(Ue&6)===0?(ko(0),!1):!0}function sh(){if(ve!==null){if(Be===0)var e=ve.return;else e=ve,da=Ds=null,Sf(e),dr=null,To=0,e=ve;for(;e!==null;)Jm(e.alternate,e),e=e.return;ve=null}}function br(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,sh(),qe=e,ve=a=fa(e.current,null),ye=i,Be=0,mi=null,Ja=!1,yr=Rt(e,i),$f=!1,Sr=gi=th=zs=$a=cn=0,ii=Go=null,eh=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Ft(o),h=1<<u;i|=e[u],o&=~h}return ba=i,Ul(),a}function Mg(e,i){ue=null,I.H=No,i===hr||i===zl?(i=Bp(),Be=3):i===cf?(i=Bp(),Be=4):Be=i===Ff?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mi=i,ve===null&&(cn=1,$l(e,Ei(i,e.current)))}function bg(){var e=di.current;return e===null?!0:(ye&4194048)===ye?Ri===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Ri:!1}function Eg(){var e=I.H;return I.H=No,e===null?No:e}function Tg(){var e=I.A;return I.A=Xx,e}function fc(){cn=4,Ja||(ye&4194048)!==ye&&di.current!==null||(yr=!0),($a&134217727)===0&&(zs&134217727)===0||qe===null||ns(qe,ye,gi,!1)}function rh(e,i,a){var o=Ue;Ue|=2;var u=Eg(),h=Tg();(qe!==e||ye!==i)&&(cc=null,br(e,i)),i=!1;var x=cn;t:do try{if(Be!==0&&ve!==null){var w=ve,G=mi;switch(Be){case 8:sh(),x=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(i=!0);var et=Be;if(Be=0,mi=null,Er(e,w,G,et),a&&yr){x=0;break t}break;default:et=Be,Be=0,mi=null,Er(e,w,G,et)}}Yx(),x=cn;break}catch(mt){Mg(e,mt)}while(!0);return i&&e.shellSuspendCounter++,da=Ds=null,Ue=o,I.H=u,I.A=h,ve===null&&(qe=null,ye=0,Ul()),x}function Yx(){for(;ve!==null;)Ag(ve)}function Zx(e,i){var a=Ue;Ue|=2;var o=Eg(),u=Tg();qe!==e||ye!==i?(cc=null,lc=He()+500,br(e,i)):yr=Rt(e,i);t:do try{if(Be!==0&&ve!==null){i=ve;var h=mi;e:switch(Be){case 1:Be=0,mi=null,Er(e,i,h,1);break;case 2:case 9:if(Ip(h)){Be=0,mi=null,wg(i);break}i=function(){Be!==2&&Be!==9||qe!==e||(Be=7),ji(e)},h.then(i,i);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Ip(h)?(Be=0,mi=null,wg(i)):(Be=0,mi=null,Er(e,i,h,7));break;case 5:var x=null;switch(ve.tag){case 26:x=ve.memoizedState;case 5:case 27:var w=ve;if(x?h_(x):w.stateNode.complete){Be=0,mi=null;var G=w.sibling;if(G!==null)ve=G;else{var et=w.return;et!==null?(ve=et,hc(et)):ve=null}break e}}Be=0,mi=null,Er(e,i,h,5);break;case 6:Be=0,mi=null,Er(e,i,h,6);break;case 8:sh(),cn=6;break t;default:throw Error(s(462))}}Kx();break}catch(mt){Mg(e,mt)}while(!0);return da=Ds=null,I.H=o,I.A=u,Ue=a,ve!==null?0:(qe=null,ye=0,Ul(),cn)}function Kx(){for(;ve!==null&&!on();)Ag(ve)}function Ag(e){var i=Qm(e.alternate,e,ba);e.memoizedProps=e.pendingProps,i===null?hc(e):ve=i}function wg(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Xm(a,i,i.pendingProps,i.type,void 0,ye);break;case 11:i=Xm(a,i,i.pendingProps,i.type.render,i.ref,ye);break;case 5:Sf(i);default:Jm(a,i),i=ve=Tp(i,ba),i=Qm(a,i,ba)}e.memoizedProps=e.pendingProps,i===null?hc(e):ve=i}function Er(e,i,a,o){da=Ds=null,Sf(i),dr=null,To=0;var u=i.return;try{if(Fx(e,u,i,a,ye)){cn=1,$l(e,Ei(a,e.current)),ve=null;return}}catch(h){if(u!==null)throw ve=u,h;cn=1,$l(e,Ei(a,e.current)),ve=null;return}i.flags&32768?(Te||o===1?e=!0:yr||(ye&536870912)!==0?e=!1:(Ja=e=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),Rg(i,e)):hc(i)}function hc(e){var i=e;do{if((i.flags&32768)!==0){Rg(i,Ja);return}e=i.return;var a=Hx(i.alternate,i,ba);if(a!==null){ve=a;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=e}while(i!==null);cn===0&&(cn=5)}function Rg(e,i){do{var a=Gx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);cn=6,ve=null}function Cg(e,i,a,o,u,h,x,w,G){e.cancelPendingCommit=null;do dc();while(bn!==0);if((Ue&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(h=i.lanes|i.childLanes,h|=Yu,Je(e,a,h,x,w,G),e===qe&&(ve=qe=null,ye=0),Mr=i,es=e,Ea=a,nh=h,ih=u,vg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$x(J,function(){return Pg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=H.p,H.p=2,x=Ue,Ue|=4;try{Vx(e,i,a)}finally{Ue=x,H.p=u,I.T=o}}bn=1,Dg(),Ug(),Lg()}}function Dg(){if(bn===1){bn=0;var e=es,i=Mr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=Ue;Ue|=4;try{ug(i,e);var h=vh,x=gp(e.containerInfo),w=h.focusedElem,G=h.selectionRange;if(x!==w&&w&&w.ownerDocument&&mp(w.ownerDocument.documentElement,w)){if(G!==null&&Vu(w)){var et=G.start,mt=G.end;if(mt===void 0&&(mt=et),"selectionStart"in w)w.selectionStart=et,w.selectionEnd=Math.min(mt,w.value.length);else{var vt=w.ownerDocument||document,ot=vt&&vt.defaultView||window;if(ot.getSelection){var ct=ot.getSelection(),Xt=w.textContent.length,ne=Math.min(G.start,Xt),ke=G.end===void 0?ne:Math.min(G.end,Xt);!ct.extend&&ne>ke&&(x=ke,ke=ne,ne=x);var Q=pp(w,ne),V=pp(w,ke);if(Q&&V&&(ct.rangeCount!==1||ct.anchorNode!==Q.node||ct.anchorOffset!==Q.offset||ct.focusNode!==V.node||ct.focusOffset!==V.offset)){var tt=vt.createRange();tt.setStart(Q.node,Q.offset),ct.removeAllRanges(),ne>ke?(ct.addRange(tt),ct.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),ct.addRange(tt))}}}}for(vt=[],ct=w;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<vt.length;w++){var _t=vt[w];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Tc=!!_h,vh=_h=null}finally{Ue=u,H.p=o,I.T=a}}e.current=i,bn=2}}function Ug(){if(bn===2){bn=0;var e=es,i=Mr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=Ue;Ue|=4;try{sg(e,i.alternate,i)}finally{Ue=u,H.p=o,I.T=a}}bn=3}}function Lg(){if(bn===4||bn===3){bn=0,q();var e=es,i=Mr,a=Ea,o=vg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?bn=5:(bn=0,Mr=es=null,Ng(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ts=null),co(a),i=i.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ft,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=I.T,u=H.p,H.p=2,I.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var w=o[x];h(w.value,{componentStack:w.stack})}}finally{I.T=i,H.p=u}}(Ea&3)!==0&&dc(),ji(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===ah?Vo++:(Vo=0,ah=e):Vo=0,ko(0)}}function Ng(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,bo(i)))}function dc(){return Dg(),Ug(),Lg(),Pg()}function Pg(){if(bn!==5)return!1;var e=es,i=nh;nh=0;var a=co(Ea),o=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=ih,ih=null;var h=es,x=Ea;if(bn=0,Mr=es=null,Ea=0,(Ue&6)!==0)throw Error(s(331));var w=Ue;if(Ue|=4,mg(h.current),hg(h,h.current,x,a),Ue=w,ko(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ft,h)}catch{}return!0}finally{H.p=u,I.T=o,Ng(e,i)}}function Og(e,i,a){i=Ei(a,i),i=If(e.stateNode,i,2),e=Za(e,i,2),e!==null&&(Gt(e,2),ji(e))}function ze(e,i,a){if(e.tag===3)Og(e,e,a);else for(;i!==null;){if(i.tag===3){Og(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ts===null||!ts.has(o))){e=Ei(a,e),a=Im(2),o=Za(i,a,2),o!==null&&(Fm(a,o,i,e),Gt(o,2),ji(o));break}}i=i.return}}function oh(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Wx;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||($f=!0,u.add(a),e=Qx.bind(null,e,i,a),i.then(e,e))}function Qx(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ye&a)===a&&(cn===4||cn===3&&(ye&62914560)===ye&&300>He()-oc?(Ue&2)===0&&br(e,0):th|=a,Sr===ye&&(Sr=0)),ji(e)}function Ig(e,i){i===0&&(i=St()),e=ws(e,i),e!==null&&(Gt(e,i),ji(e))}function jx(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Ig(e,a)}function Jx(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),Ig(e,a)}function $x(e,i){return un(e,i)}var pc=null,Tr=null,lh=!1,mc=!1,ch=!1,is=0;function ji(e){e!==Tr&&e.next===null&&(Tr===null?pc=Tr=e:Tr=Tr.next=e),mc=!0,lh||(lh=!0,ey())}function ko(e,i){if(!ch&&mc){ch=!0;do for(var a=!1,o=pc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-Ft(42|e)+1)-1,h&=u&~(x&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Hg(o,h))}else h=ye,h=gt(o,o===qe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Rt(o,h)||(a=!0,Hg(o,h));o=o.next}while(a);ch=!1}}function ty(){Fg()}function Fg(){mc=lh=!1;var e=0;is!==0&&fy()&&(e=is);for(var i=He(),a=null,o=pc;o!==null;){var u=o.next,h=Bg(o,i);h===0?(o.next=null,a===null?pc=u:a.next=u,u===null&&(Tr=a)):(a=o,(e!==0||(h&3)!==0)&&(mc=!0)),o=u}bn!==0&&bn!==5||ko(e),is!==0&&(is=0)}function Bg(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Ft(h),w=1<<x,G=u[x];G===-1?((w&a)===0||(w&o)!==0)&&(u[x]=It(w,i)):G<=i&&(e.expiredLanes|=w),h&=~w}if(i=qe,a=ye,a=gt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&Ye(o),co(a)){case 2:case 8:a=b;break;case 32:a=J;break;case 268435456:a=dt;break;default:a=J}return o=zg.bind(null,e),a=un(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&Ye(o),e.callbackPriority=2,e.callbackNode=null,2}function zg(e,i){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dc()&&e.callbackNode!==a)return null;var o=ye;return o=gt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(yg(e,o,i),Bg(e,He()),e.callbackNode!=null&&e.callbackNode===a?zg.bind(null,e):null)}function Hg(e,i){if(dc())return null;yg(e,i,!0)}function ey(){dy(function(){(Ue&6)!==0?un(D,ty):Fg()})}function uh(){if(is===0){var e=ur;e===0&&(e=$t,$t<<=1,($t&261888)===0&&($t=256)),is=e}return is}function Gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bs(""+e)}function Vg(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function ny(e,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var h=Gg((u[Nn]||null).action),x=o.submitter;x&&(i=(i=x[Nn]||null)?Gg(i.formAction):x.getAttribute("formAction"),i!==null&&(h=i,x=null));var w=new wl("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(is!==0){var G=x?Vg(u,x):new FormData(u);Df(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(w.preventDefault(),G=x?Vg(u,x):new FormData(u),Df(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var fh=0;fh<qu.length;fh++){var hh=qu[fh],iy=hh.toLowerCase(),ay=hh[0].toUpperCase()+hh.slice(1);Oi(iy,"on"+ay)}Oi(xp,"onAnimationEnd"),Oi(yp,"onAnimationIteration"),Oi(Sp,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(yx,"onTransitionRun"),Oi(Sx,"onTransitionStart"),Oi(Mx,"onTransitionCancel"),Oi(Mp,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function kg(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(i)for(var x=o.length-1;0<=x;x--){var w=o[x],G=w.instance,et=w.currentTarget;if(w=w.listener,G!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=et;try{h(u)}catch(mt){Dl(mt)}u.currentTarget=null,h=G}else for(x=0;x<o.length;x++){if(w=o[x],G=w.instance,et=w.currentTarget,w=w.listener,G!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=et;try{h(u)}catch(mt){Dl(mt)}u.currentTarget=null,h=G}}}}function xe(e,i){var a=i[ys];a===void 0&&(a=i[ys]=new Set);var o=e+"__bubble";a.has(o)||(Xg(i,e,2,!1),a.add(o))}function dh(e,i,a){var o=0;i&&(o|=4),Xg(a,e,o,i)}var gc="_reactListening"+Math.random().toString(36).slice(2);function ph(e){if(!e[gc]){e[gc]=!0,bl.forEach(function(a){a!=="selectionchange"&&(sy.has(a)||dh(a,!1,e),dh(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[gc]||(i[gc]=!0,dh("selectionchange",!1,i))}}function Xg(e,i,a,o){switch(x_(i)){case 2:var u=Ny;break;case 8:u=Py;break;default:u=Ch}a=u.bind(null,i,a,e),u=void 0,!Nu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function mh(e,i,a,o,u){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var w=o.stateNode.containerInfo;if(w===u)break;if(x===4)for(x=o.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;w!==null;){if(x=oa(w),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){o=h=x;continue t}w=w.parentNode}}o=o.return}K0(function(){var et=h,mt=Uu(a),vt=[];t:{var ot=bp.get(e);if(ot!==void 0){var ct=wl,Xt=e;switch(e){case"keypress":if(Tl(a)===0)break t;case"keydown":case"keyup":ct=J1;break;case"focusin":Xt="focus",ct=Fu;break;case"focusout":Xt="blur",ct=Fu;break;case"beforeblur":case"afterblur":ct=Fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=J0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=H1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=ex;break;case xp:case yp:case Sp:ct=k1;break;case Mp:ct=ix;break;case"scroll":case"scrollend":ct=B1;break;case"wheel":ct=sx;break;case"copy":case"cut":case"paste":ct=W1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=tp;break;case"toggle":case"beforetoggle":ct=ox}var ne=(i&4)!==0,ke=!ne&&(e==="scroll"||e==="scrollend"),Q=ne?ot!==null?ot+"Capture":null:ot;ne=[];for(var V=et,tt;V!==null;){var _t=V;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||Q===null||(_t=fo(V,Q),_t!=null&&ne.push(Wo(V,_t,tt))),ke)break;V=V.return}0<ne.length&&(ot=new ct(ot,Xt,null,a,mt),vt.push({event:ot,listeners:ne}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",ot&&a!==Du&&(Xt=a.relatedTarget||a.fromElement)&&(oa(Xt)||Xt[Jn]))break t;if((ct||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ct?(Xt=a.relatedTarget||a.toElement,ct=et,Xt=Xt?oa(Xt):null,Xt!==null&&(ke=c(Xt),ne=Xt.tag,Xt!==ke||ne!==5&&ne!==27&&ne!==6)&&(Xt=null)):(ct=null,Xt=et),ct!==Xt)){if(ne=J0,_t="onMouseLeave",Q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ne=tp,_t="onPointerLeave",Q="onPointerEnter",V="pointer"),ke=ct==null?ot:Ms(ct),tt=Xt==null?ot:Ms(Xt),ot=new ne(_t,V+"leave",ct,a,mt),ot.target=ke,ot.relatedTarget=tt,_t=null,oa(mt)===et&&(ne=new ne(Q,V+"enter",Xt,a,mt),ne.target=tt,ne.relatedTarget=ke,_t=ne),ke=_t,ct&&Xt)e:{for(ne=ry,Q=ct,V=Xt,tt=0,_t=Q;_t;_t=ne(_t))tt++;_t=0;for(var ee=V;ee;ee=ne(ee))_t++;for(;0<tt-_t;)Q=ne(Q),tt--;for(;0<_t-tt;)V=ne(V),_t--;for(;tt--;){if(Q===V||V!==null&&Q===V.alternate){ne=Q;break e}Q=ne(Q),V=ne(V)}ne=null}else ne=null;ct!==null&&Wg(vt,ot,ct,ne,!1),Xt!==null&&ke!==null&&Wg(vt,ke,Xt,ne,!0)}}t:{if(ot=et?Ms(et):window,ct=ot.nodeName&&ot.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ot.type==="file")var Re=lp;else if(rp(ot))if(cp)Re=_x;else{Re=mx;var qt=px}else ct=ot.nodeName,!ct||ct.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?et&&Le(et.elementType)&&(Re=lp):Re=gx;if(Re&&(Re=Re(e,et))){op(vt,Re,a,mt);break t}qt&&qt(e,ot,et),e==="focusout"&&et&&ot.type==="number"&&et.memoizedProps.value!=null&&_e(ot,"number",ot.value)}switch(qt=et?Ms(et):window,e){case"focusin":(rp(qt)||qt.contentEditable==="true")&&(nr=qt,ku=et,yo=null);break;case"focusout":yo=ku=nr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,_p(vt,a,mt);break;case"selectionchange":if(xx)break;case"keydown":case"keyup":_p(vt,a,mt)}var fe;if(zu)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else er?ap(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(ep&&a.locale!=="ko"&&(er||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&er&&(fe=Q0()):(Ga=mt,Pu="value"in Ga?Ga.value:Ga.textContent,er=!0)),qt=_c(et,Se),0<qt.length&&(Se=new $0(Se,e,null,a,mt),vt.push({event:Se,listeners:qt}),fe?Se.data=fe:(fe=sp(a),fe!==null&&(Se.data=fe)))),(fe=cx?ux(e,a):fx(e,a))&&(Se=_c(et,"onBeforeInput"),0<Se.length&&(qt=new $0("onBeforeInput","beforeinput",null,a,mt),vt.push({event:qt,listeners:Se}),qt.data=fe)),ny(vt,e,et,a,mt)}kg(vt,i)})}function Wo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function _c(e,i){for(var a=i+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=fo(e,a),u!=null&&o.unshift(Wo(e,u,h)),u=fo(e,i),u!=null&&o.push(Wo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ry(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wg(e,i,a,o,u){for(var h=i._reactName,x=[];a!==null&&a!==o;){var w=a,G=w.alternate,et=w.stateNode;if(w=w.tag,G!==null&&G===o)break;w!==5&&w!==26&&w!==27||et===null||(G=et,u?(et=fo(a,h),et!=null&&x.unshift(Wo(a,et,G))):u||(et=fo(a,h),et!=null&&x.push(Wo(a,et,G)))),a=a.return}x.length!==0&&e.push({event:i,listeners:x})}var oy=/\r\n?/g,ly=/\u0000|\uFFFD/g;function qg(e){return(typeof e=="string"?e:""+e).replace(oy,`
`).replace(ly,"")}function Yg(e,i){return i=qg(i),qg(e)===i}function Ve(e,i,a,o,u,h){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||ui(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&ui(e,""+o);break;case"className":kt(e,"class",o);break;case"tabIndex":kt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(e,a,o);break;case"style":Pi(e,o,h);break;case"data":if(i!=="object"){kt(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(i!=="input"&&Ve(e,i,"name",u.name,u,null),Ve(e,i,"formEncType",u.formEncType,u,null),Ve(e,i,"formMethod",u.formMethod,u,null),Ve(e,i,"formTarget",u.formTarget,u,null)):(Ve(e,i,"encType",u.encType,u,null),Ve(e,i,"method",u.method,u,null),Ve(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=bs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ca);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=bs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Ut(e,"popover",o);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ut(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yi.get(a)||a,Ut(e,a,o))}}function gh(e,i,a,o,u,h){switch(a){case"style":Pi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ui(e,o):(typeof o=="number"||typeof o=="bigint")&&ui(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),h=e[Nn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(i,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ut(e,a,o)}}}function Fn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ve(e,i,h,x,a,null)}}u&&Ve(e,i,"srcSet",a.srcSet,a,null),o&&Ve(e,i,"src",a.src,a,null);return;case"input":xe("invalid",e);var w=h=x=u=null,G=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":x=mt;break;case"checked":G=mt;break;case"defaultChecked":et=mt;break;case"value":h=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,i));break;default:Ve(e,i,o,mt,a,null)}}Gn(e,h,w,G,et,x,u,!1);return;case"select":xe("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":x=w;break;case"multiple":o=w;default:Ve(e,i,u,w,a,null)}i=h,a=x,e.multiple=!!o,i!=null?Mn(e,!!o,i,!1):a!=null&&Mn(e,!!o,a,!0);return;case"textarea":xe("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ve(e,i,x,w,a,null)}Ni(e,o,u,h);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,i,G,o,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Xo.length;o++)xe(Xo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Ve(e,i,et,o,a,null)}return;default:if(Le(i)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&gh(e,i,mt,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Ve(e,i,w,o,a,null))}function cy(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,w=null,G=null,et=null,mt=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=vt;default:o.hasOwnProperty(ct)||Ve(e,i,ct,null,o,vt)}}for(var ot in o){var ct=o[ot];if(vt=a[ot],o.hasOwnProperty(ot)&&(ct!=null||vt!=null))switch(ot){case"type":h=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":mt=ct;break;case"value":x=ct;break;case"defaultValue":w=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,i));break;default:ct!==vt&&Ve(e,i,ot,ct,o,vt)}}Bt(e,x,w,G,et,mt,h,u);return;case"select":ct=x=w=ot=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":ct=G;default:o.hasOwnProperty(h)||Ve(e,i,h,null,o,G)}for(u in o)if(h=o[u],G=a[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":ot=h;break;case"defaultValue":w=h;break;case"multiple":x=h;default:h!==G&&Ve(e,i,u,h,o,G)}i=w,a=x,o=ct,ot!=null?Mn(e,!!a,ot,!1):!!o!=!!a&&(i!=null?Mn(e,!!a,i,!0):Mn(e,!!a,a?[]:"",!1));return;case"textarea":ct=ot=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ve(e,i,w,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":ot=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ve(e,i,x,u,o,h)}ci(e,ot,ct);return;case"option":for(var Xt in a)ot=a[Xt],a.hasOwnProperty(Xt)&&ot!=null&&!o.hasOwnProperty(Xt)&&(Xt==="selected"?e.selected=!1:Ve(e,i,Xt,null,o,ot));for(G in o)ot=o[G],ct=a[G],o.hasOwnProperty(G)&&ot!==ct&&(ot!=null||ct!=null)&&(G==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ve(e,i,G,ot,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)ot=a[ne],a.hasOwnProperty(ne)&&ot!=null&&!o.hasOwnProperty(ne)&&Ve(e,i,ne,null,o,ot);for(et in o)if(ot=o[et],ct=a[et],o.hasOwnProperty(et)&&ot!==ct&&(ot!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,i));break;default:Ve(e,i,et,ot,o,ct)}return;default:if(Le(i)){for(var ke in a)ot=a[ke],a.hasOwnProperty(ke)&&ot!==void 0&&!o.hasOwnProperty(ke)&&gh(e,i,ke,void 0,o,ot);for(mt in o)ot=o[mt],ct=a[mt],!o.hasOwnProperty(mt)||ot===ct||ot===void 0&&ct===void 0||gh(e,i,mt,ot,o,ct);return}}for(var Q in a)ot=a[Q],a.hasOwnProperty(Q)&&ot!=null&&!o.hasOwnProperty(Q)&&Ve(e,i,Q,null,o,ot);for(vt in o)ot=o[vt],ct=a[vt],!o.hasOwnProperty(vt)||ot===ct||ot==null&&ct==null||Ve(e,i,vt,ot,o,ct)}function Zg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,w=u.duration;if(h&&w&&Zg(x)){for(x=0,w=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],et=G.startTime;if(et>w)break;var mt=G.transferSize,vt=G.initiatorType;mt&&Zg(vt)&&(G=G.responseEnd,x+=mt*(G<w?1:(w-et)/(G-et)))}if(--o,i+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _h=null,vh=null;function vc(e){return e.nodeType===9?e:e.ownerDocument}function Kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function xh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yh=null;function fy(){var e=window.event;return e&&e.type==="popstate"?e===yh?!1:(yh=e,!0):(yh=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(e){return Jg.resolve(null).then(e).catch(py)}:jg;function py(e){setTimeout(function(){throw e})}function as(e){return e==="head"}function $g(e,i){var a=i,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Cr(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")qo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,qo(a);for(var h=a.firstChild;h;){var x=h.nextSibling,w=h.nodeName;h[Fa]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&qo(e.ownerDocument.body);a=u}while(a);Cr(i)}function t_(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Sh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sh(a),Ba(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function my(e,i,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Fa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ci(e.nextSibling),e===null)break}return null}function gy(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ci(e.nextSibling),e===null))return null;return e}function e_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ci(e.nextSibling),e===null))return null;return e}function Mh(e){return e.data==="$?"||e.data==="$~"}function bh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _y(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ci(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Eh=null;function n_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return Ci(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function i_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function a_(e,i,a){switch(i=vc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function qo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ba(e)}var Di=new Map,s_=new Set;function xc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ta=H.d;H.d={f:vy,r:xy,D:yy,C:Sy,L:My,m:by,X:Ty,S:Ey,M:Ay};function vy(){var e=Ta.f(),i=uc();return e||i}function xy(e){var i=la(e);i!==null&&i.tag===5&&i.type==="form"?Mm(i):Ta.r(e)}var Ar=typeof document>"u"?null:document;function r_(e,i,a){var o=Ar;if(o&&typeof i=="string"&&i){var u=Ie(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),s_.has(u)||(s_.add(u),e={rel:e,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Fn(i,"link",e),pn(i),o.head.appendChild(i)))}}function yy(e){Ta.D(e),r_("dns-prefetch",e,null)}function Sy(e,i){Ta.C(e,i),r_("preconnect",e,i)}function My(e,i,a){Ta.L(e,i,a);var o=Ar;if(o&&e&&i){var u='link[rel="preload"][as="'+Ie(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ie(a.imageSizes)+'"]')):u+='[href="'+Ie(e)+'"]';var h=u;switch(i){case"style":h=wr(e);break;case"script":h=Rr(e)}Di.has(h)||(e=v({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Di.set(h,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Yo(h))||i==="script"&&o.querySelector(Zo(h))||(i=o.createElement("link"),Fn(i,"link",e),pn(i),o.head.appendChild(i)))}}function by(e,i){Ta.m(e,i);var a=Ar;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Ie(o)+'"][href="'+Ie(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Rr(e)}if(!Di.has(h)&&(e=v({rel:"modulepreload",href:e},i),Di.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zo(h)))return}o=a.createElement("link"),Fn(o,"link",e),pn(o),a.head.appendChild(o)}}}function Ey(e,i,a){Ta.S(e,i,a);var o=Ar;if(o&&e){var u=za(o).hoistableStyles,h=wr(e);i=i||"default";var x=u.get(h);if(!x){var w={loading:0,preload:null};if(x=o.querySelector(Yo(h)))w.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Di.get(h))&&Th(e,a);var G=x=o.createElement("link");pn(G),Fn(G,"link",e),G._p=new Promise(function(et,mt){G.onload=et,G.onerror=mt}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,yc(x,i,o)}x={type:"stylesheet",instance:x,count:1,state:w},u.set(h,x)}}}function Ty(e,i){Ta.X(e,i);var a=Ar;if(a&&e){var o=za(a).hoistableScripts,u=Rr(e),h=o.get(u);h||(h=a.querySelector(Zo(u)),h||(e=v({src:e,async:!0},i),(i=Di.get(u))&&Ah(e,i),h=a.createElement("script"),pn(h),Fn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Ay(e,i){Ta.M(e,i);var a=Ar;if(a&&e){var o=za(a).hoistableScripts,u=Rr(e),h=o.get(u);h||(h=a.querySelector(Zo(u)),h||(e=v({src:e,async:!0,type:"module"},i),(i=Di.get(u))&&Ah(e,i),h=a.createElement("script"),pn(h),Fn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function o_(e,i,a,o){var u=(u=at.current)?xc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=wr(a.href),a=za(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=wr(a.href);var h=za(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Yo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),Di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,a),h||wy(u,e,a,x.state))),i&&o===null)throw Error(s(528,""));return x}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Rr(a),a=za(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function wr(e){return'href="'+Ie(e)+'"'}function Yo(e){return'link[rel="stylesheet"]['+e+"]"}function l_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function wy(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Fn(i,"link",a),pn(i),e.head.appendChild(i))}function Rr(e){return'[src="'+Ie(e)+'"]'}function Zo(e){return"script[async]"+e}function c_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Ie(a.href)+'"]');if(o)return i.instance=o,pn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),pn(o),Fn(o,"style",u),yc(o,a.precedence,e),i.instance=o;case"stylesheet":u=wr(a.href);var h=e.querySelector(Yo(u));if(h)return i.state.loading|=4,i.instance=h,pn(h),h;o=l_(a),(u=Di.get(u))&&Th(o,u),h=(e.ownerDocument||e).createElement("link"),pn(h);var x=h;return x._p=new Promise(function(w,G){x.onload=w,x.onerror=G}),Fn(h,"link",o),i.state.loading|=4,yc(h,a.precedence,e),i.instance=h;case"script":return h=Rr(a.src),(u=e.querySelector(Zo(h)))?(i.instance=u,pn(u),u):(o=a,(u=Di.get(h))&&(o=v({},a),Ah(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),pn(u),Fn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,yc(o,a.precedence,e));return i.instance}function yc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var w=o[x];if(w.dataset.precedence===i)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Th(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ah(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Sc=null;function u_(e,i,a){if(Sc===null){var o=new Map,u=Sc=new Map;u.set(a,o)}else u=Sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Fa]||h[dn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(i)||"";x=e+x;var w=o.get(x);w?w.push(h):o.set(x,[h])}}return o}function f_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function Ry(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function h_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Cy(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=wr(o.href),h=i.querySelector(Yo(u));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Mc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=h,pn(h);return}h=i.ownerDocument||i,o=l_(o),(u=Di.get(u))&&Th(o,u),h=h.createElement("link"),pn(h);var x=h;x._p=new Promise(function(w,G){x.onload=w,x.onerror=G}),Fn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Mc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var wh=0;function Dy(e,i){return e.stylesheets&&e.count===0&&Ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+i);0<e.imgBytes&&wh===0&&(wh=62500*uy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>wh?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bc=null;function Ec(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bc=new Map,i.forEach(Uy,e),bc=null,Mc.call(e))}function Uy(e,i){if(!(i.state.loading&4)){var a=bc.get(e);if(a)var o=a.get(null);else{a=new Map,bc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=i.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=Mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Ko={$$typeof:B,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Ly(e,i,a,o,u,h,x,w,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.hiddenUpdates=Wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function d_(e,i,a,o,u,h,x,w,G,et,mt,vt){return e=new Ly(e,i,a,x,G,et,mt,vt,w),i=1,h===!0&&(i|=24),h=hi(3,null,null,i),e.current=h,h.stateNode=e,i=rf(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:i},uf(h),e}function p_(e){return e?(e=sr,e):sr}function m_(e,i,a,o,u,h){u=p_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ya(i),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Za(e,o,i),a!==null&&(ai(a,e,i),wo(a,e,i))}function g_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Rh(e,i){g_(e,i),(e=e.alternate)&&g_(e,i)}function __(e){if(e.tag===13||e.tag===31){var i=ws(e,67108864);i!==null&&ai(i,e,67108864),Rh(e,67108864)}}function v_(e){if(e.tag===13||e.tag===31){var i=_i();i=lo(i);var a=ws(e,i);a!==null&&ai(a,e,i),Rh(e,i)}}var Tc=!0;function Ny(e,i,a,o){var u=I.T;I.T=null;var h=H.p;try{H.p=2,Ch(e,i,a,o)}finally{H.p=h,I.T=u}}function Py(e,i,a,o){var u=I.T;I.T=null;var h=H.p;try{H.p=8,Ch(e,i,a,o)}finally{H.p=h,I.T=u}}function Ch(e,i,a,o){if(Tc){var u=Dh(o);if(u===null)mh(e,i,o,Ac,a),y_(e,o);else if(Iy(u,e,i,a,o))o.stopPropagation();else if(y_(e,o),i&4&&-1<Oy.indexOf(e)){for(;u!==null;){var h=la(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=At(h.pendingLanes);if(x!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var G=1<<31-Ft(x);w.entanglements[1]|=G,x&=~G}ji(h),(Ue&6)===0&&(lc=He()+500,ko(0))}}break;case 31:case 13:w=ws(h,2),w!==null&&ai(w,h,2),uc(),Rh(h,2)}if(h=Dh(o),h===null&&mh(e,i,o,Ac,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else mh(e,i,o,null,a)}}function Dh(e){return e=Uu(e),Uh(e)}var Ac=null;function Uh(e){if(Ac=null,e=oa(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=d(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ac=e,null}function x_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(De()){case D:return 2;case b:return 8;case J:case st:return 32;case dt:return 268435456;default:return 32}default:return 32}}var Lh=!1,ss=null,rs=null,os=null,Qo=new Map,jo=new Map,ls=[],Oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y_(e,i){switch(e){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Qo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(i.pointerId)}}function Jo(e,i,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},i!==null&&(i=la(i),i!==null&&__(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function Iy(e,i,a,o,u){switch(i){case"focusin":return ss=Jo(ss,e,i,a,o,u),!0;case"dragenter":return rs=Jo(rs,e,i,a,o,u),!0;case"mouseover":return os=Jo(os,e,i,a,o,u),!0;case"pointerover":var h=u.pointerId;return Qo.set(h,Jo(Qo.get(h)||null,e,i,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,jo.set(h,Jo(jo.get(h)||null,e,i,a,o,u)),!0}return!1}function S_(e){var i=oa(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Js(e.priority,function(){v_(a)});return}}else if(i===31){if(i=d(a),i!==null){e.blockedOn=i,Js(e.priority,function(){v_(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Dh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Du=o,a.target.dispatchEvent(o),Du=null}else return i=la(a),i!==null&&__(i),e.blockedOn=a,!1;i.shift()}return!0}function M_(e,i,a){wc(e)&&a.delete(i)}function Fy(){Lh=!1,ss!==null&&wc(ss)&&(ss=null),rs!==null&&wc(rs)&&(rs=null),os!==null&&wc(os)&&(os=null),Qo.forEach(M_),jo.forEach(M_)}function Rc(e,i){e.blockedOn===i&&(e.blockedOn=null,Lh||(Lh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Fy)))}var Cc=null;function b_(e){Cc!==e&&(Cc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cc===e&&(Cc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(Uh(o||a)===null)continue;break}var h=la(a);h!==null&&(e.splice(i,3),i-=3,Df(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cr(e){function i(G){return Rc(G,e)}ss!==null&&Rc(ss,e),rs!==null&&Rc(rs,e),os!==null&&Rc(os,e),Qo.forEach(i),jo.forEach(i);for(var a=0;a<ls.length;a++){var o=ls[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ls.length&&(a=ls[0],a.blockedOn===null);)S_(a),a.blockedOn===null&&ls.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[Nn]||null;if(typeof h=="function")x||b_(a);else if(x){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[Nn]||null)w=x.formAction;else if(Uh(u)!==null)continue}else w=x.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),b_(a)}}}function E_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Nh(e){this._internalRoot=e}Dc.prototype.render=Nh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=_i();m_(a,o,e,i,null,null)},Dc.prototype.unmount=Nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;m_(e.current,2,null,e,null,null),uc(),i[Jn]=null}};function Dc(e){this._internalRoot=e}Dc.prototype.unstable_scheduleHydration=function(e){if(e){var i=uo();e={blockedOn:null,target:e,priority:i};for(var a=0;a<ls.length&&i!==0&&i<ls[a].priority;a++);ls.splice(a,0,e),a===0&&S_(e)}};var T_=t.version;if(T_!=="19.2.7")throw Error(s(527,T_,"19.2.7"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var By={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{ft=Uc.inject(By),pt=Uc}catch{}}return tl.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",u=Lm,h=Nm,x=Pm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=d_(e,1,!1,null,null,a,o,null,u,h,x,E_),e[Jn]=i.current,ph(e),new Nh(i)},tl.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Lm,x=Nm,w=Pm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),i=d_(e,1,!0,i,a??null,o,u,G,h,x,w,E_),i.context=p_(null),a=i.current,o=_i(),o=lo(o),u=Ya(o),u.callback=null,Za(a,u,o),a=o,i.current.lanes=a,Gt(i,a),ji(i),e[Jn]=i.current,ph(e),new Dc(i)},tl.version="19.2.7",tl}var O_;function Zy(){if(O_)return Oh.exports;O_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Oh.exports=Yy(),Oh.exports}var Ky=Zy(),xn=y0();const S0="185",Na={ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qy=0,I_=1,jy=2,ru=1,Jy=2,cl=3,_s=0,Qn=1,ea=2,Xi=0,Kr=1,Td=2,F_=3,B_=4,$y=5,Xs=100,tS=101,eS=102,nS=103,iS=104,aS=200,sS=201,rS=202,oS=203,Ad=204,wd=205,lS=206,cS=207,uS=208,fS=209,hS=210,dS=211,pS=212,mS=213,gS=214,Rd=0,Cd=1,Dd=2,Jr=3,Ud=4,Ld=5,Nd=6,Pd=7,M0=0,_S=1,vS=2,aa=0,b0=1,E0=2,T0=3,Mu=4,A0=5,$r=6,bu=7,i1=300,Zs=301,to=302,Hh=303,Gh=304,Eu=306,dl=1e3,La=1001,Od=1002,Tn=1003,xS=1004,Lc=1005,Un=1006,Vh=1007,qs=1008,Si=1009,a1=1010,s1=1011,pl=1012,w0=1013,sa=1014,Vi=1015,jn=1016,R0=1017,C0=1018,ml=1020,r1=35902,o1=35899,l1=1021,c1=1022,ki=1023,Oa=1026,Ys=1027,D0=1028,U0=1029,Ks=1030,L0=1031,N0=1033,ou=33776,lu=33777,cu=33778,uu=33779,Id=35840,Fd=35841,Bd=35842,zd=35843,Hd=36196,Gd=37492,Vd=37496,kd=37488,Xd=37489,pu=37490,Wd=37491,qd=37808,Yd=37809,Zd=37810,Kd=37811,Qd=37812,jd=37813,Jd=37814,$d=37815,t0=37816,e0=37817,n0=37818,i0=37819,a0=37820,s0=37821,r0=36492,o0=36494,l0=36495,c0=36283,u0=36284,mu=36285,f0=36286,yS=3200,SS=3201,gu=0,MS=1,na="",ri="srgb",_u="srgb-linear",vu="linear",Ne="srgb",Dr=7680,z_=519,bS=512,ES=513,TS=514,P0=515,AS=516,wS=517,O0=518,RS=519,H_=35044,G_=35048,V_="300 es",ia=2e3,gl=2001;function CS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function DS(){const r=xu("canvas");return r.style.display="block",r}const k_={};function X_(...r){const t="THREE."+r.shift();console.log(t,...r)}function u1(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ie(...r){r=u1(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...r)}}function Ae(...r){r=u1(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...r)}}function Qr(...r){const t=r.join(" ");t in k_||(k_[t]=!0,ie(...r))}function US(r,t,n){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}const LS={[Rd]:Cd,[Dd]:Nd,[Ud]:Pd,[Jr]:Ld,[Cd]:Rd,[Nd]:Dd,[Pd]:Ud,[Ld]:Jr};class xs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let W_=1234567;const fl=Math.PI/180,_l=180/Math.PI;function ao(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[t&255]+kn[t>>8&255]+"-"+kn[t>>16&15|64]+kn[t>>24&255]+"-"+kn[n&63|128]+kn[n>>8&255]+"-"+kn[n>>16&255]+kn[n>>24&255]+kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]).toLowerCase()}function me(r,t,n){return Math.max(t,Math.min(n,r))}function I0(r,t){return(r%t+t)%t}function NS(r,t,n,s,l){return s+(r-t)*(l-s)/(n-t)}function PS(r,t,n){return r!==t?(n-r)/(t-r):0}function hl(r,t,n){return(1-n)*r+n*t}function OS(r,t,n,s){return hl(r,t,1-Math.exp(-n*s))}function IS(r,t=1){return t-Math.abs(I0(r,t*2)-t)}function FS(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function BS(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function zS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function HS(r,t){return r+Math.random()*(t-r)}function GS(r){return r*(.5-Math.random())}function VS(r){r!==void 0&&(W_=r);let t=W_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kS(r){return r*fl}function XS(r){return r*_l}function WS(r){return(r&r-1)===0&&r!==0}function qS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function YS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ZS(r,t,n,s,l){const c=Math.cos,f=Math.sin,d=c(n/2),m=f(n/2),p=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),g=f((t-s)/2),y=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*_,m*v,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*v,d*p);break;case"ZXZ":r.set(m*v,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*E,m*y,d*p);break;case"YXY":r.set(m*y,d*_,m*E,d*p);break;case"ZYZ":r.set(m*E,m*y,d*_,d*p);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Yr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const f1={DEG2RAD:fl,RAD2DEG:_l,generateUUID:ao,clamp:me,euclideanModulo:I0,mapLinear:NS,inverseLerp:PS,lerp:hl,damp:OS,pingpong:IS,smoothstep:FS,smootherstep:BS,randInt:zS,randFloat:HS,randFloatSpread:GS,seededRandom:VS,degToRad:kS,radToDeg:XS,isPowerOfTwo:WS,ceilPowerOfTwo:qS,floorPowerOfTwo:YS,setQuaternionFromProperEuler:ZS,normalize:Zn,denormalize:Yr},k0=class k0{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,l=t.elements;return this.x=l[0]*n+l[3]*s+l[6],this.y=l[1]*n+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=me(this.x,t.x,n.x),this.y=me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=me(this.x,t,n),this.y=me(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};k0.prototype.isVector2=!0;let Yt=k0;class vs{constructor(t=0,n=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=l}static slerpFlat(t,n,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],g=c[f+0],y=c[f+1],E=c[f+2],C=c[f+3];if(v!==C||m!==g||p!==y||_!==E){let M=m*g+p*y+_*E+v*C;M<0&&(g=-g,y=-y,E=-E,C=-C,M=-M);let S=1-d;if(M<.9995){const z=Math.acos(M),B=Math.sin(z);S=Math.sin(S*z)/B,d=Math.sin(d*z)/B,m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,v=v*S+C*d}else{m=m*S+g*d,p=p*S+y*d,_=_*S+E*d,v=v*S+C*d;const z=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=z,p*=z,_*=z,v*=z}}t[n]=m,t[n+1]=p,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[f],g=c[f+1],y=c[f+2],E=c[f+3];return t[n]=d*E+_*v+m*y-p*g,t[n+1]=m*E+_*g+p*v-d*y,t[n+2]=p*E+_*y+d*g-m*v,t[n+3]=_*E-d*v-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,l){return this._x=t,this._y=n,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),g=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*_*v+p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v-g*y*E;break;case"YXZ":this._x=g*_*v+p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v+g*y*E;break;case"ZXY":this._x=g*_*v-p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v-g*y*E;break;case"ZYX":this._x=g*_*v-p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v+g*y*E;break;case"YZX":this._x=g*_*v+p*y*E,this._y=p*y*v+g*_*E,this._z=p*_*E-g*y*v,this._w=p*_*v-g*y*E;break;case"XZY":this._x=g*_*v-p*y*E,this._y=p*y*v-g*_*E,this._z=p*_*E+g*y*v,this._w=p*_*v+g*y*E;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],l=n[4],c=n[8],f=n[1],d=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=s+d+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,n/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,l=t._y,c=t._z,f=t._w,d=n._x,m=n._y,p=n._z,_=n._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const X0=class X0{constructor(t=0,n=0,s=0){this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(q_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(q_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*l,this.y=c[1]*n+c[4]*s+c[7]*l,this.z=c[2]*n+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*n-c*l),v=2*(c*s-f*n);return this.x=n+m*p+f*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*l,this.y=c[1]*n+c[5]*s+c[9]*l,this.z=c[2]*n+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=me(this.x,t.x,n.x),this.y=me(this.y,t.y,n.y),this.z=me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=me(this.x,t,n),this.y=me(this.y,t,n),this.z=me(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,l=t.y,c=t.z,f=n.x,d=n.y,m=n.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return kh.copy(this).projectOnVector(t),this.sub(kh)}reflect(t){return this.sub(kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return n*n+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const l=Math.sin(n)*t;return this.x=l*Math.sin(s),this.y=Math.cos(n)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};X0.prototype.isVector3=!0;let j=X0;const kh=new j,q_=new vs,W0=class W0{constructor(t,n,s,l,c,f,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,d,m,p)}set(t,n,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=n,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],g=s[2],y=s[5],E=s[8],C=l[0],M=l[3],S=l[6],z=l[1],B=l[4],R=l[7],O=l[2],L=l[5],F=l[8];return c[0]=f*C+d*z+m*O,c[3]=f*M+d*B+m*L,c[6]=f*S+d*R+m*F,c[1]=p*C+_*z+v*O,c[4]=p*M+_*B+v*L,c[7]=p*S+_*R+v*F,c[2]=g*C+y*z+E*O,c[5]=g*M+y*B+E*L,c[8]=g*S+y*R+E*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return n*f*_-n*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*f-d*p,g=d*m-_*c,y=p*c-f*m,E=n*v+s*g+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=v*C,t[1]=(l*p-_*s)*C,t[2]=(d*s-l*f)*C,t[3]=g*C,t[4]=(_*n-l*m)*C,t[5]=(l*c-d*n)*C,t[6]=y*C,t[7]=(s*m-p*n)*C,t[8]=(f*n-s*c)*C,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+n,0,0,1),this}scale(t,n){return Qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xh.makeScale(t,n)),this}rotate(t){return Qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xh.makeRotation(-t)),this}translate(t,n){return Qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<9;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};W0.prototype.isMatrix3=!0;let le=W0;const Xh=new le,Y_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KS(){const r={enabled:!0,workingColorSpace:_u,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ne&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ne&&(l.r=jr(l.r),l.g=jr(l.g),l.b=jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===na?vu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[_u]:{primaries:t,whitePoint:s,transfer:vu,toXYZ:Y_,fromXYZ:Z_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:s,transfer:Ne,toXYZ:Y_,fromXYZ:Z_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const Me=KS();function Pa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ur;class QS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ur===void 0&&(Ur=xu("canvas")),Ur.width=t.width,Ur.height=t.height;const l=Ur.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ur}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=xu("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Pa(c[f]/255)*255;return s.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Pa(n[s]/255)*255):n[s]=Pa(n[s]);return{data:n,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jS=0;class F0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=ao(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Wh(l[f].image)):c.push(Wh(l[f]))}else c=Wh(l);s.url=c}return n||(t.images[this.uuid]=s),s}}function Wh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?QS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let JS=0;const qh=new j;class qn extends xs{constructor(t=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,s=La,l=La,c=Un,f=qs,d=ki,m=Si,p=qn.DEFAULT_ANISOTROPY,_=na){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=ao(),this.name="",this.source=new F0(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qh).x}get height(){return this.source.getSize(qh).y}get depth(){return this.source.getSize(qh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ie(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==i1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dl:t.x=t.x-Math.floor(t.x);break;case La:t.x=t.x<0?0:1;break;case Od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dl:t.y=t.y-Math.floor(t.y);break;case La:t.y=t.y<0?0:1;break;case Od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=i1;qn.DEFAULT_ANISOTROPY=1;const q0=class q0{constructor(t=0,n=0,s=0,l=1){this.x=t,this.y=n,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,l){return this.x=t,this.y=n,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],y=m[5],E=m[9],C=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+C)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const B=(p+1)/2,R=(y+1)/2,O=(S+1)/2,L=(_+g)/4,F=(v+C)/4,T=(E+M)/4;return B>R&&B>O?B<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(B),l=L/s,c=F/s):R>O?R<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),s=L/l,c=T/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=F/c,l=T/c),this.set(s,l,c,n),this}let z=Math.sqrt((M-E)*(M-E)+(v-C)*(v-C)+(g-_)*(g-_));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(v-C)/z,this.z=(g-_)/z,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=me(this.x,t.x,n.x),this.y=me(this.y,t.y,n.y),this.z=me(this.z,t.z,n.z),this.w=me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=me(this.x,t,n),this.y=me(this.y,t,n),this.z=me(this.z,t,n),this.w=me(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};q0.prototype.isVector4=!0;let nn=q0;class $S extends xs{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new nn(0,0,t,n),this.scissorTest=!1,this.viewport=new nn(0,0,t,n),this.textures=[];const l={width:t,height:n,depth:s.depth},c=new qn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new F0(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends $S{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class h1 extends qn{constructor(t=null,n=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tM extends qn{constructor(t=null,n=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Su=class Su{constructor(t,n,s,l,c,f,d,m,p,_,v,g,y,E,C,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,l,c,f,d,m,p,_,v,g,y,E,C,M)}set(t,n,s,l,c,f,d,m,p,_,v,g,y,E,C,M){const S=this.elements;return S[0]=t,S[4]=n,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=E,S[11]=C,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Su().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,s=t.elements,l=1/Lr.setFromMatrixColumn(t,0).length(),c=1/Lr.setFromMatrixColumn(t,1).length(),f=1/Lr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*l,n[1]=s[1]*l,n[2]=s[2]*l,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*_,y=f*v,E=d*_,C=d*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=y+E*p,n[5]=g-C*p,n[9]=-d*m,n[2]=C-g*p,n[6]=E+y*p,n[10]=f*m}else if(t.order==="YXZ"){const g=m*_,y=m*v,E=p*_,C=p*v;n[0]=g+C*d,n[4]=E*d-y,n[8]=f*p,n[1]=f*v,n[5]=f*_,n[9]=-d,n[2]=y*d-E,n[6]=C+g*d,n[10]=f*m}else if(t.order==="ZXY"){const g=m*_,y=m*v,E=p*_,C=p*v;n[0]=g-C*d,n[4]=-f*v,n[8]=E+y*d,n[1]=y+E*d,n[5]=f*_,n[9]=C-g*d,n[2]=-f*p,n[6]=d,n[10]=f*m}else if(t.order==="ZYX"){const g=f*_,y=f*v,E=d*_,C=d*v;n[0]=m*_,n[4]=E*p-y,n[8]=g*p+C,n[1]=m*v,n[5]=C*p+g,n[9]=y*p-E,n[2]=-p,n[6]=d*m,n[10]=f*m}else if(t.order==="YZX"){const g=f*m,y=f*p,E=d*m,C=d*p;n[0]=m*_,n[4]=C-g*v,n[8]=E*v+y,n[1]=v,n[5]=f*_,n[9]=-d*_,n[2]=-p*_,n[6]=y*v+E,n[10]=g-C*v}else if(t.order==="XZY"){const g=f*m,y=f*p,E=d*m,C=d*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+C,n[5]=f*_,n[9]=y*v-E,n[2]=E*v-y,n[6]=d*_,n[10]=C*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eM,t,nM)}lookAt(t,n,s){const l=this.elements;return vi.subVectors(t,n),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),us.crossVectors(s,vi),us.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),us.crossVectors(s,vi)),us.normalize(),Nc.crossVectors(vi,us),l[0]=us.x,l[4]=Nc.x,l[8]=vi.x,l[1]=us.y,l[5]=Nc.y,l[9]=vi.y,l[2]=us.z,l[6]=Nc.z,l[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,l=n.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],g=s[9],y=s[13],E=s[2],C=s[6],M=s[10],S=s[14],z=s[3],B=s[7],R=s[11],O=s[15],L=l[0],F=l[4],T=l[8],P=l[12],Y=l[1],N=l[5],k=l[9],lt=l[13],ut=l[2],K=l[6],I=l[10],H=l[14],$=l[3],ht=l[7],bt=l[11],U=l[15];return c[0]=f*L+d*Y+m*ut+p*$,c[4]=f*F+d*N+m*K+p*ht,c[8]=f*T+d*k+m*I+p*bt,c[12]=f*P+d*lt+m*H+p*U,c[1]=_*L+v*Y+g*ut+y*$,c[5]=_*F+v*N+g*K+y*ht,c[9]=_*T+v*k+g*I+y*bt,c[13]=_*P+v*lt+g*H+y*U,c[2]=E*L+C*Y+M*ut+S*$,c[6]=E*F+C*N+M*K+S*ht,c[10]=E*T+C*k+M*I+S*bt,c[14]=E*P+C*lt+M*H+S*U,c[3]=z*L+B*Y+R*ut+O*$,c[7]=z*F+B*N+R*K+O*ht,c[11]=z*T+B*k+R*I+O*bt,c[15]=z*P+B*lt+R*H+O*U,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],y=t[14],E=t[3],C=t[7],M=t[11],S=t[15],z=m*y-p*g,B=d*y-p*v,R=d*g-m*v,O=f*y-p*_,L=f*g-m*_,F=f*v-d*_;return n*(C*z-M*B+S*R)-s*(E*z-M*O+S*L)+l*(E*B-C*O+S*F)-c*(E*R-C*L+M*F)}determinantAffine(){const t=this.elements,n=t[0],s=t[4],l=t[8],c=t[1],f=t[5],d=t[9],m=t[2],p=t[6],_=t[10];return n*(f*_-d*p)-s*(c*_-d*m)+l*(c*p-f*m)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],y=t[11],E=t[12],C=t[13],M=t[14],S=t[15],z=n*d-s*f,B=n*m-l*f,R=n*p-c*f,O=s*m-l*d,L=s*p-c*d,F=l*p-c*m,T=_*C-v*E,P=_*M-g*E,Y=_*S-y*E,N=v*M-g*C,k=v*S-y*C,lt=g*S-y*M,ut=z*lt-B*k+R*N+O*Y-L*P+F*T;if(ut===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/ut;return t[0]=(d*lt-m*k+p*N)*K,t[1]=(l*k-s*lt-c*N)*K,t[2]=(C*F-M*L+S*O)*K,t[3]=(g*L-v*F-y*O)*K,t[4]=(m*Y-f*lt-p*P)*K,t[5]=(n*lt-l*Y+c*P)*K,t[6]=(M*R-E*F-S*B)*K,t[7]=(_*F-g*R+y*B)*K,t[8]=(f*k-d*Y+p*T)*K,t[9]=(s*Y-n*k-c*T)*K,t[10]=(E*L-C*R+S*z)*K,t[11]=(v*R-_*L-y*z)*K,t[12]=(d*P-f*N-m*T)*K,t[13]=(n*N-s*P+l*T)*K,t[14]=(C*B-E*O-M*z)*K,t[15]=(_*O-v*B+g*z)*K,this}scale(t){const n=this.elements,s=t.x,l=t.y,c=t.z;return n[0]*=s,n[4]*=l,n[8]*=c,n[1]*=s,n[5]*=l,n[9]*=c,n[2]*=s,n[6]*=l,n[10]*=c,n[3]*=s,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,l))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),l=Math.sin(n),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,s){const l=this.elements,c=n._x,f=n._y,d=n._z,m=n._w,p=c+c,_=f+f,v=d+d,g=c*p,y=c*_,E=c*v,C=f*_,M=f*v,S=d*v,z=m*p,B=m*_,R=m*v,O=s.x,L=s.y,F=s.z;return l[0]=(1-(C+S))*O,l[1]=(y+R)*O,l[2]=(E-B)*O,l[3]=0,l[4]=(y-R)*L,l[5]=(1-(g+S))*L,l[6]=(M+z)*L,l[7]=0,l[8]=(E+B)*F,l[9]=(M-z)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),n.identity(),this;let f=Lr.set(l[0],l[1],l[2]).length();const d=Lr.set(l[4],l[5],l[6]).length(),m=Lr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Bi.copy(this);const p=1/f,_=1/d,v=1/m;return Bi.elements[0]*=p,Bi.elements[1]*=p,Bi.elements[2]*=p,Bi.elements[4]*=_,Bi.elements[5]*=_,Bi.elements[6]*=_,Bi.elements[8]*=v,Bi.elements[9]*=v,Bi.elements[10]*=v,n.setFromRotationMatrix(Bi),s.x=f,s.y=d,s.z=m,this}makePerspective(t,n,s,l,c,f,d=ia,m=!1){const p=this.elements,_=2*c/(n-t),v=2*c/(s-l),g=(n+t)/(n-t),y=(s+l)/(s-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(d===ia)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(d===gl)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,l,c,f,d=ia,m=!1){const p=this.elements,_=2/(n-t),v=2/(s-l),g=-(n+t)/(n-t),y=-(s+l)/(s-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(d===ia)E=-2/(f-c),C=-(f+c)/(f-c);else if(d===gl)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let l=0;l<16;l++)if(n[l]!==s[l])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}};Su.prototype.isMatrix4=!0;let Ze=Su;const Lr=new j,Bi=new Ze,eM=new j(0,0,0),nM=new j(1,1,1),us=new j,Nc=new j,vi=new j,K_=new Ze,Q_=new vs;class Ia{constructor(t=0,n=0,s=0,l=Ia.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,l=this._order){return this._x=t,this._y=n,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return K_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(K_,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ia.DEFAULT_ORDER="XYZ";class B0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let iM=0;const j_=new j,Nr=new vs,Aa=new Ze,Pc=new j,el=new j,aM=new j,sM=new vs,J_=new j(1,0,0),$_=new j(0,1,0),tv=new j(0,0,1),ev={type:"added"},rM={type:"removed"},Pr={type:"childadded",child:null},Yh={type:"childremoved",child:null};class Hn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new j,n=new Ia,s=new vs,l=new j(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Nr.setFromAxisAngle(t,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,n){return Nr.setFromAxisAngle(t,n),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(J_,t)}rotateY(t){return this.rotateOnAxis($_,t)}rotateZ(t){return this.rotateOnAxis(tv,t)}translateOnAxis(t,n){return j_.copy(t).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(J_,t)}translateY(t){return this.translateOnAxis($_,t)}translateZ(t){return this.translateOnAxis(tv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Pc.copy(t):Pc.set(t,n,s);const l=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(el,Pc,this.up):Aa.lookAt(Pc,el,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(Aa),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ev),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(rM),Yh.child=t,this.dispatchEvent(Yh),Yh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ev),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,t,aM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,sM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*s-c[8]*l,c[13]+=s-c[1]*n-c[5]*s-c[9]*l,c[14]+=l-c[2]*n-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,l=n.length;s<l;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),n===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(n){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),v=f(t.shapes),g=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new j(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oM={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const C of t.hand.values()){const M=n.getJointPose(C,s),S=this._getHandJoint(p,C);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&g>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=n.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(oM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Oc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}const d1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function Kh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class re{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,n),this}setRGB(t,n,s,l=Me.workingColorSpace){return this.r=t,this.g=n,this.b=s,Me.colorSpaceToWorking(this,l),this}setHSL(t,n,s,l=Me.workingColorSpace){if(t=I0(t,1),n=me(n,0,1),s=me(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=Kh(f,c,t+1/3),this.g=Kh(f,c,t),this.b=Kh(f,c,t-1/3)}return Me.colorSpaceToWorking(this,l),this}setStyle(t,n=ri){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ie("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ri){const s=d1[t.toLowerCase()];return s!==void 0?this.setHex(s,n):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Me.workingToColorSpace(Xn.copy(this),t),Math.round(me(Xn.r*255,0,255))*65536+Math.round(me(Xn.g*255,0,255))*256+Math.round(me(Xn.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Me.workingColorSpace){Me.workingToColorSpace(Xn.copy(this),n);const s=Xn.r,l=Xn.g,c=Xn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=_<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,n=Me.workingColorSpace){return Me.workingToColorSpace(Xn.copy(this),n),t.r=Xn.r,t.g=Xn.g,t.b=Xn.b,t}getStyle(t=ri){Me.workingToColorSpace(Xn.copy(this),t);const n=Xn.r,s=Xn.g,l=Xn.b;return t!==ri?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,n,s){return this.getHSL(fs),this.setHSL(fs.h+t,fs.s+n,fs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(fs),t.getHSL(Ic);const s=hl(fs.h,Ic.h,n),l=hl(fs.s,Ic.s,n),c=hl(fs.l,Ic.l,n);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*l,this.g=c[1]*n+c[4]*s+c[7]*l,this.b=c[2]*n+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new re;re.NAMES=d1;class p1 extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ia,this.environmentIntensity=1,this.environmentRotation=new Ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zi=new j,wa=new j,Qh=new j,Ra=new j,Or=new j,Ir=new j,nv=new j,jh=new j,Jh=new j,$h=new j,td=new nn,ed=new nn,nd=new nn;class Gi{constructor(t=new j,n=new j,s=new j){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,l){l.subVectors(s,n),zi.subVectors(t,n),l.cross(zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,s,l,c){zi.subVectors(l,n),wa.subVectors(s,n),Qh.subVectors(t,n);const f=zi.dot(zi),d=zi.dot(wa),m=zi.dot(Qh),p=wa.dot(wa),_=wa.dot(Qh),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(p*m-d*_)*g,E=(f*_-d*m)*g;return c.set(1-y-E,E,y)}static containsPoint(t,n,s,l){return this.getBarycoord(t,n,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(t,n,s,l,c,f,d,m){return this.getBarycoord(t,n,s,l,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ra.x),m.addScaledVector(f,Ra.y),m.addScaledVector(d,Ra.z),m)}static getInterpolatedAttribute(t,n,s,l,c,f){return td.setScalar(0),ed.setScalar(0),nd.setScalar(0),td.fromBufferAttribute(t,n),ed.fromBufferAttribute(t,s),nd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(td,c.x),f.addScaledVector(ed,c.y),f.addScaledVector(nd,c.z),f}static isFrontFacing(t,n,s,l){return zi.subVectors(s,n),wa.subVectors(t,n),zi.cross(wa).dot(l)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,l){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,s,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),zi.cross(wa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Gi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,l,c){return Gi.getInterpolation(t,this.a,this.b,this.c,n,s,l,c)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,l=this.b,c=this.c;let f,d;Or.subVectors(l,s),Ir.subVectors(c,s),jh.subVectors(t,s);const m=Or.dot(jh),p=Ir.dot(jh);if(m<=0&&p<=0)return n.copy(s);Jh.subVectors(t,l);const _=Or.dot(Jh),v=Ir.dot(Jh);if(_>=0&&v<=_)return n.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),n.copy(s).addScaledVector(Or,f);$h.subVectors(t,c);const y=Or.dot($h),E=Ir.dot($h);if(E>=0&&y<=E)return n.copy(c);const C=y*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(s).addScaledVector(Ir,d);const M=_*E-y*v;if(M<=0&&v-_>=0&&y-E>=0)return nv.subVectors(c,l),d=(v-_)/(v-_+(y-E)),n.copy(l).addScaledVector(nv,d);const S=1/(M+C+g);return f=C*S,d=g*S,n.copy(s).addScaledVector(Or,f).addScaledVector(Ir,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Qs{constructor(t=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Hi):Hi.fromBufferAttribute(c,f),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fc.copy(s.boundingBox)),Fc.applyMatrix4(t.matrixWorld),this.union(Fc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nl),Bc.subVectors(this.max,nl),Fr.subVectors(t.a,nl),Br.subVectors(t.b,nl),zr.subVectors(t.c,nl),hs.subVectors(Br,Fr),ds.subVectors(zr,Br),Hs.subVectors(Fr,zr);let n=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Hs.z,Hs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Hs.z,0,-Hs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Hs.y,Hs.x,0];return!id(n,Fr,Br,zr,Bc)||(n=[1,0,0,0,1,0,0,0,1],!id(n,Fr,Br,zr,Bc))?!1:(zc.crossVectors(hs,ds),n=[zc.x,zc.y,zc.z],id(n,Fr,Br,zr,Bc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new j,new j,new j,new j,new j,new j,new j,new j],Hi=new j,Fc=new Qs,Fr=new j,Br=new j,zr=new j,hs=new j,ds=new j,Hs=new j,nl=new j,Bc=new j,zc=new j,Gs=new j;function id(r,t,n,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Gs.fromArray(r,c);const d=l.x*Math.abs(Gs.x)+l.y*Math.abs(Gs.y)+l.z*Math.abs(Gs.z),m=t.dot(Gs),p=n.dot(Gs),_=s.dot(Gs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const yn=new j,Hc=new Yt;let lM=0;class Mi extends xs{constructor(t,n,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=H_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Hc.fromBufferAttribute(this,n),Hc.applyMatrix3(t),this.setXY(n,Hc.x,Hc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix3(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix4(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)yn.fromBufferAttribute(this,n),yn.applyNormalMatrix(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)yn.fromBufferAttribute(this,n),yn.transformDirection(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Yr(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Yr(n,this.array)),n}setX(t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Yr(n,this.array)),n}setY(t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Yr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Yr(n,this.array)),n}setW(t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=Zn(n,this.array),s=Zn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,l){return t*=this.itemSize,this.normalized&&(n=Zn(n,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,n,s,l,c){return t*=this.itemSize,this.normalized&&(n=Zn(n,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==H_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class m1 extends Mi{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class g1 extends Mi{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Wi extends Mi{constructor(t,n,s){super(new Float32Array(t),n,s)}}const cM=new Qs,il=new j,ad=new j;class xl{constructor(t=new j,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):cM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);const n=il.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),l=(s-this.radius)*.5;this.center.addScaledVector(il,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(ad)),this.expandByPoint(il.copy(t.center).sub(ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let uM=0;const Ui=new Ze,sd=new Hn,Hr=new j,xi=new Qs,al=new Qs,Cn=new j;class ra extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(CS(t)?g1:m1)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new le().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,n,s){return Ui.makeTranslation(t,n,s),this.applyMatrix4(Ui),this}scale(t,n,s){return Ui.makeScale(t,n,s),this.applyMatrix4(Ui),this}lookAt(t){return sd.lookAt(t),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Wi(s,3))}else{const s=Math.min(t.length,n.count);for(let l=0;l<s;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,l=n.length;s<l;s++){const c=n[s];xi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];al.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(xi.min,al.min),xi.expandByPoint(Cn),Cn.addVectors(xi.max,al.max),xi.expandByPoint(Cn)):(xi.expandByPoint(al.min),xi.expandByPoint(al.max))}xi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Cn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Cn));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Cn.fromBufferAttribute(d,p),m&&(Hr.fromBufferAttribute(t,p),Cn.add(Hr)),l=Math.max(l,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,l=n.normal,c=n.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Mi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new j,m[T]=new j;const p=new j,_=new j,v=new j,g=new Yt,y=new Yt,E=new Yt,C=new j,M=new j;function S(T,P,Y){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,P),v.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,P),E.fromBufferAttribute(c,Y),_.sub(p),v.sub(p),y.sub(g),E.sub(g);const N=1/(y.x*E.y-E.x*y.y);isFinite(N)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(N),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(N),d[T].add(C),d[P].add(C),d[Y].add(C),m[T].add(M),m[P].add(M),m[Y].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let T=0,P=z.length;T<P;++T){const Y=z[T],N=Y.start,k=Y.count;for(let lt=N,ut=N+k;lt<ut;lt+=3)S(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const B=new j,R=new j,O=new j,L=new j;function F(T){O.fromBufferAttribute(l,T),L.copy(O);const P=d[T];B.copy(P),B.sub(O.multiplyScalar(O.dot(P))).normalize(),R.crossVectors(L,P);const N=R.dot(m[T])<0?-1:1;f.setXYZW(T,B.x,B.y,B.z,N)}for(let T=0,P=z.length;T<P;++T){const Y=z[T],N=Y.start,k=Y.count;for(let lt=N,ut=N+k;lt<ut;lt+=3)F(t.getX(lt+0)),F(t.getX(lt+1)),F(t.getX(lt+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==n.count)s=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,f=new j,d=new j,m=new j,p=new j,_=new j,v=new j;if(t)for(let g=0,y=t.count;g<y;g+=3){const E=t.getX(g+0),C=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,C),f.fromBufferAttribute(n,M),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=n.count;g<y;g+=3)l.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),f.fromBufferAttribute(n,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let y=0,E=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*_;for(let S=0;S<_;S++)g[E++]=p[y++]}return new Mi(g,_,v)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ra,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],y=t(g,s);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(n))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fM=0;class so extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Kr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=wd,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){ie(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(s.blending=this.blending),this.side!==_s&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ad&&(s.blendSrc=this.blendSrc),this.blendDst!==wd&&(s.blendDst=this.blendDst),this.blendEquation!==Xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new re().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Yt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Yt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const l=n.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Da=new j,rd=new j,Gc=new j,ps=new j,od=new j,Vc=new j,ld=new j;class z0{constructor(t=new j,n=new j(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(t))}distanceSqToSegment(t,n,s,l){rd.copy(t).add(n).multiplyScalar(.5),Gc.copy(n).sub(t).normalize(),ps.copy(this.origin).sub(rd);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Gc),d=ps.dot(this.direction),m=-ps.dot(Gc),p=ps.lengthSq(),_=Math.abs(1-f*f);let v,g,y,E;if(_>0)if(v=f*m-d,g=f*d-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const C=1/_;v*=C,g*=C,y=v*(v+f*g+2*d)+g*(f*v+g+2*m)+p}else g=c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-f*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(v=Math.max(0,-(f*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p);else g=f>0?-c:c,v=Math.max(0,-(f*g+d)),y=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(rd).addScaledVector(Gc,g),y}intersectSphere(t,n){Da.subVectors(t.center,this.origin);const s=Da.dot(this.direction),l=Da.dot(Da)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,n)}intersectsBox(t){return this.intersectBox(t,Da)!==null}intersectTriangle(t,n,s,l,c){od.subVectors(n,t),Vc.subVectors(s,t),ld.crossVectors(od,Vc);let f=this.direction.dot(ld),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ps.subVectors(this.origin,t);const m=d*this.direction.dot(Vc.crossVectors(ps,Vc));if(m<0)return null;const p=d*this.direction.dot(od.cross(ps));if(p<0||m+p>f)return null;const _=-d*ps.dot(ld);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class H0 extends so{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ia,this.combine=M0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const iv=new Ze,Vs=new z0,kc=new xl,av=new j,Xc=new j,Wc=new j,qc=new j,cd=new j,Yc=new j,sv=new j,Zc=new j;class Sn extends Hn{constructor(t=new ra,n=new H0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const l=n[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Yc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(cd.fromBufferAttribute(v,t),f?Yc.addScaledVector(cd,_):Yc.addScaledVector(cd.sub(n),_))}n.add(Yc)}return n}raycast(t,n){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(c),Vs.copy(t.ray).recast(t.near),!(kc.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(kc,av)===null||Vs.origin.distanceToSquared(av)>(t.far-t.near)**2))&&(iv.copy(c).invert(),Vs.copy(t.ray).applyMatrix4(iv),!(s.boundingBox!==null&&Vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Vs)))}_computeIntersections(t,n,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const M=g[E],S=f[M.materialIndex],z=Math.max(M.start,y.start),B=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let R=z,O=B;R<O;R+=3){const L=d.getX(R),F=d.getX(R+1),T=d.getX(R+2);l=Kc(this,S,t,s,p,_,v,L,F,T),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=E,S=C;M<S;M+=3){const z=d.getX(M),B=d.getX(M+1),R=d.getX(M+2);l=Kc(this,f,t,s,p,_,v,z,B,R),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const M=g[E],S=f[M.materialIndex],z=Math.max(M.start,y.start),B=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let R=z,O=B;R<O;R+=3){const L=R,F=R+1,T=R+2;l=Kc(this,S,t,s,p,_,v,L,F,T),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=E,S=C;M<S;M+=3){const z=M,B=M+1,R=M+2;l=Kc(this,f,t,s,p,_,v,z,B,R),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function hM(r,t,n,s,l,c,f,d){let m;if(t.side===Qn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===_s,d),m===null)return null;Zc.copy(d),Zc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Zc);return p<n.near||p>n.far?null:{distance:p,point:Zc.clone(),object:r}}function Kc(r,t,n,s,l,c,f,d,m,p){r.getVertexPosition(d,Xc),r.getVertexPosition(m,Wc),r.getVertexPosition(p,qc);const _=hM(r,t,n,s,Xc,Wc,qc,sv);if(_){const v=new j;Gi.getBarycoord(sv,Xc,Wc,qc,v),l&&(_.uv=Gi.getInterpolatedAttribute(l,d,m,p,v,new Yt)),c&&(_.uv1=Gi.getInterpolatedAttribute(c,d,m,p,v,new Yt)),f&&(_.normal=Gi.getInterpolatedAttribute(f,d,m,p,v,new j),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new j,materialIndex:0};Gi.getNormal(Xc,Wc,qc,g.normal),_.face=g,_.barycoord=v}return _}class _1 extends qn{constructor(t=null,n=1,s=1,l,c,f,d,m,p=Tn,_=Tn,v,g){super(null,f,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rv extends Mi{constructor(t,n,s,l=1){super(t,n,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gr=new Ze,ov=new Ze,Qc=[],lv=new Qs,dM=new Ze,sl=new Sn,rl=new xl;class pM extends Sn{constructor(t,n,s){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new rv(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,dM)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Qs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<n;s++)this.getMatrixAt(s,Gr),lv.copy(t.boundingBox).applyMatrix4(Gr),this.boundingBox.union(lv)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new xl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<n;s++)this.getMatrixAt(s,Gr),rl.copy(t.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(rl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const s=n.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,n){const s=this.matrixWorld,l=this.count;if(sl.geometry=this.geometry,sl.material=this.material,sl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(s),t.ray.intersectsSphere(rl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Gr),ov.multiplyMatrices(s,Gr),sl.matrixWorld=ov,sl.raycast(t,Qc);for(let f=0,d=Qc.length;f<d;f++){const m=Qc[f];m.instanceId=c,m.object=this,n.push(m)}Qc.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new rv(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const s=n.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new _1(new Float32Array(l*this.count),l,this.count,D0,Vi));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*t;return c[m]=d,c.set(s,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ud=new j,mM=new j,gM=new le;class Ua{constructor(t=new j(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,l){return this.normal.set(t,n,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const l=ud.subVectors(s,n).cross(mM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,s=!0){const l=t.delta(ud),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:n.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||gM.getNormalMatrix(t),l=this.coplanarPoint(ud).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new xl,_M=new Yt(.5,.5),jc=new j;class G0{constructor(t=new Ua,n=new Ua,s=new Ua,l=new Ua,c=new Ua,f=new Ua){this.planes=[t,n,s,l,c,f]}set(t,n,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=ia,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],y=c[7],E=c[8],C=c[9],M=c[10],S=c[11],z=c[12],B=c[13],R=c[14],O=c[15];if(l[0].setComponents(p-f,y-_,S-E,O-z).normalize(),l[1].setComponents(p+f,y+_,S+E,O+z).normalize(),l[2].setComponents(p+d,y+v,S+C,O+B).normalize(),l[3].setComponents(p-d,y-v,S-C,O-B).normalize(),s)l[4].setComponents(m,g,M,R).normalize(),l[5].setComponents(p-m,y-g,S-M,O-R).normalize();else if(l[4].setComponents(p-m,y-g,S-M,O-R).normalize(),n===ia)l[5].setComponents(p+m,y+g,S+M,O+R).normalize();else if(n===gl)l[5].setComponents(m,g,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);const n=_M.distanceTo(t.center);return ks.radius=.7071067811865476+n,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){const n=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const l=n[s];if(jc.x=l.normal.x>0?t.max.x:t.min.x,jc.y=l.normal.y>0?t.max.y:t.min.y,jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class v1 extends qn{constructor(t=[],n=Zs,s,l,c,f,d,m,p,_){super(t,n,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yu extends qn{constructor(t,n,s,l,c,f,d,m,p){super(t,n,s,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eo extends qn{constructor(t,n,s=sa,l,c,f,d=Tn,m=Tn,p,_=Oa,v=1){if(_!==Oa&&_!==Ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:v};super(g,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new F0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vM extends eo{constructor(t,n=sa,s=Zs,l,c,f=Tn,d=Tn,m,p=Oa){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,n,s,l,c,f,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class x1 extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ro extends ra{constructor(t=1,n=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],v=[];let g=0,y=0;E("z","y","x",-1,-1,s,n,t,f,c,0),E("z","y","x",1,-1,s,n,-t,f,c,1),E("x","z","y",1,1,t,s,n,l,f,2),E("x","z","y",1,-1,t,s,-n,l,f,3),E("x","y","z",1,-1,t,n,s,l,c,4),E("x","y","z",-1,-1,t,n,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Wi(p,3)),this.setAttribute("normal",new Wi(_,3)),this.setAttribute("uv",new Wi(v,2));function E(C,M,S,z,B,R,O,L,F,T,P){const Y=R/F,N=O/T,k=R/2,lt=O/2,ut=L/2,K=F+1,I=T+1;let H=0,$=0;const ht=new j;for(let bt=0;bt<I;bt++){const U=bt*N-lt;for(let Z=0;Z<K;Z++){const yt=Z*Y-k;ht[C]=yt*z,ht[M]=U*B,ht[S]=ut,p.push(ht.x,ht.y,ht.z),ht[C]=0,ht[M]=0,ht[S]=L>0?1:-1,_.push(ht.x,ht.y,ht.z),v.push(Z/F),v.push(1-bt/T),H+=1}}for(let bt=0;bt<T;bt++)for(let U=0;U<F;U++){const Z=g+U+K*bt,yt=g+U+K*(bt+1),Et=g+(U+1)+K*(bt+1),Lt=g+(U+1)+K*bt;m.push(Z,yt,Lt),m.push(yt,Et,Lt),$+=6}d.addGroup(y,$,P),y+=$,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yl extends ra{constructor(t=1,n=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:l};const c=t/2,f=n/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=n/m,y=[],E=[],C=[],M=[];for(let S=0;S<_;S++){const z=S*g-f;for(let B=0;B<p;B++){const R=B*v-c;E.push(R,-z,0),C.push(0,0,1),M.push(B/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let z=0;z<d;z++){const B=z+p*S,R=z+p*(S+1),O=z+1+p*(S+1),L=z+1+p*S;y.push(B,R,L),y.push(R,O,L)}this.setIndex(y),this.setAttribute("position",new Wi(E,3)),this.setAttribute("normal",new Wi(C,3)),this.setAttribute("uv",new Wi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.width,t.height,t.widthSegments,t.heightSegments)}}function no(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const l=r[n][s];if(cv(l))l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=l.clone();else if(Array.isArray(l))if(cv(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();t[n][s]=c}else t[n][s]=l.slice();else t[n][s]=l}}return t}function Kn(r){const t={};for(let n=0;n<r.length;n++){const s=no(r[n]);for(const l in s)t[l]=s[l]}return t}function cv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function xM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function y1(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const vl={clone:no,merge:Kn};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends so{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=SM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=no(t.uniforms),this.uniformsGroups=xM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=n[l.value]||null;break;case"c":this.uniforms[s].value=new re().setHex(l.value);break;case"v2":this.uniforms[s].value=new Yt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new j().fromArray(l.value);break;case"v4":this.uniforms[s].value=new nn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new le().fromArray(l.value);break;case"m4":this.uniforms[s].value=new Ze().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class S1 extends Ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class h0 extends so{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ia,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class MM extends h0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class bM extends so{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ia,this.combine=M0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class M1 extends so{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class EM extends so{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class b1 extends Hn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const fd=new Ze,uv=new j,fv=new j;class E1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new G0,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;uv.setFromMatrixPosition(t.matrixWorld),n.position.copy(uv),fv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(fv),n.updateMatrixWorld(),fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===gl||n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jc=new j,$c=new vs,Ji=new j;class T1 extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jc,$c,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,Ji.set(1,1,1)).invert()}updateWorldMatrix(t,n,s=!1){super.updateWorldMatrix(t,n,s),this.matrixWorld.decompose(Jc,$c,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ms=new j,hv=new Yt,dv=new Yt;class yi extends T1{constructor(t=50,n=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=_l*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,n){return this.getViewBounds(t,hv,dv),n.subVectors(dv,hv)}setViewOffset(t,n,s,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(fl*.5*this.fov)/this.zoom,s=2*n,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class TM extends E1{constructor(){super(new yi(90,1,.5,500)),this.isPointLightShadow=!0}}class AM extends b1{constructor(t,n,s=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new TM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Tu extends T1{constructor(t=-1,n=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class wM extends E1{constructor(){super(new Tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hd extends b1{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new wM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Vr=-90,kr=1;class RM extends Hn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Vr,kr,t,n);l.layers=this.layers,this.add(l);const c=new yi(Vr,kr,t,n);c.layers=this.layers,this.add(c);const f=new yi(Vr,kr,t,n);f.layers=this.layers,this.add(f);const d=new yi(Vr,kr,t,n);d.layers=this.layers,this.add(d);const m=new yi(Vr,kr,t,n);m.layers=this.layers,this.add(m);const p=new yi(Vr,kr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,l,c,f,d,m]=n;for(const p of n)this.remove(p);if(t===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===gl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(v,g,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class CM extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class DM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=UM.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function UM(){this._document.hidden===!1&&this.reset()}const pv=new Ze;class LM{constructor(t,n,s=0,l=1/0){this.ray=new z0(t,n),this.near=s,this.far=l,this.camera=null,this.layers=new B0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ae("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return pv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pv),this}intersectObject(t,n=!0,s=[]){return d0(t,this,s,n),s.sort(mv),s}intersectObjects(t,n=!0,s=[]){for(let l=0,c=t.length;l<c;l++)d0(t[l],this,s,n);return s.sort(mv),s}}function mv(r,t){return r.distance-t.distance}function d0(r,t,n,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,n)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)d0(c[f],t,n,!0)}}class NM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class gv{constructor(t=1,n=0,s=0){this.radius=t,this.phi=n,this.theta=s}set(t,n,s){return this.radius=t,this.phi=n,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,s){return this.radius=Math.sqrt(t*t+n*n+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Y0=class Y0{constructor(t,n,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let s=0;s<4;s++)this.elements[s]=t[s+n];return this}set(t,n,s,l){const c=this.elements;return c[0]=t,c[2]=n,c[1]=s,c[3]=l,this}};Y0.prototype.isMatrix2=!0;let _v=Y0;class PM extends xs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function vv(r,t,n,s){const l=OM(s);switch(n){case l1:return r*t;case D0:return r*t/l.components*l.byteLength;case U0:return r*t/l.components*l.byteLength;case Ks:return r*t*2/l.components*l.byteLength;case L0:return r*t*2/l.components*l.byteLength;case c1:return r*t*3/l.components*l.byteLength;case ki:return r*t*4/l.components*l.byteLength;case N0:return r*t*4/l.components*l.byteLength;case ou:case lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cu:case uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fd:case zd:return Math.max(r,16)*Math.max(t,8)/4;case Id:case Bd:return Math.max(r,8)*Math.max(t,8)/2;case Hd:case Gd:case kd:case Xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vd:case pu:case Wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case jd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case t0:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case e0:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case n0:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case i0:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case a0:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case s0:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case r0:case o0:case l0:return Math.ceil(r/4)*Math.ceil(t/4)*16;case c0:case u0:return Math.ceil(r/4)*Math.ceil(t/4)*8;case mu:case f0:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OM(r){switch(r){case Si:case a1:return{byteLength:1,components:1};case pl:case s1:case jn:return{byteLength:2,components:1};case R0:case C0:return{byteLength:2,components:4};case sa:case w0:case Vi:return{byteLength:4,components:1};case r1:case o1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:S0}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=S0);function A1(){let r=null,t=!1,n=null,s=null;function l(c,f){n(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function IM(r){const t=new WeakMap;function n(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<v.length;y++){const E=v[g],C=v[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,v[g]=C)}v.length=g+1;for(let y=0,E=v.length;y<E;y++){const C=v[y];r.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var FM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
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
#endif`,zM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kM=`#ifdef USE_AOMAP
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
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WM=`#ifdef USE_BATCHING
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
#endif`,qM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QM=`#ifdef USE_IRIDESCENCE
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
#endif`,jM=`#ifdef USE_BUMPMAP
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,r2=`#define PI 3.141592653589793
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
} // validated`,o2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l2=`vec3 transformedNormal = objectNormal;
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
#endif`,c2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d2="gl_FragColor = linearToOutputTexel( gl_FragColor );",p2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m2=`#ifdef USE_ENVMAP
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
#endif`,g2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
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
#endif`,v2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
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
#endif`,y2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E2=`#ifdef USE_GRADIENTMAP
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
}`,T2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,C2=`#ifdef USE_ENVMAP
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
#endif`,D2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P2=`PhysicalMaterial material;
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
#endif`,O2=`uniform sampler2D dfgLUT;
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
}`,I2=`
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
#endif`,F2=`#if defined( RE_IndirectDiffuse )
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
#endif`,B2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,H2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y2=`#if defined( USE_POINTS_UV )
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
#endif`,Z2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$2=`#ifdef USE_MORPHTARGETS
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
#endif`,tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rb=`#ifdef USE_NORMALMAP
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
#endif`,ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mb=`float getShadowMask() {
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
}`,bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eb=`#ifdef USE_SKINNING
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
#endif`,Tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ab=`#ifdef USE_SKINNING
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
#endif`,wb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Db=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ub=`#ifdef USE_TRANSMISSION
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
#endif`,Lb=`#ifdef USE_TRANSMISSION
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bb=`uniform sampler2D t2D;
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`#include <common>
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
}`,Xb=`#if DEPTH_PACKING == 3200
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
}`,Wb=`#define DISTANCE
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
}`,qb=`#define DISTANCE
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`uniform float scale;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,jb=`#include <common>
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
}`,Jb=`uniform vec3 diffuse;
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
}`,$b=`#define LAMBERT
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
}`,t3=`#define LAMBERT
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
}`,e3=`#define MATCAP
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
}`,n3=`#define MATCAP
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
}`,i3=`#define NORMAL
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
}`,a3=`#define NORMAL
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
}`,s3=`#define PHONG
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
}`,r3=`#define PHONG
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
}`,o3=`#define STANDARD
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
}`,l3=`#define STANDARD
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
}`,c3=`#define TOON
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
}`,u3=`#define TOON
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
}`,f3=`uniform float size;
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
}`,h3=`uniform vec3 diffuse;
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
}`,d3=`#include <common>
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
}`,p3=`uniform vec3 color;
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
}`,m3=`uniform float rotation;
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
}`,g3=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:FM,alphahash_pars_fragment:BM,alphamap_fragment:zM,alphamap_pars_fragment:HM,alphatest_fragment:GM,alphatest_pars_fragment:VM,aomap_fragment:kM,aomap_pars_fragment:XM,batching_pars_vertex:WM,batching_vertex:qM,begin_vertex:YM,beginnormal_vertex:ZM,bsdfs:KM,iridescence_fragment:QM,bumpmap_pars_fragment:jM,clipping_planes_fragment:JM,clipping_planes_pars_fragment:$M,clipping_planes_pars_vertex:t2,clipping_planes_vertex:e2,color_fragment:n2,color_pars_fragment:i2,color_pars_vertex:a2,color_vertex:s2,common:r2,cube_uv_reflection_fragment:o2,defaultnormal_vertex:l2,displacementmap_pars_vertex:c2,displacementmap_vertex:u2,emissivemap_fragment:f2,emissivemap_pars_fragment:h2,colorspace_fragment:d2,colorspace_pars_fragment:p2,envmap_fragment:m2,envmap_common_pars_fragment:g2,envmap_pars_fragment:_2,envmap_pars_vertex:v2,envmap_physical_pars_fragment:C2,envmap_vertex:x2,fog_vertex:y2,fog_pars_vertex:S2,fog_fragment:M2,fog_pars_fragment:b2,gradientmap_pars_fragment:E2,lightmap_pars_fragment:T2,lights_lambert_fragment:A2,lights_lambert_pars_fragment:w2,lights_pars_begin:R2,lights_toon_fragment:D2,lights_toon_pars_fragment:U2,lights_phong_fragment:L2,lights_phong_pars_fragment:N2,lights_physical_fragment:P2,lights_physical_pars_fragment:O2,lights_fragment_begin:I2,lights_fragment_maps:F2,lights_fragment_end:B2,lightprobes_pars_fragment:z2,logdepthbuf_fragment:H2,logdepthbuf_pars_fragment:G2,logdepthbuf_pars_vertex:V2,logdepthbuf_vertex:k2,map_fragment:X2,map_pars_fragment:W2,map_particle_fragment:q2,map_particle_pars_fragment:Y2,metalnessmap_fragment:Z2,metalnessmap_pars_fragment:K2,morphinstance_vertex:Q2,morphcolor_vertex:j2,morphnormal_vertex:J2,morphtarget_pars_vertex:$2,morphtarget_vertex:tb,normal_fragment_begin:eb,normal_fragment_maps:nb,normal_pars_fragment:ib,normal_pars_vertex:ab,normal_vertex:sb,normalmap_pars_fragment:rb,clearcoat_normal_fragment_begin:ob,clearcoat_normal_fragment_maps:lb,clearcoat_pars_fragment:cb,iridescence_pars_fragment:ub,opaque_fragment:fb,packing:hb,premultiplied_alpha_fragment:db,project_vertex:pb,dithering_fragment:mb,dithering_pars_fragment:gb,roughnessmap_fragment:_b,roughnessmap_pars_fragment:vb,shadowmap_pars_fragment:xb,shadowmap_pars_vertex:yb,shadowmap_vertex:Sb,shadowmask_pars_fragment:Mb,skinbase_vertex:bb,skinning_pars_vertex:Eb,skinning_vertex:Tb,skinnormal_vertex:Ab,specularmap_fragment:wb,specularmap_pars_fragment:Rb,tonemapping_fragment:Cb,tonemapping_pars_fragment:Db,transmission_fragment:Ub,transmission_pars_fragment:Lb,uv_pars_fragment:Nb,uv_pars_vertex:Pb,uv_vertex:Ob,worldpos_vertex:Ib,background_vert:Fb,background_frag:Bb,backgroundCube_vert:zb,backgroundCube_frag:Hb,cube_vert:Gb,cube_frag:Vb,depth_vert:kb,depth_frag:Xb,distance_vert:Wb,distance_frag:qb,equirect_vert:Yb,equirect_frag:Zb,linedashed_vert:Kb,linedashed_frag:Qb,meshbasic_vert:jb,meshbasic_frag:Jb,meshlambert_vert:$b,meshlambert_frag:t3,meshmatcap_vert:e3,meshmatcap_frag:n3,meshnormal_vert:i3,meshnormal_frag:a3,meshphong_vert:s3,meshphong_frag:r3,meshphysical_vert:o3,meshphysical_frag:l3,meshtoon_vert:c3,meshtoon_frag:u3,points_vert:f3,points_frag:h3,shadow_vert:d3,shadow_frag:p3,sprite_vert:m3,sprite_frag:g3},Ot={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ta={basic:{uniforms:Kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Kn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Kn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new re(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Kn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Kn([Ot.points,Ot.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Kn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Kn([Ot.common,Ot.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Kn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Kn([Ot.sprite,Ot.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Kn([Ot.common,Ot.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Kn([Ot.lights,Ot.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};ta.physical={uniforms:Kn([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const tu={r:0,b:0,g:0},_3=new Ze,w1=new le;w1.set(-1,0,0,0,1,0,0,0,1);function v3(r,t,n,s,l,c){const f=new re(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function y(z){let B=z.isScene===!0?z.background:null;if(B&&B.isTexture){const R=z.backgroundBlurriness>0;B=t.get(B,R)}return B}function E(z){let B=!1;const R=y(z);R===null?M(f,d):R&&R.isColor&&(M(R,1),B=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||B)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(z,B){const R=y(B);R&&(R.isCubeTexture||R.mapping===Eu)?(p===void 0&&(p=new Sn(new ro(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:no(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(_3.makeRotationFromEuler(B.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(w1),p.material.toneMapped=Me.getTransfer(R.colorSpace)!==Ne,(_!==R||v!==R.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,g=r.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Sn(new yl(2,2),new Ln({name:"BackgroundMaterial",uniforms:no(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Me.getTransfer(R.colorSpace)!==Ne,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=R,v=R.version,g=r.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function M(z,B){z.getRGB(tu,y1(r)),n.buffers.color.setClear(tu.r,tu.g,tu.b,B,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(z,B=1){f.set(z),d=B,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(z){d=z,M(f,d)},render:E,addToRenderList:C,dispose:S}}function x3(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(N,k,lt,ut,K){let I=!1;const H=v(N,ut,lt,k);c!==H&&(c=H,p(c.object)),I=y(N,ut,lt,K),I&&E(N,ut,lt,K),K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,R(N,k,lt,ut),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function m(){return r.createVertexArray()}function p(N){return r.bindVertexArray(N)}function _(N){return r.deleteVertexArray(N)}function v(N,k,lt,ut){const K=ut.wireframe===!0;let I=s[k.id];I===void 0&&(I={},s[k.id]=I);const H=N.isInstancedMesh===!0?N.id:0;let $=I[H];$===void 0&&($={},I[H]=$);let ht=$[lt.id];ht===void 0&&(ht={},$[lt.id]=ht);let bt=ht[K];return bt===void 0&&(bt=g(m()),ht[K]=bt),bt}function g(N){const k=[],lt=[],ut=[];for(let K=0;K<n;K++)k[K]=0,lt[K]=0,ut[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:lt,attributeDivisors:ut,object:N,attributes:{},index:null}}function y(N,k,lt,ut){const K=c.attributes,I=k.attributes;let H=0;const $=lt.getAttributes();for(const ht in $)if($[ht].location>=0){const U=K[ht];let Z=I[ht];if(Z===void 0&&(ht==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),ht==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==ut}function E(N,k,lt,ut){const K={},I=k.attributes;let H=0;const $=lt.getAttributes();for(const ht in $)if($[ht].location>=0){let U=I[ht];U===void 0&&(ht==="instanceMatrix"&&N.instanceMatrix&&(U=N.instanceMatrix),ht==="instanceColor"&&N.instanceColor&&(U=N.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),K[ht]=Z,H++}c.attributes=K,c.attributesNum=H,c.index=ut}function C(){const N=c.newAttributes;for(let k=0,lt=N.length;k<lt;k++)N[k]=0}function M(N){S(N,0)}function S(N,k){const lt=c.newAttributes,ut=c.enabledAttributes,K=c.attributeDivisors;lt[N]=1,ut[N]===0&&(r.enableVertexAttribArray(N),ut[N]=1),K[N]!==k&&(r.vertexAttribDivisor(N,k),K[N]=k)}function z(){const N=c.newAttributes,k=c.enabledAttributes;for(let lt=0,ut=k.length;lt<ut;lt++)k[lt]!==N[lt]&&(r.disableVertexAttribArray(lt),k[lt]=0)}function B(N,k,lt,ut,K,I,H){H===!0?r.vertexAttribIPointer(N,k,lt,K,I):r.vertexAttribPointer(N,k,lt,ut,K,I)}function R(N,k,lt,ut){C();const K=ut.attributes,I=lt.getAttributes(),H=k.defaultAttributeValues;for(const $ in I){const ht=I[$];if(ht.location>=0){let bt=K[$];if(bt===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(bt=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(bt=N.instanceColor)),bt!==void 0){const U=bt.normalized,Z=bt.itemSize,yt=t.get(bt);if(yt===void 0)continue;const Et=yt.buffer,Lt=yt.type,at=yt.bytesPerElement,xt=Lt===r.INT||Lt===r.UNSIGNED_INT||bt.gpuType===w0;if(bt.isInterleavedBufferAttribute){const Mt=bt.data,zt=Mt.stride,ae=bt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<ht.locationSize;Jt++)S(ht.location+Jt,Mt.meshPerAttribute);N.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Jt=0;Jt<ht.locationSize;Jt++)M(ht.location+Jt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Jt=0;Jt<ht.locationSize;Jt++)B(ht.location+Jt,Z/ht.locationSize,Lt,U,zt*at,(ae+Z/ht.locationSize*Jt)*at,xt)}else{if(bt.isInstancedBufferAttribute){for(let Mt=0;Mt<ht.locationSize;Mt++)S(ht.location+Mt,bt.meshPerAttribute);N.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Mt=0;Mt<ht.locationSize;Mt++)M(ht.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let Mt=0;Mt<ht.locationSize;Mt++)B(ht.location+Mt,Z/ht.locationSize,Lt,U,Z*at,Z/ht.locationSize*Mt*at,xt)}}else if(H!==void 0){const U=H[$];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(ht.location,U);break;case 3:r.vertexAttrib3fv(ht.location,U);break;case 4:r.vertexAttrib4fv(ht.location,U);break;default:r.vertexAttrib1fv(ht.location,U)}}}}z()}function O(){P();for(const N in s){const k=s[N];for(const lt in k){const ut=k[lt];for(const K in ut){const I=ut[K];for(const H in I)_(I[H].object),delete I[H];delete ut[K]}}delete s[N]}}function L(N){if(s[N.id]===void 0)return;const k=s[N.id];for(const lt in k){const ut=k[lt];for(const K in ut){const I=ut[K];for(const H in I)_(I[H].object),delete I[H];delete ut[K]}}delete s[N.id]}function F(N){for(const k in s){const lt=s[k];for(const ut in lt){const K=lt[ut];if(K[N.id]===void 0)continue;const I=K[N.id];for(const H in I)_(I[H].object),delete I[H];delete K[N.id]}}}function T(N){for(const k in s){const lt=s[k],ut=N.isInstancedMesh===!0?N.id:0,K=lt[ut];if(K!==void 0){for(const I in K){const H=K[I];for(const $ in H)_(H[$].object),delete H[$];delete K[I]}delete lt[ut],Object.keys(lt).length===0&&delete s[k]}}}function P(){Y(),f=!0,c!==l&&(c=l,p(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:P,resetDefaultState:Y,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:M,disableUnusedAttributes:z}}function y3(r,t,n){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),n.update(p,s,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),n.update(p,s,_))}function d(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let g=0;for(let y=0;y<_;y++)g+=p[y];n.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function S3(r,t,n,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==ki&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const T=F===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Si&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vi&&!T)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(ie("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),B=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:z,maxVaryings:B,maxFragmentUniforms:R,maxSamples:O,samples:L}}function M3(r){const t=this;let n=null,s=0,l=!1,c=!1;const f=new Ua,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,y){const E=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const z=c?0:s,B=z*4;let R=S.clippingState||null;m.value=R,R=_(E,g,B,y);for(let O=0;O!==B;++O)R[O]=n[O];S.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,y,E){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,E!==!0||M===null){const S=y+C*4,z=g.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<S)&&(M=new Float32Array(S));for(let B=0,R=y;B!==C;++B,R+=4)f.copy(v[B]).applyMatrix4(z,d),f.normal.toArray(M,R),M[R+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}const gs=4,xv=[.125,.215,.35,.446,.526,.582],Ws=20,b3=256,ol=new Tu,yv=new re;let dd=null,pd=0,md=0,gd=!1;const E3=new j;class p0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,l=100,c={}){const{size:f=256,position:d=E3}=c;dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dd,pd,md),this._renderer.xr.enabled=gd,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Zs||t.mapping===to?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:jn,format:ki,colorSpace:_u,depthBuffer:!1},l=Sv(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sv(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=T3(c)),this._blurMaterial=w3(c,t,n),this._ggxMaterial=A3(c,t,n)}return l}_compileMaterial(t){const n=new Sn(new ra,t);this._renderer.compile(n,ol)}_sceneToCubeUV(t,n,s,l,c){const m=new yi(90,1,n,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(yv),v.toneMapping=aa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new ro,new H0({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let S=!1;const z=t.background;z?z.isColor&&(M.color.copy(z),t.background=null,S=!0):(M.color.copy(yv),S=!0);for(let B=0;B<6;B++){const R=B%3;R===0?(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[B],c.y,c.z)):R===1?(m.up.set(0,0,p[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[B],c.z)):(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[B]));const O=this._cubeSize;Xr(l,R*O,B>2?O:0,O,O),v.setRenderTarget(l),S&&v.render(C,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=z}_textureToCubeUV(t,n){const s=this._renderer,l=t.mapping===Zs||t.mapping===to;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Xr(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(f,ol)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,y=v*g,{_lodMax:E}=this,C=this._sizeLods[s],M=3*C*(s>E-gs?s-E+gs:0),S=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-n,Xr(c,M,S,3*C,2*C),l.setRenderTarget(c),l.render(d,ol),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Xr(t,M,S,3*C,2*C),l.setRenderTarget(t),l.render(d,ol)}_blur(t,n,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,n,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ws-1),C=c/E,M=isFinite(c)?1+Math.floor(_*C):Ws;M>Ws&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ws}`);const S=[];let z=0;for(let F=0;F<Ws;++F){const T=F/C,P=Math.exp(-T*T/2);S.push(P),F===0?z+=P:F<M&&(z+=2*P)}for(let F=0;F<S.length;F++)S[F]=S[F]/z;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:B}=this;g.dTheta.value=E,g.mipInt.value=B-s;const R=this._sizeLods[l],O=3*R*(l>B-gs?l-B+gs:0),L=4*(this._cubeSize-R);Xr(n,O,L,3*R,2*R),m.setRenderTarget(n),m.render(v,ol)}}function T3(r){const t=[],n=[],s=[];let l=r;const c=r-gs+1+xv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-gs?m=xv[f-r+gs-1]:f===0&&(m=0),n.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,E=6,C=3,M=2,S=1,z=new Float32Array(C*E*y),B=new Float32Array(M*E*y),R=new Float32Array(S*E*y);for(let L=0;L<y;L++){const F=L%3*2/3-1,T=L>2?0:-1,P=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];z.set(P,C*E*L),B.set(g,M*E*L);const Y=[L,L,L,L,L,L];R.set(Y,S*E*L)}const O=new ra;O.setAttribute("position",new Mi(z,C)),O.setAttribute("uv",new Mi(B,M)),O.setAttribute("faceIndex",new Mi(R,S)),s.push(new Sn(O,null)),l>gs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function Sv(r,t,n){const s=new zn(r,t,n);return s.texture.mapping=Eu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xr(r,t,n,s,l){r.viewport.set(t,n,s,l),r.scissor.set(t,n,s,l)}function A3(r,t,n){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function w3(r,t,n){const s=new Float32Array(Ws),l=new j(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Mv(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function bv(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}class R1 extends zn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new v1(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ro(5,5,5),c=new Ln({name:"CubemapFromEquirect",uniforms:no(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Xi});c.uniforms.tEquirect.value=n;const f=new Sn(l,c),d=n.minFilter;return n.minFilter===qs&&(n.minFilter=Un),new RM(1,10,this).update(t,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,l);t.setRenderTarget(c)}}function R3(r){let t=new WeakMap,n=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Hh||y===Gh)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new R1(E.height);return C.fromEquirectangularTexture(r,g),t.set(g,C),g.addEventListener("dispose",p),d(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,E=y===Hh||y===Gh,C=y===Zs||y===to;if(E||C){let M=n.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new p0(r)),M=E?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),M.texture;if(M!==void 0)return M.texture;{const z=g.image;return E&&z&&z.height>0||C&&z&&m(z)?(s===null&&(s=new p0(r)),M=E?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,y){return y===Hh?g.mapping=Zs:y===Gh&&(g.mapping=to),g}function m(g){let y=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&y++;return y===E}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const E=n.get(y);E!==void 0&&(n.delete(y),E.dispose())}function v(){t=new WeakMap,n=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function C3(r){const t={};function n(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const l=n(s);return l===null&&Qr("WebGLRenderer: "+s+" extension not supported."),l}}}function D3(r,t,n,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(v){const g=[],y=v.index,E=v.attributes.position;let C=0;if(E===void 0)return;if(y!==null){const z=y.array;C=y.version;for(let B=0,R=z.length;B<R;B+=3){const O=z[B+0],L=z[B+1],F=z[B+2];g.push(O,L,L,F,F,O)}}else{const z=E.array;C=E.version;for(let B=0,R=z.length/3-1;B<R;B+=3){const O=B+0,L=B+1,F=B+2;g.push(O,L,L,F,F,O)}}const M=new(E.count>=65535?g1:m1)(g,1);M.version=C;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function U3(r,t,n){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*f),n.update(g,s,1)}function p(v,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,v*f,y),n.update(g,s,y))}function _(v,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,y);let C=0;for(let M=0;M<y;M++)C+=g[M];n.update(C,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function L3(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:Ae("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:s}}function N3(r,t,n){const s=new WeakMap,l=new nn;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let Y=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",Y)};var y=Y;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),C===!0&&(R=2),M===!0&&(R=3);let O=d.attributes.position.count*R,L=1;O>t.maxTextureSize&&(L=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const F=new Float32Array(O*L*4*v),T=new h1(F,O,L,v);T.type=Vi,T.needsUpdate=!0;const P=R*4;for(let N=0;N<v;N++){const k=S[N],lt=z[N],ut=B[N],K=O*L*4*N;for(let I=0;I<k.count;I++){const H=I*P;E===!0&&(l.fromBufferAttribute(k,I),F[K+H+0]=l.x,F[K+H+1]=l.y,F[K+H+2]=l.z,F[K+H+3]=0),C===!0&&(l.fromBufferAttribute(lt,I),F[K+H+4]=l.x,F[K+H+5]=l.y,F[K+H+6]=l.z,F[K+H+7]=0),M===!0&&(l.fromBufferAttribute(ut,I),F[K+H+8]=l.x,F[K+H+9]=l.y,F[K+H+10]=l.z,F[K+H+11]=ut.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Yt(O,L)},s.set(d,g),d.addEventListener("dispose",Y)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function P3(r,t,n,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:f,dispose:d}}const O3={[b0]:"LINEAR_TONE_MAPPING",[E0]:"REINHARD_TONE_MAPPING",[T0]:"CINEON_TONE_MAPPING",[Mu]:"ACES_FILMIC_TONE_MAPPING",[$r]:"AGX_TONE_MAPPING",[bu]:"NEUTRAL_TONE_MAPPING",[A0]:"CUSTOM_TONE_MAPPING"};function I3(r,t,n,s,l,c){const f=new zn(t,n,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new eo(t,n):void 0}),d=new zn(t,n,{type:jn,depthBuffer:!1,stencilBuffer:!1}),m=new ra;m.setAttribute("position",new Wi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Wi([0,2,0,0,2,0],2));const p=new S1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Sn(m,p),v=new Tu(-1,1,1,-1,0,1);let g=null,y=null,E=!1,C,M=null,S=[],z=!1;this.setSize=function(B,R){f.setSize(B,R),d.setSize(B,R);for(let O=0;O<S.length;O++){const L=S[O];L.setSize&&L.setSize(B,R)}},this.setEffects=function(B){S=B,z=S.length>0&&S[0].isRenderPass===!0;const R=f.width,O=f.height;for(let L=0;L<S.length;L++){const F=S[L];F.setSize&&F.setSize(R,O)}},this.begin=function(B,R){if(E||B.toneMapping===aa&&S.length===0)return!1;if(M=R,R!==null){const O=R.width,L=R.height;(f.width!==O||f.height!==L)&&this.setSize(O,L)}return z===!1&&B.setRenderTarget(f),C=B.toneMapping,B.toneMapping=aa,!0},this.hasRenderPass=function(){return z},this.end=function(B,R){B.toneMapping=C,E=!0;let O=f,L=d;for(let F=0;F<S.length;F++){const T=S[F];if(T.enabled!==!1&&(T.render(B,L,O,R),T.needsSwap!==!1)){const P=O;O=L,L=P}}if(g!==B.outputColorSpace||y!==B.toneMapping){g=B.outputColorSpace,y=B.toneMapping,p.defines={},Me.getTransfer(g)===Ne&&(p.defines.SRGB_TRANSFER="");const F=O3[y];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=O.texture,B.setRenderTarget(M),B.render(_,v),M=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),d.dispose(),m.dispose(),p.dispose()}}const C1=new qn,m0=new eo(1,1),D1=new h1,U1=new tM,L1=new v1,Ev=[],Tv=[],Av=new Float32Array(16),wv=new Float32Array(9),Rv=new Float32Array(4);function oo(r,t,n){const s=r[0];if(s<=0||s>0)return r;const l=t*n;let c=Ev[l];if(c===void 0&&(c=new Float32Array(l),Ev[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=n,r[f].toArray(c,d)}return c}function An(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function wn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function wu(r,t){let n=Tv[t];n===void 0&&(n=new Int32Array(t),Tv[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function F3(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function B3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;r.uniform2fv(this.addr,t),wn(n,t)}}function z3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(An(n,t))return;r.uniform3fv(this.addr,t),wn(n,t)}}function H3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;r.uniform4fv(this.addr,t),wn(n,t)}}function G3(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(An(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),wn(n,t)}else{if(An(n,s))return;Rv.set(s),r.uniformMatrix2fv(this.addr,!1,Rv),wn(n,s)}}function V3(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(An(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),wn(n,t)}else{if(An(n,s))return;wv.set(s),r.uniformMatrix3fv(this.addr,!1,wv),wn(n,s)}}function k3(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(An(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),wn(n,t)}else{if(An(n,s))return;Av.set(s),r.uniformMatrix4fv(this.addr,!1,Av),wn(n,s)}}function X3(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function W3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;r.uniform2iv(this.addr,t),wn(n,t)}}function q3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;r.uniform3iv(this.addr,t),wn(n,t)}}function Y3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;r.uniform4iv(this.addr,t),wn(n,t)}}function Z3(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function K3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;r.uniform2uiv(this.addr,t),wn(n,t)}}function Q3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;r.uniform3uiv(this.addr,t),wn(n,t)}}function j3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;r.uniform4uiv(this.addr,t),wn(n,t)}}function J3(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(m0.compareFunction=n.isReversedDepthBuffer()?O0:P0,c=m0):c=C1,n.setTexture2D(t||c,l)}function $3(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture3D(t||U1,l)}function tE(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTextureCube(t||L1,l)}function eE(r,t,n){const s=this.cache,l=n.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),n.setTexture2DArray(t||D1,l)}function nE(r){switch(r){case 5126:return F3;case 35664:return B3;case 35665:return z3;case 35666:return H3;case 35674:return G3;case 35675:return V3;case 35676:return k3;case 5124:case 35670:return X3;case 35667:case 35671:return W3;case 35668:case 35672:return q3;case 35669:case 35673:return Y3;case 5125:return Z3;case 36294:return K3;case 36295:return Q3;case 36296:return j3;case 35678:case 36198:case 36298:case 36306:case 35682:return J3;case 35679:case 36299:case 36307:return $3;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return eE}}function iE(r,t){r.uniform1fv(this.addr,t)}function aE(r,t){const n=oo(t,this.size,2);r.uniform2fv(this.addr,n)}function sE(r,t){const n=oo(t,this.size,3);r.uniform3fv(this.addr,n)}function rE(r,t){const n=oo(t,this.size,4);r.uniform4fv(this.addr,n)}function oE(r,t){const n=oo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function lE(r,t){const n=oo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function cE(r,t){const n=oo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function uE(r,t){r.uniform1iv(this.addr,t)}function fE(r,t){r.uniform2iv(this.addr,t)}function hE(r,t){r.uniform3iv(this.addr,t)}function dE(r,t){r.uniform4iv(this.addr,t)}function pE(r,t){r.uniform1uiv(this.addr,t)}function mE(r,t){r.uniform2uiv(this.addr,t)}function gE(r,t){r.uniform3uiv(this.addr,t)}function _E(r,t){r.uniform4uiv(this.addr,t)}function vE(r,t,n){const s=this.cache,l=t.length,c=wu(n,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=m0:f=C1;for(let d=0;d!==l;++d)n.setTexture2D(t[d]||f,c[d])}function xE(r,t,n){const s=this.cache,l=t.length,c=wu(n,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||U1,c[f])}function yE(r,t,n){const s=this.cache,l=t.length,c=wu(n,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||L1,c[f])}function SE(r,t,n){const s=this.cache,l=t.length,c=wu(n,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||D1,c[f])}function ME(r){switch(r){case 5126:return iE;case 35664:return aE;case 35665:return sE;case 35666:return rE;case 35674:return oE;case 35675:return lE;case 35676:return cE;case 5124:case 35670:return uE;case 35667:case 35671:return fE;case 35668:case 35672:return hE;case 35669:case 35673:return dE;case 5125:return pE;case 36294:return mE;case 36295:return gE;case 36296:return _E;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return xE;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return SE}}class bE{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=nE(n.type)}}class EE{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ME(n.type)}}class TE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,n[d.id],s)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function Cv(r,t){r.seq.push(t),r.map[t.id]=t}function AE(r,t,n){const s=r.name,l=s.length;for(_d.lastIndex=0;;){const c=_d.exec(s),f=_d.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Cv(n,p===void 0?new bE(d,r,t):new EE(d,r,t));break}else{let v=n.map[d];v===void 0&&(v=new TE(d),Cv(n,v)),n=v}}}class fu{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(n,f),m=t.getUniformLocation(n,d.name);AE(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,s,l){const c=this.map[n];c!==void 0&&c.setValue(t,s,l)}setOptional(t,n,s){const l=n[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,n,s,l){for(let c=0,f=n.length;c!==f;++c){const d=n[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,n){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&s.push(f)}return s}}function Dv(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const wE=37297;let RE=0;function CE(r,t){const n=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${n[f]}`)}return s.join(`
`)}const Uv=new le;function DE(r){Me._getMatrix(Uv,Me.workingColorSpace,r);const t=`mat3( ${Uv.elements.map(n=>n.toFixed(4))} )`;switch(Me.getTransfer(r)){case vu:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Lv(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+CE(r.getShaderSource(t),d)}else return c}function UE(r,t){const n=DE(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const LE={[b0]:"Linear",[E0]:"Reinhard",[T0]:"Cineon",[Mu]:"ACESFilmic",[$r]:"AgX",[bu]:"Neutral",[A0]:"Custom"};function NE(r,t){const n=LE[t];return n===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const eu=new j;function PE(){Me.getLuminanceCoefficients(eu);const r=eu.x.toFixed(4),t=eu.y.toFixed(4),n=eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function IE(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function FE(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return n}function ul(r){return r!==""}function Nv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const BE=/^[ \t]*#include +<([\w\d./]+)>/gm;function g0(r){return r.replace(BE,HE)}const zE=new Map;function HE(r,t){let n=de[t];if(n===void 0){const s=zE.get(t);if(s!==void 0)n=de[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return g0(n)}const GE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ov(r){return r.replace(GE,VE)}function VE(r,t,n,s){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Iv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const kE={[ru]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};function XE(r){return kE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WE={[Zs]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function qE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":WE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const YE={[to]:"ENVMAP_MODE_REFRACTION"};function ZE(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":YE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KE={[M0]:"ENVMAP_BLENDING_MULTIPLY",[_S]:"ENVMAP_BLENDING_MIX",[vS]:"ENVMAP_BLENDING_ADD"};function QE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":KE[r.combine]||"ENVMAP_BLENDING_NONE"}function jE(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function JE(r,t,n,s){const l=r.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=XE(n),p=qE(n),_=ZE(n),v=QE(n),g=jE(n),y=OE(n),E=IE(c),C=l.createProgram();let M,S,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ul).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ul).join(`
`),S.length>0&&(S+=`
`)):(M=[Iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),S=[Iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==aa?"#define TONE_MAPPING":"",n.toneMapping!==aa?de.tonemapping_pars_fragment:"",n.toneMapping!==aa?NE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,UE("linearToOutputTexel",n.outputColorSpace),PE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),f=g0(f),f=Nv(f,n),f=Pv(f,n),d=g0(d),d=Nv(d,n),d=Pv(d,n),f=Ov(f),d=Ov(d),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",n.glslVersion===V_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===V_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const B=z+M+f,R=z+S+d,O=Dv(l,l.VERTEX_SHADER,B),L=Dv(l,l.FRAGMENT_SHADER,R);l.attachShader(C,O),l.attachShader(C,L),n.index0AttributeName!==void 0?l.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(N){if(r.debug.checkShaderErrors){const k=l.getProgramInfoLog(C)||"",lt=l.getShaderInfoLog(O)||"",ut=l.getShaderInfoLog(L)||"",K=k.trim(),I=lt.trim(),H=ut.trim();let $=!0,ht=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,O,L);else{const bt=Lv(l,O,"vertex"),U=Lv(l,L,"fragment");Ae("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+K+`
`+bt+`
`+U)}else K!==""?ie("WebGLProgram: Program Info Log:",K):(I===""||H==="")&&(ht=!1);ht&&(N.diagnostics={runnable:$,programLog:K,vertexShader:{log:I,prefix:M},fragmentShader:{log:H,prefix:S}})}l.deleteShader(O),l.deleteShader(L),T=new fu(l,C),P=FE(l,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let Y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(C,wE)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RE++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=L,this}let $E=0;class tT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,s){const l=this._getShaderCacheForMaterial(t);return l.has(n)===!1&&(l.add(n),n.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new eT(t),n.set(t,s)),s}}class eT{constructor(t){this.id=$E++,this.code=t,this.usedTimes=0}}function nT(r){return r===Ks||r===pu||r===mu}function iT(r,t,n,s,l,c){const f=new B0,d=new tT,m=new Set,p=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,P,Y,N,k,lt){const ut=N.fog,K=k.geometry,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=t.get(T.envMap||I,H),ht=$&&$.mapping===Eu?$.image.height:null,bt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ie("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Z=U!==void 0?U.length:0;let yt=0;K.morphAttributes.position!==void 0&&(yt=1),K.morphAttributes.normal!==void 0&&(yt=2),K.morphAttributes.color!==void 0&&(yt=3);let Et,Lt,at,xt;if(bt){const Gt=ta[bt];Et=Gt.vertexShader,Lt=Gt.fragmentShader}else{Et=T.vertexShader,Lt=T.fragmentShader;const Gt=d.getVertexShaderStage(T),Je=d.getFragmentShaderStage(T);d.update(T,Gt,Je),at=Gt.id,xt=Je.id}const Mt=r.getRenderTarget(),zt=r.state.buffers.depth.getReversed(),ae=k.isInstancedMesh===!0,Jt=k.isBatchedMesh===!0,Ke=!!T.map,pe=!!T.matcap,be=!!$,Ee=!!T.aoMap,ge=!!T.lightMap,an=!!T.bumpMap&&T.wireframe===!1,sn=!!T.normalMap,rn=!!T.displacementMap,un=!!T.emissiveMap,Ye=!!T.metalnessMap,on=!!T.roughnessMap,q=T.anisotropy>0,He=T.clearcoat>0,De=T.dispersion>0,D=T.iridescence>0,b=T.sheen>0,J=T.transmission>0,st=q&&!!T.anisotropyMap,dt=He&&!!T.clearcoatMap,Tt=He&&!!T.clearcoatNormalMap,Ct=He&&!!T.clearcoatRoughnessMap,ft=D&&!!T.iridescenceMap,pt=D&&!!T.iridescenceThicknessMap,wt=b&&!!T.sheenColorMap,Ft=b&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,Dt=!!T.specularColorMap,jt=!!T.specularIntensityMap,$t=J&&!!T.transmissionMap,se=J&&!!T.thicknessMap,X=!!T.gradientMap,At=!!T.alphaMap,gt=T.alphaTest>0,Rt=!!T.alphaHash,It=!!T.extensions;let St=aa;T.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(St=r.toneMapping);const Wt={shaderID:bt,shaderType:T.type,shaderName:T.name,vertexShader:Et,fragmentShader:Lt,defines:T.defines,customVertexShaderID:at,customFragmentShaderID:xt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Jt,batchingColor:Jt&&k._colorsTexture!==null,instancing:ae,instancingColor:ae&&k.instanceColor!==null,instancingMorph:ae&&k.morphTexture!==null,outputColorSpace:Mt===null?r.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ke,matcap:pe,envMap:be,envMapMode:be&&$.mapping,envMapCubeUVHeight:ht,aoMap:Ee,lightMap:ge,bumpMap:an,normalMap:sn,displacementMap:rn,emissiveMap:un,normalMapObjectSpace:sn&&T.normalMapType===MS,normalMapTangentSpace:sn&&T.normalMapType===gu,packedNormalMap:sn&&T.normalMapType===gu&&nT(T.normalMap.format),metalnessMap:Ye,roughnessMap:on,anisotropy:q,anisotropyMap:st,clearcoat:He,clearcoatMap:dt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ct,dispersion:De,iridescence:D,iridescenceMap:ft,iridescenceThicknessMap:pt,sheen:b,sheenColorMap:wt,sheenRoughnessMap:Ft,specularMap:Nt,specularColorMap:Dt,specularIntensityMap:jt,transmission:J,transmissionMap:$t,thicknessMap:se,gradientMap:X,opaque:T.transparent===!1&&T.blending===Kr&&T.alphaToCoverage===!1,alphaMap:At,alphaTest:gt,alphaHash:Rt,combine:T.combine,mapUv:Ke&&E(T.map.channel),aoMapUv:Ee&&E(T.aoMap.channel),lightMapUv:ge&&E(T.lightMap.channel),bumpMapUv:an&&E(T.bumpMap.channel),normalMapUv:sn&&E(T.normalMap.channel),displacementMapUv:rn&&E(T.displacementMap.channel),emissiveMapUv:un&&E(T.emissiveMap.channel),metalnessMapUv:Ye&&E(T.metalnessMap.channel),roughnessMapUv:on&&E(T.roughnessMap.channel),anisotropyMapUv:st&&E(T.anisotropyMap.channel),clearcoatMapUv:dt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&E(T.sheenRoughnessMap.channel),specularMapUv:Nt&&E(T.specularMap.channel),specularColorMapUv:Dt&&E(T.specularColorMap.channel),specularIntensityMapUv:jt&&E(T.specularIntensityMap.channel),transmissionMapUv:$t&&E(T.transmissionMap.channel),thicknessMapUv:se&&E(T.thicknessMap.channel),alphaMapUv:At&&E(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(sn||q),vertexNormals:!!K.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(Ke||At),fog:!!ut,useFog:T.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||K.attributes.normal===void 0&&sn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:zt,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:yt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:St,decodeVideoTexture:Ke&&T.map.isVideoTexture===!0&&Me.getTransfer(T.map.colorSpace)===Ne,decodeVideoTextureEmissive:un&&T.emissiveMap.isVideoTexture===!0&&Me.getTransfer(T.emissiveMap.colorSpace)===Ne,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ea,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||Jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function M(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)P.push(Y),P.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(S(P,T),z(P,T),P.push(r.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function S(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function z(T,P){f.disableAll(),P.instancing&&f.enable(0),P.instancingColor&&f.enable(1),P.instancingMorph&&f.enable(2),P.matcap&&f.enable(3),P.envMap&&f.enable(4),P.normalMapObjectSpace&&f.enable(5),P.normalMapTangentSpace&&f.enable(6),P.clearcoat&&f.enable(7),P.iridescence&&f.enable(8),P.alphaTest&&f.enable(9),P.vertexColors&&f.enable(10),P.vertexAlphas&&f.enable(11),P.vertexUv1s&&f.enable(12),P.vertexUv2s&&f.enable(13),P.vertexUv3s&&f.enable(14),P.vertexTangents&&f.enable(15),P.anisotropy&&f.enable(16),P.alphaHash&&f.enable(17),P.batching&&f.enable(18),P.dispersion&&f.enable(19),P.batchingColor&&f.enable(20),P.gradientMap&&f.enable(21),P.packedNormalMap&&f.enable(22),P.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.reversedDepthBuffer&&f.enable(4),P.skinning&&f.enable(5),P.morphTargets&&f.enable(6),P.morphNormals&&f.enable(7),P.morphColors&&f.enable(8),P.premultipliedAlpha&&f.enable(9),P.shadowMapEnabled&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.transmission&&f.enable(15),P.sheen&&f.enable(16),P.opaque&&f.enable(17),P.pointsUvs&&f.enable(18),P.decodeVideoTexture&&f.enable(19),P.decodeVideoTextureEmissive&&f.enable(20),P.alphaToCoverage&&f.enable(21),P.numLightProbeGrids>0&&f.enable(22),P.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function B(T){const P=y[T.type];let Y;if(P){const N=ta[P];Y=vl.clone(N.uniforms)}else Y=T.uniforms;return Y}function R(T,P){let Y=_.get(P);return Y!==void 0?++Y.usedTimes:(Y=new JE(r,P,T,l),p.push(Y),_.set(P,Y)),Y}function O(T){if(--T.usedTimes===0){const P=p.indexOf(T);p[P]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function L(T){d.remove(T)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:B,acquireProgram:R,releaseProgram:O,releaseShaderCache:L,programs:p,dispose:F}}function aT(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:l,dispose:c}}function sT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Fv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Bv(){const r=[];let t=0;const n=[],s=[],l=[];function c(){t=0,n.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,E,C,M,S){let z=r[t];return z===void 0?(z={id:g.id,object:g,geometry:y,material:E,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:M,group:S},r[t]=z):(z.id=g.id,z.object=g,z.geometry=y,z.material=E,z.materialVariant=f(g),z.groupOrder=C,z.renderOrder=g.renderOrder,z.z=M,z.group=S),t++,z}function m(g,y,E,C,M,S){const z=d(g,y,E,C,M,S);E.transmission>0?s.push(z):E.transparent===!0?l.push(z):n.push(z)}function p(g,y,E,C,M,S){const z=d(g,y,E,C,M,S);E.transmission>0?s.unshift(z):E.transparent===!0?l.unshift(z):n.unshift(z)}function _(g,y,E){n.length>1&&n.sort(g||sT),s.length>1&&s.sort(y||Fv),l.length>1&&l.sort(y||Fv),E&&(n.reverse(),s.reverse(),l.reverse())}function v(){for(let g=t,y=r.length;g<y;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function rT(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Bv,r.set(s,[f])):l>=c.length?(f=new Bv,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function oT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new j,color:new re};break;case"SpotLight":n={position:new j,direction:new j,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new re,groundColor:new re};break;case"RectAreaLight":n={color:new re,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=n,n}}}function lT(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let cT=0;function uT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function fT(r){const t=new oT,n=lT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new Ze,f=new Ze;function d(p){let _=0,v=0,g=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let y=0,E=0,C=0,M=0,S=0,z=0,B=0,R=0,O=0,L=0,F=0;p.sort(uT);for(let P=0,Y=p.length;P<Y;P++){const N=p[P],k=N.color,lt=N.intensity,ut=N.distance;let K=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ks?K=N.shadow.map.texture:K=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)_+=k.r*lt,v+=k.g*lt,g+=k.b*lt;else if(N.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(N.sh.coefficients[I],lt);F++}else if(N.isDirectionalLight){const I=t.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const H=N.shadow,$=n.get(N);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.directionalShadow[y]=$,s.directionalShadowMap[y]=K,s.directionalShadowMatrix[y]=N.shadow.matrix,z++}s.directional[y]=I,y++}else if(N.isSpotLight){const I=t.get(N);I.position.setFromMatrixPosition(N.matrixWorld),I.color.copy(k).multiplyScalar(lt),I.distance=ut,I.coneCos=Math.cos(N.angle),I.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),I.decay=N.decay,s.spot[C]=I;const H=N.shadow;if(N.map&&(s.spotLightMap[O]=N.map,O++,H.updateMatrices(N),N.castShadow&&L++),s.spotLightMatrix[C]=H.matrix,N.castShadow){const $=n.get(N);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,s.spotShadow[C]=$,s.spotShadowMap[C]=K,R++}C++}else if(N.isRectAreaLight){const I=t.get(N);I.color.copy(k).multiplyScalar(lt),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),s.rectArea[M]=I,M++}else if(N.isPointLight){const I=t.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),I.distance=N.distance,I.decay=N.decay,N.castShadow){const H=N.shadow,$=n.get(N);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=K,s.pointShadowMatrix[E]=N.shadow.matrix,B++}s.point[E]=I,E++}else if(N.isHemisphereLight){const I=t.get(N);I.skyColor.copy(N.color).multiplyScalar(lt),I.groundColor.copy(N.groundColor).multiplyScalar(lt),s.hemi[S]=I,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==z||T.numPointShadows!==B||T.numSpotShadows!==R||T.numSpotMaps!==O||T.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=R+O-L,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=F,T.directionalLength=y,T.pointLength=E,T.spotLength=C,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=z,T.numPointShadows=B,T.numSpotShadows=R,T.numSpotMaps=O,T.numLightProbes=F,s.version=cT++)}function m(p,_){let v=0,g=0,y=0,E=0,C=0;const M=_.matrixWorldInverse;for(let S=0,z=p.length;S<z;S++){const B=p[S];if(B.isDirectionalLight){const R=s.directional[v];R.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(M),v++}else if(B.isSpotLight){const R=s.spot[y];R.position.setFromMatrixPosition(B.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(M),y++}else if(B.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(B.matrixWorld),R.position.applyMatrix4(M),f.identity(),c.copy(B.matrixWorld),c.premultiply(M),f.extractRotation(c),R.halfWidth.set(B.width*.5,0,0),R.halfHeight.set(0,B.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(B.isPointLight){const R=s.point[g];R.position.setFromMatrixPosition(B.matrixWorld),R.position.applyMatrix4(M),g++}else if(B.isHemisphereLight){const R=s.hemi[C];R.direction.setFromMatrixPosition(B.matrixWorld),R.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function zv(r){const t=new fT(r),n=[],s=[],l=[];function c(g){v.camera=g,n.length=0,s.length=0,l.length=0}function f(g){n.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(n)}function _(g){t.setupView(n,g)}const v={lightsArray:n,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:d,pushLightProbeGrid:m}}function hT(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new zv(r),t.set(l,[d])):c>=f.length?(d=new zv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:n,dispose:s}}const dT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pT=`uniform sampler2D shadow_pass;
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
}`,mT=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],gT=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Hv=new Ze,ll=new j,vd=new j;function _T(r,t,n){let s=new G0;const l=new Yt,c=new Yt,f=new nn,d=new M1,m=new EM,p={},_=n.maxTextureSize,v={[_s]:Qn,[Qn]:_s,[ea]:ea},g=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:dT,fragmentShader:pT}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new ra;E.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Sn(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let S=this.type;this.render=function(L,F,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===Jy&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ru);const P=r.getRenderTarget(),Y=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Xi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const lt=S!==this.type;lt&&F.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(K=>K.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,K=L.length;ut<K;ut++){const I=L[ut],H=I.shadow;if(H===void 0){ie("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const $=H.getFrameExtents();l.multiply($),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/$.x),l.x=c.x*$.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/$.y),l.y=c.y*$.y,H.mapSize.y=c.y));const ht=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ht,H.map===null||lt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===cl){if(I.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new zn(l.x,l.y,{format:Ks,type:jn,minFilter:Un,magFilter:Un,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new eo(l.x,l.y,Vi),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=Oa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Tn,H.map.depthTexture.magFilter=Tn}else I.isPointLight?(H.map=new R1(l.x),H.map.depthTexture=new vM(l.x,sa)):(H.map=new zn(l.x,l.y),H.map.depthTexture=new eo(l.x,l.y,sa)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=Oa,this.type===ru?(H.map.depthTexture.compareFunction=ht?O0:P0,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Tn,H.map.depthTexture.magFilter=Tn);H.camera.updateProjectionMatrix()}const bt=H.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<bt;U++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,U),r.clear();else{U===0&&(r.setRenderTarget(H.map),r.clear());const Z=H.getViewport(U);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),k.viewport(f)}if(I.isPointLight){const Z=H.camera,yt=H.matrix,Et=I.distance||Z.far;Et!==Z.far&&(Z.far=Et,Z.updateProjectionMatrix()),ll.setFromMatrixPosition(I.matrixWorld),Z.position.copy(ll),vd.copy(Z.position),vd.add(mT[U]),Z.up.copy(gT[U]),Z.lookAt(vd),Z.updateMatrixWorld(),yt.makeTranslation(-ll.x,-ll.y,-ll.z),Hv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Hv,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),R(F,T,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===cl&&z(H,T),H.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(P,Y,N)};function z(L,F){const T=t.update(C);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new zn(l.x,l.y,{format:Ks,type:jn})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(F,null,T,g,C,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(F,null,T,y,C,null)}function B(L,F,T,P){let Y=null;const N=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)Y=N;else if(Y=T.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const k=Y.uuid,lt=F.uuid;let ut=p[k];ut===void 0&&(ut={},p[k]=ut);let K=ut[lt];K===void 0&&(K=Y.clone(),ut[lt]=K,F.addEventListener("dispose",O)),Y=K}if(Y.visible=F.visible,Y.wireframe=F.wireframe,P===cl?Y.side=F.shadowSide!==null?F.shadowSide:F.side:Y.side=F.shadowSide!==null?F.shadowSide:v[F.side],Y.alphaMap=F.alphaMap,Y.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Y.map=F.map,Y.clipShadows=F.clipShadows,Y.clippingPlanes=F.clippingPlanes,Y.clipIntersection=F.clipIntersection,Y.displacementMap=F.displacementMap,Y.displacementScale=F.displacementScale,Y.displacementBias=F.displacementBias,Y.wireframeLinewidth=F.wireframeLinewidth,Y.linewidth=F.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const k=r.properties.get(Y);k.light=T}return Y}function R(L,F,T,P,Y){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===cl)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const lt=t.update(L),ut=L.material;if(Array.isArray(ut)){const K=lt.groups;for(let I=0,H=K.length;I<H;I++){const $=K[I],ht=ut[$.materialIndex];if(ht&&ht.visible){const bt=B(L,ht,P,Y);L.onBeforeShadow(r,L,F,T,lt,bt,$),r.renderBufferDirect(T,null,lt,bt,L,$),L.onAfterShadow(r,L,F,T,lt,bt,$)}}}else if(ut.visible){const K=B(L,ut,P,Y);L.onBeforeShadow(r,L,F,T,lt,K,null),r.renderBufferDirect(T,null,lt,K,L,null),L.onAfterShadow(r,L,F,T,lt,K,null)}}const k=L.children;for(let lt=0,ut=k.length;lt<ut;lt++)R(k[lt],F,T,P,Y)}function O(L){L.target.removeEventListener("dispose",O);for(const T in p){const P=p[T],Y=L.target.uuid;Y in P&&(P[Y].dispose(),delete P[Y])}}}function vT(r,t){function n(){let X=!1;const At=new nn;let gt=null;const Rt=new nn(0,0,0,0);return{setMask:function(It){gt!==It&&!X&&(r.colorMask(It,It,It,It),gt=It)},setLocked:function(It){X=It},setClear:function(It,St,Wt,Gt,Je){Je===!0&&(It*=Gt,St*=Gt,Wt*=Gt),At.set(It,St,Wt,Gt),Rt.equals(At)===!1&&(r.clearColor(It,St,Wt,Gt),Rt.copy(At))},reset:function(){X=!1,gt=null,Rt.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,gt=null,Rt=null,It=null;return{setReversed:function(St){if(At!==St){const Wt=t.get("EXT_clip_control");St?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),At=St;const Gt=It;It=null,this.setClear(Gt)}},getReversed:function(){return At},setTest:function(St){St?Mt(r.DEPTH_TEST):zt(r.DEPTH_TEST)},setMask:function(St){gt!==St&&!X&&(r.depthMask(St),gt=St)},setFunc:function(St){if(At&&(St=LS[St]),Rt!==St){switch(St){case Rd:r.depthFunc(r.NEVER);break;case Cd:r.depthFunc(r.ALWAYS);break;case Dd:r.depthFunc(r.LESS);break;case Jr:r.depthFunc(r.LEQUAL);break;case Ud:r.depthFunc(r.EQUAL);break;case Ld:r.depthFunc(r.GEQUAL);break;case Nd:r.depthFunc(r.GREATER);break;case Pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Rt=St}},setLocked:function(St){X=St},setClear:function(St){It!==St&&(It=St,At&&(St=1-St),r.clearDepth(St))},reset:function(){X=!1,gt=null,Rt=null,It=null,At=!1}}}function l(){let X=!1,At=null,gt=null,Rt=null,It=null,St=null,Wt=null,Gt=null,Je=null;return{setTest:function(Pe){X||(Pe?Mt(r.STENCIL_TEST):zt(r.STENCIL_TEST))},setMask:function(Pe){At!==Pe&&!X&&(r.stencilMask(Pe),At=Pe)},setFunc:function(Pe,oi,li){(gt!==Pe||Rt!==oi||It!==li)&&(r.stencilFunc(Pe,oi,li),gt=Pe,Rt=oi,It=li)},setOp:function(Pe,oi,li){(St!==Pe||Wt!==oi||Gt!==li)&&(r.stencilOp(Pe,oi,li),St=Pe,Wt=oi,Gt=li)},setLocked:function(Pe){X=Pe},setClear:function(Pe){Je!==Pe&&(r.clearStencil(Pe),Je=Pe)},reset:function(){X=!1,At=null,gt=null,Rt=null,It=null,St=null,Wt=null,Gt=null,Je=null}}}const c=new n,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},y=new WeakMap,E=[],C=null,M=!1,S=null,z=null,B=null,R=null,O=null,L=null,F=null,T=new re(0,0,0),P=0,Y=!1,N=null,k=null,lt=null,ut=null,K=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const ht=r.getParameter(r.VERSION);ht.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ht)[1]),H=$>=1):ht.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),H=$>=2);let bt=null,U={};const Z=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Et=new nn().fromArray(Z),Lt=new nn().fromArray(yt);function at(X,At,gt,Rt){const It=new Uint8Array(4),St=r.createTexture();r.bindTexture(X,St),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Wt=0;Wt<gt;Wt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,Rt,0,r.RGBA,r.UNSIGNED_BYTE,It):r.texImage2D(At+Wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,It);return St}const xt={};xt[r.TEXTURE_2D]=at(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=at(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=at(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=at(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Mt(r.DEPTH_TEST),f.setFunc(Jr),an(!1),sn(I_),Mt(r.CULL_FACE),Ee(Xi);function Mt(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function zt(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function ae(X,At){return g[X]!==At?(r.bindFramebuffer(X,At),g[X]=At,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=At),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=At),!0):!1}function Jt(X,At){let gt=E,Rt=!1;if(X){gt=y.get(At),gt===void 0&&(gt=[],y.set(At,gt));const It=X.textures;if(gt.length!==It.length||gt[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Wt=It.length;St<Wt;St++)gt[St]=r.COLOR_ATTACHMENT0+St;gt.length=It.length,Rt=!0}}else gt[0]!==r.BACK&&(gt[0]=r.BACK,Rt=!0);Rt&&r.drawBuffers(gt)}function Ke(X){return C!==X?(r.useProgram(X),C=X,!0):!1}const pe={[Xs]:r.FUNC_ADD,[tS]:r.FUNC_SUBTRACT,[eS]:r.FUNC_REVERSE_SUBTRACT};pe[nS]=r.MIN,pe[iS]=r.MAX;const be={[aS]:r.ZERO,[sS]:r.ONE,[rS]:r.SRC_COLOR,[Ad]:r.SRC_ALPHA,[hS]:r.SRC_ALPHA_SATURATE,[uS]:r.DST_COLOR,[lS]:r.DST_ALPHA,[oS]:r.ONE_MINUS_SRC_COLOR,[wd]:r.ONE_MINUS_SRC_ALPHA,[fS]:r.ONE_MINUS_DST_COLOR,[cS]:r.ONE_MINUS_DST_ALPHA,[dS]:r.CONSTANT_COLOR,[pS]:r.ONE_MINUS_CONSTANT_COLOR,[mS]:r.CONSTANT_ALPHA,[gS]:r.ONE_MINUS_CONSTANT_ALPHA};function Ee(X,At,gt,Rt,It,St,Wt,Gt,Je,Pe){if(X===Xi){M===!0&&(zt(r.BLEND),M=!1);return}if(M===!1&&(Mt(r.BLEND),M=!0),X!==$y){if(X!==S||Pe!==Y){if((z!==Xs||O!==Xs)&&(r.blendEquation(r.FUNC_ADD),z=Xs,O=Xs),Pe)switch(X){case Kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Td:r.blendFunc(r.ONE,r.ONE);break;case F_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case B_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ae("WebGLState: Invalid blending: ",X);break}else switch(X){case Kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Td:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case F_:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B_:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",X);break}B=null,R=null,L=null,F=null,T.set(0,0,0),P=0,S=X,Y=Pe}return}It=It||At,St=St||gt,Wt=Wt||Rt,(At!==z||It!==O)&&(r.blendEquationSeparate(pe[At],pe[It]),z=At,O=It),(gt!==B||Rt!==R||St!==L||Wt!==F)&&(r.blendFuncSeparate(be[gt],be[Rt],be[St],be[Wt]),B=gt,R=Rt,L=St,F=Wt),(Gt.equals(T)===!1||Je!==P)&&(r.blendColor(Gt.r,Gt.g,Gt.b,Je),T.copy(Gt),P=Je),S=X,Y=!1}function ge(X,At){X.side===ea?zt(r.CULL_FACE):Mt(r.CULL_FACE);let gt=X.side===Qn;At&&(gt=!gt),an(gt),X.blending===Kr&&X.transparent===!1?Ee(Xi):Ee(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Rt=X.stencilWrite;d.setTest(Rt),Rt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),un(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Mt(r.SAMPLE_ALPHA_TO_COVERAGE):zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function an(X){N!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),N=X)}function sn(X){X!==Qy?(Mt(r.CULL_FACE),X!==k&&(X===I_?r.cullFace(r.BACK):X===jy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):zt(r.CULL_FACE),k=X}function rn(X){X!==lt&&(H&&r.lineWidth(X),lt=X)}function un(X,At,gt){X?(Mt(r.POLYGON_OFFSET_FILL),(ut!==At||K!==gt)&&(ut=At,K=gt,f.getReversed()&&(At=-At),r.polygonOffset(At,gt))):zt(r.POLYGON_OFFSET_FILL)}function Ye(X){X?Mt(r.SCISSOR_TEST):zt(r.SCISSOR_TEST)}function on(X){X===void 0&&(X=r.TEXTURE0+I-1),bt!==X&&(r.activeTexture(X),bt=X)}function q(X,At,gt){gt===void 0&&(bt===null?gt=r.TEXTURE0+I-1:gt=bt);let Rt=U[gt];Rt===void 0&&(Rt={type:void 0,texture:void 0},U[gt]=Rt),(Rt.type!==X||Rt.texture!==At)&&(bt!==gt&&(r.activeTexture(gt),bt=gt),r.bindTexture(X,At||xt[X]),Rt.type=X,Rt.texture=At)}function He(){const X=U[bt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function De(){try{r.compressedTexImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function b(){try{r.texSubImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function J(){try{r.texSubImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function st(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function dt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function Tt(){try{r.texStorage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function Ct(){try{r.texStorage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function ft(){try{r.texImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function pt(){try{r.texImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function wt(X){return v[X]!==void 0?v[X]:r.getParameter(X)}function Ft(X,At){v[X]!==At&&(r.pixelStorei(X,At),v[X]=At)}function Nt(X){Et.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Et.copy(X))}function Dt(X){Lt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Lt.copy(X))}function jt(X,At){let gt=p.get(At);gt===void 0&&(gt=new WeakMap,p.set(At,gt));let Rt=gt.get(X);Rt===void 0&&(Rt=r.getUniformBlockIndex(At,X.name),gt.set(X,Rt))}function $t(X,At){const Rt=p.get(At).get(X);m.get(At)!==Rt&&(r.uniformBlockBinding(At,Rt,X.__bindingPointIndex),m.set(At,Rt))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},bt=null,U={},g={},y=new WeakMap,E=[],C=null,M=!1,S=null,z=null,B=null,R=null,O=null,L=null,F=null,T=new re(0,0,0),P=0,Y=!1,N=null,k=null,lt=null,ut=null,K=null,Et.set(0,0,r.canvas.width,r.canvas.height),Lt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Mt,disable:zt,bindFramebuffer:ae,drawBuffers:Jt,useProgram:Ke,setBlending:Ee,setMaterial:ge,setFlipSided:an,setCullFace:sn,setLineWidth:rn,setPolygonOffset:un,setScissorTest:Ye,activeTexture:on,bindTexture:q,unbindTexture:He,compressedTexImage2D:De,compressedTexImage3D:D,texImage2D:ft,texImage3D:pt,pixelStorei:Ft,getParameter:wt,updateUBOMapping:jt,uniformBlockBinding:$t,texStorage2D:Tt,texStorage3D:Ct,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:st,compressedTexSubImage3D:dt,scissor:Nt,viewport:Dt,reset:se}}function xT(r,t,n,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Yt,_=new WeakMap,v=new Set;let g;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,b){return E?new OffscreenCanvas(D,b):xu("canvas")}function M(D,b,J){let st=1;const dt=De(D);if((dt.width>J||dt.height>J)&&(st=J/Math.max(dt.width,dt.height)),st<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Tt=Math.floor(st*dt.width),Ct=Math.floor(st*dt.height);g===void 0&&(g=C(Tt,Ct));const ft=b?C(Tt,Ct):g;return ft.width=Tt,ft.height=Ct,ft.getContext("2d").drawImage(D,0,0,Tt,Ct),ie("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Tt+"x"+Ct+")."),ft}else return"data"in D&&ie("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),D;return D}function S(D){return D.generateMipmaps}function z(D){r.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(D,b,J,st,dt,Tt=!1){if(D!==null){if(r[D]!==void 0)return r[D];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ct;st&&(Ct=t.get("EXT_texture_norm16"),Ct||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=b;if(b===r.RED&&(J===r.FLOAT&&(ft=r.R32F),J===r.HALF_FLOAT&&(ft=r.R16F),J===r.UNSIGNED_BYTE&&(ft=r.R8),J===r.UNSIGNED_SHORT&&Ct&&(ft=Ct.R16_EXT),J===r.SHORT&&Ct&&(ft=Ct.R16_SNORM_EXT)),b===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.R8UI),J===r.UNSIGNED_SHORT&&(ft=r.R16UI),J===r.UNSIGNED_INT&&(ft=r.R32UI),J===r.BYTE&&(ft=r.R8I),J===r.SHORT&&(ft=r.R16I),J===r.INT&&(ft=r.R32I)),b===r.RG&&(J===r.FLOAT&&(ft=r.RG32F),J===r.HALF_FLOAT&&(ft=r.RG16F),J===r.UNSIGNED_BYTE&&(ft=r.RG8),J===r.UNSIGNED_SHORT&&Ct&&(ft=Ct.RG16_EXT),J===r.SHORT&&Ct&&(ft=Ct.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RG8UI),J===r.UNSIGNED_SHORT&&(ft=r.RG16UI),J===r.UNSIGNED_INT&&(ft=r.RG32UI),J===r.BYTE&&(ft=r.RG8I),J===r.SHORT&&(ft=r.RG16I),J===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),J===r.UNSIGNED_INT&&(ft=r.RGB32UI),J===r.BYTE&&(ft=r.RGB8I),J===r.SHORT&&(ft=r.RGB16I),J===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),J===r.UNSIGNED_INT&&(ft=r.RGBA32UI),J===r.BYTE&&(ft=r.RGBA8I),J===r.SHORT&&(ft=r.RGBA16I),J===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&(J===r.UNSIGNED_SHORT&&Ct&&(ft=Ct.RGB16_EXT),J===r.SHORT&&Ct&&(ft=Ct.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),b===r.RGBA){const pt=Tt?vu:Me.getTransfer(dt);J===r.FLOAT&&(ft=r.RGBA32F),J===r.HALF_FLOAT&&(ft=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ft=pt===Ne?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Ct&&(ft=Ct.RGBA16_EXT),J===r.SHORT&&Ct&&(ft=Ct.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function O(D,b){let J;return D?b===null||b===sa||b===ml?J=r.DEPTH24_STENCIL8:b===Vi?J=r.DEPTH32F_STENCIL8:b===pl&&(J=r.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===sa||b===ml?J=r.DEPTH_COMPONENT24:b===Vi?J=r.DEPTH_COMPONENT32F:b===pl&&(J=r.DEPTH_COMPONENT16),J}function L(D,b){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Tn&&D.minFilter!==Un?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function F(D){const b=D.target;b.removeEventListener("dispose",F),P(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&v.delete(b)}function T(D){const b=D.target;b.removeEventListener("dispose",T),N(b)}function P(D){const b=s.get(D);if(b.__webglInit===void 0)return;const J=D.source,st=y.get(J);if(st){const dt=st[b.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&Y(D),Object.keys(st).length===0&&y.delete(J)}s.remove(D)}function Y(D){const b=s.get(D);r.deleteTexture(b.__webglTexture);const J=D.source,st=y.get(J);delete st[b.__cacheKey],f.memory.textures--}function N(D){const b=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(b.__webglFramebuffer[st]))for(let dt=0;dt<b.__webglFramebuffer[st].length;dt++)r.deleteFramebuffer(b.__webglFramebuffer[st][dt]);else r.deleteFramebuffer(b.__webglFramebuffer[st]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[st])}else{if(Array.isArray(b.__webglFramebuffer))for(let st=0;st<b.__webglFramebuffer.length;st++)r.deleteFramebuffer(b.__webglFramebuffer[st]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let st=0;st<b.__webglColorRenderbuffer.length;st++)b.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[st]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=D.textures;for(let st=0,dt=J.length;st<dt;st++){const Tt=s.get(J[st]);Tt.__webglTexture&&(r.deleteTexture(Tt.__webglTexture),f.memory.textures--),s.remove(J[st])}s.remove(D)}let k=0;function lt(){k=0}function ut(){return k}function K(D){k=D}function I(){const D=k;return D>=l.maxTextures&&ie("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function H(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function $(D,b){const J=s.get(D);if(D.isVideoTexture&&q(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const st=D.image;if(st===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(J,D,b);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+b)}function ht(D,b){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){zt(J,D,b);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+b)}function bt(D,b){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){zt(J,D,b);return}n.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+b)}function U(D,b){const J=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){ae(J,D,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+b)}const Z={[dl]:r.REPEAT,[La]:r.CLAMP_TO_EDGE,[Od]:r.MIRRORED_REPEAT},yt={[Tn]:r.NEAREST,[xS]:r.NEAREST_MIPMAP_NEAREST,[Lc]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[Vh]:r.LINEAR_MIPMAP_NEAREST,[qs]:r.LINEAR_MIPMAP_LINEAR},Et={[bS]:r.NEVER,[RS]:r.ALWAYS,[ES]:r.LESS,[P0]:r.LEQUAL,[TS]:r.EQUAL,[O0]:r.GEQUAL,[AS]:r.GREATER,[wS]:r.NOTEQUAL};function Lt(D,b){if(b.type===Vi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Un||b.magFilter===Vh||b.magFilter===Lc||b.magFilter===qs||b.minFilter===Un||b.minFilter===Vh||b.minFilter===Lc||b.minFilter===qs)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Z[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Z[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Z[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,yt[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Tn||b.minFilter!==Lc&&b.minFilter!==qs||b.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function at(D,b){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",F));const st=b.source;let dt=y.get(st);dt===void 0&&(dt={},y.set(st,dt));const Tt=H(b);if(Tt!==D.__cacheKey){dt[Tt]===void 0&&(dt[Tt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,J=!0),dt[Tt].usedTimes++;const Ct=dt[D.__cacheKey];Ct!==void 0&&(dt[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&Y(b)),D.__cacheKey=Tt,D.__webglTexture=dt[Tt].texture}return J}function xt(D,b,J){return Math.floor(Math.floor(D/J)/b)}function Mt(D,b,J,st){const Tt=D.updateRanges;if(Tt.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,J,st,b.data);else{Tt.sort((Ft,Nt)=>Ft.start-Nt.start);let Ct=0;for(let Ft=1;Ft<Tt.length;Ft++){const Nt=Tt[Ct],Dt=Tt[Ft],jt=Nt.start+Nt.count,$t=xt(Dt.start,b.width,4),se=xt(Nt.start,b.width,4);Dt.start<=jt+1&&$t===se&&xt(Dt.start+Dt.count-1,b.width,4)===$t?Nt.count=Math.max(Nt.count,Dt.start+Dt.count-Nt.start):(++Ct,Tt[Ct]=Dt)}Tt.length=Ct+1;const ft=n.getParameter(r.UNPACK_ROW_LENGTH),pt=n.getParameter(r.UNPACK_SKIP_PIXELS),wt=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ft=0,Nt=Tt.length;Ft<Nt;Ft++){const Dt=Tt[Ft],jt=Math.floor(Dt.start/4),$t=Math.ceil(Dt.count/4),se=jt%b.width,X=Math.floor(jt/b.width),At=$t,gt=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,se),n.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,se,X,At,gt,J,st,b.data)}D.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ft),n.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(r.UNPACK_SKIP_ROWS,wt)}}function zt(D,b,J){let st=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=r.TEXTURE_3D);const dt=at(D,b),Tt=b.source;n.bindTexture(st,D.__webglTexture,r.TEXTURE0+J);const Ct=s.get(Tt);if(Tt.version!==Ct.__version||dt===!0){if(n.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const gt=Me.getPrimaries(Me.workingColorSpace),Rt=b.colorSpace===na?null:Me.getPrimaries(b.colorSpace),It=b.colorSpace===na||gt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}n.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let pt=M(b.image,!1,l.maxTextureSize);pt=He(b,pt);const wt=c.convert(b.format,b.colorSpace),Ft=c.convert(b.type);let Nt=R(b.internalFormat,wt,Ft,b.normalized,b.colorSpace,b.isVideoTexture);Lt(st,b);let Dt;const jt=b.mipmaps,$t=b.isVideoTexture!==!0,se=Ct.__version===void 0||dt===!0,X=Tt.dataReady,At=L(b,pt);if(b.isDepthTexture)Nt=O(b.format===Ys,b.type),se&&($t?n.texStorage2D(r.TEXTURE_2D,1,Nt,pt.width,pt.height):n.texImage2D(r.TEXTURE_2D,0,Nt,pt.width,pt.height,0,wt,Ft,null));else if(b.isDataTexture)if(jt.length>0){$t&&se&&n.texStorage2D(r.TEXTURE_2D,At,Nt,jt[0].width,jt[0].height);for(let gt=0,Rt=jt.length;gt<Rt;gt++)Dt=jt[gt],$t?X&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,Dt.width,Dt.height,wt,Ft,Dt.data):n.texImage2D(r.TEXTURE_2D,gt,Nt,Dt.width,Dt.height,0,wt,Ft,Dt.data);b.generateMipmaps=!1}else $t?(se&&n.texStorage2D(r.TEXTURE_2D,At,Nt,pt.width,pt.height),X&&Mt(b,pt,wt,Ft)):n.texImage2D(r.TEXTURE_2D,0,Nt,pt.width,pt.height,0,wt,Ft,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&se&&n.texStorage3D(r.TEXTURE_2D_ARRAY,At,Nt,jt[0].width,jt[0].height,pt.depth);for(let gt=0,Rt=jt.length;gt<Rt;gt++)if(Dt=jt[gt],b.format!==ki)if(wt!==null)if($t){if(X)if(b.layerUpdates.size>0){const It=vv(Dt.width,Dt.height,b.format,b.type);for(const St of b.layerUpdates){const Wt=Dt.data.subarray(St*It/Dt.data.BYTES_PER_ELEMENT,(St+1)*It/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,St,Dt.width,Dt.height,1,wt,Wt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,0,Dt.width,Dt.height,pt.depth,wt,Dt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,gt,Nt,Dt.width,Dt.height,pt.depth,0,Dt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?X&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,0,Dt.width,Dt.height,pt.depth,wt,Ft,Dt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,gt,Nt,Dt.width,Dt.height,pt.depth,0,wt,Ft,Dt.data)}else{$t&&se&&n.texStorage2D(r.TEXTURE_2D,At,Nt,jt[0].width,jt[0].height);for(let gt=0,Rt=jt.length;gt<Rt;gt++)Dt=jt[gt],b.format!==ki?wt!==null?$t?X&&n.compressedTexSubImage2D(r.TEXTURE_2D,gt,0,0,Dt.width,Dt.height,wt,Dt.data):n.compressedTexImage2D(r.TEXTURE_2D,gt,Nt,Dt.width,Dt.height,0,Dt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?X&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,Dt.width,Dt.height,wt,Ft,Dt.data):n.texImage2D(r.TEXTURE_2D,gt,Nt,Dt.width,Dt.height,0,wt,Ft,Dt.data)}else if(b.isDataArrayTexture)if($t){if(se&&n.texStorage3D(r.TEXTURE_2D_ARRAY,At,Nt,pt.width,pt.height,pt.depth),X)if(b.layerUpdates.size>0){const gt=vv(pt.width,pt.height,b.format,b.type);for(const Rt of b.layerUpdates){const It=pt.data.subarray(Rt*gt/pt.data.BYTES_PER_ELEMENT,(Rt+1)*gt/pt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Rt,pt.width,pt.height,1,wt,Ft,It)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,wt,Ft,pt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,pt.width,pt.height,pt.depth,0,wt,Ft,pt.data);else if(b.isData3DTexture)$t?(se&&n.texStorage3D(r.TEXTURE_3D,At,Nt,pt.width,pt.height,pt.depth),X&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,wt,Ft,pt.data)):n.texImage3D(r.TEXTURE_3D,0,Nt,pt.width,pt.height,pt.depth,0,wt,Ft,pt.data);else if(b.isFramebufferTexture){if(se)if($t)n.texStorage2D(r.TEXTURE_2D,At,Nt,pt.width,pt.height);else{let gt=pt.width,Rt=pt.height;for(let It=0;It<At;It++)n.texImage2D(r.TEXTURE_2D,It,Nt,gt,Rt,0,wt,Ft,null),gt>>=1,Rt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const gt=r.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),pt.parentNode!==gt){gt.appendChild(pt),v.add(b),gt.onpaint=Rt=>{const It=Rt.changedElements;for(const St of v)It.includes(St.image)&&(St.needsUpdate=!0)},gt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,pt);else{const It=r.RGBA,St=r.RGBA,Wt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,It,St,Wt,pt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(jt.length>0){if($t&&se){const gt=De(jt[0]);n.texStorage2D(r.TEXTURE_2D,At,Nt,gt.width,gt.height)}for(let gt=0,Rt=jt.length;gt<Rt;gt++)Dt=jt[gt],$t?X&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,wt,Ft,Dt):n.texImage2D(r.TEXTURE_2D,gt,Nt,wt,Ft,Dt);b.generateMipmaps=!1}else if($t){if(se){const gt=De(pt);n.texStorage2D(r.TEXTURE_2D,At,Nt,gt.width,gt.height)}X&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Ft,pt)}else n.texImage2D(r.TEXTURE_2D,0,Nt,wt,Ft,pt);S(b)&&z(st),Ct.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ae(D,b,J){if(b.image.length!==6)return;const st=at(D,b),dt=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+J);const Tt=s.get(dt);if(dt.version!==Tt.__version||st===!0){n.activeTexture(r.TEXTURE0+J);const Ct=Me.getPrimaries(Me.workingColorSpace),ft=b.colorSpace===na?null:Me.getPrimaries(b.colorSpace),pt=b.colorSpace===na||Ct===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const wt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ft=b.image[0]&&b.image[0].isDataTexture,Nt=[];for(let St=0;St<6;St++)!wt&&!Ft?Nt[St]=M(b.image[St],!0,l.maxCubemapSize):Nt[St]=Ft?b.image[St].image:b.image[St],Nt[St]=He(b,Nt[St]);const Dt=Nt[0],jt=c.convert(b.format,b.colorSpace),$t=c.convert(b.type),se=R(b.internalFormat,jt,$t,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,At=Tt.__version===void 0||st===!0,gt=dt.dataReady;let Rt=L(b,Dt);Lt(r.TEXTURE_CUBE_MAP,b);let It;if(wt){X&&At&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,se,Dt.width,Dt.height);for(let St=0;St<6;St++){It=Nt[St].mipmaps;for(let Wt=0;Wt<It.length;Wt++){const Gt=It[Wt];b.format!==ki?jt!==null?X?gt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,0,0,Gt.width,Gt.height,jt,Gt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,se,Gt.width,Gt.height,0,Gt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,0,0,Gt.width,Gt.height,jt,$t,Gt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt,se,Gt.width,Gt.height,0,jt,$t,Gt.data)}}}else{if(It=b.mipmaps,X&&At){It.length>0&&Rt++;const St=De(Nt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Rt,se,St.width,St.height)}for(let St=0;St<6;St++)if(Ft){X?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Nt[St].width,Nt[St].height,jt,$t,Nt[St].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,se,Nt[St].width,Nt[St].height,0,jt,$t,Nt[St].data);for(let Wt=0;Wt<It.length;Wt++){const Je=It[Wt].image[St].image;X?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,0,0,Je.width,Je.height,jt,$t,Je.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,se,Je.width,Je.height,0,jt,$t,Je.data)}}else{X?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,jt,$t,Nt[St]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,se,jt,$t,Nt[St]);for(let Wt=0;Wt<It.length;Wt++){const Gt=It[Wt];X?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,0,0,jt,$t,Gt.image[St]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Wt+1,se,jt,$t,Gt.image[St])}}}S(b)&&z(r.TEXTURE_CUBE_MAP),Tt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Jt(D,b,J,st,dt,Tt){const Ct=c.convert(J.format,J.colorSpace),ft=c.convert(J.type),pt=R(J.internalFormat,Ct,ft,J.normalized,J.colorSpace),wt=s.get(b),Ft=s.get(J);if(Ft.__renderTarget=b,!wt.__hasExternalTextures){const Nt=Math.max(1,b.width>>Tt),Dt=Math.max(1,b.height>>Tt);dt===r.TEXTURE_3D||dt===r.TEXTURE_2D_ARRAY?n.texImage3D(dt,Tt,pt,Nt,Dt,b.depth,0,Ct,ft,null):n.texImage2D(dt,Tt,pt,Nt,Dt,0,Ct,ft,null)}n.bindFramebuffer(r.FRAMEBUFFER,D),on(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,dt,Ft.__webglTexture,0,Ye(b)):(dt===r.TEXTURE_2D||dt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,dt,Ft.__webglTexture,Tt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(D,b,J){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const st=b.depthTexture,dt=st&&st.isDepthTexture?st.type:null,Tt=O(b.stencilBuffer,dt),Ct=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;on(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(b),Tt,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(b),Tt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Tt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ct,r.RENDERBUFFER,D)}else{const st=b.textures;for(let dt=0;dt<st.length;dt++){const Tt=st[dt],Ct=c.convert(Tt.format,Tt.colorSpace),ft=c.convert(Tt.type),pt=R(Tt.internalFormat,Ct,ft,Tt.normalized,Tt.colorSpace);on(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(b),pt,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(b),pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(D,b,J){const st=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const dt=s.get(b.depthTexture);if(dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),st){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),dt.__webglTexture===void 0){dt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,b.depthTexture);const wt=c.convert(b.depthTexture.format),Ft=c.convert(b.depthTexture.type);let Nt;b.depthTexture.format===Oa?Nt=r.DEPTH_COMPONENT24:b.depthTexture.format===Ys&&(Nt=r.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Nt,b.width,b.height,0,wt,Ft,null)}}else $(b.depthTexture,0);const Tt=dt.__webglTexture,Ct=Ye(b),ft=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,pt=b.depthTexture.format===Ys?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Oa)on(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,ft,Tt,0,Ct):r.framebufferTexture2D(r.FRAMEBUFFER,pt,ft,Tt,0);else if(b.depthTexture.format===Ys)on(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,ft,Tt,0,Ct):r.framebufferTexture2D(r.FRAMEBUFFER,pt,ft,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(D){const b=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const st=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){const dt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",dt)};st.addEventListener("dispose",dt),b.__depthDisposeCallback=dt}b.__boundDepthTexture=st}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let st=0;st<6;st++)pe(b.__webglFramebuffer[st],D,st);else{const st=D.texture.mipmaps;st&&st.length>0?pe(b.__webglFramebuffer[0],D,0):pe(b.__webglFramebuffer,D,0)}else if(J){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=r.createRenderbuffer(),Ke(b.__webglDepthbuffer[st],D,!1);else{const dt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=b.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,Tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,Tt)}}else{const st=D.texture.mipmaps;if(st&&st.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ke(b.__webglDepthbuffer,D,!1);else{const dt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,Tt)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(D,b,J){const st=s.get(D);b!==void 0&&Jt(st.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&be(D)}function ge(D){const b=D.texture,J=s.get(D),st=s.get(b);D.addEventListener("dispose",T);const dt=D.textures,Tt=D.isWebGLCubeRenderTarget===!0,Ct=dt.length>1;if(Ct||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=b.version,f.memory.textures++),Tt){J.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[ft]=[];for(let pt=0;pt<b.mipmaps.length;pt++)J.__webglFramebuffer[ft][pt]=r.createFramebuffer()}else J.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)J.__webglFramebuffer[ft]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Ct)for(let ft=0,pt=dt.length;ft<pt;ft++){const wt=s.get(dt[ft]);wt.__webglTexture===void 0&&(wt.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&on(D)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ft=0;ft<dt.length;ft++){const pt=dt[ft];J.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ft]);const wt=c.convert(pt.format,pt.colorSpace),Ft=c.convert(pt.type),Nt=R(pt.internalFormat,wt,Ft,pt.normalized,pt.colorSpace,D.isXRRenderTarget===!0),Dt=Ye(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,Nt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,J.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Ke(J.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Tt){n.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Jt(J.__webglFramebuffer[ft][pt],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else Jt(J.__webglFramebuffer[ft],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);S(b)&&z(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ct){for(let ft=0,pt=dt.length;ft<pt;ft++){const wt=dt[ft],Ft=s.get(wt);let Nt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Nt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Nt,Ft.__webglTexture),Lt(Nt,wt),Jt(J.__webglFramebuffer,D,wt,r.COLOR_ATTACHMENT0+ft,Nt,0),S(wt)&&z(Nt)}n.unbindTexture()}else{let ft=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ft,st.__webglTexture),Lt(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Jt(J.__webglFramebuffer[pt],D,b,r.COLOR_ATTACHMENT0,ft,pt);else Jt(J.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,ft,0);S(b)&&z(ft),n.unbindTexture()}D.depthBuffer&&be(D)}function an(D){const b=D.textures;for(let J=0,st=b.length;J<st;J++){const dt=b[J];if(S(dt)){const Tt=B(D),Ct=s.get(dt).__webglTexture;n.bindTexture(Tt,Ct),z(Tt),n.unbindTexture()}}}const sn=[],rn=[];function un(D){if(D.samples>0){if(on(D)===!1){const b=D.textures,J=D.width,st=D.height;let dt=r.COLOR_BUFFER_BIT;const Tt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=s.get(D),ft=b.length>1;if(ft)for(let wt=0;wt<b.length;wt++)n.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const pt=D.texture.mipmaps;pt&&pt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let wt=0;wt<b.length;wt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(dt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(dt|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[wt]);const Ft=s.get(b[wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ft,0)}r.blitFramebuffer(0,0,J,st,0,0,J,st,dt,r.NEAREST),m===!0&&(sn.length=0,rn.length=0,sn.push(r.COLOR_ATTACHMENT0+wt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(sn.push(Tt),rn.push(Tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,sn))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let wt=0;wt<b.length;wt++){n.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,Ct.__webglColorRenderbuffer[wt]);const Ft=s.get(b[wt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,Ft,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ye(D){return Math.min(l.maxSamples,D.samples)}function on(D){const b=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function q(D){const b=f.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function He(D,b){const J=D.colorSpace,st=D.format,dt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==_u&&J!==na&&(Me.getTransfer(J)===Ne?(st!==ki||dt!==Si)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",J)),b}function De(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=I,this.resetTextureUnits=lt,this.getTextureUnits=ut,this.setTextureUnits=K,this.setTexture2D=$,this.setTexture2DArray=ht,this.setTexture3D=bt,this.setTextureCube=U,this.rebindTextures=Ee,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Jt,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yT(r,t){function n(s,l=na){let c;const f=Me.getTransfer(l);if(s===Si)return r.UNSIGNED_BYTE;if(s===R0)return r.UNSIGNED_SHORT_4_4_4_4;if(s===C0)return r.UNSIGNED_SHORT_5_5_5_1;if(s===r1)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===o1)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===a1)return r.BYTE;if(s===s1)return r.SHORT;if(s===pl)return r.UNSIGNED_SHORT;if(s===w0)return r.INT;if(s===sa)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===jn)return r.HALF_FLOAT;if(s===l1)return r.ALPHA;if(s===c1)return r.RGB;if(s===ki)return r.RGBA;if(s===Oa)return r.DEPTH_COMPONENT;if(s===Ys)return r.DEPTH_STENCIL;if(s===D0)return r.RED;if(s===U0)return r.RED_INTEGER;if(s===Ks)return r.RG;if(s===L0)return r.RG_INTEGER;if(s===N0)return r.RGBA_INTEGER;if(s===ou||s===lu||s===cu||s===uu)if(f===Ne)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Id||s===Fd||s===Bd||s===zd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===pu||s===Wd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Hd||s===Gd)return f===Ne?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Vd)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===kd)return c.COMPRESSED_R11_EAC;if(s===Xd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===pu)return c.COMPRESSED_RG11_EAC;if(s===Wd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===qd||s===Yd||s===Zd||s===Kd||s===Qd||s===jd||s===Jd||s===$d||s===t0||s===e0||s===n0||s===i0||s===a0||s===s0)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===qd)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yd)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zd)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kd)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qd)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jd)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jd)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$d)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===t0)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===e0)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===n0)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===i0)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===a0)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===s0)return f===Ne?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===r0||s===o0||s===l0)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===r0)return f===Ne?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===o0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===l0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===c0||s===u0||s===mu||s===f0)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===c0)return c.COMPRESSED_RED_RGTC1_EXT;if(s===u0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===f0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ml?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const ST=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
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

}`;class bT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new x1(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new Ln({vertexShader:ST,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sn(new yl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ET extends xs{constructor(t,n){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,y=null,E=null;const C=typeof XRWebGLBinding<"u",M=new bT,S={},z=n.getContextAttributes();let B=null,R=null;const O=[],L=[],F=new Yt;let T=null;const P=new yi;P.viewport=new nn;const Y=new yi;Y.viewport=new nn;const N=[P,Y],k=new CM;let lt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let xt=O[at];return xt===void 0&&(xt=new Zh,O[at]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(at){let xt=O[at];return xt===void 0&&(xt=new Zh,O[at]=xt),xt.getGripSpace()},this.getHand=function(at){let xt=O[at];return xt===void 0&&(xt=new Zh,O[at]=xt),xt.getHandSpace()};function K(at){const xt=L.indexOf(at.inputSource);if(xt===-1)return;const Mt=O[xt];Mt!==void 0&&(Mt.update(at.inputSource,at.frame,p||f),Mt.dispatchEvent({type:at.type,data:at.inputSource}))}function I(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let at=0;at<O.length;at++){const xt=L[at];xt!==null&&(L[at]=null,O[at].disconnect(xt))}lt=null,ut=null,M.reset();for(const at in S)delete S[at];t.setRenderTarget(B),y=null,g=null,v=null,l=null,R=null,Lt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),z.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,zt=null,ae=null;z.depth&&(ae=z.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=z.stencil?Ys:Oa,zt=z.stencil?ml:sa);const Jt={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Jt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new zn(g.textureWidth,g.textureHeight,{format:ki,type:Si,depthTexture:new eo(g.textureWidth,g.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Mt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,Mt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new zn(y.framebufferWidth,y.framebufferHeight,{format:ki,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Lt.setContext(l),Lt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(at){for(let xt=0;xt<at.removed.length;xt++){const Mt=at.removed[xt],zt=L.indexOf(Mt);zt>=0&&(L[zt]=null,O[zt].disconnect(Mt))}for(let xt=0;xt<at.added.length;xt++){const Mt=at.added[xt];let zt=L.indexOf(Mt);if(zt===-1){for(let Jt=0;Jt<O.length;Jt++)if(Jt>=L.length){L.push(Mt),zt=Jt;break}else if(L[Jt]===null){L[Jt]=Mt,zt=Jt;break}if(zt===-1)break}const ae=O[zt];ae&&ae.connect(Mt)}}const $=new j,ht=new j;function bt(at,xt,Mt){$.setFromMatrixPosition(xt.matrixWorld),ht.setFromMatrixPosition(Mt.matrixWorld);const zt=$.distanceTo(ht),ae=xt.projectionMatrix.elements,Jt=Mt.projectionMatrix.elements,Ke=ae[14]/(ae[10]-1),pe=ae[14]/(ae[10]+1),be=(ae[9]+1)/ae[5],Ee=(ae[9]-1)/ae[5],ge=(ae[8]-1)/ae[0],an=(Jt[8]+1)/Jt[0],sn=Ke*ge,rn=Ke*an,un=zt/(-ge+an),Ye=un*-ge;if(xt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ye),at.translateZ(un),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),ae[10]===-1)at.projectionMatrix.copy(xt.projectionMatrix),at.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const on=Ke+un,q=pe+un,He=sn-Ye,De=rn+(zt-Ye),D=be*pe/q*on,b=Ee*pe/q*on;at.projectionMatrix.makePerspective(He,De,D,b,on,q),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function U(at,xt){xt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(xt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let xt=at.near,Mt=at.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),k.near=Y.near=P.near=xt,k.far=Y.far=P.far=Mt,(lt!==k.near||ut!==k.far)&&(l.updateRenderState({depthNear:k.near,depthFar:k.far}),lt=k.near,ut=k.far),k.layers.mask=at.layers.mask|6,P.layers.mask=k.layers.mask&-5,Y.layers.mask=k.layers.mask&-3;const zt=at.parent,ae=k.cameras;U(k,zt);for(let Jt=0;Jt<ae.length;Jt++)U(ae[Jt],zt);ae.length===2?bt(k,P,Y):k.projectionMatrix.copy(P.projectionMatrix),Z(at,k,zt)};function Z(at,xt,Mt){Mt===null?at.matrix.copy(xt.matrixWorld):(at.matrix.copy(Mt.matrixWorld),at.matrix.invert(),at.matrix.multiply(xt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(xt.projectionMatrix),at.projectionMatrixInverse.copy(xt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=_l*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(at){m=at,g!==null&&(g.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(k)},this.getCameraTexture=function(at){return S[at]};let yt=null;function Et(at,xt){if(_=xt.getViewerPose(p||f),E=xt,_!==null){const Mt=_.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let zt=!1;Mt.length!==k.cameras.length&&(k.cameras.length=0,zt=!0);for(let pe=0;pe<Mt.length;pe++){const be=Mt[pe];let Ee=null;if(y!==null)Ee=y.getViewport(be);else{const an=v.getViewSubImage(g,be);Ee=an.viewport,pe===0&&(t.setRenderTargetTextures(R,an.colorTexture,an.depthStencilTexture),t.setRenderTarget(R))}let ge=N[pe];ge===void 0&&(ge=new yi,ge.layers.enable(pe),ge.viewport=new nn,N[pe]=ge),ge.matrix.fromArray(be.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(be.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),pe===0&&(k.matrix.copy(ge.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),zt===!0&&k.cameras.push(ge)}const ae=l.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const pe=v.getDepthInformation(Mt[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(ae&&ae.includes("camera-access")&&C){t.state.unbindTexture(),v=s.getBinding();for(let pe=0;pe<Mt.length;pe++){const be=Mt[pe].camera;if(be){let Ee=S[be];Ee||(Ee=new x1,S[be]=Ee);const ge=v.getCameraImage(be);Ee.sourceTexture=ge}}}}for(let Mt=0;Mt<O.length;Mt++){const zt=L[Mt],ae=O[Mt];zt!==null&&ae!==void 0&&ae.update(zt,xt,p||f)}yt&&yt(at,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),E=null}const Lt=new A1;Lt.setAnimationLoop(Et),this.setAnimationLoop=function(at){yt=at},this.dispose=function(){}}}const TT=new Ze,N1=new le;N1.set(-1,0,0,0,1,0,0,0,1);function AT(r,t){function n(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,y1(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,z,B,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,R)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),C(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,z,B):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,n(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,n(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,n(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,n(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const z=t.get(S),B=z.envMap,R=z.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(TT.makeRotationFromEuler(R)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(N1),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,z,B){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*z,M.scale.value=B*.5,S.map&&(M.map.value=S.map,n(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,z){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function C(M,S){const z=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function wT(r,t,n,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,O){const L=O.program;s.uniformBlockBinding(R,L)}function p(R,O){let L=l[R.id];L===void 0&&(M(R),L=_(R),l[R.id]=L,R.addEventListener("dispose",z));const F=O.program;s.updateUBOMapping(R,F);const T=t.render.frame;c[R.id]!==T&&(g(R),c[R.id]=T)}function _(R){const O=v();R.__bindingPointIndex=O;const L=r.createBuffer(),F=R.__size,T=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,F,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,L),L}function v(){for(let R=0;R<d;R++)if(f.indexOf(R)===-1)return f.push(R),R;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const O=l[R.id],L=R.uniforms,F=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let T=0,P=L.length;T<P;T++){const Y=L[T];if(Array.isArray(Y))for(let N=0,k=Y.length;N<k;N++)y(Y[N],T,N,F);else y(Y,T,0,F)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,O,L,F){if(C(R,O,L,F)===!0){const T=R.__offset,P=R.value;if(Array.isArray(P)){let Y=0;for(let N=0;N<P.length;N++){const k=P[N],lt=S(k);E(k,R.__data,Y),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(Y+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(P,R.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,R.__data)}}function E(R,O,L){typeof R=="number"||typeof R=="boolean"?O[0]=R:R.isMatrix3?(O[0]=R.elements[0],O[1]=R.elements[1],O[2]=R.elements[2],O[3]=0,O[4]=R.elements[3],O[5]=R.elements[4],O[6]=R.elements[5],O[7]=0,O[8]=R.elements[6],O[9]=R.elements[7],O[10]=R.elements[8],O[11]=0):ArrayBuffer.isView(R)?O.set(new R.constructor(R.buffer,R.byteOffset,O.length)):R.toArray(O,L)}function C(R,O,L,F){const T=R.value,P=O+"_"+L;if(F[P]===void 0)return typeof T=="number"||typeof T=="boolean"?F[P]=T:ArrayBuffer.isView(T)?F[P]=T.slice():F[P]=T.clone(),!0;{const Y=F[P];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return F[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Y.equals(T)===!1)return Y.copy(T),!0}}return!1}function M(R){const O=R.uniforms;let L=0;const F=16;for(let P=0,Y=O.length;P<Y;P++){const N=Array.isArray(O[P])?O[P]:[O[P]];for(let k=0,lt=N.length;k<lt;k++){const ut=N[k],K=Array.isArray(ut.value)?ut.value:[ut.value];for(let I=0,H=K.length;I<H;I++){const $=K[I],ht=S($),bt=L%F,U=bt%ht.boundary,Z=bt+U;L+=U,Z!==0&&F-Z<ht.storage&&(L+=F-Z),ut.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=L,L+=ht.storage}}}const T=L%F;return T>0&&(L+=F-T),R.__size=L,R.__cache={},this}function S(R){const O={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(O.boundary=4,O.storage=4):R.isVector2?(O.boundary=8,O.storage=8):R.isVector3||R.isColor?(O.boundary=16,O.storage=12):R.isVector4?(O.boundary=16,O.storage=16):R.isMatrix3?(O.boundary=48,O.storage=48):R.isMatrix4?(O.boundary=64,O.storage=64):R.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(O.boundary=16,O.storage=R.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",R),O}function z(R){const O=R.target;O.removeEventListener("dispose",z);const L=f.indexOf(O.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function B(){for(const R in l)r.deleteBuffer(l[R]);f=[],l={},c={}}return{bind:m,update:p,dispose:B}}const RT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function CT(){return $i===null&&($i=new _1(RT,16,16,Ks,jn),$i.name="DFG_LUT",$i.minFilter=Un,$i.magFilter=Un,$i.wrapS=La,$i.wrapT=La,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class DT{constructor(t={}){const{canvas:n=DS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Si}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const C=y,M=new Set([N0,L0,U0]),S=new Set([Si,sa,pl,ml,R0,C0]),z=new Uint32Array(4),B=new Int32Array(4),R=new j;let O=null,L=null;const F=[],T=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=aa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let N=!1,k=null,lt=null,ut=null,K=null;this._outputColorSpace=ri;let I=0,H=0,$=null,ht=-1,bt=null;const U=new nn,Z=new nn;let yt=null;const Et=new re(0);let Lt=0,at=n.width,xt=n.height,Mt=1,zt=null,ae=null;const Jt=new nn(0,0,at,xt),Ke=new nn(0,0,at,xt);let pe=!1;const be=new G0;let Ee=!1,ge=!1;const an=new Ze,sn=new j,rn=new nn,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function on(){return $===null?Mt:1}let q=s;function He(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${S0}`),n.addEventListener("webglcontextlost",Je,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",oi,!1),q===null){const W="webgl2";if(q=He(W,A),q===null)throw He(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ae("WebGLRenderer: "+A.message),A}let De,D,b,J,st,dt,Tt,Ct,ft,pt,wt,Ft,Nt,Dt,jt,$t,se,X,At,gt,Rt,It,St;function Wt(){De=new C3(q),De.init(),Rt=new yT(q,De),D=new S3(q,De,t,Rt),b=new vT(q,De),D.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),lt=q.createFramebuffer(),ut=q.createFramebuffer(),K=q.createFramebuffer(),J=new L3(q),st=new aT,dt=new xT(q,De,b,st,D,Rt,J),Tt=new R3(Y),Ct=new IM(q),It=new x3(q,Ct),ft=new D3(q,Ct,J,It),pt=new P3(q,ft,Ct,It,J),X=new N3(q,D,dt),jt=new M3(st),wt=new iT(Y,Tt,De,D,It,jt),Ft=new AT(Y,st),Nt=new rT,Dt=new hT(De),se=new v3(Y,Tt,b,pt,E,m),$t=new _T(Y,pt,D),St=new wT(q,J,D,b),At=new y3(q,De,J),gt=new U3(q,De,J),J.programs=wt.programs,Y.capabilities=D,Y.extensions=De,Y.properties=st,Y.renderLists=Nt,Y.shadowMap=$t,Y.state=b,Y.info=J}Wt(),C!==Si&&(P=new I3(C,n.width,n.height,d,l,c));const Gt=new ET(Y,q);this.xr=Gt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(A){A!==void 0&&(Mt=A,this.setSize(at,xt,!1))},this.getSize=function(A){return A.set(at,xt)},this.setSize=function(A,W,rt=!0){if(Gt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}at=A,xt=W,n.width=Math.floor(A*Mt),n.height=Math.floor(W*Mt),rt===!0&&(n.style.width=A+"px",n.style.height=W+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(at*Mt,xt*Mt).floor()},this.setDrawingBufferSize=function(A,W,rt){at=A,xt=W,Mt=rt,n.width=Math.floor(A*rt),n.height=Math.floor(W*rt),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(C===Si){Ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Jt)},this.setViewport=function(A,W,rt,nt){A.isVector4?Jt.set(A.x,A.y,A.z,A.w):Jt.set(A,W,rt,nt),b.viewport(U.copy(Jt).multiplyScalar(Mt).round())},this.getScissor=function(A){return A.copy(Ke)},this.setScissor=function(A,W,rt,nt){A.isVector4?Ke.set(A.x,A.y,A.z,A.w):Ke.set(A,W,rt,nt),b.scissor(Z.copy(Ke).multiplyScalar(Mt).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){b.setScissorTest(pe=A)},this.setOpaqueSort=function(A){zt=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,rt=!0){let nt=0;if(A){let it=!1;if($!==null){const Pt=$.texture.format;it=M.has(Pt)}if(it){const Pt=$.texture.type,Ht=S.has(Pt),Ut=se.getClearColor(),kt=se.getClearAlpha(),Vt=Ut.r,te=Ut.g,ce=Ut.b;Ht?(z[0]=Vt,z[1]=te,z[2]=ce,z[3]=kt,q.clearBufferuiv(q.COLOR,0,z)):(B[0]=Vt,B[1]=te,B[2]=ce,B[3]=kt,q.clearBufferiv(q.COLOR,0,B))}else nt|=q.COLOR_BUFFER_BIT}W&&(nt|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(nt|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&q.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),k=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Je,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",oi,!1),se.dispose(),Nt.dispose(),Dt.dispose(),st.dispose(),Tt.dispose(),pt.dispose(),It.dispose(),St.dispose(),wt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",dn),Gt.removeEventListener("sessionend",Nn),Jn.stop()};function Je(A){A.preventDefault(),X_("WebGLRenderer: Context Lost."),N=!0}function Pe(){X_("WebGLRenderer: Context Restored."),N=!1;const A=J.autoReset,W=$t.enabled,rt=$t.autoUpdate,nt=$t.needsUpdate,it=$t.type;Wt(),J.autoReset=A,$t.enabled=W,$t.autoUpdate=rt,$t.needsUpdate=nt,$t.type=it}function oi(A){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function li(A){const W=A.target;W.removeEventListener("dispose",li),lo(W)}function lo(A){co(A),st.remove(A)}function co(A){const W=st.get(A).programs;W!==void 0&&(W.forEach(function(rt){wt.releaseProgram(rt)}),A.isShaderMaterial&&wt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,rt,nt,it,Pt){W===null&&(W=un);const Ht=it.isMesh&&it.matrixWorld.determinantAffine()<0,Ut=za(A,W,rt,nt,it);b.setMaterial(nt,Ht);let kt=rt.index,Vt=1;if(nt.wireframe===!0){if(kt=ft.getWireframeAttribute(rt),kt===void 0)return;Vt=2}const te=rt.drawRange,ce=rt.attributes.position;let Kt=te.start*Vt,we=(te.start+te.count)*Vt;Pt!==null&&(Kt=Math.max(Kt,Pt.start*Vt),we=Math.min(we,(Pt.start+Pt.count)*Vt)),kt!==null?(Kt=Math.max(Kt,0),we=Math.min(we,kt.count)):ce!=null&&(Kt=Math.max(Kt,0),we=Math.min(we,ce.count));const $e=we-Kt;if($e<0||$e===1/0)return;It.setup(it,nt,Ut,rt,kt);let We,Oe=At;if(kt!==null&&(We=Ct.get(kt),Oe=gt,Oe.setIndex(We)),it.isMesh)nt.wireframe===!0?(b.setLineWidth(nt.wireframeLinewidth*on()),Oe.setMode(q.LINES)):Oe.setMode(q.TRIANGLES);else if(it.isLine){let Ie=nt.linewidth;Ie===void 0&&(Ie=1),b.setLineWidth(Ie*on()),it.isLineSegments?Oe.setMode(q.LINES):it.isLineLoop?Oe.setMode(q.LINE_LOOP):Oe.setMode(q.LINE_STRIP)}else it.isPoints?Oe.setMode(q.POINTS):it.isSprite&&Oe.setMode(q.TRIANGLES);if(it.isBatchedMesh)if(De.get("WEBGL_multi_draw"))Oe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Ie=it._multiDrawStarts,Bt=it._multiDrawCounts,Gn=it._multiDrawCount,_e=kt?Ct.get(kt).bytesPerElement:1,Mn=st.get(nt).currentProgram.getUniforms();for(let ci=0;ci<Gn;ci++)Mn.setValue(q,"_gl_DrawID",ci),Oe.render(Ie[ci]/_e,Bt[ci])}else if(it.isInstancedMesh)Oe.renderInstances(Kt,$e,it.count);else if(rt.isInstancedBufferGeometry){const Ie=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Bt=Math.min(rt.instanceCount,Ie);Oe.renderInstances(Kt,$e,Bt)}else Oe.render(Kt,$e)};function uo(A,W,rt){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Ba(A,W,rt),A.side=_s,A.needsUpdate=!0,Ba(A,W,rt),A.side=ea):Ba(A,W,rt)}this.compile=function(A,W,rt=null){rt===null&&(rt=A),L=Dt.get(rt),L.init(W),T.push(L),rt.traverseVisible(function(it){it.isLight&&it.layers.test(W.layers)&&(L.pushLight(it),it.castShadow&&L.pushShadow(it))}),A!==rt&&A.traverseVisible(function(it){it.isLight&&it.layers.test(W.layers)&&(L.pushLight(it),it.castShadow&&L.pushShadow(it))}),L.setupLights();const nt=new Set;return A.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Pt=it.material;if(Pt)if(Array.isArray(Pt))for(let Ht=0;Ht<Pt.length;Ht++){const Ut=Pt[Ht];uo(Ut,rt,it),nt.add(Ut)}else uo(Pt,rt,it),nt.add(Pt)}),L=T.pop(),nt},this.compileAsync=function(A,W,rt=null){const nt=this.compile(A,W,rt);return new Promise(it=>{function Pt(){if(nt.forEach(function(Ht){st.get(Ht).currentProgram.isReady()&&nt.delete(Ht)}),nt.size===0){it(A);return}setTimeout(Pt,10)}De.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Js=null;function qi(A){Js&&Js(A)}function dn(){Jn.stop()}function Nn(){Jn.start()}const Jn=new A1;Jn.setAnimationLoop(qi),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(A){Js=A,Gt.setAnimationLoop(A),A===null?Jn.stop():Jn.start()},Gt.addEventListener("sessionstart",dn),Gt.addEventListener("sessionend",Nn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;k!==null&&k.renderStart(A,W);const rt=Gt.enabled===!0&&Gt.isPresenting===!0,nt=P!==null&&($===null||rt)&&P.begin(Y,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(W),W=Gt.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,W,$),L=Dt.get(A,T.length),L.init(W),L.state.textureUnits=dt.getTextureUnits(),T.push(L),an.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),be.setFromProjectionMatrix(an,ia,W.reversedDepth),ge=this.localClippingEnabled,Ee=jt.init(this.clippingPlanes,ge),O=Nt.get(A,F.length),O.init(),F.push(O),Gt.enabled===!0&&Gt.isPresenting===!0){const Ht=Y.xr.getDepthSensingMesh();Ht!==null&&ys(Ht,W,-1/0,Y.sortObjects)}ys(A,W,0,Y.sortObjects),O.finish(),Y.sortObjects===!0&&O.sort(zt,ae,W.reversedDepth),Ye=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Ye&&se.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&jt.beginShadows();const it=L.state.shadowsArray;if($t.render(it,A,W),Ee===!0&&jt.endShadows(),(nt&&P.hasRenderPass())===!1){const Ht=O.opaque,Ut=O.transmissive;if(L.setupLights(),W.isArrayCamera){const kt=W.cameras;if(Ut.length>0)for(let Vt=0,te=kt.length;Vt<te;Vt++){const ce=kt[Vt];Ml(Ht,Ut,A,ce)}Ye&&se.render(A);for(let Vt=0,te=kt.length;Vt<te;Vt++){const ce=kt[Vt];Sl(O,A,ce,ce.viewport)}}else Ut.length>0&&Ml(Ht,Ut,A,W),Ye&&se.render(A),Sl(O,A,W)}$!==null&&H===0&&(dt.updateMultisampleRenderTarget($),dt.updateRenderTargetMipmap($)),nt&&P.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,W),It.resetDefaultState(),ht=-1,bt=null,T.pop(),T.length>0?(L=T[T.length-1],dt.setTextureUnits(L.state.textureUnits),Ee===!0&&jt.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?O=F[F.length-1]:O=null,k!==null&&k.renderEnd()};function ys(A,W,rt,nt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||be.intersectsSprite(A)){nt&&rn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(an);const Ht=pt.update(A),Ut=A.material;Ut.visible&&O.push(A,Ht,Ut,rt,rn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||be.intersectsObject(A))){const Ht=pt.update(A),Ut=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rn.copy(A.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),rn.copy(Ht.boundingSphere.center)),rn.applyMatrix4(A.matrixWorld).applyMatrix4(an)),Array.isArray(Ut)){const kt=Ht.groups;for(let Vt=0,te=kt.length;Vt<te;Vt++){const ce=kt[Vt],Kt=Ut[ce.materialIndex];Kt&&Kt.visible&&O.push(A,Ht,Kt,rt,rn.z,ce)}}else Ut.visible&&O.push(A,Ht,Ut,rt,rn.z,null)}}const Pt=A.children;for(let Ht=0,Ut=Pt.length;Ht<Ut;Ht++)ys(Pt[Ht],W,rt,nt)}function Sl(A,W,rt,nt){const{opaque:it,transmissive:Pt,transparent:Ht}=A;L.setupLightsView(rt),Ee===!0&&jt.setGlobalState(Y.clippingPlanes,rt),nt&&b.viewport(U.copy(nt)),it.length>0&&Ss(it,W,rt),Pt.length>0&&Ss(Pt,W,rt),Ht.length>0&&Ss(Ht,W,rt),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ml(A,W,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[nt.id]===void 0){const Kt=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[nt.id]=new zn(1,1,{generateMipmaps:!0,type:Kt?jn:Si,minFilter:qs,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace})}const Pt=L.state.transmissionRenderTarget[nt.id],Ht=nt.viewport||U;Pt.setSize(Ht.z*Y.transmissionResolutionScale,Ht.w*Y.transmissionResolutionScale);const Ut=Y.getRenderTarget(),kt=Y.getActiveCubeFace(),Vt=Y.getActiveMipmapLevel();Y.setRenderTarget(Pt),Y.getClearColor(Et),Lt=Y.getClearAlpha(),Lt<1&&Y.setClearColor(16777215,.5),Y.clear(),Ye&&se.render(rt);const te=Y.toneMapping;Y.toneMapping=aa;const ce=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),L.setupLightsView(nt),Ee===!0&&jt.setGlobalState(Y.clippingPlanes,nt),Ss(A,rt,nt),dt.updateMultisampleRenderTarget(Pt),dt.updateRenderTargetMipmap(Pt),De.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let we=0,$e=W.length;we<$e;we++){const We=W[we],{object:Oe,geometry:Ie,material:Bt,group:Gn}=We;if(Bt.side===ea&&Oe.layers.test(nt.layers)){const _e=Bt.side;Bt.side=Qn,Bt.needsUpdate=!0,Fa(Oe,rt,nt,Ie,Bt,Gn),Bt.side=_e,Bt.needsUpdate=!0,Kt=!0}}Kt===!0&&(dt.updateMultisampleRenderTarget(Pt),dt.updateRenderTargetMipmap(Pt))}Y.setRenderTarget(Ut,kt,Vt),Y.setClearColor(Et,Lt),ce!==void 0&&(nt.viewport=ce),Y.toneMapping=te}function Ss(A,W,rt){const nt=W.isScene===!0?W.overrideMaterial:null;for(let it=0,Pt=A.length;it<Pt;it++){const Ht=A[it],{object:Ut,geometry:kt,group:Vt}=Ht;let te=Ht.material;te.allowOverride===!0&&nt!==null&&(te=nt),Ut.layers.test(rt.layers)&&Fa(Ut,W,rt,kt,te,Vt)}}function Fa(A,W,rt,nt,it,Pt){A.onBeforeRender(Y,W,rt,nt,it,Pt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),it.onBeforeRender(Y,W,rt,nt,A,Pt),it.transparent===!0&&it.side===ea&&it.forceSinglePass===!1?(it.side=Qn,it.needsUpdate=!0,Y.renderBufferDirect(rt,W,nt,it,A,Pt),it.side=_s,it.needsUpdate=!0,Y.renderBufferDirect(rt,W,nt,it,A,Pt),it.side=ea):Y.renderBufferDirect(rt,W,nt,it,A,Pt),A.onAfterRender(Y,W,rt,nt,it,Pt)}function Ba(A,W,rt){W.isScene!==!0&&(W=un);const nt=st.get(A),it=L.state.lights,Pt=L.state.shadowsArray,Ht=it.state.version,Ut=wt.getParameters(A,it.state,Pt,W,rt,L.state.lightProbeGridArray),kt=wt.getProgramCacheKey(Ut);let Vt=nt.programs;nt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,nt.fog=W.fog;const te=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;nt.envMap=Tt.get(A.envMap||nt.environment,te),nt.envMapRotation=nt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",li),Vt=new Map,nt.programs=Vt);let ce=Vt.get(kt);if(ce!==void 0){if(nt.currentProgram===ce&&nt.lightsStateVersion===Ht)return la(A,Ut),ce}else Ut.uniforms=wt.getUniforms(A),k!==null&&A.isNodeMaterial&&k.build(A,rt,Ut),A.onBeforeCompile(Ut,Y),ce=wt.acquireProgram(Ut,kt),Vt.set(kt,ce),nt.uniforms=Ut.uniforms;const Kt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Kt.clippingPlanes=jt.uniform),la(A,Ut),nt.needsLights=bl(A),nt.lightsStateVersion=Ht,nt.needsLights&&(Kt.ambientLightColor.value=it.state.ambient,Kt.lightProbe.value=it.state.probe,Kt.directionalLights.value=it.state.directional,Kt.directionalLightShadows.value=it.state.directionalShadow,Kt.spotLights.value=it.state.spot,Kt.spotLightShadows.value=it.state.spotShadow,Kt.rectAreaLights.value=it.state.rectArea,Kt.ltc_1.value=it.state.rectAreaLTC1,Kt.ltc_2.value=it.state.rectAreaLTC2,Kt.pointLights.value=it.state.point,Kt.pointLightShadows.value=it.state.pointShadow,Kt.hemisphereLights.value=it.state.hemi,Kt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Kt.spotLightMatrix.value=it.state.spotLightMatrix,Kt.spotLightMap.value=it.state.spotLightMap,Kt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=L.state.lightProbeGridArray.length>0,nt.currentProgram=ce,nt.uniformsList=null,ce}function oa(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=fu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function la(A,W){const rt=st.get(A);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function Ms(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(W.matrixWorld);for(let rt=0,nt=A.length;rt<nt;rt++){const it=A[rt];if(it.texture!==null&&it.boundingBox.containsPoint(R))return it}return null}function za(A,W,rt,nt,it){W.isScene!==!0&&(W=un),dt.resetTextureUnits();const Pt=W.fog,Ht=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?W.environment:null,Ut=$===null?Y.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Me.workingColorSpace,kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Vt=Tt.get(nt.envMap||Ht,kt),te=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ce=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Kt=!!rt.morphAttributes.position,we=!!rt.morphAttributes.normal,$e=!!rt.morphAttributes.color;let We=aa;nt.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(We=Y.toneMapping);const Oe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ie=Oe!==void 0?Oe.length:0,Bt=st.get(nt),Gn=L.state.lights;if(Ee===!0&&(ge===!0||A!==bt)){const Le=A===bt&&nt.id===ht;jt.setState(nt,A,Le)}let _e=!1;nt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Gn.state.version||Bt.outputColorSpace!==Ut||it.isBatchedMesh&&Bt.batching===!1||!it.isBatchedMesh&&Bt.batching===!0||it.isBatchedMesh&&Bt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Bt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Bt.instancing===!1||!it.isInstancedMesh&&Bt.instancing===!0||it.isSkinnedMesh&&Bt.skinning===!1||!it.isSkinnedMesh&&Bt.skinning===!0||it.isInstancedMesh&&Bt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Bt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Bt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Bt.instancingMorph===!1&&it.morphTexture!==null||Bt.envMap!==Vt||nt.fog===!0&&Bt.fog!==Pt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==jt.numPlanes||Bt.numIntersection!==jt.numIntersection)||Bt.vertexAlphas!==te||Bt.vertexTangents!==ce||Bt.morphTargets!==Kt||Bt.morphNormals!==we||Bt.morphColors!==$e||Bt.toneMapping!==We||Bt.morphTargetsCount!==Ie||!!Bt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Bt.__version=nt.version);let Mn=Bt.currentProgram;_e===!0&&(Mn=Ba(nt,W,it),k&&nt.isNodeMaterial&&k.onUpdateProgram(nt,Mn,Bt));let ci=!1,Ni=!1,ui=!1;const Fe=Mn.getUniforms(),tn=Bt.uniforms;if(b.useProgram(Mn.program)&&(ci=!0,Ni=!0,ui=!0),nt.id!==ht&&(ht=nt.id,Ni=!0),Bt.needsLights){const Le=Ms(L.state.lightProbeGridArray,it);Bt.lightProbeGrid!==Le&&(Bt.lightProbeGrid=Le,Ni=!0)}if(ci||bt!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Fe.setValue(q,"projectionMatrix",A.projectionMatrix),Fe.setValue(q,"viewMatrix",A.matrixWorldInverse);const Yi=Fe.map.cameraPosition;Yi!==void 0&&Yi.setValue(q,sn.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Fe.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Fe.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),bt!==A&&(bt=A,Ni=!0,ui=!0)}if(Bt.needsLights&&(Gn.state.directionalShadowMap.length>0&&Fe.setValue(q,"directionalShadowMap",Gn.state.directionalShadowMap,dt),Gn.state.spotShadowMap.length>0&&Fe.setValue(q,"spotShadowMap",Gn.state.spotShadowMap,dt),Gn.state.pointShadowMap.length>0&&Fe.setValue(q,"pointShadowMap",Gn.state.pointShadowMap,dt)),it.isSkinnedMesh){Fe.setOptional(q,it,"bindMatrix"),Fe.setOptional(q,it,"bindMatrixInverse");const Le=it.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Fe.setValue(q,"boneTexture",Le.boneTexture,dt))}it.isBatchedMesh&&(Fe.setOptional(q,it,"batchingTexture"),Fe.setValue(q,"batchingTexture",it._matricesTexture,dt),Fe.setOptional(q,it,"batchingIdTexture"),Fe.setValue(q,"batchingIdTexture",it._indirectTexture,dt),Fe.setOptional(q,it,"batchingColorTexture"),it._colorsTexture!==null&&Fe.setValue(q,"batchingColorTexture",it._colorsTexture,dt));const Pi=rt.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&X.update(it,rt,Mn),(Ni||Bt.receiveShadow!==it.receiveShadow)&&(Bt.receiveShadow=it.receiveShadow,Fe.setValue(q,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&W.environment!==null&&(tn.envMapIntensity.value=W.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=CT()),Ni){if(Fe.setValue(q,"toneMappingExposure",Y.toneMappingExposure),Bt.needsLights&&pn(tn,ui),Pt&&nt.fog===!0&&Ft.refreshFogUniforms(tn,Pt),Ft.refreshMaterialUniforms(tn,nt,Mt,xt,L.state.transmissionRenderTarget[A.id]),Bt.needsLights&&Bt.lightProbeGrid){const Le=Bt.lightProbeGrid;tn.probesSH.value=Le.texture,tn.probesMin.value.copy(Le.boundingBox.min),tn.probesMax.value.copy(Le.boundingBox.max),tn.probesResolution.value.copy(Le.resolution)}fu.upload(q,oa(Bt),tn,dt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(fu.upload(q,oa(Bt),tn,dt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Fe.setValue(q,"center",it.center),Fe.setValue(q,"modelViewMatrix",it.modelViewMatrix),Fe.setValue(q,"normalMatrix",it.normalMatrix),Fe.setValue(q,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const Le=nt.uniformsGroups;for(let Yi=0,Ha=Le.length;Yi<Ha;Yi++){const bs=Le[Yi];St.update(bs,Mn),St.bind(bs,Mn)}}return Mn}function pn(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function bl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,W,rt){const nt=st.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),st.get(A.texture).__webglTexture=W,st.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const rt=st.get(A);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,rt=0){$=A,I=W,H=rt;let nt=null,it=!1,Pt=!1;if(A){const Ut=st.get(A);if(Ut.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(q.FRAMEBUFFER,Ut.__webglFramebuffer),U.copy(A.viewport),Z.copy(A.scissor),yt=A.scissorTest,b.viewport(U),b.scissor(Z),b.setScissorTest(yt),ht=-1;return}else if(Ut.__webglFramebuffer===void 0)dt.setupRenderTarget(A);else if(Ut.__hasExternalTextures)dt.rebindTextures(A,st.get(A.texture).__webglTexture,st.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const te=A.depthTexture;if(Ut.__boundDepthTexture!==te){if(te!==null&&st.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(A)}}const kt=A.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Pt=!0);const Vt=st.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[W])?nt=Vt[W][rt]:nt=Vt[W],it=!0):A.samples>0&&dt.useMultisampledRTT(A)===!1?nt=st.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?nt=Vt[rt]:nt=Vt,U.copy(A.viewport),Z.copy(A.scissor),yt=A.scissorTest}else U.copy(Jt).multiplyScalar(Mt).floor(),Z.copy(Ke).multiplyScalar(Mt).floor(),yt=pe;if(rt!==0&&(nt=lt),b.bindFramebuffer(q.FRAMEBUFFER,nt)&&b.drawBuffers(A,nt),b.viewport(U),b.scissor(Z),b.setScissorTest(yt),it){const Ut=st.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,rt)}else if(Pt){const Ut=W;for(let kt=0;kt<A.textures.length;kt++){const Vt=st.get(A.textures[kt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+kt,Vt.__webglTexture,rt,Ut)}}else if(A!==null&&rt!==0){const Ut=st.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ut.__webglTexture,rt)}ht=-1},this.readRenderTargetPixels=function(A,W,rt,nt,it,Pt,Ht,Ut=0){if(!(A&&A.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ht!==void 0&&(kt=kt[Ht]),kt){b.bindFramebuffer(q.FRAMEBUFFER,kt);try{const Vt=A.textures[Ut],te=Vt.format,ce=Vt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ut),!D.textureFormatReadable(te)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(ce)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-nt&&rt>=0&&rt<=A.height-it&&q.readPixels(W,rt,nt,it,Rt.convert(te),Rt.convert(ce),Pt)}finally{const Vt=$!==null?st.get($).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,W,rt,nt,it,Pt,Ht,Ut=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ht!==void 0&&(kt=kt[Ht]),kt)if(W>=0&&W<=A.width-nt&&rt>=0&&rt<=A.height-it){b.bindFramebuffer(q.FRAMEBUFFER,kt);const Vt=A.textures[Ut],te=Vt.format,ce=Vt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ut),!D.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Kt),q.bufferData(q.PIXEL_PACK_BUFFER,Pt.byteLength,q.STREAM_READ),q.readPixels(W,rt,nt,it,Rt.convert(te),Rt.convert(ce),0);const we=$!==null?st.get($).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,we);const $e=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await US(q,$e,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Kt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Pt),q.deleteBuffer(Kt),q.deleteSync($e),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,rt=0){const nt=Math.pow(2,-rt),it=Math.floor(A.image.width*nt),Pt=Math.floor(A.image.height*nt),Ht=W!==null?W.x:0,Ut=W!==null?W.y:0;dt.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,rt,0,0,Ht,Ut,it,Pt),b.unbindTexture()},this.copyTextureToTexture=function(A,W,rt=null,nt=null,it=0,Pt=0){let Ht,Ut,kt,Vt,te,ce,Kt,we,$e;const We=A.isCompressedTexture?A.mipmaps[Pt]:A.image;if(rt!==null)Ht=rt.max.x-rt.min.x,Ut=rt.max.y-rt.min.y,kt=rt.isBox3?rt.max.z-rt.min.z:1,Vt=rt.min.x,te=rt.min.y,ce=rt.isBox3?rt.min.z:0;else{const tn=Math.pow(2,-it);Ht=Math.floor(We.width*tn),Ut=Math.floor(We.height*tn),A.isDataArrayTexture?kt=We.depth:A.isData3DTexture?kt=Math.floor(We.depth*tn):kt=1,Vt=0,te=0,ce=0}nt!==null?(Kt=nt.x,we=nt.y,$e=nt.z):(Kt=0,we=0,$e=0);const Oe=Rt.convert(W.format),Ie=Rt.convert(W.type);let Bt;W.isData3DTexture?(dt.setTexture3D(W,0),Bt=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(dt.setTexture2DArray(W,0),Bt=q.TEXTURE_2D_ARRAY):(dt.setTexture2D(W,0),Bt=q.TEXTURE_2D),b.activeTexture(q.TEXTURE0),b.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),b.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),b.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);const Gn=b.getParameter(q.UNPACK_ROW_LENGTH),_e=b.getParameter(q.UNPACK_IMAGE_HEIGHT),Mn=b.getParameter(q.UNPACK_SKIP_PIXELS),ci=b.getParameter(q.UNPACK_SKIP_ROWS),Ni=b.getParameter(q.UNPACK_SKIP_IMAGES);b.pixelStorei(q.UNPACK_ROW_LENGTH,We.width),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,We.height),b.pixelStorei(q.UNPACK_SKIP_PIXELS,Vt),b.pixelStorei(q.UNPACK_SKIP_ROWS,te),b.pixelStorei(q.UNPACK_SKIP_IMAGES,ce);const ui=A.isDataArrayTexture||A.isData3DTexture,Fe=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const tn=st.get(A),Pi=st.get(W),Le=st.get(tn.__renderTarget),Yi=st.get(Pi.__renderTarget);b.bindFramebuffer(q.READ_FRAMEBUFFER,Le.__webglFramebuffer),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Ha=0;Ha<kt;Ha++)ui&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,st.get(A).__webglTexture,it,ce+Ha),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,st.get(W).__webglTexture,Pt,$e+Ha)),q.blitFramebuffer(Vt,te,Ht,Ut,Kt,we,Ht,Ut,q.DEPTH_BUFFER_BIT,q.NEAREST);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(it!==0||A.isRenderTargetTexture||st.has(A)){const tn=st.get(A),Pi=st.get(W);b.bindFramebuffer(q.READ_FRAMEBUFFER,ut),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,K);for(let Le=0;Le<kt;Le++)ui?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tn.__webglTexture,it,ce+Le):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,tn.__webglTexture,it),Fe?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Pi.__webglTexture,Pt,$e+Le):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Pi.__webglTexture,Pt),it!==0?q.blitFramebuffer(Vt,te,Ht,Ut,Kt,we,Ht,Ut,q.COLOR_BUFFER_BIT,q.NEAREST):Fe?q.copyTexSubImage3D(Bt,Pt,Kt,we,$e+Le,Vt,te,Ht,Ut):q.copyTexSubImage2D(Bt,Pt,Kt,we,Vt,te,Ht,Ut);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Fe?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Bt,Pt,Kt,we,$e,Ht,Ut,kt,Oe,Ie,We.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Bt,Pt,Kt,we,$e,Ht,Ut,kt,Oe,We.data):q.texSubImage3D(Bt,Pt,Kt,we,$e,Ht,Ut,kt,Oe,Ie,We):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Pt,Kt,we,Ht,Ut,Oe,Ie,We.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Pt,Kt,we,We.width,We.height,Oe,We.data):q.texSubImage2D(q.TEXTURE_2D,Pt,Kt,we,Ht,Ut,Oe,Ie,We);b.pixelStorei(q.UNPACK_ROW_LENGTH,Gn),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,_e),b.pixelStorei(q.UNPACK_SKIP_PIXELS,Mn),b.pixelStorei(q.UNPACK_SKIP_ROWS,ci),b.pixelStorei(q.UNPACK_SKIP_IMAGES,Ni),Pt===0&&W.generateMipmaps&&q.generateMipmap(Bt),b.unbindTexture()},this.initRenderTarget=function(A){st.get(A).__webglFramebuffer===void 0&&dt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?dt.setTextureCube(A,0):A.isData3DTexture?dt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?dt.setTexture2DArray(A,0):dt.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){I=0,H=0,$=null,b.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),n.unpackColorSpace=Me._getUnpackColorSpace()}}const Gv={type:"change"},V0={type:"start"},P1={type:"end"},nu=new z0,Vv=new Ua,UT=Math.cos(70*f1.DEG2RAD),En=new j,si=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xd=1e-6;class LT extends PM{constructor(t,n=null){super(t,n),this.state=Xe.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Na.ROTATE,MIDDLE:Na.DOLLY,RIGHT:Na.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new vs,this._lastTargetPosition=new j,this._quat=new vs().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gv,this._sphericalDelta=new gv,this._scale=1,this._panOffset=new j,this._rotateStart=new Yt,this._rotateEnd=new Yt,this._rotateDelta=new Yt,this._panStart=new Yt,this._panEnd=new Yt,this._panDelta=new Yt,this._dollyStart=new Yt,this._dollyEnd=new Yt,this._dollyDelta=new Yt,this._dollyDirection=new j,this._mouse=new Yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PT.bind(this),this._onPointerDown=NT.bind(this),this._onPointerUp=OT.bind(this),this._onContextMenu=VT.bind(this),this._onMouseWheel=BT.bind(this),this._onKeyDown=zT.bind(this),this._onTouchStart=HT.bind(this),this._onTouchMove=GT.bind(this),this._onMouseDown=IT.bind(this),this._onMouseMove=FT.bind(this),this._interceptControlDown=kT.bind(this),this._interceptControlUp=XT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gv),this.update(),this.state=Xe.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;En.copy(n).sub(this.target),En.applyQuaternion(this._quat),this._spherical.setFromVector3(En),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=si:s>Math.PI&&(s-=si),l<-Math.PI?l+=si:l>Math.PI&&(l-=si),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(En.setFromSpherical(this._spherical),En.applyQuaternion(this._quatInverse),n.copy(this.target).add(En),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=En.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=En.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(nu.origin.copy(this.object.position),nu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nu.direction))<UT?this.object.lookAt(this.target):(Vv.setFromNormalAndCoplanarPoint(this.object.up,this.target),nu.intersectPlane(Vv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>xd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xd||this._lastTargetPosition.distanceToSquared(this.target)>xd?(this.dispatchEvent(Gv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?si/60*this.autoRotateSpeed*t:si/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){En.setFromMatrixColumn(n,0),En.multiplyScalar(-t),this._panOffset.add(En)}_panUp(t,n){this.screenSpacePanning===!0?En.setFromMatrixColumn(n,1):(En.setFromMatrixColumn(n,0),En.crossVectors(this.object.up,En)),En.multiplyScalar(t),this._panOffset.add(En)}_pan(t,n){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;En.copy(l).sub(this.target);let c=En.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*n*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=n-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(si*this._rotateDelta.x/n.clientHeight),this._rotateUp(si*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(si*this._rotateDelta.x/n.clientHeight),this._rotateUp(si*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),l=.5*(t.pageY+n.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),s=t.pageX-n.x,l=t.pageY-n.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,d=(t.pageY+n.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Yt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function NT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function PT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function OT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(P1),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function IT(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Na.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Na.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Na.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(V0)}function FT(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function BT(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(V0),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(P1))}function zT(r){this.enabled!==!1&&this._handleKeyDown(r)}function HT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case Zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(V0)}function GT(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function VT(r){this.enabled!==!1&&r.preventDefault()}function kT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class WT extends p1{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new ro;t.deleteAttribute("uv");const n=new h0({side:Qn}),s=new h0,l=new AM(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Sn(t,n);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new pM(t,s,6),d=new Hn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),f.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),f.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),f.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),f.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),f.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),f.setMatrixAt(5,d.matrix),this.add(f);const m=new Sn(t,Wr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Sn(t,Wr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const _=new Sn(t,Wr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const v=new Sn(t,Wr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const g=new Sn(t,Wr(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const y=new Sn(t,Wr(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(const n of t)n.dispose()}}function Wr(r){return new bM({color:0,emissive:16777215,emissiveIntensity:r})}const hu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qT=new Tu(-1,1,1,-1,0,1);class YT extends ra{constructor(){super(),this.setAttribute("position",new Wi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wi([0,2,0,0,2,0],2))}}const ZT=new YT;class Ru{constructor(t){this._mesh=new Sn(ZT,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class O1 extends js{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Ln?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vl.clone(t.uniforms),this.material=new Ln({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ru(this.material)}render(t,n,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class kv extends js{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class KT extends js{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class QT{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const s=t.getSize(new Yt);this._width=s.width,this._height=s.height,n=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new O1(hu),this.copyPass.material.blending=Xi,this.timer=new DM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}kv!==void 0&&(f instanceof kv?s=!0:f instanceof KT&&(s=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jT extends js{constructor(t,n,s=null,l=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new re}render(t,n,s){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const JT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class io extends js{constructor(t,n=1,s,l){super(),this.strength=n,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Yt(t.x,t.y):new Yt(256,256),this.clearColor=new re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new zn(c,f,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const v=new zn(c,f,{type:jn});v.texture.name="UnrealBloomPass.h"+_,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const g=new zn(c,f,{type:jn});g.texture.name="UnrealBloomPass.v"+_,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),f=Math.round(f/2)}const d=JT;this.highPassUniforms=vl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ln({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new Yt(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vl.clone(hu.uniforms),this.blendMaterial=new Ln({uniforms:this.copyUniforms,vertexShader:hu.vertexShader,fragmentShader:hu.fragmentShader,premultipliedAlpha:!0,blending:Td,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new re,this._oldClearAlpha=1,this._basic=new H0,this._fsQuad=new Ru(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let s=Math.round(t/2),l=Math.round(n/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new Yt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,n,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=io.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=io.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const n=[],s=t/3;for(let l=0;l<t;l++)n.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Ln({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Yt(.5,.5)},direction:{value:new Yt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ln({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}io.BlurDirectionX=new Yt(1,0);io.BlurDirectionY=new Yt(0,1);const iu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class $T extends js{constructor(){super(),this.isOutputPass=!0,this.uniforms=vl.clone(iu.uniforms),this.material=new S1({name:iu.name,uniforms:this.uniforms,vertexShader:iu.vertexShader,fragmentShader:iu.fragmentShader}),this._fsQuad=new Ru(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Me.getTransfer(this._outputColorSpace)===Ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===b0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===E0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===T0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$r?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===A0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const du={cols:33,rows:49,width:2.0015625000000004,height:3,camera:[.925,.654,5.166],target:[.525,-.046,-.034],data:new Float32Array([-.499,1.389,-.95,-.439,1.374,-.939,-.38,1.36,-.927,-.32,1.345,-.915,-.26,1.33,-.903,-.201,1.315,-.892,-.141,1.301,-.88,-.081,1.287,-.867,-.022,1.275,-.851,.037,1.264,-.834,.096,1.253,-.817,.156,1.242,-.801,.215,1.231,-.783,.274,1.221,-.765,.332,1.211,-.745,.391,1.202,-.726,.45,1.192,-.706,.508,1.183,-.686,.567,1.174,-.666,.625,1.165,-.646,.684,1.156,-.625,.742,1.147,-.604,.8,1.139,-.583,.858,1.13,-.56,.916,1.122,-.538,.973,1.115,-.514,1.03,1.107,-.49,1.087,1.1,-.465,1.143,1.093,-.438,1.199,1.087,-.41,1.253,1.081,-.38,1.307,1.075,-.348,1.36,1.069,-.315,-.518,1.336,-.922,-.458,1.322,-.91,-.398,1.308,-.898,-.339,1.294,-.885,-.279,1.279,-.873,-.219,1.265,-.861,-.16,1.251,-.847,-.1,1.239,-.831,-.041,1.229,-.814,.018,1.22,-.795,.077,1.21,-.777,.136,1.197,-.762,.195,1.183,-.748,.255,1.172,-.731,.314,1.161,-.713,.372,1.151,-.695,.431,1.141,-.676,.49,1.13,-.658,.549,1.121,-.639,.608,1.111,-.62,.666,1.101,-.6,.725,1.092,-.58,.783,1.083,-.56,.842,1.074,-.539,.9,1.065,-.518,.958,1.057,-.497,1.016,1.048,-.475,1.074,1.041,-.451,1.131,1.033,-.427,1.187,1.026,-.402,1.243,1.019,-.375,1.299,1.013,-.346,1.353,1.007,-.315,-.536,1.285,-.892,-.477,1.271,-.88,-.417,1.257,-.867,-.357,1.243,-.854,-.298,1.229,-.841,-.238,1.216,-.827,-.179,1.204,-.811,-.12,1.194,-.793,-.061,1.186,-.773,-.002,1.178,-.753,.057,1.167,-.736,.116,1.153,-.722,.176,1.138,-.709,.235,1.125,-.694,.294,1.113,-.679,.353,1.101,-.662,.413,1.09,-.644,.472,1.08,-.626,.53,1.069,-.608,.589,1.059,-.59,.648,1.049,-.572,.707,1.039,-.553,.766,1.029,-.534,.825,1.019,-.515,.883,1.01,-.495,.942,1,-.475,1,.991,-.454,1.058,.983,-.433,1.116,.974,-.411,1.174,.966,-.388,1.231,.959,-.364,1.288,.952,-.339,1.344,.945,-.311,-.555,1.234,-.861,-.495,1.22,-.848,-.436,1.207,-.834,-.376,1.194,-.82,-.317,1.181,-.806,-.257,1.169,-.79,-.198,1.16,-.771,-.14,1.152,-.751,-.081,1.146,-.73,-.022,1.136,-.712,.037,1.123,-.697,.097,1.108,-.683,.156,1.093,-.671,.215,1.079,-.657,.275,1.066,-.642,.334,1.054,-.625,.393,1.043,-.608,.452,1.032,-.591,.511,1.021,-.574,.57,1.01,-.556,.629,.999,-.539,.688,.988,-.521,.747,.978,-.503,.806,.967,-.485,.865,.957,-.467,.924,.947,-.448,.983,.937,-.429,1.041,.927,-.41,1.1,.918,-.39,1.158,.909,-.369,1.217,.9,-.348,1.274,.892,-.326,1.332,.885,-.302,-.574,1.184,-.828,-.514,1.171,-.814,-.455,1.159,-.799,-.395,1.146,-.784,-.336,1.134,-.768,-.277,1.125,-.75,-.218,1.118,-.729,-.16,1.113,-.707,-.101,1.104,-.688,-.042,1.092,-.672,.018,1.077,-.658,.077,1.062,-.646,.136,1.048,-.632,.196,1.035,-.617,.255,1.023,-.601,.314,1.011,-.585,.373,.999,-.568,.432,.987,-.552,.492,.976,-.535,.551,.964,-.518,.61,.953,-.502,.669,.941,-.485,.728,.93,-.468,.787,.919,-.451,.846,.908,-.433,.905,.897,-.416,.964,.886,-.398,1.023,.875,-.38,1.082,.865,-.362,1.141,.855,-.344,1.2,.845,-.324,1.258,.835,-.305,1.317,.826,-.284,-.593,1.136,-.793,-.533,1.124,-.778,-.474,1.112,-.762,-.414,1.1,-.746,-.355,1.091,-.728,-.297,1.084,-.707,-.239,1.08,-.684,-.18,1.072,-.664,-.121,1.06,-.648,-.061,1.046,-.634,-.002,1.031,-.621,.057,1.018,-.606,.117,1.006,-.591,.176,.994,-.574,.235,.986,-.555,.294,.973,-.539,.353,.959,-.524,.412,.947,-.509,.471,.934,-.493,.531,.922,-.477,.59,.91,-.461,.649,.898,-.444,.708,.886,-.428,.767,.874,-.412,.827,.862,-.395,.886,.85,-.379,.945,.839,-.362,1.004,.827,-.345,1.063,.816,-.328,1.122,.805,-.311,1.181,.794,-.294,1.24,.783,-.276,1.299,.772,-.258,-.612,1.089,-.757,-.552,1.078,-.74,-.493,1.067,-.724,-.434,1.056,-.706,-.375,1.049,-.686,-.317,1.045,-.662,-.259,1.04,-.641,-.2,1.029,-.624,-.14,1.014,-.61,-.081,1.001,-.596,-.022,.988,-.58,.038,.977,-.564,.097,.966,-.547,.156,.956,-.529,.215,.95,-.508,.274,.939,-.491,.333,.924,-.477,.392,.909,-.463,.451,.896,-.448,.511,.883,-.432,.57,.87,-.417,.629,.858,-.401,.688,.845,-.385,.747,.832,-.369,.807,.82,-.353,.866,.808,-.337,.925,.796,-.321,.984,.784,-.305,1.043,.772,-.289,1.102,.76,-.272,1.162,.748,-.256,1.221,.736,-.24,1.28,.724,-.223,-.631,1.043,-.718,-.572,1.033,-.701,-.513,1.023,-.684,-.454,1.014,-.665,-.395,1.008,-.643,-.338,1.005,-.619,-.279,.997,-.599,-.219,.984,-.585,-.16,.971,-.57,-.101,.959,-.554,-.042,.948,-.537,.018,.937,-.52,.077,.927,-.502,.136,.918,-.483,.195,.912,-.463,.254,.903,-.444,.313,.89,-.429,.372,.875,-.415,.431,.86,-.401,.49,.847,-.386,.55,.833,-.37,.609,.82,-.355,.668,.807,-.339,.727,.795,-.324,.786,.782,-.308,.846,.77,-.292,.905,.757,-.276,.964,.745,-.26,1.023,.733,-.244,1.082,.72,-.228,1.141,.708,-.212,1.201,.696,-.196,1.26,.683,-.18,-.65,.999,-.679,-.591,.99,-.66,-.532,.98,-.642,-.473,.972,-.623,-.415,.966,-.601,-.357,.963,-.577,-.298,.956,-.557,-.239,.943,-.542,-.18,.931,-.526,-.121,.921,-.508,-.062,.911,-.491,-.002,.9,-.474,.057,.889,-.457,.116,.88,-.438,.175,.873,-.418,.234,.866,-.398,.293,.855,-.381,.352,.841,-.366,.411,.826,-.353,.47,.811,-.338,.529,.798,-.323,.589,.785,-.307,.648,.773,-.291,.707,.761,-.275,.766,.748,-.259,.825,.736,-.243,.885,.724,-.227,.944,.712,-.211,1.003,.699,-.195,1.062,.687,-.179,1.121,.675,-.163,1.181,.663,-.147,1.24,.651,-.131,-.67,.957,-.637,-.611,.948,-.618,-.552,.939,-.599,-.493,.93,-.581,-.434,.923,-.56,-.376,.919,-.537,-.318,.914,-.515,-.259,.906,-.496,-.2,.896,-.478,-.141,.886,-.46,-.082,.877,-.442,-.023,.867,-.425,.037,.853,-.409,.096,.842,-.392,.155,.834,-.373,.214,.828,-.353,.273,.819,-.334,.332,.807,-.318,.391,.791,-.304,.45,.777,-.29,.509,.764,-.274,.569,.753,-.258,.628,.741,-.241,.687,.73,-.225,.746,.718,-.209,.805,.706,-.192,.865,.695,-.176,.924,.683,-.159,.983,.671,-.143,1.042,.659,-.127,1.101,.648,-.11,1.161,.636,-.094,1.22,.625,-.078,-.69,.917,-.593,-.631,.908,-.574,-.572,.899,-.556,-.513,.89,-.537,-.454,.881,-.518,-.395,.874,-.498,-.337,.868,-.477,-.278,.863,-.454,-.22,.855,-.435,-.161,.847,-.416,-.102,.838,-.397,-.043,.83,-.378,.016,.82,-.36,.076,.807,-.345,.135,.796,-.328,.194,.789,-.308,.253,.782,-.288,.312,.772,-.27,.371,.757,-.256,.43,.744,-.241,.489,.733,-.224,.549,.723,-.206,.608,.712,-.19,.667,.701,-.173,.726,.69,-.156,.785,.679,-.139,.845,.668,-.123,.904,.657,-.106,.963,.646,-.089,1.022,.635,-.073,1.082,.624,-.056,1.141,.612,-.04,1.2,.601,-.023,-.71,.88,-.548,-.651,.871,-.529,-.592,.862,-.51,-.533,.853,-.491,-.474,.843,-.473,-.415,.834,-.454,-.356,.826,-.435,-.298,.818,-.415,-.239,.811,-.395,-.18,.803,-.375,-.121,.796,-.355,-.062,.789,-.335,-.004,.784,-.314,.055,.773,-.297,.115,.761,-.28,.174,.752,-.262,.233,.744,-.242,.292,.736,-.223,.351,.724,-.207,.41,.713,-.19,.469,.702,-.174,.529,.691,-.157,.588,.68,-.14,.647,.669,-.123,.706,.659,-.106,.765,.648,-.089,.825,.637,-.073,.884,.625,-.056,.943,.614,-.039,1.002,.603,-.023,1.062,.592,-.006,1.121,.581,.01,1.18,.569,.027,-.731,.845,-.5,-.672,.836,-.481,-.613,.827,-.462,-.554,.818,-.444,-.495,.809,-.425,-.436,.799,-.406,-.377,.79,-.388,-.318,.781,-.369,-.259,.773,-.349,-.2,.766,-.329,-.141,.759,-.309,-.082,.752,-.289,-.024,.746,-.268,.035,.737,-.25,.094,.726,-.232,.153,.717,-.214,.212,.708,-.196,.272,.698,-.178,.331,.687,-.161,.39,.676,-.144,.449,.665,-.127,.509,.654,-.11,.568,.643,-.094,.627,.632,-.077,.686,.621,-.06,.746,.609,-.044,.805,.598,-.028,.864,.587,-.011,.923,.575,.005,.983,.563,.021,1.042,.552,.038,1.101,.54,.054,1.16,.528,.07,-.751,.812,-.451,-.692,.803,-.432,-.633,.795,-.413,-.574,.787,-.394,-.515,.778,-.375,-.456,.769,-.356,-.397,.76,-.337,-.339,.751,-.318,-.28,.742,-.299,-.221,.734,-.28,-.162,.726,-.26,-.103,.717,-.241,-.044,.708,-.222,.015,.698,-.205,.074,.688,-.187,.133,.678,-.17,.193,.667,-.152,.252,.656,-.135,.311,.645,-.118,.37,.634,-.102,.43,.623,-.085,.489,.611,-.069,.548,.6,-.053,.607,.588,-.037,.667,.576,-.021,.726,.564,-.005,.785,.552,.011,.845,.54,.026,.904,.528,.042,.963,.516,.057,1.023,.504,.073,1.082,.491,.088,1.141,.479,.104,-.772,.781,-.401,-.713,.772,-.382,-.654,.763,-.363,-.595,.754,-.345,-.536,.744,-.326,-.477,.735,-.308,-.418,.725,-.289,-.359,.716,-.271,-.3,.706,-.252,-.241,.697,-.234,-.182,.687,-.216,-.123,.676,-.198,-.064,.666,-.181,-.004,.655,-.164,.055,.644,-.147,.114,.633,-.13,.173,.622,-.114,.233,.61,-.098,.292,.598,-.082,.351,.587,-.066,.411,.575,-.051,.47,.562,-.035,.529,.55,-.02,.589,.538,-.005,.648,.525,.01,.708,.513,.025,.767,.5,.04,.827,.487,.055,.886,.475,.069,.945,.462,.084,1.005,.449,.098,1.064,.436,.112,1.124,.423,.127,-.792,.745,-.354,-.733,.735,-.336,-.674,.725,-.318,-.615,.715,-.3,-.556,.705,-.282,-.497,.694,-.264,-.438,.684,-.246,-.379,.674,-.229,-.32,.663,-.212,-.261,.652,-.195,-.201,.641,-.178,-.142,.63,-.161,-.083,.618,-.145,-.023,.606,-.129,.036,.595,-.114,.095,.583,-.098,.155,.57,-.083,.214,.558,-.068,.274,.546,-.053,.333,.533,-.039,.393,.521,-.024,.452,.508,-.01,.512,.495,.004,.572,.482,.018,.631,.469,.031,.691,.456,.045,.75,.443,.059,.81,.43,.072,.87,.417,.085,.929,.403,.099,.989,.39,.112,1.049,.377,.125,1.108,.364,.138,-.812,.703,-.312,-.753,.692,-.295,-.694,.681,-.278,-.635,.67,-.261,-.575,.659,-.244,-.516,.647,-.228,-.457,.636,-.211,-.398,.625,-.195,-.338,.613,-.179,-.279,.601,-.163,-.22,.589,-.148,-.16,.577,-.133,-.101,.565,-.118,-.041,.552,-.103,.019,.54,-.089,.078,.527,-.075,.138,.514,-.061,.197,.501,-.048,.257,.488,-.035,.317,.475,-.022,.377,.462,-.009,.436,.449,.004,.496,.436,.017,.556,.422,.029,.616,.409,.041,.676,.396,.054,.735,.382,.066,.795,.369,.078,.855,.356,.09,.915,.342,.102,.975,.329,.114,1.035,.316,.125,1.095,.303,.137,-.831,.654,-.278,-.772,.642,-.262,-.712,.63,-.246,-.653,.618,-.23,-.594,.606,-.215,-.534,.594,-.2,-.475,.582,-.185,-.415,.57,-.17,-.356,.558,-.155,-.296,.545,-.141,-.236,.532,-.127,-.177,.52,-.114,-.117,.507,-.101,-.057,.494,-.088,.003,.481,-.075,.063,.468,-.063,.123,.454,-.051,.182,.441,-.039,.242,.428,-.028,.302,.415,-.016,.362,.401,-.005,.422,.388,.006,.482,.375,.018,.542,.361,.029,.603,.348,.04,.663,.335,.051,.723,.321,.062,.783,.308,.073,.843,.295,.083,.903,.282,.094,.963,.268,.104,1.024,.255,.114,1.084,.242,.124,-.848,.599,-.253,-.789,.587,-.239,-.729,.574,-.224,-.67,.562,-.21,-.61,.549,-.196,-.55,.536,-.182,-.491,.524,-.169,-.431,.511,-.155,-.371,.498,-.143,-.311,.485,-.13,-.251,.472,-.118,-.191,.459,-.106,-.131,.446,-.095,-.071,.433,-.084,-.011,.42,-.073,.049,.406,-.063,.109,.393,-.053,.17,.38,-.042,.23,.367,-.032,.29,.354,-.022,.35,.34,-.012,.411,.327,-.003,.471,.314,.007,.531,.301,.017,.592,.288,.027,.652,.275,.037,.712,.261,.047,.773,.248,.056,.833,.236,.066,.894,.223,.075,.954,.21,.084,1.015,.197,.092,1.075,.185,.101,-.864,.54,-.239,-.804,.527,-.226,-.745,.514,-.213,-.685,.502,-.2,-.625,.489,-.188,-.565,.476,-.176,-.505,.463,-.164,-.445,.45,-.153,-.384,.437,-.142,-.324,.424,-.131,-.264,.411,-.121,-.204,.398,-.112,-.143,.385,-.102,-.083,.372,-.093,-.022,.359,-.084,.038,.346,-.075,.099,.333,-.066,.159,.32,-.057,.22,.307,-.049,.28,.294,-.04,.341,.281,-.031,.401,.268,-.022,.462,.255,-.013,.522,.243,-.004,.583,.23,.005,.643,.217,.013,.704,.205,.022,.765,.192,.03,.825,.18,.038,.886,.168,.046,.947,.156,.053,1.008,.144,.06,1.069,.132,.067,-.878,.479,-.236,-.818,.466,-.224,-.758,.453,-.213,-.698,.44,-.202,-.637,.428,-.191,-.577,.415,-.181,-.517,.402,-.171,-.456,.389,-.162,-.395,.376,-.154,-.335,.364,-.145,-.274,.351,-.137,-.213,.339,-.13,-.153,.326,-.122,-.092,.314,-.114,-.031,.301,-.107,.029,.289,-.099,.09,.276,-.091,.151,.264,-.083,.212,.251,-.075,.272,.238,-.067,.333,.226,-.058,.393,.213,-.05,.454,.2,-.041,.515,.188,-.033,.576,.176,-.026,.637,.164,-.018,.698,.152,-.011,.759,.14,-.004,.82,.129,.002,.881,.118,.009,.942,.107,.015,1.003,.095,.021,1.065,.084,.027,-.89,.418,-.243,-.829,.405,-.232,-.769,.392,-.222,-.708,.38,-.213,-.648,.367,-.205,-.587,.355,-.197,-.526,.343,-.19,-.465,.331,-.183,-.404,.319,-.176,-.343,.307,-.171,-.282,.296,-.165,-.221,.284,-.159,-.16,.272,-.152,-.099,.26,-.146,-.038,.248,-.139,.023,.236,-.132,.084,.224,-.124,.145,.211,-.117,.205,.199,-.109,.266,.186,-.1,.327,.173,-.092,.387,.161,-.084,.448,.149,-.076,.509,.137,-.069,.57,.126,-.063,.631,.114,-.056,.693,.103,-.05,.754,.093,-.044,.816,.083,-.04,.877,.073,-.034,.939,.062,-.029,1,.051,-.023,1.061,.04,-.017,-.9,.358,-.257,-.839,.346,-.248,-.779,.333,-.24,-.718,.322,-.234,-.656,.31,-.228,-.595,.298,-.222,-.534,.287,-.217,-.473,.276,-.211,-.411,.265,-.207,-.35,.255,-.205,-.288,.245,-.2,-.227,.233,-.195,-.166,.222,-.19,-.104,.211,-.184,-.043,.199,-.177,.018,.187,-.171,.079,.175,-.164,.14,.163,-.156,.2,.15,-.147,.261,.137,-.139,.321,.124,-.13,.382,.111,-.122,.443,.101,-.116,.505,.09,-.11,.566,.079,-.104,.627,.068,-.098,.689,.057,-.092,.75,.046,-.086,.811,.035,-.08,.872,.024,-.074,.934,.013,-.067,.995,.002,-.061,1.056,-.01,-.054,-.91,.299,-.274,-.848,.288,-.27,-.787,.277,-.266,-.725,.266,-.261,-.664,.255,-.257,-.603,.244,-.252,-.541,.233,-.248,-.48,.223,-.244,-.418,.212,-.24,-.357,.201,-.235,-.295,.191,-.231,-.234,.18,-.227,-.172,.169,-.222,-.111,.158,-.217,-.05,.147,-.211,.012,.136,-.205,.073,.124,-.199,.134,.112,-.192,.195,.1,-.185,.256,.088,-.177,.316,.075,-.168,.377,.062,-.16,.438,.051,-.153,.499,.04,-.147,.561,.029,-.141,.622,.018,-.135,.683,.006,-.128,.744,-.005,-.121,.805,-.017,-.114,.866,-.029,-.106,.927,-.041,-.098,.988,-.053,-.09,1.049,-.065,-.082,-.919,.239,-.289,-.857,.228,-.287,-.796,.218,-.284,-.734,.207,-.281,-.673,.196,-.277,-.611,.186,-.273,-.55,.175,-.27,-.488,.165,-.266,-.427,.154,-.262,-.365,.143,-.258,-.304,.133,-.254,-.242,.122,-.249,-.181,.112,-.245,-.119,.101,-.241,-.058,.09,-.236,.004,.079,-.231,.065,.068,-.226,.126,.057,-.221,.188,.046,-.215,.249,.034,-.209,.31,.022,-.202,.371,.01,-.194,.432,-.003,-.185,.493,-.014,-.178,.554,-.026,-.171,.615,-.038,-.163,.676,-.05,-.155,.736,-.062,-.146,.797,-.074,-.137,.858,-.087,-.128,.918,-.099,-.119,.979,-.112,-.11,1.039,-.124,-.101,-.929,.178,-.299,-.867,.167,-.296,-.806,.157,-.293,-.744,.146,-.29,-.683,.135,-.287,-.621,.125,-.284,-.56,.114,-.28,-.498,.104,-.277,-.437,.093,-.273,-.375,.083,-.269,-.314,.072,-.265,-.252,.062,-.262,-.191,.051,-.258,-.129,.04,-.254,-.067,.03,-.25,-.006,.019,-.246,.056,.009,-.242,.117,-.002,-.238,.179,-.013,-.235,.24,-.024,-.23,.302,-.035,-.225,.363,-.047,-.22,.424,-.059,-.211,.484,-.072,-.2,.545,-.084,-.191,.606,-.097,-.182,.666,-.109,-.172,.726,-.122,-.161,.787,-.135,-.151,.847,-.147,-.141,.907,-.16,-.131,.968,-.173,-.12,1.028,-.185,-.11,-.94,.116,-.3,-.878,.106,-.297,-.816,.095,-.293,-.755,.084,-.29,-.693,.074,-.287,-.632,.063,-.284,-.57,.053,-.28,-.509,.042,-.277,-.447,.032,-.273,-.386,.021,-.27,-.324,.01,-.266,-.263,0,-.262,-.201,-.011,-.259,-.14,-.021,-.255,-.078,-.032,-.252,-.017,-.042,-.248,.045,-.053,-.245,.106,-.064,-.242,.168,-.075,-.239,.229,-.085,-.237,.291,-.096,-.234,.352,-.107,-.232,.414,-.119,-.227,.475,-.132,-.216,.534,-.145,-.201,.594,-.158,-.189,.654,-.17,-.178,.715,-.183,-.167,.775,-.196,-.156,.835,-.209,-.145,.895,-.221,-.133,.955,-.234,-.122,1.015,-.246,-.11,-.95,.055,-.292,-.889,.045,-.288,-.827,.034,-.284,-.766,.024,-.281,-.704,.013,-.277,-.643,.003,-.274,-.581,-.008,-.27,-.52,-.019,-.266,-.458,-.029,-.263,-.397,-.04,-.259,-.335,-.05,-.256,-.274,-.061,-.252,-.212,-.071,-.249,-.151,-.082,-.245,-.089,-.093,-.242,-.028,-.103,-.238,.034,-.114,-.235,.095,-.125,-.232,.156,-.135,-.229,.218,-.146,-.226,.279,-.157,-.224,.34,-.168,-.221,.401,-.181,-.221,.463,-.194,-.219,.523,-.207,-.207,.581,-.219,-.188,.641,-.231,-.173,.701,-.244,-.165,.761,-.257,-.153,.822,-.27,-.141,.882,-.282,-.129,.941,-.294,-.116,1.001,-.306,-.1,-.962,-.004,-.274,-.9,-.014,-.27,-.838,-.025,-.266,-.777,-.035,-.262,-.715,-.046,-.258,-.654,-.056,-.255,-.592,-.067,-.251,-.531,-.077,-.247,-.469,-.087,-.243,-.408,-.098,-.239,-.346,-.108,-.236,-.285,-.119,-.232,-.223,-.129,-.228,-.162,-.14,-.224,-.1,-.15,-.221,-.039,-.161,-.217,.023,-.171,-.213,.084,-.182,-.209,.145,-.192,-.205,.207,-.202,-.201,.268,-.212,-.196,.329,-.22,-.189,.391,-.233,-.189,.448,-.253,-.205,.509,-.268,-.204,.569,-.28,-.189,.627,-.292,-.17,.687,-.305,-.158,.748,-.318,-.147,.807,-.33,-.133,.867,-.342,-.118,.926,-.353,-.1,.983,-.363,-.078,-.973,-.06,-.249,-.911,-.07,-.245,-.85,-.081,-.241,-.788,-.091,-.236,-.727,-.101,-.232,-.665,-.112,-.228,-.603,-.122,-.224,-.542,-.132,-.22,-.48,-.142,-.216,-.419,-.153,-.211,-.357,-.163,-.207,-.296,-.173,-.203,-.234,-.184,-.199,-.173,-.194,-.195,-.111,-.204,-.19,-.05,-.214,-.186,.012,-.224,-.181,.073,-.234,-.177,.135,-.244,-.171,.196,-.253,-.166,.258,-.259,-.156,.319,-.271,-.153,.379,-.288,-.161,.435,-.309,-.181,.494,-.327,-.191,.555,-.341,-.183,.614,-.353,-.166,.673,-.365,-.152,.733,-.377,-.137,.792,-.389,-.119,.85,-.399,-.1,.908,-.408,-.076,.963,-.413,-.048,-.984,-.113,-.217,-.922,-.123,-.213,-.861,-.133,-.208,-.799,-.143,-.204,-.737,-.153,-.199,-.676,-.164,-.195,-.614,-.174,-.19,-.553,-.184,-.186,-.491,-.194,-.181,-.43,-.204,-.177,-.368,-.213,-.172,-.307,-.223,-.167,-.245,-.233,-.162,-.184,-.243,-.157,-.122,-.253,-.152,-.061,-.262,-.147,.001,-.271,-.141,.063,-.281,-.137,.124,-.291,-.132,.186,-.297,-.123,.247,-.309,-.12,.308,-.326,-.125,.366,-.344,-.137,.424,-.363,-.152,.479,-.384,-.172,.54,-.401,-.172,.599,-.413,-.156,.658,-.424,-.138,.716,-.435,-.119,.775,-.445,-.098,.832,-.453,-.073,.887,-.457,-.044,.939,-.457,-.01,-.994,-.162,-.181,-.933,-.172,-.176,-.871,-.182,-.171,-.81,-.192,-.166,-.748,-.202,-.162,-.687,-.212,-.157,-.625,-.222,-.152,-.563,-.231,-.147,-.502,-.241,-.141,-.44,-.25,-.136,-.379,-.259,-.131,-.317,-.269,-.125,-.256,-.278,-.12,-.194,-.287,-.114,-.132,-.296,-.109,-.071,-.306,-.104,-.009,-.313,-.096,.052,-.323,-.091,.114,-.334,-.087,.175,-.347,-.086,.235,-.364,-.092,.294,-.383,-.103,.351,-.402,-.119,.408,-.422,-.136,.463,-.442,-.157,.524,-.46,-.156,.583,-.471,-.138,.641,-.481,-.117,.698,-.49,-.095,.755,-.497,-.07,.81,-.501,-.04,.863,-.501,-.006,.912,-.494,.032,-1.005,-.209,-.14,-.944,-.219,-.135,-.882,-.228,-.13,-.82,-.238,-.125,-.759,-.247,-.12,-.697,-.257,-.114,-.636,-.266,-.109,-.574,-.275,-.103,-.512,-.284,-.098,-.451,-.293,-.092,-.389,-.301,-.086,-.327,-.31,-.08,-.266,-.319,-.074,-.204,-.326,-.067,-.142,-.336,-.061,-.081,-.346,-.057,-.02,-.357,-.053,.042,-.37,-.052,.102,-.386,-.054,.162,-.403,-.061,.22,-.422,-.073,.277,-.441,-.09,.333,-.461,-.11,.388,-.481,-.135,.446,-.501,-.144,.507,-.517,-.136,.565,-.526,-.115,.622,-.535,-.092,.679,-.542,-.066,.734,-.546,-.036,.786,-.545,-.002,.835,-.538,.036,.882,-.526,.077,-1.016,-.253,-.097,-.954,-.263,-.092,-.892,-.272,-.087,-.831,-.281,-.081,-.769,-.29,-.075,-.707,-.299,-.069,-.646,-.307,-.063,-.584,-.316,-.057,-.522,-.324,-.051,-.461,-.333,-.045,-.399,-.34,-.038,-.337,-.349,-.032,-.276,-.358,-.026,-.214,-.368,-.022,-.153,-.38,-.018,-.092,-.393,-.017,-.031,-.408,-.018,.029,-.424,-.022,.089,-.442,-.031,.146,-.462,-.045,.203,-.481,-.064,.258,-.501,-.086,.311,-.52,-.113,.369,-.54,-.128,.429,-.559,-.127,.489,-.572,-.112,.546,-.58,-.088,.602,-.586,-.062,.657,-.59,-.032,.71,-.589,.002,.759,-.583,.04,.805,-.571,.08,.849,-.555,.122,-1.026,-.296,-.053,-.964,-.305,-.047,-.903,-.314,-.041,-.841,-.322,-.035,-.779,-.331,-.029,-.718,-.339,-.022,-.656,-.347,-.016,-.594,-.355,-.009,-.533,-.363,-.003,-.471,-.372,.003,-.409,-.381,.009,-.348,-.391,.013,-.286,-.403,.017,-.225,-.416,.018,-.164,-.43,.018,-.104,-.446,.014,-.044,-.463,.008,.015,-.482,-.003,.072,-.501,-.019,.128,-.521,-.039,.182,-.54,-.063,.235,-.559,-.092,.292,-.579,-.11,.351,-.599,-.114,.411,-.614,-.105,.47,-.625,-.085,.526,-.631,-.058,.581,-.634,-.028,.633,-.634,.006,.683,-.627,.044,.729,-.615,.084,.773,-.599,.126,.816,-.582,.167,-1.036,-.337,-.007,-.975,-.346,-.001,-.913,-.354,.005,-.851,-.362,.012,-.789,-.37,.019,-.728,-.378,.025,-.666,-.386,.032,-.604,-.394,.038,-.543,-.404,.043,-.481,-.414,.048,-.42,-.425,.051,-.359,-.438,.053,-.298,-.452,.053,-.237,-.468,.051,-.177,-.484,.045,-.118,-.503,.037,-.06,-.522,.024,-.003,-.541,.006,.053,-.561,-.016,.107,-.58,-.041,.159,-.598,-.071,.215,-.618,-.091,.273,-.638,-.1,.333,-.656,-.095,.393,-.668,-.079,.45,-.676,-.054,.504,-.679,-.024,.557,-.678,.009,.607,-.672,.047,.653,-.66,.088,.696,-.643,.13,.738,-.623,.172,.783,-.61,.213,-1.046,-.378,.039,-.985,-.386,.046,-.923,-.393,.053,-.861,-.401,.06,-.8,-.409,.066,-.738,-.418,.072,-.676,-.427,.078,-.615,-.437,.082,-.553,-.448,.086,-.492,-.461,.088,-.431,-.474,.089,-.37,-.489,.087,-.31,-.506,.083,-.251,-.524,.075,-.192,-.542,.064,-.134,-.562,.049,-.078,-.581,.03,-.023,-.601,.007,.03,-.619,-.02,.082,-.637,-.05,.137,-.656,-.073,.196,-.677,-.084,.255,-.696,-.084,.315,-.71,-.072,.373,-.72,-.049,.428,-.724,-.021,.481,-.723,.013,.531,-.717,.051,.577,-.705,.091,.62,-.687,.133,.66,-.665,.176,.704,-.649,.217,.751,-.639,.258,-1.057,-.417,.087,-.995,-.425,.093,-.933,-.433,.1,-.872,-.441,.107,-.81,-.45,.112,-.748,-.46,.117,-.687,-.471,.121,-.626,-.483,.123,-.564,-.497,.124,-.504,-.511,.123,-.443,-.527,.12,-.383,-.545,.113,-.324,-.563,.104,-.266,-.582,.091,-.209,-.602,.074,-.153,-.621,.053,-.099,-.64,.029,-.046,-.659,.001,.006,-.676,-.03,.06,-.695,-.054,.118,-.716,-.068,.177,-.735,-.071,.237,-.752,-.063,.296,-.763,-.043,.352,-.768,-.016,.405,-.768,.017,.455,-.762,.054,.501,-.75,.095,.543,-.731,.137,.583,-.708,.18,.626,-.69,.222,.672,-.678,.262,.721,-.672,.301,-1.067,-.457,.134,-1.005,-.465,.141,-.943,-.474,.146,-.882,-.483,.151,-.82,-.494,.155,-.759,-.506,.158,-.698,-.519,.159,-.637,-.533,.159,-.576,-.549,.156,-.516,-.566,.151,-.457,-.584,.143,-.398,-.603,.132,-.341,-.622,.117,-.284,-.642,.098,-.229,-.661,.076,-.175,-.68,.05,-.122,-.698,.022,-.071,-.715,-.01,-.017,-.734,-.035,.04,-.754,-.051,.099,-.774,-.058,.159,-.792,-.052,.218,-.805,-.036,.275,-.812,-.011,.329,-.813,.021,.379,-.808,.058,.426,-.795,.099,.468,-.776,.141,.507,-.752,.183,.548,-.732,.226,.593,-.718,.267,.641,-.71,.306,.692,-.709,.343,-1.077,-.497,.18,-1.015,-.507,.186,-.954,-.517,.19,-.892,-.529,.193,-.831,-.542,.195,-.77,-.556,.195,-.71,-.571,.193,-.649,-.587,.188,-.59,-.605,.181,-.531,-.623,.171,-.473,-.642,.158,-.416,-.662,.142,-.36,-.681,.121,-.305,-.701,.098,-.252,-.719,.071,-.199,-.737,.042,-.148,-.754,.01,-.094,-.773,-.016,-.038,-.793,-.034,.021,-.813,-.043,.081,-.832,-.041,.14,-.847,-.028,.198,-.856,-.005,.253,-.858,.026,.304,-.853,.062,.35,-.842,.102,.393,-.823,.144,.431,-.798,.187,.471,-.775,.229,.515,-.759,.271,.562,-.749,.311,.612,-.746,.349,.665,-.749,.382,-1.087,-.54,.224,-1.026,-.552,.228,-.965,-.564,.23,-.904,-.578,.23,-.843,-.593,.229,-.782,-.609,.225,-.723,-.626,.219,-.663,-.644,.211,-.605,-.663,.199,-.547,-.682,.184,-.491,-.702,.166,-.435,-.721,.144,-.381,-.74,.119,-.328,-.758,.092,-.276,-.776,.062,-.225,-.793,.03,-.171,-.811,.003,-.115,-.831,-.017,-.057,-.852,-.028,.003,-.871,-.029,.062,-.887,-.019,.121,-.898,.002,.176,-.902,.03,.228,-.899,.066,.275,-.888,.106,.318,-.87,.148,.357,-.846,.19,.395,-.82,.233,.437,-.801,.275,.483,-.788,.316,.532,-.783,.354,.584,-.785,.389,.639,-.793,.419,-1.098,-.587,.265,-1.037,-.6,.266,-.976,-.615,.265,-.916,-.63,.262,-.856,-.647,.257,-.796,-.665,.25,-.737,-.683,.239,-.679,-.703,.226,-.622,-.722,.209,-.566,-.742,.189,-.511,-.761,.166,-.457,-.78,.14,-.405,-.798,.112,-.353,-.815,.082,-.301,-.832,.05,-.248,-.85,.022,-.193,-.87,.001,-.135,-.891,-.012,-.076,-.91,-.016,-.016,-.928,-.008,.043,-.94,.009,.1,-.946,.036,.152,-.944,.07,.2,-.935,.109,.244,-.917,.151,.283,-.893,.193,.319,-.866,.236,.36,-.844,.278,.404,-.829,.32,.452,-.821,.359,.504,-.821,.395,.558,-.827,.427,.613,-.839,.452,-1.109,-.637,.301,-1.049,-.652,.299,-.989,-.668,.295,-.929,-.686,.288,-.87,-.704,.279,-.811,-.723,.267,-.754,-.742,.252,-.697,-.762,.233,-.642,-.781,.212,-.587,-.8,.188,-.534,-.819,.161,-.482,-.837,.131,-.43,-.854,.101,-.378,-.871,.069,-.325,-.889,.042,-.27,-.909,.019,-.213,-.929,.004,-.154,-.949,-.002,-.094,-.967,.003,-.035,-.981,.017,.022,-.989,.042,.076,-.989,.075,.125,-.981,.113,.169,-.965,.154,.209,-.941,.197,.245,-.913,.239,.283,-.888,.282,.326,-.87,.324,.373,-.86,.364,.423,-.857,.402,.477,-.862,.434,.532,-.872,.461,.589,-.888,.482,-1.122,-.69,.332,-1.062,-.707,.326,-1.002,-.725,.318,-.944,-.743,.307,-.886,-.763,.293,-.829,-.782,.277,-.772,-.802,.257,-.717,-.821,.234,-.664,-.84,.209,-.611,-.858,.181,-.559,-.875,.151,-.507,-.892,.119,-.455,-.909,.089,-.402,-.928,.061,-.348,-.947,.038,-.291,-.968,.021,-.232,-.988,.013,-.172,-1.007,.014,-.113,-1.022,.026,-.055,-1.032,.049,0,-1.034,.079,.05,-1.028,.117,.095,-1.013,.158,.135,-.99,.2,.171,-.962,.242,.208,-.934,.285,.249,-.913,.327,.294,-.9,.369,.343,-.895,.407,.396,-.897,.441,.451,-.906,.47,.507,-.92,.493,.565,-.939,.509,-1.135,-.746,.356,-1.076,-.764,.347,-1.018,-.783,.334,-.96,-.803,.319,-.904,-.822,.301,-.848,-.842,.28,-.793,-.861,.256,-.74,-.879,.23,-.687,-.897,.201,-.636,-.914,.17,-.584,-.931,.138,-.533,-.948,.108,-.48,-.967,.08,-.425,-.986,.056,-.368,-1.006,.038,-.31,-1.027,.028,-.251,-1.046,.027,-.191,-1.063,.036,-.132,-1.074,.056,-.077,-1.078,.085,-.025,-1.074,.121,.021,-1.061,.161,.062,-1.039,.203,.098,-1.012,.246,.133,-.981,.288,.172,-.957,.331,.216,-.941,.373,.264,-.933,.412,.315,-.933,.448,.369,-.939,.479,.426,-.953,.503,.483,-.971,.521,.541,-.992,.532,-1.15,-.804,.375,-1.092,-.823,.361,-1.035,-.842,.344,-.979,-.862,.325,-.924,-.881,.303,-.87,-.9,.278,-.816,-.919,.25,-.764,-.936,.22,-.713,-.953,.189,-.662,-.97,.157,-.61,-.987,.127,-.557,-1.005,.099,-.502,-1.025,.075,-.446,-1.045,.056,-.388,-1.065,.044,-.329,-1.085,.04,-.269,-1.103,.047,-.21,-1.115,.064,-.154,-1.121,.09,-.101,-1.119,.125,-.054,-1.108,.165,-.012,-1.089,.207,.025,-1.062,.249,.059,-1.03,.291,.097,-1.003,.334,.138,-.984,.376,.185,-.972,.417,.235,-.969,.454,.288,-.974,.487,.344,-.985,.513,.401,-1.002,.533,.459,-1.023,.545,.516,-1.047,.551,-1.167,-.863,.387,-1.11,-.882,.369,-1.054,-.902,.348,-1,-.921,.325,-.946,-.94,.299,-.893,-.958,.27,-.841,-.975,.24,-.79,-.992,.208,-.739,-1.009,.177,-.687,-1.026,.147,-.634,-1.044,.119,-.579,-1.063,.094,-.524,-1.083,.074,-.466,-1.104,.06,-.407,-1.124,.054,-.347,-1.142,.058,-.288,-1.156,.072,-.231,-1.164,.097,-.177,-1.164,.13,-.129,-1.155,.168,-.085,-1.137,.21,-.047,-1.112,.253,-.013,-1.08,.295,.022,-1.051,.337,.062,-1.028,.38,.106,-1.013,.421,.155,-1.006,.46,.207,-1.009,.494,.262,-1.018,.523,.319,-1.034,.544,.377,-1.054,.558,.435,-1.077,.565,.492,-1.102,.567,-1.185,-.922,.393,-1.13,-.942,.371,-1.076,-.961,.346,-1.022,-.979,.319,-.97,-.997,.29,-.918,-1.014,.26,-.867,-1.031,.227,-.816,-1.048,.196,-.764,-1.065,.166,-.711,-1.083,.138,-.657,-1.102,.113,-.601,-1.122,.092,-.544,-1.142,.076,-.485,-1.163,.068,-.425,-1.182,.07,-.366,-1.197,.081,-.308,-1.207,.103,-.253,-1.209,.134,-.204,-1.202,.172,-.159,-1.186,.213,-.12,-1.162,.256,-.085,-1.132,.298,-.052,-1.1,.34,-.014,-1.073,.383,.028,-1.054,.425,.075,-1.045,.465,.127,-1.044,.501,.181,-1.052,.531,.238,-1.066,.555,.295,-1.085,.571,.353,-1.107,.579,.41,-1.132,.582,.467,-1.158,.58,-1.206,-.981,.394,-1.152,-1,.368,-1.099,-1.018,.34,-1.047,-1.036,.31,-.995,-1.053,.279,-.944,-1.07,.247,-.892,-1.087,.216,-.84,-1.104,.186,-.788,-1.122,.158,-.734,-1.141,.132,-.678,-1.161,.11,-.622,-1.181,.094,-.563,-1.201,.084,-.504,-1.221,.083,-.444,-1.237,.092,-.385,-1.249,.111,-.33,-1.253,.14,-.279,-1.248,.176,-.233,-1.234,.217,-.193,-1.212,.259,-.157,-1.183,.302,-.124,-1.15,.343,-.089,-1.121,.386,-.049,-1.098,.428,-.004,-1.085,.47,.046,-1.081,.508,.1,-1.086,.54,.156,-1.098,.565,.213,-1.116,.583,.271,-1.138,.593,.328,-1.162,.597,.386,-1.188,.595,.442,-1.214,.59])},yd=1/120,Xv=4,tA=1.6,eA=2,nA=.65,iA=.35,au=2;class aA{constructor(t,n,s,l){this.width=t,this.height=n,this.segX=s,this.segY=l,this.cols=s+1,this.rows=l+1,this.count=this.cols*this.rows,this.positions=new Float32Array(this.count*3),this.prev=new Float32Array(this.count*3),this.rest=new Float32Array(this.count*3),this.initPositions();const c=[],f=[],d=[],m=(p,_)=>_*this.cols+p;for(let p=0;p<this.rows;p++)for(let _=0;_<this.cols;_++)_+1<this.cols&&(c.push(m(_,p)),f.push(m(_+1,p)),d.push(1)),p+1<this.rows&&(c.push(m(_,p)),f.push(m(_,p+1)),d.push(1)),_+1<this.cols&&p+1<this.rows&&(c.push(m(_,p)),f.push(m(_+1,p+1)),d.push(.85),c.push(m(_+1,p)),f.push(m(_,p+1)),d.push(.85)),_+2<this.cols&&(c.push(m(_,p)),f.push(m(_+2,p)),d.push(.5)),p+2<this.rows&&(c.push(m(_,p)),f.push(m(_,p+2)),d.push(.5));this.cA=new Int32Array(c),this.cB=new Int32Array(f),this.cMul=new Float32Array(d),this.cRest=new Float32Array(c.length),this.computeRestLengths(),this.neighbors=new Int32Array(this.count*4).fill(-1);for(let p=0;p<this.rows;p++)for(let _=0;_<this.cols;_++){const v=m(_,p)*4;this.neighbors[v+0]=_>0?m(_-1,p):-1,this.neighbors[v+1]=_+1<this.cols?m(_+1,p):-1,this.neighbors[v+2]=p>0?m(_,p-1):-1,this.neighbors[v+3]=p+1<this.rows?m(_,p+1):-1}this.selfRadius=Math.min(this.width/this.segX,this.height/this.segY)*tA,this.selfHashInv=1/this.selfRadius}width;height;segX;segY;cols;rows;count;positions;prev;rest;cA;cB;cRest;cMul;neighbors;grab=null;accumulator=0;selfRadius=.1;selfHashInv=10;selfHash=new Map;smoothScratch=null;initPositions(){const t=du,n=t.cols,s=t.rows,l=this.width/t.width,c=this.height/t.height,f=(l+c)/2;let d=0;for(let m=0;m<this.rows;m++)for(let p=0;p<this.cols;p++){const _=p/this.segX*(n-1),v=m/this.segY*(s-1),g=Math.min(n-2,Math.floor(_)),y=Math.min(s-2,Math.floor(v)),E=_-g,C=v-y;for(let M=0;M<3;M++){const S=(y*n+g)*3+M,z=(y*n+g+1)*3+M,B=((y+1)*n+g)*3+M,R=((y+1)*n+g+1)*3+M,O=t.data[S]*(1-E)+t.data[z]*E,L=t.data[B]*(1-E)+t.data[R]*E,F=M===0?l:M===1?c:f;this.positions[d+M]=(O*(1-C)+L*C)*F}d+=3}this.prev.set(this.positions),this.rest.set(this.positions)}computeRestLengths(){const t=this.width/this.segX,n=this.height/this.segY;for(let s=0;s<this.cA.length;s++){const l=this.cA[s],c=this.cB[s],f=l%this.cols,d=Math.floor(l/this.cols),m=c%this.cols,p=Math.floor(c/this.cols),_=(f-m)*t,v=(d-p)*n;this.cRest[s]=Math.hypot(_,v)}}reset(){this.initPositions(),this.grab=null}poke(t=.5){const n=this.positions,s=Math.floor(Math.random()*this.count),l=n[s*3],c=n[s*3+1],f=n[s*3+2],d=new j(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(t*.09),m=Math.max(this.width,this.height)*.28;for(let p=0;p<this.count;p++){const _=n[p*3]-l,v=n[p*3+1]-c,g=n[p*3+2]-f,y=Math.sqrt(_*_+v*v+g*g);if(y>m)continue;const E=1-y/m,C=E*E*(3-2*E);this.prev[p*3]-=d.x*C,this.prev[p*3+1]-=d.y*C,this.prev[p*3+2]-=d.z*C}}startGrab(t,n){const s=this.positions,l=[],c=[],f=[];let d=1/0;for(let m=0;m<this.count;m++){const p=s[m*3]-t.x,_=s[m*3+1]-t.y,v=s[m*3+2]-t.z,g=Math.sqrt(p*p+_*_+v*v);if(d=Math.min(d,g),g>n)continue;const y=1-g/n,E=y*y*(3-2*y);l.push(m),c.push(E),f.push(p,_,v)}return l.length===0||d>n?!1:(this.grab={indices:l,weights:c,offsets:new Float32Array(f),target:t.clone()},!0)}moveGrab(t){this.grab&&this.grab.target.copy(t)}endGrab(){this.grab=null}get isGrabbing(){return this.grab!==null}cavityScratch=null;computeCavity(t,n,s=6){const l=this.positions,c=this.neighbors,f=this.count,d=1/Math.min(this.width/this.segX,this.height/this.segY);(!this.cavityScratch||this.cavityScratch.length<f)&&(this.cavityScratch=new Float32Array(f));const m=this.cavityScratch;for(let p=0;p<f;p++){let _=0,v=0,g=0,y=0;for(let B=0;B<4;B++){const R=c[p*4+B];R<0||(_+=l[R*3],v+=l[R*3+1],g+=l[R*3+2],y++)}if(y===0){m[p]=0;continue}const E=1/y,C=_*E-l[p*3],M=v*E-l[p*3+1],S=g*E-l[p*3+2],z=(C*t[p*3]+M*t[p*3+1]+S*t[p*3+2])*d;m[p]=Math.min(1,Math.max(0,z*s))}for(let p=0;p<f;p++){let _=0,v=0;for(let g=0;g<4;g++){const y=c[p*4+g];y<0||(_+=m[y],v++)}n[p]=v>0?m[p]*.5+_/v*.5:m[p]}}step(t,n){this.accumulator+=Math.min(t,.05);let s=0;for(;this.accumulator>=yd&&s<Xv;)this.substep(n),this.accumulator-=yd,s++;s===Xv&&(this.accumulator=0),s>0&&(this.selfCollide(),this.smoothPass(iA))}smoothPass(t){const n=this.positions,s=this.neighbors,l=this.count;(!this.smoothScratch||this.smoothScratch.length<l*3)&&(this.smoothScratch=new Float32Array(l*3));const c=this.smoothScratch;for(let f=0;f<l;f++){let d=0,m=0,p=0,_=0;for(let y=0;y<4;y++){const E=s[f*4+y];E<0||(d+=n[E*3],m+=n[E*3+1],p+=n[E*3+2],_++)}const v=f*3;if(_===0){c[v]=n[v],c[v+1]=n[v+1],c[v+2]=n[v+2];continue}const g=1/_;c[v]=n[v]+(d*g-n[v])*t,c[v+1]=n[v+1]+(m*g-n[v+1])*t,c[v+2]=n[v+2]+(p*g-n[v+2])*t}n.set(c.subarray(0,l*3))}selfCollide(){const t=this.positions,n=this.count,s=this.cols,l=this.selfRadius,c=l*l,f=this.selfHashInv,d=this.selfHash;for(let m=0;m<eA;m++){d.clear();for(let p=0;p<n;p++){const _=Math.floor(t[p*3]*f),v=Math.floor(t[p*3+1]*f),g=Math.floor(t[p*3+2]*f),y=(_*73856093^v*19349663^g*83492791)>>>0;let E=d.get(y);E||(E=[],d.set(y,E)),E.push(p)}for(let p=0;p<n;p++){const _=p%s,v=p/s|0,g=Math.floor(t[p*3]*f),y=Math.floor(t[p*3+1]*f),E=Math.floor(t[p*3+2]*f);for(let C=-1;C<=1;C++)for(let M=-1;M<=1;M++)for(let S=-1;S<=1;S++){const z=((g+S)*73856093^(y+M)*19349663^(E+C)*83492791)>>>0,B=d.get(z);if(B)for(let R=0;R<B.length;R++){const O=B[R];if(O<=p)continue;const L=O%s,F=O/s|0,T=_-L,P=v-F;if(T>=-au&&T<=au&&P>=-au&&P<=au)continue;const Y=t[O*3]-t[p*3],N=t[O*3+1]-t[p*3+1],k=t[O*3+2]-t[p*3+2],lt=Y*Y+N*N+k*k;if(lt>=c||lt<1e-12)continue;const ut=Math.sqrt(lt),K=(l-ut)/ut*.5*nA,I=Y*K,H=N*K,$=k*K;t[p*3]-=I,t[p*3+1]-=H,t[p*3+2]-=$,t[O*3]+=I,t[O*3+1]+=H,t[O*3+2]+=$}}}}}substep(t){const n=this.positions,s=this.prev,l=this.count,c=Math.pow(1-Math.min(t.viscosity,.99),yd*60);for(let y=0;y<l*3;y++){const E=n[y],C=(E-s[y])*c;s[y]=E,n[y]=E+C}if(t.smoothing>0){const y=t.smoothing*.5,E=this.neighbors;for(let C=0;C<l;C++){let M=0,S=0,z=0,B=0;for(let O=0;O<4;O++){const L=E[C*4+O];L<0||(M+=n[L*3],S+=n[L*3+1],z+=n[L*3+2],B++)}if(B===0)continue;const R=1/B;n[C*3]+=(M*R-n[C*3])*y,n[C*3+1]+=(S*R-n[C*3+1])*y,n[C*3+2]+=(z*R-n[C*3+2])*y}}const f=Math.max(1,Math.round(t.iterations)),d=t.stiffness,m=this.cA,p=this.cB,_=this.cRest,v=this.cMul,g=m.length;for(let y=0;y<f;y++){for(let E=0;E<g;E++){const C=m[E]*3,M=p[E]*3,S=n[M]-n[C],z=n[M+1]-n[C+1],B=n[M+2]-n[C+2],R=Math.sqrt(S*S+z*z+B*B);if(R<1e-9)continue;const O=(R-_[E])/R*.5*d*v[E],L=S*O,F=z*O,T=B*O;n[C]+=L,n[C+1]+=F,n[C+2]+=T,n[M]-=L,n[M+1]-=F,n[M+2]-=T}this.applyGrab()}}applyGrab(){const t=this.grab;if(!t)return;const n=this.positions;for(let s=0;s<t.indices.length;s++){const l=t.indices[s]*3,c=t.weights[s],f=t.target.x+t.offsets[s*3],d=t.target.y+t.offsets[s*3+1],m=t.target.z+t.offsets[s*3+2];n[l]+=(f-n[l])*c,n[l+1]+=(d-n[l+1])*c,n[l+2]+=(m-n[l+2])*c}}}function I1(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function sA(r,t,n){const s=new Float32Array(r*r),l=new Float32Array(t+1),c=new Float32Array(t+1);for(let d=0;d<=t;d++)l[d]=.85+n()*.3,c[d]=.85+n()*.3;const f=new Float32Array(r*r);for(let d=0;d<f.length;d++)f[d]=n();for(let d=0;d<r;d++){const m=d/r*t,p=Math.floor(m),_=m-p;for(let v=0;v<r;v++){const g=v/r*t,y=Math.floor(g),E=g-y,C=Math.sin(E*Math.PI)*l[y%(t+1)],M=Math.sin(_*Math.PI)*c[p%(t+1)],z=(y+p)%2===0?C*.62+M*.38:M*.62+C*.38,B=f[d*r+v];s[d*r+v]=z*.85+B*.15}}return s}function F1(r,t,n){const s=document.createElement("canvas");s.width=t,s.height=t;const l=s.getContext("2d"),c=l.createImageData(t,t),f=c.data,d=(p,_)=>r[(_+t)%t*t+(p+t)%t];for(let p=0;p<t;p++)for(let _=0;_<t;_++){const v=(d(_+1,p)-d(_-1,p))*n,g=(d(_,p+1)-d(_,p-1))*n,y=1/Math.sqrt(v*v+g*g+1),E=(p*t+_)*4;f[E]=Math.round((-v*y*.5+.5)*255),f[E+1]=Math.round((g*y*.5+.5)*255),f[E+2]=Math.round((y*.5+.5)*255),f[E+3]=255}l.putImageData(c,0,0);const m=new yu(s);return m.wrapS=m.wrapT=dl,m.repeat.set(2,2),m.colorSpace=na,m}function rA(r,t,n,s){const l=new Float32Array(r*r),c=new Float32Array(r*r);for(let d=0;d<c.length;d++)c[d]=s();const f=new Float32Array(Math.ceil(t)+2);for(let d=0;d<f.length;d++)f[d]=.85+s()*.3;for(let d=0;d<r;d++){const m=d/r*n,p=Math.floor(m),_=m-p,v=p%2===0?0:.5;for(let g=0;g<r;g++){const y=g/r*t+v,E=Math.floor(y),C=y-E,M=Math.sin(C*Math.PI)*f[(E+1)%f.length],S=Math.sin(_*Math.PI),z=.5+.5*Math.cos((C-.5)*2*Math.PI),B=.55*M+.3*S*z;l[d*r+g]=B*.85+c[d*r+g]*.15}}return l}function oA(r){const t=r.size??512,n=I1(r.seed??20240),s=r.type==="woven"?sA(t,r.threads,n):rA(t,r.threads,Math.max(2,Math.round(r.threads*.8)),n);return F1(s,t,r.strength)}function lA(r,t=512,n=1.6){const s=document.createElement("canvas");s.width=t,s.height=t;const l=s.getContext("2d");l.drawImage(r,0,0,t,t);const c=l.getImageData(0,0,t,t).data,f=new Float32Array(t*t);for(let d=0;d<f.length;d++)f[d]=(c[d*4]*.2126+c[d*4+1]*.7152+c[d*4+2]*.0722)/255;return F1(f,t,n)}function cA(r=256,t=4242){const n=I1(t),s=document.createElement("canvas");s.width=r,s.height=r;const l=s.getContext("2d"),c=l.createImageData(r,r),f=c.data;for(let m=0;m<r*r;m++){const p=Math.round(215+(n()-.5)*70);f[m*4]=p,f[m*4+1]=p,f[m*4+2]=p,f[m*4+3]=255}l.putImageData(c,0,0);const d=new yu(s);return d.wrapS=d.wrapT=dl,d.repeat.set(4,4),d.colorSpace=na,d}function uA(r){const t=cA(),n=new MM({color:new re("#9aa1ad"),metalness:.95,roughness:.1,roughnessMap:t,normalScale:new Yt(.5,.5),clearcoat:1,clearcoatRoughness:.08,sheen:.35,sheenRoughness:.55,sheenColor:new re("#cfd6ff"),iridescence:1,iridescenceIOR:1.35,iridescenceThicknessRange:[120,480],side:ea}),s={uHoloIntensity:{value:1},uHoloScale:{value:110},uBandFreq:{value:3},uRadialFreq:{value:1.6},uSaturation:{value:.8},uHueShift:{value:0},uSparkle:{value:.6},uSpecTint:{value:.85},uSurfaceMap:{value:r},uSurfaceOpacity:{value:1},uCavityAmount:{value:0},uCornerRound:{value:0},uClothSize:{value:new Yt(3,3)}};return n.alphaToCoverage=!0,n.onBeforeCompile=l=>{Object.assign(l.uniforms,s),l.vertexShader=`varying vec2 vHoloUv;
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
        }`)},{material:n,uniforms:s}}const qr=2048;class fA{canvas;texture;decals=[];clothImage=null;selected=null;ctx;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=qr,this.canvas.height=qr,this.ctx=this.canvas.getContext("2d"),this.texture=new yu(this.canvas),this.texture.colorSpace=ri,this.redraw()}setAspect(t){const n=t>=1?qr:Math.round(qr*t),s=t>=1?Math.round(qr/t):qr;return this.canvas.width===n&&this.canvas.height===s?(this.redraw(),!1):(this.canvas.width=n,this.canvas.height=s,this.texture.dispose(),this.texture=new yu(this.canvas),this.texture.colorSpace=ri,this.redraw(),!0)}addDecal(t){const n={img:t,u:.5,v:.5,scale:.35,rotation:0};return this.decals.push(n),this.selected=n,this.redraw(),n}setClothImage(t){this.clothImage=t,this.redraw()}clear(){this.decals=[],this.clothImage=null,this.selected=null,this.redraw()}hitTest(t,n){const s=this.canvas.width,l=this.canvas.height,c=t*s,f=(1-n)*l;for(let d=this.decals.length-1;d>=0;d--){const m=this.decals[d],{w:p,h:_}=this.decalPixelSize(m),v=m.u*s,g=(1-m.v)*l,y=-m.rotation*Math.PI/180,E=c-v,C=f-g,M=E*Math.cos(y)-C*Math.sin(y),S=E*Math.sin(y)+C*Math.cos(y);if(Math.abs(M)<=p/2&&Math.abs(S)<=_/2)return m}return null}decalPixelSize(t){const n=this.canvas.width,s=t.img.naturalWidth||t.img.width||300,l=t.img.naturalHeight||t.img.height||300,c=t.scale*n,f=c*l/s;return{w:c,h:f}}redraw(){const{ctx:t,canvas:n}=this;t.clearRect(0,0,n.width,n.height),this.clothImage&&t.drawImage(this.clothImage,0,0,n.width,n.height);for(const s of this.decals){const{w:l,h:c}=this.decalPixelSize(s);t.save(),t.translate(s.u*n.width,(1-s.v)*n.height),t.rotate(s.rotation*Math.PI/180),t.drawImage(s.img,-l/2,-c/2,l,c),t.restore()}this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}const Wv=`
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
`,hA=`
  
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
`,dA=`
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
`,qv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;function Yv(){return{tDepth:{value:null},focus:{value:5.2},focalDepth:{value:.15},aperture:{value:.4},maxblur:{value:.04},nearClip:{value:.1},farClip:{value:200}}}class pA extends js{sceneRef;cameraRef;depthMaterial;depthRT;blurRT;gatherMat;compositeMat;fsQuad;clearColorTmp=new re;constructor(t,n){super(),this.sceneRef=t,this.cameraRef=n,this.needsSwap=!0,this.depthMaterial=new M1,this.depthMaterial.depthPacking=SS,this.depthMaterial.blending=Xi,this.depthRT=new zn(1,1,{minFilter:Tn,magFilter:Tn}),this.blurRT=new zn(1,1,{minFilter:Un,magFilter:Un,type:jn}),this.gatherMat=new Ln({uniforms:{...Yv(),tColor:{value:null}},vertexShader:qv,fragmentShader:Wv+hA}),this.compositeMat=new Ln({uniforms:{...Yv(),tSharp:{value:null},tBlur:{value:null}},vertexShader:qv,fragmentShader:Wv+dA}),this.fsQuad=new Ru(this.gatherMat)}setBoth(t,n){this.gatherMat.uniforms[t].value=n,this.compositeMat.uniforms[t].value=n}setParams(t,n,s){this.setBoth("aperture",t),this.setBoth("maxblur",n),this.setBoth("focalDepth",s)}setFocus(t){this.setBoth("focus",t)}setSize(t,n){this.depthRT.setSize(t,n),this.blurRT.setSize(Math.max(1,t>>1),Math.max(1,n>>1))}render(t,n,s){this.setBoth("nearClip",this.cameraRef.near),this.setBoth("farClip",this.cameraRef.far),t.getClearColor(this.clearColorTmp);const l=t.getClearAlpha(),c=t.autoClear;t.autoClear=!1,this.sceneRef.overrideMaterial=this.depthMaterial,t.setClearColor(16777215,1),t.setRenderTarget(this.depthRT),t.clear(),t.render(this.sceneRef,this.cameraRef),this.sceneRef.overrideMaterial=null,t.setClearColor(this.clearColorTmp,l),this.gatherMat.uniforms.tColor.value=s.texture,this.gatherMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.gatherMat,t.setRenderTarget(this.blurRT),this.fsQuad.render(t),this.compositeMat.uniforms.tSharp.value=s.texture,this.compositeMat.uniforms.tBlur.value=this.blurRT.texture,this.compositeMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.compositeMat,t.setRenderTarget(this.renderToScreen?null:n),this.fsQuad.render(t),t.autoClear=c}dispose(){this.depthMaterial.dispose(),this.depthRT.dispose(),this.blurRT.dispose(),this.gatherMat.dispose(),this.compositeMat.dispose(),this.fsQuad.dispose()}}const mA={AgX:$r,ACES:Mu,Neutral:bu},su=5.4,gA=72,Zv=new re(16777215),_A=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,vA=r=>1-Math.pow(1-r,3),xA={uniforms:{tDiffuse:{value:null},uAmount:{value:.08},uTime:{value:0}},vertexShader:`
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
  `};class yA{constructor(t){this.host=t;const n=t.clientWidth||window.innerWidth,s=t.clientHeight||window.innerHeight;this.renderer=new DT({antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(n,s),this.renderer.toneMapping=$r,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement),this.scene=new p1,this.scene.background=this.background,this.camera=new yi(38,n/s,.1,200);{const y=new j(...du.camera),E=new j(...du.target);y.sub(E).multiplyScalar(.56).add(E),this.camera.position.copy(y),this.defaultCamPos.copy(y)}const l=new p0(this.renderer),c=l.fromScene(new WT,.04).texture;this.scene.environment=c,l.dispose();const f=new hd(8377599,1.1);f.position.set(-4,2.5,-3);const d=new hd(16751317,.9);d.position.set(4.5,-1.5,-2.5);const m=new hd(16777215,.7);m.position.set(1.5,3,4),this.scene.add(f,d,m),this.surface=new fA;const p=uA(this.surface.texture);this.holoMaterial=p.material,this.holoUniforms=p.uniforms;const _=this.renderer.capabilities.getMaxAnisotropy();this.holoMaterial.roughnessMap&&(this.holoMaterial.roughnessMap.anisotropy=_),this.surface.texture.anisotropy=_,this.clothMesh=new Sn(void 0,this.holoMaterial),this.clothMesh.frustumCulled=!1,this.clothMesh.visible=!1,this.buildCloth(1),this.scene.add(this.clothMesh);const v=this.renderer.domElement;v.addEventListener("pointerdown",this.onPointerDown),v.addEventListener("pointermove",this.onPointerMove),v.addEventListener("pointerup",this.onPointerUp),v.addEventListener("pointercancel",this.onPointerUp),v.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onWindowBlur),this.controls=new LT(this.camera,v),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=1.6,this.controls.maxDistance=30,this.controls.target.set(...du.target),this.controls.update();const g=new zn(n,s,{samples:8,type:jn});this.composer=new QT(this.renderer,g),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer.addPass(new jT(this.scene,this.camera)),this.dofPass=new pA(this.scene,this.camera),this.dofPass.enabled=!1,this.composer.addPass(this.dofPass),this.bloomPass=new io(new Yt(n,s),.18,.85,1),this.composer.addPass(this.bloomPass),this.composer.addPass(new $T),this.grainPass=new O1(xA),this.composer.addPass(this.grainPass),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(t),this.renderer.setAnimationLoop(this.tick)}host;renderer;scene;camera;controls;composer;bloomPass;dofPass;grainPass;cavityAttr;sim;clothMesh;clothGeometry;holoUniforms;holoMaterial;surface;bumpSource=null;thumbCache=new WeakMap;perfProfile="High";clothSegments=gA;camRaf=0;gestureRaf=0;defaultCamPos=new j;currentPR=Math.min(window.devicePixelRatio,2);background=new re("#0b0c12");clock=new NM;elapsed=0;raycaster=new LM;pointerNdc=new Yt;dragPlane=new Ua;grabbing=!1;grabPointerId=null;draggingDecal=!1;decalGrabOffset={u:0,v:0};pickingFocus=!1;focusVertex=null;pickReleaseId=null;spaceHeld=!1;focusTmp=new j;editMode=!1;prevUseImage=!1;hoverCursor="default";resizeObserver;params=null;disposed=!1;onDecalSelect=null;onImagesChanged=null;clothAspect=1;buildCloth(t){this.clothAspect=t;const n=t>=1?su:su*t,s=t>=1?su/t:su,l=this.clothSegments,c=t>=1?l:Math.max(10,Math.round(l*t)),f=t>=1?Math.max(10,Math.round(l/t)):l;this.sim=new aA(n,s,c,f);const d=new yl(n,s,c,f),m=new Mi(this.sim.positions,3);m.setUsage(G_),d.setAttribute("position",m),this.cavityAttr=new Mi(new Float32Array(this.sim.count),1),this.cavityAttr.setUsage(G_),d.setAttribute("aCavity",this.cavityAttr),d.computeVertexNormals();const p=this.clothMesh.geometry;this.clothMesh.geometry=d,this.clothGeometry=d,p&&p.dispose(),this.holoUniforms.uClothSize.value.set(n,s),this.focusVertex=null,this.cancelInteraction()}cancelInteraction(){this.grabPointerId!==null&&this.renderer.domElement.hasPointerCapture(this.grabPointerId)&&this.renderer.domElement.releasePointerCapture(this.grabPointerId),this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls&&(this.controls.enabled=!0)}applyParams(t){this.params=t,t.performance!==this.perfProfile&&this.applyPerfProfile(t.performance);const n=this.holoMaterial;n.color.set(t.material.baseColor),n.roughness=t.material.roughness,n.metalness=t.material.metalness,n.clearcoat=t.material.clearcoat,n.clearcoatRoughness=t.material.coatRoughness,n.sheen=t.material.sheen,n.sheenColor.set(t.material.baseColor).lerp(Zv,.5),n.iridescence=0,n.normalScale.set(t.material.bump,t.material.bump),n.normalMap&&n.normalMap.repeat.set(t.material.bumpTiling,t.material.bumpTiling),this.scene.environmentIntensity=t.render.environment;const s=this.holoUniforms;s.uHoloIntensity.value=0,s.uSparkle.value=0,s.uSpecTint.value=0,s.uSaturation.value=0;const l=t.images??{opacity:1,cornerRadius:0,edit:!1,useImage:!1,scale:0,rotation:0};s.uSurfaceOpacity.value=l.opacity,s.uCornerRound.value=l.cornerRadius,this.background.set(t.render.background),this.renderer.toneMappingExposure=t.render.exposure;const c=mA[t.render.toneMapping]??$r;this.renderer.toneMapping!==c&&(this.renderer.toneMapping=c),this.bloomPass.strength=t.render.bloom,this.bloomPass.threshold=t.render.bloomThreshold,this.grainPass.uniforms.uAmount.value=t.render.noise,s.uCavityAmount.value=t.render.occlusion?t.render.occlusionStrength:0,this.dofPass.enabled=t.render.dof,this.dofPass.setParams(t.render.dofAperture*.01,t.render.dofBlur,t.render.dofRange*.5),this.editMode=l.edit,this.controls.enableZoom=!this.editMode,this.prevUseImage&&!l.useImage&&this.surface.clothImage&&this.removeClothImage(),this.prevUseImage=l.useImage;const f=this.surface.selected;f&&(f.scale!==l.scale||f.rotation!==l.rotation)&&(f.scale=l.scale,f.rotation=l.rotation,this.surface.redraw())}applyFabric(t){const n=this.holoMaterial.normalMap,s=oA(t);if(s.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.params){const l=this.params.material.bumpTiling;s.repeat.set(l,l)}this.holoMaterial.normalMap=s,this.holoMaterial.needsUpdate=!0,n&&n.dispose()}resetCloth(){this.sim.reset(),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals()}setColor(t){this.holoMaterial.color.set(t),this.holoMaterial.sheenColor.set(t).lerp(Zv,.5)}patternTex=null;setPattern(t){this.patternTex&&this.patternTex!==t&&this.patternTex.dispose(),this.patternTex=t,t?(t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=t,this.holoUniforms.uSurfaceOpacity.value=1):this.holoUniforms.uSurfaceMap.value=this.surface.texture}setSlideOffset(t){this.clothMesh.position.x=t}getSlideOffset(){return this.clothMesh.position.x}getRenderStats(){const t=this.renderer.info;return{calls:t.render.calls,triangles:t.render.triangles,geometries:t.memory.geometries,textures:t.memory.textures,programs:t.programs?.length??0,clothVerts:this.sim.count,segments:this.clothSegments,pixelRatio:this.currentPR}}animateCam(t,n){cancelAnimationFrame(this.camRaf),this.controls.enableDamping=!1;const s=performance.now(),l=c=>{const f=Math.min(1,(c-s)/n);t(f),this.controls.update(),f<1?this.camRaf=requestAnimationFrame(l):this.controls.enableDamping=!0};this.camRaf=requestAnimationFrame(l)}zoomTo(t,n=650){const s=this.controls.target,l=this.camera.position.clone(),c=s.clone().add(this.defaultCamPos.clone().sub(s).multiplyScalar(t));this.animateCam(f=>this.camera.position.lerpVectors(l,c,_A(f)),n)}spin(t=1500){const n=this.controls.target.clone(),s=this.camera.position.clone(),l=s.x-n.x,c=s.z-n.z;this.animateCam(f=>{const d=Math.sin(f*Math.PI)*.6,m=Math.sin(d),p=Math.cos(d);this.camera.position.set(n.x+l*p-c*m,s.y,n.z+l*m+c*p)},t)}demoStretch(){cancelAnimationFrame(this.gestureRaf);const t=this.sim,n=Math.floor(t.cols/2),l=Math.floor(t.rows/2)*t.cols+n,c=new j(t.positions[l*3],t.positions[l*3+1],t.positions[l*3+2]),f=Math.max(t.width,t.height)*.55;if(!t.startGrab(c,f))return;const d=this.camera.position.clone().sub(c).normalize().multiplyScalar(1.1);d.y-=.4;const m=performance.now(),p=520,_=360,v=g=>{const y=g-m;y<p?(t.moveGrab(c.clone().add(d.clone().multiplyScalar(vA(y/p)))),this.gestureRaf=requestAnimationFrame(v)):y<p+_?this.gestureRaf=requestAnimationFrame(v):t.endGrab()};this.gestureRaf=requestAnimationFrame(v)}poke(){this.sim.poke(1)}addDecal(t){const n=this.surface.addDecal(t);this.onDecalSelect?.(n.scale,n.rotation),this.onImagesChanged?.()}setClothImage(t){const n=t.naturalWidth||t.width||1,s=t.naturalHeight||t.height||1,l=Math.min(3,Math.max(1/3,n/s));this.surface.setClothImage(t),this.surface.setAspect(l)&&this.rebindSurfaceTexture(),this.buildCloth(l),this.onImagesChanged?.()}clearImages(){this.surface.clear(),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}removeClothImage(){this.surface.setClothImage(null),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}get hasClothImage(){return this.surface.clothImage!==null}reveal(){this.clothMesh.visible=!0}thumbnailOf(t){let n=this.thumbCache.get(t);if(n)return n;const s=t.naturalWidth||t.width||1,l=t.naturalHeight||t.height||1,c=96/Math.max(s,l),f=document.createElement("canvas");return f.width=Math.max(1,Math.round(s*c)),f.height=Math.max(1,Math.round(l*c)),f.getContext("2d").drawImage(t,0,0,f.width,f.height),n=f.toDataURL("image/png"),this.thumbCache.set(t,n),n}getClothThumbnail(){return this.surface.clothImage?this.thumbnailOf(this.surface.clothImage):null}getDecalThumbnails(){return this.surface.decals.map(t=>this.thumbnailOf(t.img))}removeDecal(t){const n=this.surface.decals[t];n&&(this.surface.decals.splice(t,1),this.surface.selected===n&&(this.surface.selected=null),this.surface.redraw(),this.onImagesChanged?.())}snapshotImages(){return{clothImage:this.surface.clothImage,decals:this.surface.decals.map(t=>({...t}))}}restoreImages(t){this.surface.clothImage=t.clothImage,this.surface.decals=t.decals.map(s=>({...s})),this.surface.selected=null;let n=1;if(t.clothImage){const s=t.clothImage.naturalWidth||t.clothImage.width||1,l=t.clothImage.naturalHeight||t.clothImage.height||1;n=Math.min(3,Math.max(1/3,s/l))}this.surface.setAspect(n)&&this.rebindSurfaceTexture(),n!==this.clothAspect&&this.buildCloth(n),this.onImagesChanged?.()}applyPerfProfile(t){this.perfProfile=t;const n=window.devicePixelRatio;this.currentPR=t==="Low"?1:t==="Medium"?Math.min(n,1.5):Math.min(n,2);const s=t==="Low"?0:t==="Medium"?4:8,l=t==="Low"?36:t==="Medium"?52:72,c=this.host.clientWidth||window.innerWidth,f=this.host.clientHeight||window.innerHeight;this.renderer.setPixelRatio(this.currentPR),this.renderer.setSize(c,f),this.composer.setPixelRatio(this.currentPR),this.composer.renderTarget1.samples=s,this.composer.renderTarget2.samples=s,this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer.setSize(c,f),l!==this.clothSegments&&(this.clothSegments=l,this.buildCloth(this.clothAspect))}setBumpMap(t){const n=this.holoMaterial.normalMap;let s=null;if(t){s=lA(t),s.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const l=this.params?.material.bumpTiling??3;s.repeat.set(l,l)}this.bumpSource=t,this.holoMaterial.normalMap=s,!!n!=!!s&&(this.holoMaterial.needsUpdate=!0),n&&n.dispose(),this.onImagesChanged?.()}get hasBumpMap(){return this.bumpSource!==null}getBumpThumbnail(){return this.bumpSource?this.thumbnailOf(this.bumpSource):null}rebindSurfaceTexture(){this.surface.texture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=this.surface.texture}exportPNG(t=!1){const n=this.host.clientWidth||window.innerWidth,s=this.host.clientHeight||window.innerHeight,l=this.currentPR,c=Math.min(4,Math.max(2,3200/Math.max(n,s)));t&&(this.scene.background=null,this.renderer.setClearColor(0,0)),this.renderer.setPixelRatio(c),this.composer.setPixelRatio(c),this.renderer.setSize(n,s),this.composer.setSize(n,s),this.composer.render();const f=this.renderer.domElement.toDataURL("image/png");t&&(this.scene.background=this.background,this.renderer.setClearColor(0,1)),this.renderer.setPixelRatio(l),this.composer.setPixelRatio(l),this.renderer.setSize(n,s),this.composer.setSize(n,s);const d=document.createElement("a");d.href=f;const m=t?"holocloth-nobg":"holocloth";d.download=`${m}-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,d.click()}updatePointer(t){const n=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1)}raycastCloth(){this.raycaster.setFromCamera(this.pointerNdc,this.camera),this.clothGeometry.computeBoundingSphere();const t=this.raycaster.intersectObject(this.clothMesh,!1);return t.length>0?t[0]:null}startPickFocus(){this.pickingFocus=!0,this.renderer.domElement.style.cursor="crosshair"}clearPickFocus(){this.focusVertex=null}onKeyDown=t=>{if(t.code!=="Space"||t.repeat)return;const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)||(t.preventDefault(),this.spaceHeld=!0,this.controls.mouseButtons.LEFT=Na.PAN,!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&(this.renderer.domElement.style.cursor="grab"))};onKeyUp=t=>{t.code==="Space"&&(this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Na.ROTATE)};onWindowBlur=()=>{this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Na.ROTATE};onPointerDown=t=>{if(t.button!==0||this.grabbing||this.draggingDecal)return;if(this.updatePointer(t),this.pickingFocus){this.pickingFocus=!1,this.renderer.domElement.style.cursor="default";const c=this.raycastCloth();if(c){const f=this.sim.positions;let d=0,m=1/0;for(let p=0;p<this.sim.count;p++){const _=f[p*3]-c.point.x,v=f[p*3+1]-c.point.y,g=f[p*3+2]-c.point.z,y=_*_+v*v+g*g;y<m&&(m=y,d=p)}this.focusVertex=d}this.pickReleaseId=t.pointerId,this.controls.enabled=!1;return}if(this.spaceHeld)return;const n=this.raycastCloth();if(!n)return;if(this.editMode){if(!n.uv)return;const c=this.surface.hitTest(n.uv.x,n.uv.y);if(!c)return;this.surface.selected=c,this.draggingDecal=!0,this.decalGrabOffset.u=c.u-n.uv.x,this.decalGrabOffset.v=c.v-n.uv.y,this.grabPointerId=t.pointerId,this.controls.enabled=!1,this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="move",this.onDecalSelect?.(c.scale,c.rotation);return}const s=this.params?.physics.grabRadius??.45;if(!this.sim.startGrab(n.point,s))return;this.grabbing=!0,this.grabPointerId=t.pointerId,this.controls.enabled=!1;const l=new j;this.camera.getWorldDirection(l),this.dragPlane.setFromNormalAndCoplanarPoint(l,n.point),this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="grabbing"};onPointerMove=t=>{if((this.grabbing||this.draggingDecal)&&t.pointerId!==this.grabPointerId)return;if(this.updatePointer(t),this.draggingDecal){const l=this.raycastCloth(),c=this.surface.selected;l?.uv&&c&&(c.u=l.uv.x+this.decalGrabOffset.u,c.v=l.uv.y+this.decalGrabOffset.v,this.surface.redraw());return}if(!this.grabbing)return;this.raycaster.setFromCamera(this.pointerNdc,this.camera);const s=new j;this.raycaster.ray.intersectPlane(this.dragPlane,s)&&this.sim.moveGrab(s)};onPointerUp=t=>{if(t.pointerId===this.pickReleaseId){this.pickReleaseId=null,this.controls.enabled=!0;return}!(this.grabbing||this.draggingDecal)||t.pointerId!==this.grabPointerId||(this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls.enabled=!0,this.renderer.domElement.hasPointerCapture(t.pointerId)&&this.renderer.domElement.releasePointerCapture(t.pointerId),this.renderer.domElement.style.cursor=this.hoverCursor)};onWheel=t=>{if(!this.editMode)return;const n=this.surface.selected;n&&(t.preventDefault(),t.stopImmediatePropagation(),n.scale=f1.clamp(n.scale*Math.exp(-t.deltaY*.0012),.02,2.5),this.surface.redraw(),this.onDecalSelect?.(n.scale,n.rotation))};onResize(){const t=this.host.clientWidth||window.innerWidth,n=this.host.clientHeight||window.innerHeight;t===0||n===0||(this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.composer.setSize(t,n))}tick=()=>{if(this.disposed)return;const t=this.clock.getDelta();if(this.elapsed+=t,this.grainPass.uniforms.uTime.value=this.elapsed%61.7,this.params&&(this.sim.step(t,this.params.physics),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals()),this.params?.render.occlusion&&(this.sim.computeCavity(this.clothGeometry.attributes.normal.array,this.cavityAttr.array),this.cavityAttr.needsUpdate=!0),this.params?.render.dof){let n;if(this.focusVertex!==null&&this.focusVertex<this.sim.count){const s=this.sim.positions,l=this.focusVertex*3;this.focusTmp.set(s[l],s[l+1],s[l+2]),n=this.camera.position.distanceTo(this.focusTmp)}else n=this.camera.position.distanceTo(this.controls.target);this.dofPass.setFocus(n)}if(!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&!this.spaceHeld&&this.perfProfile!=="Low"){const n=this.raycastCloth();let s="default";n&&(s=this.editMode?n.uv&&this.surface.hitTest(n.uv.x,n.uv.y)?"move":"default":"grab"),s!==this.hoverCursor&&(this.hoverCursor=s,this.renderer.domElement.style.cursor=s)}this.controls.update(),this.composer.render()};dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.controls.dispose(),this.dofPass.dispose(),this.composer.dispose(),this.clothGeometry.dispose(),this.holoMaterial.dispose(),this.surface.dispose(),this.scene.traverse(n=>{const s=n;s.geometry&&s.geometry!==this.clothGeometry&&s.geometry.dispose()}),this.renderer.dispose(),t.remove()}}const Li=["Nulu","Luon","Luxtreme","Everlux","Warpstreme"],Wn={Nulu:{label:"Nulu",blurb:"Buttery-soft, lightweight knit. Matte, next-to-nothing drape.",material:{finish:"Matte",baseColor:"#c9c4bf",roughness:.88,metalness:0,clearcoat:0,coatRoughness:.9,sheen:.28,bump:.6,bumpTiling:6},physics:{viscosity:.5,stiffness:.45,iterations:12,smoothing:.12,grabRadius:.3},weave:{type:"knit",threads:96,strength:1,seed:11}},Luon:{label:"Luon",blurb:"The original: cottony-soft, structured, medium-weight knit.",material:{finish:"Matte",baseColor:"#2c313a",roughness:.76,metalness:0,clearcoat:.05,coatRoughness:.75,sheen:.2,bump:.95,bumpTiling:5},physics:{viscosity:.42,stiffness:.7,iterations:12,smoothing:.07,grabRadius:.27},weave:{type:"knit",threads:72,strength:1.35,seed:22}},Luxtreme:{label:"Luxtreme",blurb:"Slick, cool-to-touch performance knit. Satin sheen, lively.",material:{finish:"Matte",baseColor:"#33435f",roughness:.58,metalness:0,clearcoat:.03,coatRoughness:.6,sheen:.38,bump:.3,bumpTiling:8},physics:{viscosity:.24,stiffness:.82,iterations:13,smoothing:.03,grabRadius:.27},weave:{type:"knit",threads:120,strength:.7,seed:33}},Everlux:{label:"Everlux",blurb:"Thicker double-knit. Springy shape retention, textured hand.",material:{finish:"Matte",baseColor:"#454851",roughness:.6,metalness:0,clearcoat:.1,coatRoughness:.6,sheen:.32,bump:1.15,bumpTiling:4},physics:{viscosity:.34,stiffness:.9,iterations:14,smoothing:.09,grabRadius:.27},weave:{type:"knit",threads:56,strength:1.6,seed:44}},Warpstreme:{label:"Warpstreme",blurb:"Finely woven, structured & wrinkle-resistant. Holds its shape.",material:{finish:"Matte",baseColor:"#21252c",roughness:.72,metalness:0,clearcoat:0,coatRoughness:.6,sheen:.2,bump:.5,bumpTiling:7},physics:{viscosity:.3,stiffness:1,iterations:14,smoothing:.15,grabRadius:.26},weave:{type:"woven",threads:110,strength:.9,seed:55}}},Kv="Nulu",Sd=["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it coats the fibers and kills sweat-wicking.","Hang or lay flat to dry; avoid the dryer to protect the stretch.","Keep away from Velcro, zippers and denim to avoid snags and pilling."],Bn={Nulu:{meaning:'"Naked" lu — the softest, lightest fabric lululemon makes. The "nu" is for nude / next-to-nothing.',feel:"Buttery-soft and weightless with a matte finish and gentle four-way stretch. No compression — it feels like a second skin.",bestFor:["Yoga","Pilates","Barre","Stretching","Lounging","Travel & errands"],notFor:"High-sweat or high-impact workouts — it offers no compression and can pill under friction.",care:["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it clogs the fibers.","Hang or lay flat to dry; never tumble dry.","Prone to pilling — keep away from Velcro, zippers and denim."],products:[{name:'Align High-Rise Pant 25"',price:"$98",url:"https://shop.lululemon.com/c/women-align-leggings/n1esuuzudsq"},{name:"Align Tank Top",price:"$68",url:"https://shop.lululemon.com/c/women-align-clothes/n14uwkzesuu"},{name:"Groove Nulu Flared Pant",price:"$128",url:"https://shop.lululemon.com/c/women-align-pants/n1esuuzqd1q"}],affinity:{activity:{yoga:3,run:-2,studio:0,everyday:1},sweat:{low:3,med:0,high:-2},feel:{soft:3,smooth:0,structured:-1,cushioned:0},care:{easy:-1,ok:2}}},Luon:{meaning:'The original lululemon fabric — the knit that launched the brand. Simply "lu" + "on".',feel:"Cottony-soft but more structured than Nulu: medium-weight, lightly holding, with a matte look.",bestFor:["Yoga","Barre","Dance","Low–medium impact","Layering","Casual"],notFor:"Running or spin — the cottony knit can pill under repeated friction.",care:Sd,products:[{name:"Wunder Under Luon High-Rise Tight",price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:"Classic Luon layering tops",price:"from $68",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:2,run:-1,studio:1,everyday:1},sweat:{low:2,med:1,high:-1},feel:{soft:2,smooth:0,structured:0,cushioned:1},care:{easy:0,ok:1}}},Luxtreme:{meaning:`"Luxe" + "extreme" — lululemon's first performance fabric, built for runners back in 2008.`,feel:"Slick and cool-to-touch, compressive and supportive with a subtle sheen. Sweat-wicking and quick-drying.",bestFor:["Running","HIIT","Cycling / spin","High-impact training"],notFor:"Gentle lounging if you dislike compression — it's a firmer, hold-you-in feel.",care:Sd,products:[{name:'Wunder Under Full-On Luxtreme Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:'Wunder Under Luxtreme Tight 28"',price:"$98",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:-1,run:3,studio:2,everyday:0},sweat:{low:-1,med:1,high:3},feel:{soft:0,smooth:3,structured:1,cushioned:0},care:{easy:1,ok:0}}},Everlux:{meaning:'"Ever" (endure) + "lux" — a 2017 studio fabric made for sweaty, mid-to-high-intensity workouts.',feel:"Fast-drying and cool against the skin, with a cushioned double-knit body and springy shape retention.",bestFor:["Studio & HIIT","Spin","Cardio classes","Hot workouts","Strength training"],notFor:"Nothing much — it's the most versatile; just heavier than Nulu for pure lounging.",care:Sd,products:[{name:'Wunder Train High-Rise Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:'Wunder Train Tight with Pockets 28"',price:"$128",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:"Wunder Train No Line High-Rise Tight",price:"$108",url:"https://shop.lululemon.com/c/women-everlux-leggings/n1n918zudsq"}],affinity:{activity:{yoga:0,run:2,studio:3,everyday:1},sweat:{low:0,med:3,high:2},feel:{soft:0,smooth:1,structured:0,cushioned:3},care:{easy:2,ok:0}}},Warpstreme:{meaning:'A finely warp-woven fabric (woven, not knit) — "warp" weaving + "streme" for stream / extreme.',feel:"Smooth, structured and wrinkle-resistant with a cool hand. Holds its shape from morning to night.",bestFor:["Travel","Commute","Work / office","Everyday","Versatile wear"],notFor:"Sweaty high-intensity training — it's built for structure and polish, not compression.",care:["Machine wash cold with like colors.","Skip fabric softener.","Hang dry — avoid high heat.","Wrinkle-resistant, so it bounces back without ironing."],products:[{name:"ABC Classic-Fit 5 Pocket Pant",price:"$138",url:"https://shop.lululemon.com/c/men-warpstreme-pants/n13u4nzu9dn"},{name:"ABC Trouser (formerly Commission)",price:"$138",url:"https://shop.lululemon.com/c/men-abc-trousers/n146jrzsddx"},{name:"ABC Jogger",price:"$128",url:"https://shop.lululemon.com/c/men-abc-pants/n1sddxzu9dn"}],affinity:{activity:{yoga:0,run:-1,studio:0,everyday:3},sweat:{low:2,med:1,high:-2},feel:{soft:0,smooth:1,structured:3,cushioned:0},care:{easy:3,ok:0}}}};function SA(r,t){return t.map(n=>{const s=Bn[n].affinity;let l=0;return r.activity&&(l+=s.activity[r.activity]),r.sweat&&(l+=s.sweat[r.sweat]),r.feel&&(l+=s.feel[r.feel]),r.care&&(l+=s.care[r.care]),{name:n,score:l}}).sort((n,s)=>s.score-n.score)}const _0={step:"start",answers:{},fabric:null,colorHex:null,colorName:null,askedColor:!1},Cu=[{name:"Black",hex:"#1a1a1a"},{name:"True Navy",hex:"#26324a"},{name:"Heathered Grey",hex:"#9a9793"},{name:"Dark Olive",hex:"#3f4531"},{name:"Red Merlot",hex:"#7d1f2b"},{name:"Pink Mist",hex:"#e3b0bf"},{name:"Blue Nile",hex:"#3b5d7a"},{name:"White Opal",hex:"#e8e5df"}],Qv={Nulu:"81% nylon, 19% Lycra elastane",Luon:"a nylon / Lycra blend (sometimes with polyester)",Luxtreme:"69% nylon, 31% Lycra elastane — the highest elastane of the bunch",Everlux:"a high-elastane nylon / Lycra double-knit",Warpstreme:"100% polyester, finely warp-woven"},he=r=>r[Math.floor(Math.random()*r.length)],Zt=(r,t)=>t.some(n=>r.includes(n)),Dn={activity:[{label:"Yoga & stretching",value:"yoga"},{label:"Running & cardio",value:"running"},{label:"Studio & HIIT",value:"studio"},{label:"Everyday & travel",value:"everyday"}],sweat:[{label:"Barely",value:"barely sweat"},{label:"A moderate amount",value:"moderate sweat"},{label:"A lot",value:"sweat a lot"}],feel:[{label:"Softest & barely-there",value:"softest feel"},{label:"Smooth & supportive",value:"smooth supportive"},{label:"Cushioned",value:"cushioned feel"},{label:"Structured",value:"structured feel"}],care:[{label:"Low-maintenance",value:"low maintenance"},{label:"Happy to hand-wash",value:"hand wash"}],explore:[{label:"Find my match",value:"find my match"},{label:"Tell me about the fabrics",value:"tell me about the fabrics"},{label:"Compare two",value:"compare fabrics"}],demos:[{label:"Show its stretch",value:"show its stretch"},{label:"See the drape",value:"see the drape"},{label:"Zoom in",value:"zoom in"}]},v0=()=>[...Cu.map(r=>({label:r.name,value:r.name})),{label:"Surprise me",value:"surprise me"}];function MA(r){return r.includes("nulu")||r.includes("align")?"Nulu":r.includes("luon")?"Luon":r.includes("luxtreme")?"Luxtreme":r.includes("everlux")||r.includes("wunder train")?"Everlux":r.includes("warpstreme")||r.includes("abc")?"Warpstreme":null}function bA(r){return Zt(r,["yoga","stretch","flow","pilates","barre","lounge","relax","restor"])?"yoga":Zt(r,["run","jog","sprint","cardio","marathon","5k","10k"])?"run":Zt(r,["studio","hiit","train","gym","spin","cycle","cycling","strength","lift","weight","class","crossfit","bootcamp","tennis","dance","workout"])?"studio":Zt(r,["everyday","travel","work","office","commute","casual","errand","walk","daily","hike","hiking","flight","plane","desk","lounging around"])?"everyday":null}function EA(r){return Zt(r,["barely","not much","don't sweat","dry workout","a little","light sweat","low sweat"])?"low":Zt(r,["moderate","medium","average","a bit"])?"med":Zt(r,["a lot","lots","heavy sweat","sweaty","drench","soak","buckets","sweat a lot","hot ","hot yoga","sauna"])?"high":null}function TA(r){return Zt(r,["softest","buttery","barely-there","barely there","naked","second skin","gentle","butter","soft feel"])?"soft":Zt(r,["smooth","slick","sleek","silky","compress","support","sculpt","hold-you","hold you","firm"])?"smooth":Zt(r,["cushion","thick","substantial","plush","cozy","hefty","more body"])?"cushioned":Zt(r,["structured","crisp","polished","put together","put-together","stiff","tailored","holds shape"])?"structured":null}function AA(r){return Zt(r,["low maintenance","low-maintenance","easy care","durable","wrinkle","no fuss","toss","throw it in","lazy"])?"easy":Zt(r,["hand wash","hand-wash","delicate","hang dry","baby it","careful","don't mind washing"])?"ok":null}function wA(r){const t=[[["black","noir"],"Black"],[["navy","dark blue"],"True Navy"],[["grey","gray","heather"],"Heathered Grey"],[["olive","green","army","khaki"],"Dark Olive"],[["red","merlot","wine","maroon","burgundy","berry"],"Red Merlot"],[["pink","rose","blush","mauve"],"Pink Mist"],[["blue","nile","cobalt","teal"],"Blue Nile"],[["white","cream","opal","ivory"],"White Opal"]];for(const[n,s]of t)if(Zt(r,n))return Cu.find(l=>l.name===s);return null}function RA(r){return Zt(r,["reset","re-drape","redrape","settle it","drop it","let it fall","fresh drape"])?"reset":Zt(r,["nudge","poke","wobble","jiggle","shake it","bounce"])?"nudge":Zt(r,["zoom in","closer","close up","close-up","get close","look closer"])?"closeup":Zt(r,["zoom out","back up","pull back","farther","further","see it all","zoom back","wider","whole thing"])?"zoomout":Zt(r,["spin","rotate","turn it","turn around","another angle","different angle"])?"spin":null}function jv(r){return Zt(r,["durab","stretch","elastic","recover","hold up","holds up","last","four-way","4-way","compression","compress","squat","support","pull it"])?"stretch":Zt(r,["soft","buttery","how does it feel","feel like","next to skin","against my skin","touch","plush","cozy"])?"soft":Zt(r,["drape","flow","how it moves","how does it move","movement","fall","swish","fluid","floaty"])?"drape":Zt(r,["sheen","shine","shiny","gloss","matte","luster","finish","how it looks","how does it look"])?"sheen":Zt(r,["weave","woven","knit","texture","construction","grain","stitch","mesh","up close"])?"weave":Zt(r,["breath","airflow","ventil","cool ","cooling","hot workout","overheat","wick","quick dry","quick-dry"])?"breath":Zt(r,["warm","warmth","cold","winter","chilly","heat retention"])?"warmth":Zt(r,["see-through","see through","sheer","squat proof","squat-proof","opaque","opacity","transparent"])?"opacity":Zt(r,["pill","pilling"])?"pill":Zt(r,["made of","material","composition","fabric content","nylon","polyester","lycra","spandex","elastane","what is it made"])?"material":Zt(r,["size","sizing","fit ","true to size","runs small","runs big","tight or","sizing up"])?"fit":Zt(r,["sustainab","recycled","eco","environment","planet"])?"sustain":Zt(r,["smell","odor","odour","stink","anti-odor","anti-odour"])?"odor":null}function CA(r){return!Zt(r,["most","best","softest","warmest","coolest","lightest","cheapest","priciest","stretchiest","which","top ","strongest"])&&!Zt(r,["won't pill","wont pill","no pill"])?null:Zt(r,["softest","most soft","most comfortable","comfiest"])?"softest":Zt(r,["warmest","warm","coziest","thickest","winter"])?"warmest":Zt(r,["coolest","cool-to-touch","cool to touch"])?"coolest":Zt(r,["breathable","most breathable","breathability"])?"breathable":Zt(r,["durable","most durable","longest","toughest","won't pill","wont pill","no pill","strongest","last longest"])?"durable":Zt(r,["supportive","most support","most compress","compressive","hold you in"])?"supportive":Zt(r,["stretchiest","most stretch","most flexible","stretchy"])?"stretchiest":Zt(r,["lightest","most lightweight","thinnest"])?"lightest":Zt(r,["versatile","do everything","all-rounder","all rounder","most versatile"])?"versatile":Zt(r,["cheapest","least expensive","most affordable","lowest price"])?"cheapest":Zt(r,["priciest","most expensive","highest price"])?"priciest":Zt(r,["best"])?"best":null}function Jv(r){const t=r.match(/\$(\d+)/);return t?parseInt(t[1],10):9999}function DA(r,t){const n=Bn[r];return[{text:`${t??he([`I'd put you in ${r}.`,`Here's your match: ${r}.`,`${r} is the one for you.`])} ${n.meaning}`},{text:`${n.feel} It's a favorite for ${n.bestFor.slice(0,3).join(", ").toLowerCase()} — I've loaded it onto the cloth, so drag it to feel how it moves.`},{text:he(["Want to see it in a color?","Shall I dye it? Just name a color.","Pick a color and I'll apply it live:"]),swatch:Wn[r].material.baseColor,chips:v0()}]}function $v(r,t){const n=Bn[r].products[0];return[{text:he([`${t} on ${r} — beautiful.`,`Love it — ${t} suits ${r}.`,`${t} it is.`])},{text:`Here's the piece I'd start with in ${r}:`,product:n},{text:he(["Want me to show you its stretch, drape, or how it feels?","Say the word and I'll stretch it, zoom in, or turn it in the light."]),chips:[...Dn.demos,{label:"Start over",value:"start over"}]}]}function UA(r){return r?{text:`Caring for ${r}: ${Bn[r].care.join(" ")}`}:{text:"Tell me which fabric and I'll give you its care routine — or I can find your match first.",chips:[...Dn.explore]}}function LA(){return{text:`Here are the five, in a nutshell:
${Li.map(t=>`• ${t} — ${Wn[t].blurb.toLowerCase()}`).join(`
`)}
Ask me about any of them, or tell me what you'll do in it and I'll match you.`,chips:[...Dn.activity]}}const Md=r=>[r.activity,r.sweat,r.feel,r.care].filter(Boolean).length;function t1(r){return r.activity?r.feel?r.sweat?{key:"care",msg:{text:he(["Last one — how do you like to care for your gear?","How much laundry fuss are you up for?"]),chips:[...Dn.care]}}:{key:"sweat",msg:{text:he(["How much do you sweat when you do it?","And how sweaty do you get?"]),chips:[...Dn.sweat]}}:{key:"feel",msg:{text:he(["What feel do you love against your skin?","How do you want it to feel?"]),chips:[...Dn.feel]}}:{key:"activity",msg:{text:he(["What will you mostly do in it?","What's it for — what will you be doing?"]),chips:[...Dn.activity]}}}function bd(r,t,n){const s=SA(r.answers,Li)[0].name;r.fabric=s,r.step="recommended",r.askedColor=!0,t.selectFabric=s,t.reply.push(...DA(s,n))}function e1(r,t){const n=t&&Wn[t].weave.type==="woven";switch(r){case"stretch":return{demo:["closeup","stretch"],text:t?`${he(["Watch it stretch and snap back.","I'll pull it so you can see the recovery."])} ${{Nulu:"Lovely give, but it's a soft knit — best for low-impact; it can pill under heavy friction.",Luon:"Reliable four-way stretch with more body than Nulu.",Luxtreme:"Compressive four-way stretch with quick recovery — it holds shape through hard training.",Everlux:"Springy recovery from the double-knit and high elastane — supportive rep after rep.",Warpstreme:"It's woven, so it gives but stays structured — it won't bag out."}[t]}`:"Good athletic fabric gives, then returns to shape — pick a fabric and I'll show you."};case"soft":return{demo:["closeup","nudge"],text:t?`${he(["Getting in close.","Here it is up close."])} ${{Nulu:"Nulu is the buttery, next-to-nothing one.",Luon:"Luon is cottony-soft with more structure.",Luxtreme:"Luxtreme is cool and slick rather than fuzzy.",Everlux:"Everlux is cushioned and substantial.",Warpstreme:"Warpstreme is smooth and crisp, not plush."}[t]}`:"Softest of all is Nulu — want to feel it?"};case"drape":return{demo:["zoomout","drape"],text:t?`${he(["Watch how it falls.","Here it is in motion."])} ${{Nulu:"Fluid and flowy — lightweight drape.",Luon:"A little more body as it moves.",Luxtreme:"Slick and lively, settles sleek.",Everlux:"Heavier drape with spring.",Warpstreme:"Structured — it keeps its shape."}[t]}`:"Every fabric falls differently — pick one and I'll show you."};case"sheen":return{demo:["spin"],text:t?`${he(["Turning it through the light.","Catching the light across it."])} ${{Nulu:"Matte and soft, barely any shine.",Luon:"Matte, cottony surface.",Luxtreme:"A subtle performance sheen.",Everlux:"Mostly matte, dry finish.",Warpstreme:"Matte with a fine woven glint."}[t]}`:"Luxtreme has the most sheen; Nulu the least."};case"weave":return{demo:["closeup"],text:t?`${he(["Here's the construction up close.","Zooming into the surface."])} ${n?`See the tight woven grid — that's what makes ${t} structured and wrinkle-resistant.`:`You can see the knit loops — that interlock gives ${t} its stretch and softness.`}`:"Four of the five are knits; Warpstreme is woven. Want to see one up close?"};case"breath":return{demo:["spin"],text:t?`On breathability: ${{Nulu:"Nulu is light and airy but has no compression — great for gentle heat, less so for heavy sweat.",Luon:"Luon breathes reasonably for low-medium efforts.",Luxtreme:"Luxtreme is sweat-wicking, breathable and quick-drying — built for working hard.",Everlux:"Everlux was made for sweaty studio sessions — it wicks and dries fast while staying cool.",Warpstreme:"Warpstreme is a woven travel fabric — breathable and structured, though not a high-sweat performer."}[t]}`:"For heavy sweat, Luxtreme and Everlux breathe and wick best. Want details on one?"};case"warmth":return{text:t?`On warmth: ${{Nulu:"Nulu is the lightest and coolest — not a warm layer.",Luon:"Luon has a little more body but is still light.",Luxtreme:"Luxtreme is cool-to-touch — it runs cool, not warm.",Everlux:"Everlux is the thickest, so it holds a bit more warmth.",Warpstreme:"Warpstreme is structured and mid-weight — fine for cooler-weather everyday wear."}[t]}`:"Everlux is the warmest (thickest); Nulu the coolest and lightest."};case"opacity":return{demo:["closeup","stretch"],text:t?`On coverage: ${{Nulu:"Nulu is soft and non-compressive, so in very light colors it can go a touch sheer when stretched — dark colors are safest.",Luon:"Luon is medium-weight and generally opaque.",Luxtreme:"Luxtreme is compressive and reliably squat-proof.",Everlux:"Everlux is thick and fully opaque — very squat-proof.",Warpstreme:"Warpstreme is a woven — fully opaque."}[t]}`:"Everlux and Luxtreme are the most squat-proof; Nulu can be sheer in pale colors."};case"pill":return{text:t?`On pilling: ${{Nulu:"Nulu is the softest but most prone to pilling — keep it away from Velcro and rough surfaces.",Luon:"Luon can pill under heavy friction like running or spin.",Luxtreme:"Luxtreme is highly friction-resistant and won't pill.",Everlux:"Everlux is durable and resists pilling well.",Warpstreme:"Warpstreme is woven and very resistant to pilling."}[t]}`:"Luxtreme and Warpstreme resist pilling best; Nulu pills most easily."};case"material":return{text:t?`${t} is ${Qv[t]}. ${Bn[t].feel}`:`Composition varies: ${Li.map(s=>`${s} is ${Qv[s]}`).join("; ")}.`};case"fit":return{text:t?`On fit: ${{Nulu:"Nulu is a relaxed, second-skin feel with no compression.",Luon:"Luon is a supportive-but-comfortable everyday fit.",Luxtreme:"Luxtreme is snug and compressive — hold-you-in.",Everlux:"Everlux is supportive with a substantial, sculpting fit.",Warpstreme:"Warpstreme is a structured, tailored fit."}[t]} For exact sizing, lululemon.com or a store is your best bet.`:"Fit depends on the fabric — compressive ones like Luxtreme run snug, Nulu is relaxed. For sizing, check lululemon.com."};case"sustain":return{text:"I'm focused on how the fabrics feel and perform — for lululemon's materials and sustainability details, their site is the source of truth. I can tell you what each fabric is made of, though — just ask."};case"odor":return{text:t?`Most of these are synthetic performance fabrics, so wash them promptly and skip fabric softener (it traps odor). ${t==="Nulu"?"Nulu especially likes a gentle, prompt wash.":""}`:"Wash promptly and skip fabric softener to keep them fresh — softener coats the fibers and traps smell."}}}function NA(r,t,n){const s=(l,c,f)=>{t.fabric=l,t.step="open",n.selectFabric=l,f&&(n.demo=f),n.reply.push({text:c},{text:he(["Want to see it in a color, or shall I show it off?","I can dye it or demonstrate it — your call."]),swatch:Wn[l].material.baseColor,chips:[...Dn.demos,{label:"See colors",value:"see colors"}]})};switch(r){case"softest":return s("Nulu","Softest by a mile is Nulu — buttery and barely-there. Here it is.",["closeup","nudge"]);case"warmest":return s("Everlux","The warmest is Everlux — it's the thickest, a cushioned double-knit that holds a little heat.",["closeup"]);case"coolest":return s("Luxtreme","Coolest-to-touch is Luxtreme — slick and quick-drying, it runs cool.",["spin"]);case"breathable":return s("Luxtreme","Most breathable for hard efforts is Luxtreme — sweat-wicking and quick-drying (Everlux is a close second for studio heat).",["spin"]);case"durable":return s("Warpstreme","Most durable is Warpstreme — a tightly woven fabric that holds its shape and resists pilling. Luxtreme is the toughest of the knits.",["closeup","stretch"]);case"supportive":return s("Luxtreme","Most supportive is Luxtreme — compressive, hold-you-in, and quick to recover.",["closeup","stretch"]);case"stretchiest":return s("Luxtreme","Stretchiest is Luxtreme — it has the highest elastane, so it's the most flexible.",["closeup","stretch"]);case"lightest":return s("Nulu","Lightest is Nulu — a next-to-nothing feel.",["closeup"]);case"versatile":return s("Everlux","Most versatile is Everlux — comfy enough for low-impact, tough enough for hard training.",["drape"]);case"cheapest":{let l=Li[0],c=99999;for(const f of Li){const d=Jv(Bn[f].products[0].price);d<c&&(c=d,l=f)}t.fabric=l,n.selectFabric=l,t.step="open",n.reply.push({text:`The most affordable starting point is ${l}.`},{text:"Here's the piece:",product:Bn[l].products[0]});return}case"priciest":{let l=Li[0],c=-1;for(const f of Li){const d=Jv(Bn[f].products[0].price);d>c&&(c=d,l=f)}t.fabric=l,n.selectFabric=l,t.step="open",n.reply.push({text:`The most premium of these is ${l}.`},{text:"Here's the piece:",product:Bn[l].products[0]});return}default:n.reply.push({text:he([`"Best" really depends on what you're doing — what's the plan?`,"They're each best at something — what will you be doing in it?"]),chips:[...Dn.activity]}),t.step="guiding";return}}function PA(r,t){const n=Li.filter(f=>r.includes(f.toLowerCase())),[s,l]=n.length>=2?[n[0],n[1]]:[t.fabric??"Nulu",n[0]&&n[0]!==t.fabric?n[0]:"Luxtreme"],c=f=>`${f}: ${Wn[f].blurb.toLowerCase()} Best for ${Bn[f].bestFor.slice(0,2).join(" & ").toLowerCase()}.`;return{text:`${s} vs ${l} —
${c(s)}
${c(l)}
Want me to load either one so you can feel it?`}}function x0(){return[{text:he(["Hi — I'm your Fabric Lab expert. Ask me anything about lululemon's fabrics and I'll show you on the cloth: how they feel, stretch, drape and hold up.","Welcome — I know these fabrics inside out. Ask me anything, and I'll demonstrate right on the cloth. What can I help you figure out?"])},{text:"You can tell me what you'll be doing and I'll find your match — or just ask a question.",chips:[...Dn.activity]}]}function OA(r,t){const n={...r,answers:{...r.answers}},s=t.toLowerCase().trim(),l={ctx:n,reply:[]};if(Zt(s,["start over","restart","reset chat","begin again","start again"]))return l.ctx={..._0},l.reply=[{text:he(["Fresh start — let's go.","Clean slate."])},...x0()],l;if(Zt(s,["thank","thanks","ty ","appreciate","cheers"]))return l.reply=[{text:he(["Anytime — happy moving.","My pleasure.","You got it."])}],l;if(s.length<=6&&Zt(s,["hi","hey","hello","yo","sup","hola"]))return l.reply=[{text:he(["Hey! Ask me anything about the fabrics, or tell me what you'll be doing in it.","Hi there — what are you shopping for?"]),chips:[...Dn.explore]}],l;if(Zt(s,["help","what can you","how does this work","what do you do","options"]))return l.reply=[{text:"I can find your ideal fabric, explain what each one means, how it feels, stretches, drapes and holds up, compare them, recolor the cloth, and point you to the right product. I'll show you on the fabric as we go. What are you after?",chips:[...Dn.explore]}],l;const c=bA(s),f=EA(s),d=TA(s),m=AA(s);c&&(n.answers.activity=c),f&&(n.answers.sweat=f),d&&(n.answers.feel=d),m&&(n.answers.care=m);const p=!!(c||f||d||m),_=RA(s);if(_)return l.demo=[_],l.reply=[{text:{reset:he(["Resetting to a clean drape.","Dropped it fresh."]),nudge:he(["Giving it a nudge.","There it goes."]),closeup:he(["Moving in close.","Here's a closer look."]),zoomout:he(["Pulling back for the full piece.","Zooming out."]),spin:he(["Turning it through the light.","Sweeping it round."])}[_]}],l;const v=Li.filter(R=>s.includes(R.toLowerCase())).length>=2;if(Zt(s,["compare","difference","versus"," vs "," vs","vs."])||v)return l.reply=[PA(s,n)],l;const y=MA(s),E=jv(s);if(y){if(n.fabric=y,n.step="open",l.selectFabric=y,E){const R=e1(E,y);R.demo&&(l.demo=R.demo),l.reply=[{text:`${y} — ${Bn[y].meaning}`},{text:R.text}]}else l.reply=[{text:`${y} — ${Bn[y].meaning}`},{text:`${Bn[y].feel} Best for ${Bn[y].bestFor.slice(0,3).join(", ").toLowerCase()}. Drag it to feel the drape.`},{text:"Want to see it in a color, or have me show its stretch or drape?",swatch:Wn[y].material.baseColor,chips:[...Dn.demos,{label:"See colors",value:"see colors"}]}];return l}if(Zt(s,["see color","see colors","show color","colours","what colors","color options"]))return l.reply=[{text:n.fabric?`Here are colors for ${n.fabric} — pick one:`:"Pick a color and I'll apply it:",swatch:n.fabric?Wn[n.fabric].material.baseColor:void 0,chips:v0()}],n.step=n.fabric?"recommended":n.step,l;const C=wA(s);if(C&&n.fabric)return n.colorHex=C.hex,n.colorName=C.name,l.setColor=C.hex,!n.colorName||n.step,l.reply=$v(n.fabric,C.name),n.step="open",l;if(Zt(s,["surprise","random color","you pick","any color"])&&n.fabric){const R=he(Cu);return n.colorHex=R.hex,n.colorName=R.name,l.setColor=R.hex,l.reply=[{text:`Let's go with ${R.name}.`},...$v(n.fabric,R.name).slice(1)],n.step="open",l}const M=CA(s);if(M)return NA(M,n,l),l;const S=jv(s);if(S){const R=e1(S,n.fabric);return R.demo&&(l.demo=R.demo),l.reply=[{text:R.text}],(n.step==="open"||n.step==="recommended")&&l.reply.push({text:"Anything else you'd like to see?",chips:[...Dn.demos]}),l}if(Zt(s,["wash","care","clean it","dry it","shrink","launder","machine wash"]))return l.reply=[UA(n.fabric)],l;if(Zt(s,["what is","what does","mean","why called","what's a","tell me about"])&&(y||n.fabric)){const R=y??n.fabric;return l.reply=[{text:`${R} — ${Bn[R].meaning}`},{text:Bn[R].feel}],l}if(Zt(s,["price","cost","how much","buy","shop","purchase","link","where can i"]))return n.fabric?l.reply=[{text:`Here's the piece I'd recommend in ${n.fabric}:`,product:Bn[n.fabric].products[0]}]:l.reply=[{text:"Let's land on a fabric first — what will you be doing in it?",chips:[...Dn.activity]}],l;if(Zt(s,["list","the fabrics","all the fabric","what are the","options","overview","which fabrics"]))return l.reply=[LA()],l;const z=Zt(s,["recommend","suggest","what should i","help me choose","help me pick","which one","what do you recommend","i need","looking for","find my match","match me","pick for me"]);if(z&&Md(n.answers)>=1)return bd(n,l,he(["Based on that, ","Got it — "])),l;if(Md(n.answers)>=2)return bd(n,l),l;if(z){const R=t1(n.answers);return l.reply=[{text:he(["Happy to — quick question first.","Let's find it — one thing first."])},R.msg],n.step="guiding",l}if(p){const R=c?IA(c):d?BA(d):f?FA(f):zA(m);return n.step="guiding",Md(n.answers)>=2?(l.reply=[{text:R}],bd(n,l),l):(l.reply=[{text:R},t1(n.answers).msg],l)}if(Zt(s,["return","refund","ship","delivery","order","track","store near","coupon","discount","sale"]))return l.reply=[{text:"That's one for lululemon.com or a store — I'm the fabric side of things. But I can tell you which fabric fits your workout and how it feels. Want to start there?",chips:[...Dn.explore]}],l;if(Zt(s,["yes","yeah","yep","sure","ok","okay","please do","go for it"])&&n.fabric&&n.step!=="open")return l.reply=[{text:`Here are colors for ${n.fabric}:`,swatch:Wn[n.fabric].material.baseColor,chips:v0()}],l;const B=n.fabric;return l.reply=[{text:he([B?`We're looking at ${B} right now — I can show its stretch, drape or feel, dye it a new color, or compare it with another. What sounds good?`:"I'm your fabric expert — I can find your match, explain any fabric, show how it feels and moves, and point you to the right product. Where should we start?",B?`Ask me how ${B} feels, how it holds up, or what it's made of — or say a color and I'll dye it. What are you curious about?`:"Tell me what you'll be doing in it and I'll match you — or ask about any fabric by name.","Happy to dig in — I know how each fabric feels, stretches, drapes and lasts, and which suits which workout. What would help most?"]),chips:B?[...Dn.demos,{label:"Compare",value:"compare fabrics"}]:[...Dn.explore]}],l}function IA(r){return{yoga:he(["Yoga — soft and unrestrictive is the goal.","Flow work rewards a soft, stretchy fabric."]),run:he(["A runner — lightweight and sweat-wicking matter most.","Running: breathability and stay-put support."]),studio:he(["Studio sweat — versatile and quick-drying wins.","HIIT and classes ask for grip, wick and recovery."]),everyday:he(["Everyday and travel — comfort that looks pulled-together.","All-day wear — structure and easy care count."])}[r]}function FA(r){return{low:he(["Cool and dry — the softer fabrics open up.","Barely a bead, noted."]),med:he(["A moderate glow — lots of options.","Middle of the road, got it."]),high:he(["A proper sweat — we'll lean into wicking, quick-dry fabrics.","You run hot — good to know."])}[r]}function BA(r){return{soft:he(["Buttery and barely-there — my favorite.","Second-skin soft, noted."]),smooth:he(["Smooth and supported — got it.","Sleek and compressive."]),cushioned:he(["Something with body and cushion.","A bit more heft, noted."]),structured:he(["Structured and polished.","Crisp and put-together, love it."])}[r]}function zA(r){return{easy:he(["And low-fuss laundry — durability it is.","Toss-and-go care, understood."]),ok:he(["Happy to hand-wash — keeps the delicate ones in play.","A little TLC is fine, noted."])}[r]}const HA={background:"#f5f5f5",exposure:.82,environment:1.05,bloom:0,bloomThreshold:1.4,noise:.04,toneMapping:"Neutral",occlusion:!0,occlusionStrength:1,dof:!1,dofAperture:40,dofBlur:.04,dofRange:.3};function Ed(r,t){const n=Wn[r];return{performance:"High",physics:{...n.physics},material:{fabric:r,...n.material,baseColor:t??n.material.baseColor},images:{edit:!1,useImage:!1,scale:.35,rotation:0,opacity:1,cornerRadius:0},render:{...HA}}}const n1=8.5,GA=300,VA=r=>r*r*r,kA=r=>1-Math.pow(1-r,3);function XA(){const r=xn.useRef(null),t=xn.useRef(null),[n,s]=xn.useState(Kv),[l,c]=xn.useState(null),[f,d]=xn.useState(null),[m,p]=xn.useState(!0),[_,v]=xn.useState([]),[g,y]=xn.useState(""),E=xn.useRef({..._0}),C=xn.useRef(0),M=xn.useRef(null);xn.useEffect(()=>{if(!r.current)return;const N=new yA(r.current);return t.current=N,N.onDecalSelect=()=>{},N.onImagesChanged=()=>{},N.setSlideOffset(0),N.applyParams(Ed(n)),N.applyFabric(Wn[n].weave),N.reveal(),x0().forEach((k,lt)=>setTimeout(()=>O({role:"bot",...k}),250*lt+300)),()=>{N.dispose(),t.current=null}},[]);const S=xn.useRef(!0),z=xn.useRef(Kv),B=xn.useRef(0),R=xn.useRef(null);xn.useEffect(()=>{const N=t.current;if(!N)return;const k=z.current;if(z.current=n,S.current){S.current=!1,N.setSlideOffset(0),N.applyParams(Ed(n)),N.applyFabric(Wn[n].weave);return}if(k===n)return;c(null),R.current?.(),R.current=null;const ut=Li.indexOf(n)>Li.indexOf(k)?-n1:n1,K=-ut,I=(H,$,ht,bt)=>{const U=performance.now();let Z=0;const yt=Et=>{const Lt=Math.min(1,(Et-U)/GA),at=H+($-H)*ht(Lt);B.current=at,t.current?.setSlideOffset(at),Lt<1?Z=requestAnimationFrame(yt):bt?.()};Z=requestAnimationFrame(yt),R.current=()=>cancelAnimationFrame(Z)};return I(B.current,ut,VA,()=>{N.applyParams(Ed(n)),N.applyFabric(Wn[n].weave),N.resetCloth(),B.current=K,N.setSlideOffset(K),I(K,0,kA,()=>{R.current=null})}),()=>{R.current?.()}},[n]),xn.useEffect(()=>{l!=null&&t.current?.setColor(l)},[l]),xn.useEffect(()=>{M.current?.scrollTo({top:M.current.scrollHeight,behavior:"smooth"})},[_]),xn.useEffect(()=>{let N=0,k=0,lt=performance.now(),ut=0;const K=H=>{if(k++,ut+=H-lt,lt=H,ut>=500){const $=performance.memory,ht=t.current?.getRenderStats();d({fps:Math.round(k*1e3/ut),frameMs:+(ut/k).toFixed(1),heapUsed:$?Math.round($.usedJSHeapSize/1048576):null,heapLimit:$?Math.round($.jsHeapSizeLimit/1048576):null,calls:ht?.calls??0,tris:ht?.triangles??0,geometries:ht?.geometries??0,textures:ht?.textures??0,verts:ht?.clothVerts??0,segments:ht?.segments??0,pr:ht?.pixelRatio??1}),k=0,ut=0}N=requestAnimationFrame(K)};N=requestAnimationFrame(K);const I=H=>{const $=H.target;$&&($.tagName==="INPUT"||$.tagName==="TEXTAREA")||H.key==="`"&&p(ht=>!ht)};return window.addEventListener("keydown",I),()=>{cancelAnimationFrame(N),window.removeEventListener("keydown",I)}},[]);const O=N=>v(k=>[...k,{id:C.current++,...N}]),L=N=>{const k=t.current;k&&N.forEach(lt=>{lt==="reset"?k.resetCloth():lt==="nudge"?k.poke():lt==="stretch"?k.demoStretch():lt==="closeup"?k.zoomTo(.6):lt==="zoomout"?k.zoomTo(1.12):lt==="spin"?k.spin():lt==="drape"&&(k.resetCloth(),window.setTimeout(()=>t.current?.poke(),140))})},F=(N,k)=>{const lt=N.trim();if(!lt)return;O({role:"user",text:k??lt});const ut=OA(E.current,lt);E.current=ut.ctx,ut.selectFabric&&s(ut.selectFabric),Object.prototype.hasOwnProperty.call(ut,"setColor")&&c(ut.setColor??null),ut.demo&&L(ut.demo),ut.reply.forEach((K,I)=>setTimeout(()=>O({role:"bot",...K}),260*I+220)),y("")},T=()=>{E.current={..._0},v([]),x0().forEach((N,k)=>setTimeout(()=>O({role:"bot",...N}),200*k+150))},P=_[_.length-1],Y=N=>Cu.find(k=>k.name===N)?.hex;return Qt.jsxs(Qt.Fragment,{children:[Qt.jsx("div",{id:"canvas-host",ref:r}),Qt.jsxs("div",{className:"ui",children:[Qt.jsx("div",{className:"topbar",children:Qt.jsxs("div",{className:"brand",children:[Qt.jsx("span",{className:"k",children:"lululemon"}),Qt.jsx("span",{className:"t",children:"Fabric Lab"})]})}),Qt.jsxs("div",{className:"perf-wrap",children:[Qt.jsx("button",{className:"perf-toggle",onClick:()=>p(N=>!N),children:m?"× metrics":"metrics"}),m&&f&&Qt.jsxs("div",{className:"perf",children:[Qt.jsxs("div",{className:"prow",children:[Qt.jsx("span",{children:"fps"}),Qt.jsx("b",{style:{color:f.fps>=50?"#1f9d55":f.fps>=30?"#b8860b":"#d1202f"},children:f.fps})]}),Qt.jsxs("div",{className:"prow",children:[Qt.jsx("span",{children:"frame"}),Qt.jsxs("b",{children:[f.frameMs," ms"]})]}),Qt.jsxs("div",{className:"prow",children:[Qt.jsx("span",{children:"js heap"}),Qt.jsx("b",{children:f.heapUsed!=null?`${f.heapUsed} / ${f.heapLimit} MB`:"n/a*"})]}),Qt.jsxs("div",{className:"prow",children:[Qt.jsx("span",{children:"draw calls"}),Qt.jsx("b",{children:f.calls})]}),Qt.jsxs("div",{className:"prow",children:[Qt.jsx("span",{children:"triangles"}),Qt.jsxs("b",{children:[(f.tris/1e3).toFixed(0),"k"]})]}),Qt.jsxs("div",{className:"prow",children:[Qt.jsx("span",{children:"geometries"}),Qt.jsx("b",{children:f.geometries})]}),Qt.jsxs("div",{className:"prow",children:[Qt.jsx("span",{children:"textures"}),Qt.jsx("b",{children:f.textures})]}),Qt.jsxs("div",{className:"prow",children:[Qt.jsx("span",{children:"cloth verts"}),Qt.jsxs("b",{children:[f.verts.toLocaleString()," · ",f.segments,"²"]})]}),Qt.jsxs("div",{className:"prow",children:[Qt.jsx("span",{children:"pixel ratio"}),Qt.jsxs("b",{children:[f.pr,"×"]})]}),f.heapUsed==null&&Qt.jsx("div",{className:"pnote",children:"*JS heap is Chrome-only"})]})]}),Qt.jsxs("div",{className:"convo",children:[Qt.jsx("div",{className:"stream",ref:M,children:_.slice(-8).map(N=>Qt.jsxs("div",{className:"msg "+N.role,children:[Qt.jsx("span",{children:N.text}),N.product&&Qt.jsxs("a",{className:"prodcard",href:N.product.url,target:"_blank",rel:"noreferrer",children:[Qt.jsx("span",{className:"pn",children:N.product.name}),Qt.jsxs("span",{className:"pp",children:[N.product.price," →"]})]})]},N.id))}),P?.chips&&P.role==="bot"&&Qt.jsx("div",{className:"chips",children:P.chips.map(N=>Qt.jsxs("button",{className:"chip2",onClick:()=>F(N.value,N.label),children:[Y(N.value)&&Qt.jsx("span",{className:"cdot",style:{background:Y(N.value)}}),N.label]},N.value))}),Qt.jsxs("form",{className:"ask",onSubmit:N=>{N.preventDefault(),F(g)},children:[Qt.jsx("input",{value:g,onChange:N=>y(N.target.value),placeholder:"Say anything…","aria-label":"Message the Fabric Lab guide"}),Qt.jsx("button",{className:"askbtn",type:"submit","aria-label":"Send",children:"→"})]}),Qt.jsx("button",{className:"restart",onClick:T,children:"Start over"})]}),Qt.jsx("div",{className:"rail",children:Li.map(N=>Qt.jsxs("button",{className:N===n?"sel":"",onClick:()=>F(Wn[N].label,Wn[N].label),children:[Qt.jsx("span",{className:"dot",style:{background:Wn[N].material.baseColor}}),Wn[N].label]},N))})]})]})}Ky.createRoot(document.getElementById("root")).render(Qt.jsx(XA,{}));
