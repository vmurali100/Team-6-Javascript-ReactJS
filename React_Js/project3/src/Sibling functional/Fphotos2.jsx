import { useState } from "react"

export const Fphotos2=({message,person,photos})=>{
    const[]=useState()
    return(
        <div>
            <p>Fphotos2</p>
            <p>{message}</p>
            <p>{person.fathername} {person.mothername}</p>
            <table border={1}>
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
                    {photos.map((user,i) => {
                        return <tr>
                            <td>{user.albumId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.url}</td>
                            <td>{user.thumbnailUrl}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}