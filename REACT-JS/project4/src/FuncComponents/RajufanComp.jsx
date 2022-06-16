import { useState } from "react";

export const RajufanComp=()=>{
    const[myName,setMyName]=useState("sunil")
    const[person,setperson]=useState({
        fname:"harish",
        lname:"kumar",
        email:"harishkumar@gmail.com"

    })
    const[users,setusers]=useState(["state","district","mandal","taluk","panchayuth","village"])

    return<div>
        <button onClick={()=>{setperson({fname:"harish",lname:"kumar",email:"harishkumar@gmail.com"})}}>display person details</button>

        <button onClick={()=>{setusers(["raju","sayedd","dheena","santhosh","mansur"])}}>display array</button>

        <button onClick={()=>{setMyName(["naveenkumar"])}}>change name</button>

        <h1>my name is:{myName}</h1>

        <p>{person.fname}-{person.lname}-{person.email}</p>

        <ul>
            {users.map((user,i)=>{
                return<li key={i}>{user}</li>
            })}
        </ul>


    </div>
}