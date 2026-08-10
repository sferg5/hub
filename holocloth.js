(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var $h={exports:{}},cl={};var Jv;function zM(){if(Jv)return cl;Jv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return cl.Fragment=t,cl.jsx=n,cl.jsxs=n,cl}var t_;function HM(){return t_||(t_=1,$h.exports=zM()),$h.exports}var Ht=HM(),Jh={exports:{}},ul={},td={exports:{}},ed={};var e_;function GM(){return e_||(e_=1,(function(s){function t(B,H){var z=B.length;B.push(H);t:for(;0<z;){var et=z-1>>>1,mt=B[et];if(0<o(mt,H))B[et]=H,B[z]=mt,z=et;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var H=B[0],z=B.pop();if(z!==H){B[0]=z;t:for(var et=0,mt=B.length,D=mt>>>1;et<D;){var X=2*(et+1)-1,_t=B[X],Et=X+1,Tt=B[Et];if(0>o(_t,z))Et<mt&&0>o(Tt,_t)?(B[et]=Tt,B[Et]=z,et=Et):(B[et]=_t,B[X]=z,et=X);else if(Et<mt&&0>o(Tt,z))B[et]=Tt,B[Et]=z,et=Et;else break t}}return H}function o(B,H){var z=B.sortIndex-H.sortIndex;return z!==0?z:B.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var m=[],d=[],g=1,_=null,v=3,x=!1,b=!1,w=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var H=n(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=B)a(d),H.sortIndex=H.expirationTime,t(m,H);else break;H=n(d)}}function F(B){if(w=!1,A(B),!b)if(n(m)!==null)b=!0,N||(N=!0,Y());else{var H=n(d);H!==null&&Q(F,H.startTime-B)}}var N=!1,O=-1,T=5,U=-1;function W(){return S?!0:!(s.unstable_now()-U<T)}function V(){if(S=!1,N){var B=s.unstable_now();U=B;var H=!0;try{t:{b=!1,w&&(w=!1,L(O),O=-1),x=!0;var z=v;try{e:{for(A(B),_=n(m);_!==null&&!(_.expirationTime>B&&W());){var et=_.callback;if(typeof et=="function"){_.callback=null,v=_.priorityLevel;var mt=et(_.expirationTime<=B);if(B=s.unstable_now(),typeof mt=="function"){_.callback=mt,A(B),H=!0;break e}_===n(m)&&a(m),A(B)}else a(m);_=n(m)}if(_!==null)H=!0;else{var D=n(d);D!==null&&Q(F,D.startTime-B),H=!1}}break t}finally{_=null,v=z,x=!1}H=void 0}}finally{H?Y():N=!1}}}var Y;if(typeof P=="function")Y=function(){P(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,ft=ut.port2;ut.port1.onmessage=V,Y=function(){ft.postMessage(null)}}else Y=function(){M(V,0)};function Q(B,H){O=M(function(){B(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var z=v;v=H;try{return B()}finally{v=z}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var z=v;v=B;try{return H()}finally{v=z}},s.unstable_scheduleCallback=function(B,H,z){var et=s.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?et+z:et):z=et,B){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=z+mt,B={id:g++,callback:H,priorityLevel:B,startTime:z,expirationTime:mt,sortIndex:-1},z>et?(B.sortIndex=z,t(d,B),n(m)===null&&B===n(d)&&(w?(L(O),O=-1):w=!0,Q(F,z-et))):(B.sortIndex=mt,t(m,B),b||x||(b=!0,N||(N=!0,Y()))),B},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(B){var H=v;return function(){var z=v;v=H;try{return B.apply(this,arguments)}finally{v=z}}}})(ed)),ed}var n_;function VM(){return n_||(n_=1,td.exports=GM()),td.exports}var nd={exports:{}},le={};var i_;function kM(){if(i_)return le;i_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,S={};function M(D,X,_t){this.props=D,this.context=X,this.refs=S,this.updater=_t||b}M.prototype.isReactComponent={},M.prototype.setState=function(D,X){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,X,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=M.prototype;function P(D,X,_t){this.props=D,this.context=X,this.refs=S,this.updater=_t||b}var A=P.prototype=new L;A.constructor=P,w(A,M.prototype),A.isPureReactComponent=!0;var F=Array.isArray;function N(){}var O={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(D,X,_t){var Et=_t.ref;return{$$typeof:s,type:D,key:X,ref:Et!==void 0?Et:null,props:_t}}function W(D,X){return U(D.type,X,D.props)}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function Y(D){var X={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(_t){return X[_t]})}var ut=/\/+/g;function ft(D,X){return typeof D=="object"&&D!==null&&D.key!=null?Y(""+D.key):X.toString(36)}function Q(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(X){D.status==="pending"&&(D.status="fulfilled",D.value=X)},function(X){D.status==="pending"&&(D.status="rejected",D.reason=X)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function B(D,X,_t,Et,Tt){var tt=typeof D;(tt==="undefined"||tt==="boolean")&&(D=null);var Mt=!1;if(D===null)Mt=!0;else switch(tt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(D.$$typeof){case s:case t:Mt=!0;break;case g:return Mt=D._init,B(Mt(D._payload),X,_t,Et,Tt)}}if(Mt)return Tt=Tt(D),Mt=Et===""?"."+ft(D,0):Et,F(Tt)?(_t="",Mt!=null&&(_t=Mt.replace(ut,"$&/")+"/"),B(Tt,X,_t,"",function(ne){return ne})):Tt!=null&&(V(Tt)&&(Tt=W(Tt,_t+(Tt.key==null||D&&D.key===Tt.key?"":(""+Tt.key).replace(ut,"$&/")+"/")+Mt)),X.push(Tt)),1;Mt=0;var St=Et===""?".":Et+":";if(F(D))for(var It=0;It<D.length;It++)Et=D[It],tt=St+ft(Et,It),Mt+=B(Et,X,_t,tt,Tt);else if(It=x(D),typeof It=="function")for(D=It.call(D),It=0;!(Et=D.next()).done;)Et=Et.value,tt=St+ft(Et,It++),Mt+=B(Et,X,_t,tt,Tt);else if(tt==="object"){if(typeof D.then=="function")return B(Q(D),X,_t,Et,Tt);throw X=String(D),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function H(D,X,_t){if(D==null)return D;var Et=[],Tt=0;return B(D,Et,"","",function(tt){return X.call(_t,tt,Tt++)}),Et}function z(D){if(D._status===-1){var X=D._result;X=X(),X.then(function(_t){(D._status===0||D._status===-1)&&(D._status=1,D._result=_t)},function(_t){(D._status===0||D._status===-1)&&(D._status=2,D._result=_t)}),D._status===-1&&(D._status=0,D._result=X)}if(D._status===1)return D._result.default;throw D._result}var et=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},mt={map:H,forEach:function(D,X,_t){H(D,function(){X.apply(this,arguments)},_t)},count:function(D){var X=0;return H(D,function(){X++}),X},toArray:function(D){return H(D,function(X){return X})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return le.Activity=_,le.Children=mt,le.Component=M,le.Fragment=n,le.Profiler=o,le.PureComponent=P,le.StrictMode=a,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,le.__COMPILER_RUNTIME={__proto__:null,c:function(D){return O.H.useMemoCache(D)}},le.cache=function(D){return function(){return D.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(D,X,_t){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Et=w({},D.props),Tt=D.key;if(X!=null)for(tt in X.key!==void 0&&(Tt=""+X.key),X)!T.call(X,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&X.ref===void 0||(Et[tt]=X[tt]);var tt=arguments.length-2;if(tt===1)Et.children=_t;else if(1<tt){for(var Mt=Array(tt),St=0;St<tt;St++)Mt[St]=arguments[St+2];Et.children=Mt}return U(D.type,Tt,Et)},le.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},le.createElement=function(D,X,_t){var Et,Tt={},tt=null;if(X!=null)for(Et in X.key!==void 0&&(tt=""+X.key),X)T.call(X,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Tt[Et]=X[Et]);var Mt=arguments.length-2;if(Mt===1)Tt.children=_t;else if(1<Mt){for(var St=Array(Mt),It=0;It<Mt;It++)St[It]=arguments[It+2];Tt.children=St}if(D&&D.defaultProps)for(Et in Mt=D.defaultProps,Mt)Tt[Et]===void 0&&(Tt[Et]=Mt[Et]);return U(D,tt,Tt)},le.createRef=function(){return{current:null}},le.forwardRef=function(D){return{$$typeof:h,render:D}},le.isValidElement=V,le.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:z}},le.memo=function(D,X){return{$$typeof:d,type:D,compare:X===void 0?null:X}},le.startTransition=function(D){var X=O.T,_t={};O.T=_t;try{var Et=D(),Tt=O.S;Tt!==null&&Tt(_t,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(N,et)}catch(tt){et(tt)}finally{X!==null&&_t.types!==null&&(X.types=_t.types),O.T=X}},le.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},le.use=function(D){return O.H.use(D)},le.useActionState=function(D,X,_t){return O.H.useActionState(D,X,_t)},le.useCallback=function(D,X){return O.H.useCallback(D,X)},le.useContext=function(D){return O.H.useContext(D)},le.useDebugValue=function(){},le.useDeferredValue=function(D,X){return O.H.useDeferredValue(D,X)},le.useEffect=function(D,X){return O.H.useEffect(D,X)},le.useEffectEvent=function(D){return O.H.useEffectEvent(D)},le.useId=function(){return O.H.useId()},le.useImperativeHandle=function(D,X,_t){return O.H.useImperativeHandle(D,X,_t)},le.useInsertionEffect=function(D,X){return O.H.useInsertionEffect(D,X)},le.useLayoutEffect=function(D,X){return O.H.useLayoutEffect(D,X)},le.useMemo=function(D,X){return O.H.useMemo(D,X)},le.useOptimistic=function(D,X){return O.H.useOptimistic(D,X)},le.useReducer=function(D,X,_t){return O.H.useReducer(D,X,_t)},le.useRef=function(D){return O.H.useRef(D)},le.useState=function(D){return O.H.useState(D)},le.useSyncExternalStore=function(D,X,_t){return O.H.useSyncExternalStore(D,X,_t)},le.useTransition=function(){return O.H.useTransition()},le.version="19.2.7",le}var a_;function V0(){return a_||(a_=1,nd.exports=kM()),nd.exports}var id={exports:{}},Yn={};var s_;function WM(){if(s_)return Yn;s_=1;var s=V0();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Yn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,g)},Yn.flushSync=function(m){var d=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=d,a.p=g,a.d.f()}},Yn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(m,d))},Yn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Yn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Yn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(m)},Yn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Yn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(m)},Yn.requestFormReset=function(m){a.d.r(m)},Yn.unstable_batchedUpdates=function(m,d){return m(d)},Yn.useFormState=function(m,d,g){return u.H.useFormState(m,d,g)},Yn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var r_;function XM(){if(r_)return id.exports;r_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),id.exports=WM(),id.exports}var o_;function qM(){if(o_)return ul;o_=1;var s=VM(),t=V0(),n=XM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var f=r.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===r)return m(f),e;if(p===l)return m(f),i;p=p.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=p;else{for(var y=!1,C=f.child;C;){if(C===r){y=!0,r=f,l=p;break}if(C===l){y=!0,l=f,r=p;break}C=C.sibling}if(!y){for(C=p.child;C;){if(C===r){y=!0,r=p,l=f;break}if(C===l){y=!0,l=p,r=f;break}C=C.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),P=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case M:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case N:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case P:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ft(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return ft(e(i))}catch{}}return null}var Q=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},et=[],mt=-1;function D(e){return{current:e}}function X(e){0>mt||(e.current=et[mt],et[mt]=null,mt--)}function _t(e,i){mt++,et[mt]=e.current,e.current=i}var Et=D(null),Tt=D(null),tt=D(null),Mt=D(null);function St(e,i){switch(_t(tt,i),_t(Tt,e),_t(Et,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Sv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Sv(i),e=bv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(Et),_t(Et,e)}function It(){X(Et),X(Tt),X(tt)}function ne(e){e.memoizedState!==null&&_t(Mt,e);var i=Et.current,r=bv(i,e.type);i!==r&&(_t(Tt,e),_t(Et,r))}function Qt(e){Tt.current===e&&(X(Et),X(Tt)),Mt.current===e&&(X(Mt),sl._currentValue=z)}var Ue,oe;function ge(e){if(Ue===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Ue=i&&i[1]||"",oe=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+e+oe}var Ae=!1;function _e(e,i){if(!e||Ae)return"";Ae=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ct){var lt=ct}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ct){lt=ct}e.call(yt.prototype)}}else{try{throw Error()}catch(ct){lt=ct}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ct){if(ct&&lt&&typeof ct.stack=="string")return[ct.stack,lt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),y=p[0],C=p[1];if(y&&C){var G=y.split(`
`),it=C.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<it.length&&!it[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===it.length)for(l=G.length-1,f=it.length-1;1<=l&&0<=f&&G[l]!==it[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==it[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==it[f]){var gt=`
`+G[l].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=l&&0<=f);break}}}finally{Ae=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ge(r):""}function cn(e,i){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return e.child!==i&&i!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return ge("Activity");default:return""}}function un(e){try{var i="",r=null;do i+=cn(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var fn=Object.prototype.hasOwnProperty,mn=s.unstable_scheduleCallback,Qe=s.unstable_cancelCallback,hn=s.unstable_shouldYield,K=s.unstable_requestPaint,ke=s.unstable_now,Ne=s.unstable_getCurrentPriorityLevel,I=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,J=s.unstable_NormalPriority,rt=s.unstable_LowPriority,dt=s.unstable_IdlePriority,At=s.log,Dt=s.unstable_setDisableYieldValue,ht=null,pt=null;function Rt(e){if(typeof At=="function"&&Dt(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ht,e)}catch{}}var Bt=Math.clz32?Math.clz32:$t,Lt=Math.log,Ut=Math.LN2;function $t(e){return e>>>=0,e===0?32:31-(Lt(e)/Ut|0)|0}var Jt=256,re=262144,q=4194304;function wt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,p=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~p,l!==0?f=wt(l):(y&=C,y!==0?f=wt(y):r||(r=C&~e,r!==0&&(f=wt(r))))):(C=l&~p,C!==0?f=wt(C):y!==0?f=wt(y):r||(r=l&~e,r!==0&&(f=wt(r)))),f===0?0:i!==0&&i!==f&&(i&p)===0&&(p=f&-f,r=i&-i,p>=r||p===32&&(r&4194048)!==0)?i:f}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ft(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=q;return q<<=1,(q&62914560)===0&&(q=4194304),e}function qt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Vt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nn(e,i,r,l,f,p){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,G=e.expirationTimes,it=e.hiddenUpdates;for(r=y&~r;0<r;){var gt=31-Bt(r),yt=1<<gt;C[gt]=0,G[gt]=-1;var lt=it[gt];if(lt!==null)for(it[gt]=null,gt=0;gt<lt.length;gt++){var ct=lt[gt];ct!==null&&(ct.lane&=-536870913)}r&=~yt}l!==0&&Fe(e,l,0),p!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=p&~(y&~i))}function Fe(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Bt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function di(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-Bt(r),f=1<<l;f&i|e[l]&i&&(e[l]|=i),r&=~f}}function pi(e,i){var r=i&-i;return r=(r&42)!==0?1:xo(r),(r&(e.suspendedLanes|i))!==0?0:r}function xo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:qv(e.type))}function lr(e,i){var r=H.p;try{return H.p=e,i()}finally{H.p=r}}var ea=Math.random().toString(36).slice(2),_n="__reactFiber$"+ea,Fn="__reactProps$"+ea,ii="__reactContainer$"+ea,Cs="__reactEvents$"+ea,Ol="__reactListeners$"+ea,Il="__reactHandles$"+ea,Ds="__reactResources$"+ea,Xa="__reactMarker$"+ea;function qa(e){delete e[_n],delete e[Fn],delete e[Cs],delete e[Ol],delete e[Il]}function ma(e){var i=e[_n];if(i)return i;for(var r=e.parentNode;r;){if(i=r[ii]||r[_n]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Dv(e);e!==null;){if(r=e[_n])return r;e=Dv(e)}return i}e=r,r=e.parentNode}return null}function ga(e){if(e=e[_n]||e[ii]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Us(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ya(e){var i=e[Ds];return i||(i=e[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function xn(e){e[Xa]=!0}var Fl=new Set,R={};function Z(e,i){ot(e,i),ot(e+"Capture",i)}function ot(e,i){for(R[e]=i,e=0;e<i.length;e++)Fl.add(i[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},Pt={};function Gt(e){return fn.call(Pt,e)?!0:fn.call(st,e)?!1:at.test(e)?Pt[e]=!0:(st[e]=!0,!1)}function Nt(e,i,r){if(Gt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Wt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function kt(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function jt(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){r=""+y,p.call(this,y)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Re(e){if(!e._valueTracker){var i=fe(e)?"checked":"value";e._valueTracker=jt(e,i,""+e[i])}}function an(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=fe(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Ze(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Be=/[\n"\\]/g;function ze(e){return e.replace(Be,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function zt(e,i,r,l,f,p,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+te(i)):e.value!==""+te(i)&&(e.value=""+te(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?xe(e,y,te(i)):r!=null?xe(e,y,te(r)):l!=null&&e.removeAttribute("value"),f==null&&p!=null&&(e.defaultChecked=!!p),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+te(C):e.removeAttribute("name")}function qn(e,i,r,l,f,p,y,C){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),i!=null||r!=null){if(!(p!=="submit"&&p!=="reset"||i!=null)){Re(e);return}r=r!=null?""+te(r):"",i=i!=null?""+te(i):r,C||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Re(e)}function xe(e,i,r){i==="number"&&Ze(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function An(e,i,r,l){if(e=e.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=i.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+te(r),i=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function mi(e,i,r){if(i!=null&&(i=""+te(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+te(r):""}function Gi(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(Q(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=te(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Re(e)}function gi(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var He=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||He.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Vi(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&sn(e,f,l)}else for(var p in i)i.hasOwnProperty(p)&&sn(e,p,i[p])}function Pe(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var na=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Za=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ns(e){return Za.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function va(){}var Zu=null;function Ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cr=null,ur=null;function Mp(e){var i=ga(e);if(i&&(e=i.stateNode)){var r=e[Fn]||null;t:switch(e=i.stateNode,i.type){case"input":if(zt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ze(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var f=l[Fn]||null;if(!f)throw Error(a(90));zt(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&an(l)}break t;case"textarea":mi(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&An(e,!!r.multiple,i,!1)}}}var Qu=!1;function Sp(e,i,r){if(Qu)return e(i,r);Qu=!0;try{var l=e(i);return l}finally{if(Qu=!1,(cr!==null||ur!==null)&&(Ec(),cr&&(i=cr,e=ur,ur=cr=null,Mp(i),e)))for(i=0;i<e.length;i++)Mp(e[i])}}function So(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Fn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(_a)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){ju=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{ju=!1}var Ka=null,$u=null,Bl=null;function bp(){if(Bl)return Bl;var e,i=$u,r=i.length,l,f="value"in Ka?Ka.value:Ka.textContent,p=f.length;for(e=0;e<r&&i[e]===f[e];e++);var y=r-e;for(l=1;l<=y&&i[r-l]===f[p-l];l++);return Bl=f.slice(e,1<l?1-l:void 0)}function zl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Hl(){return!0}function Ep(){return!1}function ai(e){function i(r,l,f,p,y){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Hl:Ep,this.isPropagationStopped=Ep,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gl=ai(Ls),Eo=_({},Ls,{view:0,detail:0}),Fx=ai(Eo),Ju,tf,To,Vl=_({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(Ju=e.screenX-To.screenX,tf=e.screenY-To.screenY):tf=Ju=0,To=e),Ju)},movementY:function(e){return"movementY"in e?e.movementY:tf}}),Tp=ai(Vl),Bx=_({},Vl,{dataTransfer:0}),zx=ai(Bx),Hx=_({},Eo,{relatedTarget:0}),ef=ai(Hx),Gx=_({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=ai(Gx),kx=_({},Ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wx=ai(kx),Xx=_({},Ls,{data:0}),Ap=ai(Xx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Zx[e])?!!i[e]:!1}function nf(){return Kx}var Qx=_({},Eo,{key:function(e){if(e.key){var i=qx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(e){return e.type==="keypress"?zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jx=ai(Qx),$x=_({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=ai($x),Jx=_({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),ty=ai(Jx),ey=_({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=ai(ey),iy=_({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=ai(iy),sy=_({},Ls,{newState:0,oldState:0}),ry=ai(sy),oy=[9,13,27,32],af=_a&&"CompositionEvent"in window,Ao=null;_a&&"documentMode"in document&&(Ao=document.documentMode);var ly=_a&&"TextEvent"in window&&!Ao,Rp=_a&&(!af||Ao&&8<Ao&&11>=Ao),Cp=" ",Dp=!1;function Up(e,i){switch(e){case"keyup":return oy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function cy(e,i){switch(e){case"compositionend":return Np(i);case"keypress":return i.which!==32?null:(Dp=!0,Cp);case"textInput":return e=i.data,e===Cp&&Dp?null:e;default:return null}}function uy(e,i){if(fr)return e==="compositionend"||!af&&Up(e,i)?(e=bp(),Bl=$u=Ka=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rp&&i.locale!=="ko"?null:i.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!fy[e.type]:i==="textarea"}function Pp(e,i,r,l){cr?ur?ur.push(l):ur=[l]:cr=l,i=Uc(i,"onChange"),0<i.length&&(r=new Gl("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var wo=null,Ro=null;function hy(e){gv(e,0)}function kl(e){var i=Us(e);if(an(i))return e}function Op(e,i){if(e==="change")return i}var Ip=!1;if(_a){var sf;if(_a){var rf="oninput"in document;if(!rf){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),rf=typeof Fp.oninput=="function"}sf=rf}else sf=!1;Ip=sf&&(!document.documentMode||9<document.documentMode)}function Bp(){wo&&(wo.detachEvent("onpropertychange",zp),Ro=wo=null)}function zp(e){if(e.propertyName==="value"&&kl(Ro)){var i=[];Pp(i,Ro,e,Ku(e)),Sp(hy,i)}}function dy(e,i,r){e==="focusin"?(Bp(),wo=i,Ro=r,wo.attachEvent("onpropertychange",zp)):e==="focusout"&&Bp()}function py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(Ro)}function my(e,i){if(e==="click")return kl(i)}function gy(e,i){if(e==="input"||e==="change")return kl(i)}function vy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var vi=typeof Object.is=="function"?Object.is:vy;function Co(e,i){if(vi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!fn.call(i,f)||!vi(e[f],i[f]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gp(e,i){var r=Hp(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Hp(r)}}function Vp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Vp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Ze(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Ze(e.document)}return i}function of(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var _y=_a&&"documentMode"in document&&11>=document.documentMode,hr=null,lf=null,Do=null,cf=!1;function Wp(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;cf||hr==null||hr!==Ze(l)||(l=hr,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Do&&Co(Do,l)||(Do=l,l=Uc(lf,"onSelect"),0<l.length&&(i=new Gl("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=hr)))}function Ps(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var dr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},uf={},Xp={};_a&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Os(e){if(uf[e])return uf[e];if(!dr[e])return e;var i=dr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in Xp)return uf[e]=i[r];return e}var qp=Os("animationend"),Yp=Os("animationiteration"),Zp=Os("animationstart"),xy=Os("transitionrun"),yy=Os("transitionstart"),My=Os("transitioncancel"),Kp=Os("transitionend"),Qp=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function ki(e,i){Qp.set(e,i),Z(i,[e])}var Wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ui=[],pr=0,hf=0;function Xl(){for(var e=pr,i=hf=pr=0;i<e;){var r=Ui[i];Ui[i++]=null;var l=Ui[i];Ui[i++]=null;var f=Ui[i];Ui[i++]=null;var p=Ui[i];if(Ui[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}p!==0&&jp(r,f,p)}}function ql(e,i,r,l){Ui[pr++]=e,Ui[pr++]=i,Ui[pr++]=r,Ui[pr++]=l,hf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function df(e,i,r,l){return ql(e,i,r,l),Yl(e)}function Is(e,i){return ql(e,null,null,i),Yl(e)}function jp(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,p=e.return;p!==null;)p.childLanes|=r,l=p.alternate,l!==null&&(l.childLanes|=r),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(f=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,f&&i!==null&&(f=31-Bt(r),e=p.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=r|536870912),p):null}function Yl(e){if(50<$o)throw $o=0,Sh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var mr={};function Sy(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,i,r,l){return new Sy(e,i,r,l)}function pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,i){var r=e.alternate;return r===null?(r=_i(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function $p(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Zl(e,i,r,l,f,p){var y=0;if(l=e,typeof e=="function")pf(e)&&(y=1);else if(typeof e=="string")y=wM(e,r,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=_i(31,r,i,f),e.elementType=U,e.lanes=p,e;case w:return Fs(r.children,f,p,i);case S:y=8,f|=24;break;case M:return e=_i(12,r,i,f|2),e.elementType=M,e.lanes=p,e;case F:return e=_i(13,r,i,f),e.elementType=F,e.lanes=p,e;case N:return e=_i(19,r,i,f),e.elementType=N,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:y=10;break t;case L:y=9;break t;case A:y=11;break t;case O:y=14;break t;case T:y=16,l=null;break t}y=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=_i(y,r,i,f),i.elementType=e,i.type=l,i.lanes=p,i}function Fs(e,i,r,l){return e=_i(7,e,l,i),e.lanes=r,e}function mf(e,i,r){return e=_i(6,e,null,i),e.lanes=r,e}function Jp(e){var i=_i(18,null,null,0);return i.stateNode=e,i}function gf(e,i,r){return i=_i(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var tm=new WeakMap;function Ni(e,i){if(typeof e=="object"&&e!==null){var r=tm.get(e);return r!==void 0?r:(i={value:e,source:i,stack:un(i)},tm.set(e,i),i)}return{value:e,source:i,stack:un(i)}}var gr=[],vr=0,Kl=null,Uo=0,Li=[],Pi=0,Qa=null,ia=1,aa="";function ya(e,i){gr[vr++]=Uo,gr[vr++]=Kl,Kl=e,Uo=i}function em(e,i,r){Li[Pi++]=ia,Li[Pi++]=aa,Li[Pi++]=Qa,Qa=e;var l=ia;e=aa;var f=32-Bt(l)-1;l&=~(1<<f),r+=1;var p=32-Bt(i)+f;if(30<p){var y=f-f%5;p=(l&(1<<y)-1).toString(32),l>>=y,f-=y,ia=1<<32-Bt(i)+f|r<<f|l,aa=p+e}else ia=1<<p|r<<f|l,aa=e}function vf(e){e.return!==null&&(ya(e,1),em(e,1,0))}function _f(e){for(;e===Kl;)Kl=gr[--vr],gr[vr]=null,Uo=gr[--vr],gr[vr]=null;for(;e===Qa;)Qa=Li[--Pi],Li[Pi]=null,aa=Li[--Pi],Li[Pi]=null,ia=Li[--Pi],Li[Pi]=null}function nm(e,i){Li[Pi++]=ia,Li[Pi++]=aa,Li[Pi++]=Qa,ia=i.id,aa=i.overflow,Qa=e}var Bn=null,$e=null,we=!1,ja=null,Oi=!1,xf=Error(a(519));function $a(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw No(Ni(i,e)),xf}function im(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[_n]=e,i[Fn]=l,r){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(r=0;r<tl.length;r++)Me(tl[r],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),qn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Gi(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||yv(i.textContent,r)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=va),i=!0):i=!1,i||$a(e,!0)}function am(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Bn=Bn.return}}function _r(e){if(e!==Bn)return!1;if(!we)return am(e),we=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Fh(e.type,e.memoizedProps)),r=!r),r&&$e&&$a(e),am(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));$e=Cv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));$e=Cv(e)}else i===27?(i=$e,hs(e.type)?(e=Vh,Vh=null,$e=e):$e=i):$e=Bn?Fi(e.stateNode.nextSibling):null;return!0}function Bs(){$e=Bn=null,we=!1}function yf(){var e=ja;return e!==null&&(li===null?li=e:li.push.apply(li,e),ja=null),e}function No(e){ja===null?ja=[e]:ja.push(e)}var Mf=D(null),zs=null,Ma=null;function Ja(e,i,r){_t(Mf,i._currentValue),i._currentValue=r}function Sa(e){e._currentValue=Mf.current,X(Mf)}function Sf(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function bf(e,i,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var p=f.dependencies;if(p!==null){var y=f.child;p=p.firstContext;t:for(;p!==null;){var C=p;p=f;for(var G=0;G<i.length;G++)if(C.context===i[G]){p.lanes|=r,C=p.alternate,C!==null&&(C.lanes|=r),Sf(p.return,r,e),l||(y=null);break t}p=C.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(a(341));y.lanes|=r,p=y.alternate,p!==null&&(p.lanes|=r),Sf(y,r,e),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===e){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function xr(e,i,r,l){e=null;for(var f=i,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var C=f.type;vi(f.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(f===Mt.current){if(y=f.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(sl):e=[sl])}f=f.return}e!==null&&bf(i,e,r,l),i.flags|=262144}function Ql(e){for(e=e.firstContext;e!==null;){if(!vi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hs(e){zs=e,Ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return sm(zs,e)}function jl(e,i){return zs===null&&Hs(e),sm(e,i)}function sm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Ma===null){if(e===null)throw Error(a(308));Ma=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ma=Ma.next=i;return r}var by=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},Ey=s.unstable_scheduleCallback,Ty=s.unstable_NormalPriority,yn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ef(){return{controller:new by,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&Ey(Ty,function(){e.controller.abort()})}var Po=null,Tf=0,yr=0,Mr=null;function Ay(e,i){if(Po===null){var r=Po=[];Tf=0,yr=Rh(),Mr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Tf++,i.then(rm,rm),i}function rm(){if(--Tf===0&&Po!==null){Mr!==null&&(Mr.status="fulfilled");var e=Po;Po=null,yr=0,Mr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function wy(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var om=B.S;B.S=function(e,i){Wg=ke(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ay(e,i),om!==null&&om(e,i)};var Gs=D(null);function Af(){var e=Gs.current;return e!==null?e:Ke.pooledCache}function $l(e,i){i===null?_t(Gs,Gs.current):_t(Gs,i.pool)}function lm(){var e=Af();return e===null?null:{parent:yn._currentValue,pool:e}}var Sr=Error(a(460)),wf=Error(a(474)),Jl=Error(a(542)),tc={then:function(){}};function cm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function um(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(va,va),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,hm(e),e;default:if(typeof i.status=="string")i.then(va,va);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,hm(e),e}throw ks=i,Sr}}function Vs(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ks=r,Sr):r}}var ks=null;function fm(){if(ks===null)throw Error(a(459));var e=ks;return ks=null,e}function hm(e){if(e===Sr||e===Jl)throw Error(a(483))}var br=null,Oo=0;function ec(e){var i=Oo;return Oo+=1,br===null&&(br=[]),um(br,e,i)}function Io(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function nc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function dm(e){function i(j,k){if(e){var nt=j.deletions;nt===null?(j.deletions=[k],j.flags|=16):nt.push(k)}}function r(j,k){if(!e)return null;for(;k!==null;)i(j,k),k=k.sibling;return null}function l(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function f(j,k){return j=xa(j,k),j.index=0,j.sibling=null,j}function p(j,k,nt){return j.index=nt,e?(nt=j.alternate,nt!==null?(nt=nt.index,nt<k?(j.flags|=67108866,k):nt):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function y(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function C(j,k,nt,xt){return k===null||k.tag!==6?(k=mf(nt,j.mode,xt),k.return=j,k):(k=f(k,nt),k.return=j,k)}function G(j,k,nt,xt){var ee=nt.type;return ee===w?gt(j,k,nt.props.children,xt,nt.key):k!==null&&(k.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===T&&Vs(ee)===k.type)?(k=f(k,nt.props),Io(k,nt),k.return=j,k):(k=Zl(nt.type,nt.key,nt.props,null,j.mode,xt),Io(k,nt),k.return=j,k)}function it(j,k,nt,xt){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=gf(nt,j.mode,xt),k.return=j,k):(k=f(k,nt.children||[]),k.return=j,k)}function gt(j,k,nt,xt,ee){return k===null||k.tag!==7?(k=Fs(nt,j.mode,xt,ee),k.return=j,k):(k=f(k,nt),k.return=j,k)}function yt(j,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=mf(""+k,j.mode,nt),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return nt=Zl(k.type,k.key,k.props,null,j.mode,nt),Io(nt,k),nt.return=j,nt;case b:return k=gf(k,j.mode,nt),k.return=j,k;case T:return k=Vs(k),yt(j,k,nt)}if(Q(k)||Y(k))return k=Fs(k,j.mode,nt,null),k.return=j,k;if(typeof k.then=="function")return yt(j,ec(k),nt);if(k.$$typeof===P)return yt(j,jl(j,k),nt);nc(j,k)}return null}function lt(j,k,nt,xt){var ee=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ee!==null?null:C(j,k,""+nt,xt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case x:return nt.key===ee?G(j,k,nt,xt):null;case b:return nt.key===ee?it(j,k,nt,xt):null;case T:return nt=Vs(nt),lt(j,k,nt,xt)}if(Q(nt)||Y(nt))return ee!==null?null:gt(j,k,nt,xt,null);if(typeof nt.then=="function")return lt(j,k,ec(nt),xt);if(nt.$$typeof===P)return lt(j,k,jl(j,nt),xt);nc(j,nt)}return null}function ct(j,k,nt,xt,ee){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return j=j.get(nt)||null,C(k,j,""+xt,ee);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case x:return j=j.get(xt.key===null?nt:xt.key)||null,G(k,j,xt,ee);case b:return j=j.get(xt.key===null?nt:xt.key)||null,it(k,j,xt,ee);case T:return xt=Vs(xt),ct(j,k,nt,xt,ee)}if(Q(xt)||Y(xt))return j=j.get(nt)||null,gt(k,j,xt,ee,null);if(typeof xt.then=="function")return ct(j,k,nt,ec(xt),ee);if(xt.$$typeof===P)return ct(j,k,nt,jl(k,xt),ee);nc(k,xt)}return null}function Xt(j,k,nt,xt){for(var ee=null,Ce=null,Yt=k,pe=k=0,be=null;Yt!==null&&pe<nt.length;pe++){Yt.index>pe?(be=Yt,Yt=null):be=Yt.sibling;var De=lt(j,Yt,nt[pe],xt);if(De===null){Yt===null&&(Yt=be);break}e&&Yt&&De.alternate===null&&i(j,Yt),k=p(De,k,pe),Ce===null?ee=De:Ce.sibling=De,Ce=De,Yt=be}if(pe===nt.length)return r(j,Yt),we&&ya(j,pe),ee;if(Yt===null){for(;pe<nt.length;pe++)Yt=yt(j,nt[pe],xt),Yt!==null&&(k=p(Yt,k,pe),Ce===null?ee=Yt:Ce.sibling=Yt,Ce=Yt);return we&&ya(j,pe),ee}for(Yt=l(Yt);pe<nt.length;pe++)be=ct(Yt,j,pe,nt[pe],xt),be!==null&&(e&&be.alternate!==null&&Yt.delete(be.key===null?pe:be.key),k=p(be,k,pe),Ce===null?ee=be:Ce.sibling=be,Ce=be);return e&&Yt.forEach(function(vs){return i(j,vs)}),we&&ya(j,pe),ee}function ae(j,k,nt,xt){if(nt==null)throw Error(a(151));for(var ee=null,Ce=null,Yt=k,pe=k=0,be=null,De=nt.next();Yt!==null&&!De.done;pe++,De=nt.next()){Yt.index>pe?(be=Yt,Yt=null):be=Yt.sibling;var vs=lt(j,Yt,De.value,xt);if(vs===null){Yt===null&&(Yt=be);break}e&&Yt&&vs.alternate===null&&i(j,Yt),k=p(vs,k,pe),Ce===null?ee=vs:Ce.sibling=vs,Ce=vs,Yt=be}if(De.done)return r(j,Yt),we&&ya(j,pe),ee;if(Yt===null){for(;!De.done;pe++,De=nt.next())De=yt(j,De.value,xt),De!==null&&(k=p(De,k,pe),Ce===null?ee=De:Ce.sibling=De,Ce=De);return we&&ya(j,pe),ee}for(Yt=l(Yt);!De.done;pe++,De=nt.next())De=ct(Yt,j,pe,De.value,xt),De!==null&&(e&&De.alternate!==null&&Yt.delete(De.key===null?pe:De.key),k=p(De,k,pe),Ce===null?ee=De:Ce.sibling=De,Ce=De);return e&&Yt.forEach(function(BM){return i(j,BM)}),we&&ya(j,pe),ee}function qe(j,k,nt,xt){if(typeof nt=="object"&&nt!==null&&nt.type===w&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case x:t:{for(var ee=nt.key;k!==null;){if(k.key===ee){if(ee=nt.type,ee===w){if(k.tag===7){r(j,k.sibling),xt=f(k,nt.props.children),xt.return=j,j=xt;break t}}else if(k.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===T&&Vs(ee)===k.type){r(j,k.sibling),xt=f(k,nt.props),Io(xt,nt),xt.return=j,j=xt;break t}r(j,k);break}else i(j,k);k=k.sibling}nt.type===w?(xt=Fs(nt.props.children,j.mode,xt,nt.key),xt.return=j,j=xt):(xt=Zl(nt.type,nt.key,nt.props,null,j.mode,xt),Io(xt,nt),xt.return=j,j=xt)}return y(j);case b:t:{for(ee=nt.key;k!==null;){if(k.key===ee)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){r(j,k.sibling),xt=f(k,nt.children||[]),xt.return=j,j=xt;break t}else{r(j,k);break}else i(j,k);k=k.sibling}xt=gf(nt,j.mode,xt),xt.return=j,j=xt}return y(j);case T:return nt=Vs(nt),qe(j,k,nt,xt)}if(Q(nt))return Xt(j,k,nt,xt);if(Y(nt)){if(ee=Y(nt),typeof ee!="function")throw Error(a(150));return nt=ee.call(nt),ae(j,k,nt,xt)}if(typeof nt.then=="function")return qe(j,k,ec(nt),xt);if(nt.$$typeof===P)return qe(j,k,jl(j,nt),xt);nc(j,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(r(j,k.sibling),xt=f(k,nt),xt.return=j,j=xt):(r(j,k),xt=mf(nt,j.mode,xt),xt.return=j,j=xt),y(j)):r(j,k)}return function(j,k,nt,xt){try{Oo=0;var ee=qe(j,k,nt,xt);return br=null,ee}catch(Yt){if(Yt===Sr||Yt===Jl)throw Yt;var Ce=_i(29,Yt,null,j.mode);return Ce.lanes=xt,Ce.return=j,Ce}}}var Ws=dm(!0),pm=dm(!1),ts=!1;function Rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function es(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ns(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Yl(e),jp(e,null,r),i}return ql(e,l,i,r),Yl(e)}function Fo(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,di(e,r)}}function Df(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};p===null?f=p=y:p=p.next=y,r=r.next}while(r!==null);p===null?f=p=i:p=p.next=i}else f=p=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Uf=!1;function Bo(){if(Uf){var e=Mr;if(e!==null)throw e}}function zo(e,i,r,l){Uf=!1;var f=e.updateQueue;ts=!1;var p=f.firstBaseUpdate,y=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var G=C,it=G.next;G.next=null,y===null?p=it:y.next=it,y=G;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,C=gt.lastBaseUpdate,C!==y&&(C===null?gt.firstBaseUpdate=it:C.next=it,gt.lastBaseUpdate=G))}if(p!==null){var yt=f.baseState;y=0,gt=it=G=null,C=p;do{var lt=C.lane&-536870913,ct=lt!==C.lane;if(ct?(Se&lt)===lt:(l&lt)===lt){lt!==0&&lt===yr&&(Uf=!0),gt!==null&&(gt=gt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Xt=e,ae=C;lt=i;var qe=r;switch(ae.tag){case 1:if(Xt=ae.payload,typeof Xt=="function"){yt=Xt.call(qe,yt,lt);break t}yt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ae.payload,lt=typeof Xt=="function"?Xt.call(qe,yt,lt):Xt,lt==null)break t;yt=_({},yt,lt);break t;case 2:ts=!0}}lt=C.callback,lt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=f.callbacks,ct===null?f.callbacks=[lt]:ct.push(lt))}else ct={lane:lt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},gt===null?(it=gt=ct,G=yt):gt=gt.next=ct,y|=lt;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;ct=C,C=ct.next,ct.next=null,f.lastBaseUpdate=ct,f.shared.pending=null}}while(!0);gt===null&&(G=yt),f.baseState=G,f.firstBaseUpdate=it,f.lastBaseUpdate=gt,p===null&&(f.shared.lanes=0),os|=y,e.lanes=y,e.memoizedState=yt}}function mm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function gm(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)mm(r[e],i)}var Er=D(null),ic=D(0);function vm(e,i){e=Ua,_t(ic,e),_t(Er,i),Ua=e|i.baseLanes}function Nf(){_t(ic,Ua),_t(Er,Er.current)}function Lf(){Ua=ic.current,X(Er),X(ic)}var xi=D(null),Ii=null;function is(e){var i=e.alternate;_t(gn,gn.current&1),_t(xi,e),Ii===null&&(i===null||Er.current!==null||i.memoizedState!==null)&&(Ii=e)}function Pf(e){_t(gn,gn.current),_t(xi,e),Ii===null&&(Ii=e)}function _m(e){e.tag===22?(_t(gn,gn.current),_t(xi,e),Ii===null&&(Ii=e)):as()}function as(){_t(gn,gn.current),_t(xi,xi.current)}function yi(e){X(xi),Ii===e&&(Ii=null),X(gn)}var gn=D(0);function ac(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Hh(r)||Gh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ba=0,he=null,We=null,Mn=null,sc=!1,Tr=!1,Xs=!1,rc=0,Ho=0,Ar=null,Ry=0;function dn(){throw Error(a(321))}function Of(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!vi(e[r],i[r]))return!1;return!0}function If(e,i,r,l,f,p){return ba=p,he=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?eg:jf,Xs=!1,p=r(l,f),Xs=!1,Tr&&(p=ym(i,r,l,f)),xm(e),p}function xm(e){B.H=ko;var i=We!==null&&We.next!==null;if(ba=0,Mn=We=he=null,sc=!1,Ho=0,Ar=null,i)throw Error(a(300));e===null||Sn||(e=e.dependencies,e!==null&&Ql(e)&&(Sn=!0))}function ym(e,i,r,l){he=e;var f=0;do{if(Tr&&(Ar=null),Ho=0,Tr=!1,25<=f)throw Error(a(301));if(f+=1,Mn=We=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}B.H=ng,p=i(r,l)}while(Tr);return p}function Cy(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Go(i):i,e=e.useState()[0],(We!==null?We.memoizedState:null)!==e&&(he.flags|=1024),i}function Ff(){var e=rc!==0;return rc=0,e}function Bf(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function zf(e){if(sc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}sc=!1}ba=0,Mn=We=he=null,Tr=!1,Ho=rc=0,Ar=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?he.memoizedState=Mn=e:Mn=Mn.next=e,Mn}function vn(){if(We===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var i=Mn===null?he.memoizedState:Mn.next;if(i!==null)Mn=i,We=e;else{if(e===null)throw he.alternate===null?Error(a(467)):Error(a(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Mn===null?he.memoizedState=Mn=e:Mn=Mn.next=e}return Mn}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(e){var i=Ho;return Ho+=1,Ar===null&&(Ar=[]),e=um(Ar,e,i),i=he,(Mn===null?i.memoizedState:Mn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?eg:jf),e}function lc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Go(e);if(e.$$typeof===P)return zn(e)}throw Error(a(438,String(e)))}function Hf(e){var i=null,r=he.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=he.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=oc(),he.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=W;return i.index++,r}function Ea(e,i){return typeof i=="function"?i(e):i}function cc(e){var i=vn();return Gf(i,We,e)}function Gf(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=e.baseQueue,p=l.pending;if(p!==null){if(f!==null){var y=f.next;f.next=p.next,p.next=y}i.baseQueue=f=p,l.pending=null}if(p=e.baseState,f===null)e.memoizedState=p;else{i=f.next;var C=y=null,G=null,it=i,gt=!1;do{var yt=it.lane&-536870913;if(yt!==it.lane?(Se&yt)===yt:(ba&yt)===yt){var lt=it.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),yt===yr&&(gt=!0);else if((ba&lt)===lt){it=it.next,lt===yr&&(gt=!0);continue}else yt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(C=G=yt,y=p):G=G.next=yt,he.lanes|=lt,os|=lt;yt=it.action,Xs&&r(p,yt),p=it.hasEagerState?it.eagerState:r(p,yt)}else lt={lane:yt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(C=G=lt,y=p):G=G.next=lt,he.lanes|=yt,os|=yt;it=it.next}while(it!==null&&it!==i);if(G===null?y=p:G.next=C,!vi(p,e.memoizedState)&&(Sn=!0,gt&&(r=Mr,r!==null)))throw r;e.memoizedState=p,e.baseState=y,e.baseQueue=G,l.lastRenderedState=p}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Vf(e){var i=vn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,p=i.memoizedState;if(f!==null){r.pending=null;var y=f=f.next;do p=e(p,y.action),y=y.next;while(y!==f);vi(p,i.memoizedState)||(Sn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),r.lastRenderedState=p}return[p,l]}function Mm(e,i,r){var l=he,f=vn(),p=we;if(p){if(r===void 0)throw Error(a(407));r=r()}else r=i();var y=!vi((We||f).memoizedState,r);if(y&&(f.memoizedState=r,Sn=!0),f=f.queue,Xf(Em.bind(null,l,f,e),[e]),f.getSnapshot!==i||y||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,wr(9,{destroy:void 0},bm.bind(null,l,f,r,i),null),Ke===null)throw Error(a(349));p||(ba&127)!==0||Sm(l,i,r)}return r}function Sm(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=he.updateQueue,i===null?(i=oc(),he.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function bm(e,i,r,l){i.value=r,i.getSnapshot=l,Tm(i)&&Am(e)}function Em(e,i,r){return r(function(){Tm(i)&&Am(e)})}function Tm(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!vi(e,r)}catch{return!0}}function Am(e){var i=Is(e,2);i!==null&&ci(i,e,2)}function kf(e){var i=$n();if(typeof e=="function"){var r=e;if(e=r(),Xs){Rt(!0);try{r()}finally{Rt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:e},i}function wm(e,i,r,l){return e.baseState=r,Gf(e,We,typeof l=="function"?l:Ea)}function Dy(e,i,r,l,f){if(hc(e))throw Error(a(485));if(e=i.action,e!==null){var p={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){p.listeners.push(y)}};B.T!==null?r(!0):p.isTransition=!1,l(p),r=i.pending,r===null?(p.next=i.pending=p,Rm(i,p)):(p.next=r.next,i.pending=r.next=p)}}function Rm(e,i){var r=i.action,l=i.payload,f=e.state;if(i.isTransition){var p=B.T,y={};B.T=y;try{var C=r(f,l),G=B.S;G!==null&&G(y,C),Cm(e,i,C)}catch(it){Wf(e,i,it)}finally{p!==null&&y.types!==null&&(p.types=y.types),B.T=p}}else try{p=r(f,l),Cm(e,i,p)}catch(it){Wf(e,i,it)}}function Cm(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Dm(e,i,l)},function(l){return Wf(e,i,l)}):Dm(e,i,r)}function Dm(e,i,r){i.status="fulfilled",i.value=r,Um(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,Rm(e,r)))}function Wf(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,Um(i),i=i.next;while(i!==l)}e.action=null}function Um(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Nm(e,i){return i}function Lm(e,i){if(we){var r=Ke.formState;if(r!==null){t:{var l=he;if(we){if($e){e:{for(var f=$e,p=Oi;f.nodeType!==8;){if(!p){f=null;break e}if(f=Fi(f.nextSibling),f===null){f=null;break e}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){$e=Fi(f.nextSibling),l=f.data==="F!";break t}}$a(l)}l=!1}l&&(i=r[0])}}return r=$n(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:i},r.queue=l,r=$m.bind(null,he,l),l.dispatch=r,l=kf(!1),p=Qf.bind(null,he,!1,l.queue),l=$n(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,r=Dy.bind(null,he,f,p,r),f.dispatch=r,l.memoizedState=e,[i,r,!1]}function Pm(e){var i=vn();return Om(i,We,e)}function Om(e,i,r){if(i=Gf(e,i,Nm)[0],e=cc(Ea)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Go(i)}catch(y){throw y===Sr?Jl:y}else l=i;i=vn();var f=i.queue,p=f.dispatch;return r!==i.memoizedState&&(he.flags|=2048,wr(9,{destroy:void 0},Uy.bind(null,f,r),null)),[l,p,e]}function Uy(e,i){e.action=i}function Im(e){var i=vn(),r=We;if(r!==null)return Om(i,r,e);vn(),i=i.memoizedState,r=vn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function wr(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=he.updateQueue,i===null&&(i=oc(),he.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function Fm(){return vn().memoizedState}function uc(e,i,r,l){var f=$n();he.flags|=e,f.memoizedState=wr(1|i,{destroy:void 0},r,l===void 0?null:l)}function fc(e,i,r,l){var f=vn();l=l===void 0?null:l;var p=f.memoizedState.inst;We!==null&&l!==null&&Of(l,We.memoizedState.deps)?f.memoizedState=wr(i,p,r,l):(he.flags|=e,f.memoizedState=wr(1|i,p,r,l))}function Bm(e,i){uc(8390656,8,e,i)}function Xf(e,i){fc(2048,8,e,i)}function Ny(e){he.flags|=4;var i=he.updateQueue;if(i===null)i=oc(),he.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function zm(e){var i=vn().memoizedState;return Ny({ref:i,nextImpl:e}),function(){if((Le&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Hm(e,i){return fc(4,2,e,i)}function Gm(e,i){return fc(4,4,e,i)}function Vm(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function km(e,i,r){r=r!=null?r.concat([e]):null,fc(4,4,Vm.bind(null,i,e),r)}function qf(){}function Wm(e,i){var r=vn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Of(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function Xm(e,i){var r=vn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Of(i,l[1]))return l[0];if(l=e(),Xs){Rt(!0);try{e()}finally{Rt(!1)}}return r.memoizedState=[l,i],l}function Yf(e,i,r){return r===void 0||(ba&1073741824)!==0&&(Se&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=qg(),he.lanes|=e,os|=e,r)}function qm(e,i,r,l){return vi(r,i)?r:Er.current!==null?(e=Yf(e,r,l),vi(e,i)||(Sn=!0),e):(ba&42)===0||(ba&1073741824)!==0&&(Se&261930)===0?(Sn=!0,e.memoizedState=r):(e=qg(),he.lanes|=e,os|=e,i)}function Ym(e,i,r,l,f){var p=H.p;H.p=p!==0&&8>p?p:8;var y=B.T,C={};B.T=C,Qf(e,!1,i,r);try{var G=f(),it=B.S;if(it!==null&&it(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var gt=wy(G,l);Vo(e,i,gt,bi(e))}else Vo(e,i,l,bi(e))}catch(yt){Vo(e,i,{then:function(){},status:"rejected",reason:yt},bi())}finally{H.p=p,y!==null&&C.types!==null&&(y.types=C.types),B.T=y}}function Ly(){}function Zf(e,i,r,l){if(e.tag!==5)throw Error(a(476));var f=Zm(e).queue;Ym(e,f,i,z,r===null?Ly:function(){return Km(e),r(l)})}function Zm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:z},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Km(e){var i=Zm(e);i.next===null&&(i=e.alternate.memoizedState),Vo(e,i.next.queue,{},bi())}function Kf(){return zn(sl)}function Qm(){return vn().memoizedState}function jm(){return vn().memoizedState}function Py(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=bi();e=es(r);var l=ns(i,e,r);l!==null&&(ci(l,i,r),Fo(l,i,r)),i={cache:Ef()},e.payload=i;return}i=i.return}}function Oy(e,i,r){var l=bi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},hc(e)?Jm(i,r):(r=df(e,i,r,l),r!==null&&(ci(r,e,l),tg(r,i,l)))}function $m(e,i,r){var l=bi();Vo(e,i,r,l)}function Vo(e,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(hc(e))Jm(i,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var y=i.lastRenderedState,C=p(y,r);if(f.hasEagerState=!0,f.eagerState=C,vi(C,y))return ql(e,i,f,0),Ke===null&&Xl(),!1}catch{}if(r=df(e,i,f,l),r!==null)return ci(r,e,l),tg(r,i,l),!0}return!1}function Qf(e,i,r,l){if(l={lane:2,revertLane:Rh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},hc(e)){if(i)throw Error(a(479))}else i=df(e,r,l,2),i!==null&&ci(i,e,2)}function hc(e){var i=e.alternate;return e===he||i!==null&&i===he}function Jm(e,i){Tr=sc=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function tg(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,di(e,r)}}var ko={readContext:zn,use:lc,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn};ko.useEffectEvent=dn;var eg={readContext:zn,use:lc,useCallback:function(e,i){return $n().memoizedState=[e,i===void 0?null:i],e},useContext:zn,useEffect:Bm,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,uc(4194308,4,Vm.bind(null,i,e),r)},useLayoutEffect:function(e,i){return uc(4194308,4,e,i)},useInsertionEffect:function(e,i){uc(4,2,e,i)},useMemo:function(e,i){var r=$n();i=i===void 0?null:i;var l=e();if(Xs){Rt(!0);try{e()}finally{Rt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=$n();if(r!==void 0){var f=r(i);if(Xs){Rt(!0);try{r(i)}finally{Rt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=Oy.bind(null,he,e),[l.memoizedState,e]},useRef:function(e){var i=$n();return e={current:e},i.memoizedState=e},useState:function(e){e=kf(e);var i=e.queue,r=$m.bind(null,he,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:qf,useDeferredValue:function(e,i){var r=$n();return Yf(r,e,i)},useTransition:function(){var e=kf(!1);return e=Ym.bind(null,he,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=he,f=$n();if(we){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Ke===null)throw Error(a(349));(Se&127)!==0||Sm(l,i,r)}f.memoizedState=r;var p={value:r,getSnapshot:i};return f.queue=p,Bm(Em.bind(null,l,p,e),[e]),l.flags|=2048,wr(9,{destroy:void 0},bm.bind(null,l,p,r,i),null),r},useId:function(){var e=$n(),i=Ke.identifierPrefix;if(we){var r=aa,l=ia;r=(l&~(1<<32-Bt(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=rc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Ry++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Kf,useFormState:Lm,useActionState:Lm,useOptimistic:function(e){var i=$n();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Qf.bind(null,he,!0,r),r.dispatch=i,[e,i]},useMemoCache:Hf,useCacheRefresh:function(){return $n().memoizedState=Py.bind(null,he)},useEffectEvent:function(e){var i=$n(),r={impl:e};return i.memoizedState=r,function(){if((Le&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},jf={readContext:zn,use:lc,useCallback:Wm,useContext:zn,useEffect:Xf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Xm,useReducer:cc,useRef:Fm,useState:function(){return cc(Ea)},useDebugValue:qf,useDeferredValue:function(e,i){var r=vn();return qm(r,We.memoizedState,e,i)},useTransition:function(){var e=cc(Ea)[0],i=vn().memoizedState;return[typeof e=="boolean"?e:Go(e),i]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:Kf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,i){var r=vn();return wm(r,We,e,i)},useMemoCache:Hf,useCacheRefresh:jm};jf.useEffectEvent=zm;var ng={readContext:zn,use:lc,useCallback:Wm,useContext:zn,useEffect:Xf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Xm,useReducer:Vf,useRef:Fm,useState:function(){return Vf(Ea)},useDebugValue:qf,useDeferredValue:function(e,i){var r=vn();return We===null?Yf(r,e,i):qm(r,We.memoizedState,e,i)},useTransition:function(){var e=Vf(Ea)[0],i=vn().memoizedState;return[typeof e=="boolean"?e:Go(e),i]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:Kf,useFormState:Im,useActionState:Im,useOptimistic:function(e,i){var r=vn();return We!==null?wm(r,We,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:jm};ng.useEffectEvent=zm;function $f(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:_({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Jf={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=bi(),f=es(l);f.payload=i,r!=null&&(f.callback=r),i=ns(e,f,l),i!==null&&(ci(i,e,l),Fo(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=bi(),f=es(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=ns(e,f,l),i!==null&&(ci(i,e,l),Fo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=bi(),l=es(r);l.tag=2,i!=null&&(l.callback=i),i=ns(e,l,r),i!==null&&(ci(i,e,r),Fo(i,e,r))}};function ig(e,i,r,l,f,p,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,y):i.prototype&&i.prototype.isPureReactComponent?!Co(r,l)||!Co(f,p):!0}function ag(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Jf.enqueueReplaceState(i,i.state,null)}function qs(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=_({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function sg(e){Wl(e)}function rg(e){console.error(e)}function og(e){Wl(e)}function dc(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function lg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function th(e,i,r){return r=es(r),r.tag=3,r.payload={element:null},r.callback=function(){dc(e,i)},r}function cg(e){return e=es(e),e.tag=3,e}function ug(e,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;e.payload=function(){return f(p)},e.callback=function(){lg(i,r,l)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){lg(i,r,l),typeof f!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function Iy(e,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&xr(i,r,f,!0),r=xi.current,r!==null){switch(r.tag){case 31:case 13:return Ii===null?Tc():r.alternate===null&&pn===0&&(pn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===tc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Th(e,l,f)),!1;case 22:return r.flags|=65536,l===tc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Th(e,l,f)),!1}throw Error(a(435,r.tag))}return Th(e,l,f),Tc(),!1}if(we)return i=xi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==xf&&(e=Error(a(422),{cause:l}),No(Ni(e,r)))):(l!==xf&&(i=Error(a(423),{cause:l}),No(Ni(i,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=Ni(l,r),f=th(e.stateNode,l,f),Df(e,f),pn!==4&&(pn=2)),!1;var p=Error(a(520),{cause:l});if(p=Ni(p,r),jo===null?jo=[p]:jo.push(p),pn!==4&&(pn=2),i===null)return!0;l=Ni(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=th(r.stateNode,l,e),Df(r,e),!1;case 1:if(i=r.type,p=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ls===null||!ls.has(p))))return r.flags|=65536,f&=-f,r.lanes|=f,f=cg(f),ug(f,e,r,l),Df(r,f),!1}r=r.return}while(r!==null);return!1}var eh=Error(a(461)),Sn=!1;function Hn(e,i,r,l){i.child=e===null?pm(i,null,r,l):Ws(i,e.child,r,l)}function fg(e,i,r,l,f){r=r.render;var p=i.ref;if("ref"in l){var y={};for(var C in l)C!=="ref"&&(y[C]=l[C])}else y=l;return Hs(i),l=If(e,i,r,y,p,f),C=Ff(),e!==null&&!Sn?(Bf(e,i,f),Ta(e,i,f)):(we&&C&&vf(i),i.flags|=1,Hn(e,i,l,f),i.child)}function hg(e,i,r,l,f){if(e===null){var p=r.type;return typeof p=="function"&&!pf(p)&&p.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=p,dg(e,i,p,l,f)):(e=Zl(r.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(p=e.child,!ch(e,f)){var y=p.memoizedProps;if(r=r.compare,r=r!==null?r:Co,r(y,l)&&e.ref===i.ref)return Ta(e,i,f)}return i.flags|=1,e=xa(p,l),e.ref=i.ref,e.return=i,i.child=e}function dg(e,i,r,l,f){if(e!==null){var p=e.memoizedProps;if(Co(p,l)&&e.ref===i.ref)if(Sn=!1,i.pendingProps=l=p,ch(e,f))(e.flags&131072)!==0&&(Sn=!0);else return i.lanes=e.lanes,Ta(e,i,f)}return nh(e,i,r,l,f)}function pg(e,i,r,l){var f=l.children,p=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(p=p!==null?p.baseLanes|r:r,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,i.child=null;return mg(e,i,p,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&$l(i,p!==null?p.cachePool:null),p!==null?vm(i,p):Nf(),_m(i);else return l=i.lanes=536870912,mg(e,i,p!==null?p.baseLanes|r:r,r,l)}else p!==null?($l(i,p.cachePool),vm(i,p),as(),i.memoizedState=null):(e!==null&&$l(i,null),Nf(),as());return Hn(e,i,f,r),i.child}function Wo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function mg(e,i,r,l,f){var p=Af();return p=p===null?null:{parent:yn._currentValue,pool:p},i.memoizedState={baseLanes:r,cachePool:p},e!==null&&$l(i,null),Nf(),_m(i),e!==null&&xr(e,i,l,!0),i.childLanes=f,null}function pc(e,i){return i=gc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function gg(e,i,r){return Ws(i,e.child,null,r),e=pc(i,i.pendingProps),e.flags|=2,yi(i),i.memoizedState=null,e}function Fy(e,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=pc(i,l),i.lanes=536870912,Wo(null,e);if(Pf(i),(e=$e)?(e=Rv(e,Oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},r=Jp(e),r.return=i,i.child=r,Bn=i,$e=null)):e=null,e===null)throw $a(i);return i.lanes=536870912,null}return pc(i,l)}var p=e.memoizedState;if(p!==null){var y=p.dehydrated;if(Pf(i),f)if(i.flags&256)i.flags&=-257,i=gg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Sn||xr(e,i,r,!1),f=(r&e.childLanes)!==0,Sn||f){if(l=Ke,l!==null&&(y=pi(l,r),y!==0&&y!==p.retryLane))throw p.retryLane=y,Is(e,y),ci(l,e,y),eh;Tc(),i=gg(e,i,r)}else e=p.treeContext,$e=Fi(y.nextSibling),Bn=i,we=!0,ja=null,Oi=!1,e!==null&&nm(i,e),i=pc(i,l),i.flags|=4096;return i}return e=xa(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function mc(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function nh(e,i,r,l,f){return Hs(i),r=If(e,i,r,l,void 0,f),l=Ff(),e!==null&&!Sn?(Bf(e,i,f),Ta(e,i,f)):(we&&l&&vf(i),i.flags|=1,Hn(e,i,r,f),i.child)}function vg(e,i,r,l,f,p){return Hs(i),i.updateQueue=null,r=ym(i,l,r,f),xm(e),l=Ff(),e!==null&&!Sn?(Bf(e,i,p),Ta(e,i,p)):(we&&l&&vf(i),i.flags|=1,Hn(e,i,r,p),i.child)}function _g(e,i,r,l,f){if(Hs(i),i.stateNode===null){var p=mr,y=r.contextType;typeof y=="object"&&y!==null&&(p=zn(y)),p=new r(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Jf,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},Rf(i),y=r.contextType,p.context=typeof y=="object"&&y!==null?zn(y):mr,p.state=i.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&($f(i,r,y,l),p.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(y=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),y!==p.state&&Jf.enqueueReplaceState(p,p.state,null),zo(i,l,p,f),Bo(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){p=i.stateNode;var C=i.memoizedProps,G=qs(r,C);p.props=G;var it=p.context,gt=r.contextType;y=mr,typeof gt=="object"&&gt!==null&&(y=zn(gt));var yt=r.getDerivedStateFromProps;gt=typeof yt=="function"||typeof p.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,gt||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C||it!==y)&&ag(i,p,l,y),ts=!1;var lt=i.memoizedState;p.state=lt,zo(i,l,p,f),Bo(),it=i.memoizedState,C||lt!==it||ts?(typeof yt=="function"&&($f(i,r,yt,l),it=i.memoizedState),(G=ts||ig(i,r,G,l,lt,it,y))?(gt||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=it),p.props=l,p.state=it,p.context=y,l=G):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,Cf(e,i),y=i.memoizedProps,gt=qs(r,y),p.props=gt,yt=i.pendingProps,lt=p.context,it=r.contextType,G=mr,typeof it=="object"&&it!==null&&(G=zn(it)),C=r.getDerivedStateFromProps,(it=typeof C=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==yt||lt!==G)&&ag(i,p,l,G),ts=!1,lt=i.memoizedState,p.state=lt,zo(i,l,p,f),Bo();var ct=i.memoizedState;y!==yt||lt!==ct||ts||e!==null&&e.dependencies!==null&&Ql(e.dependencies)?(typeof C=="function"&&($f(i,r,C,l),ct=i.memoizedState),(gt=ts||ig(i,r,gt,l,lt,ct,G)||e!==null&&e.dependencies!==null&&Ql(e.dependencies))?(it||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,ct,G),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,ct,G)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ct),p.props=l,p.state=ct,p.context=G,l=gt):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),l=!1)}return p=l,mc(e,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,e!==null&&l?(i.child=Ws(i,e.child,null,f),i.child=Ws(i,null,r,f)):Hn(e,i,r,f),i.memoizedState=p.state,e=i.child):e=Ta(e,i,f),e}function xg(e,i,r,l){return Bs(),i.flags|=256,Hn(e,i,r,l),i.child}var ih={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ah(e){return{baseLanes:e,cachePool:lm()}}function sh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Si),e}function yg(e,i,r){var l=i.pendingProps,f=!1,p=(i.flags&128)!==0,y;if((y=p)||(y=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(f?is(i):as(),(e=$e)?(e=Rv(e,Oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},r=Jp(e),r.return=i,i.child=r,Bn=i,$e=null)):e=null,e===null)throw $a(i);return Gh(e)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(as(),f=i.mode,C=gc({mode:"hidden",children:C},f),l=Fs(l,f,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=ah(r),l.childLanes=sh(e,y,r),i.memoizedState=ih,Wo(null,l)):(is(i),rh(i,C))}var G=e.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(p)i.flags&256?(is(i),i.flags&=-257,i=oh(e,i,r)):i.memoizedState!==null?(as(),i.child=e.child,i.flags|=128,i=null):(as(),C=l.fallback,f=i.mode,l=gc({mode:"visible",children:l.children},f),C=Fs(C,f,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Ws(i,e.child,null,r),l=i.child,l.memoizedState=ah(r),l.childLanes=sh(e,y,r),i.memoizedState=ih,i=Wo(null,l));else if(is(i),Gh(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var it=y.dgst;y=it,l=Error(a(419)),l.stack="",l.digest=y,No({value:l,source:null,stack:null}),i=oh(e,i,r)}else if(Sn||xr(e,i,r,!1),y=(r&e.childLanes)!==0,Sn||y){if(y=Ke,y!==null&&(l=pi(y,r),l!==0&&l!==G.retryLane))throw G.retryLane=l,Is(e,l),ci(y,e,l),eh;Hh(C)||Tc(),i=oh(e,i,r)}else Hh(C)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,$e=Fi(C.nextSibling),Bn=i,we=!0,ja=null,Oi=!1,e!==null&&nm(i,e),i=rh(i,l.children),i.flags|=4096);return i}return f?(as(),C=l.fallback,f=i.mode,G=e.child,it=G.sibling,l=xa(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,it!==null?C=xa(it,C):(C=Fs(C,f,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,Wo(null,l),l=i.child,C=e.child.memoizedState,C===null?C=ah(r):(f=C.cachePool,f!==null?(G=yn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=lm(),C={baseLanes:C.baseLanes|r,cachePool:f}),l.memoizedState=C,l.childLanes=sh(e,y,r),i.memoizedState=ih,Wo(e.child,l)):(is(i),r=e.child,e=r.sibling,r=xa(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=r,i.memoizedState=null,r)}function rh(e,i){return i=gc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function gc(e,i){return e=_i(22,e,null,i),e.lanes=0,e}function oh(e,i,r){return Ws(i,e.child,null,r),e=rh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Mg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Sf(e.return,i,r)}function lh(e,i,r,l,f,p){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:p}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=r,y.tailMode=f,y.treeForkCount=p)}function Sg(e,i,r){var l=i.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var y=gn.current,C=(y&2)!==0;if(C?(y=y&1|2,i.flags|=128):y&=1,_t(gn,y),Hn(e,i,l,r),l=we?Uo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mg(e,r,i);else if(e.tag===19)Mg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)e=r.alternate,e!==null&&ac(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),lh(i,!1,f,r,p,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&ac(e)===null){i.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}lh(i,!0,r,null,p,l);break;case"together":lh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ta(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),os|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(xr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=xa(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=xa(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function ch(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ql(e)))}function By(e,i,r){switch(i.tag){case 3:St(i,i.stateNode.containerInfo),Ja(i,yn,e.memoizedState.cache),Bs();break;case 27:case 5:ne(i);break;case 4:St(i,i.stateNode.containerInfo);break;case 10:Ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Pf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(is(i),i.flags|=128,null):(r&i.child.childLanes)!==0?yg(e,i,r):(is(i),e=Ta(e,i,r),e!==null?e.sibling:null);is(i);break;case 19:var f=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(xr(e,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return Sg(e,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),_t(gn,gn.current),l)break;return null;case 22:return i.lanes=0,pg(e,i,r,i.pendingProps);case 24:Ja(i,yn,e.memoizedState.cache)}return Ta(e,i,r)}function bg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)Sn=!0;else{if(!ch(e,r)&&(i.flags&128)===0)return Sn=!1,By(e,i,r);Sn=(e.flags&131072)!==0}else Sn=!1,we&&(i.flags&1048576)!==0&&em(i,Uo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Vs(i.elementType),i.type=e,typeof e=="function")pf(e)?(l=qs(e,l),i.tag=1,i=_g(null,i,e,l,r)):(i.tag=0,i=nh(null,i,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===A){i.tag=11,i=fg(null,i,e,l,r);break t}else if(f===O){i.tag=14,i=hg(null,i,e,l,r);break t}}throw i=ft(e)||e,Error(a(306,i,""))}}return i;case 0:return nh(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=qs(l,i.pendingProps),_g(e,i,l,f,r);case 3:t:{if(St(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var p=i.memoizedState;f=p.element,Cf(e,i),zo(i,l,null,r);var y=i.memoizedState;if(l=y.cache,Ja(i,yn,l),l!==p.cache&&bf(i,[yn],r,!0),Bo(),l=y.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=xg(e,i,l,r);break t}else if(l!==f){f=Ni(Error(a(424)),i),No(f),i=xg(e,i,l,r);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,$e=Fi(e.firstChild),Bn=i,we=!0,ja=null,Oi=!0,r=pm(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bs(),l===f){i=Ta(e,i,r);break t}Hn(e,i,l,r)}i=i.child}return i;case 26:return mc(e,i),e===null?(r=Pv(i.type,null,i.pendingProps,null))?i.memoizedState=r:we||(r=i.type,e=i.pendingProps,l=Nc(tt.current).createElement(r),l[_n]=i,l[Fn]=e,Gn(l,r,e),xn(l),i.stateNode=l):i.memoizedState=Pv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ne(i),e===null&&we&&(l=i.stateNode=Uv(i.type,i.pendingProps,tt.current),Bn=i,Oi=!0,f=$e,hs(i.type)?(Vh=f,$e=Fi(l.firstChild)):$e=f),Hn(e,i,i.pendingProps.children,r),mc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((f=l=$e)&&(l=pM(l,i.type,i.pendingProps,Oi),l!==null?(i.stateNode=l,Bn=i,$e=Fi(l.firstChild),Oi=!1,f=!0):f=!1),f||$a(i)),ne(i),f=i.type,p=i.pendingProps,y=e!==null?e.memoizedProps:null,l=p.children,Fh(f,p)?l=null:y!==null&&Fh(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=If(e,i,Cy,null,null,r),sl._currentValue=f),mc(e,i),Hn(e,i,l,r),i.child;case 6:return e===null&&we&&((e=r=$e)&&(r=mM(r,i.pendingProps,Oi),r!==null?(i.stateNode=r,Bn=i,$e=null,e=!0):e=!1),e||$a(i)),null;case 13:return yg(e,i,r);case 4:return St(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ws(i,null,l,r):Hn(e,i,l,r),i.child;case 11:return fg(e,i,i.type,i.pendingProps,r);case 7:return Hn(e,i,i.pendingProps,r),i.child;case 8:return Hn(e,i,i.pendingProps.children,r),i.child;case 12:return Hn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ja(i,i.type,l.value),Hn(e,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Hs(i),f=zn(f),l=l(f),i.flags|=1,Hn(e,i,l,r),i.child;case 14:return hg(e,i,i.type,i.pendingProps,r);case 15:return dg(e,i,i.type,i.pendingProps,r);case 19:return Sg(e,i,r);case 31:return Fy(e,i,r);case 22:return pg(e,i,r,i.pendingProps);case 24:return Hs(i),l=zn(yn),e===null?(f=Af(),f===null&&(f=Ke,p=Ef(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=r),f=p),i.memoizedState={parent:l,cache:f},Rf(i),Ja(i,yn,f)):((e.lanes&r)!==0&&(Cf(e,i),zo(i,null,null,r),Bo()),f=e.memoizedState,p=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ja(i,yn,l)):(l=p.cache,Ja(i,yn,l),l!==f.cache&&bf(i,[yn],r,!0))),Hn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Aa(e){e.flags|=4}function uh(e,i,r,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw ks=tc,wf}else e.flags&=-16777217}function Eg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zv(i))if(Qg())e.flags|=8192;else throw ks=tc,wf}function vc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?bt():536870912,e.lanes|=i,Ur|=i)}function Xo(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function zy(e,i,r){var l=i.pendingProps;switch(_f(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Sa(yn),It(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(i)?Aa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yf())),Je(i),null;case 26:var f=i.type,p=i.memoizedState;return e===null?(Aa(i),p!==null?(Je(i),Eg(i,p)):(Je(i),uh(i,f,null,l,r))):p?p!==e.memoizedState?(Aa(i),Je(i),Eg(i,p)):(Je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Aa(i),Je(i),uh(i,f,e,l,r)),null;case 27:if(Qt(i),r=tt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Aa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Je(i),null}e=Et.current,_r(i)?im(i):(e=Uv(f,l,r),i.stateNode=e,Aa(i))}return Je(i),null;case 5:if(Qt(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Aa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Je(i),null}if(p=Et.current,_r(i))im(i);else{var y=Nc(tt.current);switch(p){case 1:p=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=y.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}p[_n]=i,p[Fn]=l;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)p.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=p;t:switch(Gn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Aa(i)}}return Je(i),uh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Aa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=tt.current,_r(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,f=Bn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[_n]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||yv(e.nodeValue,r)),e||$a(i,!0)}else e=Nc(e).createTextNode(l),e[_n]=i,i.stateNode=e}return Je(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=_r(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[_n]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),e=!1}else r=yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(yi(i),i):(yi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Je(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=_r(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[_n]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),f=!1}else f=yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(yi(i),i):(yi(i),null)}return yi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),vc(i,i.updateQueue),Je(i),null);case 4:return It(),e===null&&Nh(i.stateNode.containerInfo),Je(i),null;case 10:return Sa(i.type),Je(i),null;case 19:if(X(gn),l=i.memoizedState,l===null)return Je(i),null;if(f=(i.flags&128)!==0,p=l.rendering,p===null)if(f)Xo(l,!1);else{if(pn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(p=ac(e),p!==null){for(i.flags|=128,Xo(l,!1),e=p.updateQueue,i.updateQueue=e,vc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)$p(r,e),r=r.sibling;return _t(gn,gn.current&1|2),we&&ya(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&ke()>Sc&&(i.flags|=128,f=!0,Xo(l,!1),i.lanes=4194304)}else{if(!f)if(e=ac(p),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,vc(i,e),Xo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!we)return Je(i),null}else 2*ke()-l.renderingStartTime>Sc&&r!==536870912&&(i.flags|=128,f=!0,Xo(l,!1),i.lanes=4194304);l.isBackwards?(p.sibling=i.child,i.child=p):(e=l.last,e!==null?e.sibling=p:i.child=p,l.last=p)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ke(),e.sibling=null,r=gn.current,_t(gn,f?r&1|2:r&1),we&&ya(i,l.treeForkCount),e):(Je(i),null);case 22:case 23:return yi(i),Lf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),r=i.updateQueue,r!==null&&vc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&X(Gs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Sa(yn),Je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Hy(e,i){switch(_f(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Sa(yn),It(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Qt(i),null;case 31:if(i.memoizedState!==null){if(yi(i),i.alternate===null)throw Error(a(340));Bs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(yi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Bs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return X(gn),null;case 4:return It(),null;case 10:return Sa(i.type),null;case 22:case 23:return yi(i),Lf(),e!==null&&X(Gs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Sa(yn),null;case 25:return null;default:return null}}function Tg(e,i){switch(_f(i),i.tag){case 3:Sa(yn),It();break;case 26:case 27:case 5:Qt(i);break;case 4:It();break;case 31:i.memoizedState!==null&&yi(i);break;case 13:yi(i);break;case 19:X(gn);break;case 10:Sa(i.type);break;case 22:case 23:yi(i),Lf(),e!==null&&X(Gs);break;case 24:Sa(yn)}}function qo(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var p=r.create,y=r.inst;l=p(),y.destroy=l}r=r.next}while(r!==f)}}catch(C){Ve(i,i.return,C)}}function ss(e,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&e)===e){var y=l.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,f=i;var G=r,it=C;try{it()}catch(gt){Ve(f,G,gt)}}}l=l.next}while(l!==p)}}catch(gt){Ve(i,i.return,gt)}}function Ag(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{gm(i,r)}catch(l){Ve(e,e.return,l)}}}function wg(e,i,r){r.props=qs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ve(e,i,l)}}function Yo(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){Ve(e,i,f)}}function sa(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Ve(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Ve(e,i,f)}else r.current=null}function Rg(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Ve(e,e.return,f)}}function fh(e,i,r){try{var l=e.stateNode;lM(l,e.type,r,i),l[Fn]=i}catch(f){Ve(e,e.return,f)}}function Cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hs(e.type)||e.tag===4}function hh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dh(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=va));else if(l!==4&&(l===27&&hs(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(dh(e,i,r),e=e.sibling;e!==null;)dh(e,i,r),e=e.sibling}function _c(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&hs(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(_c(e,i,r),e=e.sibling;e!==null;)_c(e,i,r),e=e.sibling}function Dg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Gn(i,l,r),i[_n]=e,i[Fn]=r}catch(p){Ve(e,e.return,p)}}var wa=!1,bn=!1,ph=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function Gy(e,i){if(e=e.containerInfo,Oh=zc,e=kp(e),of(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var y=0,C=-1,G=-1,it=0,gt=0,yt=e,lt=null;e:for(;;){for(var ct;yt!==r||f!==0&&yt.nodeType!==3||(C=y+f),yt!==p||l!==0&&yt.nodeType!==3||(G=y+l),yt.nodeType===3&&(y+=yt.nodeValue.length),(ct=yt.firstChild)!==null;)lt=yt,yt=ct;for(;;){if(yt===e)break e;if(lt===r&&++it===f&&(C=y),lt===p&&++gt===l&&(G=y),(ct=yt.nextSibling)!==null)break;yt=lt,lt=yt.parentNode}yt=ct}r=C===-1||G===-1?null:{start:C,end:G}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ih={focusedElem:e,selectionRange:r},zc=!1,Ln=i;Ln!==null;)if(i=Ln,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Ln=e;else for(;Ln!==null;){switch(i=Ln,p=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,r=i,f=p.memoizedProps,p=p.memoizedState,l=r.stateNode;try{var Xt=qs(r.type,f);e=l.getSnapshotBeforeUpdate(Xt,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ve(r,r.return,ae)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)zh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Ln=e;break}Ln=i.return}}function Ng(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ca(e,r),l&4&&qo(5,r);break;case 1:if(Ca(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(y){Ve(r,r.return,y)}else{var f=qs(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ve(r,r.return,y)}}l&64&&Ag(r),l&512&&Yo(r,r.return);break;case 3:if(Ca(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{gm(e,i)}catch(y){Ve(r,r.return,y)}}break;case 27:i===null&&l&4&&Dg(r);case 26:case 5:Ca(e,r),i===null&&l&4&&Rg(r),l&512&&Yo(r,r.return);break;case 12:Ca(e,r);break;case 31:Ca(e,r),l&4&&Og(e,r);break;case 13:Ca(e,r),l&4&&Ig(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Qy.bind(null,r),gM(e,r))));break;case 22:if(l=r.memoizedState!==null||wa,!l){i=i!==null&&i.memoizedState!==null||bn,f=wa;var p=bn;wa=l,(bn=i)&&!p?Da(e,r,(r.subtreeFlags&8772)!==0):Ca(e,r),wa=f,bn=p}break;case 30:break;default:Ca(e,r)}}function Lg(e){var i=e.alternate;i!==null&&(e.alternate=null,Lg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&qa(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,si=!1;function Ra(e,i,r){for(r=r.child;r!==null;)Pg(e,i,r),r=r.sibling}function Pg(e,i,r){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ht,r)}catch{}switch(r.tag){case 26:bn||sa(r,i),Ra(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:bn||sa(r,i);var l=rn,f=si;hs(r.type)&&(rn=r.stateNode,si=!1),Ra(e,i,r),nl(r.stateNode),rn=l,si=f;break;case 5:bn||sa(r,i);case 6:if(l=rn,f=si,rn=null,Ra(e,i,r),rn=l,si=f,rn!==null)if(si)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(r.stateNode)}catch(p){Ve(r,i,p)}else try{rn.removeChild(r.stateNode)}catch(p){Ve(r,i,p)}break;case 18:rn!==null&&(si?(e=rn,Av(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),zr(e)):Av(rn,r.stateNode));break;case 4:l=rn,f=si,rn=r.stateNode.containerInfo,si=!0,Ra(e,i,r),rn=l,si=f;break;case 0:case 11:case 14:case 15:ss(2,r,i),bn||ss(4,r,i),Ra(e,i,r);break;case 1:bn||(sa(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&wg(r,i,l)),Ra(e,i,r);break;case 21:Ra(e,i,r);break;case 22:bn=(l=bn)||r.memoizedState!==null,Ra(e,i,r),bn=l;break;default:Ra(e,i,r)}}function Og(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{zr(e)}catch(r){Ve(i,i.return,r)}}}function Ig(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zr(e)}catch(r){Ve(i,i.return,r)}}function Vy(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ug),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ug),i;default:throw Error(a(435,e.tag))}}function xc(e,i){var r=Vy(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=jy.bind(null,e,l);l.then(f,f)}})}function ri(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],p=e,y=i,C=y;t:for(;C!==null;){switch(C.tag){case 27:if(hs(C.type)){rn=C.stateNode,si=!1;break t}break;case 5:rn=C.stateNode,si=!1;break t;case 3:case 4:rn=C.stateNode.containerInfo,si=!0;break t}C=C.return}if(rn===null)throw Error(a(160));Pg(p,y,f),rn=null,si=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Fg(i,e),i=i.sibling}var Wi=null;function Fg(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ri(i,e),oi(e),l&4&&(ss(3,e,e.return),qo(3,e),ss(5,e,e.return));break;case 1:ri(i,e),oi(e),l&512&&(bn||r===null||sa(r,r.return)),l&64&&wa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Wi;if(ri(i,e),oi(e),l&512&&(bn||r===null||sa(r,r.return)),l&4){var p=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Xa]||p[_n]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Gn(p,l,r),p[_n]=e,xn(p),l=p;break t;case"link":var y=Fv("link","href",f).get(l+(r.href||""));if(y){for(var C=0;C<y.length;C++)if(p=y[C],p.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&p.getAttribute("rel")===(r.rel==null?null:r.rel)&&p.getAttribute("title")===(r.title==null?null:r.title)&&p.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(C,1);break e}}p=f.createElement(l),Gn(p,l,r),f.head.appendChild(p);break;case"meta":if(y=Fv("meta","content",f).get(l+(r.content||""))){for(C=0;C<y.length;C++)if(p=y[C],p.getAttribute("content")===(r.content==null?null:""+r.content)&&p.getAttribute("name")===(r.name==null?null:r.name)&&p.getAttribute("property")===(r.property==null?null:r.property)&&p.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&p.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(C,1);break e}}p=f.createElement(l),Gn(p,l,r),f.head.appendChild(p);break;default:throw Error(a(468,l))}p[_n]=e,xn(p),l=p}e.stateNode=l}else Bv(f,e.type,e.stateNode);else e.stateNode=Iv(f,l,e.memoizedProps);else p!==l?(p===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):p.count--,l===null?Bv(f,e.type,e.stateNode):Iv(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&fh(e,e.memoizedProps,r.memoizedProps)}break;case 27:ri(i,e),oi(e),l&512&&(bn||r===null||sa(r,r.return)),r!==null&&l&4&&fh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(ri(i,e),oi(e),l&512&&(bn||r===null||sa(r,r.return)),e.flags&32){f=e.stateNode;try{gi(f,"")}catch(Xt){Ve(e,e.return,Xt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,fh(e,f,r!==null?r.memoizedProps:f)),l&1024&&(ph=!0);break;case 6:if(ri(i,e),oi(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Xt){Ve(e,e.return,Xt)}}break;case 3:if(Oc=null,f=Wi,Wi=Lc(i.containerInfo),ri(i,e),Wi=f,oi(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{zr(i.containerInfo)}catch(Xt){Ve(e,e.return,Xt)}ph&&(ph=!1,Bg(e));break;case 4:l=Wi,Wi=Lc(e.stateNode.containerInfo),ri(i,e),oi(e),Wi=l;break;case 12:ri(i,e),oi(e);break;case 31:ri(i,e),oi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,xc(e,l)));break;case 13:ri(i,e),oi(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Mc=ke()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,xc(e,l)));break;case 22:f=e.memoizedState!==null;var G=r!==null&&r.memoizedState!==null,it=wa,gt=bn;if(wa=it||f,bn=gt||G,ri(i,e),bn=gt,wa=it,oi(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||G||wa||bn||Ys(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){G=r=i;try{if(p=G.stateNode,f)y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=G.stateNode;var yt=G.memoizedProps.style,lt=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;C.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Xt){Ve(G,G.return,Xt)}}}else if(i.tag===6){if(r===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Xt){Ve(G,G.return,Xt)}}}else if(i.tag===18){if(r===null){G=i;try{var ct=G.stateNode;f?wv(ct,!0):wv(G.stateNode,!1)}catch(Xt){Ve(G,G.return,Xt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,xc(e,r))));break;case 19:ri(i,e),oi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,xc(e,l)));break;case 30:break;case 21:break;default:ri(i,e),oi(e)}}function oi(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Cg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,p=hh(e);_c(e,p,f);break;case 5:var y=r.stateNode;r.flags&32&&(gi(y,""),r.flags&=-33);var C=hh(e);_c(e,C,y);break;case 3:case 4:var G=r.stateNode.containerInfo,it=hh(e);dh(e,it,G);break;default:throw Error(a(161))}}catch(gt){Ve(e,e.return,gt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Bg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ca(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ng(e,i.alternate,i),i=i.sibling}function Ys(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ss(4,i,i.return),Ys(i);break;case 1:sa(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&wg(i,i.return,r),Ys(i);break;case 27:nl(i.stateNode);case 26:case 5:sa(i,i.return),Ys(i);break;case 22:i.memoizedState===null&&Ys(i);break;case 30:Ys(i);break;default:Ys(i)}e=e.sibling}}function Da(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,p=i,y=p.flags;switch(p.tag){case 0:case 11:case 15:Da(f,p,r),qo(4,p);break;case 1:if(Da(f,p,r),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(it){Ve(l,l.return,it)}if(l=p,f=l.updateQueue,f!==null){var C=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)mm(G[f],C)}catch(it){Ve(l,l.return,it)}}r&&y&64&&Ag(p),Yo(p,p.return);break;case 27:Dg(p);case 26:case 5:Da(f,p,r),r&&l===null&&y&4&&Rg(p),Yo(p,p.return);break;case 12:Da(f,p,r);break;case 31:Da(f,p,r),r&&y&4&&Og(f,p);break;case 13:Da(f,p,r),r&&y&4&&Ig(f,p);break;case 22:p.memoizedState===null&&Da(f,p,r),Yo(p,p.return);break;case 30:break;default:Da(f,p,r)}i=i.sibling}}function mh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Lo(r))}function gh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Lo(e))}function Xi(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)zg(e,i,r,l),i=i.sibling}function zg(e,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Xi(e,i,r,l),f&2048&&qo(9,i);break;case 1:Xi(e,i,r,l);break;case 3:Xi(e,i,r,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Lo(e)));break;case 12:if(f&2048){Xi(e,i,r,l),e=i.stateNode;try{var p=i.memoizedProps,y=p.id,C=p.onPostCommit;typeof C=="function"&&C(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ve(i,i.return,G)}}else Xi(e,i,r,l);break;case 31:Xi(e,i,r,l);break;case 13:Xi(e,i,r,l);break;case 23:break;case 22:p=i.stateNode,y=i.alternate,i.memoizedState!==null?p._visibility&2?Xi(e,i,r,l):Zo(e,i):p._visibility&2?Xi(e,i,r,l):(p._visibility|=2,Rr(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&mh(y,i);break;case 24:Xi(e,i,r,l),f&2048&&gh(i.alternate,i);break;default:Xi(e,i,r,l)}}function Rr(e,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var p=e,y=i,C=r,G=l,it=y.flags;switch(y.tag){case 0:case 11:case 15:Rr(p,y,C,G,f),qo(8,y);break;case 23:break;case 22:var gt=y.stateNode;y.memoizedState!==null?gt._visibility&2?Rr(p,y,C,G,f):Zo(p,y):(gt._visibility|=2,Rr(p,y,C,G,f)),f&&it&2048&&mh(y.alternate,y);break;case 24:Rr(p,y,C,G,f),f&&it&2048&&gh(y.alternate,y);break;default:Rr(p,y,C,G,f)}i=i.sibling}}function Zo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,f=l.flags;switch(l.tag){case 22:Zo(r,l),f&2048&&mh(l.alternate,l);break;case 24:Zo(r,l),f&2048&&gh(l.alternate,l);break;default:Zo(r,l)}i=i.sibling}}var Ko=8192;function Cr(e,i,r){if(e.subtreeFlags&Ko)for(e=e.child;e!==null;)Hg(e,i,r),e=e.sibling}function Hg(e,i,r){switch(e.tag){case 26:Cr(e,i,r),e.flags&Ko&&e.memoizedState!==null&&RM(r,Wi,e.memoizedState,e.memoizedProps);break;case 5:Cr(e,i,r);break;case 3:case 4:var l=Wi;Wi=Lc(e.stateNode.containerInfo),Cr(e,i,r),Wi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ko,Ko=16777216,Cr(e,i,r),Ko=l):Cr(e,i,r));break;default:Cr(e,i,r)}}function Gg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Qo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Ln=l,kg(l,e)}Gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:Qo(e),e.flags&2048&&ss(9,e,e.return);break;case 3:Qo(e);break;case 12:Qo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,yc(e)):Qo(e);break;default:Qo(e)}}function yc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Ln=l,kg(l,e)}Gg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ss(8,i,i.return),yc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,yc(i));break;default:yc(i)}e=e.sibling}}function kg(e,i){for(;Ln!==null;){var r=Ln;switch(r.tag){case 0:case 11:case 15:ss(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Lo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Ln=l;else t:for(r=e;Ln!==null;){l=Ln;var f=l.sibling,p=l.return;if(Lg(l),l===r){Ln=null;break t}if(f!==null){f.return=p,Ln=f;break t}Ln=p}}}var ky={getCacheForType:function(e){var i=zn(yn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return zn(yn).controller.signal}},Wy=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ke=null,ye=null,Se=0,Ge=0,Mi=null,rs=!1,Dr=!1,vh=!1,Ua=0,pn=0,os=0,Zs=0,_h=0,Si=0,Ur=0,jo=null,li=null,xh=!1,Mc=0,Wg=0,Sc=1/0,bc=null,ls=null,wn=0,cs=null,Nr=null,Na=0,yh=0,Mh=null,Xg=null,$o=0,Sh=null;function bi(){return(Le&2)!==0&&Se!==0?Se&-Se:B.T!==null?Rh():Mo()}function qg(){if(Si===0)if((Se&536870912)===0||we){var e=re;re<<=1,(re&3932160)===0&&(re=262144),Si=e}else Si=536870912;return e=xi.current,e!==null&&(e.flags|=32),Si}function ci(e,i,r){(e===Ke&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(Lr(e,0),us(e,Se,Si,!1)),Vt(e,r),((Le&2)===0||e!==Ke)&&(e===Ke&&((Le&2)===0&&(Zs|=r),pn===4&&us(e,Se,Si,!1)),ra(e))}function Yg(e,i,r){if((Le&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Ct(e,i),f=l?Yy(e,i):Eh(e,i,!0),p=l;do{if(f===0){Dr&&!l&&us(e,i,0,!1);break}else{if(r=e.current.alternate,p&&!Xy(r)){f=Eh(e,i,!1),p=!1;continue}if(f===2){if(p=i,e.errorRecoveryDisabledLanes&p)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var C=e;f=jo;var G=C.current.memoizedState.isDehydrated;if(G&&(Lr(C,y).flags|=256),y=Eh(C,y,!1),y!==2){if(vh&&!G){C.errorRecoveryDisabledLanes|=p,Zs|=p,f=4;break t}p=li,li=f,p!==null&&(li===null?li=p:li.push.apply(li,p))}f=y}if(p=!1,f!==2)continue}}if(f===1){Lr(e,0),us(e,i,0,!0);break}t:{switch(l=e,p=f,p){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:us(l,i,Si,!rs);break t;case 2:li=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Mc+300-ke(),10<f)){if(us(l,i,Si,!rs),vt(l,0,!0)!==0)break t;Na=i,l.timeoutHandle=Ev(Zg.bind(null,l,r,li,bc,xh,i,Si,Zs,Ur,rs,p,"Throttled",-0,0),f);break t}Zg(l,r,li,bc,xh,i,Si,Zs,Ur,rs,p,null,-0,0)}}break}while(!0);ra(e)}function Zg(e,i,r,l,f,p,y,C,G,it,gt,yt,lt,ct){if(e.timeoutHandle=-1,yt=i.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:va},Hg(i,p,yt);var Xt=(p&62914560)===p?Mc-ke():(p&4194048)===p?Wg-ke():0;if(Xt=CM(yt,Xt),Xt!==null){Na=p,e.cancelPendingCommit=Xt(nv.bind(null,e,i,p,r,l,f,y,C,G,gt,yt,null,lt,ct)),us(e,p,y,!it);return}}nv(e,i,p,r,l,f,y,C,G)}function Xy(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],p=f.getSnapshot;f=f.value;try{if(!vi(p(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function us(e,i,r,l){i&=~_h,i&=~Zs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var p=31-Bt(f),y=1<<p;l[p]=-1,f&=~y}r!==0&&Fe(e,r,i)}function Ec(){return(Le&6)===0?(Jo(0),!1):!0}function bh(){if(ye!==null){if(Ge===0)var e=ye.return;else e=ye,Ma=zs=null,zf(e),br=null,Oo=0,e=ye;for(;e!==null;)Tg(e.alternate,e),e=e.return;ye=null}}function Lr(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,fM(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Na=0,bh(),Ke=e,ye=r=xa(e.current,null),Se=i,Ge=0,Mi=null,rs=!1,Dr=Ct(e,i),vh=!1,Ur=Si=_h=Zs=os=pn=0,li=jo=null,xh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Bt(l),p=1<<f;i|=e[f],l&=~p}return Ua=i,Xl(),r}function Kg(e,i){he=null,B.H=ko,i===Sr||i===Jl?(i=fm(),Ge=3):i===wf?(i=fm(),Ge=4):Ge=i===eh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Mi=i,ye===null&&(pn=1,dc(e,Ni(i,e.current)))}function Qg(){var e=xi.current;return e===null?!0:(Se&4194048)===Se?Ii===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Ii:!1}function jg(){var e=B.H;return B.H=ko,e===null?ko:e}function $g(){var e=B.A;return B.A=ky,e}function Tc(){pn=4,rs||(Se&4194048)!==Se&&xi.current!==null||(Dr=!0),(os&134217727)===0&&(Zs&134217727)===0||Ke===null||us(Ke,Se,Si,!1)}function Eh(e,i,r){var l=Le;Le|=2;var f=jg(),p=$g();(Ke!==e||Se!==i)&&(bc=null,Lr(e,i)),i=!1;var y=pn;t:do try{if(Ge!==0&&ye!==null){var C=ye,G=Mi;switch(Ge){case 8:bh(),y=6;break t;case 3:case 2:case 9:case 6:xi.current===null&&(i=!0);var it=Ge;if(Ge=0,Mi=null,Pr(e,C,G,it),r&&Dr){y=0;break t}break;default:it=Ge,Ge=0,Mi=null,Pr(e,C,G,it)}}qy(),y=pn;break}catch(gt){Kg(e,gt)}while(!0);return i&&e.shellSuspendCounter++,Ma=zs=null,Le=l,B.H=f,B.A=p,ye===null&&(Ke=null,Se=0,Xl()),y}function qy(){for(;ye!==null;)Jg(ye)}function Yy(e,i){var r=Le;Le|=2;var l=jg(),f=$g();Ke!==e||Se!==i?(bc=null,Sc=ke()+500,Lr(e,i)):Dr=Ct(e,i);t:do try{if(Ge!==0&&ye!==null){i=ye;var p=Mi;e:switch(Ge){case 1:Ge=0,Mi=null,Pr(e,i,p,1);break;case 2:case 9:if(cm(p)){Ge=0,Mi=null,tv(i);break}i=function(){Ge!==2&&Ge!==9||Ke!==e||(Ge=7),ra(e)},p.then(i,i);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:cm(p)?(Ge=0,Mi=null,tv(i)):(Ge=0,Mi=null,Pr(e,i,p,7));break;case 5:var y=null;switch(ye.tag){case 26:y=ye.memoizedState;case 5:case 27:var C=ye;if(y?zv(y):C.stateNode.complete){Ge=0,Mi=null;var G=C.sibling;if(G!==null)ye=G;else{var it=C.return;it!==null?(ye=it,Ac(it)):ye=null}break e}}Ge=0,Mi=null,Pr(e,i,p,5);break;case 6:Ge=0,Mi=null,Pr(e,i,p,6);break;case 8:bh(),pn=6;break t;default:throw Error(a(462))}}Zy();break}catch(gt){Kg(e,gt)}while(!0);return Ma=zs=null,B.H=l,B.A=f,Le=r,ye!==null?0:(Ke=null,Se=0,Xl(),pn)}function Zy(){for(;ye!==null&&!hn();)Jg(ye)}function Jg(e){var i=bg(e.alternate,e,Ua);e.memoizedProps=e.pendingProps,i===null?Ac(e):ye=i}function tv(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=vg(r,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=vg(r,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:zf(i);default:Tg(r,i),i=ye=$p(i,Ua),i=bg(r,i,Ua)}e.memoizedProps=e.pendingProps,i===null?Ac(e):ye=i}function Pr(e,i,r,l){Ma=zs=null,zf(i),br=null,Oo=0;var f=i.return;try{if(Iy(e,f,i,r,Se)){pn=1,dc(e,Ni(r,e.current)),ye=null;return}}catch(p){if(f!==null)throw ye=f,p;pn=1,dc(e,Ni(r,e.current)),ye=null;return}i.flags&32768?(we||l===1?e=!0:Dr||(Se&536870912)!==0?e=!1:(rs=e=!0,(l===2||l===9||l===3||l===6)&&(l=xi.current,l!==null&&l.tag===13&&(l.flags|=16384))),ev(i,e)):Ac(i)}function Ac(e){var i=e;do{if((i.flags&32768)!==0){ev(i,rs);return}e=i.return;var r=zy(i.alternate,i,Ua);if(r!==null){ye=r;return}if(i=i.sibling,i!==null){ye=i;return}ye=i=e}while(i!==null);pn===0&&(pn=5)}function ev(e,i){do{var r=Hy(e.alternate,e);if(r!==null){r.flags&=32767,ye=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){ye=e;return}ye=e=r}while(e!==null);pn=6,ye=null}function nv(e,i,r,l,f,p,y,C,G){e.cancelPendingCommit=null;do wc();while(wn!==0);if((Le&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(p=i.lanes|i.childLanes,p|=hf,nn(e,r,p,y,C,G),e===Ke&&(ye=Ke=null,Se=0),Nr=i,cs=e,Na=r,yh=p,Mh=f,Xg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$y(J,function(){return ov(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=H.p,H.p=2,y=Le,Le|=4;try{Gy(e,i,r)}finally{Le=y,H.p=f,B.T=l}}wn=1,iv(),av(),sv()}}function iv(){if(wn===1){wn=0;var e=cs,i=Nr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=H.p;H.p=2;var f=Le;Le|=4;try{Fg(i,e);var p=Ih,y=kp(e.containerInfo),C=p.focusedElem,G=p.selectionRange;if(y!==C&&C&&C.ownerDocument&&Vp(C.ownerDocument.documentElement,C)){if(G!==null&&of(C)){var it=G.start,gt=G.end;if(gt===void 0&&(gt=it),"selectionStart"in C)C.selectionStart=it,C.selectionEnd=Math.min(gt,C.value.length);else{var yt=C.ownerDocument||document,lt=yt&&yt.defaultView||window;if(lt.getSelection){var ct=lt.getSelection(),Xt=C.textContent.length,ae=Math.min(G.start,Xt),qe=G.end===void 0?ae:Math.min(G.end,Xt);!ct.extend&&ae>qe&&(y=qe,qe=ae,ae=y);var j=Gp(C,ae),k=Gp(C,qe);if(j&&k&&(ct.rangeCount!==1||ct.anchorNode!==j.node||ct.anchorOffset!==j.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var nt=yt.createRange();nt.setStart(j.node,j.offset),ct.removeAllRanges(),ae>qe?(ct.addRange(nt),ct.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),ct.addRange(nt))}}}}for(yt=[],ct=C;ct=ct.parentNode;)ct.nodeType===1&&yt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<yt.length;C++){var xt=yt[C];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}zc=!!Oh,Ih=Oh=null}finally{Le=f,H.p=l,B.T=r}}e.current=i,wn=2}}function av(){if(wn===2){wn=0;var e=cs,i=Nr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=H.p;H.p=2;var f=Le;Le|=4;try{Ng(e,i.alternate,i)}finally{Le=f,H.p=l,B.T=r}}wn=3}}function sv(){if(wn===4||wn===3){wn=0,K();var e=cs,i=Nr,r=Na,l=Xg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,Nr=cs=null,rv(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(ls=null),yo(r),i=i.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=H.p,H.p=2,B.T=null;try{for(var p=e.onRecoverableError,y=0;y<l.length;y++){var C=l[y];p(C.value,{componentStack:C.stack})}}finally{B.T=i,H.p=f}}(Na&3)!==0&&wc(),ra(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===Sh?$o++:($o=0,Sh=e):$o=0,Jo(0)}}function rv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Lo(i)))}function wc(){return iv(),av(),sv(),ov()}function ov(){if(wn!==5)return!1;var e=cs,i=yh;yh=0;var r=yo(Na),l=B.T,f=H.p;try{H.p=32>r?32:r,B.T=null,r=Mh,Mh=null;var p=cs,y=Na;if(wn=0,Nr=cs=null,Na=0,(Le&6)!==0)throw Error(a(331));var C=Le;if(Le|=4,Vg(p.current),zg(p,p.current,y,r),Le=C,Jo(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ht,p)}catch{}return!0}finally{H.p=f,B.T=l,rv(e,i)}}function lv(e,i,r){i=Ni(r,i),i=th(e.stateNode,i,2),e=ns(e,i,2),e!==null&&(Vt(e,2),ra(e))}function Ve(e,i,r){if(e.tag===3)lv(e,e,r);else for(;i!==null;){if(i.tag===3){lv(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ls===null||!ls.has(l))){e=Ni(r,e),r=cg(2),l=ns(i,r,2),l!==null&&(ug(r,l,i,e),Vt(l,2),ra(l));break}}i=i.return}}function Th(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Wy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(vh=!0,f.add(r),e=Ky.bind(null,e,i,r),i.then(e,e))}function Ky(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ke===e&&(Se&r)===r&&(pn===4||pn===3&&(Se&62914560)===Se&&300>ke()-Mc?(Le&2)===0&&Lr(e,0):_h|=r,Ur===Se&&(Ur=0)),ra(e)}function cv(e,i){i===0&&(i=bt()),e=Is(e,i),e!==null&&(Vt(e,i),ra(e))}function Qy(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),cv(e,r)}function jy(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),cv(e,r)}function $y(e,i){return mn(e,i)}var Rc=null,Or=null,Ah=!1,Cc=!1,wh=!1,fs=0;function ra(e){e!==Or&&e.next===null&&(Or===null?Rc=Or=e:Or=Or.next=e),Cc=!0,Ah||(Ah=!0,tM())}function Jo(e,i){if(!wh&&Cc){wh=!0;do for(var r=!1,l=Rc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var y=l.suspendedLanes,C=l.pingedLanes;p=(1<<31-Bt(42|e)+1)-1,p&=f&~(y&~C),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(r=!0,dv(l,p))}else p=Se,p=vt(l,l===Ke?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Ct(l,p)||(r=!0,dv(l,p));l=l.next}while(r);wh=!1}}function Jy(){uv()}function uv(){Cc=Ah=!1;var e=0;fs!==0&&uM()&&(e=fs);for(var i=ke(),r=null,l=Rc;l!==null;){var f=l.next,p=fv(l,i);p===0?(l.next=null,r===null?Rc=f:r.next=f,f===null&&(Or=r)):(r=l,(e!==0||(p&3)!==0)&&(Cc=!0)),l=f}wn!==0&&wn!==5||Jo(e),fs!==0&&(fs=0)}function fv(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var y=31-Bt(p),C=1<<y,G=f[y];G===-1?((C&r)===0||(C&l)!==0)&&(f[y]=Ft(C,i)):G<=i&&(e.expiredLanes|=C),p&=~C}if(i=Ke,r=Se,r=vt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Qe(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ct(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&Qe(l),yo(r)){case 2:case 8:r=E;break;case 32:r=J;break;case 268435456:r=dt;break;default:r=J}return l=hv.bind(null,e),r=mn(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&Qe(l),e.callbackPriority=2,e.callbackNode=null,2}function hv(e,i){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(wc()&&e.callbackNode!==r)return null;var l=Se;return l=vt(e,e===Ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Yg(e,l,i),fv(e,ke()),e.callbackNode!=null&&e.callbackNode===r?hv.bind(null,e):null)}function dv(e,i){if(wc())return null;Yg(e,i,!0)}function tM(){hM(function(){(Le&6)!==0?mn(I,Jy):uv()})}function Rh(){if(fs===0){var e=yr;e===0&&(e=Jt,Jt<<=1,(Jt&261888)===0&&(Jt=256)),fs=e}return fs}function pv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ns(""+e)}function mv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function eM(e,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var p=pv((f[Fn]||null).action),y=l.submitter;y&&(i=(i=y[Fn]||null)?pv(i.formAction):y.getAttribute("formAction"),i!==null&&(p=i,y=null));var C=new Gl("action","action",null,l,f);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(fs!==0){var G=y?mv(f,y):new FormData(f);Zf(r,{pending:!0,data:G,method:f.method,action:p},null,G)}}else typeof p=="function"&&(C.preventDefault(),G=y?mv(f,y):new FormData(f),Zf(r,{pending:!0,data:G,method:f.method,action:p},p,G))},currentTarget:f}]})}}for(var Ch=0;Ch<ff.length;Ch++){var Dh=ff[Ch],nM=Dh.toLowerCase(),iM=Dh[0].toUpperCase()+Dh.slice(1);ki(nM,"on"+iM)}ki(qp,"onAnimationEnd"),ki(Yp,"onAnimationIteration"),ki(Zp,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(xy,"onTransitionRun"),ki(yy,"onTransitionStart"),ki(My,"onTransitionCancel"),ki(Kp,"onTransitionEnd"),ot("onMouseEnter",["mouseout","mouseover"]),ot("onMouseLeave",["mouseout","mouseover"]),ot("onPointerEnter",["pointerout","pointerover"]),ot("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function gv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var p=void 0;if(i)for(var y=l.length-1;0<=y;y--){var C=l[y],G=C.instance,it=C.currentTarget;if(C=C.listener,G!==p&&f.isPropagationStopped())break t;p=C,f.currentTarget=it;try{p(f)}catch(gt){Wl(gt)}f.currentTarget=null,p=G}else for(y=0;y<l.length;y++){if(C=l[y],G=C.instance,it=C.currentTarget,C=C.listener,G!==p&&f.isPropagationStopped())break t;p=C,f.currentTarget=it;try{p(f)}catch(gt){Wl(gt)}f.currentTarget=null,p=G}}}}function Me(e,i){var r=i[Cs];r===void 0&&(r=i[Cs]=new Set);var l=e+"__bubble";r.has(l)||(vv(i,e,2,!1),r.add(l))}function Uh(e,i,r){var l=0;i&&(l|=4),vv(r,e,l,i)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Nh(e){if(!e[Dc]){e[Dc]=!0,Fl.forEach(function(r){r!=="selectionchange"&&(aM.has(r)||Uh(r,!1,e),Uh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Dc]||(i[Dc]=!0,Uh("selectionchange",!1,i))}}function vv(e,i,r,l){switch(qv(i)){case 2:var f=NM;break;case 8:f=LM;break;default:f=Yh}r=f.bind(null,i,r,e),f=void 0,!ju||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,r,{capture:!0,passive:f}):e.addEventListener(i,r,!0):f!==void 0?e.addEventListener(i,r,{passive:f}):e.addEventListener(i,r,!1)}function Lh(e,i,r,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var C=l.stateNode.containerInfo;if(C===f)break;if(y===4)for(y=l.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;C!==null;){if(y=ma(C),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){l=p=y;continue t}C=C.parentNode}}l=l.return}Sp(function(){var it=p,gt=Ku(r),yt=[];t:{var lt=Qp.get(e);if(lt!==void 0){var ct=Gl,Xt=e;switch(e){case"keypress":if(zl(r)===0)break t;case"keydown":case"keyup":ct=jx;break;case"focusin":Xt="focus",ct=ef;break;case"focusout":Xt="blur",ct=ef;break;case"beforeblur":case"afterblur":ct=ef;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=ty;break;case qp:case Yp:case Zp:ct=Vx;break;case Kp:ct=ny;break;case"scroll":case"scrollend":ct=Fx;break;case"wheel":ct=ay;break;case"copy":case"cut":case"paste":ct=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=wp;break;case"toggle":case"beforetoggle":ct=ry}var ae=(i&4)!==0,qe=!ae&&(e==="scroll"||e==="scrollend"),j=ae?lt!==null?lt+"Capture":null:lt;ae=[];for(var k=it,nt;k!==null;){var xt=k;if(nt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||nt===null||j===null||(xt=So(k,j),xt!=null&&ae.push(el(k,xt,nt))),qe)break;k=k.return}0<ae.length&&(lt=new ct(lt,Xt,null,r,gt),yt.push({event:lt,listeners:ae}))}}if((i&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",lt&&r!==Zu&&(Xt=r.relatedTarget||r.fromElement)&&(ma(Xt)||Xt[ii]))break t;if((ct||lt)&&(lt=gt.window===gt?gt:(lt=gt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ct?(Xt=r.relatedTarget||r.toElement,ct=it,Xt=Xt?ma(Xt):null,Xt!==null&&(qe=c(Xt),ae=Xt.tag,Xt!==qe||ae!==5&&ae!==27&&ae!==6)&&(Xt=null)):(ct=null,Xt=it),ct!==Xt)){if(ae=Tp,xt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ae=wp,xt="onPointerLeave",j="onPointerEnter",k="pointer"),qe=ct==null?lt:Us(ct),nt=Xt==null?lt:Us(Xt),lt=new ae(xt,k+"leave",ct,r,gt),lt.target=qe,lt.relatedTarget=nt,xt=null,ma(gt)===it&&(ae=new ae(j,k+"enter",Xt,r,gt),ae.target=nt,ae.relatedTarget=qe,xt=ae),qe=xt,ct&&Xt)e:{for(ae=sM,j=ct,k=Xt,nt=0,xt=j;xt;xt=ae(xt))nt++;xt=0;for(var ee=k;ee;ee=ae(ee))xt++;for(;0<nt-xt;)j=ae(j),nt--;for(;0<xt-nt;)k=ae(k),xt--;for(;nt--;){if(j===k||k!==null&&j===k.alternate){ae=j;break e}j=ae(j),k=ae(k)}ae=null}else ae=null;ct!==null&&_v(yt,lt,ct,ae,!1),Xt!==null&&qe!==null&&_v(yt,qe,Xt,ae,!0)}}t:{if(lt=it?Us(it):window,ct=lt.nodeName&&lt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&lt.type==="file")var Ce=Op;else if(Lp(lt))if(Ip)Ce=gy;else{Ce=py;var Yt=dy}else ct=lt.nodeName,!ct||ct.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?it&&Pe(it.elementType)&&(Ce=Op):Ce=my;if(Ce&&(Ce=Ce(e,it))){Pp(yt,Ce,r,gt);break t}Yt&&Yt(e,lt,it),e==="focusout"&&it&&lt.type==="number"&&it.memoizedProps.value!=null&&xe(lt,"number",lt.value)}switch(Yt=it?Us(it):window,e){case"focusin":(Lp(Yt)||Yt.contentEditable==="true")&&(hr=Yt,lf=it,Do=null);break;case"focusout":Do=lf=hr=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Wp(yt,r,gt);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":Wp(yt,r,gt)}var pe;if(af)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else fr?Up(e,r)&&(be="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(be="onCompositionStart");be&&(Rp&&r.locale!=="ko"&&(fr||be!=="onCompositionStart"?be==="onCompositionEnd"&&fr&&(pe=bp()):(Ka=gt,$u="value"in Ka?Ka.value:Ka.textContent,fr=!0)),Yt=Uc(it,be),0<Yt.length&&(be=new Ap(be,e,null,r,gt),yt.push({event:be,listeners:Yt}),pe?be.data=pe:(pe=Np(r),pe!==null&&(be.data=pe)))),(pe=ly?cy(e,r):uy(e,r))&&(be=Uc(it,"onBeforeInput"),0<be.length&&(Yt=new Ap("onBeforeInput","beforeinput",null,r,gt),yt.push({event:Yt,listeners:be}),Yt.data=pe)),eM(yt,e,it,r,gt)}gv(yt,i)})}function el(e,i,r){return{instance:e,listener:i,currentTarget:r}}function Uc(e,i){for(var r=i+"Capture",l=[];e!==null;){var f=e,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=So(e,r),f!=null&&l.unshift(el(e,f,p)),f=So(e,i),f!=null&&l.push(el(e,f,p))),e.tag===3)return l;e=e.return}return[]}function sM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _v(e,i,r,l,f){for(var p=i._reactName,y=[];r!==null&&r!==l;){var C=r,G=C.alternate,it=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||it===null||(G=it,f?(it=So(r,p),it!=null&&y.unshift(el(r,it,G))):f||(it=So(r,p),it!=null&&y.push(el(r,it,G)))),r=r.return}y.length!==0&&e.push({event:i,listeners:y})}var rM=/\r\n?/g,oM=/\u0000|\uFFFD/g;function xv(e){return(typeof e=="string"?e:""+e).replace(rM,`
`).replace(oM,"")}function yv(e,i){return i=xv(i),xv(e)===i}function Xe(e,i,r,l,f,p){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||gi(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&gi(e,""+l);break;case"className":Wt(e,"class",l);break;case"tabIndex":Wt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Wt(e,r,l);break;case"style":Vi(e,l,p);break;case"data":if(i!=="object"){Wt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ns(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(r==="formAction"?(i!=="input"&&Xe(e,i,"name",f.name,f,null),Xe(e,i,"formEncType",f.formEncType,f,null),Xe(e,i,"formMethod",f.formMethod,f,null),Xe(e,i,"formTarget",f.formTarget,f,null)):(Xe(e,i,"encType",f.encType,f,null),Xe(e,i,"method",f.method,f,null),Xe(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ns(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=va);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Ns(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Nt(e,"popover",l);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Nt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=na.get(r)||r,Nt(e,r,l))}}function Ph(e,i,r,l,f,p){switch(r){case"style":Vi(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?gi(e,l):(typeof l=="number"||typeof l=="bigint")&&gi(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=va);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),p=e[Fn]||null,p=p!=null?p[r]:null,typeof p=="function"&&e.removeEventListener(i,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Nt(e,r,l)}}}function Gn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,f=!1,p;for(p in r)if(r.hasOwnProperty(p)){var y=r[p];if(y!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xe(e,i,p,y,r,null)}}f&&Xe(e,i,"srcSet",r.srcSet,r,null),l&&Xe(e,i,"src",r.src,r,null);return;case"input":Me("invalid",e);var C=p=y=f=null,G=null,it=null;for(l in r)if(r.hasOwnProperty(l)){var gt=r[l];if(gt!=null)switch(l){case"name":f=gt;break;case"type":y=gt;break;case"checked":G=gt;break;case"defaultChecked":it=gt;break;case"value":p=gt;break;case"defaultValue":C=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(a(137,i));break;default:Xe(e,i,l,gt,r,null)}}qn(e,p,C,G,it,y,f,!1);return;case"select":Me("invalid",e),l=y=p=null;for(f in r)if(r.hasOwnProperty(f)&&(C=r[f],C!=null))switch(f){case"value":p=C;break;case"defaultValue":y=C;break;case"multiple":l=C;default:Xe(e,i,f,C,r,null)}i=p,r=y,e.multiple=!!l,i!=null?An(e,!!l,i,!1):r!=null&&An(e,!!l,r,!0);return;case"textarea":Me("invalid",e),p=f=l=null;for(y in r)if(r.hasOwnProperty(y)&&(C=r[y],C!=null))switch(y){case"value":l=C;break;case"defaultValue":f=C;break;case"children":p=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Xe(e,i,y,C,r,null)}Gi(e,l,f,p);return;case"option":for(G in r)r.hasOwnProperty(G)&&(l=r[G],l!=null)&&(G==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Xe(e,i,G,l,r,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<tl.length;l++)Me(tl[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in r)if(r.hasOwnProperty(it)&&(l=r[it],l!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xe(e,i,it,l,r,null)}return;default:if(Pe(i)){for(gt in r)r.hasOwnProperty(gt)&&(l=r[gt],l!==void 0&&Ph(e,i,gt,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&Xe(e,i,C,l,r,null))}function lM(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,y=null,C=null,G=null,it=null,gt=null;for(ct in r){var yt=r[ct];if(r.hasOwnProperty(ct)&&yt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=yt;default:l.hasOwnProperty(ct)||Xe(e,i,ct,null,l,yt)}}for(var lt in l){var ct=l[lt];if(yt=r[lt],l.hasOwnProperty(lt)&&(ct!=null||yt!=null))switch(lt){case"type":p=ct;break;case"name":f=ct;break;case"checked":it=ct;break;case"defaultChecked":gt=ct;break;case"value":y=ct;break;case"defaultValue":C=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==yt&&Xe(e,i,lt,ct,l,yt)}}zt(e,y,C,G,it,gt,p,f);return;case"select":ct=y=C=lt=null;for(p in r)if(G=r[p],r.hasOwnProperty(p)&&G!=null)switch(p){case"value":break;case"multiple":ct=G;default:l.hasOwnProperty(p)||Xe(e,i,p,null,l,G)}for(f in l)if(p=l[f],G=r[f],l.hasOwnProperty(f)&&(p!=null||G!=null))switch(f){case"value":lt=p;break;case"defaultValue":C=p;break;case"multiple":y=p;default:p!==G&&Xe(e,i,f,p,l,G)}i=C,r=y,l=ct,lt!=null?An(e,!!r,lt,!1):!!l!=!!r&&(i!=null?An(e,!!r,i,!0):An(e,!!r,r?[]:"",!1));return;case"textarea":ct=lt=null;for(C in r)if(f=r[C],r.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Xe(e,i,C,null,l,f)}for(y in l)if(f=l[y],p=r[y],l.hasOwnProperty(y)&&(f!=null||p!=null))switch(y){case"value":lt=f;break;case"defaultValue":ct=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==p&&Xe(e,i,y,f,l,p)}mi(e,lt,ct);return;case"option":for(var Xt in r)lt=r[Xt],r.hasOwnProperty(Xt)&&lt!=null&&!l.hasOwnProperty(Xt)&&(Xt==="selected"?e.selected=!1:Xe(e,i,Xt,null,l,lt));for(G in l)lt=l[G],ct=r[G],l.hasOwnProperty(G)&&lt!==ct&&(lt!=null||ct!=null)&&(G==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":Xe(e,i,G,lt,l,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in r)lt=r[ae],r.hasOwnProperty(ae)&&lt!=null&&!l.hasOwnProperty(ae)&&Xe(e,i,ae,null,l,lt);for(it in l)if(lt=l[it],ct=r[it],l.hasOwnProperty(it)&&lt!==ct&&(lt!=null||ct!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:Xe(e,i,it,lt,l,ct)}return;default:if(Pe(i)){for(var qe in r)lt=r[qe],r.hasOwnProperty(qe)&&lt!==void 0&&!l.hasOwnProperty(qe)&&Ph(e,i,qe,void 0,l,lt);for(gt in l)lt=l[gt],ct=r[gt],!l.hasOwnProperty(gt)||lt===ct||lt===void 0&&ct===void 0||Ph(e,i,gt,lt,l,ct);return}}for(var j in r)lt=r[j],r.hasOwnProperty(j)&&lt!=null&&!l.hasOwnProperty(j)&&Xe(e,i,j,null,l,lt);for(yt in l)lt=l[yt],ct=r[yt],!l.hasOwnProperty(yt)||lt===ct||lt==null&&ct==null||Xe(e,i,yt,lt,l,ct)}function Mv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],p=f.transferSize,y=f.initiatorType,C=f.duration;if(p&&C&&Mv(y)){for(y=0,C=f.responseEnd,l+=1;l<r.length;l++){var G=r[l],it=G.startTime;if(it>C)break;var gt=G.transferSize,yt=G.initiatorType;gt&&Mv(yt)&&(G=G.responseEnd,y+=gt*(G<C?1:(C-it)/(G-it)))}if(--l,i+=8*(p+y)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Oh=null,Ih=null;function Nc(e){return e.nodeType===9?e:e.ownerDocument}function Sv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Fh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bh=null;function uM(){var e=window.event;return e&&e.type==="popstate"?e===Bh?!1:(Bh=e,!0):(Bh=null,!1)}var Ev=typeof setTimeout=="function"?setTimeout:void 0,fM=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,hM=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(e){return Tv.resolve(null).then(e).catch(dM)}:Ev;function dM(e){setTimeout(function(){throw e})}function hs(e){return e==="head"}function Av(e,i){var r=i,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),zr(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")nl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,nl(r);for(var p=r.firstChild;p;){var y=p.nextSibling,C=p.nodeName;p[Xa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=y}}else r==="body"&&nl(e.ownerDocument.body);r=f}while(r);zr(i)}function wv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function zh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":zh(r),qa(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function pM(e,i,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Xa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=Fi(e.nextSibling),e===null)break}return null}function mM(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Fi(e.nextSibling),e===null))return null;return e}function Rv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Fi(e.nextSibling),e===null))return null;return e}function Hh(e){return e.data==="$?"||e.data==="$~"}function Gh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function gM(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Fi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Vh=null;function Cv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Fi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Dv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Uv(e,i,r){switch(i=Nc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function nl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);qa(e)}var Bi=new Map,Nv=new Set;function Lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var La=H.d;H.d={f:vM,r:_M,D:xM,C:yM,L:MM,m:SM,X:EM,S:bM,M:TM};function vM(){var e=La.f(),i=Ec();return e||i}function _M(e){var i=ga(e);i!==null&&i.tag===5&&i.type==="form"?Km(i):La.r(e)}var Ir=typeof document>"u"?null:document;function Lv(e,i,r){var l=Ir;if(l&&typeof i=="string"&&i){var f=ze(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),Nv.has(f)||(Nv.add(f),e={rel:e,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Gn(i,"link",e),xn(i),l.head.appendChild(i)))}}function xM(e){La.D(e),Lv("dns-prefetch",e,null)}function yM(e,i){La.C(e,i),Lv("preconnect",e,i)}function MM(e,i,r){La.L(e,i,r);var l=Ir;if(l&&e&&i){var f='link[rel="preload"][as="'+ze(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+ze(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+ze(r.imageSizes)+'"]')):f+='[href="'+ze(e)+'"]';var p=f;switch(i){case"style":p=Fr(e);break;case"script":p=Br(e)}Bi.has(p)||(e=_({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Bi.set(p,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(il(p))||i==="script"&&l.querySelector(al(p))||(i=l.createElement("link"),Gn(i,"link",e),xn(i),l.head.appendChild(i)))}}function SM(e,i){La.m(e,i);var r=Ir;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ze(l)+'"][href="'+ze(e)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Br(e)}if(!Bi.has(p)&&(e=_({rel:"modulepreload",href:e},i),Bi.set(p,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(al(p)))return}l=r.createElement("link"),Gn(l,"link",e),xn(l),r.head.appendChild(l)}}}function bM(e,i,r){La.S(e,i,r);var l=Ir;if(l&&e){var f=Ya(l).hoistableStyles,p=Fr(e);i=i||"default";var y=f.get(p);if(!y){var C={loading:0,preload:null};if(y=l.querySelector(il(p)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Bi.get(p))&&kh(e,r);var G=y=l.createElement("link");xn(G),Gn(G,"link",e),G._p=new Promise(function(it,gt){G.onload=it,G.onerror=gt}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Pc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:C},f.set(p,y)}}}function EM(e,i){La.X(e,i);var r=Ir;if(r&&e){var l=Ya(r).hoistableScripts,f=Br(e),p=l.get(f);p||(p=r.querySelector(al(f)),p||(e=_({src:e,async:!0},i),(i=Bi.get(f))&&Wh(e,i),p=r.createElement("script"),xn(p),Gn(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function TM(e,i){La.M(e,i);var r=Ir;if(r&&e){var l=Ya(r).hoistableScripts,f=Br(e),p=l.get(f);p||(p=r.querySelector(al(f)),p||(e=_({src:e,async:!0,type:"module"},i),(i=Bi.get(f))&&Wh(e,i),p=r.createElement("script"),xn(p),Gn(p,"link",e),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function Pv(e,i,r,l){var f=(f=tt.current)?Lc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Fr(r.href),r=Ya(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Fr(r.href);var p=Ya(f).hoistableStyles,y=p.get(e);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,y),(p=f.querySelector(il(e)))&&!p._p&&(y.instance=p,y.state.loading=5),Bi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Bi.set(e,r),p||AM(f,e,r,y.state))),i&&l===null)throw Error(a(528,""));return y}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Br(r),r=Ya(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Fr(e){return'href="'+ze(e)+'"'}function il(e){return'link[rel="stylesheet"]['+e+"]"}function Ov(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function AM(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Gn(i,"link",r),xn(i),e.head.appendChild(i))}function Br(e){return'[src="'+ze(e)+'"]'}function al(e){return"script[async]"+e}function Iv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ze(r.href)+'"]');if(l)return i.instance=l,xn(l),l;var f=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),xn(l),Gn(l,"style",f),Pc(l,r.precedence,e),i.instance=l;case"stylesheet":f=Fr(r.href);var p=e.querySelector(il(f));if(p)return i.state.loading|=4,i.instance=p,xn(p),p;l=Ov(r),(f=Bi.get(f))&&kh(l,f),p=(e.ownerDocument||e).createElement("link"),xn(p);var y=p;return y._p=new Promise(function(C,G){y.onload=C,y.onerror=G}),Gn(p,"link",l),i.state.loading|=4,Pc(p,r.precedence,e),i.instance=p;case"script":return p=Br(r.src),(f=e.querySelector(al(p)))?(i.instance=f,xn(f),f):(l=r,(f=Bi.get(p))&&(l=_({},r),Wh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),xn(f),Gn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Pc(l,r.precedence,e));return i.instance}function Pc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,y=0;y<l.length;y++){var C=l[y];if(C.dataset.precedence===i)p=C;else if(p!==f)break}p?p.parentNode.insertBefore(e,p.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function kh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Wh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Oc=null;function Fv(e,i,r){if(Oc===null){var l=new Map,f=Oc=new Map;f.set(r,l)}else f=Oc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var p=r[f];if(!(p[Xa]||p[_n]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var y=p.getAttribute(i)||"";y=e+y;var C=l.get(y);C?C.push(p):l.set(y,[p])}}return l}function Bv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function wM(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function zv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function RM(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Fr(l.href),p=i.querySelector(il(f));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Ic.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=p,xn(p);return}p=i.ownerDocument||i,l=Ov(l),(f=Bi.get(f))&&kh(l,f),p=p.createElement("link"),xn(p);var y=p;y._p=new Promise(function(C,G){y.onload=C,y.onerror=G}),Gn(p,"link",l),r.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Ic.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Xh=0;function CM(e,i){return e.stylesheets&&e.count===0&&Bc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Bc(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+i);0<e.imgBytes&&Xh===0&&(Xh=62500*cM());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bc(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>Xh?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fc=null;function Bc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fc=new Map,i.forEach(DM,e),Fc=null,Ic.call(e))}function DM(e,i){if(!(i.state.loading&4)){var r=Fc.get(e);if(r)var l=r.get(null);else{r=new Map,Fc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var y=f[p];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),l=y)}l&&r.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),p=r.get(y)||l,p===l&&r.set(null,f),r.set(y,f),this.count++,l=Ic.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var sl={$$typeof:P,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function UM(e,i,r,l,f,p,y,C,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Hv(e,i,r,l,f,p,y,C,G,it,gt,yt){return e=new UM(e,i,r,y,G,it,gt,yt,C),i=1,p===!0&&(i|=24),p=_i(3,null,null,i),e.current=p,p.stateNode=e,i=Ef(),i.refCount++,e.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:r,cache:i},Rf(p),e}function Gv(e){return e?(e=mr,e):mr}function Vv(e,i,r,l,f,p){f=Gv(f),l.context===null?l.context=f:l.pendingContext=f,l=es(i),l.payload={element:r},p=p===void 0?null:p,p!==null&&(l.callback=p),r=ns(e,l,i),r!==null&&(ci(r,e,i),Fo(r,e,i))}function kv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function qh(e,i){kv(e,i),(e=e.alternate)&&kv(e,i)}function Wv(e){if(e.tag===13||e.tag===31){var i=Is(e,67108864);i!==null&&ci(i,e,67108864),qh(e,67108864)}}function Xv(e){if(e.tag===13||e.tag===31){var i=bi();i=xo(i);var r=Is(e,i);r!==null&&ci(r,e,i),qh(e,i)}}var zc=!0;function NM(e,i,r,l){var f=B.T;B.T=null;var p=H.p;try{H.p=2,Yh(e,i,r,l)}finally{H.p=p,B.T=f}}function LM(e,i,r,l){var f=B.T;B.T=null;var p=H.p;try{H.p=8,Yh(e,i,r,l)}finally{H.p=p,B.T=f}}function Yh(e,i,r,l){if(zc){var f=Zh(l);if(f===null)Lh(e,i,l,Hc,r),Yv(e,l);else if(OM(f,e,i,r,l))l.stopPropagation();else if(Yv(e,l),i&4&&-1<PM.indexOf(e)){for(;f!==null;){var p=ga(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var y=wt(p.pendingLanes);if(y!==0){var C=p;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var G=1<<31-Bt(y);C.entanglements[1]|=G,y&=~G}ra(p),(Le&6)===0&&(Sc=ke()+500,Jo(0))}}break;case 31:case 13:C=Is(p,2),C!==null&&ci(C,p,2),Ec(),qh(p,2)}if(p=Zh(l),p===null&&Lh(e,i,l,Hc,r),p===f)break;f=p}f!==null&&l.stopPropagation()}else Lh(e,i,l,null,r)}}function Zh(e){return e=Ku(e),Kh(e)}var Hc=null;function Kh(e){if(Hc=null,e=ma(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Hc=e,null}function qv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ne()){case I:return 2;case E:return 8;case J:case rt:return 32;case dt:return 268435456;default:return 32}default:return 32}}var Qh=!1,ds=null,ps=null,ms=null,rl=new Map,ol=new Map,gs=[],PM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yv(e,i){switch(e){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":rl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(i.pointerId)}}function ll(e,i,r,l,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=ga(i),i!==null&&Wv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function OM(e,i,r,l,f){switch(i){case"focusin":return ds=ll(ds,e,i,r,l,f),!0;case"dragenter":return ps=ll(ps,e,i,r,l,f),!0;case"mouseover":return ms=ll(ms,e,i,r,l,f),!0;case"pointerover":var p=f.pointerId;return rl.set(p,ll(rl.get(p)||null,e,i,r,l,f)),!0;case"gotpointercapture":return p=f.pointerId,ol.set(p,ll(ol.get(p)||null,e,i,r,l,f)),!0}return!1}function Zv(e){var i=ma(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,lr(e.priority,function(){Xv(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,lr(e.priority,function(){Xv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Zh(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Zu=l,r.target.dispatchEvent(l),Zu=null}else return i=ga(r),i!==null&&Wv(i),e.blockedOn=r,!1;i.shift()}return!0}function Kv(e,i,r){Gc(e)&&r.delete(i)}function IM(){Qh=!1,ds!==null&&Gc(ds)&&(ds=null),ps!==null&&Gc(ps)&&(ps=null),ms!==null&&Gc(ms)&&(ms=null),rl.forEach(Kv),ol.forEach(Kv)}function Vc(e,i){e.blockedOn===i&&(e.blockedOn=null,Qh||(Qh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,IM)))}var kc=null;function Qv(e){kc!==e&&(kc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){kc===e&&(kc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(Kh(l||r)===null)continue;break}var p=ga(r);p!==null&&(e.splice(i,3),i-=3,Zf(p,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function zr(e){function i(G){return Vc(G,e)}ds!==null&&Vc(ds,e),ps!==null&&Vc(ps,e),ms!==null&&Vc(ms,e),rl.forEach(i),ol.forEach(i);for(var r=0;r<gs.length;r++){var l=gs[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<gs.length&&(r=gs[0],r.blockedOn===null);)Zv(r),r.blockedOn===null&&gs.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],p=r[l+1],y=f[Fn]||null;if(typeof p=="function")y||Qv(r);else if(y){var C=null;if(p&&p.hasAttribute("formAction")){if(f=p,y=p[Fn]||null)C=y.formAction;else if(Kh(f)!==null)continue}else C=y.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),Qv(r)}}}function jv(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function jh(e){this._internalRoot=e}Wc.prototype.render=jh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=bi();Vv(r,l,e,i,null,null)},Wc.prototype.unmount=jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Vv(e.current,2,null,e,null,null),Ec(),i[ii]=null}};function Wc(e){this._internalRoot=e}Wc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Mo();e={blockedOn:null,target:e,priority:i};for(var r=0;r<gs.length&&i!==0&&i<gs[r].priority;r++);gs.splice(r,0,e),r===0&&Zv(e)}};var $v=t.version;if($v!=="19.2.7")throw Error(a(527,$v,"19.2.7"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var FM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{ht=Xc.inject(FM),pt=Xc}catch{}}return ul.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",f=sg,p=rg,y=og;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=Hv(e,1,!1,null,null,r,l,null,f,p,y,jv),e[ii]=i.current,Nh(e),new jh(i)},ul.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,f="",p=sg,y=rg,C=og,G=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(G=r.formState)),i=Hv(e,1,!0,i,r??null,l,f,G,p,y,C,jv),i.context=Gv(null),r=i.current,l=bi(),l=xo(l),f=es(l),f.callback=null,ns(r,f,l),r=l,i.current.lanes=r,Vt(i,r),ra(i),e[ii]=i.current,Nh(e),new Wc(i)},ul.version="19.2.7",ul}var l_;function YM(){if(l_)return Jh.exports;l_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Jh.exports=qM(),Jh.exports}var ZM=YM(),tn=V0();const k0="185",Ga={ROTATE:0,DOLLY:1,PAN:2},ao={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},KM=0,c_=1,QM=2,Su=1,jM=2,Ml=3,As=0,ei=1,Ki=2,Ji=0,so=1,Wd=2,u_=3,f_=4,$M=5,Js=100,JM=101,tS=102,eS=103,nS=104,iS=200,aS=201,sS=202,rS=203,Xd=204,qd=205,oS=206,lS=207,cS=208,uS=209,fS=210,hS=211,dS=212,pS=213,mS=214,Yd=0,Zd=1,Kd=2,lo=3,Qd=4,jd=5,$d=6,Jd=7,W0=0,gS=1,vS=2,ha=0,X0=1,q0=2,Y0=3,zu=4,Z0=5,co=6,Hu=7,z1=300,ir=301,uo=302,ad=303,sd=304,Gu=306,Al=1e3,ua=1001,t0=1002,Dn=1003,_S=1004,qc=1005,On=1006,rd=1007,er=1008,wi=1009,H1=1010,G1=1011,wl=1012,K0=1013,da=1014,ji=1015,ni=1016,Q0=1017,j0=1018,Rl=1020,V1=35902,k1=35899,W1=1021,X1=1022,$i=1023,ka=1026,nr=1027,$0=1028,J0=1029,ar=1030,tp=1031,ep=1033,bu=33776,Eu=33777,Tu=33778,Au=33779,e0=35840,n0=35841,i0=35842,a0=35843,s0=36196,r0=37492,o0=37496,l0=37488,c0=37489,Du=37490,u0=37491,f0=37808,h0=37809,d0=37810,p0=37811,m0=37812,g0=37813,v0=37814,_0=37815,x0=37816,y0=37817,M0=37818,S0=37819,b0=37820,E0=37821,T0=36492,A0=36494,w0=36495,R0=36283,C0=36284,Uu=36285,D0=36286,xS=3200,yS=3201,Nu=0,MS=1,Hi="",fi="srgb",Lu="srgb-linear",Pu="linear",Oe="srgb",Hr=7680,h_=519,SS=512,bS=513,ES=514,np=515,TS=516,AS=517,ip=518,wS=519,d_=35044,p_=35048,m_="300 es",fa=2e3,Cl=2001;function RS(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ou(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function CS(){const s=Ou("canvas");return s.style.display="block",s}const g_={};function v_(...s){const t="THREE."+s.shift();console.log(t,...s)}function q1(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function se(...s){s=q1(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...s)}}function ue(...s){s=q1(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...s)}}function ro(...s){const t=s.join(" ");t in g_||(g_[t]=!0,se(...s))}function DS(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const US={[Yd]:Zd,[Kd]:$d,[Qd]:Jd,[lo]:jd,[Zd]:Yd,[$d]:Kd,[Jd]:Qd,[jd]:lo};class Rs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let __=1234567;const bl=Math.PI/180,Dl=180/Math.PI;function mo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]+"-"+Zn[t&255]+Zn[t>>8&255]+"-"+Zn[t>>16&15|64]+Zn[t>>24&255]+"-"+Zn[n&63|128]+Zn[n>>8&255]+"-"+Zn[n>>16&255]+Zn[n>>24&255]+Zn[a&255]+Zn[a>>8&255]+Zn[a>>16&255]+Zn[a>>24&255]).toLowerCase()}function ve(s,t,n){return Math.max(t,Math.min(n,s))}function ap(s,t){return(s%t+t)%t}function NS(s,t,n,a,o){return a+(s-t)*(o-a)/(n-t)}function LS(s,t,n){return s!==t?(n-s)/(t-s):0}function El(s,t,n){return(1-n)*s+n*t}function PS(s,t,n,a){return El(s,t,1-Math.exp(-n*a))}function OS(s,t=1){return t-Math.abs(ap(s,t*2)-t)}function IS(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*(3-2*s))}function FS(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*s*(s*(s*6-15)+10))}function BS(s,t){return s+Math.floor(Math.random()*(t-s+1))}function zS(s,t){return s+Math.random()*(t-s)}function HS(s){return s*(.5-Math.random())}function GS(s){s!==void 0&&(__=s);let t=__+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function VS(s){return s*bl}function kS(s){return s*Dl}function WS(s){return(s&s-1)===0&&s!==0}function XS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function YS(s,t,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),m=u(n/2),d=c((t+a)/2),g=u((t+a)/2),_=c((t-a)/2),v=u((t-a)/2),x=c((a-t)/2),b=u((a-t)/2);switch(o){case"XYX":s.set(h*g,m*_,m*v,h*d);break;case"YZY":s.set(m*v,h*g,m*_,h*d);break;case"ZXZ":s.set(m*_,m*v,h*g,h*d);break;case"XZX":s.set(h*g,m*b,m*x,h*d);break;case"YXY":s.set(m*x,h*g,m*b,h*d);break;case"ZYZ":s.set(m*b,m*x,h*g,h*d);break;default:se("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function io(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Y1={DEG2RAD:bl,RAD2DEG:Dl,generateUUID:mo,clamp:ve,euclideanModulo:ap,mapLinear:NS,inverseLerp:LS,lerp:El,damp:PS,pingpong:OS,smoothstep:IS,smootherstep:FS,randInt:BS,randFloat:zS,randFloatSpread:HS,seededRandom:GS,degToRad:VS,radToDeg:kS,isPowerOfTwo:WS,ceilPowerOfTwo:XS,floorPowerOfTwo:qS,setQuaternionFromProperEuler:YS,normalize:Jn,denormalize:io},gp=class gp{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gp.prototype.isVector2=!0;let Kt=gp;class ws{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let m=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3],v=c[u+0],x=c[u+1],b=c[u+2],w=c[u+3];if(_!==w||m!==v||d!==x||g!==b){let S=m*v+d*x+g*b+_*w;S<0&&(v=-v,x=-x,b=-b,w=-w,S=-S);let M=1-h;if(S<.9995){const L=Math.acos(S),P=Math.sin(L);M=Math.sin(M*L)/P,h=Math.sin(h*L)/P,m=m*M+v*h,d=d*M+x*h,g=g*M+b*h,_=_*M+w*h}else{m=m*M+v*h,d=d*M+x*h,g=g*M+b*h,_=_*M+w*h;const L=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=L,d*=L,g*=L,_*=L}}t[n]=m,t[n+1]=d,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],m=a[o+1],d=a[o+2],g=a[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return t[n]=h*b+g*_+m*x-d*v,t[n+1]=m*b+g*v+d*_-h*x,t[n+2]=d*b+g*x+h*v-m*_,t[n+3]=g*b-h*_-m*v-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,d=h(a/2),g=h(o/2),_=h(c/2),v=m(a/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_+v*x*b;break;case"YZX":this._x=v*g*_+d*x*b,this._y=d*x*_+v*g*b,this._z=d*g*b-v*x*_,this._w=d*g*_-v*x*b;break;case"XZY":this._x=v*g*_-d*x*b,this._y=d*x*_-v*g*b,this._z=d*g*b+v*x*_,this._w=d*g*_+v*x*b;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],d=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-d)*x,this._z=(u-o)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+d)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-d)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(u-o)/x,this._x=(c+d)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=a*g+u*h+o*d-c*m,this._y=o*g+u*m+c*h-a*d,this._z=c*g+u*d+a*m-o*h,this._w=u*g-a*h-o*m-c*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);m=Math.sin(m*d)/g,n=Math.sin(n*d)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vp=class vp{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(x_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(x_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,m=t.w,d=2*(u*o-h*a),g=2*(h*n-c*o),_=2*(c*a-u*n);return this.x=n+m*d+u*_-h*g,this.y=a+m*g+h*d-c*_,this.z=o+m*_+c*g-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this.z=ve(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this.z=ve(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return od.copy(this).projectOnVector(t),this.sub(od)}reflect(t){return this.sub(od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vp.prototype.isVector3=!0;let $=vp;const od=new $,x_=new ws,_p=class _p{constructor(t,n,a,o,c,u,h,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,d)}set(t,n,a,o,c,u,h,m,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],d=a[1],g=a[4],_=a[7],v=a[2],x=a[5],b=a[8],w=o[0],S=o[3],M=o[6],L=o[1],P=o[4],A=o[7],F=o[2],N=o[5],O=o[8];return c[0]=u*w+h*L+m*F,c[3]=u*S+h*P+m*N,c[6]=u*M+h*A+m*O,c[1]=d*w+g*L+_*F,c[4]=d*S+g*P+_*N,c[7]=d*M+g*A+_*O,c[2]=v*w+x*L+b*F,c[5]=v*S+x*P+b*N,c[8]=v*M+x*A+b*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8];return n*u*g-n*h*d-a*c*g+a*h*m+o*c*d-o*u*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=g*u-h*d,v=h*m-g*c,x=d*c-u*m,b=n*_+a*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=_*w,t[1]=(o*d-g*a)*w,t[2]=(h*a-o*u)*w,t[3]=v*w,t[4]=(g*n-o*m)*w,t[5]=(o*c-h*n)*w,t[6]=x*w,t[7]=(a*m-d*n)*w,t[8]=(u*n-a*c)*w,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const m=Math.cos(c),d=Math.sin(c);return this.set(a*m,a*d,-a*(m*u+d*h)+u+t,-o*d,o*m,-o*(-d*u+m*h)+h+n,0,0,1),this}scale(t,n){return ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ld.makeScale(t,n)),this}rotate(t){return ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ld.makeRotation(-t)),this}translate(t,n){return ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ld.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};_p.prototype.isMatrix3=!0;let ce=_p;const ld=new ce,y_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZS(){const s={enabled:!0,workingColorSpace:Lu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Oe&&(o.r=Va(o.r),o.g=Va(o.g),o.b=Va(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Oe&&(o.r=oo(o.r),o.g=oo(o.g),o.b=oo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Hi?Pu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Lu]:{primaries:t,whitePoint:a,transfer:Pu,toXYZ:y_,fromXYZ:M_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:a,transfer:Oe,toXYZ:y_,fromXYZ:M_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Te=ZS();function Va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gr;class KS{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Gr===void 0&&(Gr=Ou("canvas")),Gr.width=t.width,Gr.height=t.height;const o=Gr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Gr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ou("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Va(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Va(n[a]/255)*255):n[a]=Va(n[a]);return{data:n,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QS=0;class sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=mo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(cd(o[u].image)):c.push(cd(o[u]))}else c=cd(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?KS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let jS=0;const ud=new $;class Qn extends Rs{constructor(t=Qn.DEFAULT_IMAGE,n=Qn.DEFAULT_MAPPING,a=ua,o=ua,c=On,u=er,h=$i,m=wi,d=Qn.DEFAULT_ANISOTROPY,g=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=mo(),this.name="",this.source=new sp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){se(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){se(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==z1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Al:t.x=t.x-Math.floor(t.x);break;case ua:t.x=t.x<0?0:1;break;case t0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Al:t.y=t.y-Math.floor(t.y);break;case ua:t.y=t.y<0?0:1;break;case t0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=z1;Qn.DEFAULT_ANISOTROPY=1;const xp=class xp{constructor(t=0,n=0,a=0,o=1){this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,d=m[0],g=m[4],_=m[8],v=m[1],x=m[5],b=m[9],w=m[2],S=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(b+S)<.1&&Math.abs(d+x+M-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(d+1)/2,A=(x+1)/2,F=(M+1)/2,N=(g+v)/4,O=(_+w)/4,T=(b+S)/4;return P>A&&P>F?P<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(P),o=N/a,c=O/a):A>F?A<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),a=N/o,c=T/o):F<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),a=O/c,o=T/c),this.set(a,o,c,n),this}let L=Math.sqrt((S-b)*(S-b)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(S-b)/L,this.y=(_-w)/L,this.z=(v-g)/L,this.w=Math.acos((d+x+M-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this.z=ve(this.z,t.z,n.z),this.w=ve(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this.z=ve(this.z,t,n),this.w=ve(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xp.prototype.isVector4=!0;let ln=xp;class $S extends Rs{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new ln(0,0,t,n),this.scissorTest=!1,this.viewport=new ln(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},c=new Qn(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new sp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends $S{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Z1 extends Qn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends Qn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bu=class Bu{constructor(t,n,a,o,c,u,h,m,d,g,_,v,x,b,w,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,d,g,_,v,x,b,w,S)}set(t,n,a,o,c,u,h,m,d,g,_,v,x,b,w,S){const M=this.elements;return M[0]=t,M[4]=n,M[8]=a,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=d,M[6]=g,M[10]=_,M[14]=v,M[3]=x,M[7]=b,M[11]=w,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bu().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Vr.setFromMatrixColumn(t,0).length(),c=1/Vr.setFromMatrixColumn(t,1).length(),u=1/Vr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),d=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,x=u*_,b=h*g,w=h*_;n[0]=m*g,n[4]=-m*_,n[8]=d,n[1]=x+b*d,n[5]=v-w*d,n[9]=-h*m,n[2]=w-v*d,n[6]=b+x*d,n[10]=u*m}else if(t.order==="YXZ"){const v=m*g,x=m*_,b=d*g,w=d*_;n[0]=v+w*h,n[4]=b*h-x,n[8]=u*d,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=x*h-b,n[6]=w+v*h,n[10]=u*m}else if(t.order==="ZXY"){const v=m*g,x=m*_,b=d*g,w=d*_;n[0]=v-w*h,n[4]=-u*_,n[8]=b+x*h,n[1]=x+b*h,n[5]=u*g,n[9]=w-v*h,n[2]=-u*d,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const v=u*g,x=u*_,b=h*g,w=h*_;n[0]=m*g,n[4]=b*d-x,n[8]=v*d+w,n[1]=m*_,n[5]=w*d+v,n[9]=x*d-b,n[2]=-d,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const v=u*m,x=u*d,b=h*m,w=h*d;n[0]=m*g,n[4]=w-v*_,n[8]=b*_+x,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-d*g,n[6]=x*_+b,n[10]=v-w*_}else if(t.order==="XZY"){const v=u*m,x=u*d,b=h*m,w=h*d;n[0]=m*g,n[4]=-_,n[8]=d*g,n[1]=v*_+w,n[5]=u*g,n[9]=x*_-b,n[2]=b*_-x,n[6]=h*g,n[10]=w*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(t2,t,e2)}lookAt(t,n,a){const o=this.elements;return Ei.subVectors(t,n),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),_s.crossVectors(a,Ei),_s.lengthSq()===0&&(Math.abs(a.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),_s.crossVectors(a,Ei)),_s.normalize(),Yc.crossVectors(Ei,_s),o[0]=_s.x,o[4]=Yc.x,o[8]=Ei.x,o[1]=_s.y,o[5]=Yc.y,o[9]=Ei.y,o[2]=_s.z,o[6]=Yc.z,o[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],d=a[12],g=a[1],_=a[5],v=a[9],x=a[13],b=a[2],w=a[6],S=a[10],M=a[14],L=a[3],P=a[7],A=a[11],F=a[15],N=o[0],O=o[4],T=o[8],U=o[12],W=o[1],V=o[5],Y=o[9],ut=o[13],ft=o[2],Q=o[6],B=o[10],H=o[14],z=o[3],et=o[7],mt=o[11],D=o[15];return c[0]=u*N+h*W+m*ft+d*z,c[4]=u*O+h*V+m*Q+d*et,c[8]=u*T+h*Y+m*B+d*mt,c[12]=u*U+h*ut+m*H+d*D,c[1]=g*N+_*W+v*ft+x*z,c[5]=g*O+_*V+v*Q+x*et,c[9]=g*T+_*Y+v*B+x*mt,c[13]=g*U+_*ut+v*H+x*D,c[2]=b*N+w*W+S*ft+M*z,c[6]=b*O+w*V+S*Q+M*et,c[10]=b*T+w*Y+S*B+M*mt,c[14]=b*U+w*ut+S*H+M*D,c[3]=L*N+P*W+A*ft+F*z,c[7]=L*O+P*V+A*Q+F*et,c[11]=L*T+P*Y+A*B+F*mt,c[15]=L*U+P*ut+A*H+F*D,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],m=t[9],d=t[13],g=t[2],_=t[6],v=t[10],x=t[14],b=t[3],w=t[7],S=t[11],M=t[15],L=m*x-d*v,P=h*x-d*_,A=h*v-m*_,F=u*x-d*g,N=u*v-m*g,O=u*_-h*g;return n*(w*L-S*P+M*A)-a*(b*L-S*F+M*N)+o*(b*P-w*F+M*O)-c*(b*A-w*N+S*O)}determinantAffine(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[1],u=t[5],h=t[9],m=t[2],d=t[6],g=t[10];return n*(u*g-h*d)-a*(c*g-h*m)+o*(c*d-u*m)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],d=t[7],g=t[8],_=t[9],v=t[10],x=t[11],b=t[12],w=t[13],S=t[14],M=t[15],L=n*h-a*u,P=n*m-o*u,A=n*d-c*u,F=a*m-o*h,N=a*d-c*h,O=o*d-c*m,T=g*w-_*b,U=g*S-v*b,W=g*M-x*b,V=_*S-v*w,Y=_*M-x*w,ut=v*M-x*S,ft=L*ut-P*Y+A*V+F*W-N*U+O*T;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ft;return t[0]=(h*ut-m*Y+d*V)*Q,t[1]=(o*Y-a*ut-c*V)*Q,t[2]=(w*O-S*N+M*F)*Q,t[3]=(v*N-_*O-x*F)*Q,t[4]=(m*W-u*ut-d*U)*Q,t[5]=(n*ut-o*W+c*U)*Q,t[6]=(S*A-b*O-M*P)*Q,t[7]=(g*O-v*A+x*P)*Q,t[8]=(u*Y-h*W+d*T)*Q,t[9]=(a*W-n*Y-c*T)*Q,t[10]=(b*N-w*A+M*L)*Q,t[11]=(_*A-g*N-x*L)*Q,t[12]=(h*U-u*V-m*T)*Q,t[13]=(n*V-a*U+o*T)*Q,t[14]=(w*P-b*F-S*L)*Q,t[15]=(g*F-_*P+v*L)*Q,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,m=t.z,d=c*u,g=c*h;return this.set(d*u+a,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+a,g*m-o*u,0,d*m-o*h,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,d=c+c,g=u+u,_=h+h,v=c*d,x=c*g,b=c*_,w=u*g,S=u*_,M=h*_,L=m*d,P=m*g,A=m*_,F=a.x,N=a.y,O=a.z;return o[0]=(1-(w+M))*F,o[1]=(x+A)*F,o[2]=(b-P)*F,o[3]=0,o[4]=(x-A)*N,o[5]=(1-(v+M))*N,o[6]=(S+L)*N,o[7]=0,o[8]=(b+P)*O,o[9]=(S-L)*O,o[10]=(1-(v+w))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Vr.set(o[0],o[1],o[2]).length();const h=Vr.set(o[4],o[5],o[6]).length(),m=Vr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),qi.copy(this);const d=1/u,g=1/h,_=1/m;return qi.elements[0]*=d,qi.elements[1]*=d,qi.elements[2]*=d,qi.elements[4]*=g,qi.elements[5]*=g,qi.elements[6]*=g,qi.elements[8]*=_,qi.elements[9]*=_,qi.elements[10]*=_,n.setFromRotationMatrix(qi),a.x=u,a.y=h,a.z=m,this}makePerspective(t,n,a,o,c,u,h=fa,m=!1){const d=this.elements,g=2*c/(n-t),_=2*c/(a-o),v=(n+t)/(n-t),x=(a+o)/(a-o);let b,w;if(m)b=c/(u-c),w=u*c/(u-c);else if(h===fa)b=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(h===Cl)b=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=fa,m=!1){const d=this.elements,g=2/(n-t),_=2/(a-o),v=-(n+t)/(n-t),x=-(a+o)/(a-o);let b,w;if(m)b=1/(u-c),w=u/(u-c);else if(h===fa)b=-2/(u-c),w=-(u+c)/(u-c);else if(h===Cl)b=-1/(u-c),w=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};Bu.prototype.isMatrix4=!0;let je=Bu;const Vr=new $,qi=new je,t2=new $(0,0,0),e2=new $(1,1,1),_s=new $,Yc=new $,Ei=new $,S_=new je,b_=new ws;class Wa{constructor(t=0,n=0,a=0,o=Wa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return S_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(S_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return b_.setFromEuler(this),this.setFromQuaternion(b_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wa.DEFAULT_ORDER="XYZ";class rp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let n2=0;const E_=new $,kr=new ws,Pa=new je,Zc=new $,fl=new $,i2=new $,a2=new ws,T_=new $(1,0,0),A_=new $(0,1,0),w_=new $(0,0,1),R_={type:"added"},s2={type:"removed"},Wr={type:"childadded",child:null},fd={type:"childremoved",child:null};class Xn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const t=new $,n=new Wa,a=new ws,o=new $(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new je},normalMatrix:{value:new ce}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return kr.setFromAxisAngle(t,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(t,n){return kr.setFromAxisAngle(t,n),this.quaternion.premultiply(kr),this}rotateX(t){return this.rotateOnAxis(T_,t)}rotateY(t){return this.rotateOnAxis(A_,t)}rotateZ(t){return this.rotateOnAxis(w_,t)}translateOnAxis(t,n){return E_.copy(t).applyQuaternion(this.quaternion),this.position.add(E_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(T_,t)}translateY(t){return this.translateOnAxis(A_,t)}translateZ(t){return this.translateOnAxis(w_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Zc.copy(t):Zc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pa.lookAt(fl,Zc,this.up):Pa.lookAt(Zc,fl,this.up),this.quaternion.setFromRotationMatrix(Pa),o&&(Pa.extractRotation(o.matrixWorld),kr.setFromRotationMatrix(Pa),this.quaternion.premultiply(kr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(R_),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(s2),fd.child=t,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(R_),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,t,i2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,a2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n,a=!1){const o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),d=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),x=u(t.animations),b=u(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Xn.DEFAULT_UP=new $(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kc extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r2={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const w of t.hand.values()){const S=n.getJointPose(w,a),M=this._getHandJoint(d,w);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;d.inputState.pinching&&v>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(r2)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Kc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const K1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},Qc={h:0,s:0,l:0};function dd(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class ie{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Te.workingColorSpace){return this.r=t,this.g=n,this.b=a,Te.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Te.workingColorSpace){if(t=ap(t,1),n=ve(n,0,1),a=ve(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=dd(u,c,t+1/3),this.g=dd(u,c,t),this.b=dd(u,c,t-1/3)}return Te.colorSpaceToWorking(this,o),this}setStyle(t,n=fi){function a(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:se("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=fi){const a=K1[t.toLowerCase()];return a!==void 0?this.setHex(a,n):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Va(t.r),this.g=Va(t.g),this.b=Va(t.b),this}copyLinearToSRGB(t){return this.r=oo(t.r),this.g=oo(t.g),this.b=oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Te.workingToColorSpace(Kn.copy(this),t),Math.round(ve(Kn.r*255,0,255))*65536+Math.round(ve(Kn.g*255,0,255))*256+Math.round(ve(Kn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Te.workingColorSpace){Te.workingToColorSpace(Kn.copy(this),n);const a=Kn.r,o=Kn.g,c=Kn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,d;const g=(h+u)/2;if(h===u)m=0,d=0;else{const _=u-h;switch(d=g<=.5?_/(u+h):_/(2-u-h),u){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return t.h=m,t.s=d,t.l=g,t}getRGB(t,n=Te.workingColorSpace){return Te.workingToColorSpace(Kn.copy(this),n),t.r=Kn.r,t.g=Kn.g,t.b=Kn.b,t}getStyle(t=fi){Te.workingToColorSpace(Kn.copy(this),t);const n=Kn.r,a=Kn.g,o=Kn.b;return t!==fi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+n,xs.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(xs),t.getHSL(Qc);const a=El(xs.h,Qc.h,n),o=El(xs.s,Qc.s,n),c=El(xs.l,Qc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new ie;ie.NAMES=K1;class Q1 extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wa,this.environmentIntensity=1,this.environmentRotation=new Wa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yi=new $,Oa=new $,pd=new $,Ia=new $,Xr=new $,qr=new $,C_=new $,md=new $,gd=new $,vd=new $,_d=new ln,xd=new ln,yd=new ln;class Qi{constructor(t=new $,n=new $,a=new $){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Yi.subVectors(t,n),o.cross(Yi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Yi.subVectors(o,n),Oa.subVectors(a,n),pd.subVectors(t,n);const u=Yi.dot(Yi),h=Yi.dot(Oa),m=Yi.dot(pd),d=Oa.dot(Oa),g=Oa.dot(pd),_=u*d-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(d*m-h*g)*v,b=(u*g-h*m)*v;return c.set(1-x-b,b,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Ia)===null?!1:Ia.x>=0&&Ia.y>=0&&Ia.x+Ia.y<=1}static getInterpolation(t,n,a,o,c,u,h,m){return this.getBarycoord(t,n,a,o,Ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ia.x),m.addScaledVector(u,Ia.y),m.addScaledVector(h,Ia.z),m)}static getInterpolatedAttribute(t,n,a,o,c,u){return _d.setScalar(0),xd.setScalar(0),yd.setScalar(0),_d.fromBufferAttribute(t,n),xd.fromBufferAttribute(t,a),yd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(_d,c.x),u.addScaledVector(xd,c.y),u.addScaledVector(yd,c.z),u}static isFrontFacing(t,n,a,o){return Yi.subVectors(a,n),Oa.subVectors(t,n),Yi.cross(Oa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),Yi.cross(Oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Qi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Qi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;Xr.subVectors(o,a),qr.subVectors(c,a),md.subVectors(t,a);const m=Xr.dot(md),d=qr.dot(md);if(m<=0&&d<=0)return n.copy(a);gd.subVectors(t,o);const g=Xr.dot(gd),_=qr.dot(gd);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*d;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(Xr,u);vd.subVectors(t,c);const x=Xr.dot(vd),b=qr.dot(vd);if(b>=0&&x<=b)return n.copy(c);const w=x*d-m*b;if(w<=0&&d>=0&&b<=0)return h=d/(d-b),n.copy(a).addScaledVector(qr,h);const S=g*b-x*_;if(S<=0&&_-g>=0&&x-b>=0)return C_.subVectors(c,o),h=(_-g)/(_-g+(x-b)),n.copy(o).addScaledVector(C_,h);const M=1/(S+w+v);return u=w*M,h=v*M,n.copy(a).addScaledVector(Xr,u).addScaledVector(qr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class rr{constructor(t=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Zi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Zi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Zi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Zi):Zi.fromBufferAttribute(c,u),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),jc.copy(a.boundingBox)),jc.applyMatrix4(t.matrixWorld),this.union(jc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hl),$c.subVectors(this.max,hl),Yr.subVectors(t.a,hl),Zr.subVectors(t.b,hl),Kr.subVectors(t.c,hl),ys.subVectors(Zr,Yr),Ms.subVectors(Kr,Zr),Ks.subVectors(Yr,Kr);let n=[0,-ys.z,ys.y,0,-Ms.z,Ms.y,0,-Ks.z,Ks.y,ys.z,0,-ys.x,Ms.z,0,-Ms.x,Ks.z,0,-Ks.x,-ys.y,ys.x,0,-Ms.y,Ms.x,0,-Ks.y,Ks.x,0];return!Md(n,Yr,Zr,Kr,$c)||(n=[1,0,0,0,1,0,0,0,1],!Md(n,Yr,Zr,Kr,$c))?!1:(Jc.crossVectors(ys,Ms),n=[Jc.x,Jc.y,Jc.z],Md(n,Yr,Zr,Kr,$c))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fa=[new $,new $,new $,new $,new $,new $,new $,new $],Zi=new $,jc=new rr,Yr=new $,Zr=new $,Kr=new $,ys=new $,Ms=new $,Ks=new $,hl=new $,$c=new $,Jc=new $,Qs=new $;function Md(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){Qs.fromArray(s,c);const h=o.x*Math.abs(Qs.x)+o.y*Math.abs(Qs.y)+o.z*Math.abs(Qs.z),m=t.dot(Qs),d=n.dot(Qs),g=a.dot(Qs);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const En=new $,tu=new Kt;let o2=0;class Di extends Rs{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=d_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)tu.fromBufferAttribute(this,n),tu.applyMatrix3(t),this.setXY(n,tu.x,tu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyMatrix3(t),this.setXYZ(n,En.x,En.y,En.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(t),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(t),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)En.fromBufferAttribute(this,n),En.transformDirection(t),this.setXYZ(n,En.x,En.y,En.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=io(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Jn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=io(n,this.array)),n}setX(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=io(n,this.array)),n}setY(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=io(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=io(n,this.array)),n}setW(t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),o=Jn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),o=Jn(o,this.array),c=Jn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==d_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class j1 extends Di{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class $1 extends Di{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ta extends Di{constructor(t,n,a){super(new Float32Array(t),n,a)}}const l2=new rr,dl=new $,Sd=new $;class Ll{constructor(t=new $,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):l2.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dl.subVectors(t,this.center);const n=dl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(dl,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dl.copy(t.center).add(Sd)),this.expandByPoint(dl.copy(t.center).sub(Sd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let c2=0;const zi=new je,bd=new Xn,Qr=new $,Ti=new rr,pl=new rr,Pn=new $;class pa extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c2++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(RS(t)?$1:j1)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ce().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zi.makeRotationFromQuaternion(t),this.applyMatrix4(zi),this}rotateX(t){return zi.makeRotationX(t),this.applyMatrix4(zi),this}rotateY(t){return zi.makeRotationY(t),this.applyMatrix4(zi),this}rotateZ(t){return zi.makeRotationZ(t),this.applyMatrix4(zi),this}translate(t,n,a){return zi.makeTranslation(t,n,a),this.applyMatrix4(zi),this}scale(t,n,a){return zi.makeScale(t,n,a),this.applyMatrix4(zi),this}lookAt(t){return bd.lookAt(t),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ta(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Ti.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const a=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];pl.setFromBufferAttribute(h),this.morphTargetsRelative?(Pn.addVectors(Ti.min,pl.min),Ti.expandByPoint(Pn),Pn.addVectors(Ti.max,pl.max),Ti.expandByPoint(Pn)):(Ti.expandByPoint(pl.min),Ti.expandByPoint(pl.max))}Ti.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Pn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Pn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Pn.fromBufferAttribute(h,d),m&&(Qr.fromBufferAttribute(t,d),Pn.add(Qr)),o=Math.max(o,a.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Di(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new $,m[T]=new $;const d=new $,g=new $,_=new $,v=new Kt,x=new Kt,b=new Kt,w=new $,S=new $;function M(T,U,W){d.fromBufferAttribute(a,T),g.fromBufferAttribute(a,U),_.fromBufferAttribute(a,W),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,U),b.fromBufferAttribute(c,W),g.sub(d),_.sub(d),x.sub(v),b.sub(v);const V=1/(x.x*b.y-b.x*x.y);isFinite(V)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(V),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(V),h[T].add(w),h[U].add(w),h[W].add(w),m[T].add(S),m[U].add(S),m[W].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let T=0,U=L.length;T<U;++T){const W=L[T],V=W.start,Y=W.count;for(let ut=V,ft=V+Y;ut<ft;ut+=3)M(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const P=new $,A=new $,F=new $,N=new $;function O(T){F.fromBufferAttribute(o,T),N.copy(F);const U=h[T];P.copy(U),P.sub(F.multiplyScalar(F.dot(U))).normalize(),A.crossVectors(N,U);const V=A.dot(m[T])<0?-1:1;u.setXYZW(T,P.x,P.y,P.z,V)}for(let T=0,U=L.length;T<U;++T){const W=L[T],V=W.start,Y=W.count;for(let ut=V,ft=V+Y;ut<ft;ut+=3)O(t.getX(ut+0)),O(t.getX(ut+1)),O(t.getX(ut+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new $,c=new $,u=new $,h=new $,m=new $,d=new $,g=new $,_=new $;if(t)for(let v=0,x=t.count;v<x;v+=3){const b=t.getX(v+0),w=t.getX(v+1),S=t.getX(v+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,b),m.fromBufferAttribute(a,w),d.fromBufferAttribute(a,S),h.add(g),m.add(g),d.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(w,m.x,m.y,m.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Pn.fromBufferAttribute(t,n),Pn.normalize(),t.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function t(h,m){const d=h.array,g=h.itemSize,_=h.normalized,v=new d.constructor(m.length*g);let x=0,b=0;for(let w=0,S=m.length;w<S;w++){h.isInterleavedBufferAttribute?x=m[w]*h.data.stride+h.offset:x=m[w]*g;for(let M=0;M<g;M++)v[b++]=d[x++]}return new Di(v,g,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pa,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=t(m,a);n.setAttribute(h,d)}const c=this.morphAttributes;for(const h in c){const m=[],d=c[h];for(let g=0,_=d.length;g<_;g++){const v=d[g],x=t(v,a);m.push(x)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const d=u[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const d=a[m];t.data.attributes[m]=d.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,v=d.length;_<v;_++){const x=d[_];g.push(x.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const c=t.morphAttributes;for(const d in c){const g=[],_=c[d];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,g=u.length;d<g;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let u2=0;class go extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u2++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=so,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=qd,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){se(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){se(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(a.blending=this.blending),this.side!==As&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Xd&&(a.blendSrc=this.blendSrc),this.blendDst!==qd&&(a.blendDst=this.blendDst),this.blendEquation!==Js&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Kt().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ba=new $,Ed=new $,eu=new $,Ss=new $,Td=new $,nu=new $,Ad=new $;class op{constructor(t=new $,n=new $(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ba.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,n),Ba.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Ed.copy(t).add(n).multiplyScalar(.5),eu.copy(n).sub(t).normalize(),Ss.copy(this.origin).sub(Ed);const c=t.distanceTo(n)*.5,u=-this.direction.dot(eu),h=Ss.dot(this.direction),m=-Ss.dot(eu),d=Ss.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*m-h,v=u*h-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+d}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+d):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+d);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ed).addScaledVector(eu,v),x}intersectSphere(t,n){Ba.subVectors(t.center,this.origin);const a=Ba.dot(this.direction),o=Ba.dot(Ba)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,n,a,o,c){Td.subVectors(n,t),nu.subVectors(a,t),Ad.crossVectors(Td,nu);let u=this.direction.dot(Ad),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Ss.subVectors(this.origin,t);const m=h*this.direction.dot(nu.crossVectors(Ss,nu));if(m<0)return null;const d=h*this.direction.dot(Td.cross(Ss));if(d<0||m+d>u)return null;const g=-h*Ss.dot(Ad);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lp extends go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wa,this.combine=W0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const D_=new je,js=new op,iu=new Ll,U_=new $,au=new $,su=new $,ru=new $,wd=new $,ou=new $,N_=new $,lu=new $;class Tn extends Xn{constructor(t=new pa,n=new lp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){ou.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const g=h[m],_=c[m];g!==0&&(wd.fromBufferAttribute(_,t),u?ou.addScaledVector(wd,g):ou.addScaledVector(wd.sub(n),g))}n.add(ou)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),iu.copy(a.boundingSphere),iu.applyMatrix4(c),js.copy(t.ray).recast(t.near),!(iu.containsPoint(js.origin)===!1&&(js.intersectSphere(iu,U_)===null||js.origin.distanceToSquared(U_)>(t.far-t.near)**2))&&(D_.copy(c).invert(),js.copy(t.ray).applyMatrix4(D_),!(a.boundingBox!==null&&js.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,js)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,d=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const S=v[b],M=u[S.materialIndex],L=Math.max(S.start,x.start),P=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let A=L,F=P;A<F;A+=3){const N=h.getX(A),O=h.getX(A+1),T=h.getX(A+2);o=cu(this,M,t,a,d,g,_,N,O,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let S=b,M=w;S<M;S+=3){const L=h.getX(S),P=h.getX(S+1),A=h.getX(S+2);o=cu(this,u,t,a,d,g,_,L,P,A),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,w=v.length;b<w;b++){const S=v[b],M=u[S.materialIndex],L=Math.max(S.start,x.start),P=Math.min(m.count,Math.min(S.start+S.count,x.start+x.count));for(let A=L,F=P;A<F;A+=3){const N=A,O=A+1,T=A+2;o=cu(this,M,t,a,d,g,_,N,O,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),w=Math.min(m.count,x.start+x.count);for(let S=b,M=w;S<M;S+=3){const L=S,P=S+1,A=S+2;o=cu(this,u,t,a,d,g,_,L,P,A),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function f2(s,t,n,a,o,c,u,h){let m;if(t.side===ei?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,t.side===As,h),m===null)return null;lu.copy(h),lu.applyMatrix4(s.matrixWorld);const d=n.ray.origin.distanceTo(lu);return d<n.near||d>n.far?null:{distance:d,point:lu.clone(),object:s}}function cu(s,t,n,a,o,c,u,h,m,d){s.getVertexPosition(h,au),s.getVertexPosition(m,su),s.getVertexPosition(d,ru);const g=f2(s,t,n,a,au,su,ru,N_);if(g){const _=new $;Qi.getBarycoord(N_,au,su,ru,_),o&&(g.uv=Qi.getInterpolatedAttribute(o,h,m,d,_,new Kt)),c&&(g.uv1=Qi.getInterpolatedAttribute(c,h,m,d,_,new Kt)),u&&(g.normal=Qi.getInterpolatedAttribute(u,h,m,d,_,new $),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:d,normal:new $,materialIndex:0};Qi.getNormal(au,su,ru,v.normal),g.face=v,g.barycoord=_}return g}class J1 extends Qn{constructor(t=null,n=1,a=1,o,c,u,h,m,d=Dn,g=Dn,_,v){super(null,u,h,m,d,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class L_ extends Di{constructor(t,n,a,o=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const jr=new je,P_=new je,uu=[],O_=new rr,h2=new je,ml=new Tn,gl=new Ll;class d2 extends Tn{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new L_(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,h2)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new rr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,jr),O_.copy(t.boundingBox).applyMatrix4(jr),this.boundingBox.union(O_)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ll),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,jr),gl.copy(t.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(gl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let h=0;h<a.length;h++)a[h]=o[u+h]}raycast(t,n){const a=this.matrixWorld,o=this.count;if(ml.geometry=this.geometry,ml.material=this.material,ml.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gl.copy(this.boundingSphere),gl.applyMatrix4(a),t.ray.intersectsSphere(gl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,jr),P_.multiplyMatrices(a,jr),ml.matrixWorld=P_,ml.raycast(t,uu);for(let u=0,h=uu.length;u<h;u++){const m=uu[u];m.instanceId=c,m.object=this,n.push(m)}uu.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new L_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new J1(new Float32Array(o*this.count),o,this.count,$0,ji));const c=this.morphTexture.source.data.data;let u=0;for(let d=0;d<a.length;d++)u+=a[d];const h=this.geometry.morphTargetsRelative?1:1-u,m=o*t;return c[m]=h,c.set(a,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Rd=new $,p2=new $,m2=new ce;class Ha{constructor(t=new $(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Rd.subVectors(a,n).cross(p2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const o=t.delta(Rd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(o,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||m2.getNormalMatrix(t),o=this.coplanarPoint(Rd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new Ll,g2=new Kt(.5,.5),fu=new $;class cp{constructor(t=new Ha,n=new Ha,a=new Ha,o=new Ha,c=new Ha,u=new Ha){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=fa,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],d=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],w=c[9],S=c[10],M=c[11],L=c[12],P=c[13],A=c[14],F=c[15];if(o[0].setComponents(d-u,x-g,M-b,F-L).normalize(),o[1].setComponents(d+u,x+g,M+b,F+L).normalize(),o[2].setComponents(d+h,x+_,M+w,F+P).normalize(),o[3].setComponents(d-h,x-_,M-w,F-P).normalize(),a)o[4].setComponents(m,v,S,A).normalize(),o[5].setComponents(d-m,x-v,M-S,F-A).normalize();else if(o[4].setComponents(d-m,x-v,M-S,F-A).normalize(),n===fa)o[5].setComponents(d+m,x+v,M+S,F+A).normalize();else if(n===Cl)o[5].setComponents(m,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(t){$s.center.set(0,0,0);const n=g2.distanceTo(t.center);return $s.radius=.7071067811865476+n,$s.applyMatrix4(t.matrixWorld),this.intersectsSphere($s)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(fu.x=o.normal.x>0?t.max.x:t.min.x,fu.y=o.normal.y>0?t.max.y:t.min.y,fu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(fu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tx extends Qn{constructor(t=[],n=ir,a,o,c,u,h,m,d,g){super(t,n,a,o,c,u,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ul extends Qn{constructor(t,n,a,o,c,u,h,m,d){super(t,n,a,o,c,u,h,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fo extends Qn{constructor(t,n,a=da,o,c,u,h=Dn,m=Dn,d,g=ka,_=1){if(g!==ka&&g!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,u,h,m,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class v2 extends fo{constructor(t,n=da,a=ir,o,c,u=Dn,h=Dn,m,d=ka){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,o,c,u,h,m,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ex extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vo extends pa{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],d=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,a,n,t,u,c,0),b("z","y","x",1,-1,a,n,-t,u,c,1),b("x","z","y",1,1,t,a,n,o,u,2),b("x","z","y",1,-1,t,a,-n,o,u,3),b("x","y","z",1,-1,t,n,a,o,c,4),b("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new ta(d,3)),this.setAttribute("normal",new ta(g,3)),this.setAttribute("uv",new ta(_,2));function b(w,S,M,L,P,A,F,N,O,T,U){const W=A/O,V=F/T,Y=A/2,ut=F/2,ft=N/2,Q=O+1,B=T+1;let H=0,z=0;const et=new $;for(let mt=0;mt<B;mt++){const D=mt*V-ut;for(let X=0;X<Q;X++){const _t=X*W-Y;et[w]=_t*L,et[S]=D*P,et[M]=ft,d.push(et.x,et.y,et.z),et[w]=0,et[S]=0,et[M]=N>0?1:-1,g.push(et.x,et.y,et.z),_.push(X/O),_.push(1-mt/T),H+=1}}for(let mt=0;mt<T;mt++)for(let D=0;D<O;D++){const X=v+D+Q*mt,_t=v+D+Q*(mt+1),Et=v+(D+1)+Q*(mt+1),Tt=v+(D+1)+Q*mt;m.push(X,_t,Tt),m.push(_t,Et,Tt),z+=6}h.addGroup(x,z,U),x+=z,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Pl extends pa{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),m=Math.floor(o),d=h+1,g=m+1,_=t/h,v=n/m,x=[],b=[],w=[],S=[];for(let M=0;M<g;M++){const L=M*v-u;for(let P=0;P<d;P++){const A=P*_-c;b.push(A,-L,0),w.push(0,0,1),S.push(P/h),S.push(1-M/m)}}for(let M=0;M<m;M++)for(let L=0;L<h;L++){const P=L+d*M,A=L+d*(M+1),F=L+1+d*(M+1),N=L+1+d*M;x.push(P,A,N),x.push(A,F,N)}this.setIndex(x),this.setAttribute("position",new ta(b,3)),this.setAttribute("normal",new ta(w,3)),this.setAttribute("uv",new ta(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.width,t.height,t.widthSegments,t.heightSegments)}}function ho(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];if(I_(o))o.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone();else if(Array.isArray(o))if(I_(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();t[n][a]=c}else t[n][a]=o.slice();else t[n][a]=o}}return t}function ti(s){const t={};for(let n=0;n<s.length;n++){const a=ho(s[n]);for(const o in a)t[o]=a[o]}return t}function I_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function _2(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function nx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const Nl={clone:ho,merge:ti};var x2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x2,this.fragmentShader=y2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ho(t.uniforms),this.uniformsGroups=_2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const a in t.uniforms){const o=t.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new ie().setHex(o.value);break;case"v2":this.uniforms[a].value=new Kt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new $().fromArray(o.value);break;case"v4":this.uniforms[a].value=new ln().fromArray(o.value);break;case"m3":this.uniforms[a].value=new ce().fromArray(o.value);break;case"m4":this.uniforms[a].value=new je().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ix extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class U0 extends go{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class M2 extends U0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class S2 extends go{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wa,this.combine=W0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ax extends go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class b2 extends go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sx extends Xn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Cd=new je,F_=new $,B_=new $;class rx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cp,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;F_.setFromMatrixPosition(t.matrixWorld),n.position.copy(F_),B_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(B_),n.updateMatrixWorld(),Cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Cl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Cd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hu=new $,du=new ws,oa=new $;class ox extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=fa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(hu,du,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,du,oa.set(1,1,1)).invert()}updateWorldMatrix(t,n,a=!1){super.updateWorldMatrix(t,n,a),this.matrixWorld.decompose(hu,du,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,du,oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bs=new $,z_=new Kt,H_=new Kt;class Ai extends ox{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Dl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bs.x,bs.y).multiplyScalar(-t/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(bs.x,bs.y).multiplyScalar(-t/bs.z)}getViewSize(t,n){return this.getViewBounds(t,z_,H_),n.subVectors(H_,z_)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(bl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/d,o*=u.width/m,a*=u.height/d}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class E2 extends rx{constructor(){super(new Ai(90,1,.5,500)),this.isPointLightShadow=!0}}class T2 extends sx{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new E2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Vu extends ox{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class A2 extends rx{constructor(){super(new Vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dd extends sx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new A2}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const $r=-90,Jr=1;class w2 extends Xn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ai($r,Jr,t,n);o.layers=this.layers,this.add(o);const c=new Ai($r,Jr,t,n);c.layers=this.layers,this.add(c);const u=new Ai($r,Jr,t,n);u.layers=this.layers,this.add(u);const h=new Ai($r,Jr,t,n);h.layers=this.layers,this.add(h);const m=new Ai($r,Jr,t,n);m.layers=this.layers,this.add(m);const d=new Ai($r,Jr,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const d of n)this.remove(d);if(t===fa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Cl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(a,3,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(a,4,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=w,t.setRenderTarget(a,5,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(_,v,x),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class R2 extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class C2{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=D2.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function D2(){this._document.hidden===!1&&this.reset()}const up="\\[\\]\\.:\\/",U2=new RegExp("["+up+"]","g"),fp="[^"+up+"]",N2="[^"+up.replace("\\.","")+"]",L2=/((?:WC+[\/:])*)/.source.replace("WC",fp),P2=/(WCOD+)?/.source.replace("WCOD",N2),O2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fp),I2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fp),F2=new RegExp("^"+L2+P2+O2+I2+"$"),B2=["material","materials","bones","map"];class z2{constructor(t,n,a){const o=a||Ie.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,o)}getValue(t,n){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(t,n)}setValue(t,n){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=t.length;n!==a;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=t.length;n!==a;++n)t[n].unbind()}}class Ie{constructor(t,n,a){this.path=n,this.parsedPath=a||Ie.parseTrackName(n),this.node=Ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,a){return t&&t.isAnimationObjectGroup?new Ie.Composite(t,n,a):new Ie(t,n,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(U2,"")}static parseTrackName(t){const n=F2.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);B2.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const a=t.skeleton.getBoneByName(n);if(a!==void 0)return a}if(t.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const m=a(h.children);if(m)return m}return null},o=a(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)t[n++]=a[o]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,a=n.objectName,o=n.propertyName;let c=n.propertyIndex;if(t||(t=Ie.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){se("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let d=n.objectIndex;switch(a){case"materials":if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[a]===void 0){ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(d!==void 0){if(t[d]===void 0){ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}const u=t[o];if(u===void 0){const d=n.nodeName;ue("PropertyBinding: Trying to update property for track: "+d+"."+o+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let m=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[c]!==void 0&&(c=t.morphTargetDictionary[c])}m=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(m=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(m=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[m],this.setValue=this.SetterByBindingTypeAndVersioning[m][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ie.Composite=z2;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const G_=new je;class H2{constructor(t,n,a=0,o=1/0){this.ray=new op(t,n),this.near=a,this.far=o,this.camera=null,this.layers=new rp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ue("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return G_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(G_),this}intersectObject(t,n=!0,a=[]){return N0(t,this,a,n),a.sort(V_),a}intersectObjects(t,n=!0,a=[]){for(let o=0,c=t.length;o<c;o++)N0(t[o],this,a,n);return a.sort(V_),a}}function V_(s,t){return s.distance-t.distance}function N0(s,t,n,a){let o=!0;if(s.layers.test(t.layers)&&s.raycast(t,n)===!1&&(o=!1),o===!0&&a===!0){const c=s.children;for(let u=0,h=c.length;u<h;u++)N0(c[u],t,n,!0)}}class G2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,se("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class k_{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(ve(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yp=class yp{constructor(t,n,a,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,o){const c=this.elements;return c[0]=t,c[2]=n,c[1]=a,c[3]=o,this}};yp.prototype.isMatrix2=!0;let W_=yp;class V2 extends Rs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function X_(s,t,n,a){const o=k2(a);switch(n){case W1:return s*t;case $0:return s*t/o.components*o.byteLength;case J0:return s*t/o.components*o.byteLength;case ar:return s*t*2/o.components*o.byteLength;case tp:return s*t*2/o.components*o.byteLength;case X1:return s*t*3/o.components*o.byteLength;case $i:return s*t*4/o.components*o.byteLength;case ep:return s*t*4/o.components*o.byteLength;case bu:case Eu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tu:case Au:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case n0:case a0:return Math.max(s,16)*Math.max(t,8)/4;case e0:case i0:return Math.max(s,8)*Math.max(t,8)/2;case s0:case r0:case l0:case c0:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case o0:case Du:case u0:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case f0:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case h0:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case d0:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case p0:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case m0:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case g0:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case v0:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case _0:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case x0:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case y0:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case M0:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case S0:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case b0:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case E0:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case T0:case A0:case w0:return Math.ceil(s/4)*Math.ceil(t/4)*16;case R0:case C0:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Uu:case D0:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function k2(s){switch(s){case wi:case H1:return{byteLength:1,components:1};case wl:case G1:case ni:return{byteLength:2,components:1};case Q0:case j0:return{byteLength:2,components:4};case da:case K0:case ji:return{byteLength:4,components:1};case V1:case k1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:k0}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=k0);function lx(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function W2(s){const t=new WeakMap;function n(h,m){const d=h.array,g=h.usage,_=d.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,d,g),h.onUploadCallback();let x;if(d instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=s.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=s.SHORT;else if(d instanceof Uint32Array)x=s.UNSIGNED_INT;else if(d instanceof Int32Array)x=s.INT;else if(d instanceof Int8Array)x=s.BYTE;else if(d instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,d){const g=m.array,_=m.updateRanges;if(s.bindBuffer(d,h),_.length===0)s.bufferSubData(d,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],w=_[x];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const w=_[x];s.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,m),d.version=h.version}}return{get:o,remove:c,update:u}}var X2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q2=`#ifdef USE_ALPHAHASH
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
#endif`,Y2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j2=`#ifdef USE_AOMAP
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
#endif`,$2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J2=`#ifdef USE_BATCHING
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
#endif`,tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ab=`#ifdef USE_IRIDESCENCE
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
#endif`,sb=`#ifdef USE_BUMPMAP
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pb=`#define PI 3.141592653589793
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
} // validated`,mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gb=`vec3 transformedNormal = objectNormal;
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
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nb=`#ifdef USE_GRADIENTMAP
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
}`,Lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ib=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
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
#endif`,kb=`uniform sampler2D dfgLUT;
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
}`,Wb=`
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e3=`#if defined( USE_POINTS_UV )
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
#endif`,n3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o3=`#ifdef USE_MORPHTARGETS
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
#endif`,l3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,p3=`#ifdef USE_NORMALMAP
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
#endif`,m3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D3=`float getShadowMask() {
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
}`,U3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N3=`#ifdef USE_SKINNING
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
#endif`,L3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P3=`#ifdef USE_SKINNING
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
#endif`,O3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z3=`#ifdef USE_TRANSMISSION
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
#endif`,H3=`#ifdef USE_TRANSMISSION
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
#endif`,G3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q3=`uniform sampler2D t2D;
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
}`,Y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j3=`#include <common>
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
}`,$3=`#if DEPTH_PACKING == 3200
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
}`,J3=`#define DISTANCE
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
}`,tE=`#define DISTANCE
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
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`uniform float scale;
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
}`,aE=`uniform vec3 diffuse;
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
}`,sE=`#include <common>
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
}`,rE=`uniform vec3 diffuse;
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
}`,oE=`#define LAMBERT
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
}`,lE=`#define LAMBERT
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
}`,cE=`#define MATCAP
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
}`,uE=`#define MATCAP
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
}`,fE=`#define NORMAL
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
}`,hE=`#define NORMAL
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
}`,dE=`#define PHONG
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
}`,pE=`#define PHONG
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
}`,mE=`#define STANDARD
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
}`,gE=`#define STANDARD
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
}`,vE=`#define TOON
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
}`,_E=`#define TOON
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
}`,xE=`uniform float size;
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
}`,yE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,SE=`uniform vec3 color;
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
}`,bE=`uniform float rotation;
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
}`,EE=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:X2,alphahash_pars_fragment:q2,alphamap_fragment:Y2,alphamap_pars_fragment:Z2,alphatest_fragment:K2,alphatest_pars_fragment:Q2,aomap_fragment:j2,aomap_pars_fragment:$2,batching_pars_vertex:J2,batching_vertex:tb,begin_vertex:eb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:ab,bumpmap_pars_fragment:sb,clipping_planes_fragment:rb,clipping_planes_pars_fragment:ob,clipping_planes_pars_vertex:lb,clipping_planes_vertex:cb,color_fragment:ub,color_pars_fragment:fb,color_pars_vertex:hb,color_vertex:db,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:gb,displacementmap_pars_vertex:vb,displacementmap_vertex:_b,emissivemap_fragment:xb,emissivemap_pars_fragment:yb,colorspace_fragment:Mb,colorspace_pars_fragment:Sb,envmap_fragment:bb,envmap_common_pars_fragment:Eb,envmap_pars_fragment:Tb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:Fb,envmap_vertex:wb,fog_vertex:Rb,fog_pars_vertex:Cb,fog_fragment:Db,fog_pars_fragment:Ub,gradientmap_pars_fragment:Nb,lightmap_pars_fragment:Lb,lights_lambert_fragment:Pb,lights_lambert_pars_fragment:Ob,lights_pars_begin:Ib,lights_toon_fragment:Bb,lights_toon_pars_fragment:zb,lights_phong_fragment:Hb,lights_phong_pars_fragment:Gb,lights_physical_fragment:Vb,lights_physical_pars_fragment:kb,lights_fragment_begin:Wb,lights_fragment_maps:Xb,lights_fragment_end:qb,lightprobes_pars_fragment:Yb,logdepthbuf_fragment:Zb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Qb,logdepthbuf_vertex:jb,map_fragment:$b,map_pars_fragment:Jb,map_particle_fragment:t3,map_particle_pars_fragment:e3,metalnessmap_fragment:n3,metalnessmap_pars_fragment:i3,morphinstance_vertex:a3,morphcolor_vertex:s3,morphnormal_vertex:r3,morphtarget_pars_vertex:o3,morphtarget_vertex:l3,normal_fragment_begin:c3,normal_fragment_maps:u3,normal_pars_fragment:f3,normal_pars_vertex:h3,normal_vertex:d3,normalmap_pars_fragment:p3,clearcoat_normal_fragment_begin:m3,clearcoat_normal_fragment_maps:g3,clearcoat_pars_fragment:v3,iridescence_pars_fragment:_3,opaque_fragment:x3,packing:y3,premultiplied_alpha_fragment:M3,project_vertex:S3,dithering_fragment:b3,dithering_pars_fragment:E3,roughnessmap_fragment:T3,roughnessmap_pars_fragment:A3,shadowmap_pars_fragment:w3,shadowmap_pars_vertex:R3,shadowmap_vertex:C3,shadowmask_pars_fragment:D3,skinbase_vertex:U3,skinning_pars_vertex:N3,skinning_vertex:L3,skinnormal_vertex:P3,specularmap_fragment:O3,specularmap_pars_fragment:I3,tonemapping_fragment:F3,tonemapping_pars_fragment:B3,transmission_fragment:z3,transmission_pars_fragment:H3,uv_pars_fragment:G3,uv_pars_vertex:V3,uv_vertex:k3,worldpos_vertex:W3,background_vert:X3,background_frag:q3,backgroundCube_vert:Y3,backgroundCube_frag:Z3,cube_vert:K3,cube_frag:Q3,depth_vert:j3,depth_frag:$3,distance_vert:J3,distance_frag:tE,equirect_vert:eE,equirect_frag:nE,linedashed_vert:iE,linedashed_frag:aE,meshbasic_vert:sE,meshbasic_frag:rE,meshlambert_vert:oE,meshlambert_frag:lE,meshmatcap_vert:cE,meshmatcap_frag:uE,meshnormal_vert:fE,meshnormal_frag:hE,meshphong_vert:dE,meshphong_frag:pE,meshphysical_vert:mE,meshphysical_frag:gE,meshtoon_vert:vE,meshtoon_frag:_E,points_vert:xE,points_frag:yE,shadow_vert:ME,shadow_frag:SE,sprite_vert:bE,sprite_frag:EE},Ot={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},ca={basic:{uniforms:ti([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:ti([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:ti([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:ti([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:ti([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ie(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:ti([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:ti([Ot.points,Ot.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:ti([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:ti([Ot.common,Ot.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:ti([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:ti([Ot.sprite,Ot.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:ti([Ot.common,Ot.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:ti([Ot.lights,Ot.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ca.physical={uniforms:ti([ca.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const pu={r:0,b:0,g:0},TE=new je,cx=new ce;cx.set(-1,0,0,0,1,0,0,0,1);function AE(s,t,n,a,o,c){const u=new ie(0);let h=o===!0?0:1,m,d,g=null,_=0,v=null;function x(L){let P=L.isScene===!0?L.background:null;if(P&&P.isTexture){const A=L.backgroundBlurriness>0;P=t.get(P,A)}return P}function b(L){let P=!1;const A=x(L);A===null?S(u,h):A&&A.isColor&&(S(A,1),P=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(L,P){const A=x(P);A&&(A.isCubeTexture||A.mapping===Gu)?(d===void 0&&(d=new Tn(new vo(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:ho(ca.backgroundCube.uniforms),vertexShader:ca.backgroundCube.vertexShader,fragmentShader:ca.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=A,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(TE.makeRotationFromEuler(P.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(cx),d.material.toneMapped=Te.getTransfer(A.colorSpace)!==Oe,(g!==A||_!==A.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,g=A,_=A.version,v=s.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new Tn(new Pl(2,2),new In({name:"BackgroundMaterial",uniforms:ho(ca.background.uniforms),vertexShader:ca.background.vertexShader,fragmentShader:ca.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Te.getTransfer(A.colorSpace)!==Oe,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||_!==A.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,g=A,_=A.version,v=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function S(L,P){L.getRGB(pu,nx(s)),n.buffers.color.setClear(pu.r,pu.g,pu.b,P,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,P=1){u.set(L),h=P,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,S(u,h)},render:b,addToRenderList:w,dispose:M}}function wE(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(V,Y,ut,ft,Q){let B=!1;const H=_(V,ft,ut,Y);c!==H&&(c=H,d(c.object)),B=x(V,ft,ut,Q),B&&b(V,ft,ut,Q),Q!==null&&t.update(Q,s.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,A(V,Y,ut,ft),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return s.createVertexArray()}function d(V){return s.bindVertexArray(V)}function g(V){return s.deleteVertexArray(V)}function _(V,Y,ut,ft){const Q=ft.wireframe===!0;let B=a[Y.id];B===void 0&&(B={},a[Y.id]=B);const H=V.isInstancedMesh===!0?V.id:0;let z=B[H];z===void 0&&(z={},B[H]=z);let et=z[ut.id];et===void 0&&(et={},z[ut.id]=et);let mt=et[Q];return mt===void 0&&(mt=v(m()),et[Q]=mt),mt}function v(V){const Y=[],ut=[],ft=[];for(let Q=0;Q<n;Q++)Y[Q]=0,ut[Q]=0,ft[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ut,attributeDivisors:ft,object:V,attributes:{},index:null}}function x(V,Y,ut,ft){const Q=c.attributes,B=Y.attributes;let H=0;const z=ut.getAttributes();for(const et in z)if(z[et].location>=0){const D=Q[et];let X=B[et];if(X===void 0&&(et==="instanceMatrix"&&V.instanceMatrix&&(X=V.instanceMatrix),et==="instanceColor"&&V.instanceColor&&(X=V.instanceColor)),D===void 0||D.attribute!==X||X&&D.data!==X.data)return!0;H++}return c.attributesNum!==H||c.index!==ft}function b(V,Y,ut,ft){const Q={},B=Y.attributes;let H=0;const z=ut.getAttributes();for(const et in z)if(z[et].location>=0){let D=B[et];D===void 0&&(et==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),et==="instanceColor"&&V.instanceColor&&(D=V.instanceColor));const X={};X.attribute=D,D&&D.data&&(X.data=D.data),Q[et]=X,H++}c.attributes=Q,c.attributesNum=H,c.index=ft}function w(){const V=c.newAttributes;for(let Y=0,ut=V.length;Y<ut;Y++)V[Y]=0}function S(V){M(V,0)}function M(V,Y){const ut=c.newAttributes,ft=c.enabledAttributes,Q=c.attributeDivisors;ut[V]=1,ft[V]===0&&(s.enableVertexAttribArray(V),ft[V]=1),Q[V]!==Y&&(s.vertexAttribDivisor(V,Y),Q[V]=Y)}function L(){const V=c.newAttributes,Y=c.enabledAttributes;for(let ut=0,ft=Y.length;ut<ft;ut++)Y[ut]!==V[ut]&&(s.disableVertexAttribArray(ut),Y[ut]=0)}function P(V,Y,ut,ft,Q,B,H){H===!0?s.vertexAttribIPointer(V,Y,ut,Q,B):s.vertexAttribPointer(V,Y,ut,ft,Q,B)}function A(V,Y,ut,ft){w();const Q=ft.attributes,B=ut.getAttributes(),H=Y.defaultAttributeValues;for(const z in B){const et=B[z];if(et.location>=0){let mt=Q[z];if(mt===void 0&&(z==="instanceMatrix"&&V.instanceMatrix&&(mt=V.instanceMatrix),z==="instanceColor"&&V.instanceColor&&(mt=V.instanceColor)),mt!==void 0){const D=mt.normalized,X=mt.itemSize,_t=t.get(mt);if(_t===void 0)continue;const Et=_t.buffer,Tt=_t.type,tt=_t.bytesPerElement,Mt=Tt===s.INT||Tt===s.UNSIGNED_INT||mt.gpuType===K0;if(mt.isInterleavedBufferAttribute){const St=mt.data,It=St.stride,ne=mt.offset;if(St.isInstancedInterleavedBuffer){for(let Qt=0;Qt<et.locationSize;Qt++)M(et.location+Qt,St.meshPerAttribute);V.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Qt=0;Qt<et.locationSize;Qt++)S(et.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let Qt=0;Qt<et.locationSize;Qt++)P(et.location+Qt,X/et.locationSize,Tt,D,It*tt,(ne+X/et.locationSize*Qt)*tt,Mt)}else{if(mt.isInstancedBufferAttribute){for(let St=0;St<et.locationSize;St++)M(et.location+St,mt.meshPerAttribute);V.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let St=0;St<et.locationSize;St++)S(et.location+St);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let St=0;St<et.locationSize;St++)P(et.location+St,X/et.locationSize,Tt,D,X*tt,X/et.locationSize*St*tt,Mt)}}else if(H!==void 0){const D=H[z];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(et.location,D);break;case 3:s.vertexAttrib3fv(et.location,D);break;case 4:s.vertexAttrib4fv(et.location,D);break;default:s.vertexAttrib1fv(et.location,D)}}}}L()}function F(){U();for(const V in a){const Y=a[V];for(const ut in Y){const ft=Y[ut];for(const Q in ft){const B=ft[Q];for(const H in B)g(B[H].object),delete B[H];delete ft[Q]}}delete a[V]}}function N(V){if(a[V.id]===void 0)return;const Y=a[V.id];for(const ut in Y){const ft=Y[ut];for(const Q in ft){const B=ft[Q];for(const H in B)g(B[H].object),delete B[H];delete ft[Q]}}delete a[V.id]}function O(V){for(const Y in a){const ut=a[Y];for(const ft in ut){const Q=ut[ft];if(Q[V.id]===void 0)continue;const B=Q[V.id];for(const H in B)g(B[H].object),delete B[H];delete Q[V.id]}}}function T(V){for(const Y in a){const ut=a[Y],ft=V.isInstancedMesh===!0?V.id:0,Q=ut[ft];if(Q!==void 0){for(const B in Q){const H=Q[B];for(const z in H)g(H[z].object),delete H[z];delete Q[B]}delete ut[ft],Object.keys(ut).length===0&&delete a[Y]}}}function U(){W(),u=!0,c!==o&&(c=o,d(c.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:U,resetDefaultState:W,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:S,disableUnusedAttributes:L}}function RE(s,t,n){let a;function o(m){a=m}function c(m,d){s.drawArrays(a,m,d),n.update(d,a,1)}function u(m,d,g){g!==0&&(s.drawArraysInstanced(a,m,d,g),n.update(d,a,g))}function h(m,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,d,0,g);let v=0;for(let x=0;x<g;x++)v+=d[x];n.update(v,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function CE(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==$i&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const T=O===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==wi&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ji&&!T)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(se("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:A,maxSamples:F,samples:N}}function DE(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Ha,h=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,w=_.clipIntersection,S=_.clipShadows,M=s.get(_);if(!o||b===null||b.length===0||c&&!S)c?g(null):d();else{const L=c?0:a,P=L*4;let A=M.clippingState||null;m.value=A,A=g(b,v,P,x);for(let F=0;F!==P;++F)A[F]=n[F];M.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,x,b){const w=_!==null?_.length:0;let S=null;if(w!==0){if(S=m.value,b!==!0||S===null){const M=x+w*4,L=v.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<M)&&(S=new Float32Array(M));for(let P=0,A=x;P!==w;++P,A+=4)u.copy(_[P]).applyMatrix4(L,h),u.normal.toArray(S,A),S[A+3]=u.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,S}}const Ts=4,q_=[.125,.215,.35,.446,.526,.582],tr=20,UE=256,vl=new Vu,Y_=new ie;let Ud=null,Nd=0,Ld=0,Pd=!1;const NE=new $;class L0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=NE}=c;Ud=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ud,Nd,Ld),this._renderer.xr.enabled=Pd,t.scissorTest=!1,to(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ir||t.mapping===uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ud=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:On,minFilter:On,generateMipmaps:!1,type:ni,format:$i,colorSpace:Lu,depthBuffer:!1},o=Z_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LE(c)),this._blurMaterial=OE(c,t,n),this._ggxMaterial=PE(c,t,n)}return o}_compileMaterial(t){const n=new Tn(new pa,t);this._renderer.compile(n,vl)}_sceneToCubeUV(t,n,a,o,c){const m=new Ai(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Y_),_.toneMapping=ha,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new vo,new lp({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let M=!1;const L=t.background;L?L.isColor&&(S.color.copy(L),t.background=null,M=!0):(S.color.copy(Y_),M=!0);for(let P=0;P<6;P++){const A=P%3;A===0?(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):A===1?(m.up.set(0,0,d[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,d[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const F=this._cubeSize;to(o,A*F,P>2?F:0,F,F),_.setRenderTarget(o),M&&_.render(w,m),_.render(t,m)}_.toneMapping=x,_.autoClear=v,t.background=L}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===ir||t.mapping===uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;to(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,vl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const m=u.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,x=_*v,{_lodMax:b}=this,w=this._sizeLods[a],S=3*w*(a>b-Ts?a-b+Ts:0),M=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=b-n,to(c,S,M,3*w,2*w),o.setRenderTarget(c),o.render(h,vl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-a,to(t,S,M,3*w,2*w),o.setRenderTarget(t),o.render(h,vl)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const m=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&ue("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,x=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*tr-1),w=c/b,S=isFinite(c)?1+Math.floor(g*w):tr;S>tr&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${tr}`);const M=[];let L=0;for(let O=0;O<tr;++O){const T=O/w,U=Math.exp(-T*T/2);M.push(U),O===0?L+=U:O<S&&(L+=2*U)}for(let O=0;O<M.length;O++)M[O]=M[O]/L;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:P}=this;v.dTheta.value=b,v.mipInt.value=P-a;const A=this._sizeLods[o],F=3*A*(o>P-Ts?o-P+Ts:0),N=4*(this._cubeSize-A);to(n,F,N,3*A,2*A),m.setRenderTarget(n),m.render(_,vl)}}function LE(s){const t=[],n=[],a=[];let o=s;const c=s-Ts+1+q_.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let m=1/h;u>s-Ts?m=q_[u-s+Ts-1]:u===0&&(m=0),n.push(m);const d=1/(h-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,w=3,S=2,M=1,L=new Float32Array(w*b*x),P=new Float32Array(S*b*x),A=new Float32Array(M*b*x);for(let N=0;N<x;N++){const O=N%3*2/3-1,T=N>2?0:-1,U=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];L.set(U,w*b*N),P.set(v,S*b*N);const W=[N,N,N,N,N,N];A.set(W,M*b*N)}const F=new pa;F.setAttribute("position",new Di(L,w)),F.setAttribute("uv",new Di(P,S)),F.setAttribute("faceIndex",new Di(A,M)),a.push(new Tn(F,null)),o>Ts&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function Z_(s,t,n){const a=new Wn(s,t,n);return a.texture.mapping=Gu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function to(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function PE(s,t,n){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function OE(s,t,n){const a=new Float32Array(tr),o=new $(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function K_(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Q_(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function ku(){return`

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
	`}class ux extends Wn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new tx(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vo(5,5,5),c=new In({name:"CubemapFromEquirect",uniforms:ho(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ei,blending:Ji});c.uniforms.tEquirect.value=n;const u=new Tn(o,c),h=n.minFilter;return n.minFilter===er&&(n.minFilter=On),new w2(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}function IE(s){let t=new WeakMap,n=new WeakMap,a=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===ad||x===sd)if(t.has(v)){const b=t.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const w=new ux(b.height);return w.fromEquirectangularTexture(s,v),t.set(v,w),v.addEventListener("dispose",d),h(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===ad||x===sd,w=x===ir||x===uo;if(b||w){let S=n.get(v);const M=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return a===null&&(a=new L0(s)),S=b?a.fromEquirectangular(v,S):a.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const L=v.image;return b&&L&&L.height>0||w&&L&&m(L)?(a===null&&(a=new L0(s)),S=b?a.fromEquirectangular(v):a.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function h(v,x){return x===ad?v.mapping=ir:x===sd&&(v.mapping=uo),v}function m(v){let x=0;const b=6;for(let w=0;w<b;w++)v[w]!==void 0&&x++;return x===b}function d(v){const x=v.target;x.removeEventListener("dispose",d);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function _(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function FE(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&ro("WebGLRenderer: "+a+" extension not supported."),o}}}function BE(s,t,n,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(t.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)t.update(v[x],s.ARRAY_BUFFER)}function d(_){const v=[],x=_.index,b=_.attributes.position;let w=0;if(b===void 0)return;if(x!==null){const L=x.array;w=x.version;for(let P=0,A=L.length;P<A;P+=3){const F=L[P+0],N=L[P+1],O=L[P+2];v.push(F,N,N,O,O,F)}}else{const L=b.array;w=b.version;for(let P=0,A=L.length/3-1;P<A;P+=3){const F=P+0,N=P+1,O=P+2;v.push(F,N,N,O,O,F)}}const S=new(b.count>=65535?$1:j1)(v,1);S.version=w;const M=c.get(_);M&&t.remove(M),c.set(_,S)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&d(_)}else d(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function zE(s,t,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){s.drawElements(a,v,c,_*u),n.update(v,a,1)}function d(_,v,x){x!==0&&(s.drawElementsInstanced(a,v,c,_*u,x),n.update(v,a,x))}function g(_,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,_,0,x);let w=0;for(let S=0;S<x;S++)w+=v[S];n.update(w,a,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g}function HE(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:ue("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function GE(s,t,n){const a=new WeakMap,o=new ln;function c(u,h,m){const d=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let W=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",W)};var x=W;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let A=0;b===!0&&(A=1),w===!0&&(A=2),S===!0&&(A=3);let F=h.attributes.position.count*A,N=1;F>t.maxTextureSize&&(N=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const O=new Float32Array(F*N*4*_),T=new Z1(O,F,N,_);T.type=ji,T.needsUpdate=!0;const U=A*4;for(let V=0;V<_;V++){const Y=M[V],ut=L[V],ft=P[V],Q=F*N*4*V;for(let B=0;B<Y.count;B++){const H=B*U;b===!0&&(o.fromBufferAttribute(Y,B),O[Q+H+0]=o.x,O[Q+H+1]=o.y,O[Q+H+2]=o.z,O[Q+H+3]=0),w===!0&&(o.fromBufferAttribute(ut,B),O[Q+H+4]=o.x,O[Q+H+5]=o.y,O[Q+H+6]=o.z,O[Q+H+7]=0),S===!0&&(o.fromBufferAttribute(ft,B),O[Q+H+8]=o.x,O[Q+H+9]=o.y,O[Q+H+10]=o.z,O[Q+H+11]=ft.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Kt(F,N)},a.set(h,v),h.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let b=0;for(let S=0;S<d.length;S++)b+=d[S];const w=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",d)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function VE(s,t,n,a,o){let c=new WeakMap;function u(d){const g=o.render.frame,_=d.geometry,v=t.get(d,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==g&&(n.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,s.ARRAY_BUFFER),c.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(d){const g=d.target;g.removeEventListener("dispose",m),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const kE={[X0]:"LINEAR_TONE_MAPPING",[q0]:"REINHARD_TONE_MAPPING",[Y0]:"CINEON_TONE_MAPPING",[zu]:"ACES_FILMIC_TONE_MAPPING",[co]:"AGX_TONE_MAPPING",[Hu]:"NEUTRAL_TONE_MAPPING",[Z0]:"CUSTOM_TONE_MAPPING"};function WE(s,t,n,a,o,c){const u=new Wn(t,n,{type:s,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new fo(t,n):void 0}),h=new Wn(t,n,{type:ni,depthBuffer:!1,stencilBuffer:!1}),m=new pa;m.setAttribute("position",new ta([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ta([0,2,0,0,2,0],2));const d=new ix({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Tn(m,d),_=new Vu(-1,1,1,-1,0,1);let v=null,x=null,b=!1,w,S=null,M=[],L=!1;this.setSize=function(P,A){u.setSize(P,A),h.setSize(P,A);for(let F=0;F<M.length;F++){const N=M[F];N.setSize&&N.setSize(P,A)}},this.setEffects=function(P){M=P,L=M.length>0&&M[0].isRenderPass===!0;const A=u.width,F=u.height;for(let N=0;N<M.length;N++){const O=M[N];O.setSize&&O.setSize(A,F)}},this.begin=function(P,A){if(b||P.toneMapping===ha&&M.length===0)return!1;if(S=A,A!==null){const F=A.width,N=A.height;(u.width!==F||u.height!==N)&&this.setSize(F,N)}return L===!1&&P.setRenderTarget(u),w=P.toneMapping,P.toneMapping=ha,!0},this.hasRenderPass=function(){return L},this.end=function(P,A){P.toneMapping=w,b=!0;let F=u,N=h;for(let O=0;O<M.length;O++){const T=M[O];if(T.enabled!==!1&&(T.render(P,N,F,A),T.needsSwap!==!1)){const U=F;F=N,N=U}}if(v!==P.outputColorSpace||x!==P.toneMapping){v=P.outputColorSpace,x=P.toneMapping,d.defines={},Te.getTransfer(v)===Oe&&(d.defines.SRGB_TRANSFER="");const O=kE[x];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=F.texture,P.setRenderTarget(S),P.render(g,_),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),d.dispose()}}const fx=new Qn,P0=new fo(1,1),hx=new Z1,dx=new JS,px=new tx,j_=[],$_=[],J_=new Float32Array(16),t1=new Float32Array(9),e1=new Float32Array(4);function _o(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=j_[o];if(c===void 0&&(c=new Float32Array(o),j_[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,s[u].toArray(c,h)}return c}function Un(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function Nn(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function Wu(s,t){let n=$_[t];n===void 0&&(n=new Int32Array(t),$_[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function XE(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function qE(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Un(n,t))return;s.uniform2fv(this.addr,t),Nn(n,t)}}function YE(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Un(n,t))return;s.uniform3fv(this.addr,t),Nn(n,t)}}function ZE(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Un(n,t))return;s.uniform4fv(this.addr,t),Nn(n,t)}}function KE(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Un(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),Nn(n,t)}else{if(Un(n,a))return;e1.set(a),s.uniformMatrix2fv(this.addr,!1,e1),Nn(n,a)}}function QE(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Un(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),Nn(n,t)}else{if(Un(n,a))return;t1.set(a),s.uniformMatrix3fv(this.addr,!1,t1),Nn(n,a)}}function jE(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Un(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),Nn(n,t)}else{if(Un(n,a))return;J_.set(a),s.uniformMatrix4fv(this.addr,!1,J_),Nn(n,a)}}function $E(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function JE(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Un(n,t))return;s.uniform2iv(this.addr,t),Nn(n,t)}}function tT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Un(n,t))return;s.uniform3iv(this.addr,t),Nn(n,t)}}function eT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Un(n,t))return;s.uniform4iv(this.addr,t),Nn(n,t)}}function nT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function iT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Un(n,t))return;s.uniform2uiv(this.addr,t),Nn(n,t)}}function aT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Un(n,t))return;s.uniform3uiv(this.addr,t),Nn(n,t)}}function sT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Un(n,t))return;s.uniform4uiv(this.addr,t),Nn(n,t)}}function rT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(P0.compareFunction=n.isReversedDepthBuffer()?ip:np,c=P0):c=fx,n.setTexture2D(t||c,o)}function oT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||dx,o)}function lT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||px,o)}function cT(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||hx,o)}function uT(s){switch(s){case 5126:return XE;case 35664:return qE;case 35665:return YE;case 35666:return ZE;case 35674:return KE;case 35675:return QE;case 35676:return jE;case 5124:case 35670:return $E;case 35667:case 35671:return JE;case 35668:case 35672:return tT;case 35669:case 35673:return eT;case 5125:return nT;case 36294:return iT;case 36295:return aT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function fT(s,t){s.uniform1fv(this.addr,t)}function hT(s,t){const n=_o(t,this.size,2);s.uniform2fv(this.addr,n)}function dT(s,t){const n=_o(t,this.size,3);s.uniform3fv(this.addr,n)}function pT(s,t){const n=_o(t,this.size,4);s.uniform4fv(this.addr,n)}function mT(s,t){const n=_o(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function gT(s,t){const n=_o(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function vT(s,t){const n=_o(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function _T(s,t){s.uniform1iv(this.addr,t)}function xT(s,t){s.uniform2iv(this.addr,t)}function yT(s,t){s.uniform3iv(this.addr,t)}function MT(s,t){s.uniform4iv(this.addr,t)}function ST(s,t){s.uniform1uiv(this.addr,t)}function bT(s,t){s.uniform2uiv(this.addr,t)}function ET(s,t){s.uniform3uiv(this.addr,t)}function TT(s,t){s.uniform4uiv(this.addr,t)}function AT(s,t,n){const a=this.cache,o=t.length,c=Wu(n,o);Un(a,c)||(s.uniform1iv(this.addr,c),Nn(a,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=P0:u=fx;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||u,c[h])}function wT(s,t,n){const a=this.cache,o=t.length,c=Wu(n,o);Un(a,c)||(s.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||dx,c[u])}function RT(s,t,n){const a=this.cache,o=t.length,c=Wu(n,o);Un(a,c)||(s.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||px,c[u])}function CT(s,t,n){const a=this.cache,o=t.length,c=Wu(n,o);Un(a,c)||(s.uniform1iv(this.addr,c),Nn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||hx,c[u])}function DT(s){switch(s){case 5126:return fT;case 35664:return hT;case 35665:return dT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return vT;case 5124:case 35670:return _T;case 35667:case 35671:return xT;case 35668:case 35672:return yT;case 35669:case 35673:return MT;case 5125:return ST;case 36294:return bT;case 36295:return ET;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return CT}}class UT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=uT(n.type)}}class NT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DT(n.type)}}class LT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function n1(s,t){s.seq.push(t),s.map[t.id]=t}function PT(s,t,n){const a=s.name,o=a.length;for(Od.lastIndex=0;;){const c=Od.exec(a),u=Od.lastIndex;let h=c[1];const m=c[2]==="]",d=c[3];if(m&&(h=h|0),d===void 0||d==="["&&u+2===o){n1(n,d===void 0?new UT(h,s,t):new NT(h,s,t));break}else{let _=n.map[h];_===void 0&&(_=new LT(h),n1(n,_)),n=_}}}class wu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=t.getActiveUniform(n,u),m=t.getUniformLocation(n,h.name);PT(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function i1(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const OT=37297;let IT=0;function FT(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const a1=new ce;function BT(s){Te._getMatrix(a1,Te.workingColorSpace,s);const t=`mat3( ${a1.elements.map(n=>n.toFixed(4))} )`;switch(Te.getTransfer(s)){case Pu:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function s1(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+FT(s.getShaderSource(t),h)}else return c}function zT(s,t){const n=BT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const HT={[X0]:"Linear",[q0]:"Reinhard",[Y0]:"Cineon",[zu]:"ACESFilmic",[co]:"AgX",[Hu]:"Neutral",[Z0]:"Custom"};function GT(s,t){const n=HT[t];return n===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const mu=new $;function VT(){Te.getLuminanceCoefficients(mu);const s=mu.x.toFixed(4),t=mu.y.toFixed(4),n=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function WT(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function XT(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:h}}return n}function Sl(s){return s!==""}function r1(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function o1(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qT=/^[ \t]*#include +<([\w\d./]+)>/gm;function O0(s){return s.replace(qT,ZT)}const YT=new Map;function ZT(s,t){let n=me[t];if(n===void 0){const a=YT.get(t);if(a!==void 0)n=me[a],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return O0(n)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l1(s){return s.replace(KT,QT)}function QT(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function c1(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const jT={[Su]:"SHADOWMAP_TYPE_PCF",[Ml]:"SHADOWMAP_TYPE_VSM"};function $T(s){return jT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JT={[ir]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[Gu]:"ENVMAP_TYPE_CUBE_UV"};function tA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":JT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const eA={[uo]:"ENVMAP_MODE_REFRACTION"};function nA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":eA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iA={[W0]:"ENVMAP_BLENDING_MULTIPLY",[gS]:"ENVMAP_BLENDING_MIX",[vS]:"ENVMAP_BLENDING_ADD"};function aA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":iA[s.combine]||"ENVMAP_BLENDING_NONE"}function sA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function rA(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=$T(n),d=tA(n),g=nA(n),_=aA(n),v=sA(n),x=kT(n),b=WT(c),w=o.createProgram();let S,M,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Sl).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Sl).join(`
`),M.length>0&&(M+=`
`)):(S=[c1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),M=[c1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ha?"#define TONE_MAPPING":"",n.toneMapping!==ha?me.tonemapping_pars_fragment:"",n.toneMapping!==ha?GT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,zT("linearToOutputTexel",n.outputColorSpace),VT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sl).join(`
`)),u=O0(u),u=r1(u,n),u=o1(u,n),h=O0(h),h=r1(h,n),h=o1(h,n),u=l1(u),h=l1(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",n.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=L+S+u,A=L+M+h,F=i1(o,o.VERTEX_SHADER,P),N=i1(o,o.FRAGMENT_SHADER,A);o.attachShader(w,F),o.attachShader(w,N),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(V){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(w)||"",ut=o.getShaderInfoLog(F)||"",ft=o.getShaderInfoLog(N)||"",Q=Y.trim(),B=ut.trim(),H=ft.trim();let z=!0,et=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,F,N);else{const mt=s1(o,F,"vertex"),D=s1(o,N,"fragment");ue("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+mt+`
`+D)}else Q!==""?se("WebGLProgram: Program Info Log:",Q):(B===""||H==="")&&(et=!1);et&&(V.diagnostics={runnable:z,programLog:Q,vertexShader:{log:B,prefix:S},fragmentShader:{log:H,prefix:M}})}o.deleteShader(F),o.deleteShader(N),T=new wu(o,w),U=XT(o,w)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(w,OT)),W},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=N,this}let oA=0;class lA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,a){const o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new cA(t),n.set(t,a)),a}}class cA{constructor(t){this.id=oA++,this.code=t,this.usedTimes=0}}function uA(s){return s===ar||s===Du||s===Uu}function fA(s,t,n,a,o,c){const u=new rp,h=new lA,m=new Set,d=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,U,W,V,Y,ut){const ft=V.fog,Q=Y.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=t.get(T.envMap||B,H),et=z&&z.mapping===Gu?z.image.height:null,mt=x[T.type];T.precision!==null&&(v=a.getMaxPrecision(T.precision),v!==T.precision&&se("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const D=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,X=D!==void 0?D.length:0;let _t=0;Q.morphAttributes.position!==void 0&&(_t=1),Q.morphAttributes.normal!==void 0&&(_t=2),Q.morphAttributes.color!==void 0&&(_t=3);let Et,Tt,tt,Mt;if(mt){const Vt=ca[mt];Et=Vt.vertexShader,Tt=Vt.fragmentShader}else{Et=T.vertexShader,Tt=T.fragmentShader;const Vt=h.getVertexShaderStage(T),nn=h.getFragmentShaderStage(T);h.update(T,Vt,nn),tt=Vt.id,Mt=nn.id}const St=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),ne=Y.isInstancedMesh===!0,Qt=Y.isBatchedMesh===!0,Ue=!!T.map,oe=!!T.matcap,ge=!!z,Ae=!!T.aoMap,_e=!!T.lightMap,cn=!!T.bumpMap&&T.wireframe===!1,un=!!T.normalMap,fn=!!T.displacementMap,mn=!!T.emissiveMap,Qe=!!T.metalnessMap,hn=!!T.roughnessMap,K=T.anisotropy>0,ke=T.clearcoat>0,Ne=T.dispersion>0,I=T.iridescence>0,E=T.sheen>0,J=T.transmission>0,rt=K&&!!T.anisotropyMap,dt=ke&&!!T.clearcoatMap,At=ke&&!!T.clearcoatNormalMap,Dt=ke&&!!T.clearcoatRoughnessMap,ht=I&&!!T.iridescenceMap,pt=I&&!!T.iridescenceThicknessMap,Rt=E&&!!T.sheenColorMap,Bt=E&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ut=!!T.specularColorMap,$t=!!T.specularIntensityMap,Jt=J&&!!T.transmissionMap,re=J&&!!T.thicknessMap,q=!!T.gradientMap,wt=!!T.alphaMap,vt=T.alphaTest>0,Ct=!!T.alphaHash,Ft=!!T.extensions;let bt=ha;T.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(bt=s.toneMapping);const qt={shaderID:mt,shaderType:T.type,shaderName:T.name,vertexShader:Et,fragmentShader:Tt,defines:T.defines,customVertexShaderID:tt,customFragmentShaderID:Mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Qt,batchingColor:Qt&&Y._colorsTexture!==null,instancing:ne,instancingColor:ne&&Y.instanceColor!==null,instancingMorph:ne&&Y.morphTexture!==null,outputColorSpace:St===null?s.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ue,matcap:oe,envMap:ge,envMapMode:ge&&z.mapping,envMapCubeUVHeight:et,aoMap:Ae,lightMap:_e,bumpMap:cn,normalMap:un,displacementMap:fn,emissiveMap:mn,normalMapObjectSpace:un&&T.normalMapType===MS,normalMapTangentSpace:un&&T.normalMapType===Nu,packedNormalMap:un&&T.normalMapType===Nu&&uA(T.normalMap.format),metalnessMap:Qe,roughnessMap:hn,anisotropy:K,anisotropyMap:rt,clearcoat:ke,clearcoatMap:dt,clearcoatNormalMap:At,clearcoatRoughnessMap:Dt,dispersion:Ne,iridescence:I,iridescenceMap:ht,iridescenceThicknessMap:pt,sheen:E,sheenColorMap:Rt,sheenRoughnessMap:Bt,specularMap:Lt,specularColorMap:Ut,specularIntensityMap:$t,transmission:J,transmissionMap:Jt,thicknessMap:re,gradientMap:q,opaque:T.transparent===!1&&T.blending===so&&T.alphaToCoverage===!1,alphaMap:wt,alphaTest:vt,alphaHash:Ct,combine:T.combine,mapUv:Ue&&b(T.map.channel),aoMapUv:Ae&&b(T.aoMap.channel),lightMapUv:_e&&b(T.lightMap.channel),bumpMapUv:cn&&b(T.bumpMap.channel),normalMapUv:un&&b(T.normalMap.channel),displacementMapUv:fn&&b(T.displacementMap.channel),emissiveMapUv:mn&&b(T.emissiveMap.channel),metalnessMapUv:Qe&&b(T.metalnessMap.channel),roughnessMapUv:hn&&b(T.roughnessMap.channel),anisotropyMapUv:rt&&b(T.anisotropyMap.channel),clearcoatMapUv:dt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:At&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Ut&&b(T.specularColorMap.channel),specularIntensityMapUv:$t&&b(T.specularIntensityMap.channel),transmissionMapUv:Jt&&b(T.transmissionMap.channel),thicknessMapUv:re&&b(T.thicknessMap.channel),alphaMapUv:wt&&b(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(un||K),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!Q.attributes.uv&&(Ue||wt),fog:!!ft,useFog:T.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&un===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:It,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:_t,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ut.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:bt,decodeVideoTexture:Ue&&T.map.isVideoTexture===!0&&Te.getTransfer(T.map.colorSpace)===Oe,decodeVideoTextureEmissive:mn&&T.emissiveMap.isVideoTexture===!0&&Te.getTransfer(T.emissiveMap.colorSpace)===Oe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ki,flipSided:T.side===ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ft&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&T.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function S(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const W in T.defines)U.push(W),U.push(T.defines[W]);return T.isRawShaderMaterial===!1&&(M(U,T),L(U,T),U.push(s.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function M(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function L(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function P(T){const U=x[T.type];let W;if(U){const V=ca[U];W=Nl.clone(V.uniforms)}else W=T.uniforms;return W}function A(T,U){let W=g.get(U);return W!==void 0?++W.usedTimes:(W=new rA(s,U,T,o),d.push(W),g.set(U,W)),W}function F(T){if(--T.usedTimes===0){const U=d.indexOf(T);d[U]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function O(){h.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:P,acquireProgram:A,releaseProgram:F,releaseShaderCache:N,programs:d,dispose:O}}function hA(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,m){s.get(u)[h]=m}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function dA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function u1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function f1(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,w,S,M){let L=s[t];return L===void 0?(L={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:S,group:M},s[t]=L):(L.id=v.id,L.object=v,L.geometry=x,L.material=b,L.materialVariant=u(v),L.groupOrder=w,L.renderOrder=v.renderOrder,L.z=S,L.group=M),t++,L}function m(v,x,b,w,S,M){const L=h(v,x,b,w,S,M);b.transmission>0?a.push(L):b.transparent===!0?o.push(L):n.push(L)}function d(v,x,b,w,S,M){const L=h(v,x,b,w,S,M);b.transmission>0?a.unshift(L):b.transparent===!0?o.unshift(L):n.unshift(L)}function g(v,x,b){n.length>1&&n.sort(v||dA),a.length>1&&a.sort(x||u1),o.length>1&&o.sort(x||u1),b&&(n.reverse(),a.reverse(),o.reverse())}function _(){for(let v=t,x=s.length;v<x;v++){const b=s[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:m,unshift:d,finish:_,sort:g}}function pA(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new f1,s.set(a,[u])):o>=c.length?(u=new f1,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function mA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new $,color:new ie};break;case"SpotLight":n={position:new $,direction:new $,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":n={color:new ie,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=n,n}}}function gA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let vA=0;function _A(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function xA(s){const t=new mA,n=gA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new $);const o=new $,c=new je,u=new je;function h(d){let g=0,_=0,v=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,b=0,w=0,S=0,M=0,L=0,P=0,A=0,F=0,N=0,O=0;d.sort(_A);for(let U=0,W=d.length;U<W;U++){const V=d[U],Y=V.color,ut=V.intensity,ft=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ar?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Y.r*ut,_+=Y.g*ut,v+=Y.b*ut;else if(V.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(V.sh.coefficients[B],ut);O++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,z=n.get(V);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,a.directionalShadow[x]=z,a.directionalShadowMap[x]=Q,a.directionalShadowMatrix[x]=V.shadow.matrix,L++}a.directional[x]=B,x++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(Y).multiplyScalar(ut),B.distance=ft,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,a.spot[w]=B;const H=V.shadow;if(V.map&&(a.spotLightMap[F]=V.map,F++,H.updateMatrices(V),V.castShadow&&N++),a.spotLightMatrix[w]=H.matrix,V.castShadow){const z=n.get(V);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,a.spotShadow[w]=z,a.spotShadowMap[w]=Q,A++}w++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(Y).multiplyScalar(ut),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=B,S++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const H=V.shadow,z=n.get(V);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,a.pointShadow[b]=z,a.pointShadowMap[b]=Q,a.pointShadowMatrix[b]=V.shadow.matrix,P++}a.point[b]=B,b++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(ut),B.groundColor.copy(V.groundColor).multiplyScalar(ut),a.hemi[M]=B,M++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const T=a.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==S||T.hemiLength!==M||T.numDirectionalShadows!==L||T.numPointShadows!==P||T.numSpotShadows!==A||T.numSpotMaps!==F||T.numLightProbes!==O)&&(a.directional.length=x,a.spot.length=w,a.rectArea.length=S,a.point.length=b,a.hemi.length=M,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=A+F-N,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=O,T.directionalLength=x,T.pointLength=b,T.spotLength=w,T.rectAreaLength=S,T.hemiLength=M,T.numDirectionalShadows=L,T.numPointShadows=P,T.numSpotShadows=A,T.numSpotMaps=F,T.numLightProbes=O,a.version=vA++)}function m(d,g){let _=0,v=0,x=0,b=0,w=0;const S=g.matrixWorldInverse;for(let M=0,L=d.length;M<L;M++){const P=d[M];if(P.isDirectionalLight){const A=a.directional[_];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),_++}else if(P.isSpotLight){const A=a.spot[x];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const A=a.rectArea[b];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),u.identity(),c.copy(P.matrixWorld),c.premultiply(S),u.extractRotation(c),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),b++}else if(P.isPointLight){const A=a.point[v];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(S),v++}else if(P.isHemisphereLight){const A=a.hemi[w];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(S),w++}}}return{setup:h,setupView:m,state:a}}function h1(s){const t=new xA(s),n=[],a=[],o=[];function c(v){_.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function h(v){a.push(v)}function m(v){o.push(v)}function d(){t.setup(n)}function g(v){t.setupView(n,v)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:d,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function yA(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new h1(s),t.set(o,[h])):c>=u.length?(h=new h1(s),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const MA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SA=`uniform sampler2D shadow_pass;
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
}`,bA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],EA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],d1=new je,_l=new $,Id=new $;function TA(s,t,n){let a=new cp;const o=new Kt,c=new Kt,u=new ln,h=new ax,m=new b2,d={},g=n.maxTextureSize,_={[As]:ei,[ei]:As,[Ki]:Ki},v=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:MA,fragmentShader:SA}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new pa;b.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Tn(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let M=this.type;this.render=function(N,O,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===jM&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Su);const U=s.getRenderTarget(),W=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(Ji),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ut=M!==this.type;ut&&O.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(Q=>Q.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,Q=N.length;ft<Q;ft++){const B=N[ft],H=B.shadow;if(H===void 0){se("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const z=H.getFrameExtents();o.multiply(z),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/z.x),o.x=c.x*z.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/z.y),o.y=c.y*z.y,H.mapSize.y=c.y));const et=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=et,H.map===null||ut===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ml){if(B.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wn(o.x,o.y,{format:ar,type:ni,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new fo(o.x,o.y,ji),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=ka,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn}else B.isPointLight?(H.map=new ux(o.x),H.map.depthTexture=new v2(o.x,da)):(H.map=new Wn(o.x,o.y),H.map.depthTexture=new fo(o.x,o.y,da)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=ka,this.type===Su?(H.map.depthTexture.compareFunction=et?ip:np,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn);H.camera.updateProjectionMatrix()}const mt=H.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<mt;D++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,D),s.clear();else{D===0&&(s.setRenderTarget(H.map),s.clear());const X=H.getViewport(D);u.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),Y.viewport(u)}if(B.isPointLight){const X=H.camera,_t=H.matrix,Et=B.distance||X.far;Et!==X.far&&(X.far=Et,X.updateProjectionMatrix()),_l.setFromMatrixPosition(B.matrixWorld),X.position.copy(_l),Id.copy(X.position),Id.add(bA[D]),X.up.copy(EA[D]),X.lookAt(Id),X.updateMatrixWorld(),_t.makeTranslation(-_l.x,-_l.y,-_l.z),d1.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),H._frustum.setFromProjectionMatrix(d1,X.coordinateSystem,X.reversedDepth)}else H.updateMatrices(B);a=H.getFrustum(),A(O,T,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===Ml&&L(H,T),H.needsUpdate=!1}M=this.type,S.needsUpdate=!1,s.setRenderTarget(U,W,V)};function L(N,O){const T=t.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Wn(o.x,o.y,{format:ar,type:ni})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(O,null,T,v,w,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(O,null,T,x,w,null)}function P(N,O,T,U){let W=null;const V=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)W=V;else if(W=T.isPointLight===!0?m:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=W.uuid,ut=O.uuid;let ft=d[Y];ft===void 0&&(ft={},d[Y]=ft);let Q=ft[ut];Q===void 0&&(Q=W.clone(),ft[ut]=Q,O.addEventListener("dispose",F)),W=Q}if(W.visible=O.visible,W.wireframe=O.wireframe,U===Ml?W.side=O.shadowSide!==null?O.shadowSide:O.side:W.side=O.shadowSide!==null?O.shadowSide:_[O.side],W.alphaMap=O.alphaMap,W.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,W.map=O.map,W.clipShadows=O.clipShadows,W.clippingPlanes=O.clippingPlanes,W.clipIntersection=O.clipIntersection,W.displacementMap=O.displacementMap,W.displacementScale=O.displacementScale,W.displacementBias=O.displacementBias,W.wireframeLinewidth=O.wireframeLinewidth,W.linewidth=O.linewidth,T.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Y=s.properties.get(W);Y.light=T}return W}function A(N,O,T,U,W){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&W===Ml)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const ut=t.update(N),ft=N.material;if(Array.isArray(ft)){const Q=ut.groups;for(let B=0,H=Q.length;B<H;B++){const z=Q[B],et=ft[z.materialIndex];if(et&&et.visible){const mt=P(N,et,U,W);N.onBeforeShadow(s,N,O,T,ut,mt,z),s.renderBufferDirect(T,null,ut,mt,N,z),N.onAfterShadow(s,N,O,T,ut,mt,z)}}}else if(ft.visible){const Q=P(N,ft,U,W);N.onBeforeShadow(s,N,O,T,ut,Q,null),s.renderBufferDirect(T,null,ut,Q,N,null),N.onAfterShadow(s,N,O,T,ut,Q,null)}}const Y=N.children;for(let ut=0,ft=Y.length;ut<ft;ut++)A(Y[ut],O,T,U,W)}function F(N){N.target.removeEventListener("dispose",F);for(const T in d){const U=d[T],W=N.target.uuid;W in U&&(U[W].dispose(),delete U[W])}}}function AA(s,t){function n(){let q=!1;const wt=new ln;let vt=null;const Ct=new ln(0,0,0,0);return{setMask:function(Ft){vt!==Ft&&!q&&(s.colorMask(Ft,Ft,Ft,Ft),vt=Ft)},setLocked:function(Ft){q=Ft},setClear:function(Ft,bt,qt,Vt,nn){nn===!0&&(Ft*=Vt,bt*=Vt,qt*=Vt),wt.set(Ft,bt,qt,Vt),Ct.equals(wt)===!1&&(s.clearColor(Ft,bt,qt,Vt),Ct.copy(wt))},reset:function(){q=!1,vt=null,Ct.set(-1,0,0,0)}}}function a(){let q=!1,wt=!1,vt=null,Ct=null,Ft=null;return{setReversed:function(bt){if(wt!==bt){const qt=t.get("EXT_clip_control");bt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),wt=bt;const Vt=Ft;Ft=null,this.setClear(Vt)}},getReversed:function(){return wt},setTest:function(bt){bt?St(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(bt){vt!==bt&&!q&&(s.depthMask(bt),vt=bt)},setFunc:function(bt){if(wt&&(bt=US[bt]),Ct!==bt){switch(bt){case Yd:s.depthFunc(s.NEVER);break;case Zd:s.depthFunc(s.ALWAYS);break;case Kd:s.depthFunc(s.LESS);break;case lo:s.depthFunc(s.LEQUAL);break;case Qd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case $d:s.depthFunc(s.GREATER);break;case Jd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ct=bt}},setLocked:function(bt){q=bt},setClear:function(bt){Ft!==bt&&(Ft=bt,wt&&(bt=1-bt),s.clearDepth(bt))},reset:function(){q=!1,vt=null,Ct=null,Ft=null,wt=!1}}}function o(){let q=!1,wt=null,vt=null,Ct=null,Ft=null,bt=null,qt=null,Vt=null,nn=null;return{setTest:function(Fe){q||(Fe?St(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(Fe){wt!==Fe&&!q&&(s.stencilMask(Fe),wt=Fe)},setFunc:function(Fe,di,pi){(vt!==Fe||Ct!==di||Ft!==pi)&&(s.stencilFunc(Fe,di,pi),vt=Fe,Ct=di,Ft=pi)},setOp:function(Fe,di,pi){(bt!==Fe||qt!==di||Vt!==pi)&&(s.stencilOp(Fe,di,pi),bt=Fe,qt=di,Vt=pi)},setLocked:function(Fe){q=Fe},setClear:function(Fe){nn!==Fe&&(s.clearStencil(Fe),nn=Fe)},reset:function(){q=!1,wt=null,vt=null,Ct=null,Ft=null,bt=null,qt=null,Vt=null,nn=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],w=null,S=!1,M=null,L=null,P=null,A=null,F=null,N=null,O=null,T=new ie(0,0,0),U=0,W=!1,V=null,Y=null,ut=null,ft=null,Q=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(et)[1]),H=z>=1):et.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),H=z>=2);let mt=null,D={};const X=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),Et=new ln().fromArray(X),Tt=new ln().fromArray(_t);function tt(q,wt,vt,Ct){const Ft=new Uint8Array(4),bt=s.createTexture();s.bindTexture(q,bt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<vt;qt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,Ft):s.texImage2D(wt+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ft);return bt}const Mt={};Mt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),St(s.DEPTH_TEST),u.setFunc(lo),cn(!1),un(c_),St(s.CULL_FACE),Ae(Ji);function St(q){g[q]!==!0&&(s.enable(q),g[q]=!0)}function It(q){g[q]!==!1&&(s.disable(q),g[q]=!1)}function ne(q,wt){return v[q]!==wt?(s.bindFramebuffer(q,wt),v[q]=wt,q===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=wt),q===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function Qt(q,wt){let vt=b,Ct=!1;if(q){vt=x.get(wt),vt===void 0&&(vt=[],x.set(wt,vt));const Ft=q.textures;if(vt.length!==Ft.length||vt[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,qt=Ft.length;bt<qt;bt++)vt[bt]=s.COLOR_ATTACHMENT0+bt;vt.length=Ft.length,Ct=!0}}else vt[0]!==s.BACK&&(vt[0]=s.BACK,Ct=!0);Ct&&s.drawBuffers(vt)}function Ue(q){return w!==q?(s.useProgram(q),w=q,!0):!1}const oe={[Js]:s.FUNC_ADD,[JM]:s.FUNC_SUBTRACT,[tS]:s.FUNC_REVERSE_SUBTRACT};oe[eS]=s.MIN,oe[nS]=s.MAX;const ge={[iS]:s.ZERO,[aS]:s.ONE,[sS]:s.SRC_COLOR,[Xd]:s.SRC_ALPHA,[fS]:s.SRC_ALPHA_SATURATE,[cS]:s.DST_COLOR,[oS]:s.DST_ALPHA,[rS]:s.ONE_MINUS_SRC_COLOR,[qd]:s.ONE_MINUS_SRC_ALPHA,[uS]:s.ONE_MINUS_DST_COLOR,[lS]:s.ONE_MINUS_DST_ALPHA,[hS]:s.CONSTANT_COLOR,[dS]:s.ONE_MINUS_CONSTANT_COLOR,[pS]:s.CONSTANT_ALPHA,[mS]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(q,wt,vt,Ct,Ft,bt,qt,Vt,nn,Fe){if(q===Ji){S===!0&&(It(s.BLEND),S=!1);return}if(S===!1&&(St(s.BLEND),S=!0),q!==$M){if(q!==M||Fe!==W){if((L!==Js||F!==Js)&&(s.blendEquation(s.FUNC_ADD),L=Js,F=Js),Fe)switch(q){case so:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wd:s.blendFunc(s.ONE,s.ONE);break;case u_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case f_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ue("WebGLState: Invalid blending: ",q);break}else switch(q){case so:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case u_:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case f_:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",q);break}P=null,A=null,N=null,O=null,T.set(0,0,0),U=0,M=q,W=Fe}return}Ft=Ft||wt,bt=bt||vt,qt=qt||Ct,(wt!==L||Ft!==F)&&(s.blendEquationSeparate(oe[wt],oe[Ft]),L=wt,F=Ft),(vt!==P||Ct!==A||bt!==N||qt!==O)&&(s.blendFuncSeparate(ge[vt],ge[Ct],ge[bt],ge[qt]),P=vt,A=Ct,N=bt,O=qt),(Vt.equals(T)===!1||nn!==U)&&(s.blendColor(Vt.r,Vt.g,Vt.b,nn),T.copy(Vt),U=nn),M=q,W=!1}function _e(q,wt){q.side===Ki?It(s.CULL_FACE):St(s.CULL_FACE);let vt=q.side===ei;wt&&(vt=!vt),cn(vt),q.blending===so&&q.transparent===!1?Ae(Ji):Ae(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ct=q.stencilWrite;h.setTest(Ct),Ct&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),mn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?St(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function cn(q){V!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),V=q)}function un(q){q!==KM?(St(s.CULL_FACE),q!==Y&&(q===c_?s.cullFace(s.BACK):q===QM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),Y=q}function fn(q){q!==ut&&(H&&s.lineWidth(q),ut=q)}function mn(q,wt,vt){q?(St(s.POLYGON_OFFSET_FILL),(ft!==wt||Q!==vt)&&(ft=wt,Q=vt,u.getReversed()&&(wt=-wt),s.polygonOffset(wt,vt))):It(s.POLYGON_OFFSET_FILL)}function Qe(q){q?St(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function hn(q){q===void 0&&(q=s.TEXTURE0+B-1),mt!==q&&(s.activeTexture(q),mt=q)}function K(q,wt,vt){vt===void 0&&(mt===null?vt=s.TEXTURE0+B-1:vt=mt);let Ct=D[vt];Ct===void 0&&(Ct={type:void 0,texture:void 0},D[vt]=Ct),(Ct.type!==q||Ct.texture!==wt)&&(mt!==vt&&(s.activeTexture(vt),mt=vt),s.bindTexture(q,wt||Mt[q]),Ct.type=q,Ct.texture=wt)}function ke(){const q=D[mt];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Ne(){try{s.compressedTexImage2D(...arguments)}catch(q){ue("WebGLState:",q)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(q){ue("WebGLState:",q)}}function E(){try{s.texSubImage2D(...arguments)}catch(q){ue("WebGLState:",q)}}function J(){try{s.texSubImage3D(...arguments)}catch(q){ue("WebGLState:",q)}}function rt(){try{s.compressedTexSubImage2D(...arguments)}catch(q){ue("WebGLState:",q)}}function dt(){try{s.compressedTexSubImage3D(...arguments)}catch(q){ue("WebGLState:",q)}}function At(){try{s.texStorage2D(...arguments)}catch(q){ue("WebGLState:",q)}}function Dt(){try{s.texStorage3D(...arguments)}catch(q){ue("WebGLState:",q)}}function ht(){try{s.texImage2D(...arguments)}catch(q){ue("WebGLState:",q)}}function pt(){try{s.texImage3D(...arguments)}catch(q){ue("WebGLState:",q)}}function Rt(q){return _[q]!==void 0?_[q]:s.getParameter(q)}function Bt(q,wt){_[q]!==wt&&(s.pixelStorei(q,wt),_[q]=wt)}function Lt(q){Et.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Et.copy(q))}function Ut(q){Tt.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Tt.copy(q))}function $t(q,wt){let vt=d.get(wt);vt===void 0&&(vt=new WeakMap,d.set(wt,vt));let Ct=vt.get(q);Ct===void 0&&(Ct=s.getUniformBlockIndex(wt,q.name),vt.set(q,Ct))}function Jt(q,wt){const Ct=d.get(wt).get(q);m.get(wt)!==Ct&&(s.uniformBlockBinding(wt,Ct,q.__bindingPointIndex),m.set(wt,Ct))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},mt=null,D={},v={},x=new WeakMap,b=[],w=null,S=!1,M=null,L=null,P=null,A=null,F=null,N=null,O=null,T=new ie(0,0,0),U=0,W=!1,V=null,Y=null,ut=null,ft=null,Q=null,Et.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:St,disable:It,bindFramebuffer:ne,drawBuffers:Qt,useProgram:Ue,setBlending:Ae,setMaterial:_e,setFlipSided:cn,setCullFace:un,setLineWidth:fn,setPolygonOffset:mn,setScissorTest:Qe,activeTexture:hn,bindTexture:K,unbindTexture:ke,compressedTexImage2D:Ne,compressedTexImage3D:I,texImage2D:ht,texImage3D:pt,pixelStorei:Bt,getParameter:Rt,updateUBOMapping:$t,uniformBlockBinding:Jt,texStorage2D:At,texStorage3D:Dt,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:rt,compressedTexSubImage3D:dt,scissor:Lt,viewport:Ut,reset:re}}function wA(s,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Kt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,E){return b?new OffscreenCanvas(I,E):Ou("canvas")}function S(I,E,J){let rt=1;const dt=Ne(I);if((dt.width>J||dt.height>J)&&(rt=J/Math.max(dt.width,dt.height)),rt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const At=Math.floor(rt*dt.width),Dt=Math.floor(rt*dt.height);v===void 0&&(v=w(At,Dt));const ht=E?w(At,Dt):v;return ht.width=At,ht.height=Dt,ht.getContext("2d").drawImage(I,0,0,At,Dt),se("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+At+"x"+Dt+")."),ht}else return"data"in I&&se("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),I;return I}function M(I){return I.generateMipmaps}function L(I){s.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(I,E,J,rt,dt,At=!1){if(I!==null){if(s[I]!==void 0)return s[I];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Dt;rt&&(Dt=t.get("EXT_texture_norm16"),Dt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=E;if(E===s.RED&&(J===s.FLOAT&&(ht=s.R32F),J===s.HALF_FLOAT&&(ht=s.R16F),J===s.UNSIGNED_BYTE&&(ht=s.R8),J===s.UNSIGNED_SHORT&&Dt&&(ht=Dt.R16_EXT),J===s.SHORT&&Dt&&(ht=Dt.R16_SNORM_EXT)),E===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.R8UI),J===s.UNSIGNED_SHORT&&(ht=s.R16UI),J===s.UNSIGNED_INT&&(ht=s.R32UI),J===s.BYTE&&(ht=s.R8I),J===s.SHORT&&(ht=s.R16I),J===s.INT&&(ht=s.R32I)),E===s.RG&&(J===s.FLOAT&&(ht=s.RG32F),J===s.HALF_FLOAT&&(ht=s.RG16F),J===s.UNSIGNED_BYTE&&(ht=s.RG8),J===s.UNSIGNED_SHORT&&Dt&&(ht=Dt.RG16_EXT),J===s.SHORT&&Dt&&(ht=Dt.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.RG8UI),J===s.UNSIGNED_SHORT&&(ht=s.RG16UI),J===s.UNSIGNED_INT&&(ht=s.RG32UI),J===s.BYTE&&(ht=s.RG8I),J===s.SHORT&&(ht=s.RG16I),J===s.INT&&(ht=s.RG32I)),E===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),J===s.UNSIGNED_INT&&(ht=s.RGB32UI),J===s.BYTE&&(ht=s.RGB8I),J===s.SHORT&&(ht=s.RGB16I),J===s.INT&&(ht=s.RGB32I)),E===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),J===s.UNSIGNED_INT&&(ht=s.RGBA32UI),J===s.BYTE&&(ht=s.RGBA8I),J===s.SHORT&&(ht=s.RGBA16I),J===s.INT&&(ht=s.RGBA32I)),E===s.RGB&&(J===s.UNSIGNED_SHORT&&Dt&&(ht=Dt.RGB16_EXT),J===s.SHORT&&Dt&&(ht=Dt.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ht=s.R11F_G11F_B10F)),E===s.RGBA){const pt=At?Pu:Te.getTransfer(dt);J===s.FLOAT&&(ht=s.RGBA32F),J===s.HALF_FLOAT&&(ht=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ht=pt===Oe?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Dt&&(ht=Dt.RGBA16_EXT),J===s.SHORT&&Dt&&(ht=Dt.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function F(I,E){let J;return I?E===null||E===da||E===Rl?J=s.DEPTH24_STENCIL8:E===ji?J=s.DEPTH32F_STENCIL8:E===wl&&(J=s.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===da||E===Rl?J=s.DEPTH_COMPONENT24:E===ji?J=s.DEPTH_COMPONENT32F:E===wl&&(J=s.DEPTH_COMPONENT16),J}function N(I,E){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==Dn&&I.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function O(I){const E=I.target;E.removeEventListener("dispose",O),U(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(I){const E=I.target;E.removeEventListener("dispose",T),V(E)}function U(I){const E=a.get(I);if(E.__webglInit===void 0)return;const J=I.source,rt=x.get(J);if(rt){const dt=rt[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&W(I),Object.keys(rt).length===0&&x.delete(J)}a.remove(I)}function W(I){const E=a.get(I);s.deleteTexture(E.__webglTexture);const J=I.source,rt=x.get(J);delete rt[E.__cacheKey],u.memory.textures--}function V(I){const E=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(E.__webglFramebuffer[rt]))for(let dt=0;dt<E.__webglFramebuffer[rt].length;dt++)s.deleteFramebuffer(E.__webglFramebuffer[rt][dt]);else s.deleteFramebuffer(E.__webglFramebuffer[rt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[rt])}else{if(Array.isArray(E.__webglFramebuffer))for(let rt=0;rt<E.__webglFramebuffer.length;rt++)s.deleteFramebuffer(E.__webglFramebuffer[rt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let rt=0;rt<E.__webglColorRenderbuffer.length;rt++)E.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[rt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=I.textures;for(let rt=0,dt=J.length;rt<dt;rt++){const At=a.get(J[rt]);At.__webglTexture&&(s.deleteTexture(At.__webglTexture),u.memory.textures--),a.remove(J[rt])}a.remove(I)}let Y=0;function ut(){Y=0}function ft(){return Y}function Q(I){Y=I}function B(){const I=Y;return I>=o.maxTextures&&se("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),Y+=1,I}function H(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function z(I,E){const J=a.get(I);if(I.isVideoTexture&&K(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){const rt=I.image;if(rt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{It(J,I,E);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+E)}function et(I,E){const J=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){It(J,I,E);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+E)}function mt(I,E){const J=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){It(J,I,E);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+E)}function D(I,E){const J=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&J.__version!==I.version){ne(J,I,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+E)}const X={[Al]:s.REPEAT,[ua]:s.CLAMP_TO_EDGE,[t0]:s.MIRRORED_REPEAT},_t={[Dn]:s.NEAREST,[_S]:s.NEAREST_MIPMAP_NEAREST,[qc]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[rd]:s.LINEAR_MIPMAP_NEAREST,[er]:s.LINEAR_MIPMAP_LINEAR},Et={[SS]:s.NEVER,[wS]:s.ALWAYS,[bS]:s.LESS,[np]:s.LEQUAL,[ES]:s.EQUAL,[ip]:s.GEQUAL,[TS]:s.GREATER,[AS]:s.NOTEQUAL};function Tt(I,E){if(E.type===ji&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===rd||E.magFilter===qc||E.magFilter===er||E.minFilter===On||E.minFilter===rd||E.minFilter===qc||E.minFilter===er)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,X[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,X[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,X[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,_t[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,_t[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==qc&&E.minFilter!==er||E.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function tt(I,E){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",O));const rt=E.source;let dt=x.get(rt);dt===void 0&&(dt={},x.set(rt,dt));const At=H(E);if(At!==I.__cacheKey){dt[At]===void 0&&(dt[At]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),dt[At].usedTimes++;const Dt=dt[I.__cacheKey];Dt!==void 0&&(dt[I.__cacheKey].usedTimes--,Dt.usedTimes===0&&W(E)),I.__cacheKey=At,I.__webglTexture=dt[At].texture}return J}function Mt(I,E,J){return Math.floor(Math.floor(I/J)/E)}function St(I,E,J,rt){const At=I.updateRanges;if(At.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,J,rt,E.data);else{At.sort((Bt,Lt)=>Bt.start-Lt.start);let Dt=0;for(let Bt=1;Bt<At.length;Bt++){const Lt=At[Dt],Ut=At[Bt],$t=Lt.start+Lt.count,Jt=Mt(Ut.start,E.width,4),re=Mt(Lt.start,E.width,4);Ut.start<=$t+1&&Jt===re&&Mt(Ut.start+Ut.count-1,E.width,4)===Jt?Lt.count=Math.max(Lt.count,Ut.start+Ut.count-Lt.start):(++Dt,At[Dt]=Ut)}At.length=Dt+1;const ht=n.getParameter(s.UNPACK_ROW_LENGTH),pt=n.getParameter(s.UNPACK_SKIP_PIXELS),Rt=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Bt=0,Lt=At.length;Bt<Lt;Bt++){const Ut=At[Bt],$t=Math.floor(Ut.start/4),Jt=Math.ceil(Ut.count/4),re=$t%E.width,q=Math.floor($t/E.width),wt=Jt,vt=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,re),n.pixelStorei(s.UNPACK_SKIP_ROWS,q),n.texSubImage2D(s.TEXTURE_2D,0,re,q,wt,vt,J,rt,E.data)}I.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,ht),n.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),n.pixelStorei(s.UNPACK_SKIP_ROWS,Rt)}}function It(I,E,J){let rt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(rt=s.TEXTURE_3D);const dt=tt(I,E),At=E.source;n.bindTexture(rt,I.__webglTexture,s.TEXTURE0+J);const Dt=a.get(At);if(At.version!==Dt.__version||dt===!0){if(n.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const vt=Te.getPrimaries(Te.workingColorSpace),Ct=E.colorSpace===Hi?null:Te.getPrimaries(E.colorSpace),Ft=E.colorSpace===Hi||vt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let pt=S(E.image,!1,o.maxTextureSize);pt=ke(E,pt);const Rt=c.convert(E.format,E.colorSpace),Bt=c.convert(E.type);let Lt=A(E.internalFormat,Rt,Bt,E.normalized,E.colorSpace,E.isVideoTexture);Tt(rt,E);let Ut;const $t=E.mipmaps,Jt=E.isVideoTexture!==!0,re=Dt.__version===void 0||dt===!0,q=At.dataReady,wt=N(E,pt);if(E.isDepthTexture)Lt=F(E.format===nr,E.type),re&&(Jt?n.texStorage2D(s.TEXTURE_2D,1,Lt,pt.width,pt.height):n.texImage2D(s.TEXTURE_2D,0,Lt,pt.width,pt.height,0,Rt,Bt,null));else if(E.isDataTexture)if($t.length>0){Jt&&re&&n.texStorage2D(s.TEXTURE_2D,wt,Lt,$t[0].width,$t[0].height);for(let vt=0,Ct=$t.length;vt<Ct;vt++)Ut=$t[vt],Jt?q&&n.texSubImage2D(s.TEXTURE_2D,vt,0,0,Ut.width,Ut.height,Rt,Bt,Ut.data):n.texImage2D(s.TEXTURE_2D,vt,Lt,Ut.width,Ut.height,0,Rt,Bt,Ut.data);E.generateMipmaps=!1}else Jt?(re&&n.texStorage2D(s.TEXTURE_2D,wt,Lt,pt.width,pt.height),q&&St(E,pt,Rt,Bt)):n.texImage2D(s.TEXTURE_2D,0,Lt,pt.width,pt.height,0,Rt,Bt,pt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Jt&&re&&n.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Lt,$t[0].width,$t[0].height,pt.depth);for(let vt=0,Ct=$t.length;vt<Ct;vt++)if(Ut=$t[vt],E.format!==$i)if(Rt!==null)if(Jt){if(q)if(E.layerUpdates.size>0){const Ft=X_(Ut.width,Ut.height,E.format,E.type);for(const bt of E.layerUpdates){const qt=Ut.data.subarray(bt*Ft/Ut.data.BYTES_PER_ELEMENT,(bt+1)*Ft/Ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,bt,Ut.width,Ut.height,1,Rt,qt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,Ut.width,Ut.height,pt.depth,Rt,Ut.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,vt,Lt,Ut.width,Ut.height,pt.depth,0,Ut.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,Ut.width,Ut.height,pt.depth,Rt,Bt,Ut.data):n.texImage3D(s.TEXTURE_2D_ARRAY,vt,Lt,Ut.width,Ut.height,pt.depth,0,Rt,Bt,Ut.data)}else{Jt&&re&&n.texStorage2D(s.TEXTURE_2D,wt,Lt,$t[0].width,$t[0].height);for(let vt=0,Ct=$t.length;vt<Ct;vt++)Ut=$t[vt],E.format!==$i?Rt!==null?Jt?q&&n.compressedTexSubImage2D(s.TEXTURE_2D,vt,0,0,Ut.width,Ut.height,Rt,Ut.data):n.compressedTexImage2D(s.TEXTURE_2D,vt,Lt,Ut.width,Ut.height,0,Ut.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?q&&n.texSubImage2D(s.TEXTURE_2D,vt,0,0,Ut.width,Ut.height,Rt,Bt,Ut.data):n.texImage2D(s.TEXTURE_2D,vt,Lt,Ut.width,Ut.height,0,Rt,Bt,Ut.data)}else if(E.isDataArrayTexture)if(Jt){if(re&&n.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Lt,pt.width,pt.height,pt.depth),q)if(E.layerUpdates.size>0){const vt=X_(pt.width,pt.height,E.format,E.type);for(const Ct of E.layerUpdates){const Ft=pt.data.subarray(Ct*vt/pt.data.BYTES_PER_ELEMENT,(Ct+1)*vt/pt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ct,pt.width,pt.height,1,Rt,Bt,Ft)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Bt,pt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,pt.width,pt.height,pt.depth,0,Rt,Bt,pt.data);else if(E.isData3DTexture)Jt?(re&&n.texStorage3D(s.TEXTURE_3D,wt,Lt,pt.width,pt.height,pt.depth),q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Bt,pt.data)):n.texImage3D(s.TEXTURE_3D,0,Lt,pt.width,pt.height,pt.depth,0,Rt,Bt,pt.data);else if(E.isFramebufferTexture){if(re)if(Jt)n.texStorage2D(s.TEXTURE_2D,wt,Lt,pt.width,pt.height);else{let vt=pt.width,Ct=pt.height;for(let Ft=0;Ft<wt;Ft++)n.texImage2D(s.TEXTURE_2D,Ft,Lt,vt,Ct,0,Rt,Bt,null),vt>>=1,Ct>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const vt=s.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),pt.parentNode!==vt){vt.appendChild(pt),_.add(E),vt.onpaint=Ct=>{const Ft=Ct.changedElements;for(const bt of _)Ft.includes(bt.image)&&(bt.needsUpdate=!0)},vt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,pt);else{const Ft=s.RGBA,bt=s.RGBA,qt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ft,bt,qt,pt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if($t.length>0){if(Jt&&re){const vt=Ne($t[0]);n.texStorage2D(s.TEXTURE_2D,wt,Lt,vt.width,vt.height)}for(let vt=0,Ct=$t.length;vt<Ct;vt++)Ut=$t[vt],Jt?q&&n.texSubImage2D(s.TEXTURE_2D,vt,0,0,Rt,Bt,Ut):n.texImage2D(s.TEXTURE_2D,vt,Lt,Rt,Bt,Ut);E.generateMipmaps=!1}else if(Jt){if(re){const vt=Ne(pt);n.texStorage2D(s.TEXTURE_2D,wt,Lt,vt.width,vt.height)}q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,Bt,pt)}else n.texImage2D(s.TEXTURE_2D,0,Lt,Rt,Bt,pt);M(E)&&L(rt),Dt.__version=At.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ne(I,E,J){if(E.image.length!==6)return;const rt=tt(I,E),dt=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+J);const At=a.get(dt);if(dt.version!==At.__version||rt===!0){n.activeTexture(s.TEXTURE0+J);const Dt=Te.getPrimaries(Te.workingColorSpace),ht=E.colorSpace===Hi?null:Te.getPrimaries(E.colorSpace),pt=E.colorSpace===Hi||Dt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Rt=E.isCompressedTexture||E.image[0].isCompressedTexture,Bt=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let bt=0;bt<6;bt++)!Rt&&!Bt?Lt[bt]=S(E.image[bt],!0,o.maxCubemapSize):Lt[bt]=Bt?E.image[bt].image:E.image[bt],Lt[bt]=ke(E,Lt[bt]);const Ut=Lt[0],$t=c.convert(E.format,E.colorSpace),Jt=c.convert(E.type),re=A(E.internalFormat,$t,Jt,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,wt=At.__version===void 0||rt===!0,vt=dt.dataReady;let Ct=N(E,Ut);Tt(s.TEXTURE_CUBE_MAP,E);let Ft;if(Rt){q&&wt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,re,Ut.width,Ut.height);for(let bt=0;bt<6;bt++){Ft=Lt[bt].mipmaps;for(let qt=0;qt<Ft.length;qt++){const Vt=Ft[qt];E.format!==$i?$t!==null?q?vt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,0,0,Vt.width,Vt.height,$t,Vt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,re,Vt.width,Vt.height,0,Vt.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?vt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,0,0,Vt.width,Vt.height,$t,Jt,Vt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt,re,Vt.width,Vt.height,0,$t,Jt,Vt.data)}}}else{if(Ft=E.mipmaps,q&&wt){Ft.length>0&&Ct++;const bt=Ne(Lt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,re,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Bt){q?vt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Lt[bt].width,Lt[bt].height,$t,Jt,Lt[bt].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,re,Lt[bt].width,Lt[bt].height,0,$t,Jt,Lt[bt].data);for(let qt=0;qt<Ft.length;qt++){const nn=Ft[qt].image[bt].image;q?vt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,0,0,nn.width,nn.height,$t,Jt,nn.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,re,nn.width,nn.height,0,$t,Jt,nn.data)}}else{q?vt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,$t,Jt,Lt[bt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,re,$t,Jt,Lt[bt]);for(let qt=0;qt<Ft.length;qt++){const Vt=Ft[qt];q?vt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,0,0,$t,Jt,Vt.image[bt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+bt,qt+1,re,$t,Jt,Vt.image[bt])}}}M(E)&&L(s.TEXTURE_CUBE_MAP),At.__version=dt.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Qt(I,E,J,rt,dt,At){const Dt=c.convert(J.format,J.colorSpace),ht=c.convert(J.type),pt=A(J.internalFormat,Dt,ht,J.normalized,J.colorSpace),Rt=a.get(E),Bt=a.get(J);if(Bt.__renderTarget=E,!Rt.__hasExternalTextures){const Lt=Math.max(1,E.width>>At),Ut=Math.max(1,E.height>>At);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?n.texImage3D(dt,At,pt,Lt,Ut,E.depth,0,Dt,ht,null):n.texImage2D(dt,At,pt,Lt,Ut,0,Dt,ht,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),hn(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,dt,Bt.__webglTexture,0,Qe(E)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,dt,Bt.__webglTexture,At),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(I,E,J){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const rt=E.depthTexture,dt=rt&&rt.isDepthTexture?rt.type:null,At=F(E.stencilBuffer,dt),Dt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;hn(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe(E),At,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe(E),At,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,At,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Dt,s.RENDERBUFFER,I)}else{const rt=E.textures;for(let dt=0;dt<rt.length;dt++){const At=rt[dt],Dt=c.convert(At.format,At.colorSpace),ht=c.convert(At.type),pt=A(At.internalFormat,Dt,ht,At.normalized,At.colorSpace);hn(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe(E),pt,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe(E),pt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(I,E,J){const rt=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const dt=a.get(E.depthTexture);if(dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),rt){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),dt.__webglTexture===void 0){dt.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,E.depthTexture);const Rt=c.convert(E.depthTexture.format),Bt=c.convert(E.depthTexture.type);let Lt;E.depthTexture.format===ka?Lt=s.DEPTH_COMPONENT24:E.depthTexture.format===nr&&(Lt=s.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Lt,E.width,E.height,0,Rt,Bt,null)}}else z(E.depthTexture,0);const At=dt.__webglTexture,Dt=Qe(E),ht=rt?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,pt=E.depthTexture.format===nr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===ka)hn(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,ht,At,0,Dt):s.framebufferTexture2D(s.FRAMEBUFFER,pt,ht,At,0);else if(E.depthTexture.format===nr)hn(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,ht,At,0,Dt):s.framebufferTexture2D(s.FRAMEBUFFER,pt,ht,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ge(I){const E=a.get(I),J=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const rt=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),rt){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,rt.removeEventListener("dispose",dt)};rt.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=rt}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let rt=0;rt<6;rt++)oe(E.__webglFramebuffer[rt],I,rt);else{const rt=I.texture.mipmaps;rt&&rt.length>0?oe(E.__webglFramebuffer[0],I,0):oe(E.__webglFramebuffer,I,0)}else if(J){E.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[rt]),E.__webglDepthbuffer[rt]===void 0)E.__webglDepthbuffer[rt]=s.createRenderbuffer(),Ue(E.__webglDepthbuffer[rt],I,!1);else{const dt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,At),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,At)}}else{const rt=I.texture.mipmaps;if(rt&&rt.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ue(E.__webglDepthbuffer,I,!1);else{const dt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,At),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,At)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(I,E,J){const rt=a.get(I);E!==void 0&&Qt(rt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&ge(I)}function _e(I){const E=I.texture,J=a.get(I),rt=a.get(E);I.addEventListener("dispose",T);const dt=I.textures,At=I.isWebGLCubeRenderTarget===!0,Dt=dt.length>1;if(Dt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=E.version,u.memory.textures++),At){J.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ht]=[];for(let pt=0;pt<E.mipmaps.length;pt++)J.__webglFramebuffer[ht][pt]=s.createFramebuffer()}else J.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)J.__webglFramebuffer[ht]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Dt)for(let ht=0,pt=dt.length;ht<pt;ht++){const Rt=a.get(dt[ht]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&hn(I)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ht=0;ht<dt.length;ht++){const pt=dt[ht];J.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ht]);const Rt=c.convert(pt.format,pt.colorSpace),Bt=c.convert(pt.type),Lt=A(pt.internalFormat,Rt,Bt,pt.normalized,pt.colorSpace,I.isXRRenderTarget===!0),Ut=Qe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,Lt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,J.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(J.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(At){n.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)Qt(J.__webglFramebuffer[ht][pt],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else Qt(J.__webglFramebuffer[ht],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);M(E)&&L(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Dt){for(let ht=0,pt=dt.length;ht<pt;ht++){const Rt=dt[ht],Bt=a.get(Rt);let Lt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Lt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Lt,Bt.__webglTexture),Tt(Lt,Rt),Qt(J.__webglFramebuffer,I,Rt,s.COLOR_ATTACHMENT0+ht,Lt,0),M(Rt)&&L(Lt)}n.unbindTexture()}else{let ht=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(ht,rt.__webglTexture),Tt(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)Qt(J.__webglFramebuffer[pt],I,E,s.COLOR_ATTACHMENT0,ht,pt);else Qt(J.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,ht,0);M(E)&&L(ht),n.unbindTexture()}I.depthBuffer&&ge(I)}function cn(I){const E=I.textures;for(let J=0,rt=E.length;J<rt;J++){const dt=E[J];if(M(dt)){const At=P(I),Dt=a.get(dt).__webglTexture;n.bindTexture(At,Dt),L(At),n.unbindTexture()}}}const un=[],fn=[];function mn(I){if(I.samples>0){if(hn(I)===!1){const E=I.textures,J=I.width,rt=I.height;let dt=s.COLOR_BUFFER_BIT;const At=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=a.get(I),ht=E.length>1;if(ht)for(let Rt=0;Rt<E.length;Rt++)n.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const pt=I.texture.mipmaps;pt&&pt.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Rt=0;Rt<E.length;Rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);const Bt=a.get(E[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Bt,0)}s.blitFramebuffer(0,0,J,rt,0,0,J,rt,dt,s.NEAREST),m===!0&&(un.length=0,fn.length=0,un.push(s.COLOR_ATTACHMENT0+Rt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(un.push(At),fn.push(At),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,fn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,un))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let Rt=0;Rt<E.length;Rt++){n.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);const Bt=a.get(E[Rt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,Bt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Qe(I){return Math.min(o.maxSamples,I.samples)}function hn(I){const E=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function K(I){const E=u.render.frame;g.get(I)!==E&&(g.set(I,E),I.update())}function ke(I,E){const J=I.colorSpace,rt=I.format,dt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==Lu&&J!==Hi&&(Te.getTransfer(J)===Oe?(rt!==$i||dt!==wi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",J)),E}function Ne(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=ut,this.getTextureUnits=ft,this.setTextureUnits=Q,this.setTexture2D=z,this.setTexture2DArray=et,this.setTexture3D=mt,this.setTextureCube=D,this.rebindTextures=Ae,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=cn,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=hn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function RA(s,t){function n(a,o=Hi){let c;const u=Te.getTransfer(o);if(a===wi)return s.UNSIGNED_BYTE;if(a===Q0)return s.UNSIGNED_SHORT_4_4_4_4;if(a===j0)return s.UNSIGNED_SHORT_5_5_5_1;if(a===V1)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===k1)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===H1)return s.BYTE;if(a===G1)return s.SHORT;if(a===wl)return s.UNSIGNED_SHORT;if(a===K0)return s.INT;if(a===da)return s.UNSIGNED_INT;if(a===ji)return s.FLOAT;if(a===ni)return s.HALF_FLOAT;if(a===W1)return s.ALPHA;if(a===X1)return s.RGB;if(a===$i)return s.RGBA;if(a===ka)return s.DEPTH_COMPONENT;if(a===nr)return s.DEPTH_STENCIL;if(a===$0)return s.RED;if(a===J0)return s.RED_INTEGER;if(a===ar)return s.RG;if(a===tp)return s.RG_INTEGER;if(a===ep)return s.RGBA_INTEGER;if(a===bu||a===Eu||a===Tu||a===Au)if(u===Oe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===bu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===bu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===e0||a===n0||a===i0||a===a0)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===e0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===n0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===i0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===a0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===s0||a===r0||a===o0||a===l0||a===c0||a===Du||a===u0)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===s0||a===r0)return u===Oe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===o0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===l0)return c.COMPRESSED_R11_EAC;if(a===c0)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Du)return c.COMPRESSED_RG11_EAC;if(a===u0)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===f0||a===h0||a===d0||a===p0||a===m0||a===g0||a===v0||a===_0||a===x0||a===y0||a===M0||a===S0||a===b0||a===E0)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===f0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===h0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===d0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===p0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===m0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===g0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===v0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===_0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===x0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===y0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===M0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===S0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===b0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===E0)return u===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===T0||a===A0||a===w0)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===T0)return u===Oe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===A0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===w0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===R0||a===C0||a===Uu||a===D0)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===R0)return c.COMPRESSED_RED_RGTC1_EXT;if(a===C0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Uu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===D0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Rl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DA=`
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

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new ex(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new In({vertexShader:CA,fragmentShader:DA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tn(new Pl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends Rs{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,d=null,g=null,_=null,v=null,x=null,b=null;const w=typeof XRWebGLBinding<"u",S=new UA,M={},L=n.getContextAttributes();let P=null,A=null;const F=[],N=[],O=new Kt;let T=null;const U=new Ai;U.viewport=new ln;const W=new Ai;W.viewport=new ln;const V=[U,W],Y=new R2;let ut=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Mt=F[tt];return Mt===void 0&&(Mt=new hd,F[tt]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let Mt=F[tt];return Mt===void 0&&(Mt=new hd,F[tt]=Mt),Mt.getGripSpace()},this.getHand=function(tt){let Mt=F[tt];return Mt===void 0&&(Mt=new hd,F[tt]=Mt),Mt.getHandSpace()};function Q(tt){const Mt=N.indexOf(tt.inputSource);if(Mt===-1)return;const St=F[Mt];St!==void 0&&(St.update(tt.inputSource,tt.frame,d||u),St.dispatchEvent({type:tt.type,data:tt.inputSource}))}function B(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",H);for(let tt=0;tt<F.length;tt++){const Mt=N[tt];Mt!==null&&(N[tt]=null,F[tt].disconnect(Mt))}ut=null,ft=null,S.reset();for(const tt in M)delete M[tt];t.setRenderTarget(P),x=null,v=null,_=null,o=null,A=null,Tt.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,a.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){h=tt,a.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(tt){d=tt},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(tt){if(o=tt,o!==null){if(P=t.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",B),o.addEventListener("inputsourceschange",H),L.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,It=null,ne=null;L.depth&&(ne=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=L.stencil?nr:ka,It=L.stencil?Rl:da);const Qt={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Qt),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),A=new Wn(v.textureWidth,v.textureHeight,{format:$i,type:wi,depthTexture:new fo(v.textureWidth,v.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,St),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new Wn(x.framebufferWidth,x.framebufferHeight,{format:$i,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),d=null,u=await o.requestReferenceSpace(h),Tt.setContext(o),Tt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(tt){for(let Mt=0;Mt<tt.removed.length;Mt++){const St=tt.removed[Mt],It=N.indexOf(St);It>=0&&(N[It]=null,F[It].disconnect(St))}for(let Mt=0;Mt<tt.added.length;Mt++){const St=tt.added[Mt];let It=N.indexOf(St);if(It===-1){for(let Qt=0;Qt<F.length;Qt++)if(Qt>=N.length){N.push(St),It=Qt;break}else if(N[Qt]===null){N[Qt]=St,It=Qt;break}if(It===-1)break}const ne=F[It];ne&&ne.connect(St)}}const z=new $,et=new $;function mt(tt,Mt,St){z.setFromMatrixPosition(Mt.matrixWorld),et.setFromMatrixPosition(St.matrixWorld);const It=z.distanceTo(et),ne=Mt.projectionMatrix.elements,Qt=St.projectionMatrix.elements,Ue=ne[14]/(ne[10]-1),oe=ne[14]/(ne[10]+1),ge=(ne[9]+1)/ne[5],Ae=(ne[9]-1)/ne[5],_e=(ne[8]-1)/ne[0],cn=(Qt[8]+1)/Qt[0],un=Ue*_e,fn=Ue*cn,mn=It/(-_e+cn),Qe=mn*-_e;if(Mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Qe),tt.translateZ(mn),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),ne[10]===-1)tt.projectionMatrix.copy(Mt.projectionMatrix),tt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const hn=Ue+mn,K=oe+mn,ke=un-Qe,Ne=fn+(It-Qe),I=ge*oe/K*hn,E=Ae*oe/K*hn;tt.projectionMatrix.makePerspective(ke,Ne,I,E,hn,K),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function D(tt,Mt){Mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(o===null)return;let Mt=tt.near,St=tt.far;S.texture!==null&&(S.depthNear>0&&(Mt=S.depthNear),S.depthFar>0&&(St=S.depthFar)),Y.near=W.near=U.near=Mt,Y.far=W.far=U.far=St,(ut!==Y.near||ft!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ut=Y.near,ft=Y.far),Y.layers.mask=tt.layers.mask|6,U.layers.mask=Y.layers.mask&-5,W.layers.mask=Y.layers.mask&-3;const It=tt.parent,ne=Y.cameras;D(Y,It);for(let Qt=0;Qt<ne.length;Qt++)D(ne[Qt],It);ne.length===2?mt(Y,U,W):Y.projectionMatrix.copy(U.projectionMatrix),X(tt,Y,It)};function X(tt,Mt,St){St===null?tt.matrix.copy(Mt.matrixWorld):(tt.matrix.copy(St.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(Mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(Mt.projectionMatrix),tt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Dl*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(tt){m=tt,v!==null&&(v.fixedFoveation=tt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=tt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(tt){return M[tt]};let _t=null;function Et(tt,Mt){if(g=Mt.getViewerPose(d||u),b=Mt,g!==null){const St=g.views;x!==null&&(t.setRenderTargetFramebuffer(A,x.framebuffer),t.setRenderTarget(A));let It=!1;St.length!==Y.cameras.length&&(Y.cameras.length=0,It=!0);for(let oe=0;oe<St.length;oe++){const ge=St[oe];let Ae=null;if(x!==null)Ae=x.getViewport(ge);else{const cn=_.getViewSubImage(v,ge);Ae=cn.viewport,oe===0&&(t.setRenderTargetTextures(A,cn.colorTexture,cn.depthStencilTexture),t.setRenderTarget(A))}let _e=V[oe];_e===void 0&&(_e=new Ai,_e.layers.enable(oe),_e.viewport=new ln,V[oe]=_e),_e.matrix.fromArray(ge.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ge.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),oe===0&&(Y.matrix.copy(_e.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),It===!0&&Y.cameras.push(_e)}const ne=o.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=a.getBinding();const oe=_.getDepthInformation(St[0]);oe&&oe.isValid&&oe.texture&&S.init(oe,o.renderState)}if(ne&&ne.includes("camera-access")&&w){t.state.unbindTexture(),_=a.getBinding();for(let oe=0;oe<St.length;oe++){const ge=St[oe].camera;if(ge){let Ae=M[ge];Ae||(Ae=new ex,M[ge]=Ae);const _e=_.getCameraImage(ge);Ae.sourceTexture=_e}}}}for(let St=0;St<F.length;St++){const It=N[St],ne=F[St];It!==null&&ne!==void 0&&ne.update(It,Mt,d||u)}_t&&_t(tt,Mt),Mt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Mt}),b=null}const Tt=new lx;Tt.setAnimationLoop(Et),this.setAnimationLoop=function(tt){_t=tt},this.dispose=function(){}}}const LA=new je,mx=new ce;mx.set(-1,0,0,0,1,0,0,0,1);function PA(s,t){function n(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function a(S,M){M.color.getRGB(S.fogColor.value,nx(s)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function o(S,M,L,P,A){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(S,M):M.isMeshLambertMaterial?(c(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(S,M),_(S,M)):M.isMeshPhongMaterial?(c(S,M),g(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(S,M),v(S,M),M.isMeshPhysicalMaterial&&x(S,M,A)):M.isMeshMatcapMaterial?(c(S,M),b(S,M)):M.isMeshDepthMaterial?c(S,M):M.isMeshDistanceMaterial?(c(S,M),w(S,M)):M.isMeshNormalMaterial?c(S,M):M.isLineBasicMaterial?(u(S,M),M.isLineDashedMaterial&&h(S,M)):M.isPointsMaterial?m(S,M,L,P):M.isSpriteMaterial?d(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,n(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,n(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,n(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===ei&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,n(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===ei&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,n(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,n(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,n(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);const L=t.get(M),P=L.envMap,A=L.envMapRotation;P&&(S.envMap.value=P,S.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(A)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(mx),S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,n(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,n(M.aoMap,S.aoMapTransform))}function u(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,n(M.map,S.mapTransform))}function h(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function m(S,M,L,P){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*L,S.scale.value=P*.5,M.map&&(S.map.value=M.map,n(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,n(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function d(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,n(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,n(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function g(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function _(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function v(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,n(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,n(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function x(S,M,L){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,n(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,n(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,n(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,n(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,n(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ei&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,n(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,n(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,n(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,n(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,n(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,n(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,n(M.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,M){M.matcap&&(S.matcap.value=M.matcap)}function w(S,M){const L=t.get(M).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function OA(s,t,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,F){const N=F.program;a.uniformBlockBinding(A,N)}function d(A,F){let N=o[A.id];N===void 0&&(S(A),N=g(A),o[A.id]=N,A.addEventListener("dispose",L));const O=F.program;a.updateUBOMapping(A,O);const T=t.render.frame;c[A.id]!==T&&(v(A),c[A.id]=T)}function g(A){const F=_();A.__bindingPointIndex=F;const N=s.createBuffer(),O=A.__size,T=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,O,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,F,N),N}function _(){for(let A=0;A<h;A++)if(u.indexOf(A)===-1)return u.push(A),A;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const F=o[A.id],N=A.uniforms,O=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let T=0,U=N.length;T<U;T++){const W=N[T];if(Array.isArray(W))for(let V=0,Y=W.length;V<Y;V++)x(W[V],T,V,O);else x(W,T,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(A,F,N,O){if(w(A,F,N,O)===!0){const T=A.__offset,U=A.value;if(Array.isArray(U)){let W=0;for(let V=0;V<U.length;V++){const Y=U[V],ut=M(Y);b(Y,A.__data,W),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(W+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(U,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,A.__data)}}function b(A,F,N){typeof A=="number"||typeof A=="boolean"?F[0]=A:A.isMatrix3?(F[0]=A.elements[0],F[1]=A.elements[1],F[2]=A.elements[2],F[3]=0,F[4]=A.elements[3],F[5]=A.elements[4],F[6]=A.elements[5],F[7]=0,F[8]=A.elements[6],F[9]=A.elements[7],F[10]=A.elements[8],F[11]=0):ArrayBuffer.isView(A)?F.set(new A.constructor(A.buffer,A.byteOffset,F.length)):A.toArray(F,N)}function w(A,F,N,O){const T=A.value,U=F+"_"+N;if(O[U]===void 0)return typeof T=="number"||typeof T=="boolean"?O[U]=T:ArrayBuffer.isView(T)?O[U]=T.slice():O[U]=T.clone(),!0;{const W=O[U];if(typeof T=="number"||typeof T=="boolean"){if(W!==T)return O[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(W.equals(T)===!1)return W.copy(T),!0}}return!1}function S(A){const F=A.uniforms;let N=0;const O=16;for(let U=0,W=F.length;U<W;U++){const V=Array.isArray(F[U])?F[U]:[F[U]];for(let Y=0,ut=V.length;Y<ut;Y++){const ft=V[Y],Q=Array.isArray(ft.value)?ft.value:[ft.value];for(let B=0,H=Q.length;B<H;B++){const z=Q[B],et=M(z),mt=N%O,D=mt%et.boundary,X=mt+D;N+=D,X!==0&&O-X<et.storage&&(N+=O-X),ft.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=N,N+=et.storage}}}const T=N%O;return T>0&&(N+=O-T),A.__size=N,A.__cache={},this}function M(A){const F={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(F.boundary=4,F.storage=4):A.isVector2?(F.boundary=8,F.storage=8):A.isVector3||A.isColor?(F.boundary=16,F.storage=12):A.isVector4?(F.boundary=16,F.storage=16):A.isMatrix3?(F.boundary=48,F.storage=48):A.isMatrix4?(F.boundary=64,F.storage=64):A.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(F.boundary=16,F.storage=A.byteLength):se("WebGLRenderer: Unsupported uniform value type.",A),F}function L(A){const F=A.target;F.removeEventListener("dispose",L);const N=u.indexOf(F.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[F.id]),delete o[F.id],delete c[F.id]}function P(){for(const A in o)s.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:m,update:d,dispose:P}}const IA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let la=null;function FA(){return la===null&&(la=new J1(IA,16,16,ar,ni),la.name="DFG_LUT",la.minFilter=On,la.magFilter=On,la.wrapS=ua,la.wrapT=ua,la.generateMipmaps=!1,la.needsUpdate=!0),la}class BA{constructor(t={}){const{canvas:n=CS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=wi}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const w=x,S=new Set([ep,tp,J0]),M=new Set([wi,da,wl,Rl,Q0,j0]),L=new Uint32Array(4),P=new Int32Array(4),A=new $;let F=null,N=null;const O=[],T=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let V=!1,Y=null,ut=null,ft=null,Q=null;this._outputColorSpace=fi;let B=0,H=0,z=null,et=-1,mt=null;const D=new ln,X=new ln;let _t=null;const Et=new ie(0);let Tt=0,tt=n.width,Mt=n.height,St=1,It=null,ne=null;const Qt=new ln(0,0,tt,Mt),Ue=new ln(0,0,tt,Mt);let oe=!1;const ge=new cp;let Ae=!1,_e=!1;const cn=new je,un=new $,fn=new ln,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function hn(){return z===null?St:1}let K=a;function ke(R,Z){return n.getContext(R,Z)}try{const R={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${k0}`),n.addEventListener("webglcontextlost",nn,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",di,!1),K===null){const Z="webgl2";if(K=ke(Z,R),K===null)throw ke(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw ue("WebGLRenderer: "+R.message),R}let Ne,I,E,J,rt,dt,At,Dt,ht,pt,Rt,Bt,Lt,Ut,$t,Jt,re,q,wt,vt,Ct,Ft,bt;function qt(){Ne=new FE(K),Ne.init(),Ct=new RA(K,Ne),I=new CE(K,Ne,t,Ct),E=new AA(K,Ne),I.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ut=K.createFramebuffer(),ft=K.createFramebuffer(),Q=K.createFramebuffer(),J=new HE(K),rt=new hA,dt=new wA(K,Ne,E,rt,I,Ct,J),At=new IE(W),Dt=new W2(K),Ft=new wE(K,Dt),ht=new BE(K,Dt,J,Ft),pt=new VE(K,ht,Dt,Ft,J),q=new GE(K,I,dt),$t=new DE(rt),Rt=new fA(W,At,Ne,I,Ft,$t),Bt=new PA(W,rt),Lt=new pA,Ut=new yA(Ne),re=new AE(W,At,E,pt,b,m),Jt=new TA(W,pt,I),bt=new OA(K,J,I,E),wt=new RE(K,Ne,J),vt=new zE(K,Ne,J),J.programs=Rt.programs,W.capabilities=I,W.extensions=Ne,W.properties=rt,W.renderLists=Lt,W.shadowMap=Jt,W.state=E,W.info=J}qt(),w!==wi&&(U=new WE(w,n.width,n.height,h,o,c));const Vt=new NA(W,K);this.xr=Vt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=Ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(R){R!==void 0&&(St=R,this.setSize(tt,Mt,!1))},this.getSize=function(R){return R.set(tt,Mt)},this.setSize=function(R,Z,ot=!0){if(Vt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=R,Mt=Z,n.width=Math.floor(R*St),n.height=Math.floor(Z*St),ot===!0&&(n.style.width=R+"px",n.style.height=Z+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(tt*St,Mt*St).floor()},this.setDrawingBufferSize=function(R,Z,ot){tt=R,Mt=Z,St=ot,n.width=Math.floor(R*ot),n.height=Math.floor(Z*ot),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(w===wi){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Qt)},this.setViewport=function(R,Z,ot,at){R.isVector4?Qt.set(R.x,R.y,R.z,R.w):Qt.set(R,Z,ot,at),E.viewport(D.copy(Qt).multiplyScalar(St).round())},this.getScissor=function(R){return R.copy(Ue)},this.setScissor=function(R,Z,ot,at){R.isVector4?Ue.set(R.x,R.y,R.z,R.w):Ue.set(R,Z,ot,at),E.scissor(X.copy(Ue).multiplyScalar(St).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(R){E.setScissorTest(oe=R)},this.setOpaqueSort=function(R){It=R},this.setTransparentSort=function(R){ne=R},this.getClearColor=function(R){return R.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ot=!0){let at=0;if(R){let st=!1;if(z!==null){const Pt=z.texture.format;st=S.has(Pt)}if(st){const Pt=z.texture.type,Gt=M.has(Pt),Nt=re.getClearColor(),Wt=re.getClearAlpha(),kt=Nt.r,te=Nt.g,fe=Nt.b;Gt?(L[0]=kt,L[1]=te,L[2]=fe,L[3]=Wt,K.clearBufferuiv(K.COLOR,0,L)):(P[0]=kt,P[1]=te,P[2]=fe,P[3]=Wt,K.clearBufferiv(K.COLOR,0,P))}else at|=K.COLOR_BUFFER_BIT}Z&&(at|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(at|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&K.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Y=R},this.dispose=function(){n.removeEventListener("webglcontextlost",nn,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",di,!1),re.dispose(),Lt.dispose(),Ut.dispose(),rt.dispose(),At.dispose(),pt.dispose(),Ft.dispose(),bt.dispose(),Rt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",_n),Vt.removeEventListener("sessionend",Fn),ii.stop()};function nn(R){R.preventDefault(),v_("WebGLRenderer: Context Lost."),V=!0}function Fe(){v_("WebGLRenderer: Context Restored."),V=!1;const R=J.autoReset,Z=Jt.enabled,ot=Jt.autoUpdate,at=Jt.needsUpdate,st=Jt.type;qt(),J.autoReset=R,Jt.enabled=Z,Jt.autoUpdate=ot,Jt.needsUpdate=at,Jt.type=st}function di(R){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pi(R){const Z=R.target;Z.removeEventListener("dispose",pi),xo(Z)}function xo(R){yo(R),rt.remove(R)}function yo(R){const Z=rt.get(R).programs;Z!==void 0&&(Z.forEach(function(ot){Rt.releaseProgram(ot)}),R.isShaderMaterial&&Rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ot,at,st,Pt){Z===null&&(Z=mn);const Gt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Nt=Ya(R,Z,ot,at,st);E.setMaterial(at,Gt);let Wt=ot.index,kt=1;if(at.wireframe===!0){if(Wt=ht.getWireframeAttribute(ot),Wt===void 0)return;kt=2}const te=ot.drawRange,fe=ot.attributes.position;let jt=te.start*kt,Re=(te.start+te.count)*kt;Pt!==null&&(jt=Math.max(jt,Pt.start*kt),Re=Math.min(Re,(Pt.start+Pt.count)*kt)),Wt!==null?(jt=Math.max(jt,0),Re=Math.min(Re,Wt.count)):fe!=null&&(jt=Math.max(jt,0),Re=Math.min(Re,fe.count));const an=Re-jt;if(an<0||an===1/0)return;Ft.setup(st,at,Nt,ot,Wt);let Ze,Be=wt;if(Wt!==null&&(Ze=Dt.get(Wt),Be=vt,Be.setIndex(Ze)),st.isMesh)at.wireframe===!0?(E.setLineWidth(at.wireframeLinewidth*hn()),Be.setMode(K.LINES)):Be.setMode(K.TRIANGLES);else if(st.isLine){let ze=at.linewidth;ze===void 0&&(ze=1),E.setLineWidth(ze*hn()),st.isLineSegments?Be.setMode(K.LINES):st.isLineLoop?Be.setMode(K.LINE_LOOP):Be.setMode(K.LINE_STRIP)}else st.isPoints?Be.setMode(K.POINTS):st.isSprite&&Be.setMode(K.TRIANGLES);if(st.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))Be.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const ze=st._multiDrawStarts,zt=st._multiDrawCounts,qn=st._multiDrawCount,xe=Wt?Dt.get(Wt).bytesPerElement:1,An=rt.get(at).currentProgram.getUniforms();for(let mi=0;mi<qn;mi++)An.setValue(K,"_gl_DrawID",mi),Be.render(ze[mi]/xe,zt[mi])}else if(st.isInstancedMesh)Be.renderInstances(jt,an,st.count);else if(ot.isInstancedBufferGeometry){const ze=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,zt=Math.min(ot.instanceCount,ze);Be.renderInstances(jt,an,zt)}else Be.render(jt,an)};function Mo(R,Z,ot){R.transparent===!0&&R.side===Ki&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,qa(R,Z,ot),R.side=As,R.needsUpdate=!0,qa(R,Z,ot),R.side=Ki):qa(R,Z,ot)}this.compile=function(R,Z,ot=null){ot===null&&(ot=R),N=Ut.get(ot),N.init(Z),T.push(N),ot.traverseVisible(function(st){st.isLight&&st.layers.test(Z.layers)&&(N.pushLight(st),st.castShadow&&N.pushShadow(st))}),R!==ot&&R.traverseVisible(function(st){st.isLight&&st.layers.test(Z.layers)&&(N.pushLight(st),st.castShadow&&N.pushShadow(st))}),N.setupLights();const at=new Set;return R.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Pt=st.material;if(Pt)if(Array.isArray(Pt))for(let Gt=0;Gt<Pt.length;Gt++){const Nt=Pt[Gt];Mo(Nt,ot,st),at.add(Nt)}else Mo(Pt,ot,st),at.add(Pt)}),N=T.pop(),at},this.compileAsync=function(R,Z,ot=null){const at=this.compile(R,Z,ot);return new Promise(st=>{function Pt(){if(at.forEach(function(Gt){rt.get(Gt).currentProgram.isReady()&&at.delete(Gt)}),at.size===0){st(R);return}setTimeout(Pt,10)}Ne.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let lr=null;function ea(R){lr&&lr(R)}function _n(){ii.stop()}function Fn(){ii.start()}const ii=new lx;ii.setAnimationLoop(ea),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(R){lr=R,Vt.setAnimationLoop(R),R===null?ii.stop():ii.start()},Vt.addEventListener("sessionstart",_n),Vt.addEventListener("sessionend",Fn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Y!==null&&Y.renderStart(R,Z);const ot=Vt.enabled===!0&&Vt.isPresenting===!0,at=U!==null&&(z===null||ot)&&U.begin(W,z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Z),Z=Vt.getCamera()),R.isScene===!0&&R.onBeforeRender(W,R,Z,z),N=Ut.get(R,T.length),N.init(Z),N.state.textureUnits=dt.getTextureUnits(),T.push(N),cn.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ge.setFromProjectionMatrix(cn,fa,Z.reversedDepth),_e=this.localClippingEnabled,Ae=$t.init(this.clippingPlanes,_e),F=Lt.get(R,O.length),F.init(),O.push(F),Vt.enabled===!0&&Vt.isPresenting===!0){const Gt=W.xr.getDepthSensingMesh();Gt!==null&&Cs(Gt,Z,-1/0,W.sortObjects)}Cs(R,Z,0,W.sortObjects),F.finish(),W.sortObjects===!0&&F.sort(It,ne,Z.reversedDepth),Qe=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Qe&&re.addToRenderList(F,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&$t.beginShadows();const st=N.state.shadowsArray;if(Jt.render(st,R,Z),Ae===!0&&$t.endShadows(),(at&&U.hasRenderPass())===!1){const Gt=F.opaque,Nt=F.transmissive;if(N.setupLights(),Z.isArrayCamera){const Wt=Z.cameras;if(Nt.length>0)for(let kt=0,te=Wt.length;kt<te;kt++){const fe=Wt[kt];Il(Gt,Nt,R,fe)}Qe&&re.render(R);for(let kt=0,te=Wt.length;kt<te;kt++){const fe=Wt[kt];Ol(F,R,fe,fe.viewport)}}else Nt.length>0&&Il(Gt,Nt,R,Z),Qe&&re.render(R),Ol(F,R,Z)}z!==null&&H===0&&(dt.updateMultisampleRenderTarget(z),dt.updateRenderTargetMipmap(z)),at&&U.end(W),R.isScene===!0&&R.onAfterRender(W,R,Z),Ft.resetDefaultState(),et=-1,mt=null,T.pop(),T.length>0?(N=T[T.length-1],dt.setTextureUnits(N.state.textureUnits),Ae===!0&&$t.setGlobalState(W.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?F=O[O.length-1]:F=null,Y!==null&&Y.renderEnd()};function Cs(R,Z,ot,at){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)N.pushLightProbeGrid(R);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ge.intersectsSprite(R)){at&&fn.setFromMatrixPosition(R.matrixWorld).applyMatrix4(cn);const Gt=pt.update(R),Nt=R.material;Nt.visible&&F.push(R,Gt,Nt,ot,fn.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ge.intersectsObject(R))){const Gt=pt.update(R),Nt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),fn.copy(R.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),fn.copy(Gt.boundingSphere.center)),fn.applyMatrix4(R.matrixWorld).applyMatrix4(cn)),Array.isArray(Nt)){const Wt=Gt.groups;for(let kt=0,te=Wt.length;kt<te;kt++){const fe=Wt[kt],jt=Nt[fe.materialIndex];jt&&jt.visible&&F.push(R,Gt,jt,ot,fn.z,fe)}}else Nt.visible&&F.push(R,Gt,Nt,ot,fn.z,null)}}const Pt=R.children;for(let Gt=0,Nt=Pt.length;Gt<Nt;Gt++)Cs(Pt[Gt],Z,ot,at)}function Ol(R,Z,ot,at){const{opaque:st,transmissive:Pt,transparent:Gt}=R;N.setupLightsView(ot),Ae===!0&&$t.setGlobalState(W.clippingPlanes,ot),at&&E.viewport(D.copy(at)),st.length>0&&Ds(st,Z,ot),Pt.length>0&&Ds(Pt,Z,ot),Gt.length>0&&Ds(Gt,Z,ot),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Il(R,Z,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[at.id]===void 0){const jt=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[at.id]=new Wn(1,1,{generateMipmaps:!0,type:jt?ni:wi,minFilter:er,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Pt=N.state.transmissionRenderTarget[at.id],Gt=at.viewport||D;Pt.setSize(Gt.z*W.transmissionResolutionScale,Gt.w*W.transmissionResolutionScale);const Nt=W.getRenderTarget(),Wt=W.getActiveCubeFace(),kt=W.getActiveMipmapLevel();W.setRenderTarget(Pt),W.getClearColor(Et),Tt=W.getClearAlpha(),Tt<1&&W.setClearColor(16777215,.5),W.clear(),Qe&&re.render(ot);const te=W.toneMapping;W.toneMapping=ha;const fe=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),N.setupLightsView(at),Ae===!0&&$t.setGlobalState(W.clippingPlanes,at),Ds(R,ot,at),dt.updateMultisampleRenderTarget(Pt),dt.updateRenderTargetMipmap(Pt),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Re=0,an=Z.length;Re<an;Re++){const Ze=Z[Re],{object:Be,geometry:ze,material:zt,group:qn}=Ze;if(zt.side===Ki&&Be.layers.test(at.layers)){const xe=zt.side;zt.side=ei,zt.needsUpdate=!0,Xa(Be,ot,at,ze,zt,qn),zt.side=xe,zt.needsUpdate=!0,jt=!0}}jt===!0&&(dt.updateMultisampleRenderTarget(Pt),dt.updateRenderTargetMipmap(Pt))}W.setRenderTarget(Nt,Wt,kt),W.setClearColor(Et,Tt),fe!==void 0&&(at.viewport=fe),W.toneMapping=te}function Ds(R,Z,ot){const at=Z.isScene===!0?Z.overrideMaterial:null;for(let st=0,Pt=R.length;st<Pt;st++){const Gt=R[st],{object:Nt,geometry:Wt,group:kt}=Gt;let te=Gt.material;te.allowOverride===!0&&at!==null&&(te=at),Nt.layers.test(ot.layers)&&Xa(Nt,Z,ot,Wt,te,kt)}}function Xa(R,Z,ot,at,st,Pt){R.onBeforeRender(W,Z,ot,at,st,Pt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),st.onBeforeRender(W,Z,ot,at,R,Pt),st.transparent===!0&&st.side===Ki&&st.forceSinglePass===!1?(st.side=ei,st.needsUpdate=!0,W.renderBufferDirect(ot,Z,at,st,R,Pt),st.side=As,st.needsUpdate=!0,W.renderBufferDirect(ot,Z,at,st,R,Pt),st.side=Ki):W.renderBufferDirect(ot,Z,at,st,R,Pt),R.onAfterRender(W,Z,ot,at,st,Pt)}function qa(R,Z,ot){Z.isScene!==!0&&(Z=mn);const at=rt.get(R),st=N.state.lights,Pt=N.state.shadowsArray,Gt=st.state.version,Nt=Rt.getParameters(R,st.state,Pt,Z,ot,N.state.lightProbeGridArray),Wt=Rt.getProgramCacheKey(Nt);let kt=at.programs;at.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,at.fog=Z.fog;const te=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;at.envMap=At.get(R.envMap||at.environment,te),at.envMapRotation=at.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",pi),kt=new Map,at.programs=kt);let fe=kt.get(Wt);if(fe!==void 0){if(at.currentProgram===fe&&at.lightsStateVersion===Gt)return ga(R,Nt),fe}else Nt.uniforms=Rt.getUniforms(R),Y!==null&&R.isNodeMaterial&&Y.build(R,ot,Nt),R.onBeforeCompile(Nt,W),fe=Rt.acquireProgram(Nt,Wt),kt.set(Wt,fe),at.uniforms=Nt.uniforms;const jt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=$t.uniform),ga(R,Nt),at.needsLights=Fl(R),at.lightsStateVersion=Gt,at.needsLights&&(jt.ambientLightColor.value=st.state.ambient,jt.lightProbe.value=st.state.probe,jt.directionalLights.value=st.state.directional,jt.directionalLightShadows.value=st.state.directionalShadow,jt.spotLights.value=st.state.spot,jt.spotLightShadows.value=st.state.spotShadow,jt.rectAreaLights.value=st.state.rectArea,jt.ltc_1.value=st.state.rectAreaLTC1,jt.ltc_2.value=st.state.rectAreaLTC2,jt.pointLights.value=st.state.point,jt.pointLightShadows.value=st.state.pointShadow,jt.hemisphereLights.value=st.state.hemi,jt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,jt.spotLightMatrix.value=st.state.spotLightMatrix,jt.spotLightMap.value=st.state.spotLightMap,jt.pointShadowMatrix.value=st.state.pointShadowMatrix),at.lightProbeGrid=N.state.lightProbeGridArray.length>0,at.currentProgram=fe,at.uniformsList=null,fe}function ma(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=wu.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function ga(R,Z){const ot=rt.get(R);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function Us(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;A.setFromMatrixPosition(Z.matrixWorld);for(let ot=0,at=R.length;ot<at;ot++){const st=R[ot];if(st.texture!==null&&st.boundingBox.containsPoint(A))return st}return null}function Ya(R,Z,ot,at,st){Z.isScene!==!0&&(Z=mn),dt.resetTextureUnits();const Pt=Z.fog,Gt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?Z.environment:null,Nt=z===null?W.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Te.workingColorSpace,Wt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,kt=At.get(at.envMap||Gt,Wt),te=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,fe=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),jt=!!ot.morphAttributes.position,Re=!!ot.morphAttributes.normal,an=!!ot.morphAttributes.color;let Ze=ha;at.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ze=W.toneMapping);const Be=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ze=Be!==void 0?Be.length:0,zt=rt.get(at),qn=N.state.lights;if(Ae===!0&&(_e===!0||R!==mt)){const Pe=R===mt&&at.id===et;$t.setState(at,R,Pe)}let xe=!1;at.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==qn.state.version||zt.outputColorSpace!==Nt||st.isBatchedMesh&&zt.batching===!1||!st.isBatchedMesh&&zt.batching===!0||st.isBatchedMesh&&zt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&zt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&zt.instancing===!1||!st.isInstancedMesh&&zt.instancing===!0||st.isSkinnedMesh&&zt.skinning===!1||!st.isSkinnedMesh&&zt.skinning===!0||st.isInstancedMesh&&zt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&zt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&zt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&zt.instancingMorph===!1&&st.morphTexture!==null||zt.envMap!==kt||at.fog===!0&&zt.fog!==Pt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==$t.numPlanes||zt.numIntersection!==$t.numIntersection)||zt.vertexAlphas!==te||zt.vertexTangents!==fe||zt.morphTargets!==jt||zt.morphNormals!==Re||zt.morphColors!==an||zt.toneMapping!==Ze||zt.morphTargetsCount!==ze||!!zt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,zt.__version=at.version);let An=zt.currentProgram;xe===!0&&(An=qa(at,Z,st),Y&&at.isNodeMaterial&&Y.onUpdateProgram(at,An,zt));let mi=!1,Gi=!1,gi=!1;const He=An.getUniforms(),sn=zt.uniforms;if(E.useProgram(An.program)&&(mi=!0,Gi=!0,gi=!0),at.id!==et&&(et=at.id,Gi=!0),zt.needsLights){const Pe=Us(N.state.lightProbeGridArray,st);zt.lightProbeGrid!==Pe&&(zt.lightProbeGrid=Pe,Gi=!0)}if(mi||mt!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),He.setValue(K,"projectionMatrix",R.projectionMatrix),He.setValue(K,"viewMatrix",R.matrixWorldInverse);const na=He.map.cameraPosition;na!==void 0&&na.setValue(K,un.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&He.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&He.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),mt!==R&&(mt=R,Gi=!0,gi=!0)}if(zt.needsLights&&(qn.state.directionalShadowMap.length>0&&He.setValue(K,"directionalShadowMap",qn.state.directionalShadowMap,dt),qn.state.spotShadowMap.length>0&&He.setValue(K,"spotShadowMap",qn.state.spotShadowMap,dt),qn.state.pointShadowMap.length>0&&He.setValue(K,"pointShadowMap",qn.state.pointShadowMap,dt)),st.isSkinnedMesh){He.setOptional(K,st,"bindMatrix"),He.setOptional(K,st,"bindMatrixInverse");const Pe=st.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),He.setValue(K,"boneTexture",Pe.boneTexture,dt))}st.isBatchedMesh&&(He.setOptional(K,st,"batchingTexture"),He.setValue(K,"batchingTexture",st._matricesTexture,dt),He.setOptional(K,st,"batchingIdTexture"),He.setValue(K,"batchingIdTexture",st._indirectTexture,dt),He.setOptional(K,st,"batchingColorTexture"),st._colorsTexture!==null&&He.setValue(K,"batchingColorTexture",st._colorsTexture,dt));const Vi=ot.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&q.update(st,ot,An),(Gi||zt.receiveShadow!==st.receiveShadow)&&(zt.receiveShadow=st.receiveShadow,He.setValue(K,"receiveShadow",st.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&Z.environment!==null&&(sn.envMapIntensity.value=Z.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=FA()),Gi){if(He.setValue(K,"toneMappingExposure",W.toneMappingExposure),zt.needsLights&&xn(sn,gi),Pt&&at.fog===!0&&Bt.refreshFogUniforms(sn,Pt),Bt.refreshMaterialUniforms(sn,at,St,Mt,N.state.transmissionRenderTarget[R.id]),zt.needsLights&&zt.lightProbeGrid){const Pe=zt.lightProbeGrid;sn.probesSH.value=Pe.texture,sn.probesMin.value.copy(Pe.boundingBox.min),sn.probesMax.value.copy(Pe.boundingBox.max),sn.probesResolution.value.copy(Pe.resolution)}wu.upload(K,ma(zt),sn,dt)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(wu.upload(K,ma(zt),sn,dt),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&He.setValue(K,"center",st.center),He.setValue(K,"modelViewMatrix",st.modelViewMatrix),He.setValue(K,"normalMatrix",st.normalMatrix),He.setValue(K,"modelMatrix",st.matrixWorld),at.uniformsGroups!==void 0){const Pe=at.uniformsGroups;for(let na=0,Za=Pe.length;na<Za;na++){const Ns=Pe[na];bt.update(Ns,An),bt.bind(Ns,An)}}return An}function xn(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Fl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,Z,ot){const at=rt.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),rt.get(R.texture).__webglTexture=Z,rt.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const ot=rt.get(R);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,ot=0){z=R,B=Z,H=ot;let at=null,st=!1,Pt=!1;if(R){const Nt=rt.get(R);if(Nt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(K.FRAMEBUFFER,Nt.__webglFramebuffer),D.copy(R.viewport),X.copy(R.scissor),_t=R.scissorTest,E.viewport(D),E.scissor(X),E.setScissorTest(_t),et=-1;return}else if(Nt.__webglFramebuffer===void 0)dt.setupRenderTarget(R);else if(Nt.__hasExternalTextures)dt.rebindTextures(R,rt.get(R.texture).__webglTexture,rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Nt.__boundDepthTexture!==te){if(te!==null&&rt.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Pt=!0);const kt=rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(kt[Z])?at=kt[Z][ot]:at=kt[Z],st=!0):R.samples>0&&dt.useMultisampledRTT(R)===!1?at=rt.get(R).__webglMultisampledFramebuffer:Array.isArray(kt)?at=kt[ot]:at=kt,D.copy(R.viewport),X.copy(R.scissor),_t=R.scissorTest}else D.copy(Qt).multiplyScalar(St).floor(),X.copy(Ue).multiplyScalar(St).floor(),_t=oe;if(ot!==0&&(at=ut),E.bindFramebuffer(K.FRAMEBUFFER,at)&&E.drawBuffers(R,at),E.viewport(D),E.scissor(X),E.setScissorTest(_t),st){const Nt=rt.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Nt.__webglTexture,ot)}else if(Pt){const Nt=Z;for(let Wt=0;Wt<R.textures.length;Wt++){const kt=rt.get(R.textures[Wt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Wt,kt.__webglTexture,ot,Nt)}}else if(R!==null&&ot!==0){const Nt=rt.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Nt.__webglTexture,ot)}et=-1},this.readRenderTargetPixels=function(R,Z,ot,at,st,Pt,Gt,Nt=0){if(!(R&&R.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt){E.bindFramebuffer(K.FRAMEBUFFER,Wt);try{const kt=R.textures[Nt],te=kt.format,fe=kt.type;if(R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Nt),!I.textureFormatReadable(te)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(fe)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-at&&ot>=0&&ot<=R.height-st&&K.readPixels(Z,ot,at,st,Ct.convert(te),Ct.convert(fe),Pt)}finally{const kt=z!==null?rt.get(z).__webglFramebuffer:null;E.bindFramebuffer(K.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ot,at,st,Pt,Gt,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt)if(Z>=0&&Z<=R.width-at&&ot>=0&&ot<=R.height-st){E.bindFramebuffer(K.FRAMEBUFFER,Wt);const kt=R.textures[Nt],te=kt.format,fe=kt.type;if(R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Nt),!I.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,jt),K.bufferData(K.PIXEL_PACK_BUFFER,Pt.byteLength,K.STREAM_READ),K.readPixels(Z,ot,at,st,Ct.convert(te),Ct.convert(fe),0);const Re=z!==null?rt.get(z).__webglFramebuffer:null;E.bindFramebuffer(K.FRAMEBUFFER,Re);const an=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await DS(K,an,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,jt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Pt),K.deleteBuffer(jt),K.deleteSync(an),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ot=0){const at=Math.pow(2,-ot),st=Math.floor(R.image.width*at),Pt=Math.floor(R.image.height*at),Gt=Z!==null?Z.x:0,Nt=Z!==null?Z.y:0;dt.setTexture2D(R,0),K.copyTexSubImage2D(K.TEXTURE_2D,ot,0,0,Gt,Nt,st,Pt),E.unbindTexture()},this.copyTextureToTexture=function(R,Z,ot=null,at=null,st=0,Pt=0){let Gt,Nt,Wt,kt,te,fe,jt,Re,an;const Ze=R.isCompressedTexture?R.mipmaps[Pt]:R.image;if(ot!==null)Gt=ot.max.x-ot.min.x,Nt=ot.max.y-ot.min.y,Wt=ot.isBox3?ot.max.z-ot.min.z:1,kt=ot.min.x,te=ot.min.y,fe=ot.isBox3?ot.min.z:0;else{const sn=Math.pow(2,-st);Gt=Math.floor(Ze.width*sn),Nt=Math.floor(Ze.height*sn),R.isDataArrayTexture?Wt=Ze.depth:R.isData3DTexture?Wt=Math.floor(Ze.depth*sn):Wt=1,kt=0,te=0,fe=0}at!==null?(jt=at.x,Re=at.y,an=at.z):(jt=0,Re=0,an=0);const Be=Ct.convert(Z.format),ze=Ct.convert(Z.type);let zt;Z.isData3DTexture?(dt.setTexture3D(Z,0),zt=K.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(dt.setTexture2DArray(Z,0),zt=K.TEXTURE_2D_ARRAY):(dt.setTexture2D(Z,0),zt=K.TEXTURE_2D),E.activeTexture(K.TEXTURE0),E.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(K.UNPACK_ALIGNMENT,Z.unpackAlignment);const qn=E.getParameter(K.UNPACK_ROW_LENGTH),xe=E.getParameter(K.UNPACK_IMAGE_HEIGHT),An=E.getParameter(K.UNPACK_SKIP_PIXELS),mi=E.getParameter(K.UNPACK_SKIP_ROWS),Gi=E.getParameter(K.UNPACK_SKIP_IMAGES);E.pixelStorei(K.UNPACK_ROW_LENGTH,Ze.width),E.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ze.height),E.pixelStorei(K.UNPACK_SKIP_PIXELS,kt),E.pixelStorei(K.UNPACK_SKIP_ROWS,te),E.pixelStorei(K.UNPACK_SKIP_IMAGES,fe);const gi=R.isDataArrayTexture||R.isData3DTexture,He=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const sn=rt.get(R),Vi=rt.get(Z),Pe=rt.get(sn.__renderTarget),na=rt.get(Vi.__renderTarget);E.bindFramebuffer(K.READ_FRAMEBUFFER,Pe.__webglFramebuffer),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let Za=0;Za<Wt;Za++)gi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,rt.get(R).__webglTexture,st,fe+Za),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,rt.get(Z).__webglTexture,Pt,an+Za)),K.blitFramebuffer(kt,te,Gt,Nt,jt,Re,Gt,Nt,K.DEPTH_BUFFER_BIT,K.NEAREST);E.bindFramebuffer(K.READ_FRAMEBUFFER,null),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(st!==0||R.isRenderTargetTexture||rt.has(R)){const sn=rt.get(R),Vi=rt.get(Z);E.bindFramebuffer(K.READ_FRAMEBUFFER,ft),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,Q);for(let Pe=0;Pe<Wt;Pe++)gi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,sn.__webglTexture,st,fe+Pe):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,sn.__webglTexture,st),He?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Vi.__webglTexture,Pt,an+Pe):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Vi.__webglTexture,Pt),st!==0?K.blitFramebuffer(kt,te,Gt,Nt,jt,Re,Gt,Nt,K.COLOR_BUFFER_BIT,K.NEAREST):He?K.copyTexSubImage3D(zt,Pt,jt,Re,an+Pe,kt,te,Gt,Nt):K.copyTexSubImage2D(zt,Pt,jt,Re,kt,te,Gt,Nt);E.bindFramebuffer(K.READ_FRAMEBUFFER,null),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else He?R.isDataTexture||R.isData3DTexture?K.texSubImage3D(zt,Pt,jt,Re,an,Gt,Nt,Wt,Be,ze,Ze.data):Z.isCompressedArrayTexture?K.compressedTexSubImage3D(zt,Pt,jt,Re,an,Gt,Nt,Wt,Be,Ze.data):K.texSubImage3D(zt,Pt,jt,Re,an,Gt,Nt,Wt,Be,ze,Ze):R.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Pt,jt,Re,Gt,Nt,Be,ze,Ze.data):R.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Pt,jt,Re,Ze.width,Ze.height,Be,Ze.data):K.texSubImage2D(K.TEXTURE_2D,Pt,jt,Re,Gt,Nt,Be,ze,Ze);E.pixelStorei(K.UNPACK_ROW_LENGTH,qn),E.pixelStorei(K.UNPACK_IMAGE_HEIGHT,xe),E.pixelStorei(K.UNPACK_SKIP_PIXELS,An),E.pixelStorei(K.UNPACK_SKIP_ROWS,mi),E.pixelStorei(K.UNPACK_SKIP_IMAGES,Gi),Pt===0&&Z.generateMipmaps&&K.generateMipmap(zt),E.unbindTexture()},this.initRenderTarget=function(R){rt.get(R).__webglFramebuffer===void 0&&dt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?dt.setTextureCube(R,0):R.isData3DTexture?dt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?dt.setTexture2DArray(R,0):dt.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){B=0,H=0,z=null,E.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),n.unpackColorSpace=Te._getUnpackColorSpace()}}const p1={type:"change"},hp={type:"start"},gx={type:"end"},gu=new op,m1=new Ha,zA=Math.cos(70*Y1.DEG2RAD),Rn=new $,ui=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fd=1e-6;class HA extends V2{constructor(t,n=null){super(t,n),this.state=Ye.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ga.ROTATE,MIDDLE:Ga.DOLLY,RIGHT:Ga.PAN},this.touches={ONE:ao.ROTATE,TWO:ao.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new ws,this._lastTargetPosition=new $,this._quat=new ws().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new k_,this._sphericalDelta=new k_,this._scale=1,this._panOffset=new $,this._rotateStart=new Kt,this._rotateEnd=new Kt,this._rotateDelta=new Kt,this._panStart=new Kt,this._panEnd=new Kt,this._panDelta=new Kt,this._dollyStart=new Kt,this._dollyEnd=new Kt,this._dollyDelta=new Kt,this._dollyDirection=new $,this._mouse=new Kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VA.bind(this),this._onPointerDown=GA.bind(this),this._onPointerUp=kA.bind(this),this._onContextMenu=QA.bind(this),this._onMouseWheel=qA.bind(this),this._onKeyDown=YA.bind(this),this._onTouchStart=ZA.bind(this),this._onTouchMove=KA.bind(this),this._onMouseDown=WA.bind(this),this._onMouseMove=XA.bind(this),this._interceptControlDown=jA.bind(this),this._interceptControlUp=$A.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(p1),this.update(),this.state=Ye.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;Rn.copy(n).sub(this.target),Rn.applyQuaternion(this._quat),this._spherical.setFromVector3(Rn),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=ui:a>Math.PI&&(a-=ui),o<-Math.PI?o+=ui:o>Math.PI&&(o-=ui),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(Rn.setFromSpherical(this._spherical),Rn.applyQuaternion(this._quatInverse),n.copy(this.target).add(Rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=Rn.length();u=this._clampDistance(h*this._scale);const m=h-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new $(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),u=Rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(gu.origin.copy(this.object.position),gu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gu.direction))<zA?this.object.lookAt(this.target):(m1.setFromNormalAndCoplanarPoint(this.object.up,this.target),gu.intersectPlane(m1,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Fd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fd||this._lastTargetPosition.distanceToSquared(this.target)>Fd?(this.dispatchEvent(p1),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ui/60*this.autoRotateSpeed*t:ui/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Rn.setFromMatrixColumn(n,0),Rn.multiplyScalar(-t),this._panOffset.add(Rn)}_panUp(t,n){this.screenSpacePanning===!0?Rn.setFromMatrixColumn(n,1):(Rn.setFromMatrixColumn(n,0),Rn.crossVectors(this.object.up,Rn)),Rn.multiplyScalar(t),this._panOffset.add(Rn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Rn.copy(o).sub(this.target);let c=Rn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/n.clientHeight),this._rotateUp(ui*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/n.clientHeight),this._rotateUp(ui*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Kt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function GA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function VA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function kA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gx),this.state=Ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function WA(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ga.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ye.DOLLY;break;case Ga.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ye.ROTATE}break;case Ga.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(hp)}function XA(s){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function qA(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(s.preventDefault(),this.dispatchEvent(hp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(gx))}function YA(s){this.enabled!==!1&&this._handleKeyDown(s)}function ZA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ao.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ye.TOUCH_ROTATE;break;case ao.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case ao.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ye.TOUCH_DOLLY_PAN;break;case ao.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(hp)}function KA(s){switch(this._trackPointer(s),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ye.NONE}}function QA(s){this.enabled!==!1&&s.preventDefault()}function jA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $A(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class JA extends Q1{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new vo;t.deleteAttribute("uv");const n=new U0({side:ei}),a=new U0,o=new T2(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const c=new Tn(t,n);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const u=new d2(t,a,6),h=new Xn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),u.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),u.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),u.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),u.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),u.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),u.setMatrixAt(5,h.matrix),this.add(u);const m=new Tn(t,eo(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const d=new Tn(t,eo(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new Tn(t,eo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Tn(t,eo(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const v=new Tn(t,eo(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const x=new Tn(t,eo(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(const n of t)n.dispose()}}function eo(s){return new S2({color:0,emissive:16777215,emissiveIntensity:s})}const Ru={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const tw=new Vu(-1,1,1,-1,0,1);class ew extends pa{constructor(){super(),this.setAttribute("position",new ta([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ta([0,2,0,0,2,0],2))}}const nw=new ew;class Xu{constructor(t){this._mesh=new Tn(nw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,tw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class vx extends or{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof In?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Nl.clone(t.uniforms),this.material=new In({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Xu(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class g1 extends or{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class iw extends or{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class aw{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new Kt);this._width=a.width,this._height=a.height,n=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vx(Ru),this.copyPass.material.blending=Ji,this.timer=new C2}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}g1!==void 0&&(u instanceof g1?a=!0:u instanceof iw&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Kt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sw extends or{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ie}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const rw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class po extends or{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new Kt(t.x,t.y):new Kt(256,256),this.clearColor=new ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(c,u,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new Wn(c,u,{type:ni});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const v=new Wn(c,u,{type:ni});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),c=Math.round(c/2),u=Math.round(u/2)}const h=rw;this.highPassUniforms=Nl.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new In({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Kt(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Nl.clone(Ru.uniforms),this.blendMaterial=new In({uniforms:this.copyUniforms,vertexShader:Ru.vertexShader,fragmentShader:Ru.fragmentShader,premultipliedAlpha:!0,blending:Wd,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ie,this._oldClearAlpha=1,this._basic=new lp,this._fsQuad=new Xu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new Kt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=po.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=po.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let o=0;o<t;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new In({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Kt(.5,.5)},direction:{value:new Kt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}}po.BlurDirectionX=new Kt(1,0);po.BlurDirectionY=new Kt(0,1);const vu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ow extends or{constructor(){super(),this.isOutputPass=!0,this.uniforms=Nl.clone(vu.uniforms),this.material=new ix({name:vu.name,uniforms:this.uniforms,vertexShader:vu.vertexShader,fragmentShader:vu.fragmentShader}),this._fsQuad=new Xu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Te.getTransfer(this._outputColorSpace)===Oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===X0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===q0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Y0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===co?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Z0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Cu={cols:33,rows:49,width:2.0015625000000004,height:3,camera:[.925,.654,5.166],target:[.525,-.046,-.034],data:new Float32Array([-.499,1.389,-.95,-.439,1.374,-.939,-.38,1.36,-.927,-.32,1.345,-.915,-.26,1.33,-.903,-.201,1.315,-.892,-.141,1.301,-.88,-.081,1.287,-.867,-.022,1.275,-.851,.037,1.264,-.834,.096,1.253,-.817,.156,1.242,-.801,.215,1.231,-.783,.274,1.221,-.765,.332,1.211,-.745,.391,1.202,-.726,.45,1.192,-.706,.508,1.183,-.686,.567,1.174,-.666,.625,1.165,-.646,.684,1.156,-.625,.742,1.147,-.604,.8,1.139,-.583,.858,1.13,-.56,.916,1.122,-.538,.973,1.115,-.514,1.03,1.107,-.49,1.087,1.1,-.465,1.143,1.093,-.438,1.199,1.087,-.41,1.253,1.081,-.38,1.307,1.075,-.348,1.36,1.069,-.315,-.518,1.336,-.922,-.458,1.322,-.91,-.398,1.308,-.898,-.339,1.294,-.885,-.279,1.279,-.873,-.219,1.265,-.861,-.16,1.251,-.847,-.1,1.239,-.831,-.041,1.229,-.814,.018,1.22,-.795,.077,1.21,-.777,.136,1.197,-.762,.195,1.183,-.748,.255,1.172,-.731,.314,1.161,-.713,.372,1.151,-.695,.431,1.141,-.676,.49,1.13,-.658,.549,1.121,-.639,.608,1.111,-.62,.666,1.101,-.6,.725,1.092,-.58,.783,1.083,-.56,.842,1.074,-.539,.9,1.065,-.518,.958,1.057,-.497,1.016,1.048,-.475,1.074,1.041,-.451,1.131,1.033,-.427,1.187,1.026,-.402,1.243,1.019,-.375,1.299,1.013,-.346,1.353,1.007,-.315,-.536,1.285,-.892,-.477,1.271,-.88,-.417,1.257,-.867,-.357,1.243,-.854,-.298,1.229,-.841,-.238,1.216,-.827,-.179,1.204,-.811,-.12,1.194,-.793,-.061,1.186,-.773,-.002,1.178,-.753,.057,1.167,-.736,.116,1.153,-.722,.176,1.138,-.709,.235,1.125,-.694,.294,1.113,-.679,.353,1.101,-.662,.413,1.09,-.644,.472,1.08,-.626,.53,1.069,-.608,.589,1.059,-.59,.648,1.049,-.572,.707,1.039,-.553,.766,1.029,-.534,.825,1.019,-.515,.883,1.01,-.495,.942,1,-.475,1,.991,-.454,1.058,.983,-.433,1.116,.974,-.411,1.174,.966,-.388,1.231,.959,-.364,1.288,.952,-.339,1.344,.945,-.311,-.555,1.234,-.861,-.495,1.22,-.848,-.436,1.207,-.834,-.376,1.194,-.82,-.317,1.181,-.806,-.257,1.169,-.79,-.198,1.16,-.771,-.14,1.152,-.751,-.081,1.146,-.73,-.022,1.136,-.712,.037,1.123,-.697,.097,1.108,-.683,.156,1.093,-.671,.215,1.079,-.657,.275,1.066,-.642,.334,1.054,-.625,.393,1.043,-.608,.452,1.032,-.591,.511,1.021,-.574,.57,1.01,-.556,.629,.999,-.539,.688,.988,-.521,.747,.978,-.503,.806,.967,-.485,.865,.957,-.467,.924,.947,-.448,.983,.937,-.429,1.041,.927,-.41,1.1,.918,-.39,1.158,.909,-.369,1.217,.9,-.348,1.274,.892,-.326,1.332,.885,-.302,-.574,1.184,-.828,-.514,1.171,-.814,-.455,1.159,-.799,-.395,1.146,-.784,-.336,1.134,-.768,-.277,1.125,-.75,-.218,1.118,-.729,-.16,1.113,-.707,-.101,1.104,-.688,-.042,1.092,-.672,.018,1.077,-.658,.077,1.062,-.646,.136,1.048,-.632,.196,1.035,-.617,.255,1.023,-.601,.314,1.011,-.585,.373,.999,-.568,.432,.987,-.552,.492,.976,-.535,.551,.964,-.518,.61,.953,-.502,.669,.941,-.485,.728,.93,-.468,.787,.919,-.451,.846,.908,-.433,.905,.897,-.416,.964,.886,-.398,1.023,.875,-.38,1.082,.865,-.362,1.141,.855,-.344,1.2,.845,-.324,1.258,.835,-.305,1.317,.826,-.284,-.593,1.136,-.793,-.533,1.124,-.778,-.474,1.112,-.762,-.414,1.1,-.746,-.355,1.091,-.728,-.297,1.084,-.707,-.239,1.08,-.684,-.18,1.072,-.664,-.121,1.06,-.648,-.061,1.046,-.634,-.002,1.031,-.621,.057,1.018,-.606,.117,1.006,-.591,.176,.994,-.574,.235,.986,-.555,.294,.973,-.539,.353,.959,-.524,.412,.947,-.509,.471,.934,-.493,.531,.922,-.477,.59,.91,-.461,.649,.898,-.444,.708,.886,-.428,.767,.874,-.412,.827,.862,-.395,.886,.85,-.379,.945,.839,-.362,1.004,.827,-.345,1.063,.816,-.328,1.122,.805,-.311,1.181,.794,-.294,1.24,.783,-.276,1.299,.772,-.258,-.612,1.089,-.757,-.552,1.078,-.74,-.493,1.067,-.724,-.434,1.056,-.706,-.375,1.049,-.686,-.317,1.045,-.662,-.259,1.04,-.641,-.2,1.029,-.624,-.14,1.014,-.61,-.081,1.001,-.596,-.022,.988,-.58,.038,.977,-.564,.097,.966,-.547,.156,.956,-.529,.215,.95,-.508,.274,.939,-.491,.333,.924,-.477,.392,.909,-.463,.451,.896,-.448,.511,.883,-.432,.57,.87,-.417,.629,.858,-.401,.688,.845,-.385,.747,.832,-.369,.807,.82,-.353,.866,.808,-.337,.925,.796,-.321,.984,.784,-.305,1.043,.772,-.289,1.102,.76,-.272,1.162,.748,-.256,1.221,.736,-.24,1.28,.724,-.223,-.631,1.043,-.718,-.572,1.033,-.701,-.513,1.023,-.684,-.454,1.014,-.665,-.395,1.008,-.643,-.338,1.005,-.619,-.279,.997,-.599,-.219,.984,-.585,-.16,.971,-.57,-.101,.959,-.554,-.042,.948,-.537,.018,.937,-.52,.077,.927,-.502,.136,.918,-.483,.195,.912,-.463,.254,.903,-.444,.313,.89,-.429,.372,.875,-.415,.431,.86,-.401,.49,.847,-.386,.55,.833,-.37,.609,.82,-.355,.668,.807,-.339,.727,.795,-.324,.786,.782,-.308,.846,.77,-.292,.905,.757,-.276,.964,.745,-.26,1.023,.733,-.244,1.082,.72,-.228,1.141,.708,-.212,1.201,.696,-.196,1.26,.683,-.18,-.65,.999,-.679,-.591,.99,-.66,-.532,.98,-.642,-.473,.972,-.623,-.415,.966,-.601,-.357,.963,-.577,-.298,.956,-.557,-.239,.943,-.542,-.18,.931,-.526,-.121,.921,-.508,-.062,.911,-.491,-.002,.9,-.474,.057,.889,-.457,.116,.88,-.438,.175,.873,-.418,.234,.866,-.398,.293,.855,-.381,.352,.841,-.366,.411,.826,-.353,.47,.811,-.338,.529,.798,-.323,.589,.785,-.307,.648,.773,-.291,.707,.761,-.275,.766,.748,-.259,.825,.736,-.243,.885,.724,-.227,.944,.712,-.211,1.003,.699,-.195,1.062,.687,-.179,1.121,.675,-.163,1.181,.663,-.147,1.24,.651,-.131,-.67,.957,-.637,-.611,.948,-.618,-.552,.939,-.599,-.493,.93,-.581,-.434,.923,-.56,-.376,.919,-.537,-.318,.914,-.515,-.259,.906,-.496,-.2,.896,-.478,-.141,.886,-.46,-.082,.877,-.442,-.023,.867,-.425,.037,.853,-.409,.096,.842,-.392,.155,.834,-.373,.214,.828,-.353,.273,.819,-.334,.332,.807,-.318,.391,.791,-.304,.45,.777,-.29,.509,.764,-.274,.569,.753,-.258,.628,.741,-.241,.687,.73,-.225,.746,.718,-.209,.805,.706,-.192,.865,.695,-.176,.924,.683,-.159,.983,.671,-.143,1.042,.659,-.127,1.101,.648,-.11,1.161,.636,-.094,1.22,.625,-.078,-.69,.917,-.593,-.631,.908,-.574,-.572,.899,-.556,-.513,.89,-.537,-.454,.881,-.518,-.395,.874,-.498,-.337,.868,-.477,-.278,.863,-.454,-.22,.855,-.435,-.161,.847,-.416,-.102,.838,-.397,-.043,.83,-.378,.016,.82,-.36,.076,.807,-.345,.135,.796,-.328,.194,.789,-.308,.253,.782,-.288,.312,.772,-.27,.371,.757,-.256,.43,.744,-.241,.489,.733,-.224,.549,.723,-.206,.608,.712,-.19,.667,.701,-.173,.726,.69,-.156,.785,.679,-.139,.845,.668,-.123,.904,.657,-.106,.963,.646,-.089,1.022,.635,-.073,1.082,.624,-.056,1.141,.612,-.04,1.2,.601,-.023,-.71,.88,-.548,-.651,.871,-.529,-.592,.862,-.51,-.533,.853,-.491,-.474,.843,-.473,-.415,.834,-.454,-.356,.826,-.435,-.298,.818,-.415,-.239,.811,-.395,-.18,.803,-.375,-.121,.796,-.355,-.062,.789,-.335,-.004,.784,-.314,.055,.773,-.297,.115,.761,-.28,.174,.752,-.262,.233,.744,-.242,.292,.736,-.223,.351,.724,-.207,.41,.713,-.19,.469,.702,-.174,.529,.691,-.157,.588,.68,-.14,.647,.669,-.123,.706,.659,-.106,.765,.648,-.089,.825,.637,-.073,.884,.625,-.056,.943,.614,-.039,1.002,.603,-.023,1.062,.592,-.006,1.121,.581,.01,1.18,.569,.027,-.731,.845,-.5,-.672,.836,-.481,-.613,.827,-.462,-.554,.818,-.444,-.495,.809,-.425,-.436,.799,-.406,-.377,.79,-.388,-.318,.781,-.369,-.259,.773,-.349,-.2,.766,-.329,-.141,.759,-.309,-.082,.752,-.289,-.024,.746,-.268,.035,.737,-.25,.094,.726,-.232,.153,.717,-.214,.212,.708,-.196,.272,.698,-.178,.331,.687,-.161,.39,.676,-.144,.449,.665,-.127,.509,.654,-.11,.568,.643,-.094,.627,.632,-.077,.686,.621,-.06,.746,.609,-.044,.805,.598,-.028,.864,.587,-.011,.923,.575,.005,.983,.563,.021,1.042,.552,.038,1.101,.54,.054,1.16,.528,.07,-.751,.812,-.451,-.692,.803,-.432,-.633,.795,-.413,-.574,.787,-.394,-.515,.778,-.375,-.456,.769,-.356,-.397,.76,-.337,-.339,.751,-.318,-.28,.742,-.299,-.221,.734,-.28,-.162,.726,-.26,-.103,.717,-.241,-.044,.708,-.222,.015,.698,-.205,.074,.688,-.187,.133,.678,-.17,.193,.667,-.152,.252,.656,-.135,.311,.645,-.118,.37,.634,-.102,.43,.623,-.085,.489,.611,-.069,.548,.6,-.053,.607,.588,-.037,.667,.576,-.021,.726,.564,-.005,.785,.552,.011,.845,.54,.026,.904,.528,.042,.963,.516,.057,1.023,.504,.073,1.082,.491,.088,1.141,.479,.104,-.772,.781,-.401,-.713,.772,-.382,-.654,.763,-.363,-.595,.754,-.345,-.536,.744,-.326,-.477,.735,-.308,-.418,.725,-.289,-.359,.716,-.271,-.3,.706,-.252,-.241,.697,-.234,-.182,.687,-.216,-.123,.676,-.198,-.064,.666,-.181,-.004,.655,-.164,.055,.644,-.147,.114,.633,-.13,.173,.622,-.114,.233,.61,-.098,.292,.598,-.082,.351,.587,-.066,.411,.575,-.051,.47,.562,-.035,.529,.55,-.02,.589,.538,-.005,.648,.525,.01,.708,.513,.025,.767,.5,.04,.827,.487,.055,.886,.475,.069,.945,.462,.084,1.005,.449,.098,1.064,.436,.112,1.124,.423,.127,-.792,.745,-.354,-.733,.735,-.336,-.674,.725,-.318,-.615,.715,-.3,-.556,.705,-.282,-.497,.694,-.264,-.438,.684,-.246,-.379,.674,-.229,-.32,.663,-.212,-.261,.652,-.195,-.201,.641,-.178,-.142,.63,-.161,-.083,.618,-.145,-.023,.606,-.129,.036,.595,-.114,.095,.583,-.098,.155,.57,-.083,.214,.558,-.068,.274,.546,-.053,.333,.533,-.039,.393,.521,-.024,.452,.508,-.01,.512,.495,.004,.572,.482,.018,.631,.469,.031,.691,.456,.045,.75,.443,.059,.81,.43,.072,.87,.417,.085,.929,.403,.099,.989,.39,.112,1.049,.377,.125,1.108,.364,.138,-.812,.703,-.312,-.753,.692,-.295,-.694,.681,-.278,-.635,.67,-.261,-.575,.659,-.244,-.516,.647,-.228,-.457,.636,-.211,-.398,.625,-.195,-.338,.613,-.179,-.279,.601,-.163,-.22,.589,-.148,-.16,.577,-.133,-.101,.565,-.118,-.041,.552,-.103,.019,.54,-.089,.078,.527,-.075,.138,.514,-.061,.197,.501,-.048,.257,.488,-.035,.317,.475,-.022,.377,.462,-.009,.436,.449,.004,.496,.436,.017,.556,.422,.029,.616,.409,.041,.676,.396,.054,.735,.382,.066,.795,.369,.078,.855,.356,.09,.915,.342,.102,.975,.329,.114,1.035,.316,.125,1.095,.303,.137,-.831,.654,-.278,-.772,.642,-.262,-.712,.63,-.246,-.653,.618,-.23,-.594,.606,-.215,-.534,.594,-.2,-.475,.582,-.185,-.415,.57,-.17,-.356,.558,-.155,-.296,.545,-.141,-.236,.532,-.127,-.177,.52,-.114,-.117,.507,-.101,-.057,.494,-.088,.003,.481,-.075,.063,.468,-.063,.123,.454,-.051,.182,.441,-.039,.242,.428,-.028,.302,.415,-.016,.362,.401,-.005,.422,.388,.006,.482,.375,.018,.542,.361,.029,.603,.348,.04,.663,.335,.051,.723,.321,.062,.783,.308,.073,.843,.295,.083,.903,.282,.094,.963,.268,.104,1.024,.255,.114,1.084,.242,.124,-.848,.599,-.253,-.789,.587,-.239,-.729,.574,-.224,-.67,.562,-.21,-.61,.549,-.196,-.55,.536,-.182,-.491,.524,-.169,-.431,.511,-.155,-.371,.498,-.143,-.311,.485,-.13,-.251,.472,-.118,-.191,.459,-.106,-.131,.446,-.095,-.071,.433,-.084,-.011,.42,-.073,.049,.406,-.063,.109,.393,-.053,.17,.38,-.042,.23,.367,-.032,.29,.354,-.022,.35,.34,-.012,.411,.327,-.003,.471,.314,.007,.531,.301,.017,.592,.288,.027,.652,.275,.037,.712,.261,.047,.773,.248,.056,.833,.236,.066,.894,.223,.075,.954,.21,.084,1.015,.197,.092,1.075,.185,.101,-.864,.54,-.239,-.804,.527,-.226,-.745,.514,-.213,-.685,.502,-.2,-.625,.489,-.188,-.565,.476,-.176,-.505,.463,-.164,-.445,.45,-.153,-.384,.437,-.142,-.324,.424,-.131,-.264,.411,-.121,-.204,.398,-.112,-.143,.385,-.102,-.083,.372,-.093,-.022,.359,-.084,.038,.346,-.075,.099,.333,-.066,.159,.32,-.057,.22,.307,-.049,.28,.294,-.04,.341,.281,-.031,.401,.268,-.022,.462,.255,-.013,.522,.243,-.004,.583,.23,.005,.643,.217,.013,.704,.205,.022,.765,.192,.03,.825,.18,.038,.886,.168,.046,.947,.156,.053,1.008,.144,.06,1.069,.132,.067,-.878,.479,-.236,-.818,.466,-.224,-.758,.453,-.213,-.698,.44,-.202,-.637,.428,-.191,-.577,.415,-.181,-.517,.402,-.171,-.456,.389,-.162,-.395,.376,-.154,-.335,.364,-.145,-.274,.351,-.137,-.213,.339,-.13,-.153,.326,-.122,-.092,.314,-.114,-.031,.301,-.107,.029,.289,-.099,.09,.276,-.091,.151,.264,-.083,.212,.251,-.075,.272,.238,-.067,.333,.226,-.058,.393,.213,-.05,.454,.2,-.041,.515,.188,-.033,.576,.176,-.026,.637,.164,-.018,.698,.152,-.011,.759,.14,-.004,.82,.129,.002,.881,.118,.009,.942,.107,.015,1.003,.095,.021,1.065,.084,.027,-.89,.418,-.243,-.829,.405,-.232,-.769,.392,-.222,-.708,.38,-.213,-.648,.367,-.205,-.587,.355,-.197,-.526,.343,-.19,-.465,.331,-.183,-.404,.319,-.176,-.343,.307,-.171,-.282,.296,-.165,-.221,.284,-.159,-.16,.272,-.152,-.099,.26,-.146,-.038,.248,-.139,.023,.236,-.132,.084,.224,-.124,.145,.211,-.117,.205,.199,-.109,.266,.186,-.1,.327,.173,-.092,.387,.161,-.084,.448,.149,-.076,.509,.137,-.069,.57,.126,-.063,.631,.114,-.056,.693,.103,-.05,.754,.093,-.044,.816,.083,-.04,.877,.073,-.034,.939,.062,-.029,1,.051,-.023,1.061,.04,-.017,-.9,.358,-.257,-.839,.346,-.248,-.779,.333,-.24,-.718,.322,-.234,-.656,.31,-.228,-.595,.298,-.222,-.534,.287,-.217,-.473,.276,-.211,-.411,.265,-.207,-.35,.255,-.205,-.288,.245,-.2,-.227,.233,-.195,-.166,.222,-.19,-.104,.211,-.184,-.043,.199,-.177,.018,.187,-.171,.079,.175,-.164,.14,.163,-.156,.2,.15,-.147,.261,.137,-.139,.321,.124,-.13,.382,.111,-.122,.443,.101,-.116,.505,.09,-.11,.566,.079,-.104,.627,.068,-.098,.689,.057,-.092,.75,.046,-.086,.811,.035,-.08,.872,.024,-.074,.934,.013,-.067,.995,.002,-.061,1.056,-.01,-.054,-.91,.299,-.274,-.848,.288,-.27,-.787,.277,-.266,-.725,.266,-.261,-.664,.255,-.257,-.603,.244,-.252,-.541,.233,-.248,-.48,.223,-.244,-.418,.212,-.24,-.357,.201,-.235,-.295,.191,-.231,-.234,.18,-.227,-.172,.169,-.222,-.111,.158,-.217,-.05,.147,-.211,.012,.136,-.205,.073,.124,-.199,.134,.112,-.192,.195,.1,-.185,.256,.088,-.177,.316,.075,-.168,.377,.062,-.16,.438,.051,-.153,.499,.04,-.147,.561,.029,-.141,.622,.018,-.135,.683,.006,-.128,.744,-.005,-.121,.805,-.017,-.114,.866,-.029,-.106,.927,-.041,-.098,.988,-.053,-.09,1.049,-.065,-.082,-.919,.239,-.289,-.857,.228,-.287,-.796,.218,-.284,-.734,.207,-.281,-.673,.196,-.277,-.611,.186,-.273,-.55,.175,-.27,-.488,.165,-.266,-.427,.154,-.262,-.365,.143,-.258,-.304,.133,-.254,-.242,.122,-.249,-.181,.112,-.245,-.119,.101,-.241,-.058,.09,-.236,.004,.079,-.231,.065,.068,-.226,.126,.057,-.221,.188,.046,-.215,.249,.034,-.209,.31,.022,-.202,.371,.01,-.194,.432,-.003,-.185,.493,-.014,-.178,.554,-.026,-.171,.615,-.038,-.163,.676,-.05,-.155,.736,-.062,-.146,.797,-.074,-.137,.858,-.087,-.128,.918,-.099,-.119,.979,-.112,-.11,1.039,-.124,-.101,-.929,.178,-.299,-.867,.167,-.296,-.806,.157,-.293,-.744,.146,-.29,-.683,.135,-.287,-.621,.125,-.284,-.56,.114,-.28,-.498,.104,-.277,-.437,.093,-.273,-.375,.083,-.269,-.314,.072,-.265,-.252,.062,-.262,-.191,.051,-.258,-.129,.04,-.254,-.067,.03,-.25,-.006,.019,-.246,.056,.009,-.242,.117,-.002,-.238,.179,-.013,-.235,.24,-.024,-.23,.302,-.035,-.225,.363,-.047,-.22,.424,-.059,-.211,.484,-.072,-.2,.545,-.084,-.191,.606,-.097,-.182,.666,-.109,-.172,.726,-.122,-.161,.787,-.135,-.151,.847,-.147,-.141,.907,-.16,-.131,.968,-.173,-.12,1.028,-.185,-.11,-.94,.116,-.3,-.878,.106,-.297,-.816,.095,-.293,-.755,.084,-.29,-.693,.074,-.287,-.632,.063,-.284,-.57,.053,-.28,-.509,.042,-.277,-.447,.032,-.273,-.386,.021,-.27,-.324,.01,-.266,-.263,0,-.262,-.201,-.011,-.259,-.14,-.021,-.255,-.078,-.032,-.252,-.017,-.042,-.248,.045,-.053,-.245,.106,-.064,-.242,.168,-.075,-.239,.229,-.085,-.237,.291,-.096,-.234,.352,-.107,-.232,.414,-.119,-.227,.475,-.132,-.216,.534,-.145,-.201,.594,-.158,-.189,.654,-.17,-.178,.715,-.183,-.167,.775,-.196,-.156,.835,-.209,-.145,.895,-.221,-.133,.955,-.234,-.122,1.015,-.246,-.11,-.95,.055,-.292,-.889,.045,-.288,-.827,.034,-.284,-.766,.024,-.281,-.704,.013,-.277,-.643,.003,-.274,-.581,-.008,-.27,-.52,-.019,-.266,-.458,-.029,-.263,-.397,-.04,-.259,-.335,-.05,-.256,-.274,-.061,-.252,-.212,-.071,-.249,-.151,-.082,-.245,-.089,-.093,-.242,-.028,-.103,-.238,.034,-.114,-.235,.095,-.125,-.232,.156,-.135,-.229,.218,-.146,-.226,.279,-.157,-.224,.34,-.168,-.221,.401,-.181,-.221,.463,-.194,-.219,.523,-.207,-.207,.581,-.219,-.188,.641,-.231,-.173,.701,-.244,-.165,.761,-.257,-.153,.822,-.27,-.141,.882,-.282,-.129,.941,-.294,-.116,1.001,-.306,-.1,-.962,-.004,-.274,-.9,-.014,-.27,-.838,-.025,-.266,-.777,-.035,-.262,-.715,-.046,-.258,-.654,-.056,-.255,-.592,-.067,-.251,-.531,-.077,-.247,-.469,-.087,-.243,-.408,-.098,-.239,-.346,-.108,-.236,-.285,-.119,-.232,-.223,-.129,-.228,-.162,-.14,-.224,-.1,-.15,-.221,-.039,-.161,-.217,.023,-.171,-.213,.084,-.182,-.209,.145,-.192,-.205,.207,-.202,-.201,.268,-.212,-.196,.329,-.22,-.189,.391,-.233,-.189,.448,-.253,-.205,.509,-.268,-.204,.569,-.28,-.189,.627,-.292,-.17,.687,-.305,-.158,.748,-.318,-.147,.807,-.33,-.133,.867,-.342,-.118,.926,-.353,-.1,.983,-.363,-.078,-.973,-.06,-.249,-.911,-.07,-.245,-.85,-.081,-.241,-.788,-.091,-.236,-.727,-.101,-.232,-.665,-.112,-.228,-.603,-.122,-.224,-.542,-.132,-.22,-.48,-.142,-.216,-.419,-.153,-.211,-.357,-.163,-.207,-.296,-.173,-.203,-.234,-.184,-.199,-.173,-.194,-.195,-.111,-.204,-.19,-.05,-.214,-.186,.012,-.224,-.181,.073,-.234,-.177,.135,-.244,-.171,.196,-.253,-.166,.258,-.259,-.156,.319,-.271,-.153,.379,-.288,-.161,.435,-.309,-.181,.494,-.327,-.191,.555,-.341,-.183,.614,-.353,-.166,.673,-.365,-.152,.733,-.377,-.137,.792,-.389,-.119,.85,-.399,-.1,.908,-.408,-.076,.963,-.413,-.048,-.984,-.113,-.217,-.922,-.123,-.213,-.861,-.133,-.208,-.799,-.143,-.204,-.737,-.153,-.199,-.676,-.164,-.195,-.614,-.174,-.19,-.553,-.184,-.186,-.491,-.194,-.181,-.43,-.204,-.177,-.368,-.213,-.172,-.307,-.223,-.167,-.245,-.233,-.162,-.184,-.243,-.157,-.122,-.253,-.152,-.061,-.262,-.147,.001,-.271,-.141,.063,-.281,-.137,.124,-.291,-.132,.186,-.297,-.123,.247,-.309,-.12,.308,-.326,-.125,.366,-.344,-.137,.424,-.363,-.152,.479,-.384,-.172,.54,-.401,-.172,.599,-.413,-.156,.658,-.424,-.138,.716,-.435,-.119,.775,-.445,-.098,.832,-.453,-.073,.887,-.457,-.044,.939,-.457,-.01,-.994,-.162,-.181,-.933,-.172,-.176,-.871,-.182,-.171,-.81,-.192,-.166,-.748,-.202,-.162,-.687,-.212,-.157,-.625,-.222,-.152,-.563,-.231,-.147,-.502,-.241,-.141,-.44,-.25,-.136,-.379,-.259,-.131,-.317,-.269,-.125,-.256,-.278,-.12,-.194,-.287,-.114,-.132,-.296,-.109,-.071,-.306,-.104,-.009,-.313,-.096,.052,-.323,-.091,.114,-.334,-.087,.175,-.347,-.086,.235,-.364,-.092,.294,-.383,-.103,.351,-.402,-.119,.408,-.422,-.136,.463,-.442,-.157,.524,-.46,-.156,.583,-.471,-.138,.641,-.481,-.117,.698,-.49,-.095,.755,-.497,-.07,.81,-.501,-.04,.863,-.501,-.006,.912,-.494,.032,-1.005,-.209,-.14,-.944,-.219,-.135,-.882,-.228,-.13,-.82,-.238,-.125,-.759,-.247,-.12,-.697,-.257,-.114,-.636,-.266,-.109,-.574,-.275,-.103,-.512,-.284,-.098,-.451,-.293,-.092,-.389,-.301,-.086,-.327,-.31,-.08,-.266,-.319,-.074,-.204,-.326,-.067,-.142,-.336,-.061,-.081,-.346,-.057,-.02,-.357,-.053,.042,-.37,-.052,.102,-.386,-.054,.162,-.403,-.061,.22,-.422,-.073,.277,-.441,-.09,.333,-.461,-.11,.388,-.481,-.135,.446,-.501,-.144,.507,-.517,-.136,.565,-.526,-.115,.622,-.535,-.092,.679,-.542,-.066,.734,-.546,-.036,.786,-.545,-.002,.835,-.538,.036,.882,-.526,.077,-1.016,-.253,-.097,-.954,-.263,-.092,-.892,-.272,-.087,-.831,-.281,-.081,-.769,-.29,-.075,-.707,-.299,-.069,-.646,-.307,-.063,-.584,-.316,-.057,-.522,-.324,-.051,-.461,-.333,-.045,-.399,-.34,-.038,-.337,-.349,-.032,-.276,-.358,-.026,-.214,-.368,-.022,-.153,-.38,-.018,-.092,-.393,-.017,-.031,-.408,-.018,.029,-.424,-.022,.089,-.442,-.031,.146,-.462,-.045,.203,-.481,-.064,.258,-.501,-.086,.311,-.52,-.113,.369,-.54,-.128,.429,-.559,-.127,.489,-.572,-.112,.546,-.58,-.088,.602,-.586,-.062,.657,-.59,-.032,.71,-.589,.002,.759,-.583,.04,.805,-.571,.08,.849,-.555,.122,-1.026,-.296,-.053,-.964,-.305,-.047,-.903,-.314,-.041,-.841,-.322,-.035,-.779,-.331,-.029,-.718,-.339,-.022,-.656,-.347,-.016,-.594,-.355,-.009,-.533,-.363,-.003,-.471,-.372,.003,-.409,-.381,.009,-.348,-.391,.013,-.286,-.403,.017,-.225,-.416,.018,-.164,-.43,.018,-.104,-.446,.014,-.044,-.463,.008,.015,-.482,-.003,.072,-.501,-.019,.128,-.521,-.039,.182,-.54,-.063,.235,-.559,-.092,.292,-.579,-.11,.351,-.599,-.114,.411,-.614,-.105,.47,-.625,-.085,.526,-.631,-.058,.581,-.634,-.028,.633,-.634,.006,.683,-.627,.044,.729,-.615,.084,.773,-.599,.126,.816,-.582,.167,-1.036,-.337,-.007,-.975,-.346,-.001,-.913,-.354,.005,-.851,-.362,.012,-.789,-.37,.019,-.728,-.378,.025,-.666,-.386,.032,-.604,-.394,.038,-.543,-.404,.043,-.481,-.414,.048,-.42,-.425,.051,-.359,-.438,.053,-.298,-.452,.053,-.237,-.468,.051,-.177,-.484,.045,-.118,-.503,.037,-.06,-.522,.024,-.003,-.541,.006,.053,-.561,-.016,.107,-.58,-.041,.159,-.598,-.071,.215,-.618,-.091,.273,-.638,-.1,.333,-.656,-.095,.393,-.668,-.079,.45,-.676,-.054,.504,-.679,-.024,.557,-.678,.009,.607,-.672,.047,.653,-.66,.088,.696,-.643,.13,.738,-.623,.172,.783,-.61,.213,-1.046,-.378,.039,-.985,-.386,.046,-.923,-.393,.053,-.861,-.401,.06,-.8,-.409,.066,-.738,-.418,.072,-.676,-.427,.078,-.615,-.437,.082,-.553,-.448,.086,-.492,-.461,.088,-.431,-.474,.089,-.37,-.489,.087,-.31,-.506,.083,-.251,-.524,.075,-.192,-.542,.064,-.134,-.562,.049,-.078,-.581,.03,-.023,-.601,.007,.03,-.619,-.02,.082,-.637,-.05,.137,-.656,-.073,.196,-.677,-.084,.255,-.696,-.084,.315,-.71,-.072,.373,-.72,-.049,.428,-.724,-.021,.481,-.723,.013,.531,-.717,.051,.577,-.705,.091,.62,-.687,.133,.66,-.665,.176,.704,-.649,.217,.751,-.639,.258,-1.057,-.417,.087,-.995,-.425,.093,-.933,-.433,.1,-.872,-.441,.107,-.81,-.45,.112,-.748,-.46,.117,-.687,-.471,.121,-.626,-.483,.123,-.564,-.497,.124,-.504,-.511,.123,-.443,-.527,.12,-.383,-.545,.113,-.324,-.563,.104,-.266,-.582,.091,-.209,-.602,.074,-.153,-.621,.053,-.099,-.64,.029,-.046,-.659,.001,.006,-.676,-.03,.06,-.695,-.054,.118,-.716,-.068,.177,-.735,-.071,.237,-.752,-.063,.296,-.763,-.043,.352,-.768,-.016,.405,-.768,.017,.455,-.762,.054,.501,-.75,.095,.543,-.731,.137,.583,-.708,.18,.626,-.69,.222,.672,-.678,.262,.721,-.672,.301,-1.067,-.457,.134,-1.005,-.465,.141,-.943,-.474,.146,-.882,-.483,.151,-.82,-.494,.155,-.759,-.506,.158,-.698,-.519,.159,-.637,-.533,.159,-.576,-.549,.156,-.516,-.566,.151,-.457,-.584,.143,-.398,-.603,.132,-.341,-.622,.117,-.284,-.642,.098,-.229,-.661,.076,-.175,-.68,.05,-.122,-.698,.022,-.071,-.715,-.01,-.017,-.734,-.035,.04,-.754,-.051,.099,-.774,-.058,.159,-.792,-.052,.218,-.805,-.036,.275,-.812,-.011,.329,-.813,.021,.379,-.808,.058,.426,-.795,.099,.468,-.776,.141,.507,-.752,.183,.548,-.732,.226,.593,-.718,.267,.641,-.71,.306,.692,-.709,.343,-1.077,-.497,.18,-1.015,-.507,.186,-.954,-.517,.19,-.892,-.529,.193,-.831,-.542,.195,-.77,-.556,.195,-.71,-.571,.193,-.649,-.587,.188,-.59,-.605,.181,-.531,-.623,.171,-.473,-.642,.158,-.416,-.662,.142,-.36,-.681,.121,-.305,-.701,.098,-.252,-.719,.071,-.199,-.737,.042,-.148,-.754,.01,-.094,-.773,-.016,-.038,-.793,-.034,.021,-.813,-.043,.081,-.832,-.041,.14,-.847,-.028,.198,-.856,-.005,.253,-.858,.026,.304,-.853,.062,.35,-.842,.102,.393,-.823,.144,.431,-.798,.187,.471,-.775,.229,.515,-.759,.271,.562,-.749,.311,.612,-.746,.349,.665,-.749,.382,-1.087,-.54,.224,-1.026,-.552,.228,-.965,-.564,.23,-.904,-.578,.23,-.843,-.593,.229,-.782,-.609,.225,-.723,-.626,.219,-.663,-.644,.211,-.605,-.663,.199,-.547,-.682,.184,-.491,-.702,.166,-.435,-.721,.144,-.381,-.74,.119,-.328,-.758,.092,-.276,-.776,.062,-.225,-.793,.03,-.171,-.811,.003,-.115,-.831,-.017,-.057,-.852,-.028,.003,-.871,-.029,.062,-.887,-.019,.121,-.898,.002,.176,-.902,.03,.228,-.899,.066,.275,-.888,.106,.318,-.87,.148,.357,-.846,.19,.395,-.82,.233,.437,-.801,.275,.483,-.788,.316,.532,-.783,.354,.584,-.785,.389,.639,-.793,.419,-1.098,-.587,.265,-1.037,-.6,.266,-.976,-.615,.265,-.916,-.63,.262,-.856,-.647,.257,-.796,-.665,.25,-.737,-.683,.239,-.679,-.703,.226,-.622,-.722,.209,-.566,-.742,.189,-.511,-.761,.166,-.457,-.78,.14,-.405,-.798,.112,-.353,-.815,.082,-.301,-.832,.05,-.248,-.85,.022,-.193,-.87,.001,-.135,-.891,-.012,-.076,-.91,-.016,-.016,-.928,-.008,.043,-.94,.009,.1,-.946,.036,.152,-.944,.07,.2,-.935,.109,.244,-.917,.151,.283,-.893,.193,.319,-.866,.236,.36,-.844,.278,.404,-.829,.32,.452,-.821,.359,.504,-.821,.395,.558,-.827,.427,.613,-.839,.452,-1.109,-.637,.301,-1.049,-.652,.299,-.989,-.668,.295,-.929,-.686,.288,-.87,-.704,.279,-.811,-.723,.267,-.754,-.742,.252,-.697,-.762,.233,-.642,-.781,.212,-.587,-.8,.188,-.534,-.819,.161,-.482,-.837,.131,-.43,-.854,.101,-.378,-.871,.069,-.325,-.889,.042,-.27,-.909,.019,-.213,-.929,.004,-.154,-.949,-.002,-.094,-.967,.003,-.035,-.981,.017,.022,-.989,.042,.076,-.989,.075,.125,-.981,.113,.169,-.965,.154,.209,-.941,.197,.245,-.913,.239,.283,-.888,.282,.326,-.87,.324,.373,-.86,.364,.423,-.857,.402,.477,-.862,.434,.532,-.872,.461,.589,-.888,.482,-1.122,-.69,.332,-1.062,-.707,.326,-1.002,-.725,.318,-.944,-.743,.307,-.886,-.763,.293,-.829,-.782,.277,-.772,-.802,.257,-.717,-.821,.234,-.664,-.84,.209,-.611,-.858,.181,-.559,-.875,.151,-.507,-.892,.119,-.455,-.909,.089,-.402,-.928,.061,-.348,-.947,.038,-.291,-.968,.021,-.232,-.988,.013,-.172,-1.007,.014,-.113,-1.022,.026,-.055,-1.032,.049,0,-1.034,.079,.05,-1.028,.117,.095,-1.013,.158,.135,-.99,.2,.171,-.962,.242,.208,-.934,.285,.249,-.913,.327,.294,-.9,.369,.343,-.895,.407,.396,-.897,.441,.451,-.906,.47,.507,-.92,.493,.565,-.939,.509,-1.135,-.746,.356,-1.076,-.764,.347,-1.018,-.783,.334,-.96,-.803,.319,-.904,-.822,.301,-.848,-.842,.28,-.793,-.861,.256,-.74,-.879,.23,-.687,-.897,.201,-.636,-.914,.17,-.584,-.931,.138,-.533,-.948,.108,-.48,-.967,.08,-.425,-.986,.056,-.368,-1.006,.038,-.31,-1.027,.028,-.251,-1.046,.027,-.191,-1.063,.036,-.132,-1.074,.056,-.077,-1.078,.085,-.025,-1.074,.121,.021,-1.061,.161,.062,-1.039,.203,.098,-1.012,.246,.133,-.981,.288,.172,-.957,.331,.216,-.941,.373,.264,-.933,.412,.315,-.933,.448,.369,-.939,.479,.426,-.953,.503,.483,-.971,.521,.541,-.992,.532,-1.15,-.804,.375,-1.092,-.823,.361,-1.035,-.842,.344,-.979,-.862,.325,-.924,-.881,.303,-.87,-.9,.278,-.816,-.919,.25,-.764,-.936,.22,-.713,-.953,.189,-.662,-.97,.157,-.61,-.987,.127,-.557,-1.005,.099,-.502,-1.025,.075,-.446,-1.045,.056,-.388,-1.065,.044,-.329,-1.085,.04,-.269,-1.103,.047,-.21,-1.115,.064,-.154,-1.121,.09,-.101,-1.119,.125,-.054,-1.108,.165,-.012,-1.089,.207,.025,-1.062,.249,.059,-1.03,.291,.097,-1.003,.334,.138,-.984,.376,.185,-.972,.417,.235,-.969,.454,.288,-.974,.487,.344,-.985,.513,.401,-1.002,.533,.459,-1.023,.545,.516,-1.047,.551,-1.167,-.863,.387,-1.11,-.882,.369,-1.054,-.902,.348,-1,-.921,.325,-.946,-.94,.299,-.893,-.958,.27,-.841,-.975,.24,-.79,-.992,.208,-.739,-1.009,.177,-.687,-1.026,.147,-.634,-1.044,.119,-.579,-1.063,.094,-.524,-1.083,.074,-.466,-1.104,.06,-.407,-1.124,.054,-.347,-1.142,.058,-.288,-1.156,.072,-.231,-1.164,.097,-.177,-1.164,.13,-.129,-1.155,.168,-.085,-1.137,.21,-.047,-1.112,.253,-.013,-1.08,.295,.022,-1.051,.337,.062,-1.028,.38,.106,-1.013,.421,.155,-1.006,.46,.207,-1.009,.494,.262,-1.018,.523,.319,-1.034,.544,.377,-1.054,.558,.435,-1.077,.565,.492,-1.102,.567,-1.185,-.922,.393,-1.13,-.942,.371,-1.076,-.961,.346,-1.022,-.979,.319,-.97,-.997,.29,-.918,-1.014,.26,-.867,-1.031,.227,-.816,-1.048,.196,-.764,-1.065,.166,-.711,-1.083,.138,-.657,-1.102,.113,-.601,-1.122,.092,-.544,-1.142,.076,-.485,-1.163,.068,-.425,-1.182,.07,-.366,-1.197,.081,-.308,-1.207,.103,-.253,-1.209,.134,-.204,-1.202,.172,-.159,-1.186,.213,-.12,-1.162,.256,-.085,-1.132,.298,-.052,-1.1,.34,-.014,-1.073,.383,.028,-1.054,.425,.075,-1.045,.465,.127,-1.044,.501,.181,-1.052,.531,.238,-1.066,.555,.295,-1.085,.571,.353,-1.107,.579,.41,-1.132,.582,.467,-1.158,.58,-1.206,-.981,.394,-1.152,-1,.368,-1.099,-1.018,.34,-1.047,-1.036,.31,-.995,-1.053,.279,-.944,-1.07,.247,-.892,-1.087,.216,-.84,-1.104,.186,-.788,-1.122,.158,-.734,-1.141,.132,-.678,-1.161,.11,-.622,-1.181,.094,-.563,-1.201,.084,-.504,-1.221,.083,-.444,-1.237,.092,-.385,-1.249,.111,-.33,-1.253,.14,-.279,-1.248,.176,-.233,-1.234,.217,-.193,-1.212,.259,-.157,-1.183,.302,-.124,-1.15,.343,-.089,-1.121,.386,-.049,-1.098,.428,-.004,-1.085,.47,.046,-1.081,.508,.1,-1.086,.54,.156,-1.098,.565,.213,-1.116,.583,.271,-1.138,.593,.328,-1.162,.597,.386,-1.188,.595,.442,-1.214,.59])},Bd=1/120,v1=4,lw=1.6,cw=2,uw=.65,fw=.5,_u=2;class hw{constructor(t,n,a,o){this.width=t,this.height=n,this.segX=a,this.segY=o,this.cols=a+1,this.rows=o+1,this.count=this.cols*this.rows,this.positions=new Float32Array(this.count*3),this.prev=new Float32Array(this.count*3),this.rest=new Float32Array(this.count*3),this.initPositions();const c=[],u=[],h=[],m=(d,g)=>g*this.cols+d;for(let d=0;d<this.rows;d++)for(let g=0;g<this.cols;g++)g+1<this.cols&&(c.push(m(g,d)),u.push(m(g+1,d)),h.push(1)),d+1<this.rows&&(c.push(m(g,d)),u.push(m(g,d+1)),h.push(1)),g+1<this.cols&&d+1<this.rows&&(c.push(m(g,d)),u.push(m(g+1,d+1)),h.push(.85),c.push(m(g+1,d)),u.push(m(g,d+1)),h.push(.85)),g+2<this.cols&&(c.push(m(g,d)),u.push(m(g+2,d)),h.push(.5)),d+2<this.rows&&(c.push(m(g,d)),u.push(m(g,d+2)),h.push(.5));this.cA=new Int32Array(c),this.cB=new Int32Array(u),this.cMul=new Float32Array(h),this.cRest=new Float32Array(c.length),this.computeRestLengths(),this.neighbors=new Int32Array(this.count*4).fill(-1);for(let d=0;d<this.rows;d++)for(let g=0;g<this.cols;g++){const _=m(g,d)*4;this.neighbors[_+0]=g>0?m(g-1,d):-1,this.neighbors[_+1]=g+1<this.cols?m(g+1,d):-1,this.neighbors[_+2]=d>0?m(g,d-1):-1,this.neighbors[_+3]=d+1<this.rows?m(g,d+1):-1}this.selfRadius=Math.min(this.width/this.segX,this.height/this.segY)*lw,this.selfHashInv=1/this.selfRadius}width;height;segX;segY;cols;rows;count;positions;prev;rest;cA;cB;cRest;cMul;neighbors;grab=null;accumulator=0;selfRadius=.1;selfHashInv=10;selfHash=new Map;smoothScratch=null;initPositions(){const t=Cu,n=t.cols,a=t.rows,o=this.width/t.width,c=this.height/t.height,u=(o+c)/2;let h=0;for(let m=0;m<this.rows;m++)for(let d=0;d<this.cols;d++){const g=d/this.segX*(n-1),_=m/this.segY*(a-1),v=Math.min(n-2,Math.floor(g)),x=Math.min(a-2,Math.floor(_)),b=g-v,w=_-x;for(let S=0;S<3;S++){const M=(x*n+v)*3+S,L=(x*n+v+1)*3+S,P=((x+1)*n+v)*3+S,A=((x+1)*n+v+1)*3+S,F=t.data[M]*(1-b)+t.data[L]*b,N=t.data[P]*(1-b)+t.data[A]*b,O=S===0?o:S===1?c:u;this.positions[h+S]=(F*(1-w)+N*w)*O}h+=3}this.prev.set(this.positions),this.rest.set(this.positions)}computeRestLengths(){const t=this.width/this.segX,n=this.height/this.segY;for(let a=0;a<this.cA.length;a++){const o=this.cA[a],c=this.cB[a],u=o%this.cols,h=Math.floor(o/this.cols),m=c%this.cols,d=Math.floor(c/this.cols),g=(u-m)*t,_=(h-d)*n;this.cRest[a]=Math.hypot(g,_)}}reset(){this.initPositions(),this.grab=null}poke(t=.5){const n=this.positions,a=Math.floor(Math.random()*this.count),o=n[a*3],c=n[a*3+1],u=n[a*3+2],h=new $(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(t*.09),m=Math.max(this.width,this.height)*.28;for(let d=0;d<this.count;d++){const g=n[d*3]-o,_=n[d*3+1]-c,v=n[d*3+2]-u,x=Math.sqrt(g*g+_*_+v*v);if(x>m)continue;const b=1-x/m,w=b*b*(3-2*b);this.prev[d*3]-=h.x*w,this.prev[d*3+1]-=h.y*w,this.prev[d*3+2]-=h.z*w}}startGrab(t,n){const a=this.positions,o=[],c=[],u=[];let h=1/0;for(let m=0;m<this.count;m++){const d=a[m*3]-t.x,g=a[m*3+1]-t.y,_=a[m*3+2]-t.z,v=Math.sqrt(d*d+g*g+_*_);if(h=Math.min(h,v),v>n)continue;const x=1-v/n,b=x*x*(3-2*x);o.push(m),c.push(b),u.push(d,g,_)}return o.length===0||h>n?!1:(this.grab={indices:o,weights:c,offsets:new Float32Array(u),target:t.clone()},!0)}moveGrab(t){this.grab&&this.grab.target.copy(t)}endGrab(){this.grab=null}get isGrabbing(){return this.grab!==null}cavityScratch=null;cavityScratch2=null;normalScratch=null;smoothNormals(t){const n=this.count,a=this.neighbors;(!this.normalScratch||this.normalScratch.length<n*3)&&(this.normalScratch=new Float32Array(n*3));const o=this.normalScratch;for(let c=0;c<n;c++){const u=c*3;let h=t[u]*2,m=t[u+1]*2,d=t[u+2]*2;for(let _=0;_<4;_++){const v=a[c*4+_];v<0||(h+=t[v*3],m+=t[v*3+1],d+=t[v*3+2])}const g=Math.hypot(h,m,d)||1;o[u]=h/g,o[u+1]=m/g,o[u+2]=d/g}t.set(o.subarray(0,n*3))}computeCavity(t,n,a=5){const o=this.positions,c=this.neighbors,u=this.count,h=1/Math.min(this.width/this.segX,this.height/this.segY);(!this.cavityScratch||this.cavityScratch.length<u)&&(this.cavityScratch=new Float32Array(u));const m=this.cavityScratch;for(let v=0;v<u;v++){let x=0,b=0,w=0,S=0;for(let N=0;N<4;N++){const O=c[v*4+N];O<0||(x+=o[O*3],b+=o[O*3+1],w+=o[O*3+2],S++)}if(S===0){m[v]=0;continue}const M=1/S,L=x*M-o[v*3],P=b*M-o[v*3+1],A=w*M-o[v*3+2],F=(L*t[v*3]+P*t[v*3+1]+A*t[v*3+2])*h;m[v]=Math.min(1,Math.max(0,F*a))}(!this.cavityScratch2||this.cavityScratch2.length<u)&&(this.cavityScratch2=new Float32Array(u));let d=m,g=this.cavityScratch2;const _=4;for(let v=0;v<_;v++){for(let b=0;b<u;b++){let w=0,S=0;for(let M=0;M<4;M++){const L=c[b*4+M];L<0||(w+=d[L],S++)}g[b]=S>0?d[b]*.3+w/S*.7:d[b]}const x=d;d=g,g=x}n.set(d.subarray(0,u))}step(t,n){this.accumulator+=Math.min(t,.05);let a=0;for(;this.accumulator>=Bd&&a<v1;)this.substep(n),this.accumulator-=Bd,a++;a===v1&&(this.accumulator=0),a>0&&(this.selfCollide(),this.smoothPass(fw))}smoothPass(t){const n=this.positions,a=this.neighbors,o=this.count;(!this.smoothScratch||this.smoothScratch.length<o*3)&&(this.smoothScratch=new Float32Array(o*3));const c=this.smoothScratch;for(let u=0;u<o;u++){let h=0,m=0,d=0,g=0;for(let x=0;x<4;x++){const b=a[u*4+x];b<0||(h+=n[b*3],m+=n[b*3+1],d+=n[b*3+2],g++)}const _=u*3;if(g===0){c[_]=n[_],c[_+1]=n[_+1],c[_+2]=n[_+2];continue}const v=1/g;c[_]=n[_]+(h*v-n[_])*t,c[_+1]=n[_+1]+(m*v-n[_+1])*t,c[_+2]=n[_+2]+(d*v-n[_+2])*t}n.set(c.subarray(0,o*3))}selfCollide(){const t=this.positions,n=this.count,a=this.cols,o=this.selfRadius,c=o*o,u=this.selfHashInv,h=this.selfHash;for(let m=0;m<cw;m++){h.clear();for(let d=0;d<n;d++){const g=Math.floor(t[d*3]*u),_=Math.floor(t[d*3+1]*u),v=Math.floor(t[d*3+2]*u),x=(g*73856093^_*19349663^v*83492791)>>>0;let b=h.get(x);b||(b=[],h.set(x,b)),b.push(d)}for(let d=0;d<n;d++){const g=d%a,_=d/a|0,v=Math.floor(t[d*3]*u),x=Math.floor(t[d*3+1]*u),b=Math.floor(t[d*3+2]*u);for(let w=-1;w<=1;w++)for(let S=-1;S<=1;S++)for(let M=-1;M<=1;M++){const L=((v+M)*73856093^(x+S)*19349663^(b+w)*83492791)>>>0,P=h.get(L);if(P)for(let A=0;A<P.length;A++){const F=P[A];if(F<=d)continue;const N=F%a,O=F/a|0,T=g-N,U=_-O;if(T>=-_u&&T<=_u&&U>=-_u&&U<=_u)continue;const W=t[F*3]-t[d*3],V=t[F*3+1]-t[d*3+1],Y=t[F*3+2]-t[d*3+2],ut=W*W+V*V+Y*Y;if(ut>=c||ut<1e-12)continue;const ft=Math.sqrt(ut),Q=(o-ft)/ft*.5*uw,B=W*Q,H=V*Q,z=Y*Q;t[d*3]-=B,t[d*3+1]-=H,t[d*3+2]-=z,t[F*3]+=B,t[F*3+1]+=H,t[F*3+2]+=z}}}}}substep(t){const n=this.positions,a=this.prev,o=this.count,c=Math.pow(1-Math.min(t.viscosity,.99),Bd*60);for(let x=0;x<o*3;x++){const b=n[x],w=(b-a[x])*c;a[x]=b,n[x]=b+w}if(t.smoothing>0){const x=t.smoothing*.5,b=this.neighbors;for(let w=0;w<o;w++){let S=0,M=0,L=0,P=0;for(let F=0;F<4;F++){const N=b[w*4+F];N<0||(S+=n[N*3],M+=n[N*3+1],L+=n[N*3+2],P++)}if(P===0)continue;const A=1/P;n[w*3]+=(S*A-n[w*3])*x,n[w*3+1]+=(M*A-n[w*3+1])*x,n[w*3+2]+=(L*A-n[w*3+2])*x}}const u=Math.max(1,Math.round(t.iterations)),h=t.stiffness,m=this.cA,d=this.cB,g=this.cRest,_=this.cMul,v=m.length;for(let x=0;x<u;x++){for(let b=0;b<v;b++){const w=m[b]*3,S=d[b]*3,M=n[S]-n[w],L=n[S+1]-n[w+1],P=n[S+2]-n[w+2],A=Math.sqrt(M*M+L*L+P*P);if(A<1e-9)continue;const F=(A-g[b])/A*.5*h*_[b],N=M*F,O=L*F,T=P*F;n[w]+=N,n[w+1]+=O,n[w+2]+=T,n[S]-=N,n[S+1]-=O,n[S+2]-=T}this.applyGrab()}}applyGrab(){const t=this.grab;if(!t)return;const n=this.positions;for(let a=0;a<t.indices.length;a++){const o=t.indices[a]*3,c=t.weights[a],u=t.target.x+t.offsets[a*3],h=t.target.y+t.offsets[a*3+1],m=t.target.z+t.offsets[a*3+2];n[o]+=(u-n[o])*c,n[o+1]+=(h-n[o+1])*c,n[o+2]+=(m-n[o+2])*c}}}function _x(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function dw(s,t,n){const a=new Float32Array(s*s),o=new Float32Array(t+1),c=new Float32Array(t+1);for(let h=0;h<=t;h++)o[h]=.85+n()*.3,c[h]=.85+n()*.3;const u=new Float32Array(s*s);for(let h=0;h<u.length;h++)u[h]=n();for(let h=0;h<s;h++){const m=h/s*t,d=Math.floor(m),g=m-d;for(let _=0;_<s;_++){const v=_/s*t,x=Math.floor(v),b=v-x,w=Math.sin(b*Math.PI)*o[x%(t+1)],S=Math.sin(g*Math.PI)*c[d%(t+1)],L=(x+d)%2===0?w*.62+S*.38:S*.62+w*.38,P=u[h*s+_];a[h*s+_]=L*.85+P*.15}}return a}function xx(s,t,n){const a=document.createElement("canvas");a.width=t,a.height=t;const o=a.getContext("2d"),c=o.createImageData(t,t),u=c.data,h=(d,g)=>s[(g+t)%t*t+(d+t)%t];for(let d=0;d<t;d++)for(let g=0;g<t;g++){const _=(h(g+1,d)-h(g-1,d))*n,v=(h(g,d+1)-h(g,d-1))*n,x=1/Math.sqrt(_*_+v*v+1),b=(d*t+g)*4;u[b]=Math.round((-_*x*.5+.5)*255),u[b+1]=Math.round((v*x*.5+.5)*255),u[b+2]=Math.round((x*.5+.5)*255),u[b+3]=255}o.putImageData(c,0,0);const m=new Ul(a);return m.wrapS=m.wrapT=Al,m.repeat.set(2,2),m.colorSpace=Hi,m}function pw(s,t,n,a){const o=new Float32Array(s*s),c=new Float32Array(s*s);for(let h=0;h<c.length;h++)c[h]=a();const u=new Float32Array(Math.ceil(t)+2);for(let h=0;h<u.length;h++)u[h]=.85+a()*.3;for(let h=0;h<s;h++){const m=h/s*n,d=Math.floor(m),g=m-d,_=d%2===0?0:.5;for(let v=0;v<s;v++){const x=v/s*t+_,b=Math.floor(x),w=x-b,S=Math.sin(w*Math.PI)*u[(b+1)%u.length],M=Math.sin(g*Math.PI),L=.5+.5*Math.cos((w-.5)*2*Math.PI),P=.55*S+.3*M*L;o[h*s+v]=P*.85+c[h*s+v]*.15}}return o}function mw(s){const t=s.size??512,n=_x(s.seed??20240),a=s.type==="woven"?dw(t,s.threads,n):pw(t,s.threads,Math.max(2,Math.round(s.threads*.8)),n);return xx(a,t,s.strength)}function gw(s,t=512,n=1.6){const a=document.createElement("canvas");a.width=t,a.height=t;const o=a.getContext("2d");o.drawImage(s,0,0,t,t);const c=o.getImageData(0,0,t,t).data,u=new Float32Array(t*t);for(let h=0;h<u.length;h++)u[h]=(c[h*4]*.2126+c[h*4+1]*.7152+c[h*4+2]*.0722)/255;return xx(u,t,n)}function vw(s=256,t=4242){const n=_x(t),a=document.createElement("canvas");a.width=s,a.height=s;const o=a.getContext("2d"),c=o.createImageData(s,s),u=c.data;for(let m=0;m<s*s;m++){const d=Math.round(215+(n()-.5)*70);u[m*4]=d,u[m*4+1]=d,u[m*4+2]=d,u[m*4+3]=255}o.putImageData(c,0,0);const h=new Ul(a);return h.wrapS=h.wrapT=Al,h.repeat.set(4,4),h.colorSpace=Hi,h}function _w(s){const t=vw(),n=new M2({color:new ie("#9aa1ad"),metalness:.95,roughness:.1,roughnessMap:t,normalScale:new Kt(.5,.5),clearcoat:1,clearcoatRoughness:.08,sheen:.35,sheenRoughness:.55,sheenColor:new ie("#cfd6ff"),iridescence:1,iridescenceIOR:1.35,iridescenceThicknessRange:[120,480],side:Ki}),a={uHoloIntensity:{value:1},uHoloScale:{value:110},uBandFreq:{value:3},uRadialFreq:{value:1.6},uSaturation:{value:.8},uHueShift:{value:0},uSparkle:{value:.6},uSpecTint:{value:.85},uSurfaceMap:{value:s},uSurfaceOpacity:{value:1},uCavityAmount:{value:0},uCornerRound:{value:0},uClothSize:{value:new Kt(3,3)},uWetMap:{value:null}};return n.alphaToCoverage=!0,n.onBeforeCompile=o=>{Object.assign(o.uniforms,a),o.vertexShader=`varying vec2 vHoloUv;
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
        }`)},{material:n,uniforms:a}}const no=2048;class xw{canvas;texture;decals=[];clothImage=null;selected=null;ctx;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=no,this.canvas.height=no,this.ctx=this.canvas.getContext("2d"),this.texture=new Ul(this.canvas),this.texture.colorSpace=fi,this.redraw()}setAspect(t){const n=t>=1?no:Math.round(no*t),a=t>=1?Math.round(no/t):no;return this.canvas.width===n&&this.canvas.height===a?(this.redraw(),!1):(this.canvas.width=n,this.canvas.height=a,this.texture.dispose(),this.texture=new Ul(this.canvas),this.texture.colorSpace=fi,this.redraw(),!0)}addDecal(t){const n={img:t,u:.5,v:.5,scale:.35,rotation:0};return this.decals.push(n),this.selected=n,this.redraw(),n}setClothImage(t){this.clothImage=t,this.redraw()}clear(){this.decals=[],this.clothImage=null,this.selected=null,this.redraw()}hitTest(t,n){const a=this.canvas.width,o=this.canvas.height,c=t*a,u=(1-n)*o;for(let h=this.decals.length-1;h>=0;h--){const m=this.decals[h],{w:d,h:g}=this.decalPixelSize(m),_=m.u*a,v=(1-m.v)*o,x=-m.rotation*Math.PI/180,b=c-_,w=u-v,S=b*Math.cos(x)-w*Math.sin(x),M=b*Math.sin(x)+w*Math.cos(x);if(Math.abs(S)<=d/2&&Math.abs(M)<=g/2)return m}return null}decalPixelSize(t){const n=this.canvas.width,a=t.img.naturalWidth||t.img.width||300,o=t.img.naturalHeight||t.img.height||300,c=t.scale*n,u=c*o/a;return{w:c,h:u}}redraw(){const{ctx:t,canvas:n}=this;t.clearRect(0,0,n.width,n.height),this.clothImage&&t.drawImage(this.clothImage,0,0,n.width,n.height);for(const a of this.decals){const{w:o,h:c}=this.decalPixelSize(a);t.save(),t.translate(a.u*n.width,(1-a.v)*n.height),t.rotate(a.rotation*Math.PI/180),t.drawImage(a.img,-o/2,-c/2,o,c),t.restore()}this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}const _1=`
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
`,yw=`
  
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
`,Mw=`
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
`,x1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;function y1(){return{tDepth:{value:null},focus:{value:5.2},focalDepth:{value:.15},aperture:{value:.4},maxblur:{value:.04},nearClip:{value:.1},farClip:{value:200}}}class Sw extends or{sceneRef;cameraRef;depthMaterial;depthRT;blurRT;gatherMat;compositeMat;fsQuad;clearColorTmp=new ie;constructor(t,n){super(),this.sceneRef=t,this.cameraRef=n,this.needsSwap=!0,this.depthMaterial=new ax,this.depthMaterial.depthPacking=yS,this.depthMaterial.blending=Ji,this.depthRT=new Wn(1,1,{minFilter:Dn,magFilter:Dn}),this.blurRT=new Wn(1,1,{minFilter:On,magFilter:On,type:ni}),this.gatherMat=new In({uniforms:{...y1(),tColor:{value:null}},vertexShader:x1,fragmentShader:_1+yw}),this.compositeMat=new In({uniforms:{...y1(),tSharp:{value:null},tBlur:{value:null}},vertexShader:x1,fragmentShader:_1+Mw}),this.fsQuad=new Xu(this.gatherMat)}setBoth(t,n){this.gatherMat.uniforms[t].value=n,this.compositeMat.uniforms[t].value=n}setParams(t,n,a){this.setBoth("aperture",t),this.setBoth("maxblur",n),this.setBoth("focalDepth",a)}setFocus(t){this.setBoth("focus",t)}setSize(t,n){this.depthRT.setSize(t,n),this.blurRT.setSize(Math.max(1,t>>1),Math.max(1,n>>1))}render(t,n,a){this.setBoth("nearClip",this.cameraRef.near),this.setBoth("farClip",this.cameraRef.far),t.getClearColor(this.clearColorTmp);const o=t.getClearAlpha(),c=t.autoClear;t.autoClear=!1,this.sceneRef.overrideMaterial=this.depthMaterial,t.setClearColor(16777215,1),t.setRenderTarget(this.depthRT),t.clear(),t.render(this.sceneRef,this.cameraRef),this.sceneRef.overrideMaterial=null,t.setClearColor(this.clearColorTmp,o),this.gatherMat.uniforms.tColor.value=a.texture,this.gatherMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.gatherMat,t.setRenderTarget(this.blurRT),this.fsQuad.render(t),this.compositeMat.uniforms.tSharp.value=a.texture,this.compositeMat.uniforms.tBlur.value=this.blurRT.texture,this.compositeMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.compositeMat,t.setRenderTarget(this.renderToScreen?null:n),this.fsQuad.render(t),t.autoClear=c}dispose(){this.depthMaterial.dispose(),this.depthRT.dispose(),this.blurRT.dispose(),this.gatherMat.dispose(),this.compositeMat.dispose(),this.fsQuad.dispose()}}var jn=Uint8Array,Ri=Uint16Array,dp=Int32Array,pp=new jn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),mp=new jn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),M1=new jn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),yx=function(s,t){for(var n=new Ri(31),a=0;a<31;++a)n[a]=t+=1<<s[a-1];for(var o=new dp(n[30]),a=1;a<30;++a)for(var c=n[a];c<n[a+1];++c)o[c]=c-n[a]<<5|a;return{b:n,r:o}},Mx=yx(pp,2),bw=Mx.b,I0=Mx.r;bw[28]=258,I0[258]=28;var Ew=yx(mp,0),S1=Ew.r,F0=new Ri(32768);for(var en=0;en<32768;++en){var Es=(en&43690)>>1|(en&21845)<<1;Es=(Es&52428)>>2|(Es&13107)<<2,Es=(Es&61680)>>4|(Es&3855)<<4,F0[en]=((Es&65280)>>8|(Es&255)<<8)>>1}var Tl=(function(s,t,n){for(var a=s.length,o=0,c=new Ri(t);o<a;++o)s[o]&&++c[s[o]-1];var u=new Ri(t);for(o=1;o<t;++o)u[o]=u[o-1]+c[o-1]<<1;var h;if(n){h=new Ri(1<<t);var m=15-t;for(o=0;o<a;++o)if(s[o])for(var d=o<<4|s[o],g=t-s[o],_=u[s[o]-1]++<<g,v=_|(1<<g)-1;_<=v;++_)h[F0[_]>>m]=d}else for(h=new Ri(a),o=0;o<a;++o)s[o]&&(h[o]=F0[u[s[o]-1]++]>>15-s[o]);return h}),sr=new jn(288);for(var en=0;en<144;++en)sr[en]=8;for(var en=144;en<256;++en)sr[en]=9;for(var en=256;en<280;++en)sr[en]=7;for(var en=280;en<288;++en)sr[en]=8;var Iu=new jn(32);for(var en=0;en<32;++en)Iu[en]=5;var Tw=Tl(sr,9,0),Aw=Tl(Iu,5,0),Sx=function(s){return(s+7)/8|0},bx=function(s,t,n){return(n==null||n>s.length)&&(n=s.length),new jn(s.subarray(t,n))},ww=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],qu=function(s,t,n){var a=new Error(t||ww[s]);if(a.code=s,Error.captureStackTrace&&Error.captureStackTrace(a,qu),!n)throw a;return a},za=function(s,t,n){n<<=t&7;var a=t/8|0;s[a]|=n,s[a+1]|=n>>8},xl=function(s,t,n){n<<=t&7;var a=t/8|0;s[a]|=n,s[a+1]|=n>>8,s[a+2]|=n>>16},zd=function(s,t){for(var n=[],a=0;a<s.length;++a)s[a]&&n.push({s:a,f:s[a]});var o=n.length,c=n.slice();if(!o)return{t:Tx,l:0};if(o==1){var u=new jn(n[0].s+1);return u[n[0].s]=1,{t:u,l:1}}n.sort(function(F,N){return F.f-N.f}),n.push({s:-1,f:25001});var h=n[0],m=n[1],d=0,g=1,_=2;for(n[0]={s:-1,f:h.f+m.f,l:h,r:m};g!=o-1;)h=n[n[d].f<n[_].f?d++:_++],m=n[d!=g&&n[d].f<n[_].f?d++:_++],n[g++]={s:-1,f:h.f+m.f,l:h,r:m};for(var v=c[0].s,a=1;a<o;++a)c[a].s>v&&(v=c[a].s);var x=new Ri(v+1),b=B0(n[g-1],x,0);if(b>t){var a=0,w=0,S=b-t,M=1<<S;for(c.sort(function(N,O){return x[O.s]-x[N.s]||N.f-O.f});a<o;++a){var L=c[a].s;if(x[L]>t)w+=M-(1<<b-x[L]),x[L]=t;else break}for(w>>=S;w>0;){var P=c[a].s;x[P]<t?w-=1<<t-x[P]++-1:++a}for(;a>=0&&w;--a){var A=c[a].s;x[A]==t&&(--x[A],++w)}b=t}return{t:new jn(x),l:b}},B0=function(s,t,n){return s.s==-1?Math.max(B0(s.l,t,n+1),B0(s.r,t,n+1)):t[s.s]=n},b1=function(s){for(var t=s.length;t&&!s[--t];);for(var n=new Ri(++t),a=0,o=s[0],c=1,u=function(m){n[a++]=m},h=1;h<=t;++h)if(s[h]==o&&h!=t)++c;else{if(!o&&c>2){for(;c>138;c-=138)u(32754);c>2&&(u(c>10?c-11<<5|28690:c-3<<5|12305),c=0)}else if(c>3){for(u(o),--c;c>6;c-=6)u(8304);c>2&&(u(c-3<<5|8208),c=0)}for(;c--;)u(o);c=1,o=s[h]}return{c:n.subarray(0,a),n:t}},yl=function(s,t){for(var n=0,a=0;a<t.length;++a)n+=s[a]*t[a];return n},Ex=function(s,t,n){var a=n.length,o=Sx(t+2);s[o]=a&255,s[o+1]=a>>8,s[o+2]=s[o]^255,s[o+3]=s[o+1]^255;for(var c=0;c<a;++c)s[o+c+4]=n[c];return(o+4+a)*8},E1=function(s,t,n,a,o,c,u,h,m,d,g){za(t,g++,n),++o[256];for(var _=zd(o,15),v=_.t,x=_.l,b=zd(c,15),w=b.t,S=b.l,M=b1(v),L=M.c,P=M.n,A=b1(w),F=A.c,N=A.n,O=new Ri(19),T=0;T<L.length;++T)++O[L[T]&31];for(var T=0;T<F.length;++T)++O[F[T]&31];for(var U=zd(O,7),W=U.t,V=U.l,Y=19;Y>4&&!W[M1[Y-1]];--Y);var ut=d+5<<3,ft=yl(o,sr)+yl(c,Iu)+u,Q=yl(o,v)+yl(c,w)+u+14+3*Y+yl(O,W)+2*O[16]+3*O[17]+7*O[18];if(m>=0&&ut<=ft&&ut<=Q)return Ex(t,g,s.subarray(m,m+d));var B,H,z,et;if(za(t,g,1+(Q<ft)),g+=2,Q<ft){B=Tl(v,x,0),H=v,z=Tl(w,S,0),et=w;var mt=Tl(W,V,0);za(t,g,P-257),za(t,g+5,N-1),za(t,g+10,Y-4),g+=14;for(var T=0;T<Y;++T)za(t,g+3*T,W[M1[T]]);g+=3*Y;for(var D=[L,F],X=0;X<2;++X)for(var _t=D[X],T=0;T<_t.length;++T){var Et=_t[T]&31;za(t,g,mt[Et]),g+=W[Et],Et>15&&(za(t,g,_t[T]>>5&127),g+=_t[T]>>12)}}else B=Tw,H=sr,z=Aw,et=Iu;for(var T=0;T<h;++T){var Tt=a[T];if(Tt>255){var Et=Tt>>18&31;xl(t,g,B[Et+257]),g+=H[Et+257],Et>7&&(za(t,g,Tt>>23&31),g+=pp[Et]);var tt=Tt&31;xl(t,g,z[tt]),g+=et[tt],tt>3&&(xl(t,g,Tt>>5&8191),g+=mp[tt])}else xl(t,g,B[Tt]),g+=H[Tt]}return xl(t,g,B[256]),g+H[256]},Rw=new dp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Tx=new jn(0),Cw=function(s,t,n,a,o,c){var u=c.z||s.length,h=new jn(a+u+5*(1+Math.ceil(u/7e3))+o),m=h.subarray(a,h.length-o),d=c.l,g=(c.r||0)&7;if(t){g&&(m[0]=c.r>>3);for(var _=Rw[t-1],v=_>>13,x=_&8191,b=(1<<n)-1,w=c.p||new Ri(32768),S=c.h||new Ri(b+1),M=Math.ceil(n/3),L=2*M,P=function(ge){return(s[ge]^s[ge+1]<<M^s[ge+2]<<L)&b},A=new dp(25e3),F=new Ri(288),N=new Ri(32),O=0,T=0,U=c.i||0,W=0,V=c.w||0,Y=0;U+2<u;++U){var ut=P(U),ft=U&32767,Q=S[ut];if(w[ft]=Q,S[ut]=ft,V<=U){var B=u-U;if((O>7e3||W>24576)&&(B>423||!d)){g=E1(s,m,0,A,F,N,T,W,Y,U-Y,g),W=O=T=0,Y=U;for(var H=0;H<286;++H)F[H]=0;for(var H=0;H<30;++H)N[H]=0}var z=2,et=0,mt=x,D=ft-Q&32767;if(B>2&&ut==P(U-D))for(var X=Math.min(v,B)-1,_t=Math.min(32767,U),Et=Math.min(258,B);D<=_t&&--mt&&ft!=Q;){if(s[U+z]==s[U+z-D]){for(var Tt=0;Tt<Et&&s[U+Tt]==s[U+Tt-D];++Tt);if(Tt>z){if(z=Tt,et=D,Tt>X)break;for(var tt=Math.min(D,Tt-2),Mt=0,H=0;H<tt;++H){var St=U-D+H&32767,It=w[St],ne=St-It&32767;ne>Mt&&(Mt=ne,Q=St)}}}ft=Q,Q=w[ft],D+=ft-Q&32767}if(et){A[W++]=268435456|I0[z]<<18|S1[et];var Qt=I0[z]&31,Ue=S1[et]&31;T+=pp[Qt]+mp[Ue],++F[257+Qt],++N[Ue],V=U+z,++O}else A[W++]=s[U],++F[s[U]]}}for(U=Math.max(U,V);U<u;++U)A[W++]=s[U],++F[s[U]];g=E1(s,m,d,A,F,N,T,W,Y,U-Y,g),d||(c.r=g&7|m[g/8|0]<<3,g-=7,c.h=S,c.p=w,c.i=U,c.w=V)}else{for(var U=c.w||0;U<u+d;U+=65535){var oe=U+65535;oe>=u&&(m[g/8|0]=d,oe=u),g=Ex(m,g+1,s.subarray(U,oe))}c.i=u}return bx(h,0,a+Sx(g)+o)},Dw=(function(){for(var s=new Int32Array(256),t=0;t<256;++t){for(var n=t,a=9;--a;)n=(n&1&&-306674912)^n>>>1;s[t]=n}return s})(),Uw=function(){var s=-1;return{p:function(t){for(var n=s,a=0;a<t.length;++a)n=Dw[n&255^t[a]]^n>>>8;s=n},d:function(){return~s}}},Nw=function(s,t,n,a,o){if(!o&&(o={l:1},t.dictionary)){var c=t.dictionary.subarray(-32768),u=new jn(c.length+s.length);u.set(c),u.set(s,c.length),s=u,o.w=c.length}return Cw(s,t.level==null?6:t.level,t.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):20:12+t.mem,n,a,o)},Ax=function(s,t){var n={};for(var a in s)n[a]=s[a];for(var a in t)n[a]=t[a];return n},Vn=function(s,t,n){for(;n;++t)s[t]=n,n>>>=8};function Lw(s,t){return Nw(s,t||{},0,0)}var wx=function(s,t,n,a){for(var o in s){var c=s[o],u=t+o,h=a;Array.isArray(c)&&(h=Ax(a,c[1]),c=c[0]),c instanceof jn?n[u]=[c,h]:(n[u+="/"]=[new jn(0),h],wx(c,u,n,a))}},T1=typeof TextEncoder<"u"&&new TextEncoder,Pw=typeof TextDecoder<"u"&&new TextDecoder,Ow=0;try{Pw.decode(Tx,{stream:!0}),Ow=1}catch{}function Fu(s,t){var n;if(T1)return T1.encode(s);for(var a=s.length,o=new jn(s.length+(s.length>>1)),c=0,u=function(d){o[c++]=d},n=0;n<a;++n){if(c+5>o.length){var h=new jn(c+8+(a-n<<1));h.set(o),o=h}var m=s.charCodeAt(n);m<128||t?u(m):m<2048?(u(192|m>>6),u(128|m&63)):m>55295&&m<57344?(m=65536+(m&1047552)|s.charCodeAt(++n)&1023,u(240|m>>18),u(128|m>>12&63),u(128|m>>6&63),u(128|m&63)):(u(224|m>>12),u(128|m>>6&63),u(128|m&63))}return bx(o,0,c)}var z0=function(s){var t=0;if(s)for(var n in s){var a=s[n].length;a>65535&&qu(9),t+=a+4}return t},A1=function(s,t,n,a,o,c,u,h){var m=a.length,d=n.extra,g=h&&h.length,_=z0(d);Vn(s,t,u!=null?33639248:67324752),t+=4,u!=null&&(s[t++]=20,s[t++]=n.os),s[t]=20,t+=2,s[t++]=n.flag<<1|(c<0&&8),s[t++]=o&&8,s[t++]=n.compression&255,s[t++]=n.compression>>8;var v=new Date(n.mtime==null?Date.now():n.mtime),x=v.getFullYear()-1980;if((x<0||x>119)&&qu(10),Vn(s,t,x<<25|v.getMonth()+1<<21|v.getDate()<<16|v.getHours()<<11|v.getMinutes()<<5|v.getSeconds()>>1),t+=4,c!=-1&&(Vn(s,t,n.crc),Vn(s,t+4,c<0?-c-2:c),Vn(s,t+8,n.size)),Vn(s,t+12,m),Vn(s,t+14,_),t+=16,u!=null&&(Vn(s,t,g),Vn(s,t+6,n.attrs),Vn(s,t+10,u),t+=14),s.set(a,t),t+=m,_)for(var b in d){var w=d[b],S=w.length;Vn(s,t,+b),Vn(s,t+2,S),s.set(w,t+4),t+=4+S}return g&&(s.set(h,t),t+=g),t},Iw=function(s,t,n,a,o){Vn(s,t,101010256),Vn(s,t+8,n),Vn(s,t+10,n),Vn(s,t+12,a),Vn(s,t+16,o)};function Fw(s,t){t||(t={});var n={},a=[];wx(s,"",n,t);var o=0,c=0;for(var u in n){var h=n[u],m=h[0],d=h[1],g=d.level==0?0:8,_=Fu(u),v=_.length,x=d.comment,b=x&&Fu(x),w=b&&b.length,S=z0(d.extra);v>65535&&qu(11);var M=g?Lw(m,d):m,L=M.length,P=Uw();P.p(m),a.push(Ax(d,{size:m.length,crc:P.d(),c:M,f:_,m:b,u:v!=u.length||b&&x.length!=w,o,compression:g})),o+=30+v+S+L,c+=76+2*(v+S)+(w||0)+L}for(var A=new jn(c+22),F=o,N=c-o,O=0;O<a.length;++O){var _=a[O];A1(A,_.o,_,_.f,_.u,_.c.length);var T=30+_.f.length+z0(_.extra);A.set(_.c,_.o+T),A1(A,o,_,_.f,_.u,_.c.length,_.o,_.m),o+=16+T+(_.m?_.m.length:0)}return Iw(A,o,a.length,N,F),A}class hi{constructor(t,n="",a=[],o=[]){this.name=t,this.type=n,this.metadata=a,this.properties=o,this.children=[]}addMetadata(t,n){this.metadata.push({key:t,value:n})}addProperty(t,n=[]){this.properties.push({property:t,metadata:n})}addChild(t){this.children.push(t)}toString(t=0){const n="	".repeat(t),a=this.metadata.map(g=>{const _=g.key,v=g.value;if(Array.isArray(v)){const x=[];return x.push(`${_} = {`),v.forEach(b=>{x.push(`${n}		${b}`)}),x.push(`${n}	}`),x.join(`
`)}else return`${_} = ${v}`}),o=a.length?` (
${a.map(g=>`${n}	${g}`).join(`
`)}
${n})`:"",c=this.properties.map(g=>{const _=g.property.replace(/\n/g,`
`+n+"	"),v=g.metadata.length?` (
${g.metadata.map(x=>`${n}		${x}`).join(`
`)}
${n}	)`:"";return`${n}	${_}${v}`}),u=this.children.map(g=>g.toString(t+1)),h=[];if(c.length>0&&h.push(...c),u.length>0){c.length>0&&h.push("");for(let g=0;g<u.length;g++)h.push(u[g]),g<u.length-1&&h.push("")}const m=h.join(`
`),d=this.type?this.type+" ":"";return`${n}def ${d}"${this.name}"${o}
${n}{
${m}
${n}}`}}class Bw{constructor(){this.textureUtils=null}setTextureUtils(t){this.textureUtils=t}parse(t,n,a,o){this.parseAsync(t,o).then(n).catch(a)}async parseAsync(t,n={}){n=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},n);const a=new Set,o={},c="model.usda";o[c]=null;const u=Hw(t,n.animations);n.animationTracks=u;const h=new hi("Root","Xform"),m=new hi("Scenes","Scope");m.addMetadata("kind",'"sceneLibrary"'),h.addChild(m);const d="Scene",g=new hi(d,"Xform");g.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${d}"`]),g.addMetadata("sceneName",`"${d}"`),n.includeAnchoringProperties&&(g.addProperty(`token preliminary:anchoring:type = "${n.ar.anchoring.type}"`),g.addProperty(`token preliminary:planeAnchoring:alignment = "${n.ar.planeAnchoring.alignment}"`)),m.addChild(g);let _;const v={},x={};t.isScene?Ux(t,g,v,a,o,n):Nx(t,g,v,a,o,n);const b=Kw(v,x,n.quickLookCompatible),w=u.size>0?{fps:n.animationFrameRate,endTimeCode:Gw(n.animations)*n.animationFrameRate}:null;_=Dx(w)+`
`+h.toString()+`

`+b.toString(),o[c]=Fu(_),_=null;for(const M in x){let L=x[M];if(L.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");L=await this.textureUtils.decompress(L)}const P=zw(L.image,L.flipY,n.maxTextureSize),A=L.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",F=await new Promise(N=>P.toBlob(N,A));o[`textures/Texture_${M}.${Cx(L)}`]=new Uint8Array(await F.arrayBuffer())}let S=0;for(const M in o){const L=o[M],P=34+M.length;S+=P;const A=S&63;if(A!==4){const F=64-A,N=new Uint8Array(F);o[M]=[L,{extra:{12345:N}}]}S=L.length}return Fw(o,{level:0})}}function Rx(s,t){let n=s.name;return n=n.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(n)&&(n="_"+n),n===""&&(s.isCamera?n="Camera":n="Object"),t.has(n)&&(n=n+"_"+s.id),t.add(n),n}function Cx(s){return s.userData.mimeType==="image/jpeg"?"jpg":"png"}function zw(s,t,n){if(typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&s instanceof ImageBitmap){const a=n/Math.max(s.width,s.height),o=document.createElement("canvas");o.width=s.width*Math.min(1,a),o.height=s.height*Math.min(1,a);const c=o.getContext("2d");return t===!0&&(c.translate(0,o.height),c.scale(1,-1)),c.drawImage(s,0,0,o.width,o.height),o}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const Ee=7;function Dx(s=null){return`#usda 1.0
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
`}function Hw(s,t){const n=new Map;for(let a=0;a<t.length;a++){const o=t[a];for(let c=0;c<o.tracks.length;c++){const u=o.tracks[c],h=Ie.parseTrackName(u.name),m=Ie.findNode(s,h.nodeName);if(m==null)continue;const d=h.propertyName;if(d!=="position"&&d!=="quaternion"&&d!=="scale")continue;let g=n.get(m);g===void 0&&(g={},n.set(m,g)),g[d]=u}}return n}function Gw(s){let t=0;for(let n=0;n<s.length;n++)s[n].duration>t&&(t=s[n].duration);return t}function w1(s,t,n,a){const o=n.times,c=n.values,u=[];for(let h=0;h<o.length;h++){const m=h*3;u.push(`${(o[h]*a).toPrecision(Ee)}: (${c[m].toPrecision(Ee)}, ${c[m+1].toPrecision(Ee)}, ${c[m+2].toPrecision(Ee)})`)}return`${t} ${s}.timeSamples = {
	${u.join(`,
	`)},
}`}function Vw(s,t){const n=s.times,a=s.values,o=[];for(let c=0;c<n.length;c++){const u=c*4;o.push(`${(n[c]*t).toPrecision(Ee)}: (${a[u+3].toPrecision(Ee)}, ${a[u].toPrecision(Ee)}, ${a[u+1].toPrecision(Ee)}, ${a[u+2].toPrecision(Ee)})`)}return`quatf xformOp:orient.timeSamples = {
	${o.join(`,
	`)},
}`}function Ux(s,t,n,a,o,c){for(let u=0,h=s.children.length;u<h;u++)Nx(s.children[u],t,n,a,o,c)}function Nx(s,t,n,a,o,c){if(s.visible===!1&&c.onlyVisible===!0)return;let u;if(s.isMesh){const h=s.geometry,m=Array.isArray(s.material),d=m?s.material:[s.material];for(let _=0;_<d.length;_++){const v=d[_];v.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),v.uuid in n||(n[v.uuid]=v)}const g=d.map(_=>n[_.uuid]);if(m===!1){const _=`geometries/Geometry_${h.id}.usda`;if(!(_ in o)){const v=Xw(h);o[_]=Fu(Dx()+`
`+v.toString())}}u=kw(s,h,g,a,c)}else s.isCamera?u=$w(s,a,c):u=Px(s,a,c);t.addChild(u),Ux(s,u,n,a,o,c)}function Lx(s,t,n){const a=n.animationTracks.get(t),o=t.pivot!==null;if(!o&&a===void 0){const d=Ww(t.matrix);s.addProperty(`matrix4d xformOp:transform = ${d}`),s.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}const c=n.animationFrameRate,u=t.position,h=t.quaternion,m=t.scale;if(a!==void 0&&a.position!==void 0?s.addProperty(w1("xformOp:translate","float3",a.position,c)):s.addProperty(`float3 xformOp:translate = (${u.x.toPrecision(Ee)}, ${u.y.toPrecision(Ee)}, ${u.z.toPrecision(Ee)})`),o){const d=t.pivot;s.addProperty(`float3 xformOp:translate:pivot = (${d.x.toPrecision(Ee)}, ${d.y.toPrecision(Ee)}, ${d.z.toPrecision(Ee)})`)}a!==void 0&&a.quaternion!==void 0?s.addProperty(Vw(a.quaternion,c)):s.addProperty(`quatf xformOp:orient = (${h.w.toPrecision(Ee)}, ${h.x.toPrecision(Ee)}, ${h.y.toPrecision(Ee)}, ${h.z.toPrecision(Ee)})`),a!==void 0&&a.scale!==void 0?s.addProperty(w1("xformOp:scale","float3",a.scale,c)):s.addProperty(`float3 xformOp:scale = (${m.x.toPrecision(Ee)}, ${m.y.toPrecision(Ee)}, ${m.z.toPrecision(Ee)})`),o?s.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):s.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function Px(s,t,n){const a=Rx(s,t);s.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s);const o=new hi(a,"Xform");return Lx(o,s,n),o}function kw(s,t,n,a,o){const c=Px(s,a,o);return n.length===1?(c.addMetadata("prepend references",`@./geometries/Geometry_${t.id}.usda@</Geometry>`),c.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),c.addProperty(`rel material:binding = </Materials/Material_${n[0].id}>`)):c.addChild(Ox(t,n)),c}function Ww(s){const t=s.elements;return`( ${xu(t,0)}, ${xu(t,4)}, ${xu(t,8)}, ${xu(t,12)} )`}function xu(s,t){return`(${s[t+0]}, ${s[t+1]}, ${s[t+2]}, ${s[t+3]})`}function Xw(s){const t=new hi("Geometry"),n=Ox(s);return t.addChild(n),t}function Ox(s,t=null){const n="Geometry",a=s.attributes,o=a.position.count,c=new hi(n,"Mesh");c.addProperty(`int[] faceVertexCounts = [${qw(s)}]`),c.addProperty(`int[] faceVertexIndices = [${Yw(s)}]`),c.addProperty(`normal3f[] normals = [${Hd(a.normal,o)}]`,['interpolation = "vertex"']),c.addProperty(`point3f[] points = [${Hd(a.position,o)}]`);for(let h=0;h<4;h++){const m=h>0?h:"",d=a["uv"+m];d!==void 0&&c.addProperty(`texCoord2f[] primvars:st${m} = [${Zw(d)}]`,['interpolation = "vertex"'])}const u=a.color;if(u!==void 0&&c.addProperty(`color3f[] primvars:displayColor = [${Hd(u,o)}]`,['interpolation = "vertex"']),c.addProperty('uniform token subdivisionScheme = "none"'),t!==null){const h=s.groups,m=(s.index!==null?s.index.count:a.position.count)/3;for(let d=0;d<h.length;d++){const g=h[d],_=t[g.materialIndex];if(_===void 0)continue;const v=Math.floor(g.start/3),x=Math.min(v+Math.floor(g.count/3),m),b=[];for(let S=v;S<x;S++)b.push(S);const w=new hi(`subset_${d}`,"GeomSubset");w.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),w.addProperty('uniform token elementType = "face"'),w.addProperty('uniform token familyName = "materialBind"'),w.addProperty(`int[] indices = [${b.join(", ")}]`),w.addProperty(`rel material:binding = </Materials/Material_${_.id}>`),c.addChild(w)}}return c}function qw(s){const t=s.index!==null?s.index.count:s.attributes.position.count;return Array(t/3).fill(3).join(", ")}function Yw(s){const t=s.index,n=[];if(t!==null)for(let a=0;a<t.count;a++)n.push(t.getX(a));else{const a=s.attributes.position.count;for(let o=0;o<a;o++)n.push(o)}return n.join(", ")}function Hd(s,t){if(s===void 0)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");const n=[];for(let a=0;a<s.count;a++){const o=s.getX(a),c=s.getY(a),u=s.getZ(a);n.push(`(${o.toPrecision(Ee)}, ${c.toPrecision(Ee)}, ${u.toPrecision(Ee)})`)}return n.join(", ")}function Zw(s){const t=[];for(let n=0;n<s.count;n++){const a=s.getX(n),o=s.getY(n);t.push(`(${a.toPrecision(Ee)}, ${1-o.toPrecision(Ee)})`)}return t.join(", ")}function Kw(s,t,n=!1){const a=new hi("Materials");for(const o in s){const c=s[o];a.addChild(Qw(c,t,n))}return a}function Qw(s,t,n=!1){const a=new hi(`Material_${s.id}`,"Material");function o(u,h,m){const d=u.source.id+"_"+u.flipY;t[d]=u;const g=u.channel>0?"st"+u.channel:"st",_={1e3:"repeat",1001:"clamp",1002:"mirror"},v=u.repeat.clone(),x=u.offset.clone(),b=u.rotation,w=Math.sin(b),S=Math.cos(b);x.y=1-x.y-v.y,n?(x.x=x.x/v.x,x.y=x.y/v.y,x.x+=w/v.x,x.y+=S-1):(x.x+=w*v.x,x.y+=(1-S)*v.y);const M=new hi(`PrimvarReader_${h}`,"Shader");M.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),M.addProperty("float2 inputs:fallback = (0.0, 0.0)"),M.addProperty(`string inputs:varname = "${g}"`),M.addProperty("float2 outputs:result");const L=new hi(`Transform2d_${h}`,"Shader");L.addProperty('uniform token info:id = "UsdTransform2d"'),L.addProperty(`float2 inputs:in.connect = </Materials/Material_${s.id}/PrimvarReader_${h}.outputs:result>`),L.addProperty(`float inputs:rotation = ${(b*(180/Math.PI)).toFixed(Ee)}`),L.addProperty(`float2 inputs:scale = ${C1(v)}`),L.addProperty(`float2 inputs:translation = ${C1(x)}`),L.addProperty("float2 outputs:result");const P=new hi(`Texture_${u.id}_${h}`,"Shader");if(P.addProperty('uniform token info:id = "UsdUVTexture"'),P.addProperty(`asset inputs:file = @textures/Texture_${d}.${Cx(u)}@`),P.addProperty(`float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${h}.outputs:result>`),m!==void 0){const A=h==="diffuse"?s.opacity:1;P.addProperty(`float4 inputs:scale = ${jw(m,A)}`)}if(h==="normal"){const A=s.normalScale.x;P.addProperty(`float4 inputs:scale = (${2*A}, ${2*A}, 2, 1)`),P.addProperty(`float4 inputs:bias = (${-A}, ${-A}, -1, 0)`)}return P.addProperty(`token inputs:sourceColorSpace = "${u.colorSpace===Hi?"raw":"sRGB"}"`),P.addProperty(`token inputs:wrapS = "${_[u.wrapS]}"`),P.addProperty(`token inputs:wrapT = "${_[u.wrapT]}"`),P.addProperty("float outputs:r"),P.addProperty("float outputs:g"),P.addProperty("float outputs:b"),P.addProperty("float3 outputs:rgb"),(s.transparent||s.alphaTest>0)&&P.addProperty("float outputs:a"),[M,L,P]}s.side===Ki&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",s);const c=new hi("PreviewSurface","Shader");if(c.addProperty('uniform token info:id = "UsdPreviewSurface"'),s.map!==null?(c.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`),s.transparent?c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`):s.alphaTest>0&&(c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`),c.addProperty(`float inputs:opacityThreshold = ${s.alphaTest}`)),o(s.map,"diffuse",s.color).forEach(h=>a.addChild(h))):c.addProperty(`color3f inputs:diffuseColor = ${R1(s.color)}`),s.emissive){const u=s.emissiveIntensity??1;if(s.emissiveMap){c.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`);const h=new ie(s.emissive.r*u,s.emissive.g*u,s.emissive.b*u);o(s.emissiveMap,"emissive",h).forEach(d=>a.addChild(d))}else s.emissive.getHex()>0&&c.addProperty(`color3f inputs:emissiveColor = ${R1(s.emissive)}`)}if(s.normalMap&&(c.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`),o(s.normalMap,"normal").forEach(h=>a.addChild(h))),s.aoMap){c.addProperty(`float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`);const u=s.aoMapIntensity??1,h=new ie(u,u,u);o(s.aoMap,"occlusion",h).forEach(d=>a.addChild(d))}if(s.roughnessMap){c.addProperty(`float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`);const u=new ie(s.roughness,s.roughness,s.roughness);o(s.roughnessMap,"roughness",u).forEach(m=>a.addChild(m))}else c.addProperty(`float inputs:roughness = ${s.roughness??1}`);if(s.metalnessMap){c.addProperty(`float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`);const u=new ie(s.metalness,s.metalness,s.metalness);o(s.metalnessMap,"metallic",u).forEach(m=>a.addChild(m))}else c.addProperty(`float inputs:metallic = ${s.metalness??0}`);if(s.alphaMap?(c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`),c.addProperty("float inputs:opacityThreshold = 0.0001"),o(s.alphaMap,"opacity").forEach(h=>a.addChild(h))):c.addProperty(`float inputs:opacity = ${s.opacity}`),s.isMeshPhysicalMaterial){if(s.clearcoatMap!==null){c.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatMap.id}_clearcoat.outputs:r>`);const u=new ie(s.clearcoat,s.clearcoat,s.clearcoat);o(s.clearcoatMap,"clearcoat",u).forEach(m=>a.addChild(m))}else c.addProperty(`float inputs:clearcoat = ${s.clearcoat}`);if(s.clearcoatRoughnessMap!==null){c.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);const u=new ie(s.clearcoatRoughness,s.clearcoatRoughness,s.clearcoatRoughness);o(s.clearcoatRoughnessMap,"clearcoatRoughness",u).forEach(m=>a.addChild(m))}else c.addProperty(`float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`);c.addProperty(`float inputs:ior = ${s.ior}`)}return c.addProperty("int inputs:useSpecularWorkflow = 0"),c.addProperty("token outputs:surface"),a.addChild(c),a.addProperty(`token outputs:surface.connect = </Materials/Material_${s.id}/PreviewSurface.outputs:surface>`),a}function R1(s){return`(${s.r}, ${s.g}, ${s.b})`}function jw(s,t=1){return`(${s.r}, ${s.g}, ${s.b}, ${t})`}function C1(s){return`(${s.x}, ${s.y})`}function $w(s,t,n){const a=Rx(s,t);s.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s);const o=new hi(a,"Camera");Lx(o,s,n);const c=s.isOrthographicCamera?"orthographic":"perspective";o.addProperty(`token projection = "${c}"`);const u=`(${s.near.toPrecision(Ee)}, ${s.far.toPrecision(Ee)})`;o.addProperty(`float2 clippingRange = ${u}`);let h;s.isOrthographicCamera?h=((Math.abs(s.left)+Math.abs(s.right))*10).toPrecision(Ee):h=s.getFilmWidth().toPrecision(Ee),o.addProperty(`float horizontalAperture = ${h}`);let m;if(s.isOrthographicCamera?m=((Math.abs(s.top)+Math.abs(s.bottom))*10).toPrecision(Ee):m=s.getFilmHeight().toPrecision(Ee),o.addProperty(`float verticalAperture = ${m}`),s.isPerspectiveCamera){const d=s.getFocalLength().toPrecision(Ee);o.addProperty(`float focalLength = ${d}`);const g=s.focus.toPrecision(Ee);o.addProperty(`float focusDistance = ${g}`)}return o}class Jw{texture;canvas;ctx;size;beads=[];stains=[];constructor(t=256){this.size=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=t,this.ctx=this.canvas.getContext("2d"),this.ctx.clearRect(0,0,t,t),this.texture=new Ul(this.canvas),this.texture.colorSpace=Hi,this.texture.wrapS=this.texture.wrapT=ua}get active(){return this.beads.length>0||this.stains.length>0}clear(){this.beads=[],this.stains=[],this.redraw()}splash(t,n=16){const a=t.bead/(t.bead+t.absorb+.001);for(let o=0;o<n;o++){const c=.12+Math.random()*.76,u=.05+Math.random()*.32;Math.random()<a?this.beads.push({u:c,v:u,r:.012+Math.random()*.018,life:1}):this.stains.push({u:c,v:u,r:.02,max:.05+Math.random()*.06,age:0,life:5.5+Math.random()*3})}}update(t,n,a){for(const c of this.beads){const u=a(Math.min(1,c.u+.02),c.v),h=a(Math.max(0,c.u-.02),c.v),m=a(c.u,Math.min(1,c.v+.02)),d=a(c.u,Math.max(0,c.v-.02));let g=u-h,_=m-d;const v=Math.hypot(g,_)||1e-5,x=Math.min(1,v*30),b=t*(.05+x*.9);c.u-=g/v*b,c.v-=_/v*b,n.absorb>.3&&Math.random()<.25&&this.stains.push({u:c.u,v:c.v,r:c.r*.6,max:c.r*.9,age:0,life:2+Math.random()*2}),c.life-=t*.04}this.beads=this.beads.filter(c=>c.u>-.03&&c.u<1.03&&c.v>-.03&&c.v<1.06&&c.life>0);for(const c of this.stains)c.age+=t,c.r=Math.min(c.max,c.r+t*.006*(.4+n.absorb));this.stains=this.stains.filter(c=>c.age<c.life),this.redraw()}redraw(){const t=this.size,n=this.ctx;n.clearRect(0,0,t,t),n.globalCompositeOperation="lighter";for(const a of this.stains){const o=a.age/a.life,c=(o<.5?1:1-(o-.5)/.5)*.55,u=a.u*t,h=a.v*t,m=Math.max(2,a.r*t),d=n.createRadialGradient(u,h,0,u,h,m);d.addColorStop(0,`rgba(255,0,0,${c})`),d.addColorStop(1,"rgba(255,0,0,0)"),n.fillStyle=d,n.beginPath(),n.arc(u,h,m,0,Math.PI*2),n.fill()}for(const a of this.beads){const o=a.u*t,c=a.v*t,u=Math.max(2,a.r*t),h=Math.max(0,Math.min(1,a.life)),m=n.createRadialGradient(o,c,0,o,c,u);m.addColorStop(0,`rgba(120,255,120,${h})`),m.addColorStop(.6,`rgba(60,200,60,${h*.5})`),m.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=m,n.beginPath(),n.arc(o,c,u,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over",this.texture.needsUpdate=!0}}const tR={AgX:co,ACES:zu,Neutral:Hu},yu=5.4,eR=72,D1=new ie(16777215),nR=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,iR=s=>1-Math.pow(1-s,3),aR={uniforms:{tDiffuse:{value:null},uAmount:{value:.08},uTime:{value:0}},vertexShader:`
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
  `};class sR{constructor(t){this.host=t;const n=t.clientWidth||window.innerWidth,a=t.clientHeight||window.innerHeight;this.renderer=new BA({antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(n,a),this.renderer.toneMapping=co,this.renderer.toneMappingExposure=1.1,t.appendChild(this.renderer.domElement),this.renderer.xr.enabled=!0,this.scene=new Q1,this.scene.background=this.background,this.camera=new Ai(38,n/a,.1,200);{const x=new $(...Cu.camera),b=new $(...Cu.target);x.sub(b).multiplyScalar(.56).add(b),this.camera.position.copy(x),this.defaultCamPos.copy(x)}const o=new L0(this.renderer),c=o.fromScene(new JA,.04).texture;this.scene.environment=c,o.dispose();const u=new Dd(8377599,1.1);u.position.set(-4,2.5,-3);const h=new Dd(16751317,.9);h.position.set(4.5,-1.5,-2.5);const m=new Dd(16777215,.7);m.position.set(1.5,3,4),this.scene.add(u,h,m),this.surface=new xw;const d=_w(this.surface.texture);this.holoMaterial=d.material,this.holoUniforms=d.uniforms,this.holoUniforms.uWetMap.value=this.moisture.texture;const g=this.renderer.capabilities.getMaxAnisotropy();this.holoMaterial.roughnessMap&&(this.holoMaterial.roughnessMap.anisotropy=g),this.surface.texture.anisotropy=g,this.clothMesh=new Tn(void 0,this.holoMaterial),this.clothMesh.frustumCulled=!1,this.clothMesh.visible=!1,this.buildCloth(1),this.scene.add(this.clothMesh);const _=this.renderer.domElement;_.addEventListener("pointerdown",this.onPointerDown),_.addEventListener("pointermove",this.onPointerMove),_.addEventListener("pointerup",this.onPointerUp),_.addEventListener("pointercancel",this.onPointerUp),_.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onWindowBlur),this.controls=new HA(this.camera,_),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=1.6,this.controls.maxDistance=30,this.controls.target.set(...Cu.target),this.controls.update();const v=new Wn(n,a,{samples:8,type:ni});this.composer=new aw(this.renderer,v),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer.addPass(new sw(this.scene,this.camera)),this.dofPass=new Sw(this.scene,this.camera),this.dofPass.enabled=!1,this.composer.addPass(this.dofPass),this.bloomPass=new po(new Kt(n,a),.18,.85,1),this.composer.addPass(this.bloomPass),this.composer.addPass(new ow),this.grainPass=new vx(aR),this.composer.addPass(this.grainPass),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(t),this.renderer.setAnimationLoop(this.tick)}host;renderer;scene;camera;controls;composer;bloomPass;dofPass;grainPass;cavityAttr;sim;clothMesh;clothGeometry;holoUniforms;holoMaterial;surface;bumpSource=null;thumbCache=new WeakMap;perfProfile="High";clothSegments=eR;camRaf=0;gestureRaf=0;defaultCamPos=new $;arSavedScale=1;arSavedPos=new $;bgBackup=null;onARChange=null;moisture=new Jw;wetProps={absorb:.6,bead:.3};currentPR=Math.min(window.devicePixelRatio,2);background=new ie("#0b0c12");clock=new G2;elapsed=0;raycaster=new H2;pointerNdc=new Kt;dragPlane=new Ha;grabbing=!1;grabPointerId=null;draggingDecal=!1;decalGrabOffset={u:0,v:0};pickingFocus=!1;focusVertex=null;pickReleaseId=null;spaceHeld=!1;focusTmp=new $;editMode=!1;prevUseImage=!1;hoverCursor="default";resizeObserver;params=null;disposed=!1;onDecalSelect=null;onImagesChanged=null;clothAspect=1;buildCloth(t){this.clothAspect=t;const n=t>=1?yu:yu*t,a=t>=1?yu/t:yu,o=this.clothSegments,c=t>=1?o:Math.max(10,Math.round(o*t)),u=t>=1?Math.max(10,Math.round(o/t)):o;this.sim=new hw(n,a,c,u);const h=new Pl(n,a,c,u),m=new Di(this.sim.positions,3);m.setUsage(p_),h.setAttribute("position",m),this.cavityAttr=new Di(new Float32Array(this.sim.count),1),this.cavityAttr.setUsage(p_),h.setAttribute("aCavity",this.cavityAttr),h.computeVertexNormals();const d=this.clothMesh.geometry;this.clothMesh.geometry=h,this.clothGeometry=h,d&&d.dispose(),this.holoUniforms.uClothSize.value.set(n,a),this.focusVertex=null,this.cancelInteraction()}cancelInteraction(){this.grabPointerId!==null&&this.renderer.domElement.hasPointerCapture(this.grabPointerId)&&this.renderer.domElement.releasePointerCapture(this.grabPointerId),this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls&&(this.controls.enabled=!0)}applyParams(t){this.params=t,t.performance!==this.perfProfile&&this.applyPerfProfile(t.performance);const n=this.holoMaterial;n.color.set(t.material.baseColor),n.roughness=t.material.roughness,n.metalness=t.material.metalness,n.clearcoat=t.material.clearcoat,n.clearcoatRoughness=t.material.coatRoughness,n.sheen=t.material.sheen,n.sheenColor.set(t.material.baseColor).lerp(D1,.5),n.iridescence=0,n.normalScale.set(t.material.bump,t.material.bump),n.normalMap&&n.normalMap.repeat.set(t.material.bumpTiling,t.material.bumpTiling),this.scene.environmentIntensity=t.render.environment;const a=this.holoUniforms;a.uHoloIntensity.value=0,a.uSparkle.value=0,a.uSpecTint.value=0,a.uSaturation.value=0;const o=t.images??{opacity:1,cornerRadius:0,edit:!1,useImage:!1,scale:0,rotation:0};a.uSurfaceOpacity.value=o.opacity,a.uCornerRound.value=o.cornerRadius,this.background.set(t.render.background),this.renderer.toneMappingExposure=t.render.exposure;const c=tR[t.render.toneMapping]??co;this.renderer.toneMapping!==c&&(this.renderer.toneMapping=c),this.bloomPass.strength=t.render.bloom,this.bloomPass.threshold=t.render.bloomThreshold,this.grainPass.uniforms.uAmount.value=t.render.noise,a.uCavityAmount.value=t.render.occlusion?t.render.occlusionStrength:0,this.dofPass.enabled=t.render.dof,this.dofPass.setParams(t.render.dofAperture*.01,t.render.dofBlur,t.render.dofRange*.5),this.editMode=o.edit,this.controls.enableZoom=!this.editMode,this.prevUseImage&&!o.useImage&&this.surface.clothImage&&this.removeClothImage(),this.prevUseImage=o.useImage;const u=this.surface.selected;u&&(u.scale!==o.scale||u.rotation!==o.rotation)&&(u.scale=o.scale,u.rotation=o.rotation,this.surface.redraw())}applyFabric(t){const n=this.holoMaterial.normalMap,a=mw(t);if(a.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.params){const o=this.params.material.bumpTiling;a.repeat.set(o,o)}this.holoMaterial.normalMap=a,this.holoMaterial.needsUpdate=!0,n&&n.dispose()}resetCloth(){this.sim.reset(),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals(),this.moisture.clear()}setWet(t){this.wetProps=t}splash(){this.moisture.splash(this.wetProps)}heightAt=(t,n)=>{const a=this.sim.cols,o=this.sim.rows,c=t*(a-1),u=n*(o-1),h=Math.min(a-2,Math.max(0,Math.floor(c))),m=Math.min(o-2,Math.max(0,Math.floor(u))),d=c-h,g=u-m,_=this.sim.positions,v=(M,L)=>_[(L*a+M)*3+1],x=v(h,m),b=v(h+1,m),w=v(h,m+1),S=v(h+1,m+1);return(x*(1-d)+b*d)*(1-g)+(w*(1-d)+S*d)*g};setColor(t){this.holoMaterial.color.set(t),this.holoMaterial.sheenColor.set(t).lerp(D1,.5)}patternTex=null;setPattern(t){this.patternTex&&this.patternTex!==t&&this.patternTex.dispose(),this.patternTex=t,t?(t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=t,this.holoUniforms.uSurfaceOpacity.value=1):this.holoUniforms.uSurfaceMap.value=this.surface.texture}setSlideOffset(t){this.clothMesh.position.x=t}getSlideOffset(){return this.clothMesh.position.x}async startAR(t){const n=navigator.xr;if(!n)return!1;try{if(!await n.isSessionSupported("immersive-ar"))return!1;const a=await n.requestSession("immersive-ar",{optionalFeatures:["dom-overlay","local-floor"],domOverlay:{root:t}});return await this.renderer.xr.setSession(a),this.arSavedPos.copy(this.clothMesh.position),this.arSavedScale=this.clothMesh.scale.x,this.clothMesh.scale.setScalar(.12),this.clothMesh.position.set(0,1.1,-.9),this.bgBackup=this.scene.background,this.scene.background=null,this.onARChange?.(!0),a.addEventListener("end",this.handleAREnd),!0}catch{return!1}}endAR(){this.renderer.xr.getSession()?.end()}handleAREnd=()=>{this.scene.background=this.bgBackup,this.clothMesh.scale.setScalar(this.arSavedScale),this.clothMesh.position.copy(this.arSavedPos),this.camera.position.copy(this.defaultCamPos),this.controls.update(),this.onARChange?.(!1)};async exportUSDZ(){const t=this.clothMesh.clone();t.geometry=this.clothGeometry.clone(),t.position.set(0,0,0),t.scale.setScalar(.12);const n=new Bw;return n.parseAsync?await n.parseAsync(t):await n.parse(t)}getRenderStats(){const t=this.renderer.info;return{calls:t.render.calls,triangles:t.render.triangles,geometries:t.memory.geometries,textures:t.memory.textures,programs:t.programs?.length??0,clothVerts:this.sim.count,segments:this.clothSegments,pixelRatio:this.currentPR}}animateCam(t,n){cancelAnimationFrame(this.camRaf),this.controls.enableDamping=!1;const a=performance.now(),o=c=>{const u=Math.min(1,(c-a)/n);t(u),this.controls.update(),u<1?this.camRaf=requestAnimationFrame(o):this.controls.enableDamping=!0};this.camRaf=requestAnimationFrame(o)}zoomTo(t,n=650){const a=this.controls.target,o=this.camera.position.clone(),c=a.clone().add(this.defaultCamPos.clone().sub(a).multiplyScalar(t));this.animateCam(u=>this.camera.position.lerpVectors(o,c,nR(u)),n)}spin(t=1500){const n=this.controls.target.clone(),a=this.camera.position.clone(),o=a.x-n.x,c=a.z-n.z;this.animateCam(u=>{const h=Math.sin(u*Math.PI)*.6,m=Math.sin(h),d=Math.cos(h);this.camera.position.set(n.x+o*d-c*m,a.y,n.z+o*m+c*d)},t)}demoStretch(){cancelAnimationFrame(this.gestureRaf);const t=this.sim,n=Math.floor(t.cols/2),o=Math.floor(t.rows/2)*t.cols+n,c=new $(t.positions[o*3],t.positions[o*3+1],t.positions[o*3+2]),u=Math.max(t.width,t.height)*.55;if(!t.startGrab(c,u))return;const h=this.camera.position.clone().sub(c).normalize().multiplyScalar(1.1);h.y-=.4;const m=performance.now(),d=520,g=360,_=v=>{const x=v-m;x<d?(t.moveGrab(c.clone().add(h.clone().multiplyScalar(iR(x/d)))),this.gestureRaf=requestAnimationFrame(_)):x<d+g?this.gestureRaf=requestAnimationFrame(_):t.endGrab()};this.gestureRaf=requestAnimationFrame(_)}poke(){this.sim.poke(1)}addDecal(t){const n=this.surface.addDecal(t);this.onDecalSelect?.(n.scale,n.rotation),this.onImagesChanged?.()}setClothImage(t){const n=t.naturalWidth||t.width||1,a=t.naturalHeight||t.height||1,o=Math.min(3,Math.max(1/3,n/a));this.surface.setClothImage(t),this.surface.setAspect(o)&&this.rebindSurfaceTexture(),this.buildCloth(o),this.onImagesChanged?.()}clearImages(){this.surface.clear(),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}removeClothImage(){this.surface.setClothImage(null),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}get hasClothImage(){return this.surface.clothImage!==null}reveal(){this.clothMesh.visible=!0}thumbnailOf(t){let n=this.thumbCache.get(t);if(n)return n;const a=t.naturalWidth||t.width||1,o=t.naturalHeight||t.height||1,c=96/Math.max(a,o),u=document.createElement("canvas");return u.width=Math.max(1,Math.round(a*c)),u.height=Math.max(1,Math.round(o*c)),u.getContext("2d").drawImage(t,0,0,u.width,u.height),n=u.toDataURL("image/png"),this.thumbCache.set(t,n),n}getClothThumbnail(){return this.surface.clothImage?this.thumbnailOf(this.surface.clothImage):null}getDecalThumbnails(){return this.surface.decals.map(t=>this.thumbnailOf(t.img))}removeDecal(t){const n=this.surface.decals[t];n&&(this.surface.decals.splice(t,1),this.surface.selected===n&&(this.surface.selected=null),this.surface.redraw(),this.onImagesChanged?.())}snapshotImages(){return{clothImage:this.surface.clothImage,decals:this.surface.decals.map(t=>({...t}))}}restoreImages(t){this.surface.clothImage=t.clothImage,this.surface.decals=t.decals.map(a=>({...a})),this.surface.selected=null;let n=1;if(t.clothImage){const a=t.clothImage.naturalWidth||t.clothImage.width||1,o=t.clothImage.naturalHeight||t.clothImage.height||1;n=Math.min(3,Math.max(1/3,a/o))}this.surface.setAspect(n)&&this.rebindSurfaceTexture(),n!==this.clothAspect&&this.buildCloth(n),this.onImagesChanged?.()}applyPerfProfile(t){this.perfProfile=t;const n=window.devicePixelRatio;this.currentPR=t==="Low"?1:t==="Medium"?Math.min(n,1.5):Math.min(n,2);const a=t==="Low"?0:t==="Medium"?4:8,o=t==="Low"?36:t==="Medium"?52:72,c=this.host.clientWidth||window.innerWidth,u=this.host.clientHeight||window.innerHeight;this.renderer.setPixelRatio(this.currentPR),this.renderer.setSize(c,u),this.composer.setPixelRatio(this.currentPR),this.composer.renderTarget1.samples=a,this.composer.renderTarget2.samples=a,this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer.setSize(c,u),o!==this.clothSegments&&(this.clothSegments=o,this.buildCloth(this.clothAspect))}setBumpMap(t){const n=this.holoMaterial.normalMap;let a=null;if(t){a=gw(t),a.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=this.params?.material.bumpTiling??3;a.repeat.set(o,o)}this.bumpSource=t,this.holoMaterial.normalMap=a,!!n!=!!a&&(this.holoMaterial.needsUpdate=!0),n&&n.dispose(),this.onImagesChanged?.()}get hasBumpMap(){return this.bumpSource!==null}getBumpThumbnail(){return this.bumpSource?this.thumbnailOf(this.bumpSource):null}rebindSurfaceTexture(){this.surface.texture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=this.surface.texture}exportPNG(t=!1){const n=this.host.clientWidth||window.innerWidth,a=this.host.clientHeight||window.innerHeight,o=this.currentPR,c=Math.min(4,Math.max(2,3200/Math.max(n,a)));t&&(this.scene.background=null,this.renderer.setClearColor(0,0)),this.renderer.setPixelRatio(c),this.composer.setPixelRatio(c),this.renderer.setSize(n,a),this.composer.setSize(n,a),this.composer.render();const u=this.renderer.domElement.toDataURL("image/png");t&&(this.scene.background=this.background,this.renderer.setClearColor(0,1)),this.renderer.setPixelRatio(o),this.composer.setPixelRatio(o),this.renderer.setSize(n,a),this.composer.setSize(n,a);const h=document.createElement("a");h.href=u;const m=t?"holocloth-nobg":"holocloth";h.download=`${m}-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,h.click()}updatePointer(t){const n=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1)}raycastCloth(){this.raycaster.setFromCamera(this.pointerNdc,this.camera),this.clothGeometry.computeBoundingSphere();const t=this.raycaster.intersectObject(this.clothMesh,!1);return t.length>0?t[0]:null}startPickFocus(){this.pickingFocus=!0,this.renderer.domElement.style.cursor="crosshair"}clearPickFocus(){this.focusVertex=null}onKeyDown=t=>{if(t.code!=="Space"||t.repeat)return;const n=t.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)||(t.preventDefault(),this.spaceHeld=!0,this.controls.mouseButtons.LEFT=Ga.PAN,!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&(this.renderer.domElement.style.cursor="grab"))};onKeyUp=t=>{t.code==="Space"&&(this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Ga.ROTATE)};onWindowBlur=()=>{this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Ga.ROTATE};onPointerDown=t=>{if(t.button!==0||this.grabbing||this.draggingDecal)return;if(this.updatePointer(t),this.pickingFocus){this.pickingFocus=!1,this.renderer.domElement.style.cursor="default";const c=this.raycastCloth();if(c){const u=this.sim.positions;let h=0,m=1/0;for(let d=0;d<this.sim.count;d++){const g=u[d*3]-c.point.x,_=u[d*3+1]-c.point.y,v=u[d*3+2]-c.point.z,x=g*g+_*_+v*v;x<m&&(m=x,h=d)}this.focusVertex=h}this.pickReleaseId=t.pointerId,this.controls.enabled=!1;return}if(this.spaceHeld)return;const n=this.raycastCloth();if(!n)return;if(this.editMode){if(!n.uv)return;const c=this.surface.hitTest(n.uv.x,n.uv.y);if(!c)return;this.surface.selected=c,this.draggingDecal=!0,this.decalGrabOffset.u=c.u-n.uv.x,this.decalGrabOffset.v=c.v-n.uv.y,this.grabPointerId=t.pointerId,this.controls.enabled=!1,this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="move",this.onDecalSelect?.(c.scale,c.rotation);return}const a=this.params?.physics.grabRadius??.45;if(!this.sim.startGrab(n.point,a))return;this.grabbing=!0,this.grabPointerId=t.pointerId,this.controls.enabled=!1;const o=new $;this.camera.getWorldDirection(o),this.dragPlane.setFromNormalAndCoplanarPoint(o,n.point),this.renderer.domElement.setPointerCapture(t.pointerId),this.renderer.domElement.style.cursor="grabbing"};onPointerMove=t=>{if((this.grabbing||this.draggingDecal)&&t.pointerId!==this.grabPointerId)return;if(this.updatePointer(t),this.draggingDecal){const o=this.raycastCloth(),c=this.surface.selected;o?.uv&&c&&(c.u=o.uv.x+this.decalGrabOffset.u,c.v=o.uv.y+this.decalGrabOffset.v,this.surface.redraw());return}if(!this.grabbing)return;this.raycaster.setFromCamera(this.pointerNdc,this.camera);const a=new $;this.raycaster.ray.intersectPlane(this.dragPlane,a)&&this.sim.moveGrab(a)};onPointerUp=t=>{if(t.pointerId===this.pickReleaseId){this.pickReleaseId=null,this.controls.enabled=!0;return}!(this.grabbing||this.draggingDecal)||t.pointerId!==this.grabPointerId||(this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls.enabled=!0,this.renderer.domElement.hasPointerCapture(t.pointerId)&&this.renderer.domElement.releasePointerCapture(t.pointerId),this.renderer.domElement.style.cursor=this.hoverCursor)};onWheel=t=>{if(!this.editMode)return;const n=this.surface.selected;n&&(t.preventDefault(),t.stopImmediatePropagation(),n.scale=Y1.clamp(n.scale*Math.exp(-t.deltaY*.0012),.02,2.5),this.surface.redraw(),this.onDecalSelect?.(n.scale,n.rotation))};onResize(){const t=this.host.clientWidth||window.innerWidth,n=this.host.clientHeight||window.innerHeight;t===0||n===0||(this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.composer.setSize(t,n))}tick=()=>{if(this.disposed)return;const t=this.clock.getDelta();if(this.elapsed+=t,this.grainPass.uniforms.uTime.value=this.elapsed%61.7,this.params&&(this.sim.step(t,this.params.physics),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals(),this.sim.smoothNormals(this.clothGeometry.attributes.normal.array),this.clothGeometry.attributes.normal.needsUpdate=!0),this.moisture.active&&this.moisture.update(t,this.wetProps,this.heightAt),this.params?.render.occlusion&&(this.sim.computeCavity(this.clothGeometry.attributes.normal.array,this.cavityAttr.array),this.cavityAttr.needsUpdate=!0),this.params?.render.dof){let n;if(this.focusVertex!==null&&this.focusVertex<this.sim.count){const a=this.sim.positions,o=this.focusVertex*3;this.focusTmp.set(a[o],a[o+1],a[o+2]),n=this.camera.position.distanceTo(this.focusTmp)}else n=this.camera.position.distanceTo(this.controls.target);this.dofPass.setFocus(n)}if(this.renderer.xr.isPresenting){this.renderer.render(this.scene,this.camera);return}if(!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&!this.spaceHeld&&this.perfProfile!=="Low"){const n=this.raycastCloth();let a="default";n&&(a=this.editMode?n.uv&&this.surface.hitTest(n.uv.x,n.uv.y)?"move":"default":"grab"),a!==this.hoverCursor&&(this.hoverCursor=a,this.renderer.domElement.style.cursor=a)}this.controls.update(),this.composer.render()};dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect();const t=this.renderer.domElement;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.controls.dispose(),this.dofPass.dispose(),this.composer.dispose(),this.clothGeometry.dispose(),this.holoMaterial.dispose(),this.surface.dispose(),this.scene.traverse(n=>{const a=n;a.geometry&&a.geometry!==this.clothGeometry&&a.geometry.dispose()}),this.renderer.dispose(),t.remove()}}const Ci=["Nulu","Luon","Luxtreme","Everlux","Warpstreme"],on={Nulu:{label:"Nulu",blurb:"Buttery-soft, lightweight knit. Matte, next-to-nothing drape.",material:{finish:"Matte",baseColor:"#c9c4bf",roughness:.88,metalness:0,clearcoat:0,coatRoughness:.9,sheen:.28,bump:.6,bumpTiling:6},physics:{viscosity:.5,stiffness:.45,iterations:12,smoothing:.12,grabRadius:.3},weave:{type:"knit",threads:96,strength:1,seed:11},wet:{absorb:.85,bead:.08}},Luon:{label:"Luon",blurb:"The original: cottony-soft, structured, medium-weight knit.",material:{finish:"Matte",baseColor:"#2c313a",roughness:.76,metalness:0,clearcoat:.05,coatRoughness:.75,sheen:.2,bump:.95,bumpTiling:5},physics:{viscosity:.42,stiffness:.7,iterations:12,smoothing:.07,grabRadius:.27},weave:{type:"knit",threads:72,strength:1.35,seed:22},wet:{absorb:.8,bead:.12}},Luxtreme:{label:"Luxtreme",blurb:"Slick, cool-to-touch performance knit. Satin sheen, lively.",material:{finish:"Matte",baseColor:"#33435f",roughness:.58,metalness:0,clearcoat:.03,coatRoughness:.6,sheen:.38,bump:.3,bumpTiling:8},physics:{viscosity:.24,stiffness:.82,iterations:13,smoothing:.03,grabRadius:.27},weave:{type:"knit",threads:120,strength:.7,seed:33},wet:{absorb:.45,bead:.5}},Everlux:{label:"Everlux",blurb:"Thicker double-knit. Springy shape retention, textured hand.",material:{finish:"Matte",baseColor:"#454851",roughness:.6,metalness:0,clearcoat:.1,coatRoughness:.6,sheen:.32,bump:1.15,bumpTiling:4},physics:{viscosity:.34,stiffness:.9,iterations:14,smoothing:.09,grabRadius:.27},weave:{type:"knit",threads:56,strength:1.6,seed:44},wet:{absorb:.7,bead:.2}},Warpstreme:{label:"Warpstreme",blurb:"Finely woven, structured & wrinkle-resistant. Holds its shape.",material:{finish:"Matte",baseColor:"#21252c",roughness:.72,metalness:0,clearcoat:0,coatRoughness:.6,sheen:.2,bump:.5,bumpTiling:7},physics:{viscosity:.3,stiffness:1,iterations:14,smoothing:.15,grabRadius:.26},weave:{type:"woven",threads:110,strength:.9,seed:55},wet:{absorb:.12,bead:.9}}},U1="Nulu",Gd=["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it coats the fibers and kills sweat-wicking.","Hang or lay flat to dry; avoid the dryer to protect the stretch.","Keep away from Velcro, zippers and denim to avoid snags and pilling."],kn={Nulu:{meaning:'"Naked" lu — the softest, lightest fabric lululemon makes. The "nu" is for nude / next-to-nothing.',feel:"Buttery-soft and weightless with a matte finish and gentle four-way stretch. No compression — it feels like a second skin.",bestFor:["Yoga","Pilates","Barre","Stretching","Lounging","Travel & errands"],notFor:"High-sweat or high-impact workouts — it offers no compression and can pill under friction.",care:["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it clogs the fibers.","Hang or lay flat to dry; never tumble dry.","Prone to pilling — keep away from Velcro, zippers and denim."],products:[{name:'Align High-Rise Pant 25"',price:"$98",url:"https://shop.lululemon.com/c/women-align-leggings/n1esuuzudsq"},{name:"Align Tank Top",price:"$68",url:"https://shop.lululemon.com/c/women-align-clothes/n14uwkzesuu"},{name:"Groove Nulu Flared Pant",price:"$128",url:"https://shop.lululemon.com/c/women-align-pants/n1esuuzqd1q"}],affinity:{activity:{yoga:3,run:-2,studio:0,everyday:1},sweat:{low:3,med:0,high:-2},feel:{soft:3,smooth:0,structured:-1,cushioned:0},care:{easy:-1,ok:2}}},Luon:{meaning:'The original lululemon fabric — the knit that launched the brand. Simply "lu" + "on".',feel:"Cottony-soft but more structured than Nulu: medium-weight, lightly holding, with a matte look.",bestFor:["Yoga","Barre","Dance","Low–medium impact","Layering","Casual"],notFor:"Running or spin — the cottony knit can pill under repeated friction.",care:Gd,products:[{name:"Wunder Under Luon High-Rise Tight",price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:"Classic Luon layering tops",price:"from $68",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:2,run:-1,studio:1,everyday:1},sweat:{low:2,med:1,high:-1},feel:{soft:2,smooth:0,structured:0,cushioned:1},care:{easy:0,ok:1}}},Luxtreme:{meaning:`"Luxe" + "extreme" — lululemon's first performance fabric, built for runners back in 2008.`,feel:"Slick and cool-to-touch, compressive and supportive with a subtle sheen. Sweat-wicking and quick-drying.",bestFor:["Running","HIIT","Cycling / spin","High-impact training"],notFor:"Gentle lounging if you dislike compression — it's a firmer, hold-you-in feel.",care:Gd,products:[{name:'Wunder Under Full-On Luxtreme Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:'Wunder Under Luxtreme Tight 28"',price:"$98",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:-1,run:3,studio:2,everyday:0},sweat:{low:-1,med:1,high:3},feel:{soft:0,smooth:3,structured:1,cushioned:0},care:{easy:1,ok:0}}},Everlux:{meaning:'"Ever" (endure) + "lux" — a 2017 studio fabric made for sweaty, mid-to-high-intensity workouts.',feel:"Fast-drying and cool against the skin, with a cushioned double-knit body and springy shape retention.",bestFor:["Studio & HIIT","Spin","Cardio classes","Hot workouts","Strength training"],notFor:"Nothing much — it's the most versatile; just heavier than Nulu for pure lounging.",care:Gd,products:[{name:'Wunder Train High-Rise Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:'Wunder Train Tight with Pockets 28"',price:"$128",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:"Wunder Train No Line High-Rise Tight",price:"$108",url:"https://shop.lululemon.com/c/women-everlux-leggings/n1n918zudsq"}],affinity:{activity:{yoga:0,run:2,studio:3,everyday:1},sweat:{low:0,med:3,high:2},feel:{soft:0,smooth:1,structured:0,cushioned:3},care:{easy:2,ok:0}}},Warpstreme:{meaning:'A finely warp-woven fabric (woven, not knit) — "warp" weaving + "streme" for stream / extreme.',feel:"Smooth, structured and wrinkle-resistant with a cool hand. Holds its shape from morning to night.",bestFor:["Travel","Commute","Work / office","Everyday","Versatile wear"],notFor:"Sweaty high-intensity training — it's built for structure and polish, not compression.",care:["Machine wash cold with like colors.","Skip fabric softener.","Hang dry — avoid high heat.","Wrinkle-resistant, so it bounces back without ironing."],products:[{name:"ABC Classic-Fit 5 Pocket Pant",price:"$138",url:"https://shop.lululemon.com/c/men-warpstreme-pants/n13u4nzu9dn"},{name:"ABC Trouser (formerly Commission)",price:"$138",url:"https://shop.lululemon.com/c/men-abc-trousers/n146jrzsddx"},{name:"ABC Jogger",price:"$128",url:"https://shop.lululemon.com/c/men-abc-pants/n1sddxzu9dn"}],affinity:{activity:{yoga:0,run:-1,studio:0,everyday:3},sweat:{low:2,med:1,high:-2},feel:{soft:0,smooth:1,structured:3,cushioned:0},care:{easy:3,ok:0}}}};function rR(s,t){return t.map(n=>{const a=kn[n].affinity;let o=0;return s.activity&&(o+=a.activity[s.activity]),s.sweat&&(o+=a.sweat[s.sweat]),s.feel&&(o+=a.feel[s.feel]),s.care&&(o+=a.care[s.care]),{name:n,score:o}}).sort((n,a)=>a.score-n.score)}const H0={step:"start",answers:{},fabric:null,colorHex:null,colorName:null,askedColor:!1},Yu=[{name:"Black",hex:"#1a1a1a"},{name:"True Navy",hex:"#26324a"},{name:"Heathered Grey",hex:"#9a9793"},{name:"Dark Olive",hex:"#3f4531"},{name:"Red Merlot",hex:"#7d1f2b"},{name:"Pink Mist",hex:"#e3b0bf"},{name:"Blue Nile",hex:"#3b5d7a"},{name:"White Opal",hex:"#e8e5df"}],N1={Nulu:"81% nylon, 19% Lycra elastane",Luon:"a nylon / Lycra blend (sometimes with polyester)",Luxtreme:"69% nylon, 31% Lycra elastane — the highest elastane of the bunch",Everlux:"a high-elastane nylon / Lycra double-knit",Warpstreme:"100% polyester, finely warp-woven"},de=s=>s[Math.floor(Math.random()*s.length)],Zt=(s,t)=>t.some(n=>s.includes(n)),Cn={activity:[{label:"Yoga & stretching",value:"yoga"},{label:"Running & cardio",value:"running"},{label:"Studio & HIIT",value:"studio"},{label:"Everyday & travel",value:"everyday"}],sweat:[{label:"Barely",value:"barely sweat"},{label:"A moderate amount",value:"moderate sweat"},{label:"A lot",value:"sweat a lot"}],feel:[{label:"Softest & barely-there",value:"softest feel"},{label:"Smooth & supportive",value:"smooth supportive"},{label:"Cushioned",value:"cushioned feel"},{label:"Structured",value:"structured feel"}],care:[{label:"Low-maintenance",value:"low maintenance"},{label:"Happy to hand-wash",value:"hand wash"}],explore:[{label:"Find my match",value:"find my match"},{label:"Tell me about the fabrics",value:"tell me about the fabrics"},{label:"Compare two",value:"compare fabrics"}],demos:[{label:"Show its stretch",value:"show its stretch"},{label:"See the drape",value:"see the drape"},{label:"Zoom in",value:"zoom in"}]},G0=()=>[...Yu.map(s=>({label:s.name,value:s.name})),{label:"Surprise me",value:"surprise me"}];function oR(s){return s.includes("nulu")||s.includes("align")?"Nulu":s.includes("luon")?"Luon":s.includes("luxtreme")?"Luxtreme":s.includes("everlux")||s.includes("wunder train")?"Everlux":s.includes("warpstreme")||s.includes("abc")?"Warpstreme":null}function lR(s){return Zt(s,["yoga","stretch","flow","pilates","barre","lounge","relax","restor"])?"yoga":Zt(s,["run","jog","sprint","cardio","marathon","5k","10k"])?"run":Zt(s,["studio","hiit","train","gym","spin","cycle","cycling","strength","lift","weight","class","crossfit","bootcamp","tennis","dance","workout"])?"studio":Zt(s,["everyday","travel","work","office","commute","casual","errand","walk","daily","hike","hiking","flight","plane","desk","lounging around"])?"everyday":null}function cR(s){return Zt(s,["barely","not much","don't sweat","dry workout","a little","light sweat","low sweat"])?"low":Zt(s,["moderate","medium","average","a bit"])?"med":Zt(s,["a lot","lots","heavy sweat","sweaty","drench","soak","buckets","sweat a lot","hot ","hot yoga","sauna"])?"high":null}function uR(s){return Zt(s,["softest","buttery","barely-there","barely there","naked","second skin","gentle","butter","soft feel"])?"soft":Zt(s,["smooth","slick","sleek","silky","compress","support","sculpt","hold-you","hold you","firm"])?"smooth":Zt(s,["cushion","thick","substantial","plush","cozy","hefty","more body"])?"cushioned":Zt(s,["structured","crisp","polished","put together","put-together","stiff","tailored","holds shape"])?"structured":null}function fR(s){return Zt(s,["low maintenance","low-maintenance","easy care","durable","wrinkle","no fuss","toss","throw it in","lazy"])?"easy":Zt(s,["hand wash","hand-wash","delicate","hang dry","baby it","careful","don't mind washing"])?"ok":null}function hR(s){const t=[[["black","noir"],"Black"],[["navy","dark blue"],"True Navy"],[["grey","gray","heather"],"Heathered Grey"],[["olive","green","army","khaki"],"Dark Olive"],[["red","merlot","wine","maroon","burgundy","berry"],"Red Merlot"],[["pink","rose","blush","mauve"],"Pink Mist"],[["blue","nile","cobalt","teal"],"Blue Nile"],[["white","cream","opal","ivory"],"White Opal"]];for(const[n,a]of t)if(Zt(s,n))return Yu.find(o=>o.name===a);return null}function dR(s){return Zt(s,["reset","re-drape","redrape","settle it","drop it","let it fall","fresh drape"])?"reset":Zt(s,["nudge","poke","wobble","jiggle","shake it","bounce"])?"nudge":Zt(s,["zoom in","closer","close up","close-up","get close","look closer"])?"closeup":Zt(s,["zoom out","back up","pull back","farther","further","see it all","zoom back","wider","whole thing"])?"zoomout":Zt(s,["spin","rotate","turn it","turn around","another angle","different angle"])?"spin":null}function L1(s){return Zt(s,["durab","stretch","elastic","recover","hold up","holds up","last","four-way","4-way","compression","compress","squat","support","pull it"])?"stretch":Zt(s,["soft","buttery","how does it feel","feel like","next to skin","against my skin","touch","plush","cozy"])?"soft":Zt(s,["drape","flow","how it moves","how does it move","movement","fall","swish","fluid","floaty"])?"drape":Zt(s,["sheen","shine","shiny","gloss","matte","luster","finish","how it looks","how does it look"])?"sheen":Zt(s,["weave","woven","knit","texture","construction","grain","stitch","mesh","up close"])?"weave":Zt(s,["breath","airflow","ventil","cool ","cooling","hot workout","overheat","wick","quick dry","quick-dry"])?"breath":Zt(s,["warm","warmth","cold","winter","chilly","heat retention"])?"warmth":Zt(s,["see-through","see through","sheer","squat proof","squat-proof","opaque","opacity","transparent"])?"opacity":Zt(s,["pill","pilling"])?"pill":Zt(s,["made of","material","composition","fabric content","nylon","polyester","lycra","spandex","elastane","what is it made"])?"material":Zt(s,["size","sizing","fit ","true to size","runs small","runs big","tight or","sizing up"])?"fit":Zt(s,["sustainab","recycled","eco","environment","planet"])?"sustain":Zt(s,["smell","odor","odour","stink","anti-odor","anti-odour"])?"odor":null}function pR(s){return!Zt(s,["most","best","softest","warmest","coolest","lightest","cheapest","priciest","stretchiest","which","top ","strongest"])&&!Zt(s,["won't pill","wont pill","no pill"])?null:Zt(s,["softest","most soft","most comfortable","comfiest"])?"softest":Zt(s,["warmest","warm","coziest","thickest","winter"])?"warmest":Zt(s,["coolest","cool-to-touch","cool to touch"])?"coolest":Zt(s,["breathable","most breathable","breathability"])?"breathable":Zt(s,["durable","most durable","longest","toughest","won't pill","wont pill","no pill","strongest","last longest"])?"durable":Zt(s,["supportive","most support","most compress","compressive","hold you in"])?"supportive":Zt(s,["stretchiest","most stretch","most flexible","stretchy"])?"stretchiest":Zt(s,["lightest","most lightweight","thinnest"])?"lightest":Zt(s,["versatile","do everything","all-rounder","all rounder","most versatile"])?"versatile":Zt(s,["cheapest","least expensive","most affordable","lowest price"])?"cheapest":Zt(s,["priciest","most expensive","highest price"])?"priciest":Zt(s,["best"])?"best":null}function P1(s){const t=s.match(/\$(\d+)/);return t?parseInt(t[1],10):9999}function mR(s,t){const n=kn[s];return[{text:`${t??de([`I'd put you in ${s}.`,`Here's your match: ${s}.`,`${s} is the one for you.`])} ${n.meaning}`},{text:`${n.feel} It's a favorite for ${n.bestFor.slice(0,3).join(", ").toLowerCase()} — I've loaded it onto the cloth, so drag it to feel how it moves.`},{text:de(["Want to see it in a color?","Shall I dye it? Just name a color.","Pick a color and I'll apply it live:"]),swatch:on[s].material.baseColor,chips:G0()}]}function O1(s,t){const n=kn[s].products[0];return[{text:de([`${t} on ${s} — beautiful.`,`Love it — ${t} suits ${s}.`,`${t} it is.`])},{text:`Here's the piece I'd start with in ${s}:`,product:n},{text:de(["Want me to show you its stretch, drape, or how it feels?","Say the word and I'll stretch it, zoom in, or turn it in the light."]),chips:[...Cn.demos,{label:"Start over",value:"start over"}]}]}function gR(s){return s?{text:`Caring for ${s}: ${kn[s].care.join(" ")}`}:{text:"Tell me which fabric and I'll give you its care routine — or I can find your match first.",chips:[...Cn.explore]}}function vR(){return{text:`Here are the five, in a nutshell:
${Ci.map(t=>`• ${t} — ${on[t].blurb.toLowerCase()}`).join(`
`)}
Ask me about any of them, or tell me what you'll do in it and I'll match you.`,chips:[...Cn.activity]}}const Vd=s=>[s.activity,s.sweat,s.feel,s.care].filter(Boolean).length;function I1(s){return s.activity?s.feel?s.sweat?{key:"care",msg:{text:de(["Last one — how do you like to care for your gear?","How much laundry fuss are you up for?"]),chips:[...Cn.care]}}:{key:"sweat",msg:{text:de(["How much do you sweat when you do it?","And how sweaty do you get?"]),chips:[...Cn.sweat]}}:{key:"feel",msg:{text:de(["What feel do you love against your skin?","How do you want it to feel?"]),chips:[...Cn.feel]}}:{key:"activity",msg:{text:de(["What will you mostly do in it?","What's it for — what will you be doing?"]),chips:[...Cn.activity]}}}function kd(s,t,n){const a=rR(s.answers,Ci)[0].name;s.fabric=a,s.step="recommended",s.askedColor=!0,t.selectFabric=a,t.reply.push(...mR(a,n))}function F1(s,t){const n=t&&on[t].weave.type==="woven";switch(s){case"stretch":return{demo:["closeup","stretch"],text:t?`${de(["Watch it stretch and snap back.","I'll pull it so you can see the recovery."])} ${{Nulu:"Lovely give, but it's a soft knit — best for low-impact; it can pill under heavy friction.",Luon:"Reliable four-way stretch with more body than Nulu.",Luxtreme:"Compressive four-way stretch with quick recovery — it holds shape through hard training.",Everlux:"Springy recovery from the double-knit and high elastane — supportive rep after rep.",Warpstreme:"It's woven, so it gives but stays structured — it won't bag out."}[t]}`:"Good athletic fabric gives, then returns to shape — pick a fabric and I'll show you."};case"soft":return{demo:["closeup","nudge"],text:t?`${de(["Getting in close.","Here it is up close."])} ${{Nulu:"Nulu is the buttery, next-to-nothing one.",Luon:"Luon is cottony-soft with more structure.",Luxtreme:"Luxtreme is cool and slick rather than fuzzy.",Everlux:"Everlux is cushioned and substantial.",Warpstreme:"Warpstreme is smooth and crisp, not plush."}[t]}`:"Softest of all is Nulu — want to feel it?"};case"drape":return{demo:["zoomout","drape"],text:t?`${de(["Watch how it falls.","Here it is in motion."])} ${{Nulu:"Fluid and flowy — lightweight drape.",Luon:"A little more body as it moves.",Luxtreme:"Slick and lively, settles sleek.",Everlux:"Heavier drape with spring.",Warpstreme:"Structured — it keeps its shape."}[t]}`:"Every fabric falls differently — pick one and I'll show you."};case"sheen":return{demo:["spin"],text:t?`${de(["Turning it through the light.","Catching the light across it."])} ${{Nulu:"Matte and soft, barely any shine.",Luon:"Matte, cottony surface.",Luxtreme:"A subtle performance sheen.",Everlux:"Mostly matte, dry finish.",Warpstreme:"Matte with a fine woven glint."}[t]}`:"Luxtreme has the most sheen; Nulu the least."};case"weave":return{demo:["closeup"],text:t?`${de(["Here's the construction up close.","Zooming into the surface."])} ${n?`See the tight woven grid — that's what makes ${t} structured and wrinkle-resistant.`:`You can see the knit loops — that interlock gives ${t} its stretch and softness.`}`:"Four of the five are knits; Warpstreme is woven. Want to see one up close?"};case"breath":return{demo:["spin"],text:t?`On breathability: ${{Nulu:"Nulu is light and airy but has no compression — great for gentle heat, less so for heavy sweat.",Luon:"Luon breathes reasonably for low-medium efforts.",Luxtreme:"Luxtreme is sweat-wicking, breathable and quick-drying — built for working hard.",Everlux:"Everlux was made for sweaty studio sessions — it wicks and dries fast while staying cool.",Warpstreme:"Warpstreme is a woven travel fabric — breathable and structured, though not a high-sweat performer."}[t]}`:"For heavy sweat, Luxtreme and Everlux breathe and wick best. Want details on one?"};case"warmth":return{text:t?`On warmth: ${{Nulu:"Nulu is the lightest and coolest — not a warm layer.",Luon:"Luon has a little more body but is still light.",Luxtreme:"Luxtreme is cool-to-touch — it runs cool, not warm.",Everlux:"Everlux is the thickest, so it holds a bit more warmth.",Warpstreme:"Warpstreme is structured and mid-weight — fine for cooler-weather everyday wear."}[t]}`:"Everlux is the warmest (thickest); Nulu the coolest and lightest."};case"opacity":return{demo:["closeup","stretch"],text:t?`On coverage: ${{Nulu:"Nulu is soft and non-compressive, so in very light colors it can go a touch sheer when stretched — dark colors are safest.",Luon:"Luon is medium-weight and generally opaque.",Luxtreme:"Luxtreme is compressive and reliably squat-proof.",Everlux:"Everlux is thick and fully opaque — very squat-proof.",Warpstreme:"Warpstreme is a woven — fully opaque."}[t]}`:"Everlux and Luxtreme are the most squat-proof; Nulu can be sheer in pale colors."};case"pill":return{text:t?`On pilling: ${{Nulu:"Nulu is the softest but most prone to pilling — keep it away from Velcro and rough surfaces.",Luon:"Luon can pill under heavy friction like running or spin.",Luxtreme:"Luxtreme is highly friction-resistant and won't pill.",Everlux:"Everlux is durable and resists pilling well.",Warpstreme:"Warpstreme is woven and very resistant to pilling."}[t]}`:"Luxtreme and Warpstreme resist pilling best; Nulu pills most easily."};case"material":return{text:t?`${t} is ${N1[t]}. ${kn[t].feel}`:`Composition varies: ${Ci.map(a=>`${a} is ${N1[a]}`).join("; ")}.`};case"fit":return{text:t?`On fit: ${{Nulu:"Nulu is a relaxed, second-skin feel with no compression.",Luon:"Luon is a supportive-but-comfortable everyday fit.",Luxtreme:"Luxtreme is snug and compressive — hold-you-in.",Everlux:"Everlux is supportive with a substantial, sculpting fit.",Warpstreme:"Warpstreme is a structured, tailored fit."}[t]} For exact sizing, lululemon.com or a store is your best bet.`:"Fit depends on the fabric — compressive ones like Luxtreme run snug, Nulu is relaxed. For sizing, check lululemon.com."};case"sustain":return{text:"I'm focused on how the fabrics feel and perform — for lululemon's materials and sustainability details, their site is the source of truth. I can tell you what each fabric is made of, though — just ask."};case"odor":return{text:t?`Most of these are synthetic performance fabrics, so wash them promptly and skip fabric softener (it traps odor). ${t==="Nulu"?"Nulu especially likes a gentle, prompt wash.":""}`:"Wash promptly and skip fabric softener to keep them fresh — softener coats the fibers and traps smell."}}}function _R(s,t,n){const a=(o,c,u)=>{t.fabric=o,t.step="open",n.selectFabric=o,u&&(n.demo=u),n.reply.push({text:c},{text:de(["Want to see it in a color, or shall I show it off?","I can dye it or demonstrate it — your call."]),swatch:on[o].material.baseColor,chips:[...Cn.demos,{label:"See colors",value:"see colors"}]})};switch(s){case"softest":return a("Nulu","Softest by a mile is Nulu — buttery and barely-there. Here it is.",["closeup","nudge"]);case"warmest":return a("Everlux","The warmest is Everlux — it's the thickest, a cushioned double-knit that holds a little heat.",["closeup"]);case"coolest":return a("Luxtreme","Coolest-to-touch is Luxtreme — slick and quick-drying, it runs cool.",["spin"]);case"breathable":return a("Luxtreme","Most breathable for hard efforts is Luxtreme — sweat-wicking and quick-drying (Everlux is a close second for studio heat).",["spin"]);case"durable":return a("Warpstreme","Most durable is Warpstreme — a tightly woven fabric that holds its shape and resists pilling. Luxtreme is the toughest of the knits.",["closeup","stretch"]);case"supportive":return a("Luxtreme","Most supportive is Luxtreme — compressive, hold-you-in, and quick to recover.",["closeup","stretch"]);case"stretchiest":return a("Luxtreme","Stretchiest is Luxtreme — it has the highest elastane, so it's the most flexible.",["closeup","stretch"]);case"lightest":return a("Nulu","Lightest is Nulu — a next-to-nothing feel.",["closeup"]);case"versatile":return a("Everlux","Most versatile is Everlux — comfy enough for low-impact, tough enough for hard training.",["drape"]);case"cheapest":{let o=Ci[0],c=99999;for(const u of Ci){const h=P1(kn[u].products[0].price);h<c&&(c=h,o=u)}t.fabric=o,n.selectFabric=o,t.step="open",n.reply.push({text:`The most affordable starting point is ${o}.`},{text:"Here's the piece:",product:kn[o].products[0]});return}case"priciest":{let o=Ci[0],c=-1;for(const u of Ci){const h=P1(kn[u].products[0].price);h>c&&(c=h,o=u)}t.fabric=o,n.selectFabric=o,t.step="open",n.reply.push({text:`The most premium of these is ${o}.`},{text:"Here's the piece:",product:kn[o].products[0]});return}default:n.reply.push({text:de([`"Best" really depends on what you're doing — what's the plan?`,"They're each best at something — what will you be doing in it?"]),chips:[...Cn.activity]}),t.step="guiding";return}}function xR(s,t){const n=Ci.filter(u=>s.includes(u.toLowerCase())),[a,o]=n.length>=2?[n[0],n[1]]:[t.fabric??"Nulu",n[0]&&n[0]!==t.fabric?n[0]:"Luxtreme"],c=u=>`${u}: ${on[u].blurb.toLowerCase()} Best for ${kn[u].bestFor.slice(0,2).join(" & ").toLowerCase()}.`;return{text:`${a} vs ${o} —
${c(a)}
${c(o)}
Want me to load either one so you can feel it?`}}function Ix(){return[{text:de(["Hi — I'm your Fabric Lab expert. Ask me anything about lululemon's fabrics and I'll show you on the cloth: how they feel, stretch, drape and hold up.","Welcome — I know these fabrics inside out. Ask me anything, and I'll demonstrate right on the cloth. What can I help you figure out?"])},{text:"You can tell me what you'll be doing and I'll find your match — or just ask a question.",chips:[...Cn.activity]}]}function yR(s,t){const n={...s,answers:{...s.answers}},a=t.toLowerCase().trim(),o={ctx:n,reply:[]};if(Zt(a,["start over","restart","reset chat","begin again","start again"]))return o.ctx={...H0},o.reply=[{text:de(["Fresh start — let's go.","Clean slate."])},...Ix()],o;if(Zt(a,["thank","thanks","ty ","appreciate","cheers"]))return o.reply=[{text:de(["Anytime — happy moving.","My pleasure.","You got it."])}],o;if(a.length<=6&&Zt(a,["hi","hey","hello","yo","sup","hola"]))return o.reply=[{text:de(["Hey! Ask me anything about the fabrics, or tell me what you'll be doing in it.","Hi there — what are you shopping for?"]),chips:[...Cn.explore]}],o;if(Zt(a,["help","what can you","how does this work","what do you do","options"]))return o.reply=[{text:"I can find your ideal fabric, explain what each one means, how it feels, stretches, drapes and holds up, compare them, recolor the cloth, and point you to the right product. I'll show you on the fabric as we go. What are you after?",chips:[...Cn.explore]}],o;const c=lR(a),u=cR(a),h=uR(a),m=fR(a);c&&(n.answers.activity=c),u&&(n.answers.sweat=u),h&&(n.answers.feel=h),m&&(n.answers.care=m);const d=!!(c||u||h||m),g=dR(a);if(g)return o.demo=[g],o.reply=[{text:{reset:de(["Resetting to a clean drape.","Dropped it fresh."]),nudge:de(["Giving it a nudge.","There it goes."]),closeup:de(["Moving in close.","Here's a closer look."]),zoomout:de(["Pulling back for the full piece.","Zooming out."]),spin:de(["Turning it through the light.","Sweeping it round."])}[g]}],o;const _=Ci.filter(A=>a.includes(A.toLowerCase())).length>=2;if(Zt(a,["compare","difference","versus"," vs "," vs","vs."])||_)return o.reply=[xR(a,n)],o;const x=oR(a),b=L1(a);if(x){if(n.fabric=x,n.step="open",o.selectFabric=x,b){const A=F1(b,x);A.demo&&(o.demo=A.demo),o.reply=[{text:`${x} — ${kn[x].meaning}`},{text:A.text}]}else o.reply=[{text:`${x} — ${kn[x].meaning}`},{text:`${kn[x].feel} Best for ${kn[x].bestFor.slice(0,3).join(", ").toLowerCase()}. Drag it to feel the drape.`},{text:"Want to see it in a color, or have me show its stretch or drape?",swatch:on[x].material.baseColor,chips:[...Cn.demos,{label:"See colors",value:"see colors"}]}];return o}if(Zt(a,["see color","see colors","show color","colours","what colors","color options"]))return o.reply=[{text:n.fabric?`Here are colors for ${n.fabric} — pick one:`:"Pick a color and I'll apply it:",swatch:n.fabric?on[n.fabric].material.baseColor:void 0,chips:G0()}],n.step=n.fabric?"recommended":n.step,o;const w=hR(a);if(w&&n.fabric)return n.colorHex=w.hex,n.colorName=w.name,o.setColor=w.hex,!n.colorName||n.step,o.reply=O1(n.fabric,w.name),n.step="open",o;if(Zt(a,["surprise","random color","you pick","any color"])&&n.fabric){const A=de(Yu);return n.colorHex=A.hex,n.colorName=A.name,o.setColor=A.hex,o.reply=[{text:`Let's go with ${A.name}.`},...O1(n.fabric,A.name).slice(1)],n.step="open",o}const S=pR(a);if(S)return _R(S,n,o),o;if(Zt(a,["water","wet","moist","rain","splash","sweat","wick","absorb","soak","droplet","waterproof","water resistant","water-resistant","repel"]))return o.demo=["splash"],o.reply=[{text:ER(n.fabric)}],(n.step==="open"||n.step==="recommended")&&o.reply.push({text:"Want to see anything else?",chips:[...Cn.demos]}),o;const M=L1(a);if(M){const A=F1(M,n.fabric);return A.demo&&(o.demo=A.demo),o.reply=[{text:A.text}],(n.step==="open"||n.step==="recommended")&&o.reply.push({text:"Anything else you'd like to see?",chips:[...Cn.demos]}),o}if(Zt(a,["wash","care","clean it","dry it","shrink","launder","machine wash"]))return o.reply=[gR(n.fabric)],o;if(Zt(a,["what is","what does","mean","why called","what's a","tell me about"])&&(x||n.fabric)){const A=x??n.fabric;return o.reply=[{text:`${A} — ${kn[A].meaning}`},{text:kn[A].feel}],o}if(Zt(a,["price","cost","how much","buy","shop","purchase","link","where can i"]))return n.fabric?o.reply=[{text:`Here's the piece I'd recommend in ${n.fabric}:`,product:kn[n.fabric].products[0]}]:o.reply=[{text:"Let's land on a fabric first — what will you be doing in it?",chips:[...Cn.activity]}],o;if(Zt(a,["list","the fabrics","all the fabric","what are the","options","overview","which fabrics"]))return o.reply=[vR()],o;const L=Zt(a,["recommend","suggest","what should i","help me choose","help me pick","which one","what do you recommend","i need","looking for","find my match","match me","pick for me"]);if(L&&Vd(n.answers)>=1)return kd(n,o,de(["Based on that, ","Got it — "])),o;if(Vd(n.answers)>=2)return kd(n,o),o;if(L){const A=I1(n.answers);return o.reply=[{text:de(["Happy to — quick question first.","Let's find it — one thing first."])},A.msg],n.step="guiding",o}if(d){const A=c?MR(c):h?bR(h):u?SR(u):TR(m);return n.step="guiding",Vd(n.answers)>=2?(o.reply=[{text:A}],kd(n,o),o):(o.reply=[{text:A},I1(n.answers).msg],o)}if(Zt(a,["return","refund","ship","delivery","order","track","store near","coupon","discount","sale"]))return o.reply=[{text:"That's one for lululemon.com or a store — I'm the fabric side of things. But I can tell you which fabric fits your workout and how it feels. Want to start there?",chips:[...Cn.explore]}],o;if(Zt(a,["yes","yeah","yep","sure","ok","okay","please do","go for it"])&&n.fabric&&n.step!=="open")return o.reply=[{text:`Here are colors for ${n.fabric}:`,swatch:on[n.fabric].material.baseColor,chips:G0()}],o;const P=n.fabric;return o.reply=[{text:de([P?`We're looking at ${P} right now — I can show its stretch, drape or feel, dye it a new color, or compare it with another. What sounds good?`:"I'm your fabric expert — I can find your match, explain any fabric, show how it feels and moves, and point you to the right product. Where should we start?",P?`Ask me how ${P} feels, how it holds up, or what it's made of — or say a color and I'll dye it. What are you curious about?`:"Tell me what you'll be doing in it and I'll match you — or ask about any fabric by name.","Happy to dig in — I know how each fabric feels, stretches, drapes and lasts, and which suits which workout. What would help most?"]),chips:P?[...Cn.demos,{label:"Compare",value:"compare fabrics"}]:[...Cn.explore]}],o}function MR(s){return{yoga:de(["Yoga — soft and unrestrictive is the goal.","Flow work rewards a soft, stretchy fabric."]),run:de(["A runner — lightweight and sweat-wicking matter most.","Running: breathability and stay-put support."]),studio:de(["Studio sweat — versatile and quick-drying wins.","HIIT and classes ask for grip, wick and recovery."]),everyday:de(["Everyday and travel — comfort that looks pulled-together.","All-day wear — structure and easy care count."])}[s]}function SR(s){return{low:de(["Cool and dry — the softer fabrics open up.","Barely a bead, noted."]),med:de(["A moderate glow — lots of options.","Middle of the road, got it."]),high:de(["A proper sweat — we'll lean into wicking, quick-dry fabrics.","You run hot — good to know."])}[s]}function bR(s){return{soft:de(["Buttery and barely-there — my favorite.","Second-skin soft, noted."]),smooth:de(["Smooth and supported — got it.","Sleek and compressive."]),cushioned:de(["Something with body and cushion.","A bit more heft, noted."]),structured:de(["Structured and polished.","Crisp and put-together, love it."])}[s]}function ER(s){const t=de(["Let me pour some water on it.","Splashing it now — watch what happens.","Here comes the water."]);return s?`${t} ${{Nulu:"Nulu drinks it in — see it darken and spread. Soft knits absorb, so they hold moisture rather than shedding it.",Luon:"Luon soaks it up and darkens — cottony and comfy, but it absorbs sweat rather than repelling it.",Luxtreme:"Luxtreme does a bit of both — some beads roll off while the rest wicks and spreads to dry fast. That's the sweat-wicking trick.",Everlux:"Everlux wicks it away — it darkens as it pulls moisture across the surface to dry quickly. Built for sweaty sessions.",Warpstreme:"Warpstreme repels it — watch the beads form and roll straight off the folds. The tight woven face sheds water."}[s]}`:`${t} Woven fabrics bead and roll water off; soft knits soak it in and wick.`}function TR(s){return{easy:de(["And low-fuss laundry — durability it is.","Toss-and-go care, understood."]),ok:de(["Happy to hand-wash — keeps the delicate ones in play.","A little TLC is fine, noted."])}[s]}const AR={background:"#f5f5f5",exposure:.82,environment:1.05,bloom:0,bloomThreshold:1.4,noise:.04,toneMapping:"Neutral",occlusion:!0,occlusionStrength:.7,dof:!1,dofAperture:40,dofBlur:.04,dofRange:.3};function Mu(s,t){const n=on[s];return{performance:"High",physics:{...n.physics},material:{fabric:s,...n.material,baseColor:t??n.material.baseColor},images:{edit:!1,useImage:!1,scale:.35,rotation:0,opacity:1,cornerRadius:0},render:{...AR}}}const B1=8.5,wR=300,RR=s=>s*s*s,CR=s=>1-Math.pow(1-s,3);function DR(){const s=tn.useRef(null),t=tn.useRef(null),[n,a]=tn.useState(U1),[o,c]=tn.useState(null),[u,h]=tn.useState(null),[m,d]=tn.useState(!0),[g,_]=tn.useState("none"),[v,x]=tn.useState(!1),b=tn.useRef(!1),w=tn.useRef(null),[S,M]=tn.useState([]),[L,P]=tn.useState(""),A=tn.useRef({...H0}),F=tn.useRef(0),N=tn.useRef(null);tn.useEffect(()=>{if(!s.current)return;const z=new sR(s.current);return t.current=z,z.onDecalSelect=()=>{},z.onImagesChanged=()=>{},z.onARChange=et=>{b.current=et,x(et)},z.setSlideOffset(0),z.applyParams(Mu(n)),z.applyFabric(on[n].weave),z.setWet(on[n].wet),z.reveal(),()=>{z.dispose(),t.current=null}},[]);const O=tn.useRef(!0),T=tn.useRef(U1),U=tn.useRef(0),W=tn.useRef(null);tn.useEffect(()=>{const z=t.current;if(!z)return;const et=T.current;if(T.current=n,O.current){O.current=!1,z.setSlideOffset(0),z.applyParams(Mu(n)),z.applyFabric(on[n].weave),z.setWet(on[n].wet);return}if(b.current){z.applyParams(Mu(n)),z.applyFabric(on[n].weave),z.setWet(on[n].wet),z.resetCloth();return}if(et===n)return;c(null),W.current?.(),W.current=null;const D=Ci.indexOf(n)>Ci.indexOf(et)?-B1:B1,X=-D,_t=(Et,Tt,tt,Mt)=>{const St=performance.now();let It=0;const ne=Qt=>{const Ue=Math.min(1,(Qt-St)/wR),oe=Et+(Tt-Et)*tt(Ue);U.current=oe,t.current?.setSlideOffset(oe),Ue<1?It=requestAnimationFrame(ne):Mt?.()};It=requestAnimationFrame(ne),W.current=()=>cancelAnimationFrame(It)};return _t(U.current,D,RR,()=>{z.applyParams(Mu(n)),z.applyFabric(on[n].weave),z.setWet(on[n].wet),z.resetCloth(),U.current=X,z.setSlideOffset(X),_t(X,0,CR,()=>{W.current=null})}),()=>{W.current?.()}},[n]),tn.useEffect(()=>{o!=null&&t.current?.setColor(o)},[o]),tn.useEffect(()=>{N.current?.scrollTo({top:N.current.scrollHeight,behavior:"smooth"})},[S]),tn.useEffect(()=>{let z=0,et=0,mt=performance.now(),D=0;const X=Et=>{if(et++,D+=Et-mt,mt=Et,D>=500){const Tt=performance.memory,tt=t.current?.getRenderStats();h({fps:Math.round(et*1e3/D),frameMs:+(D/et).toFixed(1),heapUsed:Tt?Math.round(Tt.usedJSHeapSize/1048576):null,heapLimit:Tt?Math.round(Tt.jsHeapSizeLimit/1048576):null,calls:tt?.calls??0,tris:tt?.triangles??0,geometries:tt?.geometries??0,textures:tt?.textures??0,verts:tt?.clothVerts??0,segments:tt?.segments??0,pr:tt?.pixelRatio??1}),et=0,D=0}z=requestAnimationFrame(X)};z=requestAnimationFrame(X);const _t=Et=>{const Tt=Et.target;Tt&&(Tt.tagName==="INPUT"||Tt.tagName==="TEXTAREA")||Et.key==="`"&&d(tt=>!tt)};return window.addEventListener("keydown",_t),()=>{cancelAnimationFrame(z),window.removeEventListener("keydown",_t)}},[]),tn.useEffect(()=>{let z=!0;return(async()=>{const et=navigator.xr;try{if(et&&await et.isSessionSupported?.("immersive-ar")){z&&_("webxr");return}}catch{}const mt=navigator.userAgent,D=/iphone|ipad|ipod/i.test(mt)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;z&&_(D?"quicklook":"none")})(),()=>{z=!1}},[]);const V=async()=>{const z=t.current;if(z){if(g==="webxr")b.current=!0,x(!0),await z.startAR(w.current)||(b.current=!1,x(!1));else if(g==="quicklook")try{const et=await z.exportUSDZ(),mt=new Blob([et],{type:"model/vnd.usdz+zip"}),D=URL.createObjectURL(mt),X=document.createElement("a");X.setAttribute("rel","ar"),X.href=D,X.appendChild(document.createElement("img")),document.body.appendChild(X),X.click(),window.setTimeout(()=>{X.remove(),URL.revokeObjectURL(D)},15e3)}catch(et){console.error("[AR] USDZ export failed",et)}}},Y=z=>M(et=>[...et,{id:F.current++,...z}]),ut=z=>{const et=t.current;et&&z.forEach(mt=>{mt==="reset"?et.resetCloth():mt==="nudge"?et.poke():mt==="stretch"?et.demoStretch():mt==="closeup"?et.zoomTo(.6):mt==="zoomout"?et.zoomTo(1.12):mt==="spin"?et.spin():mt==="drape"?(et.resetCloth(),window.setTimeout(()=>t.current?.poke(),140)):mt==="splash"&&et.splash()})},ft=(z,et)=>{const mt=z.trim();if(!mt)return;Y({role:"user",text:et??mt});const D=yR(A.current,mt);A.current=D.ctx,D.selectFabric&&a(D.selectFabric),Object.prototype.hasOwnProperty.call(D,"setColor")&&c(D.setColor??null),D.demo&&ut(D.demo),D.reply.forEach((X,_t)=>setTimeout(()=>Y({role:"bot",...X}),260*_t+220)),P("")},Q=()=>{A.current={...H0},M([]),Ix().forEach((z,et)=>setTimeout(()=>Y({role:"bot",...z}),200*et+150))},B=S[S.length-1],H=z=>Yu.find(et=>et.name===z)?.hex;return Ht.jsxs(Ht.Fragment,{children:[Ht.jsx("div",{id:"canvas-host",ref:s}),Ht.jsxs("div",{className:"ui",children:[Ht.jsxs("div",{className:"topbar",children:[Ht.jsxs("div",{className:"brand",children:[Ht.jsx("span",{className:"k",children:"lululemon"}),Ht.jsx("span",{className:"t",children:"Fabric Lab"})]}),g!=="none"&&Ht.jsx("button",{className:"pill accent",onClick:V,children:"View in AR"})]}),Ht.jsxs("div",{className:"perf-wrap",children:[Ht.jsx("button",{className:"perf-toggle",onClick:()=>d(z=>!z),children:m?"× metrics":"metrics"}),m&&u&&Ht.jsxs("div",{className:"perf",children:[Ht.jsxs("div",{className:"prow",children:[Ht.jsx("span",{children:"fps"}),Ht.jsx("b",{style:{color:u.fps>=50?"#1f9d55":u.fps>=30?"#b8860b":"#d1202f"},children:u.fps})]}),Ht.jsxs("div",{className:"prow",children:[Ht.jsx("span",{children:"frame"}),Ht.jsxs("b",{children:[u.frameMs," ms"]})]}),Ht.jsxs("div",{className:"prow",children:[Ht.jsx("span",{children:"js heap"}),Ht.jsx("b",{children:u.heapUsed!=null?`${u.heapUsed} / ${u.heapLimit} MB`:"n/a*"})]}),Ht.jsxs("div",{className:"prow",children:[Ht.jsx("span",{children:"draw calls"}),Ht.jsx("b",{children:u.calls})]}),Ht.jsxs("div",{className:"prow",children:[Ht.jsx("span",{children:"triangles"}),Ht.jsxs("b",{children:[(u.tris/1e3).toFixed(0),"k"]})]}),Ht.jsxs("div",{className:"prow",children:[Ht.jsx("span",{children:"geometries"}),Ht.jsx("b",{children:u.geometries})]}),Ht.jsxs("div",{className:"prow",children:[Ht.jsx("span",{children:"textures"}),Ht.jsx("b",{children:u.textures})]}),Ht.jsxs("div",{className:"prow",children:[Ht.jsx("span",{children:"cloth verts"}),Ht.jsxs("b",{children:[u.verts.toLocaleString()," · ",u.segments,"²"]})]}),Ht.jsxs("div",{className:"prow",children:[Ht.jsx("span",{children:"pixel ratio"}),Ht.jsxs("b",{children:[u.pr,"×"]})]}),u.heapUsed==null&&Ht.jsx("div",{className:"pnote",children:"*JS heap is Chrome-only"})]})]}),Ht.jsx("button",{className:"splash-btn",onClick:()=>t.current?.splash(),children:"Splash water"}),Ht.jsxs("div",{className:"convo",children:[Ht.jsx("div",{className:"stream",ref:N,children:S.slice(-8).map(z=>Ht.jsxs("div",{className:"msg "+z.role,children:[Ht.jsx("span",{children:z.text}),z.product&&Ht.jsxs("a",{className:"prodcard",href:z.product.url,target:"_blank",rel:"noreferrer",children:[Ht.jsx("span",{className:"pn",children:z.product.name}),Ht.jsxs("span",{className:"pp",children:[z.product.price," →"]})]})]},z.id))}),B?.chips&&B.role==="bot"&&Ht.jsx("div",{className:"chips",children:B.chips.map(z=>Ht.jsxs("button",{className:"chip2",onClick:()=>ft(z.value,z.label),children:[H(z.value)&&Ht.jsx("span",{className:"cdot",style:{background:H(z.value)}}),z.label]},z.value))}),Ht.jsxs("form",{className:"ask",onSubmit:z=>{z.preventDefault(),ft(L)},children:[Ht.jsx("input",{value:L,onChange:z=>P(z.target.value),placeholder:"Say anything…","aria-label":"Message the Fabric Lab guide"}),Ht.jsx("button",{className:"askbtn",type:"submit","aria-label":"Send",children:"→"})]}),Ht.jsx("button",{className:"restart",onClick:Q,children:"Start over"})]}),Ht.jsx("div",{className:"rail",children:Ci.map(z=>Ht.jsxs("button",{className:z===n?"sel":"",onClick:()=>ft(on[z].label,on[z].label),children:[Ht.jsx("span",{className:"dot",style:{background:on[z].material.baseColor}}),on[z].label]},z))})]}),Ht.jsxs("div",{id:"ar-overlay",ref:w,style:{display:v?"flex":"none"},children:[Ht.jsxs("div",{className:"ar-top",children:[Ht.jsx("span",{className:"ar-brand",children:"Fabric Lab · AR"}),Ht.jsx("button",{className:"ar-exit",onClick:()=>t.current?.endAR(),children:"Exit AR"})]}),Ht.jsxs("div",{className:"ar-bottom",children:[Ht.jsx("div",{className:"ar-rail",children:Ci.map(z=>Ht.jsxs("button",{className:z===n?"sel":"",onClick:()=>a(z),children:[Ht.jsx("span",{className:"dot",style:{background:on[z].material.baseColor}}),on[z].label]},z))}),Ht.jsx("button",{className:"ar-poke",onClick:()=>t.current?.splash(),children:"Splash"}),Ht.jsx("button",{className:"ar-poke",onClick:()=>t.current?.poke(),children:"Nudge it"})]})]})]})}ZM.createRoot(document.getElementById("root")).render(Ht.jsx(DR,{}));
