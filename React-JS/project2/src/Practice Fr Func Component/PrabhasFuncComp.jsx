import { useState } from "react"

export const PrabhasFuncComp = ()=> {
    const [myName,setMyname] = useState("lokesh")
    const[person,setPerson]=useState({
        fname:"Hardik",
        lname:"Pandya",
        state:"Andra"
    })

    const [users, setusers]=useState(["Jayasankar","Babu","Saikiran","Raju","Nikhil","Niranjan"])
     return (
        <div>
            <button onClick={()=>{setMyname("Kanakaraj")}}>ChangeMyName</button>

            <button onClick={()=>{setPerson({fname:"Mohamad",lname:"Siraj",state:"Telangana"})}}>Display Change Person</button>

             <button onClick={()=>{setusers(["Charan","Ajay","Vijay","Anish","SAiKishore","Dinesh"])}}>Display Change users </button>
            <strong>My Name is :{myName}</strong>
            <p>{person.fname}-{person.lname}-{person.state}</p>

            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>
        </div>
     )
}