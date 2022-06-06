"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[6331],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?l.createElement(k,r(r({ref:t},s),{},{components:n})):l.createElement(k,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,r[1]=u;for(var c=2;c<i;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var l=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],u={},o="Witch",c={unversionedId:"developers/contracts/Witch",id:"developers/contracts/Witch",title:"Witch",description:"Point",source:"@site/docs/developers/contracts/Witch.md",sourceDirName:"developers/contracts",slug:"/developers/contracts/Witch",permalink:"/yield-docs/developers/contracts/Witch",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/Witch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Router",permalink:"/yield-docs/developers/contracts/Router"},next:{title:"AccumulatorMultiOracle",permalink:"/yield-docs/developers/contracts/oracles/accumulator/AccumulatorMultiOracle"}},s={},d=[{value:"Point",id:"point",level:3},{value:"IlkSet",id:"ilkset",level:3},{value:"Bought",id:"bought",level:3},{value:"Auctioned",id:"auctioned",level:3},{value:"Auction",id:"auction",level:3},{value:"Ilk",id:"ilk",level:3},{value:"Limits",id:"limits",level:3},{value:"cauldron",id:"cauldron",level:3},{value:"ladle",id:"ladle",level:3},{value:"auctions",id:"auctions",level:3},{value:"ilks",id:"ilks",level:3},{value:"limits",id:"limits-1",level:3},{value:"constructor",id:"constructor",level:3},{value:"point",id:"point-1",level:3},{value:"setIlk",id:"setilk",level:3},{value:"auction",id:"auction-1",level:3},{value:"buy",id:"buy",level:3},{value:"payAll",id:"payall",level:3},{value:"settle",id:"settle",level:3},{value:"inkPrice",id:"inkprice",level:3},{value:"_isVaultUndercollateralised",id:"_isvaultundercollateralised",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"witch"},"Witch"),(0,i.kt)("h3",{id:"point"},"Point"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event Point(bytes32 param, address value)\n")),(0,i.kt)("h3",{id:"ilkset"},"IlkSet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event IlkSet(bytes6 ilkId, uint32 duration, uint64 initialOffer, uint96 line, uint24 dust, uint8 dec)\n")),(0,i.kt)("h3",{id:"bought"},"Bought"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event Bought(bytes12 vaultId, address buyer, uint256 ink, uint256 art)\n")),(0,i.kt)("h3",{id:"auctioned"},"Auctioned"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event Auctioned(bytes12 vaultId, uint256 start)\n")),(0,i.kt)("h3",{id:"auction"},"Auction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Auction {\n  address owner;\n  uint32 start;\n}\n")),(0,i.kt)("h3",{id:"ilk"},"Ilk"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Ilk {\n  uint32 duration;\n  uint64 initialOffer;\n}\n")),(0,i.kt)("h3",{id:"limits"},"Limits"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Limits {\n  uint96 line;\n  uint24 dust;\n  uint8 dec;\n  uint128 sum;\n}\n")),(0,i.kt)("h3",{id:"cauldron"},"cauldron"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"contract ICauldron cauldron\n")),(0,i.kt)("h3",{id:"ladle"},"ladle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"contract ILadle ladle\n")),(0,i.kt)("h3",{id:"auctions"},"auctions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes12 => struct Witch.Auction) auctions\n")),(0,i.kt)("h3",{id:"ilks"},"ilks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => struct Witch.Ilk) ilks\n")),(0,i.kt)("h3",{id:"limits-1"},"limits"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => struct Witch.Limits) limits\n")),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(contract ICauldron cauldron_, contract ILadle ladle_) public\n")),(0,i.kt)("h3",{id:"point-1"},"point"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function point(bytes32 param, address value) external\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Point to a different ladle")),(0,i.kt)("h3",{id:"setilk"},"setIlk"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function setIlk(bytes6 ilkId, uint32 duration, uint64 initialOffer, uint96 line, uint24 dust, uint8 dec) external\n")),(0,i.kt)("p",null,"_Governance function to set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the auction duration to calculate liquidation prices"),(0,i.kt)("li",{parentName:"ul"},"the proportion of the collateral that will be sold at auction start"),(0,i.kt)("li",{parentName:"ul"},"the maximum collateral that can be auctioned at the same time"),(0,i.kt)("li",{parentName:"ul"},"the minimum collateral that must be left when buying, unless buying all"),(0,i.kt)("li",{parentName:"ul"},"The decimals for maximum and minimum_")),(0,i.kt)("h3",{id:"auction-1"},"auction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function auction(bytes12 vaultId) external\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Put an undercollateralized vault up for liquidation.")),(0,i.kt)("h3",{id:"buy"},"buy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function buy(bytes12 vaultId, uint128 base, uint128 min) external returns (uint256 ink)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Pay ",(0,i.kt)("inlineCode",{parentName:"em"},"base")," of the debt in a vault in liquidation, getting at least ",(0,i.kt)("inlineCode",{parentName:"em"},"min")," collateral.\nUse ",(0,i.kt)("inlineCode",{parentName:"em"},"payAll")," to pay all the debt, using ",(0,i.kt)("inlineCode",{parentName:"em"},"buy")," for amounts close to the whole vault might revert.")),(0,i.kt)("h3",{id:"payall"},"payAll"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function payAll(bytes12 vaultId, uint128 min) external returns (uint256 ink)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Pay all debt from a vault in liquidation, getting at least ",(0,i.kt)("inlineCode",{parentName:"em"},"min")," collateral.")),(0,i.kt)("h3",{id:"settle"},"settle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function settle(address user, bytes6 ilkId, bytes6 baseId, uint128 ink, uint128 art) private\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Move base from the buyer to the protocol, and collateral from the protocol to the buyer")),(0,i.kt)("h3",{id:"inkprice"},"inkPrice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function inkPrice(struct DataTypes.Balances balances, uint256 initialOffer_, uint256 duration_, uint256 elapsed) private pure returns (uint256 price)\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Price of a collateral unit, in underlying, at the present moment, for a given vault. Rounds up, sometimes twice.\nink                     min(auction, elapsed)\nprice = (------- ",(0,i.kt)("em",{parentName:"em"}," (p + (1 - p) ")," -----------------------))\nart                          auction")),(0,i.kt)("h3",{id:"_isvaultundercollateralised"},"_isVaultUndercollateralised"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _isVaultUndercollateralised(bytes12 vaultId) internal virtual returns (bool)\n")))}m.isMDXComponent=!0}}]);