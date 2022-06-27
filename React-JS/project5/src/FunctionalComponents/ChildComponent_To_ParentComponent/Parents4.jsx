import React,{useState} from 'react'
import Childs4 from './Childs4'


const Parents4 = () => {
    const[UsersInfo,setUsersInfo] = useState([])
    const receivedatafromchild=(Filltexts2)=>{
        setUsersInfo(Filltexts2)
    }
  return (
    <div>
       
        <Childs4 getUsers={receivedatafromchild}/>
        <p>Parents4</p>
            {UsersInfo.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>TelePhoneNo</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersInfo.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.tel}</td>
                            <td>{user.address}</td>
                            <td>{user.city}</td>
                            <td>{user.state}</td>
                            <td>{user.zip}</td>
                        </tr>
                    })}
                </tbody>
            </table>)}
            
            
    </div>
  )
}

export default Parents4