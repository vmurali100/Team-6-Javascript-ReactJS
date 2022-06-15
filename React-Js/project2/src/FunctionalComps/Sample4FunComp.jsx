import { useState } from "react"

export const Sample4FunCompe = () =>{

    const [mycity, setmyCity]=useState("Hyderabad")
    const [myState, setmyState]=useState({
        statename: "Telengana",
        address: "Santha Sai Towers"
    })
    const [Names, setNames]=useState(["Nijampet","LB Nagar","Dilsuk Nagar"])
    return(
        <div>
            <button onClick={()=>{setmyCity("AP")}}>Display City</button>

            <button onClick={()=>{setmyState({statename:"AndhraPradesh",address:"Nagayalanka"})}}>Display State</button>

            <button onClick={()=>{setNames(["Avanigadda","Challapalli","Mopidevi"])}}>Display Names</button>

            <h2>My City Name is: {mycity}</h2>

            <p>{myState.statename}-{myState.address}</p>

            <ul>{Names.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}