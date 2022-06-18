import { useState } from "react"
import { CartChild } from "./CartChild"

export const CartParent = ()=>{
    const[cartinfo, getCartinfo]=useState([])
    const getDataFromChild=(cartDetails)=>{
        getCartinfo(cartDetails)
    }
    return (
        <div>
            <CartChild getCarts={getDataFromChild}/>
            <p>Data From Cart Child</p>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>date</th>
                        <th>__v</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {cartinfo.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.date}</td>
                            <td>{user.__v}</td>
                            <td>{user.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}