"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[2380],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6415:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},p="PoolOracle",s={unversionedId:"oracles/yieldspace/PoolOracle",id:"oracles/yieldspace/PoolOracle",title:"PoolOracle",description:"_This contract collects data from different YieldSpace pools to compute a TWAR using a SMA (https://www.investopedia.com/terms/s/sma.asp)",source:"@site/docs/oracles/yieldspace/PoolOracle.md",sourceDirName:"oracles/yieldspace",slug:"/oracles/yieldspace/PoolOracle",permalink:"/yield-docs/docs/oracles/yieldspace/PoolOracle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/main/packages/create-docusaurus/templates/shared/docs/oracles/yieldspace/PoolOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IPoolOracle",permalink:"/yield-docs/docs/oracles/yieldspace/IPoolOracle"},next:{title:"YieldSpaceMultiOracle",permalink:"/yield-docs/docs/oracles/yieldspace/YieldSpaceMultiOracle"}},d={},u=[{value:"ObservationRecorded",id:"observationrecorded",level:3},{value:"NoObservationsForPool",id:"noobservationsforpool",level:3},{value:"MissingHistoricalObservation",id:"missinghistoricalobservation",level:3},{value:"InsufficientElapsedTime",id:"insufficientelapsedtime",level:3},{value:"Observation",id:"observation",level:3},{value:"windowSize",id:"windowsize",level:3},{value:"granularity",id:"granularity",level:3},{value:"periodSize",id:"periodsize",level:3},{value:"minTimeElapsed",id:"mintimeelapsed",level:3},{value:"poolObservations",id:"poolobservations",level:3},{value:"constructor",id:"constructor",level:3},{value:"observationIndexOf",id:"observationindexof",level:3},{value:"getOldestObservationInWindow",id:"getoldestobservationinwindow",level:3},{value:"update",id:"update",level:3},{value:"peek",id:"peek",level:3},{value:"get",id:"get",level:3},{value:"_getCurrentCumulativeRatio",id:"_getcurrentcumulativeratio",level:3}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pooloracle"},"PoolOracle"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"This contract collects data from different YieldSpace pools to compute a TWAR using a SMA (",(0,l.kt)("a",{parentName:"em",href:"https://www.investopedia.com/terms/s/sma.asp"},"https://www.investopedia.com/terms/s/sma.asp"),")\nAdapted from ",(0,l.kt)("a",{parentName:"em",href:"https://github.com/Uniswap/v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol"},"https://github.com/Uniswap/v2-periphery/blob/master/contracts/examples/ExampleSlidingWindowOracle.sol"))),(0,l.kt)("h3",{id:"observationrecorded"},"ObservationRecorded"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event ObservationRecorded(address pool, uint256 index, struct PoolOracle.Observation observation)\n")),(0,l.kt)("h3",{id:"noobservationsforpool"},"NoObservationsForPool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"error NoObservationsForPool(address pool)\n")),(0,l.kt)("h3",{id:"missinghistoricalobservation"},"MissingHistoricalObservation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"error MissingHistoricalObservation(address pool)\n")),(0,l.kt)("h3",{id:"insufficientelapsedtime"},"InsufficientElapsedTime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"error InsufficientElapsedTime(address pool, uint256 elapsedTime)\n")),(0,l.kt)("h3",{id:"observation"},"Observation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Observation {\n  uint256 timestamp;\n  uint256 ratioCumulative;\n}\n")),(0,l.kt)("h3",{id:"windowsize"},"windowSize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 windowSize\n")),(0,l.kt)("h3",{id:"granularity"},"granularity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 granularity\n")),(0,l.kt)("h3",{id:"periodsize"},"periodSize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 periodSize\n")),(0,l.kt)("h3",{id:"mintimeelapsed"},"minTimeElapsed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 minTimeElapsed\n")),(0,l.kt)("h3",{id:"poolobservations"},"poolObservations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(address => struct PoolOracle.Observation[]) poolObservations\n")),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(uint256 windowSize_, uint256 granularity_, uint256 minTimeElapsed_) public\n")),(0,l.kt)("h3",{id:"observationindexof"},"observationIndexOf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function observationIndexOf(uint256 timestamp) public view returns (uint256 index)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"calculates the index of the observation corresponding to the given timestamp")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The timestamp to calculate the index for")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The index corresponding to the ",(0,l.kt)("inlineCode",{parentName:"td"},"timestamp"))))),(0,l.kt)("h3",{id:"getoldestobservationinwindow"},"getOldestObservationInWindow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getOldestObservationInWindow(address pool) public view returns (struct PoolOracle.Observation o)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"returns the observation from the oldest epoch (at the beginning of the window) relative to the current time")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of pool for which the observation is required")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"o"),(0,l.kt)("td",{parentName:"tr",align:null},"struct PoolOracle.Observation"),(0,l.kt)("td",{parentName:"tr",align:null},"The oldest observation available for ",(0,l.kt)("inlineCode",{parentName:"td"},"pool"))))),(0,l.kt)("h3",{id:"update"},"update"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function update(address pool) public\n")),(0,l.kt)("p",null,"updates the cumulative ratio for the observation at the current timestamp. each observation is updated at most\nonce per epoch period."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of pool for which the observation should be recorded")))),(0,l.kt)("h3",{id:"peek"},"peek"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function peek(address pool) public view returns (uint256 twar)\n")),(0,l.kt)("p",null,"returns the TWAR for a given ",(0,l.kt)("inlineCode",{parentName:"p"},"pool")," using the moving average over the max available time range within the window"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of pool for which the observation is required")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"twar"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The most up to date TWAR for ",(0,l.kt)("inlineCode",{parentName:"td"},"pool"))))),(0,l.kt)("h3",{id:"get"},"get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function get(address pool) external returns (uint256 twar)\n")),(0,l.kt)("p",null,"returns the TWAR for a given ",(0,l.kt)("inlineCode",{parentName:"p"},"pool")," using the moving average over the max available time range within the window"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"will try to record a new observation if necessary, so equivalent to ",(0,l.kt)("inlineCode",{parentName:"em"},"update(pool); peek(pool);"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of pool for which the observation is required")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"twar"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The most up to date TWAR for ",(0,l.kt)("inlineCode",{parentName:"td"},"pool"))))),(0,l.kt)("h3",{id:"_getcurrentcumulativeratio"},"_getCurrentCumulativeRatio"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _getCurrentCumulativeRatio(address pool) internal view returns (uint256 lastRatio)\n")))}c.isMDXComponent=!0}}]);