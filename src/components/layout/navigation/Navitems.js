import React, { Component } from 'react';
import Tabs from './Tabs';

var navList = [
    { 'id': 1, 'label': 'Home', 'url': '/', 'component': 'Home'},
    { 'id': 2, 'label': 'About', 'url': '/about', 'component': 'About'},
    { 'id': 3, 'label': 'Contact', 'url': '/contact', 'component': 'Contact'},
    { 'id': 4, 'label': 'Login', 'url': '/login', 'component': 'Login'},
    { 'id': 5, 'label': 'Register', 'url:': '/register', 'component': 'Register'}
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