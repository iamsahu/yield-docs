"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[2087],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(k,u(u({ref:t},p),{},{components:a})):n.createElement(k,u({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var s=2;s<l;s++)u[s]=a[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3696:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),u=["components"],o={},i="YearnVaultMultiOracle",s={unversionedId:"developers/contracts/oracles/yearn/YearnVaultMultiOracle",id:"developers/contracts/oracles/yearn/YearnVaultMultiOracle",title:"YearnVaultMultiOracle",description:"Provides current values for Yearn Vault tokens (e.g. yvUSDC/USDC)",source:"@site/docs/developers/contracts/oracles/yearn/YearnVaultMultiOracle.md",sourceDirName:"developers/contracts/oracles/yearn",slug:"/developers/contracts/oracles/yearn/YearnVaultMultiOracle",permalink:"/yield-docs/developers/contracts/oracles/yearn/YearnVaultMultiOracle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/oracles/yearn/YearnVaultMultiOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IYvToken",permalink:"/yield-docs/developers/contracts/oracles/yearn/IYvToken"},next:{title:"IPoolOracle",permalink:"/yield-docs/developers/contracts/oracles/yieldspace/IPoolOracle"}},p={},d=[{value:"SourceSet",id:"sourceset",level:3},{value:"Source",id:"source",level:3},{value:"sources",id:"sources",level:3},{value:"setSource",id:"setsource",level:3},{value:"_setSource",id:"_setsource",level:3},{value:"get",id:"get",level:3},{value:"peek",id:"peek",level:3},{value:"_peek",id:"_peek",level:3}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"yearnvaultmultioracle"},"YearnVaultMultiOracle"),(0,l.kt)("p",null,"Provides current values for Yearn Vault tokens (e.g. yvUSDC/USDC)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Both peek() and get() are provided for convenience\nPrices are calculated, never based on cached values")),(0,l.kt)("h3",{id:"sourceset"},"SourceSet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event SourceSet(bytes6 baseId, bytes6 quoteId, address source, uint8 decimals)\n")),(0,l.kt)("h3",{id:"source"},"Source"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Source {\n  address source;\n  uint8 decimals;\n  bool inverse;\n}\n")),(0,l.kt)("h3",{id:"sources"},"sources"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => struct YearnVaultMultiOracle.Source)) sources\n")),(0,l.kt)("p",null,"This is a registry of baseId => quoteId => Source\nused to look up the Yearn vault address needed to calculate share price"),(0,l.kt)("h3",{id:"setsource"},"setSource"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSource(bytes6 underlyingId, bytes6 vaultTokenId, contract IYvToken vaultToken) external\n")),(0,l.kt)("p",null,"Set or reset a Yearn Vault Token oracle source and its inverse"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"parameter ORDER IS crucial!  If id's are out of order the math will be wrong")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"underlyingId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"id used for underlying base token (e.g. USDC)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vaultTokenId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"address for Yearn vault token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vaultToken"),(0,l.kt)("td",{parentName:"tr",align:null},"contract IYvToken"),(0,l.kt)("td",{parentName:"tr",align:null},"address for Yearn vault token")))),(0,l.kt)("h3",{id:"_setsource"},"_setSource"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _setSource(bytes6 baseId, bytes6 quoteId, contract IYvToken source, uint8 decimals, bool inverse) internal\n")),(0,l.kt)("p",null,"internal function to set source and emit event"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"id used for base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quoteId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"id for quote (represents vaultToken when inverse == false)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"contract IYvToken"),(0,l.kt)("td",{parentName:"tr",align:null},"address for vault token used to determine price")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"decimals"),(0,l.kt)("td",{parentName:"tr",align:null},"uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"used by vault token (both source and base)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inverse"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"set true for inverse pairs (e.g. USDC/yvUSDC)")))),(0,l.kt)("h3",{id:"get"},"get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function get(bytes32 baseId, bytes32 quoteId, uint256 amountBase) external returns (uint256 amountQuote, uint256 updateTime)\n")),(0,l.kt)("p",null,"External function to convert amountBase base at the current vault share price"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"This external function calls _peek() which calculates current (not cached) price")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"id of base (denominator of rate used)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quoteId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"id of quote (returned amount in this)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountBase"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"amount in base to convert to amount in quote")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountQuote"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"product of exchange rate and amountBase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"current block timestamp")))),(0,l.kt)("h3",{id:"peek"},"peek"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function peek(bytes32 baseId, bytes32 quoteId, uint256 amountBase) external view returns (uint256 amountQuote, uint256 updateTime)\n")),(0,l.kt)("p",null,"External function to convert amountBase at the current vault share price"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"This function is exactly the same as get() and provided as a convenience\nfor contracts that need to call peek")),(0,l.kt)("h3",{id:"_peek"},"_peek"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _peek(bytes6 baseId, bytes6 quoteId, uint256 amountBase) internal view returns (uint256 amountQuote, uint256 updateTime)\n")),(0,l.kt)("p",null,"Used to convert a given amount using the current vault share price"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"This internal function is called by external functions peek() and get()")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"id of base (denominator of rate used)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quoteId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"id of quote (returned amount converted to this)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountBase"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"amount in base to convert to amount in quote")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountQuote"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"product of exchange rate and amountBase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"current block timestamp")))))}m.isMDXComponent=!0}}]);