import { useState } from "react"

export const Funcsample7=()=>{
    const[myvillage, setvillage]=useState("tiruvur")
const[myphone,setphone]=useState({
    name:"12 pro max",
    brand:"apple",
    color:"red"
})
const[colors,setcolors]=useState(["red","blue","green","yellow"])
return(
    <div>
        <button onClick={()=>{{setvillage("akkapalem")}}}>showvillage</button>
        <button onClick={()=>{{setphone({name:"iphone 6s",brand:"apple",color:"gold"})}}}>showphone</button>
        <button onClick={()=>{setcolors(["pink","orange","grey"])}}>showcolor</button>
        <p>{myvillage}</p>
        <p>{myphone.name}-{myphone.brand}-{myphone.color}</p>
        <ul>{colors.map((user,i)=>{
            return <li key={i}>{user}</li>
        })}</ul>
    </div>
)
}