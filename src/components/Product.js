import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp";
import { BrowserRouter as  Router, Link } from "react-router-dom";

const API = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
// get页面传值
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        fetchJsonp(API)
            .then(res => res.json())
            .then(res => {
                console.log(res.result);
                this.setState({ list: res.result });
            });
    };
    render() {
        return (
            <div>
                <h1>商品内容:</h1>
                <ul className="column-view">
                    {this.state.list.map((value, key) => {
                        return (
                            <li key={key}>
                                {/* <Link to={`/content?aid=23`}>{value.title}</Link> */}
                                <Link to={`/content?aid=${value.aid}`}>
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

export default Product;
