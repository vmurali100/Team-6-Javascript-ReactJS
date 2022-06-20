import { useState } from "react"
import {Photoschild} from "./Photoschild"
export const Photosparent=()=>{
    const[photoinfo,setphotoinfo]=useState([])
    const receivephotosfromchild=(photosdetails)=>{
        setphotoinfo(photosdetails)
    }
    return(
        <div>
            <Photoschild getdata={receivephotosfromchild}/>
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
                {
                 photoinfo.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.albumId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.url}</td>
                        <td>{user.thumbnailUrl}</td>
                    </tr>
                 })   
                }
                </tbody>
            </table>
        </div>
    )
}
export default Photoschild