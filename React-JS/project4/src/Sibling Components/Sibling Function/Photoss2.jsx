import { useState } from "react"

export const Photoss2=({message,person,photo})=>{
    const[]=useState()
    return(
        <div>
            <p>{message}</p>
            <p>{person.fname} {person.lname}</p>
            <ul>
                {photo.map((photo,i)=>{
                    return <li key={i}>{photo.albumId}{photo.id}{photo.title}{photo.url}{photo.thumbnailUrl}</li>
                })}
            </ul>
        </div>
    )
}