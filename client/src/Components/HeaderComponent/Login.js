//this makes it so you can use the format "class _NAME_ extends Component" instead of "class _NAME_ extends React Component"
import React, { Component } from "react";
//I used react-bootstrap to help create the login, it just made it easier
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
//this is where I put all of my CSS style components. It is easiest to have one file containing all CSS and then import it in when they are needed
import "../../styles.css";

//VERY basic login form
export default class Login extends Component {
    constructor(props) {
        super(props);

        //props for the Login component are email and password. Once correctly set up, these props can be sent to and verified by our database using REDUX or other
        this.state = {
            email: "",
            password: ""
        };
    }

    //This makes sure that the user has put in something for their email and password, which will then make them able to push the login button
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    //this is a pretty standard handleChange method
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    //this is a pretty standard handleSubmit method
    handleSubmit = event => {
        event.preventDefault();
    };

    //this is where everything is actually displayed
    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    {/* email part of the form */}
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    {/* password part of the form */}
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        /* this enables the button once something is in both input fields */
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}