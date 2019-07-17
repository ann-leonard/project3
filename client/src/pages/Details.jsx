import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import post from '../utils/post';
import { Line } from "react-chartjs-2";
import parse from 'url-parse';
import Navigation from '../components/Nav';

class Details extends Component {
    state = {
        symbol: this.props.location.stock,
        dayArr: [],
        data: {},
        done: false
    }

    componentDidMount = async () => {
         console.log("THIS FUNCTION GOT RAN")
        const url = parse()
        const symbol = url.toString().split("/")[6]
        console.log(symbol)
        const dayArr = []
        const openArr = []
        const highArr = []
        const lowArr = []
        const closeArr = []
        const today = new Date()
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const response = await post.getSeries(symbol, { endDate: date, startDate: "2019-01-01" })
        console.log(response)
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
            done: true,
            data: {
                labels: dayArr,
                datasets: [
                    {
                        label: this.props.location.stock,
                        backgroundColor: ("rgba(0,0,255,0.75)"),
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
                <Jumbotron fluid >
                    <Container>
                        <Line data={this.state.data} />
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Details; 