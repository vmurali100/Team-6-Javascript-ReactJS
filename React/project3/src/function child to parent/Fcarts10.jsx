import { useState } from "react"
import { Fcartschild10 } from "./Fcartschild10"

export const Fcarts10 =()=>{
    const[cartinfo,getcartinfo]=useState([])
    const getDataFromChild=(cartsDetails)=>{
        getcartinfo(cartsDetails)
    }
    return(
        <div>
            <Fcartschild10 getCarts={getDataFromChild}/>
            <p>data from child</p>
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