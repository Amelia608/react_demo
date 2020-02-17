import React, { Component } from 'react';
class ColumnConetnt extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      aid:''
     };
  }
  componentDidMount(){
    // console.log(this.props.match.params.aid)
    this.setState({aid:this.props.match.params.aid})
  }
  render() {
    return (
    <div>
      <h1>栏目详情</h1>
      aid:{this.state.aid}
    </div>
    );
  }
}

export default ColumnConetnt;