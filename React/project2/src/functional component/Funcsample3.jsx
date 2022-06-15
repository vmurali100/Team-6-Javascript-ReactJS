import { useState } from "react"

export const Funcsample3 =()=>{
    const[myName,setMyname]=useState("Nageshwarao")
    const[person,setPerson]=useState({
        name:"Deepthi",
        number:"123465r56",
        DOB:"30/10/2000"
    })
    const[fruits,setfruits]=useState(["Apple","Banana","Mango"])
    return(
        <div>
            <button onClick={()=>{setMyname("Savithri")}}>change name</button>
            <button onClick={()=>{setPerson({name:"hari deepthi",number:"9908364128",DOB:"30/10/1999"})}}>change person</button>
            <button onClick={()=>{{setfruits(["Kiwi","custard apple","papaya"])}}}>change fruits</button>
            <h1>{myName}</h1>
            <h4>{person.name}-{person.number}-{person.DOB}</h4>
            <ul>{fruits.map((fruit,i)=>{
                return <li key={i}>{fruit}</li>
            })}</ul>
        </div>
    )
}