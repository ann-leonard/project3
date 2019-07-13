///TODO:
//move this whole thing on the server by
//creating these functions as post routes 
//use these functions 

const Axios = require('axios')
const API_KEY = process.env.REACT_APP_API_KEY 
const DataVis = require('./data/chart')

module.exports = {

    searchBySymbol: function(SYMBOL){
       return Axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${API_KEY}`)
    },

    dailyTimeSeries: function(SYMBOL){
        //console.log(API_KEY)
       return Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${SYMBOL}&apikey=${API_KEY}`)
    }

}
