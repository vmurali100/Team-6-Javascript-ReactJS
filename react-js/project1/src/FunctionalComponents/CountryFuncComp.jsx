import { useState } from "react"

 export const CountryFuncComp=()=>{
    const[myname,setname]=useState("india")
    const[capital,setcapital]=useState({
        fname:"india",
        lname:"delhi"
    })
    const[flowers,setflowers]=useState(["jasmine","lilly","lotus"]);
    return <div>
        <button onClick={()=>{setname("indianarmy")}}>changemyname</button>
        <button onClick={()=>{setcapital({fname:"indian",lname:"railway"})}}>changeobjectfullname</button>
        <button onClick={()=>{setflowers(["jasmine-1kg","lilly-3kgs","lotus-2kgs"])}}>changearraynames</button>
        <h1>my name is :{myname}</h1>
        <p>{capital.fname}{capital.lname}</p>

        <ol>
            {flowers.map((flo,i)=>{
                return <li key={i}>{flo}</li>
            })}
        </ol>
    </div>
 }