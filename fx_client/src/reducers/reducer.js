const defaultState = {
  allCurrencies:["USD", "EUR", "GBP", "JPY", "AUD"],
  baseCurrency: "USD",
  baseCurrencySymbol:"$",
  currentCurrency: "USD",
  currentExchange:1,
  currentMoney: 0,
  maxInvestment: 1000000,
  nonBaseCurrencies:["EUR", "GBP", "JPY", "AUD"],
  successfulTrades:[],
  timeOfLastFetch: "",
  trade: false,
  tradePermutations:[],
  USD:{},
  EUR:{},
  GBP:{},
  JPY:{},
  AUD:{}
}

const reducer = (state = defaultState, action) => {
  switch (action.type){
    // case UPDATE_INVESTMENT:
    // return action.payload || false
    default:
    return state
  }
}


export default reducer
