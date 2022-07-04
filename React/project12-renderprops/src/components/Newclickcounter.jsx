import React, { Component } from 'react'

export default class Newclickcounter extends Component {

  render() {
    return (
      <div>
        <p>Newclickcounter</p>
        <button onClick={this.props.incrementcount}>increment </button>
        <button onClick={this.props.decrementcount}>decrement</button>
        <h1>clicked {this.props.count} timmes</h1>
      </div>
    )
  }
}
