import { useState } from "react"

export const StudentsFuncComp=()=>{
    const[myname,setmyname]=useState("vanitha");
    const[employee,setemployee]=useState({
        fname:"hareesh",
        lname:"kumar",
        email:"hari@gmail.com"
    })
    const[users,setusers]=useState(["manoj","ram","sam","sundar"]);
    return <div>
        <button onClick={()=>{setmyname("vanithamunikrishna")}}>changename</button>
        <button onClick={()=>{setemployee({fname:"harish",lname:"reddy",email:"harish@gmail.com"})}}>changeobjectfullname</button>
        <button onClick={()=>{setusers(["manchumanoj","ramkrishna","sairam","samantha","sundarajulu"])}}>changearraynames</button>
        <h1>my name is :{myname}</h1>
        <h2>{employee.fname}{employee.lname}</h2>

        <ul>
            {users.map((use,i)=>{
                return <li key={i}>{use}</li>
            })}
        </ul>
    </div>
}