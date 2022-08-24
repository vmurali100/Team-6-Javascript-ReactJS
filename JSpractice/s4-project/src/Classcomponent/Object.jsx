import React, { Component } from 'react'

export default class Object extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person:{}
      }
    }
    changePerson=()=>{
        this.setState({person:{name:"Padmaja",age:23,city:"chittoor"}})
    }
  render() {
    return (
      <div>
        <button onClick={this.changePerson}>Change Person</button>
        <p>Name : {this.state.person.name}</p>
        <p>Age : {this.state.person.age}</p>
        <p>City : {this.state.person.city}</p>
      </div>
    )
  }
}
