import React, { Component } from 'react'
import axios from 'axios'
import UsersclassTable from './UsersclassTable'
export default class Usersclasscomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount(){
        const url=" http://localhost:3000/userss"
        axios.get(url).then((Response)=>{this.setState({users:Response.data})})
    }
  render() {
    return (
      <div>
      <UsersclassTable use={this.state.users}/>
      </div>
    )
  }
}
