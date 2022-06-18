import { useState } from "react"

export const Function10 = () => {
    const [myname, setmyname]= useState("Sneha");
    const [person, setperson]= useState({
        fname:"gb",
        lname:"sneha",
        email:"sneha@gmail.com",
        phone:"78642879827187"
    })
    const [users, setusers]= useState(["ABCD","EFGH","IJKL"]);
    return <div>
        <button onClick={()=>{setmyname("latha")}}>Change name</button>
        <button onClick={()=>{setperson({fname:"E",lname:"Sandhya",email:"sandhya@gmail.com",phone:"9876543467"})}}>Change details</button>
        <button onClick={()=>{setusers(["MNOP","QRST","UVWXYZ"])}}>Change users</button>
        
        
        <h2>My Name is : {myname}</h2>

        <p>{person.fname} - {person.lname} - {person.email} - {person.phone}</p>
        
        <ul>
            {users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}