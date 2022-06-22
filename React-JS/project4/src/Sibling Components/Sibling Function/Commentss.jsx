import { useState } from "react"
import { Commentss1 } from "./Commentss1"
import { Commentss2 } from "./Commentss2"

export const Commentss=()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[comment,setallcomments]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendallcomments=(comment)=>{
        setallcomments(comment)
    }
    return(
        <div>
            <Commentss1 sendmessage={sendmessage} sendperson={sendperson} sendallcomments={sendallcomments}/>
            <Commentss2 message={message} person={person} comment={comment}/>
        </div>
    )
}