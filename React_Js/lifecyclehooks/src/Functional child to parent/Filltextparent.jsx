import React from 'react'
import { useState } from 'react'
import Filltextchild from './Filltextchild'

export const Filltextparent = () => {
    const [filltextinfo,setFilltextinfo]=useState([])
    const receivechildtoparent=(filltextinfo)=>{
        setFilltextinfo(filltextinfo)
    }
  return (
    <div>
      <Filltextchild getdata={receivechildtoparent}/>
      <table border={1}>
        <thead>
            <tr>
                <th>fname</th>
                <th>lname</th>
                <th>tel</th>
                <th>address</th>
                <th>city</th>
                <th>state</th>
                <th>zip</th>
            </tr>
        </thead>
        <tbody>
            {filltextinfo.map((user,i)=>{
                return (
                    <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.tel}</td>
                        <td>{user.address}</td>
                        <td>{user.city}</td>
                        <td>{user.state}</td>
                        <td>{user.zip}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Filltextparent
