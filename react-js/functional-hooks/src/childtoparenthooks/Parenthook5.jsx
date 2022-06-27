import React from 'react';
import { useState } from 'react';
import Childhook5 from './Childhook5';

const Parenthook5 = () => {
    const [photinfo,setPhotinfo]=useState([])
    const receivephotfromchild=(phot)=>{
        setPhotinfo(phot)
    }
    return <div>
        <Childhook5 sendphot={receivephotfromchild}/>
        <table border="1">
            <thead>
                <tr>
                    <th>albumid</th>
                    <th>id</th>
                    <th>title</th>

                </tr>
            </thead>
            <tbody>
                {photinfo.map((ph,i)=>{
                    return <tr key={i}>
                        <td>{ph.albumid}</td>
                        <td>{ph.id}</td>
                        <td>{ph.title}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>;
}



export default Parenthook5;