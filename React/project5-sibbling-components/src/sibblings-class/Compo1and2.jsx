import { useState } from "react"
import { Compo1 } from "./Compo1";
import { Compo2 } from "./Compo2";

export function Compo1and2(){
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[users,setusers]=useState([])
    const sendmessage=(msg)=>{
        setmessage(msg)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendusers=(users)=>{
        setusers(users)
    }
    return(
        <div>
            <Compo1 sendmessage={sendmessage} sendperson={sendperson} sendusers={sendusers}/>
            <Compo2 message={message} person={person} users={users}/>
        </div>
    )
}