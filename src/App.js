import React, { Component } from 'react';
import LoginScreen from './Loginscreen';
import UploadScreen from './UploadScreen';
import UploadPage from './UploadPage';
import './css/site.min.css';

var navList = [
    { 'id': 1, 'label': 'Home', 'url': '/'},
    { 'id': 2, 'label': 'About', 'url': '/about'},
    { 'id': 3, 'label': 'Contact', 'url': '/contact'},
    { 'id': 4, 'label': 'Login', 'url': '/login'}
];


class App extends Component {
  render() {
    return (
        <div>
            <Home>
                <Login />
            </Home>
        </div>
    );
  }
}

class Home extends Component {
    render() {
        return ([
            <div>
                <AppHeader />
                <div className="row">
                    <div className="small-12 column">
                        <AppHome />
                    </div>
                </div>
                <AppFooter />
            </div>
        ]);
    }
}

class AppHeader extends Component {
    render() {
        return (
            <header>
                <div className="top-bar">
                    <div className="top-bar-left">
                        mySite
                    </div>
                    <div className="top-bar-left">
                        <Navitems />
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li><input type="search" placeholder="Search"></input></li>
                            <li><button type="button" className="button">Search</button></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

class AppFooter extends Component {
    render() {
        return (
          <footer>
              <div className="row">
                  <div className="small-12 column">
                      <h2>Credits</h2>
                      <p>Copyright 2017 Matthew Davies</p>
                  </div>
              </div>
          </footer>
        );
    }
}

class AppHome extends Component {
    render() {
        return (
            <p>Hello World</p>
        );
    }
}



// Navigation
class Navitem extends Component {
    render(){
        return (
            <li><a href={this.props.url}>{this.props.label}</a></li>
        );
    }
}
class Tabs extends Component {
    render(){
        return (
            <nav>
                <ul class="menu menu-centered">
                    {this.props.navList.map(function(navitem) {
                        return (
                            <Navitem url={navitem.url} label={navitem.label} />
                        );
                    })}
                </ul>
            </nav>
        );
    }
}
class Navitems extends Component {
    render(){
        return(
            <div>
                <Tabs navList={navList} />
            </div>
        );
    }
}

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


//export default App;
export default Login;
