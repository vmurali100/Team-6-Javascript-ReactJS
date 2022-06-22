import { useState } from "react"

export const Func8=({factory,labour,workers})=>{
    const[]=useState()
    return(
        <div>
          <p>{factory}</p>
          <h1>{labour.fname}{labour.lname}</h1>
          
          <ul>
            {workers.map((wo,i)=>{
                return <li key={i}>{wo}</li>
            })}
          </ul>
        </div>
    )
}