import React, { Component } from 'react'
import Child2 from './Child2'

export default class Parent2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        filltext1:[]
      }
    }
    receivedetails=( filltext1)=>{
        this.setState({ filltext1})
    }
  render() {
    return (
      <div>
        <Child2  receivedetails={this.receivedetails}/>
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>username</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {this.state.filltext1.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
