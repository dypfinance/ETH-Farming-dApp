window.IS_CONNECTED = false
window.WALLET_TYPE = ''
window.the_graph_result = {}
// MAKE SURE THIS ADDRESS IS LOWERCASE
const TOKEN_ADDRESS = "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"

// MAKE SURE ALL THESE ADDRESSES ARE LOWERCASE
const TOKENS_DISBURSED_PER_YEAR = [
	360_000,
	540_000,
	900_000,
	1_200_000,

	360_000,
	540_000,
	900_000,
	1_200_000,

	360_000,
	540_000,
	900_000,
	1_200_000,

	360_000,
	540_000,
	900_000,
	1_200_000,
]

window.rebase_factors = [
	1e0,
	1e0,
	1e0,
	1e0,
	1e4,
	1e4,
	1e4,
	1e4,
	1e4,
	1e4,
	1e4,
	1e4,
	1e4,
	1e4,
	1e4,
	1e4,
]

const LP_IDs =
	{
		"eth": [
			"0xba7872534a6c9097d805d8bee97e030f4e372e54-0xa7d6f5fa9b0be0e98b3b40e6ac884e53f2f9460e",
			"0xba7872534a6c9097d805d8bee97e030f4e372e54-0x0b0a544ae6131801522e3ac1fbac6d311094c94c",
			"0xba7872534a6c9097d805d8bee97e030f4e372e54-0x16caad63bdfc3ec4a2850336b28efe17e802b896",
			"0xba7872534a6c9097d805d8bee97e030f4e372e54-0x512ff8739d39e55d75d80046921e7de20c3e9bff",
		],
		"wbtc": [
			"0x44b77e9ce8a20160290fcbaa44196744f354c1b7-0xef71de5cb40f7985feb92aa49d8e3e84063af3bb",
			"0x44b77e9ce8a20160290fcbaa44196744f354c1b7-0x8b0e324eede360cab670a6ad12940736d74f701e",
			"0x44b77e9ce8a20160290fcbaa44196744f354c1b7-0x78e2da2eda6df49bae46e3b51528baf5c106e654",
			"0x44b77e9ce8a20160290fcbaa44196744f354c1b7-0x350f3fe979bfad4766298713c83b387c2d2d7a7a",
		],
		"usdt": [
			"0x76911e11fddb742d75b83c9e1f611f48f19234e4-0x4a76fc15d3fbf3855127ec5da8aaf02de7ca06b3",
			"0x76911e11fddb742d75b83c9e1f611f48f19234e4-0xf4abc60a08b546fa879508f4261eb4400b55099d",
			"0x76911e11fddb742d75b83c9e1f611f48f19234e4-0x13f421aa823f7d90730812a33f8cac8656e47dfa",
			"0x76911e11fddb742d75b83c9e1f611f48f19234e4-0x86690bbe7a9683a8bad4812c2e816fd17bc9715c",
		],
		"usdc": [
			"0xabd9c284116b2e757e3d4f6e36c5050aead24e0c-0x2b5d7a865a3888836d15d69dccbad682663dcdbb",
			"0xabd9c284116b2e757e3d4f6e36c5050aead24e0c-0xa52250f98293c17c894d58cf4f78c925dc8955d0",
			"0xabd9c284116b2e757e3d4f6e36c5050aead24e0c-0x924becc8f4059987e4bc4b741b7c354ff52c25e4",
			"0xabd9c284116b2e757e3d4f6e36c5050aead24e0c-0xbe528593781988974d83c2655cba4c45fc75c033",
		]
}

window.LP_IDs = LP_IDs

const LP_ID_LIST = Object.keys(LP_IDs).map(key => LP_IDs[key]).flat()
const TOKENS_DISBURSED_PER_YEAR_BY_LP_ID = {}
LP_ID_LIST.forEach((lp_id, i) => TOKENS_DISBURSED_PER_YEAR_BY_LP_ID[lp_id] = TOKENS_DISBURSED_PER_YEAR[i])
const VAULT_ADDRESSES_LIST = LP_ID_LIST.map(id => id.split('-')[1])

window.LP_ID_LIST = LP_ID_LIST


const LP_IDs_V2 =
	{
		"weth": [
			"0x7463286a379f6f128058bb92b355e3d6e8bdb219-0xa68bbe793ad52d0e62bbf34a67f02235ba69e737",
			"0x7463286a379f6f128058bb92b355e3d6e8bdb219-0xcfd970494a0b3c52a81dce1ecbff2245e6b0b0e7",
			"0x7463286a379f6f128058bb92b355e3d6e8bdb219-0x49d02cf81cc352517350f25e200365360426af94",
			"0x7463286a379f6f128058bb92b355e3d6e8bdb219-0xf51965c570419f2576ec9aead6a3c5f674424a99",
			"0x7463286a379f6f128058bb92b355e3d6e8bdb219-0x997a7254e5567d0a70329defcc1e4d29d71ba224",
		]
	}

window.LP_IDs_V2 = LP_IDs_V2

const LP_ID_LIST_V2 = Object.keys(LP_IDs_V2).map(key => LP_IDs_V2[key]).flat()

window.LP_ID_LIST_V2 = LP_ID_LIST_V2

window.config = {
	max_referral_addresses_per_call: 4,
	ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
	admin_address: '0x910090Ea889B64B4e722ea4b8fF6D5e734dFb38F',
	governance_address: '0x1766d076ae227443B98AA836Bd43895ADd6B0AB4',

	vote_duration_in_seconds: 5 * 60, // 5 minutes for test
	execution_allowance_in_seconds: 5 * 60, // 5 minutes for test

	MIN_BALANCE_TO_INIT_PROPOSAL: 100e18,
	QUORUM: 1000e18,

	//DYP-ETH 3 days
	token_address: '0xBa7872534a6C9097d805d8BEE97e030f4e372e54',
	staking_address: '0xa7d6F5fa9b0be0e98b3b40E6aC884e53F2F9460e',

	//DYP-ETH 30 days
	token_dyp30_address: '0xBa7872534a6C9097d805d8BEE97e030f4e372e54',
	staking_dyp30_address: '0x0b0A544AE6131801522E3aC1FBAc6D311094c94c',

	//DYP-ETH 60 days
	token_dyp60_address: '0xBa7872534a6C9097d805d8BEE97e030f4e372e54',
	staking_dyp60_address: '0x16cAaD63BDFC3Ec4A2850336B28efE17e802b896',

	//DYP-ETH 60 days
	token_dyp90_address: '0xBa7872534a6C9097d805d8BEE97e030f4e372e54',
	staking_dyp90_address: '0x512FF8739d39e55d75d80046921E7dE20c3e9BFf',

	//DYP-WBTC 3 days
	token_wbtc3_address: '0x44B77e9cE8A20160290FcBAA44196744F354C1b7',
	staking_wbtc3_address: '0xeF71DE5Cb40f7985FEb92AA49D8e3E84063Af3BB',

	//DYP-WBTC 30 days
	token_wbtc30_address: '0x44B77e9cE8A20160290FcBAA44196744F354C1b7',
	staking_wbtc30_address: '0x8B0e324EEdE360CaB670a6AD12940736d74f701e',

	//DYP-WBTC 60 days
	token_wbtc60_address: '0x44B77e9cE8A20160290FcBAA44196744F354C1b7',
	staking_wbtc60_address: '0x78e2dA2eda6dF49BaE46E3B51528BAF5c106e654',

	//DYP-WBTC 90 days
	token_wbtc90_address: '0x44B77e9cE8A20160290FcBAA44196744F354C1b7',
	staking_wbtc90_address: '0x350F3fE979bfad4766298713c83b387C2D2D7a7a',

	//DYP-USDC 3 days
	token_usdc3_address: '0xabD9C284116B2e757E3D4f6E36C5050AEaD24e0c',
	staking_usdc3_address: '0x2b5D7a865A3888836d15d69dCCBad682663DCDbb',

	//DYP-USDC 30 days
	token_usdc30_address: '0xabD9C284116B2e757E3D4f6E36C5050AEaD24e0c',
	staking_usdc30_address: '0xa52250f98293c17C894d58cf4f78c925dC8955d0',

	//DYP-USDC 60 days
	token_usdc60_address: '0xabD9C284116B2e757E3D4f6E36C5050AEaD24e0c',
	staking_usdc60_address: '0x924BECC8F4059987E4bc4B741B7C354FF52c25e4',

	//DYP-USDC 90 days
	token_usdc90_address: '0xabD9C284116B2e757E3D4f6E36C5050AEaD24e0c',
	staking_usdc90_address: '0xbE528593781988974D83C2655CBA4c45FC75c033',

	//DYP-USDT 3 days
	token_usdt3_address: '0x76911E11FddB742D75b83C9e1F611F48f19234E4',
	staking_usdt3_address: '0x4a76Fc15D3fbf3855127eC5DA8AAf02DE7ca06b3',

	//DYP-USDT 30 days
	token_usdt30_address: '0x76911E11FddB742D75b83C9e1F611F48f19234E4',
	staking_usdt30_address: '0xF4abc60a08B546fA879508F4261eb4400B55099D',

	//DYP-USDT 60 days
	token_usdt60_address: '0x76911E11FddB742D75b83C9e1F611F48f19234E4',
	staking_usdt60_address: '0x13F421Aa823f7D90730812a33F8Cac8656E47dfa',

	//DYP-USDT 90 days
	token_usdt90_address: '0x76911E11FddB742D75b83C9e1F611F48f19234E4',
	staking_usdt90_address: '0x86690BbE7a9683A8bAd4812C2e816fd17bC9715C',

	token_dai_address: '0xa964d4ff6C14822Fc64CE4eC5Dc707D869DaC0bA',
	staking_dai_address: '0x850942B57DD500b73bBdB9F713789Ca72D10D235',

	reward_token_address: '0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17', //REWARD TOKEN
	weth_address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
	etherscan_baseURL: 'https://etherscan.io',
	max_proposals_per_call: 4,
	// default_gasprice_gwei: 60,
	default_gas_amount: 1200000,
	token_decimals: 18,
	lp_amplify_factor: 1e0,

	constant_stakingold_30_address: '0x7Fc2174670d672AD7f666aF0704C2D961EF32c73',
	constant_stakingold_60_address: '0x036e336eA3ac2E255124CF775C4FDab94b2C42e4',
	constant_stakingold_90_address: '0x0A32749D95217b7Ee50127E24711c97849b70C6a',
	constant_stakingold_120_address: '0x82df1450eFD6b504EE069F5e4548F2D5Cb229880',

	// Constant staking iDYP
	constant_stakingold_130_address: '0x9ea966b4023049bff858bb5e698ecff24ea54c4a',
	constant_stakingold_140_address: '0x3fab09acaeddaf579d7a72c24ef3e9eb1d2975c4',

	/*buyback*/
	buyback_staking_address: '0xe5262f38bf13410a79149cb40429f8dc5e830542',
	slippage_tolerance_percent: 1, // 3% slippage tolerance
	tx_max_wait_seconds: 20 * 60, // 20 mins - deposit and withdraw tx will fail (swap will fail) after this duration of being pending
	uniswap_router_address: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d',

	//constant staking New
	constant_stakingnew_new1_address: '0xa4da28B8e42680916b557459D338aF6e2D8d458f',
	constant_stakingnew_new2_address: '0x8A30Be7B2780b503ff27dBeaCdecC4Fe2587Af5d',

	//Buyback new
	buyback_staking1_1_address: '0xdCBB5B2148f0cf1Abd7757Ba04A5821fEaD80587',
	buyback_staking1_2_address: '0xDC65C4277d626d6A29C9Dc42Eb396d354fa5E85b',
	constant_stakingnew_new3_address: '0x471beCc72AD487249efE521bf9b6744b882830DF',
	constant_stakingnew_new4_address: '0x7b7132E7BF4e754855191a978F3979e1E3c8617b',

	//Farming new
	token_new_address: '0x7463286a379f6f128058bb92b355e3d6e8bdb219',
	farming_new_1_address: '0xa68BBe793ad52d0E62bBf34A67F02235bA69E737',
	constant_stakingnew_new5_address: '0x0b92E7f074e7Ade0181A29647ea8474522e6A7C2',

	//Farming New
	farming_new_2_address: '0xCFd970494a0b3C52a81dcE1EcBFF2245e6b0B0E7',
	constant_stakingnew_new6_address: '0xff32a38016422F51e8C0aF5D333472392822FeEf',


	//Farming New
	farming_new_3_address: '0x49D02CF81Cc352517350F25E200365360426aF94',
	constant_stakingnew_new7_address: '0x62AAE8C0c50038236d075AC595Ae0BE4F201bBdd',

	//Farming New
	farming_new_4_address: '0xf51965c570419F2576ec9AeAD6A3C5F674424A99',
	constant_stakingnew_new8_address: '0xb67F464b558e3055C2B6F017546Ed53b2e6333d7',

	//Farming New
	farming_new_5_address: '0x997A7254E5567d0A70329DEFCc1E4d29d71Ba224',
	constant_stakingnew_new9_address: '0x1aB008CbfC99d0CA7e3FD8987ce1ebf832506F53',

	reward_token_idyp_address: '0xbd100d061e120b2c67a24453cf6368e63f1be056',
	USDC_address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',

	claim_as_eth_address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
	claim_as_usdt_address: '0xdac17f958d2ee523a2206206994597c13d831ec7',

	constant_staking_200_address: '0x45152e167cc2ebd4011138f646dc80eec9c8582e',
	constant_staking_300_address: '0x45152e167cc2ebd4011138f646dc80eec9c8582e',

	reward_token_dyps_address: '0xd4f11Bf85D751F426EF59b705E42b3da3357250f'
}

// add buyback supported deposit tokens here, lowercase
// THESE TOKENS MUST HAVE BEEN ALREADY ADDED TO SMART CONTRACT!
window.buyback_tokens = {
	'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
		symbol: 'WETH', decimals: 18
	},
	'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': {
		symbol: 'WBTC', decimals: 8
	},
	'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
		symbol: 'USDC', decimals: 6
	},
	'0xdac17f958d2ee523a2206206994597c13d831ec7': {
		symbol: 'USDT', decimals: 6
	}
	// '0x6b175474e89094c44da98b954eedeac495271d0f': {
	// 	symbol: 'DAI', decimals: 18
	// },
	// '0x514910771af9ca656af840dff83e8264ecf986ca': {
	// 	symbol: 'LINK', decimals: 18
	// }
}

window.buyback_tokens_farming = {
	'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
		symbol: 'WETH', decimals: 18
	},
	'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': {
		symbol: 'WBTC', decimals: 8
	},
	'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
		symbol: 'USDC', decimals: 6
	},
	'0xdac17f958d2ee523a2206206994597c13d831ec7': {
		symbol: 'USDT', decimals: 6
	},
	// '0x6b175474e89094c44da98b954eedeac495271d0f': {
	// 	symbol: 'DAI', decimals: 18
	// },
	// '0x514910771af9ca656af840dff83e8264ecf986ca': {
	// 	symbol: 'LINK', decimals: 18
	// },
	// '0xbd100d061e120b2c67a24453cf6368e63f1be056': {
	// 	symbol: 'iDYP', decimals: 18
	// }
}

window.vaults = [
	{
		hidden: true,
		contract_address: '0x10f612d6D8521f9d4c888c007Ed72Bf5E8DB2105',
		short_name: 'DYP/DAI Pool',
		logo: '/images/uni-v2.webp',
		name: 'DYP/DAI LP Vault\n72 Hours Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '3000 DYP / month',
		link: '/staking-dai'
	},
	{
		hidden: true,
		contract_address: '0x23f2552f9D0dd03EAa026b18b1d854546a03a05f',
		short_name: 'DYP/ETH Pool',
		logo: '/images/uni-v2.webp',
		name: 'DYP/ETH LP Vault\n72 Hours Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '3000 DYP / month',
		link: '/staking-eth'
	},
	{
	hidden: false,
	contract_address: window.config.staking_address,
	short_name: 'DYP/ETH Pool',
    logo: '/images/ETH.png',
	logo1: '/images/ETH_2.png',
    name: 'DYP/ETH\n72 Hours Locking',
    description: 'Deposit LP and earn WETH',
    return_heading: 'Pool Rewards',
    return_description: '250,000 DYP / month',
    link: '/staking-eth'
}, {
	hidden: false,
	contract_address: window.config.staking_dai_address,
	short_name: 'DYP/WBTC Pool',
    logo: '/images/WBTC.png',
	logo1: '/images/ETH_2.png',
    name: 'DYP/WBTC\n72 Hours Locking',
    description: 'Deposit LP and earn WETH',
    return_heading: 'Pool Rewards',
    return_description: '250,000 DYP / month',
    link: '/staking-wbtc'
}, {
		hidden: false,
		contract_address: window.config.staking_dai_address,
		short_name: 'DYP/USDC Pool',
		logo: '/images/USDC.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/USDC\n72 Hours Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '250,000 DYP / month',
		link: '/staking-usdc'
}, {
		hidden: false,
		contract_address: window.config.staking_dai_address,
		short_name: 'DYP/USDT Pool',
		logo: '/images/USDT.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/USDT\n72 Hours Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '250,000 DYP / month',
		link: '/staking-usdt'
}
]

window.vaultsFarming = [
	{
		hidden: false,
		contract_address: window.config.staking_address,
		short_name: 'DYP Staking Pool',
		logo: '/logo192.png',
		logo1: '/images/DYP.png',
		name: 'DYP Staking Pool\n30 Days Locking',
		description: 'Deposit DYP and earn DYP',
		return_heading: 'APR',
		return_description: '20%-35%',
		link: '/constant-staking'
	},
	{
		hidden: false,
		contract_address: window.config.staking_address,
		short_name: 'DYP BuyBack',
		logo: '/logo192.png',
		logo1: '/images/DYP.png',
		name: 'DYP BuyBack\n60 Days Locking',
		description: 'Deposit DYP and earn DYP',
		return_heading: 'APR',
		return_description: '100%',
		link: '/staking-buyback'
	}
]

window.vaultsEth = [
	{
		hidden: false,
		contract_address: window.config.staking_address,
		short_name: 'DYP/ETH Pool',
		logo: '/images/ETH.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/ETH\n3 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '30,000 DYP / month',
		link: '/staking-eth-3'
	},
	{
		hidden: false,
		contract_address: window.config.staking_dyp30_address,
		short_name: 'DYP/ETH Pool',
		logo: '/images/ETH.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/ETH\n30 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '45,000 DYP / month',
		link: '/staking-eth-30'
	},
	{
		hidden: false,
		contract_address: window.config.staking_dyp60_address,
		short_name: 'DYP/ETH Pool',
		logo: '/images/ETH.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/ETH\n60 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '75,000 DYP / month',
		link: '/staking-eth-60'
	},
	{
		hidden: false,
		contract_address: window.config.staking_dyp90_address,
		short_name: 'DYP/ETH Pool',
		logo: '/images/ETH.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/ETH\n90 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '100,000 DYP / month',
		link: '/staking-eth-90'
	}
]

window.vaultsWbtc = [
	{
		hidden: false,
		contract_address: window.config.staking_wbtc3_address,
		short_name: 'DYP/WBTC Pool',
		logo: '/images/WBTC.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/WBTC\n3 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '30,000 DYP / month',
		link: '/staking-wbtc-3'
	},
	{
		hidden: false,
		contract_address: window.config.staking_wbtc30_address,
		short_name: 'DYP/WBTC Pool',
		logo: '/images/WBTC.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/WBTC\n30 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '45,000 DYP / month',
		link: '/staking-wbtc-30'
	},
	{
		hidden: false,
		contract_address: window.config.staking_wbtc60_address,
		short_name: 'DYP/WBTC Pool',
		logo: '/images/WBTC.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/WBTC\n60 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '75,000 DYP / month',
		link: '/staking-wbtc-60'
	},
	{
		hidden: false,
		contract_address: window.config.staking_wbtc90_address,
		short_name: 'DYP/WBTC Pool',
		logo: '/images/WBTC.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/WBTC\n90 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '100,000 DYP / month',
		link: '/staking-wbtc-90'
	}
]

window.vaultsUsdc = [
	{
		hidden: false,
		contract_address: window.config.staking_usdc3_address,
		short_name: 'DYP/USDC Pool',
		logo: '/images/USDC.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/USDC\n3 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '30,000 DYP / month',
		link: '/staking-usdc-3'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdc30_address,
		short_name: 'DYP/USDC Pool',
		logo: '/images/USDC.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/USDC\n30 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '45,000 DYP / month',
		link: '/staking-usdc-30'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdc60_address,
		short_name: 'DYP/USDC Pool',
		logo: '/images/USDC.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/USDC\n60 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '75,000 DYP / month',
		link: '/staking-usdc-60'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdc90_address,
		short_name: 'DYP/USDC Pool',
		logo: '/images/USDC.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/USDC\n90 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '100,000 DYP / month',
		link: '/staking-usdc-90'
	}
]

window.vaultsUsdt = [
	{
		hidden: false,
		contract_address: window.config.staking_usdt3_address,
		short_name: 'DYP/USDT Pool',
		logo: '/images/USDT.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/USDT\n3 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '30,000 DYP / month',
		link: '/staking-usdt-3'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdt30_address,
		short_name: 'DYP/USDT Pool',
		logo: '/images/USDT.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/USDT\n30 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '45,000 DYP / month',
		link: '/staking-usdt-30'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdt60_address,
		short_name: 'DYP/USDT Pool',
		logo: '/images/USDT.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/USDT\n60 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '75,000 DYP / month',
		link: '/staking-usdt-60'
	},
	{
		hidden: false,
		contract_address: window.config.staking_usdt90_address,
		short_name: 'DYP/USDT Pool',
		logo: '/images/USDT.png',
		logo1: '/images/ETH_2.png',
		name: 'DYP/USDT\n90 Days Locking',
		description: 'Deposit LP and earn WETH',
		return_heading: 'Pool Rewards',
		return_description: '100,000 DYP / month',
		link: '/staking-usdt-90'
	}
]

window.constantStakingList = [
	{
		hidden: false,
		contract_address: window.config.constant_stakingold_30_address,
		short_name: 'DYP Staking',
		logo: '/logo192.png',
		name: 'DYP Staking\n30 Days Locking',
		description: 'Deposit DYP to earn more DYP',
		return_heading: 'APR',
		return_description: '20%',
		link: '/constant-staking-30'
	},
	{
		hidden: false,
		contract_address: window.config.constant_stakingold_60_address,
		short_name: 'DYP Staking',
		logo: '/logo192.png',
		name: 'DYP Staking\n60 Days Locking',
		description: 'Deposit DYP to earn more DYP',
		return_heading: 'APR',
		return_description: '25%',
		link: '/constant-staking-60'
	},
	{
		hidden: false,
		contract_address: window.config.constant_stakingold_90_address,
		short_name: 'DYP Staking',
		logo: '/logo192.png',
		name: 'DYP Staking\n90 Days Locking',
		description: 'Deposit DYP to earn more DYP',
		return_heading: 'APR',
		return_description: '30%',
		link: '/constant-staking-90'
	},
	{
		hidden: false,
		contract_address: window.config.constant_stakingold_120_address,
		short_name: 'DYP Staking',
		logo: '/logo192.png',
		name: 'DYP Farming\n120 Days Locking',
		description: 'Deposit DYP to earn more DYP',
		return_heading: 'APR',
		return_description: '35%',
		link: '/constant-staking-120'
	}
]

window.GOVERNANCE_ABI = [
	{
		"inputs": [],
		"name": "MIN_BALANCE_TO_INIT_PROPOSAL",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "QUORUM",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "RESULT_EXECUTION_ALLOWANCE_PERIOD",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TRUSTED_TOKEN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "VOTE_DURATION",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "actions",
		"outputs": [
			{
				"internalType": "enum Governance.Action",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"internalType": "enum Governance.Option",
				"name": "option",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addVotes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			}
		],
		"name": "executeProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			}
		],
		"name": "getProposal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_proposalId",
				"type": "uint256"
			},
			{
				"internalType": "enum Governance.Action",
				"name": "_proposalAction",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_optionOneVotes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_optionTwoVotes",
				"type": "uint256"
			},
			{
				"internalType": "contract StakingPool",
				"name": "_stakingPool",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_newGovernance",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_proposalStartTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isProposalExecuted",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "isProposalExecuted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			}
		],
		"name": "isProposalExecutible",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			}
		],
		"name": "isProposalOpen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastVotedProposalStartTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "newGovernances",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "optionOneVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "optionTwoVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposalStartTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract StakingPool",
				"name": "pool",
				"type": "address"
			}
		],
		"name": "proposeDisburseOrBurn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract StakingPool",
				"name": "pool",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "newGovernance",
				"type": "address"
			}
		],
		"name": "proposeUpgradeGovernance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "removeVotes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakingPools",
		"outputs": [
			{
				"internalType": "contract StakingPool",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalDepositedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "votedForOption",
		"outputs": [
			{
				"internalType": "enum Governance.Option",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "votesForProposalByAddress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAllTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

window.STAKING_ABI = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "swapPath",
				"type": "address[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "EthRewardsDisbursed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "EthRewardsTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardsDisbursed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardsTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "BURN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAGIC_NUMBER",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SLIPPAGE_TOLERANCE_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "SWAP_PATH",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addContractBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "adminCanClaimAfter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "adminClaimableTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnOrDisburseTokensPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "burnRewardTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cliffTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractDeployTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountToDeposit",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "depositTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "depositedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disburseAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disburseDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disbursePercentX100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disburseRewardTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountToWithdraw",
				"type": "uint256"
			}
		],
		"name": "emergencyWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "startIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex",
				"type": "uint256"
			}
		],
		"name": "getDepositorsList",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "stakers",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "stakingTimestamps",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "lastClaimedTimeStamps",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "stakedTokens",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMaxSwappableAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfHolders",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPendingDisbursement",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			}
		],
		"name": "getPendingDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			}
		],
		"name": "getPendingDivsEth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastBurnOrTokenDistributeTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastClaimedTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastDisburseTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastDivPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastEthDivPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastSwapExecutionTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapAttemptPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokensToBeDisbursedOrBurnt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokensToBeSwapped",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimedRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimedRewardsEth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalDivPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalEarnedEth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalEarnedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalEthDivPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferAnyERC20Token",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferAnyOldERC20Token",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "trustedDepositTokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "trustedRewardTokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapRouterV2",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Pair",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Pair",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountToWithdraw",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

window.BUYBACK_STAKING_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "DepositTokenAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "DepositTokenRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardsTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Stake",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Unstake",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "ADMIN_CAN_CLAIM_AFTER",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "LOCKUP_TIME",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD_INTERVAL",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD_RATE_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TRUSTED_TOKEN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "addTrustedDepositToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "claimAnyToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractStartTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "depositedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountToWithdraw",
				"type": "uint256"
			}
		],
		"name": "emergencyUnstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfHolders",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			}
		],
		"name": "getPendingDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "startIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex",
				"type": "uint256"
			}
		],
		"name": "getStakersList",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "stakers",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "stakingTimestamps",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "lastClaimedTimeStamps",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "stakedTokens",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			}
		],
		"name": "getTotalPendingDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastClaimedTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "removeTrustedDepositToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "rewardsPendingClaim",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountToDeposit",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "depositToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_deadline",
				"type": "uint256"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakingTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimedRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalEarnedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "trustedDepositTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountToWithdraw",
				"type": "uint256"
			}
		],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

// window.CONSTANT_STAKING_ABI = [
// 	{
// 		"inputs": [],
// 		"name": "claim",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "amountToWithdraw",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "emergencyUnstake",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "previousOwner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnershipTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "referrer",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ReferralFeeTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "reInvest",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "holder",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Reinvest",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "holder",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "RewardsTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "amountToStake",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "referrer",
// 				"type": "address"
// 			}
// 		],
// 		"name": "stake",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "tokenAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "recipient",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transferAnyERC20Token",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "tokenAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "recipient",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transferAnyLegacyERC20Token",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "transferOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "amountToWithdraw",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "unstake",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "ADMIN_CAN_CLAIM_AFTER",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "contractStartTime",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "depositedTokens",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "i",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getActiveReferredStaker",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_staker",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_totalEarned",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getNumberOfHolders",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "referrer",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getNumberOfReferredStakers",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_activeStakers",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_totalStakers",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_holder",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getPendingDivs",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "i",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getReferredStaker",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_staker",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_totalEarned",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "startIndex",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "endIndex",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getStakersList",
// 		"outputs": [
// 			{
// 				"internalType": "address[]",
// 				"name": "stakers",
// 				"type": "address[]"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "stakingTimestamps",
// 				"type": "uint256[]"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "lastClaimedTimeStamps",
// 				"type": "uint256[]"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "stakedTokens",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_holder",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getTotalPendingDivs",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "lastClaimedTime",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "LOCKUP_TIME",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "REFERRAL_FEE_RATE_X_100",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "referrals",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "REWARD_INTERVAL",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "REWARD_RATE_X_100",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "rewardsPendingClaim",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "STAKING_FEE_RATE_X_100",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "stakingTime",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalClaimedReferralFee",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalClaimedRewards",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "totalEarnedTokens",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "totalReferralFeeEarned",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "TRUSTED_TOKEN_ADDRESS",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "UNSTAKING_FEE_RATE_X_100",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]

window.TOKEN_ABI = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_extraData",
				"type": "bytes"
			}
		],
		"name": "approveAndCall",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseApproval",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseApproval",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initialSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferAnyERC20Token",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

/* New ABI's for the V2 smart contracts */
window.CONSTANT_STAKINGNEW_ABI = [{"inputs":[{"internalType":"address","name":"_uniswapV2RouterAddress","type":"address"},{"internalType":"address","name":"_feeRecipientAddress","type":"address"},{"internalType":"address","name":"trustedDepositTokenAddress","type":"address"},{"internalType":"address","name":"trustedRewardTokenAddress","type":"address"},{"internalType":"uint256","name":"referralFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"stakingFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"unstakingFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"rewardRateX100","type":"uint256"},{"internalType":"uint256","name":"rewardInterval","type":"uint256"},{"internalType":"uint256","name":"lockupTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"EmergencyDeclared","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"FeeRecipientAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_newLockupTime","type":"uint256"}],"name":"LockupTimeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"ReferralFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralFeeTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Reinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"StakingFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"}],"name":"TrustedDepositContractAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"}],"name":"TrustedDepositContractRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"router","type":"address"}],"name":"UniswapV2RouterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Unstake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"UnstakingFeeChanged","type":"event"},{"inputs":[],"name":"EMERGENCY_WAIT_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCKUP_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFERRAL_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_DEPOSIT_TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_REWARD_TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNSTAKING_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addTrustedDepositContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"adminCanClaimAfter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminClaimableTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountOutMin_referralFee","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_claim","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimAnyToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"declareEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_stakingReferralFee","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"depositByContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRecipientAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getActiveReferredStaker","outputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"uint256","name":"_totalEarned","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"getNumberOfReferredStakers","outputs":[{"internalType":"uint256","name":"_activeStakers","type":"uint256"},{"internalType":"uint256","name":"_totalStakers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getReferredStaker","outputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"uint256","name":"_totalEarned","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getStakersList","outputs":[{"internalType":"address[]","name":"stakers","type":"address[]"},{"internalType":"uint256[]","name":"stakingTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"lastClaimedTimeStamps","type":"uint256[]"},{"internalType":"uint256[]","name":"stakedTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getTotalPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isEmergency","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTrustedDepositContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountOutMin_referralFee","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_reinvest","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"reInvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeTrustedDepositContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardsPendingClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockupTime","type":"uint256"},{"internalType":"uint256","name":"referralFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"stakingFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"unstakingFeeRateX100","type":"uint256"},{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"_feeRecipientAddress","type":"address"}],"name":"setContractVariables","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeRecipientAddress","type":"address"}],"name":"setFeeRecipientAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newLockupTime","type":"uint256"}],"name":"setLockupTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newReferralFeeRateX100","type":"uint256"}],"name":"setReferralFeeRateX100","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStakingFeeRateX100","type":"uint256"}],"name":"setStakingFeeRateX100","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IUniswapV2Router","name":"_newUniswapV2Router","type":"address"}],"name":"setUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newUnstakingFeeRateX100","type":"uint256"}],"name":"setUnstakingFeeRateX100","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToStake","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"_amountOutMin_referralFee","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedReferralFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalEarnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalReferralFeeEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_referralFee","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"}]

window.BUYBACK_STAKING1_1_ABI = [{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"trustedPlatformTokenAddress","type":"address"},{"internalType":"address","name":"trustedDepositTokenAddress","type":"address"},{"internalType":"address","name":"_feeRecipientAddress","type":"address"},{"internalType":"uint256","name":"stakingFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"unstakingFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"lockupTime","type":"uint256"},{"internalType":"uint256","name":"adminCanClaimAfter","type":"uint256"},{"internalType":"uint256","name":"rewardRateX100","type":"uint256"},{"internalType":"uint256","name":"rewardInterval","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"DepositTokenAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"DepositTokenRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"EmergencyDeclared","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"FeeRecipientAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"lockupTime","type":"uint256"}],"name":"LockupTimeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Reinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"}],"name":"StakingContractChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"StakingFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"router","type":"address"}],"name":"UniswapV2RouterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Unstake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"UnstakingFeeChanged","type":"event"},{"inputs":[],"name":"EMERGENCY_WAIT_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCKUP_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_DEPOSIT_TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_PLATFORM_TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_STAKING_CONTRACT_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNSTAKING_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"addTrustedDepositToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"adminClaimableTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountOutMin","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimAnyToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"declareEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRecipientAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getStakersList","outputs":[{"internalType":"address[]","name":"stakers","type":"address[]"},{"internalType":"uint256[]","name":"stakingTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"lastClaimedTimeStamps","type":"uint256[]"},{"internalType":"uint256[]","name":"stakedTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getTotalPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isEmergency","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reInvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"removeTrustedDepositToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardsPendingClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockupTime","type":"uint256"},{"internalType":"uint256","name":"stakingFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"unstakingFeeRateX100","type":"uint256"},{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"newFeeRecipientAddress","type":"address"}],"name":"setContractVariables","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeRecipientAddress","type":"address"}],"name":"setFeeRecipientAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockupTime","type":"uint256"}],"name":"setLockupTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"trustedStakingContractAddress","type":"address"}],"name":"setStakingContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newStakingFeeRateX100","type":"uint256"}],"name":"setStakingFeeRateX100","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IUniswapV2Router","name":"router","type":"address"}],"name":"setUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newUnstakingFeeRateX100","type":"uint256"}],"name":"setUnstakingFeeRateX100","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToDeposit","type":"uint256"},{"internalType":"address","name":"depositToken","type":"address"},{"internalType":"uint256","name":"_amountOutMin_75Percent","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_25Percent","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_stakingReferralFee","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDepositedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalEarnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedDepositTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"}]

window.BUYBACK_STAKING1_2_ABI = [{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"trustedPlatformTokenAddress","type":"address"},{"internalType":"address","name":"trustedDepositTokenAddress","type":"address"},{"internalType":"address","name":"_feeRecipientAddress","type":"address"},{"internalType":"uint256","name":"stakingFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"unstakingFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"lockupTime","type":"uint256"},{"internalType":"uint256","name":"adminCanClaimAfter","type":"uint256"},{"internalType":"uint256","name":"rewardRateX100","type":"uint256"},{"internalType":"uint256","name":"rewardInterval","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"DepositTokenAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"DepositTokenRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"EmergencyDeclared","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"FeeRecipientAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"lockupTime","type":"uint256"}],"name":"LockupTimeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Reinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"}],"name":"StakingContractChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"StakingFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"router","type":"address"}],"name":"UniswapV2RouterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Unstake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"UnstakingFeeChanged","type":"event"},{"inputs":[],"name":"EMERGENCY_WAIT_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCKUP_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_DEPOSIT_TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_PLATFORM_TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_STAKING_CONTRACT_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNSTAKING_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"addTrustedDepositToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"adminClaimableTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountOutMin","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimAnyToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"declareEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRecipientAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getStakersList","outputs":[{"internalType":"address[]","name":"stakers","type":"address[]"},{"internalType":"uint256[]","name":"stakingTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"lastClaimedTimeStamps","type":"uint256[]"},{"internalType":"uint256[]","name":"stakedTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getTotalPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isEmergency","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reInvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"removeTrustedDepositToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardsPendingClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockupTime","type":"uint256"},{"internalType":"uint256","name":"stakingFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"unstakingFeeRateX100","type":"uint256"},{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"newFeeRecipientAddress","type":"address"}],"name":"setContractVariables","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeRecipientAddress","type":"address"}],"name":"setFeeRecipientAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockupTime","type":"uint256"}],"name":"setLockupTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"trustedStakingContractAddress","type":"address"}],"name":"setStakingContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newStakingFeeRateX100","type":"uint256"}],"name":"setStakingFeeRateX100","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IUniswapV2Router","name":"router","type":"address"}],"name":"setUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newUnstakingFeeRateX100","type":"uint256"}],"name":"setUnstakingFeeRateX100","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToDeposit","type":"uint256"},{"internalType":"address","name":"depositToken","type":"address"},{"internalType":"uint256","name":"_amountOutMin_75Percent","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_25Percent","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_stakingReferralFee","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDepositedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalEarnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedDepositTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"}]

window.FARMING_NEW_ABI = [{"inputs":[{"internalType":"address[]","name":"swapPath","type":"address[]"},{"internalType":"address","name":"_uniswapV2RouterAddress","type":"address"},{"internalType":"address","name":"_feeRecipientAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"ClaimableTokenAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"ClaimableTokenRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"EmergencyDeclared","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EthRewardsDisbursed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EthRewardsTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"FeeRecipientAddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"lockupTime","type":"uint256"}],"name":"LockupTimeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newMagicNumber","type":"uint256"}],"name":"MagicNumberChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsDisbursed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"StakingFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"router","type":"address"}],"name":"UniswapV2RouterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"UnstakingFeeChanged","type":"event"},{"inputs":[],"name":"BURN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMERGENCY_WAIT_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAGIC_NUMBER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"SWAP_PATH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNSTAKING_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addContractBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"trustedClaimableTokenAddress","type":"address"}],"name":"addTrustedClaimableToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"adminCanClaimAfter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminClaimableTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnOrDisburseTokensPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnRewardTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountOutMin_claimAsToken_dyp","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_attemptSwap","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimAnyToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"claimAsToken","type":"address"},{"internalType":"uint256","name":"_amountOutMin_claimAsToken_weth","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_claimAsToken_dyp","type":"uint256"},{"internalType":"uint256","name":"_amountOutMin_attemptSwap","type":"uint256"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"claimAs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cliffTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractDeployTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"declareEmergency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"depositToken","type":"address"},{"internalType":"uint256","name":"amountToStake","type":"uint256"},{"internalType":"uint256[]","name":"minAmounts","type":"uint256[]"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disburseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disburseDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disbursePercentX100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disburseRewardTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeRecipientAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getDepositorsList","outputs":[{"internalType":"address[]","name":"stakers","type":"address[]"},{"internalType":"uint256[]","name":"stakingTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"lastClaimedTimeStamps","type":"uint256[]"},{"internalType":"uint256[]","name":"stakedTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxSwappableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPendingDisbursement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getPendingDivsEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isEmergency","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBurnOrTokenDistributeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastDisburseTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastDivPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastEthDivPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastSwapExecutionTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"trustedClaimableTokenAddress","type":"address"}],"name":"removeTrustedClaimableToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMagicNumber","type":"uint256"},{"internalType":"uint256","name":"lockupTime","type":"uint256"},{"internalType":"uint256","name":"stakingFeeRateX100","type":"uint256"},{"internalType":"uint256","name":"unstakingFeeRateX100","type":"uint256"},{"internalType":"address","name":"_uniswapV2RouterAddress","type":"address"},{"internalType":"address","name":"newFeeRecipientAddress","type":"address"}],"name":"setContractVariables","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newFeeRecipientAddress","type":"address"}],"name":"setFeeRecipientAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newLockupTime","type":"uint256"}],"name":"setLockupTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMagicNumber","type":"uint256"}],"name":"setMagicNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newStakingFeeRateX100","type":"uint256"}],"name":"setStakingFeeRateX100","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IUniswapV2Router","name":"router","type":"address"}],"name":"setUniswapV2Router","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newUnstakingFeeRateX100","type":"uint256"}],"name":"setUnstakingFeeRateX100","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAttemptPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensToBeDisbursedOrBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensToBeSwapped","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedRewardsEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDivPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalEarnedEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalEarnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalEthDivPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"trustedBaseTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trustedClaimableTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedDepositTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedPlatformTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedRewardTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedStakingContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapRouterV2","outputs":[{"internalType":"contract IUniswapV2Router","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"withdrawAsToken","type":"address"},{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"},{"internalType":"uint256[]","name":"minAmounts","type":"uint256[]"},{"internalType":"uint256","name":"_deadline","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

window.CONSTANT_STAKING_OLD_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralFeeTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Reinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsTransferred","type":"event"},{"inputs":[],"name":"ADMIN_CAN_CLAIM_AFTER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LOCKUP_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFERRAL_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKING_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNSTAKING_FEE_RATE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"}],"name":"emergencyUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getActiveReferredStaker","outputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"uint256","name":"_totalEarned","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"getNumberOfReferredStakers","outputs":[{"internalType":"uint256","name":"_activeStakers","type":"uint256"},{"internalType":"uint256","name":"_totalStakers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getReferredStaker","outputs":[{"internalType":"address","name":"_staker","type":"address"},{"internalType":"uint256","name":"_totalEarned","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getStakersList","outputs":[{"internalType":"address[]","name":"stakers","type":"address[]"},{"internalType":"uint256[]","name":"stakingTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"lastClaimedTimeStamps","type":"uint256[]"},{"internalType":"uint256[]","name":"stakedTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getTotalPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reInvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardsPendingClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToStake","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedReferralFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalEarnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalReferralFeeEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferAnyLegacyERC20Token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"}]

window.CONSTANT_STAKING_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}],
		"name": "ReferralFeeTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}],
		"name": "Reinvest",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}],
		"name": "RewardsTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "ADMIN_CAN_CLAIM_AFTER",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "LOCKUP_TIME",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REFERRAL_FEE_RATE_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD_INTERVAL",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD_RATE_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "STAKING_FEE_RATE_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TRUSTED_TOKEN_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UNSTAKING_FEE_RATE_X_100",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractStartTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"name": "depositedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "i",
				"type": "uint256"
			}],
		"name": "getActiveReferredStaker",
		"outputs": [
			{
				"internalType": "address",
				"name": "_staker",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_totalEarned",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfHolders",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}],
		"name": "getNumberOfReferredStakers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_activeStakers",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_totalStakers",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			}],
		"name": "getPendingDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "i",
				"type": "uint256"
			}],
		"name": "getReferredStaker",
		"outputs": [
			{
				"internalType": "address",
				"name": "_staker",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_totalEarned",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "startIndex",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endIndex",
				"type": "uint256"
			}],
		"name": "getStakersList",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "stakers",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "stakingTimestamps",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "lastClaimedTimeStamps",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "stakedTokens",
				"type": "uint256[]"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			}],
		"name": "getTotalPendingDivs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"name": "lastClaimedTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reInvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"name": "referrals",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"name": "rewardsPendingClaim",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountToStake",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakeExternal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"name": "stakingTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimedReferralFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimedRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"name": "totalEarnedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"name": "totalReferralFeeEarned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}],
		"name": "transferAnyERC20Token",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}],
		"name": "transferAnyLegacyERC20Token",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "trustedStakingContractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
		"stateMutability": "view",
		"type": "function"
	}]

window.WETH_ABI = window.TOKEN_ABI
window.REWARD_TOKEN_ABI = window.TOKEN_ABI
window.cached_contracts = {}

// Object.keys(window.config).filter(k => (k.startsWith('token_') || k.startsWith('staking_') || k.startsWith('constant_staking_')) && k.endsWith('_address'))
// 	.forEach(k => {
// 		window[k.replace('_address', '_ABI').toUpperCase()] = (k.startsWith('token_')) ? window.TOKEN_ABI : (k.startsWith('constant_staking_')) ? window.CONSTANT_STAKING_ABI : window.STAKING_ABI
// 	})

Object.keys(window.config).filter(k => (k.startsWith('token_') ||
	k.startsWith('staking_') || k.startsWith('constant_staking_')) ||
	k.startsWith('constant_stakingnew_') ||
	k.startsWith('buyback_staking1_1_') ||
	k.startsWith('buyback_staking1_2_') ||
	k.startsWith('farming_new_')  ||
	k.startsWith('constant_stakingold_') &&
	k.endsWith('_address'))
	.forEach(k => {
		window[k.replace('_address', '_ABI').toUpperCase()] = (
			k.startsWith('token_')) ? window.TOKEN_ABI :
			(k.startsWith('constant_staking_')) ? window.CONSTANT_STAKING_ABI :
				(k.startsWith('constant_stakingnew_')) ? window.CONSTANT_STAKINGNEW_ABI :
					(k.startsWith('buyback_staking1_1_')) ? window.BUYBACK_STAKING1_1_ABI :
						(k.startsWith('buyback_staking1_2_')) ? window.BUYBACK_STAKING1_2_ABI :
							(k.startsWith('farming_new_')) ? window.FARMING_NEW_ABI :
								(k.startsWith('constant_stakingold_')) ? window.CONSTANT_STAKING_OLD_ABI : window.STAKING_ABI
	})

async function getMaxFee(){
	let maxPriorityFeePerGas = new BigNumber(10000000000).toFixed(0)*1
	let latestGasPrice = await window.web3.eth.getGasPrice()
	latestGasPrice = new BigNumber(latestGasPrice * 1.125 + maxPriorityFeePerGas).toFixed(0)*1

	return {latestGasPrice, maxPriorityFeePerGas}
}

window.web3 = new Web3('https://mainnet.infura.io/v3/94608dc6ddba490697ec4f9b723b586e')

window.ethweb3 = new Web3('https://mainnet.infura.io/v3/94608dc6ddba490697ec4f9b723b586e')

window.coinbase_address = '0x0000000000000000000000000000000000000111'

// function to connect metamask
async function connectWallet(provider, walletType) {
	//walletConnect
	if (walletType) {
		await provider.enable()
		window.web3 = new Web3(provider)
		let coinbase_address = await window.web3.eth.getAccounts()
		window.coinbase_address = coinbase_address.pop()

		window.IS_CONNECTED = true
		return true
	} else if(window.ethereum) {
		//Web3 Providers
		window.web3 = new Web3(window.ethereum)
		try {
			await window.ethereum.enable()
			console.log("Connected!")
			window.IS_CONNECTED = true
			if ( window.ethereum.isCoin98 )
				window.WALLET_TYPE = 'coin98'
			if ( window.ethereum.isMetaMask )
				window.WALLET_TYPE = 'metamask'
			let coinbase_address = await window.ethereum.request({method: 'eth_accounts'})
			window.coinbase_address = coinbase_address.pop()
			return true;
		} catch (e) {
			console.error(e)
			throw new Error("User denied wallet connection!")
		}
	} else if (window.web3) {
		window.web3 = new Web3(window.web3.currentProvider)
		console.log("connected to old web3")
		window.IS_CONNECTED = true
		return true
	} else {
		throw new Error("No web3 detected!")
	}
}

function param(name) {
	var f = new RegExp("\\b" + name + "=([^&]+)").exec(document.location.search);
	if (f) return decodeURIComponent(f[1].replace(/\+/g, " "));
}
window.param = param

/**
 *
 * @param {"TOKEN" | "STAKING"} key
 */
async function getContract(key) {
    let ABI = window[key+'_ABI']
    let address = window.config[key.toLowerCase()+'_address']
    if (!window.cached_contracts[key]) {
        window.cached_contracts[key] = new window.ethweb3.eth.Contract(ABI, address, {from: await getCoinbase()})
    }

    return window.cached_contracts[key]
}

function getCoinbase() {
	// if ( window.WALLET_TYPE == 'coin98' ) {
	// 	return window.coinbase_address.toLowerCase()
	// }
	// else{
	// 	return window.web3.eth.getCoinbase()
	// }
	return window.coinbase_address
}


class TOKEN {

	constructor(key="TOKEN") {
		this.key = key
		let address = window.config[key.toLowerCase()+'_address']
        this._address = address
	}

    async transfer(to, amount) {
        let contract = await getContract(this.key)

		let {latestGasPrice, maxPriorityFeePerGas} = await getMaxFee()
		console.log({latestGasPrice, maxPriorityFeePerGas})

        let gas = window.config.default_gas_amount
				try {
					let estimatedGas = await contract.methods['transfer'](to, amount).estimateGas({ gas })
					if (estimatedGas) {
						gas = Math.min(estimatedGas, gas)
						//console.log('TRANSFER '+gas)
					}
				} catch (e) {
					console.warn(e)
				}
        return (await contract.methods.transfer(to, amount).send({gas, from: await getCoinbase() }))
    }
    async totalSupply() {
        let contract = await getContract(this.key)
        return (await contract.methods.totalSupply().call())
    }
    async approve(spender, amount) {
        let contract = await getContract(this.key)
        let gas = window.config.default_gas_amount

		let {latestGasPrice, maxPriorityFeePerGas} = await getMaxFee()
		console.log({latestGasPrice, maxPriorityFeePerGas})

		try {
			let estimatedGas = await contract.methods['approve'](spender
				, amount).estimateGas({ gas })
			if (estimatedGas) {
				gas = Math.min(estimatedGas, gas)
				//console.log('estimatedgas'+gas)
			}
		} catch (e) {
			console.warn(e)
		}
        return (await contract.methods.approve(spender, amount).send({gas, from: await getCoinbase() }))
    }
    async balanceOf(address) {
        let contract = await getContract(this.key)
        return (await contract.methods.balanceOf(address).call())
    }
}

class STAKING {
	constructor(ticker='STAKING', token='TOKEN') {
		this.ticker = ticker;
		this.token = token
		let address = window.config[ticker.toLowerCase()+'_address']
		this._address = address;
		[
			"owner",
			"depositedTokens",
			"depositTime",
			"cliffTime",
			"lastClaimedTime",
			"totalEarnedTokens",
			"totalEarnedEth",
			"getPendingDivs",
			"getPendingDivsEth",
			"tokensToBeDisbursedOrBurnt",
			"tokensToBeSwapped",
			"getNumberOfHolders",
			"getDepositorsList",
			"swapAttemptPeriod",
			"lastSwapExecutionTime",
			"contractDeployTime",
			"disburseDuration"
		].forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract(this.ticker)
				return (await contract.methods[fn_name](...args).call())
			}
		});


		[
			"deposit",
			"withdraw",
			"claimAs",
			"claim"
		].forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract(this.ticker)
				let value = 0;
				console.log(value)

				let {latestGasPrice, maxPriorityFeePerGas} = await getMaxFee()
				console.log({latestGasPrice, maxPriorityFeePerGas})

				let gas = window.config.default_gas_amount
				try {
					let estimatedGas = await contract.methods[fn_name](...args).estimateGas({ gas })
					if (estimatedGas) {
						gas = Math.min(estimatedGas, gas)
						//console.log('estimatedgas'+gas)
					}
				} catch (e) {
					console.warn(e)
				}
				return (await contract.methods[fn_name](...args).send({value, gas, from: await getCoinbase()}))
			}
		})

		// [
		// 	"claim"
		// ].forEach(fn_name => {
		// 	this[fn_name] = async function(...args) {
		// 		let contract = await getContract(this.ticker)
		// 		let value = 0;
		// 		let gas = window.config.default_gas_amount
		// 		return (await contract.methods[fn_name](...args).send({value, gas, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
		// 	}
		// })

	}

	async depositTOKEN(amount) {
		let token_contract = await getContract(this.token)
		let staking_contract = await getContract(this.ticker)
        let batch = new window.web3.eth.BatchRequest()
        batch.add(token_contract.methods.approve(staking_contract._address, amount).send.request({gas: window.config.default_gas_amount, from: await getCoinbase()}))
        batch.add(staking_contract.methods.deposit(amount).send.request({gas: window.config.default_gas_amount, from: await getCoinbase()}))
		return batch.execute()
	}

}

class BUYBACK_STAKING {
	constructor(ticker = 'BUYBACK_STAKING', token = 'REWARD_TOKEN') {
		this.ticker = ticker;
		this.token = token
		let address = window.config[ticker.toLowerCase() + '_address']
		this._address = address;
		[
			"owner",
			"depositedTokens",
			"stakingTime",
			"LOCKUP_TIME",
			"lastClaimedTime",
			"totalEarnedTokens",
			"getPendingDivs",
			"getNumberOfHolders",
			"getStakersList",
			"getTotalPendingDivs",
			"contractStartTime",
			"REWARD_INTERVAL"
		].forEach(fn_name => {
			this[fn_name] = async function (...args) {
				let contract = await getContract(this.ticker)
				return (await contract.methods[fn_name](...args).call())
			}
		});


		[
			"stake",
			"unstake",
			"reInvest",
			"claim",
		].forEach(fn_name => {
			this[fn_name] = async function (...args) {
				let contract = await getContract(this.ticker)
				let value = 0;
				console.log(value)
				let gas = window.config.default_gas_amount

				let {latestGasPrice, maxPriorityFeePerGas} = await getMaxFee()
				console.log({latestGasPrice, maxPriorityFeePerGas})

				//console.log({latestGasPrice})
				// try {
				// 	let estimatedGas = await contract.methods[fn_name](...args).estimateGas({ gas })
				// 	if (estimatedGas) {
				// 		gas = Math.min(estimatedGas, gas)
				// 		console.log('estimatedgas'+gas)
				// 	}
				// } catch (e) {
				// 	console.warn(e)
				// }
				return (await contract.methods[fn_name](...args).send({value, gas, from: await getCoinbase() }))
			}
		})
	}
}

class CONSTANT_STAKING {
	constructor(ticker = 'CONSTANT_STAKING_30', token = 'REWARD_TOKEN') {
		this.ticker = ticker;
		this.token = token
		let address = window.config[ticker.toLowerCase() + '_address']
		this._address = address;
		[
			"owner",
			"depositedTokens",
			"stakingTime",
			"LOCKUP_TIME",
			"lastClaimedTime",
			"totalEarnedTokens",
			"getPendingDivs",
			"totalReferralFeeEarned",
			"getNumberOfHolders",
			"getStakersList",
			"getTotalPendingDivs",
			"getNumberOfReferredStakers",
			"getReferredStaker",
			"getActiveReferredStaker",
			"contractStartTime",
			"REWARD_INTERVAL",
			"ADMIN_CAN_CLAIM_AFTER",
		].forEach(fn_name => {
			this[fn_name] = async function (...args) {
				let contract = await getContract(this.ticker)
				return (await contract.methods[fn_name](...args).call())
			}
		});


		[
			"stake",
			"stakeExternal",
			"unstake",
			"claim",
			"reInvest"
		].forEach(fn_name => {
			this[fn_name] = async function (...args) {
				let contract = await getContract(this.ticker)
				let value = 0;
				// console.log(value)

				let {latestGasPrice, maxPriorityFeePerGas} = await getMaxFee()
				console.log({latestGasPrice, maxPriorityFeePerGas})

				let gas = window.config.default_gas_amount
				try {
					let estimatedGas = await contract.methods[fn_name](...args).estimateGas({ gas })
					if (estimatedGas) {
						gas = Math.min(estimatedGas, gas)
						console.log('estimatedgas'+gas)
					}
				} catch (e) {
					console.warn(e)
				}
				return (await contract.methods[fn_name](...args).send({ value, gas, from: await getCoinbase() }))
				// return (await contract.methods[fn_name](...args).send({ value, gas, from: await getCoinbase(), maxFeePerGas: latestGasPrice, maxPriorityFeePerGas: maxPriorityFeePerGas }))
			}
		})
	}

	async depositTOKEN(amount, referrer) {
		let token_contract = await getContract(this.token)
		let staking_contract = await getContract(this.ticker)
		let batch = new window.web3.eth.BatchRequest()
		batch.add(token_contract.methods.approve(staking_contract._address, amount).send.request({ gas: window.config.default_gas_amount, from: await getCoinbase() }))
		batch.add(staking_contract.methods.deposit(amount, referrer).send.request({ gas: window.config.default_gas_amount, from: await getCoinbase() }))
		return batch.execute()
	}
}

class CONSTANT_STAKING_OLD {
	constructor(ticker = 'CONSTANT_STAKINGOLD_30', token = 'REWARD_TOKEN') {
		this.ticker = ticker;
		this.token = token
		let address = window.config[ticker.toLowerCase() + '_address']
		this._address = address;
		[
			"owner",
			"depositedTokens",
			"stakingTime",
			"LOCKUP_TIME",
			"lastClaimedTime",
			"totalEarnedTokens",
			"getPendingDivs",
			"totalReferralFeeEarned",
			"getNumberOfHolders",
			"getStakersList",
			"getTotalPendingDivs",
			"getNumberOfReferredStakers",
			"getReferredStaker",
			"getActiveReferredStaker",
			"contractStartTime",
			"REWARD_INTERVAL",
			"ADMIN_CAN_CLAIM_AFTER",
		].forEach(fn_name => {
			this[fn_name] = async function (...args) {
				let contract = await getContract(this.ticker)
				return (await contract.methods[fn_name](...args).call())
			}
		});


		[
			"stake",
			"unstake",
			"claim",
			"reInvest"
		].forEach(fn_name => {
			this[fn_name] = async function (...args) {
				let contract = await getContract(this.ticker)
				let value = 0;
				// console.log(value)
				console.log(contract)

				let {latestGasPrice, maxPriorityFeePerGas} = await getMaxFee()
				console.log({latestGasPrice, maxPriorityFeePerGas})

				let gas = window.config.default_gas_amount
				try {
					let estimatedGas = await contract.methods[fn_name](...args).estimateGas({ gas })
					if (estimatedGas) {
						gas = Math.min(estimatedGas, gas)
						console.log('estimatedgas'+gas)
					}
				} catch (e) {
					console.warn(e)
				}
				return (await contract.methods[fn_name](...args).send({ value, gas, from: await getCoinbase() }))
				// return (await contract.methods[fn_name](...args).send({ value, gas, from: await getCoinbase(), maxFeePerGas: latestGasPrice, maxPriorityFeePerGas: maxPriorityFeePerGas }))
			}
		})
	}

	async depositTOKEN(amount, referrer) {
		let token_contract = await getContract(this.token)
		let staking_contract = await getContract(this.ticker)
		let batch = new window.web3.eth.BatchRequest()
		batch.add(token_contract.methods.approve(staking_contract._address, amount).send.request({ gas: window.config.default_gas_amount, from: await getCoinbase() }))
		batch.add(staking_contract.methods.deposit(amount, referrer).send.request({ gas: window.config.default_gas_amount, from: await getCoinbase() }))
		return batch.execute()
	}
}

class GOVERNANCE {
	constructor(ticker='GOVERNANCE', token='REWARD_TOKEN') {
		this.ticker = ticker;
		this.token = token
		let address = window.config[ticker.toLowerCase()+'_address']
		this._address = address;
		[
			"QUORUM",
			"MIN_BALANCE_TO_INIT_PROPOSAL",
			"VOTE_DURATION",
			"RESULT_EXECUTION_ALLOWANCE_PERIOD",
			"actions",
			"optionOneVotes",
			"optionTwoVotes",
			"stakingPools",
			"newGovernances",
			"proposalStartTime",
			"isProposalExecuted",
			"totalDepositedTokens",
			"votesForProposalByAddress",
			"votedForOption",
			"lastVotedProposalStartTime",
			"lastIndex",
			"getProposal",
			"isProposalOpen",
			"isProposalExecutible"
		].forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract(this.ticker)
				return (await contract.methods[fn_name](...args).call())
			}
		});


		[
			"proposeDisburseOrBurn",
			"proposeUpgradeGovernance",
			"addVotes",
			"removeVotes",
			"withdrawAllTokens",
			"executeProposal",
		].forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract(this.ticker)
				let value = 0;
				console.log(value)
				return (await contract.methods[fn_name](...args).send({value, gas: window.config.default_gas_amount, from: await getCoinbase() }))
			}
		})
	}

	async addVotesOneClick(proposalId, option, amount) {
		let token_contract = await getContract(this.token)
		let governance_contract = await getContract(this.ticker)
        let batch = new window.web3.eth.BatchRequest()
        batch.add(token_contract.methods.approve(governance_contract._address, amount).send.request({gas: window.config.default_gas_amount, from: await getCoinbase() }))
        batch.add(governance_contract.methods.addVotes(proposalId, option, amount).send.request({gas: window.config.default_gas_amount, from: await getCoinbase() }))
		return batch.execute()
	}
}

class CONSTANT_STAKING_NEW {
	constructor(ticker = 'CONSTANT_STAKING_30', token = 'REWARD_TOKEN') {
		this.ticker = ticker;
		this.token = token
		let address = window.config[ticker.toLowerCase() + '_address']
		this._address = address;
		[
			"owner",
			"depositedTokens",
			"stakingTime",
			"LOCKUP_TIME",
			"lastClaimedTime",
			"totalEarnedTokens",
			"getPendingDivs",
			"totalReferralFeeEarned",
			"getNumberOfHolders",
			"getStakersList",
			"getTotalPendingDivs",
			"getNumberOfReferredStakers",
			"getReferredStaker",
			"getActiveReferredStaker",
			"contractStartTime",
			"REWARD_INTERVAL",
			"rewardsPendingClaim",
			"getPendingDivs",
			"ADMIN_CAN_CLAIM_AFTER",
		].forEach(fn_name => {
			this[fn_name] = async function (...args) {
				let contract = await getContract(this.ticker)
				return (await contract.methods[fn_name](...args).call())
			}
		});


		[
			"stake",
			"unstake",
			"claim",
			"reInvest",
			"stakeExternal"
		].forEach(fn_name => {
			this[fn_name] = async function (...args) {
				let contract = await getContract(this.ticker)
				let value = 0;
				//console.log(value)
				let gas = window.config.default_gas_amount
				// try {
				// 	let estimatedGas = await contract.methods[fn_name](...args).estimateGas({ gas })
				// 	if (estimatedGas) {
				// 		gas = Math.min(estimatedGas, gas)
				// 		console.log('estimatedgas'+gas)
				// 	}
				// } catch (e) {
				// 	console.warn(e)
				// }
				return (await contract.methods[fn_name](...args).send({ value, gas, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei * 1e9 }))
			}
		})
	}

	async depositTOKEN(amount, referrer) {
		let token_contract = await getContract(this.token)
		let staking_contract = await getContract(this.ticker)
		let batch = new window.web3.eth.BatchRequest()
		batch.add(token_contract.methods.approve(staking_contract._address, amount).send.request({ gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei * 1e9 }))
		batch.add(staking_contract.methods.deposit(amount, referrer).send.request({ gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei * 1e9 }))
		return batch.execute()
	}
}

window.governance = new GOVERNANCE

//DYP-ETH
window.token = new TOKEN
window.staking = new STAKING
window.reward_token = new TOKEN("REWARD_TOKEN")
window.weth = new TOKEN("WETH")

window.token_dyp_30 = new TOKEN("TOKEN_DYP30")
window.staking_dyp_30 = new STAKING("STAKING_DYP30", "TOKEN_DYP30")

window.token_dyp_60 = new TOKEN("TOKEN_DYP30")
window.staking_dyp_60 = new STAKING("STAKING_DYP60", "TOKEN_DYP60")

window.token_dyp_90 = new TOKEN("TOKEN_DYP90")
window.staking_dyp_90 = new STAKING("STAKING_DYP90", "TOKEN_DYP90")


//DYP-WBTC
window.token_wbtc_3 = new TOKEN("TOKEN_WBTC3")
window.staking_wbtc_3 = new STAKING("STAKING_WBTC3", "TOKEN_WBTC3")

window.token_wbtc_30 = new TOKEN("TOKEN_WBTC30")
window.staking_wbtc_30 = new STAKING("STAKING_WBTC30", "TOKEN_WBTC30")

window.token_wbtc_60 = new TOKEN("TOKEN_WBTC60")
window.staking_wbtc_60 = new STAKING("STAKING_WBTC60", "TOKEN_WBTC60")

window.token_wbtc_90 = new TOKEN("TOKEN_WBTC90")
window.staking_wbtc_90 = new STAKING("STAKING_WBTC90", "TOKEN_WBTC90")

//DYP-USDC
window.token_usdc_3 = new TOKEN("TOKEN_USDC3")
window.staking_usdc_3 = new STAKING("STAKING_USDC3", "TOKEN_USDC3")

window.token_usdc_30 = new TOKEN("TOKEN_USDC30")
window.staking_usdc_30 = new STAKING("STAKING_USDC30", "TOKEN_USDC30")

window.token_usdc_60 = new TOKEN("TOKEN_USDC60")
window.staking_usdc_60 = new STAKING("STAKING_USDC60", "TOKEN_USDC60")

window.token_usdc_90 = new TOKEN("TOKEN_USDC90")
window.staking_usdc_90 = new STAKING("STAKING_USDC90", "TOKEN_USDC90")


//DYP-USDT
window.token_usdt_3 = new TOKEN("TOKEN_USDT3")
window.staking_usdt_3 = new STAKING("STAKING_USDT3", "TOKEN_USDT3")

window.token_usdt_30 = new TOKEN("TOKEN_USDT30")
window.staking_usdt_30 = new STAKING("STAKING_USDT30", "TOKEN_USDT30")

window.token_usdt_60 = new TOKEN("TOKEN_USDT60")
window.staking_usdt_60 = new STAKING("STAKING_USDT60", "TOKEN_USDT60")

window.token_usdt_90 = new TOKEN("TOKEN_USDT90")
window.staking_usdt_90 = new STAKING("STAKING_USDT90", "TOKEN_USDT90")


window.token_dai = new TOKEN("TOKEN_DAI")
window.staking_dai = new STAKING("STAKING_DAI", "TOKEN_DAI")

// constant staking
window.constant_staking_30 = new CONSTANT_STAKING_OLD("CONSTANT_STAKINGOLD_30")
window.constant_staking_60 = new CONSTANT_STAKING_OLD("CONSTANT_STAKINGOLD_60")
window.constant_staking_90 = new CONSTANT_STAKING_OLD("CONSTANT_STAKINGOLD_90")
window.constant_staking_120 = new CONSTANT_STAKING_OLD("CONSTANT_STAKINGOLD_120")

/*buyback*/
window.buyback_staking = new BUYBACK_STAKING('BUYBACK_STAKING')


window.REWARD_TOKEN_IDYP_ABI = window.TOKEN_ABI
window.reward_token_idyp = new TOKEN("REWARD_TOKEN_IDYP")

window.REWARD_TOKEN_DYPS_ABI = window.TOKEN_ABI
window.token_dyps = new TOKEN("REWARD_TOKEN_DYPS")

//constant staking NEW CONTRACTS
window.constant_staking_new1 = new CONSTANT_STAKING_NEW("CONSTANT_STAKINGNEW_NEW1")
window.constant_staking_new2 = new CONSTANT_STAKING_NEW("CONSTANT_STAKINGNEW_NEW2")

//Constant staking new for Buyback
window.buyback_staking1_1 = new BUYBACK_STAKING('BUYBACK_STAKING1_1')
window.buyback_staking1_2 = new BUYBACK_STAKING('BUYBACK_STAKING1_2')
window.constant_staking_new3 = new CONSTANT_STAKING_NEW("CONSTANT_STAKINGNEW_NEW3")
window.constant_staking_new4 = new CONSTANT_STAKING_NEW("CONSTANT_STAKINGNEW_NEW4")

/* Farming New */
window.token_new = new TOKEN("TOKEN_NEW")
window.farming_new_1 = new STAKING("FARMING_NEW_1")
window.constant_staking_new5 = new CONSTANT_STAKING_NEW("CONSTANT_STAKINGNEW_NEW5")

window.farming_new_2 = new STAKING("FARMING_NEW_2")
window.constant_staking_new6 = new CONSTANT_STAKING_NEW("CONSTANT_STAKINGNEW_NEW6")

window.farming_new_3 = new STAKING("FARMING_NEW_3")
window.constant_staking_new7 = new CONSTANT_STAKING_NEW("CONSTANT_STAKINGNEW_NEW7")

window.farming_new_4 = new STAKING("FARMING_NEW_4")
window.constant_staking_new8 = new CONSTANT_STAKING_NEW("CONSTANT_STAKINGNEW_NEW8")

window.farming_new_5 = new STAKING("FARMING_NEW_5")
window.constant_staking_new9 = new CONSTANT_STAKING_NEW("CONSTANT_STAKINGNEW_NEW9")

/* VST */
window.constant_staking_200 = new CONSTANT_STAKING("CONSTANT_STAKING_200")
window.constant_staking_300 = new CONSTANT_STAKING("CONSTANT_STAKING_300")

/* Constant staking iDYP */
window.constant_staking_idyp_1 = new CONSTANT_STAKING_OLD("CONSTANT_STAKINGOLD_130")
window.constant_staking_idyp_2 = new CONSTANT_STAKING_OLD("CONSTANT_STAKINGOLD_140")


/**
 * Returns the ETH USD Price, Token USD Prices, LP USD Prices, and amount of LP Staked, usd value of LP staked
 *
 * lp_id example: `"pair_address-pool_contract_address"`
 *
 * @param {{token_contract_addresses: object[], lp_ids: object[], tokens_disbursed_per_year: object}} props - MAKE SURE ALL ADDRESSES ARE LOWERCASE!
 */
function get_usd_values({
							token_contract_addresses,
							lp_ids,
						}) {
	return new Promise((resolve, reject) => {
		fetch('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', {
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({query:`{
  
	tokens(where:{
  id_in: ${JSON.stringify(token_contract_addresses.map(a => a.toLowerCase()))}}) {
	  id
	  symbol
	  name
	  decimals
	  untrackedVolumeUSD
		derivedETH
	}
	
	bundle(id: 1) {
	  id
	  ethPrice
	}
	
	liquidityPositions(where: 
	  {id_in: 
		  ${JSON.stringify(lp_ids.map(id => id.toLowerCase()))},
	  }) {
	  id
	  pair {
		reserveUSD
		totalSupply
	  }
	  liquidityTokenBalance
	}
  }
  `, variables: null}),
		})
			.then(res => res.json())
			.then(res => handleTheGraphData(res))
			.catch(reject)


		function handleTheGraphData(response) {
			try {
				let data = response.data
				if (!data) return reject(response);

				console.log(data)

				let usd_per_eth = new BigNumber(data.bundle.ethPrice).toFixed(2)*1

				let token_data = {}, lp_data = {}

				data.tokens.forEach(t => {
					token_data[t.id] = {
						token_volume_usd_all_time: new BigNumber(t.untrackedVolumeUSD).toFixed(2)*1,
						token_price_usd: new BigNumber(t.derivedETH).times(usd_per_eth).toFixed(2)*1
					}
				})

				data.liquidityPositions.forEach(lp => {
					let usd_per_lp = new BigNumber(lp.pair.reserveUSD).div(lp.pair.totalSupply).toFixed(2)*1
					let lp_staked = lp.liquidityTokenBalance
					let usd_value_of_lp_staked = new BigNumber(lp_staked).times(usd_per_lp).toFixed(2)*1
					lp_data[lp.id] = {
						lp_staked,
						usd_per_lp,
						usd_value_of_lp_staked,
					}
				})
				resolve({token_data, lp_data, usd_per_eth})
			} catch (e) {
				console.error(e)
				reject(e)
			}
		}
	})
}

/**
 *
 * @param {string[]} staking_pools_list - List of Contract Addresses for Staking Pools
 * @returns {number[]} List of number of stakers for each pool
 */
async function get_number_of_stakers(staking_pools_list) {
	let coinbase;
	try {
		if (!window.IS_CONNECTED) throw new Error("Wallet Not Connected!")
		coinbase = await getCoinbase()
	} catch (e) {
		console.warn(e)
	} finally {
		if (!coinbase) {
			return (await Promise.all(staking_pools_list.map(() => Promise.resolve(0))))
		}
	}

	return (await Promise.all(staking_pools_list.map(contract_address => {
		let contract = new window.ethweb3.eth.Contract(window.STAKING_ABI, contract_address, {from: coinbase})
		return contract.methods.getNumberOfHolders().call()
	}))).map(h => Number(h))
}

async function get_token_balances({
									  TOKEN_ADDRESS,
									  HOLDERS_LIST
								  }) {
	let coinbase;
	try {
		if (!window.IS_CONNECTED) throw new Error("Wallet Not Connected!")
		coinbase = await getCoinbase()
	} catch (e) {
		console.warn(e)
	} finally {
		if (!coinbase) {
			return (await Promise.all(HOLDERS_LIST.map(() => Promise.resolve(0))))
		}
	}

	let token_contract = new window.ethweb3.eth.Contract(window.TOKEN_ABI, TOKEN_ADDRESS, {from: coinbase})

	return (await Promise.all(HOLDERS_LIST.map(h => {
		return token_contract.methods.balanceOf(h).call()
	})))
}

function wait(ms) {
	console.log("Waiting " + ms + 'ms')
	return new Promise(r => setTimeout(() => {
		r(true)
		console.log("Wait over!")
	}, ms))
}

/**
 *
 * @param {{token_data, lp_data}} usd_values - assuming only one token is there in token_list
 */
async function get_apy_and_tvl(usd_values) {
	let {token_data, lp_data, usd_per_eth} = usd_values

	let token_price_usd = token_data[TOKEN_ADDRESS].token_price_usd*1
	let balances_by_address = {}, number_of_holders_by_address = {}
	let lp_ids = Object.keys(lp_data)
	let addrs = lp_ids.map(a => a.split('-')[1])
	let token_balances = await get_token_balances({TOKEN_ADDRESS, HOLDERS_LIST: addrs})
	addrs.forEach((addr, i) => balances_by_address[addr] = token_balances[i])

	await wait(2000)

	let number_of_holders = await get_number_of_stakers(addrs)
	addrs.forEach((addr, i) => number_of_holders_by_address[addr] = number_of_holders[i])

	lp_ids.forEach(lp_id => {
		let apy = 0, tvl_usd = 0

		let pool_address = lp_id.split('-')[1]
		let token_balance = new BigNumber(balances_by_address[pool_address] || 0)
		let token_balance_value_usd = token_balance.div(1e18).times(token_price_usd).toFixed(2)*1

		tvl_usd = token_balance_value_usd + lp_data[lp_id].usd_value_of_lp_staked*1

		apy = (TOKENS_DISBURSED_PER_YEAR_BY_LP_ID[lp_id] * token_price_usd * 100 / (lp_data[lp_id].usd_value_of_lp_staked || 1)).toFixed(2)*1

		lp_data[lp_id].apy = apy
		lp_data[lp_id].tvl_usd = tvl_usd
		lp_data[lp_id].stakers_num = number_of_holders_by_address[pool_address]
	})

	return {token_data, lp_data, usd_per_eth, token_price_usd}
}

async function refreshBalance() {

	//await wait(10000)
	let coinbase;
	try {
		if (!window.IS_CONNECTED) throw new Error("Wallet Not Connected!")
		coinbase = await getCoinbase()
	} catch (e) {
		console.warn(e)
	}

	let reward_token = window.reward_token
	//console.log('coinbase' + coinbase)

	let _tvl30 = await reward_token.balanceOf('0x7fc2174670d672ad7f666af0704c2d961ef32c73')
	_tvl30 = _tvl30 / 1e18

	let _tvl60 = await reward_token.balanceOf('0x036e336ea3ac2e255124cf775c4fdab94b2c42e4')
	_tvl60 = _tvl60 / 1e18

	let _tvl90 = await reward_token.balanceOf('0x0a32749d95217b7ee50127e24711c97849b70c6a')
	_tvl90 = _tvl90 / 1e18

	let _tvl120 = await reward_token.balanceOf('0x82df1450efd6b504ee069f5e4548f2d5cb229880')
	_tvl120 = _tvl120 / 1e18 + 0.1

	let _buyback = await reward_token.balanceOf('0xe5262f38bf13410a79149cb40429f8dc5e830542')
	_buyback = _buyback /1e18

	// console.log({_buyback})

	let [usdPerToken] = await Promise.all([window.getPrice('defi-yield-protocol')])
	let valueee = (_tvl30 + _tvl60 + _tvl90 + _tvl120 + _buyback) * usdPerToken
	//console.log('usdper '+valueee)
	return valueee

}

async function get_usd_values_with_apy_and_tvl(...arguments) {
	return (await get_apy_and_tvl(await get_usd_values(...arguments)))
}


async function refresh_the_graph_result() {
	let result = await get_usd_values_with_apy_and_tvl({token_contract_addresses: [TOKEN_ADDRESS], lp_ids: LP_ID_LIST})
	window.the_graph_result = result
	window.TVL_FARMING_POOLS = await refreshBalance()
	return result
}

window.get_usd_values = get_usd_values
window.get_token_balances = get_token_balances
window.get_apy_and_tvl = get_apy_and_tvl
window.get_number_of_stakers = get_number_of_stakers
window.refresh_the_graph_result = refresh_the_graph_result

function getPrice(coingecko_id = 'ethereum', vs_currency = 'usd') {
	return new Promise((resolve, reject) => {
		window.$.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coingecko_id}&vs_currencies=${vs_currency}`)
			.then((result) => {
				resolve(result[coingecko_id][vs_currency])
			})
			.catch((error) => {
				reject(error)
			})
	})
}

window.getPrice = getPrice

function getData(ajaxurl) {
	return $.ajax({
		url: ajaxurl,
		type: 'GET',
	});
};

window.hashMapApy = {}

async function getHashMapApy() {
	try {
		const res = await getData('https://api.dyp.finance/api/getHashMapApy')
		window.hashMapApy = res
		//console.log(res)
	} catch (err) {
		console.log(err)
	}
	return window.hashMapApy
}

window.getHashMapApy = getHashMapApy

window.jsonTotalPaid = {}

async function getTotalPaidApi() {
	try {
		const res = await getData('https://api.dyp.finance/api/totalpaid')
		window.jsonTotalPaid = res
		//console.log('total paic', res)
	} catch (err) {
		console.log(err)
	}
	return window.jsonTotalPaid
}

const getTotalPaid = async () => {
	const totalPaid = await getTotalPaidApi()
	return totalPaid
}
window.getTotalPaid = getTotalPaid


window.the_graph_result_eth_v2 = {}

async function get_the_graph_eth_v2() {
	try {
		const res = await getData('https://api.dyp.finance/api/the_graph_eth_v2')
		window.the_graph_result_eth_v2 = res.the_graph_eth_v2
	} catch(err) {
		console.log(err);
	}
	return window.the_graph_result_eth_v2
}

window.get_the_graph_eth_v2 = get_the_graph_eth_v2

/*buyback*/
async function getTokenHolderBalance(token, holder) {
	let tokenContract = new window.ethweb3.eth.Contract(window.TOKEN_ABI, token, {from: await getCoinbase()})
	return await tokenContract.methods.balanceOf(holder).call()
}

async function approveToken(token, spender, amount) {
	let tokenContract = new window.web3.eth.Contract(window.TOKEN_ABI, token, {from: await getCoinbase()})
	let {latestGasPrice, maxPriorityFeePerGas} = await getMaxFee()
	console.log({latestGasPrice, maxPriorityFeePerGas})

	return await tokenContract.methods.approve(spender, amount).send()
}

window.PANGOLIN_ROUTER_ABI=[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_factory","internalType":"address"},{"type":"address","name":"_WAVAX","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"WAVAX","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountA","internalType":"uint256"},{"type":"uint256","name":"amountB","internalType":"uint256"},{"type":"uint256","name":"liquidity","internalType":"uint256"}],"name":"addLiquidity","inputs":[{"type":"address","name":"tokenA","internalType":"address"},{"type":"address","name":"tokenB","internalType":"address"},{"type":"uint256","name":"amountADesired","internalType":"uint256"},{"type":"uint256","name":"amountBDesired","internalType":"uint256"},{"type":"uint256","name":"amountAMin","internalType":"uint256"},{"type":"uint256","name":"amountBMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256","name":"amountToken","internalType":"uint256"},{"type":"uint256","name":"amountAVAX","internalType":"uint256"},{"type":"uint256","name":"liquidity","internalType":"uint256"}],"name":"addLiquidityAVAX","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"amountTokenDesired","internalType":"uint256"},{"type":"uint256","name":"amountTokenMin","internalType":"uint256"},{"type":"uint256","name":"amountAVAXMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"factory","inputs":[]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"}],"name":"getAmountIn","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"uint256","name":"reserveIn","internalType":"uint256"},{"type":"uint256","name":"reserveOut","internalType":"uint256"}]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"}],"name":"getAmountOut","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"reserveIn","internalType":"uint256"},{"type":"uint256","name":"reserveOut","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"getAmountsIn","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"getAmountsOut","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"}]},{"type":"function","stateMutability":"pure","outputs":[{"type":"uint256","name":"amountB","internalType":"uint256"}],"name":"quote","inputs":[{"type":"uint256","name":"amountA","internalType":"uint256"},{"type":"uint256","name":"reserveA","internalType":"uint256"},{"type":"uint256","name":"reserveB","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountA","internalType":"uint256"},{"type":"uint256","name":"amountB","internalType":"uint256"}],"name":"removeLiquidity","inputs":[{"type":"address","name":"tokenA","internalType":"address"},{"type":"address","name":"tokenB","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountAMin","internalType":"uint256"},{"type":"uint256","name":"amountBMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountToken","internalType":"uint256"},{"type":"uint256","name":"amountAVAX","internalType":"uint256"}],"name":"removeLiquidityAVAX","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountTokenMin","internalType":"uint256"},{"type":"uint256","name":"amountAVAXMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountAVAX","internalType":"uint256"}],"name":"removeLiquidityAVAXSupportingFeeOnTransferTokens","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountTokenMin","internalType":"uint256"},{"type":"uint256","name":"amountAVAXMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountToken","internalType":"uint256"},{"type":"uint256","name":"amountAVAX","internalType":"uint256"}],"name":"removeLiquidityAVAXWithPermit","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountTokenMin","internalType":"uint256"},{"type":"uint256","name":"amountAVAXMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"bool","name":"approveMax","internalType":"bool"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountAVAX","internalType":"uint256"}],"name":"removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountTokenMin","internalType":"uint256"},{"type":"uint256","name":"amountAVAXMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"bool","name":"approveMax","internalType":"bool"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amountA","internalType":"uint256"},{"type":"uint256","name":"amountB","internalType":"uint256"}],"name":"removeLiquidityWithPermit","inputs":[{"type":"address","name":"tokenA","internalType":"address"},{"type":"address","name":"tokenB","internalType":"address"},{"type":"uint256","name":"liquidity","internalType":"uint256"},{"type":"uint256","name":"amountAMin","internalType":"uint256"},{"type":"uint256","name":"amountBMin","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"bool","name":"approveMax","internalType":"bool"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapAVAXForExactTokens","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapExactAVAXForTokens","inputs":[{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"swapExactAVAXForTokensSupportingFeeOnTransferTokens","inputs":[{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapExactTokensForAVAX","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"swapExactTokensForAVAXSupportingFeeOnTransferTokens","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapExactTokensForTokens","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","inputs":[{"type":"uint256","name":"amountIn","internalType":"uint256"},{"type":"uint256","name":"amountOutMin","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapTokensForExactAVAX","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"uint256","name":"amountInMax","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256[]","name":"amounts","internalType":"uint256[]"}],"name":"swapTokensForExactTokens","inputs":[{"type":"uint256","name":"amountOut","internalType":"uint256"},{"type":"uint256","name":"amountInMax","internalType":"uint256"},{"type":"address[]","name":"path","internalType":"address[]"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"deadline","internalType":"uint256"}]},{"type":"receive","stateMutability":"payable"}]
window.UNISWAP_ROUTER_ABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
async function getUniswapRouterContract(address=window.config.uniswap_router_address) {
	return (new window.web3.eth.Contract(window.UNISWAP_ROUTER_ABI, address, {from: await getCoinbase()}))
}

/* iDYP check Vesting/Staking */
async function isStaking(holder, stakingAddress) {
	let tokenContract = new window.ethweb3.eth.Contract(window.CONSTANT_STAKING_ABI, stakingAddress, {from: await getCoinbase()})
	return await tokenContract.methods.depositedTokens(holder).call()
}

/* iDYP Staking Stats V2 */

const FarmingStakingAddresses = [
	"0xa68bbe793ad52d0e62bbf34a67f02235ba69e737-0x0b92e7f074e7ade0181a29647ea8474522e6a7c2",
	"0xcfd970494a0b3c52a81dce1ecbff2245e6b0b0e7-0xff32a38016422f51e8c0af5d333472392822feef",
	"0x49d02cf81cc352517350f25e200365360426af94-0x62aae8c0c50038236d075ac595ae0be4f201bbdd",
	"0xf51965c570419f2576ec9aead6a3c5f674424a99-0xb67f464b558e3055c2b6f017546ed53b2e6333d7",
	"0x997a7254e5567d0a70329defcc1e4d29d71ba224-0x1ab008cbfc99d0ca7e3fd8987ce1ebf832506f53"
]

window.FarmingStakingAddresses = FarmingStakingAddresses