///TODO:
//move this whole thing on the server by
//creating these functions as post routes 
//use these functions 

const Axios = require('axios')
const Stock = require('../models/stock')

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
        console.log(req.body)
        const SYMBOL = req.body.data
        const API_KEY = process.env.API_KEY
        console.log(SYMBOL)
        console.log(API_KEY)
         Axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${SYMBOL}&apikey=${API_KEY}`).then(function(res){
            let data = res.data["Time Series (Daily)"]
            data = Object.entries(data)
           // console.log(data)
            for (let i=0; i<data.length;i++){
                Stock.create({
                    symbol:SYMBOL,
                    timestamp:data[i][0],
                    high:data[i][1]["2. high"],
                    low:data[i][1]["3. low"],
                    open:data[i][1]["1. open"],
                    close:data[i][1]["5. adjusted close"],
                    volume:data[i][1]["6. volume"]
                })
            }

        })
        return 0;
    }

}
