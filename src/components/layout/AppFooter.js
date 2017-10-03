import React, { Component } from 'react';

export class AppFooter extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="small-12 medium-6 large-6 column">
                        <h2>Credits</h2>
                        <p>Copyright 2017 Matthew Davies</p>
                    </div>
                    <div className="small-12 medium-6 large-6 column text-right">
                        <p>
                            <a href="https://github.com/twotoan/react-learning" target="_blank">
                                <i className="fa fa-2x fa-github"></i>
                                View me on gitHub!
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default AppFooter;