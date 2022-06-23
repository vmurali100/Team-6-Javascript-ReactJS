import { useState } from "react"
import { UsersFunc1 } from "./UsersFunc1"
import { UsersFunc2 } from "./UsersFunc2"

export const UsersFunc =()=>{
    const [message,setmessage]=useState("")
    const [person,setperson]=useState({})
    const [users,setusers]=useState([])
     
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
            <UsersFunc1 sendmessage={sendmessage} sendperson={sendperson} sendusers={sendusers}/>
            <UsersFunc2 message={message} person={person} users={users}/>
        </div>
    )
}