"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[1],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),u=p(a),s=r,f=u["".concat(o,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(f,i(i({ref:e},d),{},{components:a})):n.createElement(f,i({ref:e},d))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},839:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],m={},o=void 0,p={unversionedId:"developers/contracts/yieldspace/YieldMath",id:"developers/contracts/yieldspace/YieldMath",title:"YieldMath",description:"Ethereum smart contract library implementing Yield Math model.",source:"@site/docs/developers/contracts/yieldspace/YieldMath.md",sourceDirName:"developers/contracts/yieldspace",slug:"/developers/contracts/yieldspace/YieldMath",permalink:"/yield-docs/developers/contracts/yieldspace/YieldMath",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/yieldspace/YieldMath.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PoolFactory",permalink:"/yield-docs/developers/contracts/yieldspace/PoolFactory"},next:{title:"PoolExtensions",permalink:"/yield-docs/developers/contracts/yieldspace/extensions/PoolExtensions"}},d={},k=[{value:"Functions",id:"functions",level:2},{value:"invariant",id:"invariant",level:3},{value:"fyTokenOutForBaseIn",id:"fytokenoutforbasein",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"baseOutForFYTokenIn",id:"baseoutforfytokenin",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"fyTokenInForBaseOut",id:"fytokeninforbaseout",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"baseInForFYTokenOut",id:"baseinforfytokenout",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Values:",id:"return-values-3",level:4},{value:"maxFYTokenOut",id:"maxfytokenout",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Return Values:",id:"return-values-4",level:4},{value:"maxFYTokenIn",id:"maxfytokenin",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Return Values:",id:"return-values-5",level:4},{value:"maxBaseIn",id:"maxbasein",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Return Values:",id:"return-values-6",level:4},{value:"maxBaseOut",id:"maxbaseout",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Return Values:",id:"return-values-7",level:4}],u={toc:k};function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ethereum smart contract library implementing Yield Math model."),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"invariant"},"invariant"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function invariant(\n  ) public returns (uint128)\n")),(0,l.kt)("p",null,"Calculate a YieldSpace pool invariant according to the whitepaper"),(0,l.kt)("h3",{id:"fytokenoutforbasein"},"fyTokenOutForBaseIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function fyTokenOutForBaseIn(\n    uint128 baseReserves,\n    uint128 fyTokenReserves,\n    uint128 baseAmount,\n    uint128 timeTillMaturity,\n    int128 ts,\n    int128 g\n  ) public returns (uint128)\n")),(0,l.kt)("p",null,"Calculate the amount of fyToken a user would get for given amount of Base.\n",(0,l.kt)("a",{parentName:"p",href:"https://www.desmos.com/calculator/5nf2xuy6yb"},"https://www.desmos.com/calculator/5nf2xuy6yb")),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"base reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fyTokenReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fyToken reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"base amount to be traded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timeTillMaturity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ts")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity coefficient, multiplied by 2^64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"g")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fee coefficient, multiplied by 2^64")))),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"the")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of fyToken a user would get for given amount of Base")))),(0,l.kt)("h3",{id:"baseoutforfytokenin"},"baseOutForFYTokenIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function baseOutForFYTokenIn(\n    uint128 baseReserves,\n    uint128 fyTokenReserves,\n    uint128 fyTokenAmount,\n    uint128 timeTillMaturity,\n    int128 ts,\n    int128 g\n  ) public returns (uint128)\n")),(0,l.kt)("p",null,"Calculate the amount of base a user would get for certain amount of fyToken.\n",(0,l.kt)("a",{parentName:"p",href:"https://www.desmos.com/calculator/6jlrre7ybt"},"https://www.desmos.com/calculator/6jlrre7ybt")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"base reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fyTokenReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fyToken reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fyTokenAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fyToken amount to be traded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timeTillMaturity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ts")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity coefficient, multiplied by 2^64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"g")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fee coefficient, multiplied by 2^64")))),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"the")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of Base a user would get for given amount of fyToken")))),(0,l.kt)("h3",{id:"fytokeninforbaseout"},"fyTokenInForBaseOut"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function fyTokenInForBaseOut(\n    uint128 baseReserves,\n    uint128 fyTokenReserves,\n    uint128 baseAmount,\n    uint128 timeTillMaturity,\n    int128 ts,\n    int128 g\n  ) public returns (uint128)\n")),(0,l.kt)("p",null,"Calculate the amount of fyToken a user could sell for given amount of Base.\n",(0,l.kt)("a",{parentName:"p",href:"https://www.desmos.com/calculator/0rgnmtckvy"},"https://www.desmos.com/calculator/0rgnmtckvy")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"base reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fyTokenReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fyToken reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Base amount to be traded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timeTillMaturity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ts")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity coefficient, multiplied by 2^64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"g")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fee coefficient, multiplied by 2^64")))),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"the")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of fyToken a user could sell for given amount of Base")))),(0,l.kt)("h3",{id:"baseinforfytokenout"},"baseInForFYTokenOut"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function baseInForFYTokenOut(\n    uint128 baseReserves,\n    uint128 fyTokenReserves,\n    uint128 fyTokenAmount,\n    uint128 timeTillMaturity,\n    int128 ts,\n    int128 g\n  ) public returns (uint128)\n")),(0,l.kt)("p",null,"Calculate the amount of base a user would have to pay for certain amount of fyToken.\n",(0,l.kt)("a",{parentName:"p",href:"https://www.desmos.com/calculator/ws5oqj8x5i"},"https://www.desmos.com/calculator/ws5oqj8x5i")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Base reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fyTokenReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fyToken reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fyTokenAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fyToken amount to be traded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timeTillMaturity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ts")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity coefficient, multiplied by 2^64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"g")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fee coefficient, multiplied by 2^64")))),(0,l.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"the")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of base a user would have to pay for given amount of")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    fyToken\n")),(0,l.kt)("h3",{id:"maxfytokenout"},"maxFYTokenOut"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxFYTokenOut(\n    uint128 baseReserves,\n    uint128 fyTokenReserves,\n    uint128 timeTillMaturity,\n    int128 ts,\n    int128 g\n  ) public returns (uint128)\n")),(0,l.kt)("p",null,"Calculate the max amount of fyTokens that can be bought from the pool without making the interest rate negative.\nSee section 6.3 of the YieldSpace White paper"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Base reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fyTokenReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fyToken reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timeTillMaturity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ts")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity coefficient, multiplied by 2^64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"g")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fee coefficient, multiplied by 2^64")))),(0,l.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"max")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of fyTokens that can be bought from the pool")))),(0,l.kt)("h3",{id:"maxfytokenin"},"maxFYTokenIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxFYTokenIn(\n    uint128 baseReserves,\n    uint128 fyTokenReserves,\n    uint128 timeTillMaturity,\n    int128 ts,\n    int128 g\n  ) public returns (uint128)\n")),(0,l.kt)("p",null,"Calculate the max amount of fyTokens that can be sold to into the pool."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Base reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fyTokenReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fyToken reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timeTillMaturity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ts")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity coefficient, multiplied by 2^64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"g")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fee coefficient, multiplied by 2^64")))),(0,l.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"max")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of fyTokens that can be sold to into the pool")))),(0,l.kt)("h3",{id:"maxbasein"},"maxBaseIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxBaseIn(\n    uint128 baseReserves,\n    uint128 fyTokenReserves,\n    uint128 timeTillMaturity,\n    int128 ts,\n    int128 g\n  ) public returns (uint128)\n")),(0,l.kt)("p",null,"Calculate the max amount of base that can be sold to into the pool without making the interest rate negative."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Base reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fyTokenReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fyToken reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timeTillMaturity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ts")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity coefficient, multiplied by 2^64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"g")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fee coefficient, multiplied by 2^64")))),(0,l.kt)("h4",{id:"return-values-6"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"max")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of base that can be sold to into the pool")))),(0,l.kt)("h3",{id:"maxbaseout"},"maxBaseOut"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxBaseOut(\n    uint128 baseReserves,\n    uint128 fyTokenReserves,\n    uint128 timeTillMaturity,\n    int128 ts,\n    int128 g\n  ) public returns (uint128)\n")),(0,l.kt)("p",null,"Calculate the max amount of base that can be bought from the pool."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"baseReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Base reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"fyTokenReserves")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fyToken reserves amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"timeTillMaturity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ts")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"time till maturity coefficient, multiplied by 2^64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"g")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"fee coefficient, multiplied by 2^64")))),(0,l.kt)("h4",{id:"return-values-7"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"max")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of base that can be bought from the pool")))))}s.isMDXComponent=!0}}]);