import { useState } from "react"

export const GodfuncComp=()=>{
    const[name,setname]=useState("saraswathi")
    const[god,setgod]=useState({
        fname:"janaki",
        lname:"ramudu"
    })
    const[godress,setgodress]=useState(["lakshmi","saraswathi","uma","ansuyamaatha"])
    return <div>
        <button onClick={()=>{setname("saraswathidevi")}}>displaygodname</button>
        <button onClick={()=>{setgod({fname:"seeta",lname:"rama"})}}>displayobjectfullname</button>
        <button onClick={()=>{setgodress(["lakshmidevi","saraswathidevi","umadevi","anasuyadevi"])}}>displayarraynames</button>
        <h1>my name is:{name}</h1>
        <mark>{god.fname}-{god.lname}</mark>
        <ul>
            {godress.map((god,i)=>{
                return <li key={i}>{god}</li>
            })}
        </ul>

    </div>
} 