import { useState } from "react";

export const FidhaparveenfanComp=()=>{
    const[myName,setMyName]=useState("fidhaparveen")
    const[person,setperson]=useState({
        fname:"Do",
        lname:"pattuma",
        email:"rajubhai@gmail.com"

    })
    const[users,setusers]=useState(["thalambedu","chittoor","paradharami","yadhamari","kandriga","jayanagar"])

    return<div>
        <button onClick={()=>{setperson({fname:"Do",lname:"pattuma",email:"pattuma@gmail.com"})}}>display person details</button>

        <button onClick={()=>{setusers(["revanth","leela","gayathri","neeraja","baby"])}}>display array</button>

        <button onClick={()=>{setMyName(["guruprasad"])}}>change name</button>

        <h1>my name is:{myName}</h1>

        <p>{person.fname}-{person.lname}-{person.email}</p>

        <ul>
            {users.map((user,i)=>{
                return<li key={i}>{user}</li>
            })}
        </ul>


    </div>
}