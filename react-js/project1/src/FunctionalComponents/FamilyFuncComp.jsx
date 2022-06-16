import { useState } from "react"

export const FamilyFuncComp=()=>{
    const[name,setname]=useState("poojitha")
    const[members,setmembers]=useState({
        fname:"moorthy",
        lname:"reddy"
    })
    const[users,setusers]=useState(["chandhu","sai","deepthi","vidya"])
    return <div>
        <button onClick={()=>{setname("poojithareddy")}}>changename</button>
        <button onClick={()=>{setmembers({fname:"ram",lname:"moorthy"})}}>changeobjectfullname</button>
        <button onClick={()=>{setusers(["chandhini-perumalpalli","sai-paradarami","deepthi-bangalore","vidya-hydrabad"])}}>changearraynames</button>
        <u>myname is :{name}</u>
        <i>{members.fname}-{members.lname}</i>
        <ul>
            {users.map((use,i)=>{
                return <li key={i}>{use}</li>
            })}
        </ul>
    </div>
}