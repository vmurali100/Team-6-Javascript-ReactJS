import React from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../slices/userSlice2'
const Userstable2 = () => {
    const allusers = useSelector((state) => state.userInfo.users)
    const dispatch= useDispatch()
    const handledleteUser=(i)=>{
        dispatch(deleteUser(i))
    }
    const handleEdit=(i)=>{
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
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {allusers.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td><button onClick={()=>{handleEdit(i)}}>edit</button></td>
                        <td><button onClick={()=>{handledleteUser(i)}}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Userstable2