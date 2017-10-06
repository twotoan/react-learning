import React, { Component } from 'react';

// The Players Array
let players = [
    { name: "Simple", age: "15", nationality: "UA", icon: "img/teams/.png", region: "EU", team: "Natus Vincere"},
    { name: "Flamie", age: "15", nationality: "RU", icon: "img/teams/.png", region: "EU", team: "Natus Vincere"},
    { name: "Seized", age: "15", nationality: "RU", icon: "img/teams/.png", region: "EU", team: "Natus Vincere"},
    { name: "Zeus", age: "15", nationality: "RU", icon: "img/teams/.png", region: "EU", team: "Natus Vincere"},
    { name: "Edward", age: "15", nationality: "UA", icon: "img/teams/.png", region: "EU", team: "Natus Vincere"},
    { name: "Tarik", age: "15", nationality: "NA", icon: "img/teams/c9.png", region: "NA", team: "Cloud9"},
    { name: "Stewie2k", age: "15", nationality: "NA", icon: "img/teams/c9.png", region: "NA", team: "Cloud9"},
    { name: "RUSH", age: "15", nationality: "NA", icon: "img/teams/c9.png", region: "NA", team: "Cloud9"},
    { name: "Skadoodle", age: "15", nationality: "NA", icon: "img/teams/c9.png", region: "NA", team: "Cloud9"},
    { name: "Autimatic", age: "15", nationality: "NA", icon: "img/teams/c9.png", region: "NA", team: "Cloud9"},
    { name: "FNS", age: "15", nationality: "CD", icon: "img/teams/.png", region: "NA", team: "CLG"},
    { name: "nahtE", age: "15", nationality: "NA", icon: "img/teams/.png", region: "NA", team: "CLG"},
    { name: "ReltuC", age: "15", nationality: "NA", icon: "img/teams/.png", region: "NA", team: "CLG"},
    { name: "Koosta", age: "15", nationality: "NA", icon: "img/teams/.png", region: "NA", team: "CLG"},
    { name: "Rickeh", age: "15", nationality: "AU", icon: "img/teams/.png", region: "NA", team: "CLG"},
    { name: "Friberg", age: "15", nationality: "SE", icon: "img/teams/.png", region: "NA", team: "Optic"},
    { name: "Magiskboy", age: "15", nationality: "DN", icon: "img/teams/.png", region: "NA", team: "Optic"},
    { name: "HS", age: "15", nationality: "EA", icon: "img/teams/.png", region: "NA", team: "Optic"},
    { name: "Allu", age: "15", nationality: "FI", icon: "img/teams/.png", region: "NA", team: "Optic"},
    { name: "Mixwell", age: "15", nationality: "ES", icon: "img/teams/.png", region: "NA", team: "Optic"},
    { name: "Device", age: "15", nationality: "DN", icon: "img/teams/.png", region: "EU", team: "Astralis"},
    { name: "Dupreeh", age: "15", nationality: "DN", icon: "img/teams/.png", region: "EU", team: "Astralis"},
    { name: "Xypex", age: "15", nationality: "DN", icon: "img/teams/.png", region: "EU", team: "Astralis"},
    { name: "Gla1ve", age: "15", nationality: "DN", icon: "img/teams/.png", region: "EU", team: "Astralis"},
    { name: "Kjaerbye", age: "15", nationality: "DN", icon: "img/teams/.png", region: "EU", team: "Astralis"}

];

// Render the element and pass it the players info to be used as props.
export class defaultView extends Component {
    render() {
        return(
            <div>
                <div className="row">
                    <div className="small-12 column">
                        <div className="tableHeading">
                            <div className="large-2 column">Team</div>
                            <div className="large-3 column">Alias</div>
                            <div className="large-2 column">Nationality</div>
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
                    <div className="large-2 column">
                        <img className="icon" src={data.icon} alt={data.team}/>
                    </div>
                    <div className="large-3 column">{data.name}</div>
                    <div className="large-2 column">{data.nationality}</div>
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
        let listItems = playerArr.map((playerObj, i) => {
            return <PlayerEntry key={i} data={playerObj} />;
        });
        return (
            <ul className="playerList">
                { listItems }
            </ul>
        );
    }
}
export default defaultView;
