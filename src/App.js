import React, { Component } from 'react';
import './css/site.min.css';

class App extends Component {
  render() {
    return (
      <Home></Home>
    );
  }
}

class Home extends Component {
    render() {
        return ([
            <div>
                <AppHeader />
                <div className="row">
                    <div className="small-12 column">
                        <AppHome />
                    </div>
                </div>
                <AppFooter />
            </div>
        ]);
    }
}

class AppHeader extends Component {
    render() {
        return (
            <header>
                <div class="row">
                    <div className="small-12 column">
                        Test123
                    </div>
                </div>
            </header>
        );
    }
}

class AppFooter extends Component {
    render() {
        return (
          <footer>
              <div className="row">
                  <div className="small-12 column">
                      Test456
                  </div>
              </div>
          </footer>
        );
    }
}

class AppHome extends Component {
    render() {
        return (
            <p>Hello World</p>
        );
    }
}

export default App;
