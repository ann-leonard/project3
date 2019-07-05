import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap'

class Foot extends Component {
    state = {}
    render() {
        return (<div>
            <Container fluid>
                <Navbar className="fixed-bottom bg-light">
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
        );
    }
}

export default Foot;