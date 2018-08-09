import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount= {500}
        token= {token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="FX Arbitrage"
        description="Enter information for $5 of FX trades"
      >
        <button className="btn">
          Add credits
        </button>
      </StripeCheckout>
    )
  }
}




export default connect(null, actions)(Payments)
