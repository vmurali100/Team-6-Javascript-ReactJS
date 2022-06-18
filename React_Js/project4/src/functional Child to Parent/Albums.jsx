import { useState } from "react"
import { Albumschild } from "./Albumschild"

export const Albums =()=>{
    const[albuminfo,setalbuminfo]=useState([])
    const receivealbumfromchild=(albumdetails)=>{
        setalbuminfo(albumdetails)
    }
    return(
        <div>
            <Albumschild getData={receivealbumfromchild}/>
            <table border={1}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {albuminfo.map((user,i)=>{
                        return<tr>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}