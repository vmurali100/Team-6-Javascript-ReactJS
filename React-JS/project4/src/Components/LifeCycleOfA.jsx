import React, { Component } from 'react'
import CountComponents from './CountComponents'
 
import LifeCycleOfB from './LifeCycleOfB'

export default class LifeCycleOfA extends Component {
    constructor(props) {
        console.log("constructor Triggered LifeCycleOfA")
      super(props)
      this.state = {  
        Message:"Iam From Life CycleA" ,
        Count:20,
        Person:{
            fname:"A Mansur",
            lname:"Vali"
        },
        Users:Users
      }
    }
  render() {
    console.log("render Triggered LifeCycleOfA")
    return (
      <div> 
        <p>LifeCycleOfA</p>
        <button onClick={()=>{this.setState({Message:"Iam Changed in LifeCycleA",Count:25})}}>Change Message in LifeCycleA</button>
        <button onClick={()=>{this.setState({Person:{fname:"S Aadil",lname:"Basha"}})}}>Change Person in LifeCycleA</button>
        <button onClick={()=>{this.setState(Users)}}>Change Users in LifeCycleA</button>
        <hr />
        <LifeCycleOfB msg={this.state.Message} Person={this.state.Person} Users={Users}/>
        <hr />
        {this.state.Count === 20 && <CountComponents/>}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount Did Mount LifeCycleOfA")
  }
}
var Users = [
    {
        "id": 65,
        "email": "JLafave@et.org",
        "username": "BKlepsteen",
        "password": "ilFir"
    },
    {
        "id": 66,
        "email": "NSholtz@sagittis.ly",
        "username": "TWhalley",
        "password": "HUUUv"
    },
    {
        "id": 67,
        "email": "SDees@non.ly",
        "username": "JBurkes",
        "password": "oGWzC"
    },
    {
        "id": 68,
        "email": "CPyle@sed.com",
        "username": "DVentura",
        "password": "JdXe3"
    },
    {
        "id": 69,
        "email": "MUsgiveaway@vel.net",
        "username": "OHalligan",
        "password": "q3v1m"
    },
    {
        "id": 70,
        "email": "TGibson@pharetra.io",
        "username": "SMcallister",
        "password": "sPtt7"
    },
    {
        "id": 71,
        "email": "MHarrison@nec.net",
        "username": "KRipley",
        "password": "gmscB"
    },
    {
        "id": 72,
        "email": "RRussell@placerat.io",
        "username": "MMcglaughlin",
        "password": "5Xvk8"
    },
    {
        "id": 73,
        "email": "ACrenshaw@sapien.net",
        "username": "HWomen",
        "password": "iEbqW"
    },
    {
        "id": 74,
        "email": "SBruce@vel.com",
        "username": "AMayne",
        "password": "zduwd"
    }
]
 