"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[6537],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,s=m["".concat(i,".").concat(k)]||m[k]||c[k]||l;return a?n.createElement(s,o(o({ref:e},d),{},{components:a})):n.createElement(s,o({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3190:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],u={},i="Cvx3CrvOracle",p={unversionedId:"oracles/convex/Cvx3CrvOracle",id:"oracles/convex/Cvx3CrvOracle",title:"Cvx3CrvOracle",description:"Provides current values for Cvx3Crv",source:"@site/docs/oracles/convex/Cvx3CrvOracle.md",sourceDirName:"oracles/convex",slug:"/oracles/convex/Cvx3CrvOracle",permalink:"/docs/oracles/convex/Cvx3CrvOracle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/main/packages/create-docusaurus/templates/shared/docs/oracles/convex/Cvx3CrvOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CompoundMultiOracle",permalink:"/docs/oracles/compound/CompoundMultiOracle"},next:{title:"ICurvePool",permalink:"/docs/oracles/convex/ICurvePool"}},d={},c=[{value:"threecrv",id:"threecrv",level:3},{value:"DAI",id:"dai",level:3},{value:"USDC",id:"usdc",level:3},{value:"USDT",id:"usdt",level:3},{value:"cvx3CrvId",id:"cvx3crvid",level:3},{value:"ethId",id:"ethid",level:3},{value:"SourceSet",id:"sourceset",level:3},{value:"setSource",id:"setsource",level:3},{value:"min",id:"min",level:3},{value:"peek",id:"peek",level:3},{value:"get",id:"get",level:3},{value:"_peek",id:"_peek",level:3}],m={toc:c};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cvx3crvoracle"},"Cvx3CrvOracle"),(0,l.kt)("p",null,"Provides current values for Cvx3Crv"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Both peek() (view) and get() (transactional) are provided for convenience")),(0,l.kt)("h3",{id:"threecrv"},"threecrv"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"contract ICurvePool threecrv\n")),(0,l.kt)("h3",{id:"dai"},"DAI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"contract AggregatorV3Interface DAI\n")),(0,l.kt)("h3",{id:"usdc"},"USDC"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"contract AggregatorV3Interface USDC\n")),(0,l.kt)("h3",{id:"usdt"},"USDT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"contract AggregatorV3Interface USDT\n")),(0,l.kt)("h3",{id:"cvx3crvid"},"cvx3CrvId"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes32 cvx3CrvId\n")),(0,l.kt)("h3",{id:"ethid"},"ethId"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes32 ethId\n")),(0,l.kt)("h3",{id:"sourceset"},"SourceSet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event SourceSet(bytes32 cvx3CrvId_, bytes32 ethId_, contract ICurvePool threecrv_, contract AggregatorV3Interface DAI_, contract AggregatorV3Interface USDC_, contract AggregatorV3Interface USDT_)\n")),(0,l.kt)("h3",{id:"setsource"},"setSource"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSource(bytes32 cvx3CrvId_, bytes32 ethId_, contract ICurvePool threecrv_, contract AggregatorV3Interface DAI_, contract AggregatorV3Interface USDC_, contract AggregatorV3Interface USDT_) external\n")),(0,l.kt)("p",null,"Set threecrv pool and the chainlink sources"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cvx3CrvId_"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"cvx3crv Id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ethId_"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"ETH ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"threecrv_"),(0,l.kt)("td",{parentName:"tr",align:null},"contract ICurvePool"),(0,l.kt)("td",{parentName:"tr",align:null},"The 3CRV pool address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DAI_"),(0,l.kt)("td",{parentName:"tr",align:null},"contract AggregatorV3Interface"),(0,l.kt)("td",{parentName:"tr",align:null},"DAI/ETH chainlink price feed address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USDC_"),(0,l.kt)("td",{parentName:"tr",align:null},"contract AggregatorV3Interface"),(0,l.kt)("td",{parentName:"tr",align:null},"USDC/ETH chainlink price feed address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USDT_"),(0,l.kt)("td",{parentName:"tr",align:null},"contract AggregatorV3Interface"),(0,l.kt)("td",{parentName:"tr",align:null},"USDT/ETH chainlink price feed address")))),(0,l.kt)("h3",{id:"min"},"min"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function min(uint256 a, uint256 b) internal pure returns (uint256)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Returns the smallest of two numbers.")),(0,l.kt)("h3",{id:"peek"},"peek"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function peek(bytes32 base, bytes32 quote, uint256 baseAmount) external view virtual returns (uint256 quoteAmount, uint256 updateTime)\n")),(0,l.kt)("p",null,"Retrieve the value of the amount at the latest oracle price."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Only cvx3crvid and ethId are accepted as asset identifiers.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quote"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of quoted token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of base token for which to get a quote")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quoteAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Total amount in terms of quoted token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Time quote was last updated")))),(0,l.kt)("h3",{id:"get"},"get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function get(bytes32 base, bytes32 quote, uint256 baseAmount) external virtual returns (uint256 quoteAmount, uint256 updateTime)\n")),(0,l.kt)("p",null,"Retrieve the value of the amount at the latest oracle price. Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"peek")," for this oracle."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Only cvx3crvid and ethId are accepted as asset identifiers.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quote"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of quoted token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of base token for which to get a quote")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quoteAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Total amount in terms of quoted token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Time quote was last updated")))),(0,l.kt)("h3",{id:"_peek"},"_peek"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _peek(bytes6 base, bytes6 quote, uint256 baseAmount) private view returns (uint256 quoteAmount, uint256 updateTime)\n")),(0,l.kt)("p",null,"Retrieve the value of the amount at the latest oracle price."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Only cvx3crvid and ethId are accepted as asset identifiers.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of base token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quote"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of quoted token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"baseAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of base token for which to get a quote")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quoteAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Total amount in terms of quoted token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updateTime"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Time quote was last updated")))))}k.isMDXComponent=!0}}]);