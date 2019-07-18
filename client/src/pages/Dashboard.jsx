import React, { Component } from 'react';
import SearchContainer from '../components/SearchContainer';
import Navigation from '../components/Nav';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

class Dashboard extends Component {
    state = {  
        user:{}
    }

    componentDidMount= async ()=>{

        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title:"Welcome",
            text:"Please enter a stock symbol, company name, or partial name to see a list of best results. Select any stock by clicking its badge for more information."
        })
        
       // console.log(this.props)
       try{
        const user = await Axios.get("/user/isUser")
      //  console.log(user)
        this.setState({
            user
        })
      //  console.log(this.state)
       }catch(error){
           console.log(`Error:${error}`)
           this.setState({
               user: false
           })
       }
    }
    render() { 
     //  if (this.state.user){
        return ( <div>
            <Navigation />
            <SearchContainer/>
            </div> );
       //     }
      //  else{
      //     return <Redirect to="/" render={Home}/>
      //  }
    }
}
 
export default Dashboard;