import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Welcome extends Component {
    state = {
        component : "welcome"
    }

    handleClick = (comp) => {
        
    }

    render() {
        return (
        <div>
        <Jumbotron className="m-5 bg-secondary text-center light rounded-pill">
            <h1 className="title">Welcome to [project name]!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed consequat magna. Proin luctus turpis massa, a aliquet metus malesuada.
            </p>
            <p className="mx-auto">
               <Button className="button m-3 p-2 light rounded-pill">Sign Up</Button>
            </p>
        </Jumbotron>);
        </div>)
    }
}

export default Welcome;