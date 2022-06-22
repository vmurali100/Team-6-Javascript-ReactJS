import { useState } from "react"

export const Fproducts2=({message,person,products})=>{
    const[]=useState()
    return(
        <div>
            <p>Fproducts2</p>
            <p>{message}</p>
            <p>{person.fathername} {person.mothername}</p>
            <ul>
                {products.map((user,i)=>{
                    return <li key={i}>{user.id} {user.title} {user.price}</li>
                })}
            </ul>
        </div>
    )
}