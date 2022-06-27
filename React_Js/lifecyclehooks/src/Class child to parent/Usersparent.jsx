import React, { Component } from 'react'
import Userschild from './Userschild'

export default class Usersparent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    receiveusers=(users)=>{
        this.setState({users})
    }
  render() {
    const {receiveusers}=this
    const {users}=this.state
    return (
      <div>
        <Userschild receiveusers={receiveusers}/>
        <table border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>phone</th>
                <th>website</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,i)=>{
                return(
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
      </div>
    )
  }
}
