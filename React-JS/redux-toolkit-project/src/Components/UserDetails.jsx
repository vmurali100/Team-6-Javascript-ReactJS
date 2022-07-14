import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from './slices/UserSlice'

export const UserDetails = () => {
    const allUsers=useSelector((state)=>state.userInfo.users)
    const dispatch=useDispatch()

    const handleDeleteuser=(i)=>{
        dispatch(deleteUser(i))
    }

    const handleEdituser=(i)=>{
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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {allUsers.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td><button onClick={()=>{handleEdituser(i)}}>Edit</button></td>
                        <td><button onClick={()=>{handleDeleteuser(i)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
export default UserDetails