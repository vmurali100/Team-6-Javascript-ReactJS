import { useState } from "react"

export const Userss2=({message,person,users})=>{
    const[]=useState()

    return(
        <div>
            <p>{message}</p>
            <p>{person.fname}{person.lname}</p>
            <ul>
                {users.map((users,i)=>{
                   return <li key={i}>{users.id}{users.name}{users.username}{users.email}</li>
                })}
            </ul>
        </div>
    )
}