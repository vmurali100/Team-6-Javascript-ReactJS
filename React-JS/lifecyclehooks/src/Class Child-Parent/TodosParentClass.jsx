import React, { Component } from 'react'
import TodosChildClass from './TodosChildClass'

export default class TodosParentClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Todos:[]
      }
    }
    recieveTodos=(Todos)=>{
        this.setState({Todos})
    }
  render() {
    const {recieveTodos} =this
    const {Todos} = this.state

    return (
       

      <div>
        <TodosChildClass recieveTodos={recieveTodos}/>
        <table border="1">
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>tiitle</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                {Todos.map((user,i)=>{
                    return(
                        <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.completed}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

      </div>
    )
  }
}
