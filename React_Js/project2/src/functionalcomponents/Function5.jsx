import { useState } from "react"

export const Function5 =()=>{
    const [vegetable,setvegetable]=useState("carrot")
    const [vegetablesdetails,setvegetablesdetails]=useState({
        color:"orange",
        shape:"cylindrical",
        onekg:"30rupees"
    })
    const [vegetablesnames,setvegetablesnames]=useState(["leafy","bitruit","ladiesfinger","bringal"])
    return <div>
        <button onClick={()=>{setvegetable("lefyvegetable")}}>change vegetable</button>
        <button onClick={()=>{setvegetablesdetails({ color:"green",shape:"leafs",onekg:"10rupees"})}}>change details</button>
        <button onClick={()=>{setvegetablesnames(["cucumber","pumpkin","capsicum","mushroom","cabbage"])}}>change names</button>

        <h2>My vegetable is: {vegetable}</h2>

        <p>{vegetablesdetails.color} - {vegetablesdetails.shape} - {vegetablesdetails.onekg}</p>

        <ul>
            {vegetablesnames.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}