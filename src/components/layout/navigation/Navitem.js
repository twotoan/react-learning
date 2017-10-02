import React, { Component, Link } from 'react';
import Navitems from './Navitems';

export class Navitem extends Component {
    render(){
        return (
            <li>
                <li><a href={this.props.url}>{this.props.label}</a></li>
            </li>
        );
    }
}

export default Navitem;