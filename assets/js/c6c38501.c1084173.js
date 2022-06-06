"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[4192],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,c(c({ref:e},p),{},{components:n})):r.createElement(y,c({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4022:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={},l="IBatchAction",s={unversionedId:"developers/contracts/other/notional/IBatchAction",id:"developers/contracts/other/notional/IBatchAction",title:"IBatchAction",description:"DepositActionType",source:"@site/docs/developers/contracts/other/notional/IBatchAction.md",sourceDirName:"developers/contracts/other/notional",slug:"/developers/contracts/other/notional/IBatchAction",permalink:"/yield-docs/developers/contracts/other/notional/IBatchAction",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/other/notional/IBatchAction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FCashMock",permalink:"/yield-docs/developers/contracts/other/notional/FCashMock"},next:{title:"NotionalJoin",permalink:"/yield-docs/developers/contracts/other/notional/NotionalJoin"}},p={},u=[{value:"DepositActionType",id:"depositactiontype",level:3},{value:"BalanceAction",id:"balanceaction",level:3},{value:"batchBalanceAction",id:"batchbalanceaction",level:3}],d={toc:u};function m(t){var e=t.components,n=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ibatchaction"},"IBatchAction"),(0,a.kt)("h3",{id:"depositactiontype"},"DepositActionType"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"enum DepositActionType {\n  None,\n  DepositAsset,\n  DepositUnderlying,\n  DepositAssetAndMintNToken,\n  DepositUnderlyingAndMintNToken,\n  RedeemNToken,\n  ConvertCashToNToken\n}\n")),(0,a.kt)("h3",{id:"balanceaction"},"BalanceAction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"struct BalanceAction {\n  enum IBatchAction.DepositActionType actionType;\n  uint16 currencyId;\n  uint256 depositActionAmount;\n  uint256 withdrawAmountInternalPrecision;\n  bool withdrawEntireCashBalance;\n  bool redeemToUnderlying;\n}\n")),(0,a.kt)("h3",{id:"batchbalanceaction"},"batchBalanceAction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function batchBalanceAction(address account, struct IBatchAction.BalanceAction[] actions) external\n")),(0,a.kt)("p",null,"Executes a batch of balance transfers including minting and redeeming nTokens."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"account"),(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"the account for the action")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"actions"),(0,a.kt)("td",{parentName:"tr",align:null},"struct IBatchAction.BalanceAction[]"),(0,a.kt)("td",{parentName:"tr",align:null},"array of balance actions to take, must be sorted by currency id")))))}m.isMDXComponent=!0}}]);