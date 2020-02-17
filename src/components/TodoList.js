import React, { Component } from "react";
import "../assets/css/todolist.css";
import storage from '../model/storage'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist: []
        };
    }
    componentDidMount(){
      let todolist=storage.get('todolist')||[]
      this.setState({todolist})
    }
    keyUp = e => {
        if (e.keyCode === 13) {
            let todolist = this.state.todolist;
            todolist.push({ title: e.target.value, checked: false });
            this.setState({ todolist });
            storage.set('todolist',todolist)
            e.target.value = "";
        }
    };
    checkboxChange = index => {
        let todolist = this.state.todolist;
        todolist[index].checked = !todolist[index].checked;
        this.setState({ todolist });
        storage.set('todolist',todolist)
    };
    removedata = index => {
        let todolist = this.state.todolist;
        todolist.splice(index, 1);
        this.setState({ todolist });
        storage.set('todolist',todolist)
    };
    render() {
        return (
            <div className="todolist-view">
                <h1>
                    Todolist{" "}
                    <input
                        ref="input"
                        type="text"
                        className="input"
                        onKeyUp={this.keyUp}
                    />
                </h1>
                <hr />
                <h2 className="block-title">待处理</h2>
                <ul className={this.state.todolist.length ? "hasdata" : ""}>
                    {this.state.todolist.map((value, key) => {
                        if (!value.checked) {
                            return (
                                <li key={key}>
                                    <input
                                        type="checkbox"
                                        onChange={this.checkboxChange.bind(
                                            this,
                                            key
                                        )}
                                        checked={value.checked}
                                    />
                                    {value.title}
                                    <button
                                        className="btn-delete"
                                        onClick={this.removedata.bind(
                                            this,
                                            key
                                        )}
                                    >
                                        删除
                                    </button>
                                </li>
                            );
                        }
                    })}
                </ul>

                <h2 className="block-title">已处理</h2>
                <ul>
                    {this.state.todolist.map((value, key) => {
                        if (value.checked) {
                            return (
                                <li key={key}>
                                    <input
                                        type="checkbox"
                                        checked={value.checked}
                                        onChange={this.checkboxChange.bind(
                                            this,
                                            key
                                        )}
                                    />
                                    {value.title}
                                    <button
                                        className="btn-delete"
                                        onClick={this.removedata.bind(
                                            this,
                                            key
                                        )}
                                    >
                                        删除
                                    </button>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoList;
