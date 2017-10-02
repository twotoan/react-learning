import React, { Component } from 'react';
import UploadScreen from './UploadScreen';
import Pastfiles from './Pastfiles';
import LoginScreen from './Loginscreen'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {draweropen: false,currentScreen:[]};
    }
    componentDidMount(){
        var currentScreen=[];
        currentScreen.push(<UploadScreen appContext={this.props.appContext} role={this.props.role}/>);
        this.setState({currentScreen})
    }
    /**
     * Toggle opening and closing of drawer
     * @param {*} event
     */
    toggleDrawer(event){
        // console.log("drawer click");
        this.setState({draweropen: !this.state.draweropen})
    }
    handleMenuClick(event,page){
        switch(page){
            case "openprint":
                // console.log("need to open uploadapge")
                var currentScreen=[];
                currentScreen.push(<UploadScreen appContext={this.props.appContext} role={this.props.role}/>);
                this.setState({currentScreen})
                break;
            case "openpast":
                // console.log("need to open pastfiles")
                var currentScreen=[];
                currentScreen.push(<Pastfiles appContext={this.props.appContext} role={this.props.role}/>);
                this.setState({currentScreen})
                break;
            case "logout":
                var loginPage =[];
                loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
                this.props.appContext.setState({loginPage:loginPage,uploadScreen:[]})
                break;
        }
        this.setState({draweropen:false})
    }
    render() {
        return (
            <div className="App">

                    <div
                        className="row"
                        title="Printing Page"
                        onLeftIconButtonTouchTap={(event) => this.toggleDrawer(event)}
                    />


                    <ul open={this.state.draweropen}>
                        <li>
                            <div>
                                User Profile
                                <a href="#"><i
                                    className="material-icons drawerclosebutton"
                                    styles={{ top:10,}}
                                    onClick={(event) => this.toggleDrawer(event)}
                                >clear</i></a>
                            </div>
                        </li>
                        <div>
                            <li onClick={(event) => this.handleMenuClick(event,"openprint")}>
                                Printing Page
                            </li>
                            <li onClick={(event) => this.handleMenuClick(event,"openpast")}>
                                Past Files
                            </li>
                            <li onClick={(event) => this.handleMenuClick(event,"logout")}>
                                Logout
                            </li>
                        </div>
                    </ul>

                <div>
                    {this.state.currentScreen}
                </div>
            </div>
        );
    }
}

export default App;