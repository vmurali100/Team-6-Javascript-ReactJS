import { useState } from "react"

export const Horse=()=>{
    const[name,setname]=useState("Shire horse")
    const[info,setinfo]=useState({
        Height:"173-190 cm ",
        Weight:"900-1100 kg",
    })
    const[colors,setcolors]=useState(["bay", "black", "brown" ,"grey"])
    return(
        <div>
            <button onClick={()=>{setname("Clydesdale horse")}}>display name</button>
            <button onClick={()=>{setinfo({Height:" 1.6-1.8 m",Weight:"700-1000 kg"})}}>display info</button>
            <button onClick={()=>{setcolors(["deep mahogany brown","brown","gray", "black"])}}>display colors</button>
            <h3>animal name:{name}</h3>
            <h2>{info.Height}-{info.Weight}</h2>
            <ul>{colors.map((colors,i)=>{
                return <li key={i}>{colors}</li>
            })}</ul>
        </div>
    )
}