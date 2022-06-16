import { useState } from "react"

export const SchoolFuncComp=()=>{
    const[name,setname]=useState("Chaitanya")
    const[schoolname,setschool]=useState({
        fname:"vignana",
        lname:"Deepthi"
    })
    const[place,setplace]=useState(["chittoor","tirupathi","yadamari"]);
    return <div>
        <button onClick={()=>{setname("srichaitanyaschool")}}>changename</button><br></br>
        <button onClick={()=>{setschool({fname:"vidhya",lname:"vikas"})}}>changeobjectfullname</button>
        <button onClick={()=>{setplace(["chittoorbranch","tirupathibranch","yadamaribranch"])}}>changearraynames</button>
        <mark>my name is:{name} </mark><br></br>
        <strong>{schoolname.fname}{schoolname.lname}</strong><br></br>

        <ol>
            {place.map((pla,i)=>{
                return <li key={i}>{pla}</li>
            })}
        </ol>
    </div>
}