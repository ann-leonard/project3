import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import post from '../utils/post';
import Plotly from "plotly.js-basic-dist";

import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

class Details extends Component {
    state = {
        symbol: this.props.location.stock,
        dayArr: [],
        openArr: [],
        closeArr: [],
        highArr: [],
        lowArr: []
    }

    componentDidMount = async () => {
        // console.log(this.state)
        const dayArr = []
        const openArr = []
        const highArr = []
        const lowArr = []
        const closeArr = []
        const today = new Date()
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const response = await post.getSeries(this.props.location.stock, { endDate: date, startDate: "2010-01-01" })
        for (let i = 0; i < response.data.length; i++) {
            let data = response.data[i]
            let day = data.timestamp.split("T")[0]
            let low = data.low
            let high = data.high
            let close = data.close
            let open = data.open
            dayArr.push(day)
            lowArr.push(low)
            highArr.push(high)
            closeArr.push(close)
            openArr.push(open)
        }
        this.setState({
            dayArr,
            lowArr,
            highArr,
            closeArr,
            openArr
        })
        console.log(this.state)
        //   post.getSeries(this.props.location.stock, {endDate:date, startDate:"2019-01-01"}).then(function(res){
        //       console.log(res)
        //   })
    }

    render() {
        return (<Plot
            data={[
                {
                    x: this.state.dayArr,
                    close: this.state.closeArr,
                    high: this.state.highArr,
                    low: this.state.lowArr,
                    open: this.state.lowArr,
                    type: 'candlestick',
                    decreasing: { line: { color: '#7F7F7F' } },
                    increasing: { line: { color: '#17BECF' } },
                    line: { color: 'rgba(31,119,180,1)' },
                    xaxis: 'x',
                    yaxis: 'y'

                }
            ]}
            layout={{
                dragmode: 'zoom',
                margin: {
                    r: 10,
                    t: 25,
                    b: 40,
                    l: 60
                },
                showlegend: false,
                xaxis: {
                    autorange: true,
                    domain: [0, 1],
                   // range: ['2017-01-03 12:00', '2017-02-15 12:00'],
                    //rangeslider: { range: ['2017-01-03 12:00', '2017-02-15 12:00'] },
                    title: 'Date',
                    type: 'date'
                },
                yaxis: {
                    autorange: true,
                    domain: [0, 1],
                    //range: [114.609999778, 137.410004222],
                    type: 'linear'
                }
            }}
          />);
    }
}

export default Details;