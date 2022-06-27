import React from 'react';
import { useState } from 'react';
import Childhook from './Childhook';

const Parenthook = () => {
    const[userinfo,setUserinfo]=useState([])
    const receivefromchild=(usersid)=>{
        setUserinfo(usersid)
    }
    return (<div>
        <Childhook sendUser={receivefromchild}/>
        {userinfo.length > 0 && (<table border="1">
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>id</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {userinfo.map((us,i)=>{
                        return <tr key={i}>
                            <td>{us.fname}</td>
                            <td>{us.lname}</td>
                            <td>{us.id}</td>
                            <td>{us.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        )}
        
            
        
    </div>
    )
}



export default Parenthook;