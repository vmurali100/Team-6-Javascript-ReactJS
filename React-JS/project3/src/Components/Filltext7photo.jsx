import { useState } from "react"
import { Filltext7Child } from "./Filltext7Child"

export const  Filltext7photo =()=>{
    const [Alluserphotos,setAlluserphotos]=useState([])
    const recievedata = (userphoto)=>{
        setAlluserphotos(userphoto) 
    } 
    return(
        <div>
            <Filltext7Child getdata={setAlluserphotos}/>
            <table border="1">
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
                    {Alluserphotos.map((user,i)=>{
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
