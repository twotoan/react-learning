import React, { Component } from 'react';

const players = [
    {id: 1, name: "Simple", age: "15", icon: "x", region: "EU"},
    {id: 2, name: "Flamie", age: "15", icon: "x", region: "EU"},
    {id: 3, name: "Seized", age: "15", icon: "x", region: "EU"},
    {id: 4, name: "Zeus", age: "15", icon: "x", region: "EU"},
    {id: 5, name: "Tarik", age: "15", icon: "x", region: "NA"},
    {id: 6, name: "Stewie2k", age: "15", icon: "x", region: "NA"},
    {id: 7, name: "RUSH", age: "15", icon: "x", region: "NA"},
    {id: 8, name: "Skadoodle", age: "15", icon: "x", region: "NA"},
    {id: 9, name: "Autimatic", age: "15", icon: "x", region: "NA"}
];
const playerlist = players.map((players) => <li>{players.id}, {players.region}, {players.icon}, {players.name}</li>);

export class PlayerEntry extends Component {
    render() {
        return (
            <li>
                <div className="row">
                    <div className="large-1 column">
                        {players.id}
                    </div>
                    <div className="large-2 column">
                        {players.region}
                    </div>
                    <div className="large-2 column">
                        {players.icon}
                    </div>
                    <div className="large-4 column">
                        {players.name}
                    </div>
                </div>
            </li>
        )
    }
}


export class DbHome extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="small-11 column">
                        <ul>
                            { playerlist }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DbHome;
