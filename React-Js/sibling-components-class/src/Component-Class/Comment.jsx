import { useState } from "react";
import CommentComp1 from "./CommentComp1";
import CommentComp2 from "./CommentComp2";

export function Comment(){
    const [message, setMessage]=useState("")
    const [person, setPerson]=useState({})
    const [comments, setcomments]=useState([])

    const sendMessage = (msg)=>{
        setMessage(msg)
    }
    const sendPerson = (per) =>{
        setPerson(per)
    }
    const sendComments = (users) =>{
        setcomments(users)
    }
    return(
        <div>
            <CommentComp1 sendMessage={sendMessage} sendPerson={sendPerson} sendComments={sendComments}/>
            <CommentComp2 message={message} person={person} comments={comments}/>
        </div>
    )
}