import React, { Component } from 'react';
import Tabs from './Tabs';

var navList = [
    { 'id': 1, 'label': 'Home', 'url': '/'},
    { 'id': 2, 'label': 'About', 'url': '/about'},
    { 'id': 3, 'label': 'Contact', 'url': '/contact'},
    { 'id': 4, 'label': 'Login', 'url': '/login'},
    { 'id': 5, 'label': 'Register', 'url:': '/register'}
];

export class Navitems extends Component {
    render(){
        return(
            <div>
                <Tabs navList={navList} />
            </div>
        );
    }
}

export default Navitems;