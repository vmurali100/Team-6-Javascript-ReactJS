import React,{useState} from 'react'
import Childs5 from './Childs5'


const Parents5 = () => {
    const[UsersInfo,setUsersInfo] = useState([])
    const receivedatafromchild=(posts)=>{
        setUsersInfo(posts)
    }
  return (
    <div>
       
        <Childs5 getUsers={receivedatafromchild}/>
        <p>Parents5</p>
            {UsersInfo.length > 0 && (<table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersInfo.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    })}
                </tbody>
            </table>)}
            
            
    </div>
  )
}

export default Parents5