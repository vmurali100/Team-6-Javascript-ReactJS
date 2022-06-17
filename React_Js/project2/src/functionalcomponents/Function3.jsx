import { useState } from "react"

export const Function3 =()=>{
    const [height,setheight]=useState("five feets")
    const [person,setperson]=useState({
        width:"thirtytwo",
        color:"black",
        gender:"male"
    })
    const [personnames,setpersonnames]=useState(["lohith","harshitha","sonitha","hethan reddy"])
    return <div>
        <button onClick={()=>{setheight("six feets")}}>change height</button>
        <button onClick={()=>{setperson({width:"thirty",color:"white",gender:"female"})}}>change person</button>
        <button onClick={()=>{setpersonnames(["yaswanth","hemanth","pavan","harish","vamsi"])}}>change names</button>

        <h2>My Height is: {height}</h2>

        <p>{person.width} - {person.color} - {person.gender}</p>

        <ul>
            {personnames.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}