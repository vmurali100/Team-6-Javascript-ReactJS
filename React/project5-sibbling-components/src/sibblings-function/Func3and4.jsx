import { useState } from "react"
import { Func3 } from "./Func3"
import { Func4 } from "./Func4"

export const Func3and4 =()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[users,setusers]=useState([])
    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendusers=(users)=>{
        setusers(users)
    }
    return(
        <div>
            <Func3 sendmessage={sendmessage} sendperson={sendperson} sendusers={sendusers}/>
            <Func4  message={message} person={person} users={users}/>
        </div>
    )
}