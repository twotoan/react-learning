import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AppHeader extends Component {
    render() {
        return (
            <header>
                <div className="top-bar">
                    <div className="top-bar-left">
                        MattDavies.com
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu menu-centered">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li>
                                <Link to="/database">Player Database</Link>
                                <ul>
                                    <li><Link to="/sortable">Sortable Example</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default AppHeader;