import React, { Component } from 'react'

export default class Counter5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementcounter=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        {this.props.hello(this.state.count,this.incrementcounter)}
      </div>
    )
  }
}