import React, { Component } from 'react'
import axios from 'axios'
import { UsersTable } from './UsersTable'

export default class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount(){
        const url="http://localhost:3000/users1"
        axios.get(url).then((response)=>{this.setState({users:response.data})})
    }
  render() {
    return (
      <div>
        <UsersTable usersData={this.state.users}/>
      </div>
    )
  }
}
