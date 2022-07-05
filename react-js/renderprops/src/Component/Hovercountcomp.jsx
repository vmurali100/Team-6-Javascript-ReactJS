import React, { Component } from 'react'

export default class Hovercountcomp extends Component {
    
  render() {
    return (
      <div>
        <p>hovercountcomp</p>
        <h1 onMouseOver={this.props.incrementcount}>hovered {this.props.count}</h1>
        
      </div>
    )
  }
}


