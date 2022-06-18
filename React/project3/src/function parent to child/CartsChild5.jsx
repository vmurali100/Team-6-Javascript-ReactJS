import { useState } from "react"

export const CartsChild5 = ({ usercarts }) => {
    const [] = useState()
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>date</th>
                        <th>date</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {usercarts.map((user) => {
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.date}</td>
                            <td>{user.date}</td>
                            <td>{user.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}