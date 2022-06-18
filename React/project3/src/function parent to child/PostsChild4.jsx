import { useState } from "react"

export const PostsChild4 =({postsDetails})=>{
    const[]=useState()
    return(
        <div>
             <table border={1}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                    </thead>
                <tbody>
                    {postsDetails.map((user)=>{
                        return <tr>
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