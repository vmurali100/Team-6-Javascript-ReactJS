import { useState } from "react"
import { PhotosChild } from "./PhotosChild"

export const PhotosParent =()=>{
    const [photosinfo, getphotosInfo]=useState([])
    const reciveDataFromChild=(photosDetails)=>{
        getphotosInfo(photosDetails)
    }
    return(
        <div>
            <PhotosChild getData={reciveDataFromChild}/>
            
            <p>Data From Photos Child</p>
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
                    {photosinfo.map((user)=>{
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