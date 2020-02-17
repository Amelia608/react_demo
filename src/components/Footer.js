import React, { Component } from 'react';
class Footer extends Component{
  constructor(props){
    super(props)
    this.state={
      title:'我是底部组件'
    }
  }
  run=()=>{
    alert('我是底部组件的run方法')
  }
  render(h) {
    return (
      <div>我是底部组件</div>
    )
  }
  
}
export default Footer;