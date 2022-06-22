import { useState } from "react";
import Album1 from "./Album1";
import Album2 from "./Album2";

function Album(){
  const[message,setmessage]=useState("")
  const[album,setalbum]=useState({})
  const[allalbum,setallalbum]=useState([])

  const sendmessage=(message)=>{
    setmessage(message)
  }

  const sendalbum=(album)=>{
    setalbum(album)
  }

  const sendallalbum=(allalbum)=>{
    setallalbum(allalbum)
  }
  return(
    <div className="Album">
      <Album1 sendmessage={sendmessage} sendalbum={sendalbum} sendallalbum={sendallalbum}/>
      <Album2 message={message} album={album} allalbum={allalbum}/>
    </div>
  )
}
export default Album