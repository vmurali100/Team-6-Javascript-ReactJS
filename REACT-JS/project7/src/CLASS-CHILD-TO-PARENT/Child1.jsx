import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Child1 extends Component {
  constructor(){
    super()

    this.state={
        users:[]
    }
  }

  render() {
    const {receivedusers}=this.props
    return (
      <div>
        <button onClick={()=>{receivedusers(allusers)}}>Send Data Child To Parent</button>
      </div>
    )
  }
}

var allusers=[
    {
        "fname": "Timothy",
        "lname": "Casey"
    },
    {
        "fname": "Megh",
        "lname": "Breuninger"
    },
    {
        "fname": "Roslyn",
        "lname": "Powers"
    },
    {
        "fname": "Katina",
        "lname": "Sadler"
    },
    {
        "fname": "Kellyann",
        "lname": "Granger"
    },
    {
        "fname": "Kathryn",
        "lname": "Shelton"
    },
    {
        "fname": "Thelma",
        "lname": "Bothun"
    },
    {
        "fname": "Charlene",
        "lname": "Mcinerney"
    },
    {
        "fname": "Jiby",
        "lname": "Reimer"
    },
    {
        "fname": "Heather",
        "lname": "Drolet"
    }
]
