import { useState } from "react"

export const Sample7FunComp = () =>{
    const [myName, setmyName]=useState("Alivelumangamma")
    const [student, setStudent]=useState({
        name:"Srinivas",
        age:34,
        address: "Santha Sai Twoers",
        city: "Hyderabad",
        state: "Telangana"
    })
    const [Name, setName]=useState(["Ravi","Vasu","Tharun"])
    return(
        <div>
            <button onClick={()=>{setmyName("Tirumala")}}>Display Name</button>
            <button onClick={()=>{setStudent({name:"Srividya",age:"30",address:"Hyderabad",state:"AP"})}}>Display Student</button>
            <button onClick={()=>{setName(["Tharun","Vidya","Kranthi"])}}>Display Name</button>
            <h2>My Name is : {myName}</h2>
            <p>{student.name}-{student.age}-{student.address}-{student.city}-{student.state}</p>
            <ul>{Name.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}