import { useState } from "react"
import { AlbumChild } from "./AlbumChild"

export const AlbumParent = () =>{
    const [albumsInfo, getalbumsInfo]=useState([])
    const getDataFromChild=(albumsdetails)=>{
        getalbumsInfo(albumsdetails)
    }
    return (
        <div>
            <AlbumChild getAlbums={getDataFromChild}/>
            <p>Data From Albums Child</p>
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