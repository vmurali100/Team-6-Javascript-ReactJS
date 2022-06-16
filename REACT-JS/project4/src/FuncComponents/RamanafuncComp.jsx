import { useState } from "react"

export const RamanafuncComp=()=>{
    const[myName,setMyName]=useState("chinna")
    const[person,setperson]=useState({
        fname:"geetha",
        lname:"sree",
        email:"geethasree@gmail.com"
    })
    const[users,setusers]=useState(["chennai","kerala","mumbai","tamil nadu"])
    return<div>
        <button onclick={()=>{setperson({fname:"geetha",lname:"sree",email:"geethasree@gmail.com"})}}>display person details</button>

        <button onclick={()=>{setusers(["venkat","gopal","santhosh","raju"])}}>display array</button>

        <button onclick={()=>{setMyName("swarnalatha")}}>change name</button>

        <h2>my name is :{myName}</h2>
        <p>{person.fname}-{person.lname}-{person.email}</p>

        <ul>
            {users.map((user,i)=>{
                return<li key={i}>{user}</li>
            })}
        </ul>
    
    </div>
}