import { useState } from "react"

export const Func6=({posts,message,person})=>{
    const[]=useState()
    return(
        <div>
            <p>{message}</p>
            <p>{person.fname}-{person.lname}</p>
            {posts.length > 0 && <table border={1}>
                <thead>
                    <tr>
                        <th>albumId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.albumId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.url}</td>
                            <td>{user.thumbnailUrl}</td>
                        </tr>
                    })}
                </tbody>
            </table>}
           
        </div>
    )
}