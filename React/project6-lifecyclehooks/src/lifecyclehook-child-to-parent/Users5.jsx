import React, { Component } from 'react'
import Userschild5 from './Userschild5'

export default class Users5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        users:[]
      }
    }
    receivedata=(users)=>{
        this.setState({users})
    }
  render() {
    return (
      <div>
        <Userschild5 receivedata={this.receivedata}/>

        {this.state.users.length >0 &&  <table border={1}>
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
            {this.state.users.map((user, i) => {
              return <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            })}
          </tbody>
        </table>}
      </div>
    )
  }
}
