import { useState } from "react"

export const JaiFuncComp = () => {
    const[myName,setMyname]=useState("Joseph")
    const[Person,setPerson]=useState({
        fname:"Roman",
        lname:"Sai",
        email:"Roman@gamil.com",
        city:"London"
    })

    const [users,setusers]=useState(["Suresh","Bharath","RDS","Deelip","Sakthi"])
    return(
        <div>
            <button onClick={()=>{setMyname("ThalapathyVijay")}}>ChangeMyName</button>

            <button onClick={()=>{setPerson({fname:"Mahesh",lname:"babu",email:"MB@gmail.com",city:"AndraPradesh"})}}>Display Change Person</button>

            <button onClick={()=>{setusers(["Sachin","Virat","Dhoni","Rohit","iShan","Surya","Rajat"])}}>Display Change Users</button>

            <h2>My Name is:{myName}</h2>
            <p>{Person.fname}-{Person.lname}-{Person.email}-{Person.city}</p>

        <ul>
            {users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
        </div>
    )
}