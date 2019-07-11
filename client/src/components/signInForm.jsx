import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import post from '../utils/post'
import Dashboard from '../pages/Dashboard'

class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            isUser: false
        }
        // This binding is necessary to make `this` work in the callback

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log(this.state)
      };
    

    HandleSubmit = async event => {
        event.preventDefault();
        const response = await post.signIn({email:this.state.email, password:this.state.password})
        console.log(response)
        if (response.data.token){
            this.setState({
                isUser:true,
                User: this.state.email
            })
        }
    }

    render() {
        if (!this.state.isUser){
        return (<div>
            <Jumbotron className="m-5 p-5 col-sm-10 col-lg-8 mx-auto bg-secondary text-center light">
                <h1 className="title">Log in</h1>
                <Form className="m-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.HandleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        </div>);
        }else{
            return <Redirect to={{ pathname:'/user/dashboard', email:this.state.email }}render={<Dashboard/>} />

        }
    
    }
}

export default SignInForm;