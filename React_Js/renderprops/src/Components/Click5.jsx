import React, { Component } from 'react'

export default class Click5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <p>Click5</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <h2>click {this.props.count} clicked</h2>
      </div>
    )
  }
}
