import React, { Component } from "react";
import Header from './Header'
class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: "juneChen",
            age: "30",
            msg: "what's this meaning",
            message: "明天早上要开早会",
            input: "",
            username: "陈英",
            uname: "", //姓名
            sex: 1, //性别
            city: "", //所在城市
            cities: [{id:1,name:'上海'},{id:2,name:'南京'},{id:3,name:'苏州'}],
            //兴趣爱好
            hobby: [
                { title: "看电视", checked: false },
                { title: "敲代码", checked: true },
                { title: "睡觉", checked: true }
            ],
            title:'我是Home组件的头部内容'
        };
        //改变this指向的第三种方法
        this.getname = this.getname.bind(this);
    }
    run() {
        alert("执行点击事件");
    }
    //改变this指向的第一种方法
    getData() {
        alert(this.state.msg);
    }
    //改变this指向的第二种方法
    getMessage = () => {
        alert(this.state.message);
    };
    getname() {
        alert(this.state.name);
    }
    //改变值
    setData = () => {
        this.setState({ age: "45" });
    };
    setname = name => {
        this.setState({ name });
    };
    //表单事件
    inputChange = event => {
        this.setState({ input: event.target.value });
        // console.log(event.target.value);
    };
    keyUp = e => {
        // console.log(e.keyCode)
        if (e.keyCode === 13) {
            alert("提交数据");
        }
    };
    getInput = () => {
        this.setState({ input: this.refs.input.value });
    };
    setusername = e => {
        this.setState({ username: e.target.value });
    };
    changeUsername = () => {
        this.setState({ username: "张含韵" });
    };
    submit = e => {
        e.preventDefault();
        console.log(this.state.uname, this.state.sex, this.state.city);
    };
    unameChange = e => {
        this.setState({ uname: e.target.value });
    };
    sexChange = sex => {
        console.log(sex);
        this.setState({ sex });
    };
    cityChange=(e)=>{
      this.setState({city:e.target.value})
    }
    hobbyChange=(index)=>{
      let hobby=this.state.hobby
      hobby[index].checked=!hobby[index].checked
      this.setState({hobby})
    }
    render(h) {
        return (
            <div className="component-home">
                  <Header title={this.state.title}/>
                <h3>我是Home组件</h3>
                <p>
                    名字：{this.state.name},年龄：{this.state.age}
                </p>
                <button onClick={this.run}>执行方法</button>
                <br />
                <br />
                <button onClick={this.getData.bind(this)}>
                    改变this指向的第一种方法
                </button>
                <br />
                <br />
                <button onClick={this.getMessage}>
                    改变this指向的第二种方式
                </button>
                <br />
                <br />
                <button onClick={this.getname}>改变this指向的第三种方法</button>
                <br />
                <br />
                <button onClick={this.setData}>改变state里面的值</button>
                <br />
                <br />
                <button onClick={this.setname.bind(this, "陈英")}>
                    执行方法传值
                </button>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <h1>表单事件</h1>
                <input
                    type="text"
                    ref="input"
                    onChange={this.inputChange}
                    onKeyUp={this.keyUp}
                />
                <p>{this.state.input}</p>
                <button onClick={this.getInput}>获取input的值</button>
                <h1>数据双向绑定</h1>
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.setusername}
                />
                <p>{this.state.username}</p>
                <button onClick={this.changeUsername}>修改username</button>
                <br />
                <br />
                <hr />
                <h1>获取表单数据</h1>
                <form onSubmit={this.submit}>
                    <p>
                        姓名：
                        <input
                            type="text"
                            value={this.uname}
                            onChange={this.unameChange}
                        />
                    </p>
                    <p>
                        性别：
                        <input
                            type="radio"
                            checked={this.state.sex === 1}
                            onChange={this.sexChange.bind(this, 1)}
                        />
                        男
                        <input
                            type="radio"
                            checked={this.state.sex === 2}
                            onChange={this.sexChange.bind(this, 2)}
                        />
                        女
                    </p>
                    <p>
                        所在城市：
                        <select value={this.state.city} onChange={this.cityChange}>
                          {
                            this.state.cities.map((value,key)=>{
                              return (
                              <option value={value.id} key={key}>{value.name}</option>
                              )
                            })
                          }
                        
                        </select>
                    </p>
                    <p>
                      兴趣爱好：
                      {this.state.hobby.map((value,key)=>{
                        return(
                          <span key={key}>
                            <input type="checkbox"  checked={value.checked} onChange={this.hobbyChange.bind(this,key)}/>{value.title}
                          </span>
                        )
                      })}
                    </p>
                    <p>
                        <button type="submit">获取提交数据</button>
                    </p>
                </form>
            </div>
        );
    }
}
export default Home;
