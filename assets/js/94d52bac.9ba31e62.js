"use strict";(self.webpackChunkyield_docs=self.webpackChunkyield_docs||[]).push([[7852],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=l.createContext({}),u=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=u(e.components);return l.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=u(a),k=r,m=c["".concat(d,".").concat(k)]||c[k]||p[k]||n;return a?l.createElement(m,s(s({ref:t},o),{},{components:a})):l.createElement(m,s({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<n;u++)s[u]=a[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},879:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var l=a(7462),r=a(3366),n=(a(7294),a(3905)),s=["components"],i={},d="CauldronMath",u={unversionedId:"Cauldron",id:"Cauldron",title:"CauldronMath",description:"add",source:"@site/docs/Cauldron.md",sourceDirName:".",slug:"/Cauldron",permalink:"/docs/Cauldron",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Cauldron.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"FYToken",permalink:"/docs/FYToken"}},o={},p=[{value:"add",id:"add",level:3},{value:"Cauldron",id:"cauldron",level:2},{value:"AssetAdded",id:"assetadded",level:3},{value:"SeriesAdded",id:"seriesadded",level:3},{value:"IlkAdded",id:"ilkadded",level:3},{value:"SpotOracleAdded",id:"spotoracleadded",level:3},{value:"RateOracleAdded",id:"rateoracleadded",level:3},{value:"DebtLimitsSet",id:"debtlimitsset",level:3},{value:"VaultBuilt",id:"vaultbuilt",level:3},{value:"VaultTweaked",id:"vaulttweaked",level:3},{value:"VaultDestroyed",id:"vaultdestroyed",level:3},{value:"VaultGiven",id:"vaultgiven",level:3},{value:"VaultPoured",id:"vaultpoured",level:3},{value:"VaultStirred",id:"vaultstirred",level:3},{value:"VaultRolled",id:"vaultrolled",level:3},{value:"SeriesMatured",id:"seriesmatured",level:3},{value:"assets",id:"assets",level:3},{value:"series",id:"series",level:3},{value:"ilks",id:"ilks",level:3},{value:"lendingOracles",id:"lendingoracles",level:3},{value:"spotOracles",id:"spotoracles",level:3},{value:"debt",id:"debt",level:3},{value:"ratesAtMaturity",id:"ratesatmaturity",level:3},{value:"vaults",id:"vaults",level:3},{value:"balances",id:"balances",level:3},{value:"addAsset",id:"addasset",level:3},{value:"setDebtLimits",id:"setdebtlimits",level:3},{value:"setLendingOracle",id:"setlendingoracle",level:3},{value:"setSpotOracle",id:"setspotoracle",level:3},{value:"addSeries",id:"addseries",level:3},{value:"addIlks",id:"addilks",level:3},{value:"build",id:"build",level:3},{value:"destroy",id:"destroy",level:3},{value:"_tweak",id:"_tweak",level:3},{value:"tweak",id:"tweak",level:3},{value:"_give",id:"_give",level:3},{value:"give",id:"give",level:3},{value:"vaultData",id:"vaultdata",level:3},{value:"debtFromBase",id:"debtfrombase",level:3},{value:"debtToBase",id:"debttobase",level:3},{value:"stir",id:"stir",level:3},{value:"_pour",id:"_pour",level:3},{value:"pour",id:"pour",level:3},{value:"slurp",id:"slurp",level:3},{value:"roll",id:"roll",level:3},{value:"level",id:"level",level:3},{value:"mature",id:"mature",level:3},{value:"_mature",id:"_mature",level:3},{value:"accrual",id:"accrual",level:3},{value:"_accrual",id:"_accrual",level:3},{value:"_level",id:"_level",level:3}],c={toc:p};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cauldronmath"},"CauldronMath"),(0,n.kt)("h3",{id:"add"},"add"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function add(uint128 x, int128 y) internal pure returns (uint128 z)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Add a number (which might be negative) to a positive, and revert if the result is negative.")),(0,n.kt)("h2",{id:"cauldron"},"Cauldron"),(0,n.kt)("h3",{id:"assetadded"},"AssetAdded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event AssetAdded(bytes6 assetId, address asset)\n")),(0,n.kt)("h3",{id:"seriesadded"},"SeriesAdded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event SeriesAdded(bytes6 seriesId, bytes6 baseId, address fyToken)\n")),(0,n.kt)("h3",{id:"ilkadded"},"IlkAdded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event IlkAdded(bytes6 seriesId, bytes6 ilkId)\n")),(0,n.kt)("h3",{id:"spotoracleadded"},"SpotOracleAdded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event SpotOracleAdded(bytes6 baseId, bytes6 ilkId, address oracle, uint32 ratio)\n")),(0,n.kt)("h3",{id:"rateoracleadded"},"RateOracleAdded"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event RateOracleAdded(bytes6 baseId, address oracle)\n")),(0,n.kt)("h3",{id:"debtlimitsset"},"DebtLimitsSet"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event DebtLimitsSet(bytes6 baseId, bytes6 ilkId, uint96 max, uint24 min, uint8 dec)\n")),(0,n.kt)("h3",{id:"vaultbuilt"},"VaultBuilt"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event VaultBuilt(bytes12 vaultId, address owner, bytes6 seriesId, bytes6 ilkId)\n")),(0,n.kt)("h3",{id:"vaulttweaked"},"VaultTweaked"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event VaultTweaked(bytes12 vaultId, bytes6 seriesId, bytes6 ilkId)\n")),(0,n.kt)("h3",{id:"vaultdestroyed"},"VaultDestroyed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event VaultDestroyed(bytes12 vaultId)\n")),(0,n.kt)("h3",{id:"vaultgiven"},"VaultGiven"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event VaultGiven(bytes12 vaultId, address receiver)\n")),(0,n.kt)("h3",{id:"vaultpoured"},"VaultPoured"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event VaultPoured(bytes12 vaultId, bytes6 seriesId, bytes6 ilkId, int128 ink, int128 art)\n")),(0,n.kt)("h3",{id:"vaultstirred"},"VaultStirred"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event VaultStirred(bytes12 from, bytes12 to, uint128 ink, uint128 art)\n")),(0,n.kt)("h3",{id:"vaultrolled"},"VaultRolled"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event VaultRolled(bytes12 vaultId, bytes6 seriesId, uint128 art)\n")),(0,n.kt)("h3",{id:"seriesmatured"},"SeriesMatured"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"event SeriesMatured(bytes6 seriesId, uint256 rateAtMaturity)\n")),(0,n.kt)("h3",{id:"assets"},"assets"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => address) assets\n")),(0,n.kt)("h3",{id:"series"},"series"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => struct DataTypes.Series) series\n")),(0,n.kt)("h3",{id:"ilks"},"ilks"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => bool)) ilks\n")),(0,n.kt)("h3",{id:"lendingoracles"},"lendingOracles"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => contract IOracle) lendingOracles\n")),(0,n.kt)("h3",{id:"spotoracles"},"spotOracles"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => struct DataTypes.SpotOracle)) spotOracles\n")),(0,n.kt)("h3",{id:"debt"},"debt"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => mapping(bytes6 => struct DataTypes.Debt)) debt\n")),(0,n.kt)("h3",{id:"ratesatmaturity"},"ratesAtMaturity"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes6 => uint256) ratesAtMaturity\n")),(0,n.kt)("h3",{id:"vaults"},"vaults"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes12 => struct DataTypes.Vault) vaults\n")),(0,n.kt)("h3",{id:"balances"},"balances"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"mapping(bytes12 => struct DataTypes.Balances) balances\n")),(0,n.kt)("h3",{id:"addasset"},"addAsset"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function addAsset(bytes6 assetId, address asset) external\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Add a new Asset.")),(0,n.kt)("h3",{id:"setdebtlimits"},"setDebtLimits"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function setDebtLimits(bytes6 baseId, bytes6 ilkId, uint96 max, uint24 min, uint8 dec) external\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Set the maximum and minimum debt for an underlying and ilk pair. Can be reset.")),(0,n.kt)("h3",{id:"setlendingoracle"},"setLendingOracle"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function setLendingOracle(bytes6 baseId, contract IOracle oracle) external\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Set a rate oracle. Can be reset.")),(0,n.kt)("h3",{id:"setspotoracle"},"setSpotOracle"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function setSpotOracle(bytes6 baseId, bytes6 ilkId, contract IOracle oracle, uint32 ratio) external\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Set a spot oracle and its collateralization ratio. Can be reset.")),(0,n.kt)("h3",{id:"addseries"},"addSeries"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function addSeries(bytes6 seriesId, bytes6 baseId, contract IFYToken fyToken) external\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Add a new series")),(0,n.kt)("h3",{id:"addilks"},"addIlks"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function addIlks(bytes6 seriesId, bytes6[] ilkIds) external\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Add a new Ilk (approve an asset as collateral for a series).")),(0,n.kt)("h3",{id:"build"},"build"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function build(address owner, bytes12 vaultId, bytes6 seriesId, bytes6 ilkId) external returns (struct DataTypes.Vault vault)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Create a new vault, linked to a series (and therefore underlying) and a collateral")),(0,n.kt)("h3",{id:"destroy"},"destroy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function destroy(bytes12 vaultId) external\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Destroy an empty vault. Used to recover gas costs.")),(0,n.kt)("h3",{id:"_tweak"},"_tweak"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function _tweak(bytes12 vaultId, bytes6 seriesId, bytes6 ilkId) internal returns (struct DataTypes.Vault vault)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Change a vault series and/or collateral types.\nWe can change the series if there is no debt, or assets if there are no assets")),(0,n.kt)("h3",{id:"tweak"},"tweak"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function tweak(bytes12 vaultId, bytes6 seriesId, bytes6 ilkId) external returns (struct DataTypes.Vault vault)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Change a vault series and/or collateral types.\nWe can change the series if there is no debt, or assets if there are no assets")),(0,n.kt)("h3",{id:"_give"},"_give"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function _give(bytes12 vaultId, address receiver) internal returns (struct DataTypes.Vault vault)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Transfer a vault to another user.")),(0,n.kt)("h3",{id:"give"},"give"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function give(bytes12 vaultId, address receiver) external returns (struct DataTypes.Vault vault)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Transfer a vault to another user.")),(0,n.kt)("h3",{id:"vaultdata"},"vaultData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function vaultData(bytes12 vaultId, bool getSeries) internal view returns (struct DataTypes.Vault vault_, struct DataTypes.Series series_, struct DataTypes.Balances balances_)\n")),(0,n.kt)("h3",{id:"debtfrombase"},"debtFromBase"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function debtFromBase(bytes6 seriesId, uint128 base) external returns (uint128 art)\n")),(0,n.kt)("p",null,"Think about rounding up if using, since we are dividing."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Convert a debt amount for a series from base to fyToken terms.")),(0,n.kt)("h3",{id:"debttobase"},"debtToBase"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function debtToBase(bytes6 seriesId, uint128 art) external returns (uint128 base)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Convert a debt amount for a series from fyToken to base terms")),(0,n.kt)("h3",{id:"stir"},"stir"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function stir(bytes12 from, bytes12 to, uint128 ink, uint128 art) external returns (struct DataTypes.Balances, struct DataTypes.Balances)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Move collateral and debt between vaults.")),(0,n.kt)("h3",{id:"_pour"},"_pour"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function _pour(bytes12 vaultId, struct DataTypes.Vault vault_, struct DataTypes.Balances balances_, struct DataTypes.Series series_, int128 ink, int128 art) internal returns (struct DataTypes.Balances)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Add collateral and borrow from vault, pull assets from and push borrowed asset to user\nOr, repay to vault and remove collateral, pull borrowed asset from and push assets to user")),(0,n.kt)("h3",{id:"pour"},"pour"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function pour(bytes12 vaultId, int128 ink, int128 art) external virtual returns (struct DataTypes.Balances)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Manipulate a vault, ensuring it is collateralized afterwards.\nTo be used by debt management contracts.")),(0,n.kt)("h3",{id:"slurp"},"slurp"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function slurp(bytes12 vaultId, uint128 ink, uint128 art) external returns (struct DataTypes.Balances)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Reduce debt and collateral from a vault, ignoring collateralization checks.\nTo be used by liquidation engines.")),(0,n.kt)("h3",{id:"roll"},"roll"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function roll(bytes12 vaultId, bytes6 newSeriesId, int128 art) external returns (struct DataTypes.Vault, struct DataTypes.Balances)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Change series and debt of a vault.\nThe module calling this function also needs to buy underlying in the pool for the new series, and sell it in pool for the old series.")),(0,n.kt)("h3",{id:"level"},"level"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function level(bytes12 vaultId) external returns (int256)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Return the collateralization level of a vault. It will be negative if undercollateralized.")),(0,n.kt)("h3",{id:"mature"},"mature"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function mature(bytes6 seriesId) external\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Record the borrowing rate at maturity for a series")),(0,n.kt)("h3",{id:"_mature"},"_mature"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function _mature(bytes6 seriesId, struct DataTypes.Series series_) internal\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Record the borrowing rate at maturity for a series")),(0,n.kt)("h3",{id:"accrual"},"accrual"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function accrual(bytes6 seriesId) external returns (uint256)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Retrieve the rate accrual since maturity, maturing if necessary.")),(0,n.kt)("h3",{id:"_accrual"},"_accrual"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function _accrual(bytes6 seriesId, struct DataTypes.Series series_) private returns (uint256 accrual_)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Retrieve the rate accrual since maturity, maturing if necessary.\nNote: Call only after checking we are past maturity")),(0,n.kt)("h3",{id:"_level"},"_level"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function _level(struct DataTypes.Vault vault_, struct DataTypes.Balances balances_, struct DataTypes.Series series_) internal returns (int256)\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Return the collateralization level of a vault. It will be negative if undercollateralized.")))}k.isMDXComponent=!0}}]);