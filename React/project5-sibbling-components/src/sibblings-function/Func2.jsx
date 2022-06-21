import { useState } from "react"

export const Func2=({message,person})=>{
    const[]=useState()
    
    return(
        <div>
            <p>Comp2</p>
          <b>  {message}</b>
            <p>{person.fname} {person.lname}</p>
        </div>
    )
}