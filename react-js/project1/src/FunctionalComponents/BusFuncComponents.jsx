import { useState } from "react"

export const BusFuncComponents=()=>{
    const[myname,setname]=useState("haritravels")
    const[person,setperson]=useState({
        fname:"sandhya",
        lname:"yadav"
    })
    const[users,setusers]=useState(["meena","raana","sheela"]);
    return <div>
        <button onClick={()=>{setname("hariandlathatravels")}}>changename</button>
        <button onClick={()=>{setperson({fname:"sandy",lname:"gopi"})}}>changeobjectfullname</button>
         <button onClick={()=>{setusers(["meenakumari","raanachoudari","sheelarani"])}}>changearraynames</button>

        <h2>my name is: {myname}</h2>
        <p>{person.fname}-{person.lname}</p>
        <ul>
            {users.map((use,i)=>{
                return <li key={i}>{use}</li>
            })}
        </ul>
    </div>
}