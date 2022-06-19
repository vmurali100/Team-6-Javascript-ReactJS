import { useState } from "react"

export const PhotosChild9 =({users,person,message})=>{
    const[]=useState()
    return(
        <div>
            {Object.values(person).length >0 && <p>person details from parent:{person.fname}-{person.lname}</p> }
            {message && <p>message from parent:{message}</p>}
            {users.length >0 && 
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
                        {users.map((user)=>{
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
            }
            
        </div>
    )
}