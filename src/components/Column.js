import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp";
import { BrowserRouter as Router, Link } from "react-router-dom";
const API = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";

class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    fetchData = () => {
        fetchJsonp(API)
            .then(res => res.json())
            .then(res => {
                this.setState({ list: res.result });
                // console.log(res);
            });
    };
    componentDidMount() {
        this.fetchData();
    }
    render() {
        return (
            <div>
                <h1>栏目精彩内容</h1>
                <ul className="column-view">
                    {this.state.list.map((value, key) => {
                        return (
                            <li key={key}>
                                <Link to={`/detail/${value.aid}`}>
                                    {value.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Column;
