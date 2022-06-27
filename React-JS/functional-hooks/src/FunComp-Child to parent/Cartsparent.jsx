import React from 'react'
import { useState } from 'react'
import Cartschild from './Cartschild'

export const Cartsparent = () => {
    const [cartdetails, setcart] = useState([])
    const receivedata=(cartdetails)=>(
        setcart(cartdetails)
    )
  return (
    <div>
        <Cartschild getdata={receivedata}/>
        {cartdetails.length>0 && <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>userId</th>
                    <th>date</th>
                </tr>
            </thead>
            <tbody>
                {cartdetails.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.userId}</td>
                        <td>{user.date}</td>
                    </tr>
                })}
            </tbody>
        </table>}
    </div>
  )
}
export default Cartsparent