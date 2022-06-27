import React,{useState} from 'react'
import Childs3 from './Childs3'


const Parents3 = () => {
    const[UsersInfo,setUsersInfo] = useState([])
    const receivedatafromchild=(Filltexts1)=>{
        setUsersInfo(Filltexts1)
    }
  return (
    <div>
       
        <Childs3 getUsers={receivedatafromchild}/>
        <p>Parents3</p>
            {UsersInfo.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersInfo.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    })}
                </tbody>
            </table>)}
            
            
    </div>
  )
}

export default Parents3