"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[6029],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},273:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l="User Documentation",c={unversionedId:"users/readme",id:"users/readme",title:"User Documentation",description:"The Yield v2 App is available at\xa0https://app.yieldprotocol.com.",source:"@site/docs/users/readme.md",sourceDirName:"users",slug:"/users/",permalink:"/yield-docs/users/",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/users/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/yield-docs/troubleshooting"},next:{title:"Borrowing",permalink:"/yield-docs/users/borrowing"}},u={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-documentation"},"User Documentation"),(0,a.kt)("p",null,"The Yield v2 App is available at\xa0",(0,a.kt)("a",{parentName:"p",href:"https://app.yieldprotocol.com/"},"https://app.yieldprotocol.com"),"."),(0,a.kt)("p",null,"Using the Yield App, you can borrow or lend assets at a fixed rate for a fixed term. You may also use the Yield app to provide liquidity to earn fees from other users looking to borrow and lend."),(0,a.kt)("p",null,"At the core of Yield are user-owned vaults representing a collateralized debt position. Each vault is associated with single collateral and debt in a single series."),(0,a.kt)("p",null,"A series represents a single borrowable asset with a defined maturity date. Each series corresponds to a single ERC-20 fyToken. For example, Alice may own a vault with ETH collateral and debt in the September 25th, 2021 USDC series which represents an obligation to repay USDC on that date."))}f.isMDXComponent=!0}}]);