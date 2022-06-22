import { useState } from "react"

export const Albumm2=({message,person,album})=>{
    const[]=useState()

    return(
        <div>
            <p>hello alnumm2</p>
            <p>{message}</p>
            <p>{person.userId}-{person.id}-{person.title}</p>
            <ul>
               {album.map((album,i)=>{
                return <li key={i}>{album.userId}{album.id}{album.title}</li>
               })}
            </ul>
        </div>
    )
}