import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

class ResultSymbol extends Component {
    state = {}

    render() {
        return (<div>
                <Card className="mt-4">
                    <Card.Body>
                        <Card.Title><Button variant="info" name={this.props.name} onClick={this.props.handleClick}>{this.props.name}</Button></Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{this.props.company}</ListGroup.Item>
                                <ListGroup.Item>Type: {this.props.type}</ListGroup.Item>
                                <ListGroup.Item>Region: {this.props.region}</ListGroup.Item>
                                <ListGroup.Item>Currency: {this.props.currency}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
        </div>);
    }
}

export default ResultSymbol;