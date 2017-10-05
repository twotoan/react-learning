import React, { Component } from 'react';

export class HomePage extends Component {
    render() {
        return (
            <div className="row">
                <div className="small-12 column">
                    <div className="callout primary">
                        <h1>CSGO UI Experiment</h1>
                        <p>For use while learning react. Plans are to port to React Native as well.</p>
                    </div>
                    <div className="callout secondary">
                        <h2>Aplication Structure</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>
                                Player Database
                                <ul>
                                    <li>Player List</li>
                                    <li>Team List</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="small-12 medium-4 large-4 column">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Im a card!</h3>
                                </div>
                                <img src="http://placehold.it/400x200" alt="Alt Text"/>
                                <div className="card-section">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quia!</p>
                                </div>
                            </div>
                        </div>
                        <div className="small-12 medium-4 large-4 column">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Im a card!</h3>
                                </div>
                                <img src="http://placehold.it/400x200" alt="Alt Text"/>
                                <div className="card-section">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, mollitia!</p>
                                </div>
                            </div>
                        </div>
                        <div className="small-12 medium-4 large-4 column">
                            <div className="card">
                                <div className="card-divider">
                                    <h3>Im a card!</h3>
                                </div>
                                <img src="http://placehold.it/400x200" alt="Alt Text"/>
                                <div className="card-section">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dolorum?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;