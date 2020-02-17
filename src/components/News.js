import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import fetchJsonp from "fetch-jsonp";
const API = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "我是新闻组件的头部内容",
            userInfo: "张三",
            color: "red",
            style: {
                fontSize: "20px",
                color: "#cdcdcd"
            },
            list1: [<h2>我是👌</h2>, <h2>我是👌</h2>],
            list2: [11111, 22222, 33333],
            list3: [{ title: "我是新闻001" }, { title: "我是新闻002" }],
            childmsg: "",
            news: [],
            jsonplist:[]
        };
    }
   
    run = () => {
        alert("我是父子组件的run方法");
    };
    fetchData = () => {
        axios
            .get(API)
            .then(res => {
                console.log(res);
                this.setState({ news: res.data.result });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    };
    getDdataByJsonp = () => {
        fetchJsonp(API)
            .then(function(response) {
                return response.json();
            })
            .then(res=> {
                console.log("parsed json", res);
                this.setState({jsonplist:res.result})
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    };
    getdata = () => {
        alert(this.state.userInfo);
    };
    getChildData = res => {
        console.log(res);
        this.setState({ childmsg: res });
    };
    getChildinfo = () => {
        this.refs.footer.run();
    };
    render(h) {
        let arr = this.state.list2.map((el, index) => (
            <li key={`${index}0`}>{el}</li>
        ));
        return (
            <div>
                <Header title={this.state.title} run={this.run} news={this} />
                <h3 title={this.state.userInfo} style={this.state.style}>
                    我是新闻组件-{this.state.userInfo}
                </h3>
                <h3 style={{ color: this.state.color }}>我是新闻标题</h3>
                <p>子组件的值{this.state.childmsg}</p>
                <ul>
                    {arr}
                    {this.state.list3.map((el, index) => {
                        return (
                            <li key={index}>
                                {index}
                                {el.title}
                            </li>
                        );
                    })}
                </ul>
                <button onClick={this.getChildinfo}>
                    获取子组件数据或者方法
                </button>
                <hr />
                <h1>新闻列表</h1>
                <button onClick={this.fetchData}>axios请求获取数据</button>
                <ul>
                    {this.state.news.map((value, key) => {
                        return <li key={key}>{value.title}</li>;
                    })}
                </ul>
                <hr />
                <button onClick={this.getDdataByJsonp}>fetch-jsonp获取数据</button>
                  <ul>
                    {this.state.jsonplist.map((value,key)=>{
                      return (
                      <li key={key}>{value.title}</li>
                      )
                    })}
                  </ul>
                <Footer ref="footer" />
            </div>
        );
    }
    componentDidMount(){
      this.fetchData()
      this.getDdataByJsonp()
    }
}
export default News;
