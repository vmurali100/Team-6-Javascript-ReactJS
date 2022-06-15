import { useState } from "react"

export const Funcsample4 =()=>{
    const[myName,setMyname]=useState("Pawan kalyan")
    const[mobile,setmobile]=useState({
        name:"m13",
        brand:"samsung",
        color:"black"
    })
    const[places,setplaces]=useState(["america","england","japan"])
    return(
        <div>
            <button onClick={()=>{{setMyname("kalyan")}}}>change name</button>
            <button onClick={()=>{{setmobile({name:"12 pro max",brand:"apple",color:"white"})}}}>change mobildetails</button>
            <button onClick={()=>{{setplaces(["usa","dubai","mumbai"])}}}>change places</button>
            <p>{myName}</p>
            <p>{mobile.name}-{mobile.brand}-{mobile.color}</p>
            <ul>{places.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}