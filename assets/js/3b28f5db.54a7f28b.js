"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[7337],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Join",c={unversionedId:"developers/contracts/Join",id:"developers/contracts/Join",title:"Join",description:"asset",source:"@site/docs/developers/contracts/Join.md",sourceDirName:"developers/contracts",slug:"/developers/contracts/Join",permalink:"/yield-docs/developers/contracts/Join",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/Join.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"FlashJoin",permalink:"/yield-docs/developers/contracts/FlashJoin"},next:{title:"Ladle",permalink:"/yield-docs/developers/contracts/Ladle"}},u={},p=[{value:"asset",id:"asset",level:3},{value:"storedBalance",id:"storedbalance",level:3},{value:"constructor",id:"constructor",level:3},{value:"join",id:"join-1",level:3},{value:"_join",id:"_join",level:3},{value:"exit",id:"exit",level:3},{value:"_exit",id:"_exit",level:3},{value:"retrieve",id:"retrieve",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"join"},"Join"),(0,o.kt)("h3",{id:"asset"},"asset"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"address asset\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"asset managed by this contract")),(0,o.kt)("h3",{id:"storedbalance"},"storedBalance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 storedBalance\n")),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(address asset_) public\n")),(0,o.kt)("h3",{id:"join-1"},"join"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function join(address user, uint128 amount) external virtual returns (uint128)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Take ",(0,o.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,o.kt)("inlineCode",{parentName:"em"},"asset")," from ",(0,o.kt)("inlineCode",{parentName:"em"},"user")," using ",(0,o.kt)("inlineCode",{parentName:"em"},"transferFrom"),", minus any unaccounted ",(0,o.kt)("inlineCode",{parentName:"em"},"asset")," in this contract.")),(0,o.kt)("h3",{id:"_join"},"_join"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function _join(address user, uint128 amount) internal returns (uint128)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Take ",(0,o.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,o.kt)("inlineCode",{parentName:"em"},"asset")," from ",(0,o.kt)("inlineCode",{parentName:"em"},"user")," using ",(0,o.kt)("inlineCode",{parentName:"em"},"transferFrom"),", minus any unaccounted ",(0,o.kt)("inlineCode",{parentName:"em"},"asset")," in this contract.")),(0,o.kt)("h3",{id:"exit"},"exit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function exit(address user, uint128 amount) external virtual returns (uint128)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Transfer ",(0,o.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,o.kt)("inlineCode",{parentName:"em"},"asset")," to ",(0,o.kt)("inlineCode",{parentName:"em"},"user"))),(0,o.kt)("h3",{id:"_exit"},"_exit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function _exit(address user, uint128 amount) internal returns (uint128)\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Transfer ",(0,o.kt)("inlineCode",{parentName:"em"},"amount")," ",(0,o.kt)("inlineCode",{parentName:"em"},"asset")," to ",(0,o.kt)("inlineCode",{parentName:"em"},"user"))),(0,o.kt)("h3",{id:"retrieve"},"retrieve"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function retrieve(contract IERC20 token, address to) external\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Retrieve any tokens other than the ",(0,o.kt)("inlineCode",{parentName:"em"},"asset"),". Useful for airdropped tokens.")))}m.isMDXComponent=!0}}]);