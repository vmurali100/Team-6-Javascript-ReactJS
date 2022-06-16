import { useState } from "react"

export const KidsFuncComp=()=>{
    const[name,setname]=useState("hethvik")
    const[children,setchildren]=useState({
        fname:"kushal",
        lname:"sai"
    })
    const[singers,setsingers]=useState(["geethamadhuri","chitra","balu"])
    return <div>
        <button onClick={()=>{setname("hethvik S/O manikanta")}}>changemyname</button>
        <button onClick={()=>{setchildren({fname:"kaushal",lname:"varma"})}}>changeobjectfullname</button>
        <button onClick={()=>{setsingers(["geetha","chitralahari","balasubramanyam"])}}>changearraynames</button>
        <h1>my name is:{name}</h1>
        <b>{children.fname}-{children.lname}</b>
        <ul>
            {singers.map((sing,i)=>{
                return <li key={i}>{sing}</li>
            })}
        </ul>
    </div>
}