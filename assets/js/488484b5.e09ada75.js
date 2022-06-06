"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[2159],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,f=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5865:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},p=void 0,d={unversionedId:"developers/contracts/yieldspace/Exp64x64",id:"developers/contracts/yieldspace/Exp64x64",title:"Exp64x64",description:"Functions",source:"@site/docs/developers/contracts/yieldspace/Exp64x64.md",sourceDirName:"developers/contracts/yieldspace",slug:"/developers/contracts/yieldspace/Exp64x64",permalink:"/yield-docs/developers/contracts/yieldspace/Exp64x64",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/yieldspace/Exp64x64.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Giver",permalink:"/yield-docs/developers/contracts/utils/Giver"},next:{title:"Math64x64",permalink:"/yield-docs/developers/contracts/yieldspace/Math64x64"}},u={},m=[{value:"Functions",id:"functions",level:2},{value:"pow",id:"pow",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"log_2",id:"log_2",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"pow_2",id:"pow_2",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-2",level:4}],s={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"pow"},"pow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function pow(\n    uint128 x,\n    uint128 y,\n    uint128 z\n  ) internal returns (uint128)\n")),(0,l.kt)("p",null,"Raise given number x into power specified as a simple fraction y/z and then\nmultiply the result by the normalization factor 2^(128 * (1 - y/z)).\nRevert if z is zero, or if both x and y are zeros."),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number to raise into given power y/z")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"numerator of the power to raise x into")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"z")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"denominator of the power to raise x into")))),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"raised into power y/z and then multiplied by 2^(128 * (1 - y/z))")))),(0,l.kt)("h3",{id:"log_2"},"log_2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function log_2(\n    uint128 x\n  ) internal returns (uint128)\n")),(0,l.kt)("p",null,"Calculate base 2 logarithm of an unsigned 128-bit integer number.  Revert\nin case x is zero."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number to calculate base 2 logarithm of")))),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"base")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2 logarithm of x, multiplied by 2^121")))),(0,l.kt)("h3",{id:"pow_2"},"pow_2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function pow_2(\n    uint128 x\n  ) internal returns (uint128)\n")),(0,l.kt)("p",null,"Calculate 2 raised into given power."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"power to raise 2 into, multiplied by 2^121")))),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"raised into given power")))))}c.isMDXComponent=!0}}]);