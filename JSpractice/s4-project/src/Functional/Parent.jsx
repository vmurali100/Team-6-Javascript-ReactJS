import React from 'react'
import { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[albumsinfo,setalbumsinfo]=useState([])
    const receivealbumsfromchild=(albums)=>{
        setalbumsinfo(albums)
    }
  return (
    <div>
      <Child getData={receivealbumsfromchild}/>
      <table border={1}>
        <thead>
            <tr>
                <th>name</th>
                <th>age</th>
            </tr>
        </thead>
        <tbody>
            {albumsinfo.map((user,i)=>{
                return <tr>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
            })}
        </tbody>
      </table>
      
    </div>
  )
}

export default Parent
