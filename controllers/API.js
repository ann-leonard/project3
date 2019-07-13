///TODO:
//move this whole thing on the server by
//creating these functions as post routes 
//use these functions 

const Axios = require('axios')

module.exports = {

    searchBySymbol: function(req,res,next){
        const SYMBOL = req.body.data
        const API_KEY = process.env.API_KEY

        console.log(SYMBOL)
        console.log(API_KEY)

       return Axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${API_KEY}`)
      //.then(function(res){
       //   console.log(res)
      //})
    },

    dailyTimeSeries: function(req,res,next){
        const SYMBOL = req.body.data
        const API_KEY = process.env.API_KEY
        console.log(SYMBOL)
        console.log(API_KEY)
         Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${SYMBOL}&apikey=${API_KEY}`).then(function(data){
            console.log(JSON.stringify(data))
         })
    }

}
