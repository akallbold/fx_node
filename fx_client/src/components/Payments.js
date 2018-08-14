import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payments extends Component {
  render() {
    console.log(this.props)

    return (
      <StripeCheckout
        amount= {1000000*100}
        token= {token => this.props.handleToken(token)}
        stripeKey={"pk_test_wAySltTvUJPkPUZ7aHqUC7X6"}
        name="FX Arbitrage"
        description={`Enter information for trade credit`}
      >
        <button className="btn">
          Add credits
        </button>
      </StripeCheckout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      maxInvestment: state.maxInvestment
  }
}


export default connect(mapStateToProps, actions)(Payments)
