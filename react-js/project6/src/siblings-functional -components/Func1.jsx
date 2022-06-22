import { useState } from "react"


export const Func1=({sendmessage,message,sendperson,person})=>{
    const[]=useState(
        message="nithya",
        person={
            fname:"nithya",
            lname:"mani"
        }
    )
        
        return(
            <div>
               <button onClick={()=>{sendmessage(message)}}>send message</button> 
               <button onClick={()=>{sendperson(person)}}>send person</button>
            </div>
        )
}