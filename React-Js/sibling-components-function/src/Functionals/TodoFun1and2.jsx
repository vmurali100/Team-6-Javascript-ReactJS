import { useState } from "react"
import { TodoFun1 } from "./TodoFun1"
import { TodoFun2 } from "./TodoFun2"

export const TodoFun1and2 =()=>{
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const[todos,settodos]=useState([])
    const sendmessage=(message)=>{
        setmessage(message)
    }
    const sendperson=(person)=>{
        setperson(person)
    }
    const sendtodos=(users)=>{
        settodos(users)
    }
    return(
        <div>
            <TodoFun1 sendmessage={sendmessage} sendperson={sendperson} sendtodos={sendtodos}/>
            <TodoFun2  message={message} person={person} todos={todos}/>
        </div>
    )
} 