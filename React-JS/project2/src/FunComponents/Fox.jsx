import { useState } from "react"

export const Fox=()=>{
    const [name,setname]=useState(" Red fox")
    const [info,setinfo]=useState({
        Lifespan:"Lifespan:3-4 years",
        Height:"Height:35-50 cm",
        Scientificname:"Scientificname:Vulpes vulpes"
    })
    const[Favfoods,setfood]=useState(["rodents","rabbits","birds","amphibians","fruit"])
    return(
        <div>
            <button onClick={()=>{setname("Arctic fox")}}>display name</button>
            <button onClick={()=>{setinfo({Lifespan:"Lifespan:4-6 years",Height:"Height- 25-30 cm",Scientificname:"Scientificname:Vulpes lagopus"})}}>display info</button>
            <button onClick={()=>{setfood(["Birds","Lemming","Squirrels"])}}>display Favfoods</button>
            <h3>animal name:{name}</h3>
            <h3>{info.Lifespan}-{info.Height}-{info.Scientificname}</h3>
            <ul>{Favfoods.map((Favfoods,i)=>{
                return <li key={i}>{Favfoods}</li>
            })}</ul>
        </div>
    )
}