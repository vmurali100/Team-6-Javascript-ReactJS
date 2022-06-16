import React, { useState, usestate } from "react";

export const BabyfuncComp = () => {

    // React hooks
    // React hooks syntex

    // const[myName,setMyName] = usestate("Naveen");
    const[myName,setMyName]=useState("Naveen is Handsome guy")
    // const[person,setperson]=usestate({
        const[person,setperson]=usestate({
        fname:"naveen",
        lname:"kumar",
        email:"naveenkumar@gmail.com"
        
    })

    const[users,setusers]=useState("Naveen","gowtham","swarna latha","vineesha","baby","mahalakshmi")

    return <div>
        <button onClick={() => { setMyName("Baby sree")}}>Change My Name</button>

        <h2>My Name is:{myName}</h2>

        <p>{person.fname}-{person.lname}</p>

        <ul>
            {users.map((users,i)=>{
                return<li key={i}>{users}</li>
            })}
        </ul>
    </div>;
};