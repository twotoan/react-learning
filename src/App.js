// React Functionality
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import abstracted components
import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';
import About from './components/About';

// Import the CSS
import './css/site.min.css';

// Declarations for Routing
const Home = () =>  (
    <div id="container">
        <div className="row">
            <div className="small-12 column">
                Hello World
            </div>
        </div>
    </div>
);
const AboutMe = () => (
  <div>
    <About />
  </div>
);

export class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <div>
                        <AppHeader />
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={AboutMe}/>
                    </div>
                </Router>
                <AppFooter />
            </div>
        )
    }
}

export default App;