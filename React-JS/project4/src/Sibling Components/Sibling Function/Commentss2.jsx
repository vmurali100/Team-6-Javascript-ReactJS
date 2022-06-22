import { useState } from "react"

export const Commentss2=({message,person,comment})=>{
    const[]=useState()

    return(
        <div>
            <b>{message}</b>
            <p>{person.fname}{person.lname}</p>
            <ul>
            {comment.map((comment,i)=>{
                return <li key={i}>{comment.postId}{comment.id}{comment.name}{comment.email}{comment.body}</li>
            })}
           </ul>
        </div>
    )
}
