import React, { Component } from 'react';
import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';
import './css/site.min.css';

export class App extends Component {
    render() {
        return (
            <div>
                <AppHeader />
                <AppFooter />
            </div>
        );
    }
}

export default App;