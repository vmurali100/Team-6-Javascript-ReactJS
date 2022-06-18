import { useState } from "react"

export const Function8 =()=>{
    const [electronic,setelectronic]=useState("washingmachine")
    const [electronicdetails,setelectronicdetails]=useState({
        color:"white",
        shape:"square",
        width:"5feets",
        weight:"10kg"
    })
    const [electronicnames,setelectronicnames]=useState(["fan","tv","fridge"])
    return <div>
        <button onClick={()=>{setelectronic("ac")}}>change electronic</button>
        <button onClick={()=>{setelectronicdetails({ color:"blue",shape:"rectangle",width:"4feets",weight:"12kg"})}}>change details</button>
        <button onClick={()=>{setelectronicnames(["cooler","shimly","lights","ups","gizer"])}}>change names</button>

        <h2>My electronic is: {electronic}</h2>

        <p>{electronicdetails.color} - {electronicdetails.shape} - {electronicdetails.width} - {electronicdetails.weight}</p>

        <ul>
            {electronicnames.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}