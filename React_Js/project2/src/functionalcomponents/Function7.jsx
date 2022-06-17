import { useState } from "react"

export const Function7 =()=>{
    const [house,sethouse]=useState("Mytili")
    const [housesdetails,sethousesdetails]=useState({
        color:"pink",
        shape:"square",
        feets:"50to50"
    })
    const [housenames,sethousenames]=useState(["sapthagiri","nandakam","rambhagicha"])
    return <div>
        <button onClick={()=>{sethouse("menaka")}}>change house</button>
        <button onClick={()=>{sethousesdetails({ color:"green",shape:"rectangle",feets:"100to100"})}}>change details</button>
        <button onClick={()=>{sethousenames(["manjula","chandra","padmaja","DMS","chandra"])}}>change names</button>

        <h2>My house is: {house}</h2>

        <p>{housesdetails.color} - {housesdetails.shape} - {housesdetails.feets}</p>

        <ul>
            {housenames.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}