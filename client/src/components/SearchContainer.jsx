import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import { Chart } from 'react-google-charts'
import Details from '../pages/Details'
import API from '../utils/API';
import post from '../utils/post'
import DataVis from '../utils/data/chart';
import ResultSymbol from '../components/resultCard'
import Home from '../pages/Home'

//Plot.name("test")
class SearchContainer extends Component {
    state = {
        result: [],
        saved: false
    }

    componentDidMount = () => {
        console.log(this.props)
        //sweet alert with instructions

    }

    handleOptions = event => {
        let option = event.target.name
        this.setState({
            searchMode: option
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    handleSearch = async () => {
        const symbolResult = await API.SymbolSearch(this.state.input)
        const result = symbolResult.data.bestMatches
        console.log(result)
        this.setState({
            result
        })
    }

    getDetails = async event => {
        // console.log(event.target.name)
        //try {
           post.saveTimeSeries(event.target.name)
            .then(
            this.setState({
                stock: event.target.name,
                saved: true
            }))
      //  }catch(err){
        //    console.log(err)
        //}
    }

    render() {
        if (!this.state.saved) {
            return (
                <div>
                    <Container bg='dark' className="mx-auto">
                        <div className="d-flex flex-column mt-5">
                            <InputGroup size="lg">
                                <FormControl
                                    placeholder="Symbol or keyword"
                                    aria-describedby="basic-addon2"
                                    onChange={this.handleInputChange}
                                    name="input"
                                />
                                <InputGroup.Append>
                                    <ButtonGroup size="lg">
                                        <Button variant="info" name="byKeyword" onClick={this.handleSearch}>Search by keyword</Button>
                                    </ButtonGroup>
                                </InputGroup.Append>
                            </InputGroup>
                            <Row className="mx-auto">
                                <CardDeck className="justify-content-center">
                                    {this.state.result.map(result => (
                                        <ResultSymbol handleClick={this.getDetails} name={result["1. symbol"]} company={result["2. name"]} type={result["3. type"]} region={result["4. region"]} currency={result["8. currency"]} />
                                    ))}
                                </CardDeck>
                            </Row>
                        </div>

                    </Container>
                </div>);
        } else {
            return (
                <Redirect to={{ pathname: `/user/api/series/${this.state.stock}`, stock: this.state.stock }} render={Details} />
            )
        }
    }
}

export default withRouter(SearchContainer);