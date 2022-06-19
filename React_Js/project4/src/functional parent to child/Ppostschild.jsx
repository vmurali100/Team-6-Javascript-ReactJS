import { useState } from "react"

export const Ppostschild = ({ post }) => {
    const [] = useState()
    return (
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
                    {post.map((user, i) => {
                        return <tr>
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