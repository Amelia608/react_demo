import React, { Component } from "react";
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: "张三"
        };
    }
    render(h) {
        return (
            <div>
                <h3>我是新闻组件-{this.state.userInfo}</h3>
                <ul>
                    <li>新闻01</li>
                    <li>新闻02</li>
                    <li>新闻03</li>
                    <li>新闻04</li>
                    <li>新闻05</li>
                    <li>新闻06</li>
                </ul>
            </div>
        );
    }
}
export default News;
