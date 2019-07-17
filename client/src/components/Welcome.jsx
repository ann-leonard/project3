import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Welcome extends Component {
    render() {
        return (
        <div>
        <Jumbotron className="m-5 col-sm-10 col-lg-8 mx-auto bg-secondary text-center light">
            <img src="https://www.pngkey.com/png/detail/522-5227751_stocks-icon-png-stocks-icon.png" className="rounded-pill" alt=""/>
            <h1>Welcome to stockUp</h1>
            <p>
               A simple way to research stock market data
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