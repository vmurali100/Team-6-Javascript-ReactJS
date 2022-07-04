import React, { Component } from 'react'

export default class NewClickcounter extends Component {
    
  render() {
    return (
      <div>
        <p>NewClickcounter</p>
        <button onClick={this.props.inCrementCount}>Increment</button>
        <button onClick={this.props.decrementCount}>Decrement</button>
        <h2 >Click {this.props.count} many Times</h2>
      </div>
    )
  }
}
