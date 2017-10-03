import React, { Component } from 'react';
//import Tabs from './Navitems';

export class Navitem extends Component {
    render(){
        return (
            <li><a href={this.props.url}>{this.props.label}</a></li>
        );
    }
}

export default Navitem;