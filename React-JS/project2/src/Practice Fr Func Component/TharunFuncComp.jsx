import { useState } from "react"

export const TharunFuncComp = ()=>{
    const [myName,setMyname]=useState("Ram")
    const[Person,setPerson]=useState({
        fname:"Sai",
        lname:"Jayasankar"
    })
    const[users,setusers]=useState(["Chittoor","Chennai","Bangalore","Hydrabad","Dhelhi","Mumbai"])

    return (
        <div>
            <button onClick={()=>{setMyname("RamCharan")}}>ChangeMyname</button>
            <button onClick={()=>{setPerson({fname:"SAIKIRAN",lname:"Ronaldo"})}}>ChangeMyPerson</button>
            <button onClick={()=>{setusers(["Ladak","Goa","Pondy","Munnar","Agra"])}}>Changeusers</button>
            <h2>my name is :{myName}</h2>
            <p>{Person.fname}-{Person.lname}</p>
            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>
        </div>
    )
}