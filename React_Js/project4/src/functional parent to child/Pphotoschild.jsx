import { useState } from "react"

export const Pphotoschild =({photos})=>{
    const[]=useState()
    return (
        <div>
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
                    {photos.map((user,i)=>{
                        return <tr>
                            <th>{user.albumId}</th>
                            <th>{user.id}</th>
                            <th>{user.title}</th>
                            <th>{user.url}</th>
                            <th>{user.thumbnailUrl}</th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    ) 
}