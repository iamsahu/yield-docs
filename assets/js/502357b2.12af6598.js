"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[546],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u="ChainlinkMultiOracle",c={unversionedId:"oracles/chainlink/ChainlinkMultiOracle",id:"oracles/chainlink/ChainlinkMultiOracle",title:"ChainlinkMultiOracle",description:"Chainlink only uses USD or ETH as a quote in the aggregators, and we will use only ETH",source:"@site/docs/oracles/chainlink/ChainlinkMultiOracle.md",sourceDirName:"oracles/chainlink",slug:"/oracles/chainlink/ChainlinkMultiOracle",permalink:"/yield-docs/docs/oracles/chainlink/ChainlinkMultiOracle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/main/packages/create-docusaurus/templates/shared/docs/oracles/chainlink/ChainlinkMultiOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ChainlinkL2USDMultiOracle",permalink:"/yield-docs/docs/oracles/chainlink/ChainlinkL2USDMultiOracle"},next:{title:"ChainlinkUSDMultiOracle",permalink:"/yield-docs/docs/oracles/chainlink/ChainlinkUSDMultiOracle"}},s={},p=[{value:"SourceSet",id:"sourceset",level:3},{value:"Source",id:"source",level:3},{value:"sources",id:"sources",level:3},{value:"setSource",id:"setsource",level:3},{value:"peek",id:"peek",level:3},{value:"get",id:"get",level:3},{value:"_peek",id:"_peek",level:3},{value:"_peekThroughETH",id:"_peekthrougheth",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chainlinkmultioracle"},"ChainlinkMultiOracle"),(0,i.kt)("p",null,"Chainlink only uses USD or ETH as a quote in the aggregators, and we will use only ETH"),(0,i.kt)("h3",{id:"sourceset"},"SourceSet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event SourceSet(bytes6 baseId, contract IERC20Metadata base, bytes6 quoteId, contract IERC20Metadata quote, address source)\n")),(0,i.kt)("h3",{id:"source"},"Source"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Source {\n  address source;\n  uint8 baseDecimals;\n  uint8 quoteDecimals;\n  bool inverse;\n}\n")),(0,i.kt)("h3",{id:"sources"},"sources"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => struct ChainlinkMultiOracle.Source)) sources\n")),(0,i.kt)("h3",{id:"setsource"},"setSource"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSource(bytes6 baseId, contract IERC20Metadata base, bytes6 quoteId, contract IERC20Metadata quote, address source) external\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Set or reset an oracle source and its inverse")),(0,i.kt)("h3",{id:"peek"},"peek"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function peek(bytes32 baseId, bytes32 quoteId, uint256 amountBase) external view virtual returns (uint256 amountQuote, uint256 updateTime)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price.")),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function get(bytes32 baseId, bytes32 quoteId, uint256 amountBase) external virtual returns (uint256 amountQuote, uint256 updateTime)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price, updating state if necessary. Same as ",(0,i.kt)("inlineCode",{parentName:"em"},"peek")," for this oracle.")),(0,i.kt)("h3",{id:"_peek"},"_peek"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _peek(bytes6 baseId, bytes6 quoteId, uint256 amountBase) private view returns (uint256 amountQuote, uint256 updateTime)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price.")),(0,i.kt)("h3",{id:"_peekthrougheth"},"_peekThroughETH"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _peekThroughETH(bytes6 baseId, bytes6 quoteId, uint256 amountBase) private view returns (uint256 amountQuote, uint256 updateTime)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price, using ETH as an intermediate step.")))}m.isMDXComponent=!0}}]);