import { useState } from "react"

export const Dog=()=>{
    const [name,setname]=useState("Bailey dog")
    const[animal,setanimal]=useState({
        Lifespan:"10-13 years",
        Family:"Canidae"
    })
    const[color,setcolor]=useState(["black","brown","white","red"])
    return(
        <div>
            <button onClick={()=>{setname("charlie dog")}}>display animal name</button>
            <button onClick={()=>{setanimal({Lifespan:"15-23 years",Family:"Aanidae"})}}>display animal info</button>
            <button onClick={()=>{setcolor(["Red","Brown"])}}>display animal colors</button>
            <h3>animal name:{name}</h3>
            <p>{animal.Lifespan}-{animal.Family}</p>
            <ul>
                {color.map((color,i)=>{
                    return <li key={i}>{color}</li>
                })}
            </ul>
        </div>
    )
}