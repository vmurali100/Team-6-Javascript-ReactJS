import { useState } from "react"

export const PostsFunc2 =({message,person,posts})=>{
    const[]=useState()

    return(
        <div>
            <p>hiii</p>
            <p>{message}</p>
            <p>{person.fname}{person.lname}</p>
            <ul>
                <table border="1">
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
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
            </ul>
        </div>
    )
}