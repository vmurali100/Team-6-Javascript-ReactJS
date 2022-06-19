import { useState } from "react"
import { Puserschild } from "./Puserschild"

export const Pusers=()=>{
    const[users,setusers]=useState([])
    const[message,setmessage]=useState("")
    const[person,setperson]=useState({})
    const sendusers=()=>{
        setusers(allusers)
    }
    const sendmessage=()=>{
        setmessage("Welcom to the users functional compoent in parent to child")
    }
    const sendperson=()=>{
        setperson({
            name:"padmaja",
            fathername:"DMS reddy",
            mothername:"manjula"
        })
    }
    return(
        <div>
            <button onClick={sendusers}>send users</button>
            <button onClick={sendmessage}>send message</button>
            <button onClick={sendperson}>send person</button>
            <Puserschild users={users} message={message} person={person}/>
        </div>
    )
}
var allusers=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz"
    }
  ]