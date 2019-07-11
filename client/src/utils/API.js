///TODO:
//move this whole thing on the server by
//creating these functions as post routes 
//use these functions 

var Axios = require('axios')
const API_KEY = "TUNAL5398EVX0C8D" 


module.exports = {

    searchBySymbol: function(SYMBOL){
       return Axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${API_KEY}`)
    },

    dailyTimeSeries: function(SYMBOL){
        Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${SYMBOL}&apikey=${API_KEY}`)
    }

}
