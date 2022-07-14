import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from './userSlice'

const Usertable = () => {
    const allusers= useSelector((state)=>state.usersInfo.users)
    const dispatch=useDispatch()
    const handledeleteUser=(i)=>{
        dispatch(deleteUser(i))
    }
    const handleeditUser=(i)=>{
        var info={
            isEdit:true,
            index:i
        }
        dispatch(editUser(info))
    }
  return (
    <div>
      <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {allusers.map((user,i)=>{
                return <tr key={i}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td><button onClick={()=>{handleeditUser(i)}}>Edit</button></td>
                    <td><button onClick={()=>{handledeleteUser(i)}}>Delete</button></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Usertable
