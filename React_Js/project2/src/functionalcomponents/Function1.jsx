import { useState } from "react"

export const Function1 = () => {
    const [myname, setmyname]= useState("PADMAJA");
    const [person, setperson]= useState({
        fname:"M",
        lname:"Padmaja",
        email:"padhu@gmail.com"
    })
    const [users, setusers]= useState(["DMS REDDY","MANJULA","Padmaja"]);
    return <div>
        <button onClick={()=>{setmyname("PADHU")}}>Change name</button>
        <button onClick={()=>{setperson({fname:"MM",lname:"Padmajapadhu",email:"mpadhu25@gmail.com"})}}>Change details</button>
        <button onClick={()=>{setusers(["man","women","male"])}}>Change users</button>
        
        
        <h2>My Name is : {myname}</h2>

        <p>{person.fname} - {person.lname} - {person.email}</p>
        
        <ul>
            {users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}