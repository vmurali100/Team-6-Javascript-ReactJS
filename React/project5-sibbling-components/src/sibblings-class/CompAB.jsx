import { useState } from "react";
import { CompA } from "./CompA";
import { CompB } from "./CompB";

 export function CompAB(){
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
            <CompA sendmessage={sendmessage} sendperson={sendperson} sendusers={sendusers}/>
            <CompB message={message} person={person} users={users}/>
        </div>
    )
}