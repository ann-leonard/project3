


module.exports = {
    test: function({data}){
        console.log(data)
        //console.log(data["Time Series (Daily)"])
        let TSD = data['Time Series (Daily)']
        const dates = []
        const highs = []
        const lows = []
        const close = []
        const open = []

        for (var x in TSD){
          //  console.log(x) //<= keys
          //console.log(TSD[x]) // <= values
          dates.push(x)
          open.push(TSD[x]["1. open"])
          highs.push(TSD[x]["2. high"]) 
          lows.push(TSD[x]["3. low"]) 
          close.push(TSD[x]["5. adjusted close"])         
          //console.log(dates)
          //console.log(open)
          //console.log(highs)
          //console.log(low)
          //console.log(close)
        }

    }

}