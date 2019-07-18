import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';
import Axios from 'axios';
import Dashboard from '../pages/Dashboard';
import { Redirect } from 'react-router-dom'
class Navigation extends Component {


    handleLogout = async () => {
       const logout = await Axios.get("/user/logout")
    }

    render() {
        return (<div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/user/dashboard">            
                <img src="https://www.pngkey.com/png/detail/522-5227751_stocks-icon-png-stocks-icon.png" className="icon m-3 rounded-pill" alt=""/>
                StockUp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-5 ">
                        <Link to="/user/dashboard" component={Dashboard}>Dashboard</Link>
                    </Nav>
                    <NavDropdown inline title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={this.handleLogout}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </div>);
    }
}

export default Navigation;