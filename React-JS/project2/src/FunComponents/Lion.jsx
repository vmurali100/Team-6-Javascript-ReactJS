import { useState } from "react"

export const Lion=()=>{
    const[name,setname]=useState("Asiatic Lion")
    const[info,setinfo]=useState({
        Scientificname:"Panthera leo persica",
        Size:"110 to 120 kg",
        Lifespan:"16 to 18 years"
    })
    const[Favfoods,setfood]=useState(["Chital", "Nilgai", "Sambhar", "Buffaloes","Goats"])
    return(
        <div>
            <button onClick={()=>{setname("Masai Lion")}}>display name</button>
            <button onClick={()=>{setinfo({Scientificname:"Aleo persica",Size:"190 to 220 kg",Lifespan:"19 to 22 years"})}}>display info</button>
            <button onClick={()=>{setfood([ "hares", "turtles", "mice", "lizards", "wild hogs"," wild dogs", "antelopes", "cheetahs", "buffaloes", "leopards", "crocodiles",])}}>display Favfoods</button>
            <h3>animal name:{name}</h3>
            <h2>{info.Scientificname}-{info.Size}-{info.Lifespan}</h2>
            <ul>{Favfoods.map((Favfoods,i)=>{
                return <li key={i}>{Favfoods}</li>
            })}</ul>
        </div>
    )
}