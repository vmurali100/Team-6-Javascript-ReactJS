import React, { Component } from 'react'

export default class NewClickcounter5 extends Component {
    
  render() {
    return (
      <div>
        <p>NewClickcounter5</p>
        <h2>Click{this.props.count} many Times</h2>
        
        <button onClick={this.props.incrementCount}>Increce</button>
        <button onClick={this.props.decrementCount}>Decrement</button>
      </div>
    )
  }
}
