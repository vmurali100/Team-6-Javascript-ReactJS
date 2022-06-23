import { useState } from "react"
import { Filltext6Child } from "./Filltext6Child"

export const Filltext6Albums =()=>{
    const [userAlbums,setuseralbums]=useState([])
    const recievedata = (userAlbumsData)=>{
        setuseralbums(userAlbumsData)

    }
    return(
        <div>
            <Filltext6Child getdata={setuseralbums}/>
            <table border="1">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <thead>
                    {userAlbums.map((user,i)=>{
                        return <tr>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                        </tr>
                    })}
                </thead>
            </table>
        </div>
    )
}