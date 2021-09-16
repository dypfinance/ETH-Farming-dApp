import React from 'react'
import { NavLink } from 'react-router-dom'

const checkLinkReturnApy = (link,apy) => {

    if (apy == undefined) return 0

    let pair = link.split('-')[1]
    //console.log(pair)

    if (pair.localeCompare('staking')==0){
        return 'APR 35'
    }

    if (pair.localeCompare('buyback')==0){
        return 'APR 100'
    }

    return 'APY ' + apy[pair]
}

const VaultCard = ({logo, link, name, logo1, apys}) => (
    <NavLink to={link}>
        <div className='container vault-container'>
            <div className='row vault-row'>
                <div className='col-sm-2 col-md-1 text-center'>
                    <img className='mb-3' src={logo} height='45' width='45' style={{objectFit: 'contain'}} />
                </div>
                <div style={{whiteSpace: 'pre-line'}} className='col-sm-3 col-md-4'>
                    <span className='vault-name'>{name} </span>
                </div>
                <div className='col-sm-4' style={{ fontWeight: 'bold' }}>
                    {checkLinkReturnApy(link,apys)}%
                </div>
                <div className="col-sm-3 text-right">
                    <h4>REWARDS</h4>
                    {/*<img className="mb-3" src={logo1} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0' }} />{' '}*/}
                    <img className="mb-3" src={logo1} style={{ objectFit: 'contain', height: '20px', width: '20px', margin: '0', marginLeft: '1px' }} />{' '}
                </div>
            </div>
        </div>
    </NavLink>
)

let vaults = window.vaults
let vaultsFarming = window.vaultsFarming

export default class VaultList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.hashMapMax()
    }

    hashMapMax = async () => {

        let maxApy = await window.getHashMapApy()
        maxApy = new Map(JSON.parse(maxApy.Ethereum))

        let auxEth = 0, maxEth = 0, auxWbtc = 0, maxWbtc = 0, auxUsdc = 0, maxUsdc = 0, auxUsdt = 0, maxUsdt = 0
        let maxApyArray = []

        for (let [key, value] of maxApy.entries()) {
            let pair = key.split('_')[0]

            if ('eth'.localeCompare(pair) == 0){
                auxEth = parseFloat(value)

                if (maxEth <= auxEth)
                    maxEth = auxEth
            }

            if ('wbtc'.localeCompare(pair) == 0){
                auxWbtc = parseFloat(value)

                if (maxWbtc <= auxWbtc)
                    maxWbtc = auxWbtc
            }

            if ('usdc'.localeCompare(pair) == 0){
                auxUsdc = parseFloat(value)

                if (maxUsdc <= auxUsdc)
                    maxUsdc = auxUsdc
            }

            if ('usdt'.localeCompare(pair) == 0){
                auxUsdt = parseFloat(value)

                if (maxUsdt <= auxUsdt)
                    maxUsdt = auxUsdt
            }

        }

        maxApyArray['eth'] = maxEth
        maxApyArray['wbtc'] = maxWbtc
        maxApyArray['usdc'] = maxUsdc
        maxApyArray['usdt'] = maxUsdt

        let maxApyArrays = maxApyArray
        this.setState({maxApyArrays})

        return maxApyArray
    }

    render() {
        return (
            <div className="">
                
                <div className='container'>
                    <div>
                        <h3 className='text-center mt-5' style={{fontWeight: 600}}>Farming Pools</h3>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div className='l-box mb-0' style={{display: 'grid', maxWidth: '100%', width: '250px'}}>
                                <p className='text-center text-muted small' style={{margin: '0'}}>
                                    Total Value Locked
                                    {/*TVL: ${getFormattedNumber(this.getCombinedTvlUsd(), 2)}, Total Stakers: {getFormattedNumber(this.getCombinedStakers(), 0)}*/}
                                </p>
                                <p className='text-center' style={{margin: '0', fontSize: '1.5rem', fontWeight: 'bold'}}>
                                    ${this.props.tvl_all}
                                </p>
                            </div>
                        </div>
                        <div className='vaults-list'>
                            {vaults.filter(v => !v.hidden).map((props,i) => <VaultCard {...props} apys={this.state.maxApyArrays} key={i} />)}
                        </div>
                    </div>
                    <div>
                        <h3 className='text-center mt-0' style={{fontWeight: 600}}>Staking Pools</h3>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div className='l-box mb-0' style={{display: 'grid', maxWidth: '100%', width: '250px'}}>
                                <p className='text-center text-muted small' style={{margin: '0'}}>
                                    Total Value Locked
                                    {/*TVL: ${getFormattedNumber(this.getCombinedTvlUsd(), 2)}, Total Stakers: {getFormattedNumber(this.getCombinedStakers(), 0)}*/}
                                </p>
                                <p className='text-center' style={{margin: '0', fontSize: '1.5rem', fontWeight: 'bold'}}>
                                    ${this.props.tvl_farming}
                                </p>
                            </div>
                        </div>
                        <div className='vaults-farming-list'>
                            {vaultsFarming.filter(v => !v.hidden).map((props,i) => <VaultCard {...props} apys={this.state.maxApyArrays} key={i} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}