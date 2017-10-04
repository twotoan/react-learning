// React Functionality
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import abstracted components
import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';
import About from './components/About';
import DbHome from './components/player-database/DbHome';
//import Loginscreen from './components/login/Loginscreen';

// Declarations for Routing
// @TODO - abstract out UI elements into new components/consts and include them instead of dumping HTML in home const.
const Home = () =>  (
    <div className="row">
        <div className="small-12 column">
            <div className="callout primary">
                <h1>Welcome to my site</h1>
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