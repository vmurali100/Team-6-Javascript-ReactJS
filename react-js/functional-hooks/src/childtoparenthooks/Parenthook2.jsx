import React,{useState} from 'react';
import Childhook2 from './Childhook2';

const Parenthook2 = () => {
    const [cominfo, setCominfo] = useState([])
   const  receivedatafromchild=(comment)=>{
        setCominfo(comment)
    }
    return <div>
        <Childhook2 sendcom={receivedatafromchild}/>
        <table border="1">
            <thead>
                <tr>
                    <th>postId</th>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {cominfo.map((co,i)=>{
                    return <tr key={i}>
                        <td>{co.postId}</td>
                        <td>{co.id}</td>
                        <td>{co.name}</td>
                        <td>{co.email}</td>
                        <td>{co.body}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>;
}



export default Parenthook2;