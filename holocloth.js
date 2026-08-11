(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var ad={exports:{}},hl={};var r1;function JM(){if(r1)return hl;r1=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return hl.Fragment=t,hl.jsx=n,hl.jsxs=n,hl}var o1;function tS(){return o1||(o1=1,ad.exports=JM()),ad.exports}var Tt=tS(),sd={exports:{}},fl={},rd={exports:{}},od={};var l1;function eS(){return l1||(l1=1,(function(s){function t(z,H){var J=z.length;z.push(H);t:for(;0<J;){var ft=J-1>>>1,St=z[ft];if(0<o(St,H))z[ft]=H,z[J]=St,J=ft;else break t}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var H=z[0],J=z.pop();if(J!==H){z[0]=J;t:for(var ft=0,St=z.length,F=St>>>1;ft<F;){var K=2*(ft+1)-1,_t=z[K],Et=K+1,wt=z[Et];if(0>o(_t,J))Et<St&&0>o(wt,_t)?(z[ft]=wt,z[Et]=J,ft=Et):(z[ft]=_t,z[K]=J,ft=K);else if(Et<St&&0>o(wt,J))z[ft]=wt,z[Et]=J,ft=Et;else break t}}return H}function o(z,H){var J=z.sortIndex-H.sortIndex;return J!==0?J:z.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var d=[],p=[],g=1,v=null,_=3,x=!1,b=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var H=n(p);H!==null;){if(H.callback===null)a(p);else if(H.startTime<=z)a(p),H.sortIndex=H.expirationTime,t(d,H);else break;H=n(p)}}function I(z){if(A=!1,w(z),!b)if(n(d)!==null)b=!0,U||(U=!0,Z());else{var H=n(p);H!==null&&j(I,H.startTime-z)}}var U=!1,B=-1,T=5,O=-1;function W(){return M?!0:!(s.unstable_now()-O<T)}function V(){if(M=!1,U){var z=s.unstable_now();O=z;var H=!0;try{t:{b=!1,A&&(A=!1,D(B),B=-1),x=!0;var J=_;try{e:{for(w(z),v=n(d);v!==null&&!(v.expirationTime>z&&W());){var ft=v.callback;if(typeof ft=="function"){v.callback=null,_=v.priorityLevel;var St=ft(v.expirationTime<=z);if(z=s.unstable_now(),typeof St=="function"){v.callback=St,w(z),H=!0;break e}v===n(d)&&a(d),w(z)}else a(d);v=n(d)}if(v!==null)H=!0;else{var F=n(p);F!==null&&j(I,F.startTime-z),H=!1}}break t}finally{v=null,_=J,x=!1}H=void 0}}finally{H?Z():U=!1}}}var Z;if(typeof L=="function")Z=function(){L(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,ht=ut.port2;ut.port1.onmessage=V,Z=function(){ht.postMessage(null)}}else Z=function(){y(V,0)};function j(z,H){B=y(function(){z(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(z){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var J=_;_=H;try{return z()}finally{_=J}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=_;_=z;try{return H()}finally{_=J}},s.unstable_scheduleCallback=function(z,H,J){var ft=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ft+J:ft):J=ft,z){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=J+St,z={id:g++,callback:H,priorityLevel:z,startTime:J,expirationTime:St,sortIndex:-1},J>ft?(z.sortIndex=J,t(p,z),n(d)===null&&z===n(p)&&(A?(D(B),B=-1):A=!0,j(I,J-ft))):(z.sortIndex=St,t(d,z),b||x||(b=!0,U||(U=!0,Z()))),z},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(z){var H=_;return function(){var J=_;_=H;try{return z.apply(this,arguments)}finally{_=J}}}})(od)),od}var c1;function nS(){return c1||(c1=1,rd.exports=eS()),rd.exports}var ld={exports:{}},fe={};var u1;function iS(){if(u1)return fe;u1=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function y(F,K,_t){this.props=F,this.context=K,this.refs=M,this.updater=_t||b}y.prototype.isReactComponent={},y.prototype.setState=function(F,K){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,K,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function D(){}D.prototype=y.prototype;function L(F,K,_t){this.props=F,this.context=K,this.refs=M,this.updater=_t||b}var w=L.prototype=new D;w.constructor=L,A(w,y.prototype),w.isPureReactComponent=!0;var I=Array.isArray;function U(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(F,K,_t){var Et=_t.ref;return{$$typeof:s,type:F,key:K,ref:Et!==void 0?Et:null,props:_t}}function W(F,K){return O(F.type,K,F.props)}function V(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function Z(F){var K={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(_t){return K[_t]})}var ut=/\/+/g;function ht(F,K){return typeof F=="object"&&F!==null&&F.key!=null?Z(""+F.key):K.toString(36)}function j(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(U,U):(F.status="pending",F.then(function(K){F.status==="pending"&&(F.status="fulfilled",F.value=K)},function(K){F.status==="pending"&&(F.status="rejected",F.reason=K)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function z(F,K,_t,Et,wt){var tt=typeof F;(tt==="undefined"||tt==="boolean")&&(F=null);var xt=!1;if(F===null)xt=!0;else switch(tt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(F.$$typeof){case s:case t:xt=!0;break;case g:return xt=F._init,z(xt(F._payload),K,_t,Et,wt)}}if(xt)return wt=wt(F),xt=Et===""?"."+ht(F,0):Et,I(wt)?(_t="",xt!=null&&(_t=xt.replace(ut,"$&/")+"/"),z(wt,K,_t,"",function(te){return te})):wt!=null&&(V(wt)&&(wt=W(wt,_t+(wt.key==null||F&&F.key===wt.key?"":(""+wt.key).replace(ut,"$&/")+"/")+xt)),K.push(wt)),1;xt=0;var yt=Et===""?".":Et+":";if(I(F))for(var Ht=0;Ht<F.length;Ht++)Et=F[Ht],tt=yt+ht(Et,Ht),xt+=z(Et,K,_t,tt,wt);else if(Ht=x(F),typeof Ht=="function")for(F=Ht.call(F),Ht=0;!(Et=F.next()).done;)Et=Et.value,tt=yt+ht(Et,Ht++),xt+=z(Et,K,_t,tt,wt);else if(tt==="object"){if(typeof F.then=="function")return z(j(F),K,_t,Et,wt);throw K=String(F),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return xt}function H(F,K,_t){if(F==null)return F;var Et=[],wt=0;return z(F,Et,"","",function(tt){return K.call(_t,tt,wt++)}),Et}function J(F){if(F._status===-1){var K=F._result;K=K(),K.then(function(_t){(F._status===0||F._status===-1)&&(F._status=1,F._result=_t)},function(_t){(F._status===0||F._status===-1)&&(F._status=2,F._result=_t)}),F._status===-1&&(F._status=0,F._result=K)}if(F._status===1)return F._result.default;throw F._result}var ft=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},St={map:H,forEach:function(F,K,_t){H(F,function(){K.apply(this,arguments)},_t)},count:function(F){var K=0;return H(F,function(){K++}),K},toArray:function(F){return H(F,function(K){return K})||[]},only:function(F){if(!V(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return fe.Activity=v,fe.Children=St,fe.Component=y,fe.Fragment=n,fe.Profiler=o,fe.PureComponent=L,fe.StrictMode=a,fe.Suspense=d,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,fe.__COMPILER_RUNTIME={__proto__:null,c:function(F){return B.H.useMemoCache(F)}},fe.cache=function(F){return function(){return F.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(F,K,_t){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Et=A({},F.props),wt=F.key;if(K!=null)for(tt in K.key!==void 0&&(wt=""+K.key),K)!T.call(K,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&K.ref===void 0||(Et[tt]=K[tt]);var tt=arguments.length-2;if(tt===1)Et.children=_t;else if(1<tt){for(var xt=Array(tt),yt=0;yt<tt;yt++)xt[yt]=arguments[yt+2];Et.children=xt}return O(F.type,wt,Et)},fe.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},fe.createElement=function(F,K,_t){var Et,wt={},tt=null;if(K!=null)for(Et in K.key!==void 0&&(tt=""+K.key),K)T.call(K,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(wt[Et]=K[Et]);var xt=arguments.length-2;if(xt===1)wt.children=_t;else if(1<xt){for(var yt=Array(xt),Ht=0;Ht<xt;Ht++)yt[Ht]=arguments[Ht+2];wt.children=yt}if(F&&F.defaultProps)for(Et in xt=F.defaultProps,xt)wt[Et]===void 0&&(wt[Et]=xt[Et]);return O(F,tt,wt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(F){return{$$typeof:f,render:F}},fe.isValidElement=V,fe.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:J}},fe.memo=function(F,K){return{$$typeof:p,type:F,compare:K===void 0?null:K}},fe.startTransition=function(F){var K=B.T,_t={};B.T=_t;try{var Et=F(),wt=B.S;wt!==null&&wt(_t,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(U,ft)}catch(tt){ft(tt)}finally{K!==null&&_t.types!==null&&(K.types=_t.types),B.T=K}},fe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},fe.use=function(F){return B.H.use(F)},fe.useActionState=function(F,K,_t){return B.H.useActionState(F,K,_t)},fe.useCallback=function(F,K){return B.H.useCallback(F,K)},fe.useContext=function(F){return B.H.useContext(F)},fe.useDebugValue=function(){},fe.useDeferredValue=function(F,K){return B.H.useDeferredValue(F,K)},fe.useEffect=function(F,K){return B.H.useEffect(F,K)},fe.useEffectEvent=function(F){return B.H.useEffectEvent(F)},fe.useId=function(){return B.H.useId()},fe.useImperativeHandle=function(F,K,_t){return B.H.useImperativeHandle(F,K,_t)},fe.useInsertionEffect=function(F,K){return B.H.useInsertionEffect(F,K)},fe.useLayoutEffect=function(F,K){return B.H.useLayoutEffect(F,K)},fe.useMemo=function(F,K){return B.H.useMemo(F,K)},fe.useOptimistic=function(F,K){return B.H.useOptimistic(F,K)},fe.useReducer=function(F,K,_t){return B.H.useReducer(F,K,_t)},fe.useRef=function(F){return B.H.useRef(F)},fe.useState=function(F){return B.H.useState(F)},fe.useSyncExternalStore=function(F,K,_t){return B.H.useSyncExternalStore(F,K,_t)},fe.useTransition=function(){return B.H.useTransition()},fe.version="19.2.7",fe}var h1;function Y0(){return h1||(h1=1,ld.exports=iS()),ld.exports}var cd={exports:{}},Zn={};var f1;function aS(){if(f1)return Zn;f1=1;var s=Y0();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(d,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:d,containerInfo:p,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Zn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(d,p,null,g)},Zn.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},Zn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Zn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Zn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,v=f(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Zn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Zn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=f(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Zn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Zn.requestFormReset=function(d){a.d.r(d)},Zn.unstable_batchedUpdates=function(d,p){return d(p)},Zn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Zn.version="19.2.7",Zn}var d1;function sS(){if(d1)return cd.exports;d1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),cd.exports=aS(),cd.exports}var p1;function rS(){if(p1)return fl;p1=1;var s=nS(),t=Y0(),n=sS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return d(h),e;if(m===l)return d(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var S=!1,C=h.child;C;){if(C===r){S=!0,r=h,l=m;break}if(C===l){S=!0,l=h,r=m;break}C=C.sibling}if(!S){for(C=m.child;C;){if(C===r){S=!0,r=m,l=h;break}if(C===l){S=!0,l=m,r=h;break}C=C.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case U:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return i=e.displayName||null,i!==null?i:ht(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return ht(e(i))}catch{}}return null}var j=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ft=[],St=-1;function F(e){return{current:e}}function K(e){0>St||(e.current=ft[St],ft[St]=null,St--)}function _t(e,i){St++,ft[St]=e.current,e.current=i}var Et=F(null),wt=F(null),tt=F(null),xt=F(null);function yt(e,i){switch(_t(tt,i),_t(wt,e),_t(Et,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Cv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Cv(i),e=Dv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(Et),_t(Et,e)}function Ht(){K(Et),K(wt),K(tt)}function te(e){e.memoizedState!==null&&_t(xt,e);var i=Et.current,r=Dv(i,e.type);i!==r&&(_t(wt,e),_t(Et,r))}function Kt(e){wt.current===e&&(K(Et),K(wt)),xt.current===e&&(K(xt),ol._currentValue=J)}var Pe,le;function ue(e){if(Pe===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Pe=i&&i[1]||"",le=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+e+le}var Se=!1;function xe(e,i){if(!e||Se)return"";Se=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ct){var ot=ct}Reflect.construct(e,[],Mt)}else{try{Mt.call()}catch(ct){ot=ct}e.call(Mt.prototype)}}else{try{throw Error()}catch(ct){ot=ct}(Mt=e())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ct){if(ct&&ot&&typeof ct.stack=="string")return[ct.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],C=m[1];if(S&&C){var G=S.split(`
`),it=C.split(`
`);for(h=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;h<it.length&&!it[h].includes("DetermineComponentFrameRoot");)h++;if(l===G.length||h===it.length)for(l=G.length-1,h=it.length-1;1<=l&&0<=h&&G[l]!==it[h];)h--;for(;1<=l&&0<=h;l--,h--)if(G[l]!==it[h]){if(l!==1||h!==1)do if(l--,h--,0>h||G[l]!==it[h]){var mt=`
`+G[l].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=l&&0<=h);break}}}finally{Se=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ue(r):""}function on(e,i){switch(e.tag){case 26:case 27:case 5:return ue(e.type);case 16:return ue("Lazy");case 13:return e.child!==i&&i!==null?ue("Suspense Fallback"):ue("Suspense");case 19:return ue("SuspenseList");case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return ue("Activity");default:return""}}function tn(e){try{var i="",r=null;do i+=on(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Je=Object.prototype.hasOwnProperty,ln=s.unstable_scheduleCallback,ze=s.unstable_cancelCallback,en=s.unstable_shouldYield,N=s.unstable_requestPaint,Xt=s.unstable_now,ae=s.unstable_getCurrentPriorityLevel,P=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,Q=s.unstable_NormalPriority,et=s.unstable_LowPriority,lt=s.unstable_IdlePriority,At=s.log,Ut=s.unstable_setDisableYieldValue,dt=null,pt=null;function Rt(e){if(typeof At=="function"&&Ut(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(dt,e)}catch{}}var zt=Math.clz32?Math.clz32:Jt,Lt=Math.log,Nt=Math.LN2;function Jt(e){return e>>>=0,e===0?32:31-(Lt(e)/Nt|0)|0}var ee=256,ce=262144,q=4194304;function Ct(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?h=Ct(l):(S&=C,S!==0?h=Ct(S):r||(r=C&~e,r!==0&&(h=Ct(r))))):(C=l&~m,C!==0?h=Ct(C):S!==0?h=Ct(S):r||(r=l&~e,r!==0&&(h=Ct(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ft(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=q;return q<<=1,(q&62914560)===0&&(q=4194304),e}function Zt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function kt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cn(e,i,r,l,h,m){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,G=e.expirationTimes,it=e.hiddenUpdates;for(r=S&~r;0<r;){var mt=31-zt(r),Mt=1<<mt;C[mt]=0,G[mt]=-1;var ot=it[mt];if(ot!==null)for(it[mt]=null,mt=0;mt<ot.length;mt++){var ct=ot[mt];ct!==null&&(ct.lane&=-536870913)}r&=~Mt}l!==0&&He(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(S&~i))}function He(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-zt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function pi(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-zt(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function mi(e,i){var r=i&-i;return r=(r&42)!==0?1:Mo(r),(r&(e.suspendedLanes|i))!==0?0:r}function Mo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function So(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Jv(e.type))}function ur(e,i){var r=H.p;try{return H.p=e,i()}finally{H.p=r}}var na=Math.random().toString(36).slice(2),_n="__reactFiber$"+na,Bn="__reactProps$"+na,ai="__reactContainer$"+na,Cs="__reactEvents$"+na,Gl="__reactListeners$"+na,Vl="__reactHandles$"+na,Ds="__reactResources$"+na,qa="__reactMarker$"+na;function Ya(e){delete e[_n],delete e[Bn],delete e[Cs],delete e[Gl],delete e[Vl]}function va(e){var i=e[_n];if(i)return i;for(var r=e.parentNode;r;){if(i=r[ai]||r[_n]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Fv(e);e!==null;){if(r=e[_n])return r;e=Fv(e)}return i}e=r,r=e.parentNode}return null}function _a(e){if(e=e[_n]||e[ai]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Us(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Za(e){var i=e[Ds];return i||(i=e[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function xn(e){e[qa]=!0}var kl=new Set,R={};function Y(e,i){rt(e,i),rt(e+"Capture",i)}function rt(e,i){for(R[e]=i,e=0;e<i.length;e++)kl.add(i[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},Ot={};function Vt(e){return Je.call(Ot,e)?!0:Je.call(st,e)?!1:at.test(e)?Ot[e]=!0:(st[e]=!0,!1)}function Pt(e,i,r){if(Vt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function qt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Wt(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $t(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(S){r=""+S,m.call(this,S)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ue(e){if(!e._valueTracker){var i=me(e)?"checked":"value";e._valueTracker=$t(e,i,""+e[i])}}function un(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=me(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ge=/[\n"\\]/g;function Ve(e){return e.replace(Ge,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Gt(e,i,r,l,h,m,S,C){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ne(i)):e.value!==""+ne(i)&&(e.value=""+ne(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?be(e,S,ne(i)):r!=null?be(e,S,ne(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+ne(C):e.removeAttribute("name")}function Yn(e,i,r,l,h,m,S,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ue(e);return}r=r!=null?""+ne(r):"",i=i!=null?""+ne(i):r,C||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ue(e)}function be(e,i,r){i==="number"&&je(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function wn(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+ne(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function gi(e,i,r){if(i!=null&&(i=""+ne(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+ne(r):""}function ki(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(j(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=ne(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ue(e)}function vi(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var ke=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hn(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||ke.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Wi(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&hn(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&hn(e,m,i[m])}function Ie(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ns(e){return Ka.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xa(){}var th=null;function eh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hr=null,fr=null;function Rp(e){var i=_a(e);if(i&&(e=i.stateNode)){var r=e[Bn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Gt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ve(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[Bn]||null;if(!h)throw Error(a(90));Gt(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&un(l)}break t;case"textarea":gi(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&wn(e,!!r.multiple,i,!1)}}}var nh=!1;function Cp(e,i,r){if(nh)return e(i,r);nh=!0;try{var l=e(i);return l}finally{if(nh=!1,(hr!==null||fr!==null)&&(Dc(),hr&&(i=hr,e=fr,fr=hr=null,Rp(i),e)))for(i=0;i<e.length;i++)Rp(e[i])}}function Eo(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Bn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ih=!1;if(ya)try{var To={};Object.defineProperty(To,"passive",{get:function(){ih=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{ih=!1}var ja=null,ah=null,Wl=null;function Dp(){if(Wl)return Wl;var e,i=ah,r=i.length,l,h="value"in ja?ja.value:ja.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var S=r-e;for(l=1;l<=S&&i[r-l]===h[m-l];l++);return Wl=h.slice(e,1<l?1-l:void 0)}function Xl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ql(){return!0}function Up(){return!1}function si(e){function i(r,l,h,m,S){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ql:Up,this.isPropagationStopped=Up,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=si(Ls),Ao=v({},Ls,{view:0,detail:0}),Qx=si(Ao),sh,rh,wo,Zl=v({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wo&&(wo&&e.type==="mousemove"?(sh=e.screenX-wo.screenX,rh=e.screenY-wo.screenY):rh=sh=0,wo=e),sh)},movementY:function(e){return"movementY"in e?e.movementY:rh}}),Np=si(Zl),$x=v({},Zl,{dataTransfer:0}),Jx=si($x),ty=v({},Ao,{relatedTarget:0}),oh=si(ty),ey=v({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),ny=si(ey),iy=v({},Ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ay=si(iy),sy=v({},Ls,{data:0}),Lp=si(sy),ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=ly[e])?!!i[e]:!1}function lh(){return cy}var uy=v({},Ao,{key:function(e){if(e.key){var i=ry[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lh,charCode:function(e){return e.type==="keypress"?Xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hy=si(uy),fy=v({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=si(fy),dy=v({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lh}),py=si(dy),my=v({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=si(my),vy=v({},Zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_y=si(vy),xy=v({},Ls,{newState:0,oldState:0}),yy=si(xy),My=[9,13,27,32],ch=ya&&"CompositionEvent"in window,Ro=null;ya&&"documentMode"in document&&(Ro=document.documentMode);var Sy=ya&&"TextEvent"in window&&!Ro,Op=ya&&(!ch||Ro&&8<Ro&&11>=Ro),Ip=" ",Fp=!1;function Bp(e,i){switch(e){case"keyup":return My.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function by(e,i){switch(e){case"compositionend":return zp(i);case"keypress":return i.which!==32?null:(Fp=!0,Ip);case"textInput":return e=i.data,e===Ip&&Fp?null:e;default:return null}}function Ey(e,i){if(dr)return e==="compositionend"||!ch&&Bp(e,i)?(e=Dp(),Wl=ah=ja=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Op&&i.locale!=="ko"?null:i.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ty[e.type]:i==="textarea"}function Gp(e,i,r,l){hr?fr?fr.push(l):fr=[l]:hr=l,i=Fc(i,"onChange"),0<i.length&&(r=new Yl("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Co=null,Do=null;function Ay(e){bv(e,0)}function Kl(e){var i=Us(e);if(un(i))return e}function Vp(e,i){if(e==="change")return i}var kp=!1;if(ya){var uh;if(ya){var hh="oninput"in document;if(!hh){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),hh=typeof Wp.oninput=="function"}uh=hh}else uh=!1;kp=uh&&(!document.documentMode||9<document.documentMode)}function Xp(){Co&&(Co.detachEvent("onpropertychange",qp),Do=Co=null)}function qp(e){if(e.propertyName==="value"&&Kl(Do)){var i=[];Gp(i,Do,e,eh(e)),Cp(Ay,i)}}function wy(e,i,r){e==="focusin"?(Xp(),Co=i,Do=r,Co.attachEvent("onpropertychange",qp)):e==="focusout"&&Xp()}function Ry(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(Do)}function Cy(e,i){if(e==="click")return Kl(i)}function Dy(e,i){if(e==="input"||e==="change")return Kl(i)}function Uy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var _i=typeof Object.is=="function"?Object.is:Uy;function Uo(e,i){if(_i(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!Je.call(i,h)||!_i(e[h],i[h]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zp(e,i){var r=Yp(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Yp(r)}}function Kp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Kp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=je(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=je(e.document)}return i}function fh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Ny=ya&&"documentMode"in document&&11>=document.documentMode,pr=null,dh=null,No=null,ph=!1;function Qp(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ph||pr==null||pr!==je(l)||(l=pr,"selectionStart"in l&&fh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&Uo(No,l)||(No=l,l=Fc(dh,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=pr)))}function Ps(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var mr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},mh={},$p={};ya&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Os(e){if(mh[e])return mh[e];if(!mr[e])return e;var i=mr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in $p)return mh[e]=i[r];return e}var Jp=Os("animationend"),tm=Os("animationiteration"),em=Os("animationstart"),Ly=Os("transitionrun"),Py=Os("transitionstart"),Oy=Os("transitioncancel"),nm=Os("transitionend"),im=new Map,gh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gh.push("scrollEnd");function Xi(e,i){im.set(e,i),Y(i,[e])}var jl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ni=[],gr=0,vh=0;function Ql(){for(var e=gr,i=vh=gr=0;i<e;){var r=Ni[i];Ni[i++]=null;var l=Ni[i];Ni[i++]=null;var h=Ni[i];Ni[i++]=null;var m=Ni[i];if(Ni[i++]=null,l!==null&&h!==null){var S=l.pending;S===null?h.next=h:(h.next=S.next,S.next=h),l.pending=h}m!==0&&am(r,h,m)}}function $l(e,i,r,l){Ni[gr++]=e,Ni[gr++]=i,Ni[gr++]=r,Ni[gr++]=l,vh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function _h(e,i,r,l){return $l(e,i,r,l),Jl(e)}function Is(e,i){return $l(e,null,null,i),Jl(e)}function am(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-zt(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function Jl(e){if(50<tl)throw tl=0,Rf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var vr={};function Iy(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(e,i,r,l){return new Iy(e,i,r,l)}function xh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ma(e,i){var r=e.alternate;return r===null?(r=xi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function sm(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function tc(e,i,r,l,h,m){var S=0;if(l=e,typeof e=="function")xh(e)&&(S=1);else if(typeof e=="string")S=GM(e,r,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=xi(31,r,i,h),e.elementType=O,e.lanes=m,e;case A:return Fs(r.children,h,m,i);case M:S=8,h|=24;break;case y:return e=xi(12,r,i,h|2),e.elementType=y,e.lanes=m,e;case I:return e=xi(13,r,i,h),e.elementType=I,e.lanes=m,e;case U:return e=xi(19,r,i,h),e.elementType=U,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:S=10;break t;case D:S=9;break t;case w:S=11;break t;case B:S=14;break t;case T:S=16,l=null;break t}S=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=xi(S,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function Fs(e,i,r,l){return e=xi(7,e,l,i),e.lanes=r,e}function yh(e,i,r){return e=xi(6,e,null,i),e.lanes=r,e}function rm(e){var i=xi(18,null,null,0);return i.stateNode=e,i}function Mh(e,i,r){return i=xi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var om=new WeakMap;function Li(e,i){if(typeof e=="object"&&e!==null){var r=om.get(e);return r!==void 0?r:(i={value:e,source:i,stack:tn(i)},om.set(e,i),i)}return{value:e,source:i,stack:tn(i)}}var _r=[],xr=0,ec=null,Lo=0,Pi=[],Oi=0,Qa=null,aa=1,sa="";function Sa(e,i){_r[xr++]=Lo,_r[xr++]=ec,ec=e,Lo=i}function lm(e,i,r){Pi[Oi++]=aa,Pi[Oi++]=sa,Pi[Oi++]=Qa,Qa=e;var l=aa;e=sa;var h=32-zt(l)-1;l&=~(1<<h),r+=1;var m=32-zt(i)+h;if(30<m){var S=h-h%5;m=(l&(1<<S)-1).toString(32),l>>=S,h-=S,aa=1<<32-zt(i)+h|r<<h|l,sa=m+e}else aa=1<<m|r<<h|l,sa=e}function Sh(e){e.return!==null&&(Sa(e,1),lm(e,1,0))}function bh(e){for(;e===ec;)ec=_r[--xr],_r[xr]=null,Lo=_r[--xr],_r[xr]=null;for(;e===Qa;)Qa=Pi[--Oi],Pi[Oi]=null,sa=Pi[--Oi],Pi[Oi]=null,aa=Pi[--Oi],Pi[Oi]=null}function cm(e,i){Pi[Oi++]=aa,Pi[Oi++]=sa,Pi[Oi++]=Qa,aa=i.id,sa=i.overflow,Qa=e}var zn=null,nn=null,De=!1,$a=null,Ii=!1,Eh=Error(a(519));function Ja(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Po(Li(i,e)),Eh}function um(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[_n]=e,i[Bn]=l,r){case"dialog":Te("cancel",i),Te("close",i);break;case"iframe":case"object":case"embed":Te("load",i);break;case"video":case"audio":for(r=0;r<nl.length;r++)Te(nl[r],i);break;case"source":Te("error",i);break;case"img":case"image":case"link":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"input":Te("invalid",i),Yn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Te("invalid",i);break;case"textarea":Te("invalid",i),ki(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||wv(i.textContent,r)?(l.popover!=null&&(Te("beforetoggle",i),Te("toggle",i)),l.onScroll!=null&&Te("scroll",i),l.onScrollEnd!=null&&Te("scrollend",i),l.onClick!=null&&(i.onclick=xa),i=!0):i=!1,i||Ja(e,!0)}function hm(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 31:case 13:Ii=!1;return;case 27:case 3:Ii=!0;return;default:zn=zn.return}}function yr(e){if(e!==zn)return!1;if(!De)return hm(e),De=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||kf(e.type,e.memoizedProps)),r=!r),r&&nn&&Ja(e),hm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nn=Iv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nn=Iv(e)}else i===27?(i=nn,ds(e.type)?(e=Zf,Zf=null,nn=e):nn=i):nn=zn?Bi(e.stateNode.nextSibling):null;return!0}function Bs(){nn=zn=null,De=!1}function Th(){var e=$a;return e!==null&&(ci===null?ci=e:ci.push.apply(ci,e),$a=null),e}function Po(e){$a===null?$a=[e]:$a.push(e)}var Ah=F(null),zs=null,ba=null;function ts(e,i,r){_t(Ah,i._currentValue),i._currentValue=r}function Ea(e){e._currentValue=Ah.current,K(Ah)}function wh(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function Rh(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var S=h.child;m=m.firstContext;t:for(;m!==null;){var C=m;m=h;for(var G=0;G<i.length;G++)if(C.context===i[G]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),wh(m.return,r,e),l||(S=null);break t}m=C.next}}else if(h.tag===18){if(S=h.return,S===null)throw Error(a(341));S.lanes|=r,m=S.alternate,m!==null&&(m.lanes|=r),wh(S,r,e),S=null}else S=h.child;if(S!==null)S.return=h;else for(S=h;S!==null;){if(S===e){S=null;break}if(h=S.sibling,h!==null){h.return=S.return,S=h;break}S=S.return}h=S}}function Mr(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var S=h.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var C=h.type;_i(h.pendingProps.value,S.value)||(e!==null?e.push(C):e=[C])}}else if(h===xt.current){if(S=h.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ol):e=[ol])}h=h.return}e!==null&&Rh(i,e,r,l),i.flags|=262144}function nc(e){for(e=e.firstContext;e!==null;){if(!_i(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hs(e){zs=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return fm(zs,e)}function ic(e,i){return zs===null&&Hs(e),fm(e,i)}function fm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ba===null){if(e===null)throw Error(a(308));ba=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ba=ba.next=i;return r}var Fy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},By=s.unstable_scheduleCallback,zy=s.unstable_NormalPriority,yn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ch(){return{controller:new Fy,data:new Map,refCount:0}}function Oo(e){e.refCount--,e.refCount===0&&By(zy,function(){e.controller.abort()})}var Io=null,Dh=0,Sr=0,br=null;function Hy(e,i){if(Io===null){var r=Io=[];Dh=0,Sr=Pf(),br={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Dh++,i.then(dm,dm),i}function dm(){if(--Dh===0&&Io!==null){br!==null&&(br.status="fulfilled");var e=Io;Io=null,Sr=0,br=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Gy(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var pm=z.S;z.S=function(e,i){Qg=Xt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Hy(e,i),pm!==null&&pm(e,i)};var Gs=F(null);function Uh(){var e=Gs.current;return e!==null?e:Qe.pooledCache}function ac(e,i){i===null?_t(Gs,Gs.current):_t(Gs,i.pool)}function mm(){var e=Uh();return e===null?null:{parent:yn._currentValue,pool:e}}var Er=Error(a(460)),Nh=Error(a(474)),sc=Error(a(542)),rc={then:function(){}};function gm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vm(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(xa,xa),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,xm(e),e;default:if(typeof i.status=="string")i.then(xa,xa);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,xm(e),e}throw ks=i,Er}}function Vs(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ks=r,Er):r}}var ks=null;function _m(){if(ks===null)throw Error(a(459));var e=ks;return ks=null,e}function xm(e){if(e===Er||e===sc)throw Error(a(483))}var Tr=null,Fo=0;function oc(e){var i=Fo;return Fo+=1,Tr===null&&(Tr=[]),vm(Tr,e,i)}function Bo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function lc(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function ym(e){function i($,k){if(e){var nt=$.deletions;nt===null?($.deletions=[k],$.flags|=16):nt.push(k)}}function r($,k){if(!e)return null;for(;k!==null;)i($,k),k=k.sibling;return null}function l($){for(var k=new Map;$!==null;)$.key!==null?k.set($.key,$):k.set($.index,$),$=$.sibling;return k}function h($,k){return $=Ma($,k),$.index=0,$.sibling=null,$}function m($,k,nt){return $.index=nt,e?(nt=$.alternate,nt!==null?(nt=nt.index,nt<k?($.flags|=67108866,k):nt):($.flags|=67108866,k)):($.flags|=1048576,k)}function S($){return e&&$.alternate===null&&($.flags|=67108866),$}function C($,k,nt,vt){return k===null||k.tag!==6?(k=yh(nt,$.mode,vt),k.return=$,k):(k=h(k,nt),k.return=$,k)}function G($,k,nt,vt){var ie=nt.type;return ie===A?mt($,k,nt.props.children,vt,nt.key):k!==null&&(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===T&&Vs(ie)===k.type)?(k=h(k,nt.props),Bo(k,nt),k.return=$,k):(k=tc(nt.type,nt.key,nt.props,null,$.mode,vt),Bo(k,nt),k.return=$,k)}function it($,k,nt,vt){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=Mh(nt,$.mode,vt),k.return=$,k):(k=h(k,nt.children||[]),k.return=$,k)}function mt($,k,nt,vt,ie){return k===null||k.tag!==7?(k=Fs(nt,$.mode,vt,ie),k.return=$,k):(k=h(k,nt),k.return=$,k)}function Mt($,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=yh(""+k,$.mode,nt),k.return=$,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return nt=tc(k.type,k.key,k.props,null,$.mode,nt),Bo(nt,k),nt.return=$,nt;case b:return k=Mh(k,$.mode,nt),k.return=$,k;case T:return k=Vs(k),Mt($,k,nt)}if(j(k)||Z(k))return k=Fs(k,$.mode,nt,null),k.return=$,k;if(typeof k.then=="function")return Mt($,oc(k),nt);if(k.$$typeof===L)return Mt($,ic($,k),nt);lc($,k)}return null}function ot($,k,nt,vt){var ie=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ie!==null?null:C($,k,""+nt,vt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case x:return nt.key===ie?G($,k,nt,vt):null;case b:return nt.key===ie?it($,k,nt,vt):null;case T:return nt=Vs(nt),ot($,k,nt,vt)}if(j(nt)||Z(nt))return ie!==null?null:mt($,k,nt,vt,null);if(typeof nt.then=="function")return ot($,k,oc(nt),vt);if(nt.$$typeof===L)return ot($,k,ic($,nt),vt);lc($,nt)}return null}function ct($,k,nt,vt,ie){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return $=$.get(nt)||null,C(k,$,""+vt,ie);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case x:return $=$.get(vt.key===null?nt:vt.key)||null,G(k,$,vt,ie);case b:return $=$.get(vt.key===null?nt:vt.key)||null,it(k,$,vt,ie);case T:return vt=Vs(vt),ct($,k,nt,vt,ie)}if(j(vt)||Z(vt))return $=$.get(nt)||null,mt(k,$,vt,ie,null);if(typeof vt.then=="function")return ct($,k,nt,oc(vt),ie);if(vt.$$typeof===L)return ct($,k,nt,ic(k,vt),ie);lc(k,vt)}return null}function Yt($,k,nt,vt){for(var ie=null,Ne=null,jt=k,_e=k=0,we=null;jt!==null&&_e<nt.length;_e++){jt.index>_e?(we=jt,jt=null):we=jt.sibling;var Le=ot($,jt,nt[_e],vt);if(Le===null){jt===null&&(jt=we);break}e&&jt&&Le.alternate===null&&i($,jt),k=m(Le,k,_e),Ne===null?ie=Le:Ne.sibling=Le,Ne=Le,jt=we}if(_e===nt.length)return r($,jt),De&&Sa($,_e),ie;if(jt===null){for(;_e<nt.length;_e++)jt=Mt($,nt[_e],vt),jt!==null&&(k=m(jt,k,_e),Ne===null?ie=jt:Ne.sibling=jt,Ne=jt);return De&&Sa($,_e),ie}for(jt=l(jt);_e<nt.length;_e++)we=ct(jt,$,_e,nt[_e],vt),we!==null&&(e&&we.alternate!==null&&jt.delete(we.key===null?_e:we.key),k=m(we,k,_e),Ne===null?ie=we:Ne.sibling=we,Ne=we);return e&&jt.forEach(function(_s){return i($,_s)}),De&&Sa($,_e),ie}function re($,k,nt,vt){if(nt==null)throw Error(a(151));for(var ie=null,Ne=null,jt=k,_e=k=0,we=null,Le=nt.next();jt!==null&&!Le.done;_e++,Le=nt.next()){jt.index>_e?(we=jt,jt=null):we=jt.sibling;var _s=ot($,jt,Le.value,vt);if(_s===null){jt===null&&(jt=we);break}e&&jt&&_s.alternate===null&&i($,jt),k=m(_s,k,_e),Ne===null?ie=_s:Ne.sibling=_s,Ne=_s,jt=we}if(Le.done)return r($,jt),De&&Sa($,_e),ie;if(jt===null){for(;!Le.done;_e++,Le=nt.next())Le=Mt($,Le.value,vt),Le!==null&&(k=m(Le,k,_e),Ne===null?ie=Le:Ne.sibling=Le,Ne=Le);return De&&Sa($,_e),ie}for(jt=l(jt);!Le.done;_e++,Le=nt.next())Le=ct(jt,$,_e,Le.value,vt),Le!==null&&(e&&Le.alternate!==null&&jt.delete(Le.key===null?_e:Le.key),k=m(Le,k,_e),Ne===null?ie=Le:Ne.sibling=Le,Ne=Le);return e&&jt.forEach(function($M){return i($,$M)}),De&&Sa($,_e),ie}function Ze($,k,nt,vt){if(typeof nt=="object"&&nt!==null&&nt.type===A&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case x:t:{for(var ie=nt.key;k!==null;){if(k.key===ie){if(ie=nt.type,ie===A){if(k.tag===7){r($,k.sibling),vt=h(k,nt.props.children),vt.return=$,$=vt;break t}}else if(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===T&&Vs(ie)===k.type){r($,k.sibling),vt=h(k,nt.props),Bo(vt,nt),vt.return=$,$=vt;break t}r($,k);break}else i($,k);k=k.sibling}nt.type===A?(vt=Fs(nt.props.children,$.mode,vt,nt.key),vt.return=$,$=vt):(vt=tc(nt.type,nt.key,nt.props,null,$.mode,vt),Bo(vt,nt),vt.return=$,$=vt)}return S($);case b:t:{for(ie=nt.key;k!==null;){if(k.key===ie)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){r($,k.sibling),vt=h(k,nt.children||[]),vt.return=$,$=vt;break t}else{r($,k);break}else i($,k);k=k.sibling}vt=Mh(nt,$.mode,vt),vt.return=$,$=vt}return S($);case T:return nt=Vs(nt),Ze($,k,nt,vt)}if(j(nt))return Yt($,k,nt,vt);if(Z(nt)){if(ie=Z(nt),typeof ie!="function")throw Error(a(150));return nt=ie.call(nt),re($,k,nt,vt)}if(typeof nt.then=="function")return Ze($,k,oc(nt),vt);if(nt.$$typeof===L)return Ze($,k,ic($,nt),vt);lc($,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(r($,k.sibling),vt=h(k,nt),vt.return=$,$=vt):(r($,k),vt=yh(nt,$.mode,vt),vt.return=$,$=vt),S($)):r($,k)}return function($,k,nt,vt){try{Fo=0;var ie=Ze($,k,nt,vt);return Tr=null,ie}catch(jt){if(jt===Er||jt===sc)throw jt;var Ne=xi(29,jt,null,$.mode);return Ne.lanes=vt,Ne.return=$,Ne}}}var Ws=ym(!0),Mm=ym(!1),es=!1;function Lh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ph(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ns(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function is(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Oe&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Jl(e),am(e,null,r),i}return $l(e,l,i,r),Jl(e)}function zo(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,pi(e,r)}}function Oh(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=S:m=m.next=S,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Ih=!1;function Ho(){if(Ih){var e=br;if(e!==null)throw e}}function Go(e,i,r,l){Ih=!1;var h=e.updateQueue;es=!1;var m=h.firstBaseUpdate,S=h.lastBaseUpdate,C=h.shared.pending;if(C!==null){h.shared.pending=null;var G=C,it=G.next;G.next=null,S===null?m=it:S.next=it,S=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==S&&(C===null?mt.firstBaseUpdate=it:C.next=it,mt.lastBaseUpdate=G))}if(m!==null){var Mt=h.baseState;S=0,mt=it=G=null,C=m;do{var ot=C.lane&-536870913,ct=ot!==C.lane;if(ct?(Ae&ot)===ot:(l&ot)===ot){ot!==0&&ot===Sr&&(Ih=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Yt=e,re=C;ot=i;var Ze=r;switch(re.tag){case 1:if(Yt=re.payload,typeof Yt=="function"){Mt=Yt.call(Ze,Mt,ot);break t}Mt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=re.payload,ot=typeof Yt=="function"?Yt.call(Ze,Mt,ot):Yt,ot==null)break t;Mt=v({},Mt,ot);break t;case 2:es=!0}}ot=C.callback,ot!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=h.callbacks,ct===null?h.callbacks=[ot]:ct.push(ot))}else ct={lane:ot,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(it=mt=ct,G=Mt):mt=mt.next=ct,S|=ot;if(C=C.next,C===null){if(C=h.shared.pending,C===null)break;ct=C,C=ct.next,ct.next=null,h.lastBaseUpdate=ct,h.shared.pending=null}}while(!0);mt===null&&(G=Mt),h.baseState=G,h.firstBaseUpdate=it,h.lastBaseUpdate=mt,m===null&&(h.shared.lanes=0),ls|=S,e.lanes=S,e.memoizedState=Mt}}function Sm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function bm(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Sm(r[e],i)}var Ar=F(null),cc=F(0);function Em(e,i){e=La,_t(cc,e),_t(Ar,i),La=e|i.baseLanes}function Fh(){_t(cc,La),_t(Ar,Ar.current)}function Bh(){La=cc.current,K(Ar),K(cc)}var yi=F(null),Fi=null;function as(e){var i=e.alternate;_t(gn,gn.current&1),_t(yi,e),Fi===null&&(i===null||Ar.current!==null||i.memoizedState!==null)&&(Fi=e)}function zh(e){_t(gn,gn.current),_t(yi,e),Fi===null&&(Fi=e)}function Tm(e){e.tag===22?(_t(gn,gn.current),_t(yi,e),Fi===null&&(Fi=e)):ss()}function ss(){_t(gn,gn.current),_t(yi,yi.current)}function Mi(e){K(yi),Fi===e&&(Fi=null),K(gn)}var gn=F(0);function uc(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||qf(r)||Yf(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ta=0,ge=null,qe=null,Mn=null,hc=!1,wr=!1,Xs=!1,fc=0,Vo=0,Rr=null,Vy=0;function pn(){throw Error(a(321))}function Hh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!_i(e[r],i[r]))return!1;return!0}function Gh(e,i,r,l,h,m){return Ta=m,ge=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?lg:nf,Xs=!1,m=r(l,h),Xs=!1,wr&&(m=wm(i,r,l,h)),Am(e),m}function Am(e){z.H=Xo;var i=qe!==null&&qe.next!==null;if(Ta=0,Mn=qe=ge=null,hc=!1,Vo=0,Rr=null,i)throw Error(a(300));e===null||Sn||(e=e.dependencies,e!==null&&nc(e)&&(Sn=!0))}function wm(e,i,r,l){ge=e;var h=0;do{if(wr&&(Rr=null),Vo=0,wr=!1,25<=h)throw Error(a(301));if(h+=1,Mn=qe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=cg,m=i(r,l)}while(wr);return m}function ky(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?ko(i):i,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(ge.flags|=1024),i}function Vh(){var e=fc!==0;return fc=0,e}function kh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Wh(e){if(hc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}hc=!1}Ta=0,Mn=qe=ge=null,wr=!1,Vo=fc=0,Rr=null}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?ge.memoizedState=Mn=e:Mn=Mn.next=e,Mn}function vn(){if(qe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var i=Mn===null?ge.memoizedState:Mn.next;if(i!==null)Mn=i,qe=e;else{if(e===null)throw ge.alternate===null?Error(a(467)):Error(a(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Mn===null?ge.memoizedState=Mn=e:Mn=Mn.next=e}return Mn}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var i=Vo;return Vo+=1,Rr===null&&(Rr=[]),e=vm(Rr,e,i),i=ge,(Mn===null?i.memoizedState:Mn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?lg:nf),e}function pc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ko(e);if(e.$$typeof===L)return Hn(e)}throw Error(a(438,String(e)))}function Xh(e){var i=null,r=ge.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=ge.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=dc(),ge.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=W;return i.index++,r}function Aa(e,i){return typeof i=="function"?i(e):i}function mc(e){var i=vn();return qh(i,qe,e)}function qh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var S=h.next;h.next=m.next,m.next=S}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var C=S=null,G=null,it=i,mt=!1;do{var Mt=it.lane&-536870913;if(Mt!==it.lane?(Ae&Mt)===Mt:(Ta&Mt)===Mt){var ot=it.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Mt===Sr&&(mt=!0);else if((Ta&ot)===ot){it=it.next,ot===Sr&&(mt=!0);continue}else Mt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(C=G=Mt,S=m):G=G.next=Mt,ge.lanes|=ot,ls|=ot;Mt=it.action,Xs&&r(m,Mt),m=it.hasEagerState?it.eagerState:r(m,Mt)}else ot={lane:Mt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(C=G=ot,S=m):G=G.next=ot,ge.lanes|=Mt,ls|=Mt;it=it.next}while(it!==null&&it!==i);if(G===null?S=m:G.next=C,!_i(m,e.memoizedState)&&(Sn=!0,mt&&(r=br,r!==null)))throw r;e.memoizedState=m,e.baseState=S,e.baseQueue=G,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Yh(e){var i=vn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var S=h=h.next;do m=e(m,S.action),S=S.next;while(S!==h);_i(m,i.memoizedState)||(Sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function Rm(e,i,r){var l=ge,h=vn(),m=De;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var S=!_i((qe||h).memoizedState,r);if(S&&(h.memoizedState=r,Sn=!0),h=h.queue,jh(Um.bind(null,l,h,e),[e]),h.getSnapshot!==i||S||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,Cr(9,{destroy:void 0},Dm.bind(null,l,h,r,i),null),Qe===null)throw Error(a(349));m||(Ta&127)!==0||Cm(l,i,r)}return r}function Cm(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=ge.updateQueue,i===null?(i=dc(),ge.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function Dm(e,i,r,l){i.value=r,i.getSnapshot=l,Nm(i)&&Lm(e)}function Um(e,i,r){return r(function(){Nm(i)&&Lm(e)})}function Nm(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!_i(e,r)}catch{return!0}}function Lm(e){var i=Is(e,2);i!==null&&ui(i,e,2)}function Zh(e){var i=Jn();if(typeof e=="function"){var r=e;if(e=r(),Xs){Rt(!0);try{r()}finally{Rt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:e},i}function Pm(e,i,r,l){return e.baseState=r,qh(e,qe,typeof l=="function"?l:Aa)}function Wy(e,i,r,l,h){if(_c(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};z.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,Om(i,m)):(m.next=r.next,i.pending=r.next=m)}}function Om(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=z.T,S={};z.T=S;try{var C=r(h,l),G=z.S;G!==null&&G(S,C),Im(e,i,C)}catch(it){Kh(e,i,it)}finally{m!==null&&S.types!==null&&(m.types=S.types),z.T=m}}else try{m=r(h,l),Im(e,i,m)}catch(it){Kh(e,i,it)}}function Im(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Fm(e,i,l)},function(l){return Kh(e,i,l)}):Fm(e,i,r)}function Fm(e,i,r){i.status="fulfilled",i.value=r,Bm(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,Om(e,r)))}function Kh(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,Bm(i),i=i.next;while(i!==l)}e.action=null}function Bm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function zm(e,i){return i}function Hm(e,i){if(De){var r=Qe.formState;if(r!==null){t:{var l=ge;if(De){if(nn){e:{for(var h=nn,m=Ii;h.nodeType!==8;){if(!m){h=null;break e}if(h=Bi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){nn=Bi(h.nextSibling),l=h.data==="F!";break t}}Ja(l)}l=!1}l&&(i=r[0])}}return r=Jn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:i},r.queue=l,r=sg.bind(null,ge,l),l.dispatch=r,l=Zh(!1),m=ef.bind(null,ge,!1,l.queue),l=Jn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=Wy.bind(null,ge,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function Gm(e){var i=vn();return Vm(i,qe,e)}function Vm(e,i,r){if(i=qh(e,i,zm)[0],e=mc(Aa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ko(i)}catch(S){throw S===Er?sc:S}else l=i;i=vn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(ge.flags|=2048,Cr(9,{destroy:void 0},Xy.bind(null,h,r),null)),[l,m,e]}function Xy(e,i){e.action=i}function km(e){var i=vn(),r=qe;if(r!==null)return Vm(i,r,e);vn(),i=i.memoizedState,r=vn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function Cr(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=ge.updateQueue,i===null&&(i=dc(),ge.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function Wm(){return vn().memoizedState}function gc(e,i,r,l){var h=Jn();ge.flags|=e,h.memoizedState=Cr(1|i,{destroy:void 0},r,l===void 0?null:l)}function vc(e,i,r,l){var h=vn();l=l===void 0?null:l;var m=h.memoizedState.inst;qe!==null&&l!==null&&Hh(l,qe.memoizedState.deps)?h.memoizedState=Cr(i,m,r,l):(ge.flags|=e,h.memoizedState=Cr(1|i,m,r,l))}function Xm(e,i){gc(8390656,8,e,i)}function jh(e,i){vc(2048,8,e,i)}function qy(e){ge.flags|=4;var i=ge.updateQueue;if(i===null)i=dc(),ge.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function qm(e){var i=vn().memoizedState;return qy({ref:i,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Ym(e,i){return vc(4,2,e,i)}function Zm(e,i){return vc(4,4,e,i)}function Km(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function jm(e,i,r){r=r!=null?r.concat([e]):null,vc(4,4,Km.bind(null,i,e),r)}function Qh(){}function Qm(e,i){var r=vn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Hh(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function $m(e,i){var r=vn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Hh(i,l[1]))return l[0];if(l=e(),Xs){Rt(!0);try{e()}finally{Rt(!1)}}return r.memoizedState=[l,i],l}function $h(e,i,r){return r===void 0||(Ta&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=Jg(),ge.lanes|=e,ls|=e,r)}function Jm(e,i,r,l){return _i(r,i)?r:Ar.current!==null?(e=$h(e,r,l),_i(e,i)||(Sn=!0),e):(Ta&42)===0||(Ta&1073741824)!==0&&(Ae&261930)===0?(Sn=!0,e.memoizedState=r):(e=Jg(),ge.lanes|=e,ls|=e,i)}function tg(e,i,r,l,h){var m=H.p;H.p=m!==0&&8>m?m:8;var S=z.T,C={};z.T=C,ef(e,!1,i,r);try{var G=h(),it=z.S;if(it!==null&&it(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=Gy(G,l);Wo(e,i,mt,Ei(e))}else Wo(e,i,l,Ei(e))}catch(Mt){Wo(e,i,{then:function(){},status:"rejected",reason:Mt},Ei())}finally{H.p=m,S!==null&&C.types!==null&&(S.types=C.types),z.T=S}}function Yy(){}function Jh(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=eg(e).queue;tg(e,h,i,J,r===null?Yy:function(){return ng(e),r(l)})}function eg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:J},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function ng(e){var i=eg(e);i.next===null&&(i=e.alternate.memoizedState),Wo(e,i.next.queue,{},Ei())}function tf(){return Hn(ol)}function ig(){return vn().memoizedState}function ag(){return vn().memoizedState}function Zy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Ei();e=ns(r);var l=is(i,e,r);l!==null&&(ui(l,i,r),zo(l,i,r)),i={cache:Ch()},e.payload=i;return}i=i.return}}function Ky(e,i,r){var l=Ei();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},_c(e)?rg(i,r):(r=_h(e,i,r,l),r!==null&&(ui(r,e,l),og(r,i,l)))}function sg(e,i,r){var l=Ei();Wo(e,i,r,l)}function Wo(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(_c(e))rg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var S=i.lastRenderedState,C=m(S,r);if(h.hasEagerState=!0,h.eagerState=C,_i(C,S))return $l(e,i,h,0),Qe===null&&Ql(),!1}catch{}if(r=_h(e,i,h,l),r!==null)return ui(r,e,l),og(r,i,l),!0}return!1}function ef(e,i,r,l){if(l={lane:2,revertLane:Pf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_c(e)){if(i)throw Error(a(479))}else i=_h(e,r,l,2),i!==null&&ui(i,e,2)}function _c(e){var i=e.alternate;return e===ge||i!==null&&i===ge}function rg(e,i){wr=hc=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function og(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,pi(e,r)}}var Xo={readContext:Hn,use:pc,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};Xo.useEffectEvent=pn;var lg={readContext:Hn,use:pc,useCallback:function(e,i){return Jn().memoizedState=[e,i===void 0?null:i],e},useContext:Hn,useEffect:Xm,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,gc(4194308,4,Km.bind(null,i,e),r)},useLayoutEffect:function(e,i){return gc(4194308,4,e,i)},useInsertionEffect:function(e,i){gc(4,2,e,i)},useMemo:function(e,i){var r=Jn();i=i===void 0?null:i;var l=e();if(Xs){Rt(!0);try{e()}finally{Rt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Jn();if(r!==void 0){var h=r(i);if(Xs){Rt(!0);try{r(i)}finally{Rt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Ky.bind(null,ge,e),[l.memoizedState,e]},useRef:function(e){var i=Jn();return e={current:e},i.memoizedState=e},useState:function(e){e=Zh(e);var i=e.queue,r=sg.bind(null,ge,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Qh,useDeferredValue:function(e,i){var r=Jn();return $h(r,e,i)},useTransition:function(){var e=Zh(!1);return e=tg.bind(null,ge,e.queue,!0,!1),Jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=ge,h=Jn();if(De){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Qe===null)throw Error(a(349));(Ae&127)!==0||Cm(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,Xm(Um.bind(null,l,m,e),[e]),l.flags|=2048,Cr(9,{destroy:void 0},Dm.bind(null,l,m,r,i),null),r},useId:function(){var e=Jn(),i=Qe.identifierPrefix;if(De){var r=sa,l=aa;r=(l&~(1<<32-zt(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=fc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Vy++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:tf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e){var i=Jn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=ef.bind(null,ge,!0,r),r.dispatch=i,[e,i]},useMemoCache:Xh,useCacheRefresh:function(){return Jn().memoizedState=Zy.bind(null,ge)},useEffectEvent:function(e){var i=Jn(),r={impl:e};return i.memoizedState=r,function(){if((Oe&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},nf={readContext:Hn,use:pc,useCallback:Qm,useContext:Hn,useEffect:jh,useImperativeHandle:jm,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:$m,useReducer:mc,useRef:Wm,useState:function(){return mc(Aa)},useDebugValue:Qh,useDeferredValue:function(e,i){var r=vn();return Jm(r,qe.memoizedState,e,i)},useTransition:function(){var e=mc(Aa)[0],i=vn().memoizedState;return[typeof e=="boolean"?e:ko(e),i]},useSyncExternalStore:Rm,useId:ig,useHostTransitionStatus:tf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,i){var r=vn();return Pm(r,qe,e,i)},useMemoCache:Xh,useCacheRefresh:ag};nf.useEffectEvent=qm;var cg={readContext:Hn,use:pc,useCallback:Qm,useContext:Hn,useEffect:jh,useImperativeHandle:jm,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:$m,useReducer:Yh,useRef:Wm,useState:function(){return Yh(Aa)},useDebugValue:Qh,useDeferredValue:function(e,i){var r=vn();return qe===null?$h(r,e,i):Jm(r,qe.memoizedState,e,i)},useTransition:function(){var e=Yh(Aa)[0],i=vn().memoizedState;return[typeof e=="boolean"?e:ko(e),i]},useSyncExternalStore:Rm,useId:ig,useHostTransitionStatus:tf,useFormState:km,useActionState:km,useOptimistic:function(e,i){var r=vn();return qe!==null?Pm(r,qe,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Xh,useCacheRefresh:ag};cg.useEffectEvent=qm;function af(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:v({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var sf={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=Ei(),h=ns(l);h.payload=i,r!=null&&(h.callback=r),i=is(e,h,l),i!==null&&(ui(i,e,l),zo(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=Ei(),h=ns(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=is(e,h,l),i!==null&&(ui(i,e,l),zo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Ei(),l=ns(r);l.tag=2,i!=null&&(l.callback=i),i=is(e,l,r),i!==null&&(ui(i,e,r),zo(i,e,r))}};function ug(e,i,r,l,h,m,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,S):i.prototype&&i.prototype.isPureReactComponent?!Uo(r,l)||!Uo(h,m):!0}function hg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&sf.enqueueReplaceState(i,i.state,null)}function qs(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=v({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function fg(e){jl(e)}function dg(e){console.error(e)}function pg(e){jl(e)}function xc(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function mg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function rf(e,i,r){return r=ns(r),r.tag=3,r.payload={element:null},r.callback=function(){xc(e,i)},r}function gg(e){return e=ns(e),e.tag=3,e}function vg(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){mg(i,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){mg(i,r,l),typeof h!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function jy(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Mr(i,r,h,!0),r=yi.current,r!==null){switch(r.tag){case 31:case 13:return Fi===null?Uc():r.alternate===null&&mn===0&&(mn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===rc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Uf(e,l,h)),!1;case 22:return r.flags|=65536,l===rc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Uf(e,l,h)),!1}throw Error(a(435,r.tag))}return Uf(e,l,h),Uc(),!1}if(De)return i=yi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Eh&&(e=Error(a(422),{cause:l}),Po(Li(e,r)))):(l!==Eh&&(i=Error(a(423),{cause:l}),Po(Li(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Li(l,r),h=rf(e.stateNode,l,h),Oh(e,h),mn!==4&&(mn=2)),!1;var m=Error(a(520),{cause:l});if(m=Li(m,r),Jo===null?Jo=[m]:Jo.push(m),mn!==4&&(mn=2),i===null)return!0;l=Li(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=rf(r.stateNode,l,e),Oh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(cs===null||!cs.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=gg(h),vg(h,e,r,l),Oh(r,h),!1}r=r.return}while(r!==null);return!1}var of=Error(a(461)),Sn=!1;function Gn(e,i,r,l){i.child=e===null?Mm(i,null,r,l):Ws(i,e.child,r,l)}function _g(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return Hs(i),l=Gh(e,i,r,S,m,h),C=Vh(),e!==null&&!Sn?(kh(e,i,h),wa(e,i,h)):(De&&C&&Sh(i),i.flags|=1,Gn(e,i,l,h),i.child)}function xg(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!xh(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,yg(e,i,m,l,h)):(e=tc(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!mf(e,h)){var S=m.memoizedProps;if(r=r.compare,r=r!==null?r:Uo,r(S,l)&&e.ref===i.ref)return wa(e,i,h)}return i.flags|=1,e=Ma(m,l),e.ref=i.ref,e.return=i,i.child=e}function yg(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if(Uo(m,l)&&e.ref===i.ref)if(Sn=!1,i.pendingProps=l=m,mf(e,h))(e.flags&131072)!==0&&(Sn=!0);else return i.lanes=e.lanes,wa(e,i,h)}return lf(e,i,r,l,h)}function Mg(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return Sg(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ac(i,m!==null?m.cachePool:null),m!==null?Em(i,m):Fh(),Tm(i);else return l=i.lanes=536870912,Sg(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(ac(i,m.cachePool),Em(i,m),ss(),i.memoizedState=null):(e!==null&&ac(i,null),Fh(),ss());return Gn(e,i,h,r),i.child}function qo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Sg(e,i,r,l,h){var m=Uh();return m=m===null?null:{parent:yn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&ac(i,null),Fh(),Tm(i),e!==null&&Mr(e,i,l,!0),i.childLanes=h,null}function yc(e,i){return i=Sc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function bg(e,i,r){return Ws(i,e.child,null,r),e=yc(i,i.pendingProps),e.flags|=2,Mi(i),i.memoizedState=null,e}function Qy(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(De){if(l.mode==="hidden")return e=yc(i,l),i.lanes=536870912,qo(null,e);if(zh(i),(e=nn)?(e=Ov(e,Ii),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},r=rm(e),r.return=i,i.child=r,zn=i,nn=null)):e=null,e===null)throw Ja(i);return i.lanes=536870912,null}return yc(i,l)}var m=e.memoizedState;if(m!==null){var S=m.dehydrated;if(zh(i),h)if(i.flags&256)i.flags&=-257,i=bg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Sn||Mr(e,i,r,!1),h=(r&e.childLanes)!==0,Sn||h){if(l=Qe,l!==null&&(S=mi(l,r),S!==0&&S!==m.retryLane))throw m.retryLane=S,Is(e,S),ui(l,e,S),of;Uc(),i=bg(e,i,r)}else e=m.treeContext,nn=Bi(S.nextSibling),zn=i,De=!0,$a=null,Ii=!1,e!==null&&cm(i,e),i=yc(i,l),i.flags|=4096;return i}return e=Ma(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Mc(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function lf(e,i,r,l,h){return Hs(i),r=Gh(e,i,r,l,void 0,h),l=Vh(),e!==null&&!Sn?(kh(e,i,h),wa(e,i,h)):(De&&l&&Sh(i),i.flags|=1,Gn(e,i,r,h),i.child)}function Eg(e,i,r,l,h,m){return Hs(i),i.updateQueue=null,r=wm(i,l,r,h),Am(e),l=Vh(),e!==null&&!Sn?(kh(e,i,m),wa(e,i,m)):(De&&l&&Sh(i),i.flags|=1,Gn(e,i,r,m),i.child)}function Tg(e,i,r,l,h){if(Hs(i),i.stateNode===null){var m=vr,S=r.contextType;typeof S=="object"&&S!==null&&(m=Hn(S)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=sf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Lh(i),S=r.contextType,m.context=typeof S=="object"&&S!==null?Hn(S):vr,m.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(af(i,r,S,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&sf.enqueueReplaceState(m,m.state,null),Go(i,l,m,h),Ho(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var C=i.memoizedProps,G=qs(r,C);m.props=G;var it=m.context,mt=r.contextType;S=vr,typeof mt=="object"&&mt!==null&&(S=Hn(mt));var Mt=r.getDerivedStateFromProps;mt=typeof Mt=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,mt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||it!==S)&&hg(i,m,l,S),es=!1;var ot=i.memoizedState;m.state=ot,Go(i,l,m,h),Ho(),it=i.memoizedState,C||ot!==it||es?(typeof Mt=="function"&&(af(i,r,Mt,l),it=i.memoizedState),(G=es||ug(i,r,G,l,ot,it,S))?(mt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=it),m.props=l,m.state=it,m.context=S,l=G):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Ph(e,i),S=i.memoizedProps,mt=qs(r,S),m.props=mt,Mt=i.pendingProps,ot=m.context,it=r.contextType,G=vr,typeof it=="object"&&it!==null&&(G=Hn(it)),C=r.getDerivedStateFromProps,(it=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==Mt||ot!==G)&&hg(i,m,l,G),es=!1,ot=i.memoizedState,m.state=ot,Go(i,l,m,h),Ho();var ct=i.memoizedState;S!==Mt||ot!==ct||es||e!==null&&e.dependencies!==null&&nc(e.dependencies)?(typeof C=="function"&&(af(i,r,C,l),ct=i.memoizedState),(mt=es||ug(i,r,mt,l,ot,ct,G)||e!==null&&e.dependencies!==null&&nc(e.dependencies))?(it||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ct,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ct,G)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ct),m.props=l,m.state=ct,m.context=G,l=mt):(typeof m.componentDidUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,Mc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Ws(i,e.child,null,h),i.child=Ws(i,null,r,h)):Gn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=wa(e,i,h),e}function Ag(e,i,r,l){return Bs(),i.flags|=256,Gn(e,i,r,l),i.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(e){return{baseLanes:e,cachePool:mm()}}function hf(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=bi),e}function wg(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,S;if((S=m)||(S=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),S&&(h=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(De){if(h?as(i):ss(),(e=nn)?(e=Ov(e,Ii),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},r=rm(e),r.return=i,i.child=r,zn=i,nn=null)):e=null,e===null)throw Ja(i);return Yf(e)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,h?(ss(),h=i.mode,C=Sc({mode:"hidden",children:C},h),l=Fs(l,h,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=uf(r),l.childLanes=hf(e,S,r),i.memoizedState=cf,qo(null,l)):(as(i),ff(i,C))}var G=e.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(m)i.flags&256?(as(i),i.flags&=-257,i=df(e,i,r)):i.memoizedState!==null?(ss(),i.child=e.child,i.flags|=128,i=null):(ss(),C=l.fallback,h=i.mode,l=Sc({mode:"visible",children:l.children},h),C=Fs(C,h,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Ws(i,e.child,null,r),l=i.child,l.memoizedState=uf(r),l.childLanes=hf(e,S,r),i.memoizedState=cf,i=qo(null,l));else if(as(i),Yf(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var it=S.dgst;S=it,l=Error(a(419)),l.stack="",l.digest=S,Po({value:l,source:null,stack:null}),i=df(e,i,r)}else if(Sn||Mr(e,i,r,!1),S=(r&e.childLanes)!==0,Sn||S){if(S=Qe,S!==null&&(l=mi(S,r),l!==0&&l!==G.retryLane))throw G.retryLane=l,Is(e,l),ui(S,e,l),of;qf(C)||Uc(),i=df(e,i,r)}else qf(C)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,nn=Bi(C.nextSibling),zn=i,De=!0,$a=null,Ii=!1,e!==null&&cm(i,e),i=ff(i,l.children),i.flags|=4096);return i}return h?(ss(),C=l.fallback,h=i.mode,G=e.child,it=G.sibling,l=Ma(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,it!==null?C=Ma(it,C):(C=Fs(C,h,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,qo(null,l),l=i.child,C=e.child.memoizedState,C===null?C=uf(r):(h=C.cachePool,h!==null?(G=yn._currentValue,h=h.parent!==G?{parent:G,pool:G}:h):h=mm(),C={baseLanes:C.baseLanes|r,cachePool:h}),l.memoizedState=C,l.childLanes=hf(e,S,r),i.memoizedState=cf,qo(e.child,l)):(as(i),r=e.child,e=r.sibling,r=Ma(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=r,i.memoizedState=null,r)}function ff(e,i){return i=Sc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Sc(e,i){return e=xi(22,e,null,i),e.lanes=0,e}function df(e,i,r){return Ws(i,e.child,null,r),e=ff(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Rg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),wh(e.return,i,r)}function pf(e,i,r,l,h,m){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=h,S.treeForkCount=m)}function Cg(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var S=gn.current,C=(S&2)!==0;if(C?(S=S&1|2,i.flags|=128):S&=1,_t(gn,S),Gn(e,i,l,r),l=De?Lo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rg(e,r,i);else if(e.tag===19)Rg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&uc(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),pf(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&uc(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}pf(i,!0,r,null,m,l);break;case"together":pf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function wa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),ls|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Mr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Ma(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Ma(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function mf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&nc(e)))}function $y(e,i,r){switch(i.tag){case 3:yt(i,i.stateNode.containerInfo),ts(i,yn,e.memoizedState.cache),Bs();break;case 27:case 5:te(i);break;case 4:yt(i,i.stateNode.containerInfo);break;case 10:ts(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,zh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(as(i),i.flags|=128,null):(r&i.child.childLanes)!==0?wg(e,i,r):(as(i),e=wa(e,i,r),e!==null?e.sibling:null);as(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Mr(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return Cg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),_t(gn,gn.current),l)break;return null;case 22:return i.lanes=0,Mg(e,i,r,i.pendingProps);case 24:ts(i,yn,e.memoizedState.cache)}return wa(e,i,r)}function Dg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)Sn=!0;else{if(!mf(e,r)&&(i.flags&128)===0)return Sn=!1,$y(e,i,r);Sn=(e.flags&131072)!==0}else Sn=!1,De&&(i.flags&1048576)!==0&&lm(i,Lo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Vs(i.elementType),i.type=e,typeof e=="function")xh(e)?(l=qs(e,l),i.tag=1,i=Tg(null,i,e,l,r)):(i.tag=0,i=lf(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===w){i.tag=11,i=_g(null,i,e,l,r);break t}else if(h===B){i.tag=14,i=xg(null,i,e,l,r);break t}}throw i=ht(e)||e,Error(a(306,i,""))}}return i;case 0:return lf(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=qs(l,i.pendingProps),Tg(e,i,l,h,r);case 3:t:{if(yt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,Ph(e,i),Go(i,l,null,r);var S=i.memoizedState;if(l=S.cache,ts(i,yn,l),l!==m.cache&&Rh(i,[yn],r,!0),Ho(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Ag(e,i,l,r);break t}else if(l!==h){h=Li(Error(a(424)),i),Po(h),i=Ag(e,i,l,r);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,nn=Bi(e.firstChild),zn=i,De=!0,$a=null,Ii=!0,r=Mm(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bs(),l===h){i=wa(e,i,r);break t}Gn(e,i,l,r)}i=i.child}return i;case 26:return Mc(e,i),e===null?(r=Gv(i.type,null,i.pendingProps,null))?i.memoizedState=r:De||(r=i.type,e=i.pendingProps,l=Bc(tt.current).createElement(r),l[_n]=i,l[Bn]=e,Vn(l,r,e),xn(l),i.stateNode=l):i.memoizedState=Gv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return te(i),e===null&&De&&(l=i.stateNode=Bv(i.type,i.pendingProps,tt.current),zn=i,Ii=!0,h=nn,ds(i.type)?(Zf=h,nn=Bi(l.firstChild)):nn=h),Gn(e,i,i.pendingProps.children,r),Mc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&De&&((h=l=nn)&&(l=RM(l,i.type,i.pendingProps,Ii),l!==null?(i.stateNode=l,zn=i,nn=Bi(l.firstChild),Ii=!1,h=!0):h=!1),h||Ja(i)),te(i),h=i.type,m=i.pendingProps,S=e!==null?e.memoizedProps:null,l=m.children,kf(h,m)?l=null:S!==null&&kf(h,S)&&(i.flags|=32),i.memoizedState!==null&&(h=Gh(e,i,ky,null,null,r),ol._currentValue=h),Mc(e,i),Gn(e,i,l,r),i.child;case 6:return e===null&&De&&((e=r=nn)&&(r=CM(r,i.pendingProps,Ii),r!==null?(i.stateNode=r,zn=i,nn=null,e=!0):e=!1),e||Ja(i)),null;case 13:return wg(e,i,r);case 4:return yt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ws(i,null,l,r):Gn(e,i,l,r),i.child;case 11:return _g(e,i,i.type,i.pendingProps,r);case 7:return Gn(e,i,i.pendingProps,r),i.child;case 8:return Gn(e,i,i.pendingProps.children,r),i.child;case 12:return Gn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,ts(i,i.type,l.value),Gn(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Hs(i),h=Hn(h),l=l(h),i.flags|=1,Gn(e,i,l,r),i.child;case 14:return xg(e,i,i.type,i.pendingProps,r);case 15:return yg(e,i,i.type,i.pendingProps,r);case 19:return Cg(e,i,r);case 31:return Qy(e,i,r);case 22:return Mg(e,i,r,i.pendingProps);case 24:return Hs(i),l=Hn(yn),e===null?(h=Uh(),h===null&&(h=Qe,m=Ch(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},Lh(i),ts(i,yn,h)):((e.lanes&r)!==0&&(Ph(e,i),Go(i,null,null,r),Ho()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ts(i,yn,l)):(l=m.cache,ts(i,yn,l),l!==h.cache&&Rh(i,[yn],r,!0))),Gn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ra(e){e.flags|=4}function gf(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(iv())e.flags|=8192;else throw ks=rc,Nh}else e.flags&=-16777217}function Ug(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qv(i))if(iv())e.flags|=8192;else throw ks=rc,Nh}function bc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?bt():536870912,e.lanes|=i,Lr|=i)}function Yo(e,i){if(!De)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function an(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function Jy(e,i,r){var l=i.pendingProps;switch(bh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return an(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ea(yn),Ht(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yr(i)?Ra(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Th())),an(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Ra(i),m!==null?(an(i),Ug(i,m)):(an(i),gf(i,h,null,l,r))):m?m!==e.memoizedState?(Ra(i),an(i),Ug(i,m)):(an(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ra(i),an(i),gf(i,h,e,l,r)),null;case 27:if(Kt(i),r=tt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ra(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return an(i),null}e=Et.current,yr(i)?um(i):(e=Bv(h,l,r),i.stateNode=e,Ra(i))}return an(i),null;case 5:if(Kt(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ra(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return an(i),null}if(m=Et.current,yr(i))um(i);else{var S=Bc(tt.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(h,{is:l.is}):S.createElement(h)}}m[_n]=i,m[Bn]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=m;t:switch(Vn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ra(i)}}return an(i),gf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ra(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=tt.current,yr(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=zn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_n]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||wv(e.nodeValue,r)),e||Ja(i,!0)}else e=Bc(e).createTextNode(l),e[_n]=i,i.stateNode=e}return an(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=yr(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[_n]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),e=!1}else r=Th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(Mi(i),i):(Mi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return an(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=yr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[_n]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),h=!1}else h=Th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Mi(i),i):(Mi(i),null)}return Mi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),bc(i,i.updateQueue),an(i),null);case 4:return Ht(),e===null&&Bf(i.stateNode.containerInfo),an(i),null;case 10:return Ea(i.type),an(i),null;case 19:if(K(gn),l=i.memoizedState,l===null)return an(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Yo(l,!1);else{if(mn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=uc(e),m!==null){for(i.flags|=128,Yo(l,!1),e=m.updateQueue,i.updateQueue=e,bc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)sm(r,e),r=r.sibling;return _t(gn,gn.current&1|2),De&&Sa(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&Xt()>Rc&&(i.flags|=128,h=!0,Yo(l,!1),i.lanes=4194304)}else{if(!h)if(e=uc(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,bc(i,e),Yo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!De)return an(i),null}else 2*Xt()-l.renderingStartTime>Rc&&r!==536870912&&(i.flags|=128,h=!0,Yo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Xt(),e.sibling=null,r=gn.current,_t(gn,h?r&1|2:r&1),De&&Sa(i,l.treeForkCount),e):(an(i),null);case 22:case 23:return Mi(i),Bh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),r=i.updateQueue,r!==null&&bc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&K(Gs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Ea(yn),an(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function tM(e,i){switch(bh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ea(yn),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Kt(i),null;case 31:if(i.memoizedState!==null){if(Mi(i),i.alternate===null)throw Error(a(340));Bs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Mi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Bs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return K(gn),null;case 4:return Ht(),null;case 10:return Ea(i.type),null;case 22:case 23:return Mi(i),Bh(),e!==null&&K(Gs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ea(yn),null;case 25:return null;default:return null}}function Ng(e,i){switch(bh(i),i.tag){case 3:Ea(yn),Ht();break;case 26:case 27:case 5:Kt(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&Mi(i);break;case 13:Mi(i);break;case 19:K(gn);break;case 10:Ea(i.type);break;case 22:case 23:Mi(i),Bh(),e!==null&&K(Gs);break;case 24:Ea(yn)}}function Zo(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,S=r.inst;l=m(),S.destroy=l}r=r.next}while(r!==h)}}catch(C){Xe(i,i.return,C)}}function rs(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,h=i;var G=r,it=C;try{it()}catch(mt){Xe(h,G,mt)}}}l=l.next}while(l!==m)}}catch(mt){Xe(i,i.return,mt)}}function Lg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{bm(i,r)}catch(l){Xe(e,e.return,l)}}}function Pg(e,i,r){r.props=qs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Xe(e,i,l)}}function Ko(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){Xe(e,i,h)}}function ra(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){Xe(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Xe(e,i,h)}else r.current=null}function Og(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){Xe(e,e.return,h)}}function vf(e,i,r){try{var l=e.stateNode;SM(l,e.type,r,i),l[Bn]=i}catch(h){Xe(e,e.return,h)}}function Ig(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ds(e.type)||e.tag===4}function _f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ds(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xf(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=xa));else if(l!==4&&(l===27&&ds(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(xf(e,i,r),e=e.sibling;e!==null;)xf(e,i,r),e=e.sibling}function Ec(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&ds(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ec(e,i,r),e=e.sibling;e!==null;)Ec(e,i,r),e=e.sibling}function Fg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Vn(i,l,r),i[_n]=e,i[Bn]=r}catch(m){Xe(e,e.return,m)}}var Ca=!1,bn=!1,yf=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,Pn=null;function eM(e,i){if(e=e.containerInfo,Gf=Xc,e=jp(e),fh(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var S=0,C=-1,G=-1,it=0,mt=0,Mt=e,ot=null;e:for(;;){for(var ct;Mt!==r||h!==0&&Mt.nodeType!==3||(C=S+h),Mt!==m||l!==0&&Mt.nodeType!==3||(G=S+l),Mt.nodeType===3&&(S+=Mt.nodeValue.length),(ct=Mt.firstChild)!==null;)ot=Mt,Mt=ct;for(;;){if(Mt===e)break e;if(ot===r&&++it===h&&(C=S),ot===m&&++mt===l&&(G=S),(ct=Mt.nextSibling)!==null)break;Mt=ot,ot=Mt.parentNode}Mt=ct}r=C===-1||G===-1?null:{start:C,end:G}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vf={focusedElem:e,selectionRange:r},Xc=!1,Pn=i;Pn!==null;)if(i=Pn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Pn=e;else for(;Pn!==null;){switch(i=Pn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Yt=qs(r.type,h);e=l.getSnapshotBeforeUpdate(Yt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(re){Xe(r,r.return,re)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)Xf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Pn=e;break}Pn=i.return}}function zg(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ua(e,r),l&4&&Zo(5,r);break;case 1:if(Ua(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(S){Xe(r,r.return,S)}else{var h=qs(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Xe(r,r.return,S)}}l&64&&Lg(r),l&512&&Ko(r,r.return);break;case 3:if(Ua(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{bm(e,i)}catch(S){Xe(r,r.return,S)}}break;case 27:i===null&&l&4&&Fg(r);case 26:case 5:Ua(e,r),i===null&&l&4&&Og(r),l&512&&Ko(r,r.return);break;case 12:Ua(e,r);break;case 31:Ua(e,r),l&4&&Vg(e,r);break;case 13:Ua(e,r),l&4&&kg(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=uM.bind(null,r),DM(e,r))));break;case 22:if(l=r.memoizedState!==null||Ca,!l){i=i!==null&&i.memoizedState!==null||bn,h=Ca;var m=bn;Ca=l,(bn=i)&&!m?Na(e,r,(r.subtreeFlags&8772)!==0):Ua(e,r),Ca=h,bn=m}break;case 30:break;default:Ua(e,r)}}function Hg(e){var i=e.alternate;i!==null&&(e.alternate=null,Hg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ya(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fn=null,ri=!1;function Da(e,i,r){for(r=r.child;r!==null;)Gg(e,i,r),r=r.sibling}function Gg(e,i,r){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(dt,r)}catch{}switch(r.tag){case 26:bn||ra(r,i),Da(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:bn||ra(r,i);var l=fn,h=ri;ds(r.type)&&(fn=r.stateNode,ri=!1),Da(e,i,r),al(r.stateNode),fn=l,ri=h;break;case 5:bn||ra(r,i);case 6:if(l=fn,h=ri,fn=null,Da(e,i,r),fn=l,ri=h,fn!==null)if(ri)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(r.stateNode)}catch(m){Xe(r,i,m)}else try{fn.removeChild(r.stateNode)}catch(m){Xe(r,i,m)}break;case 18:fn!==null&&(ri?(e=fn,Lv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Gr(e)):Lv(fn,r.stateNode));break;case 4:l=fn,h=ri,fn=r.stateNode.containerInfo,ri=!0,Da(e,i,r),fn=l,ri=h;break;case 0:case 11:case 14:case 15:rs(2,r,i),bn||rs(4,r,i),Da(e,i,r);break;case 1:bn||(ra(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Pg(r,i,l)),Da(e,i,r);break;case 21:Da(e,i,r);break;case 22:bn=(l=bn)||r.memoizedState!==null,Da(e,i,r),bn=l;break;default:Da(e,i,r)}}function Vg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gr(e)}catch(r){Xe(i,i.return,r)}}}function kg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gr(e)}catch(r){Xe(i,i.return,r)}}function nM(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Bg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Bg),i;default:throw Error(a(435,e.tag))}}function Tc(e,i){var r=nM(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=hM.bind(null,e,l);l.then(h,h)}})}function oi(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,S=i,C=S;t:for(;C!==null;){switch(C.tag){case 27:if(ds(C.type)){fn=C.stateNode,ri=!1;break t}break;case 5:fn=C.stateNode,ri=!1;break t;case 3:case 4:fn=C.stateNode.containerInfo,ri=!0;break t}C=C.return}if(fn===null)throw Error(a(160));Gg(m,S,h),fn=null,ri=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Wg(i,e),i=i.sibling}var qi=null;function Wg(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oi(i,e),li(e),l&4&&(rs(3,e,e.return),Zo(3,e),rs(5,e,e.return));break;case 1:oi(i,e),li(e),l&512&&(bn||r===null||ra(r,r.return)),l&64&&Ca&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=qi;if(oi(i,e),li(e),l&512&&(bn||r===null||ra(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[qa]||m[_n]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Vn(m,l,r),m[_n]=e,xn(m),l=m;break t;case"link":var S=Wv("link","href",h).get(l+(r.href||""));if(S){for(var C=0;C<S.length;C++)if(m=S[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(C,1);break e}}m=h.createElement(l),Vn(m,l,r),h.head.appendChild(m);break;case"meta":if(S=Wv("meta","content",h).get(l+(r.content||""))){for(C=0;C<S.length;C++)if(m=S[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(C,1);break e}}m=h.createElement(l),Vn(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[_n]=e,xn(m),l=m}e.stateNode=l}else Xv(h,e.type,e.stateNode);else e.stateNode=kv(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?Xv(h,e.type,e.stateNode):kv(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&vf(e,e.memoizedProps,r.memoizedProps)}break;case 27:oi(i,e),li(e),l&512&&(bn||r===null||ra(r,r.return)),r!==null&&l&4&&vf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(oi(i,e),li(e),l&512&&(bn||r===null||ra(r,r.return)),e.flags&32){h=e.stateNode;try{vi(h,"")}catch(Yt){Xe(e,e.return,Yt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,vf(e,h,r!==null?r.memoizedProps:h)),l&1024&&(yf=!0);break;case 6:if(oi(i,e),li(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Yt){Xe(e,e.return,Yt)}}break;case 3:if(Gc=null,h=qi,qi=zc(i.containerInfo),oi(i,e),qi=h,li(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Gr(i.containerInfo)}catch(Yt){Xe(e,e.return,Yt)}yf&&(yf=!1,Xg(e));break;case 4:l=qi,qi=zc(e.stateNode.containerInfo),oi(i,e),li(e),qi=l;break;case 12:oi(i,e),li(e);break;case 31:oi(i,e),li(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tc(e,l)));break;case 13:oi(i,e),li(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(wc=Xt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tc(e,l)));break;case 22:h=e.memoizedState!==null;var G=r!==null&&r.memoizedState!==null,it=Ca,mt=bn;if(Ca=it||h,bn=mt||G,oi(i,e),bn=mt,Ca=it,li(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||G||Ca||bn||Ys(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){G=r=i;try{if(m=G.stateNode,h)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=G.stateNode;var Mt=G.memoizedProps.style,ot=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;C.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Yt){Xe(G,G.return,Yt)}}}else if(i.tag===6){if(r===null){G=i;try{G.stateNode.nodeValue=h?"":G.memoizedProps}catch(Yt){Xe(G,G.return,Yt)}}}else if(i.tag===18){if(r===null){G=i;try{var ct=G.stateNode;h?Pv(ct,!0):Pv(G.stateNode,!1)}catch(Yt){Xe(G,G.return,Yt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Tc(e,r))));break;case 19:oi(i,e),li(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tc(e,l)));break;case 30:break;case 21:break;default:oi(i,e),li(e)}}function li(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Ig(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=_f(e);Ec(e,m,h);break;case 5:var S=r.stateNode;r.flags&32&&(vi(S,""),r.flags&=-33);var C=_f(e);Ec(e,C,S);break;case 3:case 4:var G=r.stateNode.containerInfo,it=_f(e);xf(e,it,G);break;default:throw Error(a(161))}}catch(mt){Xe(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Xg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ua(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)zg(e,i.alternate,i),i=i.sibling}function Ys(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:rs(4,i,i.return),Ys(i);break;case 1:ra(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Pg(i,i.return,r),Ys(i);break;case 27:al(i.stateNode);case 26:case 5:ra(i,i.return),Ys(i);break;case 22:i.memoizedState===null&&Ys(i);break;case 30:Ys(i);break;default:Ys(i)}e=e.sibling}}function Na(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,S=m.flags;switch(m.tag){case 0:case 11:case 15:Na(h,m,r),Zo(4,m);break;case 1:if(Na(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(it){Xe(l,l.return,it)}if(l=m,h=l.updateQueue,h!==null){var C=l.stateNode;try{var G=h.shared.hiddenCallbacks;if(G!==null)for(h.shared.hiddenCallbacks=null,h=0;h<G.length;h++)Sm(G[h],C)}catch(it){Xe(l,l.return,it)}}r&&S&64&&Lg(m),Ko(m,m.return);break;case 27:Fg(m);case 26:case 5:Na(h,m,r),r&&l===null&&S&4&&Og(m),Ko(m,m.return);break;case 12:Na(h,m,r);break;case 31:Na(h,m,r),r&&S&4&&Vg(h,m);break;case 13:Na(h,m,r),r&&S&4&&kg(h,m);break;case 22:m.memoizedState===null&&Na(h,m,r),Ko(m,m.return);break;case 30:break;default:Na(h,m,r)}i=i.sibling}}function Mf(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Oo(r))}function Sf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Oo(e))}function Yi(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)qg(e,i,r,l),i=i.sibling}function qg(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Yi(e,i,r,l),h&2048&&Zo(9,i);break;case 1:Yi(e,i,r,l);break;case 3:Yi(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Oo(e)));break;case 12:if(h&2048){Yi(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,S=m.id,C=m.onPostCommit;typeof C=="function"&&C(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Xe(i,i.return,G)}}else Yi(e,i,r,l);break;case 31:Yi(e,i,r,l);break;case 13:Yi(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,S=i.alternate,i.memoizedState!==null?m._visibility&2?Yi(e,i,r,l):jo(e,i):m._visibility&2?Yi(e,i,r,l):(m._visibility|=2,Dr(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Mf(S,i);break;case 24:Yi(e,i,r,l),h&2048&&Sf(i.alternate,i);break;default:Yi(e,i,r,l)}}function Dr(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,S=i,C=r,G=l,it=S.flags;switch(S.tag){case 0:case 11:case 15:Dr(m,S,C,G,h),Zo(8,S);break;case 23:break;case 22:var mt=S.stateNode;S.memoizedState!==null?mt._visibility&2?Dr(m,S,C,G,h):jo(m,S):(mt._visibility|=2,Dr(m,S,C,G,h)),h&&it&2048&&Mf(S.alternate,S);break;case 24:Dr(m,S,C,G,h),h&&it&2048&&Sf(S.alternate,S);break;default:Dr(m,S,C,G,h)}i=i.sibling}}function jo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:jo(r,l),h&2048&&Mf(l.alternate,l);break;case 24:jo(r,l),h&2048&&Sf(l.alternate,l);break;default:jo(r,l)}i=i.sibling}}var Qo=8192;function Ur(e,i,r){if(e.subtreeFlags&Qo)for(e=e.child;e!==null;)Yg(e,i,r),e=e.sibling}function Yg(e,i,r){switch(e.tag){case 26:Ur(e,i,r),e.flags&Qo&&e.memoizedState!==null&&VM(r,qi,e.memoizedState,e.memoizedProps);break;case 5:Ur(e,i,r);break;case 3:case 4:var l=qi;qi=zc(e.stateNode.containerInfo),Ur(e,i,r),qi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Qo,Qo=16777216,Ur(e,i,r),Qo=l):Ur(e,i,r));break;default:Ur(e,i,r)}}function Zg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function $o(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Pn=l,jg(l,e)}Zg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kg(e),e=e.sibling}function Kg(e){switch(e.tag){case 0:case 11:case 15:$o(e),e.flags&2048&&rs(9,e,e.return);break;case 3:$o(e);break;case 12:$o(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Ac(e)):$o(e);break;default:$o(e)}}function Ac(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Pn=l,jg(l,e)}Zg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:rs(8,i,i.return),Ac(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Ac(i));break;default:Ac(i)}e=e.sibling}}function jg(e,i){for(;Pn!==null;){var r=Pn;switch(r.tag){case 0:case 11:case 15:rs(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Oo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Pn=l;else t:for(r=e;Pn!==null;){l=Pn;var h=l.sibling,m=l.return;if(Hg(l),l===r){Pn=null;break t}if(h!==null){h.return=m,Pn=h;break t}Pn=m}}}var iM={getCacheForType:function(e){var i=Hn(yn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Hn(yn).controller.signal}},aM=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Qe=null,Ee=null,Ae=0,We=0,Si=null,os=!1,Nr=!1,bf=!1,La=0,mn=0,ls=0,Zs=0,Ef=0,bi=0,Lr=0,Jo=null,ci=null,Tf=!1,wc=0,Qg=0,Rc=1/0,Cc=null,cs=null,Rn=0,us=null,Pr=null,Pa=0,Af=0,wf=null,$g=null,tl=0,Rf=null;function Ei(){return(Oe&2)!==0&&Ae!==0?Ae&-Ae:z.T!==null?Pf():bo()}function Jg(){if(bi===0)if((Ae&536870912)===0||De){var e=ce;ce<<=1,(ce&3932160)===0&&(ce=262144),bi=e}else bi=536870912;return e=yi.current,e!==null&&(e.flags|=32),bi}function ui(e,i,r){(e===Qe&&(We===2||We===9)||e.cancelPendingCommit!==null)&&(Or(e,0),hs(e,Ae,bi,!1)),kt(e,r),((Oe&2)===0||e!==Qe)&&(e===Qe&&((Oe&2)===0&&(Zs|=r),mn===4&&hs(e,Ae,bi,!1)),oa(e))}function tv(e,i,r){if((Oe&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Dt(e,i),h=l?oM(e,i):Df(e,i,!0),m=l;do{if(h===0){Nr&&!l&&hs(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!sM(r)){h=Df(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var C=e;h=Jo;var G=C.current.memoizedState.isDehydrated;if(G&&(Or(C,S).flags|=256),S=Df(C,S,!1),S!==2){if(bf&&!G){C.errorRecoveryDisabledLanes|=m,Zs|=m,h=4;break t}m=ci,ci=h,m!==null&&(ci===null?ci=m:ci.push.apply(ci,m))}h=S}if(m=!1,h!==2)continue}}if(h===1){Or(e,0),hs(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:hs(l,i,bi,!os);break t;case 2:ci=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=wc+300-Xt(),10<h)){if(hs(l,i,bi,!os),gt(l,0,!0)!==0)break t;Pa=i,l.timeoutHandle=Uv(ev.bind(null,l,r,ci,Cc,Tf,i,bi,Zs,Lr,os,m,"Throttled",-0,0),h);break t}ev(l,r,ci,Cc,Tf,i,bi,Zs,Lr,os,m,null,-0,0)}}break}while(!0);oa(e)}function ev(e,i,r,l,h,m,S,C,G,it,mt,Mt,ot,ct){if(e.timeoutHandle=-1,Mt=i.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xa},Yg(i,m,Mt);var Yt=(m&62914560)===m?wc-Xt():(m&4194048)===m?Qg-Xt():0;if(Yt=kM(Mt,Yt),Yt!==null){Pa=m,e.cancelPendingCommit=Yt(cv.bind(null,e,i,m,r,l,h,S,C,G,mt,Mt,null,ot,ct)),hs(e,m,S,!it);return}}cv(e,i,m,r,l,h,S,C,G)}function sM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!_i(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hs(e,i,r,l){i&=~Ef,i&=~Zs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-zt(h),S=1<<m;l[m]=-1,h&=~S}r!==0&&He(e,r,i)}function Dc(){return(Oe&6)===0?(el(0),!1):!0}function Cf(){if(Ee!==null){if(We===0)var e=Ee.return;else e=Ee,ba=zs=null,Wh(e),Tr=null,Fo=0,e=Ee;for(;e!==null;)Ng(e.alternate,e),e=e.return;Ee=null}}function Or(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,TM(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Pa=0,Cf(),Qe=e,Ee=r=Ma(e.current,null),Ae=i,We=0,Si=null,os=!1,Nr=Dt(e,i),bf=!1,Lr=bi=Ef=Zs=ls=mn=0,ci=Jo=null,Tf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-zt(l),m=1<<h;i|=e[h],l&=~m}return La=i,Ql(),r}function nv(e,i){ge=null,z.H=Xo,i===Er||i===sc?(i=_m(),We=3):i===Nh?(i=_m(),We=4):We=i===of?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Si=i,Ee===null&&(mn=1,xc(e,Li(i,e.current)))}function iv(){var e=yi.current;return e===null?!0:(Ae&4194048)===Ae?Fi===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Fi:!1}function av(){var e=z.H;return z.H=Xo,e===null?Xo:e}function sv(){var e=z.A;return z.A=iM,e}function Uc(){mn=4,os||(Ae&4194048)!==Ae&&yi.current!==null||(Nr=!0),(ls&134217727)===0&&(Zs&134217727)===0||Qe===null||hs(Qe,Ae,bi,!1)}function Df(e,i,r){var l=Oe;Oe|=2;var h=av(),m=sv();(Qe!==e||Ae!==i)&&(Cc=null,Or(e,i)),i=!1;var S=mn;t:do try{if(We!==0&&Ee!==null){var C=Ee,G=Si;switch(We){case 8:Cf(),S=6;break t;case 3:case 2:case 9:case 6:yi.current===null&&(i=!0);var it=We;if(We=0,Si=null,Ir(e,C,G,it),r&&Nr){S=0;break t}break;default:it=We,We=0,Si=null,Ir(e,C,G,it)}}rM(),S=mn;break}catch(mt){nv(e,mt)}while(!0);return i&&e.shellSuspendCounter++,ba=zs=null,Oe=l,z.H=h,z.A=m,Ee===null&&(Qe=null,Ae=0,Ql()),S}function rM(){for(;Ee!==null;)rv(Ee)}function oM(e,i){var r=Oe;Oe|=2;var l=av(),h=sv();Qe!==e||Ae!==i?(Cc=null,Rc=Xt()+500,Or(e,i)):Nr=Dt(e,i);t:do try{if(We!==0&&Ee!==null){i=Ee;var m=Si;e:switch(We){case 1:We=0,Si=null,Ir(e,i,m,1);break;case 2:case 9:if(gm(m)){We=0,Si=null,ov(i);break}i=function(){We!==2&&We!==9||Qe!==e||(We=7),oa(e)},m.then(i,i);break t;case 3:We=7;break t;case 4:We=5;break t;case 7:gm(m)?(We=0,Si=null,ov(i)):(We=0,Si=null,Ir(e,i,m,7));break;case 5:var S=null;switch(Ee.tag){case 26:S=Ee.memoizedState;case 5:case 27:var C=Ee;if(S?qv(S):C.stateNode.complete){We=0,Si=null;var G=C.sibling;if(G!==null)Ee=G;else{var it=C.return;it!==null?(Ee=it,Nc(it)):Ee=null}break e}}We=0,Si=null,Ir(e,i,m,5);break;case 6:We=0,Si=null,Ir(e,i,m,6);break;case 8:Cf(),mn=6;break t;default:throw Error(a(462))}}lM();break}catch(mt){nv(e,mt)}while(!0);return ba=zs=null,z.H=l,z.A=h,Oe=r,Ee!==null?0:(Qe=null,Ae=0,Ql(),mn)}function lM(){for(;Ee!==null&&!en();)rv(Ee)}function rv(e){var i=Dg(e.alternate,e,La);e.memoizedProps=e.pendingProps,i===null?Nc(e):Ee=i}function ov(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Eg(r,i,i.pendingProps,i.type,void 0,Ae);break;case 11:i=Eg(r,i,i.pendingProps,i.type.render,i.ref,Ae);break;case 5:Wh(i);default:Ng(r,i),i=Ee=sm(i,La),i=Dg(r,i,La)}e.memoizedProps=e.pendingProps,i===null?Nc(e):Ee=i}function Ir(e,i,r,l){ba=zs=null,Wh(i),Tr=null,Fo=0;var h=i.return;try{if(jy(e,h,i,r,Ae)){mn=1,xc(e,Li(r,e.current)),Ee=null;return}}catch(m){if(h!==null)throw Ee=h,m;mn=1,xc(e,Li(r,e.current)),Ee=null;return}i.flags&32768?(De||l===1?e=!0:Nr||(Ae&536870912)!==0?e=!1:(os=e=!0,(l===2||l===9||l===3||l===6)&&(l=yi.current,l!==null&&l.tag===13&&(l.flags|=16384))),lv(i,e)):Nc(i)}function Nc(e){var i=e;do{if((i.flags&32768)!==0){lv(i,os);return}e=i.return;var r=Jy(i.alternate,i,La);if(r!==null){Ee=r;return}if(i=i.sibling,i!==null){Ee=i;return}Ee=i=e}while(i!==null);mn===0&&(mn=5)}function lv(e,i){do{var r=tM(e.alternate,e);if(r!==null){r.flags&=32767,Ee=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=r}while(e!==null);mn=6,Ee=null}function cv(e,i,r,l,h,m,S,C,G){e.cancelPendingCommit=null;do Lc();while(Rn!==0);if((Oe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=vh,cn(e,r,m,S,C,G),e===Qe&&(Ee=Qe=null,Ae=0),Pr=i,us=e,Pa=r,Af=m,wf=h,$g=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fM(Q,function(){return pv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,h=H.p,H.p=2,S=Oe,Oe|=4;try{eM(e,i,r)}finally{Oe=S,H.p=h,z.T=l}}Rn=1,uv(),hv(),fv()}}function uv(){if(Rn===1){Rn=0;var e=us,i=Pr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var l=H.p;H.p=2;var h=Oe;Oe|=4;try{Wg(i,e);var m=Vf,S=jp(e.containerInfo),C=m.focusedElem,G=m.selectionRange;if(S!==C&&C&&C.ownerDocument&&Kp(C.ownerDocument.documentElement,C)){if(G!==null&&fh(C)){var it=G.start,mt=G.end;if(mt===void 0&&(mt=it),"selectionStart"in C)C.selectionStart=it,C.selectionEnd=Math.min(mt,C.value.length);else{var Mt=C.ownerDocument||document,ot=Mt&&Mt.defaultView||window;if(ot.getSelection){var ct=ot.getSelection(),Yt=C.textContent.length,re=Math.min(G.start,Yt),Ze=G.end===void 0?re:Math.min(G.end,Yt);!ct.extend&&re>Ze&&(S=Ze,Ze=re,re=S);var $=Zp(C,re),k=Zp(C,Ze);if($&&k&&(ct.rangeCount!==1||ct.anchorNode!==$.node||ct.anchorOffset!==$.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var nt=Mt.createRange();nt.setStart($.node,$.offset),ct.removeAllRanges(),re>Ze?(ct.addRange(nt),ct.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),ct.addRange(nt))}}}}for(Mt=[],ct=C;ct=ct.parentNode;)ct.nodeType===1&&Mt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Mt.length;C++){var vt=Mt[C];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Xc=!!Gf,Vf=Gf=null}finally{Oe=h,H.p=l,z.T=r}}e.current=i,Rn=2}}function hv(){if(Rn===2){Rn=0;var e=us,i=Pr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var l=H.p;H.p=2;var h=Oe;Oe|=4;try{zg(e,i.alternate,i)}finally{Oe=h,H.p=l,z.T=r}}Rn=3}}function fv(){if(Rn===4||Rn===3){Rn=0,N();var e=us,i=Pr,r=Pa,l=$g;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Rn=5:(Rn=0,Pr=us=null,dv(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(cs=null),So(r),i=i.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,h=H.p,H.p=2,z.T=null;try{for(var m=e.onRecoverableError,S=0;S<l.length;S++){var C=l[S];m(C.value,{componentStack:C.stack})}}finally{z.T=i,H.p=h}}(Pa&3)!==0&&Lc(),oa(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===Rf?tl++:(tl=0,Rf=e):tl=0,el(0)}}function dv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Oo(i)))}function Lc(){return uv(),hv(),fv(),pv()}function pv(){if(Rn!==5)return!1;var e=us,i=Af;Af=0;var r=So(Pa),l=z.T,h=H.p;try{H.p=32>r?32:r,z.T=null,r=wf,wf=null;var m=us,S=Pa;if(Rn=0,Pr=us=null,Pa=0,(Oe&6)!==0)throw Error(a(331));var C=Oe;if(Oe|=4,Kg(m.current),qg(m,m.current,S,r),Oe=C,el(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(dt,m)}catch{}return!0}finally{H.p=h,z.T=l,dv(e,i)}}function mv(e,i,r){i=Li(r,i),i=rf(e.stateNode,i,2),e=is(e,i,2),e!==null&&(kt(e,2),oa(e))}function Xe(e,i,r){if(e.tag===3)mv(e,e,r);else for(;i!==null;){if(i.tag===3){mv(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cs===null||!cs.has(l))){e=Li(r,e),r=gg(2),l=is(i,r,2),l!==null&&(vg(r,l,i,e),kt(l,2),oa(l));break}}i=i.return}}function Uf(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new aM;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||(bf=!0,h.add(r),e=cM.bind(null,e,i,r),i.then(e,e))}function cM(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Qe===e&&(Ae&r)===r&&(mn===4||mn===3&&(Ae&62914560)===Ae&&300>Xt()-wc?(Oe&2)===0&&Or(e,0):Ef|=r,Lr===Ae&&(Lr=0)),oa(e)}function gv(e,i){i===0&&(i=bt()),e=Is(e,i),e!==null&&(kt(e,i),oa(e))}function uM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),gv(e,r)}function hM(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),gv(e,r)}function fM(e,i){return ln(e,i)}var Pc=null,Fr=null,Nf=!1,Oc=!1,Lf=!1,fs=0;function oa(e){e!==Fr&&e.next===null&&(Fr===null?Pc=Fr=e:Fr=Fr.next=e),Oc=!0,Nf||(Nf=!0,pM())}function el(e,i){if(!Lf&&Oc){Lf=!0;do for(var r=!1,l=Pc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var S=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=h&~(S&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,yv(l,m))}else m=Ae,m=gt(l,l===Qe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Dt(l,m)||(r=!0,yv(l,m));l=l.next}while(r);Lf=!1}}function dM(){vv()}function vv(){Oc=Nf=!1;var e=0;fs!==0&&EM()&&(e=fs);for(var i=Xt(),r=null,l=Pc;l!==null;){var h=l.next,m=_v(l,i);m===0?(l.next=null,r===null?Pc=h:r.next=h,h===null&&(Fr=r)):(r=l,(e!==0||(m&3)!==0)&&(Oc=!0)),l=h}Rn!==0&&Rn!==5||el(e),fs!==0&&(fs=0)}function _v(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var S=31-zt(m),C=1<<S,G=h[S];G===-1?((C&r)===0||(C&l)!==0)&&(h[S]=Ft(C,i)):G<=i&&(e.expiredLanes|=C),m&=~C}if(i=Qe,r=Ae,r=gt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(We===2||We===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ze(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Dt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&ze(l),So(r)){case 2:case 8:r=E;break;case 32:r=Q;break;case 268435456:r=lt;break;default:r=Q}return l=xv.bind(null,e),r=ln(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&ze(l),e.callbackPriority=2,e.callbackNode=null,2}function xv(e,i){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Lc()&&e.callbackNode!==r)return null;var l=Ae;return l=gt(e,e===Qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(tv(e,l,i),_v(e,Xt()),e.callbackNode!=null&&e.callbackNode===r?xv.bind(null,e):null)}function yv(e,i){if(Lc())return null;tv(e,i,!0)}function pM(){AM(function(){(Oe&6)!==0?ln(P,dM):vv()})}function Pf(){if(fs===0){var e=Sr;e===0&&(e=ee,ee<<=1,(ee&261888)===0&&(ee=256)),fs=e}return fs}function Mv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ns(""+e)}function Sv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function mM(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=Mv((h[Bn]||null).action),S=l.submitter;S&&(i=(i=S[Bn]||null)?Mv(i.formAction):S.getAttribute("formAction"),i!==null&&(m=i,S=null));var C=new Yl("action","action",null,l,h);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(fs!==0){var G=S?Sv(h,S):new FormData(h);Jh(r,{pending:!0,data:G,method:h.method,action:m},null,G)}}else typeof m=="function"&&(C.preventDefault(),G=S?Sv(h,S):new FormData(h),Jh(r,{pending:!0,data:G,method:h.method,action:m},m,G))},currentTarget:h}]})}}for(var Of=0;Of<gh.length;Of++){var If=gh[Of],gM=If.toLowerCase(),vM=If[0].toUpperCase()+If.slice(1);Xi(gM,"on"+vM)}Xi(Jp,"onAnimationEnd"),Xi(tm,"onAnimationIteration"),Xi(em,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(Ly,"onTransitionRun"),Xi(Py,"onTransitionStart"),Xi(Oy,"onTransitionCancel"),Xi(nm,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_M=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function bv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var S=l.length-1;0<=S;S--){var C=l[S],G=C.instance,it=C.currentTarget;if(C=C.listener,G!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=it;try{m(h)}catch(mt){jl(mt)}h.currentTarget=null,m=G}else for(S=0;S<l.length;S++){if(C=l[S],G=C.instance,it=C.currentTarget,C=C.listener,G!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=it;try{m(h)}catch(mt){jl(mt)}h.currentTarget=null,m=G}}}}function Te(e,i){var r=i[Cs];r===void 0&&(r=i[Cs]=new Set);var l=e+"__bubble";r.has(l)||(Ev(i,e,2,!1),r.add(l))}function Ff(e,i,r){var l=0;i&&(l|=4),Ev(r,e,l,i)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Bf(e){if(!e[Ic]){e[Ic]=!0,kl.forEach(function(r){r!=="selectionchange"&&(_M.has(r)||Ff(r,!1,e),Ff(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Ic]||(i[Ic]=!0,Ff("selectionchange",!1,i))}}function Ev(e,i,r,l){switch(Jv(i)){case 2:var h=qM;break;case 8:h=YM;break;default:h=Jf}r=h.bind(null,i,r,e),h=void 0,!ih||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function zf(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===h)break;if(S===4)for(S=l.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===h)return;S=S.return}for(;C!==null;){if(S=va(C),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){l=m=S;continue t}C=C.parentNode}}l=l.return}Cp(function(){var it=m,mt=eh(r),Mt=[];t:{var ot=im.get(e);if(ot!==void 0){var ct=Yl,Yt=e;switch(e){case"keypress":if(Xl(r)===0)break t;case"keydown":case"keyup":ct=hy;break;case"focusin":Yt="focus",ct=oh;break;case"focusout":Yt="blur",ct=oh;break;case"beforeblur":case"afterblur":ct=oh;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=py;break;case Jp:case tm:case em:ct=ny;break;case nm:ct=gy;break;case"scroll":case"scrollend":ct=Qx;break;case"wheel":ct=_y;break;case"copy":case"cut":case"paste":ct=ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Pp;break;case"toggle":case"beforetoggle":ct=yy}var re=(i&4)!==0,Ze=!re&&(e==="scroll"||e==="scrollend"),$=re?ot!==null?ot+"Capture":null:ot;re=[];for(var k=it,nt;k!==null;){var vt=k;if(nt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||nt===null||$===null||(vt=Eo(k,$),vt!=null&&re.push(il(k,vt,nt))),Ze)break;k=k.return}0<re.length&&(ot=new ct(ot,Yt,null,r,mt),Mt.push({event:ot,listeners:re}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",ot&&r!==th&&(Yt=r.relatedTarget||r.fromElement)&&(va(Yt)||Yt[ai]))break t;if((ct||ot)&&(ot=mt.window===mt?mt:(ot=mt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ct?(Yt=r.relatedTarget||r.toElement,ct=it,Yt=Yt?va(Yt):null,Yt!==null&&(Ze=c(Yt),re=Yt.tag,Yt!==Ze||re!==5&&re!==27&&re!==6)&&(Yt=null)):(ct=null,Yt=it),ct!==Yt)){if(re=Np,vt="onMouseLeave",$="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(re=Pp,vt="onPointerLeave",$="onPointerEnter",k="pointer"),Ze=ct==null?ot:Us(ct),nt=Yt==null?ot:Us(Yt),ot=new re(vt,k+"leave",ct,r,mt),ot.target=Ze,ot.relatedTarget=nt,vt=null,va(mt)===it&&(re=new re($,k+"enter",Yt,r,mt),re.target=nt,re.relatedTarget=Ze,vt=re),Ze=vt,ct&&Yt)e:{for(re=xM,$=ct,k=Yt,nt=0,vt=$;vt;vt=re(vt))nt++;vt=0;for(var ie=k;ie;ie=re(ie))vt++;for(;0<nt-vt;)$=re($),nt--;for(;0<vt-nt;)k=re(k),vt--;for(;nt--;){if($===k||k!==null&&$===k.alternate){re=$;break e}$=re($),k=re(k)}re=null}else re=null;ct!==null&&Tv(Mt,ot,ct,re,!1),Yt!==null&&Ze!==null&&Tv(Mt,Ze,Yt,re,!0)}}t:{if(ot=it?Us(it):window,ct=ot.nodeName&&ot.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ot.type==="file")var Ne=Vp;else if(Hp(ot))if(kp)Ne=Dy;else{Ne=Ry;var jt=wy}else ct=ot.nodeName,!ct||ct.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?it&&Ie(it.elementType)&&(Ne=Vp):Ne=Cy;if(Ne&&(Ne=Ne(e,it))){Gp(Mt,Ne,r,mt);break t}jt&&jt(e,ot,it),e==="focusout"&&it&&ot.type==="number"&&it.memoizedProps.value!=null&&be(ot,"number",ot.value)}switch(jt=it?Us(it):window,e){case"focusin":(Hp(jt)||jt.contentEditable==="true")&&(pr=jt,dh=it,No=null);break;case"focusout":No=dh=pr=null;break;case"mousedown":ph=!0;break;case"contextmenu":case"mouseup":case"dragend":ph=!1,Qp(Mt,r,mt);break;case"selectionchange":if(Ny)break;case"keydown":case"keyup":Qp(Mt,r,mt)}var _e;if(ch)t:{switch(e){case"compositionstart":var we="onCompositionStart";break t;case"compositionend":we="onCompositionEnd";break t;case"compositionupdate":we="onCompositionUpdate";break t}we=void 0}else dr?Bp(e,r)&&(we="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(we="onCompositionStart");we&&(Op&&r.locale!=="ko"&&(dr||we!=="onCompositionStart"?we==="onCompositionEnd"&&dr&&(_e=Dp()):(ja=mt,ah="value"in ja?ja.value:ja.textContent,dr=!0)),jt=Fc(it,we),0<jt.length&&(we=new Lp(we,e,null,r,mt),Mt.push({event:we,listeners:jt}),_e?we.data=_e:(_e=zp(r),_e!==null&&(we.data=_e)))),(_e=Sy?by(e,r):Ey(e,r))&&(we=Fc(it,"onBeforeInput"),0<we.length&&(jt=new Lp("onBeforeInput","beforeinput",null,r,mt),Mt.push({event:jt,listeners:we}),jt.data=_e)),mM(Mt,e,it,r,mt)}bv(Mt,i)})}function il(e,i,r){return{instance:e,listener:i,currentTarget:r}}function Fc(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Eo(e,r),h!=null&&l.unshift(il(e,h,m)),h=Eo(e,i),h!=null&&l.push(il(e,h,m))),e.tag===3)return l;e=e.return}return[]}function xM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tv(e,i,r,l,h){for(var m=i._reactName,S=[];r!==null&&r!==l;){var C=r,G=C.alternate,it=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||it===null||(G=it,h?(it=Eo(r,m),it!=null&&S.unshift(il(r,it,G))):h||(it=Eo(r,m),it!=null&&S.push(il(r,it,G)))),r=r.return}S.length!==0&&e.push({event:i,listeners:S})}var yM=/\r\n?/g,MM=/\u0000|\uFFFD/g;function Av(e){return(typeof e=="string"?e:""+e).replace(yM,`
`).replace(MM,"")}function wv(e,i){return i=Av(i),Av(e)===i}function Ye(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||vi(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&vi(e,""+l);break;case"className":qt(e,"class",l);break;case"tabIndex":qt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(e,r,l);break;case"style":Wi(e,l,m);break;case"data":if(i!=="object"){qt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ns(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Ye(e,i,"name",h.name,h,null),Ye(e,i,"formEncType",h.formEncType,h,null),Ye(e,i,"formMethod",h.formMethod,h,null),Ye(e,i,"formTarget",h.formTarget,h,null)):(Ye(e,i,"encType",h.encType,h,null),Ye(e,i,"method",h.method,h,null),Ye(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ns(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=xa);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Ns(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Pt(e,"popover",l);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ia.get(r)||r,Pt(e,r,l))}}function Hf(e,i,r,l,h,m){switch(r){case"style":Wi(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?vi(e,l):(typeof l=="number"||typeof l=="bigint")&&vi(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=xa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Bn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Pt(e,r,l)}}}function Vn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var S=r[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ye(e,i,m,S,r,null)}}h&&Ye(e,i,"srcSet",r.srcSet,r,null),l&&Ye(e,i,"src",r.src,r,null);return;case"input":Te("invalid",e);var C=m=S=h=null,G=null,it=null;for(l in r)if(r.hasOwnProperty(l)){var mt=r[l];if(mt!=null)switch(l){case"name":h=mt;break;case"type":S=mt;break;case"checked":G=mt;break;case"defaultChecked":it=mt;break;case"value":m=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:Ye(e,i,l,mt,r,null)}}Yn(e,m,C,G,it,S,h,!1);return;case"select":Te("invalid",e),l=S=m=null;for(h in r)if(r.hasOwnProperty(h)&&(C=r[h],C!=null))switch(h){case"value":m=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:Ye(e,i,h,C,r,null)}i=m,r=S,e.multiple=!!l,i!=null?wn(e,!!l,i,!1):r!=null&&wn(e,!!l,r,!0);return;case"textarea":Te("invalid",e),m=h=l=null;for(S in r)if(r.hasOwnProperty(S)&&(C=r[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":h=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Ye(e,i,S,C,r,null)}ki(e,l,h,m);return;case"option":for(G in r)r.hasOwnProperty(G)&&(l=r[G],l!=null)&&(G==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ye(e,i,G,l,r,null));return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<nl.length;l++)Te(nl[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in r)if(r.hasOwnProperty(it)&&(l=r[it],l!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ye(e,i,it,l,r,null)}return;default:if(Ie(i)){for(mt in r)r.hasOwnProperty(mt)&&(l=r[mt],l!==void 0&&Hf(e,i,mt,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&Ye(e,i,C,l,r,null))}function SM(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,S=null,C=null,G=null,it=null,mt=null;for(ct in r){var Mt=r[ct];if(r.hasOwnProperty(ct)&&Mt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=Mt;default:l.hasOwnProperty(ct)||Ye(e,i,ct,null,l,Mt)}}for(var ot in l){var ct=l[ot];if(Mt=r[ot],l.hasOwnProperty(ot)&&(ct!=null||Mt!=null))switch(ot){case"type":m=ct;break;case"name":h=ct;break;case"checked":it=ct;break;case"defaultChecked":mt=ct;break;case"value":S=ct;break;case"defaultValue":C=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==Mt&&Ye(e,i,ot,ct,l,Mt)}}Gt(e,S,C,G,it,mt,m,h);return;case"select":ct=S=C=ot=null;for(m in r)if(G=r[m],r.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":ct=G;default:l.hasOwnProperty(m)||Ye(e,i,m,null,l,G)}for(h in l)if(m=l[h],G=r[h],l.hasOwnProperty(h)&&(m!=null||G!=null))switch(h){case"value":ot=m;break;case"defaultValue":C=m;break;case"multiple":S=m;default:m!==G&&Ye(e,i,h,m,l,G)}i=C,r=S,l=ct,ot!=null?wn(e,!!r,ot,!1):!!l!=!!r&&(i!=null?wn(e,!!r,i,!0):wn(e,!!r,r?[]:"",!1));return;case"textarea":ct=ot=null;for(C in r)if(h=r[C],r.hasOwnProperty(C)&&h!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ye(e,i,C,null,l,h)}for(S in l)if(h=l[S],m=r[S],l.hasOwnProperty(S)&&(h!=null||m!=null))switch(S){case"value":ot=h;break;case"defaultValue":ct=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Ye(e,i,S,h,l,m)}gi(e,ot,ct);return;case"option":for(var Yt in r)ot=r[Yt],r.hasOwnProperty(Yt)&&ot!=null&&!l.hasOwnProperty(Yt)&&(Yt==="selected"?e.selected=!1:Ye(e,i,Yt,null,l,ot));for(G in l)ot=l[G],ct=r[G],l.hasOwnProperty(G)&&ot!==ct&&(ot!=null||ct!=null)&&(G==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ye(e,i,G,ot,l,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in r)ot=r[re],r.hasOwnProperty(re)&&ot!=null&&!l.hasOwnProperty(re)&&Ye(e,i,re,null,l,ot);for(it in l)if(ot=l[it],ct=r[it],l.hasOwnProperty(it)&&ot!==ct&&(ot!=null||ct!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:Ye(e,i,it,ot,l,ct)}return;default:if(Ie(i)){for(var Ze in r)ot=r[Ze],r.hasOwnProperty(Ze)&&ot!==void 0&&!l.hasOwnProperty(Ze)&&Hf(e,i,Ze,void 0,l,ot);for(mt in l)ot=l[mt],ct=r[mt],!l.hasOwnProperty(mt)||ot===ct||ot===void 0&&ct===void 0||Hf(e,i,mt,ot,l,ct);return}}for(var $ in r)ot=r[$],r.hasOwnProperty($)&&ot!=null&&!l.hasOwnProperty($)&&Ye(e,i,$,null,l,ot);for(Mt in l)ot=l[Mt],ct=r[Mt],!l.hasOwnProperty(Mt)||ot===ct||ot==null&&ct==null||Ye(e,i,Mt,ot,l,ct)}function Rv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,S=h.initiatorType,C=h.duration;if(m&&C&&Rv(S)){for(S=0,C=h.responseEnd,l+=1;l<r.length;l++){var G=r[l],it=G.startTime;if(it>C)break;var mt=G.transferSize,Mt=G.initiatorType;mt&&Rv(Mt)&&(G=G.responseEnd,S+=mt*(G<C?1:(C-it)/(G-it)))}if(--l,i+=8*(m+S)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gf=null,Vf=null;function Bc(e){return e.nodeType===9?e:e.ownerDocument}function Cv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function kf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wf=null;function EM(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var Uv=typeof setTimeout=="function"?setTimeout:void 0,TM=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,AM=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(e){return Nv.resolve(null).then(e).catch(wM)}:Uv;function wM(e){setTimeout(function(){throw e})}function ds(e){return e==="head"}function Lv(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),Gr(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")al(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,al(r);for(var m=r.firstChild;m;){var S=m.nextSibling,C=m.nodeName;m[qa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=S}}else r==="body"&&al(e.ownerDocument.body);r=h}while(r);Gr(i)}function Pv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function Xf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Xf(r),Ya(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function RM(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[qa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Bi(e.nextSibling),e===null)break}return null}function CM(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Bi(e.nextSibling),e===null))return null;return e}function Ov(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Bi(e.nextSibling),e===null))return null;return e}function qf(e){return e.data==="$?"||e.data==="$~"}function Yf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function DM(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Zf=null;function Iv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Bi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Fv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Bv(e,i,r){switch(i=Bc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function al(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ya(e)}var zi=new Map,zv=new Set;function zc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Oa=H.d;H.d={f:UM,r:NM,D:LM,C:PM,L:OM,m:IM,X:BM,S:FM,M:zM};function UM(){var e=Oa.f(),i=Dc();return e||i}function NM(e){var i=_a(e);i!==null&&i.tag===5&&i.type==="form"?ng(i):Oa.r(e)}var Br=typeof document>"u"?null:document;function Hv(e,i,r){var l=Br;if(l&&typeof i=="string"&&i){var h=Ve(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),zv.has(h)||(zv.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Vn(i,"link",e),xn(i),l.head.appendChild(i)))}}function LM(e){Oa.D(e),Hv("dns-prefetch",e,null)}function PM(e,i){Oa.C(e,i),Hv("preconnect",e,i)}function OM(e,i,r){Oa.L(e,i,r);var l=Br;if(l&&e&&i){var h='link[rel="preload"][as="'+Ve(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+Ve(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+Ve(r.imageSizes)+'"]')):h+='[href="'+Ve(e)+'"]';var m=h;switch(i){case"style":m=zr(e);break;case"script":m=Hr(e)}zi.has(m)||(e=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),zi.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(sl(m))||i==="script"&&l.querySelector(rl(m))||(i=l.createElement("link"),Vn(i,"link",e),xn(i),l.head.appendChild(i)))}}function IM(e,i){Oa.m(e,i);var r=Br;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Ve(l)+'"][href="'+Ve(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Hr(e)}if(!zi.has(m)&&(e=v({rel:"modulepreload",href:e},i),zi.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(rl(m)))return}l=r.createElement("link"),Vn(l,"link",e),xn(l),r.head.appendChild(l)}}}function FM(e,i,r){Oa.S(e,i,r);var l=Br;if(l&&e){var h=Za(l).hoistableStyles,m=zr(e);i=i||"default";var S=h.get(m);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(sl(m)))C.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},r),(r=zi.get(m))&&Kf(e,r);var G=S=l.createElement("link");xn(G),Vn(G,"link",e),G._p=new Promise(function(it,mt){G.onload=it,G.onerror=mt}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Hc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:C},h.set(m,S)}}}function BM(e,i){Oa.X(e,i);var r=Br;if(r&&e){var l=Za(r).hoistableScripts,h=Hr(e),m=l.get(h);m||(m=r.querySelector(rl(h)),m||(e=v({src:e,async:!0},i),(i=zi.get(h))&&jf(e,i),m=r.createElement("script"),xn(m),Vn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function zM(e,i){Oa.M(e,i);var r=Br;if(r&&e){var l=Za(r).hoistableScripts,h=Hr(e),m=l.get(h);m||(m=r.querySelector(rl(h)),m||(e=v({src:e,async:!0,type:"module"},i),(i=zi.get(h))&&jf(e,i),m=r.createElement("script"),xn(m),Vn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function Gv(e,i,r,l){var h=(h=tt.current)?zc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=zr(r.href),r=Za(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=zr(r.href);var m=Za(h).hoistableStyles,S=m.get(e);if(S||(h=h.ownerDocument||h,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,S),(m=h.querySelector(sl(e)))&&!m._p&&(S.instance=m,S.state.loading=5),zi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},zi.set(e,r),m||HM(h,e,r,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Hr(r),r=Za(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function zr(e){return'href="'+Ve(e)+'"'}function sl(e){return'link[rel="stylesheet"]['+e+"]"}function Vv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function HM(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Vn(i,"link",r),xn(i),e.head.appendChild(i))}function Hr(e){return'[src="'+Ve(e)+'"]'}function rl(e){return"script[async]"+e}function kv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Ve(r.href)+'"]');if(l)return i.instance=l,xn(l),l;var h=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),xn(l),Vn(l,"style",h),Hc(l,r.precedence,e),i.instance=l;case"stylesheet":h=zr(r.href);var m=e.querySelector(sl(h));if(m)return i.state.loading|=4,i.instance=m,xn(m),m;l=Vv(r),(h=zi.get(h))&&Kf(l,h),m=(e.ownerDocument||e).createElement("link"),xn(m);var S=m;return S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),Vn(m,"link",l),i.state.loading|=4,Hc(m,r.precedence,e),i.instance=m;case"script":return m=Hr(r.src),(h=e.querySelector(rl(m)))?(i.instance=h,xn(h),h):(l=r,(h=zi.get(m))&&(l=v({},r),jf(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),xn(h),Vn(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Hc(l,r.precedence,e));return i.instance}function Hc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===i)m=C;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Kf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function jf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Gc=null;function Wv(e,i,r){if(Gc===null){var l=new Map,h=Gc=new Map;h.set(r,l)}else h=Gc,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[qa]||m[_n]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(i)||"";S=e+S;var C=l.get(S);C?C.push(m):l.set(S,[m])}}return l}function Xv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function GM(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function qv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function VM(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=zr(l.href),m=i.querySelector(sl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Vc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,xn(m);return}m=i.ownerDocument||i,l=Vv(l),(h=zi.get(h))&&Kf(l,h),m=m.createElement("link"),xn(m);var S=m;S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),Vn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Vc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Qf=0;function kM(e,i){return e.stylesheets&&e.count===0&&Wc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Qf===0&&(Qf=62500*bM());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Qf?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kc=null;function Wc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kc=new Map,i.forEach(WM,e),kc=null,Vc.call(e))}function WM(e,i){if(!(i.state.loading&4)){var r=kc.get(e);if(r)var l=r.get(null);else{r=new Map,kc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var S=h[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}h=i.instance,S=h.getAttribute("data-precedence"),m=r.get(S)||l,m===l&&r.set(null,h),r.set(S,h),this.count++,l=Vc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ol={$$typeof:L,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function XM(e,i,r,l,h,m,S,C,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zt(0),this.hiddenUpdates=Zt(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Yv(e,i,r,l,h,m,S,C,G,it,mt,Mt){return e=new XM(e,i,r,S,G,it,mt,Mt,C),i=1,m===!0&&(i|=24),m=xi(3,null,null,i),e.current=m,m.stateNode=e,i=Ch(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},Lh(m),e}function Zv(e){return e?(e=vr,e):vr}function Kv(e,i,r,l,h,m){h=Zv(h),l.context===null?l.context=h:l.pendingContext=h,l=ns(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=is(e,l,i),r!==null&&(ui(r,e,i),zo(r,e,i))}function jv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function $f(e,i){jv(e,i),(e=e.alternate)&&jv(e,i)}function Qv(e){if(e.tag===13||e.tag===31){var i=Is(e,67108864);i!==null&&ui(i,e,67108864),$f(e,67108864)}}function $v(e){if(e.tag===13||e.tag===31){var i=Ei();i=Mo(i);var r=Is(e,i);r!==null&&ui(r,e,i),$f(e,i)}}var Xc=!0;function qM(e,i,r,l){var h=z.T;z.T=null;var m=H.p;try{H.p=2,Jf(e,i,r,l)}finally{H.p=m,z.T=h}}function YM(e,i,r,l){var h=z.T;z.T=null;var m=H.p;try{H.p=8,Jf(e,i,r,l)}finally{H.p=m,z.T=h}}function Jf(e,i,r,l){if(Xc){var h=td(l);if(h===null)zf(e,i,l,qc,r),t1(e,l);else if(KM(h,e,i,r,l))l.stopPropagation();else if(t1(e,l),i&4&&-1<ZM.indexOf(e)){for(;h!==null;){var m=_a(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=Ct(m.pendingLanes);if(S!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var G=1<<31-zt(S);C.entanglements[1]|=G,S&=~G}oa(m),(Oe&6)===0&&(Rc=Xt()+500,el(0))}}break;case 31:case 13:C=Is(m,2),C!==null&&ui(C,m,2),Dc(),$f(m,2)}if(m=td(l),m===null&&zf(e,i,l,qc,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else zf(e,i,l,null,r)}}function td(e){return e=eh(e),ed(e)}var qc=null;function ed(e){if(qc=null,e=va(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return qc=e,null}function Jv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case P:return 2;case E:return 8;case Q:case et:return 32;case lt:return 268435456;default:return 32}default:return 32}}var nd=!1,ps=null,ms=null,gs=null,ll=new Map,cl=new Map,vs=[],ZM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t1(e,i){switch(e){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":ll.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(i.pointerId)}}function ul(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=_a(i),i!==null&&Qv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function KM(e,i,r,l,h){switch(i){case"focusin":return ps=ul(ps,e,i,r,l,h),!0;case"dragenter":return ms=ul(ms,e,i,r,l,h),!0;case"mouseover":return gs=ul(gs,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return ll.set(m,ul(ll.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,cl.set(m,ul(cl.get(m)||null,e,i,r,l,h)),!0}return!1}function e1(e){var i=va(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,ur(e.priority,function(){$v(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,ur(e.priority,function(){$v(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=td(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);th=l,r.target.dispatchEvent(l),th=null}else return i=_a(r),i!==null&&Qv(i),e.blockedOn=r,!1;i.shift()}return!0}function n1(e,i,r){Yc(e)&&r.delete(i)}function jM(){nd=!1,ps!==null&&Yc(ps)&&(ps=null),ms!==null&&Yc(ms)&&(ms=null),gs!==null&&Yc(gs)&&(gs=null),ll.forEach(n1),cl.forEach(n1)}function Zc(e,i){e.blockedOn===i&&(e.blockedOn=null,nd||(nd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,jM)))}var Kc=null;function i1(e){Kc!==e&&(Kc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Kc===e&&(Kc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(ed(l||r)===null)continue;break}var m=_a(r);m!==null&&(e.splice(i,3),i-=3,Jh(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function Gr(e){function i(G){return Zc(G,e)}ps!==null&&Zc(ps,e),ms!==null&&Zc(ms,e),gs!==null&&Zc(gs,e),ll.forEach(i),cl.forEach(i);for(var r=0;r<vs.length;r++){var l=vs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<vs.length&&(r=vs[0],r.blockedOn===null);)e1(r),r.blockedOn===null&&vs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],S=h[Bn]||null;if(typeof m=="function")S||i1(r);else if(S){var C=null;if(m&&m.hasAttribute("formAction")){if(h=m,S=m[Bn]||null)C=S.formAction;else if(ed(h)!==null)continue}else C=S.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),i1(r)}}}function a1(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return h=S})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function id(e){this._internalRoot=e}jc.prototype.render=id.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=Ei();Kv(r,l,e,i,null,null)},jc.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Kv(e.current,2,null,e,null,null),Dc(),i[ai]=null}};function jc(e){this._internalRoot=e}jc.prototype.unstable_scheduleHydration=function(e){if(e){var i=bo();e={blockedOn:null,target:e,priority:i};for(var r=0;r<vs.length&&i!==0&&i<vs[r].priority;r++);vs.splice(r,0,e),r===0&&e1(e)}};var s1=t.version;if(s1!=="19.2.7")throw Error(a(527,s1,"19.2.7"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var QM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{dt=Qc.inject(QM),pt=Qc}catch{}}return fl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",h=fg,m=dg,S=pg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=Yv(e,1,!1,null,null,r,l,null,h,m,S,a1),e[ai]=i.current,Bf(e),new id(i)},fl.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,h="",m=fg,S=dg,C=pg,G=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(G=r.formState)),i=Yv(e,1,!0,i,r??null,l,h,G,m,S,C,a1),i.context=Zv(null),r=i.current,l=Ei(),l=Mo(l),h=ns(l),h.callback=null,is(r,h,l),r=l,i.current.lanes=r,kt(i,r),oa(i),e[ai]=i.current,Bf(e),new jc(i)},fl.version="19.2.7",fl}var m1;function oS(){if(m1)return sd.exports;m1=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),sd.exports=rS(),sd.exports}var lS=oS(),de=Y0();const Z0="185",Va={ROTATE:0,DOLLY:1,PAN:2},ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cS=0,g1=1,uS=2,Du=1,hS=2,Tl=3,ws=0,ni=1,Qi=2,ea=0,oo=1,Kd=2,v1=3,_1=4,fS=5,er=100,dS=101,pS=102,mS=103,gS=104,vS=200,_S=201,xS=202,yS=203,jd=204,Qd=205,MS=206,SS=207,bS=208,ES=209,TS=210,AS=211,wS=212,RS=213,CS=214,$d=0,Jd=1,t0=2,uo=3,e0=4,n0=5,i0=6,a0=7,K0=0,DS=1,US=2,pa=0,j0=1,Q0=2,$0=3,qu=4,J0=5,ho=6,Yu=7,Q_=300,sr=301,fo=302,ud=303,hd=304,Zu=306,Ul=1e3,fa=1001,s0=1002,Un=1003,NS=1004,$c=1005,An=1006,fd=1007,ir=1008,Ri=1009,$_=1010,J_=1011,Nl=1012,tp=1013,ma=1014,Ji=1015,ii=1016,ep=1017,np=1018,Ll=1020,tx=35902,ex=35899,nx=1021,ix=1022,ta=1023,Wa=1026,ar=1027,ip=1028,ap=1029,rr=1030,sp=1031,rp=1033,Uu=33776,Nu=33777,Lu=33778,Pu=33779,r0=35840,o0=35841,l0=35842,c0=35843,u0=36196,h0=37492,f0=37496,d0=37488,p0=37489,Fu=37490,m0=37491,g0=37808,v0=37809,_0=37810,x0=37811,y0=37812,M0=37813,S0=37814,b0=37815,E0=37816,T0=37817,A0=37818,w0=37819,R0=37820,C0=37821,D0=36492,U0=36494,N0=36495,L0=36283,P0=36284,Bu=36285,O0=36286,LS=3200,PS=3201,zu=0,OS=1,Gi="",fi="srgb",Hu="srgb-linear",Gu="linear",Fe="srgb",Vr=7680,x1=519,IS=512,FS=513,BS=514,op=515,zS=516,HS=517,lp=518,GS=519,y1=35044,M1=35048,S1="300 es",da=2e3,Pl=2001;function VS(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Vu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kS(){const s=Vu("canvas");return s.style.display="block",s}const b1={};function E1(...s){const t="THREE."+s.shift();console.log(t,...s)}function ax(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function oe(...s){s=ax(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...s)}}function pe(...s){s=ax(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...s)}}function lo(...s){const t=s.join(" ");t in b1||(b1[t]=!0,oe(...s))}function WS(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const XS={[$d]:Jd,[t0]:i0,[e0]:a0,[uo]:n0,[Jd]:$d,[i0]:t0,[a0]:e0,[n0]:uo};class Rs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let T1=1234567;const Rl=Math.PI/180,Ol=180/Math.PI;function vo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Kn[s&255]+Kn[s>>8&255]+Kn[s>>16&255]+Kn[s>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[n&63|128]+Kn[n>>8&255]+"-"+Kn[n>>16&255]+Kn[n>>24&255]+Kn[a&255]+Kn[a>>8&255]+Kn[a>>16&255]+Kn[a>>24&255]).toLowerCase()}function Me(s,t,n){return Math.max(t,Math.min(n,s))}function cp(s,t){return(s%t+t)%t}function qS(s,t,n,a,o){return a+(s-t)*(o-a)/(n-t)}function YS(s,t,n){return s!==t?(n-s)/(t-s):0}function Cl(s,t,n){return(1-n)*s+n*t}function ZS(s,t,n,a){return Cl(s,t,1-Math.exp(-n*a))}function KS(s,t=1){return t-Math.abs(cp(s,t*2)-t)}function jS(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*(3-2*s))}function QS(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*s*(s*(s*6-15)+10))}function $S(s,t){return s+Math.floor(Math.random()*(t-s+1))}function JS(s,t){return s+Math.random()*(t-s)}function t2(s){return s*(.5-Math.random())}function e2(s){s!==void 0&&(T1=s);let t=T1+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function n2(s){return s*Rl}function i2(s){return s*Ol}function a2(s){return(s&s-1)===0&&s!==0}function s2(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function r2(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function o2(s,t,n,a,o){const c=Math.cos,u=Math.sin,f=c(n/2),d=u(n/2),p=c((t+a)/2),g=u((t+a)/2),v=c((t-a)/2),_=u((t-a)/2),x=c((a-t)/2),b=u((a-t)/2);switch(o){case"XYX":s.set(f*g,d*v,d*_,f*p);break;case"YZY":s.set(d*_,f*g,d*v,f*p);break;case"ZXZ":s.set(d*v,d*_,f*g,f*p);break;case"XZX":s.set(f*g,d*b,d*x,f*p);break;case"YXY":s.set(d*x,f*g,d*b,f*p);break;case"ZYZ":s.set(d*b,d*x,f*g,f*p);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function so(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const sx={DEG2RAD:Rl,RAD2DEG:Ol,generateUUID:vo,clamp:Me,euclideanModulo:cp,mapLinear:qS,inverseLerp:YS,lerp:Cl,damp:ZS,pingpong:KS,smoothstep:jS,smootherstep:QS,randInt:$S,randFloat:JS,randFloatSpread:t2,seededRandom:e2,degToRad:n2,radToDeg:i2,isPowerOfTwo:a2,ceilPowerOfTwo:s2,floorPowerOfTwo:r2,setQuaternionFromProperEuler:o2,normalize:ti,denormalize:so},bp=class bp{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bp.prototype.isVector2=!0;let Bt=bp;class ga{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,f){let d=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3],_=c[u+0],x=c[u+1],b=c[u+2],A=c[u+3];if(v!==A||d!==_||p!==x||g!==b){let M=d*_+p*x+g*b+v*A;M<0&&(_=-_,x=-x,b=-b,A=-A,M=-M);let y=1-f;if(M<.9995){const D=Math.acos(M),L=Math.sin(D);y=Math.sin(y*D)/L,f=Math.sin(f*D)/L,d=d*y+_*f,p=p*y+x*f,g=g*y+b*f,v=v*y+A*f}else{d=d*y+_*f,p=p*y+x*f,g=g*y+b*f,v=v*y+A*f;const D=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=D,p*=D,g*=D,v*=D}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,u){const f=a[o],d=a[o+1],p=a[o+2],g=a[o+3],v=c[u],_=c[u+1],x=c[u+2],b=c[u+3];return t[n]=f*b+g*v+d*x-p*_,t[n+1]=d*b+g*_+p*v-f*x,t[n+2]=p*b+g*x+f*_-d*v,t[n+3]=g*b-f*v-d*_-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,d=Math.sin,p=f(a/2),g=f(o/2),v=f(c/2),_=d(a/2),x=d(o/2),b=d(c/2);switch(u){case"XYZ":this._x=_*g*v+p*x*b,this._y=p*x*v-_*g*b,this._z=p*g*b+_*x*v,this._w=p*g*v-_*x*b;break;case"YXZ":this._x=_*g*v+p*x*b,this._y=p*x*v-_*g*b,this._z=p*g*b-_*x*v,this._w=p*g*v+_*x*b;break;case"ZXY":this._x=_*g*v-p*x*b,this._y=p*x*v+_*g*b,this._z=p*g*b+_*x*v,this._w=p*g*v-_*x*b;break;case"ZYX":this._x=_*g*v-p*x*b,this._y=p*x*v+_*g*b,this._z=p*g*b-_*x*v,this._w=p*g*v+_*x*b;break;case"YZX":this._x=_*g*v+p*x*b,this._y=p*x*v+_*g*b,this._z=p*g*b-_*x*v,this._w=p*g*v-_*x*b;break;case"XZY":this._x=_*g*v-p*x*b,this._y=p*x*v-_*g*b,this._z=p*g*b+_*x*v,this._w=p*g*v+_*x*b;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],f=n[5],d=n[9],p=n[2],g=n[6],v=n[10],_=a+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-d)*x,this._y=(c-p)*x,this._z=(u-o)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(g-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+p)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(c-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(u-o)/x,this._x=(c+p)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,f=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*f+o*p-c*d,this._y=o*g+u*d+c*f-a*p,this._z=c*g+u*p+a*d-o*f,this._w=u*g-a*f-o*d-c*p,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,o=-o,c=-c,u=-u,f=-f);let d=1-n;if(f<.9995){const p=Math.acos(f),g=Math.sin(p);d=Math.sin(d*p)/g,n=Math.sin(n*p)/g,this._x=this._x*d+a*n,this._y=this._y*d+o*n,this._z=this._z*d+c*n,this._w=this._w*d+u*n,this._onChangeCallback()}else this._x=this._x*d+a*n,this._y=this._y*d+o*n,this._z=this._z*d+c*n,this._w=this._w*d+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ep=class Ep{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(A1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(A1.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,f=t.z,d=t.w,p=2*(u*o-f*a),g=2*(f*n-c*o),v=2*(c*a-u*n);return this.x=n+d*p+u*v-f*g,this.y=a+d*g+f*p-c*v,this.z=o+d*v+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,f=n.y,d=n.z;return this.x=o*d-c*f,this.y=c*u-a*d,this.z=a*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return dd.copy(this).projectOnVector(t),this.sub(dd)}reflect(t){return this.sub(dd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ep.prototype.isVector3=!0;let X=Ep;const dd=new X,A1=new ga,Tp=class Tp{constructor(t,n,a,o,c,u,f,d,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,d,p)}set(t,n,a,o,c,u,f,d,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=c,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[3],d=a[6],p=a[1],g=a[4],v=a[7],_=a[2],x=a[5],b=a[8],A=o[0],M=o[3],y=o[6],D=o[1],L=o[4],w=o[7],I=o[2],U=o[5],B=o[8];return c[0]=u*A+f*D+d*I,c[3]=u*M+f*L+d*U,c[6]=u*y+f*w+d*B,c[1]=p*A+g*D+v*I,c[4]=p*M+g*L+v*U,c[7]=p*y+g*w+v*B,c[2]=_*A+x*D+b*I,c[5]=_*M+x*L+b*U,c[8]=_*y+x*w+b*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8];return n*u*g-n*f*p-a*c*g+a*f*d+o*c*p-o*u*d}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],v=g*u-f*p,_=f*d-g*c,x=p*c-u*d,b=n*v+a*_+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=v*A,t[1]=(o*p-g*a)*A,t[2]=(f*a-o*u)*A,t[3]=_*A,t[4]=(g*n-o*d)*A,t[5]=(o*c-f*n)*A,t[6]=x*A,t[7]=(a*d-p*n)*A,t[8]=(u*n-a*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,f){const d=Math.cos(c),p=Math.sin(c);return this.set(a*d,a*p,-a*(d*u+p*f)+u+t,-o*p,o*d,-o*(-p*u+d*f)+f+n,0,0,1),this}scale(t,n){return lo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pd.makeScale(t,n)),this}rotate(t){return lo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pd.makeRotation(-t)),this}translate(t,n){return lo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Tp.prototype.isMatrix3=!0;let he=Tp;const pd=new he,w1=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R1=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l2(){const s={enabled:!0,workingColorSpace:Hu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Fe&&(o.r=ka(o.r),o.g=ka(o.g),o.b=ka(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Fe&&(o.r=co(o.r),o.g=co(o.g),o.b=co(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Gi?Gu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return lo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return lo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Hu]:{primaries:t,whitePoint:a,transfer:Gu,toXYZ:w1,fromXYZ:R1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:a,transfer:Fe,toXYZ:w1,fromXYZ:R1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Ce=l2();function ka(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function co(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let kr;class c2{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{kr===void 0&&(kr=Vu("canvas")),kr.width=t.width,kr.height=t.height;const o=kr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=kr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Vu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ka(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ka(n[a]/255)*255):n[a]=ka(n[a]);return{data:n,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let u2=0;class up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u2++}),this.uuid=vo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(md(o[u].image)):c.push(md(o[u]))}else c=md(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function md(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?c2.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let h2=0;const gd=new X;class Qn extends Rs{constructor(t=Qn.DEFAULT_IMAGE,n=Qn.DEFAULT_MAPPING,a=fa,o=fa,c=An,u=ir,f=ta,d=Ri,p=Qn.DEFAULT_ANISOTROPY,g=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h2++}),this.uuid=vo(),this.name="",this.source=new up(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Q_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ul:t.x=t.x-Math.floor(t.x);break;case fa:t.x=t.x<0?0:1;break;case s0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ul:t.y=t.y-Math.floor(t.y);break;case fa:t.y=t.y<0?0:1;break;case s0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Q_;Qn.DEFAULT_ANISOTROPY=1;const Ap=class Ap{constructor(t=0,n=0,a=0,o=1){this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const d=t.elements,p=d[0],g=d[4],v=d[8],_=d[1],x=d[5],b=d[9],A=d[2],M=d[6],y=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,w=(x+1)/2,I=(y+1)/2,U=(g+_)/4,B=(v+A)/4,T=(b+M)/4;return L>w&&L>I?L<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(L),o=U/a,c=B/a):w>I?w<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),a=U/o,c=T/o):I<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),a=B/c,o=T/c),this.set(a,o,c,n),this}let D=Math.sqrt((M-b)*(M-b)+(v-A)*(v-A)+(_-g)*(_-g));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(v-A)/D,this.z=(_-g)/D,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this.w=Me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this.w=Me(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ap.prototype.isVector4=!0;let dn=Ap;class f2 extends Rs{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new dn(0,0,t,n),this.scissorTest=!1,this.viewport=new dn(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},c=new Qn(o),u=a.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new up(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends f2{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class rx extends Qn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class d2 extends Qn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xu=class Xu{constructor(t,n,a,o,c,u,f,d,p,g,v,_,x,b,A,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,d,p,g,v,_,x,b,A,M)}set(t,n,a,o,c,u,f,d,p,g,v,_,x,b,A,M){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=f,y[13]=d,y[2]=p,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=b,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xu().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Wr.setFromMatrixColumn(t,0).length(),c=1/Wr.setFromMatrixColumn(t,1).length(),u=1/Wr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),f=Math.sin(a),d=Math.cos(o),p=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,x=u*v,b=f*g,A=f*v;n[0]=d*g,n[4]=-d*v,n[8]=p,n[1]=x+b*p,n[5]=_-A*p,n[9]=-f*d,n[2]=A-_*p,n[6]=b+x*p,n[10]=u*d}else if(t.order==="YXZ"){const _=d*g,x=d*v,b=p*g,A=p*v;n[0]=_+A*f,n[4]=b*f-x,n[8]=u*p,n[1]=u*v,n[5]=u*g,n[9]=-f,n[2]=x*f-b,n[6]=A+_*f,n[10]=u*d}else if(t.order==="ZXY"){const _=d*g,x=d*v,b=p*g,A=p*v;n[0]=_-A*f,n[4]=-u*v,n[8]=b+x*f,n[1]=x+b*f,n[5]=u*g,n[9]=A-_*f,n[2]=-u*p,n[6]=f,n[10]=u*d}else if(t.order==="ZYX"){const _=u*g,x=u*v,b=f*g,A=f*v;n[0]=d*g,n[4]=b*p-x,n[8]=_*p+A,n[1]=d*v,n[5]=A*p+_,n[9]=x*p-b,n[2]=-p,n[6]=f*d,n[10]=u*d}else if(t.order==="YZX"){const _=u*d,x=u*p,b=f*d,A=f*p;n[0]=d*g,n[4]=A-_*v,n[8]=b*v+x,n[1]=v,n[5]=u*g,n[9]=-f*g,n[2]=-p*g,n[6]=x*v+b,n[10]=_-A*v}else if(t.order==="XZY"){const _=u*d,x=u*p,b=f*d,A=f*p;n[0]=d*g,n[4]=-v,n[8]=p*g,n[1]=_*v+A,n[5]=u*g,n[9]=x*v-b,n[2]=b*v-x,n[6]=f*g,n[10]=A*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(p2,t,m2)}lookAt(t,n,a){const o=this.elements;return Ti.subVectors(t,n),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),xs.crossVectors(a,Ti),xs.lengthSq()===0&&(Math.abs(a.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),xs.crossVectors(a,Ti)),xs.normalize(),Jc.crossVectors(Ti,xs),o[0]=xs.x,o[4]=Jc.x,o[8]=Ti.x,o[1]=xs.y,o[5]=Jc.y,o[9]=Ti.y,o[2]=xs.z,o[6]=Jc.z,o[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[4],d=a[8],p=a[12],g=a[1],v=a[5],_=a[9],x=a[13],b=a[2],A=a[6],M=a[10],y=a[14],D=a[3],L=a[7],w=a[11],I=a[15],U=o[0],B=o[4],T=o[8],O=o[12],W=o[1],V=o[5],Z=o[9],ut=o[13],ht=o[2],j=o[6],z=o[10],H=o[14],J=o[3],ft=o[7],St=o[11],F=o[15];return c[0]=u*U+f*W+d*ht+p*J,c[4]=u*B+f*V+d*j+p*ft,c[8]=u*T+f*Z+d*z+p*St,c[12]=u*O+f*ut+d*H+p*F,c[1]=g*U+v*W+_*ht+x*J,c[5]=g*B+v*V+_*j+x*ft,c[9]=g*T+v*Z+_*z+x*St,c[13]=g*O+v*ut+_*H+x*F,c[2]=b*U+A*W+M*ht+y*J,c[6]=b*B+A*V+M*j+y*ft,c[10]=b*T+A*Z+M*z+y*St,c[14]=b*O+A*ut+M*H+y*F,c[3]=D*U+L*W+w*ht+I*J,c[7]=D*B+L*V+w*j+I*ft,c[11]=D*T+L*Z+w*z+I*St,c[15]=D*O+L*ut+w*H+I*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],f=t[5],d=t[9],p=t[13],g=t[2],v=t[6],_=t[10],x=t[14],b=t[3],A=t[7],M=t[11],y=t[15],D=d*x-p*_,L=f*x-p*v,w=f*_-d*v,I=u*x-p*g,U=u*_-d*g,B=u*v-f*g;return n*(A*D-M*L+y*w)-a*(b*D-M*I+y*U)+o*(b*L-A*I+y*B)-c*(b*w-A*U+M*B)}determinantAffine(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[1],u=t[5],f=t[9],d=t[2],p=t[6],g=t[10];return n*(u*g-f*p)-a*(c*g-f*d)+o*(c*p-u*d)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],v=t[9],_=t[10],x=t[11],b=t[12],A=t[13],M=t[14],y=t[15],D=n*f-a*u,L=n*d-o*u,w=n*p-c*u,I=a*d-o*f,U=a*p-c*f,B=o*p-c*d,T=g*A-v*b,O=g*M-_*b,W=g*y-x*b,V=v*M-_*A,Z=v*y-x*A,ut=_*y-x*M,ht=D*ut-L*Z+w*V+I*W-U*O+B*T;if(ht===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ht;return t[0]=(f*ut-d*Z+p*V)*j,t[1]=(o*Z-a*ut-c*V)*j,t[2]=(A*B-M*U+y*I)*j,t[3]=(_*U-v*B-x*I)*j,t[4]=(d*W-u*ut-p*O)*j,t[5]=(n*ut-o*W+c*O)*j,t[6]=(M*w-b*B-y*L)*j,t[7]=(g*B-_*w+x*L)*j,t[8]=(u*Z-f*W+p*T)*j,t[9]=(a*W-n*Z-c*T)*j,t[10]=(b*U-A*w+y*D)*j,t[11]=(v*w-g*U-x*D)*j,t[12]=(f*O-u*V-d*T)*j,t[13]=(n*V-a*O+o*T)*j,t[14]=(A*L-b*I-M*D)*j,t[15]=(g*I-v*L+_*D)*j,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,f=t.y,d=t.z,p=c*u,g=c*f;return this.set(p*u+a,p*f-o*d,p*d+o*f,0,p*f+o*d,g*f+a,g*d-o*u,0,p*d-o*f,g*d+o*u,c*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,f=n._z,d=n._w,p=c+c,g=u+u,v=f+f,_=c*p,x=c*g,b=c*v,A=u*g,M=u*v,y=f*v,D=d*p,L=d*g,w=d*v,I=a.x,U=a.y,B=a.z;return o[0]=(1-(A+y))*I,o[1]=(x+w)*I,o[2]=(b-L)*I,o[3]=0,o[4]=(x-w)*U,o[5]=(1-(_+y))*U,o[6]=(M+D)*U,o[7]=0,o[8]=(b+L)*B,o[9]=(M-D)*B,o[10]=(1-(_+A))*B,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Wr.set(o[0],o[1],o[2]).length();const f=Wr.set(o[4],o[5],o[6]).length(),d=Wr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Zi.copy(this);const p=1/u,g=1/f,v=1/d;return Zi.elements[0]*=p,Zi.elements[1]*=p,Zi.elements[2]*=p,Zi.elements[4]*=g,Zi.elements[5]*=g,Zi.elements[6]*=g,Zi.elements[8]*=v,Zi.elements[9]*=v,Zi.elements[10]*=v,n.setFromRotationMatrix(Zi),a.x=u,a.y=f,a.z=d,this}makePerspective(t,n,a,o,c,u,f=da,d=!1){const p=this.elements,g=2*c/(n-t),v=2*c/(a-o),_=(n+t)/(n-t),x=(a+o)/(a-o);let b,A;if(d)b=c/(u-c),A=u*c/(u-c);else if(f===da)b=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(f===Pl)b=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,f=da,d=!1){const p=this.elements,g=2/(n-t),v=2/(a-o),_=-(n+t)/(n-t),x=-(a+o)/(a-o);let b,A;if(d)b=1/(u-c),A=u/(u-c);else if(f===da)b=-2/(u-c),A=-(u+c)/(u-c);else if(f===Pl)b=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};Xu.prototype.isMatrix4=!0;let $e=Xu;const Wr=new X,Zi=new $e,p2=new X(0,0,0),m2=new X(1,1,1),xs=new X,Jc=new X,Ti=new X,C1=new $e,D1=new ga;class Xa{constructor(t=0,n=0,a=0,o=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],d=o[1],p=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return C1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(C1,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return D1.setFromEuler(this),this.setFromQuaternion(D1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class hp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let g2=0;const U1=new X,Xr=new ga,Ia=new $e,tu=new X,dl=new X,v2=new X,_2=new ga,N1=new X(1,0,0),L1=new X(0,1,0),P1=new X(0,0,1),O1={type:"added"},x2={type:"removed"},qr={type:"childadded",child:null},vd={type:"childremoved",child:null};class Fn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g2++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new X,n=new Xa,a=new ga,o=new X(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $e},normalMatrix:{value:new he}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Xr.setFromAxisAngle(t,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,n){return Xr.setFromAxisAngle(t,n),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(N1,t)}rotateY(t){return this.rotateOnAxis(L1,t)}rotateZ(t){return this.rotateOnAxis(P1,t)}translateOnAxis(t,n){return U1.copy(t).applyQuaternion(this.quaternion),this.position.add(U1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(N1,t)}translateY(t){return this.translateOnAxis(L1,t)}translateZ(t){return this.translateOnAxis(P1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ia.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?tu.copy(t):tu.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ia.lookAt(dl,tu,this.up):Ia.lookAt(tu,dl,this.up),this.quaternion.setFromRotationMatrix(Ia),o&&(Ia.extractRotation(o.matrixWorld),Xr.setFromRotationMatrix(Ia),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(O1),qr.child=t,this.dispatchEvent(qr),qr.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(x2),vd.child=t,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(O1),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,t,v2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,_2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n,a=!1){const o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,f=c.length;u<f;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];c(t.shapes,v)}else c(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(c(t.materials,this.material[d]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(c(t.animations,d))}}if(n){const f=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),b=u(t.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new X(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class eu extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y2={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const A of t.hand.values()){const M=n.getJointPose(A,a),y=this._getHandJoint(p,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,b=.005;p.inputState.pinching&&_>x+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=x-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:t,target:this})));f!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(y2)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new eu;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},nu={h:0,s:0,l:0};function xd(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class se{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Ce.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ce.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Ce.workingColorSpace){if(t=cp(t,1),n=Me(n,0,1),a=Me(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=xd(u,c,t+1/3),this.g=xd(u,c,t),this.b=xd(u,c,t-1/3)}return Ce.colorSpaceToWorking(this,o),this}setStyle(t,n=fi){function a(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:oe("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=fi){const a=ox[t.toLowerCase()];return a!==void 0?this.setHex(a,n):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ka(t.r),this.g=ka(t.g),this.b=ka(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Ce.workingToColorSpace(jn.copy(this),t),Math.round(Me(jn.r*255,0,255))*65536+Math.round(Me(jn.g*255,0,255))*256+Math.round(Me(jn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ce.workingColorSpace){Ce.workingToColorSpace(jn.copy(this),n);const a=jn.r,o=jn.g,c=jn.b,u=Math.max(a,o,c),f=Math.min(a,o,c);let d,p;const g=(f+u)/2;if(f===u)d=0,p=0;else{const v=u-f;switch(p=g<=.5?v/(u+f):v/(2-u-f),u){case a:d=(o-c)/v+(o<c?6:0);break;case o:d=(c-a)/v+2;break;case c:d=(a-o)/v+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=Ce.workingColorSpace){return Ce.workingToColorSpace(jn.copy(this),n),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=fi){Ce.workingToColorSpace(jn.copy(this),t);const n=jn.r,a=jn.g,o=jn.b;return t!==fi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(ys),this.setHSL(ys.h+t,ys.s+n,ys.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ys),t.getHSL(nu);const a=Cl(ys.h,nu.h,n),o=Cl(ys.s,nu.s,n),c=Cl(ys.l,nu.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new se;se.NAMES=ox;class lx extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xa,this.environmentIntensity=1,this.environmentRotation=new Xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ki=new X,Fa=new X,yd=new X,Ba=new X,Yr=new X,Zr=new X,I1=new X,Md=new X,Sd=new X,bd=new X,Ed=new dn,Td=new dn,Ad=new dn;class $i{constructor(t=new X,n=new X,a=new X){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ki.subVectors(t,n),o.cross(Ki);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ki.subVectors(o,n),Fa.subVectors(a,n),yd.subVectors(t,n);const u=Ki.dot(Ki),f=Ki.dot(Fa),d=Ki.dot(yd),p=Fa.dot(Fa),g=Fa.dot(yd),v=u*p-f*f;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(p*d-f*g)*_,b=(u*g-f*d)*_;return c.set(1-x-b,b,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Ba)===null?!1:Ba.x>=0&&Ba.y>=0&&Ba.x+Ba.y<=1}static getInterpolation(t,n,a,o,c,u,f,d){return this.getBarycoord(t,n,a,o,Ba)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,Ba.x),d.addScaledVector(u,Ba.y),d.addScaledVector(f,Ba.z),d)}static getInterpolatedAttribute(t,n,a,o,c,u){return Ed.setScalar(0),Td.setScalar(0),Ad.setScalar(0),Ed.fromBufferAttribute(t,n),Td.fromBufferAttribute(t,a),Ad.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Ed,c.x),u.addScaledVector(Td,c.y),u.addScaledVector(Ad,c.z),u}static isFrontFacing(t,n,a,o){return Ki.subVectors(a,n),Fa.subVectors(t,n),Ki.cross(Fa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ki.subVectors(this.c,this.b),Fa.subVectors(this.a,this.b),Ki.cross(Fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return $i.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return $i.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return $i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,f;Yr.subVectors(o,a),Zr.subVectors(c,a),Md.subVectors(t,a);const d=Yr.dot(Md),p=Zr.dot(Md);if(d<=0&&p<=0)return n.copy(a);Sd.subVectors(t,o);const g=Yr.dot(Sd),v=Zr.dot(Sd);if(g>=0&&v<=g)return n.copy(o);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(Yr,u);bd.subVectors(t,c);const x=Yr.dot(bd),b=Zr.dot(bd);if(b>=0&&x<=b)return n.copy(c);const A=x*p-d*b;if(A<=0&&p>=0&&b<=0)return f=p/(p-b),n.copy(a).addScaledVector(Zr,f);const M=g*b-x*v;if(M<=0&&v-g>=0&&x-b>=0)return I1.subVectors(c,o),f=(v-g)/(v-g+(x-b)),n.copy(o).addScaledVector(I1,f);const y=1/(M+A+_);return u=A*y,f=_*y,n.copy(a).addScaledVector(Yr,u).addScaledVector(Zr,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class lr{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ji.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ji.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ji.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,ji):ji.fromBufferAttribute(c,u),ji.applyMatrix4(t.matrixWorld),this.expandByPoint(ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),iu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),iu.copy(a.boundingBox)),iu.applyMatrix4(t.matrixWorld),this.union(iu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pl),au.subVectors(this.max,pl),Kr.subVectors(t.a,pl),jr.subVectors(t.b,pl),Qr.subVectors(t.c,pl),Ms.subVectors(jr,Kr),Ss.subVectors(Qr,jr),Ks.subVectors(Kr,Qr);let n=[0,-Ms.z,Ms.y,0,-Ss.z,Ss.y,0,-Ks.z,Ks.y,Ms.z,0,-Ms.x,Ss.z,0,-Ss.x,Ks.z,0,-Ks.x,-Ms.y,Ms.x,0,-Ss.y,Ss.x,0,-Ks.y,Ks.x,0];return!wd(n,Kr,jr,Qr,au)||(n=[1,0,0,0,1,0,0,0,1],!wd(n,Kr,jr,Qr,au))?!1:(su.crossVectors(Ms,Ss),n=[su.x,su.y,su.z],wd(n,Kr,jr,Qr,au))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(za),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const za=[new X,new X,new X,new X,new X,new X,new X,new X],ji=new X,iu=new lr,Kr=new X,jr=new X,Qr=new X,Ms=new X,Ss=new X,Ks=new X,pl=new X,au=new X,su=new X,js=new X;function wd(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){js.fromArray(s,c);const f=o.x*Math.abs(js.x)+o.y*Math.abs(js.y)+o.z*Math.abs(js.z),d=t.dot(js),p=n.dot(js),g=a.dot(js);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const En=new X,ru=new Bt;let M2=0;class Ui extends Rs{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=y1,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)ru.fromBufferAttribute(this,n),ru.applyMatrix3(t),this.setXY(n,ru.x,ru.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyMatrix3(t),this.setXYZ(n,En.x,En.y,En.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(t),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(t),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.transformDirection(t),this.setXYZ(n,En.x,En.y,En.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=so(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ti(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=so(n,this.array)),n}setX(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=so(n,this.array)),n}setY(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=so(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=so(n,this.array)),n}setW(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array),o=ti(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array),o=ti(o,this.array),c=ti(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==y1&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class cx extends Ui{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class ux extends Ui{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class qn extends Ui{constructor(t,n,a){super(new Float32Array(t),n,a)}}const S2=new lr,ml=new X,Rd=new X;class zl{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):S2.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ml.subVectors(t,this.center);const n=ml.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(ml,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ml.copy(t.center).add(Rd)),this.expandByPoint(ml.copy(t.center).sub(Rd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let b2=0;const Hi=new $e,Cd=new Fn,$r=new X,Ai=new lr,gl=new lr,On=new X;class Vi extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b2++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(VS(t)?ux:cx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new he().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hi.makeRotationFromQuaternion(t),this.applyMatrix4(Hi),this}rotateX(t){return Hi.makeRotationX(t),this.applyMatrix4(Hi),this}rotateY(t){return Hi.makeRotationY(t),this.applyMatrix4(Hi),this}rotateZ(t){return Hi.makeRotationZ(t),this.applyMatrix4(Hi),this}translate(t,n,a){return Hi.makeTranslation(t,n,a),this.applyMatrix4(Hi),this}scale(t,n,a){return Hi.makeScale(t,n,a),this.applyMatrix4(Hi),this}lookAt(t){return Cd.lookAt(t),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Ai.setFromBufferAttribute(c),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const a=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];gl.setFromBufferAttribute(f),this.morphTargetsRelative?(On.addVectors(Ai.min,gl.min),Ai.expandByPoint(On),On.addVectors(Ai.max,gl.max),Ai.expandByPoint(On)):(Ai.expandByPoint(gl.min),Ai.expandByPoint(gl.max))}Ai.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)On.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(On));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)On.fromBufferAttribute(f,p),d&&($r.fromBufferAttribute(t,p),On.add($r)),o=Math.max(o,a.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Ui(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const f=[],d=[];for(let T=0;T<a.count;T++)f[T]=new X,d[T]=new X;const p=new X,g=new X,v=new X,_=new Bt,x=new Bt,b=new Bt,A=new X,M=new X;function y(T,O,W){p.fromBufferAttribute(a,T),g.fromBufferAttribute(a,O),v.fromBufferAttribute(a,W),_.fromBufferAttribute(c,T),x.fromBufferAttribute(c,O),b.fromBufferAttribute(c,W),g.sub(p),v.sub(p),x.sub(_),b.sub(_);const V=1/(x.x*b.y-b.x*x.y);isFinite(V)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(v,-x.y).multiplyScalar(V),M.copy(v).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(V),f[T].add(A),f[O].add(A),f[W].add(A),d[T].add(M),d[O].add(M),d[W].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,O=D.length;T<O;++T){const W=D[T],V=W.start,Z=W.count;for(let ut=V,ht=V+Z;ut<ht;ut+=3)y(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const L=new X,w=new X,I=new X,U=new X;function B(T){I.fromBufferAttribute(o,T),U.copy(I);const O=f[T];L.copy(O),L.sub(I.multiplyScalar(I.dot(O))).normalize(),w.crossVectors(U,O);const V=w.dot(d[T])<0?-1:1;u.setXYZW(T,L.x,L.y,L.z,V)}for(let T=0,O=D.length;T<O;++T){const W=D[T],V=W.start,Z=W.count;for(let ut=V,ht=V+Z;ut<ht;ut+=3)B(t.getX(ut+0)),B(t.getX(ut+1)),B(t.getX(ut+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Ui(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new X,c=new X,u=new X,f=new X,d=new X,p=new X,g=new X,v=new X;if(t)for(let _=0,x=t.count;_<x;_+=3){const b=t.getX(_+0),A=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),f.fromBufferAttribute(a,b),d.fromBufferAttribute(a,A),p.fromBufferAttribute(a,M),f.add(g),d.add(g),p.add(g),a.setXYZ(b,f.x,f.y,f.z),a.setXYZ(A,d.x,d.y,d.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)On.fromBufferAttribute(t,n),On.normalize(),t.setXYZ(n,On.x,On.y,On.z)}toNonIndexed(){function t(f,d){const p=f.array,g=f.itemSize,v=f.normalized,_=new p.constructor(d.length*g);let x=0,b=0;for(let A=0,M=d.length;A<M;A++){f.isInterleavedBufferAttribute?x=d[A]*f.data.stride+f.offset:x=d[A]*g;for(let y=0;y<g;y++)_[b++]=p[x++]}return new Ui(_,g,v)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vi,a=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=t(d,a);n.setAttribute(f,p)}const c=this.morphAttributes;for(const f in c){const d=[],p=c[f];for(let g=0,v=p.length;g<v;g++){const _=p[g],x=t(_,a);d.push(x)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const o={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const x=p[v];g.push(x.toJSON(t.data))}g.length>0&&(o[d]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let E2=0;class _o extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E2++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=oo,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Qd,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){oe(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(a.blending=this.blending),this.side!==ws&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==jd&&(a.blendSrc=this.blendSrc),this.blendDst!==Qd&&(a.blendDst=this.blendDst),this.blendEquation!==er&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x1&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const f in c){const d=c[f];delete d.metadata,u.push(d)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Bt().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ha=new X,Dd=new X,ou=new X,bs=new X,Ud=new X,lu=new X,Nd=new X;class fp{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ha)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ha.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ha.copy(this.origin).addScaledVector(this.direction,n),Ha.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Dd.copy(t).add(n).multiplyScalar(.5),ou.copy(n).sub(t).normalize(),bs.copy(this.origin).sub(Dd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(ou),f=bs.dot(this.direction),d=-bs.dot(ou),p=bs.lengthSq(),g=Math.abs(1-u*u);let v,_,x,b;if(g>0)if(v=u*d-f,_=u*f-d,b=c*g,v>=0)if(_>=-b)if(_<=b){const A=1/g;v*=A,_*=A,x=v*(v+u*_+2*f)+_*(u*v+_+2*d)+p}else _=c,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*d)+p;else _=-c,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*d)+p;else _<=-b?(v=Math.max(0,-(-u*c+f)),_=v>0?-c:Math.min(Math.max(-c,-d),c),x=-v*v+_*(_+2*d)+p):_<=b?(v=0,_=Math.min(Math.max(-c,-d),c),x=_*(_+2*d)+p):(v=Math.max(0,-(u*c+f)),_=v>0?c:Math.min(Math.max(-c,-d),c),x=-v*v+_*(_+2*d)+p);else _=u>0?-c:c,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Dd).addScaledVector(ou,_),x}intersectSphere(t,n){Ha.subVectors(t.center,this.origin);const a=Ha.dot(this.direction),o=Ha.dot(Ha)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=a-u,d=a+u;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,f,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(a=(t.min.x-_.x)*p,o=(t.max.x-_.x)*p):(a=(t.max.x-_.x)*p,o=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(f=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),a>d||f>o)||((f>a||a!==a)&&(a=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,Ha)!==null}intersectTriangle(t,n,a,o,c){Ud.subVectors(n,t),lu.subVectors(a,t),Nd.crossVectors(Ud,lu);let u=this.direction.dot(Nd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;bs.subVectors(this.origin,t);const d=f*this.direction.dot(lu.crossVectors(bs,lu));if(d<0)return null;const p=f*this.direction.dot(Ud.cross(bs));if(p<0||d+p>u)return null;const g=-f*bs.dot(Nd);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dp extends _o{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const F1=new $e,Qs=new fp,cu=new zl,B1=new X,uu=new X,hu=new X,fu=new X,Ld=new X,du=new X,z1=new X,pu=new X;class Tn extends Fn{constructor(t=new Vi,n=new dp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){du.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=f[d],v=c[d];g!==0&&(Ld.fromBufferAttribute(v,t),u?du.addScaledVector(Ld,g):du.addScaledVector(Ld.sub(n),g))}n.add(du)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),cu.copy(a.boundingSphere),cu.applyMatrix4(c),Qs.copy(t.ray).recast(t.near),!(cu.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(cu,B1)===null||Qs.origin.distanceToSquared(B1)>(t.far-t.near)**2))&&(F1.copy(c).invert(),Qs.copy(t.ray).applyMatrix4(F1),!(a.boundingBox!==null&&Qs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Qs)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,f=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,A=_.length;b<A;b++){const M=_[b],y=u[M.materialIndex],D=Math.max(M.start,x.start),L=Math.min(f.count,Math.min(M.start+M.count,x.start+x.count));for(let w=D,I=L;w<I;w+=3){const U=f.getX(w),B=f.getX(w+1),T=f.getX(w+2);o=mu(this,y,t,a,p,g,v,U,B,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(f.count,x.start+x.count);for(let M=b,y=A;M<y;M+=3){const D=f.getX(M),L=f.getX(M+1),w=f.getX(M+2);o=mu(this,u,t,a,p,g,v,D,L,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let b=0,A=_.length;b<A;b++){const M=_[b],y=u[M.materialIndex],D=Math.max(M.start,x.start),L=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let w=D,I=L;w<I;w+=3){const U=w,B=w+1,T=w+2;o=mu(this,y,t,a,p,g,v,U,B,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let M=b,y=A;M<y;M+=3){const D=M,L=M+1,w=M+2;o=mu(this,u,t,a,p,g,v,D,L,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function T2(s,t,n,a,o,c,u,f){let d;if(t.side===ni?d=a.intersectTriangle(u,c,o,!0,f):d=a.intersectTriangle(o,c,u,t.side===ws,f),d===null)return null;pu.copy(f),pu.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(pu);return p<n.near||p>n.far?null:{distance:p,point:pu.clone(),object:s}}function mu(s,t,n,a,o,c,u,f,d,p){s.getVertexPosition(f,uu),s.getVertexPosition(d,hu),s.getVertexPosition(p,fu);const g=T2(s,t,n,a,uu,hu,fu,z1);if(g){const v=new X;$i.getBarycoord(z1,uu,hu,fu,v),o&&(g.uv=$i.getInterpolatedAttribute(o,f,d,p,v,new Bt)),c&&(g.uv1=$i.getInterpolatedAttribute(c,f,d,p,v,new Bt)),u&&(g.normal=$i.getInterpolatedAttribute(u,f,d,p,v,new X),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:d,c:p,normal:new X,materialIndex:0};$i.getNormal(uu,hu,fu,_.normal),g.face=_,g.barycoord=v}return g}class hx extends Qn{constructor(t=null,n=1,a=1,o,c,u,f,d,p=Un,g=Un,v,_){super(null,u,f,d,p,g,o,c,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H1 extends Ui{constructor(t,n,a,o=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Jr=new $e,G1=new $e,gu=[],V1=new lr,A2=new $e,vl=new Tn,_l=new zl;class I0 extends Tn{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new H1(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,A2)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new lr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Jr),V1.copy(t.boundingBox).applyMatrix4(Jr),this.boundingBox.union(V1)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new zl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Jr),_l.copy(t.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(_l)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let f=0;f<a.length;f++)a[f]=o[u+f]}raycast(t,n){const a=this.matrixWorld,o=this.count;if(vl.geometry=this.geometry,vl.material=this.material,vl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_l.copy(this.boundingSphere),_l.applyMatrix4(a),t.ray.intersectsSphere(_l)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,Jr),G1.multiplyMatrices(a,Jr),vl.matrixWorld=G1,vl.raycast(t,gu);for(let u=0,f=gu.length;u<f;u++){const d=gu[u];d.instanceId=c,d.object=this,n.push(d)}gu.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new H1(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new hx(new Float32Array(o*this.count),o,this.count,ip,Ji));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const f=this.geometry.morphTargetsRelative?1:1-u,d=o*t;return c[d]=f,c.set(a,d+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pd=new X,w2=new X,R2=new he;class ua{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Pd.subVectors(a,n).cross(w2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const o=t.delta(Pd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(o,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||R2.getNormalMatrix(t),o=this.coplanarPoint(Pd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new zl,C2=new Bt(.5,.5),vu=new X;class pp{constructor(t=new ua,n=new ua,a=new ua,o=new ua,c=new ua,u=new ua){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=da,a=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],d=c[2],p=c[3],g=c[4],v=c[5],_=c[6],x=c[7],b=c[8],A=c[9],M=c[10],y=c[11],D=c[12],L=c[13],w=c[14],I=c[15];if(o[0].setComponents(p-u,x-g,y-b,I-D).normalize(),o[1].setComponents(p+u,x+g,y+b,I+D).normalize(),o[2].setComponents(p+f,x+v,y+A,I+L).normalize(),o[3].setComponents(p-f,x-v,y-A,I-L).normalize(),a)o[4].setComponents(d,_,M,w).normalize(),o[5].setComponents(p-d,x-_,y-M,I-w).normalize();else if(o[4].setComponents(p-d,x-_,y-M,I-w).normalize(),n===da)o[5].setComponents(p+d,x+_,y+M,I+w).normalize();else if(n===Pl)o[5].setComponents(d,_,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(t){$s.center.set(0,0,0);const n=C2.distanceTo(t.center);return $s.radius=.7071067811865476+n,$s.applyMatrix4(t.matrixWorld),this.intersectsSphere($s)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(vu.x=o.normal.x>0?t.max.x:t.min.x,vu.y=o.normal.y>0?t.max.y:t.min.y,vu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(vu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fx extends Qn{constructor(t=[],n=sr,a,o,c,u,f,d,p,g){super(t,n,a,o,c,u,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Il extends Qn{constructor(t,n,a,o,c,u,f,d,p){super(t,n,a,o,c,u,f,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class po extends Qn{constructor(t,n,a=ma,o,c,u,f=Un,d=Un,p,g=Wa,v=1){if(g!==Wa&&g!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,c,u,f,d,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new up(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class D2 extends po{constructor(t,n=ma,a=sr,o,c,u=Un,f=Un,d,p=Wa){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,n,a,o,c,u,f,d,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dx extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xo extends Vi{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],v=[];let _=0,x=0;b("z","y","x",-1,-1,a,n,t,u,c,0),b("z","y","x",1,-1,a,n,-t,u,c,1),b("x","z","y",1,1,t,a,n,o,u,2),b("x","z","y",1,-1,t,a,-n,o,u,3),b("x","y","z",1,-1,t,n,a,o,c,4),b("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(d),this.setAttribute("position",new qn(p,3)),this.setAttribute("normal",new qn(g,3)),this.setAttribute("uv",new qn(v,2));function b(A,M,y,D,L,w,I,U,B,T,O){const W=w/B,V=I/T,Z=w/2,ut=I/2,ht=U/2,j=B+1,z=T+1;let H=0,J=0;const ft=new X;for(let St=0;St<z;St++){const F=St*V-ut;for(let K=0;K<j;K++){const _t=K*W-Z;ft[A]=_t*D,ft[M]=F*L,ft[y]=ht,p.push(ft.x,ft.y,ft.z),ft[A]=0,ft[M]=0,ft[y]=U>0?1:-1,g.push(ft.x,ft.y,ft.z),v.push(K/B),v.push(1-St/T),H+=1}}for(let St=0;St<T;St++)for(let F=0;F<B;F++){const K=_+F+j*St,_t=_+F+j*(St+1),Et=_+(F+1)+j*(St+1),wt=_+(F+1)+j*St;d.push(K,_t,wt),d.push(_t,Et,wt),J+=6}f.addGroup(x,J,O),x+=J,_+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class mp extends Vi{constructor(t=[new Bt(0,-.5),new Bt(.5,0),new Bt(0,.5)],n=12,a=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:a,phiLength:o},n=Math.floor(n),o=Me(o,0,Math.PI*2);const c=[],u=[],f=[],d=[],p=[],g=1/n,v=new X,_=new Bt,x=new X,b=new X,A=new X;let M=0,y=0;for(let D=0;D<=t.length-1;D++)switch(D){case 0:M=t[D+1].x-t[D].x,y=t[D+1].y-t[D].y,x.x=y*1,x.y=-M,x.z=y*0,A.copy(x),x.normalize(),d.push(x.x,x.y,x.z);break;case t.length-1:d.push(A.x,A.y,A.z);break;default:M=t[D+1].x-t[D].x,y=t[D+1].y-t[D].y,x.x=y*1,x.y=-M,x.z=y*0,b.copy(x),x.x+=A.x,x.y+=A.y,x.z+=A.z,x.normalize(),d.push(x.x,x.y,x.z),A.copy(b)}for(let D=0;D<=n;D++){const L=a+D*g*o,w=Math.sin(L),I=Math.cos(L);for(let U=0;U<=t.length-1;U++){v.x=t[U].x*w,v.y=t[U].y,v.z=t[U].x*I,u.push(v.x,v.y,v.z),_.x=D/n,_.y=U/(t.length-1),f.push(_.x,_.y);const B=d[3*U+0]*w,T=d[3*U+1],O=d[3*U+0]*I;p.push(B,T,O)}}for(let D=0;D<n;D++)for(let L=0;L<t.length-1;L++){const w=L+D*t.length,I=w,U=w+t.length,B=w+t.length+1,T=w+1;c.push(I,U,T),c.push(B,T,U)}this.setIndex(c),this.setAttribute("position",new qn(u,3)),this.setAttribute("uv",new qn(f,2)),this.setAttribute("normal",new qn(p,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mp(t.points,t.segments,t.phiStart,t.phiLength)}}class Hl extends Vi{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(a),d=Math.floor(o),p=f+1,g=d+1,v=t/f,_=n/d,x=[],b=[],A=[],M=[];for(let y=0;y<g;y++){const D=y*_-u;for(let L=0;L<p;L++){const w=L*v-c;b.push(w,-D,0),A.push(0,0,1),M.push(L/f),M.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<f;D++){const L=D+p*y,w=D+p*(y+1),I=D+1+p*(y+1),U=D+1+p*y;x.push(L,w,U),x.push(w,I,U)}this.setIndex(x),this.setAttribute("position",new qn(b,3)),this.setAttribute("normal",new qn(A,3)),this.setAttribute("uv",new qn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hl(t.width,t.height,t.widthSegments,t.heightSegments)}}class gp extends Vi{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+f,Math.PI);let p=0;const g=[],v=new X,_=new X,x=[],b=[],A=[],M=[];for(let y=0;y<=a;y++){const D=[],L=y/a,w=u+L*f,I=t*Math.cos(w),U=Math.sqrt(t*t-I*I);let B=0;y===0&&u===0?B=.5/n:y===a&&d===Math.PI&&(B=-.5/n);for(let T=0;T<=n;T++){const O=T/n,W=o+O*c;v.x=-U*Math.cos(W),v.y=I,v.z=U*Math.sin(W),b.push(v.x,v.y,v.z),_.copy(v).normalize(),A.push(_.x,_.y,_.z),M.push(O+B,1-L),D.push(p++)}g.push(D)}for(let y=0;y<a;y++)for(let D=0;D<n;D++){const L=g[y][D+1],w=g[y][D],I=g[y+1][D],U=g[y+1][D+1];(y!==0||u>0)&&x.push(L,w,U),(y!==a-1||d<Math.PI)&&x.push(w,I,U)}this.setIndex(x),this.setAttribute("position",new qn(b,3)),this.setAttribute("normal",new qn(A,3)),this.setAttribute("uv",new qn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function mo(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];if(k1(o))o.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone();else if(Array.isArray(o))if(k1(o[0])){const c=[];for(let u=0,f=o.length;u<f;u++)c[u]=o[u].clone();t[n][a]=c}else t[n][a]=o.slice();else t[n][a]=o}}return t}function ei(s){const t={};for(let n=0;n<s.length;n++){const a=mo(s[n]);for(const o in a)t[o]=a[o]}return t}function k1(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function U2(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function px(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Fl={clone:mo,merge:ei};var N2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends _o{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N2,this.fragmentShader=L2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mo(t.uniforms),this.uniformsGroups=U2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const a in t.uniforms){const o=t.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new se().setHex(o.value);break;case"v2":this.uniforms[a].value=new Bt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new X().fromArray(o.value);break;case"v4":this.uniforms[a].value=new dn().fromArray(o.value);break;case"m3":this.uniforms[a].value=new he().fromArray(o.value);break;case"m4":this.uniforms[a].value=new $e().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class mx extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class F0 extends _o{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gx extends F0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class P2 extends _o{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=K0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vx extends _o{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class O2 extends _o{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _x extends Fn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Od=new $e,W1=new X,X1=new X;class xx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pp,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;W1.setFromMatrixPosition(t.matrixWorld),n.position.copy(W1),X1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(X1),n.updateMatrixWorld(),Od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Pl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Od)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _u=new X,xu=new ga,la=new X;class yx extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_u,xu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,xu,la.set(1,1,1)).invert()}updateWorldMatrix(t,n,a=!1){super.updateWorldMatrix(t,n,a),this.matrixWorld.decompose(_u,xu,la),la.x===1&&la.y===1&&la.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_u,xu,la.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Es=new X,q1=new Bt,Y1=new Bt;class wi extends yx{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ol*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(Rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,n){return this.getViewBounds(t,q1,Y1),n.subVectors(Y1,q1)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Rl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/d,n-=u.offsetY*a/p,o*=u.width/d,a*=u.height/p}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class I2 extends xx{constructor(){super(new wi(90,1,.5,500)),this.isPointLightShadow=!0}}class F2 extends _x{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new I2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ku extends yx{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,f=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class B2 extends xx{constructor(){super(new Ku(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Id extends _x{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new B2}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const to=-90,eo=1;class z2 extends Fn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new wi(to,eo,t,n);o.layers=this.layers,this.add(o);const c=new wi(to,eo,t,n);c.layers=this.layers,this.add(c);const u=new wi(to,eo,t,n);u.layers=this.layers,this.add(u);const f=new wi(to,eo,t,n);f.layers=this.layers,this.add(f);const d=new wi(to,eo,t,n);d.layers=this.layers,this.add(d);const p=new wi(to,eo,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,f,d]=n;for(const p of n)this.remove(p);if(t===da)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Pl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,d,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(a,3,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(a,4,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),a.texture.generateMipmaps=A,t.setRenderTarget(a,5,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class H2 extends wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class G2{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=V2.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function V2(){this._document.hidden===!1&&this.reset()}const vp="\\[\\]\\.:\\/",k2=new RegExp("["+vp+"]","g"),_p="[^"+vp+"]",W2="[^"+vp.replace("\\.","")+"]",X2=/((?:WC+[\/:])*)/.source.replace("WC",_p),q2=/(WCOD+)?/.source.replace("WCOD",W2),Y2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_p),Z2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_p),K2=new RegExp("^"+X2+q2+Y2+Z2+"$"),j2=["material","materials","bones","map"];class Q2{constructor(t,n,a){const o=a||Be.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,o)}getValue(t,n){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(t,n)}setValue(t,n){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=t.length;n!==a;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=t.length;n!==a;++n)t[n].unbind()}}class Be{constructor(t,n,a){this.path=n,this.parsedPath=a||Be.parseTrackName(n),this.node=Be.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,a){return t&&t.isAnimationObjectGroup?new Be.Composite(t,n,a):new Be(t,n,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(k2,"")}static parseTrackName(t){const n=K2.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);j2.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const a=t.skeleton.getBoneByName(n);if(a!==void 0)return a}if(t.children){const a=function(c){for(let u=0;u<c.length;u++){const f=c[u];if(f.name===n||f.uuid===n)return f;const d=a(f.children);if(d)return d}return null},o=a(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)t[n++]=a[o]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,a=n.objectName,o=n.propertyName;let c=n.propertyIndex;if(t||(t=Be.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let p=n.objectIndex;switch(a){case"materials":if(!t.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===p){p=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[a]===void 0){pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(p!==void 0){if(t[p]===void 0){pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[p]}}const u=t[o];if(u===void 0){const p=n.nodeName;pe("PropertyBinding: Trying to update property for track: "+p+"."+o+" but it wasn't found.",t);return}let f=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?f=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[c]!==void 0&&(c=t.morphTargetDictionary[c])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Be.Composite=Q2;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Z1=new $e;class $2{constructor(t,n,a=0,o=1/0){this.ray=new fp(t,n),this.near=a,this.far=o,this.camera=null,this.layers=new hp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):pe("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Z1.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Z1),this}intersectObject(t,n=!0,a=[]){return B0(t,this,a,n),a.sort(K1),a}intersectObjects(t,n=!0,a=[]){for(let o=0,c=t.length;o<c;o++)B0(t[o],this,a,n);return a.sort(K1),a}}function K1(s,t){return s.distance-t.distance}function B0(s,t,n,a){let o=!0;if(s.layers.test(t.layers)&&s.raycast(t,n)===!1&&(o=!1),o===!0&&a===!0){const c=s.children;for(let u=0,f=c.length;u<f;u++)B0(c[u],t,n,!0)}}class J2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class j1{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(Me(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const wp=class wp{constructor(t,n,a,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,o){const c=this.elements;return c[0]=t,c[2]=n,c[1]=a,c[3]=o,this}};wp.prototype.isMatrix2=!0;let Q1=wp;class tb extends Rs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $1(s,t,n,a){const o=eb(a);switch(n){case nx:return s*t;case ip:return s*t/o.components*o.byteLength;case ap:return s*t/o.components*o.byteLength;case rr:return s*t*2/o.components*o.byteLength;case sp:return s*t*2/o.components*o.byteLength;case ix:return s*t*3/o.components*o.byteLength;case ta:return s*t*4/o.components*o.byteLength;case rp:return s*t*4/o.components*o.byteLength;case Uu:case Nu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Lu:case Pu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case o0:case c0:return Math.max(s,16)*Math.max(t,8)/4;case r0:case l0:return Math.max(s,8)*Math.max(t,8)/2;case u0:case h0:case d0:case p0:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case f0:case Fu:case m0:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case g0:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case v0:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _0:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case x0:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case y0:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case M0:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case S0:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case b0:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case E0:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case T0:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case A0:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case w0:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case R0:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case C0:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case D0:case U0:case N0:return Math.ceil(s/4)*Math.ceil(t/4)*16;case L0:case P0:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Bu:case O0:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eb(s){switch(s){case Ri:case $_:return{byteLength:1,components:1};case Nl:case J_:case ii:return{byteLength:2,components:1};case ep:case np:return{byteLength:2,components:4};case ma:case tp:case Ji:return{byteLength:4,components:1};case tx:case ex:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Z0}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Z0);function Mx(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function nb(s){const t=new WeakMap;function n(f,d){const p=f.array,g=f.usage,v=p.byteLength,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,p,g),f.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,d,p){const g=d.array,v=d.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,g);else{v.sort((x,b)=>x.start-b.start);let _=0;for(let x=1;x<v.length;x++){const b=v[_],A=v[x];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++_,v[_]=A)}v.length=_+1;for(let x=0,b=v.length;x<b;x++){const A=v[x];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(s.deleteBuffer(d.buffer),t.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:o,remove:c,update:u}}var ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ab=`#ifdef USE_ALPHAHASH
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
#endif`,sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cb=`#ifdef USE_AOMAP
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
#endif`,ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hb=`#ifdef USE_BATCHING
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
#endif`,fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,db=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gb=`#ifdef USE_IRIDESCENCE
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
#endif`,vb=`#ifdef USE_BUMPMAP
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
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ab=`#define PI 3.141592653589793
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
} // validated`,wb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rb=`vec3 transformedNormal = objectNormal;
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
#endif`,Cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ob=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wb=`#ifdef USE_GRADIENTMAP
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
}`,Xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Kb=`#ifdef USE_ENVMAP
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
#endif`,jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t3=`PhysicalMaterial material;
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
#endif`,e3=`uniform sampler2D dfgLUT;
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
}`,n3=`
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
#endif`,i3=`#if defined( RE_IndirectDiffuse )
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
#endif`,a3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s3=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d3=`#if defined( USE_POINTS_UV )
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
#endif`,p3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x3=`#ifdef USE_MORPHTARGETS
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
#endif`,y3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A3=`#ifdef USE_NORMALMAP
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
#endif`,w3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V3=`float getShadowMask() {
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
}`,k3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W3=`#ifdef USE_SKINNING
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
#endif`,X3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q3=`#ifdef USE_SKINNING
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
#endif`,Y3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q3=`#ifdef USE_TRANSMISSION
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
#endif`,$3=`#ifdef USE_TRANSMISSION
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
#endif`,J3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
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
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`#include <common>
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
}`,uE=`#if DEPTH_PACKING == 3200
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
}`,hE=`#define DISTANCE
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
}`,fE=`#define DISTANCE
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
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`uniform float scale;
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
}`,gE=`uniform vec3 diffuse;
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
}`,vE=`#include <common>
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
}`,_E=`uniform vec3 diffuse;
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
}`,xE=`#define LAMBERT
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
}`,yE=`#define LAMBERT
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
}`,ME=`#define MATCAP
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
}`,SE=`#define MATCAP
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
}`,bE=`#define NORMAL
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
}`,EE=`#define NORMAL
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
}`,TE=`#define PHONG
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
}`,AE=`#define PHONG
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
}`,wE=`#define STANDARD
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
}`,RE=`#define STANDARD
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
}`,CE=`#define TOON
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
}`,DE=`#define TOON
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
}`,UE=`uniform float size;
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
}`,NE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,PE=`uniform vec3 color;
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
}`,OE=`uniform float rotation;
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
}`,IE=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:ib,alphahash_pars_fragment:ab,alphamap_fragment:sb,alphamap_pars_fragment:rb,alphatest_fragment:ob,alphatest_pars_fragment:lb,aomap_fragment:cb,aomap_pars_fragment:ub,batching_pars_vertex:hb,batching_vertex:fb,begin_vertex:db,beginnormal_vertex:pb,bsdfs:mb,iridescence_fragment:gb,bumpmap_pars_fragment:vb,clipping_planes_fragment:_b,clipping_planes_pars_fragment:xb,clipping_planes_pars_vertex:yb,clipping_planes_vertex:Mb,color_fragment:Sb,color_pars_fragment:bb,color_pars_vertex:Eb,color_vertex:Tb,common:Ab,cube_uv_reflection_fragment:wb,defaultnormal_vertex:Rb,displacementmap_pars_vertex:Cb,displacementmap_vertex:Db,emissivemap_fragment:Ub,emissivemap_pars_fragment:Nb,colorspace_fragment:Lb,colorspace_pars_fragment:Pb,envmap_fragment:Ob,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Fb,envmap_pars_vertex:Bb,envmap_physical_pars_fragment:Kb,envmap_vertex:zb,fog_vertex:Hb,fog_pars_vertex:Gb,fog_fragment:Vb,fog_pars_fragment:kb,gradientmap_pars_fragment:Wb,lightmap_pars_fragment:Xb,lights_lambert_fragment:qb,lights_lambert_pars_fragment:Yb,lights_pars_begin:Zb,lights_toon_fragment:jb,lights_toon_pars_fragment:Qb,lights_phong_fragment:$b,lights_phong_pars_fragment:Jb,lights_physical_fragment:t3,lights_physical_pars_fragment:e3,lights_fragment_begin:n3,lights_fragment_maps:i3,lights_fragment_end:a3,lightprobes_pars_fragment:s3,logdepthbuf_fragment:r3,logdepthbuf_pars_fragment:o3,logdepthbuf_pars_vertex:l3,logdepthbuf_vertex:c3,map_fragment:u3,map_pars_fragment:h3,map_particle_fragment:f3,map_particle_pars_fragment:d3,metalnessmap_fragment:p3,metalnessmap_pars_fragment:m3,morphinstance_vertex:g3,morphcolor_vertex:v3,morphnormal_vertex:_3,morphtarget_pars_vertex:x3,morphtarget_vertex:y3,normal_fragment_begin:M3,normal_fragment_maps:S3,normal_pars_fragment:b3,normal_pars_vertex:E3,normal_vertex:T3,normalmap_pars_fragment:A3,clearcoat_normal_fragment_begin:w3,clearcoat_normal_fragment_maps:R3,clearcoat_pars_fragment:C3,iridescence_pars_fragment:D3,opaque_fragment:U3,packing:N3,premultiplied_alpha_fragment:L3,project_vertex:P3,dithering_fragment:O3,dithering_pars_fragment:I3,roughnessmap_fragment:F3,roughnessmap_pars_fragment:B3,shadowmap_pars_fragment:z3,shadowmap_pars_vertex:H3,shadowmap_vertex:G3,shadowmask_pars_fragment:V3,skinbase_vertex:k3,skinning_pars_vertex:W3,skinning_vertex:X3,skinnormal_vertex:q3,specularmap_fragment:Y3,specularmap_pars_fragment:Z3,tonemapping_fragment:K3,tonemapping_pars_fragment:j3,transmission_fragment:Q3,transmission_pars_fragment:$3,uv_pars_fragment:J3,uv_pars_vertex:tE,uv_vertex:eE,worldpos_vertex:nE,background_vert:iE,background_frag:aE,backgroundCube_vert:sE,backgroundCube_frag:rE,cube_vert:oE,cube_frag:lE,depth_vert:cE,depth_frag:uE,distance_vert:hE,distance_frag:fE,equirect_vert:dE,equirect_frag:pE,linedashed_vert:mE,linedashed_frag:gE,meshbasic_vert:vE,meshbasic_frag:_E,meshlambert_vert:xE,meshlambert_frag:yE,meshmatcap_vert:ME,meshmatcap_frag:SE,meshnormal_vert:bE,meshnormal_frag:EE,meshphong_vert:TE,meshphong_frag:AE,meshphysical_vert:wE,meshphysical_frag:RE,meshtoon_vert:CE,meshtoon_frag:DE,points_vert:UE,points_frag:NE,shadow_vert:LE,shadow_frag:PE,sprite_vert:OE,sprite_frag:IE},It={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},ha={basic:{uniforms:ei([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:ei([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:ei([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:ei([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:ei([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new se(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:ei([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:ei([It.points,It.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:ei([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:ei([It.common,It.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:ei([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:ei([It.sprite,It.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:ei([It.common,It.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:ei([It.lights,It.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};ha.physical={uniforms:ei([ha.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const yu={r:0,b:0,g:0},FE=new $e,Sx=new he;Sx.set(-1,0,0,0,1,0,0,0,1);function BE(s,t,n,a,o,c){const u=new se(0);let f=o===!0?0:1,d,p,g=null,v=0,_=null;function x(D){let L=D.isScene===!0?D.background:null;if(L&&L.isTexture){const w=D.backgroundBlurriness>0;L=t.get(L,w)}return L}function b(D){let L=!1;const w=x(D);w===null?M(u,f):w&&w.isColor&&(M(w,1),L=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(D,L){const w=x(L);w&&(w.isCubeTexture||w.mapping===Zu)?(p===void 0&&(p=new Tn(new xo(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:mo(ha.backgroundCube.uniforms),vertexShader:ha.backgroundCube.vertexShader,fragmentShader:ha.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(FE.makeRotationFromEuler(L.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Sx),p.material.toneMapped=Ce.getTransfer(w.colorSpace)!==Fe,(g!==w||v!==w.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,g=w,v=w.version,_=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new Tn(new Hl(2,2),new In({name:"BackgroundMaterial",uniforms:mo(ha.background.uniforms),vertexShader:ha.background.vertexShader,fragmentShader:ha.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=Ce.getTransfer(w.colorSpace)!==Fe,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,g=w,v=w.version,_=s.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function M(D,L){D.getRGB(yu,px(s)),n.buffers.color.setClear(yu.r,yu.g,yu.b,L,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,L=1){u.set(D),f=L,M(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,M(u,f)},render:b,addToRenderList:A,dispose:y}}function zE(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function f(V,Z,ut,ht,j){let z=!1;const H=v(V,ht,ut,Z);c!==H&&(c=H,p(c.object)),z=x(V,ht,ut,j),z&&b(V,ht,ut,j),j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,w(V,Z,ut,ht),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return s.createVertexArray()}function p(V){return s.bindVertexArray(V)}function g(V){return s.deleteVertexArray(V)}function v(V,Z,ut,ht){const j=ht.wireframe===!0;let z=a[Z.id];z===void 0&&(z={},a[Z.id]=z);const H=V.isInstancedMesh===!0?V.id:0;let J=z[H];J===void 0&&(J={},z[H]=J);let ft=J[ut.id];ft===void 0&&(ft={},J[ut.id]=ft);let St=ft[j];return St===void 0&&(St=_(d()),ft[j]=St),St}function _(V){const Z=[],ut=[],ht=[];for(let j=0;j<n;j++)Z[j]=0,ut[j]=0,ht[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ut,attributeDivisors:ht,object:V,attributes:{},index:null}}function x(V,Z,ut,ht){const j=c.attributes,z=Z.attributes;let H=0;const J=ut.getAttributes();for(const ft in J)if(J[ft].location>=0){const F=j[ft];let K=z[ft];if(K===void 0&&(ft==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),ft==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),F===void 0||F.attribute!==K||K&&F.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==ht}function b(V,Z,ut,ht){const j={},z=Z.attributes;let H=0;const J=ut.getAttributes();for(const ft in J)if(J[ft].location>=0){let F=z[ft];F===void 0&&(ft==="instanceMatrix"&&V.instanceMatrix&&(F=V.instanceMatrix),ft==="instanceColor"&&V.instanceColor&&(F=V.instanceColor));const K={};K.attribute=F,F&&F.data&&(K.data=F.data),j[ft]=K,H++}c.attributes=j,c.attributesNum=H,c.index=ht}function A(){const V=c.newAttributes;for(let Z=0,ut=V.length;Z<ut;Z++)V[Z]=0}function M(V){y(V,0)}function y(V,Z){const ut=c.newAttributes,ht=c.enabledAttributes,j=c.attributeDivisors;ut[V]=1,ht[V]===0&&(s.enableVertexAttribArray(V),ht[V]=1),j[V]!==Z&&(s.vertexAttribDivisor(V,Z),j[V]=Z)}function D(){const V=c.newAttributes,Z=c.enabledAttributes;for(let ut=0,ht=Z.length;ut<ht;ut++)Z[ut]!==V[ut]&&(s.disableVertexAttribArray(ut),Z[ut]=0)}function L(V,Z,ut,ht,j,z,H){H===!0?s.vertexAttribIPointer(V,Z,ut,j,z):s.vertexAttribPointer(V,Z,ut,ht,j,z)}function w(V,Z,ut,ht){A();const j=ht.attributes,z=ut.getAttributes(),H=Z.defaultAttributeValues;for(const J in z){const ft=z[J];if(ft.location>=0){let St=j[J];if(St===void 0&&(J==="instanceMatrix"&&V.instanceMatrix&&(St=V.instanceMatrix),J==="instanceColor"&&V.instanceColor&&(St=V.instanceColor)),St!==void 0){const F=St.normalized,K=St.itemSize,_t=t.get(St);if(_t===void 0)continue;const Et=_t.buffer,wt=_t.type,tt=_t.bytesPerElement,xt=wt===s.INT||wt===s.UNSIGNED_INT||St.gpuType===tp;if(St.isInterleavedBufferAttribute){const yt=St.data,Ht=yt.stride,te=St.offset;if(yt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<ft.locationSize;Kt++)y(ft.location+Kt,yt.meshPerAttribute);V.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Kt=0;Kt<ft.locationSize;Kt++)M(ft.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let Kt=0;Kt<ft.locationSize;Kt++)L(ft.location+Kt,K/ft.locationSize,wt,F,Ht*tt,(te+K/ft.locationSize*Kt)*tt,xt)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<ft.locationSize;yt++)y(ft.location+yt,St.meshPerAttribute);V.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<ft.locationSize;yt++)M(ft.location+yt);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let yt=0;yt<ft.locationSize;yt++)L(ft.location+yt,K/ft.locationSize,wt,F,K*tt,K/ft.locationSize*yt*tt,xt)}}else if(H!==void 0){const F=H[J];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(ft.location,F);break;case 3:s.vertexAttrib3fv(ft.location,F);break;case 4:s.vertexAttrib4fv(ft.location,F);break;default:s.vertexAttrib1fv(ft.location,F)}}}}D()}function I(){O();for(const V in a){const Z=a[V];for(const ut in Z){const ht=Z[ut];for(const j in ht){const z=ht[j];for(const H in z)g(z[H].object),delete z[H];delete ht[j]}}delete a[V]}}function U(V){if(a[V.id]===void 0)return;const Z=a[V.id];for(const ut in Z){const ht=Z[ut];for(const j in ht){const z=ht[j];for(const H in z)g(z[H].object),delete z[H];delete ht[j]}}delete a[V.id]}function B(V){for(const Z in a){const ut=a[Z];for(const ht in ut){const j=ut[ht];if(j[V.id]===void 0)continue;const z=j[V.id];for(const H in z)g(z[H].object),delete z[H];delete j[V.id]}}}function T(V){for(const Z in a){const ut=a[Z],ht=V.isInstancedMesh===!0?V.id:0,j=ut[ht];if(j!==void 0){for(const z in j){const H=j[z];for(const J in H)g(H[J].object),delete H[J];delete j[z]}delete ut[ht],Object.keys(ut).length===0&&delete a[Z]}}}function O(){W(),u=!0,c!==o&&(c=o,p(c.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:O,resetDefaultState:W,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:M,disableUnusedAttributes:D}}function HE(s,t,n){let a;function o(d){a=d}function c(d,p){s.drawArrays(a,d,p),n.update(p,a,1)}function u(d,p,g){g!==0&&(s.drawArraysInstanced(a,d,p,g),n.update(p,a,g))}function f(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,p,0,g);let _=0;for(let x=0;x<g;x++)_+=p[x];n.update(_,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function GE(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==ta&&a.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const T=B===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Ri&&a.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ji&&!T)}function d(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(oe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&_===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:w,maxSamples:I,samples:U}}function VE(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new ua,f=new he,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||o;return o=_,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const b=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,y=s.get(v);if(!o||b===null||b.length===0||c&&!M)c?g(null):p();else{const D=c?0:a,L=D*4;let w=y.clippingState||null;d.value=w,w=g(b,_,L,x);for(let I=0;I!==L;++I)w[I]=n[I];y.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,x,b){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=d.value,b!==!0||M===null){const y=x+A*4,D=_.matrixWorldInverse;f.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,w=x;L!==A;++L,w+=4)u.copy(v[L]).applyMatrix4(D,f),u.normal.toArray(M,w),M[w+3]=u.constant}d.value=M,d.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}const As=4,J1=[.125,.215,.35,.446,.526,.582],nr=20,kE=256,xl=new Ku,t_=new se;let Fd=null,Bd=0,zd=0,Hd=!1;const WE=new X;class z0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:f=WE}=c;Fd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,o,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fd,Bd,zd),this._renderer.xr.enabled=Hd,t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===sr||t.mapping===fo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:An,minFilter:An,generateMipmaps:!1,type:ii,format:ta,colorSpace:Hu,depthBuffer:!1},o=e_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XE(c)),this._blurMaterial=YE(c,t,n),this._ggxMaterial=qE(c,t,n)}return o}_compileMaterial(t){const n=new Tn(new Vi,t);this._renderer.compile(n,xl)}_sceneToCubeUV(t,n,a,o,c){const d=new wi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(t_),v.toneMapping=pa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new xo,new dp({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let y=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,y=!0):(M.color.copy(t_),y=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(d.up.set(0,p[L],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[L],c.y,c.z)):w===1?(d.up.set(0,0,p[L]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[L],c.z)):(d.up.set(0,p[L],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[L]));const I=this._cubeSize;no(o,w*I,L>2?I:0,I,I),v.setRenderTarget(o),y&&v.render(A,d),v.render(t,d)}v.toneMapping=x,v.autoClear=_,t.background=D}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===sr||t.mapping===fo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const d=this._cubeSize;no(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,xl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const d=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),_=0+p*1.25,x=v*_,{_lodMax:b}=this,A=this._sizeLods[a],M=3*A*(a>b-As?a-b+As:0),y=4*(this._cubeSize-A);d.envMap.value=t.texture,d.roughness.value=x,d.mipInt.value=b-n,no(c,M,y,3*A,2*A),o.setRenderTarget(c),o.render(f,xl),d.envMap.value=c.texture,d.roughness.value=0,d.mipInt.value=b-a,no(t,M,y,3*A,2*A),o.setRenderTarget(t),o.render(f,xl)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&pe("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=p;const _=p.uniforms,x=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*nr-1),A=c/b,M=isFinite(c)?1+Math.floor(g*A):nr;M>nr&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${nr}`);const y=[];let D=0;for(let B=0;B<nr;++B){const T=B/A,O=Math.exp(-T*T/2);y.push(O),B===0?D+=O:B<M&&(D+=2*O)}for(let B=0;B<y.length;B++)y[B]=y[B]/D;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:L}=this;_.dTheta.value=b,_.mipInt.value=L-a;const w=this._sizeLods[o],I=3*w*(o>L-As?o-L+As:0),U=4*(this._cubeSize-w);no(n,I,U,3*w,2*w),d.setRenderTarget(n),d.render(v,xl)}}function XE(s){const t=[],n=[],a=[];let o=s;const c=s-As+1+J1.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let d=1/f;u>s-As?d=J1[u-s+As-1]:u===0&&(d=0),n.push(d);const p=1/(f-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,b=6,A=3,M=2,y=1,D=new Float32Array(A*b*x),L=new Float32Array(M*b*x),w=new Float32Array(y*b*x);for(let U=0;U<x;U++){const B=U%3*2/3-1,T=U>2?0:-1,O=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];D.set(O,A*b*U),L.set(_,M*b*U);const W=[U,U,U,U,U,U];w.set(W,y*b*U)}const I=new Vi;I.setAttribute("position",new Ui(D,A)),I.setAttribute("uv",new Ui(L,M)),I.setAttribute("faceIndex",new Ui(w,y)),a.push(new Tn(I,null)),o>As&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function e_(s,t,n){const a=new Xn(s,t,n);return a.texture.mapping=Zu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function no(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function qE(s,t,n){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ju(),fragmentShader:`

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
		`,blending:ea,depthTest:!1,depthWrite:!1})}function YE(s,t,n){const a=new Float32Array(nr),o=new X(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ju(),fragmentShader:`

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
		`,blending:ea,depthTest:!1,depthWrite:!1})}function n_(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

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
		`,blending:ea,depthTest:!1,depthWrite:!1})}function i_(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ea,depthTest:!1,depthWrite:!1})}function ju(){return`

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
	`}class bx extends Xn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new fx(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xo(5,5,5),c=new In({name:"CubemapFromEquirect",uniforms:mo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ni,blending:ea});c.uniforms.tEquirect.value=n;const u=new Tn(o,c),f=n.minFilter;return n.minFilter===ir&&(n.minFilter=An),new z2(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}function ZE(s){let t=new WeakMap,n=new WeakMap,a=null;function o(_,x=!1){return _==null?null:x?u(_):c(_)}function c(_){if(_&&_.isTexture){const x=_.mapping;if(x===ud||x===hd)if(t.has(_)){const b=t.get(_).texture;return f(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const A=new bx(b.height);return A.fromEquirectangularTexture(s,_),t.set(_,A),_.addEventListener("dispose",p),f(A.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const x=_.mapping,b=x===ud||x===hd,A=x===sr||x===fo;if(b||A){let M=n.get(_);const y=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return a===null&&(a=new z0(s)),M=b?a.fromEquirectangular(_,M):a.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,n.set(_,M),M.texture;if(M!==void 0)return M.texture;{const D=_.image;return b&&D&&D.height>0||A&&D&&d(D)?(a===null&&(a=new z0(s)),M=b?a.fromEquirectangular(_):a.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,n.set(_,M),_.addEventListener("dispose",g),M.texture):null}}}return _}function f(_,x){return x===ud?_.mapping=sr:x===hd&&(_.mapping=fo),_}function d(_){let x=0;const b=6;for(let A=0;A<b;A++)_[A]!==void 0&&x++;return x===b}function p(_){const x=_.target;x.removeEventListener("dispose",p);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function g(_){const x=_.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:v}}function KE(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&lo("WebGLRenderer: "+a+" extension not supported."),o}}}function jE(s,t,n,a){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function d(v){const _=v.attributes;for(const x in _)t.update(_[x],s.ARRAY_BUFFER)}function p(v){const _=[],x=v.index,b=v.attributes.position;let A=0;if(b===void 0)return;if(x!==null){const D=x.array;A=x.version;for(let L=0,w=D.length;L<w;L+=3){const I=D[L+0],U=D[L+1],B=D[L+2];_.push(I,U,U,B,B,I)}}else{const D=b.array;A=b.version;for(let L=0,w=D.length/3-1;L<w;L+=3){const I=L+0,U=L+1,B=L+2;_.push(I,U,U,B,B,I)}}const M=new(b.count>=65535?ux:cx)(_,1);M.version=A;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:f,update:d,getWireframeAttribute:g}}function QE(s,t,n){let a;function o(v){a=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function d(v,_){s.drawElements(a,_,c,v*u),n.update(_,a,1)}function p(v,_,x){x!==0&&(s.drawElementsInstanced(a,_,c,v*u,x),n.update(_,a,x))}function g(v,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,c,v,0,x);let A=0;for(let M=0;M<x;M++)A+=_[M];n.update(A,a,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g}function $E(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:pe("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function JE(s,t,n){const a=new WeakMap,o=new dn;function c(u,f,d){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let W=function(){T.dispose(),a.delete(f),f.removeEventListener("dispose",W)};var x=W;_!==void 0&&_.texture.dispose();const b=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let w=0;b===!0&&(w=1),A===!0&&(w=2),M===!0&&(w=3);let I=f.attributes.position.count*w,U=1;I>t.maxTextureSize&&(U=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const B=new Float32Array(I*U*4*v),T=new rx(B,I,U,v);T.type=Ji,T.needsUpdate=!0;const O=w*4;for(let V=0;V<v;V++){const Z=y[V],ut=D[V],ht=L[V],j=I*U*4*V;for(let z=0;z<Z.count;z++){const H=z*O;b===!0&&(o.fromBufferAttribute(Z,z),B[j+H+0]=o.x,B[j+H+1]=o.y,B[j+H+2]=o.z,B[j+H+3]=0),A===!0&&(o.fromBufferAttribute(ut,z),B[j+H+4]=o.x,B[j+H+5]=o.y,B[j+H+6]=o.z,B[j+H+7]=0),M===!0&&(o.fromBufferAttribute(ht,z),B[j+H+8]=o.x,B[j+H+9]=o.y,B[j+H+10]=o.z,B[j+H+11]=ht.itemSize===4?o.w:1)}}_={count:v,texture:T,size:new Bt(I,U)},a.set(f,_),f.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const A=f.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function tT(s,t,n,a,o){let c=new WeakMap;function u(p){const g=o.render.frame,v=p.geometry,_=t.get(p,v);if(c.get(_)!==g&&(t.update(_),c.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),c.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return _}function f(){c=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:f}}const eT={[j0]:"LINEAR_TONE_MAPPING",[Q0]:"REINHARD_TONE_MAPPING",[$0]:"CINEON_TONE_MAPPING",[qu]:"ACES_FILMIC_TONE_MAPPING",[ho]:"AGX_TONE_MAPPING",[Yu]:"NEUTRAL_TONE_MAPPING",[J0]:"CUSTOM_TONE_MAPPING"};function nT(s,t,n,a,o,c){const u=new Xn(t,n,{type:s,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new po(t,n):void 0}),f=new Xn(t,n,{type:ii,depthBuffer:!1,stencilBuffer:!1}),d=new Vi;d.setAttribute("position",new qn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new qn([0,2,0,0,2,0],2));const p=new mx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Tn(d,p),v=new Ku(-1,1,1,-1,0,1);let _=null,x=null,b=!1,A,M=null,y=[],D=!1;this.setSize=function(L,w){u.setSize(L,w),f.setSize(L,w);for(let I=0;I<y.length;I++){const U=y[I];U.setSize&&U.setSize(L,w)}},this.setEffects=function(L){y=L,D=y.length>0&&y[0].isRenderPass===!0;const w=u.width,I=u.height;for(let U=0;U<y.length;U++){const B=y[U];B.setSize&&B.setSize(w,I)}},this.begin=function(L,w){if(b||L.toneMapping===pa&&y.length===0)return!1;if(M=w,w!==null){const I=w.width,U=w.height;(u.width!==I||u.height!==U)&&this.setSize(I,U)}return D===!1&&L.setRenderTarget(u),A=L.toneMapping,L.toneMapping=pa,!0},this.hasRenderPass=function(){return D},this.end=function(L,w){L.toneMapping=A,b=!0;let I=u,U=f;for(let B=0;B<y.length;B++){const T=y[B];if(T.enabled!==!1&&(T.render(L,U,I,w),T.needsSwap!==!1)){const O=I;I=U,U=O}}if(_!==L.outputColorSpace||x!==L.toneMapping){_=L.outputColorSpace,x=L.toneMapping,p.defines={},Ce.getTransfer(_)===Fe&&(p.defines.SRGB_TRANSFER="");const B=eT[x];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(M),L.render(g,v),M=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),d.dispose(),p.dispose()}}const Ex=new Qn,H0=new po(1,1),Tx=new rx,Ax=new d2,wx=new fx,a_=[],s_=[],r_=new Float32Array(16),o_=new Float32Array(9),l_=new Float32Array(4);function yo(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=a_[o];if(c===void 0&&(c=new Float32Array(o),a_[o]=c),t!==0){a.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,s[u].toArray(c,f)}return c}function Nn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function Ln(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function Qu(s,t){let n=s_[t];n===void 0&&(n=new Int32Array(t),s_[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function iT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function aT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nn(n,t))return;s.uniform2fv(this.addr,t),Ln(n,t)}}function sT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Nn(n,t))return;s.uniform3fv(this.addr,t),Ln(n,t)}}function rT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nn(n,t))return;s.uniform4fv(this.addr,t),Ln(n,t)}}function oT(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Nn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ln(n,t)}else{if(Nn(n,a))return;l_.set(a),s.uniformMatrix2fv(this.addr,!1,l_),Ln(n,a)}}function lT(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Nn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ln(n,t)}else{if(Nn(n,a))return;o_.set(a),s.uniformMatrix3fv(this.addr,!1,o_),Ln(n,a)}}function cT(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Nn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ln(n,t)}else{if(Nn(n,a))return;r_.set(a),s.uniformMatrix4fv(this.addr,!1,r_),Ln(n,a)}}function uT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function hT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nn(n,t))return;s.uniform2iv(this.addr,t),Ln(n,t)}}function fT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nn(n,t))return;s.uniform3iv(this.addr,t),Ln(n,t)}}function dT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nn(n,t))return;s.uniform4iv(this.addr,t),Ln(n,t)}}function pT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function mT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nn(n,t))return;s.uniform2uiv(this.addr,t),Ln(n,t)}}function gT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nn(n,t))return;s.uniform3uiv(this.addr,t),Ln(n,t)}}function vT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nn(n,t))return;s.uniform4uiv(this.addr,t),Ln(n,t)}}function _T(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(H0.compareFunction=n.isReversedDepthBuffer()?lp:op,c=H0):c=Ex,n.setTexture2D(t||c,o)}function xT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Ax,o)}function yT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||wx,o)}function MT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Tx,o)}function ST(s){switch(s){case 5126:return iT;case 35664:return aT;case 35665:return sT;case 35666:return rT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return hT;case 35668:case 35672:return fT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return MT}}function bT(s,t){s.uniform1fv(this.addr,t)}function ET(s,t){const n=yo(t,this.size,2);s.uniform2fv(this.addr,n)}function TT(s,t){const n=yo(t,this.size,3);s.uniform3fv(this.addr,n)}function AT(s,t){const n=yo(t,this.size,4);s.uniform4fv(this.addr,n)}function wT(s,t){const n=yo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function RT(s,t){const n=yo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function CT(s,t){const n=yo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function DT(s,t){s.uniform1iv(this.addr,t)}function UT(s,t){s.uniform2iv(this.addr,t)}function NT(s,t){s.uniform3iv(this.addr,t)}function LT(s,t){s.uniform4iv(this.addr,t)}function PT(s,t){s.uniform1uiv(this.addr,t)}function OT(s,t){s.uniform2uiv(this.addr,t)}function IT(s,t){s.uniform3uiv(this.addr,t)}function FT(s,t){s.uniform4uiv(this.addr,t)}function BT(s,t,n){const a=this.cache,o=t.length,c=Qu(n,o);Nn(a,c)||(s.uniform1iv(this.addr,c),Ln(a,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=H0:u=Ex;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,c[f])}function zT(s,t,n){const a=this.cache,o=t.length,c=Qu(n,o);Nn(a,c)||(s.uniform1iv(this.addr,c),Ln(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||Ax,c[u])}function HT(s,t,n){const a=this.cache,o=t.length,c=Qu(n,o);Nn(a,c)||(s.uniform1iv(this.addr,c),Ln(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||wx,c[u])}function GT(s,t,n){const a=this.cache,o=t.length,c=Qu(n,o);Nn(a,c)||(s.uniform1iv(this.addr,c),Ln(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||Tx,c[u])}function VT(s){switch(s){case 5126:return bT;case 35664:return ET;case 35665:return TT;case 35666:return AT;case 35674:return wT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return NT;case 35669:case 35673:return LT;case 5125:return PT;case 36294:return OT;case 36295:return IT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class kT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=ST(n.type)}}class WT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VT(n.type)}}class XT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],a)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function c_(s,t){s.seq.push(t),s.map[t.id]=t}function qT(s,t,n){const a=s.name,o=a.length;for(Gd.lastIndex=0;;){const c=Gd.exec(a),u=Gd.lastIndex;let f=c[1];const d=c[2]==="]",p=c[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===o){c_(n,p===void 0?new kT(f,s,t):new WT(f,s,t));break}else{let v=n.map[f];v===void 0&&(v=new XT(f),c_(n,v)),n=v}}}class Ou{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),d=t.getUniformLocation(n,f.name);qT(f,d,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],d=a[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function u_(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const YT=37297;let ZT=0;function KT(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const h_=new he;function jT(s){Ce._getMatrix(h_,Ce.workingColorSpace,s);const t=`mat3( ${h_.elements.map(n=>n.toFixed(4))} )`;switch(Ce.getTransfer(s)){case Gu:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function f_(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+KT(s.getShaderSource(t),f)}else return c}function QT(s,t){const n=jT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const $T={[j0]:"Linear",[Q0]:"Reinhard",[$0]:"Cineon",[qu]:"ACESFilmic",[ho]:"AgX",[Yu]:"Neutral",[J0]:"Custom"};function JT(s,t){const n=$T[t];return n===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Mu=new X;function tA(){Ce.getLuminanceCoefficients(Mu);const s=Mu.x.toFixed(4),t=Mu.y.toFixed(4),n=Mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function nA(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function iA(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:f}}return n}function Al(s){return s!==""}function d_(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function G0(s){return s.replace(aA,rA)}const sA=new Map;function rA(s,t){let n=ye[t];if(n===void 0){const a=sA.get(t);if(a!==void 0)n=ye[a],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return G0(n)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(s){return s.replace(oA,lA)}function lA(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function g_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const cA={[Du]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function uA(s){return cA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hA={[sr]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE",[Zu]:"ENVMAP_TYPE_CUBE_UV"};function fA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":hA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const dA={[fo]:"ENVMAP_MODE_REFRACTION"};function pA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":dA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mA={[K0]:"ENVMAP_BLENDING_MULTIPLY",[DS]:"ENVMAP_BLENDING_MIX",[US]:"ENVMAP_BLENDING_ADD"};function gA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":mA[s.combine]||"ENVMAP_BLENDING_NONE"}function vA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function _A(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const d=uA(n),p=fA(n),g=pA(n),v=gA(n),_=vA(n),x=eA(n),b=nA(c),A=o.createProgram();let M,y,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Al).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Al).join(`
`),y.length>0&&(y+=`
`)):(M=[g_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),y=[g_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pa?"#define TONE_MAPPING":"",n.toneMapping!==pa?ye.tonemapping_pars_fragment:"",n.toneMapping!==pa?JT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,QT("linearToOutputTexel",n.outputColorSpace),tA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Al).join(`
`)),u=G0(u),u=d_(u,n),u=p_(u,n),f=G0(f),f=d_(f,n),f=p_(f,n),u=m_(u),f=m_(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===S1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===S1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=D+M+u,w=D+y+f,I=u_(o,o.VERTEX_SHADER,L),U=u_(o,o.FRAGMENT_SHADER,w);o.attachShader(A,I),o.attachShader(A,U),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function B(V){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(A)||"",ut=o.getShaderInfoLog(I)||"",ht=o.getShaderInfoLog(U)||"",j=Z.trim(),z=ut.trim(),H=ht.trim();let J=!0,ft=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,I,U);else{const St=f_(o,I,"vertex"),F=f_(o,U,"fragment");pe("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+j+`
`+St+`
`+F)}else j!==""?oe("WebGLProgram: Program Info Log:",j):(z===""||H==="")&&(ft=!1);ft&&(V.diagnostics={runnable:J,programLog:j,vertexShader:{log:z,prefix:M},fragmentShader:{log:H,prefix:y}})}o.deleteShader(I),o.deleteShader(U),T=new Ou(o,A),O=iA(o,A)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let O;this.getAttributes=function(){return O===void 0&&B(this),O};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(A,YT)),W},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZT++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=U,this}let xA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,a){const o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new MA(t),n.set(t,a)),a}}class MA{constructor(t){this.id=xA++,this.code=t,this.usedTimes=0}}function SA(s){return s===rr||s===Fu||s===Bu}function bA(s,t,n,a,o,c){const u=new hp,f=new yA,d=new Set,p=[],g=new Map,v=a.logarithmicDepthBuffer;let _=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return d.add(T),T===0?"uv":`uv${T}`}function A(T,O,W,V,Z,ut){const ht=V.fog,j=Z.geometry,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,J=t.get(T.envMap||z,H),ft=J&&J.mapping===Zu?J.image.height:null,St=x[T.type];T.precision!==null&&(_=a.getMaxPrecision(T.precision),_!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const F=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,K=F!==void 0?F.length:0;let _t=0;j.morphAttributes.position!==void 0&&(_t=1),j.morphAttributes.normal!==void 0&&(_t=2),j.morphAttributes.color!==void 0&&(_t=3);let Et,wt,tt,xt;if(St){const kt=ha[St];Et=kt.vertexShader,wt=kt.fragmentShader}else{Et=T.vertexShader,wt=T.fragmentShader;const kt=f.getVertexShaderStage(T),cn=f.getFragmentShaderStage(T);f.update(T,kt,cn),tt=kt.id,xt=cn.id}const yt=s.getRenderTarget(),Ht=s.state.buffers.depth.getReversed(),te=Z.isInstancedMesh===!0,Kt=Z.isBatchedMesh===!0,Pe=!!T.map,le=!!T.matcap,ue=!!J,Se=!!T.aoMap,xe=!!T.lightMap,on=!!T.bumpMap&&T.wireframe===!1,tn=!!T.normalMap,Je=!!T.displacementMap,ln=!!T.emissiveMap,ze=!!T.metalnessMap,en=!!T.roughnessMap,N=T.anisotropy>0,Xt=T.clearcoat>0,ae=T.dispersion>0,P=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,et=N&&!!T.anisotropyMap,lt=Xt&&!!T.clearcoatMap,At=Xt&&!!T.clearcoatNormalMap,Ut=Xt&&!!T.clearcoatRoughnessMap,dt=P&&!!T.iridescenceMap,pt=P&&!!T.iridescenceThicknessMap,Rt=E&&!!T.sheenColorMap,zt=E&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Nt=!!T.specularColorMap,Jt=!!T.specularIntensityMap,ee=Q&&!!T.transmissionMap,ce=Q&&!!T.thicknessMap,q=!!T.gradientMap,Ct=!!T.alphaMap,gt=T.alphaTest>0,Dt=!!T.alphaHash,Ft=!!T.extensions;let bt=pa;T.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(bt=s.toneMapping);const Zt={shaderID:St,shaderType:T.type,shaderName:T.name,vertexShader:Et,fragmentShader:wt,defines:T.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Kt,batchingColor:Kt&&Z._colorsTexture!==null,instancing:te,instancingColor:te&&Z.instanceColor!==null,instancingMorph:te&&Z.morphTexture!==null,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Pe,matcap:le,envMap:ue,envMapMode:ue&&J.mapping,envMapCubeUVHeight:ft,aoMap:Se,lightMap:xe,bumpMap:on,normalMap:tn,displacementMap:Je,emissiveMap:ln,normalMapObjectSpace:tn&&T.normalMapType===OS,normalMapTangentSpace:tn&&T.normalMapType===zu,packedNormalMap:tn&&T.normalMapType===zu&&SA(T.normalMap.format),metalnessMap:ze,roughnessMap:en,anisotropy:N,anisotropyMap:et,clearcoat:Xt,clearcoatMap:lt,clearcoatNormalMap:At,clearcoatRoughnessMap:Ut,dispersion:ae,iridescence:P,iridescenceMap:dt,iridescenceThicknessMap:pt,sheen:E,sheenColorMap:Rt,sheenRoughnessMap:zt,specularMap:Lt,specularColorMap:Nt,specularIntensityMap:Jt,transmission:Q,transmissionMap:ee,thicknessMap:ce,gradientMap:q,opaque:T.transparent===!1&&T.blending===oo&&T.alphaToCoverage===!1,alphaMap:Ct,alphaTest:gt,alphaHash:Dt,combine:T.combine,mapUv:Pe&&b(T.map.channel),aoMapUv:Se&&b(T.aoMap.channel),lightMapUv:xe&&b(T.lightMap.channel),bumpMapUv:on&&b(T.bumpMap.channel),normalMapUv:tn&&b(T.normalMap.channel),displacementMapUv:Je&&b(T.displacementMap.channel),emissiveMapUv:ln&&b(T.emissiveMap.channel),metalnessMapUv:ze&&b(T.metalnessMap.channel),roughnessMapUv:en&&b(T.roughnessMap.channel),anisotropyMapUv:et&&b(T.anisotropyMap.channel),clearcoatMapUv:lt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:At&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Nt&&b(T.specularColorMap.channel),specularIntensityMapUv:Jt&&b(T.specularIntensityMap.channel),transmissionMapUv:ee&&b(T.transmissionMap.channel),thicknessMapUv:ce&&b(T.thicknessMap.channel),alphaMapUv:Ct&&b(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(tn||N),vertexNormals:!!j.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(Pe||Ct),fog:!!ht,useFog:T.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||j.attributes.normal===void 0&&tn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:_t,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ut.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:bt,decodeVideoTexture:Pe&&T.map.isVideoTexture===!0&&Ce.getTransfer(T.map.colorSpace)===Fe,decodeVideoTextureEmissive:ln&&T.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(T.emissiveMap.colorSpace)===Fe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qi,flipSided:T.side===ni,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ft&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&T.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Zt.vertexUv1s=d.has(1),Zt.vertexUv2s=d.has(2),Zt.vertexUv3s=d.has(3),d.clear(),Zt}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const W in T.defines)O.push(W),O.push(T.defines[W]);return T.isRawShaderMaterial===!1&&(y(O,T),D(O,T),O.push(s.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function y(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function D(T,O){u.disableAll(),O.instancing&&u.enable(0),O.instancingColor&&u.enable(1),O.instancingMorph&&u.enable(2),O.matcap&&u.enable(3),O.envMap&&u.enable(4),O.normalMapObjectSpace&&u.enable(5),O.normalMapTangentSpace&&u.enable(6),O.clearcoat&&u.enable(7),O.iridescence&&u.enable(8),O.alphaTest&&u.enable(9),O.vertexColors&&u.enable(10),O.vertexAlphas&&u.enable(11),O.vertexUv1s&&u.enable(12),O.vertexUv2s&&u.enable(13),O.vertexUv3s&&u.enable(14),O.vertexTangents&&u.enable(15),O.anisotropy&&u.enable(16),O.alphaHash&&u.enable(17),O.batching&&u.enable(18),O.dispersion&&u.enable(19),O.batchingColor&&u.enable(20),O.gradientMap&&u.enable(21),O.packedNormalMap&&u.enable(22),O.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),O.fog&&u.enable(0),O.useFog&&u.enable(1),O.flatShading&&u.enable(2),O.logarithmicDepthBuffer&&u.enable(3),O.reversedDepthBuffer&&u.enable(4),O.skinning&&u.enable(5),O.morphTargets&&u.enable(6),O.morphNormals&&u.enable(7),O.morphColors&&u.enable(8),O.premultipliedAlpha&&u.enable(9),O.shadowMapEnabled&&u.enable(10),O.doubleSided&&u.enable(11),O.flipSided&&u.enable(12),O.useDepthPacking&&u.enable(13),O.dithering&&u.enable(14),O.transmission&&u.enable(15),O.sheen&&u.enable(16),O.opaque&&u.enable(17),O.pointsUvs&&u.enable(18),O.decodeVideoTexture&&u.enable(19),O.decodeVideoTextureEmissive&&u.enable(20),O.alphaToCoverage&&u.enable(21),O.numLightProbeGrids>0&&u.enable(22),O.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function L(T){const O=x[T.type];let W;if(O){const V=ha[O];W=Fl.clone(V.uniforms)}else W=T.uniforms;return W}function w(T,O){let W=g.get(O);return W!==void 0?++W.usedTimes:(W=new _A(s,O,T,o),p.push(W),g.set(O,W)),W}function I(T){if(--T.usedTimes===0){const O=p.indexOf(T);p[O]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function U(T){f.remove(T)}function B(){f.dispose()}return{getParameters:A,getProgramCacheKey:M,getUniforms:L,acquireProgram:w,releaseProgram:I,releaseShaderCache:U,programs:p,dispose:B}}function EA(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function a(u){s.delete(u)}function o(u,f,d){s.get(u)[f]=d}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function TA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function v_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function __(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function f(_,x,b,A,M,y){let D=s[t];return D===void 0?(D={id:_.id,object:_,geometry:x,material:b,materialVariant:u(_),groupOrder:A,renderOrder:_.renderOrder,z:M,group:y},s[t]=D):(D.id=_.id,D.object=_,D.geometry=x,D.material=b,D.materialVariant=u(_),D.groupOrder=A,D.renderOrder=_.renderOrder,D.z=M,D.group=y),t++,D}function d(_,x,b,A,M,y){const D=f(_,x,b,A,M,y);b.transmission>0?a.push(D):b.transparent===!0?o.push(D):n.push(D)}function p(_,x,b,A,M,y){const D=f(_,x,b,A,M,y);b.transmission>0?a.unshift(D):b.transparent===!0?o.unshift(D):n.unshift(D)}function g(_,x,b){n.length>1&&n.sort(_||TA),a.length>1&&a.sort(x||v_),o.length>1&&o.sort(x||v_),b&&(n.reverse(),a.reverse(),o.reverse())}function v(){for(let _=t,x=s.length;_<x;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:p,finish:v,sort:g}}function AA(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new __,s.set(a,[u])):o>=c.length?(u=new __,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function wA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new se};break;case"SpotLight":n={position:new X,direction:new X,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new X,halfWidth:new X,halfHeight:new X};break}return s[t.id]=n,n}}}function RA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let CA=0;function DA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function UA(s){const t=new wA,n=RA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new X);const o=new X,c=new $e,u=new $e;function f(p){let g=0,v=0,_=0;for(let O=0;O<9;O++)a.probe[O].set(0,0,0);let x=0,b=0,A=0,M=0,y=0,D=0,L=0,w=0,I=0,U=0,B=0;p.sort(DA);for(let O=0,W=p.length;O<W;O++){const V=p[O],Z=V.color,ut=V.intensity,ht=V.distance;let j=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===rr?j=V.shadow.map.texture:j=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Z.r*ut,v+=Z.g*ut,_+=Z.b*ut;else if(V.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(V.sh.coefficients[z],ut);B++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,J=n.get(V);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.directionalShadow[x]=J,a.directionalShadowMap[x]=j,a.directionalShadowMatrix[x]=V.shadow.matrix,D++}a.directional[x]=z,x++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(Z).multiplyScalar(ut),z.distance=ht,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,a.spot[A]=z;const H=V.shadow;if(V.map&&(a.spotLightMap[I]=V.map,I++,H.updateMatrices(V),V.castShadow&&U++),a.spotLightMatrix[A]=H.matrix,V.castShadow){const J=n.get(V);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.spotShadow[A]=J,a.spotShadowMap[A]=j,w++}A++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(Z).multiplyScalar(ut),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),a.rectArea[M]=z,M++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const H=V.shadow,J=n.get(V);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,a.pointShadow[b]=J,a.pointShadowMap[b]=j,a.pointShadowMatrix[b]=V.shadow.matrix,L++}a.point[b]=z,b++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(ut),z.groundColor.copy(V.groundColor).multiplyScalar(ut),a.hemi[y]=z,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=It.LTC_FLOAT_1,a.rectAreaLTC2=It.LTC_FLOAT_2):(a.rectAreaLTC1=It.LTC_HALF_1,a.rectAreaLTC2=It.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const T=a.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==A||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==D||T.numPointShadows!==L||T.numSpotShadows!==w||T.numSpotMaps!==I||T.numLightProbes!==B)&&(a.directional.length=x,a.spot.length=A,a.rectArea.length=M,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=w+I-U,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=B,T.directionalLength=x,T.pointLength=b,T.spotLength=A,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=D,T.numPointShadows=L,T.numSpotShadows=w,T.numSpotMaps=I,T.numLightProbes=B,a.version=CA++)}function d(p,g){let v=0,_=0,x=0,b=0,A=0;const M=g.matrixWorldInverse;for(let y=0,D=p.length;y<D;y++){const L=p[y];if(L.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),v++}else if(L.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),x++}else if(L.isRectAreaLight){const w=a.rectArea[b];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),u.identity(),c.copy(L.matrixWorld),c.premultiply(M),u.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),b++}else if(L.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const w=a.hemi[A];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),A++}}}return{setup:f,setupView:d,state:a}}function x_(s){const t=new UA(s),n=[],a=[],o=[];function c(_){v.camera=_,n.length=0,a.length=0,o.length=0}function u(_){n.push(_)}function f(_){a.push(_)}function d(_){o.push(_)}function p(){t.setup(n)}function g(_){t.setupView(n,_)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function NA(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new x_(s),t.set(o,[f])):c>=u.length?(f=new x_(s),u.push(f)):f=u[c],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PA=`uniform sampler2D shadow_pass;
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
}`,OA=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],IA=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],y_=new $e,yl=new X,Vd=new X;function FA(s,t,n){let a=new pp;const o=new Bt,c=new Bt,u=new dn,f=new vx,d=new O2,p={},g=n.maxTextureSize,v={[ws]:ni,[ni]:ws,[Qi]:Qi},_=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:LA,fragmentShader:PA}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const b=new Vi;b.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Tn(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let y=this.type;this.render=function(U,B,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===hS&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Du);const O=s.getRenderTarget(),W=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(ea),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ut=y!==this.type;ut&&B.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(j=>j.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,j=U.length;ht<j;ht++){const z=U[ht],H=z.shadow;if(H===void 0){oe("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const J=H.getFrameExtents();o.multiply(J),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/J.x),o.x=c.x*J.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/J.y),o.y=c.y*J.y,H.mapSize.y=c.y));const ft=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ft,H.map===null||ut===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Tl){if(z.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Xn(o.x,o.y,{format:rr,type:ii,minFilter:An,magFilter:An,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new po(o.x,o.y,Ji),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Wa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else z.isPointLight?(H.map=new bx(o.x),H.map.depthTexture=new D2(o.x,ma)):(H.map=new Xn(o.x,o.y),H.map.depthTexture=new po(o.x,o.y,ma)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Wa,this.type===Du?(H.map.depthTexture.compareFunction=ft?lp:op,H.map.depthTexture.minFilter=An,H.map.depthTexture.magFilter=An):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un);H.camera.updateProjectionMatrix()}const St=H.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<St;F++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,F),s.clear();else{F===0&&(s.setRenderTarget(H.map),s.clear());const K=H.getViewport(F);u.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Z.viewport(u)}if(z.isPointLight){const K=H.camera,_t=H.matrix,Et=z.distance||K.far;Et!==K.far&&(K.far=Et,K.updateProjectionMatrix()),yl.setFromMatrixPosition(z.matrixWorld),K.position.copy(yl),Vd.copy(K.position),Vd.add(OA[F]),K.up.copy(IA[F]),K.lookAt(Vd),K.updateMatrixWorld(),_t.makeTranslation(-yl.x,-yl.y,-yl.z),y_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(y_,K.coordinateSystem,K.reversedDepth)}else H.updateMatrices(z);a=H.getFrustum(),w(B,T,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Tl&&D(H,T),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(O,W,V)};function D(U,B){const T=t.update(A);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,x.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Xn(o.x,o.y,{format:rr,type:ii})),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(B,null,T,_,A,null),x.uniforms.shadow_pass.value=U.mapPass.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(B,null,T,x,A,null)}function L(U,B,T,O){let W=null;const V=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)W=V;else if(W=T.isPointLight===!0?d:f,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Z=W.uuid,ut=B.uuid;let ht=p[Z];ht===void 0&&(ht={},p[Z]=ht);let j=ht[ut];j===void 0&&(j=W.clone(),ht[ut]=j,B.addEventListener("dispose",I)),W=j}if(W.visible=B.visible,W.wireframe=B.wireframe,O===Tl?W.side=B.shadowSide!==null?B.shadowSide:B.side:W.side=B.shadowSide!==null?B.shadowSide:v[B.side],W.alphaMap=B.alphaMap,W.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,W.map=B.map,W.clipShadows=B.clipShadows,W.clippingPlanes=B.clippingPlanes,W.clipIntersection=B.clipIntersection,W.displacementMap=B.displacementMap,W.displacementScale=B.displacementScale,W.displacementBias=B.displacementBias,W.wireframeLinewidth=B.wireframeLinewidth,W.linewidth=B.linewidth,T.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Z=s.properties.get(W);Z.light=T}return W}function w(U,B,T,O,W){if(U.visible===!1)return;if(U.layers.test(B.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&W===Tl)&&(!U.frustumCulled||a.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const ut=t.update(U),ht=U.material;if(Array.isArray(ht)){const j=ut.groups;for(let z=0,H=j.length;z<H;z++){const J=j[z],ft=ht[J.materialIndex];if(ft&&ft.visible){const St=L(U,ft,O,W);U.onBeforeShadow(s,U,B,T,ut,St,J),s.renderBufferDirect(T,null,ut,St,U,J),U.onAfterShadow(s,U,B,T,ut,St,J)}}}else if(ht.visible){const j=L(U,ht,O,W);U.onBeforeShadow(s,U,B,T,ut,j,null),s.renderBufferDirect(T,null,ut,j,U,null),U.onAfterShadow(s,U,B,T,ut,j,null)}}const Z=U.children;for(let ut=0,ht=Z.length;ut<ht;ut++)w(Z[ut],B,T,O,W)}function I(U){U.target.removeEventListener("dispose",I);for(const T in p){const O=p[T],W=U.target.uuid;W in O&&(O[W].dispose(),delete O[W])}}}function BA(s,t){function n(){let q=!1;const Ct=new dn;let gt=null;const Dt=new dn(0,0,0,0);return{setMask:function(Ft){gt!==Ft&&!q&&(s.colorMask(Ft,Ft,Ft,Ft),gt=Ft)},setLocked:function(Ft){q=Ft},setClear:function(Ft,bt,Zt,kt,cn){cn===!0&&(Ft*=kt,bt*=kt,Zt*=kt),Ct.set(Ft,bt,Zt,kt),Dt.equals(Ct)===!1&&(s.clearColor(Ft,bt,Zt,kt),Dt.copy(Ct))},reset:function(){q=!1,gt=null,Dt.set(-1,0,0,0)}}}function a(){let q=!1,Ct=!1,gt=null,Dt=null,Ft=null;return{setReversed:function(bt){if(Ct!==bt){const Zt=t.get("EXT_clip_control");bt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Ct=bt;const kt=Ft;Ft=null,this.setClear(kt)}},getReversed:function(){return Ct},setTest:function(bt){bt?yt(s.DEPTH_TEST):Ht(s.DEPTH_TEST)},setMask:function(bt){gt!==bt&&!q&&(s.depthMask(bt),gt=bt)},setFunc:function(bt){if(Ct&&(bt=XS[bt]),Dt!==bt){switch(bt){case $d:s.depthFunc(s.NEVER);break;case Jd:s.depthFunc(s.ALWAYS);break;case t0:s.depthFunc(s.LESS);break;case uo:s.depthFunc(s.LEQUAL);break;case e0:s.depthFunc(s.EQUAL);break;case n0:s.depthFunc(s.GEQUAL);break;case i0:s.depthFunc(s.GREATER);break;case a0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Dt=bt}},setLocked:function(bt){q=bt},setClear:function(bt){Ft!==bt&&(Ft=bt,Ct&&(bt=1-bt),s.clearDepth(bt))},reset:function(){q=!1,gt=null,Dt=null,Ft=null,Ct=!1}}}function o(){let q=!1,Ct=null,gt=null,Dt=null,Ft=null,bt=null,Zt=null,kt=null,cn=null;return{setTest:function(He){q||(He?yt(s.STENCIL_TEST):Ht(s.STENCIL_TEST))},setMask:function(He){Ct!==He&&!q&&(s.stencilMask(He),Ct=He)},setFunc:function(He,pi,mi){(gt!==He||Dt!==pi||Ft!==mi)&&(s.stencilFunc(He,pi,mi),gt=He,Dt=pi,Ft=mi)},setOp:function(He,pi,mi){(bt!==He||Zt!==pi||kt!==mi)&&(s.stencilOp(He,pi,mi),bt=He,Zt=pi,kt=mi)},setLocked:function(He){q=He},setClear:function(He){cn!==He&&(s.clearStencil(He),cn=He)},reset:function(){q=!1,Ct=null,gt=null,Dt=null,Ft=null,bt=null,Zt=null,kt=null,cn=null}}}const c=new n,u=new a,f=new o,d=new WeakMap,p=new WeakMap;let g={},v={},_={},x=new WeakMap,b=[],A=null,M=!1,y=null,D=null,L=null,w=null,I=null,U=null,B=null,T=new se(0,0,0),O=0,W=!1,V=null,Z=null,ut=null,ht=null,j=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const ft=s.getParameter(s.VERSION);ft.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ft)[1]),H=J>=1):ft.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),H=J>=2);let St=null,F={};const K=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),Et=new dn().fromArray(K),wt=new dn().fromArray(_t);function tt(q,Ct,gt,Dt){const Ft=new Uint8Array(4),bt=s.createTexture();s.bindTexture(q,bt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<gt;Zt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,Ft):s.texImage2D(Ct+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ft);return bt}const xt={};xt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),yt(s.DEPTH_TEST),u.setFunc(uo),on(!1),tn(g1),yt(s.CULL_FACE),Se(ea);function yt(q){g[q]!==!0&&(s.enable(q),g[q]=!0)}function Ht(q){g[q]!==!1&&(s.disable(q),g[q]=!1)}function te(q,Ct){return _[q]!==Ct?(s.bindFramebuffer(q,Ct),_[q]=Ct,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ct),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Kt(q,Ct){let gt=b,Dt=!1;if(q){gt=x.get(Ct),gt===void 0&&(gt=[],x.set(Ct,gt));const Ft=q.textures;if(gt.length!==Ft.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,Zt=Ft.length;bt<Zt;bt++)gt[bt]=s.COLOR_ATTACHMENT0+bt;gt.length=Ft.length,Dt=!0}}else gt[0]!==s.BACK&&(gt[0]=s.BACK,Dt=!0);Dt&&s.drawBuffers(gt)}function Pe(q){return A!==q?(s.useProgram(q),A=q,!0):!1}const le={[er]:s.FUNC_ADD,[dS]:s.FUNC_SUBTRACT,[pS]:s.FUNC_REVERSE_SUBTRACT};le[mS]=s.MIN,le[gS]=s.MAX;const ue={[vS]:s.ZERO,[_S]:s.ONE,[xS]:s.SRC_COLOR,[jd]:s.SRC_ALPHA,[TS]:s.SRC_ALPHA_SATURATE,[bS]:s.DST_COLOR,[MS]:s.DST_ALPHA,[yS]:s.ONE_MINUS_SRC_COLOR,[Qd]:s.ONE_MINUS_SRC_ALPHA,[ES]:s.ONE_MINUS_DST_COLOR,[SS]:s.ONE_MINUS_DST_ALPHA,[AS]:s.CONSTANT_COLOR,[wS]:s.ONE_MINUS_CONSTANT_COLOR,[RS]:s.CONSTANT_ALPHA,[CS]:s.ONE_MINUS_CONSTANT_ALPHA};function Se(q,Ct,gt,Dt,Ft,bt,Zt,kt,cn,He){if(q===ea){M===!0&&(Ht(s.BLEND),M=!1);return}if(M===!1&&(yt(s.BLEND),M=!0),q!==fS){if(q!==y||He!==W){if((D!==er||I!==er)&&(s.blendEquation(s.FUNC_ADD),D=er,I=er),He)switch(q){case oo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kd:s.blendFunc(s.ONE,s.ONE);break;case v1:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _1:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:pe("WebGLState: Invalid blending: ",q);break}else switch(q){case oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case v1:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _1:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",q);break}L=null,w=null,U=null,B=null,T.set(0,0,0),O=0,y=q,W=He}return}Ft=Ft||Ct,bt=bt||gt,Zt=Zt||Dt,(Ct!==D||Ft!==I)&&(s.blendEquationSeparate(le[Ct],le[Ft]),D=Ct,I=Ft),(gt!==L||Dt!==w||bt!==U||Zt!==B)&&(s.blendFuncSeparate(ue[gt],ue[Dt],ue[bt],ue[Zt]),L=gt,w=Dt,U=bt,B=Zt),(kt.equals(T)===!1||cn!==O)&&(s.blendColor(kt.r,kt.g,kt.b,cn),T.copy(kt),O=cn),y=q,W=!1}function xe(q,Ct){q.side===Qi?Ht(s.CULL_FACE):yt(s.CULL_FACE);let gt=q.side===ni;Ct&&(gt=!gt),on(gt),q.blending===oo&&q.transparent===!1?Se(ea):Se(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const Dt=q.stencilWrite;f.setTest(Dt),Dt&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ln(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):Ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function on(q){V!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),V=q)}function tn(q){q!==cS?(yt(s.CULL_FACE),q!==Z&&(q===g1?s.cullFace(s.BACK):q===uS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ht(s.CULL_FACE),Z=q}function Je(q){q!==ut&&(H&&s.lineWidth(q),ut=q)}function ln(q,Ct,gt){q?(yt(s.POLYGON_OFFSET_FILL),(ht!==Ct||j!==gt)&&(ht=Ct,j=gt,u.getReversed()&&(Ct=-Ct),s.polygonOffset(Ct,gt))):Ht(s.POLYGON_OFFSET_FILL)}function ze(q){q?yt(s.SCISSOR_TEST):Ht(s.SCISSOR_TEST)}function en(q){q===void 0&&(q=s.TEXTURE0+z-1),St!==q&&(s.activeTexture(q),St=q)}function N(q,Ct,gt){gt===void 0&&(St===null?gt=s.TEXTURE0+z-1:gt=St);let Dt=F[gt];Dt===void 0&&(Dt={type:void 0,texture:void 0},F[gt]=Dt),(Dt.type!==q||Dt.texture!==Ct)&&(St!==gt&&(s.activeTexture(gt),St=gt),s.bindTexture(q,Ct||xt[q]),Dt.type=q,Dt.texture=Ct)}function Xt(){const q=F[St];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ae(){try{s.compressedTexImage2D(...arguments)}catch(q){pe("WebGLState:",q)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(q){pe("WebGLState:",q)}}function E(){try{s.texSubImage2D(...arguments)}catch(q){pe("WebGLState:",q)}}function Q(){try{s.texSubImage3D(...arguments)}catch(q){pe("WebGLState:",q)}}function et(){try{s.compressedTexSubImage2D(...arguments)}catch(q){pe("WebGLState:",q)}}function lt(){try{s.compressedTexSubImage3D(...arguments)}catch(q){pe("WebGLState:",q)}}function At(){try{s.texStorage2D(...arguments)}catch(q){pe("WebGLState:",q)}}function Ut(){try{s.texStorage3D(...arguments)}catch(q){pe("WebGLState:",q)}}function dt(){try{s.texImage2D(...arguments)}catch(q){pe("WebGLState:",q)}}function pt(){try{s.texImage3D(...arguments)}catch(q){pe("WebGLState:",q)}}function Rt(q){return v[q]!==void 0?v[q]:s.getParameter(q)}function zt(q,Ct){v[q]!==Ct&&(s.pixelStorei(q,Ct),v[q]=Ct)}function Lt(q){Et.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Et.copy(q))}function Nt(q){wt.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),wt.copy(q))}function Jt(q,Ct){let gt=p.get(Ct);gt===void 0&&(gt=new WeakMap,p.set(Ct,gt));let Dt=gt.get(q);Dt===void 0&&(Dt=s.getUniformBlockIndex(Ct,q.name),gt.set(q,Dt))}function ee(q,Ct){const Dt=p.get(Ct).get(q);d.get(Ct)!==Dt&&(s.uniformBlockBinding(Ct,Dt,q.__bindingPointIndex),d.set(Ct,Dt))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},v={},St=null,F={},_={},x=new WeakMap,b=[],A=null,M=!1,y=null,D=null,L=null,w=null,I=null,U=null,B=null,T=new se(0,0,0),O=0,W=!1,V=null,Z=null,ut=null,ht=null,j=null,Et.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:yt,disable:Ht,bindFramebuffer:te,drawBuffers:Kt,useProgram:Pe,setBlending:Se,setMaterial:xe,setFlipSided:on,setCullFace:tn,setLineWidth:Je,setPolygonOffset:ln,setScissorTest:ze,activeTexture:en,bindTexture:N,unbindTexture:Xt,compressedTexImage2D:ae,compressedTexImage3D:P,texImage2D:dt,texImage3D:pt,pixelStorei:zt,getParameter:Rt,updateUBOMapping:Jt,uniformBlockBinding:ee,texStorage2D:At,texStorage3D:Ut,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:et,compressedTexSubImage3D:lt,scissor:Lt,viewport:Nt,reset:ce}}function zA(s,t,n,a,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Bt,g=new WeakMap,v=new Set;let _;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,E){return b?new OffscreenCanvas(P,E):Vu("canvas")}function M(P,E,Q){let et=1;const lt=ae(P);if((lt.width>Q||lt.height>Q)&&(et=Q/Math.max(lt.width,lt.height)),et<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const At=Math.floor(et*lt.width),Ut=Math.floor(et*lt.height);_===void 0&&(_=A(At,Ut));const dt=E?A(At,Ut):_;return dt.width=At,dt.height=Ut,dt.getContext("2d").drawImage(P,0,0,At,Ut),oe("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+At+"x"+Ut+")."),dt}else return"data"in P&&oe("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),P;return P}function y(P){return P.generateMipmaps}function D(P){s.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(P,E,Q,et,lt,At=!1){if(P!==null){if(s[P]!==void 0)return s[P];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ut;et&&(Ut=t.get("EXT_texture_norm16"),Ut||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=E;if(E===s.RED&&(Q===s.FLOAT&&(dt=s.R32F),Q===s.HALF_FLOAT&&(dt=s.R16F),Q===s.UNSIGNED_BYTE&&(dt=s.R8),Q===s.UNSIGNED_SHORT&&Ut&&(dt=Ut.R16_EXT),Q===s.SHORT&&Ut&&(dt=Ut.R16_SNORM_EXT)),E===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(dt=s.R8UI),Q===s.UNSIGNED_SHORT&&(dt=s.R16UI),Q===s.UNSIGNED_INT&&(dt=s.R32UI),Q===s.BYTE&&(dt=s.R8I),Q===s.SHORT&&(dt=s.R16I),Q===s.INT&&(dt=s.R32I)),E===s.RG&&(Q===s.FLOAT&&(dt=s.RG32F),Q===s.HALF_FLOAT&&(dt=s.RG16F),Q===s.UNSIGNED_BYTE&&(dt=s.RG8),Q===s.UNSIGNED_SHORT&&Ut&&(dt=Ut.RG16_EXT),Q===s.SHORT&&Ut&&(dt=Ut.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(dt=s.RG8UI),Q===s.UNSIGNED_SHORT&&(dt=s.RG16UI),Q===s.UNSIGNED_INT&&(dt=s.RG32UI),Q===s.BYTE&&(dt=s.RG8I),Q===s.SHORT&&(dt=s.RG16I),Q===s.INT&&(dt=s.RG32I)),E===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(dt=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(dt=s.RGB16UI),Q===s.UNSIGNED_INT&&(dt=s.RGB32UI),Q===s.BYTE&&(dt=s.RGB8I),Q===s.SHORT&&(dt=s.RGB16I),Q===s.INT&&(dt=s.RGB32I)),E===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(dt=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(dt=s.RGBA16UI),Q===s.UNSIGNED_INT&&(dt=s.RGBA32UI),Q===s.BYTE&&(dt=s.RGBA8I),Q===s.SHORT&&(dt=s.RGBA16I),Q===s.INT&&(dt=s.RGBA32I)),E===s.RGB&&(Q===s.UNSIGNED_SHORT&&Ut&&(dt=Ut.RGB16_EXT),Q===s.SHORT&&Ut&&(dt=Ut.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(dt=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(dt=s.R11F_G11F_B10F)),E===s.RGBA){const pt=At?Gu:Ce.getTransfer(lt);Q===s.FLOAT&&(dt=s.RGBA32F),Q===s.HALF_FLOAT&&(dt=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(dt=pt===Fe?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Ut&&(dt=Ut.RGBA16_EXT),Q===s.SHORT&&Ut&&(dt=Ut.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function I(P,E){let Q;return P?E===null||E===ma||E===Ll?Q=s.DEPTH24_STENCIL8:E===Ji?Q=s.DEPTH32F_STENCIL8:E===Nl&&(Q=s.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ma||E===Ll?Q=s.DEPTH_COMPONENT24:E===Ji?Q=s.DEPTH_COMPONENT32F:E===Nl&&(Q=s.DEPTH_COMPONENT16),Q}function U(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==An?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function B(P){const E=P.target;E.removeEventListener("dispose",B),O(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),V(E)}function O(P){const E=a.get(P);if(E.__webglInit===void 0)return;const Q=P.source,et=x.get(Q);if(et){const lt=et[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&W(P),Object.keys(et).length===0&&x.delete(Q)}a.remove(P)}function W(P){const E=a.get(P);s.deleteTexture(E.__webglTexture);const Q=P.source,et=x.get(Q);delete et[E.__cacheKey],u.memory.textures--}function V(P){const E=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let lt=0;lt<E.__webglFramebuffer[et].length;lt++)s.deleteFramebuffer(E.__webglFramebuffer[et][lt]);else s.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)s.deleteFramebuffer(E.__webglFramebuffer[et]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=P.textures;for(let et=0,lt=Q.length;et<lt;et++){const At=a.get(Q[et]);At.__webglTexture&&(s.deleteTexture(At.__webglTexture),u.memory.textures--),a.remove(Q[et])}a.remove(P)}let Z=0;function ut(){Z=0}function ht(){return Z}function j(P){Z=P}function z(){const P=Z;return P>=o.maxTextures&&oe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),Z+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function J(P,E){const Q=a.get(P);if(P.isVideoTexture&&N(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Q.__version!==P.version){const et=P.image;if(et===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(Q,P,E);return}}else P.isExternalTexture&&(Q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+E)}function ft(P,E){const Q=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){Ht(Q,P,E);return}else P.isExternalTexture&&(Q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+E)}function St(P,E){const Q=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){Ht(Q,P,E);return}n.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+E)}function F(P,E){const Q=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Q.__version!==P.version){te(Q,P,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+E)}const K={[Ul]:s.REPEAT,[fa]:s.CLAMP_TO_EDGE,[s0]:s.MIRRORED_REPEAT},_t={[Un]:s.NEAREST,[NS]:s.NEAREST_MIPMAP_NEAREST,[$c]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[fd]:s.LINEAR_MIPMAP_NEAREST,[ir]:s.LINEAR_MIPMAP_LINEAR},Et={[IS]:s.NEVER,[GS]:s.ALWAYS,[FS]:s.LESS,[op]:s.LEQUAL,[BS]:s.EQUAL,[lp]:s.GEQUAL,[zS]:s.GREATER,[HS]:s.NOTEQUAL};function wt(P,E){if(E.type===Ji&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===An||E.magFilter===fd||E.magFilter===$c||E.magFilter===ir||E.minFilter===An||E.minFilter===fd||E.minFilter===$c||E.minFilter===ir)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,K[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,K[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,K[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,_t[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,_t[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==$c&&E.minFilter!==ir||E.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function tt(P,E){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",B));const et=E.source;let lt=x.get(et);lt===void 0&&(lt={},x.set(et,lt));const At=H(E);if(At!==P.__cacheKey){lt[At]===void 0&&(lt[At]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),lt[At].usedTimes++;const Ut=lt[P.__cacheKey];Ut!==void 0&&(lt[P.__cacheKey].usedTimes--,Ut.usedTimes===0&&W(E)),P.__cacheKey=At,P.__webglTexture=lt[At].texture}return Q}function xt(P,E,Q){return Math.floor(Math.floor(P/Q)/E)}function yt(P,E,Q,et){const At=P.updateRanges;if(At.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Q,et,E.data);else{At.sort((zt,Lt)=>zt.start-Lt.start);let Ut=0;for(let zt=1;zt<At.length;zt++){const Lt=At[Ut],Nt=At[zt],Jt=Lt.start+Lt.count,ee=xt(Nt.start,E.width,4),ce=xt(Lt.start,E.width,4);Nt.start<=Jt+1&&ee===ce&&xt(Nt.start+Nt.count-1,E.width,4)===ee?Lt.count=Math.max(Lt.count,Nt.start+Nt.count-Lt.start):(++Ut,At[Ut]=Nt)}At.length=Ut+1;const dt=n.getParameter(s.UNPACK_ROW_LENGTH),pt=n.getParameter(s.UNPACK_SKIP_PIXELS),Rt=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let zt=0,Lt=At.length;zt<Lt;zt++){const Nt=At[zt],Jt=Math.floor(Nt.start/4),ee=Math.ceil(Nt.count/4),ce=Jt%E.width,q=Math.floor(Jt/E.width),Ct=ee,gt=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),n.pixelStorei(s.UNPACK_SKIP_ROWS,q),n.texSubImage2D(s.TEXTURE_2D,0,ce,q,Ct,gt,Q,et,E.data)}P.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,dt),n.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(s.UNPACK_SKIP_ROWS,Rt)}}function Ht(P,E,Q){let et=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=s.TEXTURE_3D);const lt=tt(P,E),At=E.source;n.bindTexture(et,P.__webglTexture,s.TEXTURE0+Q);const Ut=a.get(At);if(At.version!==Ut.__version||lt===!0){if(n.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const gt=Ce.getPrimaries(Ce.workingColorSpace),Dt=E.colorSpace===Gi?null:Ce.getPrimaries(E.colorSpace),Ft=E.colorSpace===Gi||gt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let pt=M(E.image,!1,o.maxTextureSize);pt=Xt(E,pt);const Rt=c.convert(E.format,E.colorSpace),zt=c.convert(E.type);let Lt=w(E.internalFormat,Rt,zt,E.normalized,E.colorSpace,E.isVideoTexture);wt(et,E);let Nt;const Jt=E.mipmaps,ee=E.isVideoTexture!==!0,ce=Ut.__version===void 0||lt===!0,q=At.dataReady,Ct=U(E,pt);if(E.isDepthTexture)Lt=I(E.format===ar,E.type),ce&&(ee?n.texStorage2D(s.TEXTURE_2D,1,Lt,pt.width,pt.height):n.texImage2D(s.TEXTURE_2D,0,Lt,pt.width,pt.height,0,Rt,zt,null));else if(E.isDataTexture)if(Jt.length>0){ee&&ce&&n.texStorage2D(s.TEXTURE_2D,Ct,Lt,Jt[0].width,Jt[0].height);for(let gt=0,Dt=Jt.length;gt<Dt;gt++)Nt=Jt[gt],ee?q&&n.texSubImage2D(s.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,Rt,zt,Nt.data):n.texImage2D(s.TEXTURE_2D,gt,Lt,Nt.width,Nt.height,0,Rt,zt,Nt.data);E.generateMipmaps=!1}else ee?(ce&&n.texStorage2D(s.TEXTURE_2D,Ct,Lt,pt.width,pt.height),q&&yt(E,pt,Rt,zt)):n.texImage2D(s.TEXTURE_2D,0,Lt,pt.width,pt.height,0,Rt,zt,pt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ee&&ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Lt,Jt[0].width,Jt[0].height,pt.depth);for(let gt=0,Dt=Jt.length;gt<Dt;gt++)if(Nt=Jt[gt],E.format!==ta)if(Rt!==null)if(ee){if(q)if(E.layerUpdates.size>0){const Ft=$1(Nt.width,Nt.height,E.format,E.type);for(const bt of E.layerUpdates){const Zt=Nt.data.subarray(bt*Ft/Nt.data.BYTES_PER_ELEMENT,(bt+1)*Ft/Nt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,bt,Nt.width,Nt.height,1,Rt,Zt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Nt.width,Nt.height,pt.depth,Rt,Nt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,Lt,Nt.width,Nt.height,pt.depth,0,Nt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Nt.width,Nt.height,pt.depth,Rt,zt,Nt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,gt,Lt,Nt.width,Nt.height,pt.depth,0,Rt,zt,Nt.data)}else{ee&&ce&&n.texStorage2D(s.TEXTURE_2D,Ct,Lt,Jt[0].width,Jt[0].height);for(let gt=0,Dt=Jt.length;gt<Dt;gt++)Nt=Jt[gt],E.format!==ta?Rt!==null?ee?q&&n.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,Rt,Nt.data):n.compressedTexImage2D(s.TEXTURE_2D,gt,Lt,Nt.width,Nt.height,0,Nt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?q&&n.texSubImage2D(s.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,Rt,zt,Nt.data):n.texImage2D(s.TEXTURE_2D,gt,Lt,Nt.width,Nt.height,0,Rt,zt,Nt.data)}else if(E.isDataArrayTexture)if(ee){if(ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Lt,pt.width,pt.height,pt.depth),q)if(E.layerUpdates.size>0){const gt=$1(pt.width,pt.height,E.format,E.type);for(const Dt of E.layerUpdates){const Ft=pt.data.subarray(Dt*gt/pt.data.BYTES_PER_ELEMENT,(Dt+1)*gt/pt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Dt,pt.width,pt.height,1,Rt,zt,Ft)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Rt,zt,pt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,pt.width,pt.height,pt.depth,0,Rt,zt,pt.data);else if(E.isData3DTexture)ee?(ce&&n.texStorage3D(s.TEXTURE_3D,Ct,Lt,pt.width,pt.height,pt.depth),q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Rt,zt,pt.data)):n.texImage3D(s.TEXTURE_3D,0,Lt,pt.width,pt.height,pt.depth,0,Rt,zt,pt.data);else if(E.isFramebufferTexture){if(ce)if(ee)n.texStorage2D(s.TEXTURE_2D,Ct,Lt,pt.width,pt.height);else{let gt=pt.width,Dt=pt.height;for(let Ft=0;Ft<Ct;Ft++)n.texImage2D(s.TEXTURE_2D,Ft,Lt,gt,Dt,0,Rt,zt,null),gt>>=1,Dt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const gt=s.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),pt.parentNode!==gt){gt.appendChild(pt),v.add(E),gt.onpaint=Dt=>{const Ft=Dt.changedElements;for(const bt of v)Ft.includes(bt.image)&&(bt.needsUpdate=!0)},gt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,pt);else{const Ft=s.RGBA,bt=s.RGBA,Zt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ft,bt,Zt,pt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(ee&&ce){const gt=ae(Jt[0]);n.texStorage2D(s.TEXTURE_2D,Ct,Lt,gt.width,gt.height)}for(let gt=0,Dt=Jt.length;gt<Dt;gt++)Nt=Jt[gt],ee?q&&n.texSubImage2D(s.TEXTURE_2D,gt,0,0,Rt,zt,Nt):n.texImage2D(s.TEXTURE_2D,gt,Lt,Rt,zt,Nt);E.generateMipmaps=!1}else if(ee){if(ce){const gt=ae(pt);n.texStorage2D(s.TEXTURE_2D,Ct,Lt,gt.width,gt.height)}q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,zt,pt)}else n.texImage2D(s.TEXTURE_2D,0,Lt,Rt,zt,pt);y(E)&&D(et),Ut.__version=At.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function te(P,E,Q){if(E.image.length!==6)return;const et=tt(P,E),lt=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Q);const At=a.get(lt);if(lt.version!==At.__version||et===!0){n.activeTexture(s.TEXTURE0+Q);const Ut=Ce.getPrimaries(Ce.workingColorSpace),dt=E.colorSpace===Gi?null:Ce.getPrimaries(E.colorSpace),pt=E.colorSpace===Gi||Ut===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Rt=E.isCompressedTexture||E.image[0].isCompressedTexture,zt=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let bt=0;bt<6;bt++)!Rt&&!zt?Lt[bt]=M(E.image[bt],!0,o.maxCubemapSize):Lt[bt]=zt?E.image[bt].image:E.image[bt],Lt[bt]=Xt(E,Lt[bt]);const Nt=Lt[0],Jt=c.convert(E.format,E.colorSpace),ee=c.convert(E.type),ce=w(E.internalFormat,Jt,ee,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,Ct=At.__version===void 0||et===!0,gt=lt.dataReady;let Dt=U(E,Nt);wt(s.TEXTURE_CUBE_MAP,E);let Ft;if(Rt){q&&Ct&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,ce,Nt.width,Nt.height);for(let bt=0;bt<6;bt++){Ft=Lt[bt].mipmaps;for(let Zt=0;Zt<Ft.length;Zt++){const kt=Ft[Zt];E.format!==ta?Jt!==null?q?gt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,0,0,kt.width,kt.height,Jt,kt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,ce,kt.width,kt.height,0,kt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?gt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,0,0,kt.width,kt.height,Jt,ee,kt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt,ce,kt.width,kt.height,0,Jt,ee,kt.data)}}}else{if(Ft=E.mipmaps,q&&Ct){Ft.length>0&&Dt++;const bt=ae(Lt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,ce,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(zt){q?gt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Lt[bt].width,Lt[bt].height,Jt,ee,Lt[bt].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ce,Lt[bt].width,Lt[bt].height,0,Jt,ee,Lt[bt].data);for(let Zt=0;Zt<Ft.length;Zt++){const cn=Ft[Zt].image[bt].image;q?gt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,0,0,cn.width,cn.height,Jt,ee,cn.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,ce,cn.width,cn.height,0,Jt,ee,cn.data)}}else{q?gt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Jt,ee,Lt[bt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ce,Jt,ee,Lt[bt]);for(let Zt=0;Zt<Ft.length;Zt++){const kt=Ft[Zt];q?gt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,0,0,Jt,ee,kt.image[bt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Zt+1,ce,Jt,ee,kt.image[bt])}}}y(E)&&D(s.TEXTURE_CUBE_MAP),At.__version=lt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Kt(P,E,Q,et,lt,At){const Ut=c.convert(Q.format,Q.colorSpace),dt=c.convert(Q.type),pt=w(Q.internalFormat,Ut,dt,Q.normalized,Q.colorSpace),Rt=a.get(E),zt=a.get(Q);if(zt.__renderTarget=E,!Rt.__hasExternalTextures){const Lt=Math.max(1,E.width>>At),Nt=Math.max(1,E.height>>At);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?n.texImage3D(lt,At,pt,Lt,Nt,E.depth,0,Ut,dt,null):n.texImage2D(lt,At,pt,Lt,Nt,0,Ut,dt,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),en(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,lt,zt.__webglTexture,0,ze(E)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,lt,zt.__webglTexture,At),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(P,E,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const et=E.depthTexture,lt=et&&et.isDepthTexture?et.type:null,At=I(E.stencilBuffer,lt),Ut=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;en(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ze(E),At,E.width,E.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ze(E),At,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,At,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ut,s.RENDERBUFFER,P)}else{const et=E.textures;for(let lt=0;lt<et.length;lt++){const At=et[lt],Ut=c.convert(At.format,At.colorSpace),dt=c.convert(At.type),pt=w(At.internalFormat,Ut,dt,At.normalized,At.colorSpace);en(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ze(E),pt,E.width,E.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ze(E),pt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function le(P,E,Q){const et=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const lt=a.get(E.depthTexture);if(lt.__renderTarget=E,(!lt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),et){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),lt.__webglTexture===void 0){lt.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),wt(s.TEXTURE_CUBE_MAP,E.depthTexture);const Rt=c.convert(E.depthTexture.format),zt=c.convert(E.depthTexture.type);let Lt;E.depthTexture.format===Wa?Lt=s.DEPTH_COMPONENT24:E.depthTexture.format===ar&&(Lt=s.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Lt,E.width,E.height,0,Rt,zt,null)}}else J(E.depthTexture,0);const At=lt.__webglTexture,Ut=ze(E),dt=et?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,pt=E.depthTexture.format===ar?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Wa)en(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,dt,At,0,Ut):s.framebufferTexture2D(s.FRAMEBUFFER,pt,dt,At,0);else if(E.depthTexture.format===ar)en(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,dt,At,0,Ut):s.framebufferTexture2D(s.FRAMEBUFFER,pt,dt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(P){const E=a.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const et=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){const lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",lt)};et.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=et}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let et=0;et<6;et++)le(E.__webglFramebuffer[et],P,et);else{const et=P.texture.mipmaps;et&&et.length>0?le(E.__webglFramebuffer[0],P,0):le(E.__webglFramebuffer,P,0)}else if(Q){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=s.createRenderbuffer(),Pe(E.__webglDepthbuffer[et],P,!1);else{const lt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,At),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,At)}}else{const et=P.texture.mipmaps;if(et&&et.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Pe(E.__webglDepthbuffer,P,!1);else{const lt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,At),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,At)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(P,E,Q){const et=a.get(P);E!==void 0&&Kt(et.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&ue(P)}function xe(P){const E=P.texture,Q=a.get(P),et=a.get(E);P.addEventListener("dispose",T);const lt=P.textures,At=P.isWebGLCubeRenderTarget===!0,Ut=lt.length>1;if(Ut||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=E.version,u.memory.textures++),At){Q.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[dt]=[];for(let pt=0;pt<E.mipmaps.length;pt++)Q.__webglFramebuffer[dt][pt]=s.createFramebuffer()}else Q.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let dt=0;dt<E.mipmaps.length;dt++)Q.__webglFramebuffer[dt]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ut)for(let dt=0,pt=lt.length;dt<pt;dt++){const Rt=a.get(lt[dt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&en(P)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let dt=0;dt<lt.length;dt++){const pt=lt[dt];Q.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[dt]);const Rt=c.convert(pt.format,pt.colorSpace),zt=c.convert(pt.type),Lt=w(pt.internalFormat,Rt,zt,pt.normalized,pt.colorSpace,P.isXRRenderTarget===!0),Nt=ze(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Lt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,Q.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(Q.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(At){n.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),wt(s.TEXTURE_CUBE_MAP,E);for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)Kt(Q.__webglFramebuffer[dt][pt],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,pt);else Kt(Q.__webglFramebuffer[dt],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);y(E)&&D(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ut){for(let dt=0,pt=lt.length;dt<pt;dt++){const Rt=lt[dt],zt=a.get(Rt);let Lt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Lt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Lt,zt.__webglTexture),wt(Lt,Rt),Kt(Q.__webglFramebuffer,P,Rt,s.COLOR_ATTACHMENT0+dt,Lt,0),y(Rt)&&D(Lt)}n.unbindTexture()}else{let dt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(dt,et.__webglTexture),wt(dt,E),E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)Kt(Q.__webglFramebuffer[pt],P,E,s.COLOR_ATTACHMENT0,dt,pt);else Kt(Q.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,dt,0);y(E)&&D(dt),n.unbindTexture()}P.depthBuffer&&ue(P)}function on(P){const E=P.textures;for(let Q=0,et=E.length;Q<et;Q++){const lt=E[Q];if(y(lt)){const At=L(P),Ut=a.get(lt).__webglTexture;n.bindTexture(At,Ut),D(At),n.unbindTexture()}}}const tn=[],Je=[];function ln(P){if(P.samples>0){if(en(P)===!1){const E=P.textures,Q=P.width,et=P.height;let lt=s.COLOR_BUFFER_BIT;const At=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=a.get(P),dt=E.length>1;if(dt)for(let Rt=0;Rt<E.length;Rt++)n.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const pt=P.texture.mipmaps;pt&&pt.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Rt=0;Rt<E.length;Rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const zt=a.get(E[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,zt,0)}s.blitFramebuffer(0,0,Q,et,0,0,Q,et,lt,s.NEAREST),d===!0&&(tn.length=0,Je.length=0,tn.push(s.COLOR_ATTACHMENT0+Rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(tn.push(At),Je.push(At),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Je)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tn))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let Rt=0;Rt<E.length;Rt++){n.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const zt=a.get(E[Rt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,zt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ze(P){return Math.min(o.maxSamples,P.samples)}function en(P){const E=a.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function N(P){const E=u.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Xt(P,E){const Q=P.colorSpace,et=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==Hu&&Q!==Gi&&(Ce.getTransfer(Q)===Fe?(et!==ta||lt!==Ri)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",Q)),E}function ae(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=z,this.resetTextureUnits=ut,this.getTextureUnits=ht,this.setTextureUnits=j,this.setTexture2D=J,this.setTexture2DArray=ft,this.setTexture3D=St,this.setTextureCube=F,this.rebindTextures=Se,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=on,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function HA(s,t){function n(a,o=Gi){let c;const u=Ce.getTransfer(o);if(a===Ri)return s.UNSIGNED_BYTE;if(a===ep)return s.UNSIGNED_SHORT_4_4_4_4;if(a===np)return s.UNSIGNED_SHORT_5_5_5_1;if(a===tx)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===ex)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===$_)return s.BYTE;if(a===J_)return s.SHORT;if(a===Nl)return s.UNSIGNED_SHORT;if(a===tp)return s.INT;if(a===ma)return s.UNSIGNED_INT;if(a===Ji)return s.FLOAT;if(a===ii)return s.HALF_FLOAT;if(a===nx)return s.ALPHA;if(a===ix)return s.RGB;if(a===ta)return s.RGBA;if(a===Wa)return s.DEPTH_COMPONENT;if(a===ar)return s.DEPTH_STENCIL;if(a===ip)return s.RED;if(a===ap)return s.RED_INTEGER;if(a===rr)return s.RG;if(a===sp)return s.RG_INTEGER;if(a===rp)return s.RGBA_INTEGER;if(a===Uu||a===Nu||a===Lu||a===Pu)if(u===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Nu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Lu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Pu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===r0||a===o0||a===l0||a===c0)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===r0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===o0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===l0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===c0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===u0||a===h0||a===f0||a===d0||a===p0||a===Fu||a===m0)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===u0||a===h0)return u===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===f0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===d0)return c.COMPRESSED_R11_EAC;if(a===p0)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Fu)return c.COMPRESSED_RG11_EAC;if(a===m0)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===g0||a===v0||a===_0||a===x0||a===y0||a===M0||a===S0||a===b0||a===E0||a===T0||a===A0||a===w0||a===R0||a===C0)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===g0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===v0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===_0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===x0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===y0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===M0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===S0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===b0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===E0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===T0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===A0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===w0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===R0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===C0)return u===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===D0||a===U0||a===N0)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===D0)return u===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===U0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===N0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===L0||a===P0||a===Bu||a===O0)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===L0)return c.COMPRESSED_RED_RGTC1_EXT;if(a===P0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Bu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===O0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ll?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const GA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VA=`
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

}`;class kA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new dx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new In({vertexShader:GA,fragmentShader:VA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tn(new Hl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Rs{constructor(t,n){super();const a=this;let o=null,c=1,u=null,f="local-floor",d=1,p=null,g=null,v=null,_=null,x=null,b=null;const A=typeof XRWebGLBinding<"u",M=new kA,y={},D=n.getContextAttributes();let L=null,w=null;const I=[],U=[],B=new Bt;let T=null;const O=new wi;O.viewport=new dn;const W=new wi;W.viewport=new dn;const V=[O,W],Z=new H2;let ut=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let xt=I[tt];return xt===void 0&&(xt=new _d,I[tt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(tt){let xt=I[tt];return xt===void 0&&(xt=new _d,I[tt]=xt),xt.getGripSpace()},this.getHand=function(tt){let xt=I[tt];return xt===void 0&&(xt=new _d,I[tt]=xt),xt.getHandSpace()};function j(tt){const xt=U.indexOf(tt.inputSource);if(xt===-1)return;const yt=I[xt];yt!==void 0&&(yt.update(tt.inputSource,tt.frame,p||u),yt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",H);for(let tt=0;tt<I.length;tt++){const xt=U[tt];xt!==null&&(U[tt]=null,I[tt].disconnect(xt))}ut=null,ht=null,M.reset();for(const tt in y)delete y[tt];t.setRenderTarget(L),x=null,_=null,v=null,o=null,w=null,wt.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,a.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){f=tt,a.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(tt){if(o=tt,o!==null){if(L=t.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",z),o.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ht=null,te=null;D.depth&&(te=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=D.stencil?ar:Wa,Ht=D.stencil?Ll:ma);const Kt={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(Kt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),w=new Xn(_.textureWidth,_.textureHeight,{format:ta,type:Ri,depthTexture:new po(_.textureWidth,_.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const yt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,yt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Xn(x.framebufferWidth,x.framebufferHeight,{format:ta,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(f),wt.setContext(o),wt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(tt){for(let xt=0;xt<tt.removed.length;xt++){const yt=tt.removed[xt],Ht=U.indexOf(yt);Ht>=0&&(U[Ht]=null,I[Ht].disconnect(yt))}for(let xt=0;xt<tt.added.length;xt++){const yt=tt.added[xt];let Ht=U.indexOf(yt);if(Ht===-1){for(let Kt=0;Kt<I.length;Kt++)if(Kt>=U.length){U.push(yt),Ht=Kt;break}else if(U[Kt]===null){U[Kt]=yt,Ht=Kt;break}if(Ht===-1)break}const te=I[Ht];te&&te.connect(yt)}}const J=new X,ft=new X;function St(tt,xt,yt){J.setFromMatrixPosition(xt.matrixWorld),ft.setFromMatrixPosition(yt.matrixWorld);const Ht=J.distanceTo(ft),te=xt.projectionMatrix.elements,Kt=yt.projectionMatrix.elements,Pe=te[14]/(te[10]-1),le=te[14]/(te[10]+1),ue=(te[9]+1)/te[5],Se=(te[9]-1)/te[5],xe=(te[8]-1)/te[0],on=(Kt[8]+1)/Kt[0],tn=Pe*xe,Je=Pe*on,ln=Ht/(-xe+on),ze=ln*-xe;if(xt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ze),tt.translateZ(ln),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),te[10]===-1)tt.projectionMatrix.copy(xt.projectionMatrix),tt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const en=Pe+ln,N=le+ln,Xt=tn-ze,ae=Je+(Ht-ze),P=ue*le/N*en,E=Se*le/N*en;tt.projectionMatrix.makePerspective(Xt,ae,P,E,en,N),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function F(tt,xt){xt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(xt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(o===null)return;let xt=tt.near,yt=tt.far;M.texture!==null&&(M.depthNear>0&&(xt=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),Z.near=W.near=O.near=xt,Z.far=W.far=O.far=yt,(ut!==Z.near||ht!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ut=Z.near,ht=Z.far),Z.layers.mask=tt.layers.mask|6,O.layers.mask=Z.layers.mask&-5,W.layers.mask=Z.layers.mask&-3;const Ht=tt.parent,te=Z.cameras;F(Z,Ht);for(let Kt=0;Kt<te.length;Kt++)F(te[Kt],Ht);te.length===2?St(Z,O,W):Z.projectionMatrix.copy(O.projectionMatrix),K(tt,Z,Ht)};function K(tt,xt,yt){yt===null?tt.matrix.copy(xt.matrixWorld):(tt.matrix.copy(yt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(xt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(xt.projectionMatrix),tt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ol*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(tt){d=tt,_!==null&&(_.fixedFoveation=tt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(tt){return y[tt]};let _t=null;function Et(tt,xt){if(g=xt.getViewerPose(p||u),b=xt,g!==null){const yt=g.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let Ht=!1;yt.length!==Z.cameras.length&&(Z.cameras.length=0,Ht=!0);for(let le=0;le<yt.length;le++){const ue=yt[le];let Se=null;if(x!==null)Se=x.getViewport(ue);else{const on=v.getViewSubImage(_,ue);Se=on.viewport,le===0&&(t.setRenderTargetTextures(w,on.colorTexture,on.depthStencilTexture),t.setRenderTarget(w))}let xe=V[le];xe===void 0&&(xe=new wi,xe.layers.enable(le),xe.viewport=new dn,V[le]=xe),xe.matrix.fromArray(ue.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(ue.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Se.x,Se.y,Se.width,Se.height),le===0&&(Z.matrix.copy(xe.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ht===!0&&Z.cameras.push(xe)}const te=o.enabledFeatures;if(te&&te.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=a.getBinding();const le=v.getDepthInformation(yt[0]);le&&le.isValid&&le.texture&&M.init(le,o.renderState)}if(te&&te.includes("camera-access")&&A){t.state.unbindTexture(),v=a.getBinding();for(let le=0;le<yt.length;le++){const ue=yt[le].camera;if(ue){let Se=y[ue];Se||(Se=new dx,y[ue]=Se);const xe=v.getCameraImage(ue);Se.sourceTexture=xe}}}}for(let yt=0;yt<I.length;yt++){const Ht=U[yt],te=I[yt];Ht!==null&&te!==void 0&&te.update(Ht,xt,p||u)}_t&&_t(tt,xt),xt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:xt}),b=null}const wt=new Mx;wt.setAnimationLoop(Et),this.setAnimationLoop=function(tt){_t=tt},this.dispose=function(){}}}const XA=new $e,Rx=new he;Rx.set(-1,0,0,0,1,0,0,0,1);function qA(s,t){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,px(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,D,L,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&x(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),b(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),A(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&f(M,y)):y.isPointsMaterial?d(M,y,D,L):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ni&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ni&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=t.get(y),L=D.envMap,w=D.envMapRotation;L&&(M.envMap.value=L,M.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(w)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Rx),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function f(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function d(M,y,D,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=L*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ni&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const D=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function YA(s,t,n,a){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,I){const U=I.program;a.uniformBlockBinding(w,U)}function p(w,I){let U=o[w.id];U===void 0&&(M(w),U=g(w),o[w.id]=U,w.addEventListener("dispose",D));const B=I.program;a.updateUBOMapping(w,B);const T=t.render.frame;c[w.id]!==T&&(_(w),c[w.id]=T)}function g(w){const I=v();w.__bindingPointIndex=I;const U=s.createBuffer(),B=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,B,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,U),U}function v(){for(let w=0;w<f;w++)if(u.indexOf(w)===-1)return u.push(w),w;return pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const I=o[w.id],U=w.uniforms,B=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let T=0,O=U.length;T<O;T++){const W=U[T];if(Array.isArray(W))for(let V=0,Z=W.length;V<Z;V++)x(W[V],T,V,B);else x(W,T,0,B)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(w,I,U,B){if(A(w,I,U,B)===!0){const T=w.__offset,O=w.value;if(Array.isArray(O)){let W=0;for(let V=0;V<O.length;V++){const Z=O[V],ut=y(Z);b(Z,w.__data,W),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(W+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(O,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,w.__data)}}function b(w,I,U){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,U)}function A(w,I,U,B){const T=w.value,O=I+"_"+U;if(B[O]===void 0)return typeof T=="number"||typeof T=="boolean"?B[O]=T:ArrayBuffer.isView(T)?B[O]=T.slice():B[O]=T.clone(),!0;{const W=B[O];if(typeof T=="number"||typeof T=="boolean"){if(W!==T)return B[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(W.equals(T)===!1)return W.copy(T),!0}}return!1}function M(w){const I=w.uniforms;let U=0;const B=16;for(let O=0,W=I.length;O<W;O++){const V=Array.isArray(I[O])?I[O]:[I[O]];for(let Z=0,ut=V.length;Z<ut;Z++){const ht=V[Z],j=Array.isArray(ht.value)?ht.value:[ht.value];for(let z=0,H=j.length;z<H;z++){const J=j[z],ft=y(J),St=U%B,F=St%ft.boundary,K=St+F;U+=F,K!==0&&B-K<ft.storage&&(U+=B-K),ht.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),ht.__offset=U,U+=ft.storage}}}const T=U%B;return T>0&&(U+=B-T),w.__size=U,w.__cache={},this}function y(w){const I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",w),I}function D(w){const I=w.target;I.removeEventListener("dispose",D);const U=u.indexOf(I.__bindingPointIndex);u.splice(U,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function L(){for(const w in o)s.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:d,update:p,dispose:L}}const ZA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function KA(){return ca===null&&(ca=new hx(ZA,16,16,rr,ii),ca.name="DFG_LUT",ca.minFilter=An,ca.magFilter=An,ca.wrapS=fa,ca.wrapT=fa,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class jA{constructor(t={}){const{canvas:n=kS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Ri}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const A=x,M=new Set([rp,sp,ap]),y=new Set([Ri,ma,Nl,Ll,ep,np]),D=new Uint32Array(4),L=new Int32Array(4),w=new X;let I=null,U=null;const B=[],T=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let V=!1,Z=null,ut=null,ht=null,j=null;this._outputColorSpace=fi;let z=0,H=0,J=null,ft=-1,St=null;const F=new dn,K=new dn;let _t=null;const Et=new se(0);let wt=0,tt=n.width,xt=n.height,yt=1,Ht=null,te=null;const Kt=new dn(0,0,tt,xt),Pe=new dn(0,0,tt,xt);let le=!1;const ue=new pp;let Se=!1,xe=!1;const on=new $e,tn=new X,Je=new dn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function en(){return J===null?yt:1}let N=a;function Xt(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Z0}`),n.addEventListener("webglcontextlost",cn,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",pi,!1),N===null){const Y="webgl2";if(N=Xt(Y,R),N===null)throw Xt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw pe("WebGLRenderer: "+R.message),R}let ae,P,E,Q,et,lt,At,Ut,dt,pt,Rt,zt,Lt,Nt,Jt,ee,ce,q,Ct,gt,Dt,Ft,bt;function Zt(){ae=new KE(N),ae.init(),Dt=new HA(N,ae),P=new GE(N,ae,t,Dt),E=new BA(N,ae),P.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),ut=N.createFramebuffer(),ht=N.createFramebuffer(),j=N.createFramebuffer(),Q=new $E(N),et=new EA,lt=new zA(N,ae,E,et,P,Dt,Q),At=new ZE(W),Ut=new nb(N),Ft=new zE(N,Ut),dt=new jE(N,Ut,Q,Ft),pt=new tT(N,dt,Ut,Ft,Q),q=new JE(N,P,lt),Jt=new VE(et),Rt=new bA(W,At,ae,P,Ft,Jt),zt=new qA(W,et),Lt=new AA,Nt=new NA(ae),ce=new BE(W,At,E,pt,b,d),ee=new FA(W,pt,P),bt=new YA(N,Q,P,E),Ct=new HE(N,ae,Q),gt=new QE(N,ae,Q),Q.programs=Rt.programs,W.capabilities=P,W.extensions=ae,W.properties=et,W.renderLists=Lt,W.shadowMap=ee,W.state=E,W.info=Q}Zt(),A!==Ri&&(O=new nT(A,n.width,n.height,f,o,c));const kt=new WA(W,N);this.xr=kt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(R){R!==void 0&&(yt=R,this.setSize(tt,xt,!1))},this.getSize=function(R){return R.set(tt,xt)},this.setSize=function(R,Y,rt=!0){if(kt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=R,xt=Y,n.width=Math.floor(R*yt),n.height=Math.floor(Y*yt),rt===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(tt*yt,xt*yt).floor()},this.setDrawingBufferSize=function(R,Y,rt){tt=R,xt=Y,yt=rt,n.width=Math.floor(R*rt),n.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(A===Ri){pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Kt)},this.setViewport=function(R,Y,rt,at){R.isVector4?Kt.set(R.x,R.y,R.z,R.w):Kt.set(R,Y,rt,at),E.viewport(F.copy(Kt).multiplyScalar(yt).round())},this.getScissor=function(R){return R.copy(Pe)},this.setScissor=function(R,Y,rt,at){R.isVector4?Pe.set(R.x,R.y,R.z,R.w):Pe.set(R,Y,rt,at),E.scissor(K.copy(Pe).multiplyScalar(yt).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){E.setScissorTest(le=R)},this.setOpaqueSort=function(R){Ht=R},this.setTransparentSort=function(R){te=R},this.getClearColor=function(R){return R.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let at=0;if(R){let st=!1;if(J!==null){const Ot=J.texture.format;st=M.has(Ot)}if(st){const Ot=J.texture.type,Vt=y.has(Ot),Pt=ce.getClearColor(),qt=ce.getClearAlpha(),Wt=Pt.r,ne=Pt.g,me=Pt.b;Vt?(D[0]=Wt,D[1]=ne,D[2]=me,D[3]=qt,N.clearBufferuiv(N.COLOR,0,D)):(L[0]=Wt,L[1]=ne,L[2]=me,L[3]=qt,N.clearBufferiv(N.COLOR,0,L))}else at|=N.COLOR_BUFFER_BIT}Y&&(at|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(at|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&N.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Z=R},this.dispose=function(){n.removeEventListener("webglcontextlost",cn,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",pi,!1),ce.dispose(),Lt.dispose(),Nt.dispose(),et.dispose(),At.dispose(),pt.dispose(),Ft.dispose(),bt.dispose(),Rt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",_n),kt.removeEventListener("sessionend",Bn),ai.stop()};function cn(R){R.preventDefault(),E1("WebGLRenderer: Context Lost."),V=!0}function He(){E1("WebGLRenderer: Context Restored."),V=!1;const R=Q.autoReset,Y=ee.enabled,rt=ee.autoUpdate,at=ee.needsUpdate,st=ee.type;Zt(),Q.autoReset=R,ee.enabled=Y,ee.autoUpdate=rt,ee.needsUpdate=at,ee.type=st}function pi(R){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mi(R){const Y=R.target;Y.removeEventListener("dispose",mi),Mo(Y)}function Mo(R){So(R),et.remove(R)}function So(R){const Y=et.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){Rt.releaseProgram(rt)}),R.isShaderMaterial&&Rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,at,st,Ot){Y===null&&(Y=ln);const Vt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Pt=Za(R,Y,rt,at,st);E.setMaterial(at,Vt);let qt=rt.index,Wt=1;if(at.wireframe===!0){if(qt=dt.getWireframeAttribute(rt),qt===void 0)return;Wt=2}const ne=rt.drawRange,me=rt.attributes.position;let $t=ne.start*Wt,Ue=(ne.start+ne.count)*Wt;Ot!==null&&($t=Math.max($t,Ot.start*Wt),Ue=Math.min(Ue,(Ot.start+Ot.count)*Wt)),qt!==null?($t=Math.max($t,0),Ue=Math.min(Ue,qt.count)):me!=null&&($t=Math.max($t,0),Ue=Math.min(Ue,me.count));const un=Ue-$t;if(un<0||un===1/0)return;Ft.setup(st,at,Pt,rt,qt);let je,Ge=Ct;if(qt!==null&&(je=Ut.get(qt),Ge=gt,Ge.setIndex(je)),st.isMesh)at.wireframe===!0?(E.setLineWidth(at.wireframeLinewidth*en()),Ge.setMode(N.LINES)):Ge.setMode(N.TRIANGLES);else if(st.isLine){let Ve=at.linewidth;Ve===void 0&&(Ve=1),E.setLineWidth(Ve*en()),st.isLineSegments?Ge.setMode(N.LINES):st.isLineLoop?Ge.setMode(N.LINE_LOOP):Ge.setMode(N.LINE_STRIP)}else st.isPoints?Ge.setMode(N.POINTS):st.isSprite&&Ge.setMode(N.TRIANGLES);if(st.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Ge.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const Ve=st._multiDrawStarts,Gt=st._multiDrawCounts,Yn=st._multiDrawCount,be=qt?Ut.get(qt).bytesPerElement:1,wn=et.get(at).currentProgram.getUniforms();for(let gi=0;gi<Yn;gi++)wn.setValue(N,"_gl_DrawID",gi),Ge.render(Ve[gi]/be,Gt[gi])}else if(st.isInstancedMesh)Ge.renderInstances($t,un,st.count);else if(rt.isInstancedBufferGeometry){const Ve=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Gt=Math.min(rt.instanceCount,Ve);Ge.renderInstances($t,un,Gt)}else Ge.render($t,un)};function bo(R,Y,rt){R.transparent===!0&&R.side===Qi&&R.forceSinglePass===!1?(R.side=ni,R.needsUpdate=!0,Ya(R,Y,rt),R.side=ws,R.needsUpdate=!0,Ya(R,Y,rt),R.side=Qi):Ya(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),U=Nt.get(rt),U.init(Y),T.push(U),rt.traverseVisible(function(st){st.isLight&&st.layers.test(Y.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),R!==rt&&R.traverseVisible(function(st){st.isLight&&st.layers.test(Y.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),U.setupLights();const at=new Set;return R.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Ot=st.material;if(Ot)if(Array.isArray(Ot))for(let Vt=0;Vt<Ot.length;Vt++){const Pt=Ot[Vt];bo(Pt,rt,st),at.add(Pt)}else bo(Ot,rt,st),at.add(Ot)}),U=T.pop(),at},this.compileAsync=function(R,Y,rt=null){const at=this.compile(R,Y,rt);return new Promise(st=>{function Ot(){if(at.forEach(function(Vt){et.get(Vt).currentProgram.isReady()&&at.delete(Vt)}),at.size===0){st(R);return}setTimeout(Ot,10)}ae.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let ur=null;function na(R){ur&&ur(R)}function _n(){ai.stop()}function Bn(){ai.start()}const ai=new Mx;ai.setAnimationLoop(na),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(R){ur=R,kt.setAnimationLoop(R),R===null?ai.stop():ai.start()},kt.addEventListener("sessionstart",_n),kt.addEventListener("sessionend",Bn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(R,Y);const rt=kt.enabled===!0&&kt.isPresenting===!0,at=O!==null&&(J===null||rt)&&O.begin(W,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(Y),Y=kt.getCamera()),R.isScene===!0&&R.onBeforeRender(W,R,Y,J),U=Nt.get(R,T.length),U.init(Y),U.state.textureUnits=lt.getTextureUnits(),T.push(U),on.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ue.setFromProjectionMatrix(on,da,Y.reversedDepth),xe=this.localClippingEnabled,Se=Jt.init(this.clippingPlanes,xe),I=Lt.get(R,B.length),I.init(),B.push(I),kt.enabled===!0&&kt.isPresenting===!0){const Vt=W.xr.getDepthSensingMesh();Vt!==null&&Cs(Vt,Y,-1/0,W.sortObjects)}Cs(R,Y,0,W.sortObjects),I.finish(),W.sortObjects===!0&&I.sort(Ht,te,Y.reversedDepth),ze=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,ze&&ce.addToRenderList(I,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&Jt.beginShadows();const st=U.state.shadowsArray;if(ee.render(st,R,Y),Se===!0&&Jt.endShadows(),(at&&O.hasRenderPass())===!1){const Vt=I.opaque,Pt=I.transmissive;if(U.setupLights(),Y.isArrayCamera){const qt=Y.cameras;if(Pt.length>0)for(let Wt=0,ne=qt.length;Wt<ne;Wt++){const me=qt[Wt];Vl(Vt,Pt,R,me)}ze&&ce.render(R);for(let Wt=0,ne=qt.length;Wt<ne;Wt++){const me=qt[Wt];Gl(I,R,me,me.viewport)}}else Pt.length>0&&Vl(Vt,Pt,R,Y),ze&&ce.render(R),Gl(I,R,Y)}J!==null&&H===0&&(lt.updateMultisampleRenderTarget(J),lt.updateRenderTargetMipmap(J)),at&&O.end(W),R.isScene===!0&&R.onAfterRender(W,R,Y),Ft.resetDefaultState(),ft=-1,St=null,T.pop(),T.length>0?(U=T[T.length-1],lt.setTextureUnits(U.state.textureUnits),Se===!0&&Jt.setGlobalState(W.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?I=B[B.length-1]:I=null,Z!==null&&Z.renderEnd()};function Cs(R,Y,rt,at){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)U.pushLightProbeGrid(R);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ue.intersectsSprite(R)){at&&Je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(on);const Vt=pt.update(R),Pt=R.material;Pt.visible&&I.push(R,Vt,Pt,rt,Je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ue.intersectsObject(R))){const Vt=pt.update(R),Pt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Je.copy(R.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Je.copy(Vt.boundingSphere.center)),Je.applyMatrix4(R.matrixWorld).applyMatrix4(on)),Array.isArray(Pt)){const qt=Vt.groups;for(let Wt=0,ne=qt.length;Wt<ne;Wt++){const me=qt[Wt],$t=Pt[me.materialIndex];$t&&$t.visible&&I.push(R,Vt,$t,rt,Je.z,me)}}else Pt.visible&&I.push(R,Vt,Pt,rt,Je.z,null)}}const Ot=R.children;for(let Vt=0,Pt=Ot.length;Vt<Pt;Vt++)Cs(Ot[Vt],Y,rt,at)}function Gl(R,Y,rt,at){const{opaque:st,transmissive:Ot,transparent:Vt}=R;U.setupLightsView(rt),Se===!0&&Jt.setGlobalState(W.clippingPlanes,rt),at&&E.viewport(F.copy(at)),st.length>0&&Ds(st,Y,rt),Ot.length>0&&Ds(Ot,Y,rt),Vt.length>0&&Ds(Vt,Y,rt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Vl(R,Y,rt,at){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[at.id]===void 0){const $t=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[at.id]=new Xn(1,1,{generateMipmaps:!0,type:$t?ii:Ri,minFilter:ir,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Ot=U.state.transmissionRenderTarget[at.id],Vt=at.viewport||F;Ot.setSize(Vt.z*W.transmissionResolutionScale,Vt.w*W.transmissionResolutionScale);const Pt=W.getRenderTarget(),qt=W.getActiveCubeFace(),Wt=W.getActiveMipmapLevel();W.setRenderTarget(Ot),W.getClearColor(Et),wt=W.getClearAlpha(),wt<1&&W.setClearColor(16777215,.5),W.clear(),ze&&ce.render(rt);const ne=W.toneMapping;W.toneMapping=pa;const me=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),U.setupLightsView(at),Se===!0&&Jt.setGlobalState(W.clippingPlanes,at),Ds(R,rt,at),lt.updateMultisampleRenderTarget(Ot),lt.updateRenderTargetMipmap(Ot),ae.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ue=0,un=Y.length;Ue<un;Ue++){const je=Y[Ue],{object:Ge,geometry:Ve,material:Gt,group:Yn}=je;if(Gt.side===Qi&&Ge.layers.test(at.layers)){const be=Gt.side;Gt.side=ni,Gt.needsUpdate=!0,qa(Ge,rt,at,Ve,Gt,Yn),Gt.side=be,Gt.needsUpdate=!0,$t=!0}}$t===!0&&(lt.updateMultisampleRenderTarget(Ot),lt.updateRenderTargetMipmap(Ot))}W.setRenderTarget(Pt,qt,Wt),W.setClearColor(Et,wt),me!==void 0&&(at.viewport=me),W.toneMapping=ne}function Ds(R,Y,rt){const at=Y.isScene===!0?Y.overrideMaterial:null;for(let st=0,Ot=R.length;st<Ot;st++){const Vt=R[st],{object:Pt,geometry:qt,group:Wt}=Vt;let ne=Vt.material;ne.allowOverride===!0&&at!==null&&(ne=at),Pt.layers.test(rt.layers)&&qa(Pt,Y,rt,qt,ne,Wt)}}function qa(R,Y,rt,at,st,Ot){R.onBeforeRender(W,Y,rt,at,st,Ot),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),st.onBeforeRender(W,Y,rt,at,R,Ot),st.transparent===!0&&st.side===Qi&&st.forceSinglePass===!1?(st.side=ni,st.needsUpdate=!0,W.renderBufferDirect(rt,Y,at,st,R,Ot),st.side=ws,st.needsUpdate=!0,W.renderBufferDirect(rt,Y,at,st,R,Ot),st.side=Qi):W.renderBufferDirect(rt,Y,at,st,R,Ot),R.onAfterRender(W,Y,rt,at,st,Ot)}function Ya(R,Y,rt){Y.isScene!==!0&&(Y=ln);const at=et.get(R),st=U.state.lights,Ot=U.state.shadowsArray,Vt=st.state.version,Pt=Rt.getParameters(R,st.state,Ot,Y,rt,U.state.lightProbeGridArray),qt=Rt.getProgramCacheKey(Pt);let Wt=at.programs;at.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,at.fog=Y.fog;const ne=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;at.envMap=At.get(R.envMap||at.environment,ne),at.envMapRotation=at.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",mi),Wt=new Map,at.programs=Wt);let me=Wt.get(qt);if(me!==void 0){if(at.currentProgram===me&&at.lightsStateVersion===Vt)return _a(R,Pt),me}else Pt.uniforms=Rt.getUniforms(R),Z!==null&&R.isNodeMaterial&&Z.build(R,rt,Pt),R.onBeforeCompile(Pt,W),me=Rt.acquireProgram(Pt,qt),Wt.set(qt,me),at.uniforms=Pt.uniforms;const $t=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Jt.uniform),_a(R,Pt),at.needsLights=kl(R),at.lightsStateVersion=Vt,at.needsLights&&($t.ambientLightColor.value=st.state.ambient,$t.lightProbe.value=st.state.probe,$t.directionalLights.value=st.state.directional,$t.directionalLightShadows.value=st.state.directionalShadow,$t.spotLights.value=st.state.spot,$t.spotLightShadows.value=st.state.spotShadow,$t.rectAreaLights.value=st.state.rectArea,$t.ltc_1.value=st.state.rectAreaLTC1,$t.ltc_2.value=st.state.rectAreaLTC2,$t.pointLights.value=st.state.point,$t.pointLightShadows.value=st.state.pointShadow,$t.hemisphereLights.value=st.state.hemi,$t.directionalShadowMatrix.value=st.state.directionalShadowMatrix,$t.spotLightMatrix.value=st.state.spotLightMatrix,$t.spotLightMap.value=st.state.spotLightMap,$t.pointShadowMatrix.value=st.state.pointShadowMatrix),at.lightProbeGrid=U.state.lightProbeGridArray.length>0,at.currentProgram=me,at.uniformsList=null,me}function va(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Ou.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function _a(R,Y){const rt=et.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Us(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;w.setFromMatrixPosition(Y.matrixWorld);for(let rt=0,at=R.length;rt<at;rt++){const st=R[rt];if(st.texture!==null&&st.boundingBox.containsPoint(w))return st}return null}function Za(R,Y,rt,at,st){Y.isScene!==!0&&(Y=ln),lt.resetTextureUnits();const Ot=Y.fog,Vt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?Y.environment:null,Pt=J===null?W.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ce.workingColorSpace,qt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Wt=At.get(at.envMap||Vt,qt),ne=at.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,me=!!rt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),$t=!!rt.morphAttributes.position,Ue=!!rt.morphAttributes.normal,un=!!rt.morphAttributes.color;let je=pa;at.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(je=W.toneMapping);const Ge=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ve=Ge!==void 0?Ge.length:0,Gt=et.get(at),Yn=U.state.lights;if(Se===!0&&(xe===!0||R!==St)){const Ie=R===St&&at.id===ft;Jt.setState(at,R,Ie)}let be=!1;at.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Yn.state.version||Gt.outputColorSpace!==Pt||st.isBatchedMesh&&Gt.batching===!1||!st.isBatchedMesh&&Gt.batching===!0||st.isBatchedMesh&&Gt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&Gt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&Gt.instancing===!1||!st.isInstancedMesh&&Gt.instancing===!0||st.isSkinnedMesh&&Gt.skinning===!1||!st.isSkinnedMesh&&Gt.skinning===!0||st.isInstancedMesh&&Gt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Gt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Gt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Gt.instancingMorph===!1&&st.morphTexture!==null||Gt.envMap!==Wt||at.fog===!0&&Gt.fog!==Ot||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Jt.numPlanes||Gt.numIntersection!==Jt.numIntersection)||Gt.vertexAlphas!==ne||Gt.vertexTangents!==me||Gt.morphTargets!==$t||Gt.morphNormals!==Ue||Gt.morphColors!==un||Gt.toneMapping!==je||Gt.morphTargetsCount!==Ve||!!Gt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Gt.__version=at.version);let wn=Gt.currentProgram;be===!0&&(wn=Ya(at,Y,st),Z&&at.isNodeMaterial&&Z.onUpdateProgram(at,wn,Gt));let gi=!1,ki=!1,vi=!1;const ke=wn.getUniforms(),hn=Gt.uniforms;if(E.useProgram(wn.program)&&(gi=!0,ki=!0,vi=!0),at.id!==ft&&(ft=at.id,ki=!0),Gt.needsLights){const Ie=Us(U.state.lightProbeGridArray,st);Gt.lightProbeGrid!==Ie&&(Gt.lightProbeGrid=Ie,ki=!0)}if(gi||St!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ke.setValue(N,"projectionMatrix",R.projectionMatrix),ke.setValue(N,"viewMatrix",R.matrixWorldInverse);const ia=ke.map.cameraPosition;ia!==void 0&&ia.setValue(N,tn.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&ke.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ke.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),St!==R&&(St=R,ki=!0,vi=!0)}if(Gt.needsLights&&(Yn.state.directionalShadowMap.length>0&&ke.setValue(N,"directionalShadowMap",Yn.state.directionalShadowMap,lt),Yn.state.spotShadowMap.length>0&&ke.setValue(N,"spotShadowMap",Yn.state.spotShadowMap,lt),Yn.state.pointShadowMap.length>0&&ke.setValue(N,"pointShadowMap",Yn.state.pointShadowMap,lt)),st.isSkinnedMesh){ke.setOptional(N,st,"bindMatrix"),ke.setOptional(N,st,"bindMatrixInverse");const Ie=st.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ke.setValue(N,"boneTexture",Ie.boneTexture,lt))}st.isBatchedMesh&&(ke.setOptional(N,st,"batchingTexture"),ke.setValue(N,"batchingTexture",st._matricesTexture,lt),ke.setOptional(N,st,"batchingIdTexture"),ke.setValue(N,"batchingIdTexture",st._indirectTexture,lt),ke.setOptional(N,st,"batchingColorTexture"),st._colorsTexture!==null&&ke.setValue(N,"batchingColorTexture",st._colorsTexture,lt));const Wi=rt.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&q.update(st,rt,wn),(ki||Gt.receiveShadow!==st.receiveShadow)&&(Gt.receiveShadow=st.receiveShadow,ke.setValue(N,"receiveShadow",st.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&Y.environment!==null&&(hn.envMapIntensity.value=Y.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=KA()),ki){if(ke.setValue(N,"toneMappingExposure",W.toneMappingExposure),Gt.needsLights&&xn(hn,vi),Ot&&at.fog===!0&&zt.refreshFogUniforms(hn,Ot),zt.refreshMaterialUniforms(hn,at,yt,xt,U.state.transmissionRenderTarget[R.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ie=Gt.lightProbeGrid;hn.probesSH.value=Ie.texture,hn.probesMin.value.copy(Ie.boundingBox.min),hn.probesMax.value.copy(Ie.boundingBox.max),hn.probesResolution.value.copy(Ie.resolution)}Ou.upload(N,va(Gt),hn,lt)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Ou.upload(N,va(Gt),hn,lt),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ke.setValue(N,"center",st.center),ke.setValue(N,"modelViewMatrix",st.modelViewMatrix),ke.setValue(N,"normalMatrix",st.normalMatrix),ke.setValue(N,"modelMatrix",st.matrixWorld),at.uniformsGroups!==void 0){const Ie=at.uniformsGroups;for(let ia=0,Ka=Ie.length;ia<Ka;ia++){const Ns=Ie[ia];bt.update(Ns,wn),bt.bind(Ns,wn)}}return wn}function xn(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function kl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,Y,rt){const at=et.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),et.get(R.texture).__webglTexture=Y,et.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:rt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=et.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,rt=0){J=R,z=Y,H=rt;let at=null,st=!1,Ot=!1;if(R){const Pt=et.get(R);if(Pt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(N.FRAMEBUFFER,Pt.__webglFramebuffer),F.copy(R.viewport),K.copy(R.scissor),_t=R.scissorTest,E.viewport(F),E.scissor(K),E.setScissorTest(_t),ft=-1;return}else if(Pt.__webglFramebuffer===void 0)lt.setupRenderTarget(R);else if(Pt.__hasExternalTextures)lt.rebindTextures(R,et.get(R.texture).__webglTexture,et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ne=R.depthTexture;if(Pt.__boundDepthTexture!==ne){if(ne!==null&&et.has(ne)&&(R.width!==ne.image.width||R.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(R)}}const qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ot=!0);const Wt=et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?at=Wt[Y][rt]:at=Wt[Y],st=!0):R.samples>0&&lt.useMultisampledRTT(R)===!1?at=et.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?at=Wt[rt]:at=Wt,F.copy(R.viewport),K.copy(R.scissor),_t=R.scissorTest}else F.copy(Kt).multiplyScalar(yt).floor(),K.copy(Pe).multiplyScalar(yt).floor(),_t=le;if(rt!==0&&(at=ut),E.bindFramebuffer(N.FRAMEBUFFER,at)&&E.drawBuffers(R,at),E.viewport(F),E.scissor(K),E.setScissorTest(_t),st){const Pt=et.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,rt)}else if(Ot){const Pt=Y;for(let qt=0;qt<R.textures.length;qt++){const Wt=et.get(R.textures[qt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+qt,Wt.__webglTexture,rt,Pt)}}else if(R!==null&&rt!==0){const Pt=et.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pt.__webglTexture,rt)}ft=-1},this.readRenderTargetPixels=function(R,Y,rt,at,st,Ot,Vt,Pt=0){if(!(R&&R.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(qt=qt[Vt]),qt){E.bindFramebuffer(N.FRAMEBUFFER,qt);try{const Wt=R.textures[Pt],ne=Wt.format,me=Wt.type;if(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pt),!P.textureFormatReadable(ne)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(me)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-at&&rt>=0&&rt<=R.height-st&&N.readPixels(Y,rt,at,st,Dt.convert(ne),Dt.convert(me),Ot)}finally{const Wt=J!==null?et.get(J).__webglFramebuffer:null;E.bindFramebuffer(N.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,at,st,Ot,Vt,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Vt!==void 0&&(qt=qt[Vt]),qt)if(Y>=0&&Y<=R.width-at&&rt>=0&&rt<=R.height-st){E.bindFramebuffer(N.FRAMEBUFFER,qt);const Wt=R.textures[Pt],ne=Wt.format,me=Wt.type;if(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pt),!P.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.bufferData(N.PIXEL_PACK_BUFFER,Ot.byteLength,N.STREAM_READ),N.readPixels(Y,rt,at,st,Dt.convert(ne),Dt.convert(me),0);const Ue=J!==null?et.get(J).__webglFramebuffer:null;E.bindFramebuffer(N.FRAMEBUFFER,Ue);const un=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await WS(N,un,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ot),N.deleteBuffer($t),N.deleteSync(un),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const at=Math.pow(2,-rt),st=Math.floor(R.image.width*at),Ot=Math.floor(R.image.height*at),Vt=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;lt.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,rt,0,0,Vt,Pt,st,Ot),E.unbindTexture()},this.copyTextureToTexture=function(R,Y,rt=null,at=null,st=0,Ot=0){let Vt,Pt,qt,Wt,ne,me,$t,Ue,un;const je=R.isCompressedTexture?R.mipmaps[Ot]:R.image;if(rt!==null)Vt=rt.max.x-rt.min.x,Pt=rt.max.y-rt.min.y,qt=rt.isBox3?rt.max.z-rt.min.z:1,Wt=rt.min.x,ne=rt.min.y,me=rt.isBox3?rt.min.z:0;else{const hn=Math.pow(2,-st);Vt=Math.floor(je.width*hn),Pt=Math.floor(je.height*hn),R.isDataArrayTexture?qt=je.depth:R.isData3DTexture?qt=Math.floor(je.depth*hn):qt=1,Wt=0,ne=0,me=0}at!==null?($t=at.x,Ue=at.y,un=at.z):($t=0,Ue=0,un=0);const Ge=Dt.convert(Y.format),Ve=Dt.convert(Y.type);let Gt;Y.isData3DTexture?(lt.setTexture3D(Y,0),Gt=N.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(lt.setTexture2DArray(Y,0),Gt=N.TEXTURE_2D_ARRAY):(lt.setTexture2D(Y,0),Gt=N.TEXTURE_2D),E.activeTexture(N.TEXTURE0),E.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment);const Yn=E.getParameter(N.UNPACK_ROW_LENGTH),be=E.getParameter(N.UNPACK_IMAGE_HEIGHT),wn=E.getParameter(N.UNPACK_SKIP_PIXELS),gi=E.getParameter(N.UNPACK_SKIP_ROWS),ki=E.getParameter(N.UNPACK_SKIP_IMAGES);E.pixelStorei(N.UNPACK_ROW_LENGTH,je.width),E.pixelStorei(N.UNPACK_IMAGE_HEIGHT,je.height),E.pixelStorei(N.UNPACK_SKIP_PIXELS,Wt),E.pixelStorei(N.UNPACK_SKIP_ROWS,ne),E.pixelStorei(N.UNPACK_SKIP_IMAGES,me);const vi=R.isDataArrayTexture||R.isData3DTexture,ke=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const hn=et.get(R),Wi=et.get(Y),Ie=et.get(hn.__renderTarget),ia=et.get(Wi.__renderTarget);E.bindFramebuffer(N.READ_FRAMEBUFFER,Ie.__webglFramebuffer),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let Ka=0;Ka<qt;Ka++)vi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,et.get(R).__webglTexture,st,me+Ka),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,et.get(Y).__webglTexture,Ot,un+Ka)),N.blitFramebuffer(Wt,ne,Vt,Pt,$t,Ue,Vt,Pt,N.DEPTH_BUFFER_BIT,N.NEAREST);E.bindFramebuffer(N.READ_FRAMEBUFFER,null),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(st!==0||R.isRenderTargetTexture||et.has(R)){const hn=et.get(R),Wi=et.get(Y);E.bindFramebuffer(N.READ_FRAMEBUFFER,ht),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,j);for(let Ie=0;Ie<qt;Ie++)vi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,hn.__webglTexture,st,me+Ie):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,hn.__webglTexture,st),ke?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Wi.__webglTexture,Ot,un+Ie):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Wi.__webglTexture,Ot),st!==0?N.blitFramebuffer(Wt,ne,Vt,Pt,$t,Ue,Vt,Pt,N.COLOR_BUFFER_BIT,N.NEAREST):ke?N.copyTexSubImage3D(Gt,Ot,$t,Ue,un+Ie,Wt,ne,Vt,Pt):N.copyTexSubImage2D(Gt,Ot,$t,Ue,Wt,ne,Vt,Pt);E.bindFramebuffer(N.READ_FRAMEBUFFER,null),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ke?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Gt,Ot,$t,Ue,un,Vt,Pt,qt,Ge,Ve,je.data):Y.isCompressedArrayTexture?N.compressedTexSubImage3D(Gt,Ot,$t,Ue,un,Vt,Pt,qt,Ge,je.data):N.texSubImage3D(Gt,Ot,$t,Ue,un,Vt,Pt,qt,Ge,Ve,je):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ot,$t,Ue,Vt,Pt,Ge,Ve,je.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ot,$t,Ue,je.width,je.height,Ge,je.data):N.texSubImage2D(N.TEXTURE_2D,Ot,$t,Ue,Vt,Pt,Ge,Ve,je);E.pixelStorei(N.UNPACK_ROW_LENGTH,Yn),E.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be),E.pixelStorei(N.UNPACK_SKIP_PIXELS,wn),E.pixelStorei(N.UNPACK_SKIP_ROWS,gi),E.pixelStorei(N.UNPACK_SKIP_IMAGES,ki),Ot===0&&Y.generateMipmaps&&N.generateMipmap(Gt),E.unbindTexture()},this.initRenderTarget=function(R){et.get(R).__webglFramebuffer===void 0&&lt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?lt.setTextureCube(R,0):R.isData3DTexture?lt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?lt.setTexture2DArray(R,0):lt.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){z=0,H=0,J=null,E.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ce._getUnpackColorSpace()}}const M_={type:"change"},xp={type:"start"},Cx={type:"end"},Su=new fp,S_=new ua,QA=Math.cos(70*sx.DEG2RAD),Cn=new X,hi=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kd=1e-6;class $A extends tb{constructor(t,n=null){super(t,n),this.state=Ke.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Va.ROTATE,MIDDLE:Va.DOLLY,RIGHT:Va.PAN},this.touches={ONE:ro.ROTATE,TWO:ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new ga,this._lastTargetPosition=new X,this._quat=new ga().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new j1,this._sphericalDelta=new j1,this._scale=1,this._panOffset=new X,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new X,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tw.bind(this),this._onPointerDown=JA.bind(this),this._onPointerUp=ew.bind(this),this._onContextMenu=lw.bind(this),this._onMouseWheel=aw.bind(this),this._onKeyDown=sw.bind(this),this._onTouchStart=rw.bind(this),this._onTouchMove=ow.bind(this),this._onMouseDown=nw.bind(this),this._onMouseMove=iw.bind(this),this._interceptControlDown=cw.bind(this),this._interceptControlUp=uw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(M_),this.update(),this.state=Ke.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;Cn.copy(n).sub(this.target),Cn.applyQuaternion(this._quat),this._spherical.setFromVector3(Cn),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=hi:a>Math.PI&&(a-=hi),o<-Math.PI?o+=hi:o>Math.PI&&(o-=hi),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(Cn.setFromSpherical(this._spherical),Cn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=Cn.length();u=this._clampDistance(f*this._scale);const d=f-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),c=!!d}else if(this.object.isOrthographicCamera){const f=new X(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=d!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),u=Cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Su.origin.copy(this.object.position),Su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Su.direction))<QA?this.object.lookAt(this.target):(S_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Su.intersectPlane(S_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>kd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kd||this._lastTargetPosition.distanceToSquared(this.target)>kd?(this.dispatchEvent(M_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hi/60*this.autoRotateSpeed*t:hi/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Cn.setFromMatrixColumn(n,0),Cn.multiplyScalar(-t),this._panOffset.add(Cn)}_panUp(t,n){this.screenSpacePanning===!0?Cn.setFromMatrixColumn(n,1):(Cn.setFromMatrixColumn(n,0),Cn.crossVectors(this.object.up,Cn)),Cn.multiplyScalar(t),this._panOffset.add(Cn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Cn.copy(o).sub(this.target);let c=Cn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,f=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hi*this._rotateDelta.x/n.clientHeight),this._rotateUp(hi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hi*this._rotateDelta.x/n.clientHeight),this._rotateUp(hi*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,f=(t.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Bt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function JA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function tw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ew(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cx),this.state=Ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function nw(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Va.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ke.DOLLY;break;case Va.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ke.ROTATE}break;case Va.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(xp)}function iw(s){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function aw(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(s.preventDefault(),this.dispatchEvent(xp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Cx))}function sw(s){this.enabled!==!1&&this._handleKeyDown(s)}function rw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ke.TOUCH_ROTATE;break;case ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ke.TOUCH_DOLLY_PAN;break;case ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(xp)}function ow(s){switch(this._trackPointer(s),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ke.NONE}}function lw(s){this.enabled!==!1&&s.preventDefault()}function cw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class hw extends lx{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new xo;t.deleteAttribute("uv");const n=new F0({side:ni}),a=new F0,o=new F2(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const c=new Tn(t,n);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const u=new I0(t,a,6),f=new Fn;f.position.set(-10.906,2.009,1.846),f.rotation.set(0,-.195,0),f.scale.set(2.328,7.905,4.651),f.updateMatrix(),u.setMatrixAt(0,f.matrix),f.position.set(-5.607,-.754,-.758),f.rotation.set(0,.994,0),f.scale.set(1.97,1.534,3.955),f.updateMatrix(),u.setMatrixAt(1,f.matrix),f.position.set(6.167,.857,7.803),f.rotation.set(0,.561,0),f.scale.set(3.927,6.285,3.687),f.updateMatrix(),u.setMatrixAt(2,f.matrix),f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),f.updateMatrix(),u.setMatrixAt(3,f.matrix),f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),f.updateMatrix(),u.setMatrixAt(4,f.matrix),f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),f.updateMatrix(),u.setMatrixAt(5,f.matrix),this.add(u);const d=new Tn(t,io(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new Tn(t,io(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Tn(t,io(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new Tn(t,io(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const _=new Tn(t,io(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);const x=new Tn(t,io(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(const n of t)n.dispose()}}function io(s){return new P2({color:0,emissive:16777215,emissiveIntensity:s})}const Iu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class cr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fw=new Ku(-1,1,1,-1,0,1);class dw extends Vi{constructor(){super(),this.setAttribute("position",new qn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qn([0,2,0,0,2,0],2))}}const pw=new dw;class $u{constructor(t){this._mesh=new Tn(pw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Dx extends cr{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof In?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Fl.clone(t.uniforms),this.material=new In({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new $u(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class b_ extends cr{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(f),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class mw extends cr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class gw{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new Bt);this._width=a.width,this._height=a.height,n=new Xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dx(Iu),this.copyPass.material.blending=ea,this.timer=new G2}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const f=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),d.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}b_!==void 0&&(u instanceof b_?a=!0:u instanceof mw&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Bt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vw extends cr{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new se}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const _w={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class go extends cr{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new Bt(t.x,t.y):new Bt(256,256),this.clearColor=new se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Xn(c,u,{type:ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new Xn(c,u,{type:ii});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new Xn(c,u,{type:ii});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),c=Math.round(c/2),u=Math.round(u/2)}const f=_w;this.highPassUniforms=Fl.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new In({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const d=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Bt(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fl.clone(Iu.uniforms),this.blendMaterial=new In({uniforms:this.copyUniforms,vertexShader:Iu.vertexShader,fragmentShader:Iu.fragmentShader,premultipliedAlpha:!0,blending:Kd,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new se,this._oldClearAlpha=1,this._basic=new dp,this._fsQuad=new $u(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new Bt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[d].uniforms.direction.value=go.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[d]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=go.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[d]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let o=0;o<t;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new In({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Bt(.5,.5)},direction:{value:new Bt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}}go.BlurDirectionX=new Bt(1,0);go.BlurDirectionY=new Bt(0,1);const bu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class xw extends cr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Fl.clone(bu.uniforms),this.material=new mx({name:bu.name,uniforms:this.uniforms,vertexShader:bu.vertexShader,fragmentShader:bu.fragmentShader}),this._fsQuad=new $u(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ce.getTransfer(this._outputColorSpace)===Fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===j0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Q0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===J0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const wl={cols:33,rows:49,width:2.0015625000000004,height:3,camera:[.925,.654,5.166],target:[.525,-.046,-.034],data:new Float32Array([-.499,1.389,-.95,-.439,1.374,-.939,-.38,1.36,-.927,-.32,1.345,-.915,-.26,1.33,-.903,-.201,1.315,-.892,-.141,1.301,-.88,-.081,1.287,-.867,-.022,1.275,-.851,.037,1.264,-.834,.096,1.253,-.817,.156,1.242,-.801,.215,1.231,-.783,.274,1.221,-.765,.332,1.211,-.745,.391,1.202,-.726,.45,1.192,-.706,.508,1.183,-.686,.567,1.174,-.666,.625,1.165,-.646,.684,1.156,-.625,.742,1.147,-.604,.8,1.139,-.583,.858,1.13,-.56,.916,1.122,-.538,.973,1.115,-.514,1.03,1.107,-.49,1.087,1.1,-.465,1.143,1.093,-.438,1.199,1.087,-.41,1.253,1.081,-.38,1.307,1.075,-.348,1.36,1.069,-.315,-.518,1.336,-.922,-.458,1.322,-.91,-.398,1.308,-.898,-.339,1.294,-.885,-.279,1.279,-.873,-.219,1.265,-.861,-.16,1.251,-.847,-.1,1.239,-.831,-.041,1.229,-.814,.018,1.22,-.795,.077,1.21,-.777,.136,1.197,-.762,.195,1.183,-.748,.255,1.172,-.731,.314,1.161,-.713,.372,1.151,-.695,.431,1.141,-.676,.49,1.13,-.658,.549,1.121,-.639,.608,1.111,-.62,.666,1.101,-.6,.725,1.092,-.58,.783,1.083,-.56,.842,1.074,-.539,.9,1.065,-.518,.958,1.057,-.497,1.016,1.048,-.475,1.074,1.041,-.451,1.131,1.033,-.427,1.187,1.026,-.402,1.243,1.019,-.375,1.299,1.013,-.346,1.353,1.007,-.315,-.536,1.285,-.892,-.477,1.271,-.88,-.417,1.257,-.867,-.357,1.243,-.854,-.298,1.229,-.841,-.238,1.216,-.827,-.179,1.204,-.811,-.12,1.194,-.793,-.061,1.186,-.773,-.002,1.178,-.753,.057,1.167,-.736,.116,1.153,-.722,.176,1.138,-.709,.235,1.125,-.694,.294,1.113,-.679,.353,1.101,-.662,.413,1.09,-.644,.472,1.08,-.626,.53,1.069,-.608,.589,1.059,-.59,.648,1.049,-.572,.707,1.039,-.553,.766,1.029,-.534,.825,1.019,-.515,.883,1.01,-.495,.942,1,-.475,1,.991,-.454,1.058,.983,-.433,1.116,.974,-.411,1.174,.966,-.388,1.231,.959,-.364,1.288,.952,-.339,1.344,.945,-.311,-.555,1.234,-.861,-.495,1.22,-.848,-.436,1.207,-.834,-.376,1.194,-.82,-.317,1.181,-.806,-.257,1.169,-.79,-.198,1.16,-.771,-.14,1.152,-.751,-.081,1.146,-.73,-.022,1.136,-.712,.037,1.123,-.697,.097,1.108,-.683,.156,1.093,-.671,.215,1.079,-.657,.275,1.066,-.642,.334,1.054,-.625,.393,1.043,-.608,.452,1.032,-.591,.511,1.021,-.574,.57,1.01,-.556,.629,.999,-.539,.688,.988,-.521,.747,.978,-.503,.806,.967,-.485,.865,.957,-.467,.924,.947,-.448,.983,.937,-.429,1.041,.927,-.41,1.1,.918,-.39,1.158,.909,-.369,1.217,.9,-.348,1.274,.892,-.326,1.332,.885,-.302,-.574,1.184,-.828,-.514,1.171,-.814,-.455,1.159,-.799,-.395,1.146,-.784,-.336,1.134,-.768,-.277,1.125,-.75,-.218,1.118,-.729,-.16,1.113,-.707,-.101,1.104,-.688,-.042,1.092,-.672,.018,1.077,-.658,.077,1.062,-.646,.136,1.048,-.632,.196,1.035,-.617,.255,1.023,-.601,.314,1.011,-.585,.373,.999,-.568,.432,.987,-.552,.492,.976,-.535,.551,.964,-.518,.61,.953,-.502,.669,.941,-.485,.728,.93,-.468,.787,.919,-.451,.846,.908,-.433,.905,.897,-.416,.964,.886,-.398,1.023,.875,-.38,1.082,.865,-.362,1.141,.855,-.344,1.2,.845,-.324,1.258,.835,-.305,1.317,.826,-.284,-.593,1.136,-.793,-.533,1.124,-.778,-.474,1.112,-.762,-.414,1.1,-.746,-.355,1.091,-.728,-.297,1.084,-.707,-.239,1.08,-.684,-.18,1.072,-.664,-.121,1.06,-.648,-.061,1.046,-.634,-.002,1.031,-.621,.057,1.018,-.606,.117,1.006,-.591,.176,.994,-.574,.235,.986,-.555,.294,.973,-.539,.353,.959,-.524,.412,.947,-.509,.471,.934,-.493,.531,.922,-.477,.59,.91,-.461,.649,.898,-.444,.708,.886,-.428,.767,.874,-.412,.827,.862,-.395,.886,.85,-.379,.945,.839,-.362,1.004,.827,-.345,1.063,.816,-.328,1.122,.805,-.311,1.181,.794,-.294,1.24,.783,-.276,1.299,.772,-.258,-.612,1.089,-.757,-.552,1.078,-.74,-.493,1.067,-.724,-.434,1.056,-.706,-.375,1.049,-.686,-.317,1.045,-.662,-.259,1.04,-.641,-.2,1.029,-.624,-.14,1.014,-.61,-.081,1.001,-.596,-.022,.988,-.58,.038,.977,-.564,.097,.966,-.547,.156,.956,-.529,.215,.95,-.508,.274,.939,-.491,.333,.924,-.477,.392,.909,-.463,.451,.896,-.448,.511,.883,-.432,.57,.87,-.417,.629,.858,-.401,.688,.845,-.385,.747,.832,-.369,.807,.82,-.353,.866,.808,-.337,.925,.796,-.321,.984,.784,-.305,1.043,.772,-.289,1.102,.76,-.272,1.162,.748,-.256,1.221,.736,-.24,1.28,.724,-.223,-.631,1.043,-.718,-.572,1.033,-.701,-.513,1.023,-.684,-.454,1.014,-.665,-.395,1.008,-.643,-.338,1.005,-.619,-.279,.997,-.599,-.219,.984,-.585,-.16,.971,-.57,-.101,.959,-.554,-.042,.948,-.537,.018,.937,-.52,.077,.927,-.502,.136,.918,-.483,.195,.912,-.463,.254,.903,-.444,.313,.89,-.429,.372,.875,-.415,.431,.86,-.401,.49,.847,-.386,.55,.833,-.37,.609,.82,-.355,.668,.807,-.339,.727,.795,-.324,.786,.782,-.308,.846,.77,-.292,.905,.757,-.276,.964,.745,-.26,1.023,.733,-.244,1.082,.72,-.228,1.141,.708,-.212,1.201,.696,-.196,1.26,.683,-.18,-.65,.999,-.679,-.591,.99,-.66,-.532,.98,-.642,-.473,.972,-.623,-.415,.966,-.601,-.357,.963,-.577,-.298,.956,-.557,-.239,.943,-.542,-.18,.931,-.526,-.121,.921,-.508,-.062,.911,-.491,-.002,.9,-.474,.057,.889,-.457,.116,.88,-.438,.175,.873,-.418,.234,.866,-.398,.293,.855,-.381,.352,.841,-.366,.411,.826,-.353,.47,.811,-.338,.529,.798,-.323,.589,.785,-.307,.648,.773,-.291,.707,.761,-.275,.766,.748,-.259,.825,.736,-.243,.885,.724,-.227,.944,.712,-.211,1.003,.699,-.195,1.062,.687,-.179,1.121,.675,-.163,1.181,.663,-.147,1.24,.651,-.131,-.67,.957,-.637,-.611,.948,-.618,-.552,.939,-.599,-.493,.93,-.581,-.434,.923,-.56,-.376,.919,-.537,-.318,.914,-.515,-.259,.906,-.496,-.2,.896,-.478,-.141,.886,-.46,-.082,.877,-.442,-.023,.867,-.425,.037,.853,-.409,.096,.842,-.392,.155,.834,-.373,.214,.828,-.353,.273,.819,-.334,.332,.807,-.318,.391,.791,-.304,.45,.777,-.29,.509,.764,-.274,.569,.753,-.258,.628,.741,-.241,.687,.73,-.225,.746,.718,-.209,.805,.706,-.192,.865,.695,-.176,.924,.683,-.159,.983,.671,-.143,1.042,.659,-.127,1.101,.648,-.11,1.161,.636,-.094,1.22,.625,-.078,-.69,.917,-.593,-.631,.908,-.574,-.572,.899,-.556,-.513,.89,-.537,-.454,.881,-.518,-.395,.874,-.498,-.337,.868,-.477,-.278,.863,-.454,-.22,.855,-.435,-.161,.847,-.416,-.102,.838,-.397,-.043,.83,-.378,.016,.82,-.36,.076,.807,-.345,.135,.796,-.328,.194,.789,-.308,.253,.782,-.288,.312,.772,-.27,.371,.757,-.256,.43,.744,-.241,.489,.733,-.224,.549,.723,-.206,.608,.712,-.19,.667,.701,-.173,.726,.69,-.156,.785,.679,-.139,.845,.668,-.123,.904,.657,-.106,.963,.646,-.089,1.022,.635,-.073,1.082,.624,-.056,1.141,.612,-.04,1.2,.601,-.023,-.71,.88,-.548,-.651,.871,-.529,-.592,.862,-.51,-.533,.853,-.491,-.474,.843,-.473,-.415,.834,-.454,-.356,.826,-.435,-.298,.818,-.415,-.239,.811,-.395,-.18,.803,-.375,-.121,.796,-.355,-.062,.789,-.335,-.004,.784,-.314,.055,.773,-.297,.115,.761,-.28,.174,.752,-.262,.233,.744,-.242,.292,.736,-.223,.351,.724,-.207,.41,.713,-.19,.469,.702,-.174,.529,.691,-.157,.588,.68,-.14,.647,.669,-.123,.706,.659,-.106,.765,.648,-.089,.825,.637,-.073,.884,.625,-.056,.943,.614,-.039,1.002,.603,-.023,1.062,.592,-.006,1.121,.581,.01,1.18,.569,.027,-.731,.845,-.5,-.672,.836,-.481,-.613,.827,-.462,-.554,.818,-.444,-.495,.809,-.425,-.436,.799,-.406,-.377,.79,-.388,-.318,.781,-.369,-.259,.773,-.349,-.2,.766,-.329,-.141,.759,-.309,-.082,.752,-.289,-.024,.746,-.268,.035,.737,-.25,.094,.726,-.232,.153,.717,-.214,.212,.708,-.196,.272,.698,-.178,.331,.687,-.161,.39,.676,-.144,.449,.665,-.127,.509,.654,-.11,.568,.643,-.094,.627,.632,-.077,.686,.621,-.06,.746,.609,-.044,.805,.598,-.028,.864,.587,-.011,.923,.575,.005,.983,.563,.021,1.042,.552,.038,1.101,.54,.054,1.16,.528,.07,-.751,.812,-.451,-.692,.803,-.432,-.633,.795,-.413,-.574,.787,-.394,-.515,.778,-.375,-.456,.769,-.356,-.397,.76,-.337,-.339,.751,-.318,-.28,.742,-.299,-.221,.734,-.28,-.162,.726,-.26,-.103,.717,-.241,-.044,.708,-.222,.015,.698,-.205,.074,.688,-.187,.133,.678,-.17,.193,.667,-.152,.252,.656,-.135,.311,.645,-.118,.37,.634,-.102,.43,.623,-.085,.489,.611,-.069,.548,.6,-.053,.607,.588,-.037,.667,.576,-.021,.726,.564,-.005,.785,.552,.011,.845,.54,.026,.904,.528,.042,.963,.516,.057,1.023,.504,.073,1.082,.491,.088,1.141,.479,.104,-.772,.781,-.401,-.713,.772,-.382,-.654,.763,-.363,-.595,.754,-.345,-.536,.744,-.326,-.477,.735,-.308,-.418,.725,-.289,-.359,.716,-.271,-.3,.706,-.252,-.241,.697,-.234,-.182,.687,-.216,-.123,.676,-.198,-.064,.666,-.181,-.004,.655,-.164,.055,.644,-.147,.114,.633,-.13,.173,.622,-.114,.233,.61,-.098,.292,.598,-.082,.351,.587,-.066,.411,.575,-.051,.47,.562,-.035,.529,.55,-.02,.589,.538,-.005,.648,.525,.01,.708,.513,.025,.767,.5,.04,.827,.487,.055,.886,.475,.069,.945,.462,.084,1.005,.449,.098,1.064,.436,.112,1.124,.423,.127,-.792,.745,-.354,-.733,.735,-.336,-.674,.725,-.318,-.615,.715,-.3,-.556,.705,-.282,-.497,.694,-.264,-.438,.684,-.246,-.379,.674,-.229,-.32,.663,-.212,-.261,.652,-.195,-.201,.641,-.178,-.142,.63,-.161,-.083,.618,-.145,-.023,.606,-.129,.036,.595,-.114,.095,.583,-.098,.155,.57,-.083,.214,.558,-.068,.274,.546,-.053,.333,.533,-.039,.393,.521,-.024,.452,.508,-.01,.512,.495,.004,.572,.482,.018,.631,.469,.031,.691,.456,.045,.75,.443,.059,.81,.43,.072,.87,.417,.085,.929,.403,.099,.989,.39,.112,1.049,.377,.125,1.108,.364,.138,-.812,.703,-.312,-.753,.692,-.295,-.694,.681,-.278,-.635,.67,-.261,-.575,.659,-.244,-.516,.647,-.228,-.457,.636,-.211,-.398,.625,-.195,-.338,.613,-.179,-.279,.601,-.163,-.22,.589,-.148,-.16,.577,-.133,-.101,.565,-.118,-.041,.552,-.103,.019,.54,-.089,.078,.527,-.075,.138,.514,-.061,.197,.501,-.048,.257,.488,-.035,.317,.475,-.022,.377,.462,-.009,.436,.449,.004,.496,.436,.017,.556,.422,.029,.616,.409,.041,.676,.396,.054,.735,.382,.066,.795,.369,.078,.855,.356,.09,.915,.342,.102,.975,.329,.114,1.035,.316,.125,1.095,.303,.137,-.831,.654,-.278,-.772,.642,-.262,-.712,.63,-.246,-.653,.618,-.23,-.594,.606,-.215,-.534,.594,-.2,-.475,.582,-.185,-.415,.57,-.17,-.356,.558,-.155,-.296,.545,-.141,-.236,.532,-.127,-.177,.52,-.114,-.117,.507,-.101,-.057,.494,-.088,.003,.481,-.075,.063,.468,-.063,.123,.454,-.051,.182,.441,-.039,.242,.428,-.028,.302,.415,-.016,.362,.401,-.005,.422,.388,.006,.482,.375,.018,.542,.361,.029,.603,.348,.04,.663,.335,.051,.723,.321,.062,.783,.308,.073,.843,.295,.083,.903,.282,.094,.963,.268,.104,1.024,.255,.114,1.084,.242,.124,-.848,.599,-.253,-.789,.587,-.239,-.729,.574,-.224,-.67,.562,-.21,-.61,.549,-.196,-.55,.536,-.182,-.491,.524,-.169,-.431,.511,-.155,-.371,.498,-.143,-.311,.485,-.13,-.251,.472,-.118,-.191,.459,-.106,-.131,.446,-.095,-.071,.433,-.084,-.011,.42,-.073,.049,.406,-.063,.109,.393,-.053,.17,.38,-.042,.23,.367,-.032,.29,.354,-.022,.35,.34,-.012,.411,.327,-.003,.471,.314,.007,.531,.301,.017,.592,.288,.027,.652,.275,.037,.712,.261,.047,.773,.248,.056,.833,.236,.066,.894,.223,.075,.954,.21,.084,1.015,.197,.092,1.075,.185,.101,-.864,.54,-.239,-.804,.527,-.226,-.745,.514,-.213,-.685,.502,-.2,-.625,.489,-.188,-.565,.476,-.176,-.505,.463,-.164,-.445,.45,-.153,-.384,.437,-.142,-.324,.424,-.131,-.264,.411,-.121,-.204,.398,-.112,-.143,.385,-.102,-.083,.372,-.093,-.022,.359,-.084,.038,.346,-.075,.099,.333,-.066,.159,.32,-.057,.22,.307,-.049,.28,.294,-.04,.341,.281,-.031,.401,.268,-.022,.462,.255,-.013,.522,.243,-.004,.583,.23,.005,.643,.217,.013,.704,.205,.022,.765,.192,.03,.825,.18,.038,.886,.168,.046,.947,.156,.053,1.008,.144,.06,1.069,.132,.067,-.878,.479,-.236,-.818,.466,-.224,-.758,.453,-.213,-.698,.44,-.202,-.637,.428,-.191,-.577,.415,-.181,-.517,.402,-.171,-.456,.389,-.162,-.395,.376,-.154,-.335,.364,-.145,-.274,.351,-.137,-.213,.339,-.13,-.153,.326,-.122,-.092,.314,-.114,-.031,.301,-.107,.029,.289,-.099,.09,.276,-.091,.151,.264,-.083,.212,.251,-.075,.272,.238,-.067,.333,.226,-.058,.393,.213,-.05,.454,.2,-.041,.515,.188,-.033,.576,.176,-.026,.637,.164,-.018,.698,.152,-.011,.759,.14,-.004,.82,.129,.002,.881,.118,.009,.942,.107,.015,1.003,.095,.021,1.065,.084,.027,-.89,.418,-.243,-.829,.405,-.232,-.769,.392,-.222,-.708,.38,-.213,-.648,.367,-.205,-.587,.355,-.197,-.526,.343,-.19,-.465,.331,-.183,-.404,.319,-.176,-.343,.307,-.171,-.282,.296,-.165,-.221,.284,-.159,-.16,.272,-.152,-.099,.26,-.146,-.038,.248,-.139,.023,.236,-.132,.084,.224,-.124,.145,.211,-.117,.205,.199,-.109,.266,.186,-.1,.327,.173,-.092,.387,.161,-.084,.448,.149,-.076,.509,.137,-.069,.57,.126,-.063,.631,.114,-.056,.693,.103,-.05,.754,.093,-.044,.816,.083,-.04,.877,.073,-.034,.939,.062,-.029,1,.051,-.023,1.061,.04,-.017,-.9,.358,-.257,-.839,.346,-.248,-.779,.333,-.24,-.718,.322,-.234,-.656,.31,-.228,-.595,.298,-.222,-.534,.287,-.217,-.473,.276,-.211,-.411,.265,-.207,-.35,.255,-.205,-.288,.245,-.2,-.227,.233,-.195,-.166,.222,-.19,-.104,.211,-.184,-.043,.199,-.177,.018,.187,-.171,.079,.175,-.164,.14,.163,-.156,.2,.15,-.147,.261,.137,-.139,.321,.124,-.13,.382,.111,-.122,.443,.101,-.116,.505,.09,-.11,.566,.079,-.104,.627,.068,-.098,.689,.057,-.092,.75,.046,-.086,.811,.035,-.08,.872,.024,-.074,.934,.013,-.067,.995,.002,-.061,1.056,-.01,-.054,-.91,.299,-.274,-.848,.288,-.27,-.787,.277,-.266,-.725,.266,-.261,-.664,.255,-.257,-.603,.244,-.252,-.541,.233,-.248,-.48,.223,-.244,-.418,.212,-.24,-.357,.201,-.235,-.295,.191,-.231,-.234,.18,-.227,-.172,.169,-.222,-.111,.158,-.217,-.05,.147,-.211,.012,.136,-.205,.073,.124,-.199,.134,.112,-.192,.195,.1,-.185,.256,.088,-.177,.316,.075,-.168,.377,.062,-.16,.438,.051,-.153,.499,.04,-.147,.561,.029,-.141,.622,.018,-.135,.683,.006,-.128,.744,-.005,-.121,.805,-.017,-.114,.866,-.029,-.106,.927,-.041,-.098,.988,-.053,-.09,1.049,-.065,-.082,-.919,.239,-.289,-.857,.228,-.287,-.796,.218,-.284,-.734,.207,-.281,-.673,.196,-.277,-.611,.186,-.273,-.55,.175,-.27,-.488,.165,-.266,-.427,.154,-.262,-.365,.143,-.258,-.304,.133,-.254,-.242,.122,-.249,-.181,.112,-.245,-.119,.101,-.241,-.058,.09,-.236,.004,.079,-.231,.065,.068,-.226,.126,.057,-.221,.188,.046,-.215,.249,.034,-.209,.31,.022,-.202,.371,.01,-.194,.432,-.003,-.185,.493,-.014,-.178,.554,-.026,-.171,.615,-.038,-.163,.676,-.05,-.155,.736,-.062,-.146,.797,-.074,-.137,.858,-.087,-.128,.918,-.099,-.119,.979,-.112,-.11,1.039,-.124,-.101,-.929,.178,-.299,-.867,.167,-.296,-.806,.157,-.293,-.744,.146,-.29,-.683,.135,-.287,-.621,.125,-.284,-.56,.114,-.28,-.498,.104,-.277,-.437,.093,-.273,-.375,.083,-.269,-.314,.072,-.265,-.252,.062,-.262,-.191,.051,-.258,-.129,.04,-.254,-.067,.03,-.25,-.006,.019,-.246,.056,.009,-.242,.117,-.002,-.238,.179,-.013,-.235,.24,-.024,-.23,.302,-.035,-.225,.363,-.047,-.22,.424,-.059,-.211,.484,-.072,-.2,.545,-.084,-.191,.606,-.097,-.182,.666,-.109,-.172,.726,-.122,-.161,.787,-.135,-.151,.847,-.147,-.141,.907,-.16,-.131,.968,-.173,-.12,1.028,-.185,-.11,-.94,.116,-.3,-.878,.106,-.297,-.816,.095,-.293,-.755,.084,-.29,-.693,.074,-.287,-.632,.063,-.284,-.57,.053,-.28,-.509,.042,-.277,-.447,.032,-.273,-.386,.021,-.27,-.324,.01,-.266,-.263,0,-.262,-.201,-.011,-.259,-.14,-.021,-.255,-.078,-.032,-.252,-.017,-.042,-.248,.045,-.053,-.245,.106,-.064,-.242,.168,-.075,-.239,.229,-.085,-.237,.291,-.096,-.234,.352,-.107,-.232,.414,-.119,-.227,.475,-.132,-.216,.534,-.145,-.201,.594,-.158,-.189,.654,-.17,-.178,.715,-.183,-.167,.775,-.196,-.156,.835,-.209,-.145,.895,-.221,-.133,.955,-.234,-.122,1.015,-.246,-.11,-.95,.055,-.292,-.889,.045,-.288,-.827,.034,-.284,-.766,.024,-.281,-.704,.013,-.277,-.643,.003,-.274,-.581,-.008,-.27,-.52,-.019,-.266,-.458,-.029,-.263,-.397,-.04,-.259,-.335,-.05,-.256,-.274,-.061,-.252,-.212,-.071,-.249,-.151,-.082,-.245,-.089,-.093,-.242,-.028,-.103,-.238,.034,-.114,-.235,.095,-.125,-.232,.156,-.135,-.229,.218,-.146,-.226,.279,-.157,-.224,.34,-.168,-.221,.401,-.181,-.221,.463,-.194,-.219,.523,-.207,-.207,.581,-.219,-.188,.641,-.231,-.173,.701,-.244,-.165,.761,-.257,-.153,.822,-.27,-.141,.882,-.282,-.129,.941,-.294,-.116,1.001,-.306,-.1,-.962,-.004,-.274,-.9,-.014,-.27,-.838,-.025,-.266,-.777,-.035,-.262,-.715,-.046,-.258,-.654,-.056,-.255,-.592,-.067,-.251,-.531,-.077,-.247,-.469,-.087,-.243,-.408,-.098,-.239,-.346,-.108,-.236,-.285,-.119,-.232,-.223,-.129,-.228,-.162,-.14,-.224,-.1,-.15,-.221,-.039,-.161,-.217,.023,-.171,-.213,.084,-.182,-.209,.145,-.192,-.205,.207,-.202,-.201,.268,-.212,-.196,.329,-.22,-.189,.391,-.233,-.189,.448,-.253,-.205,.509,-.268,-.204,.569,-.28,-.189,.627,-.292,-.17,.687,-.305,-.158,.748,-.318,-.147,.807,-.33,-.133,.867,-.342,-.118,.926,-.353,-.1,.983,-.363,-.078,-.973,-.06,-.249,-.911,-.07,-.245,-.85,-.081,-.241,-.788,-.091,-.236,-.727,-.101,-.232,-.665,-.112,-.228,-.603,-.122,-.224,-.542,-.132,-.22,-.48,-.142,-.216,-.419,-.153,-.211,-.357,-.163,-.207,-.296,-.173,-.203,-.234,-.184,-.199,-.173,-.194,-.195,-.111,-.204,-.19,-.05,-.214,-.186,.012,-.224,-.181,.073,-.234,-.177,.135,-.244,-.171,.196,-.253,-.166,.258,-.259,-.156,.319,-.271,-.153,.379,-.288,-.161,.435,-.309,-.181,.494,-.327,-.191,.555,-.341,-.183,.614,-.353,-.166,.673,-.365,-.152,.733,-.377,-.137,.792,-.389,-.119,.85,-.399,-.1,.908,-.408,-.076,.963,-.413,-.048,-.984,-.113,-.217,-.922,-.123,-.213,-.861,-.133,-.208,-.799,-.143,-.204,-.737,-.153,-.199,-.676,-.164,-.195,-.614,-.174,-.19,-.553,-.184,-.186,-.491,-.194,-.181,-.43,-.204,-.177,-.368,-.213,-.172,-.307,-.223,-.167,-.245,-.233,-.162,-.184,-.243,-.157,-.122,-.253,-.152,-.061,-.262,-.147,.001,-.271,-.141,.063,-.281,-.137,.124,-.291,-.132,.186,-.297,-.123,.247,-.309,-.12,.308,-.326,-.125,.366,-.344,-.137,.424,-.363,-.152,.479,-.384,-.172,.54,-.401,-.172,.599,-.413,-.156,.658,-.424,-.138,.716,-.435,-.119,.775,-.445,-.098,.832,-.453,-.073,.887,-.457,-.044,.939,-.457,-.01,-.994,-.162,-.181,-.933,-.172,-.176,-.871,-.182,-.171,-.81,-.192,-.166,-.748,-.202,-.162,-.687,-.212,-.157,-.625,-.222,-.152,-.563,-.231,-.147,-.502,-.241,-.141,-.44,-.25,-.136,-.379,-.259,-.131,-.317,-.269,-.125,-.256,-.278,-.12,-.194,-.287,-.114,-.132,-.296,-.109,-.071,-.306,-.104,-.009,-.313,-.096,.052,-.323,-.091,.114,-.334,-.087,.175,-.347,-.086,.235,-.364,-.092,.294,-.383,-.103,.351,-.402,-.119,.408,-.422,-.136,.463,-.442,-.157,.524,-.46,-.156,.583,-.471,-.138,.641,-.481,-.117,.698,-.49,-.095,.755,-.497,-.07,.81,-.501,-.04,.863,-.501,-.006,.912,-.494,.032,-1.005,-.209,-.14,-.944,-.219,-.135,-.882,-.228,-.13,-.82,-.238,-.125,-.759,-.247,-.12,-.697,-.257,-.114,-.636,-.266,-.109,-.574,-.275,-.103,-.512,-.284,-.098,-.451,-.293,-.092,-.389,-.301,-.086,-.327,-.31,-.08,-.266,-.319,-.074,-.204,-.326,-.067,-.142,-.336,-.061,-.081,-.346,-.057,-.02,-.357,-.053,.042,-.37,-.052,.102,-.386,-.054,.162,-.403,-.061,.22,-.422,-.073,.277,-.441,-.09,.333,-.461,-.11,.388,-.481,-.135,.446,-.501,-.144,.507,-.517,-.136,.565,-.526,-.115,.622,-.535,-.092,.679,-.542,-.066,.734,-.546,-.036,.786,-.545,-.002,.835,-.538,.036,.882,-.526,.077,-1.016,-.253,-.097,-.954,-.263,-.092,-.892,-.272,-.087,-.831,-.281,-.081,-.769,-.29,-.075,-.707,-.299,-.069,-.646,-.307,-.063,-.584,-.316,-.057,-.522,-.324,-.051,-.461,-.333,-.045,-.399,-.34,-.038,-.337,-.349,-.032,-.276,-.358,-.026,-.214,-.368,-.022,-.153,-.38,-.018,-.092,-.393,-.017,-.031,-.408,-.018,.029,-.424,-.022,.089,-.442,-.031,.146,-.462,-.045,.203,-.481,-.064,.258,-.501,-.086,.311,-.52,-.113,.369,-.54,-.128,.429,-.559,-.127,.489,-.572,-.112,.546,-.58,-.088,.602,-.586,-.062,.657,-.59,-.032,.71,-.589,.002,.759,-.583,.04,.805,-.571,.08,.849,-.555,.122,-1.026,-.296,-.053,-.964,-.305,-.047,-.903,-.314,-.041,-.841,-.322,-.035,-.779,-.331,-.029,-.718,-.339,-.022,-.656,-.347,-.016,-.594,-.355,-.009,-.533,-.363,-.003,-.471,-.372,.003,-.409,-.381,.009,-.348,-.391,.013,-.286,-.403,.017,-.225,-.416,.018,-.164,-.43,.018,-.104,-.446,.014,-.044,-.463,.008,.015,-.482,-.003,.072,-.501,-.019,.128,-.521,-.039,.182,-.54,-.063,.235,-.559,-.092,.292,-.579,-.11,.351,-.599,-.114,.411,-.614,-.105,.47,-.625,-.085,.526,-.631,-.058,.581,-.634,-.028,.633,-.634,.006,.683,-.627,.044,.729,-.615,.084,.773,-.599,.126,.816,-.582,.167,-1.036,-.337,-.007,-.975,-.346,-.001,-.913,-.354,.005,-.851,-.362,.012,-.789,-.37,.019,-.728,-.378,.025,-.666,-.386,.032,-.604,-.394,.038,-.543,-.404,.043,-.481,-.414,.048,-.42,-.425,.051,-.359,-.438,.053,-.298,-.452,.053,-.237,-.468,.051,-.177,-.484,.045,-.118,-.503,.037,-.06,-.522,.024,-.003,-.541,.006,.053,-.561,-.016,.107,-.58,-.041,.159,-.598,-.071,.215,-.618,-.091,.273,-.638,-.1,.333,-.656,-.095,.393,-.668,-.079,.45,-.676,-.054,.504,-.679,-.024,.557,-.678,.009,.607,-.672,.047,.653,-.66,.088,.696,-.643,.13,.738,-.623,.172,.783,-.61,.213,-1.046,-.378,.039,-.985,-.386,.046,-.923,-.393,.053,-.861,-.401,.06,-.8,-.409,.066,-.738,-.418,.072,-.676,-.427,.078,-.615,-.437,.082,-.553,-.448,.086,-.492,-.461,.088,-.431,-.474,.089,-.37,-.489,.087,-.31,-.506,.083,-.251,-.524,.075,-.192,-.542,.064,-.134,-.562,.049,-.078,-.581,.03,-.023,-.601,.007,.03,-.619,-.02,.082,-.637,-.05,.137,-.656,-.073,.196,-.677,-.084,.255,-.696,-.084,.315,-.71,-.072,.373,-.72,-.049,.428,-.724,-.021,.481,-.723,.013,.531,-.717,.051,.577,-.705,.091,.62,-.687,.133,.66,-.665,.176,.704,-.649,.217,.751,-.639,.258,-1.057,-.417,.087,-.995,-.425,.093,-.933,-.433,.1,-.872,-.441,.107,-.81,-.45,.112,-.748,-.46,.117,-.687,-.471,.121,-.626,-.483,.123,-.564,-.497,.124,-.504,-.511,.123,-.443,-.527,.12,-.383,-.545,.113,-.324,-.563,.104,-.266,-.582,.091,-.209,-.602,.074,-.153,-.621,.053,-.099,-.64,.029,-.046,-.659,.001,.006,-.676,-.03,.06,-.695,-.054,.118,-.716,-.068,.177,-.735,-.071,.237,-.752,-.063,.296,-.763,-.043,.352,-.768,-.016,.405,-.768,.017,.455,-.762,.054,.501,-.75,.095,.543,-.731,.137,.583,-.708,.18,.626,-.69,.222,.672,-.678,.262,.721,-.672,.301,-1.067,-.457,.134,-1.005,-.465,.141,-.943,-.474,.146,-.882,-.483,.151,-.82,-.494,.155,-.759,-.506,.158,-.698,-.519,.159,-.637,-.533,.159,-.576,-.549,.156,-.516,-.566,.151,-.457,-.584,.143,-.398,-.603,.132,-.341,-.622,.117,-.284,-.642,.098,-.229,-.661,.076,-.175,-.68,.05,-.122,-.698,.022,-.071,-.715,-.01,-.017,-.734,-.035,.04,-.754,-.051,.099,-.774,-.058,.159,-.792,-.052,.218,-.805,-.036,.275,-.812,-.011,.329,-.813,.021,.379,-.808,.058,.426,-.795,.099,.468,-.776,.141,.507,-.752,.183,.548,-.732,.226,.593,-.718,.267,.641,-.71,.306,.692,-.709,.343,-1.077,-.497,.18,-1.015,-.507,.186,-.954,-.517,.19,-.892,-.529,.193,-.831,-.542,.195,-.77,-.556,.195,-.71,-.571,.193,-.649,-.587,.188,-.59,-.605,.181,-.531,-.623,.171,-.473,-.642,.158,-.416,-.662,.142,-.36,-.681,.121,-.305,-.701,.098,-.252,-.719,.071,-.199,-.737,.042,-.148,-.754,.01,-.094,-.773,-.016,-.038,-.793,-.034,.021,-.813,-.043,.081,-.832,-.041,.14,-.847,-.028,.198,-.856,-.005,.253,-.858,.026,.304,-.853,.062,.35,-.842,.102,.393,-.823,.144,.431,-.798,.187,.471,-.775,.229,.515,-.759,.271,.562,-.749,.311,.612,-.746,.349,.665,-.749,.382,-1.087,-.54,.224,-1.026,-.552,.228,-.965,-.564,.23,-.904,-.578,.23,-.843,-.593,.229,-.782,-.609,.225,-.723,-.626,.219,-.663,-.644,.211,-.605,-.663,.199,-.547,-.682,.184,-.491,-.702,.166,-.435,-.721,.144,-.381,-.74,.119,-.328,-.758,.092,-.276,-.776,.062,-.225,-.793,.03,-.171,-.811,.003,-.115,-.831,-.017,-.057,-.852,-.028,.003,-.871,-.029,.062,-.887,-.019,.121,-.898,.002,.176,-.902,.03,.228,-.899,.066,.275,-.888,.106,.318,-.87,.148,.357,-.846,.19,.395,-.82,.233,.437,-.801,.275,.483,-.788,.316,.532,-.783,.354,.584,-.785,.389,.639,-.793,.419,-1.098,-.587,.265,-1.037,-.6,.266,-.976,-.615,.265,-.916,-.63,.262,-.856,-.647,.257,-.796,-.665,.25,-.737,-.683,.239,-.679,-.703,.226,-.622,-.722,.209,-.566,-.742,.189,-.511,-.761,.166,-.457,-.78,.14,-.405,-.798,.112,-.353,-.815,.082,-.301,-.832,.05,-.248,-.85,.022,-.193,-.87,.001,-.135,-.891,-.012,-.076,-.91,-.016,-.016,-.928,-.008,.043,-.94,.009,.1,-.946,.036,.152,-.944,.07,.2,-.935,.109,.244,-.917,.151,.283,-.893,.193,.319,-.866,.236,.36,-.844,.278,.404,-.829,.32,.452,-.821,.359,.504,-.821,.395,.558,-.827,.427,.613,-.839,.452,-1.109,-.637,.301,-1.049,-.652,.299,-.989,-.668,.295,-.929,-.686,.288,-.87,-.704,.279,-.811,-.723,.267,-.754,-.742,.252,-.697,-.762,.233,-.642,-.781,.212,-.587,-.8,.188,-.534,-.819,.161,-.482,-.837,.131,-.43,-.854,.101,-.378,-.871,.069,-.325,-.889,.042,-.27,-.909,.019,-.213,-.929,.004,-.154,-.949,-.002,-.094,-.967,.003,-.035,-.981,.017,.022,-.989,.042,.076,-.989,.075,.125,-.981,.113,.169,-.965,.154,.209,-.941,.197,.245,-.913,.239,.283,-.888,.282,.326,-.87,.324,.373,-.86,.364,.423,-.857,.402,.477,-.862,.434,.532,-.872,.461,.589,-.888,.482,-1.122,-.69,.332,-1.062,-.707,.326,-1.002,-.725,.318,-.944,-.743,.307,-.886,-.763,.293,-.829,-.782,.277,-.772,-.802,.257,-.717,-.821,.234,-.664,-.84,.209,-.611,-.858,.181,-.559,-.875,.151,-.507,-.892,.119,-.455,-.909,.089,-.402,-.928,.061,-.348,-.947,.038,-.291,-.968,.021,-.232,-.988,.013,-.172,-1.007,.014,-.113,-1.022,.026,-.055,-1.032,.049,0,-1.034,.079,.05,-1.028,.117,.095,-1.013,.158,.135,-.99,.2,.171,-.962,.242,.208,-.934,.285,.249,-.913,.327,.294,-.9,.369,.343,-.895,.407,.396,-.897,.441,.451,-.906,.47,.507,-.92,.493,.565,-.939,.509,-1.135,-.746,.356,-1.076,-.764,.347,-1.018,-.783,.334,-.96,-.803,.319,-.904,-.822,.301,-.848,-.842,.28,-.793,-.861,.256,-.74,-.879,.23,-.687,-.897,.201,-.636,-.914,.17,-.584,-.931,.138,-.533,-.948,.108,-.48,-.967,.08,-.425,-.986,.056,-.368,-1.006,.038,-.31,-1.027,.028,-.251,-1.046,.027,-.191,-1.063,.036,-.132,-1.074,.056,-.077,-1.078,.085,-.025,-1.074,.121,.021,-1.061,.161,.062,-1.039,.203,.098,-1.012,.246,.133,-.981,.288,.172,-.957,.331,.216,-.941,.373,.264,-.933,.412,.315,-.933,.448,.369,-.939,.479,.426,-.953,.503,.483,-.971,.521,.541,-.992,.532,-1.15,-.804,.375,-1.092,-.823,.361,-1.035,-.842,.344,-.979,-.862,.325,-.924,-.881,.303,-.87,-.9,.278,-.816,-.919,.25,-.764,-.936,.22,-.713,-.953,.189,-.662,-.97,.157,-.61,-.987,.127,-.557,-1.005,.099,-.502,-1.025,.075,-.446,-1.045,.056,-.388,-1.065,.044,-.329,-1.085,.04,-.269,-1.103,.047,-.21,-1.115,.064,-.154,-1.121,.09,-.101,-1.119,.125,-.054,-1.108,.165,-.012,-1.089,.207,.025,-1.062,.249,.059,-1.03,.291,.097,-1.003,.334,.138,-.984,.376,.185,-.972,.417,.235,-.969,.454,.288,-.974,.487,.344,-.985,.513,.401,-1.002,.533,.459,-1.023,.545,.516,-1.047,.551,-1.167,-.863,.387,-1.11,-.882,.369,-1.054,-.902,.348,-1,-.921,.325,-.946,-.94,.299,-.893,-.958,.27,-.841,-.975,.24,-.79,-.992,.208,-.739,-1.009,.177,-.687,-1.026,.147,-.634,-1.044,.119,-.579,-1.063,.094,-.524,-1.083,.074,-.466,-1.104,.06,-.407,-1.124,.054,-.347,-1.142,.058,-.288,-1.156,.072,-.231,-1.164,.097,-.177,-1.164,.13,-.129,-1.155,.168,-.085,-1.137,.21,-.047,-1.112,.253,-.013,-1.08,.295,.022,-1.051,.337,.062,-1.028,.38,.106,-1.013,.421,.155,-1.006,.46,.207,-1.009,.494,.262,-1.018,.523,.319,-1.034,.544,.377,-1.054,.558,.435,-1.077,.565,.492,-1.102,.567,-1.185,-.922,.393,-1.13,-.942,.371,-1.076,-.961,.346,-1.022,-.979,.319,-.97,-.997,.29,-.918,-1.014,.26,-.867,-1.031,.227,-.816,-1.048,.196,-.764,-1.065,.166,-.711,-1.083,.138,-.657,-1.102,.113,-.601,-1.122,.092,-.544,-1.142,.076,-.485,-1.163,.068,-.425,-1.182,.07,-.366,-1.197,.081,-.308,-1.207,.103,-.253,-1.209,.134,-.204,-1.202,.172,-.159,-1.186,.213,-.12,-1.162,.256,-.085,-1.132,.298,-.052,-1.1,.34,-.014,-1.073,.383,.028,-1.054,.425,.075,-1.045,.465,.127,-1.044,.501,.181,-1.052,.531,.238,-1.066,.555,.295,-1.085,.571,.353,-1.107,.579,.41,-1.132,.582,.467,-1.158,.58,-1.206,-.981,.394,-1.152,-1,.368,-1.099,-1.018,.34,-1.047,-1.036,.31,-.995,-1.053,.279,-.944,-1.07,.247,-.892,-1.087,.216,-.84,-1.104,.186,-.788,-1.122,.158,-.734,-1.141,.132,-.678,-1.161,.11,-.622,-1.181,.094,-.563,-1.201,.084,-.504,-1.221,.083,-.444,-1.237,.092,-.385,-1.249,.111,-.33,-1.253,.14,-.279,-1.248,.176,-.233,-1.234,.217,-.193,-1.212,.259,-.157,-1.183,.302,-.124,-1.15,.343,-.089,-1.121,.386,-.049,-1.098,.428,-.004,-1.085,.47,.046,-1.081,.508,.1,-1.086,.54,.156,-1.098,.565,.213,-1.116,.583,.271,-1.138,.593,.328,-1.162,.597,.386,-1.188,.595,.442,-1.214,.59])},Eu=1/120,E_=4,yw=.5,Mw=2,Sw=2,bw=.95,Ew=.5,Tu=2;class Tw{constructor(t,n,a,o){this.width=t,this.height=n,this.segX=a,this.segY=o,this.cols=a+1,this.rows=o+1,this.count=this.cols*this.rows,this.positions=new Float32Array(this.count*3),this.prev=new Float32Array(this.count*3),this.rest=new Float32Array(this.count*3),this.initPositions();const c=[],u=[],f=[],d=(p,g)=>g*this.cols+p;for(let p=0;p<this.rows;p++)for(let g=0;g<this.cols;g++)g+1<this.cols&&(c.push(d(g,p)),u.push(d(g+1,p)),f.push(1)),p+1<this.rows&&(c.push(d(g,p)),u.push(d(g,p+1)),f.push(1)),g+1<this.cols&&p+1<this.rows&&(c.push(d(g,p)),u.push(d(g+1,p+1)),f.push(.85),c.push(d(g+1,p)),u.push(d(g,p+1)),f.push(.85)),g+2<this.cols&&(c.push(d(g,p)),u.push(d(g+2,p)),f.push(.5)),p+2<this.rows&&(c.push(d(g,p)),u.push(d(g,p+2)),f.push(.5));this.cA=new Int32Array(c),this.cB=new Int32Array(u),this.cMul=new Float32Array(f),this.cRest=new Float32Array(c.length),this.computeRestLengths(),this.neighbors=new Int32Array(this.count*4).fill(-1);for(let p=0;p<this.rows;p++)for(let g=0;g<this.cols;g++){const v=d(g,p)*4;this.neighbors[v+0]=g>0?d(g-1,p):-1,this.neighbors[v+1]=g+1<this.cols?d(g+1,p):-1,this.neighbors[v+2]=p>0?d(g,p-1):-1,this.neighbors[v+3]=p+1<this.rows?d(g,p+1):-1}this.selfRadius=Math.min(this.width/this.segX,this.height/this.segY)*Mw,this.selfHashInv=1/this.selfRadius}width;height;segX;segY;cols;rows;count;positions;prev;rest;cA;cB;cRest;cMul;neighbors;grabs=new Map;releasing=[];accumulator=0;selfRadius=.1;selfHashInv=10;selfHash=new Map;smoothScratch=null;initPositions(){const t=wl,n=t.cols,a=t.rows,o=this.width/t.width,c=this.height/t.height,u=(o+c)/2;let f=0;for(let d=0;d<this.rows;d++)for(let p=0;p<this.cols;p++){const g=p/this.segX*(n-1),v=d/this.segY*(a-1),_=Math.min(n-2,Math.floor(g)),x=Math.min(a-2,Math.floor(v)),b=g-_,A=v-x;for(let M=0;M<3;M++){const y=(x*n+_)*3+M,D=(x*n+_+1)*3+M,L=((x+1)*n+_)*3+M,w=((x+1)*n+_+1)*3+M,I=t.data[y]*(1-b)+t.data[D]*b,U=t.data[L]*(1-b)+t.data[w]*b,B=M===0?o:M===1?c:u;this.positions[f+M]=(I*(1-A)+U*A)*B}f+=3}this.prev.set(this.positions),this.rest.set(this.positions)}computeRestLengths(){const t=this.width/this.segX,n=this.height/this.segY;for(let a=0;a<this.cA.length;a++){const o=this.cA[a],c=this.cB[a],u=o%this.cols,f=Math.floor(o/this.cols),d=c%this.cols,p=Math.floor(c/this.cols),g=(u-d)*t,v=(f-p)*n;this.cRest[a]=Math.hypot(g,v)}}reset(){this.initPositions(),this.grabs.clear(),this.releasing.length=0}poke(t=.5){const n=this.positions,a=Math.floor(Math.random()*this.count),o=n[a*3],c=n[a*3+1],u=n[a*3+2],f=new X(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(t*.09),d=Math.max(this.width,this.height)*.28;for(let p=0;p<this.count;p++){const g=n[p*3]-o,v=n[p*3+1]-c,_=n[p*3+2]-u,x=Math.sqrt(g*g+v*v+_*_);if(x>d)continue;const b=1-x/d,A=b*b*(3-2*b);this.prev[p*3]-=f.x*A,this.prev[p*3+1]-=f.y*A,this.prev[p*3+2]-=f.z*A}}startGrab(t,n,a=0){const o=this.positions,c=[],u=[],f=[];let d=1/0;const p=new Set;for(const[g,v]of this.grabs)if(g!==a)for(const _ of v.indices)p.add(_);for(let g=0;g<this.count;g++){const v=o[g*3]-t.x,_=o[g*3+1]-t.y,x=o[g*3+2]-t.z,b=Math.sqrt(v*v+_*_+x*x);if(d=Math.min(d,b),b>n||p.has(g))continue;const A=1-b/n,M=A*A*(3-2*A);c.push(g),u.push(M),f.push(v,_,x)}return c.length===0||d>n?!1:(this.grabs.set(a,{indices:c,weights:u,offsets:new Float32Array(f),target:t.clone()}),!0)}moveGrab(t,n=0){this.grabs.get(n)?.target.copy(t)}endGrab(t){if(t===void 0){this.grabs.clear(),this.releasing.length=0;return}const n=this.grabs.get(t);n&&(this.grabs.delete(t),this.releasing.push({g:n,fade:1}))}hasGrab(t){return this.grabs.has(t)}get grabCount(){return this.grabs.size}get isGrabbing(){return this.grabs.size>0}cavityScratch=null;cavityScratch2=null;normalScratch=null;computeGridNormals(t){const n=this.positions,a=this.neighbors,o=this.count;for(let c=0;c<o;c++){const u=c*3,f=a[c*4],d=a[c*4+1],p=a[c*4+2],g=a[c*4+3];let v,_,x;f>=0&&d>=0?(v=n[d*3]-n[f*3],_=n[d*3+1]-n[f*3+1],x=n[d*3+2]-n[f*3+2]):d>=0?(v=n[d*3]-n[u],_=n[d*3+1]-n[u+1],x=n[d*3+2]-n[u+2]):f>=0?(v=n[u]-n[f*3],_=n[u+1]-n[f*3+1],x=n[u+2]-n[f*3+2]):(v=1,_=0,x=0);let b,A,M;p>=0&&g>=0?(b=n[g*3]-n[p*3],A=n[g*3+1]-n[p*3+1],M=n[g*3+2]-n[p*3+2]):g>=0?(b=n[g*3]-n[u],A=n[g*3+1]-n[u+1],M=n[g*3+2]-n[u+2]):p>=0?(b=n[u]-n[p*3],A=n[u+1]-n[p*3+1],M=n[u+2]-n[p*3+2]):(b=0,A=1,M=0);let y=_*M-x*A,D=x*b-v*M,L=v*A-_*b;const w=Math.hypot(y,D,L)||1;t[u]=y/w,t[u+1]=D/w,t[u+2]=L/w}}smoothNormals(t){const n=this.count,a=this.neighbors;(!this.normalScratch||this.normalScratch.length<n*3)&&(this.normalScratch=new Float32Array(n*3));const o=this.normalScratch;for(let c=0;c<n;c++){const u=c*3;let f=t[u]*2,d=t[u+1]*2,p=t[u+2]*2;for(let v=0;v<4;v++){const _=a[c*4+v];_<0||(f+=t[_*3],d+=t[_*3+1],p+=t[_*3+2])}const g=Math.hypot(f,d,p)||1;o[u]=f/g,o[u+1]=d/g,o[u+2]=p/g}t.set(o.subarray(0,n*3))}computeCavity(t,n,a=5){const o=this.positions,c=this.neighbors,u=this.count,f=1/Math.min(this.width/this.segX,this.height/this.segY);(!this.cavityScratch||this.cavityScratch.length<u)&&(this.cavityScratch=new Float32Array(u));const d=this.cavityScratch;for(let _=0;_<u;_++){let x=0,b=0,A=0,M=0;for(let U=0;U<4;U++){const B=c[_*4+U];B<0||(x+=o[B*3],b+=o[B*3+1],A+=o[B*3+2],M++)}if(M===0){d[_]=0;continue}const y=1/M,D=x*y-o[_*3],L=b*y-o[_*3+1],w=A*y-o[_*3+2],I=(D*t[_*3]+L*t[_*3+1]+w*t[_*3+2])*f;d[_]=Math.min(1,Math.max(0,I*a))}(!this.cavityScratch2||this.cavityScratch2.length<u)&&(this.cavityScratch2=new Float32Array(u));let p=d,g=this.cavityScratch2;const v=4;for(let _=0;_<v;_++){for(let b=0;b<u;b++){let A=0,M=0;for(let y=0;y<4;y++){const D=c[b*4+y];D<0||(A+=p[D],M++)}g[b]=M>0?p[b]*.3+A/M*.7:p[b]}const x=p;p=g,g=x}n.set(p.subarray(0,u))}step(t,n){this.accumulator+=Math.min(t,.05);let a=0;for(;this.accumulator>=Eu&&a<E_;)this.substep(n),this.accumulator-=Eu,a++;a===E_&&(this.accumulator=0),a>0&&(this.smoothPass(Ew),this.selfCollide(Sw))}smoothPass(t){const n=this.positions,a=this.neighbors,o=this.count;(!this.smoothScratch||this.smoothScratch.length<o*3)&&(this.smoothScratch=new Float32Array(o*3));const c=this.smoothScratch;for(let u=0;u<o;u++){let f=0,d=0,p=0,g=0;for(let x=0;x<4;x++){const b=a[u*4+x];b<0||(f+=n[b*3],d+=n[b*3+1],p+=n[b*3+2],g++)}const v=u*3;if(g===0){c[v]=n[v],c[v+1]=n[v+1],c[v+2]=n[v+2];continue}const _=1/g;c[v]=n[v]+(f*_-n[v])*t,c[v+1]=n[v+1]+(d*_-n[v+1])*t,c[v+2]=n[v+2]+(p*_-n[v+2])*t}n.set(c.subarray(0,o*3))}selfCollide(t){const n=this.positions,a=this.count,o=this.cols,c=this.selfRadius,u=c*c,f=this.selfHashInv,d=this.selfHash;for(let p=0;p<t;p++){d.clear();for(let g=0;g<a;g++){const v=Math.floor(n[g*3]*f),_=Math.floor(n[g*3+1]*f),x=Math.floor(n[g*3+2]*f),b=(v*73856093^_*19349663^x*83492791)>>>0;let A=d.get(b);A||(A=[],d.set(b,A)),A.push(g)}for(let g=0;g<a;g++){const v=g%o,_=g/o|0,x=Math.floor(n[g*3]*f),b=Math.floor(n[g*3+1]*f),A=Math.floor(n[g*3+2]*f);for(let M=-1;M<=1;M++)for(let y=-1;y<=1;y++)for(let D=-1;D<=1;D++){const L=((x+D)*73856093^(b+y)*19349663^(A+M)*83492791)>>>0,w=d.get(L);if(w)for(let I=0;I<w.length;I++){const U=w[I];if(U<=g)continue;const B=U%o,T=U/o|0,O=v-B,W=_-T;if(O>=-Tu&&O<=Tu&&W>=-Tu&&W<=Tu)continue;const V=n[U*3]-n[g*3],Z=n[U*3+1]-n[g*3+1],ut=n[U*3+2]-n[g*3+2],ht=V*V+Z*Z+ut*ut;if(ht>=u||ht<1e-12)continue;const j=Math.sqrt(ht),z=(c-j)/j*.5*bw,H=V*z,J=Z*z,ft=ut*z;n[g*3]-=H,n[g*3+1]-=J,n[g*3+2]-=ft,n[U*3]+=H,n[U*3+1]+=J,n[U*3+2]+=ft}}}}}substep(t){const n=this.positions,a=this.prev,o=this.count;if(this.releasing.length){for(const x of this.releasing)x.fade-=Eu/yw;this.releasing=this.releasing.filter(x=>x.fade>0)}const c=Math.pow(1-Math.min(t.viscosity,.99),Eu*60);for(let x=0;x<o*3;x++){const b=n[x],A=(b-a[x])*c;a[x]=b,n[x]=b+A}if(t.smoothing>0){const x=t.smoothing*.5,b=this.neighbors;for(let A=0;A<o;A++){let M=0,y=0,D=0,L=0;for(let I=0;I<4;I++){const U=b[A*4+I];U<0||(M+=n[U*3],y+=n[U*3+1],D+=n[U*3+2],L++)}if(L===0)continue;const w=1/L;n[A*3]+=(M*w-n[A*3])*x,n[A*3+1]+=(y*w-n[A*3+1])*x,n[A*3+2]+=(D*w-n[A*3+2])*x}}const u=Math.max(1,Math.round(t.iterations)),f=t.stiffness,d=this.cA,p=this.cB,g=this.cRest,v=this.cMul,_=d.length;for(let x=0;x<u;x++){for(let b=0;b<_;b++){const A=d[b]*3,M=p[b]*3,y=n[M]-n[A],D=n[M+1]-n[A+1],L=n[M+2]-n[A+2],w=Math.sqrt(y*y+D*D+L*L);if(w<1e-9)continue;const I=(w-g[b])/w*.5*f*v[b],U=y*I,B=D*I,T=L*I;n[A]+=U,n[A+1]+=B,n[A+2]+=T,n[M]-=U,n[M+1]-=B,n[M+2]-=T}this.applyGrab()}this.selfCollide(2),this.applyGrab()}applyGrab(){if(this.grabs.size===0&&this.releasing.length===0)return;const t=this.positions,n=(a,o)=>{for(let c=0;c<a.indices.length;c++){const u=a.indices[c]*3,f=a.weights[c]*o,d=a.target.x+a.offsets[c*3],p=a.target.y+a.offsets[c*3+1],g=a.target.z+a.offsets[c*3+2];t[u]+=(d-t[u])*f,t[u+1]+=(p-t[u+1])*f,t[u+2]+=(g-t[u+2])*f}};for(const a of this.grabs.values())n(a,1);for(const a of this.releasing){const o=a.fade;n(a.g,o*o*(3-2*o))}}}function Ux(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Aw(s,t,n){const a=new Float32Array(s*s),o=new Float32Array(t+1),c=new Float32Array(t+1);for(let f=0;f<=t;f++)o[f]=.85+n()*.3,c[f]=.85+n()*.3;const u=new Float32Array(s*s);for(let f=0;f<u.length;f++)u[f]=n();for(let f=0;f<s;f++){const d=f/s*t,p=Math.floor(d),g=d-p;for(let v=0;v<s;v++){const _=v/s*t,x=Math.floor(_),b=_-x,A=Math.sin(b*Math.PI)*o[x%(t+1)],M=Math.sin(g*Math.PI)*c[p%(t+1)],D=(x+p)%2===0?A*.62+M*.38:M*.62+A*.38,L=u[f*s+v];a[f*s+v]=D*.85+L*.15}}return a}function Nx(s,t,n){const a=document.createElement("canvas");a.width=t,a.height=t;const o=a.getContext("2d"),c=o.createImageData(t,t),u=c.data,f=(p,g)=>s[(g+t)%t*t+(p+t)%t];for(let p=0;p<t;p++)for(let g=0;g<t;g++){const v=(f(g+1,p)-f(g-1,p))*n,_=(f(g,p+1)-f(g,p-1))*n,x=1/Math.sqrt(v*v+_*_+1),b=(p*t+g)*4;u[b]=Math.round((-v*x*.5+.5)*255),u[b+1]=Math.round((_*x*.5+.5)*255),u[b+2]=Math.round((x*.5+.5)*255),u[b+3]=255}o.putImageData(c,0,0);const d=new Il(a);return d.wrapS=d.wrapT=Ul,d.repeat.set(2,2),d.colorSpace=Gi,d}function ww(s,t,n,a){const o=new Float32Array(s*s),c=new Float32Array(s*s);for(let f=0;f<c.length;f++)c[f]=a();const u=new Float32Array(Math.ceil(t)+2);for(let f=0;f<u.length;f++)u[f]=.85+a()*.3;for(let f=0;f<s;f++){const d=f/s*n,p=Math.floor(d),g=d-p,v=p%2===0?0:.5;for(let _=0;_<s;_++){const x=_/s*t+v,b=Math.floor(x),A=x-b,M=Math.sin(A*Math.PI)*u[(b+1)%u.length],y=Math.sin(g*Math.PI),D=.5+.5*Math.cos((A-.5)*2*Math.PI),L=.55*M+.3*y*D;o[f*s+_]=L*.85+c[f*s+_]*.15}}return o}function Rw(s){const t=s.size??512,n=Ux(s.seed??20240),a=s.type==="woven"?Aw(t,s.threads,n):ww(t,s.threads,Math.max(2,Math.round(s.threads*.8)),n);return Nx(a,t,s.strength)}function Cw(s,t=512,n=1.6){const a=document.createElement("canvas");a.width=t,a.height=t;const o=a.getContext("2d");o.drawImage(s,0,0,t,t);const c=o.getImageData(0,0,t,t).data,u=new Float32Array(t*t);for(let f=0;f<u.length;f++)u[f]=(c[f*4]*.2126+c[f*4+1]*.7152+c[f*4+2]*.0722)/255;return Nx(u,t,n)}function Dw(s=256,t=4242){const n=Ux(t),a=document.createElement("canvas");a.width=s,a.height=s;const o=a.getContext("2d"),c=o.createImageData(s,s),u=c.data;for(let d=0;d<s*s;d++){const p=Math.round(215+(n()-.5)*70);u[d*4]=p,u[d*4+1]=p,u[d*4+2]=p,u[d*4+3]=255}o.putImageData(c,0,0);const f=new Il(a);return f.wrapS=f.wrapT=Ul,f.repeat.set(4,4),f.colorSpace=Gi,f}function Uw(s){const t=Dw(),n=new gx({color:new se("#9aa1ad"),metalness:.95,roughness:.1,roughnessMap:t,normalScale:new Bt(.5,.5),clearcoat:1,clearcoatRoughness:.08,sheen:.35,sheenRoughness:.55,sheenColor:new se("#cfd6ff"),iridescence:1,iridescenceIOR:1.35,iridescenceThicknessRange:[120,480],side:Qi}),a={uHoloIntensity:{value:1},uHoloScale:{value:110},uBandFreq:{value:3},uRadialFreq:{value:1.6},uSaturation:{value:.8},uHueShift:{value:0},uSparkle:{value:.6},uSpecTint:{value:.85},uSurfaceMap:{value:s},uSurfaceOpacity:{value:1},uCavityAmount:{value:0},uCornerRound:{value:0},uClothSize:{value:new Bt(3,3)},uWetMap:{value:null},uWetDark:{value:.5}};return n.alphaToCoverage=!0,n.onBeforeCompile=o=>{Object.assign(o.uniforms,a),o.vertexShader=`varying vec2 vHoloUv;
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
      uniform float uWetDark;

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
          // Smooth-bilinear sample: warping the UV with a cubic ease inside
          // each texel makes hardware bilinear look like bicubic filtering,
          // erasing the square/diamond texel artifacts at wetness edges.
          vec2 wts = vec2(512.0); // MoistureSim canvas size
          vec2 wuv = vHoloUv * wts - 0.5;
          vec2 wf = fract(wuv);
          wuv = (floor(wuv) + wf * wf * (3.0 - 2.0 * wf) + 0.5) / wts;
          // Wide 17-tap disc blur of the wet field, done here in the shader
          // (explicit taps — no reliance on canvas filters). Inner ring at 3
          // texels + outer ring at 8 texels feathers the wet→dry boundary
          // over a broad organic band at any zoom.
          float wetF;
          {
            // NOTE: the wetness field lives in ALPHA. Canvas pixels are
            // premultiplied and WebGL un-premultiplies on upload, so .r reads
            // ~1.0 wherever alpha > 0 (a binary mask that "snaps off"); .a is
            // the true, smoothly fading value.
            vec2 t1 = 3.0 / wts;
            vec2 t2 = 8.0 / wts;
            float acc = 4.0 * texture2D(uWetMap, wuv).a;
            acc += 2.0 * texture2D(uWetMap, wuv + vec2( t1.x, 0.0)).a;
            acc += 2.0 * texture2D(uWetMap, wuv + vec2(-t1.x, 0.0)).a;
            acc += 2.0 * texture2D(uWetMap, wuv + vec2(0.0,  t1.y)).a;
            acc += 2.0 * texture2D(uWetMap, wuv + vec2(0.0, -t1.y)).a;
            acc += 1.5 * texture2D(uWetMap, wuv + vec2( t1.x,  t1.y) * 0.707).a;
            acc += 1.5 * texture2D(uWetMap, wuv + vec2(-t1.x,  t1.y) * 0.707).a;
            acc += 1.5 * texture2D(uWetMap, wuv + vec2( t1.x, -t1.y) * 0.707).a;
            acc += 1.5 * texture2D(uWetMap, wuv + vec2(-t1.x, -t1.y) * 0.707).a;
            acc += 1.0 * texture2D(uWetMap, wuv + vec2( t2.x, 0.0)).a;
            acc += 1.0 * texture2D(uWetMap, wuv + vec2(-t2.x, 0.0)).a;
            acc += 1.0 * texture2D(uWetMap, wuv + vec2(0.0,  t2.y)).a;
            acc += 1.0 * texture2D(uWetMap, wuv + vec2(0.0, -t2.y)).a;
            acc += 0.75 * texture2D(uWetMap, wuv + vec2( t2.x,  t2.y) * 0.707).a;
            acc += 0.75 * texture2D(uWetMap, wuv + vec2(-t2.x,  t2.y) * 0.707).a;
            acc += 0.75 * texture2D(uWetMap, wuv + vec2( t2.x, -t2.y) * 0.707).a;
            acc += 0.75 * texture2D(uWetMap, wuv + vec2(-t2.x, -t2.y) * 0.707).a;
            wetF = clamp(acc / 25.0, 0.0, 1.0);
          }
          // near-linear ramp: dampness fades gradually from saturated to dry —
          // no threshold, so there is no contour line for blockiness to form on
          float absorbed = smoothstep(0.03, 0.75, wetF);
          vec4 wet = texture2D(uWetMap, wuv);
          float bead = clamp(wet.g, 0.0, 1.0);
          // absorbed water darkens the fabric and makes it a touch glossier.
          // The gloss change is quadratic — specular response is so nonlinear
          // that a linear roughness shift re-sharpens the boundary visually.
          diffuseColor.rgb *= (1.0 - absorbed * uWetDark);
          roughnessFactor *= (1.0 - absorbed * absorbed * 0.22);
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
        }`)},{material:n,uniforms:a}}const ao=2048;class Nw{canvas;texture;decals=[];clothImage=null;selected=null;ctx;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=ao,this.canvas.height=ao,this.ctx=this.canvas.getContext("2d"),this.texture=new Il(this.canvas),this.texture.colorSpace=fi,this.redraw()}setAspect(t){const n=t>=1?ao:Math.round(ao*t),a=t>=1?Math.round(ao/t):ao;return this.canvas.width===n&&this.canvas.height===a?(this.redraw(),!1):(this.canvas.width=n,this.canvas.height=a,this.texture.dispose(),this.texture=new Il(this.canvas),this.texture.colorSpace=fi,this.redraw(),!0)}addDecal(t){const n={img:t,u:.5,v:.5,scale:.35,rotation:0};return this.decals.push(n),this.selected=n,this.redraw(),n}setClothImage(t){this.clothImage=t,this.redraw()}clear(){this.decals=[],this.clothImage=null,this.selected=null,this.redraw()}hitTest(t,n){const a=this.canvas.width,o=this.canvas.height,c=t*a,u=(1-n)*o;for(let f=this.decals.length-1;f>=0;f--){const d=this.decals[f],{w:p,h:g}=this.decalPixelSize(d),v=d.u*a,_=(1-d.v)*o,x=-d.rotation*Math.PI/180,b=c-v,A=u-_,M=b*Math.cos(x)-A*Math.sin(x),y=b*Math.sin(x)+A*Math.cos(x);if(Math.abs(M)<=p/2&&Math.abs(y)<=g/2)return d}return null}decalPixelSize(t){const n=this.canvas.width,a=t.img.naturalWidth||t.img.width||300,o=t.img.naturalHeight||t.img.height||300,c=t.scale*n,u=c*o/a;return{w:c,h:u}}redraw(){const{ctx:t,canvas:n}=this;t.clearRect(0,0,n.width,n.height),this.clothImage&&t.drawImage(this.clothImage,0,0,n.width,n.height);for(const a of this.decals){const{w:o,h:c}=this.decalPixelSize(a);t.save(),t.translate(a.u*n.width,(1-a.v)*n.height),t.rotate(a.rotation*Math.PI/180),t.drawImage(a.img,-o/2,-c/2,o,c),t.restore()}this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}const T_=`
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
`,Lw=`
  
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
`,Pw=`
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
`,A_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;function w_(){return{tDepth:{value:null},focus:{value:5.2},focalDepth:{value:.15},aperture:{value:.4},maxblur:{value:.04},nearClip:{value:.1},farClip:{value:200}}}class Ow extends cr{sceneRef;cameraRef;depthMaterial;depthRT;blurRT;gatherMat;compositeMat;fsQuad;clearColorTmp=new se;constructor(t,n){super(),this.sceneRef=t,this.cameraRef=n,this.needsSwap=!0,this.depthMaterial=new vx,this.depthMaterial.depthPacking=PS,this.depthMaterial.blending=ea,this.depthRT=new Xn(1,1,{minFilter:Un,magFilter:Un}),this.blurRT=new Xn(1,1,{minFilter:An,magFilter:An,type:ii}),this.gatherMat=new In({uniforms:{...w_(),tColor:{value:null}},vertexShader:A_,fragmentShader:T_+Lw}),this.compositeMat=new In({uniforms:{...w_(),tSharp:{value:null},tBlur:{value:null}},vertexShader:A_,fragmentShader:T_+Pw}),this.fsQuad=new $u(this.gatherMat)}setBoth(t,n){this.gatherMat.uniforms[t].value=n,this.compositeMat.uniforms[t].value=n}setParams(t,n,a){this.setBoth("aperture",t),this.setBoth("maxblur",n),this.setBoth("focalDepth",a)}setFocus(t){this.setBoth("focus",t)}setSize(t,n){this.depthRT.setSize(t,n),this.blurRT.setSize(Math.max(1,t>>1),Math.max(1,n>>1))}render(t,n,a){this.setBoth("nearClip",this.cameraRef.near),this.setBoth("farClip",this.cameraRef.far),t.getClearColor(this.clearColorTmp);const o=t.getClearAlpha(),c=t.autoClear;t.autoClear=!1,this.sceneRef.overrideMaterial=this.depthMaterial,t.setClearColor(16777215,1),t.setRenderTarget(this.depthRT),t.clear(),t.render(this.sceneRef,this.cameraRef),this.sceneRef.overrideMaterial=null,t.setClearColor(this.clearColorTmp,o),this.gatherMat.uniforms.tColor.value=a.texture,this.gatherMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.gatherMat,t.setRenderTarget(this.blurRT),this.fsQuad.render(t),this.compositeMat.uniforms.tSharp.value=a.texture,this.compositeMat.uniforms.tBlur.value=this.blurRT.texture,this.compositeMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.compositeMat,t.setRenderTarget(this.renderToScreen?null:n),this.fsQuad.render(t),t.autoClear=c}dispose(){this.depthMaterial.dispose(),this.depthRT.dispose(),this.blurRT.dispose(),this.gatherMat.dispose(),this.compositeMat.dispose(),this.fsQuad.dispose()}}var $n=Uint8Array,Ci=Uint16Array,yp=Int32Array,Mp=new $n([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Sp=new $n([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),R_=new $n([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Lx=function(s,t){for(var n=new Ci(31),a=0;a<31;++a)n[a]=t+=1<<s[a-1];for(var o=new yp(n[30]),a=1;a<30;++a)for(var c=n[a];c<n[a+1];++c)o[c]=c-n[a]<<5|a;return{b:n,r:o}},Px=Lx(Mp,2),Iw=Px.b,V0=Px.r;Iw[28]=258,V0[258]=28;var Fw=Lx(Sp,0),C_=Fw.r,k0=new Ci(32768);for(var rn=0;rn<32768;++rn){var Ts=(rn&43690)>>1|(rn&21845)<<1;Ts=(Ts&52428)>>2|(Ts&13107)<<2,Ts=(Ts&61680)>>4|(Ts&3855)<<4,k0[rn]=((Ts&65280)>>8|(Ts&255)<<8)>>1}var Dl=(function(s,t,n){for(var a=s.length,o=0,c=new Ci(t);o<a;++o)s[o]&&++c[s[o]-1];var u=new Ci(t);for(o=1;o<t;++o)u[o]=u[o-1]+c[o-1]<<1;var f;if(n){f=new Ci(1<<t);var d=15-t;for(o=0;o<a;++o)if(s[o])for(var p=o<<4|s[o],g=t-s[o],v=u[s[o]-1]++<<g,_=v|(1<<g)-1;v<=_;++v)f[k0[v]>>d]=p}else for(f=new Ci(a),o=0;o<a;++o)s[o]&&(f[o]=k0[u[s[o]-1]++]>>15-s[o]);return f}),or=new $n(288);for(var rn=0;rn<144;++rn)or[rn]=8;for(var rn=144;rn<256;++rn)or[rn]=9;for(var rn=256;rn<280;++rn)or[rn]=7;for(var rn=280;rn<288;++rn)or[rn]=8;var ku=new $n(32);for(var rn=0;rn<32;++rn)ku[rn]=5;var Bw=Dl(or,9,0),zw=Dl(ku,5,0),Ox=function(s){return(s+7)/8|0},Ix=function(s,t,n){return(n==null||n>s.length)&&(n=s.length),new $n(s.subarray(t,n))},Hw=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ju=function(s,t,n){var a=new Error(t||Hw[s]);if(a.code=s,Error.captureStackTrace&&Error.captureStackTrace(a,Ju),!n)throw a;return a},Ga=function(s,t,n){n<<=t&7;var a=t/8|0;s[a]|=n,s[a+1]|=n>>8},Ml=function(s,t,n){n<<=t&7;var a=t/8|0;s[a]|=n,s[a+1]|=n>>8,s[a+2]|=n>>16},Wd=function(s,t){for(var n=[],a=0;a<s.length;++a)s[a]&&n.push({s:a,f:s[a]});var o=n.length,c=n.slice();if(!o)return{t:Bx,l:0};if(o==1){var u=new $n(n[0].s+1);return u[n[0].s]=1,{t:u,l:1}}n.sort(function(I,U){return I.f-U.f}),n.push({s:-1,f:25001});var f=n[0],d=n[1],p=0,g=1,v=2;for(n[0]={s:-1,f:f.f+d.f,l:f,r:d};g!=o-1;)f=n[n[p].f<n[v].f?p++:v++],d=n[p!=g&&n[p].f<n[v].f?p++:v++],n[g++]={s:-1,f:f.f+d.f,l:f,r:d};for(var _=c[0].s,a=1;a<o;++a)c[a].s>_&&(_=c[a].s);var x=new Ci(_+1),b=W0(n[g-1],x,0);if(b>t){var a=0,A=0,M=b-t,y=1<<M;for(c.sort(function(U,B){return x[B.s]-x[U.s]||U.f-B.f});a<o;++a){var D=c[a].s;if(x[D]>t)A+=y-(1<<b-x[D]),x[D]=t;else break}for(A>>=M;A>0;){var L=c[a].s;x[L]<t?A-=1<<t-x[L]++-1:++a}for(;a>=0&&A;--a){var w=c[a].s;x[w]==t&&(--x[w],++A)}b=t}return{t:new $n(x),l:b}},W0=function(s,t,n){return s.s==-1?Math.max(W0(s.l,t,n+1),W0(s.r,t,n+1)):t[s.s]=n},D_=function(s){for(var t=s.length;t&&!s[--t];);for(var n=new Ci(++t),a=0,o=s[0],c=1,u=function(d){n[a++]=d},f=1;f<=t;++f)if(s[f]==o&&f!=t)++c;else{if(!o&&c>2){for(;c>138;c-=138)u(32754);c>2&&(u(c>10?c-11<<5|28690:c-3<<5|12305),c=0)}else if(c>3){for(u(o),--c;c>6;c-=6)u(8304);c>2&&(u(c-3<<5|8208),c=0)}for(;c--;)u(o);c=1,o=s[f]}return{c:n.subarray(0,a),n:t}},Sl=function(s,t){for(var n=0,a=0;a<t.length;++a)n+=s[a]*t[a];return n},Fx=function(s,t,n){var a=n.length,o=Ox(t+2);s[o]=a&255,s[o+1]=a>>8,s[o+2]=s[o]^255,s[o+3]=s[o+1]^255;for(var c=0;c<a;++c)s[o+c+4]=n[c];return(o+4+a)*8},U_=function(s,t,n,a,o,c,u,f,d,p,g){Ga(t,g++,n),++o[256];for(var v=Wd(o,15),_=v.t,x=v.l,b=Wd(c,15),A=b.t,M=b.l,y=D_(_),D=y.c,L=y.n,w=D_(A),I=w.c,U=w.n,B=new Ci(19),T=0;T<D.length;++T)++B[D[T]&31];for(var T=0;T<I.length;++T)++B[I[T]&31];for(var O=Wd(B,7),W=O.t,V=O.l,Z=19;Z>4&&!W[R_[Z-1]];--Z);var ut=p+5<<3,ht=Sl(o,or)+Sl(c,ku)+u,j=Sl(o,_)+Sl(c,A)+u+14+3*Z+Sl(B,W)+2*B[16]+3*B[17]+7*B[18];if(d>=0&&ut<=ht&&ut<=j)return Fx(t,g,s.subarray(d,d+p));var z,H,J,ft;if(Ga(t,g,1+(j<ht)),g+=2,j<ht){z=Dl(_,x,0),H=_,J=Dl(A,M,0),ft=A;var St=Dl(W,V,0);Ga(t,g,L-257),Ga(t,g+5,U-1),Ga(t,g+10,Z-4),g+=14;for(var T=0;T<Z;++T)Ga(t,g+3*T,W[R_[T]]);g+=3*Z;for(var F=[D,I],K=0;K<2;++K)for(var _t=F[K],T=0;T<_t.length;++T){var Et=_t[T]&31;Ga(t,g,St[Et]),g+=W[Et],Et>15&&(Ga(t,g,_t[T]>>5&127),g+=_t[T]>>12)}}else z=Bw,H=or,J=zw,ft=ku;for(var T=0;T<f;++T){var wt=a[T];if(wt>255){var Et=wt>>18&31;Ml(t,g,z[Et+257]),g+=H[Et+257],Et>7&&(Ga(t,g,wt>>23&31),g+=Mp[Et]);var tt=wt&31;Ml(t,g,J[tt]),g+=ft[tt],tt>3&&(Ml(t,g,wt>>5&8191),g+=Sp[tt])}else Ml(t,g,z[wt]),g+=H[wt]}return Ml(t,g,z[256]),g+H[256]},Gw=new yp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Bx=new $n(0),Vw=function(s,t,n,a,o,c){var u=c.z||s.length,f=new $n(a+u+5*(1+Math.ceil(u/7e3))+o),d=f.subarray(a,f.length-o),p=c.l,g=(c.r||0)&7;if(t){g&&(d[0]=c.r>>3);for(var v=Gw[t-1],_=v>>13,x=v&8191,b=(1<<n)-1,A=c.p||new Ci(32768),M=c.h||new Ci(b+1),y=Math.ceil(n/3),D=2*y,L=function(ue){return(s[ue]^s[ue+1]<<y^s[ue+2]<<D)&b},w=new yp(25e3),I=new Ci(288),U=new Ci(32),B=0,T=0,O=c.i||0,W=0,V=c.w||0,Z=0;O+2<u;++O){var ut=L(O),ht=O&32767,j=M[ut];if(A[ht]=j,M[ut]=ht,V<=O){var z=u-O;if((B>7e3||W>24576)&&(z>423||!p)){g=U_(s,d,0,w,I,U,T,W,Z,O-Z,g),W=B=T=0,Z=O;for(var H=0;H<286;++H)I[H]=0;for(var H=0;H<30;++H)U[H]=0}var J=2,ft=0,St=x,F=ht-j&32767;if(z>2&&ut==L(O-F))for(var K=Math.min(_,z)-1,_t=Math.min(32767,O),Et=Math.min(258,z);F<=_t&&--St&&ht!=j;){if(s[O+J]==s[O+J-F]){for(var wt=0;wt<Et&&s[O+wt]==s[O+wt-F];++wt);if(wt>J){if(J=wt,ft=F,wt>K)break;for(var tt=Math.min(F,wt-2),xt=0,H=0;H<tt;++H){var yt=O-F+H&32767,Ht=A[yt],te=yt-Ht&32767;te>xt&&(xt=te,j=yt)}}}ht=j,j=A[ht],F+=ht-j&32767}if(ft){w[W++]=268435456|V0[J]<<18|C_[ft];var Kt=V0[J]&31,Pe=C_[ft]&31;T+=Mp[Kt]+Sp[Pe],++I[257+Kt],++U[Pe],V=O+J,++B}else w[W++]=s[O],++I[s[O]]}}for(O=Math.max(O,V);O<u;++O)w[W++]=s[O],++I[s[O]];g=U_(s,d,p,w,I,U,T,W,Z,O-Z,g),p||(c.r=g&7|d[g/8|0]<<3,g-=7,c.h=M,c.p=A,c.i=O,c.w=V)}else{for(var O=c.w||0;O<u+p;O+=65535){var le=O+65535;le>=u&&(d[g/8|0]=p,le=u),g=Fx(d,g+1,s.subarray(O,le))}c.i=u}return Ix(f,0,a+Ox(g)+o)},kw=(function(){for(var s=new Int32Array(256),t=0;t<256;++t){for(var n=t,a=9;--a;)n=(n&1&&-306674912)^n>>>1;s[t]=n}return s})(),Ww=function(){var s=-1;return{p:function(t){for(var n=s,a=0;a<t.length;++a)n=kw[n&255^t[a]]^n>>>8;s=n},d:function(){return~s}}},Xw=function(s,t,n,a,o){if(!o&&(o={l:1},t.dictionary)){var c=t.dictionary.subarray(-32768),u=new $n(c.length+s.length);u.set(c),u.set(s,c.length),s=u,o.w=c.length}return Vw(s,t.level==null?6:t.level,t.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):20:12+t.mem,n,a,o)},zx=function(s,t){var n={};for(var a in s)n[a]=s[a];for(var a in t)n[a]=t[a];return n},kn=function(s,t,n){for(;n;++t)s[t]=n,n>>>=8};function qw(s,t){return Xw(s,t||{},0,0)}var Hx=function(s,t,n,a){for(var o in s){var c=s[o],u=t+o,f=a;Array.isArray(c)&&(f=zx(a,c[1]),c=c[0]),c instanceof $n?n[u]=[c,f]:(n[u+="/"]=[new $n(0),f],Hx(c,u,n,a))}},N_=typeof TextEncoder<"u"&&new TextEncoder,Yw=typeof TextDecoder<"u"&&new TextDecoder,Zw=0;try{Yw.decode(Bx,{stream:!0}),Zw=1}catch{}function Wu(s,t){var n;if(N_)return N_.encode(s);for(var a=s.length,o=new $n(s.length+(s.length>>1)),c=0,u=function(p){o[c++]=p},n=0;n<a;++n){if(c+5>o.length){var f=new $n(c+8+(a-n<<1));f.set(o),o=f}var d=s.charCodeAt(n);d<128||t?u(d):d<2048?(u(192|d>>6),u(128|d&63)):d>55295&&d<57344?(d=65536+(d&1047552)|s.charCodeAt(++n)&1023,u(240|d>>18),u(128|d>>12&63),u(128|d>>6&63),u(128|d&63)):(u(224|d>>12),u(128|d>>6&63),u(128|d&63))}return Ix(o,0,c)}var X0=function(s){var t=0;if(s)for(var n in s){var a=s[n].length;a>65535&&Ju(9),t+=a+4}return t},L_=function(s,t,n,a,o,c,u,f){var d=a.length,p=n.extra,g=f&&f.length,v=X0(p);kn(s,t,u!=null?33639248:67324752),t+=4,u!=null&&(s[t++]=20,s[t++]=n.os),s[t]=20,t+=2,s[t++]=n.flag<<1|(c<0&&8),s[t++]=o&&8,s[t++]=n.compression&255,s[t++]=n.compression>>8;var _=new Date(n.mtime==null?Date.now():n.mtime),x=_.getFullYear()-1980;if((x<0||x>119)&&Ju(10),kn(s,t,x<<25|_.getMonth()+1<<21|_.getDate()<<16|_.getHours()<<11|_.getMinutes()<<5|_.getSeconds()>>1),t+=4,c!=-1&&(kn(s,t,n.crc),kn(s,t+4,c<0?-c-2:c),kn(s,t+8,n.size)),kn(s,t+12,d),kn(s,t+14,v),t+=16,u!=null&&(kn(s,t,g),kn(s,t+6,n.attrs),kn(s,t+10,u),t+=14),s.set(a,t),t+=d,v)for(var b in p){var A=p[b],M=A.length;kn(s,t,+b),kn(s,t+2,M),s.set(A,t+4),t+=4+M}return g&&(s.set(f,t),t+=g),t},Kw=function(s,t,n,a,o){kn(s,t,101010256),kn(s,t+8,n),kn(s,t+10,n),kn(s,t+12,a),kn(s,t+16,o)};function jw(s,t){t||(t={});var n={},a=[];Hx(s,"",n,t);var o=0,c=0;for(var u in n){var f=n[u],d=f[0],p=f[1],g=p.level==0?0:8,v=Wu(u),_=v.length,x=p.comment,b=x&&Wu(x),A=b&&b.length,M=X0(p.extra);_>65535&&Ju(11);var y=g?qw(d,p):d,D=y.length,L=Ww();L.p(d),a.push(zx(p,{size:d.length,crc:L.d(),c:y,f:v,m:b,u:_!=u.length||b&&x.length!=A,o,compression:g})),o+=30+_+M+D,c+=76+2*(_+M)+(A||0)+D}for(var w=new $n(c+22),I=o,U=c-o,B=0;B<a.length;++B){var v=a[B];L_(w,v.o,v,v.f,v.u,v.c.length);var T=30+v.f.length+X0(v.extra);w.set(v.c,v.o+T),L_(w,o,v,v.f,v.u,v.c.length,v.o,v.m),o+=16+T+(v.m?v.m.length:0)}return Kw(w,o,a.length,U,I),w}class di{constructor(t,n="",a=[],o=[]){this.name=t,this.type=n,this.metadata=a,this.properties=o,this.children=[]}addMetadata(t,n){this.metadata.push({key:t,value:n})}addProperty(t,n=[]){this.properties.push({property:t,metadata:n})}addChild(t){this.children.push(t)}toString(t=0){const n="	".repeat(t),a=this.metadata.map(g=>{const v=g.key,_=g.value;if(Array.isArray(_)){const x=[];return x.push(`${v} = {`),_.forEach(b=>{x.push(`${n}		${b}`)}),x.push(`${n}	}`),x.join(`
`)}else return`${v} = ${_}`}),o=a.length?` (
${a.map(g=>`${n}	${g}`).join(`
`)}
${n})`:"",c=this.properties.map(g=>{const v=g.property.replace(/\n/g,`
`+n+"	"),_=g.metadata.length?` (
${g.metadata.map(x=>`${n}		${x}`).join(`
`)}
${n}	)`:"";return`${n}	${v}${_}`}),u=this.children.map(g=>g.toString(t+1)),f=[];if(c.length>0&&f.push(...c),u.length>0){c.length>0&&f.push("");for(let g=0;g<u.length;g++)f.push(u[g]),g<u.length-1&&f.push("")}const d=f.join(`
`),p=this.type?this.type+" ":"";return`${n}def ${p}"${this.name}"${o}
${n}{
${d}
${n}}`}}class Qw{constructor(){this.textureUtils=null}setTextureUtils(t){this.textureUtils=t}parse(t,n,a,o){this.parseAsync(t,o).then(n).catch(a)}async parseAsync(t,n={}){n=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},n);const a=new Set,o={},c="model.usda";o[c]=null;const u=Jw(t,n.animations);n.animationTracks=u;const f=new di("Root","Xform"),d=new di("Scenes","Scope");d.addMetadata("kind",'"sceneLibrary"'),f.addChild(d);const p="Scene",g=new di(p,"Xform");g.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${p}"`]),g.addMetadata("sceneName",`"${p}"`),n.includeAnchoringProperties&&(g.addProperty(`token preliminary:anchoring:type = "${n.ar.anchoring.type}"`),g.addProperty(`token preliminary:planeAnchoring:alignment = "${n.ar.planeAnchoring.alignment}"`)),d.addChild(g);let v;const _={},x={};t.isScene?Wx(t,g,_,a,o,n):Xx(t,g,_,a,o,n);const b=lR(_,x,n.quickLookCompatible),A=u.size>0?{fps:n.animationFrameRate,endTimeCode:tR(n.animations)*n.animationFrameRate}:null;v=kx(A)+`
`+f.toString()+`

`+b.toString(),o[c]=Wu(v),v=null;for(const y in x){let D=x[y];if(D.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");D=await this.textureUtils.decompress(D)}const L=$w(D.image,D.flipY,n.maxTextureSize),w=D.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",I=await new Promise(U=>L.toBlob(U,w));o[`textures/Texture_${y}.${Vx(D)}`]=new Uint8Array(await I.arrayBuffer())}let M=0;for(const y in o){const D=o[y],L=34+y.length;M+=L;const w=M&63;if(w!==4){const I=64-w,U=new Uint8Array(I);o[y]=[D,{extra:{12345:U}}]}M=D.length}return jw(o,{level:0})}}function Gx(s,t){let n=s.name;return n=n.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(n)&&(n="_"+n),n===""&&(s.isCamera?n="Camera":n="Object"),t.has(n)&&(n=n+"_"+s.id),t.add(n),n}function Vx(s){return s.userData.mimeType==="image/jpeg"?"jpg":"png"}function $w(s,t,n){if(typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&s instanceof ImageBitmap){const a=n/Math.max(s.width,s.height),o=document.createElement("canvas");o.width=s.width*Math.min(1,a),o.height=s.height*Math.min(1,a);const c=o.getContext("2d");return t===!0&&(c.translate(0,o.height),c.scale(1,-1)),c.drawImage(s,0,0,o.width,o.height),o}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const Re=7;function kx(s=null){return`#usda 1.0
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
`}function Jw(s,t){const n=new Map;for(let a=0;a<t.length;a++){const o=t[a];for(let c=0;c<o.tracks.length;c++){const u=o.tracks[c],f=Be.parseTrackName(u.name),d=Be.findNode(s,f.nodeName);if(d==null)continue;const p=f.propertyName;if(p!=="position"&&p!=="quaternion"&&p!=="scale")continue;let g=n.get(d);g===void 0&&(g={},n.set(d,g)),g[p]=u}}return n}function tR(s){let t=0;for(let n=0;n<s.length;n++)s[n].duration>t&&(t=s[n].duration);return t}function P_(s,t,n,a){const o=n.times,c=n.values,u=[];for(let f=0;f<o.length;f++){const d=f*3;u.push(`${(o[f]*a).toPrecision(Re)}: (${c[d].toPrecision(Re)}, ${c[d+1].toPrecision(Re)}, ${c[d+2].toPrecision(Re)})`)}return`${t} ${s}.timeSamples = {
	${u.join(`,
	`)},
}`}function eR(s,t){const n=s.times,a=s.values,o=[];for(let c=0;c<n.length;c++){const u=c*4;o.push(`${(n[c]*t).toPrecision(Re)}: (${a[u+3].toPrecision(Re)}, ${a[u].toPrecision(Re)}, ${a[u+1].toPrecision(Re)}, ${a[u+2].toPrecision(Re)})`)}return`quatf xformOp:orient.timeSamples = {
	${o.join(`,
	`)},
}`}function Wx(s,t,n,a,o,c){for(let u=0,f=s.children.length;u<f;u++)Xx(s.children[u],t,n,a,o,c)}function Xx(s,t,n,a,o,c){if(s.visible===!1&&c.onlyVisible===!0)return;let u;if(s.isMesh){const f=s.geometry,d=Array.isArray(s.material),p=d?s.material:[s.material];for(let v=0;v<p.length;v++){const _=p[v];_.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),_.uuid in n||(n[_.uuid]=_)}const g=p.map(v=>n[v.uuid]);if(d===!1){const v=`geometries/Geometry_${f.id}.usda`;if(!(v in o)){const _=aR(f);o[v]=Wu(kx()+`
`+_.toString())}}u=nR(s,f,g,a,c)}else s.isCamera?u=hR(s,a,c):u=Yx(s,a,c);t.addChild(u),Wx(s,u,n,a,o,c)}function qx(s,t,n){const a=n.animationTracks.get(t),o=t.pivot!==null;if(!o&&a===void 0){const p=iR(t.matrix);s.addProperty(`matrix4d xformOp:transform = ${p}`),s.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}const c=n.animationFrameRate,u=t.position,f=t.quaternion,d=t.scale;if(a!==void 0&&a.position!==void 0?s.addProperty(P_("xformOp:translate","float3",a.position,c)):s.addProperty(`float3 xformOp:translate = (${u.x.toPrecision(Re)}, ${u.y.toPrecision(Re)}, ${u.z.toPrecision(Re)})`),o){const p=t.pivot;s.addProperty(`float3 xformOp:translate:pivot = (${p.x.toPrecision(Re)}, ${p.y.toPrecision(Re)}, ${p.z.toPrecision(Re)})`)}a!==void 0&&a.quaternion!==void 0?s.addProperty(eR(a.quaternion,c)):s.addProperty(`quatf xformOp:orient = (${f.w.toPrecision(Re)}, ${f.x.toPrecision(Re)}, ${f.y.toPrecision(Re)}, ${f.z.toPrecision(Re)})`),a!==void 0&&a.scale!==void 0?s.addProperty(P_("xformOp:scale","float3",a.scale,c)):s.addProperty(`float3 xformOp:scale = (${d.x.toPrecision(Re)}, ${d.y.toPrecision(Re)}, ${d.z.toPrecision(Re)})`),o?s.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):s.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function Yx(s,t,n){const a=Gx(s,t);s.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s);const o=new di(a,"Xform");return qx(o,s,n),o}function nR(s,t,n,a,o){const c=Yx(s,a,o);return n.length===1?(c.addMetadata("prepend references",`@./geometries/Geometry_${t.id}.usda@</Geometry>`),c.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),c.addProperty(`rel material:binding = </Materials/Material_${n[0].id}>`)):c.addChild(Zx(t,n)),c}function iR(s){const t=s.elements;return`( ${Au(t,0)}, ${Au(t,4)}, ${Au(t,8)}, ${Au(t,12)} )`}function Au(s,t){return`(${s[t+0]}, ${s[t+1]}, ${s[t+2]}, ${s[t+3]})`}function aR(s){const t=new di("Geometry"),n=Zx(s);return t.addChild(n),t}function Zx(s,t=null){const n="Geometry",a=s.attributes,o=a.position.count,c=new di(n,"Mesh");c.addProperty(`int[] faceVertexCounts = [${sR(s)}]`),c.addProperty(`int[] faceVertexIndices = [${rR(s)}]`),c.addProperty(`normal3f[] normals = [${Xd(a.normal,o)}]`,['interpolation = "vertex"']),c.addProperty(`point3f[] points = [${Xd(a.position,o)}]`);for(let f=0;f<4;f++){const d=f>0?f:"",p=a["uv"+d];p!==void 0&&c.addProperty(`texCoord2f[] primvars:st${d} = [${oR(p)}]`,['interpolation = "vertex"'])}const u=a.color;if(u!==void 0&&c.addProperty(`color3f[] primvars:displayColor = [${Xd(u,o)}]`,['interpolation = "vertex"']),c.addProperty('uniform token subdivisionScheme = "none"'),t!==null){const f=s.groups,d=(s.index!==null?s.index.count:a.position.count)/3;for(let p=0;p<f.length;p++){const g=f[p],v=t[g.materialIndex];if(v===void 0)continue;const _=Math.floor(g.start/3),x=Math.min(_+Math.floor(g.count/3),d),b=[];for(let M=_;M<x;M++)b.push(M);const A=new di(`subset_${p}`,"GeomSubset");A.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),A.addProperty('uniform token elementType = "face"'),A.addProperty('uniform token familyName = "materialBind"'),A.addProperty(`int[] indices = [${b.join(", ")}]`),A.addProperty(`rel material:binding = </Materials/Material_${v.id}>`),c.addChild(A)}}return c}function sR(s){const t=s.index!==null?s.index.count:s.attributes.position.count;return Array(t/3).fill(3).join(", ")}function rR(s){const t=s.index,n=[];if(t!==null)for(let a=0;a<t.count;a++)n.push(t.getX(a));else{const a=s.attributes.position.count;for(let o=0;o<a;o++)n.push(o)}return n.join(", ")}function Xd(s,t){if(s===void 0)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");const n=[];for(let a=0;a<s.count;a++){const o=s.getX(a),c=s.getY(a),u=s.getZ(a);n.push(`(${o.toPrecision(Re)}, ${c.toPrecision(Re)}, ${u.toPrecision(Re)})`)}return n.join(", ")}function oR(s){const t=[];for(let n=0;n<s.count;n++){const a=s.getX(n),o=s.getY(n);t.push(`(${a.toPrecision(Re)}, ${1-o.toPrecision(Re)})`)}return t.join(", ")}function lR(s,t,n=!1){const a=new di("Materials");for(const o in s){const c=s[o];a.addChild(cR(c,t,n))}return a}function cR(s,t,n=!1){const a=new di(`Material_${s.id}`,"Material");function o(u,f,d){const p=u.source.id+"_"+u.flipY;t[p]=u;const g=u.channel>0?"st"+u.channel:"st",v={1e3:"repeat",1001:"clamp",1002:"mirror"},_=u.repeat.clone(),x=u.offset.clone(),b=u.rotation,A=Math.sin(b),M=Math.cos(b);x.y=1-x.y-_.y,n?(x.x=x.x/_.x,x.y=x.y/_.y,x.x+=A/_.x,x.y+=M-1):(x.x+=A*_.x,x.y+=(1-M)*_.y);const y=new di(`PrimvarReader_${f}`,"Shader");y.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),y.addProperty("float2 inputs:fallback = (0.0, 0.0)"),y.addProperty(`string inputs:varname = "${g}"`),y.addProperty("float2 outputs:result");const D=new di(`Transform2d_${f}`,"Shader");D.addProperty('uniform token info:id = "UsdTransform2d"'),D.addProperty(`float2 inputs:in.connect = </Materials/Material_${s.id}/PrimvarReader_${f}.outputs:result>`),D.addProperty(`float inputs:rotation = ${(b*(180/Math.PI)).toFixed(Re)}`),D.addProperty(`float2 inputs:scale = ${I_(_)}`),D.addProperty(`float2 inputs:translation = ${I_(x)}`),D.addProperty("float2 outputs:result");const L=new di(`Texture_${u.id}_${f}`,"Shader");if(L.addProperty('uniform token info:id = "UsdUVTexture"'),L.addProperty(`asset inputs:file = @textures/Texture_${p}.${Vx(u)}@`),L.addProperty(`float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${f}.outputs:result>`),d!==void 0){const w=f==="diffuse"?s.opacity:1;L.addProperty(`float4 inputs:scale = ${uR(d,w)}`)}if(f==="normal"){const w=s.normalScale.x;L.addProperty(`float4 inputs:scale = (${2*w}, ${2*w}, 2, 1)`),L.addProperty(`float4 inputs:bias = (${-w}, ${-w}, -1, 0)`)}return L.addProperty(`token inputs:sourceColorSpace = "${u.colorSpace===Gi?"raw":"sRGB"}"`),L.addProperty(`token inputs:wrapS = "${v[u.wrapS]}"`),L.addProperty(`token inputs:wrapT = "${v[u.wrapT]}"`),L.addProperty("float outputs:r"),L.addProperty("float outputs:g"),L.addProperty("float outputs:b"),L.addProperty("float3 outputs:rgb"),(s.transparent||s.alphaTest>0)&&L.addProperty("float outputs:a"),[y,D,L]}s.side===Qi&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",s);const c=new di("PreviewSurface","Shader");if(c.addProperty('uniform token info:id = "UsdPreviewSurface"'),s.map!==null?(c.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`),s.transparent?c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`):s.alphaTest>0&&(c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`),c.addProperty(`float inputs:opacityThreshold = ${s.alphaTest}`)),o(s.map,"diffuse",s.color).forEach(f=>a.addChild(f))):c.addProperty(`color3f inputs:diffuseColor = ${O_(s.color)}`),s.emissive){const u=s.emissiveIntensity??1;if(s.emissiveMap){c.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`);const f=new se(s.emissive.r*u,s.emissive.g*u,s.emissive.b*u);o(s.emissiveMap,"emissive",f).forEach(p=>a.addChild(p))}else s.emissive.getHex()>0&&c.addProperty(`color3f inputs:emissiveColor = ${O_(s.emissive)}`)}if(s.normalMap&&(c.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`),o(s.normalMap,"normal").forEach(f=>a.addChild(f))),s.aoMap){c.addProperty(`float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`);const u=s.aoMapIntensity??1,f=new se(u,u,u);o(s.aoMap,"occlusion",f).forEach(p=>a.addChild(p))}if(s.roughnessMap){c.addProperty(`float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`);const u=new se(s.roughness,s.roughness,s.roughness);o(s.roughnessMap,"roughness",u).forEach(d=>a.addChild(d))}else c.addProperty(`float inputs:roughness = ${s.roughness??1}`);if(s.metalnessMap){c.addProperty(`float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`);const u=new se(s.metalness,s.metalness,s.metalness);o(s.metalnessMap,"metallic",u).forEach(d=>a.addChild(d))}else c.addProperty(`float inputs:metallic = ${s.metalness??0}`);if(s.alphaMap?(c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`),c.addProperty("float inputs:opacityThreshold = 0.0001"),o(s.alphaMap,"opacity").forEach(f=>a.addChild(f))):c.addProperty(`float inputs:opacity = ${s.opacity}`),s.isMeshPhysicalMaterial){if(s.clearcoatMap!==null){c.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatMap.id}_clearcoat.outputs:r>`);const u=new se(s.clearcoat,s.clearcoat,s.clearcoat);o(s.clearcoatMap,"clearcoat",u).forEach(d=>a.addChild(d))}else c.addProperty(`float inputs:clearcoat = ${s.clearcoat}`);if(s.clearcoatRoughnessMap!==null){c.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);const u=new se(s.clearcoatRoughness,s.clearcoatRoughness,s.clearcoatRoughness);o(s.clearcoatRoughnessMap,"clearcoatRoughness",u).forEach(d=>a.addChild(d))}else c.addProperty(`float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`);c.addProperty(`float inputs:ior = ${s.ior}`)}return c.addProperty("int inputs:useSpecularWorkflow = 0"),c.addProperty("token outputs:surface"),a.addChild(c),a.addProperty(`token outputs:surface.connect = </Materials/Material_${s.id}/PreviewSurface.outputs:surface>`),a}function O_(s){return`(${s.r}, ${s.g}, ${s.b})`}function uR(s,t=1){return`(${s.r}, ${s.g}, ${s.b}, ${t})`}function I_(s){return`(${s.x}, ${s.y})`}function hR(s,t,n){const a=Gx(s,t);s.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s);const o=new di(a,"Camera");qx(o,s,n);const c=s.isOrthographicCamera?"orthographic":"perspective";o.addProperty(`token projection = "${c}"`);const u=`(${s.near.toPrecision(Re)}, ${s.far.toPrecision(Re)})`;o.addProperty(`float2 clippingRange = ${u}`);let f;s.isOrthographicCamera?f=((Math.abs(s.left)+Math.abs(s.right))*10).toPrecision(Re):f=s.getFilmWidth().toPrecision(Re),o.addProperty(`float horizontalAperture = ${f}`);let d;if(s.isOrthographicCamera?d=((Math.abs(s.top)+Math.abs(s.bottom))*10).toPrecision(Re):d=s.getFilmHeight().toPrecision(Re),o.addProperty(`float verticalAperture = ${d}`),s.isPerspectiveCamera){const p=s.getFocalLength().toPrecision(Re);o.addProperty(`float focalLength = ${p}`);const g=s.focus.toPrecision(Re);o.addProperty(`float focusDistance = ${g}`)}return o}class fR{texture;canvas;ctx;size;field;img;beads=[];detached=[];absorb=.5;activeUntil=0;dirty=!1;constructor(t=512){this.size=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.field=new Float32Array(t*t),this.img=this.ctx.createImageData(t,t);const n=this.img.data;for(let a=0;a<t*t;a++)n[a*4]=255,n[a*4+3]=0;this.ctx.putImageData(this.img,0,0),this.texture=new Il(this.canvas),this.texture.colorSpace=Gi,this.texture.wrapS=this.texture.wrapT=fa,this.texture.minFilter=An,this.texture.magFilter=An,this.texture.generateMipmaps=!1}get active(){return this.beads.length>0||performance.now()<this.activeUntil}getDroplets(){return this.beads}addDrop(t,n,a){this.beads.push({u:t,v:n,r:a,life:1}),this.absorb>.01&&this.stamp(t,n,a*(1.2+this.absorb*1.8),this.absorb*(.3+this.absorb*.4)),this.wake()}clear(){this.beads=[],this.detached.length=0,this.field.fill(0),this.flush(),this.activeUntil=0}splash(t,n=16){for(let a=0;a<n;a++){const o=.1+Math.random()*.8,c=.1+Math.random()*.78,u=(.013+Math.random()*.02)*(1-t.absorb*.35);this.addDrop(o,c,u)}}wake(){this.activeUntil=performance.now()+15e3}stamp(t,n,a,o){if(o<=0)return;const c=this.size,u=t*c,f=n*c,d=Math.max(2.5,a*c),p=Math.max(0,Math.floor(u-d)),g=Math.min(c-1,Math.ceil(u+d)),v=Math.max(0,Math.floor(f-d)),_=Math.min(c-1,Math.ceil(f+d)),x=this.field;for(let b=v;b<=_;b++)for(let A=p;A<=g;A++){const M=A-u,y=b-f,D=Math.sqrt(M*M+y*y);if(D>=d)continue;const L=1-D/d,w=L*L*(3-2*L),I=b*c+A,U=x[I]+o*w;x[I]=U>1?1:U}this.dirty=!0}flush(){const t=this.img.data,n=this.field;for(let a=0;a<n.length;a++)t[a*4+3]=n[a]*255|0;this.ctx.putImageData(this.img,0,0),this.texture.needsUpdate=!0,this.dirty=!1}update(t,n,a){this.absorb=n.absorb,this.beads.length&&this.wake();const o=Math.exp(-t*Math.max(.3,1-n.absorb*.67)),c=this.field;let u=!1;for(let v=0;v<c.length;v++){const _=c[v];if(_>0){const x=_*o;c[v]=x<.002?0:x,u=!0}}u&&(this.dirty=!0);const f=n.absorb,d=.02,p=.05+f*.5;for(const v of this.beads){const _=a(Math.min(1,v.u+d),v.v),x=a(Math.max(0,v.u-d),v.v),b=a(v.u,Math.min(1,v.v+d)),A=a(v.u,Math.max(0,v.v-d)),M=_-x,y=b-A,D=Math.hypot(M,y)||1e-5,L=Math.min(1,D*30),w=Math.max(.08,.2+(1-f)*1.8),I=t*(.003+L*.075)*w;v.u-=M/D*I,v.v-=y/D*I,f>.01&&this.stamp(v.u,v.v,v.r*(1+f*1.8),Math.min(.4,t*f*(.8+f*1.8))),v.life-=t*p,v.r*=Math.max(0,1-t*(.02+f*.75))}const g=[];for(const v of this.beads)if(!(v.life<=0||v.r<.0035)){if(v.u<=.015||v.u>=.985||v.v<=.015||v.v>=.985){this.detached.push({u:Math.max(0,Math.min(1,v.u)),v:Math.max(0,Math.min(1,v.v)),r:v.r});continue}g.push(v)}this.beads=g,this.dirty&&this.flush()}}const dR={AgX:ho,ACES:qu,Neutral:Yu},wu=5.4,pR=72,F_=new se(16777215),B_=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,mR=s=>1-Math.pow(1-s,3),z_={Maximum:{pr:2,samples:8,segs:96},High:{pr:2,samples:8,segs:72},Balanced:{pr:1.5,samples:4,segs:56},Performance:{pr:1,samples:0,segs:40}},gR=["Maximum","High","Balanced","Performance"],bl=96,El=-1,vR=4,H_={Studio:{rimA:["#c6d6e4",.5],rimB:["#efe4d6",.45],key:["#ffffff",.9],env:.62,exposure:.8,bg:"#f5f5f5"},Daylight:{rimA:["#dbe8ff",.45],rimB:["#fff3e2",.7],key:["#fffaf3",1.05],env:.88,exposure:.94,bg:"#f6f7f8"},Store:{rimA:["#ffe8cf",.5],rimB:["#fff2e3",.6],key:["#fff0dc",.95],env:.72,exposure:.86,bg:"#f2f0ec"},Night:{rimA:["#93b2ff",.55],rimB:["#3d4b6a",.4],key:["#cdd6ea",.5],env:.34,exposure:.62,bg:"#121420"}},_R=["Studio","Daylight","Store","Night"],xR={uniforms:{tDiffuse:{value:null},uAmount:{value:.08},uTime:{value:0}},vertexShader:`
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
  `};class yR{constructor(t){this.host=t;const n=t.clientWidth||window.innerWidth,a=t.clientHeight||window.innerHeight;this.renderer=new jA({antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(n,a),this.renderer.toneMapping=ho,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement),this.renderer.xr.enabled=!0,this.scene=new lx,this.scene.background=this.background,this.camera=new wi(38,n/a,.1,200);{const x=new X(...wl.camera),b=new X(...wl.target);x.sub(b).multiplyScalar(.56).add(b),this.camera.position.copy(x),this.defaultCamPos.copy(x)}const o=new z0(this.renderer),c=o.fromScene(new hw,.04).texture;this.scene.environment=c,o.dispose(),this.rimA=new Id(16777215,.5),this.rimA.position.set(-4,2.5,-3),this.rimB=new Id(16777215,.5),this.rimB.position.set(4.5,-1.5,-2.5),this.key=new Id(16777215,.9),this.key.position.set(1.5,3,4),this.scene.add(this.rimA,this.rimB,this.key),this.surface=new Nw;const u=Uw(this.surface.texture);this.holoMaterial=u.material,this.holoUniforms=u.uniforms,this.holoUniforms.uWetMap.value=this.moisture.texture;const f=this.renderer.capabilities.getMaxAnisotropy();this.holoMaterial.roughnessMap&&(this.holoMaterial.roughnessMap.anisotropy=f),this.surface.texture.anisotropy=f,this.clothMesh=new Tn(void 0,this.holoMaterial),this.clothMesh.frustumCulled=!1,this.clothMesh.visible=!1,this.buildCloth(1),this.scene.add(this.clothMesh);const d=[new Bt(0,0),new Bt(.58,.02),new Bt(.86,.1),new Bt(.98,.24),new Bt(1,.42),new Bt(.92,.63),new Bt(.73,.81),new Bt(.44,.94),new Bt(0,1)],p=new mp(d,32);p.computeVertexNormals();const g=new gx({color:16777215,roughness:.02,metalness:0,transmission:.95,ior:1.333,thickness:.18,transparent:!0,clearcoat:1,clearcoatRoughness:.02,specularIntensity:1,envMapIntensity:1.5,depthWrite:!1});this.dropletMesh=new I0(p,g,bl),this.dropletMesh.frustumCulled=!1,this.dropletMesh.visible=!1,this.dropletMesh.renderOrder=3,this.scene.add(this.dropletMesh),this.airDropMesh=new I0(new gp(1,20,14),g,bl),this.airDropMesh.frustumCulled=!1,this.airDropMesh.visible=!1,this.airDropMesh.renderOrder=3,this.scene.add(this.airDropMesh);const v=this.renderer.domElement;v.addEventListener("pointerdown",this.onPointerDown),v.addEventListener("pointermove",this.onPointerMove),v.addEventListener("pointerup",this.onPointerUp),v.addEventListener("pointercancel",this.onPointerUp),v.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onWindowBlur),this.controls=new $A(this.camera,v),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=1.6,this.controls.maxDistance=30,this.controls.target.set(...wl.target),this.controls.update(),this.setLighting("Studio");const _=new Xn(n,a,{samples:8,type:ii});this.composer=new gw(this.renderer,_),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer.addPass(new vw(this.scene,this.camera)),this.dofPass=new Ow(this.scene,this.camera),this.dofPass.enabled=!1,this.composer.addPass(this.dofPass),this.bloomPass=new go(new Bt(n,a),.18,.85,1),this.composer.addPass(this.bloomPass),this.composer.addPass(new xw),this.grainPass=new Dx(xR),this.composer.addPass(this.grainPass),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(t),this.renderer.setAnimationLoop(this.tick)}host;renderer;scene;camera;controls;composer;bloomPass;dofPass;grainPass;cavityAttr;sim;clothMesh;clothGeometry;holoUniforms;holoMaterial;surface;bumpSource=null;thumbCache=new WeakMap;perfProfile="High";clothSegments=pR;camRaf=0;gestureRaf=0;defaultCamPos=new X;arSavedScale=1;arSavedPos=new X;bgBackup=null;onARChange=null;xrSelecting=!1;xrInputSource=null;grabInv=new $e;moisture=new fR;wetProps={absorb:.6,bead:.3};dropletMesh;airDropMesh;dropDummy=new Fn;dropQuat=new ga;dropUp=new X(0,1,0);dropNormalMat=new he;surfP=new X;surfN=new X;fallingDrops=[];incomingDrops=[];rimA;rimB;key;currentPR=Math.min(window.devicePixelRatio,2);background=new se("#0b0c12");clock=new J2;elapsed=0;raycaster=new $2;pointerNdc=new Bt;dragPlane=new ua;grabbing=!1;grabPointerId=null;pointerGrabs=new Map;downPointers=new Set;lastTap={t:0,x:0,y:0};threeTapT=0;draggingDecal=!1;decalGrabOffset={u:0,v:0};pickingFocus=!1;focusVertex=null;pickReleaseId=null;spaceHeld=!1;focusTmp=new X;editMode=!1;prevUseImage=!1;hoverCursor="default";resizeObserver;params=null;disposed=!1;onDecalSelect=null;onImagesChanged=null;clothAspect=1;buildCloth(t){this.clothAspect=t;const n=t>=1?wu:wu*t,a=t>=1?wu/t:wu,o=this.clothSegments,c=t>=1?o:Math.max(10,Math.round(o*t)),u=t>=1?Math.max(10,Math.round(o/t)):o;this.sim=new Tw(n,a,c,u);const f=new Hl(n,a,c,u),d=new Ui(this.sim.positions,3);d.setUsage(M1),f.setAttribute("position",d),this.cavityAttr=new Ui(new Float32Array(this.sim.count),1),this.cavityAttr.setUsage(M1),f.setAttribute("aCavity",this.cavityAttr),f.computeVertexNormals();const p=this.clothMesh.geometry;this.clothMesh.geometry=f,this.clothGeometry=f,p&&p.dispose(),this.holoUniforms.uClothSize.value.set(n,a),this.focusVertex=null,this.cancelInteraction()}cancelInteraction(){this.grabPointerId!==null&&this.releaseCapture(this.grabPointerId);for(const t of this.pointerGrabs.keys())this.releaseCapture(t);this.pointerGrabs.clear(),this.downPointers.clear(),this.threeTapT=0,this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls&&(this.controls.enabled=!0)}applyParams(t){this.params=t,t.performance!==this.perfProfile&&this.applyPerfProfile(t.performance);const n=this.holoMaterial;n.color.set(t.material.baseColor),n.roughness=t.material.roughness,n.metalness=t.material.metalness,n.clearcoat=t.material.clearcoat,n.clearcoatRoughness=t.material.coatRoughness,n.sheen=t.material.sheen,n.sheenColor.set(t.material.baseColor).lerp(F_,.5),n.iridescence=0,n.normalScale.set(t.material.bump,t.material.bump),n.normalMap&&n.normalMap.repeat.set(t.material.bumpTiling,t.material.bumpTiling);const a=this.holoUniforms;a.uHoloIntensity.value=0,a.uSparkle.value=0,a.uSpecTint.value=0,a.uSaturation.value=0;const o=t.images??{opacity:1,cornerRadius:0,edit:!1,useImage:!1,scale:0,rotation:0};a.uSurfaceOpacity.value=o.opacity,a.uCornerRound.value=o.cornerRadius;const c=dR[t.render.toneMapping]??ho;this.renderer.toneMapping!==c&&(this.renderer.toneMapping=c),this.bloomPass.strength=t.render.bloom,this.bloomPass.threshold=t.render.bloomThreshold,this.grainPass.uniforms.uAmount.value=t.render.noise,a.uCavityAmount.value=t.render.occlusion?t.render.occlusionStrength:0,this.dofPass.enabled=t.render.dof,this.dofPass.setParams(t.render.dofAperture*.01,t.render.dofBlur,t.render.dofRange*.5),this.editMode=o.edit,this.controls.enableZoom=!this.editMode,this.prevUseImage&&!o.useImage&&this.surface.clothImage&&this.removeClothImage(),this.prevUseImage=o.useImage;const u=this.surface.selected;u&&(u.scale!==o.scale||u.rotation!==o.rotation)&&(u.scale=o.scale,u.rotation=o.rotation,this.surface.redraw())}applyFabric(t){const n=this.holoMaterial.normalMap,a=Rw(t);if(a.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.params){const o=this.params.material.bumpTiling;a.repeat.set(o,o)}this.holoMaterial.normalMap=a,this.holoMaterial.needsUpdate=!0,n&&n.dispose()}resetCloth(){this.sim.reset(),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals(),this.moisture.clear(),this.fallingDrops.length=0,this.incomingDrops.length=0}setLive(t){this.params&&(t.stiffness!=null&&(this.params.physics.stiffness=t.stiffness),t.viscosity!=null&&(this.params.physics.viscosity=t.viscosity),t.smoothing!=null&&(this.params.physics.smoothing=t.smoothing));const n=this.holoMaterial;t.bump!=null&&n.normalScale.set(t.bump,t.bump),t.sheen!=null&&(n.sheen=t.sheen),t.roughness!=null&&(n.roughness=t.roughness)}setWet(t){this.wetProps=t,this.holoUniforms.uWetDark.value=Math.min(.92,.2+t.absorb*.4)}splash(){const t=Math.max(8,Math.round(44*(1-this.wetProps.absorb*.45))),n=this.camera.position,a=new X;this.camera.getWorldDirection(a);const o=new X(0,1,0),c=new X().crossVectors(a,o).normalize();for(let u=0;u<t;u++){const f=.08+Math.random()*.84,d=.08+Math.random()*.82,g=(.005+Math.pow(Math.random(),3)*.02)*(1-this.wetProps.absorb*.3),v=n.clone().addScaledVector(o,.7+Math.random()*.6).addScaledVector(c,(Math.random()-.5)*1.4).addScaledVector(a,.1+Math.random()*.3);this.incomingDrops.push({u:f,v:d,r:g,start:v,pos:v.clone(),t:0,dur:.4+Math.random()*.35})}}splashAt(t,n){const o=this.camera.position,c=new X;this.camera.getWorldDirection(c);const u=new X(0,1,0),f=new X().crossVectors(c,u).normalize();for(let d=0;d<7;d++){const p=Math.max(.03,Math.min(.97,t+(Math.random()-.5)*.12)),g=Math.max(.03,Math.min(.97,n+(Math.random()-.5)*.12)),_=(.006+Math.pow(Math.random(),2)*.016)*(1-this.wetProps.absorb*.3),x=o.clone().addScaledVector(u,.6+Math.random()*.5).addScaledVector(f,(Math.random()-.5)*.8).addScaledVector(c,.1+Math.random()*.25);this.incomingDrops.push({u:p,v:g,r:_,start:x,pos:x.clone(),t:0,dur:.32+Math.random()*.25})}}recenterView(){const t=this.camera.position.clone(),n=this.controls.target.clone(),a=this.defaultCamPos.clone(),o=new X(...wl.target);this.animateCam(c=>{const u=B_(c);this.camera.position.lerpVectors(t,a,u),this.controls.target.lerpVectors(n,o,u)},620)}updateDroplets(t){const n=this.dropletMesh;this.clothMesh.updateWorldMatrix(!0,!1),this.dropNormalMat.getNormalMatrix(this.clothMesh.matrixWorld);const a=Math.min(this.sim.width,this.sim.height)*this.clothMesh.scale.x,o=this.moisture.detached;for(let g=0;g<o.length;g++){const v=o[g];this.sampleSurface(v.u,v.v),this.surfP.applyMatrix4(this.clothMesh.matrixWorld),this.fallingDrops.push({pos:this.surfP.clone(),vel:new X((Math.random()-.5)*.15,-.25,(Math.random()-.5)*.15),rW:v.r*a,life:1.5})}if(o.length=0,this.fallingDrops.length){const g=4.5*Math.max(.2,this.clothMesh.scale.x);for(const v of this.fallingDrops)v.vel.y-=g*t,v.pos.addScaledVector(v.vel,t),v.life-=t;this.fallingDrops=this.fallingDrops.filter(v=>v.life>0)}if(this.incomingDrops.length){const g=[];for(const v of this.incomingDrops){v.t+=t/v.dur,this.sampleSurface(v.u,v.v),this.surfP.applyMatrix4(this.clothMesh.matrixWorld);const _=Math.min(1,v.t*v.t);v.pos.lerpVectors(v.start,this.surfP,_),v.t>=1?this.moisture.addDrop(v.u,v.v,v.r):g.push(v)}this.incomingDrops=g}const c=this.moisture.getDroplets(),u=this.airDropMesh;if(c.length===0&&this.fallingDrops.length===0&&this.incomingDrops.length===0){n.visible&&(n.visible=!1),u.visible&&(u.visible=!1);return}let f=0;const d=Math.min(c.length,bl);for(let g=0;g<d;g++){const v=c[g];this.sampleSurface(v.u,v.v),this.surfP.applyMatrix4(this.clothMesh.matrixWorld),this.surfN.applyMatrix3(this.dropNormalMat).normalize();const _=v.r*a;this.dropQuat.setFromUnitVectors(this.dropUp,this.surfN);const x=.72+this.wetProps.bead*.5,b=1.05-this.wetProps.bead*.12;this.dropDummy.position.copy(this.surfP).addScaledVector(this.surfN,-_*.02),this.dropDummy.quaternion.copy(this.dropQuat),this.dropDummy.scale.set(_*b,_*x,_*b),this.dropDummy.updateMatrix(),n.setMatrixAt(f++,this.dropDummy.matrix)}n.count=f,n.visible=f>0,f>0&&(n.instanceMatrix.needsUpdate=!0);let p=0;for(let g=0;g<this.fallingDrops.length&&p<bl;g++){const v=this.fallingDrops[g];this.dropDummy.position.copy(v.pos),this.dropDummy.quaternion.identity(),this.dropDummy.scale.setScalar(v.rW),this.dropDummy.updateMatrix(),u.setMatrixAt(p++,this.dropDummy.matrix)}for(let g=0;g<this.incomingDrops.length&&p<bl;g++){const v=this.incomingDrops[g];this.dropDummy.position.copy(v.pos),this.dropDummy.quaternion.identity(),this.dropDummy.scale.setScalar(v.r*a),this.dropDummy.updateMatrix(),u.setMatrixAt(p++,this.dropDummy.matrix)}u.count=p,u.visible=p>0,p>0&&(u.instanceMatrix.needsUpdate=!0)}sampleSurface(t,n){const a=this.sim.cols,o=this.sim.rows,c=t*(a-1),u=n*(o-1),f=Math.min(a-2,Math.max(0,Math.floor(c))),d=Math.min(o-2,Math.max(0,Math.floor(u))),p=c-f,g=u-d,v=this.sim.positions,_=this.clothGeometry.attributes.normal.array,x=(b,A)=>{const M=(d*a+f)*3+A,y=(d*a+f+1)*3+A,D=((d+1)*a+f)*3+A,L=((d+1)*a+f+1)*3+A;return(b[M]*(1-p)+b[y]*p)*(1-g)+(b[D]*(1-p)+b[L]*p)*g};this.surfP.set(x(v,0),x(v,1),x(v,2)),this.surfN.set(x(_,0),x(_,1),x(_,2)).normalize()}heightAt=(t,n)=>{const a=this.sim.cols,o=this.sim.rows,c=t*(a-1),u=n*(o-1),f=Math.min(a-2,Math.max(0,Math.floor(c))),d=Math.min(o-2,Math.max(0,Math.floor(u))),p=c-f,g=u-d,v=this.sim.positions,_=(y,D)=>v[(D*a+y)*3+1],x=_(f,d),b=_(f+1,d),A=_(f,d+1),M=_(f+1,d+1);return(x*(1-p)+b*p)*(1-g)+(A*(1-p)+M*p)*g};setColor(t){this.holoMaterial.color.set(t),this.holoMaterial.sheenColor.set(t).lerp(F_,.5)}patternTex=null;setPattern(t){this.patternTex&&this.patternTex!==t&&this.patternTex.dispose(),this.patternTex=t,t?(t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=t,this.holoUniforms.uSurfaceOpacity.value=1):this.holoUniforms.uSurfaceMap.value=this.surface.texture}setSlideOffset(t){this.clothMesh.position.x=t}getSlideOffset(){return this.clothMesh.position.x}async startAR(t){const n=navigator.xr;if(!n)return!1;try{if(!await n.isSessionSupported("immersive-ar"))return!1;const a=await n.requestSession("immersive-ar",{optionalFeatures:["dom-overlay","local-floor"],domOverlay:{root:t}});return await this.renderer.xr.setSession(a),this.arSavedPos.copy(this.clothMesh.position),this.arSavedScale=this.clothMesh.scale.x,this.clothMesh.scale.setScalar(.12),this.clothMesh.position.set(0,1.1,-.9),this.bgBackup=this.scene.background,this.scene.background=null,this.onARChange?.(!0),a.addEventListener("end",this.handleAREnd),a.addEventListener("selectstart",this.onXRSelectStart),a.addEventListener("selectend",this.onXRSelectEnd),!0}catch{return!1}}endAR(){this.renderer.xr.getSession()?.end()}handleAREnd=()=>{this.xrSelecting=!1,this.xrInputSource=null,this.grabbing&&(this.grabbing=!1,this.sim.endGrab(El)),this.scene.background=this.bgBackup,this.clothMesh.scale.setScalar(this.arSavedScale),this.clothMesh.position.copy(this.arSavedPos),this.camera.position.copy(this.defaultCamPos),this.controls.update(),this.onARChange?.(!1)};onXRSelectStart=t=>{this.xrInputSource=t.inputSource,this.xrSelecting=!0};onXRSelectEnd=()=>{this.xrSelecting=!1,this.xrInputSource=null,this.grabbing&&(this.grabbing=!1,this.sim.endGrab(El))};handleXRGrab(t){if(!this.xrSelecting||!this.xrInputSource||!t){this.grabbing&&!this.xrSelecting&&(this.grabbing=!1,this.sim.endGrab(El));return}const n=this.renderer.xr.getReferenceSpace();if(!n)return;const a=t.getPose(this.xrInputSource.targetRaySpace,n);if(!a)return;const o=a.transform.position,c=a.transform.orientation,u=new X(o.x,o.y,o.z),f=new X(0,0,-1).applyQuaternion(new ga(c.x,c.y,c.z,c.w)).normalize();if(this.raycaster.set(u,f),this.grabbing){const d=new X;this.raycaster.ray.intersectPlane(this.dragPlane,d)&&this.sim.moveGrab(d.applyMatrix4(this.grabInv),El)}else{const d=this.raycaster.intersectObject(this.clothMesh,!1);if(d.length===0)return;const p=d[0];this.clothMesh.updateWorldMatrix(!0,!1),this.grabInv.copy(this.clothMesh.matrixWorld).invert();const g=this.params?.physics.grabRadius??.45;if(!this.sim.startGrab(p.point.clone().applyMatrix4(this.grabInv),g,El))return;this.grabbing=!0,this.dragPlane.setFromNormalAndCoplanarPoint(f.clone().negate(),p.point)}}async exportUSDZ(){const t=this.clothMesh.clone();t.geometry=this.clothGeometry.clone(),t.position.set(0,0,0),t.scale.setScalar(.12);const n=new Qw;return n.parseAsync?await n.parseAsync(t):await n.parse(t)}setQuality(t){t!==this.perfProfile&&this.applyPerfProfile(t)}setLighting(t){const n=H_[t]??H_.Studio;this.rimA.color.set(n.rimA[0]),this.rimA.intensity=n.rimA[1],this.rimB.color.set(n.rimB[0]),this.rimB.intensity=n.rimB[1],this.key.color.set(n.key[0]),this.key.intensity=n.key[1],this.scene.environmentIntensity=n.env,this.renderer.toneMappingExposure=n.exposure,this.background.set(n.bg)}getRenderStats(){const t=this.renderer.info;return{calls:t.render.calls,triangles:t.render.triangles,geometries:t.memory.geometries,textures:t.memory.textures,programs:t.programs?.length??0,clothVerts:this.sim.count,segments:this.clothSegments,pixelRatio:this.currentPR}}animateCam(t,n){cancelAnimationFrame(this.camRaf),this.controls.enableDamping=!1;const a=performance.now(),o=c=>{const u=Math.min(1,(c-a)/n);t(u),this.controls.update(),u<1?this.camRaf=requestAnimationFrame(o):this.controls.enableDamping=!0};this.camRaf=requestAnimationFrame(o)}zoomTo(t,n=650){const a=this.controls.target,o=this.camera.position.clone(),c=a.clone().add(this.defaultCamPos.clone().sub(a).multiplyScalar(t));this.animateCam(u=>this.camera.position.lerpVectors(o,c,B_(u)),n)}spin(t=1500){const n=this.controls.target.clone(),a=this.camera.position.clone(),o=a.x-n.x,c=a.z-n.z;this.animateCam(u=>{const f=Math.sin(u*Math.PI)*.6,d=Math.sin(f),p=Math.cos(f);this.camera.position.set(n.x+o*p-c*d,a.y,n.z+o*d+c*p)},t)}demoStretch(){cancelAnimationFrame(this.gestureRaf);const t=this.sim,n=-2,a=-3;t.endGrab(n),t.endGrab(a);const o=Math.floor(t.rows/2),c=o*t.cols+Math.floor(t.cols*.32),u=o*t.cols+Math.floor(t.cols*.68),f=t.positions,d=new X(f[c*3],f[c*3+1],f[c*3+2]),p=new X(f[u*3],f[u*3+1],f[u*3+2]),g=Math.max(t.width,t.height)*.28,v=t.startGrab(d,g,n),_=t.startGrab(p,g,a);if(!v&&!_)return;const x=p.clone().sub(d).normalize(),b=this.camera.position.clone().sub(d.clone().add(p).multiplyScalar(.5)).normalize().multiplyScalar(.25),A=Math.max(t.width,t.height)*.42,M=performance.now(),y=700,D=550,L=w=>{const I=w-M;if(I<y){const U=mR(I/y);v&&t.moveGrab(d.clone().addScaledVector(x,-A*U).addScaledVector(b,U),n),_&&t.moveGrab(p.clone().addScaledVector(x,A*U).addScaledVector(b,U),a),this.gestureRaf=requestAnimationFrame(L)}else I<y+D?this.gestureRaf=requestAnimationFrame(L):(t.endGrab(n),t.endGrab(a))};this.gestureRaf=requestAnimationFrame(L)}poke(){this.sim.poke(1)}addDecal(t){const n=this.surface.addDecal(t);this.onDecalSelect?.(n.scale,n.rotation),this.onImagesChanged?.()}setClothImage(t){const n=t.naturalWidth||t.width||1,a=t.naturalHeight||t.height||1,o=Math.min(3,Math.max(1/3,n/a));this.surface.setClothImage(t),this.surface.setAspect(o)&&this.rebindSurfaceTexture(),this.buildCloth(o),this.onImagesChanged?.()}clearImages(){this.surface.clear(),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}removeClothImage(){this.surface.setClothImage(null),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}get hasClothImage(){return this.surface.clothImage!==null}reveal(){this.clothMesh.visible=!0}thumbnailOf(t){let n=this.thumbCache.get(t);if(n)return n;const a=t.naturalWidth||t.width||1,o=t.naturalHeight||t.height||1,c=96/Math.max(a,o),u=document.createElement("canvas");return u.width=Math.max(1,Math.round(a*c)),u.height=Math.max(1,Math.round(o*c)),u.getContext("2d").drawImage(t,0,0,u.width,u.height),n=u.toDataURL("image/png"),this.thumbCache.set(t,n),n}getClothThumbnail(){return this.surface.clothImage?this.thumbnailOf(this.surface.clothImage):null}getDecalThumbnails(){return this.surface.decals.map(t=>this.thumbnailOf(t.img))}removeDecal(t){const n=this.surface.decals[t];n&&(this.surface.decals.splice(t,1),this.surface.selected===n&&(this.surface.selected=null),this.surface.redraw(),this.onImagesChanged?.())}snapshotImages(){return{clothImage:this.surface.clothImage,decals:this.surface.decals.map(t=>({...t}))}}restoreImages(t){this.surface.clothImage=t.clothImage,this.surface.decals=t.decals.map(a=>({...a})),this.surface.selected=null;let n=1;if(t.clothImage){const a=t.clothImage.naturalWidth||t.clothImage.width||1,o=t.clothImage.naturalHeight||t.clothImage.height||1;n=Math.min(3,Math.max(1/3,a/o))}this.surface.setAspect(n)&&this.rebindSurfaceTexture(),n!==this.clothAspect&&this.buildCloth(n),this.onImagesChanged?.()}applyPerfProfile(t){this.perfProfile=t;const n=window.devicePixelRatio,a=z_[t]??z_.Maximum;this.currentPR=Math.min(n,a.pr);const o=a.samples,c=a.segs,u=this.host.clientWidth||window.innerWidth,f=this.host.clientHeight||window.innerHeight;this.renderer.setPixelRatio(this.currentPR),this.renderer.setSize(u,f),this.composer.setPixelRatio(this.currentPR),this.composer.renderTarget1.samples=o,this.composer.renderTarget2.samples=o,this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer.setSize(u,f),c!==this.clothSegments&&(this.clothSegments=c,this.buildCloth(this.clothAspect))}setBumpMap(t){const n=this.holoMaterial.normalMap;let a=null;if(t){a=Cw(t),a.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=this.params?.material.bumpTiling??3;a.repeat.set(o,o)}this.bumpSource=t,this.holoMaterial.normalMap=a,!!n!=!!a&&(this.holoMaterial.needsUpdate=!0),n&&n.dispose(),this.onImagesChanged?.()}get hasBumpMap(){return this.bumpSource!==null}getBumpThumbnail(){return this.bumpSource?this.thumbnailOf(this.bumpSource):null}rebindSurfaceTexture(){this.surface.texture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=this.surface.texture}exportPNG(t=!1){const n=this.host.clientWidth||window.innerWidth,a=this.host.clientHeight||window.innerHeight,o=this.currentPR,c=Math.min(4,Math.max(2,3200/Math.max(n,a)));t&&(this.scene.background=null,this.renderer.setClearColor(0,0)),this.renderer.setPixelRatio(c),this.composer.setPixelRatio(c),this.renderer.setSize(n,a),this.composer.setSize(n,a),this.composer.render();const u=this.renderer.domElement.toDataURL("image/png");t&&(this.scene.background=this.background,this.renderer.setClearColor(0,1)),this.renderer.setPixelRatio(o),this.composer.setPixelRatio(o),this.renderer.setSize(n,a),this.composer.setSize(n,a);const f=document.createElement("a");f.href=u;const d=t?"holocloth-nobg":"holocloth";f.download=`${d}-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,f.click()}updatePointer(t){const n=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1)}raycastCloth(){this.raycaster.setFromCamera(this.pointerNdc,this.camera),this.clothGeometry.computeBoundingSphere();const t=this.raycaster.intersectObject(this.clothMesh,!1);return t.length>0?t[0]:null}startPickFocus(){this.pickingFocus=!0,this.renderer.domElement.style.cursor="crosshair"}clearPickFocus(){this.focusVertex=null}onKeyDown=t=>{if(t.code!=="Space"||t.repeat)return;const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)||(t.preventDefault(),this.spaceHeld=!0,this.controls.mouseButtons.LEFT=Va.PAN,!this.grabbing&&this.pointerGrabs.size===0&&!this.draggingDecal&&!this.pickingFocus&&(this.renderer.domElement.style.cursor="grab"))};onKeyUp=t=>{t.code==="Space"&&(this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Va.ROTATE)};onWindowBlur=()=>{this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Va.ROTATE};onPointerDown=t=>{if(t.button!==0||this.draggingDecal||(this.downPointers.add(t.pointerId),this.downPointers.size===3&&(this.threeTapT=performance.now()),this.pointerGrabs.size>=vR))return;if(this.updatePointer(t),this.pickingFocus){this.pickingFocus=!1,this.renderer.domElement.style.cursor="default";const d=this.raycastCloth();if(d){const p=this.sim.positions;let g=0,v=1/0;for(let _=0;_<this.sim.count;_++){const x=p[_*3]-d.point.x,b=p[_*3+1]-d.point.y,A=p[_*3+2]-d.point.z,M=x*x+b*b+A*A;M<v&&(v=M,g=_)}this.focusVertex=g}this.pickReleaseId=t.pointerId,this.controls.enabled=!1;return}if(this.spaceHeld)return;const n=performance.now(),a=!this.editMode&&this.downPointers.size===1&&n-this.lastTap.t<350&&Math.hypot(t.clientX-this.lastTap.x,t.clientY-this.lastTap.y)<30;this.lastTap={t:n,x:t.clientX,y:t.clientY};const o=this.raycastCloth();if(a){this.lastTap.t=0,o?.uv?this.splashAt(o.uv.x,o.uv.y):this.recenterView();return}if(!o)return;if(this.editMode){if(!o.uv)return;const d=this.surface.hitTest(o.uv.x,o.uv.y);if(!d)return;this.surface.selected=d,this.draggingDecal=!0,this.decalGrabOffset.u=d.u-o.uv.x,this.decalGrabOffset.v=d.v-o.uv.y,this.grabPointerId=t.pointerId,this.controls.enabled=!1,this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="move",this.onDecalSelect?.(d.scale,d.rotation);return}const c=this.params?.physics.grabRadius??.45;if(this.clothMesh.updateWorldMatrix(!0,!1),this.grabInv.copy(this.clothMesh.matrixWorld).invert(),!this.sim.startGrab(o.point.clone().applyMatrix4(this.grabInv),c,t.pointerId))return;const u=new X;this.camera.getWorldDirection(u);const f=new ua().setFromNormalAndCoplanarPoint(u,o.point);this.pointerGrabs.set(t.pointerId,{plane:f,anchor:o.point.clone(),downX:t.clientX,downY:t.clientY,downT:performance.now(),moved:!1,push:0}),this.controls.enabled=!1,this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="grabbing"};onPointerMove=t=>{if(this.draggingDecal){if(t.pointerId!==this.grabPointerId)return;this.updatePointer(t);const o=this.raycastCloth(),c=this.surface.selected;o?.uv&&c&&(c.u=o.uv.x+this.decalGrabOffset.u,c.v=o.uv.y+this.decalGrabOffset.v,this.surface.redraw());return}const n=this.pointerGrabs.get(t.pointerId);if(!n||(!n.moved&&Math.hypot(t.clientX-n.downX,t.clientY-n.downY)>9&&(n.moved=!0),!n.moved))return;this.updatePointer(t),this.raycaster.setFromCamera(this.pointerNdc,this.camera);const a=new X;this.raycaster.ray.intersectPlane(n.plane,a)&&this.sim.moveGrab(a.applyMatrix4(this.grabInv),t.pointerId)};onPointerUp=t=>{if(this.downPointers.delete(t.pointerId),this.downPointers.size===0&&this.threeTapT&&performance.now()-this.threeTapT<400&&(this.threeTapT=0,this.resetCloth()),t.pointerId===this.pickReleaseId){this.pickReleaseId=null,this.controls.enabled=!0;return}if(this.draggingDecal&&t.pointerId===this.grabPointerId){this.draggingDecal=!1,this.grabPointerId=null,this.controls.enabled=!0,this.releaseCapture(t.pointerId),this.renderer.domElement.style.cursor=this.hoverCursor;return}this.pointerGrabs.has(t.pointerId)&&(this.pointerGrabs.delete(t.pointerId),this.sim.endGrab(t.pointerId),this.releaseCapture(t.pointerId),this.pointerGrabs.size===0&&(this.controls.enabled=!0,this.renderer.domElement.style.cursor=this.hoverCursor))};releaseCapture(t){this.renderer.domElement.hasPointerCapture(t)&&this.renderer.domElement.releasePointerCapture(t)}onWheel=t=>{if(!this.editMode)return;const n=this.surface.selected;n&&(t.preventDefault(),t.stopImmediatePropagation(),n.scale=sx.clamp(n.scale*Math.exp(-t.deltaY*.0012),.02,2.5),this.surface.redraw(),this.onDecalSelect?.(n.scale,n.rotation))};onResize(){const t=this.host.clientWidth||window.innerWidth,n=this.host.clientHeight||window.innerHeight;t===0||n===0||(this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.composer.setSize(t,n))}tick=(t,n)=>{if(this.disposed)return;const a=this.clock.getDelta();if(this.elapsed+=a,this.grainPass.uniforms.uTime.value=this.elapsed%61.7,this.renderer.xr.isPresenting&&this.handleXRGrab(n),this.pointerGrabs.size){const o=performance.now(),c=new X;this.camera.getWorldDirection(c);for(const[u,f]of this.pointerGrabs){if(f.moved||o-f.downT<380)continue;f.push=Math.min(1,f.push+a*.6);const d=f.anchor.clone().addScaledVector(c,f.push);this.sim.moveGrab(d.applyMatrix4(this.grabInv),u)}}if(this.params){this.sim.step(a,this.params.physics),this.clothGeometry.attributes.position.needsUpdate=!0;const o=this.clothGeometry.attributes.normal.array;this.sim.computeGridNormals(o),this.sim.smoothNormals(o),this.clothGeometry.attributes.normal.needsUpdate=!0}if(this.moisture.active&&this.moisture.update(a,this.wetProps,this.heightAt),this.updateDroplets(a),this.params?.render.occlusion&&(this.sim.computeCavity(this.clothGeometry.attributes.normal.array,this.cavityAttr.array),this.cavityAttr.needsUpdate=!0),this.params?.render.dof){let o;if(this.focusVertex!==null&&this.focusVertex<this.sim.count){const c=this.sim.positions,u=this.focusVertex*3;this.focusTmp.set(c[u],c[u+1],c[u+2]),o=this.camera.position.distanceTo(this.focusTmp)}else o=this.camera.position.distanceTo(this.controls.target);this.dofPass.setFocus(o)}if(this.renderer.xr.isPresenting){this.renderer.render(this.scene,this.camera);return}if(!this.grabbing&&this.pointerGrabs.size===0&&!this.draggingDecal&&!this.pickingFocus&&!this.spaceHeld&&this.perfProfile!=="Low"){const o=this.raycastCloth();let c="default";o&&(c=this.editMode?o.uv&&this.surface.hitTest(o.uv.x,o.uv.y)?"move":"default":"grab"),c!==this.hoverCursor&&(this.hoverCursor=c,this.renderer.domElement.style.cursor=c)}this.controls.update(),this.composer.render()};dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.controls.dispose(),this.dofPass.dispose(),this.composer.dispose(),this.clothGeometry.dispose(),this.holoMaterial.dispose(),this.surface.dispose(),this.scene.traverse(n=>{const a=n;a.geometry&&a.geometry!==this.clothGeometry&&a.geometry.dispose()}),this.renderer.dispose(),t.remove()}}const Di=["Nulu","Luon","Luxtreme","Everlux","Warpstreme"],sn={Nulu:{label:"Nulu",blurb:"Buttery-soft, lightweight knit. Matte, next-to-nothing drape.",material:{finish:"Matte",baseColor:"#c9c4bf",roughness:.88,metalness:0,clearcoat:0,coatRoughness:.9,sheen:.28,bump:.6,bumpTiling:6},physics:{viscosity:.5,stiffness:.45,iterations:12,smoothing:.12,grabRadius:.3},weave:{type:"knit",threads:96,strength:1,seed:11},wet:{absorb:.85,bead:.08}},Luon:{label:"Luon",blurb:"The original: cottony-soft, structured, medium-weight knit.",material:{finish:"Matte",baseColor:"#2c313a",roughness:.86,metalness:0,clearcoat:0,coatRoughness:.75,sheen:.2,bump:.95,bumpTiling:5},physics:{viscosity:.42,stiffness:.7,iterations:12,smoothing:.07,grabRadius:.27},weave:{type:"knit",threads:72,strength:1.35,seed:22},wet:{absorb:.8,bead:.12}},Luxtreme:{label:"Luxtreme",blurb:"Slick, cool-to-touch performance knit. Satin sheen, lively.",material:{finish:"Matte",baseColor:"#33435f",roughness:.72,metalness:0,clearcoat:.02,coatRoughness:.6,sheen:.38,bump:.3,bumpTiling:8},physics:{viscosity:.24,stiffness:.82,iterations:13,smoothing:.03,grabRadius:.27},weave:{type:"knit",threads:120,strength:.7,seed:33},wet:{absorb:.45,bead:.5}},Everlux:{label:"Everlux",blurb:"Thicker double-knit. Springy shape retention, textured hand.",material:{finish:"Matte",baseColor:"#454851",roughness:.82,metalness:0,clearcoat:0,coatRoughness:.6,sheen:.32,bump:1.15,bumpTiling:4},physics:{viscosity:.34,stiffness:.9,iterations:14,smoothing:.09,grabRadius:.27},weave:{type:"knit",threads:56,strength:1.6,seed:44},wet:{absorb:.7,bead:.2}},Warpstreme:{label:"Warpstreme",blurb:"Finely woven, structured & wrinkle-resistant. Holds its shape.",material:{finish:"Matte",baseColor:"#21252c",roughness:.84,metalness:0,clearcoat:0,coatRoughness:.6,sheen:.2,bump:.5,bumpTiling:7},physics:{viscosity:.3,stiffness:1,iterations:14,smoothing:.15,grabRadius:.26},weave:{type:"woven",threads:110,strength:.9,seed:55},wet:{absorb:.12,bead:.9}}},Ru="Nulu",qd=["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it coats the fibers and kills sweat-wicking.","Hang or lay flat to dry; avoid the dryer to protect the stretch.","Keep away from Velcro, zippers and denim to avoid snags and pilling."],Wn={Nulu:{meaning:'"Naked" lu — the softest, lightest fabric lululemon makes. The "nu" is for nude / next-to-nothing.',feel:"Buttery-soft and weightless with a matte finish and gentle four-way stretch. No compression — it feels like a second skin.",bestFor:["Yoga","Pilates","Barre","Stretching","Lounging","Travel & errands"],notFor:"High-sweat or high-impact workouts — it offers no compression and can pill under friction.",care:["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it clogs the fibers.","Hang or lay flat to dry; never tumble dry.","Prone to pilling — keep away from Velcro, zippers and denim."],products:[{name:'Align High-Rise Pant 25"',price:"$98",url:"https://shop.lululemon.com/c/women-align-leggings/n1esuuzudsq"},{name:"Align Tank Top",price:"$68",url:"https://shop.lululemon.com/c/women-align-clothes/n14uwkzesuu"},{name:"Groove Nulu Flared Pant",price:"$128",url:"https://shop.lululemon.com/c/women-align-pants/n1esuuzqd1q"}],affinity:{activity:{yoga:3,run:-2,studio:0,everyday:1},sweat:{low:3,med:0,high:-2},feel:{soft:3,smooth:0,structured:-1,cushioned:0},care:{easy:-1,ok:2}}},Luon:{meaning:'The original lululemon fabric — the knit that launched the brand. Simply "lu" + "on".',feel:"Cottony-soft but more structured than Nulu: medium-weight, lightly holding, with a matte look.",bestFor:["Yoga","Barre","Dance","Low–medium impact","Layering","Casual"],notFor:"Running or spin — the cottony knit can pill under repeated friction.",care:qd,products:[{name:"Wunder Under Luon High-Rise Tight",price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:"Classic Luon layering tops",price:"from $68",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:2,run:-1,studio:1,everyday:1},sweat:{low:2,med:1,high:-1},feel:{soft:2,smooth:0,structured:0,cushioned:1},care:{easy:0,ok:1}}},Luxtreme:{meaning:`"Luxe" + "extreme" — lululemon's first performance fabric, built for runners back in 2008.`,feel:"Slick and cool-to-touch, compressive and supportive with a subtle sheen. Sweat-wicking and quick-drying.",bestFor:["Running","HIIT","Cycling / spin","High-impact training"],notFor:"Gentle lounging if you dislike compression — it's a firmer, hold-you-in feel.",care:qd,products:[{name:'Wunder Under Full-On Luxtreme Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:'Wunder Under Luxtreme Tight 28"',price:"$98",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:-1,run:3,studio:2,everyday:0},sweat:{low:-1,med:1,high:3},feel:{soft:0,smooth:3,structured:1,cushioned:0},care:{easy:1,ok:0}}},Everlux:{meaning:'"Ever" (endure) + "lux" — a 2017 studio fabric made for sweaty, mid-to-high-intensity workouts.',feel:"Fast-drying and cool against the skin, with a cushioned double-knit body and springy shape retention.",bestFor:["Studio & HIIT","Spin","Cardio classes","Hot workouts","Strength training"],notFor:"Nothing much — it's the most versatile; just heavier than Nulu for pure lounging.",care:qd,products:[{name:'Wunder Train High-Rise Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:'Wunder Train Tight with Pockets 28"',price:"$128",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:"Wunder Train No Line High-Rise Tight",price:"$108",url:"https://shop.lululemon.com/c/women-everlux-leggings/n1n918zudsq"}],affinity:{activity:{yoga:0,run:2,studio:3,everyday:1},sweat:{low:0,med:3,high:2},feel:{soft:0,smooth:1,structured:0,cushioned:3},care:{easy:2,ok:0}}},Warpstreme:{meaning:'A finely warp-woven fabric (woven, not knit) — "warp" weaving + "streme" for stream / extreme.',feel:"Smooth, structured and wrinkle-resistant with a cool hand. Holds its shape from morning to night.",bestFor:["Travel","Commute","Work / office","Everyday","Versatile wear"],notFor:"Sweaty high-intensity training — it's built for structure and polish, not compression.",care:["Machine wash cold with like colors.","Skip fabric softener.","Hang dry — avoid high heat.","Wrinkle-resistant, so it bounces back without ironing."],products:[{name:"ABC Classic-Fit 5 Pocket Pant",price:"$138",url:"https://shop.lululemon.com/c/men-warpstreme-pants/n13u4nzu9dn"},{name:"ABC Trouser (formerly Commission)",price:"$138",url:"https://shop.lululemon.com/c/men-abc-trousers/n146jrzsddx"},{name:"ABC Jogger",price:"$128",url:"https://shop.lululemon.com/c/men-abc-pants/n1sddxzu9dn"}],affinity:{activity:{yoga:0,run:-1,studio:0,everyday:3},sweat:{low:2,med:1,high:-2},feel:{soft:0,smooth:1,structured:3,cushioned:0},care:{easy:3,ok:0}}}};function MR(s,t){return t.map(n=>{const a=Wn[n].affinity;let o=0;return s.activity&&(o+=a.activity[s.activity]),s.sweat&&(o+=a.sweat[s.sweat]),s.feel&&(o+=a.feel[s.feel]),s.care&&(o+=a.care[s.care]),{name:n,score:o}}).sort((n,a)=>a.score-n.score)}const Kx={step:"start",answers:{},fabric:null,colorHex:null,colorName:null,askedColor:!1},Bl=[{name:"Black",hex:"#1a1a1a"},{name:"True Navy",hex:"#26324a"},{name:"Heathered Grey",hex:"#9a9793"},{name:"Dark Olive",hex:"#3f4531"},{name:"Red Merlot",hex:"#7d1f2b"},{name:"Pink Mist",hex:"#e3b0bf"},{name:"Blue Nile",hex:"#3b5d7a"},{name:"White Opal",hex:"#e8e5df"}],G_={Nulu:"81% nylon, 19% Lycra elastane",Luon:"a nylon / Lycra blend (sometimes with polyester)",Luxtreme:"69% nylon, 31% Lycra elastane — the highest elastane of the bunch",Everlux:"a high-elastane nylon / Lycra double-knit",Warpstreme:"100% polyester, finely warp-woven"},ve=s=>s[Math.floor(Math.random()*s.length)],Qt=(s,t)=>t.some(n=>s.includes(n)),Dn={activity:[{label:"Yoga & stretching",value:"yoga"},{label:"Running & cardio",value:"running"},{label:"Studio & HIIT",value:"studio"},{label:"Everyday & travel",value:"everyday"}],sweat:[{label:"Barely",value:"barely sweat"},{label:"A moderate amount",value:"moderate sweat"},{label:"A lot",value:"sweat a lot"}],feel:[{label:"Softest & barely-there",value:"softest feel"},{label:"Smooth & supportive",value:"smooth supportive"},{label:"Cushioned",value:"cushioned feel"},{label:"Structured",value:"structured feel"}],care:[{label:"Low-maintenance",value:"low maintenance"},{label:"Happy to hand-wash",value:"hand wash"}],explore:[{label:"Find my match",value:"find my match"},{label:"Tell me about the fabrics",value:"tell me about the fabrics"},{label:"Compare two",value:"compare fabrics"}],demos:[{label:"Show its stretch",value:"show its stretch"},{label:"See the drape",value:"see the drape"},{label:"Zoom in",value:"zoom in"}]},q0=()=>[...Bl.map(s=>({label:s.name,value:s.name})),{label:"Surprise me",value:"surprise me"}];function SR(s){return s.includes("nulu")||s.includes("align")?"Nulu":s.includes("luon")?"Luon":s.includes("luxtreme")?"Luxtreme":s.includes("everlux")||s.includes("wunder train")?"Everlux":s.includes("warpstreme")||s.includes("abc")?"Warpstreme":null}function bR(s){return Qt(s,["yoga","stretch","flow","pilates","barre","lounge","relax","restor"])?"yoga":Qt(s,["run","jog","sprint","cardio","marathon","5k","10k"])?"run":Qt(s,["studio","hiit","train","gym","spin","cycle","cycling","strength","lift","weight","class","crossfit","bootcamp","tennis","dance","workout"])?"studio":Qt(s,["everyday","travel","work","office","commute","casual","errand","walk","daily","hike","hiking","flight","plane","desk","lounging around"])?"everyday":null}function ER(s){return Qt(s,["barely","not much","don't sweat","dry workout","a little","light sweat","low sweat"])?"low":Qt(s,["moderate","medium","average","a bit"])?"med":Qt(s,["a lot","lots","heavy sweat","sweaty","drench","soak","buckets","sweat a lot","hot ","hot yoga","sauna"])?"high":null}function TR(s){return Qt(s,["softest","buttery","barely-there","barely there","naked","second skin","gentle","butter","soft feel"])?"soft":Qt(s,["smooth","slick","sleek","silky","compress","support","sculpt","hold-you","hold you","firm"])?"smooth":Qt(s,["cushion","thick","substantial","plush","cozy","hefty","more body"])?"cushioned":Qt(s,["structured","crisp","polished","put together","put-together","stiff","tailored","holds shape"])?"structured":null}function AR(s){return Qt(s,["low maintenance","low-maintenance","easy care","durable","wrinkle","no fuss","toss","throw it in","lazy"])?"easy":Qt(s,["hand wash","hand-wash","delicate","hang dry","baby it","careful","don't mind washing"])?"ok":null}function wR(s){const t=[[["black","noir"],"Black"],[["navy","dark blue"],"True Navy"],[["grey","gray","heather"],"Heathered Grey"],[["olive","green","army","khaki"],"Dark Olive"],[["red","merlot","wine","maroon","burgundy","berry"],"Red Merlot"],[["pink","rose","blush","mauve"],"Pink Mist"],[["blue","nile","cobalt","teal"],"Blue Nile"],[["white","cream","opal","ivory"],"White Opal"]];for(const[n,a]of t)if(Qt(s,n))return Bl.find(o=>o.name===a);return null}function RR(s){return Qt(s,["reset","re-drape","redrape","settle it","drop it","let it fall","fresh drape"])?"reset":Qt(s,["nudge","poke","wobble","jiggle","shake it","bounce"])?"nudge":Qt(s,["zoom in","closer","close up","close-up","get close","look closer"])?"closeup":Qt(s,["zoom out","back up","pull back","farther","further","see it all","zoom back","wider","whole thing"])?"zoomout":Qt(s,["spin","rotate","turn it","turn around","another angle","different angle"])?"spin":null}function V_(s){return Qt(s,["durab","stretch","elastic","recover","hold up","holds up","last","four-way","4-way","compression","compress","squat","support","pull it"])?"stretch":Qt(s,["soft","buttery","how does it feel","feel like","next to skin","against my skin","touch","plush","cozy"])?"soft":Qt(s,["drape","flow","how it moves","how does it move","movement","fall","swish","fluid","floaty"])?"drape":Qt(s,["sheen","shine","shiny","gloss","matte","luster","finish","how it looks","how does it look"])?"sheen":Qt(s,["weave","woven","knit","texture","construction","grain","stitch","mesh","up close"])?"weave":Qt(s,["breath","airflow","ventil","cool ","cooling","hot workout","overheat","wick","quick dry","quick-dry"])?"breath":Qt(s,["warm","warmth","cold","winter","chilly","heat retention"])?"warmth":Qt(s,["see-through","see through","sheer","squat proof","squat-proof","opaque","opacity","transparent"])?"opacity":Qt(s,["pill","pilling"])?"pill":Qt(s,["made of","material","composition","fabric content","nylon","polyester","lycra","spandex","elastane","what is it made"])?"material":Qt(s,["size","sizing","fit ","true to size","runs small","runs big","tight or","sizing up"])?"fit":Qt(s,["sustainab","recycled","eco","environment","planet"])?"sustain":Qt(s,["smell","odor","odour","stink","anti-odor","anti-odour"])?"odor":null}function CR(s){return!Qt(s,["most","best","softest","warmest","coolest","lightest","cheapest","priciest","stretchiest","which","top ","strongest"])&&!Qt(s,["won't pill","wont pill","no pill"])?null:Qt(s,["softest","most soft","most comfortable","comfiest"])?"softest":Qt(s,["warmest","warm","coziest","thickest","winter"])?"warmest":Qt(s,["coolest","cool-to-touch","cool to touch"])?"coolest":Qt(s,["breathable","most breathable","breathability"])?"breathable":Qt(s,["durable","most durable","longest","toughest","won't pill","wont pill","no pill","strongest","last longest"])?"durable":Qt(s,["supportive","most support","most compress","compressive","hold you in"])?"supportive":Qt(s,["stretchiest","most stretch","most flexible","stretchy"])?"stretchiest":Qt(s,["lightest","most lightweight","thinnest"])?"lightest":Qt(s,["versatile","do everything","all-rounder","all rounder","most versatile"])?"versatile":Qt(s,["cheapest","least expensive","most affordable","lowest price"])?"cheapest":Qt(s,["priciest","most expensive","highest price"])?"priciest":Qt(s,["best"])?"best":null}function k_(s){const t=s.match(/\$(\d+)/);return t?parseInt(t[1],10):9999}function DR(s,t){const n=Wn[s];return[{text:`${t??ve([`I'd put you in ${s}.`,`Here's your match: ${s}.`,`${s} is the one for you.`])} ${n.meaning}`},{text:`${n.feel} It's a favorite for ${n.bestFor.slice(0,3).join(", ").toLowerCase()} — I've loaded it onto the cloth, so drag it to feel how it moves.`},{text:ve(["Want to see it in a color?","Shall I dye it? Just name a color.","Pick a color and I'll apply it live:"]),swatch:sn[s].material.baseColor,chips:q0()}]}function W_(s,t){const n=Wn[s].products[0];return[{text:ve([`${t} on ${s} — beautiful.`,`Love it — ${t} suits ${s}.`,`${t} it is.`])},{text:`Here's the piece I'd start with in ${s}:`,product:n},{text:ve(["Want me to show you its stretch, drape, or how it feels?","Say the word and I'll stretch it, zoom in, or turn it in the light."]),chips:[...Dn.demos,{label:"Start over",value:"start over"}]}]}function UR(s){return s?{text:`Caring for ${s}: ${Wn[s].care.join(" ")}`}:{text:"Tell me which fabric and I'll give you its care routine — or I can find your match first.",chips:[...Dn.explore]}}function NR(){return{text:`Here are the five, in a nutshell:
${Di.map(t=>`• ${t} — ${sn[t].blurb.toLowerCase()}`).join(`
`)}
Ask me about any of them, or tell me what you'll do in it and I'll match you.`,chips:[...Dn.activity]}}const Yd=s=>[s.activity,s.sweat,s.feel,s.care].filter(Boolean).length;function X_(s){return s.activity?s.feel?s.sweat?{key:"care",msg:{text:ve(["Last one — how do you like to care for your gear?","How much laundry fuss are you up for?"]),chips:[...Dn.care]}}:{key:"sweat",msg:{text:ve(["How much do you sweat when you do it?","And how sweaty do you get?"]),chips:[...Dn.sweat]}}:{key:"feel",msg:{text:ve(["What feel do you love against your skin?","How do you want it to feel?"]),chips:[...Dn.feel]}}:{key:"activity",msg:{text:ve(["What will you mostly do in it?","What's it for — what will you be doing?"]),chips:[...Dn.activity]}}}function Zd(s,t,n){const a=MR(s.answers,Di)[0].name;s.fabric=a,s.step="recommended",s.askedColor=!0,t.selectFabric=a,t.reply.push(...DR(a,n))}function q_(s,t){const n=t&&sn[t].weave.type==="woven";switch(s){case"stretch":return{demo:["stretch"],text:t?`${ve(["Watch it stretch and snap back.","I'll pull it so you can see the recovery."])} ${{Nulu:"Lovely give, but it's a soft knit — best for low-impact; it can pill under heavy friction.",Luon:"Reliable four-way stretch with more body than Nulu.",Luxtreme:"Compressive four-way stretch with quick recovery — it holds shape through hard training.",Everlux:"Springy recovery from the double-knit and high elastane — supportive rep after rep.",Warpstreme:"It's woven, so it gives but stays structured — it won't bag out."}[t]}`:"Good athletic fabric gives, then returns to shape — pick a fabric and I'll show you."};case"soft":return{demo:["closeup","nudge"],text:t?`${ve(["Getting in close.","Here it is up close."])} ${{Nulu:"Nulu is the buttery, next-to-nothing one.",Luon:"Luon is cottony-soft with more structure.",Luxtreme:"Luxtreme is cool and slick rather than fuzzy.",Everlux:"Everlux is cushioned and substantial.",Warpstreme:"Warpstreme is smooth and crisp, not plush."}[t]}`:"Softest of all is Nulu — want to feel it?"};case"drape":return{demo:["zoomout","drape"],text:t?`${ve(["Watch how it falls.","Here it is in motion."])} ${{Nulu:"Fluid and flowy — lightweight drape.",Luon:"A little more body as it moves.",Luxtreme:"Slick and lively, settles sleek.",Everlux:"Heavier drape with spring.",Warpstreme:"Structured — it keeps its shape."}[t]}`:"Every fabric falls differently — pick one and I'll show you."};case"sheen":return{demo:["spin"],text:t?`${ve(["Turning it through the light.","Catching the light across it."])} ${{Nulu:"Matte and soft, barely any shine.",Luon:"Matte, cottony surface.",Luxtreme:"A subtle performance sheen.",Everlux:"Mostly matte, dry finish.",Warpstreme:"Matte with a fine woven glint."}[t]}`:"Luxtreme has the most sheen; Nulu the least."};case"weave":return{demo:["closeup"],text:t?`${ve(["Here's the construction up close.","Zooming into the surface."])} ${n?`See the tight woven grid — that's what makes ${t} structured and wrinkle-resistant.`:`You can see the knit loops — that interlock gives ${t} its stretch and softness.`}`:"Four of the five are knits; Warpstreme is woven. Want to see one up close?"};case"breath":return{demo:["spin"],text:t?`On breathability: ${{Nulu:"Nulu is light and airy but has no compression — great for gentle heat, less so for heavy sweat.",Luon:"Luon breathes reasonably for low-medium efforts.",Luxtreme:"Luxtreme is sweat-wicking, breathable and quick-drying — built for working hard.",Everlux:"Everlux was made for sweaty studio sessions — it wicks and dries fast while staying cool.",Warpstreme:"Warpstreme is a woven travel fabric — breathable and structured, though not a high-sweat performer."}[t]}`:"For heavy sweat, Luxtreme and Everlux breathe and wick best. Want details on one?"};case"warmth":return{text:t?`On warmth: ${{Nulu:"Nulu is the lightest and coolest — not a warm layer.",Luon:"Luon has a little more body but is still light.",Luxtreme:"Luxtreme is cool-to-touch — it runs cool, not warm.",Everlux:"Everlux is the thickest, so it holds a bit more warmth.",Warpstreme:"Warpstreme is structured and mid-weight — fine for cooler-weather everyday wear."}[t]}`:"Everlux is the warmest (thickest); Nulu the coolest and lightest."};case"opacity":return{demo:["closeup","stretch"],text:t?`On coverage: ${{Nulu:"Nulu is soft and non-compressive, so in very light colors it can go a touch sheer when stretched — dark colors are safest.",Luon:"Luon is medium-weight and generally opaque.",Luxtreme:"Luxtreme is compressive and reliably squat-proof.",Everlux:"Everlux is thick and fully opaque — very squat-proof.",Warpstreme:"Warpstreme is a woven — fully opaque."}[t]}`:"Everlux and Luxtreme are the most squat-proof; Nulu can be sheer in pale colors."};case"pill":return{text:t?`On pilling: ${{Nulu:"Nulu is the softest but most prone to pilling — keep it away from Velcro and rough surfaces.",Luon:"Luon can pill under heavy friction like running or spin.",Luxtreme:"Luxtreme is highly friction-resistant and won't pill.",Everlux:"Everlux is durable and resists pilling well.",Warpstreme:"Warpstreme is woven and very resistant to pilling."}[t]}`:"Luxtreme and Warpstreme resist pilling best; Nulu pills most easily."};case"material":return{text:t?`${t} is ${G_[t]}. ${Wn[t].feel}`:`Composition varies: ${Di.map(a=>`${a} is ${G_[a]}`).join("; ")}.`};case"fit":return{text:t?`On fit: ${{Nulu:"Nulu is a relaxed, second-skin feel with no compression.",Luon:"Luon is a supportive-but-comfortable everyday fit.",Luxtreme:"Luxtreme is snug and compressive — hold-you-in.",Everlux:"Everlux is supportive with a substantial, sculpting fit.",Warpstreme:"Warpstreme is a structured, tailored fit."}[t]} For exact sizing, lululemon.com or a store is your best bet.`:"Fit depends on the fabric — compressive ones like Luxtreme run snug, Nulu is relaxed. For sizing, check lululemon.com."};case"sustain":return{text:"I'm focused on how the fabrics feel and perform — for lululemon's materials and sustainability details, their site is the source of truth. I can tell you what each fabric is made of, though — just ask."};case"odor":return{text:t?`Most of these are synthetic performance fabrics, so wash them promptly and skip fabric softener (it traps odor). ${t==="Nulu"?"Nulu especially likes a gentle, prompt wash.":""}`:"Wash promptly and skip fabric softener to keep them fresh — softener coats the fibers and traps smell."}}}function LR(s,t,n){const a=(o,c,u)=>{t.fabric=o,t.step="open",n.selectFabric=o,u&&(n.demo=u),n.reply.push({text:c},{text:ve(["Want to see it in a color, or shall I show it off?","I can dye it or demonstrate it — your call."]),swatch:sn[o].material.baseColor,chips:[...Dn.demos,{label:"See colors",value:"see colors"}]})};switch(s){case"softest":return a("Nulu","Softest by a mile is Nulu — buttery and barely-there. Here it is.",["closeup","nudge"]);case"warmest":return a("Everlux","The warmest is Everlux — it's the thickest, a cushioned double-knit that holds a little heat.",["closeup"]);case"coolest":return a("Luxtreme","Coolest-to-touch is Luxtreme — slick and quick-drying, it runs cool.",["spin"]);case"breathable":return a("Luxtreme","Most breathable for hard efforts is Luxtreme — sweat-wicking and quick-drying (Everlux is a close second for studio heat).",["spin"]);case"durable":return a("Warpstreme","Most durable is Warpstreme — a tightly woven fabric that holds its shape and resists pilling. Luxtreme is the toughest of the knits.",["closeup","stretch"]);case"supportive":return a("Luxtreme","Most supportive is Luxtreme — compressive, hold-you-in, and quick to recover.",["closeup","stretch"]);case"stretchiest":return a("Luxtreme","Stretchiest is Luxtreme — it has the highest elastane, so it's the most flexible.",["closeup","stretch"]);case"lightest":return a("Nulu","Lightest is Nulu — a next-to-nothing feel.",["closeup"]);case"versatile":return a("Everlux","Most versatile is Everlux — comfy enough for low-impact, tough enough for hard training.",["drape"]);case"cheapest":{let o=Di[0],c=99999;for(const u of Di){const f=k_(Wn[u].products[0].price);f<c&&(c=f,o=u)}t.fabric=o,n.selectFabric=o,t.step="open",n.reply.push({text:`The most affordable starting point is ${o}.`},{text:"Here's the piece:",product:Wn[o].products[0]});return}case"priciest":{let o=Di[0],c=-1;for(const u of Di){const f=k_(Wn[u].products[0].price);f>c&&(c=f,o=u)}t.fabric=o,n.selectFabric=o,t.step="open",n.reply.push({text:`The most premium of these is ${o}.`},{text:"Here's the piece:",product:Wn[o].products[0]});return}default:n.reply.push({text:ve([`"Best" really depends on what you're doing — what's the plan?`,"They're each best at something — what will you be doing in it?"]),chips:[...Dn.activity]}),t.step="guiding";return}}function PR(s,t){const n=Di.filter(u=>s.includes(u.toLowerCase())),[a,o]=n.length>=2?[n[0],n[1]]:[t.fabric??"Nulu",n[0]&&n[0]!==t.fabric?n[0]:"Luxtreme"],c=u=>`${u}: ${sn[u].blurb.toLowerCase()} Best for ${Wn[u].bestFor.slice(0,2).join(" & ").toLowerCase()}.`;return{text:`${a} vs ${o} —
${c(a)}
${c(o)}
Want me to load either one so you can feel it?`}}function OR(){return[{text:ve(["Hi — I'm your FABLAB expert. Ask me anything about lululemon's fabrics and I'll show you on the cloth: how they feel, stretch, drape and hold up.","Welcome — I know these fabrics inside out. Ask me anything, and I'll demonstrate right on the cloth. What can I help you figure out?"])},{text:"You can tell me what you'll be doing and I'll find your match — or just ask a question.",chips:[...Dn.activity]}]}function IR(s,t){const n={...s,answers:{...s.answers}},a=t.toLowerCase().trim(),o={ctx:n,reply:[]};if(Qt(a,["start over","restart","reset chat","begin again","start again"]))return o.ctx={...Kx},o.reply=[{text:ve(["Fresh start — let's go.","Clean slate."])},...OR()],o;if(Qt(a,["thank","thanks","ty ","appreciate","cheers"]))return o.reply=[{text:ve(["Anytime — happy moving.","My pleasure.","You got it."])}],o;if(a.length<=6&&Qt(a,["hi","hey","hello","yo","sup","hola"]))return o.reply=[{text:ve(["Hey! Ask me anything about the fabrics, or tell me what you'll be doing in it.","Hi there — what are you shopping for?"]),chips:[...Dn.explore]}],o;if(Qt(a,["help","what can you","how does this work","what do you do","options"]))return o.reply=[{text:"I can find your ideal fabric, explain what each one means, how it feels, stretches, drapes and holds up, compare them, recolor the cloth, and point you to the right product. I'll show you on the fabric as we go. What are you after?",chips:[...Dn.explore]}],o;const c=bR(a),u=ER(a),f=TR(a),d=AR(a);c&&(n.answers.activity=c),u&&(n.answers.sweat=u),f&&(n.answers.feel=f),d&&(n.answers.care=d);const p=!!(c||u||f||d),g=RR(a);if(g)return o.demo=[g],o.reply=[{text:{reset:ve(["Resetting to a clean drape.","Dropped it fresh."]),nudge:ve(["Giving it a nudge.","There it goes."]),closeup:ve(["Moving in close.","Here's a closer look."]),zoomout:ve(["Pulling back for the full piece.","Zooming out."]),spin:ve(["Turning it through the light.","Sweeping it round."])}[g]}],o;const v=Di.filter(w=>a.includes(w.toLowerCase())).length>=2;if(Qt(a,["compare","difference","versus"," vs "," vs","vs."])||v)return o.reply=[PR(a,n)],o;const x=SR(a),b=V_(a);if(x){if(n.fabric=x,n.step="open",o.selectFabric=x,b){const w=q_(b,x);w.demo&&(o.demo=w.demo),o.reply=[{text:`${x} — ${Wn[x].meaning}`},{text:w.text}]}else o.reply=[{text:`${x} — ${Wn[x].meaning}`},{text:`${Wn[x].feel} Best for ${Wn[x].bestFor.slice(0,3).join(", ").toLowerCase()}. Drag it to feel the drape.`},{text:"Want to see it in a color, or have me show its stretch or drape?",swatch:sn[x].material.baseColor,chips:[...Dn.demos,{label:"See colors",value:"see colors"}]}];return o}if(Qt(a,["see color","see colors","show color","colours","what colors","color options"]))return o.reply=[{text:n.fabric?`Here are colors for ${n.fabric} — pick one:`:"Pick a color and I'll apply it:",swatch:n.fabric?sn[n.fabric].material.baseColor:void 0,chips:q0()}],n.step=n.fabric?"recommended":n.step,o;const A=wR(a);if(A&&n.fabric)return n.colorHex=A.hex,n.colorName=A.name,o.setColor=A.hex,!n.colorName||n.step,o.reply=W_(n.fabric,A.name),n.step="open",o;if(Qt(a,["surprise","random color","you pick","any color"])&&n.fabric){const w=ve(Bl);return n.colorHex=w.hex,n.colorName=w.name,o.setColor=w.hex,o.reply=[{text:`Let's go with ${w.name}.`},...W_(n.fabric,w.name).slice(1)],n.step="open",o}const M=CR(a);if(M)return LR(M,n,o),o;if(Qt(a,["water","wet","moist","rain","splash","sweat","wick","absorb","soak","droplet","waterproof","water resistant","water-resistant","repel"]))return o.demo=["splash"],o.reply=[{text:HR(n.fabric)}],(n.step==="open"||n.step==="recommended")&&o.reply.push({text:"Want to see anything else?",chips:[...Dn.demos]}),o;const y=V_(a);if(y){const w=q_(y,n.fabric);return w.demo&&(o.demo=w.demo),o.reply=[{text:w.text}],(n.step==="open"||n.step==="recommended")&&o.reply.push({text:"Anything else you'd like to see?",chips:[...Dn.demos]}),o}if(Qt(a,["wash","care","clean it","dry it","shrink","launder","machine wash"]))return o.reply=[UR(n.fabric)],o;if(Qt(a,["what is","what does","mean","why called","what's a","tell me about"])&&(x||n.fabric)){const w=x??n.fabric;return o.reply=[{text:`${w} — ${Wn[w].meaning}`},{text:Wn[w].feel}],o}if(Qt(a,["price","cost","how much","buy","shop","purchase","link","where can i"]))return n.fabric?o.reply=[{text:`Here's the piece I'd recommend in ${n.fabric}:`,product:Wn[n.fabric].products[0]}]:o.reply=[{text:"Let's land on a fabric first — what will you be doing in it?",chips:[...Dn.activity]}],o;if(Qt(a,["list","the fabrics","all the fabric","what are the","options","overview","which fabrics"]))return o.reply=[NR()],o;const D=Qt(a,["recommend","suggest","what should i","help me choose","help me pick","which one","what do you recommend","i need","looking for","find my match","match me","pick for me"]);if(D&&Yd(n.answers)>=1)return Zd(n,o,ve(["Based on that, ","Got it — "])),o;if(Yd(n.answers)>=2)return Zd(n,o),o;if(D){const w=X_(n.answers);return o.reply=[{text:ve(["Happy to — quick question first.","Let's find it — one thing first."])},w.msg],n.step="guiding",o}if(p){const w=c?FR(c):f?zR(f):u?BR(u):GR(d);return n.step="guiding",Yd(n.answers)>=2?(o.reply=[{text:w}],Zd(n,o),o):(o.reply=[{text:w},X_(n.answers).msg],o)}if(Qt(a,["return","refund","ship","delivery","order","track","store near","coupon","discount","sale"]))return o.reply=[{text:"That's one for lululemon.com or a store — I'm the fabric side of things. But I can tell you which fabric fits your workout and how it feels. Want to start there?",chips:[...Dn.explore]}],o;if(Qt(a,["yes","yeah","yep","sure","ok","okay","please do","go for it"])&&n.fabric&&n.step!=="open")return o.reply=[{text:`Here are colors for ${n.fabric}:`,swatch:sn[n.fabric].material.baseColor,chips:q0()}],o;const L=n.fabric;return o.reply=[{text:ve([L?`We're looking at ${L} right now — I can show its stretch, drape or feel, dye it a new color, or compare it with another. What sounds good?`:"I'm your fabric expert — I can find your match, explain any fabric, show how it feels and moves, and point you to the right product. Where should we start?",L?`Ask me how ${L} feels, how it holds up, or what it's made of — or say a color and I'll dye it. What are you curious about?`:"Tell me what you'll be doing in it and I'll match you — or ask about any fabric by name.","Happy to dig in — I know how each fabric feels, stretches, drapes and lasts, and which suits which workout. What would help most?"]),chips:L?[...Dn.demos,{label:"Compare",value:"compare fabrics"}]:[...Dn.explore]}],o}function FR(s){return{yoga:ve(["Yoga — soft and unrestrictive is the goal.","Flow work rewards a soft, stretchy fabric."]),run:ve(["A runner — lightweight and sweat-wicking matter most.","Running: breathability and stay-put support."]),studio:ve(["Studio sweat — versatile and quick-drying wins.","HIIT and classes ask for grip, wick and recovery."]),everyday:ve(["Everyday and travel — comfort that looks pulled-together.","All-day wear — structure and easy care count."])}[s]}function BR(s){return{low:ve(["Cool and dry — the softer fabrics open up.","Barely a bead, noted."]),med:ve(["A moderate glow — lots of options.","Middle of the road, got it."]),high:ve(["A proper sweat — we'll lean into wicking, quick-dry fabrics.","You run hot — good to know."])}[s]}function zR(s){return{soft:ve(["Buttery and barely-there — my favorite.","Second-skin soft, noted."]),smooth:ve(["Smooth and supported — got it.","Sleek and compressive."]),cushioned:ve(["Something with body and cushion.","A bit more heft, noted."]),structured:ve(["Structured and polished.","Crisp and put-together, love it."])}[s]}function HR(s){const t=ve(["Let me pour some water on it.","Splashing it now — watch what happens.","Here comes the water."]);return s?`${t} ${{Nulu:"Nulu drinks it in — see it darken and spread. Soft knits absorb, so they hold moisture rather than shedding it.",Luon:"Luon soaks it up and darkens — cottony and comfy, but it absorbs sweat rather than repelling it.",Luxtreme:"Luxtreme does a bit of both — some beads roll off while the rest wicks and spreads to dry fast. That's the sweat-wicking trick.",Everlux:"Everlux wicks it away — it darkens as it pulls moisture across the surface to dry quickly. Built for sweaty sessions.",Warpstreme:"Warpstreme repels it — watch the beads form and roll straight off the folds. The tight woven face sheds water."}[s]}`:`${t} Woven fabrics bead and roll water off; soft knits soak it in and wick.`}function GR(s){return{easy:ve(["And low-fuss laundry — durability it is.","Toss-and-go care, understood."]),ok:ve(["Happy to hand-wash — keeps the delicate ones in play.","A little TLC is fine, noted."])}[s]}const VR={background:"#f5f5f5",exposure:.8,environment:.62,bloom:0,bloomThreshold:1.4,noise:.04,toneMapping:"Neutral",occlusion:!0,occlusionStrength:.7,dof:!1,dofAperture:40,dofBlur:.04,dofRange:.3};let jx="Balanced";function Cu(s,t){const n=sn[s];return{performance:jx,physics:{...n.physics},material:{fabric:s,...n.material,baseColor:t??n.material.baseColor},images:{edit:!1,useImage:!1,scale:.35,rotation:0,opacity:1,cornerRadius:0},render:{...VR}}}const tr=s=>Math.max(0,Math.min(1,s)),Y_=[{key:"stretch",label:"Stretch"},{key:"weight",label:"Weight"},{key:"thickness",label:"Thickness"},{key:"structure",label:"Structure"},{key:"sheen",label:"Sheen"},{key:"matte",label:"Matte"}];function kR(s){return{stiffness:1-s.stretch*.65,viscosity:.15+s.weight*.45,smoothing:.02+s.structure*.26,bump:.2+s.thickness*1.5,sheen:s.sheen*.6,roughness:.3+s.matte*.65}}function Z_(s){const t=sn[s];return{stretch:tr((1-t.physics.stiffness)/.65),weight:tr((t.physics.viscosity-.15)/.45),thickness:tr((t.material.bump-.2)/1.5),structure:tr((t.physics.smoothing-.02)/.26),sheen:tr(t.material.sheen/.6),matte:tr((t.material.roughness-.3)/.65)}}const WR=s=>({absorb:s*2,bead:1-s}),K_=s=>{const t=sn[s].wet;return tr(t.absorb/(t.absorb+t.bead+.001))},j_=8.5,XR=300,qR=s=>s*s*s,YR=s=>1-Math.pow(1-s,3);function Js({label:s,value:t,open:n,onToggle:a,children:o,live:c}){return Tt.jsxs("div",{className:"pillmenu"+(n?" open":""),children:[Tt.jsxs("button",{className:"ph",onClick:a,"aria-expanded":n,children:[Tt.jsx("span",{className:"tog",children:"+"}),Tt.jsx("span",{className:"c-lab",children:s})]}),Tt.jsx("div",{className:"grow gval","aria-hidden":n,children:Tt.jsx("div",{className:"gin",children:typeof t=="string"?Tt.jsx("span",{className:"c-val",children:t},c?"live":t):t})}),Tt.jsx("div",{className:"grow gopts","aria-hidden":!n,children:Tt.jsx("div",{className:"gin",children:o})})]})}function ZR(){const s=de.useRef(null),t=de.useRef(null),[n,a]=de.useState(Ru),[o,c]=de.useState(null),[u,f]=de.useState(!0),[d,p]=de.useState(!1),[g,v]=de.useState(!1),[_,x]=de.useState(!1),[b,A]=de.useState(null),[M,y]=de.useState(!1),[D,L]=de.useState("Balanced");de.useEffect(()=>{jx=D,t.current?.setQuality(D)},[D]);const[w,I]=de.useState("Studio");de.useEffect(()=>{t.current?.setLighting(w)},[w]);const[U,B]=de.useState(!1),[T,O]=de.useState(!1),[W,V]=de.useState(!1),[Z,ut]=de.useState(!1),[ht,j]=de.useState(()=>K_(Ru));de.useEffect(()=>{j(K_(n))},[n]),de.useEffect(()=>{t.current?.setWet(WR(ht))},[ht]);const[z,H]=de.useState(()=>Z_(Ru));de.useEffect(()=>{H(Z_(n))},[n]),de.useEffect(()=>{t.current?.setLive(kR(z))},[z]);const[J,ft]=de.useState("none"),[St,F]=de.useState(!1),K=de.useRef(!1),_t=de.useRef(null),[Et,wt]=de.useState([]),[tt,xt]=de.useState(""),yt=de.useRef({...Kx}),Ht=de.useRef(0),te=de.useRef(null);de.useEffect(()=>{if(!s.current)return;const N=new yR(s.current);return t.current=N,N.onDecalSelect=()=>{},N.onImagesChanged=()=>{},N.onARChange=Xt=>{K.current=Xt,F(Xt)},N.setSlideOffset(0),N.applyParams(Cu(n)),N.applyFabric(sn[n].weave),N.setWet(sn[n].wet),N.reveal(),()=>{N.dispose(),t.current=null}},[]);const Kt=de.useRef(!0),Pe=de.useRef(Ru),le=de.useRef(0),ue=de.useRef(null);de.useEffect(()=>{const N=t.current;if(!N)return;const Xt=Pe.current;if(Pe.current=n,Kt.current){Kt.current=!1,N.setSlideOffset(0),N.applyParams(Cu(n)),N.applyFabric(sn[n].weave),N.setWet(sn[n].wet);return}if(K.current){N.applyParams(Cu(n)),N.applyFabric(sn[n].weave),N.setWet(sn[n].wet),N.resetCloth();return}if(Xt===n)return;c(null),ue.current?.(),ue.current=null;const P=Di.indexOf(n)>Di.indexOf(Xt)?-j_:j_,E=-P,Q=(et,lt,At,Ut)=>{const dt=performance.now();let pt=0;const Rt=zt=>{const Lt=Math.min(1,(zt-dt)/XR),Nt=et+(lt-et)*At(Lt);le.current=Nt,t.current?.setSlideOffset(Nt),Lt<1?pt=requestAnimationFrame(Rt):Ut?.()};pt=requestAnimationFrame(Rt),ue.current=()=>cancelAnimationFrame(pt)};return Q(le.current,P,qR,()=>{N.applyParams(Cu(n)),N.applyFabric(sn[n].weave),N.setWet(sn[n].wet),N.resetCloth(),le.current=E,N.setSlideOffset(E),Q(E,0,YR,()=>{ue.current=null})}),()=>{ue.current?.()}},[n]),de.useEffect(()=>{o!=null&&t.current?.setColor(o)},[o]),de.useEffect(()=>{yt.current={...yt.current,fabric:n}},[n]),de.useEffect(()=>{te.current?.scrollTo({top:te.current.scrollHeight,behavior:"smooth"})},[Et]),de.useEffect(()=>{let N=0,Xt=0,ae=performance.now(),P=0;const E=et=>{if(Xt++,P+=et-ae,ae=et,P>=500){const lt=performance.memory,At=t.current?.getRenderStats();A({fps:Math.round(Xt*1e3/P),frameMs:+(P/Xt).toFixed(1),heapUsed:lt?Math.round(lt.usedJSHeapSize/1048576):null,heapLimit:lt?Math.round(lt.jsHeapSizeLimit/1048576):null,calls:At?.calls??0,tris:At?.triangles??0,geometries:At?.geometries??0,textures:At?.textures??0,verts:At?.clothVerts??0,segments:At?.segments??0,pr:At?.pixelRatio??1}),Xt=0,P=0}N=requestAnimationFrame(E)};N=requestAnimationFrame(E);const Q=et=>{const lt=et.target;lt&&(lt.tagName==="INPUT"||lt.tagName==="TEXTAREA")||et.key==="`"&&y(At=>!At)};return window.addEventListener("keydown",Q),()=>{cancelAnimationFrame(N),window.removeEventListener("keydown",Q)}},[]),de.useEffect(()=>{let N=!0;return(async()=>{const Xt=navigator.xr;try{if(Xt&&await Xt.isSessionSupported?.("immersive-ar")){N&&ft("webxr");return}}catch{}const ae=navigator.userAgent,P=/iphone|ipad|ipod/i.test(ae)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;N&&ft(P?"quicklook":"none")})(),()=>{N=!1}},[]);const Se=async()=>{const N=t.current;if(N){if(J==="webxr")K.current=!0,F(!0),await N.startAR(_t.current)||(K.current=!1,F(!1));else if(J==="quicklook")try{const Xt=await N.exportUSDZ(),ae=new Blob([Xt],{type:"model/vnd.usdz+zip"}),P=URL.createObjectURL(ae),E=document.createElement("a");E.setAttribute("rel","ar"),E.href=P,E.appendChild(document.createElement("img")),document.body.appendChild(E),E.click(),window.setTimeout(()=>{E.remove(),URL.revokeObjectURL(P)},15e3)}catch(Xt){console.error("[AR] USDZ export failed",Xt)}}},xe=N=>wt(Xt=>[...Xt,{id:Ht.current++,...N}]),on=N=>{const Xt=t.current;Xt&&N.forEach(ae=>{ae==="reset"?Xt.resetCloth():ae==="nudge"?Xt.poke():ae==="stretch"?Xt.demoStretch():ae==="closeup"?Xt.zoomTo(.6):ae==="zoomout"?Xt.zoomTo(1.12):ae==="spin"?Xt.spin():ae==="drape"?(Xt.resetCloth(),window.setTimeout(()=>t.current?.poke(),140)):ae==="splash"&&Xt.splash()})},tn=(N,Xt)=>{const ae=N.trim();if(!ae)return;xe({role:"user",text:Xt??ae});const P=IR(yt.current,ae);yt.current=P.ctx,P.selectFabric&&a(P.selectFabric),Object.prototype.hasOwnProperty.call(P,"setColor")&&c(P.setColor??null),P.demo&&on(P.demo),P.reply.forEach((E,Q)=>setTimeout(()=>xe({role:"bot",...E}),260*Q+220)),xt("")},Je=Et[Et.length-1],ln=[...Et].reverse().find(N=>N.role==="bot"),ze=o??sn[n].material.baseColor,en=N=>Bl.find(Xt=>Xt.name===N)?.hex;return Tt.jsxs(Tt.Fragment,{children:[Tt.jsx("div",{id:"canvas-host",ref:s}),Tt.jsxs("div",{className:"brand",children:[Tt.jsx("span",{className:"k",children:"lululemon"}),Tt.jsx("span",{className:"t",children:"FABLAB"})]}),Tt.jsxs("div",{className:"ui",children:[Tt.jsx("div",{className:"topbar",children:J!=="none"&&Tt.jsx("button",{className:"pill accent",onClick:Se,children:"View in AR"})}),Tt.jsxs("div",{className:"dock"+(u?" open":""),children:[Tt.jsxs("div",{className:"stack",children:[Tt.jsx(Js,{label:"Metrics",value:b?`${b.fps} fps`:"—",live:!0,open:M,onToggle:()=>y(N=>!N),children:b&&Tt.jsxs(Tt.Fragment,{children:[Tt.jsxs("span",{className:"pm",children:[Tt.jsx("i",{children:"fps"}),Tt.jsx("b",{style:{color:b.fps>=50?"#1f9d55":b.fps>=30?"#b8860b":"#d1202f"},children:b.fps})]}),Tt.jsxs("span",{className:"pm",children:[Tt.jsx("i",{children:"frame"}),Tt.jsxs("b",{children:[b.frameMs,"ms"]})]}),Tt.jsxs("span",{className:"pm",children:[Tt.jsx("i",{children:"heap"}),Tt.jsx("b",{children:b.heapUsed!=null?`${b.heapUsed}MB`:"n/a"})]}),Tt.jsxs("span",{className:"pm",children:[Tt.jsx("i",{children:"calls"}),Tt.jsx("b",{children:b.calls})]}),Tt.jsxs("span",{className:"pm",children:[Tt.jsx("i",{children:"tris"}),Tt.jsxs("b",{children:[(b.tris/1e3).toFixed(0),"k"]})]}),Tt.jsxs("span",{className:"pm",children:[Tt.jsx("i",{children:"verts"}),Tt.jsx("b",{children:b.verts.toLocaleString()})]}),Tt.jsxs("span",{className:"pm",children:[Tt.jsx("i",{children:"px ratio"}),Tt.jsxs("b",{children:[b.pr,"×"]})]})]})}),Tt.jsx(Js,{label:"Quality",value:D,open:Z,onToggle:()=>ut(N=>!N),children:[...gR].reverse().map(N=>Tt.jsx("button",{className:N===D?"sel":"",onClick:()=>L(N),children:N},N))}),Tt.jsx(Js,{label:"Lighting",value:w,open:W,onToggle:()=>V(N=>!N),children:_R.map(N=>Tt.jsx("button",{className:N===w?"sel":"",onClick:()=>I(N),children:N},N))}),Tt.jsx(Js,{label:"Effectors",value:`${Y_.length} sliders`,open:U,onToggle:()=>B(N=>!N),children:Y_.map(N=>Tt.jsxs("label",{className:"psl",children:[Tt.jsx("span",{children:N.label}),Tt.jsx("input",{type:"range",min:0,max:1,step:.01,value:z[N.key],onChange:Xt=>H(ae=>({...ae,[N.key]:+Xt.target.value}))})]},N.key))}),Tt.jsxs(Js,{label:"Water",value:`${Math.round(ht*200)}% absorbent`,open:T,onToggle:()=>O(N=>!N),children:[Tt.jsxs("label",{className:"psl",children:[Tt.jsx("span",{children:"Absorbency"}),Tt.jsx("input",{type:"range",min:0,max:1,step:.01,value:ht,onChange:N=>j(+N.target.value)})]}),Tt.jsx("button",{className:"rail-action",onClick:()=>t.current?.splash(),children:"Splash"})]}),Tt.jsxs(Js,{label:"Color",value:Tt.jsx("span",{className:"c-dot",style:{background:ze}},ze),open:g,onToggle:()=>v(N=>!N),children:[Tt.jsx("button",{className:"sw"+(o==null?" sel":""),style:{background:sn[n].material.baseColor},title:"Original color","aria-label":"Original color",onClick:()=>c(null)}),Bl.map(N=>Tt.jsx("button",{className:"sw"+(o===N.hex?" sel":""),style:{background:N.hex},title:N.name,"aria-label":N.name,onClick:()=>c(N.hex)},N.hex))]}),Tt.jsx(Js,{label:"Fabric",value:sn[n].label,open:_,onToggle:()=>x(N=>!N),children:Di.map(N=>Tt.jsx("button",{className:N===n?"sel":"",onClick:()=>a(N),children:sn[N].label},N))}),Tt.jsxs("div",{className:"convo"+(d?" open":""),children:[d&&Tt.jsxs(Tt.Fragment,{children:[Tt.jsx("div",{className:"stream",ref:te,children:Et.slice(-8).map(N=>Tt.jsxs("div",{className:"msg "+N.role,children:[Tt.jsx("span",{children:N.text}),N.product&&Tt.jsxs("a",{className:"prodcard",href:N.product.url,target:"_blank",rel:"noreferrer",children:[Tt.jsx("span",{className:"pn",children:N.product.name}),Tt.jsxs("span",{className:"pp",children:[N.product.price," →"]})]})]},N.id))}),Je?.chips&&Je.role==="bot"&&Tt.jsx("div",{className:"chips",children:Je.chips.map(N=>Tt.jsxs("button",{className:"chip2",onClick:()=>tn(N.value,N.label),children:[en(N.value)&&Tt.jsx("span",{className:"cdot",style:{background:en(N.value)}}),N.label]},N.value))})]}),Tt.jsxs("div",{className:"pillmenu chatpill"+(d?" open":""),children:[Tt.jsxs("button",{className:"ph",onClick:()=>p(N=>!N),"aria-expanded":d,children:[Tt.jsx("span",{className:"tog",children:"+"}),Tt.jsx("span",{className:"c-lab",children:"Guide"})]}),Tt.jsx("div",{className:"grow gval","aria-hidden":d,children:Tt.jsx("div",{className:"gin",children:Tt.jsx("span",{className:"c-txt",children:ln?ln.text:"Ask me anything"})})}),Tt.jsx("div",{className:"grow gopts","aria-hidden":!d,children:Tt.jsx("div",{className:"gin",children:Tt.jsxs("form",{className:"askin",onSubmit:N=>{N.preventDefault(),tn(tt)},children:[Tt.jsx("input",{value:tt,onChange:N=>xt(N.target.value),placeholder:"Say anything…","aria-label":"Message the FABLAB guide"}),Tt.jsx("button",{className:"askbtn",type:"submit","aria-label":"Send",children:"→"})]})})})]})]})]}),Tt.jsxs("button",{className:"pillmenu menu-toggle"+(u?" open":""),onClick:()=>f(N=>!N),"aria-expanded":u,children:[Tt.jsx("span",{className:"tog",children:"+"}),Tt.jsx("span",{className:"c-lab",children:"Menu"})]})]})]}),Tt.jsxs("div",{id:"ar-overlay",ref:_t,style:{display:St?"flex":"none"},children:[Tt.jsxs("div",{className:"ar-top",children:[Tt.jsx("span",{className:"ar-brand",children:"FABLAB · AR"}),Tt.jsx("button",{className:"ar-exit",onClick:()=>t.current?.endAR(),children:"Exit AR"})]}),Tt.jsx("div",{className:"ar-hint",children:"Touch and drag the fabric to shape it"}),Tt.jsxs("div",{className:"ar-bottom",children:[Tt.jsx("div",{className:"ar-rail",children:Di.map(N=>Tt.jsxs("button",{className:N===n?"sel":"",onClick:()=>a(N),children:[Tt.jsx("span",{className:"dot",style:{background:sn[N].material.baseColor}}),sn[N].label]},N))}),Tt.jsx("button",{className:"ar-poke",onClick:()=>t.current?.splash(),children:"Splash"}),Tt.jsx("button",{className:"ar-poke",onClick:()=>t.current?.poke(),children:"Nudge it"})]})]})]})}lS.createRoot(document.getElementById("root")).render(Tt.jsx(ZR,{}));
