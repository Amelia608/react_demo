import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      msg:'我是头部组件',
      message:'我是子组件的值'
    }
  }
  getnews=()=>{
    this.props.news.getdata()
    console.log(this.props.news)
  }
  sendData=()=>{
    this.props.news.getChildData(this.state.message)
  }
  render(h) {
    return (
    <div>{this.props.title}
    <br/>
      <button onClick={this.props.run}>调用News组件中run的方法</button>
      <button onClick={this.getnews}>调用父组件的方法</button>
      <button onClick={this.sendData}>子组件向父组件传值</button>
    </div>
    )
  }
}
Header.propTypes={
  title:PropTypes.string
}
Header.defaultProps={
  title:'头部默认标题'
}
export default Header;