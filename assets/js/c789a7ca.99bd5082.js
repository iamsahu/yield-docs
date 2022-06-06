"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[7646],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=d(n),k=r,m=c["".concat(u,".").concat(k)]||c[k]||s[k]||l;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7339:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u="Giver",d={unversionedId:"developers/contracts/utils/Giver",id:"developers/contracts/utils/Giver",title:"Giver",description:"cauldron",source:"@site/docs/developers/contracts/utils/Giver.md",sourceDirName:"developers/contracts/utils",slug:"/developers/contracts/utils/Giver",permalink:"/yield-docs/developers/contracts/utils/Giver",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/utils/Giver.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Strategy",permalink:"/yield-docs/developers/contracts/strategy/"},next:{title:"Exp64x64",permalink:"/yield-docs/developers/contracts/yieldspace/Exp64x64"}},p={},s=[{value:"cauldron",id:"cauldron",level:3},{value:"bannedIlks",id:"bannedilks",level:3},{value:"IlkBanned",id:"ilkbanned",level:3},{value:"constructor",id:"constructor",level:3},{value:"banIlk",id:"banilk",level:3},{value:"give",id:"give",level:3},{value:"seize",id:"seize",level:3}],c={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"giver"},"Giver"),(0,l.kt)("h3",{id:"cauldron"},"cauldron"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"contract ICauldron cauldron\n")),(0,l.kt)("h3",{id:"bannedilks"},"bannedIlks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => bool) bannedIlks\n")),(0,l.kt)("h3",{id:"ilkbanned"},"IlkBanned"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event IlkBanned(bytes6 ilkId)\n")),(0,l.kt)("p",null,"Event emitted after an ilk is banned"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ilkId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"Ilkid to be banned")))),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(contract ICauldron cauldron_) public\n")),(0,l.kt)("h3",{id:"banilk"},"banIlk"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function banIlk(bytes6 ilkId, bool set) external\n")),(0,l.kt)("p",null,"Function to ban"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ilkId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes6"),(0,l.kt)("td",{parentName:"tr",align:null},"the ilkId to be banned")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"set"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"bool value to ban/unban an ilk")))),(0,l.kt)("h3",{id:"give"},"give"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function give(bytes12 vaultId, address receiver) external returns (struct DataTypes.Vault vault)\n")),(0,l.kt)("p",null,"A give function which allows the owner of vault to give the vault to another address"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vaultId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes12"),(0,l.kt)("td",{parentName:"tr",align:null},"The vaultId of the vault to be given")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receiver"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The address to which the vault is being given to")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vault"),(0,l.kt)("td",{parentName:"tr",align:null},"struct DataTypes.Vault"),(0,l.kt)("td",{parentName:"tr",align:null},"The vault which has been given")))),(0,l.kt)("h3",{id:"seize"},"seize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function seize(bytes12 vaultId, address receiver) external returns (struct DataTypes.Vault vault)\n")),(0,l.kt)("p",null,"A give function which allows the authenticated address to give the vault of any user to another address"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vaultId"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes12"),(0,l.kt)("td",{parentName:"tr",align:null},"The vaultId of the vault to be given")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receiver"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The address to which the vault is being given to")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vault"),(0,l.kt)("td",{parentName:"tr",align:null},"struct DataTypes.Vault"),(0,l.kt)("td",{parentName:"tr",align:null},"The vault which has been given")))))}k.isMDXComponent=!0}}]);