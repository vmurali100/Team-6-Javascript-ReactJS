import { useState } from "react"

export const AlbumsFunc2 =({message,person,album})=>{
    const[]=useState()

    return(
        <div>
            <p>hii AlbumsFunc2</p>
            <p>{message}</p>
            <p>{person.userId} {person.id} {person.title}</p>

            <ul>
                <table border="1">
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                    {album.map((album,i)=>{
                    return <tr>
                        <td>{album.userId}</td>
                        <td>{album.id}</td>
                        <td>{album.title}</td>
                    </tr>
                })}
                    </tbody>
                </table>
                
            </ul>
        </div>
    )
}