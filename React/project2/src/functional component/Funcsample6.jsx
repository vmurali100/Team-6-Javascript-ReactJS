import { useState } from "react"

export const Funcsample6 =()=>{
    const[name,setname]=useState("kavya")
    const[person,setperson]=useState({
        name:"kavya",
        email:"kavya@gmail.com"
    })
    const[userrs,setusers]=useState(["ramya","sowmya","navya"])
    return(
        <div>
            <p>{name}</p>
            <p>{person.name}-{person.email}</p>
            <ul>{userrs.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}