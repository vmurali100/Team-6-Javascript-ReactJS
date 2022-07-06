import React, { Component } from 'react'

export default class Click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    IncrementHandle=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <p>Click</p>
        <button onClick={this.IncrementHandle}>Click To Increment Count</button>
        <h1>The Count is:{this.state.count}</h1>
      </div>
    )
  }
}
