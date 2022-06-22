import { useState } from "react";
import Comments1 from "./Comments1";
import Comments2 from "./Comments2";

function Comments(){
  const[message,setmessage]=useState("")
  const[comment,setcomment]=useState({})
  const[allcomments,setallcomments]=useState([])

  const sendmessage=(message)=>{
    setmessage(message)
  }

  const sendcomment=(comment)=>{
    setcomment(comment)
  }

  const sendallcomments=(allcomments)=>{
    setallcomments(allcomments)
  }

  return(
    <div>
      <Comments1 sendmessage={sendmessage} sendcomment={sendcomment} sendallcomments={sendallcomments}/>

      <Comments2 message={message} comment={comment} allcomments={allcomments}/>
    </div>
  )
}
export default Comments

