import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class CountComponent extends Component {
 componentWillUnmount(){
    console.log("componentWillUnmount triggered")
 }

  render() {
    return (
      <div>CountComponent</div>
    )
  }
}

