import { useState } from "react"

export const Funcsample6 =()=>{
    const[name,setname]=useState("kavya")
    const[person,setperson]=useState({
        name:"kavya",
        email:"kavya@gmail.com"
    })
    const[users,setusers]=useState(["ramya","sowmya","navya"])
    return(
        <div>
            <button onClick={()=>{{setname("navya")}}}>showName</button>
            <button onClick={()=>{{setperson({name:"navya",email:"navya@gmail.com"})}}}>showPerson</button>
            <button onClick={()=>{setusers(["divya","gayathri","anusha"])}}>showUser</button>
            <p>{name}</p>
            <p>{person.name}-{person.email}</p>
            <ul>{users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}