import React, { Component } from 'react'
import Poschild from './Poschild'

export default class Posparent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[]
      }
    }
    
  render() {
    const {receivepost}=this
    const {post}=this.state
    return (
      <div>
        <Poschild receivepost={receivepost}/>
        <table>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {post.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                    </tr>
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
