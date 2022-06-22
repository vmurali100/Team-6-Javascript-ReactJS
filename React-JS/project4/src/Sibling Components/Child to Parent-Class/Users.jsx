import { useState } from "react";
import Users1 from "./Users1";
import Users2 from "./Users2";

function Users(){
  const[message,setmessage]=useState("")
  const[user,setuser]=useState({})
  const[alluser,setalluser]=useState([])

  const sendmessage=(message)=>{
    setmessage(message)
  }

  const senduser=(user)=>{
    setuser(user)
  }

  const sendallusers=(alluser)=>{
    setalluser(alluser)
  }
  return(
    <div>
      <Users1 sendmessage={sendmessage} senduser={senduser} sendallusers={sendallusers}/>
      <Users2 message={message} user={user} alluser={alluser}/>
    </div>
  )
}
export default Users