import { useState } from "react";

export  function Change(){
const [name,setname]=useState("hello")
const [d,setd]=useState({
    con:"india",
    sta:"A.P"
})
const [e,sete]=useState(["hi","hello","sky"])
return <div>
    <button onClick={()=>{setname ("hi")}}>click</button>

    <button onClick={()=>{setd ({con:"kl",
    sta:"ju"})}}>click</button>
    <button onClick={()=>{sete (["go","back","past"])}}>click</button>
    <h1>{name}</h1>
    <h2>{d.con}-{d.sta}</h2>
    <ul>
        {e.map((user,i)=>{
            return <li key={i}>{user}</li>
        })}
    </ul>
</div>
}