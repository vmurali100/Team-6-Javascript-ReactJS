import { useState } from "react"
import { TodosFunc1 } from "./TodosFunc1"
import { TodosFunc2 } from "./TodosFunc2"

export const TodosFunc=()=>{
    const [message,setmessage]=useState("")

    const [person,setperson]=useState({})
     
    const [todos,settodos]=useState([])

    const sendmessage=(message)=>{
        setmessage(message)
    }

    const sendperson=(person)=>{
          setperson(person)
    }

    const sendtodos=(todos)=>{
        settodos(todos)
    }

    return(
       <div>
         <TodosFunc1 sendmessage={sendmessage} sendperson={sendperson} sendtodos={sendtodos}/>
        <TodosFunc2 message={message} person={person} todos={todos}/>
       </div>
    )
}