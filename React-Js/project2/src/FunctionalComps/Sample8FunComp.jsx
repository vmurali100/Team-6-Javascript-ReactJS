import { useState } from "react"

export const Sample8FunComp = () =>{

    const [myCity, setmyCity]=useState("Hyderabad")
    const [myStates, setmyStates]=useState({
        statename1: "Telengana",
        statename2: "Andhra Pradesh"
    })
    const [Names, setNames]=useState(["Kakinada","Vizag","Annavaram"])
    return(
        <div>
            <button onClick={()=>{setmyCity("AP")}}>Display City</button>

            <button onClick={()=>{setmyStates({statename1:"AndhraPradesh",statename2:"Chithoor"})}}>Display States</button>

            <button onClick={()=>{setNames(["Tirumala","Srikalasthi","Mangapuram"])}}>Display Names</button>

            <h2>My Name is: {myCity}</h2>

            <p>{myStates.statename1}-{myStates.statename2}</p>

            <ul>{Names.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}