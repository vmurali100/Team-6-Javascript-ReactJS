import { useState } from "react"

export const SaikiranFuncComp = ()=>{
    const [myName,setMyname]=useState("josep")
    const [Person,setPerson]=useState({
        fname:"Lokesh",
        lname:"KanakaRaj"
    })
    const [users,setusers]=useState(["Devillirs","Morgan","Root","Wokes","Moin","Cook"])

    return(
        <div>
            <button onClick={()=>{setMyname("ThalapathyVijay")}}>Changemyname</button>
            <button onClick={()=>{setPerson({fname:"Yuvan",lname:"Sankar"})}}>ChangePerson</button>
            <button onClick={()=>{setusers(["MAxiwell","Smith","Finch","Cummins","Stark","Nithin"])}}>ChangeUsers</button>
            <h2>myname is:{myName}</h2>
            <p>{Person.fname}-{Person.lname}</p>
            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>
        </div>
    )
}