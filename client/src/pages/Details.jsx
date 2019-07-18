import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import post from '../utils/post';
import { Line } from "react-chartjs-2";
import parse from 'url-parse';
import Navigation from '../components/Nav';
import StockData from '../components/StockData';

class Details extends Component {
    state = {
        symbol: '',
        dayArr: [],
        data: {},
        done: false,
        high: '',
        low: '',
        open: '',
        close: '',
    }

    componentDidMount = async () => {
        console.log("THIS FUNCTION GOT RAN")
        const url = parse()
        const symbol = url.toString().split("/")[6]
        console.log(symbol)
        const dayArr = []
        const closeArr = []
        const today = new Date()
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const response = await post.getSeries(symbol, { endDate: date, startDate: "2019-01-01" })
        const mostRecent = response.data.pop()

        for (let i = 0; i < response.data.length; i++) {
            let data = response.data[i]
            let day = data.timestamp.split("T")[0]
            let close = data.close
            dayArr.push(day)

            closeArr.push(close)
        }
        this.setState({
            symbol,
            high: mostRecent.high,
            low: mostRecent.low,
            open: mostRecent.open,
            close: mostRecent.close,
            done: true,
            data: {
                labels: dayArr,
                datasets: [
                    {
                        label: symbol,
                        backgroundColor: ("rgba(50,100,255,0.6)"),
                        data: closeArr,
                        showLines: false
                    }
                ]
            }
        })

    }

    render() {
        return (
            <div>
                <Navigation />
                    <Container className="bg-dark">
                        <StockData stock={this.state.symbol} high={this.state.high} low={this.state.low} close={this.state.close} open={this.state.open}/>
                        <Line data={this.state.data} />
                    </Container>
            </div>
        );
    }
}

export default Details; 