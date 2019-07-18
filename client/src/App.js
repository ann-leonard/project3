import React, { Component } from "react";
import Navigation from './components/Nav';
class App extends Component {
  

  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
