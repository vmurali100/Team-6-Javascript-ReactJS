import React, { Component } from 'react'

export default class Hover extends Component {
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
        <p>Hover</p>
        <h1 onMouseOver={this.IncrementHandle}>The Count is:{this.state.count}</h1>
      </div>
    )
  }
}
