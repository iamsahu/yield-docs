"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[3364],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,c(c({ref:t},i),{},{components:r})):n.createElement(f,c({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4405:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],l={},u="CompoundMultiOracle",s={unversionedId:"developers/contracts/oracles/compound/CompoundMultiOracle",id:"developers/contracts/oracles/compound/CompoundMultiOracle",title:"CompoundMultiOracle",description:"SourceSet",source:"@site/docs/developers/contracts/oracles/compound/CompoundMultiOracle.md",sourceDirName:"developers/contracts/oracles/compound",slug:"/developers/contracts/oracles/compound/CompoundMultiOracle",permalink:"/yield-docs/developers/contracts/oracles/compound/CompoundMultiOracle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/oracles/compound/CompoundMultiOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CTokenMultiOracle",permalink:"/yield-docs/developers/contracts/oracles/compound/CTokenMultiOracle"},next:{title:"Cvx3CrvOracle",permalink:"/yield-docs/developers/contracts/oracles/convex/Cvx3CrvOracle"}},i={},p=[{value:"SourceSet",id:"sourceset",level:3},{value:"sources",id:"sources",level:3},{value:"setSource",id:"setsource",level:3},{value:"peek",id:"peek",level:3},{value:"get",id:"get",level:3},{value:"_peek",id:"_peek",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compoundmultioracle"},"CompoundMultiOracle"),(0,a.kt)("h3",{id:"sourceset"},"SourceSet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"event SourceSet(bytes6 baseId, bytes6 kind, address source)\n")),(0,a.kt)("h3",{id:"sources"},"sources"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => address)) sources\n")),(0,a.kt)("h3",{id:"setsource"},"setSource"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSource(bytes6 base, bytes6 kind, address source) external\n")),(0,a.kt)("p",null,"Set or reset a source"),(0,a.kt)("h3",{id:"peek"},"peek"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function peek(bytes32 base, bytes32 kind, uint256) external view virtual returns (uint256 accumulator, uint256 updateTime)\n")),(0,a.kt)("p",null,"Retrieve the latest stored accumulator."),(0,a.kt)("h3",{id:"get"},"get"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function get(bytes32 base, bytes32 kind, uint256) external virtual returns (uint256 accumulator, uint256 updateTime)\n")),(0,a.kt)("p",null,"Retrieve the latest accumulator from source, updating it if necessary."),(0,a.kt)("h3",{id:"_peek"},"_peek"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"function _peek(bytes6 base, bytes6 kind) private view returns (uint256 accumulator, uint256 updateTime)\n")),(0,a.kt)("p",null,"Retrieve the value of the amount at the latest oracle price."))}m.isMDXComponent=!0}}]);