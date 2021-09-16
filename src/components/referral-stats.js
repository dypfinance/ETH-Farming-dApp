import React from 'react'

class ReferralStat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalStakersList: [],
            activeStakersList: [],
            totalStakersCount: '',
            activeStakersCount: '',
            isLoading: true
        }
    }

    componentDidMount() {
        this.refreshStakersList()
    }

    refreshStakersList = async () => {
        let coinbase = await window.getCoinbase()
        let referredStakers = await this.props.staking.getNumberOfReferredStakers(coinbase)
        let totalStakersCount = referredStakers._totalStakers
        let activeStakersCount = referredStakers._activeStakers
        this.setState({
            totalStakersCount,
            activeStakersCount
        })

        if (this.state.isLoading && this.state.totalStakersList.length > 0) return;
        this.setState({ isLoading: true })

        try {
            {
                let total_stakers = Number(totalStakersCount)
                let totalStakersList = this.state.totalStakersList
                let newStakersList = []
                let step = window.config.max_referral_addresses_per_call

                for (let i = total_stakers - 1 - totalStakersList.length; i >= Math.max(0, total_stakers - totalStakersList.length - step); i--) {
                    newStakersList.push(this.props.staking.getReferredStaker(coinbase, i))
                }
                newStakersList = await Promise.all(newStakersList)

                totalStakersList = totalStakersList.concat(newStakersList.map(a => a._staker))
                this.setState({ totalStakersList })
            }


            {
                let total_stakers = Number(activeStakersCount)
                let totalStakersList = this.state.activeStakersList
                let newStakersList = []
                let step = window.config.max_referral_addresses_per_call

                for (let i = total_stakers - 1 - totalStakersList.length; i >= Math.max(0, total_stakers - totalStakersList.length - step); i--) {
                    newStakersList.push(this.props.staking.getActiveReferredStaker(coinbase, i))
                }
                newStakersList = await Promise.all(newStakersList)

                totalStakersList = totalStakersList.concat(newStakersList.map(a => a._staker))
                this.setState({ activeStakersList: totalStakersList })
            }
        } finally {
            this.setState({ isLoading: false })
        }
    }

    render() {
        return (
            <div className='l-referral-stats p-3'>
                <h4>{this.props.name} </h4>
                <div className='table-responsive'>
                    <table className='table table-sm'>
                        <thead>
                        <tr>
                            <th> Total ({this.state.totalStakersCount}) </th>
                            <th> Active ({this.state.activeStakersCount}) </th>
                        </tr>
                        </thead>
                        <tbody>
                        {(this.state.totalStakersList)
                            .map((_staker, i) => {
                                return (
                                    <tr key={i}>
                                        <td> {this.state.totalStakersList[i]} </td>
                                        <td> {this.state.activeStakersList[i]} </td>
                                    </tr>
                                )
                            })}

                        {this.state.totalStakersList.length < this.state.totalStakersCount*1 &&
                        <tr><td colSpan='2'><a style={{ color: 'var(--solid-btn-bg)' }} href='#' onClick={e => {
                            e.preventDefault()
                            this.refreshStakersList()
                        }}>{this.state.isLoading ? 'Loading...' : 'Load More'}</a></td></tr>}

                        {!this.state.isLoading && this.state.totalStakersList.length == 0 &&
                        <tr>
                            <td colSpan='2'>No Referred Stakers to Display
                            </td>
                        </tr>}


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default class ReferralStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            referralCounts: {}
        }
    }

    handleReferralCount = ({name, active, total}) => {
        let referralCounts = {...this.state.referralCounts}
        referralCounts[name] = {active, total}
        this.setState({referralCounts})
    }

    render() {
        return (
            <div>
                
                <div className='container'>
                    <h2 className='text-center mt-4 mb-4'>
                        DYP Referral Stats
                    </h2>
                    <div className='l-box'>
                        {this.props.staking_list.map((props, i) => <ReferralStat key={i} onReferralCount={this.handleReferralCount} {...props} />)}
                    </div>
                </div>
            </div>
        )
    }
}