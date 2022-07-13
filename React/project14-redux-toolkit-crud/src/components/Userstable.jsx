import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../slices/userSlice'


const Userstable = () => {
    const allusers = useSelector((state) => state.usersInfo.users)
    const dispatch = useDispatch()
    const handledeleteUser=(i)=>{
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
                    <tr>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {allusers.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td><button onClick={()=>{handleEdituser(i)}}>edit</button></td>
                            <td><button onClick={() => {handledeleteUser(i)}}>delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Userstable