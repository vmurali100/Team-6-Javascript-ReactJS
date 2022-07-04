import React, { Component } from 'react'

export default class NewClickcounter4 extends Component {
    
  render() {
    return (
      <div>
        <p>NewClickcounter4</p>
        <h2>Click{this.props.count} many Times</h2>
        
        <button onClick={this.props.incrementCount}>Increce</button>
        <button onClick={this.props.decrementCount}>Decrement</button>
      </div>
    )
  }
}
