import React from 'react'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import getFormattedNumber from '../functions/get-formatted-number'
import Address from './address'
import Clipboard from 'react-clipboard.js'
import ReactTooltip from 'react-tooltip'
import Boxes from './boxes'
import Popup from "./popup";
import Tooltip from "@material-ui/core/Tooltip";
import {Button} from "@material-ui/core";
import Modal from "./modal";

export default function initConstantStakingNew({ staking, apr, liquidity='ETH', lock, expiration_time }) {

    let { reward_token, BigNumber, alertify, reward_token_idyp, token_dyps } = window
    let token_symbol = 'DYP'

    // token, staking

    const TOKEN_DECIMALS = window.config.token_decimals

    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    function jsonToCsv(items) {
        const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
        const header = Object.keys(items[0])
        let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
        csv.unshift(header.join(','))
        csv = csv.join('\r\n')
        return csv
    }

    window.handleDownload = ({ stakers, stakingTimes, lastClaimedTimes, stakedTokens }) => {
        let list = []
        stakers.forEach((staker, index) => {
            list.push({
                staker_address: staker,
                staking_timestamp_unix: stakingTimes[index],
                lastclaimed_timestamp_unix: lastClaimedTimes[index],
                staking_time: getDate(stakingTimes[index] * 1e3),
                lastclaimed_time: getDate(lastClaimedTimes[index] * 1e3),
                staked_tokens: stakedTokens[index]
            })
        })
        download('stakers-list.csv', jsonToCsv(list))

        function getDate(timestamp) {
            let a = new Date(timestamp)
            return a.toUTCString()
        }
    }

    class Staking extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                token_balance: '',
                pendingDivs: '',
                totalEarnedTokens: '',
                cliffTime: '',
                stakingTime: '',
                depositedTokens: '',
                lastClaimedTime: '',

                depositAmount: '',
                withdrawAmount: '',

                coinbase: '',
                tvl: '',
                referralFeeEarned: '',
                stakingOwner: null,
                approxDeposit: 100 ,
                approxDays: 365,

                usdPerToken: '',

                contractDeployTime: '',
                disburseDuration: '',

                apy: 0,
                show: false,
                popup: false,
                is_wallet_connected: false

            }

            this.showModal = this.showModal.bind(this)
            this.hideModal = this.hideModal.bind(this)

            this.showPopup = this.showPopup.bind(this)
            this.hidePopup = this.hidePopup.bind(this)
        }


        showModal = () => {
            this.setState({ show: true })
        }

        hideModal = () => {
            this.setState({ show: false })

        }

        showPopup = () => {
            this.setState({ popup: true })
        }

        hidePopup = () => {
            this.setState({ popup: false })

        }

        handleListDownload = async (e) => {
            e.preventDefault()
            let m = window.alertify.message(`Processing...`)
            m.ondismiss = () => false
            let step = 100;
            let stakers = []
            let stakingTimes = []
            let lastClaimedTimes = []
            let stakedTokens = []
            let length = await staking.getNumberOfHolders()
            length = Number(length)
            try {
                for (let startIndex = 0; startIndex < length; startIndex += step) {
                    console.log({ startIndex, endIndex: startIndex + step })
                    let array = await staking.getStakersList(startIndex, Math.min(startIndex + step, length))
                    console.log(array)
                    stakers = stakers.concat(array.stakers)
                    stakingTimes = stakingTimes.concat(array.stakingTimestamps)
                    lastClaimedTimes = lastClaimedTimes.concat(array.lastClaimedTimeStamps)
                    stakedTokens = stakedTokens.concat(array.stakedTokens)
                }
                let result = { stakers, stakingTimes, lastClaimedTimes, stakedTokens }
                window.handleDownload(result)
            } catch (e) {
                console.error(e)
                alertify.error("Something went wrong while processing!")
            }
            finally {
                m.ondismiss = f => true
                m.dismiss()
            }
        }

        componentDidMount() {
            this.refreshBalance()
            window._refreshBalInterval = setInterval(this.refreshBalance, 3000)

            this.getPriceDYP()
        }

        getPriceDYP = async () => {
            let usdPerToken = await window.getPrice('defi-yield-protocol')
            this.setState({usdPerToken})
        }

        componentWillUnmount() {
            clearInterval(window._refreshBalInterval)
        }

        handleDeposit = (e) => {
            e.preventDefault()
            let amount = this.state.depositAmount
            amount = new BigNumber(amount).times(1e18).toFixed(0)
            staking.depositTOKEN(amount)
        }

        handleApprove = (e) => {
            e.preventDefault()
            let amount = this.state.depositAmount
            amount = new BigNumber(amount).times(1e18).toFixed(0)
            reward_token.approve(staking._address, amount)
        }
        // handleStake = (e) => {
        //     let amount = this.state.depositAmount
        //     amount = new BigNumber(amount).times(1e18).toFixed(0)
        //     let referrer = this.props.referrer
        //
        //     if (referrer) {
        //         referrer = String(referrer).trim().toLowerCase()
        //     }
        //
        //     if (!window.web3.utils.isAddress(referrer)) {
        //         referrer = window.config.ZERO_ADDRESS
        //     }
        //     staking.stake(amount, referrer)
        // }

        handleStake = async (e) => {
            e.preventDefault()

            let amount = this.state.depositAmount
            amount = new BigNumber(amount).times(1e18).toFixed(0)
            let referrer = this.props.referrer

            if (referrer) {
                referrer = String(referrer).trim().toLowerCase()
            }

            if (!window.web3.utils.isAddress(referrer)) {
                referrer = window.config.ZERO_ADDRESS
            }

            let referralFee = new BigNumber(amount).times(500).div(1e4).toFixed(0)
            //console.log({referralFee})
            //let selectedBuybackToken = this.state.selectedBuybackToken

            let deadline = Math.floor(Date.now()/1e3 + window.config.tx_max_wait_seconds)
            let router = await window.getUniswapRouterContract()
            let WETH = await router.methods.WETH().call()
            let platformTokenAddress = window.config.reward_token_address
            let rewardTokenAddress = window.config.reward_token_idyp_address
            let path = [...new Set([rewardTokenAddress, WETH, platformTokenAddress].map(a => a.toLowerCase()))]
            let _amountOutMin_referralFee = await router.methods.getAmountsOut(referralFee, path).call()
            //console.log({_amountOutMin_referralFee})
            _amountOutMin_referralFee = _amountOutMin_referralFee[_amountOutMin_referralFee.length - 1]
            _amountOutMin_referralFee = new BigNumber(_amountOutMin_referralFee).times(100 - window.config.slippage_tolerance_percent).div(100).toFixed(0)
            referralFee = referralFee - _amountOutMin_referralFee
            referralFee = referralFee.toString()

            console.log({amount, referrer, referralFee, deadline})

            staking.stake(amount, referrer, 0, deadline)
        }

        handleWithdraw = async (e) => {
            e.preventDefault()
            let amount = this.state.withdrawAmount
            amount = new BigNumber(amount).times(1e18).toFixed(0)

            let deadline = Math.floor(Date.now()/1e3 + window.config.tx_max_wait_seconds)

            staking.unstake(amount, 0, deadline)
        }

        handleClaimDivs = async (e) => {
            e.preventDefault()

            let address = this.state.coinbase
            let amount = await staking.getTotalPendingDivs(address)

            let router = await window.getUniswapRouterContract()
            let WETH = await router.methods.WETH().call()
            let platformTokenAddress = window.config.reward_token_address
            let rewardTokenAddress = window.config.reward_token_idyp_address
            let path = [...new Set([rewardTokenAddress, WETH, platformTokenAddress].map(a => a.toLowerCase()))]
            let _amountOutMin = await router.methods.getAmountsOut(amount, path).call()
            _amountOutMin = _amountOutMin[_amountOutMin.length - 1]
            _amountOutMin = new BigNumber(_amountOutMin).times(100 - window.config.slippage_tolerance_percent).div(100).toFixed(0)

            let referralFee = new BigNumber(_amountOutMin).times(500).div(1e4).toFixed(0)
            referralFee = referralFee.toString()

            let deadline = Math.floor(Date.now()/1e3 + window.config.tx_max_wait_seconds)

            console.log({referralFee, _amountOutMin, deadline})

            staking.claim(0, _amountOutMin, deadline)
        }

        handleSetMaxDeposit = (e) => {
            e.preventDefault()
            this.setState({ depositAmount: new BigNumber(this.state.token_balance).div(1e18).toFixed(18) })
        }
        handleSetMaxWithdraw = (e) => {
            e.preventDefault()
            this.setState({ withdrawAmount: new BigNumber(this.state.depositedTokens).div(1e18).toFixed(18) })
        }

        getAPY = () => {
            return apr
        }

        refreshBalance = async () => {
            let coinbase = window.coinbase_address
            this.setState({ coinbase })

            let lp_data = this.props.the_graph_result.token_data
            //console.log({lp_data})

            //Calculate APY
            let { the_graph_result } = this.props
            let usd_per_token = the_graph_result.token_data ? the_graph_result.token_data["0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"].token_price_usd : 1
            let usd_per_idyp = the_graph_result.token_data ? the_graph_result.token_data["0xbd100d061e120b2c67a24453cf6368e63f1be056"].token_price_usd : 1
            let usd_per_dyps = the_graph_result.price_DYPS ? the_graph_result.price_DYPS : 1
            let apy = new BigNumber(apr).div(1e2).times(usd_per_idyp).div(usd_per_token).times(1e2).toFixed(2)

            this.setState({apy})

            try {
                let amount = new BigNumber(1000000000000000000).toFixed(0)
                let router = await window.getUniswapRouterContract()
                let WETH = await router.methods.WETH().call()
                let platformTokenAddress = window.config.USDC_address
                let rewardTokenAddress = window.config.reward_token_idyp_address
                let path = [...new Set([rewardTokenAddress, WETH, platformTokenAddress].map(a => a.toLowerCase()))]
                let _amountOutMin = await router.methods.getAmountsOut(amount, path).call()
                _amountOutMin = _amountOutMin[_amountOutMin.length - 1]
                _amountOutMin = new BigNumber(_amountOutMin).div(1e6).toFixed(18)

                let _bal = reward_token.balanceOf(coinbase)
                let _pDivs = staking.getTotalPendingDivs(coinbase)
                let _tEarned = staking.totalEarnedTokens(coinbase)
                let _stakingTime = staking.stakingTime(coinbase)
                let _dTokens = staking.depositedTokens(coinbase)
                let _lClaimTime = staking.lastClaimedTime(coinbase)
                let _tvl = reward_token.balanceOf(staking._address)
                let _rFeeEarned = staking.totalReferralFeeEarned(coinbase)
                let tStakers = staking.getNumberOfHolders()

                //Take iDYP Balance on Staking
                let _tvlConstantiDYP = reward_token_idyp.balanceOf(staking._address) /* TVL of iDYP on Staking */

                //Take DYPS Balance
                let _tvlDYPS = token_dyps.balanceOf(staking._address) /* TVL of DYPS */

                let [token_balance, pendingDivs, totalEarnedTokens, stakingTime,
                    depositedTokens, lastClaimedTime, tvl,
                    referralFeeEarned, total_stakers, tvlConstantiDYP, tvlDYPS
                ] = await Promise.all([_bal, _pDivs, _tEarned, _stakingTime, _dTokens, _lClaimTime, _tvl, _rFeeEarned, tStakers, _tvlConstantiDYP, _tvlDYPS])

                //console.log({tvl, tvlConstantiDYP, _amountOutMin})

                let usdValueiDYP = new BigNumber(tvlConstantiDYP).times(_amountOutMin).toFixed(18)
                let usdValueDYPS = new BigNumber(tvlDYPS).times(usd_per_dyps).toFixed(18)
                let usd_per_lp = lp_data ? lp_data[window.reward_token["_address"]].token_price_usd : 0
                let tvlUSD = new BigNumber(tvl).times(usd_per_lp).plus(usdValueiDYP).plus(usdValueDYPS).toFixed(18)
                //console.log({tvlUSD})

                this.setState({
                    token_balance,
                    pendingDivs,
                    totalEarnedTokens,
                    stakingTime,
                    depositedTokens,
                    lastClaimedTime,
                    tvl,
                    referralFeeEarned,
                    total_stakers,
                    tvlUSD
                })
                let stakingOwner = await staking.owner()
                this.setState({ stakingOwner })
            } catch (e) {
                console.error(e)
            }


            staking.LOCKUP_TIME().then((cliffTime) => {
                this.setState({ cliffTime: Number(cliffTime) })
            }).catch(console.error)

            staking.contractStartTime().then(contractDeployTime => {
                this.setState({ contractDeployTime })
            })

            staking.REWARD_INTERVAL().then(disburseDuration => {
                this.setState({ disburseDuration })
            })

        }

        getUsdPerETH = () => {
            return this.props.the_graph_result.usd_per_eth || 0
        }

        getApproxReturn = () => {
            let approxDays = this.state.approxDays
            let approxDeposit = this.state.approxDeposit

            return ( approxDeposit * this.state.apy / 100 / 365 * approxDays)
        }

        getReferralLink = () => {
            return window.location.origin + window.location.pathname + '?r=' + this.state.coinbase
        }

        handleReinvest = async (e) => {
            e.preventDefault()

            let address = this.state.coinbase
            let amount = await staking.getTotalPendingDivs(address)

            let router = await window.getUniswapRouterContract()
            let WETH = await router.methods.WETH().call()
            let platformTokenAddress = window.config.reward_token_address
            let rewardTokenAddress = window.config.reward_token_idyp_address
            let path = [...new Set([rewardTokenAddress, WETH, platformTokenAddress].map(a => a.toLowerCase()))]
            let _amountOutMin = await router.methods.getAmountsOut(amount, path).call()
            _amountOutMin = _amountOutMin[_amountOutMin.length - 1]
            _amountOutMin = new BigNumber(_amountOutMin).times(100 - window.config.slippage_tolerance_percent).div(100).toFixed(0)

            let referralFee = new BigNumber(_amountOutMin).times(500).div(1e4).toFixed(0)
            referralFee = referralFee.toString()

            // _amountOutMin = _amountOutMin - referralFee
            // _amountOutMin = _amountOutMin.toString()

            let deadline = Math.floor(Date.now()/1e3 + window.config.tx_max_wait_seconds)

            console.log({referralFee, _amountOutMin, deadline})

            staking.reInvest(0, _amountOutMin, deadline)
        }

        render() {

            let {disburseDuration, contractDeployTime, cliffTime, referralFeeEarned, token_balance, pendingDivs, totalEarnedTokens, depositedTokens, stakingTime, coinbase, tvl } = this.state

            token_balance = new BigNumber(token_balance ).div(1e18).toString(10)
            token_balance = getFormattedNumber(token_balance, 6)

            let { the_graph_result } = this.props

            let usd_per_token = the_graph_result.token_data ? the_graph_result.token_data["0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"].token_price_usd : 1
            let usd_per_idyp = the_graph_result.token_data ? the_graph_result.token_data["0xbd100d061e120b2c67a24453cf6368e63f1be056"].token_price_usd : 1

            pendingDivs = new BigNumber(pendingDivs).div(10 ** TOKEN_DECIMALS).times(usd_per_idyp).div(usd_per_token).toString(10)
            pendingDivs = getFormattedNumber(pendingDivs, 6)

            totalEarnedTokens = new BigNumber(totalEarnedTokens).div(10 ** TOKEN_DECIMALS).toString(10)
            totalEarnedTokens = getFormattedNumber(totalEarnedTokens, 6)

            referralFeeEarned = getFormattedNumber(referralFeeEarned/1e18, 6)

            depositedTokens = new BigNumber(depositedTokens).div(1e18).toString(10)
            depositedTokens = getFormattedNumber(depositedTokens, 6)

            tvl = new BigNumber(tvl ).div(1e18).toString(10)
            tvl = getFormattedNumber(tvl, 6)

            stakingTime = stakingTime * 1e3
            cliffTime = cliffTime * 1e3

            let showDeposit = true

            if (!isNaN(disburseDuration) && !isNaN(contractDeployTime)){
                let lastDay = parseInt(disburseDuration) + parseInt(contractDeployTime)
                let lockTimeExpire = parseInt(Date.now()) + parseInt(cliffTime)
                lockTimeExpire = lockTimeExpire.toString().substr(0,10)
                //console.log("now " + lockTimeExpire)
                //console.log('last ' + lastDay)
                if (lockTimeExpire > lastDay) {
                    showDeposit = false
                }
            }

            let cliffTimeInWords = 'lockup period'

            let canWithdraw = true
            if (!isNaN(cliffTime) && !isNaN(stakingTime)) {
                if (Date.now() - stakingTime <= cliffTime) {
                    canWithdraw = false
                    cliffTimeInWords = moment.duration((cliffTime - (Date.now() - stakingTime))).humanize(true)
                }
            }

            let total_stakers = this.state.total_stakers
            //let tvl_usd = this.state.tvl / 1e18 * this.state.usdPerToken
            let tvl_usd = this.state.tvlUSD / 1e18

            tvl_usd = getFormattedNumber(tvl_usd, 2)
            total_stakers = getFormattedNumber(total_stakers, 0)

            //console.log(total_stakers)

            let isOwner = String(this.state.coinbase).toLowerCase() === String(window.config.admin_address).toLowerCase()

            let id = Math.random().toString(36)


            // let apy = new BigNumber(apr).div(1e2).times(usd_per_idyp).div(usd_per_token).times(1e2).toFixed(2)

            //this.setState({apy})

            let is_connected = false

            if(coinbase !== "0x0000000000000000000000000000000000000111")
            {
                is_connected = true
            }

            let infoItems = [
                "75% from your deposit is added to PancakeSwap V2 BNB/iDYP LP",
                "25% from your deposit is sent to DYP Staking with % APR"
            ]
            let tooltip1 = infoItems.join('\n')

            let infoItems2 = [
                "75% WBNB/ETH rewards",
                "25% DYP rewards"
            ]
            let tooltip2 = infoItems2.join('\n')

            return (<div>

                    <div className='row'>

                        <div className="col-12" style={{background: 'url(img/banner/dyp_farming-22.svg)', backgroundSize: 'cover', resize: 'both'}}>
                            <div className="container">
                                <Popup show={this.state.popup} handleClose={this.hidePopup} >
                                    <div className="earn-hero-content p4token-wrapper">
                                        <p className='h3'><b>Maximize your Yield Farming Rewards</b></p>
                                        <p>Automatically adds liquidity to
                                            <Tooltip placement="top" title={<div style={{ whiteSpace: 'pre-line' }}>{tooltip1}</div>}>
                                                <Button style={{fontSize: '70%', textDecoration: 'underline', color:  'var(--color_white)'}}>
                                                    PancakeSwap V2 & deposit to Staking </Button>
                                            </Tooltip>
                                            contract using one asset. To start earning, all you need is to deposit
                                            one of the supported assets (WBNB, BTCB, ETH, BUSD, CAKE, or iDYP) and earn
                                            <Tooltip placement="top" title={<div style={{ whiteSpace: 'pre-line' }}>{tooltip2}</div>}>
                                                <Button style={{fontSize: '70%', textDecoration: 'underline', color:  'var(--color_white)', padding: '4px 0px 2px 5px'}}>
                                                    WBNB/ETH/DYP as rewards.</Button>
                                            </Tooltip>
                                        </p>
                                        <p>All pool rewards are automatically converted from iDYP to WBNB by the
                                            smart contract, decreasing the risk of iDYP price volatility.
                                            <Tooltip placement="top" title={<div style={{ whiteSpace: 'pre-line' }}>{tooltip2}</div>}>
                                                <Button style={{fontSize: '70%', textDecoration: 'underline', color:  'var(--color_white)'}}>
                                                    WBNB/ETH + DYP </Button>
                                            </Tooltip>
                                            is a double reward to the liquidity providers. The users can
                                            choose between two different types of rewards: WBNB or ETH. Maintaining
                                            token price stability — every 24 hours, the smart contract will
                                            automatically try converting the iDYP rewards to WBNB. If the iDYP
                                            price is affected by more than
                                            <img src='/img/arrow.svg' alt="images not found" />2.5%, then the
                                            maximum iDYP amount not influencing the price will be swapped to WBNB,
                                            with the remaining amount distributed in the next day’s rewards. After
                                            seven days, if we still have undistributed iDYP rewards, the DeFi Yield
                                            Protocol governance will vote on whether the remaining iDYP will be
                                            distributed to the token holders or burned (all burned tokens are out
                                            of circulation).</p>
                                        <p>You will receive the total amount in the initial deposit asset with
                                            withdrawal by burning LP tokens when you unstake.</p>
                                    </div>

                                </Popup>
                                <Modal show={this.state.show} handleConnection={this.props.handleConnection} handleConnectionWalletConnect={this.props.handleConnectionWalletConnect} handleClose={this.hideModal} />
                                <div className='row'>
                                    <div className='col-12' style={{marginBottom: '30px'}}>
                                        <p style={{width: '100%', height: 'auto', fontFamily: 'Mulish', fontStyle: 'normal', fontWeight: '900', fontSize: '42px', lineHeight: '55px', color: '#FFFFFF', marginTop: '35px', maxHeight: '55px'}} >Farming pool</p>
                                    </div>
                                    <div className='col-6' style={{marginBottom: '27px'}}>
                                        <div className='row'>
                                            <div style={{paddingRight: '15px'}} className='col-6 button'>
                                                <button onClick={this.showPopup}
                                                        className='btn  btn-block btn-primary button' type='button'>
                                                    <img src="img/icon/bulb.svg" style={{float: 'left'}}
                                                         alt="wallet" />
                                                    Farming info
                                                </button>
                                            </div>
                                            <div style={{paddingLeft: '20px'}} className='col-6'>
                                                <button className onClick={()=> window.open("https://www.youtube.com/watch?v=2pOUmRTMN1o", "_blank")}
                                                        className='btn  btn-block btn-primary l-outline-btn button'
                                                        type='submit'>
                                                    <img src="img/icon/video.svg" style={{float: 'left'}}
                                                         alt="wallet" />
                                                    Video tutorial
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='container'>
                            <div className='token-staking mt-5'>
                                <div className='row'>
                                    <div className="col-12">
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <div className='row token-staking-form'>
                                                    <div className="col-12">
                                                        <div className="l-box" style={{padding: '0.5rem'}}>
                                                            {is_connected ?
                                                                <div className="row">
                                                                    <div className="col-7" style={{marginTop: '0px'}}>
                                                                        <img src="img/connected.png" style={{marginRight: '10px', marginTop: '3px'}}
                                                                             alt="wallet" />
                                                                        <span htmlFor="deposit-amount" style={{margin: '0', top: '3px', position: 'relative'}}>
                                                                    Wallet has been connected
                                                                </span>
                                                                    </div>
                                                                    <div className="col-5 text-right">
                                                                        <div style={{marginTop: '5px', paddingRight: '15px'}}>
                                                                            <Address style={{fontFamily: 'monospace'}} a={coinbase} />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className="row">
                                                                    <div className="col-8" style={{marginTop: '0px'}}>
                                                                        <img src="img/icon/wallet.svg" style={{marginRight: '10px', marginTop: '3px'}}
                                                                             alt="wallet" />
                                                                        <label htmlFor="deposit-amount" style={{margin: '0', top: '3px', position: 'relative'}}>
                                                                            Please connect wallet to use this dApp
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <button type="submit" onClick={this.showModal} className="btn  btn-block btn-primary l-outline-btn">
                                                                            Connect Wallet
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-xs-12'>
                                                <div className='row token-staking-form'>
                                                    <div className="col-12 padding-mobile">
                                                        <div className="" style={{background: 'linear-gradient(257.76deg, #32B1F7 6.29%, #1D91D0 93.71%)',
                                                            boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.06)', borderRadius: '6px', paddingLeft: '5px', padding: '10px'}}>
                                                            <div className="row">
                                                                <div style={{marginTop: '0px', paddingLeft: ''}} className='col-3'>
                                                                    <img src="img/icon/eth.svg"
                                                                         style={{marginRight: '10px', marginTop: '5px'}}
                                                                         alt="wallet" />
                                                                    <label htmlFor="deposit-amount"
                                                                           style={{margin: '0px', top: '3px', position: 'relative', color: 'white'}}>
                                                                        ETH Yield
                                                                    </label>
                                                                </div>
                                                                <div className="col-9">
                                                                    <div className='row' >
                                                                        <div className='col-6' style={{margin : '0px', padding: '0px'}}>
                                                                            <div className='test'>
                                                                                <div className='tvl_test'>
                                                                                    TVL USD <span className='testNumber'>$ {tvl_usd} </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className='col-5' style={{marginLeft : '10px', padding: '0px'}}>
                                                                            <div className='test'>
                                                                                <div className='tvl_test'>
                                                                                    APR <span className='testNumber'> <img src='img/icon/vector.svg' /> {getFormattedNumber(this.state.apy, 2)}% </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-lg-6'>
                                        <div className='row token-staking-form'>

                                            <div className='col-12'>
                                                <div className='l-box'>
                                                    {showDeposit == true ?
                                                        <form onSubmit={e => e.preventDefault()}>
                                                            <div className='form-group'>
                                                                <div className='row'>
                                                                    <label htmlFor='deposit-amount'
                                                                           className='col-md-8 d-block text-left'>DEPOSIT</label>
                                                                    <div className='col-4'>
                                                                        <a target='_blank' rel='noopener noreferrer'
                                                                           href={`https://app.uniswap.org/#/swap?use=V2&inputCurrency=${liquidity}&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17`}>
                                                                            <button
                                                                                className='btn btn-sm btn-block btn-primary l-outline-btn'
                                                                                type='button'>
                                                                                GET DYP
                                                                            </button>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className='input-group '>
                                                                    <input
                                                                        value={Number(this.state.depositAmount) > 0 ? this.state.depositAmount : this.state.depositAmount}
                                                                        onChange={e => this.setState({depositAmount: e.target.value})}
                                                                        className='form-control left-radius' placeholder='0'
                                                                        type='text'/>
                                                                    <div className='input-group-append'>
                                                                        <button
                                                                            className='btn  btn-primary right-radius btn-max l-light-btn'
                                                                            style={{cursor: 'pointer'}}
                                                                            onClick={this.handleSetMaxDeposit}>
                                                                            MAX
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div style={{paddingRight: '0.3rem'}} className='col-6'>
                                                                    <button onClick={this.handleApprove}
                                                                            className='btn  btn-block btn-primary '
                                                                            type='button'>
                                                                        APPROVE
                                                                    </button>
                                                                </div>
                                                                <div style={{paddingLeft: '0.3rem'}} className='col-6'>
                                                                    <button onClick={this.handleStake}
                                                                            className='btn  btn-block btn-primary l-outline-btn'
                                                                            type='submit'>
                                                                        DEPOSIT
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <p style={{fontSize: '.8rem'}}
                                                               className='mt-1 text-center mb-0 text-muted mt-3'>
                                                                {/* Some info text here.<br /> */}
                                                                Please approve before staking. 0% fee for deposit.
                                                            </p>

                                                        </form>
                                                        :
                                                        <div className='row'>
                                                            <div className='col-md-12 d-block text-muted small'
                                                                 style={{fontSize: '15px'}}>
                                                                <b>NOTE:</b>
                                                            </div>
                                                            <div className='col-md-12 d-block text-muted small' style={{fontSize: '15px'}}>
                                                                Deposit not available because the contract expires faster than the pool lock time.
                                                            </div>
                                                            <div className='col-md-12 d-block mb-0 text-muted small'
                                                                 style={{fontSize: '15px'}}>
                                                                New contracts with improved strategies are coming soon, waiting for security audit results.
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='l-box'>
                                                    <form onSubmit={this.handleWithdraw}>
                                                        <div className='form-group'>
                                                            <label htmlFor='deposit-amount' className='d-block text-left'>WITHDRAW</label>
                                                            <div className='input-group '>
                                                                <input value={this.state.withdrawAmount} onChange={e => this.setState({ withdrawAmount:e.target.value })} className='form-control left-radius' placeholder='0' type='text' />
                                                                <div className='input-group-append'>
                                                                    <button className='btn  btn-primary right-radius btn-max l-light-btn' style={{ cursor: 'pointer' }} onClick={this.handleSetMaxWithdraw}>
                                                                        MAX
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button title={canWithdraw ? '' : `You recently staked, you can unstake ${cliffTimeInWords}`} disabled={!canWithdraw} className='btn  btn-primary btn-block l-outline-btn' type='submit'>
                                                            WITHDRAW
                                                        </button>
                                                        <p style={{fontSize: '.8rem'}} className='mt-1 text-center text-muted mt-3'>0% fee for withdraw</p>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='l-box'>
                                                    <form onSubmit={this.handleClaimDivs}>
                                                        <div className='form-group'>
                                                            <label htmlFor='deposit-amount' className='text-left d-block'>REWARDS</label>
                                                            <div className='form-row'>
                                                                {/* <div className='col-md-6'>
                                                        <p className='form-control  text-right' style={{ border: 'none', marginBottom: 0, paddingLeft: 0, background: 'transparent', color: '#222' }}><span style={{ fontSize: '1.2rem', color: 'rgb(255, 0, 122)' }}>{pendingDivsEth}</span> <small className='text-bold'>WETH</small></p>
                                                    </div> */}
                                                                <div className='col-md-12'>
                                                                    {/*<p className='form-control  text-right' style={{ border: 'none', marginBottom: 0, paddingLeft: 0, background: 'transparent', color: 'var(--text-color)' }}><span style={{ fontSize: '1.2rem', color: 'var(--text-color)' }}>{pendingDivs}</span> <small className='text-bold'>DYP</small></p>*/}
                                                                    <input value={Number(pendingDivs) > 0 ? `${pendingDivs} DYP` : `${pendingDivs} DYP`} onChange={e => this.setState({pendingDivs: Number(e.target.value) > 0 ? e.target.value : e.target.value})} className='form-control left-radius' placeholder='0' type='text' disabled />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='form-row'>
                                                            <div className='col-md-6 mb-2'>
                                                                <button className='btn  btn-primary btn-block ' type='submit'>
                                                                    CLAIM
                                                                </button>
                                                            </div>
                                                            <div className='col-md-6 mb-2'>
                                                                <button className='btn  btn-primary btn-block l-outline-btn' type='button' onClick={this.handleReinvest}>
                                                                    REINVEST
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='l-box'>
                                                    <form onSubmit={(e) => e.preventDefault()}>
                                                        <div className='form-group'>
                                                            <label htmlFor='deposit-amount' className='d-block text-left'>RETURN CALCULATOR</label>
                                                            <div className='row'>
                                                                <div className='col'>
                                                                    <label style={{ fontSize: '1rem', fontWeight: 'normal' }}>DYP to Deposit</label>
                                                                    <input className='form-control ' value={ this.state.approxDeposit} onChange={e => this.setState({ approxDeposit: e.target.value })} placeholder='0' type='text' />
                                                                </div>
                                                                <div className='col'>
                                                                    <label style={{ fontSize: '1rem', fontWeight: 'normal' }}>Days</label>
                                                                    <input className='form-control ' value={this.state.approxDays} onChange={e => this.setState({ approxDays: e.target.value })} type='text' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>
                                                            Approx. {getFormattedNumber(this.getApproxReturn(), 6)} DYP
                                                        </p>
                                                        {/*<p style={{ fontSize: '.8rem' }} className='mt-1 text-center'>Approx. Value Not Considering Staking / Unstakig Fees.</p>*/}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='l-box'>
                                            <div className='table-responsive'>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', padding: '.3rem' }}>STATS</h3>
                                                <table className='table-stats table table-sm table-borderless'>
                                                    <tbody>
                                                    {/*<tr>*/}
                                                    {/*    <th>My Address</th>*/}
                                                    {/*    <td className='text-right'>*/}
                                                    {/*        <Address style={{ fontFamily: 'monospace' }} a={coinbase} />*/}
                                                    {/*    </td>*/}
                                                    {/*</tr>*/}
                                                    {/*<tr>*/}
                                                    {/*    <th>Contract Address</th>*/}
                                                    {/*    <td className='text-right'>*/}
                                                    {/*        <Address style={{ fontFamily: 'monospace' }} a={staking._address} />*/}
                                                    {/*    </td>*/}
                                                    {/*</tr>*/}

                                                    <tr>
                                                        <th>Contract Expiration</th>
                                                        <td className="text-right"><strong>{expiration_time}</strong></td>
                                                    </tr>

                                                    <tr>
                                                        <th>My DYP Balance</th>
                                                        <td className="text-right"><strong>{token_balance}</strong> <small>{token_symbol}</small></td>
                                                    </tr>

                                                    <tr>
                                                        <th>MY DYP Deposit</th>
                                                        <td className="text-right"><strong>{depositedTokens}</strong> <small>{token_symbol}</small></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total DYP Locked</th>
                                                        <td className="text-right"><strong>{tvl}</strong> <small>{token_symbol}</small></td>
                                                    </tr>

                                                    {/*<tr>*/}
                                                    {/*    <th>Total Earned DYP</th>*/}
                                                    {/*    <td className="text-right"><strong>{totalEarnedTokens}</strong> <small>DYP</small></td>*/}
                                                    {/*</tr>*/}
                                                    <tr>
                                                        <th>Referral Fee Earned</th>
                                                        <td className="text-right"><strong>{referralFeeEarned}</strong> <small>DYP</small></td>
                                                    </tr>
                                                    <tr>
                                                        <th>TVL USD</th>
                                                        <td className="text-right"><strong>${tvl_usd}</strong> <small>USD</small></td>
                                                    </tr>
                                                    {/* <tr>
                                               <th>Total Stakers</th>
                                               <td className="text-right"><strong>{total_stakers}</strong> <small></small></td>
                                            </tr> */}
                                                    {/* <tr>
                                        <th>Pending</th>
                                        <td className="text-right"><strong>{pendingDivs}</strong> <small>DYP</small></td>
                                    </tr> */}

                                                    <tr>
                                                        <td style={{ fontSize: '1rem', paddingTop: '2rem' }} colSpan='2' className='text-center'>
                                                            <a target='_blank' rel='noopener noreferrer' href={`${window.config.etherscan_baseURL}/token/${reward_token._address}?a=${coinbase}`}>View Transaction History on Etherscan</a> &nbsp; <i style={{ fontSize: '.8rem' }} className='fas fa-external-link-alt'></i>
                                                        </td>
                                                    </tr>
                                                    {/*<tr>*/}
                                                    {/*    <td style={{ fontSize: '1rem' }} colSpan='2' className='text-center'>*/}
                                                    {/*    <span className='lp-link'>*/}
                                                    {/*        <NavLink style={{fontSize: '1rem'}} to='/referral-stats'>View Referral Stats</NavLink>*/}
                                                    {/*    </span>*/}
                                                    {/*    </td>*/}
                                                    {/*</tr>*/}
                                                    <tr>
                                                        <td colSpan='2'>
                                                            <div><span style={{fontSize: '.8rem'}}>

                                                        <span style={{ cursor: "pointer" }}>
                                                            <Clipboard
                                                                component="span"
                                                                onSuccess={e => {
                                                                    setTimeout(() => ReactTooltip.hide(), 2000);
                                                                }} data-event="click" data-for={id} data-tip="Copied To Clipboard!" data-clipboard-text={this.getReferralLink()}>Referral Link:  &nbsp; <span

                                                                title="Copy link to clipboard"
                                                                style={{
                                                                    cursor: 'pointer'
                                                                }} className="fas fa-paste"></span></Clipboard>
                                                            <ReactTooltip id={id} effect="solid" />
                                                        </span>


                                                        <br /><a className='text-muted small' href={this.getReferralLink()}> {this.getReferralLink()} </a></span></div>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                    </tr>
                                                    {isOwner && <tr>
                                                        <td style={{ fontSize: '1rem' }} colSpan='2' className='text-center'>
                                                            <a onClick={this.handleListDownload} target='_blank' rel='noopener noreferrer' href='#'><i style={{ fontSize: '.8rem' }} className='fas fa-download'></i> Download Stakers List </a>
                                                        </td>
                                                    </tr>}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* <div className='mt-3 text-center'>
                    <p><small>Some info text here</small></p>
                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    }


    return Staking
}
