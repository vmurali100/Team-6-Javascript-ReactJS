import React, { Component } from 'react'
import Comchild from './Comchild'

export default class Comparent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        comment:[]
      }
    }
    receivecomments=(comment)=>{
        this.setState({comment})
    }
  render() {
    const {receivecomments}=this
    const {comment}=this.state
    return (
      <div>
        <Comchild receivecomments={receivecomments}/>
       {comment.length>0 &&  <table border={1}>
            <thead>
                <tr>
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {comment.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.postId}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.body}</td>
                    </tr>
                })}
            </tbody>
        </table>}
      </div>
    )
  }
}
