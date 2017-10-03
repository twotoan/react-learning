import React, { Component } from 'react';
import Navitem from './Navitem';

export class Tabs extends Component {
    render(){
        return (
            <nav>
                <ul className="menu menu-centered">
                    {this.props.navList.map(function(navitem) {
                        return (
                            <Navitem key={navitem.id} exact path={navitem.url} url={navitem.url} label={navitem.label} component={navitem.component} />
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Tabs;