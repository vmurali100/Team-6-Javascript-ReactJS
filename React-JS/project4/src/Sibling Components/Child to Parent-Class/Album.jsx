import { useState } from "react";
import { Albumm1 } from "../Parent to Child Function/Albumm1";
import { Albumm2 } from "../Parent to Child Function/Albumm2";


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
      <Albumm1 sendmessage={sendmessage} sendalbum={sendalbum} sendallalbum={sendallalbum}/>
      <Albumm2 message={message} album={album} allalbum={allalbum}/>
    </div>
  )
}
export default Album