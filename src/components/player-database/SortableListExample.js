import React, { Component } from 'react';

export class FilteredList extends Component {
    constructor() {
        super();
        // Set the initial state
        this.state = {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Bacon",
                "Eggs",
                "Salmon",
                "Granola",
                "Bananas",
                "Beer",
                "Wine",
                "Yogurt"
            ],
            items: []
        };
        this.filterList = this.filterList(this);
    }
    //The search function
    filterList(event) {
        // let updatedList = this.state.initialItems;
        // updatedList = updatedList.filter(function (item) {
        //     return item.toLowerCase().search(
        //         event.target.value.toLowerCase()) !== -1;
        // });
        // this.setState({items: updatedList});
    }
    // What happens when the component mounts (Set the itemlist as the value of initial items)
    componentWillMount() {
        this.setState({items: this.state.initialItems})
    }
    render(){
        return (
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList}/>
                <List items={this.state.items}/>
            </div>
        );
    }
}
export class List extends Component {
    render(){
        return (
            <ul>
                {
                    this.props.items.map(function(item) {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        )
    }
}
export class DefaultView extends Component {
    render() {
        return (
            <div>
                <FilteredList/>
            </div>
        )
    }
}

export default DefaultView;