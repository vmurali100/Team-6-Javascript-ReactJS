import { useState } from "react"

export const Func1=({sendmessage,message,sendperson,person})=>{
    const[]=useState(
        message="deepthi",
        person={
            fname:"deepthi",
            lname:"boppana"
        }
    )
    
    return(
        <div>
            <p>comp1</p>
            <button onClick={()=>{sendmessage(message)}} >send message</button>
            <button onClick={()=>{sendperson(person)}} >send person</button>
        </div>
    )
}