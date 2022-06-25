import axios from 'axios'
import React, { Component } from 'react'
import Userstable from './Userstable'

export default class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{this.setState({users:response.data})})
    }
  render() {
    return (
      <div>
        <Userstable users={this.state.users}/>
      </div>
    )
  }
}
