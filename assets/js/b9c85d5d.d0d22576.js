"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[6968],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return v}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(t),v=o,d=f["".concat(u,".").concat(v)]||f[v]||p[v]||c;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7728:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),a=["components"],i={},u="ICurvePool",l={unversionedId:"oracles/convex/ICurvePool",id:"oracles/convex/ICurvePool",title:"ICurvePool",description:"getvirtualprice",source:"@site/docs/oracles/convex/ICurvePool.md",sourceDirName:"oracles/convex",slug:"/oracles/convex/ICurvePool",permalink:"/docs/oracles/convex/ICurvePool",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/oracles/convex/ICurvePool.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cvx3CrvOracle",permalink:"/docs/oracles/convex/Cvx3CrvOracle"},next:{title:"IWstETH",permalink:"/docs/oracles/lido/IWstETH"}},s={},p=[{value:"get_virtual_price",id:"get_virtual_price",level:3}],f={toc:p};function v(e){var r=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"icurvepool"},"ICurvePool"),(0,c.kt)("h3",{id:"get_virtual_price"},"get_virtual_price"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-solidity"},"function get_virtual_price() external view returns (uint256 price)\n")))}v.isMDXComponent=!0}}]);