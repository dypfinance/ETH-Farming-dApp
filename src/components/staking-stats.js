import React from 'react'

import getFormattedNumber from '../functions/get-formatted-number'

const f = getFormattedNumber

const pool_names = [
    "eth_3",
    "eth_30",
    "eth_60",
    "eth_90",
    "wbtc_3",
    "wbtc_30",
    "wbtc_60",
    "wbtc_90",
    "usdt_3",
    "usdt_30",
    "usdt_60",
    "usdt_90",
    "usdc_3",
    "usdc_30",
    "usdc_60",
    "usdc_90"
]

const WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

const ACCESS_WALLET_LIST = [
    '0x910090Ea889B64B4e722ea4b8fF6D5e734dFb38F'
].map(a => a.toLowerCase())

export default class StakingStats extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pools_info: {},
            coinbase: null
        }
        window.LP_ID_LIST.forEach(lp_id => this.state.pools_info[lp_id] = {})
    }

    getWethBalance = async (contractAddress) => {
        let contract = new window.web3.eth.Contract(window.TOKEN_ABI, WETH_ADDRESS)
        return (await contract.methods.balanceOf(contractAddress).call())
    }

    getDepositedLP = async (contractAddress) => {
        let coinbase = window.coinbase_address
        let contract = new window.web3.eth.Contract(window.STAKING_ABI, contractAddress)
        return (await contract.methods.depositedTokens(coinbase).call())
    }

    getClaimableTokens = async (contractAddress) => {
        let coinbase = window.coinbase_address
        let contract = new window.web3.eth.Contract(window.STAKING_ABI, contractAddress)
        return (await contract.methods.getPendingDivs(coinbase).call())
    }

    getClaimableWeth = async (contractAddress) => {
        let coinbase = window.coinbase_address
        let contract = new window.web3.eth.Contract(window.STAKING_ABI, contractAddress)
        return (await contract.methods.getPendingDivsEth(coinbase).call())
    }

    getTotalEarnedWeth = async (contractAddress) => {
        let coinbase = window.coinbase_address
        let contract = new window.web3.eth.Contract(window.STAKING_ABI, contractAddress)
        return (await contract.methods.totalEarnedEth(coinbase).call())
    }

    handleClaim = async (contractAddress) => {
        let coinbase = window.coinbase_address
        let contract = new window.web3.eth.Contract(window.STAKING_ABI, contractAddress)
        return (await contract.methods.claim().send({ from: coinbase, gasPrice: window.config.default_gasprice_gwei * 1e9, gas: window.config.default_gas_amount }))
    }

    getWethPaidOut = async (contractAddress) => {
        let contract = new window.web3.eth.Contract(window.STAKING_ABI, contractAddress)
        let wethPaidOut = await contract.methods.totalClaimedRewardsEth().call()
        let wethBalance = await this.getWethBalance(contractAddress)
        return new window.BigNumber(wethBalance).plus(wethPaidOut).toString(10)
    }

    componentDidMount() {
        this.refreshPoolsInfo()
    }

    refreshPoolsInfo = () => {
        let coinbase = window.coinbase_address
        this.setState({coinbase})
        window.LP_ID_LIST.forEach(async (lp_id) => {
            let contractAddress = lp_id.split('-')[1]
            let [depositedLp, claimableTokens, claimableEth, wethPaidOut, wethEarned] = await Promise.all([this.getDepositedLP(contractAddress), this.getClaimableTokens(contractAddress), this.getClaimableWeth(contractAddress), this.getWethPaidOut(contractAddress), this.getTotalEarnedWeth(contractAddress)])
            let pools_info = this.state.pools_info
            pools_info[lp_id] = { depositedLp, claimableTokens, claimableEth, wethPaidOut, wethEarned }
            this.setState({ pools_info })
        })
    }

    getTotalUsdValueOfLpDeposited = () => {
        let usdValue = 0, lp_data

        if (!(lp_data = this.props.the_graph_result.lp_data)) {
            return 0
        }

        for (let lp_id of window.LP_ID_LIST) {
            let pool_info;
            if (!(pool_info = this.state.pools_info[lp_id])) continue;
            let usdValueLp = pool_info.depositedLp/1e18 * lp_data[lp_id].usd_per_lp
            if (usdValueLp) usdValue += usdValueLp
        }

        return usdValue
    }

    getTotalClaimableEth = () => {
        let claimableEth = 0

        for (let lp_id of window.LP_ID_LIST) {
            let pool_info;
            if (!(pool_info = this.state.pools_info[lp_id])) continue;
            let ethLp = pool_info.claimableEth/1e18
            if (ethLp) claimableEth += ethLp
        }

        return claimableEth
    }
    getCombinedWethEarnings = () => {
        let ethEarned = 0

        for (let lp_id of window.LP_ID_LIST) {
            let pool_info;
            if (!(pool_info = this.state.pools_info[lp_id])) continue;
            let ethLp = pool_info.wethEarned / 1e18
            if (ethLp) ethEarned += ethLp
        }

        return ethEarned
    }
    getTotalClaimedEth = () => {
        let wethPaidOut = 0

        for (let lp_id of window.LP_ID_LIST) {
            let pool_info;
            if (!(pool_info = this.state.pools_info[lp_id])) continue;
            let ethLp = pool_info.wethPaidOut/1e18
            if (ethLp) wethPaidOut += ethLp
        }

        return wethPaidOut
    }
    getTotalClaimableTokens = () => {
        let claimableTokens = 0

        for (let lp_id of window.LP_ID_LIST) {
            let pool_info;
            if (!(pool_info = this.state.pools_info[lp_id])) continue;
            let tokenLp = pool_info.claimableTokens/1e18
            if (tokenLp) claimableTokens += tokenLp
        }

        return claimableTokens
    }

    render() {

        const { pools_info } = this.state

        let { the_graph_result } = this.props

        let usd_per_token = the_graph_result.token_data ? the_graph_result.token_data["0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"].token_price_usd : 0
        let usd_per_eth = the_graph_result.usd_per_eth || 0

        let can_access = this.state.coinbase && ACCESS_WALLET_LIST.includes( String(this.state.coinbase).toLowerCase() )

        // // if the weth paid out is public - uncomment the below line.
        // can_access = true

        return (
            <div>
                
                <div className='container mb-5 mt-2'>
                    <h2 className='text-center mt-4 mb-4'>My Staking Stats</h2>
                    <div className='l-box pl-0 pr-0'>
                    <div className='table-responsive col' style={{ overflowY: 'hidden'}}>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Pool</th>
                                <th>Deposited LP</th>
                                <th>Claimable DYP</th>
                                <th>Claimable WETH</th>
                                <th>Earned WETH</th>
                                {can_access && <th>Claimed WETH</th>}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                window.LP_ID_LIST.map((lp_id, i) => {
                                    
                                    let usd_per_lp = the_graph_result.lp_data ? the_graph_result.lp_data[lp_id].usd_per_lp : 0

                                    let { depositedLp, claimableTokens, claimableEth, wethPaidOut, wethEarned } = pools_info[lp_id]

                                    //console.log({usd_per_token})

                                    let contractAddress = lp_id.split('-')[1]
                                    let displayNone = 'visible'
                                    let displayNone2

                                    if (depositedLp == '0')
                                    {
                                        displayNone = 'collapse'
                                        displayNone2 = 'none'
                                    }
                                    //console.log('display+',displayNone)
                                    //console.log(pool_names[i])

                                    //parse string name
                                    let str = pool_names[i]
                                    let res = str.split('_')
                                    let addressImg = ''

                                    if (res[0] == 'eth')
                                        addressImg = '/images/ETH.png'
                                    if (res[0] == 'wbtc')
                                        addressImg = '/images/WBTC.png'
                                    if (res[0] == 'usdc')
                                        addressImg = '/images/USDC.png'
                                    if (res[0] == 'usdt')
                                        addressImg = '/images/USDT.png'

                                    //parse pool name
                                    let poolName = pool_names[i]
                                    let string = poolName.split('_')
                                    let combineName = string[0].toUpperCase() + ' ' + string[1]

                                    return (
                                    <tr key={lp_id} style={{visibility: displayNone, display: displayNone2}}>
                                        <td> <img src={addressImg} width={'20px'} /> {combineName} </td>
                                        <td className={Number(depositedLp) > 0 ? 'text-bold' : 'text-muted'}> {f( depositedLp/1e18 * window.rebase_factors[i], 6)} (${f( depositedLp/1e18*usd_per_lp, 2 )}) </td>
                                        <td className={Number(claimableTokens) > 0 ? 'text-bold' : 'text-muted'}> {f( claimableTokens/1e18, 6)} (${f( claimableTokens/1e18 * usd_per_token, 2 )}) </td>
                                        <td className={Number(claimableEth) > 0 ? 'text-bold' : 'text-muted'}> {f(claimableEth / 1e18, 6)} (${f(claimableEth / 1e18 * usd_per_eth, 2)}) </td>
                                        <td className={Number(wethEarned) > 0 ? 'text-bold' : 'text-muted'}> {f(wethEarned / 1e18, 6)} (${f(wethEarned / 1e18 * usd_per_eth, 2)}) </td>
                                        {can_access && <td className={Number(wethPaidOut) > 0 ? 'text-bold' : 'text-muted'}> {f( wethPaidOut/1e18, 6)} (${f( wethPaidOut/1e18 * usd_per_eth , 2 )}) </td>}
                                        <td> <button onClick={() => this.handleClaim(contractAddress)} className='btn btn-primary'>CLAIM</button> </td>
                                    </tr>
                                    )
                                })
                            }
                            <tr>
                                <td>Total</td>
                                <td> ${f( this.getTotalUsdValueOfLpDeposited(), 2)} </td>
                                <td> {f( this.getTotalClaimableTokens(), 6)} (${f( this.getTotalClaimableTokens() * usd_per_token, 2 )}) </td>
                                <td> {f(this.getTotalClaimableEth(), 6)} (${f(this.getTotalClaimableEth() * usd_per_eth, 2)}) </td>
                                <td> {f( this.getCombinedWethEarnings(), 6)} (${f( this.getCombinedWethEarnings() * usd_per_eth , 2 )}) </td>
                                {can_access && <td> {f( this.getTotalClaimedEth(), 6)} (${f( this.getTotalClaimedEth() * usd_per_eth , 2 )}) </td>} 
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}