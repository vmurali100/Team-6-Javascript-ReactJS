import React, { Component } from 'react'

export default class NewClickcounter1 extends Component {
    
  render() {
    return (
      <div>
        <p>NewClickcounter1</p>
        
        <button onClick={this.props.incrementCount}>Click {this.props.count} many Times</button>
        <button onClick={this.props.decrementCount}>Decrement</button>
      </div>
    )
  }
}
