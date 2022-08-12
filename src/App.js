import React from 'react';

import { Route } from 'react-router-dom'

import initStaking from './components/staking'
import initConstantStaking from './components/constant-staking'
import initBuybackStaking from './components/buy-back-staking'
// import initConstantStakingNew from "./components/constant-staking-new"
import initConstantStakingNew from "./components/constant-staking-new-front"
// import initBuybackStakingNew from './components/buy-back-staking-new'
import initBuybackStakingNew from './components/buy-back-staking-new-front'
// import initStakingNew from "./components/staking-new"
import initStakingNew from "./components/staking-new-front"
import StakingList from './components/staking-list'
import ConstantStakingList from './components/constant-staking-list'
import StakingListEth from './components/staking-list-eth.js'
import StakingListWbtc from './components/staking-list-wbtc.js'
import StakingListUsdc from './components/staking-list-usdc.js'
import StakingListUsdt from './components/staking-list-usdt.js'
import Governance from './components/governance'

import StakingStats from './components/staking-stats'
import StakingStatsNew from './components/staking-stats-new'
import ReferralStats from './components/referral-stats'
import FullStakingStats from './components/full-staking-stats'

import initVesting from './components/vesting'
import initVestingStaking from "./components/vesting-staking"

import Header from './components/header'
import Footer from './components/footer'

import Modal from "./components/modal";

import getFormattedNumber from './functions/get-formatted-number';

import WalletConnectProvider from "@walletconnect/web3-provider";

// import initConstantStakingiDYP from './components/constant-staking-idyp'

import initConstantStakingiDYP from './components/constant-staking-idyp-new-front'

// import initConstantStakingDai from './components/constant-staking-dai'
import initConstantStakingDai from './components/constant-staking-dai-front'

const eth_address = 'ETH'
const wbtc_address = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
const usdc_address = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
const usdt_address = '0xdAC17F958D2ee523a2206206994597C13D831ec7'

const { rebase_factors } = window

const ConstantStaking30 = initConstantStaking({ staking: window.constant_staking_30, apr: 20, liquidity: eth_address, expiration_time: '25 January 2022' })
const ConstantStaking60 = initConstantStaking({ staking: window.constant_staking_60, apr: 25, liquidity: eth_address, expiration_time: '25 January 2022' })
const ConstantStaking90 = initConstantStaking({ staking: window.constant_staking_90, apr: 30, liquidity: eth_address, expiration_time: '25 January 2022' })
const ConstantStaking120 = initConstantStaking({ staking: window.constant_staking_120, apr: 35, liquidity: eth_address, expiration_time: '25 January 2022' })

const BuybackStaking = initBuybackStaking({ staking: window.buyback_staking, apr: 100, liquidity: eth_address, expiration_time: '1 December 2021' })

const Staking3 = initStaking({token: window.token, staking: window.staking, liquidity: eth_address, lp_symbol:'DYP/ETH', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '16 December 2021'})
const Staking30 = initStaking({token: window.token_dyp_30, staking: window.staking_dyp_30, liquidity: eth_address, lp_symbol:'DYP/ETH', reward: '45,000', lock: '30 Days', rebase_factor: rebase_factors[1], expiration_time: '16 December 2021'})
const Staking60 = initStaking({token: window.token_dyp_60, staking: window.staking_dyp_60, liquidity: eth_address, lp_symbol:'DYP/ETH', reward: '75,000', lock: '60 Days', rebase_factor: rebase_factors[2], expiration_time: '16 December 2021'})
const Staking90 = initStaking({token: window.token_dyp_90, staking: window.staking_dyp_90, liquidity: eth_address, lp_symbol:'DYP/ETH', reward: '100,000', lock: '90 Days', rebase_factor: rebase_factors[3], expiration_time: '16 December 2021'})

const StakingWbtc3 = initStaking({token: window.token_wbtc_3, staking: window.staking_wbtc_3, liquidity: wbtc_address, lp_symbol:'DYP/WBTC', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[4], expiration_time: '16 December 2021'})
const StakingWbtc30 = initStaking({token: window.token_wbtc_30, staking: window.staking_wbtc_30, liquidity: wbtc_address, lp_symbol:'DYP/WBTC', reward: '45,000', lock: '30 Days', rebase_factor: rebase_factors[5], expiration_time: '16 December 2021'})
const StakingWbtc60 = initStaking({token: window.token_wbtc_60, staking: window.staking_wbtc_60, liquidity: wbtc_address, lp_symbol:'DYP/WBTC', reward: '75,000', lock: '60 Days', rebase_factor: rebase_factors[6], expiration_time: '16 December 2021'})
const StakingWbtc90 = initStaking({token: window.token_wbtc_90, staking: window.staking_wbtc_90, liquidity: wbtc_address, lp_symbol:'DYP/WBTC', reward: '100,000', lock: '90 Days', rebase_factor: rebase_factors[7], expiration_time: '16 December 2021'})

const StakingUsdc3 = initStaking({token: window.token_usdc_3, staking: window.staking_usdc_3, liquidity: usdc_address, lp_symbol:'DYP/USDC', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[8], expiration_time: '16 December 2021'})
const StakingUsdc30 = initStaking({token: window.token_usdc_30, staking: window.staking_usdc_30, liquidity: usdc_address, lp_symbol:'DYP/USDC', reward: '45,000', lock: '30 Days', rebase_factor: rebase_factors[9], expiration_time: '16 December 2021'})
const StakingUsdc60 = initStaking({token: window.token_usdc_60, staking: window.staking_usdc_60, liquidity: usdc_address, lp_symbol:'DYP/USDC', reward: '75,000', lock: '60 Days', rebase_factor: rebase_factors[10], expiration_time: '16 December 2021'})
const StakingUsdc90 = initStaking({token: window.token_usdc_90, staking: window.staking_usdc_90, liquidity: usdc_address, lp_symbol:'DYP/USDC', reward: '100,000', lock: '90 Days', rebase_factor: rebase_factors[11], expiration_time: '16 December 2021'})

const StakingUsdt3 = initStaking({token: window.token_usdt_3, staking: window.staking_usdt_3, liquidity: usdt_address, lp_symbol:'DYP/USDT', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[12], expiration_time: '16 December 2021'})
const StakingUsdt30 = initStaking({token: window.token_usdt_30, staking: window.staking_usdt_30, liquidity: usdt_address, lp_symbol:'DYP/USDT', reward: '45,000', lock: '30 Days', rebase_factor: rebase_factors[13], expiration_time: '16 December 2021'})
const StakingUsdt60 = initStaking({token: window.token_usdt_60, staking: window.staking_usdt_60, liquidity: usdt_address, lp_symbol:'DYP/USDT', reward: '75,000', lock: '60 Days', rebase_factor: rebase_factors[14], expiration_time: '16 December 2021'})
const StakingUsdt90 = initStaking({token: window.token_usdt_90, staking: window.staking_usdt_90, liquidity: usdt_address, lp_symbol:'DYP/USDT', reward: '100,000', lock: '90 Days', rebase_factor: rebase_factors[15], expiration_time: '16 December 2021'})

// const StakingDAI = initStaking({token: window.token_dai, staking: window.staking_dai, lp_symbol: 'DYP/DAI', reward: '30000', lock: '3'})

//Constant Staking New
const ConstantStaking1 = initConstantStakingNew({ staking: window.constant_staking_new1, apr: 25, liquidity: eth_address, expiration_time: '14 December 2022', other_info: false, fee: 0.25 })
const ConstantStaking2 = initConstantStakingNew({ staking: window.constant_staking_new2, apr: 50, liquidity: eth_address, expiration_time: '14 December 2022', other_info: false, fee: 0.50 })

//Constant Staking NEW DYP -> DAI
const ConstantStakingDai = initConstantStakingDai({ staking: window.constant_stakingdai, apr: 25, liquidity: eth_address, expiration_time: '10 May 2023', other_info: true })

//Buyback New
const BuybackStaking1 = initBuybackStakingNew({ staking: window.buyback_staking1_1, constant: window.constant_staking_new3, apr: 30, expiration_time: '14 December 2022', fee: 1})
const BuybackStaking2 = initBuybackStakingNew({ staking: window.buyback_staking1_2, constant: window.constant_staking_new4, apr: 100, expiration_time: '14 December 2022', fee: 3.5})

//Farming New
const StakingNew1 = initStakingNew({token: window.token_new, staking: window.farming_new_1, constant: window.constant_staking_new5, liquidity: eth_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '14 December 2022', fee: 0.3})
const StakingNew2 = initStakingNew({token: window.token_new, staking: window.farming_new_2, constant: window.constant_staking_new6, liquidity: eth_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '14 December 2022', fee: 0.3})
const StakingNew3 = initStakingNew({token: window.token_new, staking: window.farming_new_3, constant: window.constant_staking_new7, liquidity: eth_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '14 December 2022', fee: 0.4})
const StakingNew4 = initStakingNew({token: window.token_new, staking: window.farming_new_4, constant: window.constant_staking_new8, liquidity: eth_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '14 December 2022', fee: 0.8})
const StakingNew5 = initStakingNew({token: window.token_new, staking: window.farming_new_5, constant: window.constant_staking_new9, liquidity: eth_address, lp_symbol:'USD', reward: '30,000', lock: '3 Days', rebase_factor: rebase_factors[0], expiration_time: '14 December 2022', fee: 1.2})

//Vesting & staking 3 months
const eth_address2 = 'ETH'
const Vesting = initVesting({ staking: window.constant_staking_200, buyers: true, apr: 0, liquidity: eth_address2, expiration_time: '16 February 2022' })
const VestingStaking = initVestingStaking({ staking: window.constant_staking_300, apr: 0, liquidity: eth_address2, expiration_time: '16 February 2022' })

//Constant Staking iDYP
const ConstantStakingiDYP1 = initConstantStakingiDYP({ staking: window.constant_staking_idyp_1, apr: 20, liquidity: eth_address, expiration_time: '28 February 2023' })
const ConstantStakingiDYP2 = initConstantStakingiDYP({ staking: window.constant_staking_idyp_2, apr: 45, liquidity: eth_address, expiration_time: '28 February 2023' })


let { BigNumber, LP_IDs, LP_IDs_V2 } = window

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            is_wallet_connected: false,
            the_graph_result: JSON.parse(JSON.stringify(window.the_graph_result)),
            the_graph_result_ETH_V2: JSON.parse(JSON.stringify(window.the_graph_result_eth_v2)),
            referrer: '',
            darkTheme: false,
            show: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    componentDidMount() {
        this.tvl().then()
    }

    tvl = async () => {
        try {
            let the_graph_result_ETH_V2 = await window.get_the_graph_eth_v2()
            this.setState({ the_graph_result_ETH_V2: JSON.parse(JSON.stringify(the_graph_result_ETH_V2)) })
        } catch (e) {
            // window.alertify.error("Cannot fetch TVL");
            console.error("TVL ETH V2 error: "+e)
        }

        try {
            let the_graph_result = await window.refresh_the_graph_result()
            this.setState({ the_graph_result: JSON.parse(JSON.stringify(the_graph_result)) })
        } catch (e) {
            // window.alertify.error("Cannot fetch TVL");
            console.error("Cannot fetch TVL: "+e)
        }
    }

    toggleTheme = () => {
        let darkTheme = !this.state.darkTheme
        document.body.classList[darkTheme?'add':'remove']('dark')
        this.setState({ darkTheme })
    }

    getCombinedTvlUsd =  () => {
        let tvl = 0
        if (!this.state.the_graph_result.lp_data) return 0

        let lp_ids = Object.keys(this.state.the_graph_result.lp_data)
        for (let id of lp_ids) {
            tvl += this.state.the_graph_result.lp_data[id].tvl_usd * 1 || 0
        }



        return tvl
    }

    getTvlFarming = () => {
        let tvl = 0
        if (!this.state.the_graph_result.lp_data) return 0

        tvl = window.TVL_FARMING_POOLS

        return tvl
    }

    getCombinedStakers = async () => {



        let stakers = 0
        if (!this.state.the_graph_result.lp_data) return 0
        let lp_ids = Object.keys(this.state.the_graph_result.lp_data)
        for (let id of lp_ids) {
          stakers += this.state.the_graph_result.lp_data[id].stakers_num*1 || 0
        }
        return stakers
    }

    handleConnection = async () => {
        this.hideModal()
        try {
          let is_wallet_connected = await window.connectWallet(undefined, false)
          let referrer = window.param('r')

          if (is_wallet_connected) {
              if (referrer) {
                  referrer = String(referrer).trim().toLowerCase()
              }
              if (!window.web3.utils.isAddress(referrer)) {
                  referrer = window.config.ZERO_ADDRESS
              }
          }
          this.setState({is_wallet_connected, coinbase: await window.web3.eth.getCoinbase(), referrer})

            window.wait(2000)

            try {
                let the_graph_result_ETH_V2 = await window.get_the_graph_eth_v2()
                this.setState({ the_graph_result_ETH_V2: JSON.parse(JSON.stringify(the_graph_result_ETH_V2)) })
            } catch (e) {
                // window.alertify.error("Cannot fetch TVL");
                console.error("TVL ETH V2 error: "+e)
            }

          try {
              let the_graph_result = await window.refresh_the_graph_result()
              this.setState({ the_graph_result: JSON.parse(JSON.stringify(the_graph_result)) })
          } catch (e) {
              // window.alertify.error("Cannot fetch TVL");
              console.error("Cannot fetch TVL: "+e)
          }
        } catch (e) {
          window.alertify.error(String(e))
        }
    }

    handleConnectionWalletConnect = async () => {
        try {

            let provider = new WalletConnectProvider({
                rpc: {
                    1: "https://mainnet.infura.io/v3/94608dc6ddba490697ec4f9b723b586e"
                }
            })

            let is_wallet_connected = await window.connectWallet(provider, true)
            //await setupnetwork()
            let referrer = window.param('r')

            if (is_wallet_connected) {
                if (referrer) {
                    referrer = String(referrer).trim().toLowerCase()
                }
                if (!window.web3.utils.isAddress(referrer)) {
                    referrer = window.config.ZERO_ADDRESS
                }
            }
            this.setState({is_wallet_connected, coinbase: await window.web3.eth.getCoinbase(), referrer})

            try {
                let the_graph_result_ETH_V2 = await window.get_the_graph_eth_v2()
                this.setState({ the_graph_result_ETH_V2: JSON.parse(JSON.stringify(the_graph_result_ETH_V2)) })
            } catch (e) {
                // window.alertify.error("Cannot fetch TVL");
                console.error("TVL ETH V2 error: "+e)
            }

            try {
                let the_graph_result = await window.refresh_the_graph_result()
                this.setState({ the_graph_result: JSON.parse(JSON.stringify(the_graph_result)) })
            } catch (e) {
                // window.alertify.error("Cannot fetch TVL");
                console.error("Cannot fetch TVL: "+e)
            }
        } catch (e) {
            window.alertify.error(String(e))
        }
    }

    render() {

      return (
        <div className="App App-header" style={{overflowX: "hidden"}}>
          <Header darkTheme={this.state.darkTheme} toggleTheme={this.toggleTheme} />

          <div style={{minHeight: '550px'}} className='App-container'>
              <Route exact path="/staking-stats" render={props => <StakingStats is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} {...props} />} />
              <Route exact path="/full-staking-stats" render={props => <FullStakingStats is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} {...props} />} />

              <Route exact path="/staking-eth" render={props => <StakingListEth is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={[LP_IDs.eth[0], LP_IDs.eth[1], LP_IDs.eth[2], LP_IDs.eth[3]]} {...props} />} />
              <Route exact path="/staking-eth-3" render={props => <Staking3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[0]} {...props} />} />
              <Route exact path="/staking-eth-30" render={props => <Staking30 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[1]} {...props} />} />
              <Route exact path="/staking-eth-60" render={props => <Staking60 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[2]} {...props} />} />
              <Route exact path="/staking-eth-90" render={props => <Staking90 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.eth[3]} {...props} />} />
              <Route exact path="/staking-wbtc" render={props => <StakingListWbtc is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={[LP_IDs.wbtc[0], LP_IDs.wbtc[1], LP_IDs.wbtc[2], LP_IDs.wbtc[3]]} {...props} />} />
              <Route exact path="/staking-wbtc-3" render={props => <StakingWbtc3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[0]} {...props} />} />
              <Route exact path="/staking-wbtc-30" render={props => <StakingWbtc30 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[1]} {...props} />} />
              <Route exact path="/staking-wbtc-60" render={props => <StakingWbtc60 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[2]} {...props} />} />
              <Route exact path="/staking-wbtc-90" render={props => <StakingWbtc90 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.wbtc[3]} {...props} />} />
              <Route exact path="/staking-usdc" render={props => <StakingListUsdc is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={[LP_IDs.usdc[0], LP_IDs.usdc[1], LP_IDs.usdc[2], LP_IDs.usdc[3]]} {...props} />} />
              <Route exact path="/staking-usdc-3" render={props => <StakingUsdc3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[0]} {...props} />} />
              <Route exact path="/staking-usdc-30" render={props => <StakingUsdc30 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[1]} {...props} />} />
              <Route exact path="/staking-usdc-60" render={props => <StakingUsdc60 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[2]} {...props} />} />
              <Route exact path="/staking-usdc-90" render={props => <StakingUsdc90 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdc[3]} {...props} />} />
              <Route exact path="/staking-usdt" render={props => <StakingListUsdt is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={[LP_IDs.usdt[0], LP_IDs.usdt[1], LP_IDs.usdt[2], LP_IDs.usdt[3]]} {...props} />} />
              <Route exact path="/staking-usdt-3" render={props => <StakingUsdt3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdt[0]} {...props} />} />
              <Route exact path="/staking-usdt-30" render={props => <StakingUsdt30 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdt[1]} {...props} />} />
              <Route exact path="/staking-usdt-60" render={props => <StakingUsdt60 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdt[2]} {...props} />} />
              <Route exact path="/staking-usdt-90" render={props => <StakingUsdt90 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} lp_id={LP_IDs.usdt[3]} {...props} />} />
              {/* <Route exact path="/staking-dai" render={props => <StakingDAI {...props} />} /> */}
              {/*<Route exact path='/' render={props => <StakingList tvl_all={getFormattedNumber(this.getCombinedTvlUsd(), 2)} tvl_farming={getFormattedNumber(this.getTvlFarming(), 2)} {...props} />} />*/}
              <Route exact path='/' render={props => <StakingNew5 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} lp_id={LP_IDs_V2.weth[4]} {...props} />} />
              <Route path='/governance' render={props => <Governance {...props} />} />

              <Route exact path='/constant-staking-30' render={props => <ConstantStaking30 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} referrer={this.state.referrer} {...props} />} />
              <Route exact path='/constant-staking-60' render={props => <ConstantStaking60 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} referrer={this.state.referrer} {...props} />} />
              <Route exact path='/constant-staking-90' render={props => <ConstantStaking90 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} referrer={this.state.referrer} {...props} />} />
              <Route exact path='/constant-staking-120' render={props => <ConstantStaking120 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} referrer={this.state.referrer} {...props} />} />
              <Route exact path="/constant-staking" render={props => <ConstantStakingList is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} {...props} />} />
              <Route exact path='/staking-buyback' render={props => <BuybackStaking is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} {...props} />} />
              <Route exact path='/referral-stats' render={props => <ReferralStats is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} staking_list={
                  [{
                      staking: window.constant_staking_30,
                      name: "Constant Staking 30"
                    }, {
                      staking: window.constant_staking_60,
                      name: "Constant Staking 60"
                    }, {
                      staking: window.constant_staking_90,
                      name: "Constant Staking 90"
                    }, {
                      staking: window.constant_staking_120,
                      name: "Constant Staking 120"
                    }
                  ]} the_graph_result={this.state.the_graph_result} {...props} />} />

              <Route exact path='/vst-private' render={props => <Vesting is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} referrer={this.state.referrer} {...props} />} />
              {/*<Route exact path='/vst-private-staking' render={props => <VestingStakin is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result} referrer={this.state.referrer} {...props} />} />*/}


              {/*Constant Staking New*/}
              <Route exact path='/constant-staking-1' render={props => <ConstantStaking1 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} referrer={this.state.referrer} {...props} />} />
              <Route exact path='/constant-staking-2' render={props => <ConstantStaking2 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} referrer={this.state.referrer} {...props} />} />

              {/*Constant Staking DYP -> DAI*/}
              <Route exact path='/constant-staking-3' render={props => <ConstantStakingDai is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} referrer={this.state.referrer} {...props} />} />

              {/*Buyback New*/}
              <Route exact path='/staking-buyback-1' render={props => <BuybackStaking1 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} {...props} />} />
              <Route exact path='/staking-buyback-2' render={props => <BuybackStaking2 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} {...props} />} />

              {/*Farming New*/}
              <Route exact path='/farming-new-1' render={props => <StakingNew1 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} lp_id={LP_IDs_V2.weth[0]} {...props} />} />
              <Route exact path='/farming-new-2' render={props => <StakingNew2 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} lp_id={LP_IDs_V2.weth[1]} {...props} />} />
              <Route exact path='/farming-new-3' render={props => <StakingNew3 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} lp_id={LP_IDs_V2.weth[2]} {...props} />} />
              <Route exact path='/farming-new-4' render={props => <StakingNew4 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} lp_id={LP_IDs_V2.weth[3]} {...props} />} />
              <Route exact path='/farming-new-5' render={props => <StakingNew5 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} lp_id={LP_IDs_V2.weth[4]} {...props} />} />

              <Route exact path="/staking-stats-new" render={props => <StakingStatsNew is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} {...props} />} />

              <Route exact path="/staking-idyp-1" render={props => <ConstantStakingiDYP1 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} referrer={this.state.referrer} {...props} />} />
              <Route exact path="/staking-idyp-2" render={props => <ConstantStakingiDYP2 is_wallet_connected={this.state.is_wallet_connected} handleConnection={this.handleConnection} handleConnectionWalletConnect={this.handleConnectionWalletConnect} the_graph_result={this.state.the_graph_result_ETH_V2} referrer={this.state.referrer} {...props} />} />

          </div>

          <Footer />

        </div>
      );
    }
}

export default App;
