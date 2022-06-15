import { useState } from "react"

export const Funcsample5 =()=>{
    const[name,setname]=useState("Hanuman")
    const[person,setperson]=useState({
        name:"vishnu",
        number:3425354,
        email:"vishvar2004@gmail.com"
    })
    const[Things,setThings]=useState(["watch","car","bat","key"])
    return(
        <div>
            <button onClick={()=>{{setname("vishnu vardhan")}}}>chnange name</button>
            <button onClick={()=>{{setperson({name:"mahitha",number:33333444456,email:"mahitha@.com"})}}}>change person</button>
            <button onClick={()=>{{setThings(["bus","train","cycle"])}}}>change Things</button>
            <p>{name}</p>
            <p>{person.name}-{person.number}-{person.email}</p>
        <ul>{Things.map((user,i)=>{
            return <li key={i}>{user}</li>
        })}</ul>
        </div>
    )
}