import React, { Component } from 'react';
import axios from 'axios';
import UploadPage from './UploadPage';
let apiBaseUrl = "http://localhost:4000/api/";


class Login extends Component {
    constructor(props){
        super(props);
        let localloginComponent=[];
        localloginComponent.push(

                <div className="row">
                    <div className="small-12 column">
                        <span className="label primary">Student Id</span>
                        <input
                            type="number"
                            placeholder="Student ID"
                            aria-describedby="collegeRollNo"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <p id="collegeRollNo">Enter your College Roll #</p>
                        <br/>
                        <span className="label primary">Password</span>
                        <input
                            placeholder="Password"
                            type="password"
                            aria-describedby="collegePassword"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                            required
                        />
                        <p id="collegePassword">Enter your Password</p>
                        <br/>
                        <button label="Submit" onClick={(event) => this.handleClick(event)}/>
                    </div>
                </div>

        );
        this.state={
            username:'',
            password:'',
            menuValue:1,
            loginComponent:localloginComponent,
            loginRole:'student'
        }
    }
    componentWillMount(){
        // console.log("willmount prop values",this.props);
        if(this.props.role !== undefined){
            if(this.props.role === 'student'){
                console.log("in student componentWillMount");
                let localloginComponent=[];
                localloginComponent.push(

                        <div>
                            <input
                                type="text"
                                onChange = {(event,newValue) => this.setState({username:newValue})}
                            />
                            <br/>
                            <input
                                type="password"
                                onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                            <br/>
                            <button label="Submit" onClick={(event) => this.handleClick(event)}/>
                        </div>

                );
                this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'student'})
            }
            else if(this.props.role === 'teacher'){
                console.log("in teacher componentWillMount");
                let localloginComponent=[];
                localloginComponent.push(

                        <div>
                            <input
                                placeholder="Enter your College Rollno"
                                onChange = {(event,newValue) => this.setState({username:newValue})}
                            />
                            <br/>
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                            <br/>
                            <button label="Submit" onClick={(event) => this.handleClick(event)}/>
                        </div>

                );
                this.setState({menuValue:2,loginComponent:localloginComponent,loginRole:'teacher'})
            }
        }
    }
    handleClick(event){
        var self = this;
        var payload={
            "userid":this.state.username,
            "password":this.state.password,
            "role":this.state.loginRole
        }
        axios.post(apiBaseUrl+'login', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.code === 200){
                    console.log("Login successfull");
                    let uploadScreen=[];
                    uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
                    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
                }
                else if(response.data.code === 204){
                    console.log("Username password do not match");
                    alert(response.data.success)
                }
                else{
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleMenuChange(value){
        console.log("menuvalue",value);
        var loginRole;
        let localloginComponent=[];

        if(value === 1){
            loginRole='student';
            localloginComponent.push(

                    <div>
                        <input
                            placeholder="Enter your College Roll no."
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <button label="Submit" onClick={(event) => this.handleClick(event)}/>
                    </div>

            )
        }
        else if(value === 2){
            loginRole='teacher';
            localloginComponent.push(

                    <div>
                        <input
                            placeholder="Enter your College Roll no."
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <button label="Submit" onClick={(event) => this.handleClick(event)}/>
                    </div>

            )
        }
        this.setState({menuValue:value,
            loginComponent:localloginComponent,
            loginRole:loginRole})
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="small-12 column">
                        <h2>Login</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="small-12 column">
                        <p>Login as:</p>
                        <select value={this.state.menuValue} onChange={(event,index,value)=>this.handleMenuChange(value)}>
                            <option defaultValue>Select login..</option>
                            <option value={1}>Student</option>
                            <option value={2}>Teacher</option>
                        </select>
                    </div>
                </div>

                {this.state.loginComponent}
            </div>
        );
    }
}

export default Login;