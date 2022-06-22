import React, { Component } from 'react'

export default class Comp1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message : "Hi Hello Welcome To React-JS",
         person:{
            fname:"Mansur",
            lname:"Vali"

         },
         Users:Users
      }
    }
  render() {
    return (
      <div>
        <p>Comp1</p>
        <button onClick={()=>{this.props.sendMessage(this.state.Message)}}>Send Message</button>
        <button onClick={()=>{this.props.sendperson(this.state.person)}}>Send Person</button>
        <button onClick={()=>{this.props.sendUsers(this.state.Users)}}>Send Users</button>
        </div>
    )
  }
}
var Users= [
    {
        "fname": "Keefer",
        "lname": "Haft"
    },
    {
        "fname": "Janette",
        "lname": "Gillott"
    },
    {
        "fname": "Dan",
        "lname": "Billanti"
    },
    {
        "fname": "Fransisca",
        "lname": "Hughes"
    },
    {
        "fname": "janie",
        "lname": "Solomon"
    },
    {
        "fname": "Sally",
        "lname": "Vanessen"
    },
    {
        "fname": "LaFaye",
        "lname": "Sober"
    },
    {
        "fname": "Ginger",
        "lname": "Sheppard"
    },
    {
        "fname": "Ghaffar",
        "lname": "Caudill"
    },
    {
        "fname": "Rakesh",
        "lname": "Medeiros"
    }
]
