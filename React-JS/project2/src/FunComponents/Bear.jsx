import { useState } from "react"

export const Bear =()=>{
    const[myname,setmyname]=useState("bear")
    const[animal,setanimal]=useState({
        Scientificname:"Ursidae",
        Lifespan:"Giant panda: 20 years",
    })
   const [users,setusers]=useState(["black","brown","cinnamon"]) 
   return(
    <div>
        <button onClick={()=>{setmyname("panda")}}>display name</button>
        <button onClick={()=>{setanimal({Scientificname:"Ursidae",Lifespan:"Giant: 20-30 years"})}}>display info</button>
        <button onClick={()=>{setusers(["blond","blue-gray","white"])}}>display the bear color</button>
        <h1>my name is:{myname}</h1>
        <p>{animal.Scientificname}-{animal.Lifespan}</p>
        <ul>
            {users.map((users,i)=>{
                return <li key={i}>{users}</li>
            })}
        </ul>
    </div>
   )    
}