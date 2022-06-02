"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[1409],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),d=p(a),k=r,c=d["".concat(i,".").concat(k)]||d[k]||s[k]||l;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},639:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],u={},i="CompositeMultiOracle",p={unversionedId:"oracles/composite/CompositeMultiOracle",id:"oracles/composite/CompositeMultiOracle",title:"CompositeMultiOracle",description:"SourceSet",source:"@site/docs/oracles/composite/CompositeMultiOracle.md",sourceDirName:"oracles/composite",slug:"/oracles/composite/CompositeMultiOracle",permalink:"/yield-docs/docs/oracles/composite/CompositeMultiOracle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/main/packages/create-docusaurus/templates/shared/docs/oracles/composite/CompositeMultiOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FlagsInterface",permalink:"/yield-docs/docs/oracles/chainlink/FlagsInterface"},next:{title:"CTokenInterface",permalink:"/yield-docs/docs/oracles/compound/CTokenInterface"}},m={},s=[{value:"SourceSet",id:"sourceset",level:3},{value:"PathSet",id:"pathset",level:3},{value:"sources",id:"sources",level:3},{value:"paths",id:"paths",level:3},{value:"setSource",id:"setsource",level:3},{value:"setPath",id:"setpath",level:3},{value:"peek",id:"peek",level:3},{value:"get",id:"get",level:3},{value:"_peek",id:"_peek",level:3},{value:"_get",id:"_get",level:3}],d={toc:s};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"compositemultioracle"},"CompositeMultiOracle"),(0,l.kt)("h3",{id:"sourceset"},"SourceSet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event SourceSet(bytes6 baseId, bytes6 quoteId, contract IOracle source)\n")),(0,l.kt)("h3",{id:"pathset"},"PathSet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event PathSet(bytes6 baseId, bytes6 quoteId, bytes6[] path)\n")),(0,l.kt)("h3",{id:"sources"},"sources"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => contract IOracle)) sources\n")),(0,l.kt)("h3",{id:"paths"},"paths"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => bytes6[])) paths\n")),(0,l.kt)("h3",{id:"setsource"},"setSource"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSource(bytes6 baseId, bytes6 quoteId, contract IOracle source) external\n")),(0,l.kt)("p",null,"Set or reset a Yearn Vault Token oracle source and its inverse"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"id used for underlying base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quoteId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"id used for underlying quote token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"contract IOracle"),(0,l.kt)("td",{parentName:"tr",align:null},"Oracle contract for source")))),(0,l.kt)("h3",{id:"setpath"},"setPath"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setPath(bytes6 base, bytes6 quote, bytes6[] path) external\n")),(0,l.kt)("p",null,"Set or reset an price path and its reverse path"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quote"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of quote token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path from base to quote")))),(0,l.kt)("h3",{id:"peek"},"peek"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function peek(bytes32 base, bytes32 quote, uint256 amountBase) external view virtual returns (uint256 amountQuote, uint256 updateTime)\n")),(0,l.kt)("p",null,"Convert amountBase base into quote at the latest oracle price, through a path is exists."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quote"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of quote token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountBase"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of base to convert to quote")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountQuote"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of quote token converted from base")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"get"},"get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function get(bytes32 base, bytes32 quote, uint256 amountBase) external virtual returns (uint256 amountQuote, uint256 updateTime)\n")),(0,l.kt)("p",null,"Convert amountBase base into quote at the latest oracle price, through a path is exists."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"This function is transactional")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quote"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of quote token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountBase"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of base to convert to quote")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountQuote"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of quote token converted from base")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"_peek"},"_peek"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _peek(bytes6 base, bytes6 quote, uint256 amountBase, uint256 updateTimeIn) private view returns (uint256 amountQuote, uint256 updateTimeOut)\n")),(0,l.kt)("p",null,"Convert amountBase base into quote at the latest oracle price, through a path is exists."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quote"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of quote token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountBase"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of base to convert to quote")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTimeIn"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Lowest updateTime value obtained received seen until now")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountQuote"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of quote token converted from base")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTimeOut"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Lower of current price's updateTime or updateTimeIn")))),(0,l.kt)("h3",{id:"_get"},"_get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _get(bytes6 base, bytes6 quote, uint256 amountBase, uint256 updateTimeIn) private returns (uint256 amountQuote, uint256 updateTimeOut)\n")),(0,l.kt)("p",null,"Convert amountBase base into quote at the latest oracle price, through a path is exists."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quote"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of quote token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountBase"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of base to convert to quote")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTimeIn"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Lowest updateTime value obtained received seen until now")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amountQuote"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of quote token converted from base")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTimeOut"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Lower of current price's updateTime or updateTimeIn")))))}k.isMDXComponent=!0}}]);