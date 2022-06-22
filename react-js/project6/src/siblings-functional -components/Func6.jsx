import { useState } from "react"

export const Func6=({student,teacher,school})=>{
    const[]=useState()
    return(
        <div>
            <p>{student}</p>
            <p>{teacher.fname}{teacher.lname}</p>
            <ul>
                {school.map((sc,i)=>{
                    return <li key={i}>{sc}</li>
                })}
            </ul>
        </div>
    )
}