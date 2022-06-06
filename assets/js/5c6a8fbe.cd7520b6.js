"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[2451],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8436:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},u="FYToken",d={unversionedId:"developers/contracts/FYToken",id:"developers/contracts/FYToken",title:"FYToken",description:"Point",source:"@site/docs/developers/contracts/FYToken.md",sourceDirName:"developers/contracts",slug:"/developers/contracts/FYToken",permalink:"/yield-docs/developers/contracts/FYToken",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/FYToken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cauldron",permalink:"/yield-docs/developers/contracts/Cauldron"},next:{title:"FlashJoin",permalink:"/yield-docs/developers/contracts/FlashJoin"}},p={},m=[{value:"Point",id:"point",level:3},{value:"FlashFeeFactorSet",id:"flashfeefactorset",level:3},{value:"SeriesMatured",id:"seriesmatured",level:3},{value:"Redeemed",id:"redeemed",level:3},{value:"CHI_NOT_SET",id:"chi_not_set",level:3},{value:"MAX_TIME_TO_MATURITY",id:"max_time_to_maturity",level:3},{value:"FLASH_LOAN_RETURN",id:"flash_loan_return",level:3},{value:"FLASH_LOANS_DISABLED",id:"flash_loans_disabled",level:3},{value:"flashFeeFactor",id:"flashfeefactor",level:3},{value:"oracle",id:"oracle",level:3},{value:"join",id:"join",level:3},{value:"underlying",id:"underlying",level:3},{value:"underlyingId",id:"underlyingid",level:3},{value:"maturity",id:"maturity",level:3},{value:"chiAtMaturity",id:"chiatmaturity",level:3},{value:"constructor",id:"constructor",level:3},{value:"afterMaturity",id:"aftermaturity",level:3},{value:"beforeMaturity",id:"beforematurity",level:3},{value:"point",id:"point-1",level:3},{value:"setFlashFeeFactor",id:"setflashfeefactor",level:3},{value:"mature",id:"mature",level:3},{value:"_mature",id:"_mature",level:3},{value:"accrual",id:"accrual",level:3},{value:"_accrual",id:"_accrual",level:3},{value:"redeem",id:"redeem",level:3},{value:"mintWithUnderlying",id:"mintwithunderlying",level:3},{value:"mint",id:"mint",level:3},{value:"burn",id:"burn",level:3},{value:"_burn",id:"_burn",level:3},{value:"maxFlashLoan",id:"maxflashloan",level:3},{value:"flashFee",id:"flashfee",level:3},{value:"_flashFee",id:"_flashfee",level:3},{value:"flashLoan",id:"flashloan",level:3}],s={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fytoken"},"FYToken"),(0,l.kt)("h3",{id:"point"},"Point"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event Point(bytes32 param, address value)\n")),(0,l.kt)("h3",{id:"flashfeefactorset"},"FlashFeeFactorSet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event FlashFeeFactorSet(uint256 fee)\n")),(0,l.kt)("h3",{id:"seriesmatured"},"SeriesMatured"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event SeriesMatured(uint256 chiAtMaturity)\n")),(0,l.kt)("h3",{id:"redeemed"},"Redeemed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event Redeemed(address from, address to, uint256 amount, uint256 redeemed)\n")),(0,l.kt)("h3",{id:"chi_not_set"},"CHI_NOT_SET"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 CHI_NOT_SET\n")),(0,l.kt)("h3",{id:"max_time_to_maturity"},"MAX_TIME_TO_MATURITY"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 MAX_TIME_TO_MATURITY\n")),(0,l.kt)("h3",{id:"flash_loan_return"},"FLASH_LOAN_RETURN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes32 FLASH_LOAN_RETURN\n")),(0,l.kt)("h3",{id:"flash_loans_disabled"},"FLASH_LOANS_DISABLED"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 FLASH_LOANS_DISABLED\n")),(0,l.kt)("h3",{id:"flashfeefactor"},"flashFeeFactor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 flashFeeFactor\n")),(0,l.kt)("h3",{id:"oracle"},"oracle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"contract IOracle oracle\n")),(0,l.kt)("h3",{id:"join"},"join"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"contract IJoin join\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Source of redemption funds.")),(0,l.kt)("h3",{id:"underlying"},"underlying"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"address underlying\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Asset that is returned on redemption.")),(0,l.kt)("h3",{id:"underlyingid"},"underlyingId"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes6 underlyingId\n")),(0,l.kt)("h3",{id:"maturity"},"maturity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 maturity\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Unix time at which redemption of fyToken for underlying are possible")),(0,l.kt)("h3",{id:"chiatmaturity"},"chiAtMaturity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 chiAtMaturity\n")),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(bytes6 underlyingId_, contract IOracle oracle_, contract IJoin join_, uint256 maturity_, string name, string symbol) public\n")),(0,l.kt)("h3",{id:"aftermaturity"},"afterMaturity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"modifier afterMaturity()\n")),(0,l.kt)("h3",{id:"beforematurity"},"beforeMaturity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"modifier beforeMaturity()\n")),(0,l.kt)("h3",{id:"point-1"},"point"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function point(bytes32 param, address value) external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Point to a different Oracle or Join")),(0,l.kt)("h3",{id:"setflashfeefactor"},"setFlashFeeFactor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setFlashFeeFactor(uint256 flashFeeFactor_) external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Set the flash loan fee factor")),(0,l.kt)("h3",{id:"mature"},"mature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function mature() external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mature the fyToken by recording the chi.\nIf called more than once, it will revert.")),(0,l.kt)("h3",{id:"_mature"},"_mature"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _mature() private returns (uint256 _chiAtMaturity)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mature the fyToken by recording the chi.")),(0,l.kt)("h3",{id:"accrual"},"accrual"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function accrual() external returns (uint256)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Retrieve the chi accrual since maturity, maturing if necessary.")),(0,l.kt)("h3",{id:"_accrual"},"_accrual"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _accrual() private returns (uint256 accrual_)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Retrieve the chi accrual since maturity, maturing if necessary.\nNote: Call only after checking we are past maturity")),(0,l.kt)("h3",{id:"redeem"},"redeem"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeem(address to, uint256 amount) external returns (uint256 redeemed)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Burn fyToken after maturity for an amount that increases according to ",(0,l.kt)("inlineCode",{parentName:"em"},"chi"),"\nIf ",(0,l.kt)("inlineCode",{parentName:"em"},"amount")," is 0, the contract will redeem instead the fyToken balance of this contract. Useful for batches.")),(0,l.kt)("h3",{id:"mintwithunderlying"},"mintWithUnderlying"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function mintWithUnderlying(address to, uint256 amount) external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mint fyToken providing an equal amount of underlying to the protocol")),(0,l.kt)("h3",{id:"mint"},"mint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function mint(address to, uint256 amount) external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Mint fyTokens.")),(0,l.kt)("h3",{id:"burn"},"burn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function burn(address from, uint256 amount) external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Burn fyTokens. The user needs to have either transferred the tokens to this contract, or have approved this contract to take them.")),(0,l.kt)("h3",{id:"_burn"},"_burn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _burn(address from, uint256 amount) internal returns (bool)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Burn fyTokens.\nAny tokens locked in this contract will be burned first and subtracted from the amount to burn from the user's wallet.\nThis feature allows someone to transfer fyToken to this contract to enable a ",(0,l.kt)("inlineCode",{parentName:"em"},"burn"),", potentially saving the cost of ",(0,l.kt)("inlineCode",{parentName:"em"},"approve")," or ",(0,l.kt)("inlineCode",{parentName:"em"},"permit"),".")),(0,l.kt)("h3",{id:"maxflashloan"},"maxFlashLoan"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function maxFlashLoan(address token) external view returns (uint256)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"From ERC-3156. The amount of currency available to be lended.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The loan currency. It must be a FYDai contract.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of ",(0,l.kt)("inlineCode",{parentName:"td"},"token")," that can be borrowed.")))),(0,l.kt)("h3",{id:"flashfee"},"flashFee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function flashFee(address token, uint256 amount) external view returns (uint256)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"From ERC-3156. The fee to be charged for a given loan.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The loan currency. It must be the asset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of tokens lent.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of ",(0,l.kt)("inlineCode",{parentName:"td"},"token")," to be charged for the loan, on top of the returned principal.")))),(0,l.kt)("h3",{id:"_flashfee"},"_flashFee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _flashFee(uint256 amount) internal view returns (uint256)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The fee to be charged for a given loan.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of tokens lent.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of ",(0,l.kt)("inlineCode",{parentName:"td"},"token")," to be charged for the loan, on top of the returned principal.")))),(0,l.kt)("h3",{id:"flashloan"},"flashLoan"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function flashLoan(contract IERC3156FlashBorrower receiver, address token, uint256 amount, bytes data) external returns (bool)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"From ERC-3156. Loan ",(0,l.kt)("inlineCode",{parentName:"em"},"amount")," fyDai to ",(0,l.kt)("inlineCode",{parentName:"em"},"receiver"),", which needs to return them plus fee to this contract within the same transaction.\nNote that if the initiator and the borrower are the same address, no approval is needed for this contract to take the principal + fee from the borrower.\nIf the borrower transfers the principal + fee to this contract, they will be burnt here instead of pulled from the borrower.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receiver"),(0,l.kt)("td",{parentName:"tr",align:null},"contract IERC3156FlashBorrower"),(0,l.kt)("td",{parentName:"tr",align:null},"The contract receiving the tokens, needs to implement the ",(0,l.kt)("inlineCode",{parentName:"td"},"onFlashLoan(address user, uint256 amount, uint256 fee, bytes calldata)")," interface.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The loan currency. Must be a fyDai contract.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of tokens lent.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"A data parameter to be passed on to the ",(0,l.kt)("inlineCode",{parentName:"td"},"receiver")," for any custom use.")))))}c.isMDXComponent=!0}}]);