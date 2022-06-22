import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Childs2 extends Component {
    constructor() {
      super()
    
      this.state = {
         Users : []
      }
    }
    

  render() {
    const{ReceivedUsers} = this.props
    return (
      <div> 
        <button onClick={()=>{ReceivedUsers(AllUsers)}}>Send Data Childs To Parents</button>
      </div>
    )
  }
}

var AllUsers = [
    {
        "id": 27,
        "email": "WJoachim@pharetra.net",
        "username": "SBalulis",
        "password": "j2ugO"
    },
    {
        "id": 28,
        "email": "TVoss@mattis.com",
        "username": "RDauk",
        "password": "xycZu"
    },
    {
        "id": 29,
        "email": "MBurkhardt@malesuada.com",
        "username": "DStafford",
        "password": "00AVE"
    },
    {
        "id": 30,
        "email": "MNewell@facilisis.org",
        "username": "HLaiuppa",
        "password": "R8N8P"
    },
    {
        "id": 31,
        "email": "GOdonoghue@rutrum.gov",
        "username": "SMcwhorter",
        "password": "DuxTC"
    },
    {
        "id": 32,
        "email": "RKovich@velit.net",
        "username": "KFrugal",
        "password": "uc3a8"
    },
    {
        "id": 33,
        "email": "EWall@scelerisque.io",
        "username": "TSeacrist",
        "password": "54I5f"
    },
    {
        "id": 34,
        "email": "IBurgin@magna.io",
        "username": "CVoss",
        "password": "lOOnT"
    },
    {
        "id": 35,
        "email": "BKnowlton@etiam.io",
        "username": "PDay",
        "password": "BJueY"
    },
    {
        "id": 36,
        "email": "JCallison@sit.com",
        "username": "IBetts",
        "password": "6MvrW"
    }
]
