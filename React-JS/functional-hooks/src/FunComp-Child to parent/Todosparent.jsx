import React from 'react'
import { useState } from 'react'
import Todoschild from './Todoschild'

export const Todosparent = () => {
    const [todo, settodo] = useState([])
    const receivedata=(todo)=>(settodo(todo))
  return (
    <div>
        <Todoschild getdata={receivedata}/>
        {todo.length>0 && <table border={1}>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                {todo.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.copmleted}</td>
                    </tr>
                })}
            </tbody>
        </table>}
    </div>
  )
}
export default Todosparent