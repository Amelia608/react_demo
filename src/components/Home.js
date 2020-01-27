import React,{Component} from 'react'
class Home extends Component{
  constructor(){
    super();
    this.state={
      name:'juneChen',
      age:'30'
    }
  }
  render(h) {
    return (
      <div className="component-home">
        <h3>我是Home组件</h3>
    <p>my name is {this.state.name},i'm {this.state.age} years old</p>
      </div>
    )
  }
}
export default  Home