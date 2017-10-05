// React Functionality
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import abstracted components
import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';
import HomePage from './components/HomePage';
import About from './components/About';
import DbHome from './components/player-database/DbHome';
//import Loginscreen from './components/login/Loginscreen';

// Declarations for Routing
const Home = () =>  (
    <div>
        <HomePage />
    </div>
);
const AboutMe = () => (
    <div>
        <About />
    </div>
);
// @TODO - fix the login area
// const LoginPage = () => (
//     <div>
//         <Loginscreen />
//     </div>
// );
const DbHomeP = () => (
    <div>
        <DbHome />
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
                            <Route path="/database" component={DbHomeP}/>
                            {/*<Route path="/login" component={LoginPage}/>*/}
                        </div>
                    </div>
                </Router>
                <AppFooter />
            </div>
        )
    }
}

export default App;