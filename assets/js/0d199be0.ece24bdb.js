"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[5159],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3737:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},c=void 0,s={unversionedId:"developers/technical_reference/yieldspace/extensions/PoolExtensionsWrapper",id:"developers/technical_reference/yieldspace/extensions/PoolExtensionsWrapper",title:"PoolExtensionsWrapper",description:"Functions",source:"@site/docs/developers/technical_reference/yieldspace/extensions/PoolExtensionsWrapper.md",sourceDirName:"developers/technical_reference/yieldspace/extensions",slug:"/developers/technical_reference/yieldspace/extensions/PoolExtensionsWrapper",permalink:"/yield-docs/developers/technical_reference/yieldspace/extensions/PoolExtensionsWrapper",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/technical_reference/yieldspace/extensions/PoolExtensionsWrapper.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PoolExtensions",permalink:"/yield-docs/developers/technical_reference/yieldspace/extensions/PoolExtensions"},next:{title:"Governance",permalink:"/yield-docs/governance/"}},u={},p=[{value:"Functions",id:"functions",level:2},{value:"invariant",id:"invariant",level:3},{value:"maxFYTokenOut",id:"maxfytokenout",level:3},{value:"maxFYTokenIn",id:"maxfytokenin",level:3},{value:"maxBaseIn",id:"maxbasein",level:3},{value:"maxBaseOut",id:"maxbaseout",level:3}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"invariant"},"invariant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function invariant(\n  ) external returns (uint128)\n")),(0,a.kt)("p",null,"Calculate the invariant for this pool"),(0,a.kt)("h3",{id:"maxfytokenout"},"maxFYTokenOut"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxFYTokenOut(\n  ) external returns (uint128)\n")),(0,a.kt)("h3",{id:"maxfytokenin"},"maxFYTokenIn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxFYTokenIn(\n  ) external returns (uint128)\n")),(0,a.kt)("h3",{id:"maxbasein"},"maxBaseIn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxBaseIn(\n  ) external returns (uint128)\n")),(0,a.kt)("h3",{id:"maxbaseout"},"maxBaseOut"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxBaseOut(\n  ) external returns (uint128)\n")))}f.isMDXComponent=!0}}]);