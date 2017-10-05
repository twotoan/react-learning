import React, { Component } from 'react';

export class HomePage extends Component {
    render() {
        return (
            <div className="row">
                <div className="small-12 column">
                    <div className="callout primary">
                        <h1>I am a H1 tag</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus esse exercitationem natus,
                            nobis sed totam vitae. Eveniet expedita possimus ratione saepe ullam? Libero, nisi.</p>
                    </div>
                    <div className="callout secondary">
                        <h2>This is a H2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dignissimos error ex fuga modi
                            perspiciatis saepe tenetur, voluptas? Doloremque iste molestias nemo quasi repellat voluptate.</p>
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