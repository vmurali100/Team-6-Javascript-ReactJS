import React from 'react'
import { useState } from 'react'
import Filltext2child from './Filltext2child'

export const Filltext2parent = () => {
    const [filltextinfo,setFilltextinfo]=useState([])
    const receivechildtoparent=(filltextinfo)=>{
        setFilltextinfo(filltextinfo)
    }
  return (
    <div>
      <Filltext2child getdata={receivechildtoparent}/>
      <table border={1}>
        <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>username</th>
                <th>password</th>
            </tr>
        </thead>
        <tbody>
            {filltextinfo.map((user,i)=>{
                return (
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Filltext2parent
