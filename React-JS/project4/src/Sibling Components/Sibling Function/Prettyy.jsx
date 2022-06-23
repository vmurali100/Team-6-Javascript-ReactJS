import { useState } from "react"
import { Prettyy1 } from "./Prettyy1"
import { Prettyy2 } from "./Prettyy2"

export const Prettyy=()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[prettyy,setprettyy]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendprettyy=(prettyy)=>{
        setprettyy(prettyy)
    }
    return(
        <div>
            <Prettyy1 sendmessage={sendmessage} sendperson={sendperson} sendprettyy={sendprettyy}/>
            <Prettyy2 message={message} person={person} prettyy={prettyy}/>
        </div>
    )
}
