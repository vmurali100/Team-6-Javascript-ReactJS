import React from 'react'
import { useState } from 'react'
import Albchild from './Albchild'

export const Albparent = () => {
    const [albdetails, setalbm] = useState([])
    const receivealbchildtoparent=(albdetails)=>(
        setalbm(albdetails)
    )
  return (
    <div>
        <Albchild getdata={receivealbchildtoparent}/>
        <table border={1}>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                </tr>
            </thead>
           <tbody>
           {albdetails.map((user,i)=>{
                return <tr key={i}>
                    <td>{user.userId}</td>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                </tr>
            })}
           </tbody>
        </table>
    </div>
  )
}
export default Albparent
