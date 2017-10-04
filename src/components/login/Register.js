import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps);
    }
    handleClick(event,role){
        var apiBaseUrl = "http://localhost:4000/api/";
        // console.log("values in register handler",role);
        var self = this;
        //To be done:check for empty values before hitting submit
        if(this.state.first_name.length>0 && this.state.last_name.length>0 && this.state.email.length>0 && this.state.password.length>0){
            var payload={
                "first_name": this.state.first_name,
                "last_name":this.state.last_name,
                "userid":this.state.email,
                "password":this.state.password,
                "role":role
            }
            axios.post(apiBaseUrl+'/register', payload)
                .then(function (response) {
                    console.log(response);
                    if(response.data.code === 200){
                        //  console.log("registration successfull");
                        var loginscreen=[];
                        loginscreen.push(<Login parentContext={this} appContext={self.props.appContext} role={role}/>);
                        var loginmessage = "Not Registered yet.Go to registration";
                        self.props.parentContext.setState({loginscreen:loginscreen,
                            loginmessage:loginmessage,
                            buttonLabel:"Register",
                            isLogin:true
                        });
                    }
                    else{
                        console.log("some error occurred",response.data.code);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else{
            alert("Input field value is missing");
        }

    }
    render() {
        // console.log("props",this.props);
        var userhintText,userLabel;
        if(this.props.role === "student"){
            userhintText="Enter your Student Id",
                userLabel="Student Id"
        }
        else{
            userhintText="Enter your Teacher Id",
                userLabel="Teacher Id"
        }
        return (
            <div>
                <div>
                    <input
                        placeholder="Enter your First Name"
                        onChange = {(event,newValue) => this.setState({first_name:newValue})}
                    />
                    <br/>
                    <input
                        placeholder="Enter your Last Name"
                        onChange = {(event,newValue) => this.setState({last_name:newValue})}
                    />
                    <br/>
                    <input
                        placeholder={userhintText}
                        onChange = {(event,newValue) => this.setState({email:newValue})}
                    />
                    <br/>
                    <input
                        type = "password"
                        placeholder="Enter your Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                    <br/>
                    <button label="Submit" onClick={(event) => this.handleClick(event,this.props.role)}/>
                </div>

            </div>
        );
    }
}


export default Register;