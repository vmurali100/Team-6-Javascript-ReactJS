import React,{useState} from 'react'
import Childs2 from './Childs2'

const Parents2 = () => {
    const[UsersInfo,setUsersInfo] = useState([])
    const receivedatafromchild=(Filltexts)=>{
        setUsersInfo(Filltexts)
    }
  return (
    <div>
       
        <Childs2 getUsers={receivedatafromchild}/>
        <p>Parents2</p>
            {UsersInfo.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersInfo.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                        </tr>
                    })}
                </tbody>
            </table>)}
            
            
    </div>
  )
}

export default Parents2