import React from 'react'
import { useState } from 'react'
import Postchild from './Postchild'

export const Postparent = () => {
    const [postinfo,setpostinfo]=useState([])
    const receivechildtoparent=(postinfo)=>{
        setpostinfo(postinfo)
    }
  return (
    <div>
      <Postchild getdata={receivechildtoparent}/>
      <table border={1}>
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            {postinfo.map((user,i)=>{
                return(
                    <tr key={i}>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Postparent
