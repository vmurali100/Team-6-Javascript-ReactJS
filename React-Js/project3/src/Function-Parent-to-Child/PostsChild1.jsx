import { useState } from "react"

export const PostsChild1 =({postsDetail})=>{
    const []=useState()
    
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
                    {postsDetail.map((user,i)=>{
                        return <tr key={i}>
                            <th>{user.userId}</th>
                            <th>{user.id}</th>
                            <th>{user.title}</th>
                            <th>{user.body}</th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}