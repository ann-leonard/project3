import React, { Component } from 'react';
import Foot from '../components/Footer';
import SearchContainer from '../components/SearchContainer';
import Navigation from '../components/Nav';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Home from '../pages/Home'

class Dashboard extends Component {
    state = {  
        user:{}
    }

    componentDidMount= async ()=>{
       // console.log(this.props)
       try{
        const user = await Axios.get("/user/isUser")
      //  console.log(user)
        this.setState({
            user
        })
        console.log(this.state)
       }catch(error){
           this.setState({
               user: false
           })
       }
    }
    render() { 
       if (this.state.user){
        return ( <div>
            <Navigation />
            <SearchContainer/>
            <Foot email={this.props.location.email}/>
            </div> );}
        else{
           return <Redirect to="/" render={Home}/>
        }
    }
}
 
export default Dashboard;