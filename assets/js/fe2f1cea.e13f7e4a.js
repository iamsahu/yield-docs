"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[3966],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},u="NotionalJoin",s={unversionedId:"other/notional/NotionalJoin",id:"other/notional/NotionalJoin",title:"NotionalJoin",description:"FlashFeeFactorSet",source:"@site/docs/other/notional/NotionalJoin.md",sourceDirName:"other/notional",slug:"/other/notional/NotionalJoin",permalink:"/docs/other/notional/NotionalJoin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/other/notional/NotionalJoin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IBatchAction",permalink:"/docs/other/notional/IBatchAction"},next:{title:"NotionalMultiOracle",permalink:"/docs/other/notional/NotionalMultiOracle"}},d={},c=[{value:"FlashFeeFactorSet",id:"flashfeefactorset",level:3},{value:"Redeemed",id:"redeemed",level:3},{value:"FLASH_LOAN_RETURN",id:"flash_loan_return",level:3},{value:"FLASH_LOANS_DISABLED",id:"flash_loans_disabled",level:3},{value:"asset",id:"asset",level:3},{value:"underlying",id:"underlying",level:3},{value:"maturity",id:"maturity",level:3},{value:"currencyId",id:"currencyid",level:3},{value:"id",id:"id",level:3},{value:"storedBalance",id:"storedbalance",level:3},{value:"accrual",id:"accrual",level:3},{value:"flashFeeFactor",id:"flashfeefactor",level:3},{value:"constructor",id:"constructor",level:3},{value:"afterMaturity",id:"aftermaturity",level:3},{value:"beforeMaturity",id:"beforematurity",level:3},{value:"supportsInterface",id:"supportsinterface",level:3},{value:"onERC1155Received",id:"onerc1155received",level:3},{value:"onERC1155BatchReceived",id:"onerc1155batchreceived",level:3},{value:"join",id:"join",level:3},{value:"_join",id:"_join",level:3},{value:"exit",id:"exit",level:3},{value:"_exit",id:"_exit",level:3},{value:"_exitUnderlying",id:"_exitunderlying",level:3},{value:"redeem",id:"redeem",level:3},{value:"retrieve",id:"retrieve",level:3},{value:"retrieveERC1155",id:"retrieveerc1155",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notionaljoin"},"NotionalJoin"),(0,i.kt)("h3",{id:"flashfeefactorset"},"FlashFeeFactorSet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event FlashFeeFactorSet(uint256 fee)\n")),(0,i.kt)("h3",{id:"redeemed"},"Redeemed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event Redeemed(uint256 fCash, uint256 underlying, uint256 accrual)\n")),(0,i.kt)("h3",{id:"flash_loan_return"},"FLASH_LOAN_RETURN"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes32 FLASH_LOAN_RETURN\n")),(0,i.kt)("h3",{id:"flash_loans_disabled"},"FLASH_LOANS_DISABLED"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 FLASH_LOANS_DISABLED\n")),(0,i.kt)("h3",{id:"asset"},"asset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"address asset\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"asset managed by this contract")),(0,i.kt)("h3",{id:"underlying"},"underlying"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"address underlying\n")),(0,i.kt)("h3",{id:"maturity"},"maturity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"uint40 maturity\n")),(0,i.kt)("h3",{id:"currencyid"},"currencyId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"uint16 currencyId\n")),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 id\n")),(0,i.kt)("h3",{id:"storedbalance"},"storedBalance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 storedBalance\n")),(0,i.kt)("h3",{id:"accrual"},"accrual"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 accrual\n")),(0,i.kt)("h3",{id:"flashfeefactor"},"flashFeeFactor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 flashFeeFactor\n")),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(address asset_, address underlying_, uint40 maturity_, uint16 currencyId_) public\n")),(0,i.kt)("h3",{id:"aftermaturity"},"afterMaturity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"modifier afterMaturity()\n")),(0,i.kt)("h3",{id:"beforematurity"},"beforeMaturity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"modifier beforeMaturity()\n")),(0,i.kt)("h3",{id:"supportsinterface"},"supportsInterface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function supportsInterface(bytes4 interfaceID) external view returns (bool)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Advertising through ERC165 the available functions")),(0,i.kt)("h3",{id:"onerc1155received"},"onERC1155Received"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function onERC1155Received(address, address, uint256 _id, uint256, bytes) external returns (bytes4)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Called by the sender after a transfer to verify it was received. Ensures only ",(0,i.kt)("inlineCode",{parentName:"em"},"id")," tokens are received.")),(0,i.kt)("h3",{id:"onerc1155batchreceived"},"onERC1155BatchReceived"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function onERC1155BatchReceived(address, address, uint256[] _ids, uint256[], bytes) external returns (bytes4)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Called by the sender after a batch transfer to verify it was received. Ensures only ",(0,i.kt)("inlineCode",{parentName:"em"},"id")," tokens are received.")),(0,i.kt)("h3",{id:"join"},"join"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function join(address user, uint128 amount) external returns (uint128)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Take ",(0,i.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," from ",(0,i.kt)("inlineCode",{parentName:"em"},"user")," using ",(0,i.kt)("inlineCode",{parentName:"em"},"transferFrom"),", minus any unaccounted ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," in this contract.")),(0,i.kt)("h3",{id:"_join"},"_join"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _join(address user, uint128 amount) internal returns (uint128)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Take ",(0,i.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," from ",(0,i.kt)("inlineCode",{parentName:"em"},"user")," using ",(0,i.kt)("inlineCode",{parentName:"em"},"transferFrom"),", minus any unaccounted ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," in this contract.")),(0,i.kt)("h3",{id:"exit"},"exit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function exit(address user, uint128 amount) external returns (uint128)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Before maturity, transfer ",(0,i.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," to ",(0,i.kt)("inlineCode",{parentName:"em"},"user"),".\nAfter maturity, withdraw if necessary, then transfer ",(0,i.kt)("inlineCode",{parentName:"em"},"amount.wmul(accrual)")," ",(0,i.kt)("inlineCode",{parentName:"em"},"underlying")," to ",(0,i.kt)("inlineCode",{parentName:"em"},"user"),".")),(0,i.kt)("h3",{id:"_exit"},"_exit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _exit(address user, uint128 amount) internal returns (uint128)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Transfer ",(0,i.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,i.kt)("inlineCode",{parentName:"em"},"asset")," to ",(0,i.kt)("inlineCode",{parentName:"em"},"user"))),(0,i.kt)("h3",{id:"_exitunderlying"},"_exitUnderlying"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _exitUnderlying(address user, uint128 amount) internal returns (uint128)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Transfer ",(0,i.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,i.kt)("inlineCode",{parentName:"em"},"underlying")," to ",(0,i.kt)("inlineCode",{parentName:"em"},"user"))),(0,i.kt)("h3",{id:"redeem"},"redeem"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeem() public\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Switch to an exit-only underlying Join, converting all fCash holdings to underlying in the process.")),(0,i.kt)("h3",{id:"retrieve"},"retrieve"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function retrieve(contract IERC20 token, address to) external\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Retrieve any ERC20 tokens. Useful for airdropped tokens.")),(0,i.kt)("h3",{id:"retrieveerc1155"},"retrieveERC1155"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function retrieveERC1155(contract ERC1155 token, uint256 id_, address to) external\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Retrieve any ERC1155 tokens other than the ",(0,i.kt)("inlineCode",{parentName:"em"},"asset"),". Useful for airdropped tokens.")))}m.isMDXComponent=!0}}]);