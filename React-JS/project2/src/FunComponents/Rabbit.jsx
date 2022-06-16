import { useState } from "react"

export const Rabbit=()=>{
    const[name,setname]=useState("Dutch lop")
    const[info,setinfo]=useState({
        Size:"2 to 4 pounds",
        Lifespan:"Up to 10 years",
        Dailysleep:"8.4 hours "
    })
    const[color,setcolor]=useState([ "Black", "Blue", "Chocolate", "Lilac", "Ruby-Eyed White","Blue-Eyed White"])
    return(
        <div>
            <button onClick={()=>{setname("Mini Lop")}}>display name</button>
            <button onClick={()=>{setinfo({Size:"2 to 3 pounds",Lifespan:"Up to 15 years",Dailysleep:"9.4 hours"})}}>display info</button>
            <button onClick={()=>{setcolor(["Black", "Blue", "Chocolate", "Lilac", "White"])}}>display color</button>
            <h3>animal name:{name}</h3>
            <h3>{info.Size}-{info.Lifespan}-{info.Dailysleep}</h3>
            <ul>{color.map((color,i)=>{
                return <li key={i}>{color}</li>
            })}</ul>
        </div>
    )
}