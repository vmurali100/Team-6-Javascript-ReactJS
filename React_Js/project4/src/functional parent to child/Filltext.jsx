import { useState } from "react"

export const Filltext =()=>{
    const[filltext,setfilltext]=useState(allusers)
    const sendDataToChild=(parentdetails)=>{

    }
    return(
        <div>
            <button onClick={sendDataToChild}>send data to child</button>
            <p>userdetails from parent</p>
            <FilltextChild parentdetails={filltext}/>
        </div>
    )
}