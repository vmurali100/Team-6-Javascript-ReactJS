import React from "react";
import { useState } from "react";

const fComp1=({sendMessage,sendperson,sendusers})=>{
    const[Message,setMessage]=useState("Hiii I am From Funactional Sibling Components");

    const[person,setperson]=useState({
        fname:"Naveen",
        Lname:"Kumar"
    });
    const[users,setusers]=useState(allusers);
    return(
        <div>
            <p>FComp1</p>

            <button onClick={()=>{sendMessage(Message)}}>sendMessage/string</button>
            <button onClick={()=>{sendMessage(person)}}>send Person/object</button>
            <button onClick={()=>{sendMessage(users)}}>send users/Array</button>
        </div>
    )
}

export default fComp1

var allusers=[
  {
    "fname": "Arzak",
    "lname": "Camire"
},
{
    "fname": "Fernando",
    "lname": "Garayan"
},
{
    "fname": "Alicia",
    "lname": "Melendez"
},
{
    "fname": "Leslie",
    "lname": "Comfort"
},
{
    "fname": "Jacalyn",
    "lname": "Eugene"
},
{
    "fname": "Cecelia",
    "lname": "Welte"
},
{
    "fname": "Maegan",
    "lname": "Woolverton"
},
{
    "fname": "Penny",
    "lname": "Kasprzak"
},
{
    "fname": "Dorothy",
    "lname": "Lang"
},
{
    "fname": "Jiby",
    "lname": "Schnell"
}
]