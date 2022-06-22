import { useState } from "react"


export const Todoss1=({sendmessage,message,sendperson,person,sendalltodos,todo})=>{
    const[]=useState(
        message="hello todoss",
        person={
            fname:"arun",
            lname:"krishnamoorthy"
        },
      todo=alltodos,
    )
    return(
        <div>
            <button onClick={()=>{sendmessage(message)}}>send message</button>
            <button onClick={()=>{sendperson(person)}}>send person</button>
            <button onClick={()=>{sendalltodos(todo)}}>send todos</button>
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
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      },
      {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
      }
]