import { useState } from "react";

export const Elephant=()=>{
    const [animalname,setname]=useState("African bush elephant")
    const [animalinfo,setinfo]=useState({
    Lifespan:"African bush elephant: 60-70 years",
    Height:", African bush elephant: 3.2 m",
    Length: "African bush elephant: 6.5-8.5 m"
})
const [colors,setcolor]=useState(["grayish to brown","black to brown","gray to black"])
return(
    <div>
        <button onClick={()=>{setname("Asian elephant")}}>display animal name</button>
        <button onClick={()=>{setinfo({Lifespan:"Asian elephant: 48 years",Height:"Asian elephant: 2.8 m",Length:"Asian elephant: 5.5-6.5 m"})}}>display animal info</button>
        <button onClick={()=>{setcolor(["gray","lack color","brownish to reddish"])}}>display animal colors</button>
        <h3>animal name:{animalname}</h3>
        <p>{animalinfo.Lifespan}-{animalinfo.Height}-{animalinfo.Length}</p>
        <ul>{colors.map((colors,i)=>{
            return <li key={i}>{colors}</li>
        })}</ul>
    </div>
)
}