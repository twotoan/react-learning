import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

class Loginscreen extends Component {
    constructor(props){
        super(props);
        var loginButtons=[];
        loginButtons.push(
            <div>
                <div>
                    <button label={"Register as Student"}  onClick={(event) => this.handleClick(event,'student')}/>
                </div>
                <div>
                    <button label={"Register as Teacher"}  onClick={(event) => this.handleClick(event,'teacher')}/>
                </div>

            </div>
        )
        this.state={
            username:'',
            password:'',
            loginscreen:[],
            loginmessage:'',
            loginButtons:loginButtons,
            studentbuttonLabel:'Register as Student',
            teacherbuttonLabel:'Register as Teacher',
            isLogin:true
        }
    }
    componentWillMount(){
        let loginscreen=[];
        loginscreen.push(<Login parentContext={this} appContext={this.props.appContext}/>);
        var loginmessage = "Not registered yet, Register Now";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage
        })
    }
    handleClick(event,userRole){
        console.log("event",userRole);
        var loginmessage;
        if(this.state.isLogin){
            let loginscreen=[];
            loginscreen.push(<Register parentContext={this} appContext={this.props.appContext} role={userRole}/>);
            loginmessage = "Already registered.Go to Login";
            var loginButtons=[];
            loginButtons.push(
                <div>
                    <button label={"Login"}  onClick={(event) => this.handleClick(event,userRole)}/>
                </div>
            )
            this.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                loginButtons:loginButtons,
                isLogin:false
            })
        }
        else{
            var loginscreen=[],loginButtons=[];
            loginButtons.push(
                <div>
                    <div>
                        <button label={"Register as Student"}  onClick={(event) => this.handleClick(event,'student')}/>
                    </div>
                    <div>
                        <button label={"Register as Teacher"}  onClick={(event) => this.handleClick(event,'teacher')}/>
                    </div>
                </div>
            )
            loginscreen.push(<Login parentContext={this} appContext={this.props.appContext} role={userRole}/>);
            loginmessage = "Not Registered yet.Go to registration";
            this.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                loginButtons:loginButtons,
                isLogin:true
            })
        }
    }
    render() {
        return (
            <div className="loginscreen">
                {this.state.loginscreen}
                <div>
                    {this.state.loginmessage}
                    {this.state.loginButtons}
                </div>
            </div>
        );
    }
}

export default Loginscreen;