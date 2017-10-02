import React, { Component } from 'react';
import Navitem from './Navitem';

export class Tabs extends Component {
    render(){
        return (
            <nav>
                <ul class="menu menu-centered">
                    {this.props.navList.map(function(navitem) {
                        return (
                            <Navitem url={navitem.url} label={navitem.label} />
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Tabs;