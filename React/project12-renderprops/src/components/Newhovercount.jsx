import React, { Component } from 'react'

export default class Newhovercount extends Component {
  render() {
    return (
      <div>
        <p>Newhovercount</p>
        <h1 onMouseOver={this.props.incrementcount}>Hovered {this.props.count} times</h1>
      </div>
    )
  }
}
