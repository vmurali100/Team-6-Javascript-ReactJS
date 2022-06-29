import React from 'react'
import { useState } from 'react'
import { AlbumsChildFun } from './AlbumsChildFun'

export const AlbumsParentFun = () => {
    const [Albumsdetails ,setAlbumsdetails]=useState([])
    const getdatatochild =(AlbumsParentFun)=>{
        setAlbumsdetails(AlbumsParentFun)
    }
  return (
    <div>
        <AlbumsChildFun getdata={getdatatochild}/>
        <table border="1">
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>tiitle</th>
                    
                </tr>
            </thead>
            <tbody>
                {Albumsdetails.map((user,i)=>{
                    return(
                        <tr key={i}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}
