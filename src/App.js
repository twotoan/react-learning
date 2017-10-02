import React, { Component } from 'react';
import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';
import Home from './components/Home';
import About from './components/About';
import './css/site.min.css';

export class App extends Component {
    render() {
        return (
            <div>
                <AppHeader/>
                    <About />
                <AppFooter />
            </div>
        );
    }
}

export default App;