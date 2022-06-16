import { useState } from "react"

export const FestivalfuncComp =()=>{
    const[name,setname]=useState("sankranthi")
    const[ramjan,ramjanfest]=useState({
        fname:"ramjan",
        lname:"festival"
    })
    const[festivals,setfestivals]=useState(["holi","diwali","ugadhi","kanuma","pongal"])
    return <div>
        <button onClick={()=>{setname("pongal")}}>displayname</button>
        <button onClick={()=>{ramjanfest({fname:"moham",lname:"festival"})}}>displayobjectfullname</button>
        <button onClick={()=>{setfestivals(["holi-festival","diwali-for kids","ugadhi-start new year","kanuma-for pray cows","pongal- for prepare sweets"])}}>displayarraynames</button>
        <h1>my name is:{name}</h1>
        <strong>{ramjan.fname}{ramjan.lname}</strong>
        <ol>
          {festivals.map((fest,i)=>{
            return <li key={i}>{fest}</li>
          })}
        </ol>
    </div>
}