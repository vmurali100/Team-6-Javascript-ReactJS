import { useState } from "react"

export const JayasankarFuncComp = () => {
    const[myName,setMyname]=useState("NIKKI")
    const[Person,setPerson]=useState ({
        fname:"Sai",
        lname:"Cheeku"
    })
    const [users,setusers]=useState (["Sai","Syam","Sasi","sailu","Supriya","Sandhya"])

    return(
        <div>
            <button onClick={()=>{setMyname("NikkiNiranjan")}}>ChangeMyname</button>
            <button onClick={()=>{setPerson({fname:"Jai",lname:"Sankar"})}}>ChangePerson</button>
            <button onClick={()=>{setusers(["Kiran","KIshore","kissi","Abhi","Prabhu","suman"])}}>ChangeUsers</button>
            <h2>My Name is:{myName}</h2>
            <p>{Person.fname}-{Person.lname}</p>
            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>
        </div>
    )
}