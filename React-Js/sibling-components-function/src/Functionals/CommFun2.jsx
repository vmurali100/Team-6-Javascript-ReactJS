import React,{useState} from "react"

export const CommFun2=({message,person,comments})=>{
    const[]=useState()
    return(
        <div>
            <p>{message}</p>
            <p>{person.name} {person.email} {person.state} {person.city}</p>
            <table border={1}>
                <thead>
                    <tr>
                        <th>postId</th>
                        <th>Id</th>
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
        </div>
    )
} 