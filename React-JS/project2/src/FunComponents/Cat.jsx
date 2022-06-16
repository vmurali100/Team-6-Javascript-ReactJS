import { useState } from "react"

export const Cat=()=>{
    const[name,setmyname]=useState("cat")
    const[animal,setanimal]=useState({
        Lifespan:" 12-18 years", 
        Family:"Felidae"
    })
    const [colors,setusers]=useState(["White","Black","grey","cream"])
    return(
        <div>
            <button onClick={()=>{setmyname("tiger")}}>display name </button>
            <button onClick={()=>{setanimal({Lifespan:"50-60 years",Family:"Felidaes"})}}>animal info</button>
            <button onClick={()=>{setusers(["standard orange with black stripes","white with black","dark stripes","golden tiger","red with block"])}}> display color</button>
            <h1>animal name:{name}</h1>
            <p>{animal.Lifespan}-{animal.Family}</p>
            <ul>
                {colors.map((colors,i)=>{
                    return <li key={i}>{colors}</li>
                })}
            </ul>
        </div>
    )
}