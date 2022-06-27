import React from 'react';
import { useState } from 'react';
import Childhook4 from './Childhook4';

const Parenthook4 = () => {
    const [cartinfo,setCartinfo]=useState([])
    const receivedatafromchild=(cart)=>{
        setCartinfo(cart)
    }
    return <div>
        <Childhook4 sendcart={receivedatafromchild}/>
        <table border="1">
            <thead>
                <tr>
                    <th>id</th>
                    <th>userid</th>
                    <th>date</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {cartinfo.map((ca,i)=>{
                    return <tr>
                        <td>{ca.id}</td>
                        <td>{ca.userId}</td>
                        <td>{ca.date}</td>
                        <td>{ca.email}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>;
}



export default Parenthook4;