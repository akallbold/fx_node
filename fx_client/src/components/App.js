import React, { Component } from "react"
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from "react-redux"
import * as actions from "../actions"
import Header from "./Header"
import Landing from "./Landing"
import MainContainer from "./MainContainer"

class App extends Component{

  componentDidMount(){
    this.props.fetchUser()
  }

  render(){
    return (
      <div className= "container">
        <BrowserRouter>
          <div >
            <Header maxInvestment= {this.props.maxInvestment}/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/home" component={MainContainer}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    maxInvestment: state.maxInvestment
  })
}

export default connect(mapStateToProps, actions) (App)
