import { useState } from "react"
import { TodoChild10 } from "./TodosChild"

export const Todos10 =()=>{
    const[message,setMessage]=useState("")
    const[person,setPerson]=useState({})
    const[users,setusers]=useState([])
    const sendMessage=()=>{
        setMessage("hello welcome to parent to child of function component")
    }
    const sendPerson=()=>{
        setPerson({
            fname:"deepthi",
            lname:"boppana"
        })
    }
    const sendUsers=()=>{
        setusers(alltodos)
    }

    
    return(
        <div>
            <button onClick={sendMessage}>send message</button>
            <button onClick={sendPerson}>send person</button>
            <button onClick={sendUsers}>send users</button>
            <TodoChild10 message={message} person={person} users={users}/>
        </div>
    )
}
var alltodos=[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
]