import React from 'react';
import { useState } from 'react';
import Childhook3 from './Childhook3';

const Parenthook3 = () => {
    const [todinfo,setTodinfo]=useState([])
    const receivetodfromchild=(todos)=>{
        setTodinfo(todos)
    }
    return <div>
        <Childhook3 sendtod={receivetodfromchild}/>
        <table border="1">
            <thead>
                <tr>
                    <th>userid</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                {todinfo.map((to,i)=>{
                    return <tr key={i}>
                        <td>{to.userId}</td>
                        <td>{to.id}</td>
                        <td>{to.title}</td>
                        <td>{to.completed}</td>

                    </tr>
                })}
            </tbody>
        </table>
    </div>;
}



export default Parenthook3;