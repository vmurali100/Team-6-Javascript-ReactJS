import { useState } from "react"

export const BikeFuncComp=()=>{
    //react hooks -variable and changefunction create same time
    const[myName,setMyname]=useState("nithya");
    const [person,setperson]=useState({
        fname:"mani",
        lname:"kanta",
        email:"mani@gmail.com"
    })
    const[users,setusers]=useState(["hari","nani","thanu"]);
    return <div>
        
        <button onClick={()=>{setMyname("nithyamani")}}>changemyname</button>
        <button onClick={()=>{setperson({fname:"nithya",lname:"reddy"})}}>changeobjectname</button>
        <button onClick={()=>{setusers(["prasd","nanireddy","rajtharun"])}}>changearra</button>
        <h2>my name is :{myName} </h2>

        <p>{person.fname}-{person.lname}</p>

        <ul>{users.map((user,i)=>{
            return <li key={i}>{user}</li>
        })}
        </ul>
    </div>
}