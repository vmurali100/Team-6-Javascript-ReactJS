import { useState } from "react";
import Todos1 from "./Todos1";
import Todos2 from "./Todos2";

function Todos(){
    const [message,setmessage]=useState("")
    const [person,setperson]=useState({})
    const [AllTodos,setAllTodos]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }
    
    const sendperson=(person)=>{
        setperson(person)
    }

    const sendAllTodos=(AllTodos)=>{
        setAllTodos(AllTodos)
    }

    return(
        <div className="Todos">
            <Todos1 sendmessage={sendmessage} sendperson={sendperson} sendAllTodos={sendAllTodos}/>
            <Todos2 message={message} person={person} AllTodos={AllTodos}/>
        </div>
    )
}
export default Todos