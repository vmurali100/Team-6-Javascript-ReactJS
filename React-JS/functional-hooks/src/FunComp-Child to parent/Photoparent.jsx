import React from 'react'
import { useState } from 'react'
import Photochild from './Photochild'

export const Photoparent = () => {
    const [photos, setphotos] = useState([])
    const receivephotochildtoparent=(photos)=>(
        setphotos(photos)
    )
  return (
    <div>
        <Photochild getdata={receivephotochildtoparent}/>
       {photos.length>0 &&  <table border={1}>
            <thead>
                <tr>
                    <th>albumId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>url</th>
                    <th>thumbnailurl</th>
                </tr>
            </thead>
            <tbody>
                {photos.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.albumId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.url}</td>
                        <td>{user.thumbnailurl}</td>
                    </tr>
                })}
            </tbody>
        </table>}
    </div>
  )
}
export default Photoparent