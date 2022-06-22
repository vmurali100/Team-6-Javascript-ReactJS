import React,{useState} from "react"

export const PostsFun2=({message,person,posts})=>{
    const[]=useState()
    return(
        <div>
            <p>{message}</p>
            <p>{person.fname} {person.lname}</p>
            <table border={1}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
} 