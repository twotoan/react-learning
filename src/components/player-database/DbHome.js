import React, { Component } from 'react';

// The Players Array
let players = [
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

// TODO - Next thing I need to do is set the default state when someone visits the page (defaultView)
// TODO - Then I need to decided after that happens, what happens next
// TODO - Make the results filterable - one filter to begin then multiple ways
// TODO - Export the players array to a separate file and make comprehensive list of Tier 1 teams as a starter
// TODO - Add all the icons for the teams - do this at home!
// TODO - Verify and correct the data in the players array to  be up-to-date

// Render the element and pass it the players info to be used as props.
export class defaultView extends Component {
    render() {
        return(
            <div className="row">
                <div className="small-12 column">
                    <PlayerList players={players} />
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
                    <div className="large-2 column">{data.icon}</div>
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
