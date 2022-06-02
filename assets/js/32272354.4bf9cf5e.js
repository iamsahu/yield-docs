"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[1356],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),k=l,m=c["".concat(i,".").concat(k)]||c[k]||p[k]||r;return a?n.createElement(m,d(d({ref:t},s),{},{components:a})):n.createElement(m,d({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,d=new Array(r);d[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,d[1]=o;for(var u=2;u<r;u++)d[u]=a[u];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5166:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),d=["components"],o={},i="ConvexJoin",u={unversionedId:"other/convex/ConvexJoin",id:"other/convex/ConvexJoin",title:"ConvexJoin",description:"Wrapper used to manage staking of Convex tokens",source:"@site/docs/other/convex/ConvexJoin.md",sourceDirName:"other/convex",slug:"/other/convex/ConvexJoin",permalink:"/docs/other/convex/ConvexJoin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/other/convex/ConvexJoin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IContangoLadle",permalink:"/docs/other/contango/interfaces/IContangoLadle"},next:{title:"ConvexModule",permalink:"/docs/other/convex/ConvexModule"}},s={},p=[{value:"EarnedData",id:"earneddata",level:3},{value:"RewardType",id:"rewardtype",level:3},{value:"managed_assets",id:"managed_assets",level:3},{value:"vaults",id:"vaults",level:3},{value:"crv",id:"crv",level:3},{value:"cvx",id:"cvx",level:3},{value:"convexToken",id:"convextoken",level:3},{value:"convexPool",id:"convexpool",level:3},{value:"convexPoolId",id:"convexpoolid",level:3},{value:"cauldron",id:"cauldron",level:3},{value:"rewards",id:"rewards",level:3},{value:"registeredRewards",id:"registeredrewards",level:3},{value:"CRV_INDEX",id:"crv_index",level:3},{value:"CVX_INDEX",id:"cvx_index",level:3},{value:"_status",id:"_status",level:3},{value:"_NOT_ENTERED",id:"_not_entered",level:3},{value:"_ENTERED",id:"_entered",level:3},{value:"Deposited",id:"deposited",level:3},{value:"Withdrawn",id:"withdrawn",level:3},{value:"VaultAdded",id:"vaultadded",level:3},{value:"VaultRemoved",id:"vaultremoved",level:3},{value:"constructor",id:"constructor",level:3},{value:"nonReentrant",id:"nonreentrant",level:3},{value:"setApprovals",id:"setapprovals",level:3},{value:"addVault",id:"addvault",level:3},{value:"removeVault",id:"removevault",level:3},{value:"aggregatedAssetsOf",id:"aggregatedassetsof",level:3},{value:"addRewards",id:"addrewards",level:3},{value:"join",id:"join",level:3},{value:"exit",id:"exit",level:3},{value:"_calcRewardIntegral",id:"_calcrewardintegral",level:3},{value:"_checkpoint",id:"_checkpoint",level:3},{value:"checkpoint",id:"checkpoint",level:3},{value:"getReward",id:"getreward",level:3},{value:"earned",id:"earned",level:3}],c={toc:p};function k(e){var t=e.components,a=(0,l.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"convexjoin"},"ConvexJoin"),(0,r.kt)("p",null,"Wrapper used to manage staking of Convex tokens"),(0,r.kt)("h3",{id:"earneddata"},"EarnedData"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"struct EarnedData {\n  address token;\n  uint256 amount;\n}\n")),(0,r.kt)("h3",{id:"rewardtype"},"RewardType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"struct RewardType {\n  address reward_token;\n  address reward_pool;\n  uint128 reward_integral;\n  uint128 reward_remaining;\n  mapping(address &#x3D;&gt; uint256) reward_integral_for;\n  mapping(address &#x3D;&gt; uint256) claimable_reward;\n}\n")),(0,r.kt)("h3",{id:"managed_assets"},"managed_assets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 managed_assets\n")),(0,r.kt)("h3",{id:"vaults"},"vaults"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(address => bytes12[]) vaults\n")),(0,r.kt)("h3",{id:"crv"},"crv"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"address crv\n")),(0,r.kt)("h3",{id:"cvx"},"cvx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"address cvx\n")),(0,r.kt)("h3",{id:"convextoken"},"convexToken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"address convexToken\n")),(0,r.kt)("h3",{id:"convexpool"},"convexPool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"address convexPool\n")),(0,r.kt)("h3",{id:"convexpoolid"},"convexPoolId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 convexPoolId\n")),(0,r.kt)("h3",{id:"cauldron"},"cauldron"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"contract ICauldron cauldron\n")),(0,r.kt)("h3",{id:"rewards"},"rewards"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"struct ConvexJoin.RewardType[] rewards\n")),(0,r.kt)("h3",{id:"registeredrewards"},"registeredRewards"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(address => uint256) registeredRewards\n")),(0,r.kt)("h3",{id:"crv_index"},"CRV_INDEX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 CRV_INDEX\n")),(0,r.kt)("h3",{id:"cvx_index"},"CVX_INDEX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 CVX_INDEX\n")),(0,r.kt)("h3",{id:"_status"},"_status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"uint8 _status\n")),(0,r.kt)("h3",{id:"_not_entered"},"_NOT_ENTERED"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"uint8 _NOT_ENTERED\n")),(0,r.kt)("h3",{id:"_entered"},"_ENTERED"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"uint8 _ENTERED\n")),(0,r.kt)("h3",{id:"deposited"},"Deposited"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event Deposited(address _user, address _account, uint256 _amount, bool _wrapped)\n")),(0,r.kt)("h3",{id:"withdrawn"},"Withdrawn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event Withdrawn(address _user, uint256 _amount, bool _unwrapped)\n")),(0,r.kt)("h3",{id:"vaultadded"},"VaultAdded"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event VaultAdded(address account, bytes12 vaultId)\n")),(0,r.kt)("p",null,"Event called when a vault is added for a user"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The account for which vault is added")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vaultId"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes12"),(0,r.kt)("td",{parentName:"tr",align:null},"The vaultId to be added")))),(0,r.kt)("h3",{id:"vaultremoved"},"VaultRemoved"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event VaultRemoved(address account, bytes12 vaultId)\n")),(0,r.kt)("p",null,"Event called when a vault is removed for a user"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The account for which vault is removed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vaultId"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes12"),(0,r.kt)("td",{parentName:"tr",align:null},"The vaultId to be removed")))),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(address _convexToken, address _convexPool, uint256 _poolId, contract ICauldron _cauldron, address _crv, address _cvx) public\n")),(0,r.kt)("h3",{id:"nonreentrant"},"nonReentrant"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"modifier nonReentrant()\n")),(0,r.kt)("h3",{id:"setapprovals"},"setApprovals"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function setApprovals() public\n")),(0,r.kt)("p",null,"Give maximum approval to the pool & convex booster contract to transfer funds from wrapper"),(0,r.kt)("h3",{id:"addvault"},"addVault"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function addVault(bytes12 vaultId) external\n")),(0,r.kt)("p",null,"Adds a vault to the user's vault list"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vaultId"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes12"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the vault being added")))),(0,r.kt)("h3",{id:"removevault"},"removeVault"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function removeVault(bytes12 vaultId, address account) public\n")),(0,r.kt)("p",null,"Remove a vault from the user's vault list"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vaultId"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes12"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the vault being removed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The user from whom the vault needs to be removed")))),(0,r.kt)("h3",{id:"aggregatedassetsof"},"aggregatedAssetsOf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function aggregatedAssetsOf(address account) internal view returns (uint256)\n")),(0,r.kt)("p",null,"Get user's balance of collateral deposited in various vaults"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"User's address for which balance is requested")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"User's balance of collateral")))),(0,r.kt)("h3",{id:"addrewards"},"addRewards"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function addRewards() public\n")),(0,r.kt)("p",null,"Adds reward tokens by reading the available rewards from the RewardStaking pool"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"CRV token is added as a reward by default")),(0,r.kt)("h3",{id:"join"},"join"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function join(address user, uint128 amount) external returns (uint128)\n")),(0,r.kt)("p",null,"Take convex LP token and credit it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," address."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Before the join is called the vault is already updated, so the balance needs to be adjusted to the previous state for calculating the checkpoint")),(0,r.kt)("h3",{id:"exit"},"exit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function exit(address user, uint128 amount) external returns (uint128)\n")),(0,r.kt)("p",null,"Debit convex LP tokens held by this contract and send them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," address."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"IMPORTANT: Checkpoint needs to be called before calling pour for exit\nsince the vault is updated before calling exit calling checkpoint here would result in an incorrect calculation")),(0,r.kt)("h3",{id:"_calcrewardintegral"},"_calcRewardIntegral"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function _calcRewardIntegral(uint256 index, address account, uint256 balance, bool claim) internal\n")),(0,r.kt)("p",null,"Calculates & upgrades the integral for distributing the reward token"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The index of the reward token for which the calculations are to be done")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"Account for which the CvxIntegral has to be calculated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balance"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Balance of the accounts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claim"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to claim the calculated rewards")))),(0,r.kt)("h3",{id:"_checkpoint"},"_checkpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function _checkpoint(address account, uint256 delta, bool claim) internal\n")),(0,r.kt)("p",null,"Create a checkpoint for the supplied addresses by updating the reward integrals & claimable reward for them & claims the rewards"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Before the join is called the vault is already updated, so the balance needs to be adjusted to the previous state for calculating the checkpoint")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The account for which checkpoints have to be calculated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delta"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to be subtracted from depositedBalance while joining")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claim"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to claim the rewards for the account")))),(0,r.kt)("h3",{id:"checkpoint"},"checkpoint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function checkpoint(address account) external returns (bool)\n")),(0,r.kt)("p",null,"Create a checkpoint for the supplied addresses by updating the reward integrals & claimable reward for them"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The accounts for which checkpoints have to be calculated")))),(0,r.kt)("h3",{id:"getreward"},"getReward"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function getReward(address account) external\n")),(0,r.kt)("p",null,"Claim reward for the supplied account"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"Address whose reward is to be claimed")))),(0,r.kt)("h3",{id:"earned"},"earned"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function earned(address account) external view returns (struct ConvexJoin.EarnedData[] claimable)\n")),(0,r.kt)("p",null,"Get the amount of tokens the user has earned"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"Address whose balance is to be checked")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claimable"),(0,r.kt)("td",{parentName:"tr",align:null},"struct ConvexJoin.EarnedData[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of earned tokens and their amount")))))}k.isMDXComponent=!0}}]);