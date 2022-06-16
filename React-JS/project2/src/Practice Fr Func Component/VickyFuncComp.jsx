import { useState } from "react"

export const VickyFuncComp = () => {

    const [myName, setMyname] = useState("Vikki")
    const [person,setPerson] =useState({
        fname:"Rajat",
        lname:"Pattidar",
        college:"PVKN"
    })

    const [users,setusers]= useState(["Rehaman","Dheena","Harish","SAdik","Raju"])
    return (
        <div>
            <button onClick={() => { setMyname("Vignesh") }}>Change My name</button>

            <button onClick={()=>{setPerson({fname:"Dinesh",lname:"Karthik",college:"Sitams"})}}>Display Change Person</button>

             <button onClick={()=>{setusers(["Samson","BUttler","Stokes","Ruturaj","JAdeja","Hasaranga"])}}>Display Change Users</button>
             
            <h2>My Name is: {myName}</h2>
            <p>{person.fname}-{person.lname}-{person.college}</p>

            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>
        </div>
    )
}