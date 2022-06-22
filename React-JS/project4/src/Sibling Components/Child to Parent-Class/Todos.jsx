import { useState } from "react";
import Todos1 from "./Todos1";
import Todos2 from "./Todos2";



function Todos(){
   const[message,setmessage]=useState("")
   const[todo,settodo]=useState({})
   const[alltodos,setalltodos]=useState([])

   const sendmessage=(message)=>{
    setmessage(message)
   }
   const sendtodo=(todo)=>{
    settodo(todo)
   }
   const sendalltodos=(alltodos)=>{
    setalltodos(alltodos)
   }
    
  return(
    <div className="Todos">
        <Todos1 sendmessage={sendmessage} sendtodo={sendtodo} sendalltodos={sendalltodos}/>
        <Todos2 message={message} todo={todo} alltodos={alltodos}/>
   </div>
  )
}
export default Todos