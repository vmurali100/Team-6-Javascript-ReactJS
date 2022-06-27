import React from 'react'
import { useState } from 'react'
import Todoschild from './Todoschild'

export const Todosparent = () => {
    const [todoinfo,settodoinfo]=useState([])
    const receivechildtoparent=(todoinfo)=>{
        settodoinfo(todoinfo)
    }
  return (
    <div>
      <Todoschild getdata={receivechildtoparent}/>
      <table border={1}>
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
            </tr>
        </thead>
        <tbody>
            {todoinfo.map((user,i)=>{
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

export default Todosparent
