import React, { Component } from 'react';

export class FilteredList extends Component {
    filterList = (event) => {
        let updatedList = this.state.playersList;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({players: updatedList});
    };
    constructor(props) {
        super(props);
        this.state = {
            playersList: [
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
            ],
            players: [],
        }
    }
    // Mount the component with the initial data
    componentWillMount(){
        this.setState({players: this.state.playersList})
    }
    render(){
        return (
            <div>
                <div className="form-wrapper">
                    <div className="row">
                        <div className="small-12 column">
                            <div className="formHeading">
                                Search the database
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-8 column">
                            <div className="form">
                                <input type="text" placeholder="Search" onChange={this.filterList}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-list">
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
                    <List players={this.state.players}/>
                </div>
            </div>
        );
    }
}
export class List extends Component {
    render(){
        return (
            <div>
                <ul className="playerList">
                    {
                        this.props.players.map(function(item, i) {
                            return (
                                <li key={i}>
                                    <div className="row">
                                        <div className="large-2 column">
                                            <img className="icon" src={item.icon} alt={item.team}/>
                                        </div>
                                        <div className="large-3 column">{item.name}</div>
                                        <div className="large-2 column">{item.nationality}</div>
                                        <div className="large-2 column">{item.region}</div>
                                        <div className="large-1 column">{item.age}</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export class DefaultView extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="small-12 column">
                        <FilteredList/>
                    </div>
                </div>
            </div>
        )
    }
}
export default DefaultView;