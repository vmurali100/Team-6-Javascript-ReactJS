import { useState } from "react"
import { FilltextFun1 } from "./FilltextFun1"
import { FilltextFun2 } from "./FilltextFun2"

export const FilltextFun1and2 =()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[filltext,setfilltext]=useState([])
    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendfilltext=(users)=>{
        setfilltext(users)
    }
    return(
        <div>
            <FilltextFun1 sendmessage={sendmessage} sendperson={sendperson} sendfilltext={sendfilltext}/>
            <FilltextFun2  message={message} person={person} filltext={filltext}/>
        </div>
    )
} 