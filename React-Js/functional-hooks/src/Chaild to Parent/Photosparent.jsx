import React,{useState} from 'react'
import { Photoschild } from './Photoschild'


export const Photosparent = () => {
    const [photosinfo, setphotosinfo] = useState([])
    const getDatafromchild=(photos)=>{
        setphotosinfo(photos)
    }
  return (
    <div>
        <Photoschild getdata={getDatafromchild}/>
        {photosinfo.length >0 && 
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
                {photosinfo.map((user,i)=>{
                    return <tr key={i}>
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