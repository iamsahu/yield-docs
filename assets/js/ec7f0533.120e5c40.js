"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[7079],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=d(n),p=o,m=h["".concat(s,".").concat(p)]||h[p]||c[p]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={},s="Smart Contracts Overview",d={unversionedId:"developers/smart_contracts_overview",id:"developers/smart_contracts_overview",title:"Smart Contracts Overview",description:"The vault-v2 repository contains the contracts that enable Yield v2 as a Collateralized Debt Platform. Together, these contracts allow users to post collateral and borrow fyToken, while the protocol takes care of topics such as accounting, collateralization, redemption and liquidations.",source:"@site/docs/developers/smart_contracts_overview.md",sourceDirName:"developers",slug:"/developers/smart_contracts_overview",permalink:"/yield-docs/developers/smart_contracts_overview",draft:!1,editUrl:"https://github.com/iamsahu/yield-docs/tree/master/docs/developers/smart_contracts_overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Developer Documentation",permalink:"/yield-docs/developers/"},next:{title:"Governance",permalink:"/yield-docs/developers/governance"}},u={},c=[{value:"Oracle",id:"oracle",level:2},{value:"Spot oracles",id:"spot-oracles",level:3},{value:"Rate and chi oracles",id:"rate-and-chi-oracles",level:3},{value:"Join",id:"join",level:2},{value:"Join",id:"join-1",level:3},{value:"Exit",id:"exit",level:3},{value:"Retrieve",id:"retrieve",level:3},{value:"FyToken",id:"fytoken",level:2},{value:"Cauldron",id:"cauldron",level:2},{value:"Vaults",id:"vaults",level:3},{value:"Stir and pour",id:"stir-and-pour",level:3},{value:"Debt after maturity",id:"debt-after-maturity",level:3},{value:"Collateralization",id:"collateralization",level:3},{value:"Liquidations",id:"liquidations",level:3},{value:"Protocol Debt",id:"protocol-debt",level:3},{value:"Witch",id:"witch",level:2},{value:"Ladle",id:"ladle",level:2},{value:"Execution Flow",id:"execution-flow",level:3},{value:"User Features",id:"user-features",level:3},{value:"Wand",id:"wand",level:2},{value:"Math64x64",id:"math64x64",level:3},{value:"YieldMath",id:"yieldmath",level:3},{value:"Pool",id:"pool",level:2},{value:"Liquidity",id:"liquidity",level:3},{value:"Trading",id:"trading",level:3},{value:"TS, G1, and G2",id:"ts-g1-and-g2",level:3},{value:"Time-Weighted Average Rate",id:"time-weighted-average-rate",level:3},{value:"PoolFactory",id:"poolfactory",level:2},{value:"PoolExtensions",id:"poolextensions",level:2},{value:"AccessControl",id:"accesscontrol",level:2},{value:"ERC20 and ERC20Permit",id:"erc20-and-erc20permit",level:2},{value:"Timelock",id:"timelock",level:2},{value:"EmergencyBrake",id:"emergencybrake",level:2}],h={toc:c};function p(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smart-contracts-overview"},"Smart Contracts Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8272).Z,width:"1300",height:"915"})),(0,i.kt)("h1",{id:"vault-contracts"},"Vault Contracts"),(0,i.kt)("p",null,"The vault-v2 repository contains the contracts that enable Yield v2 as a Collateralized Debt Platform. Together, these contracts allow users to post collateral and borrow fyToken, while the protocol takes care of topics such as accounting, collateralization, redemption and liquidations."),(0,i.kt)("h2",{id:"oracle"},"Oracle"),(0,i.kt)("p",null,"The Yield Protocol uses its own Oracle interface as a wrapper to external oracles, so that it is possible to switch to external oracles with arbitrary interfaces with no impact on the core contracts."),(0,i.kt)("p",null,"The IOracle interface offers a ",(0,i.kt)("inlineCode",{parentName:"p"},"get(bytes32 base, bytes32 quote, uint256 amount) returns (uint256 value)")," function that accepts base and quote identifiers and an amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"base")," to convert according to them and to the value returned by the external oracle."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"peek")," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", but for oracles that offer non-transactional readings."),(0,i.kt)("p",null,"Each oracle stores multiple sources of the same type in a single contract, to reduce deployment costs."),(0,i.kt)("h3",{id:"spot-oracles"},"Spot oracles"),(0,i.kt)("p",null,"Spot oracles return the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," of an ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"base")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"quote")," terms. We use these to determine the collateralization level of vaults."),(0,i.kt)("h3",{id:"rate-and-chi-oracles"},"Rate and chi oracles"),(0,i.kt)("p",null,"To charge borrowers for maintaining a borrowing position after maturity, Yield charges interest. The interest is determined by an oracle called the \u2018rate\u2019 oracle. Likewise, to compensate lenders who leave fyTokens unredeemed, fyTokens increase in redemption value after maturity based upon an oracle called the \u2018chi\u2019 oracle."),(0,i.kt)("p",null,"Rate and chi oracles return the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," of an ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," multiplied by the borrowing and lending rates for ",(0,i.kt)("inlineCode",{parentName:"p"},"base"),", respectively. These rates we currently get from Compound cTokens. We use these oracles to determine the debt of vaults after maturity, and the redemption value of fyToken after maturity."),(0,i.kt)("h2",{id:"join"},"Join"),(0,i.kt)("p",null,"Join contracts hold ERC20 and other assets that are external to the Yield Protocol, but that we manage as collateral or underlying."),(0,i.kt)("p",null,"We deploy one Join for each asset (collateral or underlying) that is accepted in the Yield Protocol. The Ladle keeps a registry of these Joins and is the only contract or account with permissions to move assets in or out of a Join."),(0,i.kt)("p",null,"The Join contract keeps track of the assets it should be holding, instead of relying on checking its balance at the asset contract. This allows removing the need for approvals in the integration with other contracts."),(0,i.kt)("h3",{id:"join-1"},"Join"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," function takes assets from the specified account. If there are any unaccounted assets already in the Join, these are used before transferring from the user."),(0,i.kt)("h3",{id:"exit"},"Exit"),(0,i.kt)("p",null,"Transfer an amount of asset to the given address."),(0,i.kt)("h3",{id:"retrieve"},"Retrieve"),(0,i.kt)("p",null,"Transfer an amount of any ERC20 other than asset to the given address, to enable airdrops to the Join."),(0,i.kt)("p",null,"Flash Loans"),(0,i.kt)("p",null,"The Join can serve as a lender for ERC3156 compliant flash loans of the asset it holds."),(0,i.kt)("p",null,"Join Factory"),(0,i.kt)("p",null,"To reduce the deployment size of Wand to under 24Kb, Joins are deployed through a Join Factory."),(0,i.kt)("h2",{id:"fytoken"},"FyToken"),(0,i.kt)("p",null,"fyTokens are Ethereum based ERC-20 tokens that can be redeemed for an underlying asset one-to-one after a predetermined maturity date."),(0,i.kt)("p",null,"Redemptions can be executed at or after maturity. In a redemption, the fyTokens will be burnt and the underlying asset will be sent to a user on a one-to-one basis."),(0,i.kt)("p",null,"The fyTokens for redemption needs to either have been approved by the caller or needs to have been transferred to the fyToken contract. If transferring, the ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"redeem")," should happen in the same transaction."),(0,i.kt)("p",null,"On the first redemption or the first time that ",(0,i.kt)("inlineCode",{parentName:"p"},"mature")," is called, the chi oracle is read to record the chi value at maturity. On any subsequent redemptions, the chi oracle is read to calculate the chi accrual, defined as ",(0,i.kt)("inlineCode",{parentName:"p"},"current chi / chi at maturity"),"."),(0,i.kt)("p",null,"The amount of underlying transferred on redemption is the amount of fyToken redeemed multiplied by the chi accrual."),(0,i.kt)("p",null,"On redemption, fyToken instructs the Join for the underlying to transfer the underlying to the target account."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"burn")," functions are restricted, and only the Ladle can call them. It does so when issuing or repaying debt."),(0,i.kt)("p",null,"Can be flash minted with no fees following the ERC3156 standard."),(0,i.kt)("p",null,"For a given underlying asset, such as Dai, there would be a fyToken contract for each maturity. If, for example, we decide to have quarterly maturities for Dai in 2021, we would deploy 4 fyDai contracts: 31/03/21, 30/06/21, 30/09/21, and 31/12/21."),(0,i.kt)("h2",{id:"cauldron"},"Cauldron"),(0,i.kt)("p",null,"The Cauldron is the debt and collateral accounting system for Yield. The only external dependencies from Cauldron are towards rate oracles and spot oracles. All transactional functions in Cauldron require privileged access."),(0,i.kt)("h3",{id:"vaults"},"Vaults"),(0,i.kt)("p",null,"User debt and collateral are recorded in numbered vaults so that each account can have multiple independent positions. A series of fyToken is a specific ERC-20 contract that has a maturity time and an underlying or \u201cbase\u201d asset. Vaults permit an owner to provide a single kind of collateral to borrow a single series of fyTokens. Vaults can be created, modified, transferred, or destroyed."),(0,i.kt)("p",null,"Each vault is linked to a single series and a single ilk. A series is a fyToken contract with associated data. An ilk is an asset that is used as collateral."),(0,i.kt)("p",null,"The vault data is divided into two separate structs, both accessible through the vaultId: Vault and Balances."),(0,i.kt)("p",null,"DataTypes.Vault records the owner, seriesId and ilkId."),(0,i.kt)("p",null,"DataTypes.Balances record the vault debt(art) and vault collateral(ink). You use ink to draw art."),(0,i.kt)("h3",{id:"stir-and-pour"},"Stir and pour"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stir")," moves collateral and debt between vaults. It can only move debt or collateral between vaults with matching seriesId or ilkId, respectively."),(0,i.kt)("p",null,"It can be combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"destroy")," to split and merge vaults."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pour")," is used to add and remove debt and collateral to vaults. It underpins borrowing and repaying."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stir")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pour")," will revert if any affected vaults would be undercollateralized at the end of the transaction."),(0,i.kt)("h3",{id:"debt-after-maturity"},"Debt after maturity"),(0,i.kt)("p",null,"The debt of a vault is stored in fyToken terms, and only ever changes through user action."),(0,i.kt)("p",null,"However, if the debt is expressed in underlying assets, it increases after maturity through applying a borrowing rate obtained from the rate oracle for the underlying."),(0,i.kt)("p",null,"A different way to look at this mechanism"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 fyDai of debt can always be repaid with 1 fyDai")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 fyDai of debt can be paid with 1 Dai before maturity, or 1 Dai * rate_accrual after maturity, where ",(0,i.kt)("inlineCode",{parentName:"li"},"rate_accrual = borrowing_rate_now / borrowing_rate_at_maturity"))),(0,i.kt)("h3",{id:"collateralization"},"Collateralization"),(0,i.kt)("p",null,"All vaults need to remain collateralized, or they will be at risk of liquidation."),(0,i.kt)("p",null,"A vault is collateralized if the value of its collateral is greater than the value of its debt by a factor equal to the collateralization ratio of the underlying and collateral pair."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ink * price * ratio >= art * rate_accrual\n")),(0,i.kt)("h3",{id:"liquidations"},"Liquidations"),(0,i.kt)("p",null,"For the protocol to not go bankrupt, it must act when the value of the collateral in the vaults risks being lower than the debt owed by the vaults."),(0,i.kt)("p",null,"Liquidation engines are given access to the Cauldron to resolve the situation. Any undercollateralized vault can be seized by a liquidation engine using ",(0,i.kt)("inlineCode",{parentName:"p"},"grab"),". At that point, the vault effectively belongs to the liquidation engine."),(0,i.kt)("p",null,"As the auction proceeds, the liquidation engine will use ",(0,i.kt)("inlineCode",{parentName:"p"},"settle")," to send any obtained underlying to the appropriate Join, and the sold collateral to the auction buyers."),(0,i.kt)("p",null,"Once all the debt is sold, the liquidation engine will return the vault to its owner, with the debt reset to zero, and an amount of collateral that depends on the outcome of the auction."),(0,i.kt)("p",null,"Liquidation engines can have multiple implementations, but they must be approved by the Cauldron before they can operate."),(0,i.kt)("h3",{id:"protocol-debt"},"Protocol Debt"),(0,i.kt)("p",null,"The Cauldron also records the protocol debt (DataTypes.Debt.debt) for every underlying and collateral pair."),(0,i.kt)("p",null,"As users borrow from a given series, the debt is accounted in the protocol totals as the underlying from the series and the collateral that was used."),(0,i.kt)("p",null,"There are ceiling debt limits (DataTypes.Debt.max), and the Cauldron will reject registering any more debt that surpasses them."),(0,i.kt)("h2",{id:"witch"},"Witch"),(0,i.kt)("p",null,"The Witch is a Liquidation Engine, one of many possible implementations."),(0,i.kt)("p",null,"The Witch grabs uncollateralized vaults, replacing the owner by itself. Then it sells the vault collateral in exchange for underlying to pay its debt. The amount of collateral given increases over time, until it offers to sell all the collateral for underlying to pay all the debt. The auction is held open at the final price indefinitely."),(0,i.kt)("p",null,"After the debt is settled, the Witch returns the vault to its original owner."),(0,i.kt)("h2",{id:"ladle"},"Ladle"),(0,i.kt)("p",null,"The Ladle is a routing and asset management contract for Yield. It can be upgraded through Modules or replaced entirely. It has considerable privileges and is the most complex contract in the protocol."),(0,i.kt)("p",null,"The Ladle is authorized to make changes to the accounting in Cauldron. It is as well the only contract that is authorized to create, modify or destroy Vaults in the Cauldron."),(0,i.kt)("p",null,"The Ladle keeps a registry of all Joins and it is authorized to move assets from any Join to any account. The Ladle also moves assets from users to Joins, with allowances approved by the users."),(0,i.kt)("p",null,"The Ladle is authorized to mint fyToken at will. The Ladle also moves fyToken from users to FYToken contracts for burning, with allowances approved by the users. The Ladle knows about all the existing fyTokens through the series registry in the Cauldron."),(0,i.kt)("p",null,"The Ladle keeps a registry of all the Pools, indexed by the id of the series traded. The Ladle also moves assets from users to Pool contracts for trading, with allowances approved by the users."),(0,i.kt)("h3",{id:"execution-flow"},"Execution Flow"),(0,i.kt)("p",null,"Any number of actions can be batched in a single transaction using the Ladle using ",(0,i.kt)("inlineCode",{parentName:"p"},"batch"),". This is the most common method of operation."),(0,i.kt)("p",null,"The Ladle can also be used to execute arbitrary calls on any registered contracts using ",(0,i.kt)("inlineCode",{parentName:"p"},"route"),". This is used, for example, to deal with Pools and Strategies."),(0,i.kt)("p",null,"The Ladle can be extended by the use of modules. The Ladle can ",(0,i.kt)("inlineCode",{parentName:"p"},"moduleCall")," functions in modules that have been authorized via governance. The Modules can inherit from LadleStorage to read and modify the Ladle storage, although modifying it is discouraged."),(0,i.kt)("h3",{id:"user-features"},"User Features"),(0,i.kt)("p",null,"The Ladle uses the integrations and authorizations described above to provide collateralized debt features."),(0,i.kt)("p",null,"When a user wants to deposit collateral and borrow a fyToken, the Ladle will ",(0,i.kt)("inlineCode",{parentName:"p"},"pour"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Take the collateral from the user to the appropriate Join."),(0,i.kt)("li",{parentName:"ol"},"Register the position in the Cauldron."),(0,i.kt)("li",{parentName:"ol"},"Mint the fyToken in the user\u2019s account.")),(0,i.kt)("p",null,"Similarly, a user can repay debt and withdraw collateral with ",(0,i.kt)("inlineCode",{parentName:"p"},"pour"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Take the fyToken from the user, and burn it."),(0,i.kt)("li",{parentName:"ol"},"Register the new position in the Cauldron."),(0,i.kt)("li",{parentName:"ol"},"Transfer the collateral from the Join to the user.")),(0,i.kt)("p",null,"Users can also pay their debt with the underlying asset for the debt, instead of with fyTokens, using ",(0,i.kt)("inlineCode",{parentName:"p"},"close"),". While the debt in fyToken terms only changes through borrowing actions, the debt in underlying terms changes according to the matching rate oracle. The Ladle will get the rate accrual from the oracle through the Cauldron, and adjust asset transfers, and record positions accordingly."),(0,i.kt)("p",null,"Users can move collateral and debt between Vaults through the Ladle using ",(0,i.kt)("inlineCode",{parentName:"p"},"stir"),". Combined with the creation and destruction of Vaults, this can be used to split a Vault in two or to merge two Vaults into one."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Other Features")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Serve"),": Borrow and trade the fyToken for underlying, effectively borrowing at a fixed rate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Roll"),": Migrate debt between two series."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Repay"),": Trade underlying for fyToken, to pay the debt."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Repay Vault"),": Trade underlying for fyToken, to pay exactly all the debt in a vault."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"RepayFromLadle"),": Use any existing fyToken in the Ladle to repay debt."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"CloseFromLadle"),": Use any existing base in the Ladle to repay debt."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Redeem"),": Redeem fyToken in a fyToken contract for underlying."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Transfer"),": Take tokens from the caller to a destination."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Permit management"),": Execute a Dai or ERC2162 off-chain permit."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Ether management"),": Convert to WETH, or from WETH.")),(0,i.kt)("h2",{id:"wand"},"Wand"),(0,i.kt)("p",null,"Bundling of discrete governance actions into useful governance features."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Add asset"),": Adding an asset involves registering it in the Cauldron, deploying a Join for it, registering the Join in the Ladle, and permissioning the Ladle to use the Join.\n",(0,i.kt)("em",{parentName:"p"},"Make base"),": Making a base out of an existing asset involves setting an oracle for its borrowing rate in the Cauldron, and allowing the Witch to put base into its join during liquidations.\n",(0,i.kt)("em",{parentName:"p"},"Make ilk"),": Making an ilk out of an existing asset, for a given base, involves setting a spot oracle for the base/ilk pair in the Cauldron, setting debt limits in the Cauldron, and allowing the Witch to take such ilk out of its Join during liquidations.\n",(0,i.kt)("em",{parentName:"p"},"Add series"),": Adding a series is a costly process in terms of gas. It involves deploying the related fyToken, registering it in the Cauldron, and approving a number of ilks to be used as collateral when borrowing it. The fyToken also need to be given access to the Join for its underlying. The Ladle must be given permission to mint and burn the added fyToken. A Pool to trade between the fyToken and its underlying must be deployed, and registered in the Ladle."),(0,i.kt)("h1",{id:"yieldspace"},"YieldSpace"),(0,i.kt)("p",null,"YieldSpace is an automated liquidity provider that is designed to enable efficient trading between fyTokens and their underlying assets. You can read more about it in our\xa0",(0,i.kt)("a",{parentName:"p",href:"https://yield.is/YieldSpace.pdf"},"YieldSpace Whitepaper"),"\xa0to get a deeper understanding of the calculations and the overall mechanism. The Yield App integrates YieldSpace seamlessly into the user experience."),(0,i.kt)("h3",{id:"math64x64"},"Math64x64"),(0,i.kt)("p",null,"YieldSpace uses ABDK's Math64x64 library, which we have upgraded to 0.8."),(0,i.kt)("h3",{id:"yieldmath"},"YieldMath"),(0,i.kt)("p",null,"YieldMath.sol uses Math64x64 to implement YieldSpace as described in the whitepaper. The functions implemented in YieldMath are buyBase, sellBase, buyFYToken and sellFYToken."),(0,i.kt)("h2",{id:"pool"},"Pool"),(0,i.kt)("p",null,"The Pool contracts are a DEX implementation very much in the style of Uniswap v2, but using YieldMath to calculate the trades."),(0,i.kt)("h3",{id:"liquidity"},"Liquidity"),(0,i.kt)("p",null,"Each Pool must keep a balance of the two assets it trades: One underlying asset and one fyToken. The marginal interest rate currently offered by the Pool is determined from the relative levels of the reserves of the underlying asset and the fyToken."),(0,i.kt)("p",null,"To build up these balances, liquidity providers can provide assets using ",(0,i.kt)("inlineCode",{parentName:"p"},"mint"),", receiving pool tokens in exchange. Pool token holders can ",(0,i.kt)("inlineCode",{parentName:"p"},"burn")," them to receive their assets back, plus a proportion of the pool growth that can be attributed to trading fees."),(0,i.kt)("p",null,"When providing liquidity, assets must be provided in the same proportion as the pool balances, thus a liquidity provider is required to provide precise amounts of underlying and fyToken. When a Pool has exactly zero fyToken, only underlying is provided to ",(0,i.kt)("inlineCode",{parentName:"p"},"mint"),". This is the state when a Pool is first deployed. The initial fyToken balance must come from someone selling fyToken to the Pool."),(0,i.kt)("p",null,"In a Pool, the fyToken balances must always be higher than the underlying balances for the curve not to go into negative territory. This means that there are always some fyTokens that cannot be purchased. An optimization already present in Yield v1 is that the supply of pool tokens is added to the fyToken balance when trading. These \u201cvirtual fyTokens\u201d  allow us to safely reduce the amount of fyToken that must be kept in the Pools."),(0,i.kt)("p",null,"Since providing both underlying and fyToken is inconvenient, the Pool implements a ",(0,i.kt)("inlineCode",{parentName:"p"},"mintWithBase")," function that allows the liquidity provider to provide only underlying, and a virtual trade will be done to convert a proportion of the underlying to fyToken inside the same pool. The amount of underlying to trade for fyToken must be calculated off-chain."),(0,i.kt)("p",null,"In a similar vein, a ",(0,i.kt)("inlineCode",{parentName:"p"},"burnForBase")," function allows liquidity providers to burn their pool tokens, and trade the fyToken received for underlying without any additional asset transfers, saving gas."),(0,i.kt)("h3",{id:"trading"},"Trading"),(0,i.kt)("p",null,"The Pool allows the user to sell assets (underlying or fyToken). In this trade, the amount being sold is known, but not the amount being received. Within the same transaction, ",(0,i.kt)("inlineCode",{parentName:"p"},"sellBasePreview")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"sellFYTokenPreview")," can be called to know the exact amount to be received."),(0,i.kt)("p",null,"The Pool also allows the user to buy assets. In this trade, the amount being received is known, but not the amount taken by the pool. Within the same transaction, ",(0,i.kt)("inlineCode",{parentName:"p"},"buyBasePreview")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".mdbuyFYTokenPreview")," can be called to know the exact amount to be taken by the Pool."),(0,i.kt)("p",null,"It is important to note that the Pool doesn\u2019t directly take any assets from anywhere. The assets must be in the Pool before the call to a trading function for the trade to happen. In the case of calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"buyBase")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"buyFYToken"),", where the input amount is not known, the user must either call the appropriate ",(0,i.kt)("inlineCode",{parentName:"p"},"Preview")," function in the same transaction, to transfer the exact amount to the Pool, or must transfer an amount judged sufficient for the trade to execute, and can call ",(0,i.kt)("inlineCode",{parentName:"p"},"retrieveBase")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"retrieveFYToken")," afterwards (but in the same transaction) to recover any surplus."),(0,i.kt)("h3",{id:"ts-g1-and-g2"},"TS, G1, and G2"),(0,i.kt)("p",null,"The TS, G1, and G2 parameters determine the trading curve and the trading fees and can be set by the PoolFactory owner via the ",(0,i.kt)("inlineCode",{parentName:"p"},"setParameter")," function for newly deployed Pools."),(0,i.kt)("h3",{id:"time-weighted-average-rate"},"Time-Weighted Average Rate"),(0,i.kt)("p",null,"Much like Uniswap v2 implements a Time-Weighted Average Price, Yield v2 implements a Time-Weighted Average Rate following the same pattern. Pool balances are stored along with the time that the TWAR was last updated, and the ratio of the cumulative balance. With this, the Pool can be used by external contracts as an Interest Rate Oracle between an underlying and a fyToken."),(0,i.kt)("h2",{id:"poolfactory"},"PoolFactory"),(0,i.kt)("p",null,"The PoolFactory is a permissioned contract that allows deploying Pools using CREATE2."),(0,i.kt)("h2",{id:"poolextensions"},"PoolExtensions"),(0,i.kt)("p",null,"The PoolExtensions library includes functions to calculate the trading limits and invariant for a Pool. A PoolExtensionsWrapper is included to be able to call them externally."),(0,i.kt)("h1",{id:"strategy"},"Strategy"),(0,i.kt)("p",null,"The Strategy contracts allow liquidity providers to pool liquidity to the Strategy, which in turn provides liquidity to a YieldSpace Pool. Upon maturity, the Strategy rolls the liquidity to a new Pool at no cost to liquidity providers."),(0,i.kt)("p",null,"Liquidity providers mint Strategy tokens with Pool tokens of the pool that the Strategy is currently invested in, and receive a share of Strategy tokens proportional to their investment."),(0,i.kt)("p",null,"Liquidity providers can burn Strategy tokens of a proportional share of Pool tokens from the Strategy. These Pool tokens are from the current pool, not necessarily the same that they used to invest."),(0,i.kt)("p",null,"If the Strategy is not invested in any Pool, liquidity providers can burn their Strategy tokens for a proportional share of the underlying held by the Strategy."),(0,i.kt)("p",null,"A governance action sets the next pool to roll to. This action should be taken by a governor role through a long-delay Timelock, to give investors time to react in case they disagree with the next pool."),(0,i.kt)("p",null,"A permissioned ",(0,i.kt)("inlineCode",{parentName:"p"},"startPool")," function can be called if the Strategy is not currently investing in any pool, to invest in the next pool set by ",(0,i.kt)("inlineCode",{parentName:"p"},"setNextPool"),"."),(0,i.kt)("p",null,"After the current pool matures, anyone can call ",(0,i.kt)("inlineCode",{parentName:"p"},"endPool")," to convert all the Strategy holdings into underlying."),(0,i.kt)("h1",{id:"utility-contracts"},"Utility Contracts"),(0,i.kt)("p",null,"The Yield v2 protocol doesn't directly reuse any other smart contract implementations. Any general use smart contracts needed were reimplemented and stored in the yield-utils-v2 repository."),(0,i.kt)("h2",{id:"accesscontrol"},"AccessControl"),(0,i.kt)("p",null,"The access control contract was adapted from OpenZeppelin's AccessControl.sol and is inherited from most other contracts in the Yield Protocol."),(0,i.kt)("p",null,"A role exists implicitly for each function in a contract, with the ROOT role as the admin for the role."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," modifier is present in a function, access must have been granted to the caller by an account with the admin role for the function role. This admin role will usually be ROOT, but that can be changed."),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," modifier exists to restrict functions to accounts bearing the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," role of a given other role. This is not used outside AccessControl.sol."),(0,i.kt)("p",null,"An account belonging to the admin role for a function can grant and revoke memberships to the function role."),(0,i.kt)("p",null,"The ROOT role is special in that it is its own admin so that any member of ROOT can grant and revoke ROOT permissions on other accounts."),(0,i.kt)("p",null,"There is a special LOCK role, that is also an admin of itself, but has no members. By changing the admin role of a function role to LOCK, no further changes can ever be done to the function role membership, except users voluntarily renouncing to the function role."),(0,i.kt)("h2",{id:"erc20-and-erc20permit"},"ERC20 and ERC20Permit"),(0,i.kt)("p",null,"The Yield Protocol ERC20 contracts borrow heavily from the DS-Token implementation. The ERC2162 extension is taken from WETH10, which was taken in turn from Yield v1."),(0,i.kt)("h2",{id:"timelock"},"Timelock"),(0,i.kt)("p",null,"The Yield Protocol uses its own implementation of a Timelock, derived from Compound\u2019s original contract, but inheriting from AccessControl and implementing a different pattern to set the earliest time that an execution can be done."),(0,i.kt)("h2",{id:"emergencybrake"},"EmergencyBrake"),(0,i.kt)("p",null,"The EmergencyBrake stores the instructions to remove the orchestration between contracts, which is intended to be used in emergency situations to easily isolate parts of the protocol."))}p.isMDXComponent=!0},8272:function(e,t,n){t.Z=n.p+"assets/images/architecture-ac6f828597ab0f42f4f0710e7e89a0f3.png"}}]);