import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Navigation from './components/Nav'
import Foot from './components/Footer';
import Welcome from './components/Welcome'
import SignIn from './components/signIn'

class App extends Component {
  

  
  render() {
    return (
      <div>
        <Navigation />
          <Container>
              <Welcome/>
          </Container>
        <Foot />
      </div>
    );
  }
}

export default App;
