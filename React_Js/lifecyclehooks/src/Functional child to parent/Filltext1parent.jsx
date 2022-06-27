import React from 'react'
import { useState } from 'react'
import Filltext1child from './Filltext1child'

export const Filltext1parent = () => {
    const [filltextinfo,setFilltextinfo]=useState([])
    const receivechildtoparent=(filltextinfo)=>{
        setFilltextinfo(filltextinfo)
    }
  return (
    <div>
      <Filltext1child getdata={receivechildtoparent}/>
      <table border={1}>
        <thead>
            <tr>
                <th>fname</th>
                <th>lname</th>
            </tr>
        </thead>
        <tbody>
            {filltextinfo.map((user,i)=>{
                return (
                    <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Filltext1parent
