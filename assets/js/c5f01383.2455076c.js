"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[1421],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7245:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},u="NotionalMultiOracle",s={unversionedId:"other/notional/NotionalMultiOracle",id:"other/notional/NotionalMultiOracle",title:"NotionalMultiOracle",description:"We value fCash assets at face value. We still need to account from conversions",source:"@site/docs/other/notional/NotionalMultiOracle.md",sourceDirName:"other/notional",slug:"/other/notional/NotionalMultiOracle",permalink:"/yield-docs/docs/other/notional/NotionalMultiOracle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/main/packages/create-docusaurus/templates/shared/docs/other/notional/NotionalMultiOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NotionalJoin",permalink:"/yield-docs/docs/other/notional/NotionalJoin"},next:{title:"Transfer1155Module",permalink:"/yield-docs/docs/other/notional/Transfer1155Module"}},c={},p=[{value:"SourceSet",id:"sourceset",level:3},{value:"Source",id:"source",level:3},{value:"FCASH_DECIMALS",id:"fcash_decimals",level:3},{value:"sources",id:"sources",level:3},{value:"setSource",id:"setsource",level:3},{value:"peek",id:"peek",level:3},{value:"get",id:"get",level:3},{value:"_peek",id:"_peek",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notionalmultioracle"},"NotionalMultiOracle"),(0,o.kt)("p",null,"We value fCash assets at face value. We still need to account from conversions\nbetween fCash's 8 decimals and the decimals of the underlying."),(0,o.kt)("h3",{id:"sourceset"},"SourceSet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"event SourceSet(bytes6 notionalId, bytes6 underlyingId, address underlying)\n")),(0,o.kt)("h3",{id:"source"},"Source"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Source {\n  uint8 baseDecimals;\n  uint8 quoteDecimals;\n  bool set;\n}\n")),(0,o.kt)("h3",{id:"fcash_decimals"},"FCASH_DECIMALS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"uint8 FCASH_DECIMALS\n")),(0,o.kt)("h3",{id:"sources"},"sources"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => struct NotionalMultiOracle.Source)) sources\n")),(0,o.kt)("h3",{id:"setsource"},"setSource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSource(bytes6 notionalId, bytes6 underlyingId, contract IERC20Metadata underlying) external\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Set or reset an oracle source and its inverse")),(0,o.kt)("h3",{id:"peek"},"peek"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function peek(bytes32 baseId, bytes32 quoteId, uint256 amountBase) external view virtual returns (uint256 amountQuote, uint256 updateTime)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price.")),(0,o.kt)("h3",{id:"get"},"get"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function get(bytes32 baseId, bytes32 quoteId, uint256 amountBase) external virtual returns (uint256 amountQuote, uint256 updateTime)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price, updating state if necessary. Same as ",(0,o.kt)("inlineCode",{parentName:"em"},"peek")," for this oracle.")),(0,o.kt)("h3",{id:"_peek"},"_peek"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function _peek(bytes6 baseId, bytes6 quoteId, uint256 amountBase) private view returns (uint256 amountQuote, uint256 updateTime)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Convert amountBase base into quote at the latest oracle price.")))}m.isMDXComponent=!0}}]);