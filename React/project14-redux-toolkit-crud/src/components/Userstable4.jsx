import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../slices/userSlice4'

const Userstable4 = () => {
    const allusers= useSelector((state)=>state.personInfo.user)
    const dispatch= useDispatch()
    const handledeleteUser=(i)=>{
        dispatch(deleteUser(i))
    }
    const handleEdituser=(i)=>{
        var editInfo={
            isEdit:true,
            index:i
        }
        dispatch(editUser(editInfo))
    }
  return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>edit</th>
                    <th>update</th>
                </tr>
            </thead>
            <tbody>
                {allusers.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td><button onClick={()=>{handleEdituser(i)}}>edit</button></td>
                        <td><button onClick={()=>{handledeleteUser(i)}}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Userstable4