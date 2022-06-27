import React, { Component } from 'react'
import Todchild from './Todchild'

export default class Todparent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        todos:[]
      }
    }
    receivetodos=(todos)=>{
        this.setState({todos})
    }
  render() {
    const {receivetodos}=this
    const {todos}=this.state
    return (
      <div>
        <Todchild receivetodos={receivetodos}/>
        {todos.length>0 && <table border={1}>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.completed}</td>
                    </tr>
                })}
            </tbody>
        </table>}
      </div>
    )
  }
}
