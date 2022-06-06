"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[7606],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?l.createElement(f,i(i({ref:t},p),{},{components:n})):l.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],o={},u=void 0,c={unversionedId:"developers/technical_reference/vault/Witch",id:"developers/technical_reference/vault/Witch",title:"Witch",description:"Functions",source:"@site/docs/developers/technical_reference/vault/Witch.md",sourceDirName:"developers/technical_reference/vault",slug:"/developers/technical_reference/vault/Witch",permalink:"/yield-docs/developers/technical_reference/vault/Witch",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/technical_reference/vault/Witch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wand",permalink:"/yield-docs/developers/technical_reference/vault/Wand"},next:{title:"Constants",permalink:"/yield-docs/developers/technical_reference/vault/constants/"}},p={},s=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"point",id:"point",level:3},{value:"setIlk",id:"setilk",level:3},{value:"auction",id:"auction",level:3},{value:"buy",id:"buy",level:3},{value:"payAll",id:"payall",level:3},{value:"Events",id:"events",level:2},{value:"Point",id:"point-1",level:3},{value:"IlkSet",id:"ilkset",level:3},{value:"Bought",id:"bought",level:3},{value:"Auctioned",id:"auctioned",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,a.kt)("h3",{id:"point"},"point"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function point(\n  ) external\n")),(0,a.kt)("p",null,"Point to a different ladle"),(0,a.kt)("h3",{id:"setilk"},"setIlk"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function setIlk(\n  ) external\n")),(0,a.kt)("p",null,"Governance function to set:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the auction duration to calculate liquidation prices"),(0,a.kt)("li",{parentName:"ul"},"the proportion of the collateral that will be sold at auction start"),(0,a.kt)("li",{parentName:"ul"},"the maximum collateral that can be auctioned at the same time"),(0,a.kt)("li",{parentName:"ul"},"the minimum collateral that must be left when buying, unless buying all"),(0,a.kt)("li",{parentName:"ul"},"The decimals for maximum and minimum")),(0,a.kt)("h3",{id:"auction"},"auction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function auction(\n  ) external\n")),(0,a.kt)("p",null,"Put an undercollateralized vault up for liquidation."),(0,a.kt)("h3",{id:"buy"},"buy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function buy(\n  ) external returns (uint256 ink)\n")),(0,a.kt)("p",null,"Pay ",(0,a.kt)("inlineCode",{parentName:"p"},"base")," of the debt in a vault in liquidation, getting at least ",(0,a.kt)("inlineCode",{parentName:"p"},"min")," collateral.\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"payAll")," to pay all the debt, using ",(0,a.kt)("inlineCode",{parentName:"p"},"buy")," for amounts close to the whole vault might revert."),(0,a.kt)("h3",{id:"payall"},"payAll"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function payAll(\n  ) external returns (uint256 ink)\n")),(0,a.kt)("p",null,"Pay all debt from a vault in liquidation, getting at least ",(0,a.kt)("inlineCode",{parentName:"p"},"min")," collateral."),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"point-1"},"Point"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Point(\n  )\n")),(0,a.kt)("h3",{id:"ilkset"},"IlkSet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  event IlkSet(\n  )\n")),(0,a.kt)("h3",{id:"bought"},"Bought"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Bought(\n  )\n")),(0,a.kt)("h3",{id:"auctioned"},"Auctioned"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Auctioned(\n  )\n")))}m.isMDXComponent=!0}}]);