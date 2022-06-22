import { useState } from "react"

export const Fcomments2=({message,person,comments})=>{
    const[]=useState()
    return(
        <div>
            <p>Fcomments1</p>
            <p>{message}</p>
            <p>{person.fathername} {person.mothername}</p>
            <table border={1}>
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
                    {comments.map((user,i)=>{
                        return<tr>
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