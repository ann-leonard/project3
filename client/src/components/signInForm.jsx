import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import post from '../utils/post'
import Dashboard from '../pages/Dashboard'
import SignUp from '../pages/SignUp'

class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isUser: false,
            loginUnkown:false
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    noChange = event => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: "We're sorry...",
            text: "Changes to existing accounts cannot be processed at this time. Please create a new user",
            type: "warning"
        }).then(()=>{

            return <Redirect to={{ pathname: '/user/sign-up'}} render={<SignUp />} />

        })
    }

    HandleSubmit = async event => {
        event.preventDefault();
        const MySwal = withReactContent(Swal)
        try {
            const response = await post.signIn({ email: this.state.email, password: this.state.password })
            if (response.data.token) {
                this.setState({
                    isUser: true,
                    User: this.state.email
                })
            }
        } catch (err) {
            MySwal.fire({
                text:"Username or password is invalid"
            })
        }

    }

    render() {
        if (!this.state.isUser) {
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
                        <ButtonGroup vertical>
                        <Button size="lg" variant="info" type="button" onClick={this.HandleSubmit}>
                            Submit
                    </Button>
                    <Button className="mt-2" variant="outline-info" onClick={this.noChange}>Forgot your login info?</Button>
                    <Button className="mt-2" variant="outline-info" href="/sign-up">Not a user? Sign up</Button>
                    </ButtonGroup>
                    </Form>
                </Jumbotron>
            </div>);
        }
        else {
            return <Redirect to={{ pathname: '/user/dashboard', email: this.state.email }} render={<Dashboard />} />

        }

    }
}

export default SignInForm;