import { useState } from "react"

export const Falbums2=({message,person,albums})=>{
    const[]=useState()
    return(
        <div>
            <p>Falbums2</p>
            <p>{message}</p>
            <p>{person.fathername} {person.mothername}</p>
            <ul>
                {albums.map((user,i)=>{
                    return <li key={i}>{user.userId} {user.id} {user.title}</li>
                })}
            </ul>
        </div>
    )
}