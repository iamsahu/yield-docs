"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[7336],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1910:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},u="ChainlinkMultiOracle",c={unversionedId:"developers/contracts/oracles/chainlink/ChainlinkMultiOracle",id:"developers/contracts/oracles/chainlink/ChainlinkMultiOracle",title:"ChainlinkMultiOracle",description:"Chainlink only uses USD or ETH as a quote in the aggregators, and we will use only ETH",source:"@site/docs/developers/contracts/oracles/chainlink/ChainlinkMultiOracle.md",sourceDirName:"developers/contracts/oracles/chainlink",slug:"/developers/contracts/oracles/chainlink/ChainlinkMultiOracle",permalink:"/yield-docs/developers/contracts/oracles/chainlink/ChainlinkMultiOracle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/oracles/chainlink/ChainlinkMultiOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ChainlinkL2USDMultiOracle",permalink:"/yield-docs/developers/contracts/oracles/chainlink/ChainlinkL2USDMultiOracle"},next:{title:"ChainlinkUSDMultiOracle",permalink:"/yield-docs/developers/contracts/oracles/chainlink/ChainlinkUSDMultiOracle"}},s={},p=[{value:"SourceSet",id:"sourceset",level:3},{value:"Source",id:"source",level:3},{value:"sources",id:"sources",level:3},{value:"setSource",id:"setsource",level:3},{value:"peek",id:"peek",level:3},{value:"get",id:"get",level:3},{value:"_peek",id:"_peek",level:3},{value:"_peekThroughETH",id:"_peekthrougheth",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chainlinkmultioracle"},"ChainlinkMultiOracle"),(0,o.kt)("p",null,"Chainlink only uses USD or ETH as a quote in the aggregators, and we will use only ETH"),(0,o.kt)("h3",{id:"sourceset"},"SourceSet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"event SourceSet(bytes6 baseId, contract IERC20Metadata base, bytes6 quoteId, contract IERC20Metadata quote, address source)\n")),(0,o.kt)("h3",{id:"source"},"Source"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Source {\n  address source;\n  uint8 baseDecimals;\n  uint8 quoteDecimals;\n  bool inverse;\n}\n")),(0,o.kt)("h3",{id:"sources"},"sources"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => struct ChainlinkMultiOracle.Source)) sources\n")),(0,o.kt)("h3",{id:"setsource"},"setSource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSource(bytes6 baseId, contract IERC20Metadata base, bytes6 quoteId, contract IERC20Metadata quote, address source) external\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Set or reset an oracle source and its inverse")),(0,o.kt)("h3",{id:"peek"},"peek"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function peek(bytes32 baseId, bytes32 quoteId, uint256 amountBase) external view virtual returns (uint256 amountQuote, uint256 updateTime)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price.")),(0,o.kt)("h3",{id:"get"},"get"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function get(bytes32 baseId, bytes32 quoteId, uint256 amountBase) external virtual returns (uint256 amountQuote, uint256 updateTime)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price, updating state if necessary. Same as ",(0,o.kt)("inlineCode",{parentName:"em"},"peek")," for this oracle.")),(0,o.kt)("h3",{id:"_peek"},"_peek"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function _peek(bytes6 baseId, bytes6 quoteId, uint256 amountBase) private view returns (uint256 amountQuote, uint256 updateTime)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price.")),(0,o.kt)("h3",{id:"_peekthrougheth"},"_peekThroughETH"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function _peekThroughETH(bytes6 baseId, bytes6 quoteId, uint256 amountBase) private view returns (uint256 amountQuote, uint256 updateTime)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price, using ETH as an intermediate step.")))}m.isMDXComponent=!0}}]);