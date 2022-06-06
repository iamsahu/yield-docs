"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[3042],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(a),m=r,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9183:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},u="YieldSpaceMultiOracle",c={unversionedId:"developers/contracts/oracles/yieldspace/YieldSpaceMultiOracle",id:"developers/contracts/oracles/yieldspace/YieldSpaceMultiOracle",title:"YieldSpaceMultiOracle",description:"SourceSet",source:"@site/docs/developers/contracts/oracles/yieldspace/YieldSpaceMultiOracle.md",sourceDirName:"developers/contracts/oracles/yieldspace",slug:"/developers/contracts/oracles/yieldspace/YieldSpaceMultiOracle",permalink:"/yield-docs/developers/contracts/oracles/yieldspace/YieldSpaceMultiOracle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/oracles/yieldspace/YieldSpaceMultiOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"PoolOracle",permalink:"/yield-docs/developers/contracts/oracles/yieldspace/PoolOracle"},next:{title:"ContangoLadle",permalink:"/yield-docs/developers/contracts/other/contango/ContangoLadle"}},p={},d=[{value:"SourceSet",id:"sourceset",level:3},{value:"Source",id:"source",level:3},{value:"sources",id:"sources",level:3},{value:"poolOracle",id:"pooloracle",level:3},{value:"wad64x64",id:"wad64x64",level:3},{value:"constructor",id:"constructor",level:3},{value:"setSource",id:"setsource",level:3},{value:"peek",id:"peek",level:3},{value:"get",id:"get",level:3},{value:"_source",id:"_source",level:3},{value:"_discount",id:"_discount",level:3}],s={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"yieldspacemultioracle"},"YieldSpaceMultiOracle"),(0,l.kt)("h3",{id:"sourceset"},"SourceSet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event SourceSet(bytes6 baseId, bytes6 quoteId, address pool, uint32 maturity, int128 ts, int128 g)\n")),(0,l.kt)("h3",{id:"source"},"Source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Source {\n  address pool;\n  uint32 maturity;\n  bool lending;\n  int128 ts;\n  int128 g;\n}\n")),(0,l.kt)("h3",{id:"sources"},"sources"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => struct YieldSpaceMultiOracle.Source)) sources\n")),(0,l.kt)("h3",{id:"pooloracle"},"poolOracle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"contract IPoolOracle poolOracle\n")),(0,l.kt)("h3",{id:"wad64x64"},"wad64x64"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"int128 wad64x64\n")),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(contract IPoolOracle _poolOracle) public\n")),(0,l.kt)("h3",{id:"setsource"},"setSource"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSource(bytes6 seriesId, bytes6 baseId, address pool) external\n")),(0,l.kt)("p",null,"Set or reset a FYToken oracle source and its inverse"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"parameter ORDER IS crucial!  If id's are out of order the math will be wrong")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seriesId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"FYToken id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"Underlying id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Pool where you can trade FYToken <-> underlying")))),(0,l.kt)("h3",{id:"peek"},"peek"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function peek(bytes32 base, bytes32 quote, uint256 amount) external view returns (uint256 value, uint256 updateTime)\n")),(0,l.kt)("p",null,"Doesn't refresh the price, but returns the latest value available without doing any transactional operations:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"in wei")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"get"},"get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function get(bytes32 base, bytes32 quote, uint256 amount) external returns (uint256 value, uint256 updateTime)\n")),(0,l.kt)("p",null,"Does whatever work or queries will yield the most up-to-date price, and returns it."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"in wei")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"_source"},"_source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _source(bytes32 base, bytes32 quote) internal view returns (struct YieldSpaceMultiOracle.Source source)\n")),(0,l.kt)("h3",{id:"_discount"},"_discount"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _discount(struct YieldSpaceMultiOracle.Source source, uint256 amount, uint128 unitPrice, uint256 updateTime) internal view returns (uint256)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Discount ",(0,l.kt)("inlineCode",{parentName:"em"},"amount")," using the TWAR oracle rates.\nLending => underlying to FYToken. Borrowing => FYToken to underlying")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"struct YieldSpaceMultiOracle.Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Input params for the formulae")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to be discounted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unitPrice"),(0,l.kt)("td",{parentName:"tr",align:null},"uint128"),(0,l.kt)("td",{parentName:"tr",align:null},"TWAR provided by the oracle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Time when the TWAR observation was calculated")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"the discounted amount, <= ",(0,l.kt)("inlineCode",{parentName:"td"},"amount")," when borrowing, >= ",(0,l.kt)("inlineCode",{parentName:"td"},"amount")," when lending")))))}m.isMDXComponent=!0}}]);