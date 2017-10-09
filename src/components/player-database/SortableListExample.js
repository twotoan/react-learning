import React, { Component } from 'react';

export class FilteredList extends Component {
    filterList = (event) => {
       let updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }
    constructor(props) {
        super(props);
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
        }
    }
    componentWillMount(){
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