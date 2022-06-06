"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[692],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5735:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},s="Ladle",d={unversionedId:"developers/contracts/Ladle",id:"developers/contracts/Ladle",title:"Ladle",description:"Ladle orchestrates contract calls throughout the Yield Protocol v2 into useful and efficient user oriented features.",source:"@site/docs/developers/contracts/Ladle.md",sourceDirName:"developers/contracts",slug:"/developers/contracts/Ladle",permalink:"/yield-docs/developers/contracts/Ladle",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/contracts/Ladle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Join",permalink:"/yield-docs/developers/contracts/Join"},next:{title:"LadleStorage",permalink:"/yield-docs/developers/contracts/LadleStorage"}},u={},p=[{value:"constructor",id:"constructor",level:3},{value:"getVault",id:"getvault",level:3},{value:"getSeries",id:"getseries",level:3},{value:"getJoin",id:"getjoin",level:3},{value:"getPool",id:"getpool",level:3},{value:"addIntegration",id:"addintegration",level:3},{value:"_addIntegration",id:"_addintegration",level:3},{value:"addToken",id:"addtoken",level:3},{value:"_addToken",id:"_addtoken",level:3},{value:"addJoin",id:"addjoin",level:3},{value:"addPool",id:"addpool",level:3},{value:"addModule",id:"addmodule",level:3},{value:"setFee",id:"setfee",level:3},{value:"batch",id:"batch",level:3},{value:"route",id:"route",level:3},{value:"moduleCall",id:"modulecall",level:3},{value:"forwardPermit",id:"forwardpermit",level:3},{value:"forwardDaiPermit",id:"forwarddaipermit",level:3},{value:"transfer",id:"transfer",level:3},{value:"retrieve",id:"retrieve",level:3},{value:"receive",id:"receive",level:3},{value:"joinEther",id:"joinether",level:3},{value:"exitEther",id:"exitether",level:3},{value:"_generateVaultId",id:"_generatevaultid",level:3},{value:"build",id:"build",level:3},{value:"_build",id:"_build",level:3},{value:"tweak",id:"tweak",level:3},{value:"give",id:"give",level:3},{value:"destroy",id:"destroy",level:3},{value:"stir",id:"stir",level:3},{value:"_pour",id:"_pour",level:3},{value:"pour",id:"pour",level:3},{value:"serve",id:"serve",level:3},{value:"close",id:"close",level:3},{value:"repay",id:"repay",level:3},{value:"repayVault",id:"repayvault",level:3},{value:"roll",id:"roll",level:3},{value:"repayFromLadle",id:"repayfromladle",level:3},{value:"closeFromLadle",id:"closefromladle",level:3},{value:"redeem",id:"redeem",level:3}],c={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ladle"},"Ladle"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Ladle orchestrates contract calls throughout the Yield Protocol v2 into useful and efficient user oriented features.")),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(contract ICauldron cauldron, contract IWETH9 weth) public\n")),(0,l.kt)("h3",{id:"getvault"},"getVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getVault(bytes12 vaultId_) internal view returns (bytes12 vaultId, struct DataTypes.Vault vault)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Obtains a vault by vaultId from the Cauldron, and verifies that msg.sender is the owner\nIf bytes(0) is passed as the vaultId it tries to load a vault from the cache")),(0,l.kt)("h3",{id:"getseries"},"getSeries"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getSeries(bytes6 seriesId) internal view returns (struct DataTypes.Series series)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Obtains a series by seriesId from the Cauldron, and verifies that it exists")),(0,l.kt)("h3",{id:"getjoin"},"getJoin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getJoin(bytes6 assetId) internal view returns (contract IJoin join)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Obtains a join by assetId, and verifies that it exists")),(0,l.kt)("h3",{id:"getpool"},"getPool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getPool(bytes6 seriesId) internal view returns (contract IPool pool)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Obtains a pool by seriesId, and verifies that it exists")),(0,l.kt)("h3",{id:"addintegration"},"addIntegration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function addIntegration(address integration, bool set) external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Add or remove an integration.")),(0,l.kt)("h3",{id:"_addintegration"},"_addIntegration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _addIntegration(address integration, bool set) private\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Add or remove an integration.")),(0,l.kt)("h3",{id:"addtoken"},"addToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function addToken(address token, bool set) external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Add or remove a token that the Ladle can call ",(0,l.kt)("inlineCode",{parentName:"em"},"transfer")," or ",(0,l.kt)("inlineCode",{parentName:"em"},"permit")," on.")),(0,l.kt)("h3",{id:"_addtoken"},"_addToken"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _addToken(address token, bool set) private\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Add or remove a token that the Ladle can call ",(0,l.kt)("inlineCode",{parentName:"em"},"transfer")," or ",(0,l.kt)("inlineCode",{parentName:"em"},"permit")," on.")),(0,l.kt)("h3",{id:"addjoin"},"addJoin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function addJoin(bytes6 assetId, contract IJoin join) external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Add a new Join for an Asset, or replace an existing one for a new one.\nThere can be only one Join per Asset. Until a Join is added, no tokens of that Asset can be posted or withdrawn.")),(0,l.kt)("h3",{id:"addpool"},"addPool"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function addPool(bytes6 seriesId, contract IPool pool) external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Add a new Pool for a Series, or replace an existing one for a new one.\nThere can be only one Pool per Series. Until a Pool is added, it is not possible to borrow Base.")),(0,l.kt)("h3",{id:"addmodule"},"addModule"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function addModule(address module, bool set) external\n")),(0,l.kt)("p",null,"Treat modules as you would Ladle upgrades. Modules have unrestricted access to the Ladle\nstorage, and can wreak havoc easily.\nModules must not do any changes to any vault (owner, seriesId, ilkId) because of vault caching.\nModules must not be contracts that can self-destruct because of ",(0,l.kt)("inlineCode",{parentName:"p"},"moduleCall"),".\nModules can't use ",(0,l.kt)("inlineCode",{parentName:"p"},"msg.value")," because of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Add or remove a module.")),(0,l.kt)("h3",{id:"setfee"},"setFee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setFee(uint256 fee) external\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Set the fee parameter")),(0,l.kt)("h3",{id:"batch"},"batch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function batch(bytes[] calls) external payable returns (bytes[] results)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Allows batched call to self (this contract).")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"calls"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes[]"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of inputs for each call.")))),(0,l.kt)("h3",{id:"route"},"route"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function route(address integration, bytes data) external payable returns (bytes result)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Allow users to route calls to a contract, to be used with batch")),(0,l.kt)("h3",{id:"modulecall"},"moduleCall"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function moduleCall(address module, bytes data) external payable returns (bytes result)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Allow users to use functionality coded in a module, to be used with batch")),(0,l.kt)("h3",{id:"forwardpermit"},"forwardPermit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function forwardPermit(contract IERC2612 token, address spender, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external payable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Execute an ERC2612 permit for the selected token")),(0,l.kt)("h3",{id:"forwarddaipermit"},"forwardDaiPermit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function forwardDaiPermit(contract DaiAbstract token, address spender, uint256 nonce, uint256 deadline, bool allowed, uint8 v, bytes32 r, bytes32 s) external payable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Execute a Dai-style permit for the selected token")),(0,l.kt)("h3",{id:"transfer"},"transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function transfer(contract IERC20 token, address receiver, uint128 wad) external payable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Allow users to trigger a token transfer from themselves to a receiver through the ladle, to be used with batch")),(0,l.kt)("h3",{id:"retrieve"},"retrieve"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function retrieve(contract IERC20 token, address to) external payable returns (uint256 amount)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Retrieve any token in the Ladle")),(0,l.kt)("h3",{id:"receive"},"receive"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"receive() external payable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The WETH9 contract will send ether to BorrowProxy on ",(0,l.kt)("inlineCode",{parentName:"em"},"weth.withdraw")," using this function.")),(0,l.kt)("h3",{id:"joinether"},"joinEther"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function joinEther(bytes6 etherId) external payable returns (uint256 ethTransferred)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Accept Ether, wrap it and forward it to the WethJoin\nThis function should be called first in a batch, and the Join should keep track of stored reserves\nPassing the id for a join that doesn't link to a contract implemnting IWETH9 will fail")),(0,l.kt)("h3",{id:"exitether"},"exitEther"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function exitEther(address payable to) external payable returns (uint256 ethTransferred)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Unwrap Wrapped Ether held by this Ladle, and send the Ether\nThis function should be called last in a batch, and the Ladle should have no reason to keep an WETH balance")),(0,l.kt)("h3",{id:"_generatevaultid"},"_generateVaultId"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _generateVaultId(uint8 salt) private view returns (bytes12)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Generate a vaultId. A keccak256 is cheaper than using a counter with a SSTORE, even accounting for eventual collision retries.")),(0,l.kt)("h3",{id:"build"},"build"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function build(bytes6 seriesId, bytes6 ilkId, uint8 salt) external payable virtual returns (bytes12, struct DataTypes.Vault)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Create a new vault, linked to a series (and therefore underlying) and a collateral")),(0,l.kt)("h3",{id:"_build"},"_build"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _build(bytes6 seriesId, bytes6 ilkId, uint8 salt) internal returns (bytes12 vaultId, struct DataTypes.Vault vault)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Create a new vault, linked to a series (and therefore underlying) and a collateral")),(0,l.kt)("h3",{id:"tweak"},"tweak"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function tweak(bytes12 vaultId_, bytes6 seriesId, bytes6 ilkId) external payable returns (struct DataTypes.Vault vault)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Change a vault series or collateral.")),(0,l.kt)("h3",{id:"give"},"give"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function give(bytes12 vaultId_, address receiver) external payable returns (struct DataTypes.Vault vault)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Give a vault to another user.")),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function destroy(bytes12 vaultId_) external payable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Destroy an empty vault. Used to recover gas costs.")),(0,l.kt)("h3",{id:"stir"},"stir"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function stir(bytes12 from, bytes12 to, uint128 ink, uint128 art) external payable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Move collateral and debt between vaults.")),(0,l.kt)("h3",{id:"_pour"},"_pour"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _pour(bytes12 vaultId, struct DataTypes.Vault vault, address to, int128 ink, int128 art) private\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Add collateral and borrow from vault, pull assets from and push borrowed asset to user\nOr, repay to vault and remove collateral, pull borrowed asset from and push assets to user\nBorrow only before maturity.")),(0,l.kt)("h3",{id:"pour"},"pour"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function pour(bytes12 vaultId_, address to, int128 ink, int128 art) external payable\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Add collateral and borrow from vault, pull assets from and push borrowed asset to user\nOr, repay to vault and remove collateral, pull borrowed asset from and push assets to user\nBorrow only before maturity.")),(0,l.kt)("h3",{id:"serve"},"serve"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function serve(bytes12 vaultId_, address to, uint128 ink, uint128 base, uint128 max) external payable returns (uint128 art)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Add collateral and borrow from vault, so that a precise amount of base is obtained by the user.\nThe base is obtained by borrowing fyToken and buying base with it in a pool.\nOnly before maturity.")),(0,l.kt)("h3",{id:"close"},"close"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function close(bytes12 vaultId_, address to, int128 ink, int128 art) external payable returns (uint128 base)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Repay vault debt using underlying token at a 1:1 exchange rate, without trading in a pool.\nIt can add or remove collateral at the same time.\nThe debt to repay is denominated in fyToken, even if the tokens pulled from the user are underlying.\nThe debt to repay must be entered as a negative number, as with ",(0,l.kt)("inlineCode",{parentName:"em"},"pour"),".\nDebt cannot be acquired with this function.")),(0,l.kt)("h3",{id:"repay"},"repay"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function repay(bytes12 vaultId_, address to, int128 ink, uint128 min) external payable returns (uint128 art)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Repay debt by selling base in a pool and using the resulting fyToken\nThe base tokens need to be already in the pool, unaccounted for.\nOnly before maturity. After maturity use close.")),(0,l.kt)("h3",{id:"repayvault"},"repayVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function repayVault(bytes12 vaultId_, address to, int128 ink, uint128 max) external payable returns (uint128 base)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Repay all debt in a vault by buying fyToken from a pool with base.\nThe base tokens need to be already in the pool, unaccounted for. The surplus base will be returned to msg.sender.\nOnly before maturity. After maturity use close.")),(0,l.kt)("h3",{id:"roll"},"roll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function roll(bytes12 vaultId_, bytes6 newSeriesId, uint8 loan, uint128 max) external payable returns (struct DataTypes.Vault vault, uint128 newDebt)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Change series and debt of a vault.")),(0,l.kt)("h3",{id:"repayfromladle"},"repayFromLadle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function repayFromLadle(bytes12 vaultId_, address to) external payable returns (uint256 repaid)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Use fyToken in the Ladle to repay debt. Return unused fyToken to ",(0,l.kt)("inlineCode",{parentName:"em"},"to"),'.\nReturn as much collateral as debt was repaid, as well. This function is only used when\nremoving liquidity added with "Borrow and Pool", so it\'s safe to assume the exchange rate\nis 1:1. If used in other contexts, it might revert, which is fine.')),(0,l.kt)("h3",{id:"closefromladle"},"closeFromLadle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function closeFromLadle(bytes12 vaultId_, address to) external payable returns (uint256 repaid)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Use base in the Ladle to repay debt. Return unused base to ",(0,l.kt)("inlineCode",{parentName:"em"},"to"),'.\nReturn as much collateral as debt was repaid, as well. This function is only used when\nremoving liquidity added with "Borrow and Pool", so it\'s safe to assume the exchange rate\nis 1:1. If used in other contexts, it might revert, which is fine.')),(0,l.kt)("h3",{id:"redeem"},"redeem"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeem(bytes6 seriesId, address to, uint256 wad) external payable returns (uint256)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Allow users to redeem fyToken, to be used with batch.\nIf 0 is passed as the amount to redeem, it redeems the fyToken balance of the Ladle instead.")))}m.isMDXComponent=!0}}]);