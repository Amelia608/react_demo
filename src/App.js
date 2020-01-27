import React,{Component} from 'react';
import logo from './assets/images/logo.svg';
import Home from './components/Home'
import News from './components/News'

class App extends Component{
  render(h) {
    return(
      <div className="App">
        <h2>我是react根组件</h2>
        <Home/>
        <News/>
      </div>
    )
  }
}
export default App;
