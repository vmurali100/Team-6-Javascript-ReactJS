import { useState } from "react"

export const Fusers2=({message,person})=>{
    const[]=useState()
    return(
        <div>
            <p>Fusers2</p>
            <p>{message}</p>
            <p>{person.phone} {person.city}</p>
        </div>
    )
}