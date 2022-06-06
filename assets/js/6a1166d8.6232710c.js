"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[7974],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(n),k=r,c=d["".concat(u,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(c,o(o({ref:e},s),{},{components:n})):a.createElement(c,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8870:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},u="IWstETH",p={unversionedId:"developers/contracts/oracles/lido/IWstETH",id:"developers/contracts/oracles/lido/IWstETH",title:"IWstETH",description:"getWstETHByStETH",source:"@site/docs/developers/contracts/oracles/lido/IWstETH.md",sourceDirName:"developers/contracts/oracles/lido",slug:"/developers/contracts/oracles/lido/IWstETH",permalink:"/yield-docs/developers/contracts/oracles/lido/IWstETH",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/oracles/lido/IWstETH.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ICurvePool",permalink:"/yield-docs/developers/contracts/oracles/convex/ICurvePool"},next:{title:"LidoOracle",permalink:"/yield-docs/developers/contracts/oracles/lido/LidoOracle"}},s={},m=[{value:"getWstETHByStETH",id:"getwstethbysteth",level:3},{value:"getStETHByWstETH",id:"getstethbywsteth",level:3},{value:"stEthPerToken",id:"stethpertoken",level:3},{value:"tokensPerStEth",id:"tokenspersteth",level:3},{value:"wrap",id:"wrap",level:3},{value:"unwrap",id:"unwrap",level:3}],d={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"iwsteth"},"IWstETH"),(0,l.kt)("h3",{id:"getwstethbysteth"},"getWstETHByStETH"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getWstETHByStETH(uint256 _stETHAmount) external view returns (uint256)\n")),(0,l.kt)("p",null,"Get amount of wstETH obtained for a given amount of stETH"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_stETHAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"amount of stETH")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of wstETH obtained for a given stETH amount")))),(0,l.kt)("h3",{id:"getstethbywsteth"},"getStETHByWstETH"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getStETHByWstETH(uint256 _wstETHAmount) external view returns (uint256)\n")),(0,l.kt)("p",null,"Get amount of stETH obtained for a given amount of wstETH"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_wstETHAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"amount of wstETH")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of stETH obtained for a given wstETH amount")))),(0,l.kt)("h3",{id:"stethpertoken"},"stEthPerToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function stEthPerToken() external view returns (uint256)\n")),(0,l.kt)("p",null,"Get amount of stETH obtained for one wstETH"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of stETH obtained for one wstETH")))),(0,l.kt)("h3",{id:"tokenspersteth"},"tokensPerStEth"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function tokensPerStEth() external view returns (uint256)\n")),(0,l.kt)("p",null,"Get amount of wstETH obtained for one stETH"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of wstETH obtained for one stETH")))),(0,l.kt)("h3",{id:"wrap"},"wrap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function wrap(uint256 _stETHAmount) external returns (uint256)\n")),(0,l.kt)("p",null,"Exchanges stETH to wstETH"),(0,l.kt)("p",null,"_Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_stETHAmount")," must be non-zero"),(0,l.kt)("li",{parentName:"ul"},"msg.sender must approve at least ",(0,l.kt)("inlineCode",{parentName:"li"},"_stETHAmount")," stETH to this\ncontract."),(0,l.kt)("li",{parentName:"ul"},"msg.sender must have at least ",(0,l.kt)("inlineCode",{parentName:"li"},"_stETHAmount")," of stETH.\nUser should first approve ",(0,l.kt)("em",{parentName:"li"},"stETHAmount to the WstETH contract"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_stETHAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"amount of stETH to wrap in exchange for wstETH")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of wstETH user receives after wrap")))),(0,l.kt)("h3",{id:"unwrap"},"unwrap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function unwrap(uint256 _wstETHAmount) external returns (uint256)\n")),(0,l.kt)("p",null,"Exchanges wstETH to stETH"),(0,l.kt)("p",null,"_Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_wstETHAmount")," must be non-zero"),(0,l.kt)("li",{parentName:"ul"},"msg.sender must have at least ",(0,l.kt)("inlineCode",{parentName:"li"},"_wstETHAmount")," wstETH._")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_wstETHAmount"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"amount of wstETH to uwrap in exchange for stETH")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"uint256"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of stETH user receives after unwrap")))))}k.isMDXComponent=!0}}]);