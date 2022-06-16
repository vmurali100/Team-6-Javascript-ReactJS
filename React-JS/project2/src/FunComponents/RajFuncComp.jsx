import React from "react"
import { useState } from "react"

export const RajFuncComp = () => {
    const [myName, setMyname] = useState("Sai")
    const [person, setPerson] = useState({
        fname: "J",
        lname: "SaikIran",
        email: "Sai@gmail.com",
    });

    const [users, setusers] = useState(["Dinesh", "Jai", "Vijay", "Pavan", "Chiru"])
    return (
        <div>
            <button onClick={() => { setMyname("SaiChinna") }}>Change My Name</button>
           
             <button onClick={()=> {setPerson({fname:"Josep",lname:"Vijay",email:"vijay@gmail.com"})}}>
                Change Person Names</button>

                <button onClick={()=>{setusers(["Roman","JohnCena","Amrose","Brock","Root"])}}>Change User Names</button>

            <h2>My Name is :{myName}</h2>

            <p>{person.fname}-{person.lname}</p>

            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>
        </div>
    )
}