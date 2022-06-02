"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[8465],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,i(i({ref:e},s),{},{components:n})):r.createElement(y,i({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7925:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="IBatchAction",u={unversionedId:"other/notional/IBatchAction",id:"other/notional/IBatchAction",title:"IBatchAction",description:"DepositActionType",source:"@site/docs/other/notional/IBatchAction.md",sourceDirName:"other/notional",slug:"/other/notional/IBatchAction",permalink:"/yield-docs/docs/other/notional/IBatchAction",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/main/packages/create-docusaurus/templates/shared/docs/other/notional/IBatchAction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FCashMock",permalink:"/yield-docs/docs/other/notional/FCashMock"},next:{title:"NotionalJoin",permalink:"/yield-docs/docs/other/notional/NotionalJoin"}},s={},p=[{value:"DepositActionType",id:"depositactiontype",level:3},{value:"BalanceAction",id:"balanceaction",level:3},{value:"batchBalanceAction",id:"batchbalanceaction",level:3}],d={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ibatchaction"},"IBatchAction"),(0,o.kt)("h3",{id:"depositactiontype"},"DepositActionType"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"enum DepositActionType {\n  None,\n  DepositAsset,\n  DepositUnderlying,\n  DepositAssetAndMintNToken,\n  DepositUnderlyingAndMintNToken,\n  RedeemNToken,\n  ConvertCashToNToken\n}\n")),(0,o.kt)("h3",{id:"balanceaction"},"BalanceAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"struct BalanceAction {\n  enum IBatchAction.DepositActionType actionType;\n  uint16 currencyId;\n  uint256 depositActionAmount;\n  uint256 withdrawAmountInternalPrecision;\n  bool withdrawEntireCashBalance;\n  bool redeemToUnderlying;\n}\n")),(0,o.kt)("h3",{id:"batchbalanceaction"},"batchBalanceAction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function batchBalanceAction(address account, struct IBatchAction.BalanceAction[] actions) external\n")),(0,o.kt)("p",null,"Executes a batch of balance transfers including minting and redeeming nTokens."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"account"),(0,o.kt)("td",{parentName:"tr",align:null},"address"),(0,o.kt)("td",{parentName:"tr",align:null},"the account for the action")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"actions"),(0,o.kt)("td",{parentName:"tr",align:null},"struct IBatchAction.BalanceAction[]"),(0,o.kt)("td",{parentName:"tr",align:null},"array of balance actions to take, must be sorted by currency id")))))}m.isMDXComponent=!0}}]);