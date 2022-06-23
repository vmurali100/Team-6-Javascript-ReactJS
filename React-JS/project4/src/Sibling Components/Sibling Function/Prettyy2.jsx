import { useState } from "react"

export const Prettyy2=({message,person,prettyy})=>{
    const[]=useState()
    return(
        <div>
            <p>{message}</p>
            <p>{person.fname}{person.lname}</p>
            <ul>
                {prettyy.map((prettyy,i)=>{
                    return <li key={i}>{prettyy.id}{prettyy.email}{prettyy.username}{prettyy.password}</li>
                })}
            </ul>
        </div>
    )
}