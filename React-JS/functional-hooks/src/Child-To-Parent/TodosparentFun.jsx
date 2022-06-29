import React from 'react'
import { useState } from 'react'
import { TodosChildFun } from './TodosChildFun'

export const TodosparentFun = () => {
    const [Todosusers,setTodosusers]=useState([])
    const getdatafromchild= (TodosparentFun)=>{
        setTodosusers(TodosparentFun)
    }
  return (
    <div>
        <TodosChildFun getdata={getdatafromchild}/>
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
                {Todosusers.map((user,i)=>{
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
