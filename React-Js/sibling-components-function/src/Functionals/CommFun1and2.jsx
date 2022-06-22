import { useState } from "react"
import { CommFun1 } from "./CommFun1"
import { CommFun2 } from "./CommFun2"

export const CommFun1and2 =()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[comments,setcomments]=useState([])
    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendcomments=(users)=>{
        setcomments(users)
    }
    return(
        <div>
            <CommFun1 sendmessage={sendmessage} sendperson={sendperson} sendcomments={sendcomments}/>
            <CommFun2  message={message} person={person} comments={comments}/>
        </div>
    )
} 