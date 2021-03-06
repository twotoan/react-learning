import React, { Component } from 'react';
import HLTV from 'hltv';

export class Api extends Component {
    constructor(props) {
        super(props);

        this.state = {person: []};
    }

    componentDidMount() {
        this.UserList();
    }

    UserList() {
        $.getJSON('HLTV')
            .then(({ results }) => this.setState({ person: results }));
    }

    render() {
        const persons = this.state.person.map((item, i) => (
            <div>
                <h1>{ item.name.first }</h1>
                <span>{ item.cell }, { item.email }</span>
            </div>
        ));

        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{ persons }</div>
            </div>
        );
    }
}

export default Api;