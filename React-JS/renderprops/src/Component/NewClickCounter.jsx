import React, { Component } from 'react'

export default class NewClickCounter extends Component {
    
  render() {
    return (
      <div>
        <p>NewClickCounter</p>
        <h2 onClick={this.props.incrementcounter}>clicked {this.props.count} many times</h2>
        <button onClick={this.props.incrementcounter}>Increment</button>
        <button onClick={this.props.reductioncounter}>reduction</button>
      </div>
    )
  }
}
