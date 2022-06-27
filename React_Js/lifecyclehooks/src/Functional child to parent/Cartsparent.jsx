import React from 'react'
import { useState } from 'react'
import Cartschild from './Cartschild'

export const Cartsparent = () => {
    const[cartinfo,setCartinfo]=useState([])
    const receivechildtoparent=(cartinfo)=>(
        setCartinfo(cartinfo)
    )
  return (
    
    <div>
      <Cartschild getdata={receivechildtoparent}/>
      <table border={1}>
      <thead>
            <tr>
                <th>id</th>
                <th>userId</th>
                <th>date</th>
                <th>__v</th>
            </tr>
        </thead>
        <tbody>
            {cartinfo.map((user,i)=>{
                return(
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.userId}</td>
                        <td>{user.date}</td>
                        <td>{user.__v}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Cartsparent
