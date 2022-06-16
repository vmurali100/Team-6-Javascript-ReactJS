import { useState } from "react";

export const DheenafanComp=()=>{
    const[myName,setMyName]=useState("SARATH")
    const[person,setperson]=useState({
        fname:"varma",
        lname:"reddy",
        email:"reddy@gmail.com"

    })
    const[users,setusers]=useState(["bangalore","karnataka","tamilnadu","kolkata","delhi","maharashtra"])

    return<div>
        <button onClick={()=>{setperson({fname:"varma",lname:"reddy",email:"varma@gmail.com"})}}>display person details</button>

        <button onClick={()=>{setusers(["varsham","bhahubali","rajamouli","koratalasiva","thaman"])}}>display array</button>

        <button onClick={()=>{setMyName(["Ranadaggubati"])}}>change name</button>

        <h1>my name is:{myName}</h1>

        <p>{person.fname}-{person.lname}-{person.email}</p>

        <ul>
            {users.map((user,i)=>{
                return<li key={i}>{user}</li>
            })}
        </ul>


    </div>
}