"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[9555],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,m=p["".concat(i,".").concat(g)]||p[g]||c[g]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4807:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],d={},i="LadleStorage",s={unversionedId:"LadleStorage",id:"LadleStorage",title:"LadleStorage",description:"Ladle orchestrates contract calls throughout the Yield Protocol v2 into useful and efficient user oriented features.",source:"@site/docs/LadleStorage.md",sourceDirName:".",slug:"/LadleStorage",permalink:"/docs/LadleStorage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/LadleStorage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ladle",permalink:"/docs/Ladle"},next:{title:"Router",permalink:"/docs/Router"}},u={},c=[{value:"JoinAdded",id:"joinadded",level:3},{value:"PoolAdded",id:"pooladded",level:3},{value:"ModuleAdded",id:"moduleadded",level:3},{value:"IntegrationAdded",id:"integrationadded",level:3},{value:"TokenAdded",id:"tokenadded",level:3},{value:"FeeSet",id:"feeset",level:3},{value:"cauldron",id:"cauldron",level:3},{value:"router",id:"router",level:3},{value:"weth",id:"weth",level:3},{value:"borrowingFee",id:"borrowingfee",level:3},{value:"cachedVaultId",id:"cachedvaultid",level:3},{value:"joins",id:"joins",level:3},{value:"pools",id:"pools",level:3},{value:"modules",id:"modules",level:3},{value:"integrations",id:"integrations",level:3},{value:"tokens",id:"tokens",level:3},{value:"constructor",id:"constructor",level:3}],p={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ladlestorage"},"LadleStorage"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Ladle orchestrates contract calls throughout the Yield Protocol v2 into useful and efficient user oriented features.")),(0,o.kt)("h3",{id:"joinadded"},"JoinAdded"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"event JoinAdded(bytes6 assetId, address join)\n")),(0,o.kt)("h3",{id:"pooladded"},"PoolAdded"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"event PoolAdded(bytes6 seriesId, address pool)\n")),(0,o.kt)("h3",{id:"moduleadded"},"ModuleAdded"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"event ModuleAdded(address module, bool set)\n")),(0,o.kt)("h3",{id:"integrationadded"},"IntegrationAdded"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"event IntegrationAdded(address integration, bool set)\n")),(0,o.kt)("h3",{id:"tokenadded"},"TokenAdded"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"event TokenAdded(address token, bool set)\n")),(0,o.kt)("h3",{id:"feeset"},"FeeSet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"event FeeSet(uint256 fee)\n")),(0,o.kt)("h3",{id:"cauldron"},"cauldron"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"contract ICauldron cauldron\n")),(0,o.kt)("h3",{id:"router"},"router"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"contract Router router\n")),(0,o.kt)("h3",{id:"weth"},"weth"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"contract IWETH9 weth\n")),(0,o.kt)("h3",{id:"borrowingfee"},"borrowingFee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 borrowingFee\n")),(0,o.kt)("h3",{id:"cachedvaultid"},"cachedVaultId"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes12 cachedVaultId\n")),(0,o.kt)("h3",{id:"joins"},"joins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => contract IJoin) joins\n")),(0,o.kt)("h3",{id:"pools"},"pools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => contract IPool) pools\n")),(0,o.kt)("h3",{id:"modules"},"modules"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(address => bool) modules\n")),(0,o.kt)("h3",{id:"integrations"},"integrations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(address => bool) integrations\n")),(0,o.kt)("h3",{id:"tokens"},"tokens"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(address => bool) tokens\n")),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(contract ICauldron cauldron_, contract IWETH9 weth_) public\n")))}g.isMDXComponent=!0}}]);