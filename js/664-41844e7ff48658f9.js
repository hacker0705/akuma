(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},u=r(1003),c=r(880),i=r(9246);var f={};function s(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){}));var o=n&&void 0!==n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=l.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,d=e.href,p=e.as,y=e.children,v=e.prefetch,b=e.passHref,h=e.replace,g=e.shallow,m=e.scroll,w=e.locale,j=e.onClick,E=e.onMouseEnter,O=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=y,a&&"string"==typeof r&&(r=l.default.createElement("a",null,r));var M,C=!1!==v,k=c.useRouter(),I=l.default.useMemo((function(){var e=o(u.resolveHref(k,d,!0),2),t=e[0],r=e[1];return{href:t,as:p?u.resolveHref(k,p):r||t}}),[k,d,p]),S=I.href,A=I.as,L=l.default.useRef(S),R=l.default.useRef(A);a&&(M=l.default.Children.only(r));var _=a?M&&"object"==typeof M&&M.ref:t,x=o(i.useIntersection({rootMargin:"200px"}),3),U=x[0],P=x[1],H=x[2],K=l.default.useCallback((function(e){R.current===A&&L.current===S||(H(),R.current=A,L.current=S),U(e),_&&("function"==typeof _?_(e):"object"==typeof _&&(_.current=e))}),[A,_,S,H,U]);l.default.useEffect((function(){var e=P&&C&&u.isLocalURL(S),t=void 0!==w?w:k&&k.locale,r=f[S+"%"+A+(t?"%"+t:"")];e&&!r&&s(k,S,A,{locale:t})}),[A,S,P,w,C,k]);var N={ref:K,onClick:function(e){a||"function"!=typeof j||j(e),a&&M.props&&"function"==typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:l}))}(e,k,S,A,h,g,m,w)},onMouseEnter:function(e){a||"function"!=typeof E||E(e),a&&M.props&&"function"==typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),u.isLocalURL(S)&&s(k,S,A,{priority:!0})}};if(!a||b||"a"===M.type&&!("href"in M.props)){var T=void 0!==w?w:k&&k.locale,B=k&&k.isLocaleDomain&&u.getDomainLocale(A,T,k&&k.locales,k&&k.domainLocales);N.href=B||u.addBasePath(u.addLocale(A,T,k&&k.defaultLocale))}return a?l.default.cloneElement(M,N):l.default.createElement("a",Object.assign({},O,N),r)}));t.default=d,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],y=o(a.useState(t?t.current:null),2),v=y[0],b=y[1],h=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=i.find((function(e){return e.root===r.root&&e.margin===r.margin}));if(n?t=c.get(n):(t=c.get(r),i.push(r)),t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,(function(e){return e&&p(e)})),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(e,0,{root:v,rootMargin:r}))}),[n,v,r,d]),g=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!u&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&b(t.current)}),[t]),[h,d,g]};var a=r(7294),l=r(4686),u="undefined"!=typeof IntersectionObserver,c=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(1551)}}]);