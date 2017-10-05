import React, { Component } from 'react';

let news = [
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

export class defaultView extends Component {
    render() {
        return(
            <div className="row">
                <div className="small-12 column">
                    <NewsList news={news} />
                </div>
            </div>
        )
    }
}
export class NewsItem extends Component {
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
export class NewsList extends Component {
    render() {
        let newsArr = this.props.news;    // This is our news array!
        let listItems = newsArr.map((newsObj) => {
            return <NewsItem key={newsObj.id} data={newsObj} />;    // I am passing in each news object as a prop called 'data'
        });
        return (
            <ul className="playerList">
                {listItems}
            </ul>
        );
    }
}

export default defaultView;
