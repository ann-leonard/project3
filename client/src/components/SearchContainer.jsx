import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import API from '../utils/API'
import DataVis from '../utils/data/chart'

class SearchContainer extends Component {
    state = {}

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
       const AVresult = await API.dailyTimeSeries(this.state.input)
       //console.log(AVresult)
       DataVis.test(AVresult)
    }

    render() {
        return (<div>
            <Container bg='dark'>
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
                            <Button variant="info" name="bySymbol" onClick={this.handleSearch}>Search quotes by symbol</Button>
                            <Button variant="info" name="byKeyword" onClick={this.handleOptions}>Search by keyword</Button>
                        </ButtonGroup>
                        </InputGroup.Append>
                    </InputGroup>
                </div>

            </Container>
        </div>);
        }
    }
    
export default SearchContainer;