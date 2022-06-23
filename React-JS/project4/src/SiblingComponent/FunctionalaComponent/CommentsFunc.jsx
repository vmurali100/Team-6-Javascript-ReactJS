import { useState } from "react"
import { CommentsFunc1 } from "./CommentsFunc1"
import { CommentsFunc2 } from "./CommentsFunc2"

export const CommentsFunc =()=>{
    const [message,setmessage]=useState("")
    const [person,setperson]=useState({})
    const [comments,setcomments]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }

    const sendperson=(person)=>{
        setperson(person)
    }

    const sendcomments=(comments)=>{
        setcomments(comments)
    }
    return (
        <div>
            <CommentsFunc1 sendmessage={sendmessage} sendperson={sendperson} sendcomments={sendcomments}/>
            <CommentsFunc2 message={message} person={person} comments={comments}/>
        </div>
    )
}
