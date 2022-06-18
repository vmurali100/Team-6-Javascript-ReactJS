import { useState } from "react"
import { FalbumsChild6 } from "./FalbumsChild6"

export const Falbums6=()=>{
    const[albumsInfo,getalbumsInfo]=useState([])
    const getDataFromChild=(albumsdetails)=>{
        getalbumsInfo(albumsdetails)
    }
    return(
        <div>
            <FalbumsChild6  getAlbums={getDataFromChild}/>
            <p>albums details from child</p>
            <table border={1}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {albumsInfo.map((user)=>{
                        return <tr>
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