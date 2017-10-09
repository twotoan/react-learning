import React, { Component } from 'react';

export class FilteredList extends Component {
    // Set the items as the values of whatever is in initial items to be used when the component mounts
    // The search functions runs onChange for the text input which will then filter the list items
    filterList = (event) => {
       let updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    };
    // Need to figure out how to map all the JSON stuff to this state
    constructor(props) {
        super(props);
        this.state = {
            initialItems: [
                "Simple",
                "Flamie",
                "Seized",
                "Zeus",
                "Edward",
                "Tarik",
                "Stewie2k",
                "Rush",
                "Skadoodle",
                "Autimatic"
            ],
            items: []
        }
    }
    // Mount the component with the initial data
    componentWillMount(){
        this.setState({items: this.state.initialItems})
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
                        {/*<div className="large-4 column">*/}
                            {/*<div className="form">*/}
                                {/*<select>*/}
                                    {/*<option value="" defaultValue>Search by..</option>*/}
                                    {/*<option value="team">Team</option>*/}
                                    {/*<option value="alias">Alias</option>*/}
                                    {/*<option value="nationality">Nationality</option>*/}
                                    {/*<option value="region">Region</option>*/}
                                    {/*<option value="age">Age</option>*/}
                                {/*</select>*/}
                            {/*</div>*/}
                        {/*</div>*/}
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
                    <List items={this.state.items}/>
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
                        this.props.items.map(function(item, i) {
                            return (
                                <li key={i}>
                                    <div className="row">
                                        <div className="large-2 column">ICON</div>
                                        <div className="large-3 column">{item}</div>
                                        <div className="large-2 column">y</div>
                                        <div className="large-2 column">z</div>
                                        <div className="large-1 column">a</div>
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