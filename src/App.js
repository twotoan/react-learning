// React Functionality
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import abstracted components
import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';
import About from './components/About';
import Login from './components/login/Login';

// Import the CSS
import './css/site.min.css';

// Declarations for Routing
const Home = () =>  (
    <div className="row">
        <div className="small-12 column">
            Hello World
        </div>
    </div>
);
const AboutMe = () => (
    <div>
        <About />
    </div>
);
const LoginPage = () => (
    <div>
        <Login />
    </div>
);

// Default render using routes to load views
export class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <div>
                        <AppHeader />
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={AboutMe}/>
                            <Route path="/login" component={LoginPage}/>
                        </div>
                    </div>
                </Router>
                <AppFooter />
            </div>
        )
    }
}

export default App;