import { useState } from "react"

export const Funcsample2= () => {
   const[myName,setMyname]=useState("Radha")
   const[myDetails,setmyDetails]=useState({
    fname:"Radha",
    lname:"Boppana"
   })
   const [users,setusers]=useState(["students","workers","people","childrens"])
   
    return(
        
        <div>
            <button onClick={()=>{{setMyname("srinivas")}}}>displayName</button>
            <button onClick={()=>{{setmyDetails({fname:"Srinivas",lname:"Boppana"})}}}>change details</button>
            <button onClick={()=>{{setusers(["people","students","kids"])}}}>change users</button>
            <h2>hello-{myName}</h2>
            <h3>{myDetails.fname}-{myDetails.lname}</h3>
            <ul>{users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}