import { useState } from "react"

export const Fusers1=({sendmessage,message,sendperson,person})=>{
    const[]=useState(
        message="hello from functional",
        person={
            phone:"467383990209",
            city:"chittoor"
        }
    )
    return(
        <div>
            <p>Fusers</p>
            <button onClick={()=>{sendmessage(message)}}>send message</button>
            <button onClick={()=>{sendperson(person)}}>send person</button>
        </div>
    )
}