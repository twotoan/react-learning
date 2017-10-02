import React, { Component } from 'react';
import Navitems from './Navitems';

export class Navitem extends Component {
    render(){
        return (
            <div>
                <li><a href={this.props.url}>{this.props.label}</a></li>
            </div>
        );
    }
}

export default Navitem;