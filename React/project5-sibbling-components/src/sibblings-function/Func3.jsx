import { useState } from "react"

export const Func3=({message,sendmessage,sendperson,person,users,sendusers})=>{
    const[]=useState(
        message="heloooo",
        person={
            fname:"Chintu",
            lname:"chintu"
        },
        users=alltodos
    )
    return(
        <div>
            <button onClick={()=>{sendmessage(message)}}>sendmessage</button>
            <button onClick={()=>{sendperson(person)}}>sendperson</button>
            <button onClick={()=>{sendusers(users)}}>send users</button>
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
]