import React, { Component } from 'react'

export default class HoverCount1 extends Component {
  render() {
    return (
      <div>
        <p>
            <p>HoverCount1</p>
            <button  onMouseOver={this.props.incrementCount}>Increment</button>
            <button onMouseOut={this.props.decrementCount}>Decrement</button>
            <h2>Hovered {this.props.count} times</h2>

            {/* <h2 onMouseOver={this.props.incremenftCount} onMouseOut={this.props.decrementCount}>Hovered {this.props.count} times</h2> */}
        </p>
      </div>
    )
  }
}
