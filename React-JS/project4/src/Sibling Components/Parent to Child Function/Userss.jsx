import { useState } from "react"
import { Userss1 } from "./Userss1"
import { Userss2 } from "./Userss2"

export const Userss=()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[users,setallusers]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendallusers=(users)=>{
        setallusers(users)
    }
    return(
        <div>
            <Userss1 sendmessage={sendmessage} sendperson={sendperson} sendallusers={sendallusers}/>
            <Userss2 message={message} person={person} users={users}/>
        </div>
    )
}