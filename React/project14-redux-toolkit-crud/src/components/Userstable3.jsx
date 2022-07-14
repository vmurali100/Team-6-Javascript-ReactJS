import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../slices/userSlice3'

const Userstable3 = () => {
    const allusers = useSelector((state) => state.userInfo.users)
  const dispatch=useDispatch()
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
            <table border={1}>
                <thead>
                    <tr>
                        <th>first name</th>
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
                            <td><button onClick={()=>{handleEdituser(i)}}>edit</button></td>
                            <td><button onClick={()=>{handledeleteUser(i)}}>delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Userstable3