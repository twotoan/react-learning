import React, { Component } from 'react';
import App from '../App';
import Login from './Login';
import LoginScreen from './Loginscreen';
import UploadScreen from './UploadScreen';
import UploadPage from './UploadPage';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            loginPage:[],
            uploadScreen:[]
        }
    }
    componentWillMount(){
        var loginPage =[];
        loginPage.push(<LoginScreen appContext={this}/>);
        this.setState({
            loginPage:loginPage
        })
    }
    render() {
        return (
            <div className="App">
                <AppHeader />
                <div className="row">
                    <div className="small-12 medium-6 medium-centered large-6 large-centered column">
                        {this.state.loginPage}
                        {this.state.uploadScreen}
                    </div>
                </div>
                <AppFooter />
            </div>

        );
    }
}