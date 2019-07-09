import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import post from '../utils/post'

class SignInForm extends Component {
    state = {
        email:"",
        password:""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log(this.state)
      };
    

    HandleSubmit = event => {
        event.preventDefault();
        post.signIn({email:this.state.email, password:this.state.password})
    }

    render() {
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
    }
}

export default SignInForm;