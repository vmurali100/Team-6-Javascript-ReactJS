import { useState } from "react"

export const Function6 =()=>{
    const [pet,setpet]=useState("Dog")
    const [petdetails,setpetdetails]=useState({
        color:"white",
        shape:"spine",
        weight:"90pounds"
    })
    const [petsnames,setpetsnames]=useState(["cat","fish","parrot","rabbit"])
    return <div>
        <button onClick={()=>{setpet("cow")}}>change pet</button>
        <button onClick={()=>{setpetdetails({ color:"black",shape:"spectacularly",weight:"1800pounds"})}}>change details</button>
        <button onClick={()=>{setpetsnames(["puppy","goat","horse","sheep","donkey"])}}>change names</button>

        <h2>My pet is: {pet}</h2>

        <p>{petdetails.color} - {petdetails.shape} - {petdetails.weight}</p>

        <ul>
            {petsnames.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}