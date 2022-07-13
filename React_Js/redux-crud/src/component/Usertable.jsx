import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from './userSlice'

const Usertable = () => {
    const allusers=useSelector((state)=>state.usersInfo.users)
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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {allusers.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
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
