import React, { Component } from 'react';

// The Players Array
let players = [
    {id: 1, name: "Simple", age: "15", icon: "x", region: "EU"},
    {id: 2, name: "Flamie", age: "15", icon: "x", region: "EU"},
    {id: 3, name: "Seized", age: "15", icon: "x", region: "EU"},
    {id: 4, name: "Zeus", age: "15", icon: "x", region: "EU"},
    {id: 5, name: "Edward", age: "15", icon: "x", region: "EU"},
    {id: 6, name: "Tarik", age: "15", icon: "img/teams/c9.png", region: "NA"},
    {id: 7, name: "Stewie2k", age: "15", icon: "img/teams/c9.png", region: "NA"},
    {id: 8, name: "RUSH", age: "15", icon: "img/teams/c9.png", region: "NA"},
    {id: 9, name: "Skadoodle", age: "15", icon: "img/teams/c9.png", region: "NA"},
    {id: 10, name: "Autimatic", age: "15", icon: "img/teams/c9.png", region: "NA"}
];

// Render the element and pass it the players info to be used as props.
export class defaultView extends Component {
    render() {
        return(
            <div>
                <div className="row">
                    <div className="small-12 column">
                        <div className="tableHeading">
                            <div className="large-1 column">ID</div>
                            <div className="large-2 column">Team</div>
                            <div className="large-3 column">Alias</div>
                            <div className="large-2 column">Region</div>
                            <div className="large-1 column">Age</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="small-12 column">
                        <PlayerList players={players} />
                    </div>
                </div>
            </div>
        )
    }
}
// Render the individual items using the Players props as data
export class PlayerEntry extends Component {
    render() {
        let data = this.props.data;
        return (
            <li>
                <div className="row">
                    <div className="large-1 column">{data.id}</div>
                    <div className="large-2 column">
                        <img className="icon" src={data.icon} alt=""/>
                    </div>
                    <div className="large-3 column">{data.name}</div>
                    <div className="large-2 column">{data.region}</div>
                    <div className="large-1 column">{data.age}</div>
                </div>
            </li>
        );
    }
}

export class PlayerList extends Component {
    render() {
        let playerArr = this.props.players;
        let listItems = playerArr.map((newsObj) => {
            return <PlayerEntry key={newsObj.id} data={newsObj} />;
        });
        return (
            <ul className="playerList">
                { listItems }
            </ul>
        );
    }
}

export default defaultView;
