import { useState } from "react"

export const Child4Comments = ({allcomments})=>{
    const[]=useState ()
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>postId</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {allcomments.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.postId}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.body}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}