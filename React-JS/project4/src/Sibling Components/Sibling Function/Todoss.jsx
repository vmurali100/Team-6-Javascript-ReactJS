import { useState } from "react"
import { Todoss1 } from "./Todoss1"
import { Todoss2 } from "./Todoss2"

export const Todoss=()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[todo,setalltodos]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendalltodos=(todo)=>{
        setalltodos(todo)
    }
    return(
        <div>
            <Todoss1 sendmessage={sendmessage} sendperson={sendperson} sendalltodos={sendalltodos}/>
            <Todoss2 message={message} person={person} todo={todo}/>
        </div>
    )
}