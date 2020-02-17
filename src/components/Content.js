import React, { Component } from 'react';
import url from 'url'
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      aid:''
     };
  }
  componentDidMount(){
    // console.log(this.props.location.search)
    let value=url.parse(this.props.location.search,true)
    this.setState({aid:value.query.aid})
  }
  render() {
    return (
      <div>
        <h1>商品详情</h1>
        aid:{this.state.aid}
      </div>
    );
  }
}

export default Content;