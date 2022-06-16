import { useState } from "react"

export const Deer=()=>{
    const[name,setname]=useState("deer")
    const[animal,setanimal]=useState({
        Speed:"60 - 80 km/h",
        Family:" Cervidae",
        Size:"90-211 pounds, males are between 150-310"
    })
    const[color,setcolor]=useState(["between red and brown","chocolate brown","gray to reddish brown"])
    return(
        <div>
        <button onClick={()=>setname("elk")}>display name</button>
        <button onClick={()=>setanimal({Speed:"80 - 100 km/h",Family:"Goldfuss",Size:"190-311 pounds, males are between 250-410"})}>display animal info</button>
        <button onClick={()=>setcolor(["dark brown"])}>display animal color</button>
        <h1> animal name:{name}</h1>
        <p>{animal.Speed}-{animal.Family}-{animal.Size}</p>
        <ul>
            {
                color.map((color,i)=>{
                    return <li key={i}>{color}</li>
                })
            }
        </ul>
        </div>
    )
}