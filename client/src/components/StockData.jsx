import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
export default class StockData extends Component {
    render() {
        return (<div>
            <Card className="text-center bg-dark text-light">
                <Card.Header>{this.props.stock}</Card.Header>
                <Card.Body>

                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip>Most recent closing price</Tooltip>
                            }
                        >
                             <Card.Title><h1>{this.props.close}</h1></Card.Title>
                        </OverlayTrigger>


                    <Card.Text>
                        <h2>
                           <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip>Open price</Tooltip>
                            }
                        >
                            <Badge className="m-3 p-2" variant="info">{this.props.open}</Badge>
                        </OverlayTrigger>

                       <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip>High price</Tooltip>
                            }
                        >
                           <Badge className="m-3 p-2" variant="success">{this.props.high}</Badge>

                        </OverlayTrigger>

                       <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip>Low price</Tooltip>
                            }
                        >
                            <Badge className="m-3 p-2" variant="danger">{this.props.low}</Badge>
                        </OverlayTrigger>

                        </h2>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>)
    }
}

//export default StockData;