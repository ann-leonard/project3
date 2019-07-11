import React, { Component } from 'react';
import Foot from '../components/Footer';
import SearchContainer from '../components/SearchContainer';

class Dashboard extends Component {
    state = {  }

    componentDidMount= ()=>{
        console.log(this.props)
    }
    render() { 
        return ( <div>
            <SearchContainer/>
            <Foot email={this.props.location.email}/>
            </div> );
    }
}
 
export default Dashboard;