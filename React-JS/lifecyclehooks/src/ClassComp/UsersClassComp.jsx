import React, { Component } from 'react'
import axios from "axios"
import { UsersClassTable } from './UsersClassTable'

export default class UsersClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Users:[],
      }
    }

    componentDidMount(){
        const url="https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
           axios.get(url).then((response)=>{this.setState({Users:response.data})})
    }

  render() {
    return (
      <div>
        <UsersClassTable UsersClassDetails={this.state.Users}/>
      </div>
    )
  }
}
