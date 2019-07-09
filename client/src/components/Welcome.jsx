import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Welcome extends Component {
    render() {
        return (
        <div>
        <Jumbotron className="m-5 col-sm-10 col-lg-8 mx-auto bg-secondary text-center light">
            <h1 className="title">Welcome to [project name]!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed consequat magna. Proin luctus turpis massa, a aliquet metus malesuada.
            </p>
            <p className="mx-auto">
            
              <Link to="/sign-in"><Button className="button m-3 p-2 light rounded-pill" onClick={this.handleClick}>Sign In</Button></Link>
              <Link to="/sign-up"><Button className="button m-3 p-2 light rounded-pill" onClick={this.handleClick}>Sign Up</Button></Link>
           </p>
        </Jumbotron>
        </div>
        )
    }
}

export default Welcome;