import { useState } from "react"

export const Sheep=()=>{
    const[name,setname]=useState("Rambouillet")
    const[info,setinfo]=useState({
        Scientificname: "Ovis aries",
        Lifespan: "10 - 12 years",
        Length: "1.2 - 1.8 m"
    })
    const[favfood,setfood]=useState(["grasses", "legumes","forbs"])
    return(
        <div>
            <button onClick={()=>{setname("Zwartbles")}}>display name</button>
            <button onClick={()=>{setinfo({Scientificname:"Aries",Lifespan:"13 - 16 years",Length:"2.2 - 3.8 m"})}}>display info</button>
            <button onClick={()=>{setfood(["Sorghum","Maize","Broken rice","Jowar","Soya bean cake"])}}>display favfood</button>
        <h3>animal name:{name}</h3>
        <h3>{info.Scientificname}-{info.Lifespan}-{info.Length}</h3>
        <ul>{favfood.map((favfood,i)=>{
            return <li key={i}>{favfood}</li>
        })}</ul>
        </div>
    )
}