"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[8475],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},c="ChainlinkL2USDMultiOracle",u={unversionedId:"oracles/chainlink/ChainlinkL2USDMultiOracle",id:"oracles/chainlink/ChainlinkL2USDMultiOracle",title:"ChainlinkL2USDMultiOracle",description:"Chainlink recommends checking the sequencer status on some L2 networks to avoid",source:"@site/docs/oracles/chainlink/ChainlinkL2USDMultiOracle.md",sourceDirName:"oracles/chainlink",slug:"/oracles/chainlink/ChainlinkL2USDMultiOracle",permalink:"/yield-docs/oracles/chainlink/ChainlinkL2USDMultiOracle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/oracles/chainlink/ChainlinkL2USDMultiOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AggregatorV3Interface",permalink:"/yield-docs/oracles/chainlink/AggregatorV3Interface"},next:{title:"ChainlinkMultiOracle",permalink:"/yield-docs/oracles/chainlink/ChainlinkMultiOracle"}},s={},p=[{value:"chainlinkFlags",id:"chainlinkflags",level:3},{value:"FLAG_ARBITRUM_SEQ_OFFLINE",id:"flag_arbitrum_seq_offline",level:3},{value:"constructor",id:"constructor",level:3},{value:"onlyFresh",id:"onlyfresh",level:3},{value:"peek",id:"peek",level:3},{value:"get",id:"get",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chainlinkl2usdmultioracle"},"ChainlinkL2USDMultiOracle"),(0,i.kt)("p",null,"Chainlink recommends checking the sequencer status on some L2 networks to avoid\nreading stale data"),(0,i.kt)("p",null,"  ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/docs/l2-sequencer-flag/"},"https://docs.chain.link/docs/l2-sequencer-flag/")),(0,i.kt)("h3",{id:"chainlinkflags"},"chainlinkFlags"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"contract FlagsInterface chainlinkFlags\n")),(0,i.kt)("h3",{id:"flag_arbitrum_seq_offline"},"FLAG_ARBITRUM_SEQ_OFFLINE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"address FLAG_ARBITRUM_SEQ_OFFLINE\n")),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(contract FlagsInterface flags) public\n")),(0,i.kt)("h3",{id:"onlyfresh"},"onlyFresh"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"modifier onlyFresh()\n")),(0,i.kt)("h3",{id:"peek"},"peek"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function peek(bytes32 baseId, bytes32 quoteId, uint256 amountBase) external view virtual returns (uint256 amountQuote, uint256 updateTime)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price.")),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function get(bytes32 baseId, bytes32 quoteId, uint256 amountBase) external virtual returns (uint256 amountQuote, uint256 updateTime)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price, updating state if necessary. Same as ",(0,i.kt)("inlineCode",{parentName:"em"},"peek")," for this oracle.")))}f.isMDXComponent=!0}}]);