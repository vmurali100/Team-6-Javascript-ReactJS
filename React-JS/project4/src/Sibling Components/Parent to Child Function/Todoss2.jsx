import { useState } from "react"

export const Todoss2=({message,person,todo})=>{
    const[]=useState()

    return(
        <div>
            <p>{message}</p>
            <p>{person.fname} {person.lname}</p>
            <ul>
                {todo.map((todo,i)=>{
                  return  <li key={i}>{todo.userId}{todo.id} {todo.title} {todo.completed}</li>
                })}
            </ul>
        </div>
    )
}