(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var $h={exports:{}},cl={};var e_;function zM(){if(e_)return cl;e_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return cl.Fragment=e,cl.jsx=n,cl.jsxs=n,cl}var t_;function HM(){return t_||(t_=1,$h.exports=zM()),$h.exports}var ke=HM(),Jh={exports:{}},ul={},ed={exports:{}},td={};var n_;function GM(){return n_||(n_=1,(function(s){function e(B,H){var z=B.length;B.push(H);e:for(;0<z;){var te=z-1>>>1,me=B[te];if(0<o(me,H))B[te]=H,B[z]=me,z=te;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var H=B[0],z=B.pop();if(z!==H){B[0]=z;e:for(var te=0,me=B.length,D=me>>>1;te<D;){var W=2*(te+1)-1,_e=B[W],Ee=W+1,Te=B[Ee];if(0>o(_e,z))Ee<me&&0>o(Te,_e)?(B[te]=Te,B[Ee]=z,te=Ee):(B[te]=_e,B[W]=z,te=W);else if(Ee<me&&0>o(Te,z))B[te]=Te,B[Ee]=z,te=Ee;else break e}}return H}function o(B,H){var z=B.sortIndex-H.sortIndex;return z!==0?z:B.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var m=[],p=[],g=1,_=null,v=3,x=!1,b=!1,R=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var H=n(p);H!==null;){if(H.callback===null)a(p);else if(H.startTime<=B)a(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=n(p)}}function I(B){if(R=!1,A(B),!b)if(n(m)!==null)b=!0,N||(N=!0,Y());else{var H=n(p);H!==null&&Q(I,H.startTime-B)}}var N=!1,F=-1,T=5,U=-1;function X(){return S?!0:!(s.unstable_now()-U<T)}function V(){if(S=!1,N){var B=s.unstable_now();U=B;var H=!0;try{e:{b=!1,R&&(R=!1,P(F),F=-1),x=!0;var z=v;try{t:{for(A(B),_=n(m);_!==null&&!(_.expirationTime>B&&X());){var te=_.callback;if(typeof te=="function"){_.callback=null,v=_.priorityLevel;var me=te(_.expirationTime<=B);if(B=s.unstable_now(),typeof me=="function"){_.callback=me,A(B),H=!0;break t}_===n(m)&&a(m),A(B)}else a(m);_=n(m)}if(_!==null)H=!0;else{var D=n(p);D!==null&&Q(I,D.startTime-B),H=!1}}break e}finally{_=null,v=z,x=!1}H=void 0}}finally{H?Y():N=!1}}}var Y;if(typeof L=="function")Y=function(){L(V)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=V,Y=function(){fe.postMessage(null)}}else Y=function(){M(V,0)};function Q(B,H){F=M(function(){B(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var z=v;v=H;try{return B()}finally{v=z}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var z=v;v=B;try{return H()}finally{v=z}},s.unstable_scheduleCallback=function(B,H,z){var te=s.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?te+z:te):z=te,B){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=z+me,B={id:g++,callback:H,priorityLevel:B,startTime:z,expirationTime:me,sortIndex:-1},z>te?(B.sortIndex=z,e(p,B),n(m)===null&&B===n(p)&&(R?(P(F),F=-1):R=!0,Q(I,z-te))):(B.sortIndex=me,e(m,B),b||x||(b=!0,N||(N=!0,Y()))),B},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(B){var H=v;return function(){var z=v;v=H;try{return B.apply(this,arguments)}finally{v=z}}}})(td)),td}var i_;function VM(){return i_||(i_=1,ed.exports=GM()),ed.exports}var nd={exports:{}},lt={};var a_;function kM(){if(a_)return lt;a_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function M(D,W,_e){this.props=D,this.context=W,this.refs=S,this.updater=_e||b}M.prototype.isReactComponent={},M.prototype.setState=function(D,W){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,W,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function P(){}P.prototype=M.prototype;function L(D,W,_e){this.props=D,this.context=W,this.refs=S,this.updater=_e||b}var A=L.prototype=new P;A.constructor=L,R(A,M.prototype),A.isPureReactComponent=!0;var I=Array.isArray;function N(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(D,W,_e){var Ee=_e.ref;return{$$typeof:s,type:D,key:W,ref:Ee!==void 0?Ee:null,props:_e}}function X(D,W){return U(D.type,W,D.props)}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function Y(D){var W={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(_e){return W[_e]})}var ue=/\/+/g;function fe(D,W){return typeof D=="object"&&D!==null&&D.key!=null?Y(""+D.key):W.toString(36)}function Q(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(W){D.status==="pending"&&(D.status="fulfilled",D.value=W)},function(W){D.status==="pending"&&(D.status="rejected",D.reason=W)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function B(D,W,_e,Ee,Te){var ee=typeof D;(ee==="undefined"||ee==="boolean")&&(D=null);var Me=!1;if(D===null)Me=!0;else switch(ee){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(D.$$typeof){case s:case e:Me=!0;break;case g:return Me=D._init,B(Me(D._payload),W,_e,Ee,Te)}}if(Me)return Te=Te(D),Me=Ee===""?"."+fe(D,0):Ee,I(Te)?(_e="",Me!=null&&(_e=Me.replace(ue,"$&/")+"/"),B(Te,W,_e,"",function(nt){return nt})):Te!=null&&(V(Te)&&(Te=X(Te,_e+(Te.key==null||D&&D.key===Te.key?"":(""+Te.key).replace(ue,"$&/")+"/")+Me)),W.push(Te)),1;Me=0;var Se=Ee===""?".":Ee+":";if(I(D))for(var Ie=0;Ie<D.length;Ie++)Ee=D[Ie],ee=Se+fe(Ee,Ie),Me+=B(Ee,W,_e,ee,Te);else if(Ie=x(D),typeof Ie=="function")for(D=Ie.call(D),Ie=0;!(Ee=D.next()).done;)Ee=Ee.value,ee=Se+fe(Ee,Ie++),Me+=B(Ee,W,_e,ee,Te);else if(ee==="object"){if(typeof D.then=="function")return B(Q(D),W,_e,Ee,Te);throw W=String(D),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Me}function H(D,W,_e){if(D==null)return D;var Ee=[],Te=0;return B(D,Ee,"","",function(ee){return W.call(_e,ee,Te++)}),Ee}function z(D){if(D._status===-1){var W=D._result;W=W(),W.then(function(_e){(D._status===0||D._status===-1)&&(D._status=1,D._result=_e)},function(_e){(D._status===0||D._status===-1)&&(D._status=2,D._result=_e)}),D._status===-1&&(D._status=0,D._result=W)}if(D._status===1)return D._result.default;throw D._result}var te=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},me={map:H,forEach:function(D,W,_e){H(D,function(){W.apply(this,arguments)},_e)},count:function(D){var W=0;return H(D,function(){W++}),W},toArray:function(D){return H(D,function(W){return W})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return lt.Activity=_,lt.Children=me,lt.Component=M,lt.Fragment=n,lt.Profiler=o,lt.PureComponent=L,lt.StrictMode=a,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,lt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return F.H.useMemoCache(D)}},lt.cache=function(D){return function(){return D.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(D,W,_e){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Ee=R({},D.props),Te=D.key;if(W!=null)for(ee in W.key!==void 0&&(Te=""+W.key),W)!T.call(W,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&W.ref===void 0||(Ee[ee]=W[ee]);var ee=arguments.length-2;if(ee===1)Ee.children=_e;else if(1<ee){for(var Me=Array(ee),Se=0;Se<ee;Se++)Me[Se]=arguments[Se+2];Ee.children=Me}return U(D.type,Te,Ee)},lt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},lt.createElement=function(D,W,_e){var Ee,Te={},ee=null;if(W!=null)for(Ee in W.key!==void 0&&(ee=""+W.key),W)T.call(W,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Te[Ee]=W[Ee]);var Me=arguments.length-2;if(Me===1)Te.children=_e;else if(1<Me){for(var Se=Array(Me),Ie=0;Ie<Me;Ie++)Se[Ie]=arguments[Ie+2];Te.children=Se}if(D&&D.defaultProps)for(Ee in Me=D.defaultProps,Me)Te[Ee]===void 0&&(Te[Ee]=Me[Ee]);return U(D,ee,Te)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(D){return{$$typeof:h,render:D}},lt.isValidElement=V,lt.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:z}},lt.memo=function(D,W){return{$$typeof:p,type:D,compare:W===void 0?null:W}},lt.startTransition=function(D){var W=F.T,_e={};F.T=_e;try{var Ee=D(),Te=F.S;Te!==null&&Te(_e,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(N,te)}catch(ee){te(ee)}finally{W!==null&&_e.types!==null&&(W.types=_e.types),F.T=W}},lt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},lt.use=function(D){return F.H.use(D)},lt.useActionState=function(D,W,_e){return F.H.useActionState(D,W,_e)},lt.useCallback=function(D,W){return F.H.useCallback(D,W)},lt.useContext=function(D){return F.H.useContext(D)},lt.useDebugValue=function(){},lt.useDeferredValue=function(D,W){return F.H.useDeferredValue(D,W)},lt.useEffect=function(D,W){return F.H.useEffect(D,W)},lt.useEffectEvent=function(D){return F.H.useEffectEvent(D)},lt.useId=function(){return F.H.useId()},lt.useImperativeHandle=function(D,W,_e){return F.H.useImperativeHandle(D,W,_e)},lt.useInsertionEffect=function(D,W){return F.H.useInsertionEffect(D,W)},lt.useLayoutEffect=function(D,W){return F.H.useLayoutEffect(D,W)},lt.useMemo=function(D,W){return F.H.useMemo(D,W)},lt.useOptimistic=function(D,W){return F.H.useOptimistic(D,W)},lt.useReducer=function(D,W,_e){return F.H.useReducer(D,W,_e)},lt.useRef=function(D){return F.H.useRef(D)},lt.useState=function(D){return F.H.useState(D)},lt.useSyncExternalStore=function(D,W,_e){return F.H.useSyncExternalStore(D,W,_e)},lt.useTransition=function(){return F.H.useTransition()},lt.version="19.2.7",lt}var s_;function k0(){return s_||(s_=1,nd.exports=kM()),nd.exports}var id={exports:{}},Yn={};var r_;function XM(){if(r_)return Yn;r_=1;var s=k0();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Yn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Yn.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},Yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Yn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Yn.requestFormReset=function(m){a.d.r(m)},Yn.unstable_batchedUpdates=function(m,p){return m(p)},Yn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},Yn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var o_;function WM(){if(o_)return id.exports;o_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),id.exports=XM(),id.exports}var l_;function qM(){if(l_)return ul;l_=1;var s=VM(),e=k0(),n=WM();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,l=i;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return m(f),t;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=d;else{for(var y=!1,C=f.child;C;){if(C===r){y=!0,r=f,l=d;break}if(C===l){y=!0,l=f,r=d;break}C=C.sibling}if(!y){for(C=d.child;C;){if(C===r){y=!0,r=d,l=f;break}if(C===l){y=!0,l=d,r=f;break}C=C.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case M:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case N:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case L:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case A:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:fe(t.type)||"Memo";case T:i=t._payload,t=t._init;try{return fe(t(i))}catch{}}return null}var Q=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},te=[],me=-1;function D(t){return{current:t}}function W(t){0>me||(t.current=te[me],te[me]=null,me--)}function _e(t,i){me++,te[me]=t.current,t.current=i}var Ee=D(null),Te=D(null),ee=D(null),Me=D(null);function Se(t,i){switch(_e(ee,i),_e(Te,t),_e(Ee,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?bv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=bv(i),t=Ev(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(Ee),_e(Ee,t)}function Ie(){W(Ee),W(Te),W(ee)}function nt(t){t.memoizedState!==null&&_e(Me,t);var i=Ee.current,r=Ev(i,t.type);i!==r&&(_e(Te,t),_e(Ee,r))}function Ke(t){Te.current===t&&(W(Ee),W(Te)),Me.current===t&&(W(Me),sl._currentValue=z)}var Ut,ot;function gt(t){if(Ut===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Ut=i&&i[1]||"",ot=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+t+ot}var At=!1;function _t(t,i){if(!t||At)return"";At=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ce){var le=ce}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(ce){le=ce}t.call(ye.prototype)}}else{try{throw Error()}catch(ce){le=ce}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],C=d[1];if(y&&C){var G=y.split(`
`),ie=C.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ie.length&&!ie[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===ie.length)for(l=G.length-1,f=ie.length-1;1<=l&&0<=f&&G[l]!==ie[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==ie[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==ie[f]){var ge=`
`+G[l].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=l&&0<=f);break}}}finally{At=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?gt(r):""}function ln(t,i){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==i&&i!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return _t(t.type,!1);case 11:return _t(t.type.render,!1);case 1:return _t(t.type,!0);case 31:return gt("Activity");default:return""}}function cn(t){try{var i="",r=null;do i+=ln(t,r),r=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var un=Object.prototype.hasOwnProperty,pn=s.unstable_scheduleCallback,Qt=s.unstable_cancelCallback,fn=s.unstable_shouldYield,K=s.unstable_requestPaint,kt=s.unstable_now,Nt=s.unstable_getCurrentPriorityLevel,O=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,J=s.unstable_NormalPriority,re=s.unstable_LowPriority,de=s.unstable_IdlePriority,Ae=s.log,De=s.unstable_setDisableYieldValue,he=null,pe=null;function Re(t){if(typeof Ae=="function"&&De(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(he,t)}catch{}}var Be=Math.clz32?Math.clz32:$e,Le=Math.log,Ue=Math.LN2;function $e(t){return t>>>=0,t===0?32:31-(Le(t)/Ue|0)|0}var Je=256,rt=262144,q=4194304;function we(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,i,r){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~d,l!==0?f=we(l):(y&=C,y!==0?f=we(y):r||(r=C&~t,r!==0&&(f=we(r))))):(C=l&~d,C!==0?f=we(C):y!==0?f=we(y):r||(r=l&~t,r!==0&&(f=we(r)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:f}function Ce(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Fe(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function qe(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Ge(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,i,r,l,f,d){var y=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,ie=t.hiddenUpdates;for(r=y&~r;0<r;){var ge=31-Be(r),ye=1<<ge;C[ge]=0,G[ge]=-1;var le=ie[ge];if(le!==null)for(ie[ge]=null,ge=0;ge<le.length;ge++){var ce=le[ge];ce!==null&&(ce.lane&=-536870913)}r&=~ye}l!==0&&Ft(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~i))}function Ft(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Be(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function di(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-Be(r),f=1<<l;f&i|t[l]&i&&(t[l]|=i),r&=~f}}function pi(t,i){var r=i&-i;return r=(r&42)!==0?1:xo(r),(r&(t.suspendedLanes|i))!==0?0:r}function xo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mo(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Yv(t.type))}function lr(t,i){var r=H.p;try{return H.p=t,i()}finally{H.p=r}}var ta=Math.random().toString(36).slice(2),vn="__reactFiber$"+ta,Fn="__reactProps$"+ta,ii="__reactContainer$"+ta,Cs="__reactEvents$"+ta,Pl="__reactListeners$"+ta,Ol="__reactHandles$"+ta,Ds="__reactResources$"+ta,Wa="__reactMarker$"+ta;function qa(t){delete t[vn],delete t[Fn],delete t[Cs],delete t[Pl],delete t[Ol]}function pa(t){var i=t[vn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[ii]||r[vn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=Uv(t);t!==null;){if(r=t[vn])return r;t=Uv(t)}return i}t=r,r=t.parentNode}return null}function ma(t){if(t=t[vn]||t[ii]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Us(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Ya(t){var i=t[Ds];return i||(i=t[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function _n(t){t[Wa]=!0}var Il=new Set,w={};function Z(t,i){oe(t,i),oe(t+"Capture",i)}function oe(t,i){for(w[t]=i,t=0;t<i.length;t++)Il.add(i[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Pe={};function He(t){return un.call(Pe,t)?!0:un.call(se,t)?!1:ae.test(t)?Pe[t]=!0:(se[t]=!0,!1)}function Ne(t,i,r){if(He(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function Xe(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function Ve(t,i,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+l)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t,i,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){r=""+y,d.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Rt(t){if(!t._valueTracker){var i=ft(t)?"checked":"value";t._valueTracker=je(t,i,""+t[i])}}function an(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=ft(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bt=/[\n"\\]/g;function zt(t){return t.replace(Bt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ze(t,i,r,l,f,d,y,C){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+et(i)):t.value!==""+et(i)&&(t.value=""+et(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?xt(t,y,et(i)):r!=null?xt(t,y,et(r)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+et(C):t.removeAttribute("name")}function qn(t,i,r,l,f,d,y,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Rt(t);return}r=r!=null?""+et(r):"",i=i!=null?""+et(i):r,C||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Rt(t)}function xt(t,i,r){i==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Tn(t,i,r,l){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&l&&(t[r].defaultSelected=!0)}else{for(r=""+et(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function mi(t,i,r){if(i!=null&&(i=""+et(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+et(r):""}function Hi(t,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(Q(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=et(i),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),Rt(t)}function gi(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var Ht=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,r):typeof r!="number"||r===0||Ht.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function Gi(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&sn(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&sn(t,d,i[d])}function Pt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var na=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Za=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ns(t){return Za.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ga(){}var Zu=null;function Ku(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cr=null,ur=null;function Sp(t){var i=ma(t);if(i&&(t=i.stateNode)){var r=t[Fn]||null;e:switch(t=i.stateNode,i.type){case"input":if(ze(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+zt(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var f=l[Fn]||null;if(!f)throw Error(a(90));ze(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===t.form&&an(l)}break e;case"textarea":mi(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Tn(t,!!r.multiple,i,!1)}}}var Qu=!1;function bp(t,i,r){if(Qu)return t(i,r);Qu=!0;try{var l=t(i);return l}finally{if(Qu=!1,(cr!==null||ur!==null)&&(bc(),cr&&(i=cr,t=ur,ur=cr=null,Sp(i),t)))for(i=0;i<t.length;i++)Sp(t[i])}}function So(t,i){var r=t.stateNode;if(r===null)return null;var l=r[Fn]||null;if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(va)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){ju=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{ju=!1}var Ka=null,$u=null,Fl=null;function Ep(){if(Fl)return Fl;var t,i=$u,r=i.length,l,f="value"in Ka?Ka.value:Ka.textContent,d=f.length;for(t=0;t<r&&i[t]===f[t];t++);var y=r-t;for(l=1;l<=y&&i[r-l]===f[d-l];l++);return Fl=f.slice(t,1<l?1-l:void 0)}function Bl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function Tp(){return!1}function ai(t){function i(r,l,f,d,y){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(r=t[C],this[C]=r?r(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?zl:Tp,this.isPropagationStopped=Tp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=ai(Ls),Eo=_({},Ls,{view:0,detail:0}),Fx=ai(Eo),Ju,ef,To,Gl=_({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(Ju=t.screenX-To.screenX,ef=t.screenY-To.screenY):ef=Ju=0,To=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),Ap=ai(Gl),Bx=_({},Gl,{dataTransfer:0}),zx=ai(Bx),Hx=_({},Eo,{relatedTarget:0}),tf=ai(Hx),Gx=_({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=ai(Gx),kx=_({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xx=ai(kx),Wx=_({},Ls,{data:0}),wp=ai(Wx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Zx[t])?!!i[t]:!1}function nf(){return Kx}var Qx=_({},Eo,{key:function(t){if(t.key){var i=qx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jx=ai(Qx),$x=_({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=ai($x),Jx=_({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),ey=ai(Jx),ty=_({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=ai(ty),iy=_({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=ai(iy),sy=_({},Ls,{newState:0,oldState:0}),ry=ai(sy),oy=[9,13,27,32],af=va&&"CompositionEvent"in window,Ao=null;va&&"documentMode"in document&&(Ao=document.documentMode);var ly=va&&"TextEvent"in window&&!Ao,Cp=va&&(!af||Ao&&8<Ao&&11>=Ao),Dp=" ",Up=!1;function Np(t,i){switch(t){case"keyup":return oy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fr=!1;function cy(t,i){switch(t){case"compositionend":return Lp(i);case"keypress":return i.which!==32?null:(Up=!0,Dp);case"textInput":return t=i.data,t===Dp&&Up?null:t;default:return null}}function uy(t,i){if(fr)return t==="compositionend"||!af&&Np(t,i)?(t=Ep(),Fl=$u=Ka=null,fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Cp&&i.locale!=="ko"?null:i.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!fy[t.type]:i==="textarea"}function Op(t,i,r,l){cr?ur?ur.push(l):ur=[l]:cr=l,i=Dc(i,"onChange"),0<i.length&&(r=new Hl("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var wo=null,Ro=null;function hy(t){vv(t,0)}function Vl(t){var i=Us(t);if(an(i))return t}function Ip(t,i){if(t==="change")return i}var Fp=!1;if(va){var sf;if(va){var rf="oninput"in document;if(!rf){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),rf=typeof Bp.oninput=="function"}sf=rf}else sf=!1;Fp=sf&&(!document.documentMode||9<document.documentMode)}function zp(){wo&&(wo.detachEvent("onpropertychange",Hp),Ro=wo=null)}function Hp(t){if(t.propertyName==="value"&&Vl(Ro)){var i=[];Op(i,Ro,t,Ku(t)),bp(hy,i)}}function dy(t,i,r){t==="focusin"?(zp(),wo=i,Ro=r,wo.attachEvent("onpropertychange",Hp)):t==="focusout"&&zp()}function py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Ro)}function my(t,i){if(t==="click")return Vl(i)}function gy(t,i){if(t==="input"||t==="change")return Vl(i)}function vy(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var vi=typeof Object.is=="function"?Object.is:vy;function Co(t,i){if(vi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!un.call(i,f)||!vi(t[f],i[f]))return!1}return!0}function Gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vp(t,i){var r=Gp(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Gp(r)}}function kp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?kp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Zt(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=Zt(t.document)}return i}function of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var _y=va&&"documentMode"in document&&11>=document.documentMode,hr=null,lf=null,Do=null,cf=!1;function Wp(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;cf||hr==null||hr!==Zt(l)||(l=hr,"selectionStart"in l&&of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Do&&Co(Do,l)||(Do=l,l=Dc(lf,"onSelect"),0<l.length&&(i=new Hl("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=hr)))}function Ps(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var dr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},uf={},qp={};va&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Os(t){if(uf[t])return uf[t];if(!dr[t])return t;var i=dr[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in qp)return uf[t]=i[r];return t}var Yp=Os("animationend"),Zp=Os("animationiteration"),Kp=Os("animationstart"),xy=Os("transitionrun"),yy=Os("transitionstart"),My=Os("transitioncancel"),Qp=Os("transitionend"),jp=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Vi(t,i){jp.set(t,i),Z(i,[t])}var kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ui=[],pr=0,hf=0;function Xl(){for(var t=pr,i=hf=pr=0;i<t;){var r=Ui[i];Ui[i++]=null;var l=Ui[i];Ui[i++]=null;var f=Ui[i];Ui[i++]=null;var d=Ui[i];if(Ui[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}d!==0&&$p(r,f,d)}}function Wl(t,i,r,l){Ui[pr++]=t,Ui[pr++]=i,Ui[pr++]=r,Ui[pr++]=l,hf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function df(t,i,r,l){return Wl(t,i,r,l),ql(t)}function Is(t,i){return Wl(t,null,null,i),ql(t)}function $p(t,i,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var f=!1,d=t.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-Be(r),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=r|536870912),d):null}function ql(t){if(50<$o)throw $o=0,Sh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var mr={};function Sy(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(t,i,r,l){return new Sy(t,i,r,l)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _a(t,i){var r=t.alternate;return r===null?(r=_i(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Jp(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Yl(t,i,r,l,f,d){var y=0;if(l=t,typeof t=="function")pf(t)&&(y=1);else if(typeof t=="string")y=wM(t,r,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=_i(31,r,i,f),t.elementType=U,t.lanes=d,t;case R:return Fs(r.children,f,d,i);case S:y=8,f|=24;break;case M:return t=_i(12,r,i,f|2),t.elementType=M,t.lanes=d,t;case I:return t=_i(13,r,i,f),t.elementType=I,t.lanes=d,t;case N:return t=_i(19,r,i,f),t.elementType=N,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:y=10;break e;case P:y=9;break e;case A:y=11;break e;case F:y=14;break e;case T:y=16,l=null;break e}y=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=_i(y,r,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function Fs(t,i,r,l){return t=_i(7,t,l,i),t.lanes=r,t}function mf(t,i,r){return t=_i(6,t,null,i),t.lanes=r,t}function em(t){var i=_i(18,null,null,0);return i.stateNode=t,i}function gf(t,i,r){return i=_i(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var tm=new WeakMap;function Ni(t,i){if(typeof t=="object"&&t!==null){var r=tm.get(t);return r!==void 0?r:(i={value:t,source:i,stack:cn(i)},tm.set(t,i),i)}return{value:t,source:i,stack:cn(i)}}var gr=[],vr=0,Zl=null,Uo=0,Li=[],Pi=0,Qa=null,ia=1,aa="";function xa(t,i){gr[vr++]=Uo,gr[vr++]=Zl,Zl=t,Uo=i}function nm(t,i,r){Li[Pi++]=ia,Li[Pi++]=aa,Li[Pi++]=Qa,Qa=t;var l=ia;t=aa;var f=32-Be(l)-1;l&=~(1<<f),r+=1;var d=32-Be(i)+f;if(30<d){var y=f-f%5;d=(l&(1<<y)-1).toString(32),l>>=y,f-=y,ia=1<<32-Be(i)+f|r<<f|l,aa=d+t}else ia=1<<d|r<<f|l,aa=t}function vf(t){t.return!==null&&(xa(t,1),nm(t,1,0))}function _f(t){for(;t===Zl;)Zl=gr[--vr],gr[vr]=null,Uo=gr[--vr],gr[vr]=null;for(;t===Qa;)Qa=Li[--Pi],Li[Pi]=null,aa=Li[--Pi],Li[Pi]=null,ia=Li[--Pi],Li[Pi]=null}function im(t,i){Li[Pi++]=ia,Li[Pi++]=aa,Li[Pi++]=Qa,ia=i.id,aa=i.overflow,Qa=t}var Bn=null,$t=null,wt=!1,ja=null,Oi=!1,xf=Error(a(519));function $a(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw No(Ni(i,t)),xf}function am(t){var i=t.stateNode,r=t.type,l=t.memoizedProps;switch(i[vn]=t,i[Fn]=l,r){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<el.length;r++)Mt(el[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),qn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),Hi(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||Mv(i.textContent,r)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=ga),i=!0):i=!1,i||$a(t,!0)}function sm(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Bn=Bn.return}}function _r(t){if(t!==Bn)return!1;if(!wt)return sm(t),wt=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Fh(t.type,t.memoizedProps)),r=!r),r&&$t&&$a(t),sm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=Dv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=Dv(t)}else i===27?(i=$t,hs(t.type)?(t=Vh,Vh=null,$t=t):$t=i):$t=Bn?Fi(t.stateNode.nextSibling):null;return!0}function Bs(){$t=Bn=null,wt=!1}function yf(){var t=ja;return t!==null&&(li===null?li=t:li.push.apply(li,t),ja=null),t}function No(t){ja===null?ja=[t]:ja.push(t)}var Mf=D(null),zs=null,ya=null;function Ja(t,i,r){_e(Mf,i._currentValue),i._currentValue=r}function Ma(t){t._currentValue=Mf.current,W(Mf)}function Sf(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function bf(t,i,r,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var y=f.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=f;for(var G=0;G<i.length;G++)if(C.context===i[G]){d.lanes|=r,C=d.alternate,C!==null&&(C.lanes|=r),Sf(d.return,r,t),l||(y=null);break e}d=C.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(a(341));y.lanes|=r,d=y.alternate,d!==null&&(d.lanes|=r),Sf(y,r,t),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===t){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function xr(t,i,r,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var C=f.type;vi(f.pendingProps.value,y.value)||(t!==null?t.push(C):t=[C])}}else if(f===Me.current){if(y=f.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(sl):t=[sl])}f=f.return}t!==null&&bf(i,t,r,l),i.flags|=262144}function Kl(t){for(t=t.firstContext;t!==null;){if(!vi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Hs(t){zs=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return rm(zs,t)}function Ql(t,i){return zs===null&&Hs(t),rm(t,i)}function rm(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ya===null){if(t===null)throw Error(a(308));ya=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ya=ya.next=i;return r}var by=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},Ey=s.unstable_scheduleCallback,Ty=s.unstable_NormalPriority,xn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ef(){return{controller:new by,data:new Map,refCount:0}}function Lo(t){t.refCount--,t.refCount===0&&Ey(Ty,function(){t.controller.abort()})}var Po=null,Tf=0,yr=0,Mr=null;function Ay(t,i){if(Po===null){var r=Po=[];Tf=0,yr=Rh(),Mr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Tf++,i.then(om,om),i}function om(){if(--Tf===0&&Po!==null){Mr!==null&&(Mr.status="fulfilled");var t=Po;Po=null,yr=0,Mr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function wy(t,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var lm=B.S;B.S=function(t,i){Wg=kt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ay(t,i),lm!==null&&lm(t,i)};var Gs=D(null);function Af(){var t=Gs.current;return t!==null?t:Kt.pooledCache}function jl(t,i){i===null?_e(Gs,Gs.current):_e(Gs,i.pool)}function cm(){var t=Af();return t===null?null:{parent:xn._currentValue,pool:t}}var Sr=Error(a(460)),wf=Error(a(474)),$l=Error(a(542)),Jl={then:function(){}};function um(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(ga,ga),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,dm(t),t;default:if(typeof i.status=="string")i.then(ga,ga);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,dm(t),t}throw ks=i,Sr}}function Vs(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ks=r,Sr):r}}var ks=null;function hm(){if(ks===null)throw Error(a(459));var t=ks;return ks=null,t}function dm(t){if(t===Sr||t===$l)throw Error(a(483))}var br=null,Oo=0;function ec(t){var i=Oo;return Oo+=1,br===null&&(br=[]),fm(br,t,i)}function Io(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function tc(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function pm(t){function i(j,k){if(t){var ne=j.deletions;ne===null?(j.deletions=[k],j.flags|=16):ne.push(k)}}function r(j,k){if(!t)return null;for(;k!==null;)i(j,k),k=k.sibling;return null}function l(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function f(j,k){return j=_a(j,k),j.index=0,j.sibling=null,j}function d(j,k,ne){return j.index=ne,t?(ne=j.alternate,ne!==null?(ne=ne.index,ne<k?(j.flags|=67108866,k):ne):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function y(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function C(j,k,ne,xe){return k===null||k.tag!==6?(k=mf(ne,j.mode,xe),k.return=j,k):(k=f(k,ne),k.return=j,k)}function G(j,k,ne,xe){var tt=ne.type;return tt===R?ge(j,k,ne.props.children,xe,ne.key):k!==null&&(k.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Vs(tt)===k.type)?(k=f(k,ne.props),Io(k,ne),k.return=j,k):(k=Yl(ne.type,ne.key,ne.props,null,j.mode,xe),Io(k,ne),k.return=j,k)}function ie(j,k,ne,xe){return k===null||k.tag!==4||k.stateNode.containerInfo!==ne.containerInfo||k.stateNode.implementation!==ne.implementation?(k=gf(ne,j.mode,xe),k.return=j,k):(k=f(k,ne.children||[]),k.return=j,k)}function ge(j,k,ne,xe,tt){return k===null||k.tag!==7?(k=Fs(ne,j.mode,xe,tt),k.return=j,k):(k=f(k,ne),k.return=j,k)}function ye(j,k,ne){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=mf(""+k,j.mode,ne),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return ne=Yl(k.type,k.key,k.props,null,j.mode,ne),Io(ne,k),ne.return=j,ne;case b:return k=gf(k,j.mode,ne),k.return=j,k;case T:return k=Vs(k),ye(j,k,ne)}if(Q(k)||Y(k))return k=Fs(k,j.mode,ne,null),k.return=j,k;if(typeof k.then=="function")return ye(j,ec(k),ne);if(k.$$typeof===L)return ye(j,Ql(j,k),ne);tc(j,k)}return null}function le(j,k,ne,xe){var tt=k!==null?k.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return tt!==null?null:C(j,k,""+ne,xe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case x:return ne.key===tt?G(j,k,ne,xe):null;case b:return ne.key===tt?ie(j,k,ne,xe):null;case T:return ne=Vs(ne),le(j,k,ne,xe)}if(Q(ne)||Y(ne))return tt!==null?null:ge(j,k,ne,xe,null);if(typeof ne.then=="function")return le(j,k,ec(ne),xe);if(ne.$$typeof===L)return le(j,k,Ql(j,ne),xe);tc(j,ne)}return null}function ce(j,k,ne,xe,tt){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return j=j.get(ne)||null,C(k,j,""+xe,tt);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case x:return j=j.get(xe.key===null?ne:xe.key)||null,G(k,j,xe,tt);case b:return j=j.get(xe.key===null?ne:xe.key)||null,ie(k,j,xe,tt);case T:return xe=Vs(xe),ce(j,k,ne,xe,tt)}if(Q(xe)||Y(xe))return j=j.get(ne)||null,ge(k,j,xe,tt,null);if(typeof xe.then=="function")return ce(j,k,ne,ec(xe),tt);if(xe.$$typeof===L)return ce(j,k,ne,Ql(k,xe),tt);tc(k,xe)}return null}function We(j,k,ne,xe){for(var tt=null,Ct=null,Ye=k,dt=k=0,bt=null;Ye!==null&&dt<ne.length;dt++){Ye.index>dt?(bt=Ye,Ye=null):bt=Ye.sibling;var Dt=le(j,Ye,ne[dt],xe);if(Dt===null){Ye===null&&(Ye=bt);break}t&&Ye&&Dt.alternate===null&&i(j,Ye),k=d(Dt,k,dt),Ct===null?tt=Dt:Ct.sibling=Dt,Ct=Dt,Ye=bt}if(dt===ne.length)return r(j,Ye),wt&&xa(j,dt),tt;if(Ye===null){for(;dt<ne.length;dt++)Ye=ye(j,ne[dt],xe),Ye!==null&&(k=d(Ye,k,dt),Ct===null?tt=Ye:Ct.sibling=Ye,Ct=Ye);return wt&&xa(j,dt),tt}for(Ye=l(Ye);dt<ne.length;dt++)bt=ce(Ye,j,dt,ne[dt],xe),bt!==null&&(t&&bt.alternate!==null&&Ye.delete(bt.key===null?dt:bt.key),k=d(bt,k,dt),Ct===null?tt=bt:Ct.sibling=bt,Ct=bt);return t&&Ye.forEach(function(vs){return i(j,vs)}),wt&&xa(j,dt),tt}function at(j,k,ne,xe){if(ne==null)throw Error(a(151));for(var tt=null,Ct=null,Ye=k,dt=k=0,bt=null,Dt=ne.next();Ye!==null&&!Dt.done;dt++,Dt=ne.next()){Ye.index>dt?(bt=Ye,Ye=null):bt=Ye.sibling;var vs=le(j,Ye,Dt.value,xe);if(vs===null){Ye===null&&(Ye=bt);break}t&&Ye&&vs.alternate===null&&i(j,Ye),k=d(vs,k,dt),Ct===null?tt=vs:Ct.sibling=vs,Ct=vs,Ye=bt}if(Dt.done)return r(j,Ye),wt&&xa(j,dt),tt;if(Ye===null){for(;!Dt.done;dt++,Dt=ne.next())Dt=ye(j,Dt.value,xe),Dt!==null&&(k=d(Dt,k,dt),Ct===null?tt=Dt:Ct.sibling=Dt,Ct=Dt);return wt&&xa(j,dt),tt}for(Ye=l(Ye);!Dt.done;dt++,Dt=ne.next())Dt=ce(Ye,j,dt,Dt.value,xe),Dt!==null&&(t&&Dt.alternate!==null&&Ye.delete(Dt.key===null?dt:Dt.key),k=d(Dt,k,dt),Ct===null?tt=Dt:Ct.sibling=Dt,Ct=Dt);return t&&Ye.forEach(function(BM){return i(j,BM)}),wt&&xa(j,dt),tt}function qt(j,k,ne,xe){if(typeof ne=="object"&&ne!==null&&ne.type===R&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case x:e:{for(var tt=ne.key;k!==null;){if(k.key===tt){if(tt=ne.type,tt===R){if(k.tag===7){r(j,k.sibling),xe=f(k,ne.props.children),xe.return=j,j=xe;break e}}else if(k.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Vs(tt)===k.type){r(j,k.sibling),xe=f(k,ne.props),Io(xe,ne),xe.return=j,j=xe;break e}r(j,k);break}else i(j,k);k=k.sibling}ne.type===R?(xe=Fs(ne.props.children,j.mode,xe,ne.key),xe.return=j,j=xe):(xe=Yl(ne.type,ne.key,ne.props,null,j.mode,xe),Io(xe,ne),xe.return=j,j=xe)}return y(j);case b:e:{for(tt=ne.key;k!==null;){if(k.key===tt)if(k.tag===4&&k.stateNode.containerInfo===ne.containerInfo&&k.stateNode.implementation===ne.implementation){r(j,k.sibling),xe=f(k,ne.children||[]),xe.return=j,j=xe;break e}else{r(j,k);break}else i(j,k);k=k.sibling}xe=gf(ne,j.mode,xe),xe.return=j,j=xe}return y(j);case T:return ne=Vs(ne),qt(j,k,ne,xe)}if(Q(ne))return We(j,k,ne,xe);if(Y(ne)){if(tt=Y(ne),typeof tt!="function")throw Error(a(150));return ne=tt.call(ne),at(j,k,ne,xe)}if(typeof ne.then=="function")return qt(j,k,ec(ne),xe);if(ne.$$typeof===L)return qt(j,k,Ql(j,ne),xe);tc(j,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,k!==null&&k.tag===6?(r(j,k.sibling),xe=f(k,ne),xe.return=j,j=xe):(r(j,k),xe=mf(ne,j.mode,xe),xe.return=j,j=xe),y(j)):r(j,k)}return function(j,k,ne,xe){try{Oo=0;var tt=qt(j,k,ne,xe);return br=null,tt}catch(Ye){if(Ye===Sr||Ye===$l)throw Ye;var Ct=_i(29,Ye,null,j.mode);return Ct.lanes=xe,Ct.return=j,Ct}}}var Xs=pm(!0),mm=pm(!1),es=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ts(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ns(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Lt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=ql(t),$p(t,null,r),i}return Wl(t,l,i,r),ql(t)}function Fo(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,di(t,r)}}function Df(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=y:d=d.next=y,r=r.next}while(r!==null);d===null?f=d=i:d=d.next=i}else f=d=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var Uf=!1;function Bo(){if(Uf){var t=Mr;if(t!==null)throw t}}function zo(t,i,r,l){Uf=!1;var f=t.updateQueue;es=!1;var d=f.firstBaseUpdate,y=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var G=C,ie=G.next;G.next=null,y===null?d=ie:y.next=ie,y=G;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,C=ge.lastBaseUpdate,C!==y&&(C===null?ge.firstBaseUpdate=ie:C.next=ie,ge.lastBaseUpdate=G))}if(d!==null){var ye=f.baseState;y=0,ge=ie=G=null,C=d;do{var le=C.lane&-536870913,ce=le!==C.lane;if(ce?(St&le)===le:(l&le)===le){le!==0&&le===yr&&(Uf=!0),ge!==null&&(ge=ge.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var We=t,at=C;le=i;var qt=r;switch(at.tag){case 1:if(We=at.payload,typeof We=="function"){ye=We.call(qt,ye,le);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=at.payload,le=typeof We=="function"?We.call(qt,ye,le):We,le==null)break e;ye=_({},ye,le);break e;case 2:es=!0}}le=C.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=f.callbacks,ce===null?f.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ge===null?(ie=ge=ce,G=ye):ge=ge.next=ce,y|=le;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;ce=C,C=ce.next,ce.next=null,f.lastBaseUpdate=ce,f.shared.pending=null}}while(!0);ge===null&&(G=ye),f.baseState=G,f.firstBaseUpdate=ie,f.lastBaseUpdate=ge,d===null&&(f.shared.lanes=0),os|=y,t.lanes=y,t.memoizedState=ye}}function gm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function vm(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)gm(r[t],i)}var Er=D(null),nc=D(0);function _m(t,i){t=Da,_e(nc,t),_e(Er,i),Da=t|i.baseLanes}function Nf(){_e(nc,Da),_e(Er,Er.current)}function Lf(){Da=nc.current,W(Er),W(nc)}var xi=D(null),Ii=null;function is(t){var i=t.alternate;_e(mn,mn.current&1),_e(xi,t),Ii===null&&(i===null||Er.current!==null||i.memoizedState!==null)&&(Ii=t)}function Pf(t){_e(mn,mn.current),_e(xi,t),Ii===null&&(Ii=t)}function xm(t){t.tag===22?(_e(mn,mn.current),_e(xi,t),Ii===null&&(Ii=t)):as()}function as(){_e(mn,mn.current),_e(xi,xi.current)}function yi(t){W(xi),Ii===t&&(Ii=null),W(mn)}var mn=D(0);function ic(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Hh(r)||Gh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Sa=0,ht=null,Xt=null,yn=null,ac=!1,Tr=!1,Ws=!1,sc=0,Ho=0,Ar=null,Ry=0;function hn(){throw Error(a(321))}function Of(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!vi(t[r],i[r]))return!1;return!0}function If(t,i,r,l,f,d){return Sa=d,ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?ng:jf,Ws=!1,d=r(l,f),Ws=!1,Tr&&(d=Mm(i,r,l,f)),ym(t),d}function ym(t){B.H=ko;var i=Xt!==null&&Xt.next!==null;if(Sa=0,yn=Xt=ht=null,ac=!1,Ho=0,Ar=null,i)throw Error(a(300));t===null||Mn||(t=t.dependencies,t!==null&&Kl(t)&&(Mn=!0))}function Mm(t,i,r,l){ht=t;var f=0;do{if(Tr&&(Ar=null),Ho=0,Tr=!1,25<=f)throw Error(a(301));if(f+=1,yn=Xt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=ig,d=i(r,l)}while(Tr);return d}function Cy(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?Go(i):i,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(ht.flags|=1024),i}function Ff(){var t=sc!==0;return sc=0,t}function Bf(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function zf(t){if(ac){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}ac=!1}Sa=0,yn=Xt=ht=null,Tr=!1,Ho=sc=0,Ar=null}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?ht.memoizedState=yn=t:yn=yn.next=t,yn}function gn(){if(Xt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=yn===null?ht.memoizedState:yn.next;if(i!==null)yn=i,Xt=t;else{if(t===null)throw ht.alternate===null?Error(a(467)):Error(a(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},yn===null?ht.memoizedState=yn=t:yn=yn.next=t}return yn}function rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(t){var i=Ho;return Ho+=1,Ar===null&&(Ar=[]),t=fm(Ar,t,i),i=ht,(yn===null?i.memoizedState:yn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?ng:jf),t}function oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Go(t);if(t.$$typeof===L)return zn(t)}throw Error(a(438,String(t)))}function Hf(t){var i=null,r=ht.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=ht.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=rc(),ht.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),l=0;l<t;l++)r[l]=X;return i.index++,r}function ba(t,i){return typeof i=="function"?i(t):i}function lc(t){var i=gn();return Gf(i,Xt,t)}function Gf(t,i,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var y=f.next;f.next=d.next,d.next=y}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var C=y=null,G=null,ie=i,ge=!1;do{var ye=ie.lane&-536870913;if(ye!==ie.lane?(St&ye)===ye:(Sa&ye)===ye){var le=ie.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),ye===yr&&(ge=!0);else if((Sa&le)===le){ie=ie.next,le===yr&&(ge=!0);continue}else ye={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},G===null?(C=G=ye,y=d):G=G.next=ye,ht.lanes|=le,os|=le;ye=ie.action,Ws&&r(d,ye),d=ie.hasEagerState?ie.eagerState:r(d,ye)}else le={lane:ye,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},G===null?(C=G=le,y=d):G=G.next=le,ht.lanes|=ye,os|=ye;ie=ie.next}while(ie!==null&&ie!==i);if(G===null?y=d:G.next=C,!vi(d,t.memoizedState)&&(Mn=!0,ge&&(r=Mr,r!==null)))throw r;t.memoizedState=d,t.baseState=y,t.baseQueue=G,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Vf(t){var i=gn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,f=r.pending,d=i.memoizedState;if(f!==null){r.pending=null;var y=f=f.next;do d=t(d,y.action),y=y.next;while(y!==f);vi(d,i.memoizedState)||(Mn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function Sm(t,i,r){var l=ht,f=gn(),d=wt;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var y=!vi((Xt||f).memoizedState,r);if(y&&(f.memoizedState=r,Mn=!0),f=f.queue,Wf(Tm.bind(null,l,f,t),[t]),f.getSnapshot!==i||y||yn!==null&&yn.memoizedState.tag&1){if(l.flags|=2048,wr(9,{destroy:void 0},Em.bind(null,l,f,r,i),null),Kt===null)throw Error(a(349));d||(Sa&127)!==0||bm(l,i,r)}return r}function bm(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=ht.updateQueue,i===null?(i=rc(),ht.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function Em(t,i,r,l){i.value=r,i.getSnapshot=l,Am(i)&&wm(t)}function Tm(t,i,r){return r(function(){Am(i)&&wm(t)})}function Am(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!vi(t,r)}catch{return!0}}function wm(t){var i=Is(t,2);i!==null&&ci(i,t,2)}function kf(t){var i=$n();if(typeof t=="function"){var r=t;if(t=r(),Ws){Re(!0);try{r()}finally{Re(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},i}function Rm(t,i,r,l){return t.baseState=r,Gf(t,Xt,typeof l=="function"?l:ba)}function Dy(t,i,r,l,f){if(fc(t))throw Error(a(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,Cm(i,d)):(d.next=r.next,i.pending=r.next=d)}}function Cm(t,i){var r=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=B.T,y={};B.T=y;try{var C=r(f,l),G=B.S;G!==null&&G(y,C),Dm(t,i,C)}catch(ie){Xf(t,i,ie)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=r(f,l),Dm(t,i,d)}catch(ie){Xf(t,i,ie)}}function Dm(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Um(t,i,l)},function(l){return Xf(t,i,l)}):Um(t,i,r)}function Um(t,i,r){i.status="fulfilled",i.value=r,Nm(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,Cm(t,r)))}function Xf(t,i,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,Nm(i),i=i.next;while(i!==l)}t.action=null}function Nm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Lm(t,i){return i}function Pm(t,i){if(wt){var r=Kt.formState;if(r!==null){e:{var l=ht;if(wt){if($t){t:{for(var f=$t,d=Oi;f.nodeType!==8;){if(!d){f=null;break t}if(f=Fi(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){$t=Fi(f.nextSibling),l=f.data==="F!";break e}}$a(l)}l=!1}l&&(i=r[0])}}return r=$n(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:i},r.queue=l,r=Jm.bind(null,ht,l),l.dispatch=r,l=kf(!1),d=Qf.bind(null,ht,!1,l.queue),l=$n(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,r=Dy.bind(null,ht,f,d,r),f.dispatch=r,l.memoizedState=t,[i,r,!1]}function Om(t){var i=gn();return Im(i,Xt,t)}function Im(t,i,r){if(i=Gf(t,i,Lm)[0],t=lc(ba)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Go(i)}catch(y){throw y===Sr?$l:y}else l=i;i=gn();var f=i.queue,d=f.dispatch;return r!==i.memoizedState&&(ht.flags|=2048,wr(9,{destroy:void 0},Uy.bind(null,f,r),null)),[l,d,t]}function Uy(t,i){t.action=i}function Fm(t){var i=gn(),r=Xt;if(r!==null)return Im(i,r,t);gn(),i=i.memoizedState,r=gn();var l=r.queue.dispatch;return r.memoizedState=t,[i,l,!1]}function wr(t,i,r,l){return t={tag:t,create:r,deps:l,inst:i,next:null},i=ht.updateQueue,i===null&&(i=rc(),ht.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t),t}function Bm(){return gn().memoizedState}function cc(t,i,r,l){var f=$n();ht.flags|=t,f.memoizedState=wr(1|i,{destroy:void 0},r,l===void 0?null:l)}function uc(t,i,r,l){var f=gn();l=l===void 0?null:l;var d=f.memoizedState.inst;Xt!==null&&l!==null&&Of(l,Xt.memoizedState.deps)?f.memoizedState=wr(i,d,r,l):(ht.flags|=t,f.memoizedState=wr(1|i,d,r,l))}function zm(t,i){cc(8390656,8,t,i)}function Wf(t,i){uc(2048,8,t,i)}function Ny(t){ht.flags|=4;var i=ht.updateQueue;if(i===null)i=rc(),ht.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function Hm(t){var i=gn().memoizedState;return Ny({ref:i,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Gm(t,i){return uc(4,2,t,i)}function Vm(t,i){return uc(4,4,t,i)}function km(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Xm(t,i,r){r=r!=null?r.concat([t]):null,uc(4,4,km.bind(null,i,t),r)}function qf(){}function Wm(t,i){var r=gn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Of(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function qm(t,i){var r=gn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Of(i,l[1]))return l[0];if(l=t(),Ws){Re(!0);try{t()}finally{Re(!1)}}return r.memoizedState=[l,i],l}function Yf(t,i,r){return r===void 0||(Sa&1073741824)!==0&&(St&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=Yg(),ht.lanes|=t,os|=t,r)}function Ym(t,i,r,l){return vi(r,i)?r:Er.current!==null?(t=Yf(t,r,l),vi(t,i)||(Mn=!0),t):(Sa&42)===0||(Sa&1073741824)!==0&&(St&261930)===0?(Mn=!0,t.memoizedState=r):(t=Yg(),ht.lanes|=t,os|=t,i)}function Zm(t,i,r,l,f){var d=H.p;H.p=d!==0&&8>d?d:8;var y=B.T,C={};B.T=C,Qf(t,!1,i,r);try{var G=f(),ie=B.S;if(ie!==null&&ie(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ge=wy(G,l);Vo(t,i,ge,bi(t))}else Vo(t,i,l,bi(t))}catch(ye){Vo(t,i,{then:function(){},status:"rejected",reason:ye},bi())}finally{H.p=d,y!==null&&C.types!==null&&(y.types=C.types),B.T=y}}function Ly(){}function Zf(t,i,r,l){if(t.tag!==5)throw Error(a(476));var f=Km(t).queue;Zm(t,f,i,z,r===null?Ly:function(){return Qm(t),r(l)})}function Km(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:z},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Qm(t){var i=Km(t);i.next===null&&(i=t.alternate.memoizedState),Vo(t,i.next.queue,{},bi())}function Kf(){return zn(sl)}function jm(){return gn().memoizedState}function $m(){return gn().memoizedState}function Py(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=bi();t=ts(r);var l=ns(i,t,r);l!==null&&(ci(l,i,r),Fo(l,i,r)),i={cache:Ef()},t.payload=i;return}i=i.return}}function Oy(t,i,r){var l=bi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fc(t)?eg(i,r):(r=df(t,i,r,l),r!==null&&(ci(r,t,l),tg(r,i,l)))}function Jm(t,i,r){var l=bi();Vo(t,i,r,l)}function Vo(t,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(fc(t))eg(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,C=d(y,r);if(f.hasEagerState=!0,f.eagerState=C,vi(C,y))return Wl(t,i,f,0),Kt===null&&Xl(),!1}catch{}if(r=df(t,i,f,l),r!==null)return ci(r,t,l),tg(r,i,l),!0}return!1}function Qf(t,i,r,l){if(l={lane:2,revertLane:Rh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fc(t)){if(i)throw Error(a(479))}else i=df(t,r,l,2),i!==null&&ci(i,t,2)}function fc(t){var i=t.alternate;return t===ht||i!==null&&i===ht}function eg(t,i){Tr=ac=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function tg(t,i,r){if((r&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,di(t,r)}}var ko={readContext:zn,use:oc,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn};ko.useEffectEvent=hn;var ng={readContext:zn,use:oc,useCallback:function(t,i){return $n().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:zm,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,cc(4194308,4,km.bind(null,i,t),r)},useLayoutEffect:function(t,i){return cc(4194308,4,t,i)},useInsertionEffect:function(t,i){cc(4,2,t,i)},useMemo:function(t,i){var r=$n();i=i===void 0?null:i;var l=t();if(Ws){Re(!0);try{t()}finally{Re(!1)}}return r.memoizedState=[l,i],l},useReducer:function(t,i,r){var l=$n();if(r!==void 0){var f=r(i);if(Ws){Re(!0);try{r(i)}finally{Re(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Oy.bind(null,ht,t),[l.memoizedState,t]},useRef:function(t){var i=$n();return t={current:t},i.memoizedState=t},useState:function(t){t=kf(t);var i=t.queue,r=Jm.bind(null,ht,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:qf,useDeferredValue:function(t,i){var r=$n();return Yf(r,t,i)},useTransition:function(){var t=kf(!1);return t=Zm.bind(null,ht,t.queue,!0,!1),$n().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var l=ht,f=$n();if(wt){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Kt===null)throw Error(a(349));(St&127)!==0||bm(l,i,r)}f.memoizedState=r;var d={value:r,getSnapshot:i};return f.queue=d,zm(Tm.bind(null,l,d,t),[t]),l.flags|=2048,wr(9,{destroy:void 0},Em.bind(null,l,d,r,i),null),r},useId:function(){var t=$n(),i=Kt.identifierPrefix;if(wt){var r=aa,l=ia;r=(l&~(1<<32-Be(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=sc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Ry++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Kf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t){var i=$n();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Qf.bind(null,ht,!0,r),r.dispatch=i,[t,i]},useMemoCache:Hf,useCacheRefresh:function(){return $n().memoizedState=Py.bind(null,ht)},useEffectEvent:function(t){var i=$n(),r={impl:t};return i.memoizedState=r,function(){if((Lt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},jf={readContext:zn,use:oc,useCallback:Wm,useContext:zn,useEffect:Wf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:lc,useRef:Bm,useState:function(){return lc(ba)},useDebugValue:qf,useDeferredValue:function(t,i){var r=gn();return Ym(r,Xt.memoizedState,t,i)},useTransition:function(){var t=lc(ba)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:Go(t),i]},useSyncExternalStore:Sm,useId:jm,useHostTransitionStatus:Kf,useFormState:Om,useActionState:Om,useOptimistic:function(t,i){var r=gn();return Rm(r,Xt,t,i)},useMemoCache:Hf,useCacheRefresh:$m};jf.useEffectEvent=Hm;var ig={readContext:zn,use:oc,useCallback:Wm,useContext:zn,useEffect:Wf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:Vf,useRef:Bm,useState:function(){return Vf(ba)},useDebugValue:qf,useDeferredValue:function(t,i){var r=gn();return Xt===null?Yf(r,t,i):Ym(r,Xt.memoizedState,t,i)},useTransition:function(){var t=Vf(ba)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:Go(t),i]},useSyncExternalStore:Sm,useId:jm,useHostTransitionStatus:Kf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,i){var r=gn();return Xt!==null?Rm(r,Xt,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Hf,useCacheRefresh:$m};ig.useEffectEvent=Hm;function $f(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:_({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Jf={enqueueSetState:function(t,i,r){t=t._reactInternals;var l=bi(),f=ts(l);f.payload=i,r!=null&&(f.callback=r),i=ns(t,f,l),i!==null&&(ci(i,t,l),Fo(i,t,l))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=bi(),f=ts(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=ns(t,f,l),i!==null&&(ci(i,t,l),Fo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=bi(),l=ts(r);l.tag=2,i!=null&&(l.callback=i),i=ns(t,l,r),i!==null&&(ci(i,t,r),Fo(i,t,r))}};function ag(t,i,r,l,f,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!Co(r,l)||!Co(f,d):!0}function sg(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&Jf.enqueueReplaceState(i,i.state,null)}function qs(t,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(t=t.defaultProps){r===i&&(r=_({},r));for(var f in t)r[f]===void 0&&(r[f]=t[f])}return r}function rg(t){kl(t)}function og(t){console.error(t)}function lg(t){kl(t)}function hc(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function cg(t,i,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function eh(t,i,r){return r=ts(r),r.tag=3,r.payload={element:null},r.callback=function(){hc(t,i)},r}function ug(t){return t=ts(t),t.tag=3,t}function fg(t,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){cg(i,r,l)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){cg(i,r,l),typeof f!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function Iy(t,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&xr(i,r,f,!0),r=xi.current,r!==null){switch(r.tag){case 31:case 13:return Ii===null?Ec():r.alternate===null&&dn===0&&(dn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Jl?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Th(t,l,f)),!1;case 22:return r.flags|=65536,l===Jl?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Th(t,l,f)),!1}throw Error(a(435,r.tag))}return Th(t,l,f),Ec(),!1}if(wt)return i=xi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==xf&&(t=Error(a(422),{cause:l}),No(Ni(t,r)))):(l!==xf&&(i=Error(a(423),{cause:l}),No(Ni(i,r))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ni(l,r),f=eh(t.stateNode,l,f),Df(t,f),dn!==4&&(dn=2)),!1;var d=Error(a(520),{cause:l});if(d=Ni(d,r),jo===null?jo=[d]:jo.push(d),dn!==4&&(dn=2),i===null)return!0;l=Ni(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=f&-f,r.lanes|=t,t=eh(r.stateNode,l,t),Df(r,t),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ls===null||!ls.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=ug(f),fg(f,t,r,l),Df(r,f),!1}r=r.return}while(r!==null);return!1}var th=Error(a(461)),Mn=!1;function Hn(t,i,r,l){i.child=t===null?mm(i,null,r,l):Xs(i,t.child,r,l)}function hg(t,i,r,l,f){r=r.render;var d=i.ref;if("ref"in l){var y={};for(var C in l)C!=="ref"&&(y[C]=l[C])}else y=l;return Hs(i),l=If(t,i,r,y,d,f),C=Ff(),t!==null&&!Mn?(Bf(t,i,f),Ea(t,i,f)):(wt&&C&&vf(i),i.flags|=1,Hn(t,i,l,f),i.child)}function dg(t,i,r,l,f){if(t===null){var d=r.type;return typeof d=="function"&&!pf(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,pg(t,i,d,l,f)):(t=Yl(r.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!ch(t,f)){var y=d.memoizedProps;if(r=r.compare,r=r!==null?r:Co,r(y,l)&&t.ref===i.ref)return Ea(t,i,f)}return i.flags|=1,t=_a(d,l),t.ref=i.ref,t.return=i,i.child=t}function pg(t,i,r,l,f){if(t!==null){var d=t.memoizedProps;if(Co(d,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=d,ch(t,f))(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Ea(t,i,f)}return nh(t,i,r,l,f)}function mg(t,i,r,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return gg(t,i,d,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&jl(i,d!==null?d.cachePool:null),d!==null?_m(i,d):Nf(),xm(i);else return l=i.lanes=536870912,gg(t,i,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(jl(i,d.cachePool),_m(i,d),as(),i.memoizedState=null):(t!==null&&jl(i,null),Nf(),as());return Hn(t,i,f,r),i.child}function Xo(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function gg(t,i,r,l,f){var d=Af();return d=d===null?null:{parent:xn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},t!==null&&jl(i,null),Nf(),xm(i),t!==null&&xr(t,i,l,!0),i.childLanes=f,null}function dc(t,i){return i=mc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function vg(t,i,r){return Xs(i,t.child,null,r),t=dc(i,i.pendingProps),t.flags|=2,yi(i),i.memoizedState=null,t}function Fy(t,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(wt){if(l.mode==="hidden")return t=dc(i,l),i.lanes=536870912,Xo(null,t);if(Pf(i),(t=$t)?(t=Cv(t,Oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Qa!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},r=em(t),r.return=i,i.child=r,Bn=i,$t=null)):t=null,t===null)throw $a(i);return i.lanes=536870912,null}return dc(i,l)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(Pf(i),f)if(i.flags&256)i.flags&=-257,i=vg(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Mn||xr(t,i,r,!1),f=(r&t.childLanes)!==0,Mn||f){if(l=Kt,l!==null&&(y=pi(l,r),y!==0&&y!==d.retryLane))throw d.retryLane=y,Is(t,y),ci(l,t,y),th;Ec(),i=vg(t,i,r)}else t=d.treeContext,$t=Fi(y.nextSibling),Bn=i,wt=!0,ja=null,Oi=!1,t!==null&&im(i,t),i=dc(i,l),i.flags|=4096;return i}return t=_a(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function pc(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function nh(t,i,r,l,f){return Hs(i),r=If(t,i,r,l,void 0,f),l=Ff(),t!==null&&!Mn?(Bf(t,i,f),Ea(t,i,f)):(wt&&l&&vf(i),i.flags|=1,Hn(t,i,r,f),i.child)}function _g(t,i,r,l,f,d){return Hs(i),i.updateQueue=null,r=Mm(i,l,r,f),ym(t),l=Ff(),t!==null&&!Mn?(Bf(t,i,d),Ea(t,i,d)):(wt&&l&&vf(i),i.flags|=1,Hn(t,i,r,d),i.child)}function xg(t,i,r,l,f){if(Hs(i),i.stateNode===null){var d=mr,y=r.contextType;typeof y=="object"&&y!==null&&(d=zn(y)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Jf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Rf(i),y=r.contextType,d.context=typeof y=="object"&&y!==null?zn(y):mr,d.state=i.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&($f(i,r,y,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Jf.enqueueReplaceState(d,d.state,null),zo(i,l,d,f),Bo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var C=i.memoizedProps,G=qs(r,C);d.props=G;var ie=d.context,ge=r.contextType;y=mr,typeof ge=="object"&&ge!==null&&(y=zn(ge));var ye=r.getDerivedStateFromProps;ge=typeof ye=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||ie!==y)&&sg(i,d,l,y),es=!1;var le=i.memoizedState;d.state=le,zo(i,l,d,f),Bo(),ie=i.memoizedState,C||le!==ie||es?(typeof ye=="function"&&($f(i,r,ye,l),ie=i.memoizedState),(G=es||ag(i,r,G,l,le,ie,y))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ie),d.props=l,d.state=ie,d.context=y,l=G):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Cf(t,i),y=i.memoizedProps,ge=qs(r,y),d.props=ge,ye=i.pendingProps,le=d.context,ie=r.contextType,G=mr,typeof ie=="object"&&ie!==null&&(G=zn(ie)),C=r.getDerivedStateFromProps,(ie=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==ye||le!==G)&&sg(i,d,l,G),es=!1,le=i.memoizedState,d.state=le,zo(i,l,d,f),Bo();var ce=i.memoizedState;y!==ye||le!==ce||es||t!==null&&t.dependencies!==null&&Kl(t.dependencies)?(typeof C=="function"&&($f(i,r,C,l),ce=i.memoizedState),(ge=es||ag(i,r,ge,l,le,ce,G)||t!==null&&t.dependencies!==null&&Kl(t.dependencies))?(ie||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ce,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ce,G)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ce),d.props=l,d.state=ce,d.context=G,l=ge):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,pc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Xs(i,t.child,null,f),i.child=Xs(i,null,r,f)):Hn(t,i,r,f),i.memoizedState=d.state,t=i.child):t=Ea(t,i,f),t}function yg(t,i,r,l){return Bs(),i.flags|=256,Hn(t,i,r,l),i.child}var ih={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ah(t){return{baseLanes:t,cachePool:cm()}}function sh(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=Si),t}function Mg(t,i,r){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(wt){if(f?is(i):as(),(t=$t)?(t=Cv(t,Oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Qa!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},r=em(t),r.return=i,i.child=r,Bn=i,$t=null)):t=null,t===null)throw $a(i);return Gh(t)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(as(),f=i.mode,C=mc({mode:"hidden",children:C},f),l=Fs(l,f,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=ah(r),l.childLanes=sh(t,y,r),i.memoizedState=ih,Xo(null,l)):(is(i),rh(i,C))}var G=t.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(d)i.flags&256?(is(i),i.flags&=-257,i=oh(t,i,r)):i.memoizedState!==null?(as(),i.child=t.child,i.flags|=128,i=null):(as(),C=l.fallback,f=i.mode,l=mc({mode:"visible",children:l.children},f),C=Fs(C,f,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Xs(i,t.child,null,r),l=i.child,l.memoizedState=ah(r),l.childLanes=sh(t,y,r),i.memoizedState=ih,i=Xo(null,l));else if(is(i),Gh(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var ie=y.dgst;y=ie,l=Error(a(419)),l.stack="",l.digest=y,No({value:l,source:null,stack:null}),i=oh(t,i,r)}else if(Mn||xr(t,i,r,!1),y=(r&t.childLanes)!==0,Mn||y){if(y=Kt,y!==null&&(l=pi(y,r),l!==0&&l!==G.retryLane))throw G.retryLane=l,Is(t,l),ci(y,t,l),th;Hh(C)||Ec(),i=oh(t,i,r)}else Hh(C)?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,$t=Fi(C.nextSibling),Bn=i,wt=!0,ja=null,Oi=!1,t!==null&&im(i,t),i=rh(i,l.children),i.flags|=4096);return i}return f?(as(),C=l.fallback,f=i.mode,G=t.child,ie=G.sibling,l=_a(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ie!==null?C=_a(ie,C):(C=Fs(C,f,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,Xo(null,l),l=i.child,C=t.child.memoizedState,C===null?C=ah(r):(f=C.cachePool,f!==null?(G=xn._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=cm(),C={baseLanes:C.baseLanes|r,cachePool:f}),l.memoizedState=C,l.childLanes=sh(t,y,r),i.memoizedState=ih,Xo(t.child,l)):(is(i),r=t.child,t=r.sibling,r=_a(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=r,i.memoizedState=null,r)}function rh(t,i){return i=mc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function mc(t,i){return t=_i(22,t,null,i),t.lanes=0,t}function oh(t,i,r){return Xs(i,t.child,null,r),t=rh(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Sg(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Sf(t.return,i,r)}function lh(t,i,r,l,f,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=r,y.tailMode=f,y.treeForkCount=d)}function bg(t,i,r){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var y=mn.current,C=(y&2)!==0;if(C?(y=y&1|2,i.flags|=128):y&=1,_e(mn,y),Hn(t,i,l,r),l=wt?Uo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,r,i);else if(t.tag===19)Sg(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)t=r.alternate,t!==null&&ic(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),lh(i,!1,f,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&ic(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}lh(i,!0,r,null,d,l);break;case"together":lh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ea(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),os|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(xr(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=_a(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=_a(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function ch(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Kl(t)))}function By(t,i,r){switch(i.tag){case 3:Se(i,i.stateNode.containerInfo),Ja(i,xn,t.memoizedState.cache),Bs();break;case 27:case 5:nt(i);break;case 4:Se(i,i.stateNode.containerInfo);break;case 10:Ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Pf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(is(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Mg(t,i,r):(is(i),t=Ea(t,i,r),t!==null?t.sibling:null);is(i);break;case 19:var f=(t.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(xr(t,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return bg(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),_e(mn,mn.current),l)break;return null;case 22:return i.lanes=0,mg(t,i,r,i.pendingProps);case 24:Ja(i,xn,t.memoizedState.cache)}return Ea(t,i,r)}function Eg(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)Mn=!0;else{if(!ch(t,r)&&(i.flags&128)===0)return Mn=!1,By(t,i,r);Mn=(t.flags&131072)!==0}else Mn=!1,wt&&(i.flags&1048576)!==0&&nm(i,Uo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Vs(i.elementType),i.type=t,typeof t=="function")pf(t)?(l=qs(t,l),i.tag=1,i=xg(null,i,t,l,r)):(i.tag=0,i=nh(null,i,t,l,r));else{if(t!=null){var f=t.$$typeof;if(f===A){i.tag=11,i=hg(null,i,t,l,r);break e}else if(f===F){i.tag=14,i=dg(null,i,t,l,r);break e}}throw i=fe(t)||t,Error(a(306,i,""))}}return i;case 0:return nh(t,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=qs(l,i.pendingProps),xg(t,i,l,f,r);case 3:e:{if(Se(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Cf(t,i),zo(i,l,null,r);var y=i.memoizedState;if(l=y.cache,Ja(i,xn,l),l!==d.cache&&bf(i,[xn],r,!0),Bo(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=yg(t,i,l,r);break e}else if(l!==f){f=Ni(Error(a(424)),i),No(f),i=yg(t,i,l,r);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,$t=Fi(t.firstChild),Bn=i,wt=!0,ja=null,Oi=!0,r=mm(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bs(),l===f){i=Ea(t,i,r);break e}Hn(t,i,l,r)}i=i.child}return i;case 26:return pc(t,i),t===null?(r=Ov(i.type,null,i.pendingProps,null))?i.memoizedState=r:wt||(r=i.type,t=i.pendingProps,l=Uc(ee.current).createElement(r),l[vn]=i,l[Fn]=t,Gn(l,r,t),_n(l),i.stateNode=l):i.memoizedState=Ov(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return nt(i),t===null&&wt&&(l=i.stateNode=Nv(i.type,i.pendingProps,ee.current),Bn=i,Oi=!0,f=$t,hs(i.type)?(Vh=f,$t=Fi(l.firstChild)):$t=f),Hn(t,i,i.pendingProps.children,r),pc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&wt&&((f=l=$t)&&(l=pM(l,i.type,i.pendingProps,Oi),l!==null?(i.stateNode=l,Bn=i,$t=Fi(l.firstChild),Oi=!1,f=!0):f=!1),f||$a(i)),nt(i),f=i.type,d=i.pendingProps,y=t!==null?t.memoizedProps:null,l=d.children,Fh(f,d)?l=null:y!==null&&Fh(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=If(t,i,Cy,null,null,r),sl._currentValue=f),pc(t,i),Hn(t,i,l,r),i.child;case 6:return t===null&&wt&&((t=r=$t)&&(r=mM(r,i.pendingProps,Oi),r!==null?(i.stateNode=r,Bn=i,$t=null,t=!0):t=!1),t||$a(i)),null;case 13:return Mg(t,i,r);case 4:return Se(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Xs(i,null,l,r):Hn(t,i,l,r),i.child;case 11:return hg(t,i,i.type,i.pendingProps,r);case 7:return Hn(t,i,i.pendingProps,r),i.child;case 8:return Hn(t,i,i.pendingProps.children,r),i.child;case 12:return Hn(t,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ja(i,i.type,l.value),Hn(t,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Hs(i),f=zn(f),l=l(f),i.flags|=1,Hn(t,i,l,r),i.child;case 14:return dg(t,i,i.type,i.pendingProps,r);case 15:return pg(t,i,i.type,i.pendingProps,r);case 19:return bg(t,i,r);case 31:return Fy(t,i,r);case 22:return mg(t,i,r,i.pendingProps);case 24:return Hs(i),l=zn(xn),t===null?(f=Af(),f===null&&(f=Kt,d=Ef(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),i.memoizedState={parent:l,cache:f},Rf(i),Ja(i,xn,f)):((t.lanes&r)!==0&&(Cf(t,i),zo(i,null,null,r),Bo()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ja(i,xn,l)):(l=d.cache,Ja(i,xn,l),l!==f.cache&&bf(i,[xn],r,!0))),Hn(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ta(t){t.flags|=4}function uh(t,i,r,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(jg())t.flags|=8192;else throw ks=Jl,wf}else t.flags&=-16777217}function Tg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hv(i))if(jg())t.flags|=8192;else throw ks=Jl,wf}function gc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?be():536870912,t.lanes|=i,Ur|=i)}function Wo(t,i){if(!wt)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Jt(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function zy(t,i,r){var l=i.pendingProps;switch(_f(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(i),null;case 1:return Jt(i),null;case 3:return r=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ma(xn),Ie(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_r(i)?Ta(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yf())),Jt(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(Ta(i),d!==null?(Jt(i),Tg(i,d)):(Jt(i),uh(i,f,null,l,r))):d?d!==t.memoizedState?(Ta(i),Jt(i),Tg(i,d)):(Jt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ta(i),Jt(i),uh(i,f,t,l,r)),null;case 27:if(Ke(i),r=ee.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ta(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Jt(i),null}t=Ee.current,_r(i)?am(i):(t=Nv(f,l,r),i.stateNode=t,Ta(i))}return Jt(i),null;case 5:if(Ke(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ta(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Jt(i),null}if(d=Ee.current,_r(i))am(i);else{var y=Uc(ee.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}d[vn]=i,d[Fn]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;e:switch(Gn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ta(i)}}return Jt(i),uh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ta(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ee.current,_r(i)){if(t=i.stateNode,r=i.memoizedProps,l=null,f=Bn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[vn]=i,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Mv(t.nodeValue,r)),t||$a(i,!0)}else t=Uc(t).createTextNode(l),t[vn]=i,i.stateNode=t}return Jt(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(l=_r(i),r!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[vn]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),t=!1}else r=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(yi(i),i):(yi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Jt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=_r(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[vn]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),f=!1}else f=yf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(yi(i),i):(yi(i),null)}return yi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),gc(i,i.updateQueue),Jt(i),null);case 4:return Ie(),t===null&&Nh(i.stateNode.containerInfo),Jt(i),null;case 10:return Ma(i.type),Jt(i),null;case 19:if(W(mn),l=i.memoizedState,l===null)return Jt(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)Wo(l,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=ic(t),d!==null){for(i.flags|=128,Wo(l,!1),t=d.updateQueue,i.updateQueue=t,gc(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Jp(r,t),r=r.sibling;return _e(mn,mn.current&1|2),wt&&xa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&kt()>Mc&&(i.flags|=128,f=!0,Wo(l,!1),i.lanes=4194304)}else{if(!f)if(t=ic(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,gc(i,t),Wo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!wt)return Jt(i),null}else 2*kt()-l.renderingStartTime>Mc&&r!==536870912&&(i.flags|=128,f=!0,Wo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=kt(),t.sibling=null,r=mn.current,_e(mn,f?r&1|2:r&1),wt&&xa(i,l.treeForkCount),t):(Jt(i),null);case 22:case 23:return yi(i),Lf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Jt(i),i.subtreeFlags&6&&(i.flags|=8192)):Jt(i),r=i.updateQueue,r!==null&&gc(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),t!==null&&W(Gs),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Ma(xn),Jt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Hy(t,i){switch(_f(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ma(xn),Ie(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ke(i),null;case 31:if(i.memoizedState!==null){if(yi(i),i.alternate===null)throw Error(a(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(yi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return W(mn),null;case 4:return Ie(),null;case 10:return Ma(i.type),null;case 22:case 23:return yi(i),Lf(),t!==null&&W(Gs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ma(xn),null;case 25:return null;default:return null}}function Ag(t,i){switch(_f(i),i.tag){case 3:Ma(xn),Ie();break;case 26:case 27:case 5:Ke(i);break;case 4:Ie();break;case 31:i.memoizedState!==null&&yi(i);break;case 13:yi(i);break;case 19:W(mn);break;case 10:Ma(i.type);break;case 22:case 23:yi(i),Lf(),t!==null&&W(Gs);break;case 24:Ma(xn)}}function qo(t,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&t)===t){l=void 0;var d=r.create,y=r.inst;l=d(),y.destroy=l}r=r.next}while(r!==f)}}catch(C){Vt(i,i.return,C)}}function ss(t,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var y=l.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,f=i;var G=r,ie=C;try{ie()}catch(ge){Vt(f,G,ge)}}}l=l.next}while(l!==d)}}catch(ge){Vt(i,i.return,ge)}}function wg(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{vm(i,r)}catch(l){Vt(t,t.return,l)}}}function Rg(t,i,r){r.props=qs(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){Vt(t,i,l)}}function Yo(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(f){Vt(t,i,f)}}function sa(t,i){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Vt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Vt(t,i,f)}else r.current=null}function Cg(t){var i=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Vt(t,t.return,f)}}function fh(t,i,r){try{var l=t.stateNode;lM(l,t.type,r,i),l[Fn]=i}catch(f){Vt(t,t.return,f)}}function Dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&hs(t.type)||t.tag===4}function hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&hs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ga));else if(l!==4&&(l===27&&hs(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(dh(t,i,r),t=t.sibling;t!==null;)dh(t,i,r),t=t.sibling}function vc(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(l!==4&&(l===27&&hs(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(vc(t,i,r),t=t.sibling;t!==null;)vc(t,i,r),t=t.sibling}function Ug(t){var i=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Gn(i,l,r),i[vn]=t,i[Fn]=r}catch(d){Vt(t,t.return,d)}}var Aa=!1,Sn=!1,ph=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function Gy(t,i){if(t=t.containerInfo,Oh=Bc,t=Xp(t),of(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var y=0,C=-1,G=-1,ie=0,ge=0,ye=t,le=null;t:for(;;){for(var ce;ye!==r||f!==0&&ye.nodeType!==3||(C=y+f),ye!==d||l!==0&&ye.nodeType!==3||(G=y+l),ye.nodeType===3&&(y+=ye.nodeValue.length),(ce=ye.firstChild)!==null;)le=ye,ye=ce;for(;;){if(ye===t)break t;if(le===r&&++ie===f&&(C=y),le===d&&++ge===l&&(G=y),(ce=ye.nextSibling)!==null)break;ye=le,le=ye.parentNode}ye=ce}r=C===-1||G===-1?null:{start:C,end:G}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ih={focusedElem:t,selectionRange:r},Bc=!1,Nn=i;Nn!==null;)if(i=Nn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Nn=t;else for(;Nn!==null;){switch(i=Nn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)f=t[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=i,f=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var We=qs(r.type,f);t=l.getSnapshotBeforeUpdate(We,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){Vt(r,r.return,at)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)zh(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Nn=t;break}Nn=i.return}}function Lg(t,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ra(t,r),l&4&&qo(5,r);break;case 1:if(Ra(t,r),l&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(y){Vt(r,r.return,y)}else{var f=qs(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Vt(r,r.return,y)}}l&64&&wg(r),l&512&&Yo(r,r.return);break;case 3:if(Ra(t,r),l&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{vm(t,i)}catch(y){Vt(r,r.return,y)}}break;case 27:i===null&&l&4&&Ug(r);case 26:case 5:Ra(t,r),i===null&&l&4&&Cg(r),l&512&&Yo(r,r.return);break;case 12:Ra(t,r);break;case 31:Ra(t,r),l&4&&Ig(t,r);break;case 13:Ra(t,r),l&4&&Fg(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Qy.bind(null,r),gM(t,r))));break;case 22:if(l=r.memoizedState!==null||Aa,!l){i=i!==null&&i.memoizedState!==null||Sn,f=Aa;var d=Sn;Aa=l,(Sn=i)&&!d?Ca(t,r,(r.subtreeFlags&8772)!==0):Ra(t,r),Aa=f,Sn=d}break;case 30:break;default:Ra(t,r)}}function Pg(t){var i=t.alternate;i!==null&&(t.alternate=null,Pg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&qa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,si=!1;function wa(t,i,r){for(r=r.child;r!==null;)Og(t,i,r),r=r.sibling}function Og(t,i,r){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(he,r)}catch{}switch(r.tag){case 26:Sn||sa(r,i),wa(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Sn||sa(r,i);var l=rn,f=si;hs(r.type)&&(rn=r.stateNode,si=!1),wa(t,i,r),nl(r.stateNode),rn=l,si=f;break;case 5:Sn||sa(r,i);case 6:if(l=rn,f=si,rn=null,wa(t,i,r),rn=l,si=f,rn!==null)if(si)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(r.stateNode)}catch(d){Vt(r,i,d)}else try{rn.removeChild(r.stateNode)}catch(d){Vt(r,i,d)}break;case 18:rn!==null&&(si?(t=rn,wv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),zr(t)):wv(rn,r.stateNode));break;case 4:l=rn,f=si,rn=r.stateNode.containerInfo,si=!0,wa(t,i,r),rn=l,si=f;break;case 0:case 11:case 14:case 15:ss(2,r,i),Sn||ss(4,r,i),wa(t,i,r);break;case 1:Sn||(sa(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Rg(r,i,l)),wa(t,i,r);break;case 21:wa(t,i,r);break;case 22:Sn=(l=Sn)||r.memoizedState!==null,wa(t,i,r),Sn=l;break;default:wa(t,i,r)}}function Ig(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zr(t)}catch(r){Vt(i,i.return,r)}}}function Fg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zr(t)}catch(r){Vt(i,i.return,r)}}function Vy(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Ng),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Ng),i;default:throw Error(a(435,t.tag))}}function _c(t,i){var r=Vy(t);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=jy.bind(null,t,l);l.then(f,f)}})}function ri(t,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],d=t,y=i,C=y;e:for(;C!==null;){switch(C.tag){case 27:if(hs(C.type)){rn=C.stateNode,si=!1;break e}break;case 5:rn=C.stateNode,si=!1;break e;case 3:case 4:rn=C.stateNode.containerInfo,si=!0;break e}C=C.return}if(rn===null)throw Error(a(160));Og(d,y,f),rn=null,si=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Bg(i,t),i=i.sibling}var ki=null;function Bg(t,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ri(i,t),oi(t),l&4&&(ss(3,t,t.return),qo(3,t),ss(5,t,t.return));break;case 1:ri(i,t),oi(t),l&512&&(Sn||r===null||sa(r,r.return)),l&64&&Aa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=ki;if(ri(i,t),oi(t),l&512&&(Sn||r===null||sa(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Wa]||d[vn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Gn(d,l,r),d[vn]=t,_n(d),l=d;break e;case"link":var y=Bv("link","href",f).get(l+(r.href||""));if(y){for(var C=0;C<y.length;C++)if(d=y[C],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(C,1);break t}}d=f.createElement(l),Gn(d,l,r),f.head.appendChild(d);break;case"meta":if(y=Bv("meta","content",f).get(l+(r.content||""))){for(C=0;C<y.length;C++)if(d=y[C],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(C,1);break t}}d=f.createElement(l),Gn(d,l,r),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[vn]=t,_n(d),l=d}t.stateNode=l}else zv(f,t.type,t.stateNode);else t.stateNode=Fv(f,l,t.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?zv(f,t.type,t.stateNode):Fv(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&fh(t,t.memoizedProps,r.memoizedProps)}break;case 27:ri(i,t),oi(t),l&512&&(Sn||r===null||sa(r,r.return)),r!==null&&l&4&&fh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(ri(i,t),oi(t),l&512&&(Sn||r===null||sa(r,r.return)),t.flags&32){f=t.stateNode;try{gi(f,"")}catch(We){Vt(t,t.return,We)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,fh(t,f,r!==null?r.memoizedProps:f)),l&1024&&(ph=!0);break;case 6:if(ri(i,t),oi(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(We){Vt(t,t.return,We)}}break;case 3:if(Pc=null,f=ki,ki=Nc(i.containerInfo),ri(i,t),ki=f,oi(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{zr(i.containerInfo)}catch(We){Vt(t,t.return,We)}ph&&(ph=!1,zg(t));break;case 4:l=ki,ki=Nc(t.stateNode.containerInfo),ri(i,t),oi(t),ki=l;break;case 12:ri(i,t),oi(t);break;case 31:ri(i,t),oi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_c(t,l)));break;case 13:ri(i,t),oi(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(yc=kt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_c(t,l)));break;case 22:f=t.memoizedState!==null;var G=r!==null&&r.memoizedState!==null,ie=Aa,ge=Sn;if(Aa=ie||f,Sn=ge||G,ri(i,t),Sn=ge,Aa=ie,oi(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||G||Aa||Sn||Ys(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){G=r=i;try{if(d=G.stateNode,f)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=G.stateNode;var ye=G.memoizedProps.style,le=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(We){Vt(G,G.return,We)}}}else if(i.tag===6){if(r===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(We){Vt(G,G.return,We)}}}else if(i.tag===18){if(r===null){G=i;try{var ce=G.stateNode;f?Rv(ce,!0):Rv(G.stateNode,!1)}catch(We){Vt(G,G.return,We)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,_c(t,r))));break;case 19:ri(i,t),oi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_c(t,l)));break;case 30:break;case 21:break;default:ri(i,t),oi(t)}}function oi(t){var i=t.flags;if(i&2){try{for(var r,l=t.return;l!==null;){if(Dg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,d=hh(t);vc(t,d,f);break;case 5:var y=r.stateNode;r.flags&32&&(gi(y,""),r.flags&=-33);var C=hh(t);vc(t,C,y);break;case 3:case 4:var G=r.stateNode.containerInfo,ie=hh(t);dh(t,ie,G);break;default:throw Error(a(161))}}catch(ge){Vt(t,t.return,ge)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function zg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;zg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ra(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Lg(t,i.alternate,i),i=i.sibling}function Ys(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ss(4,i,i.return),Ys(i);break;case 1:sa(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Rg(i,i.return,r),Ys(i);break;case 27:nl(i.stateNode);case 26:case 5:sa(i,i.return),Ys(i);break;case 22:i.memoizedState===null&&Ys(i);break;case 30:Ys(i);break;default:Ys(i)}t=t.sibling}}function Ca(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ca(f,d,r),qo(4,d);break;case 1:if(Ca(f,d,r),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ie){Vt(l,l.return,ie)}if(l=d,f=l.updateQueue,f!==null){var C=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)gm(G[f],C)}catch(ie){Vt(l,l.return,ie)}}r&&y&64&&wg(d),Yo(d,d.return);break;case 27:Ug(d);case 26:case 5:Ca(f,d,r),r&&l===null&&y&4&&Cg(d),Yo(d,d.return);break;case 12:Ca(f,d,r);break;case 31:Ca(f,d,r),r&&y&4&&Ig(f,d);break;case 13:Ca(f,d,r),r&&y&4&&Fg(f,d);break;case 22:d.memoizedState===null&&Ca(f,d,r),Yo(d,d.return);break;case 30:break;default:Ca(f,d,r)}i=i.sibling}}function mh(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Lo(r))}function gh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Lo(t))}function Xi(t,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Hg(t,i,r,l),i=i.sibling}function Hg(t,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Xi(t,i,r,l),f&2048&&qo(9,i);break;case 1:Xi(t,i,r,l);break;case 3:Xi(t,i,r,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Lo(t)));break;case 12:if(f&2048){Xi(t,i,r,l),t=i.stateNode;try{var d=i.memoizedProps,y=d.id,C=d.onPostCommit;typeof C=="function"&&C(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Vt(i,i.return,G)}}else Xi(t,i,r,l);break;case 31:Xi(t,i,r,l);break;case 13:Xi(t,i,r,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Xi(t,i,r,l):Zo(t,i):d._visibility&2?Xi(t,i,r,l):(d._visibility|=2,Rr(t,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&mh(y,i);break;case 24:Xi(t,i,r,l),f&2048&&gh(i.alternate,i);break;default:Xi(t,i,r,l)}}function Rr(t,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,y=i,C=r,G=l,ie=y.flags;switch(y.tag){case 0:case 11:case 15:Rr(d,y,C,G,f),qo(8,y);break;case 23:break;case 22:var ge=y.stateNode;y.memoizedState!==null?ge._visibility&2?Rr(d,y,C,G,f):Zo(d,y):(ge._visibility|=2,Rr(d,y,C,G,f)),f&&ie&2048&&mh(y.alternate,y);break;case 24:Rr(d,y,C,G,f),f&&ie&2048&&gh(y.alternate,y);break;default:Rr(d,y,C,G,f)}i=i.sibling}}function Zo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,l=i,f=l.flags;switch(l.tag){case 22:Zo(r,l),f&2048&&mh(l.alternate,l);break;case 24:Zo(r,l),f&2048&&gh(l.alternate,l);break;default:Zo(r,l)}i=i.sibling}}var Ko=8192;function Cr(t,i,r){if(t.subtreeFlags&Ko)for(t=t.child;t!==null;)Gg(t,i,r),t=t.sibling}function Gg(t,i,r){switch(t.tag){case 26:Cr(t,i,r),t.flags&Ko&&t.memoizedState!==null&&RM(r,ki,t.memoizedState,t.memoizedProps);break;case 5:Cr(t,i,r);break;case 3:case 4:var l=ki;ki=Nc(t.stateNode.containerInfo),Cr(t,i,r),ki=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Ko,Ko=16777216,Cr(t,i,r),Ko=l):Cr(t,i,r));break;default:Cr(t,i,r)}}function Vg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Qo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Nn=l,Xg(l,t)}Vg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kg(t),t=t.sibling}function kg(t){switch(t.tag){case 0:case 11:case 15:Qo(t),t.flags&2048&&ss(9,t,t.return);break;case 3:Qo(t);break;case 12:Qo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,xc(t)):Qo(t);break;default:Qo(t)}}function xc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Nn=l,Xg(l,t)}Vg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ss(8,i,i.return),xc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,xc(i));break;default:xc(i)}t=t.sibling}}function Xg(t,i){for(;Nn!==null;){var r=Nn;switch(r.tag){case 0:case 11:case 15:ss(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Lo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Nn=l;else e:for(r=t;Nn!==null;){l=Nn;var f=l.sibling,d=l.return;if(Pg(l),l===r){Nn=null;break e}if(f!==null){f.return=d,Nn=f;break e}Nn=d}}}var ky={getCacheForType:function(t){var i=zn(xn),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return zn(xn).controller.signal}},Xy=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Kt=null,yt=null,St=0,Gt=0,Mi=null,rs=!1,Dr=!1,vh=!1,Da=0,dn=0,os=0,Zs=0,_h=0,Si=0,Ur=0,jo=null,li=null,xh=!1,yc=0,Wg=0,Mc=1/0,Sc=null,ls=null,An=0,cs=null,Nr=null,Ua=0,yh=0,Mh=null,qg=null,$o=0,Sh=null;function bi(){return(Lt&2)!==0&&St!==0?St&-St:B.T!==null?Rh():Mo()}function Yg(){if(Si===0)if((St&536870912)===0||wt){var t=rt;rt<<=1,(rt&3932160)===0&&(rt=262144),Si=t}else Si=536870912;return t=xi.current,t!==null&&(t.flags|=32),Si}function ci(t,i,r){(t===Kt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(Lr(t,0),us(t,St,Si,!1)),Ge(t,r),((Lt&2)===0||t!==Kt)&&(t===Kt&&((Lt&2)===0&&(Zs|=r),dn===4&&us(t,St,Si,!1)),ra(t))}function Zg(t,i,r){if((Lt&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&t.expiredLanes)===0||Ce(t,i),f=l?Yy(t,i):Eh(t,i,!0),d=l;do{if(f===0){Dr&&!l&&us(t,i,0,!1);break}else{if(r=t.current.alternate,d&&!Wy(r)){f=Eh(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var C=t;f=jo;var G=C.current.memoizedState.isDehydrated;if(G&&(Lr(C,y).flags|=256),y=Eh(C,y,!1),y!==2){if(vh&&!G){C.errorRecoveryDisabledLanes|=d,Zs|=d,f=4;break e}d=li,li=f,d!==null&&(li===null?li=d:li.push.apply(li,d))}f=y}if(d=!1,f!==2)continue}}if(f===1){Lr(t,0),us(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:us(l,i,Si,!rs);break e;case 2:li=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=yc+300-kt(),10<f)){if(us(l,i,Si,!rs),ve(l,0,!0)!==0)break e;Ua=i,l.timeoutHandle=Tv(Kg.bind(null,l,r,li,Sc,xh,i,Si,Zs,Ur,rs,d,"Throttled",-0,0),f);break e}Kg(l,r,li,Sc,xh,i,Si,Zs,Ur,rs,d,null,-0,0)}}break}while(!0);ra(t)}function Kg(t,i,r,l,f,d,y,C,G,ie,ge,ye,le,ce){if(t.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},Gg(i,d,ye);var We=(d&62914560)===d?yc-kt():(d&4194048)===d?Wg-kt():0;if(We=CM(ye,We),We!==null){Ua=d,t.cancelPendingCommit=We(iv.bind(null,t,i,d,r,l,f,y,C,G,ge,ye,null,le,ce)),us(t,d,y,!ie);return}}iv(t,i,d,r,l,f,y,C,G)}function Wy(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],d=f.getSnapshot;f=f.value;try{if(!vi(d(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function us(t,i,r,l){i&=~_h,i&=~Zs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-Be(f),y=1<<d;l[d]=-1,f&=~y}r!==0&&Ft(t,r,i)}function bc(){return(Lt&6)===0?(Jo(0),!1):!0}function bh(){if(yt!==null){if(Gt===0)var t=yt.return;else t=yt,ya=zs=null,zf(t),br=null,Oo=0,t=yt;for(;t!==null;)Ag(t.alternate,t),t=t.return;yt=null}}function Lr(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,fM(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Ua=0,bh(),Kt=t,yt=r=_a(t.current,null),St=i,Gt=0,Mi=null,rs=!1,Dr=Ce(t,i),vh=!1,Ur=Si=_h=Zs=os=dn=0,li=jo=null,xh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Be(l),d=1<<f;i|=t[f],l&=~d}return Da=i,Xl(),r}function Qg(t,i){ht=null,B.H=ko,i===Sr||i===$l?(i=hm(),Gt=3):i===wf?(i=hm(),Gt=4):Gt=i===th?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Mi=i,yt===null&&(dn=1,hc(t,Ni(i,t.current)))}function jg(){var t=xi.current;return t===null?!0:(St&4194048)===St?Ii===null:(St&62914560)===St||(St&536870912)!==0?t===Ii:!1}function $g(){var t=B.H;return B.H=ko,t===null?ko:t}function Jg(){var t=B.A;return B.A=ky,t}function Ec(){dn=4,rs||(St&4194048)!==St&&xi.current!==null||(Dr=!0),(os&134217727)===0&&(Zs&134217727)===0||Kt===null||us(Kt,St,Si,!1)}function Eh(t,i,r){var l=Lt;Lt|=2;var f=$g(),d=Jg();(Kt!==t||St!==i)&&(Sc=null,Lr(t,i)),i=!1;var y=dn;e:do try{if(Gt!==0&&yt!==null){var C=yt,G=Mi;switch(Gt){case 8:bh(),y=6;break e;case 3:case 2:case 9:case 6:xi.current===null&&(i=!0);var ie=Gt;if(Gt=0,Mi=null,Pr(t,C,G,ie),r&&Dr){y=0;break e}break;default:ie=Gt,Gt=0,Mi=null,Pr(t,C,G,ie)}}qy(),y=dn;break}catch(ge){Qg(t,ge)}while(!0);return i&&t.shellSuspendCounter++,ya=zs=null,Lt=l,B.H=f,B.A=d,yt===null&&(Kt=null,St=0,Xl()),y}function qy(){for(;yt!==null;)ev(yt)}function Yy(t,i){var r=Lt;Lt|=2;var l=$g(),f=Jg();Kt!==t||St!==i?(Sc=null,Mc=kt()+500,Lr(t,i)):Dr=Ce(t,i);e:do try{if(Gt!==0&&yt!==null){i=yt;var d=Mi;t:switch(Gt){case 1:Gt=0,Mi=null,Pr(t,i,d,1);break;case 2:case 9:if(um(d)){Gt=0,Mi=null,tv(i);break}i=function(){Gt!==2&&Gt!==9||Kt!==t||(Gt=7),ra(t)},d.then(i,i);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:um(d)?(Gt=0,Mi=null,tv(i)):(Gt=0,Mi=null,Pr(t,i,d,7));break;case 5:var y=null;switch(yt.tag){case 26:y=yt.memoizedState;case 5:case 27:var C=yt;if(y?Hv(y):C.stateNode.complete){Gt=0,Mi=null;var G=C.sibling;if(G!==null)yt=G;else{var ie=C.return;ie!==null?(yt=ie,Tc(ie)):yt=null}break t}}Gt=0,Mi=null,Pr(t,i,d,5);break;case 6:Gt=0,Mi=null,Pr(t,i,d,6);break;case 8:bh(),dn=6;break e;default:throw Error(a(462))}}Zy();break}catch(ge){Qg(t,ge)}while(!0);return ya=zs=null,B.H=l,B.A=f,Lt=r,yt!==null?0:(Kt=null,St=0,Xl(),dn)}function Zy(){for(;yt!==null&&!fn();)ev(yt)}function ev(t){var i=Eg(t.alternate,t,Da);t.memoizedProps=t.pendingProps,i===null?Tc(t):yt=i}function tv(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=_g(r,i,i.pendingProps,i.type,void 0,St);break;case 11:i=_g(r,i,i.pendingProps,i.type.render,i.ref,St);break;case 5:zf(i);default:Ag(r,i),i=yt=Jp(i,Da),i=Eg(r,i,Da)}t.memoizedProps=t.pendingProps,i===null?Tc(t):yt=i}function Pr(t,i,r,l){ya=zs=null,zf(i),br=null,Oo=0;var f=i.return;try{if(Iy(t,f,i,r,St)){dn=1,hc(t,Ni(r,t.current)),yt=null;return}}catch(d){if(f!==null)throw yt=f,d;dn=1,hc(t,Ni(r,t.current)),yt=null;return}i.flags&32768?(wt||l===1?t=!0:Dr||(St&536870912)!==0?t=!1:(rs=t=!0,(l===2||l===9||l===3||l===6)&&(l=xi.current,l!==null&&l.tag===13&&(l.flags|=16384))),nv(i,t)):Tc(i)}function Tc(t){var i=t;do{if((i.flags&32768)!==0){nv(i,rs);return}t=i.return;var r=zy(i.alternate,i,Da);if(r!==null){yt=r;return}if(i=i.sibling,i!==null){yt=i;return}yt=i=t}while(i!==null);dn===0&&(dn=5)}function nv(t,i){do{var r=Hy(t.alternate,t);if(r!==null){r.flags&=32767,yt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){yt=t;return}yt=t=r}while(t!==null);dn=6,yt=null}function iv(t,i,r,l,f,d,y,C,G){t.cancelPendingCommit=null;do Ac();while(An!==0);if((Lt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=hf,nn(t,r,d,y,C,G),t===Kt&&(yt=Kt=null,St=0),Nr=i,cs=t,Ua=r,yh=d,Mh=f,qg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$y(J,function(){return lv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=H.p,H.p=2,y=Lt,Lt|=4;try{Gy(t,i,r)}finally{Lt=y,H.p=f,B.T=l}}An=1,av(),sv(),rv()}}function av(){if(An===1){An=0;var t=cs,i=Nr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=H.p;H.p=2;var f=Lt;Lt|=4;try{Bg(i,t);var d=Ih,y=Xp(t.containerInfo),C=d.focusedElem,G=d.selectionRange;if(y!==C&&C&&C.ownerDocument&&kp(C.ownerDocument.documentElement,C)){if(G!==null&&of(C)){var ie=G.start,ge=G.end;if(ge===void 0&&(ge=ie),"selectionStart"in C)C.selectionStart=ie,C.selectionEnd=Math.min(ge,C.value.length);else{var ye=C.ownerDocument||document,le=ye&&ye.defaultView||window;if(le.getSelection){var ce=le.getSelection(),We=C.textContent.length,at=Math.min(G.start,We),qt=G.end===void 0?at:Math.min(G.end,We);!ce.extend&&at>qt&&(y=qt,qt=at,at=y);var j=Vp(C,at),k=Vp(C,qt);if(j&&k&&(ce.rangeCount!==1||ce.anchorNode!==j.node||ce.anchorOffset!==j.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var ne=ye.createRange();ne.setStart(j.node,j.offset),ce.removeAllRanges(),at>qt?(ce.addRange(ne),ce.extend(k.node,k.offset)):(ne.setEnd(k.node,k.offset),ce.addRange(ne))}}}}for(ye=[],ce=C;ce=ce.parentNode;)ce.nodeType===1&&ye.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ye.length;C++){var xe=ye[C];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Bc=!!Oh,Ih=Oh=null}finally{Lt=f,H.p=l,B.T=r}}t.current=i,An=2}}function sv(){if(An===2){An=0;var t=cs,i=Nr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=H.p;H.p=2;var f=Lt;Lt|=4;try{Lg(t,i.alternate,i)}finally{Lt=f,H.p=l,B.T=r}}An=3}}function rv(){if(An===4||An===3){An=0,K();var t=cs,i=Nr,r=Ua,l=qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?An=5:(An=0,Nr=cs=null,ov(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ls=null),yo(r),i=i.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(he,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=H.p,H.p=2,B.T=null;try{for(var d=t.onRecoverableError,y=0;y<l.length;y++){var C=l[y];d(C.value,{componentStack:C.stack})}}finally{B.T=i,H.p=f}}(Ua&3)!==0&&Ac(),ra(t),f=t.pendingLanes,(r&261930)!==0&&(f&42)!==0?t===Sh?$o++:($o=0,Sh=t):$o=0,Jo(0)}}function ov(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Lo(i)))}function Ac(){return av(),sv(),rv(),lv()}function lv(){if(An!==5)return!1;var t=cs,i=yh;yh=0;var r=yo(Ua),l=B.T,f=H.p;try{H.p=32>r?32:r,B.T=null,r=Mh,Mh=null;var d=cs,y=Ua;if(An=0,Nr=cs=null,Ua=0,(Lt&6)!==0)throw Error(a(331));var C=Lt;if(Lt|=4,kg(d.current),Hg(d,d.current,y,r),Lt=C,Jo(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(he,d)}catch{}return!0}finally{H.p=f,B.T=l,ov(t,i)}}function cv(t,i,r){i=Ni(r,i),i=eh(t.stateNode,i,2),t=ns(t,i,2),t!==null&&(Ge(t,2),ra(t))}function Vt(t,i,r){if(t.tag===3)cv(t,t,r);else for(;i!==null;){if(i.tag===3){cv(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ls===null||!ls.has(l))){t=Ni(r,t),r=ug(2),l=ns(i,r,2),l!==null&&(fg(r,l,i,t),Ge(l,2),ra(l));break}}i=i.return}}function Th(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new Xy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(vh=!0,f.add(r),t=Ky.bind(null,t,i,r),i.then(t,t))}function Ky(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Kt===t&&(St&r)===r&&(dn===4||dn===3&&(St&62914560)===St&&300>kt()-yc?(Lt&2)===0&&Lr(t,0):_h|=r,Ur===St&&(Ur=0)),ra(t)}function uv(t,i){i===0&&(i=be()),t=Is(t,i),t!==null&&(Ge(t,i),ra(t))}function Qy(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),uv(t,r)}function jy(t,i){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),uv(t,r)}function $y(t,i){return pn(t,i)}var wc=null,Or=null,Ah=!1,Rc=!1,wh=!1,fs=0;function ra(t){t!==Or&&t.next===null&&(Or===null?wc=Or=t:Or=Or.next=t),Rc=!0,Ah||(Ah=!0,eM())}function Jo(t,i){if(!wh&&Rc){wh=!0;do for(var r=!1,l=wc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var y=l.suspendedLanes,C=l.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=f&~(y&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,pv(l,d))}else d=St,d=ve(l,l===Kt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ce(l,d)||(r=!0,pv(l,d));l=l.next}while(r);wh=!1}}function Jy(){fv()}function fv(){Rc=Ah=!1;var t=0;fs!==0&&uM()&&(t=fs);for(var i=kt(),r=null,l=wc;l!==null;){var f=l.next,d=hv(l,i);d===0?(l.next=null,r===null?wc=f:r.next=f,f===null&&(Or=r)):(r=l,(t!==0||(d&3)!==0)&&(Rc=!0)),l=f}An!==0&&An!==5||Jo(t),fs!==0&&(fs=0)}function hv(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Be(d),C=1<<y,G=f[y];G===-1?((C&r)===0||(C&l)!==0)&&(f[y]=Fe(C,i)):G<=i&&(t.expiredLanes|=C),d&=~C}if(i=Kt,r=St,r=ve(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===i&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Qt(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ce(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(l!==null&&Qt(l),yo(r)){case 2:case 8:r=E;break;case 32:r=J;break;case 268435456:r=de;break;default:r=J}return l=dv.bind(null,t),r=pn(r,l),t.callbackPriority=i,t.callbackNode=r,i}return l!==null&&l!==null&&Qt(l),t.callbackPriority=2,t.callbackNode=null,2}function dv(t,i){if(An!==0&&An!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Ac()&&t.callbackNode!==r)return null;var l=St;return l=ve(t,t===Kt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Zg(t,l,i),hv(t,kt()),t.callbackNode!=null&&t.callbackNode===r?dv.bind(null,t):null)}function pv(t,i){if(Ac())return null;Zg(t,i,!0)}function eM(){hM(function(){(Lt&6)!==0?pn(O,Jy):fv()})}function Rh(){if(fs===0){var t=yr;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),fs=t}return fs}function mv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ns(""+t)}function gv(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function tM(t,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var d=mv((f[Fn]||null).action),y=l.submitter;y&&(i=(i=y[Fn]||null)?mv(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var C=new Hl("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(fs!==0){var G=y?gv(f,y):new FormData(f);Zf(r,{pending:!0,data:G,method:f.method,action:d},null,G)}}else typeof d=="function"&&(C.preventDefault(),G=y?gv(f,y):new FormData(f),Zf(r,{pending:!0,data:G,method:f.method,action:d},d,G))},currentTarget:f}]})}}for(var Ch=0;Ch<ff.length;Ch++){var Dh=ff[Ch],nM=Dh.toLowerCase(),iM=Dh[0].toUpperCase()+Dh.slice(1);Vi(nM,"on"+iM)}Vi(Yp,"onAnimationEnd"),Vi(Zp,"onAnimationIteration"),Vi(Kp,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(xy,"onTransitionRun"),Vi(yy,"onTransitionStart"),Vi(My,"onTransitionCancel"),Vi(Qp,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function vv(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var C=l[y],G=C.instance,ie=C.currentTarget;if(C=C.listener,G!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=ie;try{d(f)}catch(ge){kl(ge)}f.currentTarget=null,d=G}else for(y=0;y<l.length;y++){if(C=l[y],G=C.instance,ie=C.currentTarget,C=C.listener,G!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=ie;try{d(f)}catch(ge){kl(ge)}f.currentTarget=null,d=G}}}}function Mt(t,i){var r=i[Cs];r===void 0&&(r=i[Cs]=new Set);var l=t+"__bubble";r.has(l)||(_v(i,t,2,!1),r.add(l))}function Uh(t,i,r){var l=0;i&&(l|=4),_v(r,t,l,i)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function Nh(t){if(!t[Cc]){t[Cc]=!0,Il.forEach(function(r){r!=="selectionchange"&&(aM.has(r)||Uh(r,!1,t),Uh(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Cc]||(i[Cc]=!0,Uh("selectionchange",!1,i))}}function _v(t,i,r,l){switch(Yv(i)){case 2:var f=NM;break;case 8:f=LM;break;default:f=Yh}r=f.bind(null,i,r,t),f=void 0,!ju||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function Lh(t,i,r,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var C=l.stateNode.containerInfo;if(C===f)break;if(y===4)for(y=l.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;C!==null;){if(y=pa(C),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){l=d=y;continue e}C=C.parentNode}}l=l.return}bp(function(){var ie=d,ge=Ku(r),ye=[];e:{var le=jp.get(t);if(le!==void 0){var ce=Hl,We=t;switch(t){case"keypress":if(Bl(r)===0)break e;case"keydown":case"keyup":ce=jx;break;case"focusin":We="focus",ce=tf;break;case"focusout":We="blur",ce=tf;break;case"beforeblur":case"afterblur":ce=tf;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=ey;break;case Yp:case Zp:case Kp:ce=Vx;break;case Qp:ce=ny;break;case"scroll":case"scrollend":ce=Fx;break;case"wheel":ce=ay;break;case"copy":case"cut":case"paste":ce=Xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Rp;break;case"toggle":case"beforetoggle":ce=ry}var at=(i&4)!==0,qt=!at&&(t==="scroll"||t==="scrollend"),j=at?le!==null?le+"Capture":null:le;at=[];for(var k=ie,ne;k!==null;){var xe=k;if(ne=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ne===null||j===null||(xe=So(k,j),xe!=null&&at.push(tl(k,xe,ne))),qt)break;k=k.return}0<at.length&&(le=new ce(le,We,null,r,ge),ye.push({event:le,listeners:at}))}}if((i&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&r!==Zu&&(We=r.relatedTarget||r.fromElement)&&(pa(We)||We[ii]))break e;if((ce||le)&&(le=ge.window===ge?ge:(le=ge.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(We=r.relatedTarget||r.toElement,ce=ie,We=We?pa(We):null,We!==null&&(qt=c(We),at=We.tag,We!==qt||at!==5&&at!==27&&at!==6)&&(We=null)):(ce=null,We=ie),ce!==We)){if(at=Ap,xe="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(at=Rp,xe="onPointerLeave",j="onPointerEnter",k="pointer"),qt=ce==null?le:Us(ce),ne=We==null?le:Us(We),le=new at(xe,k+"leave",ce,r,ge),le.target=qt,le.relatedTarget=ne,xe=null,pa(ge)===ie&&(at=new at(j,k+"enter",We,r,ge),at.target=ne,at.relatedTarget=qt,xe=at),qt=xe,ce&&We)t:{for(at=sM,j=ce,k=We,ne=0,xe=j;xe;xe=at(xe))ne++;xe=0;for(var tt=k;tt;tt=at(tt))xe++;for(;0<ne-xe;)j=at(j),ne--;for(;0<xe-ne;)k=at(k),xe--;for(;ne--;){if(j===k||k!==null&&j===k.alternate){at=j;break t}j=at(j),k=at(k)}at=null}else at=null;ce!==null&&xv(ye,le,ce,at,!1),We!==null&&qt!==null&&xv(ye,qt,We,at,!0)}}e:{if(le=ie?Us(ie):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var Ct=Ip;else if(Pp(le))if(Fp)Ct=gy;else{Ct=py;var Ye=dy}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ie&&Pt(ie.elementType)&&(Ct=Ip):Ct=my;if(Ct&&(Ct=Ct(t,ie))){Op(ye,Ct,r,ge);break e}Ye&&Ye(t,le,ie),t==="focusout"&&ie&&le.type==="number"&&ie.memoizedProps.value!=null&&xt(le,"number",le.value)}switch(Ye=ie?Us(ie):window,t){case"focusin":(Pp(Ye)||Ye.contentEditable==="true")&&(hr=Ye,lf=ie,Do=null);break;case"focusout":Do=lf=hr=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Wp(ye,r,ge);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":Wp(ye,r,ge)}var dt;if(af)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else fr?Np(t,r)&&(bt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(bt="onCompositionStart");bt&&(Cp&&r.locale!=="ko"&&(fr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&fr&&(dt=Ep()):(Ka=ge,$u="value"in Ka?Ka.value:Ka.textContent,fr=!0)),Ye=Dc(ie,bt),0<Ye.length&&(bt=new wp(bt,t,null,r,ge),ye.push({event:bt,listeners:Ye}),dt?bt.data=dt:(dt=Lp(r),dt!==null&&(bt.data=dt)))),(dt=ly?cy(t,r):uy(t,r))&&(bt=Dc(ie,"onBeforeInput"),0<bt.length&&(Ye=new wp("onBeforeInput","beforeinput",null,r,ge),ye.push({event:Ye,listeners:bt}),Ye.data=dt)),tM(ye,t,ie,r,ge)}vv(ye,i)})}function tl(t,i,r){return{instance:t,listener:i,currentTarget:r}}function Dc(t,i){for(var r=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=So(t,r),f!=null&&l.unshift(tl(t,f,d)),f=So(t,i),f!=null&&l.push(tl(t,f,d))),t.tag===3)return l;t=t.return}return[]}function sM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function xv(t,i,r,l,f){for(var d=i._reactName,y=[];r!==null&&r!==l;){var C=r,G=C.alternate,ie=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||ie===null||(G=ie,f?(ie=So(r,d),ie!=null&&y.unshift(tl(r,ie,G))):f||(ie=So(r,d),ie!=null&&y.push(tl(r,ie,G)))),r=r.return}y.length!==0&&t.push({event:i,listeners:y})}var rM=/\r\n?/g,oM=/\u0000|\uFFFD/g;function yv(t){return(typeof t=="string"?t:""+t).replace(rM,`
`).replace(oM,"")}function Mv(t,i){return i=yv(i),yv(t)===i}function Wt(t,i,r,l,f,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||gi(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&gi(t,""+l);break;case"className":Xe(t,"class",l);break;case"tabIndex":Xe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,r,l);break;case"style":Gi(t,l,d);break;case"data":if(i!=="object"){Xe(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Ns(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&Wt(t,i,"name",f.name,f,null),Wt(t,i,"formEncType",f.formEncType,f,null),Wt(t,i,"formMethod",f.formMethod,f,null),Wt(t,i,"formTarget",f.formTarget,f,null)):(Wt(t,i,"encType",f.encType,f,null),Wt(t,i,"method",f.method,f,null),Wt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Ns(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=ga);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=Ns(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Ne(t,"popover",l);break;case"xlinkActuate":Ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ve(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ve(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ve(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ve(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ne(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=na.get(r)||r,Ne(t,r,l))}}function Ph(t,i,r,l,f,d){switch(r){case"style":Gi(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?gi(t,l):(typeof l=="number"||typeof l=="bigint")&&gi(t,""+l);break;case"onScroll":l!=null&&Mt("scroll",t);break;case"onScrollEnd":l!=null&&Mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),d=t[Fn]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,l,f);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):Ne(t,r,l)}}}function Gn(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var l=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var y=r[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(t,i,d,y,r,null)}}f&&Wt(t,i,"srcSet",r.srcSet,r,null),l&&Wt(t,i,"src",r.src,r,null);return;case"input":Mt("invalid",t);var C=d=y=f=null,G=null,ie=null;for(l in r)if(r.hasOwnProperty(l)){var ge=r[l];if(ge!=null)switch(l){case"name":f=ge;break;case"type":y=ge;break;case"checked":G=ge;break;case"defaultChecked":ie=ge;break;case"value":d=ge;break;case"defaultValue":C=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:Wt(t,i,l,ge,r,null)}}qn(t,d,C,G,ie,y,f,!1);return;case"select":Mt("invalid",t),l=y=d=null;for(f in r)if(r.hasOwnProperty(f)&&(C=r[f],C!=null))switch(f){case"value":d=C;break;case"defaultValue":y=C;break;case"multiple":l=C;default:Wt(t,i,f,C,r,null)}i=d,r=y,t.multiple=!!l,i!=null?Tn(t,!!l,i,!1):r!=null&&Tn(t,!!l,r,!0);return;case"textarea":Mt("invalid",t),d=f=l=null;for(y in r)if(r.hasOwnProperty(y)&&(C=r[y],C!=null))switch(y){case"value":l=C;break;case"defaultValue":f=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Wt(t,i,y,C,r,null)}Hi(t,l,f,d);return;case"option":for(G in r)r.hasOwnProperty(G)&&(l=r[G],l!=null)&&(G==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":Wt(t,i,G,l,r,null));return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(l=0;l<el.length;l++)Mt(el[l],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in r)if(r.hasOwnProperty(ie)&&(l=r[ie],l!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(t,i,ie,l,r,null)}return;default:if(Pt(i)){for(ge in r)r.hasOwnProperty(ge)&&(l=r[ge],l!==void 0&&Ph(t,i,ge,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&Wt(t,i,C,l,r,null))}function lM(t,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,y=null,C=null,G=null,ie=null,ge=null;for(ce in r){var ye=r[ce];if(r.hasOwnProperty(ce)&&ye!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":G=ye;default:l.hasOwnProperty(ce)||Wt(t,i,ce,null,l,ye)}}for(var le in l){var ce=l[le];if(ye=r[le],l.hasOwnProperty(le)&&(ce!=null||ye!=null))switch(le){case"type":d=ce;break;case"name":f=ce;break;case"checked":ie=ce;break;case"defaultChecked":ge=ce;break;case"value":y=ce;break;case"defaultValue":C=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:ce!==ye&&Wt(t,i,le,ce,l,ye)}}ze(t,y,C,G,ie,ge,d,f);return;case"select":ce=y=C=le=null;for(d in r)if(G=r[d],r.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":ce=G;default:l.hasOwnProperty(d)||Wt(t,i,d,null,l,G)}for(f in l)if(d=l[f],G=r[f],l.hasOwnProperty(f)&&(d!=null||G!=null))switch(f){case"value":le=d;break;case"defaultValue":C=d;break;case"multiple":y=d;default:d!==G&&Wt(t,i,f,d,l,G)}i=C,r=y,l=ce,le!=null?Tn(t,!!r,le,!1):!!l!=!!r&&(i!=null?Tn(t,!!r,i,!0):Tn(t,!!r,r?[]:"",!1));return;case"textarea":ce=le=null;for(C in r)if(f=r[C],r.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Wt(t,i,C,null,l,f)}for(y in l)if(f=l[y],d=r[y],l.hasOwnProperty(y)&&(f!=null||d!=null))switch(y){case"value":le=f;break;case"defaultValue":ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Wt(t,i,y,f,l,d)}mi(t,le,ce);return;case"option":for(var We in r)le=r[We],r.hasOwnProperty(We)&&le!=null&&!l.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:Wt(t,i,We,null,l,le));for(G in l)le=l[G],ce=r[G],l.hasOwnProperty(G)&&le!==ce&&(le!=null||ce!=null)&&(G==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":Wt(t,i,G,le,l,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in r)le=r[at],r.hasOwnProperty(at)&&le!=null&&!l.hasOwnProperty(at)&&Wt(t,i,at,null,l,le);for(ie in l)if(le=l[ie],ce=r[ie],l.hasOwnProperty(ie)&&le!==ce&&(le!=null||ce!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:Wt(t,i,ie,le,l,ce)}return;default:if(Pt(i)){for(var qt in r)le=r[qt],r.hasOwnProperty(qt)&&le!==void 0&&!l.hasOwnProperty(qt)&&Ph(t,i,qt,void 0,l,le);for(ge in l)le=l[ge],ce=r[ge],!l.hasOwnProperty(ge)||le===ce||le===void 0&&ce===void 0||Ph(t,i,ge,le,l,ce);return}}for(var j in r)le=r[j],r.hasOwnProperty(j)&&le!=null&&!l.hasOwnProperty(j)&&Wt(t,i,j,null,l,le);for(ye in l)le=l[ye],ce=r[ye],!l.hasOwnProperty(ye)||le===ce||le==null&&ce==null||Wt(t,i,ye,le,l,ce)}function Sv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],d=f.transferSize,y=f.initiatorType,C=f.duration;if(d&&C&&Sv(y)){for(y=0,C=f.responseEnd,l+=1;l<r.length;l++){var G=r[l],ie=G.startTime;if(ie>C)break;var ge=G.transferSize,ye=G.initiatorType;ge&&Sv(ye)&&(G=G.responseEnd,y+=ge*(G<C?1:(C-ie)/(G-ie)))}if(--l,i+=8*(d+y)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Oh=null,Ih=null;function Uc(t){return t.nodeType===9?t:t.ownerDocument}function bv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ev(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Fh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bh=null;function uM(){var t=window.event;return t&&t.type==="popstate"?t===Bh?!1:(Bh=t,!0):(Bh=null,!1)}var Tv=typeof setTimeout=="function"?setTimeout:void 0,fM=typeof clearTimeout=="function"?clearTimeout:void 0,Av=typeof Promise=="function"?Promise:void 0,hM=typeof queueMicrotask=="function"?queueMicrotask:typeof Av<"u"?function(t){return Av.resolve(null).then(t).catch(dM)}:Tv;function dM(t){setTimeout(function(){throw t})}function hs(t){return t==="head"}function wv(t,i){var r=i,l=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(f),zr(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")nl(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,nl(r);for(var d=r.firstChild;d;){var y=d.nextSibling,C=d.nodeName;d[Wa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=y}}else r==="body"&&nl(t.ownerDocument.body);r=f}while(r);zr(i)}function Rv(t,i){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function zh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":zh(r),qa(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function pM(t,i,r,l){for(;t.nodeType===1;){var f=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Wa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Fi(t.nextSibling),t===null)break}return null}function mM(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Fi(t.nextSibling),t===null))return null;return t}function Cv(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Fi(t.nextSibling),t===null))return null;return t}function Hh(t){return t.data==="$?"||t.data==="$~"}function Gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function gM(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Fi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Vh=null;function Dv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return Fi(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function Uv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function Nv(t,i,r){switch(i=Uc(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function nl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);qa(t)}var Bi=new Map,Lv=new Set;function Nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Na=H.d;H.d={f:vM,r:_M,D:xM,C:yM,L:MM,m:SM,X:EM,S:bM,M:TM};function vM(){var t=Na.f(),i=bc();return t||i}function _M(t){var i=ma(t);i!==null&&i.tag===5&&i.type==="form"?Qm(i):Na.r(t)}var Ir=typeof document>"u"?null:document;function Pv(t,i,r){var l=Ir;if(l&&typeof i=="string"&&i){var f=zt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),Lv.has(f)||(Lv.add(f),t={rel:t,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Gn(i,"link",t),_n(i),l.head.appendChild(i)))}}function xM(t){Na.D(t),Pv("dns-prefetch",t,null)}function yM(t,i){Na.C(t,i),Pv("preconnect",t,i)}function MM(t,i,r){Na.L(t,i,r);var l=Ir;if(l&&t&&i){var f='link[rel="preload"][as="'+zt(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+zt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+zt(r.imageSizes)+'"]')):f+='[href="'+zt(t)+'"]';var d=f;switch(i){case"style":d=Fr(t);break;case"script":d=Br(t)}Bi.has(d)||(t=_({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),Bi.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(il(d))||i==="script"&&l.querySelector(al(d))||(i=l.createElement("link"),Gn(i,"link",t),_n(i),l.head.appendChild(i)))}}function SM(t,i){Na.m(t,i);var r=Ir;if(r&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+zt(l)+'"][href="'+zt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Br(t)}if(!Bi.has(d)&&(t=_({rel:"modulepreload",href:t},i),Bi.set(d,t),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(al(d)))return}l=r.createElement("link"),Gn(l,"link",t),_n(l),r.head.appendChild(l)}}}function bM(t,i,r){Na.S(t,i,r);var l=Ir;if(l&&t){var f=Ya(l).hoistableStyles,d=Fr(t);i=i||"default";var y=f.get(d);if(!y){var C={loading:0,preload:null};if(y=l.querySelector(il(d)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},r),(r=Bi.get(d))&&kh(t,r);var G=y=l.createElement("link");_n(G),Gn(G,"link",t),G._p=new Promise(function(ie,ge){G.onload=ie,G.onerror=ge}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Lc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:C},f.set(d,y)}}}function EM(t,i){Na.X(t,i);var r=Ir;if(r&&t){var l=Ya(r).hoistableScripts,f=Br(t),d=l.get(f);d||(d=r.querySelector(al(f)),d||(t=_({src:t,async:!0},i),(i=Bi.get(f))&&Xh(t,i),d=r.createElement("script"),_n(d),Gn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function TM(t,i){Na.M(t,i);var r=Ir;if(r&&t){var l=Ya(r).hoistableScripts,f=Br(t),d=l.get(f);d||(d=r.querySelector(al(f)),d||(t=_({src:t,async:!0,type:"module"},i),(i=Bi.get(f))&&Xh(t,i),d=r.createElement("script"),_n(d),Gn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Ov(t,i,r,l){var f=(f=ee.current)?Nc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Fr(r.href),r=Ya(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Fr(r.href);var d=Ya(f).hoistableStyles,y=d.get(t);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=f.querySelector(il(t)))&&!d._p&&(y.instance=d,y.state.loading=5),Bi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Bi.set(t,r),d||AM(f,t,r,y.state))),i&&l===null)throw Error(a(528,""));return y}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Br(r),r=Ya(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Fr(t){return'href="'+zt(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function Iv(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function AM(t,i,r,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Gn(i,"link",r),_n(i),t.head.appendChild(i))}function Br(t){return'[src="'+zt(t)+'"]'}function al(t){return"script[async]"+t}function Fv(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+zt(r.href)+'"]');if(l)return i.instance=l,_n(l),l;var f=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),_n(l),Gn(l,"style",f),Lc(l,r.precedence,t),i.instance=l;case"stylesheet":f=Fr(r.href);var d=t.querySelector(il(f));if(d)return i.state.loading|=4,i.instance=d,_n(d),d;l=Iv(r),(f=Bi.get(f))&&kh(l,f),d=(t.ownerDocument||t).createElement("link"),_n(d);var y=d;return y._p=new Promise(function(C,G){y.onload=C,y.onerror=G}),Gn(d,"link",l),i.state.loading|=4,Lc(d,r.precedence,t),i.instance=d;case"script":return d=Br(r.src),(f=t.querySelector(al(d)))?(i.instance=f,_n(f),f):(l=r,(f=Bi.get(d))&&(l=_({},r),Xh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),_n(f),Gn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Lc(l,r.precedence,t));return i.instance}function Lc(t,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,y=0;y<l.length;y++){var C=l[y];if(C.dataset.precedence===i)d=C;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function kh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Xh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Pc=null;function Bv(t,i,r){if(Pc===null){var l=new Map,f=Pc=new Map;f.set(r,l)}else f=Pc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),f=0;f<r.length;f++){var d=r[f];if(!(d[Wa]||d[vn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=t+y;var C=l.get(y);C?C.push(d):l.set(y,[d])}}return l}function zv(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function wM(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Hv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function RM(t,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Fr(l.href),d=i.querySelector(il(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Oc.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=d,_n(d);return}d=i.ownerDocument||i,l=Iv(l),(f=Bi.get(f))&&kh(l,f),d=d.createElement("link"),_n(d);var y=d;y._p=new Promise(function(C,G){y.onload=C,y.onerror=G}),Gn(d,"link",l),r.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Oc.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var Wh=0;function CM(t,i){return t.stylesheets&&t.count===0&&Fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&Fc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Wh===0&&(Wh=62500*cM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Wh?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ic=null;function Fc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ic=new Map,i.forEach(DM,t),Ic=null,Oc.call(t))}function DM(t,i){if(!(i.state.loading&4)){var r=Ic.get(t);if(r)var l=r.get(null);else{r=new Map,Ic.set(t,r);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var y=f[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),l=y)}l&&r.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),d=r.get(y)||l,d===l&&r.set(null,f),r.set(y,f),this.count++,l=Oc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var sl={$$typeof:L,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function UM(t,i,r,l,f,d,y,C,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qe(0),this.hiddenUpdates=qe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Gv(t,i,r,l,f,d,y,C,G,ie,ge,ye){return t=new UM(t,i,r,y,G,ie,ge,ye,C),i=1,d===!0&&(i|=24),d=_i(3,null,null,i),t.current=d,d.stateNode=t,i=Ef(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},Rf(d),t}function Vv(t){return t?(t=mr,t):mr}function kv(t,i,r,l,f,d){f=Vv(f),l.context===null?l.context=f:l.pendingContext=f,l=ts(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=ns(t,l,i),r!==null&&(ci(r,t,i),Fo(r,t,i))}function Xv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function qh(t,i){Xv(t,i),(t=t.alternate)&&Xv(t,i)}function Wv(t){if(t.tag===13||t.tag===31){var i=Is(t,67108864);i!==null&&ci(i,t,67108864),qh(t,67108864)}}function qv(t){if(t.tag===13||t.tag===31){var i=bi();i=xo(i);var r=Is(t,i);r!==null&&ci(r,t,i),qh(t,i)}}var Bc=!0;function NM(t,i,r,l){var f=B.T;B.T=null;var d=H.p;try{H.p=2,Yh(t,i,r,l)}finally{H.p=d,B.T=f}}function LM(t,i,r,l){var f=B.T;B.T=null;var d=H.p;try{H.p=8,Yh(t,i,r,l)}finally{H.p=d,B.T=f}}function Yh(t,i,r,l){if(Bc){var f=Zh(l);if(f===null)Lh(t,i,l,zc,r),Zv(t,l);else if(OM(f,t,i,r,l))l.stopPropagation();else if(Zv(t,l),i&4&&-1<PM.indexOf(t)){for(;f!==null;){var d=ma(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=we(d.pendingLanes);if(y!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var G=1<<31-Be(y);C.entanglements[1]|=G,y&=~G}ra(d),(Lt&6)===0&&(Mc=kt()+500,Jo(0))}}break;case 31:case 13:C=Is(d,2),C!==null&&ci(C,d,2),bc(),qh(d,2)}if(d=Zh(l),d===null&&Lh(t,i,l,zc,r),d===f)break;f=d}f!==null&&l.stopPropagation()}else Lh(t,i,l,null,r)}}function Zh(t){return t=Ku(t),Kh(t)}var zc=null;function Kh(t){if(zc=null,t=pa(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=h(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return zc=t,null}function Yv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case O:return 2;case E:return 8;case J:case re:return 32;case de:return 268435456;default:return 32}default:return 32}}var Qh=!1,ds=null,ps=null,ms=null,rl=new Map,ol=new Map,gs=[],PM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zv(t,i){switch(t){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":rl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(i.pointerId)}}function ll(t,i,r,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=ma(i),i!==null&&Wv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function OM(t,i,r,l,f){switch(i){case"focusin":return ds=ll(ds,t,i,r,l,f),!0;case"dragenter":return ps=ll(ps,t,i,r,l,f),!0;case"mouseover":return ms=ll(ms,t,i,r,l,f),!0;case"pointerover":var d=f.pointerId;return rl.set(d,ll(rl.get(d)||null,t,i,r,l,f)),!0;case"gotpointercapture":return d=f.pointerId,ol.set(d,ll(ol.get(d)||null,t,i,r,l,f)),!0}return!1}function Kv(t){var i=pa(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,lr(t.priority,function(){qv(r)});return}}else if(i===31){if(i=h(r),i!==null){t.blockedOn=i,lr(t.priority,function(){qv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Zh(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);Zu=l,r.target.dispatchEvent(l),Zu=null}else return i=ma(r),i!==null&&Wv(i),t.blockedOn=r,!1;i.shift()}return!0}function Qv(t,i,r){Hc(t)&&r.delete(i)}function IM(){Qh=!1,ds!==null&&Hc(ds)&&(ds=null),ps!==null&&Hc(ps)&&(ps=null),ms!==null&&Hc(ms)&&(ms=null),rl.forEach(Qv),ol.forEach(Qv)}function Gc(t,i){t.blockedOn===i&&(t.blockedOn=null,Qh||(Qh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,IM)))}var Vc=null;function jv(t){Vc!==t&&(Vc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Vc===t&&(Vc=null);for(var i=0;i<t.length;i+=3){var r=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Kh(l||r)===null)continue;break}var d=ma(r);d!==null&&(t.splice(i,3),i-=3,Zf(d,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function zr(t){function i(G){return Gc(G,t)}ds!==null&&Gc(ds,t),ps!==null&&Gc(ps,t),ms!==null&&Gc(ms,t),rl.forEach(i),ol.forEach(i);for(var r=0;r<gs.length;r++){var l=gs[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<gs.length&&(r=gs[0],r.blockedOn===null);)Kv(r),r.blockedOn===null&&gs.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],d=r[l+1],y=f[Fn]||null;if(typeof d=="function")y||jv(r);else if(y){var C=null;if(d&&d.hasAttribute("formAction")){if(f=d,y=d[Fn]||null)C=y.formAction;else if(Kh(f)!==null)continue}else C=y.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),jv(r)}}}function $v(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function jh(t){this._internalRoot=t}kc.prototype.render=jh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=bi();kv(r,l,t,i,null,null)},kc.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;kv(t.current,2,null,t,null,null),bc(),i[ii]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Mo();t={blockedOn:null,target:t,priority:i};for(var r=0;r<gs.length&&i!==0&&i<gs[r].priority;r++);gs.splice(r,0,t),r===0&&Kv(t)}};var Jv=e.version;if(Jv!=="19.2.7")throw Error(a(527,Jv,"19.2.7"));H.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var FM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{he=Xc.inject(FM),pe=Xc}catch{}}return ul.createRoot=function(t,i){if(!o(t))throw Error(a(299));var r=!1,l="",f=rg,d=og,y=lg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=Gv(t,1,!1,null,null,r,l,null,f,d,y,$v),t[ii]=i.current,Nh(t),new jh(i)},ul.hydrateRoot=function(t,i,r){if(!o(t))throw Error(a(299));var l=!1,f="",d=rg,y=og,C=lg,G=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(G=r.formState)),i=Gv(t,1,!0,i,r??null,l,f,G,d,y,C,$v),i.context=Vv(null),r=i.current,l=bi(),l=xo(l),f=ts(l),f.callback=null,ns(r,f,l),r=l,i.current.lanes=r,Ge(i,r),ra(i),t[ii]=i.current,Nh(t),new kc(i)},ul.version="19.2.7",ul}var c_;function YM(){if(c_)return Jh.exports;c_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Jh.exports=qM(),Jh.exports}var ZM=YM(),en=k0();const X0="185",Ga={ROTATE:0,DOLLY:1,PAN:2},ao={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},KM=0,u_=1,QM=2,Mu=1,jM=2,Ml=3,As=0,ti=1,Zi=2,Ji=0,so=1,Xd=2,f_=3,h_=4,$M=5,Js=100,JM=101,eS=102,tS=103,nS=104,iS=200,aS=201,sS=202,rS=203,Wd=204,qd=205,oS=206,lS=207,cS=208,uS=209,fS=210,hS=211,dS=212,pS=213,mS=214,Yd=0,Zd=1,Kd=2,lo=3,Qd=4,jd=5,$d=6,Jd=7,W0=0,gS=1,vS=2,fa=0,q0=1,Y0=2,Z0=3,zu=4,K0=5,co=6,Hu=7,H1=300,ir=301,uo=302,ad=303,sd=304,Gu=306,Al=1e3,Ha=1001,e0=1002,Cn=1003,_S=1004,Wc=1005,On=1006,rd=1007,tr=1008,wi=1009,G1=1010,V1=1011,wl=1012,Q0=1013,ha=1014,ji=1015,ni=1016,j0=1017,$0=1018,Rl=1020,k1=35902,X1=35899,W1=1021,q1=1022,$i=1023,ka=1026,nr=1027,J0=1028,ep=1029,ar=1030,tp=1031,np=1033,Su=33776,bu=33777,Eu=33778,Tu=33779,t0=35840,n0=35841,i0=35842,a0=35843,s0=36196,r0=37492,o0=37496,l0=37488,c0=37489,Cu=37490,u0=37491,f0=37808,h0=37809,d0=37810,p0=37811,m0=37812,g0=37813,v0=37814,_0=37815,x0=37816,y0=37817,M0=37818,S0=37819,b0=37820,E0=37821,T0=36492,A0=36494,w0=36495,R0=36283,C0=36284,Du=36285,D0=36286,xS=3200,yS=3201,Uu=0,MS=1,Ki="",fi="srgb",Nu="srgb-linear",Lu="linear",Ot="srgb",Hr=7680,d_=519,SS=512,bS=513,ES=514,ip=515,TS=516,AS=517,ap=518,wS=519,p_=35044,m_=35048,g_="300 es",ua=2e3,Cl=2001;function RS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function CS(){const s=Pu("canvas");return s.style.display="block",s}const v_={};function __(...s){const e="THREE."+s.shift();console.log(e,...s)}function Y1(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=Y1(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function ut(...s){s=Y1(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function ro(...s){const e=s.join(" ");e in v_||(v_[e]=!0,st(...s))}function DS(s,e,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const US={[Yd]:Zd,[Kd]:$d,[Qd]:Jd,[lo]:jd,[Zd]:Yd,[$d]:Kd,[Jd]:Qd,[jd]:lo};class Rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let x_=1234567;const bl=Math.PI/180,Dl=180/Math.PI;function mo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[n&63|128]+Zn[n>>8&255]+"-"+Zn[n>>16&255]+Zn[n>>24&255]+Zn[a&255]+Zn[a>>8&255]+Zn[a>>16&255]+Zn[a>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function sp(s,e){return(s%e+e)%e}function NS(s,e,n,a,o){return a+(s-e)*(o-a)/(n-e)}function LS(s,e,n){return s!==e?(n-s)/(e-s):0}function El(s,e,n){return(1-n)*s+n*e}function PS(s,e,n,a){return El(s,e,1-Math.exp(-n*a))}function OS(s,e=1){return e-Math.abs(sp(s,e*2)-e)}function IS(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function FS(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function BS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function zS(s,e){return s+Math.random()*(e-s)}function HS(s){return s*(.5-Math.random())}function GS(s){s!==void 0&&(x_=s);let e=x_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function VS(s){return s*bl}function kS(s){return s*Dl}function XS(s){return(s&s-1)===0&&s!==0}function WS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function YS(s,e,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),m=u(n/2),p=c((e+a)/2),g=u((e+a)/2),_=c((e-a)/2),v=u((e-a)/2),x=c((a-e)/2),b=u((a-e)/2);switch(o){case"XYX":s.set(h*g,m*_,m*v,h*p);break;case"YZY":s.set(m*v,h*g,m*_,h*p);break;case"ZXZ":s.set(m*_,m*v,h*g,h*p);break;case"XZX":s.set(h*g,m*b,m*x,h*p);break;case"YXY":s.set(m*x,h*g,m*b,h*p);break;case"ZYZ":s.set(m*b,m*x,h*g,h*p);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function io(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Z1={DEG2RAD:bl,RAD2DEG:Dl,generateUUID:mo,clamp:vt,euclideanModulo:sp,mapLinear:NS,inverseLerp:LS,lerp:El,damp:PS,pingpong:OS,smoothstep:IS,smootherstep:FS,randInt:BS,randFloat:zS,randFloatSpread:HS,seededRandom:GS,degToRad:VS,radToDeg:kS,isPowerOfTwo:XS,ceilPowerOfTwo:WS,floorPowerOfTwo:qS,setQuaternionFromProperEuler:YS,normalize:Jn,denormalize:io},vp=class vp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(vt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vp.prototype.isVector2=!0;let Ze=vp;class ws{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,h){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],v=c[u+0],x=c[u+1],b=c[u+2],R=c[u+3];if(_!==R||m!==v||p!==x||g!==b){let S=m*v+p*x+g*b+_*R;S<0&&(v=-v,x=-x,b=-b,R=-R,S=-S);let M=1-h;if(S<.9995){const P=Math.acos(S),L=Math.sin(P);M=Math.sin(M*P)/L,h=Math.sin(h*P)/L,m=m*M+v*h,p=p*M+x*h,g=g*M+b*h,_=_*M+R*h}else{m=m*M+v*h,p=p*M+x*h,g=g*M+b*h,_=_*M+R*h;const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const h=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return e[n]=h*b+g*_+m*x-p*v,e[n+1]=m*b+g*v+p*_-h*x,e[n+2]=p*b+g*x+h*v-m*_,e[n+3]=g*b-h*_-m*v-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(o/2),_=h(c/2),v=m(a/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=v*g*_+p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_+v*x*b;break;case"YZX":this._x=v*g*_+p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_-v*x*b;break;case"XZY":this._x=v*g*_-p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_+v*x*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-p)*x,this._z=(u-o)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+p)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(u-o)/x,this._x=(c+p)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+o*p-c*m,this._y=o*g+u*m+c*h-a*p,this._z=c*g+u*p+a*m-o*h,this._w=u*g-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){let a=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _p=class _p{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(y_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(y_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*a),g=2*(h*n-c*o),_=2*(c*a-u*n);return this.x=n+m*p+u*_-h*g,this.y=a+m*g+h*p-c*_,this.z=o+m*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(vt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_p.prototype.isVector3=!0;let $=_p;const od=new $,y_=new ws,xp=class xp{constructor(e,n,a,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,m,p)}set(e,n,a,o,c,u,h,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],p=a[1],g=a[4],_=a[7],v=a[2],x=a[5],b=a[8],R=o[0],S=o[3],M=o[6],P=o[1],L=o[4],A=o[7],I=o[2],N=o[5],F=o[8];return c[0]=u*R+h*P+m*I,c[3]=u*S+h*L+m*N,c[6]=u*M+h*A+m*F,c[1]=p*R+g*P+_*I,c[4]=p*S+g*L+_*N,c[7]=p*M+g*A+_*F,c[2]=v*R+x*P+b*I,c[5]=v*S+x*L+b*N,c[8]=v*M+x*A+b*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*h*p-a*c*g+a*h*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=g*u-h*p,v=h*m-g*c,x=p*c-u*m,b=n*_+a*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=_*R,e[1]=(o*p-g*a)*R,e[2]=(h*a-o*u)*R,e[3]=v*R,e[4]=(g*n-o*m)*R,e[5]=(o*c-h*n)*R,e[6]=x*R,e[7]=(a*m-p*n)*R,e[8]=(u*n-a*c)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(e,n){return ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ld.makeScale(e,n)),this}rotate(e){return ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ld.makeRotation(-e)),this}translate(e,n){return ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ld.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xp.prototype.isMatrix3=!0;let ct=xp;const ld=new ct,M_=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S_=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZS(){const s={enabled:!0,workingColorSpace:Nu,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ot&&(o.r=Va(o.r),o.g=Va(o.g),o.b=Va(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(o.r=oo(o.r),o.g=oo(o.g),o.b=oo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ki?Lu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Nu]:{primaries:e,whitePoint:a,transfer:Lu,toXYZ:M_,fromXYZ:S_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:a,transfer:Ot,toXYZ:M_,fromXYZ:S_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Tt=ZS();function Va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gr;class KS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Gr===void 0&&(Gr=Pu("canvas")),Gr.width=e.width,Gr.height=e.height;const o=Gr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Gr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pu("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Va(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Va(n[a]/255)*255):n[a]=Va(n[a]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let QS=0;class rp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(cd(o[u].image)):c.push(cd(o[u]))}else c=cd(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?KS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let jS=0;const ud=new $;class Qn extends Rs{constructor(e=Qn.DEFAULT_IMAGE,n=Qn.DEFAULT_MAPPING,a=Ha,o=Ha,c=On,u=tr,h=$i,m=wi,p=Qn.DEFAULT_ANISOTROPY,g=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=mo(),this.name="",this.source=new rp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Al:e.x=e.x-Math.floor(e.x);break;case Ha:e.x=e.x<0?0:1;break;case e0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Al:e.y=e.y-Math.floor(e.y);break;case Ha:e.y=e.y<0?0:1;break;case e0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=H1;Qn.DEFAULT_ANISOTROPY=1;const yp=class yp{constructor(e=0,n=0,a=0,o=1){this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],_=m[8],v=m[1],x=m[5],b=m[9],R=m[2],S=m[6],M=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(b+S)<.1&&Math.abs(p+x+M-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,A=(x+1)/2,I=(M+1)/2,N=(g+v)/4,F=(_+R)/4,T=(b+S)/4;return L>A&&L>I?L<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(L),o=N/a,c=F/a):A>I?A<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),a=N/o,c=T/o):I<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),a=F/c,o=T/c),this.set(a,o,c,n),this}let P=Math.sqrt((S-b)*(S-b)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(S-b)/P,this.y=(_-R)/P,this.z=(v-g)/P,this.w=Math.acos((p+x+M-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(vt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yp.prototype.isVector4=!0;let on=yp;class $S extends Rs{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:a.depth},c=new Qn(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new rp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends $S{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class K1 extends Qn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends Qn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bu=class Bu{constructor(e,n,a,o,c,u,h,m,p,g,_,v,x,b,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,m,p,g,_,v,x,b,R,S)}set(e,n,a,o,c,u,h,m,p,g,_,v,x,b,R,S){const M=this.elements;return M[0]=e,M[4]=n,M[8]=a,M[12]=o,M[1]=c,M[5]=u,M[9]=h,M[13]=m,M[2]=p,M[6]=g,M[10]=_,M[14]=v,M[3]=x,M[7]=b,M[11]=R,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bu().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,o=1/Vr.setFromMatrixColumn(e,0).length(),c=1/Vr.setFromMatrixColumn(e,1).length(),u=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=u*g,x=u*_,b=h*g,R=h*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=x+b*p,n[5]=v-R*p,n[9]=-h*m,n[2]=R-v*p,n[6]=b+x*p,n[10]=u*m}else if(e.order==="YXZ"){const v=m*g,x=m*_,b=p*g,R=p*_;n[0]=v+R*h,n[4]=b*h-x,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=x*h-b,n[6]=R+v*h,n[10]=u*m}else if(e.order==="ZXY"){const v=m*g,x=m*_,b=p*g,R=p*_;n[0]=v-R*h,n[4]=-u*_,n[8]=b+x*h,n[1]=x+b*h,n[5]=u*g,n[9]=R-v*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(e.order==="ZYX"){const v=u*g,x=u*_,b=h*g,R=h*_;n[0]=m*g,n[4]=b*p-x,n[8]=v*p+R,n[1]=m*_,n[5]=R*p+v,n[9]=x*p-b,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(e.order==="YZX"){const v=u*m,x=u*p,b=h*m,R=h*p;n[0]=m*g,n[4]=R-v*_,n[8]=b*_+x,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=x*_+b,n[10]=v-R*_}else if(e.order==="XZY"){const v=u*m,x=u*p,b=h*m,R=h*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+R,n[5]=u*g,n[9]=x*_-b,n[2]=b*_-x,n[6]=h*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e2,e,t2)}lookAt(e,n,a){const o=this.elements;return Ei.subVectors(e,n),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),_s.crossVectors(a,Ei),_s.lengthSq()===0&&(Math.abs(a.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),_s.crossVectors(a,Ei)),_s.normalize(),qc.crossVectors(Ei,_s),o[0]=_s.x,o[4]=qc.x,o[8]=Ei.x,o[1]=_s.y,o[5]=qc.y,o[9]=Ei.y,o[2]=_s.z,o[6]=qc.z,o[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],p=a[12],g=a[1],_=a[5],v=a[9],x=a[13],b=a[2],R=a[6],S=a[10],M=a[14],P=a[3],L=a[7],A=a[11],I=a[15],N=o[0],F=o[4],T=o[8],U=o[12],X=o[1],V=o[5],Y=o[9],ue=o[13],fe=o[2],Q=o[6],B=o[10],H=o[14],z=o[3],te=o[7],me=o[11],D=o[15];return c[0]=u*N+h*X+m*fe+p*z,c[4]=u*F+h*V+m*Q+p*te,c[8]=u*T+h*Y+m*B+p*me,c[12]=u*U+h*ue+m*H+p*D,c[1]=g*N+_*X+v*fe+x*z,c[5]=g*F+_*V+v*Q+x*te,c[9]=g*T+_*Y+v*B+x*me,c[13]=g*U+_*ue+v*H+x*D,c[2]=b*N+R*X+S*fe+M*z,c[6]=b*F+R*V+S*Q+M*te,c[10]=b*T+R*Y+S*B+M*me,c[14]=b*U+R*ue+S*H+M*D,c[3]=P*N+L*X+A*fe+I*z,c[7]=P*F+L*V+A*Q+I*te,c[11]=P*T+L*Y+A*B+I*me,c[15]=P*U+L*ue+A*H+I*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],g=e[2],_=e[6],v=e[10],x=e[14],b=e[3],R=e[7],S=e[11],M=e[15],P=m*x-p*v,L=h*x-p*_,A=h*v-m*_,I=u*x-p*g,N=u*v-m*g,F=u*_-h*g;return n*(R*P-S*L+M*A)-a*(b*P-S*I+M*N)+o*(b*L-R*I+M*F)-c*(b*A-R*N+S*F)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],g=e[10];return n*(u*g-h*p)-a*(c*g-h*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8],_=e[9],v=e[10],x=e[11],b=e[12],R=e[13],S=e[14],M=e[15],P=n*h-a*u,L=n*m-o*u,A=n*p-c*u,I=a*m-o*h,N=a*p-c*h,F=o*p-c*m,T=g*R-_*b,U=g*S-v*b,X=g*M-x*b,V=_*S-v*R,Y=_*M-x*R,ue=v*M-x*S,fe=P*ue-L*Y+A*V+I*X-N*U+F*T;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/fe;return e[0]=(h*ue-m*Y+p*V)*Q,e[1]=(o*Y-a*ue-c*V)*Q,e[2]=(R*F-S*N+M*I)*Q,e[3]=(v*N-_*F-x*I)*Q,e[4]=(m*X-u*ue-p*U)*Q,e[5]=(n*ue-o*X+c*U)*Q,e[6]=(S*A-b*F-M*L)*Q,e[7]=(g*F-v*A+x*L)*Q,e[8]=(u*Y-h*X+p*T)*Q,e[9]=(a*X-n*Y-c*T)*Q,e[10]=(b*N-R*A+M*P)*Q,e[11]=(_*A-g*N-x*P)*Q,e[12]=(h*U-u*V-m*T)*Q,e[13]=(n*V-a*U+o*T)*Q,e[14]=(R*L-b*I-S*P)*Q,e[15]=(g*I-_*L+v*P)*Q,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,h=e.y,m=e.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+a,g*m-o*u,0,p*m-o*h,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,g=u+u,_=h+h,v=c*p,x=c*g,b=c*_,R=u*g,S=u*_,M=h*_,P=m*p,L=m*g,A=m*_,I=a.x,N=a.y,F=a.z;return o[0]=(1-(R+M))*I,o[1]=(x+A)*I,o[2]=(b-L)*I,o[3]=0,o[4]=(x-A)*N,o[5]=(1-(v+M))*N,o[6]=(S+P)*N,o[7]=0,o[8]=(b+L)*F,o[9]=(S-P)*F,o[10]=(1-(v+R))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Vr.set(o[0],o[1],o[2]).length();const h=Vr.set(o[4],o[5],o[6]).length(),m=Vr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Wi.copy(this);const p=1/u,g=1/h,_=1/m;return Wi.elements[0]*=p,Wi.elements[1]*=p,Wi.elements[2]*=p,Wi.elements[4]*=g,Wi.elements[5]*=g,Wi.elements[6]*=g,Wi.elements[8]*=_,Wi.elements[9]*=_,Wi.elements[10]*=_,n.setFromRotationMatrix(Wi),a.x=u,a.y=h,a.z=m,this}makePerspective(e,n,a,o,c,u,h=ua,m=!1){const p=this.elements,g=2*c/(n-e),_=2*c/(a-o),v=(n+e)/(n-e),x=(a+o)/(a-o);let b,R;if(m)b=c/(u-c),R=u*c/(u-c);else if(h===ua)b=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(h===Cl)b=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,h=ua,m=!1){const p=this.elements,g=2/(n-e),_=2/(a-o),v=-(n+e)/(n-e),x=-(a+o)/(a-o);let b,R;if(m)b=1/(u-c),R=u/(u-c);else if(h===ua)b=-2/(u-c),R=-(u+c)/(u-c);else if(h===Cl)b=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};Bu.prototype.isMatrix4=!0;let jt=Bu;const Vr=new $,Wi=new jt,e2=new $(0,0,0),t2=new $(1,1,1),_s=new $,qc=new $,Ei=new $,b_=new jt,E_=new ws;class Xa{constructor(e=0,n=0,a=0,o=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return b_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(b_,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return E_.setFromEuler(this),this.setFromQuaternion(E_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n2=0;const T_=new $,kr=new ws,La=new jt,Yc=new $,fl=new $,i2=new $,a2=new ws,A_=new $(1,0,0),w_=new $(0,1,0),R_=new $(0,0,1),C_={type:"added"},s2={type:"removed"},Xr={type:"childadded",child:null},fd={type:"childremoved",child:null};class Wn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new $,n=new Xa,a=new ws,o=new $(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new ct}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(A_,e)}rotateY(e){return this.rotateOnAxis(w_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,n){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(A_,e)}translateY(e){return this.translateOnAxis(w_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Yc.copy(e):Yc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(fl,Yc,this.up):La.lookAt(Yc,fl,this.up),this.quaternion.setFromRotationMatrix(La),o&&(La.extractRotation(o.matrixWorld),kr.setFromRotationMatrix(La),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C_),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(s2),fd.child=e,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),La.multiply(e.parent.matrixWorld)),e.applyMatrix4(La),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C_),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,i2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,a2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(n){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),b=u(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Wn.DEFAULT_UP=new $(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r2={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const S=n.getJointPose(R,a),M=this._getHandJoint(p,R);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;p.inputState.pinching&&v>x+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=x-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(r2)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Zc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const Q1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},Kc={h:0,s:0,l:0};function dd(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class it{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Tt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Tt.workingColorSpace){if(e=sp(e,1),n=vt(n,0,1),a=vt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=dd(u,c,e+1/3),this.g=dd(u,c,e),this.b=dd(u,c,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,n=fi){function a(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fi){const a=Q1[e.toLowerCase()];return a!==void 0?this.setHex(a,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Tt.workingToColorSpace(Kn.copy(this),e),Math.round(vt(Kn.r*255,0,255))*65536+Math.round(vt(Kn.g*255,0,255))*256+Math.round(vt(Kn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(Kn.copy(this),n);const a=Kn.r,o=Kn.g,c=Kn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const g=(h+u)/2;if(h===u)m=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(Kn.copy(this),n),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=fi){Tt.workingToColorSpace(Kn.copy(this),e);const n=Kn.r,a=Kn.g,o=Kn.b;return e!==fi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+n,xs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(xs),e.getHSL(Kc);const a=El(xs.h,Kc.h,n),o=El(xs.s,Kc.s,n),c=El(xs.l,Kc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new it;it.NAMES=Q1;class j1 extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xa,this.environmentIntensity=1,this.environmentRotation=new Xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qi=new $,Pa=new $,pd=new $,Oa=new $,Wr=new $,qr=new $,D_=new $,md=new $,gd=new $,vd=new $,_d=new on,xd=new on,yd=new on;class Qi{constructor(e=new $,n=new $,a=new $){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),qi.subVectors(e,n),o.cross(qi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){qi.subVectors(o,n),Pa.subVectors(a,n),pd.subVectors(e,n);const u=qi.dot(qi),h=qi.dot(Pa),m=qi.dot(pd),p=Pa.dot(Pa),g=Pa.dot(pd),_=u*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(p*m-h*g)*v,b=(u*g-h*m)*v;return c.set(1-x-b,b,x)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getInterpolation(e,n,a,o,c,u,h,m){return this.getBarycoord(e,n,a,o,Oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Oa.x),m.addScaledVector(u,Oa.y),m.addScaledVector(h,Oa.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return _d.setScalar(0),xd.setScalar(0),yd.setScalar(0),_d.fromBufferAttribute(e,n),xd.fromBufferAttribute(e,a),yd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(_d,c.x),u.addScaledVector(xd,c.y),u.addScaledVector(yd,c.z),u}static isFrontFacing(e,n,a,o){return qi.subVectors(a,n),Pa.subVectors(e,n),qi.cross(Pa).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),qi.cross(Pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Qi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,h;Wr.subVectors(o,a),qr.subVectors(c,a),md.subVectors(e,a);const m=Wr.dot(md),p=qr.dot(md);if(m<=0&&p<=0)return n.copy(a);gd.subVectors(e,o);const g=Wr.dot(gd),_=qr.dot(gd);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(Wr,u);vd.subVectors(e,c);const x=Wr.dot(vd),b=qr.dot(vd);if(b>=0&&x<=b)return n.copy(c);const R=x*p-m*b;if(R<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(a).addScaledVector(qr,h);const S=g*b-x*_;if(S<=0&&_-g>=0&&x-b>=0)return D_.subVectors(c,o),h=(_-g)/(_-g+(x-b)),n.copy(o).addScaledVector(D_,h);const M=1/(S+R+v);return u=R*M,h=v*M,n.copy(a).addScaledVector(Wr,u).addScaledVector(qr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rr{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Yi):Yi.fromBufferAttribute(c,u),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Qc.copy(a.boundingBox)),Qc.applyMatrix4(e.matrixWorld),this.union(Qc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hl),jc.subVectors(this.max,hl),Yr.subVectors(e.a,hl),Zr.subVectors(e.b,hl),Kr.subVectors(e.c,hl),ys.subVectors(Zr,Yr),Ms.subVectors(Kr,Zr),Ks.subVectors(Yr,Kr);let n=[0,-ys.z,ys.y,0,-Ms.z,Ms.y,0,-Ks.z,Ks.y,ys.z,0,-ys.x,Ms.z,0,-Ms.x,Ks.z,0,-Ks.x,-ys.y,ys.x,0,-Ms.y,Ms.x,0,-Ks.y,Ks.x,0];return!Md(n,Yr,Zr,Kr,jc)||(n=[1,0,0,0,1,0,0,0,1],!Md(n,Yr,Zr,Kr,jc))?!1:($c.crossVectors(ys,Ms),n=[$c.x,$c.y,$c.z],Md(n,Yr,Zr,Kr,jc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ia=[new $,new $,new $,new $,new $,new $,new $,new $],Yi=new $,Qc=new rr,Yr=new $,Zr=new $,Kr=new $,ys=new $,Ms=new $,Ks=new $,hl=new $,jc=new $,$c=new $,Qs=new $;function Md(s,e,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){Qs.fromArray(s,c);const h=o.x*Math.abs(Qs.x)+o.y*Math.abs(Qs.y)+o.z*Math.abs(Qs.z),m=e.dot(Qs),p=n.dot(Qs),g=a.dot(Qs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const bn=new $,Jc=new Ze;let o2=0;class Di extends Rs{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=p_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Jc.fromBufferAttribute(this,n),Jc.applyMatrix3(e),this.setXY(n,Jc.x,Jc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix3(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(e),this.setXYZ(n,bn.x,bn.y,bn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=io(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Jn(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=io(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=io(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=io(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=io(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),o=Jn(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),a=Jn(a,this.array),o=Jn(o,this.array),c=Jn(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class $1 extends Di{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class J1 extends Di{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class ea extends Di{constructor(e,n,a){super(new Float32Array(e),n,a)}}const l2=new rr,dl=new $,Sd=new $;class Nl{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):l2.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dl.subVectors(e,this.center);const n=dl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(dl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dl.copy(e.center).add(Sd)),this.expandByPoint(dl.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let c2=0;const zi=new jt,bd=new Wn,Qr=new $,Ti=new rr,pl=new rr,Ln=new $;class da extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c2++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(RS(e)?J1:$1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ct().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,n,a){return zi.makeTranslation(e,n,a),this.applyMatrix4(zi),this}scale(e,n,a){return zi.makeScale(e,n,a),this.applyMatrix4(zi),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ea(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Ti.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const a=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];pl.setFromBufferAttribute(h),this.morphTargetsRelative?(Ln.addVectors(Ti.min,pl.min),Ti.expandByPoint(Ln),Ln.addVectors(Ti.max,pl.max),Ti.expandByPoint(Ln)):(Ti.expandByPoint(pl.min),Ti.expandByPoint(pl.max))}Ti.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Ln.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Ln));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Ln.fromBufferAttribute(h,p),m&&(Qr.fromBufferAttribute(e,p),Ln.add(Qr)),o=Math.max(o,a.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Di(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<a.count;T++)h[T]=new $,m[T]=new $;const p=new $,g=new $,_=new $,v=new Ze,x=new Ze,b=new Ze,R=new $,S=new $;function M(T,U,X){p.fromBufferAttribute(a,T),g.fromBufferAttribute(a,U),_.fromBufferAttribute(a,X),v.fromBufferAttribute(c,T),x.fromBufferAttribute(c,U),b.fromBufferAttribute(c,X),g.sub(p),_.sub(p),x.sub(v),b.sub(v);const V=1/(x.x*b.y-b.x*x.y);isFinite(V)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(V),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(V),h[T].add(R),h[U].add(R),h[X].add(R),m[T].add(S),m[U].add(S),m[X].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,U=P.length;T<U;++T){const X=P[T],V=X.start,Y=X.count;for(let ue=V,fe=V+Y;ue<fe;ue+=3)M(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const L=new $,A=new $,I=new $,N=new $;function F(T){I.fromBufferAttribute(o,T),N.copy(I);const U=h[T];L.copy(U),L.sub(I.multiplyScalar(I.dot(U))).normalize(),A.crossVectors(N,U);const V=A.dot(m[T])<0?-1:1;u.setXYZW(T,L.x,L.y,L.z,V)}for(let T=0,U=P.length;T<U;++T){const X=P[T],V=X.start,Y=X.count;for(let ue=V,fe=V+Y;ue<fe;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new $,c=new $,u=new $,h=new $,m=new $,p=new $,g=new $,_=new $;if(e)for(let v=0,x=e.count;v<x;v+=3){const b=e.getX(v+0),R=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,b),m.fromBufferAttribute(a,R),p.fromBufferAttribute(a,S),h.add(g),m.add(g),p.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Ln.fromBufferAttribute(e,n),Ln.normalize(),e.setXYZ(n,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(m.length*g);let x=0,b=0;for(let R=0,S=m.length;R<S;R++){h.isInterleavedBufferAttribute?x=m[R]*h.data.stride+h.offset:x=m[R]*g;for(let M=0;M<g;M++)v[b++]=p[x++]}return new Di(v,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new da,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=e(v,a);m.push(x)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let u2=0;class go extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u2++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=so,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=qd,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(a.blending=this.blending),this.side!==As&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Wd&&(a.blendSrc=this.blendSrc),this.blendDst!==qd&&(a.blendDst=this.blendDst),this.blendEquation!==Js&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Ze().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fa=new $,Ed=new $,eu=new $,Ss=new $,Td=new $,tu=new $,Ad=new $;class lp{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fa.copy(this.origin).addScaledVector(this.direction,n),Fa.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Ed.copy(e).add(n).multiplyScalar(.5),eu.copy(n).sub(e).normalize(),Ss.copy(this.origin).sub(Ed);const c=e.distanceTo(n)*.5,u=-this.direction.dot(eu),h=Ss.dot(this.direction),m=-Ss.dot(eu),p=Ss.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*m-h,v=u*h-m,b=c*g,_>=0)if(v>=-b)if(v<=b){const R=1/g;_*=R,v*=R,x=_*(_+u*v+2*h)+v*(u*_+v+2*m)+p}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+p;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+p):v<=b?(_=0,v=Math.min(Math.max(-c,-m),c),x=v*(v+2*m)+p):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+v*(v+2*m)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ed).addScaledVector(eu,v),x}intersectSphere(e,n){Fa.subVectors(e.center,this.origin);const a=Fa.dot(this.direction),o=Fa.dot(Fa)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(a=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Fa)!==null}intersectTriangle(e,n,a,o,c){Td.subVectors(n,e),tu.subVectors(a,e),Ad.crossVectors(Td,tu);let u=this.direction.dot(Ad),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Ss.subVectors(this.origin,e);const m=h*this.direction.dot(tu.crossVectors(Ss,tu));if(m<0)return null;const p=h*this.direction.dot(Td.cross(Ss));if(p<0||m+p>u)return null;const g=-h*Ss.dot(Ad);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cp extends go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=W0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const U_=new jt,js=new lp,nu=new Nl,N_=new $,iu=new $,au=new $,su=new $,wd=new $,ru=new $,L_=new $,ou=new $;class En extends Wn{constructor(e=new da,n=new cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){ru.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(wd.fromBufferAttribute(_,e),u?ru.addScaledVector(wd,g):ru.addScaledVector(wd.sub(n),g))}n.add(ru)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),nu.copy(a.boundingSphere),nu.applyMatrix4(c),js.copy(e.ray).recast(e.near),!(nu.containsPoint(js.origin)===!1&&(js.intersectSphere(nu,N_)===null||js.origin.distanceToSquared(N_)>(e.far-e.near)**2))&&(U_.copy(c).invert(),js.copy(e.ray).applyMatrix4(U_),!(a.boundingBox!==null&&js.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,js)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,R=v.length;b<R;b++){const S=v[b],M=u[S.materialIndex],P=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let A=P,I=L;A<I;A+=3){const N=h.getX(A),F=h.getX(A+1),T=h.getX(A+2);o=lu(this,M,e,a,p,g,_,N,F,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),R=Math.min(h.count,x.start+x.count);for(let S=b,M=R;S<M;S+=3){const P=h.getX(S),L=h.getX(S+1),A=h.getX(S+2);o=lu(this,u,e,a,p,g,_,P,L,A),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,R=v.length;b<R;b++){const S=v[b],M=u[S.materialIndex],P=Math.max(S.start,x.start),L=Math.min(m.count,Math.min(S.start+S.count,x.start+x.count));for(let A=P,I=L;A<I;A+=3){const N=A,F=A+1,T=A+2;o=lu(this,M,e,a,p,g,_,N,F,T),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),R=Math.min(m.count,x.start+x.count);for(let S=b,M=R;S<M;S+=3){const P=S,L=S+1,A=S+2;o=lu(this,u,e,a,p,g,_,P,L,A),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function f2(s,e,n,a,o,c,u,h){let m;if(e.side===ti?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,e.side===As,h),m===null)return null;ou.copy(h),ou.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(ou);return p<n.near||p>n.far?null:{distance:p,point:ou.clone(),object:s}}function lu(s,e,n,a,o,c,u,h,m,p){s.getVertexPosition(h,iu),s.getVertexPosition(m,au),s.getVertexPosition(p,su);const g=f2(s,e,n,a,iu,au,su,L_);if(g){const _=new $;Qi.getBarycoord(L_,iu,au,su,_),o&&(g.uv=Qi.getInterpolatedAttribute(o,h,m,p,_,new Ze)),c&&(g.uv1=Qi.getInterpolatedAttribute(c,h,m,p,_,new Ze)),u&&(g.normal=Qi.getInterpolatedAttribute(u,h,m,p,_,new $),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new $,materialIndex:0};Qi.getNormal(iu,au,su,v.normal),g.face=v,g.barycoord=_}return g}class ex extends Qn{constructor(e=null,n=1,a=1,o,c,u,h,m,p=Cn,g=Cn,_,v){super(null,u,h,m,p,g,o,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class P_ extends Di{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const jr=new jt,O_=new jt,cu=[],I_=new rr,h2=new jt,ml=new En,gl=new Nl;class d2 extends En{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new P_(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,h2)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,jr),I_.copy(e.boundingBox).applyMatrix4(jr),this.boundingBox.union(I_)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,jr),gl.copy(e.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(gl)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=e*c+1;for(let h=0;h<a.length;h++)a[h]=o[u+h]}raycast(e,n){const a=this.matrixWorld,o=this.count;if(ml.geometry=this.geometry,ml.material=this.material,ml.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gl.copy(this.boundingSphere),gl.applyMatrix4(a),e.ray.intersectsSphere(gl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,jr),O_.multiplyMatrices(a,jr),ml.matrixWorld=O_,ml.raycast(e,cu);for(let u=0,h=cu.length;u<h;u++){const m=cu[u];m.instanceId=c,m.object=this,n.push(m)}cu.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new P_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new ex(new Float32Array(o*this.count),o,this.count,J0,ji));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const h=this.geometry.morphTargetsRelative?1:1-u,m=o*e;return c[m]=h,c.set(a,m+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Rd=new $,p2=new $,m2=new ct;class za{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=Rd.subVectors(a,n).cross(p2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const o=e.delta(Rd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||m2.getNormalMatrix(e),o=this.coplanarPoint(Rd).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new Nl,g2=new Ze(.5,.5),uu=new $;class up{constructor(e=new za,n=new za,a=new za,o=new za,c=new za,u=new za){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ua,a=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],R=c[9],S=c[10],M=c[11],P=c[12],L=c[13],A=c[14],I=c[15];if(o[0].setComponents(p-u,x-g,M-b,I-P).normalize(),o[1].setComponents(p+u,x+g,M+b,I+P).normalize(),o[2].setComponents(p+h,x+_,M+R,I+L).normalize(),o[3].setComponents(p-h,x-_,M-R,I-L).normalize(),a)o[4].setComponents(m,v,S,A).normalize(),o[5].setComponents(p-m,x-v,M-S,I-A).normalize();else if(o[4].setComponents(p-m,x-v,M-S,I-A).normalize(),n===ua)o[5].setComponents(p+m,x+v,M+S,I+A).normalize();else if(n===Cl)o[5].setComponents(m,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){$s.center.set(0,0,0);const n=g2.distanceTo(e.center);return $s.radius=.7071067811865476+n,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(uu.x=o.normal.x>0?e.max.x:e.min.x,uu.y=o.normal.y>0?e.max.y:e.min.y,uu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(uu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tx extends Qn{constructor(e=[],n=ir,a,o,c,u,h,m,p,g){super(e,n,a,o,c,u,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ou extends Qn{constructor(e,n,a,o,c,u,h,m,p){super(e,n,a,o,c,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fo extends Qn{constructor(e,n,a=ha,o,c,u,h=Cn,m=Cn,p,g=ka,_=1){if(g!==ka&&g!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,c,u,h,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class v2 extends fo{constructor(e,n=ha,a=ir,o,c,u=Cn,h=Cn,m,p=ka){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,a,o,c,u,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nx extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vo extends da{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,a,n,e,u,c,0),b("z","y","x",1,-1,a,n,-e,u,c,1),b("x","z","y",1,1,e,a,n,o,u,2),b("x","z","y",1,-1,e,a,-n,o,u,3),b("x","y","z",1,-1,e,n,a,o,c,4),b("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new ea(p,3)),this.setAttribute("normal",new ea(g,3)),this.setAttribute("uv",new ea(_,2));function b(R,S,M,P,L,A,I,N,F,T,U){const X=A/F,V=I/T,Y=A/2,ue=I/2,fe=N/2,Q=F+1,B=T+1;let H=0,z=0;const te=new $;for(let me=0;me<B;me++){const D=me*V-ue;for(let W=0;W<Q;W++){const _e=W*X-Y;te[R]=_e*P,te[S]=D*L,te[M]=fe,p.push(te.x,te.y,te.z),te[R]=0,te[S]=0,te[M]=N>0?1:-1,g.push(te.x,te.y,te.z),_.push(W/F),_.push(1-me/T),H+=1}}for(let me=0;me<T;me++)for(let D=0;D<F;D++){const W=v+D+Q*me,_e=v+D+Q*(me+1),Ee=v+(D+1)+Q*(me+1),Te=v+(D+1)+Q*me;m.push(W,_e,Te),m.push(_e,Ee,Te),z+=6}h.addGroup(x,z,U),x+=z,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ll extends da{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,g=m+1,_=e/h,v=n/m,x=[],b=[],R=[],S=[];for(let M=0;M<g;M++){const P=M*v-u;for(let L=0;L<p;L++){const A=L*_-c;b.push(A,-P,0),R.push(0,0,1),S.push(L/h),S.push(1-M/m)}}for(let M=0;M<m;M++)for(let P=0;P<h;P++){const L=P+p*M,A=P+p*(M+1),I=P+1+p*(M+1),N=P+1+p*M;x.push(L,A,N),x.push(A,I,N)}this.setIndex(x),this.setAttribute("position",new ea(b,3)),this.setAttribute("normal",new ea(R,3)),this.setAttribute("uv",new ea(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.widthSegments,e.heightSegments)}}function ho(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const o=s[n][a];if(F_(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone();else if(Array.isArray(o))if(F_(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[n][a]=c}else e[n][a]=o.slice();else e[n][a]=o}}return e}function ei(s){const e={};for(let n=0;n<s.length;n++){const a=ho(s[n]);for(const o in a)e[o]=a[o]}return e}function F_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function _2(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function ix(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Ul={clone:ho,merge:ei};var x2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x2,this.fragmentShader=y2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=_2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const o=e.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new it().setHex(o.value);break;case"v2":this.uniforms[a].value=new Ze().fromArray(o.value);break;case"v3":this.uniforms[a].value=new $().fromArray(o.value);break;case"v4":this.uniforms[a].value=new on().fromArray(o.value);break;case"m3":this.uniforms[a].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[a].value=new jt().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ax extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class U0 extends go{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class M2 extends U0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class S2 extends go{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=W0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sx extends go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class b2 extends go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rx extends Wn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Cd=new jt,B_=new $,z_=new $;class ox{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new up,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;B_.setFromMatrixPosition(e.matrixWorld),n.position.copy(B_),z_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(z_),n.updateMatrixWorld(),Cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Cl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fu=new $,hu=new ws,oa=new $;class lx extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fu,hu,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,hu,oa.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(fu,hu,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fu,hu,oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bs=new $,H_=new Ze,G_=new Ze;class Ai extends lx{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,n){return this.getViewBounds(e,H_,G_),n.subVectors(G_,H_)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class E2 extends ox{constructor(){super(new Ai(90,1,.5,500)),this.isPointLightShadow=!0}}class T2 extends rx{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new E2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Vu extends lx{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class A2 extends ox{constructor(){super(new Vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dd extends rx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new A2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const $r=-90,Jr=1;class w2 extends Wn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ai($r,Jr,e,n);o.layers=this.layers,this.add(o);const c=new Ai($r,Jr,e,n);c.layers=this.layers,this.add(c);const u=new Ai($r,Jr,e,n);u.layers=this.layers,this.add(u);const h=new Ai($r,Jr,e,n);h.layers=this.layers,this.add(h);const m=new Ai($r,Jr,e,n);m.layers=this.layers,this.add(m);const p=new Ai($r,Jr,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(e===ua)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Cl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(a,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(a,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(a,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),a.texture.generateMipmaps=R,e.setRenderTarget(a,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(_,v,x),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class R2 extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class C2{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=D2.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function D2(){this._document.hidden===!1&&this.reset()}const fp="\\[\\]\\.:\\/",U2=new RegExp("["+fp+"]","g"),hp="[^"+fp+"]",N2="[^"+fp.replace("\\.","")+"]",L2=/((?:WC+[\/:])*)/.source.replace("WC",hp),P2=/(WCOD+)?/.source.replace("WCOD",N2),O2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hp),I2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hp),F2=new RegExp("^"+L2+P2+O2+I2+"$"),B2=["material","materials","bones","map"];class z2{constructor(e,n,a){const o=a||It.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,o)}getValue(e,n){this.bind();const a=this._targetGroup.nCachedObjects_,o=this._bindings[a];o!==void 0&&o.getValue(e,n)}setValue(e,n){const a=this._bindings;for(let o=this._targetGroup.nCachedObjects_,c=a.length;o!==c;++o)a[o].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}}class It{constructor(e,n,a){this.path=n,this.parsedPath=a||It.parseTrackName(n),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new It.Composite(e,n,a):new It(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(U2,"")}static parseTrackName(e){const n=F2.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},o=a.nodeName&&a.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){const c=a.nodeName.substring(o+1);B2.indexOf(c)!==-1&&(a.nodeName=a.nodeName.substring(0,o),a.objectName=c)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){const a=function(c){for(let u=0;u<c.length;u++){const h=c[u];if(h.name===n||h.uuid===n)return h;const m=a(h.children);if(m)return m}return null},o=a(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)e[n++]=a[o]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const a=this.resolvedProperty;for(let o=0,c=a.length;o!==c;++o)a[o]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,a=n.objectName,o=n.propertyName;let c=n.propertyIndex;if(e||(e=It.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let p=n.objectIndex;switch(a){case"materials":if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===p){p=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(p!==void 0){if(e[p]===void 0){ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[p]}}const u=e[o];if(u===void 0){const p=n.nodeName;ut("PropertyBinding: Trying to update property for track: "+p+"."+o+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let m=this.BindingType.Direct;if(c!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[c]!==void 0&&(c=e.morphTargetDictionary[c])}m=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(m=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(m=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=o;this.getValue=this.GetterByBindingType[m],this.setValue=this.SetterByBindingTypeAndVersioning[m][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=z2;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const V_=new jt;class H2{constructor(e,n,a=0,o=1/0){this.ray=new lp(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new op,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ut("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return V_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(V_),this}intersectObject(e,n=!0,a=[]){return N0(e,this,a,n),a.sort(k_),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)N0(e[o],this,a,n);return a.sort(k_),a}}function k_(s,e){return s.distance-e.distance}function N0(s,e,n,a){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=s.children;for(let u=0,h=c.length;u<h;u++)N0(c[u],e,n,!0)}}class G2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class X_{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Mp=class Mp{constructor(e,n,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=a,c[3]=o,this}};Mp.prototype.isMatrix2=!0;let W_=Mp;class V2 extends Rs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){st("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function q_(s,e,n,a){const o=k2(a);switch(n){case W1:return s*e;case J0:return s*e/o.components*o.byteLength;case ep:return s*e/o.components*o.byteLength;case ar:return s*e*2/o.components*o.byteLength;case tp:return s*e*2/o.components*o.byteLength;case q1:return s*e*3/o.components*o.byteLength;case $i:return s*e*4/o.components*o.byteLength;case np:return s*e*4/o.components*o.byteLength;case Su:case bu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Tu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case n0:case a0:return Math.max(s,16)*Math.max(e,8)/4;case t0:case i0:return Math.max(s,8)*Math.max(e,8)/2;case s0:case r0:case l0:case c0:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case o0:case Cu:case u0:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case f0:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case h0:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case d0:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case p0:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case m0:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case g0:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case v0:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case _0:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case x0:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case y0:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case M0:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case S0:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case b0:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case E0:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case T0:case A0:case w0:return Math.ceil(s/4)*Math.ceil(e/4)*16;case R0:case C0:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Du:case D0:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function k2(s){switch(s){case wi:case G1:return{byteLength:1,components:1};case wl:case V1:case ni:return{byteLength:2,components:1};case j0:case $0:return{byteLength:2,components:4};case ha:case Q0:case ji:return{byteLength:4,components:1};case k1:case X1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:X0}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=X0);function cx(){let s=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function X2(s){const e=new WeakMap;function n(h,m){const p=h.array,g=h.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],R=_[x];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++v,_[v]=R)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const R=_[x];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var W2=`#ifdef USE_ALPHAHASH
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
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
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
}`,Xb=`
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
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
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
#endif`,e3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t3=`#if defined( USE_POINTS_UV )
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
#endif`,X3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W3=`varying vec2 vUv;
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
}`,eE=`#define DISTANCE
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
}`,tE=`varying vec3 vWorldDirection;
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
}`,mt={alphahash_fragment:W2,alphahash_pars_fragment:q2,alphamap_fragment:Y2,alphamap_pars_fragment:Z2,alphatest_fragment:K2,alphatest_pars_fragment:Q2,aomap_fragment:j2,aomap_pars_fragment:$2,batching_pars_vertex:J2,batching_vertex:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:ab,bumpmap_pars_fragment:sb,clipping_planes_fragment:rb,clipping_planes_pars_fragment:ob,clipping_planes_pars_vertex:lb,clipping_planes_vertex:cb,color_fragment:ub,color_pars_fragment:fb,color_pars_vertex:hb,color_vertex:db,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:gb,displacementmap_pars_vertex:vb,displacementmap_vertex:_b,emissivemap_fragment:xb,emissivemap_pars_fragment:yb,colorspace_fragment:Mb,colorspace_pars_fragment:Sb,envmap_fragment:bb,envmap_common_pars_fragment:Eb,envmap_pars_fragment:Tb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:Fb,envmap_vertex:wb,fog_vertex:Rb,fog_pars_vertex:Cb,fog_fragment:Db,fog_pars_fragment:Ub,gradientmap_pars_fragment:Nb,lightmap_pars_fragment:Lb,lights_lambert_fragment:Pb,lights_lambert_pars_fragment:Ob,lights_pars_begin:Ib,lights_toon_fragment:Bb,lights_toon_pars_fragment:zb,lights_phong_fragment:Hb,lights_phong_pars_fragment:Gb,lights_physical_fragment:Vb,lights_physical_pars_fragment:kb,lights_fragment_begin:Xb,lights_fragment_maps:Wb,lights_fragment_end:qb,lightprobes_pars_fragment:Yb,logdepthbuf_fragment:Zb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Qb,logdepthbuf_vertex:jb,map_fragment:$b,map_pars_fragment:Jb,map_particle_fragment:e3,map_particle_pars_fragment:t3,metalnessmap_fragment:n3,metalnessmap_pars_fragment:i3,morphinstance_vertex:a3,morphcolor_vertex:s3,morphnormal_vertex:r3,morphtarget_pars_vertex:o3,morphtarget_vertex:l3,normal_fragment_begin:c3,normal_fragment_maps:u3,normal_pars_fragment:f3,normal_pars_vertex:h3,normal_vertex:d3,normalmap_pars_fragment:p3,clearcoat_normal_fragment_begin:m3,clearcoat_normal_fragment_maps:g3,clearcoat_pars_fragment:v3,iridescence_pars_fragment:_3,opaque_fragment:x3,packing:y3,premultiplied_alpha_fragment:M3,project_vertex:S3,dithering_fragment:b3,dithering_pars_fragment:E3,roughnessmap_fragment:T3,roughnessmap_pars_fragment:A3,shadowmap_pars_fragment:w3,shadowmap_pars_vertex:R3,shadowmap_vertex:C3,shadowmask_pars_fragment:D3,skinbase_vertex:U3,skinning_pars_vertex:N3,skinning_vertex:L3,skinnormal_vertex:P3,specularmap_fragment:O3,specularmap_pars_fragment:I3,tonemapping_fragment:F3,tonemapping_pars_fragment:B3,transmission_fragment:z3,transmission_pars_fragment:H3,uv_pars_fragment:G3,uv_pars_vertex:V3,uv_vertex:k3,worldpos_vertex:X3,background_vert:W3,background_frag:q3,backgroundCube_vert:Y3,backgroundCube_frag:Z3,cube_vert:K3,cube_frag:Q3,depth_vert:j3,depth_frag:$3,distance_vert:J3,distance_frag:eE,equirect_vert:tE,equirect_frag:nE,linedashed_vert:iE,linedashed_frag:aE,meshbasic_vert:sE,meshbasic_frag:rE,meshlambert_vert:oE,meshlambert_frag:lE,meshmatcap_vert:cE,meshmatcap_frag:uE,meshnormal_vert:fE,meshnormal_frag:hE,meshphong_vert:dE,meshphong_frag:pE,meshphysical_vert:mE,meshphysical_frag:gE,meshtoon_vert:vE,meshtoon_frag:_E,points_vert:xE,points_frag:yE,shadow_vert:ME,shadow_frag:SE,sprite_vert:bE,sprite_frag:EE},Oe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ca={basic:{uniforms:ei([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:ei([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:ei([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:ei([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:ei([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new it(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:ei([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:ei([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:ei([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:ei([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:ei([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:ei([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:ei([Oe.common,Oe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:ei([Oe.lights,Oe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ca.physical={uniforms:ei([ca.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const du={r:0,b:0,g:0},TE=new jt,ux=new ct;ux.set(-1,0,0,0,1,0,0,0,1);function AE(s,e,n,a,o,c){const u=new it(0);let h=o===!0?0:1,m,p,g=null,_=0,v=null;function x(P){let L=P.isScene===!0?P.background:null;if(L&&L.isTexture){const A=P.backgroundBlurriness>0;L=e.get(L,A)}return L}function b(P){let L=!1;const A=x(P);A===null?S(u,h):A&&A.isColor&&(S(A,1),L=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(P,L){const A=x(L);A&&(A.isCubeTexture||A.mapping===Gu)?(p===void 0&&(p=new En(new vo(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:ho(ca.backgroundCube.uniforms),vertexShader:ca.backgroundCube.vertexShader,fragmentShader:ca.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(TE.makeRotationFromEuler(L.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(ux),p.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Ot,(g!==A||_!==A.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,g=A,_=A.version,v=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new En(new Ll(2,2),new In({name:"BackgroundMaterial",uniforms:ho(ca.background.uniforms),vertexShader:ca.background.vertexShader,fragmentShader:ca.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(A.colorSpace)!==Ot,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||_!==A.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,g=A,_=A.version,v=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function S(P,L){P.getRGB(du,ix(s)),n.buffers.color.setClear(du.r,du.g,du.b,L,c)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,L=1){u.set(P),h=L,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,S(u,h)},render:b,addToRenderList:R,dispose:M}}function wE(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(V,Y,ue,fe,Q){let B=!1;const H=_(V,fe,ue,Y);c!==H&&(c=H,p(c.object)),B=x(V,fe,ue,Q),B&&b(V,fe,ue,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,A(V,Y,ue,fe),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return s.createVertexArray()}function p(V){return s.bindVertexArray(V)}function g(V){return s.deleteVertexArray(V)}function _(V,Y,ue,fe){const Q=fe.wireframe===!0;let B=a[Y.id];B===void 0&&(B={},a[Y.id]=B);const H=V.isInstancedMesh===!0?V.id:0;let z=B[H];z===void 0&&(z={},B[H]=z);let te=z[ue.id];te===void 0&&(te={},z[ue.id]=te);let me=te[Q];return me===void 0&&(me=v(m()),te[Q]=me),me}function v(V){const Y=[],ue=[],fe=[];for(let Q=0;Q<n;Q++)Y[Q]=0,ue[Q]=0,fe[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ue,attributeDivisors:fe,object:V,attributes:{},index:null}}function x(V,Y,ue,fe){const Q=c.attributes,B=Y.attributes;let H=0;const z=ue.getAttributes();for(const te in z)if(z[te].location>=0){const D=Q[te];let W=B[te];if(W===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(W=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(W=V.instanceColor)),D===void 0||D.attribute!==W||W&&D.data!==W.data)return!0;H++}return c.attributesNum!==H||c.index!==fe}function b(V,Y,ue,fe){const Q={},B=Y.attributes;let H=0;const z=ue.getAttributes();for(const te in z)if(z[te].location>=0){let D=B[te];D===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(D=V.instanceColor));const W={};W.attribute=D,D&&D.data&&(W.data=D.data),Q[te]=W,H++}c.attributes=Q,c.attributesNum=H,c.index=fe}function R(){const V=c.newAttributes;for(let Y=0,ue=V.length;Y<ue;Y++)V[Y]=0}function S(V){M(V,0)}function M(V,Y){const ue=c.newAttributes,fe=c.enabledAttributes,Q=c.attributeDivisors;ue[V]=1,fe[V]===0&&(s.enableVertexAttribArray(V),fe[V]=1),Q[V]!==Y&&(s.vertexAttribDivisor(V,Y),Q[V]=Y)}function P(){const V=c.newAttributes,Y=c.enabledAttributes;for(let ue=0,fe=Y.length;ue<fe;ue++)Y[ue]!==V[ue]&&(s.disableVertexAttribArray(ue),Y[ue]=0)}function L(V,Y,ue,fe,Q,B,H){H===!0?s.vertexAttribIPointer(V,Y,ue,Q,B):s.vertexAttribPointer(V,Y,ue,fe,Q,B)}function A(V,Y,ue,fe){R();const Q=fe.attributes,B=ue.getAttributes(),H=Y.defaultAttributeValues;for(const z in B){const te=B[z];if(te.location>=0){let me=Q[z];if(me===void 0&&(z==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),z==="instanceColor"&&V.instanceColor&&(me=V.instanceColor)),me!==void 0){const D=me.normalized,W=me.itemSize,_e=e.get(me);if(_e===void 0)continue;const Ee=_e.buffer,Te=_e.type,ee=_e.bytesPerElement,Me=Te===s.INT||Te===s.UNSIGNED_INT||me.gpuType===Q0;if(me.isInterleavedBufferAttribute){const Se=me.data,Ie=Se.stride,nt=me.offset;if(Se.isInstancedInterleavedBuffer){for(let Ke=0;Ke<te.locationSize;Ke++)M(te.location+Ke,Se.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ke=0;Ke<te.locationSize;Ke++)S(te.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Ke=0;Ke<te.locationSize;Ke++)L(te.location+Ke,W/te.locationSize,Te,D,Ie*ee,(nt+W/te.locationSize*Ke)*ee,Me)}else{if(me.isInstancedBufferAttribute){for(let Se=0;Se<te.locationSize;Se++)M(te.location+Se,me.meshPerAttribute);V.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Se=0;Se<te.locationSize;Se++)S(te.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Se=0;Se<te.locationSize;Se++)L(te.location+Se,W/te.locationSize,Te,D,W*ee,W/te.locationSize*Se*ee,Me)}}else if(H!==void 0){const D=H[z];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(te.location,D);break;case 3:s.vertexAttrib3fv(te.location,D);break;case 4:s.vertexAttrib4fv(te.location,D);break;default:s.vertexAttrib1fv(te.location,D)}}}}P()}function I(){U();for(const V in a){const Y=a[V];for(const ue in Y){const fe=Y[ue];for(const Q in fe){const B=fe[Q];for(const H in B)g(B[H].object),delete B[H];delete fe[Q]}}delete a[V]}}function N(V){if(a[V.id]===void 0)return;const Y=a[V.id];for(const ue in Y){const fe=Y[ue];for(const Q in fe){const B=fe[Q];for(const H in B)g(B[H].object),delete B[H];delete fe[Q]}}delete a[V.id]}function F(V){for(const Y in a){const ue=a[Y];for(const fe in ue){const Q=ue[fe];if(Q[V.id]===void 0)continue;const B=Q[V.id];for(const H in B)g(B[H].object),delete B[H];delete Q[V.id]}}}function T(V){for(const Y in a){const ue=a[Y],fe=V.isInstancedMesh===!0?V.id:0,Q=ue[fe];if(Q!==void 0){for(const B in Q){const H=Q[B];for(const z in H)g(H[z].object),delete H[z];delete Q[B]}delete ue[fe],Object.keys(ue).length===0&&delete a[Y]}}}function U(){X(),u=!0,c!==o&&(c=o,p(c.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:U,resetDefaultState:X,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:S,disableUnusedAttributes:P}}function RE(s,e,n){let a;function o(m){a=m}function c(m,p){s.drawArrays(a,m,p),n.update(p,a,1)}function u(m,p,g){g!==0&&(s.drawArraysInstanced(a,m,p,g),n.update(p,a,g))}function h(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,g);let v=0;for(let x=0;x<g;x++)v+=p[x];n.update(v,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function CE(s,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==$i&&a.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const T=F===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==wi&&a.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ji&&!T)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(st("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:A,maxSamples:I,samples:N}}function DE(s){const e=this;let n=null,a=0,o=!1,c=!1;const u=new za,h=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,M=s.get(_);if(!o||b===null||b.length===0||c&&!S)c?g(null):p();else{const P=c?0:a,L=P*4;let A=M.clippingState||null;m.value=A,A=g(b,v,L,x);for(let I=0;I!==L;++I)A[I]=n[I];M.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,x,b){const R=_!==null?_.length:0;let S=null;if(R!==0){if(S=m.value,b!==!0||S===null){const M=x+R*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<M)&&(S=new Float32Array(M));for(let L=0,A=x;L!==R;++L,A+=4)u.copy(_[L]).applyMatrix4(P,h),u.normal.toArray(S,A),S[A+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const Ts=4,Y_=[.125,.215,.35,.446,.526,.582],er=20,UE=256,vl=new Vu,Z_=new it;let Ud=null,Nd=0,Ld=0,Pd=!1;const NE=new $;class L0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=NE}=c;Ud=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ud,Nd,Ld),this._renderer.xr.enabled=Pd,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ir||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ud=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:On,minFilter:On,generateMipmaps:!1,type:ni,format:$i,colorSpace:Nu,depthBuffer:!1},o=K_(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LE(c)),this._blurMaterial=OE(c,e,n),this._ggxMaterial=PE(c,e,n)}return o}_compileMaterial(e){const n=new En(new da,e);this._renderer.compile(n,vl)}_sceneToCubeUV(e,n,a,o,c){const m=new Ai(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(Z_),_.toneMapping=fa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new vo,new cp({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let M=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,M=!0):(S.color.copy(Z_),M=!0);for(let L=0;L<6;L++){const A=L%3;A===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):A===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const I=this._cubeSize;eo(o,A*I,L>2?I:0,I,I),_.setRenderTarget(o),M&&_.render(R,m),_.render(e,m)}_.toneMapping=x,_.autoClear=v,e.background=P}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===ir||e.mapping===uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=j_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;eo(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,vl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,x=_*v,{_lodMax:b}=this,R=this._sizeLods[a],S=3*R*(a>b-Ts?a-b+Ts:0),M=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=b-n,eo(c,S,M,3*R,2*R),o.setRenderTarget(c),o.render(h,vl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-a,eo(e,S,M,3*R,2*R),o.setRenderTarget(e),o.render(h,vl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const v=p.uniforms,x=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*er-1),R=c/b,S=isFinite(c)?1+Math.floor(g*R):er;S>er&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${er}`);const M=[];let P=0;for(let F=0;F<er;++F){const T=F/R,U=Math.exp(-T*T/2);M.push(U),F===0?P+=U:F<S&&(P+=2*U)}for(let F=0;F<M.length;F++)M[F]=M[F]/P;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=b,v.mipInt.value=L-a;const A=this._sizeLods[o],I=3*A*(o>L-Ts?o-L+Ts:0),N=4*(this._cubeSize-A);eo(n,I,N,3*A,2*A),m.setRenderTarget(n),m.render(_,vl)}}function LE(s){const e=[],n=[],a=[];let o=s;const c=s-Ts+1+Y_.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>s-Ts?m=Y_[u-s+Ts-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,R=3,S=2,M=1,P=new Float32Array(R*b*x),L=new Float32Array(S*b*x),A=new Float32Array(M*b*x);for(let N=0;N<x;N++){const F=N%3*2/3-1,T=N>2?0:-1,U=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];P.set(U,R*b*N),L.set(v,S*b*N);const X=[N,N,N,N,N,N];A.set(X,M*b*N)}const I=new da;I.setAttribute("position",new Di(P,R)),I.setAttribute("uv",new Di(L,S)),I.setAttribute("faceIndex",new Di(A,M)),a.push(new En(I,null)),o>Ts&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function K_(s,e,n){const a=new Xn(s,e,n);return a.texture.mapping=Gu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function eo(s,e,n,a,o){s.viewport.set(e,n,a,o),s.scissor.set(e,n,a,o)}function PE(s,e,n){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function OE(s,e,n){const a=new Float32Array(er),o=new $(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Q_(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function j_(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

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
	`}class fx extends Xn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new tx(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vo(5,5,5),c=new In({name:"CubemapFromEquirect",uniforms:ho(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:Ji});c.uniforms.tEquirect.value=n;const u=new En(o,c),h=n.minFilter;return n.minFilter===tr&&(n.minFilter=On),new w2(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}function IE(s){let e=new WeakMap,n=new WeakMap,a=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===ad||x===sd)if(e.has(v)){const b=e.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const R=new fx(b.height);return R.fromEquirectangularTexture(s,v),e.set(v,R),v.addEventListener("dispose",p),h(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===ad||x===sd,R=x===ir||x===uo;if(b||R){let S=n.get(v);const M=S!==void 0?S.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return a===null&&(a=new L0(s)),S=b?a.fromEquirectangular(v,S):a.fromCubemap(v,S),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),S.texture;if(S!==void 0)return S.texture;{const P=v.image;return b&&P&&P.height>0||R&&P&&m(P)?(a===null&&(a=new L0(s)),S=b?a.fromEquirectangular(v):a.fromCubemap(v),S.texture.pmremVersion=v.pmremVersion,n.set(v,S),v.addEventListener("dispose",g),S.texture):null}}}return v}function h(v,x){return x===ad?v.mapping=ir:x===sd&&(v.mapping=uo),v}function m(v){let x=0;const b=6;for(let R=0;R<b;R++)v[R]!==void 0&&x++;return x===b}function p(v){const x=v.target;x.removeEventListener("dispose",p);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function _(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function FE(s){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=s.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&ro("WebGLRenderer: "+a+" extension not supported."),o}}}function BE(s,e,n,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(e.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)e.update(v[x],s.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,b=_.attributes.position;let R=0;if(b===void 0)return;if(x!==null){const P=x.array;R=x.version;for(let L=0,A=P.length;L<A;L+=3){const I=P[L+0],N=P[L+1],F=P[L+2];v.push(I,N,N,F,F,I)}}else{const P=b.array;R=b.version;for(let L=0,A=P.length/3-1;L<A;L+=3){const I=L+0,N=L+1,F=L+2;v.push(I,N,N,F,F,I)}}const S=new(b.count>=65535?J1:$1)(v,1);S.version=R;const M=c.get(_);M&&e.remove(M),c.set(_,S)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function zE(s,e,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function m(_,v){s.drawElements(a,v,c,_*u),n.update(v,a,1)}function p(_,v,x){x!==0&&(s.drawElementsInstanced(a,v,c,_*u,x),n.update(v,a,x))}function g(_,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,_,0,x);let R=0;for(let S=0;S<x;S++)R+=v[S];n.update(R,a,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function HE(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:ut("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function GE(s,e,n){const a=new WeakMap,o=new on;function c(u,h,m){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let X=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",X)};var x=X;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let A=0;b===!0&&(A=1),R===!0&&(A=2),S===!0&&(A=3);let I=h.attributes.position.count*A,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*N*4*_),T=new K1(F,I,N,_);T.type=ji,T.needsUpdate=!0;const U=A*4;for(let V=0;V<_;V++){const Y=M[V],ue=P[V],fe=L[V],Q=I*N*4*V;for(let B=0;B<Y.count;B++){const H=B*U;b===!0&&(o.fromBufferAttribute(Y,B),F[Q+H+0]=o.x,F[Q+H+1]=o.y,F[Q+H+2]=o.z,F[Q+H+3]=0),R===!0&&(o.fromBufferAttribute(ue,B),F[Q+H+4]=o.x,F[Q+H+5]=o.y,F[Q+H+6]=o.z,F[Q+H+7]=0),S===!0&&(o.fromBufferAttribute(fe,B),F[Q+H+8]=o.x,F[Q+H+9]=o.y,F[Q+H+10]=o.z,F[Q+H+11]=fe.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new Ze(I,N)},a.set(h,v),h.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const R=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function VE(s,e,n,a,o){let c=new WeakMap;function u(p){const g=o.render.frame,_=p.geometry,v=e.get(p,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const kE={[q0]:"LINEAR_TONE_MAPPING",[Y0]:"REINHARD_TONE_MAPPING",[Z0]:"CINEON_TONE_MAPPING",[zu]:"ACES_FILMIC_TONE_MAPPING",[co]:"AGX_TONE_MAPPING",[Hu]:"NEUTRAL_TONE_MAPPING",[K0]:"CUSTOM_TONE_MAPPING"};function XE(s,e,n,a,o,c){const u=new Xn(e,n,{type:s,depthBuffer:o,stencilBuffer:c,samples:a?4:0,depthTexture:o?new fo(e,n):void 0}),h=new Xn(e,n,{type:ni,depthBuffer:!1,stencilBuffer:!1}),m=new da;m.setAttribute("position",new ea([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ea([0,2,0,0,2,0],2));const p=new ax({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new En(m,p),_=new Vu(-1,1,1,-1,0,1);let v=null,x=null,b=!1,R,S=null,M=[],P=!1;this.setSize=function(L,A){u.setSize(L,A),h.setSize(L,A);for(let I=0;I<M.length;I++){const N=M[I];N.setSize&&N.setSize(L,A)}},this.setEffects=function(L){M=L,P=M.length>0&&M[0].isRenderPass===!0;const A=u.width,I=u.height;for(let N=0;N<M.length;N++){const F=M[N];F.setSize&&F.setSize(A,I)}},this.begin=function(L,A){if(b||L.toneMapping===fa&&M.length===0)return!1;if(S=A,A!==null){const I=A.width,N=A.height;(u.width!==I||u.height!==N)&&this.setSize(I,N)}return P===!1&&L.setRenderTarget(u),R=L.toneMapping,L.toneMapping=fa,!0},this.hasRenderPass=function(){return P},this.end=function(L,A){L.toneMapping=R,b=!0;let I=u,N=h;for(let F=0;F<M.length;F++){const T=M[F];if(T.enabled!==!1&&(T.render(L,N,I,A),T.needsSwap!==!1)){const U=I;I=N,N=U}}if(v!==L.outputColorSpace||x!==L.toneMapping){v=L.outputColorSpace,x=L.toneMapping,p.defines={},Tt.getTransfer(v)===Ot&&(p.defines.SRGB_TRANSFER="");const F=kE[x];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(S),L.render(g,_),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const hx=new Qn,P0=new fo(1,1),dx=new K1,px=new JS,mx=new tx,$_=[],J_=[],e1=new Float32Array(16),t1=new Float32Array(9),n1=new Float32Array(4);function _o(s,e,n){const a=s[0];if(a<=0||a>0)return s;const o=e*n;let c=$_[o];if(c===void 0&&(c=new Float32Array(o),$_[o]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,s[u].toArray(c,h)}return c}function Dn(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function Un(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function Xu(s,e){let n=J_[e];n===void 0&&(n=new Int32Array(e),J_[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function WE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function qE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;s.uniform2fv(this.addr,e),Un(n,e)}}function YE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dn(n,e))return;s.uniform3fv(this.addr,e),Un(n,e)}}function ZE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;s.uniform4fv(this.addr,e),Un(n,e)}}function KE(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Un(n,e)}else{if(Dn(n,a))return;n1.set(a),s.uniformMatrix2fv(this.addr,!1,n1),Un(n,a)}}function QE(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Un(n,e)}else{if(Dn(n,a))return;t1.set(a),s.uniformMatrix3fv(this.addr,!1,t1),Un(n,a)}}function jE(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Dn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Un(n,e)}else{if(Dn(n,a))return;e1.set(a),s.uniformMatrix4fv(this.addr,!1,e1),Un(n,a)}}function $E(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function JE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;s.uniform2iv(this.addr,e),Un(n,e)}}function eT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;s.uniform3iv(this.addr,e),Un(n,e)}}function tT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;s.uniform4iv(this.addr,e),Un(n,e)}}function nT(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function iT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dn(n,e))return;s.uniform2uiv(this.addr,e),Un(n,e)}}function aT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dn(n,e))return;s.uniform3uiv(this.addr,e),Un(n,e)}}function sT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dn(n,e))return;s.uniform4uiv(this.addr,e),Un(n,e)}}function rT(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(P0.compareFunction=n.isReversedDepthBuffer()?ap:ip,c=P0):c=hx,n.setTexture2D(e||c,o)}function oT(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||px,o)}function lT(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||mx,o)}function cT(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||dx,o)}function uT(s){switch(s){case 5126:return WE;case 35664:return qE;case 35665:return YE;case 35666:return ZE;case 35674:return KE;case 35675:return QE;case 35676:return jE;case 5124:case 35670:return $E;case 35667:case 35671:return JE;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return aT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function fT(s,e){s.uniform1fv(this.addr,e)}function hT(s,e){const n=_o(e,this.size,2);s.uniform2fv(this.addr,n)}function dT(s,e){const n=_o(e,this.size,3);s.uniform3fv(this.addr,n)}function pT(s,e){const n=_o(e,this.size,4);s.uniform4fv(this.addr,n)}function mT(s,e){const n=_o(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function gT(s,e){const n=_o(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function vT(s,e){const n=_o(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function _T(s,e){s.uniform1iv(this.addr,e)}function xT(s,e){s.uniform2iv(this.addr,e)}function yT(s,e){s.uniform3iv(this.addr,e)}function MT(s,e){s.uniform4iv(this.addr,e)}function ST(s,e){s.uniform1uiv(this.addr,e)}function bT(s,e){s.uniform2uiv(this.addr,e)}function ET(s,e){s.uniform3uiv(this.addr,e)}function TT(s,e){s.uniform4uiv(this.addr,e)}function AT(s,e,n){const a=this.cache,o=e.length,c=Xu(n,o);Dn(a,c)||(s.uniform1iv(this.addr,c),Un(a,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=P0:u=hx;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||u,c[h])}function wT(s,e,n){const a=this.cache,o=e.length,c=Xu(n,o);Dn(a,c)||(s.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||px,c[u])}function RT(s,e,n){const a=this.cache,o=e.length,c=Xu(n,o);Dn(a,c)||(s.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||mx,c[u])}function CT(s,e,n){const a=this.cache,o=e.length,c=Xu(n,o);Dn(a,c)||(s.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||dx,c[u])}function DT(s){switch(s){case 5126:return fT;case 35664:return hT;case 35665:return dT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return vT;case 5124:case 35670:return _T;case 35667:case 35671:return xT;case 35668:case 35672:return yT;case 35669:case 35673:return MT;case 5125:return ST;case 36294:return bT;case 36295:return ET;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return CT}}class UT{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=uT(n.type)}}class NT{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DT(n.type)}}class LT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function i1(s,e){s.seq.push(e),s.map[e.id]=e}function PT(s,e,n){const a=s.name,o=a.length;for(Od.lastIndex=0;;){const c=Od.exec(a),u=Od.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){i1(n,p===void 0?new UT(h,s,e):new NT(h,s,e));break}else{let _=n.map[h];_===void 0&&(_=new LT(h),i1(n,_)),n=_}}}class Au{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=e.getActiveUniform(n,u),m=e.getUniformLocation(n,h.name);PT(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function a1(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const OT=37297;let IT=0;function FT(s,e){const n=s.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const s1=new ct;function BT(s){Tt._getMatrix(s1,Tt.workingColorSpace,s);const e=`mat3( ${s1.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Lu:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function r1(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+FT(s.getShaderSource(e),h)}else return c}function zT(s,e){const n=BT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const HT={[q0]:"Linear",[Y0]:"Reinhard",[Z0]:"Cineon",[zu]:"ACESFilmic",[co]:"AgX",[Hu]:"Neutral",[K0]:"Custom"};function GT(s,e){const n=HT[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pu=new $;function VT(){Tt.getLuminanceCoefficients(pu);const s=pu.x.toFixed(4),e=pu.y.toFixed(4),n=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function XT(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function WT(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(e,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:h}}return n}function Sl(s){return s!==""}function o1(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l1(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qT=/^[ \t]*#include +<([\w\d./]+)>/gm;function O0(s){return s.replace(qT,ZT)}const YT=new Map;function ZT(s,e){let n=mt[e];if(n===void 0){const a=YT.get(e);if(a!==void 0)n=mt[a],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return O0(n)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c1(s){return s.replace(KT,QT)}function QT(s,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function u1(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jT={[Mu]:"SHADOWMAP_TYPE_PCF",[Ml]:"SHADOWMAP_TYPE_VSM"};function $T(s){return jT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JT={[ir]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[Gu]:"ENVMAP_TYPE_CUBE_UV"};function eA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":JT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const tA={[uo]:"ENVMAP_MODE_REFRACTION"};function nA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":tA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iA={[W0]:"ENVMAP_BLENDING_MULTIPLY",[gS]:"ENVMAP_BLENDING_MIX",[vS]:"ENVMAP_BLENDING_ADD"};function aA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":iA[s.combine]||"ENVMAP_BLENDING_NONE"}function sA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function rA(s,e,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=$T(n),p=eA(n),g=nA(n),_=aA(n),v=sA(n),x=kT(n),b=XT(c),R=o.createProgram();let S,M,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Sl).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Sl).join(`
`),M.length>0&&(M+=`
`)):(S=[u1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),M=[u1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fa?"#define TONE_MAPPING":"",n.toneMapping!==fa?mt.tonemapping_pars_fragment:"",n.toneMapping!==fa?GT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,zT("linearToOutputTexel",n.outputColorSpace),VT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sl).join(`
`)),u=O0(u),u=o1(u,n),u=l1(u,n),h=O0(h),h=o1(h,n),h=l1(h,n),u=c1(u),h=c1(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",n.glslVersion===g_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===g_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const L=P+S+u,A=P+M+h,I=a1(o,o.VERTEX_SHADER,L),N=a1(o,o.FRAGMENT_SHADER,A);o.attachShader(R,I),o.attachShader(R,N),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function F(V){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(R)||"",ue=o.getShaderInfoLog(I)||"",fe=o.getShaderInfoLog(N)||"",Q=Y.trim(),B=ue.trim(),H=fe.trim();let z=!0,te=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,I,N);else{const me=r1(o,I,"vertex"),D=r1(o,N,"fragment");ut("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+me+`
`+D)}else Q!==""?st("WebGLProgram: Program Info Log:",Q):(B===""||H==="")&&(te=!1);te&&(V.diagnostics={runnable:z,programLog:Q,vertexShader:{log:B,prefix:S},fragmentShader:{log:H,prefix:M}})}o.deleteShader(I),o.deleteShader(N),T=new Au(o,R),U=WT(o,R)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let X=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(R,OT)),X},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IT++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=N,this}let oA=0;class lA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new cA(e),n.set(e,a)),a}}class cA{constructor(e){this.id=oA++,this.code=e,this.usedTimes=0}}function uA(s){return s===ar||s===Cu||s===Du}function fA(s,e,n,a,o,c){const u=new op,h=new lA,m=new Set,p=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,U,X,V,Y,ue){const fe=V.fog,Q=Y.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=e.get(T.envMap||B,H),te=z&&z.mapping===Gu?z.image.height:null,me=x[T.type];T.precision!==null&&(v=a.getMaxPrecision(T.precision),v!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const D=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,W=D!==void 0?D.length:0;let _e=0;Q.morphAttributes.position!==void 0&&(_e=1),Q.morphAttributes.normal!==void 0&&(_e=2),Q.morphAttributes.color!==void 0&&(_e=3);let Ee,Te,ee,Me;if(me){const Ge=ca[me];Ee=Ge.vertexShader,Te=Ge.fragmentShader}else{Ee=T.vertexShader,Te=T.fragmentShader;const Ge=h.getVertexShaderStage(T),nn=h.getFragmentShaderStage(T);h.update(T,Ge,nn),ee=Ge.id,Me=nn.id}const Se=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),nt=Y.isInstancedMesh===!0,Ke=Y.isBatchedMesh===!0,Ut=!!T.map,ot=!!T.matcap,gt=!!z,At=!!T.aoMap,_t=!!T.lightMap,ln=!!T.bumpMap&&T.wireframe===!1,cn=!!T.normalMap,un=!!T.displacementMap,pn=!!T.emissiveMap,Qt=!!T.metalnessMap,fn=!!T.roughnessMap,K=T.anisotropy>0,kt=T.clearcoat>0,Nt=T.dispersion>0,O=T.iridescence>0,E=T.sheen>0,J=T.transmission>0,re=K&&!!T.anisotropyMap,de=kt&&!!T.clearcoatMap,Ae=kt&&!!T.clearcoatNormalMap,De=kt&&!!T.clearcoatRoughnessMap,he=O&&!!T.iridescenceMap,pe=O&&!!T.iridescenceThicknessMap,Re=E&&!!T.sheenColorMap,Be=E&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Ue=!!T.specularColorMap,$e=!!T.specularIntensityMap,Je=J&&!!T.transmissionMap,rt=J&&!!T.thicknessMap,q=!!T.gradientMap,we=!!T.alphaMap,ve=T.alphaTest>0,Ce=!!T.alphaHash,Fe=!!T.extensions;let be=fa;T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(be=s.toneMapping);const qe={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:Ee,fragmentShader:Te,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Ke,batchingColor:Ke&&Y._colorsTexture!==null,instancing:nt,instancingColor:nt&&Y.instanceColor!==null,instancingMorph:nt&&Y.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ut,matcap:ot,envMap:gt,envMapMode:gt&&z.mapping,envMapCubeUVHeight:te,aoMap:At,lightMap:_t,bumpMap:ln,normalMap:cn,displacementMap:un,emissiveMap:pn,normalMapObjectSpace:cn&&T.normalMapType===MS,normalMapTangentSpace:cn&&T.normalMapType===Uu,packedNormalMap:cn&&T.normalMapType===Uu&&uA(T.normalMap.format),metalnessMap:Qt,roughnessMap:fn,anisotropy:K,anisotropyMap:re,clearcoat:kt,clearcoatMap:de,clearcoatNormalMap:Ae,clearcoatRoughnessMap:De,dispersion:Nt,iridescence:O,iridescenceMap:he,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:Re,sheenRoughnessMap:Be,specularMap:Le,specularColorMap:Ue,specularIntensityMap:$e,transmission:J,transmissionMap:Je,thicknessMap:rt,gradientMap:q,opaque:T.transparent===!1&&T.blending===so&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:ve,alphaHash:Ce,combine:T.combine,mapUv:Ut&&b(T.map.channel),aoMapUv:At&&b(T.aoMap.channel),lightMapUv:_t&&b(T.lightMap.channel),bumpMapUv:ln&&b(T.bumpMap.channel),normalMapUv:cn&&b(T.normalMap.channel),displacementMapUv:un&&b(T.displacementMap.channel),emissiveMapUv:pn&&b(T.emissiveMap.channel),metalnessMapUv:Qt&&b(T.metalnessMap.channel),roughnessMapUv:fn&&b(T.roughnessMap.channel),anisotropyMapUv:re&&b(T.anisotropyMap.channel),clearcoatMapUv:de&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(T.sheenRoughnessMap.channel),specularMapUv:Le&&b(T.specularMap.channel),specularColorMapUv:Ue&&b(T.specularColorMap.channel),specularIntensityMapUv:$e&&b(T.specularIntensityMap.channel),transmissionMapUv:Je&&b(T.transmissionMap.channel),thicknessMapUv:rt&&b(T.thicknessMap.channel),alphaMapUv:we&&b(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(cn||K),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!Q.attributes.uv&&(Ut||we),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&cn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ie,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:_e,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:Ut&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===Ot,decodeVideoTextureEmissive:pn&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===Ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Zi,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||Ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function S(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)U.push(X),U.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(M(U,T),P(U,T),U.push(s.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function M(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function P(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function L(T){const U=x[T.type];let X;if(U){const V=ca[U];X=Ul.clone(V.uniforms)}else X=T.uniforms;return X}function A(T,U){let X=g.get(U);return X!==void 0?++X.usedTimes:(X=new rA(s,U,T,o),p.push(X),g.set(U,X)),X}function I(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){h.remove(T)}function F(){h.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:L,acquireProgram:A,releaseProgram:I,releaseShaderCache:N,programs:p,dispose:F}}function hA(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,m){s.get(u)[h]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function dA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function f1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function h1(){const s=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,R,S,M){let P=s[e];return P===void 0?(P={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:S,group:M},s[e]=P):(P.id=v.id,P.object=v,P.geometry=x,P.material=b,P.materialVariant=u(v),P.groupOrder=R,P.renderOrder=v.renderOrder,P.z=S,P.group=M),e++,P}function m(v,x,b,R,S,M){const P=h(v,x,b,R,S,M);b.transmission>0?a.push(P):b.transparent===!0?o.push(P):n.push(P)}function p(v,x,b,R,S,M){const P=h(v,x,b,R,S,M);b.transmission>0?a.unshift(P):b.transparent===!0?o.unshift(P):n.unshift(P)}function g(v,x,b){n.length>1&&n.sort(v||dA),a.length>1&&a.sort(x||f1),o.length>1&&o.sort(x||f1),b&&(n.reverse(),a.reverse(),o.reverse())}function _(){for(let v=e,x=s.length;v<x;v++){const b=s[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:m,unshift:p,finish:_,sort:g}}function pA(){let s=new WeakMap;function e(a,o){const c=s.get(a);let u;return c===void 0?(u=new h1,s.set(a,[u])):o>=c.length?(u=new h1,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function mA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new it};break;case"SpotLight":n={position:new $,direction:new $,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=n,n}}}function gA(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let vA=0;function _A(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xA(s){const e=new mA,n=gA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new $);const o=new $,c=new jt,u=new jt;function h(p){let g=0,_=0,v=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,b=0,R=0,S=0,M=0,P=0,L=0,A=0,I=0,N=0,F=0;p.sort(_A);for(let U=0,X=p.length;U<X;U++){const V=p[U],Y=V.color,ue=V.intensity,fe=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===ar?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=Y.r*ue,_+=Y.g*ue,v+=Y.b*ue;else if(V.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(V.sh.coefficients[B],ue);F++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,z=n.get(V);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,a.directionalShadow[x]=z,a.directionalShadowMap[x]=Q,a.directionalShadowMatrix[x]=V.shadow.matrix,P++}a.directional[x]=B,x++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(Y).multiplyScalar(ue),B.distance=fe,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,a.spot[R]=B;const H=V.shadow;if(V.map&&(a.spotLightMap[I]=V.map,I++,H.updateMatrices(V),V.castShadow&&N++),a.spotLightMatrix[R]=H.matrix,V.castShadow){const z=n.get(V);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,a.spotShadow[R]=z,a.spotShadowMap[R]=Q,A++}R++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(Y).multiplyScalar(ue),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=B,S++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const H=V.shadow,z=n.get(V);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,a.pointShadow[b]=z,a.pointShadowMap[b]=Q,a.pointShadowMatrix[b]=V.shadow.matrix,L++}a.point[b]=B,b++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(ue),B.groundColor.copy(V.groundColor).multiplyScalar(ue),a.hemi[M]=B,M++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Oe.LTC_FLOAT_1,a.rectAreaLTC2=Oe.LTC_FLOAT_2):(a.rectAreaLTC1=Oe.LTC_HALF_1,a.rectAreaLTC2=Oe.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const T=a.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==R||T.rectAreaLength!==S||T.hemiLength!==M||T.numDirectionalShadows!==P||T.numPointShadows!==L||T.numSpotShadows!==A||T.numSpotMaps!==I||T.numLightProbes!==F)&&(a.directional.length=x,a.spot.length=R,a.rectArea.length=S,a.point.length=b,a.hemi.length=M,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=A+I-N,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=F,T.directionalLength=x,T.pointLength=b,T.spotLength=R,T.rectAreaLength=S,T.hemiLength=M,T.numDirectionalShadows=P,T.numPointShadows=L,T.numSpotShadows=A,T.numSpotMaps=I,T.numLightProbes=F,a.version=vA++)}function m(p,g){let _=0,v=0,x=0,b=0,R=0;const S=g.matrixWorldInverse;for(let M=0,P=p.length;M<P;M++){const L=p[M];if(L.isDirectionalLight){const A=a.directional[_];A.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),_++}else if(L.isSpotLight){const A=a.spot[x];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const A=a.rectArea[b];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),u.identity(),c.copy(L.matrixWorld),c.premultiply(S),u.extractRotation(c),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),b++}else if(L.isPointLight){const A=a.point[v];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const A=a.hemi[R];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(S),R++}}}return{setup:h,setupView:m,state:a}}function d1(s){const e=new xA(s),n=[],a=[],o=[];function c(v){_.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function h(v){a.push(v)}function m(v){o.push(v)}function p(){e.setup(n)}function g(v){e.setupView(n,v)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function yA(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new d1(s),e.set(o,[h])):c>=u.length?(h=new d1(s),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const MA=`void main() {
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
}`,bA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],EA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],p1=new jt,_l=new $,Id=new $;function TA(s,e,n){let a=new up;const o=new Ze,c=new Ze,u=new on,h=new sx,m=new b2,p={},g=n.maxTextureSize,_={[As]:ti,[ti]:As,[Zi]:Zi},v=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:MA,fragmentShader:SA}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new da;b.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new En(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let M=this.type;this.render=function(N,F,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===jM&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mu);const U=s.getRenderTarget(),X=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(Ji),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ue=M!==this.type;ue&&F.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(Q=>Q.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,Q=N.length;fe<Q;fe++){const B=N[fe],H=B.shadow;if(H===void 0){st("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const z=H.getFrameExtents();o.multiply(z),c.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/z.x),o.x=c.x*z.x,H.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/z.y),o.y=c.y*z.y,H.mapSize.y=c.y));const te=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=te,H.map===null||ue===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ml){if(B.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Xn(o.x,o.y,{format:ar,type:ni,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new fo(o.x,o.y,ji),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=ka,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else B.isPointLight?(H.map=new fx(o.x),H.map.depthTexture=new v2(o.x,ha)):(H.map=new Xn(o.x,o.y),H.map.depthTexture=new fo(o.x,o.y,ha)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=ka,this.type===Mu?(H.map.depthTexture.compareFunction=te?ap:ip,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn);H.camera.updateProjectionMatrix()}const me=H.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<me;D++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,D),s.clear();else{D===0&&(s.setRenderTarget(H.map),s.clear());const W=H.getViewport(D);u.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),Y.viewport(u)}if(B.isPointLight){const W=H.camera,_e=H.matrix,Ee=B.distance||W.far;Ee!==W.far&&(W.far=Ee,W.updateProjectionMatrix()),_l.setFromMatrixPosition(B.matrixWorld),W.position.copy(_l),Id.copy(W.position),Id.add(bA[D]),W.up.copy(EA[D]),W.lookAt(Id),W.updateMatrixWorld(),_e.makeTranslation(-_l.x,-_l.y,-_l.z),p1.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),H._frustum.setFromProjectionMatrix(p1,W.coordinateSystem,W.reversedDepth)}else H.updateMatrices(B);a=H.getFrustum(),A(F,T,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===Ml&&P(H,T),H.needsUpdate=!1}M=this.type,S.needsUpdate=!1,s.setRenderTarget(U,X,V)};function P(N,F){const T=e.update(R);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Xn(o.x,o.y,{format:ar,type:ni})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(F,null,T,v,R,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(F,null,T,x,R,null)}function L(N,F,T,U){let X=null;const V=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)X=V;else if(X=T.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Y=X.uuid,ue=F.uuid;let fe=p[Y];fe===void 0&&(fe={},p[Y]=fe);let Q=fe[ue];Q===void 0&&(Q=X.clone(),fe[ue]=Q,F.addEventListener("dispose",I)),X=Q}if(X.visible=F.visible,X.wireframe=F.wireframe,U===Ml?X.side=F.shadowSide!==null?F.shadowSide:F.side:X.side=F.shadowSide!==null?F.shadowSide:_[F.side],X.alphaMap=F.alphaMap,X.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,X.map=F.map,X.clipShadows=F.clipShadows,X.clippingPlanes=F.clippingPlanes,X.clipIntersection=F.clipIntersection,X.displacementMap=F.displacementMap,X.displacementScale=F.displacementScale,X.displacementBias=F.displacementBias,X.wireframeLinewidth=F.wireframeLinewidth,X.linewidth=F.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Y=s.properties.get(X);Y.light=T}return X}function A(N,F,T,U,X){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&X===Ml)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const ue=e.update(N),fe=N.material;if(Array.isArray(fe)){const Q=ue.groups;for(let B=0,H=Q.length;B<H;B++){const z=Q[B],te=fe[z.materialIndex];if(te&&te.visible){const me=L(N,te,U,X);N.onBeforeShadow(s,N,F,T,ue,me,z),s.renderBufferDirect(T,null,ue,me,N,z),N.onAfterShadow(s,N,F,T,ue,me,z)}}}else if(fe.visible){const Q=L(N,fe,U,X);N.onBeforeShadow(s,N,F,T,ue,Q,null),s.renderBufferDirect(T,null,ue,Q,N,null),N.onAfterShadow(s,N,F,T,ue,Q,null)}}const Y=N.children;for(let ue=0,fe=Y.length;ue<fe;ue++)A(Y[ue],F,T,U,X)}function I(N){N.target.removeEventListener("dispose",I);for(const T in p){const U=p[T],X=N.target.uuid;X in U&&(U[X].dispose(),delete U[X])}}}function AA(s,e){function n(){let q=!1;const we=new on;let ve=null;const Ce=new on(0,0,0,0);return{setMask:function(Fe){ve!==Fe&&!q&&(s.colorMask(Fe,Fe,Fe,Fe),ve=Fe)},setLocked:function(Fe){q=Fe},setClear:function(Fe,be,qe,Ge,nn){nn===!0&&(Fe*=Ge,be*=Ge,qe*=Ge),we.set(Fe,be,qe,Ge),Ce.equals(we)===!1&&(s.clearColor(Fe,be,qe,Ge),Ce.copy(we))},reset:function(){q=!1,ve=null,Ce.set(-1,0,0,0)}}}function a(){let q=!1,we=!1,ve=null,Ce=null,Fe=null;return{setReversed:function(be){if(we!==be){const qe=e.get("EXT_clip_control");be?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),we=be;const Ge=Fe;Fe=null,this.setClear(Ge)}},getReversed:function(){return we},setTest:function(be){be?Se(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(be){ve!==be&&!q&&(s.depthMask(be),ve=be)},setFunc:function(be){if(we&&(be=US[be]),Ce!==be){switch(be){case Yd:s.depthFunc(s.NEVER);break;case Zd:s.depthFunc(s.ALWAYS);break;case Kd:s.depthFunc(s.LESS);break;case lo:s.depthFunc(s.LEQUAL);break;case Qd:s.depthFunc(s.EQUAL);break;case jd:s.depthFunc(s.GEQUAL);break;case $d:s.depthFunc(s.GREATER);break;case Jd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=be}},setLocked:function(be){q=be},setClear:function(be){Fe!==be&&(Fe=be,we&&(be=1-be),s.clearDepth(be))},reset:function(){q=!1,ve=null,Ce=null,Fe=null,we=!1}}}function o(){let q=!1,we=null,ve=null,Ce=null,Fe=null,be=null,qe=null,Ge=null,nn=null;return{setTest:function(Ft){q||(Ft?Se(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Ft){we!==Ft&&!q&&(s.stencilMask(Ft),we=Ft)},setFunc:function(Ft,di,pi){(ve!==Ft||Ce!==di||Fe!==pi)&&(s.stencilFunc(Ft,di,pi),ve=Ft,Ce=di,Fe=pi)},setOp:function(Ft,di,pi){(be!==Ft||qe!==di||Ge!==pi)&&(s.stencilOp(Ft,di,pi),be=Ft,qe=di,Ge=pi)},setLocked:function(Ft){q=Ft},setClear:function(Ft){nn!==Ft&&(s.clearStencil(Ft),nn=Ft)},reset:function(){q=!1,we=null,ve=null,Ce=null,Fe=null,be=null,qe=null,Ge=null,nn=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,p=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],R=null,S=!1,M=null,P=null,L=null,A=null,I=null,N=null,F=null,T=new it(0,0,0),U=0,X=!1,V=null,Y=null,ue=null,fe=null,Q=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(te)[1]),H=z>=1):te.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),H=z>=2);let me=null,D={};const W=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),Ee=new on().fromArray(W),Te=new on().fromArray(_e);function ee(q,we,ve,Ce){const Fe=new Uint8Array(4),be=s.createTexture();s.bindTexture(q,be),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<ve;qe++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(we+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return be}const Me={};Me[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Se(s.DEPTH_TEST),u.setFunc(lo),ln(!1),cn(u_),Se(s.CULL_FACE),At(Ji);function Se(q){g[q]!==!0&&(s.enable(q),g[q]=!0)}function Ie(q){g[q]!==!1&&(s.disable(q),g[q]=!1)}function nt(q,we){return v[q]!==we?(s.bindFramebuffer(q,we),v[q]=we,q===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=we),q===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Ke(q,we){let ve=b,Ce=!1;if(q){ve=x.get(we),ve===void 0&&(ve=[],x.set(we,ve));const Fe=q.textures;if(ve.length!==Fe.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let be=0,qe=Fe.length;be<qe;be++)ve[be]=s.COLOR_ATTACHMENT0+be;ve.length=Fe.length,Ce=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(ve)}function Ut(q){return R!==q?(s.useProgram(q),R=q,!0):!1}const ot={[Js]:s.FUNC_ADD,[JM]:s.FUNC_SUBTRACT,[eS]:s.FUNC_REVERSE_SUBTRACT};ot[tS]=s.MIN,ot[nS]=s.MAX;const gt={[iS]:s.ZERO,[aS]:s.ONE,[sS]:s.SRC_COLOR,[Wd]:s.SRC_ALPHA,[fS]:s.SRC_ALPHA_SATURATE,[cS]:s.DST_COLOR,[oS]:s.DST_ALPHA,[rS]:s.ONE_MINUS_SRC_COLOR,[qd]:s.ONE_MINUS_SRC_ALPHA,[uS]:s.ONE_MINUS_DST_COLOR,[lS]:s.ONE_MINUS_DST_ALPHA,[hS]:s.CONSTANT_COLOR,[dS]:s.ONE_MINUS_CONSTANT_COLOR,[pS]:s.CONSTANT_ALPHA,[mS]:s.ONE_MINUS_CONSTANT_ALPHA};function At(q,we,ve,Ce,Fe,be,qe,Ge,nn,Ft){if(q===Ji){S===!0&&(Ie(s.BLEND),S=!1);return}if(S===!1&&(Se(s.BLEND),S=!0),q!==$M){if(q!==M||Ft!==X){if((P!==Js||I!==Js)&&(s.blendEquation(s.FUNC_ADD),P=Js,I=Js),Ft)switch(q){case so:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xd:s.blendFunc(s.ONE,s.ONE);break;case f_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case h_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ut("WebGLState: Invalid blending: ",q);break}else switch(q){case so:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case f_:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case h_:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",q);break}L=null,A=null,N=null,F=null,T.set(0,0,0),U=0,M=q,X=Ft}return}Fe=Fe||we,be=be||ve,qe=qe||Ce,(we!==P||Fe!==I)&&(s.blendEquationSeparate(ot[we],ot[Fe]),P=we,I=Fe),(ve!==L||Ce!==A||be!==N||qe!==F)&&(s.blendFuncSeparate(gt[ve],gt[Ce],gt[be],gt[qe]),L=ve,A=Ce,N=be,F=qe),(Ge.equals(T)===!1||nn!==U)&&(s.blendColor(Ge.r,Ge.g,Ge.b,nn),T.copy(Ge),U=nn),M=q,X=!1}function _t(q,we){q.side===Zi?Ie(s.CULL_FACE):Se(s.CULL_FACE);let ve=q.side===ti;we&&(ve=!ve),ln(ve),q.blending===so&&q.transparent===!1?At(Ji):At(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ce=q.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),pn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function ln(q){V!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),V=q)}function cn(q){q!==KM?(Se(s.CULL_FACE),q!==Y&&(q===u_?s.cullFace(s.BACK):q===QM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),Y=q}function un(q){q!==ue&&(H&&s.lineWidth(q),ue=q)}function pn(q,we,ve){q?(Se(s.POLYGON_OFFSET_FILL),(fe!==we||Q!==ve)&&(fe=we,Q=ve,u.getReversed()&&(we=-we),s.polygonOffset(we,ve))):Ie(s.POLYGON_OFFSET_FILL)}function Qt(q){q?Se(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function fn(q){q===void 0&&(q=s.TEXTURE0+B-1),me!==q&&(s.activeTexture(q),me=q)}function K(q,we,ve){ve===void 0&&(me===null?ve=s.TEXTURE0+B-1:ve=me);let Ce=D[ve];Ce===void 0&&(Ce={type:void 0,texture:void 0},D[ve]=Ce),(Ce.type!==q||Ce.texture!==we)&&(me!==ve&&(s.activeTexture(ve),me=ve),s.bindTexture(q,we||Me[q]),Ce.type=q,Ce.texture=we)}function kt(){const q=D[me];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Nt(){try{s.compressedTexImage2D(...arguments)}catch(q){ut("WebGLState:",q)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(q){ut("WebGLState:",q)}}function E(){try{s.texSubImage2D(...arguments)}catch(q){ut("WebGLState:",q)}}function J(){try{s.texSubImage3D(...arguments)}catch(q){ut("WebGLState:",q)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(q){ut("WebGLState:",q)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(q){ut("WebGLState:",q)}}function Ae(){try{s.texStorage2D(...arguments)}catch(q){ut("WebGLState:",q)}}function De(){try{s.texStorage3D(...arguments)}catch(q){ut("WebGLState:",q)}}function he(){try{s.texImage2D(...arguments)}catch(q){ut("WebGLState:",q)}}function pe(){try{s.texImage3D(...arguments)}catch(q){ut("WebGLState:",q)}}function Re(q){return _[q]!==void 0?_[q]:s.getParameter(q)}function Be(q,we){_[q]!==we&&(s.pixelStorei(q,we),_[q]=we)}function Le(q){Ee.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Ee.copy(q))}function Ue(q){Te.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),Te.copy(q))}function $e(q,we){let ve=p.get(we);ve===void 0&&(ve=new WeakMap,p.set(we,ve));let Ce=ve.get(q);Ce===void 0&&(Ce=s.getUniformBlockIndex(we,q.name),ve.set(q,Ce))}function Je(q,we){const Ce=p.get(we).get(q);m.get(we)!==Ce&&(s.uniformBlockBinding(we,Ce,q.__bindingPointIndex),m.set(we,Ce))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},me=null,D={},v={},x=new WeakMap,b=[],R=null,S=!1,M=null,P=null,L=null,A=null,I=null,N=null,F=null,T=new it(0,0,0),U=0,X=!1,V=null,Y=null,ue=null,fe=null,Q=null,Ee.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Se,disable:Ie,bindFramebuffer:nt,drawBuffers:Ke,useProgram:Ut,setBlending:At,setMaterial:_t,setFlipSided:ln,setCullFace:cn,setLineWidth:un,setPolygonOffset:pn,setScissorTest:Qt,activeTexture:fn,bindTexture:K,unbindTexture:kt,compressedTexImage2D:Nt,compressedTexImage3D:O,texImage2D:he,texImage3D:pe,pixelStorei:Be,getParameter:Re,updateUBOMapping:$e,uniformBlockBinding:Je,texStorage2D:Ae,texStorage3D:De,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Le,viewport:Ue,reset:rt}}function wA(s,e,n,a,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ze,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(O,E){return b?new OffscreenCanvas(O,E):Pu("canvas")}function S(O,E,J){let re=1;const de=Nt(O);if((de.width>J||de.height>J)&&(re=J/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ae=Math.floor(re*de.width),De=Math.floor(re*de.height);v===void 0&&(v=R(Ae,De));const he=E?R(Ae,De):v;return he.width=Ae,he.height=De,he.getContext("2d").drawImage(O,0,0,Ae,De),st("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ae+"x"+De+")."),he}else return"data"in O&&st("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),O;return O}function M(O){return O.generateMipmaps}function P(O){s.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(O,E,J,re,de,Ae=!1){if(O!==null){if(s[O]!==void 0)return s[O];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let De;re&&(De=e.get("EXT_texture_norm16"),De||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=E;if(E===s.RED&&(J===s.FLOAT&&(he=s.R32F),J===s.HALF_FLOAT&&(he=s.R16F),J===s.UNSIGNED_BYTE&&(he=s.R8),J===s.UNSIGNED_SHORT&&De&&(he=De.R16_EXT),J===s.SHORT&&De&&(he=De.R16_SNORM_EXT)),E===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.R8UI),J===s.UNSIGNED_SHORT&&(he=s.R16UI),J===s.UNSIGNED_INT&&(he=s.R32UI),J===s.BYTE&&(he=s.R8I),J===s.SHORT&&(he=s.R16I),J===s.INT&&(he=s.R32I)),E===s.RG&&(J===s.FLOAT&&(he=s.RG32F),J===s.HALF_FLOAT&&(he=s.RG16F),J===s.UNSIGNED_BYTE&&(he=s.RG8),J===s.UNSIGNED_SHORT&&De&&(he=De.RG16_EXT),J===s.SHORT&&De&&(he=De.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RG8UI),J===s.UNSIGNED_SHORT&&(he=s.RG16UI),J===s.UNSIGNED_INT&&(he=s.RG32UI),J===s.BYTE&&(he=s.RG8I),J===s.SHORT&&(he=s.RG16I),J===s.INT&&(he=s.RG32I)),E===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RGB8UI),J===s.UNSIGNED_SHORT&&(he=s.RGB16UI),J===s.UNSIGNED_INT&&(he=s.RGB32UI),J===s.BYTE&&(he=s.RGB8I),J===s.SHORT&&(he=s.RGB16I),J===s.INT&&(he=s.RGB32I)),E===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),J===s.UNSIGNED_INT&&(he=s.RGBA32UI),J===s.BYTE&&(he=s.RGBA8I),J===s.SHORT&&(he=s.RGBA16I),J===s.INT&&(he=s.RGBA32I)),E===s.RGB&&(J===s.UNSIGNED_SHORT&&De&&(he=De.RGB16_EXT),J===s.SHORT&&De&&(he=De.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),E===s.RGBA){const pe=Ae?Lu:Tt.getTransfer(de);J===s.FLOAT&&(he=s.RGBA32F),J===s.HALF_FLOAT&&(he=s.RGBA16F),J===s.UNSIGNED_BYTE&&(he=pe===Ot?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&De&&(he=De.RGBA16_EXT),J===s.SHORT&&De&&(he=De.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function I(O,E){let J;return O?E===null||E===ha||E===Rl?J=s.DEPTH24_STENCIL8:E===ji?J=s.DEPTH32F_STENCIL8:E===wl&&(J=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ha||E===Rl?J=s.DEPTH_COMPONENT24:E===ji?J=s.DEPTH_COMPONENT32F:E===wl&&(J=s.DEPTH_COMPONENT16),J}function N(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Cn&&O.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function F(O){const E=O.target;E.removeEventListener("dispose",F),U(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function T(O){const E=O.target;E.removeEventListener("dispose",T),V(E)}function U(O){const E=a.get(O);if(E.__webglInit===void 0)return;const J=O.source,re=x.get(J);if(re){const de=re[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&X(O),Object.keys(re).length===0&&x.delete(J)}a.remove(O)}function X(O){const E=a.get(O);s.deleteTexture(E.__webglTexture);const J=O.source,re=x.get(J);delete re[E.__cacheKey],u.memory.textures--}function V(O){const E=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let de=0;de<E.__webglFramebuffer[re].length;de++)s.deleteFramebuffer(E.__webglFramebuffer[re][de]);else s.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)s.deleteFramebuffer(E.__webglFramebuffer[re]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=O.textures;for(let re=0,de=J.length;re<de;re++){const Ae=a.get(J[re]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),u.memory.textures--),a.remove(J[re])}a.remove(O)}let Y=0;function ue(){Y=0}function fe(){return Y}function Q(O){Y=O}function B(){const O=Y;return O>=o.maxTextures&&st("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),Y+=1,O}function H(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function z(O,E){const J=a.get(O);if(O.isVideoTexture&&K(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&J.__version!==O.version){const re=O.image;if(re===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(J,O,E);return}}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+E)}function te(O,E){const J=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){Ie(J,O,E);return}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+E)}function me(O,E){const J=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){Ie(J,O,E);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+E)}function D(O,E){const J=a.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&J.__version!==O.version){nt(J,O,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+E)}const W={[Al]:s.REPEAT,[Ha]:s.CLAMP_TO_EDGE,[e0]:s.MIRRORED_REPEAT},_e={[Cn]:s.NEAREST,[_S]:s.NEAREST_MIPMAP_NEAREST,[Wc]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[rd]:s.LINEAR_MIPMAP_NEAREST,[tr]:s.LINEAR_MIPMAP_LINEAR},Ee={[SS]:s.NEVER,[wS]:s.ALWAYS,[bS]:s.LESS,[ip]:s.LEQUAL,[ES]:s.EQUAL,[ap]:s.GEQUAL,[TS]:s.GREATER,[AS]:s.NOTEQUAL};function Te(O,E){if(E.type===ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===rd||E.magFilter===Wc||E.magFilter===tr||E.minFilter===On||E.minFilter===rd||E.minFilter===Wc||E.minFilter===tr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,W[E.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,W[E.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,W[E.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,_e[E.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,_e[E.minFilter]),E.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,Ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==Wc&&E.minFilter!==tr||E.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function ee(O,E){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",F));const re=E.source;let de=x.get(re);de===void 0&&(de={},x.set(re,de));const Ae=H(E);if(Ae!==O.__cacheKey){de[Ae]===void 0&&(de[Ae]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),de[Ae].usedTimes++;const De=de[O.__cacheKey];De!==void 0&&(de[O.__cacheKey].usedTimes--,De.usedTimes===0&&X(E)),O.__cacheKey=Ae,O.__webglTexture=de[Ae].texture}return J}function Me(O,E,J){return Math.floor(Math.floor(O/J)/E)}function Se(O,E,J,re){const Ae=O.updateRanges;if(Ae.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,J,re,E.data);else{Ae.sort((Be,Le)=>Be.start-Le.start);let De=0;for(let Be=1;Be<Ae.length;Be++){const Le=Ae[De],Ue=Ae[Be],$e=Le.start+Le.count,Je=Me(Ue.start,E.width,4),rt=Me(Le.start,E.width,4);Ue.start<=$e+1&&Je===rt&&Me(Ue.start+Ue.count-1,E.width,4)===Je?Le.count=Math.max(Le.count,Ue.start+Ue.count-Le.start):(++De,Ae[De]=Ue)}Ae.length=De+1;const he=n.getParameter(s.UNPACK_ROW_LENGTH),pe=n.getParameter(s.UNPACK_SKIP_PIXELS),Re=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Be=0,Le=Ae.length;Be<Le;Be++){const Ue=Ae[Be],$e=Math.floor(Ue.start/4),Je=Math.ceil(Ue.count/4),rt=$e%E.width,q=Math.floor($e/E.width),we=Je,ve=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(s.UNPACK_SKIP_ROWS,q),n.texSubImage2D(s.TEXTURE_2D,0,rt,q,we,ve,J,re,E.data)}O.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,he),n.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Ie(O,E,J){let re=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=s.TEXTURE_3D);const de=ee(O,E),Ae=E.source;n.bindTexture(re,O.__webglTexture,s.TEXTURE0+J);const De=a.get(Ae);if(Ae.version!==De.__version||de===!0){if(n.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=Tt.getPrimaries(Tt.workingColorSpace),Ce=E.colorSpace===Ki?null:Tt.getPrimaries(E.colorSpace),Fe=E.colorSpace===Ki||ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=S(E.image,!1,o.maxTextureSize);pe=kt(E,pe);const Re=c.convert(E.format,E.colorSpace),Be=c.convert(E.type);let Le=A(E.internalFormat,Re,Be,E.normalized,E.colorSpace,E.isVideoTexture);Te(re,E);let Ue;const $e=E.mipmaps,Je=E.isVideoTexture!==!0,rt=De.__version===void 0||de===!0,q=Ae.dataReady,we=N(E,pe);if(E.isDepthTexture)Le=I(E.format===nr,E.type),rt&&(Je?n.texStorage2D(s.TEXTURE_2D,1,Le,pe.width,pe.height):n.texImage2D(s.TEXTURE_2D,0,Le,pe.width,pe.height,0,Re,Be,null));else if(E.isDataTexture)if($e.length>0){Je&&rt&&n.texStorage2D(s.TEXTURE_2D,we,Le,$e[0].width,$e[0].height);for(let ve=0,Ce=$e.length;ve<Ce;ve++)Ue=$e[ve],Je?q&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Re,Be,Ue.data):n.texImage2D(s.TEXTURE_2D,ve,Le,Ue.width,Ue.height,0,Re,Be,Ue.data);E.generateMipmaps=!1}else Je?(rt&&n.texStorage2D(s.TEXTURE_2D,we,Le,pe.width,pe.height),q&&Se(E,pe,Re,Be)):n.texImage2D(s.TEXTURE_2D,0,Le,pe.width,pe.height,0,Re,Be,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,Le,$e[0].width,$e[0].height,pe.depth);for(let ve=0,Ce=$e.length;ve<Ce;ve++)if(Ue=$e[ve],E.format!==$i)if(Re!==null)if(Je){if(q)if(E.layerUpdates.size>0){const Fe=q_(Ue.width,Ue.height,E.format,E.type);for(const be of E.layerUpdates){const qe=Ue.data.subarray(be*Fe/Ue.data.BYTES_PER_ELEMENT,(be+1)*Fe/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,be,Ue.width,Ue.height,1,Re,qe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,pe.depth,Re,Ue.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Le,Ue.width,Ue.height,pe.depth,0,Ue.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,pe.depth,Re,Be,Ue.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ve,Le,Ue.width,Ue.height,pe.depth,0,Re,Be,Ue.data)}else{Je&&rt&&n.texStorage2D(s.TEXTURE_2D,we,Le,$e[0].width,$e[0].height);for(let ve=0,Ce=$e.length;ve<Ce;ve++)Ue=$e[ve],E.format!==$i?Re!==null?Je?q&&n.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Re,Ue.data):n.compressedTexImage2D(s.TEXTURE_2D,ve,Le,Ue.width,Ue.height,0,Ue.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?q&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,Re,Be,Ue.data):n.texImage2D(s.TEXTURE_2D,ve,Le,Ue.width,Ue.height,0,Re,Be,Ue.data)}else if(E.isDataArrayTexture)if(Je){if(rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,Le,pe.width,pe.height,pe.depth),q)if(E.layerUpdates.size>0){const ve=q_(pe.width,pe.height,E.format,E.type);for(const Ce of E.layerUpdates){const Fe=pe.data.subarray(Ce*ve/pe.data.BYTES_PER_ELEMENT,(Ce+1)*ve/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,pe.width,pe.height,1,Re,Be,Fe)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Re,Be,pe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,pe.width,pe.height,pe.depth,0,Re,Be,pe.data);else if(E.isData3DTexture)Je?(rt&&n.texStorage3D(s.TEXTURE_3D,we,Le,pe.width,pe.height,pe.depth),q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Re,Be,pe.data)):n.texImage3D(s.TEXTURE_3D,0,Le,pe.width,pe.height,pe.depth,0,Re,Be,pe.data);else if(E.isFramebufferTexture){if(rt)if(Je)n.texStorage2D(s.TEXTURE_2D,we,Le,pe.width,pe.height);else{let ve=pe.width,Ce=pe.height;for(let Fe=0;Fe<we;Fe++)n.texImage2D(s.TEXTURE_2D,Fe,Le,ve,Ce,0,Re,Be,null),ve>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),pe.parentNode!==ve){ve.appendChild(pe),_.add(E),ve.onpaint=Ce=>{const Fe=Ce.changedElements;for(const be of _)Fe.includes(be.image)&&(be.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,pe);else{const Fe=s.RGBA,be=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Fe,be,qe,pe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if($e.length>0){if(Je&&rt){const ve=Nt($e[0]);n.texStorage2D(s.TEXTURE_2D,we,Le,ve.width,ve.height)}for(let ve=0,Ce=$e.length;ve<Ce;ve++)Ue=$e[ve],Je?q&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,Re,Be,Ue):n.texImage2D(s.TEXTURE_2D,ve,Le,Re,Be,Ue);E.generateMipmaps=!1}else if(Je){if(rt){const ve=Nt(pe);n.texStorage2D(s.TEXTURE_2D,we,Le,ve.width,ve.height)}q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Be,pe)}else n.texImage2D(s.TEXTURE_2D,0,Le,Re,Be,pe);M(E)&&P(re),De.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function nt(O,E,J){if(E.image.length!==6)return;const re=ee(O,E),de=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+J);const Ae=a.get(de);if(de.version!==Ae.__version||re===!0){n.activeTexture(s.TEXTURE0+J);const De=Tt.getPrimaries(Tt.workingColorSpace),he=E.colorSpace===Ki?null:Tt.getPrimaries(E.colorSpace),pe=E.colorSpace===Ki||De===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let be=0;be<6;be++)!Re&&!Be?Le[be]=S(E.image[be],!0,o.maxCubemapSize):Le[be]=Be?E.image[be].image:E.image[be],Le[be]=kt(E,Le[be]);const Ue=Le[0],$e=c.convert(E.format,E.colorSpace),Je=c.convert(E.type),rt=A(E.internalFormat,$e,Je,E.normalized,E.colorSpace),q=E.isVideoTexture!==!0,we=Ae.__version===void 0||re===!0,ve=de.dataReady;let Ce=N(E,Ue);Te(s.TEXTURE_CUBE_MAP,E);let Fe;if(Re){q&&we&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,rt,Ue.width,Ue.height);for(let be=0;be<6;be++){Fe=Le[be].mipmaps;for(let qe=0;qe<Fe.length;qe++){const Ge=Fe[qe];E.format!==$i?$e!==null?q?ve&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,0,0,Ge.width,Ge.height,$e,Ge.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,rt,Ge.width,Ge.height,0,Ge.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,0,0,Ge.width,Ge.height,$e,Je,Ge.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe,rt,Ge.width,Ge.height,0,$e,Je,Ge.data)}}}else{if(Fe=E.mipmaps,q&&we){Fe.length>0&&Ce++;const be=Nt(Le[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,rt,be.width,be.height)}for(let be=0;be<6;be++)if(Be){q?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Le[be].width,Le[be].height,$e,Je,Le[be].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,rt,Le[be].width,Le[be].height,0,$e,Je,Le[be].data);for(let qe=0;qe<Fe.length;qe++){const nn=Fe[qe].image[be].image;q?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,0,0,nn.width,nn.height,$e,Je,nn.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,rt,nn.width,nn.height,0,$e,Je,nn.data)}}else{q?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,$e,Je,Le[be]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,rt,$e,Je,Le[be]);for(let qe=0;qe<Fe.length;qe++){const Ge=Fe[qe];q?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,0,0,$e,Je,Ge.image[be]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,qe+1,rt,$e,Je,Ge.image[be])}}}M(E)&&P(s.TEXTURE_CUBE_MAP),Ae.__version=de.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Ke(O,E,J,re,de,Ae){const De=c.convert(J.format,J.colorSpace),he=c.convert(J.type),pe=A(J.internalFormat,De,he,J.normalized,J.colorSpace),Re=a.get(E),Be=a.get(J);if(Be.__renderTarget=E,!Re.__hasExternalTextures){const Le=Math.max(1,E.width>>Ae),Ue=Math.max(1,E.height>>Ae);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?n.texImage3D(de,Ae,pe,Le,Ue,E.depth,0,De,he,null):n.texImage2D(de,Ae,pe,Le,Ue,0,De,he,null)}n.bindFramebuffer(s.FRAMEBUFFER,O),fn(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,de,Be.__webglTexture,0,Qt(E)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,de,Be.__webglTexture,Ae),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(O,E,J){if(s.bindRenderbuffer(s.RENDERBUFFER,O),E.depthBuffer){const re=E.depthTexture,de=re&&re.isDepthTexture?re.type:null,Ae=I(E.stencilBuffer,de),De=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;fn(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt(E),Ae,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt(E),Ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,O)}else{const re=E.textures;for(let de=0;de<re.length;de++){const Ae=re[de],De=c.convert(Ae.format,Ae.colorSpace),he=c.convert(Ae.type),pe=A(Ae.internalFormat,De,he,Ae.normalized,Ae.colorSpace);fn(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt(E),pe,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt(E),pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(O,E,J){const re=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=a.get(E.depthTexture);if(de.__renderTarget=E,(!de.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re){if(de.__webglInit===void 0&&(de.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Te(s.TEXTURE_CUBE_MAP,E.depthTexture);const Re=c.convert(E.depthTexture.format),Be=c.convert(E.depthTexture.type);let Le;E.depthTexture.format===ka?Le=s.DEPTH_COMPONENT24:E.depthTexture.format===nr&&(Le=s.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Le,E.width,E.height,0,Re,Be,null)}}else z(E.depthTexture,0);const Ae=de.__webglTexture,De=Qt(E),he=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,pe=E.depthTexture.format===nr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===ka)fn(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,he,Ae,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,pe,he,Ae,0);else if(E.depthTexture.format===nr)fn(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,he,Ae,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,pe,he,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(O){const E=a.get(O),J=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const re=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=re}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let re=0;re<6;re++)ot(E.__webglFramebuffer[re],O,re);else{const re=O.texture.mipmaps;re&&re.length>0?ot(E.__webglFramebuffer[0],O,0):ot(E.__webglFramebuffer,O,0)}else if(J){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=s.createRenderbuffer(),Ut(E.__webglDepthbuffer[re],O,!1);else{const de=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ae)}}else{const re=O.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ut(E.__webglDepthbuffer,O,!1);else{const de=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ae)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function At(O,E,J){const re=a.get(O);E!==void 0&&Ke(re.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&gt(O)}function _t(O){const E=O.texture,J=a.get(O),re=a.get(E);O.addEventListener("dispose",T);const de=O.textures,Ae=O.isWebGLCubeRenderTarget===!0,De=de.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=E.version,u.memory.textures++),Ae){J.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[he]=[];for(let pe=0;pe<E.mipmaps.length;pe++)J.__webglFramebuffer[he][pe]=s.createFramebuffer()}else J.__webglFramebuffer[he]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)J.__webglFramebuffer[he]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(De)for(let he=0,pe=de.length;he<pe;he++){const Re=a.get(de[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),u.memory.textures++)}if(O.samples>0&&fn(O)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let he=0;he<de.length;he++){const pe=de[he];J.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[he]);const Re=c.convert(pe.format,pe.colorSpace),Be=c.convert(pe.type),Le=A(pe.internalFormat,Re,Be,pe.normalized,pe.colorSpace,O.isXRRenderTarget===!0),Ue=Qt(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Le,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,J.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(J.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){n.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Te(s.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ke(J.__webglFramebuffer[he][pe],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else Ke(J.__webglFramebuffer[he],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);M(E)&&P(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let he=0,pe=de.length;he<pe;he++){const Re=de[he],Be=a.get(Re);let Le=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Le=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Le,Be.__webglTexture),Te(Le,Re),Ke(J.__webglFramebuffer,O,Re,s.COLOR_ATTACHMENT0+he,Le,0),M(Re)&&P(Le)}n.unbindTexture()}else{let he=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(he=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(he,re.__webglTexture),Te(he,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ke(J.__webglFramebuffer[pe],O,E,s.COLOR_ATTACHMENT0,he,pe);else Ke(J.__webglFramebuffer,O,E,s.COLOR_ATTACHMENT0,he,0);M(E)&&P(he),n.unbindTexture()}O.depthBuffer&&gt(O)}function ln(O){const E=O.textures;for(let J=0,re=E.length;J<re;J++){const de=E[J];if(M(de)){const Ae=L(O),De=a.get(de).__webglTexture;n.bindTexture(Ae,De),P(Ae),n.unbindTexture()}}}const cn=[],un=[];function pn(O){if(O.samples>0){if(fn(O)===!1){const E=O.textures,J=O.width,re=O.height;let de=s.COLOR_BUFFER_BIT;const Ae=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=a.get(O),he=E.length>1;if(he)for(let Re=0;Re<E.length;Re++)n.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const pe=O.texture.mipmaps;pe&&pe.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=a.get(E[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,J,re,0,0,J,re,de,s.NEAREST),m===!0&&(cn.length=0,un.length=0,cn.push(s.COLOR_ATTACHMENT0+Re),O.depthBuffer&&O.resolveDepthBuffer===!1&&(cn.push(Ae),un.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,un)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,cn))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<E.length;Re++){n.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=a.get(E[Re]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Be,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Qt(O){return Math.min(o.maxSamples,O.samples)}function fn(O){const E=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function K(O){const E=u.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function kt(O,E){const J=O.colorSpace,re=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==Nu&&J!==Ki&&(Tt.getTransfer(J)===Ot?(re!==$i||de!==wi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",J)),E}function Nt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=ue,this.getTextureUnits=fe,this.setTextureUnits=Q,this.setTexture2D=z,this.setTexture2DArray=te,this.setTexture3D=me,this.setTextureCube=D,this.rebindTextures=At,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=fn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function RA(s,e){function n(a,o=Ki){let c;const u=Tt.getTransfer(o);if(a===wi)return s.UNSIGNED_BYTE;if(a===j0)return s.UNSIGNED_SHORT_4_4_4_4;if(a===$0)return s.UNSIGNED_SHORT_5_5_5_1;if(a===k1)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===X1)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===G1)return s.BYTE;if(a===V1)return s.SHORT;if(a===wl)return s.UNSIGNED_SHORT;if(a===Q0)return s.INT;if(a===ha)return s.UNSIGNED_INT;if(a===ji)return s.FLOAT;if(a===ni)return s.HALF_FLOAT;if(a===W1)return s.ALPHA;if(a===q1)return s.RGB;if(a===$i)return s.RGBA;if(a===ka)return s.DEPTH_COMPONENT;if(a===nr)return s.DEPTH_STENCIL;if(a===J0)return s.RED;if(a===ep)return s.RED_INTEGER;if(a===ar)return s.RG;if(a===tp)return s.RG_INTEGER;if(a===np)return s.RGBA_INTEGER;if(a===Su||a===bu||a===Eu||a===Tu)if(u===Ot)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Su)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Su)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===t0||a===n0||a===i0||a===a0)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===t0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===n0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===i0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===a0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===s0||a===r0||a===o0||a===l0||a===c0||a===Cu||a===u0)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===s0||a===r0)return u===Ot?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===o0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===l0)return c.COMPRESSED_R11_EAC;if(a===c0)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Cu)return c.COMPRESSED_RG11_EAC;if(a===u0)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===f0||a===h0||a===d0||a===p0||a===m0||a===g0||a===v0||a===_0||a===x0||a===y0||a===M0||a===S0||a===b0||a===E0)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===f0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===h0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===d0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===p0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===m0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===g0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===v0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===_0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===x0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===y0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===M0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===S0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===b0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===E0)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===T0||a===A0||a===w0)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===T0)return u===Ot?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===A0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===w0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===R0||a===C0||a===Du||a===D0)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===R0)return c.COMPRESSED_RED_RGTC1_EXT;if(a===C0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Du)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===D0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Rl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const CA=`
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

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new nx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new In({vertexShader:CA,fragmentShader:DA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new En(new Ll(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends Rs{constructor(e,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,g=null,_=null,v=null,x=null,b=null;const R=typeof XRWebGLBinding<"u",S=new UA,M={},P=n.getContextAttributes();let L=null,A=null;const I=[],N=[],F=new Ze;let T=null;const U=new Ai;U.viewport=new on;const X=new Ai;X.viewport=new on;const V=[U,X],Y=new R2;let ue=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Me=I[ee];return Me===void 0&&(Me=new hd,I[ee]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ee){let Me=I[ee];return Me===void 0&&(Me=new hd,I[ee]=Me),Me.getGripSpace()},this.getHand=function(ee){let Me=I[ee];return Me===void 0&&(Me=new hd,I[ee]=Me),Me.getHandSpace()};function Q(ee){const Me=N.indexOf(ee.inputSource);if(Me===-1)return;const Se=I[Me];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,p||u),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function B(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",H);for(let ee=0;ee<I.length;ee++){const Me=N[ee];Me!==null&&(N[ee]=null,I[ee].disconnect(Me))}ue=null,fe=null,S.reset();for(const ee in M)delete M[ee];e.setRenderTarget(L),x=null,v=null,_=null,o=null,A=null,Te.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,a.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,a.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",B),o.addEventListener("inputsourceschange",H),P.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ie=null,nt=null;P.depth&&(nt=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=P.stencil?nr:ka,Ie=P.stencil?Rl:ha);const Ke={colorFormat:n.RGBA8,depthFormat:nt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Ke),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new Xn(v.textureWidth,v.textureHeight,{format:$i,type:wi,depthTexture:new fo(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Se),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new Xn(x.framebufferWidth,x.framebufferHeight,{format:$i,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Te.setContext(o),Te.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(ee){for(let Me=0;Me<ee.removed.length;Me++){const Se=ee.removed[Me],Ie=N.indexOf(Se);Ie>=0&&(N[Ie]=null,I[Ie].disconnect(Se))}for(let Me=0;Me<ee.added.length;Me++){const Se=ee.added[Me];let Ie=N.indexOf(Se);if(Ie===-1){for(let Ke=0;Ke<I.length;Ke++)if(Ke>=N.length){N.push(Se),Ie=Ke;break}else if(N[Ke]===null){N[Ke]=Se,Ie=Ke;break}if(Ie===-1)break}const nt=I[Ie];nt&&nt.connect(Se)}}const z=new $,te=new $;function me(ee,Me,Se){z.setFromMatrixPosition(Me.matrixWorld),te.setFromMatrixPosition(Se.matrixWorld);const Ie=z.distanceTo(te),nt=Me.projectionMatrix.elements,Ke=Se.projectionMatrix.elements,Ut=nt[14]/(nt[10]-1),ot=nt[14]/(nt[10]+1),gt=(nt[9]+1)/nt[5],At=(nt[9]-1)/nt[5],_t=(nt[8]-1)/nt[0],ln=(Ke[8]+1)/Ke[0],cn=Ut*_t,un=Ut*ln,pn=Ie/(-_t+ln),Qt=pn*-_t;if(Me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Qt),ee.translateZ(pn),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),nt[10]===-1)ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const fn=Ut+pn,K=ot+pn,kt=cn-Qt,Nt=un+(Ie-Qt),O=gt*ot/K*fn,E=At*ot/K*fn;ee.projectionMatrix.makePerspective(kt,Nt,O,E,fn,K),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function D(ee,Me){Me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let Me=ee.near,Se=ee.far;S.texture!==null&&(S.depthNear>0&&(Me=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),Y.near=X.near=U.near=Me,Y.far=X.far=U.far=Se,(ue!==Y.near||fe!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ue=Y.near,fe=Y.far),Y.layers.mask=ee.layers.mask|6,U.layers.mask=Y.layers.mask&-5,X.layers.mask=Y.layers.mask&-3;const Ie=ee.parent,nt=Y.cameras;D(Y,Ie);for(let Ke=0;Ke<nt.length;Ke++)D(nt[Ke],Ie);nt.length===2?me(Y,U,X):Y.projectionMatrix.copy(U.projectionMatrix),W(ee,Y,Ie)};function W(ee,Me,Se){Se===null?ee.matrix.copy(Me.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Dl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(ee){m=ee,v!==null&&(v.fixedFoveation=ee),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(ee){return M[ee]};let _e=null;function Ee(ee,Me){if(g=Me.getViewerPose(p||u),b=Me,g!==null){const Se=g.views;x!==null&&(e.setRenderTargetFramebuffer(A,x.framebuffer),e.setRenderTarget(A));let Ie=!1;Se.length!==Y.cameras.length&&(Y.cameras.length=0,Ie=!0);for(let ot=0;ot<Se.length;ot++){const gt=Se[ot];let At=null;if(x!==null)At=x.getViewport(gt);else{const ln=_.getViewSubImage(v,gt);At=ln.viewport,ot===0&&(e.setRenderTargetTextures(A,ln.colorTexture,ln.depthStencilTexture),e.setRenderTarget(A))}let _t=V[ot];_t===void 0&&(_t=new Ai,_t.layers.enable(ot),_t.viewport=new on,V[ot]=_t),_t.matrix.fromArray(gt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(gt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(At.x,At.y,At.width,At.height),ot===0&&(Y.matrix.copy(_t.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ie===!0&&Y.cameras.push(_t)}const nt=o.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=a.getBinding();const ot=_.getDepthInformation(Se[0]);ot&&ot.isValid&&ot.texture&&S.init(ot,o.renderState)}if(nt&&nt.includes("camera-access")&&R){e.state.unbindTexture(),_=a.getBinding();for(let ot=0;ot<Se.length;ot++){const gt=Se[ot].camera;if(gt){let At=M[gt];At||(At=new nx,M[gt]=At);const _t=_.getCameraImage(gt);At.sourceTexture=_t}}}}for(let Se=0;Se<I.length;Se++){const Ie=N[Se],nt=I[Se];Ie!==null&&nt!==void 0&&nt.update(Ie,Me,p||u)}_e&&_e(ee,Me),Me.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Me}),b=null}const Te=new cx;Te.setAnimationLoop(Ee),this.setAnimationLoop=function(ee){_e=ee},this.dispose=function(){}}}const LA=new jt,gx=new ct;gx.set(-1,0,0,0,1,0,0,0,1);function PA(s,e){function n(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function a(S,M){M.color.getRGB(S.fogColor.value,ix(s)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function o(S,M,P,L,A){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(S,M):M.isMeshLambertMaterial?(c(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(S,M),_(S,M)):M.isMeshPhongMaterial?(c(S,M),g(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(S,M),v(S,M),M.isMeshPhysicalMaterial&&x(S,M,A)):M.isMeshMatcapMaterial?(c(S,M),b(S,M)):M.isMeshDepthMaterial?c(S,M):M.isMeshDistanceMaterial?(c(S,M),R(S,M)):M.isMeshNormalMaterial?c(S,M):M.isLineBasicMaterial?(u(S,M),M.isLineDashedMaterial&&h(S,M)):M.isPointsMaterial?m(S,M,P,L):M.isSpriteMaterial?p(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,n(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,n(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,n(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===ti&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,n(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===ti&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,n(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,n(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,n(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);const P=e.get(M),L=P.envMap,A=P.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(A)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(gx),S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,n(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,n(M.aoMap,S.aoMapTransform))}function u(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,n(M.map,S.mapTransform))}function h(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function m(S,M,P,L){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*P,S.scale.value=L*.5,M.map&&(S.map.value=M.map,n(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,n(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function p(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,n(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,n(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function g(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function _(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function v(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,n(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,n(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function x(S,M,P){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,n(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,n(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,n(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,n(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,n(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ti&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,n(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,n(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,n(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,n(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,n(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,n(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,n(M.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,M){M.matcap&&(S.matcap.value=M.matcap)}function R(S,M){const P=e.get(M).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function OA(s,e,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,I){const N=I.program;a.uniformBlockBinding(A,N)}function p(A,I){let N=o[A.id];N===void 0&&(S(A),N=g(A),o[A.id]=N,A.addEventListener("dispose",P));const F=I.program;a.updateUBOMapping(A,F);const T=e.render.frame;c[A.id]!==T&&(v(A),c[A.id]=T)}function g(A){const I=_();A.__bindingPointIndex=I;const N=s.createBuffer(),F=A.__size,T=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,F,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,N),N}function _(){for(let A=0;A<h;A++)if(u.indexOf(A)===-1)return u.push(A),A;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const I=o[A.id],N=A.uniforms,F=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let T=0,U=N.length;T<U;T++){const X=N[T];if(Array.isArray(X))for(let V=0,Y=X.length;V<Y;V++)x(X[V],T,V,F);else x(X,T,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(A,I,N,F){if(R(A,I,N,F)===!0){const T=A.__offset,U=A.value;if(Array.isArray(U)){let X=0;for(let V=0;V<U.length;V++){const Y=U[V],ue=M(Y);b(Y,A.__data,X),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(X+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(U,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,A.__data)}}function b(A,I,N){typeof A=="number"||typeof A=="boolean"?I[0]=A:A.isMatrix3?(I[0]=A.elements[0],I[1]=A.elements[1],I[2]=A.elements[2],I[3]=0,I[4]=A.elements[3],I[5]=A.elements[4],I[6]=A.elements[5],I[7]=0,I[8]=A.elements[6],I[9]=A.elements[7],I[10]=A.elements[8],I[11]=0):ArrayBuffer.isView(A)?I.set(new A.constructor(A.buffer,A.byteOffset,I.length)):A.toArray(I,N)}function R(A,I,N,F){const T=A.value,U=I+"_"+N;if(F[U]===void 0)return typeof T=="number"||typeof T=="boolean"?F[U]=T:ArrayBuffer.isView(T)?F[U]=T.slice():F[U]=T.clone(),!0;{const X=F[U];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return F[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function S(A){const I=A.uniforms;let N=0;const F=16;for(let U=0,X=I.length;U<X;U++){const V=Array.isArray(I[U])?I[U]:[I[U]];for(let Y=0,ue=V.length;Y<ue;Y++){const fe=V[Y],Q=Array.isArray(fe.value)?fe.value:[fe.value];for(let B=0,H=Q.length;B<H;B++){const z=Q[B],te=M(z),me=N%F,D=me%te.boundary,W=me+D;N+=D,W!==0&&F-W<te.storage&&(N+=F-W),fe.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=N,N+=te.storage}}}const T=N%F;return T>0&&(N+=F-T),A.__size=N,A.__cache={},this}function M(A){const I={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(I.boundary=4,I.storage=4):A.isVector2?(I.boundary=8,I.storage=8):A.isVector3||A.isColor?(I.boundary=16,I.storage=12):A.isVector4?(I.boundary=16,I.storage=16):A.isMatrix3?(I.boundary=48,I.storage=48):A.isMatrix4?(I.boundary=64,I.storage=64):A.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(I.boundary=16,I.storage=A.byteLength):st("WebGLRenderer: Unsupported uniform value type.",A),I}function P(A){const I=A.target;I.removeEventListener("dispose",P);const N=u.indexOf(I.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function L(){for(const A in o)s.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:m,update:p,dispose:L}}const IA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let la=null;function FA(){return la===null&&(la=new ex(IA,16,16,ar,ni),la.name="DFG_LUT",la.minFilter=On,la.magFilter=On,la.wrapS=Ha,la.wrapT=Ha,la.generateMipmaps=!1,la.needsUpdate=!0),la}class BA{constructor(e={}){const{canvas:n=CS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=wi}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const R=x,S=new Set([np,tp,ep]),M=new Set([wi,ha,wl,Rl,j0,$0]),P=new Uint32Array(4),L=new Int32Array(4),A=new $;let I=null,N=null;const F=[],T=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let V=!1,Y=null,ue=null,fe=null,Q=null;this._outputColorSpace=fi;let B=0,H=0,z=null,te=-1,me=null;const D=new on,W=new on;let _e=null;const Ee=new it(0);let Te=0,ee=n.width,Me=n.height,Se=1,Ie=null,nt=null;const Ke=new on(0,0,ee,Me),Ut=new on(0,0,ee,Me);let ot=!1;const gt=new up;let At=!1,_t=!1;const ln=new jt,cn=new $,un=new on,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function fn(){return z===null?Se:1}let K=a;function kt(w,Z){return n.getContext(w,Z)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${X0}`),n.addEventListener("webglcontextlost",nn,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",di,!1),K===null){const Z="webgl2";if(K=kt(Z,w),K===null)throw kt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw ut("WebGLRenderer: "+w.message),w}let Nt,O,E,J,re,de,Ae,De,he,pe,Re,Be,Le,Ue,$e,Je,rt,q,we,ve,Ce,Fe,be;function qe(){Nt=new FE(K),Nt.init(),Ce=new RA(K,Nt),O=new CE(K,Nt,e,Ce),E=new AA(K,Nt),O.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),ue=K.createFramebuffer(),fe=K.createFramebuffer(),Q=K.createFramebuffer(),J=new HE(K),re=new hA,de=new wA(K,Nt,E,re,O,Ce,J),Ae=new IE(X),De=new X2(K),Fe=new wE(K,De),he=new BE(K,De,J,Fe),pe=new VE(K,he,De,Fe,J),q=new GE(K,O,de),$e=new DE(re),Re=new fA(X,Ae,Nt,O,Fe,$e),Be=new PA(X,re),Le=new pA,Ue=new yA(Nt),rt=new AE(X,Ae,E,pe,b,m),Je=new TA(X,pe,O),be=new OA(K,J,O,E),we=new RE(K,Nt,J),ve=new zE(K,Nt,J),J.programs=Re.programs,X.capabilities=O,X.extensions=Nt,X.properties=re,X.renderLists=Le,X.shadowMap=Je,X.state=E,X.info=J}qe(),R!==wi&&(U=new XE(R,n.width,n.height,h,o,c));const Ge=new NA(X,K);this.xr=Ge,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const w=Nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(w){w!==void 0&&(Se=w,this.setSize(ee,Me,!1))},this.getSize=function(w){return w.set(ee,Me)},this.setSize=function(w,Z,oe=!0){if(Ge.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,Me=Z,n.width=Math.floor(w*Se),n.height=Math.floor(Z*Se),oe===!0&&(n.style.width=w+"px",n.style.height=Z+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(ee*Se,Me*Se).floor()},this.setDrawingBufferSize=function(w,Z,oe){ee=w,Me=Z,Se=oe,n.width=Math.floor(w*oe),n.height=Math.floor(Z*oe),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(R===wi){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Ke)},this.setViewport=function(w,Z,oe,ae){w.isVector4?Ke.set(w.x,w.y,w.z,w.w):Ke.set(w,Z,oe,ae),E.viewport(D.copy(Ke).multiplyScalar(Se).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,Z,oe,ae){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,Z,oe,ae),E.scissor(W.copy(Ut).multiplyScalar(Se).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(w){E.setScissorTest(ot=w)},this.setOpaqueSort=function(w){Ie=w},this.setTransparentSort=function(w){nt=w},this.getClearColor=function(w){return w.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,oe=!0){let ae=0;if(w){let se=!1;if(z!==null){const Pe=z.texture.format;se=S.has(Pe)}if(se){const Pe=z.texture.type,He=M.has(Pe),Ne=rt.getClearColor(),Xe=rt.getClearAlpha(),Ve=Ne.r,et=Ne.g,ft=Ne.b;He?(P[0]=Ve,P[1]=et,P[2]=ft,P[3]=Xe,K.clearBufferuiv(K.COLOR,0,P)):(L[0]=Ve,L[1]=et,L[2]=ft,L[3]=Xe,K.clearBufferiv(K.COLOR,0,L))}else ae|=K.COLOR_BUFFER_BIT}Z&&(ae|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&K.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Y=w},this.dispose=function(){n.removeEventListener("webglcontextlost",nn,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",di,!1),rt.dispose(),Le.dispose(),Ue.dispose(),re.dispose(),Ae.dispose(),pe.dispose(),Fe.dispose(),be.dispose(),Re.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",vn),Ge.removeEventListener("sessionend",Fn),ii.stop()};function nn(w){w.preventDefault(),__("WebGLRenderer: Context Lost."),V=!0}function Ft(){__("WebGLRenderer: Context Restored."),V=!1;const w=J.autoReset,Z=Je.enabled,oe=Je.autoUpdate,ae=Je.needsUpdate,se=Je.type;qe(),J.autoReset=w,Je.enabled=Z,Je.autoUpdate=oe,Je.needsUpdate=ae,Je.type=se}function di(w){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pi(w){const Z=w.target;Z.removeEventListener("dispose",pi),xo(Z)}function xo(w){yo(w),re.remove(w)}function yo(w){const Z=re.get(w).programs;Z!==void 0&&(Z.forEach(function(oe){Re.releaseProgram(oe)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,oe,ae,se,Pe){Z===null&&(Z=pn);const He=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ne=Ya(w,Z,oe,ae,se);E.setMaterial(ae,He);let Xe=oe.index,Ve=1;if(ae.wireframe===!0){if(Xe=he.getWireframeAttribute(oe),Xe===void 0)return;Ve=2}const et=oe.drawRange,ft=oe.attributes.position;let je=et.start*Ve,Rt=(et.start+et.count)*Ve;Pe!==null&&(je=Math.max(je,Pe.start*Ve),Rt=Math.min(Rt,(Pe.start+Pe.count)*Ve)),Xe!==null?(je=Math.max(je,0),Rt=Math.min(Rt,Xe.count)):ft!=null&&(je=Math.max(je,0),Rt=Math.min(Rt,ft.count));const an=Rt-je;if(an<0||an===1/0)return;Fe.setup(se,ae,Ne,oe,Xe);let Zt,Bt=we;if(Xe!==null&&(Zt=De.get(Xe),Bt=ve,Bt.setIndex(Zt)),se.isMesh)ae.wireframe===!0?(E.setLineWidth(ae.wireframeLinewidth*fn()),Bt.setMode(K.LINES)):Bt.setMode(K.TRIANGLES);else if(se.isLine){let zt=ae.linewidth;zt===void 0&&(zt=1),E.setLineWidth(zt*fn()),se.isLineSegments?Bt.setMode(K.LINES):se.isLineLoop?Bt.setMode(K.LINE_LOOP):Bt.setMode(K.LINE_STRIP)}else se.isPoints?Bt.setMode(K.POINTS):se.isSprite&&Bt.setMode(K.TRIANGLES);if(se.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const zt=se._multiDrawStarts,ze=se._multiDrawCounts,qn=se._multiDrawCount,xt=Xe?De.get(Xe).bytesPerElement:1,Tn=re.get(ae).currentProgram.getUniforms();for(let mi=0;mi<qn;mi++)Tn.setValue(K,"_gl_DrawID",mi),Bt.render(zt[mi]/xt,ze[mi])}else if(se.isInstancedMesh)Bt.renderInstances(je,an,se.count);else if(oe.isInstancedBufferGeometry){const zt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ze=Math.min(oe.instanceCount,zt);Bt.renderInstances(je,an,ze)}else Bt.render(je,an)};function Mo(w,Z,oe){w.transparent===!0&&w.side===Zi&&w.forceSinglePass===!1?(w.side=ti,w.needsUpdate=!0,qa(w,Z,oe),w.side=As,w.needsUpdate=!0,qa(w,Z,oe),w.side=Zi):qa(w,Z,oe)}this.compile=function(w,Z,oe=null){oe===null&&(oe=w),N=Ue.get(oe),N.init(Z),T.push(N),oe.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),w!==oe&&w.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),N.setupLights();const ae=new Set;return w.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Pe=se.material;if(Pe)if(Array.isArray(Pe))for(let He=0;He<Pe.length;He++){const Ne=Pe[He];Mo(Ne,oe,se),ae.add(Ne)}else Mo(Pe,oe,se),ae.add(Pe)}),N=T.pop(),ae},this.compileAsync=function(w,Z,oe=null){const ae=this.compile(w,Z,oe);return new Promise(se=>{function Pe(){if(ae.forEach(function(He){re.get(He).currentProgram.isReady()&&ae.delete(He)}),ae.size===0){se(w);return}setTimeout(Pe,10)}Nt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let lr=null;function ta(w){lr&&lr(w)}function vn(){ii.stop()}function Fn(){ii.start()}const ii=new cx;ii.setAnimationLoop(ta),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(w){lr=w,Ge.setAnimationLoop(w),w===null?ii.stop():ii.start()},Ge.addEventListener("sessionstart",vn),Ge.addEventListener("sessionend",Fn),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Y!==null&&Y.renderStart(w,Z);const oe=Ge.enabled===!0&&Ge.isPresenting===!0,ae=U!==null&&(z===null||oe)&&U.begin(X,z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(Z),Z=Ge.getCamera()),w.isScene===!0&&w.onBeforeRender(X,w,Z,z),N=Ue.get(w,T.length),N.init(Z),N.state.textureUnits=de.getTextureUnits(),T.push(N),ln.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),gt.setFromProjectionMatrix(ln,ua,Z.reversedDepth),_t=this.localClippingEnabled,At=$e.init(this.clippingPlanes,_t),I=Le.get(w,F.length),I.init(),F.push(I),Ge.enabled===!0&&Ge.isPresenting===!0){const He=X.xr.getDepthSensingMesh();He!==null&&Cs(He,Z,-1/0,X.sortObjects)}Cs(w,Z,0,X.sortObjects),I.finish(),X.sortObjects===!0&&I.sort(Ie,nt,Z.reversedDepth),Qt=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Qt&&rt.addToRenderList(I,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&$e.beginShadows();const se=N.state.shadowsArray;if(Je.render(se,w,Z),At===!0&&$e.endShadows(),(ae&&U.hasRenderPass())===!1){const He=I.opaque,Ne=I.transmissive;if(N.setupLights(),Z.isArrayCamera){const Xe=Z.cameras;if(Ne.length>0)for(let Ve=0,et=Xe.length;Ve<et;Ve++){const ft=Xe[Ve];Ol(He,Ne,w,ft)}Qt&&rt.render(w);for(let Ve=0,et=Xe.length;Ve<et;Ve++){const ft=Xe[Ve];Pl(I,w,ft,ft.viewport)}}else Ne.length>0&&Ol(He,Ne,w,Z),Qt&&rt.render(w),Pl(I,w,Z)}z!==null&&H===0&&(de.updateMultisampleRenderTarget(z),de.updateRenderTargetMipmap(z)),ae&&U.end(X),w.isScene===!0&&w.onAfterRender(X,w,Z),Fe.resetDefaultState(),te=-1,me=null,T.pop(),T.length>0?(N=T[T.length-1],de.setTextureUnits(N.state.textureUnits),At===!0&&$e.setGlobalState(X.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,Y!==null&&Y.renderEnd()};function Cs(w,Z,oe,ae){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLightProbeGrid)N.pushLightProbeGrid(w);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||gt.intersectsSprite(w)){ae&&un.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ln);const He=pe.update(w),Ne=w.material;Ne.visible&&I.push(w,He,Ne,oe,un.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||gt.intersectsObject(w))){const He=pe.update(w),Ne=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),un.copy(w.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),un.copy(He.boundingSphere.center)),un.applyMatrix4(w.matrixWorld).applyMatrix4(ln)),Array.isArray(Ne)){const Xe=He.groups;for(let Ve=0,et=Xe.length;Ve<et;Ve++){const ft=Xe[Ve],je=Ne[ft.materialIndex];je&&je.visible&&I.push(w,He,je,oe,un.z,ft)}}else Ne.visible&&I.push(w,He,Ne,oe,un.z,null)}}const Pe=w.children;for(let He=0,Ne=Pe.length;He<Ne;He++)Cs(Pe[He],Z,oe,ae)}function Pl(w,Z,oe,ae){const{opaque:se,transmissive:Pe,transparent:He}=w;N.setupLightsView(oe),At===!0&&$e.setGlobalState(X.clippingPlanes,oe),ae&&E.viewport(D.copy(ae)),se.length>0&&Ds(se,Z,oe),Pe.length>0&&Ds(Pe,Z,oe),He.length>0&&Ds(He,Z,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ol(w,Z,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ae.id]===void 0){const je=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ae.id]=new Xn(1,1,{generateMipmaps:!0,type:je?ni:wi,minFilter:tr,samples:Math.max(4,O.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Pe=N.state.transmissionRenderTarget[ae.id],He=ae.viewport||D;Pe.setSize(He.z*X.transmissionResolutionScale,He.w*X.transmissionResolutionScale);const Ne=X.getRenderTarget(),Xe=X.getActiveCubeFace(),Ve=X.getActiveMipmapLevel();X.setRenderTarget(Pe),X.getClearColor(Ee),Te=X.getClearAlpha(),Te<1&&X.setClearColor(16777215,.5),X.clear(),Qt&&rt.render(oe);const et=X.toneMapping;X.toneMapping=fa;const ft=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),N.setupLightsView(ae),At===!0&&$e.setGlobalState(X.clippingPlanes,ae),Ds(w,oe,ae),de.updateMultisampleRenderTarget(Pe),de.updateRenderTargetMipmap(Pe),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Rt=0,an=Z.length;Rt<an;Rt++){const Zt=Z[Rt],{object:Bt,geometry:zt,material:ze,group:qn}=Zt;if(ze.side===Zi&&Bt.layers.test(ae.layers)){const xt=ze.side;ze.side=ti,ze.needsUpdate=!0,Wa(Bt,oe,ae,zt,ze,qn),ze.side=xt,ze.needsUpdate=!0,je=!0}}je===!0&&(de.updateMultisampleRenderTarget(Pe),de.updateRenderTargetMipmap(Pe))}X.setRenderTarget(Ne,Xe,Ve),X.setClearColor(Ee,Te),ft!==void 0&&(ae.viewport=ft),X.toneMapping=et}function Ds(w,Z,oe){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Pe=w.length;se<Pe;se++){const He=w[se],{object:Ne,geometry:Xe,group:Ve}=He;let et=He.material;et.allowOverride===!0&&ae!==null&&(et=ae),Ne.layers.test(oe.layers)&&Wa(Ne,Z,oe,Xe,et,Ve)}}function Wa(w,Z,oe,ae,se,Pe){w.onBeforeRender(X,Z,oe,ae,se,Pe),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),se.onBeforeRender(X,Z,oe,ae,w,Pe),se.transparent===!0&&se.side===Zi&&se.forceSinglePass===!1?(se.side=ti,se.needsUpdate=!0,X.renderBufferDirect(oe,Z,ae,se,w,Pe),se.side=As,se.needsUpdate=!0,X.renderBufferDirect(oe,Z,ae,se,w,Pe),se.side=Zi):X.renderBufferDirect(oe,Z,ae,se,w,Pe),w.onAfterRender(X,Z,oe,ae,se,Pe)}function qa(w,Z,oe){Z.isScene!==!0&&(Z=pn);const ae=re.get(w),se=N.state.lights,Pe=N.state.shadowsArray,He=se.state.version,Ne=Re.getParameters(w,se.state,Pe,Z,oe,N.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Ne);let Ve=ae.programs;ae.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Z.environment:null,ae.fog=Z.fog;const et=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ae.envMap=Ae.get(w.envMap||ae.environment,et),ae.envMapRotation=ae.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",pi),Ve=new Map,ae.programs=Ve);let ft=Ve.get(Xe);if(ft!==void 0){if(ae.currentProgram===ft&&ae.lightsStateVersion===He)return ma(w,Ne),ft}else Ne.uniforms=Re.getUniforms(w),Y!==null&&w.isNodeMaterial&&Y.build(w,oe,Ne),w.onBeforeCompile(Ne,X),ft=Re.acquireProgram(Ne,Xe),Ve.set(Xe,ft),ae.uniforms=Ne.uniforms;const je=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=$e.uniform),ma(w,Ne),ae.needsLights=Il(w),ae.lightsStateVersion=He,ae.needsLights&&(je.ambientLightColor.value=se.state.ambient,je.lightProbe.value=se.state.probe,je.directionalLights.value=se.state.directional,je.directionalLightShadows.value=se.state.directionalShadow,je.spotLights.value=se.state.spot,je.spotLightShadows.value=se.state.spotShadow,je.rectAreaLights.value=se.state.rectArea,je.ltc_1.value=se.state.rectAreaLTC1,je.ltc_2.value=se.state.rectAreaLTC2,je.pointLights.value=se.state.point,je.pointLightShadows.value=se.state.pointShadow,je.hemisphereLights.value=se.state.hemi,je.directionalShadowMatrix.value=se.state.directionalShadowMatrix,je.spotLightMatrix.value=se.state.spotLightMatrix,je.spotLightMap.value=se.state.spotLightMap,je.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=N.state.lightProbeGridArray.length>0,ae.currentProgram=ft,ae.uniformsList=null,ft}function pa(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=Au.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function ma(w,Z){const oe=re.get(w);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.batchingColor=Z.batchingColor,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.instancingMorph=Z.instancingMorph,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function Us(w,Z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;A.setFromMatrixPosition(Z.matrixWorld);for(let oe=0,ae=w.length;oe<ae;oe++){const se=w[oe];if(se.texture!==null&&se.boundingBox.containsPoint(A))return se}return null}function Ya(w,Z,oe,ae,se){Z.isScene!==!0&&(Z=pn),de.resetTextureUnits();const Pe=Z.fog,He=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Z.environment:null,Ne=z===null?X.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Tt.workingColorSpace,Xe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ve=Ae.get(ae.envMap||He,Xe),et=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ft=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),je=!!oe.morphAttributes.position,Rt=!!oe.morphAttributes.normal,an=!!oe.morphAttributes.color;let Zt=fa;ae.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Zt=X.toneMapping);const Bt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=Bt!==void 0?Bt.length:0,ze=re.get(ae),qn=N.state.lights;if(At===!0&&(_t===!0||w!==me)){const Pt=w===me&&ae.id===te;$e.setState(ae,w,Pt)}let xt=!1;ae.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==qn.state.version||ze.outputColorSpace!==Ne||se.isBatchedMesh&&ze.batching===!1||!se.isBatchedMesh&&ze.batching===!0||se.isBatchedMesh&&ze.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&ze.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&ze.instancing===!1||!se.isInstancedMesh&&ze.instancing===!0||se.isSkinnedMesh&&ze.skinning===!1||!se.isSkinnedMesh&&ze.skinning===!0||se.isInstancedMesh&&ze.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&ze.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&ze.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&ze.instancingMorph===!1&&se.morphTexture!==null||ze.envMap!==Ve||ae.fog===!0&&ze.fog!==Pe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==$e.numPlanes||ze.numIntersection!==$e.numIntersection)||ze.vertexAlphas!==et||ze.vertexTangents!==ft||ze.morphTargets!==je||ze.morphNormals!==Rt||ze.morphColors!==an||ze.toneMapping!==Zt||ze.morphTargetsCount!==zt||!!ze.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,ze.__version=ae.version);let Tn=ze.currentProgram;xt===!0&&(Tn=qa(ae,Z,se),Y&&ae.isNodeMaterial&&Y.onUpdateProgram(ae,Tn,ze));let mi=!1,Hi=!1,gi=!1;const Ht=Tn.getUniforms(),sn=ze.uniforms;if(E.useProgram(Tn.program)&&(mi=!0,Hi=!0,gi=!0),ae.id!==te&&(te=ae.id,Hi=!0),ze.needsLights){const Pt=Us(N.state.lightProbeGridArray,se);ze.lightProbeGrid!==Pt&&(ze.lightProbeGrid=Pt,Hi=!0)}if(mi||me!==w){E.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ht.setValue(K,"projectionMatrix",w.projectionMatrix),Ht.setValue(K,"viewMatrix",w.matrixWorldInverse);const na=Ht.map.cameraPosition;na!==void 0&&na.setValue(K,cn.setFromMatrixPosition(w.matrixWorld)),O.logarithmicDepthBuffer&&Ht.setValue(K,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ht.setValue(K,"isOrthographic",w.isOrthographicCamera===!0),me!==w&&(me=w,Hi=!0,gi=!0)}if(ze.needsLights&&(qn.state.directionalShadowMap.length>0&&Ht.setValue(K,"directionalShadowMap",qn.state.directionalShadowMap,de),qn.state.spotShadowMap.length>0&&Ht.setValue(K,"spotShadowMap",qn.state.spotShadowMap,de),qn.state.pointShadowMap.length>0&&Ht.setValue(K,"pointShadowMap",qn.state.pointShadowMap,de)),se.isSkinnedMesh){Ht.setOptional(K,se,"bindMatrix"),Ht.setOptional(K,se,"bindMatrixInverse");const Pt=se.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Ht.setValue(K,"boneTexture",Pt.boneTexture,de))}se.isBatchedMesh&&(Ht.setOptional(K,se,"batchingTexture"),Ht.setValue(K,"batchingTexture",se._matricesTexture,de),Ht.setOptional(K,se,"batchingIdTexture"),Ht.setValue(K,"batchingIdTexture",se._indirectTexture,de),Ht.setOptional(K,se,"batchingColorTexture"),se._colorsTexture!==null&&Ht.setValue(K,"batchingColorTexture",se._colorsTexture,de));const Gi=oe.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&q.update(se,oe,Tn),(Hi||ze.receiveShadow!==se.receiveShadow)&&(ze.receiveShadow=se.receiveShadow,Ht.setValue(K,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Z.environment!==null&&(sn.envMapIntensity.value=Z.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=FA()),Hi){if(Ht.setValue(K,"toneMappingExposure",X.toneMappingExposure),ze.needsLights&&_n(sn,gi),Pe&&ae.fog===!0&&Be.refreshFogUniforms(sn,Pe),Be.refreshMaterialUniforms(sn,ae,Se,Me,N.state.transmissionRenderTarget[w.id]),ze.needsLights&&ze.lightProbeGrid){const Pt=ze.lightProbeGrid;sn.probesSH.value=Pt.texture,sn.probesMin.value.copy(Pt.boundingBox.min),sn.probesMax.value.copy(Pt.boundingBox.max),sn.probesResolution.value.copy(Pt.resolution)}Au.upload(K,pa(ze),sn,de)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Au.upload(K,pa(ze),sn,de),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ht.setValue(K,"center",se.center),Ht.setValue(K,"modelViewMatrix",se.modelViewMatrix),Ht.setValue(K,"normalMatrix",se.normalMatrix),Ht.setValue(K,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const Pt=ae.uniformsGroups;for(let na=0,Za=Pt.length;na<Za;na++){const Ns=Pt[na];be.update(Ns,Tn),be.bind(Ns,Tn)}}return Tn}function _n(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function Il(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,Z,oe){const ae=re.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),re.get(w.texture).__webglTexture=Z,re.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const oe=re.get(w);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(w,Z=0,oe=0){z=w,B=Z,H=oe;let ae=null,se=!1,Pe=!1;if(w){const Ne=re.get(w);if(Ne.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(K.FRAMEBUFFER,Ne.__webglFramebuffer),D.copy(w.viewport),W.copy(w.scissor),_e=w.scissorTest,E.viewport(D),E.scissor(W),E.setScissorTest(_e),te=-1;return}else if(Ne.__webglFramebuffer===void 0)de.setupRenderTarget(w);else if(Ne.__hasExternalTextures)de.rebindTextures(w,re.get(w.texture).__webglTexture,re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const et=w.depthTexture;if(Ne.__boundDepthTexture!==et){if(et!==null&&re.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(w)}}const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const Ve=re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[Z])?ae=Ve[Z][oe]:ae=Ve[Z],se=!0):w.samples>0&&de.useMultisampledRTT(w)===!1?ae=re.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?ae=Ve[oe]:ae=Ve,D.copy(w.viewport),W.copy(w.scissor),_e=w.scissorTest}else D.copy(Ke).multiplyScalar(Se).floor(),W.copy(Ut).multiplyScalar(Se).floor(),_e=ot;if(oe!==0&&(ae=ue),E.bindFramebuffer(K.FRAMEBUFFER,ae)&&E.drawBuffers(w,ae),E.viewport(D),E.scissor(W),E.setScissorTest(_e),se){const Ne=re.get(w.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ne.__webglTexture,oe)}else if(Pe){const Ne=Z;for(let Xe=0;Xe<w.textures.length;Xe++){const Ve=re.get(w.textures[Xe]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Xe,Ve.__webglTexture,oe,Ne)}}else if(w!==null&&oe!==0){const Ne=re.get(w.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ne.__webglTexture,oe)}te=-1},this.readRenderTargetPixels=function(w,Z,oe,ae,se,Pe,He,Ne=0){if(!(w&&w.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe){E.bindFramebuffer(K.FRAMEBUFFER,Xe);try{const Ve=w.textures[Ne],et=Ve.format,ft=Ve.type;if(w.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ne),!O.textureFormatReadable(et)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(ft)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-ae&&oe>=0&&oe<=w.height-se&&K.readPixels(Z,oe,ae,se,Ce.convert(et),Ce.convert(ft),Pe)}finally{const Ve=z!==null?re.get(z).__webglFramebuffer:null;E.bindFramebuffer(K.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(w,Z,oe,ae,se,Pe,He,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&(Xe=Xe[He]),Xe)if(Z>=0&&Z<=w.width-ae&&oe>=0&&oe<=w.height-se){E.bindFramebuffer(K.FRAMEBUFFER,Xe);const Ve=w.textures[Ne],et=Ve.format,ft=Ve.type;if(w.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Ne),!O.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,je),K.bufferData(K.PIXEL_PACK_BUFFER,Pe.byteLength,K.STREAM_READ),K.readPixels(Z,oe,ae,se,Ce.convert(et),Ce.convert(ft),0);const Rt=z!==null?re.get(z).__webglFramebuffer:null;E.bindFramebuffer(K.FRAMEBUFFER,Rt);const an=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await DS(K,an,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,je),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Pe),K.deleteBuffer(je),K.deleteSync(an),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,oe=0){const ae=Math.pow(2,-oe),se=Math.floor(w.image.width*ae),Pe=Math.floor(w.image.height*ae),He=Z!==null?Z.x:0,Ne=Z!==null?Z.y:0;de.setTexture2D(w,0),K.copyTexSubImage2D(K.TEXTURE_2D,oe,0,0,He,Ne,se,Pe),E.unbindTexture()},this.copyTextureToTexture=function(w,Z,oe=null,ae=null,se=0,Pe=0){let He,Ne,Xe,Ve,et,ft,je,Rt,an;const Zt=w.isCompressedTexture?w.mipmaps[Pe]:w.image;if(oe!==null)He=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,Ve=oe.min.x,et=oe.min.y,ft=oe.isBox3?oe.min.z:0;else{const sn=Math.pow(2,-se);He=Math.floor(Zt.width*sn),Ne=Math.floor(Zt.height*sn),w.isDataArrayTexture?Xe=Zt.depth:w.isData3DTexture?Xe=Math.floor(Zt.depth*sn):Xe=1,Ve=0,et=0,ft=0}ae!==null?(je=ae.x,Rt=ae.y,an=ae.z):(je=0,Rt=0,an=0);const Bt=Ce.convert(Z.format),zt=Ce.convert(Z.type);let ze;Z.isData3DTexture?(de.setTexture3D(Z,0),ze=K.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(de.setTexture2DArray(Z,0),ze=K.TEXTURE_2D_ARRAY):(de.setTexture2D(Z,0),ze=K.TEXTURE_2D),E.activeTexture(K.TEXTURE0),E.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(K.UNPACK_ALIGNMENT,Z.unpackAlignment);const qn=E.getParameter(K.UNPACK_ROW_LENGTH),xt=E.getParameter(K.UNPACK_IMAGE_HEIGHT),Tn=E.getParameter(K.UNPACK_SKIP_PIXELS),mi=E.getParameter(K.UNPACK_SKIP_ROWS),Hi=E.getParameter(K.UNPACK_SKIP_IMAGES);E.pixelStorei(K.UNPACK_ROW_LENGTH,Zt.width),E.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Zt.height),E.pixelStorei(K.UNPACK_SKIP_PIXELS,Ve),E.pixelStorei(K.UNPACK_SKIP_ROWS,et),E.pixelStorei(K.UNPACK_SKIP_IMAGES,ft);const gi=w.isDataArrayTexture||w.isData3DTexture,Ht=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const sn=re.get(w),Gi=re.get(Z),Pt=re.get(sn.__renderTarget),na=re.get(Gi.__renderTarget);E.bindFramebuffer(K.READ_FRAMEBUFFER,Pt.__webglFramebuffer),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let Za=0;Za<Xe;Za++)gi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,re.get(w).__webglTexture,se,ft+Za),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,re.get(Z).__webglTexture,Pe,an+Za)),K.blitFramebuffer(Ve,et,He,Ne,je,Rt,He,Ne,K.DEPTH_BUFFER_BIT,K.NEAREST);E.bindFramebuffer(K.READ_FRAMEBUFFER,null),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(se!==0||w.isRenderTargetTexture||re.has(w)){const sn=re.get(w),Gi=re.get(Z);E.bindFramebuffer(K.READ_FRAMEBUFFER,fe),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,Q);for(let Pt=0;Pt<Xe;Pt++)gi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,sn.__webglTexture,se,ft+Pt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,sn.__webglTexture,se),Ht?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Gi.__webglTexture,Pe,an+Pt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Gi.__webglTexture,Pe),se!==0?K.blitFramebuffer(Ve,et,He,Ne,je,Rt,He,Ne,K.COLOR_BUFFER_BIT,K.NEAREST):Ht?K.copyTexSubImage3D(ze,Pe,je,Rt,an+Pt,Ve,et,He,Ne):K.copyTexSubImage2D(ze,Pe,je,Rt,Ve,et,He,Ne);E.bindFramebuffer(K.READ_FRAMEBUFFER,null),E.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Ht?w.isDataTexture||w.isData3DTexture?K.texSubImage3D(ze,Pe,je,Rt,an,He,Ne,Xe,Bt,zt,Zt.data):Z.isCompressedArrayTexture?K.compressedTexSubImage3D(ze,Pe,je,Rt,an,He,Ne,Xe,Bt,Zt.data):K.texSubImage3D(ze,Pe,je,Rt,an,He,Ne,Xe,Bt,zt,Zt):w.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Pe,je,Rt,He,Ne,Bt,zt,Zt.data):w.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Pe,je,Rt,Zt.width,Zt.height,Bt,Zt.data):K.texSubImage2D(K.TEXTURE_2D,Pe,je,Rt,He,Ne,Bt,zt,Zt);E.pixelStorei(K.UNPACK_ROW_LENGTH,qn),E.pixelStorei(K.UNPACK_IMAGE_HEIGHT,xt),E.pixelStorei(K.UNPACK_SKIP_PIXELS,Tn),E.pixelStorei(K.UNPACK_SKIP_ROWS,mi),E.pixelStorei(K.UNPACK_SKIP_IMAGES,Hi),Pe===0&&Z.generateMipmaps&&K.generateMipmap(ze),E.unbindTexture()},this.initRenderTarget=function(w){re.get(w).__webglFramebuffer===void 0&&de.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?de.setTextureCube(w,0):w.isData3DTexture?de.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?de.setTexture2DArray(w,0):de.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){B=0,H=0,z=null,E.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const m1={type:"change"},dp={type:"start"},vx={type:"end"},mu=new lp,g1=new za,zA=Math.cos(70*Z1.DEG2RAD),wn=new $,ui=2*Math.PI,Yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fd=1e-6;class HA extends V2{constructor(e,n=null){super(e,n),this.state=Yt.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ga.ROTATE,MIDDLE:Ga.DOLLY,RIGHT:Ga.PAN},this.touches={ONE:ao.ROTATE,TWO:ao.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new ws,this._lastTargetPosition=new $,this._quat=new ws().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new X_,this._sphericalDelta=new X_,this._scale=1,this._panOffset=new $,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new $,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VA.bind(this),this._onPointerDown=GA.bind(this),this._onPointerUp=kA.bind(this),this._onContextMenu=QA.bind(this),this._onMouseWheel=qA.bind(this),this._onKeyDown=YA.bind(this),this._onTouchStart=ZA.bind(this),this._onTouchMove=KA.bind(this),this._onMouseDown=XA.bind(this),this._onMouseMove=WA.bind(this),this._interceptControlDown=jA.bind(this),this._interceptControlUp=$A.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(m1),this.update(),this.state=Yt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;wn.copy(n).sub(this.target),wn.applyQuaternion(this._quat),this._spherical.setFromVector3(wn),this.autoRotate&&this.state===Yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=ui:a>Math.PI&&(a-=ui),o<-Math.PI?o+=ui:o>Math.PI&&(o-=ui),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(wn.setFromSpherical(this._spherical),wn.applyQuaternion(this._quatInverse),n.copy(this.target).add(wn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=wn.length();u=this._clampDistance(h*this._scale);const m=h-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new $(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=wn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(mu.origin.copy(this.object.position),mu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mu.direction))<zA?this.object.lookAt(this.target):(g1.setFromNormalAndCoplanarPoint(this.object.up,this.target),mu.intersectPlane(g1,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Fd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fd||this._lastTargetPosition.distanceToSquared(this.target)>Fd?(this.dispatchEvent(m1),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){wn.setFromMatrixColumn(n,0),wn.multiplyScalar(-e),this._panOffset.add(wn)}_panUp(e,n){this.screenSpacePanning===!0?wn.setFromMatrixColumn(n,1):(wn.setFromMatrixColumn(n,0),wn.crossVectors(this.object.up,wn)),wn.multiplyScalar(e),this._panOffset.add(wn)}_pan(e,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;wn.copy(o).sub(this.target);let c=wn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=e-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/n.clientHeight),this._rotateUp(ui*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),o=.5*(e.pageX+a.x),c=.5*(e.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/n.clientHeight),this._rotateUp(ui*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+n.x)*.5,h=(e.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ze,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function GA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function VA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function kA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vx),this.state=Yt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function XA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ga.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Yt.DOLLY;break;case Ga.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Yt.ROTATE}break;case Ga.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Yt.PAN}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(dp)}function WA(s){switch(this.state){case Yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function qA(s){this.enabled===!1||this.enableZoom===!1||this.state!==Yt.NONE||(s.preventDefault(),this.dispatchEvent(dp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(vx))}function YA(s){this.enabled!==!1&&this._handleKeyDown(s)}function ZA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ao.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Yt.TOUCH_ROTATE;break;case ao.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Yt.TOUCH_PAN;break;default:this.state=Yt.NONE}break;case 2:switch(this.touches.TWO){case ao.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Yt.TOUCH_DOLLY_PAN;break;case ao.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Yt.TOUCH_DOLLY_ROTATE;break;default:this.state=Yt.NONE}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(dp)}function KA(s){switch(this._trackPointer(s),this.state){case Yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Yt.NONE}}function QA(s){this.enabled!==!1&&s.preventDefault()}function jA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $A(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class JA extends j1{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new vo;e.deleteAttribute("uv");const n=new U0({side:ti}),a=new U0,o=new T2(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const c=new En(e,n);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const u=new d2(e,a,6),h=new Wn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),u.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),u.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),u.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),u.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),u.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),u.setMatrixAt(5,h.matrix),this.add(u);const m=new En(e,to(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new En(e,to(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new En(e,to(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new En(e,to(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const v=new En(e,to(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const x=new En(e,to(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function to(s){return new S2({color:0,emissive:16777215,emissiveIntensity:s})}const wu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ew=new Vu(-1,1,1,-1,0,1);class tw extends da{constructor(){super(),this.setAttribute("position",new ea([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ea([0,2,0,0,2,0],2))}}const nw=new tw;class Wu{constructor(e){this._mesh=new En(nw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ew)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class _x extends or{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof In?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ul.clone(e.uniforms),this.material=new In({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Wu(this.material)}render(e,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class v1 extends or{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,a){const o=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class iw extends or{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class aw{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const a=e.getSize(new Ze);this._width=a.width,this._height=a.height,n=new Xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _x(wu),this.copyPass.material.blending=Ji,this.timer=new C2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),u.needsSwap){if(a){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}v1!==void 0&&(u instanceof v1?a=!0:u instanceof iw&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sw extends or{constructor(e,n,a=null,o=null,c=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new it}render(e,n,a){const o=e.autoClear;e.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=o}}const rw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new it(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class po extends or{constructor(e,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=e!==void 0?new Ze(e.x,e.y):new Ze(256,256),this.clearColor=new it(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Xn(c,u,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new Xn(c,u,{type:ni});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const v=new Xn(c,u,{type:ni});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),c=Math.round(c/2),u=Math.round(u/2)}const h=rw;this.highPassUniforms=Ul.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new In({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Ze(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ul.clone(wu.uniforms),this.blendMaterial=new In({uniforms:this.copyUniforms,vertexShader:wu.vertexShader,fragmentShader:wu.fragmentShader,premultipliedAlpha:!0,blending:Xd,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new it,this._oldClearAlpha=1,this._basic=new cp,this._fsQuad=new Wu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let a=Math.round(e/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new Ze(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(e,n,a,o,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=po.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=po.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const n=[],a=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new In({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ze(.5,.5)},direction:{value:new Ze(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new In({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}po.BlurDirectionX=new Ze(1,0);po.BlurDirectionY=new Ze(0,1);const gu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ow extends or{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ul.clone(gu.uniforms),this.material=new ax({name:gu.name,uniforms:this.uniforms,vertexShader:gu.vertexShader,fragmentShader:gu.fragmentShader}),this._fsQuad=new Wu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Tt.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===q0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Y0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Z0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===co?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===K0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ru={cols:33,rows:49,width:2.0015625000000004,height:3,camera:[.925,.654,5.166],target:[.525,-.046,-.034],data:new Float32Array([-.499,1.389,-.95,-.439,1.374,-.939,-.38,1.36,-.927,-.32,1.345,-.915,-.26,1.33,-.903,-.201,1.315,-.892,-.141,1.301,-.88,-.081,1.287,-.867,-.022,1.275,-.851,.037,1.264,-.834,.096,1.253,-.817,.156,1.242,-.801,.215,1.231,-.783,.274,1.221,-.765,.332,1.211,-.745,.391,1.202,-.726,.45,1.192,-.706,.508,1.183,-.686,.567,1.174,-.666,.625,1.165,-.646,.684,1.156,-.625,.742,1.147,-.604,.8,1.139,-.583,.858,1.13,-.56,.916,1.122,-.538,.973,1.115,-.514,1.03,1.107,-.49,1.087,1.1,-.465,1.143,1.093,-.438,1.199,1.087,-.41,1.253,1.081,-.38,1.307,1.075,-.348,1.36,1.069,-.315,-.518,1.336,-.922,-.458,1.322,-.91,-.398,1.308,-.898,-.339,1.294,-.885,-.279,1.279,-.873,-.219,1.265,-.861,-.16,1.251,-.847,-.1,1.239,-.831,-.041,1.229,-.814,.018,1.22,-.795,.077,1.21,-.777,.136,1.197,-.762,.195,1.183,-.748,.255,1.172,-.731,.314,1.161,-.713,.372,1.151,-.695,.431,1.141,-.676,.49,1.13,-.658,.549,1.121,-.639,.608,1.111,-.62,.666,1.101,-.6,.725,1.092,-.58,.783,1.083,-.56,.842,1.074,-.539,.9,1.065,-.518,.958,1.057,-.497,1.016,1.048,-.475,1.074,1.041,-.451,1.131,1.033,-.427,1.187,1.026,-.402,1.243,1.019,-.375,1.299,1.013,-.346,1.353,1.007,-.315,-.536,1.285,-.892,-.477,1.271,-.88,-.417,1.257,-.867,-.357,1.243,-.854,-.298,1.229,-.841,-.238,1.216,-.827,-.179,1.204,-.811,-.12,1.194,-.793,-.061,1.186,-.773,-.002,1.178,-.753,.057,1.167,-.736,.116,1.153,-.722,.176,1.138,-.709,.235,1.125,-.694,.294,1.113,-.679,.353,1.101,-.662,.413,1.09,-.644,.472,1.08,-.626,.53,1.069,-.608,.589,1.059,-.59,.648,1.049,-.572,.707,1.039,-.553,.766,1.029,-.534,.825,1.019,-.515,.883,1.01,-.495,.942,1,-.475,1,.991,-.454,1.058,.983,-.433,1.116,.974,-.411,1.174,.966,-.388,1.231,.959,-.364,1.288,.952,-.339,1.344,.945,-.311,-.555,1.234,-.861,-.495,1.22,-.848,-.436,1.207,-.834,-.376,1.194,-.82,-.317,1.181,-.806,-.257,1.169,-.79,-.198,1.16,-.771,-.14,1.152,-.751,-.081,1.146,-.73,-.022,1.136,-.712,.037,1.123,-.697,.097,1.108,-.683,.156,1.093,-.671,.215,1.079,-.657,.275,1.066,-.642,.334,1.054,-.625,.393,1.043,-.608,.452,1.032,-.591,.511,1.021,-.574,.57,1.01,-.556,.629,.999,-.539,.688,.988,-.521,.747,.978,-.503,.806,.967,-.485,.865,.957,-.467,.924,.947,-.448,.983,.937,-.429,1.041,.927,-.41,1.1,.918,-.39,1.158,.909,-.369,1.217,.9,-.348,1.274,.892,-.326,1.332,.885,-.302,-.574,1.184,-.828,-.514,1.171,-.814,-.455,1.159,-.799,-.395,1.146,-.784,-.336,1.134,-.768,-.277,1.125,-.75,-.218,1.118,-.729,-.16,1.113,-.707,-.101,1.104,-.688,-.042,1.092,-.672,.018,1.077,-.658,.077,1.062,-.646,.136,1.048,-.632,.196,1.035,-.617,.255,1.023,-.601,.314,1.011,-.585,.373,.999,-.568,.432,.987,-.552,.492,.976,-.535,.551,.964,-.518,.61,.953,-.502,.669,.941,-.485,.728,.93,-.468,.787,.919,-.451,.846,.908,-.433,.905,.897,-.416,.964,.886,-.398,1.023,.875,-.38,1.082,.865,-.362,1.141,.855,-.344,1.2,.845,-.324,1.258,.835,-.305,1.317,.826,-.284,-.593,1.136,-.793,-.533,1.124,-.778,-.474,1.112,-.762,-.414,1.1,-.746,-.355,1.091,-.728,-.297,1.084,-.707,-.239,1.08,-.684,-.18,1.072,-.664,-.121,1.06,-.648,-.061,1.046,-.634,-.002,1.031,-.621,.057,1.018,-.606,.117,1.006,-.591,.176,.994,-.574,.235,.986,-.555,.294,.973,-.539,.353,.959,-.524,.412,.947,-.509,.471,.934,-.493,.531,.922,-.477,.59,.91,-.461,.649,.898,-.444,.708,.886,-.428,.767,.874,-.412,.827,.862,-.395,.886,.85,-.379,.945,.839,-.362,1.004,.827,-.345,1.063,.816,-.328,1.122,.805,-.311,1.181,.794,-.294,1.24,.783,-.276,1.299,.772,-.258,-.612,1.089,-.757,-.552,1.078,-.74,-.493,1.067,-.724,-.434,1.056,-.706,-.375,1.049,-.686,-.317,1.045,-.662,-.259,1.04,-.641,-.2,1.029,-.624,-.14,1.014,-.61,-.081,1.001,-.596,-.022,.988,-.58,.038,.977,-.564,.097,.966,-.547,.156,.956,-.529,.215,.95,-.508,.274,.939,-.491,.333,.924,-.477,.392,.909,-.463,.451,.896,-.448,.511,.883,-.432,.57,.87,-.417,.629,.858,-.401,.688,.845,-.385,.747,.832,-.369,.807,.82,-.353,.866,.808,-.337,.925,.796,-.321,.984,.784,-.305,1.043,.772,-.289,1.102,.76,-.272,1.162,.748,-.256,1.221,.736,-.24,1.28,.724,-.223,-.631,1.043,-.718,-.572,1.033,-.701,-.513,1.023,-.684,-.454,1.014,-.665,-.395,1.008,-.643,-.338,1.005,-.619,-.279,.997,-.599,-.219,.984,-.585,-.16,.971,-.57,-.101,.959,-.554,-.042,.948,-.537,.018,.937,-.52,.077,.927,-.502,.136,.918,-.483,.195,.912,-.463,.254,.903,-.444,.313,.89,-.429,.372,.875,-.415,.431,.86,-.401,.49,.847,-.386,.55,.833,-.37,.609,.82,-.355,.668,.807,-.339,.727,.795,-.324,.786,.782,-.308,.846,.77,-.292,.905,.757,-.276,.964,.745,-.26,1.023,.733,-.244,1.082,.72,-.228,1.141,.708,-.212,1.201,.696,-.196,1.26,.683,-.18,-.65,.999,-.679,-.591,.99,-.66,-.532,.98,-.642,-.473,.972,-.623,-.415,.966,-.601,-.357,.963,-.577,-.298,.956,-.557,-.239,.943,-.542,-.18,.931,-.526,-.121,.921,-.508,-.062,.911,-.491,-.002,.9,-.474,.057,.889,-.457,.116,.88,-.438,.175,.873,-.418,.234,.866,-.398,.293,.855,-.381,.352,.841,-.366,.411,.826,-.353,.47,.811,-.338,.529,.798,-.323,.589,.785,-.307,.648,.773,-.291,.707,.761,-.275,.766,.748,-.259,.825,.736,-.243,.885,.724,-.227,.944,.712,-.211,1.003,.699,-.195,1.062,.687,-.179,1.121,.675,-.163,1.181,.663,-.147,1.24,.651,-.131,-.67,.957,-.637,-.611,.948,-.618,-.552,.939,-.599,-.493,.93,-.581,-.434,.923,-.56,-.376,.919,-.537,-.318,.914,-.515,-.259,.906,-.496,-.2,.896,-.478,-.141,.886,-.46,-.082,.877,-.442,-.023,.867,-.425,.037,.853,-.409,.096,.842,-.392,.155,.834,-.373,.214,.828,-.353,.273,.819,-.334,.332,.807,-.318,.391,.791,-.304,.45,.777,-.29,.509,.764,-.274,.569,.753,-.258,.628,.741,-.241,.687,.73,-.225,.746,.718,-.209,.805,.706,-.192,.865,.695,-.176,.924,.683,-.159,.983,.671,-.143,1.042,.659,-.127,1.101,.648,-.11,1.161,.636,-.094,1.22,.625,-.078,-.69,.917,-.593,-.631,.908,-.574,-.572,.899,-.556,-.513,.89,-.537,-.454,.881,-.518,-.395,.874,-.498,-.337,.868,-.477,-.278,.863,-.454,-.22,.855,-.435,-.161,.847,-.416,-.102,.838,-.397,-.043,.83,-.378,.016,.82,-.36,.076,.807,-.345,.135,.796,-.328,.194,.789,-.308,.253,.782,-.288,.312,.772,-.27,.371,.757,-.256,.43,.744,-.241,.489,.733,-.224,.549,.723,-.206,.608,.712,-.19,.667,.701,-.173,.726,.69,-.156,.785,.679,-.139,.845,.668,-.123,.904,.657,-.106,.963,.646,-.089,1.022,.635,-.073,1.082,.624,-.056,1.141,.612,-.04,1.2,.601,-.023,-.71,.88,-.548,-.651,.871,-.529,-.592,.862,-.51,-.533,.853,-.491,-.474,.843,-.473,-.415,.834,-.454,-.356,.826,-.435,-.298,.818,-.415,-.239,.811,-.395,-.18,.803,-.375,-.121,.796,-.355,-.062,.789,-.335,-.004,.784,-.314,.055,.773,-.297,.115,.761,-.28,.174,.752,-.262,.233,.744,-.242,.292,.736,-.223,.351,.724,-.207,.41,.713,-.19,.469,.702,-.174,.529,.691,-.157,.588,.68,-.14,.647,.669,-.123,.706,.659,-.106,.765,.648,-.089,.825,.637,-.073,.884,.625,-.056,.943,.614,-.039,1.002,.603,-.023,1.062,.592,-.006,1.121,.581,.01,1.18,.569,.027,-.731,.845,-.5,-.672,.836,-.481,-.613,.827,-.462,-.554,.818,-.444,-.495,.809,-.425,-.436,.799,-.406,-.377,.79,-.388,-.318,.781,-.369,-.259,.773,-.349,-.2,.766,-.329,-.141,.759,-.309,-.082,.752,-.289,-.024,.746,-.268,.035,.737,-.25,.094,.726,-.232,.153,.717,-.214,.212,.708,-.196,.272,.698,-.178,.331,.687,-.161,.39,.676,-.144,.449,.665,-.127,.509,.654,-.11,.568,.643,-.094,.627,.632,-.077,.686,.621,-.06,.746,.609,-.044,.805,.598,-.028,.864,.587,-.011,.923,.575,.005,.983,.563,.021,1.042,.552,.038,1.101,.54,.054,1.16,.528,.07,-.751,.812,-.451,-.692,.803,-.432,-.633,.795,-.413,-.574,.787,-.394,-.515,.778,-.375,-.456,.769,-.356,-.397,.76,-.337,-.339,.751,-.318,-.28,.742,-.299,-.221,.734,-.28,-.162,.726,-.26,-.103,.717,-.241,-.044,.708,-.222,.015,.698,-.205,.074,.688,-.187,.133,.678,-.17,.193,.667,-.152,.252,.656,-.135,.311,.645,-.118,.37,.634,-.102,.43,.623,-.085,.489,.611,-.069,.548,.6,-.053,.607,.588,-.037,.667,.576,-.021,.726,.564,-.005,.785,.552,.011,.845,.54,.026,.904,.528,.042,.963,.516,.057,1.023,.504,.073,1.082,.491,.088,1.141,.479,.104,-.772,.781,-.401,-.713,.772,-.382,-.654,.763,-.363,-.595,.754,-.345,-.536,.744,-.326,-.477,.735,-.308,-.418,.725,-.289,-.359,.716,-.271,-.3,.706,-.252,-.241,.697,-.234,-.182,.687,-.216,-.123,.676,-.198,-.064,.666,-.181,-.004,.655,-.164,.055,.644,-.147,.114,.633,-.13,.173,.622,-.114,.233,.61,-.098,.292,.598,-.082,.351,.587,-.066,.411,.575,-.051,.47,.562,-.035,.529,.55,-.02,.589,.538,-.005,.648,.525,.01,.708,.513,.025,.767,.5,.04,.827,.487,.055,.886,.475,.069,.945,.462,.084,1.005,.449,.098,1.064,.436,.112,1.124,.423,.127,-.792,.745,-.354,-.733,.735,-.336,-.674,.725,-.318,-.615,.715,-.3,-.556,.705,-.282,-.497,.694,-.264,-.438,.684,-.246,-.379,.674,-.229,-.32,.663,-.212,-.261,.652,-.195,-.201,.641,-.178,-.142,.63,-.161,-.083,.618,-.145,-.023,.606,-.129,.036,.595,-.114,.095,.583,-.098,.155,.57,-.083,.214,.558,-.068,.274,.546,-.053,.333,.533,-.039,.393,.521,-.024,.452,.508,-.01,.512,.495,.004,.572,.482,.018,.631,.469,.031,.691,.456,.045,.75,.443,.059,.81,.43,.072,.87,.417,.085,.929,.403,.099,.989,.39,.112,1.049,.377,.125,1.108,.364,.138,-.812,.703,-.312,-.753,.692,-.295,-.694,.681,-.278,-.635,.67,-.261,-.575,.659,-.244,-.516,.647,-.228,-.457,.636,-.211,-.398,.625,-.195,-.338,.613,-.179,-.279,.601,-.163,-.22,.589,-.148,-.16,.577,-.133,-.101,.565,-.118,-.041,.552,-.103,.019,.54,-.089,.078,.527,-.075,.138,.514,-.061,.197,.501,-.048,.257,.488,-.035,.317,.475,-.022,.377,.462,-.009,.436,.449,.004,.496,.436,.017,.556,.422,.029,.616,.409,.041,.676,.396,.054,.735,.382,.066,.795,.369,.078,.855,.356,.09,.915,.342,.102,.975,.329,.114,1.035,.316,.125,1.095,.303,.137,-.831,.654,-.278,-.772,.642,-.262,-.712,.63,-.246,-.653,.618,-.23,-.594,.606,-.215,-.534,.594,-.2,-.475,.582,-.185,-.415,.57,-.17,-.356,.558,-.155,-.296,.545,-.141,-.236,.532,-.127,-.177,.52,-.114,-.117,.507,-.101,-.057,.494,-.088,.003,.481,-.075,.063,.468,-.063,.123,.454,-.051,.182,.441,-.039,.242,.428,-.028,.302,.415,-.016,.362,.401,-.005,.422,.388,.006,.482,.375,.018,.542,.361,.029,.603,.348,.04,.663,.335,.051,.723,.321,.062,.783,.308,.073,.843,.295,.083,.903,.282,.094,.963,.268,.104,1.024,.255,.114,1.084,.242,.124,-.848,.599,-.253,-.789,.587,-.239,-.729,.574,-.224,-.67,.562,-.21,-.61,.549,-.196,-.55,.536,-.182,-.491,.524,-.169,-.431,.511,-.155,-.371,.498,-.143,-.311,.485,-.13,-.251,.472,-.118,-.191,.459,-.106,-.131,.446,-.095,-.071,.433,-.084,-.011,.42,-.073,.049,.406,-.063,.109,.393,-.053,.17,.38,-.042,.23,.367,-.032,.29,.354,-.022,.35,.34,-.012,.411,.327,-.003,.471,.314,.007,.531,.301,.017,.592,.288,.027,.652,.275,.037,.712,.261,.047,.773,.248,.056,.833,.236,.066,.894,.223,.075,.954,.21,.084,1.015,.197,.092,1.075,.185,.101,-.864,.54,-.239,-.804,.527,-.226,-.745,.514,-.213,-.685,.502,-.2,-.625,.489,-.188,-.565,.476,-.176,-.505,.463,-.164,-.445,.45,-.153,-.384,.437,-.142,-.324,.424,-.131,-.264,.411,-.121,-.204,.398,-.112,-.143,.385,-.102,-.083,.372,-.093,-.022,.359,-.084,.038,.346,-.075,.099,.333,-.066,.159,.32,-.057,.22,.307,-.049,.28,.294,-.04,.341,.281,-.031,.401,.268,-.022,.462,.255,-.013,.522,.243,-.004,.583,.23,.005,.643,.217,.013,.704,.205,.022,.765,.192,.03,.825,.18,.038,.886,.168,.046,.947,.156,.053,1.008,.144,.06,1.069,.132,.067,-.878,.479,-.236,-.818,.466,-.224,-.758,.453,-.213,-.698,.44,-.202,-.637,.428,-.191,-.577,.415,-.181,-.517,.402,-.171,-.456,.389,-.162,-.395,.376,-.154,-.335,.364,-.145,-.274,.351,-.137,-.213,.339,-.13,-.153,.326,-.122,-.092,.314,-.114,-.031,.301,-.107,.029,.289,-.099,.09,.276,-.091,.151,.264,-.083,.212,.251,-.075,.272,.238,-.067,.333,.226,-.058,.393,.213,-.05,.454,.2,-.041,.515,.188,-.033,.576,.176,-.026,.637,.164,-.018,.698,.152,-.011,.759,.14,-.004,.82,.129,.002,.881,.118,.009,.942,.107,.015,1.003,.095,.021,1.065,.084,.027,-.89,.418,-.243,-.829,.405,-.232,-.769,.392,-.222,-.708,.38,-.213,-.648,.367,-.205,-.587,.355,-.197,-.526,.343,-.19,-.465,.331,-.183,-.404,.319,-.176,-.343,.307,-.171,-.282,.296,-.165,-.221,.284,-.159,-.16,.272,-.152,-.099,.26,-.146,-.038,.248,-.139,.023,.236,-.132,.084,.224,-.124,.145,.211,-.117,.205,.199,-.109,.266,.186,-.1,.327,.173,-.092,.387,.161,-.084,.448,.149,-.076,.509,.137,-.069,.57,.126,-.063,.631,.114,-.056,.693,.103,-.05,.754,.093,-.044,.816,.083,-.04,.877,.073,-.034,.939,.062,-.029,1,.051,-.023,1.061,.04,-.017,-.9,.358,-.257,-.839,.346,-.248,-.779,.333,-.24,-.718,.322,-.234,-.656,.31,-.228,-.595,.298,-.222,-.534,.287,-.217,-.473,.276,-.211,-.411,.265,-.207,-.35,.255,-.205,-.288,.245,-.2,-.227,.233,-.195,-.166,.222,-.19,-.104,.211,-.184,-.043,.199,-.177,.018,.187,-.171,.079,.175,-.164,.14,.163,-.156,.2,.15,-.147,.261,.137,-.139,.321,.124,-.13,.382,.111,-.122,.443,.101,-.116,.505,.09,-.11,.566,.079,-.104,.627,.068,-.098,.689,.057,-.092,.75,.046,-.086,.811,.035,-.08,.872,.024,-.074,.934,.013,-.067,.995,.002,-.061,1.056,-.01,-.054,-.91,.299,-.274,-.848,.288,-.27,-.787,.277,-.266,-.725,.266,-.261,-.664,.255,-.257,-.603,.244,-.252,-.541,.233,-.248,-.48,.223,-.244,-.418,.212,-.24,-.357,.201,-.235,-.295,.191,-.231,-.234,.18,-.227,-.172,.169,-.222,-.111,.158,-.217,-.05,.147,-.211,.012,.136,-.205,.073,.124,-.199,.134,.112,-.192,.195,.1,-.185,.256,.088,-.177,.316,.075,-.168,.377,.062,-.16,.438,.051,-.153,.499,.04,-.147,.561,.029,-.141,.622,.018,-.135,.683,.006,-.128,.744,-.005,-.121,.805,-.017,-.114,.866,-.029,-.106,.927,-.041,-.098,.988,-.053,-.09,1.049,-.065,-.082,-.919,.239,-.289,-.857,.228,-.287,-.796,.218,-.284,-.734,.207,-.281,-.673,.196,-.277,-.611,.186,-.273,-.55,.175,-.27,-.488,.165,-.266,-.427,.154,-.262,-.365,.143,-.258,-.304,.133,-.254,-.242,.122,-.249,-.181,.112,-.245,-.119,.101,-.241,-.058,.09,-.236,.004,.079,-.231,.065,.068,-.226,.126,.057,-.221,.188,.046,-.215,.249,.034,-.209,.31,.022,-.202,.371,.01,-.194,.432,-.003,-.185,.493,-.014,-.178,.554,-.026,-.171,.615,-.038,-.163,.676,-.05,-.155,.736,-.062,-.146,.797,-.074,-.137,.858,-.087,-.128,.918,-.099,-.119,.979,-.112,-.11,1.039,-.124,-.101,-.929,.178,-.299,-.867,.167,-.296,-.806,.157,-.293,-.744,.146,-.29,-.683,.135,-.287,-.621,.125,-.284,-.56,.114,-.28,-.498,.104,-.277,-.437,.093,-.273,-.375,.083,-.269,-.314,.072,-.265,-.252,.062,-.262,-.191,.051,-.258,-.129,.04,-.254,-.067,.03,-.25,-.006,.019,-.246,.056,.009,-.242,.117,-.002,-.238,.179,-.013,-.235,.24,-.024,-.23,.302,-.035,-.225,.363,-.047,-.22,.424,-.059,-.211,.484,-.072,-.2,.545,-.084,-.191,.606,-.097,-.182,.666,-.109,-.172,.726,-.122,-.161,.787,-.135,-.151,.847,-.147,-.141,.907,-.16,-.131,.968,-.173,-.12,1.028,-.185,-.11,-.94,.116,-.3,-.878,.106,-.297,-.816,.095,-.293,-.755,.084,-.29,-.693,.074,-.287,-.632,.063,-.284,-.57,.053,-.28,-.509,.042,-.277,-.447,.032,-.273,-.386,.021,-.27,-.324,.01,-.266,-.263,0,-.262,-.201,-.011,-.259,-.14,-.021,-.255,-.078,-.032,-.252,-.017,-.042,-.248,.045,-.053,-.245,.106,-.064,-.242,.168,-.075,-.239,.229,-.085,-.237,.291,-.096,-.234,.352,-.107,-.232,.414,-.119,-.227,.475,-.132,-.216,.534,-.145,-.201,.594,-.158,-.189,.654,-.17,-.178,.715,-.183,-.167,.775,-.196,-.156,.835,-.209,-.145,.895,-.221,-.133,.955,-.234,-.122,1.015,-.246,-.11,-.95,.055,-.292,-.889,.045,-.288,-.827,.034,-.284,-.766,.024,-.281,-.704,.013,-.277,-.643,.003,-.274,-.581,-.008,-.27,-.52,-.019,-.266,-.458,-.029,-.263,-.397,-.04,-.259,-.335,-.05,-.256,-.274,-.061,-.252,-.212,-.071,-.249,-.151,-.082,-.245,-.089,-.093,-.242,-.028,-.103,-.238,.034,-.114,-.235,.095,-.125,-.232,.156,-.135,-.229,.218,-.146,-.226,.279,-.157,-.224,.34,-.168,-.221,.401,-.181,-.221,.463,-.194,-.219,.523,-.207,-.207,.581,-.219,-.188,.641,-.231,-.173,.701,-.244,-.165,.761,-.257,-.153,.822,-.27,-.141,.882,-.282,-.129,.941,-.294,-.116,1.001,-.306,-.1,-.962,-.004,-.274,-.9,-.014,-.27,-.838,-.025,-.266,-.777,-.035,-.262,-.715,-.046,-.258,-.654,-.056,-.255,-.592,-.067,-.251,-.531,-.077,-.247,-.469,-.087,-.243,-.408,-.098,-.239,-.346,-.108,-.236,-.285,-.119,-.232,-.223,-.129,-.228,-.162,-.14,-.224,-.1,-.15,-.221,-.039,-.161,-.217,.023,-.171,-.213,.084,-.182,-.209,.145,-.192,-.205,.207,-.202,-.201,.268,-.212,-.196,.329,-.22,-.189,.391,-.233,-.189,.448,-.253,-.205,.509,-.268,-.204,.569,-.28,-.189,.627,-.292,-.17,.687,-.305,-.158,.748,-.318,-.147,.807,-.33,-.133,.867,-.342,-.118,.926,-.353,-.1,.983,-.363,-.078,-.973,-.06,-.249,-.911,-.07,-.245,-.85,-.081,-.241,-.788,-.091,-.236,-.727,-.101,-.232,-.665,-.112,-.228,-.603,-.122,-.224,-.542,-.132,-.22,-.48,-.142,-.216,-.419,-.153,-.211,-.357,-.163,-.207,-.296,-.173,-.203,-.234,-.184,-.199,-.173,-.194,-.195,-.111,-.204,-.19,-.05,-.214,-.186,.012,-.224,-.181,.073,-.234,-.177,.135,-.244,-.171,.196,-.253,-.166,.258,-.259,-.156,.319,-.271,-.153,.379,-.288,-.161,.435,-.309,-.181,.494,-.327,-.191,.555,-.341,-.183,.614,-.353,-.166,.673,-.365,-.152,.733,-.377,-.137,.792,-.389,-.119,.85,-.399,-.1,.908,-.408,-.076,.963,-.413,-.048,-.984,-.113,-.217,-.922,-.123,-.213,-.861,-.133,-.208,-.799,-.143,-.204,-.737,-.153,-.199,-.676,-.164,-.195,-.614,-.174,-.19,-.553,-.184,-.186,-.491,-.194,-.181,-.43,-.204,-.177,-.368,-.213,-.172,-.307,-.223,-.167,-.245,-.233,-.162,-.184,-.243,-.157,-.122,-.253,-.152,-.061,-.262,-.147,.001,-.271,-.141,.063,-.281,-.137,.124,-.291,-.132,.186,-.297,-.123,.247,-.309,-.12,.308,-.326,-.125,.366,-.344,-.137,.424,-.363,-.152,.479,-.384,-.172,.54,-.401,-.172,.599,-.413,-.156,.658,-.424,-.138,.716,-.435,-.119,.775,-.445,-.098,.832,-.453,-.073,.887,-.457,-.044,.939,-.457,-.01,-.994,-.162,-.181,-.933,-.172,-.176,-.871,-.182,-.171,-.81,-.192,-.166,-.748,-.202,-.162,-.687,-.212,-.157,-.625,-.222,-.152,-.563,-.231,-.147,-.502,-.241,-.141,-.44,-.25,-.136,-.379,-.259,-.131,-.317,-.269,-.125,-.256,-.278,-.12,-.194,-.287,-.114,-.132,-.296,-.109,-.071,-.306,-.104,-.009,-.313,-.096,.052,-.323,-.091,.114,-.334,-.087,.175,-.347,-.086,.235,-.364,-.092,.294,-.383,-.103,.351,-.402,-.119,.408,-.422,-.136,.463,-.442,-.157,.524,-.46,-.156,.583,-.471,-.138,.641,-.481,-.117,.698,-.49,-.095,.755,-.497,-.07,.81,-.501,-.04,.863,-.501,-.006,.912,-.494,.032,-1.005,-.209,-.14,-.944,-.219,-.135,-.882,-.228,-.13,-.82,-.238,-.125,-.759,-.247,-.12,-.697,-.257,-.114,-.636,-.266,-.109,-.574,-.275,-.103,-.512,-.284,-.098,-.451,-.293,-.092,-.389,-.301,-.086,-.327,-.31,-.08,-.266,-.319,-.074,-.204,-.326,-.067,-.142,-.336,-.061,-.081,-.346,-.057,-.02,-.357,-.053,.042,-.37,-.052,.102,-.386,-.054,.162,-.403,-.061,.22,-.422,-.073,.277,-.441,-.09,.333,-.461,-.11,.388,-.481,-.135,.446,-.501,-.144,.507,-.517,-.136,.565,-.526,-.115,.622,-.535,-.092,.679,-.542,-.066,.734,-.546,-.036,.786,-.545,-.002,.835,-.538,.036,.882,-.526,.077,-1.016,-.253,-.097,-.954,-.263,-.092,-.892,-.272,-.087,-.831,-.281,-.081,-.769,-.29,-.075,-.707,-.299,-.069,-.646,-.307,-.063,-.584,-.316,-.057,-.522,-.324,-.051,-.461,-.333,-.045,-.399,-.34,-.038,-.337,-.349,-.032,-.276,-.358,-.026,-.214,-.368,-.022,-.153,-.38,-.018,-.092,-.393,-.017,-.031,-.408,-.018,.029,-.424,-.022,.089,-.442,-.031,.146,-.462,-.045,.203,-.481,-.064,.258,-.501,-.086,.311,-.52,-.113,.369,-.54,-.128,.429,-.559,-.127,.489,-.572,-.112,.546,-.58,-.088,.602,-.586,-.062,.657,-.59,-.032,.71,-.589,.002,.759,-.583,.04,.805,-.571,.08,.849,-.555,.122,-1.026,-.296,-.053,-.964,-.305,-.047,-.903,-.314,-.041,-.841,-.322,-.035,-.779,-.331,-.029,-.718,-.339,-.022,-.656,-.347,-.016,-.594,-.355,-.009,-.533,-.363,-.003,-.471,-.372,.003,-.409,-.381,.009,-.348,-.391,.013,-.286,-.403,.017,-.225,-.416,.018,-.164,-.43,.018,-.104,-.446,.014,-.044,-.463,.008,.015,-.482,-.003,.072,-.501,-.019,.128,-.521,-.039,.182,-.54,-.063,.235,-.559,-.092,.292,-.579,-.11,.351,-.599,-.114,.411,-.614,-.105,.47,-.625,-.085,.526,-.631,-.058,.581,-.634,-.028,.633,-.634,.006,.683,-.627,.044,.729,-.615,.084,.773,-.599,.126,.816,-.582,.167,-1.036,-.337,-.007,-.975,-.346,-.001,-.913,-.354,.005,-.851,-.362,.012,-.789,-.37,.019,-.728,-.378,.025,-.666,-.386,.032,-.604,-.394,.038,-.543,-.404,.043,-.481,-.414,.048,-.42,-.425,.051,-.359,-.438,.053,-.298,-.452,.053,-.237,-.468,.051,-.177,-.484,.045,-.118,-.503,.037,-.06,-.522,.024,-.003,-.541,.006,.053,-.561,-.016,.107,-.58,-.041,.159,-.598,-.071,.215,-.618,-.091,.273,-.638,-.1,.333,-.656,-.095,.393,-.668,-.079,.45,-.676,-.054,.504,-.679,-.024,.557,-.678,.009,.607,-.672,.047,.653,-.66,.088,.696,-.643,.13,.738,-.623,.172,.783,-.61,.213,-1.046,-.378,.039,-.985,-.386,.046,-.923,-.393,.053,-.861,-.401,.06,-.8,-.409,.066,-.738,-.418,.072,-.676,-.427,.078,-.615,-.437,.082,-.553,-.448,.086,-.492,-.461,.088,-.431,-.474,.089,-.37,-.489,.087,-.31,-.506,.083,-.251,-.524,.075,-.192,-.542,.064,-.134,-.562,.049,-.078,-.581,.03,-.023,-.601,.007,.03,-.619,-.02,.082,-.637,-.05,.137,-.656,-.073,.196,-.677,-.084,.255,-.696,-.084,.315,-.71,-.072,.373,-.72,-.049,.428,-.724,-.021,.481,-.723,.013,.531,-.717,.051,.577,-.705,.091,.62,-.687,.133,.66,-.665,.176,.704,-.649,.217,.751,-.639,.258,-1.057,-.417,.087,-.995,-.425,.093,-.933,-.433,.1,-.872,-.441,.107,-.81,-.45,.112,-.748,-.46,.117,-.687,-.471,.121,-.626,-.483,.123,-.564,-.497,.124,-.504,-.511,.123,-.443,-.527,.12,-.383,-.545,.113,-.324,-.563,.104,-.266,-.582,.091,-.209,-.602,.074,-.153,-.621,.053,-.099,-.64,.029,-.046,-.659,.001,.006,-.676,-.03,.06,-.695,-.054,.118,-.716,-.068,.177,-.735,-.071,.237,-.752,-.063,.296,-.763,-.043,.352,-.768,-.016,.405,-.768,.017,.455,-.762,.054,.501,-.75,.095,.543,-.731,.137,.583,-.708,.18,.626,-.69,.222,.672,-.678,.262,.721,-.672,.301,-1.067,-.457,.134,-1.005,-.465,.141,-.943,-.474,.146,-.882,-.483,.151,-.82,-.494,.155,-.759,-.506,.158,-.698,-.519,.159,-.637,-.533,.159,-.576,-.549,.156,-.516,-.566,.151,-.457,-.584,.143,-.398,-.603,.132,-.341,-.622,.117,-.284,-.642,.098,-.229,-.661,.076,-.175,-.68,.05,-.122,-.698,.022,-.071,-.715,-.01,-.017,-.734,-.035,.04,-.754,-.051,.099,-.774,-.058,.159,-.792,-.052,.218,-.805,-.036,.275,-.812,-.011,.329,-.813,.021,.379,-.808,.058,.426,-.795,.099,.468,-.776,.141,.507,-.752,.183,.548,-.732,.226,.593,-.718,.267,.641,-.71,.306,.692,-.709,.343,-1.077,-.497,.18,-1.015,-.507,.186,-.954,-.517,.19,-.892,-.529,.193,-.831,-.542,.195,-.77,-.556,.195,-.71,-.571,.193,-.649,-.587,.188,-.59,-.605,.181,-.531,-.623,.171,-.473,-.642,.158,-.416,-.662,.142,-.36,-.681,.121,-.305,-.701,.098,-.252,-.719,.071,-.199,-.737,.042,-.148,-.754,.01,-.094,-.773,-.016,-.038,-.793,-.034,.021,-.813,-.043,.081,-.832,-.041,.14,-.847,-.028,.198,-.856,-.005,.253,-.858,.026,.304,-.853,.062,.35,-.842,.102,.393,-.823,.144,.431,-.798,.187,.471,-.775,.229,.515,-.759,.271,.562,-.749,.311,.612,-.746,.349,.665,-.749,.382,-1.087,-.54,.224,-1.026,-.552,.228,-.965,-.564,.23,-.904,-.578,.23,-.843,-.593,.229,-.782,-.609,.225,-.723,-.626,.219,-.663,-.644,.211,-.605,-.663,.199,-.547,-.682,.184,-.491,-.702,.166,-.435,-.721,.144,-.381,-.74,.119,-.328,-.758,.092,-.276,-.776,.062,-.225,-.793,.03,-.171,-.811,.003,-.115,-.831,-.017,-.057,-.852,-.028,.003,-.871,-.029,.062,-.887,-.019,.121,-.898,.002,.176,-.902,.03,.228,-.899,.066,.275,-.888,.106,.318,-.87,.148,.357,-.846,.19,.395,-.82,.233,.437,-.801,.275,.483,-.788,.316,.532,-.783,.354,.584,-.785,.389,.639,-.793,.419,-1.098,-.587,.265,-1.037,-.6,.266,-.976,-.615,.265,-.916,-.63,.262,-.856,-.647,.257,-.796,-.665,.25,-.737,-.683,.239,-.679,-.703,.226,-.622,-.722,.209,-.566,-.742,.189,-.511,-.761,.166,-.457,-.78,.14,-.405,-.798,.112,-.353,-.815,.082,-.301,-.832,.05,-.248,-.85,.022,-.193,-.87,.001,-.135,-.891,-.012,-.076,-.91,-.016,-.016,-.928,-.008,.043,-.94,.009,.1,-.946,.036,.152,-.944,.07,.2,-.935,.109,.244,-.917,.151,.283,-.893,.193,.319,-.866,.236,.36,-.844,.278,.404,-.829,.32,.452,-.821,.359,.504,-.821,.395,.558,-.827,.427,.613,-.839,.452,-1.109,-.637,.301,-1.049,-.652,.299,-.989,-.668,.295,-.929,-.686,.288,-.87,-.704,.279,-.811,-.723,.267,-.754,-.742,.252,-.697,-.762,.233,-.642,-.781,.212,-.587,-.8,.188,-.534,-.819,.161,-.482,-.837,.131,-.43,-.854,.101,-.378,-.871,.069,-.325,-.889,.042,-.27,-.909,.019,-.213,-.929,.004,-.154,-.949,-.002,-.094,-.967,.003,-.035,-.981,.017,.022,-.989,.042,.076,-.989,.075,.125,-.981,.113,.169,-.965,.154,.209,-.941,.197,.245,-.913,.239,.283,-.888,.282,.326,-.87,.324,.373,-.86,.364,.423,-.857,.402,.477,-.862,.434,.532,-.872,.461,.589,-.888,.482,-1.122,-.69,.332,-1.062,-.707,.326,-1.002,-.725,.318,-.944,-.743,.307,-.886,-.763,.293,-.829,-.782,.277,-.772,-.802,.257,-.717,-.821,.234,-.664,-.84,.209,-.611,-.858,.181,-.559,-.875,.151,-.507,-.892,.119,-.455,-.909,.089,-.402,-.928,.061,-.348,-.947,.038,-.291,-.968,.021,-.232,-.988,.013,-.172,-1.007,.014,-.113,-1.022,.026,-.055,-1.032,.049,0,-1.034,.079,.05,-1.028,.117,.095,-1.013,.158,.135,-.99,.2,.171,-.962,.242,.208,-.934,.285,.249,-.913,.327,.294,-.9,.369,.343,-.895,.407,.396,-.897,.441,.451,-.906,.47,.507,-.92,.493,.565,-.939,.509,-1.135,-.746,.356,-1.076,-.764,.347,-1.018,-.783,.334,-.96,-.803,.319,-.904,-.822,.301,-.848,-.842,.28,-.793,-.861,.256,-.74,-.879,.23,-.687,-.897,.201,-.636,-.914,.17,-.584,-.931,.138,-.533,-.948,.108,-.48,-.967,.08,-.425,-.986,.056,-.368,-1.006,.038,-.31,-1.027,.028,-.251,-1.046,.027,-.191,-1.063,.036,-.132,-1.074,.056,-.077,-1.078,.085,-.025,-1.074,.121,.021,-1.061,.161,.062,-1.039,.203,.098,-1.012,.246,.133,-.981,.288,.172,-.957,.331,.216,-.941,.373,.264,-.933,.412,.315,-.933,.448,.369,-.939,.479,.426,-.953,.503,.483,-.971,.521,.541,-.992,.532,-1.15,-.804,.375,-1.092,-.823,.361,-1.035,-.842,.344,-.979,-.862,.325,-.924,-.881,.303,-.87,-.9,.278,-.816,-.919,.25,-.764,-.936,.22,-.713,-.953,.189,-.662,-.97,.157,-.61,-.987,.127,-.557,-1.005,.099,-.502,-1.025,.075,-.446,-1.045,.056,-.388,-1.065,.044,-.329,-1.085,.04,-.269,-1.103,.047,-.21,-1.115,.064,-.154,-1.121,.09,-.101,-1.119,.125,-.054,-1.108,.165,-.012,-1.089,.207,.025,-1.062,.249,.059,-1.03,.291,.097,-1.003,.334,.138,-.984,.376,.185,-.972,.417,.235,-.969,.454,.288,-.974,.487,.344,-.985,.513,.401,-1.002,.533,.459,-1.023,.545,.516,-1.047,.551,-1.167,-.863,.387,-1.11,-.882,.369,-1.054,-.902,.348,-1,-.921,.325,-.946,-.94,.299,-.893,-.958,.27,-.841,-.975,.24,-.79,-.992,.208,-.739,-1.009,.177,-.687,-1.026,.147,-.634,-1.044,.119,-.579,-1.063,.094,-.524,-1.083,.074,-.466,-1.104,.06,-.407,-1.124,.054,-.347,-1.142,.058,-.288,-1.156,.072,-.231,-1.164,.097,-.177,-1.164,.13,-.129,-1.155,.168,-.085,-1.137,.21,-.047,-1.112,.253,-.013,-1.08,.295,.022,-1.051,.337,.062,-1.028,.38,.106,-1.013,.421,.155,-1.006,.46,.207,-1.009,.494,.262,-1.018,.523,.319,-1.034,.544,.377,-1.054,.558,.435,-1.077,.565,.492,-1.102,.567,-1.185,-.922,.393,-1.13,-.942,.371,-1.076,-.961,.346,-1.022,-.979,.319,-.97,-.997,.29,-.918,-1.014,.26,-.867,-1.031,.227,-.816,-1.048,.196,-.764,-1.065,.166,-.711,-1.083,.138,-.657,-1.102,.113,-.601,-1.122,.092,-.544,-1.142,.076,-.485,-1.163,.068,-.425,-1.182,.07,-.366,-1.197,.081,-.308,-1.207,.103,-.253,-1.209,.134,-.204,-1.202,.172,-.159,-1.186,.213,-.12,-1.162,.256,-.085,-1.132,.298,-.052,-1.1,.34,-.014,-1.073,.383,.028,-1.054,.425,.075,-1.045,.465,.127,-1.044,.501,.181,-1.052,.531,.238,-1.066,.555,.295,-1.085,.571,.353,-1.107,.579,.41,-1.132,.582,.467,-1.158,.58,-1.206,-.981,.394,-1.152,-1,.368,-1.099,-1.018,.34,-1.047,-1.036,.31,-.995,-1.053,.279,-.944,-1.07,.247,-.892,-1.087,.216,-.84,-1.104,.186,-.788,-1.122,.158,-.734,-1.141,.132,-.678,-1.161,.11,-.622,-1.181,.094,-.563,-1.201,.084,-.504,-1.221,.083,-.444,-1.237,.092,-.385,-1.249,.111,-.33,-1.253,.14,-.279,-1.248,.176,-.233,-1.234,.217,-.193,-1.212,.259,-.157,-1.183,.302,-.124,-1.15,.343,-.089,-1.121,.386,-.049,-1.098,.428,-.004,-1.085,.47,.046,-1.081,.508,.1,-1.086,.54,.156,-1.098,.565,.213,-1.116,.583,.271,-1.138,.593,.328,-1.162,.597,.386,-1.188,.595,.442,-1.214,.59])},Bd=1/120,_1=4,lw=1.6,cw=2,uw=.65,fw=.35,vu=2;class hw{constructor(e,n,a,o){this.width=e,this.height=n,this.segX=a,this.segY=o,this.cols=a+1,this.rows=o+1,this.count=this.cols*this.rows,this.positions=new Float32Array(this.count*3),this.prev=new Float32Array(this.count*3),this.rest=new Float32Array(this.count*3),this.initPositions();const c=[],u=[],h=[],m=(p,g)=>g*this.cols+p;for(let p=0;p<this.rows;p++)for(let g=0;g<this.cols;g++)g+1<this.cols&&(c.push(m(g,p)),u.push(m(g+1,p)),h.push(1)),p+1<this.rows&&(c.push(m(g,p)),u.push(m(g,p+1)),h.push(1)),g+1<this.cols&&p+1<this.rows&&(c.push(m(g,p)),u.push(m(g+1,p+1)),h.push(.85),c.push(m(g+1,p)),u.push(m(g,p+1)),h.push(.85)),g+2<this.cols&&(c.push(m(g,p)),u.push(m(g+2,p)),h.push(.5)),p+2<this.rows&&(c.push(m(g,p)),u.push(m(g,p+2)),h.push(.5));this.cA=new Int32Array(c),this.cB=new Int32Array(u),this.cMul=new Float32Array(h),this.cRest=new Float32Array(c.length),this.computeRestLengths(),this.neighbors=new Int32Array(this.count*4).fill(-1);for(let p=0;p<this.rows;p++)for(let g=0;g<this.cols;g++){const _=m(g,p)*4;this.neighbors[_+0]=g>0?m(g-1,p):-1,this.neighbors[_+1]=g+1<this.cols?m(g+1,p):-1,this.neighbors[_+2]=p>0?m(g,p-1):-1,this.neighbors[_+3]=p+1<this.rows?m(g,p+1):-1}this.selfRadius=Math.min(this.width/this.segX,this.height/this.segY)*lw,this.selfHashInv=1/this.selfRadius}width;height;segX;segY;cols;rows;count;positions;prev;rest;cA;cB;cRest;cMul;neighbors;grab=null;accumulator=0;selfRadius=.1;selfHashInv=10;selfHash=new Map;smoothScratch=null;initPositions(){const e=Ru,n=e.cols,a=e.rows,o=this.width/e.width,c=this.height/e.height,u=(o+c)/2;let h=0;for(let m=0;m<this.rows;m++)for(let p=0;p<this.cols;p++){const g=p/this.segX*(n-1),_=m/this.segY*(a-1),v=Math.min(n-2,Math.floor(g)),x=Math.min(a-2,Math.floor(_)),b=g-v,R=_-x;for(let S=0;S<3;S++){const M=(x*n+v)*3+S,P=(x*n+v+1)*3+S,L=((x+1)*n+v)*3+S,A=((x+1)*n+v+1)*3+S,I=e.data[M]*(1-b)+e.data[P]*b,N=e.data[L]*(1-b)+e.data[A]*b,F=S===0?o:S===1?c:u;this.positions[h+S]=(I*(1-R)+N*R)*F}h+=3}this.prev.set(this.positions),this.rest.set(this.positions)}computeRestLengths(){const e=this.width/this.segX,n=this.height/this.segY;for(let a=0;a<this.cA.length;a++){const o=this.cA[a],c=this.cB[a],u=o%this.cols,h=Math.floor(o/this.cols),m=c%this.cols,p=Math.floor(c/this.cols),g=(u-m)*e,_=(h-p)*n;this.cRest[a]=Math.hypot(g,_)}}reset(){this.initPositions(),this.grab=null}poke(e=.5){const n=this.positions,a=Math.floor(Math.random()*this.count),o=n[a*3],c=n[a*3+1],u=n[a*3+2],h=new $(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(e*.09),m=Math.max(this.width,this.height)*.28;for(let p=0;p<this.count;p++){const g=n[p*3]-o,_=n[p*3+1]-c,v=n[p*3+2]-u,x=Math.sqrt(g*g+_*_+v*v);if(x>m)continue;const b=1-x/m,R=b*b*(3-2*b);this.prev[p*3]-=h.x*R,this.prev[p*3+1]-=h.y*R,this.prev[p*3+2]-=h.z*R}}startGrab(e,n){const a=this.positions,o=[],c=[],u=[];let h=1/0;for(let m=0;m<this.count;m++){const p=a[m*3]-e.x,g=a[m*3+1]-e.y,_=a[m*3+2]-e.z,v=Math.sqrt(p*p+g*g+_*_);if(h=Math.min(h,v),v>n)continue;const x=1-v/n,b=x*x*(3-2*x);o.push(m),c.push(b),u.push(p,g,_)}return o.length===0||h>n?!1:(this.grab={indices:o,weights:c,offsets:new Float32Array(u),target:e.clone()},!0)}moveGrab(e){this.grab&&this.grab.target.copy(e)}endGrab(){this.grab=null}get isGrabbing(){return this.grab!==null}cavityScratch=null;computeCavity(e,n,a=6){const o=this.positions,c=this.neighbors,u=this.count,h=1/Math.min(this.width/this.segX,this.height/this.segY);(!this.cavityScratch||this.cavityScratch.length<u)&&(this.cavityScratch=new Float32Array(u));const m=this.cavityScratch;for(let p=0;p<u;p++){let g=0,_=0,v=0,x=0;for(let L=0;L<4;L++){const A=c[p*4+L];A<0||(g+=o[A*3],_+=o[A*3+1],v+=o[A*3+2],x++)}if(x===0){m[p]=0;continue}const b=1/x,R=g*b-o[p*3],S=_*b-o[p*3+1],M=v*b-o[p*3+2],P=(R*e[p*3]+S*e[p*3+1]+M*e[p*3+2])*h;m[p]=Math.min(1,Math.max(0,P*a))}for(let p=0;p<u;p++){let g=0,_=0;for(let v=0;v<4;v++){const x=c[p*4+v];x<0||(g+=m[x],_++)}n[p]=_>0?m[p]*.5+g/_*.5:m[p]}}step(e,n){this.accumulator+=Math.min(e,.05);let a=0;for(;this.accumulator>=Bd&&a<_1;)this.substep(n),this.accumulator-=Bd,a++;a===_1&&(this.accumulator=0),a>0&&(this.selfCollide(),this.smoothPass(fw))}smoothPass(e){const n=this.positions,a=this.neighbors,o=this.count;(!this.smoothScratch||this.smoothScratch.length<o*3)&&(this.smoothScratch=new Float32Array(o*3));const c=this.smoothScratch;for(let u=0;u<o;u++){let h=0,m=0,p=0,g=0;for(let x=0;x<4;x++){const b=a[u*4+x];b<0||(h+=n[b*3],m+=n[b*3+1],p+=n[b*3+2],g++)}const _=u*3;if(g===0){c[_]=n[_],c[_+1]=n[_+1],c[_+2]=n[_+2];continue}const v=1/g;c[_]=n[_]+(h*v-n[_])*e,c[_+1]=n[_+1]+(m*v-n[_+1])*e,c[_+2]=n[_+2]+(p*v-n[_+2])*e}n.set(c.subarray(0,o*3))}selfCollide(){const e=this.positions,n=this.count,a=this.cols,o=this.selfRadius,c=o*o,u=this.selfHashInv,h=this.selfHash;for(let m=0;m<cw;m++){h.clear();for(let p=0;p<n;p++){const g=Math.floor(e[p*3]*u),_=Math.floor(e[p*3+1]*u),v=Math.floor(e[p*3+2]*u),x=(g*73856093^_*19349663^v*83492791)>>>0;let b=h.get(x);b||(b=[],h.set(x,b)),b.push(p)}for(let p=0;p<n;p++){const g=p%a,_=p/a|0,v=Math.floor(e[p*3]*u),x=Math.floor(e[p*3+1]*u),b=Math.floor(e[p*3+2]*u);for(let R=-1;R<=1;R++)for(let S=-1;S<=1;S++)for(let M=-1;M<=1;M++){const P=((v+M)*73856093^(x+S)*19349663^(b+R)*83492791)>>>0,L=h.get(P);if(L)for(let A=0;A<L.length;A++){const I=L[A];if(I<=p)continue;const N=I%a,F=I/a|0,T=g-N,U=_-F;if(T>=-vu&&T<=vu&&U>=-vu&&U<=vu)continue;const X=e[I*3]-e[p*3],V=e[I*3+1]-e[p*3+1],Y=e[I*3+2]-e[p*3+2],ue=X*X+V*V+Y*Y;if(ue>=c||ue<1e-12)continue;const fe=Math.sqrt(ue),Q=(o-fe)/fe*.5*uw,B=X*Q,H=V*Q,z=Y*Q;e[p*3]-=B,e[p*3+1]-=H,e[p*3+2]-=z,e[I*3]+=B,e[I*3+1]+=H,e[I*3+2]+=z}}}}}substep(e){const n=this.positions,a=this.prev,o=this.count,c=Math.pow(1-Math.min(e.viscosity,.99),Bd*60);for(let x=0;x<o*3;x++){const b=n[x],R=(b-a[x])*c;a[x]=b,n[x]=b+R}if(e.smoothing>0){const x=e.smoothing*.5,b=this.neighbors;for(let R=0;R<o;R++){let S=0,M=0,P=0,L=0;for(let I=0;I<4;I++){const N=b[R*4+I];N<0||(S+=n[N*3],M+=n[N*3+1],P+=n[N*3+2],L++)}if(L===0)continue;const A=1/L;n[R*3]+=(S*A-n[R*3])*x,n[R*3+1]+=(M*A-n[R*3+1])*x,n[R*3+2]+=(P*A-n[R*3+2])*x}}const u=Math.max(1,Math.round(e.iterations)),h=e.stiffness,m=this.cA,p=this.cB,g=this.cRest,_=this.cMul,v=m.length;for(let x=0;x<u;x++){for(let b=0;b<v;b++){const R=m[b]*3,S=p[b]*3,M=n[S]-n[R],P=n[S+1]-n[R+1],L=n[S+2]-n[R+2],A=Math.sqrt(M*M+P*P+L*L);if(A<1e-9)continue;const I=(A-g[b])/A*.5*h*_[b],N=M*I,F=P*I,T=L*I;n[R]+=N,n[R+1]+=F,n[R+2]+=T,n[S]-=N,n[S+1]-=F,n[S+2]-=T}this.applyGrab()}}applyGrab(){const e=this.grab;if(!e)return;const n=this.positions;for(let a=0;a<e.indices.length;a++){const o=e.indices[a]*3,c=e.weights[a],u=e.target.x+e.offsets[a*3],h=e.target.y+e.offsets[a*3+1],m=e.target.z+e.offsets[a*3+2];n[o]+=(u-n[o])*c,n[o+1]+=(h-n[o+1])*c,n[o+2]+=(m-n[o+2])*c}}}function xx(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function dw(s,e,n){const a=new Float32Array(s*s),o=new Float32Array(e+1),c=new Float32Array(e+1);for(let h=0;h<=e;h++)o[h]=.85+n()*.3,c[h]=.85+n()*.3;const u=new Float32Array(s*s);for(let h=0;h<u.length;h++)u[h]=n();for(let h=0;h<s;h++){const m=h/s*e,p=Math.floor(m),g=m-p;for(let _=0;_<s;_++){const v=_/s*e,x=Math.floor(v),b=v-x,R=Math.sin(b*Math.PI)*o[x%(e+1)],S=Math.sin(g*Math.PI)*c[p%(e+1)],P=(x+p)%2===0?R*.62+S*.38:S*.62+R*.38,L=u[h*s+_];a[h*s+_]=P*.85+L*.15}}return a}function yx(s,e,n){const a=document.createElement("canvas");a.width=e,a.height=e;const o=a.getContext("2d"),c=o.createImageData(e,e),u=c.data,h=(p,g)=>s[(g+e)%e*e+(p+e)%e];for(let p=0;p<e;p++)for(let g=0;g<e;g++){const _=(h(g+1,p)-h(g-1,p))*n,v=(h(g,p+1)-h(g,p-1))*n,x=1/Math.sqrt(_*_+v*v+1),b=(p*e+g)*4;u[b]=Math.round((-_*x*.5+.5)*255),u[b+1]=Math.round((v*x*.5+.5)*255),u[b+2]=Math.round((x*.5+.5)*255),u[b+3]=255}o.putImageData(c,0,0);const m=new Ou(a);return m.wrapS=m.wrapT=Al,m.repeat.set(2,2),m.colorSpace=Ki,m}function pw(s,e,n,a){const o=new Float32Array(s*s),c=new Float32Array(s*s);for(let h=0;h<c.length;h++)c[h]=a();const u=new Float32Array(Math.ceil(e)+2);for(let h=0;h<u.length;h++)u[h]=.85+a()*.3;for(let h=0;h<s;h++){const m=h/s*n,p=Math.floor(m),g=m-p,_=p%2===0?0:.5;for(let v=0;v<s;v++){const x=v/s*e+_,b=Math.floor(x),R=x-b,S=Math.sin(R*Math.PI)*u[(b+1)%u.length],M=Math.sin(g*Math.PI),P=.5+.5*Math.cos((R-.5)*2*Math.PI),L=.55*S+.3*M*P;o[h*s+v]=L*.85+c[h*s+v]*.15}}return o}function mw(s){const e=s.size??512,n=xx(s.seed??20240),a=s.type==="woven"?dw(e,s.threads,n):pw(e,s.threads,Math.max(2,Math.round(s.threads*.8)),n);return yx(a,e,s.strength)}function gw(s,e=512,n=1.6){const a=document.createElement("canvas");a.width=e,a.height=e;const o=a.getContext("2d");o.drawImage(s,0,0,e,e);const c=o.getImageData(0,0,e,e).data,u=new Float32Array(e*e);for(let h=0;h<u.length;h++)u[h]=(c[h*4]*.2126+c[h*4+1]*.7152+c[h*4+2]*.0722)/255;return yx(u,e,n)}function vw(s=256,e=4242){const n=xx(e),a=document.createElement("canvas");a.width=s,a.height=s;const o=a.getContext("2d"),c=o.createImageData(s,s),u=c.data;for(let m=0;m<s*s;m++){const p=Math.round(215+(n()-.5)*70);u[m*4]=p,u[m*4+1]=p,u[m*4+2]=p,u[m*4+3]=255}o.putImageData(c,0,0);const h=new Ou(a);return h.wrapS=h.wrapT=Al,h.repeat.set(4,4),h.colorSpace=Ki,h}function _w(s){const e=vw(),n=new M2({color:new it("#9aa1ad"),metalness:.95,roughness:.1,roughnessMap:e,normalScale:new Ze(.5,.5),clearcoat:1,clearcoatRoughness:.08,sheen:.35,sheenRoughness:.55,sheenColor:new it("#cfd6ff"),iridescence:1,iridescenceIOR:1.35,iridescenceThicknessRange:[120,480],side:Zi}),a={uHoloIntensity:{value:1},uHoloScale:{value:110},uBandFreq:{value:3},uRadialFreq:{value:1.6},uSaturation:{value:.8},uHueShift:{value:0},uSparkle:{value:.6},uSpecTint:{value:.85},uSurfaceMap:{value:s},uSurfaceOpacity:{value:1},uCavityAmount:{value:0},uCornerRound:{value:0},uClothSize:{value:new Ze(3,3)}};return n.alphaToCoverage=!0,n.onBeforeCompile=o=>{Object.assign(o.uniforms,a),o.vertexShader=`varying vec2 vHoloUv;
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
        }`)},{material:n,uniforms:a}}const no=2048;class xw{canvas;texture;decals=[];clothImage=null;selected=null;ctx;constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=no,this.canvas.height=no,this.ctx=this.canvas.getContext("2d"),this.texture=new Ou(this.canvas),this.texture.colorSpace=fi,this.redraw()}setAspect(e){const n=e>=1?no:Math.round(no*e),a=e>=1?Math.round(no/e):no;return this.canvas.width===n&&this.canvas.height===a?(this.redraw(),!1):(this.canvas.width=n,this.canvas.height=a,this.texture.dispose(),this.texture=new Ou(this.canvas),this.texture.colorSpace=fi,this.redraw(),!0)}addDecal(e){const n={img:e,u:.5,v:.5,scale:.35,rotation:0};return this.decals.push(n),this.selected=n,this.redraw(),n}setClothImage(e){this.clothImage=e,this.redraw()}clear(){this.decals=[],this.clothImage=null,this.selected=null,this.redraw()}hitTest(e,n){const a=this.canvas.width,o=this.canvas.height,c=e*a,u=(1-n)*o;for(let h=this.decals.length-1;h>=0;h--){const m=this.decals[h],{w:p,h:g}=this.decalPixelSize(m),_=m.u*a,v=(1-m.v)*o,x=-m.rotation*Math.PI/180,b=c-_,R=u-v,S=b*Math.cos(x)-R*Math.sin(x),M=b*Math.sin(x)+R*Math.cos(x);if(Math.abs(S)<=p/2&&Math.abs(M)<=g/2)return m}return null}decalPixelSize(e){const n=this.canvas.width,a=e.img.naturalWidth||e.img.width||300,o=e.img.naturalHeight||e.img.height||300,c=e.scale*n,u=c*o/a;return{w:c,h:u}}redraw(){const{ctx:e,canvas:n}=this;e.clearRect(0,0,n.width,n.height),this.clothImage&&e.drawImage(this.clothImage,0,0,n.width,n.height);for(const a of this.decals){const{w:o,h:c}=this.decalPixelSize(a);e.save(),e.translate(a.u*n.width,(1-a.v)*n.height),e.rotate(a.rotation*Math.PI/180),e.drawImage(a.img,-o/2,-c/2,o,c),e.restore()}this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}const x1=`
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
`,y1=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;function M1(){return{tDepth:{value:null},focus:{value:5.2},focalDepth:{value:.15},aperture:{value:.4},maxblur:{value:.04},nearClip:{value:.1},farClip:{value:200}}}class Sw extends or{sceneRef;cameraRef;depthMaterial;depthRT;blurRT;gatherMat;compositeMat;fsQuad;clearColorTmp=new it;constructor(e,n){super(),this.sceneRef=e,this.cameraRef=n,this.needsSwap=!0,this.depthMaterial=new sx,this.depthMaterial.depthPacking=yS,this.depthMaterial.blending=Ji,this.depthRT=new Xn(1,1,{minFilter:Cn,magFilter:Cn}),this.blurRT=new Xn(1,1,{minFilter:On,magFilter:On,type:ni}),this.gatherMat=new In({uniforms:{...M1(),tColor:{value:null}},vertexShader:y1,fragmentShader:x1+yw}),this.compositeMat=new In({uniforms:{...M1(),tSharp:{value:null},tBlur:{value:null}},vertexShader:y1,fragmentShader:x1+Mw}),this.fsQuad=new Wu(this.gatherMat)}setBoth(e,n){this.gatherMat.uniforms[e].value=n,this.compositeMat.uniforms[e].value=n}setParams(e,n,a){this.setBoth("aperture",e),this.setBoth("maxblur",n),this.setBoth("focalDepth",a)}setFocus(e){this.setBoth("focus",e)}setSize(e,n){this.depthRT.setSize(e,n),this.blurRT.setSize(Math.max(1,e>>1),Math.max(1,n>>1))}render(e,n,a){this.setBoth("nearClip",this.cameraRef.near),this.setBoth("farClip",this.cameraRef.far),e.getClearColor(this.clearColorTmp);const o=e.getClearAlpha(),c=e.autoClear;e.autoClear=!1,this.sceneRef.overrideMaterial=this.depthMaterial,e.setClearColor(16777215,1),e.setRenderTarget(this.depthRT),e.clear(),e.render(this.sceneRef,this.cameraRef),this.sceneRef.overrideMaterial=null,e.setClearColor(this.clearColorTmp,o),this.gatherMat.uniforms.tColor.value=a.texture,this.gatherMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.gatherMat,e.setRenderTarget(this.blurRT),this.fsQuad.render(e),this.compositeMat.uniforms.tSharp.value=a.texture,this.compositeMat.uniforms.tBlur.value=this.blurRT.texture,this.compositeMat.uniforms.tDepth.value=this.depthRT.texture,this.fsQuad.material=this.compositeMat,e.setRenderTarget(this.renderToScreen?null:n),this.fsQuad.render(e),e.autoClear=c}dispose(){this.depthMaterial.dispose(),this.depthRT.dispose(),this.blurRT.dispose(),this.gatherMat.dispose(),this.compositeMat.dispose(),this.fsQuad.dispose()}}var jn=Uint8Array,Ri=Uint16Array,pp=Int32Array,mp=new jn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),gp=new jn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),S1=new jn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Mx=function(s,e){for(var n=new Ri(31),a=0;a<31;++a)n[a]=e+=1<<s[a-1];for(var o=new pp(n[30]),a=1;a<30;++a)for(var c=n[a];c<n[a+1];++c)o[c]=c-n[a]<<5|a;return{b:n,r:o}},Sx=Mx(mp,2),bw=Sx.b,I0=Sx.r;bw[28]=258,I0[258]=28;var Ew=Mx(gp,0),b1=Ew.r,F0=new Ri(32768);for(var tn=0;tn<32768;++tn){var Es=(tn&43690)>>1|(tn&21845)<<1;Es=(Es&52428)>>2|(Es&13107)<<2,Es=(Es&61680)>>4|(Es&3855)<<4,F0[tn]=((Es&65280)>>8|(Es&255)<<8)>>1}var Tl=(function(s,e,n){for(var a=s.length,o=0,c=new Ri(e);o<a;++o)s[o]&&++c[s[o]-1];var u=new Ri(e);for(o=1;o<e;++o)u[o]=u[o-1]+c[o-1]<<1;var h;if(n){h=new Ri(1<<e);var m=15-e;for(o=0;o<a;++o)if(s[o])for(var p=o<<4|s[o],g=e-s[o],_=u[s[o]-1]++<<g,v=_|(1<<g)-1;_<=v;++_)h[F0[_]>>m]=p}else for(h=new Ri(a),o=0;o<a;++o)s[o]&&(h[o]=F0[u[s[o]-1]++]>>15-s[o]);return h}),sr=new jn(288);for(var tn=0;tn<144;++tn)sr[tn]=8;for(var tn=144;tn<256;++tn)sr[tn]=9;for(var tn=256;tn<280;++tn)sr[tn]=7;for(var tn=280;tn<288;++tn)sr[tn]=8;var Iu=new jn(32);for(var tn=0;tn<32;++tn)Iu[tn]=5;var Tw=Tl(sr,9,0),Aw=Tl(Iu,5,0),bx=function(s){return(s+7)/8|0},Ex=function(s,e,n){return(n==null||n>s.length)&&(n=s.length),new jn(s.subarray(e,n))},ww=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],qu=function(s,e,n){var a=new Error(e||ww[s]);if(a.code=s,Error.captureStackTrace&&Error.captureStackTrace(a,qu),!n)throw a;return a},Ba=function(s,e,n){n<<=e&7;var a=e/8|0;s[a]|=n,s[a+1]|=n>>8},xl=function(s,e,n){n<<=e&7;var a=e/8|0;s[a]|=n,s[a+1]|=n>>8,s[a+2]|=n>>16},zd=function(s,e){for(var n=[],a=0;a<s.length;++a)s[a]&&n.push({s:a,f:s[a]});var o=n.length,c=n.slice();if(!o)return{t:Ax,l:0};if(o==1){var u=new jn(n[0].s+1);return u[n[0].s]=1,{t:u,l:1}}n.sort(function(I,N){return I.f-N.f}),n.push({s:-1,f:25001});var h=n[0],m=n[1],p=0,g=1,_=2;for(n[0]={s:-1,f:h.f+m.f,l:h,r:m};g!=o-1;)h=n[n[p].f<n[_].f?p++:_++],m=n[p!=g&&n[p].f<n[_].f?p++:_++],n[g++]={s:-1,f:h.f+m.f,l:h,r:m};for(var v=c[0].s,a=1;a<o;++a)c[a].s>v&&(v=c[a].s);var x=new Ri(v+1),b=B0(n[g-1],x,0);if(b>e){var a=0,R=0,S=b-e,M=1<<S;for(c.sort(function(N,F){return x[F.s]-x[N.s]||N.f-F.f});a<o;++a){var P=c[a].s;if(x[P]>e)R+=M-(1<<b-x[P]),x[P]=e;else break}for(R>>=S;R>0;){var L=c[a].s;x[L]<e?R-=1<<e-x[L]++-1:++a}for(;a>=0&&R;--a){var A=c[a].s;x[A]==e&&(--x[A],++R)}b=e}return{t:new jn(x),l:b}},B0=function(s,e,n){return s.s==-1?Math.max(B0(s.l,e,n+1),B0(s.r,e,n+1)):e[s.s]=n},E1=function(s){for(var e=s.length;e&&!s[--e];);for(var n=new Ri(++e),a=0,o=s[0],c=1,u=function(m){n[a++]=m},h=1;h<=e;++h)if(s[h]==o&&h!=e)++c;else{if(!o&&c>2){for(;c>138;c-=138)u(32754);c>2&&(u(c>10?c-11<<5|28690:c-3<<5|12305),c=0)}else if(c>3){for(u(o),--c;c>6;c-=6)u(8304);c>2&&(u(c-3<<5|8208),c=0)}for(;c--;)u(o);c=1,o=s[h]}return{c:n.subarray(0,a),n:e}},yl=function(s,e){for(var n=0,a=0;a<e.length;++a)n+=s[a]*e[a];return n},Tx=function(s,e,n){var a=n.length,o=bx(e+2);s[o]=a&255,s[o+1]=a>>8,s[o+2]=s[o]^255,s[o+3]=s[o+1]^255;for(var c=0;c<a;++c)s[o+c+4]=n[c];return(o+4+a)*8},T1=function(s,e,n,a,o,c,u,h,m,p,g){Ba(e,g++,n),++o[256];for(var _=zd(o,15),v=_.t,x=_.l,b=zd(c,15),R=b.t,S=b.l,M=E1(v),P=M.c,L=M.n,A=E1(R),I=A.c,N=A.n,F=new Ri(19),T=0;T<P.length;++T)++F[P[T]&31];for(var T=0;T<I.length;++T)++F[I[T]&31];for(var U=zd(F,7),X=U.t,V=U.l,Y=19;Y>4&&!X[S1[Y-1]];--Y);var ue=p+5<<3,fe=yl(o,sr)+yl(c,Iu)+u,Q=yl(o,v)+yl(c,R)+u+14+3*Y+yl(F,X)+2*F[16]+3*F[17]+7*F[18];if(m>=0&&ue<=fe&&ue<=Q)return Tx(e,g,s.subarray(m,m+p));var B,H,z,te;if(Ba(e,g,1+(Q<fe)),g+=2,Q<fe){B=Tl(v,x,0),H=v,z=Tl(R,S,0),te=R;var me=Tl(X,V,0);Ba(e,g,L-257),Ba(e,g+5,N-1),Ba(e,g+10,Y-4),g+=14;for(var T=0;T<Y;++T)Ba(e,g+3*T,X[S1[T]]);g+=3*Y;for(var D=[P,I],W=0;W<2;++W)for(var _e=D[W],T=0;T<_e.length;++T){var Ee=_e[T]&31;Ba(e,g,me[Ee]),g+=X[Ee],Ee>15&&(Ba(e,g,_e[T]>>5&127),g+=_e[T]>>12)}}else B=Tw,H=sr,z=Aw,te=Iu;for(var T=0;T<h;++T){var Te=a[T];if(Te>255){var Ee=Te>>18&31;xl(e,g,B[Ee+257]),g+=H[Ee+257],Ee>7&&(Ba(e,g,Te>>23&31),g+=mp[Ee]);var ee=Te&31;xl(e,g,z[ee]),g+=te[ee],ee>3&&(xl(e,g,Te>>5&8191),g+=gp[ee])}else xl(e,g,B[Te]),g+=H[Te]}return xl(e,g,B[256]),g+H[256]},Rw=new pp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ax=new jn(0),Cw=function(s,e,n,a,o,c){var u=c.z||s.length,h=new jn(a+u+5*(1+Math.ceil(u/7e3))+o),m=h.subarray(a,h.length-o),p=c.l,g=(c.r||0)&7;if(e){g&&(m[0]=c.r>>3);for(var _=Rw[e-1],v=_>>13,x=_&8191,b=(1<<n)-1,R=c.p||new Ri(32768),S=c.h||new Ri(b+1),M=Math.ceil(n/3),P=2*M,L=function(gt){return(s[gt]^s[gt+1]<<M^s[gt+2]<<P)&b},A=new pp(25e3),I=new Ri(288),N=new Ri(32),F=0,T=0,U=c.i||0,X=0,V=c.w||0,Y=0;U+2<u;++U){var ue=L(U),fe=U&32767,Q=S[ue];if(R[fe]=Q,S[ue]=fe,V<=U){var B=u-U;if((F>7e3||X>24576)&&(B>423||!p)){g=T1(s,m,0,A,I,N,T,X,Y,U-Y,g),X=F=T=0,Y=U;for(var H=0;H<286;++H)I[H]=0;for(var H=0;H<30;++H)N[H]=0}var z=2,te=0,me=x,D=fe-Q&32767;if(B>2&&ue==L(U-D))for(var W=Math.min(v,B)-1,_e=Math.min(32767,U),Ee=Math.min(258,B);D<=_e&&--me&&fe!=Q;){if(s[U+z]==s[U+z-D]){for(var Te=0;Te<Ee&&s[U+Te]==s[U+Te-D];++Te);if(Te>z){if(z=Te,te=D,Te>W)break;for(var ee=Math.min(D,Te-2),Me=0,H=0;H<ee;++H){var Se=U-D+H&32767,Ie=R[Se],nt=Se-Ie&32767;nt>Me&&(Me=nt,Q=Se)}}}fe=Q,Q=R[fe],D+=fe-Q&32767}if(te){A[X++]=268435456|I0[z]<<18|b1[te];var Ke=I0[z]&31,Ut=b1[te]&31;T+=mp[Ke]+gp[Ut],++I[257+Ke],++N[Ut],V=U+z,++F}else A[X++]=s[U],++I[s[U]]}}for(U=Math.max(U,V);U<u;++U)A[X++]=s[U],++I[s[U]];g=T1(s,m,p,A,I,N,T,X,Y,U-Y,g),p||(c.r=g&7|m[g/8|0]<<3,g-=7,c.h=S,c.p=R,c.i=U,c.w=V)}else{for(var U=c.w||0;U<u+p;U+=65535){var ot=U+65535;ot>=u&&(m[g/8|0]=p,ot=u),g=Tx(m,g+1,s.subarray(U,ot))}c.i=u}return Ex(h,0,a+bx(g)+o)},Dw=(function(){for(var s=new Int32Array(256),e=0;e<256;++e){for(var n=e,a=9;--a;)n=(n&1&&-306674912)^n>>>1;s[e]=n}return s})(),Uw=function(){var s=-1;return{p:function(e){for(var n=s,a=0;a<e.length;++a)n=Dw[n&255^e[a]]^n>>>8;s=n},d:function(){return~s}}},Nw=function(s,e,n,a,o){if(!o&&(o={l:1},e.dictionary)){var c=e.dictionary.subarray(-32768),u=new jn(c.length+s.length);u.set(c),u.set(s,c.length),s=u,o.w=c.length}return Cw(s,e.level==null?6:e.level,e.mem==null?o.l?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):20:12+e.mem,n,a,o)},wx=function(s,e){var n={};for(var a in s)n[a]=s[a];for(var a in e)n[a]=e[a];return n},Vn=function(s,e,n){for(;n;++e)s[e]=n,n>>>=8};function Lw(s,e){return Nw(s,e||{},0,0)}var Rx=function(s,e,n,a){for(var o in s){var c=s[o],u=e+o,h=a;Array.isArray(c)&&(h=wx(a,c[1]),c=c[0]),c instanceof jn?n[u]=[c,h]:(n[u+="/"]=[new jn(0),h],Rx(c,u,n,a))}},A1=typeof TextEncoder<"u"&&new TextEncoder,Pw=typeof TextDecoder<"u"&&new TextDecoder,Ow=0;try{Pw.decode(Ax,{stream:!0}),Ow=1}catch{}function Fu(s,e){var n;if(A1)return A1.encode(s);for(var a=s.length,o=new jn(s.length+(s.length>>1)),c=0,u=function(p){o[c++]=p},n=0;n<a;++n){if(c+5>o.length){var h=new jn(c+8+(a-n<<1));h.set(o),o=h}var m=s.charCodeAt(n);m<128||e?u(m):m<2048?(u(192|m>>6),u(128|m&63)):m>55295&&m<57344?(m=65536+(m&1047552)|s.charCodeAt(++n)&1023,u(240|m>>18),u(128|m>>12&63),u(128|m>>6&63),u(128|m&63)):(u(224|m>>12),u(128|m>>6&63),u(128|m&63))}return Ex(o,0,c)}var z0=function(s){var e=0;if(s)for(var n in s){var a=s[n].length;a>65535&&qu(9),e+=a+4}return e},w1=function(s,e,n,a,o,c,u,h){var m=a.length,p=n.extra,g=h&&h.length,_=z0(p);Vn(s,e,u!=null?33639248:67324752),e+=4,u!=null&&(s[e++]=20,s[e++]=n.os),s[e]=20,e+=2,s[e++]=n.flag<<1|(c<0&&8),s[e++]=o&&8,s[e++]=n.compression&255,s[e++]=n.compression>>8;var v=new Date(n.mtime==null?Date.now():n.mtime),x=v.getFullYear()-1980;if((x<0||x>119)&&qu(10),Vn(s,e,x<<25|v.getMonth()+1<<21|v.getDate()<<16|v.getHours()<<11|v.getMinutes()<<5|v.getSeconds()>>1),e+=4,c!=-1&&(Vn(s,e,n.crc),Vn(s,e+4,c<0?-c-2:c),Vn(s,e+8,n.size)),Vn(s,e+12,m),Vn(s,e+14,_),e+=16,u!=null&&(Vn(s,e,g),Vn(s,e+6,n.attrs),Vn(s,e+10,u),e+=14),s.set(a,e),e+=m,_)for(var b in p){var R=p[b],S=R.length;Vn(s,e,+b),Vn(s,e+2,S),s.set(R,e+4),e+=4+S}return g&&(s.set(h,e),e+=g),e},Iw=function(s,e,n,a,o){Vn(s,e,101010256),Vn(s,e+8,n),Vn(s,e+10,n),Vn(s,e+12,a),Vn(s,e+16,o)};function Fw(s,e){e||(e={});var n={},a=[];Rx(s,"",n,e);var o=0,c=0;for(var u in n){var h=n[u],m=h[0],p=h[1],g=p.level==0?0:8,_=Fu(u),v=_.length,x=p.comment,b=x&&Fu(x),R=b&&b.length,S=z0(p.extra);v>65535&&qu(11);var M=g?Lw(m,p):m,P=M.length,L=Uw();L.p(m),a.push(wx(p,{size:m.length,crc:L.d(),c:M,f:_,m:b,u:v!=u.length||b&&x.length!=R,o,compression:g})),o+=30+v+S+P,c+=76+2*(v+S)+(R||0)+P}for(var A=new jn(c+22),I=o,N=c-o,F=0;F<a.length;++F){var _=a[F];w1(A,_.o,_,_.f,_.u,_.c.length);var T=30+_.f.length+z0(_.extra);A.set(_.c,_.o+T),w1(A,o,_,_.f,_.u,_.c.length,_.o,_.m),o+=16+T+(_.m?_.m.length:0)}return Iw(A,o,a.length,N,I),A}class hi{constructor(e,n="",a=[],o=[]){this.name=e,this.type=n,this.metadata=a,this.properties=o,this.children=[]}addMetadata(e,n){this.metadata.push({key:e,value:n})}addProperty(e,n=[]){this.properties.push({property:e,metadata:n})}addChild(e){this.children.push(e)}toString(e=0){const n="	".repeat(e),a=this.metadata.map(g=>{const _=g.key,v=g.value;if(Array.isArray(v)){const x=[];return x.push(`${_} = {`),v.forEach(b=>{x.push(`${n}		${b}`)}),x.push(`${n}	}`),x.join(`
`)}else return`${_} = ${v}`}),o=a.length?` (
${a.map(g=>`${n}	${g}`).join(`
`)}
${n})`:"",c=this.properties.map(g=>{const _=g.property.replace(/\n/g,`
`+n+"	"),v=g.metadata.length?` (
${g.metadata.map(x=>`${n}		${x}`).join(`
`)}
${n}	)`:"";return`${n}	${_}${v}`}),u=this.children.map(g=>g.toString(e+1)),h=[];if(c.length>0&&h.push(...c),u.length>0){c.length>0&&h.push("");for(let g=0;g<u.length;g++)h.push(u[g]),g<u.length-1&&h.push("")}const m=h.join(`
`),p=this.type?this.type+" ":"";return`${n}def ${p}"${this.name}"${o}
${n}{
${m}
${n}}`}}class Bw{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,n,a,o){this.parseAsync(e,o).then(n).catch(a)}async parseAsync(e,n={}){n=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},n);const a=new Set,o={},c="model.usda";o[c]=null;const u=Hw(e,n.animations);n.animationTracks=u;const h=new hi("Root","Xform"),m=new hi("Scenes","Scope");m.addMetadata("kind",'"sceneLibrary"'),h.addChild(m);const p="Scene",g=new hi(p,"Xform");g.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${p}"`]),g.addMetadata("sceneName",`"${p}"`),n.includeAnchoringProperties&&(g.addProperty(`token preliminary:anchoring:type = "${n.ar.anchoring.type}"`),g.addProperty(`token preliminary:planeAnchoring:alignment = "${n.ar.planeAnchoring.alignment}"`)),m.addChild(g);let _;const v={},x={};e.isScene?Nx(e,g,v,a,o,n):Lx(e,g,v,a,o,n);const b=Kw(v,x,n.quickLookCompatible),R=u.size>0?{fps:n.animationFrameRate,endTimeCode:Gw(n.animations)*n.animationFrameRate}:null;_=Ux(R)+`
`+h.toString()+`

`+b.toString(),o[c]=Fu(_),_=null;for(const M in x){let P=x[M];if(P.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");P=await this.textureUtils.decompress(P)}const L=zw(P.image,P.flipY,n.maxTextureSize),A=P.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",I=await new Promise(N=>L.toBlob(N,A));o[`textures/Texture_${M}.${Dx(P)}`]=new Uint8Array(await I.arrayBuffer())}let S=0;for(const M in o){const P=o[M],L=34+M.length;S+=L;const A=S&63;if(A!==4){const I=64-A,N=new Uint8Array(I);o[M]=[P,{extra:{12345:N}}]}S=P.length}return Fw(o,{level:0})}}function Cx(s,e){let n=s.name;return n=n.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(n)&&(n="_"+n),n===""&&(s.isCamera?n="Camera":n="Object"),e.has(n)&&(n=n+"_"+s.id),e.add(n),n}function Dx(s){return s.userData.mimeType==="image/jpeg"?"jpg":"png"}function zw(s,e,n){if(typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&s instanceof ImageBitmap){const a=n/Math.max(s.width,s.height),o=document.createElement("canvas");o.width=s.width*Math.min(1,a),o.height=s.height*Math.min(1,a);const c=o.getContext("2d");return e===!0&&(c.translate(0,o.height),c.scale(1,-1)),c.drawImage(s,0,0,o.width,o.height),o}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const Et=7;function Ux(s=null){return`#usda 1.0
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
`}function Hw(s,e){const n=new Map;for(let a=0;a<e.length;a++){const o=e[a];for(let c=0;c<o.tracks.length;c++){const u=o.tracks[c],h=It.parseTrackName(u.name),m=It.findNode(s,h.nodeName);if(m==null)continue;const p=h.propertyName;if(p!=="position"&&p!=="quaternion"&&p!=="scale")continue;let g=n.get(m);g===void 0&&(g={},n.set(m,g)),g[p]=u}}return n}function Gw(s){let e=0;for(let n=0;n<s.length;n++)s[n].duration>e&&(e=s[n].duration);return e}function R1(s,e,n,a){const o=n.times,c=n.values,u=[];for(let h=0;h<o.length;h++){const m=h*3;u.push(`${(o[h]*a).toPrecision(Et)}: (${c[m].toPrecision(Et)}, ${c[m+1].toPrecision(Et)}, ${c[m+2].toPrecision(Et)})`)}return`${e} ${s}.timeSamples = {
	${u.join(`,
	`)},
}`}function Vw(s,e){const n=s.times,a=s.values,o=[];for(let c=0;c<n.length;c++){const u=c*4;o.push(`${(n[c]*e).toPrecision(Et)}: (${a[u+3].toPrecision(Et)}, ${a[u].toPrecision(Et)}, ${a[u+1].toPrecision(Et)}, ${a[u+2].toPrecision(Et)})`)}return`quatf xformOp:orient.timeSamples = {
	${o.join(`,
	`)},
}`}function Nx(s,e,n,a,o,c){for(let u=0,h=s.children.length;u<h;u++)Lx(s.children[u],e,n,a,o,c)}function Lx(s,e,n,a,o,c){if(s.visible===!1&&c.onlyVisible===!0)return;let u;if(s.isMesh){const h=s.geometry,m=Array.isArray(s.material),p=m?s.material:[s.material];for(let _=0;_<p.length;_++){const v=p[_];v.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),v.uuid in n||(n[v.uuid]=v)}const g=p.map(_=>n[_.uuid]);if(m===!1){const _=`geometries/Geometry_${h.id}.usda`;if(!(_ in o)){const v=Ww(h);o[_]=Fu(Ux()+`
`+v.toString())}}u=kw(s,h,g,a,c)}else s.isCamera?u=$w(s,a,c):u=Ox(s,a,c);e.addChild(u),Nx(s,u,n,a,o,c)}function Px(s,e,n){const a=n.animationTracks.get(e),o=e.pivot!==null;if(!o&&a===void 0){const p=Xw(e.matrix);s.addProperty(`matrix4d xformOp:transform = ${p}`),s.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}const c=n.animationFrameRate,u=e.position,h=e.quaternion,m=e.scale;if(a!==void 0&&a.position!==void 0?s.addProperty(R1("xformOp:translate","float3",a.position,c)):s.addProperty(`float3 xformOp:translate = (${u.x.toPrecision(Et)}, ${u.y.toPrecision(Et)}, ${u.z.toPrecision(Et)})`),o){const p=e.pivot;s.addProperty(`float3 xformOp:translate:pivot = (${p.x.toPrecision(Et)}, ${p.y.toPrecision(Et)}, ${p.z.toPrecision(Et)})`)}a!==void 0&&a.quaternion!==void 0?s.addProperty(Vw(a.quaternion,c)):s.addProperty(`quatf xformOp:orient = (${h.w.toPrecision(Et)}, ${h.x.toPrecision(Et)}, ${h.y.toPrecision(Et)}, ${h.z.toPrecision(Et)})`),a!==void 0&&a.scale!==void 0?s.addProperty(R1("xformOp:scale","float3",a.scale,c)):s.addProperty(`float3 xformOp:scale = (${m.x.toPrecision(Et)}, ${m.y.toPrecision(Et)}, ${m.z.toPrecision(Et)})`),o?s.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):s.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function Ox(s,e,n){const a=Cx(s,e);s.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s);const o=new hi(a,"Xform");return Px(o,s,n),o}function kw(s,e,n,a,o){const c=Ox(s,a,o);return n.length===1?(c.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),c.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),c.addProperty(`rel material:binding = </Materials/Material_${n[0].id}>`)):c.addChild(Ix(e,n)),c}function Xw(s){const e=s.elements;return`( ${_u(e,0)}, ${_u(e,4)}, ${_u(e,8)}, ${_u(e,12)} )`}function _u(s,e){return`(${s[e+0]}, ${s[e+1]}, ${s[e+2]}, ${s[e+3]})`}function Ww(s){const e=new hi("Geometry"),n=Ix(s);return e.addChild(n),e}function Ix(s,e=null){const n="Geometry",a=s.attributes,o=a.position.count,c=new hi(n,"Mesh");c.addProperty(`int[] faceVertexCounts = [${qw(s)}]`),c.addProperty(`int[] faceVertexIndices = [${Yw(s)}]`),c.addProperty(`normal3f[] normals = [${Hd(a.normal,o)}]`,['interpolation = "vertex"']),c.addProperty(`point3f[] points = [${Hd(a.position,o)}]`);for(let h=0;h<4;h++){const m=h>0?h:"",p=a["uv"+m];p!==void 0&&c.addProperty(`texCoord2f[] primvars:st${m} = [${Zw(p)}]`,['interpolation = "vertex"'])}const u=a.color;if(u!==void 0&&c.addProperty(`color3f[] primvars:displayColor = [${Hd(u,o)}]`,['interpolation = "vertex"']),c.addProperty('uniform token subdivisionScheme = "none"'),e!==null){const h=s.groups,m=(s.index!==null?s.index.count:a.position.count)/3;for(let p=0;p<h.length;p++){const g=h[p],_=e[g.materialIndex];if(_===void 0)continue;const v=Math.floor(g.start/3),x=Math.min(v+Math.floor(g.count/3),m),b=[];for(let S=v;S<x;S++)b.push(S);const R=new hi(`subset_${p}`,"GeomSubset");R.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),R.addProperty('uniform token elementType = "face"'),R.addProperty('uniform token familyName = "materialBind"'),R.addProperty(`int[] indices = [${b.join(", ")}]`),R.addProperty(`rel material:binding = </Materials/Material_${_.id}>`),c.addChild(R)}}return c}function qw(s){const e=s.index!==null?s.index.count:s.attributes.position.count;return Array(e/3).fill(3).join(", ")}function Yw(s){const e=s.index,n=[];if(e!==null)for(let a=0;a<e.count;a++)n.push(e.getX(a));else{const a=s.attributes.position.count;for(let o=0;o<a;o++)n.push(o)}return n.join(", ")}function Hd(s,e){if(s===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const n=[];for(let a=0;a<s.count;a++){const o=s.getX(a),c=s.getY(a),u=s.getZ(a);n.push(`(${o.toPrecision(Et)}, ${c.toPrecision(Et)}, ${u.toPrecision(Et)})`)}return n.join(", ")}function Zw(s){const e=[];for(let n=0;n<s.count;n++){const a=s.getX(n),o=s.getY(n);e.push(`(${a.toPrecision(Et)}, ${1-o.toPrecision(Et)})`)}return e.join(", ")}function Kw(s,e,n=!1){const a=new hi("Materials");for(const o in s){const c=s[o];a.addChild(Qw(c,e,n))}return a}function Qw(s,e,n=!1){const a=new hi(`Material_${s.id}`,"Material");function o(u,h,m){const p=u.source.id+"_"+u.flipY;e[p]=u;const g=u.channel>0?"st"+u.channel:"st",_={1e3:"repeat",1001:"clamp",1002:"mirror"},v=u.repeat.clone(),x=u.offset.clone(),b=u.rotation,R=Math.sin(b),S=Math.cos(b);x.y=1-x.y-v.y,n?(x.x=x.x/v.x,x.y=x.y/v.y,x.x+=R/v.x,x.y+=S-1):(x.x+=R*v.x,x.y+=(1-S)*v.y);const M=new hi(`PrimvarReader_${h}`,"Shader");M.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),M.addProperty("float2 inputs:fallback = (0.0, 0.0)"),M.addProperty(`string inputs:varname = "${g}"`),M.addProperty("float2 outputs:result");const P=new hi(`Transform2d_${h}`,"Shader");P.addProperty('uniform token info:id = "UsdTransform2d"'),P.addProperty(`float2 inputs:in.connect = </Materials/Material_${s.id}/PrimvarReader_${h}.outputs:result>`),P.addProperty(`float inputs:rotation = ${(b*(180/Math.PI)).toFixed(Et)}`),P.addProperty(`float2 inputs:scale = ${D1(v)}`),P.addProperty(`float2 inputs:translation = ${D1(x)}`),P.addProperty("float2 outputs:result");const L=new hi(`Texture_${u.id}_${h}`,"Shader");if(L.addProperty('uniform token info:id = "UsdUVTexture"'),L.addProperty(`asset inputs:file = @textures/Texture_${p}.${Dx(u)}@`),L.addProperty(`float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${h}.outputs:result>`),m!==void 0){const A=h==="diffuse"?s.opacity:1;L.addProperty(`float4 inputs:scale = ${jw(m,A)}`)}if(h==="normal"){const A=s.normalScale.x;L.addProperty(`float4 inputs:scale = (${2*A}, ${2*A}, 2, 1)`),L.addProperty(`float4 inputs:bias = (${-A}, ${-A}, -1, 0)`)}return L.addProperty(`token inputs:sourceColorSpace = "${u.colorSpace===Ki?"raw":"sRGB"}"`),L.addProperty(`token inputs:wrapS = "${_[u.wrapS]}"`),L.addProperty(`token inputs:wrapT = "${_[u.wrapT]}"`),L.addProperty("float outputs:r"),L.addProperty("float outputs:g"),L.addProperty("float outputs:b"),L.addProperty("float3 outputs:rgb"),(s.transparent||s.alphaTest>0)&&L.addProperty("float outputs:a"),[M,P,L]}s.side===Zi&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",s);const c=new hi("PreviewSurface","Shader");if(c.addProperty('uniform token info:id = "UsdPreviewSurface"'),s.map!==null?(c.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`),s.transparent?c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`):s.alphaTest>0&&(c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`),c.addProperty(`float inputs:opacityThreshold = ${s.alphaTest}`)),o(s.map,"diffuse",s.color).forEach(h=>a.addChild(h))):c.addProperty(`color3f inputs:diffuseColor = ${C1(s.color)}`),s.emissive){const u=s.emissiveIntensity??1;if(s.emissiveMap){c.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`);const h=new it(s.emissive.r*u,s.emissive.g*u,s.emissive.b*u);o(s.emissiveMap,"emissive",h).forEach(p=>a.addChild(p))}else s.emissive.getHex()>0&&c.addProperty(`color3f inputs:emissiveColor = ${C1(s.emissive)}`)}if(s.normalMap&&(c.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`),o(s.normalMap,"normal").forEach(h=>a.addChild(h))),s.aoMap){c.addProperty(`float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`);const u=s.aoMapIntensity??1,h=new it(u,u,u);o(s.aoMap,"occlusion",h).forEach(p=>a.addChild(p))}if(s.roughnessMap){c.addProperty(`float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`);const u=new it(s.roughness,s.roughness,s.roughness);o(s.roughnessMap,"roughness",u).forEach(m=>a.addChild(m))}else c.addProperty(`float inputs:roughness = ${s.roughness??1}`);if(s.metalnessMap){c.addProperty(`float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`);const u=new it(s.metalness,s.metalness,s.metalness);o(s.metalnessMap,"metallic",u).forEach(m=>a.addChild(m))}else c.addProperty(`float inputs:metallic = ${s.metalness??0}`);if(s.alphaMap?(c.addProperty(`float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`),c.addProperty("float inputs:opacityThreshold = 0.0001"),o(s.alphaMap,"opacity").forEach(h=>a.addChild(h))):c.addProperty(`float inputs:opacity = ${s.opacity}`),s.isMeshPhysicalMaterial){if(s.clearcoatMap!==null){c.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatMap.id}_clearcoat.outputs:r>`);const u=new it(s.clearcoat,s.clearcoat,s.clearcoat);o(s.clearcoatMap,"clearcoat",u).forEach(m=>a.addChild(m))}else c.addProperty(`float inputs:clearcoat = ${s.clearcoat}`);if(s.clearcoatRoughnessMap!==null){c.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${s.id}/Texture_${s.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);const u=new it(s.clearcoatRoughness,s.clearcoatRoughness,s.clearcoatRoughness);o(s.clearcoatRoughnessMap,"clearcoatRoughness",u).forEach(m=>a.addChild(m))}else c.addProperty(`float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`);c.addProperty(`float inputs:ior = ${s.ior}`)}return c.addProperty("int inputs:useSpecularWorkflow = 0"),c.addProperty("token outputs:surface"),a.addChild(c),a.addProperty(`token outputs:surface.connect = </Materials/Material_${s.id}/PreviewSurface.outputs:surface>`),a}function C1(s){return`(${s.r}, ${s.g}, ${s.b})`}function jw(s,e=1){return`(${s.r}, ${s.g}, ${s.b}, ${e})`}function D1(s){return`(${s.x}, ${s.y})`}function $w(s,e,n){const a=Cx(s,e);s.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s);const o=new hi(a,"Camera");Px(o,s,n);const c=s.isOrthographicCamera?"orthographic":"perspective";o.addProperty(`token projection = "${c}"`);const u=`(${s.near.toPrecision(Et)}, ${s.far.toPrecision(Et)})`;o.addProperty(`float2 clippingRange = ${u}`);let h;s.isOrthographicCamera?h=((Math.abs(s.left)+Math.abs(s.right))*10).toPrecision(Et):h=s.getFilmWidth().toPrecision(Et),o.addProperty(`float horizontalAperture = ${h}`);let m;if(s.isOrthographicCamera?m=((Math.abs(s.top)+Math.abs(s.bottom))*10).toPrecision(Et):m=s.getFilmHeight().toPrecision(Et),o.addProperty(`float verticalAperture = ${m}`),s.isPerspectiveCamera){const p=s.getFocalLength().toPrecision(Et);o.addProperty(`float focalLength = ${p}`);const g=s.focus.toPrecision(Et);o.addProperty(`float focusDistance = ${g}`)}return o}const Jw={AgX:co,ACES:zu,Neutral:Hu},xu=5.4,eR=72,U1=new it(16777215),tR=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,nR=s=>1-Math.pow(1-s,3),iR={uniforms:{tDiffuse:{value:null},uAmount:{value:.08},uTime:{value:0}},vertexShader:`
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
  `};class aR{constructor(e){this.host=e;const n=e.clientWidth||window.innerWidth,a=e.clientHeight||window.innerHeight;this.renderer=new BA({antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(n,a),this.renderer.toneMapping=co,this.renderer.toneMappingExposure=1.1,e.appendChild(this.renderer.domElement),this.renderer.xr.enabled=!0,this.scene=new j1,this.scene.background=this.background,this.camera=new Ai(38,n/a,.1,200);{const x=new $(...Ru.camera),b=new $(...Ru.target);x.sub(b).multiplyScalar(.56).add(b),this.camera.position.copy(x),this.defaultCamPos.copy(x)}const o=new L0(this.renderer),c=o.fromScene(new JA,.04).texture;this.scene.environment=c,o.dispose();const u=new Dd(8377599,1.1);u.position.set(-4,2.5,-3);const h=new Dd(16751317,.9);h.position.set(4.5,-1.5,-2.5);const m=new Dd(16777215,.7);m.position.set(1.5,3,4),this.scene.add(u,h,m),this.surface=new xw;const p=_w(this.surface.texture);this.holoMaterial=p.material,this.holoUniforms=p.uniforms;const g=this.renderer.capabilities.getMaxAnisotropy();this.holoMaterial.roughnessMap&&(this.holoMaterial.roughnessMap.anisotropy=g),this.surface.texture.anisotropy=g,this.clothMesh=new En(void 0,this.holoMaterial),this.clothMesh.frustumCulled=!1,this.clothMesh.visible=!1,this.buildCloth(1),this.scene.add(this.clothMesh);const _=this.renderer.domElement;_.addEventListener("pointerdown",this.onPointerDown),_.addEventListener("pointermove",this.onPointerMove),_.addEventListener("pointerup",this.onPointerUp),_.addEventListener("pointercancel",this.onPointerUp),_.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onWindowBlur),this.controls=new HA(this.camera,_),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=1.6,this.controls.maxDistance=30,this.controls.target.set(...Ru.target),this.controls.update();const v=new Xn(n,a,{samples:8,type:ni});this.composer=new aw(this.renderer,v),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer.addPass(new sw(this.scene,this.camera)),this.dofPass=new Sw(this.scene,this.camera),this.dofPass.enabled=!1,this.composer.addPass(this.dofPass),this.bloomPass=new po(new Ze(n,a),.18,.85,1),this.composer.addPass(this.bloomPass),this.composer.addPass(new ow),this.grainPass=new _x(iR),this.composer.addPass(this.grainPass),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(e),this.renderer.setAnimationLoop(this.tick)}host;renderer;scene;camera;controls;composer;bloomPass;dofPass;grainPass;cavityAttr;sim;clothMesh;clothGeometry;holoUniforms;holoMaterial;surface;bumpSource=null;thumbCache=new WeakMap;perfProfile="High";clothSegments=eR;camRaf=0;gestureRaf=0;defaultCamPos=new $;arSavedScale=1;arSavedPos=new $;bgBackup=null;onARChange=null;currentPR=Math.min(window.devicePixelRatio,2);background=new it("#0b0c12");clock=new G2;elapsed=0;raycaster=new H2;pointerNdc=new Ze;dragPlane=new za;grabbing=!1;grabPointerId=null;draggingDecal=!1;decalGrabOffset={u:0,v:0};pickingFocus=!1;focusVertex=null;pickReleaseId=null;spaceHeld=!1;focusTmp=new $;editMode=!1;prevUseImage=!1;hoverCursor="default";resizeObserver;params=null;disposed=!1;onDecalSelect=null;onImagesChanged=null;clothAspect=1;buildCloth(e){this.clothAspect=e;const n=e>=1?xu:xu*e,a=e>=1?xu/e:xu,o=this.clothSegments,c=e>=1?o:Math.max(10,Math.round(o*e)),u=e>=1?Math.max(10,Math.round(o/e)):o;this.sim=new hw(n,a,c,u);const h=new Ll(n,a,c,u),m=new Di(this.sim.positions,3);m.setUsage(m_),h.setAttribute("position",m),this.cavityAttr=new Di(new Float32Array(this.sim.count),1),this.cavityAttr.setUsage(m_),h.setAttribute("aCavity",this.cavityAttr),h.computeVertexNormals();const p=this.clothMesh.geometry;this.clothMesh.geometry=h,this.clothGeometry=h,p&&p.dispose(),this.holoUniforms.uClothSize.value.set(n,a),this.focusVertex=null,this.cancelInteraction()}cancelInteraction(){this.grabPointerId!==null&&this.renderer.domElement.hasPointerCapture(this.grabPointerId)&&this.renderer.domElement.releasePointerCapture(this.grabPointerId),this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls&&(this.controls.enabled=!0)}applyParams(e){this.params=e,e.performance!==this.perfProfile&&this.applyPerfProfile(e.performance);const n=this.holoMaterial;n.color.set(e.material.baseColor),n.roughness=e.material.roughness,n.metalness=e.material.metalness,n.clearcoat=e.material.clearcoat,n.clearcoatRoughness=e.material.coatRoughness,n.sheen=e.material.sheen,n.sheenColor.set(e.material.baseColor).lerp(U1,.5),n.iridescence=0,n.normalScale.set(e.material.bump,e.material.bump),n.normalMap&&n.normalMap.repeat.set(e.material.bumpTiling,e.material.bumpTiling),this.scene.environmentIntensity=e.render.environment;const a=this.holoUniforms;a.uHoloIntensity.value=0,a.uSparkle.value=0,a.uSpecTint.value=0,a.uSaturation.value=0;const o=e.images??{opacity:1,cornerRadius:0,edit:!1,useImage:!1,scale:0,rotation:0};a.uSurfaceOpacity.value=o.opacity,a.uCornerRound.value=o.cornerRadius,this.background.set(e.render.background),this.renderer.toneMappingExposure=e.render.exposure;const c=Jw[e.render.toneMapping]??co;this.renderer.toneMapping!==c&&(this.renderer.toneMapping=c),this.bloomPass.strength=e.render.bloom,this.bloomPass.threshold=e.render.bloomThreshold,this.grainPass.uniforms.uAmount.value=e.render.noise,a.uCavityAmount.value=e.render.occlusion?e.render.occlusionStrength:0,this.dofPass.enabled=e.render.dof,this.dofPass.setParams(e.render.dofAperture*.01,e.render.dofBlur,e.render.dofRange*.5),this.editMode=o.edit,this.controls.enableZoom=!this.editMode,this.prevUseImage&&!o.useImage&&this.surface.clothImage&&this.removeClothImage(),this.prevUseImage=o.useImage;const u=this.surface.selected;u&&(u.scale!==o.scale||u.rotation!==o.rotation)&&(u.scale=o.scale,u.rotation=o.rotation,this.surface.redraw())}applyFabric(e){const n=this.holoMaterial.normalMap,a=mw(e);if(a.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.params){const o=this.params.material.bumpTiling;a.repeat.set(o,o)}this.holoMaterial.normalMap=a,this.holoMaterial.needsUpdate=!0,n&&n.dispose()}resetCloth(){this.sim.reset(),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals()}setColor(e){this.holoMaterial.color.set(e),this.holoMaterial.sheenColor.set(e).lerp(U1,.5)}patternTex=null;setPattern(e){this.patternTex&&this.patternTex!==e&&this.patternTex.dispose(),this.patternTex=e,e?(e.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=e,this.holoUniforms.uSurfaceOpacity.value=1):this.holoUniforms.uSurfaceMap.value=this.surface.texture}setSlideOffset(e){this.clothMesh.position.x=e}getSlideOffset(){return this.clothMesh.position.x}async startAR(e){const n=navigator.xr;if(!n)return!1;try{if(!await n.isSessionSupported("immersive-ar"))return!1;const a=await n.requestSession("immersive-ar",{optionalFeatures:["dom-overlay","local-floor"],domOverlay:{root:e}});return await this.renderer.xr.setSession(a),this.arSavedPos.copy(this.clothMesh.position),this.arSavedScale=this.clothMesh.scale.x,this.clothMesh.scale.setScalar(.12),this.clothMesh.position.set(0,1.1,-.9),this.bgBackup=this.scene.background,this.scene.background=null,this.onARChange?.(!0),a.addEventListener("end",this.handleAREnd),!0}catch{return!1}}endAR(){this.renderer.xr.getSession()?.end()}handleAREnd=()=>{this.scene.background=this.bgBackup,this.clothMesh.scale.setScalar(this.arSavedScale),this.clothMesh.position.copy(this.arSavedPos),this.camera.position.copy(this.defaultCamPos),this.controls.update(),this.onARChange?.(!1)};async exportUSDZ(){const e=this.clothMesh.clone();e.geometry=this.clothGeometry.clone(),e.position.set(0,0,0),e.scale.setScalar(.12);const n=new Bw;return n.parseAsync?await n.parseAsync(e):await n.parse(e)}getRenderStats(){const e=this.renderer.info;return{calls:e.render.calls,triangles:e.render.triangles,geometries:e.memory.geometries,textures:e.memory.textures,programs:e.programs?.length??0,clothVerts:this.sim.count,segments:this.clothSegments,pixelRatio:this.currentPR}}animateCam(e,n){cancelAnimationFrame(this.camRaf),this.controls.enableDamping=!1;const a=performance.now(),o=c=>{const u=Math.min(1,(c-a)/n);e(u),this.controls.update(),u<1?this.camRaf=requestAnimationFrame(o):this.controls.enableDamping=!0};this.camRaf=requestAnimationFrame(o)}zoomTo(e,n=650){const a=this.controls.target,o=this.camera.position.clone(),c=a.clone().add(this.defaultCamPos.clone().sub(a).multiplyScalar(e));this.animateCam(u=>this.camera.position.lerpVectors(o,c,tR(u)),n)}spin(e=1500){const n=this.controls.target.clone(),a=this.camera.position.clone(),o=a.x-n.x,c=a.z-n.z;this.animateCam(u=>{const h=Math.sin(u*Math.PI)*.6,m=Math.sin(h),p=Math.cos(h);this.camera.position.set(n.x+o*p-c*m,a.y,n.z+o*m+c*p)},e)}demoStretch(){cancelAnimationFrame(this.gestureRaf);const e=this.sim,n=Math.floor(e.cols/2),o=Math.floor(e.rows/2)*e.cols+n,c=new $(e.positions[o*3],e.positions[o*3+1],e.positions[o*3+2]),u=Math.max(e.width,e.height)*.55;if(!e.startGrab(c,u))return;const h=this.camera.position.clone().sub(c).normalize().multiplyScalar(1.1);h.y-=.4;const m=performance.now(),p=520,g=360,_=v=>{const x=v-m;x<p?(e.moveGrab(c.clone().add(h.clone().multiplyScalar(nR(x/p)))),this.gestureRaf=requestAnimationFrame(_)):x<p+g?this.gestureRaf=requestAnimationFrame(_):e.endGrab()};this.gestureRaf=requestAnimationFrame(_)}poke(){this.sim.poke(1)}addDecal(e){const n=this.surface.addDecal(e);this.onDecalSelect?.(n.scale,n.rotation),this.onImagesChanged?.()}setClothImage(e){const n=e.naturalWidth||e.width||1,a=e.naturalHeight||e.height||1,o=Math.min(3,Math.max(1/3,n/a));this.surface.setClothImage(e),this.surface.setAspect(o)&&this.rebindSurfaceTexture(),this.buildCloth(o),this.onImagesChanged?.()}clearImages(){this.surface.clear(),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}removeClothImage(){this.surface.setClothImage(null),this.surface.setAspect(1)&&this.rebindSurfaceTexture(),this.buildCloth(1),this.onImagesChanged?.()}get hasClothImage(){return this.surface.clothImage!==null}reveal(){this.clothMesh.visible=!0}thumbnailOf(e){let n=this.thumbCache.get(e);if(n)return n;const a=e.naturalWidth||e.width||1,o=e.naturalHeight||e.height||1,c=96/Math.max(a,o),u=document.createElement("canvas");return u.width=Math.max(1,Math.round(a*c)),u.height=Math.max(1,Math.round(o*c)),u.getContext("2d").drawImage(e,0,0,u.width,u.height),n=u.toDataURL("image/png"),this.thumbCache.set(e,n),n}getClothThumbnail(){return this.surface.clothImage?this.thumbnailOf(this.surface.clothImage):null}getDecalThumbnails(){return this.surface.decals.map(e=>this.thumbnailOf(e.img))}removeDecal(e){const n=this.surface.decals[e];n&&(this.surface.decals.splice(e,1),this.surface.selected===n&&(this.surface.selected=null),this.surface.redraw(),this.onImagesChanged?.())}snapshotImages(){return{clothImage:this.surface.clothImage,decals:this.surface.decals.map(e=>({...e}))}}restoreImages(e){this.surface.clothImage=e.clothImage,this.surface.decals=e.decals.map(a=>({...a})),this.surface.selected=null;let n=1;if(e.clothImage){const a=e.clothImage.naturalWidth||e.clothImage.width||1,o=e.clothImage.naturalHeight||e.clothImage.height||1;n=Math.min(3,Math.max(1/3,a/o))}this.surface.setAspect(n)&&this.rebindSurfaceTexture(),n!==this.clothAspect&&this.buildCloth(n),this.onImagesChanged?.()}applyPerfProfile(e){this.perfProfile=e;const n=window.devicePixelRatio;this.currentPR=e==="Low"?1:e==="Medium"?Math.min(n,1.5):Math.min(n,2);const a=e==="Low"?0:e==="Medium"?4:8,o=e==="Low"?36:e==="Medium"?52:72,c=this.host.clientWidth||window.innerWidth,u=this.host.clientHeight||window.innerHeight;this.renderer.setPixelRatio(this.currentPR),this.renderer.setSize(c,u),this.composer.setPixelRatio(this.currentPR),this.composer.renderTarget1.samples=a,this.composer.renderTarget2.samples=a,this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer.setSize(c,u),o!==this.clothSegments&&(this.clothSegments=o,this.buildCloth(this.clothAspect))}setBumpMap(e){const n=this.holoMaterial.normalMap;let a=null;if(e){a=gw(e),a.anisotropy=this.renderer.capabilities.getMaxAnisotropy();const o=this.params?.material.bumpTiling??3;a.repeat.set(o,o)}this.bumpSource=e,this.holoMaterial.normalMap=a,!!n!=!!a&&(this.holoMaterial.needsUpdate=!0),n&&n.dispose(),this.onImagesChanged?.()}get hasBumpMap(){return this.bumpSource!==null}getBumpThumbnail(){return this.bumpSource?this.thumbnailOf(this.bumpSource):null}rebindSurfaceTexture(){this.surface.texture.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.holoUniforms.uSurfaceMap.value=this.surface.texture}exportPNG(e=!1){const n=this.host.clientWidth||window.innerWidth,a=this.host.clientHeight||window.innerHeight,o=this.currentPR,c=Math.min(4,Math.max(2,3200/Math.max(n,a)));e&&(this.scene.background=null,this.renderer.setClearColor(0,0)),this.renderer.setPixelRatio(c),this.composer.setPixelRatio(c),this.renderer.setSize(n,a),this.composer.setSize(n,a),this.composer.render();const u=this.renderer.domElement.toDataURL("image/png");e&&(this.scene.background=this.background,this.renderer.setClearColor(0,1)),this.renderer.setPixelRatio(o),this.composer.setPixelRatio(o),this.renderer.setSize(n,a),this.composer.setSize(n,a);const h=document.createElement("a");h.href=u;const m=e?"holocloth-nobg":"holocloth";h.download=`${m}-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,h.click()}updatePointer(e){const n=this.renderer.domElement.getBoundingClientRect();this.pointerNdc.set((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1)}raycastCloth(){this.raycaster.setFromCamera(this.pointerNdc,this.camera),this.clothGeometry.computeBoundingSphere();const e=this.raycaster.intersectObject(this.clothMesh,!1);return e.length>0?e[0]:null}startPickFocus(){this.pickingFocus=!0,this.renderer.domElement.style.cursor="crosshair"}clearPickFocus(){this.focusVertex=null}onKeyDown=e=>{if(e.code!=="Space"||e.repeat)return;const n=e.target;n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)||(e.preventDefault(),this.spaceHeld=!0,this.controls.mouseButtons.LEFT=Ga.PAN,!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&(this.renderer.domElement.style.cursor="grab"))};onKeyUp=e=>{e.code==="Space"&&(this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Ga.ROTATE)};onWindowBlur=()=>{this.spaceHeld=!1,this.controls.mouseButtons.LEFT=Ga.ROTATE};onPointerDown=e=>{if(e.button!==0||this.grabbing||this.draggingDecal)return;if(this.updatePointer(e),this.pickingFocus){this.pickingFocus=!1,this.renderer.domElement.style.cursor="default";const c=this.raycastCloth();if(c){const u=this.sim.positions;let h=0,m=1/0;for(let p=0;p<this.sim.count;p++){const g=u[p*3]-c.point.x,_=u[p*3+1]-c.point.y,v=u[p*3+2]-c.point.z,x=g*g+_*_+v*v;x<m&&(m=x,h=p)}this.focusVertex=h}this.pickReleaseId=e.pointerId,this.controls.enabled=!1;return}if(this.spaceHeld)return;const n=this.raycastCloth();if(!n)return;if(this.editMode){if(!n.uv)return;const c=this.surface.hitTest(n.uv.x,n.uv.y);if(!c)return;this.surface.selected=c,this.draggingDecal=!0,this.decalGrabOffset.u=c.u-n.uv.x,this.decalGrabOffset.v=c.v-n.uv.y,this.grabPointerId=e.pointerId,this.controls.enabled=!1,this.renderer.domElement.setPointerCapture(e.pointerId),this.renderer.domElement.style.cursor="move",this.onDecalSelect?.(c.scale,c.rotation);return}const a=this.params?.physics.grabRadius??.45;if(!this.sim.startGrab(n.point,a))return;this.grabbing=!0,this.grabPointerId=e.pointerId,this.controls.enabled=!1;const o=new $;this.camera.getWorldDirection(o),this.dragPlane.setFromNormalAndCoplanarPoint(o,n.point),this.renderer.domElement.setPointerCapture(e.pointerId),this.renderer.domElement.style.cursor="grabbing"};onPointerMove=e=>{if((this.grabbing||this.draggingDecal)&&e.pointerId!==this.grabPointerId)return;if(this.updatePointer(e),this.draggingDecal){const o=this.raycastCloth(),c=this.surface.selected;o?.uv&&c&&(c.u=o.uv.x+this.decalGrabOffset.u,c.v=o.uv.y+this.decalGrabOffset.v,this.surface.redraw());return}if(!this.grabbing)return;this.raycaster.setFromCamera(this.pointerNdc,this.camera);const a=new $;this.raycaster.ray.intersectPlane(this.dragPlane,a)&&this.sim.moveGrab(a)};onPointerUp=e=>{if(e.pointerId===this.pickReleaseId){this.pickReleaseId=null,this.controls.enabled=!0;return}!(this.grabbing||this.draggingDecal)||e.pointerId!==this.grabPointerId||(this.grabbing=!1,this.draggingDecal=!1,this.grabPointerId=null,this.sim.endGrab(),this.controls.enabled=!0,this.renderer.domElement.hasPointerCapture(e.pointerId)&&this.renderer.domElement.releasePointerCapture(e.pointerId),this.renderer.domElement.style.cursor=this.hoverCursor)};onWheel=e=>{if(!this.editMode)return;const n=this.surface.selected;n&&(e.preventDefault(),e.stopImmediatePropagation(),n.scale=Z1.clamp(n.scale*Math.exp(-e.deltaY*.0012),.02,2.5),this.surface.redraw(),this.onDecalSelect?.(n.scale,n.rotation))};onResize(){const e=this.host.clientWidth||window.innerWidth,n=this.host.clientHeight||window.innerHeight;e===0||n===0||(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.composer.setSize(e,n))}tick=()=>{if(this.disposed)return;const e=this.clock.getDelta();if(this.elapsed+=e,this.grainPass.uniforms.uTime.value=this.elapsed%61.7,this.params&&(this.sim.step(e,this.params.physics),this.clothGeometry.attributes.position.needsUpdate=!0,this.clothGeometry.computeVertexNormals()),this.params?.render.occlusion&&(this.sim.computeCavity(this.clothGeometry.attributes.normal.array,this.cavityAttr.array),this.cavityAttr.needsUpdate=!0),this.params?.render.dof){let n;if(this.focusVertex!==null&&this.focusVertex<this.sim.count){const a=this.sim.positions,o=this.focusVertex*3;this.focusTmp.set(a[o],a[o+1],a[o+2]),n=this.camera.position.distanceTo(this.focusTmp)}else n=this.camera.position.distanceTo(this.controls.target);this.dofPass.setFocus(n)}if(this.renderer.xr.isPresenting){this.renderer.render(this.scene,this.camera);return}if(!this.grabbing&&!this.draggingDecal&&!this.pickingFocus&&!this.spaceHeld&&this.perfProfile!=="Low"){const n=this.raycastCloth();let a="default";n&&(a=this.editMode?n.uv&&this.surface.hitTest(n.uv.x,n.uv.y)?"move":"default":"grab"),a!==this.hoverCursor&&(this.hoverCursor=a,this.renderer.domElement.style.cursor=a)}this.controls.update(),this.composer.render()};dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),this.resizeObserver.disconnect();const e=this.renderer.domElement;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointercancel",this.onPointerUp),e.removeEventListener("wheel",this.onWheel),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.controls.dispose(),this.dofPass.dispose(),this.composer.dispose(),this.clothGeometry.dispose(),this.holoMaterial.dispose(),this.surface.dispose(),this.scene.traverse(n=>{const a=n;a.geometry&&a.geometry!==this.clothGeometry&&a.geometry.dispose()}),this.renderer.dispose(),e.remove()}}const Ci=["Nulu","Luon","Luxtreme","Everlux","Warpstreme"],Rn={Nulu:{label:"Nulu",blurb:"Buttery-soft, lightweight knit. Matte, next-to-nothing drape.",material:{finish:"Matte",baseColor:"#c9c4bf",roughness:.88,metalness:0,clearcoat:0,coatRoughness:.9,sheen:.28,bump:.6,bumpTiling:6},physics:{viscosity:.5,stiffness:.45,iterations:12,smoothing:.12,grabRadius:.3},weave:{type:"knit",threads:96,strength:1,seed:11}},Luon:{label:"Luon",blurb:"The original: cottony-soft, structured, medium-weight knit.",material:{finish:"Matte",baseColor:"#2c313a",roughness:.76,metalness:0,clearcoat:.05,coatRoughness:.75,sheen:.2,bump:.95,bumpTiling:5},physics:{viscosity:.42,stiffness:.7,iterations:12,smoothing:.07,grabRadius:.27},weave:{type:"knit",threads:72,strength:1.35,seed:22}},Luxtreme:{label:"Luxtreme",blurb:"Slick, cool-to-touch performance knit. Satin sheen, lively.",material:{finish:"Matte",baseColor:"#33435f",roughness:.58,metalness:0,clearcoat:.03,coatRoughness:.6,sheen:.38,bump:.3,bumpTiling:8},physics:{viscosity:.24,stiffness:.82,iterations:13,smoothing:.03,grabRadius:.27},weave:{type:"knit",threads:120,strength:.7,seed:33}},Everlux:{label:"Everlux",blurb:"Thicker double-knit. Springy shape retention, textured hand.",material:{finish:"Matte",baseColor:"#454851",roughness:.6,metalness:0,clearcoat:.1,coatRoughness:.6,sheen:.32,bump:1.15,bumpTiling:4},physics:{viscosity:.34,stiffness:.9,iterations:14,smoothing:.09,grabRadius:.27},weave:{type:"knit",threads:56,strength:1.6,seed:44}},Warpstreme:{label:"Warpstreme",blurb:"Finely woven, structured & wrinkle-resistant. Holds its shape.",material:{finish:"Matte",baseColor:"#21252c",roughness:.72,metalness:0,clearcoat:0,coatRoughness:.6,sheen:.2,bump:.5,bumpTiling:7},physics:{viscosity:.3,stiffness:1,iterations:14,smoothing:.15,grabRadius:.26},weave:{type:"woven",threads:110,strength:.9,seed:55}}},N1="Nulu",Gd=["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it coats the fibers and kills sweat-wicking.","Hang or lay flat to dry; avoid the dryer to protect the stretch.","Keep away from Velcro, zippers and denim to avoid snags and pilling."],kn={Nulu:{meaning:'"Naked" lu — the softest, lightest fabric lululemon makes. The "nu" is for nude / next-to-nothing.',feel:"Buttery-soft and weightless with a matte finish and gentle four-way stretch. No compression — it feels like a second skin.",bestFor:["Yoga","Pilates","Barre","Stretching","Lounging","Travel & errands"],notFor:"High-sweat or high-impact workouts — it offers no compression and can pill under friction.",care:["Machine wash cold, inside out, with other soft synthetics.","Skip fabric softener — it clogs the fibers.","Hang or lay flat to dry; never tumble dry.","Prone to pilling — keep away from Velcro, zippers and denim."],products:[{name:'Align High-Rise Pant 25"',price:"$98",url:"https://shop.lululemon.com/c/women-align-leggings/n1esuuzudsq"},{name:"Align Tank Top",price:"$68",url:"https://shop.lululemon.com/c/women-align-clothes/n14uwkzesuu"},{name:"Groove Nulu Flared Pant",price:"$128",url:"https://shop.lululemon.com/c/women-align-pants/n1esuuzqd1q"}],affinity:{activity:{yoga:3,run:-2,studio:0,everyday:1},sweat:{low:3,med:0,high:-2},feel:{soft:3,smooth:0,structured:-1,cushioned:0},care:{easy:-1,ok:2}}},Luon:{meaning:'The original lululemon fabric — the knit that launched the brand. Simply "lu" + "on".',feel:"Cottony-soft but more structured than Nulu: medium-weight, lightly holding, with a matte look.",bestFor:["Yoga","Barre","Dance","Low–medium impact","Layering","Casual"],notFor:"Running or spin — the cottony knit can pill under repeated friction.",care:Gd,products:[{name:"Wunder Under Luon High-Rise Tight",price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:"Classic Luon layering tops",price:"from $68",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:2,run:-1,studio:1,everyday:1},sweat:{low:2,med:1,high:-1},feel:{soft:2,smooth:0,structured:0,cushioned:1},care:{easy:0,ok:1}}},Luxtreme:{meaning:`"Luxe" + "extreme" — lululemon's first performance fabric, built for runners back in 2008.`,feel:"Slick and cool-to-touch, compressive and supportive with a subtle sheen. Sweat-wicking and quick-drying.",bestFor:["Running","HIIT","Cycling / spin","High-impact training"],notFor:"Gentle lounging if you dislike compression — it's a firmer, hold-you-in feel.",care:Gd,products:[{name:'Wunder Under Full-On Luxtreme Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-under-leggings/n15qs9zudsq"},{name:'Wunder Under Luxtreme Tight 28"',price:"$98",url:"https://shop.lululemon.com/c/women-leggings/n1udsq"}],affinity:{activity:{yoga:-1,run:3,studio:2,everyday:0},sweat:{low:-1,med:1,high:3},feel:{soft:0,smooth:3,structured:1,cushioned:0},care:{easy:1,ok:0}}},Everlux:{meaning:'"Ever" (endure) + "lux" — a 2017 studio fabric made for sweaty, mid-to-high-intensity workouts.',feel:"Fast-drying and cool against the skin, with a cushioned double-knit body and springy shape retention.",bestFor:["Studio & HIIT","Spin","Cardio classes","Hot workouts","Strength training"],notFor:"Nothing much — it's the most versatile; just heavier than Nulu for pure lounging.",care:Gd,products:[{name:'Wunder Train High-Rise Tight 25"',price:"$98",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:'Wunder Train Tight with Pockets 28"',price:"$128",url:"https://shop.lululemon.com/c/women-wunder-train-leggings/n1a1dczudsq"},{name:"Wunder Train No Line High-Rise Tight",price:"$108",url:"https://shop.lululemon.com/c/women-everlux-leggings/n1n918zudsq"}],affinity:{activity:{yoga:0,run:2,studio:3,everyday:1},sweat:{low:0,med:3,high:2},feel:{soft:0,smooth:1,structured:0,cushioned:3},care:{easy:2,ok:0}}},Warpstreme:{meaning:'A finely warp-woven fabric (woven, not knit) — "warp" weaving + "streme" for stream / extreme.',feel:"Smooth, structured and wrinkle-resistant with a cool hand. Holds its shape from morning to night.",bestFor:["Travel","Commute","Work / office","Everyday","Versatile wear"],notFor:"Sweaty high-intensity training — it's built for structure and polish, not compression.",care:["Machine wash cold with like colors.","Skip fabric softener.","Hang dry — avoid high heat.","Wrinkle-resistant, so it bounces back without ironing."],products:[{name:"ABC Classic-Fit 5 Pocket Pant",price:"$138",url:"https://shop.lululemon.com/c/men-warpstreme-pants/n13u4nzu9dn"},{name:"ABC Trouser (formerly Commission)",price:"$138",url:"https://shop.lululemon.com/c/men-abc-trousers/n146jrzsddx"},{name:"ABC Jogger",price:"$128",url:"https://shop.lululemon.com/c/men-abc-pants/n1sddxzu9dn"}],affinity:{activity:{yoga:0,run:-1,studio:0,everyday:3},sweat:{low:2,med:1,high:-2},feel:{soft:0,smooth:1,structured:3,cushioned:0},care:{easy:3,ok:0}}}};function sR(s,e){return e.map(n=>{const a=kn[n].affinity;let o=0;return s.activity&&(o+=a.activity[s.activity]),s.sweat&&(o+=a.sweat[s.sweat]),s.feel&&(o+=a.feel[s.feel]),s.care&&(o+=a.care[s.care]),{name:n,score:o}}).sort((n,a)=>a.score-n.score)}const H0={step:"start",answers:{},fabric:null,colorHex:null,colorName:null,askedColor:!1},Yu=[{name:"Black",hex:"#1a1a1a"},{name:"True Navy",hex:"#26324a"},{name:"Heathered Grey",hex:"#9a9793"},{name:"Dark Olive",hex:"#3f4531"},{name:"Red Merlot",hex:"#7d1f2b"},{name:"Pink Mist",hex:"#e3b0bf"},{name:"Blue Nile",hex:"#3b5d7a"},{name:"White Opal",hex:"#e8e5df"}],L1={Nulu:"81% nylon, 19% Lycra elastane",Luon:"a nylon / Lycra blend (sometimes with polyester)",Luxtreme:"69% nylon, 31% Lycra elastane — the highest elastane of the bunch",Everlux:"a high-elastane nylon / Lycra double-knit",Warpstreme:"100% polyester, finely warp-woven"},pt=s=>s[Math.floor(Math.random()*s.length)],Qe=(s,e)=>e.some(n=>s.includes(n)),Pn={activity:[{label:"Yoga & stretching",value:"yoga"},{label:"Running & cardio",value:"running"},{label:"Studio & HIIT",value:"studio"},{label:"Everyday & travel",value:"everyday"}],sweat:[{label:"Barely",value:"barely sweat"},{label:"A moderate amount",value:"moderate sweat"},{label:"A lot",value:"sweat a lot"}],feel:[{label:"Softest & barely-there",value:"softest feel"},{label:"Smooth & supportive",value:"smooth supportive"},{label:"Cushioned",value:"cushioned feel"},{label:"Structured",value:"structured feel"}],care:[{label:"Low-maintenance",value:"low maintenance"},{label:"Happy to hand-wash",value:"hand wash"}],explore:[{label:"Find my match",value:"find my match"},{label:"Tell me about the fabrics",value:"tell me about the fabrics"},{label:"Compare two",value:"compare fabrics"}],demos:[{label:"Show its stretch",value:"show its stretch"},{label:"See the drape",value:"see the drape"},{label:"Zoom in",value:"zoom in"}]},G0=()=>[...Yu.map(s=>({label:s.name,value:s.name})),{label:"Surprise me",value:"surprise me"}];function rR(s){return s.includes("nulu")||s.includes("align")?"Nulu":s.includes("luon")?"Luon":s.includes("luxtreme")?"Luxtreme":s.includes("everlux")||s.includes("wunder train")?"Everlux":s.includes("warpstreme")||s.includes("abc")?"Warpstreme":null}function oR(s){return Qe(s,["yoga","stretch","flow","pilates","barre","lounge","relax","restor"])?"yoga":Qe(s,["run","jog","sprint","cardio","marathon","5k","10k"])?"run":Qe(s,["studio","hiit","train","gym","spin","cycle","cycling","strength","lift","weight","class","crossfit","bootcamp","tennis","dance","workout"])?"studio":Qe(s,["everyday","travel","work","office","commute","casual","errand","walk","daily","hike","hiking","flight","plane","desk","lounging around"])?"everyday":null}function lR(s){return Qe(s,["barely","not much","don't sweat","dry workout","a little","light sweat","low sweat"])?"low":Qe(s,["moderate","medium","average","a bit"])?"med":Qe(s,["a lot","lots","heavy sweat","sweaty","drench","soak","buckets","sweat a lot","hot ","hot yoga","sauna"])?"high":null}function cR(s){return Qe(s,["softest","buttery","barely-there","barely there","naked","second skin","gentle","butter","soft feel"])?"soft":Qe(s,["smooth","slick","sleek","silky","compress","support","sculpt","hold-you","hold you","firm"])?"smooth":Qe(s,["cushion","thick","substantial","plush","cozy","hefty","more body"])?"cushioned":Qe(s,["structured","crisp","polished","put together","put-together","stiff","tailored","holds shape"])?"structured":null}function uR(s){return Qe(s,["low maintenance","low-maintenance","easy care","durable","wrinkle","no fuss","toss","throw it in","lazy"])?"easy":Qe(s,["hand wash","hand-wash","delicate","hang dry","baby it","careful","don't mind washing"])?"ok":null}function fR(s){const e=[[["black","noir"],"Black"],[["navy","dark blue"],"True Navy"],[["grey","gray","heather"],"Heathered Grey"],[["olive","green","army","khaki"],"Dark Olive"],[["red","merlot","wine","maroon","burgundy","berry"],"Red Merlot"],[["pink","rose","blush","mauve"],"Pink Mist"],[["blue","nile","cobalt","teal"],"Blue Nile"],[["white","cream","opal","ivory"],"White Opal"]];for(const[n,a]of e)if(Qe(s,n))return Yu.find(o=>o.name===a);return null}function hR(s){return Qe(s,["reset","re-drape","redrape","settle it","drop it","let it fall","fresh drape"])?"reset":Qe(s,["nudge","poke","wobble","jiggle","shake it","bounce"])?"nudge":Qe(s,["zoom in","closer","close up","close-up","get close","look closer"])?"closeup":Qe(s,["zoom out","back up","pull back","farther","further","see it all","zoom back","wider","whole thing"])?"zoomout":Qe(s,["spin","rotate","turn it","turn around","another angle","different angle"])?"spin":null}function P1(s){return Qe(s,["durab","stretch","elastic","recover","hold up","holds up","last","four-way","4-way","compression","compress","squat","support","pull it"])?"stretch":Qe(s,["soft","buttery","how does it feel","feel like","next to skin","against my skin","touch","plush","cozy"])?"soft":Qe(s,["drape","flow","how it moves","how does it move","movement","fall","swish","fluid","floaty"])?"drape":Qe(s,["sheen","shine","shiny","gloss","matte","luster","finish","how it looks","how does it look"])?"sheen":Qe(s,["weave","woven","knit","texture","construction","grain","stitch","mesh","up close"])?"weave":Qe(s,["breath","airflow","ventil","cool ","cooling","hot workout","overheat","wick","quick dry","quick-dry"])?"breath":Qe(s,["warm","warmth","cold","winter","chilly","heat retention"])?"warmth":Qe(s,["see-through","see through","sheer","squat proof","squat-proof","opaque","opacity","transparent"])?"opacity":Qe(s,["pill","pilling"])?"pill":Qe(s,["made of","material","composition","fabric content","nylon","polyester","lycra","spandex","elastane","what is it made"])?"material":Qe(s,["size","sizing","fit ","true to size","runs small","runs big","tight or","sizing up"])?"fit":Qe(s,["sustainab","recycled","eco","environment","planet"])?"sustain":Qe(s,["smell","odor","odour","stink","anti-odor","anti-odour"])?"odor":null}function dR(s){return!Qe(s,["most","best","softest","warmest","coolest","lightest","cheapest","priciest","stretchiest","which","top ","strongest"])&&!Qe(s,["won't pill","wont pill","no pill"])?null:Qe(s,["softest","most soft","most comfortable","comfiest"])?"softest":Qe(s,["warmest","warm","coziest","thickest","winter"])?"warmest":Qe(s,["coolest","cool-to-touch","cool to touch"])?"coolest":Qe(s,["breathable","most breathable","breathability"])?"breathable":Qe(s,["durable","most durable","longest","toughest","won't pill","wont pill","no pill","strongest","last longest"])?"durable":Qe(s,["supportive","most support","most compress","compressive","hold you in"])?"supportive":Qe(s,["stretchiest","most stretch","most flexible","stretchy"])?"stretchiest":Qe(s,["lightest","most lightweight","thinnest"])?"lightest":Qe(s,["versatile","do everything","all-rounder","all rounder","most versatile"])?"versatile":Qe(s,["cheapest","least expensive","most affordable","lowest price"])?"cheapest":Qe(s,["priciest","most expensive","highest price"])?"priciest":Qe(s,["best"])?"best":null}function O1(s){const e=s.match(/\$(\d+)/);return e?parseInt(e[1],10):9999}function pR(s,e){const n=kn[s];return[{text:`${e??pt([`I'd put you in ${s}.`,`Here's your match: ${s}.`,`${s} is the one for you.`])} ${n.meaning}`},{text:`${n.feel} It's a favorite for ${n.bestFor.slice(0,3).join(", ").toLowerCase()} — I've loaded it onto the cloth, so drag it to feel how it moves.`},{text:pt(["Want to see it in a color?","Shall I dye it? Just name a color.","Pick a color and I'll apply it live:"]),swatch:Rn[s].material.baseColor,chips:G0()}]}function I1(s,e){const n=kn[s].products[0];return[{text:pt([`${e} on ${s} — beautiful.`,`Love it — ${e} suits ${s}.`,`${e} it is.`])},{text:`Here's the piece I'd start with in ${s}:`,product:n},{text:pt(["Want me to show you its stretch, drape, or how it feels?","Say the word and I'll stretch it, zoom in, or turn it in the light."]),chips:[...Pn.demos,{label:"Start over",value:"start over"}]}]}function mR(s){return s?{text:`Caring for ${s}: ${kn[s].care.join(" ")}`}:{text:"Tell me which fabric and I'll give you its care routine — or I can find your match first.",chips:[...Pn.explore]}}function gR(){return{text:`Here are the five, in a nutshell:
${Ci.map(e=>`• ${e} — ${Rn[e].blurb.toLowerCase()}`).join(`
`)}
Ask me about any of them, or tell me what you'll do in it and I'll match you.`,chips:[...Pn.activity]}}const Vd=s=>[s.activity,s.sweat,s.feel,s.care].filter(Boolean).length;function F1(s){return s.activity?s.feel?s.sweat?{key:"care",msg:{text:pt(["Last one — how do you like to care for your gear?","How much laundry fuss are you up for?"]),chips:[...Pn.care]}}:{key:"sweat",msg:{text:pt(["How much do you sweat when you do it?","And how sweaty do you get?"]),chips:[...Pn.sweat]}}:{key:"feel",msg:{text:pt(["What feel do you love against your skin?","How do you want it to feel?"]),chips:[...Pn.feel]}}:{key:"activity",msg:{text:pt(["What will you mostly do in it?","What's it for — what will you be doing?"]),chips:[...Pn.activity]}}}function kd(s,e,n){const a=sR(s.answers,Ci)[0].name;s.fabric=a,s.step="recommended",s.askedColor=!0,e.selectFabric=a,e.reply.push(...pR(a,n))}function B1(s,e){const n=e&&Rn[e].weave.type==="woven";switch(s){case"stretch":return{demo:["closeup","stretch"],text:e?`${pt(["Watch it stretch and snap back.","I'll pull it so you can see the recovery."])} ${{Nulu:"Lovely give, but it's a soft knit — best for low-impact; it can pill under heavy friction.",Luon:"Reliable four-way stretch with more body than Nulu.",Luxtreme:"Compressive four-way stretch with quick recovery — it holds shape through hard training.",Everlux:"Springy recovery from the double-knit and high elastane — supportive rep after rep.",Warpstreme:"It's woven, so it gives but stays structured — it won't bag out."}[e]}`:"Good athletic fabric gives, then returns to shape — pick a fabric and I'll show you."};case"soft":return{demo:["closeup","nudge"],text:e?`${pt(["Getting in close.","Here it is up close."])} ${{Nulu:"Nulu is the buttery, next-to-nothing one.",Luon:"Luon is cottony-soft with more structure.",Luxtreme:"Luxtreme is cool and slick rather than fuzzy.",Everlux:"Everlux is cushioned and substantial.",Warpstreme:"Warpstreme is smooth and crisp, not plush."}[e]}`:"Softest of all is Nulu — want to feel it?"};case"drape":return{demo:["zoomout","drape"],text:e?`${pt(["Watch how it falls.","Here it is in motion."])} ${{Nulu:"Fluid and flowy — lightweight drape.",Luon:"A little more body as it moves.",Luxtreme:"Slick and lively, settles sleek.",Everlux:"Heavier drape with spring.",Warpstreme:"Structured — it keeps its shape."}[e]}`:"Every fabric falls differently — pick one and I'll show you."};case"sheen":return{demo:["spin"],text:e?`${pt(["Turning it through the light.","Catching the light across it."])} ${{Nulu:"Matte and soft, barely any shine.",Luon:"Matte, cottony surface.",Luxtreme:"A subtle performance sheen.",Everlux:"Mostly matte, dry finish.",Warpstreme:"Matte with a fine woven glint."}[e]}`:"Luxtreme has the most sheen; Nulu the least."};case"weave":return{demo:["closeup"],text:e?`${pt(["Here's the construction up close.","Zooming into the surface."])} ${n?`See the tight woven grid — that's what makes ${e} structured and wrinkle-resistant.`:`You can see the knit loops — that interlock gives ${e} its stretch and softness.`}`:"Four of the five are knits; Warpstreme is woven. Want to see one up close?"};case"breath":return{demo:["spin"],text:e?`On breathability: ${{Nulu:"Nulu is light and airy but has no compression — great for gentle heat, less so for heavy sweat.",Luon:"Luon breathes reasonably for low-medium efforts.",Luxtreme:"Luxtreme is sweat-wicking, breathable and quick-drying — built for working hard.",Everlux:"Everlux was made for sweaty studio sessions — it wicks and dries fast while staying cool.",Warpstreme:"Warpstreme is a woven travel fabric — breathable and structured, though not a high-sweat performer."}[e]}`:"For heavy sweat, Luxtreme and Everlux breathe and wick best. Want details on one?"};case"warmth":return{text:e?`On warmth: ${{Nulu:"Nulu is the lightest and coolest — not a warm layer.",Luon:"Luon has a little more body but is still light.",Luxtreme:"Luxtreme is cool-to-touch — it runs cool, not warm.",Everlux:"Everlux is the thickest, so it holds a bit more warmth.",Warpstreme:"Warpstreme is structured and mid-weight — fine for cooler-weather everyday wear."}[e]}`:"Everlux is the warmest (thickest); Nulu the coolest and lightest."};case"opacity":return{demo:["closeup","stretch"],text:e?`On coverage: ${{Nulu:"Nulu is soft and non-compressive, so in very light colors it can go a touch sheer when stretched — dark colors are safest.",Luon:"Luon is medium-weight and generally opaque.",Luxtreme:"Luxtreme is compressive and reliably squat-proof.",Everlux:"Everlux is thick and fully opaque — very squat-proof.",Warpstreme:"Warpstreme is a woven — fully opaque."}[e]}`:"Everlux and Luxtreme are the most squat-proof; Nulu can be sheer in pale colors."};case"pill":return{text:e?`On pilling: ${{Nulu:"Nulu is the softest but most prone to pilling — keep it away from Velcro and rough surfaces.",Luon:"Luon can pill under heavy friction like running or spin.",Luxtreme:"Luxtreme is highly friction-resistant and won't pill.",Everlux:"Everlux is durable and resists pilling well.",Warpstreme:"Warpstreme is woven and very resistant to pilling."}[e]}`:"Luxtreme and Warpstreme resist pilling best; Nulu pills most easily."};case"material":return{text:e?`${e} is ${L1[e]}. ${kn[e].feel}`:`Composition varies: ${Ci.map(a=>`${a} is ${L1[a]}`).join("; ")}.`};case"fit":return{text:e?`On fit: ${{Nulu:"Nulu is a relaxed, second-skin feel with no compression.",Luon:"Luon is a supportive-but-comfortable everyday fit.",Luxtreme:"Luxtreme is snug and compressive — hold-you-in.",Everlux:"Everlux is supportive with a substantial, sculpting fit.",Warpstreme:"Warpstreme is a structured, tailored fit."}[e]} For exact sizing, lululemon.com or a store is your best bet.`:"Fit depends on the fabric — compressive ones like Luxtreme run snug, Nulu is relaxed. For sizing, check lululemon.com."};case"sustain":return{text:"I'm focused on how the fabrics feel and perform — for lululemon's materials and sustainability details, their site is the source of truth. I can tell you what each fabric is made of, though — just ask."};case"odor":return{text:e?`Most of these are synthetic performance fabrics, so wash them promptly and skip fabric softener (it traps odor). ${e==="Nulu"?"Nulu especially likes a gentle, prompt wash.":""}`:"Wash promptly and skip fabric softener to keep them fresh — softener coats the fibers and traps smell."}}}function vR(s,e,n){const a=(o,c,u)=>{e.fabric=o,e.step="open",n.selectFabric=o,u&&(n.demo=u),n.reply.push({text:c},{text:pt(["Want to see it in a color, or shall I show it off?","I can dye it or demonstrate it — your call."]),swatch:Rn[o].material.baseColor,chips:[...Pn.demos,{label:"See colors",value:"see colors"}]})};switch(s){case"softest":return a("Nulu","Softest by a mile is Nulu — buttery and barely-there. Here it is.",["closeup","nudge"]);case"warmest":return a("Everlux","The warmest is Everlux — it's the thickest, a cushioned double-knit that holds a little heat.",["closeup"]);case"coolest":return a("Luxtreme","Coolest-to-touch is Luxtreme — slick and quick-drying, it runs cool.",["spin"]);case"breathable":return a("Luxtreme","Most breathable for hard efforts is Luxtreme — sweat-wicking and quick-drying (Everlux is a close second for studio heat).",["spin"]);case"durable":return a("Warpstreme","Most durable is Warpstreme — a tightly woven fabric that holds its shape and resists pilling. Luxtreme is the toughest of the knits.",["closeup","stretch"]);case"supportive":return a("Luxtreme","Most supportive is Luxtreme — compressive, hold-you-in, and quick to recover.",["closeup","stretch"]);case"stretchiest":return a("Luxtreme","Stretchiest is Luxtreme — it has the highest elastane, so it's the most flexible.",["closeup","stretch"]);case"lightest":return a("Nulu","Lightest is Nulu — a next-to-nothing feel.",["closeup"]);case"versatile":return a("Everlux","Most versatile is Everlux — comfy enough for low-impact, tough enough for hard training.",["drape"]);case"cheapest":{let o=Ci[0],c=99999;for(const u of Ci){const h=O1(kn[u].products[0].price);h<c&&(c=h,o=u)}e.fabric=o,n.selectFabric=o,e.step="open",n.reply.push({text:`The most affordable starting point is ${o}.`},{text:"Here's the piece:",product:kn[o].products[0]});return}case"priciest":{let o=Ci[0],c=-1;for(const u of Ci){const h=O1(kn[u].products[0].price);h>c&&(c=h,o=u)}e.fabric=o,n.selectFabric=o,e.step="open",n.reply.push({text:`The most premium of these is ${o}.`},{text:"Here's the piece:",product:kn[o].products[0]});return}default:n.reply.push({text:pt([`"Best" really depends on what you're doing — what's the plan?`,"They're each best at something — what will you be doing in it?"]),chips:[...Pn.activity]}),e.step="guiding";return}}function _R(s,e){const n=Ci.filter(u=>s.includes(u.toLowerCase())),[a,o]=n.length>=2?[n[0],n[1]]:[e.fabric??"Nulu",n[0]&&n[0]!==e.fabric?n[0]:"Luxtreme"],c=u=>`${u}: ${Rn[u].blurb.toLowerCase()} Best for ${kn[u].bestFor.slice(0,2).join(" & ").toLowerCase()}.`;return{text:`${a} vs ${o} —
${c(a)}
${c(o)}
Want me to load either one so you can feel it?`}}function V0(){return[{text:pt(["Hi — I'm your Fabric Lab expert. Ask me anything about lululemon's fabrics and I'll show you on the cloth: how they feel, stretch, drape and hold up.","Welcome — I know these fabrics inside out. Ask me anything, and I'll demonstrate right on the cloth. What can I help you figure out?"])},{text:"You can tell me what you'll be doing and I'll find your match — or just ask a question.",chips:[...Pn.activity]}]}function xR(s,e){const n={...s,answers:{...s.answers}},a=e.toLowerCase().trim(),o={ctx:n,reply:[]};if(Qe(a,["start over","restart","reset chat","begin again","start again"]))return o.ctx={...H0},o.reply=[{text:pt(["Fresh start — let's go.","Clean slate."])},...V0()],o;if(Qe(a,["thank","thanks","ty ","appreciate","cheers"]))return o.reply=[{text:pt(["Anytime — happy moving.","My pleasure.","You got it."])}],o;if(a.length<=6&&Qe(a,["hi","hey","hello","yo","sup","hola"]))return o.reply=[{text:pt(["Hey! Ask me anything about the fabrics, or tell me what you'll be doing in it.","Hi there — what are you shopping for?"]),chips:[...Pn.explore]}],o;if(Qe(a,["help","what can you","how does this work","what do you do","options"]))return o.reply=[{text:"I can find your ideal fabric, explain what each one means, how it feels, stretches, drapes and holds up, compare them, recolor the cloth, and point you to the right product. I'll show you on the fabric as we go. What are you after?",chips:[...Pn.explore]}],o;const c=oR(a),u=lR(a),h=cR(a),m=uR(a);c&&(n.answers.activity=c),u&&(n.answers.sweat=u),h&&(n.answers.feel=h),m&&(n.answers.care=m);const p=!!(c||u||h||m),g=hR(a);if(g)return o.demo=[g],o.reply=[{text:{reset:pt(["Resetting to a clean drape.","Dropped it fresh."]),nudge:pt(["Giving it a nudge.","There it goes."]),closeup:pt(["Moving in close.","Here's a closer look."]),zoomout:pt(["Pulling back for the full piece.","Zooming out."]),spin:pt(["Turning it through the light.","Sweeping it round."])}[g]}],o;const _=Ci.filter(A=>a.includes(A.toLowerCase())).length>=2;if(Qe(a,["compare","difference","versus"," vs "," vs","vs."])||_)return o.reply=[_R(a,n)],o;const x=rR(a),b=P1(a);if(x){if(n.fabric=x,n.step="open",o.selectFabric=x,b){const A=B1(b,x);A.demo&&(o.demo=A.demo),o.reply=[{text:`${x} — ${kn[x].meaning}`},{text:A.text}]}else o.reply=[{text:`${x} — ${kn[x].meaning}`},{text:`${kn[x].feel} Best for ${kn[x].bestFor.slice(0,3).join(", ").toLowerCase()}. Drag it to feel the drape.`},{text:"Want to see it in a color, or have me show its stretch or drape?",swatch:Rn[x].material.baseColor,chips:[...Pn.demos,{label:"See colors",value:"see colors"}]}];return o}if(Qe(a,["see color","see colors","show color","colours","what colors","color options"]))return o.reply=[{text:n.fabric?`Here are colors for ${n.fabric} — pick one:`:"Pick a color and I'll apply it:",swatch:n.fabric?Rn[n.fabric].material.baseColor:void 0,chips:G0()}],n.step=n.fabric?"recommended":n.step,o;const R=fR(a);if(R&&n.fabric)return n.colorHex=R.hex,n.colorName=R.name,o.setColor=R.hex,!n.colorName||n.step,o.reply=I1(n.fabric,R.name),n.step="open",o;if(Qe(a,["surprise","random color","you pick","any color"])&&n.fabric){const A=pt(Yu);return n.colorHex=A.hex,n.colorName=A.name,o.setColor=A.hex,o.reply=[{text:`Let's go with ${A.name}.`},...I1(n.fabric,A.name).slice(1)],n.step="open",o}const S=dR(a);if(S)return vR(S,n,o),o;const M=P1(a);if(M){const A=B1(M,n.fabric);return A.demo&&(o.demo=A.demo),o.reply=[{text:A.text}],(n.step==="open"||n.step==="recommended")&&o.reply.push({text:"Anything else you'd like to see?",chips:[...Pn.demos]}),o}if(Qe(a,["wash","care","clean it","dry it","shrink","launder","machine wash"]))return o.reply=[mR(n.fabric)],o;if(Qe(a,["what is","what does","mean","why called","what's a","tell me about"])&&(x||n.fabric)){const A=x??n.fabric;return o.reply=[{text:`${A} — ${kn[A].meaning}`},{text:kn[A].feel}],o}if(Qe(a,["price","cost","how much","buy","shop","purchase","link","where can i"]))return n.fabric?o.reply=[{text:`Here's the piece I'd recommend in ${n.fabric}:`,product:kn[n.fabric].products[0]}]:o.reply=[{text:"Let's land on a fabric first — what will you be doing in it?",chips:[...Pn.activity]}],o;if(Qe(a,["list","the fabrics","all the fabric","what are the","options","overview","which fabrics"]))return o.reply=[gR()],o;const P=Qe(a,["recommend","suggest","what should i","help me choose","help me pick","which one","what do you recommend","i need","looking for","find my match","match me","pick for me"]);if(P&&Vd(n.answers)>=1)return kd(n,o,pt(["Based on that, ","Got it — "])),o;if(Vd(n.answers)>=2)return kd(n,o),o;if(P){const A=F1(n.answers);return o.reply=[{text:pt(["Happy to — quick question first.","Let's find it — one thing first."])},A.msg],n.step="guiding",o}if(p){const A=c?yR(c):h?SR(h):u?MR(u):bR(m);return n.step="guiding",Vd(n.answers)>=2?(o.reply=[{text:A}],kd(n,o),o):(o.reply=[{text:A},F1(n.answers).msg],o)}if(Qe(a,["return","refund","ship","delivery","order","track","store near","coupon","discount","sale"]))return o.reply=[{text:"That's one for lululemon.com or a store — I'm the fabric side of things. But I can tell you which fabric fits your workout and how it feels. Want to start there?",chips:[...Pn.explore]}],o;if(Qe(a,["yes","yeah","yep","sure","ok","okay","please do","go for it"])&&n.fabric&&n.step!=="open")return o.reply=[{text:`Here are colors for ${n.fabric}:`,swatch:Rn[n.fabric].material.baseColor,chips:G0()}],o;const L=n.fabric;return o.reply=[{text:pt([L?`We're looking at ${L} right now — I can show its stretch, drape or feel, dye it a new color, or compare it with another. What sounds good?`:"I'm your fabric expert — I can find your match, explain any fabric, show how it feels and moves, and point you to the right product. Where should we start?",L?`Ask me how ${L} feels, how it holds up, or what it's made of — or say a color and I'll dye it. What are you curious about?`:"Tell me what you'll be doing in it and I'll match you — or ask about any fabric by name.","Happy to dig in — I know how each fabric feels, stretches, drapes and lasts, and which suits which workout. What would help most?"]),chips:L?[...Pn.demos,{label:"Compare",value:"compare fabrics"}]:[...Pn.explore]}],o}function yR(s){return{yoga:pt(["Yoga — soft and unrestrictive is the goal.","Flow work rewards a soft, stretchy fabric."]),run:pt(["A runner — lightweight and sweat-wicking matter most.","Running: breathability and stay-put support."]),studio:pt(["Studio sweat — versatile and quick-drying wins.","HIIT and classes ask for grip, wick and recovery."]),everyday:pt(["Everyday and travel — comfort that looks pulled-together.","All-day wear — structure and easy care count."])}[s]}function MR(s){return{low:pt(["Cool and dry — the softer fabrics open up.","Barely a bead, noted."]),med:pt(["A moderate glow — lots of options.","Middle of the road, got it."]),high:pt(["A proper sweat — we'll lean into wicking, quick-dry fabrics.","You run hot — good to know."])}[s]}function SR(s){return{soft:pt(["Buttery and barely-there — my favorite.","Second-skin soft, noted."]),smooth:pt(["Smooth and supported — got it.","Sleek and compressive."]),cushioned:pt(["Something with body and cushion.","A bit more heft, noted."]),structured:pt(["Structured and polished.","Crisp and put-together, love it."])}[s]}function bR(s){return{easy:pt(["And low-fuss laundry — durability it is.","Toss-and-go care, understood."]),ok:pt(["Happy to hand-wash — keeps the delicate ones in play.","A little TLC is fine, noted."])}[s]}const ER={background:"#f5f5f5",exposure:.82,environment:1.05,bloom:0,bloomThreshold:1.4,noise:.04,toneMapping:"Neutral",occlusion:!0,occlusionStrength:1,dof:!1,dofAperture:40,dofBlur:.04,dofRange:.3};function yu(s,e){const n=Rn[s];return{performance:"High",physics:{...n.physics},material:{fabric:s,...n.material,baseColor:e??n.material.baseColor},images:{edit:!1,useImage:!1,scale:.35,rotation:0,opacity:1,cornerRadius:0},render:{...ER}}}const z1=8.5,TR=300,AR=s=>s*s*s,wR=s=>1-Math.pow(1-s,3);function RR(){const s=en.useRef(null),e=en.useRef(null),[n,a]=en.useState(N1),[o,c]=en.useState(null),[u,h]=en.useState(null),[m,p]=en.useState(!0),[g,_]=en.useState("none"),[v,x]=en.useState(!1),b=en.useRef(!1),R=en.useRef(null),[S,M]=en.useState([]),[P,L]=en.useState(""),A=en.useRef({...H0}),I=en.useRef(0),N=en.useRef(null);en.useEffect(()=>{if(!s.current)return;const z=new aR(s.current);return e.current=z,z.onDecalSelect=()=>{},z.onImagesChanged=()=>{},z.onARChange=te=>{b.current=te,x(te)},z.setSlideOffset(0),z.applyParams(yu(n)),z.applyFabric(Rn[n].weave),z.reveal(),V0().forEach((te,me)=>setTimeout(()=>Y({role:"bot",...te}),250*me+300)),()=>{z.dispose(),e.current=null}},[]);const F=en.useRef(!0),T=en.useRef(N1),U=en.useRef(0),X=en.useRef(null);en.useEffect(()=>{const z=e.current;if(!z)return;const te=T.current;if(T.current=n,F.current){F.current=!1,z.setSlideOffset(0),z.applyParams(yu(n)),z.applyFabric(Rn[n].weave);return}if(b.current){z.applyParams(yu(n)),z.applyFabric(Rn[n].weave),z.resetCloth();return}if(te===n)return;c(null),X.current?.(),X.current=null;const D=Ci.indexOf(n)>Ci.indexOf(te)?-z1:z1,W=-D,_e=(Ee,Te,ee,Me)=>{const Se=performance.now();let Ie=0;const nt=Ke=>{const Ut=Math.min(1,(Ke-Se)/TR),ot=Ee+(Te-Ee)*ee(Ut);U.current=ot,e.current?.setSlideOffset(ot),Ut<1?Ie=requestAnimationFrame(nt):Me?.()};Ie=requestAnimationFrame(nt),X.current=()=>cancelAnimationFrame(Ie)};return _e(U.current,D,AR,()=>{z.applyParams(yu(n)),z.applyFabric(Rn[n].weave),z.resetCloth(),U.current=W,z.setSlideOffset(W),_e(W,0,wR,()=>{X.current=null})}),()=>{X.current?.()}},[n]),en.useEffect(()=>{o!=null&&e.current?.setColor(o)},[o]),en.useEffect(()=>{N.current?.scrollTo({top:N.current.scrollHeight,behavior:"smooth"})},[S]),en.useEffect(()=>{let z=0,te=0,me=performance.now(),D=0;const W=Ee=>{if(te++,D+=Ee-me,me=Ee,D>=500){const Te=performance.memory,ee=e.current?.getRenderStats();h({fps:Math.round(te*1e3/D),frameMs:+(D/te).toFixed(1),heapUsed:Te?Math.round(Te.usedJSHeapSize/1048576):null,heapLimit:Te?Math.round(Te.jsHeapSizeLimit/1048576):null,calls:ee?.calls??0,tris:ee?.triangles??0,geometries:ee?.geometries??0,textures:ee?.textures??0,verts:ee?.clothVerts??0,segments:ee?.segments??0,pr:ee?.pixelRatio??1}),te=0,D=0}z=requestAnimationFrame(W)};z=requestAnimationFrame(W);const _e=Ee=>{const Te=Ee.target;Te&&(Te.tagName==="INPUT"||Te.tagName==="TEXTAREA")||Ee.key==="`"&&p(ee=>!ee)};return window.addEventListener("keydown",_e),()=>{cancelAnimationFrame(z),window.removeEventListener("keydown",_e)}},[]),en.useEffect(()=>{let z=!0;return(async()=>{const te=navigator.xr;try{if(te&&await te.isSessionSupported?.("immersive-ar")){z&&_("webxr");return}}catch{}const me=navigator.userAgent,D=/iphone|ipad|ipod/i.test(me)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;z&&_(D?"quicklook":"none")})(),()=>{z=!1}},[]);const V=async()=>{const z=e.current;if(z){if(g==="webxr")b.current=!0,x(!0),await z.startAR(R.current)||(b.current=!1,x(!1));else if(g==="quicklook")try{const te=await z.exportUSDZ(),me=new Blob([te],{type:"model/vnd.usdz+zip"}),D=URL.createObjectURL(me),W=document.createElement("a");W.setAttribute("rel","ar"),W.href=D,W.appendChild(document.createElement("img")),document.body.appendChild(W),W.click(),window.setTimeout(()=>{W.remove(),URL.revokeObjectURL(D)},15e3)}catch(te){console.error("[AR] USDZ export failed",te)}}},Y=z=>M(te=>[...te,{id:I.current++,...z}]),ue=z=>{const te=e.current;te&&z.forEach(me=>{me==="reset"?te.resetCloth():me==="nudge"?te.poke():me==="stretch"?te.demoStretch():me==="closeup"?te.zoomTo(.6):me==="zoomout"?te.zoomTo(1.12):me==="spin"?te.spin():me==="drape"&&(te.resetCloth(),window.setTimeout(()=>e.current?.poke(),140))})},fe=(z,te)=>{const me=z.trim();if(!me)return;Y({role:"user",text:te??me});const D=xR(A.current,me);A.current=D.ctx,D.selectFabric&&a(D.selectFabric),Object.prototype.hasOwnProperty.call(D,"setColor")&&c(D.setColor??null),D.demo&&ue(D.demo),D.reply.forEach((W,_e)=>setTimeout(()=>Y({role:"bot",...W}),260*_e+220)),L("")},Q=()=>{A.current={...H0},M([]),V0().forEach((z,te)=>setTimeout(()=>Y({role:"bot",...z}),200*te+150))},B=S[S.length-1],H=z=>Yu.find(te=>te.name===z)?.hex;return ke.jsxs(ke.Fragment,{children:[ke.jsx("div",{id:"canvas-host",ref:s}),ke.jsxs("div",{className:"ui",children:[ke.jsxs("div",{className:"topbar",children:[ke.jsxs("div",{className:"brand",children:[ke.jsx("span",{className:"k",children:"lululemon"}),ke.jsx("span",{className:"t",children:"Fabric Lab"})]}),g!=="none"&&ke.jsx("button",{className:"pill accent",onClick:V,children:"View in AR"})]}),ke.jsxs("div",{className:"perf-wrap",children:[ke.jsx("button",{className:"perf-toggle",onClick:()=>p(z=>!z),children:m?"× metrics":"metrics"}),m&&u&&ke.jsxs("div",{className:"perf",children:[ke.jsxs("div",{className:"prow",children:[ke.jsx("span",{children:"fps"}),ke.jsx("b",{style:{color:u.fps>=50?"#1f9d55":u.fps>=30?"#b8860b":"#d1202f"},children:u.fps})]}),ke.jsxs("div",{className:"prow",children:[ke.jsx("span",{children:"frame"}),ke.jsxs("b",{children:[u.frameMs," ms"]})]}),ke.jsxs("div",{className:"prow",children:[ke.jsx("span",{children:"js heap"}),ke.jsx("b",{children:u.heapUsed!=null?`${u.heapUsed} / ${u.heapLimit} MB`:"n/a*"})]}),ke.jsxs("div",{className:"prow",children:[ke.jsx("span",{children:"draw calls"}),ke.jsx("b",{children:u.calls})]}),ke.jsxs("div",{className:"prow",children:[ke.jsx("span",{children:"triangles"}),ke.jsxs("b",{children:[(u.tris/1e3).toFixed(0),"k"]})]}),ke.jsxs("div",{className:"prow",children:[ke.jsx("span",{children:"geometries"}),ke.jsx("b",{children:u.geometries})]}),ke.jsxs("div",{className:"prow",children:[ke.jsx("span",{children:"textures"}),ke.jsx("b",{children:u.textures})]}),ke.jsxs("div",{className:"prow",children:[ke.jsx("span",{children:"cloth verts"}),ke.jsxs("b",{children:[u.verts.toLocaleString()," · ",u.segments,"²"]})]}),ke.jsxs("div",{className:"prow",children:[ke.jsx("span",{children:"pixel ratio"}),ke.jsxs("b",{children:[u.pr,"×"]})]}),u.heapUsed==null&&ke.jsx("div",{className:"pnote",children:"*JS heap is Chrome-only"})]})]}),ke.jsxs("div",{className:"convo",children:[ke.jsx("div",{className:"stream",ref:N,children:S.slice(-8).map(z=>ke.jsxs("div",{className:"msg "+z.role,children:[ke.jsx("span",{children:z.text}),z.product&&ke.jsxs("a",{className:"prodcard",href:z.product.url,target:"_blank",rel:"noreferrer",children:[ke.jsx("span",{className:"pn",children:z.product.name}),ke.jsxs("span",{className:"pp",children:[z.product.price," →"]})]})]},z.id))}),B?.chips&&B.role==="bot"&&ke.jsx("div",{className:"chips",children:B.chips.map(z=>ke.jsxs("button",{className:"chip2",onClick:()=>fe(z.value,z.label),children:[H(z.value)&&ke.jsx("span",{className:"cdot",style:{background:H(z.value)}}),z.label]},z.value))}),ke.jsxs("form",{className:"ask",onSubmit:z=>{z.preventDefault(),fe(P)},children:[ke.jsx("input",{value:P,onChange:z=>L(z.target.value),placeholder:"Say anything…","aria-label":"Message the Fabric Lab guide"}),ke.jsx("button",{className:"askbtn",type:"submit","aria-label":"Send",children:"→"})]}),ke.jsx("button",{className:"restart",onClick:Q,children:"Start over"})]}),ke.jsx("div",{className:"rail",children:Ci.map(z=>ke.jsxs("button",{className:z===n?"sel":"",onClick:()=>fe(Rn[z].label,Rn[z].label),children:[ke.jsx("span",{className:"dot",style:{background:Rn[z].material.baseColor}}),Rn[z].label]},z))})]}),ke.jsxs("div",{id:"ar-overlay",ref:R,style:{display:v?"flex":"none"},children:[ke.jsxs("div",{className:"ar-top",children:[ke.jsx("span",{className:"ar-brand",children:"Fabric Lab · AR"}),ke.jsx("button",{className:"ar-exit",onClick:()=>e.current?.endAR(),children:"Exit AR"})]}),ke.jsxs("div",{className:"ar-bottom",children:[ke.jsx("div",{className:"ar-rail",children:Ci.map(z=>ke.jsxs("button",{className:z===n?"sel":"",onClick:()=>a(z),children:[ke.jsx("span",{className:"dot",style:{background:Rn[z].material.baseColor}}),Rn[z].label]},z))}),ke.jsx("button",{className:"ar-poke",onClick:()=>e.current?.poke(),children:"Nudge it"})]})]})]})}ZM.createRoot(document.getElementById("root")).render(ke.jsx(RR,{}));
