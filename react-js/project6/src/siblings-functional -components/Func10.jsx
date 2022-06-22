import { useState } from "react"

export const Func10=({village,district,country})=>{
    const[]=useState()
    return(
        <div>
            <h1>{village}</h1>
            <h2>{district.fname}{district.lname}</h2>
            <ul>
                {country.map((coun,i)=>{
                    return <li key={i}>{coun}</li>
                })}
            </ul>
        </div>
    )
}