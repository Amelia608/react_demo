import React, { Component } from "react";
// import logo from './assets/images/logo.svg';
// import Home from './components/Home'
// import News from './components/News'
// import TodoList from './components/TodoList'
import "./assets/css/index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import Column from "./components/Column";
import Product from "./components/Product";
import ColumnContent from './components/ColumnConetnt'
import Content from './components/Content'

class App extends Component {
    render(h) {
        return (
            <Router>
                <div className="App">
                    {/* <TodoList/> */}
                    {/* <img src={logo} alt="logo" className="logo"/> */}
                    {/* <img className="logo" src={require('./assets/images/logo.svg')} alt="logo"/>
        <img className="portrait" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1203235417,913847929&fm=26&gp=0.jpg" alt="头像"/> */}
                    {/* <h2>我是react根组件</h2> */}
                    {/* <Home/> */}
                    {/* <News/> */}
                    <header className="header-app">
                        <ul>
                            <li>
                                <Link to="/">首页</Link>
                            </li>
                            <li>
                                <Link to="/column">栏目</Link>
                            </li>
                            <li>
                                <Link to="/product">商品</Link>
                            </li>
                        </ul>
                    </header>
                    <div className="web-content">
                        <Switch>
                            <Route exact path="/">
                                <Index />
                            </Route>
                            <Route path="/column">
                                <Column />
                            </Route>
                            <Route path="/product" component={Product} />
                            <Route path="/detail/:aid" component={ColumnContent}/>
                            <Route path="/content" component={Content}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
