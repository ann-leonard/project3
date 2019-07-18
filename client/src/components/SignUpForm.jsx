import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import post from '../utils/post'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Alert, ButtonGroup } from 'react-bootstrap';
import Dashboard from '../pages/Dashboard'

class SignUpForm extends Component {
    state = {
        email: "",
        password: "",
        emailError: "",
        display1: false,
        display2: false,
        userCreated: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        if (value) {
            if (event.target.name === "email") {
                this.setState({
                    display1:false
                })
            } else if (event.target.name === "password") {
                this.setState({
                    display2:false
                })
            }
        } else if (!value) {
            if (event.target.name === "email") {
                this.setState({
                    emailError: "Email is Required",
                    display1:true
                })
            } else if (event.target.name === "password") {
                this.setState({
                    passwordError: "Password is requried",
                    display2:true
                })
            }
        } else if(event.target.name === "password"){
                if (value.length < 4){
                    this.setState({
                        passwordError: "Password must be 4 characters or more",
                        display2:true
                    })
                }else{
                    this.setState({
                        display2:false
                    })
                }
            }
         
        console.log(this.state)
    };

    validateEmail = email => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

    HandleSubmit = async event => {
        const MySwal = withReactContent(Swal)
        event.preventDefault();
        if(this.validateEmail(this.state.email)){
            try{
            await post.createUser({ email: this.state.email, password: this.state.password })
            MySwal.fire({
                type: 'success'
            }).then(()=>{
                
                this.setState({
                    userCreated: true
                })
               
            })
            }catch(err){
                MySwal.fire({
                    text:JSON.stringify("Email already in use"),
                    type: "error",
                    title:"Oops!"
                })
            }   
        }else{
            MySwal.fire({
                title: "Oops!",
                text:"Please enter a valid email address",
                type:"error"
            })
        }
    }

    render() {
        if(!this.state.userCreated){
        return (<div>
            <Jumbotron className="m-5 p-5 col-sm-10 col-lg-8 mx-auto bg-secondary text-center light">
                <h1 className="title">Join us...</h1>
                <Form className="m-5">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleInputChange} />
                        <Alert variant="danger" show={this.state.display1}>{this.state.emailError}</Alert>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleInputChange} />
                        <Alert variant="danger" show={this.state.display2}>{this.state.passwordError}</Alert>
                    </Form.Group>
                    <ButtonGroup vertical>
                        <Button size="lg" variant="info" type="button" onClick={this.HandleSubmit}>
                            Submit
                        </Button>
                        <Button variant="outline-info" type="button" className="mt-2" href="/sign-in">Already a user? Sign in.</Button>
                    </ButtonGroup>
                </Form>
            </Jumbotron>
        </div>);
    }else{
        return <Dashboard />
    }
}
}

export default SignUpForm;