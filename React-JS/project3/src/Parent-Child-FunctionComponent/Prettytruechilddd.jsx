import { useState } from "react"

export const Prettytruechilddd=({prettydetails})=>{
const[]=useState()
return(
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>username</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {prettydetails.map((user,i)=>{
                    return <tr>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
)
}