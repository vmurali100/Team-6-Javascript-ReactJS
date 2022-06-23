import { useState } from "react"

export const CommentsFunc2 =({message,person,comments})=>{
    const[]=useState()

    return(
        <div>
            <p>Hii Comments</p>
            <p>{message}</p>
            <p>{person.fname}{person.lname}</p>

            <ul>
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
                        {comments.map((user,i)=>{
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
            </ul>
        </div>
    )
}