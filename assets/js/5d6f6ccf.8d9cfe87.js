"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[4561],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3955:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],c={},i="CTokenInterface",u={unversionedId:"developers/contracts/oracles/compound/CTokenInterface",id:"developers/contracts/oracles/compound/CTokenInterface",title:"CTokenInterface",description:"borrowIndex",source:"@site/docs/developers/contracts/oracles/compound/CTokenInterface.md",sourceDirName:"developers/contracts/oracles/compound",slug:"/developers/contracts/oracles/compound/CTokenInterface",permalink:"/yield-docs/developers/contracts/oracles/compound/CTokenInterface",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/oracles/compound/CTokenInterface.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CompositeMultiOracle",permalink:"/yield-docs/developers/contracts/oracles/composite/CompositeMultiOracle"},next:{title:"CTokenMultiOracle",permalink:"/yield-docs/developers/contracts/oracles/compound/CTokenMultiOracle"}},p={},s=[{value:"borrowIndex",id:"borrowindex",level:3},{value:"exchangeRateCurrent",id:"exchangeratecurrent",level:3},{value:"exchangeRateStored",id:"exchangeratestored",level:3},{value:"underlying",id:"underlying",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ctokeninterface"},"CTokenInterface"),(0,o.kt)("h3",{id:"borrowindex"},"borrowIndex"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function borrowIndex() external view returns (uint256)\n")),(0,o.kt)("p",null,"Accumulator of the total earned interest rate since the opening of the market"),(0,o.kt)("h3",{id:"exchangeratecurrent"},"exchangeRateCurrent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function exchangeRateCurrent() external returns (uint256)\n")),(0,o.kt)("p",null,"Accrue interest then return the up-to-date exchange rate"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"[0]"),(0,o.kt)("td",{parentName:"tr",align:null},"uint256"),(0,o.kt)("td",{parentName:"tr",align:null},"Calculated exchange rate scaled by 1e18")))),(0,o.kt)("h3",{id:"exchangeratestored"},"exchangeRateStored"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function exchangeRateStored() external view returns (uint256)\n")),(0,o.kt)("p",null,"Calculates the exchange rate from the underlying to the CToken"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This function does not accrue interest before calculating the exchange rate")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"[0]"),(0,o.kt)("td",{parentName:"tr",align:null},"uint256"),(0,o.kt)("td",{parentName:"tr",align:null},"Calculated exchange rate scaled by 1e18")))),(0,o.kt)("h3",{id:"underlying"},"underlying"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function underlying() external view returns (address)\n")),(0,o.kt)("p",null,"Underlying asset for this CToken"))}m.isMDXComponent=!0}}]);