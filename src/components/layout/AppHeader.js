import React, { Component } from 'react';
import Navigation from './navigation/Navigation';

export class AppHeader extends Component {
    render() {
        return (
            <header>
                <div className="top-bar">
                    <div className="top-bar-left">
                        mySite
                    </div>
                    <div className="top-bar-right">
                        <Navigation />
                    </div>
                </div>
            </header>
        );
    }
}

export default AppHeader;