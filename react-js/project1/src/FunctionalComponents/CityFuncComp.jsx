import { useState } from "react"

export const CityFuncComp=()=>{
    const[myname,setname]=useState("nirmala")
    const[teacher,setteacher]=useState({
        fname:"ramana",
        lname:"murthy"
    })
    const[viewer,setviewer]=useState(["narmadha","moseena","lalitha"])
    return <div>
        <button onClick={()=>{setname("nirmalareddy")}}>changename</button>
        <button onClick={()=>{setteacher({fname:"rami",lname:"reddy"})}}>changeobjectfullname</button>
        <button onClick={()=>{setviewer(["narmadhareddy","moseenashaik","lalithakumari"])}}>changearraynames</button>
        <h1>my name is:{myname}</h1>
        <p>{teacher.fname}{teacher.lname}</p>

        <ul>
            {viewer.map((view,i)=>{
                return <li key={i}>{view}</li>
            })}
        </ul>
    </div>
}