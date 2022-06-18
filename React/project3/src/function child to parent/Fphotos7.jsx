import { useState } from "react"
import { FphotosChild7 } from "./FphotosChild7"

export const Fphotos7=()=>{
    const[photosInfo,getphotosInfo]=useState([])
    const recieveDataFromChild=(photosDetails)=>{
        getphotosInfo(photosDetails)
    }
    return(
        <div>
            <FphotosChild7 getPhotos={recieveDataFromChild}/>
           <p>data from child</p>
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
                    {photosInfo.map((user)=>{
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