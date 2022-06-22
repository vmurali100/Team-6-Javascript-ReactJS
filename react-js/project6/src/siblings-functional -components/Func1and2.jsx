import { useState } from "react"
import { Func1 } from "./Func1"
import Func2 from "./Func2"

export const Func1and2=()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    return(
        <div>
            <Func1 sendmessage={sendmessage} sendperson={sendperson}/>
            <Func2 message={message} person={person}/>
        </div>
    )
}