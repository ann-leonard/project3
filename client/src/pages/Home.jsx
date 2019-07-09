import React, { Component } from 'react';
import Welcome from '../components/Welcome';
import SignUpForm from '../components/SignUpForm';


class Home extends Component {
    state = {  }

    render() { 
        return ( <div>
            <Welcome />
        </div> );
    }
}
 
export default Home;