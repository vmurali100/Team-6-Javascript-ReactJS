import React,{useState} from 'react'
import Childs1 from './Childs1'

const Parents1 = () => {
    const[UsersInfo,setUsersInfo] = useState([])
    const receivedatafromchild=(todos)=>{
        setUsersInfo(todos)
    }
  return (
    <div>
       
        <Childs1 getUsers={receivedatafromchild}/>
        <p>Parents1</p>
            {UsersInfo.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersInfo.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                            <td>{user.completed}</td>
                        </tr>
                    })}
                </tbody>
            </table>)}
            
            
    </div>
  )
}

export default Parents1